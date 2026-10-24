import { describe, it, expect } from 'vitest';
import { CSSP_QUESTIONS_DATA, CSSP_JUNTAS, CsspQuestion } from '../src/data/csspHealthData';
import { BRANCHING_CLINICAL_CASES, BranchingCaseScenario, VitalSigns } from '../src/data/residentadoBranchingCases';

describe('CHALLENGER STRESS HARNESS: CSSP 200 Questions & Regulatory Rigor', () => {
  it('CSSP-01: Exactly 200 questions, strictly 40 per each of the 5 Juntas', () => {
    expect(CSSP_QUESTIONS_DATA).toHaveLength(200);
    expect(CSSP_JUNTAS).toHaveLength(5);

    const expectedJuntaIds = ['jvpm', 'jvpo', 'jvpe', 'jvpqf', 'jvpps'];
    const juntaCounts: Record<string, number> = {
      jvpm: 0,
      jvpo: 0,
      jvpe: 0,
      jvpqf: 0,
      jvpps: 0,
    };

    CSSP_QUESTIONS_DATA.forEach((q) => {
      expect(expectedJuntaIds).toContain(q.juntaId);
      juntaCounts[q.juntaId] += 1;
    });

    expectedJuntaIds.forEach((id) => {
      expect(juntaCounts[id], `Junta ${id} must have exactly 40 questions`).toBe(40);
    });
  });

  it('CSSP-02: IDs follow strictly formatted sequential naming conventions and are unique', () => {
    const idSet = new Set<string>();
    const expectedPrefixes = ['cssp-jvpm-', 'cssp-jvpo-', 'cssp-jvpe-', 'cssp-jvpqf-', 'cssp-jvpps-'];

    CSSP_QUESTIONS_DATA.forEach((q) => {
      expect(idSet.has(q.id), `Duplicate ID found: ${q.id}`).toBe(false);
      idSet.add(q.id);

      const hasValidPrefix = expectedPrefixes.some((prefix) => q.id.startsWith(prefix));
      expect(hasValidPrefix, `ID ${q.id} must start with expected prefix`).toBe(true);

      const numPart = parseInt(q.id.split('-').pop() || '', 10);
      expect(numPart).toBeGreaterThanOrEqual(1);
      expect(numPart).toBeLessThanOrEqual(40);
    });
  });

  it('CSSP-03: Every question has exactly 4 options (A, B, C, D) with non-trivial length and no duplicates', () => {
    CSSP_QUESTIONS_DATA.forEach((q) => {
      const optionKeys = Object.keys(q.options).sort();
      expect(optionKeys).toEqual(['A', 'B', 'C', 'D']);

      const optionTexts = Object.values(q.options).map((t) => t.trim());
      optionTexts.forEach((text, idx) => {
        expect(text.length, `Option ${optionKeys[idx]} in ${q.id} is too short`).toBeGreaterThanOrEqual(5);
      });

      // No duplicate options in the same question
      const uniqueOptionTexts = new Set(optionTexts.map((t) => t.toLowerCase()));
      expect(uniqueOptionTexts.size, `Question ${q.id} has duplicate option texts`).toBe(4);
    });
  });

  it('CSSP-04: correctAnswer must be one of A, B, C, D and strictly exist in options', () => {
    CSSP_QUESTIONS_DATA.forEach((q) => {
      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);
      expect(q.options[q.correctAnswer]).toBeDefined();
      expect(q.options[q.correctAnswer].trim().length).toBeGreaterThan(0);
    });
  });

  it('CSSP-05: distractorRationale completeness — all 3 incorrect options must have substantive justifications', () => {
    CSSP_QUESTIONS_DATA.forEach((q) => {
      const incorrectKeys = ['A', 'B', 'C', 'D'].filter((k) => k !== q.correctAnswer);
      expect(incorrectKeys).toHaveLength(3);

      incorrectKeys.forEach((key) => {
        const rationale = q.distractorRationale[key];
        expect(rationale, `Question ${q.id} missing distractorRationale for key ${key}`).toBeDefined();
        expect(
          typeof rationale === 'string' && rationale.trim().length >= 10,
          `Question ${q.id} distractorRationale for key ${key} is empty or trivial`
        ).toBe(true);
      });

      // Distractor rationales should NOT define an entry for the correct answer
      expect(
        q.distractorRationale[q.correctAnswer],
        `Question ${q.id} includes distractorRationale for the CORRECT answer ${q.correctAnswer}`
      ).toBeUndefined();
    });
  });

  it('CSSP-06: Non-empty, highly specific Salvadoran legal citations across all questions', () => {
    CSSP_QUESTIONS_DATA.forEach((q) => {
      expect(q.legalBasis.trim().length, `Question ${q.id} has insufficient legalBasis`).toBeGreaterThanOrEqual(15);
      // Verify mention of legal keywords
      const legalText = q.legalBasis.toLowerCase();
      const hasLegalTerm =
        legalText.includes('art') ||
        legalText.includes('ley') ||
        legalText.includes('código') ||
        legalText.includes('codigo') ||
        legalText.includes('reglamento') ||
        legalText.includes('norma') ||
        legalText.includes('manual') ||
        legalText.includes('guía') ||
        legalText.includes('guia') ||
        legalText.includes('rts');
      expect(hasLegalTerm, `Question ${q.id} legalBasis lacks statutory reference`).toBe(true);
    });
  });

  it('CSSP-07: Mandatory topic coverage (Bioética, Consentimiento, Farmacovigilancia, BPD, Crecer Juntos Art. 16)', () => {
    const combinedCorpus = CSSP_QUESTIONS_DATA.map(
      (q) => `${q.statement} ${q.explanation} ${q.legalBasis} ${Object.values(q.options).join(' ')}`
    ).join(' ');

    // 1. Bioética y Consentimiento Informado
    expect(combinedCorpus).toMatch(/bioética|bioetica/i);
    expect(combinedCorpus).toMatch(/consentimiento informado/i);

    // 2. Farmacovigilancia
    expect(combinedCorpus).toMatch(/farmacovigilancia/i);
    expect(combinedCorpus).toMatch(/dnm|dirección nacional de medicamentos/i);
    expect(combinedCorpus).toMatch(/cnfv/i);

    // 3. Buenas Prácticas de Dispensación (BPD) y Almacenamiento (BPA)
    expect(combinedCorpus).toMatch(/buenas prácticas|bpd|bpa/i);

    // 4. Deber legal de denuncia & Ley Crecer Juntos Art. 16
    expect(combinedCorpus).toMatch(/ley crecer juntos/i);
    expect(combinedCorpus).toMatch(/art\.\s*16/i);
    expect(combinedCorpus).toMatch(/denuncia|deber legal/i);
  });
});

