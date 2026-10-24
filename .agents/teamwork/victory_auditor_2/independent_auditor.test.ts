import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

import { ADMIN_LAW_QUESTIONS } from '../../../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../../../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../../../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../../../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../../../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../../../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../../../src/data/complianceAmlData';

describe('VICTORY AUDITOR INDEPENDENT VERIFICATION SUITE', () => {
  const MODULES = [
    { id: 'admin_law', name: 'Derecho Administrativo & Firma Electrónica', list: ADMIN_LAW_QUESTIONS },
    { id: 'salud_primaria', name: 'Salud Primaria & Farmacovigilancia', list: SALUD_PRIMARIA_QUESTIONS },
    { id: 'ingenieria', name: 'Métodos Cuantitativos & Ingeniería', list: INGENIERIA_QUESTIONS },
    { id: 'notary', name: 'Examen de Notariado CSJ', list: NOTARY_EXAM_QUESTIONS },
    { id: 'cssp', name: 'Juntas de Vigilancia CSSP', list: CSSP_QUESTIONS_DATA },
    { id: 'ansp', name: 'Ascenso Policial ANSP', list: ANSP_ASCENSO_QUESTIONS },
    { id: 'compliance', name: 'Cumplimiento AML & Seguros SSF', list: COMPLIANCE_QUESTIONS },
  ];

  // Helper to extract option dictionary
  function getOptionsDict(q: any): Record<string, string> {
    if (Array.isArray(q.options)) {
      const res: Record<string, string> = {};
      q.options.forEach((opt: any) => {
        res[opt.key] = opt.text;
      });
      return res;
    }
    return q.options || {};
  }

  // -------------------------------------------------------------
  // CHECK 1: QUANTITATIVE QUESTION COUNTS & SUB-DISTRIBUTIONS
  // -------------------------------------------------------------
  describe('Check 1: Exact Counts (200 each, 1,400 total) & Subcategories', () => {
    it('each of the 7 modules has exactly 200 questions', () => {
      MODULES.forEach((m) => {
        expect(m.list.length, `Module ${m.name} must have exactly 200 questions`).toBe(200);
      });
    });

    it('grand total across all 7 modules is exactly 1,400', () => {
      const grandTotal = MODULES.reduce((acc, m) => acc + m.list.length, 0);
      expect(grandTotal).toBe(1400);
    });

    it('Derecho Administrativo has 150 LPA and 50 Firma Electrónica MINEC', () => {
      const lpaCats = ['procedimiento-comun', 'silencio-administrativo', 'recursos-administrativos', 'potestad-sancionadora'];
      const lpa = ADMIN_LAW_QUESTIONS.filter((q) => lpaCats.includes(q.category));
      const minec = ADMIN_LAW_QUESTIONS.filter((q) => q.category === 'firma-electronica');
      expect(lpa.length).toBe(150);
      expect(minec.length).toBe(50);
      expect(lpa.length + minec.length).toBe(200);
    });

    it('Salud Primaria has 150 Guías Clínicas MINSAL and 50 Farmacovigilancia SRS/DNM', () => {
      const minsalCats = ['dengue', 'hta-dm2', 'iras', 'materno-infantil'];
      const minsal = SALUD_PRIMARIA_QUESTIONS.filter((q) => minsalCats.includes(q.category));
      const farmaco = SALUD_PRIMARIA_QUESTIONS.filter((q) => q.category === 'farmacovigilancia');
      expect(minsal.length).toBe(150);
      expect(farmaco.length).toBe(50);
      expect(minsal.length + farmaco.length).toBe(200);
    });

    it('Ingeniería y Ciencias has 50 Álgebra Lineal, 50 Trigonometría, 50 Cónicas, 50 Física Mecánica', () => {
      const counts: Record<string, number> = {};
      INGENIERIA_QUESTIONS.forEach((q) => {
        counts[q.category] = (counts[q.category] || 0) + 1;
      });
      expect(counts['algebra-lineal']).toBe(50);
      expect(counts['trigonometria-analitica']).toBe(50);
      expect(counts['geometria-conicas']).toBe(50);
      expect(counts['fisica-mecanica']).toBe(50);
    });

    it('Notariado CSJ has 40 Notarial puro, 40 LENJVOD, 40 Sucesiones, 40 Contratos, 40 Mercantil', () => {
      const counts: Record<string, number> = {};
      NOTARY_EXAM_QUESTIONS.forEach((q) => {
        counts[q.category!] = (counts[q.category!] || 0) + 1;
      });
      expect(counts['notarial-puro']).toBe(40);
      expect(counts['lenjvod']).toBe(40);
      expect(counts['sucesiones']).toBe(40);
      expect(counts['contratos']).toBe(40);
      expect(counts['mercantil']).toBe(40);
    });

    it('CSSP has exactly 40 for each of the 5 Juntas (JVPM, JVPO, JVPE, JVPQF, JVPPS)', () => {
      const counts: Record<string, number> = {};
      CSSP_QUESTIONS_DATA.forEach((q) => {
        counts[q.juntaId] = (counts[q.juntaId] || 0) + 1;
      });
      expect(counts['jvpm']).toBe(40);
      expect(counts['jvpo']).toBe(40);
      expect(counts['jvpe']).toBe(40);
      expect(counts['jvpqf']).toBe(40);
      expect(counts['jvpps']).toBe(40);
    });

    it('ANSP Ascenso has 66 Cabo, 67 Sargento, 67 Oficial', () => {
      const cabos = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Cabo' || q.rank === 'cabo');
      const sargentos = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Sargento' || q.rank === 'sargento');
      const oficiales = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Oficial' || q.rank === 'oficial');
      expect(cabos.length).toBe(66);
      expect(sargentos.length).toBe(67);
      expect(oficiales.length).toBe(67);
      expect(cabos.length + sargentos.length + oficiales.length).toBe(200);
    });

    it('Compliance AML/SSF has 100 AML and 100 Seguros', () => {
      const aml = COMPLIANCE_QUESTIONS.filter((q) => q.category === 'AML');
      const seguros = COMPLIANCE_QUESTIONS.filter((q) => q.category === 'Seguros');
      expect(aml.length).toBe(100);
      expect(seguros.length).toBe(100);
      expect(aml.length + seguros.length).toBe(200);
    });
  });

  // -------------------------------------------------------------
  // CHECK 2: ID UNIQUENESS & ZERO COLLISION WITH BASE BANK
  // -------------------------------------------------------------
  describe('Check 2: ID Uniqueness and Base Bank Non-Collision', () => {
    it('all 1,400 questions have unique IDs internally and globally', () => {
      const allIds: string[] = [];
      MODULES.forEach((m) => {
        const modIds = new Set<string>();
        m.list.forEach((q: any) => {
          expect(typeof q.id).toBe('string');
          expect(q.id.trim().length).toBeGreaterThan(0);
          expect(modIds.has(q.id), `Duplicate ID within ${m.name}: ${q.id}`).toBe(false);
          modIds.add(q.id);
          allIds.push(q.id);
        });
      });
      const uniqueSet = new Set(allIds);
      expect(allIds.length).toBe(1400);
      expect(uniqueSet.size).toBe(1400);
    });

    it('zero collision with base bank in public/data', () => {
      const rootDir = process.cwd();
      const publicData = path.join(rootDir, 'public', 'data');
      const baseIds = new Set<string>();

      function scan(dir: string) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            scan(fullPath);
          } else if (entry.isFile() && entry.name.endsWith('.json') && !entry.name.includes('manifest') && !entry.name.includes('curriculum')) {
            try {
              const data = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
              if (Array.isArray(data)) {
                data.forEach((item: any) => {
                  if (item && item.id) baseIds.add(String(item.id));
                });
              }
            } catch {
              // Ignore
            }
          }
        }
      }

      ['questions', 'ansp', 'asd', 'avanzo', 'ena', 'escalafon'].forEach((sub) => {
        scan(path.join(publicData, sub));
      });

      expect(baseIds.size).toBeGreaterThan(15000);

      const allSpecializedIds = MODULES.flatMap((m) => m.list.map((q: any) => q.id));
      const collided = allSpecializedIds.filter((id) => baseIds.has(id));
      expect(collided).toEqual([]);
    });
  });

  // -------------------------------------------------------------
  // CHECK 3: STRUCTURAL INTEGRITY (OPTIONS, KEYS, EXPLANATIONS)
  // -------------------------------------------------------------
  describe('Check 3: Option Schemas, Answers, and Explanations', () => {
    it('every question has valid A, B, C, D options with non-empty text and no duplicates', () => {
      MODULES.forEach((m) => {
        const isEng = m.id === 'ingenieria';
        m.list.forEach((q: any) => {
          const opts = getOptionsDict(q);
          const keys = Object.keys(opts).sort();
          expect(keys, `Question ${q.id} in ${m.name} missing A,B,C,D keys`).toEqual(['A', 'B', 'C', 'D']);

          const texts = ['A', 'B', 'C', 'D'].map((k) => String(opts[k] || '').trim());
          texts.forEach((txt, idx) => {
            const minLen = isEng ? 1 : 4;
            expect(txt.length, `Option ${['A','B','C','D'][idx]} in ${q.id} too short: "${txt}"`).toBeGreaterThanOrEqual(minLen);
          });

          const uniqueTexts = new Set(texts.map((t) => t.toLowerCase()));
          expect(uniqueTexts.size, `Duplicate option texts in ${q.id} (${m.name})`).toBe(4);
        });
      });
    });

    it('every question has correct answer key in [A, B, C, D] matching an existing option', () => {
      MODULES.forEach((m) => {
        m.list.forEach((q: any) => {
          const key = q.correctAnswer || q.correctKey;
          expect(['A', 'B', 'C', 'D'], `Invalid correct key "${key}" in ${q.id} (${m.name})`).toContain(key);
          const opts = getOptionsDict(q);
          expect(opts[key], `Correct key ${key} not in options of ${q.id}`).toBeDefined();
        });
      });
    });

    it('statements and explanations exceed minimum length thresholds and distractor rationales are provided', () => {
      MODULES.forEach((m) => {
        m.list.forEach((q: any) => {
          const stmt = String(q.statement || q.problemStatement || '').trim();
          expect(stmt.length, `Statement too short in ${q.id} (${stmt.length})`).toBeGreaterThan(20);

          const expl = String(q.explanation || q.formalSolution || q.clinicalExplanation || '').trim();
          expect(expl.length, `Explanation too short in ${q.id} (${expl.length})`).toBeGreaterThan(25);

          // distractor rationales check if present
          if (q.distractorRationale) {
            const correctKey = q.correctAnswer || q.correctKey;
            ['A', 'B', 'C', 'D'].filter((k) => k !== correctKey).forEach((distKey) => {
              const rat = q.distractorRationale[distKey];
              expect(rat, `Distractor rationale missing for ${distKey} in ${q.id}`).toBeDefined();
              expect(String(rat).trim().length, `Trivial distractor rationale for ${distKey} in ${q.id}`).toBeGreaterThanOrEqual(5);
            });
          }
        });
      });
    });
  });

  // -------------------------------------------------------------
  // CHECK 4: ANTI-CHEATING, AUTHENTICITY & NO DUMMY FACADES
  // -------------------------------------------------------------
  describe('Check 4: Anti-Cheating & Substantive Technical Rigor', () => {
    it('contains ZERO dummy, placeholder, or mock terms across all 1,400 questions', () => {
      const forbiddenPatterns = [
        /\blorem ipsum\b/i,
        /\bTODO\b/,
        /\btest question\b/i,
        /\bpregunta de prueba\b/i,
        /\basdf\b/i,
        /\bplaceholder\b/i,
        /\bdummy\b/i,
        /\bfake\b/i,
      ];

      MODULES.forEach((m) => {
        m.list.forEach((q: any) => {
          const serialized = JSON.stringify(q);
          forbiddenPatterns.forEach((pattern) => {
            expect(serialized, `Suspicious dummy/mock pattern ${pattern} found in ${q.id} (${m.name})`).not.toMatch(pattern);
          });
        });
      });
    });

    it('verifies KaTeX formulas in Engineering have balanced delimiters ($ and $$)', () => {
      INGENIERIA_QUESTIONS.forEach((q: any) => {
        const text = `${q.problemStatement} ${q.formalSolution} ${(q.stepByStepDerivation || []).join(' ')}`;
        const double = (text.match(/\$\$/g) || []).length;
        expect(double % 2, `Unbalanced $$ in ${q.id}`).toBe(0);

        const withoutDouble = text.replace(/\$\$/g, '');
        const single = (withoutDouble.match(/(?<!\\)\$/g) || []).length;
        expect(single % 2, `Unbalanced $ in ${q.id}`).toBe(0);
      });
    });

    it('verifies presence of authentic Salvadoran legal and institutional foundations', () => {
      // Derecho Administrativo: LPA, LJCA, Firma Electrónica, MINEC, plazos
      const adminLawTexts = ADMIN_LAW_QUESTIONS.map((q) => `${q.statement} ${q.legalBasis} ${q.explanation}`).join(' ');
      expect(adminLawTexts).toMatch(/LPA|Procedimientos Administrativos/i);
      expect(adminLawTexts).toMatch(/Firma Electr\u00f3nica|MINEC|certificador/i);
      expect(adminLawTexts).toMatch(/silencio|recurso|audiencia|plazo/i);

      // Salud Primaria: MINSAL, UCSF, Dengue, HTA, Farmacovigilancia, DNM / SRS
      const saludTexts = SALUD_PRIMARIA_QUESTIONS.map((q) => `${q.statement} ${q.officialGuidelineRef} ${q.explanation}`).join(' ');
      expect(saludTexts).toMatch(/MINSAL|UCSF/i);
      expect(saludTexts).toMatch(/dengue|hipertensi\u00f3n|diabetes/i);
      expect(saludTexts).toMatch(/farmacovigilancia|Naranjo|Rawlins|Noti-FACED|DNM|SRS/i);

      // Notariado CSJ: Ley de Notariado, LENJVOD, Código Civil, Código de Comercio
      const notaryTexts = NOTARY_EXAM_QUESTIONS.map((q) => `${q.statement} ${q.legalBasis} ${q.explanation}`).join(' ');
      expect(notaryTexts).toMatch(/Ley de Notariado|C\u00f3digo Civil/i);
      expect(notaryTexts).toMatch(/LENJVOD|aceptaci\u00f3n de herencia|remedici\u00f3n/i);
      expect(notaryTexts).toMatch(/testigo|protocolo|matriz|testamento/i);

      // CSSP: Código de Salud, JVPM, JVPO, JVPE, JVPQF, JVPPS
      const csspTexts = CSSP_QUESTIONS_DATA.map((q) => `${q.statement} ${q.legalBasis} ${q.explanation}`).join(' ');
      expect(csspTexts).toMatch(/C\u00f3digo de Salud|CSSP/i);
      expect(csspTexts).toMatch(/JVPM|JVPO|JVPE|JVPQF|JVPPS/i);

      // ANSP: Ley de la Carrera Policial, Ley Org\u00e1nica PNC, ITOP, FGR, Cadena de Custodia
      const anspTexts = ANSP_ASCENSO_QUESTIONS.map((q) => `${q.statement} ${q.legalBasis} ${q.explanation}`).join(' ');
      expect(anspTexts).toMatch(/Carrera Policial|PNC|ANSP/i);
      expect(anspTexts).toMatch(/cadena de custodia|flagrancia|FGR|ITOP/i);

      // Compliance AML/SSF: LCLDA, UIF, FGR, SSF, UBO, Seguros
      const complianceTexts = COMPLIANCE_QUESTIONS.map((q) => `${q.statement} ${q.legalBasis} ${q.explanation}`).join(' ');
      expect(complianceTexts).toMatch(/UIF|FGR|Lavado de Dinero/i);
      expect(complianceTexts).toMatch(/SSF|Seguros|fianzas|p\u00f3liza/i);
    });
  });
});
