import { describe, it, expect } from 'vitest';
import {
  OLYMPIC_THEMATIC_UNITS,
  OLYMPIC_PROBLEMS_DATA,
  OLYMPIC_DISCIPLINES,
} from '../src/data/jovenesTalentoData';
import { ONE_PAGE_SHEETS } from '../src/data/onePageSheetsData';

describe('Milestone M1 — Jóvenes Talento (MINED - UES) Academic Rigor', () => {
  it('should have exactly 5 Olympic thematic units covering the required disciplines', () => {
    expect(OLYMPIC_THEMATIC_UNITS.length).toBe(5);
    const ids = OLYMPIC_THEMATIC_UNITS.map((u) => u.id);
    expect(ids).toContain('onm-teoria-numeros');
    expect(ids).toContain('onm-combinatoria-palomar');
    expect(ids).toContain('onf-rotacion-momento');
    expect(ids).toContain('onq-termodinamica-gibbs');
    expect(ids).toContain('onb-genetica-grafos-dp');
  });

  it('each of the 5 Olympic units MUST have >= 500 words of substantive theory', () => {
    OLYMPIC_THEMATIC_UNITS.forEach((unit) => {
      const words = unit.substantiveTheory
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0);
      expect(
        words.length,
        `Unit "${unit.title}" (${unit.id}) must have >= 500 words, got ${words.length}`
      ).toBeGreaterThanOrEqual(500);
    });
  });

  it('each of the 5 Olympic units MUST include >= 5 concrete solved proof/problem examples (25 total)', () => {
    let totalSolved = 0;
    OLYMPIC_THEMATIC_UNITS.forEach((unit) => {
      expect(
        unit.solvedExamples.length,
        `Unit "${unit.title}" must have >= 5 solved examples, got ${unit.solvedExamples.length}`
      ).toBeGreaterThanOrEqual(5);
      totalSolved += unit.solvedExamples.length;

      unit.solvedExamples.forEach((ex) => {
        expect(ex.title.length).toBeGreaterThan(5);
        expect(ex.problemStatement.length).toBeGreaterThan(20);
        expect(ex.stepByStepProof.length).toBeGreaterThan(100);
        expect(ex.pedagogicInsight.length).toBeGreaterThan(20);
      });
    });
    expect(totalSolved).toBeGreaterThanOrEqual(25);
  });

  it('each Olympic unit should have key theorems and practice questions', () => {
    OLYMPIC_THEMATIC_UNITS.forEach((unit) => {
      expect(unit.keyTheorems.length).toBeGreaterThanOrEqual(3);
      expect(unit.practiceQuestions.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('preserves existing OLYMPIC_PROBLEMS_DATA and includes all disciplines', () => {
    expect(OLYMPIC_PROBLEMS_DATA.length).toBeGreaterThanOrEqual(5);
    const disciplines = OLYMPIC_DISCIPLINES.map((d) => d.id);
    expect(disciplines).toContain('matematica');
    expect(disciplines).toContain('fisica');
    expect(disciplines).toContain('quimica');
    expect(disciplines).toContain('biologia');
    expect(disciplines).toContain('computacion');
  });
});

describe('Milestone M1 — One-Page Cheat Sheets Institutional Expansion (LaTeX / PDF)', () => {
  it('should have expanded from 4 to exactly 9 institutional cheat sheets', () => {
    expect(ONE_PAGE_SHEETS.length).toBe(9);
    const ids = ONE_PAGE_SHEETS.map((s) => s.id);
    expect(ids).toEqual([
      'avanzo-stem',
      'cauca-aduanas',
      'emergencias-medicas',
      'constitucional-procesal',
      'jovenes-talento-stem',
      'siget-solar',
      'minsal-farmacologia',
      'ssf-aml-compliance',
      'nahuat-pipil-sintaxis',
    ]);
  });

  it('each of the 9 sheets MUST include >= 5 step-by-step solved practical application examples (45 total)', () => {
    let totalSolved = 0;
    ONE_PAGE_SHEETS.forEach((sheet) => {
      expect(
        sheet.solvedPracticeExamples.length,
        `Sheet "${sheet.title}" must have >= 5 solved examples, got ${sheet.solvedPracticeExamples.length}`
      ).toBeGreaterThanOrEqual(5);
      totalSolved += sheet.solvedPracticeExamples.length;

      sheet.solvedPracticeExamples.forEach((ex) => {
        expect(ex.title.length).toBeGreaterThan(5);
        expect(ex.scenario.length).toBeGreaterThan(20);
        expect(ex.stepByStepSolution.length).toBeGreaterThan(40);
        expect(ex.result.length).toBeGreaterThan(3);
      });
    });
    expect(totalSolved).toBeGreaterThanOrEqual(45);
  });

  it('each of the 9 sheets MUST include retention drills with valid correct answers', () => {
    ONE_PAGE_SHEETS.forEach((sheet) => {
      expect(sheet.retentionDrills.length).toBeGreaterThanOrEqual(2);
      sheet.retentionDrills.forEach((drill) => {
        expect(drill.question.length).toBeGreaterThan(15);
        expect(['A', 'B', 'C', 'D']).toContain(drill.correctAnswer);
        expect(drill.options[drill.correctAnswer]).toBeDefined();
        expect(drill.explanation.length).toBeGreaterThan(15);
      });
    });
  });

  it('preserves official WhatsApp +503 7657 4463 in every sheet and contains zero occurrences of 7943 9901', () => {
    ONE_PAGE_SHEETS.forEach((sheet) => {
      expect(sheet.latexCode).toContain('7657 4463');
      expect(sheet.latexCode).not.toContain('7943 9901');
      expect(JSON.stringify(sheet)).not.toContain('7943 9901');
    });
  });

  it('each sheet has 3 structured section boxes with formulas and pitfalls', () => {
    ONE_PAGE_SHEETS.forEach((sheet) => {
      expect(sheet.sections.length).toBe(3);
      sheet.sections.forEach((sec) => {
        expect(sec.title.length).toBeGreaterThan(3);
        expect(sec.formulasOrRules.length).toBeGreaterThanOrEqual(2);
        expect(sec.commonPitfall.length).toBeGreaterThan(10);
      });
    });
  });
});
