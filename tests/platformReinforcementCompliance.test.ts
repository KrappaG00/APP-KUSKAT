/**
 * KUSKAT PLATFORM REINFORCEMENT COMPLIANCE SUITE (Gen 2 — M5 Certification)
 *
 * Comprehensive Vitest compliance suite independently certifying Requirements R1 to R4:
 *
 * R1 & R2: Word count verification (every single unit/branch across M1, M2, M3, M4
 *          must strictly have >= 500 substantive words without placeholder text).
 * R2: Solved examples count:
 *     - M1 Jóvenes Talento >= 25 solved proofs (5 units * >= 5 proofs)
 *     - M1 One-Page Sheets >= 45 solved examples (9 sheets * >= 5 practical examples)
 *     - M2 Litigación Oral >= 25 courtroom dialogue cases (5 units * >= 5 cases)
 *     - M2 Casoteca >= 50 solved jurisprudence cases (10 branches * >= 5 cases)
 *     - M3 Residentado Médico >= 25 solved clinical cases (5 units * >= 5 clinical cases)
 *     - M4 Técnico Solar >= 25 solved engineering calculations (5 units * >= 5 calculations)
 * R3: High-yield interactive questions:
 *     - M3 Residentado Médico >= 50 questions with complete distractor rationales
 *     - M4 Técnico Solar >= 50 questions with complete distractor rationales
 *     - Notary Exam == 200 questions preserved intact
 * R4: System invariants:
 *     - 17,640 base bank questions in public/data/
 *     - 0 occurrences of private phone '7943 9901' across src/ and public/
 *     - Official WhatsApp '+503 7657 4463' preserved
 *     - Academic heading "Refuerzo Académico (1° a 9° Grado y Bachillerato)" text-white preserved
 */

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

// M1 Imports
import { OLYMPIC_THEMATIC_UNITS } from '../src/data/jovenesTalentoData';
import { ONE_PAGE_SHEETS } from '../src/data/onePageSheetsData';

// M2 Imports
import { ORAL_LITIGATION_THEMATIC_UNITS } from '../src/data/oralLitigationData';
import { CONSTITUTION_LAW_BRANCHES } from '../src/data/constitucionalJurisprudenciaData';

// M3 Imports
import {
  RESIDENTADO_THEMATIC_UNITS,
  RESIDENTADO_QUESTIONS,
} from '../src/data/residentadoMedicoData';

// M4 Imports
import {
  SIGET_THEMATIC_UNITS,
  SIGET_SOLAR_QUESTIONS,
} from '../src/data/sigetSolarData';

// Notary Import
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';

/**
 * Standard substantive word counter: splits on whitespace and filters non-empty tokens.
 */
function countSubstantiveWords(text: string): number {
  if (!text) return 0;
  return text
    .trim()
    .split(/\s+/)
    .filter((token) => token.length > 0).length;
}

/**
 * Known placeholder / filler patterns that violate content authenticity.
 */
const FORBIDDEN_PLACEHOLDER_PATTERNS = [
  /lorem\s+ipsum/i,
  /\[placeholder\]/i,
  /\b(TODO|TBD|FIXME|XXX)\b/, // case-sensitive to avoid matching common Spanish word "todo"
  /texto\s+de\s+relleno/i,
  /plantilla\s+gen[eé]rica/i,
  /\bdummy\b/i,
  /en\s+un\s+proyecto\s+acad[eé]mico\s+desarrollado\s+en/i,
];

