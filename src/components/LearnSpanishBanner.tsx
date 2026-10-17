import React, { useState } from 'react';
import { BookOpen, Sparkles, Info, Columns, Rows, Languages, CheckCircle2 } from 'lucide-react';
import { Question } from '../types';
import { useLanguage } from '../i18n';
import { MathText } from '../utils/mathRenderer';

export interface LearnSpanishQuestionPanelProps {
  question: Question;
  showExplanation?: boolean;
  className?: string;
}

/**
 * Componente intercultural para el "Modo Aprender Español" y aviso discreto de fallback.
 * Muestra para hablantes de lenguas originarias (Náhuat, Lenca, Kakawira) o extranjeras:
 * 1. El reactivo en su lengua materna y en Español lado a lado (o apilado).
 * 2. El Glosario Técnico Intercultural con distinción entre vocablos propios revitalizados y préstamos técnicos justificados.
 * 3. Retroalimentación bilingüe comparada.
 */
export const LearnSpanishQuestionPanel: React.FC<LearnSpanishQuestionPanelProps> = React.memo(
  ({ question, showExplanation = false, className = '' }) => {
    const {
      locale,
      languageMeta,
      learnSpanishMode,
      toggleLearnSpanishMode,
      translateQuestion,
      t,
    } = useLanguage();

    const [layout, setLayout] = useState<'side-by-side' | 'stacked'>('side-by-side');

    // Si estamos en Español base y no está activo el modo bilingüe, no renderizamos panel extra
    if (locale === 'es' && !learnSpanishMode) {
      return null;
    }

    const translated = translateQuestion(question);

    return (
      <div className={`space-y-3 ${className}`}>
        {/* Barra superior de estado intercultural y aviso de fallback discreto */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200/90 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-blue-600/10 text-blue-800 font-bold border border-blue-500/20">
              <Languages className="w-3.5 h-3.5 text-blue-600" />
              <span>{languageMeta.nativeName}</span>
            </span>

            {translated.isFallbackToSpanish && (
              <span
                role="status"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-500/15 text-amber-900 border border-amber-400/30 font-medium"
              >
                <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>{t('app.fallbackNotice')}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLearnSpanishMode}
              aria-pressed={learnSpanishMode}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                learnSpanishMode
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('switcher.learnSpanishToggle')}</span>
            </button>

            {learnSpanishMode && (
              <button
                type="button"
                onClick={() =>
                  setLayout((prev) => (prev === 'side-by-side' ? 'stacked' : 'side-by-side'))
                }
                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 font-semibold cursor-pointer"
                title={
                  layout === 'side-by-side'
                    ? t('learnSpanish.toggleStacked')
                    : t('learnSpanish.toggleSideBySide')
                }
              >
                {layout === 'side-by-side' ? (
                  <>
                    <Rows className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t('learnSpanish.toggleStacked')}</span>
                  </>
                ) : (
                  <>
                    <Columns className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t('learnSpanish.toggleSideBySide')}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Panel expandido cuando el Modo Aprender Español está activo */}
        {learnSpanishMode && (
          <div className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-50/70 via-white to-blue-50/50 p-4 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/70 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                    {t('learnSpanish.bannerTitle')}
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    {t('learnSpanish.bannerSubtitle', { native: languageMeta.nativeName })}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparación Lado a Lado o Apilada */}
            <div
              className={`grid gap-3 ${
                layout === 'side-by-side' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {/* Columna 1: Lengua materna / seleccionada */}
              <div
                dir={languageMeta.dir}
                className="p-3.5 rounded-xl bg-white border border-blue-200/90 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                    {t('learnSpanish.motherTongueLabel', { lang: languageMeta.nativeName })}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-[10px] font-bold">
                    {translated.subject}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  <MathText text={translated.statement} />
                </div>
                {showExplanation && translated.explanation && (
                  <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <MathText text={translated.explanation} />
                  </div>
                )}
              </div>

              {/* Columna 2: Español Académico de referencia */}
              <div
                dir="ltr"
                className="p-3.5 rounded-xl bg-white border border-emerald-200/90 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                    {t('learnSpanish.spanishTargetLabel')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono text-[10px] font-bold">
                    {question.subject}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  <MathText text={question.statement} />
                </div>
                {showExplanation && question.explanation && (
                  <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <span className="font-bold text-emerald-800">
                      Explicación en Español ({question.correctAnswer}):{' '}
                    </span>
                    <MathText text={question.explanation} />
                  </div>
                )}
              </div>
            </div>

            {/* Glosario Técnico Contextual Intercultural */}
            {translated.matchedGlossary.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    {t('learnSpanish.glossaryTitle')}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {translated.matchedGlossary.map((term, idx) => (
                    <div
                      key={`${term.termEs}-${idx}`}
                      className="p-3 rounded-xl bg-white/95 border border-slate-200/90 space-y-1"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="text-xs font-extrabold text-slate-900">
                          {term.termEs} ↔{' '}
                          <span className="text-blue-700">{term.termTarget}</span>
                        </span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                            term.isLoanword
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {term.isLoanword
                            ? t('learnSpanish.loanwordBadge')
                            : t('learnSpanish.nativeTermBadge')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        <strong>ES:</strong> <MathText text={term.definitionEs} />
                      </p>
                      <p className="text-[11px] text-blue-900 leading-snug">
                        <strong>{languageMeta.monogram}:</strong>{' '}
                        <MathText text={term.definitionTarget} />
                      </p>
                      {term.culturalNote && (
                        <p className="text-[10px] italic text-slate-500 pt-0.5">
                          Nota intercultural: {term.culturalNote}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

LearnSpanishQuestionPanel.displayName = 'LearnSpanishQuestionPanel';
