import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';

import type {
  GradeLevelId,
  SubjectId,
  TomoNumber,
  AnswerOptionKey,
  PscerLesson,
  UnitQuestion,
  CurriculumUnit,
  SubjectCurriculum,
  GradeCurriculumData,
  CatalogGradeItem,
} from '../src/data/minedCurriculum/types';

import { MINED_CATALOG, MINED_SUBJECT_METADATA } from '../src/data/minedCurriculum/catalog';
import {
  ALL_GRADES_DATA,
  getGrades,
  getGradeDetail,
  getSubject,
  getUnit,
  getUnitLessons,
  getUnitQuestions,
  getEvaluatedUnits,
  getAllUnits,
  searchCurriculum,
} from '../src/data/minedCurriculum/curriculumService';

import { ensureDistinctOptions } from '../src/data/minedCurriculum/grades/gradeHelpers';

// Specialized modules for ID collision checks (1,400 questions)
import { ADMIN_LAW_QUESTIONS } from '../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../src/data/complianceAmlData';
import { TECHNICAL_COURSES } from '../src/data/technicalCoursesData';

/**
 * ============================================================================
 * EMPIRICAL ADVERSARIAL CHALLENGER SUITE: MINED CURRICULUM VERIFICATION
 * ============================================================================
 * Verifies all 7 objectives mandated by Orchestration & Original Request:
 * 1. 11 grades, all subjects, all tomos, and 97 official units integrity.
 * 2. Exactly 50 questions per evaluated unit.
 * 3. Fallback dynamic question generation across all 97 units: 50 distinct Qs, 4 unique options [A, B, C, D].
 * 4. Zero duplicate question IDs across the entire curriculum.
 * 5. Zero ID collisions with base bank (17,640) or specialized modules.
 * 6. All correct answer keys match valid options.
 * 7. KaTeX formulas in lesson conclusions and questions have balanced delimiters and parse cleanly.
 */

