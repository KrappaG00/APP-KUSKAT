import React, { useState, useEffect } from 'react';
import { Courses3DSection, PortalNavigationTarget } from './Courses3DSection';
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
  BookOpen,
  Users,
} from 'lucide-react';

interface MotionSitesPortalProps {
  onEnterSimulator: (institution?: Institution) => void;
  onOpenCategories: () => void;
  onSelectTab?: (tab: AppPageTab) => void;
  onNavigateArea?: (target: PortalNavigationTarget) => void;
  onOpenAccountModal?: () => void;
  onOpenTutorial?: () => void;
  onOpenDevModal?: () => void;
  onOpenLegalModal?: (tab?: LegalTab) => void;
  currentUser?: User | null;
  hideHeader?: boolean;
}

export const MotionSitesPortal: React.FC<MotionSitesPortalProps> = ({
  onEnterSimulator,
  onOpenCategories,
  onSelectTab,
  onNavigateArea,
  onOpenAccountModal,
  onOpenTutorial,
  onOpenDevModal,
  onOpenLegalModal,
  currentUser,
  hideHeader = false,
}) => {
  const { t } = useTranslation();

  // Transición 3D de salida
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

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 relative overflow-x-hidden font-caslon">
      {/* Cursor 3D Personalizado */}
      <CustomCursor3D />

      {/* Partículas Flotantes en el fondo suave */}
      <FloatingParticlesBackground />

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
      {!hideHeader && (
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
        />
      )}


      {/* ==================================================================== */}
      {/* 2. CURSOS DESTACADOS */}
      {/* ==================================================================== */}
      <Courses3DSection onNavigateArea={triggerPortalTransition} />


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
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
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
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
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
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
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
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
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
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
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
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
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
      {/* 6.5 GUÍA ACADÉMICA OFICIAL Y METODOLOGÍA DE ESTUDIO (>600 PALABRAS) */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14" aria-label="Guía Académica Oficial y Metodología de Estudio KUSKAT">
        <article className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-corporate-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0B1B3D] text-xs font-bold border border-slate-200">
                <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Guía Académica Institucional • El Salvador</span>
              </div>
              <h2 className="font-montenegrin text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Currículo Salvadoreño, Exámenes Nacionales y Metodología de Estudio
              </h2>
            </div>
            <a
              href="/sobre-nosotros.html"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline shrink-0"
            >
              Conocer rigor editorial →
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed font-caslon">
            <div className="space-y-4">
              <h3 className="font-editorial text-lg font-bold text-[#0B1B3D]">
                1. Alineación con el Currículo Nacional MINED-ESMATE
              </h3>
              <p>
                La arquitectura pedagógica de KUSKAT se fundamenta directamente en los programas oficiales del Ministerio de Educación, Ciencia y Tecnología (MINED) y la serie metodológica ESMATE, abarcando desde Primer Grado de Educación Básica hasta Segundo Año de Bachillerato. Cada unidad temática desarrolla exposición teórica sustantiva, definiciones formales, propiedades algebraicas o geométricas y cinco ejemplos resueltos paso a paso con notación matemática estandarizada.
              </p>
              <p>
                En el nivel de Educación Básica y Media, el estudiante consolida progresivamente el sentido numérico, las operaciones con números racionales, las ecuaciones lineales y cuadráticas, la geometría euclidiana y analítica, la trigonometría, las secciones cónicas, el cálculo diferencial introductorio y la probabilidad. Esta secuencia asegura que tanto escolares como aspirantes universitarios cuenten con un referente confiable y gratuito para su nivelación académica.
              </p>

              <h3 className="font-editorial text-lg font-bold text-[#0B1B3D] pt-2">
                2. Preparación para Evaluaciones Nacionales y de Admisión
              </h3>
              <p>
                El sistema educativo y profesional salvadoreño exige superar pruebas estandarizadas con perfiles psicométricos específicos. KUSKAT organiza más de 17,640 reactivos base calibrados para la prueba nacional AVANZO del MINED, el examen de admisión general y específico de la Universidad de El Salvador (UES), el ingreso a la Escuela Nacional de Agricultura (ENA), la evaluación de competencias del Escalafón Docente y las pruebas de ingreso y ascenso de la Academia Nacional de Seguridad Pública (ANSP) y Policía Nacional Civil (PNC).
              </p>
              <p>
                Asimismo, la plataforma integra áreas de habilitación profesional y técnica basadas en normativa oficial vigente: Examen de Suficiencia Notarial y Casoteca Constitucional de la Corte Suprema de Justicia (CSJ), Atención Primaria y Farmacovigilancia conforme al MINSAL y la Superintendencia de Regulación Sanitaria (SRS/DNM), Juntas de Vigilancia del Consejo Superior de Salud Pública (CSSP), cumplimiento financiero ante la UIF-FGR y la SSF, normativa eléctrica SIGET y educación vial del Viceministerio de Transporte (VMT) y SIECA.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-editorial text-lg font-bold text-[#0B1B3D]">
                3. Metodología de Estudio Basada en Evidencia
              </h3>
              <p>
                Para maximizar la retención a largo plazo y el desempeño bajo presión de tiempo, KUSKAT combina tres pilares metodológicos complementarios. En primer lugar, el estudio conceptual guiado permite comprender el fundamento doctrinal, legal o matemático antes de enfrentar reactivos de selección múltiple. Cada pregunta incluye retroalimentación razonada y análisis de distractores para que el estudiante identifique por qué una alternativa es correcta y por qué las demás resultan improcedentes.
              </p>
              <p>
                En segundo lugar, el simulador cronometrado reproduce las condiciones reales de evaluación oficial, permitiendo entrenar la gestión del tiempo por bloque temático y revisar un solucionario completo al finalizar. En tercer lugar, el sistema incorpora tarjetas de repaso espaciado con algoritmo FSRS y un Cuaderno Inteligente de Errores que prioriza automáticamente los temas donde el aspirante requiere refuerzo deliberado.
              </p>

              <h3 className="font-editorial text-lg font-bold text-[#0B1B3D] pt-2">
                4. Acceso Abierto, Patrimonio Lingüístico y Herramientas Docentes
              </h3>
              <p>
                Además de las ciencias exactas, médicas y jurídicas, KUSKAT dedica un programa permanente a la revitalización de las lenguas originarias de El Salvador —Náhuat Pipil, Lenca Potón y Kakawira— junto con la enseñanza de idiomas internacionales alineados al Marco Común Europeo de Referencia (MCER/CEFR). Para docentes e institutos nacionales, la plataforma ofrece un exportador tipográfico LaTeX compatible con Overleaf y generadores de hojas de respuesta OMR de 50 y 100 ítems listos para impresión en aula, manteniendo siempre el acceso libre y gratuito para toda la comunidad educativa salvadoreña.
              </p>

              <h3 className="font-editorial text-lg font-bold text-[#0B1B3D] pt-2">
                5. Rigor Editorial, Fuentes Oficiales y Transparencia Institucional
              </h3>
              <p>
                Todo el acervo académico publicado en KUSKAT se somete a revisión periódica frente a los programas vigentes del MINED, la Universidad de El Salvador, el Viceministerio de Transporte, la Corte Suprema de Justicia, el Ministerio de Salud y los organismos técnicos internacionales reconocidos. Ninguna unidad temática se publica con plantillas repetitivas ni texto de relleno: cada módulo integra fundamentación teórica verificada, ejemplos resueltos paso a paso y reactivos con justificación pedagógica individualizada.
              </p>
              <p>
                Este Portal de Inicio permanece completamente libre de anuncios publicitarios para ofrecer una navegación clara y directa hacia las áreas de estudio, mientras que el resto de vistas formativas opera bajo un modelo sostenible, no intrusivo y respetuoso de la privacidad del estudiante salvadoreño.
              </p>
            </div>
          </div>
        </article>
      </section>

    </div>
  );
};
