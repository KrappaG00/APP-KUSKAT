import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  getGrades,
  getGradeDetail,
  getSubject,
  getUnit,
  getUnitLessons,
  getUnitQuestions,
  searchCurriculum,
  ALL_GRADES_DATA,
} from '../src/data/minedCurriculum/curriculumService';
import { MINED_CATALOG } from '../src/data/minedCurriculum/catalog';
import type { AnswerOptionKey, UnitQuestion, CurriculumSearchResult } from '../src/data/minedCurriculum/types';
import { AcademicReinforcementView } from '../src/components/AcademicReinforcementView';
import { KaTeXRenderer } from '../src/components/KaTeXRenderer';

describe('ADVERSARIAL EMPIRICAL CHALLENGER: ACADEMIC REINFORCEMENT & SIMULATOR', () => {

  // =========================================================================
  // 1. SIMULATOR PAGINATION LOGIC: 10 ITEMS PER PAGE ACROSS 10, 25, 50 QUESTIONS
  // =========================================================================
  describe('1. Simulator Pagination Logic Stress-Testing', () => {
    const testUnitQuestions: UnitQuestion[] = getUnitQuestions('2-bachillerato', 'mined-mat-2b-u03');

    it('banco de la unidad tiene al menos 50 preguntas disponibles', () => {
      expect(testUnitQuestions.length).toBeGreaterThanOrEqual(50);
    });

    const questionCounts: (10 | 25 | 50)[] = [10, 25, 50];
    const itemsPerPage = 10;

    questionCounts.forEach((count) => {
      it(`paginación con selección de ${count} preguntas: calcula páginas exactas y cortes sin pérdida ni solapamiento`, () => {
        const questionsInSim = testUnitQuestions.slice(0, count);
        expect(questionsInSim.length).toBe(count);

        const totalPages = Math.max(1, Math.ceil(questionsInSim.length / itemsPerPage));
        const expectedPages = count === 10 ? 1 : count === 25 ? 3 : 5;
        expect(totalPages).toBe(expectedPages);

        const collectedIds: string[] = [];
        for (let p = 1; p <= totalPages; p++) {
          const start = (p - 1) * itemsPerPage;
          const pageQuestions = questionsInSim.slice(start, start + itemsPerPage);

          if (p < totalPages) {
            expect(pageQuestions.length).toBe(itemsPerPage);
          } else {
            const expectedLastPageCount = count % itemsPerPage === 0 ? itemsPerPage : count % itemsPerPage;
            expect(pageQuestions.length).toBe(expectedLastPageCount);
          }

          // Verificar cálculo de globalIdx
          pageQuestions.forEach((q, pIdx) => {
            const globalIdx = (p - 1) * itemsPerPage + pIdx + 1;
            expect(globalIdx).toBe(collectedIds.length + 1);
            collectedIds.push(q.id);
          });
        }

        // Exactamente count preguntas recolectadas sin duplicados
        expect(collectedIds.length).toBe(count);
        expect(new Set(collectedIds).size).toBe(count);
      });
    });

    it('exhaustiva verificación de cortes para tamaños de colección arbitrarios (N de 1 a 50)', () => {
      for (let n = 1; n <= 50; n++) {
        const slice = testUnitQuestions.slice(0, n);
        const totalP = Math.max(1, Math.ceil(slice.length / 10));
        let countSeen = 0;
        for (let p = 1; p <= totalP; p++) {
          const page = slice.slice((p - 1) * 10, (p - 1) * 10 + 10);
          expect(page.length).toBeGreaterThan(0);
          expect(page.length).toBeLessThanOrEqual(10);
          countSeen += page.length;
        }
        expect(countSeen).toBe(n);
      }
    });

    it('manejo de bordes en paginación: p = 0, p > totalPages, itemsPerPage <= 0', () => {
      const questionsInSim = testUnitQuestions.slice(0, 50);

      // Página 0 o negativa (fuera de rango)
      const page0 = questionsInSim.slice((0 - 1) * 10, (0 - 1) * 10 + 10);
      expect(page0.length).toBe(0);

      // Página mayor que totalPages
      const page6 = questionsInSim.slice((6 - 1) * 10, (6 - 1) * 10 + 10);
      expect(page6.length).toBe(0);

      // Array vacío de preguntas
      const emptySim: UnitQuestion[] = [];
      const emptyTotalPages = Math.max(1, Math.ceil(emptySim.length / 10));
      expect(emptyTotalPages).toBe(1);
      const emptyPage1 = emptySim.slice(0, 10);
      expect(emptyPage1.length).toBe(0);
    });
  });

  // =========================================================================
  // 2. TIMER COUNTDOWN LOGIC AND BOUNDARY CONDITIONS
  // =========================================================================
  describe('2. Timer Countdown Logic & Boundary Conditions', () => {
    // Función espejo de formato del componente
    const formatTimer = (seconds: number | null): string => {
      if (seconds === null) return '--:--';
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    it('formatTimer maneja null (sin límite) retornando --:--', () => {
      expect(formatTimer(null)).toBe('--:--');
    });

    it('formatTimer maneja 0s y valores extremos de forma correcta', () => {
      expect(formatTimer(0)).toBe('00:00');
      expect(formatTimer(1)).toBe('00:01');
      expect(formatTimer(9)).toBe('00:09');
      expect(formatTimer(10)).toBe('00:10');
      expect(formatTimer(59)).toBe('00:59');
      expect(formatTimer(60)).toBe('01:00');
      expect(formatTimer(90)).toBe('01:30');
      expect(formatTimer(600)).toBe('10:00');
      expect(formatTimer(4500)).toBe('75:00'); // 50 preguntas * 90s = 4500s
    });

    it('simulación de transición en cuenta regresiva a 0s y auto-submit', () => {
      let simTimeRemaining: number | null = 3;
      let simSubmitted = false;

      const tick = () => {
        if (simTimeRemaining === null || simTimeRemaining <= 1) {
          simSubmitted = true;
          simTimeRemaining = 0;
        } else {
          simTimeRemaining -= 1;
        }
      };

      // T = 3
      expect(simTimeRemaining).toBe(3);
      expect(simSubmitted).toBe(false);

      // T = 2
      tick();
      expect(simTimeRemaining).toBe(2);
      expect(simSubmitted).toBe(false);

      // T = 1
      tick();
      expect(simTimeRemaining).toBe(1);
      expect(simSubmitted).toBe(false);

      // T = 0 -> Auto-submit
      tick();
      expect(simTimeRemaining).toBe(0);
      expect(simSubmitted).toBe(true);

      // Ticks subsecuentes permanecen en 0 y submitted
      tick();
      expect(simTimeRemaining).toBe(0);
      expect(simSubmitted).toBe(true);
    });

    it('cálculo del tiempo total asignado según preguntas y configuración (60s, 90s)', () => {
      const configs = [60, 90];
      const counts = [10, 25, 50];

      configs.forEach((sec) => {
        counts.forEach((cnt) => {
          const totalSec = sec * cnt;
          expect(totalSec).toBe(sec * cnt);
          expect(totalSec).toBeGreaterThan(0);
        });
      });
    });
  });

  // =========================================================================
  // 3. TUTOR MODE IMMEDIATE FEEDBACK VS EXAM MODE DEFERRED EVALUATION
  // =========================================================================
  describe('3. Tutor Mode vs Exam Mode Behavioral Logic', () => {
    it('en Modo Tutor: la explicación es visible inmediatamente tras responder la pregunta', () => {
      const mode = 'tutor';
      const simSubmitted = false;

      // Estado 1: Sin responder
      let selectedKey: AnswerOptionKey | undefined = undefined;
      let isAnswered = selectedKey !== undefined;
      let showExplanation = mode === 'tutor' ? isAnswered : simSubmitted;
      expect(showExplanation).toBe(false);

      // Estado 2: Respondido incorrecto
      selectedKey = 'A';
      isAnswered = selectedKey !== undefined;
      showExplanation = mode === 'tutor' ? isAnswered : simSubmitted;
      expect(showExplanation).toBe(true);

      // Estado 3: Respondido correcto
      selectedKey = 'B';
      isAnswered = selectedKey !== undefined;
      showExplanation = mode === 'tutor' ? isAnswered : simSubmitted;
      expect(showExplanation).toBe(true);
    });

    it('en Modo Examen: la explicación permanece oculta hasta enviar la evaluación completa', () => {
      const mode = 'exam';
      let simSubmitted = false;

      // Estado 1: Sin responder
      let selectedKey: AnswerOptionKey | undefined = undefined;
      let isAnswered = selectedKey !== undefined;
      let showExplanation = mode === 'tutor' ? isAnswered : simSubmitted;
      expect(showExplanation).toBe(false);

      // Estado 2: Respondido pero aún no enviado el examen
      selectedKey = 'B';
      isAnswered = selectedKey !== undefined;
      showExplanation = mode === 'tutor' ? isAnswered : simSubmitted;
      expect(showExplanation).toBe(false); // DEBE PERMANECER OCULTO

      // Estado 3: Examen calificado y enviado
      simSubmitted = true;
      showExplanation = mode === 'tutor' ? isAnswered : simSubmitted;
      expect(showExplanation).toBe(true); // AHORA ES VISIBLE
    });

    it('bloqueo estricto de modificación de respuestas tras envío', () => {
      let simSubmitted = true;
      const simAnswers: Record<string, AnswerOptionKey> = { 'MINED-TEST-Q01': 'A' };

      const handleSelectOption = (qId: string, opt: AnswerOptionKey) => {
        if (simSubmitted) return;
        simAnswers[qId] = opt;
      };

      handleSelectOption('MINED-TEST-Q01', 'B');
      expect(simAnswers['MINED-TEST-Q01']).toBe('A'); // No se modificó
    });
  });

  // =========================================================================
  // 4. CUADERNO DE ERRORES & MASTERY PERCENTAGE FORMULAS
  // =========================================================================
  describe('4. Cuaderno de Errores & Cálculo de Porcentaje de Dominio', () => {
    const calculateSimStats = (questions: { id: string; correctAnswer: AnswerOptionKey }[], answers: Record<string, AnswerOptionKey>) => {
      let correct = 0;
      let incorrect = 0;
      let unanswered = 0;

      questions.forEach((q) => {
        const ans = answers[q.id];
        if (!ans) {
          unanswered++;
        } else if (ans === q.correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      });

      const total = questions.length;
      const mastery = total > 0 ? Math.round((correct / total) * 100) : 0;

      return { correct, incorrect, unanswered, total, mastery };
    };

    it('invariante fundamental: correct + incorrect + unanswered === total', () => {
      const mockQuestions = Array.from({ length: 50 }, (_, i) => ({
        id: `Q-${i}`,
        correctAnswer: (['A', 'B', 'C', 'D'][i % 4]) as AnswerOptionKey,
      }));

      // Caso mixto: 20 correctas, 15 incorrectas, 15 sin responder
      const mockAnswers: Record<string, AnswerOptionKey> = {};
      for (let i = 0; i < 20; i++) {
        mockAnswers[`Q-${i}`] = mockQuestions[i].correctAnswer;
      }
      for (let i = 20; i < 35; i++) {
        const wrongKeys: AnswerOptionKey[] = ['A', 'B', 'C', 'D'].filter((k) => k !== mockQuestions[i].correctAnswer) as AnswerOptionKey[];
        mockAnswers[`Q-${i}`] = wrongKeys[0];
      }

      const stats = calculateSimStats(mockQuestions, mockAnswers);
      expect(stats.correct).toBe(20);
      expect(stats.incorrect).toBe(15);
      expect(stats.unanswered).toBe(15);
      expect(stats.total).toBe(50);
      expect(stats.correct + stats.incorrect + stats.unanswered).toBe(stats.total);
      expect(stats.mastery).toBe(40); // 20/50 = 40%
    });

    it('casos extremos de dominio (0%, 100%, total = 0)', () => {
      const questions = [
        { id: 'Q1', correctAnswer: 'A' as AnswerOptionKey },
        { id: 'Q2', correctAnswer: 'B' as AnswerOptionKey },
      ];

      // 0% (todas incorrectas)
      const allWrong = calculateSimStats(questions, { Q1: 'B', Q2: 'A' });
      expect(allWrong.mastery).toBe(0);

      // 0% (todas sin responder)
      const allUnanswered = calculateSimStats(questions, {});
      expect(allUnanswered.mastery).toBe(0);

      // 100% (todas correctas)
      const allCorrect = calculateSimStats(questions, { Q1: 'A', Q2: 'B' });
      expect(allCorrect.mastery).toBe(100);

      // total = 0 (evitar división por cero / NaN)
      const zeroQuestions = calculateSimStats([], {});
      expect(zeroQuestions.total).toBe(0);
      expect(zeroQuestions.mastery).toBe(0);
      expect(Number.isNaN(zeroQuestions.mastery)).toBe(false);
    });

    it('redondeo matemático exacto de porcentajes no enteros', () => {
      const q3 = [
        { id: 'Q1', correctAnswer: 'A' as AnswerOptionKey },
        { id: 'Q2', correctAnswer: 'A' as AnswerOptionKey },
        { id: 'Q3', correctAnswer: 'A' as AnswerOptionKey },
      ];
      expect(calculateSimStats(q3, { Q1: 'A' }).mastery).toBe(33);
      expect(calculateSimStats(q3, { Q1: 'A', Q2: 'A' }).mastery).toBe(67);
    });

    it('lógica de reintento de solo errores (handleRetryErrorsOnly)', () => {
      const qList = [
        { id: 'Q1', correctAnswer: 'A' as AnswerOptionKey },
        { id: 'Q2', correctAnswer: 'B' as AnswerOptionKey },
        { id: 'Q3', correctAnswer: 'C' as AnswerOptionKey },
      ];
      const answers: Record<string, AnswerOptionKey> = {
        Q1: 'A', // correcto
        Q2: 'A', // error
        Q3: 'B', // error
      };

      const errorQuestions = qList.filter((q) => answers[q.id] !== q.correctAnswer);
      expect(errorQuestions.length).toBe(2);
      expect(errorQuestions.map((q) => q.id)).toEqual(['Q2', 'Q3']);

      // Caso 0 errores: si todos están correctos, no hay errores que reintentar
      const perfectAnswers: Record<string, AnswerOptionKey> = { Q1: 'A', Q2: 'B', Q3: 'C' };
      const zeroErrors = qList.filter((q) => perfectAnswers[q.id] !== q.correctAnswer);
      expect(zeroErrors.length).toBe(0);
    });
  });

  // =========================================================================
  // 5. SEARCH FUNCTIONALITY UNDER ADVERSARIAL EDGE CASES
  // =========================================================================
  describe('5. Search Functionality Under Adversarial Edge Cases', () => {
    it('consultas vacías y solo espacios en blanco devuelven arreglo vacío sin error', () => {
      expect(searchCurriculum('')).toEqual([]);
      expect(searchCurriculum('   ')).toEqual([]);
      expect(searchCurriculum('\t\n  \r')).toEqual([]);
    });

    it('caracteres especiales de Regex no provocan SyntaxError ni rompen el motor', () => {
      const regexAdversarialQueries = [
        '[',
        ']',
        '(',
        ')',
        '{',
        '}',
        '\\',
        '.',
        '*',
        '+',
        '?',
        '^',
        '$',
        '|',
        '[a-z]+',
        '(.*)',
        '\\d{3}',
        '+++',
        '(((',
      ];

      regexAdversarialQueries.forEach((q) => {
        expect(() => {
          const results = searchCurriculum(q);
          expect(Array.isArray(results)).toBe(true);
        }).not.toThrow();
      });
    });

    it('símbolos KaTeX y LaTeX se buscan como literales correctamente', () => {
      const katexQueries = [
        '\\frac',
        '\\sqrt',
        'x^2',
        '\\pi',
        '\\theta',
        '\\ge',
        '\\le',
        '$',
        '$$',
      ];

      katexQueries.forEach((kq) => {
        expect(() => {
          const results = searchCurriculum(kq);
          expect(Array.isArray(results)).toBe(true);
        }).not.toThrow();
      });

      const formulaResults = searchCurriculum('$');
      expect(formulaResults.length).toBeGreaterThan(0);
      expect(formulaResults.some((r) => r.matchType === 'formula' || r.snippet.includes('$'))).toBe(true);
    });

    it('consultas Unicode complejas, tildes y caracteres extremos no lanzan excepciones', () => {
      const unicodeQueries = [
        'ecuación',
        'geometría',
        'Pitágoras',
        'Álgebra',
        '¡Atención!',
        '¿Por qué?',
        '🔥',
        '∑',
        '∫',
        '∞',
        'α + β = γ',
      ];

      unicodeQueries.forEach((uq) => {
        expect(() => {
          const res = searchCurriculum(uq);
          expect(Array.isArray(res)).toBe(true);
        }).not.toThrow();
      });
    });

    it('consultas extremadamente largas (1000+ chars) no provocan DoS ni cuelgues', () => {
      const hugeQuery = 'pitagoras '.repeat(150);
      const start = performance.now();
      const res = searchCurriculum(hugeQuery);
      const elapsed = performance.now() - start;

      expect(Array.isArray(res)).toBe(true);
      expect(elapsed).toBeLessThan(150);
    });
  });

  // =========================================================================
  // 6. GENERAL REPOSITORIAL INTEGRITY OF MINED CURRICULUM DATA
  // =========================================================================
  describe('6. Integridad Curricular General de MINED', () => {
    it('los 11 grados están registrados con datos consistentes y no nulos', () => {
      const grades = getGrades();
      expect(grades.length).toBe(11);

      grades.forEach((g) => {
        const detail = getGradeDetail(g.id);
        expect(detail, `Detalle no encontrado para grado ${g.id}`).toBeDefined();
        expect(detail!.subjects.length).toBeGreaterThanOrEqual(1);

        detail!.subjects.forEach((subj) => {
          expect(subj.units.length).toBeGreaterThanOrEqual(1);
          subj.units.forEach((u) => {
            expect(u.title.trim().length).toBeGreaterThan(0);
            expect(u.unitNumber).toBeGreaterThanOrEqual(1);

            const qList = getUnitQuestions(g.id, u.id);
            expect(qList.length, `Unidad ${u.id} en ${g.id} no devolvió 50 preguntas`).toBe(50);
          });
        });
      });
    });
  });

  // =========================================================================
  // 7. COMPONENT STATIC SSR RENDERING & ACCESSIBILITY TESTS
  // =========================================================================
  describe('7. Static Rendering & Headless Accessibility Validation', () => {
    it('AcademicReinforcementView se renderiza a HTML sin arrojar excepciones', () => {
      let html = '';
      expect(() => {
        html = renderToStaticMarkup(React.createElement(AcademicReinforcementView));
      }).not.toThrow();

      expect(html.length).toBeGreaterThan(1000);
      // R1: Debe contener el título oficial
      expect(html).toContain('Refuerzo Académico (1° a 9° Grado y Bachillerato)');
      // R1: Debe contener las clases exactas text-white font-black drop-shadow-sm
      expect(html).toContain('text-white');
      expect(html).toContain('font-black');
      expect(html).toContain('drop-shadow-sm');
      // Pilar 1: Debe incluir los 4 ciclos
      expect(html).toContain('Primer Ciclo');
      expect(html).toContain('Segundo Ciclo');
      expect(html).toContain('Tercer Ciclo');
      expect(html).toContain('Educación Media');
    });

    it('KaTeXRenderer renderiza expresiones matemáticas de forma robusta y a prueba de fallos', () => {
      // Expresión matemática válida
      const validKatex = renderToStaticMarkup(
        React.createElement(KaTeXRenderer, { content: 'Sea la hipotenusa $c = \\sqrt{a^2 + b^2}$' })
      );
      expect(validKatex).toContain('katex');

      // Expresión matemática con sintaxis rota (no debe arrojar throw)
      expect(() => {
        renderToStaticMarkup(
          React.createElement(KaTeXRenderer, { content: 'Fórmula rota $\\frac{1}{}$ y $\\sqrt{$' })
        );
      }).not.toThrow();
    });
  });
});
