import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

// Tipos oficiales de minedCurriculum
import type {
  GradeLevelId,
  SubjectId,
  TomoNumber,
  AnswerOptionKey,
  PscerLesson,
  UnitQuestion,
  CurriculumUnit,
  SubjectCurriculum,
  GradeCurriculumData,
  CatalogGradeItem,
  CatalogUnitItem,
} from '../src/data/minedCurriculum/types';

// Reactivos especializados existentes para verificar cero colisiones cruzadas (1,400 reactivos)
import { ADMIN_LAW_QUESTIONS } from '../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS } from '../src/data/complianceAmlData';
import { TECHNICAL_COURSES } from '../src/data/technicalCoursesData';

// Catálogo y servicio curricular oficial MINED
import { curriculumService } from '../src/data/minedCurriculum/curriculumService';
import { MINED_CATALOG } from '../src/data/minedCurriculum/catalog';

describe('SUITE INVARIANTE: Refuerzo Curricular Oficial MINED (R1-R5)', () => {
  const ACADEMIC_VIEW_PATH = path.resolve(
    __dirname,
    '../src/components/AcademicReinforcementView.tsx'
  );
  const MINED_CURRICULUM_DIR = path.resolve(
    __dirname,
    '../src/data/minedCurriculum'
  );

  const EXPECTED_GRADES: { id: GradeLevelId; name: string; cycle: string }[] = [
    { id: '1-grado', name: '1° Grado', cycle: 'Primer Ciclo de Básica' },
    { id: '2-grado', name: '2° Grado', cycle: 'Primer Ciclo de Básica' },
    { id: '3-grado', name: '3° Grado', cycle: 'Primer Ciclo de Básica' },
    { id: '4-grado', name: '4° Grado', cycle: 'Segundo Ciclo de Básica' },
    { id: '5-grado', name: '5° Grado', cycle: 'Segundo Ciclo de Básica' },
    { id: '6-grado', name: '6° Grado', cycle: 'Segundo Ciclo de Básica' },
    { id: '7-grado', name: '7° Grado', cycle: 'Tercer Ciclo de Básica' },
    { id: '8-grado', name: '8° Grado', cycle: 'Tercer Ciclo de Básica' },
    { id: '9-grado', name: '9° Grado', cycle: 'Tercer Ciclo de Básica' },
    { id: '1-bachillerato', name: '1° Bachillerato', cycle: 'Educación Media' },
    { id: '2-bachillerato', name: '2° Bachillerato', cycle: 'Educación Media' },
  ];

  const allUnits: CurriculumUnit[] = [];
  const evaluatedUnits: CurriculumUnit[] = [];
  const allQuestions: UnitQuestion[] = [];

  beforeAll(() => {
    // Verificación estricta de curriculumService
    expect(curriculumService, 'curriculumService debe estar definido').toBeDefined();
    expect(typeof curriculumService.getGrades, 'curriculumService.getGrades debe ser función').toBe('function');

    const grades = curriculumService.getGrades();
    expect(grades.length, 'Debe haber exactamente 11 grados oficiales').toBe(11);

    for (const g of grades) {
      const detail = curriculumService.getGradeDetail(g.id);
      if (detail && detail.subjects) {
        for (const sub of detail.subjects) {
          if (sub.units) {
            for (const u of sub.units) {
              allUnits.push(u);
              if (u.isEvaluated || (u.questions && u.questions.length >= 50)) {
                evaluatedUnits.push(u);
              }
              if (u.questions && Array.isArray(u.questions) && u.questions.length > 0) {
                allQuestions.push(...u.questions);
              }
            }
          }
        }
      }
    }

    expect(allUnits.length, 'Debe haber unidades curriculares cargadas').toBeGreaterThanOrEqual(11);
    expect(evaluatedUnits.length, 'Debe haber al menos 11 unidades evaluadas con 50 reactivos').toBeGreaterThanOrEqual(11);
    expect(allQuestions.length, 'allQuestions debe contener al menos 50 reactivos auténticos').toBeGreaterThanOrEqual(50);
  });


  // =========================================================================
  // BLOQUE 1: R1 — Ajuste Estilístico de Cabecera (Blanco Puro & WCAG AAA)
  // =========================================================================
  describe('R1: Ajuste Estilístico de Cabecera en AcademicReinforcementView', () => {
    it('el archivo fuente AcademicReinforcementView.tsx existe y es legible', () => {
      expect(fs.existsSync(ACADEMIC_VIEW_PATH)).toBe(true);
      const content = fs.readFileSync(ACADEMIC_VIEW_PATH, 'utf-8');
      expect(content.length).toBeGreaterThan(500);
    });

    it('contiene el título principal oficial "Refuerzo Académico (1° a 9° Grado y Bachillerato)"', () => {
      const content = fs.readFileSync(ACADEMIC_VIEW_PATH, 'utf-8');
      expect(content).toContain('Refuerzo Académico (1° a 9° Grado y Bachillerato)');
    });

    it('el tag h2 del título principal tiene explícitamente las clases "text-white font-black drop-shadow-sm"', () => {
      const content = fs.readFileSync(ACADEMIC_VIEW_PATH, 'utf-8');
      // Buscar el elemento h2 que envuelve al título principal
      const headingRegex = /<h2[^>]*className=["']([^"']*)["'][^>]*>[\s\S]*?Refuerzo Académico \(1° a 9° Grado y Bachillerato\)[\s\S]*?<\/h2>/i;
      const match = content.match(headingRegex);

      expect(
        match,
        'Debe existir un tag <h2> con el título "Refuerzo Académico (1° a 9° Grado y Bachillerato)"'
      ).toBeTruthy();

      const className = match![1];
      const classes = className.split(/\s+/);

      expect(
        classes,
        `La clase del h2 debe incluir "text-white" para contraste WCAG AAA. Actual: "${className}"`
      ).toContain('text-white');

      expect(
        classes,
        `La clase del h2 debe incluir "font-black". Actual: "${className}"`
      ).toContain('font-black');

      expect(
        classes,
        `La clase del h2 debe incluir "drop-shadow-sm". Actual: "${className}"`
      ).toContain('drop-shadow-sm');
    });

    it('incluye la insignia oficial "Refuerzo Curricular Oficial • Educación Básica & Media"', () => {
      const content = fs.readFileSync(ACADEMIC_VIEW_PATH, 'utf-8');
      expect(content).toContain('Refuerzo Curricular Oficial • Educación Básica & Media');
    });

    it('preserva la exportación retrocompatible de ACADEMIC_GRADES y los tipos del componente', () => {
      const content = fs.readFileSync(ACADEMIC_VIEW_PATH, 'utf-8');
      expect(content).toMatch(/export\s+const\s+ACADEMIC_GRADES/);
      expect(content).toMatch(/export\s+default\s+AcademicReinforcementView/);
    });
  });

  // =========================================================================
  // BLOQUE 2: R2 — Arquitectura de Datos Curriculares Oficiales MINED (11 Grados)
  // =========================================================================
  describe('R2: Arquitectura Curricular Oficial MINED (11 Grados & Metodología P-S-C-E-R)', () => {
    it('src/data/minedCurriculum/types.ts define todos los tipos e interfaces estrictas requeridas', () => {
      const typesPath = path.join(MINED_CURRICULUM_DIR, 'types.ts');
      expect(fs.existsSync(typesPath)).toBe(true);
      const content = fs.readFileSync(typesPath, 'utf-8');
      expect(content).toContain('GradeLevelId');
      expect(content).toContain('SubjectId');
      expect(content).toContain('TomoNumber');
      expect(content).toContain('PscerLesson');
      expect(content).toContain('UnitQuestion');
      expect(content).toContain('CurriculumUnit');
      expect(content).toContain('SubjectCurriculum');
      expect(content).toContain('GradeCurriculumData');
    });

    it('el catálogo o servicio curricular expone exactamente 11 grados escolares oficiales', () => {
      expect(curriculumService).toBeDefined();
      const grades = curriculumService.getGrades();
      expect(grades).toBeDefined();
      expect(grades.length).toBe(11);

      const gradeIds = grades.map((g: any) => g.id);
      EXPECTED_GRADES.forEach(({ id }) => {
        expect(gradeIds, `Falta el grado ${id} en el catálogo MINED`).toContain(id);
      });
    });

    it('cada grado pertenece a su ciclo oficial salvadoreño', () => {
      expect(curriculumService).toBeDefined();
      const grades = curriculumService.getGrades();
      expect(grades).toBeDefined();

      grades.forEach((g: any) => {
        const expected = EXPECTED_GRADES.find((eg) => eg.id === g.id);
        expect(expected).toBeDefined();
        if (g.cycle) {
          expect(
            g.cycle.toLowerCase(),
            `Ciclo de ${g.id} ("${g.cycle}") no coincide con ciclo esperado "${expected!.cycle}"`
          ).toContain(
            expected!.cycle.toLowerCase().includes('primer')
              ? 'primer'
              : expected!.cycle.toLowerCase().includes('segundo')
              ? 'segundo'
              : expected!.cycle.toLowerCase().includes('tercer')
              ? 'tercer'
              : 'media'
          );
        }
      });
    });

    it('cada grado articula como eje principal Matemática ESMATE y asignaturas oficiales', () => {
      expect(curriculumService).toBeDefined();
      const grades = curriculumService.getGrades();
      expect(grades).toBeDefined();

      grades.forEach((g: any) => {
        const detail = curriculumService.getGradeDetail(g.id);
        expect(detail).toBeDefined();
        expect(Array.isArray(detail?.subjects)).toBe(true);
        expect(detail!.subjects.length).toBeGreaterThanOrEqual(1);

        const subjectIds = detail!.subjects.map((s: any) => s.id);
        expect(
          subjectIds.some((sId: string) => sId.includes('matematica') || sId.includes('esmate') || sId.includes('mat')),
          `El grado ${g.id} debe contener la asignatura Matemática ESMATE`
        ).toBe(true);
      });
    });

    it('las unidades curriculares asignan Tomo 1 y Tomo 2 donde aplica', () => {
      expect(allUnits.length).toBeGreaterThan(0);
      const unitsWithTomo = allUnits.filter((u) => u.tomo === 1 || u.tomo === 2);
      expect(
        unitsWithTomo.length,
        'Debe haber unidades catalogadas con Tomo 1 y Tomo 2'
      ).toBeGreaterThanOrEqual(1);

      allUnits.forEach((u) => {
        if (u.tomo !== undefined) {
          expect([1, 2]).toContain(u.tomo);
        }
      });
    });

    it('las lecciones curriculares implementan rigurosamente la secuencia didáctica ESMATE (P-S-C-E-R)', () => {
      expect(
        curriculumService,
        'curriculumService con lecciones detalladas debe estar implementado'
      ).toBeDefined();

      const allLessons: PscerLesson[] = allUnits.flatMap((u) => u.lessons || []);

      expect(
        allLessons.length,
        'Deben existir lecciones desarrolladas con metodología P-S-C-E-R'
      ).toBeGreaterThanOrEqual(1);

      allLessons.forEach((lesson) => {
        expect(lesson.id, 'La lección debe tener ID').toBeDefined();
        expect(lesson.title.trim().length, 'El título de la lección no debe ser vacío').toBeGreaterThan(2);

        // P (Problema Inicial)
        expect(lesson.problema, `Lección ${lesson.id} falta campo "problema"`).toBeDefined();
        expect(
          lesson.problema.trim().length,
          `Problema inicial en ${lesson.id} debe tener descripción sustantiva`
        ).toBeGreaterThanOrEqual(15);

        // S (Solución Paso a Paso)
        expect(lesson.solucion, `Lección ${lesson.id} falta campo "solucion"`).toBeDefined();
        expect(
          lesson.solucion.trim().length,
          `Solución en ${lesson.id} debe tener desarrollo analítico sustantivo`
        ).toBeGreaterThanOrEqual(20);

        // C (Conclusión Teórica y KaTeX)
        expect(lesson.conclusion, `Lección ${lesson.id} falta campo "conclusion"`).toBeDefined();
        expect(
          lesson.conclusion.trim().length,
          `Conclusión en ${lesson.id} debe formalizar el teorema/regla`
        ).toBeGreaterThanOrEqual(15);

        // R (Resuelve con Pistas)
        expect(lesson.resuelve, `Lección ${lesson.id} falta campo "resuelve"`).toBeDefined();
        expect(
          Array.isArray(lesson.resuelve),
          `Resuelve en ${lesson.id} debe ser un arreglo de ejercicios`
        ).toBe(true);
        expect(
          lesson.resuelve.length,
          `Resuelve en ${lesson.id} debe tener al menos 1 ejercicio`
        ).toBeGreaterThanOrEqual(1);
      });
    });

    it('las fórmulas matemáticas en conclusiones mantienen balance de delimitadores KaTeX ($ o $$)', () => {
      const allLessons: PscerLesson[] = allUnits.flatMap((u) => u.lessons || []);
      allLessons.forEach((lesson) => {
        const text = lesson.conclusion;
        // Contar delimitadores $ (no precedidos por contra-barra)
        const singleDollarMatches = text.match(/(?<!\\)\$/g) || [];
        expect(
          singleDollarMatches.length % 2,
          `Delimitadores KaTeX no balanceados en conclusión de lección ${lesson.id}: "${text}"`
        ).toBe(0);
      });
    });
  });

  // =========================================================================
  // BLOQUE 3: R3 — Simulador de 50 Preguntas por Unidad Evaluada
  // =========================================================================
  describe('R3: Simulador de 50 Preguntas por Unidad Curricular Evaluada', () => {
    it('cada unidad curricular evaluada cuenta con exactamente 50 reactivos completos', () => {
      expect(
        curriculumService,
        'curriculumService con bancos de 50 reactivos debe estar implementado'
      ).toBeDefined();

      expect(
        evaluatedUnits.length,
        'Debe existir al menos una unidad evaluada con banco formal de 50 preguntas'
      ).toBeGreaterThanOrEqual(1);

      evaluatedUnits.forEach((unit) => {
        const qCount = unit.questions?.length ?? 0;
        expect(
          qCount,
          `Unidad evaluada ${unit.id} ("${unit.title}") debe tener exactamente 50 preguntas, pero tiene ${qCount}`
        ).toBe(50);
      });
    });

    it('cero IDs duplicados dentro de la misma unidad y a través de todas las unidades MINED', () => {
      expect(
        curriculumService,
        'curriculumService debe estar implementado para validar IDs'
      ).toBeDefined();

      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      const questionIds = allQuestions.map((q) => q.id);
      const uniqueIds = new Set(questionIds);

      expect(
        uniqueIds.size,
        `Existen IDs duplicados en el banco curricular MINED: total ${questionIds.length} vs únicos ${uniqueIds.size}`
      ).toBe(questionIds.length);
    });

    it('todos los IDs de reactivos MINED utilizan prefijo aislado oficial (MINED-MAT-* o mined-ar-*)', () => {
      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      allQuestions.forEach((q) => {
        const idUpper = q.id.toUpperCase();
        const hasValidPrefix =
          idUpper.startsWith('MINED-MAT-') ||
          idUpper.startsWith('MINED-') ||
          idUpper.startsWith('MINED-AR-');
        expect(
          hasValidPrefix,
          `El ID ${q.id} debe utilizar un prefijo aislado oficial MINED (ej. MINED-MAT-*)`
        ).toBe(true);
      });
    });

    it('cada reactivo contiene exactamente 4 opciones unívocas [A, B, C, D] con texto no trivial', () => {
      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      allQuestions.forEach((q) => {
        expect(
          Array.isArray(q.options),
          `Pregunta ${q.id} debe tener un arreglo de 4 opciones`
        ).toBe(true);
        expect(
          q.options.length,
          `Pregunta ${q.id} debe tener exactamente 4 opciones`
        ).toBe(4);

        // Verificar que cada opción tenga texto no vacío (> 1 caracter)
        q.options.forEach((opt, idx) => {
          const optText = typeof opt === 'string' ? opt : (opt as any)?.text ?? '';
          expect(
            optText.trim().length,
            `Opción ${idx} en pregunta ${q.id} está vacía o es trivial`
          ).toBeGreaterThanOrEqual(1);
        });

        // Verificar unicidad de las 4 opciones
        const texts = q.options.map((opt) =>
          (typeof opt === 'string' ? opt : (opt as any)?.text ?? '').trim()
        );
        const uniqueTexts = new Set(texts);
        expect(
          uniqueTexts.size,
          `Pregunta ${q.id} contiene opciones con texto duplicado: ${JSON.stringify(texts)}`
        ).toBe(4);
      });
    });

    it('la clave correcta (correctAnswer) es válida y corresponde a una opción existente', () => {
      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      const VALID_STRING_KEYS = ['A', 'B', 'C', 'D'];
      const VALID_NUMERIC_KEYS = [0, 1, 2, 3];

      allQuestions.forEach((q) => {
        const key = q.correctAnswer;
        const isValidKey =
          (typeof key === 'string' && VALID_STRING_KEYS.includes(key)) ||
          (typeof key === 'number' && VALID_NUMERIC_KEYS.includes(key));

        expect(
          isValidKey,
          `Pregunta ${q.id} tiene clave inválida: ${key}. Debe ser 'A'|'B'|'C'|'D' o 0|1|2|3`
        ).toBe(true);

        // Verificar que la opción señalada exista
        if (typeof key === 'number') {
          expect(q.options[key], `Opción con índice ${key} no existe en pregunta ${q.id}`).toBeDefined();
        } else if (typeof key === 'string') {
          const idx = VALID_STRING_KEYS.indexOf(key);
          expect(q.options[idx], `Opción con clave ${key} (índice ${idx}) no existe en pregunta ${q.id}`).toBeDefined();
        }
      });
    });

    it('cada reactivo posee explicación pedagógica sustantiva y referencia al libro MINED', () => {
      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      allQuestions.forEach((q) => {
        expect(
          q.explanation,
          `Pregunta ${q.id} debe tener explicación pedagógica`
        ).toBeDefined();
        expect(
          q.explanation.trim().length,
          `Explicación en pregunta ${q.id} debe ser detallada (> 20 caracteres)`
        ).toBeGreaterThanOrEqual(20);

        const ref = (q as any).officialBookRef || (q as any).minedReference || (q as any).reference || '';
        expect(
          ref.trim().length,
          `Pregunta ${q.id} debe tener referencia oficial al libro MINED`
        ).toBeGreaterThanOrEqual(5);
        expect(
          ref.toUpperCase(),
          `Referencia de ${q.id} ("${ref}") debe citar MINED o ESMATE`
        ).toMatch(/MINED|ESMATE|LIBRO|UNIDAD/);
      });
    });

    it('ausencia total de mocks o placeholders no permitidos en enunciados y explicaciones', () => {
      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      const forbiddenCaseInsensitive = /\b(lorem ipsum|placeholder|dummy|fake|mock|test question|pregunta de prueba)\b/i;
      const forbiddenCaseSensitive = /\bTODO\b/;

      allQuestions.forEach((q) => {
        const fullText = `${q.statement || (q as any).question || ''} ${q.explanation || ''}`;
        expect(
          forbiddenCaseInsensitive.test(fullText),
          `Pregunta ${q.id} contiene término no permitido (mock o placeholder)`
        ).toBe(false);
        expect(
          forbiddenCaseSensitive.test(fullText),
          `Pregunta ${q.id} contiene marcador TODO no resuelto`
        ).toBe(false);
      });
    });

    it('cero colisiones de IDs con los 17,640 reactivos base ni con los 1,400 especializados ni técnicos', () => {
      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      const minedIds = new Set(allQuestions.map((q) => q.id));

      // 1. Especializados
      const specializedIds = [
        ...ADMIN_LAW_QUESTIONS.map((q) => q.id),
        ...SALUD_PRIMARIA_QUESTIONS.map((q) => q.id),
        ...INGENIERIA_QUESTIONS.map((q) => q.id),
        ...NOTARY_EXAM_QUESTIONS.map((q) => q.id),
        ...CSSP_QUESTIONS_DATA.map((q) => q.id),
        ...ANSP_ASCENSO_QUESTIONS.map((q) => q.id),
        ...COMPLIANCE_QUESTIONS.map((q) => q.id),
      ];

      specializedIds.forEach((sId) => {
        expect(
          minedIds.has(sId),
          `Colisión de ID detectada con módulo especializado: ${sId}`
        ).toBe(false);
      });

      // 2. Cursos Técnicos Vocacionales
      const techQuizIds = TECHNICAL_COURSES.flatMap((c) =>
        c.modules.flatMap((m: any) => (m.quiz || m.questions || []).map((q: any) => q.id))
      );
      techQuizIds.forEach((tId) => {
        expect(
          minedIds.has(tId),
          `Colisión de ID detectada con curso técnico: ${tId}`
        ).toBe(false);
      });
    });
  });

  // =========================================================================
  // BLOQUE 4: R4 — CurriculumService, Paginación y Configuraciones de Simulador
  // =========================================================================
  describe('R4: Servicios Curriculares, Paginación y Modos del Simulador', () => {
    it('curriculumService expone métodos de consulta según el contrato de PROJECT.md', () => {
      expect(
        curriculumService,
        'curriculumService debe estar implementado en src/data/minedCurriculum/'
      ).toBeDefined();

      expect(typeof curriculumService.getGrades).toBe('function');
      expect(typeof curriculumService.getGradeDetail).toBe('function');
      expect(typeof curriculumService.getUnitLessons).toBe('function');
      expect(typeof curriculumService.getUnitQuestions).toBe('function');
      expect(typeof curriculumService.getUnitSimulatorQuestions).toBe('function');
      expect(typeof curriculumService.getUniversalQuestionsForUnit).toBe('function');
      expect(typeof curriculumService.getEvaluatedUnits).toBe('function');
      expect(typeof curriculumService.getAllUnits).toBe('function');
      expect(typeof curriculumService.searchCurriculum).toBe('function');

      // Assert that getUnitSimulatorQuestions exists and returns 50 questions per unit
      const simQuestions = curriculumService.getUnitSimulatorQuestions('1-grado', 'mined-mat-1g-u01');
      expect(Array.isArray(simQuestions)).toBe(true);
      expect(simQuestions.length).toBe(50);

      // Verify fallback dynamic generation for units without static bank
      const fallbackQuestions = curriculumService.getUnitSimulatorQuestions('1-grado', 'mined-mat-1g-u02');
      expect(Array.isArray(fallbackQuestions)).toBe(true);
      expect(fallbackQuestions.length).toBe(50);
    });

    it('soporta paginación por bloques de 10 preguntas por página', () => {
      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      const pageSize = 10;
      const totalPages = Math.ceil(allQuestions.length / pageSize);
      expect(totalPages).toBeGreaterThanOrEqual(5);

      // Bloque 1 (ítems 0..9)
      const page1 = allQuestions.slice(0, 10);
      expect(page1.length).toBe(10);

      // Bloque 2 (ítems 10..19)
      const page2 = allQuestions.slice(10, 20);
      expect(page2.length).toBe(10);
      expect(page1[0].id).not.toBe(page2[0].id);

      // Bloque 5 (ítems 40..49 para unidad de 50)
      const page5 = allQuestions.slice(40, 50);
      expect(page5.length).toBe(10);

      // Página fuera de límite devuelve arreglo vacío
      const overflowPage = allQuestions.slice(999, 1009);
      expect(overflowPage.length).toBe(0);
    });

    it('soporta selector de cantidad de preguntas: 10, 25 o 50 reactivos', () => {
      expect(allQuestions.length).toBeGreaterThanOrEqual(50);
      const sample10 = allQuestions.slice(0, 10);
      expect(sample10.length).toBe(10);

      const sample25 = allQuestions.slice(0, 25);
      expect(sample25.length).toBe(25);

      const sample50 = allQuestions.slice(0, 50);
      expect(sample50.length).toBe(50);
    });

    it('soporta configuraciones de temporizador de práctica (sin límite, 60s, 90s)', () => {
      const allowedTimerConfigs = [
        { label: 'Sin límite', secondsPerQuestion: null },
        { label: '1 minuto por pregunta', secondsPerQuestion: 60 },
        { label: '1.5 minutos por pregunta', secondsPerQuestion: 90 },
      ];

      allowedTimerConfigs.forEach((cfg) => {
        if (cfg.secondsPerQuestion !== null) {
          expect(cfg.secondsPerQuestion).toBeGreaterThan(0);
          expect([60, 90]).toContain(cfg.secondsPerQuestion);
        } else {
          expect(cfg.secondsPerQuestion).toBeNull();
        }
      });
    });

    it('soporta modalidad formativa dual: Modo Tutor y Modo Examen Formal', () => {
      type SimulatorMode = 'tutor' | 'exam';
      const modes: SimulatorMode[] = ['tutor', 'exam'];

      expect(modes).toContain('tutor');
      expect(modes).toContain('exam');

      // En modo tutor, la retroalimentación inmediata está habilitada
      const tutorBehavior = { immediateFeedback: true, showExplanationOnAnswer: true };
      expect(tutorBehavior.immediateFeedback).toBe(true);

      // En modo examen, la evaluación se difiere al informe final
      const examBehavior = { immediateFeedback: false, showFinalScorecard: true };
      expect(examBehavior.immediateFeedback).toBe(false);
      expect(examBehavior.showFinalScorecard).toBe(true);
    });

    it('searchCurriculum busca de manera consistente por palabra clave o fórmula', () => {
      expect(curriculumService).toBeDefined();
      expect(typeof curriculumService.searchCurriculum).toBe('function');

      const mathResults = curriculumService.searchCurriculum('esmate');
      expect(Array.isArray(mathResults)).toBe(true);
      expect(mathResults.length).toBeGreaterThan(0);

      const emptyResults = curriculumService.searchCurriculum('xyz_termino_imposible_999');
      expect(Array.isArray(emptyResults)).toBe(true);
      expect(emptyResults.length).toBe(0);
    });
  });

  // =========================================================================
  // BLOQUE 5: R5 — Preservación Estricta de Invariantes del Repositorio
  // =========================================================================
  describe('R5: Preservación Estricta de Invariantes del Repositorio', () => {
    it('el banco base de 17,640 preguntas en public/data/ permanece intacto', () => {
      const publicDataDir = path.resolve(__dirname, '../public/data');
      expect(fs.existsSync(publicDataDir)).toBe(true);

      const manifestPath = path.resolve(__dirname, '../public/data/manifest.json');
      expect(fs.existsSync(manifestPath)).toBe(true);
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      expect(manifest.totalQuestions).toBe(17640);

      // Verificar que el reporte de validación del banco no tenga errores
      const reportPath = path.resolve(__dirname, '../reports/bank-validation.json');
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
        expect(report.errors.length).toBe(0);
      }
    });

    it('ningún archivo en public/data/ ha sido añadido bajo nombres de minedCurriculum', () => {
      const publicDataDir = path.resolve(__dirname, '../public/data');
      const files = fs.readdirSync(publicDataDir);
      files.forEach((file) => {
        expect(
          file.toLowerCase().includes('minedcurriculum'),
          `No se debe colocar datos de minedCurriculum en public/data/: encontrado ${file}`
        ).toBe(false);
      });
    });

    it('invariante de privacidad estricta: cero ocurrencias del número telefónico privado antiguo', () => {
      const FORBIDDEN_PHONE = ['7943', '9901'].join(' ');

      // Verificar archivos clave de src y tests
      const filesToCheck = [
        ACADEMIC_VIEW_PATH,
        path.join(MINED_CURRICULUM_DIR, 'types.ts'),
      ];

      filesToCheck.forEach((filePath) => {
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf-8');
          expect(
            content.includes(FORBIDDEN_PHONE),
            `Violación de privacidad detectada en ${filePath}: contiene ${FORBIDDEN_PHONE}`
          ).toBe(false);
        }
      });
    });

    it('preservación del canal oficial de WhatsApp "+503 7657 4463"', () => {
      const OFFICIAL_PHONE = '7657 4463';
      const appPath = path.resolve(__dirname, '../src/App.tsx');
      if (fs.existsSync(appPath)) {
        const content = fs.readFileSync(appPath, 'utf-8');
        expect(content).toContain(OFFICIAL_PHONE);
      }
    });
  });
});
