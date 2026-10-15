import { describe, it, expect } from 'vitest';

describe('Evaluación y Calificación (Escala Oficial Salvadoreña 0.0 - 10.0)', () => {
  const calculateGrade = (correct: number, total: number): string => {
    if (!total || total <= 0) return '0.0';
    const grade = (correct / total) * 10;
    return grade.toFixed(1);
  };

  const calculatePercentage = (correct: number, total: number): number => {
    if (!total || total <= 0) return 0;
    return Math.round((correct / total) * 100);
  };

  it('calcula correctamente la nota perfecta (10.0) y 100%', () => {
    expect(calculateGrade(50, 50)).toBe('10.0');
    expect(calculatePercentage(50, 50)).toBe(100);
  });

  it('calcula correctamente la nota reprobatoria de 0 aciertos (0.0) y 0%', () => {
    expect(calculateGrade(0, 50)).toBe('0.0');
    expect(calculatePercentage(0, 50)).toBe(0);
  });

  it('calcula la nota aprobatoria límite salvadoreña (7.0) con 70% de aciertos', () => {
    expect(calculateGrade(35, 50)).toBe('7.0');
    expect(calculatePercentage(35, 50)).toBe(70);
  });

  it('formatea las calificaciones intermedias con exactamente un decimal', () => {
    // 33 de 50 = 6.6
    expect(calculateGrade(33, 50)).toBe('6.6');
    // 41 de 50 = 8.2
    expect(calculateGrade(41, 50)).toBe('8.2');
    // 1 de 3 = 3.3333... -> 3.3
    expect(calculateGrade(1, 3)).toBe('3.3');
  });

  it('las preguntas no contestadas no otorgan puntaje y computan como fallos/vacías', () => {
    const totalQuestions = 30;
    const answeredCount = 20;
    const correctCount = 15;
    const unansweredCount = totalQuestions - answeredCount; // 10
    const incorrectCount = answeredCount - correctCount; // 5

    // Total fallos/vacías
    const missedTotal = incorrectCount + unansweredCount;
    expect(missedTotal).toBe(15);

    // La nota se calcula sobre el total de la prueba (30), no sobre las respondidas (20)
    const grade = calculateGrade(correctCount, totalQuestions);
    expect(grade).toBe('5.0');
  });
});
