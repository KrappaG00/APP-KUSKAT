import React, { useState, useEffect, useCallback } from 'react';
import {
  GraduationCap,
  Shield,
  Layers,
  Sparkles,
  Award,
  Clock,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  HelpCircle,
  FileCode,
} from 'lucide-react';
import { TutorialStep } from '../types';

interface OnboardingTutorialProps {
  isOpen: boolean;
  onClose: (dontShowAgain: boolean) => void;
}

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    title: 'Elige tu Institución y Materia',
    subtitle: 'Preparación a tu medida',
    badge: 'Paso 1 de 5 • Ámbitos',
    description:
      'KUSKAT te permite prepararte tanto para el examen de admisión de la Universidad de El Salvador (UES) como para la prueba cultural de la Academia Nacional de Seguridad Pública (ANSP), o practicar ambos en un examen integral.',
    bulletPoints: [
      '🎓 Admisión UES: 7,500 reactivos en 5 materias (Matemática, Física/Química, Biología, Sociales y Lenguaje).',
      '🛡️ Academia ANSP: 250 reactivos oficiales en 10 materias de formación institucional y ciudadana.',
      '🌟 Examen Mixto: Simulacros combinados con preguntas balanceadas de ambas instituciones.',
    ],
  },
  {
    step: 2,
    title: 'Categorías y Niveles de Aprendizaje',
    subtitle: 'Aprende desde los fundamentos hasta el nivel de examen',
    badge: 'Paso 2 de 5 • Niveles',
    description:
      'No necesitas ser un experto para comenzar. El temario está organizado pedagógicamente para que construyas tu conocimiento paso a paso.',
    bulletPoints: [
      '🌱 Nivel Básico: Conceptos clave, definiciones elementales y vocabulario guiado.',
      '⚙️ Nivel Intermedio: Procedimientos paso a paso, propiedades y aplicación de fórmulas.',
      '🏆 Nivel Admisión: Preguntas integradoras con la misma estructura y rigor de la prueba real.',
    ],
  },
  {
    step: 3,
    title: 'Resolución Activa con KaTeX',
    subtitle: 'Fórmulas legibles y explicaciones claras',
    badge: 'Paso 3 de 5 • Soluciones',
    description:
      'Todas las fórmulas matemáticas y científicas se presentan en tipografía clara y lenguaje humano. Al contestar una pregunta en Modo Tutor, verás la justificación inmediata.',
    bulletPoints: [
      '📐 Tipografía KaTeX de alta calidad para fracciones, raíces, potencias y símbolos.',
      '💡 Solucionario comentado: Explicación de por qué la clave es la correcta.',
      '🔁 Ejercicio similar: Opción para reforzar la competencia si cometes un error.',
    ],
  },
  {
    step: 4,
    title: 'Simulador de Examen Configurable',
    subtitle: 'Ponte a prueba en condiciones reales',
    badge: 'Paso 4 de 5 • Simulador',
    description:
      'Configura tu sesión de prueba según tu tiempo disponible: desde un test rápido de 5 preguntas hasta un simulacro oficial de 50 reactivos con cronómetro.',
    bulletPoints: [
      '⏱️ Temporizador oficial (1.0 o 1.5 min por reactivo) o modo sin límite para estudiar a tu ritmo.',
      '🚩 Marcador de reactivos ("Revisar luego") para no estancarte en preguntas dudosas.',
      '🔢 Matriz de salto rápido para navegar entre preguntas con un solo clic.',
    ],
  },
  {
    step: 5,
    title: 'Resultados y Diagnóstico de Rendimiento',
    subtitle: 'Conoce tu nota oficial y refuerza tus debilidades',
    badge: 'Paso 5 de 5 • Diagnóstico',
    description:
      'Al entregar tu examen obtendrás tu calificación en la escala salvadoreña (0.0 a 10.0), el porcentaje de aciertos y un desglose por asignatura.',
    bulletPoints: [
      '📊 Desglose por materia: Identifica exactamente en qué temas necesitas más práctica.',
      '📄 Exportador LaTeX: Descarga tu examen o solucionario en formato .tex para imprimirlo o estudiarlo sin conexión.',
      '❓ Ayuda siempre disponible: Puedes volver a ver este tutorial en cualquier momento desde el menú superior.',
    ],
  },
];

export const OnboardingTutorial: React.FC<OnboardingTutorialProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(false);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-in"
      onClick={handleSkip}
    >
      <div
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full overflow-hidden flex flex-col relative text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Tutorial con Progreso */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-5 sm:p-6 text-white relative">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
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

          <h3 id="tutorial-modal-title" className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {step.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-medium pt-0.5">{step.subtitle}</p>

          {/* Barra de Progreso de 5 Pasos */}
          <div className="flex items-center gap-1.5 pt-4">
            {TUTORIAL_STEPS.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  idx === currentStep
                    ? 'bg-amber-400 ring-2 ring-amber-400/40'
                    : idx < currentStep
                    ? 'bg-blue-400'
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contenido del Paso */}
        <div className="p-5 sm:p-7 space-y-4 text-xs sm:text-sm leading-relaxed overflow-y-auto max-h-[60vh]">
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
            <button
              onClick={handleSkip}
              className="px-3 py-2 text-slate-500 hover:text-slate-800 font-semibold rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              Omitir tutorial
            </button>

            {!isFirstStep && (
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 px-3 py-2 text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 font-bold rounded-xl transition-colors cursor-pointer shadow-2xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>{isLastStep ? 'Comenzar a estudiar' : 'Siguiente'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
