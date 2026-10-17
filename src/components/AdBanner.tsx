import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  slotId?: string;
  className?: string;
  variant?: 'light' | 'dark';
  positionLabel?: string;
}

/**
 * AdBanner — Componente de anuncio horizontal delgado y no invasivo para Google AdSense
 * Diseñado específicamente para no obstruir la experiencia de estudio en KUSKAT.
 */
export const AdBanner: React.FC<AdBannerProps> = ({
  slotId = '4241045160',
  className = '',
  variant = 'light',
  positionLabel,
}) => {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      // Silencioso ante bloqueadores de anuncios o entornos de desarrollo local
    }
  }, []);

  const isDark = variant === 'dark';

  return (
    <aside
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
