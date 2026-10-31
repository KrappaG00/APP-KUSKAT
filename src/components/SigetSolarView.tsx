import React, { useState, useEffect, useMemo } from 'react';
import {
  Sun,
  Zap,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  ArrowRight,
  Filter,
  Check,
  AlertTriangle,
  FileText,
  CheckSquare,
  Flame,
  Info,
  BookOpen,
  Calculator,
  Search,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  SIGET_SECTORS,
  SIGET_SOLAR_QUESTIONS,
  SOLAR_INTERCONNECTION_CHECKLIST,
  SIGET_THEMATIC_UNITS,
  SigetSolarQuestion,
  SigetThematicUnit,
  SolvedEngineeringCalculation,
} from '../data/sigetSolarData';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { CertificateModal } from './CertificateModal';
import { AudioSpeechButton } from './AudioSpeechButton';

interface SigetSolarViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

type ActiveTab =
  | 'thematic-units'
  | 'engineering-calculations'
  | 'simulator'
  | 'checklist'
  | 'categories';

export const SigetSolarView: React.FC<SigetSolarViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('thematic-units');

  // Estado para Pestaña 1: Unidades Técnicas & Normativa
  const [selectedUnitId, setSelectedUnitId] = useState<string>(
    SIGET_THEMATIC_UNITS[0]?.id || 'unit-1-ntcogd-medicion-neta'
  );

  // Estado para Pestaña 2: Memorias de Cálculo
  const [calcFilterUnit, setCalcFilterUnit] = useState<string>('all');
  const [calcSearchQuery, setCalcSearchQuery] = useState<string>('');
  const [expandedCalc, setExpandedCalc] = useState<Record<string, boolean>>({});

  // Estado para Pestaña 3: Simulador de Examen
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(30 * 60);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [expandedRationale, setExpandedRationale] = useState<Record<string, boolean>>({});

  // Checklist interactivo de interconexión
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  // Modal de Certificación Oficial
  const [issuedCert, setIssuedCert] = useState<AcademicCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  // Unidad técnica activa seleccionada
  const activeUnit = useMemo<SigetThematicUnit>(() => {
    return (
      SIGET_THEMATIC_UNITS.find((u) => u.id === selectedUnitId) ||
      SIGET_THEMATIC_UNITS[0]
    );
  }, [selectedUnitId]);

  // Todas las 25 memorias de cálculo consolidadas
  const allCalculations = useMemo<SolvedEngineeringCalculation[]>(() => {
    return SIGET_THEMATIC_UNITS.flatMap((u) => u.solvedCalculations);
  }, []);

  // Memorias de cálculo filtradas
  const filteredCalculations = useMemo(() => {
    return allCalculations.filter((c) => {
      const matchesUnit =
        calcFilterUnit === 'all' || c.unitId === calcFilterUnit;
      const matchesQuery =
        !calcSearchQuery.trim() ||
        c.title.toLowerCase().includes(calcSearchQuery.toLowerCase()) ||
        c.problemStatement.toLowerCase().includes(calcSearchQuery.toLowerCase()) ||
        c.numericalResult.toLowerCase().includes(calcSearchQuery.toLowerCase());
      return matchesUnit && matchesQuery;
    });
  }, [allCalculations, calcFilterUnit, calcSearchQuery]);

  // Preguntas filtradas para el simulador
  const filteredQuestions = useMemo(() => {
    if (selectedSector === 'all') return SIGET_SOLAR_QUESTIONS;
    return SIGET_SOLAR_QUESTIONS.filter((q) => q.category === selectedSector);
  }, [selectedSector]);

  // Cronómetro en Modo Examen Oficial
  useEffect(() => {
    if (!isExamMode || !examStarted || examSubmitted) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setExamSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isExamMode, examStarted, examSubmitted]);

  // Al calificar, registrar errores automáticamente en el Cuaderno Inteligente FSRS
  useEffect(() => {
    if (examSubmitted) {
      filteredQuestions.forEach((q) => {
        const userAns = userAnswers[q.id];
        if (userAns !== q.correctAnswer) {
          logQuestionError({
            questionId: q.id,
            questionText: q.statement,
            categoryKey: `Energía Solar SIGET • ${q.categoryLabel}`,
            selectedAnswer: userAns || '(Sin contestar)',
            correctAnswer: q.correctAnswer,
            options: q.options,
            explanation: `${q.explanation}\n\nBase Técnica/Legal: ${q.technicalBasis}`,
          });
        }
      });
    }
  }, [examSubmitted, filteredQuestions, userAnswers]);

  const handleSelectAnswer = (qId: string, optKey: 'A' | 'B' | 'C' | 'D') => {
    if (examSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optKey }));
  };

  const handleToggleRationale = (qId: string) => {
    setExpandedRationale((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleToggleCalc = (cId: string) => {
    setExpandedCalc((prev) => ({ ...prev, [cId]: !prev[cId] }));
  };

  const handleToggleStep = (stepId: string) => {
    setCompletedSteps((prev) => ({ ...prev, [stepId]: !prev[stepId] }));
  };

  const examStats = useMemo(() => {
    let correct = 0;
    let answered = 0;
    filteredQuestions.forEach((q) => {
      if (userAnswers[q.id]) {
        answered++;
        if (userAnswers[q.id] === q.correctAnswer) correct++;
      }
    });
    const total = filteredQuestions.length;
    const score = total > 0 ? (correct / total) * 10 : 0;
    const isPassed = score >= 8.0;
    return { correct, answered, total, score: score.toFixed(1), isPassed };
  }, [filteredQuestions, userAnswers]);

  const handleReset = () => {
    setUserAnswers({});
    setExamSubmitted(false);
    setExamStarted(false);
    setSecondsLeft(30 * 60);
    setExpandedRationale({});
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleGenerateCertificate = async () => {
    const cert = await issueCertificate({
      studentName: 'Técnico Instalador / Electricista SIGET',
      studentId: 'SIGET-PV-' + Math.floor(10000 + Math.random() * 90000),
      moduleKey: `SOLAR_SIGET_${selectedSector.toUpperCase()}`,
      moduleTitle: 'Acreditación Técnica en Sistemas Fotovoltaicos y Normativa NTCOGD (SIGET)',
      institutionAuthority: 'Superintendencia General de Electricidad y Telecomunicaciones (SIGET)',
      score: `${examStats.score} / 10.0`,
      numericScore: parseFloat(examStats.score),
      passingScoreRequired: '8.0 / 10.0',
    });
    setIssuedCert(cert);
    setIsCertModalOpen(true);
    if (showToast) {
      showToast('¡Certificado emitido con éxito con Código QR criptográfico!');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-800 pb-24">
      {/* HEADER INSTITUCIONAL */}
      <header className="bg-gradient-to-b from-[#0B1B3D] to-[#122B5E] text-white border-b-4 border-[#C59B27] py-8 px-4 sm:px-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C59B27]/20 text-[#FAF9F5] border border-[#C59B27]/40 tracking-wide">
                  <Sun className="w-3.5 h-3.5 text-[#C59B27]" />
                  República de El Salvador · SIGET & CNE
                </span>
                <span className="text-xs text-amber-200/90 font-mono">
                  NTCOGD Acuerdo N° 343-E-2016 · NEC 690 · IEEE 1547
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F5] tracking-tight">
                Ingeniería Solar Fotovoltaica & Acreditación Eléctrica SIGET
              </h1>
              <p className="mt-1 text-sm text-slate-200 max-w-3xl font-sans leading-relaxed">
                Marco normativo de generación distribuida con AES y DELSUR, 5 unidades técnicas sustantivas, 
                25 memorias de cálculo de ingeniería resueltas paso a paso y simulador con 52 reactivos interactivos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {onOpenErrorNotebook && (
                <button
                  onClick={onOpenErrorNotebook}
                  className="px-3.5 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all shadow-sm flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4 text-[#C59B27]" />
                  Cuaderno de Errores FSRS
                </button>
              )}
            </div>
          </div>

          {/* NAVEGACIÓN ENTRE LAS SECCIONES PRINCIPALES */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
            <button
              onClick={() => setActiveTab('thematic-units')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'thematic-units'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              1. Unidades Técnicas & Normativa (5)
            </button>
            <button
              onClick={() => setActiveTab('engineering-calculations')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'engineering-calculations'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Calculator className="w-4 h-4" />
              2. Memorias de Cálculo (25)
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'simulator'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Zap className="w-4 h-4" />
              3. Simulador de Acreditación (52)
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'checklist'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              Checklist Interconexión
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'categories'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <FileText className="w-4 h-4" />
              Categorías SIGET
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* ========================================================================= */}
        {/* PESTAÑA 1: UNIDADES TÉCNICAS & NORMATIVA SUSTANTIVA */}
        {/* ========================================================================= */}
        {activeTab === 'thematic-units' && (
          <div className="space-y-6">
            {/* SELECTOR DE LAS 5 UNIDADES */}
            <div className="bg-white rounded-xl p-4 border border-[#E5E3D8] shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Seleccione la Unidad Temática de Estudio:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                {SIGET_THEMATIC_UNITS.map((u) => {
                  const isSelected = u.id === selectedUnitId;
                  return (
                    <button
                      key={u.id}
                      onClick={() => setSelectedUnitId(u.id)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#0B1B3D] border-[#0B1B3D] text-white shadow-md'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`font-mono font-bold px-1.5 py-0.5 rounded text-[10px] ${
                            isSelected
                              ? 'bg-[#C59B27] text-slate-900'
                              : 'bg-slate-200 text-slate-800'
                          }`}
                        >
                          Unidad {u.unitNumber}
                        </span>
                        <span className="text-[10px] text-amber-500 font-bold">
                          5 Cálculos
                        </span>
                      </div>
                      <span className="font-bold line-clamp-2 leading-snug">
                        {u.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DETALLE COMPLETO DE LA UNIDAD SELECCIONADA */}
            <article className="bg-white rounded-xl border border-[#E5E3D8] shadow-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#C59B27]/20 text-[#0B1B3D] border border-[#C59B27]/40">
                      Unidad {activeUnit.unitNumber} de 5
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Categoría: {activeUnit.normativeCategory}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                    {activeUnit.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {activeUnit.shortDescription}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <AudioSpeechButton
                    id={`speech-unit-${activeUnit.id}`}
                    textToSpeak={`Unidad ${activeUnit.unitNumber}: ${activeUnit.title}. ${activeUnit.substantiveTheory}`}
                    label="Escuchar lección técnica"
                  />
                  <button
                    onClick={() => {
                      setCalcFilterUnit(activeUnit.id);
                      setActiveTab('engineering-calculations');
                    }}
                    className="px-3.5 py-1.5 bg-[#0B1B3D] hover:bg-[#122B5E] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
                  >
                    <Calculator className="w-3.5 h-3.5 text-[#C59B27]" />
                    Ver 5 Cálculos
                  </button>
                </div>
              </div>

              {/* MARCO TEÓRICO SUSTANTIVO (>= 500 PALABRAS) */}
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 font-sans">
                {activeUnit.substantiveTheory.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-justify leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* REFERENCIAS NORMATIVAS Y LEGALES CLAVE */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#C59B27]" />
                  Referencias Normativas y Regulatorias Obligatorias:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {activeUnit.keyRegulatoryReferences.map((ref, rIdx) => (
                    <li
                      key={rIdx}
                      className="text-xs bg-slate-50 border border-slate-200 p-3 rounded-lg text-slate-800 flex items-start gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#C59B27] mt-1 shrink-0" />
                      <span className="leading-snug">{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ENLACE DIRECTO A LAS MEMORIAS DE CÁLCULO DE ESTA UNIDAD */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Calculator className="w-5 h-5 text-amber-700 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Memorias de Cálculo Resueltas para esta Unidad ({activeUnit.solvedCalculations.length})
                    </h4>
                    <p className="text-[11px] text-slate-600">
                      Ejercicios reales de diseño electromecánico contextualizados en proyectos de El Salvador.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setCalcFilterUnit(activeUnit.id);
                    setActiveTab('engineering-calculations');
                  }}
                  className="px-4 py-2 bg-[#0B1B3D] text-white text-xs font-bold rounded-lg hover:bg-[#122B5E] transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  Examinar Cálculos Paso a Paso
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                </button>
              </div>
            </article>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PESTAÑA 2: MEMORIAS DE CÁLCULO DE INGENIERÍA (25 CÁLCULOS PASO A PASO) */}
        {/* ========================================================================= */}
        {activeTab === 'engineering-calculations' && (
          <div className="space-y-6">
            {/* BARRA DE FILTROS Y BÚSQUEDA */}
            <div className="bg-white rounded-xl p-4 border border-[#E5E3D8] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  Filtrar:
                </span>
                <button
                  onClick={() => setCalcFilterUnit('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    calcFilterUnit === 'all'
                      ? 'bg-[#0B1B3D] text-white shadow-sm font-bold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  Todas (25 Cálculos)
                </button>
                {SIGET_THEMATIC_UNITS.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setCalcFilterUnit(u.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      calcFilterUnit === u.id
                        ? 'bg-[#0B1B3D] text-white shadow-sm font-bold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Unidad {u.unitNumber} ({u.solvedCalculations.length})
                  </button>
                ))}
              </div>

              {/* BUSCADOR */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Buscar cálculo (ej. ampacidad, tierra, litio)..."
                  value={calcSearchQuery}
                  onChange={(e) => setCalcSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] text-slate-800"
                />
              </div>
            </div>

            {/* LISTADO DE MEMORIAS DE CÁLCULO */}
            <div className="space-y-6">
              {filteredCalculations.length === 0 ? (
                <div className="bg-white rounded-xl p-8 text-center text-slate-500 border border-slate-200">
                  <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold">
                    No se encontraron memorias de cálculo con los filtros seleccionados.
                  </p>
                  <button
                    onClick={() => {
                      setCalcFilterUnit('all');
                      setCalcSearchQuery('');
                    }}
                    className="mt-3 px-4 py-1.5 text-xs font-bold bg-[#0B1B3D] text-white rounded-lg shadow-sm"
                  >
                    Restablecer Filtros
                  </button>
                </div>
              ) : (
                filteredCalculations.map((calc, cIdx) => {
                  const isExpanded = expandedCalc[calc.id] !== false; // Abierto por defecto
                  const parentUnit = SIGET_THEMATIC_UNITS.find(
                    (u) => u.id === calc.unitId
                  );

                  return (
                    <article
                      key={calc.id}
                      className="bg-white rounded-xl border border-[#E5E3D8] shadow-sm overflow-hidden transition-all hover:border-[#C59B27]/50"
                    >
                      {/* ENCABEZADO DEL CÁLCULO */}
                      <header
                        onClick={() => handleToggleCalc(calc.id)}
                        className="p-5 cursor-pointer flex items-start justify-between gap-4 bg-gradient-to-r from-slate-50/80 to-white hover:bg-slate-100/60 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-7 h-7 rounded-full bg-[#0B1B3D] text-[#FAF9F5] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {cIdx + 1}
                          </span>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                                Unidad {parentUnit?.unitNumber || '1'} · Memoria de Diseño
                              </span>
                              <span className="text-[11px] font-mono text-slate-500">
                                {calc.id}
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-slate-900 leading-snug">
                              {calc.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <AudioSpeechButton
                            id={`speech-calc-${calc.id}`}
                            textToSpeak={`${calc.title}. Planteamiento del problema: ${calc.problemStatement}. Resultado numérico: ${calc.numericalResult}. Dictamen de ingeniería: ${calc.practicalEngineeringJudgment}`}
                            label="Escuchar memoria de cálculo"
                          />
                          <button className="text-slate-500 hover:text-slate-800 p-1">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </header>

                      {/* CUERPO EXPANDIDO DEL CÁLCULO */}
                      {isExpanded && (
                        <div className="p-5 sm:p-6 border-t border-slate-200 space-y-5">
                          {/* PLANTEAMIENTO DEL PROBLEMA */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-[#0B1B3D]" />
                              Planteamiento del Problema en El Salvador:
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200 font-sans">
                              {calc.problemStatement}
                            </p>
                          </div>

                          {/* PARÁMETROS DE DISEÑO Y FÓRMULAS */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* PARÁMETROS DE DISEÑO */}
                            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1">
                                <Info className="w-3.5 h-3.5 text-blue-600" />
                                Parámetros de Diseño:
                              </h4>
                              <dl className="space-y-1.5 text-xs">
                                {Object.entries(calc.designParameters).map(
                                  ([k, v]) => (
                                    <div
                                      key={k}
                                      className="flex items-start justify-between gap-2 border-b border-slate-200/60 pb-1"
                                    >
                                      <dt className="text-slate-600 font-medium">{k}:</dt>
                                      <dd className="font-mono font-bold text-slate-900 text-right">
                                        {v}
                                      </dd>
                                    </div>
                                  )
                                )}
                              </dl>
                            </div>

                            {/* FÓRMULAS DE INGENIERÍA */}
                            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1">
                                <Flame className="w-3.5 h-3.5 text-amber-600" />
                                Fórmulas y Modelos Analíticos:
                              </h4>
                              <ul className="space-y-1.5 text-xs font-mono">
                                {calc.engineeringFormulas.map((formula, fIdx) => (
                                  <li
                                    key={fIdx}
                                    className="p-1.5 rounded bg-white border border-slate-200 text-slate-800"
                                  >
                                    {formula}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* SUSTITUCIÓN PASO A PASO */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                              Desarrollo y Sustitución Algebraica Paso a Paso:
                            </h4>
                            <pre className="text-xs font-mono bg-slate-900 text-emerald-400 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                              {calc.stepByStepSubstitution}
                            </pre>
                          </div>

                          {/* RESULTADO NUMÉRICO Y DICTAMEN DE INGENIERÍA */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* RESULTADO NUMÉRICO */}
                            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-950">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                Resultado Numérico con Unidades:
                              </h4>
                              <p className="text-sm font-bold font-mono mt-1 text-emerald-900">
                                {calc.numericalResult}
                              </p>
                            </div>

                            {/* DICTAMEN PRÁCTICO DE INGENIERÍA */}
                            <div className="p-4 rounded-lg bg-amber-50 border border-amber-300 text-amber-950">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1">
                                <Award className="w-4 h-4 text-amber-600" />
                                Criterio y Dictamen de Ingeniería en Campo:
                              </h4>
                              <p className="text-xs text-amber-900 leading-relaxed font-sans">
                                {calc.practicalEngineeringJudgment}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PESTAÑA 3: SIMULADOR DE ACREDITACIÓN SIGET (52 REACTIVOS) */}
        {/* ========================================================================= */}
        {activeTab === 'simulator' && (
          <div>
            {/* BARRA DE FILTROS Y CONTROL DE MODO */}
            <div className="bg-white rounded-xl p-4 border border-[#E5E3D8] shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  Módulo:
                </span>
                {SIGET_SECTORS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      setSelectedSector(sec.id);
                      handleReset();
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      selectedSector === sec.id
                        ? 'bg-[#0B1B3D] text-white shadow-sm font-bold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="mr-1">{sec.icon}</span>
                    {sec.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={isExamMode}
                    onChange={(e) => {
                      setIsExamMode(e.target.checked);
                      handleReset();
                    }}
                    className="w-4 h-4 text-[#0B1B3D] rounded border-slate-300 focus:ring-[#0B1B3D]"
                  />
                  <span>Modo Examen Oficial (30 min)</span>
                </label>

                {isExamMode && !examStarted && (
                  <button
                    onClick={() => setExamStarted(true)}
                    className="px-3.5 py-1.5 text-xs font-bold bg-[#0B1B3D] hover:bg-[#122B5E] text-white rounded-lg shadow-sm flex items-center gap-1.5"
                  >
                    Iniciar Examen
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  </button>
                )}

                {isExamMode && examStarted && !examSubmitted && (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-lg border border-amber-200 font-mono text-xs font-bold">
                    <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                    {formatTimer(secondsLeft)}
                  </div>
                )}
              </div>
            </div>

            {/* AVISO DE EXAMEN EN CURSO */}
            {isExamMode && !examStarted && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 text-center text-slate-700">
                <Sun className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="text-base font-bold text-slate-900">
                  Evaluación de Competencia Técnica en Energía Solar (SIGET)
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-lg mx-auto">
                  Este simulador evalúa conocimientos normativos de la NTCOGD (Acuerdo 343-E-2016),
                  dimensionamiento continuo según Código NEC Art. 690 (1.56 x Isc),
                  tiempos de protección anti-isla (&le; 2.0 s) y categorías de electricistas.
                  Requiere nota mínima de 8.0/10.0 para emisión de diploma con QR.
                </p>
                <button
                  onClick={() => setExamStarted(true)}
                  className="mt-4 px-6 py-2.5 bg-[#0B1B3D] hover:bg-[#122B5E] text-white font-semibold text-xs rounded-lg shadow transition-all"
                >
                  Comenzar Evaluación Cronometrada
                </button>
              </div>
            )}

            {/* LISTA DE PREGUNTAS */}
            {(!isExamMode || examStarted) && (
              <div className="space-y-6">
                {filteredQuestions.map((q, idx) => {
                  const selected = userAnswers[q.id];
                  const isAnswered = Boolean(selected);
                  const isCorrect = selected === q.correctAnswer;
                  const showFeedback = !isExamMode ? isAnswered : examSubmitted;

                  return (
                    <article
                      key={q.id}
                      className="bg-white rounded-xl border border-[#E5E3D8] shadow-sm p-5 transition-all hover:border-[#C59B27]/50"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0B1B3D] text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                            {q.categoryLabel}
                          </span>
                          <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                            {q.area}
                          </span>
                        </div>
                        <AudioSpeechButton
                          id={`siget-audio-${q.id}`}
                          textToSpeak={`${q.statement}. Opción A: ${q.options.A}. Opción B: ${q.options.B}. Opción C: ${q.options.C}. Opción D: ${q.options.D}.`}
                          label="Escuchar reactivo técnico"
                        />
                      </div>

                      <h4 className="text-sm font-semibold text-slate-900 mb-4 leading-relaxed font-sans">
                        {q.statement}
                      </h4>

                      {/* OPCIONES */}
                      <div className="grid grid-cols-1 gap-2.5 mb-4">
                        {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                          const optText = q.options[optKey];
                          const isOptionSelected = selected === optKey;
                          let btnStyle =
                            'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                          if (showFeedback) {
                            if (optKey === q.correctAnswer) {
                              btnStyle =
                                'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium ring-1 ring-emerald-500';
                            } else if (isOptionSelected && !isCorrect) {
                              btnStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                            } else {
                              btnStyle =
                                'bg-slate-50/60 border-slate-200 text-slate-400';
                            }
                          } else if (isOptionSelected) {
                            btnStyle =
                              'bg-[#0B1B3D] border-[#0B1B3D] text-white font-medium shadow-sm';
                          }

                          return (
                            <button
                              key={optKey}
                              disabled={examSubmitted}
                              onClick={() => handleSelectAnswer(q.id, optKey)}
                              className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-3 transition-all ${btnStyle}`}
                            >
                              <span
                                className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                                  isOptionSelected && !showFeedback
                                    ? 'bg-[#C59B27] text-slate-900'
                                    : 'bg-white/80 border border-slate-300 text-slate-700'
                                }`}
                              >
                                {optKey}
                              </span>
                              <span className="flex-1 leading-snug">{optText}</span>
                              {showFeedback && optKey === q.correctAnswer && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
                              )}
                              {showFeedback && isOptionSelected && !isCorrect && (
                                <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-1" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* RETROALIMENTACIÓN TÉCNICA DETALLADA */}
                      {showFeedback && (
                        <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
                          <div
                            className={`p-3 rounded-lg border text-xs leading-relaxed ${
                              isCorrect
                                ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                                : 'bg-rose-50/60 border-rose-200 text-rose-950'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 font-bold mb-1">
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>¡Respuesta Correcta!</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 text-rose-600" />
                                  <span>
                                    Respuesta Incorrecta. La opción válida es la{' '}
                                    <strong className="underline">
                                      {q.correctAnswer}
                                    </strong>
                                    .
                                  </span>
                                </>
                              )}
                            </div>
                            <p className="mt-1 text-slate-700">{q.explanation}</p>
                            <div className="mt-2 text-[11px] font-mono text-slate-500 border-t border-slate-200 pt-1.5">
                              <strong>Base Técnica/Legal:</strong> {q.technicalBasis}
                            </div>
                          </div>

                          {/* BOTÓN PARA EXPANDIR JUSTIFICACIÓN DE DISTRACTORES */}
                          {q.distractorRationale && (
                            <div>
                              <button
                                onClick={() => handleToggleRationale(q.id)}
                                className="text-xs text-[#0B1B3D] hover:text-[#C59B27] font-semibold flex items-center gap-1 transition-colors"
                              >
                                <HelpCircle className="w-3.5 h-3.5" />
                                {expandedRationale[q.id]
                                  ? 'Ocultar análisis de distractores'
                                  : 'Ver por qué son falsas las otras opciones'}
                              </button>

                              {expandedRationale[q.id] && (
                                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
                                  {(['A', 'B', 'C', 'D'] as const).map(
                                    (optKey) => {
                                      const rat = q.distractorRationale[optKey];
                                      if (!rat) return null;
                                      return (
                                        <div
                                          key={optKey}
                                          className={`p-2 rounded border text-[11px] leading-snug ${
                                            optKey === q.correctAnswer
                                              ? 'bg-emerald-50 border-emerald-200 text-emerald-900 font-medium'
                                              : 'bg-white border-slate-200 text-slate-600'
                                          }`}
                                        >
                                          <strong>Opción {optKey}:</strong> {rat}
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}

                {/* BOTÓN DE CALIFICACIÓN O REINICIO */}
                <div className="bg-white rounded-xl p-5 border border-[#E5E3D8] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-600">
                    Respondidas:{' '}
                    <strong className="text-slate-900">
                      {examStats.answered} de {examStats.total}
                    </strong>
                    {examSubmitted && (
                      <span className="ml-3">
                        Aciertos:{' '}
                        <strong className="text-emerald-700">
                          {examStats.correct}
                        </strong>{' '}
                        · Calificación:{' '}
                        <strong
                          className={
                            examStats.isPassed
                              ? 'text-emerald-600'
                              : 'text-rose-600'
                          }
                        >
                          {examStats.score}/10.0
                        </strong>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {isExamMode && !examSubmitted && (
                      <button
                        onClick={() => setExamSubmitted(true)}
                        className="px-5 py-2 bg-[#0B1B3D] hover:bg-[#122B5E] text-white text-xs font-bold rounded-lg shadow-sm transition-all"
                      >
                        Enviar y Calificar Examen
                      </button>
                    )}

                    {examSubmitted && (
                      <>
                        <button
                          onClick={handleReset}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          Reintentar Examen
                        </button>

                        {examStats.isPassed && (
                          <button
                            onClick={handleGenerateCertificate}
                            className="px-4 py-2 bg-[#C59B27] hover:bg-[#b08920] text-slate-900 text-xs font-bold rounded-lg shadow-md transition-all flex items-center gap-1.5"
                          >
                            <Award className="w-4 h-4" />
                            Emitir Certificado con QR
                          </button>
                        )}
                      </>
                    )}

                    {!isExamMode && (
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Limpiar Respuestas
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* PESTAÑA 4: CHECKLIST DE INTERCONEXIÓN (AES / DELSUR) */}
        {/* ========================================================================= */}
        {activeTab === 'checklist' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3D8] shadow-sm">
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Checklist Oficial de Interconexión UGD (AES El Salvador & DELSUR)
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Pasos y requerimientos mandatorios según el Acuerdo SIGET 343-E-2016 (NTCOGD)
                para autorizar e interconectar sistemas fotovoltaicos con inyección a la red eléctrica.
              </p>
            </div>

            <div className="space-y-4">
              {SOLAR_INTERCONNECTION_CHECKLIST.map((step) => {
                const isDone = Boolean(completedSteps[step.id]);

                return (
                  <div
                    key={step.id}
                    className={`bg-white rounded-xl border transition-all p-5 shadow-sm ${
                      isDone
                        ? 'border-emerald-400 bg-emerald-50/20'
                        : 'border-[#E5E3D8] hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => handleToggleStep(step.id)}
                          className={`mt-1 w-6 h-6 rounded flex items-center justify-center transition-all shrink-0 ${
                            isDone
                              ? 'bg-emerald-600 text-white'
                              : 'border-2 border-slate-300 hover:border-slate-500 bg-white'
                          }`}
                        >
                          {isDone && <Check className="w-4 h-4 stroke-[3]" />}
                        </button>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#0B1B3D]">
                              Etapa {step.stage}:
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                              {step.entity}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 mt-1">
                            {step.title}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {step.description}
                          </p>

                          {/* REQUISITOS TÉCNICOS */}
                          <div className="mt-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                              Requerimientos Obligatorios:
                            </h4>
                            <ul className="space-y-1.5">
                              {step.requirements.map((req, rIdx) => (
                                <li
                                  key={rIdx}
                                  className="text-xs text-slate-700 flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-2 text-[11px] text-slate-500 font-mono">
                            <span className="font-semibold text-slate-700">Referencia:</span> {step.normativeRef}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PESTAÑA 5: CATEGORÍAS DE ELECTRICISTAS & NEC 690 */}
        {/* ========================================================================= */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3D8] shadow-sm">
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Reglamento de Acreditación de Electricistas SIGET
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Clasificación oficial según el Reglamento para la Autorización y Registro de Instaladores 
                y Técnicos Electricistas emitido por la Superintendencia General de Electricidad y Telecomunicaciones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CUARTA CATEGORÍA */}
              <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-900">
                    Cuarta Categoría
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Hasta 5 kW</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Instalaciones Residenciales Básicas
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Habilita para proyectar, ejecutar y reparar instalaciones eléctricas residenciales 
                  monofásicas de baja tensión (120/240 V) con potencia máxima instalada de hasta 5 kW.
                </p>
                <div className="mt-3 text-[11px] bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-600">
                  <strong className="text-slate-800">Sistemas Solares:</strong> Microinversores o inversores monofásicos pequeños (&le; 5 kW AC).
                </div>
              </div>

              {/* TERCERA CATEGORÍA */}
              <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900">
                    Tercera Categoría
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Hasta 25 kVA</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Residencial Amplio y Pequeño Comercio
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Autoriza instalaciones en baja tensión de hasta 25 kVA. Comprende acometidas 
                  monofásicas y trifásicas de pequeño calibre para comercios, talleres y residencias grandes.
                </p>
                <div className="mt-3 text-[11px] bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-600">
                  <strong className="text-slate-800">Sistemas Solares:</strong> Techos residenciales grandes y comercios medianos con inversores string trifásicos de hasta 25 kVA.
                </div>
              </div>

              {/* SEGUNDA CATEGORÍA */}
              <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-purple-100 text-purple-900">
                    Segunda Categoría
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Hasta 150 kVA</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Técnico Electricista Industrial / Comercial
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Técnicos graduados facultados para instalaciones en baja tensión de hasta 150 kVA y 
                  montaje de bancos de transformación monofásicos o trifásicos comerciales.
                </p>
                <div className="mt-3 text-[11px] bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-600">
                  <strong className="text-slate-800">Sistemas Solares:</strong> Plantas fotovoltaicas comerciales sobre naves industriales e inmuebles con subestación de hasta 150 kVA.
                </div>
              </div>

              {/* PRIMERA CATEGORÍA */}
              <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-900">
                    Primera Categoría
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">Sin Límite</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Ingeniero Electricista Acreditado
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Profesional con título universitario en Ingeniería Eléctrica y colegiatura activa. 
                  Capacidad para diseñar, visar y construir sistemas de cualquier potencia, subestaciones y líneas de transmisión.
                </p>
                <div className="mt-3 text-[11px] bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-600">
                  <strong className="text-slate-800">Sistemas Solares:</strong> Granjas solares de escala de servicios públicos (Utility Scale), parques solares y conexión en media/alta tensión.
                </div>
              </div>
            </div>

            {/* SÍNTESIS CRÍTICA NEC ART. 690 */}
            <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-serif font-bold text-slate-900">
                  Reglas Críticas del Código Eléctrico Nacional (NEC Art. 690)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-[#0B1B3D] block mb-1">
                    Factor de Continuidad (690.8)
                  </span>
                  Imax = 1.25 x Isc. Con sobredimensionamiento de protección del 125%:
                  In &ge; 1.56 x Isc.
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-[#0B1B3D] block mb-1">
                    Rapid Shutdown (690.12)
                  </span>
                  Fuera del perímetro de 30 cm (1 pie) del arreglo: reducción a &le; 30 V en &le; 30 segundos tras iniciación.
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-[#0B1B3D] block mb-1">
                    Protección Anti-Isla (IEEE 1547)
                  </span>
                  Cese de inyección en &le; 2.0 s ante desconexión de red pública. Retardo de reconexión obligatorio de 5 minutos (300 s).
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODAL DE CERTIFICADO OFICIAL */}
      {issuedCert && (
        <CertificateModal
          isOpen={isCertModalOpen}
          onClose={() => setIsCertModalOpen(false)}
          certificate={issuedCert}
        />
      )}
    </div>
  );
};

export default SigetSolarView;
