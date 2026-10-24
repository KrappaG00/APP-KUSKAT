/**
 * APP-KUSKAT • Centralized Web Speech API Audio Helper
 *
 * Provides a robust cross-browser speech synthesizer wrapper addressing:
 * 1. Chromium Utterance Garbage Collection bug (persists reference during playback)
 * 2. Speech synthesis freezing (auto-resumes paused queue before speak)
 * 3. Lazy voice loading (handles onvoiceschanged event)
 * 4. Proper BCP-47 locale mapping for 7+ languages (including English US/UK, French, German, Arabic, Mandarin, Spanish)
 * 5. Indigenous languages (Náhuat, Lenca, Kakawira) phonetic pronunciation tuning
 */

let activeUtterance: SpeechSynthesisUtterance | null = null;
let voicesCache: SpeechSynthesisVoice[] = [];

// Precargar voces disponibles
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const loadVoices = () => {
    try {
      voicesCache = window.speechSynthesis.getVoices() || [];
    } catch {
      voicesCache = [];
    }
  };

  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

/**
 * Normaliza el identificador de idioma a un código BCP-47 estándar
 */
export function resolveLocaleCode(languageIdOrLocale: string): string {
  const l = (languageIdOrLocale || '').toLowerCase().trim();

  switch (l) {
    case 'en':
    case 'en-us':
    case 'english':
    case 'us':
      return 'en-US';
    case 'en-gb':
    case 'uk':
    case 'british':
      return 'en-GB';
    case 'fr':
    case 'fr-fr':
    case 'french':
    case 'francais':
      return 'fr-FR';
    case 'de':
    case 'de-de':
    case 'german':
    case 'deutsch':
      return 'de-DE';
    case 'ar':
    case 'ar-sa':
    case 'arabic':
    case 'العربية':
      return 'ar-SA';
    case 'zh':
    case 'zh-cn':
    case 'mandarin':
    case 'chinese':
    case '中文':
      return 'zh-CN';
    case 'nahuat':
    case 'lenca':
    case 'kakawira':
      // Para lenguas originarias de El Salvador se usa el motor fonético en español salvadoreño/latinoamericano
      return 'es-SV';
    case 'es':
    case 'spanish':
    case 'español':
    default:
      return 'es-SV';
  }
}

/**
 * Encuentra la mejor voz disponible en el sistema operativo para el locale especificado
 */
function findBestVoice(locale: string): SpeechSynthesisVoice | null {
  if (!voicesCache || voicesCache.length === 0) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      voicesCache = window.speechSynthesis.getVoices() || [];
    }
  }

  if (!voicesCache || voicesCache.length === 0) return null;

  // 1. Coincidencia exacta de locale (ej: "en-US", "fr-FR")
  const exactMatch = voicesCache.find((v) => v.lang.toLowerCase() === locale.toLowerCase());
  if (exactMatch) return exactMatch;

  // 2. Coincidencia por prefijo primario (ej: "en" para "en-GB" o "es" para "es-ES")
  const primaryLang = locale.split('-')[0].toLowerCase();
  const prefixMatch = voicesCache.find((v) => v.lang.toLowerCase().startsWith(primaryLang));
  if (prefixMatch) return prefixMatch;

  return null;
}

export interface PlaySpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

/**
 * Sintetiza y reproduce el texto mediante Web Speech API de manera robusta
 */
export function playAudioSpeech(
  text: string,
  languageIdOrLocale: string = 'es-SV',
  options: PlaySpeechOptions = {}
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('[audioSpeechHelper] Web Speech API no soportada en este entorno.');
    return false;
  }

  if (!text || !text.trim()) return false;

  try {
    // Detener cualquier reproducción en curso y reanudar si estaba congelada
    window.speechSynthesis.cancel();
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const locale = resolveLocaleCode(languageIdOrLocale);
    const cleanText = text.replace(/[\(\)\[\]\{\}«»"']/g, '').trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = locale;

    // Configurar velocidad por defecto óptima para comprensión pedagógica
    if (options.rate !== undefined) {
      utterance.rate = options.rate;
    } else if (['nahuat', 'lenca', 'kakawira'].includes(languageIdOrLocale.toLowerCase())) {
      utterance.rate = 0.8; // Más pausado para fonética de lenguas originarias
    } else {
      utterance.rate = 0.88;
    }

    utterance.pitch = options.pitch ?? 1.0;
    utterance.volume = options.volume ?? 1.0;

    // Asignar mejor voz si está disponible
    const matchedVoice = findBestVoice(locale);
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    // Callbacks del ciclo de vida
    utterance.onstart = () => {
      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      activeUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = (event) => {
      activeUtterance = null;
      // No reportar como error si fue una cancelación intencional
      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        console.warn('[audioSpeechHelper] Error de síntesis de voz:', event.error);
        if (options.onError) options.onError(event);
      }
    };

    // Prevenir que el recolector de basura de Chrome destruya el objeto utterance antes de hablar
    activeUtterance = utterance;
    (window as any).__activeUtterance = utterance;

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.error('[audioSpeechHelper] Fallo al iniciar reproducción de audio:', err);
    return false;
  }
}

/**
 * Detiene inmediatamente cualquier locución en curso
 */
export function stopAudioSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignorar error al cancelar
    }
  }
  activeUtterance = null;
}

/**
 * Comprueba si el sintetizador de voz está disponible en el navegador
 */
export function isSpeechSynthesizerSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}
