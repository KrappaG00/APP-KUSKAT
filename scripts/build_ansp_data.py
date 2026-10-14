# -*- coding: utf-8 -*-
import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

sys.path.append(os.path.join(os.path.dirname(__file__), "ansp_parts"))

from part1_historia import questions_part1
from part2_lenguaje_literatura import questions_part2
from part3_geografia import questions_part3
from part4_socioeconomia_leyes import questions_part4
from part5_matematicas_ofimatica import questions_part5

PROJECT_DIR = r"c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT"
ANSP_DATA_DIR = os.path.join(PROJECT_DIR, "public", "data", "ansp")
ANSP_QUESTIONS_DIR = os.path.join(ANSP_DATA_DIR, "questions")
PUBLIC_DIR = os.path.join(PROJECT_DIR, "public")

os.makedirs(ANSP_QUESTIONS_DIR, exist_ok=True)

all_questions = questions_part1 + questions_part2 + questions_part3 + questions_part4 + questions_part5
print(f"Total ANSP questions merged: {len(all_questions)}")

# Categorize into the 10 subjects of the ANSP Temario
# 1. Historia: 1 to 50
# 2. Lenguaje: 51 to 57, 95 to 98
# 3. Literatura: 58 to 94, 99 to 100
# 4. Geografía: 101 to 150
# 5. Realidad Económica y Social: 151 to 159
# 6. Constitución y Derechos Humanos: 160 to 186
# 7. Legislación Salvadoreña: 187 to 205
# 8. Matemáticas: 206 to 227, 238 to 240
# 9. Estadística: 228 to 237
# 10. Ofimática: 241 to 250

def get_ansp_subject_id(q_num):
    if 1 <= q_num <= 50:
        return "ansp_historia"
    elif 51 <= q_num <= 57 or 95 <= q_num <= 98:
        return "ansp_lenguaje"
    elif (58 <= q_num <= 94) or (99 <= q_num <= 100):
        return "ansp_literatura"
    elif 101 <= q_num <= 150:
        return "ansp_geografia"
    elif 151 <= q_num <= 159:
        return "ansp_economia"
    elif 160 <= q_num <= 186:
        return "ansp_constitucion"
    elif 187 <= q_num <= 205:
        return "ansp_legislacion"
    elif (206 <= q_num <= 227) or (238 <= q_num <= 240):
        return "ansp_matematicas"
    elif 228 <= q_num <= 237:
        return "ansp_estadistica"
    elif 241 <= q_num <= 250:
        return "ansp_ofimatica"
    return "ansp_general"

# Update each question with subjectId and standardized id
for q in all_questions:
    s_id = get_ansp_subject_id(q["number"])
    q["subjectId"] = s_id
    q["id"] = f"ansp_q{q['number']}"

# Write all questions JSON
all_json_path = os.path.join(ANSP_QUESTIONS_DIR, "all.json")
with open(all_json_path, "w", encoding="utf-8") as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

