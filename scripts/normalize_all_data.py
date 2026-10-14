import os
import sys
import glob
import json
import re

# Set stdout encoding
sys.stdout.reconfigure(encoding='utf-8')

SCRATCH_DIR = r"C:\Users\kg-88\.gemini\antigravity\brain\66e3eae3-025f-45af-8318-7cc6f64e2c48\scratch"
PROJECT_DIR = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT"
OUTPUT_QUESTIONS_DIR = os.path.join(PROJECT_DIR, "public", "data", "questions")
OUTPUT_DATA_DIR = os.path.join(PROJECT_DIR, "public", "data")
OUTPUT_PUBLIC_DIR = os.path.join(PROJECT_DIR, "public")

os.makedirs(OUTPUT_QUESTIONS_DIR, exist_ok=True)

def normalize_options(opts):
    res = []
    if isinstance(opts, dict):
        for k in sorted(opts.keys()):
            val = opts[k]
            res.append({"key": str(k).strip(), "text": str(val).strip()})
    elif isinstance(opts, list):
        for item in opts:
            k = item.get("key") or item.get("letter") or item.get("id") or ""
            t = item.get("text") or ""
            res.append({"key": str(k).strip(), "text": str(t).strip()})
    return res

def clean_text(txt):
    if not txt:
        return ""
    return str(txt).strip()

# ==============================================================================
# 1. PROCESS MATEMATICAS (1.1 - 1.7)
# ==============================================================================
math_meta = [
    ("1.1", "Números Reales"),
    ("1.2", "La Recta Real"),
    ("1.3", "Conjuntos e Intervalos"),
    ("1.4", "Valor Absoluto"),
    ("1.5", "Álgebra"),
    ("1.6", "Geometría y Trigonometría"),
    ("1.7", "Funciones"),
]

all_subtopics_data = {}

print("Processing 1. Matemáticas...")
for code, title in math_meta:
    file_path = os.path.join(SCRATCH_DIR, "zip_5", "src", "data", "math", f"math_{code.replace('.', '_')}.ts")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        idx = content.find(" = ")
        raw_list = json.loads(content[idx + 3:].rstrip(";\n "))

    questions = []
    sections = []
    for q in raw_list:
        sec = clean_text(q.get("sectionTitle", "Preguntas de Matemáticas"))
        if sec and sec not in sections:
            sections.append(sec)
        
        num = q.get("number", len(questions) + 1)
        questions.append({
            "id": f"{code}_q{num}",
            "number": num,
            "subtopicId": code,
            "subjectId": "matematicas",
            "sectionTitle": sec,
            "statement": clean_text(q.get("statement") or q.get("question")),
            "options": normalize_options(q.get("options", [])),
            "correctAnswer": clean_text(q.get("answerKey") or q.get("correctAnswer")),
            "explanation": clean_text(q.get("solutionExplanation") or q.get("explanation", ""))
        })

    all_subtopics_data[code] = {
        "id": code,
        "code": code,
        "title": title,
        "subjectId": "matematicas",
        "questionCount": len(questions),
        "sections": sections,
        "questions": questions
    }
    print(f"  [✓] {code} {title}: {len(questions)} preguntas")

# ==============================================================================
# 2. PROCESS LENGUAJE (2.1 - 2.5)
# ==============================================================================
lenguaje_meta = [
    ("2.1", "Ortografía y Gramática"),
    ("2.2", "Coherencia y Estructura Textual"),
    ("2.3", "Sintaxis"),
    ("2.4", "Metodología y Escritura Académica"),
    ("2.5", "Pragmática y Comprensión Lectora"),
]

print("Processing 2. Lenguaje...")
for code, fallback_title in lenguaje_meta:
    file_path = os.path.join(SCRATCH_DIR, "zip_4", "src", "data", f"lenguaje_{code.replace('.', '_')}.json")
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    title = data.get("title") or fallback_title
    questions = []
    sections = []

    for sec in data.get("sections", []):
        sec_title = clean_text(sec.get("title", ""))
        if sec_title and sec_title not in sections:
            sections.append(sec_title)

        for q in sec.get("questions", []):
            num = q.get("number", len(questions) + 1)
            questions.append({
                "id": f"{code}_q{num}",
                "number": num,
                "subtopicId": code,
                "subjectId": "lenguaje",
                "sectionTitle": sec_title,
                "statement": clean_text(q.get("question") or q.get("statement")),
                "options": normalize_options(q.get("options", [])),
                "correctAnswer": clean_text(q.get("correctAnswer") or q.get("answerKey")),
                "explanation": clean_text(q.get("explanation") or q.get("solutionExplanation", ""))
            })

    all_subtopics_data[code] = {
        "id": code,
        "code": code,
        "title": title,
        "subjectId": "lenguaje",
        "questionCount": len(questions),
        "sections": sections,
        "questions": questions
    }
    print(f"  [✓] {code} {title}: {len(questions)} preguntas")

