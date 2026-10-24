import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  TECHNICAL_COURSES,
  SALVADORAN_NORMATIVE_INSTITUTIONS,
} from '../../../src/data/technicalCoursesData';
import {
  TECHNICAL_COURSES as COURSES_FROM_VIEW,
  SALVADORAN_NORMATIVE_INSTITUTIONS as NORMS_FROM_VIEW,
  TechnicalCoursesView,
} from '../../../src/components/TechnicalCoursesView';

// Specialized question banks for collision checking
import { ADMIN_LAW_QUESTIONS } from '../../../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../../../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../../../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../../../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../../../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../../../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../../../src/data/complianceAmlData';

console.log('================================================================');
console.log('  VICTORY AUDITOR 3: INDEPENDENT EMPIRICAL VERIFICATION REPORT  ');
console.log('================================================================');

let failedChecks = 0;

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`[FAIL] ${msg}`);
    failedChecks++;
  } else {
    // Keep output manageable: only log summaries or critical passes
  }
}

// ----------------------------------------------------------------------------
// 1. EXACTLY 10 COURSES
// ----------------------------------------------------------------------------
console.log('\n--- 1. Verification of 10 Courses ---');
assert(Array.isArray(TECHNICAL_COURSES), 'TECHNICAL_COURSES is an array');
assert(TECHNICAL_COURSES.length === 10, `Exactly 10 courses (found: ${TECHNICAL_COURSES.length})`);

const expectedCourseIds = [
  'electricidad',
  'electronica',
  'cocina-saludable',
  'soldadura',
  'microsoldadura',
  'reparacion-dispositivos',
  'agricultura-pequena',
  'logistica-metrologia',
  'mecanica-motos',
  'fontaneria-hidraulica',
];

const courseIds = TECHNICAL_COURSES.map(c => c.id);
assert(courseIds.length === 10, '10 course IDs');
expectedCourseIds.forEach(id => {
  assert(courseIds.includes(id), `Course list contains id "${id}"`);
});

TECHNICAL_COURSES.forEach((c, idx) => {
  console.log(`Course ${idx + 1}: [${c.id}] "${c.title}" (${c.totalHours}h)`);
  assert(c.totalHours === 40, `Course ${c.id} totalHours === 40`);
});

// ----------------------------------------------------------------------------
// 2. 4 MODULES OF 10 HOURS EACH = 40 MODULES, 400 HOURS TOTAL
// ----------------------------------------------------------------------------
console.log('\n--- 2. Verification of 4 Modules x 10 Hours (40 Modules, 400 Hours) ---');
let totalModulesCount = 0;
let totalHoursSum = 0;

TECHNICAL_COURSES.forEach((c) => {
  assert(c.modules.length === 4, `Course "${c.id}" has exactly 4 modules (found: ${c.modules.length})`);
  let courseHours = 0;
  c.modules.forEach((m, mIdx) => {
    totalModulesCount++;
    assert(m.number === mIdx + 1, `Module #${mIdx + 1} of "${c.id}" has correct sequential number`);
    assert(m.hours === 10, `Module ${m.number} of "${c.id}" has duration exactly 10 hours (found: ${m.hours})`);
    courseHours += m.hours;
  });
  assert(courseHours === 40, `Course "${c.id}" total duration is 40 hours (found: ${courseHours})`);
  totalHoursSum += courseHours;
});

console.log(`Total modules: ${totalModulesCount}`);
console.log(`Total hours: ${totalHoursSum}`);
assert(totalModulesCount === 40, `Grand total of modules across all courses is exactly 40 (found: ${totalModulesCount})`);
assert(totalHoursSum === 400, `Grand total duration across all courses is exactly 400 hours (found: ${totalHoursSum})`);

