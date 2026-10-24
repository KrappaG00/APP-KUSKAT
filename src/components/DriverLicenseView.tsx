import React, { useState, useEffect } from 'react';
import {
  Car,
  Brain,
  FileCheck2,
  AlertOctagon,
  ShieldAlert,
  Gauge,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Award,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Compass,
} from 'lucide-react';

export interface DriverQuestion {
  id: string;
  category: 'teorico' | 'psicologico';
  topic: string;
  statement: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
}

export const DRIVER_QUESTIONS: DriverQuestion[] = [
  // Cuestionario Teórico
  {
    id: 'dt-01',
    category: 'teorico',
    topic: 'Prioridades de Paso en Rotondas',
    statement: 'Al aproximarse a un redondel o rotonda de varios carriles en El Salvador, ¿quién tiene legalmente la prioridad de paso?',
    options: [
      { key: 'A', text: 'El vehículo que intenta ingresar al redondel circulando a mayor velocidad.' },
      { key: 'B', text: 'El vehículo que ya se encuentra circulando dentro del anillo del redondel.' },
      { key: 'C', text: 'El vehículo de mayor tonelaje independientemente de su posición.' },
      { key: 'D', text: 'Siempre el vehículo que se incorpora desde el carril derecho.' },
    ],
    correctKey: 'B',
    explanation: 'Según la Ley de Transporte Terrestre, Tránsito y Seguridad Vial de El Salvador, los vehículos que ya circulan dentro del redondel tienen prioridad absoluta de paso sobre aquellos que pretenden incorporarse.',
  },
  {
    id: 'dt-02',
    category: 'teorico',
    topic: 'Límites de Velocidad en Zonas Escolares',
    statement: '¿Cuál es la velocidad máxima permitida al transitar frente a zonas escolares o áreas hospitalarias debidamente señalizadas?',
    options: [
      { key: 'A', text: '40 km/h en horas hábiles.' },
      { key: 'B', text: '30 km/h o menos según la visibilidad y presencia de peatones.' },
      { key: 'C', text: '20 km/h estricto durante horarios de entrada y salida de escolares.' },
      { key: 'D', text: '50 km/h con luces intermitentes encendidas.' },
    ],
    correctKey: 'C',
    explanation: 'El Reglamento General de Tránsito estipula una velocidad máxima estricta de 20 km/h en zonas escolares durante los períodos de ingreso y egreso de estudiantes, resguardando la integridad física infantil.',
  },
  {
    id: 'dt-03',
    category: 'teorico',
    topic: 'Clasificación de Señales Viales',
    statement: '¿Qué indican las señales viales de fondo amarillo con forma de rombo o diamante?',
    options: [
      { key: 'A', text: 'Señales Preventivas: advierten sobre condiciones de riesgo o peligros próximos en la vía.' },
      { key: 'B', text: 'Señales Reglamentarias: notifican órdenes imperativas de obligatorio cumplimiento.' },
      { key: 'C', text: 'Señales Informativas: orientan sobre kilometraje, destinos y servicios turísticos.' },
      { key: 'D', text: 'Señales Transitorias de obras en construcción.' },
    ],
    correctKey: 'A',
    explanation: 'Las señales amarillas en forma de rombo son Señales Preventivas cuyo objetivo es advertir al conductor con suficiente anticipación sobre curvas pronunciadas, pendientes, cruces o peligros en la calzada.',
  },
  {
    id: 'dt-04',
    category: 'teorico',
    topic: 'Alcoholemia y Conducción Peligrosa',
    statement: 'En El Salvador, ¿a partir de qué nivel de alcohol en aire espirado o sangre se tipifica el delito penal de Conducción Peligrosa de Vehículos de Motor (Art. 147-E Código Penal)?',
    options: [
      { key: 'A', text: 'A partir de 50 mg/dl (miligramos por decilitro).' },
      { key: 'B', text: 'A partir de 100 mg/dl (grados de alcohol) o al superar los límites de tolerancia legal.' },
      { key: 'C', text: 'Únicamente si se provoca un accidente con daños materiales.' },
      { key: 'D', text: 'A partir de 150 mg/dl en vehículos particulares.' },
    ],
    correctKey: 'B',
    explanation: 'En El Salvador, de 50 a 99 mg/dl constituye infracción administrativa muy grave con multa económica y suspensión; superar los 100 mg/dl constituye el delito penal de Conducción Peligrosa, con detención obligatoria de 72 horas y decomiso de placas/licencia.',
  },
  {
    id: 'dt-05',
    category: 'teorico',
    topic: 'Distancia de Seguridad Vehicular',
    statement: '¿Cuál es la regla recomendada para mantener una distancia prudencial de seguimiento con respecto al vehículo delantero en condiciones secas?',
    options: [
      { key: 'A', text: 'La regla de 1 segundo de separación por cada 10 km/h.' },
      { key: 'B', text: 'La regla de los 3 segundos de distancia de seguimiento.' },
      { key: 'C', text: 'Dejar exactamente medio metro por cada tonelada de peso del vehículo.' },
      { key: 'D', text: 'Mantenerse siempre a no más de 2 metros para evitar adelantamientos indebidos.' },
    ],
    correctKey: 'B',
    explanation: 'La regla de los 3 segundos permite al conductor disponer del tiempo necesario de reacción (aprox. 0.75 a 1 s) y la posterior distancia de frenado mecánica sin colisionar por alcance.',
  },

  // Cuestionario Psicológico y Perfil Vial
  {
    id: 'dp-01',
    category: 'psicologico',
    topic: 'Control Emocional e Ira al Volante (Road Rage)',
    statement: 'Si otro conductor le corta el paso bruscamente de manera provocadora o le toca el claxon insistentemente, ¿cuál es la conducta psicológicamente adecuada según el manejo defensivo?',
    options: [
      { key: 'A', text: 'Acelerar de inmediato para alcanzarlo y reclamarle en el siguiente semáforo.' },
      { key: 'B', text: 'Frenar bruscamente para intimidar al conductor que viene detrás.' },
      { key: 'C', text: 'Mantener la calma, regular la respiración, ceder el paso y distanciarse del vehículo conflictivo sin establecer contacto visual desafiante.' },
      { key: 'D', text: 'Tocar el claxon con la misma insistencia para hacer valer sus derechos.' },
    ],
    correctKey: 'C',
    explanation: 'La inteligencia emocional al volante exige desescalar el conflicto. El manejo defensivo prioriza la preservación de la vida sobre el orgullo personal, evitando la escalada de violencia en el tráfico.',
  },
  {
    id: 'dp-02',
    category: 'psicologico',
    topic: 'Fatiga y Percepción de Riesgo',
    statement: 'Si durante un viaje nocturno siente pesadez en los párpados, bostezos continuos y dificultad para recordar los últimos kilómetros recorridos, ¿qué debe hacer?',
    options: [
      { key: 'A', text: 'Subir el volumen de la radio y bajar las ventanillas para que el aire frío le despierte.' },
      { key: 'B', text: 'Tomar bebidas energizantes con cafeína y aumentar la velocidad para llegar más rápido.' },
      { key: 'C', text: 'Estacionar el vehículo en un lugar seguro y público (estación de servicio) y descansar al menos 20 a 30 minutos antes de continuar.' },
      { key: 'D', text: 'Fijar la mirada en las luces traseras del vehículo delantero para no perder la ruta.' },
    ],
    correctKey: 'C',
    explanation: 'Los microsueños duran entre 2 y 4 segundos, suficientes para recorrer decenas de metros a ciegas. Ni el café ni la música sustituyen el sueño biológico; la única medida segura es detenerse a descansar.',
  },
  {
    id: 'dp-03',
    category: 'psicologico',
    topic: 'Distracciones Cognitivas al Volante',
    statement: '¿Por qué enviar o leer mensajes de texto por celular al conducir multiplica exponencialmente el riesgo de siniestralidad, incluso más que hablar con un pasajero?',
    options: [
      { key: 'A', text: 'Porque absorbe simultáneamente la atención visual (ojos), cognitiva (pensamiento) y manual (manos) del conductor.' },
      { key: 'B', text: 'Únicamente porque es una infracción de tránsito estipulada en la ley.' },
      { key: 'C', text: 'Porque el teléfono celular emite radiaciones que interfieren con la computadora del vehículo.' },
      { key: 'D', text: 'Solo es peligroso si se circula a más de 80 km/h.' },
    ],
    correctKey: 'A',
    explanation: 'El uso del teléfono móvil al volante genera una triple distracción: visual (se aparta la vista del camino), cognitiva (la mente procesa el mensaje) y motora (se suelta el volante), incrementando el tiempo de respuesta hasta en un 400%.',
  },
  {
    id: 'dp-04',
    category: 'psicologico',
    topic: 'Presión Social y Conducción Temeraria',
    statement: 'Cuando viaja con acompañantes que le incitan a correr o a ignorar las señales de alto para demostrar habilidad, ¿cómo debe actuar el conductor responsable?',
    options: [
      { key: 'A', text: 'Complacer a los amigos para evitar burlas de debilidad o miedo.' },
      { key: 'B', text: 'Asumir el rol de autoridad como capitán responsable del vehículo, estableciendo con firmeza que la seguridad de todos no es negociable.' },
      { key: 'C', text: 'Entregarle el volante a quien esté insistiendo en correr.' },
      { key: 'D', text: 'Acelerar un poco solo en tramos rectos donde no haya policías visibles.' },
    ],
    correctKey: 'B',
    explanation: 'El conductor tiene la responsabilidad civil y penal exclusiva de la vida de los ocupantes y terceros. La madurez psicológica vial se evidencia en la capacidad de resistir la presión de grupo.',
  },
];

