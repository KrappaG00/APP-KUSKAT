/**
 * APP-KUSKAT • MOTOR DE EVALUACIÓN EN VERDADERO O FALSO
 *
 * Transforma dinámicamente cualquier pregunta de selección múltiple (A-D / A-F)
 * de cualquier materia, institución o idioma del proyecto en un reactivo estandarizado
 * de Verdadero o Falso (V / F).
 *
 * Características:
 * - Algoritmo determinístico con distribución balanceada 50% Verdadero / 50% Falso
 * - Conserva la rigurosidad pedagógica, fórmulas KaTeX y explicaciones oficiales
 * - Compatible con Question (UES, AVANZO, ESCALAFÓN, ASD, ENA, ANSP) y LanguageQuestion (Idiomas)
 */

import { Question, QuestionOption } from '../types';
import { LanguageQuestion } from '../data/languages/englishData';

export interface TrueFalseItem {
  questionId: string;
  statement: string;
  presentedOptionKey: string;
  presentedOptionText: string;
  isTrue: boolean; // true si la opción presentada coincide con la respuesta correcta; false si es un distractor
  correctOptionKey: string;
  correctOptionText: string;
  rawExplanation: string;
  explanation: string;
  affirmationText: string;
}

/**
 * Función de dispersión (hash) determinística para asociar de manera reproducible
 * una proposición (Verdadera o Falsa) a cada reactivo sin aleatoriedades flotantes.
 */
export function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Convierte cualquier pregunta del proyecto en un reactivo de Verdadero o Falso.
 *
 * @param q Pregunta original de opción múltiple
 * @param seed Semilla opcional para generar variantes alternativas
 */
export function convertToTrueFalse(
  q: Question | LanguageQuestion,
  seed: number = 0
): TrueFalseItem {
  const qId = q.id || `q_${q.number}`;
  const h = hashString(`${qId}_kuskat_tf_${seed}`);

  const options = (q.options || []) as QuestionOption[];
  const correctOpt = options.find((o) => o.key === q.correctAnswer) ||
    options[0] || { key: 'A', text: '' };
  const distractors = options.filter((o) => o.key !== q.correctAnswer);

  // 50% de probabilidad de presentar la respuesta correcta (VERDADERO)
  // 50% de presentar uno de los distractores (FALSO)
  const isTrue = distractors.length === 0 || h % 2 === 0;

  let presentedOption: QuestionOption;
  if (isTrue || distractors.length === 0) {
    presentedOption = correctOpt;
  } else {
    const distractorIndex = h % distractors.length;
    presentedOption = distractors[distractorIndex];
  }

  const affirmationText = `Proposición para evaluar: "${presentedOption.text}"`;

  // Construcción de la justificación pedagógica estructurada
  const tfExplanation = isTrue
    ? `Esta proposición es VERDADERA. Coincide con la resolución oficial (Opción ${correctOpt.key}): "${correctOpt.text}". Justificación: ${q.explanation}`
    : `Esta proposición es FALSA. La afirmación evaluada propone "${presentedOption.text}", pero la resolución correcta es la Opción ${correctOpt.key}: "${correctOpt.text}". Justificación: ${q.explanation}`;

  return {
    questionId: qId,
    statement: q.statement,
    presentedOptionKey: presentedOption.key,
    presentedOptionText: presentedOption.text,
    isTrue,
    correctOptionKey: correctOpt.key,
    correctOptionText: correctOpt.text,
    rawExplanation: q.explanation,
    explanation: tfExplanation,
    affirmationText,
  };
}

/**
 * Retorna la respuesta esperada ('VERDADERO' o 'FALSO') para un reactivo dado.
 */
export function getExpectedTrueFalseAnswer(
  q: Question | LanguageQuestion,
  seed: number = 0
): 'VERDADERO' | 'FALSO' {
  const tf = convertToTrueFalse(q, seed);
  return tf.isTrue ? 'VERDADERO' : 'FALSO';
}

/**
 * Valida si la respuesta del usuario es correcta en la modalidad Verdadero / Falso.
 */
export function isTrueFalseAnswerCorrect(
  q: Question | LanguageQuestion,
  userAnswer: string | undefined | null,
  seed: number = 0
): boolean {
  if (!userAnswer) return false;
  const expected = getExpectedTrueFalseAnswer(q, seed);
  return userAnswer.trim().toUpperCase() === expected;
}
