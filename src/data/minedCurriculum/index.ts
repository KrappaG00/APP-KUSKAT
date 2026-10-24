/**
 * Barrel principal unificado del módulo de Refuerzo Curricular Oficial MINED-ESMATE
 * Educación Básica y Media de El Salvador (1° Grado a 2° Bachillerato)
 */

// Tipos e interfaces
export * from './types';

// Catálogo liviano indexado (< 25 KB)
export * from './catalog';

import { curriculumService } from './curriculumService';

// Servicio de consultas y simuladores
export * from './curriculumService';
export { curriculumService, default as curriculumServiceDefault } from './curriculumService';
export default curriculumService;


// Datasets curriculares por grado escolar
export { GRADE_01_DATA } from './grades/grade01PrimerGrado';
export { GRADE_02_DATA } from './grades/grade02SegundoGrado';
export { GRADE_03_DATA } from './grades/grade03TercerGrado';
export { GRADE_04_DATA } from './grades/grade04CuartoGrado';
export { GRADE_05_DATA } from './grades/grade05QuintoGrado';
export { GRADE_06_DATA } from './grades/grade06SextoGrado';
export { GRADE_07_DATA } from './grades/grade07SeptimoGrado';
export { GRADE_08_DATA } from './grades/grade08OctavoGrado';
export { GRADE_09_DATA } from './grades/grade09NovenoGrado';
export { GRADE_10_DATA } from './grades/grade10PrimerBach';
export { GRADE_11_DATA } from './grades/grade11SegundoBach';
export * from './grades/gradeHelpers';
