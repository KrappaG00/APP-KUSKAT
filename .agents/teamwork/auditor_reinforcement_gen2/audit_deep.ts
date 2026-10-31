import { OLYMPIC_THEMATIC_UNITS } from '../../../src/data/jovenesTalentoData';
import { ONE_PAGE_SHEETS } from '../../../src/data/onePageSheetsData';
import { ORAL_LITIGATION_THEMATIC_UNITS } from '../../../src/data/oralLitigationData';
import { CONSTITUTION_LAW_BRANCHES } from '../../../src/data/constitucionalJurisprudenciaData';
import {
  RESIDENTADO_THEMATIC_UNITS,
  RESIDENTADO_QUESTIONS,
} from '../../../src/data/residentadoMedicoData';
import {
  SIGET_THEMATIC_UNITS,
  SIGET_SOLAR_QUESTIONS,
} from '../../../src/data/sigetSolarData';
import { NOTARY_EXAM_QUESTIONS } from '../../../src/data/notaryExamData';

function countWords(str: string): number {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

console.log('=== FORENSIC DEEP AUDIT: PEDAGOGICAL CONTENT & CALCULATIONS ===');

// M1 Jóvenes Talento
console.log('\n--- M1: Jóvenes Talento (MINED-UES) ---');
console.log(`Units count: ${OLYMPIC_THEMATIC_UNITS.length}`);
let m1TotalProofs = 0;
OLYMPIC_THEMATIC_UNITS.forEach((u, i) => {
  const words = countWords(u.substantiveTheory);
  const proofs = u.solvedExamples.length;
  m1TotalProofs += proofs;
  console.log(`Unit [${u.id}] "${u.title}": ${words} words, ${proofs} proofs`);
  if (words < 500) throw new Error(`Unit ${u.id} has only ${words} words (<500)!`);
  if (proofs < 5) throw new Error(`Unit ${u.id} has only ${proofs} proofs (<5)!`);
});
console.log(`M1 Total Proofs: ${m1TotalProofs}`);

// M1 One Page Sheets
console.log('\n--- M1: One-Page Cheat Sheets ---');
console.log(`Sheets count: ${ONE_PAGE_SHEETS.length}`);
let m1TotalSheetExamples = 0;
ONE_PAGE_SHEETS.forEach((s) => {
  const examples = s.solvedPracticeExamples.length;
  m1TotalSheetExamples += examples;
  console.log(`Sheet [${s.id}] "${s.title}": ${examples} solved examples`);
  if (examples < 5) throw new Error(`Sheet ${s.id} has only ${examples} examples (<5)!`);
});
console.log(`M1 Total Sheet Examples: ${m1TotalSheetExamples}`);

// M2 Oral Litigation
console.log('\n--- M2: Oral Litigation (PrPn) ---');
console.log(`Units count: ${ORAL_LITIGATION_THEMATIC_UNITS.length}`);
let m2TotalCourtCases = 0;
ORAL_LITIGATION_THEMATIC_UNITS.forEach((u) => {
  const words = countWords(u.substantiveTheory);
  const cases = u.solvedCases.length;
  m2TotalCourtCases += cases;
  console.log(`Unit [${u.id}] "${u.title}": ${words} words, ${cases} cases`);
  if (words < 500) throw new Error(`Unit ${u.id} has only ${words} words (<500)!`);
  if (cases < 5) throw new Error(`Unit ${u.id} has only ${cases} cases (<5)!`);
  u.solvedCases.forEach((c) => {
    if (!c.dialogueIncident || c.dialogueIncident.dialogue.length < 3) {
      throw new Error(`Court case ${c.id} dialogue incident is incomplete!`);
    }
  });
});
console.log(`M2 Total Court Cases: ${m2TotalCourtCases}`);

// M2 Constitutional Law Branches
console.log('\n--- M2: Constitutional Law Branches ---');
console.log(`Branches count: ${CONSTITUTION_LAW_BRANCHES.length}`);
let m2TotalJurisCases = 0;
CONSTITUTION_LAW_BRANCHES.forEach((b) => {
  const words = countWords(b.substantiveAnalysis);
  const cases = b.solvedCases.length;
  m2TotalJurisCases += cases;
  console.log(`Branch [${b.id}] "${b.name}": ${words} words, ${cases} jurisprudence cases`);
  if (words < 500) throw new Error(`Branch ${b.id} has only ${words} words (<500)!`);
  if (cases < 5) throw new Error(`Branch ${b.id} has only ${cases} cases (<5)!`);
});
console.log(`M2 Total Jurisprudence Cases: ${m2TotalJurisCases}`);

// M3 Residentado Médico
console.log('\n--- M3: Residentado Médico ENAR ---');
console.log(`Units count: ${RESIDENTADO_THEMATIC_UNITS.length}`);
let m3TotalClinicalCases = 0;
RESIDENTADO_THEMATIC_UNITS.forEach((u) => {
  const words = countWords(u.substantiveTheory);
  const cases = u.solvedClinicalCases.length;
  m3TotalClinicalCases += cases;
  console.log(`Unit [${u.id}] "${u.title}": ${words} words, ${cases} clinical cases`);
  if (words < 500) throw new Error(`Unit ${u.id} has only ${words} words (<500)!`);
  if (cases < 5) throw new Error(`Unit ${u.id} has only ${cases} cases (<5)!`);
  u.solvedClinicalCases.forEach((c) => {
    if (!c.differentialDiagnosis || c.differentialDiagnosis.length < 2) {
      throw new Error(`Clinical case ${c.id} lacks differential diagnoses!`);
    }
    if (!c.managementPlan || c.managementPlan.length < 3) {
      throw new Error(`Clinical case ${c.id} lacks management plan!`);
    }
  });
});
console.log(`M3 Total Clinical Cases: ${m3TotalClinicalCases}`);
console.log(`M3 Question Bank: ${RESIDENTADO_QUESTIONS.length} questions`);
if (RESIDENTADO_QUESTIONS.length < 50) throw new Error(`M3 questions bank has < 50 questions!`);

// M4 Técnico Solar & SIGET
console.log('\n--- M4: Técnico Solar & SIGET ---');
console.log(`Units count: ${SIGET_THEMATIC_UNITS.length}`);
let m4TotalCalcs = 0;
SIGET_THEMATIC_UNITS.forEach((u) => {
  const words = countWords(u.substantiveTheory);
  const calcs = u.solvedCalculations.length;
  m4TotalCalcs += calcs;
  console.log(`Unit [${u.id}] "${u.title}": ${words} words, ${calcs} calculations`);
  if (words < 500) throw new Error(`Unit ${u.id} has only ${words} words (<500)!`);
  if (calcs < 5) throw new Error(`Unit ${u.id} has only ${calcs} calculations (<5)!`);
  u.solvedCalculations.forEach((c) => {
    if (Object.keys(c.designParameters).length < 2) throw new Error(`Calculation ${c.id} has < 2 design parameters!`);
    if (c.engineeringFormulas.length < 1) throw new Error(`Calculation ${c.id} has no formulas!`);
    if (c.stepByStepSubstitution.length < 30) throw new Error(`Calculation ${c.id} stepByStepSubstitution too short!`);
    if (!c.numericalResult || c.numericalResult.length < 2) throw new Error(`Calculation ${c.id} numericalResult missing!`);
  });
});
console.log(`M4 Total Calculations: ${m4TotalCalcs}`);
console.log(`M4 Question Bank: ${SIGET_SOLAR_QUESTIONS.length} questions`);
if (SIGET_SOLAR_QUESTIONS.length < 50) throw new Error(`M4 questions bank has < 50 questions!`);

// Cumulative Solved Items
const totalSolved = m1TotalProofs + m1TotalSheetExamples + m2TotalCourtCases + m2TotalJurisCases + m3TotalClinicalCases + m4TotalCalcs;
console.log(`\n=== TOTAL CUMULATIVE SOLVED ITEMS: ${totalSolved} (Expected 195) ===`);
if (totalSolved !== 195) throw new Error(`Expected 195 total solved items, found ${totalSolved}!`);

console.log('\n=== ALL SUBSTANTIVE PEDAGOGICAL CONTENT CHECKS PASSED EMPIRICALLY ===');