# Define the 10 subjects metadata
ansp_subjects_def = [
    {
        "id": "ansp_historia",
        "number": 1,
        "name": "Historia de El Salvador",
        "codeRange": "1.1 al 1.8",
        "description": "Conquista, Independencia, Insurrección de Anastasio Aquino, Presidentes, Guerra de las 100 Horas, Conflicto Armado, Acuerdos de Paz y Posguerra.",
        "color": "from-amber-600 to-red-700",
        "badgeBg": "bg-amber-100",
        "badgeText": "text-amber-800",
        "borderColor": "border-amber-200",
        "icon": "Landmark",
    },
    {
        "id": "ansp_lenguaje",
        "number": 2,
        "name": "Lenguaje",
        "codeRange": "2.1 al 2.3",
        "description": "Ortografía acentual y literal, redacción coherente, ensayo argumentativo y cualidades de un buen orador.",
        "color": "from-blue-600 to-indigo-700",
        "badgeBg": "bg-blue-100",
        "badgeText": "text-blue-800",
        "borderColor": "border-blue-200",
        "icon": "BookOpen",
    },
    {
        "id": "ansp_literatura",
        "number": 3,
        "name": "Literatura",
        "codeRange": "3.1 al 3.5",
        "description": "Literatura salvadoreña, oralidad y escritura, 'Jícaras Tristes' de Alfredo Espino, 'Romeo y Julieta' de Shakespeare, y 'Cien años de soledad' de García Márquez.",
        "color": "from-purple-600 to-pink-700",
        "badgeBg": "bg-purple-100",
        "badgeText": "text-purple-800",
        "borderColor": "border-purple-200",
        "icon": "Feather",
    },
    {
        "id": "ansp_geografia",
        "number": 4,
        "name": "Geografía de El Salvador y Centroamérica",
        "codeRange": "4.1 al 4.5",
        "description": "División político-administrativa, volcanes, lagos, ríos, sitios turísticos, arqueológicos, zonas protegidas y tradiciones.",
        "color": "from-emerald-600 to-teal-700",
        "badgeBg": "bg-emerald-100",
        "badgeText": "text-emerald-800",
        "borderColor": "border-emerald-200",
        "icon": "Globe",
    },
    {
        "id": "ansp_economia",
        "number": 5,
        "name": "Realidad Económica y Social",
        "codeRange": "5.1 al 5.3",
        "description": "Impuesto al Valor Agregado (IVA), índices de pobreza y sistema previsional de pensiones (AFP).",
        "color": "from-green-600 to-emerald-800",
        "badgeBg": "bg-green-100",
        "badgeText": "text-green-800",
        "borderColor": "border-green-200",
        "icon": "TrendingUp",
    },
    {
        "id": "ansp_constitucion",
        "number": 6,
        "name": "Constitución de la República y DDHH",
        "codeRange": "6.1 al 6.8",
        "description": "Forma de gobierno, derechos fundamentales, sufragio, Ministerio Público, PNC, Fuerza Armada y origen de los Derechos Humanos.",
        "color": "from-indigo-600 to-blue-800",
        "badgeBg": "bg-indigo-100",
        "badgeText": "text-indigo-800",
        "borderColor": "border-indigo-200",
        "icon": "ShieldCheck",
    },
    {
        "id": "ansp_legislacion",
        "number": 7,
        "name": "Legislación Salvadoreña",
        "codeRange": "7.1 al 7.6",
        "description": "Código Penal, Código Procesal Penal, Ley de Tránsito, Ley de la Carrera Policial, Ley Orgánica de la PNC y Ley Crecer Juntos.",
        "color": "from-rose-600 to-red-800",
        "badgeBg": "bg-rose-100",
        "badgeText": "text-rose-800",
        "borderColor": "border-rose-200",
        "icon": "Scale",
    },
    {
        "id": "ansp_matematicas",
        "number": 8,
        "name": "Matemáticas",
        "codeRange": "8.1 al 8.5",
        "description": "Ecuaciones con una incógnita, funciones exponenciales y logarítmicas, teoría de conjuntos, fracciones, decimales y geometría.",
        "color": "from-cyan-600 to-blue-700",
        "badgeBg": "bg-cyan-100",
        "badgeText": "text-cyan-800",
        "borderColor": "border-cyan-200",
        "icon": "Calculator",
    },
    {
        "id": "ansp_estadistica",
        "number": 9,
        "name": "Estadística y Probabilidad",
        "codeRange": "9.1 al 9.3",
        "description": "Población y muestra, cálculo de probabilidades, permutaciones y principios fundamentales de conteo.",
        "color": "from-teal-600 to-cyan-800",
        "badgeBg": "bg-teal-100",
        "badgeText": "text-teal-800",
        "borderColor": "border-teal-200",
        "icon": "BarChart3",
    },
    {
        "id": "ansp_ofimatica",
        "number": 10,
        "name": "Ofimática e Inteligencia Artificial",
        "codeRange": "10.1 al 10.4",
        "description": "Microsoft Word (formato y atajos), Microsoft PowerPoint (presentaciones y transiciones), y Microsoft Excel (fórmulas SUMA y PROMEDIO).",
        "color": "from-slate-700 to-slate-900",
        "badgeBg": "bg-slate-100",
        "badgeText": "text-slate-800",
        "borderColor": "border-slate-200",
        "icon": "Laptop",
    }
]

