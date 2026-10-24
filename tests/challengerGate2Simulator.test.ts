import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// 1. Data modules under test
import {
  TECHNICAL_COURSES,
  SALVADORAN_NORMATIVE_INSTITUTIONS,
  CourseQuizQuestion,
  TechnicalCourse,
  TechnicalCourseModule,
} from '../src/data/technicalCoursesData';

// 2. Component under test
import { TechnicalCoursesView } from '../src/components/TechnicalCoursesView';

// 3. Specialized questions (1,400 total) for collision testing
import { ADMIN_LAW_QUESTIONS } from '../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../src/data/complianceAmlData';

describe('CHALLENGER GATE 2: QUIZ SIMULATOR & INVARIANTS EMPIRICAL STRESS SUITE', () => {
  // Helper to extract all questions across the 10 courses
  function getAllQuestions(): { courseId: string; moduleNumber: number; question: CourseQuizQuestion }[] {
    const list: { courseId: string; moduleNumber: number; question: CourseQuizQuestion }[] = [];
    TECHNICAL_COURSES.forEach((course) => {
      course.modules.forEach((mod) => {
        (mod.quiz || []).forEach((q) => {
          list.push({
            courseId: course.id,
            moduleNumber: mod.number,
            question: q,
          });
        });
      });
    });
    return list;
  }

  // =========================================================================
  // SECTION 1: 120 QUIZ QUESTIONS INVARIANTS STRESS TESTING
  // =========================================================================
  describe('1. Quiz Questions Invariants Stress Testing', () => {
    it('exactamente 10 cursos y 40 módulos didácticos (4 módulos por curso)', () => {
      expect(TECHNICAL_COURSES.length).toBe(10);
      let totalModules = 0;
      TECHNICAL_COURSES.forEach((c) => {
        expect(c.modules.length, `Curso ${c.id} debe tener 4 módulos`).toBe(4);
        totalModules += c.modules.length;
      });
      expect(totalModules).toBe(40);
    });

    it('cada uno de los 40 módulos tiene al menos 3 preguntas formativas (total >= 120)', () => {
      const allQ = getAllQuestions();
      expect(allQ.length).toBeGreaterThanOrEqual(120);

      TECHNICAL_COURSES.forEach((c) => {
        c.modules.forEach((m) => {
          expect(
            Array.isArray(m.quiz),
            `Módulo ${m.number} en ${c.id} carece de arreglo quiz`
          ).toBe(true);
          expect(
            m.quiz.length,
            `Módulo ${m.number} en ${c.id} tiene menos de 3 preguntas (${m.quiz.length})`
          ).toBeGreaterThanOrEqual(3);
        });
      });
    });

    it('cada pregunta tiene exactamente 4 opciones A, B, C, D no vacías y sin duplicados', () => {
      const allQ = getAllQuestions();
      allQ.forEach(({ courseId, moduleNumber, question: q }) => {
        expect(q.options, `Pregunta ${q.id} en ${courseId} M${moduleNumber} sin opciones`).toBeDefined();

        let optDict: Record<string, string> = {};
        if (Array.isArray(q.options)) {
          const keys = ['A', 'B', 'C', 'D'];
          q.options.forEach((opt: any, idx: number) => {
            const key = typeof opt === 'object' && opt.key ? opt.key : keys[idx];
            const text = typeof opt === 'object' && opt.text !== undefined ? opt.text : String(opt);
            optDict[key] = text;
          });
        } else if (typeof q.options === 'object') {
          optDict = { ...q.options };
        }

        const keys = Object.keys(optDict).sort();
        expect(
          keys,
          `Pregunta ${q.id} (${courseId} M${moduleNumber}) no tiene exactamente llaves [A, B, C, D]`
        ).toEqual(['A', 'B', 'C', 'D']);

        // Verificar que ninguna opción sea vacía o trivial
        ['A', 'B', 'C', 'D'].forEach((key) => {
          const text = optDict[key];
          expect(
            typeof text,
            `Opción ${key} en ${q.id} no es string`
          ).toBe('string');
          expect(
            text.trim().length,
            `Opción ${key} en ${q.id} (${courseId} M${moduleNumber}) está vacía o es muy corta: "${text}"`
          ).toBeGreaterThanOrEqual(2);
        });

        // Verificar cero opciones duplicadas (case-insensitive & trimmed)
        const uniqueValues = new Set(
          Object.values(optDict).map((val) => val.trim().toLowerCase())
        );
        expect(
          uniqueValues.size,
          `Pregunta ${q.id} en ${courseId} M${moduleNumber} contiene opciones duplicadas: ${JSON.stringify(optDict)}`
        ).toBe(4);
      });
    });

    it('cada pregunta tiene una clave de respuesta correcta válida existente en [A, B, C, D]', () => {
      const allQ = getAllQuestions();
      allQ.forEach(({ courseId, moduleNumber, question: q }) => {
        const correct = q.correctAnswer;
        expect(
          ['A', 'B', 'C', 'D'],
          `correctAnswer inválido en ${q.id} (${courseId} M${moduleNumber}): ${correct}`
        ).toContain(correct);

        // Verificar que la clave exista en options
        const optText = (q.options as any)[correct];
        expect(
          optText,
          `correctAnswer ${correct} no tiene texto asociado en ${q.id}`
        ).toBeDefined();
        expect(
          String(optText).trim().length,
          `correctAnswer ${correct} tiene texto vacío en ${q.id}`
        ).toBeGreaterThanOrEqual(2);
      });
    });

    it('enunciados (>25 caracteres), explicaciones (>25 caracteres) y bases legales/técnicas (>5 caracteres) sustantivas', () => {
      const allQ = getAllQuestions();
      allQ.forEach(({ courseId, moduleNumber, question: q }) => {
        const statement = q.question || (q as any).statement;
        expect(
          statement,
          `Pregunta ${q.id} carece de enunciado`
        ).toBeDefined();
        expect(
          statement.trim().length,
          `Enunciado demasiado corto en ${q.id} (${courseId} M${moduleNumber}): "${statement}"`
        ).toBeGreaterThan(25);

        expect(
          q.explanation,
          `Pregunta ${q.id} carece de explicación`
        ).toBeDefined();
        expect(
          q.explanation.trim().length,
          `Explicación insuficiente en ${q.id} (${courseId} M${moduleNumber}): "${q.explanation}"`
        ).toBeGreaterThan(25);

        const basis = q.legalBasis || q.technicalStandard || (q as any).basis;
        expect(
          basis,
          `Pregunta ${q.id} carece de fundamento legal o técnico`
        ).toBeDefined();
        expect(
          basis.trim().length,
          `Fundamento demasiado corto en ${q.id} (${courseId} M${moduleNumber}): "${basis}"`
        ).toBeGreaterThan(5);
      });
    });

    it('cero términos comodín, placeholder o mock (dummy, TODO, lorem ipsum, fake, etc.)', () => {
      const allQ = getAllQuestions();
      const forbiddenCaseInsensitive = /\b(lorem ipsum|placeholder|dummy|fake|mock|test question|pregunta de prueba)\b/i;
      const forbiddenCaseSensitive = /\bTODO\b/;

      allQ.forEach(({ question: q }) => {
        const serialized = JSON.stringify(q);
        expect(
          serialized,
          `Término prohibido encontrado en reactivo ${q.id}`
        ).not.toMatch(forbiddenCaseInsensitive);

        expect(
          serialized,
          `Placeholder TODO detectado en reactivo ${q.id}`
        ).not.toMatch(forbiddenCaseSensitive);
      });
    });
  });

  // =========================================================================
  // SECTION 2: ID UNIQUENESS & COLLISION STRESS TESTING
  // =========================================================================
  describe('2. ID Collision & Uniqueness Stress Testing', () => {
    it('cero IDs duplicados entre los 10 cursos y 40 módulos', () => {
      const allQ = getAllQuestions();
      const ids = allQ.map((item) => item.question.id);
      const uniqueIds = new Set<string>();

      ids.forEach((id) => {
        expect(
          uniqueIds.has(id),
          `ID duplicado detectado en cursos técnicos: ${id}`
        ).toBe(false);
        uniqueIds.add(id);
      });

      expect(uniqueIds.size).toBe(allQ.length);
      expect(uniqueIds.size).toBeGreaterThanOrEqual(120);
    });

    it('cero colisiones de ID con el banco base de 17,640 preguntas en public/data/', () => {
      const publicDataDir = path.join(process.cwd(), 'public', 'data');
      const baseBankIds = new Set<string>();

      function scanBaseBank(dir: string) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const res = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            scanBaseBank(res);
          } else if (
            entry.isFile() &&
            entry.name.endsWith('.json') &&
            !entry.name.includes('manifest') &&
            !entry.name.includes('curriculum')
          ) {
            try {
              const data = JSON.parse(fs.readFileSync(res, 'utf-8'));
              if (Array.isArray(data)) {
                data.forEach((item: any) => {
                  if (item && item.id) baseBankIds.add(String(item.id));
                });
              }
            } catch {}
          }
        }
      }

      ['questions', 'ansp', 'asd', 'avanzo', 'ena', 'escalafon'].forEach((sub) => {
        scanBaseBank(path.join(publicDataDir, sub));
      });

      expect(baseBankIds.size).toBeGreaterThan(15000);

      const allQ = getAllQuestions();
      const colliding: string[] = [];

      allQ.forEach(({ question: q }) => {
        if (baseBankIds.has(q.id)) {
          colliding.push(q.id);
        }
      });

      expect(
        colliding,
        `Se detectaron colisiones de ID con el banco base: ${colliding.join(', ')}`
      ).toEqual([]);
    });

    it('cero colisiones de ID con los 1,400 reactivos especializados existentes', () => {
      const specializedLists = [
        ADMIN_LAW_QUESTIONS,
        SALUD_PRIMARIA_QUESTIONS,
        INGENIERIA_QUESTIONS,
        NOTARY_EXAM_QUESTIONS,
        CSSP_QUESTIONS_DATA,
        ANSP_ASCENSO_QUESTIONS,
        COMPLIANCE_QUESTIONS,
      ];

      const specializedIds = new Set<string>();
      specializedLists.forEach((list) => {
        list.forEach((q: any) => {
          specializedIds.add(String(q.id));
        });
      });

      expect(specializedIds.size).toBe(1400);

      const allQ = getAllQuestions();
      const colliding: string[] = [];

      allQ.forEach(({ question: q }) => {
        if (specializedIds.has(q.id)) {
          colliding.push(q.id);
        }
      });

      expect(
        colliding,
        `Colisión de ID con preguntas especializadas: ${colliding.join(', ')}`
      ).toEqual([]);
    });
  });

  // =========================================================================
  // SECTION 3: INTERACTIVE QUIZ SIMULATOR STATE MACHINE STRESS TESTING
  // =========================================================================
  describe('3. Interactive Quiz Simulator State Machine Stress Testing', () => {
    // Model of the state machine logic in TechnicalCoursesView.tsx
    class QuizSimulatorHarness {
      selectedCourseId: string = 'electricidad';
      activeModuleNumber: number = 1;
      quizAnswers: Record<string, 'A' | 'B' | 'C' | 'D'> = {};

      getSelectedCourse(): TechnicalCourse {
        return (
          TECHNICAL_COURSES.find((c) => c.id === this.selectedCourseId) ||
          TECHNICAL_COURSES[0]
        );
      }

      getActiveModule(): TechnicalCourseModule {
        const course = this.getSelectedCourse();
        return (
          course.modules.find((m) => m.number === this.activeModuleNumber) ||
          course.modules[0]
        );
      }

      getModuleQuestions(): CourseQuizQuestion[] {
        return this.getActiveModule().quiz || [];
      }

      getAnsweredCount(): number {
        const questions = this.getModuleQuestions();
        return questions.filter((q) => this.quizAnswers[q.id]).length;
      }

      getCorrectCount(): number {
        const questions = this.getModuleQuestions();
        return questions.filter((q) => this.quizAnswers[q.id] === q.correctAnswer).length;
      }

      selectOption(questionId: string, option: 'A' | 'B' | 'C' | 'D') {
        this.quizAnswers = {
          ...this.quizAnswers,
          [questionId]: option,
        };
      }

      resetCurrentModuleQuiz() {
        const questions = this.getModuleQuestions();
        const next = { ...this.quizAnswers };
        questions.forEach((q) => {
          delete next[q.id];
        });
        this.quizAnswers = next;
      }

      selectCourse(courseId: string) {
        this.selectedCourseId = courseId;
        this.activeModuleNumber = 1;
      }

      setActiveModule(modNum: number) {
        this.activeModuleNumber = modNum;
      }
    }

    it('inicialización del simulador: curso inicial electricidad, módulo 1, puntaje 0/0', () => {
      const sim = new QuizSimulatorHarness();
      expect(sim.selectedCourseId).toBe('electricidad');
      expect(sim.activeModuleNumber).toBe(1);
      expect(sim.getAnsweredCount()).toBe(0);
      expect(sim.getCorrectCount()).toBe(0);
      expect(sim.getModuleQuestions().length).toBeGreaterThanOrEqual(3);
    });

    it('simulación de puntaje perfecto (100% aciertos) en los 40 módulos didácticos', () => {
      TECHNICAL_COURSES.forEach((course) => {
        for (let m = 1; m <= 4; m++) {
          const sim = new QuizSimulatorHarness();
          sim.selectCourse(course.id);
          sim.setActiveModule(m);

          const questions = sim.getModuleQuestions();
          expect(questions.length).toBeGreaterThanOrEqual(3);

          // Responder todas correctamente
          questions.forEach((q) => {
            sim.selectOption(q.id, q.correctAnswer as any);
          });

          expect(sim.getAnsweredCount()).toBe(questions.length);
          expect(sim.getCorrectCount()).toBe(questions.length);
        }
      });
    });

    it('simulación de puntaje cero (0 aciertos) con respuestas incorrectas deliberadas', () => {
      TECHNICAL_COURSES.forEach((course) => {
        for (let m = 1; m <= 4; m++) {
          const sim = new QuizSimulatorHarness();
          sim.selectCourse(course.id);
          sim.setActiveModule(m);

          const questions = sim.getModuleQuestions();
          questions.forEach((q) => {
            // Seleccionar una opción que NO sea la correcta
            const incorrectKey = (['A', 'B', 'C', 'D'] as const).find(
              (k) => k !== q.correctAnswer
            )!;
            sim.selectOption(q.id, incorrectKey);
          });

          expect(sim.getAnsweredCount()).toBe(questions.length);
          expect(sim.getCorrectCount()).toBe(0);
        }
      });
    });

    it('transición de selección: cambiar opción de incorrecta a correcta y viceversa', () => {
      const sim = new QuizSimulatorHarness();
      sim.selectCourse('electricidad');
      sim.setActiveModule(1);

      const questions = sim.getModuleQuestions();
      const q1 = questions[0];
      const wrongKey = (['A', 'B', 'C', 'D'] as const).find((k) => k !== q1.correctAnswer)!;

      // 1. Responder incorrectamente
      sim.selectOption(q1.id, wrongKey);
      expect(sim.getAnsweredCount()).toBe(1);
      expect(sim.getCorrectCount()).toBe(0);

      // 2. Rectificar a correcta
      sim.selectOption(q1.id, q1.correctAnswer as any);
      expect(sim.getAnsweredCount()).toBe(1);
      expect(sim.getCorrectCount()).toBe(1);

      // 3. Volver a seleccionar la misma correcta (idempotencia)
      sim.selectOption(q1.id, q1.correctAnswer as any);
      expect(sim.getAnsweredCount()).toBe(1);
      expect(sim.getCorrectCount()).toBe(1);

      // 4. Cambiar a otra incorrecta
      sim.selectOption(q1.id, wrongKey);
      expect(sim.getAnsweredCount()).toBe(1);
      expect(sim.getCorrectCount()).toBe(0);
    });

    it('aislamiento estricto de reset: reiniciar un módulo no altera respuestas de otros módulos ni cursos', () => {
      const sim = new QuizSimulatorHarness();

      // Curso 1: Electricidad, Módulo 1 (responder correctamente)
      sim.selectCourse('electricidad');
      sim.setActiveModule(1);
      const elecM1Q = sim.getModuleQuestions();
      elecM1Q.forEach((q) => sim.selectOption(q.id, q.correctAnswer as any));
      expect(sim.getAnsweredCount()).toBe(elecM1Q.length);
      expect(sim.getCorrectCount()).toBe(elecM1Q.length);

      // Curso 1: Electricidad, Módulo 2 (responder correctamente)
      sim.setActiveModule(2);
      const elecM2Q = sim.getModuleQuestions();
      elecM2Q.forEach((q) => sim.selectOption(q.id, q.correctAnswer as any));
      expect(sim.getAnsweredCount()).toBe(elecM2Q.length);
      expect(sim.getCorrectCount()).toBe(elecM2Q.length);

      // Curso 2: Mecánica de Motos, Módulo 1 (responder correctamente)
      sim.selectCourse('mecanica-motos');
      sim.setActiveModule(1);
      const motoM1Q = sim.getModuleQuestions();
      motoM1Q.forEach((q) => sim.selectOption(q.id, q.correctAnswer as any));
      expect(sim.getAnsweredCount()).toBe(motoM1Q.length);
      expect(sim.getCorrectCount()).toBe(motoM1Q.length);

      // Ahora ejecutar RESET en 'mecanica-motos' Módulo 1
      sim.resetCurrentModuleQuiz();
      expect(sim.getAnsweredCount()).toBe(0);
      expect(sim.getCorrectCount()).toBe(0);

      // Regresar a 'electricidad' Módulo 1 -> Debe seguir intacto
      sim.selectCourse('electricidad');
      sim.setActiveModule(1);
      expect(sim.getAnsweredCount()).toBe(elecM1Q.length);
      expect(sim.getCorrectCount()).toBe(elecM1Q.length);

      // Verificar 'electricidad' Módulo 2 -> Debe seguir intacto
      sim.setActiveModule(2);
      expect(sim.getAnsweredCount()).toBe(elecM2Q.length);
      expect(sim.getCorrectCount()).toBe(elecM2Q.length);

      // Reset en 'electricidad' Módulo 2
      sim.resetCurrentModuleQuiz();
      expect(sim.getAnsweredCount()).toBe(0);
      expect(sim.getCorrectCount()).toBe(0);

      // 'electricidad' Módulo 1 sigue intacto
      sim.setActiveModule(1);
      expect(sim.getAnsweredCount()).toBe(elecM1Q.length);
      expect(sim.getCorrectCount()).toBe(elecM1Q.length);
    });

    it('cambio de curso siempre restablece activeModuleNumber al módulo 1', () => {
      const sim = new QuizSimulatorHarness();
      sim.selectCourse('soldadura');
      sim.setActiveModule(4);
      expect(sim.activeModuleNumber).toBe(4);

      // Cambiar a otro curso
      sim.selectCourse('fontaneria-hidraulica');
      expect(sim.selectedCourseId).toBe('fontaneria-hidraulica');
      expect(sim.activeModuleNumber).toBe(1);
    });

    it('evaluación global y persistencia cuando los 120 reactivos son respondidos simultáneamente', () => {
      const sim = new QuizSimulatorHarness();
      const allQ = getAllQuestions();
      expect(allQ.length).toBeGreaterThanOrEqual(120);

      // Responder los 120 reactivos: la mitad correctos, la mitad incorrectos
      allQ.forEach(({ question: q }, idx) => {
        if (idx % 2 === 0) {
          sim.selectOption(q.id, q.correctAnswer as any);
        } else {
          const wrongKey = (['A', 'B', 'C', 'D'] as const).find((k) => k !== q.correctAnswer)!;
          sim.selectOption(q.id, wrongKey);
        }
      });

      // Ahora iterar por cada uno de los 10 cursos y 40 módulos
      TECHNICAL_COURSES.forEach((course) => {
        sim.selectCourse(course.id);
        course.modules.forEach((mod) => {
          sim.setActiveModule(mod.number);
          const qList = sim.getModuleQuestions();

          let expectedCorrect = 0;
          qList.forEach((q) => {
            const globalIdx = allQ.findIndex((item) => item.question.id === q.id);
            if (globalIdx % 2 === 0) expectedCorrect++;
          });

          // Cada módulo debe reflejar exactamente sus preguntas respondidas y aciertos sin interferencias
          expect(sim.getAnsweredCount()).toBe(qList.length);
          expect(sim.getCorrectCount()).toBe(expectedCorrect);
        });
      });
    });

    it('ejecución de reset sobre módulo sin respuestas es una operación segura (no-op)', () => {
      const sim = new QuizSimulatorHarness();
      sim.selectCourse('agricultura-pequena');
      sim.setActiveModule(3);

      expect(sim.getAnsweredCount()).toBe(0);
      expect(sim.getCorrectCount()).toBe(0);

      // Ejecutar reset en estado vacío
      sim.resetCurrentModuleQuiz();
      expect(sim.getAnsweredCount()).toBe(0);
      expect(sim.getCorrectCount()).toBe(0);
    });

    it('resiliencia ante módulo inválido: fallback seguro a módulo 1 sin excepción', () => {
      const sim = new QuizSimulatorHarness();
      sim.selectCourse('electronica');
      sim.setActiveModule(999); // Inválido

      const fallbackModule = sim.getActiveModule();
      expect(fallbackModule).toBeDefined();
      expect(fallbackModule.number).toBe(1);
      expect(sim.getModuleQuestions().length).toBeGreaterThanOrEqual(3);
    });

    it('distribución equilibrada de claves de respuesta correcta en las 120 preguntas (A, B, C, D)', () => {
      const allQ = getAllQuestions();
      const keyCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

      allQ.forEach(({ question: q }) => {
        keyCounts[q.correctAnswer] = (keyCounts[q.correctAnswer] || 0) + 1;
      });

      // Todas las claves A, B, C, D deben estar representadas con al menos 10 preguntas
      ['A', 'B', 'C', 'D'].forEach((key) => {
        const count = keyCounts[key];
        const ratio = count / allQ.length;
        expect(
          count,
          `Clave ${key} subrepresentada con menos de 10 preguntas: ${count}/${allQ.length}`
        ).toBeGreaterThanOrEqual(10);
        expect(
          ratio,
          `Distribución monopolizada para clave ${key}: ${count}/${allQ.length} (${(ratio * 100).toFixed(1)}%)`
        ).toBeLessThanOrEqual(0.50);
      });
    });

    it('ausencia de etiquetas script u objetos maliciosos en reactivos y opciones', () => {
      const allQ = getAllQuestions();
      const dangerousPatterns = [/<script/i, /javascript:/i, /onerror=/i, /onload=/i];

      allQ.forEach(({ question: q }) => {
        const raw = JSON.stringify(q);
        dangerousPatterns.forEach((p) => {
          expect(raw, `Patrón peligroso ${p} detectado en reactivo ${q.id}`).not.toMatch(p);
        });
      });
    });
  });

  // =========================================================================
  // SECTION 4: STATIC RENDERING COMPONENT STRESS TEST
  // =========================================================================
  describe('4. Component Static Markup Render Stress Test', () => {
    it('renderToStaticMarkup de TechnicalCoursesView renderiza sin errores y contiene el catálogo', () => {
      const html = renderToStaticMarkup(React.createElement(TechnicalCoursesView));
      expect(html).toBeDefined();
      expect(html.length).toBeGreaterThan(1000);

      // Verificar elementos esenciales en el HTML generado
      expect(html).toContain('Catálogo Maestro de Cursos Técnicos Vocacionales');
      expect(html).toContain('400 Horas Teóricas Totales');
      expect(html).toContain('INCAF (D.L. 896)');
      expect(html).toContain('Simulador');
      expect(html).toContain('Módulo 1');
      expect(html).toContain('Fórmulas');
      expect(html).toContain('Ohm');
    });
  });
});
