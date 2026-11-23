#!/usr/bin/env python3
"""
Extractor offline de textos oficiales MINED para KUSKAT.
Lee los 98 recursos definidos en src/data/minedCurriculum/minedResourcesManifest.ts
y los archivos locales en c:/Users/kg-88/OneDrive/Documentos/AntiGravity/MINED,
generando public/mined-texts/index.json, public/mined-texts/{id}.json
y copiando las infografías JPEG a public/mined-texts/media/.
"""

from __future__ import annotations

import json
import os
import re
import shutil
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from pypdf import PdfReader

REPO_ROOT = Path(__file__).resolve().parent.parent
TS_MANIFEST_PATH = REPO_ROOT / "src" / "data" / "minedCurriculum" / "minedResourcesManifest.ts"
MINED_SOURCE_DIR = Path(r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\MINED")
MINED_JSON_MANIFEST_PATH = MINED_SOURCE_DIR / "manifest.json"
OUTPUT_DIR = REPO_ROOT / "public" / "mined-texts"
MEDIA_DIR = OUTPUT_DIR / "media"

DEHYPHEN_RE = re.compile(r"([a-záéíóúüñ])-\s*\n\s*([a-záéíóúüñ])")
MULTI_SPACE_RE = re.compile(r"[ \t\u00a0]+")
MULTI_NEWLINE_RE = re.compile(r"\n{3,}")
HEADING_RE = re.compile(
    r"^(?:Unidad\s+\d+[^\n]{0,90}|Semana\s+\d+[^\n]{0,90}|Lección\s+[\d.]+[^\n]{0,90}|Capítulo\s+[\dIVXLCDM]+[^\n]{0,90}|Tema\s+[\d.]+[^\n]{0,90})$",
    re.IGNORECASE | re.MULTILINE,
)

JPEG_MEDIA_MAP = {
    "MENSAJE INSTITUCIONAL 1.jpeg": "mensaje-institucional-1.jpeg",
    "MENSAJE INSTITUCIONAL 2.jpeg": "mensaje-institucional-2.jpeg",
}


def parse_ts_manifest(ts_path: Path) -> list[dict[str, Any]]:
    content = ts_path.read_text(encoding="utf-8")
    start_marker = "const RAW_MANIFEST_RESOURCES: RawManifestRow[] = ["
    end_marker = "export const MINED_OFFICIAL_RESOURCES"
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    if start_idx == -1 or end_idx == -1:
        raise RuntimeError("No se pudo localizar RAW_MANIFEST_RESOURCES en minedResourcesManifest.ts")

    block = content[start_idx + len(start_marker) : end_idx]

    # Dividir en objetos de primer nivel dentro del array
    entries: list[dict[str, Any]] = []
    obj_matches = re.finditer(r"\{([^{}]*)\}", block, re.DOTALL)
    for idx, match in enumerate(obj_matches, start=1):
        body = match.group(1)

        def extract_str(field: str) -> str | None:
            m = re.search(rf"{field}:\s*'((?:\\'|[^'])*)'", body)
            if m:
                return m.group(1).replace("\\'", "'")
            return None

        def extract_int(field: str, default: int = 0) -> int:
            m = re.search(rf"{field}:\s*(\d+)", body)
            return int(m.group(1)) if m else default

        url = extract_str("url")
        if not url:
            continue

        res_id = f"mined-res-{idx:03d}"
        entries.append(
            {
                "id": res_id,
                "url": url,
                "materia": extract_str("materia") or "",
                "grado": extract_str("grado") or "",
                "filename": extract_str("filename") or "",
                "local_path": extract_str("local_path"),
                "size_bytes": extract_int("size_bytes", 0),
                "status": extract_str("status") or "success",
                "pageCount": extract_int("pageCount", 0),
                "title": extract_str("title") or extract_str("filename") or res_id,
            }
        )

    return entries


def infer_doc_type(filename: str, url: str) -> str:
    lower = f"{filename} {url}".lower()
    if lower.endswith(".jpeg") or lower.endswith(".jpg") or "mensaje institucional" in lower:
        return "Infografía"
    if (
        "programa de estudio" in lower
        or "programas de estudio" in lower
        or "programa " in lower
        or "marco curricular" in lower
    ):
        return "Programa de Estudio"
    if "cuaderno de trabajo" in lower or "cuaderno de ejercicios" in lower:
        return "Cuaderno de Ejercicios"
    if (
        "guía metodológica" in lower
        or "guia metodologica" in lower
        or "guia_metodologica" in lower
        or "guia-metodológica" in lower
        or "gm_desarrollo corporal" in lower
    ):
        return "Guía Metodológica"
    if "lectoescritura" in lower or "orientaciones para la familia" in lower:
        return "Cuadernillo"
    return "Libro de Texto"


def clean_spanish_pdf_text(raw_text: str) -> str:
    if not raw_text:
        return ""
    text = raw_text.replace("\r\n", "\n").replace("\r", "\n")
    # Des-hifenación en español
    text = DEHYPHEN_RE.sub(r"\1\2", text)
    # Limpieza de espacios repetitivos por línea
    lines = [MULTI_SPACE_RE.sub(" ", line).strip() for line in text.split("\n")]
    # Reconstrucción de párrafos: unir líneas que no terminan en puntuación fuerte ni son encabezados
    paragraphs: list[str] = []
    current_buf: list[str] = []

    def flush_buf() -> None:
        if current_buf:
            paragraphs.append(" ".join(current_buf).strip())
            current_buf.clear()

    for line in lines:
        if not line:
            flush_buf()
            continue

        is_list_or_heading = bool(
            re.match(r"^(?:[•\-–—*]|\d+[.)]|[a-zA-Z][.)]|Unidad\s+\d+|Semana\s+\d+|Lección\s+[\d.]+|Capítulo\s+[\dIVX]+|Tema\s+[\d.]+)", line, re.IGNORECASE)
        )
        if is_list_or_heading:
            flush_buf()
            current_buf.append(line)
            if len(line) < 75 and not line.endswith((",", ";")):
                flush_buf()
            continue

        current_buf.append(line)
        if line.endswith((".", ":", "?", "!", "…", "»", '"')) and len(line) < 85:
            flush_buf()

    flush_buf()
    cleaned = "\n\n".join(p for p in paragraphs if p)
    cleaned = MULTI_NEWLINE_RE.sub("\n\n", cleaned).strip()
    return cleaned


def extract_outline_sections(reader: PdfReader, total_pages: int) -> list[dict[str, Any]]:
    raw_items: list[tuple[str, int, int]] = []

    def walk(outline_items: Any, level: int = 1) -> None:
        if not isinstance(outline_items, list):
            return
        for item in outline_items:
            if isinstance(item, list):
                walk(item, level + 1)
                continue
            try:
                title = getattr(item, "title", None) or (item.get("/Title") if isinstance(item, dict) else None)
                if not title:
                    continue
                title_str = MULTI_SPACE_RE.sub(" ", str(title)).strip()
                if not title_str:
                    continue
                page_idx = reader.get_destination_page_number(item)
                if isinstance(page_idx, int) and 0 <= page_idx < total_pages:
                    raw_items.append((title_str, page_idx + 1, min(level, 3)))
            except Exception:
                continue

    try:
        outline = reader.outline
        if outline:
            walk(outline, 1)
    except Exception:
        return []

    if not raw_items:
        return []

    # Ordenar por página de inicio y deduplicar entradas idénticas en la misma página
    seen: set[tuple[str, int]] = set()
    deduped: list[tuple[str, int, int]] = []
    for title_str, start_p, lvl in raw_items:
        key = (title_str.lower(), start_p)
        if key not in seen:
            seen.add(key)
            deduped.append((title_str, start_p, lvl))

    deduped.sort(key=lambda x: x[1])
    if len(deduped) > 120:
        # Conservar principalmente nivel 1-2 si hay demasiados marcadores
        top_level = [x for x in deduped if x[2] <= 2]
        if len(top_level) >= 3:
            deduped = top_level[:120]
        else:
            deduped = deduped[:120]

    sections: list[dict[str, Any]] = []
    for i, (title_str, start_p, lvl) in enumerate(deduped):
        next_start = deduped[i + 1][1] if i + 1 < len(deduped) else total_pages + 1
        end_p = max(start_p, next_start - 1) if next_start > start_p else start_p
        sections.append(
            {
                "id": f"sec-{i + 1:03d}",
                "title": title_str,
                "startPage": start_p,
                "endPage": min(end_p, total_pages),
                "level": lvl,
            }
        )
    return sections


def extract_heuristic_sections(pages: list[dict[str, Any]], total_pages: int) -> list[dict[str, Any]]:
    candidates: list[tuple[str, int]] = []
    seen_titles: set[str] = set()

    for page in pages:
        text = page["text"]
        if not text:
            continue
        for m in HEADING_RE.finditer(text):
            heading = MULTI_SPACE_RE.sub(" ", m.group(0)).strip()
            norm = heading.lower()
            if len(heading) < 5 or norm in seen_titles:
                continue
            seen_titles.add(norm)
            candidates.append((heading, page["pageNumber"]))
            break  # máximo un título principal por página

    if len(candidates) >= 2:
        sections: list[dict[str, Any]] = []
        for i, (heading, start_p) in enumerate(candidates[:80]):
            next_start = candidates[i + 1][1] if i + 1 < len(candidates) else total_pages + 1
            end_p = max(start_p, next_start - 1) if next_start > start_p else start_p
            sections.append(
                {
                    "id": f"sec-{i + 1:03d}",
                    "title": heading,
                    "startPage": start_p,
                    "endPage": min(end_p, total_pages),
                    "level": 1,
                }
            )
        return sections

    # Fallback por bloques de 15 páginas
    if total_pages <= 0:
        return []
    block_sections: list[dict[str, Any]] = []
    block_size = 15
    for idx, start_p in enumerate(range(1, total_pages + 1, block_size), start=1):
        end_p = min(start_p + block_size - 1, total_pages)
        block_sections.append(
            {
                "id": f"sec-{idx:03d}",
                "title": f"Bloque {idx}: Páginas {start_p}–{end_p}",
                "startPage": start_p,
                "endPage": end_p,
                "level": 1,
            }
        )
    return block_sections


def main() -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(line_buffering=True)
    force_reextract = "--force" in sys.argv[1:]

    if not TS_MANIFEST_PATH.exists():
        print(f"ERROR: No existe {TS_MANIFEST_PATH}", file=sys.stderr)
        return 1
    if not MINED_SOURCE_DIR.exists():
        print(f"ERROR: No existe {MINED_SOURCE_DIR}", file=sys.stderr)
        return 1

    ts_entries = parse_ts_manifest(TS_MANIFEST_PATH)
    json_manifest_by_url: dict[str, dict[str, Any]] = {}
    if MINED_JSON_MANIFEST_PATH.exists():
        raw_json = json.loads(MINED_JSON_MANIFEST_PATH.read_text(encoding="utf-8"))
        for row in raw_json:
            json_manifest_by_url[row["url"]] = row

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    MEDIA_DIR.mkdir(parents=True, exist_ok=True)

    index_entries: list[dict[str, Any]] = []
    coverage_summary = {"full": 0, "partial": 0, "image": 0, "unavailable": 0}

    for entry in ts_entries:
        res_id = entry["id"]
        url = entry["url"]
        j_row = json_manifest_by_url.get(url, {})
        local_rel = entry["local_path"] or j_row.get("local_path")
        status = entry["status"]
        filename = entry["filename"]
        doc_type = infer_doc_type(filename, url)

        base_meta = {
            "id": res_id,
            "title": entry["title"],
            "filename": filename,
            "docType": doc_type,
            "materiaOriginal": entry["materia"],
            "gradoOriginal": entry["grado"],
            "officialUrl": url,
            "status": status,
        }

        out_json_path = OUTPUT_DIR / f"{res_id}.json"
        if not force_reextract and out_json_path.exists():
            try:
                cached_payload = json.loads(out_json_path.read_text(encoding="utf-8"))
                cov = cached_payload.get("textCoverage")
                if (
                    cached_payload.get("id") == res_id
                    and cov in coverage_summary
                    and isinstance(cached_payload.get("pages"), list)
                    and isinstance(cached_payload.get("sections"), list)
                ):
                    if cov == "image" and filename.lower().endswith((".jpeg", ".jpg")):
                        target_name = JPEG_MEDIA_MAP.get(filename, filename.lower().replace(" ", "-"))
                        target_path = MEDIA_DIR / target_name
                        source_file = MINED_SOURCE_DIR / Path(local_rel) if local_rel else None
                        if source_file and source_file.exists() and not target_path.exists():
                            shutil.copy2(source_file, target_path)
                    coverage_summary[cov] += 1
                    index_entries.append({k: cached_payload[k] for k in [*base_meta.keys(), "textCoverage", "totalPages", "extractedPages", "coverageRatio", "totalChars", "sectionCount", "mediaUrl"]})
                    print(f"[{res_id}] CACHED ({cov.upper()}) -> {filename}")
                    continue
            except Exception:
                pass

        # Caso 1: Recurso no disponible (HTTP 404 o sin local_path)
        if status != "success" or not local_rel:
            coverage = "unavailable"
            coverage_summary[coverage] += 1
            doc_payload = {
                **base_meta,
                "textCoverage": coverage,
                "totalPages": 0,
                "extractedPages": 0,
                "coverageRatio": 0.0,
                "totalChars": 0,
                "sectionCount": 0,
                "mediaUrl": None,
                "notice": "Este recurso oficial no estuvo disponible para descarga directa (HTTP 404 en el portal de origen del MINED). Puedes consultar su equivalente actualizado en el portal oficial mined.gob.sv.",
                "sections": [],
                "pages": [],
            }
            (OUTPUT_DIR / f"{res_id}.json").write_text(
                json.dumps(doc_payload, ensure_ascii=False, indent=2), encoding="utf-8"
            )
            index_entries.append({k: doc_payload[k] for k in [*base_meta.keys(), "textCoverage", "totalPages", "extractedPages", "coverageRatio", "totalChars", "sectionCount", "mediaUrl"]})
            print(f"[{res_id}] {coverage.upper()} -> {filename}")
            continue

        source_file = MINED_SOURCE_DIR / Path(local_rel)
        if not source_file.exists():
            coverage = "unavailable"
            coverage_summary[coverage] += 1
            doc_payload = {
                **base_meta,
                "textCoverage": coverage,
                "totalPages": 0,
                "extractedPages": 0,
                "coverageRatio": 0.0,
                "totalChars": 0,
                "sectionCount": 0,
                "mediaUrl": None,
                "notice": "Archivo fuente no localizado en el repositorio local MINED.",
                "sections": [],
                "pages": [],
            }
            (OUTPUT_DIR / f"{res_id}.json").write_text(
                json.dumps(doc_payload, ensure_ascii=False, indent=2), encoding="utf-8"
            )
            index_entries.append({k: doc_payload[k] for k in [*base_meta.keys(), "textCoverage", "totalPages", "extractedPages", "coverageRatio", "totalChars", "sectionCount", "mediaUrl"]})
            print(f"[{res_id}] MISSING -> {source_file}")
            continue

        # Caso 2: Infografías JPEG
        if filename.lower().endswith((".jpeg", ".jpg")):
            target_name = JPEG_MEDIA_MAP.get(filename, filename.lower().replace(" ", "-"))
            target_path = MEDIA_DIR / target_name
            shutil.copy2(source_file, target_path)
            media_url = f"/mined-texts/media/{target_name}"
            coverage = "image"
            coverage_summary[coverage] += 1
            doc_payload = {
                **base_meta,
                "textCoverage": coverage,
                "totalPages": 1,
                "extractedPages": 0,
                "coverageRatio": 0.0,
                "totalChars": 0,
                "sectionCount": 1,
                "mediaUrl": media_url,
                "notice": "Infografía oficial del MINED integrada como recurso visual de alta resolución.",
                "sections": [
                    {
                        "id": "sec-001",
                        "title": entry["title"],
                        "startPage": 1,
                        "endPage": 1,
                        "level": 1,
                    }
                ],
                "pages": [
                    {
                        "pageNumber": 1,
                        "text": f"Infografía institucional oficial del Ministerio de Educación (MINED): {entry['title']}.",
                        "charCount": 0,
                    }
                ],
            }
            (OUTPUT_DIR / f"{res_id}.json").write_text(
                json.dumps(doc_payload, ensure_ascii=False, indent=2), encoding="utf-8"
            )
            index_entries.append({k: doc_payload[k] for k in [*base_meta.keys(), "textCoverage", "totalPages", "extractedPages", "coverageRatio", "totalChars", "sectionCount", "mediaUrl"]})
            print(f"[{res_id}] IMAGE -> {media_url}")
            continue

        # Caso 3: PDFs
        reader = PdfReader(str(source_file))
        total_pages = len(reader.pages)
        pages: list[dict[str, Any]] = []
        extracted_pages = 0
        total_chars = 0

        for page_idx, page in enumerate(reader.pages, start=1):
            try:
                raw_txt = page.extract_text() or ""
            except Exception:
                raw_txt = ""
            cleaned = clean_spanish_pdf_text(raw_txt)
            char_count = len(cleaned)
            if char_count >= 20:
                extracted_pages += 1
            total_chars += char_count
            pages.append(
                {
                    "pageNumber": page_idx,
                    "text": cleaned,
                    "charCount": char_count,
                }
            )

        coverage_ratio = round(extracted_pages / total_pages, 4) if total_pages > 0 else 0.0
        if total_pages > 0 and coverage_ratio >= 0.5:
            coverage = "full"
            notice = None
        elif extracted_pages > 0:
            coverage = "partial"
            notice = (
                f"Documento híbrido/ilustrado del MINED: se extrajo texto digital en {extracted_pages} de {total_pages} páginas "
                f"({round(coverage_ratio * 100)}%). Las páginas sin texto corresponden a láminas o ilustraciones escaneadas."
            )
        else:
            coverage = "unavailable"
            notice = "Este PDF contiene únicamente imágenes escaneadas sin capa de texto digital seleccionable."

        coverage_summary[coverage] += 1

        sections = extract_outline_sections(reader, total_pages)
        if not sections:
            sections = extract_heuristic_sections(pages, total_pages)

        doc_payload = {
            **base_meta,
            "textCoverage": coverage,
            "totalPages": total_pages,
            "extractedPages": extracted_pages,
            "coverageRatio": coverage_ratio,
            "totalChars": total_chars,
            "sectionCount": len(sections),
            "mediaUrl": None,
            "notice": notice,
            "sections": sections,
            "pages": pages,
        }
        (OUTPUT_DIR / f"{res_id}.json").write_text(
            json.dumps(doc_payload, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        index_entries.append({k: doc_payload[k] for k in [*base_meta.keys(), "textCoverage", "totalPages", "extractedPages", "coverageRatio", "totalChars", "sectionCount", "mediaUrl"]})
        print(f"[{res_id}] {coverage.upper()} ({extracted_pages}/{total_pages} págs, {len(sections)} secs) -> {filename}")

    index_payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "totalResources": len(index_entries),
        "summary": coverage_summary,
        "resources": index_entries,
    }
    (OUTPUT_DIR / "index.json").write_text(
        json.dumps(index_payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print("\nRESUMEN:", json.dumps(coverage_summary, ensure_ascii=False))
    print(f"Total procesados: {len(index_entries)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
