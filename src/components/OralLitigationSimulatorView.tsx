import React, { useState, useEffect, useRef } from 'react';
import {
  Scale,
  Gavel,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  BookOpen,
  ArrowRight,
  RotateCcw,
  AlertTriangle,
  FolderOpen,
  Volume2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  COURTROOM_DRILLS,
  CourtroomDrillItem,
  OBJECTION_DEFINITIONS,
  ObjectionType,
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

  // Countdown timer for rapid response
  useEffect(() => {
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
  }, [currentDrillIndex, isAnswering, showObjectionSelector, isManualPause]);

  const handleTimeExpired = () => {
    setUserTimedOut(true);
    setIsAnswering(false);

    // If the question was objectionable and user ran out of time, that's an error
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
      // If it was valid, letting time expire is acceptable
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
      if (showToast) showToast('¡No ha lugar! Motivo de objeción erróneo.');
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
      if (showToast) showToast('¡Taller de Litigación Oral completado con éxito!');
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
    !isAnswering &&
    ((selectedObjection === activeDrill.correctObjection) ||
      (userTimedOut && activeDrill.correctObjection === 'VALIDA'));

  return (
    <div className="space-y-6 max-w-4xl mx-auto font-sans-ui text-[#111625]">
      {/* Banner Principal Institucional */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#132A5C] text-[#C59B27] text-xs font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30">
            <Scale className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Litigación Oral Penal • Código Procesal Penal de El Salvador</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Simulador de Objeciones en Audiencia de Vista Pública
          </h2>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-3xl">
            Entrena tu capacidad de reacción procesal en tiempo real. Interpón <strong>objeciones orales inmediatas</strong> antes de que el testigo responda, fundamentando con los <strong>Arts. 209 al 212 del Código Procesal Penal</strong> y jurisprudencia vinculante de la Sala de lo Penal de la Corte Suprema de Justicia.
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap text-xs font-mono-exam">
            <div className="bg-[#07132B] px-3 py-1.5 rounded-md border border-[#C59B27]/30 text-[#C59B27] flex items-center gap-1.5">
              <Gavel className="w-4 h-4" />
              <span>Interrogatorio Directo & Contrainterrogatorio</span>
            </div>
            <div className="bg-[#07132B] px-3 py-1.5 rounded-md border border-[#1E3A70] text-[#94A3B8] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#1E7E34]" />
              <span>Arts. 209-212 PrPn & Casación CSJ</span>
            </div>
          </div>
        </div>
      </div>

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

      {/* Guía Rápida de Tipos de Objeción (Acordeón Opcional) */}
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

      {/* Sala de Audiencia / Escenario Activo */}
      <div className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-card overflow-hidden">
        {/* Cabecera del Tribunal */}
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
          {/* Fila Informativa de la Fase Procesal */}
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono-exam">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0B1B3D] text-[#FAF9F5]">
              <span>Fase: {activeDrill.phase}</span>
            </div>
            <div className="text-[#64748B]">
              Interroga: <strong className="text-[#111625]">{activeDrill.interrogator}</strong> • Declara: <strong className="text-[#111625]">{activeDrill.witnessRole}</strong>
            </div>
          </div>

          {/* Contexto del Juicio */}
          <div className="text-xs text-[#475569] bg-[#FAF9F5] p-3.5 rounded-lg border border-[#EAE8DD] leading-relaxed">
            <span className="font-mono-exam font-bold text-[#0B1B3D] block mb-0.5">CONTEXTO EN SALA:</span>
            {activeDrill.contextNarrative}
          </div>

          {/* Globo de Diálogo de la Pregunta en la Audiencia */}
          <div className="relative pl-4 border-l-4 border-[#C59B27] py-2 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono-exam font-bold text-[#0B1B3D]">
              <Volume2 className="w-4 h-4 text-[#C59B27]" />
              <span>{activeDrill.interrogator} formula al declarante:</span>
            </div>
            <p className="font-editorial text-lg sm:text-xl font-bold text-[#111625] leading-relaxed italic">
              "{activeDrill.questionUttered}"
            </p>
          </div>

          {/* Barra de Cuenta Regresiva de Reacción en Vivo */}
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

          {/* Botones Principales de Acción en Tiempo Real */}
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

          {/* Selector de Tipo de Objeción (Aparece tras presionar ¡OBJECIÓN!) */}
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

          {/* Veredicto Judicial Oficial y Retroalimentación */}
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

                {/* Veredicto del litigante */}
                <div className="text-xs font-mono-exam">
                  {userTimedOut && activeDrill.correctObjection !== 'VALIDA' ? (
                    <span className="text-[#9E472A] font-bold">
                      Extemporáneo: No se objetó a tiempo. El testigo respondió y la prueba quedó incorporada válidamente.
                    </span>
                  ) : isUserCorrect ? (
                    <span className="text-[#1E7E34] font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Intervención procesal correcta y oportuna.
                    </span>
                  ) : (
                    <span className="text-[#9E472A] font-bold flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" />
                      Criterio desacertado: El motivo legal correspondía a:{' '}
                      {OBJECTION_DEFINITIONS[activeDrill.correctObjection].label} ({OBJECTION_DEFINITIONS[activeDrill.correctObjection].legalBasis})
                    </span>
                  )}
                </div>

                {/* Fundamentación Judicial */}
                <div className="bg-white p-4 rounded-lg border border-[#E5E3D8] space-y-2 text-xs">
                  <span className="font-mono-exam font-bold text-[#0B1B3D] block">
                    ANÁLISIS PROCESAL (ARTS. 209-212 PRPN):
                  </span>
                  <p className="text-[#334155] leading-relaxed">
                    {activeDrill.judicialRationale}
                  </p>
                </div>

                {/* Jurisprudencia Vinculante de la CSJ */}
                <div className="bg-[#0B1B3D]/5 p-3 rounded-lg border border-[#0B1B3D]/20 space-y-1 text-xs">
                  <span className="font-mono-exam font-bold text-[#0B1B3D] text-[11px] block">
                    CRITERIO JURISPRUDENCIAL SALVADOREÑO:
                  </span>
                  <p className="text-[#475569] italic">
                    {activeDrill.salvadoranJurisprudence}
                  </p>
                </div>
              </div>

              {/* Botón para Siguiente Pregunta o Reinicio */}
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
                  <span>{currentDrillIndex + 1 < COURTROOM_DRILLS.length ? 'Siguiente Escenario Oral' : 'Finalizar Taller'}</span>
                  <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OralLitigationSimulatorView;