// Catálogo Oficial de Señales de Tránsito de El Salvador
export interface RoadSign {
  id: string;
  type: 'preventiva' | 'reglamentaria' | 'informativa';
  name: string;
  code: string;
  meaning: string;
  rule: string;
  svgIcon: React.ReactNode;
}

export const OFFICIAL_ROAD_SIGNS: RoadSign[] = [
  // 1. Reglamentarias (Rojo/Blanco)
  {
    id: 'sign-r1',
    type: 'reglamentaria',
    name: 'Alto (Stop)',
    code: 'R-1',
    meaning: 'Obligación de detener el vehículo por completo antes de la línea de parada y ceder el paso a todo el tráfico que circula en la vía transversal.',
    rule: 'Falta muy grave ignorarla; detención obligatoria de las 4 ruedas.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" strokeWidth="4" />
        <text x="50" y="58" fill="#ffffff" fontSize="22" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ALTO</text>
      </svg>
    ),
  },
  {
    id: 'sign-r2',
    type: 'reglamentaria',
    name: 'Ceda el Paso',
    code: 'R-2',
    meaning: 'Reducir la velocidad y detenerse si es necesario para permitir la incorporación o paso preferente de vehículos que ya circulan en la vía principal o redondel.',
    rule: 'Prioridad absoluta para el flujo que ya está dentro de la vía.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <polygon points="50,90 10,15 90,15" fill="#ffffff" stroke="#dc2626" strokeWidth="12" />
        <polygon points="50,75 22,25 78,25" fill="#ffffff" />
        <text x="50" y="38" fill="#dc2626" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CEDA EL</text>
        <text x="50" y="52" fill="#dc2626" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PASO</text>
      </svg>
    ),
  },
  {
    id: 'sign-r3',
    type: 'reglamentaria',
    name: 'Velocidad Máxima Permitida',
    code: 'R-30',
    meaning: 'Establece el límite máximo legal de velocidad al que se puede circular en condiciones favorables.',
    rule: 'Exceder este límite acarrea multa y riesgo de siniestralidad severa.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" strokeWidth="10" />
        <text x="50" y="60" fill="#111827" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">60</text>
        <text x="50" y="76" fill="#111827" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">KM/H</text>
      </svg>
    ),
  },
  {
    id: 'sign-r4',
    type: 'reglamentaria',
    name: 'Prohibido Estacionar',
    code: 'R-8',
    meaning: 'Prohibición absoluta de dejar estacionado el vehículo en la vía señalizada.',
    rule: 'Decomiso con grúa en ejes preferenciales de San Salvador.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" strokeWidth="10" />
        <text x="50" y="66" fill="#111827" fontSize="48" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">E</text>
        <line x1="20" y1="20" x2="80" y2="80" stroke="#dc2626" strokeWidth="10" />
      </svg>
    ),
  },

  // 2. Preventivas (Amarillas en Rombo)
  {
    id: 'sign-p1',
    type: 'preventiva',
    name: 'Curva Peligrosa a la Derecha',
    code: 'P-1',
    meaning: 'Advierte sobre la proximidad de una curva cerrada hacia la derecha que exige reducir la velocidad para evitar derrape.',
    rule: 'Reducir velocidad antes de entrar al trazado de la curva.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" strokeWidth="4" transform="rotate(45 50 50)" />
        <path d="M 45,70 L 45,45 Q 45,35 60,35 L 68,35 M 62,28 L 72,35 L 62,42" fill="none" stroke="#111827" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'sign-p2',
    type: 'preventiva',
    name: 'Zona Escolar / Cruce de Peatones',
    code: 'P-15',
    meaning: 'Indica la cercanía de un centro educativo o paso peatonal frecuente de niños.',
    rule: 'Límite obligatorio estricto de 20 km/h en horas de entrada y salida.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" strokeWidth="4" transform="rotate(45 50 50)" />
        <circle cx="50" cy="36" r="6" fill="#111827" />
        <path d="M 40,68 L 48,50 L 52,50 L 58,68 M 44,52 L 56,52" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'sign-p3',
    type: 'preventiva',
    name: 'Reductor de Velocidad (Túmulo)',
    code: 'P-22',
    meaning: 'Advierte sobre un resalto físico transversal en la calzada para obligar a disminuir la velocidad.',
    rule: 'Disminuir a velocidad de paso suave para evitar daños en la suspensión.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" strokeWidth="4" transform="rotate(45 50 50)" />
        <path d="M 28,58 L 40,58 Q 50,40 60,58 L 72,58" fill="none" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
  },

  // 3. Informativas (Azules / Verdes)
  {
    id: 'sign-i1',
    type: 'informativa',
    name: 'Servicio Hospitalario / Emergencias',
    code: 'I-4',
    meaning: 'Informa sobre la proximidad de un hospital, clínica o centro de atención médica de urgencia.',
    rule: 'Prioridad de paso para ambulancias con sirena activa.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" strokeWidth="3" />
        <rect x="42" y="25" width="16" height="50" fill="#ffffff" />
        <rect x="25" y="42" width="50" height="16" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'sign-i2',
    type: 'informativa',
    name: 'Estación de Servicio / Gasolinera',
    code: 'I-6',
    meaning: 'Orienta sobre la disponibilidad de combustible y servicios mecánicos para automotores.',
    rule: 'Ubicadas con anticipación de 1 a 5 km en autopistas nacionales.',
    svgIcon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" strokeWidth="3" />
        <rect x="28" y="30" width="30" height="45" rx="3" fill="#ffffff" />
        <rect x="33" y="36" width="20" height="14" rx="2" fill="#1d4ed8" />
        <path d="M 60,40 L 68,40 L 68,65 L 60,65" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const DriverLicenseView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'study' | 'signs' | 'quiz'>('study');
  const [activeCategory, setActiveCategory] = useState<'all' | 'teorico' | 'psicologico'>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [signFilter, setSignFilter] = useState<'all' | 'preventiva' | 'reglamentaria' | 'informativa'>('all');

  // Timed exam state
  const [isTimedExam, setIsTimedExam] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30 * 60); // 30 minutos VMT
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && secondsRemaining > 0 && !showResults) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            setShowResults(true);
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, secondsRemaining, showResults]);

  const handleStartTimedExam = () => {
    setIsTimedExam(true);
    setSecondsRemaining(30 * 60);
    setTimerRunning(true);
    setUserAnswers({});
    setShowResults(false);
    setActiveSubTab('quiz');
  };

  const filteredQuestions = DRIVER_QUESTIONS.filter((q) => {
    if (activeCategory === 'all') return true;
    return q.category === activeCategory;
  });

  const filteredSigns = OFFICIAL_ROAD_SIGNS.filter(s => {
    if (signFilter === 'all') return true;
    return s.type === signFilter;
  });

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (showResults) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
    setTimerRunning(false);
    setSecondsRemaining(30 * 60);
  };

  const correctCount = filteredQuestions.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctKey ? 1 : 0);
  }, 0);

  const scorePercentage = Math.round((correctCount / (filteredQuestions.length || 1)) * 100);
  const scoreBase10 = ((scorePercentage / 100) * 10).toFixed(1);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans-ui">
      {/* Encabezado Principal Corporativo */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#132A5C] text-[#C59B27] text-xs font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30">
            <Car className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>VMT • SERTRACEN • Academia Nacional de Tránsito</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Preparación para Licencias de Conducir (Teórico & Psicológico)
          </h2>
          <p className="text-[#CBD5E1] text-xs sm:text-sm max-w-3xl leading-relaxed">
            Módulo integral para aspirantes a licencias de conducir en El Salvador (Juvenil, Particular, Liviana, Pesada y Motocicleta).
            Abarca la normativa legal de tránsito, el catálogo oficial de señales viales y la evaluación de factores humanos y manejo defensivo.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveSubTab('study');
                setIsTimedExam(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 font-mono-exam ${
                activeSubTab === 'study'
                  ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-xs'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#C59B27]" />
              <span>1. Manual de Estudio</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveSubTab('signs');
                setIsTimedExam(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 font-mono-exam ${
                activeSubTab === 'signs'
                  ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-xs'
                  : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <Compass className="w-4 h-4 text-[#C59B27]" />
              <span>2. Catálogo de Señales Viales</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSubTab('quiz')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 font-mono-exam ${
                activeSubTab === 'quiz'
                  ? 'bg-[#C59B27] text-[#07132B] shadow-xs font-extrabold'
                  : 'bg-[#132A5C] text-[#C59B27] border border-[#C59B27]/40 hover:bg-[#1A3875]'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>3. Simulador de Evaluación</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* PESTAÑA 1: MATERIAL DE ESTUDIO OFICIAL */}
      {/* ==================================================================== */}
      {activeSubTab === 'study' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Subsección 1: Examen Teórico de Tránsito */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 sm:p-6 shadow-corporate-subtle space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#E5E3D8]">
              <div className="w-8 h-8 rounded-lg bg-[#0B1B3D] text-[#C59B27] flex items-center justify-center font-bold">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-base font-bold text-[#111625]">1. Eje Teórico: Ley de Tránsito</h3>
                <p className="text-xs text-[#64748B]">Normativa legal, redondeles y prioridades viales</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#334155]">
              <div className="bg-[#FAF9F5] p-4 rounded-lg border border-[#E5E3D8] space-y-2">
                <h4 className="font-mono-exam text-[11px] font-bold text-[#0B1B3D] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#9E472A]" />
                  <span>Prioridades Invariables en Vías Públicas</span>
                </h4>
                <ul className="space-y-1.5 pl-2 leading-relaxed">
                  <li>• <strong>Vehículos de Emergencia:</strong> Ambulancias, bomberos y policía con sirena activa tienen paso absoluto inmediato.</li>
                  <li>• <strong>Redondeles:</strong> Quien ya circula dentro del anillo tiene prioridad sobre quien pretende incorporarse.</li>
                  <li>• <strong>Intersecciones sin semáforo:</strong> Tiene prioridad el vehículo que circula por la vía de mayor jerarquía o el que llega por la derecha.</li>
                </ul>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-lg border border-[#E5E3D8] space-y-2">
                <h4 className="font-mono-exam text-[11px] font-bold text-[#0B1B3D] uppercase tracking-wider flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-[#1E7E34]" />
                  <span>Velocidades Máximas Legales</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-center font-mono-exam pt-1">
                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E3D8]">
                    <span className="text-[#64748B] block text-[10px]">Zona Escolar:</span>
                    <strong className="text-[#9E472A] text-xs">Máx. 20 km/h</strong>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E3D8]">
                    <span className="text-[#64748B] block text-[10px]">Zona Urbana:</span>
                    <strong className="text-[#0B1B3D] text-xs">Máx. 50 km/h</strong>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E3D8]">
                    <span className="text-[#64748B] block text-[10px]">Carreteras Rurales:</span>
                    <strong className="text-[#0B1B3D] text-xs">Máx. 70-80 km/h</strong>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-[#E5E3D8]">
                    <span className="text-[#64748B] block text-[10px]">Autopistas:</span>
                    <strong className="text-[#0B1B3D] text-xs">Máx. 90 km/h</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subsección 2: Examen Psicológico y Perfil Vial */}
          <div className="bg-white rounded-xl border border-[#E5E3D8] p-5 sm:p-6 shadow-corporate-subtle space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#E5E3D8]">
              <div className="w-8 h-8 rounded-lg bg-[#0B1B3D] text-[#C59B27] flex items-center justify-center font-bold">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-base font-bold text-[#111625]">2. Eje Psicométrico: Manejo Defensivo</h3>
                <p className="text-xs text-[#64748B]">Factores humanos, inteligencia emocional y control de impulsos</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#334155]">
              <div className="bg-[#FAF9F5] p-4 rounded-lg border border-[#E5E3D8] space-y-2">
                <h4 className="font-mono-exam text-[11px] font-bold text-[#0B1B3D] uppercase tracking-wider flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-[#0B1B3D]" />
                  <span>Los Tres Pilares del Manejo Defensivo</span>
                </h4>
                <ul className="space-y-1.5 pl-2 leading-relaxed">
                  <li><strong>1. Ver y Pensar Anticipadamente:</strong> Escanear la vía a 15-20 segundos hacia adelante, previendo frenadas repentinas.</li>
                  <li><strong>2. Control Emocional:</strong> No reaccionar a agresiones verbales ni gestos en el tráfico. La ira nubla la percepción del peligro.</li>
                  <li><strong>3. Ceder Siempre la Prioridad de la Vida:</strong> Aunque se tenga la preferencia de paso, cederlo si otro comete una imprudencia.</li>
                </ul>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-lg border border-[#E5E3D8] space-y-2">
                <h4 className="font-mono-exam text-[11px] font-bold text-[#9E472A] uppercase tracking-wider flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5 text-[#9E472A]" />
                  <span>Enemigos Mortales del Conductor</span>
                </h4>
                <ul className="space-y-1.5 pl-2 leading-relaxed">
                  <li>• <strong>Celular al volante:</strong> Desvía la mirada de 3 a 5 segundos (a 80 km/h se recorre la longitud de una cancha a ciegas).</li>
                  <li>• <strong>Microsueños:</strong> El cansancio extremo equivale biológicamente a más de 50 mg/dl de alcohol en sangre.</li>
                  <li>• <strong>Alcohol y Drogas:</strong> Retardan los reflejos y alteran la noción de distancia y velocidad.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 2: CATÁLOGO OFICIAL DE SEÑALIZACIÓN VIAL */}
      {/* ==================================================================== */}
      {activeSubTab === 'signs' && (
        <div className="space-y-5">
          <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex items-center justify-between gap-3 flex-wrap text-xs">
            <span className="font-mono-exam font-bold text-[#0B1B3D] uppercase">
              Clasificación Oficial del Manual Centroamericano de Dispositivos Uniformes (VMT):
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSignFilter('all')}
                className={`px-3 py-1 rounded-md font-mono-exam text-xs font-bold transition-colors cursor-pointer ${
                  signFilter === 'all' ? 'bg-[#0B1B3D] text-[#FAF9F5]' : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Todas ({OFFICIAL_ROAD_SIGNS.length})
              </button>
              <button
                onClick={() => setSignFilter('reglamentaria')}
                className={`px-3 py-1 rounded-md font-mono-exam text-xs font-bold transition-colors cursor-pointer ${
                  signFilter === 'reglamentaria' ? 'bg-[#0B1B3D] text-[#FAF9F5]' : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Reglamentarias (Rojo)
              </button>
              <button
                onClick={() => setSignFilter('preventiva')}
                className={`px-3 py-1 rounded-md font-mono-exam text-xs font-bold transition-colors cursor-pointer ${
                  signFilter === 'preventiva' ? 'bg-[#0B1B3D] text-[#FAF9F5]' : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Preventivas (Amarillo)
              </button>
              <button
                onClick={() => setSignFilter('informativa')}
                className={`px-3 py-1 rounded-md font-mono-exam text-xs font-bold transition-colors cursor-pointer ${
                  signFilter === 'informativa' ? 'bg-[#0B1B3D] text-[#FAF9F5]' : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Informativas (Azul)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSigns.map(sign => (
              <div
                key={sign.id}
                className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 p-1 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8] flex items-center justify-center">
                    {sign.svgIcon}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono-exam text-[10px] font-bold bg-[#0B1B3D] text-[#FAF9F5] px-1.5 py-0.5 rounded">
                        {sign.code}
                      </span>
                      <span className="font-editorial font-bold text-sm text-[#111625] truncate">
                        {sign.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block mt-0.5">
                      Tipo: {sign.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-[#334155] border-t border-[#E5E3D8] pt-2">
                  <p className="leading-snug">{sign.meaning}</p>
                  <div className="bg-[#FAF9F5] p-2 rounded border border-[#E5E3D8] text-[11px] font-mono-exam text-[#0B1B3D]">
                    <strong>Regla:</strong> {sign.rule}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 3: SIMULADOR DE EVALUACIÓN OFICIAL (CON MODO TEMPORIZADO) */}
      {/* ==================================================================== */}
      {activeSubTab === 'quiz' && (
        <div className="space-y-6">
          {/* Barra de Control de Examen */}
          <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded-md text-xs font-mono-exam font-bold cursor-pointer ${
                  activeCategory === 'all' ? 'bg-[#0B1B3D] text-white' : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Todos ({DRIVER_QUESTIONS.length})
              </button>
              <button
                onClick={() => setActiveCategory('teorico')}
                className={`px-3 py-1 rounded-md text-xs font-mono-exam font-bold cursor-pointer ${
                  activeCategory === 'teorico' ? 'bg-[#0B1B3D] text-white' : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Teórico
              </button>
              <button
                onClick={() => setActiveCategory('psicologico')}
                className={`px-3 py-1 rounded-md text-xs font-mono-exam font-bold cursor-pointer ${
                  activeCategory === 'psicologico' ? 'bg-[#0B1B3D] text-white' : 'bg-[#FAF9F5] text-[#475569] border border-[#E5E3D8]'
                }`}
              >
                Psicológico
              </button>
            </div>

            <div className="flex items-center gap-2">
              {!isTimedExam ? (
                <button
                  onClick={handleStartTimedExam}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#9E472A] hover:bg-[#853a22] text-white font-mono-exam flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Iniciar Examen Oficial (30 Min)</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-[#FAF9F5] px-3 py-1.5 rounded-lg border border-[#C59B27] font-mono-exam text-xs">
                  <Clock className="w-4 h-4 text-[#9E472A] animate-pulse" />
                  <span className="font-bold text-[#0B1B3D]">Tiempo Restante:</span>
                  <span className="font-black text-sm text-[#9E472A]">{formatTimer(secondsRemaining)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tarjeta de Calificación al Terminar */}
          {showResults && (
            <div className="bg-[#FAF9F5] border-2 border-[#C59B27] rounded-xl p-5 shadow-corporate-card space-y-3 animate-fade-in font-sans-ui">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial text-lg font-bold text-[#111625] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#C59B27]" />
                  Boleta de Resultados • Evaluación VMT / SERTRACEN
                </h4>
                <span className={`px-2.5 py-0.5 rounded text-xs font-mono-exam font-bold uppercase ${
                  parseFloat(scoreBase10) >= 8.0 ? 'bg-[#1E7E34] text-white' : 'bg-[#9E472A] text-white'
                }`}>
                  {parseFloat(scoreBase10) >= 8.0 ? 'Aprobado Satisfactorio (Apto)' : 'Reprobado (Mínimo 8.0)'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-exam">
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Nota Oficial</span>
                  <span className="text-2xl font-bold text-[#0B1B3D]">{scoreBase10} / 10.0</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Aciertos</span>
                  <span className="text-2xl font-bold text-[#1E7E34]">{correctCount}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Errores</span>
                  <span className="text-2xl font-bold text-[#9E472A]">{filteredQuestions.length - correctCount}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Exigencia Legal</span>
                  <span className="text-2xl font-bold text-[#475569]">80%</span>
                </div>
              </div>
            </div>
          )}

          {/* Listado de Preguntas */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const selected = userAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-subtle p-5 space-y-3 font-sans-ui"
                >
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAE8DD]">
                    <span className="font-mono-exam font-bold text-[#0B1B3D]">
                      Pregunta {idx + 1} de {filteredQuestions.length} • {q.topic}
                    </span>
                    <span className="text-[10px] font-mono-exam bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8] text-[#64748B] uppercase">
                      {q.category}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#111625] leading-relaxed">
                    {q.statement}
                  </p>

                  <div className="space-y-2 pt-1">
                    {q.options.map(opt => {
                      const isSelected = selected === opt.key;
                      const isCorrect = opt.key === q.correctKey;

                      let style = 'bg-[#FAF9F5] border-[#E5E3D8] hover:bg-[#F2F1EA] text-[#111625]';
                      let badge = 'bg-white text-[#475569] border-[#E5E3D8]';

                      if (showResults) {
                        if (isCorrect) {
                          style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold';
                          badge = 'bg-[#1E7E34] text-white border-transparent';
                        } else if (isSelected && !isCorrect) {
                          style = 'bg-rose-50 border-rose-400 text-rose-950';
                          badge = 'bg-[#9E472A] text-white border-transparent';
                        }
                      } else if (isSelected) {
                        style = 'bg-[#0B1B3D] border-[#1A2E5A] text-white';
                        badge = 'bg-white text-[#0B1B3D] border-transparent font-bold';
                      }

                      return (
                        <div
                          key={opt.key}
                          onClick={() => handleSelectOption(q.id, opt.key)}
                          className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer text-xs sm:text-sm ${style}`}
                        >
                          <span className={`w-6 h-6 rounded flex items-center justify-center font-mono-exam font-bold shrink-0 text-xs border ${badge}`}>
                            {opt.key}
                          </span>
                          <span className="flex-1 pt-0.5">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {showResults && (
                    <div className="mt-3 p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E3D8] text-xs text-[#334155] space-y-1 font-sans-ui">
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                        <HelpCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>Fundamentación Legal Oficial:</span>
                      </div>
                      <p className="leading-relaxed pl-5 text-[#475569]">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Botones de Acción */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleResetQuiz}
              className="px-4 py-2 rounded-lg border border-[#E5E3D8] text-xs font-bold text-[#475569] hover:bg-[#FAF9F5] transition-colors flex items-center gap-1.5 cursor-pointer font-mono-exam"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>

            {!showResults ? (
              <button
                onClick={() => {
                  setShowResults(true);
                  setTimerRunning(false);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-bold transition-all shadow-corporate-subtle flex items-center gap-2 cursor-pointer font-mono-exam"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Calificar y Ver Solucionario</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleResetQuiz();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-lg bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-bold transition-all shadow-corporate-subtle flex items-center gap-2 cursor-pointer font-mono-exam"
              >
                <span>Intentar Nuevamente</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverLicenseView;
