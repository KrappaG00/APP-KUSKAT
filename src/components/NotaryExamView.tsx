import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Scale,
  Scroll,
  BookMarked,
  Award,
  FileText,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Search,
  HelpCircle,
  Sparkles,
  Gavel,
  ShieldCheck,
  Brain,
  Filter,
  Clock,
  Timer,
  Check,
  Printer,
  Copy,
  ExternalLink,
  Bookmark,
  BookOpen,
  Layers,
  ListChecks,
  ArrowRight,
  ChevronRight,
  Flag,
  XCircle,
  Info,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

import {
  NotaryQuestion,
  NOTARY_EXAM_QUESTIONS,
  NOTARY_VADEMECUM_DEADLINES,
  NOTARY_JURISPRUDENCE_RECORDS,
  NOTARY_SPECIAL_PROTOCOLS,
  NOTARY_THEMATIC_UNITS,
} from '../data/notaryExamData';
import { ModulePaginationBar } from './ModulePaginationBar';

export type { NotaryQuestion };
export { NOTARY_EXAM_QUESTIONS };

export const NOTARY_SUBCATEGORIES = [
  { id: 'all', name: 'Todas las Materias', icon: '📜' },
  { id: 'notarial-puro', name: 'Notarial Puro', icon: '⚖️' },
  { id: 'lenjvod', name: 'LENJVOD', icon: '📂' },
  { id: 'sucesiones', name: 'Sucesiones', icon: '🏛️' },
  { id: 'contratos', name: 'Contratos', icon: '📑' },
  { id: 'mercantil', name: 'Mercantil', icon: '🏢' },
];

