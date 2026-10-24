import json
import re

# Let's verify each file's exported questions
# We can check using TypeScript compilation or ts-node/vitest, but first let's inspect with Python

files_and_arrays = [
    ('src/data/derechoAdministrativoData.ts', 'DERECHO_ADMINISTRATIVO_QUESTIONS', 'ADMIN_LAW_QUESTIONS'),
    ('src/data/saludPrimariaData.ts', 'SALUD_PRIMARIA_QUESTIONS', 'SALUD_PRIMARIA_QUESTIONS'),
    ('src/data/ingenieriaCienciasData.ts', 'INGENIERIA_PROBLEMS', 'INGENIERIA_PROBLEMS'),
    ('src/data/notaryExamData.ts', 'NOTARY_EXAM_QUESTIONS', 'NOTARY_EXAM_QUESTIONS'),
    ('src/data/csspHealthData.ts', 'CSSP_QUESTIONS', 'CSSP_QUESTIONS'),
    ('src/data/anspAscensoData.ts', 'POLICE_PROMOTION_QUESTIONS', 'POLICE_PROMOTION_QUESTIONS'),
    ('src/data/complianceAmlData.ts', 'COMPLIANCE_QUESTIONS_DATA', 'COMPLIANCE_QUESTIONS_DATA')
]

for filepath, arr1, arr2 in files_and_arrays:
    content = open(filepath, 'r', encoding='utf-8').read()
    # Check if exported array exists
    has_arr1 = arr1 in content
    has_arr2 = arr2 in content
    
    # Extract IDs
    ids = re.findall(r'["\']id["\']\s*:\s*["\']([^"\']+)["\']', content)
    # Filter out sector / step ids if any
    q_ids = [i for i in ids if not (i.startswith('all') or i.startswith('lpa-step') or i.startswith('jv') and len(i) <= 6 and not any(c.isdigit() for c in i))]
    
    # Check duplicate ids
    seen = set()
    dups = []
    for q in q_ids:
        if q in seen:
            dups.append(q)
        seen.add(q)
        
    print(f"=== {filepath} ===")
    print(f"  Export check: {arr1} in file: {has_arr1}, {arr2} in file: {has_arr2}")
    print(f"  Total IDs matched: {len(ids)}, Question IDs: {len(q_ids)}, Unique: {len(seen)}, Duplicates: {len(dups)}")
    if dups:
        print(f"  Duplicate samples: {dups[:5]}")
