import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  RESIDENTADO_THEMATIC_UNITS,
  RESIDENTADO_QUESTIONS,
  RESIDENTADO_SPECIALTIES,
  ResidentadoThematicUnit,
  ResidentadoSolvedCase,
  ResidentadoQuestion,
} from '../src/data/residentadoMedicoData';
import { ResidentadoMedicoView } from '../src/components/ResidentadoMedicoView';

describe('Milestone M3 — Residentado Médico (ENAR) Thematic Units Academic Rigor', () => {
  it('contains exactly 5 specialized thematic units covering core clinical specialties', () => {
    expect(RESIDENTADO_THEMATIC_UNITS.length).toBe(5);
    const specialtyIds = RESIDENTADO_THEMATIC_UNITS.map((u) => u.specialtyId);
    expect(specialtyIds).toContain('medicina_interna');
    expect(specialtyIds).toContain('cirugia_general');
    expect(specialtyIds).toContain('pediatria');
    expect(specialtyIds).toContain('ginecologia_obstetricia');
    expect(specialtyIds).toContain('medicina_familiar');
  });

  it('each of the 5 thematic units MUST have >= 500 words of substantive clinical theory', () => {
    RESIDENTADO_THEMATIC_UNITS.forEach((unit: ResidentadoThematicUnit) => {
      const words = unit.substantiveTheory
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0);

      expect(
        words.length,
        `Unit "${unit.title}" (${unit.id}) must contain >= 500 substantive words, but got ${words.length}`
      ).toBeGreaterThanOrEqual(500);

      expect(unit.title.trim().length).toBeGreaterThan(15);
      expect(unit.specialtyName.trim().length).toBeGreaterThan(5);
    });
  });

  it('each thematic unit includes key official clinical protocols and clinical pearls', () => {
    RESIDENTADO_THEMATIC_UNITS.forEach((unit: ResidentadoThematicUnit) => {
      // Key clinical protocols
      expect(unit.keyClinicalProtocols.length).toBeGreaterThanOrEqual(3);
      unit.keyClinicalProtocols.forEach((proto) => {
        expect(proto.protocolName.trim().length).toBeGreaterThan(5);
        expect(proto.summary.trim().length).toBeGreaterThan(15);
        expect(proto.institution.trim().length).toBeGreaterThan(5);
      });

      // Clinical pearls at the unit level
      expect(unit.clinicalPearls.length).toBeGreaterThanOrEqual(3);
      unit.clinicalPearls.forEach((pearl) => {
        expect(pearl.trim().length).toBeGreaterThan(20);
      });
    });
  });
});

describe('Milestone M3 — Residentado Médico (ENAR) 25 Solved Clinical Cases', () => {
  it('each thematic unit contains >= 5 solved clinical cases, totaling >= 25 cases', () => {
    let totalCases = 0;

    RESIDENTADO_THEMATIC_UNITS.forEach((unit: ResidentadoThematicUnit) => {
      expect(
        unit.solvedClinicalCases.length,
        `Specialty "${unit.specialtyName}" must have >= 5 solved cases, got ${unit.solvedClinicalCases.length}`
      ).toBeGreaterThanOrEqual(5);

      totalCases += unit.solvedClinicalCases.length;
    });

    expect(totalCases).toBeGreaterThanOrEqual(25);
  });

  it('every solved clinical case contains complete clinical and diagnostic fields', () => {
    const allCases = RESIDENTADO_THEMATIC_UNITS.flatMap((u) => u.solvedClinicalCases);
    const seenIds = new Set<string>();

    allCases.forEach((c: ResidentadoSolvedCase) => {
      // Uniqueness
      expect(seenIds.has(c.id)).toBe(false);
      seenIds.add(c.id);

      // Basic case info
      expect(c.title.trim().length).toBeGreaterThan(10);
      expect(c.patientProfile.trim().length).toBeGreaterThan(15);
      expect(c.clinicalPresentation.trim().length).toBeGreaterThan(15);
      expect(c.physicalExam.trim().length).toBeGreaterThan(10);
      expect(c.labAndImagingData.trim().length).toBeGreaterThan(10);
      expect(c.initialVignette.trim().length).toBeGreaterThan(25);

      // Step-by-step diagnostic reasoning
      expect(c.diagnosticReasoning.trim().length).toBeGreaterThan(50);
      if (c.stepByStepReasoning) {
        expect(c.stepByStepReasoning.trim().length).toBeGreaterThan(50);
      }

      // Differential diagnosis with explicit ruling rationale
      expect(c.differentialDiagnosis.length).toBeGreaterThanOrEqual(2);
      c.differentialDiagnosis.forEach((diff) => {
        expect(diff.condition.trim().length).toBeGreaterThan(3);
        expect(diff.rulingRationale.trim().length).toBeGreaterThan(15);
      });

      // Therapeutic and management plan
      expect(c.managementPlan.length).toBeGreaterThanOrEqual(3);
      expect(c.therapeuticPlan.length).toBeGreaterThanOrEqual(3);
      c.managementPlan.forEach((step) => {
        expect(step.trim().length).toBeGreaterThan(10);
      });

      // Clinical pearls and pedagogical rationale
      expect(c.clinicalPearls.length).toBeGreaterThanOrEqual(1);
      expect(c.pedagogicalRationale.trim().length).toBeGreaterThan(15);

      // Official protocol reference
      expect(c.officialProtocolRef.trim().length).toBeGreaterThan(5);
    });
  });

  it('validates authentic Salvadoran hospital protocols in clinical cases', () => {
    const allCasesText = JSON.stringify(
      RESIDENTADO_THEMATIC_UNITS.flatMap((u) => u.solvedClinicalCases)
    );

    // Hospital Nacional Rosales, Hospital Bloom, Maternidad, MINSAL
    expect(allCasesText).toMatch(/Rosales|MINSAL/);
    expect(allCasesText).toMatch(/Bloom|PALS/);
    expect(allCasesText).toMatch(/Zuspan|Sulfato de Magnesio/);
    expect(allCasesText).toMatch(/Código Rojo|Atonía/);
    expect(allCasesText).toMatch(/ATLS|Damage Control|Control de Daños/);
    expect(allCasesText).toMatch(/Nacer con Cariño/);
    expect(allCasesText).toMatch(/HEARTS|Riesgo Cardiovascular/);
    expect(allCasesText).toMatch(/VIGEPES|Aedes/);
  });
});

