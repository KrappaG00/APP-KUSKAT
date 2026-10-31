import React, { useState, useEffect, useMemo } from 'react';
import {
  Flag,
  Shield,
  Music,
  Bird,
  Flower2,
  TreePine,
  Scroll,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  History,
  Sparkles,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Calendar,
  Layers,
  Clock,
  Award,
  HelpCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Landmark,
} from 'lucide-react';

import {
  PatrioticSymbol,
  PATRIOTIC_SYMBOLS,
  PresidentRecord,
  HISTORICAL_PRESIDENTS,
  PatrioticThematicUnit,
  PATRIOTIC_THEMATIC_UNITS,
  PatrioticQuestion,
  PATRIOTIC_QUESTIONS,
} from '../data/patrioticHistory';

// Re-export for full backward compatibility
export type {
  PatrioticSymbol,
  PresidentRecord,
  PatrioticThematicUnit,
  PatrioticQuestion,
};

export {
  PATRIOTIC_SYMBOLS,
  HISTORICAL_PRESIDENTS,
  PATRIOTIC_THEMATIC_UNITS,
  PATRIOTIC_QUESTIONS,
};

type ActiveTab = 'curriculum' | 'symbols' | 'presidents' | 'quiz';

export const PatrioticHistoryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('curriculum');

  // Curriculum State
  const [selectedUnitId, setSelectedUnitId] = useState<string>(PATRIOTIC_THEMATIC_UNITS[0].id);
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(
    PATRIOTIC_THEMATIC_UNITS[0].solvedCaseStudies[0]?.id || null
  );

  // Symbols State
  const [selectedSymbolId, setSelectedSymbolId] = useState<string>('bandera');

  // Presidents State
  const [presidentSearch, setPresidentSearch] = useState<string>('');
  const [expandedPresidentId, setExpandedPresidentId] = useState<string | null>('manuel-enrique-araujo');

  // Quiz State
  const [quizQuestionsCount, setQuizQuestionsCount] = useState<number>(20);
  const [quizSelectedUnitFilter, setQuizSelectedUnitFilter] = useState<string>('all');
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSecondsElapsed, setQuizSecondsElapsed] = useState<number>(0);

  // Current Unit
  const currentUnit = useMemo(() => {
    return PATRIOTIC_THEMATIC_UNITS.find((u) => u.id === selectedUnitId) || PATRIOTIC_THEMATIC_UNITS[0];
  }, [selectedUnitId]);

  // Selected Symbol
  const selectedSymbol = useMemo(() => {
    return PATRIOTIC_SYMBOLS.find((s) => s.id === selectedSymbolId) || PATRIOTIC_SYMBOLS[0];
  }, [selectedSymbolId]);

  // Filtered Presidents
  const filteredPresidents = useMemo(() => {
    if (!presidentSearch.trim()) return HISTORICAL_PRESIDENTS;
    const q = presidentSearch.toLowerCase();
    return HISTORICAL_PRESIDENTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.years.includes(q) ||
        p.context.toLowerCase().includes(q)
    );
  }, [presidentSearch]);

  // Active Quiz Question Set
  const activeQuizQuestions = useMemo(() => {
    let pool = PATRIOTIC_QUESTIONS;
    if (quizSelectedUnitFilter !== 'all') {
      pool = pool.filter((q) => q.thematicUnitId === quizSelectedUnitFilter);
    }
    return pool.slice(0, Math.min(quizQuestionsCount, pool.length));
  }, [quizSelectedUnitFilter, quizQuestionsCount]);

  // Quiz Timer
  useEffect(() => {
    let timer: any = null;
    if (quizStarted && !quizFinished) {
      timer = setInterval(() => {
        setQuizSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [quizStarted, quizFinished]);

  // Quiz Actions
  const handleStartQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setQuizSecondsElapsed(0);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const handleSelectAnswer = (optionIndex: number) => {
    if (quizFinished) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  const handleResetQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setQuizSecondsElapsed(0);
  };

  // Score Calculation (Salvadoran Scale 0.0 - 10.0)
  const quizResults = useMemo(() => {
    if (!activeQuizQuestions.length) return { correct: 0, total: 0, grade: '0.0', pct: 0 };
    let correct = 0;
    activeQuizQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    const total = activeQuizQuestions.length;
    const gradeVal = (correct / total) * 10;
    const grade = gradeVal.toFixed(1);
    const pct = Math.round((correct / total) * 100);
    return { correct, total, grade, pct };
  }, [activeQuizQuestions, userAnswers]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getUnitIcon = (unitId: string) => {
    switch (unitId) {
      case 'unit-precolombino':
        return <Landmark className="w-4 h-4 text-amber-500" />;
      case 'unit-independencia':
        return <Scroll className="w-4 h-4 text-blue-500" />;
      case 'unit-republica-moderna':
        return <History className="w-4 h-4 text-emerald-500" />;
      case 'unit-simbolos-valores':
        return <Shield className="w-4 h-4 text-purple-500" />;
      case 'unit-patrimonio-literatura':
        return <BookOpen className="w-4 h-4 text-rose-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Encabezado Cívico e Histórico */}
      <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <Flag className="w-3.5 h-3.5 text-amber-400" />
            <span>Identidad Nacional • Historia Cuscatleca • Civismo y Democracia</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin">
            Historia Patria, Civismo y Cultura Cuscatleca
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Explora el plan curricular modular con rigor historiográfico: desde los pueblos originarios precolombinos y las
            gestas libertarias de 1811 y 1821, hasta la república moderna cafetalera, los Acuerdos de Paz de 1992, los símbolos
            patrios oficiales y la excelsa literatura cuscatleca.
          </p>

          {/* Selector de Pestaña Principal (4 Pestañas) */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setActiveTab('curriculum')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'curriculum'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <BookOpen className="w-4 h-4 text-sky-300" />
              <span>Unidades Curriculares ({PATRIOTIC_THEMATIC_UNITS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('symbols')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'symbols'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <Shield className="w-4 h-4 text-amber-300" />
              <span>Símbolos Patrios ({PATRIOTIC_SYMBOLS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('presidents')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'presidents'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 text-amber-300 hover:bg-white/20 border border-amber-400/30'
              }`}
            >
              <History className="w-4 h-4 text-amber-500" />
              <span>Historial Presidencial ({HISTORICAL_PRESIDENTS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'quiz'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 text-emerald-300 hover:bg-white/20 border border-emerald-400/30'
              }`}
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Simulador de Evaluación ({PATRIOTIC_QUESTIONS.length} preguntas)</span>
            </button>
          </div>
        </div>
      </div>

      {/* PESTAÑA 1: PLAN CURRICULAR MODULAR */}
      {activeTab === 'curriculum' && (
        <div className="space-y-6">
          {/* Selector de Unidades Temáticas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PATRIOTIC_THEMATIC_UNITS.map((unit, uIdx) => {
              const isSelected = selectedUnitId === unit.id;
              return (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => {
                    setSelectedUnitId(unit.id);
                    setExpandedCaseId(unit.solvedCaseStudies[0]?.id || null);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-blue-50/90 border-blue-600 shadow-sm ring-2 ring-blue-500/20'
                      : 'bg-white border-slate-200/90 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                      Unidad {uIdx + 1}
                    </span>
                    {getUnitIcon(unit.id)}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-snug line-clamp-2">
                      {unit.title}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-500 block mt-1">
                      {unit.period}
                    </span>
                  </div>
                  <div className="text-[10px] text-blue-700 font-bold flex items-center gap-1 pt-1 border-t border-slate-100">
                    <span>{unit.solvedCaseStudies.length} Casos Resueltos</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detalle de la Unidad Seleccionada */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
            {/* Cabecera de la Unidad */}
            <div className="pb-6 border-b border-slate-100 space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                  Período: {currentUnit.period}
                </span>
                <span className="text-xs font-bold bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200">
                  5 Casos de Estudio Resueltos
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {currentUnit.substantiveAnalysis.trim().split(/\s+/).length} palabras sustantivas
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900 font-montenegrin">
                {currentUnit.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {currentUnit.subtitle}
              </p>
            </div>

            {/* Análisis Sustantivo Riguroso */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2 font-mono">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Análisis Teórico e Historiográfico Sustantivo:</span>
              </h4>

              <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-7 border border-slate-200/80 space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
                {currentUnit.substantiveAnalysis.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Línea de Tiempo de Hitos Históricos Clave */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2 font-mono">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Hitos Cronológicos y Trascendencia Cívica:</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentUnit.keyMilestones.map((milestone, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        {milestone.year}
                      </span>
                    </div>
                    <h5 className="font-extrabold text-xs text-slate-900 leading-snug">
                      {milestone.event}
                    </h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {milestone.significance}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Casos Prácticos e Histórico-Cívicos Resueltos */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Casos Prácticos e Historiográficos Resueltos ({currentUnit.solvedCaseStudies.length}):</span>
                </h4>
                <span className="text-[11px] text-slate-500">
                  Haz clic en cada caso para expandir el dilema cívico y su resolución
                </span>
              </div>

              <div className="space-y-3">
                {currentUnit.solvedCaseStudies.map((caseStudy, cIdx) => {
                  const isExpanded = expandedCaseId === caseStudy.id;
                  return (
                    <div
                      key={caseStudy.id}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        isExpanded
                          ? 'bg-white border-blue-300 ring-2 ring-blue-500/10 shadow-sm'
                          : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/70'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedCaseId(isExpanded ? null : caseStudy.id)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-900 font-mono font-black text-xs flex items-center justify-center shrink-0">
                            C{cIdx + 1}
                          </div>
                          <div>
                            <h5 className="font-extrabold text-xs sm:text-sm text-slate-900">
                              {caseStudy.title}
                            </h5>
                            <span className="text-[10px] font-mono text-slate-500">
                              ID: {caseStudy.id}
                            </span>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                          {/* Contexto Histórico */}
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block">
                              1. Contexto Histórico:
                            </span>
                            <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                              {caseStudy.historicalContext}
                            </p>
                          </div>

                          {/* Dilema o Asunto Cívico */}
                          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 space-y-1 text-xs">
                            <span className="font-bold uppercase tracking-wider text-[10px] text-amber-900 font-mono flex items-center gap-1.5">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                              <span>2. Dilema o Problema Histórico-Cívico:</span>
                            </span>
                            <p className="text-amber-950 font-medium leading-relaxed">
                              {caseStudy.dilemmaOrIssue}
                            </p>
                          </div>

                          {/* Análisis Historiográfico Fundamentado */}
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 font-mono block">
                              3. Análisis Historiográfico y Evidencia Documental:
                            </span>
                            <p className="text-xs text-slate-800 leading-relaxed bg-blue-50/50 p-3.5 rounded-xl border border-blue-200/60 text-justify">
                              {caseStudy.historiographicalAnalysis}
                            </p>
                          </div>

                          {/* Trascendencia y Reflexión Cívica */}
                          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 space-y-1 text-xs">
                            <span className="font-bold uppercase tracking-wider text-[10px] text-emerald-950 font-mono flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>4. Trascendencia Cívica y Relevancia Democrática Contemporánea:</span>
                            </span>
                            <p className="text-emerald-950 font-medium leading-relaxed">
                              {caseStudy.civicSignificance}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 2: SÍMBOLOS PATRIOS OFICIALES */}
      {activeTab === 'symbols' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Menú de Selección de Símbolos */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2 block font-mono">
              Emblemas & Símbolos Cívicos:
            </span>
            <div className="space-y-1.5">
              {PATRIOTIC_SYMBOLS.map((symbol) => {
                const isSelected = selectedSymbolId === symbol.id;
                return (
                  <button
                    key={symbol.id}
                    type="button"
                    onClick={() => setSelectedSymbolId(symbol.id)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold shadow-xs'
                        : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{symbol.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-extrabold truncate block">{symbol.name}</span>
                      <span className="text-[10px] text-slate-500 font-mono block">
                        Oficializado: {symbol.yearOfficialized}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ficha Detallada del Símbolo Seleccionado */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedSymbol.icon}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">{selectedSymbol.name}</h3>
                  {selectedSymbol.scientificOrOfficialName && (
                    <p className="text-xs text-slate-500 font-mono italic">
                      {selectedSymbol.scientificOrOfficialName}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-xs font-mono font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                Año: {selectedSymbol.yearOfficialized}
              </span>
            </div>

            {/* Decreto de Creación */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 space-y-1">
              <span className="font-bold uppercase tracking-wider text-[10px] text-amber-800 block font-mono">
                Marco Legal y Decreto Oficial:
              </span>
              <p className="leading-relaxed font-medium">{selectedSymbol.decree}</p>
            </div>

            {/* Historia y Contexto */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-mono">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Historia y Significado Cívico:</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80">
                {selectedSymbol.detailedHistory}
              </p>
            </div>

            {/* Puntos y Detalles Cívicos */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Detalles y Elementos Cívicos Oficiales:</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedSymbol.civicDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                    <span className="text-blue-600 font-black">•</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 3: HISTORIAL DE PRESIDENTES CON PROS Y CONTRAS */}
      {activeTab === 'presidents' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-montenegrin flex items-center gap-2">
                <History className="w-6 h-6 text-blue-600" />
                <span>Historial de Presidentes de El Salvador</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Análisis histórico objetivo de administraciones presidenciales de los siglos XX y XXI (pros y contras),
                excluyendo estrictamente a los gobernantes actuales.
              </p>
            </div>

            {/* Barra de Búsqueda */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={presidentSearch}
                onChange={(e) => setPresidentSearch(e.target.value)}
                placeholder="Buscar por mandatario, año o hito..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </div>
          </div>

          {/* Acordeón de Presidentes */}
          <div className="space-y-3">
            {filteredPresidents.map((pres, idx) => {
              const isExpanded = expandedPresidentId === pres.id;
              return (
                <div
                  key={pres.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded ? 'bg-white border-blue-300 ring-2 ring-blue-500/10 shadow-sm' : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedPresidentId(isExpanded ? null : pres.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-100/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        #{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900">{pres.name}</h4>
                          <span className="text-[10px] font-mono font-bold bg-slate-200/80 text-slate-800 px-2 py-0.5 rounded-md">
                            {pres.years}
                          </span>
                          <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200">
                            {pres.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{pres.period}</p>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                      <p className="text-xs text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        {pres.context}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Aspectos Positivos / Pros */}
                        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-2">
                          <h5 className="font-bold text-xs text-emerald-950 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Aspectos Positivos & Logros (Pros):</span>
                          </h5>
                          <ul className="space-y-1.5 text-xs text-slate-800">
                            {pres.pros.map((pro, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 bg-white/80 p-2 rounded-xl border border-emerald-100">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Aspectos Críticos / Contras */}
                        <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 space-y-2">
                          <h5 className="font-bold text-xs text-rose-950 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                            <AlertTriangle className="w-4 h-4 text-rose-600" />
                            <span>Aspectos Críticos & Sombras (Contras):</span>
                          </h5>
                          <ul className="space-y-1.5 text-xs text-slate-800">
                            {pres.cons.map((con, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2 bg-white/80 p-2 rounded-xl border border-rose-100">
                                <span className="text-rose-600 font-bold">✗</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* PESTAÑA 4: SIMULADOR DE EVALUACIÓN CÍVICA E HISTÓRICA */}
      {activeTab === 'quiz' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          {!quizStarted ? (
            /* Pantalla Inicial de Configuración del Examen */
            <div className="max-w-2xl mx-auto text-center space-y-6 py-6">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-montenegrin">
                  Simulador de Evaluación de Historia Patria y Civismo
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                  Pon a prueba tus conocimientos sobre la era precolombina, la independencia centroamericana, la historia
                  republicana contemporánea, los símbolos patrios y el patrimonio literario salvadoreño.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto bg-slate-50 p-5 rounded-2xl border border-slate-200/90">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block font-mono">
                    Cantidad de Preguntas:
                  </label>
                  <select
                    value={quizQuestionsCount}
                    onChange={(e) => setQuizQuestionsCount(Number(e.target.value))}
                    className="w-full text-xs font-medium bg-white border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={10}>10 Preguntas (Rápido)</option>
                    <option value={20}>20 Preguntas (Estándar)</option>
                    <option value={35}>35 Preguntas (Avanzado)</option>
                    <option value={55}>55 Preguntas (Banco Completo)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block font-mono">
                    Filtro por Unidad:
                  </label>
                  <select
                    value={quizSelectedUnitFilter}
                    onChange={(e) => setQuizSelectedUnitFilter(e.target.value)}
                    className="w-full text-xs font-medium bg-white border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">Todas las Unidades (Global)</option>
                    <option value="unit-precolombino">U1: Era Precolombina</option>
                    <option value="unit-independencia">U2: Independencia & Federación</option>
                    <option value="unit-republica-moderna">U3: República Moderna</option>
                    <option value="unit-simbolos-valores">U4: Símbolos & Valores Cívicos</option>
                    <option value="unit-patrimonio-literatura">U5: Patrimonio & Literatura</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleStartQuiz}
                  className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Comenzar Evaluación ({activeQuizQuestions.length} Preguntas)</span>
                </button>
              </div>
            </div>
          ) : !quizFinished ? (
            /* Pantalla del Examen Activo */
            <div className="space-y-6 max-w-3xl mx-auto">
              {/* Barra Superior con Progreso y Temporizador */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
                    Pregunta {currentQuestionIndex + 1} de {activeQuizQuestions.length}
                  </span>
                  <span className="text-xs text-slate-500">
                    Respondidas: {Object.keys(userAnswers).length} / {activeQuizQuestions.length}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Tiempo: {formatTime(quizSecondsElapsed)}</span>
                </div>
              </div>

              {/* Pregunta Actual */}
              {activeQuizQuestions[currentQuestionIndex] && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      ID: {activeQuizQuestions[currentQuestionIndex].id}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {activeQuizQuestions[currentQuestionIndex].question}
                    </h4>
                  </div>

                  {/* Opciones A, B, C, D */}
                  <div className="space-y-2.5">
                    {activeQuizQuestions[currentQuestionIndex].options.map((option, optIdx) => {
                      const isSelected = userAnswers[currentQuestionIndex] === optIdx;
                      const letter = String.fromCharCode(65 + optIdx);
                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectAnswer(optIdx)}
                          className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                            isSelected
                              ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold ring-2 ring-blue-500/20 shadow-xs'
                              : 'bg-white border-slate-200/90 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div
                            className={`w-7 h-7 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {letter}
                          </div>
                          <span className="text-xs sm:text-sm leading-relaxed">{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navegación entre Preguntas */}
                  <div className="pt-4 flex items-center justify-between border-t border-slate-100 flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={currentQuestionIndex === 0}
                      onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Anterior</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {currentQuestionIndex < activeQuizQuestions.length - 1 ? (
                        <button
                          type="button"
                          onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                          className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Siguiente</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleFinishQuiz}
                          className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Finalizar y Calificar</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Pantalla de Resultados y Calificación Oficial */
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="text-center space-y-4 bg-gradient-to-br from-slate-900 to-blue-950 p-6 sm:p-8 rounded-3xl text-white shadow-md">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                  Calificación Oficial del Examen
                </span>

                <div className="flex items-center justify-center gap-2 pt-2">
                  <span className="text-5xl sm:text-6xl font-black text-amber-400 font-montenegrin">
                    {quizResults.grade}
                  </span>
                  <span className="text-2xl text-slate-400 font-bold">/ 10.0</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  {Number(quizResults.grade) >= 8.0
                    ? '¡Excelente dominio de la Historia Patria y el Civismo de El Salvador!'
                    : Number(quizResults.grade) >= 6.0
                    ? 'Aprobado. Buen conocimiento cívico, con áreas de oportunidad para repasar.'
                    : 'Necesitas repasar las unidades temáticas para afianzar los conceptos fundamentales.'}
                </p>

                <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block">Aciertos</span>
                    <span className="text-base font-bold text-emerald-400">
                      {quizResults.correct} / {quizResults.total}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Porcentaje</span>
                    <span className="text-base font-bold text-sky-400">{quizResults.pct}%</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Tiempo</span>
                    <span className="text-base font-bold text-amber-300">
                      {formatTime(quizSecondsElapsed)}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    className="px-6 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold inline-flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
                    <span>Realizar Nueva Evaluación</span>
                  </button>
                </div>
              </div>

              {/* Revisión Detallada Pregunta por Pregunta */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Revisión Detallada de Respuestas y Justificaciones:</span>
                </h4>

                <div className="space-y-3">
                  {activeQuizQuestions.map((q, idx) => {
                    const selected = userAnswers[idx];
                    const isCorrect = selected === q.correctAnswer;
                    return (
                      <div
                        key={q.id}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                          isCorrect
                            ? 'bg-emerald-50/50 border-emerald-200'
                            : 'bg-rose-50/50 border-rose-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                                  isCorrect
                                    ? 'bg-emerald-200/70 text-emerald-900'
                                    : 'bg-rose-200/70 text-rose-900'
                                }`}
                              >
                                Pregunta {idx + 1} • {isCorrect ? 'Correcta' : 'Incorrecta'}
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">ID: {q.id}</span>
                            </div>
                            <h5 className="font-bold text-xs sm:text-sm text-slate-900 mt-1">
                              {q.question}
                            </h5>
                          </div>

                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                              isCorrect
                                ? 'bg-emerald-500 text-white'
                                : 'bg-rose-500 text-white'
                            }`}
                          >
                            {isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                          </div>
                        </div>

                        {/* Comparación de Opciones */}
                        <div className="mt-3 text-xs space-y-1.5">
                          <p className="text-slate-700">
                            <span className="font-bold">Tu respuesta: </span>
                            {selected !== undefined ? (
                              <span>
                                {String.fromCharCode(65 + selected)}. {q.options[selected]}
                              </span>
                            ) : (
                              <span className="italic text-slate-400">Sin responder</span>
                            )}
                          </p>

                          {!isCorrect && (
                            <p className="text-emerald-900 font-medium">
                              <span className="font-bold">Respuesta correcta: </span>
                              {String.fromCharCode(65 + q.correctAnswer)}. {q.options[q.correctAnswer]}
                            </p>
                          )}
                        </div>

                        {/* Explicación y Referencia Histórica */}
                        <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs space-y-1">
                          <p className="text-slate-800 leading-relaxed font-medium">
                            <span className="font-bold text-slate-900">Explicación: </span>
                            {q.explanation}
                          </p>
                          <p className="text-[11px] text-slate-500 font-mono">
                            <span className="font-bold">Referencia: </span>
                            {q.historicalReference}
                          </p>
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

export default PatrioticHistoryView;
