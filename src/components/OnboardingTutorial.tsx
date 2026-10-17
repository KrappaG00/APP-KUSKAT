import React, { useState, useEffect, useCallback } from 'react';
import {
  GraduationCap,
  Shield,
  Layers,
  Sparkles,
  Award,
  ArrowRight,
  ArrowLeft,
  X,
  Languages,
  Printer
} from 'lucide-react';
import { TutorialStep } from '../types';

interface OnboardingTutorialProps {
  isOpen: boolean;
  onClose: (dontShowAgain: boolean) => void;
}

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    title: 'Elige tu Institución, Materia & Portal 3D Estable',
    subtitle: 'Preparación de alto rendimiento para exámenes oficiales de El Salvador',
    badge: 'Paso 1 de 6 • Convocatorias & 3D',
    description:
      'KUSKAT (creado por Yeferson E. Perez) reúne un banco maestro de 34,440 preguntas de selección múltiple (17,640 en 6 convocatorias de exigencia nacional y 16,800 en la Escuela de Idiomas), complementado con un Portal 3D interactivo con mapa de El Salvador fijo y adaptado a cualquier pantalla.',
    bulletPoints: [
      '🎓 Admisión UES (7,500 reactivos): Matemática, Física, Química, Biología, Ciencias Sociales y Lenguaje.',
      '📜 Escalafón Docente (3,300 reactivos): Ascenso al Nivel Uno 2026 MINED en Formación General y 10 Especialidades.',
      '📘 Prueba AVANZO (3,000 reactivos): Bachillerato MINED en Precálculo, Ciudadanía y Valores, Ciencia y Tecnología, Lengua e Inglés.',
      '🏅 Jóvenes Talento - ASD (2,190 reactivos): 5.°, 6.° y 7.° Grado en Matemática y Ciencias Naturales.',
      '🌱 Admisión ENA (1,400 reactivos): Técnico Agropecuario en Matemáticas Agrarias, Química, Biología y Lenguaje.',
      '🛡️ Academia ANSP (250 reactivos): Prueba Cultural PNC en legislación, derecho constitucional y cultura salvadoreña.',
      '🗺️ Mapa 3D Estable y Adaptativo: Geografía de los 14 departamentos fija (sin tambaleo) que se adapta automáticamente a celulares, tablets y computadoras.',
    ],
  },
  {
    step: 2,
    title: 'Categorías, Temario y Secciones Cerradas por Defecto',
    subtitle: 'Navegación fluida y carga optimizada para estudiar sin demoras',
    badge: 'Paso 2 de 6 • Malla Curricular',
    description:
      'El temario se organiza jerárquicamente por Tipo de Institución, Materia, Tema y Sección. Todas las secciones aparecen cerradas por defecto para que la página cargue de inmediato y tú despliegues solo lo que necesitas estudiar.',
    bulletPoints: [
      '📂 Secciones cerradas por defecto: Despliega únicamente la sección de tu interés o pulsa "Expandir Todo" con un solo clic.',
      '🌱 Nivel Básico: Conceptos elementales, definiciones fundamentales y ejemplos introductorios.',
      '⚙️ Nivel Intermedio: Procedimientos paso a paso, propiedades analíticas, algoritmos y fórmulas aplicadas.',
      '🎯 Nivel Admisión: Reactivos integradores con el rigor, estructura y estándar real de la prueba oficial.',
      '🔍 Buscador Inteligente: Filtra al instante por palabras clave, términos científicos o fórmulas KaTeX.',
    ],
  },
  {
    step: 3,
    title: 'Escuela de Idiomas Kuskat: 7 Lenguas & Rescate Cultural',
    subtitle: '840 clases exhaustivas (≥500 palabras), 16,800 reactivos (400 por nivel), audio nativo y flashcards 3D',
    badge: 'Paso 3 de 6 • Idiomas Multilingüe',
    description:
      'Aprende y domina 7 idiomas estructurados bajo el estándar internacional MCER/CEFR (A1 a C2), diseñados especialmente desde la perspectiva lingüística del español de El Salvador, integrando lenguas originarias y globales.',
    bulletPoints: [
      '🗣️ 7 Idiomas Disponibles: Inglés (US vs. UK), Náhuat Pipil (Witzapan/IRIN), Lenca Potón, Kakawira (Cacaopera), Alemán (DACH), Árabe (Fus\'ha y Levantino) y Mandarín (Pǔtōnghuà con Hanzi y Pinyin).',
      '📚 840 Clases Teóricas Rigurosas: 120 lecciones completas por idioma (20 por nivel A1-C2) con más de 500 palabras de contenido pedagógico, diálogos culturales, tablas gramaticales y ejercicios resueltos.',
      '📝 Simulador Multilingüe (16,800 Reactivos): 2,400 preguntas oficiales por idioma (400 por nivel) con explicaciones gramaticales detalladas y sistema de puntuación oficial +1 / -2.',
      '🔢 Fundamentos y Conversores Numéricos en Vivo: Conversores interactivos decimales, vigesimales náhuat, decenas invertidas en alemán, numeración árabe y caracteres Hanzi en tiempo real.',
      '🔊 Pronunciación con Audio y Flashcards 3D: Abecedarios fonéticos, catálogo de colores, objetos cotidianos con síntesis de voz Web Speech API, verbos esenciales y tarjetas de memoria con volteo tridimensional.',
    ],
  },
  {
    step: 4,
    title: 'Cuentas Nativas, KaTeX y Doble Consentimiento',
    subtitle: 'Inicia sesión sin intermediarios externos y con estricta minimización de datos',
    badge: 'Paso 4 de 6 • Cuentas & KaTeX',
    description:
      'Crea tu cuenta de estudiante nativa directamente en KUSKAT con solo usuario y contraseña (sin Google ni Facebook). Todas las expresiones científicas se renderizan en tipografía KaTeX nítida y legible.',
    bulletPoints: [
      '👤 Cuenta Nativa sin Intermediarios: Regístrate con tu usuario y contraseña cifrada con SHA-256 localmente en tu navegador.',
      '🔒 Minimización de Datos: Solo se solicita usuario, correo y clave. Cero recopilación de fotos o datos innecesarios.',
      '📝 Dos Casillas Separadas: Consentimiento explícito e independiente para Términos de Uso y Política de Privacidad con auditoría.',
      '📐 Tipografía KaTeX Profesional: Fracciones, integrales, matrices, vectores y reacciones químicas de alta resolución.',
      '🎓 Modo Tutor Inmediato: Actívalo en el simulador para recibir la explicación y solución KaTeX al momento de responder.',
    ],
  },
  {
    step: 5,
    title: 'Simulador de Examen y Tabla Top 1 / Top 10 Nacional',
    subtitle: 'Cronómetro oficial, puntuación +1 / -2 y ranking con reinicio anual',
    badge: 'Paso 5 de 6 • Simulador & Ranking',
    description:
      'Ponte a prueba en condiciones reales de examen. Al final de la sección encontrarás la tabla de clasificación nacional con puntuación oficial KUSKAT y filtros por periodos académicos.',
    bulletPoints: [
      '⏱️ Temporizador y Modo Táctil: Elige 1.0 min, 1.5 min por pregunta o práctica libre con interfaz 100% web responsive.',
      '🏆 Puntuación Oficial: +1 punto por cada acierto, -2 puntos por cada error, con tope mínimo en 0 (sin saldo negativo).',
      '👑 Líderes Top 1 Inicial: Antes de interactuar con la tabla, se exhibe el Top 1 de cada una de las convocatorias institucionales.',
      '📊 Tabla Top 10 Interactiva: Filtra por periodos Diario, Mensual, Trimestral, Semestral y Anual.',
      '🔄 Ciclo Anual (1 Ene - 31 Dic): El ranking anual inicia el 1 de enero y se reinicia automáticamente cada 31 de diciembre.',
    ],
  },
  {
    step: 6,
    title: 'Resultados, Historial en Texto, Impresión a PDF y Marco Legal',
    subtitle: 'Boleta de notas 100% en memoria, cero archivos en la nube y normativas de El Salvador',
    badge: 'Paso 6 de 6 • Exámenes & Legal',
    description:
      'En el apartado "CUENTA" puedes consultar todos tus exámenes realizados guardados en formato de texto. Genera boletas oficiales en PDF sin almacenar ningún archivo temporal en la nube.',
    bulletPoints: [
      '📋 Historial de Exámenes Realizados: Revisa en "CUENTA" tus evaluaciones anteriores con aciertos, errores, fecha y puntaje.',
      '🖨️ Imprimir / Exportar a PDF: Emite al instante tu boleta oficial y solucionario para imprimir o descargar en PDF en tu navegador.',
      '🛡️ Cero Documentos en la Nube: Todo se genera en la memoria de tu dispositivo; al salir no queda ningún archivo temporal en servidores.',
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
      return <Layers className="w-5 h-5 text-blue-300" />;
    case 3:
      return <Languages className="w-5 h-5 text-emerald-300" />;
    case 4:
      return <Shield className="w-5 h-5 text-indigo-300" />;
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
                KUSKAT • Guía Tutorial Oficial
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
              Omitir
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
