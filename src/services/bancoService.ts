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
 * Carga la malla curricular oficial para UES o ANSP.
 */
export async function fetchCurriculum(category: 'UES' | 'ANSP' = 'UES'): Promise<CurriculumData> {
  if (category === 'UES' && uesCurriculumCache) return uesCurriculumCache;
  if (category === 'ANSP' && anspCurriculumCache) return anspCurriculumCache;

  const url = category === 'ANSP' ? '/data/ansp/curriculum.json' : '/data/curriculum.json';
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

    return data;
  } catch (error) {
    console.warn(`[bancoService] Fallback currículo ${category}:`, error);
    return getFallbackCurriculum(category);
  }
}

/**
 * Carga ambos currículos y retorna la malla unificada (UES + ANSP).
 */
export async function fetchUnifiedCurriculum(): Promise<{
  allSubjects: SubjectMeta[];
  totalQuestions: number;
  totalSubtopics: number;
}> {
  const [ues, ansp] = await Promise.all([
    fetchCurriculum('UES').catch(() => getFallbackCurriculum('UES')),
    fetchCurriculum('ANSP').catch(() => getFallbackCurriculum('ANSP')),
  ]);

  const allSubjects: SubjectMeta[] = [
    ...ues.subjects.map((s) => ({ ...s, institution: 'UES' as Institution })),
    ...ansp.subjects.map((s) => ({ ...s, institution: 'ANSP' as Institution })),
  ];

  const totalQuestions = (ues.totalQuestions || 7500) + (ansp.totalQuestions || 250);
  const totalSubtopics = (ues.totalSubtopics || 25) + (ansp.totalSubtopics || 10);

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
    if (category === 'ANSP') {
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
function getFallbackCurriculum(category: 'UES' | 'ANSP'): CurriculumData {
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
 * Genera un banco aleatorio dinámico desde todo el banco de preguntas (7,750 preguntas)
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
    // 1. ANSP
    if (category === 'ANSP') {
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
    // 2. UES
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
    // 3. ALL (Mixto: UES & ANSP)
    else {
      if (subjectId !== 'ALL') {
        const isAnsp = subjectId.startsWith('ansp_');
        pool = await fetchSubtopicQuestions(
          isAnsp ? 'ANSP' : 'UES',
          subtopicId !== 'ALL' ? subtopicId : subjectId
        );
      } else {
        const uesCount = Math.max(1, Math.round(count * 0.7));
        const anspCount = Math.max(1, count - uesCount);
        const [uesPool, anspPool] = await Promise.all([
          fetchDynamicQuizPool({ category: 'UES', subjectId: 'ALL', subtopicId: 'ALL', count: uesCount }),
          fetchDynamicQuizPool({ category: 'ANSP', subjectId: 'ALL', subtopicId: 'ALL', count: anspCount }),
        ]);
        pool = [...uesPool, ...anspPool];
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