describe('Milestone M3 — Residentado Médico (ENAR) Question Bank Expansion', () => {
  it('expands the question bank to at least 50 high-yield questions', () => {
    expect(RESIDENTADO_QUESTIONS.length).toBeGreaterThanOrEqual(50);
  });

  it('strictly preserves the original 11 baseline questions', () => {
    const originalIds = [
      'enar-mi-001',
      'enar-mi-002',
      'enar-mi-003',
      'enar-cg-001',
      'enar-cg-002',
      'enar-ped-001',
      'enar-ped-002',
      'enar-go-001',
      'enar-go-002',
      'enar-sp-001',
      'enar-sp-002',
    ];

    const allIds = new Set(RESIDENTADO_QUESTIONS.map((q) => q.id));
    originalIds.forEach((id) => {
      expect(allIds.has(id)).toBe(true);
    });
  });

  it('guarantees structural completeness, options, and distractor rationales across all questions', () => {
    const seenIds = new Set<string>();
    const specialtyCounts: Record<string, number> = {};

    RESIDENTADO_QUESTIONS.forEach((q: ResidentadoQuestion) => {
      // Uniqueness
      expect(seenIds.has(q.id)).toBe(false);
      seenIds.add(q.id);

      // Count per specialty
      specialtyCounts[q.specialty] = (specialtyCounts[q.specialty] || 0) + 1;

      // Required text fields
      expect(q.topic.trim().length).toBeGreaterThan(5);
      expect(q.clinicalVignette.trim().length).toBeGreaterThan(25);
      expect(q.explanation.trim().length).toBeGreaterThan(25);
      expect(q.keyTakeaway.trim().length).toBeGreaterThan(15);
      expect(q.officialReference.trim().length).toBeGreaterThan(5);

      // 4 options A, B, C, D
      expect(q.options.length).toBe(4);
      const optionKeys = q.options.map((o) => o.key).sort();
      expect(optionKeys).toEqual(['A', 'B', 'C', 'D']);
      q.options.forEach((o) => {
        expect(o.text.trim().length).toBeGreaterThan(5);
      });

      // Correct key validity
      expect(['A', 'B', 'C', 'D']).toContain(q.correctKey);

      // Distractor rationales for all incorrect options
      const wrongKeys = ['A', 'B', 'C', 'D'].filter((k) => k !== q.correctKey);
      expect(wrongKeys.length).toBe(3);
      wrongKeys.forEach((wk) => {
        expect(q.distractorRationale[wk]).toBeDefined();
        expect(q.distractorRationale[wk].trim().length).toBeGreaterThan(10);
      });
    });

    // Validates balanced representation across specialties
    expect(specialtyCounts.medicina_interna).toBeGreaterThanOrEqual(5);
    expect(specialtyCounts.cirugia_general).toBeGreaterThanOrEqual(5);
    expect(specialtyCounts.pediatria).toBeGreaterThanOrEqual(5);
    expect(specialtyCounts.ginecologia_obstetricia).toBeGreaterThanOrEqual(5);
    expect(specialtyCounts.salud_publica + (specialtyCounts.medicina_familiar || 0)).toBeGreaterThanOrEqual(5);
  });
});

describe('Milestone M3 — Residentado Médico (ENAR) View Component UI Rendering', () => {
  it('renders ResidentadoMedicoView without error and displays primary tabs', () => {
    const html = renderToStaticMarkup(React.createElement(ResidentadoMedicoView));
    expect(html).toBeDefined();

    // Institutional title
    expect(html).toContain('Examen Nacional de Aspirantes a Residentes Médicos');

    // Primary navigation tabs
    expect(html).toContain('1. Unidades Temáticas');
    expect(html).toContain('2. Casos Clínicos Resueltos');
    expect(html).toContain('3. Simulador ENAR');
  });
});

describe('Milestone M3 — Invariant Security & Platform Integrity', () => {
  it('contains zero occurrences of private contact numbers in medical modules', () => {
    const rawData = JSON.stringify(RESIDENTADO_THEMATIC_UNITS) + JSON.stringify(RESIDENTADO_QUESTIONS);
    expect(rawData).not.toContain('7943 9901');
  });

  it('RESIDENTADO_SPECIALTIES includes all major medical branches', () => {
    const ids = RESIDENTADO_SPECIALTIES.map((s) => s.id);
    expect(ids).toContain('all');
    expect(ids).toContain('medicina_interna');
    expect(ids).toContain('cirugia_general');
    expect(ids).toContain('pediatria');
    expect(ids).toContain('ginecologia_obstetricia');
    expect(ids).toContain('medicina_familiar');
    expect(ids).toContain('salud_publica');
  });
});