// ----------------------------------------------------------------------------
// 3. SALVADORAN LEGAL FRAMEWORK (8 MANDATORY INSTITUTIONS)
// ----------------------------------------------------------------------------
console.log('\n--- 3. Verification of Salvadoran Legal Framework (8 Institutions) ---');
const mandatoryInstitutions = [
  'SIGET',
  'MTPS',
  'MINSAL',
  'MARN',
  'MAG',
  'ANDA',
  'OSARTEC',
  'INCAF',
];

const dictKeys = Object.keys(SALVADORAN_NORMATIVE_INSTITUTIONS);
mandatoryInstitutions.forEach((inst) => {
  assert(dictKeys.includes(inst), `Dictionary includes institution ${inst}`);
});

let totalLegalCitations = 0;
const citedInstitutions = new Set<string>();
const allCitationsText: string[] = [];

TECHNICAL_COURSES.forEach((c) => {
  c.modules.forEach((m) => {
    assert(Array.isArray(m.legalCitations) && m.legalCitations.length >= 1, `Module ${m.number} of "${c.id}" has >= 1 legal citations`);
    m.legalCitations.forEach((cit) => {
      totalLegalCitations++;
      citedInstitutions.add(cit.institution);
      allCitationsText.push(`${cit.institution} ${cit.law || ''} ${cit.decree || ''} ${cit.article || ''} ${cit.summary || ''}`);
      assert(cit.institution.trim().length > 0, `Legal citation institution is valid: "${cit.institution}"`);
      assert(cit.decree.trim().length > 0, `Legal citation decree is valid: "${cit.decree}"`);
      assert(cit.article.trim().length > 0, `Legal citation article is valid: "${cit.article}"`);
      assert(cit.summary.trim().length > 10, `Legal citation summary is valid: "${cit.summary.substring(0, 30)}..."`);
    });
  });
});

console.log(`Total legal citations found: ${totalLegalCitations}`);
console.log(`Institutions cited: ${Array.from(citedInstitutions).sort().join(', ')}`);
mandatoryInstitutions.forEach((inst) => {
  assert(citedInstitutions.has(inst), `Mandatory institution ${inst} is cited in modules`);
});

const joinedLegal = allCitationsText.join(' ');
assert(/896/.test(joinedLegal), 'INCAF Decree 896 explicitly cited');
assert(/254|86/.test(joinedLegal), 'MTPS Decree 254 / D.E. 86 explicitly cited');
assert(/SIGET|107|70/.test(joinedLegal), 'SIGET legal framework cited');
assert(/955/.test(joinedLegal), 'MINSAL Decree 955 (Código de Salud) explicitly cited');
assert(/233|41/.test(joinedLegal), 'MARN Decree 233 / D.E. 41 explicitly cited');
assert(/315/.test(joinedLegal), 'MAG Decree 315 explicitly cited');
assert(/ANDA/.test(joinedLegal), 'ANDA technical standards explicitly cited');
assert(/805/.test(joinedLegal), 'OSARTEC Decree 805 explicitly cited');

// ----------------------------------------------------------------------------
// 4. WORKSHOP FORMULAS IN ALL 40 MODULES
// ----------------------------------------------------------------------------
console.log('\n--- 4. Verification of Workshop Formulas in All 40 Modules ---');
let totalFormulas = 0;

TECHNICAL_COURSES.forEach((c) => {
  c.modules.forEach((m) => {
    const formulas = m.workshopFormulas;
    assert(Array.isArray(formulas) && formulas.length >= 1, `Module ${m.number} of "${c.id}" has >= 1 workshop formulas`);
    formulas.forEach((f) => {
      totalFormulas++;
      const expr = (f as any).expression || (f as any).formula;
      assert(f.name.trim().length > 3, `Formula name is defined: "${f.name}"`);
      assert(typeof expr === 'string' && expr.trim().length > 3, `Formula expression is defined: "${expr}"`);
      assert(f.description.trim().length > 10, `Formula description is defined`);
      assert(Array.isArray(f.variables) && f.variables.length >= 2, `Formula has >= 2 variables defined (found: ${f.variables?.length})`);
      f.variables.forEach((v) => {
        assert(v.symbol.trim().length > 0, `Variable symbol defined: "${v.symbol}"`);
        assert(v.meaning.trim().length > 0, `Variable meaning defined: "${v.meaning}"`);
        assert(v.unit.trim().length > 0, `Variable unit defined: "${v.unit}"`);
      });
      const example = (f as any).practicalExample || (f as any).example || (f as any).practicalApplication;
      assert(typeof example === 'string' && example.trim().length > 15, `Formula practical example defined`);
    });
  });
});

