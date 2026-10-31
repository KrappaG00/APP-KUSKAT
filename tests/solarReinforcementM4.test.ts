import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  SIGET_THEMATIC_UNITS,
  SIGET_SOLAR_QUESTIONS,
  SIGET_SECTORS,
  SOLAR_INTERCONNECTION_CHECKLIST,
  SigetThematicUnit,
  SolvedEngineeringCalculation,
  SigetSolarQuestion,
} from '../src/data/sigetSolarData';
import { SigetSolarView } from '../src/components/SigetSolarView';

describe('Milestone M4 — Técnico Solar & Normativa SIGET Thematic Units', () => {
  it('should define and export exactly 5 thematic engineering units', () => {
    expect(SIGET_THEMATIC_UNITS).toBeDefined();
    expect(SIGET_THEMATIC_UNITS.length).toBe(5);

    const expectedUnitIds = [
      'unit-1-ntcogd-medicion-neta',
      'unit-2-nec-690-protecciones-dc',
      'unit-3-electricistas-siget-categorias',
      'unit-4-offgrid-almacenamiento-baterias',
      'unit-5-puesta-tierra-seguridad-ieee1547',
    ];

    const actualIds = SIGET_THEMATIC_UNITS.map((u) => u.id);
    expectedUnitIds.forEach((id) => {
      expect(actualIds).toContain(id);
    });

    SIGET_THEMATIC_UNITS.forEach((unit, idx) => {
      expect(unit.unitNumber).toBe(idx + 1);
      expect(unit.title.trim().length).toBeGreaterThan(15);
      expect(unit.shortDescription.trim().length).toBeGreaterThan(20);
      expect([
        'normativa-gd',
        'nec-690',
        'electricistas-siget',
        'seguridad-operativa',
      ]).toContain(unit.normativeCategory);
    });
  });

  it('each of the 5 units MUST contain >= 500 substantive words of engineering theory and physics', () => {
    SIGET_THEMATIC_UNITS.forEach((unit) => {
      const words = unit.substantiveTheory
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0);

      expect(
        words.length,
        `Unit ${unit.unitNumber} (${unit.id}) must have >= 500 substantive words, but found ${words.length}`
      ).toBeGreaterThanOrEqual(500);

      // Verify that the theory contains technical engineering concepts
      expect(unit.substantiveTheory).toMatch(/SIGET|NTCOGD|inversor|tensión|corriente|fotovoltaic/i);
    });
  });

  it('each of the 5 units MUST list specific regulatory references (SIGET, NEC, IEEE, distribuidoras)', () => {
    SIGET_THEMATIC_UNITS.forEach((unit) => {
      expect(
        unit.keyRegulatoryReferences.length,
        `Unit ${unit.id} must have >= 3 regulatory references`
      ).toBeGreaterThanOrEqual(3);

      unit.keyRegulatoryReferences.forEach((ref) => {
        expect(ref.trim().length).toBeGreaterThan(15);
      });
    });
  });
});

describe('Milestone M4 — 25 Solved Engineering Design Calculations', () => {
  it('each of the 5 units MUST have >= 5 step-by-step solved design calculations (25 total)', () => {
    let totalCalculations = 0;

    SIGET_THEMATIC_UNITS.forEach((unit) => {
      expect(
        unit.solvedCalculations.length,
        `Unit ${unit.id} must have >= 5 solved calculations, found ${unit.solvedCalculations.length}`
      ).toBeGreaterThanOrEqual(5);

      totalCalculations += unit.solvedCalculations.length;

      unit.solvedCalculations.forEach((calc) => {
        expect(calc.id.trim().length).toBeGreaterThan(5);
        expect(calc.title.trim().length).toBeGreaterThan(10);
        expect(calc.unitId).toBe(unit.id);
        expect(calc.problemStatement.trim().length).toBeGreaterThan(40);
        expect(Object.keys(calc.designParameters).length).toBeGreaterThanOrEqual(2);
        expect(calc.engineeringFormulas.length).toBeGreaterThanOrEqual(1);
        expect(calc.stepByStepSubstitution.trim().length).toBeGreaterThan(50);
        expect(calc.numericalResult.trim().length).toBeGreaterThan(3);
        expect(calc.practicalEngineeringJudgment.trim().length).toBeGreaterThan(20);
      });
    });

    expect(totalCalculations).toBeGreaterThanOrEqual(25);
  });

  it('calculations must be contextualized in Salvadoran geography and distribution companies', () => {
    const allCalculations = SIGET_THEMATIC_UNITS.flatMap((u) => u.solvedCalculations);
    const combinedProse = allCalculations
      .map((c) => `${c.problemStatement} ${c.practicalEngineeringJudgment}`)
      .join(' ');

    // Check references to Salvadoran entities and departments
    expect(combinedProse).toMatch(/DELSUR|CAESS|CLESA/);
    expect(combinedProse).toMatch(/Santa Tecla|San Salvador|Santa Ana|San Miguel|Sonsonate|Morazán|Ahuachapán/);
  });
});

