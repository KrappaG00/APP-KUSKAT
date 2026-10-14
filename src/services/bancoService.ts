import { CurriculumData, ExamCategory, Institution, Question, SubjectMeta, SubtopicMeta } from '../types';
import { QUESTIONS_DATA } from '../data';

// Caché en memoria para carga instantánea
const questionsCache = new Map<string, Question[]>();
let uesCurriculumCache: CurriculumData | null = null;
let anspCurriculumCache: CurriculumData | null = null;

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
      throw new Error(`Error ${res.status} al cargar currículo de ${category}`);
    }
    const data: CurriculumData = await res.json();

    // Añadir marca de institución en cada materia
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
 * Carga las preguntas de un subtema o materia específica.
 */
export async function fetchSubtopicQuestions(
  category: Institution,
  targetId: string,
  subjectName?: string,
  topicTitle?: string
): Promise<Question[]> {
  const cacheKey = `${category}_${targetId}`;
  if (questionsCache.has(cacheKey)) {
    return questionsCache.get(cacheKey)!;
  }

  let questions: Question[] = [];

  try {
    if (category === 'ANSP') {
      // En ANSP, los archivos están en /data/ansp/questions/{subjectId}.json o all.json
      let url = `/data/ansp/questions/${targetId}.json`;
      if (targetId === 'all') {
        url = '/data/ansp/questions/all.json';
      }

      const res = await fetch(url);
      if (res.ok) {
        const raw = await res.json();
        questions = raw.map((q: any) => ({
          id: q.id || `ansp_${q.number}`,
          number: q.number,
          institution: 'ANSP' as Institution,
          subjectId: q.subjectId || targetId,
          subject: subjectName || getSubjectNameFromId(q.subjectId || targetId, 'ANSP'),
          subtopicId: q.subtopicId || targetId,
          topic: topicTitle || q.sectionTitle || 'Cuestionario ANSP',
          sectionTitle: q.sectionTitle || 'Preguntas de Examen Cultural',
          statement: q.statement,
          options: q.options || [],
          correctAnswer: q.correctAnswer,
          explanation: q.explanation || 'Respuesta correcta oficial de la ANSP.',
        }));
      } else {
        // Intenta cargar all.json si falló el archivo específico
        const allRes = await fetch('/data/ansp/questions/all.json');
        if (allRes.ok) {
          const allRaw = await allRes.json();
          const filtered = targetId === 'all' ? allRaw : allRaw.filter((q: any) => q.subjectId === targetId || q.subtopicId === targetId);
          questions = filtered.map((q: any) => ({
            id: q.id || `ansp_${q.number}`,
            number: q.number,
            institution: 'ANSP' as Institution,
            subjectId: q.subjectId,
            subject: subjectName || getSubjectNameFromId(q.subjectId, 'ANSP'),
            subtopicId: q.subtopicId,
            topic: topicTitle || q.sectionTitle || 'Cuestionario ANSP',
            sectionTitle: q.sectionTitle || 'Preguntas de Examen Cultural',
            statement: q.statement,
            options: q.options || [],
            correctAnswer: q.correctAnswer,
            explanation: q.explanation || 'Respuesta oficial ANSP.',
          }));
        }
      }
    } else {
      // UES: Los archivos están en /data/questions/{subtopicId}.json (ej. 1.1.json, 1.2.json)
      const res = await fetch(`/data/questions/${targetId}.json`);
      if (res.ok) {
        const raw = await res.json();
        questions = raw.map((q: any) => ({
          id: q.id || `ues_${targetId}_q${q.number}`,
          number: q.number,
          institution: 'UES' as Institution,
          subjectId: q.subjectId || getUesSubjectIdFromCode(targetId),
          subject: subjectName || getSubjectNameFromId(q.subjectId || targetId, 'UES'),
          subtopicId: q.subtopicId || targetId,
          topic: topicTitle || getUesSubtopicTitleFromCode(targetId),
          sectionTitle: q.sectionTitle || `Unidad ${targetId}`,
          statement: q.statement,
          options: q.options || [],
          correctAnswer: q.correctAnswer,
          explanation: q.explanation || 'Justificación pedagógica UES.',
        }));
      }
    }
  } catch (err) {
    console.warn(`[bancoService] Fallback al cargar preguntas ${category}/${targetId}:`, err);
  }

  // Si falló el fetch o devolvió vacío, usar el fallback correspondiente
  if (questions.length === 0) {
    const fallback = QUESTIONS_DATA.filter((q) => q.institution === category);
    questions = fallback;
  }

  questionsCache.set(cacheKey, questions);
  return questions;
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
        id: 'ciencias_naturales_1',
        number: 2,
        name: 'Ciencias Naturales: Física y Química',
        codeRange: '2.1 al 2.5',
        description: 'Cinemática, dinámica, termodinámica, estructura atómica y estequiometría.',
        totalSubtopics: 5,
        totalQuestions: 1500,
        color: 'from-emerald-600 to-teal-700',
        badgeBg: 'bg-emerald-100',
        badgeText: 'text-emerald-800',
        borderColor: 'border-emerald-200',
        icon: 'Atom',
        institution: 'UES',
        subtopics: [
          { id: '2.1', code: '2.1', title: 'Mecánica Clásica y Cinemática', subjectId: 'ciencias_naturales_1', questionCount: 300 },
        ],
      },
      {
        id: 'ciencias_sociales',
        number: 4,
        name: 'Ciencias Sociales y Realidad Nacional',
        codeRange: '4.1 al 4.5',
        description: 'Historia salvadoreña contemporánea, acuerdos de paz y geografía humana.',
        totalSubtopics: 5,
        totalQuestions: 1500,
        color: 'from-amber-600 to-orange-700',
        badgeBg: 'bg-amber-100',
        badgeText: 'text-amber-800',
        borderColor: 'border-amber-200',
        icon: 'Globe',
        institution: 'UES',
        subtopics: [
          { id: '4.1', code: '4.1', title: 'Historia Política de El Salvador', subjectId: 'ciencias_sociales', questionCount: 300 },
        ],
      },
      {
        id: 'lenguaje',
        number: 5,
        name: 'Lenguaje y Literatura',
        codeRange: '5.1 al 5.4',
        description: 'Comprensión lectora, gramática normativa, ortografía y literatura hispanoamericana.',
        totalSubtopics: 4,
        totalQuestions: 1200,
        color: 'from-purple-600 to-pink-700',
        badgeBg: 'bg-purple-100',
        badgeText: 'text-purple-800',
        borderColor: 'border-purple-200',
        icon: 'Feather',
        institution: 'UES',
        subtopics: [
          { id: '5.1', code: '5.1', title: 'Gramática y Sintaxis', subjectId: 'lenguaje', questionCount: 300 },
        ],
      },
    ],
  };
}

