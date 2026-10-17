# -*- coding: utf-8 -*-
"""
Builder for scripts/lessons_a1.py (Classes 01 to 20, >= 500 words each).
"""

import json
import os
import re

def make_lesson(id_str, title, level, category, summary, formula, explanation, rules, examples_us, examples_uk, dialogue, mistakes, tips, reference):
    return {
        "id": id_str,
        "title": title,
        "level": level,
        "category": category,
        "summary": summary,
        "formula": formula,
        "detailedExplanation": explanation,
        "rules": rules,
        "examplesUS": examples_us,
        "examplesUK": examples_uk,
        "practicalDialogue": dialogue,
        "commonMistakes": mistakes,
        "studyTips": tips,
        "referenceLink": reference
    }

def count_words(lesson):
    parts = [
        lesson.get("title", ""), lesson.get("category", ""), lesson.get("summary", ""),
        lesson.get("formula", ""), lesson.get("detailedExplanation", ""),
        " ".join(lesson.get("rules", [])), " ".join(lesson.get("examplesUS", [])),
        " ".join(lesson.get("examplesUK", [])), " ".join(lesson.get("commonMistakes", [])),
        " ".join(lesson.get("studyTips", []) if isinstance(lesson.get("studyTips"), list) else []),
    ]
    if "practicalDialogue" in lesson and isinstance(lesson["practicalDialogue"], list):
        for line in lesson["practicalDialogue"]:
            if isinstance(line, dict):
                parts.append(line.get("speaker", "") + " " + line.get("text", "") + " " + line.get("translation", ""))
    text = " ".join(parts)
    return len(re.findall(r"\b[\wáéíóúÁÉÍÓÚñÑüÜ'-]+\b", text))

print("A1 lesson builder helper ready.")
