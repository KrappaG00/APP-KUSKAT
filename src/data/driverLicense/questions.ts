/**
 * Banco Oficial Unificado de Preguntas de Examen de Conducir VMT & Organismo Evaluador Autorizado
 * Consolida el Banco Teórico (>= 350 reactivos) y el Banco Psicológico/Psicométrico (>= 150 reactivos),
 * sumando >= 500 preguntas de opción múltiple (A, B, C, D) con fundamentación legal y análisis de distractores.
 */

import { DriverQuestion } from './types';
import { DRIVER_THEORY_QUESTIONS } from './questionsTeorico';
import { DRIVER_PSYCHOLOGICAL_QUESTIONS } from './questionsPsicologico';

export { DRIVER_THEORY_QUESTIONS, DRIVER_PSYCHOLOGICAL_QUESTIONS };

export const DRIVER_QUESTIONS: DriverQuestion[] = [
  ...DRIVER_THEORY_QUESTIONS,
  ...DRIVER_PSYCHOLOGICAL_QUESTIONS,
];
