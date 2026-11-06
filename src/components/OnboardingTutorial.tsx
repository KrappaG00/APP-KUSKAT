import React, { useState, useEffect, useCallback } from 'react';
import {
  GraduationCap,
  Layers,
  Sparkles,
  Award,
  ArrowRight,
  ArrowLeft,
  X,
  Languages,
  Printer,
  BookOpen,
  Scale,
} from 'lucide-react';
import { TutorialStep } from '../types';
import { useTranslation } from '../i18n';

interface OnboardingTutorialProps {
  isOpen: boolean;
  onClose: (dontShowAgain: boolean) => void;
}

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    title: 'Portal de Inicio, Institución, Convocatorias & 23 Áreas de Estudio',
    subtitle: '41,080 reactivos verificados (17,640 del banco base) en 23 áreas, 100% gratuito',
    badge: 'Paso 1 de 6 • Inicio & Convocatorias',
    description:
      'KUSKAT (fundado por Yeferson E. Perez) reúne en un solo lugar 41,080 reactivos verificados: 17,640 del banco base de admisión, 16,800 de la Escuela de Idiomas, 4,850 del refuerzo MINED-ESMATE y 1,790 de habilitaciones en Derecho, Salud y Técnica. Desde el Portal de Inicio accedes directamente a cada una de las 23 áreas.',
    bulletPoints: [
      '🏛️ Portal de Inicio (Vista 2D Accesible): Presentación del fundador, estadísticas 2D del proyecto y catálogo de las 23 áreas con su botón de Acceso Directo.',
      '🌐 Idioma de la plataforma: Puedes cambiarlo cuando quieras desde el botón de idioma en la cabecera superior.',
      '🎓 Admisión UES (7,500 reactivos): Matemática, Física, Química, Biología, Ciencias Sociales y Lenguaje.',
      '📜 Escalafón Docente (3,300 reactivos): Ascenso al Nivel Uno 2026 MINED en Formación General y 10 Especialidades.',
      '📘 Prueba AVANZO (3,000 reactivos): Bachillerato MINED en Precálculo, Ciudadanía y Valores, Ciencia y Tecnología, Lengua e Inglés.',
      '🏅 Jóvenes Talento - ASD (2,190 reactivos) y 🌱 Admisión ENA (1,400 reactivos): Preparación científica y agropecuaria integral.',
      '🛡️ Academia ANSP (250 reactivos): Prueba Cultural PNC en legislación, derecho constitucional y cultura salvadoreña.',
    ],
  },
  {
    step: 2,
    title: 'Categorías, Malla Curricular, Modo Aprender Español & Teoría APA 7.ª Edición',
    subtitle: 'Comparación bilingüe lado a lado, Glosario Técnico Intercultural y teoría de ≥500 palabras',
    badge: 'Paso 2 de 6 • Malla, EIB & Teoría APA',
    description:
      'El temario se organiza jerárquicamente por Institución, Materia, Tema y Sección. Incluye el nuevo Modo Intercultural "Aprender Español" para comunidades de lenguas originarias o extranjeras, además de módulos teóricos de mínimo 500 palabras con citas en formato APA 7.ª Edición.',
    bulletPoints: [
      '🤝 Modo "Aprender Español" (Bilingüe Lado a Lado o Apilado): Visualiza cada pregunta en tu lengua materna (Náhuat, Lenca, Kakawira, Inglés, Árabe o Mandarín) y en Español simultáneamente.',
      '📘 Glosario Técnico Intercultural Contextual: Explica conceptos clave (ej. fracción, ecuación, átomo, Constitución) distinguiendo entre términos propios revitalizados y préstamos técnicos justificados.',
      '🔔 Fallback Transparente al Español: Si un reactivo especializado aún está en proceso de traducción comunitaria, el sistema cae automáticamente al español mostrando un aviso discreto sin exponer claves crudas.',
      '📖 Teoría Académica Exhaustiva (≥500 palabras) y APA 7.ª Edición: Fundamentación epistemológica rigurosa con fuentes oficiales (MINED, UES, RAE, Cambridge, Duden).',
      '🌱 Niveles Pedagógicos (Básico, Intermedio y Admisión) y Buscador Instantáneo: Filtra preguntas en tiempo real con secciones colapsadas por defecto para máxima velocidad.',
    ],
  },
  {
    step: 3,
    title: 'Escuela de Idiomas Kuskat: 7 Lenguas & Menú de hasta 400 Preguntas',
    subtitle: '840 clases (≥500 palabras), 16,800 reactivos (400 por nivel), simulador con selector de idioma, área y conteo',
    badge: 'Paso 3 de 6 • Idiomas & Simulador',
    description:
      'Aprende y domina 7 idiomas estructurados bajo el estándar internacional MCER/CEFR (A1 a C2), con selector interactivo para elegir la lengua, el área temática y el número de reactivos (desde 10 hasta las 400 preguntas completas por nivel o banco íntegro).',
    bulletPoints: [
      '🗣️ 7 Idiomas Activos con Autónimos Nativos: Inglés (US vs. UK), Náhuat Pipil (Witzapan), Lenca Potón, Kakawira (Cacaopera), Alemán (DACH), Árabe (العربية — Fus\'ha y Levantino con RTL) y Mandarín (中文 — Pǔtōnghuà con Hanzi y Pinyin).',
      '⚙️ Menú de Configuración de Examen: Selecciona tu lengua, nivel MCER (A1-C2), área temática y cantidad de reactivos: 10, 25, 50, 100, 200, 400 (Banco Completo ⭐), TODAS o cantidad personalizada.',
      '📚 840 Clases Teóricas Rigurosas: 120 lecciones completas por idioma (20 por nivel A1-C2) con más de 500 palabras de contenido, diálogos culturales y citas APA 7.ª Edición.',
      '📝 16,800 Reactivos Multilingües: 2,400 preguntas oficiales por idioma (400 por nivel) evaluables en Opción Múltiple (A-D) o Verdadero/Falso (V/F) con mapa interactivo de navegación.',
      '🔊 Audio Nativo, Flashcards 3D y Conversores: Síntesis de voz Web Speech API, tarjetas 3D interactivas, diccionarios de verbos y conversores numéricos en vivo.',
    ],
  },
  {
    step: 4,
    title: 'Evaluación en Verdadero o Falso (V/F), KaTeX & Cuentas Nativas',
    subtitle: 'Doble modalidad evaluativa global, fórmulas matemáticas con aislamiento LTR/RTL y privacidad estricta',
    badge: 'Paso 4 de 6 • V/F, KaTeX & Cuentas',
    description:
      'Personaliza tu método de estudio alternando en cualquier momento entre Opción Múltiple (A–D) y Verdadero o Falso (V/F) para todas las preguntas del proyecto. Además, cuentas nativas seguras con sincronización de idioma y renderizado KaTeX con caché LRU.',
    bulletPoints: [
      '⚖️ Modo Verdadero o Falso (V/F) Global: Evalúate en V/F en cualquier examen, materia o idioma con proposiciones generadas dinámicamente.',
      '🎯 Opción Múltiple Tradicional (A–D): Cuatro alternativas con distractores pedagógicos calibrados y justificación oficial bilingüe.',
      '📐 Tipografía KaTeX con Caché LRU y Soporte RTL: Renderizado instantáneo de fórmulas matemáticas y químicas, manteniendo dirección LTR en ecuaciones incluso al usar la interfaz en Árabe.',
      '👤 Cuentas Nativas con SHA-256 y Sincronización de Idioma: Contraseñas cifradas localmente y guardado automático de tu idioma preferido en tu perfil.',
      '📝 Doble Consentimiento Explícito: Casillas independientes para Términos de Uso y Política de Privacidad auditada.',
    ],
  },
  {
    step: 5,
    title: 'Simulador Maestro, Remediación Inmediata & Ranking Top 1 / 10',
    subtitle: 'Práctica bilingüe hasta 400 preguntas, refuerzo de errores en vivo y ranking nacional',
    badge: 'Paso 5 de 6 • Simulador & Refuerzo',
    description:
      'Configura simulacros desde 5 hasta 400 preguntas por área o nivel con soporte completo del Modo Aprender Español. Si fallas una pregunta, el solucionario te permite activar de inmediato un reactivo equivalente para reforzar ese tema específico.',
    bulletPoints: [
      '🔄 Remediación Pedagógica en Solucionario: Ante cualquier error, practica al instante con una pregunta similar equivalente del mismo subtema.',
      '🌐 Soporte Multilingüe en Exámenes y Solucionario: Consulta la traducción intercultural y el glosario técnico tanto en Modo Tutor como al finalizar la prueba.',
      '⏱️ Temporizador Flexible y Modo Tutor: Elige 1.0 min, 1.5 min por reactivo o modo sin tiempo, con retroalimentación inmediata opcional.',
      '🏆 Puntuación Oficial KUSKAT: +1 punto por cada acierto, -2 puntos por cada error, con tope mínimo en 0 (cero saldo negativo).',
      '👑 Salón de Honor Top 1 & Top 10: Clasificación nacional por convocatoria (mostrando solo alias seguros) con filtros Diario, Mensual, Trimestral, Semestral y Anual.',
    ],
  },
  {
    step: 6,
    title: 'Resultados, Web Responsiva, Rendimiento Ultra-Rápido y Marco Legal',
    subtitle: 'Carga diferida lazy (<135 KB gzip), navegación móvil adaptativa, impresión a PDF y normativas de El Salvador',
    badge: 'Paso 6 de 6 • Rendimiento, PDF & Legal',
    description:
      'El proyecto está optimizado para ejecutarse en el menor tiempo posible mediante carga dinámica de idiomas y módulos, diseño 100% responsivo para móviles/tablets/PC y generación de boletas en PDF o LaTeX 100% en memoria.',
    bulletPoints: [
      '⚡ Rendimiento Optimizado (Lazy Loading): Los bancos de preguntas y diccionarios de idioma se cargan bajo demanda sin inflar el bundle inicial.',
      '📱 Diseño Web Responsivo y Accesible (WCAG 2.2 AA): Barra inferior en móviles, navegación por teclado (Flechas, Enter, Escape), foco visible y respeto a prefers-reduced-motion.',
      '📋 Historial en "CUENTA" e Impresión a PDF / LaTeX: Emite al instante tu boleta oficial, solucionario en PDF o código fuente TeX para Overleaf sin subir archivos a la nube.',
      '⚖️ Cumplimiento Legal Salvadoreño: Respaldado por la Constitución de El Salvador (Arts. 53-54), Ley de Comercio Electrónico y Delitos Informáticos.',
      '💬 Canales de Contacto: Conéctate con el creador Yeferson E. Perez por WhatsApp (+503 7657 4463) e Instagram (@Kuskat.es).',
    ],
  },
];

