import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getCurrentUser, updateUserPreferredLanguage } from '../services/authService';
import { safeStorage } from '../services/safeStorage';
import esLocale from './locales/es.json';
import nahuatLocale from './locales/nahuat.json';
import lencaLocale from './locales/lenca.json';
import kakawiraLocale from './locales/kakawira.json';
import enLocale from './locales/en.json';
import arLocale from './locales/ar.json';
import zhLocale from './locales/zh.json';
import { SUPPORTED_LANGUAGES, translateQuestionContent, extractContextualGlossary } from './questionTranslator';
import { AppLocale, LanguageMeta, TranslationDictionary, TranslationValue, TranslatedQuestionContent, GlossaryTerm } from './types';
import { Question } from '../types';

export const LANG_STORAGE_KEY = 'kuskat.lang';
export const LEARN_SPANISH_STORAGE_KEY = 'kuskat.learn_es';

const LOCALE_DICTIONARIES: Record<AppLocale, TranslationDictionary> = {
  es: esLocale as TranslationDictionary,
  nahuat: nahuatLocale as TranslationDictionary,
  lenca: lencaLocale as TranslationDictionary,
  kakawira: kakawiraLocale as TranslationDictionary,
  en: enLocale as TranslationDictionary,
  ar: arLocale as TranslationDictionary,
  zh: zhLocale as TranslationDictionary,
};

/**
 * Carga dinámica asíncrona de diccionarios para extensibilidad de paquetes de idioma adicionales.
 */
export async function loadLocaleChunk(locale: AppLocale): Promise<TranslationDictionary> {
  switch (locale) {
    case 'nahuat':
      return (await import('./locales/nahuat.json')).default as TranslationDictionary;
    case 'lenca':
      return (await import('./locales/lenca.json')).default as TranslationDictionary;
    case 'kakawira':
      return (await import('./locales/kakawira.json')).default as TranslationDictionary;
    case 'en':
      return (await import('./locales/en.json')).default as TranslationDictionary;
    case 'ar':
      return (await import('./locales/ar.json')).default as TranslationDictionary;
    case 'zh':
      return (await import('./locales/zh.json')).default as TranslationDictionary;
    case 'es':
    default:
      return (await import('./locales/es.json')).default as TranslationDictionary;
  }
}

export function isValidLocale(code: unknown): code is AppLocale {
  return (
    typeof code === 'string' &&
    ['es', 'nahuat', 'lenca', 'kakawira', 'en', 'ar', 'zh'].includes(code)
  );
}

/**
 * Detecta el idioma preferido siguiendo el orden de prioridad:
 * 1. Perfil de usuario con sesión activa (si existe)
 * 2. localStorage ('kuskat.lang')
 * 3. Idioma del navegador (navigator.language)
 * 4. Fallback seguro a 'es' (Español)
 */
export function detectInitialLocale(): AppLocale {
  try {
    const stored = safeStorage.getItem(LANG_STORAGE_KEY);
    if (isValidLocale(stored)) {
      return stored;
    }

    const user = getCurrentUser();
    if (user?.preferredLanguage && isValidLocale(user.preferredLanguage)) {
      return user.preferredLanguage;
    }

    if (typeof navigator !== 'undefined' && navigator.language) {
      const nav = navigator.language.toLowerCase();
      if (nav.startsWith('es')) return 'es';
      if (nav.startsWith('en')) return 'en';
      if (nav.startsWith('ar')) return 'ar';
      if (nav.startsWith('zh')) return 'zh';
      if (nav.startsWith('ppl') || nav.includes('nahuat')) return 'nahuat';
      if (nav.startsWith('len') || nav.includes('lenca')) return 'lenca';
      if (nav.startsWith('ccr') || nav.includes('kakawira')) return 'kakawira';
    }
  } catch {
    // Fallback silencioso a español
  }
  return 'es';
}

export function detectInitialLearnSpanishMode(initialLocale: AppLocale): boolean {
  try {
    const raw = safeStorage.getItem(LEARN_SPANISH_STORAGE_KEY);
    if (raw === 'true') return true;
    if (raw === 'false') return false;
  } catch {
    // ignore
  }
  // Por defecto sugerido como desactivado hasta que el usuario lo active explícitamente
  return false;
}

