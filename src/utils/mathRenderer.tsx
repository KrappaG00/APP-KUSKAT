import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * APP-KUSKAT • MOTOR DE RENDERIZADO UNIFICADO KATEX CON CACHÉ LRU
 *
 * Optimizaciones y garantías clave:
 * 1. Ruta Rápida (Fast Path): Textos narrativos sin sintaxis matemática ni caracteres de control se devuelven en O(1).
 * 2. Caché en Memoria (LRU): Resultados de KaTeX cacheados en un Map de alto rendimiento.
 * 3. Reparación de Datos: Corrige caracteres de control (\x07, \x08, \x0b, \x0c, \t) antes de comandos LaTeX,
 *    cierre defectuoso \\), intervalos con $ desbalanceado y protege moneda ($4.50 / \$1.5).
 * 4. Humanización Segura: Convierte sqrt(...), <=, >=, !=, ->, ==>, *, potencias sueltas y comandos LaTeX sueltos
 *    a notación matemática legible sin alterar fechas (12/05/2026), unidades (km/h, m/s, mg/dL) ni viñetas (* item).
 * 5. React.memo: Evita re-renders innecesarios en listas, tablas y reactivos masivos.
 */

const MATH_CACHE = new Map<string, string>();
const MAX_CACHE_SIZE = 4000;

const SUPERSCRIPT_MAP: Record<string, string> = {
  '-': '⁻',
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
};

