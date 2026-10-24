# Análisis de Arquitectura de Pruebas e Invariantes de Verificación (Explorer 3b)

**Fecha:** 2026-10-23T23:36:00Z  
**Autor:** Explorer 3b (Test Suite Specs & Invariant Verification)  
**Entorno:** Windows, Node.js, Vite 6.1.0, Vitest 4.1.11, TypeScript 5.7.3  
**Directorio de trabajo:** `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_3b`

---

## 1. Diagnóstico de la Infraestructura de Pruebas y Vitest

### 1.1 Configuración de Vitest (`vite.config.ts` vs `vitest.config.ts`)
- **Estado Actual**:
  - En la raíz del proyecto **no existe** un archivo `vitest.config.ts`.
  - Vitest 4.1.11 utiliza directamente `vite.config.ts`, aprovechando los plugins `@vitejs/plugin-react` y `@tailwindcss/vite`, así como el alias `@` mapeado a `./src`.
  - En `package.json:11`, el script de prueba está configurado como:
    ```json
    "test": "vitest run"
    ```
- **Comportamiento del Descubrimiento de Pruebas**:
  - Por defecto, Vitest ejecuta cualquier archivo con patrón `**/*.{test,spec}.?(c|m)[jt]s?(x)`.
  - Esto provoca que se descubran y ejecuten archivos de prueba transitorios o de auditorías situados en `.agents/teamwork/` (por ejemplo, `.agents/teamwork/victory_auditor_2/independent_auditor.test.ts`).
  - **Recomendación para Implementación**: Se recomienda formalizar `vitest.config.ts` o agregar un bloque `test` en `vite.config.ts` para restringir el include a `tests/**/*.test.ts` y excluir explícitamente `.agents/**` y `dist/**`.

### 1.2 Auditoría Empírica de Scripts en `package.json`
Se ejecutaron todos los scripts de aseguramiento de calidad del repositorio con los siguientes resultados empíricos:

| Script / Comando | Código de Salida | Métricas / Resultado Observado | Estado |
|---|---|---|---|
| `npm run typecheck` (`tsc --noEmit`) | `0` | Cero errores de tipado TypeScript en los 1,731 módulos. | **PASS** |
| `npm test` (`vitest run`) | `0` | **22 suites ejecutadas, 287 de 287 pruebas aprobadas (100%)** en 20.18s. | **PASS** |
| `npm run validate:bank` (`node scripts/validate-bank.mjs`) | `0` | 17,640 preguntas válidas intactas (UES: 7500, ANSP: 250, ASD: 2190, AVANZO: 3000, ENA: 1400, ESCALAFON: 3300). 0 errores, 0 advertencias. | **PASS** |
| `npm run validate:i18n` (`node scripts/validate-i18n.mjs`) | `0` | 100% UI coverage (117/117 claves) en los 7 idiomas (`es`, `nahuat`, `lenca`, `kakawira`, `en`, `ar`, `zh`). | **PASS** |
| `npm run build` (`vite build`) | `0` | Compilación de producción limpia en 19.36s. Cero errores de bundler. | **PASS** |
| `git grep "7943 9901"` | `1` | Cero ocurrencias en archivos rastreados. Canal WhatsApp oficial `+503 7657 4463` preservado. | **PASS** |

---

## 2. Inventario de Invariantes para Cursos Técnicos (10 Cursos / 400 Horas)

Basado en `ORIGINAL_REQUEST.md` (requisitos R1, R2, R3, R4) y los hallazgos de Explorer 1 y Spec Miner 2b:

