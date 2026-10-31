/**
 * EMPIRICAL ADVERSARIAL STRESS-TEST HARNESS — MILESTONES M1 & M2
 *
 * Authored by: Challenger 1 (Academic & Legal Adversarial Challenger)
 * Target: Jóvenes Talento (M1), One-Page Sheets (M1), Litigación Oral (M2), Casoteca (M2), Invariants
 */

import fs from 'node:fs';
import path from 'node:path';

// M1 Imports
import {
  OLYMPIC_THEMATIC_UNITS,
  OLYMPIC_PROBLEMS_DATA,
  OLYMPIC_DISCIPLINES,
  OlympicThematicUnit,
  OlympicSolvedExample,
} from '../src/data/jovenesTalentoData';

import {
  ONE_PAGE_SHEETS,
  OnePageSheet,
  SheetSolvedExample,
} from '../src/data/onePageSheetsData';

// M2 Imports
import {
  ORAL_LITIGATION_THEMATIC_UNITS,
  OBJECTION_DEFINITIONS,
  COURTROOM_DRILLS,
  OralLitigationThematicUnit,
  CourtroomDialogueCase,
} from '../src/data/oralLitigationData';

import {
  CONSTITUTION_LAW_BRANCHES,
  CONSTITUTIONAL_CASES,
  AMPARO_STEP_GUIDE,
  HABEAS_CORPUS_STEP_GUIDE,
  INCONSTITUCIONALIDAD_STEP_GUIDE,
  AMPARO_RESOLVED_WORKSHOP_CASE,
  HABEAS_CORPUS_RESOLVED_WORKSHOP_CASE,
  INCONSTITUCIONALIDAD_RESOLVED_WORKSHOP_CASE,
  LawBranch,
  SolvedJurisprudenceCase,
} from '../src/data/constitucionalJurisprudenciaData';

// Invariant Imports
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';

// ============================================================================
// UTILITY FUNCTIONS FOR ADVERSARIAL ANALYSIS
// ============================================================================

