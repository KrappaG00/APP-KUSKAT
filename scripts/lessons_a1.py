# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level A1 (Classes 01 to 20 Complete)
Every class is guaranteed to have >= 500 words of high-density pedagogical content.
"""
from data_a1_part1 import get_a1_part1
from data_a1_part2 import get_a1_part2
from lesson_utils import validate_lesson

def get_a1_lessons():
    part1 = get_a1_part1()
    part2 = get_a1_part2()
    all_lessons = part1 + part2
    assert len(all_lessons) == 20, f"Expected 20 A1 lessons, got {len(all_lessons)}"
    for l in all_lessons:
        validate_lesson(l, min_words=500)
    return all_lessons

if __name__ == "__main__":
    lessons = get_a1_lessons()
    print(f"Successfully loaded and validated {len(lessons)} lessons for Level A1 (all >= 500 words).")
