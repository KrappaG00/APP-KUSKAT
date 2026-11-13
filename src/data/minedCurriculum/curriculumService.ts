import { MINED_CATALOG } from './catalog';
import {
  CatalogGradeItem,
  CurriculumSearchResult,
  CurriculumUnit,
  GradeCurriculumData,
  GradeLevelId,
  MinedOfficialResource,
  MinedResourceDocType,
  PscerLesson,
  SubjectCurriculum,
  SubjectId,
  UnitQuestion,
} from './types';
import { GRADE_01_DATA } from './grades/grade01PrimerGrado';
import { GRADE_02_DATA } from './grades/grade02SegundoGrado';
import { GRADE_03_DATA } from './grades/grade03TercerGrado';
import { GRADE_04_DATA } from './grades/grade04CuartoGrado';
import { GRADE_05_DATA } from './grades/grade05QuintoGrado';
import { GRADE_06_DATA } from './grades/grade06SextoGrado';
import { GRADE_07_DATA } from './grades/grade07SeptimoGrado';
import { GRADE_08_DATA } from './grades/grade08OctavoGrado';
import { GRADE_09_DATA } from './grades/grade09NovenoGrado';
import { GRADE_10_DATA } from './grades/grade10PrimerBach';
import { GRADE_11_DATA } from './grades/grade11SegundoBach';
import { generate50UnitQuestions, QuestionArchetype, SUBJECT_CODE_MAP } from './grades/gradeHelpers';
import { getAdditionalSubjectsForGrade, getMultiSubjectUnitQuestions } from './multiSubjectCurriculum';
import {

  getAllMinedResources,
  getPrimeraInfanciaArticulationResources,
  getResourcesByGrade,
  getResourcesByGradeAndSubject,
} from './minedResourcesManifest';

function enrichGradeWithMultiSubjectAndResources(baseGrade: GradeCurriculumData): GradeCurriculumData {
  const mathSubjects = baseGrade.subjects.map((subj) => ({
    ...subj,
    resources: getResourcesByGradeAndSubject(baseGrade.id, subj.id),
  }));
  const additionalSubjects = getAdditionalSubjectsForGrade(baseGrade.id);
  return {
    ...baseGrade,
    subjects: [...mathSubjects, ...additionalSubjects],
    resources: getResourcesByGrade(baseGrade.id),
  };
}

/**
 * Registro de los 11 grados con sus datos curriculares detallados (7 asignaturas oficiales MINED y recursos descargables)
 */
export const ALL_GRADES_DATA: Record<GradeLevelId, GradeCurriculumData> = {
  '1-grado': enrichGradeWithMultiSubjectAndResources(GRADE_01_DATA),
  '2-grado': enrichGradeWithMultiSubjectAndResources(GRADE_02_DATA),
  '3-grado': enrichGradeWithMultiSubjectAndResources(GRADE_03_DATA),
  '4-grado': enrichGradeWithMultiSubjectAndResources(GRADE_04_DATA),
  '5-grado': enrichGradeWithMultiSubjectAndResources(GRADE_05_DATA),
  '6-grado': enrichGradeWithMultiSubjectAndResources(GRADE_06_DATA),
  '7-grado': enrichGradeWithMultiSubjectAndResources(GRADE_07_DATA),
  '8-grado': enrichGradeWithMultiSubjectAndResources(GRADE_08_DATA),
  '9-grado': enrichGradeWithMultiSubjectAndResources(GRADE_09_DATA),
  '1-bachillerato': enrichGradeWithMultiSubjectAndResources(GRADE_10_DATA),
  '2-bachillerato': enrichGradeWithMultiSubjectAndResources(GRADE_11_DATA),
};

/**
 * Retorna el catálogo liviano de los 11 grados escolares (< 25 KB)
 */
export function getGrades(): CatalogGradeItem[] {
  return MINED_CATALOG;
}

/**
 * Retorna el detalle curricular completo de un grado escolar específico
 */
export function getGradeDetail(gradeId: GradeLevelId): GradeCurriculumData | undefined {
  return ALL_GRADES_DATA[gradeId];
}

/**
 * Retorna la asignatura solicitada de un grado escolar
 */
export function getSubject(
  gradeId: GradeLevelId,
  subjectId: SubjectId = 'matematica-esmate'
): SubjectCurriculum | undefined {
  const grade = getGradeDetail(gradeId);
  return grade?.subjects.find((s) => s.id === subjectId);
}

/**
 * Retorna los recursos oficiales descargables del MINED filtrados por grado, asignatura y tipo de documento
 */
