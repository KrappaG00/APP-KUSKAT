import sys
import os

sys.path.append(os.path.dirname(__file__))
import generate_lessons_data as g

with open('scripts/lesson_curriculum.txt', 'w', encoding='utf-8') as out:
    for lvl, fn in [
        ('A1', g.get_a1_lessons),
        ('A2', g.get_a2_lessons),
        ('B1', g.get_b1_lessons),
        ('B2', g.get_b2_lessons),
        ('C1', g.get_c1_lessons),
        ('C2', g.get_c2_lessons)
    ]:
        out.write(f'=== LEVEL {lvl} ===\n')
        for l in fn():
            out.write(f"{l['id']} | {l['category']} | {l['title']}\n")

print("Curriculum successfully exported.")