1. **Catálogo de 10 Especialidades Técnicas**:
   - `electricidad`: Electricidad Residencial e Industrial (40h)
   - `electronica`: Electrónica Analógica y Digital (40h)
   - `cocina-saludable`: Cocina Saludable e Inocuidad Alimentaria (40h)
   - `soldadura`: Soldadura por Arco y Procesos Industriales (40h)
   - `microsoldadura`: Microsoldadura y Reparación a Nivel de Componente (40h)
   - `reparacion-dispositivos`: Reparación de Celulares y Computadoras (40h)
   - `agricultura-pequena`: Agricultura Urbana y Pequeños Cultivos Agroecológicos (40h)
   - `logistica-metrologia`: Logística de Almacenes, Inventarios y Metrología (40h)
   - `mecanica-motos`: Mecánica y Mantenimiento Integral de Motocicletas (40h - NUEVO)
   - `fontaneria-hidraulica`: Fontanería e Instalaciones Hidráulicas y Sanitarias Residenciales (40h - NUEVO)

2. **Estructura Modular Homogénea**:
   - Exactamente 4 módulos por curso = **40 módulos totales**.
   - Cada módulo tiene exactamente **10 horas** pedagógicas.
   - Cada curso totaliza exactamente **40 horas**.
   - El gran total global suma exactamente **400 horas pedagógicas**.

3. **Autoevaluación Formativa**:
   - Mínimo 3 reactivos por módulo = **mínimo 120 reactivos formativos**.
   - Exactamente 4 opciones A, B, C, D con texto sustantivo (>3 caracteres) y sin textos duplicados.
   - Clave de respuesta correcta en `['A', 'B', 'C', 'D']` existente.
   - Justificación técnica y explicación de distractores (>25 caracteres).
   - Base legal/técnica citada (>5 caracteres).
   - Identificadores únicos correlativos (ej. `tech-[curso]-m[1-4]-q[1-3]`).
   - Cero colisiones con el banco base (17,640) ni con módulos especializados (1,400).
   - Cero términos comodín o de relleno (`dummy`, `placeholder`, `TODO`, `lorem ipsum`, `pregunta de prueba`).

4. **Marco Normativo Salvadoreño (8 Instituciones Mandatorias)**:
   - **SIGET**: Superintendencia General de Electricidad y Telecomunicaciones (D.L. 107 Ley General de Electricidad, D.E. 70 Reglamento, Normas de Acometidas e Instalaciones).
   - **MTPS**: Ministerio de Trabajo y Previsión Social (D.L. 254 Ley General de Prevención de Riesgos en los Lugares de Trabajo LGPRLT, D.E. 86 Reglamento General).
   - **MINSAL**: Ministerio de Salud (D.L. 955 Código de Salud, Arts. 56+ fontanería, Arts. 88-105 manipulación de alimentos, Carnet de Manipulador).
   - **MARN**: Ministerio de Medio Ambiente y Recursos Naturales (D.L. 233 Ley del Medio Ambiente, D.E. 41 Reglamento RAEE, manejo ambiental de aceites usados y baterías plomo-ácido/litio).
   - **MAG**: Ministerio de Agricultura y Ganadería (D.L. 315 Ley sobre Control de Pesticidas, Fertilizantes y Productos para Uso Agropecuario, CENTA).
   - **ANDA**: Administración Nacional de Acueductos y Alcantarillados (Normas Técnicas de Diseño y Acometida para Sistemas de Acueducto y Alcantarillado).
   - **OSARTEC / CIM**: Organismo Salvadoreño de Reglamentación Técnica / Centro de Investigaciones de Metrología (D.L. 805 Ley del Sistema Salvadoreño para la Calidad, RTCA 67.01.33:06 BPM, OIML R 76).
   - **INCAF**: Instituto Nacional de Capacitación y Formación (D.L. 896 Ley del INCAF, marco rector de capacitación técnico-profesional en El Salvador).

5. **Fórmulas de Taller Matemáticas y Técnicas**:
   - Al menos 1 fórmula técnica por módulo = **mínimo 40 fórmulas**.
   - Nombre técnico, fórmula matemática, variables con unidades y aplicación práctica de taller.
   - Presencia de fórmulas clave: Ley de Ohm/Watt/caída de tensión, constantes RC/RL, divisor de tensión, factor de rendimiento/dilución de cloro, Heat Input en soldadura, Ley de Joule en microsoldadura, consumo en arranque / Wh en diagnóstico, relación C:N de composta, Lote Económico de Pedido (EOQ), relación de compresión y cilindrada, ecuación de Hazen-Williams y caudal de fontanería.

