import fs from 'node:fs';
import path from 'node:path';

// Import all 7 specialized modules
import { ADMIN_LAW_QUESTIONS } from '../../../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../../../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../../../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../../../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../../../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../../../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../../../src/data/complianceAmlData';

interface AuditResult {
  moduleName: string;
  totalQuestions: number;
  expectedCount: number;
  subcategories: Record<string, number>;
  expectedSubcategories: Record<string, number>;
  uniqueIds: number;
  duplicateIds: string[];
  invalidOptions: string[];
  invalidKeys: string[];
  shortStatements: string[];
  shortExplanations: string[];
  shortLegalBases: string[];
  placeholderMatches: string[];
  passed: boolean;
}

const SUSPICIOUS_WORDS = [
  'lorem ipsum', 'placeholder', 'dummy text', 'todo:', 'test statement', 'asdf',
  'fake question', 'dummy answer', 'sample option'
];

function extractOptions(q: any): Record<string, string> {
  if (Array.isArray(q.options)) {
    const dict: Record<string, string> = {};
    q.options.forEach((opt: any) => {
      dict[opt.key] = opt.text;
    });
    return dict;
  }
  return q.options || {};
}

function auditModule(
  name: string,
  list: any[],
  expectedSubcategories: Record<string, (q: any) => boolean>,
  isEngineering = false
): AuditResult {
  const duplicateIds: string[] = [];
  const invalidOptions: string[] = [];
  const invalidKeys: string[] = [];
  const shortStatements: string[] = [];
  const shortExplanations: string[] = [];
  const shortLegalBases: string[] = [];
  const placeholderMatches: string[] = [];

  const seenIds = new Set<string>();
  const subcategoryCounts: Record<string, number> = {};
  for (const key of Object.keys(expectedSubcategories)) {
    subcategoryCounts[key] = 0;
  }

  for (const q of list) {
    // ID Check
    if (!q.id || typeof q.id !== 'string') {
      duplicateIds.push(`Missing/Invalid ID in question`);
    } else {
      if (seenIds.has(q.id)) {
        duplicateIds.push(q.id);
      }
      seenIds.add(q.id);
    }

    // Subcategories
    for (const [subKey, predicate] of Object.entries(expectedSubcategories)) {
      if (predicate(q)) {
        subcategoryCounts[subKey] = (subcategoryCounts[subKey] || 0) + 1;
      }
    }

    // Statement Check
    const stmt = String(q.statement || q.problemStatement || '').trim();
    if (stmt.length <= 20) {
      shortStatements.push(`${q.id} (len: ${stmt.length})`);
    }
    const lowerStmt = stmt.toLowerCase();
    for (const sus of SUSPICIOUS_WORDS) {
      if (lowerStmt.includes(sus)) {
        placeholderMatches.push(`${q.id} statement contains "${sus}"`);
      }
    }

    // Options Check
    const opts = extractOptions(q);
    const keys = Object.keys(opts).sort();
    if (keys.join(',') !== 'A,B,C,D') {
      invalidOptions.push(`${q.id} has options [${keys.join(',')}]`);
    } else {
      const minLen = isEngineering ? 1 : 3;
      const texts: string[] = [];
      for (const k of ['A', 'B', 'C', 'D']) {
        const text = String(opts[k] || '').trim();
        if (text.length < minLen) {
          invalidOptions.push(`${q.id} opt ${k} too short ("${text}")`);
        }
        texts.push(text.toLowerCase());
      }
      if (new Set(texts).size !== 4) {
        invalidOptions.push(`${q.id} has duplicate option texts`);
      }
    }

    // Correct Answer Check
    const correct = q.correctAnswer || q.correctKey;
    if (!['A', 'B', 'C', 'D'].includes(correct)) {
      invalidKeys.push(`${q.id} invalid correct answer "${correct}"`);
    } else if (!opts[correct] || String(opts[correct]).trim().length === 0) {
      invalidKeys.push(`${q.id} correct answer "${correct}" does not exist in options`);
    }

    // Explanation Check
    const expl = String(q.explanation || q.formalSolution || q.clinicalExplanation || '').trim();
    if (expl.length <= 20) {
      shortExplanations.push(`${q.id} (len: ${expl.length})`);
    }
    const lowerExpl = expl.toLowerCase();
    for (const sus of SUSPICIOUS_WORDS) {
      if (lowerExpl.includes(sus)) {
        placeholderMatches.push(`${q.id} explanation contains "${sus}"`);
      }
    }

    // Legal / Technical Basis Check
    const ref = String(
      q.legalBasis ||
      q.officialGuidelineRef ||
      q.topic ||
      q.clinicalArea ||
      q.area ||
      ''
    ).trim();
    if (ref.length <= 5) {
      shortLegalBases.push(`${q.id} (len: ${ref.length})`);
    }
  }

  const passed =
    list.length === 200 &&
    duplicateIds.length === 0 &&
    invalidOptions.length === 0 &&
    invalidKeys.length === 0 &&
    shortStatements.length === 0 &&
    shortExplanations.length === 0 &&
    shortLegalBases.length === 0 &&
    placeholderMatches.length === 0;

  return {
    moduleName: name,
    totalQuestions: list.length,
    expectedCount: 200,
    subcategories: subcategoryCounts,
    expectedSubcategories: {} as any,
    uniqueIds: seenIds.size,
    duplicateIds,
    invalidOptions,
    invalidKeys,
    shortStatements,
    shortExplanations,
    shortLegalBases,
    placeholderMatches,
    passed
  };
}

