import re

files = [
    'src/data/derechoAdministrativoData.ts',
    'src/data/saludPrimariaData.ts',
    'src/data/ingenieriaCienciasData.ts',
    'src/data/notaryExamData.ts',
    'src/data/csspHealthData.ts',
    'src/data/anspAscensoData.ts',
    'src/data/complianceAmlData.ts'
]

for f in files:
    try:
        content = open(f, 'r', encoding='utf-8').read()
        lines = content.split('\n')
        # match questions
        q_matches = [l for l in lines if 'correctAnswer' in l or 'correctKey' in l]
        # check unique ids
        ids = re.findall(r'["\']id["\']\s*:\s*["\']([^"\']+)["\']', content)
        print(f'{f}: {len(lines)} lines | {len(q_matches)} questions | {len(ids)} ids')
    except Exception as e:
        print(f'{f}: Error {e}')
