import React, { useState } from 'react';
import { DepartmentData } from './data/departmentsData';
import { ParticleLoader } from './ParticleLoader';
import { ElSalvadorMap3D } from './ElSalvadorMap3D';
import { DepartmentSidePanel } from './DepartmentSidePanel';
import { Courses3DSection } from './Courses3DSection';
import { StatsAndCharts3D } from './StatsAndCharts3D';
import { AboutUs3D } from './AboutUs3D';
import { CallToActionFinal3D } from './CallToActionFinal3D';
import { CustomCursor3D } from './CustomCursor3D';
import { FloatingParticlesBackground } from './FloatingParticlesBackground';
import { Institution } from '../../data';
import {
  Layers,
  ArrowRight,
  Phone,
  Instagram,
  Rocket,
} from 'lucide-react';

interface MotionSitesPortalProps {
  onEnterSimulator: (institution?: Institution) => void;
  onOpenCategories: () => void;
}

export const MotionSitesPortal: React.FC<MotionSitesPortalProps> = ({
  onEnterSimulator,
  onOpenCategories,
}) => {
  // Estado del loader inicial de partículas 3D (persistido en localStorage para no repetir atrasos)
  const [showLoader, setShowLoader] = useState<boolean>(() => {
    try {
      return localStorage.getItem('kuskat_3d_loader_seen') !== 'true';
    } catch {
      return false;
    }
  });

  const handleLoaderComplete = () => {
    try {
      localStorage.setItem('kuskat_3d_loader_seen', 'true');
    } catch (e) {
      console.warn(e);
    }
    setShowLoader(false);
  };

  // Estado del departamento seleccionado en el mapa 3D
  const [selectedDept, setSelectedDept] = useState<DepartmentData | null>(null);

  // Transición 3D de salida
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const triggerStudyTransition = (inst?: Institution) => {
    setIsTransitioning(true);
    setTimeout(() => {
      onEnterSimulator(inst);
    }, 450);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 relative overflow-x-hidden font-caslon">
      {/* Cursor 3D Personalizado */}
      <CustomCursor3D />

      {/* Partículas Flotantes 3D en el fondo suave */}
      <FloatingParticlesBackground />

      {/* Loader Inicial de Partículas 3D */}
      {showLoader && <ParticleLoader onComplete={handleLoaderComplete} />}

      {/* Transición 3D suave */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center animate-door-zoom">
          <div className="w-48 h-48 rounded-full bg-blue-100 blur-[90px] animate-pulse" />
          <div className="flex flex-col items-center gap-3">
            <img src="/kuskat_logo.png" alt="Logo KUSKAT" className="w-16 h-16 object-contain animate-bounce" />
            <span className="font-montenegrin text-3xl text-slate-900 font-bold">KUSKAT</span>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 1. CINTILLO SUPERIOR (MISMA PALETA DE LAS OTRAS PÁGINAS) */}
      {/* ==================================================================== */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white text-[10px] sm:text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start">
            <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 text-[9px] sm:text-[10px] uppercase tracking-wider animate-pulse shrink-0">
              En Desarrollo
            </span>
            <span className="font-medium text-slate-200">
              Trabajando en material de medicina.
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-slate-300 font-medium text-[10px] sm:text-xs shrink-0">
            <a
              href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
              title="WhatsApp KUSKAT: +503 7657 4463"
            >
              <span className="text-emerald-400 font-bold">WhatsApp KUSKAT:</span>
              <span className="font-mono">+503 7657 4463</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="https://instagram.com/Kuskat.es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 flex items-center gap-1 transition-colors"
              title="Instagram: @Kuskat.es"
            >
              <span className="text-pink-400 font-bold">Instagram:</span>
              <span>@Kuskat.es</span>
            </a>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. ENCABEZADO PRINCIPAL (HEADER CON LOGO ORIGINAL DE KUSKAT) */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          {/* Logo Original KUSKAT y Título */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 shrink-0 overflow-hidden cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="/kuskat_logo.png"
                alt="Logo KUSKAT"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-montenegrin text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  KUSKAT
                </h1>
                <span className="text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 font-caslon">
                  Portal 3D
                </span>
              </div>
              <p className="font-caslon text-[11px] text-slate-500 font-medium hidden sm:block">
                Preparación para la aprobacion de examenes de Centro America
              </p>
            </div>
          </div>

          {/* Navegación y Botones de Acción */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenCategories}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-caslon text-xs font-semibold tracking-micro uppercase transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Categorías</span>
            </button>

            <button
              onClick={() => triggerStudyTransition()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-caslon text-xs sm:text-sm font-bold tracking-micro uppercase transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Simulador</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================================== */}
      {/* 3. HERO SECTION CON MAPA 3D DE EL SALVADOR */}
      {/* ==================================================================== */}
      <section className="relative">
        <ElSalvadorMap3D
          onSelectDepartment={(dept) => setSelectedDept(dept)}
          selectedDepartmentId={selectedDept?.id}
        />
      </section>

      {/* ==================================================================== */}
      {/* 4. PANEL LATERAL 3D */}
      {/* ==================================================================== */}
      <DepartmentSidePanel
        department={selectedDept}
        onClose={() => setSelectedDept(null)}
        onExploreContent={() => {
          setSelectedDept(null);
          triggerStudyTransition();
        }}
      />

      {/* ==================================================================== */}
      {/* 5. CURSOS DESTACADOS */}
      {/* ==================================================================== */}
      <Courses3DSection onEnroll={(inst) => triggerStudyTransition(inst)} />

      {/* ==================================================================== */}
      {/* 6. LOGROS Y ESTADÍSTICAS */}
      {/* ==================================================================== */}
      <StatsAndCharts3D />

      {/* ==================================================================== */}
      {/* 7. SOBRE NOSOTROS */}
      {/* ==================================================================== */}
      <AboutUs3D onLearnMoreAction={onOpenCategories} />

      {/* ==================================================================== */}
      {/* 8. CALL TO ACTION FINAL */}
      {/* ==================================================================== */}
      <CallToActionFinal3D onStartJourney={() => triggerStudyTransition()} />

      {/* ==================================================================== */}
      {/* 9. PIE DE PÁGINA (MISMA PALETA Y ESTRUCTURA QUE LAS OTRAS PÁGINAS) */}
      {/* ==================================================================== */}
      <footer className="bg-white border-t border-slate-200 py-10 text-xs text-slate-500 font-caslon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-100">
            {/* Columna 1: Marca KUSKAT con logo original */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-2xs">
                  <img
                    src="/kuskat_logo.png"
                    alt="Logo KUSKAT"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-montenegrin text-lg font-black text-slate-900 tracking-tight">KUSKAT</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plataforma integral de simulación y bancos de preguntas para aspirantes universitarios (UES), Escalafón Docente, AVANZO y ANSP.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 font-semibold border border-blue-200 text-[11px]">
                <Rocket className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Trabajando en material de medicina.</span>
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div className="space-y-3">
              <h4 className="font-montenegrin text-xs font-bold text-slate-900 uppercase tracking-wider">
                Ámbitos de Preparación
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => triggerStudyTransition('UES')}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Admisión UES
                </button>
                <button
                  onClick={() => triggerStudyTransition('ESCALAFON')}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Escalafón Docente
                </button>
                <button
                  onClick={() => triggerStudyTransition('AVANZO')}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Prueba AVANZO
                </button>
                <button
                  onClick={() => triggerStudyTransition('ASD')}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Jóvenes Talento
                </button>
                <button
                  onClick={() => triggerStudyTransition('ENA')}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Admisión ENA
                </button>
                <button
                  onClick={() => triggerStudyTransition('ANSP')}
                  className="text-left text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Academia ANSP
                </button>
              </div>
            </div>

            {/* Columna 3: Canales Oficiales */}
            <div className="space-y-3">
              <h4 className="font-montenegrin text-xs font-bold text-slate-900 uppercase tracking-wider">
                Contacto & Soporte
              </h4>
              <div className="space-y-2 text-xs">
                <a
                  href="https://wa.me/50376574463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: +503 7657 4463</span>
                </a>
                <a
                  href="https://instagram.com/Kuskat.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-pink-700 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>Instagram: @Kuskat.es</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px] border-t border-slate-100">
            <p>KUSKAT © 2026 • Todos los derechos reservados • Desarrollado por Yeferson E. Perez</p>
            <p className="font-mono">v2.3.0 • El Salvador</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes doorZoom {
          0% {
            opacity: 0;
            transform: scale(0.92);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: scale(1.08);
          }
        }
        .animate-door-zoom {
          animation: doorZoom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