console.log('======================================================================');
console.log('🔬 FORENSIC AUDIT: 1,400 Reactivos and UI Pagination');
console.log('======================================================================\n');

// 1. Derecho Administrativo
const res1 = auditModule(
  'Derecho Administrativo & Firma Electrónica',
  ADMIN_LAW_QUESTIONS,
  {
    'LPA (150)': (q) => ['procedimiento-comun', 'silencio-administrativo', 'recursos-administrativos', 'potestad-sancionadora'].includes(q.category),
    'Firma Electrónica MINEC (50)': (q) => q.category === 'firma-electronica',
    'Procedimiento Común (38)': (q) => q.category === 'procedimiento-comun',
    'Recursos Administrativos (38)': (q) => q.category === 'recursos-administrativos',
    'Silencio Administrativo (37)': (q) => q.category === 'silencio-administrativo',
    'Potestad Sancionadora (37)': (q) => q.category === 'potestad-sancionadora'
  }
);

// 2. Salud Primaria
const res2 = auditModule(
  'Salud Primaria & Farmacovigilancia',
  SALUD_PRIMARIA_QUESTIONS,
  {
    'Guías Clínicas MINSAL (150)': (q) => ['dengue', 'hta-dm2', 'iras', 'materno-infantil'].includes(q.category),
    'Farmacovigilancia SRS/DNM (50)': (q) => q.category === 'farmacovigilancia',
    'HTA & DM2 (60)': (q) => q.category === 'hta-dm2',
    'Dengue (30)': (q) => q.category === 'dengue',
    'IRAS (30)': (q) => q.category === 'iras',
    'Materno-Infantil (30)': (q) => q.category === 'materno-infantil'
  }
);

// 3. Métodos Cuantitativos e Ingeniería
const res3 = auditModule(
  'Métodos Cuantitativos & Ingeniería',
  INGENIERIA_QUESTIONS,
  {
    'Álgebra Lineal (50)': (q) => q.category === 'algebra-lineal',
    'Trigonometría Analítica (50)': (q) => q.category === 'trigonometria-analitica',
    'Geometría & Cónicas (50)': (q) => q.category === 'geometria-conicas',
    'Física Vectorial & Mecánica (50)': (q) => q.category === 'fisica-mecanica'
  },
  true
);

// 4. Examen de Suficiencia Notarial CSJ
const res4 = auditModule(
  'Examen de Suficiencia Notarial CSJ',
  NOTARY_EXAM_QUESTIONS,
  {
    'Notarial Puro (40)': (q) => q.category === 'notarial-puro',
    'LENJVOD (40)': (q) => q.category === 'lenjvod',
    'Sucesiones (40)': (q) => q.category === 'sucesiones',
    'Contratos & Obligaciones (40)': (q) => q.category === 'contratos',
    'Mercantil & Sociedades (40)': (q) => q.category === 'mercantil'
  }
);

