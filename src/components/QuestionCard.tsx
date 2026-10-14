import React, { useState } from 'react';
import { Question } from '../types';
import { KaTeXRenderer } from './KaTeXRenderer';
import { CheckCircle2, ChevronDown, ChevronUp, Copy, Check, Info } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  subtopicTitle?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, subtopicTitle }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectOption = (key: string) => {
    setSelectedOption(key);
  };

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.correctAnswer;

  const handleCopyQuestion = () => {
    let text = `Pregunta ${question.number} (${question.subtopicId}): ${question.statement}\n\n`;
    question.options.forEach((opt) => {
      text += `${opt.key}) ${opt.text}\n`;
    });
    text += `\nRespuesta Correcta: ${question.correctAnswer}\n`;
    if (question.explanation) {
      text += `Explicación: ${question.explanation}\n`;
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 mb-4">
      {/* Header with question number and section badge */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
            {question.number}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
            {question.subtopicId}
          </span>
          {question.sectionTitle && (
            <span className="text-xs font-medium text-slate-500 truncate max-w-[280px] sm:max-w-md">
              {question.sectionTitle}
            </span>
          )}
        </div>

        <button
          onClick={handleCopyQuestion}
          className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          title="Copiar pregunta al portapapeles"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Question Statement */}
      <div className="text-slate-900 text-base leading-relaxed mb-5 font-normal">
        <KaTeXRenderer content={question.statement} />
      </div>

      {/* Options Grid (A-F) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mb-4">
        {question.options.map((opt) => {
          const isSelected = selectedOption === opt.key;
          const isRight = question.correctAnswer === opt.key;

          let btnClass = 'bg-slate-50/80 border-slate-200 text-slate-800 hover:bg-slate-100';

          if (isAnswered || showSolution) {
            if (isRight) {
              btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium shadow-xs';
            } else if (isSelected) {
              btnClass = 'bg-rose-50 border-rose-400 text-rose-950';
            } else {
              btnClass = 'bg-slate-50/40 border-slate-200 text-slate-400 opacity-70';
            }
          }

          return (
            <button
              key={opt.key}
              onClick={() => handleSelectOption(opt.key)}
              className={`cursor-pointer w-full text-left p-3 rounded-xl border text-sm transition-all flex items-start gap-2.5 ${btnClass}`}
            >
              <span
                className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                  (isAnswered || showSolution) && isRight
                    ? 'bg-emerald-600 text-white'
                    : isSelected
                    ? 'bg-rose-600 text-white'
                    : 'bg-white border border-slate-300 text-slate-700'
                }`}
              >
                {opt.key}
              </span>
              <div className="flex-1 break-words leading-snug pt-0.5">
                <KaTeXRenderer content={opt.text} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Solution Explanation toggle and content */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{showSolution ? 'Ocultar Solución' : 'Ver Solución y Clave'}</span>
            {showSolution ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {isAnswered && (
            <div className="flex items-center gap-1.5 text-xs font-bold">
              {isCorrect ? (
                <span className="text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> ¡Correcto!
                </span>
              ) : (
                <span className="text-rose-600">
                  Respuesta incorrecta (Clave: {question.correctAnswer})
                </span>
              )}
            </div>
          )}
        </div>

        {showSolution && (
          <div className="mt-2 p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-700 space-y-1.5">
            <div className="font-bold text-blue-900 flex items-center gap-2">
              <span>Opción Correcta:</span>
              <span className="px-2 py-0.5 bg-blue-600 text-white rounded-md text-xs font-mono">
                {question.correctAnswer}
              </span>
            </div>
            {question.explanation && (
              <div className="text-slate-700 leading-relaxed pt-1">
                <span className="font-semibold text-slate-800">Justificación: </span>
                <KaTeXRenderer content={question.explanation} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
