/**
 * BANCO OLÍMPICO DEL PROGRAMA JÓVENES TALENTO (MINED - UES)
 * Facultad de Ciencias Naturales y Matemática · Universidad de El Salvador
 *
 * Módulo de Alto Rendimiento Científico:
 * - Olimpiada Nacional de Matemática (ONM)
 * - Olimpiada Nacional de Física (ONF)
 * - Olimpiada Nacional de Química (ONQ)
 * - Olimpiada Nacional de Biología (ONB)
 */

export interface OlympicProblem {
  id: string;
  discipline: 'matematica' | 'fisica' | 'quimica' | 'biologia';
  disciplineLabel: string;
  stage: 'Fase I (Virtual/Correspondencia)' | 'Fase II (Prueba Selectiva)' | 'Fase III (Academia Sabatina)';
  topic: string;
  statement: string;
  hints: {
    level: number;
    title: string;
    text: string;
  }[];
  detailedSolution: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export const OLYMPIC_DISCIPLINES = [
  { id: 'all', name: 'Todas las Disciplinas', icon: '🏆' },
  { id: 'matematica', name: 'Matemática (ONM)', icon: '📐' },
  { id: 'fisica', name: 'Física (ONF)', icon: '⚡' },
  { id: 'quimica', name: 'Química (ONQ)', icon: '🧪' },
  { id: 'biologia', name: 'Biología (ONB)', icon: '🧬' },
];

export const OLYMPIC_PROBLEMS_DATA: OlympicProblem[] = [
  // =========================================================================
  // MATEMÁTICA (ONM)
  // =========================================================================
  {
    id: 'onm-01',
    discipline: 'matematica',
    disciplineLabel: 'Matemática (ONM)',
    stage: 'Fase II (Prueba Selectiva)',
    topic: 'Combinatoria · Principio del Palomar (Dirichlet)',
    statement: 'En un tablero de ajedrez de $8 \\times 8$, se colocan 17 torres. Demuestre cuántas torres como mínimo deben estar colocadas de modo que ninguna de ellas se amenace entre sí, o bien determine: ¿cuál es el número máximo de torres que pueden colocarse sin que ninguna amenace a otra?',
    hints: [
      {
        level: 1,
        title: 'Pista 1: Dimensiones y casillas independientes',
        text: 'Dos torres se amenazan si comparten la misma fila o la misma columna. Considera el número total de filas del tablero.',
      },
      {
        level: 2,
        title: 'Pista 2: Aplicación del Principio del Palomar',
        text: 'Si colocas más de 8 torres en un tablero de 8 filas, por el Principio del Palomar al menos dos torres deben compartir la misma fila y por tanto se amenazan. El número máximo independiente es 8.',
      },
    ],
    detailedSolution: 'Dado que un tablero estándar posee 8 filas disjuntas, cada fila puede contener a lo sumo una torre sin que exista amenaza horizontal. Por el Principio del Palomar (Dirichlet), si se colocan $n$ torres con $n > 8$, existirán al menos $\\lceil n/8 \\rceil \\ge 2$ torres en la misma fila, amenazándose mutuamente. Por ende, el número máximo de torres independientes es exactamente 8 (una por cada fila y permutación de columnas).',
    options: {
      A: '8 torres.',
      B: '16 torres.',
      C: '64 torres.',
      D: '4 torres.',
    },
    correctAnswer: 'A',
    distractorRationale: {
      B: '16 torres correspondería a colocar 2 por fila, pero se amenazarían en el plano horizontal.',
      C: '64 es el total de casillas del tablero.',
      D: '4 es un subconjunto válido pero no es el valor máximo posible.',
    },
  },
  {
    id: 'onm-02',
    discipline: 'matematica',
    disciplineLabel: 'Matemática (ONM)',
    stage: 'Fase III (Academia Sabatina)',
    topic: 'Teoría de Números · Aritmética Modular & Teorema de Fermat',
    statement: 'Determine el residuo de dividir $3^{2026}$ entre 11 utilizando congruencias modulares.',
    hints: [
      {
        level: 1,
        title: 'Pista 1: Pequeño Teorema de Fermat',
        text: 'Dado que 11 es un número primo y $\\gcd(3, 11) = 1$, recuerda que $a^{p-1} \\equiv 1 \\pmod p$.',
      },
      {
        level: 2,
        title: 'Pista 2: Reducción del exponente',
        text: 'Como $3^{10} \\equiv 1 \\pmod{11}$, descompón el exponente 2026 módulo 10: $2026 = 10 \\times 202 + 6$. Luego evalúa $3^6 \\pmod{11}$.',
      },
    ],
    detailedSolution: 'Por el Pequeño Teorema de Fermat, siendo 11 primo y $\\gcd(3, 11) = 1$, se cumple que $3^{10} \\equiv 1 \\pmod{11}$. Expresando el exponente en base 10: $2026 = 10(202) + 6$. Luego: $3^{2026} = (3^{10})^{202} \\cdot 3^6 \\equiv 1^{202} \\cdot 3^6 \\equiv 3^6 \\pmod{11}$. Calculando potencias menores: $3^3 = 27 \\equiv 5 \\pmod{11}$, de modo que $3^6 = (3^3)^2 \\equiv 5^2 = 25 \\equiv 3 \\pmod{11}$. Por tanto, el residuo es 3.',
    options: {
      A: '3',
      B: '1',
      C: '9',
      D: '5',
    },
    correctAnswer: 'A',
    distractorRationale: {
      B: '1 sería el residuo si el exponente fuese múltiplo exacto de 10 (ej. $3^{2020}$).',
      C: '9 corresponde a $3^2 \\pmod{11}$, no a $3^6$.',
      D: '5 corresponde a $3^3 = 27 \\equiv 5 \\pmod{11}$, faltando elevar al cuadrado.',
    },
  },

  // =========================================================================
  // FÍSICA (ONF)
  // =========================================================================
  {
    id: 'onf-01',
    discipline: 'fisica',
    disciplineLabel: 'Física (ONF)',
    stage: 'Fase II (Prueba Selectiva)',
    topic: 'Dinámica de Rotación · Conservación de Momento Angular',
    statement: 'Un cilindro sólido uniforme (masa $M$, radio $R$, $I = \\frac{1}{2}MR^2$) y un aro delgado de la misma masa y radio ($I = MR^2$) se liberan simultáneamente desde el reposo en la parte superior de un plano inclinado rugoso de altura $h$. Si ambos ruedan sin deslizar, ¿cuál llega primero a la base del plano inclinado?',
    hints: [
      {
        level: 1,
        title: 'Pista 1: Conservación de energía mecánica',
        text: 'La energía potencial inicial $Mgh$ se transforma en energía cinética de traslación $\\frac{1}{2}Mv^2$ y de rotación $\\frac{1}{2}I\\omega^2$.',
      },
      {
        level: 2,
        title: 'Pista 2: Condición de rodadura pura',
        text: 'Usa $\\omega = v/R$. A mayor momento de inercia $I$, mayor fracción de energía se destina a la rotación y menor a la traslación lineal $v$.',
      },
    ],
    detailedSolution: 'Por conservación de energía: $Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}Mv^2\\left(1 + \\frac{I}{MR^2}\\right)$. Despejando la velocidad lineal: $v = \\sqrt{\\frac{2gh}{1 + \\beta}}$, donde $\\beta = I/(MR^2)$. Para el cilindro sólido $\\beta = 0.5$, dando $v_{\\text{cilindro}} = \\sqrt{\\frac{4}{3}gh} \\approx 1.15\\sqrt{gh}$. Para el aro $\\beta = 1.0$, dando $v_{\\text{aro}} = \\sqrt{gh}$. Como la aceleración y velocidad del cilindro son mayores en todo instante, el cilindro sólido llega primero.',
    options: {
      A: 'El cilindro sólido llega primero.',
      B: 'El aro delgado llega primero.',
      C: 'Llegan exactamente al mismo tiempo porque tienen la misma masa $M$.',
      D: 'Depende del coeficiente de fricción estática del plano.',
    },
    correctAnswer: 'A',
    distractorRationale: {
      B: 'El aro tiene mayor inercia rotacional, por lo que acelera más lentamente.',
      C: 'En cinemática rotacional la distribución de masa (geometría) altera drásticamente la aceleración lineal independientemente de la masa total.',
      D: 'El coeficiente de fricción solo asegura que no deslice; no altera la cinemática de conservación energética.',
    },
  },

  // =========================================================================
  // QUÍMICA (ONQ)
  // =========================================================================
  {
    id: 'onq-01',
    discipline: 'quimica',
    disciplineLabel: 'Química (ONQ)',
    stage: 'Fase III (Academia Sabatina)',
    topic: 'Termodinámica Química · Criterio de Espontaneidad de Gibbs',
    statement: 'Para una reacción endotérmica donde $\\Delta H^\\circ = +85\\,\\text{kJ/mol}$ y $\\Delta S^\\circ = +250\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$, ¿a partir de qué temperatura mínima la reacción se vuelve termodinámicamente espontánea a presión estándar de 1 atm?',
    hints: [
      {
        level: 1,
        title: 'Pista 1: Ecuación de Energía Libre de Gibbs',
        text: 'La condición de espontaneidad exige que $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ < 0$.',
      },
      {
        level: 2,
        title: 'Pista 2: Homogeneidad de unidades',
        text: 'Convierte $\\Delta H^\\circ$ a Joules ($85,000\\,\\text{J/mol}$) o $\\Delta S^\\circ$ a kJ ($0.250\\,\\text{kJ}/(\\text{mol}\\cdot\\text{K}$) antes de despejar $T = \\Delta H^\\circ / \\Delta S^\\circ$.',
      },
    ],
    detailedSolution: 'Para que la reacción sea espontánea, debe cumplirse $\\Delta G^\\circ < 0$, es decir, $\\Delta H^\\circ - T\\Delta S^\\circ < 0 \\implies T > \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$. Homogeneizando unidades: $\\Delta H^\\circ = 85,000\\,\\text{J/mol}$ y $\\Delta S^\\circ = 250\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$. Calculando: $T > \\frac{85,000}{250} = 340\\,\\text{K}$. En grados Celsius: $340 - 273.15 = 66.85^\\circ\\text{C}$. Por tanto, la temperatura mínima es $340\\,\\text{K}$ ($67^\\circ\\text{C}$).',
    options: {
      A: '$T > 340\\,\\text{K}$ (aprox. $67^\\circ\\text{C}$).',
      B: '$T > 0.34\\,\\text{K}$.',
      C: 'La reacción nunca puede ser espontánea porque es endotérmica.',
      D: '$T > 613\\,\\text{K}$.',
    },
    correctAnswer: 'A',
    distractorRationale: {
      B: 'Error común de dividir $85$ entre $250$ sin convertir kJ a J.',
      C: 'Las reacciones endotérmicas son espontáneas a altas temperaturas si el cambio de entropía $\\Delta S > 0$.',
      D: 'Resultado de sumar erróneamente $273$ a $340$ en lugar de restar para convertir a Celsius.',
    },
  },

  // =========================================================================
  // BIOLOGÍA (ONB)
  // =========================================================================
  {
    id: 'onb-01',
    discipline: 'biologia',
    disciplineLabel: 'Biología (ONB)',
    stage: 'Fase II (Prueba Selectiva)',
    topic: 'Genética de Poblaciones · Equilibrio de Hardy-Weinberg',
    statement: 'En una población salvadoreña en equilibrio de Hardy-Weinberg, la frecuencia de individuos que padecen una enfermedad autosómica recesiva (genotipo $aa$) es de 1 en 2,500 ($q^2 = 0.0004$). ¿Cuál es la frecuencia esperada de portadores sanos heterocigotos ($2pq$) en dicha población?',
    hints: [
      {
        level: 1,
        title: 'Pista 1: Cálculo del alelo recesivo',
        text: 'Si $q^2 = 0.0004$, extrae la raíz cuadrada para hallar la frecuencia alélica $q$.',
      },
      {
        level: 2,
        title: 'Pista 2: Ecuación fundamental alélica',
        text: 'Usa $p + q = 1$ para hallar $p = 1 - q$. Luego calcula $2pq$.',
      },
    ],
    detailedSolution: 'Dado $q^2 = 1/2500 = 0.0004$, la frecuencia del alelo recesivo es $q = \\sqrt{0.0004} = 0.02$. Dado que $p + q = 1$, la frecuencia del alelo dominante es $p = 1 - 0.02 = 0.98$. La frecuencia de portadores heterocigotos viene dada por $2pq = 2(0.98)(0.02) = 0.0392$, lo cual representa el $3.92\\%$ de la población (aproximadamente 1 de cada 25 personas).',
    options: {
      A: '$3.92\\%$ (aprox. $0.0392$).',
      B: '$0.04\\%$.',
      C: '$1.96\\%$.',
      D: '$96.04\\%$.',
    },
    correctAnswer: 'A',
    distractorRationale: {
      B: 'Confusión entre $q^2 = 0.04\\%$ y la frecuencia de portadores $2pq$.',
      C: 'Corresponde a $pq$, olvidando multiplicar por 2 en la fórmula de heterocigotos.',
      D: 'Corresponde a la frecuencia de individuos homocigotos dominantes $p^2 = (0.98)^2 = 0.9604$.',
    },
  },
];
