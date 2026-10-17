# -*- coding: utf-8 -*-
"""
APP-KUSKAT • Compiler for All 120 English Lessons
Gathers all lessons from A1, A2, B1, B2, C1, and C2.
Validates word count >= 500 for each lesson.
Generates src/data/languages/englishLessons.ts.
"""
import json
import os
import sys

# Ensure scripts dir is on sys.path
sys.path.append(os.path.dirname(__file__))

from lessons_a1 import get_a1_lessons
from lessons_a2 import get_a2_lessons
from lessons_b1 import get_b1_lessons
from lessons_b2 import get_b2_lessons
from lessons_c1 import get_c1_lessons
from lessons_c2 import get_c2_lessons
from lesson_utils import count_words, validate_lesson

def main():
    print("Gathering lessons from all CEFR levels...")
    a1 = get_a1_lessons()
    a2 = get_a2_lessons()
    b1 = get_b1_lessons()
    b2 = get_b2_lessons()
    c1 = get_c1_lessons()
    c2 = get_c2_lessons()

    by_level = {
        "A1": a1,
        "A2": a2,
        "B1": b1,
        "B2": b2,
        "C1": c1,
        "C2": c2
    }

    total_lessons = 0
    total_words = 0
    min_found = 999999
    min_id = ""

    for level, lessons in by_level.items():
        assert len(lessons) == 20, f"Level {level} must have exactly 20 lessons, found {len(lessons)}"
        print(f"Level {level}: 20 lessons loaded.")
        for l in lessons:
            words = validate_lesson(l, min_words=500)
            total_words += words
            total_lessons += 1
            if words < min_found:
                min_found = words
                min_id = l["id"]

    print(f"\nTotal Lessons: {total_lessons} (Target: 120)")
    print(f"Total Pedagogical Words: {total_words:,}")
    print(f"Average Words per Lesson: {total_words / total_lessons:.1f}")
    print(f"Minimum Lesson Words: {min_found} (Lesson ID: {min_id})")
    assert total_lessons == 120, f"Expected 120 lessons, got {total_lessons}"
    assert min_found >= 500, f"Minimum words violation: {min_found} < 500 in {min_id}"

    # Build TypeScript code
    ts_content = """/**
 * APP-KUSKAT • BANCO MAESTRO DE LECCIONES DE INGLÉS (MCER / CEFR)
 *
 * Catálogo completo de 120 clases organizadas en exactamente 20 lecciones estructuradas
 * por cada uno de los 6 niveles del Marco Común Europeo de Referencia (A1 a C2).
 *
 * Cada clase cumple estrictamente el requisito pedagógico de contar con MÍNIMO 500 PALABRAS,
 * incluyendo:
 * - Título, categorización temática, fórmula gramatical y resumen conceptual
 * - Explicación teórica profunda y exhaustiva (detailedExplanation)
 * - Reglas pedagógicas y restricciones sintácticas paso a paso (rules)
 * - Ejemplos contrastados con traducción en American English (examplesUS) y British English (examplesUK)
 * - Diálogos auténticos contextualizados con traducción y roles de interlocutores (practicalDialogue)
 * - Errores comunes frecuentes analizados y contrastados con el español (commonMistakes)
 * - Consejos de estudio y mnemotecnias académicas (studyTips)
 * - Enlaces a fuentes metodológicas
 */

import type { CEFRLevel, GrammarTopicLesson } from './englishData';

export const ENGLISH_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = """

    ts_json = json.dumps(by_level, ensure_ascii=False, indent=2)
    ts_code = ts_content + ts_json + ";\n"

    target_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "languages", "englishLessons.ts")
    target_path = os.path.abspath(target_path)

    with open(target_path, "w", encoding="utf-8") as f:
        f.write(ts_code)

    file_size_mb = os.path.getsize(target_path) / (1024 * 1024)
    print(f"\nSuccessfully generated {target_path}")
    print(f"Output File Size: {file_size_mb:.2f} MB")

if __name__ == "__main__":
    main()