export const NotaryExamView: React.FC = () => {
  // Pestaña principal activa
  const [activeTab, setActiveTab] = useState<'study-units' | 'jurisprudence' | 'interactive-study' | 'simulator'>('interactive-study');

  // =========================================================================
  // ESTADO: PESTAÑA 1 (EJES SUSTANTIVOS & VADEMÉCUM)
  // =========================================================================
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit-not-01');
  const [deadlineAreaFilter, setDeadlineAreaFilter] = useState<string>('all');
  const [searchDeadline, setSearchDeadline] = useState<string>('');

  // =========================================================================
  // ESTADO: PESTAÑA 2 (JURISPRUDENCIA CSJ)
  // =========================================================================
  const [searchPrecedent, setSearchPrecedent] = useState<string>('');

  // =========================================================================
  // ESTADO: PESTAÑA 3 (MODO ESTUDIO INTERACTIVO - FEEDBACK INMEDIATO ESTILO IURISACADEMIA)
  // =========================================================================
  const [studyCategory, setStudyCategory] = useState<string>('all');
  const [studySearchQuery, setStudySearchQuery] = useState<string>('');
  const [studyCurrentPage, setStudyCurrentPage] = useState<number>(1);
  const [studyItemsPerPage, setStudyItemsPerPage] = useState<number>(10);
  const [studyUserAnswers, setStudyUserAnswers] = useState<Record<string, string>>({});
  const [studyBookmarkedQuestions, setStudyBookmarkedQuestions] = useState<Record<string, boolean>>({});
  const [copiedQuestionId, setCopiedQuestionId] = useState<string | null>(null);

  // =========================================================================
  // ESTADO: PESTAÑA 4 (SIMULACRO OFICIAL CSJ - EXAMEN VIRTUAL CRONOMETRADO)
  // =========================================================================
  const [simConfig, setSimConfig] = useState<{
    count: number;
    category: string;
    useTimer: boolean;
  }>({
    count: 50,
    category: 'all',
    useTimer: true,
  });

  const [simStarted, setSimStarted] = useState<boolean>(false);
  const [simQuestions, setSimQuestions] = useState<NotaryQuestion[]>([]);
  const [simAnswers, setSimAnswers] = useState<Record<string, string>>({});
  const [simFlagged, setSimFlagged] = useState<Record<string, boolean>>({});
  const [simCurrentIndex, setSimCurrentIndex] = useState<number>(0);
  const [simTimeRemaining, setSimTimeRemaining] = useState<number>(0);
  const [simInitialTime, setSimInitialTime] = useState<number>(0);
  const [simFinished, setSimFinished] = useState<boolean>(false);
  const [simFilterSolution, setSimFilterSolution] = useState<'all' | 'correct' | 'incorrect'>('all');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Cronómetro del Simulacro
  useEffect(() => {
    if (simStarted && !simFinished && simConfig.useTimer && simTimeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setSimTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinishSimulator();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [simStarted, simFinished, simConfig.useTimer, simTimeRemaining]);

  // Iniciar Simulacro CSJ
  const handleStartSimulator = () => {
    let pool = NOTARY_EXAM_QUESTIONS;
    if (simConfig.category !== 'all') {
      pool = NOTARY_EXAM_QUESTIONS.filter((q) => q.category === simConfig.category);
    }

    // Barajar aleatoriamente como en IurisAcademia / CSJ
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(simConfig.count, pool.length));

    // Tiempo oficial promedio: 1.5 min (90s) por reactivo
    const totalSeconds = selected.length * 90;

    setSimQuestions(selected);
    setSimAnswers({});
    setSimFlagged({});
    setSimCurrentIndex(0);
    setSimInitialTime(totalSeconds);
    setSimTimeRemaining(totalSeconds);
    setSimStarted(true);
    setSimFinished(false);
  };

  const handleFinishSimulator = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSimFinished(true);
  };

  const handleResetSimulator = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSimStarted(false);
    setSimFinished(false);
    setSimAnswers({});
    setSimFlagged({});
    setSimCurrentIndex(0);
  };

  // Filtrado de preguntas en Modo Estudio
  const filteredStudyQuestions = useMemo(() => {
    return NOTARY_EXAM_QUESTIONS.filter((q) => {
      const matchCat = studyCategory === 'all' || q.category === studyCategory;
      if (!matchCat) return false;

      if (!studySearchQuery.trim()) return true;
      const qText = `${q.topic} ${q.legalBasis} ${q.statement} ${q.explanation} ${q.csjPrecedent || ''}`.toLowerCase();
      return qText.includes(studySearchQuery.toLowerCase());
    });
  }, [studyCategory, studySearchQuery]);

  const studyTotalPages = Math.max(1, Math.ceil(filteredStudyQuestions.length / studyItemsPerPage));
  const validStudyCurrentPage = Math.min(Math.max(1, studyCurrentPage), studyTotalPages);

  const paginatedStudyQuestions = useMemo(() => {
    const start = (validStudyCurrentPage - 1) * studyItemsPerPage;
    return filteredStudyQuestions.slice(start, start + studyItemsPerPage);
  }, [filteredStudyQuestions, validStudyCurrentPage, studyItemsPerPage]);

  // Estadísticas del Modo Estudio
  const studyAnsweredCount = Object.keys(studyUserAnswers).length;
  const studyCorrectCount = Object.entries(studyUserAnswers).reduce((acc, [qid, key]) => {
    const q = NOTARY_EXAM_QUESTIONS.find((item) => item.id === qid);
    return acc + (q && q.correctKey === key ? 1 : 0);
  }, 0);
  const studyScorePct = studyAnsweredCount > 0 ? Math.round((studyCorrectCount / studyAnsweredCount) * 100) : 0;

  // Estadísticas del Simulacro Finalizado
  const simResults = useMemo(() => {
    if (!simFinished || simQuestions.length === 0) return null;

    let correct = 0;
    const byCategory: Record<string, { total: number; correct: number }> = {
      'notarial-puro': { total: 0, correct: 0 },
      'lenjvod': { total: 0, correct: 0 },
      'sucesiones': { total: 0, correct: 0 },
      'contratos': { total: 0, correct: 0 },
      'mercantil': { total: 0, correct: 0 },
    };

    simQuestions.forEach((q) => {
      const cat = q.category || 'notarial-puro';
      if (!byCategory[cat]) byCategory[cat] = { total: 0, correct: 0 };
      byCategory[cat].total += 1;

      if (simAnswers[q.id] === q.correctKey) {
        correct += 1;
        byCategory[cat].correct += 1;
      }
    });

    const total = simQuestions.length;
    const scorePct = Math.round((correct / total) * 100);
    const scoreGrade = (scorePct / 10).toFixed(1);
    const isApproved = scorePct >= 70; // Umbral oficial de suficiencia CSJ
    const timeSpent = simInitialTime - simTimeRemaining;

    return {
      total,
      correct,
      incorrect: total - correct,
      scorePct,
      scoreGrade,
      isApproved,
      timeSpent,
      byCategory,
    };
  }, [simFinished, simQuestions, simAnswers, simInitialTime, simTimeRemaining]);

  // Copiar fundamento jurídico
  const handleCopyLegalBasis = (q: NotaryQuestion) => {
    const textToCopy = `Caso Notarial: ${q.topic}\nBase Legal: ${q.legalBasis}\nFundamentación: ${q.explanation}\nPrecedente CSJ: ${q.csjPrecedent || 'N/A'}\nFuente: KUSKAT & IurisAcademia`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedQuestionId(q.id);
    setTimeout(() => setCopiedQuestionId(null), 2500);
  };

  // Formato de tiempo mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Filtrado de Vademécum
  const filteredDeadlines = useMemo(() => {
    return NOTARY_VADEMECUM_DEADLINES.filter((d) => {
      const matchArea = deadlineAreaFilter === 'all' || d.area === deadlineAreaFilter;
      if (!matchArea) return false;
      if (!searchDeadline.trim()) return true;
      const text = `${d.title} ${d.deadline} ${d.legalBasis} ${d.consequence} ${d.practicalAdvice}`.toLowerCase();
      return text.includes(searchDeadline.toLowerCase());
    });
  }, [deadlineAreaFilter, searchDeadline]);

  // Filtrado de Precedentes
  const filteredPrecedents = useMemo(() => {
    return NOTARY_JURISPRUDENCE_RECORDS.filter((p) => {
      if (!searchPrecedent.trim()) return true;
      const text = `${p.refNumber} ${p.court} ${p.subject} ${p.legalIssue} ${p.ratioDecidendi} ${p.keyRule}`.toLowerCase();
      return text.includes(searchPrecedent.toLowerCase());
    });
  }, [searchPrecedent]);

  // Unidad actual seleccionada
  const activeUnit = useMemo(() => {
    return NOTARY_THEMATIC_UNITS.find((u) => u.id === selectedUnitId) || NOTARY_THEMATIC_UNITS[0];
  }, [selectedUnitId]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans-ui text-[#111625]">
      {/* ==================================================================== */}
      {/* 1. BANNER PRINCIPAL CORPORATIVO CSJ & INSPIRACIÓN IURISACADEMIA */}
      {/* ==================================================================== */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-2xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#C59B27]/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132A5C] text-[#C59B27] text-xs font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30">
              <Scale className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Corte Suprema de Justicia (CSJ) • Sección del Notariado</span>
            </div>

            <span className="text-[11px] font-mono-exam text-[#94A3B8] bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
              200 Casos Prácticos Oficiales
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold tracking-tight text-white leading-tight">
              Examen de Suficiencia Notarial de El Salvador
            </h1>
            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-3xl leading-relaxed mt-1.5">
              Plataforma integral de preparación para la autorización del ejercicio notarial, inspirada en las mejores
              prácticas pedagógicas de <strong>IurisAcademia (IurisCaeli)</strong> y en las resoluciones vinculantes de
              la <strong>Sala de lo Civil</strong> y <strong>Corte Plena de la CSJ</strong>.
            </p>
          </div>

          {/* Caja Informativa de Recurso Aliado: IurisAcademia */}
          <div className="bg-[#132A5C]/80 border border-[#C59B27]/30 rounded-xl p-3 sm:p-4 text-xs text-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#FAF9F5] font-semibold block">
                  Metodología de Estudio & Práctica Notarial:
                </strong>
                <span>
                  Reforzado con la estructura temática de <strong>IurisAcademia</strong> (modo estudio con fundamento inmediato
                  y modo simulacro cronometrado real CSJ).
                </span>
              </div>
            </div>

            <a
              href="https://examen-notariado.iuriscaeli.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C59B27] hover:bg-[#D4AF37] text-[#07132B] font-bold text-xs transition-colors shrink-0 font-mono-exam"
              title="Abrir IurisAcademia en nueva pestaña"
            >
              <span>Visitar IurisAcademia</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* NAVEGACIÓN PRINCIPAL DE 4 PESTAÑAS */}
          <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
            <button
              onClick={() => setActiveTab('study-units')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
                activeTab === 'study-units'
                  ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-xs ring-2 ring-[#C59B27]'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#C59B27]" />
              <span>1. Ejes Sustantivos & Vademécum</span>
            </button>

            <button
              onClick={() => setActiveTab('jurisprudence')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
                activeTab === 'jurisprudence'
                  ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-xs ring-2 ring-[#C59B27]'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <Gavel className="w-4 h-4 text-[#C59B27]" />
              <span>2. Jurisprudencia Vinculante CSJ</span>
            </button>

            <button
              onClick={() => setActiveTab('interactive-study')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
                activeTab === 'interactive-study'
                  ? 'bg-[#C59B27] text-[#07132B] font-black shadow-md'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <Brain className="w-4 h-4 text-[#07132B]" />
              <span>3. Modo Estudio (Feedback Inmediato)</span>
            </button>

            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
                activeTab === 'simulator'
                  ? 'bg-emerald-500 text-[#07132B] font-black shadow-md'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <Timer className="w-4 h-4 text-[#C59B27]" />
              <span>4. Simulacro Oficial CSJ (Cronometrado)</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* PESTAÑA 1: EJES SUSTANTIVOS & VADEMÉCUM NOTARIAL */}
      {/* ==================================================================== */}
      {activeTab === 'study-units' && (
        <div className="space-y-6">
          {/* Selector de Unidades Temáticas */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] p-4 shadow-corporate-subtle space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono-exam font-bold text-xs text-[#0B1B3D] uppercase flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#C59B27]" />
                Unidades Curriculares Oficiales de Preparación Notarial
              </span>
              <span className="text-[11px] font-mono-exam text-[#64748B]">
                Cumplimiento estricto: Mínimo 500 palabras y 5 ejemplos por tema
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {NOTARY_THEMATIC_UNITS.map((unit) => {
                const isSelected = unit.id === selectedUnitId;
                return (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnitId(unit.id)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer text-xs ${
                      isSelected
                        ? 'bg-[#0B1B3D] border-[#0B1B3D] text-white shadow-sm'
                        : 'bg-[#FAF9F5] border-[#E5E3D8] text-[#334155] hover:bg-white'
                    }`}
                  >
                    <span className={`block font-mono-exam font-bold text-[10px] mb-1 ${
                      isSelected ? 'text-[#C59B27]' : 'text-[#64748B]'
                    }`}>
                      Tema #{unit.number}
                    </span>
                    <strong className="block font-editorial line-clamp-2 leading-tight">
                      {unit.title}
                    </strong>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detalle de la Unidad Seleccionada */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] p-6 shadow-corporate-subtle space-y-6">
            <div className="border-b border-[#E5E3D8] pb-4 space-y-1.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#FAF9F5] text-[#0B1B3D] border border-[#E5E3D8] text-xs font-mono-exam font-bold">
                  Tema #{activeUnit.number} • {activeUnit.legalFocus}
                </span>
                <span className="text-xs font-mono-exam text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-bold">
                  ✓ {activeUnit.content.trim().split(/\s+/).length} palabras • 5 ejemplos prácticos
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-editorial font-bold text-[#111625]">
                {activeUnit.title}
              </h2>
            </div>

            {/* Texto Doctrinario Sustantivo */}
            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-[#334155] whitespace-pre-line bg-[#FAF9F5] p-5 rounded-xl border border-[#E5E3D8]">
              {activeUnit.content}
            </div>

            {/* Los 5 Ejemplos Concretos */}
            <div className="space-y-4 pt-2">
              <h3 className="font-editorial text-base sm:text-lg font-bold text-[#0B1B3D] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C59B27]" />
                5 Casos de Aplicación Notarial y Redacción Cartular
              </h3>

              <div className="grid grid-cols-1 gap-3.5">
                {activeUnit.examples.map((ex) => (
                  <div
                    key={ex.number}
                    className="p-4 rounded-xl border border-[#E5E3D8] bg-white hover:border-[#C59B27]/60 shadow-corporate-subtle space-y-2 transition-all"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                      <span className="font-mono-exam font-bold text-[#0B1B3D] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8]">
                        Ejemplo {ex.number}: {ex.title}
                      </span>
                      <span className="text-[11px] font-mono-exam text-[#C59B27] font-semibold">
                        Base: {ex.legalArticle}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {ex.description}
                    </p>

                    <div className="bg-[#FAF9F5] p-2.5 rounded-lg border border-[#E5E3D8] text-[11px] text-[#334155] flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1B3D] font-mono-exam">Tip de Redacción & Examen CSJ: </strong>
                        <span>{ex.notarialDraftTip}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VADEMÉCUM DE PLAZOS NOTARIALES FATALES */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] p-6 shadow-corporate-subtle space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E3D8]">
              <div>
                <h3 className="font-editorial text-lg font-bold text-[#111625] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C59B27]" />
                  Vademécum de Plazos Fatales y Obligaciones Notariales
                </h3>
                <p className="text-xs text-[#64748B]">
                  Compendio legal para resolver preguntas de plazos en el examen de suficiencia CSJ
                </p>
              </div>

              {/* Filtro y Búsqueda */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchDeadline}
                    onChange={(e) => setSearchDeadline(e.target.value)}
                    placeholder="Buscar plazo o ley..."
                    className="pl-8 pr-3 py-1.5 rounded-lg border border-[#E5E3D8] text-xs bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0B1B3D]"
                  />
                </div>

                <select
                  value={deadlineAreaFilter}
                  onChange={(e) => setDeadlineAreaFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg border border-[#E5E3D8] text-xs bg-[#FAF9F5] text-[#334155] focus:outline-none"
                >
                  <option value="all">Todas las Áreas</option>
                  <option value="Ley de Notariado">Ley de Notariado</option>
                  <option value="LENJVOD">LENJVOD</option>
                  <option value="Código Civil">Código Civil</option>
                  <option value="Código de Comercio">Código de Comercio</option>
                  <option value="CPCM / Registral">CPCM / Registral</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDeadlines.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-[#E5E3D8] bg-[#FAF9F5] space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <strong className="font-editorial text-sm text-[#0B1B3D]">{item.title}</strong>
                    <span className="text-[10px] font-mono-exam px-2 py-0.5 rounded bg-white border border-[#E5E3D8] text-[#C59B27] font-bold">
                      {item.area}
                    </span>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E3D8] font-mono-exam text-xs text-[#0B1B3D] font-bold">
                    ⏱️ Plazo: {item.deadline}
                  </div>

                  <p className="text-[#475569]">
                    <strong className="text-[#111625]">Base:</strong> {item.legalBasis}
                  </p>

                  <p className="text-[#9E472A]">
                    <strong>Consecuencia:</strong> {item.consequence}
                  </p>

                  <div className="pt-1 text-[11px] text-[#334155] border-t border-[#EAE8DD]">
                    <span className="font-semibold text-[#0B1B3D]">Recomendación práctica: </span>
                    {item.practicalAdvice}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROTOCOLOS ESPECIALES DE COMPARECENCIA */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] p-6 shadow-corporate-subtle space-y-4">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
                Protocolos Notariales ante Comparecencias Complejas
              </h3>
              <p className="text-xs text-[#64748B]">
                Reglas formales taxativas para evitar nulidades instrumentales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {NOTARY_SPECIAL_PROTOCOLS.map((prot) => (
                <div
                  key={prot.id}
                  className="p-4 rounded-xl border border-[#E5E3D8] bg-[#FAF9F5] space-y-2 text-xs"
                >
                  <strong className="font-editorial text-sm text-[#0B1B3D] block">
                    {prot.title}
                  </strong>
                  <p className="text-[#475569]">{prot.circumstance}</p>

                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E3D8] space-y-1">
                    <strong className="font-mono-exam text-[11px] text-[#0B1B3D] block">
                      Procedimiento obligatorio ({prot.legalBasis}):
                    </strong>
                    <p className="text-[#334155]">{prot.requiredProcedure}</p>
                  </div>

                  <div className="text-[11px] text-[#9E472A] bg-rose-50 p-2 rounded border border-rose-200">
                    <strong>Error común sancionable: </strong>
                    {prot.commonErrors}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 2: JURISPRUDENCIA VINCULANTE CSJ */}
      {/* ==================================================================== */}
      {activeTab === 'jurisprudence' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono-exam font-bold text-xs text-[#0B1B3D] uppercase block">
                Criterios de la Sala de lo Civil y Corte Plena de la CSJ:
              </span>
              <span className="text-xs text-[#64748B]">
                Doctrina jurisprudencial salvadoreña vinculante y líneas de examen notarial
              </span>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchPrecedent}
                onChange={(e) => setSearchPrecedent(e.target.value)}
                placeholder="Buscar sentencia o tema..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#E5E3D8] text-xs bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0B1B3D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPrecedents.map((jur) => (
              <div
                key={jur.id}
                className="bg-white p-5 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle space-y-3 text-xs"
              >
                <div className="flex items-center justify-between gap-2 border-b border-[#EAE8DD] pb-2">
                  <span className="font-mono-exam font-bold text-[10px] bg-[#0B1B3D] text-[#FAF9F5] px-2.5 py-0.5 rounded">
                    {jur.refNumber}
                  </span>
                  <span className="text-[10px] font-mono-exam text-[#C59B27] font-bold">
                    {jur.court}
                  </span>
                </div>

                <h4 className="font-editorial text-sm sm:text-base font-bold text-[#111625] leading-snug">
                  {jur.subject}
                </h4>

                <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8] space-y-1">
                  <strong className="text-[11px] font-mono-exam text-[#0B1B3D] block">Problema Jurídico:</strong>
                  <p className="text-[#475569]">{jur.legalIssue}</p>
                </div>

                <p className="text-[#334155] leading-relaxed">
                  <strong className="text-[#0B1B3D]">Ratio Decidendi: </strong>
                  {jur.ratioDecidendi}
                </p>

                <div className="bg-amber-50/70 border border-amber-200/80 p-2.5 rounded-lg text-[11px] text-amber-950">
                  <strong className="block font-mono-exam font-bold mb-0.5">Regla Notarial Aplicable:</strong>
                  {jur.keyRule}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 3: MODO ESTUDIO INTERACTIVO (FEEDBACK INMEDIATO ESTILO IURISACADEMIA) */}
      {/* ==================================================================== */}
      {activeTab === 'interactive-study' && (
        <div className="space-y-6">
          {/* BARRA DE FILTROS Y BÚSQUEDA */}
          <div className="bg-white rounded-xl p-4 border border-[#E5E3D8] shadow-corporate-subtle space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Buscador */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={studySearchQuery}
                  onChange={(e) => {
                    setStudySearchQuery(e.target.value);
                    setStudyCurrentPage(1);
                  }}
                  placeholder="Buscar por artículo, término (ej: 'remedición', 'Art. 9', 'DUI', 'SAS', 'testamento')..."
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#E5E3D8] text-xs sm:text-sm bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#0B1B3D]/20"
                />
              </div>

              {/* Botón de limpiar respuestas */}
              <button
                type="button"
                onClick={() => setStudyUserAnswers({})}
                className="px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 font-mono-exam shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpiar Respuestas ({studyAnsweredCount})</span>
              </button>
            </div>

            {/* Subcategorías por Materia */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-1 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                Materia:
              </span>
              {NOTARY_SUBCATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setStudyCategory(cat.id);
                    setStudyCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    studyCategory === cat.id
                      ? 'bg-[#0B1B3D] text-white shadow-sm font-bold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Micro-dashboard de aciertos en modo estudio */}
            {studyAnsweredCount > 0 && (
              <div className="pt-2 border-t border-[#EAE8DD] flex items-center justify-between text-xs font-mono-exam text-[#475569]">
                <span>
                  Respondidas: <strong>{studyAnsweredCount}</strong> de {filteredStudyQuestions.length}
                </span>
                <span>
                  Aciertos: <strong className="text-emerald-700">{studyCorrectCount}</strong> ({studyScorePct}%)
                </span>
              </div>
            )}
          </div>

          {/* Paginación Superior */}
          <ModulePaginationBar
            currentPage={validStudyCurrentPage}
            totalPages={studyTotalPages}
            totalItems={filteredStudyQuestions.length}
            itemsPerPage={studyItemsPerPage}
            onPageChange={setStudyCurrentPage}
            onItemsPerPageChange={(size) => {
              setStudyItemsPerPage(size);
              setStudyCurrentPage(1);
            }}
            itemLabel="reactivos en modo estudio"
          />

          {/* Listado de Preguntas con Feedback Inmediato */}
          <div className="space-y-4">
            {paginatedStudyQuestions.map((q, idx) => {
              const globalIndex = (validStudyCurrentPage - 1) * studyItemsPerPage + idx + 1;
              const selectedOpt = studyUserAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correctKey;
              const isBookmarked = studyBookmarkedQuestions[q.id] || false;

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-xl border transition-all p-5 space-y-3.5 font-sans-ui shadow-corporate-subtle ${
                    isAnswered
                      ? isCorrect
                        ? 'border-emerald-300 ring-1 ring-emerald-200/60'
                        : 'border-rose-300 ring-1 ring-rose-200/60'
                      : 'border-[#E5E3D8]'
                  }`}
                >
                  {/* Encabezado del Reactivo */}
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAE8DD] flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-[#0B1B3D] text-[#FAF9F5] font-mono-exam font-bold text-xs flex items-center justify-center">
                        #{globalIndex}
                      </span>
                      <strong className="font-mono-exam text-[#0B1B3D]">{q.topic}</strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono-exam bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8] text-[#64748B]">
                        {q.legalBasis}
                      </span>

                      <button
                        onClick={() =>
                          setStudyBookmarkedQuestions((prev) => ({
                            ...prev,
                            [q.id]: !prev[q.id],
                          }))
                        }
                        className={`p-1 rounded hover:bg-slate-100 transition-colors cursor-pointer ${
                          isBookmarked ? 'text-amber-500' : 'text-slate-400'
                        }`}
                        title={isBookmarked ? 'Pregunta guardada para repaso' : 'Marcar para repaso'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Enunciado */}
                  <p className="text-sm sm:text-base font-semibold text-[#111625] leading-relaxed">
                    {q.statement}
                  </p>

                  {/* Opciones con selección interactiva */}
                  <div className="space-y-2 pt-1">
                    {q.options.map((opt) => {
                      const isOptionSelected = selectedOpt === opt.key;
                      const isOptionCorrect = opt.key === q.correctKey;

                      let style = 'bg-[#FAF9F5] border-[#E5E3D8] hover:bg-[#F2F1EA] text-[#111625]';
                      let badge = 'bg-white text-[#475569] border-[#E5E3D8]';

                      if (isAnswered) {
                        if (isOptionCorrect) {
                          style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold shadow-xs';
                          badge = 'bg-emerald-600 text-white border-transparent font-bold';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          style = 'bg-rose-50 border-rose-300 text-rose-950';
                          badge = 'bg-rose-600 text-white border-transparent font-bold';
                        } else {
                          style = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-70';
                        }
                      }

                      return (
                        <div
                          key={opt.key}
                          onClick={() => {
                            setStudyUserAnswers((prev) => ({ ...prev, [q.id]: opt.key }));
                          }}
                          className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer text-xs sm:text-sm ${style}`}
                        >
                          <span
                            className={`w-6 h-6 rounded flex items-center justify-center font-mono-exam font-bold shrink-0 text-xs border ${badge}`}
                          >
                            {opt.key}
                          </span>
                          <span className="flex-1 pt-0.5">{opt.text}</span>
                          {isAnswered && isOptionCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          )}
                          {isAnswered && isOptionSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Retroalimentación Inmediata al responder (Estilo IurisAcademia) */}
                  {isAnswered && (
                    <div
                      className={`mt-3 p-4 rounded-xl border text-xs space-y-2.5 animate-fade-in ${
                        isCorrect
                          ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50/50 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 font-bold font-mono-exam">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-800">¡Respuesta Correcta!</span>
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-4 h-4 text-rose-600" />
                              <span className="text-rose-800">Respuesta Incorrecta (Opción correcta: {q.correctKey})</span>
                            </>
                          )}
                        </div>

                        {/* Botón de copiar fundamento legal */}
                        <button
                          onClick={() => handleCopyLegalBasis(q)}
                          className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-[#0B1B3D] text-[11px] font-mono-exam font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                          title="Copiar fundamento legal para tus apuntes"
                        >
                          {copiedQuestionId === q.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700">Copiado</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copiar Fundamento</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-[#334155] leading-relaxed pl-1 space-y-1.5">
                        <p>
                          <strong className="text-[#0B1B3D] font-mono-exam">Fundamentación Legal y Doctrinal: </strong>
                          {q.explanation}
                        </p>
                        {q.csjPrecedent && (
                          <div className="bg-white/80 p-2.5 rounded-lg border border-[#E5E3D8] text-[11px] text-[#0B1B3D]">
                            <strong>Precedente de la CSJ: </strong>
                            <span>{q.csjPrecedent}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Paginación Inferior */}
          <ModulePaginationBar
            currentPage={validStudyCurrentPage}
            totalPages={studyTotalPages}
            totalItems={filteredStudyQuestions.length}
            itemsPerPage={studyItemsPerPage}
            onPageChange={setStudyCurrentPage}
            onItemsPerPageChange={(size) => {
              setStudyItemsPerPage(size);
              setStudyCurrentPage(1);
            }}
            itemLabel="reactivos en modo estudio"
          />
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 4: SIMULACRO OFICIAL CSJ (EXAMEN VIRTUAL CRONOMETRADO) */}
      {/* ==================================================================== */}
      {activeTab === 'simulator' && (
        <div className="space-y-6">
          {!simStarted ? (
            /* CONFIGURADOR DEL SIMULACRO OFICIAL */
            <div className="bg-white rounded-2xl border border-[#E5E3D8] p-6 sm:p-8 shadow-corporate-subtle space-y-6">
              <div className="border-b border-[#E5E3D8] pb-4 space-y-1">
                <span className="font-mono-exam text-xs font-bold text-[#C59B27] uppercase tracking-wider block">
                  Emulador de Examen de Suficiencia CSJ
                </span>
                <h2 className="text-xl sm:text-2xl font-editorial font-bold text-[#0B1B3D]">
                  Configuración del Simulacro de Evaluación Notarial
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Emula el examen virtual oficial de la Corte Suprema de Justicia bajo condiciones cronometradas
                  (1.5 minutos de promedio por reactivo). No se muestran respuestas durante el desarrollo.
                </p>
              </div>

              {/* Parámetros de Selección */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Cantidad de Reactivos */}
                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] space-y-2">
                  <label className="block text-xs font-mono-exam font-bold text-[#0B1B3D] uppercase">
                    1. Número de Reactivos:
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { count: 25, label: '25 Q' },
                      { count: 50, label: '50 Q' },
                      { count: 100, label: '100 Q' },
                    ].map((opt) => (
                      <button
                        key={opt.count}
                        type="button"
                        onClick={() => setSimConfig((prev) => ({ ...prev, count: opt.count }))}
                        className={`py-2 rounded-lg text-xs font-mono-exam font-bold transition-all cursor-pointer ${
                          simConfig.count === opt.count
                            ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                            : 'bg-white border border-[#E5E3D8] text-[#475569] hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-[#64748B] block pt-1">
                    Oficial CSJ: 50 preguntas en jornadas regulares.
                  </span>
                </div>

                {/* Área Temática */}
                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] space-y-2">
                  <label className="block text-xs font-mono-exam font-bold text-[#0B1B3D] uppercase">
                    2. Área Temática:
                  </label>
                  <select
                    value={simConfig.category}
                    onChange={(e) => setSimConfig((prev) => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg border border-[#E5E3D8] text-xs bg-white text-[#111625] focus:outline-none focus:ring-1 focus:ring-[#0B1B3D]"
                  >
                    <option value="all">Todas las Materias (Interdisciplinario)</option>
                    <option value="notarial-puro">Derecho Notarial Puro</option>
                    <option value="lenjvod">Jurisdicción Voluntaria (LENJVOD)</option>
                    <option value="sucesiones">Derecho Sucesorio C.C.</option>
                    <option value="contratos">Contratación Civil & CPCM</option>
                    <option value="mercantil">Derecho Mercantil & Sociedades</option>
                  </select>
                  <span className="text-[10px] text-[#64748B] block pt-1">
                    Recomendado: Evaluación completa multidisiplinaria.
                  </span>
                </div>

                {/* Modo de Tiempo */}
                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] space-y-2">
                  <label className="block text-xs font-mono-exam font-bold text-[#0B1B3D] uppercase">
                    3. Temporizador Oficial:
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSimConfig((prev) => ({ ...prev, useTimer: true }))}
                      className={`py-2 rounded-lg text-xs font-mono-exam font-bold transition-all cursor-pointer ${
                        simConfig.useTimer
                          ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                          : 'bg-white border border-[#E5E3D8] text-[#475569]'
                      }`}
                    >
                      ⏱️ 1.5 min / Q
                    </button>
                    <button
                      type="button"
                      onClick={() => setSimConfig((prev) => ({ ...prev, useTimer: false }))}
                      className={`py-2 rounded-lg text-xs font-mono-exam font-bold transition-all cursor-pointer ${
                        !simConfig.useTimer
                          ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                          : 'bg-white border border-[#E5E3D8] text-[#475569]'
                      }`}
                    >
                      Sin Límite
                    </button>
                  </div>
                  <span className="text-[10px] text-[#64748B] block pt-1">
                    {simConfig.useTimer
                      ? `Tiempo total asignado: ${Math.round((simConfig.count * 90) / 60)} minutos.`
                      : 'Práctica a tu propio ritmo.'}
                  </span>
                </div>
              </div>

              {/* Botón de Inicio */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleStartSimulator}
                  className="px-6 py-3 rounded-xl bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer font-mono-exam"
                >
                  <span>Iniciar Simulacro Oficial CSJ</span>
                  <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                </button>
              </div>
            </div>
          ) : !simFinished ? (
            /* INTERFAZ DEL EXAMEN VIRTUAL ACTIVO (EMULADOR CSJ) */
            <div className="space-y-4">
              {/* Barra Superior Fija del Examen */}
              <div className="bg-[#0B1B3D] text-white p-4 rounded-xl border border-[#1A2E5A] shadow-corporate-card flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-[#07132B] flex items-center justify-center font-bold font-mono-exam">
                    {simCurrentIndex + 1}
                  </div>
                  <div>
                    <span className="text-xs font-mono-exam font-bold block">
                      Pregunta {simCurrentIndex + 1} de {simQuestions.length}
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">
                      Respondidas: {Object.keys(simAnswers).length} • Pendientes:{' '}
                      {simQuestions.length - Object.keys(simAnswers).length}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {simConfig.useTimer && (
                    <div
                      className={`px-3 py-1.5 rounded-lg font-mono-exam font-bold text-sm flex items-center gap-2 border ${
                        simTimeRemaining <= 300
                          ? 'bg-rose-900/80 text-rose-200 border-rose-600 animate-pulse'
                          : 'bg-[#132A5C] text-[#C59B27] border-[#C59B27]/30'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      <span>{formatTime(simTimeRemaining)}</span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      const currQ = simQuestions[simCurrentIndex];
                      setSimFlagged((prev) => ({ ...prev, [currQ.id]: !prev[currQ.id] }));
                    }}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono-exam flex items-center gap-1.5 cursor-pointer ${
                      simFlagged[simQuestions[simCurrentIndex]?.id]
                        ? 'bg-amber-400 text-amber-950 border-amber-300 font-bold'
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    }`}
                    title="Marcar pregunta para revisar luego"
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{simFlagged[simQuestions[simCurrentIndex]?.id] ? 'Marcada' : 'Marcar'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleFinishSimulator}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono-exam font-bold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    Entregar Examen
                  </button>
                </div>
              </div>

              {/* Grid de Navegación Rápida de Preguntas */}
              <div className="bg-white p-3 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                {simQuestions.map((q, idx) => {
                  const isCurrent = idx === simCurrentIndex;
                  const isAnswered = simAnswers[q.id] !== undefined;
                  const isFlagged = simFlagged[q.id] || false;

                  let btnStyle = 'bg-[#FAF9F5] border-[#E5E3D8] text-[#475569]';
                  if (isCurrent) {
                    btnStyle = 'bg-[#0B1B3D] text-white border-[#0B1B3D] ring-2 ring-[#C59B27] font-bold';
                  } else if (isFlagged) {
                    btnStyle = 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
                  } else if (isAnswered) {
                    btnStyle = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setSimCurrentIndex(idx)}
                      className={`w-7 h-7 rounded text-[11px] font-mono-exam border flex items-center justify-center shrink-0 cursor-pointer ${btnStyle}`}
                      title={`Ir a pregunta #${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Tarjeta de la Pregunta Activa */}
              {simQuestions[simCurrentIndex] && (
                <div className="bg-white rounded-xl border border-[#E5E3D8] p-6 shadow-corporate-subtle space-y-4">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAE8DD]">
                    <span className="font-mono-exam font-bold text-[#0B1B3D]">
                      Materia: {simQuestions[simCurrentIndex].topic}
                    </span>
                    <span className="text-[10px] font-mono-exam bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8] text-[#64748B]">
                      {simQuestions[simCurrentIndex].legalBasis}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg font-semibold text-[#111625] leading-relaxed">
                    {simQuestions[simCurrentIndex].statement}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {simQuestions[simCurrentIndex].options.map((opt) => {
                      const isSelected = simAnswers[simQuestions[simCurrentIndex].id] === opt.key;
                      return (
                        <div
                          key={opt.key}
                          onClick={() =>
                            setSimAnswers((prev) => ({
                              ...prev,
                              [simQuestions[simCurrentIndex].id]: opt.key,
                            }))
                          }
                          className={`flex items-start gap-3 p-3.5 rounded-lg border transition-all cursor-pointer text-xs sm:text-sm ${
                            isSelected
                              ? 'bg-[#0B1B3D] border-[#1A2E5A] text-white shadow-xs'
                              : 'bg-[#FAF9F5] border-[#E5E3D8] hover:bg-[#F2F1EA] text-[#111625]'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded flex items-center justify-center font-mono-exam font-bold shrink-0 text-xs border ${
                              isSelected
                                ? 'bg-white text-[#0B1B3D] border-transparent'
                                : 'bg-white text-[#475569] border-[#E5E3D8]'
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span className="flex-1 pt-0.5">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Botones de Navegación del Examen */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#EAE8DD]">
                    <button
                      type="button"
                      disabled={simCurrentIndex === 0}
                      onClick={() => setSimCurrentIndex((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-lg border border-[#E5E3D8] text-xs font-mono-exam font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                    >
                      ← Pregunta Anterior
                    </button>

                    <div className="text-xs font-mono-exam text-[#64748B]">
                      {simCurrentIndex + 1} / {simQuestions.length}
                    </div>

                    {simCurrentIndex < simQuestions.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => setSimCurrentIndex((prev) => Math.min(simQuestions.length - 1, prev + 1))}
                        className="px-4 py-2 rounded-lg bg-[#0B1B3D] text-[#FAF9F5] text-xs font-mono-exam font-bold hover:bg-[#132A5C] transition-colors cursor-pointer"
                      >
                        Siguiente Pregunta →
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleFinishSimulator}
                        className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-mono-exam font-bold hover:bg-emerald-500 transition-colors cursor-pointer"
                      >
                        Finalizar y Calificar
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* DICTAMEN OFICIAL & SOLUCIONARIO ANALÍTICO FINAL */
            <div className="space-y-6">
              {simResults && (
                <div className="bg-white rounded-2xl border-2 border-[#C59B27] p-6 sm:p-8 shadow-corporate-card space-y-6">
                  {/* Encabezado del Dictamen */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E3D8] pb-4">
                    <div>
                      <span className="text-xs font-mono-exam font-bold text-[#C59B27] uppercase tracking-wider block">
                        Corte Suprema de Justicia • Sección de Notariado
                      </span>
                      <h3 className="text-2xl font-editorial font-bold text-[#0B1B3D]">
                        Dictamen Oficial del Examen de Suficiencia Notarial
                      </h3>
                      <p className="text-xs text-[#64748B]">
                        Evaluación concluida el {new Date().toLocaleDateString('es-SV')} • Tiempo invertido:{' '}
                        {formatTime(simResults.timeSpent)}
                      </p>
                    </div>

                    <div className="text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-mono-exam font-bold uppercase tracking-wider ${
                          simResults.isApproved
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-rose-100 text-rose-800 border border-rose-300'
                        }`}
                      >
                        {simResults.isApproved
                          ? 'Aprobado Satisfactorio (Apto para Notario)'
                          : 'Requiere Estudio Doctrinal Profundo'}
                      </span>
                    </div>
                  </div>

                  {/* Cuadro de Notas */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-exam">
                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] text-center">
                      <span className="text-[11px] text-[#64748B] block mb-1">Calificación (0 - 10)</span>
                      <span className="text-3xl font-bold text-[#0B1B3D]">{simResults.scoreGrade}</span>
                      <span className="text-[10px] text-[#64748B] block mt-0.5">({simResults.scorePct}%)</span>
                    </div>

                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 text-center">
                      <span className="text-[11px] text-emerald-800 block mb-1">Aciertos</span>
                      <span className="text-3xl font-bold text-emerald-700">{simResults.correct}</span>
                      <span className="text-[10px] text-emerald-600 block mt-0.5">de {simResults.total}</span>
                    </div>

                    <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-200 text-center">
                      <span className="text-[11px] text-rose-800 block mb-1">Errores</span>
                      <span className="text-3xl font-bold text-rose-700">{simResults.incorrect}</span>
                      <span className="text-[10px] text-rose-600 block mt-0.5">de {simResults.total}</span>
                    </div>

                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] text-center">
                      <span className="text-[11px] text-[#64748B] block mb-1">Umbral Aprobatorio</span>
                      <span className="text-3xl font-bold text-[#C59B27]">7.0</span>
                      <span className="text-[10px] text-[#64748B] block mt-0.5">70% Requerido</span>
                    </div>
                  </div>

                  {/* Desglose Diagnóstico por Ramas del Derecho (Estilo IurisAcademia) */}
                  <div className="bg-[#FAF9F5] p-4 sm:p-5 rounded-xl border border-[#E5E3D8] space-y-3">
                    <strong className="font-editorial text-sm font-bold text-[#0B1B3D] block">
                      Diagnóstico de Dominio por Ramas Evaluadas:
                    </strong>

                    <div className="space-y-2">
                      {Object.entries(simResults.byCategory).map(([catId, stats]) => {
                        const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                        const catMeta = NOTARY_SUBCATEGORIES.find((c) => c.id === catId);
                        return (
                          <div key={catId} className="space-y-1">
                            <div className="flex items-center justify-between text-xs font-mono-exam">
                              <span className="text-[#334155] font-semibold">
                                {catMeta?.icon} {catMeta?.name || catId}
                              </span>
                              <span>
                                {stats.correct}/{stats.total} ({pct}%)
                              </span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${
                                  pct >= 70 ? 'bg-emerald-600' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                                }`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Acciones de Cierre */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      onClick={handleResetSimulator}
                      className="px-4 py-2.5 rounded-lg border border-[#E5E3D8] text-xs font-bold text-[#475569] hover:bg-[#FAF9F5] transition-colors flex items-center gap-1.5 cursor-pointer font-mono-exam"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Configurar Nuevo Simulacro</span>
                    </button>

                    <button
                      onClick={() => window.print()}
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono-exam font-bold transition-all shadow-corporate-subtle flex items-center gap-2 cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Imprimir Boleta Oficial de Rendimiento</span>
                    </button>
                  </div>
                </div>
              )}

              {/* SOLUCIONARIO ANALÍTICO CON FILTROS */}
              <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-corporate-subtle space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE8DD] pb-3">
                  <h4 className="font-editorial text-base font-bold text-[#0B1B3D]">
                    Solucionario Analítico y Fundamentación de Casos
                  </h4>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSimFilterSolution('all')}
                      className={`px-3 py-1 rounded text-xs font-mono-exam cursor-pointer ${
                        simFilterSolution === 'all'
                          ? 'bg-[#0B1B3D] text-white font-bold'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Todas ({simQuestions.length})
                    </button>
                    <button
                      onClick={() => setSimFilterSolution('correct')}
                      className={`px-3 py-1 rounded text-xs font-mono-exam cursor-pointer ${
                        simFilterSolution === 'correct'
                          ? 'bg-emerald-700 text-white font-bold'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Aciertos ({simResults?.correct})
                    </button>
                    <button
                      onClick={() => setSimFilterSolution('incorrect')}
                      className={`px-3 py-1 rounded text-xs font-mono-exam cursor-pointer ${
                        simFilterSolution === 'incorrect'
                          ? 'bg-rose-700 text-white font-bold'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Errores ({simResults?.incorrect})
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {simQuestions
                    .filter((q) => {
                      const isRight = simAnswers[q.id] === q.correctKey;
                      if (simFilterSolution === 'correct') return isRight;
                      if (simFilterSolution === 'incorrect') return !isRight;
                      return true;
                    })
                    .map((q, idx) => {
                      const userAnswer = simAnswers[q.id];
                      const isRight = userAnswer === q.correctKey;
                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border text-xs space-y-2.5 ${
                            isRight ? 'border-emerald-200 bg-emerald-50/20' : 'border-rose-200 bg-rose-50/20'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 border-b border-[#EAE8DD] pb-1.5">
                            <span className="font-mono-exam font-bold text-[#0B1B3D]">
                              Caso #{idx + 1}: {q.topic}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded font-mono-exam font-bold text-[10px] ${
                                isRight ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {isRight ? '✓ Acierto' : '✕ Error'}
                            </span>
                          </div>

                          <p className="font-semibold text-sm text-[#111625] leading-relaxed">
                            {q.statement}
                          </p>

                          <div className="space-y-1.5 text-xs">
                            {q.options.map((opt) => {
                              const isPicked = userAnswer === opt.key;
                              const isTarget = opt.key === q.correctKey;
                              return (
                                <div
                                  key={opt.key}
                                  className={`p-2 rounded flex items-start gap-2 ${
                                    isTarget
                                      ? 'bg-emerald-100/70 border border-emerald-300 font-semibold text-emerald-950'
                                      : isPicked && !isTarget
                                      ? 'bg-rose-100/70 border border-rose-300 text-rose-950'
                                      : 'bg-white border border-[#E5E3D8] text-slate-600'
                                  }`}
                                >
                                  <span className="font-mono font-bold">{opt.key})</span>
                                  <span>{opt.text}</span>
                                </div>
                              );
                            })}
                          </div>

                          <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8] space-y-1 text-[#334155]">
                            <p>
                              <strong className="text-[#0B1B3D]">Fundamento: </strong>
                              {q.explanation} ({q.legalBasis})
                            </p>
                            {q.csjPrecedent && (
                              <p className="text-[11px] text-[#0B1B3D]">
                                <strong>Precedente CSJ: </strong>
                                {q.csjPrecedent}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotaryExamView;
