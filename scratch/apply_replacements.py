# -*- coding: utf-8 -*-
"""
Script maestro para reemplazar el 33.33% (preguntas 201 a 300) de los 25 subtemas de la UES
incorporando los temas faltantes oficiales de las 21 semanas de Refuerzo Académico UES.
"""

import json
import os
import sys

from gen_math import get_math_questions
from gen_lenguaje import get_lenguaje_questions
from gen_literatura import get_literatura_questions
from gen_sociales import get_sociales_questions
from gen_naturales import get_naturales_questions

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUESTIONS_DIR = os.path.join(ROOT_DIR, "public", "data", "questions")
CURRICULUM_PATH = os.path.join(ROOT_DIR, "public", "data", "curriculum.json")

SUBTOPIC_DISPATCH = {
    # Matemáticas
    "1.1": get_math_questions,
    "1.2": get_math_questions,
    "1.3": get_math_questions,
    "1.4": get_math_questions,
    "1.5": get_math_questions,
    "1.6": get_math_questions,
    "1.7": get_math_questions,
    # Lenguaje
    "2.1": get_lenguaje_questions,
    "2.2": get_lenguaje_questions,
    "2.3": get_lenguaje_questions,
    "2.4": get_lenguaje_questions,
    "2.5": get_lenguaje_questions,
    # Literatura
    "3.1": get_literatura_questions,
    "3.2": get_literatura_questions,
    "3.3": get_literatura_questions,
    "3.4": get_literatura_questions,
    "3.5": get_literatura_questions,
    # Ciencias Sociales
    "4.1": get_sociales_questions,
    "4.2": get_sociales_questions,
    "4.3": get_sociales_questions,
    "4.4": get_sociales_questions,
    # Ciencias Naturales
    "5.1": get_naturales_questions,
    "5.2": get_naturales_questions,
    "5.3": get_naturales_questions,
    "5.4": get_naturales_questions,
}

def main():
    print("Iniciando reemplazo de preguntas 201-300 para los 25 subtemas de la UES...")
    
    # 1. Procesar cada archivo de preguntas
    sections_by_subtopic = {}
    total_replaced = 0

    for st_id, generator_fn in SUBTOPIC_DISPATCH.items():
        file_path = os.path.join(QUESTIONS_DIR, f"{st_id}.json")
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Archivo no encontrado: {file_path}")
        
        with open(file_path, "r", encoding="utf-8") as f:
            current_questions = json.load(f)
            
        if len(current_questions) != 300:
            raise ValueError(f"El archivo {st_id}.json no tiene 300 preguntas (tiene {len(current_questions)})")
            
        # Conservar el 70% (preguntas 1 a 200) intactas
        kept_200 = current_questions[:200]
        
        # Generar las 100 nuevas preguntas de refuerzo oficial (201 a 300)
        new_100 = generator_fn(st_id)
        if len(new_100) != 100:
            raise ValueError(f"El generador para {st_id} no produjo 100 preguntas (produjo {len(new_100)})")
            
        # Validar numeración e IDs
        for idx, q in enumerate(new_100):
            expected_num = 201 + idx
            expected_id = f"{st_id}_q{expected_num}"
            if q["number"] != expected_num:
                raise ValueError(f"En {st_id}: número esperado {expected_num}, obtenido {q['number']}")
            if q["id"] != expected_id:
                raise ValueError(f"En {st_id}: id esperado {expected_id}, obtenido {q['id']}")
            if not q["statement"] or not q["statement"].strip():
                raise ValueError(f"Enunciado vacío en {q['id']}")
            if len(q["options"]) < 2:
                raise ValueError(f"Opciones insuficientes en {q['id']}")
            keys = [o["key"] for o in q["options"]]
            if q["correctAnswer"] not in keys:
                raise ValueError(f"Clave {q['correctAnswer']} no existe en opciones de {q['id']}")

        # Combinar 200 anteriores + 100 nuevas
        final_questions = kept_200 + new_100
        assert len(final_questions) == 300

        # Guardar archivo actualizado
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(final_questions, f, ensure_ascii=False, indent=2)
            
        total_replaced += len(new_100)
        
        # Registrar secciones ordenadas
        seen = []
        for q in final_questions:
            sec = q.get("sectionTitle", "")
            if sec and sec not in seen:
                seen.append(sec)
        sections_by_subtopic[st_id] = seen
        print(f"  [OK] Subtema {st_id}: 100 preguntas reemplazadas (Total 300). Secciones: {len(seen)}")

    print(f"\nTotal preguntas reemplazadas: {total_replaced} / 7,500 ({total_replaced/7500*100:.2f}%)")

    # 2. Actualizar curriculum.json con las nuevas secciones
    if os.path.exists(CURRICULUM_PATH):
        with open(CURRICULUM_PATH, "r", encoding="utf-8") as f:
            curriculum = json.load(f)
            
        for subj in curriculum.get("subjects", []):
            for st in subj.get("subtopics", []):
                st_id = st.get("id")
                if st_id in sections_by_subtopic:
                    st["sections"] = sections_by_subtopic[st_id]
                    
        with open(CURRICULUM_PATH, "w", encoding="utf-8") as f:
            json.dump(curriculum, f, ensure_ascii=False, indent=2)
            
        print("  [OK] curriculum.json actualizado con exito.")

if __name__ == "__main__":
    main()
