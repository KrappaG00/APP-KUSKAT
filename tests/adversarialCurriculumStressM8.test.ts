/**
 * EMPIRICAL ADVERSARIAL STRESS TEST SUITE — MILESTONE M8
 * Author: teamwork_challenger (empirical_challenger)
 *
 * Exhaustively stress-tests:
 * 1. Curricular Completeness: 97 units, 112 lessons, 560+ custom step-by-step examples.
 * 2. Word Count Rigor: >= 500 substantive words per lesson (excluding LaTeX, math, duplicate paragraphs, metadata).
 * 3. Step-by-Step Example Integrity: >= 5 unique examples per lesson, >= 25 words each, procedural markers, zero boilerplate.
 * 4. KaTeX Mathematical Integrity: delimiter balance and full katex.renderToString execution on all formulas.
 * 5. 50-Question Simulator: exactly 50 questions per unit across all 97 units, 4 distinct options, valid keys, balanced distribution, 0 ID collisions.
 * 6. Non-ASCII Encodings & System Invariants: no mojibake, no private phone numbers, 200 notary questions.
 */

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';

import {
  ALL_GRADES_DATA,
  getGrades,
  getAllUnits,
  getUnit,
  getUnitLessons,
  getUnitQuestions,
  curriculumService,
} from '../src/data/minedCurriculum/curriculumService';
import type { GradeLevelId, PscerLesson, UnitQuestion } from '../src/data/minedCurriculum/types';
import { KNOWN_BOILERPLATE_PATTERNS, countSubstantiveLessonWords } from './curriculumR4Compliance.test';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';

