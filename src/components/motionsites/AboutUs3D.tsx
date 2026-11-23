import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutUs3DProps {
  onLearnMoreAction: () => void;
}

export const AboutUs3D: React.FC<AboutUs3DProps> = ({ onLearnMoreAction }) => {
  return (
    <section className="py-14 sm:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <style>{`
        @keyframes kuskatLogoSpin3D {
          0% { transform: rotateX(6deg) rotateY(0deg); }
          50% { transform: rotateX(-6deg) rotateY(180deg); }
          100% { transform: rotateX(6deg) rotateY(360deg); }
        }
        .kuskat-3d-stage {
          perspective: 900px;
        }
        .kuskat-3d-spinner {
          transform-style: preserve-3d;
          animation: kuskatLogoSpin3D 12s linear infinite;
          will-change: transform;
        }
        .kuskat-3d-spinner:hover {
          animation-play-state: paused;
        }
        .kuskat-3d-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .kuskat-3d-face-back {
          transform: rotateY(180deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .kuskat-3d-spinner {
            animation: none;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Logo 3D girando con CSS 3D sobre fondo blanco/slate */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[300px] sm:h-[400px] rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden kuskat-3d-stage">
              {/* Halo ambiental sutil */}
              <div
                aria-hidden="true"
                className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-blue-100/70 via-transparent to-amber-100/60 blur-2xl pointer-events-none"
              />
              {/* Anillo orbital decorativo */}
              <div
                aria-hidden="true"
                className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed border-blue-200/70 pointer-events-none"
              />
              <div className="relative w-44 h-48 sm:w-52 sm:h-56 kuskat-3d-spinner">
                <div className="absolute inset-0 flex items-center justify-center kuskat-3d-face">
                  <img
                    src="/kuskat_logo.png"
                    alt="Emblema 3D KUSKAT"
                    width={208}
                    height={224}
                    decoding="async"
                    className="w-full h-full object-contain drop-shadow-md select-none"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center kuskat-3d-face kuskat-3d-face-back">
                  <img
                    src="/kuskat_logo.png"
                    alt=""
                    aria-hidden="true"
                    width={208}
                    height={224}
                    decoding="async"
                    className="w-full h-full object-contain drop-shadow-md select-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Información y Filosofía */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-caslon tracking-micro uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Sobre Nosotros
            </div>

            <h2 className="font-montenegrin text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-wide leading-tight">
              Democratizando el Acceso a la Educación Superior en El Salvador
            </h2>

            <p className="font-caslon text-sm sm:text-lg text-slate-600 font-normal leading-relaxed tracking-editorial">
              KUSKAT nació con el compromiso de que ningún estudiante salvadoreño se quede sin oportunidad de ingresar a la universidad, ascender en su carrera docente o alcanzar una beca académica por falta de preparación de calidad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0 mt-0.5 border border-blue-200">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-montenegrin text-sm sm:text-base text-slate-900">
                    Rigor y Verificación
                  </h4>
                  <p className="font-caslon text-xs text-slate-600 tracking-editorial mt-0.5 sm:mt-1">
                    Cada reactivo cuenta con justificación analítica, referencias normativas oficiales y fórmulas KaTeX legibles.
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5 border border-emerald-200">
                  <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-montenegrin text-sm sm:text-base text-slate-900">
                    Acceso Libre y Universal
                  </h4>
                  <p className="font-caslon text-xs text-slate-600 tracking-editorial mt-0.5 sm:mt-1">
                    Diseñado para funcionar sin barreras en todos los dispositivos, con tipografía editorial de alta legibilidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Botón CTA con logo original de KUSKAT */}
            <div className="pt-2">
              <button
                onClick={onLearnMoreAction}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-caslon text-xs sm:text-sm font-bold tracking-micro uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer min-h-[48px]"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white p-0.5 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="/kuskat_logo.png"
                    alt="Logo KUSKAT"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="truncate">Conoce el Banco Maestro de Reactivos</span>
                <span className="text-sm sm:text-base">➔</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