function getSubjectNameFromId(id: string, inst: Institution): string {
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
  if (id.startsWith('2.') || id === 'ciencias_naturales_1') return 'Física y Química';
  if (id.startsWith('3.') || id === 'ciencias_naturales_2') return 'Biología y Geología';
  if (id.startsWith('4.') || id === 'ciencias_sociales') return 'Ciencias Sociales';
  if (id.startsWith('5.') || id === 'lenguaje') return 'Lenguaje y Literatura';
  return 'Admisión UES';
}

function getUesSubjectIdFromCode(code: string): string {
  if (code.startsWith('1.')) return 'matematicas';
  if (code.startsWith('2.')) return 'ciencias_naturales_1';
  if (code.startsWith('3.')) return 'ciencias_naturales_2';
  if (code.startsWith('4.')) return 'ciencias_sociales';
  if (code.startsWith('5.')) return 'lenguaje';
  return 'matematicas';
}

function getUesSubtopicTitleFromCode(code: string): string {
  const map: Record<string, string> = {
    '1.1': 'Números Reales',
    '1.2': 'La Recta Real',
    '1.3': 'Conjuntos e Intervalos',
    '1.4': 'Valor Absoluto',
    '1.5': 'Álgebra Elemental',
    '1.6': 'Geometría y Trigonometría',
    '1.7': 'Funciones y Gráficas',
    '2.1': 'Cinemática y Dinámica',
    '2.2': 'Trabajo y Energía',
    '2.3': 'Termodinámica y Fluidos',
    '2.4': 'Estructura Atómica y Tabla Periódica',
    '2.5': 'Reacciones Químicas y Estequiometría',
    '3.1': 'Biología Celular y Metabolismo',
    '3.2': 'Genética y Herencia',
    '3.3': 'Evolución y Biodiversidad',
    '3.4': 'Ecología y Medio Ambiente',
    '4.1': 'Historia de El Salvador Siglo XX',
    '4.2': 'Conflicto Armado y Acuerdos de Paz',
    '4.3': 'Geografía de El Salvador',
    '4.4': 'Democracia y Derechos Humanos',
    '4.5': 'Economía y Globalización',
    '5.1': 'Gramática y Ortografía',
    '5.2': 'Comprensión Lectora y Tipología Textual',
    '5.3': 'Literatura Salvadoreña y Centroamericana',
    '5.4': 'Figuras Literarias y Análisis Textual',
  };
  return map[code] || `Unidad ${code}`;
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
  let doc = `% ==============================================================================\n`;
  doc += `% BANCO DE PREGUNTAS KUSKAT: ${subtopicCode} - ${title.toUpperCase()}\n`;
  doc += `% ==============================================================================\n\n`;
  doc += `\\subsection{${subtopicCode} ${title}}\n\n`;

  // Agrupar por sección
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
      const expl = q.explanation ? ` (${q.explanation})` : '';
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
 * basándose en los filtros jerárquicos de Categoría, Materia, Tema y Sección.
 */
export async function fetchDynamicQuizPool(params: {
  category: 'ALL' | Institution;
  subjectId: string; // 'ALL' or specific subject id
  subtopicId: string; // 'ALL' or specific subtopic id
  sectionTitle?: string; // 'ALL' or specific section title
  count: number;
}): Promise<Question[]> {
  const { category, subjectId, subtopicId, sectionTitle, count } = params;

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
          pool = raw.map((q: any) => ({
            id: q.id || `ansp_${q.number}`,
            number: q.number,
            institution: 'ANSP' as Institution,
            subjectId: q.subjectId,
            subject: getSubjectNameFromId(q.subjectId, 'ANSP'),
            subtopicId: q.subtopicId,
            topic: q.sectionTitle || 'Cuestionario ANSP',
            sectionTitle: q.sectionTitle || 'Preguntas de Examen Cultural',
            statement: q.statement,
            options: q.options || [],
            correctAnswer: q.correctAnswer,
            explanation: q.explanation || 'Respuesta oficial ANSP.',
          }));
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
          const subPromises = subj.subtopics.map((st) => fetchSubtopicQuestions('UES', st.id, subj.name, st.title));
          const results = await Promise.all(subPromises);
          pool = results.flat();
        } else {
          pool = await fetchSubtopicQuestions('UES', '1.1');
        }
      } else {
        // Todas las materias de UES: Muestrear de subtemas representativos de las 5 materias
        const keySubtopics = ['1.1', '1.5', '2.1', '2.4', '3.1', '4.1', '4.2', '5.1', '5.2'];
        const promises = keySubtopics.map((stId) => fetchSubtopicQuestions('UES', stId));
        const results = await Promise.all(promises);
        pool = results.flat();
      }
    }
    // 3. ALL (Mixto: UES & ANSP)
    else {
      if (subjectId !== 'ALL') {
        const isAnsp = subjectId.startsWith('ansp_');
        pool = await fetchSubtopicQuestions(isAnsp ? 'ANSP' : 'UES', subtopicId !== 'ALL' ? subtopicId : subjectId);
      } else {
        // Ambas instituciones combinadas proporcionalmente
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
  } catch (err) {
    console.warn('[bancoService] Fallback en fetchDynamicQuizPool:', err);
  }

  // Si falló o está vacío, usar QUESTIONS_DATA
  if (pool.length === 0) {
    let fallback = QUESTIONS_DATA;
    if (category !== 'ALL') {
      fallback = fallback.filter((q) => q.institution === category);
    }
    pool = fallback;
  }

  // Barajado Fisher-Yates
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}