6. **Preservación de Retrocompatibilidad**:
   - `TechnicalCourse` y `TECHNICAL_COURSES` deben ser re-exportados desde `src/components/TechnicalCoursesView.tsx`.
   - Propiedades preexistentes (`id`, `title`, `category`, `icon`, `accentColor`, `badgeBg`, `badgeText`, `summary`, `targetAudience`, `modules: [{ number, title, description, practicalSkills }]`, `jobOpportunities`) intactas y pobladas.

---

## 3. Especificación Arquitectónica de `tests/technicalCourses.test.ts`

A continuación se detalla la suite completa que se implementará para verificar de forma exhaustiva todos los invariantes curriculares, matemáticos, legales y programáticos:

```typescript
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

// Reactivos especializados existentes para verificar cero colisiones
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

  // =========================================================================
  // BLOQUE 1: Conteo de Cursos y Retrocompatibilidad
  // =========================================================================
  describe('Invariante 1: Catálogo de 10 Especialidades Técnicas y Retrocompatibilidad', () => {
    it('TECHNICAL_COURSES contiene exactamente 10 cursos vocacionales', () => {
      expect(COURSES_FROM_DATA).toBeDefined();
      expect(COURSES_FROM_DATA.length).toBe(10);
    });

    it('la re-exportación en TechnicalCoursesView es idéntica por referencia', () => {
      expect(COURSES_FROM_VIEW).toBeDefined();
      expect(COURSES_FROM_VIEW.length).toBe(10);
      expect(COURSES_FROM_VIEW).toBe(COURSES_FROM_DATA);
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
        const courseHours = course.modules.reduce((sum, m: any) => sum + (m.hours ?? m.durationHours ?? 0), 0);
        expect(courseHours, `Curso ${course.id} no suma exactamente 40 horas`).toBe(40);
      });
    });

    it('la suma global de horas pedagógicas de los 10 cursos es exactamente 400 horas', () => {
      const grandTotalHours = COURSES_FROM_DATA.reduce(
        (sum, c) => sum + c.modules.reduce((mSum, m: any) => mSum + (m.hours ?? m.durationHours ?? 0), 0),
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
          expect(Array.isArray(mod.formulas), `Módulo ${mod.number} en ${course.id} no tiene arreglo formulas`).toBe(true);
          expect(mod.formulas.length, `Módulo ${mod.number} en ${course.id} tiene menos de 1 fórmula`).toBeGreaterThanOrEqual(1);
          formulaCount += mod.formulas.length;

          mod.formulas.forEach((f: any) => {
            expect(f.name.trim().length).toBeGreaterThan(3);
            expect(f.formula.trim().length).toBeGreaterThan(3);
            expect(f.description.trim().length).toBeGreaterThan(15);
            expect(f.practicalApplication.trim().length).toBeGreaterThan(15);
          });
        });
      });
      expect(formulaCount).toBeGreaterThanOrEqual(40);
    });

    it('verifica presencia de fórmulas analíticas específicas por oficio', () => {
      const allFormulasText = COURSES_FROM_DATA.flatMap((c) =>
        c.modules.flatMap((m: any) => (m.formulas || []).map((f: any) => `${f.name} ${f.formula} ${f.description}`))
      ).join(' ');

      // Electricidad / Electrónica: Ohm / Watt / Caída de tensión / Tau
      expect(allFormulasText).toMatch(/Ohm|Watt|ca[ií]da de tensi[oó]n|\Delta V|RC/i);
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
      const expectedInstitutions = ['SIGET', 'MTPS', 'MINSAL', 'MARN', 'MAG', 'ANDA', 'OSARTEC', 'INCAF'];
      expectedInstitutions.forEach((inst) => {
        expect(keys, `Institución ${inst} no está en SALVADORAN_NORMATIVE_INSTITUTIONS`).toContain(inst);
      });
    });

    it('todos los 40 módulos incluyen marco legal explícito salvadoreño con artículos y decretos', () => {
      COURSES_FROM_DATA.forEach((course) => {
        course.modules.forEach((mod: any) => {
          const legal = mod.legalFramework ?? mod.legalBasis ?? mod.normativeFramework;
          expect(legal, `Módulo ${mod.number} en ${course.id} no posee marco legal`).toBeDefined();
          if (Array.isArray(legal)) {
            expect(legal.length).toBeGreaterThanOrEqual(1);
            legal.forEach((l: any) => {
              expect(l.institution || l.institutionAcronym || l.law).toBeDefined();
              expect(String(l.law || l.article).trim().length).toBeGreaterThan(3);
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
      expect(corpusLegal).toMatch(/OSARTEC|RTCA|CIM/);
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
          const safety = mod.safetyProcedures;
          expect(Array.isArray(safety), `Módulo ${mod.number} de ${course.id} sin safetyProcedures`).toBe(true);
          expect(safety.length, `Módulo ${mod.number} de ${course.id} tiene menos de 2 protocolos`).toBeGreaterThanOrEqual(2);
          safety.forEach((protocol: any) => {
            const text = typeof protocol === 'string' ? protocol : protocol.description ?? protocol.title;
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
    function getAllQuestions(): any[] {
      return COURSES_FROM_DATA.flatMap((c) =>
        c.modules.flatMap((m: any) => m.quiz || m.questions || [])
      );
    }

    it('cada módulo contiene al menos 3 preguntas de autoevaluación (>=120 en total)', () => {
      COURSES_FROM_DATA.forEach((course) => {
        course.modules.forEach((mod: any) => {
          const quiz = mod.quiz || mod.questions;
          expect(Array.isArray(quiz), `Módulo ${mod.number} de ${course.id} no tiene arreglo quiz`).toBe(true);
          expect(quiz.length, `Módulo ${mod.number} de ${course.id} tiene menos de 3 preguntas`).toBeGreaterThanOrEqual(3);
        });
      });

      const allQ = getAllQuestions();
      expect(allQ.length).toBeGreaterThanOrEqual(120);
    });

    it('todos los reactivos poseen identificadores únicos no vacíos', () => {
      const allQ = getAllQuestions();
      const ids = allQ.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(allQ.length);
      allQ.forEach((q) => {
        expect(typeof q.id).toBe('string');
        expect(q.id.trim().length).toBeGreaterThan(0);
      });
    });

    it('cada reactivo tiene 4 opciones A, B, C, D con texto no vacío (>3 caracteres) y sin duplicados', () => {
      const allQ = getAllQuestions();
      allQ.forEach((q) => {
        let optsDict: Record<string, string> = {};
        if (Array.isArray(q.options)) {
          expect(q.options.length, `Pregunta ${q.id} no tiene 4 opciones`).toBe(4);
          q.options.forEach((opt: any) => {
            optsDict[opt.key] = opt.text;
          });
        } else {
          optsDict = q.options;
        }

        expect(Object.keys(optsDict).sort()).toEqual(['A', 'B', 'C', 'D']);

        ['A', 'B', 'C', 'D'].forEach((key) => {
          const text = String(optsDict[key] || '').trim();
          expect(text.length, `Opción ${key} en ${q.id} tiene texto insuficiente`).toBeGreaterThan(3);
        });

        const distinctTexts = new Set(Object.values(optsDict).map((t) => t.trim().toLowerCase()));
        expect(distinctTexts.size, `Pregunta ${q.id} contiene opciones repetidas`).toBe(4);
      });
    });

    it('la clave de respuesta correcta es estrictamente una de [A, B, C, D] y apunta a una opción existente', () => {
      const allQ = getAllQuestions();
      allQ.forEach((q) => {
        const key = q.correctAnswer || q.correctKey;
        expect(['A', 'B', 'C', 'D'], `Clave inválida en ${q.id}`).toContain(key);

        let optVal = '';
        if (Array.isArray(q.options)) {
          const found = q.options.find((o: any) => o.key === key);
          expect(found, `Clave ${key} no existe en opciones de ${q.id}`).toBeDefined();
          optVal = found.text;
        } else {
          optVal = q.options[key];
          expect(optVal, `Clave ${key} no existe en opciones de ${q.id}`).toBeDefined();
        }
        expect(String(optVal).trim().length).toBeGreaterThan(3);
      });
    });

    it('enunciados, explicaciones y bases legales cumplen con umbrales de longitud sustantiva', () => {
      const allQ = getAllQuestions();
      allQ.forEach((q) => {
        expect(q.statement.trim().length, `Enunciado corto en ${q.id}`).toBeGreaterThan(25);
        expect(q.explanation.trim().length, `Explicación corta en ${q.id}`).toBeGreaterThan(25);
        const basis = q.legalBasis ?? q.technicalBasis ?? q.basis;
        expect(String(basis || '').trim().length, `Base técnica/legal corta en ${q.id}`).toBeGreaterThan(5);
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

      const allQ = getAllQuestions();
      allQ.forEach((q) => {
        const serialized = JSON.stringify(q);
        forbidden.forEach((regex) => {
          expect(serialized, `Término no permitido ${regex} detectado en reactivo ${q.id}`).not.toMatch(regex);
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
          } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'manifest.json' && entry.name !== 'curriculum.json') {
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

      const allTechIds = COURSES_FROM_DATA.flatMap((c) =>
        c.modules.flatMap((m: any) => (m.quiz || m.questions || []).map((q: any) => String(q.id)))
      );

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

      const specializedIds = new Set(specializedLists.flatMap((list) => list.map((q: any) => String(q.id))));
      expect(specializedIds.size).toBe(1400);

      const allTechIds = COURSES_FROM_DATA.flatMap((c) =>
        c.modules.flatMap((m: any) => (m.quiz || m.questions || []).map((q: any) => String(q.id)))
      );

      const collisions = allTechIds.filter((id) => specializedIds.has(id));
      expect(collisions, `Colisión de IDs con reactivos especializados: ${collisions.join(', ')}`).toEqual([]);
    });
  });
});
```

