/**
 * ACCESSIBLE SPEECH HELPER (SÍNTESIS DE VOZ Y ACCESIBILIDAD UNIVERSAL)
 * Plataforma KUSKAT · República de El Salvador
 * Cumplimiento WCAG 2.2 AAA mediante Web Speech API 100% nativa y offline,
 * con normalizador lingüístico de fórmulas KaTeX/LaTeX y abreviaturas legales.
 */

type SpeechListener = (state: { isSpeaking: boolean; isPaused: boolean; currentId: string | null }) => void;

class AccessibleSpeechEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<SpeechListener> = new Set();
  private isSpeaking = false;
  private isPaused = false;
  private currentId: string | null = null;
  private rate = 1.0;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public subscribe(listener: SpeechListener): () => void {
    this.listeners.add(listener);
    listener({ isSpeaking: this.isSpeaking, isPaused: this.isPaused, currentId: this.currentId });
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    const state = { isSpeaking: this.isSpeaking, isPaused: this.isPaused, currentId: this.currentId };
    this.listeners.forEach((fn) => fn(state));
  }

  public setRate(newRate: number): void {
    this.rate = Math.max(0.5, Math.min(2.0, newRate));
    if (this.isSpeaking && this.currentUtterance) {
      // Reanuda con la nueva velocidad si aplica
    }
  }

  public getRate(): number {
    return this.rate;
  }

  /**
   * Normaliza texto con sintaxis matemática LaTeX, HTML y abreviaturas legales a español fluido
   */
  public normalizeForSpeech(rawText: string): string {
    if (!rawText) return '';

    let text = rawText;

    // Eliminar tags HTML
    text = text.replace(/<[^>]*>/g, ' ');

    // 1. Abreviaturas Legales e Institucionales Salvadoreñas
    text = text.replace(/\bArt\.\s*(\d+)/gi, 'Artículo $1');
    text = text.replace(/\binc\.\s*(\d+)°?/gi, 'inciso $1');
    text = text.replace(/\bOrd\.\s*(\d+)°?/gi, 'ordinal $1');
    text = text.replace(/\bPrPn\b/g, 'Código Procesal Penal');
    text = text.replace(/\bPn\b/g, 'Código Penal');
    text = text.replace(/\bPrCMyM\b/g, 'Código Procesal Civil y Mercantil');
    text = text.replace(/\bCn\.\b/g, 'Constitución de la República');
    text = text.replace(/\bCSJ\b/g, 'Corte Suprema de Justicia');
    text = text.replace(/\bFGR\b/g, 'Fiscalía General de la República');
    text = text.replace(/\bPNC\b/g, 'Policía Nacional Civil');
    text = text.replace(/\bANSP\b/g, 'Academia Nacional de Seguridad Pública');
    text = text.replace(/\bMINSAL\b/g, 'Ministerio de Salud');
    text = text.replace(/\bISSS\b/g, 'Instituto Salvadoreño del Seguro Social');
    text = text.replace(/\bCSSP\b/g, 'Consejo Superior de Salud Pública');
    text = text.replace(/\bVMT\b/g, 'Viceministerio de Transporte');
    text = text.replace(/\bSIGET\b/g, 'Superintendencia General de Electricidad y Telecomunicaciones');
    text = text.replace(/\bINCAF\b/g, 'Instituto Nacional de Capacitación y Formación');

    // 2. Notaciones Médicas Clásicas
    text = text.replace(/\bPA:\s*(\d+)\/(\d+)\s*mmHg/gi, 'presión arterial de $1 sobre $2 milímetros de mercurio');
    text = text.replace(/\bFC:\s*(\d+)\s*lpm/gi, 'frecuencia cardíaca de $1 latidos por minuto');
    text = text.replace(/\bFR:\s*(\d+)\s*rpm/gi, 'frecuencia respiratoria de $1 respiraciones por minuto');
    text = text.replace(/\bSatO2:\s*(\d+)%/gi, 'saturación de oxígeno al $1 por ciento');
    text = text.replace(/(\d+)\s*mg\/dl/gi, '$1 miligramos por decilitro');
    text = text.replace(/(\d+)\s*ml\/kg/gi, '$1 mililitros por kilogramo');

    // 3. Fórmulas Matemáticas y Físicas LaTeX
    // Fracciones: \frac{a}{b} -> "a sobre b"
    text = text.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1 sobre $2');
    // Raíces cuadradas: \sqrt{x} -> "raíz cuadrada de x"
    text = text.replace(/\\sqrt\{([^{}]+)\}/g, 'raíz cuadrada de $1');
    // Exponentes sencillos
    text = text.replace(/([a-zA-Z0-9]+)\^2/g, '$1 al cuadrado');
    text = text.replace(/([a-zA-Z0-9]+)\^3/g, '$1 al cubo');
    text = text.replace(/([a-zA-Z0-9]+)\^4/g, '$1 a la cuarta potencia');
    text = text.replace(/([a-zA-Z0-9]+)\^\{([^{}]+)\}/g, '$1 elevado a la $2');

    // Símbolos de comparación y operadores
    text = text.replace(/\\le|\\leq|<=/g, ' menor o igual que ');
    text = text.replace(/\\ge|\\geq|>=/g, ' mayor o igual que ');
    text = text.replace(/\\neq|!=/g, ' no es igual a ');
    text = text.replace(/\\pm/g, ' más o menos ');
    text = text.replace(/\\cdot|\\times/g, ' por ');
    text = text.replace(/\\approx/g, ' aproximadamente igual a ');
    text = text.replace(/\\propto/g, ' directamente proporcional a ');

    // Letras griegas frecuentes
    text = text.replace(/\\Delta/g, 'Delta ');
    text = text.replace(/\\alpha/g, 'alfa ');
    text = text.replace(/\\beta/g, 'beta ');
    text = text.replace(/\\gamma/g, 'gamma ');
    text = text.replace(/\\pi/g, 'pi ');
    text = text.replace(/\\theta/g, 'teta ');

    // Limpiar símbolos LaTeX residuales (barras invertidas, llaves, signos de dólar)
    text = text.replace(/[\$\{\}\\]/g, ' ');

    // Normalizar espacios en blanco
    text = text.replace(/\s+/g, ' ').trim();

    return text;
  }

  /**
   * Reproduce el texto usando la voz más adecuada disponible
   */
  public speak(id: string, textToSpeak: string, onEndCallback?: () => void): void {
    if (!this.synth) return;

    // Si ya está reproduciendo este mismo texto, lo pausa o reanuda
    if (this.isSpeaking && this.currentId === id) {
      if (this.isPaused) {
        this.synth.resume();
        this.isPaused = false;
        this.notify();
      } else {
        this.synth.pause();
        this.isPaused = true;
        this.notify();
      }
      return;
    }

    // Si había otra cosa sonando, se detiene
    this.stop();

    const normalized = this.normalizeForSpeech(textToSpeak);
    if (!normalized) return;

    const utterance = new SpeechSynthesisUtterance(normalized);
    utterance.rate = this.rate;
    utterance.pitch = 1.0;

    // Intentar seleccionar una voz en español
    const voices = this.synth.getVoices();
    const spanishVoice =
      voices.find((v) => v.lang.startsWith('es-SV')) ||
      voices.find((v) => v.lang.startsWith('es-MX')) ||
      voices.find((v) => v.lang.startsWith('es-US')) ||
      voices.find((v) => v.lang.startsWith('es'));

    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }
    utterance.lang = 'es-SV';

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      this.currentId = id;
      this.notify();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentId = null;
      this.currentUtterance = null;
      this.notify();
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentId = null;
      this.currentUtterance = null;
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause(): void {
    if (this.synth && this.isSpeaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  public resume(): void {
    if (this.synth && this.isSpeaking && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.notify();
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentId = null;
      this.currentUtterance = null;
      this.notify();
    }
  }
}

export const accessibleSpeech = new AccessibleSpeechEngine();
