import React, { useState, useEffect, useRef } from 'react';
import {
  Scale,
  Gavel,
  CheckCircle2,
  XCircle,
  Clock,
  BookOpen,
  ArrowRight,
  RotateCcw,
  FolderOpen,
  Volume2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Layers,
  ShieldCheck,
  Award,
  FileText,
  UserCheck,
} from 'lucide-react';
import {
  COURTROOM_DRILLS,
  CourtroomDrillItem,
  OBJECTION_DEFINITIONS,
  ObjectionType,
  ORAL_LITIGATION_THEMATIC_UNITS,
  OralLitigationThematicUnit,
  OralLitigationSolvedCase,
} from '../data/oralLitigationData';
import { logQuestionError } from '../services/errorLogService';

interface OralLitigationSimulatorViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

export const OralLitigationSimulatorView: React.FC<OralLitigationSimulatorViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
  // Navigation Modes: 'thematic-units' | 'drills' | 'objections'
  const [activeTab, setActiveTab] = useState<'thematic-units' | 'drills' | 'objections'>('thematic-units');

  // Thematic Units State
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit-oral-01');
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>('case-u1-01');

  // Drills State (Preserved)
  const [currentDrillIndex, setCurrentDrillIndex] = useState<number>(0);
  const [drillScore, setDrillScore] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });
  const [isAnswering, setIsAnswering] = useState<boolean>(true);
  const [selectedObjection, setSelectedObjection] = useState<ObjectionType | null>(null);
  const [showObjectionSelector, setShowObjectionSelector] = useState<boolean>(false);
  const [userTimedOut, setUserTimedOut] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(5.0);
  const [isManualPause, setIsManualPause] = useState<boolean>(false);
  const [showReferenceGuide, setShowReferenceGuide] = useState<boolean>(false);

  const activeDrill: CourtroomDrillItem = COURTROOM_DRILLS[currentDrillIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeUnit: OralLitigationThematicUnit =
    ORAL_LITIGATION_THEMATIC_UNITS.find((u) => u.id === selectedUnitId) ||
    ORAL_LITIGATION_THEMATIC_UNITS[0];

  // Countdown timer for rapid response drills
  useEffect(() => {
    if (activeTab !== 'drills') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    if (!isAnswering || showObjectionSelector || isManualPause) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setCountdown(5.0);
    setUserTimedOut(false);

    const interval = 100; // 100ms ticks
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0.1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeExpired();
          return 0;
        }
        return parseFloat((prev - 0.1).toFixed(1));
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTab, currentDrillIndex, isAnswering, showObjectionSelector, isManualPause]);

  const handleTimeExpired = () => {
    setUserTimedOut(true);
    setIsAnswering(false);

    if (activeDrill.correctObjection !== 'VALIDA') {
      setDrillScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
      logQuestionError({
        questionId: `oral-drill-${activeDrill.id}`,
        questionText: `[${activeDrill.tribunal} • ${activeDrill.phase}] "${activeDrill.questionUttered}"`,
        categoryKey: 'Litigación Oral Penal • PrPn El Salvador',
        selectedAnswer: 'Tiempo agotado (No se interpuso objeción a tiempo)',
        correctAnswer: `Objeción: ${OBJECTION_DEFINITIONS[activeDrill.correctObjection].label} (${OBJECTION_DEFINITIONS[activeDrill.correctObjection].legalBasis})`,
        options: Object.fromEntries(
          Object.entries(OBJECTION_DEFINITIONS).map(([k, v]) => [k, `${v.label} (${v.legalBasis})`])
        ),
        explanation: `${activeDrill.judicialRationale}\nJurisprudencia: ${activeDrill.salvadoranJurisprudence}`,
      });
      if (showToast) {
        showToast('Tiempo agotado. La objeción extemporánea precluyó.');
      }
    } else {
      setDrillScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
      if (showToast) {
        showToast('Pregunta válida consentida adecuadamente.');
      }
    }
  };

  const handleTriggerObjection = () => {
    if (!isAnswering) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setShowObjectionSelector(true);
  };

  const handleAllowQuestion = () => {
    if (!isAnswering) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setIsAnswering(false);
    setSelectedObjection('VALIDA');

    const isCorrect = activeDrill.correctObjection === 'VALIDA';
    if (isCorrect) {
      setDrillScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
      if (showToast) showToast('¡Correcto! Pregunta permitida conforme a derecho.');
    } else {
      setDrillScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
      logQuestionError({
        questionId: `oral-drill-${activeDrill.id}`,
        questionText: `[${activeDrill.tribunal} • ${activeDrill.phase}] "${activeDrill.questionUttered}"`,
        categoryKey: 'Litigación Oral Penal • PrPn El Salvador',
        selectedAnswer: 'No objetar / Permitir pregunta',
        correctAnswer: `Objeción: ${OBJECTION_DEFINITIONS[activeDrill.correctObjection].label} (${OBJECTION_DEFINITIONS[activeDrill.correctObjection].legalBasis})`,
        options: Object.fromEntries(
          Object.entries(OBJECTION_DEFINITIONS).map(([k, v]) => [k, `${v.label} (${v.legalBasis})`])
        ),
        explanation: `${activeDrill.judicialRationale}\nJurisprudencia: ${activeDrill.salvadoranJurisprudence}`,
      });
      if (showToast) showToast('Error: Se consintió una pregunta indebida.');
    }
  };

  const handleSelectObjectionType = (type: ObjectionType) => {
    setShowObjectionSelector(false);
    setIsAnswering(false);
    setSelectedObjection(type);

    const isCorrect = activeDrill.correctObjection === type;
    if (isCorrect) {
      setDrillScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
      if (showToast) showToast('¡Ha lugar a la objeción! Fundamentación procesal impecable.');
    } else {
      setDrillScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
      logQuestionError({
        questionId: `oral-drill-${activeDrill.id}`,
        questionText: `[${activeDrill.tribunal} • ${activeDrill.phase}] "${activeDrill.questionUttered}"`,
        categoryKey: 'Litigación Oral Penal • PrPn El Salvador',
        selectedAnswer: `Objeción: ${OBJECTION_DEFINITIONS[type].label}`,
        correctAnswer: `Objeción: ${OBJECTION_DEFINITIONS[activeDrill.correctObjection].label} (${OBJECTION_DEFINITIONS[activeDrill.correctObjection].legalBasis})`,
        options: Object.fromEntries(
          Object.entries(OBJECTION_DEFINITIONS).map(([k, v]) => [k, `${v.label} (${v.legalBasis})`])
        ),
        explanation: `${activeDrill.judicialRationale}\nJurisprudencia: ${activeDrill.salvadoranJurisprudence}`,
      });
      if (showToast) showToast('Objeción infundada: No ha lugar.');
    }
  };

  const handleNextDrill = () => {
    if (currentDrillIndex + 1 < COURTROOM_DRILLS.length) {
      setCurrentDrillIndex((prev) => prev + 1);
      setIsAnswering(true);
      setSelectedObjection(null);
      setShowObjectionSelector(false);
      setUserTimedOut(false);
    } else {
      if (showToast) showToast('¡Taller de Reacción Rápida completado exitosamente!');
    }
  };

  const handleRestartDrill = () => {
    setCurrentDrillIndex(0);
    setDrillScore({ correct: 0, incorrect: 0 });
    setIsAnswering(true);
    setSelectedObjection(null);
    setShowObjectionSelector(false);
    setUserTimedOut(false);
  };

  const isUserCorrect =
    !userTimedOut && selectedObjection === activeDrill.correctObjection;

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in p-2 sm:p-4">
      {/* Encabezado Institucional y Banner de la Corte Suprema */}
      <div className="bg-[#0B1B3D] rounded-2xl p-6 sm:p-8 text-[#FAF9F5] shadow-corporate border border-[#1E3A70] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-[#C59B27]/15 to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-exam uppercase tracking-wider text-[#C59B27]">
            <Scale className="w-4 h-4 text-[#C59B27]" />
            <span>Tribunales de Sentencia & Sala de lo Penal de la CSJ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Simulador de Litigación Oral Penal & Audiencias de Vista Pública
          </h2>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-4xl">
            Programa integral de destrezas forenses bajo el Código Procesal Penal de El Salvador (Arts. 209-212, 380-399 PrPn).
            Estudia las <strong>5 Unidades Temáticas Rectoras</strong> con más de 3,000 palabras de doctrina procesal, analiza los <strong>25 Casos Reales Resueltos Paso a Paso</strong> con transcripciones de audiencia, o ponte a prueba en el <strong>Simulador de Reacción Rápida con Temporizador</strong>.
          </p>

          {/* Selector de Pestañas Principales */}
          <div className="pt-4 flex items-center gap-2 flex-wrap text-xs font-mono-exam">
            <button
              onClick={() => setActiveTab('thematic-units')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                activeTab === 'thematic-units'
                  ? 'bg-[#C59B27] text-[#07132B] border-[#C59B27] shadow-md'
                  : 'bg-[#07132B] text-[#CBD5E1] border-[#1E3A70] hover:bg-[#132A5C]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>5 Unidades Temáticas & 25 Casos Resueltos</span>
            </button>

            <button
              onClick={() => setActiveTab('drills')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                activeTab === 'drills'
                  ? 'bg-[#C59B27] text-[#07132B] border-[#C59B27] shadow-md'
                  : 'bg-[#07132B] text-[#CBD5E1] border-[#1E3A70] hover:bg-[#132A5C]'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Simulador en Vivo (10 Drills con Temporizador)</span>
            </button>

            <button
              onClick={() => setActiveTab('objections')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                activeTab === 'objections'
                  ? 'bg-[#C59B27] text-[#07132B] border-[#C59B27] shadow-md'
                  : 'bg-[#07132B] text-[#CBD5E1] border-[#1E3A70] hover:bg-[#132A5C]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Régimen Taxativo de Objeciones (Arts. 209-212)</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* VISTA 1: 5 UNIDADES TEMÁTICAS & 25 CASOS RESUELTOS                    */}
      {/* ==================================================================== */}
      {activeTab === 'thematic-units' && (
        <div className="space-y-6 animate-fade-in">
          {/* Selector de Unidades */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono-exam text-xs">
            {ORAL_LITIGATION_THEMATIC_UNITS.map((unit) => {
              const isSelected = unit.id === selectedUnitId;
              return (
                <button
                  key={unit.id}
                  onClick={() => {
                    setSelectedUnitId(unit.id);
                    setExpandedCaseId(unit.solvedCases[0]?.id || null);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                    isSelected
                      ? 'bg-white border-[#C59B27] shadow-md ring-2 ring-[#C59B27]/30'
                      : 'bg-[#FAF9F5] hover:bg-white border-[#E5E3D8] text-[#475569]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#0B1B3D]">Unidad {unit.unitNumber}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0B1B3D] text-[#C59B27] font-bold">
                      5 Casos
                    </span>
                  </div>
                  <p className="font-sans-ui text-[11px] font-semibold text-[#1E293B] line-clamp-2">
                    {unit.title.replace(/^Unidad \d+:\s*/, '')}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Contenido de la Unidad Seleccionada */}
          <div className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card p-6 sm:p-8 space-y-6">
            <div className="space-y-2 border-b border-[#EAE8DD] pb-5">
              <div className="flex items-center gap-2 text-xs font-mono-exam text-[#C59B27] font-bold">
                <Gavel className="w-4 h-4 text-[#C59B27]" />
                <span>UNIDAD DE ESTUDIO Nº {activeUnit.unitNumber}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#0B1B3D]">
                {activeUnit.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-sans-ui leading-relaxed">
                {activeUnit.subtitle}
              </p>

              {/* Marco Normativo Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {activeUnit.legalFramework.map((framework, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono-exam bg-[#FAF9F5] border border-[#E5E3D8] text-[#1E3A70]"
                  >
                    <BookOpen className="w-3 h-3 text-[#C59B27]" />
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* Teoría Sustantiva (>= 500 palabras) */}
            <div className="space-y-3">
              <h4 className="font-editorial text-lg font-bold text-[#0B1B3D] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C59B27]" />
                Fundamentación Doctrinal & Código Procesal Penal
              </h4>

              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#EAE8DD] text-xs sm:text-sm text-[#334155] leading-relaxed space-y-3 whitespace-pre-line font-sans-ui">
                {activeUnit.substantiveTheory}
              </div>
            </div>

            {/* Técnicas Procesales Clave */}
            <div className="space-y-3">
              <h4 className="font-editorial text-lg font-bold text-[#0B1B3D] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1E7E34]" />
                Técnicas Procesales Cardinales de la Unidad
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeUnit.proceduralTechniques.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-[#E5E3D8] bg-white flex items-start gap-2.5 text-xs text-[#1E293B]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1E7E34] shrink-0 mt-0.5" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Banco de 5 Casos Resueltos Paso a Paso */}
            <div className="space-y-4 pt-4 border-t border-[#EAE8DD]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#0B1B3D] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#C59B27]" />
                    Casos de Audiencia Resueltos Paso a Paso (5 Incidentes)
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Exámenes, diálogos procesales, incidentes de objeción y fundamentos judiciales de El Salvador.
                  </p>
                </div>
                <span className="text-xs font-mono-exam font-bold text-[#0B1B3D] bg-[#FAF9F5] px-3 py-1.5 rounded-md border border-[#E5E3D8]">
                  5 Casos Disponibles
                </span>
              </div>

              <div className="space-y-3">
                {activeUnit.solvedCases.map((solvedCase) => {
                  const isExpanded = expandedCaseId === solvedCase.id;
                  return (
                    <div
                      key={solvedCase.id}
                      className="rounded-xl border border-[#E5E3D8] bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => setExpandedCaseId(isExpanded ? null : solvedCase.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono-exam text-xs font-bold text-[#0B1B3D] bg-[#0B1B3D]/10 px-2 py-0.5 rounded">
                              Caso #{solvedCase.caseNumber}
                            </span>
                            <span className="text-xs font-mono-exam text-[#C59B27] font-semibold">
                              {solvedCase.tribunal}
                            </span>
                            <span className="text-[10px] font-mono-exam text-[#64748B]">
                              • {solvedCase.proceduralPhase}
                            </span>
                          </div>
                          <h5 className="font-editorial text-base font-bold text-[#0B1B3D]">
                            {solvedCase.title}
                          </h5>
                          <span className="text-xs text-[#1E7E34] font-medium block">
                            Delito: {solvedCase.crimeCharge}
                          </span>
                        </div>
                        <div className="shrink-0 text-[#C59B27]">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-5 border-t border-[#EAE8DD] bg-[#FAF9F5]/40 space-y-4 text-xs animate-fade-in">
                          {/* Contexto Fáctico */}
                          <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] space-y-1">
                            <span className="font-mono-exam font-bold text-[#0B1B3D] block text-[11px]">
                              SITUACIÓN PROCESAL EN SALA:
                            </span>
                            <p className="text-[#334155] leading-relaxed">
                              {solvedCase.scenarioDescription}
                            </p>
                          </div>

                          {/* Transcripción del Diálogo en Audiencia */}
                          <div className="space-y-2">
                            <span className="font-mono-exam font-bold text-[#0B1B3D] text-[11px] flex items-center gap-1.5">
                              <MessageSquare className="w-3.5 h-3.5 text-[#C59B27]" />
                              TRANSCRIPCIÓN DEL DEBATE FORENSE EN ESTRADOS:
                            </span>
                            <div className="space-y-2">
                              {solvedCase.dialogueIncident.dialogue.map((turn, tIdx) => {
                                const isJudge = turn.speaker === 'Juez';
                                const isFiscal = turn.speaker === 'Fiscal';
                                const isDefensa = turn.speaker === 'Defensa';
                                return (
                                  <div
                                    key={tIdx}
                                    className={`p-3 rounded-lg border leading-relaxed ${
                                      isJudge
                                        ? 'bg-[#0B1B3D] text-[#FAF9F5] border-[#1E3A70]'
                                        : isFiscal
                                        ? 'bg-blue-50/70 text-blue-950 border-blue-200'
                                        : isDefensa
                                        ? 'bg-amber-50/70 text-amber-950 border-amber-200'
                                        : 'bg-white text-slate-800 border-slate-200'
                                    }`}
                                  >
                                    <span className="font-mono-exam font-bold block text-[10px] uppercase tracking-wider mb-0.5">
                                      {turn.speaker}:
                                    </span>
                                    <p className="italic text-xs">"{turn.text}"</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Incidente de Objeción y Veredicto Judicial */}
                          <div className="p-4 rounded-xl border border-[#C59B27]/30 bg-white space-y-3">
                            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#EAE8DD] pb-2">
                              <span className="font-mono-exam text-xs font-bold text-[#9E472A] flex items-center gap-1.5">
                                <Gavel className="w-4 h-4" />
                                {solvedCase.dialogueIncident.objectionRaised}
                              </span>
                              <span className="px-2.5 py-1 rounded bg-[#0B1B3D] text-[#C59B27] font-mono-exam font-bold text-[11px]">
                                Dictamen: {solvedCase.dialogueIncident.judgeRuling}
                              </span>
                            </div>

                            <div className="space-y-1">
                              <span className="font-mono-exam font-bold text-[#0B1B3D] text-[11px] block">
                                FUNDAMENTO JURÍDICO JUDICIAL:
                              </span>
                              <p className="text-[#475569] leading-relaxed">
                                {solvedCase.dialogueIncident.judicialRationale}
                              </p>
                            </div>
                          </div>

                          {/* Consejo Estratégico / Clave Pedagógica */}
                          <div className="p-3.5 rounded-lg bg-[#1E7E34]/10 border border-[#1E7E34]/30 text-[#1E7E34] space-y-1">
                            <span className="font-mono-exam font-bold text-[11px] block flex items-center gap-1.5">
                              <UserCheck className="w-4 h-4" />
                              REGLA DE ORO DE LITIGACIÓN EN SALVADOR:
                            </span>
                            <p className="text-xs text-[#064E3B] font-sans-ui">
                              {solvedCase.pedagogicalKeyTakeaway}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* VISTA 2: SIMULADOR DE REACCIÓN RÁPIDA (10 DRILLS EN VIVO)             */}
      {/* ==================================================================== */}
      {activeTab === 'drills' && (
        <div className="space-y-5 animate-fade-in">
          {/* Marcador y Barra de Control */}
          <div className="flex items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex-wrap">
            <div className="flex items-center gap-3 font-mono-exam text-xs">
              <span className="font-bold text-[#0B1B3D] bg-[#FAF9F5] px-2.5 py-1 rounded border border-[#E5E3D8]">
                Ejercicio {currentDrillIndex + 1} de {COURTROOM_DRILLS.length}
              </span>
              <span className="text-[#1E7E34] font-bold">Aciertos: {drillScore.correct}</span>
              <span className="text-[#9E472A] font-bold">Fallos: {drillScore.incorrect}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowReferenceGuide(!showReferenceGuide)}
                className="px-3 py-1.5 rounded-md text-xs font-bold bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] border border-[#E5E3D8] transition-all cursor-pointer font-mono-exam flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{showReferenceGuide ? 'Ocultar Código' : 'Guía de Objeciones (PrPn)'}</span>
              </button>

              {onOpenErrorNotebook && (
                <button
                  onClick={onOpenErrorNotebook}
                  className="px-3 py-1.5 rounded-md text-xs font-bold bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] transition-all cursor-pointer font-mono-exam flex items-center gap-1.5 shadow-xs"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span className="hidden sm:inline">Cuaderno de Errores</span>
                </button>
              )}
            </div>
          </div>

          {/* Guía Rápida Opcional */}
          {showReferenceGuide && (
            <div className="bg-[#FAF9F5] rounded-xl border border-[#C59B27]/40 p-5 space-y-4 shadow-corporate-subtle animate-fade-in text-xs">
              <h4 className="font-editorial text-sm font-bold text-[#111625] flex items-center gap-2 border-b border-[#EAE8DD] pb-2">
                <Scale className="w-4 h-4 text-[#C59B27]" />
                Catálogo Normativo de Objeciones en el Proceso Penal Salvadoreño
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-exam">
                {Object.values(OBJECTION_DEFINITIONS).map((def) => (
                  <div key={def.type} className="p-3 bg-white rounded-lg border border-[#E5E3D8] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#0B1B3D]">{def.label}</span>
                      <span className="text-[10px] text-[#C59B27] font-semibold">{def.legalBasis}</span>
                    </div>
                    <p className="text-[11px] text-[#475569] font-sans-ui">{def.description}</p>
                    <span className="text-[10px] text-[#64748B] block pt-1 border-t border-slate-100">
                      {def.whenAllowed}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sala de Audiencia Activa */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-card overflow-hidden">
            <div className="bg-[#FAF9F5] p-4 border-b border-[#EAE8DD] flex items-center justify-between flex-wrap gap-2 text-xs font-mono-exam">
              <div>
                <span className="text-[#64748B] block text-[10px]">SEDE JUDICIAL</span>
                <span className="font-bold text-[#0B1B3D]">{activeDrill.tribunal}</span>
              </div>
              <div className="text-right">
                <span className="text-[#64748B] block text-[10px]">TIPO DE PROCESO</span>
                <span className="font-bold text-[#C59B27]">{activeDrill.caseTitle}</span>
              </div>
            </div>

            <div className="p-5 sm:p-7 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono-exam">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0B1B3D] text-[#FAF9F5]">
                  <span>Fase: {activeDrill.phase}</span>
                </div>
                <div className="text-[#64748B]">
                  Interroga: <strong className="text-[#111625]">{activeDrill.interrogator}</strong> • Declara:{' '}
                  <strong className="text-[#111625]">{activeDrill.witnessRole}</strong>
                </div>
              </div>

              <div className="text-xs text-[#475569] bg-[#FAF9F5] p-3.5 rounded-lg border border-[#EAE8DD] leading-relaxed">
                <span className="font-mono-exam font-bold text-[#0B1B3D] block mb-0.5">CONTEXTO EN SALA:</span>
                {activeDrill.contextNarrative}
              </div>

              <div className="relative pl-4 border-l-4 border-[#C59B27] py-2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-exam font-bold text-[#0B1B3D]">
                  <Volume2 className="w-4 h-4 text-[#C59B27]" />
                  <span>{activeDrill.interrogator} formula al declarante:</span>
                </div>
                <p className="font-editorial text-lg sm:text-xl font-bold text-[#111625] leading-relaxed italic">
                  "{activeDrill.questionUttered}"
                </p>
              </div>

              {/* Cuenta Regresiva */}
              {isAnswering && !showObjectionSelector && (
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono-exam">
                    <span className="text-[#64748B] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#9E472A] animate-pulse" />
                      Ventana de Reacción para Objetar:
                    </span>
                    <span className={`font-bold ${countdown <= 2.0 ? 'text-[#9E472A]' : 'text-[#0B1B3D]'}`}>
                      {countdown.toFixed(1)} segundos
                    </span>
                  </div>
                  <div className="w-full bg-[#EAE8DD] h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-100 ${
                        countdown <= 2.0 ? 'bg-[#9E472A]' : 'bg-[#C59B27]'
                      }`}
                      style={{ width: `${(countdown / 5.0) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Botones de Acción */}
              {isAnswering && !showObjectionSelector && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <button
                    type="button"
                    onClick={handleTriggerObjection}
                    className="p-4 bg-[#9E472A] hover:bg-[#833820] text-white rounded-xl font-mono-exam font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-corporate-subtle transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Gavel className="w-5 h-5" />
                    <span>¡OBJECIÓN, SU SEÑORÍA!</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleAllowQuestion}
                    className="p-4 bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] border border-[#E5E3D8] hover:border-[#0B1B3D] rounded-xl font-mono-exam font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1E7E34]" />
                    <span>Permitir Pregunta (No Objetar)</span>
                  </button>
                </div>
              )}

              {/* Selector de Objeciones */}
              {showObjectionSelector && (
                <div className="space-y-4 pt-2 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-[#EAE8DD] pb-2">
                    <span className="font-mono-exam text-xs font-bold text-[#0B1B3D] uppercase tracking-wider flex items-center gap-1.5">
                      <Gavel className="w-4 h-4 text-[#C59B27]" />
                      Fundamente el motivo de su objeción ante el Tribunal:
                    </span>
                    <span className="text-[11px] font-mono-exam text-[#64748B]">Tiempo congelado</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(Object.keys(OBJECTION_DEFINITIONS) as ObjectionType[])
                      .filter((k) => k !== 'VALIDA')
                      .map((typeKey) => {
                        const def = OBJECTION_DEFINITIONS[typeKey];
                        return (
                          <button
                            key={typeKey}
                            type="button"
                            onClick={() => handleSelectObjectionType(typeKey)}
                            className="p-3 text-left bg-white hover:bg-[#FAF9F5] border border-[#E5E3D8] hover:border-[#0B1B3D] rounded-lg transition-all cursor-pointer space-y-1 shadow-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono-exam text-xs font-bold text-[#0B1B3D]">{def.label}</span>
                              <span className="text-[10px] font-mono-exam text-[#C59B27]">{def.legalBasis}</span>
                            </div>
                            <p className="text-[11px] text-[#475569] line-clamp-1">{def.description}</p>
                          </button>
                        );
                      })}
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        setShowObjectionSelector(false);
                        setIsAnswering(true);
                      }}
                      className="text-xs font-mono-exam text-[#64748B] hover:text-[#111625] cursor-pointer"
                    >
                      Cancelar y reanudar tiempo
                    </button>
                  </div>
                </div>
              )}

              {/* Veredicto Judicial */}
              {!isAnswering && (
                <div className="space-y-4 pt-2 animate-fade-in">
                  <div
                    className={`p-5 rounded-xl border-2 space-y-3 shadow-corporate-subtle ${
                      isUserCorrect
                        ? 'bg-[#FAF9F5] border-[#1E7E34]'
                        : 'bg-[#FAF9F5] border-[#9E472A]'
                    }`}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#EAE8DD] pb-3">
                      <div className="flex items-center gap-2">
                        <Gavel className={`w-5 h-5 ${isUserCorrect ? 'text-[#1E7E34]' : 'text-[#9E472A]'}`} />
                        <h4 className="font-editorial text-lg font-bold text-[#111625]">
                          Resolución del Juez Presidente:
                        </h4>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-md text-xs font-mono-exam font-bold uppercase ${
                          activeDrill.judgeRuling === 'HA LUGAR'
                            ? 'bg-[#1E7E34] text-white'
                            : 'bg-[#0B1B3D] text-[#C59B27]'
                        }`}
                      >
                        Dictamen: ¡{activeDrill.judgeRuling}!
                      </span>
                    </div>

                    <div className="text-xs font-mono-exam">
                      {userTimedOut && activeDrill.correctObjection !== 'VALIDA' ? (
                        <span className="text-[#9E472A] font-bold">
                          Extemporáneo: No se objetó a tiempo. El testigo respondió y la prueba quedó incorporada.
                        </span>
                      ) : isUserCorrect ? (
                        <span className="text-[#1E7E34] font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          Intervención procesal correcta y oportuna.
                        </span>
                      ) : (
                        <span className="text-[#9E472A] font-bold flex items-center gap-1.5">
                          <XCircle className="w-4 h-4" />
                          Criterio desacertado: El motivo correspondía a:{' '}
                          {OBJECTION_DEFINITIONS[activeDrill.correctObjection].label} ({OBJECTION_DEFINITIONS[activeDrill.correctObjection].legalBasis})
                        </span>
                      )}
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-[#E5E3D8] space-y-2 text-xs">
                      <span className="font-mono-exam font-bold text-[#0B1B3D] block">
                        ANÁLISIS PROCESAL (ARTS. 209-212 PRPN):
                      </span>
                      <p className="text-[#334155] leading-relaxed">
                        {activeDrill.judicialRationale}
                      </p>
                    </div>

                    <div className="bg-[#0B1B3D]/5 p-3 rounded-lg border border-[#0B1B3D]/20 space-y-1 text-xs">
                      <span className="font-mono-exam font-bold text-[#0B1B3D] text-[11px] block">
                        CRITERIO JURISPRUDENCIAL SALVADOREÑO:
                      </span>
                      <p className="text-[#475569] italic">
                        {activeDrill.salvadoranJurisprudence}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handleRestartDrill}
                      className="px-4 py-2 bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] border border-[#E5E3D8] text-xs font-mono-exam font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reiniciar Taller</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextDrill}
                      className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-mono-exam font-bold rounded-lg flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>
                        {currentDrillIndex + 1 < COURTROOM_DRILLS.length ? 'Siguiente Escenario Oral' : 'Finalizar Taller'}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* VISTA 3: CATÁLOGO DE OBJECIONES (ARTS. 209-212 PRPN)                 */}
      {/* ==================================================================== */}
      {activeTab === 'objections' && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white p-6 rounded-2xl border border-[#E5E3D8] shadow-corporate-card space-y-4">
            <div className="border-b border-[#EAE8DD] pb-3">
              <h3 className="font-editorial text-xl font-bold text-[#0B1B3D] flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#C59B27]" />
                Régimen Taxativo de Preguntas Objetables en El Salvador
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Conforme a los Arts. 209, 210, 211 y 212 del Código Procesal Penal (D.L. 733) y jurisprudencia de Casación Penal CSJ.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.values(OBJECTION_DEFINITIONS).map((def) => (
                <div
                  key={def.type}
                  className="p-4 rounded-xl border border-[#E5E3D8] bg-[#FAF9F5] space-y-2 hover:border-[#C59B27] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-base font-bold text-[#0B1B3D]">
                      {def.label}
                    </span>
                    <span className="text-[11px] font-mono-exam font-bold text-[#C59B27] bg-[#0B1B3D] px-2 py-0.5 rounded">
                      {def.legalBasis}
                    </span>
                  </div>
                  <p className="text-xs text-[#334155] leading-relaxed font-sans-ui">
                    {def.description}
                  </p>
                  <div className="pt-2 border-t border-[#EAE8DD] text-[11px] font-mono-exam text-[#1E3A70]">
                    <strong>Régimen de Admisibilidad:</strong> {def.whenAllowed}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OralLitigationSimulatorView;
