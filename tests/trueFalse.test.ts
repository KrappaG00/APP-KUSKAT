import { describe, it, expect } from 'vitest';
import {
  convertToTrueFalse,
  getExpectedTrueFalseAnswer,
  isTrueFalseAnswerCorrect,
  hashString,
} from '../src/utils/trueFalseHelper';
import { Question } from '../src/types';
import { ENGLISH_QUESTIONS_BANK } from '../src/data/languages/englishQuestions';
import { GERMAN_QUESTIONS_BANK } from '../src/data/languages/germanQuestions';
import { ARABIC_QUESTIONS_BANK } from '../src/data/languages/arabicQuestions';
import { MANDARIN_QUESTIONS_BANK } from '../src/data/languages/mandarinQuestions';
import { NAHUAT_QUESTIONS_BANK } from '../src/data/languages/nahuatQuestions';
import { LENCA_QUESTIONS_BANK } from '../src/data/languages/lencaQuestions';
import { KAKAWIRA_QUESTIONS_BANK } from '../src/data/languages/kakawiraQuestions';

describe('APP-KUSKAT • Motor de Evaluación en Verdadero o Falso (V/F)', () => {
  const sampleQuestion: Question = {
    id: 'ues_mat_001',
    number: 1,
    institution: 'UES',
    subject: 'Matemáticas',
    topic: 'Álgebra',
    subtopicId: 'ues_mat_algebra',
    statement: '¿Cuál es la solución de la ecuación $2x + 4 = 10$?',
    options: [
      { key: 'A', text: '$x = 3$' },
      { key: 'B', text: '$x = 2$' },
      { key: 'C', text: '$x = 5$' },
      { key: 'D', text: '$x = 7$' },
    ],
    correctAnswer: 'A',
    explanation: 'Restando 4 en ambos miembros: $2x = 6$, por lo tanto $x = 3$.',
    level: 'basico',
  };

  it('debe generar una proposición determinística para cualquier reactivo institucional', () => {
    const tf1 = convertToTrueFalse(sampleQuestion, 0);
    const tf2 = convertToTrueFalse(sampleQuestion, 0);

    expect(tf1).toEqual(tf2);
    expect(tf1.questionId).toBe('ues_mat_001');
    expect(tf1.statement).toBe(sampleQuestion.statement);
    expect(['A', 'B', 'C', 'D']).toContain(tf1.presentedOptionKey);
    expect(typeof tf1.isTrue).toBe('boolean');
    expect(tf1.correctOptionKey).toBe('A');
    expect(tf1.correctOptionText).toBe('$x = 3$');
    expect(tf1.explanation).toContain('Justificación:');
  });

  it('debe construir explicaciones pedagógicas congruentes con el valor de verdad', () => {
    const tf = convertToTrueFalse(sampleQuestion);
    if (tf.isTrue) {
      expect(tf.explanation).toContain('Esta proposición es VERDADERA');
      expect(tf.presentedOptionKey).toBe(sampleQuestion.correctAnswer);
    } else {
      expect(tf.explanation).toContain('Esta proposición es FALSA');
      expect(tf.presentedOptionKey).not.toBe(sampleQuestion.correctAnswer);
      expect(tf.explanation).toContain(sampleQuestion.correctAnswer);
    }
  });

  it('debe validar respuestas del usuario correctamente mediante isTrueFalseAnswerCorrect', () => {
    const tf = convertToTrueFalse(sampleQuestion);
    const rightAnswer = tf.isTrue ? 'VERDADERO' : 'FALSO';
    const wrongAnswer = tf.isTrue ? 'FALSO' : 'VERDADERO';

    expect(isTrueFalseAnswerCorrect(sampleQuestion, rightAnswer)).toBe(true);
    expect(isTrueFalseAnswerCorrect(sampleQuestion, rightAnswer.toLowerCase())).toBe(true);
    expect(isTrueFalseAnswerCorrect(sampleQuestion, wrongAnswer)).toBe(false);
    expect(isTrueFalseAnswerCorrect(sampleQuestion, undefined)).toBe(false);
    expect(isTrueFalseAnswerCorrect(sampleQuestion, null)).toBe(false);
  });

  it('debe obtener la respuesta esperada mediante getExpectedTrueFalseAnswer', () => {
    const expected = getExpectedTrueFalseAnswer(sampleQuestion);
    expect(['VERDADERO', 'FALSO']).toContain(expected);
  });

  it('debe funcionar con reactivos de idiomas extranjeros (Inglés, Alemán, Árabe, Mandarín)', () => {
    const engQ = ENGLISH_QUESTIONS_BANK[0];
    const gerQ = GERMAN_QUESTIONS_BANK[0];
    const arabQ = ARABIC_QUESTIONS_BANK[0];
    const manQ = MANDARIN_QUESTIONS_BANK[0];

    const engTf = convertToTrueFalse(engQ);
    const gerTf = convertToTrueFalse(gerQ);
    const arabTf = convertToTrueFalse(arabQ);
    const manTf = convertToTrueFalse(manQ);

    expect(engTf.presentedOptionText).toBeDefined();
    expect(gerTf.presentedOptionText).toBeDefined();
    expect(arabTf.presentedOptionText).toBeDefined();
    expect(manTf.presentedOptionText).toBeDefined();

    expect(['VERDADERO', 'FALSO']).toContain(getExpectedTrueFalseAnswer(engQ));
    expect(['VERDADERO', 'FALSO']).toContain(getExpectedTrueFalseAnswer(gerQ));
    expect(['VERDADERO', 'FALSO']).toContain(getExpectedTrueFalseAnswer(arabQ));
    expect(['VERDADERO', 'FALSO']).toContain(getExpectedTrueFalseAnswer(manQ));
  });

  it('debe funcionar con reactivos de lenguas originarias de El Salvador (Náhuat-Pipil, Lenca, Kakawira)', () => {
    const nahQ = NAHUAT_QUESTIONS_BANK[0];
    const lenQ = LENCA_QUESTIONS_BANK[0];
    const kakQ = KAKAWIRA_QUESTIONS_BANK[0];

    const nahTf = convertToTrueFalse(nahQ);
    const lenTf = convertToTrueFalse(lenQ);
    const kakTf = convertToTrueFalse(kakQ);

    expect(nahTf.explanation).toContain('Justificación:');
    expect(lenTf.explanation).toContain('Justificación:');
    expect(kakTf.explanation).toContain('Justificación:');
  });

  it('debe mantener una distribución balanceada (~50% V / ~50% F) a través de un banco representativo', () => {
    // Tomamos una muestra amplia de 400 preguntas
    const samplePool = ENGLISH_QUESTIONS_BANK.slice(0, 400);
    let trueCount = 0;
    let falseCount = 0;

    samplePool.forEach((q) => {
      const tf = convertToTrueFalse(q);
      if (tf.isTrue) trueCount++;
      else falseCount++;
    });

    const trueRatio = trueCount / samplePool.length;
    // La proporción debe estar en un rango razonable y balanceado (alrededor del 50%)
    expect(trueRatio).toBeGreaterThan(0.35);
    expect(trueRatio).toBeLessThan(0.65);
    expect(trueCount + falseCount).toBe(samplePool.length);
  });

  it('debe asegurar que la función de dispersión hashString sea determinística y no negativa', () => {
    const h1 = hashString('item_test_123');
    const h2 = hashString('item_test_123');
    const h3 = hashString('item_test_456');

    expect(h1).toBe(h2);
    expect(h1).toBeGreaterThanOrEqual(0);
    expect(h3).toBeGreaterThanOrEqual(0);
  });
});