console.log(`Total workshop formulas found: ${totalFormulas} (across 40 modules)`);
assert(totalFormulas >= 40, `At least 40 formulas in total (found: ${totalFormulas})`);

// ----------------------------------------------------------------------------
// 5. FORMATIVE SELF-ASSESSMENT (>=3 QUESTIONS / MODULE, >=120 TOTAL)
// ----------------------------------------------------------------------------
console.log('\n--- 5. Verification of Formative Self-Assessment Questions ---');
let totalQuestions = 0;
const allQuizIds = new Set<string>();

TECHNICAL_COURSES.forEach((c) => {
  c.modules.forEach((m) => {
    assert(Array.isArray(m.quiz) && m.quiz.length >= 3, `Module ${m.number} of "${c.id}" has >= 3 quiz questions (found: ${m.quiz?.length})`);
    m.quiz.forEach((q) => {
      totalQuestions++;
      assert(!allQuizIds.has(q.id), `Question ID "${q.id}" is unique within technical courses`);
      allQuizIds.add(q.id);

      const qText = q.question || (q as any).statement;
      assert(typeof qText === 'string' && qText.trim().length >= 25, `Question text length >= 25: "${qText.substring(0, 35)}..."`);

      // Check options
      if (Array.isArray(q.options)) {
        assert(q.options.length === 4, `Question "${q.id}" has 4 options array`);
      } else if (q.options && typeof q.options === 'object') {
        const keys = Object.keys(q.options).sort();
        assert(JSON.stringify(keys) === JSON.stringify(['A', 'B', 'C', 'D']), `Question "${q.id}" option keys are exactly ['A', 'B', 'C', 'D']`);
        ['A', 'B', 'C', 'D'].forEach((k) => {
          const val = (q.options as any)[k];
          assert(typeof val === 'string' && val.trim().length >= 2, `Option ${k} has valid text: "${val}"`);
        });
      } else {
        assert(false, `Question "${q.id}" has invalid options structure`);
      }

      assert(['A', 'B', 'C', 'D'].includes(q.correctAnswer), `Question "${q.id}" correctAnswer is one of A, B, C, D (found: ${q.correctAnswer})`);
      assert(typeof q.explanation === 'string' && q.explanation.trim().length >= 20, `Question "${q.id}" explanation is detailed`);

      const legal = q.legalBasis || (q as any).legalOrTechnicalBasis || (q as any).technicalStandard;
      assert(typeof legal === 'string' && legal.trim().length >= 5, `Question "${q.id}" legal/technical basis is defined: "${legal}"`);
    });
  });
});

console.log(`Total quiz questions found: ${totalQuestions}`);
assert(totalQuestions >= 120, `Total quiz questions >= 120 (found: ${totalQuestions})`);

// Collision checks with 1,400 specialized questions
console.log('\n--- Collision Check: 1,400 Specialized Questions ---');
const specializedLists = [
  ADMIN_LAW_QUESTIONS,
  SALUD_PRIMARIA_QUESTIONS,
  INGENIERIA_QUESTIONS,
  NOTARY_EXAM_QUESTIONS,
  CSSP_QUESTIONS_DATA,
  ANSP_ASCENSO_QUESTIONS,
  COMPLIANCE_QUESTIONS,
];
const specializedIds = new Set<string>();
specializedLists.forEach((l) => l.forEach((item: any) => specializedIds.add(String(item.id))));
assert(specializedIds.size === 1400, `Specialized questions set has exactly 1,400 unique IDs (found: ${specializedIds.size})`);

