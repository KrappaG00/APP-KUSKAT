import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown, BookOpen, Sparkles } from 'lucide-react';
import { useLanguage, AppLocale } from '../i18n';

export interface LanguageSwitcherProps {
  variant?: 'compact' | 'panel' | 'inline-pills';
  showLearnSpanishToggle?: boolean;
  className?: string;
}

/**
 * Selector de idioma intercultural accesible (WCAG 2.2 AA).
 * - Muestra el nombre nativo (autónimo) de cada lengua.
 * - Utiliza monogramas culturales respetuosos en lugar de banderas estatales para pueblos originarios.
 * - Navegación completa por teclado (ArrowDown, ArrowUp, Home, End, Enter, Escape).
 * - Incluye control para activar el "Modo Aprender Español" bilingüe.
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'compact',
  showLearnSpanishToggle = true,
  className = '',
}) => {
  const {
    locale,
    languageMeta,
    supportedLanguages,
    setLocale,
    learnSpanishMode,
    toggleLearnSpanishMode,
    t,
  } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(() =>
    Math.max(
      0,
      supportedLanguages.findIndex((l) => l.code === locale)
    )
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const idx = supportedLanguages.findIndex((l) => l.code === locale);
    if (idx >= 0) setFocusedIndex(idx);
  }, [locale, supportedLanguages]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Enfocar opción activa al navegar con teclado
  useEffect(() => {
    if (isOpen && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % supportedLanguages.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + supportedLanguages.length) % supportedLanguages.length);
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(supportedLanguages.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (supportedLanguages[focusedIndex]) {
          setLocale(supportedLanguages[focusedIndex].code);
          setIsOpen(false);
        }
        break;
      default:
        break;
    }
  };

  const handleSelectLocale = (code: AppLocale) => {
    setLocale(code);
    setIsOpen(false);
  };

  if (variant === 'panel' || variant === 'inline-pills') {
    return (
      <div
        className={`bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-sm ${className}`}
        role="region"
        aria-label={t('switcher.label')}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-600 shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
                {t('switcher.label')}
              </h3>
              <p className="text-[11px] text-slate-500">
                Náhuat • Lenca • Kakawira • Español • English • العربية • 中文
              </p>
            </div>
          </div>

          {showLearnSpanishToggle && locale !== 'es' && (
            <button
              type="button"
              onClick={toggleLearnSpanishMode}
              aria-pressed={learnSpanishMode}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                learnSpanishMode
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('switcher.learnSpanishToggle')}</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-mono ${
                  learnSpanishMode ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {learnSpanishMode ? 'ON' : 'OFF'}
              </span>
            </button>
          )}
        </div>

        <div
          role="radiogroup"
          aria-label={t('switcher.label')}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2"
        >
          {supportedLanguages.map((lang) => {
            const isSelected = lang.code === locale;
            return (
              <button
                key={lang.code}
                type="button"
                role="radio"
                aria-checked={isSelected}
                aria-label={t('switcher.changeTo', { lang: lang.nativeName })}
                onClick={() => handleSelectLocale(lang.code)}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300/60'
                    : 'bg-slate-50/90 hover:bg-blue-50/60 text-slate-800 border-slate-200/90'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold font-mono shrink-0 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : lang.isIndigenous
                      ? 'bg-amber-500/15 text-amber-800 border border-amber-400/30'
                      : 'bg-blue-500/10 text-blue-700 border border-blue-300/30'
                  }`}
                >
                  {lang.monogram}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold truncate">{lang.nativeName}</div>
                  <div
                    className={`text-[10px] truncate ${
                      isSelected ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {lang.isIndigenous ? 'Originaria SV' : lang.spanishName}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Variante compacta para el Header principal y barras superiores
  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center gap-1.5 ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Botón rápido de Modo Aprender Español cuando el idioma no es Español */}
      {showLearnSpanishToggle && locale !== 'es' && (
        <button
          type="button"
          onClick={toggleLearnSpanishMode}
          aria-pressed={learnSpanishMode}
          title={t('switcher.learnSpanishDesc')}
          className={`hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
            learnSpanishMode
              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
              : 'bg-slate-800/90 text-emerald-300 border-emerald-500/30 hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>{t('switcher.learnSpanishToggle')}</span>
        </button>
      )}

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`${t('switcher.label')}: ${languageMeta.nativeName}`}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[38px] rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-600/80 text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-extrabold">
          {languageMeta.monogram}
        </span>
        <span className="max-w-[96px] sm:max-w-[120px] truncate">{languageMeta.nativeName}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-300 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t('switcher.label')}
          className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50 text-white"
        >
          <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {t('switcher.label')}
            </span>
            <span className="text-[10px] font-mono text-amber-400">7 Lenguas</span>
          </div>

          <div className="py-1.5 max-h-80 overflow-y-auto space-y-1">
            {supportedLanguages.map((lang, idx) => {
              const isSelected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  ref={(el) => {
                    optionRefs.current[idx] = el;
                  }}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  aria-label={t('switcher.changeTo', { lang: lang.nativeName })}
                  onClick={() => handleSelectLocale(lang.code)}
                  className={`w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isSelected
                      ? 'bg-blue-600 text-white font-bold'
                      : 'hover:bg-slate-800 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold font-mono shrink-0 ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : lang.isIndigenous
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                          : 'bg-slate-800 text-blue-300 border border-slate-700'
                      }`}
                    >
                      {lang.monogram}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                        <span className="truncate">{lang.nativeName}</span>
                        {lang.isIndigenous && (
                          <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                            Originaria SV
                          </span>
                        )}
                      </div>
                      <div
                        className={`text-[11px] truncate ${
                          isSelected ? 'text-blue-100' : 'text-slate-400'
                        }`}
                      >
                        {lang.region}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-amber-300 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Toggle de Modo Aprender Español dentro del menú desplegable */}
          {showLearnSpanishToggle && (
            <div className="mt-1 pt-2 border-t border-slate-800 px-2 pb-1">
              <button
                type="button"
                onClick={toggleLearnSpanishMode}
                aria-pressed={learnSpanishMode}
                className={`w-full flex items-center justify-between gap-2 p-2.5 rounded-xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  learnSpanishMode
                    ? 'bg-emerald-600/25 border-emerald-400/60 text-emerald-200'
                    : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">
                      {t('switcher.learnSpanishToggle')}
                    </div>
                    <div className="text-[10px] text-slate-400 line-clamp-1">
                      {t('switcher.learnSpanishDesc')}
                    </div>
                  </div>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 ${
                    learnSpanishMode
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {learnSpanishMode ? 'ACTIVO' : 'OFF'}
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
