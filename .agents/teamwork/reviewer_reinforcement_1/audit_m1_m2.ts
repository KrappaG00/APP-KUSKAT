import { OLYMPIC_THEMATIC_UNITS, OLYMPIC_PROBLEMS_DATA } from '../../../src/data/jovenesTalentoData';
import { ONE_PAGE_SHEETS } from '../../../src/data/onePageSheetsData';
import { ORAL_LITIGATION_THEMATIC_UNITS, COURTROOM_DRILLS, OBJECTION_DEFINITIONS } from '../../../src/data/oralLitigationData';
import {
  CONSTITUTION_LAW_BRANCHES,
  CONSTITUTIONAL_CASES,
  AMPARO_STEP_GUIDE,
  HABEAS_CORPUS_STEP_GUIDE,
  INCONSTITUCIONALIDAD_STEP_GUIDE,
  AMPARO_RESOLVED_WORKSHOP_CASE,
  HABEAS_CORPUS_RESOLVED_WORKSHOP_CASE,
  INCONSTITUCIONALIDAD_RESOLVED_WORKSHOP_CASE,
} from '../../../src/data/constitucionalJurisprudenciaData';

function countWords(str: string): number {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(w => w.length > 0).length;
}

console.log('================ AUDIT MILESTONE M1 ================');
console.log(`Olympic Units count: ${OLYMPIC_THEMATIC_UNITS.length}`);
let totalOlympicProofs = 0;
OLYMPIC_THEMATIC_UNITS.forEach((u, i) => {
  const words = countWords(u.substantiveTheory);
  const proofs = u.solvedExamples.length;
  totalOlympicProofs += proofs;
  console.log(`Unit ${i + 1} [${u.id}]: "${u.title}" | Words: ${words} | Solved Proofs: ${proofs}`);
  u.solvedExamples.forEach((ex, j) => {
    const proofWords = countWords(ex.stepByStepProof);
    if (proofWords < 30) {
      console.warn(`  WARNING: Short proof in ${u.id} ex ${j + 1}: ${proofWords} words`);
    }
  });
});
console.log(`Total Olympic Solved Proofs: ${totalOlympicProofs}`);

console.log(`\nOne-Page Sheets count: ${ONE_PAGE_SHEETS.length}`);
let totalSheetExamples = 0;
ONE_PAGE_SHEETS.forEach((s, i) => {
  const exCount = s.solvedPracticeExamples.length;
  totalSheetExamples += exCount;
  const drills = s.retentionDrills.length;
  console.log(`Sheet ${i + 1} [${s.id}]: "${s.title}" | Solved Examples: ${exCount} | Drills: ${drills}`);
});
console.log(`Total Sheet Solved Examples: ${totalSheetExamples}`);

console.log('\n================ AUDIT MILESTONE M2 ================');
console.log(`Oral Litigation Units count: ${ORAL_LITIGATION_THEMATIC_UNITS.length}`);
let totalCourtroomCases = 0;
ORAL_LITIGATION_THEMATIC_UNITS.forEach((u, i) => {
  const words = countWords(u.substantiveTheory);
  const cases = u.solvedCases.length;
  totalCourtroomCases += cases;
  console.log(`Litigation Unit ${i + 1} [${u.id}]: "${u.title}" | Words: ${words} | Solved Courtroom Cases: ${cases}`);
  u.solvedCases.forEach((sc, j) => {
    const turns = sc.dialogueIncident?.dialogue?.length || 0;
    if (turns < 3) {
      console.warn(`  WARNING: Few dialogue turns in ${u.id} case ${j + 1}: ${turns} turns`);
    }
  });
});
console.log(`Total Courtroom Dialogue Cases: ${totalCourtroomCases}`);

console.log(`\nLaw Branches count: ${CONSTITUTION_LAW_BRANCHES.length}`);
let totalBranchCases = 0;
CONSTITUTION_LAW_BRANCHES.forEach((b, i) => {
  const words = countWords(b.substantiveAnalysis);
  const cases = b.solvedCases.length;
  totalBranchCases += cases;
  console.log(`Branch ${i + 1} [${b.id}]: "${b.name}" | Words: ${words} | Solved Cases: ${cases}`);
});
console.log(`Total Branch Solved Cases: ${totalBranchCases}`);

console.log(`\nProcedural Guides:`);
console.log(`Amparo Steps: ${AMPARO_STEP_GUIDE.length}, Workshop Stages: ${AMPARO_RESOLVED_WORKSHOP_CASE.proceduralStages.length}`);
console.log(`Habeas Corpus Steps: ${HABEAS_CORPUS_STEP_GUIDE.length}, Workshop Stages: ${HABEAS_CORPUS_RESOLVED_WORKSHOP_CASE.proceduralStages.length}`);
console.log(`Inconstitucionalidad Steps: ${INCONSTITUCIONALIDAD_STEP_GUIDE.length}, Workshop Stages: ${INCONSTITUCIONALIDAD_RESOLVED_WORKSHOP_CASE.proceduralStages.length}`);

console.log(`\nCourtroom Drills: ${COURTROOM_DRILLS.length}`);
console.log(`Objection Definitions: ${Object.keys(OBJECTION_DEFINITIONS).length}`);
console.log(`Landmark Constitutional Cases: ${CONSTITUTIONAL_CASES.length}`);
