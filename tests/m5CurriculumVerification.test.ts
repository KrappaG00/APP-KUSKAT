import { describe, it, expect } from 'vitest';
import { curriculumService } from '../src/data/minedCurriculum/curriculumService';
import type { CurriculumUnit, PscerLesson } from '../src/data/minedCurriculum/types';

function countSubstantiveWords(text: string): number {
  if (!text) return 0;
  const stripped = text
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$([^\$]+)\$/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s]/g, ' ');
  return stripped.trim().split(/\s+/).filter((w) => w.length >= 2).length;
}

describe('M5 Verification: 1° y 2° Bachillerato (ESMATE Oficial)', () => {
  const gradesToTest = ['1-bachillerato', '2-bachillerato'];

  gradesToTest.forEach((gradeId) => {
    describe(`Grade: ${gradeId}`, () => {
      const detail = curriculumService.getGradeDetail(gradeId);

      it('existe y tiene 1 asignatura con 8 unidades oficiales', () => {
        expect(detail).toBeDefined();
        expect(detail?.subjects.length).toBeGreaterThanOrEqual(1);
        const subject = detail!.subjects[0];
        expect(subject.units.length).toBe(8);
      });

      const subject = detail?.subjects[0];
      const units: CurriculumUnit[] = subject ? subject.units : [];

      units.forEach((unit) => {
        describe(`Unidad ${unit.unitNumber}: ${unit.title} (${unit.id})`, () => {
          it('contiene lecciones válidas', () => {
            expect(unit.lessons.length).toBeGreaterThanOrEqual(1);
          });

          unit.lessons.forEach((lesson: PscerLesson) => {
            describe(`Lección ${lesson.lessonNumber}: ${lesson.title}`, () => {
              it('tiene al menos 5 ejemplos resueltos paso a paso y sin plantillas sintéticas de departamentos', () => {
                expect(lesson.examples).toBeDefined();
                expect(lesson.examples.length).toBeGreaterThanOrEqual(5);

                lesson.examples.forEach((ex, idx) => {
                  expect(ex, `Ejemplo ${idx + 1} no debe ser vacío`).toBeTruthy();
                  expect(ex).not.toContain('En un proyecto académico desarrollado en');
                  expect(ex).not.toContain('centro escolar de San Salvador');
                  expect(ex).toMatch(/(Paso 1|Paso 2|Solución)/);
                  const wordCount = countSubstantiveWords(ex);
                  expect(wordCount, `Ejemplo ${idx + 1} debe tener profundidad procedimental`).toBeGreaterThanOrEqual(25);
                });
              });

              it('cumple con el conteo mínimo de >= 500 palabras sustantivas', () => {
                const probCount = countSubstantiveWords(lesson.problema);
                const solCount = countSubstantiveWords(lesson.solucion);
                const concCount = countSubstantiveWords(lesson.conclusion);
                const exCounts = (lesson.examples || []).map((ex) => countSubstantiveWords(ex));
                const resCount = (lesson.resuelve || []).reduce(
                  (acc, r) => acc + countSubstantiveWords(`${r.exercise} ${r.hint || ''} ${r.answer || ''}`),
                  0
                );

                const totalWords =
                  probCount +
                  solCount +
                  concCount +
                  exCounts.reduce((a, b) => a + b, 0) +
                  resCount;

                console.log(
                  `[COUNT] ${lesson.id} -> Total: ${totalWords} | prob: ${probCount} | sol: ${solCount} | conc: ${concCount} | ex: [${exCounts.join(', ')}] (sum: ${exCounts.reduce((a, b) => a + b, 0)}) | res: ${resCount}`
                );

                expect(
                  totalWords,
                  `Lección ${lesson.id} (${lesson.title}) total: ${totalWords} palabras (prob: ${probCount}, sol: ${solCount}, conc: ${concCount}, ex: ${exCounts.join('+')}, res: ${resCount})`
                ).toBeGreaterThanOrEqual(500);
              });

              it('problema, solución y conclusión cumplen proporciones pedagógicas sustantivas', () => {
                const probCount = countSubstantiveWords(lesson.problema);
                const solCount = countSubstantiveWords(lesson.solucion);
                const concCount = countSubstantiveWords(lesson.conclusion);

                expect(probCount, `problema de ${lesson.id} debe tener >= 50 palabras`).toBeGreaterThanOrEqual(50);
                expect(solCount, `solución de ${lesson.id} debe tener >= 100 palabras`).toBeGreaterThanOrEqual(100);
                expect(concCount, `conclusión de ${lesson.id} debe tener >= 60 palabras`).toBeGreaterThanOrEqual(60);
              });

              it('los ejercicios de resuelve contienen pistas didácticas y respuestas formativas', () => {
                expect(lesson.resuelve.length).toBeGreaterThanOrEqual(2);
                lesson.resuelve.forEach((r) => {
                  expect(r.exercise.length).toBeGreaterThanOrEqual(10);
                  expect(r.answer.length).toBeGreaterThanOrEqual(1);
                });
              });
            });
          });

          if (unit.isEvaluated) {
            it('el simulador de 50 preguntas permanece completamente operativo', () => {
              expect(unit.questions).toBeDefined();
              expect(unit.questions!.length).toBeGreaterThanOrEqual(50);
            });
          }
        });
      });
    });
  });
});
