import React, { useMemo, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Filter,
  Flame,
  Globe,
  HelpCircle,
  Info,
  Layers,
  RotateCcw,
  Search,
  Sparkles,
  Volume2,
  XCircle,
  Zap,
} from 'lucide-react';
import {
  CEFR_CURRICULUM,
  CEFRLevel,
  ENGLISH_QUESTIONS_BANK,
  GRAMMAR_DISTINCTIONS,
  GrammarTopicLesson,
  LanguageQuestion,
  PHONETIC_DISTINCTIONS,
  SPELLING_RULES,
  VariantType,
  VOCABULARY_PAIRS,
} from '../data/languages/englishData';
import { LANGUAGES_CATALOG } from '../data/languages/languagesRegistry';
import { AdBanner } from './AdBanner';

interface LanguagesViewProps {
  onEnterSimulatorWithCategory?: (category: 'INGLES') => void;
}

export default function LanguagesView({ onEnterSimulatorWithCategory }: LanguagesViewProps) {
  // Estado del idioma activo (por defecto 'english')
  const [selectedLanguageId, setSelectedLanguageId] = useState<string>('english');

  // Pestaña principal dentro de Idiomas
  const [activeMainTab, setActiveMainTab] = useState<'theory' | 'comparative' | 'exam' | 'references'>('theory');

  // Variante lingüística (US, UK, ALL)
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('ALL');

  // Nivel del MCER / CEFR activo
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>('A1');

  // Filtro de búsqueda en vocabulario y teoría
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Lección de gramática expandida en el acordeón
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>('a1_tobe');

  // Estados del Modo Examen (Selección Múltiple)
  const [examCurrentIndex, setExamCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [examAnswers, setExamAnswers] = useState<Record<string, { chosen: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean }>>({});
  const [examScore, setExamScore] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });

  const currentLanguage = useMemo(() => {
    return LANGUAGES_CATALOG.find((l) => l.id === selectedLanguageId) || LANGUAGES_CATALOG[0];
  }, [selectedLanguageId]);

  const currentLevelInfo = useMemo(() => {
    return CEFR_CURRICULUM[selectedLevel];
  }, [selectedLevel]);

  // Preguntas filtradas por nivel y variante para el simulador
  const filteredQuestions = useMemo(() => {
    return ENGLISH_QUESTIONS_BANK.filter((q) => {
      const matchLevel = q.level === selectedLevel;
      const matchVariant = selectedVariant === 'ALL' || q.variant === 'ALL' || q.variant === selectedVariant;
      return matchLevel && matchVariant;
    });
  }, [selectedLevel, selectedVariant]);

  const currentQuestion: LanguageQuestion | undefined = filteredQuestions[examCurrentIndex];

  // Vocabulario filtrado por búsqueda
  const filteredVocabulary = useMemo(() => {
    if (!searchQuery.trim()) return VOCABULARY_PAIRS;
    const q = searchQuery.toLowerCase();
    return VOCABULARY_PAIRS.filter(
      (v) =>
        v.us.toLowerCase().includes(q) ||
        v.uk.toLowerCase().includes(q) ||
        v.spanish.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Manejador de respuesta en el simulador
  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswerSubmitted) return;
    setSelectedOption(key);
  };

  const handleSubmitAnswer = () => {
    if (!currentQuestion || !selectedOption || isAnswerSubmitted) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsAnswerSubmitted(true);

    setExamAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { chosen: selectedOption, isCorrect },
    }));

    setExamScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (!isCorrect ? 1 : 0),
    }));
  };

  const handleNextQuestion = () => {
    if (examCurrentIndex < filteredQuestions.length - 1) {
      const nextIdx = examCurrentIndex + 1;
      setExamCurrentIndex(nextIdx);
      const nextQ = filteredQuestions[nextIdx];
      const existing = examAnswers[nextQ.id];
      if (existing) {
        setSelectedOption(existing.chosen);
        setIsAnswerSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (examCurrentIndex > 0) {
      const prevIdx = examCurrentIndex - 1;
      setExamCurrentIndex(prevIdx);
      const prevQ = filteredQuestions[prevIdx];
      const existing = examAnswers[prevQ.id];
      if (existing) {
        setSelectedOption(existing.chosen);
        setIsAnswerSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
      }
    }
  };

  const handleResetExam = () => {
    setExamCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setExamAnswers({});
    setExamScore({ correct: 0, incorrect: 0 });
  };

  // Cálculo de puntaje oficial Kuskat (+1 acierto, -2 error, tope 0)
  const kuskatPoints = Math.max(0, examScore.correct * 1 - examScore.incorrect * 2);

  return (
    <div className="space-y-6">
      {/* ==================================================================== */}
      {/* AVISO DE FINANCIAMIENTO UNIVERSITARIO (GLOBAL KUSKAT) */}
      {/* ==================================================================== */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-4 sm:p-5 text-white shadow-md border border-blue-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
              Aporte Educativo Universitario
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
              Trabajando en material de medicina. Los anuncios que contiene la pagina es un pequeño aporte economico a mis estudios universitarios.
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <span className="text-[11px] font-mono bg-white/10 px-3 py-1 rounded-xl text-blue-200 border border-white/10">
            Yeferson E. Perez • Creador
          </span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* ANUNCIO PATROCINADO 1 / 5 (Superior) */}
      {/* ==================================================================== */}
      <AdBanner variant="light" positionLabel="Idiomas • 1/5 Superior" slotId="4241045160_id1" />

      {/* ==================================================================== */}
      {/* ENCABEZADO Y SELECTOR DE IDIOMAS */}
      {/* ==================================================================== */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                KUSKAT IDIOMAS: Escuela Internacional de Lenguas
              </h2>
              <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                MCER / CEFR A1 — C2
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl">
              Teoría completa, comparación normativa entre <strong>Inglés Americano (US)</strong> e <strong>Inglés Británico (UK)</strong>,
              y simulador pedagógico interactivo con evaluaciones <em>estrictamente de opción múltiple</em> (A, B, C, D) basadas en
              <strong> Englisch-hilfen.de</strong>, <strong>Englishteststore.net</strong> y <strong>Agendaweb.org</strong>.
            </p>
          </div>

          {/* Selector de Idiomas Disponibles / Próximos */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {LANGUAGES_CATALOG.map((lang) => {
              const isActive = lang.id === selectedLanguageId;
              const isAvailable = lang.status === 'active';

              return (
                <button
                  key={lang.id}
                  type="button"
                  onClick={() => {
                    if (isAvailable) setSelectedLanguageId(lang.id);
                  }}
                  className={`px-3 py-2 rounded-2xl border text-xs font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : isAvailable
                      ? 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      : 'bg-slate-50/60 text-slate-400 border-slate-200/60 cursor-not-allowed opacity-75'
                  }`}
                  title={isAvailable ? `Aprender ${lang.name}` : `${lang.name} (Próximamente)`}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {!isAvailable && (
                    <span className="text-[9px] font-semibold bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded-md">
                      Pronto
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* BARRA DE NAVEGACIÓN SECUNDARIA DENTRO DE IDIOMAS */}
        {/* ==================================================================== */}
        <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl text-xs font-bold text-slate-600 flex-wrap">
            <button
              onClick={() => setActiveMainTab('theory')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'theory'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Teoría por Nivel (A1-C2)</span>
            </button>

            <button
              onClick={() => setActiveMainTab('comparative')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'comparative'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-purple-600" />
              <span>Guía Comparativa (US vs. UK)</span>
            </button>

            <button
              onClick={() => setActiveMainTab('exam')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'exam'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Examen Opción Múltiple</span>
              <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-md font-mono">
                {filteredQuestions.length} Q
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('references')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer ${
                activeMainTab === 'references'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'hover:text-slate-900'
              }`}
            >
              <ExternalLink className="w-4 h-4 text-emerald-600" />
              <span>Fuentes & Referencias</span>
            </button>
          </div>

          {/* Selector de Variante: US vs UK */}
          <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-2xl border border-slate-200 text-xs font-bold self-start md:self-auto">
            <span className="text-[11px] text-slate-400 px-2 font-mono">Variante:</span>
            <button
              onClick={() => setSelectedVariant('ALL')}
              className={`px-2.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedVariant === 'ALL'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🌐 Ambas
            </button>
            <button
              onClick={() => setSelectedVariant('US')}
              className={`px-2.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedVariant === 'US'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🇺🇸 American (US)
            </button>
            <button
              onClick={() => setSelectedVariant('UK')}
              className={`px-2.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedVariant === 'UK'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🇬🇧 British (UK)
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SELECTOR DE NIVELES MCER / CEFR (A1 A C2) */}
        {/* ==================================================================== */}
        <div className="pt-4 border-t border-slate-100 mt-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Marco Común Europeo de Referencia (MCER / CEFR):
            </span>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
              Nivel seleccionado: <strong className="text-slate-900">{selectedLevel} • {currentLevelInfo.nameSpanish}</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map((lvl) => {
              const info = CEFR_CURRICULUM[lvl];
              const isSelected = selectedLevel === lvl;

              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    setSelectedLevel(lvl);
                    setExamCurrentIndex(0);
                    setSelectedOption(null);
                    setIsAnswerSubmitted(false);
                  }}
                  className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm">{lvl}</span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.2 rounded-md ${
                        isSelected ? 'bg-white/20 text-white' : `${info.badgeBg} ${info.badgeText}`
                      }`}
                    >
                      {lvl === 'A1' || lvl === 'A2' ? 'Básico' : lvl === 'B1' || lvl === 'B2' ? 'Medio' : 'Experto'}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <span className="font-bold text-[11px] block truncate">{info.nameSpanish}</span>
                    <span className="text-[9.5px] opacity-70 block truncate">{info.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* PESTAÑA 1: TEORÍA COMPLETA POR NIVEL (A1 A C2) */}
      {/* ==================================================================== */}
      {activeMainTab === 'theory' && (
        <div className="space-y-6">
          {/* Banner descriptivo del nivel actual */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentLevelInfo.color} text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0`}>
                  {currentLevelInfo.level}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Nivel {currentLevelInfo.level}: {currentLevelInfo.nameSpanish}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 font-medium">({currentLevelInfo.name})</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                    {currentLevelInfo.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveMainTab('exam')}
                className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer self-start md:self-auto"
              >
                <Award className="w-4 h-4" />
                <span>Rendir Test de Selección Múltiple {currentLevelInfo.level}</span>
              </button>
            </div>

            {/* Competencias Can-Do del MCER */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Objetivos y Competencias Can-Do (CEFR):</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {currentLevelInfo.canDoStatements.map((statement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{statement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Ejes Temáticos Clave de {currentLevelInfo.level}:</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentLevelInfo.coreTopics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-xl border border-slate-200 shadow-2xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Acordeón de Lecciones Teóricas Detalladas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Lecciones de Gramática y Síntesis Estructurada:</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                {currentLevelInfo.grammarLessons.length} lecciones en {currentLevelInfo.level}
              </span>
            </div>

            {currentLevelInfo.grammarLessons.map((lesson) => {
              const isExpanded = expandedLessonId === lesson.id;

              return (
                <div
                  key={lesson.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedLessonId(isExpanded ? null : lesson.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0">
                        {currentLevelInfo.level}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-sm sm:text-base text-slate-900">{lesson.title}</h4>
                          <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                            {lesson.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{lesson.summary}</p>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                      {lesson.formula && (
                        <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-3 sm:p-4 text-blue-950 font-mono">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-700 mb-1 font-sans">
                            Estructura Sintáctica / Fórmula:
                          </span>
                          <strong>{lesson.formula}</strong>
                        </div>
                      )}

                      <div className="space-y-2">
                        <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                          Reglas Gramaticales Oficiales:
                        </h5>
                        <ul className="space-y-1.5 text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                          {lesson.rules.map((rule, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 font-black">•</span>
                              <span className="leading-relaxed">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-3.5">
                          <h6 className="font-bold text-xs text-emerald-900 flex items-center gap-1.5 mb-2">
                            <span>🇺🇸 Ejemplos en American English:</span>
                          </h6>
                          <ul className="space-y-1 text-xs text-slate-700 font-medium">
                            {lesson.examplesUS.map((ex, idx) => (
                              <li key={idx} className="leading-snug">“{ex}”</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-rose-50/60 border border-rose-200/80 rounded-2xl p-3.5">
                          <h6 className="font-bold text-xs text-rose-900 flex items-center gap-1.5 mb-2">
                            <span>🇬🇧 Ejemplos en British English:</span>
                          </h6>
                          <ul className="space-y-1 text-xs text-slate-700 font-medium">
                            {lesson.examplesUK.map((ex, idx) => (
                              <li key={idx} className="leading-snug">“{ex}”</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {lesson.commonMistakes.length > 0 && (
                        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-3.5">
                          <h6 className="font-bold text-xs text-amber-900 flex items-center gap-1.5 mb-1.5">
                            <Info className="w-3.5 h-3.5 text-amber-600" />
                            <span>Errores Frecuentes y Trampas en Exámenes:</span>
                          </h6>
                          <ul className="space-y-1 text-xs text-slate-700">
                            {lesson.commonMistakes.map((mis, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">⚠️</span>
                                <span>{mis}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                        <span className="font-mono text-[11px]">Fuente verificada: Englisch-hilfen.de & Agendaweb.org</span>
                        <a
                          href={lesson.referenceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold hover:underline"
                        >
                          <span>Ver ejercicios complementarios</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Anuncio Patrocinado 2 / 5 (Intermedio en Teoría) */}
          <AdBanner variant="light" positionLabel="Idiomas • 2/5 Intermedio Teoría" slotId="4241045160_id2" />
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 2: GUÍA COMPARATIVA (AMERICAN vs. BRITISH ENGLISH) */}
      {/* ==================================================================== */}
      {activeMainTab === 'comparative' && (
        <div className="space-y-6">
          {/* Introducción Comparativa */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>Análisis Contrastivo Integral: Inglés Americano (US) vs. Inglés Británico (UK)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl">
              Aunque ambas variantes son plenamente inteligibles entre sí, presentan diferencias sistémicas
              en <strong>ortografía (spelling)</strong>, <strong>léxico cotidiano</strong>, <strong>gramática estructural</strong> y <strong>fonética</strong>.
              A continuación se presenta el desglose pedagógico verificado según los estándares de Oxford, Cambridge y Webster.
            </p>
          </div>

          {/* 1. Ortografía (Spelling Rules) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>1. Reglas Ortográficas de Diferenciación (Spelling Rules)</span>
                </h4>
                <p className="text-xs text-slate-500">Patrones regulares de sufijos y diptongos.</p>
              </div>
              <span className="text-xs font-mono bg-purple-50 text-purple-800 px-2 py-1 rounded-lg border border-purple-200 font-bold">
                {SPELLING_RULES.length} Patrones
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
                    <th className="p-3 rounded-l-xl">Patrón</th>
                    <th className="p-3">🇺🇸 American English (US)</th>
                    <th className="p-3">🇬🇧 British English (UK)</th>
                    <th className="p-3 rounded-r-xl">Explicación Lingüística</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SPELLING_RULES.map((rule, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-mono font-bold text-purple-900 shrink-0">{rule.pattern}</td>
                      <td className="p-3 font-semibold text-blue-900">{rule.us}</td>
                      <td className="p-3 font-semibold text-rose-900">{rule.uk}</td>
                      <td className="p-3 text-slate-600 text-xs leading-relaxed max-w-md">{rule.explanation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Vocabulario y Léxico */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>2. Glosario Léxico Esencial: US vs. UK</span>
                </h4>
                <p className="text-xs text-slate-500">Palabras con equivalencias totalmente distintas por región.</p>
              </div>

              {/* Buscador de Vocabulario */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar término (ej. flat, car)..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredVocabulary.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-2xl p-3.5 border border-slate-200/80 hover:border-blue-300 transition-all space-y-1.5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                    <span className="text-blue-900">🇺🇸 {item.us}</span>
                    <span className="text-slate-400 text-xs font-normal">vs</span>
                    <span className="text-rose-900">🇬🇧 {item.uk}</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium">
                    <span className="text-slate-500 font-normal">Significado: </span>
                    {item.spanish}
                  </p>
                  <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60 space-y-0.5">
                    <p className="italic text-slate-600 truncate" title={item.sampleSentenceUS}>
                      US: “{item.sampleSentenceUS}”
                    </p>
                    <p className="italic text-slate-600 truncate" title={item.sampleSentenceUK}>
                      UK: “{item.sampleSentenceUK}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anuncio Patrocinado 3 / 5 (Intermedio en Comparativa) */}
          <AdBanner variant="light" positionLabel="Idiomas • 3/5 Intermedio Comparativa" slotId="4241045160_id3" />

          {/* 3. Gramática Estructural */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>3. Diferencias en Gramática y Sintaxis</span>
            </h4>
            <p className="text-xs text-slate-500">
              Contraste en el uso de tiempos verbales, concordancias colectivas y preposiciones.
            </p>

            <div className="space-y-4">
              {GRAMMAR_DISTINCTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h5 className="font-bold text-sm sm:text-base text-slate-900">{item.title}</h5>
                    <span className="text-[10px] font-mono bg-blue-100 text-blue-900 px-2 py-0.5 rounded-md font-semibold">
                      Sintaxis
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{item.concept}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3">
                      <strong className="block text-blue-900 font-bold mb-1">🇺🇸 Norma en American English:</strong>
                      <p className="text-slate-700 leading-relaxed mb-2">{item.ruleUS}</p>
                      <div className="bg-white p-2 rounded-lg border border-blue-100 font-mono text-[11px] text-blue-950">
                        {item.exampleUS}
                      </div>
                    </div>

                    <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-3">
                      <strong className="block text-rose-900 font-bold mb-1">🇬🇧 Norma en British English:</strong>
                      <p className="text-slate-700 leading-relaxed mb-2">{item.ruleUK}</p>
                      <div className="bg-white p-2 rounded-lg border border-rose-100 font-mono text-[11px] text-rose-950">
                        {item.exampleUK}
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-950 flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Impacto en Exámenes Internacionales: </strong>
                      <span>{item.pedagogicalNote}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Fonética y Pronunciación */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-indigo-600" />
              <span>4. Guía Fonética y Fonológica (Pronunciation Differences)</span>
            </h4>
            <p className="text-xs text-slate-500">
              Roticidad, golpe alveolar (Flapped T), vocales abiertas y patrones de acentuación.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PHONETIC_DISTINCTIONS.map((phon, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5">
                  <h5 className="font-bold text-sm text-slate-900 flex items-center justify-between">
                    <span>{phon.topic}</span>
                    <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                      Fonética
                    </span>
                  </h5>
                  <p className="text-xs text-slate-600 font-medium">{phon.feature}</p>

                  <div className="space-y-1.5 text-xs">
                    <div className="bg-blue-50/50 p-2.5 rounded-xl border border-blue-100 text-slate-700">
                      <strong className="text-blue-900 font-bold block mb-0.5">🇺🇸 General American (US):</strong>
                      <p>{phon.usBehavior}</p>
                    </div>

                    <div className="bg-rose-50/50 p-2.5 rounded-xl border border-rose-100 text-slate-700">
                      <strong className="text-rose-900 font-bold block mb-0.5">🇬🇧 Received Pronunciation (UK):</strong>
                      <p>{phon.ukBehavior}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Ejemplos de Transcripción Fonética (IPA):
                    </span>
                    <div className="space-y-1">
                      {phon.examples.map((ex, eIdx) => (
                        <div key={eIdx} className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900">{ex.word}</span>
                          <span className="font-mono text-blue-700">US: {ex.usIpa}</span>
                          <span className="font-mono text-rose-700">UK: {ex.ukIpa}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 3: MODO EXAMEN DE SELECCIÓN MÚLTIPLE (A1 A C2) */}
      {/* ==================================================================== */}
      {activeMainTab === 'exam' && (
        <div className="space-y-6">
          {/* Tarjeta de Control del Examen */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Simulador Oficial de Selección Múltiple: Nivel {selectedLevel}
                  </h3>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md border border-amber-200">
                    Exclusivo Opción Múltiple (A, B, C, D)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Evaluaciones pedagógicas rigurosas sin preguntas abiertas ni audio.
                  Regla de puntaje Kuskat: <strong>+1 punto por acierto</strong>, <strong>-2 puntos por error</strong>, tope mínimo en <strong>0</strong>.
                </p>
              </div>

              {/* Marcador de Puntaje en Vivo */}
              <div className="flex items-center gap-2.5 bg-slate-900 text-white px-4 py-2.5 rounded-2xl self-start sm:self-auto shadow-xs">
                <div className="text-center px-2 border-r border-slate-700">
                  <span className="block text-[9px] font-mono uppercase text-slate-400">Puntaje</span>
                  <span className="text-base font-black text-amber-400 font-mono">{kuskatPoints} pts</span>
                </div>
                <div className="text-center px-2 border-r border-slate-700">
                  <span className="block text-[9px] font-mono uppercase text-emerald-400">Aciertos</span>
                  <span className="text-base font-bold text-emerald-400 font-mono">+{examScore.correct}</span>
                </div>
                <div className="text-center px-2">
                  <span className="block text-[9px] font-mono uppercase text-rose-400">Errores</span>
                  <span className="text-base font-bold text-rose-400 font-mono">-{examScore.incorrect}</span>
                </div>
              </div>
            </div>

            {/* Barra de progreso de preguntas */}
            <div className="pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>
                Pregunta <strong>{examCurrentIndex + 1}</strong> de <strong>{filteredQuestions.length}</strong>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetExam}
                  className="flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reiniciar Test</span>
                </button>
              </div>
            </div>

            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((examCurrentIndex + 1) / (filteredQuestions.length || 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Tarjeta de la Pregunta Activa */}
          {currentQuestion ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
              {/* Encabezado del Reactivo */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xl">
                    Reactivo #{currentQuestion.number}
                  </span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-xl border border-blue-200">
                    Nivel {currentQuestion.level}
                  </span>
                  <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-xl border border-purple-200">
                    Variante: {currentQuestion.variant === 'ALL' ? 'Internacional (US/UK)' : currentQuestion.variant === 'US' ? 'American (US)' : 'British (UK)'}
                  </span>
                </div>

                <span className="text-xs text-slate-400 font-mono">
                  Tema: {currentQuestion.topic}
                </span>
              </div>

              {/* Enunciado */}
              <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-caslon bg-slate-50/60 p-4 sm:p-5 rounded-2xl border border-slate-200/70 whitespace-pre-line">
                {currentQuestion.statement}
              </div>

              {/* Opciones de Respuesta A, B, C, D */}
              <div className="space-y-2.5">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedOption === opt.key;
                  const isCorrectKey = opt.key === currentQuestion.correctAnswer;

                  let optionStyle = 'bg-white border-slate-200 hover:border-blue-400 text-slate-800';

                  if (isAnswerSubmitted) {
                    if (isCorrectKey) {
                      optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs';
                    } else if (isSelected && !isCorrectKey) {
                      optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold';
                    } else {
                      optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-blue-50 border-blue-600 text-blue-950 font-bold ring-2 ring-blue-500/20';
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(opt.key)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shrink-0 border ${
                            isSelected && !isAnswerSubmitted
                              ? 'bg-blue-600 text-white border-blue-600'
                              : isAnswerSubmitted && isCorrectKey
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : isAnswerSubmitted && isSelected && !isCorrectKey
                              ? 'bg-rose-600 text-white border-rose-600'
                              : 'bg-slate-100 text-slate-700 border-slate-300'
                          }`}
                        >
                          {opt.key}
                        </div>
                        <span className="text-sm sm:text-base">{opt.text}</span>
                      </div>

                      {isAnswerSubmitted && isCorrectKey && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrectKey && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Botones de Acción */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  disabled={examCurrentIndex === 0}
                  onClick={handlePrevQuestion}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  ← Pregunta Anterior
                </button>

                {!isAnswerSubmitted ? (
                  <button
                    type="button"
                    disabled={!selectedOption}
                    onClick={handleSubmitAnswer}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                  >
                    Confirmar Respuesta
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={examCurrentIndex === filteredQuestions.length - 1}
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                  >
                    Siguiente Pregunta →
                  </button>
                )}
              </div>

              {/* Justificación Pedagógica y Análisis de Distractores */}
              {isAnswerSubmitted && (
                <div className="space-y-3 pt-3 border-t border-slate-100 animate-in fade-in duration-300">
                  <div
                    className={`p-4 sm:p-5 rounded-2xl border ${
                      selectedOption === currentQuestion.correctAnswer
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50/70 border-rose-200 text-rose-950'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {selectedOption === currentQuestion.correctAnswer ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <h5 className="font-bold text-sm text-emerald-900">
                            ¡Respuesta Correcta! (+1 punto oficial Kuskat)
                          </h5>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                          <h5 className="font-bold text-sm text-rose-900">
                            Respuesta Incorrecta (-2 puntos oficial Kuskat)
                          </h5>
                        </>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
                      <strong>Explicación: </strong>
                      {currentQuestion.explanation}
                    </p>
                  </div>

                  {currentQuestion.distractorAnalysis && currentQuestion.distractorAnalysis.length > 0 && (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
                      <span className="block font-bold uppercase tracking-wider text-slate-700">
                        Análisis Detallado de Opciones y Distractores:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {currentQuestion.distractorAnalysis.map((d, idx) => (
                          <div key={idx} className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                            <span className="font-bold text-slate-900 block mb-0.5">Opción {d.option}:</span>
                            <span className="text-slate-600">{d.reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="text-[11px] text-slate-400 font-mono text-right">
                    Referencia pedagógica: {currentQuestion.referenceSite}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-xs">
              <p className="text-sm font-bold text-slate-700">
                No hay reactivos disponibles para el nivel {selectedLevel} con la variante seleccionada.
              </p>
            </div>
          )}

          {/* Anuncio Patrocinado 4 / 5 (Inferior en Examen) */}
          <AdBanner variant="light" positionLabel="Idiomas • 4/5 Inferior Examen" slotId="4241045160_id4" />
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 4: FUENTES Y REFERENCIAS METODOLÓGICAS */}
      {/* ==================================================================== */}
      {activeMainTab === 'references' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-blue-600" />
              <span>Fuentes Bibliográficas y Referencias Pedagógicas</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-4xl">
              El contenido teórico y los reactivos de evaluación de la sección de <strong>IDIOMAS (Inglés)</strong> de la plataforma KUSKAT
              han sido adaptados rigurosamente a partir de los portales de referencia lingüística internacional especificados:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Fuente 1: Englisch-hilfen.de */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold mb-3">
                  EH
                </div>
                <h4 className="font-bold text-base text-slate-900">Englisch-hilfen.de</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Referencia alemana líder mundial en explicaciones gramaticales exhaustivas, reglas de ortografía británica vs. estadounidense, tablas morfológicas y ejercicios clasificados.
                </p>
                <div className="mt-3 space-y-1 text-xs text-slate-500 font-medium">
                  <p>• Gramática por niveles A1 a C2</p>
                  <p>• Tablas de verbos irregulares y preposiciones</p>
                  <p>• Diferencias American vs. British English</p>
                </div>
              </div>

              <a
                href="https://www.englisch-hilfen.de/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Visitar Englisch-hilfen.de</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Fuente 2: Englishteststore.net */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold mb-3">
                  ETS
                </div>
                <h4 className="font-bold text-base text-slate-900">Englishteststore.net</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Banco de reactivos de opción múltiple estructurados para preparación de exámenes de proficiencia internacional (TOEFL, IELTS, Cambridge, SAT y TOEIC).
                </p>
                <div className="mt-3 space-y-1 text-xs text-slate-500 font-medium">
                  <p>• Tests estandarizados A1-C2 de 4 opciones</p>
                  <p>• Análisis de comprensión lectora y sintaxis</p>
                  <p>• Métricas de acierto y justificaciones</p>
                </div>
              </div>

              <a
                href="https://englishteststore.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Visitar Englishteststore.net</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Fuente 3: Agendaweb.org */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold mb-3">
                  AW
                </div>
                <h4 className="font-bold text-base text-slate-900">Agendaweb.org</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Índice educativo con syllabus de lecciones interactivas clasificadas por competencias del MCER, cubriendo desde verbos elementales hasta inversiones avanzadas.
                </p>
                <div className="mt-3 space-y-1 text-xs text-slate-500 font-medium">
                  <p>• Ejercicios interactivos por tema gramatical</p>
                  <p>• Actividades de vocabulario contextualizado</p>
                  <p>• Cláusulas de participio y oraciones hendidas</p>
                </div>
              </div>

              <a
                href="https://agendaweb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Visitar Agendaweb.org</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* ANUNCIO PATROCINADO 5 / 5 (Inferior Global en Idiomas) */}
      {/* ==================================================================== */}
      <AdBanner variant="light" positionLabel="Idiomas • 5/5 Inferior Global" slotId="4241045160_id5" />
    </div>
  );
}
