import os
import re
import json

grades_dir = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\src\data\minedCurriculum\grades"

grade_files = [
    ("1-grado", "grade01PrimerGrado.ts"),
    ("2-grado", "grade02SegundoGrado.ts"),
    ("3-grado", "grade03TercerGrado.ts"),
    ("4-grado", "grade04CuartoGrado.ts"),
    ("5-grado", "grade05QuintoGrado.ts"),
    ("6-grado", "grade06SextoGrado.ts"),
    ("7-grado", "grade07SeptimoGrado.ts"),
    ("8-grado", "grade08OctavoGrado.ts"),
    ("9-grado", "grade09NovenoGrado.ts"),
    ("1-bachillerato", "grade10PrimerBach.ts"),
    ("2-bachillerato", "grade11SegundoBach.ts"),
]

total_units = 0
total_lessons = 0
grade_summary = []

for grade_id, fname in grade_files:
    fpath = os.path.join(grades_dir, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find units: createCurriculumUnit
    # Pattern: createCurriculumUnit( 'unit-id', number, 'title', ...
    units = re.findall(r"createCurriculumUnit\s*\(\s*['\"]([^'\"]+)['\"]\s*,\s*(\d+)\s*,\s*['\"]([^'\"]+)['\"]", content)
    
    # Find lessons: createPscerLesson
    # Pattern: createPscerLesson( 'lesson-id', 'lesson-number', 'title',
    lessons = re.findall(r"createPscerLesson\s*\(\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]", content)
    
    # Find customExamples usages
    custom_examples = len(re.findall(r"customExamples", content))
    
    total_units += len(units)
    total_lessons += len(lessons)
    
    grade_summary.append({
        "grade_id": grade_id,
        "file": fname,
        "unit_count": len(units),
        "lesson_count": len(lessons),
        "units": [{"id": u[0], "num": int(u[1]), "title": u[2]} for u in units],
        "lessons": [{"id": l[0], "num": l[1], "title": l[2]} for l in lessons]
    })

print(f"Total Grades: {len(grade_files)}")
print(f"Total Units: {total_units}")
print(f"Total Lessons: {total_lessons}")
print("\nBreakdown by Grade:")
for g in grade_summary:
    print(f"  {g['grade_id']:15} ({g['file']}): {g['unit_count']} units, {g['lesson_count']} lessons")
