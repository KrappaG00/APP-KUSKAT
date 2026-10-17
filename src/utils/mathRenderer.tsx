import React, { useMemo } from 'react';
import katex from 'katex';

/**
 * APP-KUSKAT • MOTOR DE RENDERIZADO ULTRA-RÁPIDO KATEX CON CACHÉ LRU
 *
 * Optimizaciones clave:
 * 1. Ruta Rápida (Fast Path): Textos sin sintaxis matemática se devuelven en O(1) sin regex ni parser.
 * 2. Caché en Memoria (LRU): Resultados de KaTeX cacheados en un Map de alto rendimiento.
 * 3. React.memo: Evita re-renders innecesarios en listas, tablas y reactivos masivos.
 */

const MATH_CACHE = new Map<string, string>();
const MAX_CACHE_SIZE = 3000;

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Normaliza abreviaciones y símbolos comunes de unidades y potencias.
 */
export function normalizeMathText(text: string): string {
  if (!text) return '';
  return text
    .replace(/(\d+)\s*\^\\?\{?circ\}?/g, '$1°')
    .replace(/\\circ\b/g, '°')
    .replace(/\\u0007pprox/g, '\\approx')
    .replace(/\\u000bec/g, '\\vec')
    .replace(/\bcm\^2\b/g, 'cm²')
    .replace(/\bm\^2\b/g, 'm²')
    .replace(/\bkm\^2\b/g, 'km²');
}

/**
 * Renderiza texto mixto (HTML/Texto plano + Fórmulas KaTeX $...$ o $$...$$)
 * con caché de resultados para ejecución instantánea.
 */
export function renderMathToString(text: string): string {
  if (!text) return '';

  // 1. Verificación en caché previa
  const cached = MATH_CACHE.get(text);
  if (cached !== undefined) {
    return cached;
  }

  // 2. RUTA RÁPIDA: Si el texto no contiene delimitadores matemáticos ni barras invertidas
  const hasMathSymbols =
    text.includes('$') ||
    text.includes('\\(') ||
    text.includes('\\[') ||
    text.includes('\\frac') ||
    text.includes('\\sqrt') ||
    text.includes('^');

  if (!hasMathSymbols) {
    const escaped = escapeHtml(text);
    if (MATH_CACHE.size >= MAX_CACHE_SIZE) {
      const oldestKey = MATH_CACHE.keys().next().value;
      if (oldestKey) MATH_CACHE.delete(oldestKey);
    }
    MATH_CACHE.set(text, escaped);
    return escaped;
  }

  // 3. Normalizar
  const processed = normalizeMathText(text);

  // 4. Detección automática si todo el texto es una fórmula sin delimitadores
  const hasDelimiters =
    processed.includes('$') || processed.includes('\\(') || processed.includes('\\[');

  if (
    !hasDelimiters &&
    /^\s*[-+]?\\(?:frac|sqrt|pi|emptyset|mathbb|theta|infty|pm|times|approx|alpha|beta|lambda|Delta|leq|geq|neq)/.test(
      processed
    )
  ) {
    try {
      const rendered = katex.renderToString(processed.trim(), {
        displayMode: false,
        throwOnError: false,
        trust: false,
        output: 'htmlAndMathml',
      });
      if (MATH_CACHE.size >= MAX_CACHE_SIZE) {
        const oldestKey = MATH_CACHE.keys().next().value;
        if (oldestKey) MATH_CACHE.delete(oldestKey);
      }
      MATH_CACHE.set(text, rendered);
      return rendered;
    } catch {
      const escaped = escapeHtml(processed);
      MATH_CACHE.set(text, escaped);
      return escaped;
    }
  }

  // 5. Expresión regular para bloques y fórmulas en línea
  const regex = /(\$\$[\s\S]*?\$\$)|(\$[^\$\n]+?\$)|(\\\[[\s\S]*?\\\])|(\\\([\s\S]*?\\\\?\))/g;
  const parts: string[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(processed)) !== null) {
    if (match.index > lastIndex) {
      parts.push(escapeHtml(processed.slice(lastIndex, match.index)));
    }

    const rawMatch = match[0];
    let mathCode = '';
    let isBlock = false;

    if (rawMatch.startsWith('$$') && rawMatch.endsWith('$$')) {
      mathCode = rawMatch.slice(2, -2).trim();
      isBlock = true;
    } else if (rawMatch.startsWith('$') && rawMatch.endsWith('$')) {
      mathCode = rawMatch.slice(1, -1).trim();
    } else if (rawMatch.startsWith('\\[') && rawMatch.endsWith('\\]')) {
      mathCode = rawMatch.slice(2, -2).trim();
      isBlock = true;
    } else if (rawMatch.startsWith('\\(') && rawMatch.endsWith('\\)')) {
      mathCode = rawMatch.slice(2, -2).trim();
    }

    try {
      const html = katex.renderToString(mathCode, {
        displayMode: isBlock,
        throwOnError: false,
        trust: false,
        output: 'htmlAndMathml',
      });
      parts.push(html);
    } catch {
      parts.push(escapeHtml(rawMatch));
    }

    lastIndex = match.index + rawMatch.length;
  }

  if (lastIndex < processed.length) {
    parts.push(escapeHtml(processed.slice(lastIndex)));
  }

  const result = parts.join('');

  if (MATH_CACHE.size >= MAX_CACHE_SIZE) {
    const oldestKey = MATH_CACHE.keys().next().value;
    if (oldestKey) MATH_CACHE.delete(oldestKey);
  }
  MATH_CACHE.set(text, result);

  return result;
}

export interface KaTeXMathProps {
  text: string;
  className?: string;
}

/**
 * Componente KaTeX memoizado para renderizar expresiones matemáticas con alta eficiencia.
 */
export const MathText: React.FC<KaTeXMathProps> = React.memo(({ text, className = '' }) => {
  const renderedHtml = useMemo(() => renderMathToString(text), [text]);

  return (
    <span
      className={`inline-block max-w-full overflow-x-auto align-middle scrollbar-none touch-scroll ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
});

MathText.displayName = 'MathText';

export const KaTeXMath = MathText;
