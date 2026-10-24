import React, { useState, useEffect, useMemo } from 'react';
import {
  Stethoscope,
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
  HeartPulse,
  Activity,
  AlertOctagon,
  ShieldCheck,
  Syringe,
  FileText,
} from 'lucide-react';
import {
  SALUD_SECTORS,
  SALUD_PRIMARIA_QUESTIONS,
  DENGUE_TRIAGE_ALGORITHM,
  SaludPrimariaQuestion,
} from '../data/saludPrimariaData';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { CertificateModal } from './CertificateModal';
import { AudioSpeechButton } from './AudioSpeechButton';
import { ModulePaginationBar } from './ModulePaginationBar';

export const PRIMARY_CARE_SECTORS = [
  { id: 'all', name: 'Todos los Temas Clínicos', icon: '🩺' },
  { id: 'dengue', name: 'Protocolo de Dengue (Grupos A, B y C)', icon: '🦟' },
  { id: 'hta-dm2', name: 'Hipertensión & Diabetes Tipo 2', icon: '❤️' },
  { id: 'iras', name: 'Infecciones Respiratorias Agudas (IRAS)', icon: '🫁' },
  { id: 'materno-infantil', name: 'Salud Materno-Infantil & Lactancia', icon: '👶' },
  { id: 'farmacovigilancia', name: 'Farmacovigilancia SRS/DNM & Reporte RAM', icon: '💊' },
];

interface SaludPrimariaViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

type ActiveTab = 'simulator' | 'dengue-triage' | 'chronic-care' | 'pharmacovigilance';