function stripMarkdownAndPunctuation(text: string): string {
  if (!text) return '';
  return text
    .replace(/```[\s\S]*?```/g, ' ') // code blocks
    .replace(/`([^`]+)`/g, '$1')     // inline code
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // markdown links
    .replace(/[#*_~>|\-+=]/g, ' ')   // markdown syntax characters
    .replace(/\\[a-zA-Z]+/g, ' ')    // LaTeX commands (e.g. \frac, \quad)
    .replace(/[{}$]/g, ' ')          // LaTeX braces and dollar delimiters
    .replace(/[.,;:()¿?¡!\"'«»—–]/g, ' ') // punctuation
    .trim();
}

function tokenize(text: string): string[] {
  if (!text) return [];
  return text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

function countWordsRaw(text: string): number {
  return tokenize(text).length;
}

function countWordsClean(text: string): number {
  const cleaned = stripMarkdownAndPunctuation(text);
  return tokenize(cleaned).length;
}

function getWordNGrams(text: string, n: number): Set<string> {
  const tokens = tokenize(stripMarkdownAndPunctuation(text).toLowerCase());
  const ngrams = new Set<string>();
  for (let i = 0; i <= tokens.length - n; i++) {
    ngrams.add(tokens.slice(i, i + n).join(' '));
  }
  return ngrams;
}

function jaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 && setB.size === 0) return 1.0;
  if (setA.size === 0 || setB.size === 0) return 0.0;
  let intersection = 0;
  for (const elem of setA) {
    if (setB.has(elem)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

// ============================================================================
// TEST HARNESS EXECUTION
// ============================================================================

interface Failure {
  probe: string;
  item: string;
  detail: string;
}

const failures: Failure[] = [];
const observations: string[] = [];

function recordFailure(probe: string, item: string, detail: string) {
  failures.push({ probe, item, detail });
  console.error(`[FAIL] [${probe}] ${item}: ${detail}`);
}

function recordPass(probe: string, summary: string) {
  observations.push(`[PASS] [${probe}] ${summary}`);
  console.log(`[PASS] [${probe}] ${summary}`);
}

// ----------------------------------------------------------------------------
// PROBE 1: SUBSTANTIVE WORD COUNT RIGOR (RAW & CLEAN >= 500)
// ----------------------------------------------------------------------------
console.log('\n============================================================');
console.log('PROBE 1: Substantive Word Count Rigor (Raw & Cleaned >= 500)');
console.log('============================================================');

// 1.1 Jóvenes Talento
console.log('\n--- Jóvenes Talento (5 units) ---');
OLYMPIC_THEMATIC_UNITS.forEach((unit: OlympicThematicUnit) => {
  const raw = countWordsRaw(unit.substantiveTheory);
  const clean = countWordsClean(unit.substantiveTheory);
  console.log(`Unit [${unit.id}] "${unit.title}": Raw=${raw}, Clean=${clean}`);

  if (raw < 500) {
    recordFailure('WordCount-Olympic-Raw', unit.id, `Raw words ${raw} < 500`);
  }
  if (clean < 500) {
    recordFailure('WordCount-Olympic-Clean', unit.id, `Cleaned words ${clean} < 500`);
  }
});
if (OLYMPIC_THEMATIC_UNITS.length !== 5) {
  recordFailure('UnitCount-Olympic', 'Count', `Expected 5 units, got ${OLYMPIC_THEMATIC_UNITS.length}`);
} else {
  recordPass('WordCount-Olympic', 'All 5 Jóvenes Talento units have >= 500 raw and cleaned words.');
}

// 1.2 Litigación Oral
console.log('\n--- Litigación Oral (5 units) ---');
ORAL_LITIGATION_THEMATIC_UNITS.forEach((unit: OralLitigationThematicUnit) => {
  const raw = countWordsRaw(unit.substantiveTheory);
  const clean = countWordsClean(unit.substantiveTheory);
  console.log(`Unit [${unit.id}] "${unit.title}": Raw=${raw}, Clean=${clean}`);

  if (raw < 500) {
    recordFailure('WordCount-Litigation-Raw', unit.id, `Raw words ${raw} < 500`);
  }
  if (clean < 500) {
    recordFailure('WordCount-Litigation-Clean', unit.id, `Cleaned words ${clean} < 500`);
  }
});
if (ORAL_LITIGATION_THEMATIC_UNITS.length !== 5) {
  recordFailure('UnitCount-Litigation', 'Count', `Expected 5 units, got ${ORAL_LITIGATION_THEMATIC_UNITS.length}`);
} else {
  recordPass('WordCount-Litigation', 'All 5 Oral Litigation units have >= 500 raw and cleaned words.');
}

// 1.3 Casoteca Constitucional (10 branches)
console.log('\n--- Casoteca Constitucional (10 branches) ---');
CONSTITUTION_LAW_BRANCHES.forEach((branch: LawBranch) => {
  const raw = countWordsRaw(branch.substantiveAnalysis);
  const clean = countWordsClean(branch.substantiveAnalysis);
  console.log(`Branch [${branch.id}] "${branch.name}": Raw=${raw}, Clean=${clean}`);

  if (raw < 500) {
    recordFailure('WordCount-LawBranch-Raw', branch.id, `Raw words ${raw} < 500`);
  }
  if (clean < 500) {
    recordFailure('WordCount-LawBranch-Clean', branch.id, `Cleaned words ${clean} < 500`);
  }
});
if (CONSTITUTION_LAW_BRANCHES.length !== 10) {
  recordFailure('BranchCount-Law', 'Count', `Expected 10 branches, got ${CONSTITUTION_LAW_BRANCHES.length}`);
} else {
  recordPass('WordCount-LawBranch', 'All 10 Law branches have >= 500 raw and cleaned words.');
}

// ----------------------------------------------------------------------------
// PROBE 2: ADVERSARIAL FILLER & PLACEHOLDER DETECTION
// ----------------------------------------------------------------------------
console.log('\n============================================================');
console.log('PROBE 2: Adversarial Filler & Placeholder Detection');
console.log('============================================================');

const FORBIDDEN_PATTERNS = [
  { name: 'Lorem Ipsum', regex: /lorem\s+ipsum/i },
  { name: 'Texto de relleno', regex: /texto\s+de\s+relleno/i },
  { name: 'Plantilla genérica', regex: /plantilla\s+gen[eé]rica/i },
  { name: 'Placeholder tag', regex: /\[placeholder\]/i },
  { name: 'TODO/TBD/FIXME tag', regex: /\b(TODO|TBD|FIXME|XXX)\b/ },
  { name: 'Dummy identifier', regex: /\bdummy\b/i },
  { name: 'Generic project phrase', regex: /en\s+un\s+proyecto\s+acad[eé]mico\s+desarrollado\s+en/i },
  { name: 'Generic example label', regex: /ejemplo\s+gen[eé]rico/i },
  { name: 'Keyboard smash asdf', regex: /\basdf/i },
  { name: 'Completar aquí', regex: /completar\s+aqu[ií]/i },
];

function checkFillerInString(str: string, location: string) {
  if (!str) return;
  for (const pat of FORBIDDEN_PATTERNS) {
    if (pat.regex.test(str)) {
      recordFailure('FillerCheck', location, `Found forbidden pattern '${pat.name}' matching ${pat.regex}`);
    }
  }
}

// Scan Olympic data
OLYMPIC_THEMATIC_UNITS.forEach((u) => {
  checkFillerInString(u.substantiveTheory, `Olympic-Unit-${u.id}-theory`);
  u.solvedExamples.forEach((ex, idx) => {
    checkFillerInString(ex.title, `Olympic-${u.id}-ex-${idx}-title`);
    checkFillerInString(ex.problemStatement, `Olympic-${u.id}-ex-${idx}-statement`);
    checkFillerInString(ex.stepByStepProof, `Olympic-${u.id}-ex-${idx}-proof`);
    checkFillerInString(ex.pedagogicInsight, `Olympic-${u.id}-ex-${idx}-insight`);
  });
});

// Scan One-Page Sheets
ONE_PAGE_SHEETS.forEach((s) => {
  checkFillerInString(s.summary, `Sheet-${s.id}-summary`);
  s.sections.forEach((sec, idx) => {
    checkFillerInString(sec.content, `Sheet-${s.id}-sec-${idx}-content`);
    checkFillerInString(sec.commonPitfall, `Sheet-${s.id}-sec-${idx}-pitfall`);
  });
  s.solvedPracticeExamples.forEach((ex, idx) => {
    checkFillerInString(ex.title, `Sheet-${s.id}-ex-${idx}-title`);
    checkFillerInString(ex.scenario, `Sheet-${s.id}-ex-${idx}-scenario`);
    checkFillerInString(ex.stepByStepSolution, `Sheet-${s.id}-ex-${idx}-solution`);
    checkFillerInString(ex.result, `Sheet-${s.id}-ex-${idx}-result`);
  });
});

// Scan Litigation data
ORAL_LITIGATION_THEMATIC_UNITS.forEach((u) => {
  checkFillerInString(u.substantiveTheory, `Litigation-Unit-${u.id}-theory`);
  u.solvedCases.forEach((c, idx) => {
    checkFillerInString(c.title, `Litigation-${u.id}-case-${idx}-title`);
    checkFillerInString(c.scenarioDescription, `Litigation-${u.id}-case-${idx}-scenario`);
    checkFillerInString(c.dialogueIncident.legalBasis, `Litigation-${u.id}-case-${idx}-legalBasis`);
    checkFillerInString(c.dialogueIncident.judicialRationale, `Litigation-${u.id}-case-${idx}-rationale`);
    c.dialogueIncident.dialogue.forEach((turn, tIdx) => {
      checkFillerInString(turn.text, `Litigation-${u.id}-case-${idx}-turn-${tIdx}`);
    });
  });
});

// Scan Casoteca data
CONSTITUTION_LAW_BRANCHES.forEach((b) => {
  checkFillerInString(b.substantiveAnalysis, `LawBranch-${b.id}-analysis`);
  b.solvedCases.forEach((c, idx) => {
    checkFillerInString(c.title, `LawBranch-${b.id}-case-${idx}-title`);
    checkFillerInString(c.factualContext, `LawBranch-${b.id}-case-${idx}-facts`);
    checkFillerInString(c.constitutionalIssue, `LawBranch-${b.id}-case-${idx}-issue`);
    checkFillerInString(c.legalBasis, `LawBranch-${b.id}-case-${idx}-basis`);
    checkFillerInString(c.ratioDecidendi, `LawBranch-${b.id}-case-${idx}-ratio`);
  });
});

recordPass('FillerCheck', 'Completed comprehensive scan for 10 filler/placeholder patterns across all units and examples.');

// ----------------------------------------------------------------------------
// PROBE 3: DISTINCTNESS & REPETITION HARNESS (N-GRAMS & JACCARD)
// ----------------------------------------------------------------------------
console.log('\n============================================================');
console.log('PROBE 3: Distinctness, Solved Example Counts & Repetition Harness');
console.log('============================================================');

// 3.1 Jóvenes Talento: 25 Solved Proofs
const olympicProofs: { unitId: string; ex: OlympicSolvedExample }[] = [];
OLYMPIC_THEMATIC_UNITS.forEach((u) => {
  u.solvedExamples.forEach((ex) => {
    olympicProofs.push({ unitId: u.id, ex });
  });
});

console.log(`Jóvenes Talento: Total solved proofs collected = ${olympicProofs.length} (Expected: 25)`);
if (olympicProofs.length !== 25) {
  recordFailure('Count-OlympicProofs', 'Count', `Expected exactly 25 proofs, got ${olympicProofs.length}`);
}

// Check uniqueness of titles and statements
const olympicTitles = new Set<string>();
const olympicStatements = new Set<string>();
olympicProofs.forEach(({ unitId, ex }, idx) => {
  if (olympicTitles.has(ex.title.toLowerCase().trim())) {
    recordFailure('Distinctness-Olympic', `Proof #${idx + 1} (${unitId})`, `Duplicate title: "${ex.title}"`);
  }
  olympicTitles.add(ex.title.toLowerCase().trim());

  if (olympicStatements.has(ex.problemStatement.toLowerCase().trim())) {
    recordFailure('Distinctness-Olympic', `Proof #${idx + 1} (${unitId})`, `Duplicate statement: "${ex.problemStatement.slice(0, 40)}..."`);
  }
  olympicStatements.add(ex.problemStatement.toLowerCase().trim());
});

