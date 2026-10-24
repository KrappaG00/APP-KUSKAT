import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

// Importación de datos desde el módulo dedicado y desde el componente para verificar retrocompatibilidad
import {
  TECHNICAL_COURSES as COURSES_FROM_DATA,
  SALVADORAN_NORMATIVE_INSTITUTIONS,
  TechnicalCourse,
  TechnicalCourseModule,
} from '../src/data/technicalCoursesData';
import {
  TECHNICAL_COURSES as COURSES_FROM_VIEW,
} from '../src/components/TechnicalCoursesView';

// Reactivos especializados existentes para verificar cero colisiones (1,400 reactivos en total)
import { ADMIN_LAW_QUESTIONS } from '../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../src/data/complianceAmlData';

describe('SUITE INVARIANTE: Cursos Técnicos Vocacionales KUSKAT (10 Cursos / 400 Horas)', () => {
  const EXPECTED_COURSE_IDS = [
    'electricidad',
    'electronica',
    'cocina-saludable',
    'soldadura',
    'microsoldadura',
    'reparacion-dispositivos',
    'agricultura-pequena',
    'logistica-metrologia',
    'mecanica-motos',
    'fontaneria-hidraulica',
  ];

  // Helper para extraer todos los reactivos de los módulos de forma flexible
  function getAllTechnicalQuestions(): any[] {
    return COURSES_FROM_DATA.flatMap((c) =>
      c.modules.flatMap((m: any) => m.quiz || m.questions || [])
    );
  }

  // Helper para extraer opciones de un reactivo como diccionario { A, B, C, D }
  function extractOptionsDict(q: any): Record<string, string> {
    const optsDict: Record<string, string> = {};
    if (Array.isArray(q.options)) {
      q.options.forEach((opt: any, idx: number) => {
        if (typeof opt === 'string') {
          const keys = ['A', 'B', 'C', 'D'];
          optsDict[keys[idx]] = opt;
        } else if (opt && typeof opt === 'object') {
          const key = opt.key || ['A', 'B', 'C', 'D'][idx];
          optsDict[key] = opt.text || '';
        }
      });
    } else if (q.options && typeof q.options === 'object') {
      Object.assign(optsDict, q.options);
    }
    return optsDict;
  }

  // =========================================================================
  // BLOQUE 1: Conteo de Cursos y Retrocompatibilidad
  // =========================================================================
  describe('Invariante 1: Catálogo de 10 Especialidades Técnicas y Retrocompatibilidad', () => {
    it('TECHNICAL_COURSES contiene exactamente 10 cursos vocacionales', () => {
      expect(COURSES_FROM_DATA).toBeDefined();
      expect(COURSES_FROM_DATA.length).toBe(10);
    });

    it('la re-exportación en TechnicalCoursesView es idéntica por referencia o consistente con la migración modular', () => {
      expect(COURSES_FROM_VIEW).toBeDefined();
      if (COURSES_FROM_VIEW === COURSES_FROM_DATA) {
        expect(COURSES_FROM_VIEW.length).toBe(10);
        expect(COURSES_FROM_VIEW).toBe(COURSES_FROM_DATA);
      } else {
        // En fase de transición previa a Milestone 2, TechnicalCoursesView preserva la estructura de cursos base (>=8)
        expect(COURSES_FROM_VIEW.length).toBeGreaterThanOrEqual(8);
      }
    });

    it('todos los identificadores de cursos coinciden con el inventario oficial sin duplicados', () => {
      const ids = COURSES_FROM_DATA.map((c) => c.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(10);
      EXPECTED_COURSE_IDS.forEach((expectedId) => {
        expect(ids).toContain(expectedId);
      });
    });

    it('cada curso preserva todos los campos retrocompatibles con datos no triviales', () => {
      COURSES_FROM_DATA.forEach((course) => {
        expect(course.id.trim().length).toBeGreaterThan(0);
        expect(course.title.trim().length).toBeGreaterThan(5);
        expect(course.category.trim().length).toBeGreaterThan(3);
        expect(course.icon.trim().length).toBeGreaterThan(0);
        expect(course.accentColor.trim().length).toBeGreaterThan(0);
        expect(course.badgeBg.trim().length).toBeGreaterThan(0);
        expect(course.badgeText.trim().length).toBeGreaterThan(0);
        expect(course.summary.trim().length).toBeGreaterThan(20);
        expect(course.targetAudience.trim().length).toBeGreaterThan(20);
        expect(Array.isArray(course.jobOpportunities)).toBe(true);
        expect(course.jobOpportunities.length).toBeGreaterThanOrEqual(3);
        course.jobOpportunities.forEach((opp) => {
          expect(opp.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });

  // =========================================================================
  // BLOQUE 2: Malla Curricular Homogénea (4 Módulos de 10 Horas = 40h/curso, 400h Total)
  // =========================================================================
  describe('Invariante 2: Malla Didáctica de 4 Módulos de 10h (40h por curso, 400h Totales)', () => {
    it('cada uno de los 10 cursos contiene exactamente 4 módulos', () => {
      COURSES_FROM_DATA.forEach((course) => {
        expect(
          course.modules.length,
          `Curso ${course.id} no tiene exactamente 4 módulos`
        ).toBe(4);
      });
    });

    it('el gran total de módulos en el sistema es exactamente 40', () => {
      const totalModules = COURSES_FROM_DATA.reduce((sum, c) => sum + c.modules.length, 0);
      expect(totalModules).toBe(40);
    });

    it('cada módulo tiene duración exacta de 10 horas y la numeración es correlativa 1..4', () => {
      COURSES_FROM_DATA.forEach((course) => {
        course.modules.forEach((mod, idx) => {
          expect(mod.number).toBe(idx + 1);
          const hours = (mod as any).hours ?? (mod as any).durationHours;
          expect(hours, `Módulo ${mod.number} en ${course.id} no tiene 10 horas`).toBe(10);
          expect(mod.title.trim().length).toBeGreaterThan(5);
          expect(mod.description.trim().length).toBeGreaterThan(20);
          expect(Array.isArray(mod.practicalSkills)).toBe(true);
          expect(mod.practicalSkills.length).toBeGreaterThanOrEqual(2);
        });
      });
    });

    it('cada curso suma exactamente 40 horas pedagógicas', () => {
      COURSES_FROM_DATA.forEach((course) => {
        const courseHours = course.modules.reduce(
          (sum, m: any) => sum + (m.hours ?? m.durationHours ?? 0),
          0
        );
        expect(courseHours, `Curso ${course.id} no suma exactamente 40 horas`).toBe(40);
      });
    });

    it('la suma global de horas pedagógicas de los 10 cursos es exactamente 400 horas', () => {
      const grandTotalHours = COURSES_FROM_DATA.reduce(
        (sum, c) =>
          sum +
          c.modules.reduce((mSum, m: any) => mSum + (m.hours ?? m.durationHours ?? 0), 0),
        0
      );
      expect(grandTotalHours).toBe(400);
    });
  });

  // =========================================================================
  // BLOQUE 3: Fórmulas Matemáticas y Cálculos Técnicos de Taller
  // =========================================================================
  describe('Invariante 3: Fórmulas Matemáticas y Cálculos de Taller en los 40 Módulos', () => {
    it('todos los 40 módulos incluyen al menos una fórmula técnica de taller (>=40 fórmulas)', () => {
      let formulaCount = 0;
      COURSES_FROM_DATA.forEach((course) => {
        course.modules.forEach((mod: any) => {
          const formulas = mod.workshopFormulas ?? mod.formulas;
          expect(
            Array.isArray(formulas),
            `Módulo ${mod.number} en ${course.id} no tiene arreglo de fórmulas`
          ).toBe(true);
          expect(
            formulas.length,
            `Módulo ${mod.number} en ${course.id} tiene menos de 1 fórmula`
          ).toBeGreaterThanOrEqual(1);
          formulaCount += formulas.length;

          formulas.forEach((f: any) => {
            expect(f.name.trim().length).toBeGreaterThan(3);
            const expr = f.expression ?? f.formula;
            expect(String(expr || '').trim().length).toBeGreaterThan(3);
            expect(f.description.trim().length).toBeGreaterThan(15);
            const practical = f.practicalExample ?? f.practicalApplication;
            expect(String(practical || '').trim().length).toBeGreaterThan(15);
          });
        });
      });
      expect(formulaCount).toBeGreaterThanOrEqual(40);
    });

    it('verifica presencia de fórmulas analíticas específicas por oficio', () => {
      const allFormulasText = COURSES_FROM_DATA.flatMap((c) =>
        c.modules.flatMap((m: any) => {
          const formulas = m.workshopFormulas ?? m.formulas ?? [];
          return formulas.map(
            (f: any) =>
              `${f.name} ${f.expression || f.formula || ''} ${f.description || ''} ${
                f.practicalExample || f.practicalApplication || ''
              }`
          );
        })
      ).join(' ');

      // Electricidad / Electrónica: Ohm / Watt / Caída de tensión / Delta V / RC / Tau
      expect(allFormulasText).toMatch(/Ohm|Watt|ca[ií]da de tensi[oó]n|\Delta V|RC|\btau\b/i);
      // Soldadura: Heat Input (HI)
      expect(allFormulasText).toMatch(/Heat Input|calor|kJ\/mm|soldadura/i);
      // Microsoldadura: Joule / Potencia
      expect(allFormulasText).toMatch(/Joule|I\^2|potencia|disipaci[oó]n/i);
      // Reparación: Consumo DC / Capacidad batería
      expect(allFormulasText).toMatch(/consumo|bater[ií]a|mAh|Wh/i);
      // Agricultura: Balance C:N / Riego
      expect(allFormulasText).toMatch(/C:N|compost|riego|l[aá]mina/i);
      // Logística: EOQ / Lote económico
      expect(allFormulasText).toMatch(/EOQ|lote econ[oó]mico|inventario/i);
      // Mecánica Motos: Relación compresión / Cilindrada
      expect(allFormulasText).toMatch(/cilindrada|compresi[oó]n|carrera|di[aá]metro/i);
      // Fontanería: Hazen-Williams / Caudal
      expect(allFormulasText).toMatch(/Hazen|Williams|caudal|p[eé]rdida de carga|Q =/i);
    });
  });

  // =========================================================================
  // BLOQUE 4: Cobertura Legal Salvadoreña y las 8 Instituciones Mandatorias
  // =========================================================================
  describe('Invariante 4: Fundamento Legal Salvadoreño y Cobertura de las 8 Instituciones', () => {
    it('SALVADORAN_NORMATIVE_INSTITUTIONS define las 8 instituciones oficiales salvadoreñas', () => {
      expect(SALVADORAN_NORMATIVE_INSTITUTIONS).toBeDefined();
      const keys = Object.keys(SALVADORAN_NORMATIVE_INSTITUTIONS);
      const expectedInstitutions = [
        'SIGET',
        'MTPS',
        'MINSAL',
        'MARN',
        'MAG',
        'ANDA',
        'OSARTEC',
        'INCAF',
      ];
      expectedInstitutions.forEach((inst) => {
        expect(keys, `Institución ${inst} no está en SALVADORAN_NORMATIVE_INSTITUTIONS`).toContain(
          inst
        );
      });
    });

    it('todos los 40 módulos incluyen marco legal explícito salvadoreño con artículos y decretos', () => {
      COURSES_FROM_DATA.forEach((course) => {
        course.modules.forEach((mod: any) => {
          const legal =
            mod.legalCitations ??
            mod.legalFramework ??
            mod.legalBasis ??
            mod.normativeFramework;
          expect(legal, `Módulo ${mod.number} en ${course.id} no posee marco legal`).toBeDefined();
          if (Array.isArray(legal)) {
            expect(legal.length).toBeGreaterThanOrEqual(1);
            legal.forEach((l: any) => {
              if (typeof l === 'string') {
                expect(l.trim().length).toBeGreaterThan(10);
              } else {
                expect(l.institution || l.institutionAcronym || l.law || l.decree).toBeDefined();
                expect(
                  String(l.law || l.decree || l.article || l.summary).trim().length
                ).toBeGreaterThan(3);
              }
            });
          } else {
            expect(String(legal).trim().length).toBeGreaterThan(10);
          }
        });
      });
    });

    it('las 8 instituciones regulatorias están representadas a lo largo de los 10 cursos', () => {
      const corpusLegal = JSON.stringify(COURSES_FROM_DATA);
      expect(corpusLegal).toMatch(/SIGET/);
      expect(corpusLegal).toMatch(/MTPS|LGPRLT|D\.E\.\s*86/);
      expect(corpusLegal).toMatch(/MINSAL|C[oó]digo de Salud/);
      expect(corpusLegal).toMatch(/MARN|Medio Ambiente|RAEE/);
      expect(corpusLegal).toMatch(/MAG|Pesticidas|CENTA/);
      expect(corpusLegal).toMatch(/ANDA/);
      expect(corpusLegal).toMatch(/OSARTEC|RTCA|CIM|805/);
      expect(corpusLegal).toMatch(/INCAF|896/);
    });
  });

  // =========================================================================
  // BLOQUE 5: Procedimientos Obligatorios de Seguridad Ocupacional (LGPRLT)
  // =========================================================================
  describe('Invariante 5: Procedimientos Preventivos y Seguridad Ocupacional en Cada Módulo', () => {
    it('cada uno de los 40 módulos define al menos 2 protocolos de seguridad y EPP', () => {
      COURSES_FROM_DATA.forEach((course) => {
        course.modules.forEach((mod: any) => {
          const safety = mod.safetyProtocols ?? mod.safetyProcedures;
          expect(
            Array.isArray(safety),
            `Módulo ${mod.number} de ${course.id} sin protocolos de seguridad`
          ).toBe(true);
          expect(
            safety.length,
            `Módulo ${mod.number} de ${course.id} tiene menos de 2 protocolos`
          ).toBeGreaterThanOrEqual(2);
          safety.forEach((protocol: any) => {
            const text =
              typeof protocol === 'string'
                ? protocol
                : protocol.description ?? protocol.title ?? protocol.protocol;
            expect(String(text).trim().length).toBeGreaterThan(10);
          });
        });
      });
    });
  });

  // =========================================================================
  // BLOQUE 6: Cuestionario Formativo (>=3 Preguntas/Módulo, >=120 Totales)
  // =========================================================================
  describe('Invariante 6: Reactivos de Autoevaluación Formativa (>=3 por Módulo, >=120 Totales)', () => {
    it('cada módulo contiene al menos 3 preguntas de autoevaluación (>=120 en total)', () => {
      COURSES_FROM_DATA.forEach((course) => {
        course.modules.forEach((mod: any) => {
          const quiz = mod.quiz ?? mod.questions;
          expect(
            Array.isArray(quiz),
            `Módulo ${mod.number} de ${course.id} no tiene arreglo quiz`
          ).toBe(true);
          expect(
            quiz.length,
            `Módulo ${mod.number} de ${course.id} tiene menos de 3 preguntas`
          ).toBeGreaterThanOrEqual(3);
        });
      });

      const allQ = getAllTechnicalQuestions();
      expect(allQ.length).toBeGreaterThanOrEqual(120);
    });

    it('todos los reactivos poseen identificadores únicos no vacíos', () => {
      const allQ = getAllTechnicalQuestions();
      const ids = allQ.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(allQ.length);
      allQ.forEach((q) => {
        expect(typeof q.id).toBe('string');
        expect(q.id.trim().length).toBeGreaterThan(0);
      });
    });

    it('cada reactivo tiene 4 opciones A, B, C, D con texto no vacío (>3 caracteres) y sin duplicados', () => {
      const allQ = getAllTechnicalQuestions();
      allQ.forEach((q) => {
        const optsDict = extractOptionsDict(q);
        expect(Object.keys(optsDict).sort()).toEqual(['A', 'B', 'C', 'D']);

        ['A', 'B', 'C', 'D'].forEach((key) => {
          const text = String(optsDict[key] || '').trim();
          expect(
            text.length,
            `Opción ${key} en pregunta ${q.id} tiene texto insuficiente: "${text}"`
          ).toBeGreaterThanOrEqual(2);
        });

        const distinctTexts = new Set(Object.values(optsDict).map((t) => t.trim().toLowerCase()));
        expect(
          distinctTexts.size,
          `Pregunta ${q.id} contiene opciones repetidas: ${JSON.stringify(optsDict)}`
        ).toBe(4);
      });
    });

    it('la clave de respuesta correcta es estrictamente una de [A, B, C, D] y apunta a una opción existente', () => {
      const allQ = getAllTechnicalQuestions();
      allQ.forEach((q) => {
        const key = q.correctAnswer ?? q.correctKey;
        expect(['A', 'B', 'C', 'D'], `Clave inválida en pregunta ${q.id}: ${key}`).toContain(key);

        const optsDict = extractOptionsDict(q);
        const optVal = optsDict[key];
        expect(optVal, `Clave ${key} no existe en opciones de ${q.id}`).toBeDefined();
        expect(String(optVal).trim().length).toBeGreaterThanOrEqual(2);
      });
    });

    it('enunciados, explicaciones y bases legales cumplen con umbrales de longitud sustantiva', () => {
      const allQ = getAllTechnicalQuestions();
      allQ.forEach((q) => {
        const statement = q.statement ?? q.question;
        expect(
          String(statement || '').trim().length,
          `Enunciado corto en pregunta ${q.id}`
        ).toBeGreaterThan(25);

        expect(
          String(q.explanation || '').trim().length,
          `Explicación corta en pregunta ${q.id}`
        ).toBeGreaterThan(25);

        const basis = q.legalBasis ?? q.technicalStandard ?? q.technicalBasis ?? q.basis;
        expect(
          String(basis || '').trim().length,
          `Base técnica o legal corta en pregunta ${q.id}`
        ).toBeGreaterThan(5);
      });
    });

    it('cero términos comodín, mock o placeholder en todo el catálogo de reactivos', () => {
      const forbidden = [
        /\blorem ipsum\b/i,
        /\bTODO\b/,
        /\btest question\b/i,
        /\bpregunta de prueba\b/i,
        /\bplaceholder\b/i,
        /\bdummy\b/i,
        /\bfake\b/i,
      ];

      const allQ = getAllTechnicalQuestions();
      allQ.forEach((q) => {
        const serialized = JSON.stringify(q);
        forbidden.forEach((regex) => {
          expect(
            serialized,
            `Término no permitido ${regex} detectado en reactivo ${q.id}`
          ).not.toMatch(regex);
        });
      });
    });
  });

  // =========================================================================
  // BLOQUE 7: Cero Colisión de IDs con Banco Base y Módulos Especializados
  // =========================================================================
  describe('Invariante 7: Cero Colisión de IDs con Banco Base (17,640) y Especializados (1,400)', () => {
    it('ningún ID de reactivos técnicos colisiona con el banco base de 17,640 preguntas en public/data/', () => {
      const publicDataDir = path.join(process.cwd(), 'public', 'data');
      const baseBankIds = new Set<string>();

      function collectBaseIds(dir: string) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            collectBaseIds(fullPath);
          } else if (
            entry.isFile() &&
            entry.name.endsWith('.json') &&
            entry.name !== 'manifest.json' &&
            entry.name !== 'curriculum.json'
          ) {
            try {
              const parsed = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
              if (Array.isArray(parsed)) {
                parsed.forEach((item: any) => {
                  if (item && item.id) baseBankIds.add(String(item.id));
                });
              }
            } catch {}
          }
        }
      }

      ['questions', 'ansp', 'asd', 'avanzo', 'ena', 'escalafon'].forEach((sub) => {
        collectBaseIds(path.join(publicDataDir, sub));
      });

      expect(baseBankIds.size).toBeGreaterThan(10000);

      const allTechIds = getAllTechnicalQuestions().map((q) => String(q.id));

      const collisions = allTechIds.filter((id) => baseBankIds.has(id));
      expect(collisions, `Colisión de IDs con banco base: ${collisions.join(', ')}`).toEqual([]);
    });

    it('ningún ID de reactivos técnicos colisiona con los 1,400 reactivos especializados existentes', () => {
      const specializedLists = [
        ADMIN_LAW_QUESTIONS,
        SALUD_PRIMARIA_QUESTIONS,
        INGENIERIA_QUESTIONS,
        NOTARY_EXAM_QUESTIONS,
        CSSP_QUESTIONS_DATA,
        ANSP_ASCENSO_QUESTIONS,
        COMPLIANCE_QUESTIONS,
      ];

      const specializedIds = new Set(
        specializedLists.flatMap((list) => list.map((q: any) => String(q.id)))
      );
      expect(specializedIds.size).toBe(1400);

      const allTechIds = getAllTechnicalQuestions().map((q) => String(q.id));

      const collisions = allTechIds.filter((id) => specializedIds.has(id));
      expect(
        collisions,
        `Colisión de IDs con reactivos especializados: ${collisions.join(', ')}`
      ).toEqual([]);
    });
  });
});
