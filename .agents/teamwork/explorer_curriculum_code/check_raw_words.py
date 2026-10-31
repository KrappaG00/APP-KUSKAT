import os
import re

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

def count_words(text):
    cleaned = re.sub(r'\$\$[\s\S]*?\$\$', ' ', text)
    cleaned = re.sub(r'\$[^$]*\$', ' ', cleaned)
    cleaned = re.sub(r'\\[a-zA-Z]+', ' ', cleaned)
    cleaned = re.sub(r'[{}()[\]=+*/^_<>|•:;,.!?\'"`-]', ' ', cleaned)
    cleaned = cleaned.strip()
    if not cleaned:
        return 0
    return len([w for w in cleaned.split() if w])

# Boilerplate texts from gradeHelpers.ts
enriched_problema_boilerplate = "Contexto pedagógico y análisis heurístico del problema inicial : En esta primera etapa fundamental de la secuencia didáctica oficial del Ministerio de Educación de El Salvador (MINED), el estudiante explora de manera razonada y autónoma la situación planteada antes de abordar la regla formal. Para resolver con éxito este desafío matemático, es indispensable realizar una lectura comprensiva del enunciado, distinguir con claridad las cantidades o relaciones geométricas y algebraicas conocidas, precisar cuál es la incógnita principal y trazar una estrategia de representación (diagramática, tabular o simbólica) que vincule los aprendizajes previos de la unidad con el nuevo concepto en estudio."
enriched_solucion_boilerplate = "Desarrollo metodológico detallado paso a paso: En primer lugar, estructuramos la información extraída del problema inicial en una secuencia ordenada, asegurándonos de que cada magnitud esté expresada en unidades compatibles y notación clara. En segundo lugar, aplicamos las propiedades operativas y deductivas propias de la clase , justificando con rigor cada transición algebraica o aritmética sin omitir pasos intermedios. En tercer lugar, verificamos la consistencia del resultado contrastándolo con la pregunta original del problema para confirmar que la solución posee pleno sentido práctico y exactitud dentro del cuaderno de ejercicios ESMATE."
enriched_conclusion_boilerplate = "Síntesis formal y orientaciones didácticas de dominio: Esta conclusión constituye el pilar teórico de la clase y formaliza el algoritmo o teorema general que sustenta tanto la práctica guiada como las evaluaciones de la unidad. Comprender a fondo este principio implica identificar sus hipótesis de aplicación, distinguir en qué situaciones se emplea de forma directa o mediante despeje inverso, y conectarlo de manera orgánica con las lecciones subsecuentes del programa oficial de matemática de El Salvador."

bp_words_problema = count_words(enriched_problema_boilerplate)
bp_words_solucion = count_words(enriched_solucion_boilerplate)
bp_words_conclusion = count_words(enriched_conclusion_boilerplate)
# The 5 boilerplate examples typically contain around 300 words
bp_words_total_approx = bp_words_problema + bp_words_solucion + bp_words_conclusion + 300

print(f"Boilerplate padding per lesson: ~{bp_words_total_approx} words")
print(f"  Problema boilerplate: {bp_words_problema} words")
print(f"  Solucion boilerplate: {bp_words_solucion} words")
print(f"  Conclusion boilerplate: {bp_words_conclusion} words")

# Parse raw lessons in grade files
# Regex to match createPscerLesson calls
lesson_pattern = re.compile(
    r"createPscerLesson\s*\(\s*"
    r"['\"](?P<id>[^'\"]+)['\"]\s*,\s*"
    r"['\"](?P<num>[^'\"]+)['\"]\s*,\s*"
    r"['\"](?P<title>[^'\"]+)['\"]\s*,\s*"
    r"(?P<problema>['\"`].*?['\"`])\s*,\s*"
    r"(?P<solucion>['\"`].*?['\"`])\s*,\s*"
    r"(?P<conclusion>['\"`].*?['\"`])\s*,\s*"
    r"(?P<ejemplo>['\"`].*?['\"`])\s*,\s*"
    r"(?P<resuelve>\[[\s\S]*?\])"
    r"(?:\s*,\s*(?P<customExamples>\[[\s\S]*?\]))?",
    re.DOTALL
)

stats = []
raw_word_counts = []

for grade_id, fname in grade_files:
    fpath = os.path.join(grades_dir, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    matches = list(lesson_pattern.finditer(content))
    print(f"\n{grade_id} ({fname}): matched {len(matches)} lessons")
    for m in matches:
        lid = m.group("id")
        lnum = m.group("num")
        ltitle = m.group("title")
        prob = m.group("problema")[1:-1]
        sol = m.group("solucion")[1:-1]
        conc = m.group("conclusion")[1:-1]
        ej = m.group("ejemplo")[1:-1]
        has_custom_ex = bool(m.group("customExamples"))

        raw_words = count_words(f"{prob} {sol} {conc} {ej}")
        raw_word_counts.append(raw_words)
        stats.append({
            "grade": grade_id,
            "id": lid,
            "num": lnum,
            "title": ltitle,
            "raw_words": raw_words,
            "has_custom_examples": has_custom_ex
        })

print(f"\nTotal parsed lessons: {len(stats)}")
if raw_word_counts:
    print(f"Raw words (BEFORE boilerplate): Min={min(raw_word_counts)}, Max={max(raw_word_counts)}, Avg={sum(raw_word_counts)/len(raw_word_counts):.1f}")
    below_500 = [s for s in stats if s["raw_words"] < 500]
    print(f"Lessons with raw words < 500: {len(below_500)} of {len(stats)} (100% of them currently rely on boilerplate!)")
    custom_ex_count = sum(1 for s in stats if s["has_custom_examples"])
    print(f"Lessons with customExamples explicitly passed: {custom_ex_count} of {len(stats)}")