export function getGradeOfficialResources(
  gradeId: GradeLevelId,
  subjectId?: SubjectId | 'ALL',
  docType?: MinedResourceDocType | 'ALL'
): MinedOfficialResource[] {
  const base =
    !subjectId || subjectId === 'ALL'
      ? getResourcesByGrade(gradeId)
      : getResourcesByGradeAndSubject(gradeId, subjectId);
  if (!docType || docType === 'ALL') return base;
  return base.filter((r) => r.docType === docType);
}

/**
 * Retorna una unidad curricular específica por su identificador (canónico o legado)
 */
export function getUnit(gradeId: GradeLevelId, unitId: string): CurriculumUnit | undefined {
  const grade = getGradeDetail(gradeId);
  if (!grade) return undefined;

  let normalizedId = unitId;
  const legacyMatch = unitId.match(/^(?:[1-9]-grado|[12]-bachillerato)-([a-z]+)-u0?([12])$/i);
  if (legacyMatch) {
    const slug = legacyMatch[1].toLowerCase();
    const num = legacyMatch[2];
    const sg = gradeId.replace('-grado', 'g').replace('-bachillerato', 'b');
    normalizedId = `mined-${slug}-${sg}-u0${num}`;
  }

  for (const subject of grade.subjects) {
    const unit = subject.units.find((u) => u.id === unitId || u.id === normalizedId);
    if (unit) return unit;
  }
  return undefined;
}

/**
 * Retorna la lista de lecciones estructuradas P-S-C-E-R de una unidad
 */
export function getUnitLessons(gradeId: GradeLevelId, unitId: string): PscerLesson[] {
  const unit = getUnit(gradeId, unitId);
  return unit?.lessons || [];
}

/**
 * Generador contextual de respaldo para unidades que no poseen banco estático predefinido,
 * garantizando que CUALQUIER unidad seleccionada pueda iniciar un simulador de 50 preguntas.
 */
export function buildFallback50Questions(
  unit: CurriculumUnit,
  gradeId: GradeLevelId,
  subjectIdOverride?: SubjectId
): UnitQuestion[] {
  const gradeCode = gradeId.replace('-grado', 'G').replace('-bachillerato', 'B').toUpperCase();
  const subjectId: SubjectId = subjectIdOverride || unit.subjectId || 'matematica-esmate';
  const subjectCode = SUBJECT_CODE_MAP[subjectId] || 'MAT';
  const gradeDisplay = gradeId.includes('bachillerato')
    ? `${gradeId === '1-bachillerato' ? '1°' : '2°'} Bachillerato`
    : `${gradeId.charAt(0)}° Grado`;
  const subjectBookLabel: Record<SubjectId, string> = {
    'matematica-esmate': 'MINED ESMATE',
    'lenguaje-eslengua': 'MINED ESLENGUA',
    'ciencia-tecnologia': 'MINED Ciencia y Tecnología',
    'ciudadania-valores': 'MINED Ciudadanía y Valores',
    'educacion-artistica': 'MINED Educación Artística',
    'educacion-fisica': 'MINED Educación Física',
    'educacion-financiera': 'MINED Educación Financiera',
  };
  const bookName = `${subjectBookLabel[subjectId] || 'MINED ESMATE'} ${gradeDisplay}`;

  const fallbackArchetypes: QuestionArchetype[] = [
    {
      generate: (v, qIndex) => ({
        statement: `[Reactivo ${qIndex}] En relación a la unidad "${unit.title}", ¿cuál es el objetivo fundamental de aprendizaje según el programa del MINED?`,
        options: [
          `Dominar los conceptos, algoritmos y aplicaciones de "${unit.title}"`,
          'Memorizar fórmulas sin interpretar su sentido',
          'Aprender definiciones sin resolver ejercicios prácticos',
          'Ignorar la demostración analítica del problema inicial',
        ],
        correctAnswer: 'A',
        explanation: `El currículo del MINED prioriza la comprensión conceptual profunda y la aplicación analítica de "${unit.title}".`,
      }),
    },
    {
      generate: (v, qIndex) => ({
        statement: `[Reactivo ${qIndex}] Dentro de la metodología P-S-C-E-R aplicada en "${unit.title}", la sección "C (Conclusión)" tiene como propósito:`,
        options: [
          'Plantear un reto informal de inicio',
          'Formalizar el teorema, definición y regla matemática general con rigor y KaTeX',
          'Presentar ejercicios sin respuesta para el hogar',
          'Evaluar cuantitativamente al estudiante con una calificación numérica',
        ],
        correctAnswer: 'B',
        explanation: 'La fase C formaliza y sintetiza la conclusión teórica y las fórmulas matemáticas que fundamentan la clase.',
      }),
    },
    {
      generate: (v, qIndex) => {
        const val = v * 5 + 10;
        return {
          statement: `[Reactivo ${qIndex}] Si un estudiante resuelve un problema de aplicación de "${unit.title}" y obtiene el valor paramétrico $x = ${val}$, la justificación paso a paso requiere:`,
          options: [
            'Omitir los pasos intermedios',
            'Aplicar el procedimiento inverso sin comprobar',
            `Demostrar la secuencia lógica de resolución y verificar que $x = ${val}$ satisface las condiciones del problema`,
            'Aceptar el resultado únicamente si es un número par',
          ],
          correctAnswer: 'C',
          explanation: 'La metodología ESMATE exige verificación rigurosa y fundamentación de cada paso analítico en la resolución.',
        };
      },
    },
    {
      generate: (v, qIndex) => ({
        statement: `[Reactivo ${qIndex}] En los libros oficiales de texto de El Salvador, las orientaciones didácticas de "${unit.title}" recomiendan que para resolver problemas complejos se debe:`,
        options: [
          'Cambiar de problema inmediatamente',
          'Copiar la solución del ejemplo sin razonar',
          'Adivinar la respuesta entre las opciones',
          'Analizar los datos conocidos, identificar la incógnita y diseñar un plan analítico',
        ],
        correctAnswer: 'D',
        explanation: 'El método heurístico de resolución de problemas de Polya adoptado por ESMATE enfatiza comprender, planificar, ejecutar y examinar.',
      }),
    },
    {
      generate: (v, qIndex) => {
        const factor = (v % 4) + 2;
        return {
          statement: `[Reactivo ${qIndex}] Al evaluar un cálculo analítico de "${unit.title}" donde se multiplica una magnitud por una constante de escala $k = ${factor}$, el resultado:`,
          options: [
            `Se incrementa en proporción directa de factor $${factor}$`,
            `Se divide entre $${factor}$`,
            'Permanece estrictamente idéntico',
            'Se vuelve cero',
          ],
          correctAnswer: 'A',
          explanation: `La multiplicación por una constante escalar positiva $k = ${factor}$ escala la magnitud de forma directamente proporcional.`,
        };
      },
    },
  ];

  return generate50UnitQuestions(
    unit.id,
    gradeId,
    gradeCode,
    unit.unitNumber,
    unit.title,
    bookName,
    fallbackArchetypes,
    subjectId,
    subjectCode
  );
}

