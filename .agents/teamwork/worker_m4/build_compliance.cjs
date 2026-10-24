const fs = require('fs');
const path = require('path');

const { allAmlQuestions } = require('./data_compliance_aml.cjs');
const { allSegurosQuestions } = require('./data_compliance_seguros.cjs');

console.log('Validating Compliance questions counts:');
console.log('AML count:', allAmlQuestions.length, '(expected 100)');
console.log('Seguros count:', allSegurosQuestions.length, '(expected 100)');

if (allAmlQuestions.length !== 100) throw new Error('AML count must be 100');
if (allSegurosQuestions.length !== 100) throw new Error('Seguros count must be 100');

const allQuestions = [...allAmlQuestions, ...allSegurosQuestions];
console.log('Total questions:', allQuestions.length, '(expected 200)');
if (allQuestions.length !== 200) throw new Error('Total questions must be 200');

// Validate unique IDs and schema
const idSet = new Set();
allQuestions.forEach((q, idx) => {
  if (idSet.has(q.id)) {
    throw new Error(`Duplicate ID detected: ${q.id} at index ${idx}`);
  }
  idSet.add(q.id);

  if (!['AML', 'Seguros'].includes(q.category)) {
    throw new Error(`Invalid category: ${q.category} in ${q.id}`);
  }
  if (q.category === 'AML' && q.categoryLabel !== 'Prevención de Lavado (AML)') {
    throw new Error(`Invalid categoryLabel for AML in ${q.id}`);
  }
  if (q.category === 'Seguros' && q.categoryLabel !== 'Seguros y Fianzas (SSF)') {
    throw new Error(`Invalid categoryLabel for Seguros in ${q.id}`);
  }

  // Options MUST be an object with A, B, C, D (NOT an array!)
  if (typeof q.options !== 'object' || Array.isArray(q.options)) {
    throw new Error(`Options must be an object (not array) in ${q.id}`);
  }
  const keys = Object.keys(q.options).sort();
  if (JSON.stringify(keys) !== JSON.stringify(['A', 'B', 'C', 'D'])) {
    throw new Error(`Option keys must be ['A', 'B', 'C', 'D'] in ${q.id}, got ${JSON.stringify(keys)}`);
  }
  ['A', 'B', 'C', 'D'].forEach(k => {
    const text = q.options[k];
    if (!text || typeof text !== 'string' || text.trim().length < 5) {
      throw new Error(`Option ${k} text too short in ${q.id}`);
    }
  });

  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
    throw new Error(`Invalid correctAnswer: ${q.correctAnswer} in ${q.id}`);
  }

  if (!q.distractorRationale || typeof q.distractorRationale !== 'object') {
    throw new Error(`Invalid distractorRationale in ${q.id}`);
  }

  if (!q.explanation || q.explanation.trim().length < 20) {
    throw new Error(`Explanation too short in ${q.id}`);
  }
  if (!q.legalBasis || q.legalBasis.trim().length < 5) {
    throw new Error(`LegalBasis too short in ${q.id}`);
  }
  if (!q.statement || q.statement.trim().length < 20) {
    throw new Error(`Statement too short in ${q.id}`);
  }
  if (!q.area || q.area.trim().length < 2) {
    throw new Error(`Area too short in ${q.id}`);
  }
});

// CRITICAL TEST INVARIANT: seg-05 check
const q5 = allQuestions.find(q => q.id === 'seg-05');
if (!q5) throw new Error('seg-05 not found!');
if (q5.correctAnswer !== 'B') throw new Error('seg-05 correctAnswer must be B');
if (!q5.options.B.includes('20,000.00')) throw new Error('seg-05 options.B must include 20,000.00');
if (!q5.options.B.includes('($40,000.00 × $100,000.00) / $200,000.00 = $20,000.00')) {
  throw new Error('seg-05 options.B formula mismatch');
}
if (!q5.explanation.includes('($40,000 × $100,000) / $200,000 = $20,000.00')) {
  throw new Error('seg-05 explanation formula mismatch');
}

console.log('seg-05 critical invariant verified perfectly!');
console.log('All 200 questions passed validation!');

// Build the TypeScript file content
const fileHeader = `/**
 * BANCO OFICIAL DE CUMPLIMIENTO REGULATORIO, PREVENCIÓN DE LAVADO Y SEGUROS (SSF & UIF/FGR)
 * Plataforma KUSKAT · República de El Salvador
 *
 * Marco Normativo:
 * - Ley Contra el Lavado de Dinero y de Activos (LCLDA - Decreto Leg. 498) e Instructivo UIF-FGR.
 * - Normas Técnicas para la Gestión del Riesgo de Lavado de Dinero y de Activos (NRP-08 de la SSF).
 * - Ley Especial de Extinción de Dominio y de la Administración de los Bienes de Origen o Destinación Ilícita (LEDAB).
 * - Ley de Sociedades de Seguros y Código de Comercio de El Salvador (Arts. 1344 a 1550).
 * - Ley de Compras Públicas de El Salvador.
 *
 * Exactamente 200 preguntas especializadas:
 * - 100 Prevención de Lavado de Dinero (AML / UIF / FGR)
 * - 100 Seguros Mercantiles y Fianzas (SSF)
 */

export interface ComplianceQuestion {
  id: string;
  category: 'AML' | 'Seguros';
  categoryLabel: string;
  area: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalBasis: string;
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export const COMPLIANCE_SECTORS = [
  {
    id: 'all',
    name: 'Todos los Sectores',
    icon: '🏛️',
  },
  {
    id: 'AML',
    name: 'Prevención de Lavado (AML / UIF / FGR)',
    icon: '🛡️',
  },
  {
    id: 'Seguros',
    name: 'Seguros y Fianzas Mercantiles (SSF)',
    icon: '📜',
  },
];

export const COMPLIANCE_QUESTIONS: ComplianceQuestion[] = ${JSON.stringify(allQuestions, null, 2)};

// Preservar retrocompatibilidad con componentes existentes
export const COMPLIANCE_QUESTIONS_DATA: ComplianceQuestion[] = COMPLIANCE_QUESTIONS;
`;

const outputPath = path.resolve(__dirname, '../../../src/data/complianceAmlData.ts');
fs.writeFileSync(outputPath, fileHeader, 'utf8');
console.log('Successfully wrote 200 questions to', outputPath);
