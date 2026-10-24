/**
 * Tipos e interfaces oficiales para el módulo de Refuerzo Curricular MINED-ESMATE
 * Educación Básica y Educación Media de El Salvador (1° Grado a 2° Bachillerato)
 * Basado en los 135 libros de texto y programas de estudio oficiales del MINED.
 */

export type GradeLevelId =
  | '1-grado'
  | '2-grado'
  | '3-grado'
  | '4-grado'
  | '5-grado'
  | '6-grado'
  | '7-grado'
  | '8-grado'
  | '9-grado'
  | '1-bachillerato'
  | '2-bachillerato';

export type CycleId =
  | 'primer-ciclo'
  | 'segundo-ciclo'
  | 'tercer-ciclo'
  | 'educacion-media';

export type SubjectId =
  | 'matematica-esmate'
  | 'lenguaje-eslengua'
  | 'ciencia-tecnologia'
  | 'ciudadania-valores';

export type TomoNumber = 1 | 2;

export type AnswerOptionKey = 'A' | 'B' | 'C' | 'D';

/**
 * Ejercicio propuesto para la sección 'Resuelve' (R) del ciclo didáctico ESMATE
 */
export interface PscerResuelveItem {
  id?: string;
  exercise: string;
  hint?: string;
  answer?: string;
}

/**
 * Lección oficial estructurada bajo la metodología didáctica ESMATE (P-S-C-E-R)
 * P: Problema inicial contextualizado
 * S: Solución analítica y paso a paso
 * C: Conclusión formal, regla o teorema con KaTeX
 * E: Ejemplo guiado resuelto de aplicación
 * R: Resuelve con ejercicios formativos y pistas didácticas
 */
export interface PscerLesson {
  id: string; // ej: "mined-mat-2b-u03-l01"
  lessonNumber: string; // ej: "1.1", "2.3"
  title: string; // Título de la clase/lección
  problema: string; // P: Problema inicial
  solucion: string; // S: Solución analítica paso a paso
  conclusion: string; // C: Formalización y fórmulas con KaTeX ($...$ o $$...$$)
  ejemplo?: string; // E: Ejemplo guiado resuelto principal
  examples?: string[]; // E: Mínimo 5 ejemplos concretos y distintos desarrollados paso a paso
  resuelve: PscerResuelveItem[]; // R: Práctica formativa
}

/**
 * Reactivo de opción múltiple del banco evaluativo por unidad (50 reactivos por unidad evaluada)
 */
export interface UnitQuestion {
  id: string; // ej: "MINED-MAT-2B-U03-Q001"
  unitId: string;
  gradeId: GradeLevelId;
  subjectId: SubjectId;
  statement: string; // Enunciado contextualizado con KaTeX si aplica
  options: [string, string, string, string]; // Cuatro opciones unívocas [A, B, C, D]
  correctAnswer: AnswerOptionKey;
  explanation: string; // Justificación pedagógica y desarrollo paso a paso
  officialBookRef: string; // Referencia oficial al libro de texto MINED
  distractorRationales?: Record<AnswerOptionKey, string>;
}

/**
 * Unidad temática oficial del currículo MINED
 */
export interface CurriculumUnit {
  id: string; // ej: "mined-mat-2b-u03"
  unitNumber: number; // Número oficial de unidad (1..N)
  title: string; // Título exacto del libro de texto MINED
  subjectId: SubjectId;
  gradeId: GradeLevelId;
  tomo: TomoNumber; // Tomo 1 o Tomo 2
  summary: string; // Descripción general de los aprendizajes esperados
  competencies: string[]; // Competencias e indicadores de logro oficiales
  isEvaluated?: boolean; // Indica si la unidad cuenta con banco evaluativo formal
  questionCount?: number; // Total de preguntas en el banco
  lessons: PscerLesson[]; // Lecciones detalladas P-S-C-E-R
  questions: UnitQuestion[]; // Reactivos del simulador (50 reactivos en unidades evaluadas)
}

/**
 * Asignatura curricular completa para un grado escolar
 */
export interface SubjectCurriculum {
  id: SubjectId;
  name: string; // "Matemática (ESMATE)", "Lengua y Literatura (ESLENGUA)", etc.
  icon: string; // Identificador o emoji representativo
  color: string; // Clases Tailwind para bordes y fondos
  badgeColor: string; // Clases Tailwind para badges
  summary: string;
  units: CurriculumUnit[];
}

/**
 * Datos curriculares completos de un grado escolar
 */
export interface GradeCurriculumData {
  id: GradeLevelId;
  name: string; // "1° Grado", "2° Bachillerato", etc.
  cycle: string; // "Primer Ciclo de Básica", "Educación Media", etc.
  cycleId: CycleId;
  description: string;
  subjects: SubjectCurriculum[];
}

// -------------------------------------------------------------
// Tipos para el Catálogo Liviano (< 25 KB)
// -------------------------------------------------------------

export interface CatalogUnitItem {
  id: string;
  unitNumber: number;
  title: string;
  subjectId: SubjectId;
  gradeId: GradeLevelId;
  tomo: TomoNumber;
  summary: string;
  competencies: string[];
  lessonCount: number;
  isEvaluated: boolean;
  questionCount: number;
}

export interface CatalogSubjectItem {
  id: SubjectId;
  name: string;
  icon: string;
  color: string;
  badgeColor: string;
  summary: string;
  unitCount: number;
  units: CatalogUnitItem[];
}

export interface CatalogGradeItem {
  id: GradeLevelId;
  name: string;
  cycle: string;
  cycleId: CycleId;
  description: string;
  subjectCount: number;
  totalUnits: number;
  subjects: CatalogSubjectItem[];
}

/**
 * Resultado para búsquedas curriculares globales
 */
export interface CurriculumSearchResult {
  gradeId: GradeLevelId;
  gradeName: string;
  subjectId: SubjectId;
  subjectName: string;
  unitId: string;
  unitNumber: number;
  unitTitle: string;
  tomo: TomoNumber;
  matchType: 'unit' | 'lesson' | 'formula' | 'competency';
  title: string;
  snippet: string;
  lessonId?: string;
}