# ==============================================================================
# 3. PROCESS LITERATURA (3.1 - 3.5)
# ==============================================================================
lit_meta = [
    ("3.1", "Literatura Universal y Europea"),
    ("3.2", "Movimientos del Siglo XIX"),
    ("3.3", "Literatura del Siglo Contemporáneo"),
    ("3.4", "Literatura Latinoamericana"),
    ("3.5", "Literatura Salvadoreña"),
]

print("Processing 3. Literatura...")
for code, fallback_title in lit_meta:
    suffix = code.replace(".", "")
    file_path = os.path.join(SCRATCH_DIR, "zip_3", "public", "data", f"lit{suffix}.json")
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    title = data.get("name") or fallback_title
    questions = []
    sections = []

    for q in data.get("questions", []):
        sec = clean_text(q.get("sectionTitle", "Preguntas de Literatura"))
        if sec and sec not in sections:
            sections.append(sec)

        num = q.get("id", len(questions) + 1)
        questions.append({
            "id": f"{code}_q{num}",
            "number": num,
            "subtopicId": code,
            "subjectId": "literatura",
            "sectionTitle": sec,
            "statement": clean_text(q.get("question") or q.get("statement")),
            "options": normalize_options(q.get("options", [])),
            "correctAnswer": clean_text(q.get("correctAnswer") or q.get("answerKey")),
            "explanation": clean_text(q.get("explanation") or q.get("solutionExplanation", ""))
        })

    all_subtopics_data[code] = {
        "id": code,
        "code": code,
        "title": title,
        "subjectId": "literatura",
        "questionCount": len(questions),
        "sections": sections,
        "questions": questions
    }
    print(f"  [✓] {code} {title}: {len(questions)} preguntas")

# ==============================================================================
# 4. PROCESS CIENCIAS SOCIALES (4.1 - 4.4)
# ==============================================================================
soc_meta = [
    ("4.1", "Historia de El Salvador"),
    ("4.2", "Contexto Mundial"),
    ("4.3", "Sociedad, Cultura y Población"),
    ("4.4", "Derechos y Sociedad Actual"),
]

print("Processing 4. Ciencias Sociales...")
for code, title in soc_meta:
    file_path = os.path.join(SCRATCH_DIR, "zip_2", "src", "data", f"sociales_{code.replace('.', '_')}.json")
    with open(file_path, "r", encoding="utf-8") as f:
        raw_list = json.load(f)

    questions = []
    sections = []

    for q in raw_list:
        sec = clean_text(q.get("sectionTitle", "Preguntas de Ciencias Sociales"))
        if sec and sec not in sections:
            sections.append(sec)

        num = q.get("id", len(questions) + 1)
        questions.append({
            "id": f"{code}_q{num}",
            "number": num,
            "subtopicId": code,
            "subjectId": "sociales",
            "sectionTitle": sec,
            "statement": clean_text(q.get("question") or q.get("statement")),
            "options": normalize_options(q.get("options", [])),
            "correctAnswer": clean_text(q.get("correctAnswer") or q.get("answerKey")),
            "explanation": clean_text(q.get("explanation") or q.get("solutionExplanation", ""))
        })

    all_subtopics_data[code] = {
        "id": code,
        "code": code,
        "title": title,
        "subjectId": "sociales",
        "questionCount": len(questions),
        "sections": sections,
        "questions": questions
    }
    print(f"  [✓] {code} {title}: {len(questions)} preguntas")

# ==============================================================================
# 5. PROCESS CIENCIAS NATURALES (5.1 - 5.4)
# ==============================================================================
nat_meta = [
    ("5.1", "Biología y Seres Vivos"),
    ("5.2", "Química General y Reacciones"),
    ("5.3", "Física General y Mecánica"),
    ("5.4", "Taxonomía y Ecosistemas"),
]

