# -*- coding: utf-8 -*-
"""
APP-KUSKAT • Compiler for englishQuestions.ts
Generates 300 questions total (50 per CEFR level: A1 to C2).
"""

import json
import os
import sys

# Add scripts directory to path
sys.path.append(os.path.dirname(__file__))

from questions_a1_a2 import get_a1_questions, get_a2_questions
from questions_b1_b2 import get_b1_questions, get_b2_questions
from questions_c1_c2 import get_c1_questions, get_c2_questions

def build_questions_file():
    a1 = get_a1_questions()
    a2 = get_a2_questions()
    b1 = get_b1_questions()
    b2 = get_b2_questions()
    c1 = get_c1_questions()
    c2 = get_c2_questions()

    all_questions = []
    
    # Reassign global sequential numbers 1 to 300
    current_num = 1
    for group in [a1, a2, b1, b2, c1, c2]:
        for q in group:
            q["number"] = current_num
            current_num += 1
            all_questions.append(q)

    print(f"Total questions compiled: {len(all_questions)}")
    for lvl in ["A1", "A2", "B1", "B2", "C1", "C2"]:
        count = sum(1 for q in all_questions if q["level"] == lvl)
        print(f"  Level {lvl}: {count} questions")

    header = """/**
 * APP-KUSKAT • BANCO MAESTRO DE PREGUNTAS DE INGLÉS (MCER / CEFR)
 *
 * Catálogo completo de 300 reactivos oficiales organizados en exactamente 50 preguntas
 * por cada uno de los 6 niveles del Marco Común Europeo de Referencia (A1 a C2).
 *
 * Características pedagógicas:
 * - Estrictamente selección múltiple con 4 opciones (A, B, C, D)
 * - Clave correcta justificada detalladamente
 * - Análisis de distractores pedagógicos para retroalimentación formativa
 * - Citas metodológicas a Englisch-hilfen.de, Englishteststore.net y Agendaweb.org
 * - Sin pruebas de escritura libre ni producción oral grabada
 */

import { CEFRLevel, LanguageQuestion } from './englishData';

export const ENGLISH_QUESTIONS_BANK: LanguageQuestion[] = """

    footer = """;

export const ENGLISH_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = {
  A1: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'A1'),
  A2: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'A2'),
  B1: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'B1'),
  B2: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'B2'),
  C1: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'C1'),
  C2: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'C2'),
};
"""

    json_content = json.dumps(all_questions, indent=2, ensure_ascii=False)
    file_content = header + json_content + footer

    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "languages", "englishQuestions.ts")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(file_content)

    print(f"Successfully generated {output_path} with {len(all_questions)} questions!")

if __name__ == "__main__":
    build_questions_file()