curriculum_subjects = []
for s in ansp_subjects_def:
    s_id = s["id"]
    s_questions = [q for q in all_questions if q["subjectId"] == s_id]
    
    # Write subtopic json
    sub_json_path = os.path.join(ANSP_QUESTIONS_DIR, f"{s_id}.json")
    with open(sub_json_path, "w", encoding="utf-8") as f:
        json.dump(s_questions, f, ensure_ascii=False, indent=2)

    # Subtopics breakdown
    sections = []
    for q in s_questions:
        sec = q.get("sectionTitle")
        if sec and sec not in sections:
            sections.append(sec)

    subtopics_meta = []
    for sec in sections:
        sec_qs = [q for q in s_questions if q.get("sectionTitle") == sec]
        subtopics_meta.append({
            "id": f"{s_id}_{len(subtopics_meta)+1}",
            "code": sec.split()[0] if sec else s["codeRange"],
            "title": sec,
            "subjectId": s_id,
            "questionCount": len(sec_qs),
            "sections": [sec]
        })

    curriculum_subjects.append({
        "id": s["id"],
        "number": s["number"],
        "name": s["name"],
        "codeRange": s["codeRange"],
        "description": s["description"],
        "totalSubtopics": len(subtopics_meta),
        "totalQuestions": len(s_questions),
        "color": s["color"],
        "badgeBg": s["badgeBg"],
        "badgeText": s["badgeText"],
        "borderColor": s["borderColor"],
        "icon": s["icon"],
        "subtopics": subtopics_meta
    })

curriculum_payload = {
    "title": "Academia Nacional de Seguridad Pública (ANSP) - Prueba Cultural Nivel Básico 2025",
    "description": "Cuestionario general y oficial de 250 preguntas de opción múltiple estructuradas en las 10 materias del temario.",
    "totalQuestions": len(all_questions),
    "totalSubtopics": sum(s["totalSubtopics"] for s in curriculum_subjects),
    "subjects": curriculum_subjects
}

curriculum_path = os.path.join(ANSP_DATA_DIR, "curriculum.json")
with open(curriculum_path, "w", encoding="utf-8") as f:
    json.dump(curriculum_payload, f, ensure_ascii=False, indent=2)

print(f"[✓] ansp/curriculum.json saved successfully ({len(curriculum_subjects)} materias, {len(all_questions)} preguntas)")

# Generate Master LaTeX for ANSP
latex_lines = [
    r"% ==============================================================================",
    r"% BANCO DE PREGUNTAS: ACADEMIA NACIONAL DE SEGURIDAD PÚBLICA (ANSP)",
    r"% PRUEBA CULTURAL - NIVEL BÁSICO (250 PREGUNTAS)",
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
    r"",
    r"\geometry{top=2cm, bottom=2cm, left=1.8cm, right=1.8cm}",
    r"\pagestyle{fancy}",
    r"\fancyhf{}",
    r"\rhead{\small\scshape ANSP - Prueba Cultural Nivel Básico}",
    r"\lhead{\small\bfseries Banco de 250 Preguntas}",
    r"\cfoot{\thepage}",
    r"\renewcommand{\headrulewidth}{0.4pt}",
    r"",
    r"\begin{document}",
    r"\begin{titlepage}",
    r"\centering",
    r"{\scshape\LARGE ACADEMIA NACIONAL DE SEGURIDAD PÚBLICA \par}",
    r"\vspace{0.8cm}",
    r"{\Large\bfseries CONTENIDOS REVISADOS 2025 \par}",
    r"\vspace{1cm}",
    r"{\huge\bfseries CUESTIONARIO GENERAL PRUEBA CULTURAL \par}",
    r"{\Large\bfseries NIVEL BÁSICO (250 PREGUNTAS DE OPCIÓN MÚLTIPLE) \par}",
    r"\vspace{1.5cm}",
    r"\begin{tcolorbox}[colback=blue!5!white,colframe=blue!60!black,title=\textbf{TEMARIO OFICIAL}]",
    r"\begin{enumerate}[label=\textbf{\arabic*.}]",
    r"  \item \textbf{Historia de El Salvador} (50 Preguntas)",
    r"  \item \textbf{Lenguaje} (12 Preguntas)",
    r"  \item \textbf{Literatura} (38 Preguntas)",
    r"  \item \textbf{Geografía de El Salvador y Centroamérica} (50 Preguntas)",
    r"  \item \textbf{Realidad Económica y Social de El Salvador} (9 Preguntas)",
    r"  \item \textbf{Constitución de la República y Derechos Humanos} (27 Preguntas)",
    r"  \item \textbf{Legislación Salvadoreña} (19 Preguntas)",
    r"  \item \textbf{Matemáticas} (22 Preguntas)",
    r"  \item \textbf{Estadística y Probabilidad} (13 Preguntas)",
    r"  \item \textbf{Ofimática e Inteligencia Artificial} (10 Preguntas)",
    r"\end{enumerate}",
    r"\end{tcolorbox}",
    r"\vfill",
    r"{\large San Salvador, El Salvador \par}",
    r"{\large \today \par}",
    r"\end{titlepage}",
    r"\newpage",
    r""
]

