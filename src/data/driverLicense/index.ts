/**
 * Módulo Oficial de Licencia de Conducir VMT & Seguridad Vial
 * Punto de entrada único y exportación unificada para el currículo, casos prácticos,
 * catálogo de señales viales y banco oficial de preguntas de evaluación.
 */

export * from './types';
export * from './curriculum';
export * from './questions';
export * from './signs';

import { DRIVER_CURRICULUM_UNITS } from './curriculum';
import { DRIVER_QUESTIONS } from './questions';
import { OFFICIAL_ROAD_SIGNS } from './signs';
import { PracticalTrafficCase, DriverUnit, DriverQuestion, RoadSign, RoadSignCategory } from './types';

export type VmtExamMode = 'official30' | 'teorico350' | 'psicologico150' | 'all500';

/**
 * Barajado imparcial Fisher-Yates (O(n)) para selección aleatoria de reactivos.
 */
function fisherYatesShuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Obtiene todos los casos prácticos de tránsito resueltos del currículo oficial (45 casos).
 */
export function getAllPracticalTrafficCases(): PracticalTrafficCase[] {
  return DRIVER_CURRICULUM_UNITS.flatMap((unit) => unit.practicalCases);
}

/**
 * Obtiene una unidad curricular específica por su identificador.
 */
export function getDriverUnitById(unitId: string): DriverUnit | undefined {
  return DRIVER_CURRICULUM_UNITS.find((unit) => unit.id === unitId);
}

/**
 * Genera un examen oficial simulado del VMT o un banco completo por modalidad
 * mediante barajado Fisher-Yates:
 * - 'official30' (predeterminado): 20 teóricas + 10 psicológicas = 30 preguntas
 * - 'teorico350': Banco teórico completo (>= 350 preguntas)
 * - 'psicologico150': Banco psicológico/psicométrico completo (>= 150 preguntas)
 * - 'all500': Banco unificado completo (>= 500 preguntas)
 */
export function generateOfficialVmtExam(
  totalQuestions?: number,
  mode: VmtExamMode = 'official30'
): DriverQuestion[] {
  const teoricas = DRIVER_QUESTIONS.filter((q) => q.category === 'teorico');
  const psicologicas = DRIVER_QUESTIONS.filter((q) => q.category === 'psicologico');

  if (mode === 'teorico350') {
    const shuffled = fisherYatesShuffle(teoricas);
    return typeof totalQuestions === 'number' ? shuffled.slice(0, Math.max(0, totalQuestions)) : shuffled;
  }

  if (mode === 'psicologico150') {
    const shuffled = fisherYatesShuffle(psicologicas);
    return typeof totalQuestions === 'number' ? shuffled.slice(0, Math.max(0, totalQuestions)) : shuffled;
  }

  if (mode === 'all500') {
    const shuffled = fisherYatesShuffle(DRIVER_QUESTIONS);
    return typeof totalQuestions === 'number' ? shuffled.slice(0, Math.max(0, totalQuestions)) : shuffled;
  }

  // Modalidad oficial VMT: relación 20 teóricas + 10 psicológicas = 30 preguntas
  const targetTotal = typeof totalQuestions === 'number' ? Math.max(0, totalQuestions) : 30;
  const numTeoricas = Math.min(20, teoricas.length);
  const numPsicologicas = Math.min(10, psicologicas.length);

  const selectedTeoricas = fisherYatesShuffle(teoricas).slice(0, numTeoricas);
  const selectedPsicologicas = fisherYatesShuffle(psicologicas).slice(0, numPsicologicas);

  const combined = fisherYatesShuffle([...selectedTeoricas, ...selectedPsicologicas]);
  return combined.slice(0, targetTotal);
}

/**
 * Filtra las señales viales por su clasificación oficial SIECA.
 */
export function filterRoadSignsByCategory(category: 'all' | RoadSignCategory): RoadSign[] {
  if (category === 'all') return OFFICIAL_ROAD_SIGNS;
  return OFFICIAL_ROAD_SIGNS.filter((sign) => sign.category === category || sign.type === category);
}
