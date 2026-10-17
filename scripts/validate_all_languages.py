import os
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

LANGS = ['english', 'nahuat', 'lenca', 'kakawira', 'german', 'arabic', 'mandarin']

def validate_language(lang):
    print(f"\n==================== VALIDATING {lang.upper()} ====================")
    lessons_path = f"src/data/languages/{lang}Lessons.ts"
    questions_path = f"src/data/languages/{lang}Questions.ts"
    verbs_path = f"src/data/languages/{lang}Verbs.ts"
    basics_path = f"src/data/languages/{lang}BasicsData.ts"
    
    if not os.path.exists(lessons_path):
        print(f"❌ Lessons file missing: {lessons_path}")
        return False
        
    with open(lessons_path, 'r', encoding='utf-8') as f:
        l_text = f.read()
        
    # Extract JSON object for lessons by level
    # Find start of Record<CEFRLevel, ...> = {
    m = re.search(r'export const [A-Z_]+LESSONS_BY_LEVEL[^=]*=\s*({)', l_text)
    if m:
        start_idx = m.start(1)
        end_idx = l_text.rfind('};')
        if end_idx != -1:
            raw_json = l_text[start_idx:end_idx+1]
            try:
                data = json.loads(raw_json)
                total_lessons = sum(len(v) for v in data.values())
                print(f"✓ Total Lessons (JSON parsed): {total_lessons} across {list(data.keys())}")
                
                # Check word counts per lesson
                all_word_counts = []
                below_500 = []
                for lvl, lessons in data.items():
                    for les in lessons:
                        # calculate full word count of lesson
                        full_text = " ".join([
                            les.get('title', ''),
                            les.get('category', ''),
                            les.get('summary', ''),
                            les.get('formula', ''),
                            les.get('detailedExplanation', ''),
                            " ".join(les.get('rules', [])),
                            " ".join(les.get('examplesUS', [])),
                            " ".join(les.get('examplesUK', [])),
                            " ".join(les.get('commonMistakes', [])),
                            " ".join(les.get('studyTips', [])),
                            " ".join([d.get('speaker','') + ' ' + d.get('text','') + ' ' + d.get('translation','') for d in les.get('practicalDialogue', [])])
                        ])
                        words = len(re.findall(r'\b\w+\b', full_text))
                        all_word_counts.append(words)
                        if words < 500:
                            below_500.append((les.get('id'), words, les.get('title')))
                            
                print(f"✓ Word counts - Min: {min(all_word_counts)}, Avg: {sum(all_word_counts)/len(all_word_counts):.1f}, Max: {max(all_word_counts)}")
                if below_500:
                    print(f"❌ Lessons below 500 words: {len(below_500)}")
                    for b in below_500[:3]:
                        print(f"   - {b[0]}: {b[1]} words")
                else:
                    print(f"✓ ALL {len(all_word_counts)} lessons meet the >= 500 words requirement!")
            except Exception as e:
                print(f"⚠️ JSON parse error on lessons: {e}")
    else:
        print("⚠️ Could not find LESSONS_BY_LEVEL pattern")

    # Questions
    if os.path.exists(questions_path):
        with open(questions_path, 'r', encoding='utf-8') as f:
            q_text = f.read()
        mq = re.search(r'export const [A-Z_]+QUESTIONS_BY_LEVEL[^=]*=\s*({)', q_text)
        if mq:
            s_idx = mq.start(1)
            e_idx = q_text.rfind('};')
            try:
                q_data = json.loads(q_text[s_idx:e_idx+1])
                total_q = sum(len(v) for v in q_data.values())
                q_per_level = {k: len(v) for k, v in q_data.items()}
                print(f"✓ Questions (JSON parsed): {total_q} questions -> {q_per_level}")
            except Exception as e:
                q_ids = len(re.findall(r'"id":', q_text))
                print(f"✓ Questions found (regex): {q_ids}")
        else:
            q_ids = len(re.findall(r'"id":', q_text))
            print(f"✓ Questions found (regex): {q_ids}")
    else:
        print(f"❌ Questions missing: {questions_path}")

    # Verbs
    if os.path.exists(verbs_path):
        with open(verbs_path, 'r', encoding='utf-8') as f:
            v_text = f.read()
        v_matches = re.findall(r'"infinitive":', v_text) or re.findall(r'infinitive:', v_text)
        print(f"✓ Verbs found: {len(v_matches)}")
    else:
        print(f"❌ Verbs missing: {verbs_path}")

    # Basics
    if os.path.exists(basics_path):
        print(f"✓ Basics exists: {basics_path}")
    else:
        print(f"❌ Basics missing: {basics_path}")
        
    return True

if __name__ == '__main__':
    for lang in LANGS:
        validate_language(lang)
