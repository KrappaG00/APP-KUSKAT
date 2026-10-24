import os
import re
import json
from pypdf import PdfReader

BASE_DIR = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate"

subjects_to_scan = [
    # ESLENGUA
    ("eslengua_2", os.path.join(BASE_DIR, "02_Segundo_Grado", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 2.° grado_tomo 1.pdf")),
    ("eslengua_3", os.path.join(BASE_DIR, "03_Tercer_Grado", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 3.° grado.pdf")),
    ("eslengua_4", os.path.join(BASE_DIR, "04_Cuarto_Grado", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 4.° grado.pdf")),
    ("eslengua_5", os.path.join(BASE_DIR, "05_Quinto_Grado", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 5.° grado.pdf")),
    ("eslengua_6", os.path.join(BASE_DIR, "06_Sexto_Grado", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 6.° grado.pdf")),
    ("eslengua_7", os.path.join(BASE_DIR, "07_Septimo_Grado", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 7.° grado.pdf")),
    ("eslengua_8", os.path.join(BASE_DIR, "08_Octavo_Grado", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 8.° grado.pdf")),
    ("eslengua_9", os.path.join(BASE_DIR, "09_Noveno_Grado", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 9.° grado.pdf")),
    ("eslengua_b1", os.path.join(BASE_DIR, "10_Primer_Ano_Bachillerato", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 1.° año de bachillerato.pdf")),
    ("eslengua_b2", os.path.join(BASE_DIR, "11_Segundo_Ano_Bachillerato", "Lengua_y_Literatura_ESLENGUA", "Libro de texto 2.° año de bachillerato.pdf")),
    
    # Ciencia y Tecnologia
    ("ciencia_2", os.path.join(BASE_DIR, "02_Segundo_Grado", "Ciencia_y_Tecnologia", "Libro de texto 2.° grado_tomo 1.pdf")),
    ("ciencia_3", os.path.join(BASE_DIR, "03_Tercer_Grado", "Ciencia_y_Tecnologia", "Libro de texto 3.° grado.pdf")),
    ("ciencia_4", os.path.join(BASE_DIR, "04_Cuarto_Grado", "Ciencia_y_Tecnologia", "Libro de texto 4.° grado.pdf")),
    ("ciencia_5", os.path.join(BASE_DIR, "05_Quinto_Grado", "Ciencia_y_Tecnologia", "Libro de texto 5.° grado.pdf")),
    ("ciencia_6", os.path.join(BASE_DIR, "06_Sexto_Grado", "Ciencia_y_Tecnologia", "Libro de texto 6.° grado.pdf")),
    ("ciencia_7", os.path.join(BASE_DIR, "07_Septimo_Grado", "Ciencia_y_Tecnologia", "Libro de texto 7.° grado.pdf")),
    ("ciencia_8", os.path.join(BASE_DIR, "08_Octavo_Grado", "Ciencia_y_Tecnologia", "Libro de texto 8.° grado.pdf")),
    ("ciencia_9", os.path.join(BASE_DIR, "09_Noveno_Grado", "Ciencia_y_Tecnologia", "Libro de texto 9.° grado.pdf")),
    ("ciencia_b1", os.path.join(BASE_DIR, "10_Primer_Ano_Bachillerato", "Ciencia_y_Tecnologia", "Libro de texto 1.° año de bachillerato.pdf")),
]

results = {}
for name, path in subjects_to_scan:
    if not os.path.exists(path):
        continue
    try:
        reader = PdfReader(path)
        toc = []
        for p in range(min(12, len(reader.pages))):
            t = reader.pages[p].extract_text() or ""
            for line in t.split("\n"):
                line_s = line.strip()
                if re.search(r'Unidad\s+\d+|Semana\s+\d+', line_s, re.IGNORECASE):
                    toc.append(line_s)
        results[name] = toc[:20]
    except Exception as e:
        results[name] = [str(e)]

with open(r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\other_subjects_toc.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Scanned other subjects successfully.")
