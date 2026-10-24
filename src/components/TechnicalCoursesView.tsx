import React, { useState, useMemo } from 'react';
import {
  Wrench,
  Zap,
  Cpu,
  UtensilsCrossed,
  Flame,
  Microscope,
  Smartphone,
  Sprout,
  Boxes,
  Search,
  CheckCircle2,
  XCircle,
  BookOpen,
  Sparkles,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ShieldAlert,
  Layers,
  ArrowRight,
  Target,
  Calculator,
  FileText,
  Scale,
  Award,
  RotateCcw,
  HelpCircle,
  ExternalLink,
  Info,
  Check,
  Clock,
  GraduationCap,
} from 'lucide-react';

import {
  TECHNICAL_COURSES,
  SALVADORAN_NORMATIVE_INSTITUTIONS,
  NormativeInstitution,
  CourseQuizQuestion,
  WorkshopFormula,
  LegalCitation,
  SafetyProcedure,
  TechnicalCourseModule,
  TechnicalCourse,
} from '../data/technicalCoursesData';
import { KaTeXRenderer } from './KaTeXRenderer';

// Re-export for 100% backward compatibility
export {
  TECHNICAL_COURSES,
  SALVADORAN_NORMATIVE_INSTITUTIONS,
};
export type {
  TechnicalCourse,
  TechnicalCourseModule,
  LegalCitation,
  WorkshopFormula,
  SafetyProcedure,
  CourseQuizQuestion,
  NormativeInstitution,
};

// Styling map for Salvadoran Normative Institutions
const INSTITUTION_STYLE_MAP: Record<
  NormativeInstitution,
  {
    bg: string;
    text: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  }
> = {
  INCAF: {
    bg: 'bg-blue-50/70',
    text: 'text-blue-900',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
  },
  MTPS: {
    bg: 'bg-emerald-50/70',
    text: 'text-emerald-900',
    border: 'border-emerald-200',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
  },
  SIGET: {
    bg: 'bg-amber-50/70',
    text: 'text-amber-900',
    border: 'border-amber-200',
    badgeBg: 'bg-amber-600',
    badgeText: 'text-white',
  },
  MINSAL: {
    bg: 'bg-rose-50/70',
    text: 'text-rose-900',
    border: 'border-rose-200',
    badgeBg: 'bg-rose-600',
    badgeText: 'text-white',
  },
  MARN: {
    bg: 'bg-teal-50/70',
    text: 'text-teal-900',
    border: 'border-teal-200',
    badgeBg: 'bg-teal-600',
    badgeText: 'text-white',
  },
  MAG: {
    bg: 'bg-green-50/70',
    text: 'text-green-900',
    border: 'border-green-200',
    badgeBg: 'bg-green-600',
    badgeText: 'text-white',
  },
  ANDA: {
    bg: 'bg-cyan-50/70',
    text: 'text-cyan-900',
    border: 'border-cyan-200',
    badgeBg: 'bg-cyan-600',
    badgeText: 'text-white',
  },
  OSARTEC: {
    bg: 'bg-indigo-50/70',
    text: 'text-indigo-900',
    border: 'border-indigo-200',
    badgeBg: 'bg-indigo-600',
    badgeText: 'text-white',
  },
};

