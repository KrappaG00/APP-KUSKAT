import React, { useState, useEffect } from 'react';
import { ParticleLoader } from './ParticleLoader';
import { Courses3DSection } from './Courses3DSection';
import { StatsAndCharts3D } from './StatsAndCharts3D';
import { AboutUs3D } from './AboutUs3D';
import { CallToActionFinal3D } from './CallToActionFinal3D';
import { CustomCursor3D } from './CustomCursor3D';
import { FloatingParticlesBackground } from './FloatingParticlesBackground';

import { useTranslation } from '../../i18n';
import { Institution } from '../../data';
import { HeaderNavbar, AppPageTab } from '../HeaderNavbar';
import { User } from '../../types/auth';
import type { LegalTab } from '../LegalModal';
import {
  Rocket,
  Users,
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


      {/* ==================================================================== */}
      {/* 2. CURSOS DESTACADOS */}
      {/* ==================================================================== */}
      <Courses3DSection
        onEnroll={(inst) => triggerStudyTransition(inst)}
        onSelectTab={(tab) => {
          if (tab === 'practice') {
            triggerStudyTransition();
          } else if (tab === 'categories') {
            onOpenCategories();
          } else if (onSelectTab) {
            onSelectTab(tab);
          }
        }}
      />


      {/* ==================================================================== */}
      {/* 3. LOGROS Y ESTADÍSTICAS */}
      {/* ==================================================================== */}
      <StatsAndCharts3D />

      {/* ==================================================================== */}
      {/* 4. SOBRE NOSOTROS */}
      {/* ==================================================================== */}
      <AboutUs3D onLearnMoreAction={onOpenCategories} />

      {/* ==================================================================== */}
      {/* 5. CALL TO ACTION FINAL */}
      {/* ==================================================================== */}
      <CallToActionFinal3D onStartJourney={() => triggerStudyTransition()} />

      {/* ==================================================================== */}
      {/* 6. DIRECCIÓN Y EQUIPO ACADÉMICO KUSKAT (FONDO DE LA PÁGINA)        */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" aria-label="Portal de Inicio - Dirección y Equipo Académico KUSKAT">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-corporate-subtle space-y-6 sm:space-y-8">
          {/* Encabezado de la Sección */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Dirección & Equipo Académico KUSKAT</span>
            </div>
            <h2 className="font-montenegrin text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Presentación del Equipo
            </h2>
            <p className="font-caslon text-xs sm:text-sm text-slate-600 leading-relaxed">
              Liderazgo pedagógico, científico y tecnológico comprometido con la democratización educativa, el acceso abierto a la educación superior y la excelencia académica en El Salvador.
            </p>
          </div>

          {/* Tarjetas del Equipo: Yeferson E. Perez (Fundador) y Asesores Educativos y Creativos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            {/* Tarjeta del Fundador: Yeferson E. Perez */}
            <div className="bg-gradient-to-b from-[#FAF9F5] via-white to-slate-50/60 rounded-3xl border-2 border-[#C59B27]/40 p-6 shadow-corporate-subtle flex flex-col items-center text-center relative overflow-hidden group hover:border-[#0B1B3D] transition-all duration-300">
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2.5 py-1 rounded-md bg-[#0B1B3D] text-[#C59B27] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#C59B27]/30 shadow-2xs">
                  Fundador
                </span>
              </div>

              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-[#C59B27] shadow-md mb-4 bg-slate-100 shrink-0 mt-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/yeferson_perez.jpg"
                  alt="Yeferson E. Perez - Fundador KUSKAT"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#0B1B3D] tracking-tight">
                Yeferson E. Perez
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1">
                Fundador & Desarrollador Principal
              </p>
              <p className="font-caslon text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-xs">
                Dirección general del proyecto, desarrollo integral de la plataforma tecnológica y arquitectura pedagógica de KUSKAT para El Salvador.
              </p>

              <div className="mt-auto pt-5 border-t border-slate-200/70 w-full flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span>KUSKAT • Educación Superior Abierta</span>
              </div>
            </div>

            {/* Tarjeta de Mayra Romero */}
            <div className="bg-gradient-to-b from-[#FAF9F5] via-white to-slate-50/60 rounded-3xl border-2 border-emerald-600/30 p-6 shadow-corporate-subtle flex flex-col items-center text-center relative overflow-hidden group hover:border-emerald-700 transition-all duration-300">
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2.5 py-1 rounded-md bg-emerald-800 text-emerald-100 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-600/40 shadow-2xs">
                  Asesoría
                </span>
              </div>

              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-emerald-600/50 shadow-md mb-4 bg-slate-100 shrink-0 mt-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/mayra_romero.jpg"
                  alt="Mayra Romero - Asesora Educativa KUSKAT"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#0B1B3D] tracking-tight">
                Mayra Romero
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-emerald-700 mt-1">
                Asesora Educativa
              </p>
              <p className="font-caslon text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-xs">
                Bióloga e Investigadora. Asesoría curricular, revisión de rigor científico y orientación pedagógica en ciencias biológicas y formativas.
              </p>

              <div className="mt-auto pt-5 border-t border-slate-200/70 w-full flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span>KUSKAT • Rigor Científico & Pedagógico</span>
              </div>
            </div>

            {/* Tarjeta de Milena Maeda */}
            <div className="bg-gradient-to-b from-[#FAF9F5] via-white to-slate-50/60 rounded-3xl border-2 border-cyan-600/30 p-6 shadow-corporate-subtle flex flex-col items-center text-center relative overflow-hidden group hover:border-cyan-700 transition-all duration-300">
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2.5 py-1 rounded-md bg-cyan-900 text-cyan-100 text-[10px] font-mono font-bold uppercase tracking-wider border border-cyan-600/40 shadow-2xs">
                  Ciencias Médicas
                </span>
              </div>

              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-cyan-600/50 shadow-md mb-4 bg-slate-100 shrink-0 mt-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/milena_maeda.jpg"
                  alt="Milena Maeda - Asesora Educativa en Ciencias Médicas"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#0B1B3D] tracking-tight">
                Milena Maeda
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-cyan-700 mt-1">
                Asesora Educativa
              </p>
              <p className="font-caslon text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-xs">
                Radióloga y Educadora. Especialista en Ciencias Médicas, aseguramiento de rigor formativo, imagenología diagnóstica y bioética asistencial.
              </p>

              <div className="mt-auto pt-5 border-t border-slate-200/70 w-full flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block animate-pulse" />
                <span>KUSKAT • Salud & Ciencias Médicas</span>
              </div>
            </div>

            {/* Tarjeta de Juan Interiano */}
            <div className="bg-gradient-to-b from-[#FAF9F5] via-white to-slate-50/60 rounded-3xl border-2 border-amber-600/30 p-6 shadow-corporate-subtle flex flex-col items-center text-center relative overflow-hidden group hover:border-amber-700 transition-all duration-300">
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2.5 py-1 rounded-md bg-amber-900 text-amber-100 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-600/40 shadow-2xs">
                  Flexibilidad Ed.
                </span>
              </div>

              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-amber-600/50 shadow-md mb-4 bg-slate-100 shrink-0 mt-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/juan_interiano.jpg"
                  alt="Juan Interiano - Asesor de Flexibilidad Educativa"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#0B1B3D] tracking-tight">
                Juan Interiano
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-amber-700 mt-1">
                Asesor de Flexibilidad Educativa
              </p>
              <p className="font-caslon text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-xs">
                Economista Retirado y Ex-Viceministro de Educación (1982). Asesoría en políticas de flexibilidad formativa, inclusión educativa y planeación institucional.
              </p>

              <div className="mt-auto pt-5 border-t border-slate-200/70 w-full flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse" />
                <span>KUSKAT • Políticas Educativas & Estado</span>
              </div>
            </div>

            {/* Tarjeta de Amílcar Ruiz */}
            <div className="bg-gradient-to-b from-[#FAF9F5] via-white to-slate-50/60 rounded-3xl border-2 border-violet-600/30 p-6 shadow-corporate-subtle flex flex-col items-center text-center relative overflow-hidden group hover:border-violet-700 transition-all duration-300">
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2.5 py-1 rounded-md bg-violet-900 text-violet-100 text-[10px] font-mono font-bold uppercase tracking-wider border border-violet-600/40 shadow-2xs">
                  Diseño & 3D
                </span>
              </div>

              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-violet-600/50 shadow-md mb-4 bg-slate-100 shrink-0 mt-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/amilcar_ruiz.jpg"
                  alt="Amílcar Ruiz - Asesor Creativo"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#0B1B3D] tracking-tight">
                Amílcar Ruiz
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-violet-700 mt-1">
                Asesor Creativo
              </p>
              <p className="font-caslon text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-xs">
                Diseñador creativo multidisciplinario. Especialista en diseño gráfico, digital y 3D, identidad visual interactiva y dirección de arte.
              </p>

              <div className="mt-auto pt-5 border-t border-slate-200/70 w-full flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-violet-500 inline-block animate-pulse" />
                <span>KUSKAT • Diseño Gráfico & 3D</span>
              </div>
            </div>

            {/* Tarjeta de Daniel Siciliano */}
            <div className="bg-gradient-to-b from-[#FAF9F5] via-white to-slate-50/60 rounded-3xl border-2 border-blue-600/30 p-6 shadow-corporate-subtle flex flex-col items-center text-center relative overflow-hidden group hover:border-blue-700 transition-all duration-300">
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2.5 py-1 rounded-md bg-blue-900 text-blue-100 text-[10px] font-mono font-bold uppercase tracking-wider border border-blue-600/40 shadow-2xs">
                  MINED
                </span>
              </div>

              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-blue-600/50 shadow-md mb-4 bg-slate-100 shrink-0 mt-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/daniel_siciliano.jpg"
                  alt="Daniel Siciliano - Asesor Educativo KUSKAT"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#0B1B3D] tracking-tight">
                Daniel Siciliano
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1">
                Asesor Educativo
              </p>
              <p className="font-caslon text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-xs">
                Técnico del Ministerio de Educación. Asesoría técnica curricular, alineación pedagógica nacional y seguimiento normativo del sistema educativo salvadoreño.
              </p>

              <div className="mt-auto pt-5 border-t border-slate-200/70 w-full flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block animate-pulse" />
                <span>KUSKAT • Alineación Curricular Oficial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