export const SaludPrimariaView: React.FC<SaludPrimariaViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('simulator');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(30 * 60);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [expandedRationale, setExpandedRationale] = useState<Record<string, boolean>>({});

  // Modal de Certificación Oficial
  const [issuedCert, setIssuedCert] = useState<AcademicCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  // Reset page when sector changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSector]);

  const filteredQuestions = useMemo(() => {
    if (selectedSector === 'all') return SALUD_PRIMARIA_QUESTIONS;
    return SALUD_PRIMARIA_QUESTIONS.filter((q) => (q.category as string) === selectedSector);
  }, [selectedSector]);

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / itemsPerPage));
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedQuestions = useMemo(() => {
    const start = (validCurrentPage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, validCurrentPage, itemsPerPage]);

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
            questionText: `${q.vignette ? `[Caso Clínico] ${q.vignette}\n\n` : ''}${q.statement}`,
            categoryKey: `Salud Primaria MINSAL • ${q.categoryLabel}`,
            selectedAnswer: userAns || '(Sin contestar)',
            correctAnswer: q.correctAnswer,
            options: q.options,
            explanation: `${q.clinicalExplanation}\n\nGuía de Referencia: ${q.officialGuidelineRef}`,
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
    setCurrentPage(1);
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleGenerateCertificate = async () => {
    const cert = await issueCertificate({
      studentName: 'Profesional / Médico en Atención Primaria de Salud',
      studentId: 'MINSAL-APS-' + Math.floor(10000 + Math.random() * 90000),
      moduleKey: `CLINICAL_PRIMARY_${selectedSector.toUpperCase()}`,
      moduleTitle: 'Acreditación en Protocolos Clínicos de Atención Primaria (MINSAL) y Farmacovigilancia (SRS)',
      institutionAuthority: 'Ministerio de Salud (MINSAL) & Superintendencia de Regulación Sanitaria (SRS)',
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
                  <Stethoscope className="w-3.5 h-3.5 text-[#C59B27]" />
                  República de El Salvador · MINSAL & SRS
                </span>
                <span className="text-xs text-amber-200/80 font-mono">
                  Atención Primaria UCSF · RTCA Farmacovigilancia
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F5] tracking-tight">
                Atención Primaria en Salud & Farmacovigilancia
              </h1>
              <p className="mt-1 text-sm text-slate-200 max-w-2xl font-sans">
                Simulador clínico basado en guías oficiales del MINSAL: triaje y fluidoterapia de Dengue (Grupos A, B y C),
                manejo escalonado de HTA y Diabetes Tipo 2, y protocolos de notificación de RAM de la SRS.
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
              <Activity className="w-4 h-4" />
              Simulador Clínico UCSF & Examen Oficial
            </button>
            <button
              onClick={() => setActiveTab('dengue-triage')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'dengue-triage'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <AlertOctagon className="w-4 h-4" />
              Algoritmo de Dengue (Grupos A, B, C)
            </button>
            <button
              onClick={() => setActiveTab('chronic-care')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'chronic-care'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <HeartPulse className="w-4 h-4" />
              Hipertensión & Diabetes Tipo 2
            </button>
            <button
              onClick={() => setActiveTab('pharmacovigilance')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'pharmacovigilance'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Syringe className="w-4 h-4" />
              Farmacovigilancia SRS / Naranjo
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* ========================================================================= */}
        {/* PESTAÑA 1: SIMULADOR CLÍNICO UCSF */}
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
                {PRIMARY_CARE_SECTORS.map((sec) => (
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
                  <span>Modo Examen Clínico (30m)</span>
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
                <Stethoscope className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="text-base font-bold text-slate-900">
                  Evaluación de Competencia en Atención Primaria & Farmacovigilancia
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-lg mx-auto">
                  Este simulador evalúa toma de decisiones en Unidades de Salud: triaje del dengue (Grupos A, B, C),
                  fluidoterapia con cristaloides (5-7 mL/kg/h), contraindicación absoluta de AINEs, nefroprotección con IECA/ARA-II,
                  tamizaje de pie diabético con monofilamento de 10 g, y reporte urgente de RAM graves en 48-72 h.
                  Requiere nota mínima de 8.0/10.0 para diploma con QR.
                </p>
                <button
                  onClick={() => setExamStarted(true)}
                  className="mt-4 px-6 py-2.5 bg-[#0B1B3D] hover:bg-[#122B5E] text-white font-semibold text-xs rounded-lg shadow transition-all"
                >
                  Comenzar Evaluación Cronometrada
                </button>
              </div>
            )}

            {/* LISTA DE PREGUNTAS Y CASOS */}
            {(!isExamMode || examStarted) && (
              <div className="space-y-6">
                <ModulePaginationBar
                  currentPage={validCurrentPage}
                  totalPages={totalPages}
                  totalItems={filteredQuestions.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                  onItemsPerPageChange={(size) => {
                    setItemsPerPage(size);
                    setCurrentPage(1);
                  }}
                  itemLabel="casos clínicos"
                />

                {paginatedQuestions.map((q, idx) => {
                  const globalIndex = (validCurrentPage - 1) * itemsPerPage + idx + 1;
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
                            {globalIndex}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                            {q.categoryLabel}
                          </span>
                          <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                            {q.clinicalArea}
                          </span>
                        </div>
                        <AudioSpeechButton
                          id={`salud-audio-${q.id}`}
                          textToSpeak={`${q.vignette ? `Caso clínico: ${q.vignette}. Pregunta: ` : ''}${q.statement}. Opción A: ${q.options.A}. Opción B: ${q.options.B}. Opción C: ${q.options.C}. Opción D: ${q.options.D}.`}
                          label="Escuchar viñeta clínica"
                        />
                      </div>

                      {/* VIÑETA CLÍNICA */}
                      {q.vignette && (
                        <div className="bg-slate-50 border-l-4 border-[#0B1B3D] p-3.5 rounded-r-lg mb-3 text-xs leading-relaxed text-slate-700 font-sans">
                          <strong className="text-slate-900 block mb-1">Caso Clínico:</strong>
                          {q.vignette}
                        </div>
                      )}

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

                      {/* FEEDBACK Y EXPLICACIÓN CLÍNICA */}
                      {showFeedback && (
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              {isCorrect ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                              )}
                              Criterio Clínico Oficial:
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
                            {q.clinicalExplanation}
                          </p>

                          <div className="mt-2 text-[11px] text-slate-500 font-mono">
                            <span className="font-semibold text-slate-700">Guía de Referencia:</span> {q.officialGuidelineRef}
                          </div>

                          {expandedRationale[q.id] && q.distractorRationale && (
                            <div className="mt-2.5 p-2.5 bg-amber-50/60 rounded-lg border border-amber-200/70 text-[11px] space-y-1">
                              <span className="font-bold text-amber-900 block mb-1">
                                Desglose Terapéutico de Opciones:
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

                <ModulePaginationBar
                  currentPage={validCurrentPage}
                  totalPages={totalPages}
                  totalItems={filteredQuestions.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                  onItemsPerPageChange={(size) => {
                    setItemsPerPage(size);
                    setCurrentPage(1);
                  }}
                  itemLabel="casos clínicos"
                  className="mt-4"
                />

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
                      Resultado de la Evaluación Clínica MINSAL & SRS
                    </h3>
                    <div className="text-3xl font-bold font-mono text-[#0B1B3D] my-2">
                      {examStats.score} <span className="text-sm text-slate-500">/ 10.0</span>
                    </div>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Aciertos clínicos: {examStats.correct} de {examStats.total}.
                      {examStats.isPassed ? (
                        <span className="text-emerald-700 font-bold block mt-1">
                          ¡APROBADO! Cumple con los estándares de competencia clínica y farmacovigilancia.
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold block mt-1">
                          NO APROBADO (Mínimo requerido: 8.0/10.0). Las fallas han sido enviadas al Cuaderno de Errores FSRS.
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
        {/* PESTAÑA 2: ALGORITMO DE DENGUE (GRUPOS A, B, C) */}
        {/* ========================================================================= */}
        {activeTab === 'dengue-triage' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3D8] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-900 border border-rose-300">
                  MINSAL & OPS-OMS
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Lineamientos Oficiales de Triaje y Fluidoterapia
                </span>
              </div>
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Clasificación Clínica y Manejo Escalonado del Dengue
              </h2>
              <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                El dengue es una sola enfermedad sistémica y dinámica. La identificación oportuna de los signos de
                alarma durante la fase crítica (defervescencia) y el manejo estricto de cristaloides previenen la muerte por choque.
              </p>
            </div>

            <div className="space-y-4">
              {DENGUE_TRIAGE_ALGORITHM.map((step) => {
                let badgeColor = 'bg-blue-100 text-blue-900 border-blue-300';
                if (step.group === 'Grupo B') badgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
                if (step.group === 'Grupo C') badgeColor = 'bg-rose-100 text-rose-900 border-rose-300';

                return (
                  <div
                    key={step.group}
                    className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeColor}`}>
                          {step.group}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-500 hidden sm:inline">
                        {step.disposition}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Criterios Diagnósticos:
                        </h4>
                        <ul className="space-y-1 text-slate-600">
                          {step.clinicalCriteria.map((c, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-200">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-950 mb-1">
                            Terapia Inmediata:
                          </h4>
                          <p className="text-slate-700 leading-relaxed">{step.immediateTherapy}</p>
                        </div>

                        <div className="bg-rose-50/60 p-3 rounded-lg border border-rose-200">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-rose-950 mb-1">
                            Contraindicaciones Críticas:
                          </h4>
                          <p className="text-rose-800 leading-relaxed font-medium">{step.contraindications}</p>
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
        {/* PESTAÑA 3: HIPERTENSIÓN & DIABETES TIPO 2 */}
        {/* ========================================================================= */}
        {activeTab === 'chronic-care' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3D8] shadow-sm">
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Guías de Enfermedades Crónicas no Transmisibles (MINSAL)
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Lineamientos de detección temprana, metas de control y farmacoterapia de primera línea para
                Hipertensión Arterial y Diabetes Mellitus Tipo 2 en el primer nivel de atención.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* HIPERTENSIÓN */}
              <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm space-y-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-900">
                  Hipertensión Arterial (HTA)
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  Clasificación y Farmacoterapia de Primera Línea
                </h3>
                <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <p>
                    <strong>Metas de Control:</strong> PA &lt; 130/80 mmHg en pacientes de alto riesgo cardiovascular o con diabetes/nefropatía.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-800 block">Tríada Antihipertensiva en UCSF:</span>
                    <div>1. <strong>IECA / ARA-II:</strong> Enalapril (10-40 mg) o Losartán (50-100 mg) — nefroprotectores de elección.</div>
                    <div>2. <strong>BCC Dihidropiridínico:</strong> Amlodipino (5-10 mg/día).</div>
                    <div>3. <strong>Diurético Tiazídico:</strong> Hidroclorotiazida (12.5-25 mg/día).</div>
                  </div>
                </div>
              </div>

              {/* DIABETES TIPO 2 */}
              <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm space-y-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900">
                  Diabetes Mellitus Tipo 2 (DM2)
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  Criterios Diagnósticos y Cuidados Preventivos
                </h3>
                <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <p>
                    <strong>Criterios Diagnósticos:</strong> Glucemia en ayunas &ge; 126 mg/dL (confirmada), PTOG &ge; 200 mg/dL o HbA1c &ge; 6.5%.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-800 block">Pilares Terapéuticos y Tamizaje:</span>
                    <div>• <strong>Metformina:</strong> Primera línea (titular 850 a 2550 mg/día). Suspender si TFGe &lt; 30.</div>
                    <div>• <strong>Meta de Control:</strong> HbA1c &lt; 7.0% en adultos no frágiles.</div>
                    <div>• <strong>Pie Diabético:</strong> Tamizaje con Monofilamento de Semmes-Weinstein de 10 gramos.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PESTAÑA 4: FARMACOVIGILANCIA SRS / NARANJO */}
        {/* ========================================================================= */}
        {activeTab === 'pharmacovigilance' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3D8] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-300">
                  SRS / Centro Nacional de Farmacovigilancia
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Reglamento Técnico Centroamericano RTCA 11.04.47:17
                </span>
              </div>
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Notificación de RAM y Algoritmo de Causalidad
              </h2>
              <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Herramientas obligatorias para profesionales médicos, farmacéuticos y enfermeros en El Salvador
                para el reporte de sospechas de eventos adversos a través de la Tarjeta Amarilla (Noti-FACED).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white rounded-xl border border-[#E5E3D8] p-4 shadow-sm">
                <span className="font-bold text-[#0B1B3D] block mb-1">
                  1. Plazos de Notificación
                </span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>RAM Grave:</strong> Máximo 48 a 72 horas hábiles (muerte, peligro de vida, hospitalización o malformación congénita).
                  <br />
                  <strong>RAM no grave:</strong> Hasta 30 días calendario.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E5E3D8] p-4 shadow-sm">
                <span className="font-bold text-[#0B1B3D] block mb-1">
                  2. Clasificación Rawlins-Thompson
                </span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Tipo A:</strong> Aumentada (dosis-dependiente, predecible, ej. tos por enalapril).
                  <br />
                  <strong>Tipo B:</strong> Bizarra / Inmunológica (impredecible, ej. anafilaxia por penicilina).
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E5E3D8] p-4 shadow-sm">
                <span className="font-bold text-[#0B1B3D] block mb-1">
                  3. Algoritmo de Naranjo
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Cuestionario de 10 preguntas que gradúa la imputabilidad de la sospecha en:
                  <strong> Definitiva (&ge; 9), Probable (5-8), Posible (1-4) o Dudosa (&le; 0)</strong>.
                </p>
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

export default SaludPrimariaView;
