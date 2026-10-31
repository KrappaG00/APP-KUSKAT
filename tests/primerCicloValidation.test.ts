import { describe, it, expect } from 'vitest';
import { GRADE_01_DATA } from '../src/data/minedCurriculum/grades/grade01PrimerGrado';
import { GRADE_02_DATA } from '../src/data/minedCurriculum/grades/grade02SegundoGrado';
import { GRADE_03_DATA } from '../src/data/minedCurriculum/grades/grade03TercerGrado';

function countGenuineWords(text: string): number {
  const cleaned = text
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$]*\$/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}()[\]=+*/^_<>|•:;,.!?'"`-]/g, ' ')
    .trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter((w) => w.length > 0).length;
}

describe('VERIFICACIÓN PRIMER CICLO (1° Grado, 2° Grado, 3° Grado) — 27 Unidades & 32 Lecciones', () => {
  const grades = [
    { grade: GRADE_01_DATA, expectedUnits: 8, expectedLessons: 11, label: '1° Grado' },
    { grade: GRADE_02_DATA, expectedUnits: 9, expectedLessons: 10, label: '2° Grado' },
    { grade: GRADE_03_DATA, expectedUnits: 10, expectedLessons: 11, label: '3° Grado' },
  ];

  it('1. Estructura general de unidades y conteo de lecciones', () => {
    let totalUnits = 0;
    let totalLessons = 0;

    for (const g of grades) {
      const mathSubject = g.grade.subjects[0];
      expect(mathSubject).toBeDefined();
      expect(mathSubject.units.length, `${g.label} debe tener ${g.expectedUnits} unidades`).toBe(g.expectedUnits);
      totalUnits += mathSubject.units.length;

      let gradeLessons = 0;
      for (const u of mathSubject.units) {
        expect(u.lessons.length).toBeGreaterThanOrEqual(1);
        gradeLessons += u.lessons.length;
      }
      expect(gradeLessons, `${g.label} debe tener ${g.expectedLessons} lecciones`).toBe(g.expectedLessons);
      totalLessons += gradeLessons;
    }

    expect(totalUnits).toBe(27);
    expect(totalLessons).toBe(32);
  });

  it('2. Cada lección de 1°, 2° y 3° Grado cumple estrictamente >= 500 palabras sustantivas y >= 5 ejemplos resueltos', () => {
    for (const g of grades) {
      const mathSubject = g.grade.subjects[0];
      for (const unit of mathSubject.units) {
        for (const lesson of unit.lessons) {
          expect(Array.isArray(lesson.examples), `Lección ${lesson.id} debe tener examples`).toBe(true);
          expect(lesson.examples!.length, `Lección ${lesson.id} debe tener >= 5 ejemplos`).toBeGreaterThanOrEqual(5);

          const uniqueEx = new Set(lesson.examples!.map((e) => e.trim()));
          expect(uniqueEx.size, `Ejemplos de ${lesson.id} deben ser distintos`).toBe(lesson.examples!.length);

          for (const ex of lesson.examples!) {
            expect(ex, `Ejemplo de ${lesson.id} debe contener estructura procedural Paso 1 / Paso 2 / Solución`).toMatch(/Paso 1:[\s\S]*Paso 2:[\s\S]*Solución:/i);
            expect(ex).not.toContain('un centro escolar de Ahuachapán');
            expect(ex).not.toContain('un centro escolar de Chalatenango');
          }

          const resuelveProse = lesson.resuelve
            .map((r) => `${r.exercise} ${r.hint || ''} ${r.answer || ''}`)
            .join(' ');
          const examplesProse = lesson.examples!.join(' ');
          const fullUniqueLessonProse = [
            lesson.problema,
            lesson.solucion,
            lesson.conclusion,
            examplesProse,
            resuelveProse,
          ].join(' ');

          const wordCount = countGenuineWords(fullUniqueLessonProse);
          expect(
            wordCount,
            `Lección ${lesson.id} (${lesson.title}) en ${g.label} tiene ${wordCount} palabras, debe tener >= 500`
          ).toBeGreaterThanOrEqual(500);
        }
      }
    }
  });

  it('3. Preservación intacta de reactivos y evaluabilidad de 50 preguntas en unidades con simulador', () => {
    for (const g of grades) {
      const mathSubject = g.grade.subjects[0];
      for (const unit of mathSubject.units) {
        if (unit.isEvaluated) {
          expect(unit.questions, `Unidad evaluada ${unit.id} debe tener preguntas`).toBeDefined();
          expect(unit.questions!.length, `Unidad ${unit.id} debe tener 50 reactivos`).toBe(50);

          const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
          for (const q of unit.questions!) {
            counts[q.correctAnswer] = (counts[q.correctAnswer] || 0) + 1;
          }
          expect(counts.A).toBeGreaterThanOrEqual(12);
          expect(counts.A).toBeLessThanOrEqual(13);
          expect(counts.B).toBeGreaterThanOrEqual(12);
          expect(counts.B).toBeLessThanOrEqual(13);
          expect(counts.C).toBeGreaterThanOrEqual(12);
          expect(counts.C).toBeLessThanOrEqual(13);
          expect(counts.D).toBeGreaterThanOrEqual(12);
          expect(counts.D).toBeLessThanOrEqual(13);
        }
      }
    }
  });
});
