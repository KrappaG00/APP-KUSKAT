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
import { PracticalTrafficCase, DriverUnit, DriverQuestion, RoadSign } from './types';

/**
 * Obtiene todos los casos prácticos de tránsito resueltos del currículo oficial (40 casos).
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
 * Genera un examen oficial simulado del VMT seleccionando 30 preguntas
 * balanceadas entre categorías teórica y psicológica a partir del banco de 56 preguntas.
 */
export function generateOfficialVmtExam(totalQuestions: number = 30): DriverQuestion[] {
  // Asegurar muestreo determinista o aleatorio bien distribuido
  const teoricas = DRIVER_QUESTIONS.filter((q) => q.category === 'teorico');
  const psicologicas = DRIVER_QUESTIONS.filter((q) => q.category === 'psicologico');

  // Relación típica VMT: 20 teóricas + 10 psicológicas = 30 preguntas
  const numTeoricas = Math.min(20, teoricas.length);
  const numPsicologicas = Math.min(10, psicologicas.length);

  const shuffledTeoricas = [...teoricas].sort(() => 0.5 - Math.random()).slice(0, numTeoricas);
  const shuffledPsicologicas = [...psicologicas].sort(() => 0.5 - Math.random()).slice(0, numPsicologicas);

  const combined = [...shuffledTeoricas, ...shuffledPsicologicas].sort(() => 0.5 - Math.random());

  return combined.slice(0, totalQuestions);
}

/**
 * Filtra las señales viales por su clasificación oficial SIECA.
 */
export function filterRoadSignsByCategory(category: 'all' | 'reglamentaria' | 'preventiva' | 'informativa'): RoadSign[] {
  if (category === 'all') return OFFICIAL_ROAD_SIGNS;
  return OFFICIAL_ROAD_SIGNS.filter((sign) => sign.category === category || sign.type === category);
}