const getStepIcon = (stepNum: number) => {
  switch (stepNum) {
    case 1:
      return <GraduationCap className="w-5 h-5 text-amber-300" />;
    case 2:
      return <BookOpen className="w-5 h-5 text-blue-300" />;
    case 3:
      return <Languages className="w-5 h-5 text-emerald-300" />;
    case 4:
      return <Scale className="w-5 h-5 text-indigo-300" />;
    case 5:
      return <Award className="w-5 h-5 text-amber-300" />;
    case 6:
      return <Printer className="w-5 h-5 text-sky-300" />;
    default:
      return <Sparkles className="w-5 h-5 text-amber-300" />;
  }
};

export const OnboardingTutorial: React.FC<OnboardingTutorialProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(false);
  const { t, languageMeta } = useTranslation();

  // Navegación con teclado (Escape para salir, Flechas para avanzar/retroceder)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose(dontShowAgain);
      } else if (e.key === 'ArrowRight' && currentStep < TUTORIAL_STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentStep > 0) {
        setCurrentStep((prev) => prev - 1);
      }
    },
    [isOpen, currentStep, dontShowAgain, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  const step = TUTORIAL_STEPS[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === TUTORIAL_STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onClose(dontShowAgain);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    onClose(dontShowAgain);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tutorial-modal-title"
      dir={languageMeta.dir}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-in"
      onClick={handleSkip}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full max-h-[100dvh] sm:max-h-[90vh] overflow-hidden flex flex-col relative text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Tutorial con Progreso y Marca KUSKAT */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-4 sm:p-6 text-white relative shrink-0">
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-6 h-6 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 shadow-2xs">
                <img src="/kuskat_logo.png" alt="KUSKAT" className="w-full h-full object-contain" />
              </div>
              <span className="font-montenegrin text-[11px] sm:text-xs tracking-wider uppercase text-blue-200 font-bold truncate">
                {t('tutorial.welcomeTitle')}
              </span>
            </div>

            <button
              onClick={handleSkip}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer shrink-0"
              aria-label="Cerrar u omitir tutorial"
              title="Omitir tutorial (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <span className="inline-block mb-3 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider font-caslon max-w-full truncate">
            {step.badge}
          </span>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              {getStepIcon(step.step)}
            </div>
            <div className="min-w-0 flex-1">
              <h3 id="tutorial-modal-title" className="text-base sm:text-xl font-black tracking-tight text-white font-montenegrin leading-tight break-words">
                {step.title}
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-300 font-medium pt-1 font-caslon leading-snug">{step.subtitle}</p>
            </div>
          </div>

          {/* Barra de Progreso de 6 Pasos con Navegación Clickeable */}
          <div className="flex items-center gap-1.5 pt-4">
            {TUTORIAL_STEPS.map((stepItem, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentStep(idx)}
                title={`Ir al Paso ${idx + 1}: ${stepItem.title}`}
                className={`h-2 flex-1 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentStep
                    ? 'bg-amber-400 ring-2 ring-amber-400/50 scale-y-110 shadow-xs'
                    : idx < currentStep
                    ? 'bg-blue-400 hover:bg-blue-300'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Paso ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Contenido del Paso */}
        <div className="flex-1 min-h-0 p-4 sm:p-7 space-y-4 text-xs sm:text-sm leading-relaxed overflow-y-auto touch-scroll">
          <p className="text-slate-600 font-medium leading-relaxed">{step.description}</p>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-3.5 sm:p-4 space-y-2.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Puntos clave a recordar:
            </span>
            <ul className="space-y-2 text-slate-700">
              {step.bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-slate-900">•</span>
                  <span className="min-w-0 break-words">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pie del Tutorial con Controles */}
        <div className="bg-slate-50 px-4 sm:px-7 py-3 sm:py-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 text-xs shrink-0">
          {/* Casilla: No volver a mostrar */}
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 hover:text-slate-900 font-medium">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer shrink-0"
            />
            <span>No volver a mostrar este tutorial</span>
          </label>

          {/* Botones de Navegación */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-[11px] font-bold text-slate-400 font-mono hidden sm:inline mr-1 whitespace-nowrap">
              Paso {currentStep + 1} de {TUTORIAL_STEPS.length}
            </span>

            <button
              onClick={handleSkip}
              className="px-3 py-2 text-slate-500 hover:text-slate-800 font-semibold rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {t('tutorial.skip')}
            </button>

            <div className="flex items-center gap-2 ml-auto">
              {!isFirstStep && (
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 px-3 py-2 text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 font-bold rounded-xl transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
                  aria-label={t('tutorial.prev')}
                >
                  <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden min-[380px]:inline">{t('tutorial.prev')}</span>
                </button>
              )}

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{isLastStep ? t('tutorial.finish') : t('tutorial.next')}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