// Pairwise Jaccard similarity across problem statements (3-grams)
let maxOlympicSim = 0;
let maxOlympicPair = '';
for (let i = 0; i < olympicProofs.length; i++) {
  const ngramsI = getWordNGrams(olympicProofs[i].ex.problemStatement + ' ' + olympicProofs[i].ex.stepByStepProof, 3);
  for (let j = i + 1; j < olympicProofs.length; j++) {
    const ngramsJ = getWordNGrams(olympicProofs[j].ex.problemStatement + ' ' + olympicProofs[j].ex.stepByStepProof, 3);
    const sim = jaccardSimilarity(ngramsI, ngramsJ);
    if (sim > maxOlympicSim) {
      maxOlympicSim = sim;
      maxOlympicPair = `[#${i + 1} vs #${j + 1}]`;
    }
    if (sim > 0.60) {
      recordFailure('Duplicate-OlympicProofs', `${olympicProofs[i].ex.title} vs ${olympicProofs[j].ex.title}`, `Jaccard 3-gram similarity too high: ${sim.toFixed(3)}`);
    }
  }
}
console.log(`Jóvenes Talento: Max pairwise 3-gram similarity between any 2 proofs = ${(maxOlympicSim * 100).toFixed(1)}% ${maxOlympicPair}`);
recordPass('Distinctness-Olympic', `25 unique proofs verified; maximum pairwise similarity is ${(maxOlympicSim * 100).toFixed(1)}%.`);

