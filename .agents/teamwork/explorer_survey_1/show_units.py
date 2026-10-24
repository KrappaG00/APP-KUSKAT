import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\extracted_toc.json", "r", encoding="utf-8") as f:
    data = json.load(f)

extracted_curriculum = {}

for book_name, pages in data.items():
    curriculum_units = []
    current_unit = None
    
    for p in pages:
        lines = p["lines"]
        idx = 0
        while idx < len(lines):
            line = lines[idx]
            # Match "Unidad 1", "Unidad 2", etc.
            u_match = re.search(r'Unidad\s+(\d+)', line, re.IGNORECASE)
            if u_match:
                u_num = int(u_match.group(1))
                # Title might be on next line or in this line
                u_title = line
                if idx + 1 < len(lines) and not re.search(r'Lecci[oó]n|Unidad', lines[idx+1], re.IGNORECASE):
                    u_title += ": " + lines[idx+1]
                    idx += 1
                current_unit = {
                    "unitNumber": u_num,
                    "title": u_title,
                    "lessons": []
                }
                curriculum_units.append(current_unit)
            elif current_unit is not None:
                l_match = re.search(r'Lecci[oó]n\s+(\d+)[:\s]*(.*)', line, re.IGNORECASE)
                if l_match:
                    current_unit["lessons"].append(line)
            idx += 1
            
    extracted_curriculum[book_name] = curriculum_units

with open(r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\curriculum_units_summary.json", "w", encoding="utf-8") as out:
    json.dump(extracted_curriculum, out, ensure_ascii=False, indent=2)

for book_name, units in extracted_curriculum.items():
    print(f"\n==================== {book_name} ({len(units)} units found in sample) ====================")
    for u in units:
        print(f"  * {u['title']}")
        for l in u['lessons']:
            print(f"      - {l}")
