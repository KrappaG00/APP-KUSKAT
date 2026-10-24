import os
import re
from pypdf import PdfReader

path = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate\02_Segundo_Grado\Matematica_ESMATE\Programa de estudio de segundo y tercer grado.pdf"
reader = PdfReader(path)
print(f"Total pages: {len(reader.pages)}")

for p in range(min(40, len(reader.pages))):
    text = reader.pages[p].extract_text() or ""
    matches = re.findall(r'(Unidad\s+\d+[:\s\.\-–—]+[^\n\r]+)', text, re.IGNORECASE)
    for m in matches:
        print(f"P{p+1}: {m}")