describe('R1 & R2: Substantive Word Count Rigor Across All Reinforced Units & Branches', () => {
  describe('M1: Jóvenes Talento (MINED - UES Olympic Units)', () => {
    it('has exactly 5 Olympic thematic units', () => {
      expect(OLYMPIC_THEMATIC_UNITS.length).toBe(5);
    });

    it('each of the 5 Olympic units strictly contains >= 500 substantive words', () => {
      OLYMPIC_THEMATIC_UNITS.forEach((unit) => {
        const words = countSubstantiveWords(unit.substantiveTheory);
        expect(
          words,
          `Jóvenes Talento unit "${unit.title}" (${unit.id}) must have >= 500 words, got ${words}`
        ).toBeGreaterThanOrEqual(500);

        FORBIDDEN_PLACEHOLDER_PATTERNS.forEach((pattern) => {
          expect(unit.substantiveTheory).not.toMatch(pattern);
        });
      });
    });
  });

  describe('M2: Simulador de Litigación Oral Penal', () => {
    it('has exactly 5 courtroom trial units', () => {
      expect(ORAL_LITIGATION_THEMATIC_UNITS.length).toBe(5);
    });

    it('each of the 5 litigation units strictly contains >= 500 substantive words', () => {
      ORAL_LITIGATION_THEMATIC_UNITS.forEach((unit) => {
        const words = countSubstantiveWords(unit.substantiveTheory);
        expect(
          words,
          `Litigation unit "${unit.title}" (${unit.id}) must have >= 500 words, got ${words}`
        ).toBeGreaterThanOrEqual(500);

        FORBIDDEN_PLACEHOLDER_PATTERNS.forEach((pattern) => {
          expect(unit.substantiveTheory).not.toMatch(pattern);
        });
      });
    });
  });

  describe('M2: Casoteca Constitucional & 10 Ramas del Derecho', () => {
    it('has exactly 10 branches of Salvadoran law', () => {
      expect(CONSTITUTION_LAW_BRANCHES.length).toBe(10);
    });

    it('each of the 10 branches strictly contains >= 500 substantive words of doctrinal analysis', () => {
      CONSTITUTION_LAW_BRANCHES.forEach((branch) => {
        const words = countSubstantiveWords(branch.substantiveAnalysis);
        expect(
          words,
          `Law branch "${branch.name}" (${branch.id}) must have >= 500 words, got ${words}`
        ).toBeGreaterThanOrEqual(500);

        FORBIDDEN_PLACEHOLDER_PATTERNS.forEach((pattern) => {
          expect(branch.substantiveAnalysis).not.toMatch(pattern);
        });
      });
    });
  });

  describe('M3: Residentado Médico (ENAR Core Specialties)', () => {
    it('has exactly 5 specialized medical units', () => {
      expect(RESIDENTADO_THEMATIC_UNITS.length).toBe(5);
    });

    it('each of the 5 medical units strictly contains >= 500 substantive words', () => {
      RESIDENTADO_THEMATIC_UNITS.forEach((unit) => {
        const words = countSubstantiveWords(unit.substantiveTheory);
        expect(
          words,
          `Medical unit "${unit.title}" (${unit.id}) must have >= 500 words, got ${words}`
        ).toBeGreaterThanOrEqual(500);

        FORBIDDEN_PLACEHOLDER_PATTERNS.forEach((pattern) => {
          expect(unit.substantiveTheory).not.toMatch(pattern);
        });
      });
    });
  });

  describe('M4: Técnico Solar & Normativa SIGET', () => {
    it('has exactly 5 electrical engineering units', () => {
      expect(SIGET_THEMATIC_UNITS.length).toBe(5);
    });

    it('each of the 5 solar units strictly contains >= 500 substantive words', () => {
      SIGET_THEMATIC_UNITS.forEach((unit) => {
        const words = countSubstantiveWords(unit.substantiveTheory);
        expect(
          words,
          `Solar unit "${unit.title}" (${unit.id}) must have >= 500 words, got ${words}`
        ).toBeGreaterThanOrEqual(500);

        FORBIDDEN_PLACEHOLDER_PATTERNS.forEach((pattern) => {
          expect(unit.substantiveTheory).not.toMatch(pattern);
        });
      });
    });
  });

  it('verifies that zero units across M1, M2, M3, and M4 contain generic placeholder text', () => {
    const allTheories = [
      ...OLYMPIC_THEMATIC_UNITS.map((u) => u.substantiveTheory),
      ...ORAL_LITIGATION_THEMATIC_UNITS.map((u) => u.substantiveTheory),
      ...CONSTITUTION_LAW_BRANCHES.map((b) => b.substantiveAnalysis),
      ...RESIDENTADO_THEMATIC_UNITS.map((u) => u.substantiveTheory),
      ...SIGET_THEMATIC_UNITS.map((u) => u.substantiveTheory),
    ];

    allTheories.forEach((theory, idx) => {
      FORBIDDEN_PLACEHOLDER_PATTERNS.forEach((pat) => {
        expect(
          theory,
          `Substantive text at index ${idx} must not match placeholder pattern ${pat}`
        ).not.toMatch(pat);
      });
    });
  });
});