print("Processing 5. Ciencias Naturales...")
for code, title in nat_meta:
    file_path = os.path.join(SCRATCH_DIR, "zip_1", "src", "data", "questions", f"{code.replace('.', '_')}.json")
    with open(file_path, "r", encoding="utf-8") as f:
        raw_list = json.load(f)

    questions = []
    sections = []

    for q in raw_list:
        sec = clean_text(q.get("sectionTitle", "Preguntas de Ciencias Naturales"))
        if sec and sec not in sections:
            sections.append(sec)

        num = q.get("id", len(questions) + 1)
        questions.append({
            "id": f"{code}_q{num}",
            "number": num,
            "subtopicId": code,
            "subjectId": "naturales",
            "sectionTitle": sec,
            "statement": clean_text(q.get("question") or q.get("statement")),
            "options": normalize_options(q.get("options", [])),
            "correctAnswer": clean_text(q.get("correctAnswer") or q.get("answerKey")),
            "explanation": clean_text(q.get("explanation") or q.get("solutionExplanation", ""))
        })

    all_subtopics_data[code] = {
        "id": code,
        "code": code,
        "title": title,
        "subjectId": "naturales",
        "questionCount": len(questions),
        "sections": sections,
        "questions": questions
    }
    print(f"  [✓] {code} {title}: {len(questions)} preguntas")

# ==============================================================================
# SAVE ALL 25 JSON SUBTOPIC FILES
# ==============================================================================
print("\nSaving 25 normalized subtopic JSON files...")
total_saved_q = 0
for code, sub_data in all_subtopics_data.items():
    dest_path = os.path.join(OUTPUT_QUESTIONS_DIR, f"{code}.json")
    with open(dest_path, "w", encoding="utf-8") as f:
        json.dump(sub_data["questions"], f, ensure_ascii=False, indent=2)
    total_saved_q += len(sub_data["questions"])

print(f"Total questions written across 25 subtopics: {total_saved_q}")

# ==============================================================================
# BUILD CURRICULUM.JSON
# ==============================================================================
subjects_def = [
    {
        "id": "matematicas",
        "number": 1,
        "name": "Matemáticas",
        "codeRange": "1.1 al 1.7",
        "description": "Aritmética de reales, recta numérica, teoría de conjuntos e intervalos, valor absoluto, álgebra elemental, geometría, trigonometría y cálculo de funciones.",
        "color": "from-blue-600 to-indigo-700",
        "badgeBg": "bg-blue-100",
        "badgeText": "text-blue-800",
        "borderColor": "border-blue-200",
        "icon": "Calculator",
        "codes": ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7"]
    },
    {
        "id": "lenguaje",
        "number": 2,
        "name": "Lenguaje",
        "codeRange": "2.1 al 2.5",
        "description": "Ortografía acentual y puntual, gramática, morfología, sintaxis, semántica, metodología de investigación y comprensión lectora.",
        "color": "from-emerald-600 to-teal-700",
        "badgeBg": "bg-emerald-100",
        "badgeText": "text-emerald-800",
        "borderColor": "border-emerald-200",
        "icon": "BookOpen",
        "codes": ["2.1", "2.2", "2.3", "2.4", "2.5"]
    },
    {
        "id": "literatura",
        "number": 3,
        "name": "Literatura",
        "codeRange": "3.1 al 3.5",
        "description": "Literatura universal y europea, movimientos del siglo XIX, vanguardismo y contemporáneo, literatura latinoamericana y literatura salvadoreña.",
        "color": "from-purple-600 to-violet-700",
        "badgeBg": "bg-purple-100",
        "badgeText": "text-purple-800",
        "borderColor": "border-purple-200",
        "icon": "Feather",
        "codes": ["3.1", "3.2", "3.3", "3.4", "3.5"]
    },
    {
        "id": "sociales",
        "number": 4,
        "name": "Ciencias Sociales",
        "codeRange": "4.1 al 4.4",
        "description": "Historia prehispánica y contemporánea de El Salvador, contexto mundial e hitos del siglo XX, sociedad, demografía, derechos y constitución.",
        "color": "from-amber-600 to-orange-700",
        "badgeBg": "bg-amber-100",
        "badgeText": "text-amber-800",
        "borderColor": "border-amber-200",
        "icon": "Globe",
        "codes": ["4.1", "4.2", "4.3", "4.4"]
    },
    {
        "id": "naturales",
        "number": 5,
        "name": "Ciencias Naturales",
        "codeRange": "5.1 al 5.4",
        "description": "Biología celular y seres vivos, química inorgánica y estequiometría, cinemática y leyes físicas, ecología y taxonomía.",
        "color": "from-teal-600 to-cyan-700",
        "badgeBg": "bg-teal-100",
        "badgeText": "text-teal-800",
        "borderColor": "border-teal-200",
        "icon": "Atom",
        "codes": ["5.1", "5.2", "5.3", "5.4"]
    }
]