---

## 4. Estrategia de Verificación y Mitigación de Falsos Positivos

1. **Flexibilidad en Nombres de Atributos de Entrada**:
   Para evitar que las pruebas fallen por divergencias cosméticas menores entre implementadores:
   - Horas de módulo: `(mod as any).hours ?? (mod as any).durationHours`
   - Cuestionario formativo: `mod.quiz ?? mod.questions`
   - Marco normativo: `mod.legalFramework ?? mod.legalBasis ?? mod.normativeFramework`
   - Opciones de reactivos: Soporta tanto estructura de objeto `{ A: '...', B: '...', C: '...', D: '...' }` como array `[{ key: 'A', text: '...' }, ...]`.
   - Clave de respuesta: Soporta tanto `correctAnswer` como `correctKey`.
2. **Aislamiento en Vitest**:
   - Para evitar saturación en entornos Windows bajo carga paralela, se aconseja ejecutar la suite de forma específica durante el desarrollo mediante:
     ```bash
     npx vitest run tests/technicalCourses.test.ts
     ```
   - Al ejecutar `npm test`, la suite correrá junto con las otras 22 suites existentes sin interferencias.
3. **Cero Impacto en el Banco Base**:
   - `npm run validate:bank` valida exclusivamente `public/data/*.json`. Dado que los cursos técnicos vocacionales residen en TypeScript bajo `src/data/technicalCoursesData.ts`, los 17,640 reactivos base de educación media y superior permanecen 100% aislados e inalterados.
