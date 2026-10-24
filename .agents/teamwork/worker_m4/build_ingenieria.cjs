// Builder script for src/data/ingenieriaCienciasData.ts
// Worker M4 (Engineering, Police & AML Modules Expansion)
const fs = require('fs');
const path = require('path');

const algebra = require('./data_ing_algebra.cjs');
const trig = require('./data_ing_trig.cjs');
const conicas = require('./data_ing_conicas.cjs');
const fisica = require('./data_ing_fisica.cjs');

console.log(`Loaded:
- Algebra Lineal: ${algebra.length}
- Trigonometría: ${trig.length}
- Cónicas: ${conicas.length}
- Física: ${fisica.length}`);

if (algebra.length !== 50 || trig.length !== 50 || conicas.length !== 50 || fisica.length !== 50) {
  throw new Error(`Invalid category lengths: ${algebra.length}, ${trig.length}, ${conicas.length}, ${fisica.length}`);
}

const allQuestions = [...algebra, ...trig, ...conicas, ...fisica];

if (allQuestions.length !== 200) {
  throw new Error(`Total length is ${allQuestions.length}, expected 200`);
}

// Validate each question
const idSet = new Set();
for (let i = 0; i < allQuestions.length; i++) {
  const q = allQuestions[i];
  const expectedId = `ing-${(i + 1).toString().padStart(2, '0')}`;
  if (q.id !== expectedId) {
    throw new Error(`Question at index ${i} has id ${q.id}, expected ${expectedId}`);
  }
  if (idSet.has(q.id)) {
    throw new Error(`Duplicate ID: ${q.id}`);
  }
  idSet.add(q.id);

  if (!['algebra-lineal', 'trigonometria-analitica', 'geometria-conicas', 'fisica-mecanica'].includes(q.category)) {
    throw new Error(`Invalid category for ${q.id}: ${q.category}`);
  }

  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
    throw new Error(`Invalid correctAnswer for ${q.id}: ${q.correctAnswer}`);
  }

  if (!q.problemStatement || q.problemStatement.length < 20) {
    throw new Error(`Problem statement too short for ${q.id}`);
  }

  if (!q.formalSolution || q.formalSolution.length < 20) {
    throw new Error(`Formal solution too short for ${q.id}`);
  }

  if (!Array.isArray(q.stepByStepDerivation) || q.stepByStepDerivation.length < 2) {
    throw new Error(`Derivation steps invalid for ${q.id}`);
  }

  for (const opt of ['A', 'B', 'C', 'D']) {
    if (!q.options || typeof q.options[opt] !== 'string' || q.options[opt].trim().length === 0) {
      throw new Error(`Missing option ${opt} for ${q.id}`);
    }
    if (!q.distractorRationale || typeof q.distractorRationale[opt] !== 'string' || q.distractorRationale[opt].trim().length === 0) {
      throw new Error(`Missing distractorRationale for option ${opt} in ${q.id}`);
    }
  }

  // Check balanced dollar signs for KaTeX in problemStatement
  const singleDollarMatches = (q.problemStatement.match(/(?<!\$)\$(?!\$)/g) || []).length;
  if (singleDollarMatches % 2 !== 0) {
    console.warn(`WARNING: Unbalanced $ in problemStatement of ${q.id}: count=${singleDollarMatches}`);
  }
}

console.log('All 200 questions successfully validated!');

const TARGET_FILE = path.resolve('c:/Users/kg-88/OneDrive/Documentos/AntiGravity/APP-KUSKAT/src/data/ingenieriaCienciasData.ts');

