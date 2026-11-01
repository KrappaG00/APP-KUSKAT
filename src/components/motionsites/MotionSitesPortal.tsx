import React, { useState, useEffect } from 'react';
import { ParticleLoader } from './ParticleLoader';
import { Courses3DSection } from './Courses3DSection';
import { StatsAndCharts3D } from './StatsAndCharts3D';
import { AboutUs3D } from './AboutUs3D';
import { CallToActionFinal3D } from './CallToActionFinal3D';
import { CustomCursor3D } from './CustomCursor3D';
import { FloatingParticlesBackground } from './FloatingParticlesBackground';
import { AdBanner } from '../AdBanner';
import { useTranslation } from '../../i18n';
import { Institution } from '../../data';
import { HeaderNavbar, AppPageTab } from '../HeaderNavbar';
import { User } from '../../types/auth';
import type { LegalTab } from '../LegalModal';
import {
  Rocket,
  Users,
  UserCheck,
} from 'lucide-react';

interface MotionSitesPortalProps {
  onEnterSimulator: (institution?: Institution) => void;
  onOpenCategories: () => void;
  onSelectTab?: (tab: AppPageTab) => void;
  onOpenAccountModal?: () => void;
  onOpenTutorial?: () => void;
  onOpenDevModal?: () => void;
  onOpenLegalModal?: (tab?: LegalTab) => void;
  currentUser?: User | null;
}

