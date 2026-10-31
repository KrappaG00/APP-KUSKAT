import { describe, it, expect } from 'vitest';
import {
  ORAL_LITIGATION_THEMATIC_UNITS,
  OBJECTION_DEFINITIONS,
  COURTROOM_DRILLS,
  ObjectionType,
  OralLitigationThematicUnit,
} from '../src/data/oralLitigationData';
import {
  CONSTITUTION_LAW_BRANCHES,
  CONSTITUTIONAL_CASES,
  AMPARO_STEP_GUIDE,
  HABEAS_CORPUS_STEP_GUIDE,
  INCONSTITUCIONALIDAD_STEP_GUIDE,
  AMPARO_RESOLVED_WORKSHOP_CASE,
  HABEAS_CORPUS_RESOLVED_WORKSHOP_CASE,
  INCONSTITUCIONALIDAD_RESOLVED_WORKSHOP_CASE,
  LawBranch,
} from '../src/data/constitucionalJurisprudenciaData';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';

describe('Milestone M2 — Simulador de Litigación Oral Penal (oralLitigationData)', () => {
  it('preserves all 8 existing OBJECTION_DEFINITIONS with valid PrPn legal basis', () => {
    const expectedTypes: ObjectionType[] = [
      'SUGESTIVA',
      'CAPCIOSA',
      'IMPERTINENTE',
      'COMPUESTA',
      'CONCLUSIVA',
      'REPETITIVA',
      'ESPECULATIVA',
      'VALIDA',
    ];

    expect(Object.keys(OBJECTION_DEFINITIONS).length).toBe(8);
    expectedTypes.forEach((type) => {
      const def = OBJECTION_DEFINITIONS[type];
      expect(def).toBeDefined();
      expect(def.type).toBe(type);
      expect(def.label.trim().length).toBeGreaterThan(5);
      expect(def.legalBasis.trim().length).toBeGreaterThan(5);
      expect(def.description.trim().length).toBeGreaterThan(15);
      expect(def.whenAllowed.trim().length).toBeGreaterThan(15);
    });
  });

  it('preserves all 10 rapid-response COURTROOM_DRILLS intact with proper keys and rulings', () => {
    expect(COURTROOM_DRILLS.length).toBe(10);
    const ids = COURTROOM_DRILLS.map((d) => d.id);
    expect(new Set(ids).size).toBe(10);

    for (let i = 1; i <= 10; i++) {
      const expectedId = `drill-${i.toString().padStart(3, '0')}`;
      expect(ids).toContain(expectedId);
    }

    COURTROOM_DRILLS.forEach((drill) => {
      expect(drill.caseTitle.trim().length).toBeGreaterThan(10);
      expect(drill.tribunal.trim().length).toBeGreaterThan(5);
      expect(['Interrogatorio Directo', 'Contrainterrogatorio', 'Re-directo']).toContain(drill.phase);
      expect(drill.questionUttered.trim().length).toBeGreaterThan(10);
      expect(OBJECTION_DEFINITIONS[drill.correctObjection]).toBeDefined();
      expect(['HA LUGAR', 'NO HA LUGAR']).toContain(drill.judgeRuling);
      expect(drill.judicialRationale.trim().length).toBeGreaterThan(20);
      expect(drill.salvadoranJurisprudence.trim().length).toBeGreaterThan(15);
    });
  });

  it('contains exactly 5 litigation thematic units covering core criminal trial phases', () => {
    expect(ORAL_LITIGATION_THEMATIC_UNITS.length).toBe(5);
    const ids = ORAL_LITIGATION_THEMATIC_UNITS.map((u) => u.id);
    expect(ids).toEqual([
      'unit-oral-01',
      'unit-oral-02',
      'unit-oral-03',
      'unit-oral-04',
      'unit-oral-05',
    ]);
  });

  it('each of the 5 litigation units contains >= 500 words of substantive procedural theory', () => {
    ORAL_LITIGATION_THEMATIC_UNITS.forEach((unit: OralLitigationThematicUnit) => {
      const words = unit.substantiveTheory
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0);

      expect(
        words.length,
        `Unit ${unit.id} (${unit.title}) must have >= 500 words, got ${words.length}`
      ).toBeGreaterThanOrEqual(500);

      expect(unit.legalFramework.length).toBeGreaterThanOrEqual(3);
      expect(unit.proceduralTechniques.length).toBeGreaterThanOrEqual(4);
    });
  });

  it('each of the 5 litigation units contains >= 5 step-by-step solved courtroom dialogue cases (25 total)', () => {
    let totalSolved = 0;
    ORAL_LITIGATION_THEMATIC_UNITS.forEach((unit: OralLitigationThematicUnit) => {
      expect(
        unit.solvedCases.length,
        `Unit ${unit.id} must have >= 5 solved cases, got ${unit.solvedCases.length}`
      ).toBeGreaterThanOrEqual(5);

      totalSolved += unit.solvedCases.length;

      unit.solvedCases.forEach((sc) => {
        expect(sc.id.trim().length).toBeGreaterThan(3);
        expect(sc.title.trim().length).toBeGreaterThan(5);
        expect(sc.tribunal.trim().length).toBeGreaterThan(5);
        expect(sc.crimeCharge.trim().length).toBeGreaterThan(5);
        expect(sc.proceduralPhase.trim().length).toBeGreaterThan(5);
        expect(sc.scenarioDescription.trim().length).toBeGreaterThan(20);

        // Dialogue incident structure
        const inc = sc.dialogueIncident;
        expect(inc).toBeDefined();
        expect(inc.dialogue.length).toBeGreaterThanOrEqual(3);
        inc.dialogue.forEach((turn) => {
          expect(['Fiscal', 'Defensa', 'Juez', 'Testigo', 'Perito', 'Secretario']).toContain(turn.speaker);
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
});

describe('Milestone M2 — Casoteca Constitucional & 10 Ramas del Derecho (constitucionalJurisprudenciaData)', () => {
  it('preserves all 10 landmark CSJ constitutional cases', () => {
    expect(CONSTITUTIONAL_CASES.length).toBe(10);
    const ids = CONSTITUTIONAL_CASES.map((c) => c.id);
    expect(new Set(ids).size).toBe(10);

    CONSTITUTIONAL_CASES.forEach((c) => {
      expect(c.refNumber.trim().length).toBeGreaterThan(4);
      expect(c.factsSummary.trim().length).toBeGreaterThan(40);
      expect(c.ratioDecidendi.trim().length).toBeGreaterThan(50);
      expect(c.legalQuiz.options.length).toBe(4);
    });
  });

  it('preserves all 5 Amparo procedural steps in AMPARO_STEP_GUIDE', () => {
    expect(AMPARO_STEP_GUIDE.length).toBe(5);
    AMPARO_STEP_GUIDE.forEach((step, idx) => {
      expect(step.stepNumber).toBe(idx + 1);
      expect(step.title.trim().length).toBeGreaterThan(5);
      expect(step.legalRequirement.trim().length).toBeGreaterThan(10);
      expect(step.practicalGuidance.trim().length).toBeGreaterThan(20);
      expect(step.commonMistakes.trim().length).toBeGreaterThan(15);
      expect(step.modelSnippet.trim().length).toBeGreaterThan(20);
    });
  });

  it('provides complete procedural step guides and resolved workshop cases for Hábeas Corpus and Inconstitucionalidad', () => {
    expect(HABEAS_CORPUS_STEP_GUIDE.length).toBeGreaterThanOrEqual(4);
    HABEAS_CORPUS_STEP_GUIDE.forEach((step, idx) => {
      expect(step.stepNumber).toBe(idx + 1);
      expect(step.title.trim().length).toBeGreaterThan(5);
      expect(step.modelSnippet.trim().length).toBeGreaterThan(15);
    });

    expect(INCONSTITUCIONALIDAD_STEP_GUIDE.length).toBeGreaterThanOrEqual(4);
    INCONSTITUCIONALIDAD_STEP_GUIDE.forEach((step, idx) => {
      expect(step.stepNumber).toBe(idx + 1);
      expect(step.title.trim().length).toBeGreaterThan(5);
      expect(step.modelSnippet.trim().length).toBeGreaterThan(15);
    });

    // Resolved workshop cases
    expect(AMPARO_RESOLVED_WORKSHOP_CASE.proceduralStages.length).toBe(4);
    expect(HABEAS_CORPUS_RESOLVED_WORKSHOP_CASE.proceduralStages.length).toBe(4);
    expect(INCONSTITUCIONALIDAD_RESOLVED_WORKSHOP_CASE.proceduralStages.length).toBe(4);
  });

  it('contains exactly 10 branches of Salvadoran law covering both public and private domains', () => {
    expect(CONSTITUTION_LAW_BRANCHES.length).toBe(10);
    const branchIds = CONSTITUTION_LAW_BRANCHES.map((b) => b.id);
    const expectedIds = [
      'constitucional',
      'penal',
      'procesal',
      'administrativo',
      'tributario',
      'internacional-publico',
      'civil',
      'mercantil',
      'laboral',
      'familia',
    ];
    expect(branchIds).toEqual(expectedIds);

    const publicBranches = CONSTITUTION_LAW_BRANCHES.filter((b) => b.type === 'publico');
    const privateBranches = CONSTITUTION_LAW_BRANCHES.filter((b) => b.type === 'privado');
    expect(publicBranches.length).toBe(6);
    expect(privateBranches.length).toBe(4);
  });

  it('each of the 10 law branches MUST have >= 500 words of substantive doctrinal and statutory analysis', () => {
    CONSTITUTION_LAW_BRANCHES.forEach((branch: LawBranch) => {
      // Substantive text in substantiveAnalysis
      const words = branch.substantiveAnalysis
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0);

      expect(
        words.length,
        `Branch "${branch.name}" (${branch.id}) must have >= 500 words, got ${words.length}`
      ).toBeGreaterThanOrEqual(500);

      expect(branch.doctrinalBasis.trim().length).toBeGreaterThan(20);
      expect(branch.entries.length).toBeGreaterThanOrEqual(2);

      branch.entries.forEach((entry) => {
        expect(entry.articleRef.trim().length).toBeGreaterThan(3);
        expect(entry.literalText.trim().length).toBeGreaterThan(15);
        expect(entry.simplifiedText.trim().length).toBeGreaterThan(15);
        expect(entry.analyticalCommentary.trim().length).toBeGreaterThan(15);
      });
    });
  });

  it('each of the 10 law branches MUST include >= 5 concrete solved jurisprudence cases (50 total)', () => {
    let totalSolved = 0;
    CONSTITUTION_LAW_BRANCHES.forEach((branch: LawBranch) => {
      expect(
        branch.solvedCases.length,
        `Branch "${branch.name}" (${branch.id}) must have >= 5 solved cases, got ${branch.solvedCases.length}`
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
});

describe('Milestone M2 — Cross-Module Platform Invariant Preservation', () => {
  it('certifies exactly 200 Notary questions remain intact with IDs not-01 to not-200', () => {
    expect(NOTARY_EXAM_QUESTIONS.length).toBe(200);
    const ids = NOTARY_EXAM_QUESTIONS.map((q) => q.id);
    expect(new Set(ids).size).toBe(200);
    for (let i = 1; i <= 200; i++) {
      const expectedId = i < 100 ? `not-${i.toString().padStart(2, '0')}` : `not-${i}`;
      expect(ids).toContain(expectedId);
    }
  });

  it('zero occurrences of private contact numbers in M2 data structures', () => {
    const rawLitigation = JSON.stringify(ORAL_LITIGATION_THEMATIC_UNITS) + JSON.stringify(COURTROOM_DRILLS);
    const rawConstitution = JSON.stringify(CONSTITUTION_LAW_BRANCHES) + JSON.stringify(CONSTITUTIONAL_CASES);

    expect(rawLitigation).not.toContain('7943 9901');
    expect(rawConstitution).not.toContain('7943 9901');
  });
});
