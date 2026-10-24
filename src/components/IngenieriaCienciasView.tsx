import React, { useState, useEffect, useMemo } from 'react';
import {
  Compass,
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
  Lightbulb,
  FileCode,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
} from 'lucide-react';
import {
  INGENIERIA_SECTORS,
  INGENIERIA_QUESTIONS,
  INGENIERIA_FORMULAS,
  EngineeringMathQuestion,
} from '../data/ingenieriaCienciasData';
import { KaTeXMath } from '../utils/mathRenderer';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { CertificateModal } from './CertificateModal';
import { AudioSpeechButton } from './AudioSpeechButton';
import { ModulePaginationBar } from './ModulePaginationBar';

interface IngenieriaCienciasViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

type ActiveTab = 'problem-lab' | 'formula-bank';

export const IngenieriaCienciasView: React.FC<IngenieriaCienciasViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('problem-lab');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(30 * 60);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [expandedDerivation, setExpandedDerivation] = useState<Record<string, boolean>>({});
  const [expandedRationale, setExpandedRationale] = useState<Record<string, boolean>>({});

  // Modal de Certificación Oficial
  const [issuedCert, setIssuedCert] = useState<AcademicCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  // Reset page when sector changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSector]);

  const filteredQuestions = useMemo(() => {
    if (selectedSector === 'all') return INGENIERIA_QUESTIONS;
    return INGENIERIA_QUESTIONS.filter((q) => q.category === selectedSector);
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
            questionText: q.problemStatement,
            categoryKey: `Ciencias de Ingeniería • ${q.categoryLabel}`,
            selectedAnswer: userAns || '(Sin contestar)',
            correctAnswer: q.correctAnswer,
            options: q.options,
            explanation: `${q.formalSolution}\n\nDisciplina: ${q.topic}`,
          });
        }
      });
    }
  }, [examSubmitted, filteredQuestions, userAnswers]);

  const handleSelectAnswer = (qId: string, optKey: 'A' | 'B' | 'C' | 'D') => {
    if (examSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optKey }));
  };

  const handleToggleDerivation = (qId: string) => {
    setExpandedDerivation((prev) => ({ ...prev, [qId]: !prev[qId] }));
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
    setExpandedDerivation({});
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
      studentName: 'Estudiante / Profesional en Métodos Cuantitativos de Ingeniería',
      studentId: 'ING-SCI-' + Math.floor(10000 + Math.random() * 90000),
      moduleKey: `ING_SCI_${selectedSector.toUpperCase()}`,
      moduleTitle: 'Acreditación en Métodos Cuantitativos y Ciencias Exactas de Ingeniería',
      institutionAuthority: 'KUSKAT Academia Superior de Ciencias Exactas & Métodos Cuantitativos',
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
                  <Compass className="w-3.5 h-3.5 text-[#C59B27]" />
                  Academia de Ciencias Exactas · KUSKAT
                </span>
                <span className="text-xs text-amber-200/80 font-mono">
                  Álgebra Lineal · Cónicas · Dinámica Vectorial
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F5] tracking-tight">
                Métodos Cuantitativos & Ciencias de Ingeniería
              </h1>
              <p className="mt-1 text-sm text-slate-200 max-w-2xl font-sans">
                Laboratorio analítico riguroso: matrices y determinantes por cofactores, identidades y ley de senos (caso ambiguo LLA),
                discriminante de cónicas y estática/dinámica vectorial con resolución paso a paso en KaTeX.
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
              onClick={() => setActiveTab('problem-lab')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'problem-lab'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Cpu className="w-4 h-4" />
              Laboratorio de Problemas & Simulador
            </button>
            <button
              onClick={() => setActiveTab('formula-bank')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'formula-bank'
                  ? 'bg-[#C59B27] text-slate-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <FileCode className="w-4 h-4" />
              Formulario Analítico de Referencia
            </button>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* ========================================================================= */}
        {/* PESTAÑA 1: LABORATORIO DE PROBLEMAS & SIMULADOR */}
        {/* ========================================================================= */}
        {activeTab === 'problem-lab' && (
          <div>
            {/* BARRA DE FILTROS Y CONTROL DE MODO */}
            <div className="bg-white rounded-xl p-4 border border-[#E5E3D8] shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  Disciplina:
                </span>
                {INGENIERIA_SECTORS.map((sec) => (
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
                <Compass className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="text-base font-bold text-slate-900">
                  Evaluación de Métodos Cuantitativos de Ingeniería
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-lg mx-auto">
                  Prueba de suficiencia en Álgebra Lineal matricial, Trigonometría Analítica, Cónicas y Estática/Dinámica vectorial.
                  Cada reactivo cuenta con solución formal rigurosa desglosada paso a paso.
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

            {/* LISTA DE PROBLEMAS */}
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
                  itemLabel="problemas analíticos"
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
                            {q.topic}
                          </span>
                        </div>
                        <AudioSpeechButton
                          id={`ing-audio-${q.id}`}
                          textToSpeak={`${q.problemStatement}. Opción A: ${q.options.A}. Opción B: ${q.options.B}. Opción C: ${q.options.C}. Opción D: ${q.options.D}.`}
                          label="Escuchar problema analítico"
                        />
                      </div>

                      {/* ENUNCIADO MATEMÁTICO */}
                      <div className="text-sm font-semibold text-slate-900 mb-4 leading-relaxed font-sans">
                        <KaTeXMath text={q.problemStatement} />
                      </div>

                      {/* OPCIONES */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
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
                              <span className="flex-1 leading-snug">
                                <KaTeXMath text={optText} />
                              </span>
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

                      {/* FEEDBACK Y SOLUCIÓN FORMAL */}
                      {showFeedback && (
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              {isCorrect ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                              )}
                              Demostración y Solución Formal:
                            </span>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleToggleDerivation(q.id)}
                                className="text-xs text-[#0B1B3D] hover:underline flex items-center gap-1 font-semibold"
                              >
                                <Lightbulb className="w-3.5 h-3.5 text-[#C59B27]" />
                                {expandedDerivation[q.id] ? 'Ocultar derivación' : 'Ver derivación paso a paso'}
                              </button>
                              <button
                                onClick={() => handleToggleRationale(q.id)}
                                className="text-xs text-slate-500 hover:underline flex items-center gap-1"
                              >
                                <HelpCircle className="w-3 h-3 text-slate-400" />
                                {expandedRationale[q.id] ? 'Ocultar distractores' : 'Distractores'}
                              </button>
                            </div>
                          </div>

                          <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed font-sans">
                            <KaTeXMath text={q.formalSolution} />
                          </div>

                          {/* DERIVACIÓN PASO A PASO */}
                          {expandedDerivation[q.id] && (
                            <div className="mt-2.5 p-3 bg-amber-50/60 rounded-lg border border-amber-200 text-xs text-slate-700 space-y-1.5">
                              <span className="font-bold text-amber-900 block mb-1">
                                Pasos de la Derivación Analítica:
                              </span>
                              {q.stepByStepDerivation.map((s, sIdx) => (
                                <div key={sIdx} className="flex items-start gap-2">
                                  <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {sIdx + 1}
                                  </span>
                                  <span className="leading-relaxed">{s}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* DESGLOSE DE DISTRACTORES */}
                          {expandedRationale[q.id] && q.distractorRationale && (
                            <div className="mt-2.5 p-2.5 bg-slate-100/70 rounded-lg border border-slate-200 text-[11px] space-y-1">
                              <span className="font-bold text-slate-800 block mb-1">
                                Análisis de Respuestas Erróneas:
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
                  itemLabel="problemas analíticos"
                  className="mt-4"
                />

                {/* BOTÓN CALIFICAR EN MODO EXAMEN */}
                {isExamMode && examStarted && !examSubmitted && (
                  <div className="sticky bottom-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 border-[#C59B27] shadow-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Problemas Resueltos: {Object.keys(userAnswers).length} de {filteredQuestions.length}
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
                      Resultado de la Evaluación de Ciencias de Ingeniería
                    </h3>
                    <div className="text-3xl font-bold font-mono text-[#0B1B3D] my-2">
                      {examStats.score} <span className="text-sm text-slate-500">/ 10.0</span>
                    </div>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Aciertos matemáticos: {examStats.correct} de {examStats.total}.
                      {examStats.isPassed ? (
                        <span className="text-emerald-700 font-bold block mt-1">
                          ¡APROBADO! Demuestra competencia analítica superior en métodos cuantitativos.
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold block mt-1">
                          NO APROBADO (Mínimo requerido: 8.0/10.0). Las fallas han sido remitidas al Cuaderno de Errores FSRS.
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
        {/* PESTAÑA 2: FORMULARIO ANALÍTICO DE REFERENCIA */}
        {/* ========================================================================= */}
        {activeTab === 'formula-bank' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3D8] shadow-sm">
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Formulario Fundamental de Métodos Cuantitativos
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Relaciones matriciales, identidades de linealización trigonométrica, invariantes cónicos
                y principios fundamentales de conservación mecánica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INGENIERIA_FORMULAS.map((f, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-white rounded-xl border border-[#E5E3D8] p-5 shadow-sm space-y-2 hover:border-[#C59B27]/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-[#0B1B3D]">
                      {f.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{f.title}</h3>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center my-2">
                    <KaTeXMath text={f.formulaKatex} />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.explanation}</p>
                </div>
              ))}
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

export default IngenieriaCienciasView;
