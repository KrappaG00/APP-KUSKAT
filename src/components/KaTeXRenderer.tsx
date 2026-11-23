import React, { useMemo } from 'react';
import { renderMathToString } from '../utils/mathRenderer';

interface KaTeXRendererProps {
  content: string;
  className?: string;
  displayMode?: boolean;
}

export const KaTeXRenderer: React.FC<KaTeXRendererProps> = React.memo(
  ({ content, className = '', displayMode = false }) => {
    const renderedHtml = useMemo(
      () => renderMathToString(content, displayMode),
      [content, displayMode]
    );

    return (
      <span
        className={`inline-block max-w-full min-w-0 break-words overflow-x-auto overflow-y-hidden align-middle scrollbar-none touch-scroll ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }
);

KaTeXRenderer.displayName = 'KaTeXRenderer';