/**
 * Retorna el banco de EXACTAMENTE 50 preguntas evaluativas para cualquier unidad seleccionada
 */
export function getUnitQuestions(gradeId: GradeLevelId, unitId: string): UnitQuestion[] {
  const unit = getUnit(gradeId, unitId);
  if (!unit) return [];

  // Si la unidad ya cuenta con sus 50 preguntas estáticas hand-crafted
  if (unit.questions && unit.questions.length >= 50) {
    return unit.questions;
  }

  // Si pertenece a una asignatura multi-materia oficial MINED, genera su banco específico de 50 reactivos
  const multiSubjectQuestions = getMultiSubjectUnitQuestions(gradeId, unitId);
  if (multiSubjectQuestions && multiSubjectQuestions.length >= 50) {
    return multiSubjectQuestions;
  }

  // Genera dinámicamente un banco evaluativo robusto de 50 reactivos para garantizar la cobertura total
  return buildFallback50Questions(unit, gradeId);
}


/**
 * Retorna todas las unidades que cuentan con banco evaluativo formal
 */
export function getEvaluatedUnits(): { gradeId: GradeLevelId; gradeName: string; unit: CurriculumUnit }[] {
  const result: { gradeId: GradeLevelId; gradeName: string; unit: CurriculumUnit }[] = [];

  for (const gradeId of Object.keys(ALL_GRADES_DATA) as GradeLevelId[]) {
    const grade = ALL_GRADES_DATA[gradeId];
    for (const subject of grade.subjects) {
      for (const unit of subject.units) {
        if (unit.isEvaluated || (unit.questions && unit.questions.length >= 50)) {
          result.push({
            gradeId,
            gradeName: grade.name,
            unit,
          });
        }
      }
    }
  }

  return result;
}

/**
 * Retorna las unidades oficiales de todos los grados.
 * Por compatibilidad con el contrato de auditoría ESMATE (97 unidades base), cuando se invoca
 * sin argumentos retorna las unidades de Matemática (ESMATE). Si se pasa `{ includeAllSubjects: true }`
 * o un `subjectId` específico, retorna las unidades correspondientes a todas las asignaturas o la asignatura indicada.
 */
export function getAllUnits(options?: {
  includeAllSubjects?: boolean;
  subjectId?: SubjectId;
}): { gradeId: GradeLevelId; gradeName: string; subjectId: SubjectId; unit: CurriculumUnit }[] {
  const result: { gradeId: GradeLevelId; gradeName: string; subjectId: SubjectId; unit: CurriculumUnit }[] = [];
  const includeAll = options?.includeAllSubjects === true;
  const targetSubjectId: SubjectId = options?.subjectId || 'matematica-esmate';

  for (const gradeId of Object.keys(ALL_GRADES_DATA) as GradeLevelId[]) {
    const grade = ALL_GRADES_DATA[gradeId];
    for (const subject of grade.subjects) {
      if (!includeAll && subject.id !== targetSubjectId) continue;
      for (const unit of subject.units) {
        result.push({
          gradeId,
          gradeName: grade.name,
          subjectId: subject.id,
          unit,
        });
      }
    }
  }

  return result;
}

