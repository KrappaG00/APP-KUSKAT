import React, { useEffect, useRef } from 'react';
import type { AppPageTab } from './HeaderNavbar';

export interface LateralAdRailsProps {
  activeTab: AppPageTab;
  children: React.ReactNode;
}

interface SideRailAdProps {
  side: 'left' | 'right';
  slotId: string;
}

/**
 * SideRailAd — Componente de anuncio vertical (Skyscraper) para rieles laterales en PC y laptops.
 * Cumple estrictamente con las políticas de Google AdSense (ca-pub-4241045160320459)
 * y mantiene la leyenda oficial requerida.
 */
const SideRailAd: React.FC<SideRailAdProps> = ({ side, slotId }) => {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      // Silencioso ante bloqueadores de anuncios o entornos offline de desarrollo
    }
  }, []);

  return (
    <aside
      role="complementary"
      aria-label={`Publicidad patrocinada lateral ${side === 'left' ? 'izquierda' : 'derecha'}`}
      className="w-full flex flex-col items-center select-none"
      data-ad-component="kuskat-lateral-skyscraper"
    >
      <div className="w-full bg-white/95 rounded-2xl border border-slate-200/90 shadow-corporate-subtle p-2 flex flex-col items-center">
        {/* Cabecera sutil del anuncio */}
        <div className="w-full flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 text-[8.5px] font-bold tracking-wider uppercase text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse" />
            <span className="truncate">GOOGLE ADS</span>
          </span>
          <span className="text-[7.5px] text-slate-400 font-mono">LATERAL</span>
        </div>

        {/* Leyenda oficial completa */}
        <p className="text-[7px] font-bold text-slate-400 tracking-tighter uppercase text-center pb-1">
          ANUNCIO PATROCINADO POR GOOGLE ADS
        </p>

        {/* Contenedor vertical Skyscraper */}
        <div className="w-full min-h-[500px] max-h-[620px] rounded-xl bg-slate-50/70 border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '500px' }}
            data-ad-client="ca-pub-4241045160320459"
            data-ad-slot={slotId}
            data-ad-format="vertical"
            data-full-width-responsive="false"
          />

          {/* Placeholder sutil para cuando no se carga el script o modo offline */}
          <div className="ad-rail-fallback absolute inset-0 flex flex-col items-center justify-center p-3 text-center text-slate-400 pointer-events-none -z-10">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-2">
              <span className="text-xs font-bold text-slate-400">Ad</span>
            </div>
            <span className="text-[10px] font-bold text-slate-500">KUSKAT Sponsor</span>
            <span className="text-[8px] text-slate-400 leading-tight mt-1">
              Espacio publicitario exterior para financiamiento de estudios
            </span>
          </div>
        </div>

        {/* Pie sutil del patrocinador */}
        <span className="text-[8px] text-slate-400 mt-2 font-mono">
          Riel {side === 'left' ? 'Izquierdo' : 'Derecho'}
        </span>
      </div>
    </aside>
  );
};

/**
 * LateralAdRails — Envoltorio de layout para PC/Laptop.
 * 
 * Reglas de Arquitectura:
 * 1. En la página 'categories' (CATEGORÍAS): NO se montan rieles laterales, devolviendo
 *    únicamente el contenido central para preservar el diseño nativo y cumplir con la
 *    solicitud expresa del usuario.
 * 2. En las demás páginas y en pantallas de PC/Laptop (xl+): Muestra columnas publicitarias
 *    laterales exteriores flotantes (sticky), manteniendo la línea central de estudio
 *    completamente despejada e ininterrumpida.
 * 3. En pantallas móviles y tablets (< xl): Se ocultan los rieles para otorgar el 100%
 *    del ancho al contenido pedagógico.
 */
export const LateralAdRails: React.FC<LateralAdRailsProps> = ({ activeTab, children }) => {
  // EXCEPCIÓN ESTRICTA: La página 'categories' no lleva anuncios laterales
  const isCategoriesPage = activeTab === 'categories';

  if (isCategoriesPage) {
    return (
      <div className="w-full flex-1 min-w-0">
        {children}
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-hidden flex justify-center items-start gap-3 xl:gap-4 2xl:gap-6 min-w-0">
      {/* Riel Lateral Izquierdo (PC / Laptop xl+) */}
      <div className="hidden xl:flex flex-col items-center w-32 2xl:w-40 shrink-0 sticky top-28 z-10 self-start pt-2">
        <SideRailAd side="left" slotId="4241045160_rail_l" />
      </div>

      {/* Contenedor Central de Estudio (Línea Principal Limpia) */}
      <div className="flex-1 min-w-0 max-w-5xl 2xl:max-w-6xl w-full">
        {children}
      </div>

      {/* Riel Lateral Derecho (PC / Laptop xl+) */}
      <div className="hidden xl:flex flex-col items-center w-32 2xl:w-40 shrink-0 sticky top-28 z-10 self-start pt-2">
        <SideRailAd side="right" slotId="4241045160_rail_r" />
      </div>
    </div>
  );
};
