import os
import re
import json
from pypdf import PdfReader

BASE_DIR = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate"

books = [
    ("1_grado_tomo1", os.path.join(BASE_DIR, "01_Primer_Grado", "Matematica_Numeros_y_Formas", "1.° grado_Números y formas, tomo 1.pdf")),
    ("1_grado_tomo2", os.path.join(BASE_DIR, "01_Primer_Grado", "Matematica_Numeros_y_Formas", "1.° grado_Números y formas, tomo 2.pdf")),
    ("2_grado_tomo1", os.path.join(BASE_DIR, "02_Segundo_Grado", "Matematica_ESMATE", "Libro de texto 2.° grado_Tomo 1.pdf")),
    ("2_grado_tomo2", os.path.join(BASE_DIR, "02_Segundo_Grado", "Matematica_ESMATE", "Libro de texto 2.° grado_Tomo 2.pdf")),
    ("3_grado", os.path.join(BASE_DIR, "03_Tercer_Grado", "Matematica_ESMATE", "Libro de texto 3.° grado.pdf")),
    ("4_grado", os.path.join(BASE_DIR, "04_Cuarto_Grado", "Matematica_ESMATE", "Libro de texto 4.° grado.pdf")),
    ("5_grado", os.path.join(BASE_DIR, "05_Quinto_Grado", "Matematica_ESMATE", "Libro de texto 5.° grado.pdf")),
    ("6_grado", os.path.join(BASE_DIR, "06_Sexto_Grado", "Matematica_ESMATE", "Libro de texto 6.° grado.pdf")),
    ("7_grado", os.path.join(BASE_DIR, "07_Septimo_Grado", "Matematica_ESMATE", "Libro de texto 7.° grado.pdf")),
    ("8_grado", os.path.join(BASE_DIR, "08_Octavo_Grado", "Matematica_ESMATE", "Libro de texto 8.° grado.pdf")),
    ("9_grado", os.path.join(BASE_DIR, "09_Noveno_Grado", "Matematica_ESMATE", "Libro de texto 9.° grado.pdf")),
    ("1_bach", os.path.join(BASE_DIR, "10_Primer_Ano_Bachillerato", "Matematica_ESMATE", "Libro de texto 1.° año de bachillerato.pdf")),
    ("2_bach", os.path.join(BASE_DIR, "11_Segundo_Ano_Bachillerato", "Matematica_ESMATE", "Libro de texto 2.° año de bachillerato.pdf")),
]

results = {}

for name, path in books:
    if not os.path.exists(path):
        continue
    reader = PdfReader(path)
    # Search pages 6 to 14 for Table of contents
    toc_pages = []
    for p in range(5, min(15, len(reader.pages))):
        text = reader.pages[p].extract_text() or ""
        lines = [line.strip() for line in text.split("\n") if line.strip()]
        toc_pages.append({"page": p+1, "lines": lines[:60]})
    results[name] = toc_pages

with open(r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\extracted_toc.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Saved extracted_toc.json")