/**
 * Retorna absolutamente todas las unidades curriculares de las 7 asignaturas oficiales MINED en los 11 grados (97 ESMATE + 132 multi-asignatura = 229 unidades)
 */
export function getAllMultiSubjectUnits(): {
  gradeId: GradeLevelId;
  gradeName: string;
  subjectId: SubjectId;
  unit: CurriculumUnit;
}[] {
  return getAllUnits({ includeAllSubjects: true });
}


/**
 * Motor de búsqueda global en tiempo real a través de todo el currículo MINED
 * Busca en títulos de unidades, resúmenes, competencias, lecciones P-S-C-E-R y fórmulas
 */
export function searchCurriculum(query: string): CurriculumSearchResult[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  const results: CurriculumSearchResult[] = [];

  for (const gradeId of Object.keys(ALL_GRADES_DATA) as GradeLevelId[]) {
    const grade = ALL_GRADES_DATA[gradeId];

    for (const subject of grade.subjects) {
      for (const unit of subject.units) {
        // Coincidencia en título de unidad
        if (unit.title.toLowerCase().includes(cleanQuery)) {
          results.push({
            gradeId,
            gradeName: grade.name,
            subjectId: subject.id,
            subjectName: subject.name,
            unitId: unit.id,
            unitNumber: unit.unitNumber,
            unitTitle: unit.title,
            tomo: unit.tomo,
            matchType: 'unit',
            title: `Unidad ${unit.unitNumber}: ${unit.title}`,
            snippet: unit.summary,
          });
        }

        // Coincidencia en competencias
        for (const comp of unit.competencies) {
          if (comp.toLowerCase().includes(cleanQuery)) {
            results.push({
              gradeId,
              gradeName: grade.name,
              subjectId: subject.id,
              subjectName: subject.name,
              unitId: unit.id,
              unitNumber: unit.unitNumber,
              unitTitle: unit.title,
              tomo: unit.tomo,
              matchType: 'competency',
              title: `Competencia en Unidad ${unit.unitNumber}`,
              snippet: comp,
            });
            break;
          }
        }

        // Coincidencia en lecciones P-S-C-E-R
        for (const lesson of unit.lessons) {
          const inTitle = lesson.title.toLowerCase().includes(cleanQuery);
          const inConclusion = lesson.conclusion.toLowerCase().includes(cleanQuery);
          const inProblema = lesson.problema.toLowerCase().includes(cleanQuery);
          const inSolucion = lesson.solucion.toLowerCase().includes(cleanQuery);

          if (inTitle || inConclusion || inProblema || inSolucion) {
            const isFormula = lesson.conclusion.includes('$') && (inConclusion || cleanQuery.includes('$'));
            results.push({
              gradeId,
              gradeName: grade.name,
              subjectId: subject.id,
              subjectName: subject.name,
              unitId: unit.id,
              unitNumber: unit.unitNumber,
              unitTitle: unit.title,
              tomo: unit.tomo,
              matchType: isFormula ? 'formula' : 'lesson',
              title: `Clase ${lesson.lessonNumber}: ${lesson.title}`,
              snippet: inConclusion ? lesson.conclusion : inProblema ? lesson.problema : lesson.solucion,
              lessonId: lesson.id,
            });
          }
        }
      }
    }
  }

  return results;
}

/**
 * Alias de compatibilidad según el contrato de PROJECT.md
 */
export const getUnitSimulatorQuestions = getUnitQuestions;

/**
 * Retorna banco de 50 preguntas para cualquier unidad (sea estática o generada por respaldo)
 */
export const getUniversalQuestionsForUnit = getUnitQuestions;

/**
 * Objeto de servicio unificado de Refuerzo Curricular Oficial MINED-ESMATE
 */
export const curriculumService = {
  getGrades,
  getGradeDetail,
  getSubject,
  getGradeOfficialResources,
  getAllMinedResources,
  getPrimeraInfanciaArticulationResources,
  getUnit,
  getUnitLessons,
  getUnitQuestions,
  getUnitSimulatorQuestions: getUnitQuestions, // Contract alias from PROJECT.md
  searchCurriculum,
  getEvaluatedUnits,
  getAllUnits,
  getAllMultiSubjectUnits,
  getUniversalQuestionsForUnit: getUnitQuestions,
};

export default curriculumService;