curriculum_subjects = []
for s in subjects_def:
    subs_list = []
    sub_q_sum = 0
    for c in s["codes"]:
        info = all_subtopics_data[c]
        subs_list.append({
            "id": c,
            "code": c,
            "title": info["title"],
            "subjectId": s["id"],
            "questionCount": info["questionCount"],
            "sections": info["sections"]
        })
        sub_q_sum += info["questionCount"]
    
    curriculum_subjects.append({
        "id": s["id"],
        "number": s["number"],
        "name": s["name"],
        "codeRange": s["codeRange"],
        "description": s["description"],
        "totalSubtopics": len(subs_list),
        "totalQuestions": sub_q_sum,
        "color": s["color"],
        "badgeBg": s["badgeBg"],
        "badgeText": s["badgeText"],
        "borderColor": s["borderColor"],
        "icon": s["icon"],
        "subtopics": subs_list
    })

curriculum_payload = {
    "title": "Banco Consolidado de Preguntas de Admisión (UES - AVANZO)",
    "description": "Compendio maestro de 7,500 preguntas con opciones de múltiple elección y solucionario pedagógico.",
    "totalQuestions": total_saved_q,
    "totalSubtopics": len(all_subtopics_data),
    "subjects": curriculum_subjects
}

curriculum_path = os.path.join(OUTPUT_DATA_DIR, "curriculum.json")
with open(curriculum_path, "w", encoding="utf-8") as f:
    json.dump(curriculum_payload, f, ensure_ascii=False, indent=2)

print(f"[✓] curriculum.json saved successfully ({len(curriculum_subjects)} materias, {len(all_subtopics_data)} subtemas, {total_saved_q} preguntas)")

# ==============================================================================
# GENERATE MASTER LATEX DOCUMENT
# ==============================================================================
print("\nGenerating master LaTeX file: banco_preguntas_maestro.tex...")

def escape_latex(text):
    if not text:
        return ""
    # Only escape things that are not math
    # Basic cleanup
    t = text.replace("&", "\\&").replace("%", "\\%").replace("_", "\\_").replace("#", "\\#")
    return t

latex_lines = [
    r"% ==============================================================================",
    r"% BANCO CONSOLIDADO DE PREGUNTAS DE ADMISIÓN (7,500 PREGUNTAS)",
    r"% Universidad de El Salvador / Prueba AVANZO",
    r"% Asignaturas:",
    r"% 1. Matemáticas (1.1 al 1.7) -- 2,100 Preguntas",
    r"% 2. Lenguaje (2.1 al 2.5) -- 1,500 Preguntas",
    r"% 3. Literatura (3.1 al 3.5) -- 1,500 Preguntas",
    r"% 4. Ciencias Sociales (4.1 al 4.4) -- 1,200 Preguntas",
    r"% 5. Ciencias Naturales (5.1 al 5.4) -- 1,200 Preguntas",
    r"% ==============================================================================",
    r"\documentclass[10pt,a4paper]{article}",
    r"\usepackage[utf8]{inputenc}",
    r"\usepackage[T1]{fontenc}",
    r"\usepackage[spanish,es-nodecimaldot]{babel}",
    r"\usepackage{amsmath,amssymb,amsfonts}",
    r"\usepackage{geometry}",
    r"\usepackage{multicol}",
    r"\usepackage{enumitem}",
    r"\usepackage{tcolorbox}",
    r"\usepackage{fancyhdr}",
    r"\usepackage{hyperref}",
    r"\usepackage{titlesec}",
    r"",
    r"\geometry{top=2cm, bottom=2cm, left=1.8cm, right=1.8cm}",
    r"\pagestyle{fancy}",
    r"\fancyhf{}",
    r"\rhead{\small\scshape Banco Maestro de Preguntas}",
    r"\lhead{\small\bfseries UES / AVANZO}",
    r"\cfoot{\thepage}",
    r"\renewcommand{\headrulewidth}{0.4pt}",
    r"",
    r"\begin{document}",
    r"\begin{titlepage}",
    r"\centering",
    r"{\scshape\LARGE UNIVERSIDAD DE EL SALVADOR / PRUEBA AVANZO \par}",
    r"\vspace{1.5cm}",
    r"{\huge\bfseries BANCO GENERAL DE PREGUNTAS (7,500 PREGUNTAS) \par}",
    r"\vspace{0.5cm}",
    r"{\Large\bfseries Compendio Maestro Oficial \par}",
    r"\vspace{1.5cm}",
    r"\begin{tcolorbox}[colback=blue!5!white,colframe=blue!60!black,title=\textbf{RESUMEN DE CONTENIDO}]",
    r"\begin{enumerate}[label=\textbf{\Roman*.}]",
    r"  \item \textbf{Matemáticas} (1.1 al 1.7) -- 2,100 Preguntas",
    r"  \item \textbf{Lenguaje} (2.1 al 2.5) -- 1,500 Preguntas",
    r"  \item \textbf{Literatura} (3.1 al 3.5) -- 1,500 Preguntas",
    r"  \item \textbf{Ciencias Sociales} (4.1 al 4.4) -- 1,200 Preguntas",
    r"  \item \textbf{Ciencias Naturales} (5.1 al 5.4) -- 1,200 Preguntas",
    r"\end{enumerate}",
    r"\end{tcolorbox}",
    r"\vfill",
    r"{\large San Salvador, El Salvador \par}",
    r"{\large \today \par}",
    r"\end{titlepage}",
    r"\tableofcontents",
    r"\newpage",
    r""
]

