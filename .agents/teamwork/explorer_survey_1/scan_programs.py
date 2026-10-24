import os
import re
import json
from pypdf import PdfReader

BASE_DIR = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate\Programas_Generales_por_Ciclo"

programs = []
for root, dirs, files in os.walk(BASE_DIR):
    for f in files:
        if f.endswith(".pdf"):
            programs.append(os.path.join(root, f))

print(f"Found {len(programs)} program PDFs.")

extracted_programs = {}
for ppath in programs:
    relname = os.path.relpath(ppath, BASE_DIR)
    reader = PdfReader(ppath)
    pages = len(reader.pages)
    units_found = []
    for p in range(min(30, pages)):
        text = reader.pages[p].extract_text() or ""
        matches = re.findall(r'(Unidad\s+\d+[:\s\.\-–—]+[^\n\r]+)', text, re.IGNORECASE)
        for m in matches:
            clean_m = re.sub(r'\s+', ' ', m).strip()
            if len(clean_m) > 10 and clean_m not in units_found:
                units_found.append(clean_m)
    extracted_programs[relname] = {
        "pages": pages,
        "units": units_found[:25]
    }

with open(r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\extracted_programs.json", "w", encoding="utf-8") as f:
    json.dump(extracted_programs, f, ensure_ascii=False, indent=2)

print("Saved extracted_programs.json")
