import {
  CurriculumData,
  ExamCategory,
  FetchQuestionsResult,
  Institution,
  PedagogicalLevel,
  Question,
  SubjectMeta,
  SubtopicMeta,
} from '../types';
import { QUESTIONS_DATA } from '../data';

// Caché en memoria para carga instantánea
const questionsCache = new Map<string, Question[]>();
let uesCurriculumCache: CurriculumData | null = null;
let anspCurriculumCache: CurriculumData | null = null;
let asdCurriculumCache: CurriculumData | null = null;
let avanzoCurriculumCache: CurriculumData | null = null;
let enaCurriculumCache: CurriculumData | null = null;
let escalafonCurriculumCache: CurriculumData | null = null;
let inglesCurriculumCache: CurriculumData | null = null;

/**
 * Asigna un nivel pedagógico ('basico', 'intermedio', 'admision') a cada reactivo
 * según su ubicación temática, complejidad y sección.
 */
export function assignPedagogicalLevel(
  sectionTitle?: string,
  index = 0,
  total = 300
): PedagogicalLevel {
  const title = (sectionTitle || '').toUpperCase();

  // Heurísticas pedagógicas por sección
  if (
    /\bSECCI[ÓO]N\s+I\b/.test(title) ||
    /\bSECCI[ÓO]N\s+II\b/.test(title) ||
    title.includes('CONCEPTOS BÁSICOS') ||
    title.includes('CLASIFICACIÓN') ||
    title.includes('NIVEL BÁSICO') ||
    title.includes('VOCABULARIO') ||
    title.includes('DEFINICIÓN')
  ) {
    return 'basico';
  }

  if (
    /\bSECCI[ÓO]N\s+III\b/.test(title) ||
    /\bSECCI[ÓO]N\s+IV\b/.test(title) ||
    title.includes('PROPIEDADES') ||
    title.includes('OPERACIONES') ||
    title.includes('PROCEDIMIENTO') ||
    title.includes('NIVEL INTERMEDIO')
  ) {
    return 'intermedio';
  }

  if (
    /\bSECCI[ÓO]N\s+V\b/.test(title) ||
    /\bSECCI[ÓO]N\s+VI\b/.test(title) ||
    title.includes('APLICACIONES') ||
    title.includes('PROBLEMAS') ||
    title.includes('INTEGRADOR') ||
    title.includes('EXAMEN')
  ) {
    return 'admision';
  }

  // Fallback por progresión de tercio en el subtema
  const ratio = total > 0 ? index / total : 0;
  if (ratio < 0.35) return 'basico';
  if (ratio < 0.70) return 'intermedio';
  return 'admision';
}

/**
 * Valida y normaliza un objeto de reactivo recibido por red.
 */
function sanitizeQuestion(
  q: any,
  index: number,
  fallbackSubtopicId: string,
  fallbackSubjectId: string,
  institution: Institution,
  subjectName?: string,
  topicTitle?: string,
  totalInBatch = 300
): Question | null {
  if (!q || typeof q !== 'object') return null;

  const rawStatement = typeof q.statement === 'string' ? q.statement.trim() : '';
  if (!rawStatement) return null;

  // Normalizar opciones
  let options = Array.isArray(q.options)
    ? q.options
        .filter((o: any) => o && typeof o.key === 'string' && typeof o.text === 'string' && o.text.trim())
        .map((o: any) => ({ key: o.key.trim().toUpperCase(), text: o.text.trim() }))
    : [];

  if (options.length < 2) return null;

  const validKeys = options.map((o: { key: string; text: string }) => o.key);
  const correct = typeof q.correctAnswer === 'string' ? q.correctAnswer.trim().toUpperCase() : '';
  if (!validKeys.includes(correct)) {
    // Si la clave no está en las opciones, el reactivo está malformado
    return null;
  }

  const secTitle = q.sectionTitle || topicTitle || 'Reactivos de Evaluación';
  const level: PedagogicalLevel = assignPedagogicalLevel(secTitle, index, totalInBatch);

  return {
    id: q.id || `${institution.toLowerCase()}_${fallbackSubtopicId}_q${q.number || index + 1}`,
    number: typeof q.number === 'number' ? q.number : index + 1,
    institution,
    subjectId: q.subjectId || fallbackSubjectId,
    subject: subjectName || getSubjectNameFromId(q.subjectId || fallbackSubjectId, institution),
    subtopicId: q.subtopicId || fallbackSubtopicId,
    topic: topicTitle || q.sectionTitle || getUesSubtopicTitleFromCode(fallbackSubtopicId),
    sectionTitle: secTitle,
    statement: rawStatement,
    options,
    correctAnswer: correct,
    explanation:
      typeof q.explanation === 'string' && q.explanation.trim()
        ? q.explanation.trim()
        : `Respuesta correcta oficial: opción ${correct}.`,
    level,
  };
}

/**
 * Obtiene reactivos de respaldo ESTRICTAMENTE de la misma materia e institución.
 * PREVIENE fugas entre materias (ej. mostrar Literatura cuando falló Matemática).
 */
export function getStrictFallbackQuestions(
  institution: Institution,
  subjectId?: string
): Question[] {
  return (QUESTIONS_DATA as any[])
    .map((q, idx) => ({
      ...q,
      subjectId: q.subjectId || getUesSubjectIdFromCode(q.id),
      subtopicId: q.subtopicId || '1.1',
      level: assignPedagogicalLevel(q.topic, idx, QUESTIONS_DATA.length),
    }))
    .filter((q) => {
      if (q.institution !== institution) return false;
      if (subjectId && subjectId !== 'ALL') {
        const qSubjId = q.subjectId || getUesSubjectIdFromCode(q.id);
        if (qSubjId !== subjectId) {
          // Coincidencia por nombre si los IDs difieren
          const sName = getSubjectNameFromId(subjectId, institution).toLowerCase();
          if (!q.subject.toLowerCase().includes(sName)) return false;
        }
      }
      return true;
    });
}

/**
 * Malla curricular integral de la Escuela de Idiomas (7 lenguas x 6 niveles MCER = 42 asignaturas, 16,800 reactivos).
 */