function toUnicodeSuperscript(exp: string): string {
  return exp
    .split('')
    .map((ch) => SUPERSCRIPT_MAP[ch] ?? ch)
    .join('');
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Repara caracteres de control reales (\x07, \x08, \x0b, \x0c, \t) producidos por
 * secuencias de escape sin doble barra antes de comandos LaTeX.
 */
export function repairControlChars(text: string): string {
  if (!text) return '';
  return text
    // Secuencias literales heredadas
    .replace(/\\u0007pprox/g, '\\approx')
    .replace(/\\u000bec/g, '\\vec')
    // Caracteres de control reales
    .replace(/\u0007(pprox|lpha|ngle|rcsin|rccos|rctan)\b/g, '\\a$1')
    .replace(/\u0008(eta|ar|ig|egin|inom|ullet|ackslash|matrix|oxed|oldsymbol)\b/g, '\\b$1')
    .replace(/\u000b(ec|dash|dots|matrix|ert|arepsilon|artheta|arphi|arrho|arsigma)\b/g, '\\v$1')
    .replace(/\u000c(rac|orall|loor|rown)\b/g, '\\f$1')
    .replace(/\u0009(extbf|extit|extrm|ext|imes|heta|au|anh|an|ilde|riangle|op)\b/g, '\\t$1')
    .replace(/\u0009o(?=\s|\\|[0-9({\[$]|$)/g, '\\to');
}

/**
 * Convierte sqrt(...) con soporte para un nivel de paréntesis anidados a \sqrt{...}.
 */
function replaceSqrtCalls(input: string, wrapWithDelimiters: boolean): string {
  const sqrtRegex = /\bsqrt\(((?:[^()]+|\([^()]*\))+)\)/g;
  return input.replace(sqrtRegex, (_, inner: string) => {
    const cmd = `\\sqrt{${inner.trim()}}`;
    return wrapWithDelimiters ? `\\(${cmd}\\)` : cmd;
  });
}

/**
 * Autocierra bloques $ desbalanceados en intervalos matemáticos conocidos, ej: $(-\infty, 4] -> $(-\infty, 4]$
 */
function autoCloseUnbalancedIntervals(text: string): string {
  return text.replace(
    /(\$(?:\(|\[)[^$\n]*?(?:\\infty|-\s*\\?infty|,\s*[-+]?\d+(?:\.\d+)?)[^$\n]*?(?:\]|\)))(?![$\w])/g,
    '$1$'
  );
}

function balanceMathBraces(code: string): string {
  const countDiff = (str: string) => {
    let open = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '\\') {
        i++;
        continue;
      }
      if (str[i] === '{') open++;
      else if (str[i] === '}') open--;
    }
    return open;
  };

  let diff = countDiff(code);
  if (diff <= 0) return code;

  // Caso común en bancos: \sqrt{expr = resultado (olvidaron cerrar } antes de =)
  let fixed = code.replace(/(\\sqrt\{[^{}=]+?)(\s*=)/g, (_, inner: string, eq: string) => {
    if (diff > 0) {
      diff--;
      return `${inner}}${eq}`;
    }
    return `${inner}${eq}`;
  });

  diff = countDiff(fixed);
  if (diff > 0) {
    fixed += '}'.repeat(diff);
  }
  return fixed;
}

/**
 * Humaniza contenido dentro de delimitadores KaTeX ($...$, \(...\), \[...\]).
 */
function humanizeMathCode(mathCode: string): string {
  let code = replaceSqrtCalls(mathCode, false);
  code = code
    .replace(/<=/g, '\\le ')
    .replace(/>=/g, '\\ge ')
    .replace(/!=/g, '\\neq ')
    .replace(/==>/g, '\\Rightarrow ')
    .replace(/=>/g, '\\Rightarrow ')
    .replace(/->/g, '\\rightarrow ')
    .replace(/(\d+)\s+\*\s+(\d+)/g, '$1 \\times $2')
    .replace(/([A-Za-z0-9)\]}])\s+\*\s+([A-Za-z0-9(\\[{])/g, '$1 \\cdot $2');
  return balanceMathBraces(code.trim());
}

/**
 * Humaniza texto narrativo/mixto fuera de delimitadores KaTeX sin romper
 * fechas (12/05/2026), unidades compuestas (km/h, m/s, mg/dL), razones (24/7)
 * ni viñetas/énfasis markdown (* item, *texto*).
 */
function humanizePlainSegment(segment: string): string {
  if (!segment) return '';
  let out = segment
    // Desescapar \$ en texto plano para mostrar moneda real ($)
    .replace(/\\\$/g, '$')
    // Grados y unidades comunes
    .replace(/(\d+)\s*\^\\?\{?circ\}?/g, '$1°')
    .replace(/\\circ\b/g, '°')
    .replace(/\bcm\^2\b/g, 'cm²')
    .replace(/\bm\^2\b/g, 'm²')
    .replace(/\bkm\^2\b/g, 'km²')
    .replace(/\bs\^2\b/g, 's²')
    .replace(/\bcm\^3\b/g, 'cm³')
    .replace(/\bm\^3\b/g, 'm³')
    // Comparadores y flechas legibles para estudiantes
    .replace(/<=/g, '≤')
    .replace(/>=/g, '≥')
    .replace(/!=/g, '≠')
    .replace(/\s*<->\s*/g, ' ↔ ')
    .replace(/\s*(?:==>|=>)\s*/g, ' ⇒ ')
    .replace(/(?<!<|<!-)\s*->\s*(?!->)/g, ' → ')
    // Multiplicación entre operandos con espacios a ambos lados (no afecta viñetas * ni *énfasis*)
    .replace(/(\d+(?:[.,]\d+)?)\s+\*\s+(\d+(?:[.,]\d+)?)/g, '$1 × $2')
    .replace(/([A-Za-z0-9)\]}°²³])\s+\*\s+([A-Za-z0-9(\\[{√])/g, '$1 · $2')
    // Potencias simples sueltas (x^2, 10^-3, r^4) -> superíndice Unicode
    .replace(/([A-Za-z0-9)\]])\^(-?\d+)\b/g, (_, base: string, exp: string) => `${base}${toUnicodeSuperscript(exp)}`);

  return out;
}

/**
 * Normaliza abreviaciones, caracteres de control y sintaxis matemática legible.
 */
export function normalizeMathText(text: string): string {
  if (!text) return '';

  let normalized = repairControlChars(text);
  normalized = autoCloseUnbalancedIntervals(normalized);

  // Si no hay delimitadores matemáticos explícitos, humanizar sqrt(...) y comandos LaTeX sueltos
  const hasDelimiters =
    /(?<!\\)\$/.test(normalized) || normalized.includes('\\(') || normalized.includes('\\[');

  if (!hasDelimiters) {
    normalized = replaceSqrtCalls(normalized, true);

    // Potencias con llaves sin delimitadores: x^{2n}, e^{-kt} -> \(x^{2n}\)
    normalized = normalized.replace(
      /\b([A-Za-z0-9]+)\^\{([^}]+)\}/g,
      (_, base: string, exp: string) => `\\(${base}^{${exp}}\\)`
    );

    // Si aún no tiene delimitadores y contiene comandos LaTeX sueltos en texto mixto
    if (!normalized.includes('\\(') && !normalized.includes('\\[')) {
      const pureLatexRegex =
        /^\s*[-+]?\\(?:frac|sqrt|pi|emptyset|mathbb|theta|infty|pm|times|approx|alpha|beta|lambda|Delta|leq?|geq?|neq|det|cos|sin|tan|log|ln|vec)\b/;
      if (pureLatexRegex.test(normalized) && !/[áéíóúñ]{2,}\s+[a-záéíóúñ]{3,}/i.test(normalized)) {
        // Será renderizado completo por renderMathToString
        return normalized;
      }

      // Envolver comandos LaTeX sueltos dentro de prosa
      const inlineLatexRegex =
        /\\(?:frac\{[^{}]+\}\{[^{}]+\}|sqrt(?:\[[^\]]+\])?\{[^{}]+\}|vec\{[^{}]+\}|(?:det|cos|sin|tan|log|ln)\([^)]*\)|mathbb\{[A-Z]\}|pi|theta|alpha|beta|lambda|Delta|infty|emptyset|approx|pm|times|cdot|leq?|geq?|neq|rightarrow|Rightarrow)(?![a-zA-Z])/g;
      if (inlineLatexRegex.test(normalized)) {
        normalized = normalized.replace(inlineLatexRegex, (match) => `\\(${match}\\)`);
      }
    }
  } else {
    // Incluso con delimitadores en otra parte del texto, normalizar sqrt(...) fuera de delimitadores
    // se hace por segmentos en renderMathToString; aquí solo normalizamos unidades/grados globales seguros
    normalized = normalized
      .replace(/(\d+)\s*\^\\?\{?circ\}?/g, '$1°')
      .replace(/\\circ\b/g, '°');
  }

  return normalized;
}

