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
  Globe,
} from 'lucide-react';
import { TutorialStep } from '../types';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '../i18n';

interface OnboardingTutorialProps {
  isOpen: boolean;
  onClose: (dontShowAgain: boolean) => void;
}

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    title: 'Elige tu Idioma Intercultural, Institución, Materia & Portal 3D / 2D',
    subtitle: 'Sistema multilingüe en 7 lenguas, accesibilidad WCAG 2.2 AA y 34,440 preguntas oficiales',
    badge: 'Paso 1 de 6 • Idioma, Convocatorias & 3D',
    description:
      'KUSKAT (creado por Yeferson E. Perez) integra un Sistema Multilingüe Intercultural persistente (Español, Náhuat, Lenca, Kakawira, English, العربية con soporte RTL y 中文) junto a un banco maestro de 34,440 preguntas de selección múltiple y un Portal 3D con alternativa 2D accesible.',
    bulletPoints: [
      '🌐 Selector de Idioma Intercultural (kuskat.lang): Cambia sin recargar la página entre Español, Náhuat, Lenca, Kakawira, Inglés, Árabe (RTL) y Mandarín desde la cabecera, el Portal 3D o este tutorial.',
      '♿ Portal 3D + Vista 2D Accesible: Explora el mapa interactivo 3D de El Salvador o activa el botón "Saltar experiencia 3D (Vista 2D accesible)" para navegar por teclado los 14 departamentos.',
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
      'Personaliza tu método de estudio alternando en cualquier momento entre Opción Múltiple (A–D) y Verdadero o Falso (V/F) para todas las 34,440 preguntas del proyecto. Además, cuentas nativas seguras con sincronización de idioma y renderizado KaTeX con caché LRU.',
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
      '💬 Canales de Contacto: Conéctate con el creador Yeferson E. Perez por WhatsApp (+503 7943 9901) e Instagram (@Kuskat.es).',
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-in"
      onClick={handleSkip}
    >
      <div
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full overflow-hidden flex flex-col relative text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Tutorial con Progreso y Marca KUSKAT */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-5 sm:p-6 text-white relative">
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 shadow-2xs">
                <img src="/kuskat_logo.png" alt="KUSKAT" className="w-full h-full object-contain" />
              </div>
              <span className="font-montenegrin text-xs tracking-wider uppercase text-blue-200 font-bold">
                {t('tutorial.welcomeTitle')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider font-caslon">
                {step.badge}
              </span>
              <button
                onClick={handleSkip}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
                aria-label="Cerrar u omitir tutorial"
                title="Omitir tutorial (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              {getStepIcon(step.step)}
            </div>
            <div>
              <h3 id="tutorial-modal-title" className="text-lg sm:text-xl font-black tracking-tight text-white font-montenegrin leading-tight">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium pt-0.5 font-caslon">{step.subtitle}</p>
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
        <div className="p-5 sm:p-7 space-y-4 text-xs sm:text-sm leading-relaxed overflow-y-auto max-h-[60vh] touch-scroll">
          {/* Selector de idioma intercultural integrado en el tutorial */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-emerald-50/70 border border-blue-200/80 space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-[11px] font-extrabold text-blue-950 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                {t('tutorial.chooseLanguageStep')}
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white text-blue-800 border border-blue-200">
                {languageMeta.nativeName} ({languageMeta.dir.toUpperCase()})
              </span>
            </div>
            <LanguageSwitcher variant="inline-pills" showLearnSpanishToggle={true} />
          </div>

          <p className="text-slate-600 font-medium leading-relaxed">{step.description}</p>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-2.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Puntos clave a recordar:
            </span>
            <ul className="space-y-2 text-slate-700">
              {step.bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-slate-900">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pie del Tutorial con Controles */}
        <div className="bg-slate-50 px-5 sm:px-7 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          {/* Casilla: No volver a mostrar */}
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 hover:text-slate-900 font-medium">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
            />
            <span>No volver a mostrar este tutorial</span>
          </label>

          {/* Botones de Navegación */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-[11px] font-bold text-slate-400 font-mono hidden sm:inline mr-1">
              Paso {currentStep + 1} de {TUTORIAL_STEPS.length}
            </span>

            <button
              onClick={handleSkip}
              className="px-3 py-2 text-slate-500 hover:text-slate-800 font-semibold rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              {t('tutorial.skip')}
            </button>

            {!isFirstStep && (
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 px-3 py-2 text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 font-bold rounded-xl transition-colors cursor-pointer shadow-2xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t('tutorial.prev')}</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>{isLastStep ? t('tutorial.finish') : t('tutorial.next')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