export const ALL_LANGUAGE_SUBJECTS: SubjectMeta[] = [
  // 1. Inglés (6 niveles)
  {
    id: 'ingles_a1',
    number: 1,
    name: 'Nivel A1 • Breakthrough / Beginner',
    codeRange: 'A1.1 al A1.4',
    description: 'To Be, Present Simple, Pronouns, Articles, Basic Prepositions, Routines.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'ingles_a1', code: 'A1.0', title: 'Inglés • Nivel A1 (Beginner)', subjectId: 'ingles_a1', questionCount: 400 }],
  },
  {
    id: 'ingles_a2',
    number: 2,
    name: 'Nivel A2 • Waystage / Elementary',
    codeRange: 'A2.1 al A2.4',
    description: 'Past Simple, Regular/Irregular verbs, Comparatives, Future will/going to, Modals.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'ingles_a2', code: 'A2.0', title: 'Inglés • Nivel A2 (Elementary)', subjectId: 'ingles_a2', questionCount: 400 }],
  },
  {
    id: 'ingles_b1',
    number: 3,
    name: 'Nivel B1 • Threshold / Intermediate',
    codeRange: 'B1.1 al B1.4',
    description: 'Present Perfect vs Past Simple, Conditionals 0/1/2, Passive intro, Relative clauses.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'ingles_b1', code: 'B1.0', title: 'Inglés • Nivel B1 (Intermediate)', subjectId: 'ingles_b1', questionCount: 400 }],
  },
  {
    id: 'ingles_b2',
    number: 4,
    name: 'Nivel B2 • Vantage / Upper-Intermediate',
    codeRange: 'B2.1 al B2.4',
    description: 'Past Perfect, Future Continuous/Perfect, Conditionals 3rd/Mixed, Reported speech.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'ingles_b2', code: 'B2.0', title: 'Inglés • Nivel B2 (Upper-Intermediate)', subjectId: 'ingles_b2', questionCount: 400 }],
  },
  {
    id: 'ingles_c1',
    number: 5,
    name: 'Nivel C1 • Effective Operational Proficiency',
    codeRange: 'C1.1 al C1.4',
    description: 'Inversion, Cleft sentences, Advanced passive, Subjunctive, Discourse markers.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'ingles_c1', code: 'C1.0', title: 'Inglés • Nivel C1 (Advanced)', subjectId: 'ingles_c1', questionCount: 400 }],
  },
  {
    id: 'ingles_c2',
    number: 6,
    name: 'Nivel C2 • Mastery / Proficiency',
    codeRange: 'C2.1 al C2.4',
    description: 'Literary inversions, Absolute participle, Idiomatic mastery, Sophisticated register.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'ingles_c2', code: 'C2.0', title: 'Inglés • Nivel C2 (Proficiency)', subjectId: 'ingles_c2', questionCount: 400 }],
  },

  // 2. Náhuat Pipil (6 niveles)
  {
    id: 'nahuat_a1',
    number: 7,
    name: 'Náhuat • Nivel A1 (Pewal / Básico)',
    codeRange: 'A1.1 al A1.4',
    description: 'Saludos, prefijos de sujeto (ni-, ti-, ti-...-t), números se, ume, yey, colores y vocabulario pipil.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-600 to-teal-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'nahuat_a1', code: 'A1.0', title: 'Náhuat Pipil • Nivel A1 (Pewal)', subjectId: 'nahuat_a1', questionCount: 400 }],
  },
  {
    id: 'nahuat_a2',
    number: 8,
    name: 'Náhuat • Nivel A2 (Tikit / Elemental)',
    codeRange: 'A2.1 al A2.4',
    description: 'Pretérito con sufijo -ki/-k, prefijos de objeto (ki-, kin-), posesivos nu-, mu-, i- e imperativo ma.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-600 to-teal-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'nahuat_a2', code: 'A2.0', title: 'Náhuat Pipil • Nivel A2 (Tikit)', subjectId: 'nahuat_a2', questionCount: 400 }],
  },
  {
    id: 'nahuat_b1',
    number: 9,
    name: 'Náhuat • Nivel B1 (Tajtaketza / Intermedio)',
    codeRange: 'B1.1 al B1.4',
    description: 'Futuro con sufijo -s, sufijos direccionales -ki (venir a) y -tu (ir a), oraciones compuestas con pal.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-600 to-teal-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'nahuat_b1', code: 'B1.0', title: 'Náhuat Pipil • Nivel B1 (Tajtaketza)', subjectId: 'nahuat_b1', questionCount: 400 }],
  },
  {
    id: 'nahuat_b2',
    number: 10,
    name: 'Náhuat • Nivel B2 (Tamatilis / Intermedio Alto)',
    codeRange: 'B2.1 al B2.4',
    description: 'Voz pasiva (-u/-wa), aplicativo (-lia/-wia), causativo (-tia) y sustantivos relacionales (ijtik, pan).',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-600 to-teal-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'nahuat_b2', code: 'B2.0', title: 'Náhuat Pipil • Nivel B2 (Tamatilis)', subjectId: 'nahuat_b2', questionCount: 400 }],
  },
  {
    id: 'nahuat_c1',
    number: 11,
    name: 'Náhuat • Nivel C1 (Wey Tajtaketzani / Avanzado)',
    codeRange: 'C1.1 al C1.4',
    description: 'Morfología derivativa compleja, sustantivos verbales, reduplicación intensiva/frecuentativa.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-600 to-teal-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'nahuat_c1', code: 'C1.0', title: 'Náhuat Pipil • Nivel C1 (Wey Tajtaketzani)', subjectId: 'nahuat_c1', questionCount: 400 }],
  },
  {
    id: 'nahuat_c2',
    number: 12,
    name: 'Náhuat • Nivel C2 (Senka Nawat / Maestría)',
    codeRange: 'C2.1 al C2.4',
    description: 'Discurso tradicional, narrativa ancestral náhuat, fórmulas ceremoniales y preservación lingüística.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-600 to-teal-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'nahuat_c2', code: 'C2.0', title: 'Náhuat Pipil • Nivel C2 (Senka Nawat)', subjectId: 'nahuat_c2', questionCount: 400 }],
  },

  // 3. Lenca Potón (6 niveles)
  {
    id: 'lenca_a1',
    number: 13,
    name: 'Lenca Potón • Nivel A1 (Básico)',
    codeRange: 'A1.1 al A1.4',
    description: 'Fonología potón, saludos, números lencas (ita, pe, lajwa), colores y términos familiares.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-amber-600 to-orange-700',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'lenca_a1', code: 'A1.0', title: 'Lenca Potón • Nivel A1 (Básico)', subjectId: 'lenca_a1', questionCount: 400 }],
  },
  {
    id: 'lenca_a2',
    number: 14,
    name: 'Lenca Potón • Nivel A2 (Elemental)',
    codeRange: 'A2.1 al A2.4',
    description: 'Morfología verbal potón, sufijos temporales, posesivos y concordancia básica.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-amber-600 to-orange-700',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'lenca_a2', code: 'A2.0', title: 'Lenca Potón • Nivel A2 (Elemental)', subjectId: 'lenca_a2', questionCount: 400 }],
  },
  {
    id: 'lenca_b1',
    number: 15,
    name: 'Lenca Potón • Nivel B1 (Intermedio)',
    codeRange: 'B1.1 al B1.4',
    description: 'Oraciones subordinadas, posposiciones espaciales, aspectos verbales y relatos comunales.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-amber-600 to-orange-700',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'lenca_b1', code: 'B1.0', title: 'Lenca Potón • Nivel B1 (Intermedio)', subjectId: 'lenca_b1', questionCount: 400 }],
  },
  {
    id: 'lenca_b2',
    number: 16,
    name: 'Lenca Potón • Nivel B2 (Intermedio Alto)',
    codeRange: 'B2.1 al B2.4',
    description: 'Sintaxis SOV, construcciones complejas, cláusulas condicionales y temporales.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-amber-600 to-orange-700',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'lenca_b2', code: 'B2.0', title: 'Lenca Potón • Nivel B2 (Intermedio Alto)', subjectId: 'lenca_b2', questionCount: 400 }],
  },
  {
    id: 'lenca_c1',
    number: 17,
    name: 'Lenca Potón • Nivel C1 (Avanzado)',
    codeRange: 'C1.1 al C1.4',
    description: 'Discurso etnolingüístico, revitalización del lenca potón en Guatajiagua y Chilanga.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-amber-600 to-orange-700',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'lenca_c1', code: 'C1.0', title: 'Lenca Potón • Nivel C1 (Avanzado)', subjectId: 'lenca_c1', questionCount: 400 }],
  },
  {
    id: 'lenca_c2',
    number: 18,
    name: 'Lenca Potón • Nivel C2 (Maestría)',
    codeRange: 'C2.1 al C2.4',
    description: 'Documentación lingüística, tradición oral y memoria histórica lenca salvadoreña.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-amber-600 to-orange-700',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'lenca_c2', code: 'C2.0', title: 'Lenca Potón • Nivel C2 (Maestría)', subjectId: 'lenca_c2', questionCount: 400 }],
  },

  // 4. Kakawira (6 niveles)
  {
    id: 'kakawira_a1',
    number: 19,
    name: 'Kakawira • Nivel A1 (Básico)',
    codeRange: 'A1.1 al A1.4',
    description: 'Fonología cacaopera, sistema pronominal, números básicos, objetos cotidianos de Morazán.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-purple-600 to-pink-700',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'kakawira_a1', code: 'A1.0', title: 'Kakawira • Nivel A1 (Básico)', subjectId: 'kakawira_a1', questionCount: 400 }],
  },
  {
    id: 'kakawira_a2',
    number: 20,
    name: 'Kakawira • Nivel A2 (Elemental)',
    codeRange: 'A2.1 al A2.4',
    description: 'Conjugación verbal elemental, prefijos de concordancia, negación y partículas interrogativas.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-purple-600 to-pink-700',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'kakawira_a2', code: 'A2.0', title: 'Kakawira • Nivel A2 (Elemental)', subjectId: 'kakawira_a2', questionCount: 400 }],
  },
  {
    id: 'kakawira_b1',
    number: 21,
    name: 'Kakawira • Nivel B1 (Intermedio)',
    codeRange: 'B1.1 al B1.4',
    description: 'Estructuras subordinadas misumalpas, sufijos aspectuales, narraciones de la comunidad cacaopera.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-purple-600 to-pink-700',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'kakawira_b1', code: 'B1.0', title: 'Kakawira • Nivel B1 (Intermedio)', subjectId: 'kakawira_b1', questionCount: 400 }],
  },
  {
    id: 'kakawira_b2',
    number: 22,
    name: 'Kakawira • Nivel B2 (Intermedio Alto)',
    codeRange: 'B2.1 al B2.4',
    description: 'Relación genética con matagalpa y sumo-mayangna, morfología verbal compleja y derivación léxica.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-purple-600 to-pink-700',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'kakawira_b2', code: 'B2.0', title: 'Kakawira • Nivel B2 (Intermedio Alto)', subjectId: 'kakawira_b2', questionCount: 400 }],
  },
  {
    id: 'kakawira_c1',
    number: 23,
    name: 'Kakawira • Nivel C1 (Avanzado)',
    codeRange: 'C1.1 al C1.4',
    description: 'Textos etnográficos de Cacaopera, discurso ancestral, lexicografía kakawira de Morazán.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-purple-600 to-pink-700',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'kakawira_c1', code: 'C1.0', title: 'Kakawira • Nivel C1 (Avanzado)', subjectId: 'kakawira_c1', questionCount: 400 }],
  },
  {
    id: 'kakawira_c2',
    number: 24,
    name: 'Kakawira • Nivel C2 (Maestría)',
    codeRange: 'C2.1 al C2.4',
    description: 'Archivo lingüístico kakawira, cantos tradicionales, reconstrucción fonológica y legado salvadoreño.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-purple-600 to-pink-700',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'kakawira_c2', code: 'C2.0', title: 'Kakawira • Nivel C2 (Maestría)', subjectId: 'kakawira_c2', questionCount: 400 }],
  },

  // 5. Alemán (6 niveles)
  {
    id: 'german_a1',
    number: 25,
    name: 'Alemán • Nivel A1 (Anfänger)',
    codeRange: 'A1.1 al A1.4',
    description: 'Artículos der/die/das, casos Nominativ/Akkusativ, verbos regulares/irregulares, pronombres.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-yellow-600 to-amber-700',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    borderColor: 'border-yellow-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'german_a1', code: 'A1.0', title: 'Alemán • Nivel A1 (Anfänger)', subjectId: 'german_a1', questionCount: 400 }],
  },
  {
    id: 'german_a2',
    number: 26,
    name: 'Alemán • Nivel A2 (Grundlegende Kenntnisse)',
    codeRange: 'A2.1 al A2.4',
    description: 'Caso Dativ, preposiciones con Wechselpräpositionen, Perfekt con haben/sein, verbos modales.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-yellow-600 to-amber-700',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    borderColor: 'border-yellow-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'german_a2', code: 'A2.0', title: 'Alemán • Nivel A2 (Grundlegend)', subjectId: 'german_a2', questionCount: 400 }],
  },
  {
    id: 'german_b1',
    number: 27,
    name: 'Alemán • Nivel B1 (Fortgeschritten)',
    codeRange: 'B1.1 al B1.4',
    description: 'Präteritum, Konjunktiv II de cortesía, oraciones subordinadas weil/dass/obwohl, pasiva.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-yellow-600 to-amber-700',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    borderColor: 'border-yellow-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'german_b1', code: 'B1.0', title: 'Alemán • Nivel B1 (Fortgeschritten)', subjectId: 'german_b1', questionCount: 400 }],
  },
  {
    id: 'german_b2',
    number: 28,
    name: 'Alemán • Nivel B2 (Selbständige Sprachverwendung)',
    codeRange: 'B2.1 al B2.4',
    description: 'Pasiva con modales y Zustandspassiv, caso Genitiv, n-Deklination, oraciones de relativo complejas.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-yellow-600 to-amber-700',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    borderColor: 'border-yellow-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'german_b2', code: 'B2.0', title: 'Alemán • Nivel B2 (Selbständig)', subjectId: 'german_b2', questionCount: 400 }],
  },
  {
    id: 'german_c1',
    number: 29,
    name: 'Alemán • Nivel C1 (Fachkundige Sprachkenntnisse)',
    codeRange: 'C1.1 al C1.4',
    description: 'Konjunktiv I (Reported Speech), construcciones participiales avanzadas, Nomen-Verb-Verbindungen.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-yellow-600 to-amber-700',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    borderColor: 'border-yellow-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'german_c1', code: 'C1.0', title: 'Alemán • Nivel C1 (Fachkundig)', subjectId: 'german_c1', questionCount: 400 }],
  },
  {
    id: 'german_c2',
    number: 30,
    name: 'Alemán • Nivel C2 (Annähernd muttersprachliche)',
    codeRange: 'C2.1 al C2.4',
    description: 'Estilística alemana culta, partículas modales (doch, mal, ja, wohl), registro científico y literario.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-yellow-600 to-amber-700',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    borderColor: 'border-yellow-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'german_c2', code: 'C2.0', title: 'Alemán • Nivel C2 (Muttersprachlich)', subjectId: 'german_c2', questionCount: 400 }],
  },

  // 6. Árabe (6 niveles)
  {
    id: 'arabic_a1',
    number: 31,
    name: 'Árabe • Nivel A1 (Mubtadi / Básico)',
    codeRange: 'A1.1 al A1.4',
    description: 'Alfabeto árabe (28 letras), harakat (fat-ha, damma, kasra, sukun), pronombres munfasila.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-700 to-green-800',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'arabic_a1', code: 'A1.0', title: 'Árabe • Nivel A1 (Mubtadi)', subjectId: 'arabic_a1', questionCount: 400 }],
  },
  {
    id: 'arabic_a2',
    number: 32,
    name: 'Árabe • Nivel A2 (Ibtidai / Elemental)',
    codeRange: 'A2.1 al A2.4',
    description: 'Oración nominal (Jumla Ismiyya), oración verbal (Jumla Fi\'liyya), verbo en pasado (Al-Madi), Idafa.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-700 to-green-800',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'arabic_a2', code: 'A2.0', title: 'Árabe • Nivel A2 (Ibtidai)', subjectId: 'arabic_a2', questionCount: 400 }],
  },
  {
    id: 'arabic_b1',
    number: 33,
    name: 'Árabe • Nivel B1 (Mutawassit / Intermedio)',
    codeRange: 'B1.1 al B1.4',
    description: 'Verbo presente (Al-Mudari\'), caso acusativo (Mansub), partículas de negación (lam, lan, ma, la), dual.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-700 to-green-800',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'arabic_b1', code: 'B1.0', title: 'Árabe • Nivel B1 (Mutawassit)', subjectId: 'arabic_b1', questionCount: 400 }],
  },
  {
    id: 'arabic_b2',
    number: 34,
    name: 'Árabe • Nivel B2 (Fawq al-Mutawassit / Intermedio Alto)',
    codeRange: 'B2.1 al B2.4',
    description: 'Las 10 formas verbales derivadas (Awzan II-X), plural roto (Jam\' Taksir), condicionales in/law.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-700 to-green-800',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'arabic_b2', code: 'B2.0', title: 'Árabe • Nivel B2 (Fawq al-Mutawassit)', subjectId: 'arabic_b2', questionCount: 400 }],
  },
  {
    id: 'arabic_c1',
    number: 35,
    name: 'Árabe • Nivel C1 (Mutaqaddim / Avanzado)',
    codeRange: 'C1.1 al C1.4',
    description: 'I\'rab detallado (declinación de casos), Ism al-Fa\'il / Ism al-Maf\'ul, Masdar, elativo Af\'al.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-700 to-green-800',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'arabic_c1', code: 'C1.0', title: 'Árabe • Nivel C1 (Mutaqaddim)', subjectId: 'arabic_c1', questionCount: 400 }],
  },
  {
    id: 'arabic_c2',
    number: 36,
    name: 'Árabe • Nivel C2 (Itqan / Maestría)',
    codeRange: 'C2.1 al C2.4',
    description: 'Balagha (retórica árabe), proverbios clásicos, prosa diplomática y periodística de alta precisión.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-emerald-700 to-green-800',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'arabic_c2', code: 'C2.0', title: 'Árabe • Nivel C2 (Itqan)', subjectId: 'arabic_c2', questionCount: 400 }],
  },

  // 7. Mandarín (6 niveles)
  {
    id: 'mandarin_a1',
    number: 37,
    name: 'Mandarín • Nivel A1 (HSK 1 / Básico)',
    codeRange: 'A1.1 al A1.4',
    description: 'Pīnyīn (iniciales, finales y 4 tonos + tono neutro), números 1-100, partículas 是 shì, 的 de, 吗 ma.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-red-600 to-amber-700',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    borderColor: 'border-red-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'mandarin_a1', code: 'A1.0', title: 'Mandarín • Nivel A1 (HSK 1)', subjectId: 'mandarin_a1', questionCount: 400 }],
  },
  {
    id: 'mandarin_a2',
    number: 38,
    name: 'Mandarín • Nivel A2 (HSK 2 / Elemental)',
    codeRange: 'A2.1 al A2.4',
    description: 'Aspecto completivo con 了 le, clasificadores 个 gè, 本 běn, 条 tiáo, verbos auxiliares 想 xiǎng, 要 yào.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-red-600 to-amber-700',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    borderColor: 'border-red-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'mandarin_a2', code: 'A2.0', title: 'Mandarín • Nivel A2 (HSK 2)', subjectId: 'mandarin_a2', questionCount: 400 }],
  },
  {
    id: 'mandarin_b1',
    number: 39,
    name: 'Mandarín • Nivel B1 (HSK 3 / Intermedio)',
    codeRange: 'B1.1 al B1.4',
    description: 'Comparativo con 比 bǐ, estructura 把 bǎ, complementos de resultado y dirección, cláusulas causales.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-red-600 to-amber-700',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    borderColor: 'border-red-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'mandarin_b1', code: 'B1.0', title: 'Mandarín • Nivel B1 (HSK 3)', subjectId: 'mandarin_b1', questionCount: 400 }],
  },
  {
    id: 'mandarin_b2',
    number: 40,
    name: 'Mandarín • Nivel B2 (HSK 4 / Intermedio Alto)',
    codeRange: 'B2.1 al B2.4',
    description: 'Voz pasiva con 被 bèi, conectores lógicos avanzadas (不仅...而且..., 无论...都...), complementos potenciales.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-red-600 to-amber-700',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    borderColor: 'border-red-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'mandarin_b2', code: 'B2.0', title: 'Mandarín • Nivel B2 (HSK 4)', subjectId: 'mandarin_b2', questionCount: 400 }],
  },
  {
    id: 'mandarin_c1',
    number: 41,
    name: 'Mandarín • Nivel C1 (HSK 5 / Avanzado)',
    codeRange: 'C1.1 al C1.4',
    description: 'Chéngyǔ (成语 modismos cuatrisilábicos), registro formal 书面语 shūmiànyǔ, oraciones complejas.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-red-600 to-amber-700',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    borderColor: 'border-red-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'mandarin_c1', code: 'C1.0', title: 'Mandarín • Nivel C1 (HSK 5)', subjectId: 'mandarin_c1', questionCount: 400 }],
  },
  {
    id: 'mandarin_c2',
    number: 42,
    name: 'Mandarín • Nivel C2 (HSK 6 / Maestría)',
    codeRange: 'C2.1 al C2.4',
    description: 'Mandarín literario clásico (Wényánwén), precisión estilística y retórica diplomática y comercial.',
    totalSubtopics: 1,
    totalQuestions: 400,
    color: 'from-red-600 to-amber-700',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    borderColor: 'border-red-200',
    icon: 'Globe',
    institution: 'INGLES',
    subtopics: [{ id: 'mandarin_c2', code: 'C2.0', title: 'Mandarín • Nivel C2 (HSK 6)', subjectId: 'mandarin_c2', questionCount: 400 }],
  },
];

