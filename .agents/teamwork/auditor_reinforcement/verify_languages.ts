import { NAHUAT_COMMUNICATIVE_UNITS } from '../../../src/data/languages/nahuatCommunicativeData';
import { LENCA_COMMUNICATIVE_UNITS } from '../../../src/data/languages/lencaCommunicativeData';
import { KAKAWIRA_COMMUNICATIVE_UNITS } from '../../../src/data/languages/kakawiraCommunicativeData';
import { MANDARIN_COMMUNICATIVE_UNITS } from '../../../src/data/languages/mandarinCommunicativeData';
import { ARABIC_COMMUNICATIVE_UNITS } from '../../../src/data/languages/arabicCommunicativeData';

import { NAHUAT_VOCABULARY_CORPUS } from '../../../src/data/languages/nahuatVocabularyData';
import { LENCA_VOCABULARY_CORPUS } from '../../../src/data/languages/lencaVocabularyData';
import { KAKAWIRA_VOCABULARY_CORPUS } from '../../../src/data/languages/kakawiraVocabularyData';
import { MANDARIN_VOCABULARY_CORPUS } from '../../../src/data/languages/mandarinVocabularyData';
import { ARABIC_VOCABULARY_CORPUS } from '../../../src/data/languages/arabicVocabularyData';

console.log('=== LANGUAGES DEEP AUDIT ===');
console.log('Nahuat vocab corpus length:', NAHUAT_VOCABULARY_CORPUS.length);
console.log('Lenca vocab corpus length:', LENCA_VOCABULARY_CORPUS.length);
console.log('Kakawira vocab corpus length:', KAKAWIRA_VOCABULARY_CORPUS.length);
console.log('Mandarin vocab corpus length:', MANDARIN_VOCABULARY_CORPUS.length);
console.log('Arabic vocab corpus length:', ARABIC_VOCABULARY_CORPUS.length);

const languages = [
  { name: 'Nahuat', units: NAHUAT_COMMUNICATIVE_UNITS },
  { name: 'Lenca', units: LENCA_COMMUNICATIVE_UNITS },
  { name: 'Kakawira', units: KAKAWIRA_COMMUNICATIVE_UNITS },
  { name: 'Mandarin', units: MANDARIN_COMMUNICATIVE_UNITS },
  { name: 'Arabic', units: ARABIC_COMMUNICATIVE_UNITS },
];

let totalDialogues = 0;
const allDialogueIds = new Set<string>();
const allScenarios = new Set<string>();

languages.forEach(l => {
  const dCount = l.units.reduce((a, u) => a + u.solvedDialogues.length, 0);
  totalDialogues += dCount;
  console.log(`${l.name}: ${l.units.length} units, dialogues per unit: ${l.units.map(u => u.solvedDialogues.length).join(', ')}, total: ${dCount}`);
  l.units.forEach(u => {
    u.solvedDialogues.forEach(d => {
      if (allDialogueIds.has(d.id)) {
        console.error(`DUPLICATE DIALOGUE ID: ${d.id}`);
      }
      allDialogueIds.add(d.id);
      const text = (d as any).scenario || (d as any).context || (d as any).title;
      allScenarios.add(text);
    });
  });
});

console.log(`TOTAL SOLVED DIALOGUES ACROSS ALL 5 LANGUAGES: ${totalDialogues}`);
console.log(`UNIQUE DIALOGUE IDS: ${allDialogueIds.size} / 125`);
console.log(`UNIQUE SCENARIOS/CONTEXTS: ${allScenarios.size} / 125`);