function setCache(key: string, value: string): string {
  if (MATH_CACHE.size >= MAX_CACHE_SIZE) {
    const oldestKey = MATH_CACHE.keys().next().value;
    if (oldestKey !== undefined) MATH_CACHE.delete(oldestKey);
  }
  MATH_CACHE.set(key, value);
  return value;
}

function renderKatexSafe(mathCode: string, displayMode: boolean, fallbackRaw: string): string {
  try {
    return katex.renderToString(humanizeMathCode(mathCode), {
      displayMode,
      throwOnError: false,
      trust: false,
      output: 'htmlAndMathml',
    });
  } catch {
    return escapeHtml(fallbackRaw);
  }
}

/**
 * Detecta si un match $...$ es en realidad un par de montos monetarios en prosa
 * (ej. "$4.50 y el descuento es $1.25").
 */
function isCurrencyFalseMatch(inner: string): boolean {
  if (!/^\s*\d+(?:[.,]\d+)?(?:\s+|[,;:.!?)]+\s+)/.test(inner)) return false;
  const hasProseWords = /\s+(?:[yoaeu]|[a-záéíóúñ]{2,})\s+/i.test(inner);
  const hasMathSyntax = /[=+\-*/^\\<>]|\\[a-z]+/i.test(inner);
  return hasProseWords && !hasMathSyntax;
}

function renderPlainChunk(chunk: string): string {
  if (!chunk) return '';
  if (!chunk.includes('sqrt(')) {
    return escapeHtml(humanizePlainSegment(chunk));
  }
  const sqrtRegex = /\bsqrt\(((?:[^()]+|\([^()]*\))+)\)/g;
  const out: string[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = sqrtRegex.exec(chunk)) !== null) {
    if (m.index > last) {
      out.push(escapeHtml(humanizePlainSegment(chunk.slice(last, m.index))));
    }
    out.push(renderKatexSafe(`\\sqrt{${m[1].trim()}}`, false, m[0]));
    last = m.index + m[0].length;
  }
  if (last < chunk.length) {
    out.push(escapeHtml(humanizePlainSegment(chunk.slice(last))));
  }
  return out.join('');
}

/**
 * Renderiza texto mixto (Texto plano + Fórmulas KaTeX $...$, $$...$$, \(...\), \[...\])
 * con caché de resultados LRU para ejecución instantánea.
 */
