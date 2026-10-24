import React, { useState, useMemo } from 'react';
import {
  Stethoscope,
  Activity,
  Heart,
  Baby,
  Scissors,
  ShieldCheck,
  BookOpen,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Clock,
  Layers,
  Award,
  ChevronDown,
  ChevronUp,
  Brain,
  FileText,
  AlertTriangle,
  Play,
  ArrowRight,
  Thermometer,
  Zap,
  RefreshCw,
  FolderOpen,
  QrCode,
} from 'lucide-react';
import {
  RESIDENTADO_QUESTIONS,
  RESIDENTADO_SPECIALTIES,
  ResidentadoQuestion,
} from '../data/residentadoMedicoData';
import {
  BRANCHING_CLINICAL_CASES,
  BranchingCaseScenario,
  VitalSigns,
} from '../data/residentadoBranchingCases';
import { createNewFSRSCard, addOrUpdateFlashcard } from '../utils/fsrsScheduler';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { CertificateModal } from './CertificateModal';
import { AudioSpeechButton } from './AudioSpeechButton';

interface ResidentadoMedicoViewProps {
  onOpenFlashcards?: (category?: string) => void;
  showToast?: (msg: string) => void;
  onOpenErrorNotebook?: () => void;
}

export const ResidentadoMedicoView: React.FC<ResidentadoMedicoViewProps> = ({
  onOpenFlashcards,
  showToast,
  onOpenErrorNotebook,
}) => {
  // Navigation mode: standard vignettes vs interactive branching cases
  const [activeTabMode, setActiveTabMode] = useState<'vignettes' | 'branching_cases'>('vignettes');

  // ==========================================
  // ESTADO DE VIÑETAS CLÍNICAS ESTÁNDAR
  // ==========================================
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealedRationales, setRevealedRationales] = useState<Record<string, boolean>>({});
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [issuedCert, setIssuedCert] = useState<AcademicCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  const filteredQuestions = useMemo(() => {
    if (selectedSpecialty === 'all') return RESIDENTADO_QUESTIONS;
    return RESIDENTADO_QUESTIONS.filter(q => q.specialty === selectedSpecialty);
  }, [selectedSpecialty]);

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (examSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionKey }));
    if (!isExamMode) {
      setRevealedRationales(prev => ({ ...prev, [questionId]: true }));
    }
  };

  const handleToggleRationale = (questionId: string) => {
    setRevealedRationales(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleCreateFlashcard = (q: ResidentadoQuestion) => {
    const card = createNewFSRSCard(
      `flashcard-${q.id}`,
      q.clinicalVignette,
      `Respuesta Correcta: (${q.correctKey}) ${q.options.find(o => o.key === q.correctKey)?.text}\n\n${q.explanation}`,
      'Medicina',
      {
        topic: q.topic,
        keyTakeaway: q.keyTakeaway,
        sourceExam: 'ENAR El Salvador',
      }
    );
    addOrUpdateFlashcard(card);
    if (showToast) {
      showToast('¡Caso clínico añadido a tus Flashcards FSRS con éxito!');
    }
  };

  const handleExamSubmit = () => {
    setExamSubmitted(true);
    let loggedErrors = 0;
    filteredQuestions.forEach(q => {
      const selected = userAnswers[q.id];
      if (selected !== q.correctKey) {
        const optionsMap: Record<string, string> = {};
        q.options.forEach(o => {
          optionsMap[o.key] = o.text;
        });
        logQuestionError({
          questionId: q.id,
          questionText: q.clinicalVignette,
          categoryKey: `Residentado Médico ENAR • ${q.specialty}`,
          selectedAnswer: selected ? (q.options.find(o => o.key === selected)?.text || selected) : '(Sin responder)',
          correctAnswer: q.options.find(o => o.key === q.correctKey)?.text || q.correctKey,
          options: optionsMap,
          explanation: `${q.explanation}\n\nHigh-Yield Takeaway: ${q.keyTakeaway}`,
        });
        loggedErrors++;
      }
    });

    if (showToast) {
      if (loggedErrors > 0) {
        showToast(`Examen calificado. Se registraron ${loggedErrors} error(es) en tu Cuaderno Inteligente de Errores.`);
      } else {
        showToast('¡Puntaje perfecto! Todas las viñetas clínicas fueron respondidas correctamente.');
      }
    }
  };

  // Exam mode score calculation
  const examStats = useMemo(() => {
    let correct = 0;
    let answered = 0;
    filteredQuestions.forEach(q => {
      const selected = userAnswers[q.id];
      if (selected) {
        answered++;
        if (selected === q.correctKey) {
          correct++;
        }
      }
    });
    const total = filteredQuestions.length;
    const pct = total > 0 ? ((correct / total) * 100).toFixed(1) : '0';
    return { correct, answered, total, pct };
  }, [filteredQuestions, userAnswers]);

  const handleGenerateCertificate = async () => {
    const activeSpecialtyMeta = RESIDENTADO_SPECIALTIES.find(s => s.id === selectedSpecialty) || { name: 'Troncal General' };
    const cert = await issueCertificate({
      studentName: 'Médico Cirujano Aspirante ENAR',
      studentId: 'ENAR-SV-' + Math.floor(10000 + Math.random() * 90000),
      moduleKey: `ENAR_${selectedSpecialty.toUpperCase()}`,
      moduleTitle: `Simulador Oficial de Posgrado Médico ENAR: ${activeSpecialtyMeta.name}`,
      institutionAuthority: 'Consejo de Residentados Médicos & MINSAL El Salvador',
      score: `${examStats.pct}%`,
      numericScore: parseFloat(examStats.pct) / 10,
      passingScoreRequired: '70.0%',
    });
    setIssuedCert(cert);
    setIsCertModalOpen(true);
    if (showToast) showToast('¡Diploma oficial emitido con firma digital SHA-256 y código QR!');
  };

  // ==========================================
  // ESTADO DE CASOS RAMIFICADOS (BRANCHING)
  // ==========================================
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const activeCase: BranchingCaseScenario = BRANCHING_CLINICAL_CASES[selectedCaseIndex];
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [currentVitals, setCurrentVitals] = useState<VitalSigns>(activeCase.initialVitals);
  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(null);
  const [caseFinished, setCaseFinished] = useState<boolean>(false);

  const currentStage = activeCase.stages[currentStageIdx];
  const chosenDecision = currentStage?.options.find(o => o.id === selectedDecisionId);

  const handleSelectCase = (index: number) => {
    setSelectedCaseIndex(index);
    const newCase = BRANCHING_CLINICAL_CASES[index];
    setCurrentStageIdx(0);
    setCurrentVitals(newCase.initialVitals);
    setSelectedDecisionId(null);
    setCaseFinished(false);
  };

  const handleApplyDecision = (optionId: string) => {
    if (selectedDecisionId) return; // Prevent double clicking
    setSelectedDecisionId(optionId);
    const option = currentStage.options.find(o => o.id === optionId);
    if (!option) return;

    // Apply vital signs impact
    setCurrentVitals(prev => ({
      ...prev,
      ...option.vitalImpact,
    }));

    // If suboptimal, log to error notebook
    if (!option.isOptimal) {
      const branchOptionsMap: Record<string, string> = {};
      currentStage.options.forEach((o, i) => {
        branchOptionsMap[String.fromCharCode(65 + i)] = o.action;
      });
      logQuestionError({
        questionId: `${activeCase.id}-${currentStage.id}`,
        questionText: `[Caso Ramificado: ${activeCase.title}] ${currentStage.narrative}`,
        categoryKey: `Residentado Médico ENAR • ${activeCase.specialty}`,
        selectedAnswer: option.action,
        correctAnswer: currentStage.options.find(o => o.isOptimal)?.action || '',
        options: branchOptionsMap,
        explanation: `${option.consequenceText}\n\nPerla Clínica: ${option.learningPoint}\nNormativa: ${option.minsalProtocolRef}`,
      });
    }
  };

  const handleAdvanceStage = () => {
    if (currentStageIdx + 1 < activeCase.stages.length) {
      setCurrentStageIdx(prev => prev + 1);
      setSelectedDecisionId(null);
    } else {
      setCaseFinished(true);
    }
  };

  const handleRestartCase = () => {
    setCurrentStageIdx(0);
    setCurrentVitals(activeCase.initialVitals);
    setSelectedDecisionId(null);
    setCaseFinished(false);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans-ui">
      {/* Banner Principal Institucional */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#132A5C] text-[#C59B27] text-xs font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30">
            <Stethoscope className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Posgrado Médico • Consejo de Residentados El Salvador</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Examen Nacional de Aspirantes a Residentes Médicos (ENAR)
          </h2>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-3xl">
            Preparación médica avanzada basada en <strong>viñetas clínicas reales</strong> y toma de decisiones terapéuticas.
            Alineado estrictamente a las <strong>Guías Clínicas Oficiales del MINSAL</strong>, normativas del ISSS y bibliografía troncal
            (<em>Harrison, Sabiston, Nelson, Williams</em>).
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap text-xs font-mono-exam">
            <div className="bg-[#07132B] px-3 py-1.5 rounded-md border border-[#C59B27]/30 text-[#C59B27] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Medicina Interna, Cirugía, Pediatría y Gineco-Obstetricia</span>
            </div>
            <div className="bg-[#07132B] px-3 py-1.5 rounded-md border border-[#1E3A70] text-[#94A3B8] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1E7E34]" />
              <span>Protocolos MINSAL & Código Rojo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selector de Modo Maestro: Viñetas vs Casos Ramificados */}
      <div className="flex items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex-wrap">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTabMode('vignettes')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
              activeTabMode === 'vignettes'
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-sm'
                : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#C59B27]" />
            <span>Viñetas Clínicas Estándar</span>
          </button>

          <button
            onClick={() => setActiveTabMode('branching_cases')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
              activeTabMode === 'branching_cases'
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-sm'
                : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <Activity className="w-4 h-4 text-[#9E472A]" />
            <span>Casos Secuenciales Ramificados (Shock Room)</span>
            <span className="bg-[#C59B27] text-[#0B1B3D] text-[10px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider">
              Nuevo
            </span>
          </button>
        </div>

        {onOpenErrorNotebook && (
          <button
            onClick={onOpenErrorNotebook}
            className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] border border-[#C59B27] transition-all cursor-pointer font-mono-exam flex items-center gap-2 shadow-xs"
          >
            <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Cuaderno de Errores FSRS</span>
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* VISTA 1: VIÑETAS CLÍNICAS ESTÁNDAR (MODO TUTOR / EXAMEN) */}
      {/* ========================================================================= */}
      {activeTabMode === 'vignettes' && (
        <div className="space-y-6">
          {/* Selector de Especialidades y Modo de Estudio */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
              {RESIDENTADO_SPECIALTIES.map(sp => (
                <button
                  key={sp.id}
                  onClick={() => {
                    setSelectedSpecialty(sp.id);
                    setExamSubmitted(false);
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer font-mono-exam whitespace-nowrap ${
                    selectedSpecialty === sp.id
                      ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                      : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
                  }`}
                >
                  {sp.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  setIsExamMode(!isExamMode);
                  setExamSubmitted(false);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-1.5 ${
                  isExamMode
                    ? 'bg-[#9E472A] text-white'
                    : 'bg-[#FAF9F5] text-[#0B1B3D] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{isExamMode ? 'Modo Examen Activo' : 'Modo Tutor Activo'}</span>
              </button>

              {onOpenFlashcards && (
                <button
                  onClick={() => onOpenFlashcards('Medicina')}
                  className="px-3 py-1.5 rounded-md text-xs font-bold bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] transition-all cursor-pointer font-mono-exam flex items-center gap-1.5 shadow-xs"
                >
                  <Brain className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span className="hidden sm:inline">Repasar Flashcards</span>
                </button>
              )}
            </div>
          </div>

          {/* Resumen de Examen si está en Modo Examen */}
          {isExamMode && examSubmitted && (
            <div className="bg-[#FAF9F5] border-2 border-[#C59B27] rounded-xl p-5 shadow-corporate-card space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial text-lg font-bold text-[#111625] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#C59B27]" />
                  Dictamen Oficial del Simulacro ENAR
                </h4>
                <span className={`px-2.5 py-0.5 rounded text-xs font-mono-exam font-bold uppercase ${
                  parseFloat(examStats.pct) >= 70 ? 'bg-[#1E7E34] text-white' : 'bg-[#9E472A] text-white'
                }`}>
                  {parseFloat(examStats.pct) >= 70 ? 'Aprobado Satisfactorio' : 'Requiere Refuerzo Clínico'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-exam">
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Calificación</span>
                  <span className="text-xl font-bold text-[#0B1B3D]">{examStats.pct}%</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Aciertos</span>
                  <span className="text-xl font-bold text-[#1E7E34]">{examStats.correct}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Errores Registrados</span>
                  <span className="text-xl font-bold text-[#9E472A]">{examStats.answered - examStats.correct}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Total Viñetas</span>
                  <span className="text-xl font-bold text-[#475569]">{examStats.total}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                {parseFloat(examStats.pct) >= 70 && (
                  <button
                    type="button"
                    onClick={handleGenerateCertificate}
                    className="px-5 py-2.5 bg-[#C59B27] hover:bg-[#B38A22] text-[#0B1B3D] text-xs font-mono-exam font-black rounded-lg border border-[#A67F1E] inline-flex items-center gap-2 cursor-pointer shadow-corporate-subtle transition-all"
                  >
                    <QrCode className="w-4 h-4 text-[#0B1B3D]" />
                    <Award className="w-4 h-4 text-[#0B1B3D]" />
                    <span>Emitir Diploma Oficial de Posgrado ENAR (Con Código QR Criptográfico)</span>
                  </button>
                )}

                {onOpenErrorNotebook && examStats.answered - examStats.correct > 0 && (
                  <button
                    onClick={onOpenErrorNotebook}
                    className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-mono-exam font-bold rounded-lg border border-[#C59B27]/40 flex items-center gap-2 cursor-pointer shadow-xs ml-auto"
                  >
                    <FolderOpen className="w-4 h-4 text-[#C59B27]" />
                    <span>Ver Errores en Cuaderno Inteligente FSRS</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Listado de Casos Clínicos */}
          <div className="space-y-6">
            {filteredQuestions.map((q, idx) => {
              const selected = userAnswers[q.id];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === q.correctKey;
              const showRationale = isExamMode ? examSubmitted : (revealedRationales[q.id] || isAnswered);

              return (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-subtle overflow-hidden space-y-4 p-5 sm:p-6"
                >
                  {/* Cabecera del Caso Clínico */}
                  <div className="flex items-center justify-between border-b border-[#EAE8DD] pb-3 text-xs gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-exam font-bold text-[#0B1B3D] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8]">
                        Caso Clínico {idx + 1} de {filteredQuestions.length}
                      </span>
                      <span className="text-[#64748B] font-mono-exam font-semibold text-[11px] truncate max-w-[280px]">
                        {q.topic}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <AudioSpeechButton
                        id={`enar-audio-${q.id}`}
                        textToSpeak={q.clinicalVignette}
                        label="Escuchar Viñeta"
                      />
                      <button
                        onClick={() => handleCreateFlashcard(q)}
                        className="text-[#64748B] hover:text-[#0B1B3D] font-mono-exam text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
                        title="Guardar como Flashcard FSRS"
                      >
                        <Brain className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span className="hidden sm:inline">Guardar Tarjeta</span>
                      </button>
                    </div>
                  </div>

                  {/* Viñeta Clínica */}
                  <div className="text-sm text-[#111625] leading-relaxed font-sans-ui bg-[#FAF9F5]/50 p-4 rounded-lg border border-[#EAE8DD]">
                    <p className="font-medium text-[#1E293B]">
                      {q.clinicalVignette}
                    </p>
                  </div>

                  {/* Opciones de Respuesta */}
                  <div className="space-y-2 pt-1">
                    {q.options.map(opt => {
                      const isOptionSelected = selected === opt.key;
                      const isOptionCorrect = opt.key === q.correctKey;

                      let btnStyle = 'bg-white border-[#E5E3D8] hover:bg-[#FAF9F5] text-[#334155]';

                      if (showRationale) {
                        if (isOptionCorrect) {
                          btnStyle = 'bg-[#1E7E34]/10 border-[#1E7E34] text-[#1E7E34] font-semibold';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          btnStyle = 'bg-[#9E472A]/10 border-[#9E472A] text-[#9E472A]';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'bg-[#0B1B3D]/10 border-[#0B1B3D] text-[#0B1B3D] font-semibold';
                      }

                      return (
                        <button
                          key={opt.key}
                          disabled={isExamMode && examSubmitted}
                          onClick={() => handleSelectOption(q.id, opt.key)}
                          className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span className={`w-6 h-6 rounded-md flex items-center justify-center font-mono-exam text-xs font-bold shrink-0 ${
                            showRationale && isOptionCorrect
                              ? 'bg-[#1E7E34] text-white'
                              : showRationale && isOptionSelected && !isOptionCorrect
                              ? 'bg-[#9E472A] text-white'
                              : isOptionSelected
                              ? 'bg-[#0B1B3D] text-white'
                              : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                          }`}>
                            {opt.key}
                          </span>
                          <span className="flex-1 leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Botón para expandir/colapsar Justificación en Modo Tutor */}
                  {!isExamMode && isAnswered && (
                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => handleToggleRationale(q.id)}
                        className="text-xs font-mono-exam font-semibold text-[#0B1B3D] hover:text-[#132A5C] flex items-center gap-1 cursor-pointer"
                      >
                        {showRationale ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        <span>{showRationale ? 'Ocultar Justificación y Análisis' : 'Ver Justificación y Análisis'}</span>
                      </button>
                    </div>
                  )}

                  {/* Justificación y Desglose de Errores */}
                  {showRationale && (
                    <div className="mt-3 p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] space-y-3.5 text-xs">
                      {/* Veredicto de la Pregunta */}
                      <div className="flex items-center gap-2 font-mono-exam font-bold">
                        {isCorrect ? (
                          <div className="text-[#1E7E34] flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Respuesta Correcta ({q.correctKey})</span>
                          </div>
                        ) : (
                          <div className="text-[#9E472A] flex items-center gap-1.5">
                            <XCircle className="w-4 h-4" />
                            <span>Respuesta Incorrecta — La opción correcta es ({q.correctKey})</span>
                          </div>
                        )}
                        <span className="text-[#94A3B8]">•</span>
                        <span className="text-[#64748B] text-[11px]">{q.officialReference}</span>
                      </div>

                      {/* Explicación Clínica Detallada */}
                      <p className="text-[#334155] leading-relaxed">
                        {q.explanation}
                      </p>

                      {/* High-Yield Takeaway */}
                      <div className="p-3 bg-white rounded-lg border border-[#C59B27]/40 space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                          <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                          <span>Punto Clave de Rendimiento (High-Yield Takeaway):</span>
                        </div>
                        <p className="text-[#334155] leading-relaxed font-medium">
                          {q.keyTakeaway}
                        </p>
                      </div>

                      {/* Desglose de Distractores Falsos */}
                      <div className="space-y-1.5 pt-1">
                        <span className="font-mono-exam text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                          ¿Por qué los otros distractores son incorrectos?:
                        </span>
                        <div className="space-y-1 text-[#475569]">
                          {Object.entries(q.distractorRationale).map(([key, reason]) => (
                            <div key={key} className="flex items-start gap-1.5">
                              <span className="font-mono-exam font-bold text-[#9E472A] shrink-0">({key}):</span>
                              <span>{reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Botón de Calificar en Modo Examen */}
          {isExamMode && !examSubmitted && (
            <div className="sticky bottom-4 bg-[#FAF9F5] p-4 rounded-xl border border-[#C59B27] shadow-corporate-elevated flex items-center justify-between gap-3">
              <div className="text-xs font-mono-exam">
                <span className="font-bold text-[#0B1B3D]">{examStats.answered} de {examStats.total}</span> viñetas respondidas
              </div>

              <button
                onClick={handleExamSubmit}
                className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] font-bold text-xs rounded-lg border border-[#1A2E5A] shadow-corporate-subtle transition-all cursor-pointer font-mono-exam"
              >
                Calificar Simulacro ENAR
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VISTA 2: CASOS CLÍNICOS SECUENCIALES RAMIFICADOS (SHOCK ROOM) */}
      {/* ========================================================================= */}
      {activeTabMode === 'branching_cases' && (
        <div className="space-y-6 animate-fade-in">
          {/* Selector de Casos Ramificados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BRANCHING_CLINICAL_CASES.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => handleSelectCase(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  selectedCaseIndex === idx
                    ? 'bg-[#0B1B3D] text-white border-[#1A2E5A] shadow-corporate-card'
                    : 'bg-white text-[#111625] border-[#E5E3D8] hover:bg-[#FAF9F5]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono-exam font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      selectedCaseIndex === idx
                        ? 'bg-[#132A5C] text-[#C59B27] border border-[#C59B27]/30'
                        : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                    }`}>
                      {sc.specialty}
                    </span>
                    <span className="text-xs font-mono-exam font-bold">
                      Caso 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-editorial text-sm font-bold line-clamp-2">
                    {sc.title}
                  </h4>
                </div>
                <p className={`text-xs line-clamp-2 ${selectedCaseIndex === idx ? 'text-[#CBD5E1]' : 'text-[#64748B]'}`}>
                  {sc.patientDescription}
                </p>
              </button>
            ))}
          </div>

          {/* Monitor de Signos Vitales de Unidad de Cuidados Críticos */}
          <div className="bg-[#07132B] border-2 border-[#1E3A70] rounded-xl p-4 sm:p-5 text-white shadow-corporate-card relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#1A2E5A] pb-3 mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1E7E34] animate-pulse" />
                <span className="font-mono-exam text-xs uppercase tracking-wider text-[#94A3B8]">
                  Monitor de Signos Vitales • Shock Room / UCI
                </span>
              </div>
              <span className="font-mono-exam text-xs text-[#C59B27]">
                Etapa {currentStage?.stageNumber} de {activeCase.stages.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center font-mono-exam">
              <div className="bg-[#0B1B3D] p-2.5 rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] block">PA (mmHg)</span>
                <span className={`text-lg sm:text-xl font-bold ${
                  currentVitals.bp === '0/0' || parseInt(currentVitals.bp) < 70
                    ? 'text-[#EF4444] animate-pulse'
                    : 'text-[#C59B27]'
                }`}>
                  {currentVitals.bp}
                </span>
              </div>

              <div className="bg-[#0B1B3D] p-2.5 rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] block">FC (lpm)</span>
                <span className={`text-lg sm:text-xl font-bold ${
                  currentVitals.hr === 0 || currentVitals.hr > 150
                    ? 'text-[#EF4444] animate-pulse'
                    : 'text-[#10B981]'
                }`}>
                  {currentVitals.hr}
                </span>
              </div>

              <div className="bg-[#0B1B3D] p-2.5 rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] block">FR (rpm)</span>
                <span className="text-lg sm:text-xl font-bold text-[#38BDF8]">
                  {currentVitals.rr}
                </span>
              </div>

              <div className="bg-[#0B1B3D] p-2.5 rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] block">SatO2 (%)</span>
                <span className={`text-lg sm:text-xl font-bold ${
                  currentVitals.spo2 < 90 ? 'text-[#EF4444]' : 'text-[#60A5FA]'
                }`}>
                  {currentVitals.spo2}%
                </span>
              </div>

              <div className="bg-[#0B1B3D] p-2.5 rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] block">Temp (°C)</span>
                <span className="text-lg sm:text-xl font-bold text-[#F59E0B]">
                  {currentVitals.temp}°C
                </span>
              </div>

              <div className="bg-[#0B1B3D] p-2.5 rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] block">Glasgow</span>
                <span className={`text-lg sm:text-xl font-bold ${
                  (currentVitals.glasgow || 15) <= 8 ? 'text-[#EF4444]' : 'text-[#A78BFA]'
                }`}>
                  {currentVitals.glasgow || 15}/15
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta de la Etapa Clínica Activa */}
          {!caseFinished && currentStage && (
            <div className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-subtle p-5 sm:p-6 space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-mono-exam font-bold text-[#C59B27] uppercase tracking-wider block">
                  {currentStage.stageTitle}
                </span>
                <h3 className="text-lg font-editorial font-bold text-[#111625]">
                  Escenario de Toma de Decisiones Terapéuticas
                </h3>
              </div>

              {/* Narrativa del estado clínico */}
              <div className="bg-[#FAF9F5] p-4 rounded-lg border border-[#EAE8DD] text-sm text-[#1E293B] leading-relaxed">
                <p>{currentStage.narrative}</p>
              </div>

              {/* Datos de Laboratorio o ECG */}
              {currentStage.clinicalDataSnippet && (
                <div className="p-3 bg-[#0B1B3D]/5 border-l-4 border-[#0B1B3D] rounded-r-lg text-xs font-mono-exam text-[#0B1B3D]">
                  <span className="font-bold block mb-1">HALLAZGOS CLÍNICOS & PARACLÍNICOS:</span>
                  <span>{currentStage.clinicalDataSnippet}</span>
                </div>
              )}

              {/* Decisiones Terapéuticas Disponibles */}
              <div className="space-y-3 pt-2">
                <span className="font-mono-exam text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  Seleccione su conducta médica inmediata:
                </span>

                <div className="space-y-2.5">
                  {currentStage.options.map((opt, optIdx) => {
                    const isSelected = selectedDecisionId === opt.id;
                    let optStyle = 'bg-white border-[#E5E3D8] hover:bg-[#FAF9F5] text-[#1E293B]';

                    if (selectedDecisionId) {
                      if (opt.isOptimal) {
                        optStyle = 'bg-[#1E7E34]/10 border-[#1E7E34] text-[#1E7E34] font-semibold';
                      } else if (isSelected && !opt.isOptimal) {
                        optStyle = 'bg-[#9E472A]/10 border-[#9E472A] text-[#9E472A]';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={selectedDecisionId !== null}
                        onClick={() => handleApplyDecision(opt.id)}
                        className={`w-full text-left p-4 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center font-mono-exam text-xs font-bold shrink-0 ${
                          selectedDecisionId && opt.isOptimal
                            ? 'bg-[#1E7E34] text-white'
                            : selectedDecisionId && isSelected && !opt.isOptimal
                            ? 'bg-[#9E472A] text-white'
                            : 'bg-[#0B1B3D] text-white'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1 leading-snug">{opt.action}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Consecuencias y Perla Clínica al Elegir */}
              {chosenDecision && (
                <div className="mt-4 p-4 rounded-xl border space-y-3 animate-fade-in bg-[#FAF9F5] border-[#C59B27]/40 text-xs">
                  <div className="flex items-center gap-2 font-mono-exam font-bold">
                    {chosenDecision.isOptimal ? (
                      <div className="text-[#1E7E34] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Decisión Médica Óptima (Gold Standard)</span>
                      </div>
                    ) : (
                      <div className="text-[#9E472A] flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Decisión Subóptima — Registrado en tu Cuaderno de Errores</span>
                      </div>
                    )}
                    <span className="text-[#94A3B8]">•</span>
                    <span className="text-[#64748B] text-[11px]">{chosenDecision.minsalProtocolRef}</span>
                  </div>

                  <p className="text-[#334155] leading-relaxed">
                    {chosenDecision.consequenceText}
                  </p>

                  <div className="p-3 bg-white rounded-lg border border-[#E5E3D8] space-y-1">
                    <span className="font-mono-exam font-bold text-[#0B1B3D] block text-[11px]">
                      Perla Clínica Aplicada:
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {chosenDecision.learningPoint}
                    </p>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={handleAdvanceStage}
                      className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-mono-exam font-bold rounded-lg flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>{currentStageIdx + 1 < activeCase.stages.length ? 'Avanzar a la Siguiente Etapa' : 'Finalizar Caso y Ver Debrief'}</span>
                      <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Debrief Oficial al Finalizar el Caso */}
          {caseFinished && (
            <div className="bg-white rounded-xl border-2 border-[#C59B27] p-6 space-y-4 shadow-corporate-card animate-fade-in">
              <div className="flex items-center justify-between border-b border-[#EAE8DD] pb-3">
                <h3 className="font-editorial text-xl font-bold text-[#111625] flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#C59B27]" />
                  Debriefing Clínico y Cierre del Caso
                </h3>
                <span className="text-xs font-mono-exam font-bold bg-[#1E7E34] text-white px-2.5 py-1 rounded">
                  Caso Completado
                </span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-[#334155]">
                <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8]">
                  <span className="font-mono-exam font-bold text-[#0B1B3D] block mb-1">Diagnóstico Concluyente:</span>
                  <p>{activeCase.debriefSummary.coreDiagnosis}</p>
                </div>

                <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8]">
                  <span className="font-mono-exam font-bold text-[#0B1B3D] block mb-1">Manejo Gold Standard:</span>
                  <p>{activeCase.debriefSummary.goldStandardProtocol}</p>
                </div>

                <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8]">
                  <span className="font-mono-exam font-bold text-[#0B1B3D] block mb-1">Referencia Oficial MINSAL:</span>
                  <p>{activeCase.debriefSummary.officialMinsalNorm}</p>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between flex-wrap gap-2">
                <button
                  onClick={handleRestartCase}
                  className="px-4 py-2 bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] border border-[#E5E3D8] text-xs font-mono-exam font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Repetir este Escenario</span>
                </button>

                <div className="flex items-center gap-2">
                  {onOpenErrorNotebook && (
                    <button
                      onClick={onOpenErrorNotebook}
                      className="px-4 py-2 bg-white text-[#0B1B3D] border border-[#C59B27] text-xs font-mono-exam font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                    >
                      <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span>Revisar Errores en Cuaderno</span>
                    </button>
                  )}

                  {selectedCaseIndex + 1 < BRANCHING_CLINICAL_CASES.length && (
                    <button
                      onClick={() => handleSelectCase(selectedCaseIndex + 1)}
                      className="px-5 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-mono-exam font-bold rounded-lg flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Siguiente Caso Clínico</span>
                      <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

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

export default ResidentadoMedicoView;