describe('CHALLENGER STRESS HARNESS: Residentado 4 Branching Scenarios Graph & Simulation', () => {
  it('RES-01: Exactly 4 cases matching the 4 major medical trunks', () => {
    expect(BRANCHING_CLINICAL_CASES).toHaveLength(4);
    const expectedTrunks = ['Medicina Interna', 'Pediatría', 'Gineco-Obstetricia', 'Cirugía'];
    const observedTrunks = BRANCHING_CLINICAL_CASES.map((c) => c.specialty);
    expect(observedTrunks).toEqual(expectedTrunks);
  });

  it('RES-02: Every case has at least 3 stages with sequential numbering starting at 1', () => {
    BRANCHING_CLINICAL_CASES.forEach((c) => {
      expect(c.stages.length, `Case ${c.id} must have >= 3 stages`).toBeGreaterThanOrEqual(3);
      c.stages.forEach((st, idx) => {
        expect(st.stageNumber, `Case ${c.id} stage index ${idx} stageNumber mismatch`).toBe(idx + 1);
        expect(st.stageTitle.trim().length).toBeGreaterThan(5);
        expect(st.narrative.trim().length).toBeGreaterThan(20);
      });
    });
  });

  it('RES-03: Every stage has at least 2 options and EXACTLY 1 isOptimal: true option (all others false)', () => {
    BRANCHING_CLINICAL_CASES.forEach((c) => {
      c.stages.forEach((st) => {
        expect(st.options.length, `Stage ${st.id} in case ${c.id} must have >= 2 options`).toBeGreaterThanOrEqual(2);

        const optimalOptions = st.options.filter((o) => o.isOptimal === true);
        const subOptimalOptions = st.options.filter((o) => o.isOptimal === false);

        expect(optimalOptions.length, `Stage ${st.id} in case ${c.id} must have EXACTLY 1 optimal choice`).toBe(1);
        expect(
          subOptimalOptions.length,
          `Stage ${st.id} in case ${c.id} all non-optimal choices must have isOptimal: false`
        ).toBe(st.options.length - 1);

        // Check for duplicate actions or IDs within the same stage
        const actionTexts = st.options.map((o) => o.action.trim().toLowerCase());
        const uniqueActions = new Set(actionTexts);
        expect(uniqueActions.size, `Duplicate actions in stage ${st.id}`).toBe(st.options.length);

        const optionIds = st.options.map((o) => o.id);
        const uniqueOptionIds = new Set(optionIds);
        expect(uniqueOptionIds.size, `Duplicate option IDs in stage ${st.id}`).toBe(st.options.length);
      });
    });
  });

  it('RES-04: Full graph navigation simulation from Stage 1 through Stage 3 across ALL possible decision paths', () => {
    BRANCHING_CLINICAL_CASES.forEach((c) => {
      // Generate all combinatorial paths: e.g. Stage 1 (2-3 options) x Stage 2 (2 options) x Stage 3 (2 options)
      const stageOptionCounts = c.stages.map((st) => st.options.length);
      const totalPaths = stageOptionCounts.reduce((acc, count) => acc * count, 1);
      expect(totalPaths).toBeGreaterThanOrEqual(8); // at least 2x2x2 = 8 paths

      function getCombinations(stageIndex: number): number[][] {
        if (stageIndex === c.stages.length) return [[]];
        const nextCombinations = getCombinations(stageIndex + 1);
        const currentCount = c.stages[stageIndex].options.length;
        const result: number[][] = [];
        for (let i = 0; i < currentCount; i++) {
          for (const next of nextCombinations) {
            result.push([i, ...next]);
          }
        }
        return result;
      }

      const allPaths = getCombinations(0);
      expect(allPaths).toHaveLength(totalPaths);

      // Simulate each path
      allPaths.forEach((path) => {
        let simVitals: VitalSigns = { ...c.initialVitals };
        let stageIdx = 0;
        let isFinished = false;

        path.forEach((choiceIdx, stIdx) => {
          expect(stageIdx).toBe(stIdx);
          const stage = c.stages[stageIdx];
          const chosenOpt = stage.options[choiceIdx];
          expect(chosenOpt).toBeDefined();

          // Apply vital impact
          simVitals = {
            ...simVitals,
            ...chosenOpt.vitalImpact,
          };

          // Advance stage
          if (stageIdx + 1 < c.stages.length) {
            stageIdx++;
          } else {
            isFinished = true;
          }
        });

        expect(isFinished).toBe(true);
        expect(stageIdx).toBe(c.stages.length - 1);
      });
    });
  });

  it('RES-05: vitalImpact mathematical validity and clinical bounds checking', () => {
    const bpRegex = /^\d{1,3}\/\d{1,3}$/;

    BRANCHING_CLINICAL_CASES.forEach((c) => {
      // Validate initial vitals
      expect(c.initialVitals.bp, `Invalid initial BP ${c.initialVitals.bp} in ${c.id}`).toMatch(bpRegex);
      expect(c.initialVitals.hr).toBeGreaterThanOrEqual(0);
      expect(c.initialVitals.hr).toBeLessThanOrEqual(250);
      expect(c.initialVitals.rr).toBeGreaterThanOrEqual(0);
      expect(c.initialVitals.rr).toBeLessThanOrEqual(100);
      expect(c.initialVitals.spo2).toBeGreaterThanOrEqual(0);
      expect(c.initialVitals.spo2).toBeLessThanOrEqual(100);
      expect(c.initialVitals.temp).toBeGreaterThanOrEqual(30.0);
      expect(c.initialVitals.temp).toBeLessThanOrEqual(43.0);
      if (c.initialVitals.glasgow !== undefined) {
        expect(c.initialVitals.glasgow).toBeGreaterThanOrEqual(3);
        expect(c.initialVitals.glasgow).toBeLessThanOrEqual(15);
      }

      // Check all option vitalImpacts
      c.stages.forEach((st) => {
        // Stage baseline vitals check
        expect(st.vitals.bp).toMatch(bpRegex);

        st.options.forEach((opt) => {
          const impact = opt.vitalImpact;

          if (impact.bp !== undefined) {
            expect(impact.bp, `Option ${opt.id} has invalid BP format ${impact.bp}`).toMatch(bpRegex);
            const [sys, dia] = impact.bp.split('/').map(Number);
            expect(Number.isFinite(sys)).toBe(true);
            expect(Number.isFinite(dia)).toBe(true);
            expect(sys).toBeGreaterThanOrEqual(0);
            expect(dia).toBeGreaterThanOrEqual(0);
            if (sys > 0 || dia > 0) {
              expect(sys, `Systolic should be >= diastolic in option ${opt.id}`).toBeGreaterThanOrEqual(dia);
            }
          }

          if (impact.hr !== undefined) {
            expect(impact.hr).toBeGreaterThanOrEqual(0);
            expect(impact.hr).toBeLessThanOrEqual(250);
          }

          if (impact.rr !== undefined) {
            expect(impact.rr).toBeGreaterThanOrEqual(0);
            expect(impact.rr).toBeLessThanOrEqual(100);
          }

          if (impact.spo2 !== undefined) {
            expect(impact.spo2).toBeGreaterThanOrEqual(0);
            expect(impact.spo2).toBeLessThanOrEqual(100);
          }

          if (impact.temp !== undefined) {
            expect(impact.temp).toBeGreaterThanOrEqual(30.0);
            expect(impact.temp).toBeLessThanOrEqual(43.0);
          }

          if (impact.glasgow !== undefined) {
            expect(impact.glasgow).toBeGreaterThanOrEqual(3);
            expect(impact.glasgow).toBeLessThanOrEqual(15);
          }
        });
      });
    });
  });

  it('RES-06: Strict Clinical Guideline Verification for Caso 3 (Gineco-Obstetricia: Código Naranja)', () => {
    const obGynCase = BRANCHING_CLINICAL_CASES.find((c) => c.specialty === 'Gineco-Obstetricia');
    expect(obGynCase).toBeDefined();

    const caseString = JSON.stringify(obGynCase);

    // 1. Zuspan infusion: Magnesium sulfate 20%, 4g load in 15-20 min, infusion 1-2 g/h
    expect(caseString).toContain('Zuspan');
    expect(caseString).toMatch(/Sulfato de Magnesio al 20%|sulfato de magnesio/i);
    expect(caseString).toMatch(/4\s*g/);
    expect(caseString).toMatch(/15-20\s*min/);
    expect(caseString).toMatch(/1-2\s*g\/h/);

    // 2. Monitoring: rotulianos (patellar reflexes), FR >= 12 rpm, diuresis > 30 mL/h
    expect(caseString).toMatch(/rotulianos/i);
    expect(caseString).toMatch(/FR\s*>=\s*12|12\s*rpm/i);
    expect(caseString).toMatch(/diuresis\s*>\s*30|30\s*mL\/h/i);

    // 3. Antidote: Calcium Gluconate 10% (1g IV in 3-5 min)
    expect(caseString).toMatch(/Gluconato de Calcio al 10%/i);
    expect(caseString).toMatch(/1\s*g/);
    expect(caseString).toMatch(/3-5\s*min/);

    // 4. Antihypertensive: Labetalol or Hidralazina
    expect(caseString).toMatch(/Labetalol/i);
    expect(caseString).toMatch(/Hidralazina/i);
    expect(caseString).toMatch(/140-150/); // target systolic
    expect(caseString).toMatch(/90-100/);  // target diastolic

    // 5. Interrupción del embarazo (cesárea de urgencia)
    expect(caseString).toMatch(/interrupción.*embarazo|cesárea de urgencia/i);
  });

  it('RES-07: Strict Clinical Guideline Verification for Caso 4 (Cirugía: Politraumatizado y Choque IV)', () => {
    const traumaCase = BRANCHING_CLINICAL_CASES.find((c) => c.specialty === 'Cirugía');
    expect(traumaCase).toBeDefined();

    const caseString = JSON.stringify(traumaCase);

    // 1. ATLS 10ª Edición
    expect(caseString).toMatch(/ATLS\s*10/i);

    // 2. MTP 1:1:1 (Massive Transfusion Protocol balanced 1:1:1)
    expect(caseString).toMatch(/1:1:1/);
    expect(caseString).toMatch(/Protocolo de Transfusión Masiva|PTM|MTP/i);

    // 3. Ácido Tranexámico 1g (< 3 hours)
    expect(caseString).toMatch(/Ácido Tranexámico/i);
    expect(caseString).toMatch(/1\s*g/);
    expect(caseString).toMatch(/3\s*horas/);

    // 4. Damage control laparotomy with abdominal packing
    expect(caseString).toMatch(/Laparotomía.*Control de Daños|Damage Control/i);
    expect(caseString).toMatch(/empaquetamiento|packing/i);
    expect(caseString).toMatch(/bolsa de Bogotá|sistema de vacío|VAC/i);

    // 5. Second-Look (reexploración quirúrgica programada) at 24-48 hours
    expect(caseString).toMatch(/Second-Look|reexploración programada/i);
    expect(caseString).toMatch(/24-48\s*horas/);
    expect(caseString).toMatch(/desempaquetamiento/i);
  });

  it('RES-08: Adversarial edge cases — UI safety checks (null/undefined safety, error logging payload)', () => {
    BRANCHING_CLINICAL_CASES.forEach((c) => {
      // Debrief summary completeness
      expect(c.debriefSummary.coreDiagnosis.trim().length).toBeGreaterThan(10);
      expect(c.debriefSummary.goldStandardProtocol.trim().length).toBeGreaterThan(15);
      expect(c.debriefSummary.officialMinsalNorm.trim().length).toBeGreaterThan(10);

      // Verify each stage has clinicalDataSnippet or fallback
      c.stages.forEach((st) => {
        if (st.clinicalDataSnippet) {
          expect(st.clinicalDataSnippet.trim().length).toBeGreaterThan(5);
        }
        st.options.forEach((opt) => {
          // Check that consequenceText and learningPoint are non-empty strings
          expect(opt.consequenceText.trim().length).toBeGreaterThan(15);
          expect(opt.learningPoint.trim().length).toBeGreaterThan(15);
          expect(opt.minsalProtocolRef.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });
});