export const TechnicalCoursesView: React.FC = () => {
  // Course & Navigation State
  const [selectedCourseId, setSelectedCourseId] = useState<string>('electricidad');
  const [activeModuleNumber, setActiveModuleNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [moduleSectionTab, setModuleSectionTab] = useState<
    'content' | 'legal' | 'formulas' | 'safety' | 'quiz' | 'all'
  >('content');

  // Interactive Quiz State: Map of questionId -> selected Option ('A' | 'B' | 'C' | 'D')
  const [quizAnswers, setQuizAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});

  // Normative Drawer / Modal State
  const [selectedNormativeModal, setSelectedNormativeModal] = useState<NormativeInstitution | null>(
    null
  );
  const [showAllNormatives, setShowAllNormatives] = useState<boolean>(false);

  // Selected course resolution
  const selectedCourse = useMemo(() => {
    return TECHNICAL_COURSES.find((c) => c.id === selectedCourseId) || TECHNICAL_COURSES[0];
  }, [selectedCourseId]);

  // Selected module resolution (strictly 1 to 4)
  const activeModule = useMemo(() => {
    return (
      selectedCourse.modules.find((m) => m.number === activeModuleNumber) ||
      selectedCourse.modules[0]
    );
  }, [selectedCourse, activeModuleNumber]);

  // Unique categories list with counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    TECHNICAL_COURSES.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = useMemo(() => {
    return Object.keys(categoryCounts);
  }, [categoryCounts]);

  // Real-time Search and Filtering
  const filteredCourses = useMemo(() => {
    return TECHNICAL_COURSES.filter((course) => {
      if (activeCategoryFilter !== 'all' && course.category !== activeCategoryFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inCourseInfo =
          course.title.toLowerCase().includes(q) ||
          course.summary.toLowerCase().includes(q) ||
          course.category.toLowerCase().includes(q) ||
          course.targetAudience.toLowerCase().includes(q);

        const inLegal = (course.legalFramework || []).some((l) =>
          l.toLowerCase().includes(q)
        );

        const inModules = course.modules.some((m) => {
          const inTitle = m.title.toLowerCase().includes(q);
          const inDesc = m.description.toLowerCase().includes(q);
          const inSkills = m.practicalSkills.some((s) => s.toLowerCase().includes(q));
          const inTopics = (m.topics || []).some((t) => t.title.toLowerCase().includes(q));
          const inFormulas = m.workshopFormulas.some(
            (f) =>
              f.name.toLowerCase().includes(q) ||
              f.expression.toLowerCase().includes(q) ||
              f.description.toLowerCase().includes(q)
          );
          const inCitations = m.legalCitations.some(
            (c) =>
              c.institution.toLowerCase().includes(q) ||
              c.decree.toLowerCase().includes(q) ||
              c.article.toLowerCase().includes(q) ||
              c.summary.toLowerCase().includes(q)
          );
          return inTitle || inDesc || inSkills || inTopics || inFormulas || inCitations;
        });

        return inCourseInfo || inLegal || inModules;
      }
      return true;
    });
  }, [activeCategoryFilter, searchQuery]);

  // Quiz calculations for active module
  const moduleQuestions = activeModule.quiz || [];
  const moduleAnsweredCount = moduleQuestions.filter((q) => quizAnswers[q.id]).length;
  const moduleCorrectCount = moduleQuestions.filter(
    (q) => quizAnswers[q.id] === q.correctAnswer
  ).length;

  // Handle quiz option click
  const handleSelectQuizOption = (questionId: string, option: 'A' | 'B' | 'C' | 'D') => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  // Reset quiz for current module
  const handleResetModuleQuiz = () => {
    setQuizAnswers((prev) => {
      const next = { ...prev };
      moduleQuestions.forEach((q) => {
        delete next[q.id];
      });
      return next;
    });
  };

  // Switch course helper (resets active module to 1)
  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setActiveModuleNumber(1);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* ============================================================ */}
      {/* 1. Encabezado Principal & Metas Curriculares (400 Horas)       */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-blue-900/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Formación Técnica Profesional • 10 Especialidades Oficiales</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>40 Horas por Curso • 400 Horas Teóricas Totales</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
              <Scale className="w-3.5 h-3.5 text-indigo-400" />
              <span>Normativa Salvadoreña INCAF, MTPS, SIGET & MINSAL</span>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight font-montenegrin text-white">
              Catálogo Maestro de Cursos Técnicos Vocacionales
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Programas de especialización técnica estructurados estrictamente en 4 módulos de 10
              horas cada uno (40 horas por curso). Diseñados bajo el marco de cualificación laboral
              del <strong>INCAF (D.L. 896)</strong>, normas de prevención de riesgos ocupacionales
              del <strong>MTPS (LGPRLT D.L. 254 / D.E. 86)</strong> y regulaciones técnicas de
              las 8 entidades salvadoreñas competentes.
            </p>
          </div>

          {/* Métricas Globales del Programa */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-5 gap-2.5 max-w-4xl text-xs">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10">
              <span className="text-blue-300 font-mono text-[10px] block uppercase font-bold">
                Especialidades
              </span>
              <span className="text-lg font-black text-white">10 Cursos</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10">
              <span className="text-emerald-300 font-mono text-[10px] block uppercase font-bold">
                Módulos Didácticos
              </span>
              <span className="text-lg font-black text-white">40 Módulos</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10">
              <span className="text-amber-300 font-mono text-[10px] block uppercase font-bold">
                Horas Pedagógicas
              </span>
              <span className="text-lg font-black text-white">400 Horas</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10">
              <span className="text-rose-300 font-mono text-[10px] block uppercase font-bold">
                Autoevaluación
              </span>
              <span className="text-lg font-black text-white">120 Reactivos</span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10">
              <span className="text-purple-300 font-mono text-[10px] block uppercase font-bold">
                Leyes & Decretos
              </span>
              <span className="text-lg font-black text-white">8 Entidades</span>
            </div>
          </div>

          {/* Botón para explorar las 8 Instituciones Normativas */}
          <div className="pt-1 flex items-center justify-between flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setShowAllNormatives(!showAllNormatives)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600/60 hover:bg-blue-600 text-white text-xs font-bold transition-colors cursor-pointer border border-blue-400/40"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>
                {showAllNormatives
                  ? 'Ocultar Directorio de Entidades Reguladoras'
                  : 'Explorar las 8 Entidades Normativas Salvadoreñas (Leyes y Decretos)'}
              </span>
              {showAllNormatives ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. Directorio Desplegable de las 8 Entidades Normativas      */}
      {/* ============================================================ */}
      {showAllNormatives && (
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                Marco Institucional y Normativo Regulador de El Salvador
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-500 font-bold">
              8 Instituciones Oficiales
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {(
              Object.keys(
                SALVADORAN_NORMATIVE_INSTITUTIONS
              ) as NormativeInstitution[]
            ).map((key) => {
              const inst = SALVADORAN_NORMATIVE_INSTITUTIONS[key];
              const style = INSTITUTION_STYLE_MAP[key];
              return (
                <div
                  key={key}
                  className={`p-3.5 rounded-2xl border transition-all ${style.bg} ${style.border} space-y-2`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-black px-2 py-0.5 rounded-md ${style.badgeBg} ${style.badgeText}`}
                    >
                      {key}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedNormativeModal(key)}
                      className="text-[10.5px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3 h-3" />
                      <span>Detalles</span>
                    </button>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 leading-tight">
                    {inst.name}
                  </h4>
                  <p className="text-[11px] font-mono font-medium text-slate-600 leading-snug">
                    {inst.decree}
                  </p>
                  <p className="text-[11.5px] text-slate-700 leading-relaxed pt-1 border-t border-slate-200/50">
                    {inst.scope}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal / Popup de Detalle de Institución Normativa */}
      {selectedNormativeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-mono font-black px-2.5 py-1 rounded-md ${
                    INSTITUTION_STYLE_MAP[selectedNormativeModal].badgeBg
                  } ${INSTITUTION_STYLE_MAP[selectedNormativeModal].badgeText}`}
                >
                  {selectedNormativeModal}
                </span>
                <h3 className="font-bold text-base text-slate-900">
                  {SALVADORAN_NORMATIVE_INSTITUTIONS[selectedNormativeModal].name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNormativeModal(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <span className="font-mono font-bold text-[10px] text-slate-500 uppercase block mb-1">
                  Decreto / Instrumento Legal:
                </span>
                <p className="font-semibold text-slate-900">
                  {SALVADORAN_NORMATIVE_INSTITUTIONS[selectedNormativeModal].decree}
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <span className="font-mono font-bold text-[10px] text-slate-500 uppercase block mb-1">
                  Competencia y Alcance Normativo:
                </span>
                <p className="leading-relaxed">
                  {SALVADORAN_NORMATIVE_INSTITUTIONS[selectedNormativeModal].scope}
                </p>
              </div>

              <div>
                <span className="font-mono font-bold text-[10px] text-slate-500 uppercase block mb-1.5">
                  Cursos Regulados en KUSKAT por esta Entidad:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TECHNICAL_COURSES.filter((c) =>
                    (c.normativeEntities || []).includes(selectedNormativeModal)
                  ).map((c) => (
                    <span
                      key={c.id}
                      className="px-2 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-semibold flex items-center gap-1"
                    >
                      <span>{c.icon}</span>
                      <span>{c.title}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setSelectedNormativeModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
              >
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. Barra de Búsqueda y Filtros por Categoría Dinámica        */}
      {/* ============================================================ */}
      <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Input de Búsqueda */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por curso, módulo, fórmula, ley (ej: MTPS, SIGET, HACCP, Ohm)..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-[11px] font-mono text-slate-500 font-bold shrink-0">
            Mostrando {filteredCourses.length} de {TECHNICAL_COURSES.length} cursos
          </div>
        </div>

        {/* Pestañas de Categoría */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none touch-scroll">
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
              activeCategoryFilter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos ({TECHNICAL_COURSES.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeCategoryFilter === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] font-mono px-1 rounded-full ${
                  activeCategoryFilter === cat ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {categoryCounts[cat]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. Layout Principal: Catálogo (Izquierda) + Detalle (Derecha) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ========================================================== */}
        {/* Columna Izquierda: Lista de Cursos (10 especialidades)     */}
        {/* ========================================================== */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              Especialidades (40h c/u):
            </span>
            <span className="text-[10.5px] font-mono text-blue-600 font-bold">
              10 Cursos Totales
            </span>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center space-y-3">
              <Search className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-xs text-slate-600 font-medium">
                No se encontraron cursos que coincidan con la búsqueda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryFilter('all');
                }}
                className="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold cursor-pointer hover:bg-blue-700"
              >
                Limpiar Filtros
              </button>
            </div>
          ) : (
            <div className="space-y-2 max-h-[820px] overflow-y-auto pr-1">
              {filteredCourses.map((course) => {
                const isSelected = selectedCourseId === course.id;
                return (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => handleSelectCourse(course.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                        : 'bg-white/90 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{course.icon}</span>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-1 flex-wrap">
                        <span
                          className={`text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded border ${course.badgeBg} ${course.badgeText}`}
                        >
                          {course.category}
                        </span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 font-mono font-bold px-1.5 py-0.5 rounded">
                          40h • 4 Mód.
                        </span>
                      </div>
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                        {course.title}
                      </h4>
                      <p className="text-[11.5px] text-slate-500 line-clamp-2 leading-relaxed">
                        {course.summary}
                      </p>

                      {/* Insignias institucionales asociadas */}
                      <div className="pt-1 flex flex-wrap items-center gap-1">
                        {(course.normativeEntities || []).slice(0, 3).map((entity) => {
                          const style = INSTITUTION_STYLE_MAP[entity];
                          return (
                            <span
                              key={entity}
                              className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border ${style.bg} ${style.text} ${style.border}`}
                            >
                              {entity}
                            </span>
                          );
                        })}
                        {(course.normativeEntities || []).length > 3 && (
                          <span className="text-[9px] font-mono text-slate-400">
                            +{(course.normativeEntities || []).length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ========================================================== */}
        {/* Columna Derecha: Explorador Modular Interactivo            */}
        {/* ========================================================== */}
        <div className="lg:col-span-8 space-y-5">
          {/* Ficha de Cabecera del Curso Seleccionado */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100 gap-3 flex-wrap sm:flex-nowrap">
              <div className="flex items-start gap-3">
                <span className="text-4xl shrink-0 p-2 rounded-2xl bg-slate-50 border border-slate-100">
                  {selectedCourse.icon}
                </span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border inline-block ${selectedCourse.badgeBg} ${selectedCourse.badgeText}`}
                    >
                      {selectedCourse.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                      40 Horas Teóricas • 4 Módulos
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">
                      INCAF D.L. 896
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight font-montenegrin">
                    {selectedCourse.title}
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/80">
              {selectedCourse.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-blue-50/50 p-3 rounded-2xl border border-blue-100 space-y-1">
                <span className="font-mono font-bold text-[10px] text-blue-800 uppercase block">
                  Perfil del Aspirante:
                </span>
                <p className="text-slate-700 leading-relaxed text-[11.5px]">
                  {selectedCourse.targetAudience}
                </p>
              </div>

              <div className="bg-amber-50/50 p-3 rounded-2xl border border-amber-100 space-y-1">
                <span className="font-mono font-bold text-[10px] text-amber-900 uppercase block">
                  Marco Regulatorio Aplicable:
                </span>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {(selectedCourse.normativeEntities || []).map((entity) => {
                    const style = INSTITUTION_STYLE_MAP[entity];
                    return (
                      <span
                        key={entity}
                        className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-md border ${style.bg} ${style.text} ${style.border}`}
                      >
                        {entity}: {SALVADORAN_NORMATIVE_INSTITUTIONS[entity]?.decree?.split('(')[0] || entity}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Oportunidades Laborales */}
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-3.5 space-y-2">
              <span className="font-mono font-bold text-[10.5px] text-emerald-950 uppercase flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-emerald-600" />
                <span>Salidas Laborales y Campo Ocupacional en El Salvador:</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedCourse.jobOpportunities.map((job, jIdx) => (
                  <div
                    key={jIdx}
                    className="flex items-start gap-1.5 bg-white/90 p-2 rounded-xl border border-emerald-100 text-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-[11.5px] font-medium leading-snug">{job}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* Navegador Modular: Selector de los 4 Módulos (10h cada uno) */}
          {/* ========================================================== */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono font-bold text-xs uppercase text-slate-500 tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>Malla Didáctica Modular (Exactamente 4 Módulos x 10h = 40h):</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Carga Total: 40h Teórico-Prácticas
                </span>
              </div>

              {/* Selector de los 4 Módulos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {selectedCourse.modules.map((mod) => {
                  const isActive = activeModuleNumber === mod.number;
                  return (
                    <button
                      key={mod.number}
                      type="button"
                      onClick={() => setActiveModuleNumber(mod.number)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer space-y-1 ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          Módulo {mod.number}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold ${
                            isActive ? 'text-blue-100' : 'text-emerald-700'
                          }`}
                        >
                          {mod.hours}h
                        </span>
                      </div>
                      <h4
                        className={`text-xs font-bold line-clamp-2 leading-snug ${
                          isActive ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {mod.title}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cabecera del Módulo Activo */}
            <div className="bg-gradient-to-r from-blue-50/80 via-slate-50 to-indigo-50/50 p-4 rounded-2xl border border-blue-100 space-y-2">
              <div className="flex items-start justify-between gap-2 flex-wrap sm:flex-nowrap">
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-100/70 border border-blue-200 px-2 py-0.5 rounded-md inline-block mb-1">
                    Módulo {activeModule.number} de 4 • Duración: {activeModule.hours} Horas Pedagógicas
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {activeModule.title}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono font-bold text-slate-500 block">
                    Criterio INCAF / ITCA
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">
                    Competencias Certificables
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{activeModule.description}</p>
            </div>

            {/* Sub-Pestañas de Navegación del Módulo Activo */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-slate-200">
              <button
                type="button"
                onClick={() => setModuleSectionTab('content')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  moduleSectionTab === 'content'
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50 rounded-t-xl'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Temario & Habilidades</span>
                <span className="text-[10px] font-mono px-1 rounded-full bg-slate-100 text-slate-600">
                  {(activeModule.topics || []).length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setModuleSectionTab('legal')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  moduleSectionTab === 'legal'
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50 rounded-t-xl'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Marco Legal Salvadoreño</span>
                <span className="text-[10px] font-mono px-1 rounded-full bg-slate-100 text-slate-600">
                  {activeModule.legalCitations.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setModuleSectionTab('formulas')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  moduleSectionTab === 'formulas'
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50 rounded-t-xl'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Fórmulas de Taller</span>
                <span className="text-[10px] font-mono px-1 rounded-full bg-slate-100 text-slate-600">
                  {activeModule.workshopFormulas.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setModuleSectionTab('safety')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  moduleSectionTab === 'safety'
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50 rounded-t-xl'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Seguridad Ocupacional</span>
                <span className="text-[10px] font-mono px-1 rounded-full bg-slate-100 text-slate-600">
                  {(activeModule.safetyProtocols || []).length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setModuleSectionTab('quiz')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  moduleSectionTab === 'quiz'
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50 rounded-t-xl'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Simulador de Autoevaluación</span>
                <span className="text-[10px] font-mono px-1 rounded-full bg-amber-100 text-amber-800 font-bold">
                  {moduleQuestions.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setModuleSectionTab('all')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
                  moduleSectionTab === 'all'
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50 rounded-t-xl'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Ver Todo el Módulo
              </button>
            </div>

            {/* ======================================================== */}
            {/* Sección A: Temario Analítico & Habilidades Prácticas      */}
            {/* ======================================================== */}
            {(moduleSectionTab === 'content' || moduleSectionTab === 'all') && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-mono font-bold text-xs uppercase text-slate-700 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>Desglose Analítico de Temas (Total: {activeModule.hours}h):</span>
                  </h4>

                  <div className="space-y-2">
                    {(activeModule.topics || []).map((t, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start justify-between gap-3"
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-xs text-slate-800 font-medium leading-snug">
                            {t.title || (t as any).topic}
                          </span>
                        </div>
                        <span className="text-[10.5px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded shrink-0">
                          {t.hours}h
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono font-bold text-xs uppercase text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Habilidades y Competencias Laborales Desarrolladas:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeModule.practicalSkills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11.5px] text-slate-800 leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* Sección B: Marco Normativo Salvadoreño (Citas y Leyes)    */}
            {/* ======================================================== */}
            {(moduleSectionTab === 'legal' || moduleSectionTab === 'all') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono font-bold text-xs uppercase text-slate-700 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    <span>Marco Jurídico y Normativo Salvadoreño Aplicable:</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 font-bold">
                    {activeModule.legalCitations.length} Cita(s) Legal(es)
                  </span>
                </div>

                <div className="space-y-3">
                  {activeModule.legalCitations.map((citation, cIdx) => {
                    const style = INSTITUTION_STYLE_MAP[citation.institution];
                    return (
                      <div
                        key={cIdx}
                        className={`p-4 rounded-2xl border ${style.bg} ${style.border} space-y-2.5`}
                      >
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] font-mono font-black px-2 py-0.5 rounded ${style.badgeBg} ${style.badgeText}`}
                            >
                              {citation.institution}
                            </span>
                            <span className="font-bold text-xs text-slate-900">
                              {citation.law || citation.decree}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                            {citation.articles || citation.article}
                          </span>
                        </div>

                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          <strong>Mandato Técnico:</strong> {citation.summary}
                        </p>

                        {citation.citationText && (
                          <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80 text-[11.5px] text-slate-700 italic space-y-1">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-500 uppercase not-italic">
                              <FileText className="w-3 h-3 text-slate-400" />
                              <span>Cita Textual de la Disposición Legal:</span>
                            </div>
                            <p className="leading-relaxed">"{citation.citationText}"</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* Sección C: Fórmulas de Taller y Cálculos Técnicos         */}
            {/* ======================================================== */}
            {(moduleSectionTab === 'formulas' || moduleSectionTab === 'all') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono font-bold text-xs uppercase text-slate-700 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-blue-600" />
                    <span>Fórmulas Matemáticas y Cálculos Técnicos de Taller:</span>
                  </h4>
                  <span className="text-[11px] font-mono text-blue-700 font-bold">
                    {activeModule.workshopFormulas.length} Fórmula(s) Registrada(s)
                  </span>
                </div>

                <div className="space-y-4">
                  {activeModule.workshopFormulas.map((form, fIdx) => (
                    <div
                      key={fIdx}
                      className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md space-y-4"
                    >
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider block">
                            Cálculo de Taller #{fIdx + 1}
                          </span>
                          <h4 className="text-base font-bold text-white">{form.name || form.title}</h4>
                        </div>
                        <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          Aplicación de Campo
                        </span>
                      </div>

                      {/* Renderizado de la Expresión Matemática */}
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 font-mono text-sm sm:text-base text-amber-300 flex items-center justify-center text-center overflow-x-auto">
                        <KaTeXRenderer content={form.expression || form.formula || ''} />
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">{form.description}</p>

                      {/* Tabla de Variables */}
                      {form.variables && form.variables.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                            Desglose de Parámetros y Unidades:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {form.variables.map((v, vIdx) => (
                              <div
                                key={vIdx}
                                className="bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/60 flex items-center justify-between text-xs"
                              >
                                <span className="font-mono font-bold text-amber-300">{v.symbol}</span>
                                <span className="text-slate-300 text-[11px] truncate mx-2">{v.meaning}</span>
                                <span className="font-mono text-[10px] text-blue-300 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/50">
                                  {v.unit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Ejemplo Práctico de Taller */}
                      <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 space-y-1.5 text-xs">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Ejemplo Numérico Real de Taller:</span>
                        </span>
                        <p className="text-slate-200 leading-relaxed text-[11.5px]">
                          {form.practicalExample || form.example}
                        </p>
                        {form.practicalApplication && (
                          <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-700/60">
                            <strong>Aplicación Práctica:</strong> {form.practicalApplication}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* Sección D: Seguridad y Salud Ocupacional (LGPRLT)         */}
            {/* ======================================================== */}
            {(moduleSectionTab === 'safety' || moduleSectionTab === 'all') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono font-bold text-xs uppercase text-slate-700 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>
                      Protocolos de Prevención de Riesgos y EPP (LGPRLT D.L. 254 / D.E. 86):
                    </span>
                  </h4>
                  <span className="text-[10.5px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    MTPS Homologado
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {(activeModule.safetyProtocols || []).map((protocol, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-amber-50/50 p-3.5 rounded-2xl border border-amber-200/80 flex items-start gap-3 text-xs"
                    >
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="font-mono font-bold text-[10px] text-amber-900 block">
                          Protocolo Obligatorio #{pIdx + 1}:
                        </span>
                        <p className="text-slate-800 leading-relaxed text-[11.5px]">{protocol}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {activeModule.safetyProcedures && activeModule.safetyProcedures.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono font-bold text-slate-700 uppercase block">
                      Procedimientos Específicos y Equipos de Protección Personal (EPP):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModule.safetyProcedures.map((proc, prIdx) => (
                        <div
                          key={prIdx}
                          className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5 text-xs"
                        >
                          <h5 className="font-bold text-slate-900 text-xs">{proc.title}</h5>
                          <p className="text-[11px] text-slate-600 leading-relaxed">{proc.protocol}</p>
                          <div className="pt-1 flex flex-wrap gap-1">
                            {proc.epp.map((item, eIdx) => (
                              <span
                                key={eIdx}
                                className="text-[9.5px] font-mono bg-white text-slate-700 border border-slate-200 px-1.5 py-0.5 rounded"
                              >
                                🦺 {item}
                              </span>
                            ))}
                          </div>
                          <span className="text-[9.5px] font-mono text-slate-400 block pt-1">
                            Ref: {proc.normativeRef}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* Sección E: Simulador de Autoevaluación Formativa          */}
            {/* ======================================================== */}
            {(moduleSectionTab === 'quiz' || moduleSectionTab === 'all') && (
              <div className="space-y-4 pt-2">
                {/* Barra de Progreso y Puntaje del Quiz */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-4 border border-blue-900 flex items-center justify-between flex-wrap gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <h4 className="font-extrabold text-sm text-white">
                        Simulador Formativo: Módulo {activeModule.number}
                      </h4>
                    </div>
                    <p className="text-slate-300 text-xs">
                      Responde los reactivos para validar tus competencias antes de la certificación.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                        Puntaje Obtenido
                      </span>
                      <span className="text-lg font-black font-mono text-emerald-400">
                        {moduleCorrectCount} / {moduleQuestions.length}
                      </span>
                    </div>

                    {moduleAnsweredCount > 0 && (
                      <button
                        type="button"
                        onClick={handleResetModuleQuiz}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer border border-white/20"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reiniciar</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Lista de Preguntas */}
                <div className="space-y-4">
                  {moduleQuestions.map((q, qIdx) => {
                    const selected = quizAnswers[q.id];
                    const isAnswered = selected !== undefined;
                    const isCorrect = selected === q.correctAnswer;

                    return (
                      <div
                        key={q.id}
                        className={`bg-white rounded-2xl border p-4 sm:p-5 transition-all space-y-3.5 ${
                          !isAnswered
                            ? 'border-slate-200'
                            : isCorrect
                            ? 'border-emerald-300 bg-emerald-50/20'
                            : 'border-rose-300 bg-rose-50/20'
                        }`}
                      >
                        {/* Enunciado y Header */}
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            Reactivo #{qIdx + 1} • {q.id}
                          </span>
                          {isAnswered && (
                            <span
                              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                                isCorrect
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {isCorrect ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>Correcto (+1)</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-3 h-3" />
                                  <span>Incorrecto</span>
                                </>
                              )}
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                          {q.statement || q.question}
                        </p>

                        {/* Opciones A, B, C, D */}
                        <div className="space-y-2">
                          {(['A', 'B', 'C', 'D'] as const).map((key) => {
                            const optionText = q.options[key];
                            const isThisOptionSelected = selected === key;
                            const isThisOptionCorrect = q.correctAnswer === key;

                            let optionClasses =
                              'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';

                            if (isAnswered) {
                              if (isThisOptionCorrect) {
                                optionClasses =
                                  'bg-emerald-100 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                              } else if (isThisOptionSelected && !isCorrect) {
                                optionClasses =
                                  'bg-rose-100 border-rose-300 text-rose-950 ring-1 ring-rose-300';
                              } else {
                                optionClasses = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                              }
                            }

                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => handleSelectQuizOption(q.id, key)}
                                className={`w-full text-left p-3 rounded-xl border text-xs flex items-start gap-2.5 transition-all cursor-pointer ${optionClasses}`}
                              >
                                <span
                                  className={`w-5 h-5 rounded-md font-mono text-[10.5px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                                    isAnswered && isThisOptionCorrect
                                      ? 'bg-emerald-600 text-white'
                                      : isAnswered && isThisOptionSelected && !isCorrect
                                      ? 'bg-rose-600 text-white'
                                      : 'bg-white border border-slate-300 text-slate-700'
                                  }`}
                                >
                                  {key}
                                </span>
                                <span className="leading-relaxed flex-1">{optionText}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Retroalimentación Inmediata y Fundamentación */}
                        {isAnswered && (
                          <div
                            className={`p-3.5 rounded-xl border space-y-2 text-xs transition-all ${
                              isCorrect
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                                : 'bg-rose-50 border-rose-200 text-rose-950'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 font-bold">
                              {isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <AlertIcon className="w-4 h-4 text-rose-600" />
                              )}
                              <span>
                                {isCorrect
                                  ? '¡Excelente! Respuesta técnicamente precisa.'
                                  : `Respuesta incorrecta. La opción correcta es la ${q.correctAnswer}.`}
                              </span>
                            </div>

                            <p className="text-slate-700 leading-relaxed text-[11.5px]">
                              {q.explanation}
                            </p>

                            <div className="pt-1.5 border-t border-slate-200/60 flex items-start gap-1.5 text-[11px] text-slate-600 font-mono">
                              <Scale className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>
                                <strong>Fundamento Legal / Técnico:</strong>{' '}
                                {q.legalBasis || q.legalOrTechnicalBasis || q.technicalStandard}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mini-componente de icono de alerta para feedback
const AlertIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default TechnicalCoursesView;
