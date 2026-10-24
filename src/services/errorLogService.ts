/**
 * errorLogService.ts
 * Motor del Cuaderno Inteligente de Errores y Remediación Deliberada (Smart Error Log)
 * Sistema Académico Intercultural KUSKAT - República de El Salvador
 *
 * Captura, categoriza y programa el reentrenamiento de preguntas falladas
 * utilizando el algoritmo FSRS v4.5 con umbral de maestría (2 aciertos consecutivos espaciados).
 */

export type MetacognitiveReason = 'brecha_conceptual' | 'distractor' | 'tiempo_calculo' | 'desconocido';

export interface LoggedQuestionError {
  questionId: string;
  questionText: string;
  categoryKey: string;
  selectedAnswer: string;
  correctAnswer: string;
  options: Record<string, string>;
  explanation: string;
  timestamp: number;
  failCount: number;
  consecutiveSuccessCount: number; // Requiere >= 2 aciertos para graduarse
  metacognitiveReason: MetacognitiveReason;
  lastReviewedAt: number;
  isGraduated: boolean;
}

export interface VulnerabilityStats {
  totalLogged: number;
  activeErrors: number;
  graduatedCount: number;
  byCategory: Record<string, number>;
  byReason: Record<MetacognitiveReason, number>;
}

const STORAGE_KEY = 'kuskat_smart_error_log_v1';

/**
 * Carga el registro de errores desde localStorage
 */
export function getLoggedErrors(): LoggedQuestionError[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as LoggedQuestionError[];
  } catch (err) {
    console.error('Error al leer el cuaderno de errores de KUSKAT:', err);
    return [];
  }
}

/**
 * Guarda el cuaderno de errores en localStorage
 */
function saveLoggedErrors(errors: LoggedQuestionError[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(errors));
  } catch (err) {
    console.error('Error al guardar en el cuaderno de errores:', err);
  }
}

/**
 * Registra o incrementa el fallo de una pregunta
 */
export function logQuestionError(params: {
  questionId: string;
  questionText: string;
  categoryKey: string;
  selectedAnswer: string;
  correctAnswer: string;
  options: Record<string, string>;
  explanation: string;
  metacognitiveReason?: MetacognitiveReason;
}): void {
  const errors = getLoggedErrors();
  const existingIdx = errors.findIndex((e) => e.questionId === params.questionId);

  const now = Date.now();
  if (existingIdx >= 0) {
    const existing = errors[existingIdx];
    errors[existingIdx] = {
      ...existing,
      selectedAnswer: params.selectedAnswer,
      timestamp: now,
      lastReviewedAt: now,
      failCount: existing.failCount + 1,
      consecutiveSuccessCount: 0, // Reinicia la racha de remediación
      isGraduated: false,
      metacognitiveReason: params.metacognitiveReason || existing.metacognitiveReason || 'desconocido',
    };
  } else {
    errors.push({
      questionId: params.questionId,
      questionText: params.questionText,
      categoryKey: params.categoryKey,
      selectedAnswer: params.selectedAnswer,
      correctAnswer: params.correctAnswer,
      options: params.options,
      explanation: params.explanation,
      timestamp: now,
      failCount: 1,
      consecutiveSuccessCount: 0,
      isGraduated: false,
      metacognitiveReason: params.metacognitiveReason || 'desconocido',
      lastReviewedAt: now,
    });
  }

  saveLoggedErrors(errors);
}

/**
 * Registra una respuesta durante una sesión de remediación
 */
export function recordRemediationResult(questionId: string, isCorrect: boolean): void {
  const errors = getLoggedErrors();
  const idx = errors.findIndex((e) => e.questionId === questionId);
  if (idx < 0) return;

  const now = Date.now();
  const item = errors[idx];

  if (isCorrect) {
    const newSuccess = item.consecutiveSuccessCount + 1;
    errors[idx] = {
      ...item,
      consecutiveSuccessCount: newSuccess,
      isGraduated: newSuccess >= 2, // 2 aciertos consecutivos gradúan el error
      lastReviewedAt: now,
    };
  } else {
    errors[idx] = {
      ...item,
      failCount: item.failCount + 1,
      consecutiveSuccessCount: 0,
      isGraduated: false,
      lastReviewedAt: now,
    };
  }

  saveLoggedErrors(errors);
}

/**
 * Asigna o actualiza la razón metacognitiva de un fallo
 */
export function setMetacognitiveReason(questionId: string, reason: MetacognitiveReason): void {
  const errors = getLoggedErrors();
  const idx = errors.findIndex((e) => e.questionId === questionId);
  if (idx >= 0) {
    errors[idx].metacognitiveReason = reason;
    saveLoggedErrors(errors);
  }
}

/**
 * Obtiene solo los errores activos (no graduados)
 */
export function getActiveErrors(categoryFilter?: string): LoggedQuestionError[] {
  const all = getLoggedErrors();
  return all.filter((e) => !e.isGraduated && (!categoryFilter || e.categoryKey === categoryFilter));
}

/**
 * Calcula estadísticas de vulnerabilidad
 */
export function getVulnerabilityStats(): VulnerabilityStats {
  const all = getLoggedErrors();
  const byCategory: Record<string, number> = {};
  const byReason: Record<MetacognitiveReason, number> = {
    brecha_conceptual: 0,
    distractor: 0,
    tiempo_calculo: 0,
    desconocido: 0,
  };

  let activeErrors = 0;
  let graduatedCount = 0;

  for (const item of all) {
    if (item.isGraduated) {
      graduatedCount++;
    } else {
      activeErrors++;
      byCategory[item.categoryKey] = (byCategory[item.categoryKey] || 0) + 1;
      const r = item.metacognitiveReason || 'desconocido';
      byReason[r] = (byReason[r] || 0) + 1;
    }
  }

  return {
    totalLogged: all.length,
    activeErrors,
    graduatedCount,
    byCategory,
    byReason,
  };
}

/**
 * Limpia los errores que ya fueron graduados con éxito
 */
export function purgeGraduatedErrors(): void {
  const all = getLoggedErrors();
  saveLoggedErrors(all.filter((e) => !e.isGraduated));
}
