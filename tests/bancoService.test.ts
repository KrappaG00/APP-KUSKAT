import { describe, it, expect } from 'vitest';
import {
  assignPedagogicalLevel,
  getStrictFallbackQuestions,
  getSimilarQuestion,
} from '../src/services/bancoService';
import { Question } from '../src/types';

describe('bancoService (Aislamiento de Respaldos y Clasificación Pedagógica)', () => {
  it('el respaldo estricto para Matemáticas UES nunca retorna preguntas de otras materias', () => {
    const mathFallback = getStrictFallbackQuestions('UES', 'matematicas');
    expect(mathFallback.length).toBeGreaterThan(0);

    for (const q of mathFallback) {
      expect(q.institution).toBe('UES');
      // Debe pertenecer estrictamente a Matemáticas
      expect(q.subject.toLowerCase()).toContain('matem');
      expect(q.subject.toLowerCase()).not.toContain('lenguaje');
      expect(q.subject.toLowerCase()).not.toContain('sociales');
      expect(q.subject.toLowerCase()).not.toContain('ciencias');
      expect(q.subject.toLowerCase()).not.toContain('química');
    }
  });

  it('el respaldo estricto para Lenguaje UES nunca retorna preguntas de Matemáticas', () => {
    const langFallback = getStrictFallbackQuestions('UES', 'lenguaje');
    expect(langFallback.length).toBeGreaterThan(0);

    for (const q of langFallback) {
      expect(q.institution).toBe('UES');
      expect(q.subject.toLowerCase()).toContain('lenguaje');
      expect(q.subject.toLowerCase()).not.toContain('matem');
    }
  });

  it('el respaldo para ANSP solo retorna preguntas con institución ANSP', () => {
    const anspFallback = getStrictFallbackQuestions('ANSP');
    expect(anspFallback.length).toBeGreaterThan(0);

    for (const q of anspFallback) {
      expect(q.institution).toBe('ANSP');
    }
  });

  it('asigna el nivel pedagógico básico a conceptos, definiciones y clasificaciones iniciales', () => {
    const level1 = assignPedagogicalLevel('SECCIÓN I: CONCEPTOS FUNDAMENTALES (1-30)', 0, 100);
    expect(level1).toBe('basico');

    const level2 = assignPedagogicalLevel('DEFINICIÓN Y CLASIFICACIÓN', 5, 100);
    expect(level2).toBe('basico');
  });

  it('asigna el nivel intermedio a procedimientos, algoritmos y cálculos', () => {
    const level = assignPedagogicalLevel('SECCIÓN III: APLICACIÓN DE FÓRMULAS Y OPERACIONES', 40, 100);
    expect(level).toBe('intermedio');
  });

  it('asigna el nivel admisión a problemas avanzados, modelos y preguntas finales de la unidad', () => {
    const level1 = assignPedagogicalLevel('SECCIÓN VI: PROBLEMAS DE ADMISIÓN UNIVERSITARIA', 90, 100);
    expect(level1).toBe('admision');

    const level2 = assignPedagogicalLevel('CUESTIONARIO GENERAL', 95, 100);
    expect(level2).toBe('admision');
  });

  it('getSimilarQuestion encuentra reactivos de la misma sección o del mismo subtema y nivel', () => {
    const pool: Question[] = [
      {
        id: 'q1',
        number: 1,
        statement: '¿Qué es un número primo?',
        options: [
          { key: 'A', text: 'Solo divisible por 1 y sí mismo' },
          { key: 'B', text: 'Divisible por 2' },
        ],
        correctAnswer: 'A',
        explanation: 'Definición de primo.',
        institution: 'UES',
        subject: 'Matemáticas',
        topic: 'Números Reales',
        subtopicId: '1.1',
        sectionTitle: 'Sección Conceptos',
        level: 'basico',
      },
      {
        id: 'q2',
        number: 2,
        statement: 'Identifique el menor número primo.',
        options: [
          { key: 'A', text: '1' },
          { key: 'B', text: '2' },
        ],
        correctAnswer: 'B',
        explanation: 'El 2 es el único primo par.',
        institution: 'UES',
        subject: 'Matemáticas',
        topic: 'Números Reales',
        subtopicId: '1.1',
        sectionTitle: 'Sección Conceptos',
        level: 'basico',
      },
      {
        id: 'q3',
        number: 3,
        statement: 'Calcule la derivada de f(x) = x^2.',
        options: [
          { key: 'A', text: '2x' },
          { key: 'B', text: 'x' },
        ],
        correctAnswer: 'A',
        explanation: 'Regla de la potencia.',
        institution: 'UES',
        subject: 'Matemáticas',
        topic: 'Cálculo',
        subtopicId: '1.7',
        sectionTitle: 'Sección Derivadas',
        level: 'admision',
      },
    ];

    const target = pool[0];
    const similar = getSimilarQuestion(target, pool);

    expect(similar).not.toBeNull();
    expect(similar!.id).toBe('q2');
    expect(similar!.sectionTitle).toBe(target.sectionTitle);
  });
});