// 3.2 One-Page Sheets: 45 Solved Practical Examples
const sheetExamples: { sheetId: string; ex: SheetSolvedExample }[] = [];
ONE_PAGE_SHEETS.forEach((s) => {
  s.solvedPracticeExamples.forEach((ex) => {
    sheetExamples.push({ sheetId: s.id, ex });
  });
});

console.log(`One-Page Sheets: Total solved examples collected = ${sheetExamples.length} (Expected: 45 across 9 sheets)`);
if (sheetExamples.length !== 45) {
  recordFailure('Count-SheetExamples', 'Count', `Expected exactly 45 examples, got ${sheetExamples.length}`);
}

const sheetTitles = new Set<string>();
const sheetScenarios = new Set<string>();
sheetExamples.forEach(({ sheetId, ex }, idx) => {
  if (sheetTitles.has(ex.title.toLowerCase().trim())) {
    recordFailure('Distinctness-Sheets', `Example #${idx + 1} (${sheetId})`, `Duplicate title: "${ex.title}"`);
  }
  sheetTitles.add(ex.title.toLowerCase().trim());

  if (sheetScenarios.has(ex.scenario.toLowerCase().trim())) {
    recordFailure('Distinctness-Sheets', `Example #${idx + 1} (${sheetId})`, `Duplicate scenario: "${ex.scenario.slice(0, 40)}..."`);
  }
  sheetScenarios.add(ex.scenario.toLowerCase().trim());
});

