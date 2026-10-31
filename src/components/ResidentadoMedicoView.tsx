import React, { useState, useMemo, useEffect } from 'react';
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
  Search,
  Filter,
  Users,
  Pause,
} from 'lucide-react';
import {
  RESIDENTADO_QUESTIONS,
  RESIDENTADO_SPECIALTIES,
  RESIDENTADO_THEMATIC_UNITS,
  ResidentadoQuestion,
  ResidentadoThematicUnit,
  ResidentadoSolvedCase,
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
  // Navigation mode: 3 primary tabs + shock room view
  const [activeTabMode, setActiveTabMode] = useState<'thematic_units' | 'solved_cases' | 'simulator' | 'branching_cases'>('thematic_units');

  // ==========================================
  // TAB 1: UNIDADES TEMÁTICAS ESPECIALIZADAS
  // ==========================================
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit-medicina-interna');
  const activeUnit = useMemo(() => {
    return RESIDENTADO_THEMATIC_UNITS.find(u => u.id === selectedUnitId) || RESIDENTADO_THEMATIC_UNITS[0];
  }, [selectedUnitId]);

  // ==========================================
  // TAB 2: CASOS CLÍNICOS RESUELTOS PASO A PASO
  // ==========================================
  const [caseSpecialtyFilter, setCaseSpecialtyFilter] = useState<string>('all');
  const [caseSearchQuery, setCaseSearchQuery] = useState<string>('');
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>('case-mi-01');

  // Flatten all 25 solved cases across units
  const allSolvedCases = useMemo(() => {
    return RESIDENTADO_THEMATIC_UNITS.flatMap(unit =>
      unit.solvedClinicalCases.map(c => ({
        ...c,
        specialtyId: unit.specialtyId,
        specialtyName: unit.specialtyName,
      }))
    );
  }, []);

  const filteredSolvedCases = useMemo(() => {
    return allSolvedCases.filter(c => {
      const matchSpecialty = caseSpecialtyFilter === 'all' || c.specialtyId === caseSpecialtyFilter;
      const matchSearch =
        caseSearchQuery.trim() === '' ||
        c.title.toLowerCase().includes(caseSearchQuery.toLowerCase()) ||
        c.patientProfile.toLowerCase().includes(caseSearchQuery.toLowerCase()) ||
        c.diagnosticReasoning.toLowerCase().includes(caseSearchQuery.toLowerCase());
      return matchSpecialty && matchSearch;
    });
  }, [allSolvedCases, caseSpecialtyFilter, caseSearchQuery]);

  // ==========================================
  // TAB 3: SIMULADOR ENAR INTERACTIVO
  // ==========================================
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealedRationales, setRevealedRationales] = useState<Record<string, boolean>>({});
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [issuedCert, setIssuedCert] = useState<AcademicCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  // Timer state for exam mode
  const [examSeconds, setExamSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: any = null;
    if (isExamMode && !examSubmitted && isTimerRunning) {
      interval = setInterval(() => {
        setExamSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isExamMode, examSubmitted, isTimerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

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
    setIsTimerRunning(false);
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

  const handleResetExam = () => {
    setUserAnswers({});
    setRevealedRationales({});
    setExamSubmitted(false);
    setExamSeconds(0);
    setIsTimerRunning(true);
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
  // ESTADO DE CASOS RAMIFICADOS (SHOCK ROOM)
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
            Preparación médica avanzada y refuerzo curricular oficial para el ENAR de El Salvador. 
            Contiene <strong>5 unidades temáticas especializadas</strong> con teoría sustantiva, 
            <strong> 25 casos clínicos resueltos paso a paso</strong> con razonamiento diagnóstico, 
            y un <strong>simulador interactivo de {RESIDENTADO_QUESTIONS.length} preguntas</strong> con justificación de distractores y protocolos oficiales del MINSAL, ISSS y literatura de posgrado.
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap text-xs font-mono-exam">
            <div className="bg-[#07132B] px-3 py-1.5 rounded-md border border-[#C59B27]/30 text-[#C59B27] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>5 Especialidades Troncales (MI, CG, Ped, GO, MF)</span>
            </div>
            <div className="bg-[#07132B] px-3 py-1.5 rounded-md border border-[#1E3A70] text-[#94A3B8] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1E7E34]" />
              <span>Protocolos MINSAL & Código Rojo / Código Naranja</span>
            </div>
            <div className="bg-[#07132B] px-3 py-1.5 rounded-md border border-[#1E3A70] text-[#E2E8F0] flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#C59B27]" />
              <span>25 Casos Clínicos + {RESIDENTADO_QUESTIONS.length} Viñetas ENAR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación por Pestañas Principales (Tabs) */}
      <div className="flex items-center justify-between gap-2 bg-white p-2.5 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTabMode('thematic_units')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
              activeTabMode === 'thematic_units'
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-sm'
                : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#C59B27]" />
            <span>1. Unidades Temáticas</span>
          </button>

          <button
            onClick={() => setActiveTabMode('solved_cases')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
              activeTabMode === 'solved_cases'
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-sm'
                : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <FileText className="w-4 h-4 text-[#C59B27]" />
            <span>2. Casos Clínicos Resueltos (25)</span>
          </button>

          <button
            onClick={() => setActiveTabMode('simulator')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
              activeTabMode === 'simulator'
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-sm'
                : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <Stethoscope className="w-4 h-4 text-[#C59B27]" />
            <span>3. Simulador ENAR ({RESIDENTADO_QUESTIONS.length})</span>
          </button>

          <button
            onClick={() => setActiveTabMode('branching_cases')}
            className={`px-3 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-1.5 ${
              activeTabMode === 'branching_cases'
                ? 'bg-[#9E472A] text-white shadow-sm'
                : 'bg-[#FAF9F5] text-[#64748B] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
            title="Simulador de Urgencias Secuenciales en Tiempo Real"
          >
            <Activity className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Shock Room Interactivo</span>
          </button>
        </div>

        {onOpenErrorNotebook && (
          <button
            onClick={onOpenErrorNotebook}
            className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] border border-[#C59B27] transition-all cursor-pointer font-mono-exam flex items-center gap-2 shadow-xs ml-auto"
          >
            <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Cuaderno FSRS</span>
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: UNIDADES TEMÁTICAS ESPECIALIZADAS */}
      {/* ========================================================================= */}
      {activeTabMode === 'thematic_units' && (
        <div className="space-y-6">
          {/* Selector de Unidades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {RESIDENTADO_THEMATIC_UNITS.map(unit => {
              const isSelected = unit.id === selectedUnitId;
              return (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnitId(unit.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-[#0B1B3D] border-[#C59B27] text-white shadow-sm ring-1 ring-[#C59B27]'
                      : 'bg-white border-[#E5E3D8] hover:bg-[#FAF9F5] text-[#334155]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono-exam font-bold uppercase ${isSelected ? 'text-[#C59B27]' : 'text-[#64748B]'}`}>
                      {unit.specialtyName}
                    </span>
                    <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C59B27]' : 'text-[#94A3B8]'}`} />
                  </div>
                  <span className={`text-xs font-semibold line-clamp-2 ${isSelected ? 'text-white' : 'text-[#0B1B3D]'}`}>
                    {unit.title.split(':')[0]}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono-exam text-[#94A3B8]">
                    <span>{unit.solvedClinicalCases.length} casos</span>
                    <span>•</span>
                    <span>5 perlas</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contenido Detallado de la Unidad Seleccionada */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-subtle p-6 space-y-6">
            {/* Encabezado de la Unidad */}
            <div className="border-b border-[#EAE8DD] pb-4 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-[#0B1B3D] text-[#C59B27] text-xs font-mono-exam font-bold">
                  {activeUnit.specialtyName}
                </span>
                <AudioSpeechButton
                  id={`audio-unit-${activeUnit.id}`}
                  textToSpeak={`${activeUnit.title}. ${activeUnit.substantiveTheory.slice(0, 450)}`}
                  label="Escuchar Resumen"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#0B1B3D]">
                {activeUnit.title}
              </h3>
            </div>

            {/* Protocolos Clínicos Clave (Cards) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-exam font-bold text-[#0B1B3D] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#1E7E34]" />
                <span>Protocolos Clínicos Oficiales Normados</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeUnit.keyClinicalProtocols.map((proto, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg border border-[#E5E3D8] bg-[#FAF9F5] space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0B1B3D] line-clamp-1">{proto.protocolName}</span>
                    </div>
                    <p className="text-[11px] text-[#475569] leading-snug line-clamp-3">
                      {proto.summary}
                    </p>
                    <span className="text-[10px] font-mono-exam text-[#64748B] block pt-1 border-t border-[#EAE8DD]">
                      {proto.institution}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Perlas Clínicas de Alto Rendimiento */}
            <div className="space-y-3 bg-[#FAF9F5] p-4 sm:p-5 rounded-xl border border-[#E5E3D8]">
              <div className="flex items-center gap-2 text-xs font-mono-exam font-bold text-[#0B1B3D] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span>Perlas Clínicas de Alto Rendimiento (High-Yield Pearls)</span>
              </div>
              <ul className="space-y-2">
                {activeUnit.clinicalPearls.map((pearl, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#1E293B] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#1E7E34] shrink-0 mt-0.5" />
                    <span>{pearl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teoría Sustantiva Completa */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-exam font-bold text-[#0B1B3D] uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#C59B27]" />
                <span>Compendio Teórico y Fisiopatológico de Especialidad</span>
              </div>
              <div className="prose prose-sm max-w-none text-[#1E293B] leading-relaxed whitespace-pre-line bg-[#FAF9F5]/40 p-5 rounded-xl border border-[#EAE8DD] font-sans-ui text-xs sm:text-sm">
                {activeUnit.substantiveTheory}
              </div>
            </div>

            {/* Botón de acceso directo a los casos de esta unidad */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setCaseSpecialtyFilter(activeUnit.specialtyId);
                  setActiveTabMode('solved_cases');
                }}
                className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-white text-xs font-mono-exam font-bold rounded-lg border border-[#C59B27] inline-flex items-center gap-2 cursor-pointer shadow-sm transition-all"
              >
                <span>Ver los 5 Casos Clínicos Resueltos de {activeUnit.specialtyName}</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: CASOS CLÍNICOS RESUELTOS PASO A PASO */}
      {/* ========================================================================= */}
      {activeTabMode === 'solved_cases' && (
        <div className="space-y-6">
          {/* Filtros de Especialidad y Búsqueda */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
              <button
                onClick={() => setCaseSpecialtyFilter('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer font-mono-exam whitespace-nowrap ${
                  caseSpecialtyFilter === 'all'
                    ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
                }`}
              >
                Todos ({allSolvedCases.length})
              </button>
              {RESIDENTADO_THEMATIC_UNITS.map(u => (
                <button
                  key={u.specialtyId}
                  onClick={() => setCaseSpecialtyFilter(u.specialtyId)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer font-mono-exam whitespace-nowrap ${
                    caseSpecialtyFilter === u.specialtyId
                      ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                      : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
                  }`}
                >
                  {u.specialtyName} (5)
                </button>
              ))}
            </div>

            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={caseSearchQuery}
                onChange={e => setCaseSearchQuery(e.target.value)}
                placeholder="Buscar caso por patología o síntoma..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#FAF9F5] border border-[#E5E3D8] rounded-md text-xs text-[#0B1B3D] placeholder-[#94A3B8] focus:outline-none focus:border-[#C59B27]"
              />
            </div>
          </div>

          {/* Listado de Casos Clínicos en Acordeón */}
          <div className="space-y-4">
            {filteredSolvedCases.map((c, index) => {
              const isExpanded = expandedCaseId === c.id;

              return (
                <div
                  key={c.id}
                  className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-subtle overflow-hidden transition-all"
                >
                  {/* Encabezado del Acordeón (Click para expandir) */}
                  <div
                    onClick={() => setExpandedCaseId(isExpanded ? null : c.id)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-[#FAF9F5]/70 transition-colors gap-3"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono-exam font-bold uppercase bg-[#0B1B3D] text-[#C59B27] px-2 py-0.5 rounded">
                          {c.specialtyName}
                        </span>
                        <span className="text-xs font-mono-exam text-[#64748B]">
                          Caso #{index + 1}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-[#0B1B3D] leading-snug">
                        {c.title}
                      </h4>
                      <p className="text-xs text-[#64748B] line-clamp-1">
                        {c.patientProfile}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <AudioSpeechButton
                        id={`audio-case-${c.id}`}
                        textToSpeak={`${c.title}. ${c.patientProfile}. Razonamiento: ${c.diagnosticReasoning}`}
                        label="Escuchar"
                      />
                      <button
                        className="p-1 rounded-md text-[#64748B] hover:text-[#0B1B3D] hover:bg-[#EAE8DD]"
                        aria-label={isExpanded ? 'Colapsar caso' : 'Expandir caso'}
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Cuerpo Detallado del Caso Clínico */}
                  {isExpanded && (
                    <div className="border-t border-[#EAE8DD] p-5 sm:p-6 bg-[#FAF9F5]/40 space-y-6 text-xs sm:text-sm">
                      {/* Viñeta y Presentación */}
                      <div className="space-y-2 bg-white p-4 rounded-xl border border-[#E5E3D8]">
                        <div className="flex items-center gap-2 font-mono-exam font-bold text-[#0B1B3D] text-xs uppercase tracking-wider">
                          <Activity className="w-4 h-4 text-[#9E472A]" />
                          <span>Presentación Clínica y Examen Físico</span>
                        </div>
                        <p className="text-[#1E293B] leading-relaxed">
                          {c.initialVignette}
                        </p>
                      </div>

                      {/* Razonamiento Diagnóstico Paso a Paso */}
                      <div className="space-y-2 bg-[#FAF9F5] p-4 sm:p-5 rounded-xl border border-[#C59B27]/40 shadow-xs">
                        <div className="flex items-center gap-2 font-mono-exam font-bold text-[#0B1B3D] text-xs uppercase tracking-wider">
                          <Brain className="w-4 h-4 text-[#C59B27]" />
                          <span>Razonamiento Diagnóstico y Fisiopatología</span>
                        </div>
                        <p className="text-[#1E293B] leading-relaxed">
                          {c.diagnosticReasoning}
                        </p>
                      </div>

                      {/* Diagnóstico Diferencial */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 font-mono-exam font-bold text-[#0B1B3D] text-xs uppercase tracking-wider">
                          <Layers className="w-4 h-4 text-[#0B1B3D]" />
                          <span>Diagnósticos Diferenciales y Razones de Descarte</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {c.differentialDiagnosis.map((diff, dIdx) => (
                            <div key={dIdx} className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] space-y-1">
                              <span className="font-bold text-xs text-[#9E472A] block">{diff.condition}</span>
                              <p className="text-[11px] text-[#475569] leading-snug">{diff.rulingRationale}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Plan de Manejo y Terapéutica */}
                      <div className="space-y-2 bg-white p-4 rounded-xl border border-[#E5E3D8]">
                        <div className="flex items-center gap-2 font-mono-exam font-bold text-[#0B1B3D] text-xs uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4 text-[#1E7E34]" />
                          <span>Plan Terapéutico y Protocolo de Actuación</span>
                        </div>
                        <ol className="space-y-2 list-none">
                          {c.managementPlan.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#1E293B] leading-relaxed">
                              <span className="w-5 h-5 rounded-full bg-[#0B1B3D] text-white flex items-center justify-center font-mono-exam text-[10px] font-bold shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Perlas Clínicas del Caso */}
                      <div className="space-y-2 bg-[#1E7E34]/5 p-4 rounded-xl border border-[#1E7E34]/30">
                        <div className="flex items-center gap-2 font-mono-exam font-bold text-[#1E7E34] text-xs uppercase tracking-wider">
                          <Sparkles className="w-4 h-4 text-[#C59B27]" />
                          <span>Perlas Clínicas del Caso (Takeaways de Examen)</span>
                        </div>
                        <ul className="space-y-1.5">
                          {c.clinicalPearls.map((cp, cpIdx) => (
                            <li key={cpIdx} className="text-xs text-[#1E293B] flex items-start gap-2 leading-relaxed">
                              <span className="text-[#C59B27] font-bold">•</span>
                              <span>{cp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Referencia Oficial */}
                      <div className="text-[11px] font-mono-exam text-[#64748B] pt-2 border-t border-[#EAE8DD]">
                        <strong>Referencia Normativa:</strong> {c.officialProtocolRef}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: SIMULADOR ENAR INTERACTIVO */}
      {/* ========================================================================= */}
      {activeTabMode === 'simulator' && (
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
              {/* Temporizador en Modo Examen */}
              {isExamMode && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAF9F5] rounded-md border border-[#E5E3D8] font-mono-exam text-xs font-bold text-[#0B1B3D]">
                  <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>{formatTimer(examSeconds)}</span>
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="ml-1 text-[#64748B] hover:text-[#0B1B3D]"
                    title={isTimerRunning ? 'Pausar tiempo' : 'Reanudar tiempo'}
                  >
                    {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>
                </div>
              )}

              <button
                onClick={() => {
                  setIsExamMode(!isExamMode);
                  setExamSubmitted(false);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-1.5 ${
                  isExamMode
                    ? 'bg-[#C59B27] text-[#0B1B3D] shadow-xs'
                    : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isExamMode ? 'Modo Examen (Activo)' : 'Modo Tutor (Feedback Inmediato)'}</span>
              </button>

              <button
                onClick={handleResetExam}
                className="p-1.5 rounded-md text-[#64748B] hover:text-[#0B1B3D] hover:bg-[#FAF9F5] transition-colors"
                title="Reiniciar respuestas y cronómetro"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Barra de Progreso y Envío de Examen */}
          {isExamMode && !examSubmitted && (
            <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-exam font-bold text-[#0B1B3D]">
                  Progreso: {examStats.answered} de {examStats.total} respondidas
                </span>
                <div className="w-32 bg-[#E2E8F0] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#C59B27] h-2 transition-all duration-300"
                    style={{ width: `${examStats.total > 0 ? (examStats.answered / examStats.total) * 100 : 0}%` }}
                  />
                </div>
              </div>

              <button
                onClick={handleExamSubmit}
                disabled={examStats.answered === 0}
                className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] disabled:bg-[#94A3B8] text-white text-xs font-mono-exam font-bold rounded-lg cursor-pointer shadow-sm transition-all"
              >
                Finalizar y Calificar Examen
              </button>
            </div>
          )}

          {/* Tarjeta de Calificación y Certificación tras Enviar Examen */}
          {isExamMode && examSubmitted && (
            <div className="bg-white p-5 rounded-xl border-2 border-[#C59B27] shadow-corporate-card space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAE8DD] pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#C59B27]" />
                  <h4 className="font-editorial text-lg font-bold text-[#0B1B3D]">
                    Resultado Oficial del Simulador ENAR
                  </h4>
                </div>
                <span className="text-xs font-mono-exam font-bold text-[#64748B]">
                  Tiempo: {formatTimer(examSeconds)}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8]">
                  <span className="text-[10px] text-[#64748B] block">Calificación</span>
                  <span className="text-xl font-bold font-mono-exam text-[#0B1B3D]">{examStats.pct}%</span>
                </div>
                <div className="p-3 bg-[#1E7E34]/10 rounded-lg border border-[#1E7E34]/30">
                  <span className="text-[10px] text-[#1E7E34] block">Aciertos</span>
                  <span className="text-xl font-bold text-[#1E7E34]">{examStats.correct}</span>
                </div>
                <div className="p-3 bg-[#9E472A]/10 rounded-lg border border-[#9E472A]/30">
                  <span className="text-[10px] text-[#9E472A] block">Errores</span>
                  <span className="text-xl font-bold text-[#9E472A]">{examStats.answered - examStats.correct}</span>
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8]">
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
                        Viñeta Clínica {idx + 1} de {filteredQuestions.length}
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
                        <span className="text-[#64748B] font-semibold">{q.topic}</span>
                      </div>

                      {/* Explicación Médica Oficial */}
                      <div className="space-y-1">
                        <span className="font-mono-exam font-bold text-[#0B1B3D] block">
                          Fundamento Clínico y Fisiopatológico:
                        </span>
                        <p className="text-[#334155] leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>

                      {/* High-Yield Key Takeaway */}
                      <div className="p-3 bg-[#C59B27]/10 rounded-lg border border-[#C59B27]/40 text-[#0B1B3D] space-y-1">
                        <div className="flex items-center gap-1.5 font-mono-exam font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                          <span>Perla Clínica de Examen (High-Yield Takeaway):</span>
                        </div>
                        <p className="leading-snug text-[#1E293B]">
                          {q.keyTakeaway}
                        </p>
                      </div>

                      {/* Desglose de Errores en Distractores */}
                      <div className="space-y-1.5">
                        <span className="font-mono-exam font-bold text-[#475569] block">
                          ¿Por qué son incorrectas las otras opciones?
                        </span>
                        <div className="space-y-1">
                          {Object.entries(q.distractorRationale).map(([key, reason]) => (
                            <div key={key} className="flex items-start gap-2 text-[#475569] leading-tight">
                              <span className="font-mono-exam font-bold text-[#9E472A] shrink-0">Opción {key}:</span>
                              <span>{reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Referencia Oficial */}
                      <div className="pt-2 border-t border-[#EAE8DD] text-[11px] font-mono-exam text-[#64748B]">
                        <strong>Referencia Bibliográfica:</strong> {q.officialReference}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VISTA 4: CASOS SECUENCIALES RAMIFICADOS (SHOCK ROOM) */}
      {/* ========================================================================= */}
      {activeTabMode === 'branching_cases' && (
        <div className="space-y-6">
          {/* Selector de Caso Ramificado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BRANCHING_CLINICAL_CASES.map((sc, index) => {
              const isSelected = index === selectedCaseIndex;
              return (
                <button
                  key={sc.id}
                  onClick={() => handleSelectCase(index)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#0B1B3D] border-[#C59B27] text-white shadow-corporate-subtle ring-1 ring-[#C59B27]'
                      : 'bg-white border-[#E5E3D8] hover:bg-[#FAF9F5] text-[#334155]'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono-exam font-bold uppercase tracking-wider ${
                      isSelected ? 'text-[#C59B27]' : 'text-[#64748B]'
                    }`}>
                      {sc.specialty}
                    </span>
                    <h4 className={`text-xs sm:text-sm font-bold line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-[#0B1B3D]'
                    }`}>
                      {sc.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono-exam">
                    <span className={isSelected ? 'text-[#CBD5E1]' : 'text-[#64748B]'}>
                      {sc.stages.length} Etapas
                    </span>
                    {isSelected && (
                      <span className="text-[#C59B27] font-bold flex items-center gap-1">
                        Activo <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Monitor de Constantes Vitales en Tiempo Real */}
          <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-xl p-4 sm:p-5 text-white shadow-corporate-subtle space-y-3">
            <div className="flex items-center justify-between border-b border-[#1A2E5A] pb-2 text-xs font-mono-exam">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#9E472A] animate-pulse" />
                <span className="text-[#C59B27] font-bold uppercase">Monitor de Shock Room (Hospital Rosales / Bloom)</span>
              </div>
              <span className="text-[#94A3B8]">
                Etapa {currentStageIdx + 1} de {activeCase.stages.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              <div className="p-2.5 bg-[#07132B] rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] font-mono-exam block">Presión Arterial (PA)</span>
                <span className="text-base sm:text-lg font-bold font-mono-exam text-white">{currentVitals.bp}</span>
                <span className="text-[9px] text-[#64748B] block">mmHg</span>
              </div>
              <div className="p-2.5 bg-[#07132B] rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] font-mono-exam block">Frecuencia Cardíaca</span>
                <span className="text-base sm:text-lg font-bold font-mono-exam text-[#C59B27]">{currentVitals.hr}</span>
                <span className="text-[9px] text-[#64748B] block">lpm</span>
              </div>
              <div className="p-2.5 bg-[#07132B] rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] font-mono-exam block">Frecuencia Resp.</span>
                <span className="text-base sm:text-lg font-bold font-mono-exam text-white">{currentVitals.rr}</span>
                <span className="text-[9px] text-[#64748B] block">rpm</span>
              </div>
              <div className="p-2.5 bg-[#07132B] rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] font-mono-exam block">Saturación O₂</span>
                <span className={`text-base sm:text-lg font-bold font-mono-exam ${
                  currentVitals.spo2 < 92 ? 'text-[#9E472A]' : 'text-[#1E7E34]'
                }`}>
                  {currentVitals.spo2}%
                </span>
                <span className="text-[9px] text-[#64748B] block">Pulsoxímetro</span>
              </div>
              <div className="p-2.5 bg-[#07132B] rounded-lg border border-[#1E3A70]">
                <span className="text-[10px] text-[#94A3B8] font-mono-exam block">Temperatura</span>
                <span className="text-base sm:text-lg font-bold font-mono-exam text-[#C59B27]">{currentVitals.temp}</span>
                <span className="text-[9px] text-[#64748B] block">°C Axilar</span>
              </div>
              <div className="p-2.5 bg-[#07132B] rounded-lg border border-[#1E3A70] col-span-2 sm:col-span-1">
                <span className="text-[10px] text-[#94A3B8] font-mono-exam block">Glasgow (GCS)</span>
                <span className="text-base sm:text-lg font-bold font-mono-exam text-white">{currentVitals.glasgow || 15}</span>
                <span className="text-[9px] text-[#64748B] block">Puntos</span>
              </div>
            </div>
          </div>

          {/* Escenario Clínico y Decisiones Ramificadas */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-subtle p-5 sm:p-6 space-y-5">
            <div className="border-b border-[#EAE8DD] pb-3 flex items-center justify-between gap-2 flex-wrap">
              <div>
                <span className="text-xs font-mono-exam font-bold text-[#9E472A] uppercase">
                  {currentStage.stageTitle}
                </span>
                <h3 className="text-lg font-bold text-[#0B1B3D]">{activeCase.title}</h3>
              </div>
              <AudioSpeechButton
                id={`branching-speech-${activeCase.id}-${currentStage.id}`}
                textToSpeak={currentStage.narrative}
                label="Escuchar Situación"
              />
            </div>

            {/* Narrativa del Escenario */}
            <div className="p-4 bg-[#FAF9F5] rounded-lg border border-[#EAE8DD] text-sm text-[#1E293B] leading-relaxed">
              <p className="font-medium">{currentStage.narrative}</p>
            </div>

            {/* Opciones de Intervención / Decisiones */}
            {!caseFinished && (
              <div className="space-y-3">
                <span className="text-xs font-mono-exam font-bold text-[#475569] uppercase tracking-wider block">
                  Selecciona la conducta terapéutica o diagnóstica inmediata:
                </span>

                <div className="space-y-2">
                  {currentStage.options.map((opt, oIdx) => {
                    const isSelected = selectedDecisionId === opt.id;
                    let style = 'bg-white border-[#E5E3D8] hover:bg-[#FAF9F5] text-[#334155]';

                    if (selectedDecisionId) {
                      if (opt.isOptimal) {
                        style = 'bg-[#1E7E34]/10 border-[#1E7E34] text-[#1E7E34] font-semibold';
                      } else if (isSelected && !opt.isOptimal) {
                        style = 'bg-[#9E472A]/10 border-[#9E472A] text-[#9E472A]';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={selectedDecisionId !== null}
                        onClick={() => handleApplyDecision(opt.id)}
                        className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${style}`}
                      >
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center font-mono-exam text-xs font-bold shrink-0 ${
                          selectedDecisionId && opt.isOptimal
                            ? 'bg-[#1E7E34] text-white'
                            : selectedDecisionId && isSelected && !opt.isOptimal
                            ? 'bg-[#9E472A] text-white'
                            : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="flex-1 leading-snug">{opt.action}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Consecuencia y Feedback de la Decisión Tomada */}
            {chosenDecision && (
              <div className={`p-4 rounded-xl border text-xs space-y-3 ${
                chosenDecision.isOptimal
                  ? 'bg-[#1E7E34]/10 border-[#1E7E34]/40 text-[#1E7E34]'
                  : 'bg-[#9E472A]/10 border-[#9E472A]/40 text-[#9E472A]'
              }`}>
                <div className="flex items-center gap-2 font-mono-exam font-bold">
                  {chosenDecision.isOptimal ? (
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Conducta Óptima Protocolizada</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Conducta Subóptima o Iatrogénica Registrada</span>
                    </div>
                  )}
                </div>

                <p className="text-[#1E293B] leading-relaxed">
                  {chosenDecision.consequenceText}
                </p>

                <div className="p-3 bg-white rounded-lg border border-[#E5E3D8] text-[#1E293B] space-y-1">
                  <div className="flex items-center gap-1 text-[#C59B27] font-mono-exam font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Perla de Práctica Clínica:</span>
                  </div>
                  <p className="leading-snug">{chosenDecision.learningPoint}</p>
                </div>

                <div className="text-[11px] font-mono-exam text-[#64748B]">
                  <strong>Normativa Oficial:</strong> {chosenDecision.minsalProtocolRef}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleAdvanceStage}
                    className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-white text-xs font-mono-exam font-bold rounded-lg cursor-pointer flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>{currentStageIdx + 1 < activeCase.stages.length ? 'Avanzar a la Siguiente Etapa' : 'Ver Resumen Final del Caso'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  </button>
                </div>
              </div>
            )}

            {/* Resumen Final del Caso Concluido */}
            {caseFinished && (
              <div className="p-5 bg-[#FAF9F5] rounded-xl border-2 border-[#C59B27] space-y-4">
                <div className="flex items-center gap-2 text-[#0B1B3D]">
                  <Award className="w-5 h-5 text-[#C59B27]" />
                  <h4 className="font-editorial text-base sm:text-lg font-bold">
                    Caso Clínico Ramificado Finalizado con Éxito
                  </h4>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm text-[#334155] leading-relaxed bg-white p-4 rounded-lg border border-[#E5E3D8]">
                  <p><strong>Diagnóstico Central:</strong> {activeCase.debriefSummary.coreDiagnosis}</p>
                  <p><strong>Protocolo Estándar de Oro:</strong> {activeCase.debriefSummary.goldStandardProtocol}</p>
                  <p><strong>Normativa Oficial MINSAL:</strong> {activeCase.debriefSummary.officialMinsalNorm}</p>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={handleRestartCase}
                    className="px-3.5 py-2 bg-white hover:bg-[#FAF9F5] text-[#0B1B3D] text-xs font-mono-exam font-bold rounded-lg border border-[#E5E3D8] flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Reiniciar este caso</span>
                  </button>

                  <button
                    onClick={() => {
                      const nextIdx = (selectedCaseIndex + 1) % BRANCHING_CLINICAL_CASES.length;
                      handleSelectCase(nextIdx);
                    }}
                    className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-white text-xs font-mono-exam font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Pasar al Siguiente Caso</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal de Certificado Oficial */}
      {isCertModalOpen && issuedCert && (
        <CertificateModal
          certificate={issuedCert}
          isOpen={isCertModalOpen}
          onClose={() => setIsCertModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ResidentadoMedicoView;