export const MotionSitesPortal: React.FC<MotionSitesPortalProps> = ({
  onEnterSimulator,
  onOpenCategories,
  onSelectTab,
  onOpenAccountModal,
  onOpenTutorial,
  onOpenDevModal,
  onOpenLegalModal,
  currentUser,
}) => {
  const { t } = useTranslation();

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

  // Transición 3D de salida
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const scrollToTop = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      } catch {
        window.scrollTo(0, 0);
      }
    };

    scrollToTop();
    const rafId = requestAnimationFrame(scrollToTop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const triggerStudyTransition = (inst?: Institution) => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    } catch {
      window.scrollTo(0, 0);
    }
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
      {/* 1. ENCABEZADO PRINCIPAL (HEADER CON MENÚ COMPLETO DE TODAS LAS PÁGINAS) */}
      {/* ==================================================================== */}
      <HeaderNavbar
        activeTab="motionsites3d"
        onSelectTab={(tab) => {
          if (tab === 'practice') {
            triggerStudyTransition();
          } else if (tab === 'categories') {
            onOpenCategories();
          } else if (onSelectTab) {
            onSelectTab(tab);
          }
        }}
        onOpenAccountModal={() => (onOpenAccountModal ? onOpenAccountModal() : undefined)}
        onOpenTutorial={() => (onOpenTutorial ? onOpenTutorial() : undefined)}
        onOpenDevModal={() => (onOpenDevModal ? onOpenDevModal() : undefined)}
        onOpenLegalModal={(tab) => (onOpenLegalModal ? onOpenLegalModal(tab) : undefined)}
        currentUser={currentUser || null}
      />

      {/* Anuncio 1 / 3 (Portal 3D • Superior) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3">
        <AdBanner variant="light" positionLabel="Portal 3D • 1/3 Superior" slotId="4241045160_p1" />
      </div>

      {/* ==================================================================== */}
      {/* 2. PRESENTACIÓN DEL EQUIPO DEL PROYECTO KUSKAT (5 ESPACIOS)        */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" aria-label="Presentación del Equipo KUSKAT">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-corporate-subtle space-y-8">
          {/* Encabezado de la Sección */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Equipo Multidisciplinario KUSKAT</span>
            </div>
            <h2 className="font-montenegrin text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Presentación del Equipo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Profesionales, educadores y colaboradores comprometidos con la transformación pedagógica, el acceso abierto a la educación superior y la excelencia académica en El Salvador.
            </p>
          </div>

          {/* Grilla de 5 Espacios del Equipo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {/* Espacio 1: Fundador */}
            <div className="bg-gradient-to-b from-[#FAF9F5] to-white rounded-2xl border-2 border-[#C59B27]/40 p-5 shadow-corporate-subtle flex flex-col items-center text-center relative overflow-hidden group hover:border-[#0B1B3D] transition-all">
              <div className="absolute top-2.5 right-2.5">
                <span className="px-2 py-0.5 rounded-md bg-[#0B1B3D] text-[#C59B27] text-[9.5px] font-mono font-bold uppercase tracking-wider border border-[#C59B27]/30">
                  Fundador
                </span>
              </div>

              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#C59B27] shadow-md mb-3.5 bg-slate-100 shrink-0 mt-3 group-hover:scale-105 transition-transform">
                <img
                  src="/yeferson_perez.jpg"
                  alt="Yeferson E. Perez - Fundador KUSKAT"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-editorial text-lg font-bold text-[#0B1B3D]">
                Yeferson E. Perez
              </h3>
              <p className="text-xs font-semibold text-blue-700 mt-0.5">
                Fundador & Desarrollador Principal
              </p>
              <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                Dirección general del proyecto, desarrollo de la plataforma tecnológica y arquitectura pedagógica de KUSKAT.
              </p>
            </div>

            {/* Espacio 2: Colaborador */}
            <div className="bg-slate-50/70 rounded-2xl border-2 border-dashed border-slate-300 p-5 flex flex-col items-center text-center justify-between min-h-[260px] hover:bg-slate-50 transition-colors">
              <div className="w-full flex justify-end">
                <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-600 text-[9px] font-mono font-semibold uppercase">
                  Espacio 2
                </span>
              </div>
              <div className="flex flex-col items-center my-auto space-y-3">
                <div className="w-20 h-20 rounded-2xl bg-slate-200/80 border border-slate-300 flex items-center justify-center text-slate-400">
                  <UserCheck className="w-8 h-8 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-700">Persona Colaboradora</h4>
                  <p className="text-[11px] text-slate-500 italic leading-snug px-2">
                    Esperando aprobación para el uso de imagen de la persona colaboradora.
                  </p>
                </div>
              </div>
              <div className="w-full pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-mono">
                KUSKAT Colaboración
              </div>
            </div>

            {/* Espacio 3: Colaborador */}
            <div className="bg-slate-50/70 rounded-2xl border-2 border-dashed border-slate-300 p-5 flex flex-col items-center text-center justify-between min-h-[260px] hover:bg-slate-50 transition-colors">
              <div className="w-full flex justify-end">
                <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-600 text-[9px] font-mono font-semibold uppercase">
                  Espacio 3
                </span>
              </div>
              <div className="flex flex-col items-center my-auto space-y-3">
                <div className="w-20 h-20 rounded-2xl bg-slate-200/80 border border-slate-300 flex items-center justify-center text-slate-400">
                  <UserCheck className="w-8 h-8 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-700">Persona Colaboradora</h4>
                  <p className="text-[11px] text-slate-500 italic leading-snug px-2">
                    Esperando aprobación para el uso de imagen de la persona colaboradora.
                  </p>
                </div>
              </div>
              <div className="w-full pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-mono">
                KUSKAT Colaboración
              </div>
            </div>

            {/* Espacio 4: Colaborador */}
            <div className="bg-slate-50/70 rounded-2xl border-2 border-dashed border-slate-300 p-5 flex flex-col items-center text-center justify-between min-h-[260px] hover:bg-slate-50 transition-colors">
              <div className="w-full flex justify-end">
                <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-600 text-[9px] font-mono font-semibold uppercase">
                  Espacio 4
                </span>
              </div>
              <div className="flex flex-col items-center my-auto space-y-3">
                <div className="w-20 h-20 rounded-2xl bg-slate-200/80 border border-slate-300 flex items-center justify-center text-slate-400">
                  <UserCheck className="w-8 h-8 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-700">Persona Colaboradora</h4>
                  <p className="text-[11px] text-slate-500 italic leading-snug px-2">
                    Esperando aprobación para el uso de imagen de la persona colaboradora.
                  </p>
                </div>
              </div>
              <div className="w-full pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-mono">
                KUSKAT Colaboración
              </div>
            </div>

            {/* Espacio 5: Colaborador */}
            <div className="bg-slate-50/70 rounded-2xl border-2 border-dashed border-slate-300 p-5 flex flex-col items-center text-center justify-between min-h-[260px] hover:bg-slate-50 transition-colors">
              <div className="w-full flex justify-end">
                <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-600 text-[9px] font-mono font-semibold uppercase">
                  Espacio 5
                </span>
              </div>
              <div className="flex flex-col items-center my-auto space-y-3">
                <div className="w-20 h-20 rounded-2xl bg-slate-200/80 border border-slate-300 flex items-center justify-center text-slate-400">
                  <UserCheck className="w-8 h-8 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-700">Persona Colaboradora</h4>
                  <p className="text-[11px] text-slate-500 italic leading-snug px-2">
                    Esperando aprobación para el uso de imagen de la persona colaboradora.
                  </p>
                </div>
              </div>
              <div className="w-full pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-mono">
                KUSKAT Colaboración
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. CURSOS DESTACADOS */}
      {/* ==================================================================== */}
      <Courses3DSection onEnroll={(inst) => triggerStudyTransition(inst)} />

      {/* Anuncio 2 / 3 (Portal 3D • Intermedio) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
        <AdBanner variant="light" positionLabel="Portal 3D • 2/3 Intermedio" slotId="4241045160_p2" />
      </div>

      {/* ==================================================================== */}
      {/* 4. LOGROS Y ESTADÍSTICAS */}
      {/* ==================================================================== */}
      <StatsAndCharts3D />

      {/* ==================================================================== */}
      {/* 5. SOBRE NOSOTROS */}
      {/* ==================================================================== */}
      <AboutUs3D onLearnMoreAction={onOpenCategories} />

      {/* ==================================================================== */}
      {/* 6. CALL TO ACTION FINAL */}
      {/* ==================================================================== */}
      <CallToActionFinal3D onStartJourney={() => triggerStudyTransition()} />

      {/* Anuncio 3 / 3 (Portal 3D • Inferior) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
        <AdBanner variant="light" positionLabel="Portal 3D • 3/3 Inferior" slotId="4241045160_p3" />
      </div>

      {/* ==================================================================== */}
      {/* 7. PIE DE PÁGINA */}
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
                <span>Trabajando en material de medicina. Los anuncios que contiene la pagina es un pequeño aporte economico a mis estudios universitarios.</span>
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

            {/* Columna 3: Información Institucional y Legal */}
            <div className="space-y-3">
              <h4 className="font-montenegrin text-xs font-bold text-slate-900 uppercase tracking-wider">
                Información Institucional
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plataforma de libre acceso educativo en El Salvador conforme al Art. 53 de la Constitución.
              </p>
              <div className="flex flex-col gap-1.5 pt-1 text-slate-600 text-xs">
                <button
                  onClick={() => (onOpenLegalModal ? onOpenLegalModal('terms') : undefined)}
                  className="text-left hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Términos de Servicio y Privacidad
                </button>
                <button
                  onClick={() => (onOpenLegalModal ? onOpenLegalModal('laws') : undefined)}
                  className="text-left hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Marco Constitucional y Propiedad
                </button>
                <button
                  onClick={() => (onOpenLegalModal ? onOpenLegalModal('privacy') : undefined)}
                  className="text-left hover:text-blue-600 transition-colors cursor-pointer"
                >
                  • Contacto Oficial WhatsApp: +503 7657 4463
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
            <p>© {new Date().getFullYear()} KUSKAT • Sistema Académico de Evaluación Intercultural. Todos los derechos reservados.</p>
            <p className="font-sans">El Salvador, Centroamérica</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