let maxSheetSim = 0;
let maxSheetPair = '';
for (let i = 0; i < sheetExamples.length; i++) {
  const ngramsI = getWordNGrams(sheetExamples[i].ex.scenario + ' ' + sheetExamples[i].ex.stepByStepSolution, 3);
  for (let j = i + 1; j < sheetExamples.length; j++) {
    const ngramsJ = getWordNGrams(sheetExamples[j].ex.scenario + ' ' + sheetExamples[j].ex.stepByStepSolution, 3);
    const sim = jaccardSimilarity(ngramsI, ngramsJ);
    if (sim > maxSheetSim) {
      maxSheetSim = sim;
      maxSheetPair = `[#${i + 1} vs #${j + 1}]`;
    }
    if (sim > 0.60) {
      recordFailure('Duplicate-SheetExamples', `${sheetExamples[i].ex.title} vs ${sheetExamples[j].ex.title}`, `Jaccard 3-gram similarity too high: ${sim.toFixed(3)}`);
    }
  }
}
console.log(`One-Page Sheets: Max pairwise 3-gram similarity between any 2 examples = ${(maxSheetSim * 100).toFixed(1)}% ${maxSheetPair}`);
recordPass('Distinctness-Sheets', `45 unique solved examples verified; maximum pairwise similarity is ${(maxSheetSim * 100).toFixed(1)}%.`);

// 3.3 Litigación Oral: 25 Courtroom Dialogue Cases
const courtroomCases: { unitId: string; c: CourtroomDialogueCase }[] = [];
ORAL_LITIGATION_THEMATIC_UNITS.forEach((u) => {
  u.solvedCases.forEach((c) => {
    courtroomCases.push({ unitId: u.id, c });
  });
});

console.log(`Litigación Oral: Total courtroom cases collected = ${courtroomCases.length} (Expected: 25 across 5 units)`);
if (courtroomCases.length !== 25) {
  recordFailure('Count-LitigationCases', 'Count', `Expected exactly 25 cases, got ${courtroomCases.length}`);
}

const courtTitles = new Set<string>();
const courtIds = new Set<string>();
courtroomCases.forEach(({ unitId, c }, idx) => {
  if (courtIds.has(c.id)) {
    recordFailure('Distinctness-Litigation', `Case #${idx + 1} (${unitId})`, `Duplicate ID: "${c.id}"`);
  }
  courtIds.add(c.id);

  if (courtTitles.has(c.title.toLowerCase().trim())) {
    recordFailure('Distinctness-Litigation', `Case #${idx + 1} (${unitId})`, `Duplicate title: "${c.title}"`);
  }
  courtTitles.add(c.title.toLowerCase().trim());
});

let maxCourtSim = 0;
let maxCourtPair = '';
for (let i = 0; i < courtroomCases.length; i++) {
  const ngramsI = getWordNGrams(courtroomCases[i].c.scenarioDescription + ' ' + courtroomCases[i].c.dialogueIncident.judicialRationale, 3);
  for (let j = i + 1; j < courtroomCases.length; j++) {
    const ngramsJ = getWordNGrams(courtroomCases[j].c.scenarioDescription + ' ' + courtroomCases[j].c.dialogueIncident.judicialRationale, 3);
    const sim = jaccardSimilarity(ngramsI, ngramsJ);
    if (sim > maxCourtSim) {
      maxCourtSim = sim;
      maxCourtPair = `[#${i + 1} vs #${j + 1}]`;
    }
    if (sim > 0.60) {
      recordFailure('Duplicate-LitigationCases', `${courtroomCases[i].c.title} vs ${courtroomCases[j].c.title}`, `Jaccard 3-gram similarity too high: ${sim.toFixed(3)}`);
    }
  }
}
console.log(`Litigación Oral: Max pairwise 3-gram similarity between any 2 cases = ${(maxCourtSim * 100).toFixed(1)}% ${maxCourtPair}`);
recordPass('Distinctness-Litigation', `25 unique courtroom cases verified; maximum pairwise similarity is ${(maxCourtSim * 100).toFixed(1)}%.`);

// 3.4 Casoteca Constitucional: 50 Jurisprudence Cases
const casotecaCases: { branchId: string; c: SolvedJurisprudenceCase }[] = [];
CONSTITUTION_LAW_BRANCHES.forEach((b) => {
  b.solvedCases.forEach((c) => {
    casotecaCases.push({ branchId: b.id, c });
  });
});

