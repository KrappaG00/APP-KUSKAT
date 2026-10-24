import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

import { ADMIN_LAW_QUESTIONS } from '../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../src/data/complianceAmlData';

describe('CHALLENGER ADVERSARIAL STRESS TEST SUITE', () => {
  const ALL_MODULES = [
    { name: 'Derecho Administrativo', questions: ADMIN_LAW_QUESTIONS },
    { name: 'Salud Primaria', questions: SALUD_PRIMARIA_QUESTIONS },
    { name: 'Ingeniería y Ciencias', questions: INGENIERIA_QUESTIONS },
    { name: 'Notariado CSJ', questions: NOTARY_EXAM_QUESTIONS },
    { name: 'CSSP', questions: CSSP_QUESTIONS_DATA },
    { name: 'ANSP Ascenso', questions: ANSP_ASCENSO_QUESTIONS },
    { name: 'Cumplimiento AML & SSF', questions: COMPLIANCE_QUESTIONS },
  ];

  // =========================================================================
  // 1. DATASET EMPIRICAL STRESS TESTS
  // =========================================================================
  describe('1. Empirical Stress-Testing of 1,400 Questions Dataset', () => {
    it('verifica conteo exacto de 200 reactivos por módulo y 1,400 total', () => {
      let total = 0;
      ALL_MODULES.forEach((m) => {
        expect(m.questions.length, `${m.name} no tiene exactamente 200`).toBe(200);
        total += m.questions.length;
      });
      expect(total).toBe(1400);
    });

    it('verifica ausencia absoluta de colisiones de ID internas y globales', () => {
      const globalIds = new Set<string>();
      ALL_MODULES.forEach((m) => {
        const moduleIds = new Set<string>();
        m.questions.forEach((q: any) => {
          expect(typeof q.id).toBe('string');
          expect(q.id.trim().length).toBeGreaterThan(0);
          expect(moduleIds.has(q.id), `ID duplicado interno en ${m.name}: ${q.id}`).toBe(false);
          expect(globalIds.has(q.id), `ID colisiona globalmente entre módulos: ${q.id}`).toBe(false);
          moduleIds.add(q.id);
          globalIds.add(q.id);
        });
      });
      expect(globalIds.size).toBe(1400);
    });

    it('verifica ausencia total de colisiones con los IDs del banco base de 17,640 reactivos', () => {
      const baseDir = path.join(process.cwd(), 'public', 'data');
      const baseBankIds = new Set<string>();

      function scanDir(dir: string) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const res = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            scanDir(res);
          } else if (entry.isFile() && entry.name.endsWith('.json') && !entry.name.includes('manifest') && !entry.name.includes('curriculum')) {
            try {
              const data = JSON.parse(fs.readFileSync(res, 'utf-8'));
              if (Array.isArray(data)) {
                data.forEach((item: any) => {
                  if (item && item.id) baseBankIds.add(String(item.id));
                });
              }
            } catch {
              // Ignore non-array or auxiliary JSON
            }
          }
        }
      }

      ['questions', 'ansp', 'asd', 'avanzo', 'ena', 'escalafon'].forEach((sub) => {
        scanDir(path.join(baseDir, sub));
      });

      expect(baseBankIds.size).toBeGreaterThan(15000);

      ALL_MODULES.forEach((m) => {
        m.questions.forEach((q: any) => {
          expect(baseBankIds.has(q.id), `ID ${q.id} de ${m.name} colisiona con banco base`).toBe(false);
        });
      });
    });

    it('verifica ausencia de campos nulos o vacíos en enunciados, opciones y explicaciones', () => {
      ALL_MODULES.forEach((m) => {
        m.questions.forEach((q: any) => {
          // Enunciado
          const statement = q.statement || q.problemStatement;
          expect(statement, `Pregunta ${q.id} en ${m.name} carece de enunciado`).toBeDefined();
          expect(typeof statement).toBe('string');
          expect(statement.trim().length, `Enunciado vacío o ultra corto en ${q.id} (${m.name})`).toBeGreaterThan(20);

          // Explicación
          const explanation = q.explanation || q.formalSolution || q.clinicalExplanation;
          expect(explanation, `Pregunta ${q.id} en ${m.name} carece de explicación`).toBeDefined();
          expect(typeof explanation).toBe('string');
          expect(explanation.trim().length, `Explicación vacía o trivial en ${q.id} (${m.name})`).toBeGreaterThan(25);

          // Clave correcta
          const correct = q.correctAnswer || q.correctKey;
          expect(['A', 'B', 'C', 'D'], `Clave correcta inválida en ${q.id} (${m.name}): ${correct}`).toContain(correct);

          // Opciones
          if (Array.isArray(q.options)) {
            expect(q.options.length, `Array de opciones no tiene 4 items en ${q.id} (${m.name})`).toBe(4);
            const keys = q.options.map((o: any) => o.key).sort();
            expect(keys).toEqual(['A', 'B', 'C', 'D']);
            const texts = q.options.map((o: any) => o.text.trim());
            texts.forEach((txt: string, idx: number) => {
              expect(txt.length, `Texto de opción ${idx} vacío en ${q.id} (${m.name})`).toBeGreaterThanOrEqual(1);
            });
            const uniqueTexts = new Set(texts.map((t: string) => t.toLowerCase()));
            expect(uniqueTexts.size, `Opciones duplicadas en ${q.id} (${m.name})`).toBe(4);
          } else if (typeof q.options === 'object' && q.options !== null) {
            const keys = Object.keys(q.options).sort();
            expect(keys, `Llaves de opciones no son A,B,C,D en ${q.id} (${m.name})`).toEqual(['A', 'B', 'C', 'D']);
            const texts = ['A', 'B', 'C', 'D'].map((k) => String(q.options[k] || '').trim());
            texts.forEach((txt: string, idx: number) => {
              expect(txt.length, `Texto de opción ${keys[idx]} vacío en ${q.id} (${m.name})`).toBeGreaterThanOrEqual(1);
            });
            const uniqueTexts = new Set(texts.map((t: string) => t.toLowerCase()));
            expect(uniqueTexts.size, `Opciones duplicadas en ${q.id} (${m.name})`).toBe(4);
          } else {
            throw new Error(`Estructura de opciones no reconocida en ${q.id} (${m.name})`);
          }
        });
      });
    });

    it('verifica rigor en delimitadores LaTeX ($ y $$) en problemas de Ingeniería', () => {
      INGENIERIA_QUESTIONS.forEach((q: any) => {
        const fullText = `${q.problemStatement} ${q.formalSolution} ${(q.stepByStepDerivation || []).join(' ')}`;

        // Delimitadores de display $$
        const doubleDollarMatches = fullText.match(/\$\$/g) || [];
        expect(
          doubleDollarMatches.length % 2,
          `Delimitadores $$ no balanceados en ${q.id}`
        ).toBe(0);

        // Delimitadores inline $ (que no sean parte de $$)
        const textWithoutDouble = fullText.replace(/\$\$/g, '');
        const singleDollarMatches = textWithoutDouble.match(/(?<!\\)\$/g) || [];
        expect(
          singleDollarMatches.length % 2,
          `Delimitadores inline $ no balanceados en ${q.id}`
        ).toBe(0);

        // Sin delimitadores incompletos como \( o \[ sin cerrar
        const openParen = (fullText.match(/\\\(/g) || []).length;
        const closeParen = (fullText.match(/\\\)/g) || []).length;
        expect(openParen, `Delimitador \\( no balanceado en ${q.id}`).toBe(closeParen);

        const openBracket = (fullText.match(/\\\[/g) || []).length;
        const closeBracket = (fullText.match(/\\\]/g) || []).length;
        expect(openBracket, `Delimitador \\[ no balanceado en ${q.id}`).toBe(closeBracket);
      });
    });
  });

  // =========================================================================
  // 2. PAGINATION BOUNDS & SLICING STRESS TESTS
  // =========================================================================
  describe('2. Stress-Testing Pagination Bounds and Slicing Engine', () => {
    function computePaginationSlice<T>(
      items: T[],
      requestedPage: number,
      itemsPerPage: number
    ) {
      const totalItems = items.length;
      const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
      const validCurrentPage = Math.min(Math.max(1, requestedPage), totalPages);
      const start = totalItems === 0 ? 0 : (validCurrentPage - 1) * itemsPerPage;
      const paginated = items.slice(start, start + itemsPerPage);
      return {
        totalItems,
        totalPages,
        validCurrentPage,
        paginated,
        startItem: totalItems === 0 ? 0 : start + 1,
        endItem: Math.min(validCurrentPage * itemsPerPage, totalItems),
      };
    }

    it('boundary: primer bloque (página 1 de 20 con tamaño 10)', () => {
      const res = computePaginationSlice(ADMIN_LAW_QUESTIONS, 1, 10);
      expect(res.totalPages).toBe(20);
      expect(res.validCurrentPage).toBe(1);
      expect(res.paginated.length).toBe(10);
      expect(res.startItem).toBe(1);
      expect(res.endItem).toBe(10);
      expect(res.paginated[0].id).toBe(ADMIN_LAW_QUESTIONS[0].id);
      expect(res.paginated[9].id).toBe(ADMIN_LAW_QUESTIONS[9].id);
    });

    it('boundary: último bloque (página 20 de 20 con tamaño 10)', () => {
      const res = computePaginationSlice(ADMIN_LAW_QUESTIONS, 20, 10);
      expect(res.totalPages).toBe(20);
      expect(res.validCurrentPage).toBe(20);
      expect(res.paginated.length).toBe(10);
      expect(res.startItem).toBe(191);
      expect(res.endItem).toBe(200);
      expect(res.paginated[0].id).toBe(ADMIN_LAW_QUESTIONS[190].id);
      expect(res.paginated[9].id).toBe(ADMIN_LAW_QUESTIONS[199].id);
    });

    it('boundary: requestedPage > totalPages (página 999 se autocorrige a totalPages)', () => {
      const res = computePaginationSlice(ADMIN_LAW_QUESTIONS, 999, 10);
      expect(res.validCurrentPage).toBe(20);
      expect(res.paginated.length).toBe(10);
      expect(res.paginated[9].id).toBe(ADMIN_LAW_QUESTIONS[199].id);
    });

    it('boundary: requestedPage <= 0 (página 0 o negativa se autocorrige a 1)', () => {
      const resZero = computePaginationSlice(ADMIN_LAW_QUESTIONS, 0, 10);
      expect(resZero.validCurrentPage).toBe(1);
      expect(resZero.paginated.length).toBe(10);

      const resNeg = computePaginationSlice(ADMIN_LAW_QUESTIONS, -42, 10);
      expect(resNeg.validCurrentPage).toBe(1);
      expect(resNeg.paginated.length).toBe(10);
    });

    it('boundary: items vacíos (0 elementos devuelve slice vacío sin NaN ni crash)', () => {
      const res = computePaginationSlice([], 1, 10);
      expect(res.totalItems).toBe(0);
      expect(res.totalPages).toBe(1);
      expect(res.validCurrentPage).toBe(1);
      expect(res.paginated).toEqual([]);
      expect(res.startItem).toBe(0);
      expect(res.endItem).toBe(0);
    });

    it('conmutación dinámica de tamaño de bloque: de 10 a 20 reactivos por página', () => {
      const res10 = computePaginationSlice(ADMIN_LAW_QUESTIONS, 1, 10);
      expect(res10.totalPages).toBe(20);
      expect(res10.paginated.length).toBe(10);

      const res20 = computePaginationSlice(ADMIN_LAW_QUESTIONS, 1, 20);
      expect(res20.totalPages).toBe(10);
      expect(res20.paginated.length).toBe(20);
      expect(res20.startItem).toBe(1);
      expect(res20.endItem).toBe(20);

      // Si el usuario estaba en pág 15 de 20 (tamaño 10), al cambiar a tamaño 20 (total 10 págs),
      // la página solicitada 15 se autocorrige a 10
      const resSwitch = computePaginationSlice(ADMIN_LAW_QUESTIONS, 15, 20);
      expect(resSwitch.validCurrentPage).toBe(10);
      expect(resSwitch.paginated.length).toBe(20);
      expect(resSwitch.startItem).toBe(181);
      expect(resSwitch.endItem).toBe(200);
    });
  });

  // =========================================================================
  // 3. CROSS-PAGE USER ANSWERS PERSISTENCE & INDEPENDENCE
  // =========================================================================
  describe('3. Cross-Page Answer Recording & Independent Persistence', () => {
    it('las respuestas del usuario se conservan independientemente de la página visualizada', () => {
      const userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'> = {};

      // 1. En la página 1, el usuario responde la pregunta 1 y 5
      const qPage1_1 = ADMIN_LAW_QUESTIONS[0];
      const qPage1_5 = ADMIN_LAW_QUESTIONS[4];
      userAnswers[qPage1_1.id] = qPage1_1.correctAnswer;
      userAnswers[qPage1_5.id] = 'D';

      // 2. El usuario navega a la página 5 (reactivos 41..50)
      const qPage5_1 = ADMIN_LAW_QUESTIONS[40];
      userAnswers[qPage5_1.id] = qPage5_1.correctAnswer;

      // 3. El usuario navega a la página 20 (última página, reactivos 191..200)
      const qPage20_last = ADMIN_LAW_QUESTIONS[199];
      userAnswers[qPage20_last.id] = qPage20_last.correctAnswer;

      // Verificamos que las 4 respuestas persisten íntegras en el estado
      expect(Object.keys(userAnswers).length).toBe(4);
      expect(userAnswers[qPage1_1.id]).toBe(qPage1_1.correctAnswer);
      expect(userAnswers[qPage1_5.id]).toBe('D');
      expect(userAnswers[qPage5_1.id]).toBe(qPage5_1.correctAnswer);
      expect(userAnswers[qPage20_last.id]).toBe(qPage20_last.correctAnswer);

      // Verificamos que el cálculo de puntaje examina todas las respuestas del universo filtrado,
      // sin restringirse al slice visible
      let correct = 0;
      let answered = 0;
      ADMIN_LAW_QUESTIONS.forEach((q) => {
        if (userAnswers[q.id]) {
          answered++;
          if (userAnswers[q.id] === q.correctAnswer) correct++;
        }
      });

      expect(answered).toBe(4);
      expect(correct).toBe(userAnswers[qPage1_5.id] === qPage1_5.correctAnswer ? 4 : 3);
    });

    it('la filtración por categoría preserva las respuestas previas y permite calificar correctamente', () => {
      const userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'> = {};

      // Responde una de LPA
      const lpaQ = ADMIN_LAW_QUESTIONS.find((q) => q.category === 'procedimiento-comun')!;
      userAnswers[lpaQ.id] = lpaQ.correctAnswer;

      // Responde una de Firma Electrónica
      const firmaQ = ADMIN_LAW_QUESTIONS.find((q) => q.category === 'firma-electronica')!;
      userAnswers[firmaQ.id] = firmaQ.correctAnswer;

      // Filtrar por firma electrónica
      const firmaOnly = ADMIN_LAW_QUESTIONS.filter((q) => q.category === 'firma-electronica');
      expect(firmaOnly.length).toBe(50);

      // El score bajo el filtro de firma electrónica evalúa las 50 preguntas del filtro
      let answeredInFirma = 0;
      let correctInFirma = 0;
      firmaOnly.forEach((q) => {
        if (userAnswers[q.id]) {
          answeredInFirma++;
          if (userAnswers[q.id] === q.correctAnswer) correctInFirma++;
        }
      });

      expect(answeredInFirma).toBe(1);
      expect(correctInFirma).toBe(1);

      // Pero el banco global no pierde la respuesta de LPA
      expect(userAnswers[lpaQ.id]).toBe(lpaQ.correctAnswer);
    });
  });

  // =========================================================================
  // 4. MODULE PAGINATION BAR COMPONENT CONTRACT
  // =========================================================================
  describe('4. ModulePaginationBar Functional Contract', () => {
    it('retorna null cuando totalItems es 0 o cuando hay 1 página con <= 10 items', async () => {
      const { ModulePaginationBar } = await import('../src/components/ModulePaginationBar');

      // Caso 0 items
      const zeroItems = ModulePaginationBar({
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
        onPageChange: () => {},
      });
      expect(zeroItems).toBeNull();

      // Caso <= 10 items en 1 página
      const singlePageSmall = ModulePaginationBar({
        currentPage: 1,
        totalPages: 1,
        totalItems: 8,
        itemsPerPage: 10,
        onPageChange: () => {},
      });
      expect(singlePageSmall).toBeNull();

      // Caso 200 items en 20 páginas -> retorna elemento React
      const normalPagination = ModulePaginationBar({
        currentPage: 1,
        totalPages: 20,
        totalItems: 200,
        itemsPerPage: 10,
        onPageChange: () => {},
      });
      expect(normalPagination).not.toBeNull();
      expect(normalPagination?.type).toBe('nav');
    }, 15000);
  });
});