describe('CHALLENGER ADVERSARIAL SUITE: Mined Curriculum Verification', () => {
  const EXPECTED_GRADE_IDS: GradeLevelId[] = [
    '1-grado',
    '2-grado',
    '3-grado',
    '4-grado',
    '5-grado',
    '6-grado',
    '7-grado',
    '8-grado',
    '9-grado',
    '1-bachillerato',
    '2-bachillerato',
  ];

  const EXPECTED_ESMATE_UNIT_COUNTS: Record<GradeLevelId, number> = {
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

  // --------------------------------------------------------------------------
  // GATE 1: 11 GRADES, SUBJECTS, TOMOS, AND 97 OFFICIAL UNITS
  // --------------------------------------------------------------------------
  describe('Gate 1: Curriculum Hierarchy and 97 Official Units', () => {
    it('verifies that getGrades() returns exactly 11 grades matching official IDs', () => {
      const grades = getGrades();
      expect(grades).toBeDefined();
      expect(grades.length).toBe(11);

      const returnedIds = grades.map((g) => g.id);
      EXPECTED_GRADE_IDS.forEach((id) => {
        expect(returnedIds).toContain(id);
      });
    });

    it('verifies that ALL_GRADES_DATA contains valid entries for all 11 grades', () => {
      EXPECTED_GRADE_IDS.forEach((gradeId) => {
        const grade = ALL_GRADES_DATA[gradeId];
        expect(grade, `Missing grade data for ${gradeId}`).toBeDefined();
        expect(grade.id).toBe(gradeId);
        expect(grade.name).toBeTruthy();
        expect(grade.cycle).toBeTruthy();
        expect(grade.cycleId).toBeTruthy();
        expect(grade.subjects.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('verifies that all grades in MINED_CATALOG contain all 4 official subjects', () => {
      const expectedSubjects: SubjectId[] = [
        'matematica-esmate',
        'lenguaje-eslengua',
        'ciencia-tecnologia',
        'ciudadania-valores',
      ];

      MINED_CATALOG.forEach((grade) => {
        const subjectIds = grade.subjects.map((s) => s.id);
        expectedSubjects.forEach((subId) => {
          expect(
            subjectIds,
            `Grade ${grade.id} in MINED_CATALOG missing subject ${subId}`
          ).toContain(subId);
        });
      });
    });

    it('verifies that getAllUnits() returns exactly 97 official units', () => {
      const allUnits = getAllUnits();
      expect(
        allUnits.length,
        `Expected exactly 97 official curriculum units, but found ${allUnits.length}`
      ).toBe(97);
    });

    it('verifies that unit counts per grade match the official MINED breakdown totaling 97', () => {
      let totalCount = 0;
      EXPECTED_GRADE_IDS.forEach((gradeId) => {
        const grade = ALL_GRADES_DATA[gradeId];
        const mathSubject = grade.subjects.find((s) => s.id === 'matematica-esmate');
        expect(mathSubject, `Grade ${gradeId} must contain matematica-esmate`).toBeDefined();
        const count = mathSubject!.units.length;
        expect(
          count,
          `Grade ${gradeId} expected ${EXPECTED_ESMATE_UNIT_COUNTS[gradeId]} units, got ${count}`
        ).toBe(EXPECTED_ESMATE_UNIT_COUNTS[gradeId]);
        totalCount += count;
      });
      expect(totalCount).toBe(97);
    });

    it('verifies that every one of the 97 units has valid Tomo 1 or Tomo 2 assignment', () => {
      const allUnits = getAllUnits();
      allUnits.forEach(({ gradeId, unit }) => {
        expect(
          [1, 2],
          `Unit ${unit.id} in ${gradeId} has invalid tomo: ${unit.tomo}`
        ).toContain(unit.tomo);
      });
    });

    it('verifies that every one of the 97 units has non-empty metadata (title, summary, competencies)', () => {
      const allUnits = getAllUnits();
      allUnits.forEach(({ gradeId, unit }) => {
        expect(unit.id.trim().length, `Unit ID empty in ${gradeId}`).toBeGreaterThan(0);
        expect(unit.title.trim().length, `Unit title empty in ${unit.id}`).toBeGreaterThan(3);
        expect(unit.summary.trim().length, `Unit summary empty in ${unit.id}`).toBeGreaterThan(10);
        expect(unit.competencies.length, `Unit competencies empty in ${unit.id}`).toBeGreaterThanOrEqual(1);
        unit.competencies.forEach((c) => {
          expect(c.trim().length, `Competency text empty in ${unit.id}`).toBeGreaterThan(3);
        });
      });
    });

    it('verifies that getUnit() can retrieve every one of the 97 units by gradeId and unitId', () => {
      const allUnits = getAllUnits();
      allUnits.forEach(({ gradeId, unit }) => {
        const retrieved = getUnit(gradeId, unit.id);
        expect(retrieved, `Failed to retrieve unit ${unit.id} via getUnit(${gradeId}, ${unit.id})`).toBeDefined();
        expect(retrieved!.id).toBe(unit.id);
        expect(retrieved!.title).toBe(unit.title);
      });
    });
  });

  // --------------------------------------------------------------------------
  // GATE 2: EVALUATED UNITS AND 50-QUESTION SIMULATOR INTEGRITY
  // --------------------------------------------------------------------------
  describe('Gate 2: Evaluated Units and 50-Question Simulator Banks', () => {
    it('verifies that every evaluated unit returns exactly 50 static questions', () => {
      const evaluatedUnits = getEvaluatedUnits();
      expect(
        evaluatedUnits.length,
        'There must be at least one evaluated unit with full 50 questions'
      ).toBeGreaterThanOrEqual(1);

      evaluatedUnits.forEach(({ gradeId, unit }) => {
        expect(
          unit.questions,
          `Evaluated unit ${unit.id} in ${gradeId} lacks questions array`
        ).toBeDefined();
        expect(
          unit.questions.length,
          `Evaluated unit ${unit.id} must have exactly 50 questions, has ${unit.questions.length}`
        ).toBe(50);
      });
    });

    it('verifies that getUnitQuestions() returns exactly 50 questions for ALL 97 units', () => {
      const allUnits = getAllUnits();
      expect(allUnits.length).toBe(97);

      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        expect(
          questions,
          `getUnitQuestions(${gradeId}, ${unit.id}) returned undefined or null`
        ).toBeDefined();
        expect(
          questions.length,
          `getUnitQuestions(${gradeId}, ${unit.id}) must return exactly 50 questions, returned ${questions.length}`
        ).toBe(50);
      });
    });
  });

  // --------------------------------------------------------------------------
  // GATE 3: FALLBACK DYNAMIC QUESTION GENERATION STRESS TESTING
  // --------------------------------------------------------------------------
  describe('Gate 3: Fallback Dynamic Question Generation Robustness', () => {
    it('generates 50 distinct questions with 4 unique options [A, B, C, D] each for all 97 units', () => {
      const allUnits = getAllUnits();

      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        expect(questions.length).toBe(50);

        // Verify uniqueness of question statements or IDs within the unit
        const qIds = new Set<string>();
        questions.forEach((q, idx) => {
          expect(qIds.has(q.id), `Duplicate question ID ${q.id} in unit ${unit.id}`).toBe(false);
          qIds.add(q.id);

          // Verify options
          expect(q.options.length, `Question ${q.id} must have 4 options`).toBe(4);
          const optionTexts = q.options.map((opt) => opt.trim());
          const uniqueOptionTexts = new Set(optionTexts);
          expect(
            uniqueOptionTexts.size,
            `Question ${q.id} in unit ${unit.id} has duplicate option texts: ${JSON.stringify(optionTexts)}`
          ).toBe(4);

          // Verify non-empty option text
          optionTexts.forEach((opt, oIdx) => {
            expect(
              opt.length,
              `Option ${oIdx} in question ${q.id} is empty`
            ).toBeGreaterThan(0);
          });
        });
      });
    });

    it('adversarially stress-tests ensureDistinctOptions against duplicate and edge case inputs', () => {
      // Test identical strings
      const duplicateOpts: [string, string, string, string] = ['Respuesta', 'Respuesta', 'Respuesta', 'Respuesta'];
      const sanitized = ensureDistinctOptions(duplicateOpts, 'A');
      const uniqueSet = new Set(sanitized);
      expect(uniqueSet.size).toBe(4);
      expect(sanitized[0]).toBe('Respuesta'); // Correct answer preserved

      // Test numeric strings in KaTeX
      const numericOpts: [string, string, string, string] = ['$5$', '$5$', '$5$', '$5$'];
      const sanitizedNums = ensureDistinctOptions(numericOpts, 'B');
      const uniqueNums = new Set(sanitizedNums);
      expect(uniqueNums.size).toBe(4);
      expect(sanitizedNums[1]).toBe('$5$'); // Key B preserved
    });
  });

  // --------------------------------------------------------------------------
  // GATE 4: ID UNIQUENESS AND CURRICULUM ZERO DUPLICATES
  // --------------------------------------------------------------------------
  describe('Gate 4: Question ID Uniqueness across entire curriculum', () => {
    it('verifies zero duplicate IDs across all 97 units (total 4,850 questions evaluated)', () => {
      const allUnits = getAllUnits();
      const globalQuestionIds = new Map<string, string>(); // id -> unitId

      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        questions.forEach((q) => {
          if (globalQuestionIds.has(q.id)) {
            const previousUnit = globalQuestionIds.get(q.id);
            expect.fail(
              `Duplicate question ID found: "${q.id}" appears in both unit "${previousUnit}" and unit "${unit.id}" (${gradeId})`
            );
          }
          globalQuestionIds.set(q.id, unit.id);
        });
      });

      expect(globalQuestionIds.size).toBe(97 * 50); // Exactly 4,850 unique IDs
    });

    it('verifies that all question IDs follow the standard official prefix schema', () => {
      const allUnits = getAllUnits();
      const idPattern = /^MINED-MAT-(?:[1-9]G|10G|11G|1B|2B)-U\d{2}-Q\d{3}$/;

      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        questions.forEach((q) => {
          expect(
            idPattern.test(q.id),
            `Question ID "${q.id}" does not conform to expected schema MINED-MAT-{GRADO}-U{XX}-Q{YYY}`
          ).toBe(true);
        });
      });
    });
  });

  // --------------------------------------------------------------------------
  // GATE 5: ZERO ID COLLISIONS WITH BASE BANK (17,640) & SPECIALIZED MODULES
  // --------------------------------------------------------------------------
  describe('Gate 5: Zero ID Collisions with Base Bank (17,640) and Specialized Modules', () => {
    it('verifies zero ID collision with the 17,640 questions of base bank', () => {
      const manifestPath = path.resolve(__dirname, '../public/data/manifest.json');
      expect(fs.existsSync(manifestPath), 'Base bank manifest must exist').toBe(true);
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      expect(manifest.totalQuestions).toBe(17640);

      // Collect all 4,850 curriculum question IDs
      const allUnits = getAllUnits();
      const minedIds = new Set<string>();
      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        questions.forEach((q) => minedIds.add(q.id));
      });

      const publicDataDir = path.resolve(__dirname, '../public/data');

      // Recursively collect all JSON files in public/data/
      function getAllJsonFiles(dir: string): string[] {
        let results: string[] = [];
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            results = results.concat(getAllJsonFiles(fullPath));
          } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'manifest.json' && entry.name !== 'curriculum.json') {
            results.push(fullPath);
          }
        }
        return results;
      }

      const files = getAllJsonFiles(publicDataDir);
      let totalCheckedBaseQuestions = 0;
      files.forEach((filePath) => {
        try {
          const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          const questions = Array.isArray(content) ? content : content.questions || [];
          questions.forEach((bq: any) => {
            if (bq && bq.id) {
              totalCheckedBaseQuestions++;
              expect(
                minedIds.has(bq.id),
                `Collision detected! Curriculum ID "${bq.id}" collides with base bank item in ${filePath}`
              ).toBe(false);
            }
          });
        } catch {
          // Skip non-question JSON if any
        }
      });

      expect(totalCheckedBaseQuestions).toBeGreaterThanOrEqual(17640);
    });

    it('verifies zero ID collision with all 7 specialized modules (1,400 questions) and technical courses', () => {
      const allUnits = getAllUnits();
      const minedIds = new Set<string>();
      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        questions.forEach((q) => minedIds.add(q.id));
      });

      const specializedIds = [
        ...ADMIN_LAW_QUESTIONS.map((q) => q.id),
        ...SALUD_PRIMARIA_QUESTIONS.map((q) => q.id),
        ...INGENIERIA_QUESTIONS.map((q) => q.id),
        ...NOTARY_EXAM_QUESTIONS.map((q) => q.id),
        ...CSSP_QUESTIONS_DATA.map((q) => q.id),
        ...ANSP_ASCENSO_QUESTIONS.map((q) => q.id),
        ...COMPLIANCE_QUESTIONS.map((q) => q.id),
      ];

      expect(specializedIds.length).toBe(1400);

      specializedIds.forEach((sId) => {
        expect(
          minedIds.has(sId),
          `Colisión de ID detectada con módulo especializado: ${sId}`
        ).toBe(false);
      });

      // Technical courses quiz IDs
      const techQuizIds = TECHNICAL_COURSES.flatMap((c) =>
        c.modules.flatMap((m: any) => (m.quiz || m.questions || []).map((q: any) => q.id))
      );
      techQuizIds.forEach((tId) => {
        expect(
          minedIds.has(tId),
          `Colisión de ID detectada con curso técnico: ${tId}`
        ).toBe(false);
      });
    });
  });

  // --------------------------------------------------------------------------
  // GATE 6: ANSWER KEYS AND OPTION VALIDITY
  // --------------------------------------------------------------------------
  describe('Gate 6: Answer Keys and Option Validity', () => {
    it('verifies that all correct answer keys are in ["A", "B", "C", "D"] and match existing options', () => {
      const allUnits = getAllUnits();
      const VALID_KEYS: AnswerOptionKey[] = ['A', 'B', 'C', 'D'];
      const keyIndexMap: Record<AnswerOptionKey, number> = { A: 0, B: 1, C: 2, D: 3 };

      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        questions.forEach((q) => {
          expect(
            VALID_KEYS.includes(q.correctAnswer),
            `Question ${q.id} has invalid correctAnswer: "${q.correctAnswer}"`
          ).toBe(true);

          const expectedIdx = keyIndexMap[q.correctAnswer];
          const targetedOption = q.options[expectedIdx];
          expect(
            targetedOption,
            `Question ${q.id} has no option at index ${expectedIdx} for key "${q.correctAnswer}"`
          ).toBeDefined();
          expect(
            targetedOption.trim().length,
            `Question ${q.id} option at key "${q.correctAnswer}" is empty`
          ).toBeGreaterThan(0);
        });
      });
    });

    it('verifies key distribution across 4,850 questions is balanced across A, B, C, D', () => {
      const allUnits = getAllUnits();
      const distribution: Record<AnswerOptionKey, number> = { A: 0, B: 0, C: 0, D: 0 };

      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        questions.forEach((q) => {
          distribution[q.correctAnswer]++;
        });
      });

      const total = 97 * 50;
      // Ensure each letter has at least 15% representation
      (['A', 'B', 'C', 'D'] as AnswerOptionKey[]).forEach((key) => {
        const pct = (distribution[key] / total) * 100;
        expect(
          pct,
          `Key "${key}" has abnormal distribution: ${pct.toFixed(1)}% (${distribution[key]}/${total})`
        ).toBeGreaterThanOrEqual(15);
      });
    });
  });

  // --------------------------------------------------------------------------
  // GATE 7: KATEX DELIMITER BALANCE AND FORMULA COMPILATION
  // --------------------------------------------------------------------------
  describe('Gate 7: KaTeX Delimiters and Formula Compilation', () => {
    it('verifies that all lesson conclusions have balanced $ and $$ delimiters', () => {
      const allUnits = getAllUnits();
      let totalLessonsChecked = 0;

      allUnits.forEach(({ gradeId, unit }) => {
        unit.lessons.forEach((lesson) => {
          totalLessonsChecked++;
          const text = lesson.conclusion;
          // Count dollar signs not preceded by backslash
          const matches = text.match(/(?<!\\)\$/g) || [];
          expect(
            matches.length % 2,
            `Unbalanced KaTeX delimiter in lesson ${lesson.id} (${unit.id}, ${gradeId}): "${text}"`
          ).toBe(0);
        });
      });

      expect(totalLessonsChecked).toBeGreaterThanOrEqual(97);
    });

    it('verifies that all question statements and explanations have balanced KaTeX delimiters', () => {
      const allUnits = getAllUnits();

      allUnits.forEach(({ gradeId, unit }) => {
        const questions = getUnitQuestions(gradeId, unit.id);
        questions.forEach((q) => {
          // Check statement
          const stmtMatches = q.statement.match(/(?<!\\)\$/g) || [];
          expect(
            stmtMatches.length % 2,
            `Unbalanced KaTeX delimiter in question statement ${q.id}: "${q.statement}"`
          ).toBe(0);

          // Check explanation
          const expMatches = q.explanation.match(/(?<!\\)\$/g) || [];
          expect(
            expMatches.length % 2,
            `Unbalanced KaTeX delimiter in question explanation ${q.id}: "${q.explanation}"`
          ).toBe(0);
        });
      });
    });

    it('empirically renders KaTeX math fragments with katex.renderToString without syntax errors', () => {
      const allUnits = getAllUnits();
      let mathExpressionsTested = 0;

      // Extract inline ($...$) and block ($$...$$) math from lessons
      allUnits.forEach(({ unit }) => {
        unit.lessons.forEach((lesson) => {
          const matches = lesson.conclusion.match(/\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g) || [];
          matches.forEach((rawMath) => {
            const math = rawMath.startsWith('$$')
              ? rawMath.slice(2, -2)
              : rawMath.slice(1, -1);
            if (math.trim().length > 0) {
              expect(() => {
                katex.renderToString(math.trim(), { throwOnError: true });
              }, `KaTeX failed to render math in lesson ${lesson.id}: "${math}"`).not.toThrow();
              mathExpressionsTested++;
            }
          });
        });
      });

      expect(mathExpressionsTested).toBeGreaterThanOrEqual(50);
    });
  });
});