/**
 * Resuelve una ruta con notación de punto (ej. 'categories.title') dentro de un diccionario.
 */
function resolveNestedKey(dict: TranslationDictionary, path: string): string | null {
  const parts = path.split('.');
  let current: TranslationValue | undefined = dict;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, TranslationValue>)[part];
    } else {
      return null;
    }
  }

  return typeof current === 'string' ? current : null;
}

/**
 * Convierte una clave técnica faltante en texto legible para nunca mostrar claves crudas ('a.b.c') al estudiante.
 */
function humanizeMissingKey(key: string): string {
  const lastSegment = key.split('.').pop() || key;
  const spaced = lastSegment
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/**
 * Función pura de traducción con soporte de interpolación ({{var}}), pluralización (_one / _other)
 * y fallback automático a español ('es').
 */
export function translateKey(
  locale: AppLocale,
  key: string,
  params?: Record<string, string | number>
): string {
  const activeDict = LOCALE_DICTIONARIES[locale] || LOCALE_DICTIONARIES.es;
  const fallbackDict = LOCALE_DICTIONARIES.es;

  let targetKey = key;
  if (params && typeof params.count === 'number') {
    const pluralSuffix = params.count === 1 ? '_one' : '_other';
    const pluralCandidate = `${key}${pluralSuffix}`;
    if (
      resolveNestedKey(activeDict, pluralCandidate) !== null ||
      resolveNestedKey(fallbackDict, pluralCandidate) !== null
    ) {
      targetKey = pluralCandidate;
    }
  }

  let template =
    resolveNestedKey(activeDict, targetKey) ??
    resolveNestedKey(fallbackDict, targetKey) ??
    resolveNestedKey(activeDict, key) ??
    resolveNestedKey(fallbackDict, key);

  if (template === null) {
    template = humanizeMissingKey(key);
  }

  if (params) {
    return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, token: string) => {
      const val = params[token];
      return val !== undefined && val !== null ? String(val) : '';
    });
  }

  return template;
}