describe('Milestone M4 — Question Bank Expansion (>= 50 High-Yield Questions)', () => {
  it('SIGET_SOLAR_QUESTIONS MUST contain >= 50 questions covering all 4 categories', () => {
    expect(SIGET_SOLAR_QUESTIONS.length).toBeGreaterThanOrEqual(50);

    const categoryMap: Record<string, number> = {};
    SIGET_SOLAR_QUESTIONS.forEach((q) => {
      categoryMap[q.category] = (categoryMap[q.category] || 0) + 1;
    });

    const expectedCategories = [
      'normativa-gd',
      'nec-690',
      'electricistas-siget',
      'seguridad-operativa',
    ];

    expectedCategories.forEach((cat) => {
      expect(
        categoryMap[cat],
        `Category "${cat}" must have at least 10 questions, found ${categoryMap[cat] || 0}`
      ).toBeGreaterThanOrEqual(10);
    });
  });

  it('preserves the original 15 base questions with exact IDs (siget-01 to siget-15)', () => {
    const actualIds = SIGET_SOLAR_QUESTIONS.map((q) => q.id);
    for (let i = 1; i <= 15; i++) {
      const expectedId = `siget-${i.toString().padStart(2, '0')}`;
      expect(actualIds).toContain(expectedId);
    }
  });

  it('every question must have statement, 4 distinct options, valid answer, explanation, technical basis and complete distractor rationales', () => {
    SIGET_SOLAR_QUESTIONS.forEach((q) => {
      expect(q.id.trim().length).toBeGreaterThan(3);
      expect(q.statement.trim().length).toBeGreaterThan(20);
      expect(q.options.A.trim().length).toBeGreaterThan(2);
      expect(q.options.B.trim().length).toBeGreaterThan(2);
      expect(q.options.C.trim().length).toBeGreaterThan(2);
      expect(q.options.D.trim().length).toBeGreaterThan(2);

      // Verify options are distinct
      const optionTexts = [q.options.A, q.options.B, q.options.C, q.options.D];
      expect(new Set(optionTexts).size).toBe(4);

      // Valid answer
      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

      // Explanations
      expect(q.explanation.trim().length).toBeGreaterThan(20);
      expect(q.technicalBasis.trim().length).toBeGreaterThan(5);

      // Distractor rationales for options
      expect(q.distractorRationale).toBeDefined();
      expect(q.distractorRationale.A?.trim().length).toBeGreaterThan(5);
      expect(q.distractorRationale.B?.trim().length).toBeGreaterThan(5);
      expect(q.distractorRationale.C?.trim().length).toBeGreaterThan(5);
      expect(q.distractorRationale.D?.trim().length).toBeGreaterThan(5);
    });
  });
});

describe('Milestone M4 — UI Component Rendering and Invariants', () => {
  it('SigetSolarView renders to static markup without throwing exceptions', () => {
    expect(() => {
      const html = renderToStaticMarkup(React.createElement(SigetSolarView));
      expect(html).toContain('Ingeniería Solar Fotovoltaica');
      expect(html).toContain('Unidades Técnicas &amp; Normativa');
      expect(html).toContain('Memorias de Cálculo');
      expect(html).toContain('Simulador de Acreditación');
    }).not.toThrow();
  });

  it('preserves existing interface contracts, checklists and sector categories', () => {
    expect(SIGET_SECTORS.length).toBe(5);
    expect(SOLAR_INTERCONNECTION_CHECKLIST.length).toBe(5);
  });

  it('contains zero occurrences of private contact numbers in solar data files', () => {
    const rawData =
      JSON.stringify(SIGET_THEMATIC_UNITS) +
      JSON.stringify(SIGET_SOLAR_QUESTIONS) +
      JSON.stringify(SOLAR_INTERCONNECTION_CHECKLIST);

    expect(rawData).not.toContain('7943 9901');
  });
});
