import React, { useState, useEffect } from 'react';
import { Courses3DSection, PortalNavigationTarget } from './Courses3DSection';
import { ServiciosCatalogSection } from './ServiciosCatalogSection';
import { CentralAmericaAcademicSection } from './CentralAmericaAcademicSection';
import { CustomCursor3D } from './CustomCursor3D';
import { FloatingParticlesBackground } from './FloatingParticlesBackground';
import { Institution } from '../../data';
import { HeaderNavbar, AppPageTab } from '../HeaderNavbar';
import { User } from '../../types/auth';
import type { LegalTab } from '../LegalModal';
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export interface PortalInicioViewProps {
  onEnterSimulator: (institution?: Institution) => void;
  onOpenCategories: () => void;
  onSelectTab?: (tab: AppPageTab) => void;
  onNavigateArea?: (target: PortalNavigationTarget) => void;
  onOpenAccountModal?: () => void;
  onOpenTutorial?: () => void;
  onOpenDevModal?: () => void;
  onOpenLegalModal?: (tab?: LegalTab) => void;
  onOpenFlashcards?: () => void;
  onOpenErrorNotebook?: () => void;
  onSelectLanguage?: (languageId: string) => void;
  onNavigateSection?: (tab: AppPageTab, sectionId: string) => void;
  currentUser?: User | null;
}