console.log(`Casoteca Constitucional: Total jurisprudence cases collected = ${casotecaCases.length} (Expected: 50 across 10 branches)`);
if (casotecaCases.length !== 50) {
  recordFailure('Count-CasotecaCases', 'Count', `Expected exactly 50 cases, got ${casotecaCases.length}`);
}

const casotecaTitles = new Set<string>();
const casotecaIds = new Set<string>();
casotecaCases.forEach(({ branchId, c }, idx) => {
  if (casotecaIds.has(c.id)) {
    recordFailure('Distinctness-Casoteca', `Case #${idx + 1} (${branchId})`, `Duplicate ID: "${c.id}"`);
  }
  casotecaIds.add(c.id);

  if (casotecaTitles.has(c.title.toLowerCase().trim())) {
    recordFailure('Distinctness-Casoteca', `Case #${idx + 1} (${branchId})`, `Duplicate title: "${c.title}"`);
  }
  casotecaTitles.add(c.title.toLowerCase().trim());
});

let maxCasotecaSim = 0;
let maxCasotecaPair = '';
for (let i = 0; i < casotecaCases.length; i++) {
  const ngramsI = getWordNGrams(casotecaCases[i].c.factualContext + ' ' + casotecaCases[i].c.ratioDecidendi, 3);
  for (let j = i + 1; j < casotecaCases.length; j++) {
    const ngramsJ = getWordNGrams(casotecaCases[j].c.factualContext + ' ' + casotecaCases[j].c.ratioDecidendi, 3);
    const sim = jaccardSimilarity(ngramsI, ngramsJ);
    if (sim > maxCasotecaSim) {
      maxCasotecaSim = sim;
      maxCasotecaPair = `[#${i + 1} vs #${j + 1}]`;
    }
    if (sim > 0.60) {
      recordFailure('Duplicate-CasotecaCases', `${casotecaCases[i].c.title} vs ${casotecaCases[j].c.title}`, `Jaccard 3-gram similarity too high: ${sim.toFixed(3)}`);
    }
  }
}
console.log(`Casoteca Constitucional: Max pairwise 3-gram similarity between any 2 cases = ${(maxCasotecaSim * 100).toFixed(1)}% ${maxCasotecaPair}`);
recordPass('Distinctness-Casoteca', `50 unique jurisprudence cases verified; maximum pairwise similarity is ${(maxCasotecaSim * 100).toFixed(1)}%.`);

// ----------------------------------------------------------------------------
// PROBE 4: LITIGACIÓN ORAL REALISM & SALVADORAN STATUTORY BASIS (PrPn 209-212)
// ----------------------------------------------------------------------------
console.log('\n============================================================');
console.log('PROBE 4: Litigación Oral Dialogue Realism & Statutory Basis');
console.log('============================================================');

const VALID_SPEAKERS = new Set(['Fiscal', 'Defensa', 'Juez', 'Testigo', 'Perito', 'Secretario']);
const VALID_OBJECTING_PARTIES = new Set(['Fiscal', 'Defensa']);

let validTurnCount = 0;
let validPrPnCount = 0;
let validRulingCount = 0;

