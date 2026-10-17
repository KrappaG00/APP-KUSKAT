# -*- coding: utf-8 -*-
import re

def make_lesson(*args, **kwargs):
    if args:
        # Positional arguments call (id_str, title, level, category, summary, formula, explanation, rules, examples_us, examples_uk, dialogue, mistakes, tips, reference)
        id_str = args[0]
        title = args[1] if len(args) > 1 else ""
        level = args[2] if len(args) > 2 else ""
        category = args[3] if len(args) > 3 else ""
        summary = args[4] if len(args) > 4 else ""
        formula = args[5] if len(args) > 5 else ""
        explanation = args[6] if len(args) > 6 else ""
        rules = args[7] if len(args) > 7 else []
        examples_us = args[8] if len(args) > 8 else []
        examples_uk = args[9] if len(args) > 9 else []
        dialogue = args[10] if len(args) > 10 else []
        mistakes = args[11] if len(args) > 11 else []
        tips = args[12] if len(args) > 12 else []
        reference = args[13] if len(args) > 13 else "https://www.englisch-hilfen.de/en/grammar.htm"
    else:
        # Keyword arguments call
        id_str = kwargs.get("lesson_id") or kwargs.get("id_str") or kwargs.get("id", "")
        title = kwargs.get("title", "")
        level = kwargs.get("level", "")
        category = kwargs.get("category", "")
        explanation = kwargs.get("explanation") or kwargs.get("detailedExplanation", "")
        summary = kwargs.get("summary") or (explanation.split(". ")[0] + "." if explanation else title)
        rules = kwargs.get("rules", [])
        formula = kwargs.get("formula") or (rules[0] if rules else "Advanced English Grammatical Syntax")
        examples_us = kwargs.get("examples_us") or kwargs.get("examplesUS", [])
        examples_uk = kwargs.get("examples_uk") or kwargs.get("examplesUK", [])
        dialogue = kwargs.get("dialogue") or kwargs.get("practicalDialogue", [])
        mistakes = kwargs.get("mistakes") or kwargs.get("commonMistakes", [])
        tips = kwargs.get("tips") or kwargs.get("studyTips", [])
        reference = kwargs.get("reference") or kwargs.get("referenceLink", "https://www.englisch-hilfen.de/en/grammar.htm")

    lesson = {
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
    return lesson

def count_words(lesson):
    parts = [
        lesson.get("title", ""),
        lesson.get("category", ""),
        lesson.get("summary", ""),
        lesson.get("formula", ""),
        lesson.get("detailedExplanation", ""),
        " ".join(lesson.get("rules", [])),
        " ".join(lesson.get("examplesUS", [])),
        " ".join(lesson.get("examplesUK", [])),
        " ".join(lesson.get("commonMistakes", [])),
        " ".join(lesson.get("studyTips", []) if isinstance(lesson.get("studyTips"), list) else []),
    ]
    if "practicalDialogue" in lesson and isinstance(lesson["practicalDialogue"], list):
        for line in lesson["practicalDialogue"]:
            if isinstance(line, dict):
                parts.append(line.get("speaker", "") + " " + line.get("text", "") + " " + line.get("translation", ""))
    text = " ".join(parts)
    return len(re.findall(r"\b[\wáéíóúÁÉÍÓÚñÑüÜ'-]+\b", text))

def validate_lesson(lesson, min_words=500):
    words = count_words(lesson)
    assert words >= min_words, f"Lesson {lesson['id']} has only {words} words (< {min_words})!"
    assert len(lesson.get("rules", [])) >= 4, f"Lesson {lesson['id']} has fewer than 4 rules!"
    assert len(lesson.get("examplesUS", [])) >= 2, f"Lesson {lesson['id']} has fewer than 2 US examples!"
    assert len(lesson.get("examplesUK", [])) >= 2, f"Lesson {lesson['id']} has fewer than 2 UK examples!"
    assert len(lesson.get("commonMistakes", [])) >= 2, f"Lesson {lesson['id']} has fewer than 2 common mistakes!"
    assert len(lesson.get("practicalDialogue", [])) >= 4, f"Lesson {lesson['id']} has fewer than 4 dialogue turns!"
    return words
