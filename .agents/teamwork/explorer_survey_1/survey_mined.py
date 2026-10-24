import os
import sys
import json
from pypdf import PdfReader

BASE_DIR = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate"

grades = [
    ("01_Primer_Grado", "Matematica_Numeros_y_Formas"),
    ("02_Segundo_Grado", "Matematica_ESMATE"),
    ("03_Tercer_Grado", "Matematica_ESMATE"),
    ("04_Cuarto_Grado", "Matematica_ESMATE"),
    ("05_Quinto_Grado", "Matematica_ESMATE"),
    ("06_Sexto_Grado", "Matematica_ESMATE"),
    ("07_Septimo_Grado", "Matematica_ESMATE"),
    ("08_Octavo_Grado", "Matematica_ESMATE"),
    ("09_Noveno_Grado", "Matematica_ESMATE"),
    ("10_Primer_Ano_Bachillerato", "Matematica_ESMATE"),
    ("11_Segundo_Ano_Bachillerato", "Matematica_ESMATE"),
]

def inspect_outlines():
    results = {}
    for g_folder, subj_folder in grades:
        path = os.path.join(BASE_DIR, g_folder, subj_folder)
        if not os.path.exists(path):
            print(f"Missing path: {path}")
            continue
        files = [f for f in os.listdir(path) if f.endswith(".pdf")]
        results[g_folder] = {"files": files, "books": {}}
        for f in files:
            fpath = os.path.join(path, f)
            try:
                reader = PdfReader(fpath)
                num_pages = len(reader.pages)
                outline_items = []
                try:
                    outline = reader.outline
                    def extract_outline(outl):
                        items = []
                        for item in outl:
                            if isinstance(item, list):
                                items.extend(extract_outline(item))
                            else:
                                title = getattr(item, 'title', str(item))
                                items.append(title)
                        return items
                    if outline:
                        outline_items = extract_outline(outline)[:40]
                except Exception as oe:
                    outline_items = [f"Error reading outline: {oe}"]

                # Extract text from first 10 pages to find table of contents if outline is empty
                toc_text = ""
                if not outline_items:
                    for p in range(min(12, num_pages)):
                        t = reader.pages[p].extract_text() or ""
                        if "índice" in t.lower() or "unidades" in t.lower() or "unidad 1" in t.lower() or "lección" in t.lower() or "unidad" in t.lower():
                            toc_text += f"\n--- Page {p+1} ---\n" + t[:1500]

                results[g_folder]["books"][f] = {
                    "pages": num_pages,
                    "outline": outline_items,
                    "toc_snippet": toc_text[:3000]
                }
            except Exception as e:
                results[g_folder]["books"][f] = {"error": str(e)}

    with open(r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\mined_esmate_extracted.json", "w", encoding="utf-8") as out:
        json.dump(results, out, ensure_ascii=False, indent=2)

    print("Extraction complete. Written to mined_esmate_extracted.json")

if __name__ == "__main__":
    inspect_outlines()