/**
 * Carga la malla curricular oficial para UES, ANSP, ASD, AVANZO, ENA, ESCALAFON o INGLES.
 */
export async function fetchCurriculum(category: Institution = 'UES'): Promise<CurriculumData> {
  if (category === 'UES' && uesCurriculumCache) return uesCurriculumCache;
  if (category === 'ANSP' && anspCurriculumCache) return anspCurriculumCache;
  if (category === 'ASD' && asdCurriculumCache) return asdCurriculumCache;
  if (category === 'AVANZO' && avanzoCurriculumCache) return avanzoCurriculumCache;
  if (category === 'ENA' && enaCurriculumCache) return enaCurriculumCache;
  if (category === 'ESCALAFON' && escalafonCurriculumCache) return escalafonCurriculumCache;
  if (category === 'INGLES' && inglesCurriculumCache) return inglesCurriculumCache;

  let url = '/data/curriculum.json';
  if (category === 'ANSP') url = '/data/ansp/curriculum.json';
  if (category === 'ASD') url = '/data/asd/curriculum.json';
  if (category === 'AVANZO') url = '/data/avanzo/curriculum.json';
  if (category === 'ENA') url = '/data/ena/curriculum.json';
  if (category === 'ESCALAFON') url = '/data/escalafon/curriculum.json';
  if (category === 'INGLES') url = '/data/ingles/curriculum.json';

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: no se pudo cargar el currículo de ${category}`);
    }
    const data: CurriculumData = await res.json();

    data.subjects = data.subjects.map((s) => ({
      ...s,
      institution: category,
    }));

    if (category === 'UES') uesCurriculumCache = data;
    if (category === 'ANSP') anspCurriculumCache = data;
    if (category === 'ASD') asdCurriculumCache = data;
    if (category === 'AVANZO') avanzoCurriculumCache = data;
    if (category === 'ENA') enaCurriculumCache = data;
    if (category === 'ESCALAFON') escalafonCurriculumCache = data;
    if (category === 'INGLES') inglesCurriculumCache = data;

    return data;
  } catch (error) {
    console.warn(`[bancoService] Fallback currículo ${category}:`, error);
    return getFallbackCurriculum(category);
  }
}

/**
 * Carga los currículos de todas las instituciones y retorna la malla unificada (UES + ANSP + ASD + AVANZO + ENA + ESCALAFON + INGLES).
 */
export async function fetchUnifiedCurriculum(): Promise<{
  allSubjects: SubjectMeta[];
  totalQuestions: number;
  totalSubtopics: number;
}> {
  const [ues, ansp, asd, avanzo, ena, escalafon] = await Promise.all([
    fetchCurriculum('UES').catch(() => getFallbackCurriculum('UES')),
    fetchCurriculum('ANSP').catch(() => getFallbackCurriculum('ANSP')),
    fetchCurriculum('ASD').catch(() => getFallbackCurriculum('ASD')),
    fetchCurriculum('AVANZO').catch(() => getFallbackCurriculum('AVANZO')),
    fetchCurriculum('ENA').catch(() => getFallbackCurriculum('ENA')),
    fetchCurriculum('ESCALAFON').catch(() => getFallbackCurriculum('ESCALAFON')),
  ]);

  const allSubjects: SubjectMeta[] = [
    ...ues.subjects.map((s) => ({ ...s, institution: 'UES' as Institution })),
    ...avanzo.subjects.map((s) => ({ ...s, institution: 'AVANZO' as Institution })),
    ...asd.subjects.map((s) => ({ ...s, institution: 'ASD' as Institution })),
    ...ena.subjects.map((s) => ({ ...s, institution: 'ENA' as Institution })),
    ...escalafon.subjects.map((s) => ({ ...s, institution: 'ESCALAFON' as Institution })),
    ...ansp.subjects.map((s) => ({ ...s, institution: 'ANSP' as Institution })),
    ...ALL_LANGUAGE_SUBJECTS,
  ];

  const totalQuestions =
    (ues.totalQuestions || 7500) +
    (avanzo.totalQuestions || 3000) +
    (asd.totalQuestions || 2190) +
    (ena.totalQuestions || 1400) +
    (escalafon.totalQuestions || 3300) +
    (ansp.totalQuestions || 250) +
    16800; // 7 lenguas x 2,400 preguntas
  const totalSubtopics =
    (ues.totalSubtopics || 25) +
    (avanzo.totalSubtopics || 5) +
    (asd.totalSubtopics || 6) +
    (ena.totalSubtopics || 4) +
    (escalafon.totalSubtopics || 11) +
    (ansp.totalSubtopics || 10) +
    42; // 7 lenguas x 6 niveles

  return { allSubjects, totalQuestions, totalSubtopics };
}

/**
 * Carga las preguntas de un subtema o materia con resultado detallado.
 */
export async function fetchQuestionsDetailed(
  category: Institution,
  targetId: string,
  subjectName?: string,
  topicTitle?: string
): Promise<FetchQuestionsResult> {
  const cacheKey = `${category}_${targetId}`;
  if (questionsCache.has(cacheKey)) {
    return {
      questions: questionsCache.get(cacheKey)!,
      status: 'success',
      isFallback: false,
    };
  }

  let questions: Question[] = [];
  let isFallback = false;
  let errorType: FetchQuestionsResult['errorType'] = undefined;
  let errorMessage: string | undefined = undefined;

  try {
    if (category === 'ASD') {
      let url = `/data/asd/questions/${targetId}.json`;
      if (targetId === 'all') {
        url = '/data/asd/questions/all.json';
      }

      const res = await fetch(url);
      if (res.ok) {
        const raw = await res.json();
        if (Array.isArray(raw)) {
          questions = raw
            .map((q: any, i: number) =>
              sanitizeQuestion(
                q,
                i,
                targetId,
                q.subjectId || targetId,
                'ASD',
                subjectName || getSubjectNameFromId(q.subjectId || targetId, 'ASD'),
                topicTitle || q.sectionTitle,
                raw.length
              )
            )
            .filter((q): q is Question => q !== null);
        } else {
          errorType = 'invalid_data';
          errorMessage = 'La respuesta del banco ASD no tiene el formato esperado.';
        }
      } else if (res.status === 404) {
        // Intento de recuperación cargando all.json filtrado
        const allRes = await fetch('/data/asd/questions/all.json');
        if (allRes.ok) {
          const allRaw = await allRes.json();
          if (Array.isArray(allRaw)) {
            const filtered =
              targetId === 'all'
                ? allRaw
                : allRaw.filter((q: any) => q.subtopicId === targetId || q.subjectId === targetId);
            questions = filtered
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  targetId,
                  q.subjectId || targetId,
                  'ASD',
                  subjectName,
                  topicTitle,
                  filtered.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          errorType = 'not_found';
          errorMessage = `No se encontró el archivo de reactivos ASD para ${targetId}.`;
        }
      } else {
        errorType = 'network';
        errorMessage = `Error de red (${res.status}) al consultar el banco ASD.`;
      }
    } else if (category === 'AVANZO') {
      let url = `/data/avanzo/questions/${targetId}.json`;
      if (targetId === 'all') {
        url = '/data/avanzo/questions/all.json';
      }

      const res = await fetch(url);
      if (res.ok) {
        const raw = await res.json();
        if (Array.isArray(raw)) {
          questions = raw
            .map((q: any, i: number) =>
              sanitizeQuestion(
                q,
                i,
                targetId,
                q.subjectId || targetId,
                'AVANZO',
                subjectName || getSubjectNameFromId(q.subjectId || targetId, 'AVANZO'),
                topicTitle || q.sectionTitle,
                raw.length
              )
            )
            .filter((q): q is Question => q !== null);
        } else {
          errorType = 'invalid_data';
          errorMessage = 'La respuesta del banco AVANZO no tiene el formato esperado.';
        }
      } else if (res.status === 404) {
        // Intento de recuperación cargando all.json filtrado
        const allRes = await fetch('/data/avanzo/questions/all.json');
        if (allRes.ok) {
          const allRaw = await allRes.json();
          if (Array.isArray(allRaw)) {
            const filtered =
              targetId === 'all'
                ? allRaw
                : allRaw.filter((q: any) => q.subtopicId === targetId || q.subjectId === targetId);
            questions = filtered
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  targetId,
                  q.subjectId || targetId,
                  'AVANZO',
                  subjectName,
                  topicTitle,
                  filtered.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          errorType = 'not_found';
          errorMessage = `No se encontró el archivo de reactivos AVANZO para ${targetId}.`;
        }
      } else {
        errorType = 'network';
        errorMessage = `Error de red (${res.status}) al consultar el banco AVANZO.`;
      }
    } else if (category === 'ENA') {
      let url = `/data/ena/questions/${targetId}.json`;
      if (targetId === 'all') {
        url = '/data/ena/questions/all.json';
      }

      const res = await fetch(url);
      if (res.ok) {
        const raw = await res.json();
        if (Array.isArray(raw)) {
          questions = raw
            .map((q: any, i: number) =>
              sanitizeQuestion(
                q,
                i,
                targetId,
                q.subjectId || targetId,
                'ENA',
                subjectName || getSubjectNameFromId(q.subjectId || targetId, 'ENA'),
                topicTitle || q.sectionTitle,
                raw.length
              )
            )
            .filter((q): q is Question => q !== null);
        } else {
          errorType = 'invalid_data';
          errorMessage = 'La respuesta del banco ENA no tiene el formato esperado.';
        }
      } else if (res.status === 404) {
        // Intento de recuperación cargando all.json filtrado
        const allRes = await fetch('/data/ena/questions/all.json');
        if (allRes.ok) {
          const allRaw = await allRes.json();
          if (Array.isArray(allRaw)) {
            const filtered =
              targetId === 'all'
                ? allRaw
                : allRaw.filter((q: any) => q.subtopicId === targetId || q.subjectId === targetId);
            questions = filtered
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  targetId,
                  q.subjectId || targetId,
                  'ENA',
                  subjectName,
                  topicTitle,
                  filtered.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          errorType = 'not_found';
          errorMessage = `No se encontró el archivo de reactivos ENA para ${targetId}.`;
        }
      } else {
        errorType = 'network';
        errorMessage = `Error de red (${res.status}) al consultar el banco ENA.`;
      }
    } else if (category === 'ESCALAFON') {
      let url = `/data/escalafon/questions/${targetId}.json`;
      if (targetId === 'all') {
        url = '/data/escalafon/questions/all.json';
      }

      const res = await fetch(url);
      if (res.ok) {
        const raw = await res.json();
        if (Array.isArray(raw)) {
          questions = raw
            .map((q: any, i: number) =>
              sanitizeQuestion(
                q,
                i,
                targetId,
                q.subjectId || targetId,
                'ESCALAFON',
                subjectName || getSubjectNameFromId(q.subjectId || targetId, 'ESCALAFON'),
                topicTitle || q.sectionTitle,
                raw.length
              )
            )
            .filter((q): q is Question => q !== null);
        } else {
          errorType = 'invalid_data';
          errorMessage = 'La respuesta del banco ESCALAFÓN no tiene el formato esperado.';
        }
      } else if (res.status === 404) {
        // Intento de recuperación cargando all.json filtrado
        const allRes = await fetch('/data/escalafon/questions/all.json');
        if (allRes.ok) {
          const allRaw = await allRes.json();
          if (Array.isArray(allRaw)) {
            const filtered =
              targetId === 'all'
                ? allRaw
                : allRaw.filter((q: any) => q.subtopicId === targetId || q.subjectId === targetId);
            questions = filtered
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  targetId,
                  q.subjectId || targetId,
                  'ESCALAFON',
                  subjectName,
                  topicTitle,
                  filtered.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          errorType = 'not_found';
          errorMessage = `No se encontró el archivo de reactivos ESCALAFÓN para ${targetId}.`;
        }
      } else {
        errorType = 'network';
        errorMessage = `Error de red (${res.status}) al consultar el banco ESCALAFÓN.`;
      }
    } else if (category === 'ANSP') {
      let url = `/data/ansp/questions/${targetId}.json`;
      if (targetId === 'all') {
        url = '/data/ansp/questions/all.json';
      }

      const res = await fetch(url);
      if (res.ok) {
        const raw = await res.json();
        if (Array.isArray(raw)) {
          questions = raw
            .map((q: any, i: number) =>
              sanitizeQuestion(
                q,
                i,
                targetId,
                q.subjectId || targetId,
                'ANSP',
                subjectName,
                topicTitle,
                raw.length
              )
            )
            .filter((q): q is Question => q !== null);
        } else {
          errorType = 'invalid_data';
          errorMessage = 'La respuesta del banco ANSP no tiene el formato esperado.';
        }
      } else if (res.status === 404) {
        // Intento de recuperación cargando all.json filtrado
        const allRes = await fetch('/data/ansp/questions/all.json');
        if (allRes.ok) {
          const allRaw = await allRes.json();
          if (Array.isArray(allRaw)) {
            const filtered =
              targetId === 'all'
                ? allRaw
                : allRaw.filter((q: any) => q.subjectId === targetId || q.subtopicId === targetId);
            questions = filtered
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  targetId,
                  q.subjectId || targetId,
                  'ANSP',
                  subjectName,
                  topicTitle,
                  filtered.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          errorType = 'not_found';
          errorMessage = `No se encontró el archivo de reactivos para ${targetId}.`;
        }
      } else {
        errorType = 'network';
        errorMessage = `Error de red (${res.status}) al consultar el banco ANSP.`;
      }
    } else if (category === 'INGLES') {
      const loadLangBank = async (target?: string) => {
        const t = (target || '').toLowerCase();
        if (t.startsWith('nahuat_')) {
          const mod = await import('../data/languages/nahuatData');
          return { lang: 'nahuat', prefix: 'nahuat_', bank: mod.NAHUAT_QUESTIONS_BANK, name: 'Náhuat Pipil' };
        }
        if (t.startsWith('lenca_')) {
          const mod = await import('../data/languages/lencaData');
          return { lang: 'lenca', prefix: 'lenca_', bank: mod.LENCA_QUESTIONS_BANK, name: 'Lenca Potón' };
        }
        if (t.startsWith('kakawira_')) {
          const mod = await import('../data/languages/kakawiraData');
          return { lang: 'kakawira', prefix: 'kakawira_', bank: mod.KAKAWIRA_QUESTIONS_BANK, name: 'Kakawira' };
        }
        if (t.startsWith('german_') || t.startsWith('aleman_')) {
          const mod = await import('../data/languages/germanData');
          return { lang: 'german', prefix: 'german_', bank: mod.GERMAN_QUESTIONS_BANK, name: 'Alemán' };
        }
        if (t.startsWith('arabic_') || t.startsWith('arabe_')) {
          const mod = await import('../data/languages/arabicData');
          return { lang: 'arabic', prefix: 'arabic_', bank: mod.ARABIC_QUESTIONS_BANK, name: 'Árabe' };
        }
        if (t.startsWith('mandarin_') || t.startsWith('chino_')) {
          const mod = await import('../data/languages/mandarinData');
          return { lang: 'mandarin', prefix: 'mandarin_', bank: mod.MANDARIN_QUESTIONS_BANK, name: 'Mandarín' };
        }
        const mod = await import('../data/languages/englishData');
        return { lang: 'english', prefix: 'ingles_', bank: mod.ENGLISH_QUESTIONS_BANK, name: 'Inglés' };
      };

      const mapQuestion = (q: any, prefix: string, langName: string) => {
        const subId = `${prefix}${q.level.toLowerCase()}`;
        return {
          id: q.id,
          number: q.number,
          institution: 'INGLES' as Institution,
          subjectId: subId,
          subject: getSubjectNameFromId(subId, 'INGLES'),
          subtopicId: subId,
          topic: q.topic,
          sectionTitle: `${langName} • Nivel ${q.level} • ${q.topic}`,
          statement: q.statement,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          level: q.level === 'A1' || q.level === 'A2' ? 'basico' : q.level === 'B1' || q.level === 'B2' ? 'intermedio' : 'admision',
        } as Question;
      };

      if (!targetId || targetId === 'all') {
        const [engMod, nahMod, lenMod, kakMod, gerMod, araMod, manMod] = await Promise.all([
          import('../data/languages/englishData'),
          import('../data/languages/nahuatData'),
          import('../data/languages/lencaData'),
          import('../data/languages/kakawiraData'),
          import('../data/languages/germanData'),
          import('../data/languages/arabicData'),
          import('../data/languages/mandarinData'),
        ]);

        questions = [
          ...engMod.ENGLISH_QUESTIONS_BANK.map((q) => mapQuestion(q, 'ingles_', 'Inglés')),
          ...nahMod.NAHUAT_QUESTIONS_BANK.map((q) => mapQuestion(q, 'nahuat_', 'Náhuat Pipil')),
          ...lenMod.LENCA_QUESTIONS_BANK.map((q) => mapQuestion(q, 'lenca_', 'Lenca Potón')),
          ...kakMod.KAKAWIRA_QUESTIONS_BANK.map((q) => mapQuestion(q, 'kakawira_', 'Kakawira')),
          ...gerMod.GERMAN_QUESTIONS_BANK.map((q) => mapQuestion(q, 'german_', 'Alemán')),
          ...araMod.ARABIC_QUESTIONS_BANK.map((q) => mapQuestion(q, 'arabic_', 'Árabe')),
          ...manMod.MANDARIN_QUESTIONS_BANK.map((q) => mapQuestion(q, 'mandarin_', 'Mandarín')),
        ];
      } else {
        const { prefix, bank, name } = await loadLangBank(targetId);
        const mapped = bank.map((q) => mapQuestion(q, prefix, name));
        const lvl = targetId.toLowerCase().replace(prefix, '').toUpperCase();
        const filtered = mapped.filter(
          (q) => q.subtopicId === targetId || q.statement.includes(lvl) || q.subject.includes(lvl) || q.sectionTitle?.includes(lvl)
        );
        questions = filtered.length > 0 ? filtered : mapped;
      }
    } else {
      // UES
      const res = await fetch(`/data/questions/${targetId}.json`);
      if (res.ok) {
        const raw = await res.json();
        if (Array.isArray(raw)) {
          const sId = getUesSubjectIdFromCode(targetId);
          questions = raw
            .map((q: any, i: number) =>
              sanitizeQuestion(
                q,
                i,
                targetId,
                sId,
                'UES',
                subjectName,
                topicTitle,
                raw.length
              )
            )
            .filter((q): q is Question => q !== null);
        } else {
          errorType = 'invalid_data';
          errorMessage = 'Los datos del subtema UES no tienen formato de lista.';
        }
      } else if (res.status === 404) {
        errorType = 'not_found';
        errorMessage = `Archivo del subtema UES ${targetId} no encontrado.`;
      } else {
        errorType = 'network';
        errorMessage = `Error de conexión (${res.status}) al cargar el subtema UES ${targetId}.`;
      }
    }
  } catch (err: any) {
    errorType = 'network';
    errorMessage = `Error de conexión: ${err?.message || 'No fue posible contactar el servidor.'}`;
  }

  // Si falló y no hay preguntas, intentar respaldo estricto SIN mezclar materias
  if (questions.length === 0) {
    const strictFallback = getStrictFallbackQuestions(
      category,
      category === 'UES' ? getUesSubjectIdFromCode(targetId) : targetId
    );
    if (strictFallback.length > 0) {
      questions = strictFallback;
      isFallback = true;
    }
  }

  if (questions.length > 0) {
    questionsCache.set(cacheKey, questions);
    return {
      questions,
      status: 'success',
      isFallback,
      errorType: isFallback ? errorType : undefined,
      errorMessage: isFallback ? `Mostrando reactivos locales verificados para esta asignatura.` : undefined,
    };
  }

  return {
    questions: [],
    status: errorType ? 'error' : 'empty',
    errorType: errorType || 'empty',
    errorMessage:
      errorMessage ||
      `No se encontraron reactivos para ${subjectName || targetId}. Puedes reintentar o seleccionar otro tema.`,
  };
}

/**
 * Carga las preguntas de un subtema o materia específica (firma retrocompatible).
 */
export async function fetchSubtopicQuestions(
  category: Institution,
  targetId: string,
  subjectName?: string,
  topicTitle?: string
): Promise<Question[]> {
  const result = await fetchQuestionsDetailed(category, targetId, subjectName, topicTitle);
  return result.questions;
}

/**
 * Retorna currículo de emergencia si falla la red.
 */
function getFallbackCurriculum(category: Institution): CurriculumData {
  if (category === 'INGLES') {
    return {
      title: 'Marco Común Europeo de Referencia (MCER / CEFR) — Idiomas: Inglés',
      description: 'Malla curricular internacional estructurada en 6 niveles de dominio lingüístico: A1 (Principiante), A2 (Elemental), B1 (Intermedio), B2 (Intermedio Alto), C1 (Avanzado Operativo) y C2 (Maestría / Proficiencia), con división contrastiva entre Inglés Americano (US) e Inglés Británico (UK).',
      totalQuestions: 2400,
      totalSubtopics: 6,
      subjects: ALL_LANGUAGE_SUBJECTS.slice(0, 6),
    };
  }

  if (category === 'ESCALAFON') {
    return {
      title: 'Evaluación para el Ascenso al Nivel Uno del Escalafón Docente — MINED 2026',
      description: 'Banco oficial de preparación para las pruebas de suficiencia y ascenso de categoría docente convocadas por el Tribunal Calificador de la Carrera Docente del Ministerio de Educación de El Salvador (MINED), estructurado en Formación General y 10 Especialidades Curriculares (300 preguntas por sección).',
      totalQuestions: 3300,
      totalSubtopics: 11,
      subjects: [
        {
          id: 'escalafon_general',
          number: 1,
          name: 'Formación General Pedagógica y Legislación',
          codeRange: '1.1 al 1.12',
          description: 'Pensamiento pedagógico, desarrollo cognitivo de Piaget, fines de la educación, marco normativo (Ley de la Carrera Docente, Ley Crecer Juntos, Ley de Ética Gubernamental), secuencias didácticas, adaptaciones curriculares, evaluación por competencias, investigación y TIC.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-purple-700 to-indigo-800',
          badgeBg: 'bg-purple-100',
          badgeText: 'text-purple-800',
          borderColor: 'border-purple-200',
          icon: 'Award',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_general', code: '1.0', title: 'Formación General Pedagógica y Normativa', subjectId: 'escalafon_general', questionCount: 300 }],
        },
        {
          id: 'escalafon_parvularia',
          number: 2,
          name: 'Educación Parvularia',
          codeRange: '2.1 al 2.4',
          description: 'Desarrollo infantil físico, psicomotor y socioafectivo, estimulación temprana, didáctica y precursores de la educación inicial, organización curricular, rincones de aprendizaje y expresión creativa.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-pink-600 to-rose-700',
          badgeBg: 'bg-pink-100',
          badgeText: 'text-pink-800',
          borderColor: 'border-pink-200',
          icon: 'Sparkles',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_parvularia', code: '2.0', title: 'Didáctica y Desarrollo en Educación Parvularia', subjectId: 'escalafon_parvularia', questionCount: 300 }],
        },
        {
          id: 'escalafon_basica',
          number: 3,
          name: 'Educación Básica (I y II Ciclo)',
          codeRange: '3.1 al 3.4',
          description: 'Fundamentos de lectoescritura inicial y método fónico-analítico-sintético, didáctica de matemática básica, ciencias naturales e indagación escolar, y ciencias sociales con formación cívica y memoria histórica.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-amber-600 to-orange-700',
          badgeBg: 'bg-amber-100',
          badgeText: 'text-amber-800',
          borderColor: 'border-amber-200',
          icon: 'BookOpen',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_basica', code: '3.0', title: 'Didáctica Integral de Educación Básica', subjectId: 'escalafon_basica', questionCount: 300 }],
        },
        {
          id: 'escalafon_lenguaje',
          number: 4,
          name: 'Lenguaje y Literatura',
          codeRange: '4.1 al 4.4',
          description: 'Lingüística textual, análisis morfosintáctico, semántica y ortografía RAE, literatura universal, española y latinoamericana, canon salvadoreño y didáctica del enfoque comunicativo.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-violet-600 to-purple-700',
          badgeBg: 'bg-violet-100',
          badgeText: 'text-violet-800',
          borderColor: 'border-violet-200',
          icon: 'Feather',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_lenguaje', code: '4.0', title: 'Especialidad de Lenguaje y Literatura', subjectId: 'escalafon_lenguaje', questionCount: 300 }],
        },
        {
          id: 'escalafon_matematica',
          number: 5,
          name: 'Matemática',
          codeRange: '5.1 al 5.4',
          description: 'Aritmética rigurosa, álgebra polinomial, geometría euclidiana, trigonometría, precálculo, funciones, estadística descriptiva, probabilidad y didáctica ESMATE.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-blue-600 to-indigo-700',
          badgeBg: 'bg-blue-100',
          badgeText: 'text-blue-800',
          borderColor: 'border-blue-200',
          icon: 'Calculator',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_matematica', code: '5.0', title: 'Especialidad de Matemática ESMATE', subjectId: 'escalafon_matematica', questionCount: 300 }],
        },
        {
          id: 'escalafon_naturales',
          number: 6,
          name: 'Ciencias Naturales',
          codeRange: '6.1 al 6.4',
          description: 'Mecánica newtoniana, electromagnetismo, termodinámica, química atómica, enlaces, estequiometría, biología celular, genética, ecología y didáctica experimental indagatoria.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-emerald-600 to-teal-700',
          badgeBg: 'bg-emerald-100',
          badgeText: 'text-emerald-800',
          borderColor: 'border-emerald-200',
          icon: 'Atom',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_naturales', code: '6.0', title: 'Especialidad de Ciencias Naturales', subjectId: 'escalafon_naturales', questionCount: 300 }],
        },
        {
          id: 'escalafon_sociales',
          number: 7,
          name: 'Ciencias Sociales',
          codeRange: '7.1 al 7.4',
          description: 'Historia de El Salvador, Centroamérica y el mundo, geografía física y humana, teoría política, sociología, formación ciudadana, derechos humanos y metodología didáctica de las ciencias sociales.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-red-600 to-rose-700',
          badgeBg: 'bg-red-100',
          badgeText: 'text-red-800',
          borderColor: 'border-red-200',
          icon: 'Landmark',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_sociales', code: '7.0', title: 'Especialidad de Ciencias Sociales', subjectId: 'escalafon_sociales', questionCount: 300 }],
        },
        {
          id: 'escalafon_ingles',
          number: 8,
          name: 'Inglés',
          codeRange: '8.1 al 8.4',
          description: 'Dominio lingüístico C1/B2, gramática avanzada, fonética y fonología inglesa, metodologías ELT/TESOL, diseño de lesson plans y evaluación de destrezas comunicativas.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-sky-600 to-blue-700',
          badgeBg: 'bg-sky-100',
          badgeText: 'text-sky-800',
          borderColor: 'border-sky-200',
          icon: 'Globe',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_ingles', code: '8.0', title: 'Especialidad de Idioma Inglés', subjectId: 'escalafon_ingles', questionCount: 300 }],
        },
        {
          id: 'escalafon_fisica',
          number: 9,
          name: 'Educación Física',
          codeRange: '9.1 al 9.4',
          description: 'Fisiología del ejercicio, anatomía motriz, biomecánica, desarrollo psicomotor, iniciación deportiva, recreación escolar y didáctica de la actividad física saludable.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-lime-600 to-green-700',
          badgeBg: 'bg-lime-100',
          badgeText: 'text-lime-800',
          borderColor: 'border-lime-200',
          icon: 'Activity',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_fisica', code: '9.0', title: 'Especialidad de Educación Física', subjectId: 'escalafon_fisica', questionCount: 300 }],
        },
        {
          id: 'escalafon_especial',
          number: 10,
          name: 'Educación Especial',
          codeRange: '10.1 al 10.4',
          description: 'Inclusión educativa, Diseño Universal para el Aprendizaje (DUA), adaptaciones curriculares, necesidades educativas especiales asociadas o no a discapacidad y tecnologías asistivas.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-teal-600 to-cyan-700',
          badgeBg: 'bg-teal-100',
          badgeText: 'text-teal-800',
          borderColor: 'border-teal-200',
          icon: 'HeartHandshake',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_especial', code: '10.0', title: 'Especialidad de Educación Especial e Inclusiva', subjectId: 'escalafon_especial', questionCount: 300 }],
        },
        {
          id: 'escalafon_comerciales',
          number: 11,
          name: 'Ciencias Comerciales',
          codeRange: '11.1 al 11.4',
          description: 'Contabilidad general y de costos, estados financieros, legislación mercantil y tributaria salvadoreña (Código de Comercio, Código Tributario), administración y mercadotecnia.',
          totalSubtopics: 1,
          totalQuestions: 300,
          color: 'from-slate-600 to-gray-800',
          badgeBg: 'bg-slate-100',
          badgeText: 'text-slate-800',
          borderColor: 'border-slate-200',
          icon: 'Briefcase',
          institution: 'ESCALAFON',
          subtopics: [{ id: 'escalafon_comerciales', code: '11.0', title: 'Especialidad de Ciencias Comerciales y Contabilidad', subjectId: 'escalafon_comerciales', questionCount: 300 }],
        },
      ],
    };
  }

  if (category === 'ENA') {
    return {
      title: 'Escuela Nacional de Agricultura "Roberto Quiñónez" (ENA)',
      description: 'Banco oficial de 1,400 preguntas para el Examen de Admisión 2027 estructurado en 4 asignaturas técnicas (350 preguntas por materia).',
      totalQuestions: 1400,
      totalSubtopics: 4,
      subjects: [
        {
          id: 'ena_matematicas',
          number: 1,
          name: 'Matemáticas',
          codeRange: '1.1 al 1.7',
          description: 'Aritmética aplicada al agro, unidades agrarias (manzanas, quintales), porcentajes, regla de tres, áreas, álgebra y trigonometría.',
          totalSubtopics: 1,
          totalQuestions: 350,
          color: 'from-emerald-600 to-green-700',
          badgeBg: 'bg-emerald-100',
          badgeText: 'text-emerald-800',
          borderColor: 'border-emerald-200',
          icon: 'Calculator',
          institution: 'ENA',
          subtopics: [{ id: 'ena_matematicas', code: '1.0', title: 'Matemáticas Agrarias', subjectId: 'ena_matematicas', questionCount: 350 }],
        },
        {
          id: 'ena_quimica',
          number: 2,
          name: 'Química',
          codeRange: '2.1 al 2.6',
          description: 'Química general, estructura atómica, tabla periódica, macronutrientes NPK, enlaces químicos, soluciones y encalado de suelos.',
          totalSubtopics: 1,
          totalQuestions: 350,
          color: 'from-teal-600 to-emerald-700',
          badgeBg: 'bg-teal-100',
          badgeText: 'text-teal-800',
          borderColor: 'border-teal-200',
          icon: 'Atom',
          institution: 'ENA',
          subtopics: [{ id: 'ena_quimica', code: '2.0', title: 'Química y Agroquímica', subjectId: 'ena_quimica', questionCount: 350 }],
        },
        {
          id: 'ena_biologia',
          number: 3,
          name: 'Biología',
          codeRange: '3.1 al 3.6',
          description: 'Célula vegetal y animal, fotosíntesis, respiración celular, genética mendeliana, reinos biológicos y microbiología del suelo.',
          totalSubtopics: 1,
          totalQuestions: 350,
          color: 'from-green-600 to-lime-700',
          badgeBg: 'bg-green-100',
          badgeText: 'text-green-800',
          borderColor: 'border-green-200',
          icon: 'Sprout',
          institution: 'ENA',
          subtopics: [{ id: 'ena_biologia', code: '3.0', title: 'Biología y Botánica Agrícola', subjectId: 'ena_biologia', questionCount: 350 }],
        },
        {
          id: 'ena_lenguaje',
          number: 4,
          name: 'Lenguaje',
          codeRange: '4.1 al 4.6',
          description: 'Comunicación técnica, informes académicos, bitácora de campo, argumentación, ortografía y literatura salvadoreña.',
          totalSubtopics: 1,
          totalQuestions: 350,
          color: 'from-amber-600 to-yellow-700',
          badgeBg: 'bg-amber-100',
          badgeText: 'text-amber-800',
          borderColor: 'border-amber-200',
          icon: 'BookOpen',
          institution: 'ENA',
          subtopics: [{ id: 'ena_lenguaje', code: '4.0', title: 'Lenguaje y Comunicación Técnica', subjectId: 'ena_lenguaje', questionCount: 350 }],
        },
      ],
    };
  }

  if (category === 'ASD') {
    return {
      title: 'Academia Sabatina Departamental (ASD) - Jóvenes Talento',
      description: 'Banco oficial de 2,190 preguntas estructurado por grados académicos (Quinto, Sexto y Séptimo Grado) en Matemática y Ciencias Naturales (365 preguntas por materia).',
      totalQuestions: 2190,
      totalSubtopics: 6,
      subjects: [
        {
          id: 'asd_5',
          number: 1,
          name: 'Quinto Grado (5.° Grado)',
          codeRange: '5.1 y 5.2',
          description: 'Preparación académica de 5.° Grado en Matemática (ESMATE) y Ciencias Naturales.',
          totalSubtopics: 2,
          totalQuestions: 730,
          color: 'from-emerald-600 to-teal-700',
          badgeBg: 'bg-emerald-100',
          badgeText: 'text-emerald-800',
          borderColor: 'border-emerald-200',
          icon: 'GraduationCap',
          institution: 'ASD',
          subtopics: [
            { id: '5_matematica', code: '5.1', title: 'Matemática (5.° Grado)', subjectId: 'asd_5', questionCount: 365 },
            { id: '5_ciencias', code: '5.2', title: 'Ciencias Naturales (5.° Grado)', subjectId: 'asd_5', questionCount: 365 },
          ],
        },
        {
          id: 'asd_6',
          number: 2,
          name: 'Sexto Grado (6.° Grado)',
          codeRange: '6.1 y 6.2',
          description: 'Preparación académica de 6.° Grado en Matemática (ESMATE) y Ciencias Naturales.',
          totalSubtopics: 2,
          totalQuestions: 730,
          color: 'from-blue-600 to-indigo-700',
          badgeBg: 'bg-blue-100',
          badgeText: 'text-blue-800',
          borderColor: 'border-blue-200',
          icon: 'BookOpen',
          institution: 'ASD',
          subtopics: [
            { id: '6_matematica', code: '6.1', title: 'Matemática (6.° Grado)', subjectId: 'asd_6', questionCount: 365 },
            { id: '6_ciencias', code: '6.2', title: 'Ciencias Naturales (6.° Grado)', subjectId: 'asd_6', questionCount: 365 },
          ],
        },
        {
          id: 'asd_7',
          number: 3,
          name: 'Séptimo Grado (7.° Grado)',
          codeRange: '7.1 y 7.2',
          description: 'Preparación académica de 7.° Grado en Matemática (ESMATE) y Ciencias Naturales.',
          totalSubtopics: 2,
          totalQuestions: 730,
          color: 'from-purple-600 to-pink-700',
          badgeBg: 'bg-purple-100',
          badgeText: 'text-purple-800',
          borderColor: 'border-purple-200',
          icon: 'Award',
          institution: 'ASD',
          subtopics: [
            { id: '7_matematica', code: '7.1', title: 'Matemática (7.° Grado)', subjectId: 'asd_7', questionCount: 365 },
            { id: '7_ciencias', code: '7.2', title: 'Ciencias Naturales (7.° Grado)', subjectId: 'asd_7', questionCount: 365 },
          ],
        },
      ],
    };
  }

  if (category === 'AVANZO') {
    return {
      title: 'Prueba Nacional AVANZO 2025 - Ministerio de Educación de El Salvador',
      description: 'Banco oficial estandarizado de 3,000 preguntas de opción múltiple estructurado en las 5 áreas de evaluación para Segundo Año de Bachillerato (600 preguntas por sección).',
      totalQuestions: 3000,
      totalSubtopics: 5,
      subjects: [
        {
          id: 'avanzo_precalculo',
          number: 1,
          name: 'Precálculo',
          codeRange: '4.1.1 al 4.1.5',
          description: 'Álgebra, funciones reales, geometría analítica, trigonometría y estadística descriptiva.',
          totalSubtopics: 1,
          totalQuestions: 600,
          color: 'from-amber-600 to-orange-700',
          badgeBg: 'bg-amber-100',
          badgeText: 'text-amber-800',
          borderColor: 'border-amber-200',
          icon: 'Calculator',
          institution: 'AVANZO',
          subtopics: [{ id: 'avanzo_precalculo', code: '4.1', title: 'Precálculo (Bachillerato)', subjectId: 'avanzo_precalculo', questionCount: 600 }],
        },
        {
          id: 'avanzo_ciudadania',
          number: 2,
          name: 'Ciudadanía y Valores',
          codeRange: '4.2.1 al 4.2.3',
          description: 'Investigación social, desarrollo histórico de El Salvador, Constitución, derechos humanos y convivencia democrática.',
          totalSubtopics: 1,
          totalQuestions: 600,
          color: 'from-rose-600 to-pink-700',
          badgeBg: 'bg-rose-100',
          badgeText: 'text-rose-800',
          borderColor: 'border-rose-200',
          icon: 'Landmark',
          institution: 'AVANZO',
          subtopics: [{ id: 'avanzo_ciudadania', code: '4.2', title: 'Ciudadanía y Valores', subjectId: 'avanzo_ciudadania', questionCount: 600 }],
        },
        {
          id: 'avanzo_ciencias',
          number: 3,
          name: 'Ciencia y Tecnología',
          codeRange: '4.3.1 al 4.3.3',
          description: 'Física, Química y Biología con enfoque CTSA.',
          totalSubtopics: 1,
          totalQuestions: 600,
          color: 'from-teal-600 to-cyan-700',
          badgeBg: 'bg-teal-100',
          badgeText: 'text-teal-800',
          borderColor: 'border-teal-200',
          icon: 'Atom',
          institution: 'AVANZO',
          subtopics: [{ id: 'avanzo_ciencias', code: '4.3', title: 'Ciencia y Tecnología', subjectId: 'avanzo_ciencias', questionCount: 600 }],
        },
        {
          id: 'avanzo_lengua',
          number: 4,
          name: 'Lengua y Literatura',
          codeRange: '4.4.1 al 4.4.4',
          description: 'Texto narrativo, poético, argumentativo, expositivo y literatura salvadoreña.',
          totalSubtopics: 1,
          totalQuestions: 600,
          color: 'from-violet-600 to-purple-700',
          badgeBg: 'bg-violet-100',
          badgeText: 'text-violet-800',
          borderColor: 'border-violet-200',
          icon: 'BookOpen',
          institution: 'AVANZO',
          subtopics: [{ id: 'avanzo_lengua', code: '4.4', title: 'Lengua y Literatura', subjectId: 'avanzo_lengua', questionCount: 600 }],
        },
        {
          id: 'avanzo_ingles',
          number: 5,
          name: 'Inglés',
          codeRange: '4.5.1 al 4.5.3',
          description: 'Comprensión lectora, gramática y comunicación según el Marco MCER (Pre-A1 a B1).',
          totalSubtopics: 1,
          totalQuestions: 600,
          color: 'from-sky-600 to-blue-700',
          badgeBg: 'bg-sky-100',
          badgeText: 'text-sky-800',
          borderColor: 'border-sky-200',
          icon: 'Globe',
          institution: 'AVANZO',
          subtopics: [{ id: 'avanzo_ingles', code: '4.5', title: 'Inglés (Marco MCER)', subjectId: 'avanzo_ingles', questionCount: 600 }],
        },
      ],
    };
  }

  if (category === 'ANSP') {
    return {
      title: 'Academia Nacional de Seguridad Pública (ANSP)',
      description: 'Prueba Cultural Nivel Básico (250 preguntas oficiales)',
      totalQuestions: 250,
      totalSubtopics: 10,
      subjects: [
        {
          id: 'ansp_historia',
          number: 1,
          name: 'Historia de El Salvador',
          codeRange: '1.1 al 1.8',
          description: 'Conquista, Independencia, Conflicto Armado y Acuerdos de Paz.',
          totalSubtopics: 1,
          totalQuestions: 50,
          color: 'from-amber-600 to-red-700',
          badgeBg: 'bg-amber-100',
          badgeText: 'text-amber-800',
          borderColor: 'border-amber-200',
          icon: 'Landmark',
          institution: 'ANSP',
          subtopics: [{ id: 'ansp_historia', code: '1.0', title: 'Historia Nacional', subjectId: 'ansp_historia', questionCount: 50 }],
        },
        {
          id: 'ansp_constitucion',
          number: 6,
          name: 'Constitución de la República y DDHH',
          codeRange: '6.1 al 6.8',
          description: 'Derechos fundamentales, garantías constitucionales y estructura del Estado.',
          totalSubtopics: 1,
          totalQuestions: 27,
          color: 'from-indigo-600 to-blue-800',
          badgeBg: 'bg-indigo-100',
          badgeText: 'text-indigo-800',
          borderColor: 'border-indigo-200',
          icon: 'ShieldCheck',
          institution: 'ANSP',
          subtopics: [{ id: 'ansp_constitucion', code: '6.0', title: 'Derecho Constitucional', subjectId: 'ansp_constitucion', questionCount: 27 }],
        },
        {
          id: 'ansp_matematicas',
          number: 8,
          name: 'Matemáticas Básicas',
          codeRange: '8.1 al 8.5',
          description: 'Ecuaciones, porcentajes, geometría y fracciones.',
          totalSubtopics: 1,
          totalQuestions: 25,
          color: 'from-blue-600 to-indigo-700',
          badgeBg: 'bg-blue-100',
          badgeText: 'text-blue-800',
          borderColor: 'border-blue-200',
          icon: 'Calculator',
          institution: 'ANSP',
          subtopics: [{ id: 'ansp_matematicas', code: '8.0', title: 'Aritmética y Álgebra', subjectId: 'ansp_matematicas', questionCount: 25 }],
        },
      ],
    };
  }

  // UES Fallback
  return {
    title: 'Banco Maestro de Admisión (UES - AVANZO)',
    description: 'Compendio de 7,500 preguntas con opciones de múltiple elección.',
    totalQuestions: 7500,
    totalSubtopics: 25,
    subjects: [
      {
        id: 'matematicas',
        number: 1,
        name: 'Matemáticas',
        codeRange: '1.1 al 1.7',
        description: 'Números reales, álgebra elemental, funciones y trigonometría.',
        totalSubtopics: 7,
        totalQuestions: 2100,
        color: 'from-blue-600 to-indigo-700',
        badgeBg: 'bg-blue-100',
        badgeText: 'text-blue-800',
        borderColor: 'border-blue-200',
        icon: 'Calculator',
        institution: 'UES',
        subtopics: [
          { id: '1.1', code: '1.1', title: 'Números Reales', subjectId: 'matematicas', questionCount: 300, sections: ['SECCIÓN I: CLASIFICACIÓN DE NÚMEROS REALES (1–60)', 'SECCIÓN II: PROPIEDADES (61–110)', 'SECCIÓN III: EXPANSIÓN DECIMAL (111–150)', 'SECCIÓN IV: ORDEN Y COMPARACIÓN (151–190)', 'SECCIÓN V: OPERACIONES (191–240)', 'SECCIÓN VI: INTERVALOS (241–300)'] },
          { id: '1.2', code: '1.2', title: 'La Recta Real', subjectId: 'matematicas', questionCount: 300, sections: ['SECCIÓN I: CONCEPTOS BÁSICOS (1–30)', 'SECCIÓN II: ORDEN Y UBICACIÓN (31–60)', 'SECCIÓN III: DISTANCIA ENTRE PUNTOS (61–120)', 'SECCIÓN IV: PUNTO MEDIO (121–180)', 'SECCIÓN V: DESIGUALDADES (181–300)'] },
        ],
      },
      {
        id: 'lenguaje',
        number: 2,
        name: 'Lenguaje y Literatura',
        codeRange: '2.1 al 2.5',
        description: 'Ortografía, coherencia textual, sintaxis y metodología.',
        totalSubtopics: 5,
        totalQuestions: 1500,
        color: 'from-purple-600 to-pink-700',
        badgeBg: 'bg-purple-100',
        badgeText: 'text-purple-800',
        borderColor: 'border-purple-200',
        icon: 'Feather',
        institution: 'UES',
        subtopics: [
          { id: '2.1', code: '2.1', title: 'Ortografía y Gramática', subjectId: 'lenguaje', questionCount: 300 },
        ],
      },
    ],
  };
}

export function getSubjectNameFromId(id: string, inst: Institution): string {
  if (inst === 'INGLES') {
    const map: Record<string, string> = {
      // Inglés
      ingles_a1: 'Nivel A1 • Breakthrough / Beginner',
      ingles_a2: 'Nivel A2 • Waystage / Elementary',
      ingles_b1: 'Nivel B1 • Threshold / Intermediate',
      ingles_b2: 'Nivel B2 • Vantage / Upper-Intermediate',
      ingles_c1: 'Nivel C1 • Effective Operational Proficiency',
      ingles_c2: 'Nivel C2 • Mastery / Proficiency',
      // Náhuat
      nahuat_a1: 'Náhuat • Nivel A1 (Pewal / Básico)',
      nahuat_a2: 'Náhuat • Nivel A2 (Tikit / Elemental)',
      nahuat_b1: 'Náhuat • Nivel B1 (Tajtaketza / Intermedio)',
      nahuat_b2: 'Náhuat • Nivel B2 (Tamatilis / Intermedio Alto)',
      nahuat_c1: 'Náhuat • Nivel C1 (Wey Tajtaketzani / Avanzado)',
      nahuat_c2: 'Náhuat • Nivel C2 (Senka Nawat / Maestría)',
      // Lenca
      lenca_a1: 'Lenca Potón • Nivel A1 (Básico)',
      lenca_a2: 'Lenca Potón • Nivel A2 (Elemental)',
      lenca_b1: 'Lenca Potón • Nivel B1 (Intermedio)',
      lenca_b2: 'Lenca Potón • Nivel B2 (Intermedio Alto)',
      lenca_c1: 'Lenca Potón • Nivel C1 (Avanzado)',
      lenca_c2: 'Lenca Potón • Nivel C2 (Maestría)',
      // Kakawira
      kakawira_a1: 'Kakawira • Nivel A1 (Básico)',
      kakawira_a2: 'Kakawira • Nivel A2 (Elemental)',
      kakawira_b1: 'Kakawira • Nivel B1 (Intermedio)',
      kakawira_b2: 'Kakawira • Nivel B2 (Intermedio Alto)',
      kakawira_c1: 'Kakawira • Nivel C1 (Avanzado)',
      kakawira_c2: 'Kakawira • Nivel C2 (Maestría)',
      // Alemán
      german_a1: 'Alemán • Nivel A1 (Anfänger)',
      german_a2: 'Alemán • Nivel A2 (Grundlegende Kenntnisse)',
      german_b1: 'Alemán • Nivel B1 (Fortgeschritten)',
      german_b2: 'Alemán • Nivel B2 (Selbständige Sprachverwendung)',
      german_c1: 'Alemán • Nivel C1 (Fachkundige Sprachkenntnisse)',
      german_c2: 'Alemán • Nivel C2 (Annähernd muttersprachliche)',
      // Árabe
      arabic_a1: 'Árabe • Nivel A1 (Mubtadi / Básico)',
      arabic_a2: 'Árabe • Nivel A2 (Ibtidai / Elemental)',
      arabic_b1: 'Árabe • Nivel B1 (Mutawassit / Intermedio)',
      arabic_b2: 'Árabe • Nivel B2 (Fawq al-Mutawassit / Intermedio Alto)',
      arabic_c1: 'Árabe • Nivel C1 (Mutaqaddim / Avanzado)',
      arabic_c2: 'Árabe • Nivel C2 (Itqan / Maestría)',
      // Mandarín
      mandarin_a1: 'Mandarín • Nivel A1 (HSK 1 / Básico)',
      mandarin_a2: 'Mandarín • Nivel A2 (HSK 2 / Elemental)',
      mandarin_b1: 'Mandarín • Nivel B1 (HSK 3 / Intermedio)',
      mandarin_b2: 'Mandarín • Nivel B2 (HSK 4 / Intermedio Alto)',
      mandarin_c1: 'Mandarín • Nivel C1 (HSK 5 / Avanzado)',
      mandarin_c2: 'Mandarín • Nivel C2 (HSK 6 / Maestría)',
    };
    return map[id] || 'Escuela de Idiomas Kuskat';
  }

  if (inst === 'ESCALAFON') {
    const map: Record<string, string> = {
      escalafon_general: 'Formación General Pedagógica y Legislación',
      escalafon_parvularia: 'Educación Parvularia',
      escalafon_basica: 'Educación Básica (I y II Ciclo)',
      escalafon_lenguaje: 'Lenguaje y Literatura',
      escalafon_matematica: 'Matemática',
      escalafon_naturales: 'Ciencias Naturales',
      escalafon_sociales: 'Ciencias Sociales',
      escalafon_ingles: 'Inglés',
      escalafon_fisica: 'Educación Física',
      escalafon_especial: 'Educación Especial',
      escalafon_comerciales: 'Ciencias Comerciales',
    };
    return map[id] || 'Especialidad Escalafón';
  }

  if (inst === 'ENA') {
    const map: Record<string, string> = {
      ena_matematicas: 'Matemáticas',
      ena_quimica: 'Química',
      ena_biologia: 'Biología',
      ena_lenguaje: 'Lenguaje',
    };
    return map[id] || 'Asignatura ENA';
  }

  if (inst === 'AVANZO') {
    const map: Record<string, string> = {
      avanzo_precalculo: 'Precálculo',
      avanzo_ciudadania: 'Ciudadanía y Valores',
      avanzo_ciencias: 'Ciencia y Tecnología',
      avanzo_lengua: 'Lengua y Literatura',
      avanzo_ingles: 'Inglés',
    };
    return map[id] || 'Asignatura AVANZO';
  }

  if (inst === 'ASD') {
    const map: Record<string, string> = {
      asd_5: 'Quinto Grado (5.° Grado)',
      asd_6: 'Sexto Grado (6.° Grado)',
      asd_7: 'Séptimo Grado (7.° Grado)',
      '5_matematica': 'Matemática (5.° Grado)',
      '5_ciencias': 'Ciencias Naturales (5.° Grado)',
      '6_matematica': 'Matemática (6.° Grado)',
      '6_ciencias': 'Ciencias Naturales (6.° Grado)',
      '7_matematica': 'Matemática (7.° Grado)',
      '7_ciencias': 'Ciencias Naturales (7.° Grado)',
    };
    return map[id] || (id.includes('ciencias') ? 'Ciencias Naturales' : 'Matemática');
  }

  if (inst === 'ANSP') {
    const map: Record<string, string> = {
      ansp_historia: 'Historia de El Salvador',
      ansp_geografia: 'Geografía de El Salvador y C.A.',
      ansp_literatura: 'Literatura Salvadoreña',
      ansp_lenguaje: 'Lenguaje y Expresión',
      ansp_economia: 'Realidad Económica y Social',
      ansp_constitucion: 'Constitución de la República y DDHH',
      ansp_legislacion: 'Legislación Salvadoreña',
      ansp_matematicas: 'Matemáticas Básicas',
      ansp_estadistica: 'Estadística y Probabilidad',
      ansp_ofimatica: 'Ofimática e Informática',
    };
    return map[id] || 'Asignatura ANSP';
  }

  if (id.startsWith('1.') || id === 'matematicas') return 'Matemáticas';
  if (id.startsWith('2.') || id === 'lenguaje') return 'Lenguaje';
  if (id.startsWith('3.') || id === 'literatura') return 'Literatura';
  if (id.startsWith('4.') || id === 'sociales') return 'Ciencias Sociales';
  if (id.startsWith('5.') || id === 'naturales') return 'Ciencias Naturales';
  return 'Admisión UES';
}

export function getUesSubjectIdFromCode(code: string): string {
  if (code.startsWith('1.') || code.startsWith('ues-mat')) return 'matematicas';
  if (code.startsWith('2.') || code.startsWith('ues-len')) return 'lenguaje';
  if (code.startsWith('3.') || code.startsWith('ues-lit')) return 'literatura';
  if (code.startsWith('4.') || code.startsWith('ues-soc')) return 'sociales';
  if (code.startsWith('5.') || code.startsWith('ues-fis') || code.startsWith('ues-qui') || code.startsWith('ues-bio'))
    return 'naturales';
  return 'matematicas';
}

export function getUesSubtopicTitleFromCode(code: string): string {
  const map: Record<string, string> = {
    '1.1': 'Números Reales',
    '1.2': 'La Recta Real',
    '1.3': 'Conjuntos e Intervalos',
    '1.4': 'Valor Absoluto',
    '1.5': 'Álgebra Elemental',
    '1.6': 'Geometría y Trigonometría',
    '1.7': 'Funciones y Gráficas',
    '2.1': 'Ortografía y Gramática',
    '2.2': 'Coherencia y Estructura Textual',
    '2.3': 'Sintaxis',
    '2.4': 'Metodología y Escritura Académica',
    '2.5': 'Pragmática',
    '3.1': 'Literatura Universal y Europea',
    '3.2': 'Movimientos del Siglo XIX',
    '3.3': 'Literatura Contemporánea',
    '3.4': 'Literatura Latinoamericana',
    '3.5': 'Literatura Salvadoreña',
    '4.1': 'Historia de El Salvador',
    '4.2': 'Contexto Mundial',
    '4.3': 'Sociedad, Cultura y Población',
    '4.4': 'Derechos y Sociedad Actual',
    '5.1': 'Biología y Seres Vivos',
    '5.2': 'Química General y Reacciones',
    '5.3': 'Física General y Mecánica',
    '5.4': 'Taxonomía y Ecosistemas',
  };
  return map[code] || `Unidad ${code}`;
}

/**
 * Pedagógico: Encuentra un reactivo similar/equivalente para reforzar tras un error.
 */
export function getSimilarQuestion(
  targetQ: Question,
  pool: Question[]
): Question | null {
  if (!pool || pool.length === 0) return null;

  // 1. Misma sección y diferente ID
  const sameSection = pool.filter(
    (q) => q.id !== targetQ.id && q.sectionTitle === targetQ.sectionTitle
  );
  if (sameSection.length > 0) {
    const idx = Math.floor(Math.random() * sameSection.length);
    return sameSection[idx];
  }

  // 2. Mismo subtema y nivel
  const sameSubtopic = pool.filter(
    (q) => q.id !== targetQ.id && q.subtopicId === targetQ.subtopicId && q.level === targetQ.level
  );
  if (sameSubtopic.length > 0) {
    const idx = Math.floor(Math.random() * sameSubtopic.length);
    return sameSubtopic[idx];
  }

  // 3. Misma materia
  const sameSubject = pool.filter(
    (q) => q.id !== targetQ.id && q.subjectId === targetQ.subjectId
  );
  if (sameSubject.length > 0) {
    const idx = Math.floor(Math.random() * sameSubject.length);
    return sameSubject[idx];
  }

  return null;
}

/**
 * Genera un fragmento LaTeX para preguntas agrupadas por sección.
 */
export function generateLatexForQuestions(
  title: string,
  subtopicCode: string,
  questions: Question[],
  includeSolutions = true
): string {
  const sanitize = (text: string) => {
    return text
      .replace(/%/g, '\\%')
      .replace(/#/g, '\\#')
      .replace(/&/g, '\\&')
      .replace(/_/g, '\\_');
  };

  let doc = `% ==============================================================================\n`;
  doc += `% BANCO DE PREGUNTAS KUSKAT: ${subtopicCode} - ${title.toUpperCase()}\n`;
  doc += `% ==============================================================================\n\n`;
  doc += `\\subsection{${subtopicCode} ${title}}\n\n`;

  const sectionMap = new Map<string, Question[]>();
  for (const q of questions) {
    const sec = q.sectionTitle || 'Preguntas de Evaluación';
    if (!sectionMap.has(sec)) sectionMap.set(sec, []);
    sectionMap.get(sec)!.push(q);
  }

  for (const [secTitle, qList] of sectionMap.entries()) {
    doc += `\\subsubsection*{${secTitle}}\n\n`;
    doc += `\\begin{enumerate}[label=\\textbf{\\arabic*.}]\n`;
    if (qList.length > 0) {
      doc += `\\setcounter{enumi}{${qList[0].number - 1}}\n`;
    }

    for (const q of qList) {
      doc += `\\item ${q.statement}\n`;
      doc += `\\begin{enumerate}[label=\\textbf{\\Alph*)}]\n`;
      doc += `\\begin{multicols}{2}\n`;
      for (const opt of q.options) {
        doc += `  \\item ${opt.text}\n`;
      }
      doc += `\\end{multicols}\n`;
      doc += `\\end{enumerate}\n\\vspace{0.15cm}\n`;
    }
    doc += `\\end{enumerate}\n\n`;
  }

  if (includeSolutions && questions.length > 0) {
    doc += `\\vspace{0.4cm}\n`;
    doc += `\\begin{tcolorbox}[colback=blue!3!white,colframe=blue!70!black,title=\\textbf{SOLUCIONARIO -- ${subtopicCode} ${title}}]\n`;
    doc += `\\begin{multicols}{4}\n`;
    doc += `\\begin{enumerate}[label=\\textbf{\\arabic*.}]\n`;
    for (const q of questions) {
      const expl = q.explanation ? ` (${sanitize(q.explanation)})` : '';
      doc += `  \\item \\textbf{${q.correctAnswer}}${expl}\n`;
    }
    doc += `\\end{enumerate}\n`;
    doc += `\\end{multicols}\n`;
    doc += `\\end{tcolorbox}\n\n`;
  }

  return doc;
}

/**
 * Genera un banco aleatorio dinámico desde todo el banco de preguntas (14,340 preguntas)
 * basándose en los filtros jerárquicos de Categoría, Materia, Tema, Sección y Nivel Pedagógico.
 */
export async function fetchDynamicQuizPool(params: {
  category: 'ALL' | Institution;
  subjectId: string; // 'ALL' or specific subject id
  subtopicId: string; // 'ALL' or specific subtopic id
  sectionTitle?: string; // 'ALL' or specific section title
  level?: PedagogicalLevel | 'ALL';
  count: number;
}): Promise<Question[]> {
  const { category, subjectId, subtopicId, sectionTitle, level, count } = params;

  let pool: Question[] = [];

  try {
    // 1. AVANZO (Prueba Nacional Bachillerato)
    if (category === 'AVANZO') {
      if (subtopicId !== 'ALL') {
        pool = await fetchSubtopicQuestions('AVANZO', subtopicId);
      } else if (subjectId !== 'ALL') {
        pool = await fetchSubtopicQuestions('AVANZO', subjectId);
      } else {
        const res = await fetch('/data/avanzo/questions/all.json');
        if (res.ok) {
          const raw = await res.json();
          if (Array.isArray(raw)) {
            pool = raw
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  q.subtopicId || 'avanzo_precalculo',
                  q.subjectId || 'avanzo_precalculo',
                  'AVANZO',
                  getSubjectNameFromId(q.subjectId || 'avanzo_precalculo', 'AVANZO'),
                  q.sectionTitle,
                  raw.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          pool = await fetchSubtopicQuestions('AVANZO', 'avanzo_precalculo');
        }
      }
    }
    // 2. ASD (Jóvenes Talento)
    else if (category === 'ASD') {
      if (subtopicId !== 'ALL') {
        pool = await fetchSubtopicQuestions('ASD', subtopicId);
      } else if (subjectId !== 'ALL') {
        const curriculum = await fetchCurriculum('ASD');
        const subj = curriculum.subjects.find((s) => s.id === subjectId);
        if (subj && subj.subtopics.length > 0) {
          const subPromises = subj.subtopics.map((st) =>
            fetchSubtopicQuestions('ASD', st.id, subj.name, st.title)
          );
          const results = await Promise.all(subPromises);
          pool = results.flat();
        } else {
          pool = await fetchSubtopicQuestions('ASD', '5_matematica');
        }
      } else {
        const res = await fetch('/data/asd/questions/all.json');
        if (res.ok) {
          const raw = await res.json();
          if (Array.isArray(raw)) {
            pool = raw
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  q.subtopicId || 'asd',
                  q.subjectId || 'asd_5',
                  'ASD',
                  getSubjectNameFromId(q.subjectId || 'asd_5', 'ASD'),
                  q.sectionTitle,
                  raw.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          pool = await fetchSubtopicQuestions('ASD', '5_matematica');
        }
      }
    }
    // 3. ENA (Escuela Nacional de Agricultura "Roberto Quiñónez")
    else if (category === 'ENA') {
      if (subtopicId !== 'ALL') {
        pool = await fetchSubtopicQuestions('ENA', subtopicId);
      } else if (subjectId !== 'ALL') {
        pool = await fetchSubtopicQuestions('ENA', subjectId);
      } else {
        const res = await fetch('/data/ena/questions/all.json');
        if (res.ok) {
          const raw = await res.json();
          if (Array.isArray(raw)) {
            pool = raw
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  q.subtopicId || 'ena_matematicas',
                  q.subjectId || 'ena_matematicas',
                  'ENA',
                  getSubjectNameFromId(q.subjectId || 'ena_matematicas', 'ENA'),
                  q.sectionTitle,
                  raw.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          pool = await fetchSubtopicQuestions('ENA', 'ena_matematicas');
        }
      }
    }
    // 4. ESCALAFÓN DOCENTE (Ascenso al Nivel Uno 2026 - MINED)
    else if (category === 'ESCALAFON') {
      if (subtopicId !== 'ALL') {
        pool = await fetchSubtopicQuestions('ESCALAFON', subtopicId);
      } else if (subjectId !== 'ALL') {
        pool = await fetchSubtopicQuestions('ESCALAFON', subjectId);
      } else {
        const res = await fetch('/data/escalafon/questions/all.json');
        if (res.ok) {
          const raw = await res.json();
          if (Array.isArray(raw)) {
            pool = raw
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  q.subtopicId || 'escalafon_general',
                  q.subjectId || 'escalafon_general',
                  'ESCALAFON',
                  getSubjectNameFromId(q.subjectId || 'escalafon_general', 'ESCALAFON'),
                  q.sectionTitle,
                  raw.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          pool = await fetchSubtopicQuestions('ESCALAFON', 'escalafon_general');
        }
      }
    }
    // 5. ANSP
    else if (category === 'ANSP') {
      if (subjectId !== 'ALL') {
        pool = await fetchSubtopicQuestions('ANSP', subjectId);
      } else {
        const res = await fetch('/data/ansp/questions/all.json');
        if (res.ok) {
          const raw = await res.json();
          if (Array.isArray(raw)) {
            pool = raw
              .map((q: any, i: number) =>
                sanitizeQuestion(
                  q,
                  i,
                  q.subtopicId || 'ansp',
                  q.subjectId || 'ansp_general',
                  'ANSP',
                  getSubjectNameFromId(q.subjectId, 'ANSP'),
                  q.sectionTitle,
                  raw.length
                )
              )
              .filter((q): q is Question => q !== null);
          }
        } else {
          pool = await fetchSubtopicQuestions('ANSP', 'ansp_historia');
        }
      }
    }
    // 6. UES
    else if (category === 'UES') {
      if (subtopicId !== 'ALL') {
        pool = await fetchSubtopicQuestions('UES', subtopicId);
      } else if (subjectId !== 'ALL') {
        const curriculum = await fetchCurriculum('UES');
        const subj = curriculum.subjects.find((s) => s.id === subjectId);
        if (subj && subj.subtopics.length > 0) {
          const subPromises = subj.subtopics.map((st) =>
            fetchSubtopicQuestions('UES', st.id, subj.name, st.title)
          );
          const results = await Promise.all(subPromises);
          pool = results.flat();
        } else {
          pool = await fetchSubtopicQuestions('UES', '1.1');
        }
      } else {
        // Todas las materias de UES: Muestrear de subtemas representativos de las materias
        const keySubtopics = ['1.1', '1.5', '2.1', '2.3', '3.1', '3.5', '4.1', '4.2', '5.1', '5.3'];
        const promises = keySubtopics.map((stId) => fetchSubtopicQuestions('UES', stId));
        const results = await Promise.all(promises);
        pool = results.flat();
      }
    }
    // 6. IDIOMAS & INGLÉS INTERNACIONAL (A1-C2)
    else if (category === 'INGLES') {
      if (subtopicId !== 'ALL') {
        pool = await fetchSubtopicQuestions('INGLES', subtopicId);
      } else if (subjectId !== 'ALL') {
        pool = await fetchSubtopicQuestions('INGLES', subjectId);
      } else {
        pool = await fetchSubtopicQuestions('INGLES', 'all');
      }
    }
    // 7. ALL (Mixto: UES & ESCALAFON & AVANZO & ASD & ENA & ANSP & INGLES)
    else {
      if (subjectId !== 'ALL') {
        const isIngles =
          subjectId.startsWith('ingles_') ||
          subjectId.startsWith('nahuat_') ||
          subjectId.startsWith('lenca_') ||
          subjectId.startsWith('kakawira_') ||
          subjectId.startsWith('german_') ||
          subjectId.startsWith('aleman_') ||
          subjectId.startsWith('arabic_') ||
          subjectId.startsWith('arabe_') ||
          subjectId.startsWith('mandarin_') ||
          subjectId.startsWith('chino_');
        const isEscalafon = subjectId.startsWith('escalafon_');
        const isAnsp = subjectId.startsWith('ansp_');
        const isAsd = subjectId.startsWith('asd_') || subjectId.includes('matematica') || subjectId.includes('ciencias');
        const isAvanzo = subjectId.startsWith('avanzo_');
        const isEna = subjectId.startsWith('ena_');
        const inst: Institution = isIngles ? 'INGLES' : isEscalafon ? 'ESCALAFON' : isAnsp ? 'ANSP' : isAsd ? 'ASD' : isAvanzo ? 'AVANZO' : isEna ? 'ENA' : 'UES';
        pool = await fetchSubtopicQuestions(
          inst,
          subtopicId !== 'ALL' ? subtopicId : subjectId
        );
      } else {
        const uesCount = Math.max(1, Math.round(count * 0.22));
        const escalafonCount = Math.max(1, Math.round(count * 0.18));
        const avanzoCount = Math.max(1, Math.round(count * 0.18));
        const asdCount = Math.max(1, Math.round(count * 0.14));
        const enaCount = Math.max(1, Math.round(count * 0.10));
        const inglesCount = Math.max(1, Math.round(count * 0.10));
        const anspCount = Math.max(1, count - uesCount - escalafonCount - avanzoCount - asdCount - enaCount - inglesCount);
        const [uesPool, escalafonPool, avanzoPool, asdPool, enaPool, anspPool, inglesPool] = await Promise.all([
          fetchDynamicQuizPool({ category: 'UES', subjectId: 'ALL', subtopicId: 'ALL', count: uesCount }),
          fetchDynamicQuizPool({ category: 'ESCALAFON', subjectId: 'ALL', subtopicId: 'ALL', count: escalafonCount }),
          fetchDynamicQuizPool({ category: 'AVANZO', subjectId: 'ALL', subtopicId: 'ALL', count: avanzoCount }),
          fetchDynamicQuizPool({ category: 'ASD', subjectId: 'ALL', subtopicId: 'ALL', count: asdCount }),
          fetchDynamicQuizPool({ category: 'ENA', subjectId: 'ALL', subtopicId: 'ALL', count: enaCount }),
          fetchDynamicQuizPool({ category: 'ANSP', subjectId: 'ALL', subtopicId: 'ALL', count: anspCount }),
          fetchDynamicQuizPool({ category: 'INGLES', subjectId: 'ALL', subtopicId: 'ALL', count: inglesCount }),
        ]);
        pool = [...uesPool, ...escalafonPool, ...avanzoPool, ...asdPool, ...enaPool, ...anspPool, ...inglesPool];
      }
    }

    // Filtrar por subtema si no se filtró previamente
    if (subtopicId !== 'ALL' && pool.length > 0) {
      pool = pool.filter((q) => q.subtopicId === subtopicId || q.sectionTitle === subtopicId);
    }

    // Filtrar por sección si está especificada
    if (sectionTitle && sectionTitle !== 'ALL') {
      pool = pool.filter((q) => q.sectionTitle === sectionTitle);
    }

    // Filtrar por nivel pedagógico si se solicita
    if (level && level !== 'ALL') {
      const filteredByLevel = pool.filter((q) => q.level === level);
      if (filteredByLevel.length >= count) {
        pool = filteredByLevel;
      } else if (filteredByLevel.length > 0) {
        pool = filteredByLevel;
      }
    }
  } catch (err) {
    console.warn('[bancoService] Fallback en fetchDynamicQuizPool:', err);
  }

  // Si falló o está vacío, usar SOLO respaldo ESTRICTO por materia e institución
  if (pool.length === 0) {
    pool = getStrictFallbackQuestions(
      category === 'ALL' ? 'UES' : category,
      subjectId !== 'ALL' ? subjectId : undefined
    );
  }

  // Barajado Fisher-Yates
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}
