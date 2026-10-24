import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

import { ADMIN_LAW_QUESTIONS } from '../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../src/data/complianceAmlData';

describe('SUITE INVARIANTE: 1,400 Reactivos Especializados (200 x 7 Módulos)', () => {
  const MODULES = [
    { name: 'Derecho Administrativo & Firma Electrónica', list: ADMIN_LAW_QUESTIONS },
    { name: 'Salud Primaria & Farmacovigilancia', list: SALUD_PRIMARIA_QUESTIONS },
    { name: 'Métodos Cuantitativos & Ingeniería', list: INGENIERIA_QUESTIONS },
    { name: 'Examen de Notariado CSJ', list: NOTARY_EXAM_QUESTIONS },
    { name: 'Juntas de Vigilancia CSSP', list: CSSP_QUESTIONS_DATA },
    { name: 'Ascenso Policial ANSP', list: ANSP_ASCENSO_QUESTIONS },
    { name: 'Cumplimiento AML & Seguros SSF', list: COMPLIANCE_QUESTIONS },
  ];

  // =========================================================================
  // REGLA 1: Gran Total y Conteos por Módulo
  // =========================================================================
  describe('Invariante 1: Gran Total Exacto de 1,400 Reactivos (200 por módulo)', () => {
    it('cada uno de los 7 módulos contiene exactamente 200 reactivos', () => {
      expect(ADMIN_LAW_QUESTIONS.length).toBe(200);
      expect(SALUD_PRIMARIA_QUESTIONS.length).toBe(200);
      expect(INGENIERIA_QUESTIONS.length).toBe(200);
      expect(NOTARY_EXAM_QUESTIONS.length).toBe(200);
      expect(CSSP_QUESTIONS_DATA.length).toBe(200);
      expect(ANSP_ASCENSO_QUESTIONS.length).toBe(200);
      expect(COMPLIANCE_QUESTIONS.length).toBe(200);
    });

    it('la suma global de los 7 módulos especializados es exactamente 1,400 reactivos', () => {
      const grandTotal = MODULES.reduce((sum, m) => sum + m.list.length, 0);
      expect(grandTotal).toBe(1400);
    });
  });

  // =========================================================================
  // REGLA 2: Unicidad Absoluta de IDs (Interna y Global)
  // =========================================================================
  describe('Invariante 2: Cero IDs Duplicados Internos y Cero Duplicados Globales', () => {
    it('cada módulo tiene 200 identificadores estrictamente únicos', () => {
      MODULES.forEach(({ name, list }) => {
        const ids = list.map((q: any) => q.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size, `Módulo ${name} tiene IDs duplicados internamente`).toBe(200);
      });
    });

    it('el universo completo de 1,400 reactivos contiene exactamente 1,400 IDs únicos globales', () => {
      const allIds = MODULES.flatMap(({ list }) => list.map((q: any) => q.id));
      const globalUniqueIds = new Set(allIds);
      expect(allIds.length).toBe(1400);
      expect(globalUniqueIds.size).toBe(1400);
    });
  });

  // =========================================================================
  // REGLA 3: Cero Colisión con el Banco Base de 17,640 Preguntas
  // =========================================================================
  describe('Invariante 3: Cero Colisión con el Banco Base de 17,640 Preguntas', () => {
    it('ningún ID de los 1,400 reactivos colisiona con los IDs de las preguntas base JSON en public/data/', () => {
      const rootDir = process.cwd();
      const publicDataDir = path.join(rootDir, 'public', 'data');
      const baseBankIds = new Set<string>();

      // Función recursiva para recolectar todos los archivos JSON de preguntas en public/data
      function collectQuestionIds(dir: string) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            collectQuestionIds(fullPath);
          } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'manifest.json' && entry.name !== 'curriculum.json') {
            try {
              const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
              if (Array.isArray(content)) {
                content.forEach((item: any) => {
                  if (item && item.id) {
                    baseBankIds.add(String(item.id));
                  }
                });
              }
            } catch {
              // Si no es un array de preguntas, omitir
            }
          }
        }
      }

      collectQuestionIds(path.join(publicDataDir, 'questions'));
      collectQuestionIds(path.join(publicDataDir, 'ansp'));
      collectQuestionIds(path.join(publicDataDir, 'asd'));
      collectQuestionIds(path.join(publicDataDir, 'avanzo'));
      collectQuestionIds(path.join(publicDataDir, 'ena'));
      collectQuestionIds(path.join(publicDataDir, 'escalafon'));

      expect(baseBankIds.size).toBeGreaterThan(10000);

      const allSpecializedIds = MODULES.flatMap(({ list }) => list.map((q: any) => q.id));
      const collisions: string[] = [];

      for (const id of allSpecializedIds) {
        if (baseBankIds.has(id)) {
          collisions.push(id);
        }
      }

      expect(collisions, `Se detectaron colisiones de ID con el banco base: ${collisions.join(', ')}`).toEqual([]);
    });
  });

  // =========================================================================
  // REGLA 4: Exactamente 4 Opciones A, B, C, D No Vacías y Sin Duplicados
  // =========================================================================
  describe('Invariante 4: Opciones A, B, C, D Estructuradas, No Vacías (>3 caracteres) y Sin Duplicados', () => {
    function extractOptions(q: any): Record<string, string> {
      if (Array.isArray(q.options)) {
        const dict: Record<string, string> = {};
        q.options.forEach((opt: any) => {
          dict[opt.key] = opt.text;
        });
        return dict;
      }
      return q.options;
    }

    it('todas las 1,400 preguntas poseen exactamente las 4 opciones A, B, C, D', () => {
      MODULES.forEach(({ name, list }) => {
        list.forEach((q: any) => {
          const opts = extractOptions(q);
          expect(opts, `Pregunta ${q.id} en ${name} no tiene options válido`).toBeDefined();
          const keys = Object.keys(opts).sort();
          expect(keys, `Pregunta ${q.id} en ${name} no tiene exactamente llaves ['A', 'B', 'C', 'D']`).toEqual(['A', 'B', 'C', 'D']);
        });
      });
    });

    it('cada opción tiene texto no vacío (> 3 caracteres en módulos conceptuales, >= 1 en ingeniería)', () => {
      MODULES.forEach(({ name, list }) => {
        const isEngineering = name.includes('Ingeniería');
        const minLength = isEngineering ? 1 : 4;
        list.forEach((q: any) => {
          const opts = extractOptions(q);
          ['A', 'B', 'C', 'D'].forEach((letter) => {
            const text = String(opts[letter] || '').trim();
            expect(
              text.length,
              `Opción ${letter} en ${q.id} (${name}) tiene texto demasiado corto ("${text}")`
            ).toBeGreaterThanOrEqual(minLength);
          });
        });
      });
    });

    it('ninguna pregunta contiene opciones con texto duplicado entre sí', () => {
      MODULES.forEach(({ name, list }) => {
        list.forEach((q: any) => {
          const opts = extractOptions(q);
          const rawTexts = ['A', 'B', 'C', 'D'].map((letter) => opts[letter].trim().toLowerCase());
          const uniqueTexts = new Set(rawTexts);
          expect(
            uniqueTexts.size,
            `Pregunta ${q.id} en ${name} contiene textos de opciones repetidos`
          ).toBe(4);
        });
      });
    });
  });

  // =========================================================================
  // REGLA 5: Claves de Respuesta Correcta Estrictamente en ['A', 'B', 'C', 'D']
  // =========================================================================
  describe('Invariante 5: Clave Correcta Estrictamente en [A, B, C, D] y Existente', () => {
    it('cada reactivo tiene una clave correcta válida que apunta a una opción existente', () => {
      MODULES.forEach(({ name, list }) => {
        const isEngineering = name.includes('Ingeniería');
        const minLength = isEngineering ? 1 : 4;

        list.forEach((q: any) => {
          const correctKey = q.correctAnswer || q.correctKey;
          expect(['A', 'B', 'C', 'D'], `Pregunta ${q.id} en ${name} tiene clave inválida: ${correctKey}`).toContain(correctKey);

          let optionText = '';
          if (Array.isArray(q.options)) {
            const found = q.options.find((o: any) => o.key === correctKey);
            expect(found, `Clave ${correctKey} no encontrada en array options de ${q.id} (${name})`).toBeDefined();
            optionText = found ? found.text : '';
          } else {
            expect(q.options[correctKey], `Clave ${correctKey} no existe en objeto options de ${q.id} (${name})`).toBeDefined();
            optionText = q.options[correctKey];
          }

          expect(String(optionText).trim().length).toBeGreaterThanOrEqual(minLength);
        });
      });
    });
  });

  // =========================================================================
  // REGLA 6: Longitud de Enunciados (>20), Explicaciones (>25) y Base Legal/Tema (>5)
  // =========================================================================
  describe('Invariante 6: Enunciados >20 chars, Explicaciones >25 chars y Base Legal/Tema >5 chars', () => {
    it('todos los enunciados tienen longitud superior a 20 caracteres', () => {
      MODULES.forEach(({ name, list }) => {
        list.forEach((q: any) => {
          const stmt = String(q.statement || q.problemStatement || '').trim();
          expect(
            stmt.length,
            `Enunciado de ${q.id} en ${name} es demasiado corto (${stmt.length} chars)`
          ).toBeGreaterThan(20);
        });
      });
    });

    it('todas las explicaciones tienen longitud superior a 25 caracteres', () => {
      MODULES.forEach(({ name, list }) => {
        list.forEach((q: any) => {
          const expl = String(q.explanation || q.formalSolution || q.clinicalExplanation || '').trim();
          expect(
            expl.length,
            `Explicación de ${q.id} en ${name} es demasiado corta (${expl.length} chars)`
          ).toBeGreaterThan(25);
        });
      });
    });

    it('todos los reactivos cuentan con base legal, tema o referencia superior a 5 caracteres', () => {
      MODULES.forEach(({ name, list }) => {
        list.forEach((q: any) => {
          const ref = String(
            q.legalBasis ||
            q.officialGuidelineRef ||
            q.topic ||
            q.clinicalArea ||
            q.area ||
            ''
          ).trim();
          expect(
            ref.length,
            `Referencia/Base legal/Tema de ${q.id} en ${name} es demasiado corto (${ref.length} chars)`
          ).toBeGreaterThan(5);
        });
      });
    });

    it('los distractores cuentan con fundamentación técnica en los módulos con distractorRationale', () => {
      const modulesWithRationale = [
        { name: 'Derecho Administrativo', list: ADMIN_LAW_QUESTIONS },
        { name: 'Salud Primaria', list: SALUD_PRIMARIA_QUESTIONS },
        { name: 'Ingeniería', list: INGENIERIA_QUESTIONS },
        { name: 'CSSP', list: CSSP_QUESTIONS_DATA },
        { name: 'ANSP', list: ANSP_ASCENSO_QUESTIONS },
        { name: 'Compliance AML/Seguros', list: COMPLIANCE_QUESTIONS },
      ];

      modulesWithRationale.forEach(({ name, list }) => {
        list.forEach((q: any) => {
          const correctKey = q.correctAnswer || q.correctKey;
          const distractors = ['A', 'B', 'C', 'D'].filter((k) => k !== correctKey);
          expect(q.distractorRationale, `Pregunta ${q.id} en ${name} carece de distractorRationale`).toBeDefined();

          distractors.forEach((distKey) => {
            const rat = q.distractorRationale[distKey];
            expect(
              rat,
              `Distractor ${distKey} en ${q.id} (${name}) carece de justificación`
            ).toBeDefined();
            expect(
              String(rat).trim().length,
              `Justificación de distractor ${distKey} en ${q.id} (${name}) es trivial`
            ).toBeGreaterThanOrEqual(5);
          });
        });
      });
    });
  });

  // =========================================================================
  // REGLA 7: Cuotas Exactas de Subcategorías en los 7 Módulos
  // =========================================================================
  describe('Invariante 7: Cuotas Temáticas y de Subcategoría Exactas por Módulo', () => {
    it('Módulo 1 (Derecho Administrativo): 150 LPA y 50 Firma Electrónica MINEC', () => {
      const lpaCategories = ['procedimiento-comun', 'silencio-administrativo', 'recursos-administrativos', 'potestad-sancionadora'];
      const lpaCount = ADMIN_LAW_QUESTIONS.filter((q) => lpaCategories.includes(q.category)).length;
      const minecCount = ADMIN_LAW_QUESTIONS.filter((q) => q.category === 'firma-electronica').length;

      expect(lpaCount).toBe(150);
      expect(minecCount).toBe(50);
      expect(lpaCount + minecCount).toBe(200);
    });

    it('Módulo 2 (Salud Primaria): 150 Guías Clínicas MINSAL y 50 Farmacovigilancia SRS/DNM', () => {
      const minsalCategories = ['dengue', 'hta-dm2', 'iras', 'materno-infantil'];
      const minsalCount = SALUD_PRIMARIA_QUESTIONS.filter((q) => minsalCategories.includes(q.category)).length;
      const farmacoCount = SALUD_PRIMARIA_QUESTIONS.filter((q) => q.category === 'farmacovigilancia').length;

      expect(minsalCount).toBe(150);
      expect(farmacoCount).toBe(50);
      expect(minsalCount + farmacoCount).toBe(200);
    });

    it('Módulo 3 (Ingeniería y Ciencias): 50 Álgebra Lineal, 50 Trigonometría, 50 Cónicas, 50 Física Vectorial y KaTeX balanceado', () => {
      const counts: Record<string, number> = {
        'algebra-lineal': 0,
        'trigonometria-analitica': 0,
        'geometria-conicas': 0,
        'fisica-mecanica': 0,
      };

      INGENIERIA_QUESTIONS.forEach((q) => {
        counts[q.category] = (counts[q.category] || 0) + 1;

        // Verificación de KaTeX balanceado en enunciado y solución
        const fullMathText = `${q.problemStatement} ${q.formalSolution}`;
        const singleDollarCount = (fullMathText.match(/(?<!\\)\$/g) || []).length;
        // Los delimitadores $ deben estar emparejados (número par)
        expect(
          singleDollarCount % 2,
          `Delimitadores KaTeX ($) desbalanceados en problema ${q.id}`
        ).toBe(0);
      });

      expect(counts['algebra-lineal']).toBe(50);
      expect(counts['trigonometria-analitica']).toBe(50);
      expect(counts['geometria-conicas']).toBe(50);
      expect(counts['fisica-mecanica']).toBe(50);
    });

    it('Módulo 4 (Examen Notariado CSJ): 40 Notarial puro, 40 LENJVOD, 40 Sucesiones, 40 Contratos, 40 Mercantil', () => {
      const counts: Record<string, number> = {
        'notarial-puro': 0,
        'lenjvod': 0,
        'sucesiones': 0,
        'contratos': 0,
        'mercantil': 0,
      };

      NOTARY_EXAM_QUESTIONS.forEach((q) => {
        expect(q.category).toBeDefined();
        counts[q.category!] = (counts[q.category!] || 0) + 1;
      });

      expect(counts['notarial-puro']).toBe(40);
      expect(counts['lenjvod']).toBe(40);
      expect(counts['sucesiones']).toBe(40);
      expect(counts['contratos']).toBe(40);
      expect(counts['mercantil']).toBe(40);
    });

    it('Módulo 5 (Consejo Superior de Salud Pública - CSSP): exactamente 40 por cada una de las 5 Juntas', () => {
      const counts: Record<string, number> = {
        jvpm: 0,
        jvpo: 0,
        jvpe: 0,
        jvpqf: 0,
        jvpps: 0,
      };

      CSSP_QUESTIONS_DATA.forEach((q) => {
        counts[q.juntaId] = (counts[q.juntaId] || 0) + 1;
      });

      expect(counts.jvpm).toBe(40);
      expect(counts.jvpo).toBe(40);
      expect(counts.jvpe).toBe(40);
      expect(counts.jvpqf).toBe(40);
      expect(counts.jvpps).toBe(40);
    });

    it('Módulo 6 (Ascenso Policial ANSP): 66 Cabo, 67 Sargento, 67 Oficial', () => {
      const cabos = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Cabo' || q.rank === 'cabo');
      const sargentos = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Sargento' || q.rank === 'sargento');
      const oficiales = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Oficial' || q.rank === 'oficial');

      expect(cabos.length).toBe(66);
      expect(sargentos.length).toBe(67);
      expect(oficiales.length).toBe(67);
      expect(cabos.length + sargentos.length + oficiales.length).toBe(200);
    });

    it('Módulo 7 (Cumplimiento AML & Seguros SSF): 100 AML y 100 Seguros', () => {
      const aml = COMPLIANCE_QUESTIONS.filter((q) => q.category === 'AML');
      const seguros = COMPLIANCE_QUESTIONS.filter((q) => q.category === 'Seguros');

      expect(aml.length).toBe(100);
      expect(seguros.length).toBe(100);
      expect(aml.length + seguros.length).toBe(200);
    });
  });
});
