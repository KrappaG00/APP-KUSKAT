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
} from 'lucide-react';
import {
  SIGET_SECTORS,
  SIGET_SOLAR_QUESTIONS,
  SOLAR_INTERCONNECTION_CHECKLIST,
  SigetSolarQuestion,
} from '../data/sigetSolarData';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { CertificateModal } from './CertificateModal';
import { AudioSpeechButton } from './AudioSpeechButton';

interface SigetSolarViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

type ActiveTab = 'simulator' | 'checklist' | 'categories';

export const SigetSolarView: React.FC<SigetSolarViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('simulator');
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
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C59B27]/20 text-[#FAF9F5] border border-[#C59B27]/40 tracking-wide">
                  <Sun className="w-3.5 h-3.5 text-[#C59B27]" />
                  República de El Salvador · SIGET & CNE
                </span>
                <span className="text-xs text-amber-200/80 font-mono">
                  NTCOGD Acuerdo 343-E-2016 · NEC Art. 690
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F5] tracking-tight">
                Energía Solar Fotovoltaica & Acreditación Eléctrica SIGET
              </h1>
              <p className="mt-1 text-sm text-slate-200 max-w-2xl font-sans">
                Simulador técnico, memoria de interconexión con distribuidoras (AES / DELSUR), 
                protecciones anti-isla IEEE 1547, Rapid Shutdown y categorización de electricistas.
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

          {/* NAVEGACIÓN ENTRE SECCIONES DE LA VISTA */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'simulator'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Zap className="w-4 h-4" />
              Simulador de Examen Técnico SIGET
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'checklist'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              Checklist de Interconexión (AES / DELSUR)
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'categories'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <FileText className="w-4 h-4" />
              Categorías de Electricistas & NEC 690
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* ========================================================================= */}
        {/* PESTAÑA 1: SIMULADOR DE EXAMEN TÉCNICO */}
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
                        ? 'bg-[#0B1B3D] text-white shadow-sm'
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
                  <span>Modo Examen Cronometrado (30m)</span>
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
                  dimensionamiento continuo según Código NEC Art. 690 (1.56 × Isc),
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
                        <div className="flex items-center gap-2">
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
                              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium ring-1 ring-emerald-500';
                            } else if (isOptionSelected && !isCorrect) {
                              btnStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                            } else {
                              btnStyle = 'bg-slate-50/60 border-slate-200 text-slate-400';
                            }
                          } else if (isOptionSelected) {
                            btnStyle = 'bg-[#0B1B3D] border-[#0B1B3D] text-white font-medium shadow-sm';
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
                                <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-1" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* FEEDBACK Y JUSTIFICACIÓN TÉCNICA */}
                      {showFeedback && (
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              {isCorrect ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                              )}
                              Dictamen Técnico Normativo:
                            </span>
                            <button
                              onClick={() => handleToggleRationale(q.id)}
                              className="text-xs text-[#0B1B3D] hover:underline flex items-center gap-1"
                            >
                              <HelpCircle className="w-3 h-3 text-[#C59B27]" />
                              {expandedRationale[q.id] ? 'Ocultar distractor' : 'Ver análisis de opciones'}
                            </button>
                          </div>

                          <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed font-sans">
                            {q.explanation}
                          </p>

                          <div className="mt-2 text-[11px] text-slate-500 font-mono">
                            <span className="font-semibold text-slate-700">Base Normativa:</span> {q.technicalBasis}
                          </div>

                          {expandedRationale[q.id] && q.distractorRationale && (
                            <div className="mt-2.5 p-2.5 bg-amber-50/60 rounded-lg border border-amber-200/70 text-[11px] space-y-1">
                              <span className="font-bold text-amber-900 block mb-1">
                                Desglose de Respuestas:
                              </span>
                              {(['A', 'B', 'C', 'D'] as const).map((k) => {
                                const rat = q.distractorRationale[k];
                                if (!rat) return null;
                                return (
                                  <div key={k} className="text-slate-600">
                                    <span className="font-semibold text-slate-800">Opción {k}:</span> {rat}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}

                {/* BOTÓN CALIFICAR EN MODO EXAMEN */}
                {isExamMode && examStarted && !examSubmitted && (
                  <div className="sticky bottom-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 border-[#C59B27] shadow-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Preguntas Respondidas: {Object.keys(userAnswers).length} de {filteredQuestions.length}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Tiempo restante: {formatTimer(secondsLeft)}
                      </div>
                    </div>
                    <button
                      onClick={() => setExamSubmitted(true)}
                      className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#122B5E] text-white text-xs font-bold rounded-lg shadow flex items-center gap-1.5"
                    >
                      Entregar y Calificar Prueba
                      <Check className="w-4 h-4 text-[#C59B27]" />
                    </button>
                  </div>
                )}

                {/* RESULTADOS AL ENTREGAR */}
                {examSubmitted && (
                  <div className="bg-white rounded-xl border-2 border-[#C59B27] p-6 shadow-md text-center mt-6">
                    <Award className="w-10 h-10 text-[#C59B27] mx-auto mb-2" />
                    <h3 className="text-lg font-serif font-bold text-slate-900">
                      Resultado de la Evaluación Técnica SIGET
                    </h3>
                    <div className="text-3xl font-bold font-mono text-[#0B1B3D] my-2">
                      {examStats.score} <span className="text-sm text-slate-500">/ 10.0</span>
                    </div>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Respuestas acertadas: {examStats.correct} de {examStats.total}. 
                      {examStats.isPassed ? (
                        <span className="text-emerald-700 font-bold block mt-1">
                          ¡APROBADO! Cumple con los criterios técnicos para acreditación fotovoltaica.
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold block mt-1">
                          NO APROBADO (Mínimo requerido: 8.0/10.0). Las fallas han sido enviadas a tu Cuaderno de Errores FSRS.
                        </span>
                      )}
                    </p>

                    <div className="mt-5 flex flex-wrap justify-center gap-3">
                      {examStats.isPassed && (
                        <button
                          onClick={handleGenerateCertificate}
                          className="px-4 py-2 bg-[#C59B27] hover:bg-[#B38A20] text-slate-900 text-xs font-bold rounded-lg shadow flex items-center gap-1.5"
                        >
                          <Award className="w-4 h-4" />
                          Generar Certificado Oficial con QR
                        </button>
                      )}
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reiniciar Simulador
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* PESTAÑA 2: CHECKLIST DE INTERCONEXIÓN (AES / DELSUR) */}
        {/* ========================================================================= */}
        {activeTab === 'checklist' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3D8] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  AES El Salvador & DELSUR
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Tramitología de Generación Distribuida (UGD)
                </span>
              </div>
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Flujo Crítico de Interconexión y Medición Neta
              </h2>
              <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Este checklist interactivo resume el protocolo paso a paso exigido por las empresas 
                distribuidoras en El Salvador (CAESS, CLESA, EEO, DEUSEM y DELSUR) y supervisado por la SIGET 
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
        {/* PESTAÑA 3: CATEGORÍAS DE ELECTRICISTAS & NEC 690 */}
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
                  Imax = 1.25 × Isc. Con sobredimensionamiento de protección del 125%:
                  In &ge; 1.56 × Isc.
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
