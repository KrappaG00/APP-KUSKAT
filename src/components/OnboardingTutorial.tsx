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
    title: 'Elige tu Institución, Materia & Portal 3D',
    subtitle: 'Preparación para la aprobación de exámenes de Centro América',
    badge: 'Paso 1 de 5 • Convocatorias & 3D',
    description:
      'KUSKAT (By Yeferson E. Perez) reúne un banco maestro de 17,640 reactivos oficiales organizados en 6 convocatorias de alta exigencia académica y profesional, complementado con un Portal 3D interactivo con el mapa de los 14 departamentos de El Salvador.',
    bulletPoints: [
      '🎓 Admisión UES (7,500 reactivos): Matemática, Física, Química, Biología, Ciencias Sociales y Lenguaje.',
      '📜 Escalafón Docente (3,300 reactivos): Ascenso al Nivel Uno 2026 MINED en Formación General y 10 Especialidades.',
      '📘 Prueba AVANZO (3,000 reactivos): Bachillerato MINED en Precálculo, Ciudadanía, Ciencia y Tecnología, Lengua e Inglés.',
      '🏅 Jóvenes Talento - ASD (2,190 reactivos): 5.°, 6.° y 7.° Grado en Matemática y Ciencias Naturales.',
      '🌱 Admisión ENA (1,400 reactivos): Técnico Agropecuario 2027 en Matemáticas Agrarias, Química, Biología y Lenguaje.',
      '🛡️ Academia ANSP (250 reactivos): Prueba Cultural PNC en legislación, derecho constitucional y cultura salvadoreña.',
      '🗺️ Portal 3D Interactivo: Explora el mapa de El Salvador, indicadores educativos departamentales y estadísticas espaciales.',
    ],
  },
  {
    step: 2,
    title: 'Categorías, Secciones y Niveles de Aprendizaje',
    subtitle: 'Navegación limpia con secciones colapsadas por defecto',
    badge: 'Paso 2 de 5 • Temario & Malla',
    description:
      'El temario está estructurado jerárquicamente por Tipo de Institución, Materia, Tema y Sección. Todas las secciones aparecen cerradas por defecto para una lectura cómoda y rápida, permitiéndote abrir solo lo que necesitas estudiar.',
    bulletPoints: [
      '📂 Secciones cerradas por defecto: Despliega únicamente la sección de tu interés o pulsa "Expandir Todo" con un solo clic.',
      '🌱 Nivel Básico: Conceptos elementales, definiciones clave y ejemplos cotidianos para afianzar los fundamentos.',
      '⚙️ Nivel Intermedio: Procedimientos paso a paso, propiedades analíticas, algoritmos y aplicación de fórmulas.',
      '🎯 Nivel Admisión: Reactivos integradores con el rigor, estructura y estándar real de la prueba oficial.',
      '🔍 Buscador Inteligente: Filtra al instante por palabras clave, términos científicos o fórmulas KaTeX.',
    ],
  },
  {
    step: 3,
    title: 'Resolución Activa con KaTeX y Solucionarios',
    subtitle: 'Fórmulas de alta definición y justificaciones analíticas',
    badge: 'Paso 3 de 5 • KaTeX & Soluciones',
    description:
      'Todas las expresiones matemáticas, químicas y científicas se renderizan en tipografía KaTeX nítida y legible. Cada reactivo incluye su solución analítica detallada.',
    bulletPoints: [
      '📐 Tipografía KaTeX Profesional: Fracciones, integrales, raíces, matrices, vectores y simbología científica clara.',
      '💡 Justificación Pedagógica: Explicación de por qué la clave es la correcta y cuál es el error común en los distractores.',
      '📋 Copiado con Un Clic: Copia reactivos individuales o secciones completas con formato limpio para tus apuntes.',
      '🎓 Modo Tutor Inmediato: Actívalo en el simulador para recibir la retroalimentación y solución KaTeX justo al responder.',
    ],
  },
  {
    step: 4,
    title: 'Simulador de Examen Configurable y Táctil',
    subtitle: 'Evaluación formal con cronómetro oficial y diseño 100% responsive',
    badge: 'Paso 4 de 5 • Simulador Formal',
    description:
      'Ponte a prueba en condiciones reales de evaluación. Configura simulacros desde 5 reactivos rápidos hasta exámenes oficiales completos de 50 o 100 preguntas.',
    bulletPoints: [
      '⏱️ Temporizador Oficial: Elige entre 1.0 min o 1.5 min por pregunta, o practica sin límite a tu propio ritmo.',
      '🚩 Marcador de Reactivos: Marca preguntas dudosas ("Revisar luego") para no perder tiempo y volver a ellas al final.',
      '🔢 Matriz de Salto Rápido: Monitorea qué preguntas has respondido, cuáles dejaste en blanco y navega con un solo toque.',
      '📱 100% Web Responsive: Optimizado con botones táctiles ergonómicos (mínimo 44px) para celulares, tablets y PC.',
    ],
  },
  {
    step: 5,
    title: 'Resultados, Diagnóstico, Impresión a PDF y LaTeX',
    subtitle: 'Boleta de notas 100% local, cero almacenamiento en la nube y privacidad total',
    badge: 'Paso 5 de 5 • Diagnóstico & PDF',
    description:
      'Al finalizar tu prueba obtendrás tu nota en la escala salvadoreña (0.0 a 10.0), diagnóstico por materia y opciones completas para imprimir y exportar sin subir ningún archivo a la nube.',
    bulletPoints: [
      '🖨️ Imprimir / Exportar a PDF: Genera al instante tu boleta oficial y solucionario para imprimir o guardar en PDF directamente en tu navegador.',
      '🔒 Privacidad Absoluta (Cero Nube): Todo se procesa en la memoria de tu dispositivo; al salir no queda ningún documento temporal guardado en servidores ni en la nube.',
      '📄 Exportador de Código LaTeX: Descarga el archivo .tex con clave y solucionario listo para Overleaf o TeX Live.',
      '💬 Soporte Directo con el Desarrollador: Comunícate con Yeferson E. Perez mediante WhatsApp KUSKAT (+503 7657 4463) e Instagram (@Kuskat.es).',
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
        {/* Cabecera del Tutorial con Progreso y Marca KUSKAT */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-5 sm:p-6 text-white relative">
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 shadow-2xs">
                <img src="/kuskat_logo.png" alt="KUSKAT" className="w-full h-full object-contain" />
              </div>
              <span className="font-montenegrin text-xs tracking-wider uppercase text-blue-200 font-bold">
                KUSKAT • Guía Tutorial
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

          <h3 id="tutorial-modal-title" className="text-xl sm:text-2xl font-black tracking-tight text-white font-montenegrin">
            {step.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-medium pt-1 font-caslon">{step.subtitle}</p>

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