const collisionsWithSpecialized = Array.from(allQuizIds).filter((id) => specializedIds.has(id));
console.log(`Collisions with specialized questions: ${collisionsWithSpecialized.length}`);
assert(collisionsWithSpecialized.length === 0, `Zero collisions with specialized questions (found: ${collisionsWithSpecialized.length})`);

// Collision checks with 17,640 base bank questions in public/data
console.log('\n--- Collision Check: Base Bank Questions in public/data ---');
const publicDataDir = path.resolve('public/data');
const baseBankIds = new Set<string>();

function scanBaseDir(dir: string) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanBaseDir(full);
    } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'manifest.json' && entry.name !== 'curriculum.json') {
      try {
        const data = JSON.parse(fs.readFileSync(full, 'utf-8'));
        if (Array.isArray(data)) {
          data.forEach((item: any) => {
            if (item && item.id) baseBankIds.add(String(item.id));
          });
        }
      } catch (err) {}
    }
  }
}
scanBaseDir(publicDataDir);
console.log(`Total base bank IDs scanned: ${baseBankIds.size}`);
assert(baseBankIds.size >= 17000, `Base bank contains >= 17,000 questions (found: ${baseBankIds.size})`);

const collisionsWithBase = Array.from(allQuizIds).filter((id) => baseBankIds.has(id));
console.log(`Collisions with base bank: ${collisionsWithBase.length}`);
assert(collisionsWithBase.length === 0, `Zero collisions with base bank (found: ${collisionsWithBase.length})`);

// ----------------------------------------------------------------------------
// 6. UI MODERNIZATION & RE-EXPORT BRIDGE
// ----------------------------------------------------------------------------
console.log('\n--- 6. Verification of UI Modernization and Re-Export Bridge ---');
assert(COURSES_FROM_VIEW === TECHNICAL_COURSES, 'TechnicalCoursesView re-exports TECHNICAL_COURSES with identical reference');
assert(NORMS_FROM_VIEW === SALVADORAN_NORMATIVE_INSTITUTIONS, 'TechnicalCoursesView re-exports SALVADORAN_NORMATIVE_INSTITUTIONS with identical reference');

// Verify bridge file exists and re-exports
const bridgePath = path.resolve('src/views/TechnicalCoursesView.tsx');
assert(fs.existsSync(bridgePath), 'Bridge file src/views/TechnicalCoursesView.tsx exists');
const bridgeContent = fs.readFileSync(bridgePath, 'utf-8');
assert(bridgeContent.includes("export * from '../components/TechnicalCoursesView'"), 'Bridge file re-exports everything from components/TechnicalCoursesView');
assert(bridgeContent.includes("export { default } from '../components/TechnicalCoursesView'"), 'Bridge file re-exports default component');

// Test static markup render of TechnicalCoursesView
console.log('\n--- Testing React SSR Render of TechnicalCoursesView ---');
try {
  const element = React.createElement(TechnicalCoursesView, { onBack: () => {} });
  const html = renderToStaticMarkup(element);
  console.log(`Rendered HTML length: ${html.length} characters`);
  assert(typeof html === 'string' && html.length > 5000, `TechnicalCoursesView renders static HTML successfully (length: ${html.length} chars)`);
  assert(html.includes('Electricidad Residencial e Industrial'), 'Rendered HTML contains course title');
  assert(html.includes('40 horas') || html.includes('40h') || html.includes('40 Horas') || html.includes('400 Horas'), 'Rendered HTML contains hours badge/text');
  assert(html.includes('SIGET') || html.includes('MTPS') || html.includes('INCAF'), 'Rendered HTML contains legal institution badges');
} catch (e: any) {
  assert(false, `TechnicalCoursesView render threw error: ${e.message}`);
}

// ----------------------------------------------------------------------------
// SUMMARY
// ----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`AUDIT FINISHED. Total Failures: ${failedChecks}`);
console.log('================================================================');

if (failedChecks > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
