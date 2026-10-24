import os
import re
import json
from pypdf import PdfReader

BASE_DIR = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate"

# Let's inspect the Programas de estudio and Libros de texto for ESMATE
# 1) Programas de estudio:
# - Programa de estudio de segundo y tercer grado.pdf (02_Segundo_Grado/Matematica_ESMATE)
# - Programa de estudio II ciclo.pdf (Programas_Generales_por_Ciclo/Ciclo_II_4to_a_6to/Matematica_ESMATE)
# - Programa de estudio III ciclo.pdf (Programas_Generales_por_Ciclo/Ciclo_III_7mo_a_9no/Matematica_ESMATE)
# - Programa de estudio bachillerato.pdf (Programas_Generales_por_Ciclo/Bachillerato_General/Matematica_ESMATE)

def find_units_in_text(text):
    # Regex to find "Unidad X: <Title>" or "Unidad X\n<Title>"
    matches = re.findall(r'(Unidad\s+\d+[\s:.\-–—]+[^\n\r]+)', text, re.IGNORECASE)
    return matches

def scan_textbooks():
    books_to_scan = [
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

    unit_inventory = {}

    for label, bpath in books_to_scan:
        if not os.path.exists(bpath):
            unit_inventory[label] = {"error": "File not found"}
            continue
        try:
            reader = PdfReader(bpath)
            # Scan pages 1 to 15 (front matter / index)
            front_text = ""
            for p in range(min(15, len(reader.pages))):
                extracted = reader.pages[p].extract_text() or ""
                front_text += f"\n--- Page {p+1} ---\n" + extracted

            # Also search anywhere for "Conozcamos nuestro libro" or "P S C E R"
            methodology_text = ""
            for p in range(min(10, len(reader.pages))):
                t = reader.pages[p].extract_text() or ""
                if "recordemos" in t.lower() or "problema" in t.lower() or "solución" in t.lower() or "conclusión" in t.lower() or "resuelve" in t.lower():
                    methodology_text += f"\n--- Page {p+1} ---\n" + t

            unit_inventory[label] = {
                "pages": len(reader.pages),
                "front_text_sample": front_text[:4000],
                "methodology_sample": methodology_text[:2000]
            }
        except Exception as e:
            unit_inventory[label] = {"error": str(e)}

    with open(r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\textbook_indices.json", "w", encoding="utf-8") as out:
        json.dump(unit_inventory, out, ensure_ascii=False, indent=2)

    print("Index scan complete. Saved to textbook_indices.json")

if __name__ == "__main__":
    scan_textbooks()
