import React, { useState } from 'react';
import {
  Trophy,
  Lightbulb,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  Layers,
  BookOpen,
  Brain,
  Check,
  FolderOpen,
  QrCode,
  Atom,
} from 'lucide-react';
import {
  OLYMPIC_DISCIPLINES,
  OLYMPIC_PROBLEMS_DATA,
  OlympicProblem,
} from '../data/jovenesTalentoData';
import { KaTeXMath } from '../utils/mathRenderer';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { CertificateModal } from './CertificateModal';
import { AudioSpeechButton } from './AudioSpeechButton';

interface JovenesTalentoViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

export const JovenesTalentoView: React.FC<JovenesTalentoViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [unlockedHints, setUnlockedHints] = useState<Record<string, number>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [issuedCert, setIssuedCert] = useState<AcademicCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  const filteredProblems =
    selectedDiscipline === 'all'
      ? OLYMPIC_PROBLEMS_DATA
      : OLYMPIC_PROBLEMS_DATA.filter((p) => p.discipline === selectedDiscipline);

  const handleUnlockHint = (problemId: string, level: number) => {
    setUnlockedHints((prev) => ({
      ...prev,
      [problemId]: Math.max(prev[problemId] || 0, level),
    }));
  };

  const handleToggleSolution = (problemId: string) => {
    setShowSolution((prev) => ({
      ...prev,
      [problemId]: !prev[problemId],
    }));
  };

  const handleSelectAnswer = (p: OlympicProblem, optKey: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({ ...prev, [p.id]: optKey }));

    if (optKey !== p.correctAnswer) {
      logQuestionError({
        questionId: p.id,
        questionText: `[${p.disciplineLabel} - ${p.stage}] ${p.statement}`,
        categoryKey: `Jóvenes Talento • ${p.disciplineLabel}`,
        selectedAnswer: optKey,
        correctAnswer: p.correctAnswer,
        options: p.options,
        explanation: p.detailedSolution,
      });
    }
  };

  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([id, ans]) => ans === OLYMPIC_PROBLEMS_DATA.find((p) => p.id === id)?.correctAnswer
  ).length;

  const handleGenerateCertificate = async () => {
    const cert = await issueCertificate({
      studentName: 'Estudiante Olímpico de Alto Rendimiento',
      studentId: 'PJT-UES-' + Math.floor(10000 + Math.random() * 90000),
      moduleKey: `PJT_${selectedDiscipline.toUpperCase()}`,
      moduleTitle: 'Programa Jóvenes Talento: Entrenamiento Olímpico Nacional (MINED - UES)',
      institutionAuthority: 'Facultad de Ciencias Naturales y Matemática · UES & MINED',
      score: `${correctCount} / ${filteredProblems.length}`,
      numericScore: (correctCount / Math.max(filteredProblems.length, 1)) * 10,
      passingScoreRequired: '70%',
    });
    setIssuedCert(cert);
    setIsCertModalOpen(true);
    if (showToast) showToast('¡Diploma de mérito olímpico emitido con código QR!');
  };

  return (
    <div className="space-y-6 animate-fade-in font-sans-ui text-[#111625]">
      {/* Encabezado Corporativo Soberano */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-2xl p-6 sm:p-8 text-white shadow-corporate-elevated relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C59B27] text-xs font-bold border border-[#C59B27]/30 font-mono-exam uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Programa Jóvenes Talento • MINED & Universidad de El Salvador (UES)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-editorial text-[#FAF9F5]">
            Academia de Alto Rendimiento Olímpico
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Preparación científica de alto nivel para las Olimpiadas Nacionales de Matemática (ONM), Física (ONF), Química (ONQ) y Biología (ONB). Diseñado con <strong>pistas progresivas no frustrantes</strong> y demostraciones formales completas.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono-exam">
            <div className="bg-[#07132B] px-3 py-1.5 rounded-lg border border-[#C59B27]/30 text-[#C59B27] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Fases I, II y Academia Sabatina UES</span>
            </div>
            <div className="bg-[#07132B] px-3 py-1.5 rounded-lg border border-[#1E3A70] text-[#94A3B8] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span>Pistas Progresivas de Deducción</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selector de Disciplinas Olímpicas */}
      <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E5E3D8] shadow-corporate-card flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {OLYMPIC_DISCIPLINES.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDiscipline(d.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
              selectedDiscipline === d.id
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <span>{d.icon}</span>
            <span>{d.name}</span>
          </button>
        ))}
      </div>

      {/* Barra de Progreso y Acciones */}
      {answeredCount > 0 && (
        <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-exam">
          <div className="flex items-center gap-3">
            <span className="text-[#64748B]">Progreso:</span>
            <span className="font-bold text-[#0B1B3D]">
              {correctCount} de {filteredProblems.length} resueltos con éxito
            </span>
          </div>

          <div className="flex items-center gap-2">
            {correctCount >= Math.ceil(filteredProblems.length * 0.7) && (
              <button
                type="button"
                onClick={handleGenerateCertificate}
                className="px-4 py-1.5 bg-[#C59B27] hover:bg-[#B38A22] text-[#0B1B3D] font-black rounded-lg border border-[#A67F1E] inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Emitir Diploma Olímpico</span>
              </button>
            )}

            {onOpenErrorNotebook && (
              <button
                type="button"
                onClick={onOpenErrorNotebook}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg inline-flex items-center gap-1 cursor-pointer"
              >
                <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Cuaderno de Errores FSRS</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Listado de Problemas Olímpicos */}
      <div className="space-y-6">
        {filteredProblems.map((prob, idx) => {
          const unlocked = unlockedHints[prob.id] || 0;
          const isSolutionOpen = showSolution[prob.id] || false;
          const userAns = userAnswers[prob.id];
          const isAnswered = !!userAns;
          const isCorrect = userAns === prob.correctAnswer;

          return (
            <div
              key={prob.id}
              className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card p-6 sm:p-7 space-y-5"
            >
              {/* Encabezado del Problema */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E3D8] pb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono-exam font-bold text-xs bg-[#0B1B3D] text-[#C59B27] px-2.5 py-0.5 rounded border border-[#1A2E5A]">
                    Problema #{idx + 1} • {prob.disciplineLabel}
                  </span>
                  <span className="font-mono-exam text-xs font-semibold bg-[#FAF9F5] text-slate-700 px-2 py-0.5 rounded border border-[#E5E3D8]">
                    {prob.stage}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <AudioSpeechButton
                    id={`olympic-audio-${prob.id}`}
                    textToSpeak={prob.statement}
                    label="Escuchar Problema"
                  />
                  <span className="text-[11px] font-mono-exam text-[#64748B]">
                    {prob.topic}
                  </span>
                </div>
              </div>

              {/* Enunciado Matemático / Científico */}
              <div className="text-sm font-medium text-[#111625] leading-relaxed bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8]">
                <KaTeXMath text={prob.statement} />
              </div>

              {/* Sistema de Pistas Escalonadas */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-exam">
                  <span className="font-bold text-[#0B1B3D] flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-[#C59B27]" />
                    Sistema de Pistas de Deducción (Sin Spoilers):
                  </span>
                  <span className="text-[#64748B]">
                    {unlocked} de {prob.hints.length} pistas reveladas
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {prob.hints.map((hint) => {
                    const isUnlocked = unlocked >= hint.level;
                    return (
                      <button
                        key={hint.level}
                        type="button"
                        onClick={() => handleUnlockHint(prob.id, hint.level)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono-exam font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isUnlocked
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-white text-slate-600 border border-[#E5E3D8] hover:bg-[#FAF9F5]'
                        }`}
                      >
                        <Lightbulb className={`w-3.5 h-3.5 ${isUnlocked ? 'text-[#C59B27]' : 'text-slate-400'}`} />
                        <span>Pista {hint.level} {isUnlocked ? '(Revelada)' : '(Desbloquear)'}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Contenido de Pistas Desbloqueadas */}
                {unlocked > 0 && (
                  <div className="space-y-2 pt-2 animate-fade-in">
                    {prob.hints.slice(0, unlocked).map((h) => (
                      <div
                        key={h.level}
                        className="bg-amber-50/70 p-3 rounded-lg border border-amber-200 text-xs space-y-1"
                      >
                        <strong className="text-amber-950 font-mono-exam block">
                          💡 {h.title}:
                        </strong>
                        <p className="text-amber-900 leading-relaxed">
                          <KaTeXMath text={h.text} />
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Opciones de Evaluación */}
              <div className="space-y-2 pt-1">
                <span className="font-mono-exam text-xs font-bold text-[#0B1B3D] block">
                  Selecciona la Respuesta o Conclusión Teórica Correcta:
                </span>

                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(prob.options).map(([key, text]) => {
                    const isSelected = userAns === key;
                    const isOptionCorrect = key === prob.correctAnswer;

                    let optClass = 'bg-white border-[#E5E3D8] hover:border-[#0B1B3D] text-[#1E293B]';
                    if (isAnswered) {
                      if (isOptionCorrect) {
                        optClass = 'bg-[#EBF7EE] border-[#1E7E34] text-[#1E7E34] font-bold';
                      } else if (isSelected && !isOptionCorrect) {
                        optClass = 'bg-rose-50 border-rose-500 text-rose-800 line-through';
                      }
                    }

                    return (
                      <button
                        key={key}
                        onClick={() => handleSelectAnswer(prob, key as any)}
                        className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optClass}`}
                      >
                        <span className="w-6 h-6 rounded-md bg-[#FAF9F5] border border-[#E5E3D8] flex items-center justify-center font-mono-exam font-bold text-xs shrink-0 text-[#0B1B3D]">
                          {key}
                        </span>
                        <span className="flex-1">
                          <KaTeXMath text={text} />
                        </span>
                        {isAnswered && isOptionCorrect && (
                          <Check className="w-4 h-4 text-[#1E7E34] shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desglose de Distractores si respondió */}
              {isAnswered && (
                <div className="pt-2 space-y-2 text-xs">
                  <button
                    onClick={() => handleToggleSolution(prob.id)}
                    className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] font-mono-exam text-xs font-bold rounded-lg border border-[#1A2E5A] inline-flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{isSolutionOpen ? 'Ocultar Demostración Rigurosa' : 'Ver Demostración Rigurosa Paso a Paso'}</span>
                    {isSolutionOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isSolutionOpen && (
                    <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] space-y-3 animate-fade-in">
                      <div className="flex items-center gap-1.5 font-bold font-mono-exam text-[#0B1B3D]">
                        <Award className="w-4 h-4 text-[#C59B27]" />
                        <span>Demostración y Solución Formal:</span>
                      </div>
                      <div className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                        <KaTeXMath text={prob.detailedSolution} />
                      </div>

                      {/* Análisis de Opciones Erróneas */}
                      <div className="pt-2 border-t border-[#E5E3D8] space-y-1 text-[11px]">
                        <span className="font-mono-exam font-bold text-[#9E472A] uppercase block">
                          Por qué fallan los otros distractores:
                        </span>
                        {Object.entries(prob.distractorRationale).map(([k, reason]) => (
                          <div key={k} className="flex items-start gap-1.5 text-slate-700">
                            <strong className="font-mono-exam text-[#9E472A]">({k}):</strong>
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

export default JovenesTalentoView;
