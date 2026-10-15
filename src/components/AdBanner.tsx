import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  /**
   * Identificador del bloque de anuncios de Google AdSense (opcional).
   * Si no se especifica, utiliza anuncios automáticos adaptativos.
   */
  slot?: string;
  /**
   * Formato del anuncio ('auto', 'horizontal', 'rectangle', 'fluid').
   */
  format?: 'auto' | 'horizontal' | 'rectangle' | 'fluid';
  /**
   * Si debe ser adaptable en ancho.
   */
  responsive?: boolean;
  /**
   * Clases CSS adicionales para el contenedor.
   */
  className?: string;
  /**
   * Etiqueta sutil para cumplimiento de políticas de AdSense ('Publicidad' o 'Patrocinado').
   */
  label?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  label = 'Publicidad',
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef<boolean>(false);

  useEffect(() => {
    // Evitar múltiples llamadas en el mismo montaje o re-render
    if (pushedRef.current) return;

    try {
      if (typeof window !== 'undefined') {
        const adsbygoogle = ((window as any).adsbygoogle = (window as any).adsbygoogle || []);
        adsbygoogle.push({});
        pushedRef.current = true;
      }
    } catch {
      // Manejo silencioso: común en bloqueadores de anuncios o recargas SPA
    }
  }, []);

  return (
    <div
      className={`w-full max-w-4xl mx-auto my-4 p-2.5 rounded-2xl border border-slate-200/70 bg-slate-50/60 shadow-2xs transition-all ${className}`}
      aria-label="Espacio publicitario"
    >
      {/* Cabecera sutil y no invasiva para cumplimiento de políticas */}
      <div className="flex items-center justify-between px-2 pb-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-200/40">
        <span>{label}</span>
        <span className="opacity-60 text-[9px]">KUSKAT • Estudio Gratuito</span>
      </div>

      {/* Contenedor oficial de Google AdSense */}
      <div className="pt-2 flex justify-center items-center overflow-hidden min-h-[90px]">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client="ca-pub-4241045160320459"
          data-ad-slot={slot || undefined}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </div>
  );
};