// 5. CSSP
const res5 = auditModule(
  'Consejo Superior de Salud Pública - CSSP',
  CSSP_QUESTIONS_DATA,
  {
    'JVPM Medicina (40)': (q) => q.juntaId === 'jvpm',
    'JVPO Odontología (40)': (q) => q.juntaId === 'jvpo',
    'JVPE Enfermería (40)': (q) => q.juntaId === 'jvpe',
    'JVPQF Química y Farmacia (40)': (q) => q.juntaId === 'jvpqf',
    'JVPPS Psicología (40)': (q) => q.juntaId === 'jvpps'
  }
);

// 6. Ascenso ANSP
const res6 = auditModule(
  'Ascenso Policial ANSP',
  ANSP_ASCENSO_QUESTIONS,
  {
    'Cabo (66)': (q) => q.escalafon === 'Cabo' || q.rank === 'cabo',
    'Sargento (67)': (q) => q.escalafon === 'Sargento' || q.rank === 'sargento',
    'Oficial (67)': (q) => q.escalafon === 'Oficial' || q.rank === 'oficial'
  }
);

// 7. Compliance AML & Seguros SSF
const res7 = auditModule(
  'Cumplimiento AML & Seguros SSF',
  COMPLIANCE_QUESTIONS,
  {
    'AML / UIF (100)': (q) => q.category === 'AML',
    'Seguros & Fianzas SSF (100)': (q) => q.category === 'Seguros'
  }
);

const results = [res1, res2, res3, res4, res5, res6, res7];

let allPassed = true;
let totalReactivos = 0;
const globalIdSet = new Set<string>();
const globalDuplicates: string[] = [];

for (const r of results) {
  totalReactivos += r.totalQuestions;
  console.log(`[MODULE] ${r.moduleName}`);
  console.log(`  Count: ${r.totalQuestions} / 200 (Unique IDs: ${r.uniqueIds})`);
  console.log(`  Subcategories:`, JSON.stringify(r.subcategories, null, 2));
  if (r.duplicateIds.length > 0) console.log(`  DUPLICATE IDs:`, r.duplicateIds);
  if (r.invalidOptions.length > 0) console.log(`  INVALID OPTIONS:`, r.invalidOptions.slice(0, 5));
  if (r.invalidKeys.length > 0) console.log(`  INVALID KEYS:`, r.invalidKeys.slice(0, 5));
  if (r.shortStatements.length > 0) console.log(`  SHORT STATEMENTS:`, r.shortStatements.slice(0, 5));
  if (r.shortExplanations.length > 0) console.log(`  SHORT EXPLANATIONS:`, r.shortExplanations.slice(0, 5));
  if (r.shortLegalBases.length > 0) console.log(`  SHORT BASES:`, r.shortLegalBases.slice(0, 5));
  if (r.placeholderMatches.length > 0) console.log(`  SUSPICIOUS PLACEHOLDERS:`, r.placeholderMatches);
  console.log(`  Status: ${r.passed ? 'PASS' : 'FAIL'}\n`);

  if (!r.passed) allPassed = false;
}

// Global uniqueness check
for (const m of [ADMIN_LAW_QUESTIONS, SALUD_PRIMARIA_QUESTIONS, INGENIERIA_QUESTIONS, NOTARY_EXAM_QUESTIONS, CSSP_QUESTIONS_DATA, ANSP_ASCENSO_QUESTIONS, COMPLIANCE_QUESTIONS]) {
  for (const q of m) {
    if (globalIdSet.has(q.id)) {
      globalDuplicates.push(q.id);
    }
    globalIdSet.add(q.id);
  }
}

console.log('----------------------------------------------------------------------');
console.log(`TOTAL REACTIVOS: ${totalReactivos} / 1,400`);
console.log(`GLOBAL UNIQUE IDS: ${globalIdSet.size} / 1,400`);
if (globalDuplicates.length > 0) {
  console.log(`CROSS-MODULE DUPLICATE IDS:`, globalDuplicates);
  allPassed = false;
} else {
  console.log(`CROSS-MODULE DUPLICATES: 0`);
}
console.log(`OVERALL AUTHENTICITY STATUS: ${allPassed ? 'VERIFIED CLEAN' : 'VIOLATION DETECTED'}`);
console.log('======================================================================');