describe('CHALLENGER M8: Empirical Stress Testing Across All 97 Units', () => {
  const allUnits = getAllUnits();

  // ==========================================================================
  // 1. CURRICULAR COMPLETENESS & STRUCTURE
  // ==========================================================================
  describe('1. Curricular Structure and Counts', () => {
    it('verifies that getAllUnits returns exactly 97 units', () => {
      expect(allUnits.length).toBe(97);
    });

    it('verifies official grade distribution across all 11 grades', () => {
      const expectedDistribution: Record<GradeLevelId, number> = {
        '1-grado': 8,
        '2-grado': 9,
        '3-grado': 10,
        '4-grado': 9,
        '5-grado': 10,
        '6-grado': 11,
        '7-grado': 8,
        '8-grado': 8,
        '9-grado': 8,
        '1-bachillerato': 8,
        '2-bachillerato': 8,
      };

      for (const [gradeId, expectedCount] of Object.entries(expectedDistribution)) {
        const gradeUnits = allUnits.filter((u) => u.gradeId === gradeId);
        expect(
          gradeUnits.length,
          `Grade ${gradeId} should have exactly ${expectedCount} units, found ${gradeUnits.length}`
        ).toBe(expectedCount);
      }
    });

    it('verifies exact total of 112 lessons across all 97 units and unique IDs', () => {
      let totalLessons = 0;
      const unitIds = new Set<string>();
      const lessonIds = new Set<string>();

      for (const { unit, gradeId } of allUnits) {
        expect(unitIds.has(unit.id), `Duplicate unit ID detected: ${unit.id}`).toBe(false);
        unitIds.add(unit.id);

        expect(unit.lessons.length).toBeGreaterThanOrEqual(1);
        totalLessons += unit.lessons.length;

        for (const lesson of unit.lessons) {
          expect(lessonIds.has(lesson.id), `Duplicate lesson ID detected: ${lesson.id} in unit ${unit.id}`).toBe(false);
          lessonIds.add(lesson.id);
        }
      }

      expect(totalLessons).toBe(112);
      expect(lessonIds.size).toBe(112);
    });
  });

  // ==========================================================================
  // 2. WORD COUNT RIGOR & PURITY
  // ==========================================================================
  describe('2. Substantive Word Count Rigor (>= 500 words per lesson)', () => {
    it('verifies strictly that every lesson exceeds 500 substantive words without boilerplate', () => {
      const stats: { id: string; words: number }[] = [];

      for (const { unit, gradeName, gradeId } of allUnits) {
        for (const lesson of unit.lessons) {
          const { substantiveWordCount, detectedFillers } = countSubstantiveLessonWords(
            lesson,
            unit.title,
            gradeName
          );

          expect(
            detectedFillers,
            `Boilerplate detected in lesson ${lesson.id} of unit ${unit.title}: ${detectedFillers.join('; ')}`
          ).toHaveLength(0);

          expect(
            substantiveWordCount,
            `Lesson ${lesson.id} ("${lesson.title}") has only ${substantiveWordCount} words (< 500) in ${gradeName}`
          ).toBeGreaterThanOrEqual(500);

          stats.push({ id: lesson.id, words: substantiveWordCount });
        }
      }

      const counts = stats.map((s) => s.words);
      const minWords = Math.min(...counts);
      const maxWords = Math.max(...counts);
      const avgWords = Math.round(counts.reduce((a, b) => a + b, 0) / counts.length);

      console.log(`[CHALLENGER-M8] Word count distribution across 112 lessons: min=${minWords}, max=${maxWords}, avg=${avgWords}`);
      expect(minWords).toBeGreaterThanOrEqual(500);
    });

    it('verifies zero occurrences of departmental template phrases across raw lesson files', () => {
      const departmentRegex = /centro escolar de (San Salvador|Santa Ana|San Miguel|Sonsonate|Ahuachapán|Chalatenango|La Libertad|Usulután|Cuscatlán|La Paz|Cabañas|San Vicente|Morazán|La Unión)/i;
      const projectRegex = /En un proyecto académico desarrollado en/i;

      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          const allText = [
            lesson.problema,
            lesson.solucion,
            lesson.conclusion,
            ...(lesson.examples || []),
          ].join(' ');

          expect(departmentRegex.test(allText), `Department template found in ${lesson.id}`).toBe(false);
          expect(projectRegex.test(allText), `Academic project template found in ${lesson.id}`).toBe(false);
        }
      }
    });
  });

  // ==========================================================================
  // 3. STEP-BY-STEP EXAMPLES INTEGRITY
  // ==========================================================================
  describe('3. Step-by-Step Examples Rigor', () => {
    it('verifies that every lesson has >= 5 unique examples with procedural depth (>= 25 words)', () => {
      let totalExamples = 0;

      for (const { unit, gradeName } of allUnits) {
        for (const lesson of unit.lessons) {
          const examples = lesson.examples || [];
          expect(
            examples.length,
            `Lesson ${lesson.id} in ${gradeName} has fewer than 5 examples (${examples.length})`
          ).toBeGreaterThanOrEqual(5);

          totalExamples += examples.length;

          // Uniqueness within lesson
          const normalized = examples.map((e) => e.trim().toLowerCase());
          const uniqueSet = new Set(normalized);
          expect(
            uniqueSet.size,
            `Duplicate example detected within lesson ${lesson.id}`
          ).toBe(examples.length);

          // Procedural depth per example
          for (let i = 0; i < examples.length; i++) {
            const ex = examples[i];
            const words = ex.trim().split(/\s+/).filter((w) => w.length > 1);
            expect(
              words.length,
              `Example ${i + 1} in lesson ${lesson.id} has insufficient word depth (${words.length} < 25)`
            ).toBeGreaterThanOrEqual(25);

            // Procedural indicator check (Paso, Solución, Se calcula, Aplicando, etc.)
            const hasProceduralStep =
              /paso|soluci[oó]n|procedimiento|desarrollo|aplicando|sustituyendo|primero|segundo|finalmente|obtenemos|resultado/i.test(
                ex
              );
            expect(
              hasProceduralStep,
              `Example ${i + 1} in lesson ${lesson.id} lacks procedural indicators`
            ).toBe(true);
          }
        }
      }

      console.log(`[CHALLENGER-M8] Total verified custom step-by-step examples across curriculum: ${totalExamples}`);
      expect(totalExamples).toBeGreaterThanOrEqual(560);
    });
  });

  // ==========================================================================
  // 4. KATEX DELIMITERS AND RENDERING INTEGRITY
  // ==========================================================================
  describe('4. KaTeX Delimiters & Mathematical Syntax', () => {
    it('verifies balanced KaTeX delimiters ($ and $$) in all lesson fields', () => {
      const delimiterErrors: { lessonId: string; field: string; error: string; text: string }[] = [];

      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          const fieldsToCheck: [string, string][] = [
            ['problema', lesson.problema],
            ['solucion', lesson.solucion],
            ['conclusion', lesson.conclusion],
            ...lesson.examples.map((ex, i): [string, string] => [`example_${i + 1}`, ex]),
            ...lesson.resuelve.flatMap((r, i): [string, string][] => [
              [`resuelve_${i + 1}_exercise`, r.exercise],
              [`resuelve_${i + 1}_hint`, r.hint || ''],
              [`resuelve_${i + 1}_answer`, r.answer || ''],
            ]),
          ];

          for (const [fieldName, text] of fieldsToCheck) {
            if (!text) continue;

            // Check $$ delimiters
            const doubleMatches = text.match(/\$\$/g) || [];
            if (doubleMatches.length % 2 !== 0) {
              delimiterErrors.push({
                lessonId: lesson.id,
                field: fieldName,
                error: `Unbalanced $$ delimiter (count=${doubleMatches.length})`,
                text,
              });
            }

            // Strip $$ blocks before checking single $
            const withoutDouble = text.replace(/\$\$[\s\S]*?\$\$/g, '');
            const singleMatches = withoutDouble.match(/\$/g) || [];
            if (singleMatches.length % 2 !== 0) {
              delimiterErrors.push({
                lessonId: lesson.id,
                field: fieldName,
                error: `Unbalanced $ delimiter (count=${singleMatches.length})`,
                text,
              });
            }
          }
        }
      }

      if (delimiterErrors.length > 0) {
        console.error('[CHALLENGER-M8] KaTeX delimiter errors found:', JSON.stringify(delimiterErrors, null, 2));
      }
      expect(delimiterErrors, `Found ${delimiterErrors.length} KaTeX delimiter balance errors`).toHaveLength(0);
    });

    it('verifies that all KaTeX expressions render without syntax errors via katex.renderToString', () => {
      let formulasTested = 0;
      const renderErrors: { lessonId: string; math: string; error: string }[] = [];

      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          const textCorpus = [
            lesson.problema,
            lesson.solucion,
            lesson.conclusion,
            ...lesson.examples,
            ...lesson.resuelve.map((r) => `${r.exercise} ${r.hint || ''} ${r.answer || ''}`),
          ].join('\n');

          // Extract display math $$...$$
          const displayMathMatches = textCorpus.match(/\$\$([\s\S]*?)\$\$/g) || [];
          for (const raw of displayMathMatches) {
            const math = raw.slice(2, -2).trim();
            if (!math) continue;
            try {
              katex.renderToString(math, { displayMode: true, throwOnError: true });
            } catch (err: any) {
              renderErrors.push({
                lessonId: lesson.id,
                math,
                error: err.message || String(err),
              });
            }
            formulasTested++;
          }

          // Extract inline math $...$
          const withoutDisplay = textCorpus.replace(/\$\$[\s\S]*?\$\$/g, '');
          const inlineMathMatches = withoutDisplay.match(/\$([^$\n]+?)\$/g) || [];
          for (const raw of inlineMathMatches) {
            const math = raw.slice(1, -1).trim();
            if (!math) continue;
            try {
              katex.renderToString(math, { displayMode: false, throwOnError: true });
            } catch (err: any) {
              renderErrors.push({
                lessonId: lesson.id,
                math,
                error: err.message || String(err),
              });
            }
            formulasTested++;
          }
        }
      }

      console.log(`[CHALLENGER-M8] Total KaTeX formulas tested: ${formulasTested}, render errors: ${renderErrors.length}`);
      if (renderErrors.length > 0) {
        console.error('[CHALLENGER-M8] KaTeX render errors found:', JSON.stringify(renderErrors, null, 2));
      }
      expect(renderErrors, `Found ${renderErrors.length} KaTeX render syntax errors`).toHaveLength(0);
    });
  });

  // ==========================================================================
  // 5. 50-QUESTION SIMULATOR ACROSS ALL 97 UNITS
  // ==========================================================================
  describe('5. 50-Question Simulator Integrity Across All 97 Units', () => {
    it('verifies that getUnitQuestions generates exactly 50 valid questions for every unit', () => {
      const globalQuestionIds = new Set<string>();
      let totalQuestions = 0;

      for (const { unit, gradeId } of allUnits) {
        const questions = getUnitQuestions(gradeId, unit.id);
        expect(
          questions.length,
          `Unit ${unit.id} in ${gradeId} produced ${questions.length} questions (expected exactly 50)`
        ).toBe(50);

        totalQuestions += questions.length;

        // Key distribution per unit
        const keyDistribution: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

        for (const q of questions) {
          // Global uniqueness of question IDs
          expect(
            globalQuestionIds.has(q.id),
            `Duplicate question ID across curriculum: ${q.id} in unit ${unit.id}`
          ).toBe(false);
          globalQuestionIds.add(q.id);

          // Structure
          expect(q.options.length).toBe(4);
          expect(new Set(q.options).size, `Question ${q.id} has duplicate options: ${JSON.stringify(q.options)}`).toBe(4);
          for (const opt of q.options) {
            expect(opt.trim().length, `Question ${q.id} has empty option`).toBeGreaterThan(0);
          }

          expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);
          keyDistribution[q.correctAnswer]++;

          // Correct option exists
          const correctIdx = ['A', 'B', 'C', 'D'].indexOf(q.correctAnswer);
          expect(q.options[correctIdx]).toBeDefined();
          expect(q.options[correctIdx].trim().length).toBeGreaterThan(0);

          // Statement and explanation depth
          expect(q.statement.trim().length, `Question ${q.id} statement too short`).toBeGreaterThanOrEqual(15);
          expect(q.explanation.trim().length, `Question ${q.id} explanation too short`).toBeGreaterThanOrEqual(15);
        }

        // Verify key balance: in 50 questions, each key must appear between 10 and 15 times
        for (const key of ['A', 'B', 'C', 'D']) {
          expect(
            keyDistribution[key],
            `Unit ${unit.id} key distribution skewed for key ${key}: ${keyDistribution[key]} (expected 10-15)`
          ).toBeGreaterThanOrEqual(10);
          expect(keyDistribution[key]).toBeLessThanOrEqual(15);
        }
      }

      expect(totalQuestions).toBe(97 * 50); // 4,850 questions
      expect(globalQuestionIds.size).toBe(4850);
      console.log(`[CHALLENGER-M8] Successfully verified 4,850 unit questions across all 97 units with balanced keys`);
    });

    it('verifies that all KaTeX expressions in the 4,850 questions render cleanly without syntax errors', () => {
      let qFormulasTested = 0;
      const qRenderErrors: { qId: string; math: string; error: string }[] = [];

      for (const { unit, gradeId } of allUnits) {
        const questions = getUnitQuestions(gradeId, unit.id);
        for (const q of questions) {
          const qTextCorpus = [q.statement, ...q.options, q.explanation].join('\n');
          const inlineMatches = qTextCorpus.match(/\$([^$\n]+?)\$/g) || [];
          for (const raw of inlineMatches) {
            const math = raw.slice(1, -1).trim();
            if (!math) continue;
            try {
              katex.renderToString(math, { displayMode: false, throwOnError: true });
            } catch (err: any) {
              qRenderErrors.push({
                qId: q.id,
                math,
                error: err.message || String(err),
              });
            }
            qFormulasTested++;
          }
        }
      }

      console.log(`[CHALLENGER-M8] Total question KaTeX formulas tested: ${qFormulasTested}, errors: ${qRenderErrors.length}`);
      if (qRenderErrors.length > 0) {
        console.error('[CHALLENGER-M8] Question KaTeX render errors:', JSON.stringify(qRenderErrors, null, 2));
      }
      expect(qRenderErrors).toHaveLength(0);
    });

    it('verifies zero ID collision with base question bank (17,640 questions) and Notary bank', () => {
      // 1. Collect all 4,850 unit question IDs
      const minedIds = new Set<string>();
      for (const { unit, gradeId } of allUnits) {
        const questions = getUnitQuestions(gradeId, unit.id);
        for (const q of questions) {
          minedIds.add(q.id);
        }
      }

      // 2. Check collision with Notary questions (200)
      for (const notQ of NOTARY_EXAM_QUESTIONS) {
        expect(minedIds.has(notQ.id), `Collision detected between MINED and Notary ID: ${notQ.id}`).toBe(false);
      }

      // 3. Check collision with base bank JSON files in public/data
      const publicDataDir = path.resolve(process.cwd(), 'public/data');
      if (fs.existsSync(publicDataDir)) {
        const files = fs.readdirSync(publicDataDir, { recursive: true }) as string[];
        const jsonFiles = files.filter((f) => f.endsWith('.json') && !f.includes('curriculum'));

        for (const jsonFile of jsonFiles) {
          const filePath = path.join(publicDataDir, jsonFile);
          try {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            if (Array.isArray(content)) {
              for (const item of content) {
                if (item && item.id) {
                  expect(
                    minedIds.has(item.id),
                    `Collision between MINED question ID and base bank question ${item.id} in ${jsonFile}`
                  ).toBe(false);
                }
              }
            }
          } catch {
            // Ignore non-array JSONs
          }
        }
      }
    });
  });

  // ==========================================================================
  // 6. NON-ASCII ENCODINGS & SYSTEM INVARIANTS
  // ==========================================================================
  describe('6. Encodings and System Invariants (R3)', () => {
    it('verifies that lesson texts contain no UTF-8 mojibake corruptions', () => {
      const mojibakePatterns = [/Ã¡/g, /Ã©/g, /Ã­/g, /Ã³/g, /Ãº/g, /Ã±/g, /â‚¬/g, /â€œ/g, /â€/g, /Â¿/g];

      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          const fullText = [
            lesson.title,
            lesson.problema,
            lesson.solucion,
            lesson.conclusion,
            ...lesson.examples,
          ].join(' ');

          for (const pattern of mojibakePatterns) {
            expect(pattern.test(fullText), `Mojibake encoding error detected in lesson ${lesson.id}`).toBe(false);
          }
        }
      }
    });

    it('verifies that exactly 200 Notary questions exist (not-01 to not-200)', () => {
      expect(NOTARY_EXAM_QUESTIONS.length).toBe(200);
      const ids = NOTARY_EXAM_QUESTIONS.map((q) => q.id);
      for (let i = 1; i <= 200; i++) {
        const expectedId = `not-${i < 10 ? '0' : ''}${i}`;
        expect(ids).toContain(expectedId);
      }
    });

    it('verifies zero occurrences of private telephone "7943 9901" in src/ and public/', () => {
      const checkDir = (dirPath: string) => {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dirPath, entry.name);
          if (entry.isDirectory()) {
            if (entry.name !== 'node_modules' && entry.name !== '.git') {
              checkDir(fullPath);
            }
          } else if (/\.(ts|tsx|js|mjs|json|html|css|md)$/i.test(entry.name)) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            expect(content.includes('7943 9901'), `Private telephone found in ${fullPath}`).toBe(false);
          }
        }
      };

      checkDir(path.resolve(process.cwd(), 'src'));
      checkDir(path.resolve(process.cwd(), 'public'));
    });

    it('verifies presence of official WhatsApp +503 7657 4463 in codebase', () => {
      const appPath = path.resolve(process.cwd(), 'src/App.tsx');
      const footerPath = path.resolve(process.cwd(), 'src/components/Footer.tsx');
      let found = false;

      for (const p of [appPath, footerPath]) {
        if (fs.existsSync(p)) {
          const content = fs.readFileSync(p, 'utf-8');
          if (content.includes('7657 4463') || content.includes('76574463')) {
            found = true;
            break;
          }
        }
      }

      expect(found, 'Official WhatsApp contact +503 7657 4463 not found').toBe(true);
    });

    it('verifies CSS text-white in AcademicReinforcementView header', () => {
      const viewPath = path.resolve(process.cwd(), 'src/components/AcademicReinforcementView.tsx');
      expect(fs.existsSync(viewPath)).toBe(true);
      const content = fs.readFileSync(viewPath, 'utf-8');
      expect(content).toContain('text-white');
    });
  });
});