for s in curriculum_subjects:
    latex_lines.append(f"% ==============================================================================")
    latex_lines.append(f"% MATERIA {s['number']}: {s['name'].upper()}")
    latex_lines.append(f"% ==============================================================================")
    latex_lines.append(f"\\section{{{s['name']} (Módulos {s['codeRange']})}}\n")

    for sub in s["subtopics"]:
        sub_info = all_subtopics_data[sub["code"]]
        latex_lines.append(f"\\subsection{{{sub['code']} {sub['title']}}}\n")

        # Group questions by section
        sec_map = {}
        for q in sub_info["questions"]:
            sec_name = q.get("sectionTitle") or "Preguntas de Evaluación"
            if sec_name not in sec_map:
                sec_map[sec_name] = []
            sec_map[sec_name].append(q)

        for sec_name, q_list in sec_map.items():
            latex_lines.append(f"\\subsubsection*{{{sec_name}}}\n")
            latex_lines.append(r"\begin{enumerate}[label=\textbf{\arabic*.}]")
            if q_list:
                latex_lines.append(f"\\setcounter{{enumi}}{{{q_list[0]['number'] - 1}}}")

            for q in q_list:
                stmt = q["statement"]
                latex_lines.append(f"\\item {stmt}")
                latex_lines.append(r"\begin{enumerate}[label=\textbf{\Alph*)}]")
                latex_lines.append(r"\begin{multicols}{2}")
                for opt in q["options"]:
                    latex_lines.append(f"  \\item {opt['text']}")
                latex_lines.append(r"\end{multicols}")
                latex_lines.append(r"\end{enumerate}")
                latex_lines.append(r"\vspace{0.15cm}")

            latex_lines.append(r"\end{enumerate}\n")

        # Solucionario
        latex_lines.append(r"\vspace{0.4cm}")
        latex_lines.append(f"\\begin{{tcolorbox}}[colback=gray!5!white,colframe=gray!60!black,title=\\textbf{{SOLUCIONARIO -- {sub['code']} {sub['title']}}}]")
        latex_lines.append(r"\begin{multicols}{4}")
        latex_lines.append(r"\begin{enumerate}[label=\textbf{\arabic*.}]")
        for q in sub_info["questions"]:
            ans = q["correctAnswer"]
            latex_lines.append(f"  \\item \\textbf{{{ans}}}")
        latex_lines.append(r"\end{enumerate}")
        latex_lines.append(r"\end{multicols}")
        latex_lines.append(r"\end{tcolorbox}")
        latex_lines.append(r"\newpage\n")

latex_lines.append(r"\end{document}")

master_tex_path = os.path.join(OUTPUT_PUBLIC_DIR, "banco_preguntas_maestro.tex")
with open(master_tex_path, "w", encoding="utf-8") as f:
    f.write("\n".join(latex_lines))

print(f"[✓] banco_preguntas_maestro.tex generated successfully (size: {os.path.getsize(master_tex_path) / 1024:.1f} KB)")
print("\nALL DATA NORMALIZATION COMPLETED SUCCESSFULLY!")
