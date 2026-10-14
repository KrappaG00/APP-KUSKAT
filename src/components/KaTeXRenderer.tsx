import React, { useMemo } from 'react';
import katex from 'katex';

interface KaTeXRendererProps {
  content: string;
  className?: string;
  displayMode?: boolean;
}

export const KaTeXRenderer: React.FC<KaTeXRendererProps> = ({
  content,
  className = '',
  displayMode = false,
}) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    // 1. Humanize degree notation to natural human language: 45^\circ -> 45°
    let text = content
      .replace(/(\d+)\s*\^\\?\{?circ\}?/g, '$1°')
      .replace(/\\circ\b/g, '°')
      .replace(/\\u0007pprox/g, '\\approx')
      .replace(/\\u000bec/g, '\\vec')
      .replace(/\bcm\^2\b/g, 'cm²')
      .replace(/\bm\^2\b/g, 'm²')
      .replace(/\bkm\^2\b/g, 'km²')
      .replace(/\bcm\^3\b/g, 'cm³')
      .replace(/\bm\^3\b/g, 'm³');

    // 2. If the text has no math delimiters ($ or \( or \[), but contains raw LaTeX math commands:
    const hasDelimiters = text.includes('$') || text.includes('\\(') || text.includes('\\[');
    if (!hasDelimiters) {
      // If the string starts with or is purely a LaTeX math expression (e.g. \frac{2}{3}, \sqrt{2}, -\sqrt{16}, \pi, \emptyset)
      if (/^\s*[-+]?\\(?:frac|sqrt|pi|emptyset|mathbb|theta|infty|pm|times|approx|alpha|beta|lambda|Delta|leq|geq|neq)/.test(text)) {
        try {
          return katex.renderToString(text.trim(), {
            displayMode: displayMode,
            throwOnError: false,
            output: 'htmlAndMathml',
          });
        } catch {
          // fallback
        }
      } else if (/\\(?:frac\{[^{}]+\}\{[^{}]+\}|sqrt(?:\[[^\]]+\])?\{[^{}]+\}|pi|theta|alpha|beta|infty|emptyset|mathbb\{[A-Z]\})/.test(text)) {
        // Wrap standalone inline latex commands so the regex below parses them
        text = text.replace(
          /\\(?:frac\{[^{}]+\}\{[^{}]+\}|sqrt(?:\[[^\]]+\])?\{[^{}]+\}|pi|theta|alpha|beta|infty|emptyset|mathbb\{[A-Z]\})/g,
          (match) => `\\(${match}\\)`
        );
      }
    }

    // Regex to match \[...\], \(...\), $$...$$, or $...$
    const parts: string[] = [];
    let lastIndex = 0;

    const regex = /(\\\[[\s\S]*?\\\])|(\\\([\s\S]*?\\\\?\))|(\$\$[\s\S]*?\$\$)|(\$[^\$\n]+?\$)/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const textChunk = text.slice(lastIndex, match.index);
        parts.push(escapeHtml(textChunk));
      }

      const matchedString = match[0];
      let mathCode = '';
      let isBlock = displayMode;

      if (matchedString.startsWith('\\[') && matchedString.endsWith('\\]')) {
        mathCode = matchedString.slice(2, -2).trim();
        isBlock = true;
      } else if (matchedString.startsWith('\\(')) {
        mathCode = matchedString.slice(2).replace(/\\*\)$/, '').trim();
        isBlock = false;
      } else if (matchedString.startsWith('$$') && matchedString.endsWith('$$')) {
        mathCode = matchedString.slice(2, -2).trim();
        isBlock = true;
      } else if (matchedString.startsWith('$') && matchedString.endsWith('$')) {
        mathCode = matchedString.slice(1, -1).trim();
        isBlock = false;
      }

      try {
        const rendered = katex.renderToString(mathCode, {
          displayMode: isBlock,
          throwOnError: false,
          output: 'htmlAndMathml',
        });
        parts.push(rendered);
      } catch {
        parts.push(escapeHtml(matchedString));
      }

      lastIndex = match.index + matchedString.length;
    }

    if (lastIndex < text.length) {
      parts.push(escapeHtml(text.slice(lastIndex)));
    }

    return parts.join('');
  }, [content, displayMode]);

  return (
    <span
      className={`inline-block max-w-full overflow-x-auto overflow-y-hidden align-middle scrollbar-none touch-scroll ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