export interface LanguageContextValue {
  locale: AppLocale;
  languageMeta: LanguageMeta;
  supportedLanguages: LanguageMeta[];
  setLocale: (next: AppLocale) => void;
  learnSpanishMode: boolean;
  setLearnSpanishMode: (enabled: boolean) => void;
  toggleLearnSpanishMode: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  formatNumber: (value: number) => string;
  formatDate: (date: Date | string | number) => string;
  translateQuestion: (question: Question) => TranslatedQuestionContent;
  getGlossaryForQuestion: (question: Pick<Question, 'statement' | 'explanation' | 'subject' | 'topic'>) => GlossaryTerm[];
  announcement: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  initialLocale?: AppLocale;
}> = ({ children, initialLocale }) => {
  const [locale, setLocaleState] = useState<AppLocale>(() => initialLocale ?? detectInitialLocale());
  const [learnSpanishMode, setLearnSpanishState] = useState<boolean>(() =>
    detectInitialLearnSpanishMode(initialLocale ?? detectInitialLocale())
  );
  const [announcement, setAnnouncement] = useState<string>('');

  const languageMeta = useMemo<LanguageMeta>(() => {
    return (
      SUPPORTED_LANGUAGES.find((l) => l.code === locale) || SUPPORTED_LANGUAGES[0]
    );
  }, [locale]);

  // Aplicar atributos dir="rtl|ltr", lang y clases tipográficas al elemento <html>
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const html = document.documentElement;
    html.setAttribute('lang', languageMeta.bcp47);
    html.setAttribute('dir', languageMeta.dir);
    html.setAttribute('data-locale', locale);
    html.setAttribute('data-script', languageMeta.script);

    html.classList.remove('script-latin', 'script-arabic', 'script-chinese');
    html.classList.add(`script-${languageMeta.script}`);
  }, [locale, languageMeta]);

  const setLocale = useCallback((next: AppLocale) => {
    if (!isValidLocale(next)) return;
    setLocaleState(next);
    try {
      safeStorage.setItem(LANG_STORAGE_KEY, next);
      updateUserPreferredLanguage(next);
    } catch {
      // ignore storage errors
    }

    const nextMeta = SUPPORTED_LANGUAGES.find((l) => l.code === next) || SUPPORTED_LANGUAGES[0];
    const msg = translateKey(next, 'app.languageChanged', { lang: nextMeta.nativeName });
    setAnnouncement(msg);
  }, []);

  const setLearnSpanishMode = useCallback((enabled: boolean) => {
    setLearnSpanishState(enabled);
    try {
      safeStorage.setItem(LEARN_SPANISH_STORAGE_KEY, String(enabled));
    } catch {
      // ignore
    }
  }, []);

  const toggleLearnSpanishMode = useCallback(() => {
    setLearnSpanishState((prev) => {
      const next = !prev;
      try {
        safeStorage.setItem(LEARN_SPANISH_STORAGE_KEY, String(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      return translateKey(locale, key, params);
    },
    [locale]
  );

  const formatNumber = useCallback(
    (value: number) => {
      try {
        return new Intl.NumberFormat(languageMeta.bcp47).format(value);
      } catch {
        return String(value);
      }
    },
    [languageMeta.bcp47]
  );

  const formatDate = useCallback(
    (date: Date | string | number) => {
      try {
        const d = date instanceof Date ? date : new Date(date);
        return new Intl.DateTimeFormat(languageMeta.bcp47, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }).format(d);
      } catch {
        return String(date);
      }
    },
    [languageMeta.bcp47]
  );

  const translateQuestion = useCallback(
    (question: Question) => {
      return translateQuestionContent(question, locale);
    },
    [locale]
  );

  const getGlossaryForQuestion = useCallback(
    (question: Pick<Question, 'statement' | 'explanation' | 'subject' | 'topic'>) => {
      return extractContextualGlossary(question, locale);
    },
    [locale]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      languageMeta,
      supportedLanguages: SUPPORTED_LANGUAGES,
      setLocale,
      learnSpanishMode,
      setLearnSpanishMode,
      toggleLearnSpanishMode,
      t,
      formatNumber,
      formatDate,
      translateQuestion,
      getGlossaryForQuestion,
      announcement,
    }),
    [
      locale,
      languageMeta,
      setLocale,
      learnSpanishMode,
      setLearnSpanishMode,
      toggleLearnSpanishMode,
      t,
      formatNumber,
      formatDate,
      translateQuestion,
      getGlossaryForQuestion,
      announcement,
    ]
  );

  return (
    <LanguageContext.Provider value={value}>
      {/* Región accesible aria-live para anunciar cambios de idioma a lectores de pantalla */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook para acceder al estado de idioma, dirección (LTR/RTL) y modo "Aprender Español".
 */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback seguro si un componente se renderiza aislado en tests sin Provider explícito
    const defaultMeta = SUPPORTED_LANGUAGES[0];
    return {
      locale: 'es',
      languageMeta: defaultMeta,
      supportedLanguages: SUPPORTED_LANGUAGES,
      setLocale: () => {},
      learnSpanishMode: false,
      setLearnSpanishMode: () => {},
      toggleLearnSpanishMode: () => {},
      t: (key, params) => translateKey('es', key, params),
      formatNumber: (v) => String(v),
      formatDate: (d) => String(d),
      translateQuestion: (q) => translateQuestionContent(q, 'es'),
      getGlossaryForQuestion: (q) => extractContextualGlossary(q, 'es'),
      announcement: '',
    };
  }
  return ctx;
}

/**
 * Hook estándar de traducción e internacionalización.
 */
export function useTranslation() {
  const ctx = useLanguage();
  return {
    t: ctx.t,
    locale: ctx.locale,
    dir: ctx.languageMeta.dir,
    languageMeta: ctx.languageMeta,
    setLocale: ctx.setLocale,
    learnSpanishMode: ctx.learnSpanishMode,
    setLearnSpanishMode: ctx.setLearnSpanishMode,
    toggleLearnSpanishMode: ctx.toggleLearnSpanishMode,
    formatNumber: ctx.formatNumber,
    formatDate: ctx.formatDate,
    translateQuestion: ctx.translateQuestion,
    getGlossaryForQuestion: ctx.getGlossaryForQuestion,
  };
}