for s in curriculum_subjects:
    s_questions = [q for q in all_questions if q["subjectId"] == s["id"]]
    latex_lines.append(f"% ==============================================================================")
    latex_lines.append(f"% MATERIA {s['number']}: {s['name'].upper()}")
    latex_lines.append(f"% ==============================================================================")
    latex_lines.append(f"\\section{{{s['number']}. {s['name']} ({len(s_questions)} Preguntas)}}\n")

    latex_lines.append(r"\begin{enumerate}[label=\textbf{\arabic*.}]")
    if s_questions:
        latex_lines.append(f"\\setcounter{{enumi}}{{{s_questions[0]['number'] - 1}}}")

    for q in s_questions:
        stmt = q["statement"].replace("&", "\\&").replace("%", "\\%")
        latex_lines.append(f"\\item {stmt}")
        latex_lines.append(r"\begin{enumerate}[label=\textbf{\Alph*)}]")
        latex_lines.append(r"\begin{multicols}{2}")
        for opt in q["options"]:
            otxt = opt["text"].replace("&", "\\&").replace("%", "\\%")
            latex_lines.append(f"  \\item {otxt}")
        latex_lines.append(r"\end{multicols}")
        latex_lines.append(r"\end{enumerate}")
        latex_lines.append(r"\vspace{0.15cm}")

    latex_lines.append(r"\end{enumerate}\n")

    # Solucionario
    latex_lines.append(r"\vspace{0.4cm}")
    latex_lines.append(f"\\begin{{tcolorbox}}[colback=gray!5!white,colframe=gray!60!black,title=\\textbf{{CLAVE DE RESPUESTAS -- {s['name'].upper()}}}]")
    latex_lines.append(r"\begin{multicols}{5}")
    latex_lines.append(r"\begin{enumerate}[label=\textbf{\arabic*.}]")
    if s_questions:
        latex_lines.append(f"\\setcounter{{enumi}}{{{s_questions[0]['number'] - 1}}}")
    for q in s_questions:
        latex_lines.append(f"  \\item \\textbf{{{q['correctAnswer']}}}")
    latex_lines.append(r"\end{enumerate}")
    latex_lines.append(r"\end{multicols}")
    latex_lines.append(r"\end{tcolorbox}")
    latex_lines.append(r"\newpage\n")

latex_lines.append(r"\end{document}")

master_tex_path = os.path.join(PUBLIC_DIR, "banco_preguntas_ansp.tex")
with open(master_tex_path, "w", encoding="utf-8") as f:
    f.write("\n".join(latex_lines))

print(f"[✓] banco_preguntas_ansp.tex generated successfully ({os.path.getsize(master_tex_path) / 1024:.1f} KB)")
print("ALL ANSP DATA BUILT SUCCESSFULLY!")
