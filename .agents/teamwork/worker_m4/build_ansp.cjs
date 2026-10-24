const fs = require('fs');
const path = require('path');

const { allCaboQuestions } = require('./data_ansp_cabo.cjs');
const { allSargentoQuestions } = require('./data_ansp_sargento.cjs');
const { allOficialQuestions } = require('./data_ansp_oficial.cjs');

console.log('Validating ANSP questions counts:');
console.log('Cabo count:', allCaboQuestions.length, '(expected 66)');
console.log('Sargento count:', allSargentoQuestions.length, '(expected 67)');
console.log('Oficial count:', allOficialQuestions.length, '(expected 67)');

if (allCaboQuestions.length !== 66) throw new Error('Cabo count must be 66');
if (allSargentoQuestions.length !== 67) throw new Error('Sargento count must be 67');
if (allOficialQuestions.length !== 67) throw new Error('Oficial count must be 67');

const allQuestions = [...allCaboQuestions, ...allSargentoQuestions, ...allOficialQuestions];
console.log('Total questions:', allQuestions.length, '(expected 200)');
if (allQuestions.length !== 200) throw new Error('Total questions must be 200');

// Validate unique IDs and schema
const idSet = new Set();
allQuestions.forEach((q, idx) => {
  if (idSet.has(q.id)) {
    throw new Error(`Duplicate ID detected: ${q.id} at index ${idx}`);
  }
  idSet.add(q.id);

  if (!['cabo', 'sargento', 'oficial'].includes(q.rank)) {
    throw new Error(`Invalid rank: ${q.rank} in ${q.id}`);
  }
  if (!['Cabo', 'Sargento', 'Oficial'].includes(q.escalafon)) {
    throw new Error(`Invalid escalafon: ${q.escalafon} in ${q.id}`);
  }
  if (q.rank === 'cabo' && q.escalafon !== 'Cabo') throw new Error(`Rank/escalafon mismatch in ${q.id}`);
  if (q.rank === 'sargento' && q.escalafon !== 'Sargento') throw new Error(`Rank/escalafon mismatch in ${q.id}`);
  if (q.rank === 'oficial' && q.escalafon !== 'Oficial') throw new Error(`Rank/escalafon mismatch in ${q.id}`);

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Options must be array of 4 items in ${q.id}`);
  }
  const keys = q.options.map(o => o.key);
  if (JSON.stringify(keys) !== JSON.stringify(['A', 'B', 'C', 'D'])) {
    throw new Error(`Option keys must be A, B, C, D in ${q.id}, got ${JSON.stringify(keys)}`);
  }
  q.options.forEach(o => {
    if (!o.text || o.text.trim().length < 5) {
      throw new Error(`Option text too short in ${q.id} key ${o.key}`);
    }
  });

  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
    throw new Error(`Invalid correctAnswer: ${q.correctAnswer} in ${q.id}`);
  }

  if (!q.distractorRationale || typeof q.distractorRationale !== 'object') {
    throw new Error(`Invalid distractorRationale in ${q.id}`);
  }
  ['A', 'B', 'C', 'D'].forEach(k => {
    if (!q.distractorRationale[k] || q.distractorRationale[k].trim().length < 5) {
      throw new Error(`DistractorRationale ${k} too short in ${q.id}`);
    }
  });

  if (!q.explanation || q.explanation.trim().length < 20) {
    throw new Error(`Explanation too short in ${q.id}`);
  }
  if (!q.legalBasis || q.legalBasis.trim().length < 5) {
    throw new Error(`LegalBasis too short in ${q.id}`);
  }
  if (!q.statement || q.statement.trim().length < 20) {
    throw new Error(`Statement too short in ${q.id}`);
  }
});

console.log('All 200 questions passed validation!');

// Build the TypeScript file content
const fileHeader = `/**
 * BANCO OFICIAL DE PREGUNTAS PARA CONCURSOS DE ASCENSO DE LA POLICÍA NACIONAL CIVIL
 * Academia Nacional de Seguridad Pública (ANSP) & Tribunal de Ingresos y Ascensos (TIA)
 * República de El Salvador
 * Ley de la Carrera Policial, Ley Orgánica de la PNC, Código Procesal Penal y Normas de DDHH de la ONU.
 *
 * Exactamente 200 reactivos evaluativos:
 * - 66 Cabo (Mandos Básicos / Patrulla)
 * - 67 Sargento (Mandos Intermedios / Supervisión)
 * - 67 Oficial (Nivel Ejecutivo: Subinspector / Inspector)
 */

export interface PolicePromotionQuestion {
  id: string;
  rank: 'cabo' | 'sargento' | 'oficial'; // Cabo, Sargento, Oficial (Subinspector/Inspector)
  escalafon: 'Cabo' | 'Sargento' | 'Oficial';
  topic: string;
  statement: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalBasis: string;
  distractorRationale: Record<'A' | 'B' | 'C' | 'D', string>;
}

export type AnspQuestion = PolicePromotionQuestion;

export interface PoliceRankMeta {
  id: 'all' | 'cabo' | 'sargento' | 'oficial';
  name: string;
  badge: string;
  scopeDescription: string;
  officialTimeMinutes: number;
}

export const POLICE_RANKS: PoliceRankMeta[] = [
  {
    id: 'all',
    name: 'Todos los Escalafones',
    badge: 'ANSP / PNC',
    scopeDescription: 'Evaluación integral de ascenso para mandos básicos, intermedios y ejecutivos.',
    officialTimeMinutes: 45,
  },
  {
    id: 'cabo',
    name: 'Ascenso a Cabo (Nivel Básico)',
    badge: 'Comandante de Patrulla',
    scopeDescription: 'Procedimientos operativos en el terreno, ITOP, flagrancia, cadena de custodia y tránsito.',
    officialTimeMinutes: 30,
  },
  {
    id: 'sargento',
    name: 'Ascenso a Sargento (Nivel Intermedio)',
    badge: 'Jefe de Subdelegación',
    scopeDescription: 'Supervisión táctica, coordinación con FGR, régimen disciplinario y libros de control.',
    officialTimeMinutes: 35,
  },
  {
    id: 'oficial',
    name: 'Ascenso a Oficiales (Subinspector/Inspector)',
    badge: 'Nivel Ejecutivo',
    scopeDescription: 'Ley de la Carrera Policial, Derecho Constitucional, inteligencia y uso proporcional de la fuerza.',
    officialTimeMinutes: 40,
  },
];

export const ANSP_ASCENSO_QUESTIONS: PolicePromotionQuestion[] = ${JSON.stringify(allQuestions, null, 2)};

// Preservar retrocompatibilidad con componentes existentes
export const POLICE_PROMOTION_QUESTIONS: PolicePromotionQuestion[] = ANSP_ASCENSO_QUESTIONS;
`;

const outputPath = path.resolve(__dirname, '../../../src/data/anspAscensoData.ts');
fs.writeFileSync(outputPath, fileHeader, 'utf8');
console.log('Successfully wrote 200 questions to', outputPath);