describe('R2: Solved Step-by-Step Examples & Case Studies Completeness', () => {
  it('M1: Jóvenes Talento contains >= 25 step-by-step solved proofs (>= 5 per unit)', () => {
    let totalSolved = 0;
    OLYMPIC_THEMATIC_UNITS.forEach((unit) => {
      expect(
        unit.solvedExamples.length,
        `Unit "${unit.title}" must have >= 5 solved examples, got ${unit.solvedExamples.length}`
      ).toBeGreaterThanOrEqual(5);

      totalSolved += unit.solvedExamples.length;

      unit.solvedExamples.forEach((ex) => {
        expect(ex.title.trim().length).toBeGreaterThan(5);
        expect(ex.problemStatement.trim().length).toBeGreaterThan(20);
        expect(ex.stepByStepProof.trim().length).toBeGreaterThan(80);
        expect(ex.pedagogicInsight.trim().length).toBeGreaterThan(15);
      });
    });

    expect(totalSolved).toBeGreaterThanOrEqual(25);
  });

  it('M1: One-Page Cheat Sheets contains >= 45 solved practical examples (>= 5 across 9 sheets)', () => {
    expect(ONE_PAGE_SHEETS.length).toBe(9);
    let totalSolved = 0;

    ONE_PAGE_SHEETS.forEach((sheet) => {
      expect(
        sheet.solvedPracticeExamples.length,
        `Sheet "${sheet.title}" must have >= 5 solved examples, got ${sheet.solvedPracticeExamples.length}`
      ).toBeGreaterThanOrEqual(5);

      totalSolved += sheet.solvedPracticeExamples.length;

      sheet.solvedPracticeExamples.forEach((ex) => {
        expect(ex.title.trim().length).toBeGreaterThan(5);
        expect(ex.scenario.trim().length).toBeGreaterThan(20);
        expect(ex.stepByStepSolution.trim().length).toBeGreaterThan(30);
        expect(ex.result.trim().length).toBeGreaterThan(2);
      });
    });

    expect(totalSolved).toBeGreaterThanOrEqual(45);
  });

  it('M2: Litigación Oral contains >= 25 courtroom dialogue cases (>= 5 per unit)', () => {
    let totalSolved = 0;
    ORAL_LITIGATION_THEMATIC_UNITS.forEach((unit) => {
      expect(
        unit.solvedCases.length,
        `Unit "${unit.title}" must have >= 5 solved cases, got ${unit.solvedCases.length}`
      ).toBeGreaterThanOrEqual(5);

      totalSolved += unit.solvedCases.length;

      unit.solvedCases.forEach((sc) => {
        expect(sc.id.trim().length).toBeGreaterThan(3);
        expect(sc.title.trim().length).toBeGreaterThan(5);
        expect(sc.tribunal.trim().length).toBeGreaterThan(5);
        expect(sc.crimeCharge.trim().length).toBeGreaterThan(5);
        expect(sc.proceduralPhase.trim().length).toBeGreaterThan(5);
        expect(sc.scenarioDescription.trim().length).toBeGreaterThan(20);

        const inc = sc.dialogueIncident;
        expect(inc).toBeDefined();
        expect(inc.dialogue.length).toBeGreaterThanOrEqual(3);
        inc.dialogue.forEach((turn) => {
          expect(['Fiscal', 'Defensa', 'Juez', 'Testigo', 'Perito', 'Secretario']).toContain(
            turn.speaker
          );
          expect(turn.text.trim().length).toBeGreaterThan(5);
        });

        expect(inc.objectionRaised.trim().length).toBeGreaterThan(5);
        expect(['Fiscal', 'Defensa']).toContain(inc.partyObjecting);
        expect(inc.legalBasis.trim().length).toBeGreaterThan(5);
        expect(inc.judgeRuling.trim().length).toBeGreaterThan(3);
        expect(inc.judicialRationale.trim().length).toBeGreaterThan(20);
        expect(sc.pedagogicalKeyTakeaway.trim().length).toBeGreaterThan(20);
      });
    });

    expect(totalSolved).toBeGreaterThanOrEqual(25);
  });

  it('M2: Casoteca Constitucional contains >= 50 solved jurisprudence cases (>= 5 across 10 branches)', () => {
    let totalSolved = 0;
    CONSTITUTION_LAW_BRANCHES.forEach((branch) => {
      expect(
        branch.solvedCases.length,
        `Branch "${branch.name}" must have >= 5 solved cases, got ${branch.solvedCases.length}`
      ).toBeGreaterThanOrEqual(5);

      totalSolved += branch.solvedCases.length;

      branch.solvedCases.forEach((sc) => {
        expect(sc.id.trim().length).toBeGreaterThan(3);
        expect(sc.title.trim().length).toBeGreaterThan(5);
        expect(sc.factualContext.trim().length).toBeGreaterThan(20);
        expect(sc.constitutionalIssue.trim().length).toBeGreaterThan(10);
        expect(sc.legalBasis.trim().length).toBeGreaterThan(5);
        expect(sc.ratioDecidendi.trim().length).toBeGreaterThan(20);
        expect(sc.proceduralOutcome.trim().length).toBeGreaterThan(15);
      });
    });

    expect(totalSolved).toBeGreaterThanOrEqual(50);
  });

  it('M3: Residentado Médico contains >= 25 solved clinical cases (>= 5 across 5 specialties)', () => {
    let totalSolved = 0;
    RESIDENTADO_THEMATIC_UNITS.forEach((unit) => {
      expect(
        unit.solvedClinicalCases.length,
        `Specialty "${unit.specialtyName}" must have >= 5 solved clinical cases, got ${unit.solvedClinicalCases.length}`
      ).toBeGreaterThanOrEqual(5);

      totalSolved += unit.solvedClinicalCases.length;

      unit.solvedClinicalCases.forEach((c) => {
        expect(c.id.trim().length).toBeGreaterThan(3);
        expect(c.title.trim().length).toBeGreaterThan(5);
        expect(c.patientProfile.trim().length).toBeGreaterThan(10);
        expect(c.clinicalPresentation.trim().length).toBeGreaterThan(10);
        expect(c.physicalExam.trim().length).toBeGreaterThan(10);
        expect(c.labAndImagingData.trim().length).toBeGreaterThan(10);
        expect(c.initialVignette.trim().length).toBeGreaterThan(20);
        expect(c.diagnosticReasoning.trim().length).toBeGreaterThan(40);
        expect(c.differentialDiagnosis.length).toBeGreaterThanOrEqual(2);
        expect(c.managementPlan.length).toBeGreaterThanOrEqual(3);
        expect(c.therapeuticPlan.length).toBeGreaterThanOrEqual(3);
        expect(c.clinicalPearls.length).toBeGreaterThanOrEqual(1);
        expect(c.pedagogicalRationale.trim().length).toBeGreaterThan(10);
        expect(c.officialProtocolRef.trim().length).toBeGreaterThan(5);
      });
    });

    expect(totalSolved).toBeGreaterThanOrEqual(25);
  });

  it('M4: Técnico Solar contains >= 25 solved engineering calculations (>= 5 across 5 units)', () => {
    let totalSolved = 0;
    SIGET_THEMATIC_UNITS.forEach((unit) => {
      expect(
        unit.solvedCalculations.length,
        `Unit "${unit.title}" must have >= 5 solved calculations, got ${unit.solvedCalculations.length}`
      ).toBeGreaterThanOrEqual(5);

      totalSolved += unit.solvedCalculations.length;

      unit.solvedCalculations.forEach((calc) => {
        expect(calc.id.trim().length).toBeGreaterThan(3);
        expect(calc.title.trim().length).toBeGreaterThan(5);
        expect(calc.unitId).toBe(unit.id);
        expect(calc.problemStatement.trim().length).toBeGreaterThan(30);
        expect(Object.keys(calc.designParameters).length).toBeGreaterThanOrEqual(2);
        expect(calc.engineeringFormulas.length).toBeGreaterThanOrEqual(1);
        expect(calc.stepByStepSubstitution.trim().length).toBeGreaterThan(40);
        expect(calc.numericalResult.trim().length).toBeGreaterThan(2);
        expect(calc.practicalEngineeringJudgment.trim().length).toBeGreaterThan(15);
      });
    });

    expect(totalSolved).toBeGreaterThanOrEqual(25);
  });

  it('audits cumulative solved step-by-step items: verifies 195 total verified solved items across M1, M2, M3, M4', () => {
    const m1Proofs = OLYMPIC_THEMATIC_UNITS.reduce((sum, u) => sum + u.solvedExamples.length, 0);
    const m1Sheets = ONE_PAGE_SHEETS.reduce((sum, s) => sum + s.solvedPracticeExamples.length, 0);
    const m2Courtroom = ORAL_LITIGATION_THEMATIC_UNITS.reduce((sum, u) => sum + u.solvedCases.length, 0);
    const m2Jurisprudence = CONSTITUTION_LAW_BRANCHES.reduce((sum, b) => sum + b.solvedCases.length, 0);
    const m3Clinical = RESIDENTADO_THEMATIC_UNITS.reduce((sum, u) => sum + u.solvedClinicalCases.length, 0);
    const m4Engineering = SIGET_THEMATIC_UNITS.reduce((sum, u) => sum + u.solvedCalculations.length, 0);

    expect(m1Proofs).toBeGreaterThanOrEqual(25);
    expect(m1Sheets).toBeGreaterThanOrEqual(45);
    expect(m2Courtroom).toBeGreaterThanOrEqual(25);
    expect(m2Jurisprudence).toBeGreaterThanOrEqual(50);
    expect(m3Clinical).toBeGreaterThanOrEqual(25);
    expect(m4Engineering).toBeGreaterThanOrEqual(25);

    const totalSolvedCasesAndCalculations =
      m1Proofs + m1Sheets + m2Courtroom + m2Jurisprudence + m3Clinical + m4Engineering;

    expect(totalSolvedCasesAndCalculations).toBeGreaterThanOrEqual(195);
  });
});

