import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ConstitutionLawView from '../src/components/ConstitutionLawView';
import {
  SALVADORAN_LAW_FAMILIES,
  SALVADORAN_LAWS_COMPENDIUM,
} from '../src/data/salvadoranLawsCompendium';
import {
  CONSTITUTION_LAW_BRANCHES,
  LEGAL_BRANCH_QUIZ_QUESTIONS,
} from '../src/data/constitucionalJurisprudenciaData';
import { DRIVER_CURRICULUM_UNITS } from '../src/data/driverLicense/curriculum';
import { DRIVER_QUESTIONS } from '../src/data/driverLicense/questions';
import { ANSP_ASCENSO_QUESTIONS } from '../src/data/anspAscensoData';
import { NOTARY_EXAM_QUESTIONS, NOTARY_THEMATIC_UNITS } from '../src/data/notaryExamData';
import { CSSP_JUNTAS, CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { SALVADORAN_NORMATIVE_INSTITUTIONS } from '../src/data/technicalCoursesData';

const ROOT = process.cwd();

describe('Compendio Integral de Códigos y Leyes Vigentes de El Salvador (2024–2026)', () => {
  it('contiene exactamente 8 familias jurídicas, más de 40 códigos/leyes vigentes e IDs únicos', () => {
    expect(SALVADORAN_LAW_FAMILIES).toHaveLength(8);
    expect(SALVADORAN_LAWS_COMPENDIUM.length).toBeGreaterThan(40);

    const ids = new Set<string>();
    for (const law of SALVADORAN_LAWS_COMPENDIUM) {
      expect(ids.has(law.id)).toBe(false);
      ids.add(law.id);
    }

    for (const fam of SALVADORAN_LAW_FAMILIES) {
      const entries = SALVADORAN_LAWS_COMPENDIUM.filter((l) => l.familyId === fam.id);
      expect(entries.length).toBeGreaterThanOrEqual(5);
    }
  });

  it('incluye todas las reformas clave 2024–2026 y decretos obligatorios', () => {
    const raw = JSON.stringify(SALVADORAN_LAWS_COMPENDIUM);
    const requiredTokens = [
      '197/2025',
      '60 diputados',
      '44 municipios',
      '262 distritos',
      '537/2026',
      'Art. 45',
      '534/2026',
      '905',
      '305-A',
      '31 de diciembre de 2027',
      '66/2024',
      'ISPI',
      '143/2024',
      '144/2024',
      '185/2025',
      '843',
      'SRS',
      '137',
      'CAPI',
    ];
    for (const token of requiredTokens) {
      expect(raw).toContain(token);
    }
  });

  it('cumple política estricta de citación institucional (cero sitios terceros y cero número privado)', () => {
    const forbidden = [
      'IurisAcademia',
      'IurisCaeli',
      'Englisch-hilfen.de',
      'Englishteststore.net',
      'Agendaweb.org',
      '7943 9901',
    ];
    const filesToCheck = [
      path.join(ROOT, 'src/data/salvadoranLawsCompendium.ts'),
      path.join(ROOT, 'src/data/constitucionalJurisprudenciaData.ts'),
    ];
    for (const filePath of filesToCheck) {
      const content = fs.readFileSync(filePath, 'utf-8');
      for (const term of forbidden) {
        expect(content).not.toContain(term);
      }
    }
  });
});

describe('Actualización de Reformas Vigentes (2024–2026) en Módulos Existentes', () => {
  it('driverLicense y anspAscensoData reflejan Cero Tolerancia, Art. 147-E (2–5 / 5–10 años) y multas $50/$100/$150', () => {
    const u7 = DRIVER_CURRICULUM_UNITS.find((u) => u.id === 'u7-alcoholemia-delito');
    expect(u7).toBeDefined();
    expect(u7!.substantiveTheory).toContain('Cero Tolerancia');
    expect(u7!.substantiveTheory).toContain('185/2025');
    expect(u7!.substantiveTheory).toContain('$50.00');
    expect(u7!.substantiveTheory).toContain('$100.00');
    expect(u7!.substantiveTheory).toContain('$150.00');
    expect(u7!.substantiveTheory).not.toContain('0 a 49 mg/dl');
    expect(u7!.substantiveTheory).not.toContain('50 a 99 mg/dl');

    const qRaw = JSON.stringify(DRIVER_QUESTIONS);
    expect(qRaw).not.toContain('57.14');
    expect(qRaw).not.toContain('entre 50 y 99 mg/dl');

    const cabo003 = ANSP_ASCENSO_QUESTIONS.find((q) => q.id === 'pnc-cabo-003');
    expect(cabo003).toBeDefined();
    expect(cabo003!.distractorRationale.A).not.toContain('umbral administrativo');
    expect(cabo003!.explanation).toContain('Cero Tolerancia');
  });

  it('notaryExamData actualiza not-162 y Unidad 5 sobre S.A.S. (D.L. 905, CNR, $1.00 USD, prórroga 2027)', () => {
    const not162 = NOTARY_EXAM_QUESTIONS.find((q) => q.id === 'not-162');
    expect(not162).toBeDefined();
    const rawQ = JSON.stringify(not162);
    expect(rawQ).toContain('905');
    expect(rawQ).toContain('305-A');
    expect(rawQ).toContain('$1.00 USD');
    expect(rawQ).toContain('31 de diciembre de 2027');

    const unit5 = NOTARY_THEMATIC_UNITS.find((u) => u.id === 'unit-not-05');
    expect(unit5).toBeDefined();
    expect(unit5!.content).toContain('905');
    expect(unit5!.content).toContain('$1.00 USD');
  });

  it('technicalCoursesData corrige D.L. 107 -> D.L. 843 y csspHealthData homologa SRS', () => {
    expect(SALVADORAN_NORMATIVE_INSTITUTIONS.SIGET.decree).toContain('843');
    expect(SALVADORAN_NORMATIVE_INSTITUTIONS.SIGET.decree).not.toContain('107');

    const qfJunta = CSSP_JUNTAS.find((j) => j.id === 'jvpqf');
    expect(qfJunta?.description).toContain('Superintendencia de Regulación Sanitaria (SRS)');

    const jvpm01 = CSSP_QUESTIONS_DATA.find((q) => q.id === 'cssp-jvpm-01');
    expect(jvpm01?.options.A).toContain('Superintendencia de Regulación Sanitaria (SRS)');
  });
});

describe('Expansión de constitucionalJurisprudenciaData y Banco de Reactivos Jurídicos', () => {
  it('las 10 ramas jurídicas mantienen >= 500 palabras sustantivas y >= 5 casos resueltos', () => {
    expect(CONSTITUTION_LAW_BRANCHES).toHaveLength(10);
    for (const branch of CONSTITUTION_LAW_BRANCHES) {
      const words = branch.substantiveAnalysis.trim().split(/\s+/).length;
      expect(words).toBeGreaterThanOrEqual(500);
      expect(branch.solvedCases.length).toBeGreaterThanOrEqual(5);
    }
  });

  it('LEGAL_BRANCH_QUIZ_QUESTIONS tiene reactivos únicos, opciones A-D distintas, sin "Respuesta correcta" y sin colisión con public/data/', () => {
    expect(LEGAL_BRANCH_QUIZ_QUESTIONS.length).toBeGreaterThanOrEqual(20);

    const ids = new Set<string>();
    const statements = new Set<string>();

    for (const q of LEGAL_BRANCH_QUIZ_QUESTIONS) {
      expect(ids.has(q.id)).toBe(false);
      ids.add(q.id);

      expect(statements.has(q.statement)).toBe(false);
      statements.add(q.statement);

      const opts = [q.options.A, q.options.B, q.options.C, q.options.D];
      expect(new Set(opts).size).toBe(4);
      for (const opt of opts) {
        expect(opt.trim().length).toBeGreaterThan(5);
      }

      const rationales = [
        q.distractorRationale.A,
        q.distractorRationale.B,
        q.distractorRationale.C,
        q.distractorRationale.D,
      ];
      expect(new Set(rationales).size).toBe(4);
      for (const r of rationales) {
        expect(r).not.toContain('Respuesta correcta');
        expect(r.trim().length).toBeGreaterThan(10);
      }
    }

    // Verificar cero colisiones con public/data/
    const manifestPath = path.join(ROOT, 'public/data/manifest.json');
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      const baseIds = new Set<string>();
      for (const cat of Object.values(manifest) as any[]) {
        if (Array.isArray(cat)) {
          for (const item of cat) {
            if (item.file) {
              const p = path.join(ROOT, 'public/data', item.file);
              if (fs.existsSync(p)) {
                const arr = JSON.parse(fs.readFileSync(p, 'utf-8'));
                if (Array.isArray(arr)) {
                  arr.forEach((x: any) => x.id && baseIds.add(x.id));
                }
              }
            }
          }
        }
      }
      for (const q of LEGAL_BRANCH_QUIZ_QUESTIONS) {
        expect(baseIds.has(q.id)).toBe(false);
      }
    }
  });

  it('ConstitutionLawView renderiza sin errores e incluye pestañas de Compendio y Simulador Jurídico', () => {
    const html = renderToStaticMarkup(React.createElement(ConstitutionLawView));
    expect(html).toContain('Compendio de Leyes Vigentes (El Salvador)');
    expect(html).toContain('Simulador Jurídico');
  });
});