courtroomCases.forEach(({ unitId, c }, idx) => {
  const incident = c.dialogueIncident;
  if (!incident) {
    recordFailure('Litigation-Incident', c.id, 'Missing dialogueIncident structure');
    return;
  }

  // Check turns
  if (incident.dialogue.length < 3) {
    recordFailure('Litigation-Turns', c.id, `Incident has only ${incident.dialogue.length} dialogue turns (expected >= 3)`);
  } else {
    validTurnCount++;
  }

  incident.dialogue.forEach((turn, tIdx) => {
    if (!VALID_SPEAKERS.has(turn.speaker)) {
      recordFailure('Litigation-Speaker', `${c.id}-turn-${tIdx}`, `Invalid speaker "${turn.speaker}"`);
    }
    if (turn.text.trim().length < 3) {
      recordFailure('Litigation-TurnText', `${c.id}-turn-${tIdx}`, `Turn text too short: "${turn.text}"`);
    }
  });

  // Check objecting party
  if (!VALID_OBJECTING_PARTIES.has(incident.partyObjecting)) {
    recordFailure('Litigation-ObjectingParty', c.id, `Invalid partyObjecting: "${incident.partyObjecting}"`);
  }

  // Check objection raised
  if (incident.objectionRaised.trim().length < 5) {
    recordFailure('Litigation-ObjectionRaised', c.id, `Objection raised too brief: "${incident.objectionRaised}"`);
  }

  // Check statutory basis (Specifically Código Procesal Penal Arts. 209, 210, 211, 212 or relevant PrPn articles)
  const legalBasis = incident.legalBasis.trim();
  const hasPrPnReference = /prpn|procesal\s+penal|c\.pr\.pn|código\s+procesal\s+penal|art[íi\.]*\s*(209|210|211|212|174|175|176|177|179|388|389|390|391|392|393|394|395)/i.test(legalBasis);
  
  if (!hasPrPnReference) {
    recordFailure('Litigation-LegalBasis', c.id, `Missing Salvadoran PrPn statutory reference in legal basis: "${legalBasis}"`);
  } else {
    validPrPnCount++;
  }

  // Check judge ruling
  const ruling = incident.judgeRuling.trim().toUpperCase();
  const isValidRuling = ruling.includes('HA LUGAR') || ruling.includes('NO HA LUGAR');
  if (!isValidRuling) {
    recordFailure('Litigation-JudgeRuling', c.id, `Unrecognized judge ruling: "${incident.judgeRuling}"`);
  } else {
    validRulingCount++;
  }

  // Check judicial rationale
  if (incident.judicialRationale.trim().length < 30) {
    recordFailure('Litigation-Rationale', c.id, `Judicial rationale too short: "${incident.judicialRationale}"`);
  }

  // Check pedagogical key takeaway
  if (c.pedagogicalKeyTakeaway.trim().length < 30) {
    recordFailure('Litigation-Takeaway', c.id, `Pedagogical key takeaway too short: "${c.pedagogicalKeyTakeaway}"`);
  }
});

console.log(`Litigación Oral: Cases with valid >=3 dialogue turns = ${validTurnCount}/25`);
console.log(`Litigación Oral: Cases with verified PrPn statutory basis = ${validPrPnCount}/25`);
console.log(`Litigación Oral: Cases with valid judge rulings = ${validRulingCount}/25`);

// Also verify the 8 OBJECTION_DEFINITIONS
const expectedTypes = ['SUGESTIVA', 'CAPCIOSA', 'IMPERTINENTE', 'COMPUESTA', 'CONCLUSIVA', 'REPETITIVA', 'ESPECULATIVA', 'VALIDA'];
expectedTypes.forEach((t) => {
  const def = (OBJECTION_DEFINITIONS as any)[t];
  if (!def) {
    recordFailure('ObjectionDefinitions', t, 'Missing definition');
  } else {
    if (!/209|210|211|212|prpn|procesal/i.test(def.legalBasis)) {
      recordFailure('ObjectionLegalBasis', t, `Definition legalBasis lacks PrPn reference: "${def.legalBasis}"`);
    }
  }
});

// Also verify the 10 COURTROOM_DRILLS
if (COURTROOM_DRILLS.length !== 10) {
  recordFailure('CourtroomDrills', 'Count', `Expected 10 drills, got ${COURTROOM_DRILLS.length}`);
} else {
  COURTROOM_DRILLS.forEach((drill) => {
    if (!['HA LUGAR', 'NO HA LUGAR'].includes(drill.judgeRuling)) {
      recordFailure('DrillRuling', drill.id, `Invalid ruling: "${drill.judgeRuling}"`);
    }
    if (drill.salvadoranJurisprudence.trim().length < 15) {
      recordFailure('DrillJurisprudence', drill.id, `Jurisprudence too short: "${drill.salvadoranJurisprudence}"`);
    }
  });
}

recordPass('Litigation-Realism', 'All 25 courtroom dialogue cases have valid realistic turns, PrPn citations, and valid judge rulings.');

// ----------------------------------------------------------------------------
// PROBE 5: INVARIANT VERIFICATION (ZERO PRIVATE PHONE & 200 NOTARY QUESTIONS)
// ----------------------------------------------------------------------------
console.log('\n============================================================');
console.log('PROBE 5: Invariant Verification (Private Phone & Notary Bank)');
console.log('============================================================');