describe('R3: High-Yield Interactive Practice Questions & Distractor Rationales', () => {
  describe('M3: Residentado Médico Question Bank', () => {
    it('contains at least 50 high-yield medical residency questions', () => {
      expect(RESIDENTADO_QUESTIONS.length).toBeGreaterThanOrEqual(50);
    });

    it('each medical question has 4 distinct options, valid key, and complete distractor rationales', () => {
      const seenIds = new Set<string>();

      RESIDENTADO_QUESTIONS.forEach((q) => {
        expect(seenIds.has(q.id)).toBe(false);
        seenIds.add(q.id);

        expect(q.topic.trim().length).toBeGreaterThan(5);
        expect(q.clinicalVignette.trim().length).toBeGreaterThan(20);
        expect(q.explanation.trim().length).toBeGreaterThan(20);
        expect(q.keyTakeaway.trim().length).toBeGreaterThan(10);
        expect(q.officialReference.trim().length).toBeGreaterThan(5);

        expect(q.options.length).toBe(4);
        const optionKeys = q.options.map((o) => o.key).sort();
        expect(optionKeys).toEqual(['A', 'B', 'C', 'D']);

        const optionTexts = q.options.map((o) => o.text.trim());
        expect(new Set(optionTexts).size).toBe(4);

        expect(['A', 'B', 'C', 'D']).toContain(q.correctKey);

        const wrongKeys = ['A', 'B', 'C', 'D'].filter((k) => k !== q.correctKey);
        wrongKeys.forEach((wk) => {
          expect(q.distractorRationale[wk]).toBeDefined();
          expect(
            q.distractorRationale[wk].trim().length,
            `Question ${q.id} distractor ${wk} must have substantive explanation`
          ).toBeGreaterThan(10);
        });
      });
    });
  });

  describe('M4: Técnico Solar Question Bank', () => {
    it('contains at least 50 high-yield solar engineering questions', () => {
      expect(SIGET_SOLAR_QUESTIONS.length).toBeGreaterThanOrEqual(50);
    });

    it('each solar question has 4 distinct options, valid key, and complete distractor rationales', () => {
      const seenIds = new Set<string>();

      SIGET_SOLAR_QUESTIONS.forEach((q) => {
        expect(seenIds.has(q.id)).toBe(false);
        seenIds.add(q.id);

        expect([
          'normativa-gd',
          'nec-690',
          'electricistas-siget',
          'seguridad-operativa',
        ]).toContain(q.category);
        expect(q.statement.trim().length).toBeGreaterThan(20);
        expect(q.explanation.trim().length).toBeGreaterThan(20);
        expect(q.technicalBasis.trim().length).toBeGreaterThan(5);

        const optionTexts = [q.options.A, q.options.B, q.options.C, q.options.D];
        optionTexts.forEach((optText) => {
          expect(optText.trim().length).toBeGreaterThan(2);
        });
        expect(new Set(optionTexts).size).toBe(4);

        expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

        expect(q.distractorRationale).toBeDefined();
        ['A', 'B', 'C', 'D'].forEach((key) => {
          expect(q.distractorRationale[key]).toBeDefined();
          expect(
            q.distractorRationale[key]?.trim().length,
            `Solar question ${q.id} distractor ${key} must have substantive explanation`
          ).toBeGreaterThan(5);
        });
      });
    });
  });

  describe('Notary Exam Question Bank Invariant', () => {
    it('preserves exactly 200 Notary exam questions with unique IDs not-01 to not-200', () => {
      expect(NOTARY_EXAM_QUESTIONS.length).toBe(200);

      const ids = NOTARY_EXAM_QUESTIONS.map((q) => q.id);
      expect(new Set(ids).size).toBe(200);

      for (let i = 1; i <= 200; i++) {
        const expectedId = i < 100 ? `not-${i.toString().padStart(2, '0')}` : `not-${i}`;
        expect(ids).toContain(expectedId);
      }

      NOTARY_EXAM_QUESTIONS.forEach((q) => {
        expect(q.statement.trim().length).toBeGreaterThan(15);
        expect(q.options.length).toBeGreaterThanOrEqual(3);
        const optionKeys = q.options.map((o) => o.key);
        expect(optionKeys).toContain(q.correctKey);
        expect(q.explanation.trim().length).toBeGreaterThan(20);
      });
    });
  });
});

