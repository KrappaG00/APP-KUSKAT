import React, { useState, useMemo, useEffect } from 'react';
import {
  SlidersHorizontal,
  Activity,
  Heart,
  Pipette,
  Zap,
  RotateCcw,
  BookOpen,
  Info,
  ChevronRight,
  TrendingUp,
  Scale,
  Sparkles,
  CheckCircle2,
  XCircle,
  Award,
  ClipboardCheck,
} from 'lucide-react';
import { KaTeXMath } from '../utils/mathRenderer';

export interface FormulaLabQuestion {
  id: string;
  topic: string;
  statement: string;
  options: Record<'A' | 'B' | 'C' | 'D', string>;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  source: string;
  distractorRationale: Record<'A' | 'B' | 'C' | 'D', string>;
}

export const FORMULA_LAB_QUESTIONS: FormulaLabQuestion[] = [
  {
    id: 'flab-q01',
    topic: 'Ley de Hagen-Poiseuille',
    statement:
      'De acuerdo con la Ley de Hagen-Poiseuille ($R = \\frac{8\\eta L}{\\pi r^4}$), si una arteriola sufre vasoconstricción y su radio luminal $r$ se reduce a la mitad ($r/2$) manteniendo constantes la viscosidad y la longitud, ¿en qué factor se multiplica la resistencia vascular?',
    options: {
      A: 'Se multiplica por 4 veces',
      B: 'Se multiplica por 8 veces',
      C: 'Se multiplica por 16 veces',
      D: 'Se reduce a la mitad (0.5 veces)',
    },
    correctAnswer: 'C',
    explanation:
      'Como la resistencia hidráulica $R$ es inversamente proporcional a la cuarta potencia del radio ($r^4$), al reducir $r$ a $1/2$, el denominador se vuelve $(1/2)^4 = 1/16$, por lo que $R$ aumenta exactamente 16 veces.',
    source: 'MINSAL — Guías Clínicas de Fisiología Cardiovascular y Hemodinámica',
    distractorRationale: {
      A: 'Incorrecto: multiplicar por 4 correspondería a una dependencia cuadrática inversa ($1/r^2$), válida para área transversal pero no para resistencia laminar.',
      B: 'Incorrecto: el factor 8 aparece en el numerador de la ecuación de Poiseuille, no como exponente del radio.',
      C: 'Correcto: $(1/0.5)^4 = 2^4 = 16$, demostrando que pequeñas variaciones del tono arteriolar controlan drásticamente el flujo sanguíneo.',
      D: 'Incorrecto: disminuir el radio aumenta la resistencia al flujo, nunca la reduce.',
    },
  },
  {
    id: 'flab-q02',
    topic: 'Ley de Hagen-Poiseuille',
    statement:
      'En un paciente con policitemia vera donde la viscosidad sanguínea relativa $\\eta$ se duplica ($2\\eta$) sin cambios en el radio vascular ni en el gradiente de presión $\\Delta P$, ¿qué ocurre con el flujo sanguíneo laminar $Q$?',
    options: {
      A: 'El flujo $Q$ se reduce a la mitad ($Q/2$)',
      B: 'El flujo $Q$ se duplica ($2Q$)',
      C: 'El flujo $Q$ aumenta cuatro veces ($4Q$)',
      D: 'El flujo $Q$ permanece invariable',
    },
    correctAnswer: 'A',
    explanation:
      'Según $Q = \\frac{\\Delta P \\cdot \\pi r^4}{8\\eta L}$, el flujo $Q$ es inversamente proporcional a la viscosidad $\\eta$. Si $\\eta$ se duplica con $\\Delta P$ constante, el flujo cae a la mitad.',
    source: 'MINSAL / OPS-OMS — Manual de Hematología y Biofísica de Fluidos',
    distractorRationale: {
      A: 'Correcto: al duplicarse la viscosidad $\\eta$ en el denominador, la resistencia $R$ se duplica y el flujo $Q = \\Delta P / R$ disminuye a la mitad.',
      B: 'Incorrecto: el flujo varía inversamente con la viscosidad, no de manera directa.',
      C: 'Incorrecto: un aumento cuádruple solo ocurriría si el radio aumentara por un factor de $\\sqrt{2}$ manteniendo $\\eta$ constante.',
      D: 'Incorrecto: la viscosidad es un determinante directo de la resistencia hidráulica.',
    },
  },
  {
    id: 'flab-q03',
    topic: 'Ecuación de Henderson-Hasselbalch',
    statement:
      'Utilizando la ecuación de Henderson-Hasselbalch ($\\text{pH} = 6.10 + \\log_{10}\\frac{[\\text{HCO}_3^-]}{0.03 \\cdot P_{\\text{CO}_2}}$), si un paciente presenta $[\\text{HCO}_3^-] = 24\\text{ mEq/L}$ y $P_{\\text{CO}_2} = 40\\text{ mmHg}$, ¿cuál es el cociente $[\\text{HCO}_3^-] / (0.03 \\cdot P_{\\text{CO}_2})$ y el pH arterial resultante?',
    options: {
      A: 'Cociente 10:1 y pH = 7.10',
      B: 'Cociente 20:1 y pH = 7.40',
      C: 'Cociente 40:1 y pH = 7.70',
      D: 'Cociente 1:1 y pH = 6.10',
    },
    correctAnswer: 'B',
    explanation:
      'El denominador es $0.03 \\times 40 = 1.2\\text{ mEq/L}$. Al dividir $24 / 1.2 = 20$. Como $\\log_{10}(20) \\approx 1.30$, resulta $\\text{pH} = 6.10 + 1.30 = 7.40$.',
    source: 'MINSAL — Protocolos de Atención de Cuidados Críticos y Gasometría Arterial',
    distractorRationale: {
      A: 'Incorrecto: un cociente 10:1 ocurriría si $[\\text{HCO}_3^-]$ cayera a $12\\text{ mEq/L}$ con $P_{\\text{CO}_2} = 40\\text{ mmHg}$, produciendo acidosis severa.',
      B: 'Correcto: la relación fisiológica 20:1 entre base conjugada y ácido carbónico disuelto mantiene el pH arterial exactamente en 7.40.',
      C: 'Incorrecto: un cociente 40:1 correspondería a alcalosis significativa ($\\log_{10}(40) \\approx 1.60$, pH = 7.70).',
      D: 'Incorrecto: el pH = 6.10 es el $pK_a$ del sistema bicarbonato cuando ambas concentraciones son iguales (1:1), incompatible con la vida.',
    },
  },
  {
    id: 'flab-q04',
    topic: 'Equilibrio Ácido-Base y Compensación',
    statement:
      'En un paciente con acidosis metabólica cuya concentración sérica es $[\\text{HCO}_3^-] = 14\\text{ mEq/L}$, ¿cuál es la $P_{\\text{CO}_2}$ esperada según la Fórmula de Winter ($P_{\\text{CO}_2} = 1.5 \\cdot [\\text{HCO}_3^-] + 8 \\pm 2$)?',
    options: {
      A: 'Entre 27 y 31 mmHg',
      B: 'Entre 38 y 42 mmHg',
      C: 'Entre 16 y 20 mmHg',
      D: 'Entre 45 y 49 mmHg',
    },
    correctAnswer: 'A',
    explanation:
      'Aplicando la Fórmula de Winter: $1.5 \\times 14 + 8 = 21 + 8 = 29\\text{ mmHg}$. Con el margen de $\\pm 2\\text{ mmHg}$, el rango compensatorio esperado es de 27 a 31 mmHg.',
    source: 'MINSAL / OPS-OMS — Guía de Diagnóstico de Trastornos Ácido-Base',
    distractorRationale: {
      A: 'Correcto: $1.5(14) + 8 = 29 \\pm 2\\text{ mmHg}$ indica compensación respiratoria adecuada mediante hiperventilación.',
      B: 'Incorrecto: 38 a 42 mmHg corresponde a normocapnia, lo que indicaría acidosis respiratoria agregada por falta de compensación.',
      C: 'Incorrecto: valores menores a 20 mmHg sugieren alcalosis respiratoria concomitante.',
      D: 'Incorrecto: una $P_{\\text{CO}_2}$ superior a 45 mmHg refleja retención de $\\text{CO}_2$ (acidosis respiratoria mixta).',
    },
  },
  {
    id: 'flab-q05',
    topic: 'Farmacocinética Compartimental',
    statement:
      'Para un fármaco con cinética de primer orden, volumen de distribución $V_d = 42\\text{ L}$ y aclaramiento sistémico $CL = 3.5\\text{ L/h}$, ¿cuál es la vida media de eliminación ($t_{1/2} = \\frac{0.693 \\cdot V_d}{CL}$)?',
    options: {
      A: '4.16 horas',
      B: '8.32 horas',
      C: '12.00 horas',
      D: '17.33 horas',
    },
    correctAnswer: 'B',
    explanation:
      'Sustituyendo en la ecuación: $t_{1/2} = \\frac{0.693 \\times 42}{3.5} = 0.693 \\times 12 = 8.316 \\approx 8.32\\text{ horas}$.',
    source: 'MINSAL — Formulario Nacional de Medicamentos y Farmacología Clínica',
    distractorRationale: {
      A: 'Incorrecto: 4.16 h equivale a dividir el resultado real entre 2, confundiendo $0.693$ con $0.346$.',
      B: 'Correcto: $42 / 3.5 = 12\\text{ h}$ es la constante de tiempo, y multiplicada por $\\ln(2) \\approx 0.693$ da $8.32\\text{ horas}$.',
      C: 'Incorrecto: 12.00 h es el cociente $V_d / CL$ sin multiplicar por $\\ln(2) = 0.693$.',
      D: 'Incorrecto: 17.33 h resultaría de duplicar erróneamente el volumen de distribución en el numerador.',
    },
  },
  {
    id: 'flab-q06',
    topic: 'Cinética Enzimática de Michaelis-Menten',
    statement:
      'En la ecuación de Michaelis-Menten ($v = \\frac{V_{\\max} \\cdot [S]}{K_m + [S]}$), ¿qué velocidad de reacción $v$ se alcanza cuando la concentración de sustrato $[S]$ es exactamente igual a la constante $K_m$?',
    options: {
      A: '$v = 0.25 \\cdot V_{\\max}$',
      B: '$v = 0.50 \\cdot V_{\\max}$',
      C: '$v = 0.75 \\cdot V_{\\max}$',
      D: '$v = V_{\\max}$',
    },
    correctAnswer: 'B',
    explanation:
      'Cuando $[S] = K_m$, la ecuación se simplifica a $v = \\frac{V_{\\max} \\cdot K_m}{K_m + K_m} = \\frac{V_{\\max} \\cdot K_m}{2K_m} = 0.50 \\cdot V_{\\max}$.',
    source: 'MINED ESMATE / UES — Bioquímica Cuantitativa y Cinética Enzimática',
    distractorRationale: {
      A: 'Incorrecto: $0.25 \\cdot V_{\\max}$ se obtiene cuando $[S] = K_m / 3$, no cuando $[S] = K_m$.',
      B: 'Correcto: por definición operativa, $K_m$ es la concentración de sustrato a la cual la velocidad enzimática es la mitad de $V_{\\max}$.',
      C: 'Incorrecto: $0.75 \\cdot V_{\\max}$ requiere que $[S] = 3 K_m$.',
      D: 'Incorrecto: $V_{\\max}$ es el límite asintótico cuando $[S] \\gg K_m$ (orden cero).',
    },
  },
  {
    id: 'flab-q07',
    topic: 'Cinemática de Proyectiles',
    statement:
      'Un proyectil es lanzado desde el suelo con rapidez inicial $v_0 = 20\\text{ m/s}$ y ángulo $\\theta = 45^\\circ$ ($g = 10\\text{ m/s}^2$). ¿Cuál es su alcance horizontal máximo $R = \\frac{v_0^2 \\sin(2\\theta)}{g}$?',
    options: {
      A: '20 metros',
      B: '30 metros',
      C: '40 metros',
      D: '80 metros',
    },
    correctAnswer: 'C',
    explanation:
      'Dado $\\theta = 45^\\circ$, $\\sin(90^\\circ) = 1$. Entonces $R = \\frac{20^2 \\times 1}{10} = \\frac{400}{10} = 40\\text{ metros}$.',
    source: 'MINED — Programa de Estudio de Física y Matemática ESMATE Bachillerato',
    distractorRationale: {
      A: 'Incorrecto: 20 m corresponde a la altura máxima alcanzada con lanzamiento vertical, o a olvidar elevar $v_0$ al cuadrado correctamente.',
      B: 'Incorrecto: 30 m no satisface la relación trigonométrica $\\sin(2 \\cdot 45^\\circ) = 1$.',
      C: 'Correcto: $v_0^2 / g = 400 / 10 = 40\\text{ m}$, siendo $45^\\circ$ el ángulo óptimo de alcance horizontal en terreno plano.',
      D: 'Incorrecto: 80 m duplica el alcance real al omitir la división por la aceleración gravitatoria o multiplicar por 2.',
    },
  },
  {
    id: 'flab-q08',
    topic: 'Cinemática de Proyectiles',
    statement:
      'En el movimiento parabólico ideal sin fricción del aire, ¿qué ocurre con la componente horizontal de la velocidad ($v_x = v_0 \\cos\\theta$) en el punto más alto de la trayectoria?',
    options: {
      A: 'Se vuelve exactamente cero ($v_x = 0$)',
      B: 'Alcanza su valor máximo igual a $v_0$',
      C: 'Permanece constante e igual a $v_0 \\cos\\theta$',
      D: 'Invierte su signo hacia abajo',
    },
    correctAnswer: 'C',
    explanation:
      'En ausencia de resistencia del aire, no existe aceleración horizontal ($a_x = 0$), por lo que $v_x = v_0 \\cos\\theta$ es constante durante todo el vuelo; solo la componente vertical $v_y$ se anula en la altura máxima.',
    source: 'MINED ESMATE — Física Clásica de Educación Media',
    distractorRationale: {
      A: 'Incorrecto: la componente que se anula en la cúspide es la velocidad vertical $v_y$, nunca la horizontal $v_x$ (salvo en tiro vertical de $90^\\circ$).',
      B: 'Incorrecto: $v_x = v_0 \\cos\\theta$ es menor que $v_0$ para cualquier ángulo $\\theta > 0^\\circ$.',
      C: 'Correcto: el movimiento horizontal es rectilíneo uniforme (MRU), manteniendo $v_x$ constante en toda la parábola.',
      D: 'Incorrecto: la componente que cambia de signo después del vértice es $v_y$, no $v_x$.',
    },
  },
  {
    id: 'flab-q09',
    topic: 'Número de Reynolds y Flujo Turbulento',
    statement:
      'Según el Número de Reynolds ($Re = \\frac{\\rho \\cdot v \\cdot D}{\\eta}$), ¿qué valor umbral indica típicamente la transición de flujo sanguíneo laminar a flujo turbulento capaz de generar soplos audibles?',
    options: {
      A: '$Re > 200$',
      B: '$Re > 2,000$',
      C: '$Re < 10$',
      D: '$Re = 100$',
    },
    correctAnswer: 'B',
    explanation:
      'Cuando el Número de Reynolds supera el umbral crítico aproximado de $2,000$ (por alta velocidad en estenosis valvular o baja viscosidad en anemia severa), el flujo laminar se vuelve turbulento.',
    source: 'MINSAL / OPS-OMS — Guías de Semiología y Hemodinámica Clínica',
    distractorRationale: {
      A: 'Incorrecto: con $Re \\approx 200$ el flujo en conductos cilíndricos permanece completamente laminar.',
      B: 'Correcto: $Re > 2,000$ marca el inicio de turbulencia significativa, asociada clínicamente a soplos vasculares y cardíacos.',
      C: 'Incorrecto: valores tan bajos de $Re$ corresponden a flujo viscoso lento en capilares y arteriolas terminales.',
      D: 'Incorrecto: $Re = 100$ está muy por debajo del umbral crítico de inestabilidad de flujo.',
    },
  },
  {
    id: 'flab-q10',
    topic: 'Estado Estacionario Farmacocinético',
    statement:
      'Al administrar un fármaco por vía oral o intravenosa intermitente cada intervalo constante sin dosis de carga, ¿cuántas vidas medias ($t_{1/2}$) se requieren aproximadamente para alcanzar el $94\\%$ de la concentración en estado estacionario ($C_{ss}$)?',
    options: {
      A: '1 vida media',
      B: '2 vidas medias',
      C: '4 vidas medias',
      D: '10 vidas medias',
    },
    correctAnswer: 'C',
    explanation:
      'En cinética de primer orden, la acumulación sigue $1 - (0.5)^n$: tras 1 $t_{1/2}$ es $50\\%$, tras 2 es $75\\%$, tras 3 es $87.5\\%$, y tras 4 vidas medias alcanza $93.75\\% \\approx 94\\%$.',
    source: 'MINSAL — Normativa de Farmacovigilancia y Dosificación Racional',
    distractorRationale: {
      A: 'Incorrecto: tras 1 vida media apenas se alcanza el $50\\%$ de la concentración de equilibrio.',
      B: 'Incorrecto: tras 2 vidas medias solo se alcanza el $75\\%$ del estado estacionario.',
      C: 'Correcto: entre 4 y 5 vidas medias ($93.75\\%$ a $96.88\\%$) se considera alcanzado clínicamente el estado estacionario.',
      D: 'Incorrecto: 10 vidas medias no es el criterio estándar; con 4 a 5 $t_{1/2}$ ya se supera el $90\\%$ de meseta.',
    },
  },
];

