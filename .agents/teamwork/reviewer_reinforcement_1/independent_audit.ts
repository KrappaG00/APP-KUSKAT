import { DRIVER_CURRICULUM_UNITS } from '../../../src/data/driverLicense/curriculum';
import { DRIVER_QUESTIONS } from '../../../src/data/driverLicense/questions';
import { OFFICIAL_ROAD_SIGNS } from '../../../src/data/driverLicense/signs';
import { PATRIOTIC_THEMATIC_UNITS, ALL_PATRIOTIC_CASE_STUDIES, PATRIOTIC_QUESTIONS, PATRIOTIC_SYMBOLS, HISTORICAL_PRESIDENTS } from '../../../src/data/patrioticHistory';

function countSubstantiveWords(text: string): number {
  if (!text) return 0;
  // Strip markdown headings, code blocks, bold/italic, special formatting
  const cleaned = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/^#+\s+.*$/gm, ' ')
    .replace(/[*_~`#>]/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[-+*]\s+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const words = cleaned.split(/\s+/).filter(w => w.length > 0 && !/^[\d.,;:()\-–—_]+$/.test(w));
  return words.length;
}

function lexicalMetrics(text: string) {
  const words = text.toLowerCase().match(/\b[a-záéíóúñü]{2,}\b/gi) || [];
  const uniqueWords = new Set(words);
  const total = words.length;
  const unique = uniqueWords.size;
  const ttr = total > 0 ? (unique / total) : 0;
  return { total, unique, ttr };
}

console.log('=== INDEPENDENT AUDIT OF MILESTONE M1 (VMT) ===');
console.log(`Total VMT Units: ${DRIVER_CURRICULUM_UNITS.length}`);

let totalVmtWords = 0;
let minVmtWords = Infinity;
let maxVmtWords = -Infinity;
let vmtFailsWordCount = 0;
let totalVmtCases = 0;
const allVmtCaseTitles = new Set<string>();
const allVmtScenarios = new Set<string>();

DRIVER_CURRICULUM_UNITS.forEach((unit, idx) => {
  const words = countSubstantiveWords(unit.substantiveTheory);
  const metrics = lexicalMetrics(unit.substantiveTheory);
  totalVmtWords += words;
  if (words < minVmtWords) minVmtWords = words;
  if (words > maxVmtWords) maxVmtWords = words;
  if (words < 500) vmtFailsWordCount++;

  const casesCount = unit.practicalCases ? unit.practicalCases.length : 0;
  totalVmtCases += casesCount;

  unit.practicalCases?.forEach(c => {
    allVmtCaseTitles.add(c.title.trim().toLowerCase());
    allVmtScenarios.add(c.scenario.trim().toLowerCase());
  });

  console.log(`Unit ${idx + 1} [${unit.id}]:`);
  console.log(`  Title: "${unit.title}"`);
  console.log(`  Substantive words: ${words} (TTR: ${(metrics.ttr * 100).toFixed(1)}%, unique: ${metrics.unique}/${metrics.total})`);
  console.log(`  Solved practical cases: ${casesCount}`);
  unit.practicalCases?.forEach((c, cIdx) => {
    const scWords = countSubstantiveWords(c.scenario);
    const anWords = countSubstantiveWords(c.analysis);
    const resWords = countSubstantiveWords(c.resolvedOutcome);
    if (!c.legalReference || scWords < 15 || anWords < 15 || resWords < 10) {
      console.warn(`    WARNING: Case ${cIdx + 1} (${c.id}) has thin fields!`);
    }
  });
});

console.log(`\nVMT Word Count Summary: Total=${totalVmtWords}, Min=${minVmtWords}, Max=${maxVmtWords}, Units <500w: ${vmtFailsWordCount}`);
console.log(`VMT Cases Summary: Total=${totalVmtCases}, Unique Titles=${allVmtCaseTitles.size}, Unique Scenarios=${allVmtScenarios.size}`);

console.log(`\nVMT Question Bank: ${DRIVER_QUESTIONS.length}`);
const vmtKeyDist: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
let vmtInvalidQuestions = 0;
const vmtQuestionTexts = new Set<string>();

DRIVER_QUESTIONS.forEach((q, idx) => {
  vmtQuestionTexts.add(q.statement.trim().toLowerCase());
  if (!q.options || q.options.length !== 4) {
    console.error(`  Question ${idx + 1} (${q.id}) does NOT have exactly 4 options!`);
    vmtInvalidQuestions++;
  }
  if (![0, 1, 2, 3].includes(q.correctAnswer)) {
    console.error(`  Question ${idx + 1} (${q.id}) has invalid correctAnswer: ${q.correctAnswer}`);
    vmtInvalidQuestions++;
  } else {
    vmtKeyDist[q.correctAnswer]++;
  }
  // Check for duplicate options within the same question
  const optSet = new Set(q.options.map(o => o.trim().toLowerCase()));
  if (optSet.size !== 4) {
    console.error(`  Question ${idx + 1} (${q.id}) has duplicate options!`);
    vmtInvalidQuestions++;
  }
  if (!q.explanation || q.explanation.trim().length < 20) {
    console.error(`  Question ${idx + 1} (${q.id}) explanation is missing or trivial!`);
    vmtInvalidQuestions++;
  }
});
console.log(`VMT Answer Key Distribution: A=${vmtKeyDist[0]}, B=${vmtKeyDist[1]}, C=${vmtKeyDist[2]}, D=${vmtKeyDist[3]}`);
console.log(`VMT Unique Questions: ${vmtQuestionTexts.size}/${DRIVER_QUESTIONS.length}, Invalid: ${vmtInvalidQuestions}`);

console.log(`\nVMT Road Signs: ${OFFICIAL_ROAD_SIGNS.length}`);
const signCats: Record<string, number> = {};
OFFICIAL_ROAD_SIGNS.forEach(s => {
  signCats[s.category] = (signCats[s.category] || 0) + 1;
});
console.log(`VMT Signs per category:`, signCats);


console.log('\n\n=== INDEPENDENT AUDIT OF MILESTONE M2 (HISTORIA PATRIA) ===');
console.log(`Total Patriotic Units: ${PATRIOTIC_THEMATIC_UNITS.length}`);

let totalHistoryWords = 0;
let minHistoryWords = Infinity;
let maxHistoryWords = -Infinity;
let historyFailsWordCount = 0;
let totalHistoryCases = 0;
const allHistoryCaseTitles = new Set<string>();
const allHistoryContexts = new Set<string>();

PATRIOTIC_THEMATIC_UNITS.forEach((unit, idx) => {
  const words = countSubstantiveWords(unit.substantiveAnalysis);
  const metrics = lexicalMetrics(unit.substantiveAnalysis);
  totalHistoryWords += words;
  if (words < minHistoryWords) minHistoryWords = words;
  if (words > maxHistoryWords) maxHistoryWords = words;
  if (words < 500) historyFailsWordCount++;

  const casesCount = unit.solvedCaseStudies ? unit.solvedCaseStudies.length : 0;
  totalHistoryCases += casesCount;

  unit.solvedCaseStudies?.forEach(c => {
    allHistoryCaseTitles.add(c.title.trim().toLowerCase());
    allHistoryContexts.add(c.historicalContext.trim().toLowerCase());
  });

  console.log(`Unit ${idx + 1} [${unit.id}]:`);
  console.log(`  Title: "${unit.title}"`);
  console.log(`  Substantive words: ${words} (TTR: ${(metrics.ttr * 100).toFixed(1)}%, unique: ${metrics.unique}/${metrics.total})`);
  console.log(`  Solved historical case studies: ${casesCount}`);
  unit.solvedCaseStudies?.forEach((c, cIdx) => {
    const ctxWords = countSubstantiveWords(c.historicalContext);
    const dilWords = countSubstantiveWords(c.dilemmaOrIssue);
    const anaWords = countSubstantiveWords(c.historiographicalAnalysis);
    const civWords = countSubstantiveWords(c.civicSignificance);
    if (ctxWords < 15 || dilWords < 15 || anaWords < 15 || civWords < 10) {
      console.warn(`    WARNING: Case ${cIdx + 1} (${c.id}) has thin fields!`);
    }
  });
});

console.log(`\nHistoria Word Count Summary: Total=${totalHistoryWords}, Min=${minHistoryWords}, Max=${maxHistoryWords}, Units <500w: ${historyFailsWordCount}`);
console.log(`Historia Cases Summary: Total=${totalHistoryCases}, Unique Titles=${allHistoryCaseTitles.size}, Unique Contexts=${allHistoryContexts.size}`);

console.log(`\nPatriotic Question Bank: ${PATRIOTIC_QUESTIONS.length}`);
const hpKeyDist: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
let hpInvalidQuestions = 0;
const hpQuestionTexts = new Set<string>();

PATRIOTIC_QUESTIONS.forEach((q, idx) => {
  hpQuestionTexts.add(q.question.trim().toLowerCase());
  if (!q.options || q.options.length !== 4) {
    console.error(`  Question ${idx + 1} (${q.id}) does NOT have exactly 4 options!`);
    hpInvalidQuestions++;
  }
  if (![0, 1, 2, 3].includes(q.correctAnswer)) {
    console.error(`  Question ${idx + 1} (${q.id}) has invalid correctAnswer: ${q.correctAnswer}`);
    hpInvalidQuestions++;
  } else {
    hpKeyDist[q.correctAnswer]++;
  }
  // Check for duplicate options
  const optSet = new Set(q.options.map(o => o.trim().toLowerCase()));
  if (optSet.size !== 4) {
    console.error(`  Question ${idx + 1} (${q.id}) has duplicate options!`);
    hpInvalidQuestions++;
  }
  if (!q.explanation || q.explanation.trim().length < 20) {
    console.error(`  Question ${idx + 1} (${q.id}) explanation is missing or trivial!`);
    hpInvalidQuestions++;
  }
  if (!q.historicalReference || q.historicalReference.trim().length < 5) {
    console.error(`  Question ${idx + 1} (${q.id}) historicalReference missing!`);
    hpInvalidQuestions++;
  }
});
console.log(`Historia Answer Key Distribution: A=${hpKeyDist[0]}, B=${hpKeyDist[1]}, C=${hpKeyDist[2]}, D=${hpKeyDist[3]}`);
console.log(`Historia Unique Questions: ${hpQuestionTexts.size}/${PATRIOTIC_QUESTIONS.length}, Invalid: ${hpInvalidQuestions}`);

console.log(`\nPatriotic Symbols: ${PATRIOTIC_SYMBOLS.length}`);
console.log(`Historical Presidents: ${HISTORICAL_PRESIDENTS.length}`);