export const PortalInicioView: React.FC<PortalInicioViewProps> = ({
  onEnterSimulator,
  onOpenCategories,
  onSelectTab,
  onNavigateArea,
  onOpenTutorial,
  onOpenDevModal,
  onOpenLegalModal,
  onOpenFlashcards,
  onOpenErrorNotebook,
  onSelectLanguage,
  onNavigateSection,
}) => {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const transitionTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

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
    if (isTransitioning) return;
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    } catch {
      window.scrollTo(0, 0);
    }
    setIsTransitioning(true);
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = setTimeout(() => {
      onEnterSimulator(inst);
    }, 450);
  };

  const triggerPortalTransition = (target: PortalNavigationTarget) => {
    if (isTransitioning) return;
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    } catch {
      window.scrollTo(0, 0);
    }
    setIsTransitioning(true);
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = setTimeout(() => {
      if (onNavigateArea) {
        onNavigateArea(target);
      } else if (target.tab === 'practice') {
        onEnterSimulator('institution' in target ? target.institution : undefined);
      } else if (target.tab === 'categories') {
        onOpenCategories();
      } else if (onSelectTab) {
        onSelectTab(target.tab);
      }
    }, 450);
  };

  const handleOpenElSalvadorPortal = () => {
    if (onSelectTab) {
      onSelectTab('el-salvador-portal');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 relative overflow-x-clip font-caslon">
      <CustomCursor3D />
      <FloatingParticlesBackground />

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
      {/* 1. ENCABEZADO PRINCIPAL (PORTAL DE INICIO SIN ANUNCIOS)              */}
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
        onOpenTutorial={() => (onOpenTutorial ? onOpenTutorial() : undefined)}
        onOpenDevModal={() => (onOpenDevModal ? onOpenDevModal() : undefined)}
        onOpenLegalModal={(tab) => (onOpenLegalModal ? onOpenLegalModal(tab) : undefined)}
        onOpenFlashcards={onOpenFlashcards}
        onOpenErrorNotebook={onOpenErrorNotebook}
        onSelectLanguage={onSelectLanguage}
        onNavigateSection={onNavigateSection}
      />

      {/* ==================================================================== */}
      {/* 2. PRIMERA PARTE: ÁREA DE SERVICIOS (BELLEZA PRIMERO + DIGITALES)    */}
      {/* ==================================================================== */}
      <ServiciosCatalogSection />

      {/* ==================================================================== */}
      {/* 3. PARTE MEDIA: REFUERZO ACADÉMICO AMÉRICA CENTRAL                   */}
      {/* ==================================================================== */}
      <CentralAmericaAcademicSection onSelectElSalvador={handleOpenElSalvadorPortal} />

      {/* ==================================================================== */}
      {/* 4. PARTE FINAL: KUSKAT ACADÉMICO GRATUITO (19 CATEGORÍAS ACTUALES)   */}
      {/* ==================================================================== */}
      <section
        id="kuskat-academico-gratuito"
        aria-label="KUSKAT Académico Gratuito"
        className="pt-4 pb-8 space-y-6"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B1B3D] via-[#132957] to-[#0B1B3D] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C59B27] text-xs font-bold border border-[#C59B27]/30">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>100% Gratuito • Sin Muros de Pago</span>
              </div>
              <h2 className="font-montenegrin text-2xl sm:text-3xl font-black tracking-tight">
                KUSKAT Académico Gratuito
              </h2>
              <p className="font-caslon text-xs sm:text-sm text-slate-200 leading-relaxed">
                Accede directamente a las 19 categorías de estudio, simuladores oficiales y bancos de
                preguntas de El Salvador, o abre la página completa del Portal Académico El Salvador.
              </p>
            </div>
            <button
              type="button"
              onClick={handleOpenElSalvadorPortal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C59B27] hover:bg-amber-500 text-[#0B1B3D] font-bold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer shrink-0 w-full lg:w-auto"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Abrir Portal Completo El Salvador</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>

        {/* Catálogo de las 19 categorías académicas gratuitas */}
        <Courses3DSection onNavigateArea={triggerPortalTransition} />
      </section>

      {/* ==================================================================== */}
      {/* 5. PRESENTACIÓN DEL FUNDADOR (YEFERSON E. PEREZ)                     */}
      {/* ==================================================================== */}
      <section
        className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 pb-10"
        aria-label="Fundador de KUSKAT"
      >
        <div className="bg-gradient-to-b from-[#FAF9F5] via-white to-slate-50/60 rounded-3xl border-2 border-[#C59B27]/40 p-6 sm:p-8 shadow-corporate-subtle flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-[#C59B27] shadow-md bg-slate-100 shrink-0">
            <img
              src="/yeferson_perez.jpg"
              alt="Yeferson E. Perez - Fundador KUSKAT"
              width={128}
              height={128}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2 min-w-0">
            <span className="inline-block px-2.5 py-1 rounded-md bg-[#0B1B3D] text-[#C59B27] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#C59B27]/30">
              Fundador
            </span>
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight">
              Yeferson E. Perez
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-blue-700">
              Fundador &amp; Desarrollador Principal — KUSKAT
            </p>
            <p className="font-caslon text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dirección general del proyecto, desarrollo integral de la plataforma tecnológica y
              arquitectura pedagógica abierta de KUSKAT.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. PIE DE PÁGINA INSTITUCIONAL (0 ANUNCIOS)                          */}
      {/* ==================================================================== */}
      <footer className="bg-white border-t border-slate-200 py-10 text-xs text-slate-500 font-caslon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-100">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-2xs">
                  <img
                    src="/kuskat_logo.png"
                    alt="Logo KUSKAT"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-montenegrin text-lg font-black text-slate-900 tracking-tight">
                  KUSKAT
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Servicios profesionales de belleza y soluciones digitales junto a la plataforma
                académica gratuita KUSKAT.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 font-semibold border border-blue-200 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Portal de Inicio libre de anuncios publicitarios, acceso abierto y gratuito.</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-montenegrin text-xs font-bold text-slate-900 uppercase tracking-wider">
                Navegación Rápida
              </h4>
              <div className="flex flex-col gap-1.5 text-xs">
                <a href="#area-de-servicios" className="text-slate-600 hover:text-blue-600">
                  • Área de Servicios (Belleza &amp; Digitales)
                </a>
                <a
                  href="#refuerzo-academico-america-central"
                  className="text-slate-600 hover:text-blue-600"
                >
                  • Refuerzo Académico América Central
                </a>
                <a href="#kuskat-academico-gratuito" className="text-slate-600 hover:text-blue-600">
                  • KUSKAT Académico Gratuito
                </a>
                <button
                  type="button"
                  onClick={handleOpenElSalvadorPortal}
                  className="text-left text-slate-600 hover:text-blue-600 cursor-pointer"
                >
                  • Portal Académico El Salvador
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-montenegrin text-xs font-bold text-slate-900 uppercase tracking-wider">
                Información Institucional
              </h4>
              <div className="flex flex-col gap-1.5 pt-1 text-slate-600 text-xs">
                <a href="/terminos.html" className="text-left hover:text-blue-600 transition-colors">
                  • Términos y Condiciones de Uso
                </a>
                <a href="/privacidad.html" className="text-left hover:text-blue-600 transition-colors">
                  • Política de Privacidad y Cookies
                </a>
                <a
                  href="/sobre-nosotros.html"
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  • Sobre Nosotros y Rigor Editorial
                </a>
                <a href="/contacto.html" className="text-left hover:text-blue-600 transition-colors">
                  • Contacto Oficial (+503 7657 4463)
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
            <p>
              © {new Date().getFullYear()} KUSKAT • Todos los derechos reservados.
            </p>
            <p className="font-sans">El Salvador, Centroamérica</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
