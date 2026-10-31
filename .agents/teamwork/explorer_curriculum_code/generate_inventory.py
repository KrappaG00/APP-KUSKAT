import os
import re
import json

grades_dir = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\src\data\minedCurriculum\grades"

grade_files = [
    ("1-grado", "1° Grado", "Primer Ciclo de Básica", "grade01PrimerGrado.ts"),
    ("2-grado", "2° Grado", "Primer Ciclo de Básica", "grade02SegundoGrado.ts"),
    ("3-grado", "3° Grado", "Primer Ciclo de Básica", "grade03TercerGrado.ts"),
    ("4-grado", "4° Grado", "Segundo Ciclo de Básica", "grade04CuartoGrado.ts"),
    ("5-grado", "5° Grado", "Segundo Ciclo de Básica", "grade05QuintoGrado.ts"),
    ("6-grado", "6° Grado", "Segundo Ciclo de Básica", "grade06SextoGrado.ts"),
    ("7-grado", "7° Grado", "Tercer Ciclo de Básica", "grade07SeptimoGrado.ts"),
    ("8-grado", "8° Grado", "Tercer Ciclo de Básica", "grade08OctavoGrado.ts"),
    ("9-grado", "9° Grado", "Tercer Ciclo de Básica", "grade09NovenoGrado.ts"),
    ("1-bachillerato", "1° Bachillerato", "Educación Media", "grade10PrimerBach.ts"),
    ("2-bachillerato", "2° Bachillerato", "Educación Media", "grade11SegundoBach.ts"),
]

# regex to parse createCurriculumUnit
unit_re = re.compile(
    r"createCurriculumUnit\s*\(\s*"
    r"['\"](?P<id>[^'\"]+)['\"]\s*,\s*"
    r"(?P<num>\d+)\s*,\s*"
    r"['\"](?P<title>[^'\"]+)['\"]\s*,\s*"
    r"['\"](?P<gradeId>[^'\"]+)['\"]\s*,\s*"
    r"(?P<tomo>\d+)\s*,\s*"
    r"['\"](?P<summary>[^'\"]+)['\"]\s*,\s*"
    r"\[(?P<comps>[^\]]*)\]\s*,\s*"
    r"(?P<lessonsVar>\w+)"
    r"(?:\s*,\s*(?P<questionsVar>\w+))?"
    r"(?:\s*,\s*(?P<isEval>true|false))?",
    re.DOTALL
)

# regex to parse lesson array definitions: const u1Lessons1G = [ ... ];
# or individual createPscerLesson calls
lesson_call_re = re.compile(
    r"createPscerLesson\s*\(\s*"
    r"['\"](?P<id>[^'\"]+)['\"]\s*,\s*"
    r"['\"](?P<num>[^'\"]+)['\"]\s*,\s*"
    r"['\"](?P<title>[^'\"]+)['\"]\s*,\s*"
    r"(?P<problema>['\"`].*?['\"`])\s*,\s*"
    r"(?P<solucion>['\"`].*?['\"`])\s*,\s*"
    r"(?P<conclusion>['\"`].*?['\"`])\s*,\s*"
    r"(?P<ejemplo>['\"`].*?['\"`])\s*,\s*"
    r"(?P<resuelve>\[[\s\S]*?\])",
    re.DOTALL
)

def count_words(text):
    cleaned = re.sub(r'\$\$[\s\S]*?\$\$', ' ', text)
    cleaned = re.sub(r'\$[^$]*\$', ' ', cleaned)
    cleaned = re.sub(r'\\[a-zA-Z]+', ' ', cleaned)
    cleaned = re.sub(r'[{}()[\]=+*/^_<>|•:;,.!?\'"`-]', ' ', cleaned)
    cleaned = cleaned.strip()
    return len([w for w in cleaned.split() if w]) if cleaned else 0

all_units_data = []

for gid, gname, gcycle, fname in grade_files:
    fpath = os.path.join(grades_dir, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find all lessons in this file
    lessons_in_file = {}
    for lm in lesson_call_re.finditer(content):
        lid = lm.group("id")
        lnum = lm.group("num")
        ltitle = lm.group("title")
        prob = lm.group("problema")[1:-1]
        sol = lm.group("solucion")[1:-1]
        conc = lm.group("conclusion")[1:-1]
        ej = lm.group("ejemplo")[1:-1]
        raw_words = count_words(f"{prob} {sol} {conc} {ej}")
        lessons_in_file[lid] = {
            "id": lid,
            "number": lnum,
            "title": ltitle,
            "raw_words": raw_words
        }

    # Find all unit calls
    for um in unit_re.finditer(content):
        uid = um.group("id")
        unum = int(um.group("num"))
        utitle = um.group("title")
        utomo = int(um.group("tomo"))
        usummary = um.group("summary")
        lvar = um.group("lessonsVar")
        qvar = um.group("questionsVar")
        is_eval = um.group("isEval") == "true" or bool(qvar)

        # find which lessons belong to this unit (matching by prefix or lvar)
        # e.g., u1Lessons1G, u2Lessons1G...
        # let's look for `const <lvar> = [ ... ];`
        lvar_match = re.search(r"const\s+" + re.escape(lvar) + r"\s*=\s*\[([\s\S]*?)\];", content)
        unit_lessons = []
        if lvar_match:
            lvar_content = lvar_match.group(1)
            for lm in lesson_call_re.finditer(lvar_content):
                lid = lm.group("id")
                if lid in lessons_in_file:
                    unit_lessons.append(lessons_in_file[lid])

        all_units_data.append({
            "gradeId": gid,
            "gradeName": gname,
            "gradeCycle": gcycle,
            "file": fname,
            "unitNumber": unum,
            "unitId": uid,
            "unitTitle": utitle,
            "tomo": utomo,
            "summary": usummary,
            "lessonsVar": lvar,
            "hasStaticQuestions": bool(qvar),
            "questionsVar": qvar,
            "lessons": unit_lessons
        })

print(f"Total parsed units: {len(all_units_data)}")
total_l = sum(len(u["lessons"]) for u in all_units_data)
print(f"Total unit lessons linked: {total_l}")

# Write to json artifact for handoff reference
out_path = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_curriculum_code\units_inventory.json"
with open(out_path, "w", encoding="utf-8") as out_f:
    json.dump(all_units_data, out_f, indent=2, ensure_ascii=False)

print(f"Wrote {out_path}")