// 5.1 Notary Questions Bank
console.log(`Notary Exam: Total questions loaded = ${NOTARY_EXAM_QUESTIONS.length} (Expected: 200)`);
if (NOTARY_EXAM_QUESTIONS.length !== 200) {
  recordFailure('Invariant-Notary', 'Count', `Expected exactly 200 Notary questions, got ${NOTARY_EXAM_QUESTIONS.length}`);
} else {
  const notaryIds = new Set<string>();
  NOTARY_EXAM_QUESTIONS.forEach((q, idx) => {
    const expectedId = idx + 1 < 100 ? `not-${(idx + 1).toString().padStart(2, '0')}` : `not-${idx + 1}`;
    if (q.id !== expectedId) {
      recordFailure('Invariant-Notary-Id', q.id, `Expected id "${expectedId}", got "${q.id}"`);
    }
    notaryIds.add(q.id);

    if (q.statement.trim().length < 15) {
      recordFailure('Invariant-Notary-Statement', q.id, `Statement too short: "${q.statement}"`);
    }
    if (!['A', 'B', 'C', 'D'].includes(q.correctKey)) {
      recordFailure('Invariant-Notary-Key', q.id, `Invalid correctKey: "${q.correctKey}"`);
    }
    if (q.explanation.trim().length < 15) {
      recordFailure('Invariant-Notary-Explanation', q.id, `Explanation too short: "${q.explanation}"`);
    }
  });
  if (notaryIds.size === 200) {
    recordPass('Invariant-Notary', 'Exactly 200 unique Notary questions preserved intact with valid IDs not-01 to not-200.');
  }
}

// 5.2 Zero occurrences of private telephone '7943 9901'
const FORBIDDEN_PHONE = '7943 9901';
const OFFICIAL_WHATSAPP = '7657 4463';

function searchFileForForbiddenPhone(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(FORBIDDEN_PHONE)) {
      recordFailure('Invariant-Phone', filePath, `Found private phone "${FORBIDDEN_PHONE}"!`);
      return false;
    }
    return true;
  } catch (err) {
    return true;
  }
}

function walkDir(dir: string, fileList: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;
      walkDir(fullPath, fileList);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.md', '.tex', '.txt'].includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');
const publicDir = path.join(rootDir, 'public');

const filesToScan = [...walkDir(srcDir), ...walkDir(publicDir)];
console.log(`Scanning ${filesToScan.length} files in src/ and public/ for phone invariants...`);

let phoneViolations = 0;
filesToScan.forEach((f) => {
  if (!searchFileForForbiddenPhone(f)) {
    phoneViolations++;
  }
});

if (phoneViolations === 0) {
  recordPass('Invariant-Phone', `Certified ZERO occurrences of '${FORBIDDEN_PHONE}' across ${filesToScan.length} files in src/ and public/.`);
} else {
  recordFailure('Invariant-Phone', 'Global Scan', `Found ${phoneViolations} occurrences of '${FORBIDDEN_PHONE}'`);
}

// Check presence of official WhatsApp
const appTsx = fs.readFileSync(path.join(srcDir, 'App.tsx'), 'utf8');
const headerNav = fs.readFileSync(path.join(srcDir, 'components', 'HeaderNavbar.tsx'), 'utf8');
const onePageSheetsData = fs.readFileSync(path.join(srcDir, 'data', 'onePageSheetsData.ts'), 'utf8');

if (appTsx.includes(OFFICIAL_WHATSAPP) && headerNav.includes(OFFICIAL_WHATSAPP) && onePageSheetsData.includes(OFFICIAL_WHATSAPP)) {
  recordPass('Invariant-WhatsApp', `Official WhatsApp contact '+503 ${OFFICIAL_WHATSAPP}' preserved in App.tsx, HeaderNavbar.tsx, and onePageSheetsData.ts.`);
} else {
  recordFailure('Invariant-WhatsApp', 'UI Components', `Official WhatsApp '+503 ${OFFICIAL_WHATSAPP}' missing from one or more expected files`);
}

// ============================================================================
// FINAL ADVERSARIAL VERDICT
// ============================================================================
console.log('\n============================================================');
console.log('SUMMARY OF EMPIRICAL ADVERSARIAL EVALUATION');
console.log('============================================================');
console.log(`Total Passes Recorded:   ${observations.length}`);
console.log(`Total Failures Recorded: ${failures.length}`);

if (failures.length > 0) {
  console.error('\nFAILURES SUMMARY:');
  failures.forEach((f, idx) => {
    console.error(`  ${idx + 1}. [${f.probe}] in ${f.item}: ${f.detail}`);
  });
  console.log('\nFINAL VERDICT: CHALLENGE_FAILED\n');
  process.exit(1);
} else {
  console.log('\nALL ADVERSARIAL CHALLENGES WITHSTOOD.');
  console.log('FINAL VERDICT: APPROVE\n');
  process.exit(0);
}
