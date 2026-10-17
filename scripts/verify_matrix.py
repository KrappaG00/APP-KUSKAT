import re

languages = [
    ('Inglés', 'englishQuestions.ts'),
    ('Náhuat Pipil', 'nahuatQuestions.ts'),
    ('Lenca Potón', 'lencaQuestions.ts'),
    ('Kakawira', 'kakawiraQuestions.ts'),
    ('Alemán', 'germanQuestions.ts'),
    ('Árabe', 'arabicQuestions.ts'),
    ('Mandarín', 'mandarinQuestions.ts')
]

levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
grand_total = 0

print(f"{'Idioma':<16} | " + " | ".join(f"{lvl:>4}" for lvl in levels) + " | Total")
print("-" * 65)

for name, fname in languages:
    path = f"src/data/languages/{fname}"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    counts = {}
    for lvl in levels:
        pattern = rf'\"level\":\s*\"{lvl}\"'
        matches = len(re.findall(pattern, content))
        counts[lvl] = matches
    
    lang_total = sum(counts.values())
    grand_total += lang_total
    row = f"{name:<16} | " + " | ".join(f"{counts[lvl]:>4}" for lvl in levels) + f" | {lang_total:>5}"
    print(row)

print("-" * 65)
print(f"TOTAL GENERAL: {grand_total} reactivos")