const content = `/**
 * BANCO OFICIAL DE MÉTODOS CUANTITATIVOS Y CIENCIAS EXACTAS DE INGENIERÍA
 * Plataforma KUSKAT · República de El Salvador
 *
 * Módulos Académicos:
 * - Álgebra Lineal: Matrices, determinantes por cofactores/Sarrus, Gauss-Jordan, Teorema de Rouché-Frobenius y Regla de Cramer (50 reactivos).
 * - Trigonometría Analítica: Identidades fundamentales, transformaciones producto-suma, ecuaciones trigonométricas y leyes de senos/cosenos con caso ambiguo (50 reactivos).
 * - Geometría Analítica: Cónicas (circunferencia, parábola, elipse, hipérbola), excentricidad y discriminante cuadrático (50 reactivos).
 * - Física Estática y Dinámica Vectorial: Equilibrio de cuerpos rígidos, método de nodos en armaduras, plano inclinado con fricción de Coulomb y teorema de trabajo-energía (50 reactivos).
 *
 * Total: Exactamente 200 problemas analíticos con soluciones formales y KaTeX.
 */

export interface EngineeringMathQuestion {
  id: string;
  category: 'algebra-lineal' | 'trigonometria-analitica' | 'geometria-conicas' | 'fisica-mecanica';
  categoryLabel: string;
  topic: string;
  problemStatement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  formalSolution: string;
  stepByStepDerivation: string[];
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export interface FormulaReferenceCard {
  category: string;
  title: string;
  formulaKatex: string;
  explanation: string;
}

export const INGENIERIA_SECTORS = [
  {
    id: 'all',
    name: 'Todas las Disciplinas',
    icon: '📐',
  },
  {
    id: 'algebra-lineal',
    name: 'Álgebra Lineal & Matrices',
    icon: '🔢',
  },
  {
    id: 'trigonometria-analitica',
    name: 'Trigonometría Analítica',
    icon: '📏',
  },
  {
    id: 'geometria-conicas',
    name: 'Geometría Analítica de Cónicas',
    icon: '⭕',
  },
  {
    id: 'fisica-mecanica',
    name: 'Estática & Dinámica Vectorial',
    icon: '⚙️',
  },
];

export const INGENIERIA_FORMULAS: FormulaReferenceCard[] = [
  {
    category: 'Álgebra Lineal',
    title: 'Determinante de Escalar por Matriz Cuadrada de Orden n',
    formulaKatex: '\\\\det(k \\\\cdot A) = k^n \\\\cdot \\\\det(A)',
    explanation: 'Multiplicar una matriz de tamaño n x n por un escalar k multiplica cada una de sus n filas por k, factorizándose k elevado a la n del determinante.',
  },
  {
    category: 'Álgebra Lineal',
    title: 'Multiplicatividad del Determinante',
    formulaKatex: '\\\\det(A \\\\cdot B) = \\\\det(A) \\\\cdot \\\\det(B)',
    explanation: 'El determinante del producto de dos matrices cuadradas del mismo orden es igual al producto algebraico de sus respectivos determinantes.',
  },
  {
    category: 'Trigonometría',
    title: 'Identidad del Coseno del Ángulo Doble',
    formulaKatex: '\\\\cos(2\\\\theta) = \\\\cos^2\\\\theta - \\\\sin^2\\\\theta = 2\\\\cos^2\\\\theta - 1 = 1 - 2\\\\sin^2\\\\theta',
    explanation: 'Transformación fundamental para linealizar potencias pares trigonométricas en cálculo integral y análisis de ondas armónicas.',
  },
  {
    category: 'Geometría Analítica',
    title: 'Discriminante de la Ecuación General de Segundo Grado',
    formulaKatex: '\\\\Delta = B^2 - 4AC',
    explanation: 'Para Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0: si Delta < 0 es Elipse/Circunferencia, si Delta = 0 es Parábola, si Delta > 0 es Hipérbola.',
  },
  {
    category: 'Física Vectorial',
    title: 'Segunda Condición de Equilibrio (Rotacional)',
    formulaKatex: '\\\\sum \\\\vec{\\\\tau}_O = \\\\sum (\\\\vec{r} \\\\times \\\\vec{F}) = \\\\vec{0}',
    explanation: 'Para que un cuerpo rígido no tenga aceleración angular, la suma vectorial de momentos de fuerza o torques respecto a cualquier punto fijo debe ser cero.',
  },
  {
    category: 'Física Vectorial',
    title: 'Teorema del Trabajo y la Energía Cinética',
    formulaKatex: 'W_{\\\\text{neto}} = \\\\Delta E_k = \\\\frac{1}{2}m v_f^2 - \\\\frac{1}{2}m v_i^2',
    explanation: 'El trabajo mecánico realizado por todas las fuerzas que actúan sobre una partícula es exactamente igual al cambio neto en su energía cinética.',
  },
];

export const INGENIERIA_QUESTIONS: EngineeringMathQuestion[] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync(TARGET_FILE, content, 'utf8');
console.log('Successfully wrote 200 questions to:', TARGET_FILE);
