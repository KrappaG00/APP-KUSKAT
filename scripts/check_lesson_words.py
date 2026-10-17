import re
import json

with open('src/data/languages/englishLessons.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find the json-like dictionary in englishLessons.ts
# It starts at export const ENGLISH_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = {
start_idx = text.find('export const ENGLISH_LESSONS_BY_LEVEL')
brace_start = text.find('{', start_idx)
brace_end = text.rfind('};') + 1

json_str = text[brace_start:brace_end]
data = json.loads(json_str)

all_counts = {}
min_words = 999999
max_words = 0
below_500 = []

for level, lessons in data.items():
    for lesson in lessons:
        # Count words in all fields: title, summary, formula, rules, examplesUS, examplesUK, commonMistakes
        combined_text = " ".join([
            lesson.get('title', ''),
            lesson.get('category', ''),
            lesson.get('summary', ''),
            lesson.get('formula', ''),
            " ".join(lesson.get('rules', [])),
            " ".join(lesson.get('examplesUS', [])),
            " ".join(lesson.get('examplesUK', [])),
            " ".join(lesson.get('commonMistakes', [])),
            lesson.get('studyGuide', ''),
            lesson.get('practicalDialogue', ''),
            " ".join(lesson.get('exercisePrompts', []) if isinstance(lesson.get('exercisePrompts'), list) else [])
        ])
        words = re.findall(r'\b\w+\b', combined_text)
        count = len(words)
        all_counts[lesson['id']] = count
        if count < min_words:
            min_words = count
        if count > max_words:
            max_words = count
        if count < 500:
            below_500.append((lesson['id'], count, lesson['title']))

print(f"Total lessons evaluated: {len(all_counts)}")
print(f"Min word count: {min_words}")
print(f"Max word count: {max_words}")
print(f"Lessons below 500 words: {len(below_500)}")
if below_500:
    print("First 5 lessons below 500 words:")
    for item in below_500[:5]:
        print(f"  {item[0]}: {item[1]} words ({item[2]})")
