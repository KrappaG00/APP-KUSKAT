import React, { useState, useEffect, useMemo } from 'react';
import {
  FolderTree,
  BookOpen,
  GraduationCap,
  Shield,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Copy,
  Check,
  Info,
  CheckCircle2,
  FileCode,
  Award,
  Layers,
  Sparkles,
  Calculator,
  Atom,
  Globe,
  Feather,
  Landmark,
  Scale,
  TrendingUp,
  BarChart3,
  Laptop,
  ShieldCheck,
  RotateCcw,
  SlidersHorizontal,
  X,
  Play,
  Sprout,
} from 'lucide-react';
import katex from 'katex';
import { Institution, Question, SubjectMeta, SubtopicMeta, PedagogicalLevel } from '../types';
import { fetchUnifiedCurriculum, fetchSubtopicQuestions } from '../services/bancoService';
import { QUESTIONS_DATA } from '../data';
import { AdBanner } from './AdBanner';

// Componente KaTeX Math integrado
interface KaTeXMathProps {
  text: string;
  className?: string;
}

export const MathText: React.FC<KaTeXMathProps> = ({ text, className = '' }) => {
  const renderedHtml = useMemo(() => {
    if (!text) return '';

    // Humanizar símbolos de grados, unidades y potencias
    let processed = text
      .replace(/(\d+)\s*\^\\?\{?circ\}?/g, '$1°')
      .replace(/\\circ\b/g, '°')
      .replace(/\\u0007pprox/g, '\\approx')
      .replace(/\\u000bec/g, '\\vec')
      .replace(/\bcm\^2\b/g, 'cm²')
      .replace(/\bm\^2\b/g, 'm²')
      .replace(/\bkm\^2\b/g, 'km²');

    // Auto-detecta si el texto completo es una fórmula matemática sin delimitadores
    const hasDelimiters =
      processed.includes('$') || processed.includes('\\(') || processed.includes('\\[');
    if (
      !hasDelimiters &&
      /^\s*[-+]?\\(?:frac|sqrt|pi|emptyset|mathbb|theta|infty|pm|times|approx|alpha|beta|lambda|Delta|leq|geq|neq)/.test(
        processed
      )
    ) {
      try {
        return katex.renderToString(processed.trim(), {
          displayMode: false,
          throwOnError: false,
          trust: false,
          output: 'htmlAndMathml',
        });
      } catch {
        // Fallback
      }
    }

    const regex = /(\$\$[\s\S]*?\$\$)|(\$[^\$\n]+?\$)|(\\\[[\s\S]*?\\\])|(\\\([\s\S]*?\\\\?\))/g;
    const parts: string[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(processed)) !== null) {
      if (match.index > lastIndex) {
        parts.push(escapeHtml(processed.slice(lastIndex, match.index)));
      }

      const rawMatch = match[0];
      let mathCode = '';
      let isBlock = false;

      if (rawMatch.startsWith('$$') && rawMatch.endsWith('$$')) {
        mathCode = rawMatch.slice(2, -2).trim();
        isBlock = true;
      } else if (rawMatch.startsWith('$') && rawMatch.endsWith('$')) {
        mathCode = rawMatch.slice(1, -1).trim();
        isBlock = false;
      } else if (rawMatch.startsWith('\\[') && rawMatch.endsWith('\\]')) {
        mathCode = rawMatch.slice(2, -2).trim();
        isBlock = true;
      } else if (rawMatch.startsWith('\\(')) {
        mathCode = rawMatch.slice(2).replace(/\\*\)$/, '').trim();
        isBlock = false;
      }

      try {
        const html = katex.renderToString(mathCode, {
          displayMode: isBlock,
          throwOnError: false,
          trust: false,
          output: 'htmlAndMathml',
        });
        parts.push(html);
      } catch {
        parts.push(escapeHtml(rawMatch));
      }

      lastIndex = match.index + rawMatch.length;
    }

    if (lastIndex < processed.length) {
      parts.push(escapeHtml(processed.slice(lastIndex)));
    }

    return parts.join('');
  }, [text]);

  return (
    <span
      className={`inline-block max-w-full overflow-x-auto align-middle scrollbar-none touch-scroll ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface CategoryHierarchyViewerProps {
  onStartPracticeWithQuestions?: (questions: Question[]) => void;
  onExportLatexWithQuestions?: (questions: Question[], title: string) => void;
  showToast: (msg: string) => void;
}

export const CategoryHierarchyViewer: React.FC<CategoryHierarchyViewerProps> = ({
  onStartPracticeWithQuestions,
  onExportLatexWithQuestions,
  showToast,
}) => {
  // Estado de la Malla y Currículo
  const [subjects, setSubjects] = useState<SubjectMeta[]>([]);
  const [loadingCurriculum, setLoadingCurriculum] = useState<boolean>(true);

  // Estados de Selección Jerárquica
  const [selectedInst, setSelectedInst] = useState<'ALL' | Institution>('ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ALL');
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>('ALL');
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string>('ALL');

  // Filtros de búsqueda y controles de menú
  const [menuSearchQuery, setMenuSearchQuery] = useState<string>('');
  const [questionSearchQuery, setQuestionSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | PedagogicalLevel>('ALL');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Preguntas cargadas y estado de interactividad
  const [loadedQuestions, setLoadedQuestions] = useState<Question[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState<boolean>(false);
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<string, string>>({});
  const [visibleSolutions, setVisibleSolutions] = useState<Record<string, boolean>>({});
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [copiedQuestionId, setCopiedQuestionId] = useState<string | null>(null);

  // Paginación de preguntas por sección
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAllInPage, setShowAllInPage] = useState<boolean>(false);
  const QUESTIONS_PER_PAGE = 25;

  // Carga inicial del currículo unificado (UES + ANSP)
  useEffect(() => {
    let isMounted = true;
    setLoadingCurriculum(true);

    fetchUnifiedCurriculum()
      .then((data) => {
        if (isMounted) {
          setSubjects(data.allSubjects);
          setLoadingCurriculum(false);
        }
      })
      .catch((err) => {
        console.error('Error cargando currículo unificado:', err);
        if (isMounted) setLoadingCurriculum(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Cargar preguntas según la selección activa
  useEffect(() => {
    let isMounted = true;
    setLoadingQuestions(true);
    setCurrentPage(1);

    const loadQuestions = async () => {
      try {
        let pool: Question[] = [];

        // 1. Si se eligió un subtema específico
        if (selectedSubtopicId !== 'ALL') {
          const currentSubj = subjects.find((s) => s.id === selectedSubjectId);
          const inst: Institution = currentSubj?.institution || (selectedInst === 'ALL' ? 'UES' : selectedInst);
          const currentSub = currentSubj?.subtopics.find((st) => st.id === selectedSubtopicId);

          const qList = await fetchSubtopicQuestions(
            inst,
            selectedSubtopicId,
            currentSubj?.name,
            currentSub?.title
          );
          pool = qList;
        }
        // 2. Si se eligió una materia específica
        else if (selectedSubjectId !== 'ALL') {
          const currentSubj = subjects.find((s) => s.id === selectedSubjectId);
          if (currentSubj) {
            const inst: Institution = currentSubj.institution || (selectedInst === 'ALL' ? 'UES' : selectedInst);

            if (inst === 'ANSP') {
              const qList = await fetchSubtopicQuestions(inst, currentSubj.id, currentSubj.name);
              pool = qList;
            } else {
              // UES: Cargar los subtemas de esta materia
              const subPromises = currentSubj.subtopics.map((st) =>
                fetchSubtopicQuestions(inst, st.id, currentSubj.name, st.title)
              );
              const results = await Promise.all(subPromises);
              pool = results.flat();
            }
          }
        }
        // 3. Si se eligió ASD completa
        else if (selectedInst === 'ASD') {
          const res = await fetch('/data/asd/questions/all.json');
          if (res.ok) {
            const raw = await res.json();
            if (Array.isArray(raw)) {
              pool = raw;
            }
          }
          if (pool.length === 0) {
            pool = await fetchSubtopicQuestions('ASD', '5_matematica', 'Matemática', 'Divisibilidad');
          }
        }
        // 4. Si se eligió ENA completa
        else if (selectedInst === 'ENA') {
          const res = await fetch('/data/ena/questions/all.json');
          if (res.ok) {
            const raw = await res.json();
            if (Array.isArray(raw)) {
              pool = raw;
            }
          }
          if (pool.length === 0) {
            pool = await fetchSubtopicQuestions('ENA', 'ena_matematicas', 'Matemáticas', 'Matemáticas Agrarias');
          }
        }
        // 5. Si se eligió AVANZO completa
        else if (selectedInst === 'AVANZO') {
          const res = await fetch('/data/avanzo/questions/all.json');
          if (res.ok) {
            const raw = await res.json();
            if (Array.isArray(raw)) {
              pool = raw;
            }
          }
          if (pool.length === 0) {
            pool = await fetchSubtopicQuestions('AVANZO', 'avanzo_precalculo', 'Precálculo', 'Precálculo');
          }
        }
        // 6. Si se eligió ESCALAFON completa
        else if (selectedInst === 'ESCALAFON') {
          const res = await fetch('/data/escalafon/questions/all.json');
          if (res.ok) {
            const raw = await res.json();
            if (Array.isArray(raw)) {
              pool = raw;
            }
          }
          if (pool.length === 0) {
            pool = await fetchSubtopicQuestions('ESCALAFON', 'escalafon_general', 'Formación General Pedagógica y Legislación', 'Formación General');
          }
        }
        // 7. Si se eligió ANSP completa
        else if (selectedInst === 'ANSP') {
          const anspSubjs = subjects.filter((s) => s.institution === 'ANSP');
          const promises = anspSubjs.map((s) =>
            fetchSubtopicQuestions('ANSP', s.id, s.name)
          );
          const results = await Promise.all(promises);
          pool = results.flat();
        }
        // 8. Si se eligió UES completa
        else if (selectedInst === 'UES') {
          // Cargamos la primera materia como vista principal para evitar sobrecargar 7500 reactivos simultáneos
          const uesMat = subjects.find((s) => s.id === 'matematicas') || subjects.find((s) => s.institution === 'UES');
          if (uesMat) {
            const subPromises = uesMat.subtopics.slice(0, 3).map((st) =>
              fetchSubtopicQuestions('UES', st.id, uesMat.name, st.title)
            );
            const results = await Promise.all(subPromises);
            pool = results.flat();
          } else {
            pool = QUESTIONS_DATA.filter((q) => q.institution === 'UES');
          }
        }
        // 9. "ALL" (Todas las Categorías)
        else {
          // Cargamos preguntas representativas combinadas de UES, ANSP, ASD, AVANZO, ENA y ESCALAFON
          const [uesPool, anspPool, asdPool, avanzoPool, enaPool, escalafonPool] = await Promise.all([
            fetchSubtopicQuestions('UES', '1.1', 'Matemáticas', 'Números Reales').catch(() => []),
            fetchSubtopicQuestions('ANSP', 'ansp_historia', 'Historia de El Salvador').catch(() => []),
            fetchSubtopicQuestions('ASD', '5_matematica', 'Matemática', 'Divisibilidad').catch(() => []),
            fetchSubtopicQuestions('AVANZO', 'avanzo_precalculo', 'Precálculo', 'Precálculo').catch(() => []),
            fetchSubtopicQuestions('ENA', 'ena_matematicas', 'Matemáticas', 'Matemáticas Agrarias').catch(() => []),
            fetchSubtopicQuestions('ESCALAFON', 'escalafon_general', 'Formación General Pedagógica y Legislación', 'Formación General').catch(() => []),
          ]);
          pool = [...uesPool, ...anspPool, ...asdPool, ...avanzoPool, ...enaPool, ...escalafonPool];
        }

        if (pool.length === 0) {
          pool = QUESTIONS_DATA;
        }

        if (isMounted) {
          setLoadedQuestions(pool);
          setLoadingQuestions(false);
          setCollapsedSections({});
        }
      } catch (err) {
        console.warn('Error fetching questions:', err);
        if (isMounted) {
          setLoadedQuestions(QUESTIONS_DATA);
          setLoadingQuestions(false);
          setCollapsedSections({});
        }
      }
    };

    loadQuestions();

    return () => {
      isMounted = false;
    };
  }, [selectedInst, selectedSubjectId, selectedSubtopicId, subjects]);

  // Filtrar materias por institución activa y búsqueda
  const filteredSubjects = useMemo(() => {
    return subjects.filter((s) => {
      const matchInst = selectedInst === 'ALL' || s.institution === selectedInst;
      const query = menuSearchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.subtopics.some((st) => st.title.toLowerCase().includes(query));
      return matchInst && matchQuery;
    });
  }, [subjects, selectedInst, menuSearchQuery]);

  // Materia actualmente seleccionada
  const activeSubject = useMemo(() => {
    if (selectedSubjectId === 'ALL') return null;
    return subjects.find((s) => s.id === selectedSubjectId) || null;
  }, [subjects, selectedSubjectId]);

  // Subtemas de la materia seleccionada
  const availableSubtopics = useMemo(() => {
    if (!activeSubject) return [];
    return activeSubject.subtopics;
  }, [activeSubject]);

  // Subtema actualmente seleccionado
  const activeSubtopic = useMemo(() => {
    if (selectedSubtopicId === 'ALL' || !activeSubject) return null;
    return activeSubject.subtopics.find((st) => st.id === selectedSubtopicId) || null;
  }, [activeSubject, selectedSubtopicId]);

  // Secciones disponibles
  const availableSections = useMemo(() => {
    const secSet = new Set<string>();

    if (activeSubtopic && activeSubtopic.sections && activeSubtopic.sections.length > 0) {
      activeSubtopic.sections.forEach((sec) => secSet.add(sec));
    } else {
      loadedQuestions.forEach((q) => {
        if (q.sectionTitle) secSet.add(q.sectionTitle);
      });
    }

    return Array.from(secSet);
  }, [activeSubtopic, loadedQuestions]);

  // Preguntas filtradas por sección y por búsqueda de reactivos
  const displayedQuestions = useMemo(() => {
    return loadedQuestions.filter((q) => {
      // Filtro por institución
      if (selectedInst !== 'ALL' && q.institution !== selectedInst) return false;

      // Filtro por sección
      if (selectedSectionTitle !== 'ALL' && q.sectionTitle !== selectedSectionTitle) {
        return false;
      }

      // Filtro por subtema
      if (selectedSubtopicId !== 'ALL' && q.subtopicId !== selectedSubtopicId) {
        // En ANSP puede matchear por sectionTitle
        if (q.sectionTitle !== activeSubtopic?.title && q.subtopicId !== selectedSubtopicId) {
          return false;
        }
      }

      // Búsqueda textual
      if (questionSearchQuery.trim()) {
        const query = questionSearchQuery.toLowerCase().trim();
        const match =
          q.statement.toLowerCase().includes(query) ||
          q.topic.toLowerCase().includes(query) ||
          q.subject.toLowerCase().includes(query) ||
          (q.sectionTitle && q.sectionTitle.toLowerCase().includes(query)) ||
          q.options.some((opt) => opt.text.toLowerCase().includes(query));
        if (!match) return false;
      }

      // Filtro por nivel pedagógico
      if (selectedLevel !== 'ALL' && q.level !== selectedLevel) {
        return false;
      }

      return true;
    });
  }, [loadedQuestions, selectedInst, selectedSectionTitle, selectedSubtopicId, activeSubtopic, questionSearchQuery, selectedLevel]);

  // Agrupación Jerárquica: Tipo -> Materia -> Tema -> Sección
  const groupedHierarchy = useMemo(() => {
    const groups: {
      institution: Institution;
      subjects: {
        subjectName: string;
        topics: {
          topicName: string;
          sections: {
            sectionTitle: string;
            questions: Question[];
          }[];
        }[];
      }[];
    }[] = [];

    // 1. Agrupar por Institución (UES / AVANZO / ASD / ENA / ESCALAFON / ANSP / INGLES)
    const instBuckets: Record<Institution, Question[]> = {
      UES: [],
      AVANZO: [],
      ASD: [],
      ENA: [],
      ESCALAFON: [],
      ANSP: [],
      INGLES: [],
    };

    displayedQuestions.forEach((q) => {
      const inst = q.institution || 'UES';
      if (instBuckets[inst]) {
        instBuckets[inst].push(q);
      }
    });

    (['UES', 'AVANZO', 'ASD', 'ENA', 'ESCALAFON', 'ANSP', 'INGLES'] as Institution[]).forEach((inst) => {
      const qList = instBuckets[inst];
      if (qList.length === 0) return;

      // 2. Agrupar por Materia
      const subjectMap = new Map<string, Question[]>();
      qList.forEach((q) => {
        const sName = q.subject || 'General';
        if (!subjectMap.has(sName)) subjectMap.set(sName, []);
        subjectMap.get(sName)!.push(q);
      });

      const subjectsArr: {
        subjectName: string;
        topics: {
          topicName: string;
          sections: {
            sectionTitle: string;
            questions: Question[];
          }[];
        }[];
      }[] = [];

      for (const [subjName, sQuestions] of subjectMap.entries()) {
        // 3. Agrupar por Tema
        const topicMap = new Map<string, Question[]>();
        sQuestions.forEach((q) => {
          const tName = q.topic || 'General';
          if (!topicMap.has(tName)) topicMap.set(tName, []);
          topicMap.get(tName)!.push(q);
        });

        const topicsArr: {
          topicName: string;
          sections: {
            sectionTitle: string;
            questions: Question[];
          }[];
        }[] = [];

        for (const [tName, tQuestions] of topicMap.entries()) {
          // 4. Agrupar por Sección
          const sectionMap = new Map<string, Question[]>();
          tQuestions.forEach((q) => {
            const secName = q.sectionTitle || 'Cuestionario General';
            if (!sectionMap.has(secName)) sectionMap.set(secName, []);
            sectionMap.get(secName)!.push(q);
          });

          const sectionsArr: {
            sectionTitle: string;
            questions: Question[];
          }[] = [];

          for (const [secTitle, secQuestions] of sectionMap.entries()) {
            sectionsArr.push({
              sectionTitle: secTitle,
              questions: secQuestions,
            });
          }

          topicsArr.push({
            topicName: tName,
            sections: sectionsArr,
          });
        }

        subjectsArr.push({
          subjectName: subjName,
          topics: topicsArr,
        });
      }

      groups.push({
        institution: inst,
        subjects: subjectsArr,
      });
    });

    return groups;
  }, [displayedQuestions]);

  // Manejador para restablecer todos los filtros (Ver todas las categorías)
  const handleSelectAllCategories = () => {
    setSelectedInst('ALL');
    setSelectedSubjectId('ALL');
    setSelectedSubtopicId('ALL');
    setSelectedSectionTitle('ALL');
    setSelectedLevel('ALL');
    setMenuSearchQuery('');
    setQuestionSearchQuery('');
    showToast('Mostrando todas las categorías (UES, ESCALAFÓN, AVANZO, ASD, ENA & ANSP)');
  };

  // Toggle colapsar/expandir sección (por defecto cerradas)
  const toggleCollapseSection = (secKey: string) => {
    setCollapsedSections((prev) => {
      const currentlyCollapsed = prev[secKey] ?? true;
      return {
        ...prev,
        [secKey]: !currentlyCollapsed,
      };
    });
  };

  // Expandir todas las secciones
  const handleExpandAll = () => {
    const newCollapsed: Record<string, boolean> = {};
    groupedHierarchy.forEach((instGroup) => {
      instGroup.subjects.forEach((subj) => {
        subj.topics.forEach((top) => {
          top.sections.forEach((sec) => {
            newCollapsed[`${instGroup.institution}_${subj.subjectName}_${sec.sectionTitle}`] = false;
          });
        });
      });
    });
    setCollapsedSections(newCollapsed);
    showToast('Todas las secciones expandidas');
  };

  // Colapsar todas las secciones
  const handleCollapseAll = () => {
    setCollapsedSections({});
    showToast('Todas las secciones colapsadas');
  };

  // Copiar pregunta al portapapeles
  const handleCopySingleQuestion = (q: Question) => {
    let str = `[${q.institution} - ${q.subject}] ${q.topic} - Pregunta #${q.number}:\n${q.statement}\n\n`;
    q.options.forEach((opt) => {
      str += `${opt.key}) ${opt.text}\n`;
    });
    str += `\nRespuesta Correcta: ${q.correctAnswer}\nExplicación: ${q.explanation}\n`;
    navigator.clipboard.writeText(str);
    setCopiedQuestionId(q.id);
    showToast(`Pregunta #${q.number} copiada.`);
    setTimeout(() => setCopiedQuestionId(null), 2000);
  };

  // Copiar todas las preguntas de una sección
  const handleCopySection = (secTitle: string, questions: Question[]) => {
    let text = `% BANCO KUSKAT - ${secTitle}\n\n`;
    questions.forEach((q) => {
      text += `Pregunta #${q.number}: ${q.statement}\n`;
      q.options.forEach((opt) => {
        text += `  ${opt.key}) ${opt.text}\n`;
      });
      text += `Respuesta Correcta: ${q.correctAnswer}\n\n`;
    });
    navigator.clipboard.writeText(text);
    showToast(`Sección "${secTitle}" copiada (${questions.length} preguntas).`);
  };

  // Ícono representativo por materia
  const getSubjectIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-4 h-4" />;
      case 'Atom':
        return <Atom className="w-4 h-4" />;
      case 'Globe':
        return <Globe className="w-4 h-4" />;
      case 'Feather':
        return <Feather className="w-4 h-4" />;
      case 'Landmark':
        return <Landmark className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Scale':
        return <Scale className="w-4 h-4" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4" />;
      case 'Laptop':
        return <Laptop className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* ==================================================================== */}
      {/* 1. ENCABEZADO Y RESUMEN GENERAL DE CATEGORÍAS */}
      {/* ==================================================================== */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
            <FolderTree className="w-3.5 h-3.5 text-blue-400" />
            <span>Malla Curricular & Navegador Maestro de Categorías</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-black tracking-tight">
            Menú de Preguntas por Sección, Tema, Materia y Tipo
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 w-full text-justify leading-relaxed">
            Explora las <strong className="text-white">17,640 preguntas oficiales</strong> organizadas
            jerárquicamente: selecciona entre <strong className="text-white">UES</strong> (Admisión Universitaria),{' '}
            <strong className="text-white">ESCALAFÓN DOCENTE</strong> (Ascenso al Nivel Uno 2026 MINED),{' '}
            <strong className="text-white">AVANZO</strong> (Prueba Nacional Bachillerato),{' '}
            <strong className="text-white">ASD</strong> (Jóvenes Talento El Salvador),{' '}
            <strong className="text-white">ENA</strong> (Escuela Nacional de Agricultura "Roberto Quiñónez") y{' '}
            <strong className="text-white">ANSP</strong> (Policía Nacional Civil), filtra por especialidad, grado, materia académica,
            unidad temática o desglose por sección.
          </p>

          {/* Estadísticas Clave */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2 sm:gap-3 text-xs">
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Total Reactivos</span>
              <span className="text-lg font-black text-white">17,640</span>
            </div>
            <div className="bg-blue-600/20 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-blue-400/20">
              <span className="text-[10px] text-blue-300 uppercase tracking-wider block font-bold">Tipo UES</span>
              <span className="text-lg font-black text-blue-200">7,500</span>
            </div>
            <div className="bg-purple-600/20 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-purple-400/20">
              <span className="text-[10px] text-purple-300 uppercase tracking-wider block font-bold">Escalafón</span>
              <span className="text-lg font-black text-purple-200">3,300</span>
            </div>
            <div className="bg-amber-600/20 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-amber-400/20">
              <span className="text-[10px] text-amber-300 uppercase tracking-wider block font-bold">Tipo AVANZO</span>
              <span className="text-lg font-black text-amber-200">3,000</span>
            </div>
            <div className="bg-emerald-600/20 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-emerald-400/20">
              <span className="text-[10px] text-emerald-300 uppercase tracking-wider block font-bold">Tipo ASD</span>
              <span className="text-lg font-black text-emerald-200">2,190</span>
            </div>
            <div className="bg-teal-600/20 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-teal-400/20">
              <span className="text-[10px] text-teal-300 uppercase tracking-wider block font-bold">Tipo ENA</span>
              <span className="text-lg font-black text-teal-200">1,400</span>
            </div>
            <div className="bg-indigo-600/20 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-indigo-400/20">
              <span className="text-[10px] text-indigo-300 uppercase tracking-wider block font-bold">Tipo ANSP</span>
              <span className="text-lg font-black text-indigo-200">250</span>
            </div>
            <div className="bg-fuchsia-600/20 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-fuchsia-400/20">
              <span className="text-[10px] text-fuchsia-300 uppercase tracking-wider block font-bold">Asignaturas</span>
              <span className="text-lg font-black text-fuchsia-200">{subjects.length || 38}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Anuncio 1 / 5 (Categorías) */}
      <AdBanner variant="light" positionLabel="Categorías • 1/5 Superior" slotId="4241045160_c1" />

      {/* Botón flotante para abrir el menú en dispositivos móviles */}
      <div className="lg:hidden flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-all cursor-pointer w-full justify-center"
        >
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <span>{isMobileMenuOpen ? 'Ocultar Menú de Categorías' : '📂 Abrir Menú de Categorías & Temario'}</span>
        </button>
      </div>

      {/* ==================================================================== */}
      {/* 2. LAYOUT PRINCIPAL: MENÚ LATERAL + VISOR JERÁRQUICO */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ================================================================== */}
        {/* PANEL DEL MENÚ DE CATEGORÍAS (COL 1-4) */}
        {/* ================================================================== */}
        <aside
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:block lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4 sm:space-y-5 sticky top-20 max-h-[85vh] overflow-y-auto touch-scroll`}
        >
          {/* Cabecera del Menú */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <FolderTree className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Menú de Categorías</h3>
                <p className="text-[11px] text-slate-500">Selecciona nivel por nivel</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleSelectAllCategories}
                className="text-[11px] font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                title="Restablecer todos los filtros"
              >
                Ver Todo
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-lg cursor-pointer"
                aria-label="Cerrar menú"
                title="Cerrar menú de categorías"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Búsqueda dentro del menú */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar materia o tema..."
              value={menuSearchQuery}
              onChange={(e) => setMenuSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
            {menuSearchQuery && (
              <button
                onClick={() => setMenuSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* ================================================================ */}
          {/* NIVEL 1: SELECTOR DE TIPO (INSTITUCIÓN / CONVOCATORIA) */}
          {/* ================================================================ */}
          <div className="space-y-2">
            <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block font-caslon">
              1. Tipo de Institución:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-1.5 bg-slate-100 rounded-2xl text-[11px] sm:text-xs font-bold">
              {/* Botón 'Todas' en fila completa */}
              <button
                onClick={() => {
                  setSelectedInst('ALL');
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`col-span-2 sm:col-span-3 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer border ${
                  selectedInst === 'ALL'
                    ? 'bg-white text-slate-900 shadow-xs border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 border-transparent hover:bg-slate-200/60'
                }`}
                title="Mostrar todas las convocatorias oficiales"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span className="font-caslon font-bold text-[11px] sm:text-xs">Todas las Convocatorias</span>
                </div>
                <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded-md ${
                  selectedInst === 'ALL' ? 'bg-slate-100 text-slate-800' : 'text-slate-400'
                }`}>
                  17,640
                </span>
              </button>

              {/* UES */}
              <button
                onClick={() => {
                  setSelectedInst('UES');
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl transition-all text-center cursor-pointer min-w-0 ${
                  selectedInst === 'UES'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200/50'
                }`}
                title="Admisión Universitaria UES (7,500 reactivos)"
              >
                <span className="truncate block font-caslon font-bold text-[11px] sm:text-xs">UES</span>
                <span className={`block text-[8.5px] sm:text-[9px] font-mono ${selectedInst === 'UES' ? 'text-blue-100' : 'text-slate-400'}`}>
                  7,500
                </span>
              </button>

              {/* Escalafón */}
              <button
                onClick={() => {
                  setSelectedInst('ESCALAFON');
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl transition-all text-center cursor-pointer min-w-0 ${
                  selectedInst === 'ESCALAFON'
                    ? 'bg-purple-800 text-white shadow-xs'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200/50'
                }`}
                title="Ascenso al Nivel 1 del Escalafón Docente 2026 (3,300 reactivos)"
              >
                <span className="truncate block font-caslon font-bold text-[11px] sm:text-xs">Escalafón</span>
                <span className={`block text-[8.5px] sm:text-[9px] font-mono ${selectedInst === 'ESCALAFON' ? 'text-purple-200' : 'text-slate-400'}`}>
                  3,300
                </span>
              </button>

              {/* AVANZO */}
              <button
                onClick={() => {
                  setSelectedInst('AVANZO');
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl transition-all text-center cursor-pointer min-w-0 ${
                  selectedInst === 'AVANZO'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200/50'
                }`}
                title="Prueba Nacional AVANZO Bachillerato (3,000 reactivos)"
              >
                <span className="truncate block font-caslon font-bold text-[11px] sm:text-xs">AVANZO</span>
                <span className={`block text-[8.5px] sm:text-[9px] font-mono ${selectedInst === 'AVANZO' ? 'text-amber-100' : 'text-slate-400'}`}>
                  3,000
                </span>
              </button>

              {/* ASD */}
              <button
                onClick={() => {
                  setSelectedInst('ASD');
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl transition-all text-center cursor-pointer min-w-0 ${
                  selectedInst === 'ASD'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200/50'
                }`}
                title="Academia Sabatina Departamental Jóvenes Talento (2,190 reactivos)"
              >
                <span className="truncate block font-caslon font-bold text-[11px] sm:text-xs">ASD</span>
                <span className={`block text-[8.5px] sm:text-[9px] font-mono ${selectedInst === 'ASD' ? 'text-emerald-200' : 'text-slate-400'}`}>
                  2,190
                </span>
              </button>

              {/* ENA */}
              <button
                onClick={() => {
                  setSelectedInst('ENA');
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl transition-all text-center cursor-pointer min-w-0 ${
                  selectedInst === 'ENA'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200/50'
                }`}
                title="Escuela Nacional de Agricultura ENA (1,400 reactivos)"
              >
                <span className="truncate block font-caslon font-bold text-[11px] sm:text-xs">ENA</span>
                <span className={`block text-[8.5px] sm:text-[9px] font-mono ${selectedInst === 'ENA' ? 'text-teal-100' : 'text-slate-400'}`}>
                  1,400
                </span>
              </button>

              {/* ANSP */}
              <button
                onClick={() => {
                  setSelectedInst('ANSP');
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl transition-all text-center cursor-pointer min-w-0 ${
                  selectedInst === 'ANSP'
                    ? 'bg-indigo-700 text-white shadow-xs'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200/50'
                }`}
                title="Academia Nacional de Seguridad Pública ANSP (250 reactivos)"
              >
                <span className="truncate block font-caslon font-bold text-[11px] sm:text-xs">ANSP</span>
                <span className={`block text-[8.5px] sm:text-[9px] font-mono ${selectedInst === 'ANSP' ? 'text-indigo-200' : 'text-slate-400'}`}>
                  250
                </span>
              </button>

              {/* IDIOMAS / INGLÉS */}
              <button
                onClick={() => {
                  setSelectedInst('INGLES');
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl transition-all text-center cursor-pointer min-w-0 ${
                  selectedInst === 'INGLES'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200/50'
                }`}
                title="Marco Común Europeo de Referencia MCER / CEFR - Inglés (600 reactivos)"
              >
                <span className="truncate block font-caslon font-bold text-[11px] sm:text-xs">Inglés</span>
                <span className={`block text-[8.5px] sm:text-[9px] font-mono ${selectedInst === 'INGLES' ? 'text-emerald-200' : 'text-slate-400'}`}>
                  600
                </span>
              </button>
            </div>
          </div>

          {/* ================================================================ */}
          {/* NIVEL 2: SELECTOR DE MATERIA */}
          {/* ================================================================ */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
                2. Materia ({filteredSubjects.length}):
              </label>
              {selectedSubjectId !== 'ALL' && (
                <button
                  onClick={() => {
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className="text-[10px] text-blue-600 hover:underline font-semibold cursor-pointer"
                >
                  Todas las materias
                </button>
              )}
            </div>

            <div className="space-y-1.5 max-h-56 overflow-y-auto touch-scroll pr-1">
              <button
                onClick={() => {
                  setSelectedSubjectId('ALL');
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className={`w-full text-left p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                  selectedSubjectId === 'ALL'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Todas las Materias</span>
                </div>
                <span className="text-[10px] font-mono opacity-80">
                  {displayedQuestions.length}
                </span>
              </button>

              {filteredSubjects.map((subj) => {
                const isSelected = selectedSubjectId === subj.id;
                return (
                  <button
                    key={subj.id}
                    onClick={() => {
                      setSelectedSubjectId(subj.id);
                      setSelectedSubtopicId('ALL');
                      setSelectedSectionTitle('ALL');
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold ring-1 ring-blue-500/20'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-blue-600 shrink-0">
                        {getSubjectIcon(subj.icon)}
                      </span>
                      <span className="truncate">{subj.name}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold ${
                          subj.institution === 'ANSP'
                            ? 'bg-indigo-100 text-indigo-800'
                            : subj.institution === 'ASD'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {subj.institution || 'UES'}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-500">
                        {subj.totalQuestions}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================================================ */}
          {/* NIVEL 3: SELECTOR DE TEMA / UNIDAD */}
          {/* ================================================================ */}
          {activeSubject && availableSubtopics.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100 animate-fade-in">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
                  3. Tema / Unidad:
                </label>
                {selectedSubtopicId !== 'ALL' && (
                  <button
                    onClick={() => {
                      setSelectedSubtopicId('ALL');
                      setSelectedSectionTitle('ALL');
                    }}
                    className="text-[10px] text-blue-600 hover:underline font-semibold cursor-pointer"
                  >
                    Todos los temas
                  </button>
                )}
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto touch-scroll pr-1">
                <button
                  onClick={() => {
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`w-full text-left p-2 rounded-xl border text-[11px] font-semibold flex items-center justify-between transition-all cursor-pointer ${
                    selectedSubtopicId === 'ALL'
                      ? 'bg-slate-800 text-white border-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span>Todos los Temas ({activeSubject.name})</span>
                  <span className="font-mono text-[10px]">{activeSubject.totalQuestions}</span>
                </button>

                {availableSubtopics.map((st) => {
                  const isSelected = selectedSubtopicId === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => {
                        setSelectedSubtopicId(st.id);
                        setSelectedSectionTitle('ALL');
                      }}
                      className={`w-full text-left p-2 rounded-xl border text-[11px] font-medium flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-1 ring-blue-400'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="truncate flex items-center gap-1.5">
                        <span className="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded text-slate-700 shrink-0">
                          {st.code}
                        </span>
                        <span className="truncate">{st.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-1">
                        {st.questionCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* NIVEL 4: SELECTOR DE SECCIÓN */}
          {/* ================================================================ */}
          {availableSections.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100 animate-fade-in">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
                  4. Sección:
                </label>
                {selectedSectionTitle !== 'ALL' && (
                  <button
                    onClick={() => setSelectedSectionTitle('ALL')}
                    className="text-[10px] text-blue-600 hover:underline font-semibold cursor-pointer"
                  >
                    Todas las secciones
                  </button>
                )}
              </div>

              <div className="space-y-1.5 max-h-40 overflow-y-auto touch-scroll pr-1">
                <button
                  onClick={() => setSelectedSectionTitle('ALL')}
                  className={`w-full text-left p-2 rounded-xl border text-[11px] font-semibold flex items-center justify-between transition-all cursor-pointer ${
                    selectedSectionTitle === 'ALL'
                      ? 'bg-slate-800 text-white border-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span>Todas las Secciones</span>
                  <span className="font-mono text-[10px]">{displayedQuestions.length}</span>
                </button>

                {availableSections.map((sec) => {
                  const isSelected = selectedSectionTitle === sec;
                  return (
                    <button
                      key={sec}
                      onClick={() => setSelectedSectionTitle(sec)}
                      className={`w-full text-left p-2 rounded-xl border text-[11px] font-medium flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-1 ring-blue-400'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                      title={sec}
                    >
                      <span className="truncate">{sec}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Botón de cierre y visualización en dispositivos móviles */}
          <div className="lg:hidden pt-3 border-t border-slate-100 sticky bottom-0 bg-white/95 backdrop-blur-xs pb-1">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <Check className="w-4 h-4" />
              <span>Ver {displayedQuestions.length} preguntas seleccionadas</span>
            </button>
          </div>

          {/* Anuncio 2 / 5 (Categorías) */}
          <div className="pt-2 border-t border-slate-100">
            <AdBanner variant="light" positionLabel="Categorías • 2/5 Filtros" slotId="4241045160_c2" />
          </div>
        </aside>

        {/* ================================================================== */}
        {/* PANEL PRINCIPAL: VISOR DE PREGUNTAS AGRUPADAS (COL 5-12) */}
        {/* ================================================================== */}
        <section className="lg:col-span-8 space-y-6">
          {/* Barra de Búsqueda y Acciones Rápidas */}
          <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Breadcrumb de Ruta de Selección */}
              <div className="flex items-center gap-1.5 text-xs text-slate-600 flex-wrap w-full sm:w-auto">
                <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                  {selectedInst === 'ALL' ? 'UES, ESCALAFÓN, AVANZO, ASD, ENA & ANSP' : selectedInst}
                </span>
                <span>/</span>
                <span className="font-semibold text-slate-700">
                  {activeSubject ? activeSubject.name : 'Todas las Materias'}
                </span>
                {activeSubtopic && (
                  <>
                    <span>/</span>
                    <span className="text-blue-700 font-medium">{activeSubtopic.title}</span>
                  </>
                )}
                {selectedSectionTitle !== 'ALL' && (
                  <>
                    <span>/</span>
                    <span className="text-slate-500 truncate max-w-[200px]" title={selectedSectionTitle}>
                      {selectedSectionTitle}
                    </span>
                  </>
                )}
              </div>

              {/* Controles de Expansión */}
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                <button
                  onClick={handleExpandAll}
                  className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg cursor-pointer"
                >
                  Expandir Todo
                </button>
                <button
                  onClick={handleCollapseAll}
                  className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg cursor-pointer"
                >
                  Colapsar Todo
                </button>
              </div>
            </div>

            {/* Búsqueda de reactivos */}
            <div className="relative pt-1 border-t border-slate-100">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar dentro de estas preguntas (reactivo, fórmula KaTeX, tema)..."
                value={questionSearchQuery}
                onChange={(e) => setQuestionSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
              />
              {questionSearchQuery && (
                <button
                  onClick={() => setQuestionSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Filtro por Nivel Pedagógico */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1 text-xs">
              <span className="text-slate-500 font-bold mr-1 text-[11px] uppercase tracking-wider">
                Nivel Pedagógico:
              </span>
              <button
                type="button"
                onClick={() => setSelectedLevel('ALL')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === 'ALL'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Todos
              </button>
              <button
                type="button"
                onClick={() => setSelectedLevel('basico')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === 'basico'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                🌱 Básico
              </button>
              <button
                type="button"
                onClick={() => setSelectedLevel('intermedio')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === 'intermedio'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                }`}
              >
                ⚡ Intermedio
              </button>
              <button
                type="button"
                onClick={() => setSelectedLevel('admision')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === 'admision'
                    ? 'bg-purple-600 text-white shadow-2xs'
                    : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
                }`}
              >
                🎯 Admisión
              </button>
            </div>

            {/* Acciones Generales con estas preguntas */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1 flex-wrap gap-2">
              <span className="font-semibold text-slate-700">
                Mostrando {displayedQuestions.length} preguntas organizadas por Sección, Tema y Materia
              </span>

              <div className="flex items-center gap-2">
                {onStartPracticeWithQuestions && displayedQuestions.length > 0 && (
                  <button
                    onClick={() => onStartPracticeWithQuestions(displayedQuestions)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold shadow-2xs transition-colors cursor-pointer"
                    title="Practicar con estas preguntas en el simulador"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Practicar ({displayedQuestions.length})</span>
                  </button>
                )}

                {onExportLatexWithQuestions && displayedQuestions.length > 0 && (
                  <button
                    onClick={() =>
                      onExportLatexWithQuestions(
                        displayedQuestions,
                        `Compilación: ${activeSubject ? activeSubject.name : selectedInst}`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold shadow-2xs transition-colors cursor-pointer"
                    title="Exportar a LaTeX"
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>LaTeX</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Anuncio 3 / 5 (Categorías) */}
          <AdBanner variant="light" positionLabel="Categorías • 3/5 Explorador" slotId="4241045160_c3" />

          {/* ================================================================ */}
          {/* LISTADO DE PREGUNTAS AGRUPADAS POR SECCIÓN, TEMA, MATERIA Y TIPO */}
          {/* ================================================================ */}
          {loadingQuestions ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-bold text-slate-800">Cargando preguntas de la categoría seleccionada...</p>
              <p className="text-xs text-slate-400">Extrayendo reactivos, claves y fórmulas KaTeX</p>
            </div>
          ) : displayedQuestions.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
              <p className="text-base font-bold text-slate-800">No se encontraron preguntas en esta selección</p>
              <p className="text-xs text-slate-500">
                Prueba restableciendo los filtros o ampliando los términos de búsqueda.
              </p>
              <button
                onClick={handleSelectAllCategories}
                className="px-4 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl cursor-pointer"
              >
                Ver Todas las Categorías
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {groupedHierarchy.map((instGroup) => (
                <div key={instGroup.institution} className="space-y-6">
                  {/* Encabezado Nivel 1: TIPO (UES, AVANZO, ASD, ENA O ANSP) */}
                  <div
                    className={`p-4 rounded-2xl border text-white flex items-center justify-between shadow-xs ${
                      instGroup.institution === 'UES'
                        ? 'bg-gradient-to-r from-blue-700 to-indigo-800 border-blue-600'
                        : instGroup.institution === 'ESCALAFON'
                        ? 'bg-gradient-to-r from-purple-800 to-indigo-900 border-purple-700'
                        : instGroup.institution === 'AVANZO'
                        ? 'bg-gradient-to-r from-amber-600 to-orange-700 border-amber-500'
                        : instGroup.institution === 'ENA'
                        ? 'bg-gradient-to-r from-emerald-600 to-green-700 border-emerald-500'
                        : instGroup.institution === 'ANSP'
                        ? 'bg-gradient-to-r from-indigo-800 to-purple-900 border-indigo-700'
                        : 'bg-gradient-to-r from-emerald-700 to-teal-800 border-emerald-600'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black">
                        {instGroup.institution === 'UES' ? (
                          <GraduationCap className="w-4 h-4 text-white" />
                        ) : instGroup.institution === 'ESCALAFON' ? (
                          <Award className="w-4 h-4 text-white" />
                        ) : instGroup.institution === 'AVANZO' ? (
                          <BookOpen className="w-4 h-4 text-white" />
                        ) : instGroup.institution === 'ENA' ? (
                          <Sprout className="w-4 h-4 text-white" />
                        ) : instGroup.institution === 'ANSP' ? (
                          <Shield className="w-4 h-4 text-white" />
                        ) : (
                          <Award className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-black tracking-tight">
                          {instGroup.institution === 'UES'
                            ? 'Universidad de El Salvador (UES) — Admisión Universitaria'
                            : instGroup.institution === 'ESCALAFON'
                            ? 'Tribunal Calificador de la Carrera Docente — Ascenso al Nivel Uno 2026 (MINED)'
                            : instGroup.institution === 'AVANZO'
                            ? 'Prueba Nacional AVANZO 2025 — Ministerio de Educación (MINED)'
                            : instGroup.institution === 'ENA'
                            ? 'Escuela Nacional de Agricultura "Roberto Quiñónez" (ENA) — Admisión 2027'
                            : instGroup.institution === 'ANSP'
                            ? 'Academia Nacional de Seguridad Pública (ANSP) — Prueba Cultural'
                            : 'Academia Sabatina Departamental (ASD) — Jóvenes Talento'}
                        </h3>
                        <p className="text-[11px] text-white/80">
                          {instGroup.institution === 'UES'
                            ? 'Banco consolidado de reactivos con justificación paso a paso'
                            : instGroup.institution === 'ESCALAFON'
                            ? 'Banco oficial de 3,300 preguntas en Formación General y 10 Especialidades Curriculares docentes'
                            : instGroup.institution === 'AVANZO'
                            ? 'Evaluación oficial de 3,000 reactivos para Bachillerato en Precálculo, Ciudadanía, Ciencias, Lengua e Inglés'
                            : instGroup.institution === 'ENA'
                            ? 'Banco técnico de 1,400 reactivos en Matemáticas Agrarias, Química, Biología y Lenguaje Técnico'
                            : instGroup.institution === 'ANSP'
                            ? 'Cuestionario oficial estructurado en opción múltiple y temario nacional'
                            : 'Preparación académica para 5.°, 6.° y 7.° Grado en Matemática y Ciencias Naturales'}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold bg-white/20 px-2.5 py-1 rounded-lg">
                      {instGroup.institution}
                    </span>
                  </div>

                  {/* Encabezados Nivel 2: MATERIA */}
                  {instGroup.subjects.map((subj) => (
                    <div key={subj.subjectName} className="space-y-5 pl-1 sm:pl-3 border-l-2 border-slate-200">
                      <div className="bg-slate-100/80 p-3 sm:p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-slate-700 shrink-0" />
                          <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                            Materia: {subj.subjectName}
                          </h4>
                        </div>
                        <span className="text-xs font-mono font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {subj.topics.reduce((acc, t) => acc + t.sections.reduce((a, s) => a + s.questions.length, 0), 0)} reactivos
                        </span>
                      </div>

                      {/* Encabezados Nivel 3: TEMA */}
                      {subj.topics.map((top) => (
                        <div key={top.topicName} className="space-y-4 pl-2 sm:pl-4">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            <span>Tema / Unidad: {top.topicName}</span>
                          </div>

                          {/* Encabezados Nivel 4: SECCIÓN */}
                          {top.sections.map((sec) => {
                            const secKey = `${instGroup.institution}_${subj.subjectName}_${sec.sectionTitle}`;
                            const isCollapsed =
                              questionSearchQuery.trim() !== '' ? false : (collapsedSections[secKey] ?? true);

                            return (
                              <div
                                key={sec.sectionTitle}
                                className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
                              >
                                {/* Cabecera de la Sección (Accordion) */}
                                <div
                                  onClick={() => toggleCollapseSection(secKey)}
                                  className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 to-white hover:bg-slate-100/60 border-b border-slate-100 flex items-center justify-between gap-3 cursor-pointer select-none transition-colors"
                                >
                                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                    <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                                      <FolderTree className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="min-w-0">
                                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                                        {sec.sectionTitle}
                                      </h5>
                                      <p className="text-[11px] text-slate-500 font-medium">
                                        Sección con {sec.questions.length} preguntas de opción múltiple
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 shrink-0">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopySection(sec.sectionTitle, sec.questions);
                                      }}
                                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-white rounded-lg transition-colors cursor-pointer"
                                      title="Copiar preguntas de esta sección"
                                    >
                                      <Copy className="w-4 h-4" />
                                    </button>

                                    {onStartPracticeWithQuestions && (
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          onStartPracticeWithQuestions(sec.questions);
                                        }}
                                        className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer hidden sm:inline-flex"
                                        title="Evaluar esta sección en el simulador"
                                      >
                                        <Play className="w-4 h-4" />
                                      </button>
                                    )}

                                    <div className="p-1 text-slate-500">
                                      {isCollapsed ? (
                                        <ChevronDown className="w-4 h-4" />
                                      ) : (
                                        <ChevronUp className="w-4 h-4" />
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Cuerpo de la Sección con las Preguntas */}
                                {!isCollapsed && (
                                  <div className="p-4 sm:p-6 space-y-5">
                                    {sec.questions.map((q) => {
                                      const selectedKey = userSelectedOptions[q.id];
                                      const isAnswered = selectedKey !== undefined;
                                      const isCorrect = selectedKey === q.correctAnswer;
                                      const showSolution = visibleSolutions[q.id] || false;

                                      return (
                                        <div
                                          key={q.id}
                                          className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-slate-300 shadow-2xs transition-all space-y-4"
                                        >
                                          {/* Metadatos de la Pregunta */}
                                          <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-center gap-2 flex-wrap text-xs">
                                              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                                                #{q.number}
                                              </span>
                                              <span
                                                className={`font-bold px-2 py-0.5 rounded-full text-[10px] ${
                                                  q.institution === 'UES'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : 'bg-indigo-100 text-indigo-800'
                                                }`}
                                              >
                                                {q.institution}
                                              </span>
                                              <span className="font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md text-[11px]">
                                                {q.subject}
                                              </span>
                                              <span className="text-slate-400 font-medium text-[11px] hidden sm:inline">
                                                • {q.topic}
                                              </span>
                                              {q.level && (
                                                <span
                                                  className={`font-bold px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider ${
                                                    q.level === 'basico'
                                                      ? 'bg-emerald-100 text-emerald-800'
                                                      : q.level === 'intermedio'
                                                      ? 'bg-blue-100 text-blue-800'
                                                      : 'bg-purple-100 text-purple-800'
                                                  }`}
                                                >
                                                  {q.level === 'basico' ? 'Básico' : q.level === 'intermedio' ? 'Intermedio' : 'Admisión'}
                                                </span>
                                              )}
                                            </div>

                                            <button
                                              onClick={() => handleCopySingleQuestion(q)}
                                              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                              title="Copiar pregunta"
                                            >
                                              {copiedQuestionId === q.id ? (
                                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                              ) : (
                                                <Copy className="w-3.5 h-3.5" />
                                              )}
                                            </button>
                                          </div>

                                          {/* Enunciado con KaTeX */}
                                          <div className="text-slate-900 text-sm sm:text-base leading-relaxed">
                                            <MathText text={q.statement} />
                                          </div>

                                          {/* Opciones de Respuesta */}
                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {q.options.map((opt) => {
                                              const isSelected = selectedKey === opt.key;
                                              const isRight = q.correctAnswer === opt.key;

                                              let btnClass =
                                                'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';

                                              if (isAnswered || showSolution) {
                                                if (isRight) {
                                                  btnClass =
                                                    'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                                                } else if (isSelected) {
                                                  btnClass = 'bg-rose-50 border-rose-400 text-rose-950';
                                                } else {
                                                  btnClass =
                                                    'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                                                }
                                              }

                                              return (
                                                <button
                                                  key={opt.key}
                                                  onClick={() => {
                                                    setUserSelectedOptions((prev) => ({
                                                      ...prev,
                                                      [q.id]: opt.key,
                                                    }));
                                                  }}
                                                  className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-start gap-2.5 cursor-pointer min-h-[40px] ${btnClass}`}
                                                >
                                                  <span
                                                    className={`w-5 h-5 rounded-md font-mono text-[11px] font-bold flex items-center justify-center shrink-0 ${
                                                      (isAnswered || showSolution) && isRight
                                                        ? 'bg-emerald-600 text-white'
                                                        : isSelected
                                                        ? 'bg-rose-600 text-white'
                                                        : 'bg-white border border-slate-300 text-slate-700'
                                                    }`}
                                                  >
                                                    {opt.key}
                                                  </span>
                                                  <div className="flex-1 break-words leading-snug pt-0.5">
                                                    <MathText text={opt.text} />
                                                  </div>
                                                </button>
                                              );
                                            })}
                                          </div>

                                          {/* Clave y Justificación */}
                                          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                                            <div className="flex items-center justify-between">
                                              <button
                                                onClick={() =>
                                                  setVisibleSolutions((prev) => ({
                                                    ...prev,
                                                    [q.id]: !prev[q.id],
                                                  }))
                                                }
                                                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer"
                                              >
                                                <Info className="w-3.5 h-3.5" />
                                                <span>
                                                  {showSolution ? 'Ocultar Justificación' : 'Ver Clave y Solución'}
                                                </span>
                                                {showSolution ? (
                                                  <ChevronUp className="w-3 h-3" />
                                                ) : (
                                                  <ChevronDown className="w-3 h-3" />
                                                )}
                                              </button>

                                              {isAnswered && (
                                                <div className="text-xs font-bold">
                                                  {isCorrect ? (
                                                    <span className="text-emerald-600 flex items-center gap-1">
                                                      <CheckCircle2 className="w-3.5 h-3.5" /> ¡Correcto!
                                                    </span>
                                                  ) : (
                                                    <span className="text-rose-600">
                                                      Incorrecto (Clave: {q.correctAnswer})
                                                    </span>
                                                  )}
                                                </div>
                                              )}
                                            </div>

                                            {showSolution && (
                                              <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-xs sm:text-sm text-slate-700 space-y-1.5 animate-fade-in">
                                                <div className="font-bold text-blue-950 flex items-center gap-2">
                                                  <span>Opción Correcta:</span>
                                                  <span className="px-2 py-0.5 bg-blue-600 text-white rounded-md text-xs font-mono">
                                                    {q.correctAnswer}
                                                  </span>
                                                </div>
                                                <div className="text-slate-700 leading-relaxed">
                                                  <strong className="text-slate-900">Justificación: </strong>
                                                  <MathText text={q.explanation} />
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Anuncio 4 / 5 (Categorías) */}
          <AdBanner variant="light" positionLabel="Categorías • 4/5 Reactivos" slotId="4241045160_c4" />
        </section>
      </div>

      {/* Anuncio 5 / 5 (Categorías) */}
      <AdBanner variant="light" positionLabel="Categorías • 5/5 Inferior" slotId="4241045160_c5" />
    </div>
  );
};
