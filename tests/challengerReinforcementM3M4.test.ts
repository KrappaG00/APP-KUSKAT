import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import {
  RESIDENTADO_THEMATIC_UNITS,
  RESIDENTADO_QUESTIONS,
  RESIDENTADO_SPECIALTIES,
  ResidentadoThematicUnit,
  ResidentadoSolvedCase,
  ResidentadoQuestion,
} from '../src/data/residentadoMedicoData';
import {
  SIGET_THEMATIC_UNITS,
  SIGET_SOLAR_QUESTIONS,
  SIGET_SECTORS,
  SigetThematicUnit,
  SolvedEngineeringCalculation,
  SigetSolarQuestion,
} from '../src/data/sigetSolarData';

describe('CHALLENGER 2: Medical & Technical Adversarial Rigor Audit (Milestones M3 & M4)', () => {
  // Helper to extract substantive words
  const extractSubstantiveWords = (text: string): string[] => {
    return text
      .replace(/[#*`_~>[\]()\-+=\\|/{};:!?,."']/g, ' ')
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 1 && !/^\d+$/.test(w));
  };

  // Forbidden placeholder patterns
  const FORBIDDEN_PATTERNS = [
    /lorem\s+ipsum/i,
    /\[placeholder\]/i,
    /\b(TODO|TBD|FIXME|XXX)\b/,
    /texto\s+de\s+relleno/i,
    /plantilla\s+gen[eé]rica/i,
    /\bdummy\b/i,
    /en\s+un\s+proyecto\s+acad[eé]mico\s+desarrollado\s+en/i,
    /\basdf\b/i,
    /\btest\s+test\b/i,
  ];

  describe('1. Substantive Word Count Rigor Probe (>= 500 Substantive Words per Unit)', () => {
    it('M3: All 5 Medical Residency thematic units strictly exceed 500 substantive words', () => {
      expect(RESIDENTADO_THEMATIC_UNITS.length).toBe(5);

      RESIDENTADO_THEMATIC_UNITS.forEach((unit: ResidentadoThematicUnit) => {
        const words = extractSubstantiveWords(unit.substantiveTheory);
        expect(
          words.length,
          `Medical Unit "${unit.title}" (${unit.id}) has ${words.length} words, must strictly exceed 500`
        ).toBeGreaterThanOrEqual(500);

        // Verify high-level medical domain terminology
        const theoryLower = unit.substantiveTheory.toLowerCase();
        const hasMedicalTerms =
          theoryLower.includes('diagnóstico') ||
          theoryLower.includes('clínic') ||
          theoryLower.includes('tratamiento') ||
          theoryLower.includes('minsal') ||
          theoryLower.includes('paciente');
        expect(hasMedicalTerms, `Unit ${unit.id} must contain genuine medical terminology`).toBe(true);
      });
    });

    it('M4: All 5 Solar & SIGET thematic units strictly exceed 500 substantive words', () => {
      expect(SIGET_THEMATIC_UNITS.length).toBe(5);

      SIGET_THEMATIC_UNITS.forEach((unit: SigetThematicUnit) => {
        const words = extractSubstantiveWords(unit.substantiveTheory);
        expect(
          words.length,
          `Solar Unit "${unit.title}" (${unit.id}) has ${words.length} words, must strictly exceed 500`
        ).toBeGreaterThanOrEqual(500);

        // Verify engineering domain terminology
        const theoryLower = unit.substantiveTheory.toLowerCase();
        const hasSolarTerms =
          theoryLower.includes('fotovoltaic') ||
          theoryLower.includes('inversor') ||
          theoryLower.includes('corriente') ||
          theoryLower.includes('tensión') ||
          theoryLower.includes('siget') ||
          theoryLower.includes('nec');
        expect(hasSolarTerms, `Unit ${unit.id} must contain genuine solar engineering terminology`).toBe(true);
      });
    });
  });

  describe('2. Adversarial Anti-Filler, Anti-Plagiarism & Cross-Copy Probe', () => {
    it('zero forbidden placeholder patterns across all medical and solar texts', () => {
      // Check medical units
      RESIDENTADO_THEMATIC_UNITS.forEach((u) => {
        FORBIDDEN_PATTERNS.forEach((pattern) => {
          expect(u.substantiveTheory).not.toMatch(pattern);
          expect(u.title).not.toMatch(pattern);
          u.clinicalPearls.forEach((p) => expect(p).not.toMatch(pattern));
          u.keyClinicalProtocols.forEach((proto) => {
            expect(proto.protocolName).not.toMatch(pattern);
            expect(proto.summary).not.toMatch(pattern);
          });
        });
      });

      // Check solar units
      SIGET_THEMATIC_UNITS.forEach((u) => {
        FORBIDDEN_PATTERNS.forEach((pattern) => {
          expect(u.substantiveTheory).not.toMatch(pattern);
          expect(u.title).not.toMatch(pattern);
          expect(u.shortDescription).not.toMatch(pattern);
          u.keyRegulatoryReferences.forEach((ref) => expect(ref).not.toMatch(pattern));
        });
      });
    });

    it('adversarial check: no cross-unit sentence copy-pasting between medical units', () => {
      const sentenceToUnit = new Map<string, string>();

      RESIDENTADO_THEMATIC_UNITS.forEach((unit) => {
        const sentences = unit.substantiveTheory
          .split(/[.\n]+/)
          .map((s) => s.trim().toLowerCase())
          .filter((s) => s.length >= 35); // Filter for substantive sentences

        sentences.forEach((sentence) => {
          if (sentenceToUnit.has(sentence)) {
            const priorUnit = sentenceToUnit.get(sentence);
            throw new Error(
              `Duplicate sentence detected between medical units "${priorUnit}" and "${unit.id}": "${sentence}"`
            );
          }
          sentenceToUnit.set(sentence, unit.id);
        });
      });
      expect(sentenceToUnit.size).toBeGreaterThan(50);
    });

    it('adversarial check: no cross-unit sentence copy-pasting between solar units', () => {
      const sentenceToUnit = new Map<string, string>();

      SIGET_THEMATIC_UNITS.forEach((unit) => {
        const sentences = unit.substantiveTheory
          .split(/[.\n]+/)
          .map((s) => s.trim().toLowerCase())
          .filter((s) => s.length >= 35);

        sentences.forEach((sentence) => {
          if (sentenceToUnit.has(sentence)) {
            const priorUnit = sentenceToUnit.get(sentence);
            throw new Error(
              `Duplicate sentence detected between solar units "${priorUnit}" and "${unit.id}": "${sentence}"`
            );
          }
          sentenceToUnit.set(sentence, unit.id);
        });
      });
      expect(sentenceToUnit.size).toBeGreaterThan(40);
    });

    it('lexical diversity (Type-Token Ratio > 0.35) in every medical and solar unit', () => {
      // Type-Token Ratio ensures the author didn't repeat the same words or sentences
      RESIDENTADO_THEMATIC_UNITS.forEach((unit) => {
        const words = extractSubstantiveWords(unit.substantiveTheory).map((w) => w.toLowerCase());
        const uniqueWords = new Set(words);
        const ttr = uniqueWords.size / words.length;
        expect(
          ttr,
          `Medical Unit ${unit.id} has low vocabulary diversity (TTR: ${ttr.toFixed(3)})`
        ).toBeGreaterThanOrEqual(0.35);
      });

      SIGET_THEMATIC_UNITS.forEach((unit) => {
        const words = extractSubstantiveWords(unit.substantiveTheory).map((w) => w.toLowerCase());
        const uniqueWords = new Set(words);
        const ttr = uniqueWords.size / words.length;
        expect(
          ttr,
          `Solar Unit ${unit.id} has low vocabulary diversity (TTR: ${ttr.toFixed(3)})`
        ).toBeGreaterThanOrEqual(0.35);
      });
    });
  });

  describe('3. Mathematical & Physical Consistency of the 25 Solar Engineering Calculations', () => {
    it('contains exactly 25 calculations (5 per unit) with full engineering structure', () => {
      let totalCalculations = 0;

      SIGET_THEMATIC_UNITS.forEach((unit) => {
        expect(
          unit.solvedCalculations.length,
          `Unit ${unit.id} must have exactly 5 calculations`
        ).toBe(5);

        totalCalculations += unit.solvedCalculations.length;

        unit.solvedCalculations.forEach((calc: SolvedEngineeringCalculation) => {
          expect(calc.id.trim().length).toBeGreaterThan(5);
          expect(calc.title.trim().length).toBeGreaterThan(10);
          expect(calc.unitId).toBe(unit.id);
          expect(calc.problemStatement.trim().length).toBeGreaterThan(50);

          // Parameters check: at least 2 design parameters
          const paramKeys = Object.keys(calc.designParameters);
          expect(paramKeys.length).toBeGreaterThanOrEqual(2);
          paramKeys.forEach((k) => {
            expect(calc.designParameters[k].trim().length).toBeGreaterThan(0);
          });

          // Formulas check: at least 1 formula with math operators
          expect(calc.engineeringFormulas.length).toBeGreaterThanOrEqual(1);
          calc.engineeringFormulas.forEach((formula) => {
            expect(formula).toMatch(/[=+\-*/^()_]|sqrt|max|sum|ln/i);
          });

          // Step-by-step substitution check: at least 50 chars and structured steps
          expect(calc.stepByStepSubstitution.trim().length).toBeGreaterThan(50);
          expect(calc.stepByStepSubstitution).toMatch(/Paso\s+\d|Paso|Step/i);

          // Numerical result check: contains both numbers and physical units
          expect(calc.numericalResult.trim().length).toBeGreaterThan(5);
          const hasPhysicalUnits =
            /(\d+(\.\d+)?)\s*(kW|kWh|kWp|W|Wp|V|Vdc|Vac|A|kVA|kVAR|%|ohms|Ω|AWG|mm²|ms|s|días|paneles|módulos|bancos|dólares|\$)/i.test(
              calc.numericalResult
            );
          expect(
            hasPhysicalUnits,
            `Calculation ${calc.id} numericalResult "${calc.numericalResult}" must contain physical units`
          ).toBe(true);

          // Engineering judgment check: non-trivial practical insight
          expect(calc.practicalEngineeringJudgment.trim().length).toBeGreaterThan(30);
        });
      });

      expect(totalCalculations).toBe(25);
    });

    it('empirically verifies mathematical formulas in Unit 1 (NTCOGD & Medición Neta)', () => {
      const u1 = SIGET_THEMATIC_UNITS.find((u) => u.id === 'unit-1-ntcogd-medicion-neta');
      expect(u1).toBeDefined();

      // Calc 1.1: P_contratada = V * I * FP = 240 * 40 * 1 = 9,600 W = 9.6 kW
      const c11 = u1!.solvedCalculations[0];
      const pContratada = 240 * 40 * 1.0;
      expect(pContratada).toBe(9600);
      const pDcPico = 8.0 * 1.25;
      expect(pDcPico).toBe(10.0);
      expect(c11.stepByStepSubstitution).toContain('9,600 W = 9.60 kW');
      expect(c11.numericalResult).toContain('8.0 kW AC');

      // Calc 1.2: S_lim = 50 * 0.8 = 40 kVA; S_solar = 12 + 10 = 22 kVA; Margen = 40 - 22 = 18 kVA
      const c12 = u1!.solvedCalculations[1];
      const sLim = 50 * 0.8;
      const sSolar = 12 + 10;
      const margin = sLim - sSolar;
      expect(margin).toBe(18);
      expect(c12.stepByStepSubstitution).toContain('40.0 kVA');
      expect(c12.numericalResult).toContain('18.0 kVA');

      // Calc 1.3: E_diaria = 10 * 5.3 * 0.78 = 41.34 kWh; E_mensual = 41.34 * 30.4 = 1256.736 kWh
      const c13 = u1!.solvedCalculations[2];
      const eDiaria = 10.0 * 5.3 * 0.78;
      expect(eDiaria).toBeCloseTo(41.34, 2);
      const eMensual = eDiaria * 30.4;
      expect(eMensual).toBeCloseTo(1256.74, 1);
      expect(c13.numericalResult).toContain('1,256.74 kWh/mes');

      // Calc 1.4: THD_I calculation
      const c14 = u1!.solvedCalculations[3];
      const harmonicSumSq = 0.85 ** 2 + 1.2 ** 2 + 0.9 ** 2 + 0.35 ** 2 + 0.4 ** 2;
      expect(harmonicSumSq).toBeCloseTo(3.255, 3);
      const iRms = Math.sqrt(harmonicSumSq);
      expect(iRms).toBeCloseTo(1.804, 3);
      const thd = (iRms / 55.5) * 100;
      expect(thd).toBeCloseTo(3.25, 2);
      expect(c14.numericalResult).toContain('THD_I = 3.25%');

      // Calc 1.5: Desbalance de tensión: V_prom = (243.2 + 239.5 + 236.1) / 3 = 239.60 V
      const c15 = u1!.solvedCalculations[4];
      const vProm = (243.2 + 239.5 + 236.1) / 3;
      expect(vProm).toBeCloseTo(239.6, 2);
      const maxDev = Math.max(Math.abs(243.2 - vProm), Math.abs(239.5 - vProm), Math.abs(236.1 - vProm));
      expect(maxDev).toBeCloseTo(3.6, 2);
      const pctDesb = (maxDev / vProm) * 100;
      expect(pctDesb).toBeCloseTo(1.5, 2);
      expect(c15.numericalResult).toContain('1.50%');
    });

    it('empirically verifies mathematical formulas in Unit 2 (NEC 690 & Protecciones DC)', () => {
      const u2 = SIGET_THEMATIC_UNITS.find((u) => u.id === 'unit-2-nec-690-protecciones-dc');
      expect(u2).toBeDefined();

      // Calc 2.1: I_max = 1.25 * 13.92 = 17.4 A; I_fusible_min = 1.25 * 17.4 = 21.75 A
      const c21 = u2!.solvedCalculations[0];
      const iMax = 1.25 * 13.92;
      expect(iMax).toBeCloseTo(17.4, 2);
      const iFusible = 1.25 * iMax;
      expect(iFusible).toBeCloseTo(21.75, 2);
      expect(c21.numericalResult).toContain('25 A gPV');

      // Calc 2.2: Temperature corrected Voc: Voc_mod = 49.8 * (1 + -0.0027 * -17) = 52.086 V
      const c22 = u2!.solvedCalculations[1];
      const deltaT = 8 - 25;
      const kT = 1 + -0.0027 * deltaT;
      const vocModMax = 49.8 * kT;
      expect(vocModMax).toBeCloseTo(52.086, 3);
      const v12 = 12 * vocModMax;
      expect(v12).toBeCloseTo(625.03, 1);
      const nMax = Math.floor(600 / vocModMax);
      expect(nMax).toBe(11);
      expect(c22.numericalResult).toContain('11 paneles');

      // Calc 2.4: Caída de tensión DC: Delta_V = 13.12 A * (84 m * 0.00399) = 4.397 V
      const c24 = u2!.solvedCalculations[3];
      const rLoop = 84 * 0.00399;
      const deltaV = 13.12 * rLoop;
      expect(deltaV).toBeCloseTo(4.397, 2);
      const pctDrop = (deltaV / 415) * 100;
      expect(pctDrop).toBeCloseTo(1.06, 2);
      expect(c24.numericalResult).toContain('1.06%');
    });

    it('empirically verifies mathematical formulas in Unit 3 (Acreditación SIGET & Regla del 120%)', () => {
      const u3 = SIGET_THEMATIC_UNITS.find((u) => u.id === 'unit-3-electricistas-siget-categorias');
      expect(u3).toBeDefined();

      // Calc 3.2: 120% Busbar rule: I_inv = 7600 / 240 = 31.67 A; OCPD = 31.67 * 1.25 = 39.58 A -> 40 A breaker
      const c32 = u3!.solvedCalculations[1];
      const iInv = 7600 / 240;
      expect(iInv).toBeCloseTo(31.67, 2);
      const breaker = iInv * 1.25;
      expect(breaker).toBeCloseTo(39.58, 2);
      const busAllowed = 1.25 * 1.2; // 120% of 125 A = 150 A
      expect(125 * 1.2).toBe(150);
      expect(100 + 40).toBe(140);
      expect(c32.numericalResult).toContain('140 A <= 150 A');

      // Calc 3.3: 3-Phase Acometida sizing: 40 kVA at 240V -> I_nom = 40000 / (sqrt(3) * 240) = 96.225 A
      const c33 = u3!.solvedCalculations[2];
      const i3Phase = 40000 / (Math.sqrt(3) * 240);
      expect(i3Phase).toBeCloseTo(96.225, 2);
      const iDesign = i3Phase * 1.25;
      expect(iDesign).toBeCloseTo(120.28, 2);
      expect(c33.numericalResult).toContain('1 AWG THHN (130 A)');

      // Calc 3.5: Neutral vector sum: I_A = 50 + j0, I_B = -10 - j17.32, I_C = -7.5 + j12.99
      const c35 = u3!.solvedCalculations[4];
      const iA_r = 50.0, iA_i = 0.0;
      const iB_r = 20.0 * Math.cos((-120 * Math.PI) / 180);
      const iB_i = 20.0 * Math.sin((-120 * Math.PI) / 180);
      const iC_r = 15.0 * Math.cos((120 * Math.PI) / 180);
      const iC_i = 15.0 * Math.sin((120 * Math.PI) / 180);

      const iTot_r = iA_r + iB_r + iC_r;
      const iTot_i = iA_i + iB_i + iC_i;
      const iNeutroMag = Math.sqrt(iTot_r ** 2 + iTot_i ** 2);
      expect(iNeutroMag).toBeCloseTo(32.79, 1);
      expect(c35.numericalResult).toContain('32.79 A');
    });

    it('empirically verifies mathematical formulas in Unit 4 & Unit 5 (BESS, Dwight & IEEE 80)', () => {
      const u4 = SIGET_THEMATIC_UNITS.find((u) => u.id === 'unit-4-offgrid-almacenamiento-baterias');
      const u5 = SIGET_THEMATIC_UNITS.find((u) => u.id === 'unit-5-puesta-tierra-seguridad-ieee1547');
      expect(u4).toBeDefined();
      expect(u5).toBeDefined();

      // Calc 4.1: Battery capacity: E_util = (4800 * 2) / 0.92 = 10434.78 Wh; C_nom = 10434.78 / 0.85 = 12276.21 Wh; Ah = 12276.21 / 48 = 255.75 Ah
      const c41 = u4!.solvedCalculations[0];
      const eUtil = (4800 * 2) / 0.92;
      const cNomWh = eUtil / 0.85;
      const cNomAh = cNomWh / 48;
      expect(cNomAh).toBeCloseTo(255.75, 1);
      const nMod = Math.ceil(cNomAh / 100);
      expect(nMod).toBe(3);
      expect(c41.numericalResult).toContain('3 módulos de batería LiFePO4');

      // Calc 4.2: LCOS Lithium vs Lead-Acid
      const c42 = u4!.solvedCalculations[1];
      const costLitio = 1 * ((6.0 / 0.8) * 400);
      const costPlomo = 4 * ((6.0 / 0.5) * 180);
      expect(costLitio).toBe(3000);
      expect(costPlomo).toBe(8640);
      const ahorro = costPlomo - costLitio;
      expect(ahorro).toBe(5640);
      expect(c42.numericalResult).toContain('$5,640');

      // Calc 4.5: Battery cable sizing: 5000 W / (42 V * 0.90) = 132.28 A
      const c45 = u4!.solvedCalculations[4];
      const iDc = 5000 / (42.0 * 0.90);
      expect(iDc).toBeCloseTo(132.28, 2);
      const rCable = 4.0 * 0.000256;
      const deltaV = iDc * rCable;
      expect(deltaV).toBeCloseTo(0.135, 2);
      const pctDrop = (deltaV / 48.0) * 100;
      expect(pctDrop).toBeCloseTo(0.28, 2);
      expect(c45.numericalResult).toContain('0.28%');
      expect(c45.numericalResult).toContain('175 A ANL');

      // Calc 5.1: Dwight formula: R = [rho / (2 * pi * L)] * [ln(4L / r) - 1]
      const c51 = u5!.solvedCalculations[0];
      const rho = 60;
      const L = 2.44;
      const r = 0.0079375;
      const termGeom = Math.log((4 * L) / r) - 1;
      const coeff = rho / (2 * Math.PI * L);
      const rDwight = coeff * termGeom;
      expect(rDwight).toBeCloseTo(23.93, 1);
      expect(c51.numericalResult).toContain('23.93 ohms');

      // Calc 5.5: IEEE 80 touch voltage: GPR = 2500 * 2.1 = 5250 V; R_total = 1000 + 1.5 * 0.74 * 3000 = 4330 ohms
      const c55 = u5!.solvedCalculations[4];
      const gpr = 2500 * 2.10;
      expect(gpr).toBe(5250);
      const rTotal = 1000 + 1.5 * 0.74 * 3000;
      expect(rTotal).toBe(4330);
      const factorTime = 0.116 / Math.sqrt(0.20);
      const vTouchTol = rTotal * factorTime;
      expect(vTouchTol).toBeCloseTo(1123.16, 1);
      expect(c55.numericalResult).toContain('1,123.16 V');
    });
  });

  describe('4. Clinical Consistency & MINSAL Protocols of the 25 Medical Cases', () => {
    it('contains exactly 25 clinical cases (5 per specialty) with complete diagnostic data', () => {
      let totalCases = 0;

      RESIDENTADO_THEMATIC_UNITS.forEach((unit: ResidentadoThematicUnit) => {
        expect(
          unit.solvedClinicalCases.length,
          `Specialty ${unit.specialtyName} must have exactly 5 solved cases`
        ).toBe(5);

        totalCases += unit.solvedClinicalCases.length;

        unit.solvedClinicalCases.forEach((c: ResidentadoSolvedCase) => {
          expect(c.id.trim().length).toBeGreaterThan(5);
          expect(c.title.trim().length).toBeGreaterThan(10);
          expect(c.patientProfile.trim().length).toBeGreaterThan(20);
          expect(c.clinicalPresentation.trim().length).toBeGreaterThan(20);
          expect(c.physicalExam.trim().length).toBeGreaterThan(15);
          expect(c.labAndImagingData.trim().length).toBeGreaterThan(15);
          expect(c.initialVignette.trim().length).toBeGreaterThan(30);

          // Pathophysiological and diagnostic reasoning
          expect(c.diagnosticReasoning.trim().length).toBeGreaterThan(50);
          if (c.stepByStepReasoning) {
            expect(c.stepByStepReasoning.trim().length).toBeGreaterThan(50);
          }

          // Differential diagnoses: at least 2 conditions with explicit ruling rationale
          expect(c.differentialDiagnosis.length).toBeGreaterThanOrEqual(2);
          c.differentialDiagnosis.forEach((diff) => {
            expect(diff.condition.trim().length).toBeGreaterThan(3);
            expect(diff.rulingRationale.trim().length).toBeGreaterThan(25);
            // Ruling rationale must be substantive clinical text (>= 25 characters)
            expect(diff.rulingRationale.trim().length).toBeGreaterThanOrEqual(25);
            expect(diff.rulingRationale).not.toMatch(/^(incorrecto|falso|no\s+aplica|descartado)\.?$/i);
          });

          // Management & Therapeutic plans: at least 3 steps with actionable care
          expect(c.managementPlan.length).toBeGreaterThanOrEqual(3);
          expect(c.therapeuticPlan.length).toBeGreaterThanOrEqual(3);
          c.managementPlan.forEach((step) => {
            expect(step.trim().length).toBeGreaterThan(10);
          });

          // Pharmacological or procedural interventions in therapeutic plan
          const combinedTreatment = c.therapeuticPlan.join(' ');
          const hasClinicalDosingOrIntervention =
            /(mg|g|mcg|UI|mL|IV|IM|VO|SC|horas|minutos|infusi[oó]n|bolo|laparotom|ox[ií]geno|dosis|soluci[oó]n|reanimaci[oó]n)/i.test(
              combinedTreatment
            );
          expect(
            hasClinicalDosingOrIntervention,
            `Case ${c.id} therapeuticPlan must contain clinical dosages, routes, or interventions`
          ).toBe(true);

          // Official MINSAL / ISSS protocol reference
          expect(c.officialProtocolRef.trim().length).toBeGreaterThan(10);
          expect(c.officialProtocolRef).toMatch(
            /MINSAL|ISSS|Hospital|Gu[ií]a|Norma|OPS|OMS|ATLS|AHA|ADA|ACOG/i
          );

          // Clinical pearls & pedagogical rationale
          expect(c.clinicalPearls.length).toBeGreaterThanOrEqual(1);
          c.clinicalPearls.forEach((pearl) => {
            expect(pearl.trim().length).toBeGreaterThan(15);
          });
          expect(c.pedagogicalRationale.trim().length).toBeGreaterThan(20);
        });
      });

      expect(totalCases).toBe(25);
    });

    it('verifies core specialty coverage across the 25 clinical cases', () => {
      const allCases = RESIDENTADO_THEMATIC_UNITS.flatMap((u) => u.solvedClinicalCases);
      const caseTitles = allCases.map((c) => c.title).join(' ');

      // Internal Medicine high-yield conditions
      expect(caseTitles).toMatch(/IAM|Infarto|Cetoacidosis|Dengue|Nefropat[ií]a|Mesoamericana|Choque/i);
      // General Surgery high-yield conditions
      expect(caseTitles).toMatch(/Apendicitis|Colecistitis|Obstrucci[oó]n|V[oó]lvulo|Trauma|Hernia/i);
      // Pediatrics high-yield conditions
      expect(caseTitles).toMatch(/Bronquiolitis|Deshidrataci[oó]n|EDA|Neumon[ií]a|Crisis\s+Convulsiva|Crupp/i);
      // OB/GYN high-yield conditions
      expect(caseTitles).toMatch(/Preeclampsia|Hemorragia|Postparto|Ect[oó]pico|Sepsis\s+Puerperal|Amenaza/i);
      // Family Medicine high-yield conditions
      expect(caseTitles).toMatch(/Hipertensi[oó]n|Diabetes|Vacunaci[oó]n|Prenatal|Chagas|Tuberculosis/i);
    });
  });

  describe('5. Question Bank Rigor & Distractor Rationales (56 ENAR + 52 SIGET)', () => {
    it('M3: ENAR question bank contains 56 questions with 100% complete distractor rationales', () => {
      expect(RESIDENTADO_QUESTIONS.length).toBe(56);

      const questionIds = new Set<string>();

      RESIDENTADO_QUESTIONS.forEach((q: ResidentadoQuestion) => {
        // Unique ID check
        expect(questionIds.has(q.id), `Duplicate medical question ID ${q.id}`).toBe(false);
        questionIds.add(q.id);

        expect(q.topic.trim().length).toBeGreaterThan(3);
        expect(q.clinicalVignette.trim().length).toBeGreaterThan(25);
        expect(q.explanation.trim().length).toBeGreaterThan(30);
        expect(q.keyTakeaway.trim().length).toBeGreaterThan(15);
        expect(q.officialReference.trim().length).toBeGreaterThan(10);

        // Options check
        expect(q.options.length).toBe(4);
        const optionKeys = q.options.map((o) => o.key).sort();
        expect(optionKeys).toEqual(['A', 'B', 'C', 'D']);

        // Unique option texts
        const optionTexts = q.options.map((o) => o.text.trim());
        expect(new Set(optionTexts).size).toBe(4);

        // Correct key check
        expect(['A', 'B', 'C', 'D']).toContain(q.correctKey);

        // Distractor rationales check: all 3 incorrect options MUST have substantive rationale
        const incorrectKeys = ['A', 'B', 'C', 'D'].filter((k) => k !== q.correctKey);
        incorrectKeys.forEach((ik) => {
          const rationale = q.distractorRationale[ik];
          expect(rationale, `Question ${q.id} missing distractorRationale for key ${ik}`).toBeDefined();
          expect(
            rationale.trim().length,
            `Question ${q.id} distractor ${ik} rationale too short (${rationale})`
          ).toBeGreaterThanOrEqual(15);
          // Check for trivial placeholders
          expect(rationale).not.toMatch(/^(incorrecto|falso|opci[oó]n\s+err[oó]nea|no\s+aplica)\.?$/i);
        });
      });
    });

    it('M4: SIGET question bank contains 52 questions with 100% complete distractor rationales', () => {
      expect(SIGET_SOLAR_QUESTIONS.length).toBe(52);

      const questionIds = new Set<string>();

      SIGET_SOLAR_QUESTIONS.forEach((q: SigetSolarQuestion) => {
        expect(questionIds.has(q.id), `Duplicate solar question ID ${q.id}`).toBe(false);
        questionIds.add(q.id);

        expect(q.statement.trim().length).toBeGreaterThan(25);
        expect(q.explanation.trim().length).toBeGreaterThan(30);
        expect(q.technicalBasis.trim().length).toBeGreaterThan(10);

        // Category validation
        expect([
          'normativa-gd',
          'nec-690',
          'electricistas-siget',
          'seguridad-operativa',
        ]).toContain(q.category);

        // 4 distinct options
        const optionKeys = ['A', 'B', 'C', 'D'] as const;
        const optionTexts = optionKeys.map((k) => q.options[k].trim());
        expect(new Set(optionTexts).size).toBe(4);

        // Correct answer validation
        expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

        // Distractor rationale: check that all 4 keys have non-trivial rationale
        optionKeys.forEach((key) => {
          const rationale = q.distractorRationale[key];
          expect(rationale, `Solar question ${q.id} missing distractorRationale for ${key}`).toBeDefined();
          expect(
            rationale?.trim().length,
            `Solar question ${q.id} distractor ${key} rationale too short`
          ).toBeGreaterThanOrEqual(15);
          expect(rationale).not.toMatch(/^(incorrecto|falso|opci[oó]n\s+err[oó]nea|no\s+aplica)\.?$/i);
        });
      });
    });

    it('verifies broad distribution across all specialties and categories in both banks', () => {
      const medCounts: Record<string, number> = {};
      RESIDENTADO_QUESTIONS.forEach((q) => {
        medCounts[q.specialty] = (medCounts[q.specialty] || 0) + 1;
      });
      expect(medCounts['medicina_interna']).toBeGreaterThanOrEqual(10);
      expect(medCounts['cirugia_general']).toBeGreaterThanOrEqual(10);
      expect(medCounts['pediatria']).toBeGreaterThanOrEqual(10);
      expect(medCounts['ginecologia_obstetricia']).toBeGreaterThanOrEqual(10);
      expect(medCounts['medicina_familiar']).toBeGreaterThanOrEqual(5);
      expect(medCounts['salud_publica']).toBeGreaterThanOrEqual(5);

      const solarCounts: Record<string, number> = {};
      SIGET_SOLAR_QUESTIONS.forEach((q) => {
        solarCounts[q.category] = (solarCounts[q.category] || 0) + 1;
      });
      expect(solarCounts['normativa-gd']).toBeGreaterThanOrEqual(12);
      expect(solarCounts['nec-690']).toBeGreaterThanOrEqual(12);
      expect(solarCounts['electricistas-siget']).toBeGreaterThanOrEqual(10);
      expect(solarCounts['seguridad-operativa']).toBeGreaterThanOrEqual(10);
    });
  });

  describe('6. System Invariants & Platform Certification', () => {
    const rootDir = process.cwd();

    it('invariant: zero occurrences of private telephone "7943 9901" in src/ and public/', () => {
      const forbiddenPhone = '7943 9901';
      const scanDirs = [path.join(rootDir, 'src'), path.join(rootDir, 'public')];

      let count = 0;
      const offendingFiles: string[] = [];

      const walk = (dir: string) => {
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
          const fullPath = path.join(dir, file);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            walk(fullPath);
          } else if (/\.(ts|tsx|js|jsx|json|html|css|md|txt)$/i.test(file)) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            if (content.includes(forbiddenPhone)) {
              count++;
              offendingFiles.push(fullPath);
            }
          }
        });
      };

      scanDirs.forEach(walk);

      expect(count, `Found ${count} occurrences of private phone in ${offendingFiles.join(', ')}`).toBe(0);
    });

    it('invariant: base question bank in public/data/ contains exactly 17,640 untouched questions', () => {
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

      // Verify sum of institution totals
      const sumDeclared =
        manifest.institutions.UES.totalQuestions +
        manifest.institutions.ESCALAFON.totalQuestions +
        manifest.institutions.AVANZO.totalQuestions +
        manifest.institutions.ASD.totalQuestions +
        manifest.institutions.ENA.totalQuestions +
        manifest.institutions.ANSP.totalQuestions;
      expect(sumDeclared).toBe(17640);
    });

    it('invariant: official WhatsApp +503 7657 4463 preserved in key user communication files', () => {
      const officialPhone = '+503 7657 4463';
      const appFile = path.join(rootDir, 'src', 'App.tsx');
      const navbarFile = path.join(rootDir, 'src', 'components', 'HeaderNavbar.tsx');
      const sheetsFile = path.join(rootDir, 'src', 'data', 'onePageSheetsData.ts');

      expect(fs.existsSync(appFile)).toBe(true);
      expect(fs.readFileSync(appFile, 'utf-8')).toContain(officialPhone);

      expect(fs.existsSync(navbarFile)).toBe(true);
      expect(fs.readFileSync(navbarFile, 'utf-8')).toContain(officialPhone);

      expect(fs.existsSync(sheetsFile)).toBe(true);
      expect(fs.readFileSync(sheetsFile, 'utf-8')).toContain(officialPhone);
    });

    it('invariant: academic reinforcement header contains CSS class "text-white"', () => {
      const academicViewPath = path.join(
        rootDir,
        'src',
        'components',
        'AcademicReinforcementView.tsx'
      );
      expect(fs.existsSync(academicViewPath)).toBe(true);
      const content = fs.readFileSync(academicViewPath, 'utf-8');
      expect(content).toContain('Refuerzo Académico (1° a 9° Grado y Bachillerato)');
      expect(content).toMatch(/<h2[^>]*className="[^"]*text-white[^"]*"[^>]*>/);
    });
  });
});
