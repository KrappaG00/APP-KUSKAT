import React, { useState, useEffect, useMemo } from 'react';
import {
  Shield,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  AlertTriangle,
  FolderOpen,
  QrCode,
  FileText,
  Landmark,
  Scale,
} from 'lucide-react';
import {
  COMPLIANCE_SECTORS,
  COMPLIANCE_QUESTIONS_DATA,
  ComplianceQuestion,
} from '../data/complianceAmlData';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { CertificateModal } from './CertificateModal';
import { AudioSpeechButton } from './AudioSpeechButton';
import { ModulePaginationBar } from './ModulePaginationBar';

interface ComplianceFinancialViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

export const ComplianceFinancialView: React.FC<ComplianceFinancialViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
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
    if (selectedSector === 'all') return COMPLIANCE_QUESTIONS_DATA;
    return COMPLIANCE_QUESTIONS_DATA.filter((q) => q.category === selectedSector);
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
            questionText: q.statement,
            categoryKey: `Cumplimiento SSF • ${q.categoryLabel}`,
            selectedAnswer: userAns || '(Sin contestar)',
            correctAnswer: q.correctAnswer,
            options: q.options,
            explanation: `${q.explanation}\n\nFundamento Legal: ${q.legalBasis}`,
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
      studentName: 'Oficial de Cumplimiento / Intermediario SSF',
      studentId: 'SSF-AML-' + Math.floor(10000 + Math.random() * 90000),
      moduleKey: `COMPLIANCE_${selectedSector.toUpperCase()}`,
      moduleTitle: 'Acreditación en Cumplimiento Normativo AML y Seguros Mercantiles (SSF / UIF)',
      institutionAuthority: 'Superintendencia del Sistema Financiero (SSF) & UIF-FGR',
      score: `${examStats.score} / 10.0`,
      numericScore: parseFloat(examStats.score),
      passingScoreRequired: '8.0 / 10.0',
    });
    setIssuedCert(cert);
    setIsCertModalOpen(true);
    if (showToast) showToast('¡Diploma oficial emitido con firma digital SHA-256 y código QR!');
  };

  return (
    <div className="space-y-6 animate-fade-in font-sans-ui text-[#111625]">
      {/* Encabezado Corporativo Soberano */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-2xl p-6 sm:p-8 text-white shadow-corporate-elevated relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C59B27] text-xs font-bold border border-[#C59B27]/30 font-mono-exam uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Superintendencia del Sistema Financiero (SSF) • UIF / FGR</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-editorial text-[#FAF9F5]">
            Escuela de Cumplimiento Regulatorio, Prevención de Lavado y Seguros
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Formación especializada para Oficiales de Cumplimiento (AML/CFT bajo estándares GAFI e instructivo UIF-FGR) y habilitación de Agentes e Intermediarios de Seguros ante la Superintendencia del Sistema Financiero.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => {
                setIsExamMode(false);
                handleReset();
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center gap-1.5 ${
                !isExamMode
                  ? 'bg-[#C59B27] text-[#0B1B3D] font-black shadow-corporate-subtle'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Modo Estudio & Retroalimentación</span>
            </button>

            <button
              onClick={() => {
                setIsExamMode(true);
                handleReset();
                setExamStarted(true);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center gap-1.5 ${
                isExamMode
                  ? 'bg-[#1E7E34] text-white font-black shadow-corporate-subtle'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Simulador Oficial SSF / UIF (30 min • Mínimo 8.0)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selector de Sectores */}
      <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E5E3D8] shadow-corporate-card flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {COMPLIANCE_SECTORS.map((sec) => (
          <button
            key={sec.id}
            onClick={() => {
              setSelectedSector(sec.id);
              handleReset();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
              selectedSector === sec.id
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <span>{sec.icon}</span>
            <span>{sec.name}</span>
          </button>
        ))}
      </div>

      {/* Barra de Cronómetro en Modo Examen */}
      {isExamMode && examStarted && (
        <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-exam text-[#64748B]">Tiempo Restante:</span>
            <span
              className={`text-sm font-bold font-mono-exam px-2.5 py-1 rounded border ${
                secondsLeft <= 300
                  ? 'bg-rose-50 text-rose-800 border-rose-300 animate-pulse'
                  : 'bg-amber-50 text-amber-900 border-amber-300'
              }`}
            >
              {formatTimer(secondsLeft)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-exam text-[#475569]">
              {examStats.answered} de {examStats.total} respondidas
            </span>
            {!examSubmitted ? (
              <button
                onClick={() => setExamSubmitted(true)}
                className="px-4 py-1.5 bg-[#0B1B3D] hover:bg-[#132A5C] text-white font-bold text-xs rounded-lg border border-[#1A2E5A] font-mono-exam cursor-pointer shadow-corporate-subtle"
              >
                Calificar Prueba
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg font-mono-exam cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Tarjeta de Calificación y Resultados */}
      {isExamMode && examSubmitted && (
        <div className="bg-[#FAF9F5] p-6 rounded-xl border border-[#C59B27] shadow-corporate-elevated text-center space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-exam uppercase tracking-wider border">
            {examStats.isPassed ? (
              <span className="text-[#1E7E34] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                APROBADO (Nota Superior a 8.0)
              </span>
            ) : (
              <span className="text-[#9E472A] flex items-center gap-1">
                <AlertTriangle className="w-4 h-4" />
                NO APROBADO (Nota Mínima Requerida: 8.0)
              </span>
            )}
          </div>

          <h3 className="text-3xl font-bold font-mono-exam text-[#0B1B3D]">
            Nota Obtenida: {examStats.score} / 10.0
          </h3>

          <p className="text-xs text-[#475569] max-w-lg mx-auto">
            Acertaste {examStats.correct} de {examStats.total} reactivos evaluados. Las preguntas falladas se han guardado automáticamente en tu <strong>Cuaderno Inteligente de Errores</strong> para remediación guiada.
          </p>

          {examStats.isPassed && (
            <div className="pt-2">
              <button
                type="button"
                onClick={handleGenerateCertificate}
                className="px-5 py-2.5 bg-[#C59B27] hover:bg-[#B38A22] text-[#0B1B3D] text-xs font-mono-exam font-black rounded-lg border border-[#A67F1E] inline-flex items-center gap-2 cursor-pointer shadow-corporate-subtle transition-all"
              >
                <QrCode className="w-4 h-4 text-[#0B1B3D]" />
                <Award className="w-4 h-4 text-[#0B1B3D]" />
                <span>Emitir Diploma Oficial de Cumplimiento (Con Código QR Criptográfico)</span>
              </button>
            </div>
          )}

          {onOpenErrorNotebook && (
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenErrorNotebook}
                className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-mono-exam font-bold rounded-lg border border-[#C59B27]/40 inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Abrir Cuaderno Inteligente de Errores FSRS</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Lista de Reactivos */}
      <div className="space-y-4">
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
          itemLabel="reactivos de cumplimiento"
        />

        {paginatedQuestions.map((q, idx) => {
          const globalIndex = (validCurrentPage - 1) * itemsPerPage + idx + 1;
          const userAns = userAnswers[q.id];
          const isAnswered = !!userAns;
          const isCorrect = userAns === q.correctAnswer;
          const showFeedback = !isExamMode || examSubmitted;

          return (
            <div
              key={q.id}
              className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] space-y-4 shadow-corporate-card"
            >
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#EAE8DD]">
                <div className="flex items-center gap-2">
                  <span className="font-mono-exam font-bold text-[#0B1B3D] px-2 py-0.5 rounded bg-slate-100">
                    #{globalIndex} • {q.categoryLabel}
                  </span>
                  <span className="text-[#64748B] font-mono-exam hidden sm:inline">{q.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AudioSpeechButton
                    id={`compliance-audio-${q.id}`}
                    textToSpeak={q.statement}
                    label="Escuchar Reactivo"
                  />
                  <span className="text-[10px] font-mono-exam font-semibold text-[#5C6578] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8]">
                    {q.legalBasis}
                  </span>
                </div>
              </div>

              {/* Enunciado */}
              <div className="text-xs sm:text-sm font-medium text-[#111625] leading-relaxed">
                {q.statement}
              </div>

              {/* Opciones */}
              <div className="space-y-2">
                {Object.entries(q.options).map(([key, text]) => {
                  const isSelected = userAns === key;
                  const isOptionCorrect = key === q.correctAnswer;

                  let optClass = 'bg-white border-[#E5E3D8] hover:border-[#0B1B3D] text-[#1E293B]';
                  if (showFeedback && isAnswered) {
                    if (isOptionCorrect) {
                      optClass = 'bg-[#EBF7EE] border-[#1E7E34] text-[#1E7E34] font-bold';
                    } else if (isSelected && !isOptionCorrect) {
                      optClass = 'bg-rose-50 border-rose-500 text-rose-800 line-through';
                    }
                  } else if (isSelected) {
                    optClass = 'bg-[#F2F1EA] border-[#0B1B3D] text-[#0B1B3D] font-bold';
                  }

                  return (
                    <button
                      key={key}
                      onClick={() => handleSelectAnswer(q.id, key as any)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optClass}`}
                    >
                      <span className="w-6 h-6 rounded-md bg-[#FAF9F5] border border-[#E5E3D8] flex items-center justify-center font-mono-exam font-bold text-xs shrink-0 text-[#0B1B3D]">
                        {key}
                      </span>
                      <span className="flex-1">{text}</span>
                      {showFeedback && isAnswered && isOptionCorrect && (
                        <Check className="w-4 h-4 text-[#1E7E34] shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Justificación Pedagógica y Legal */}
              {showFeedback && isAnswered && (
                <div className="pt-2 space-y-2 text-xs">
                  <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8] space-y-1">
                    <div className="flex items-center gap-1.5 font-bold font-mono-exam text-[#0B1B3D]">
                      <Scale className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span>Fundamento Legal y Criterio Técnico:</span>
                    </div>
                    <p className="text-[#334155] leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>

                  <button
                    onClick={() => handleToggleRationale(q.id)}
                    className="text-[11px] font-mono-exam font-bold text-[#0B1B3D] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{expandedRationale[q.id] ? '▲ Ocultar análisis de distractores' : '▼ Ver por qué fallan los otros distractores'}</span>
                  </button>

                  {expandedRationale[q.id] && (
                    <div className="p-3 bg-white rounded-lg border border-amber-200 text-[11px] space-y-1.5 text-slate-700 animate-fade-in">
                      <span className="font-mono-exam font-bold text-[#9E472A] block uppercase text-[10px]">
                        Análisis de Opciones Erróneas:
                      </span>
                      {Object.entries(q.distractorRationale).map(([dKey, dReason]) => (
                        <div key={dKey} className="flex items-start gap-1.5">
                          <strong className="font-mono-exam text-[#9E472A]">({dKey}):</strong>
                          <span>{dReason}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
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
          itemLabel="reactivos de cumplimiento"
          className="mt-4"
        />
      </div>

      {/* Modal de Certificación Oficial */}
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

export default ComplianceFinancialView;
