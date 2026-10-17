import React, { useState, useEffect } from 'react';
import { DepartmentData, DEPARTMENTS_DATA } from './data/departmentsData';
import { ParticleLoader } from './ParticleLoader';
import { ElSalvadorMap3D } from './ElSalvadorMap3D';
import { DepartmentSidePanel } from './DepartmentSidePanel';
import { Courses3DSection } from './Courses3DSection';
import { StatsAndCharts3D } from './StatsAndCharts3D';
import { AboutUs3D } from './AboutUs3D';
import { CallToActionFinal3D } from './CallToActionFinal3D';
import { CustomCursor3D } from './CustomCursor3D';
import { FloatingParticlesBackground } from './FloatingParticlesBackground';
import { AdBanner } from '../AdBanner';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from '../../i18n';
import { Institution } from '../../data';
import { HeaderNavbar, AppPageTab } from '../HeaderNavbar';
import { User } from '../../types/auth';
import type { LegalTab } from '../LegalModal';
import {
  Layers,
  ArrowRight,
  Phone,
  Instagram,
  Rocket,
  Grid,
  Box,
  MapPin,
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
  const [is2DAccessibleMode, setIs2DAccessibleMode] = useState<boolean>(false);

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
      {/* 2. ENCABEZADO PRINCIPAL (HEADER CON MENÚ COMPLETO DE TODAS LAS PÁGINAS) */}
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
        is2DAccessibleMode={is2DAccessibleMode}
        onToggle2DAccessible={() => setIs2DAccessibleMode((prev) => !prev)}
      />

      {/* Anuncio 1 / 5 (Portal 3D) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3">
        <AdBanner variant="light" positionLabel="Portal 3D • 1/5 Superior" slotId="4241045160_p1" />
      </div>

      {/* ==================================================================== */}
      {/* 3. HERO SECTION CON MAPA 3D O ALTERNATIVA 2D ACCESIBLE (WCAG 2.2 AA) */}
      {/* ==================================================================== */}
      <section className="relative" aria-label={t('portal3d.title')}>
        {is2DAccessibleMode ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{t('portal3d.badge')}</span>
                  </span>
                  <h2 className="font-montenegrin text-2xl sm:text-3xl font-black text-slate-900">
                    {t('portal3d.accessibleGridTitle')}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {t('portal3d.subtitle')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIs2DAccessibleMode(false)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer shrink-0"
                >
                  <Box className="w-4 h-4 text-amber-400" />
                  <span>{t('app.enable3D')}</span>
                </button>
              </div>

              <div
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
              >
                {DEPARTMENTS_DATA.map((dept) => {
                  const isSelected = selectedDept?.id === dept.id;
                  return (
                    <button
                      key={dept.id}
                      type="button"
                      role="listitem"
                      aria-label={t('portal3d.selectDepartment', { dept: dept.name })}
                      onClick={() => setSelectedDept(dept)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-slate-50/90 hover:bg-blue-50/60 text-slate-900 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-sm">{dept.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {dept.region}
                        </span>
                      </div>
                      <p
                        className={`text-xs mb-2 ${
                          isSelected ? 'text-blue-100' : 'text-slate-600'
                        }`}
                      >
                        {t('portal3d.capital')}: <strong>{dept.capital}</strong>
                      </p>
                      <p
                        className={`text-[11px] line-clamp-2 ${
                          isSelected ? 'text-blue-50' : 'text-slate-500'
                        }`}
                      >
                        {dept.featuredSubject} • {dept.bestCategory}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <ElSalvadorMap3D
            onSelectDepartment={(dept) => setSelectedDept(dept)}
            selectedDepartmentId={selectedDept?.id}
          />
        )}
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

      {/* Anuncio 2 / 5 (Portal 3D) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
        <AdBanner variant="light" positionLabel="Portal 3D • 2/5 Cursos" slotId="4241045160_p2" />
      </div>

      {/* ==================================================================== */}
      {/* 5. CURSOS DESTACADOS */}
      {/* ==================================================================== */}
      <Courses3DSection onEnroll={(inst) => triggerStudyTransition(inst)} />

      {/* Anuncio 3 / 5 (Portal 3D) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
        <AdBanner variant="light" positionLabel="Portal 3D • 3/5 Estadísticas" slotId="4241045160_p3" />
      </div>

      {/* ==================================================================== */}
      {/* 6. LOGROS Y ESTADÍSTICAS */}
      {/* ==================================================================== */}
      <StatsAndCharts3D />

      {/* Anuncio 4 / 5 (Portal 3D) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
        <AdBanner variant="light" positionLabel="Portal 3D • 4/5 Acerca De" slotId="4241045160_p4" />
      </div>

      {/* ==================================================================== */}
      {/* 7. SOBRE NOSOTROS */}
      {/* ==================================================================== */}
      <AboutUs3D onLearnMoreAction={onOpenCategories} />

      {/* ==================================================================== */}
      {/* 8. CALL TO ACTION FINAL */}
      {/* ==================================================================== */}
      <CallToActionFinal3D onStartJourney={() => triggerStudyTransition()} />

      {/* Anuncio 5 / 5 (Portal 3D) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
        <AdBanner variant="light" positionLabel="Portal 3D • 5/5 Inferior" slotId="4241045160_p5" />
      </div>

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
