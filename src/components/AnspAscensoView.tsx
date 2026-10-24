import React, { useState, useEffect, useMemo } from 'react';
import {
  Shield,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookOpen,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  Scale,
  Brain,
  AlertTriangle,
  FolderOpen,
  QrCode,
} from 'lucide-react';
import {
  POLICE_RANKS,
  POLICE_PROMOTION_QUESTIONS,
  PolicePromotionQuestion,
} from '../data/anspAscensoData';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { AudioSpeechButton } from './AudioSpeechButton';
import { CertificateModal } from './CertificateModal';
import { ModulePaginationBar } from './ModulePaginationBar';

interface AnspAscensoViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

export const AnspAscensoView: React.FC<AnspAscensoViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
  const [selectedRankId, setSelectedRankId] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(30 * 60);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [expandedRationale, setExpandedRationale] = useState<Record<string, boolean>>({});

  // Modal de Certificación
  const [issuedCert, setIssuedCert] = useState<AcademicCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  // Reset page when rank changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRankId]);

  const filteredQuestions = useMemo(() => {
    if (selectedRankId === 'all') return POLICE_PROMOTION_QUESTIONS;
    return POLICE_PROMOTION_QUESTIONS.filter((q) => q.rank === selectedRankId);
  }, [selectedRankId]);

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

  // Al calificar en modo examen, registrar errores automáticamente en el Cuaderno Inteligente
  useEffect(() => {
    if (examSubmitted) {
      filteredQuestions.forEach((q) => {
        const userAns = userAnswers[q.id];
        if (userAns !== q.correctAnswer) {
          const optMap: Record<string, string> = {};
          q.options.forEach((o) => {
            optMap[o.key] = o.text;
          });
          logQuestionError({
            questionId: q.id,
            questionText: q.statement,
            categoryKey: `ANSP Ascensos • ${q.rank.toUpperCase()}`,
            selectedAnswer: userAns || '(Sin contestar)',
            correctAnswer: q.correctAnswer,
            options: optMap,
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
    const activeRankMeta = POLICE_RANKS.find((r) => r.id === selectedRankId) || POLICE_RANKS[0];
    const cert = await issueCertificate({
      studentName: 'Agente Postulante PNC',
      studentId: 'ON-PNC-' + Math.floor(10000 + Math.random() * 90000),
      moduleKey: `ANSP_${selectedRankId.toUpperCase()}`,
      moduleTitle: `Prueba de Ascenso Policial: ${activeRankMeta.name}`,
      institutionAuthority: 'Academia Nacional de Seguridad Pública (ANSP) & TIA',
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
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-2xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-[#C59B27] text-xs font-bold border border-[#C59B27]/30 font-mono-exam uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Academia Nacional de Seguridad Pública (ANSP) • Concurso de Ascensos PNC</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-editorial tracking-tight text-[#FAF9F5]">
            Evaluación Oficial para Ascenso de la Policía Nacional Civil
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Preparación integral y rigurosa para los concursos de ascenso a <strong>Cabo, Sargento y Oficiales (Subinspector/Inspector)</strong> conforme a la Ley de la Carrera Policial, Ley Orgánica de la PNC, Código Procesal Penal, inspección técnica ocular (ITOP), flagrancia, cadena de custodia y normas de la ONU sobre el uso proporcional de la fuerza.
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-300 font-mono-exam flex-wrap">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
              <Award className="w-3.5 h-3.5 text-[#C59B27]" />
              Mando Básico, Intermedio y Ejecutivo
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
              <Scale className="w-3.5 h-3.5 text-[#1E7E34]" />
              Arts. 159 y 193 Cn. • Ley de la Carrera Policial
            </span>
          </div>
        </div>
      </div>

      {/* Barra de Control de Modos: Tutor vs Simulacro */}
      <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIsExamMode(false);
              handleReset();
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center gap-2 ${
              !isExamMode
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#C59B27]" />
            <span>Modo Tutor de Estudio</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsExamMode(true);
              handleReset();
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center gap-2 ${
              isExamMode
                ? 'bg-[#9E472A] text-white shadow-corporate-subtle'
                : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Simulador Oficial ANSP (30 Minutos)</span>
          </button>
        </div>

        {onOpenErrorNotebook && (
          <button
            type="button"
            onClick={onOpenErrorNotebook}
            className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] border border-[#C59B27] transition-all cursor-pointer font-mono-exam flex items-center gap-2 shadow-xs"
          >
            <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Cuaderno de Errores FSRS</span>
          </button>
        )}
      </div>

      {/* Selector de Escalafón Policial */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {POLICE_RANKS.map((rank) => (
          <button
            key={rank.id}
            onClick={() => {
              setSelectedRankId(rank.id);
              handleReset();
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
              selectedRankId === rank.id
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <span>{rank.badge}</span>
            <span>{rank.name}</span>
          </button>
        ))}
      </div>

      {/* Barra de Cronómetro y Estado en Modo Examen */}
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

            {!examSubmitted && (
              <button
                type="button"
                onClick={() => setExamSubmitted(true)}
                className="px-4 py-1.5 bg-[#0B1B3D] hover:bg-[#132A5C] text-white text-xs font-bold font-mono-exam rounded-lg cursor-pointer transition-all shadow-xs"
              >
                Calificar Concurso
              </button>
            )}
          </div>
        </div>
      )}

      {/* Tarjeta de Calificación y Boleta en Modo Examen */}
      {isExamMode && examSubmitted && (
        <div className="bg-[#FAF9F5] p-6 rounded-xl border border-[#C59B27] shadow-corporate-elevated text-center space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-exam uppercase tracking-wider border">
            {examStats.isPassed ? (
              <span className="text-[#1E7E34] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                APROBADO PARA ASCENSO (Nota Superior a 8.0)
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
            Acertaste {examStats.correct} de {examStats.total} reactivos evaluados. Las preguntas falladas se han guardado automáticamente en tu <strong>Cuaderno Inteligente de Errores</strong>.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
            {examStats.isPassed && (
              <button
                type="button"
                onClick={handleGenerateCertificate}
                className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-mono-exam font-bold rounded-lg border border-[#C59B27] inline-flex items-center gap-2 cursor-pointer shadow-corporate-subtle"
              >
                <QrCode className="w-4 h-4 text-[#C59B27]" />
                <span>Emitir Diploma Oficial con Código QR</span>
              </button>
            )}

            {onOpenErrorNotebook && !examStats.isPassed && (
              <button
                type="button"
                onClick={onOpenErrorNotebook}
                className="px-4 py-2 bg-white text-[#0B1B3D] text-xs font-mono-exam font-bold rounded-lg border border-[#C59B27]/40 inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Abrir Cuaderno de Errores</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Lista de Reactivos del Banco ANSP */}
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
          itemLabel="reactivos policiales"
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
              className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-card p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#EAE8DD] pb-2 text-xs font-mono-exam gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0B1B3D]">
                    Pregunta {globalIndex} de {filteredQuestions.length}
                  </span>
                  <span className="text-[#C59B27] font-semibold uppercase">• {q.topic}</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Botón de Síntesis de Voz Accesible */}
                  <AudioSpeechButton
                    id={q.id}
                    textToSpeak={`${q.statement}. Opciones: ${q.options
                      .map((o) => `Opción ${o.key}: ${o.text}`)
                      .join('. ')}`}
                    label="Escuchar"
                  />
                  <span className="text-[11px] font-bold text-[#64748B] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8] uppercase">
                    {q.rank}
                  </span>
                </div>
              </div>

              {/* Enunciado */}
              <p className="text-sm sm:text-base font-medium text-[#111625] leading-relaxed">
                {q.statement}
              </p>

              {/* Opciones A-D */}
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isSelected = userAns === opt.key;
                  let optStyle = 'bg-white border-[#E5E3D8] hover:border-[#0B1B3D] text-[#1E293B]';

                  if (showFeedback && isAnswered) {
                    if (opt.key === q.correctAnswer) {
                      optStyle = 'bg-[#EBF7EE] border-[#1E7E34] text-[#1E7E34] font-bold';
                    } else if (isSelected && !isCorrect) {
                      optStyle = 'bg-rose-50 border-rose-500 text-rose-800 line-through';
                    }
                  } else if (isSelected) {
                    optStyle = 'bg-[#F2F1EA] border-[#0B1B3D] text-[#0B1B3D] font-bold';
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      disabled={examSubmitted}
                      onClick={() => handleSelectAnswer(q.id, opt.key)}
                      className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${optStyle}`}
                    >
                      <span className="w-6 h-6 rounded bg-slate-100 border border-slate-300 font-mono-exam font-bold text-xs flex items-center justify-center shrink-0">
                        {opt.key}
                      </span>
                      <span className="text-xs sm:text-sm leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Botón y Sección de Justificación */}
              {showFeedback && isAnswered && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleToggleRationale(q.id)}
                    className="text-xs font-mono-exam font-bold text-[#0B1B3D] hover:text-[#132A5C] flex items-center gap-1 cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>
                      {expandedRationale[q.id]
                        ? 'Ocultar Justificación y Análisis Legal'
                        : 'Ver Justificación y Análisis Legal'}
                    </span>
                  </button>

                  {expandedRationale[q.id] && (
                    <div className="mt-3 p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] space-y-3 text-xs animate-fade-in">
                      <div className="flex items-center gap-2 font-mono-exam font-bold">
                        {isCorrect ? (
                          <span className="text-[#1E7E34] flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            ¡Correcto! Opción ({q.correctAnswer})
                          </span>
                        ) : (
                          <span className="text-[#9E472A] flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            Incorrecto — La opción correcta es ({q.correctAnswer})
                          </span>
                        )}
                        <span className="text-[#94A3B8]">•</span>
                        <span className="text-[#64748B] text-[11px]">{q.legalBasis}</span>
                      </div>

                      <p className="text-[#334155] leading-relaxed">{q.explanation}</p>

                      <div className="space-y-1.5 pt-2 border-t border-[#EAE8DD]">
                        <span className="font-mono-exam font-bold text-[#64748B] uppercase text-[10px] block">
                          ¿Por qué los otros distractores son incorrectos?:
                        </span>
                        {Object.entries(q.distractorRationale).map(([k, reason]) => (
                          <div key={k} className="flex items-start gap-1.5 text-[11.5px] text-[#475569]">
                            <strong className="text-[#0B1B3D] font-mono-exam shrink-0">({k}):</strong>
                            <span>{reason}</span>
                          </div>
                        ))}
                      </div>
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
          itemLabel="reactivos policiales"
          className="mt-4"
        />
      </div>

      {/* Modal de Acreditación Digital con QR */}
      {issuedCert && (
        <CertificateModal
          certificate={issuedCert}
          isOpen={isCertModalOpen}
          onClose={() => setIsCertModalOpen(false)}
          showToast={showToast}
        />
      )}
    </div>
  );
};

export default AnspAscensoView;
