import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Brain,
  Filter,
  BarChart3,
  Clock,
  Sparkles,
  BookOpen,
  ArrowRight,
  HelpCircle,
  TrendingUp,
  Tag,
  Flame,
} from 'lucide-react';
import {
  LoggedQuestionError,
  MetacognitiveReason,
  getActiveErrors,
  getVulnerabilityStats,
  recordRemediationResult,
  setMetacognitiveReason,
  purgeGraduatedErrors,
} from '../services/errorLogService';
import { KaTeXMath } from '../utils/mathRenderer';

export interface SmartErrorNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartErrorNotebookModal: React.FC<SmartErrorNotebookModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeErrors, setActiveErrors] = useState<LoggedQuestionError[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isRemediationActive, setIsRemediationActive] = useState<boolean>(false);
  const [currentRemediationIndex, setCurrentRemediationIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      setActiveErrors(getActiveErrors());
    }
  }, [isOpen, refreshKey]);

  const stats = useMemo(() => getVulnerabilityStats(), [activeErrors, refreshKey]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    activeErrors.forEach((e) => set.add(e.categoryKey));
    return Array.from(set);
  }, [activeErrors]);

  const filteredErrors = useMemo(() => {
    if (selectedCategory === 'all') return activeErrors;
    return activeErrors.filter((e) => e.categoryKey === selectedCategory);
  }, [activeErrors, selectedCategory]);

  const currentRemediationQuestion = filteredErrors[currentRemediationIndex] || null;

  if (!isOpen) return null;

  const handleStartRemediation = () => {
    if (filteredErrors.length === 0) return;
    setIsRemediationActive(true);
    setCurrentRemediationIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
  };

  const handleSelectOption = (optKey: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(optKey);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || !currentRemediationQuestion) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentRemediationQuestion.correctAnswer;
    recordRemediationResult(currentRemediationQuestion.questionId, isCorrect);
    setRefreshKey((k) => k + 1);
  };

  const handleNextRemediation = () => {
    if (currentRemediationIndex >= filteredErrors.length - 1) {
      setIsRemediationActive(false);
      setCurrentRemediationIndex(0);
    } else {
      setCurrentRemediationIndex((prev) => prev + 1);
    }
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
  };

  const handleTagReason = (questionId: string, reason: MetacognitiveReason) => {
    setMetacognitiveReason(questionId, reason);
    setRefreshKey((k) => k + 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F5] rounded-2xl border border-[#E5E3D8] shadow-corporate-elevated max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden text-[#111625]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado Corporativo Soberano */}
        <div className="bg-[#0B1B3D] p-5 sm:p-6 text-white border-b border-[#1A2E5A] relative flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-[#C59B27] text-[11px] font-bold border border-[#C59B27]/30 font-mono-exam uppercase tracking-wider">
              <Brain className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Metacognición & Remediación FSRS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-editorial tracking-tight text-[#FAF9F5]">
              Cuaderno Inteligente de Errores
            </h3>
            <p className="text-xs text-slate-300">
              Reentrena cada reactivo fallado hasta acumular 2 aciertos consecutivos en días separados para graduarlo.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Cerrar Cuaderno"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Estadísticas de Vulnerabilidad */}
        <div className="bg-white border-b border-[#E5E3D8] p-4 px-6 grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
          <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E5E3D8]">
            <span className="text-[10px] font-mono-exam font-bold uppercase tracking-wider text-[#64748B] block">
              Errores Activos
            </span>
            <span className="text-lg font-bold font-mono-exam text-[#9E472A]">
              {stats.activeErrors}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E5E3D8]">
            <span className="text-[10px] font-mono-exam font-bold uppercase tracking-wider text-[#64748B] block">
              Graduados (Dominados)
            </span>
            <span className="text-lg font-bold font-mono-exam text-[#1E7E34]">
              {stats.graduatedCount}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E5E3D8]">
            <span className="text-[10px] font-mono-exam font-bold uppercase tracking-wider text-[#64748B] block">
              Causa Principal
            </span>
            <span className="text-xs font-bold font-mono-exam text-[#0B1B3D] truncate block mt-0.5">
              {stats.byReason.distractor > stats.byReason.brecha_conceptual
                ? 'Distractor / Lectura'
                : stats.byReason.brecha_conceptual > 0
                ? 'Brecha Conceptual'
                : 'Sin Clasificar'}
            </span>
          </div>

          <div className="flex items-center justify-end">
            <button
              onClick={handleStartRemediation}
              disabled={filteredErrors.length === 0}
              className="w-full py-2.5 px-3 bg-[#0B1B3D] hover:bg-[#132A5C] disabled:bg-slate-300 text-white font-bold text-xs rounded-lg border border-[#1A2E5A] shadow-corporate-subtle transition-all cursor-pointer font-mono-exam flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Remediar ({filteredErrors.length})</span>
            </button>
          </div>
        </div>

        {/* Cuerpo Principal del Modal */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {!isRemediationActive ? (
            /* Vista 1: Lista e Índice de Errores */
            <div className="space-y-4">
              {/* Filtros por Categoría */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1 rounded-md text-xs font-mono-exam font-bold transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                        : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
                    }`}
                  >
                    Todas ({activeErrors.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-md text-xs font-mono-exam font-bold transition-all cursor-pointer shrink-0 ${
                        selectedCategory === cat
                          ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                          : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {stats.graduatedCount > 0 && (
                  <button
                    onClick={() => {
                      purgeGraduatedErrors();
                      setRefreshKey((k) => k + 1);
                    }}
                    className="text-[11px] font-mono-exam text-[#64748B] hover:text-[#0B1B3D] underline cursor-pointer"
                  >
                    Limpiar {stats.graduatedCount} graduados
                  </button>
                )}
              </div>

              {filteredErrors.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-xl border border-[#E5E3D8] space-y-3 shadow-corporate-subtle">
                  <CheckCircle2 className="w-10 h-10 text-[#1E7E34] mx-auto" />
                  <h4 className="font-editorial text-lg font-bold text-[#111625]">
                    ¡Excelente! No tienes errores pendientes en esta sección.
                  </h4>
                  <p className="text-xs text-[#64748B] max-w-md mx-auto">
                    A medida que resuelvas simulacros en KUSKAT, las preguntas que falles se registrarán automáticamente aquí para reentrenamiento deliberado.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredErrors.map((err, idx) => (
                    <div
                      key={err.questionId}
                      className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5E3D8] space-y-3 shadow-corporate-card"
                    >
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAE8DD]">
                        <span className="font-mono-exam font-bold text-[#0B1B3D]">
                          #{idx + 1} • {err.categoryKey}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono-exam px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                            Fallado {err.failCount} {err.failCount === 1 ? 'vez' : 'veces'}
                          </span>
                          <span className="text-[10px] font-mono-exam px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                            Racha: {err.consecutiveSuccessCount}/2 aciertos
                          </span>
                        </div>
                      </div>

                      {/* Texto de la Pregunta */}
                      <div className="text-xs sm:text-sm font-medium text-[#111625] leading-relaxed">
                        <KaTeXMath text={err.questionText} />
                      </div>

                      {/* Explicación Pedagógica */}
                      <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8] text-xs space-y-1">
                        <span className="font-mono-exam font-bold text-[#0B1B3D] text-[10px] uppercase block">
                          Solución & Justificación Oficial:
                        </span>
                        <div className="text-[#334155] leading-relaxed">
                          <KaTeXMath text={err.explanation} />
                        </div>
                      </div>

                      {/* Diagnóstico Metacognitivo del Error */}
                      <div className="pt-2 border-t border-[#EAE8DD] flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[10px] font-mono-exam text-[#64748B] font-bold uppercase">
                          ¿Por qué fallaste este reactivo?
                        </span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <button
                            onClick={() => handleTagReason(err.questionId, 'brecha_conceptual')}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono-exam font-bold border transition-colors cursor-pointer ${
                              err.metacognitiveReason === 'brecha_conceptual'
                                ? 'bg-rose-100 text-rose-900 border-rose-300 font-black'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            Brecha Conceptual
                          </button>
                          <button
                            onClick={() => handleTagReason(err.questionId, 'distractor')}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono-exam font-bold border transition-colors cursor-pointer ${
                              err.metacognitiveReason === 'distractor'
                                ? 'bg-amber-100 text-amber-900 border-amber-300 font-black'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            Distractor / Confusión
                          </button>
                          <button
                            onClick={() => handleTagReason(err.questionId, 'tiempo_calculo')}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono-exam font-bold border transition-colors cursor-pointer ${
                              err.metacognitiveReason === 'tiempo_calculo'
                                ? 'bg-blue-100 text-blue-900 border-blue-300 font-black'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            Tiempo / Cálculo
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Vista 2: Modo Sesión de Remediación FSRS */
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E3D8]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono-exam font-bold px-2 py-0.5 rounded bg-[#0B1B3D] text-[#FAF9F5]">
                    Ítem {currentRemediationIndex + 1} de {filteredErrors.length}
                  </span>
                  <span className="text-xs font-mono-exam text-[#64748B]">
                    {currentRemediationQuestion?.categoryKey}
                  </span>
                </div>

                <button
                  onClick={() => setIsRemediationActive(false)}
                  className="text-xs font-mono-exam text-[#64748B] hover:text-[#0B1B3D] underline cursor-pointer"
                >
                  Salir de la sesión
                </button>
              </div>

              {currentRemediationQuestion && (
                <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] space-y-4 shadow-corporate-card">
                  <div className="text-sm sm:text-base font-bold text-[#111625] leading-relaxed">
                    <KaTeXMath text={currentRemediationQuestion.questionText} />
                  </div>

                  {/* Opciones de Respuesta */}
                  <div className="space-y-2">
                    {Object.entries(currentRemediationQuestion.options).map(([key, text]) => {
                      const isSelected = selectedOption === key;
                      const isCorrect = key === currentRemediationQuestion.correctAnswer;

                      let btnStyle = 'bg-white border-[#E5E3D8] hover:border-[#0B1B3D] text-[#1E293B]';
                      if (isAnswerSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-[#EBF7EE] border-[#1E7E34] text-[#1E7E34] font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-rose-50 border-rose-500 text-rose-800 line-through';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-[#F2F1EA] border-[#0B1B3D] text-[#0B1B3D] font-bold';
                      }

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => handleSelectOption(key)}
                          className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${btnStyle}`}
                        >
                          <span className="w-6 h-6 rounded bg-slate-100 border border-slate-300 font-mono-exam font-bold text-xs flex items-center justify-center shrink-0">
                            {key}
                          </span>
                          <span className="text-xs sm:text-sm font-medium leading-relaxed">
                            <KaTeXMath text={text} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Retroalimentación al enviar */}
                  {isAnswerSubmitted && (
                    <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] space-y-2 text-xs animate-fade-in">
                      <div className="flex items-center gap-1.5 font-bold font-mono-exam">
                        {selectedOption === currentRemediationQuestion.correctAnswer ? (
                          <span className="text-[#1E7E34] flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            ¡Correcto! Racha aumentada ({currentRemediationQuestion.consecutiveSuccessCount + 1}/2).
                          </span>
                        ) : (
                          <span className="text-[#9E472A] flex items-center gap-1">
                            <AlertTriangle className="w-4 h-4" />
                            Incorrecto. El error se mantendrá programado en el cuaderno.
                          </span>
                        )}
                      </div>
                      <p className="text-[#334155] leading-relaxed">
                        <KaTeXMath text={currentRemediationQuestion.explanation} />
                      </p>
                    </div>
                  )}

                  {/* Acciones de Navegación */}
                  <div className="pt-3 border-t border-[#EAE8DD] flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono-exam text-[#64748B]">
                        Meta: 2 aciertos consecutivos para graduar
                      </span>
                    </div>

                    {!isAnswerSubmitted ? (
                      <button
                        onClick={handleSubmitAnswer}
                        disabled={!selectedOption}
                        className="px-5 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] disabled:bg-slate-300 text-white font-bold text-xs rounded-lg border border-[#1A2E5A] shadow-corporate-subtle transition-all cursor-pointer font-mono-exam"
                      >
                        Confirmar Respuesta
                      </button>
                    ) : (
                      <button
                        onClick={handleNextRemediation}
                        className="px-5 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-white font-bold text-xs rounded-lg border border-[#1A2E5A] shadow-corporate-subtle transition-all cursor-pointer font-mono-exam flex items-center gap-1.5"
                      >
                        <span>{currentRemediationIndex < filteredErrors.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Sesión'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pie del Modal */}
        <div className="bg-[#F2F1EA] px-6 py-3 border-t border-[#E5E3D8] text-center text-[11px] text-[#64748B] font-mono-exam shrink-0">
          KUSKAT Deliberate Practice Engine • Algoritmo de Remediación FSRS v4.5
        </div>
      </div>
    </div>
  );
};

export default SmartErrorNotebookModal;
