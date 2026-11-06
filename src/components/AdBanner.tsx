import React, { useEffect, useRef, useState } from 'react';

export interface AdBannerProps {
  slotId?: string;
  className?: string;
  variant?: 'light' | 'dark';
  positionLabel?: string;
  /**
   * Google AdSense Policy Compliance & Content Guard Props:
   * Protege contra la colocación de anuncios en pantallas sin contenido sustantivo,
   * estados de carga (loading), búsquedas vacías, errores o modales sin valor editorial.
   */
  hasPublisherContent?: boolean;
  isLoading?: boolean;
  isEmpty?: boolean;
  minSubstantiveWords?: number;
  contentSnippet?: string;
}

/**
 * Cuenta palabras sustantivas excluyendo marcado KaTeX, etiquetas HTML y caracteres no textuales.
 */
export const countSubstantiveWords = (text?: string): number => {
  if (!text || typeof text !== 'string') return 0;
  const clean = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$]*?\$/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[^\w\sáéíóúüñÁÉÍÓÚÜÑ]/g, ' ')
    .trim();
  if (!clean) return 0;
  const words = clean.split(/\s+/).filter((w) => w.length > 1);
  return words.length;
};

/**
 * AdBanner — Componente de anuncio horizontal delgado y no invasivo para Google AdSense
 * Equipado con compuertas de seguridad pedagógica y cumplimiento de directrices de AdSense
 * (Inventory Value: No Content & Low-Value Content Guard).
 */
export const AdBanner: React.FC<AdBannerProps> = ({
  slotId = '4241045160',
  className = '',
  variant = 'light',
  positionLabel,
  hasPublisherContent = true,
  isLoading = false,
  isEmpty = false,
  minSubstantiveWords = 15,
  contentSnippet,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const adRef = useRef<HTMLModElement | null>(null);
  const [isSuppressedByDom, setIsSuppressedByDom] = useState(false);

  // 1. Evaluación preventiva de compuertas de contenido sustantivo
  const wordCount = contentSnippet !== undefined ? countSubstantiveWords(contentSnippet) : 0;
  const isBelowWordThreshold = contentSnippet !== undefined && wordCount < minSubstantiveWords;

  const isGuardedOut =
    isLoading === true ||
    isEmpty === true ||
    hasPublisherContent === false ||
    isBelowWordThreshold ||
    isSuppressedByDom;

  useEffect(() => {
    // Si la compuerta rechaza el renderizado, NUNCA empujar anuncio a adsbygoogle
    if (isGuardedOut) {
      return;
    }

    // 2. Verificación programática en el DOM:
    // Asegurar que el anuncio jamás se monte en modales puros, alertas, resultados vacíos o contenedores ocultos
    const container = containerRef.current;
    if (container && typeof window !== 'undefined') {
      const isInsideModal = Boolean(
        container.closest(
          '[role="dialog"], [role="alert"], [aria-modal="true"], .modal, .modal-overlay, [data-is-modal="true"]'
        )
      );
      const isInsideEmptyState = Boolean(
        container.closest('[data-empty-state="true"], [data-empty="true"], .empty-state')
      );
      const isInsideLoading = Boolean(
        container.closest('[data-loading="true"], .animate-pulse')
      );
      const isHidden = container.offsetParent === null && container.offsetWidth === 0 && container.offsetHeight === 0;

      // Evaluar si la página en su totalidad aún no tiene contenido sustantivo (>50 palabras)
      const pageText = typeof document !== 'undefined' && document.body ? document.body.innerText || '' : '';
      const totalWords = countSubstantiveWords(pageText);
      const isPageUnderpopulated = totalWords < 50;

      if (isInsideModal || isInsideEmptyState || isInsideLoading || isHidden || isPageUnderpopulated) {
        setIsSuppressedByDom(true);
        return;
      }
    }

    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      // Silencioso ante bloqueadores de anuncios o entornos de desarrollo local
    }
  }, [isGuardedOut]);

  // Si no hay contenido sustantivo o las compuertas están activadas, retornar null
  if (isGuardedOut) {
    return null;
  }

  const isDark = variant === 'dark';

  return (
    <aside
      ref={containerRef}
      role="complementary"
      aria-label="Publicidad patrocinada por Google Ads"
      data-position={positionLabel}
      className={`w-full max-w-5xl mx-auto my-3 px-2 sm:px-0 transition-all ${className}`}
      data-ad-component="kuskat-horizontal-ad"
    >
      <div
        className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl border transition-colors shadow-2xs ${
          isDark
            ? 'bg-slate-900/60 border-slate-800 text-slate-400'
            : 'bg-white/95 border-slate-200/80 text-slate-500'
        }`}
      >
        {/* Cabecera sutil oficial con texto exacto requerido */}
        <div className="w-full flex items-center justify-between px-1 pb-0.5 text-[9px] font-bold tracking-wider uppercase opacity-70 select-none">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse" />
            <span>ANUNCIO PATROCINADO POR GOOGLE ADS</span>
          </span>
          <span className="text-[8px] font-semibold opacity-60 uppercase tracking-widest">Publicidad</span>
        </div>

        {/* Contenedor del anuncio horizontal delgado */}
        <div className="w-full flex items-center justify-center min-h-[45px] sm:min-h-[50px] max-h-[65px] overflow-hidden relative">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '50px' }}
            data-ad-client="ca-pub-4241045160320459"
            data-ad-slot={slotId}
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          />

          {/* Placeholder sutil para cuando no se carga el script o en modo sin conexión */}
          <div className="ad-fallback-placeholder absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-60">
            <span className="text-[10px] font-medium tracking-tight">
              Google Ads • Formato Horizontal Responsivo
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