describe('R4: System Invariants & Platform Certification', () => {
  const rootDir = process.cwd();

  it('certifies exactly 17,640 base bank questions in public/data/ via manifest.json and disk audit', () => {
    const manifestPath = path.join(rootDir, 'public', 'data', 'manifest.json');
    expect(fs.existsSync(manifestPath)).toBe(true);

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifest.totalQuestions).toBe(17640);
    expect(manifest.institutions.UES.totalQuestions).toBe(7500);
    expect(manifest.institutions.ESCALAFON.totalQuestions).toBe(3300);
    expect(manifest.institutions.AVANZO.totalQuestions).toBe(3000);
    expect(manifest.institutions.ASD.totalQuestions).toBe(2190);
    expect(manifest.institutions.ENA.totalQuestions).toBe(1400);
    expect(manifest.institutions.ANSP.totalQuestions).toBe(250);

    // Verify sub-directories directly on disk
    const countFilesInDir = (dirPath: string): number => {
      if (!fs.existsSync(dirPath)) return 0;
      const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.json') && f !== 'all.json');
      return files.reduce((acc, file) => {
        const content = JSON.parse(fs.readFileSync(path.join(dirPath, file), 'utf-8'));
        return acc + (Array.isArray(content) ? content.length : 0);
      }, 0);
    };

    const uesCount = countFilesInDir(path.join(rootDir, 'public', 'data', 'questions'));
    const escalafonCount = countFilesInDir(path.join(rootDir, 'public', 'data', 'escalafon', 'questions'));
    const avanzoCount = countFilesInDir(path.join(rootDir, 'public', 'data', 'avanzo', 'questions'));
    const asdCount = countFilesInDir(path.join(rootDir, 'public', 'data', 'asd', 'questions'));
    const enaCount = countFilesInDir(path.join(rootDir, 'public', 'data', 'ena', 'questions'));
    const anspCount = countFilesInDir(path.join(rootDir, 'public', 'data', 'ansp', 'questions'));

    expect(uesCount).toBe(7500);
    expect(escalafonCount).toBe(3300);
    expect(avanzoCount).toBe(3000);
    expect(asdCount).toBe(2190);
    expect(enaCount).toBe(1400);
    expect(anspCount).toBe(250);

    const totalQuestionsOnDisk =
      uesCount + escalafonCount + avanzoCount + asdCount + enaCount + anspCount;
    expect(totalQuestionsOnDisk).toBe(17640);
  });

  it('certifies 0 occurrences of private phone number "7943 9901" across src/ and public/', () => {
    const textExtensions = new Set(['.ts', '.tsx', '.json', '.js', '.mjs', '.html', '.css', '.md']);
    const directoriesToScan = [path.join(rootDir, 'src'), path.join(rootDir, 'public')];
    const offendingFiles: string[] = [];

    const walk = (dir: string) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(fullPath);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (textExtensions.has(ext)) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            if (content.includes('7943 9901') || content.includes('79439901')) {
              offendingFiles.push(path.relative(rootDir, fullPath));
            }
          }
        }
      }
    };

    directoriesToScan.forEach(walk);
    expect(
      offendingFiles,
      `Private telephone "7943 9901" found in: ${offendingFiles.join(', ')}`
    ).toEqual([]);
  });

  it('certifies official WhatsApp "+503 7657 4463" presence across key platform components', () => {
    // Verified in OnePageSheets
    ONE_PAGE_SHEETS.forEach((sheet) => {
      expect(sheet.latexCode).toContain('7657 4463');
    });

    // Verified in App.tsx
    const appPath = path.join(rootDir, 'src', 'App.tsx');
    const appContent = fs.readFileSync(appPath, 'utf-8');
    expect(appContent).toContain('+503 7657 4463');

    // Verified in HeaderNavbar.tsx
    const headerPath = path.join(rootDir, 'src', 'components', 'HeaderNavbar.tsx');
    const headerContent = fs.readFileSync(headerPath, 'utf-8');
    expect(headerContent).toContain('+503 7657 4463');
  });

  it('certifies heading "Refuerzo Académico (1° a 9° Grado y Bachillerato)" preserves text-white class', () => {
    const academicViewPath = path.join(
      rootDir,
      'src',
      'components',
      'AcademicReinforcementView.tsx'
    );
    expect(fs.existsSync(academicViewPath)).toBe(true);

    const content = fs.readFileSync(academicViewPath, 'utf-8');
    expect(content).toContain('Refuerzo Académico (1° a 9° Grado y Bachillerato)');

    const headingRegex =
      /<h2[^>]*className=["']([^"']*)["'][^>]*>[\s\S]*?Refuerzo Académico \(1° a 9° Grado y Bachillerato\)[\s\S]*?<\/h2>/i;
    const match = content.match(headingRegex);

    expect(
      match,
      'Must contain an <h2> tag enclosing "Refuerzo Académico (1° a 9° Grado y Bachillerato)"'
    ).toBeTruthy();

    const className = match![1];
    const classes = className.split(/\s+/);
    expect(
      classes,
      `The <h2> class must contain "text-white" for accessibility & contrast. Got: "${className}"`
    ).toContain('text-white');
  });
});
