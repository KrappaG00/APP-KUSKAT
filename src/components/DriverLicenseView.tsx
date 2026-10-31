import React, { useState, useEffect, useMemo } from 'react';
import {
  Car,
  Brain,
  FileCheck2,
  AlertOctagon,
  ShieldAlert,
  Gauge,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Award,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Clock,
  Compass,
  Search,
  Check,
  Scale,
  ShieldCheck,
  ArrowRight,
  Filter,
  Eye,
  BookCheck
} from 'lucide-react';
import {
  DRIVER_CURRICULUM_UNITS,
  DRIVER_QUESTIONS,
  OFFICIAL_ROAD_SIGNS,
  generateOfficialVmtExam,
  getAllPracticalTrafficCases,
  DriverUnit,
  PracticalTrafficCase,
  DriverQuestion,
  RoadSign,
} from '../data/driverLicense';

// Re-exportación retrocompatible de tipos y colecciones para consumidores externos y tests
export { DRIVER_QUESTIONS, OFFICIAL_ROAD_SIGNS };
export type { DriverQuestion, RoadSign, DriverUnit, PracticalTrafficCase };

type SubTab = 'study' | 'cases' | 'signs' | 'quiz';

export const DriverLicenseView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('study');

  // Estado del lector de unidades curriculares
  const [selectedUnitId, setSelectedUnitId] = useState<string>(DRIVER_CURRICULUM_UNITS[0].id);
  const [completedUnits, setCompletedUnits] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kuskat_vmt_completed_units');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const activeUnit = useMemo(() => {
    return DRIVER_CURRICULUM_UNITS.find(u => u.id === selectedUnitId) || DRIVER_CURRICULUM_UNITS[0];
  }, [selectedUnitId]);

  const toggleUnitCompletion = (unitId: string) => {
    setCompletedUnits(prev => {
      const next = prev.includes(unitId) ? prev.filter(id => id !== unitId) : [...prev, unitId];
      try {
        localStorage.setItem('kuskat_vmt_completed_units', JSON.stringify(next));
      } catch {
        // Ignorar errores de almacenamiento local
      }
      return next;
    });
  };

  // Estado del navegador de casos prácticos
  const [caseUnitFilter, setCaseUnitFilter] = useState<string>('all');
  const [caseSearchQuery, setCaseSearchQuery] = useState<string>('');
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);

  const allCases = useMemo(() => getAllPracticalTrafficCases(), []);

  const filteredCases = useMemo(() => {
    return allCases.filter(c => {
      const matchesUnit = caseUnitFilter === 'all' || c.id.startsWith(`tc-${caseUnitFilter.replace('u', 'u')}`);
      if (!matchesUnit) return false;

      if (!caseSearchQuery.trim()) return true;
      const q = caseSearchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.scenario.toLowerCase().includes(q) ||
        c.legalReference.toLowerCase().includes(q) ||
        c.analysis.toLowerCase().includes(q) ||
        c.resolvedOutcome.toLowerCase().includes(q)
      );
    });
  }, [allCases, caseUnitFilter, caseSearchQuery]);

  // Estado del catálogo de señales viales
  const [signFilter, setSignFilter] = useState<'all' | 'reglamentaria' | 'preventiva' | 'informativa'>('all');
  const [signSearchQuery, setSignSearchQuery] = useState<string>('');

  const filteredSigns = useMemo(() => {
    return OFFICIAL_ROAD_SIGNS.filter(sign => {
      const matchesCategory = signFilter === 'all' || sign.category === signFilter || sign.type === signFilter;
      if (!matchesCategory) return false;

      if (!signSearchQuery.trim()) return true;
      const q = signSearchQuery.toLowerCase();
      return (
        sign.name.toLowerCase().includes(q) ||
        sign.siecaCode.toLowerCase().includes(q) ||
        sign.meaning.toLowerCase().includes(q) ||
        sign.rule.toLowerCase().includes(q)
      );
    });
  }, [signFilter, signSearchQuery]);

  // Estado del simulador de evaluación VMT
  const [examType, setExamType] = useState<'official30' | 'all56'>('official30');
  const [activeCategory, setActiveCategory] = useState<'all' | 'teorico' | 'psicologico'>('all');
  const [quizQuestions, setQuizQuestions] = useState<DriverQuestion[]>(() => generateOfficialVmtExam(30));
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  // Temporizador oficial de 30 minutos
  const [isTimedExam, setIsTimedExam] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && secondsRemaining > 0 && !showResults) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            setShowResults(true);
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, secondsRemaining, showResults]);

  const handleStartTimedExam = () => {
    const examSet = generateOfficialVmtExam(30);
    setQuizQuestions(examSet);
    setIsTimedExam(true);
    setSecondsRemaining(30 * 60);
    setTimerRunning(true);
    setUserAnswers({});
    setShowResults(false);
    setActiveSubTab('quiz');
  };

  const handleSwitchExamMode = (mode: 'official30' | 'all56') => {
    setExamType(mode);
    if (mode === 'official30') {
      setQuizQuestions(generateOfficialVmtExam(30));
    } else {
      setQuizQuestions(DRIVER_QUESTIONS);
    }
    setUserAnswers({});
    setShowResults(false);
    setTimerRunning(false);
    setSecondsRemaining(30 * 60);
    setIsTimedExam(false);
  };

  const filteredQuizQuestions = useMemo(() => {
    if (activeCategory === 'all') return quizQuestions;
    return quizQuestions.filter(q => q.category === activeCategory);
  }, [quizQuestions, activeCategory]);

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionKey }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
    setTimerRunning(false);
    setSecondsRemaining(30 * 60);
    if (examType === 'official30') {
      setQuizQuestions(generateOfficialVmtExam(30));
    }
  };

  // Cálculo de notas y métricas oficiales VMT
  const correctCount = useMemo(() => {
    return filteredQuizQuestions.reduce((acc, q) => {
      return acc + (userAnswers[q.id] === q.correctKey ? 1 : 0);
    }, 0);
  }, [filteredQuizQuestions, userAnswers]);

  const totalAnswered = useMemo(() => {
    return filteredQuizQuestions.filter(q => userAnswers[q.id] !== undefined).length;
  }, [filteredQuizQuestions, userAnswers]);

  const scorePercentage = Math.round((correctCount / (filteredQuizQuestions.length || 1)) * 100);
  const scoreBase10 = ((scorePercentage / 100) * 10).toFixed(1);
  const isPassingScore = parseFloat(scoreBase10) >= 8.0;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const getUnitIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2':
        return <FileCheck2 className="w-4 h-4" />;
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'Gauge':
        return <Gauge className="w-4 h-4" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4" />;
      case 'Car':
        return <Car className="w-4 h-4" />;
      case 'AlertOctagon':
        return <AlertOctagon className="w-4 h-4" />;
      case 'Brain':
        return <Brain className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans-ui pb-12">
      {/* ==================================================================== */}
      {/* ENCABEZADO INSTITUCIONAL CORPORATIVO VMT / KUSKAT */}
      {/* ==================================================================== */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-2xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132A5C] text-[#C59B27] text-xs font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30 shadow-xs">
              <Car className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>VMT • SERTRACEN • Academia Nacional de Tránsito y Seguridad Vial</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono-exam text-[#94A3B8]">
              <span>Progreso:</span>
              <strong className="text-[#C59B27]">
                {completedUnits.length} / {DRIVER_CURRICULUM_UNITS.length} Unidades
              </strong>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Preparación para Licencias de Conducir (Teórico & Psicológico)
          </h2>
          <p className="text-[#CBD5E1] text-xs sm:text-sm max-w-3xl leading-relaxed">
            Plataforma oficial integral para aspirantes a licencias de conducir en El Salvador (Juvenil, Particular, Liviana, Pesada, Pesada T y Motocicleta).
            Abarca la Ley de Transporte Terrestre (DL 477), Reglamento General de Tránsito (DE 86), Art. 147-E del Código Penal, Ley FONAT, 40 casos prácticos y simulador oficial de 30 preguntas.
          </p>

          {/* Barra de Navegación de 4 Modos */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveSubTab('study');
                setIsTimedExam(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 font-mono-exam ${
                activeSubTab === 'study'
                  ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-sm font-extrabold'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#C59B27]" />
              <span>1. Manual Curricular (8 Unidades)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveSubTab('cases');
                setIsTimedExam(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 font-mono-exam ${
                activeSubTab === 'cases'
                  ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-sm font-extrabold'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <Scale className="w-4 h-4 text-[#C59B27]" />
              <span>2. Casos Prácticos Resueltos (40)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveSubTab('signs');
                setIsTimedExam(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 font-mono-exam ${
                activeSubTab === 'signs'
                  ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-sm font-extrabold'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <Compass className="w-4 h-4 text-[#C59B27]" />
              <span>3. Catálogo de Señales SIECA (27)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSubTab('quiz')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 font-mono-exam ${
                activeSubTab === 'quiz'
                  ? 'bg-[#C59B27] text-[#07132B] shadow-sm font-extrabold'
                  : 'bg-[#132A5C] text-[#C59B27] border border-[#C59B27]/40 hover:bg-[#1A3875]'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>4. Simulador de Examen VMT</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* MODO 1: LECTOR CURRICULAR DE 8 UNIDADES (ESTUDIO PROFUNDO) */}
      {/* ==================================================================== */}
      {activeSubTab === 'study' && (
        <div className="space-y-6">
          {/* Selector de Unidades en Cuadrícula */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {DRIVER_CURRICULUM_UNITS.map((unit, idx) => {
              const isSelected = unit.id === selectedUnitId;
              const isDone = completedUnits.includes(unit.id);
              return (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnitId(unit.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 font-sans-ui ${
                    isSelected
                      ? 'bg-[#0B1B3D] text-white border-[#1A2E5A] shadow-corporate-subtle ring-2 ring-[#C59B27]'
                      : 'bg-white text-[#1E293B] border-[#E5E3D8] hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono-exam font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-[#132A5C] text-[#C59B27]' : 'bg-[#FAF9F5] text-[#64748B]'
                    }`}>
                      Unidad {idx + 1}
                    </span>
                    {isDone && (
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                  <h4 className="font-editorial text-xs font-bold line-clamp-2 leading-snug">
                    {unit.title}
                  </h4>
                  <div className="text-[10px] font-mono-exam opacity-75 flex items-center gap-1">
                    <span>5 casos prácticos</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel Principal del Lector de la Unidad Seleccionada */}
          <div className="bg-white rounded-2xl border border-[#E5E3D8] p-6 sm:p-8 shadow-corporate-card space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E5E3D8]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#0B1B3D] text-[#C59B27] flex items-center justify-center font-bold">
                    {getUnitIcon(activeUnit.icon)}
                  </span>
                  <span className="font-mono-exam text-xs font-bold text-[#C59B27] uppercase tracking-wider">
                    Contenido Curricular Obligatorio VMT
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#111625]">
                  {activeUnit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  {activeUnit.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleUnitCompletion(activeUnit.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono-exam font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    completedUnits.includes(activeUnit.id)
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                      : 'bg-[#FAF9F5] text-[#0B1B3D] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
                  }`}
                >
                  <BookCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    {completedUnits.includes(activeUnit.id) ? 'Unidad Completada' : 'Marcar como Leída'}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setCaseUnitFilter(activeUnit.id.replace('u', 'u'));
                    setActiveSubTab('cases');
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono-exam font-bold bg-[#0B1B3D] hover:bg-[#132A5C] text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <Scale className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Ver 5 Casos ({activeUnit.practicalCases.length})</span>
                </button>
              </div>
            </div>

            {/* Texto Sustantivo de la Unidad */}
            <div className="prose prose-slate max-w-none text-[#334155] text-sm leading-relaxed space-y-4">
              {activeUnit.substantiveTheory.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Acceso Rápido a Casos de la Unidad */}
            <div className="bg-[#FAF9F5] p-5 rounded-xl border border-[#E5E3D8] space-y-3">
              <h4 className="font-mono-exam text-xs font-bold text-[#0B1B3D] uppercase tracking-wider flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#C59B27]" />
                <span>Casos Prácticos Analizados de esta Unidad</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeUnit.practicalCases.map(c => (
                  <div
                    key={c.id}
                    onClick={() => {
                      setExpandedCaseId(c.id);
                      setCaseUnitFilter('all');
                      setActiveSubTab('cases');
                    }}
                    className="p-2.5 bg-white rounded-lg border border-[#E5E3D8] hover:border-[#C59B27] cursor-pointer transition-all flex items-center justify-between text-xs"
                  >
                    <span className="font-semibold text-[#1E293B] truncate mr-2">{c.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODO 2: CASOS PRÁCTICOS RESUELTOS (40 CASOS) */}
      {/* ==================================================================== */}
      {activeSubTab === 'cases' && (
        <div className="space-y-6">
          {/* Barra de Filtros y Búsqueda */}
          <div className="bg-white p-4 rounded-2xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono-exam">
              <Filter className="w-4 h-4 text-[#64748B]" />
              <button
                onClick={() => setCaseUnitFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  caseUnitFilter === 'all'
                    ? 'bg-[#0B1B3D] text-white'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Todos ({allCases.length})
              </button>
              {DRIVER_CURRICULUM_UNITS.map((u, i) => (
                <button
                  key={u.id}
                  onClick={() => setCaseUnitFilter(`u${i + 1}`)}
                  className={`px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    caseUnitFilter === `u${i + 1}`
                      ? 'bg-[#0B1B3D] text-white'
                      : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                  }`}
                >
                  U{i + 1}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Buscar caso, carretera o ley..."
                value={caseSearchQuery}
                onChange={e => setCaseSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-3 py-1.5 rounded-lg border border-[#E5E3D8] text-xs font-sans-ui focus:outline-none focus:ring-2 focus:ring-[#0B1B3D]"
              />
            </div>
          </div>

          {/* Listado de Casos Prácticos */}
          <div className="space-y-4">
            {filteredCases.map(c => {
              const isExpanded = expandedCaseId === c.id;
              return (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card overflow-hidden transition-all"
                >
                  <div
                    onClick={() => setExpandedCaseId(isExpanded ? null : c.id)}
                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-[#FAF9F5] transition-colors"
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-exam text-[10px] font-bold bg-[#0B1B3D] text-[#C59B27] px-2 py-0.5 rounded">
                          {c.id.toUpperCase()}
                        </span>
                        <span className="font-mono-exam text-[10px] text-[#64748B] uppercase">
                          Tránsito y Seguridad Vial
                        </span>
                      </div>
                      <h4 className="font-editorial text-base sm:text-lg font-bold text-[#111625]">
                        {c.title}
                      </h4>
                    </div>

                    <div className="shrink-0 text-[#0B1B3D]">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-[#EAE8DD] space-y-4 text-xs sm:text-sm text-[#334155] font-sans-ui">
                      {/* Escenario de Tránsito */}
                      <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] space-y-1.5">
                        <strong className="font-mono-exam text-[11px] text-[#0B1B3D] uppercase tracking-wider block">
                          📍 Escenario de Tránsito en El Salvador:
                        </strong>
                        <p className="leading-relaxed text-[#475569]">{c.scenario}</p>
                      </div>

                      {/* Fundamento Legal */}
                      <div className="flex items-start gap-2 bg-amber-50/60 p-3 rounded-lg border border-amber-200/80 text-amber-950">
                        <Scale className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-mono-exam text-[11px] block text-amber-900">
                            Fundamentación Jurídica Aplicable:
                          </strong>
                          <span>{c.legalReference}</span>
                        </div>
                      </div>

                      {/* Análisis Técnico */}
                      <div className="space-y-1">
                        <strong className="font-mono-exam text-[11px] text-[#0B1B3D] uppercase tracking-wider block">
                          ⚙️ Análisis Técnico y Cinemático:
                        </strong>
                        <p className="leading-relaxed pl-2 text-[#475569]">{c.analysis}</p>
                      </div>

                      {/* Resolución Oficial */}
                      <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-300 text-emerald-950 space-y-1">
                        <strong className="font-mono-exam text-[11px] text-emerald-900 uppercase tracking-wider block flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Resolución Oficial y Responsabilidad Determinada:</span>
                        </strong>
                        <p className="leading-relaxed">{c.resolvedOutcome}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODO 3: CATÁLOGO OFICIAL DE SEÑALIZACIÓN SIECA (27 SEÑALES) */}
      {/* ==================================================================== */}
      {activeSubTab === 'signs' && (
        <div className="space-y-6">
          {/* Barra de Filtros y Búsqueda */}
          <div className="bg-white p-4 rounded-2xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono-exam">
              <button
                onClick={() => setSignFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  signFilter === 'all'
                    ? 'bg-[#0B1B3D] text-white'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Todas ({OFFICIAL_ROAD_SIGNS.length})
              </button>
              <button
                onClick={() => setSignFilter('reglamentaria')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  signFilter === 'reglamentaria'
                    ? 'bg-[#DC2626] text-white'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Reglamentarias (9)
              </button>
              <button
                onClick={() => setSignFilter('preventiva')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  signFilter === 'preventiva'
                    ? 'bg-[#EAB308] text-[#111827]'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Preventivas (9)
              </button>
              <button
                onClick={() => setSignFilter('informativa')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  signFilter === 'informativa'
                    ? 'bg-[#1D4ED8] text-white'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Informativas (9)
              </button>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Buscar señal o código SIECA..."
                value={signSearchQuery}
                onChange={e => setSignSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-3 py-1.5 rounded-lg border border-[#E5E3D8] text-xs font-sans-ui focus:outline-none focus:ring-2 focus:ring-[#0B1B3D]"
              />
            </div>
          </div>

          {/* Cuadrícula de Señales Viales con Vectores SVG */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSigns.map(sign => (
              <div
                key={sign.id}
                className="bg-white p-5 rounded-2xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col justify-between space-y-3 font-sans-ui hover:border-[#C59B27] transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className="shrink-0 p-2 bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] flex items-center justify-center shadow-xs"
                    dangerouslySetInnerHTML={{ __html: sign.iconSvg }}
                  />
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono-exam text-[10px] font-bold bg-[#0B1B3D] text-[#FAF9F5] px-2 py-0.5 rounded">
                        {sign.siecaCode}
                      </span>
                      <span className={`text-[10px] font-mono-exam uppercase px-1.5 py-0.5 rounded font-bold ${
                        sign.category === 'reglamentaria'
                          ? 'bg-red-50 text-red-700'
                          : sign.category === 'preventiva'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-blue-50 text-blue-700'
                      }`}>
                        {sign.category}
                      </span>
                    </div>
                    <h4 className="font-editorial font-bold text-sm text-[#111625] pt-1">
                      {sign.name}
                    </h4>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#334155] border-t border-[#E5E3D8] pt-2.5">
                  <p className="leading-relaxed text-[#475569]">{sign.meaning}</p>
                  <div className="bg-[#FAF9F5] p-2.5 rounded-lg border border-[#E5E3D8] text-[11px] font-mono-exam text-[#0B1B3D] leading-snug">
                    <strong>Regla Legal:</strong> {sign.rule}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODO 4: SIMULADOR DE EVALUACIÓN OFICIAL VMT (30 PREGUNTAS / 30 MIN) */}
      {/* ==================================================================== */}
      {activeSubTab === 'quiz' && (
        <div className="space-y-6">
          {/* Barra de Control del Examen */}
          <div className="bg-white p-4 rounded-2xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono-exam">
              <button
                onClick={() => handleSwitchExamMode('official30')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  examType === 'official30'
                    ? 'bg-[#0B1B3D] text-white shadow-xs'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Examen Oficial VMT (30)
              </button>
              <button
                onClick={() => handleSwitchExamMode('all56')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  examType === 'all56'
                    ? 'bg-[#0B1B3D] text-white shadow-xs'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Banco Completo ({DRIVER_QUESTIONS.length})
              </button>

              <span className="text-[#CBD5E1]">|</span>

              <button
                onClick={() => setActiveCategory('all')}
                className={`px-2.5 py-1 rounded-md font-bold cursor-pointer ${
                  activeCategory === 'all' ? 'bg-[#132A5C] text-[#C59B27]' : 'text-[#64748B]'
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setActiveCategory('teorico')}
                className={`px-2.5 py-1 rounded-md font-bold cursor-pointer ${
                  activeCategory === 'teorico' ? 'bg-[#132A5C] text-[#C59B27]' : 'text-[#64748B]'
                }`}
              >
                Teórico
              </button>
              <button
                onClick={() => setActiveCategory('psicologico')}
                className={`px-2.5 py-1 rounded-md font-bold cursor-pointer ${
                  activeCategory === 'psicologico' ? 'bg-[#132A5C] text-[#C59B27]' : 'text-[#64748B]'
                }`}
              >
                Psicológico
              </button>
            </div>

            <div className="flex items-center gap-2">
              {!isTimedExam ? (
                <button
                  onClick={handleStartTimedExam}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#9E472A] hover:bg-[#853a22] text-white font-mono-exam flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Iniciar Examen Oficial (30 Min)</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-[#FAF9F5] px-3.5 py-1.5 rounded-xl border border-[#C59B27] font-mono-exam text-xs shadow-xs">
                  <Clock className="w-4 h-4 text-[#9E472A] animate-pulse" />
                  <span className="font-bold text-[#0B1B3D]">Tiempo Restante:</span>
                  <span className="font-black text-sm text-[#9E472A]">{formatTimer(secondsRemaining)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tarjeta de Boleta de Resultados */}
          {showResults && (
            <div className="bg-[#FAF9F5] border-2 border-[#C59B27] rounded-2xl p-6 shadow-corporate-card space-y-4 animate-fade-in font-sans-ui">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h4 className="font-editorial text-xl font-bold text-[#111625] flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#C59B27]" />
                  Boleta Oficial de Resultados • VMT / SERTRACEN
                </h4>
                <span className={`px-3 py-1 rounded-full text-xs font-mono-exam font-bold uppercase shadow-xs ${
                  isPassingScore ? 'bg-[#1E7E34] text-white' : 'bg-[#9E472A] text-white'
                }`}>
                  {isPassingScore ? 'Aprobado Satisfactorio (Apto para Licencia)' : 'Reprobado (Mínimo 8.0 Exigido)'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-exam">
                <div className="bg-white p-3.5 rounded-xl border border-[#E5E3D8] text-center shadow-xs">
                  <span className="text-[10px] text-[#64748B] block">Nota Oficial</span>
                  <span className={`text-2xl font-black ${isPassingScore ? 'text-[#1E7E34]' : 'text-[#9E472A]'}`}>
                    {scoreBase10} / 10.0
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E5E3D8] text-center shadow-xs">
                  <span className="text-[10px] text-[#64748B] block">Aciertos</span>
                  <span className="text-2xl font-bold text-[#1E7E34]">{correctCount}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E5E3D8] text-center shadow-xs">
                  <span className="text-[10px] text-[#64748B] block">Errores</span>
                  <span className="text-2xl font-bold text-[#9E472A]">{filteredQuizQuestions.length - correctCount}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E5E3D8] text-center shadow-xs">
                  <span className="text-[10px] text-[#64748B] block">Exigencia Legal</span>
                  <span className="text-2xl font-bold text-[#0B1B3D]">80% (8.0/10)</span>
                </div>
              </div>
            </div>
          )}

          {/* Listado de Preguntas Interactivas */}
          <div className="space-y-4">
            {filteredQuizQuestions.map((q, idx) => {
              const selectedKey = userAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-subtle p-5 sm:p-6 space-y-3.5 font-sans-ui"
                >
                  <div className="flex flex-wrap items-center justify-between text-xs pb-2 border-b border-[#EAE8DD] gap-2">
                    <span className="font-mono-exam font-bold text-[#0B1B3D]">
                      Pregunta {idx + 1} de {filteredQuizQuestions.length} • {q.topic}
                    </span>
                    <span className="text-[10px] font-mono-exam bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8] text-[#64748B] uppercase">
                      {q.category}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-[#111625] leading-relaxed">
                    {q.question || q.statement}
                  </p>

                  <div className="space-y-2 pt-1">
                    {q.options.map((optText, optIdx) => {
                      const optKey = ['A', 'B', 'C', 'D'][optIdx];
                      const isSelected = selectedKey === optKey;
                      const isCorrect = optKey === q.correctKey;

                      let style = 'bg-[#FAF9F5] border-[#E5E3D8] hover:bg-[#F2F1EA] text-[#111625]';
                      let badge = 'bg-white text-[#475569] border-[#E5E3D8]';

                      if (showResults) {
                        if (isCorrect) {
                          style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold';
                          badge = 'bg-[#1E7E34] text-white border-transparent';
                        } else if (isSelected && !isCorrect) {
                          style = 'bg-rose-50 border-rose-400 text-rose-950';
                          badge = 'bg-[#9E472A] text-white border-transparent';
                        }
                      } else if (isSelected) {
                        style = 'bg-[#0B1B3D] border-[#1A2E5A] text-white';
                        badge = 'bg-white text-[#0B1B3D] border-transparent font-bold';
                      }

                      return (
                        <div
                          key={optKey}
                          onClick={() => handleSelectOption(q.id, optKey)}
                          className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer text-xs sm:text-sm ${style}`}
                        >
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono-exam font-bold shrink-0 text-xs border ${badge}`}>
                            {optKey}
                          </span>
                          <span className="flex-1 pt-0.5 leading-snug">{optText}</span>
                        </div>
                      );
                    })}
                  </div>

                  {showResults && (
                    <div className="mt-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5E3D8] text-xs text-[#334155] space-y-1.5 font-sans-ui">
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                        <HelpCircle className="w-4 h-4 text-[#C59B27]" />
                        <span>Fundamentación Legal y Técnica Oficial:</span>
                      </div>
                      <p className="leading-relaxed pl-5 text-[#475569]">{q.explanation}</p>
                      {q.legalReference && (
                        <div className="pl-5 pt-1 text-[11px] font-mono-exam text-[#0B1B3D]">
                          <strong>Artículo de Referencia:</strong> {q.legalReference}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Botones de Acción */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleResetQuiz}
              className="px-4 py-2.5 rounded-xl border border-[#E5E3D8] text-xs font-bold text-[#475569] hover:bg-[#FAF9F5] transition-colors flex items-center gap-1.5 cursor-pointer font-mono-exam"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar Examen</span>
            </button>

            {!showResults ? (
              <button
                onClick={() => {
                  setShowResults(true);
                  setTimerRunning(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-bold transition-all shadow-corporate-card flex items-center gap-2 cursor-pointer font-mono-exam"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Calificar y Ver Solucionario ({totalAnswered}/{filteredQuizQuestions.length})</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleResetQuiz();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-bold transition-all shadow-corporate-card flex items-center gap-2 cursor-pointer font-mono-exam"
              >
                <span>Generar Nuevo Examen Oficial</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverLicenseView;