export interface InteractiveFormulaLabProps {
  initialMode?: 'lab' | 'test';
}

export const InteractiveFormulaLab: React.FC<InteractiveFormulaLabProps> = ({
  initialMode = 'lab',
}) => {
  const [labMode, setLabMode] = useState<'lab' | 'test'>(initialMode);
  const [activeTab, setActiveTab] = useState<'poiseuille' | 'henderson' | 'pharmacokinetics' | 'projectile'>('poiseuille');
  const [testAnswers, setTestAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});

  useEffect(() => {
    if (initialMode) {
      setLabMode(initialMode);
    }
  }, [initialMode]);

  const testScore = useMemo(() => {
    let correct = 0;
    let answered = 0;
    FORMULA_LAB_QUESTIONS.forEach((q) => {
      const chosen = testAnswers[q.id];
      if (chosen) {
        answered++;
        if (chosen === q.correctAnswer) correct++;
      }
    });
    return { correct, answered, total: FORMULA_LAB_QUESTIONS.length };
  }, [testAnswers]);

  // 1. POISEUILLE STATE
  const [radiusRatio, setRadiusRatio] = useState<number>(1.0); // 0.4 to 1.6
  const [pressureDelta, setPressureDelta] = useState<number>(100); // 50 to 180 mmHg
  const [viscosity, setViscosity] = useState<number>(1.0); // 0.7 to 2.0 (ej. anemia vs policitemia)

  // 2. HENDERSON-HASSELBALCH STATE (Blood Gas Analysis)
  const [hco3, setHco3] = useState<number>(24); // normal 22-26 mEq/L
  const [pco2, setPco2] = useState<number>(40); // normal 35-45 mmHg

  // 3. PHARMACOKINETICS STATE
  const [vd, setVd] = useState<number>(42); // Litros (Volumen de distribución)
  const [clearance, setClearance] = useState<number>(3.5); // L/h (Aclaramiento renal)

  // 4. PROJECTILE STATE
  const [velocity, setVelocity] = useState<number>(25); // m/s
  const [angle, setAngle] = useState<number>(45); // grados

  // Calculations
  const poiseuilleResults = useMemo(() => {
    // R proportional to 1 / r^4
    const relativeResistance = (1 / Math.pow(radiusRatio, 4)) * viscosity;
    // Flow Q = deltaP / R
    const relativeFlow = pressureDelta / relativeResistance;
    return {
      relativeResistance: relativeResistance.toFixed(2),
      relativeFlow: relativeFlow.toFixed(1),
      pctChangeR: ((relativeResistance - 1) * 100).toFixed(0),
    };
  }, [radiusRatio, pressureDelta, viscosity]);

  const hendersonResults = useMemo(() => {
    // pH = 6.1 + log10(HCO3 / (0.03 * PCO2))
    const denominator = 0.03 * pco2;
    const ratio = hco3 / denominator;
    const ph = 6.1 + Math.log10(ratio);

    let diagnosis = 'Estado Ácido-Base Normal';
    let diagnosisColor = 'text-[#1E7E34] bg-emerald-50 border-emerald-200';

    if (ph < 7.35) {
      if (pco2 > 45 && hco3 >= 24) {
        diagnosis = 'Acidosis Respiratoria';
        diagnosisColor = 'text-rose-900 bg-rose-50 border-rose-300';
      } else if (hco3 < 22) {
        diagnosis = 'Acidosis Metabólica';
        diagnosisColor = 'text-rose-900 bg-rose-50 border-rose-300';
      } else {
        diagnosis = 'Acidosis Mixta / No compensada';
        diagnosisColor = 'text-rose-900 bg-rose-50 border-rose-300';
      }
    } else if (ph > 7.45) {
      if (pco2 < 35) {
        diagnosis = 'Alcalosis Respiratoria';
        diagnosisColor = 'text-blue-900 bg-blue-50 border-blue-300';
      } else if (hco3 > 26) {
        diagnosis = 'Alcalosis Metabólica';
        diagnosisColor = 'text-blue-900 bg-blue-50 border-blue-300';
      } else {
        diagnosis = 'Alcalosis No compensada';
        diagnosisColor = 'text-blue-900 bg-blue-50 border-blue-300';
      }
    }

    return {
      ph: ph.toFixed(2),
      ratio: ratio.toFixed(1),
      diagnosis,
      diagnosisColor,
    };
  }, [hco3, pco2]);

  const pkResults = useMemo(() => {
    // t_1/2 = (0.693 * Vd) / CL
    const halfLifeHours = (0.693 * vd) / Math.max(0.1, clearance);
    // Steady state time is approximately 4 to 5 half-lives
    const steadyStateHours = halfLifeHours * 4.5;
    return {
      halfLife: halfLifeHours.toFixed(1),
      steadyState: steadyStateHours.toFixed(1),
    };
  }, [vd, clearance]);

  const projectileResults = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    const g = 9.81;
    const maxRange = (Math.pow(velocity, 2) * Math.sin(2 * rad)) / g;
    const maxHeight = (Math.pow(velocity, 2) * Math.pow(Math.sin(rad), 2)) / (2 * g);
    const flightTime = (2 * velocity * Math.sin(rad)) / g;
    return {
      maxRange: maxRange.toFixed(1),
      maxHeight: maxHeight.toFixed(1),
      flightTime: flightTime.toFixed(1),
    };
  }, [velocity, angle]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans-ui">
      {/* Encabezado Institucional */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#132A5C] text-[#C59B27] text-xs font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Laboratorio Pedagógico de Simulación Matemática & Biomédica</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Simulador Interactivo de Fórmulas y Fisiología KUSKAT
          </h2>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-3xl">
            Comprende intuitivamente los fenómenos cuantitativos clave para el <strong>Examen de Residentado Médico (ENAR)</strong>,
            la <strong>Física y Biofísica Médica</strong> y la <strong>Química Fisiológica</strong> mediante controles deslizantes en tiempo real.
          </p>
        </div>
      </div>

      {/* Selector de Modo Principal: Laboratorio vs Test de Fórmulas */}
      <div className="bg-white rounded-xl border border-[#E5E3D8] p-2 flex flex-wrap items-center justify-between gap-2 shadow-corporate-subtle">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setLabMode('lab')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
              labMode === 'lab'
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                : 'bg-[#FAF9F5] text-[#475569] hover:bg-[#F2F1EA] border border-[#E2E0D5]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Laboratorio Interactivo</span>
          </button>
          <button
            type="button"
            onClick={() => setLabMode('test')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 ${
              labMode === 'test'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-[#FAF9F5] text-[#475569] hover:bg-[#F2F1EA] border border-[#E2E0D5]'
            }`}
          >
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Test de Fórmulas ({FORMULA_LAB_QUESTIONS.length} Reactivos)</span>
          </button>
        </div>
        {labMode === 'test' && (
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0B1B3D] px-2">
            <Award className="w-4 h-4 text-[#C59B27]" />
            <span>
              Aciertos: {testScore.correct}/{testScore.total} (Respondidas: {testScore.answered})
            </span>
          </div>
        )}
      </div>

      {labMode === 'test' ? (
        <section className="space-y-5" aria-label="Test de Fórmulas Cuantitativas">
          <div className="bg-white rounded-2xl border border-[#E5E3D8] p-5 sm:p-6 shadow-corporate-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono-exam uppercase tracking-wider text-emerald-700">
                <ClipboardCheck className="w-4 h-4" />
                <span>Evaluación Cuantitativa • MINED / MINSAL / OPS-OMS</span>
              </div>
              <h3 className="text-xl font-editorial font-bold text-[#0B1B3D]">
                Test de Fórmulas Biofísicas, Químicas y Cinemáticas
              </h3>
              <p className="text-xs text-[#475569]">
                Selecciona la opción correcta en cada reactivo para visualizar la demostración en KaTeX y el análisis de distractores.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setTestAnswers({})}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar Test</span>
            </button>
          </div>

          <div className="space-y-4">
            {FORMULA_LAB_QUESTIONS.map((q, idx) => {
              const selected = testAnswers[q.id];
              const isAnswered = Boolean(selected);
              const isCorrect = selected === q.correctAnswer;

              return (
                <article
                  key={q.id}
                  className="bg-white rounded-2xl border border-[#E5E3D8] p-5 sm:p-6 shadow-corporate-subtle space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#0B1B3D] text-[#FAF9F5] text-[11px] font-mono font-bold">
                      Pregunta {idx + 1} • {q.topic}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">{q.source}</span>
                  </div>

                  <div className="text-sm text-[#1E293B] font-medium leading-relaxed">
                    <KaTeXMath text={q.statement} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                      const isThisSelected = selected === optKey;
                      const isThisCorrect = q.correctAnswer === optKey;

                      let btnStyle =
                        'bg-[#FAF9F5] hover:bg-slate-100 border-[#E2E0D5] text-[#1E293B]';
                      if (isAnswered) {
                        if (isThisCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                        } else if (isThisSelected) {
                          btnStyle = 'bg-rose-50 border-rose-500 text-rose-950';
                        } else {
                          btnStyle = 'bg-slate-50 border-slate-200 text-slate-500 opacity-80';
                        }
                      }

                      return (
                        <button
                          key={optKey}
                          type="button"
                          onClick={() => setTestAnswers((prev) => ({ ...prev, [q.id]: optKey }))}
                          className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-start gap-2.5 ${btnStyle}`}
                        >
                          <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 flex items-center justify-center font-mono font-bold text-[11px] shrink-0">
                            {optKey}
                          </span>
                          <span className="pt-0.5 leading-relaxed min-w-0 break-words">
                            <KaTeXMath text={q.options[optKey]} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div
                      className={`p-4 rounded-xl border text-xs space-y-2.5 ${
                        isCorrect
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-amber-50/70 border-amber-200 text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>¡Respuesta Correcta! (Opción {q.correctAnswer})</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            <span>
                              Seleccionaste {selected}. La respuesta correcta es la opción {q.correctAnswer}.
                            </span>
                          </>
                        )}
                      </div>
                      <p className="leading-relaxed text-slate-700">
                        <KaTeXMath text={q.explanation} />
                      </p>
                      <div className="pt-2 border-t border-slate-200/70 space-y-1">
                        <p className="font-mono font-bold text-[10px] uppercase tracking-wider text-slate-500">
                          Análisis de Distractores:
                        </p>
                        {(['A', 'B', 'C', 'D'] as const).map((k) => (
                          <p key={k} className="text-[11px] text-slate-600 leading-relaxed">
                            <strong className="font-mono">{k}:</strong> <KaTeXMath text={q.distractorRationale[k]} />
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      ) : (
        <>

      {/* ==================================================================== */}
      {/* MARCO TEÓRICO & COMPENDIO EDITORIAL SUSTANTIVO (>750 PALABRAS)       */}
      {/* ==================================================================== */}
      <section className="bg-white rounded-2xl border border-[#E5E3D8] p-6 sm:p-8 shadow-corporate-card space-y-6 text-[#1E293B]">
        <div className="border-b border-[#EAE8DD] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold font-mono-exam uppercase tracking-wider text-[#0B1B3D]">
              <BookOpen className="w-4 h-4 text-[#C59B27]" />
              <span>Fundamentos Biofísicos, Fisiológicos y Cinemáticos</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#0B1B3D]">
              Marco Teórico y Doctrina Cuantitativa Oficial
            </h3>
          </div>
          <span className="text-[10px] font-mono font-bold bg-[#F4F3ED] text-[#0B1B3D] px-3 py-1.5 rounded-lg border border-[#E2E0D5] self-start sm:self-auto">
            MINSAL • MINED • OPS/OMS
          </span>
        </div>

        {/* Introducción General */}
        <div className="text-xs sm:text-sm text-[#334155] leading-relaxed space-y-3 font-serif-academic">
          <p>
            La modelación matemática y cuantitativa de fenómenos biofísicos constituye el cimiento metodológico
            de la evaluación académica en el <strong>Examen de Residentado Médico (ENAR)</strong> normado por el
            Ministerio de Salud (MINSAL), así como de las pruebas de admisión científica y olimpiadas nacionales
            organizadas bajo las directrices del Ministerio de Educación, Ciencia y Tecnología (MINED) y los
            estándares de la Organización Panamericana de la Salud (OPS/OMS). Lejos de representar formulaciones
            puramente teóricas o abstractas, las ecuaciones diferenciales y relaciones algebraicas de fluidos,
            equilibrio iónico, cinética de saturación enzimática y cinemática traslacional permiten predecir con
            rigor analítico el comportamiento de variables vitales críticas en la práctica clínica y biofísica.
          </p>
          <p>
            El propósito pedagógico de este laboratorio interactivo es transformar fórmulas complejas en modelos
            cuantitativos explorables, facilitando la comprensión profunda de las cuatro leyes fundamentales evaluadas en los
            exámenes de habilitación profesional y admisión universitaria: la hemodinámica vascular de Hagen-Poiseuille, el
            equilibrio ácido-base de Henderson-Hasselbalch, la cinética enzimática de Michaelis-Menten en farmacología
            compartimental y la descomposición vectorial del movimiento de proyectiles en física clásica y biomecánica clínica.
          </p>
        </div>

        {/* 4 Módulos Teóricos Desglosados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Módulo 1: Poiseuille */}
          <div className="bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] p-5 space-y-3">
            <div className="flex items-center gap-2 text-[#0B1B3D] font-bold text-sm">
              <Activity className="w-4 h-4 text-[#9E472A]" />
              <h4>1. Hemodinámica Vascular: Ley de Hagen-Poiseuille</h4>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              La resistencia hidráulica en conductos cilíndricos rígidos con flujo laminar continuo de un fluido
              newtoniano se modela mediante la formulación clásica de Hagen-Poiseuille:
            </p>
            <div className="p-2.5 bg-white rounded-lg border border-[#E2E0D5] text-center text-xs text-[#0B1B3D] font-bold overflow-x-auto">
              <KaTeXMath text="$R = \frac{8 \cdot \eta \cdot L}{\pi \cdot r^4} \quad\big|\quad Q = \frac{\Delta P}{R}$" />
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              El postulado clínico más trascendental es la <strong>dependencia inversa con la cuarta potencia del radio vascular (r⁴)</strong>.
              Una disminución luminal de tan solo un 16% en el lecho arteriolar duplica la resistencia vascular periférica total,
              mientras que una vasodilatación al doble reduce la resistencia a un 6.25% de su valor inicial. Conforme a la
              ley de Ohm hemodinámica (ΔP = Q · R), el gasto cardíaco y la presión arterial media dependen directamente
              del tono vascular arteriolar y de la viscosidad sanguínea (η), la cual se eleva patológicamente en la policitemia vera o
              disminuye en anemias agudas.
            </p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Adicionalmente, el <strong>Número de Reynolds</strong> (Re = ρ · v · D / η) predice la transición de flujo laminar ordenado a
              flujo turbulento cuando sobrepasa el umbral crítico de 2,000, explicando la génesis de soplos cardíacos, turbulencia en
              estenosis aórtica y el daño endotelial por estrés de cizallamiento en bifurcaciones carotídeas según guías del MINSAL.
            </p>
          </div>

          {/* Módulo 2: Henderson-Hasselbalch */}
          <div className="bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] p-5 space-y-3">
            <div className="flex items-center gap-2 text-[#0B1B3D] font-bold text-sm">
              <Pipette className="w-4 h-4 text-[#1E7E34]" />
              <h4>2. Equilibrio Ácido-Base: Ecuación de Henderson-Hasselbalch</h4>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              El pH extracelular fisiológico oscila estrictamente en el estrecho rango de 7.35 a 7.45. La regulación del amortiguador primario
              bicarbonato/ácido carbónico se formaliza mediante la ecuación de Henderson-Hasselbalch:
            </p>
            <div className="p-2.5 bg-white rounded-lg border border-[#E2E0D5] text-center text-xs text-[#0B1B3D] font-bold overflow-x-auto">
              <KaTeXMath text="$\text{pH} = 6.10 + \log_{10}\!\left(\frac{[\text{HCO}_3^-]}{0.0307 \cdot P_{\text{CO}_2}}\right)$" />
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Bajo condiciones homeostáticas estándar ([HCO₃⁻] = 24 mEq/L, PCO₂ = 40 mmHg), el cociente de concentraciones
              alcanza exactamente 20:1. Puesto que log₁₀(20) ≈ 1.30, el pH resultante es 6.10 + 1.30 = 7.40. Las
              alteraciones de este cociente definen los cuatro disturbios ácido-base primarios: acidosis metabólica,
              alcalosis metabólica, acidosis respiratoria y alcalosis respiratoria.
            </p>
            <p className="text-xs text-[#475569] leading-relaxed">
              En acidosis metabólica, la <strong>Fórmula de Winter</strong> [PCO₂ esperada = (1.5 · [HCO₃⁻] + 8) ± 2] dictamina la
              respuesta ventilatoria compensatoria adecuada para descartar trastornos mixtos. Simultáneamente, el cálculo del
              <strong> Anión Gap sérico</strong> [AG = Na⁺ - (Cl⁻ + HCO₃⁻), rango fisiológico 8-12 mEq/L] discrimina entre acidosis
              normoclorémicas con brecha normal (pérdidas gastrointestinales o renales) y acidosis con brecha elevada por acumulación de aniones
              no medidos como cetoácidos en cetoacidosis diabética o lactato en hipoperfusión tisular según protocolos hospitalarios del MINSAL.
            </p>
          </div>

          {/* Módulo 3: Michaelis-Menten y Farmacocinética */}
          <div className="bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] p-5 space-y-3">
            <div className="flex items-center gap-2 text-[#0B1B3D] font-bold text-sm">
              <Heart className="w-4 h-4 text-[#C59B27]" />
              <h4>3. Cinética de Michaelis-Menten & Eliminación de Fármacos</h4>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              La velocidad enzimática de biotransformación y la depuración saturable de fármacos siguen el modelo clásico
              de saturación hiperbólica de Michaelis-Menten:
            </p>
            <div className="p-2.5 bg-white rounded-lg border border-[#E2E0D5] text-center text-xs text-[#0B1B3D] font-bold overflow-x-auto">
              <KaTeXMath text="$v = \frac{V_{\max} \cdot [S]}{K_m + [S]} \quad\big|\quad t_{1/2} = \frac{0.693 \cdot V_d}{CL}$" />
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              A concentraciones terapéuticas donde la concentración de sustrato [S] es marcadamente inferior a Km, la cinética
              es de primer orden y la velocidad de eliminación resulta directamente proporcional a la dosis administrada. Sin embargo, al saturarse
              los sitios activos de transportadores o enzimas hepáticas del citocromo P450 ([S] &gt;&gt; Km), la tasa de aclaramiento pasa
              a orden cero constante independiente de la dosis, desencadenando toxicidad acumulativa no lineal como ocurre típicamente con la
              fenitoína, los salicilatos y el etanol.
            </p>
            <p className="text-xs text-[#475569] leading-relaxed">
              En pautas de dosificación continua o repetida, el tiempo requerido para alcanzar la meseta terapéutica o estado estacionario
              (*steady state*) depende exclusivamente de la vida media de eliminación (t₁/₂), requiriéndose 3.3 vidas medias para el 90%, 4 vidas
              medias para el 93.75% y 5 vidas medias para el 96.88% de la concentración de equilibrio. Asimismo, la transformación de
              <strong> Lineweaver-Burk</strong> (1/v frente a 1/[S]) permite distinguir con exactitud analítica los inhibidores competitivos
              (que incrementan la Km aparente conservando Vmax) de los inhibidores no competitivos (que reducen la Vmax sin alterar la Km),
              concepto evaluado en farmacología clínica por el CSSP y la SRS.
            </p>
          </div>

          {/* Módulo 4: Cinemática de Proyectiles */}
          <div className="bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] p-5 space-y-3">
            <div className="flex items-center gap-2 text-[#0B1B3D] font-bold text-sm">
              <Zap className="w-4 h-4 text-[#2563EB]" />
              <h4>4. Cinemática de Proyectiles y Mecánica Clásica</h4>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              El tiro parabólico ilustra el principio galileano de superposición e independencia de movimientos en dos ejes ortogonales:
              un movimiento rectilíneo uniforme horizontal a velocidad constante y un movimiento rectilíneo uniformemente acelerado vertical bajo
              la acción del campo gravitatorio terrestre:
            </p>
            <div className="p-2.5 bg-white rounded-lg border border-[#E2E0D5] text-center text-xs text-[#0B1B3D] font-bold overflow-x-auto">
              <KaTeXMath text="$R = \frac{v_0^2 \cdot \sin(2\theta)}{g} \quad\big|\quad H_{\text{máx}} = \frac{v_0^2 \cdot \sin^2(\theta)}{2g}$" />
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              El tiempo total de permanencia en el aire está dictado por t = (2 · v₀ · sen θ) / g. Dado que la función sen(2θ) alcanza su
              máximo valor de 1.0 en 2θ = 90°, el ángulo de elevación que produce el alcance horizontal máximo sobre superficie plana
              es exactamente 45° en ausencia de resistencia aerodinámica. En cada instante de la trayectoria, el vector velocidad instantánea
              satisface v = √(vx² + vy²), mientras que la conservación de la energía mecánica total asegura el intercambio perpetuo entre
              energía cinética traslacional (½ · m · v²) y energía potencial gravitatoria (m · g · h).
            </p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Estos postulados cinemáticos y dinámicos son rigurosamente evaluados en las pruebas de admisión científica de la Universidad de El Salvador,
              en los programas curriculares de física del MINED ESMATE Bachillerato, y resultan indispensables en biomecánica ortopédica para el análisis
              de marcha y traumatología de lesiones por desaceleración e impacto.
            </p>
          </div>
        </div>

        {/* Cita Institucional Obligatoria */}
        <div className="pt-2 border-t border-[#EAE8DD] text-[11px] text-[#64748B] flex items-center justify-between">
          <span>Fuente y Referencias Oficiales: Ministerio de Salud (MINSAL) • MINED ESMATE • OPS/OMS Fisiología</span>
          <span className="font-mono text-[#0B1B3D] font-bold">KUSKAT Docencia Biomédica</span>
        </div>
      </section>

      {/* Selector de Pestañas de Fórmulas */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        <button
          onClick={() => setActiveTab('poiseuille')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 shrink-0 ${
            activeTab === 'poiseuille'
              ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
              : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
          }`}
        >
          <Activity className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>1. Hemodinámica (Poiseuille)</span>
        </button>

        <button
          onClick={() => setActiveTab('henderson')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 shrink-0 ${
            activeTab === 'henderson'
              ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
              : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
          }`}
        >
          <Pipette className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>2. Gases Arteriales & pH (Henderson)</span>
        </button>

        <button
          onClick={() => setActiveTab('pharmacokinetics')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 shrink-0 ${
            activeTab === 'pharmacokinetics'
              ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
              : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
          }`}
        >
          <Heart className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>3. Farmacocinética (Vida Media)</span>
        </button>

        <button
          onClick={() => setActiveTab('projectile')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 shrink-0 ${
            activeTab === 'projectile'
              ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
              : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>4. Cinemática de Proyectiles</span>
        </button>
      </div>

      {/* ==================================================================== */}
      {/* 1. HEMODINÁMICA DE POISEUILLE */}
      {/* ==================================================================== */}
      {activeTab === 'poiseuille' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-5">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625]">
                Ley de Poiseuille & Resistencia Vascular
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 overflow-x-auto">
                <KaTeXMath text="Ecuación: $R = \frac{8 \cdot \eta \cdot L}{\pi \cdot r^4}$ • Flujo $Q = \frac{\Delta P}{R}$" />
              </p>
            </div>

            {/* Slider Radio */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Radio Vascular Relativo (r):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">
                  {radiusRatio.toFixed(2)}x {radiusRatio < 1 ? '(Vasoconstricción)' : radiusRatio > 1 ? '(Vasodilatación)' : '(Basal)'}
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.05"
                value={radiusRatio}
                onChange={e => setRadiusRatio(parseFloat(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>0.50x (-50% Radio)</span>
                <span>1.00x (Normal)</span>
                <span>1.50x (+50% Radio)</span>
              </div>
            </div>

            {/* Slider Presión */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Gradiente de Presión de Perfusión (ΔP):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{pressureDelta} mmHg</span>
              </div>
              <input
                type="range"
                min="50"
                max="160"
                step="5"
                value={pressureDelta}
                onChange={e => setPressureDelta(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>50 mmHg (Hipotensión)</span>
                <span>100 mmHg (PAM normal)</span>
                <span>160 mmHg (Crisis HTA)</span>
              </div>
            </div>

            {/* Slider Viscosidad */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Viscosidad Sanguínea (η):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">
                  {viscosity.toFixed(2)}x {viscosity < 1 ? '(Anemia / Hemodilución)' : viscosity > 1 ? '(Policitemia / Deshidratación)' : '(Normal)'}
                </span>
              </div>
              <input
                type="range"
                min="0.7"
                max="1.6"
                step="0.05"
                value={viscosity}
                onChange={e => setViscosity(parseFloat(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
            </div>

            <button
              onClick={() => {
                setRadiusRatio(1.0);
                setPressureDelta(100);
                setViscosity(1.0);
              }}
              className="text-xs text-[#64748B] hover:text-[#0B1B3D] flex items-center gap-1 font-mono-exam cursor-pointer pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores basales
            </button>
          </div>

          {/* Panel de Resultados Cuantitativos */}
          <div className="lg:col-span-5 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider block">
                Impacto Hemodinámico en Tiempo Real:
              </span>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
                  <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block">Resistencia Vascular (R)</span>
                  <span className="text-xl font-bold font-mono-exam text-[#9E472A]">
                    {poiseuilleResults.relativeResistance}x
                  </span>
                  <span className="text-[10px] text-[#475569] block mt-0.5 font-mono-exam">
                    {poiseuilleResults.pctChangeR > '0' ? `+${poiseuilleResults.pctChangeR}%` : `${poiseuilleResults.pctChangeR}%`} vs basal
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
                  <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block">Flujo Sanguíneo (Q)</span>
                  <span className="text-xl font-bold font-mono-exam text-[#0B1B3D]">
                    {poiseuilleResults.relativeFlow} u.a.
                  </span>
                  <span className="text-[10px] text-[#475569] block mt-0.5 font-mono-exam">
                    Perfusión tisular
                  </span>
                </div>
              </div>

              {/* Gráfico SVG Interactivo: Sección Transversal Vascular & Flujo */}
              <div className="mt-4 p-3 bg-white rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
                <span className="text-[10px] font-mono-exam font-bold text-[#0B1B3D] uppercase block mb-1.5">
                  Representación Gráfica: Radio Vascular (r) y Flujo Laminar (Q)
                </span>
                <svg viewBox="0 0 320 130" className="w-full h-auto max-h-36" role="img" aria-label="Sección transversal de vaso sanguíneo y flujo laminar">
                  <rect x="0" y="0" width="320" height="130" rx="8" fill="#FAF9F5" />
                  {/* Sección transversal del vaso */}
                  <circle cx="65" cy="65" r="46" fill="#E2E8F0" stroke="#9E472A" strokeWidth="3" />
                  <circle
                    cx="65"
                    cy="65"
                    r={Math.max(8, Math.min(42, 26 * radiusRatio))}
                    fill={viscosity > 1.2 ? '#991B1B' : '#DC2626'}
                    opacity="0.88"
                  />
                  <line
                    x1="65"
                    y1="65"
                    x2={65 + Math.max(8, Math.min(42, 26 * radiusRatio))}
                    y2="65"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />
                  <text x="65" y="122" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0B1B3D">
                    r = {radiusRatio.toFixed(2)}x
                  </text>

                  {/* Tubo longitudinal con flechas de flujo */}
                  <rect x="135" y="25" width="168" height="80" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
                  {(() => {
                    const halfH = Math.max(6, Math.min(34, 20 * radiusRatio));
                    const flowNorm = Math.min(1, parseFloat(poiseuilleResults.relativeFlow) / 300);
                    const arrowLen = 28 + flowNorm * 95;
                    return (
                      <>
                        <rect
                          x="136"
                          y={65 - halfH}
                          width="166"
                          height={halfH * 2}
                          fill="#FEE2E2"
                          stroke="#9E472A"
                          strokeWidth="1.5"
                        />
                        {[-0.5, 0, 0.5].map((offset, idx) => {
                          const y = 65 + offset * halfH;
                          const len = offset === 0 ? arrowLen : arrowLen * 0.72;
                          return (
                            <g key={idx}>
                              <line
                                x1="148"
                                y1={y}
                                x2={148 + len}
                                y2={y}
                                stroke="#0B1B3D"
                                strokeWidth={offset === 0 ? 2.5 : 1.8}
                                strokeLinecap="round"
                              />
                              <polygon
                                points={`${148 + len},${y - 3.5} ${155 + len},${y} ${148 + len},${y + 3.5}`}
                                fill="#0B1B3D"
                              />
                            </g>
                          );
                        })}
                        <text x="219" y="122" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0B1B3D">
                          Q = {poiseuilleResults.relativeFlow} u.a. (η = {viscosity.toFixed(2)}x)
                        </text>
                      </>
                    );
                  })()}
                </svg>
              </div>

              {/* Perla de Examen ENAR */}
              <div className="mt-4 p-3 bg-white rounded-lg border border-[#C59B27]/50 shadow-corporate-subtle text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Perla de Examen Clínico:</span>
                </div>
                <p className="text-[#334155] leading-relaxed text-[11px]">
                  Dado que <strong>R ∝ 1/r⁴</strong>, un vaso contraído a la mitad (r = 0.5) multiplica la resistencia
                  por <strong>16 veces</strong>. Por ello, las arteriolas son los principales vasos de resistencia en la circulación sistémica.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F2F1EA] rounded-lg text-[11px] text-[#64748B] font-mono-exam text-center">
              Fórmula evaluada en el Examen de Residentado y Biofísica Médica
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 2. HENDERSON-HASSELBALCH & GASOMETRÍA ARTERIAL */}
      {/* ==================================================================== */}
      {activeTab === 'henderson' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-5">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625]">
                Ecuación de Henderson-Hasselbalch & Equilibrio Ácido-Base
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 overflow-x-auto">
                <KaTeXMath text="$\text{pH} = 6.1 + \log_{10}\!\left(\frac{[\text{HCO}_3^-]}{0.03 \cdot P_{\text{CO}_2}}\right)$" />
              </p>
            </div>

            {/* Slider Bicarbonato */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Bicarbonato Plasmático [HCO₃⁻]:</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{hco3} mEq/L</span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                step="1"
                value={hco3}
                onChange={e => setHco3(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>10 mEq/L (Consumo de buffer)</span>
                <span>24 mEq/L (Normal 22-26)</span>
                <span>40 mEq/L (Exceso alcalino)</span>
              </div>
            </div>

            {/* Slider PCO2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Presión Parcial de CO₂ (PCO₂):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{pco2} mmHg</span>
              </div>
              <input
                type="range"
                min="15"
                max="80"
                step="1"
                value={pco2}
                onChange={e => setPco2(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>15 mmHg (Hiperventilación)</span>
                <span>40 mmHg (Normal 35-45)</span>
                <span>80 mmHg (Hipoventilación/EPOC)</span>
              </div>
            </div>

            <button
              onClick={() => {
                setHco3(24);
                setPco2(40);
              }}
              className="text-xs text-[#64748B] hover:text-[#0B1B3D] flex items-center gap-1 font-mono-exam cursor-pointer pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores fisiológicos normales
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider block">
                Dictamen Gasométrico Instantáneo:
              </span>

              <div className="mt-3 p-4 bg-white rounded-lg border border-[#E5E3D8] shadow-corporate-subtle space-y-2 text-center">
                <span className="text-[11px] text-[#64748B] font-mono-exam uppercase block">pH Arterial Resultante</span>
                <span className="text-3xl font-extrabold font-mono-exam text-[#111625]">
                  {hendersonResults.ph}
                </span>
                <div className={`p-2 rounded-md border text-xs font-bold font-mono-exam ${hendersonResults.diagnosisColor}`}>
                  {hendersonResults.diagnosis}
                </div>
                <span className="text-[10px] text-[#64748B] block font-mono-exam pt-1">
                  Relación HCO₃⁻ / (0.03·PCO₂) = {hendersonResults.ratio} (Normal: 20:1)
                </span>
              </div>

              {/* Gráfico SVG Interactivo: Escala Cromática de pH */}
              <div className="mt-3 p-3 bg-white rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
                <span className="text-[10px] font-mono-exam font-bold text-[#0B1B3D] uppercase block mb-1.5">
                  Escala Cromática de pH Arterial (6.80 – 7.80):
                </span>
                <svg viewBox="0 0 320 92" className="w-full h-auto max-h-28" role="img" aria-label="Escala cromática de pH arterial">
                  <defs>
                    <linearGradient id="phScaleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="45%" stopColor="#F59E0B" />
                      <stop offset="55%" stopColor="#16A34A" />
                      <stop offset="65%" stopColor="#16A34A" />
                      <stop offset="75%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                  </defs>
                  {/* Barra de gradiente */}
                  <rect x="20" y="34" width="280" height="16" rx="8" fill="url(#phScaleGrad)" />
                  {/* Zona normal 7.35 - 7.45 */}
                  <rect x="174" y="31" width="28" height="22" rx="3" fill="none" stroke="#0B1B3D" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="188" y="66" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#16A34A">
                    Normal (7.35-7.45)
                  </text>
                  <text x="20" y="66" textAnchor="start" fontSize="8.5" fill="#DC2626">
                    6.80 (Acidemia)
                  </text>
                  <text x="300" y="66" textAnchor="end" fontSize="8.5" fill="#1D4ED8">
                    7.80 (Alcalemia)
                  </text>
                  {/* Indicador dinámico */}
                  {(() => {
                    const phVal = Math.max(6.8, Math.min(7.8, parseFloat(hendersonResults.ph)));
                    const cx = 20 + ((phVal - 6.8) / 1.0) * 280;
                    const labelX = Math.max(42, Math.min(278, cx));
                    return (
                      <g>
                        <line x1={cx} y1="22" x2={cx} y2="54" stroke="#0B1B3D" strokeWidth="2.5" />
                        <circle cx={cx} cy="42" r="5" fill="#FFFFFF" stroke="#0B1B3D" strokeWidth="2.5" />
                        <text x={labelX} y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0B1B3D">
                          pH {hendersonResults.ph}
                        </text>
                      </g>
                    );
                  })()}
                </svg>
              </div>

              {/* Perla Clínica */}
              <div className="mt-3 p-3 bg-white rounded-lg border border-[#C59B27]/50 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Criterio para Residentado Médico:</span>
                </div>
                <p className="text-[#334155] leading-relaxed text-[11px]">
                  Un pH menor de 7.35 define acidemia; si el PCO₂ está elevado (&gt;45 mmHg), el componente primario es respiratorio. Si el HCO₃⁻ está disminuido (&lt;22 mEq/L), es metabólico.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F2F1EA] rounded-lg text-[11px] text-[#64748B] font-mono-exam text-center">
              Compatible con Guías de Emergencia del MINSAL El Salvador
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 3. FARMACOCINÉTICA CLÍNICA */}
      {/* ==================================================================== */}
      {activeTab === 'pharmacokinetics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-5">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625]">
                Farmacocinética: Vida Media de Eliminación (t₁/₂)
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 overflow-x-auto">
                <KaTeXMath text="$t_{1/2} = \frac{0.693 \cdot V_d}{CL} \quad\big|\quad v = \frac{V_{\max}[S]}{K_m + [S]}$" />
              </p>
            </div>

            {/* Slider Vd */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Volumen Aparente de Distribución (Vd):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{vd} Litros</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="2"
                value={vd}
                onChange={e => setVd(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>5 L (Confinado a plasma)</span>
                <span>42 L (Agua corporal total)</span>
                <span>100 L (Alta fijación tisular)</span>
              </div>
            </div>

            {/* Slider Clearance */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Aclaramiento / Depuración Renal (CL):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{clearance.toFixed(1)} L/hora</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.5"
                value={clearance}
                onChange={e => setClearance(parseFloat(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>0.5 L/h (Insuficiencia renal)</span>
                <span>3.5 L/h (Filtración normal)</span>
                <span>8.0 L/h (Aclaramiento acelerado)</span>
              </div>
            </div>

            <button
              onClick={() => {
                setVd(42);
                setClearance(3.5);
              }}
              className="text-xs text-[#64748B] hover:text-[#0B1B3D] flex items-center gap-1 font-mono-exam cursor-pointer pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores promedio
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider block">
                Comportamiento Farmacocinético:
              </span>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block">Vida Media (t½)</span>
                  <span className="text-2xl font-bold font-mono-exam text-[#9E472A]">
                    {pkResults.halfLife} h
                  </span>
                  <span className="text-[10px] text-[#475569] block font-mono-exam">
                    Tiempo para reducir al 50%
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block">Estado Estacionario</span>
                  <span className="text-2xl font-bold font-mono-exam text-[#0B1B3D]">
                    {pkResults.steadyState} h
                  </span>
                  <span className="text-[10px] text-[#475569] block font-mono-exam">
                    ~4.5 vidas medias
                  </span>
                </div>
              </div>

              <div className="mt-3 p-3 bg-white rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
                <span className="text-[10px] font-mono-exam font-bold text-[#0B1B3D] uppercase block mb-1.5">
                  Curva de Saturación Enzimática (Michaelis-Menten) y Eliminación:
                </span>
                <svg viewBox="0 0 320 130" className="w-full h-auto max-h-36" role="img" aria-label="Curva de saturación enzimática de Michaelis-Menten y vida media">
                  <rect x="0" y="0" width="320" height="130" rx="8" fill="#FAF9F5" />
                  {/* Ejes */}
                  <line x1="36" y1="18" x2="36" y2="104" stroke="#64748B" strokeWidth="1.5" />
                  <line x1="36" y1="104" x2="300" y2="104" stroke="#64748B" strokeWidth="1.5" />
                  {/* Asíntota Vmax */}
                  <line x1="36" y1="26" x2="296" y2="26" stroke="#9E472A" strokeWidth="1.2" strokeDasharray="4 3" />
                  <text x="296" y="22" textAnchor="end" fontSize="8.5" fontWeight="bold" fill="#9E472A">
                    Vmax (Orden 0)
                  </text>
                  {(() => {
                    // Curva hiperbólica reactiva al aclaramiento (CL) y Vd
                    const kmFactor = Math.max(12, Math.min(80, (vd / Math.max(0.5, clearance)) * 2.2));
                    const pts: string[] = [];
                    for (let i = 0; i <= 30; i++) {
                      const s = i * 4; // 0 to 120
                      const v = (78 * s) / (kmFactor + s);
                      const x = 36 + (i / 30) * 260;
                      const y = 104 - v;
                      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                    }
                    const kmX = 36 + Math.min(1, kmFactor / 120) * 260;
                    const halfY = 104 - 39;
                    return (
                      <>
                        <polyline
                          fill="none"
                          stroke="#0B1B3D"
                          strokeWidth="2.5"
                          points={pts.join(' ')}
                        />
                        <line x1="36" y1={halfY} x2={kmX} y2={halfY} stroke="#C59B27" strokeWidth="1.2" strokeDasharray="3 2" />
                        <line x1={kmX} y1={halfY} x2={kmX} y2="104" stroke="#C59B27" strokeWidth="1.2" strokeDasharray="3 2" />
                        <circle cx={kmX} cy={halfY} r="4" fill="#C59B27" stroke="#0B1B3D" strokeWidth="1.5" />
                        <text x={kmX} y="116" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#0B1B3D">
                          Km • t₁/₂ = {pkResults.halfLife}h
                        </text>
                        <text x="16" y={halfY + 3} textAnchor="middle" fontSize="8" fill="#475569">
                          ½V
                        </text>
                      </>
                    );
                  })()}
                  <text x="296" y="116" textAnchor="end" fontSize="8" fill="#64748B">
                    [S] Dosis
                  </text>
                </svg>
              </div>

              <div className="mt-3 p-3 bg-white rounded-lg border border-[#C59B27]/50 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Ajuste en Insuficiencia Renal:</span>
                </div>
                <p className="text-[#334155] leading-relaxed text-[11px]">
                  En pacientes con enfermedad renal crónica (disminución del aclaramiento CL), la vida media se prolonga exponencialmente, obligando a distanciar los intervalos de dosis para evitar toxicidad.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F2F1EA] rounded-lg text-[11px] text-[#64748B] font-mono-exam text-center">
              Concepto Clave de Farmacología Clínica en el ENAR
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 4. CINEMÁTICA DE PROYECTILES */}
      {/* ==================================================================== */}
      {activeTab === 'projectile' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-5">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625]">
                Tiro Parabólico y Cinemática Vectorial
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 overflow-x-auto">
                <KaTeXMath text="Alcance $R = \frac{v_0^2 \cdot \sin(2\theta)}{g}$ • Altura Máx $H = \frac{v_0^2 \cdot \sin^2(\theta)}{2g}$" />
              </p>
            </div>

            {/* Slider Velocidad */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Velocidad Inicial (v₀):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{velocity} m/s</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={velocity}
                onChange={e => setVelocity(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
            </div>

            {/* Slider Ángulo */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Ángulo de Disparo (θ):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{angle}° {angle === 45 ? '(Alcance máximo teórico)' : ''}</span>
              </div>
              <input
                type="range"
                min="10"
                max="85"
                step="1"
                value={angle}
                onChange={e => setAngle(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>10° (Rasante)</span>
                <span>45° (Alcance Máximo)</span>
                <span>85° (Casi Vertical)</span>
              </div>
            </div>

            <button
              onClick={() => {
                setVelocity(25);
                setAngle(45);
              }}
              className="text-xs text-[#64748B] hover:text-[#0B1B3D] flex items-center gap-1 font-mono-exam cursor-pointer pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider block">
                Métricas Cinemáticas del Vuelo:
              </span>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[9px] text-[#64748B] font-mono-exam uppercase block">Alcance (R)</span>
                  <span className="text-lg font-bold font-mono-exam text-[#0B1B3D]">
                    {projectileResults.maxRange} m
                  </span>
                </div>

                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[9px] text-[#64748B] font-mono-exam uppercase block">Altura Máx (H)</span>
                  <span className="text-lg font-bold font-mono-exam text-[#9E472A]">
                    {projectileResults.maxHeight} m
                  </span>
                </div>

                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[9px] text-[#64748B] font-mono-exam uppercase block">Tiempo (t)</span>
                  <span className="text-lg font-bold font-mono-exam text-[#1E7E34]">
                    {projectileResults.flightTime} s
                  </span>
                </div>
              </div>

              <div className="mt-3 p-3 bg-white rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
                <span className="text-[10px] font-mono-exam font-bold text-[#0B1B3D] uppercase block mb-1.5">
                  Trayectoria Parabólica en Tiempo Real:
                </span>
                <svg viewBox="0 0 320 130" className="w-full h-auto max-h-36" role="img" aria-label="Trayectoria parabólica del proyectil">
                  <rect x="0" y="0" width="320" height="130" rx="8" fill="#FAF9F5" />
                  {/* Suelo */}
                  <line x1="20" y1="108" x2="300" y2="108" stroke="#64748B" strokeWidth="2" />
                  {(() => {
                    const maxPossibleRange = 370; // 60^2 / 9.81 ~ 367m
                    const maxPossibleHeight = 185; // 60^2 / (2*9.81) ~ 183m
                    const R = parseFloat(projectileResults.maxRange);
                    const H = parseFloat(projectileResults.maxHeight);
                    const pxWidth = Math.max(24, Math.min(265, (R / maxPossibleRange) * 265));
                    const pxHeight = Math.max(10, Math.min(82, (H / maxPossibleHeight) * 82));
                    const startX = 28;
                    const endX = startX + pxWidth;
                    const midX = startX + pxWidth / 2;
                    const peakY = 108 - pxHeight;
                    // Control point for quadratic Bezier parabola: vertex at (midX, peakY) => Q(midX, 108 - 2*pxHeight)
                    const ctrlY = 108 - 2 * pxHeight;
                    return (
                      <>
                        <path
                          d={`M ${startX} 108 Q ${midX.toFixed(1)} ${ctrlY.toFixed(1)} ${endX.toFixed(1)} 108`}
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="2.5"
                        />
                        {/* Altura máxima */}
                        <line x1={midX} y1="108" x2={midX} y2={peakY} stroke="#9E472A" strokeWidth="1.2" strokeDasharray="3 2" />
                        <circle cx={midX} cy={peakY} r="3.5" fill="#9E472A" />
                        <text x={midX} y={Math.max(12, peakY - 6)} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#9E472A">
                          H = {projectileResults.maxHeight}m
                        </text>
                        {/* Punto de impacto */}
                        <circle cx={endX} cy="108" r="3.5" fill="#0B1B3D" />
                        <text
                          x={Math.max(54, Math.min(308, endX))}
                          y="122"
                          textAnchor={endX > 240 ? 'end' : 'middle'}
                          fontSize="8.5"
                          fontWeight="bold"
                          fill="#0B1B3D"
                        >
                          R = {projectileResults.maxRange}m ({angle}°)
                        </text>
                      </>
                    );
                  })()}
                </svg>
              </div>

              <div className="mt-3 p-3 bg-white rounded-lg border border-[#C59B27]/50 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Principio Físico:</span>
                </div>
                <p className="text-[#334155] leading-relaxed text-[11px] min-w-0 break-words">
                  <KaTeXMath text="El movimiento horizontal es uniforme (velocidad constante $v_x = v_0 \cos\theta$), mientras que el vertical está uniformemente acelerado por la gravedad terrestre ($g = 9.81\text{ m/s}^2$)." />
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F2F1EA] rounded-lg text-[11px] text-[#64748B] font-mono-exam text-center">
              Física Clásica evaluada en Admisiones & Ciencias Naturales
            </div>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
};

export default InteractiveFormulaLab;
