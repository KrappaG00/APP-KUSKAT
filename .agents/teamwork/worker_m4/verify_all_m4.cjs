const fs = require('fs');
const path = require('path');

// 1. Verify ingenieriaCienciasData.ts
const ingFile = fs.readFileSync(path.resolve(__dirname, '../../../src/data/ingenieriaCienciasData.ts'), 'utf8');
const ingMarker = 'export const INGENIERIA_QUESTIONS: EngineeringMathQuestion[] = ';
const ingStart = ingFile.indexOf(ingMarker);
if (ingStart === -1) throw new Error('Could not find INGENIERIA_QUESTIONS marker');
const ingEnd = ingFile.lastIndexOf('];');
const ingJson = ingFile.substring(ingStart + ingMarker.length, ingEnd + 1);
const ingQuestions = JSON.parse(ingJson);

console.log('--- INGENIERIA CIENCIAS ---');
console.log('Total questions:', ingQuestions.length, '(expected 200)');
if (ingQuestions.length !== 200) throw new Error('ingQuestions must have 200 questions');

const ingCats = {
  'algebra-lineal': 0,
  'trigonometria-analitica': 0,
  'geometria-conicas': 0,
  'fisica-mecanica': 0
};
const ingIds = new Set();
ingQuestions.forEach((q, idx) => {
  if (ingIds.has(q.id)) throw new Error(`Duplicate ing ID: ${q.id}`);
  ingIds.add(q.id);
  if (!ingCats.hasOwnProperty(q.category)) throw new Error(`Unknown category: ${q.category}`);
  ingCats[q.category]++;
  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) throw new Error(`Invalid answer in ${q.id}`);
  if (q.stepByStepDerivation.length < 2) throw new Error(`Too few derivation steps in ${q.id}`);
});
console.log('Categories breakdown:', ingCats);
Object.entries(ingCats).forEach(([cat, count]) => {
  if (count !== 50) throw new Error(`Category ${cat} has ${count} questions, expected 50`);
});

// 2. Verify anspAscensoData.ts
const anspFile = fs.readFileSync(path.resolve(__dirname, '../../../src/data/anspAscensoData.ts'), 'utf8');
const anspMarker = 'export const ANSP_ASCENSO_QUESTIONS: PolicePromotionQuestion[] = ';
const anspStart = anspFile.indexOf(anspMarker);
if (anspStart === -1) throw new Error('Could not find ANSP_ASCENSO_QUESTIONS marker');
const anspEnd = anspFile.indexOf(';\n\n// Preservar retrocompatibilidad');
const anspJson = anspFile.substring(anspStart + anspMarker.length, anspEnd);
const anspQuestions = JSON.parse(anspJson);

console.log('\n--- ANSP ASCENSO ---');
console.log('Total questions:', anspQuestions.length, '(expected 200)');
if (anspQuestions.length !== 200) throw new Error('anspQuestions must have 200 questions');

const anspRanks = {
  cabo: 0,
  sargento: 0,
  oficial: 0
};
const anspIds = new Set();
anspQuestions.forEach((q) => {
  if (anspIds.has(q.id)) throw new Error(`Duplicate ansp ID: ${q.id}`);
  anspIds.add(q.id);
  if (!anspRanks.hasOwnProperty(q.rank)) throw new Error(`Unknown rank: ${q.rank}`);
  anspRanks[q.rank]++;
  if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`Invalid options in ${q.id}`);
  if (!q.distractorRationale.A || !q.distractorRationale.B || !q.distractorRationale.C || !q.distractorRationale.D) {
    throw new Error(`Incomplete distractorRationale in ${q.id}`);
  }
});
console.log('Ranks breakdown:', anspRanks);
if (anspRanks.cabo !== 66) throw new Error(`Cabo has ${anspRanks.cabo}, expected 66`);
if (anspRanks.sargento !== 67) throw new Error(`Sargento has ${anspRanks.sargento}, expected 67`);
if (anspRanks.oficial !== 67) throw new Error(`Oficial has ${anspRanks.oficial}, expected 67`);

// 3. Verify complianceAmlData.ts
const compFile = fs.readFileSync(path.resolve(__dirname, '../../../src/data/complianceAmlData.ts'), 'utf8');
const compMarker = 'export const COMPLIANCE_QUESTIONS: ComplianceQuestion[] = ';
const compStart = compFile.indexOf(compMarker);
if (compStart === -1) throw new Error('Could not find COMPLIANCE_QUESTIONS marker');
const compEnd = compFile.indexOf(';\n\n// Preservar retrocompatibilidad');
const compJson = compFile.substring(compStart + compMarker.length, compEnd);
const compQuestions = JSON.parse(compJson);

console.log('\n--- COMPLIANCE AML & SEGUROS ---');
console.log('Total questions:', compQuestions.length, '(expected 200)');
if (compQuestions.length !== 200) throw new Error('compQuestions must have 200 questions');

const compCats = {
  AML: 0,
  Seguros: 0
};
const compIds = new Set();
compQuestions.forEach((q) => {
  if (compIds.has(q.id)) throw new Error(`Duplicate comp ID: ${q.id}`);
  compIds.add(q.id);
  if (!compCats.hasOwnProperty(q.category)) throw new Error(`Unknown category: ${q.category}`);
  compCats[q.category]++;
  if (typeof q.options !== 'object' || Array.isArray(q.options)) {
    throw new Error(`Options must be object in ${q.id}`);
  }
  if (!q.options.A || !q.options.B || !q.options.C || !q.options.D) {
    throw new Error(`Options missing keys in ${q.id}`);
  }
});
console.log('Categories breakdown:', compCats);
if (compCats.AML !== 100) throw new Error(`AML has ${compCats.AML}, expected 100`);
if (compCats.Seguros !== 100) throw new Error(`Seguros has ${compCats.Seguros}, expected 100`);

// Invariant: seg-05
const q5 = compQuestions.find(q => q.id === 'seg-05');
if (!q5 || q5.correctAnswer !== 'B' || !q5.options.B.includes('20,000.00')) {
  throw new Error('Invariant violated on seg-05!');
}
console.log('seg-05 invariant preserved: PASS');

console.log('\n========================================');
console.log('ALL WORKER M4 DATASETS VERIFIED 100% CLEAN!');
console.log('Total questions generated across 3 files: 600');
console.log('========================================');
