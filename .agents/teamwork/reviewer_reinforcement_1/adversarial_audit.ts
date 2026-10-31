import { OLYMPIC_THEMATIC_UNITS } from '../../../src/data/jovenesTalentoData';
import { ONE_PAGE_SHEETS } from '../../../src/data/onePageSheetsData';
import { ORAL_LITIGATION_THEMATIC_UNITS } from '../../../src/data/oralLitigationData';
import { CONSTITUTION_LAW_BRANCHES } from '../../../src/data/constitucionalJurisprudenciaData';

console.log('--- ADVERSARIAL STRESS-TEST & INTEGRITY AUDIT ---');

// 1. Olympic Units: Duplicate check & lexical diversity
console.log('\n[M1 Jóvenes Talento Units]');
const olympicTitles = new Set<string>();
const olympicStatements = new Set<string>();
OLYMPIC_THEMATIC_UNITS.forEach(u => {
  const words = u.substantiveTheory.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  const uniqueWords = new Set(words);
  const lexicalDiversity = (uniqueWords.size / words.length * 100).toFixed(1);
  console.log(`- Unit ${u.id}: ${words.length} tokens, ${uniqueWords.size} unique (${lexicalDiversity}% lexical diversity)`);
  u.solvedExamples.forEach(ex => {
    if (olympicTitles.has(ex.title)) console.error(`  DUPLICATE TITLE: ${ex.title}`);
    if (olympicStatements.has(ex.problemStatement)) console.error(`  DUPLICATE STATEMENT: ${ex.problemStatement}`);
    olympicTitles.add(ex.title);
    olympicStatements.add(ex.problemStatement);
  });
});
console.log(`Unique Olympic Titles: ${olympicTitles.size} / 25`);
console.log(`Unique Olympic Statements: ${olympicStatements.size} / 25`);

// 2. One-Page Sheets: Duplicate check
console.log('\n[M1 One-Page Sheets]');
const sheetTitles = new Set<string>();
const sheetScenarios = new Set<string>();
ONE_PAGE_SHEETS.forEach(s => {
  s.solvedPracticeExamples.forEach(ex => {
    if (sheetTitles.has(ex.title)) console.error(`  DUPLICATE SHEET TITLE: ${ex.title}`);
    if (sheetScenarios.has(ex.scenario)) console.error(`  DUPLICATE SCENARIO: ${ex.scenario}`);
    sheetTitles.add(ex.title);
    sheetScenarios.add(ex.scenario);
  });
});
console.log(`Unique Sheet Solved Titles: ${sheetTitles.size} / 45`);
console.log(`Unique Sheet Scenarios: ${sheetScenarios.size} / 45`);

// 3. Oral Litigation: Duplicate check & dialogue depth
console.log('\n[M2 Oral Litigation Units]');
const litTitles = new Set<string>();
const litDescriptions = new Set<string>();
ORAL_LITIGATION_THEMATIC_UNITS.forEach(u => {
  const words = u.substantiveTheory.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  const uniqueWords = new Set(words);
  const lexicalDiversity = (uniqueWords.size / words.length * 100).toFixed(1);
  console.log(`- Litigation Unit ${u.id}: ${words.length} tokens, ${uniqueWords.size} unique (${lexicalDiversity}% lexical diversity)`);
  u.solvedCases.forEach(sc => {
    if (litTitles.has(sc.title)) console.error(`  DUPLICATE LITIGATION TITLE: ${sc.title}`);
    if (litDescriptions.has(sc.scenarioDescription)) console.error(`  DUPLICATE SCENARIO: ${sc.scenarioDescription}`);
    litTitles.add(sc.title);
    litDescriptions.add(sc.scenarioDescription);
  });
});
console.log(`Unique Litigation Titles: ${litTitles.size} / 25`);
console.log(`Unique Litigation Scenarios: ${litDescriptions.size} / 25`);

// 4. Constitution Law Branches: Duplicate check & lexical diversity
console.log('\n[M2 Casoteca & Law Branches]');
const branchCaseTitles = new Set<string>();
const branchCaseContexts = new Set<string>();
CONSTITUTION_LAW_BRANCHES.forEach(b => {
  const words = b.substantiveAnalysis.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  const uniqueWords = new Set(words);
  const lexicalDiversity = (uniqueWords.size / words.length * 100).toFixed(1);
  console.log(`- Branch ${b.id}: ${words.length} tokens, ${uniqueWords.size} unique (${lexicalDiversity}% lexical diversity)`);
  b.solvedCases.forEach(c => {
    if (branchCaseTitles.has(c.title)) console.error(`  DUPLICATE BRANCH CASE TITLE: ${c.title}`);
    if (branchCaseContexts.has(c.factualContext)) console.error(`  DUPLICATE CONTEXT: ${c.factualContext}`);
    branchCaseTitles.add(c.title);
    branchCaseContexts.add(c.factualContext);
  });
});
console.log(`Unique Branch Case Titles: ${branchCaseTitles.size} / 50`);
console.log(`Unique Branch Case Contexts: ${branchCaseContexts.size} / 50`);