export function renderMathToString(text: string, defaultDisplayMode = false): string {
  if (!text) return '';

  const cacheKey = defaultDisplayMode ? `D:${text}` : text;
  const cached = MATH_CACHE.get(cacheKey);
  if (cached !== undefined) {
    return cached;
  }

  // RUTA RÁPIDA: Textos puramente narrativos sin indicadores matemáticos ni caracteres de control
  const needsProcessing =
    text.includes('$') ||
    text.includes('\\') ||
    text.includes('^') ||
    text.includes('<=') ||
    text.includes('>=') ||
    text.includes('!=') ||
    text.includes('->') ||
    text.includes('=>') ||
    text.includes('sqrt(') ||
    text.includes(' * ') ||
    /[\u0007\u0008\u000b\u000c]/.test(text) ||
    /\u0009(?:extbf|extit|extrm|ext|imes|heta|au|anh|an|ilde|riangle|op|o(?=\s|\\|[0-9({\[$]|$))/.test(
      text
    );

  if (!needsProcessing) {
    return setCache(cacheKey, escapeHtml(text));
  }

  const processed = normalizeMathText(text);

  const hasDelimiters =
    /(?<!\\)\$/.test(processed) || processed.includes('\\(') || processed.includes('\\[');

  // Si todo el texto es una expresión LaTeX pura sin delimitadores
  if (
    !hasDelimiters &&
    /^\s*[-+]?\\(?:frac|sqrt|pi|emptyset|mathbb|theta|infty|pm|times|approx|alpha|beta|lambda|Delta|leq?|geq?|neq|det|cos|sin|tan|log|ln|vec)\b/.test(
      processed
    ) &&
    !/[áéíóúñ]{2,}\s+[a-záéíóúñ]{3,}/i.test(processed)
  ) {
    return setCache(cacheKey, renderKatexSafe(processed.trim(), defaultDisplayMode, processed));
  }

  // Expresión regular unificada: $$...$$, \[...\], \(...\\?\), o $...$ (respetando \$)
  const regex = /(\$\$[\s\S]*?\$\$)|(\\\[[\s\S]*?\\\])|(\\\([\s\S]*?\\\\?\))|((?<!\\)\$[^\$\n]+?(?<!\\)\$)/g;
  const parts: string[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(processed)) !== null) {
    const rawMatch = match[0];

    // Guard contra falsos positivos monetarios como "$4.50 y $1.25"
    if (
      rawMatch.startsWith('$') &&
      !rawMatch.startsWith('$$') &&
      isCurrencyFalseMatch(rawMatch.slice(1, -1))
    ) {
      // Emitir hasta después del primer monto monetario y seguir escaneando desde ahí
      const firstTokenEnd = rawMatch.indexOf(' ', 1);
      const emitEnd = firstTokenEnd > 0 ? match.index + firstTokenEnd : match.index + 1;
      const chunk = processed.slice(lastIndex, emitEnd);
      parts.push(escapeHtml(humanizePlainSegment(replaceSqrtCalls(chunk, false))));
      lastIndex = emitEnd;
      regex.lastIndex = emitEnd;
      continue;
    }

    if (match.index > lastIndex) {
      const textChunk = processed.slice(lastIndex, match.index);
      parts.push(renderPlainChunk(textChunk));
    }

    let mathCode = '';
    let isBlock = defaultDisplayMode;

    if (rawMatch.startsWith('$$') && rawMatch.endsWith('$$')) {
      mathCode = rawMatch.slice(2, -2).trim();
      isBlock = true;
    } else if (rawMatch.startsWith('\\[') && rawMatch.endsWith('\\]')) {
      mathCode = rawMatch.slice(2, -2).trim();
      isBlock = true;
    } else if (rawMatch.startsWith('\\(')) {
      mathCode = rawMatch.slice(2).replace(/\\*\)$/, '').trim();
      isBlock = false;
    } else if (rawMatch.startsWith('$') && rawMatch.endsWith('$')) {
      mathCode = rawMatch.slice(1, -1).trim();
    }

    parts.push(renderKatexSafe(mathCode, isBlock, rawMatch));
    lastIndex = match.index + rawMatch.length;
  }

  if (lastIndex < processed.length) {
    parts.push(renderPlainChunk(processed.slice(lastIndex)));
  }

  return setCache(cacheKey, parts.join(''));
}

export interface KaTeXMathProps {
  text: string;
  className?: string;
  displayMode?: boolean;
}

/**
 * Componente KaTeX memoizado para renderizar expresiones matemáticas con alta eficiencia.
 */
export const MathText: React.FC<KaTeXMathProps> = React.memo(
  ({ text, className = '', displayMode = false }) => {
    const renderedHtml = useMemo(
      () => renderMathToString(text, displayMode),
      [text, displayMode]
    );

    return (
      <span
        className={`inline-block max-w-full min-w-0 break-words overflow-x-auto overflow-y-hidden align-middle scrollbar-none touch-scroll ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }
);

MathText.displayName = 'MathText';

export const KaTeXMath = MathText;
