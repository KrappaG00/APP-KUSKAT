import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CallToActionFinal3DProps {
  onStartJourney: () => void;
}

export const CallToActionFinal3D: React.FC<CallToActionFinal3DProps> = ({ onStartJourney }) => {
  const [isZooming, setIsZooming] = useState(false);

  const handleClick = () => {
    setIsZooming(true);
    setTimeout(() => {
      onStartJourney();
    }, 500);
  };

  return (
    <section className="relative py-16 sm:py-28 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden text-center">
      {/* Luces decorativas sutiles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Píldora de lanzamiento */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-[10px] sm:text-xs font-caslon tracking-micro uppercase mb-4 sm:mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Educación Transformadora • El Salvador
        </div>

        {/* Logo original de KUSKAT */}
        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-white p-2.5 sm:p-3 shadow-2xl border border-white/30 mb-4 sm:mb-6 flex items-center justify-center overflow-hidden animate-float-slow">
          <img
            src="/kuskat_logo.png"
            alt="Logo KUSKAT"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Nombre KUSKAT en Montenegrin Gothic One */}
        <h2 className="font-montenegrin text-4xl sm:text-7xl lg:text-8xl text-white tracking-wide select-none drop-shadow-md">
          KUSKAT
        </h2>

        {/* Subtítulo en Libre Caslon Condensed */}
        <p className="font-caslon text-base sm:text-2xl text-slate-100 tracking-editorial font-medium max-w-2xl mt-3 sm:mt-4 leading-relaxed px-2">
          Tu puerta de entrada a la universidad y al éxito profesional. Más de 17,600 reactivos oficiales listos para tu preparación.
        </p>
        <p className="font-caslon text-xs sm:text-base text-slate-300 tracking-editorial mt-1.5 sm:mt-2 px-2">
          Preparación con los estándares y temarios del MINED, la UES, ANSP y Jóvenes Talento.
        </p>

        {/* Botón 3D en verde éxito con texto blanco y flotación continua */}
        <div className="mt-8 sm:mt-10 perspective-800 w-full sm:w-auto flex justify-center">
          <button
            onClick={handleClick}
            className={`relative group px-6 sm:px-10 py-3.5 sm:py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-caslon text-base sm:text-xl font-bold tracking-micro uppercase shadow-2xl border border-emerald-400/40 transition-all duration-300 animate-float-slow cursor-pointer flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto max-w-sm ${
              isZooming ? 'scale-150 opacity-0 transition-all duration-500' : 'hover:scale-105'
            }`}
          >
            <span className="truncate">Comienza tu viaje educativo</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>

        {/* Metadatos al pie */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 mt-8 sm:mt-12 text-[11px] sm:text-xs font-caslon text-slate-400 tracking-editorial px-2">
          <span>✓ 100% Gratuito y de Acceso Abierto</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Solucionarios KaTeX Comentados</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Exportador LaTeX para Overleaf</span>
        </div>
      </div>
    </section>
  );
};
