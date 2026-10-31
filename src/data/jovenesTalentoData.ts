/**
 * BANCO OLÍMPICO DEL PROGRAMA JÓVENES TALENTO (MINED - UES)
 * Facultad de Ciencias Naturales y Matemática · Universidad de El Salvador
 *
 * Módulo de Alto Rendimiento Científico:
 * - Olimpiada Nacional de Matemática (ONM)
 * - Olimpiada Nacional de Física (ONF)
 * - Olimpiada Nacional de Química (ONQ)
 * - Olimpiada Nacional de Biología (ONB)
 * - Olimpiada Salvadoreña de Informática (OSI)
 */

export interface OlympicProblem {
  id: string;
  discipline: 'matematica' | 'fisica' | 'quimica' | 'biologia' | 'computacion';
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

export interface OlympicSolvedExample {
  number: number;
  title: string;
  problemStatement: string;
  stepByStepProof: string;
  pedagogicInsight: string;
}

export interface OlympicKeyTheorem {
  name: string;
  statement: string;
  importance: string;
}

export interface OlympicThematicUnit {
  id: string;
  discipline: 'matematica' | 'fisica' | 'quimica' | 'biologia' | 'computacion';
  disciplineLabel: string;
  stage: 'Fase I (Virtual/Correspondencia)' | 'Fase II (Prueba Selectiva)' | 'Fase III (Academia Sabatina)';
  title: string;
  substantiveTheory: string; // Mínimo 500 palabras conceptuales con KaTeX formal sin boilerplate
  keyTheorems: OlympicKeyTheorem[];
  solvedExamples: OlympicSolvedExample[]; // Mínimo 5 ejemplos resueltos paso a paso por unidad
  practiceQuestions: OlympicProblem[];
}

export const OLYMPIC_DISCIPLINES = [
  { id: 'all', name: 'Todas las Disciplinas', icon: '🏆' },
  { id: 'matematica', name: 'Matemática (ONM)', icon: '📐' },
  { id: 'fisica', name: 'Física (ONF)', icon: '⚡' },
  { id: 'quimica', name: 'Química (ONQ)', icon: '🧪' },
  { id: 'biologia', name: 'Biología (ONB)', icon: '🧬' },
  { id: 'computacion', name: 'Informática / OSI', icon: '💻' },
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

  // =========================================================================
  // INFORMÁTICA / COMPUTACIÓN (OSI)
  // =========================================================================
  {
    id: 'osi-01',
    discipline: 'computacion',
    disciplineLabel: 'Informática / OSI',
    stage: 'Fase II (Prueba Selectiva)',
    topic: 'Algoritmos en Grafos · Caminos Mínimos con Dijkstra',
    statement: 'En una red de comunicaciones representada por un grafo ponderado no dirigido con $V = 6$ servidores y aristas con pesos positivos que representan latencias en milisegundos, se ejecuta el algoritmo de Dijkstra desde el servidor origen $S$. ¿Cuál es la estructura de datos óptima para mantener las distancias provisionales alcanzando una complejidad temporal de $\\mathcal{O}((V + E) \\log V)$?',
    hints: [
      {
        level: 1,
        title: 'Pista 1: Extracción del mínimo',
        text: 'En cada paso de relajación se requiere extraer el vértice no visitado con menor distancia tentativa.',
      },
      {
        level: 2,
        title: 'Pista 2: Cola de prioridad binaria',
        text: 'Un arreglo lineal requiere $\\mathcal{O}(V^2)$, mientras que una cola de prioridad basada en un montículo binario (min-heap) optimiza la extracción a $\\mathcal{O}(\\log V)$.',
      },
    ],
    detailedSolution: 'El algoritmo clásico de Dijkstra iterativamente selecciona el nodo no visitado con la menor distancia tentativa. Si se utiliza un arreglo lineal no ordenado, encontrar el mínimo toma $\\mathcal{O}(V)$, sumando $\\mathcal{O}(V^2)$ en total. Al utilizar una cola de prioridad basada en un montículo binario (Binary Min-Heap), cada extracción del mínimo toma $\\mathcal{O}(\\log V)$ y cada actualización (disminución de clave o inserción) toma $\\mathcal{O}(\\log V)$, logrando un tiempo total de $\\mathcal{O}((V + E) \\log V)$, el cual es óptimo para grafos dispersos habituales en olimpiadas.',
    options: {
      A: 'Montículo binario de mínimos (Min-Heap / Priority Queue).',
      B: 'Arreglo estático no ordenado con búsqueda secuencial.',
      C: 'Pila LIFO estándar (Stack).',
      D: 'Tabla hash sin ordenamiento de claves.',
    },
    correctAnswer: 'A',
    distractorRationale: {
      B: 'Un arreglo estático degrada la complejidad a $\\mathcal{O}(V^2)$, ineficiente para grafos grandes.',
      C: 'Una pila implementa recorrido en profundidad (DFS), incapaz de garantizar distancias mínimas en grafos con pesos.',
      D: 'Una tabla hash no proporciona acceso en tiempo logarítmico al elemento de menor peso.',
    },
  },
];

// =========================================================================
// UNIDADES TEMÁTICAS OLÍMPICAS OFICIALES (MINED - UES)
// =========================================================================
export const OLYMPIC_THEMATIC_UNITS: OlympicThematicUnit[] = [
  // -------------------------------------------------------------------------
  // UNIDAD 1: MATEMÁTICA (ONM) — TEORÍA DE NÚMEROS & ARITMÉTICA MODULAR
  // -------------------------------------------------------------------------
  {
    id: 'onm-teoria-numeros',
    discipline: 'matematica',
    disciplineLabel: 'Matemática (ONM)',
    stage: 'Fase III (Academia Sabatina)',
    title: 'Teoría de Números & Aritmética Modular Avanzada',
    substantiveTheory: `La Teoría de Números elemental y analítica constituye el núcleo formativo cardinal de la Olimpiada Nacional de Matemática (ONM) coordinada por el Programa Jóvenes Talento de la Universidad de El Salvador. El concepto fundamental rector es la relación de congruencia modular introducida formalmente por Carl Friedrich Gauss en sus *Disquisitiones Arithmeticae* (1801). Dados dos números enteros $a, b \\in \\mathbb{Z}$ y un módulo entero positivo $m \\in \\mathbb{Z}^+$, afirmamos que $a$ es congruente con $b$ módulo $m$, denotado $a \\equiv b \\pmod m$, si y solamente si $m$ divide exactamente a la diferencia $(a - b)$, lo que equivale a la existencia de un entero $k \\in \\mathbb{Z}$ tal que $a - b = km$. 

La relación de congruencia define una partición de equivalencia sobre el conjunto de los enteros $\\mathbb{Z}$ en exactamente $m$ clases residuales disjuntas $\\mathbb{Z}/m\\mathbb{Z} = \\{[0], [1], [2], \\dots, [m-1]\\}$. Dicha estructura preserva rigurosamente la compatibilidad con las operaciones aritméticas fundamentales de adición y multiplicación: si $a_1 \\equiv b_1 \\pmod m$ y $a_2 \\equiv b_2 \\pmod m$, entonces $(a_1 + a_2) \\equiv (b_1 + b_2) \\pmod m$ y $(a_1 a_2) \\equiv (b_1 b_2) \\pmod m$. En consecuencia, para cualquier polinomio con coeficientes enteros $P(x) \\in \\mathbb{Z}[x]$, si $a \\equiv b \\pmod m$, se deduce de inmediato que $P(a) \\equiv P(b) \\pmod m$. Esta propiedad habilita la reducción exhaustiva de grandes expresiones potenciales sin calcular magnitudes exponenciales inabarcables.

No obstante, la operación de división modular no es universalmente válida y exige la noción de coprimalidad y divisores de cero. La ecuación lineal de congruencia $ax \\equiv b \\pmod m$ admite solución entera si y solo si el máximo común divisor $d = \\gcd(a, m)$ divide a $b$. Cuando $\\gcd(a, m) = 1$, el elemento $a$ posee un inverso multiplicativo modular único módulo $m$, denotado $a^{-1} \\pmod m$, el cual puede computarse algorítmicamente mediante el Algoritmo de Euclides Extendido. Este algoritmo determina coeficientes de Bézout $x, y \\in \\mathbb{Z}$ que satisfacen la identidad diofántica $ax + my = 1$, implicando directamente que $ax \\equiv 1 \\pmod m$.

Dos pilares analíticos de extrema potencia olímpica son el Pequeño Teorema de Fermat y su generalización, el Teorema de Euler. Si $p$ es un número primo y $\\gcd(a, p) = 1$, el Pequeño Teorema de Fermat establece que $a^{p-1} \\equiv 1 \\pmod p$, lo que significa que el orden multiplicativo de $a$ módulo $p$, denotado $\\text{ord}_p(a)$, es necesariamente un divisor de $p-1$. Leonhard Euler extendió este resultado para cualquier módulo compuesto $m \\ge 1$ mediante la función phi de Euler $\\phi(m)$, que cuenta la cantidad de enteros positivos menores o iguales a $m$ que son coprimos con $m$. La fórmula del producto de Euler demuestra que $\\phi(m) = m \\prod_{p \\mid m} \\left(1 - \\frac{1}{p}\\right)$. Así, si $\\gcd(a, m) = 1$, se cumple incondicionalmente que $a^{\\phi(m)} \\equiv 1 \\pmod m$.

Complementariamente, el Teorema de Wilson proporciona un criterio analítico perfecto de primalidad: un número entero $p > 1$ es primo si y solo si $(p - 1)! \\equiv -1 \\pmod p$. Su demostración descansa en el hecho de que, en el cuerpo finito $\\mathbb{Z}/p\\mathbb{Z}$, todo elemento $x \\in \\{2, 3, \\dots, p-2\\}$ posee un inverso multiplicativo único distinto de sí mismo ($x^{-1} \\ne x$), anulándose en pares de producto unitario dentro del factorial, quedando únicamente los elementos autoinversos $x^2 \\equiv 1 \\pmod p \\implies x \\equiv \\pm 1 \\pmod p$.

Finalmente, la resolución de sistemas de congruencias simultáneas se fundamenta en el Teorema Chino del Resto (TCR). Si $m_1, m_2, \\dots, m_k$ son enteros positivos coprimos dos a dos (es decir, $\\gcd(m_i, m_j) = 1$ para todo $i \\ne j$) y $M = \\prod_{i=1}^k m_i$, el sistema $x \\equiv a_i \\pmod{m_i}$ posee una solución única módulo $M$, calculable explícitamente mediante $x = \\sum_{i=1}^k a_i M_i y_i \\pmod M$, donde $M_i = M/m_i$ y $y_i \\equiv M_i^{-1} \\pmod{m_i}$. En el entrenamiento olímpico salvadoreño, el dominio fluido de estas herramientas permite transformar problemas aparentemente irresolubles sobre números colosales en cálculos aritméticos elegantes y exactos.`,
    keyTheorems: [
      {
        name: 'Pequeño Teorema de Fermat',
        statement: 'Si $p$ es un número primo y $a$ es un entero tal que $\\gcd(a, p) = 1$, entonces $a^{p-1} \\equiv 1 \\pmod p$. Equivalente: para todo $a \\in \\mathbb{Z}$, $a^p \\equiv a \\pmod p$.',
        importance: 'Permite reducir drásticamente exponentes astronómicos en aritmética modular cuando el módulo es primo.',
      },
      {
        name: 'Teorema de Euler',
        statement: 'Si $m$ es un entero positivo y $\\gcd(a, m) = 1$, entonces $a^{\\phi(m)} \\equiv 1 \\pmod m$, donde $\\phi(m)$ es la función totatriz de Euler.',
        importance: 'Generaliza Fermat para cualquier módulo compuesto, base de algoritmos criptográficos modernos (RSA).',
      },
      {
        name: 'Teorema de Wilson',
        statement: 'Un entero $p > 1$ es primo si y solo si $(p - 1)! \\equiv -1 \\pmod p$.',
        importance: 'Caracterización exacta de los números primos mediante factoriales y emparejamiento de inversos modulares.',
      },
      {
        name: 'Teorema Chino del Resto (TCR)',
        statement: 'Si $m_1, m_2, \\dots, m_k$ son coprimos dos a dos, el sistema $x \\equiv a_i \\pmod{m_i}$ tiene una solución única módulo $M = \\prod m_i$.',
        importance: 'Descompone congruencias sobre módulos compuestos en factores primos independientes.',
      },
      {
        name: 'Identidad de Bézout & Ecuación Diofántica Lineal',
        statement: 'La ecuación $ax + by = c$ tiene soluciones enteras si y solo si $d = \\gcd(a, b)$ divide a $c$. Si $(x_0, y_0)$ es una solución particular, la solución general es $x = x_0 + (b/d)t$ y $y = y_0 - (a/d)t$ con $t \\in \\mathbb{Z}$.',
        importance: 'Resuelve problemas de divisibilidad entera y cálculo de inversos multiplicativos modulares.',
      },
    ],
    solvedExamples: [
      {
        number: 1,
        title: 'Cálculo de las dos últimas cifras de una potencia colosal',
        problemStatement: 'Determine el valor exacto de las dos últimas cifras (decena y unidad) del número entero colosal $7^{2026}$ expresado en el sistema decimal usual.',
        stepByStepProof: `Paso 1: Determinar las dos últimas cifras equivale a hallar el residuo de $7^{2026}$ al dividirse entre 100, es decir, evaluar $7^{2026} \\pmod{100}$.
Paso 2: Comprobamos si la base 7 y el módulo 100 son coprimos: $\\gcd(7, 100) = 1$. Por lo tanto, podemos aplicar el Teorema de Euler.
Paso 3: Calculamos la función totatriz de Euler $\\phi(100)$. Descomponiendo 100 en factores primos: $100 = 2^2 \\times 5^2$.
$\\phi(100) = 100 \\times \\left(1 - \\frac{1}{2}\\right) \\times \\left(1 - \\frac{1}{5}\\right) = 100 \\times \\frac{1}{2} \\times \\frac{4}{5} = 40$.
Paso 4: Por el Teorema de Euler, sabemos que $7^{40} \\equiv 1 \\pmod{100}$.
Paso 5: Reducimos el exponente 2026 módulo 40:
$2026 = 40 \\times 50 + 26 \\implies 2026 \\equiv 26 \\pmod{40}$.
En consecuencia: $7^{2026} = (7^{40})^{50} \\cdot 7^{26} \\equiv 1^{50} \\cdot 7^{26} \\equiv 7^{26} \\pmod{100}$.
Paso 6: Evaluamos potencias sucesivas de $7$ módulo 100:
$7^1 = 7$, $7^2 = 49$, $7^4 = (49)^2 = 2401 \\equiv 1 \\pmod{100}$.
¡Observamos que el orden multiplicativo de 7 módulo 100 es exactamente 4 (ya que $7^4 \\equiv 1 \\pmod{100}$)!
Paso 7: Reducimos 26 módulo 4: $26 = 4 \\times 6 + 2 \\implies 26 \\equiv 2 \\pmod 4$.
Paso 8: Finalmente: $7^{26} \\equiv 7^2 = 49 \\pmod{100}$.
Conclusión: Las dos últimas cifras de $7^{2026}$ son 49.`,
        pedagogicInsight: 'Aunque Euler garantiza periodicidad cada 40, el orden multiplicativo real de un elemento puede ser un divisor estricto de $\\phi(m)$. Siempre conviene verificar potencias pequeñas como $7^4 = 2401 \\equiv 1 \\pmod{100}$.',
      },
      {
        number: 2,
        title: 'Resolución de sistema de congruencias por el Teorema Chino del Resto',
        problemStatement: 'Encuentre el menor entero positivo $x$ que satisface simultáneamente las siguientes tres congruencias lineales: $x \\equiv 2 \\pmod 3$, $x \\equiv 3 \\pmod 5$, $x \\equiv 2 \\pmod 7$.',
        stepByStepProof: `Paso 1: Verificamos que los módulos $m_1 = 3$, $m_2 = 5$, $m_3 = 7$ sean coprimos dos a dos:
$\\gcd(3, 5) = 1$, $\\gcd(3, 7) = 1$, $\\gcd(5, 7) = 1$. El Teorema Chino del Resto garantiza solución única módulo $M = 3 \\times 5 \\times 7 = 105$.
Paso 2: Calculamos los submódulos $M_i = M / m_i$:
$M_1 = 105 / 3 = 35$,
$M_2 = 105 / 5 = 21$,
$M_3 = 105 / 7 = 15$.
Paso 3: Calculamos los inversos multiplicativos $y_i$ tales que $M_i y_i \\equiv 1 \\pmod{m_i}$:
- Para $i = 1$: $35 y_1 \\equiv 1 \\pmod 3 \\implies 2 y_1 \\equiv 1 \\pmod 3 \\implies y_1 \\equiv 2 \\pmod 3$ (ya que $2 \\times 2 = 4 \\equiv 1$).
- Para $i = 2$: $21 y_2 \\equiv 1 \\pmod 5 \\implies 1 y_2 \\equiv 1 \\pmod 5 \\implies y_2 \\equiv 1 \\pmod 5$.
- Para $i = 3$: $15 y_3 \\equiv 1 \\pmod 7 \\implies 1 y_3 \\equiv 1 \\pmod 7 \\implies y_3 \\equiv 1 \\pmod 7$.
Paso 4: Aplicamos la fórmula del TCR:
$x_0 = a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3$
$x_0 = (2)(35)(2) + (3)(21)(1) + (2)(15)(1)$
$x_0 = 140 + 63 + 30 = 233$.
Paso 5: Reducimos 233 módulo 105:
$233 = 2 \\times 105 + 23 \\implies x \\equiv 23 \\pmod{105}$.
Paso 6: Verificación:
$23 = 7 \\times 3 + 2 \\implies 23 \\equiv 2 \\pmod 3$ (Correcto)
$23 = 4 \\times 5 + 3 \\implies 23 \\equiv 3 \\pmod 5$ (Correcto)
$23 = 3 \\times 7 + 2 \\implies 23 \\equiv 2 \\pmod 7$ (Correcto).
El menor entero positivo es 23.`,
        pedagogicInsight: 'El TCR permite desacoplar problemas modulares grandes en pequeños problemas primos donde los inversos son casi inmediatos de inspeccionar.',
      },
      {
        number: 3,
        title: 'Demostración de criterio de divisibilidad por 13 con potencias de 10',
        problemStatement: 'Demuestre formalmente que un número entero $N$ es divisible por 13 si y solo si la suma alternada de sus bloques de tres cifras (de derecha a izquierda) es un múltiplo de 13.',
        stepByStepProof: `Paso 1: Expresamos el número entero $N$ en base 1000 agrupando sus dígitos en bloques de tres en tres:
$N = B_0 + B_1 \\cdot 10^3 + B_2 \\cdot 10^6 + B_3 \\cdot 10^9 + \\dots + B_k \\cdot 10^{3k}$, donde cada $B_j \\in \\{0, 1, \\dots, 999\\}$.
Paso 2: Evaluamos la potencia $10^3 = 1000$ módulo 13 mediante división euclídea:
$1000 = 13 \\times 76 + 12$.
Como $12 \\equiv -1 \\pmod{13}$, se deduce que $10^3 \\equiv -1 \\pmod{13}$.
Paso 3: Aplicamos las propiedades de las congruencias para potencias enteras de $10^3$:
$(10^3)^j \\equiv (-1)^j \\pmod{13}$ para todo entero $j \\ge 0$.
Paso 4: Sustituimos esta equivalencia en la expansión de $N$:
$N \\equiv B_0 + B_1(-1)^1 + B_2(-1)^2 + B_3(-1)^3 + \\dots + B_k(-1)^k \\pmod{13}$
$N \\equiv B_0 - B_1 + B_2 - B_3 + \\dots + (-1)^k B_k \\pmod{13}$.
Paso 5: Definimos $S = \\sum_{j=0}^k (-1)^j B_j$.
Por definición de congruencia, $N \\equiv S \\pmod{13} \\iff 13 \\mid (N - S)$.
Por lo tanto, $13 \\mid N \\iff S \\equiv 0 \\pmod{13} \\iff 13 \\mid S$. Q.E.D.`,
        pedagogicInsight: 'El hecho clave es que $10^3 + 1 = 1001 = 7 \\times 11 \\times 13$. Este criterio de bloques de 3 dígitos alternados funciona idénticamente para divisibilidad entre 7, 11 y 13.',
      },
      {
        number: 4,
        title: 'Resolución de ecuación diofántica lineal por Algoritmo de Euclides',
        problemStatement: 'Determine todas las parejas de números enteros $(x, y) \\in \\mathbb{Z}^2$ que satisfacen la ecuación diofántica lineal $17x + 23y = 1000$. ¿Cuántas de estas soluciones son estrictamente positivas ($x > 0, y > 0$)?',
        stepByStepProof: `Paso 1: Verificamos la existencia de soluciones calculando $\\gcd(17, 23)$.
Como 17 y 23 son números primos distintos, $\\gcd(17, 23) = 1$. Como $1 \\mid 1000$, la ecuación admite infinitas soluciones enteras.
Paso 2: Aplicamos el Algoritmo de Euclides para hallar una combinación lineal de 1:
$23 = 1 \\times 17 + 6 \\implies 6 = 23 - 1(17)$
$17 = 2 \\times 6 + 5 \\implies 5 = 17 - 2(6)$
$6 = 1 \\times 5 + 1 \\implies 1 = 6 - 1(5)$.
Paso 3: Sustituimos hacia atrás para expresar 1 en función de 17 y 23:
$1 = 6 - 1(17 - 2(6)) = 3(6) - 17$
$1 = 3(23 - 17) - 17 = 3(23) - 4(17) = 17(-4) + 23(3)$.
Paso 4: Multiplicamos toda la identidad de Bézout por 1000 para obtener una solución particular $(x_0, y_0)$:
$1000 = 17(-4000) + 23(3000) \\implies x_0 = -4000, \\; y_0 = 3000$.
Paso 5: Determinamos la solución general paramétrica:
$x(t) = x_0 + \\frac{b}{d}t = -4000 + 23t$
$y(t) = y_0 - \\frac{a}{d}t = 3000 - 17t$, con $t \\in \\mathbb{Z}$.
Paso 6: Imponemos la condición de positividad $x > 0$ y $y > 0$:
1) $-4000 + 23t > 0 \\implies 23t > 4000 \\implies t > \\frac{4000}{23} \\approx 173.91 \\implies t \\ge 174$.
2) $3000 - 17t > 0 \\implies 17t < 3000 \\implies t < \\frac{3000}{17} \\approx 176.47 \\implies t \\le 176$.
Paso 7: Los valores enteros posibles para el parámetro $t$ son $t \\in \\{174, 175, 176\\}$.
Evaluando cada uno:
- Si $t = 174$: $x = -4000 + 23(174) = 2$, $y = 3000 - 17(174) = 42$. Verificación: $17(2) + 23(42) = 34 + 966 = 1000$.
- Si $t = 175$: $x = 2 + 23 = 25$, $y = 42 - 17 = 25$. Verificación: $17(25) + 23(25) = 40(25) = 1000$.
- Si $t = 176$: $x = 25 + 23 = 48$, $y = 25 - 17 = 8$. Verificación: $17(48) + 23(8) = 816 + 184 = 1000$.
Existen exactamente 3 soluciones enteras positivas: $(2, 42)$, $(25, 25)$ y $(48, 8)$.`,
        pedagogicInsight: 'El parámetro entero $t$ traduce la infinitud de soluciones al rango finito exigido por restricciones de positividad.',
      },
      {
        number: 5,
        title: 'Demostración constructiva del Teorema de Wilson para primos pequeños',
        problemStatement: 'Demuestre detalladamente la validez del Teorema de Wilson ($(p-1)! \\equiv -1 \\pmod p$) para los casos $p = 7$ y $p = 11$, emparejando cada residuo no nulo con su inverso multiplicativo modular.',
        stepByStepProof: `Paso 1: Enunciado teórico: $(p-1)! = 1 \\cdot 2 \\cdot 3 \\cdots (p-2) \\cdot (p-1)$. En $\\mathbb{Z}/p\\mathbb{Z}$, una ecuación cuadrática $x^2 \\equiv 1 \\pmod p$ equivale a $(x - 1)(x + 1) \\equiv 0 \\pmod p$. Dado que $p$ es primo, los únicos elementos que son sus propios inversos modulares son $x \\equiv 1$ y $x \\equiv p - 1 \\equiv -1 \\pmod p$. Todos los demás $p-3$ elementos se agrupan en pares disjuntos $\\{a, a^{-1}\\}$ cuyo producto es $a \\cdot a^{-1} \\equiv 1 \\pmod p$.
Paso 2: Caso $p = 7$:
Los elementos del conjunto son $\\{1, 2, 3, 4, 5, 6\\}$.
Excluimos los extremos 1 y 6. El conjunto interior es $\\{2, 3, 4, 5\\}$.
Buscamos los inversos modulares módulo 7:
$2 \\times 4 = 8 \\equiv 1 \\pmod 7 \\implies$ el par es $(2, 4)$.
$3 \\times 5 = 15 \\equiv 1 \\pmod 7 \\implies$ el par es $(3, 5)$.
Por tanto:
$6! = 1 \\cdot (2 \\times 4) \\cdot (3 \\times 5) \\cdot 6 \\equiv 1 \\cdot 1 \\cdot 1 \\cdot 6 \\equiv 6 \\equiv -1 \\pmod 7$.
Paso 3: Caso $p = 11$:
Los elementos del factorial son $\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$.
Excluimos los autoinversos 1 y 10. El conjunto interior es $\\{2, 3, 4, 5, 6, 7, 8, 9\\}$.
Emparejamos cada residuo con su inverso modular módulo 11:
$2 \\times 6 = 12 \\equiv 1 \\pmod{11} \\implies (2, 6)$
$3 \\times 4 = 12 \\equiv 1 \\pmod{11} \\implies (3, 4)$
$5 \\times 9 = 45 \\equiv 1 \\pmod{11} \\implies (5, 9)$
$7 \\times 8 = 56 \\equiv 1 \\pmod{11} \\implies (7, 8)$.
Sustituyendo en el producto del factorial:
$10! = 1 \\cdot (2 \\times 6) \\cdot (3 \\times 4) \\cdot (5 \\times 9) \\cdot (7 \\times 8) \\cdot 10$
$10! \\equiv 1 \\cdot (1) \\cdot (1) \\cdot (1) \\cdot (1) \\cdot 10 \\equiv 10 \\equiv -1 \\pmod{11}$. Q.E.D.`,
        pedagogicInsight: 'Esta demostración constructiva ilustra de manera contundente por qué todos los términos intermedios colapsan a 1, dejando únicamente $1 \\times (p-1) \\equiv -1$.',
      },
    ],
    practiceQuestions: [
      OLYMPIC_PROBLEMS_DATA[1], // onm-02
    ],
  },

  // -------------------------------------------------------------------------
  // UNIDAD 2: MATEMÁTICA (ONM) — COMBINATORIA & PRINCIPIO DEL PALOMAR EXTENDIDO
  // -------------------------------------------------------------------------
  {
    id: 'onm-combinatoria-palomar',
    discipline: 'matematica',
    disciplineLabel: 'Matemática (ONM)',
    stage: 'Fase II (Prueba Selectiva)',
    title: 'Combinatoria, Principio del Palomar Extendido & Inclusión-Exclusión',
    substantiveTheory: `La Combinatoria en competencias olímpicas no se restringe al mero conteo de permutaciones o combinaciones elementales, sino que constituye una disciplina rigurosa fundamentada en métodos de existencia no constructiva, partición de conjuntos, grafos extremales e identidades algebraicas combinatorias. El principio de existencia fundamental más celebrado es el Principio del Palomar o Principio de las Casillas (Pigeonhole Principle), formulado explícitamente por Peter Gustav Lejeune Dirichlet en 1834. En su formulación débil, establece que si $n$ objetos (palomas) se distribuyen en $k$ recipientes (casillas) con $n > k$, entonces al menos un recipiente debe albergar necesariamente dos o más objetos.

La versión cuantitativa generalizada o Principio del Palomar Fuerte extiende esta cota con absoluta precisión analítica: si $n$ objetos se colocan en $k$ casillas, al menos una casilla contendrá al menos $\\lceil n / k \\rceil$ objetos, donde $\\lceil x \\rceil$ representa la función techo (el menor entero mayor o igual a $x$). Asimismo, al menos una casilla contendrá a lo sumo $\\lfloor n / k \\rfloor$ objetos. La demostración por contradicción es inmediata: si cada una de las $k$ casillas albergara a lo sumo $\\lceil n/k \\rceil - 1 < n/k$ objetos, la suma total de elementos sobre todas las casillas sería estrictamente menor que $k(n/k) = n$, contradiciendo el hecho de que se distribuyeron exactamente $n$ elementos. En geometría combinatoria y teoría de números, la selección adecuada de las "casillas" (clases de congruencia modular, subregiones métricas o invariantes de paridad) es el paso de ingenio crucial.

Un corolario trascendental del Principio del Palomar en la Teoría de Ramsey es el Teorema de Ramsey para grafos. En su formulación más simple sobre coloración de aristas, el número de Ramsey $R(s, t)$ denota el menor número entero positivo $N$ tal que cualquier coloración de las aristas del grafo completo $K_N$ con dos colores (por ejemplo, rojo y azul) contiene necesariamente un subgrafo completo monocromático $K_s$ en rojo o un $K_t$ en azul. La célebre demostración de que $R(3, 3) = 6$ descansa enteramente en aislar un vértice arbitrario $v$ en $K_6$: como $v$ posee 5 aristas incidentes que se distribuyen en 2 colores, por el Principio del Palomar al menos $\\lceil 5/2 \\rceil = 3$ aristas deben compartir el mismo color, forzando la existencia de un triángulo monocromático.

Para problemas de conteo exacto sobre familias de propiedades superpuestas, la herramienta primordial es el Principio de Inclusión-Exclusión (PIE). Dados $n$ conjuntos finitos $A_1, A_2, \\dots, A_n$ dentro de un conjunto universo $U$, la cardinalidad de la unión viene dada por la suma alternada:
$$\\left| \\bigcup_{i=1}^n A_i \\right| = \\sum_{i=1}^n |A_i| - \\sum_{1 \\le i < j \\le n} |A_i \\cap A_j| + \\sum_{1 \\le i < j < k \\le n} |A_i \\cap A_j \\cap A_k| - \\dots + (-1)^{n-1} |A_1 \\cap A_2 \\cap \\dots \\cap A_n|$$
Equivalentemente, el número de elementos que no pertenecen a ninguno de los conjuntos $A_i$ es $|U| - |\\bigcup A_i| = \\sum_{J \\subseteq \\{1, \\dots, n\\}} (-1)^{|J|} |\\bigcap_{j \\in J} A_j|$. Esta fórmula permite resolver problemas canónicos como el conteo de desarreglos (permutaciones sin puntos fijos, $D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$), el cálculo de funciones sobreyectivas entre conjuntos finitos y el conteo de enteros coprimos con una colección dada de números primos.

Finalmente, el método de Doble Conteo (Double Counting o Argumento de Fubini Combinatorio) consiste en evaluar la cardinalidad de un conjunto de pares ordenados o incidencias de dos formas distintas, estableciendo identidades no triviales. En teoría de grafos, el Lema del Apretón de Manos de Euler establece que $\\sum_{v \\in V} \\deg(v) = 2|E|$, puesto que cada arista incide en exactamente dos vértices. Este principio demuestra que el número de vértices de grado impar en cualquier grafo es siempre un número par, concepto medular en problemas de torneos y relaciones sociales en olimpíadas.`,
    keyTheorems: [
      {
        name: 'Principio del Palomar Fuerte (Dirichlet)',
        statement: 'Al distribuir $n$ objetos en $k$ casillas, al menos una casilla contiene $\\ge \\lceil n/k \\rceil$ objetos y al menos una contiene $\\le \\lfloor n/k \\rfloor$ objetos.',
        importance: 'Garantiza la existencia ineludible de regularidades o repeticiones sin necesidad de construir la configuración explícita.',
      },
      {
        name: 'Principio de Inclusión-Exclusión (PIE)',
        statement: '$|\\bigcup_{i=1}^n A_i| = \\sum_{k=1}^n (-1)^{k-1} \\sum_{1 \\le i_1 < \\dots < i_k \\le n} |A_{i_1} \\cap \\dots \\cap A_{i_k}|$.',
        importance: 'Elimina redundancias de conteo múltiple en conjuntos que se intersectan.',
      },
      {
        name: 'Lema del Apretón de Manos (Euler)',
        statement: 'Para cualquier grafo simple $G = (V, E)$, la suma de los grados de todos sus vértices es exactamente el doble del número de aristas: $\\sum_{v \\in V} \\deg(v) = 2|E|$.',
        importance: 'Demuestra paridad en grados y restringe configuraciones de adyacencia.',
      },
      {
        name: 'Fórmula de Desarreglos (Derangements $D_n$)',
        statement: '$D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!} = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right)$.',
        importance: 'Conteo de permutaciones de tamaño $n$ donde ningún elemento permanece en su posición original.',
      },
      {
        name: 'Teorema de Ramsey $R(3,3) = 6$',
        statement: 'En cualquier grafo de 6 vértices cuyas aristas se colorean con 2 colores, existe siempre al menos un triángulo monocromático.',
        importance: 'Punto de partida de la Teoría de Ramsey: el desorden completo es imposible.',
      },
    ],
    solvedExamples: [
      {
        number: 1,
        title: 'Existencia de personas con igual número de amigos en una reunión',
        problemStatement: 'Demuestre que en cualquier reunión con $n \\ge 2$ personas, siempre existen al menos dos personas que tienen exactamente la misma cantidad de amigos presentes en dicha reunión (asumiendo que la amistad es simétrica y nadie es amigo de sí mismo).',
        stepByStepProof: `Paso 1: Modelamos la reunión como un grafo simple no dirigido $G = (V, E)$, donde los vértices $V = \\{1, 2, \\dots, n\\}$ representan a las personas y las aristas representan relaciones mutuas de amistad. El número de amigos de la persona $i$ es el grado del vértice $\\deg(v_i)$.
Paso 2: Como nadie es amigo de sí mismo y no hay aristas múltiples, el grado de cada vértice satisface $0 \\le \\deg(v_i) \\le n - 1$. Hay $n$ posibles valores de grado a priori: $\\{0, 1, 2, \\dots, n-1\\}$.
Paso 3: Analizamos la coexistencia de los grados extremos 0 y $n-1$:
- Si existe una persona con grado 0, dicha persona no tiene amigos en la reunión.
- Si existiera simultáneamente una persona con grado $n-1$, esa persona sería amiga de todas las demás $n-1$ personas, incluyendo a la persona con grado 0.
- Esto es una contradicción lógica directa.
Paso 4: Por lo tanto, los valores 0 y $n-1$ no pueden ocurrir simultáneamente en el mismo grafo:
- Caso A: Si nadie tiene grado $n-1$, los posibles grados pertenecen al conjunto $\\{0, 1, 2, \\dots, n-2\\}$, el cual contiene $n-1$ valores posibles.
- Caso B: Si nadie tiene grado 0, los posibles grados pertenecen al conjunto $\\{1, 2, \\dots, n-1\\}$, el cual contiene $n-1$ valores posibles.
Paso 5: En ambos casos, tenemos $n$ vértices (palomas) cuyos grados deben pertenecer a un conjunto de a lo sumo $n-1$ valores posibles (casillas).
Paso 6: Por el Principio del Palomar de Dirichlet, como $n > n-1$, al menos dos vértices deben compartir exactamente el mismo grado. Q.E.D.`,
        pedagogicInsight: 'La clave del problema no es el conteo directo, sino la incompatibilidad lógica entre el grado mínimo y el grado máximo.',
      },
      {
        number: 2,
        title: 'Triángulos monocromáticos en grafo completo K6 (Ramsey R(3,3)=6)',
        problemStatement: 'Se colorean todas las aristas de un grafo completo de 6 vértices ($K_6$) usando exclusivamente dos colores: rojo o azul. Demuestre formalmente que sin importar cómo se elija la coloración, siempre se forma al menos un triángulo con sus tres lados del mismo color (monocromático).',
        stepByStepProof: `Paso 1: Sea $V = \\{v_1, v_2, v_3, v_4, v_5, v_6\\}$ el conjunto de vértices de $K_6$. Fijamos un vértice cualquiera, por ejemplo $v_1$.
Paso 2: En $K_6$, cada vértice está conectado con los otros 5 vértices mediante exactamente 5 aristas: $(v_1, v_2), (v_1, v_3), (v_1, v_4), (v_1, v_5), (v_1, v_6)$.
Paso 3: Estas 5 aristas (palomas) están coloreadas con 2 colores posibles: rojo o azul (casillas).
Por el Principio del Palomar Fuerte:
$\\lceil 5 / 2 \\rceil = 3$.
Por lo tanto, al menos 3 de las 5 aristas incidentes en $v_1$ tienen que ser del mismo color.
Paso 4: Sin pérdida de generalidad (por simetría del problema), supongamos que esas 3 aristas son de color rojo, y supongamos que conectan con los vértices $v_2, v_3, v_4$. Es decir, las aristas $(v_1, v_2)$, $(v_1, v_3)$ y $(v_1, v_4)$ son todas rojas.
Paso 5: Analizamos las aristas entre los vértices $\{v_2, v_3, v_4\}$:
- Subcaso 5.1: Si alguna de las aristas $(v_2, v_3)$, $(v_2, v_4)$ o $(v_3, v_4)$ es de color rojo, entonces dicha arista, junto con las dos aristas rojas que conectan sus extremos con $v_1$, forma un triángulo totalmente rojo. Por ejemplo, si $(v_2, v_3)$ es roja, el triángulo $(v_1, v_2, v_3)$ es rojo.
- Subcaso 5.2: Si ninguna de esas tres aristas es de color rojo, entonces necesariamente las tres aristas $(v_2, v_3)$, $(v_2, v_4)$ y $(v_3, v_4)$ deben ser de color azul. En tal caso, el triángulo $(v_2, v_3, v_4)$ es totalmente azul.
Paso 6: En cualquiera de los dos subcasos posibles, existe de manera inevitable un triángulo monocromático. Q.E.D.`,
        pedagogicInsight: 'Este es el resultado fundamental de la Teoría de Ramsey: $R(3,3) = 6$. La aplicación del palomar al vértice local se propaga forzando la estructura global.',
      },
      {
        number: 3,
        title: 'Deducción del número de desarreglos (Derangements) con Inclusión-Exclusión',
        problemStatement: 'Cuatro estudiantes entregan sus gorras idénticas al entrar al salón y al salir eligen una gorra al azar. Calcule analíticamente la probabilidad de que ninguno reciba su propia gorra, derivando primero la fórmula de desarreglos $D_4$ mediante el Principio de Inclusión-Exclusión.',
        stepByStepProof: `Paso 1: Sea $S_n$ el conjunto de todas las $n!$ permutaciones de los elementos $\\{1, 2, \\dots, n\\}$. Aquí $n = 4$, por lo que $|S_4| = 4! = 24$.
Paso 2: Definimos $A_i$ como el conjunto de permutaciones donde el elemento $i$ permanece en su posición original (punto fijo, es decir, $\\pi(i) = i$), para $i \\in \\{1, 2, 3, 4\\}$.
Paso 3: Un desarreglo es una permutación que no tiene ningún punto fijo. Su cantidad viene dada por:
$D_4 = |S_4 \\setminus (A_1 \\cup A_2 \\cup A_3 \\cup A_4)| = |S_4| - |A_1 \\cup A_2 \\cup A_3 \\cup A_4|$.
Paso 4: Aplicamos el Principio de Inclusión-Exclusión para calcular $|\\bigcup_{i=1}^4 A_i|$:
- Cardinalidad individual: Fijar 1 elemento deja $(4-1)! = 3! = 6$ formas de ordenar los 3 restantes.
$\\sum_{i=1}^4 |A_i| = \\binom{4}{1} 3! = 4 \\times 6 = 24$.
- Intersecciones dobles: Fijar 2 elementos deja $(4-2)! = 2! = 2$ formas.
$\\sum_{1 \\le i < j \\le 4} |A_i \\cap A_j| = \\binom{4}{2} 2! = 6 \\times 2 = 12$.
- Intersecciones triples: Fijar 3 elementos fija forzosamente el cuarto: $(4-3)! = 1! = 1$ forma.
$\\sum_{1 \\le i < j < k \\le 4} |A_i \\cap A_j \\cap A_k| = \\binom{4}{3} 1! = 4 \\times 1 = 4$.
- Intersección cuádruple: Fijar los 4 elementos: $(4-4)! = 0! = 1$ forma.
$|A_1 \\cap A_2 \\cap A_3 \\cap A_4| = \\binom{4}{4} 0! = 1 \\times 1 = 1$.
Paso 5: Calculamos la unión:
$|A_1 \\cup A_2 \\cup A_3 \\cup A_4| = 24 - 12 + 4 - 1 = 15$.
Paso 6: Calculamos el número de desarreglos:
$D_4 = 24 - 15 = 9$.
Paso 7: La probabilidad solicitada es:
$P = \\frac{D_4}{4!} = \\frac{9}{24} = \\frac{3}{8} = 0.375$ ($37.5\\%$).`,
        pedagogicInsight: 'Nótese que $9/24 = 0.375$, lo cual es sumamente cercano a $1/e \\approx 0.367879$. A medida que $n \\to \\infty$, la probabilidad de desarreglo converge rigurosamente a $1/e$.',
      },
      {
        number: 4,
        title: 'Distribución de 100 pelotas en 9 cajas con paridades impares',
        problemStatement: 'Demuestre que si se colocan 100 pelotas idénticas en 9 cajas distinguibles de modo que cada caja contenga al menos una pelota, es imposible que las 9 cajas contengan simultáneamente una cantidad impar de pelotas.',
        stepByStepProof: `Paso 1: Sean $c_1, c_2, \\dots, c_9$ las cantidades enteras de pelotas asignadas a cada una de las 9 cajas.
Por las condiciones del problema:
$\\sum_{i=1}^9 c_i = c_1 + c_2 + \\dots + c_9 = 100$, con $c_i \\ge 1$ para todo $i \\in \\{1, \\dots, 9\\}$.
Paso 2: Supongamos por contradicción que las 9 cajas contienen una cantidad impar de pelotas.
Esto significa que para todo $i \\in \\{1, 2, \\dots, 9\\}$, se cumple que $c_i \\equiv 1 \\pmod 2$.
Paso 3: Sumamos las congruencias módulo 2 sobre las 9 variables:
$\\sum_{i=1}^9 c_i \\equiv \\sum_{i=1}^9 1 = 9 \\pmod 2$.
Paso 4: Evaluamos el lado derecho:
$9 = 2(4) + 1 \\implies 9 \\equiv 1 \\pmod 2$.
Por lo tanto, la suma de 9 números impares debe ser necesariamente un número impar.
Paso 5: Sin embargo, el enunciado impone que la suma total es exactamente 100:
$100 = 2(50) + 0 \\implies 100 \\equiv 0 \\pmod 2$ (un número par).
Paso 6: Igualando ambas conclusiones obtenemos $0 \\equiv 1 \\pmod 2$, lo cual es una contradicción absurda.
Conclusión: Es estrictamente imposible que todas las 9 cajas contengan simultáneamente una cantidad impar de pelotas. Al menos una caja debe contener un número par de pelotas. Q.E.D.`,
        pedagogicInsight: 'Los argumentos de invariante de paridad combinados con congruencias modulares resuelven instantáneamente problemas combinatorios que parecen complejos.',
      },
      {
        number: 5,
        title: 'Existencia de divisibilidad en subconjuntos de tamaño n+1',
        problemStatement: 'Demuestre que de cualquier subconjunto $S \\subset \\{1, 2, 3, \\dots, 2n\\}$ con $|S| = n + 1$ elementos, siempre existen al menos dos elementos $a, b \\in S$ tales que uno divide al otro ($a \\mid b$).',
        stepByStepProof: `Paso 1: Todo número entero positivo $x$ puede factorizarse de manera única como el producto de una potencia no negativa de 2 y un número impar $q$:
$x = 2^k \\cdot q$, donde $k \\ge 0$ y $q$ es un entero impar positivo.
Paso 2: Consideramos los posibles valores del factor impar $q$ para números en el rango $1 \\le x \\le 2n$.
El factor impar $q$ debe ser un número impar en el intervalo $[1, 2n]$.
Los números impares en este intervalo son $\\{1, 3, 5, \\dots, 2n-1\\}$.
Paso 3: Contamos cuántos números impares hay en este conjunto:
La cantidad exacta es $\\frac{2n}{2} = n$ números impares posibles.
Paso 4: Definimos nuestras "casillas": existen exactamente $n$ casillas, etiquetadas por los $n$ números impares $\\{1, 3, 5, \\dots, 2n-1\\}$.
Asignamos cada elemento $x \\in S$ a la casilla correspondiente a su parte impar $q$.
Paso 5: El subconjunto $S$ contiene por hipótesis $n + 1$ números (palomas).
Paso 6: Como hay $n + 1$ palomas y solo $n$ casillas, por el Principio del Palomar de Dirichlet, existen al menos dos elementos distintos $a, b \\in S$ que pertenecen a la misma casilla, es decir, que comparten la misma parte impar $q$.
Paso 7: Sean $a = 2^j \\cdot q$ y $b = 2^m \\cdot q$.
Como $a \\ne b$, los exponentes deben ser distintos: $j \\ne m$.
Sin pérdida de generalidad, supongamos $j < m$.
Paso 8: Dividimos $b$ entre $a$:
$\\frac{b}{a} = \\frac{2^m \\cdot q}{2^j \\cdot q} = 2^{m-j}$.
Dado que $m - j \\ge 1$, $2^{m-j}$ es un número entero.
Por lo tanto, $a$ divide exactamente a $b$ ($a \\mid b$). Q.E.D.`,
        pedagogicInsight: 'Esta célebre demostración de Paul Erdős ejemplifica la genialidad de construir casillas mediante la parte impar libre de potencias de 2.',
      },
    ],
    practiceQuestions: [
      OLYMPIC_PROBLEMS_DATA[0], // onm-01
    ],
  },

  // -------------------------------------------------------------------------
  // UNIDAD 3: FÍSICA (ONF) — MECÁNICA ANALÍTICA DE ROTACIÓN & MOMENTO ANGULAR
  // -------------------------------------------------------------------------
  {
    id: 'onf-rotacion-momento',
    discipline: 'fisica',
    disciplineLabel: 'Física (ONF)',
    stage: 'Fase III (Academia Sabatina)',
    title: 'Mecánica Analítica de Rotación, Tensor de Inercia & Momento Angular',
    substantiveTheory: `La dinámica de cuerpos rígidos y la mecánica analítica de rotación representan una de las áreas más profundas y exigentes de la Olimpiada Nacional de Física (ONF). A diferencia de la mecánica de partículas puntuales, un cuerpo rígido posee extensión geométrica continua y grados de libertad rotacionales. La distribución espacial de la masa respecto a un eje de rotación queda cuantificada por el Momento de Inercia $I = \\int r_\\perp^2 \\, dm$, donde $r_\\perp$ representa la distancia perpendicular infinitesimal desde el elemento de masa $dm$ hasta el eje instantáneo de giro. En tres dimensiones espaciales, esta relación se generaliza como un tensor simétrico de segundo rango, el Tensor de Inercia $\\mathbf{I}$, cuya relación con la velocidad angular $\\vec{\\omega}$ y el momento angular $\\vec{L}$ viene dada por el producto matricial $\\vec{L} = \\mathbf{I} \\vec{\\omega}$.

Para traslaciones de ejes paralelos, el Teorema de los Ejes Paralelos o Teorema de Steiner establece que si el momento de inercia de un cuerpo de masa total $M$ respecto a un eje que pasa por su centro de masa es $I_{cm}$, el momento de inercia $I$ respecto a cualquier otro eje paralelo situado a una distancia perpendicular $d$ es $I = I_{cm} + M d^2$. Este teorema es indispensable para analizar oscilaciones de péndulos físicos y colisiones contra pivotes fijos.

En el movimiento plano general de un cuerpo rígido simétrico (como un cilindro, esfera o aro), la cinemática se descompone limpiamente en el movimiento de traslación del centro de masa y la rotación respecto al centro de masa. Cuando un cuerpo rueda sin deslizar sobre una superficie rugosa (condición de rodadura pura), el punto de contacto instantáneo entre el cuerpo y la superficie tiene velocidad nula: $\\vec{v}_{contacto} = \\vec{v}_{cm} + \\vec{\\omega} \\times \\vec{r} = \\vec{0}$. De aquí surge la ligadura cinemática fundamental $v_{cm} = \\omega R$ y su derivada temporal para la aceleración $a_{cm} = \\alpha R$, donde $\\alpha = d\\omega/dt$ es la aceleración angular. Dado que el punto de contacto no desliza, la fuerza de fricción estática $f_s$ no realiza trabajo disipativo ($W_{f} = 0$), preservando la energía mecánica total del sistema.

La energía cinética total de un cuerpo que rueda sin deslizar se expresa mediante la partición generalizada de König:
$$K_{total} = K_{traslacion} + K_{rotacion} = \\frac{1}{2} M v_{cm}^2 + \\frac{1}{2} I_{cm} \\omega^2 = \\frac{1}{2} M v_{cm}^2 \\left(1 + \\frac{I_{cm}}{M R^2}\\right) = \\frac{1}{2} M v_{cm}^2 (1 + \\beta)$$
El coeficiente adimensional de inercia $\\beta = \\frac{I_{cm}}{M R^2}$ determina exclusivamente la aceleración lineal de descenso por un plano inclinado: a menor $\\beta$, menor fracción de energía potencial gravitacional se transfiere al modo rotacional y mayor rapidez de traslación se alcanza, haciendo que una esfera sólida ($\\beta = 2/5 = 0.4$) siempre aventaje a un cilindro sólido ($\\beta = 1/2 = 0.5$) y a un aro hueco ($\\beta = 1.0$), con total independencia de sus masas o radios individuales.

El principio de conservación del momento angular constituye uno de los invariantes fundamentales de la física teórica (consecuencia de la isotropía espacial según el Teorema de Noether). La segunda ley de Newton para la rotación establece que el torque externo neto respecto a un origen inercial $O$ es la derivada temporal del momento angular:
$$\\vec{\\tau}_{net, ext} = \\sum (\\vec{r}_i \\times \\vec{F}_i) = \\frac{d\\vec{L}}{dt}$$
Si $\\vec{\\tau}_{net, ext} = \\vec{0}$, el vector momento angular total $\\vec{L}$ se conserva constante en magnitud, dirección y sentido. En fenómenos de precesión giroscópica estacionaria de un trompo simétrico que gira rápidamente a velocidad $\\omega_s$ sobre su eje con momento de inercia $I_s$, el torque gravitacional $\\vec{\\tau} = \\vec{r}_{cm} \\times M\\vec{g}$ es perpendicular al vector momento angular $\\vec{L} \\approx I_s \\vec{\\omega}_s$. Este torque no altera la magnitud de $\\vec{L}$, sino que provoca la rotación uniforme del vector en el plano horizontal a una velocidad angular de precesión $\\Omega_p = \\frac{\\tau}{L} = \\frac{M g r_{cm}}{I_s \\omega_s}$, fenómeno cardinal en giróscopos aeroespaciales e instrumentación científica.`,
    keyTheorems: [
      {
        name: 'Teorema de Steiner (Ejes Paralelos)',
        statement: '$I = I_{cm} + M d^2$, donde $d$ es la distancia perpendicular entre el eje que pasa por el centro de masa y el nuevo eje paralelo.',
        importance: 'Permite calcular momentos de inercia respecto a cualquier eje arbitrario conociendo solo el centro de masa.',
      },
      {
        name: 'Teorema de König para la Energía Cinética',
        statement: '$K_{total} = \\frac{1}{2} M v_{cm}^2 + \\frac{1}{2} I_{cm} \\omega^2$.',
        importance: 'Desacopla el movimiento macroscópico de traslación del movimiento intrínseco de rotación.',
      },
      {
        name: 'Conservación del Momento Angular',
        statement: 'Si $\\vec{\\tau}_{ext} = \\frac{d\\vec{L}}{dt} = \\vec{0}$, entonces $\\vec{L} = \\text{constante}$. Para cuerpo rígido con eje fijo de simetría: $I_1 \\omega_1 = I_2 \\omega_2$.',
        importance: 'Predice dinámicas complejas donde la distribución interna de masa cambia con el tiempo.',
      },
      {
        name: 'Condición de Rodadura Pura sin Deslizamiento',
        statement: '$v_{cm} = \\omega R \\quad \\text{y} \\quad a_{cm} = \\alpha R$. El punto de contacto instantáneo tiene velocidad cero respecto al suelo.',
        importance: 'Garantiza que la fricción estática no disipe energía mecánica ($W_f = 0$).',
      },
      {
        name: 'Precesión Giroscópica Estacionaria',
        statement: '$\\Omega_p = \\frac{\\tau_{ext}}{L} = \\frac{M g r_{cm}}{I_s \\omega_s}$, válida para trompo de giro rápido ($\\omega_s \\gg \\Omega_p$).',
        importance: 'Explica la estabilidad giroscópica de satélites y proyectiles balísticos en rotación.',
      },
    ],
    solvedExamples: [
      {
        number: 1,
        title: 'Carrera analítica en plano inclinado: Esfera sólida vs Esfera hueca vs Cilindro',
        problemStatement: 'Tres cuerpos homogéneos de igual masa $M$ e igual radio exterior $R$ (una esfera sólida con $I_1 = \\frac{2}{5}MR^2$, un cilindro sólido con $I_2 = \\frac{1}{2}MR^2$ y una esfera hueca de pared delgada con $I_3 = \\frac{2}{3}MR^2$) se liberan simultáneamente desde el reposo en la cima de un plano inclinado de ángulo $\\theta$ y longitud $L$. Calcule la aceleración lineal de cada cuerpo y determine en qué orden cruzan la meta.',
        stepByStepProof: `Paso 1: Aplicamos dinámica de Newton tanto para traslación como para rotación en cada cuerpo.
Fuerzas en la dirección paralela al plano:
$M g \\sin\\theta - f_s = M a_{cm}$, donde $f_s$ es la fuerza de fricción estática.
Paso 2: Torque neto respecto al centro de masa:
$\\tau_{cm} = f_s R = I_{cm} \\alpha$.
Paso 3: Condición de rodadura pura sin deslizamiento: $\\alpha = a_{cm} / R$.
Sustituimos $\\alpha$: $f_s R = I_{cm} \\frac{a_{cm}}{R} \\implies f_s = I_{cm} \\frac{a_{cm}}{R^2} = \\beta M a_{cm}$, donde $\\beta = \\frac{I_{cm}}{MR^2}$.
Paso 4: Sustituimos $f_s$ en la ecuación de traslación:
$M g \\sin\\theta - \\beta M a_{cm} = M a_{cm} \\implies M g \\sin\\theta = M a_{cm}(1 + \\beta)$.
Despejamos la aceleración lineal:
$a_{cm} = \\frac{g \\sin\\theta}{1 + \\beta}$.
Paso 5: Evaluamos $\\beta$ para cada geometría:
1) Esfera sólida: $\\beta_1 = 2/5 = 0.4 \\implies a_1 = \\frac{g \\sin\\theta}{1 + 0.4} = \\frac{5}{7} g \\sin\\theta \\approx 0.714 \\, g \\sin\\theta$.
2) Cilindro sólido: $\\beta_2 = 1/2 = 0.5 \\implies a_2 = \\frac{g \\sin\\theta}{1 + 0.5} = \\frac{2}{3} g \\sin\\theta \\approx 0.667 \\, g \\sin\\theta$.
3) Esfera hueca: $\\beta_3 = 2/3 \\approx 0.667 \\implies a_3 = \\frac{g \\sin\\theta}{1 + 2/3} = \\frac{3}{5} g \\sin\\theta = 0.600 \\, g \\sin\\theta$.
Paso 6: Comparación de aceleraciones:
$a_1 > a_2 > a_3$.
Paso 7: Como la distancia recorrida desde el reposo es $L = \\frac{1}{2} a t^2$, el tiempo de llegada es $t = \\sqrt{2L / a}$.
A mayor aceleración constante, menor tiempo de descenso.
Orden de llegada: 1.º Esfera sólida, 2.º Cilindro sólido, 3.º Esfera hueca.`,
        pedagogicInsight: 'La masa $M$ y el radio $R$ se cancelan por completo. La cinemática depende únicamente de la distribución geométrica de masa $\\beta$.',
      },
      {
        number: 2,
        title: 'Péndulo físico y centro de oscilación conjugado con Teorema de Steiner',
        problemStatement: 'Una varilla delgada y uniforme de longitud $L$ y masa $M$ oscila como un péndulo físico suspendida de un extremo mediante un pivote sin fricción. Calcule su período de oscilación para pequeñas amplitudes y determine la longitud del péndulo simple equivalente (centro de oscilación).',
        stepByStepProof: `Paso 1: Identificamos el momento de inercia respecto al centro de masa de una varilla delgada:
$I_{cm} = \\frac{1}{12} M L^2$.
Paso 2: Aplicamos el Teorema de Steiner para calcular el momento de inercia respecto al pivote extremo $P$. La distancia del pivote al centro de masa es $d = L/2$:
$I_P = I_{cm} + M d^2 = \\frac{1}{12} M L^2 + M \\left(\\frac{L}{2}\\right)^2 = \\frac{1}{12} M L^2 + \\frac{1}{4} M L^2 = \\frac{1 + 3}{12} M L^2 = \\frac{1}{3} M L^2$.
Paso 3: Ecuación de movimiento del péndulo físico respecto al pivote:
$\\tau_P = - M g d \\sin\\theta = I_P \\frac{d^2\\theta}{dt^2}$.
Paso 4: Para pequeñas amplitudes (aproximación de ángulo pequeño $\\sin\\theta \\approx \\theta$ en radianes):
$I_P \\ddot{\\theta} + M g \\left(\\frac{L}{2}\\right) \\theta = 0 \\implies \\ddot{\\theta} + \\frac{M g (L/2)}{I_P} \\theta = 0$.
Paso 5: Sustituimos $I_P = \\frac{1}{3} M L^2$:
$\\omega^2 = \\frac{M g (L/2)}{\\frac{1}{3} M L^2} = \\frac{g/2}{L/3} = \\frac{3g}{2L}$.
Paso 6: Calculamos el período de oscilación $T$:
$T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{2L}{3g}}$.
Paso 7: Determinamos la longitud del péndulo simple equivalente $L_{eq}$. Para un péndulo simple, $T = 2\\pi \\sqrt{L_{eq}/g}$.
Igualando períodos:
$L_{eq} = \\frac{2}{3} L$.
El centro de oscilación se ubica a una distancia de $\\frac{2}{3} L$ desde el pivote (también conocido como el "centro de percusión" en bates de béisbol).`,
        pedagogicInsight: 'El centro de oscilación o de percusión es el punto donde un impacto no produce fuerza de reacción impulsiva sobre el pivote de soporte.',
      },
      {
        number: 3,
        title: 'Colisión inelástica de proyectil con barra pivotada (Conservación de L)',
        problemStatement: 'Una barra homogénea de masa $M = 3\\,\\text{kg}$ y longitud $L = 1\\,\\text{m}$ cuelga verticalmente en reposo unida a un pivote fijo sin fricción en su extremo superior. Un proyectil de masa $m = 0.1\\,\\text{kg}$ que viaja horizontalmente a $v_0 = 100\\,\\text{m/s}$ impacta contra el extremo inferior de la barra y queda incrustado en ella. Calcule la velocidad angular $\\omega$ del sistema inmediatamente después del impacto.',
        stepByStepProof: `Paso 1: Analizamos las fuerzas externas durante el impacto infinitesimal: el pivote ejerce una fuerza de reacción impulsiva horizontal desconocida. Por lo tanto, el momento lineal $\\vec{p}$ NO se conserva.
Paso 2: Sin embargo, el torque ejercido por la fuerza del pivote respecto al propio punto de pivote $O$ es nulo (su brazo de palanca es cero: $\\vec{r} = \\vec{0}$). Como la gravedad no produce torque impulsivo durante el tiempo infinitesimal de choque $\\Delta t \\to 0$, el momento angular respecto al pivote $O$ se conserva rigurosamente:
$L_{antes} = L_{despues}$.
Paso 3: Momento angular inicial respecto a $O$:
Únicamente el proyectil se mueve. Su línea de acción pasa a una distancia perpendicular $L$ del pivote:
$L_{antes} = m v_0 L$.
Paso 4: Momento de inercia total del sistema después del impacto (barra + masa puntual incrustada en el extremo a distancia $L$):
$I_{total} = I_{barra} + I_{proyectil} = \\frac{1}{3} M L^2 + m L^2 = \\left(\\frac{M}{3} + m\\right) L^2$.
Paso 5: Momento angular final respecto a $O$:
$L_{despues} = I_{total} \\omega$.
Paso 6: Igualamos momentos angulares y despejamos $\\omega$:
$m v_0 L = \\left(\\frac{M}{3} + m\\right) L^2 \\omega \\implies \\omega = \\frac{m v_0}{\\left(\\frac{M}{3} + m\\right) L}$.
Paso 7: Sustituimos los valores numéricos:
$m = 0.1\\,\\text{kg}$, $v_0 = 100\\,\\text{m/s}$, $M = 3\\,\\text{kg}$, $L = 1\\,\\text{m}$.
$\\frac{M}{3} = \\frac{3}{3} = 1.0\\,\\text{kg}$.
$\\frac{M}{3} + m = 1.0 + 0.1 = 1.1\\,\\text{kg}$.
$\\omega = \\frac{0.1 \\times 100}{1.1 \\times 1} = \\frac{10}{1.1} \\approx 9.09\\,\\text{rad/s}$.`,
        pedagogicInsight: 'En colisiones contra cuerpos pivotados, la conservación del momento lineal falla por el impulso del pivote, pero el momento angular respecto al pivote es la herramienta analítica exacta.',
      },
      {
        number: 4,
        title: 'Precesión giroscópica uniforme de un trompo simétrico',
        problemStatement: 'Un trompo simétrico con masa $M = 0.5\\,\\text{kg}$ gira rápidamente sobre su eje de simetría con velocidad angular $\\omega_s = 300\\,\\text{rad/s}$. Su momento de inercia axial es $I_s = 2.0 \\times 10^{-3}\\,\\text{kg}\\cdot\\text{m}^2$. El centro de masa se encuentra a una distancia $r_{cm} = 4.0\\,\\text{cm}$ del punto de apoyo y el eje forma un ángulo $\\theta = 30^\\circ$ con la vertical. Calcule la rapidez angular de precesión $\\Omega_p$ y demuestre que es independiente del ángulo de inclinación $\\theta$.',
        stepByStepProof: `Paso 1: Identificamos el vector momento angular propio (de spin) $\\vec{L}_s$ a lo largo del eje del trompo:
Su magnitud es $L_s = I_s \\omega_s$.
Paso 2: Calculamos el torque gravitacional respecto al punto de apoyo en el suelo $O$:
$\\vec{\\tau} = \\vec{r}_{cm} \\times M\\vec{g}$.
La magnitud del torque viene dada por:
$\\tau = M g r_{cm} \\sin\\theta$, dirigido perpendicularmente al plano vertical que contiene al eje del trompo (tangente a la circunferencia de precesión).
Paso 3: Analizamos la variación infinitesimal del momento angular en un intervalo de tiempo $dt$:
$d\\vec{L} = \\vec{\\tau} dt \\implies |d\\vec{L}| = \\tau dt$.
Paso 4: La componente horizontal del momento angular es $L_h = L_s \\sin\\theta$.
Durante el tiempo $dt$, el vector momento angular describe un ángulo azimutal $d\\phi$ en el plano horizontal:
$|d\\vec{L}| = L_h d\\phi = (L_s \\sin\\theta) d\\phi$.
Paso 5: Igualamos ambas expresiones para $|d\\vec{L}|$:
$\\tau dt = (L_s \\sin\\theta) d\\phi \\implies (M g r_{cm} \\sin\\theta) dt = (I_s \\omega_s \\sin\\theta) d\\phi$.
Paso 6: Observamos que el término $\\sin\\theta$ se cancela a ambos lados de la ecuación (si $\\sin\\theta \\ne 0$):
$M g r_{cm} dt = I_s \\omega_s d\\phi \\implies \\Omega_p = \\frac{d\\phi}{dt} = \\frac{M g r_{cm}}{I_s \\omega_s}$.
Paso 7: Sustituimos los valores numéricos:
$M = 0.5\\,\\text{kg}$, $g = 9.8\\,\\text{m/s}^2$, $r_{cm} = 0.04\\,\\text{m}$, $I_s = 2.0 \\times 10^{-3}\\,\\text{kg}\\cdot\\text{m}^2$, $\\omega_s = 300\\,\\text{rad/s}$.
Numerador: $0.5 \\times 9.8 \\times 0.04 = 0.196\\,\\text{N}\\cdot\\text{m}$.
Denominador: $2.0 \\times 10^{-3} \\times 300 = 0.600\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}$.
$\\Omega_p = \\frac{0.196}{0.600} \\approx 0.327\\,\\text{rad/s}$ (aproximadamente una vuelta cada 19.2 segundos).`,
        pedagogicInsight: 'La cancelación de $\\sin\\theta$ demuestra que la velocidad de precesión estacionaria no depende del ángulo de inclinación del trompo, siempre que la aproximación giroscópica rápida $\\omega_s \\gg \\Omega_p$ se cumpla.',
      },
      {
        number: 5,
        title: 'Conservación de L en patinador y cálculo del trabajo muscular realizado',
        problemStatement: 'Un patinador sobre hielo gira inicialmente con los brazos extendidos a una frecuencia de $\\omega_1 = 2\\,\\text{rev/s}$ con un momento de inercia $I_1 = 3.6\\,\\text{kg}\\cdot\\text{m}^2$. Al retraer los brazos hacia el pecho, su momento de inercia se reduce a $I_2 = 1.2\\,\\text{kg}\\cdot\\text{m}^2$. Calcule su nueva frecuencia angular $\\omega_2$ y determine el trabajo muscular neto realizado por el patinador durante la maniobra.',
        stepByStepProof: `Paso 1: Dado que el hielo no ejerce torque apreciable respecto al eje vertical de giro (fricción despreciable), el torque externo neto es cero: $\\tau_{ext} = 0$. Por lo tanto, el momento angular respecto al eje vertical se conserva:
$L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2$.
Paso 2: Despejamos la velocidad angular final $\\omega_2$:
$\\omega_2 = \\left(\\frac{I_1}{I_2}\\right) \\omega_1 = \\left(\\frac{3.6}{1.2}\\right) (2\\,\\text{rev/s}) = 3 \\times 2 = 6\\,\\text{rev/s}$.
En radianes por segundo:
$\\omega_1 = 2 \\times 2\\pi = 4\\pi\\,\\text{rad/s} \\approx 12.57\\,\\text{rad/s}$,
$\\omega_2 = 6 \\times 2\\pi = 12\\pi\\,\\text{rad/s} \\approx 37.70\\,\\text{rad/s}$.
Paso 3: Calculamos la energía cinética rotacional inicial $K_1$:
$K_1 = \\frac{1}{2} I_1 \\omega_1^2 = \\frac{1}{2} (3.6) (4\\pi)^2 = 1.8 \\times 16\\pi^2 = 28.8\\pi^2 \\approx 284.24\\,\\text{J}$.
Paso 4: Calculamos la energía cinética rotacional final $K_2$:
$K_2 = \\frac{1}{2} I_2 \\omega_2^2 = \\frac{1}{2} (1.2) (12\\pi)^2 = 0.6 \\times 144\\pi^2 = 86.4\\pi^2 \\approx 852.73\\,\\text{J}$.
Paso 5: Por el Teorema del Trabajo y la Energía:
$W_{muscular} = \\Delta K = K_2 - K_1 = 86.4\\pi^2 - 28.8\\pi^2 = 57.6\\pi^2\\,\\text{J} \\approx 568.49\\,\\text{J}$.
Conclusión: La energía cinética se triplicó ($K_2 = 3 K_1$) debido a los $+568.5\\,\\text{J}$ de trabajo mecánico positivo realizado por los músculos del patinador contra la fuerza centrífuga aparente para acercar sus brazos al eje de rotación.`,
        pedagogicInsight: 'Este problema refuta la falacia común de que la energía cinética siempre se conserva: el momento angular se conserva, pero la energía cinética aumenta por la conversión de energía química muscular interna en trabajo mecánico.',
      },
    ],
    practiceQuestions: [
      OLYMPIC_PROBLEMS_DATA[2], // onf-01
    ],
  },

  // -------------------------------------------------------------------------
  // UNIDAD 4: QUÍMICA (ONQ) — TERMODINÁMICA QUÍMICA & ENERGÍA LIBRE DE GIBBS
  // -------------------------------------------------------------------------
  {
    id: 'onq-termodinamica-gibbs',
    discipline: 'quimica',
    disciplineLabel: 'Química (ONQ)',
    stage: 'Fase III (Academia Sabatina)',
    title: 'Termodinámica Química, Entropía Estadística & Energía Libre de Gibbs',
    substantiveTheory: `La Termodinámica Química constituye el armazón físico-matemático más riguroso de la Olimpiada Nacional de Química (ONQ). Mientras la Primera Ley de la Termodinámica establece la conservación universal de la energía para un sistema cerrado ($\\Delta U = q + w$, donde el calor y el trabajo son funciones de trayectoria dependientes del proceso), resulta incapaz de predecir la dirección o espontaneidad natural de las transformaciones químicas. La espontaneidad queda gobernada exclusivamente por la Segunda Ley de la Termodinámica, formulada a través de la función de estado Entropía ($S$), introducida por Rudolf Clausius mediante la integral de trayectoria reversible $dS = \\frac{\\delta q_{rev}}{T}$.

Ludwig Boltzmann dotó a la entropía de un significado probabilístico microscópico monumental mediante su célebre ecuación grabada en su epitafio: $S = k_B \\ln \\Omega$, donde $k_B = 1.3806 \\times 10^{-23}\\,\\text{J/K}$ es la constante de Boltzmann y $\\Omega$ denota el número de microestados cuánticos compatibles con el macroestado termodinámico del sistema (volumen, energía y número de partículas). La Segunda Ley enuncia que para cualquier proceso espontáneo e irreversible en un sistema aislado, el cambio de entropía total del universo es estrictamente positivo: $\\Delta S_{universo} = \\Delta S_{sistema} + \\Delta S_{alrededores} > 0$. La Tercera Ley (Teorema del calor de Nernst) proporciona una escala absoluta de entropía: la entropía de cualquier sustancia pura cristalina en ordenamiento perfecto se anula en el cero absoluto ($S = 0$ a $T = 0\\,\\text{K}$).

Para procesos a temperatura ($T$) y presión ($P$) constantes (las condiciones habituales en el laboratorio químico y en sistemas biológicos), Josiah Willard Gibbs introdujo la Energía Libre de Gibbs ($G$):
$$G = H - TS = U + PV - TS$$
Diferenciando y combinando con la Primera y Segunda Ley ($dH = T dS + V dP$ para procesos reversibles sin trabajo no expansivo), se obtiene la relación fundamental:
$$dG = V dP - S dT + \\sum_{i} \\mu_i dn_i$$
A $T$ y $P$ constantes ($dT = 0, dP = 0$), el criterio de espontaneidad se reduce elegantemente a $dG_{T, P} \\le 0$. Para un cambio finito:
- Si $\\Delta G < 0$: la reacción química es exergónica y termodinámicamente espontánea hacia los productos.
- Si $\\Delta G = 0$: el sistema se encuentra en estado de equilibrio termodinámico dinámico.
- Si $\\Delta G > 0$: la reacción es endergónica y no espontánea en el sentido directo (es espontánea en el sentido inverso).

La relación central que conecta la termodinámica macroscópica de Gibbs con la constante de equilibrio químico $K_{eq}$ deriva de la expresión del potencial químico de una especie en mezcla: $\\mu_i = \\mu_i^\\circ + RT \\ln a_i$, donde $a_i$ es la actividad química adimensional. Evaluando para una reacción general $\\sum \\nu_i A_i = 0$, el cambio de energía libre en condiciones arbitrarias es $\\Delta G = \\Delta G^\\circ + RT \\ln Q$, donde $Q$ es el cociente de reacción. En el equilibrio químico, $\\Delta G = 0$ y $Q = K_{eq}$, emergiendo la ecuación cardinal:
$$\\Delta G^\\circ = -RT \\ln K_{eq} \\iff K_{eq} = \\exp\\left(-\\frac{\\Delta G^\\circ}{RT}\\right)$$
Diferenciando esta ecuación respecto a la temperatura y utilizando la relación de Gibbs-Helmholtz $\\left(\\frac{\\partial (\\Delta G^\\circ / T)}{\\partial T}\\right)_P = -\\frac{\\Delta H^\\circ}{T^2}$, se deduce la Ecuación de van 't Hoff:
$$\\frac{d \\ln K_{eq}}{dT} = \\frac{\\Delta H^\\circ}{R T^2} \\implies \\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$
Esta formulación demuestra analíticamente el Principio de Le Châtelier: para una reacción endotérmica ($\\Delta H^\\circ > 0$), un incremento de temperatura eleva la constante de equilibrio ($K_2 > K_1$), desplazando la composición hacia los productos.`,
    keyTheorems: [
      {
        name: 'Criterio de Espontaneidad de Gibbs',
        statement: '$\\Delta G = \\Delta H - T\\Delta S < 0$ para cualquier proceso espontáneo a temperatura y presión constantes.',
        importance: 'Predice si una reacción ocurrirá espontáneamente sopesando la entalpía contra la dispersión entrópica.',
      },
      {
        name: 'Ecuación Fundamental del Equilibrio Químico',
        statement: '$\\Delta G^\\circ = -RT \\ln K_{eq}$, donde $R = 8.314\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$.',
        importance: 'Vincula la constante de equilibrio medible experimentalmente con las funciones de estado termodinámicas.',
      },
      {
        name: 'Ecuación Integrada de van \'t Hoff',
        statement: '$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.',
        importance: 'Calcula el cambio de la constante de equilibrio en función de la temperatura.',
      },
      {
        name: 'Entropía Estadística de Boltzmann',
        statement: '$S = k_B \\ln \\Omega$, donde $\\Omega$ es el número de microestados accesibles.',
        importance: 'Puente formal entre el comportamiento mecánico-cuántico microscópico y la termodinámica macroscópica.',
      },
      {
        name: 'Regla de Trouton',
        statement: '$\\Delta S_{ebull}\\circ \\approx 85 - 88\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$ para la mayoría de líquidos no asociados.',
        importance: 'Estima calores latentes de ebullición a partir de la temperatura de ebullición normal.',
      },
    ],
    solvedExamples: [
      {
        number: 1,
        title: 'Temperatura de inversión de espontaneidad en descomposición de CaCO3',
        problemStatement: 'El carbonato de calcio se descompone térmicamente según la reacción endotérmica: $\\text{CaCO}_3(s) \\rightarrow \\text{CaO}(s) + \\text{CO}_2(g)$. A $298\\,\\text{K}$, se tienen los valores estándar $\\Delta H^\\circ = +178.3\\,\\text{kJ/mol}$ y $\\Delta S^\\circ = +160.5\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$. Suponiendo que $\\Delta H^\\circ$ y $\\Delta S^\\circ$ no varían significativamente con la temperatura, determine la temperatura mínima de inversión por encima de la cual la descomposición se vuelve espontánea a 1 atm.',
        stepByStepProof: `Paso 1: La condición de espontaneidad a presión constante de 1 atm requiere que la energía libre de Gibbs de reacción sea negativa:
$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ < 0$.
Paso 2: En la temperatura de inversión $T_{inv}$, el sistema se encuentra en equilibrio estricto:
$\\Delta G^\\circ = 0 \\implies \\Delta H^\\circ - T_{inv} \\Delta S^\\circ = 0 \\implies T_{inv} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$.
Paso 3: Homogeneizamos rigurosamente las unidades de entalpía y entropía en Joules:
$\\Delta H^\\circ = +178.3\\,\\text{kJ/mol} = +178,300\\,\\text{J/mol}$.
$\\Delta S^\\circ = +160.5\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$.
Paso 4: Evaluamos el cociente numérico:
$T_{inv} = \\frac{178,300\\,\\text{J/mol}}{160.5\\,\\text{J}/(\\text{mol}\\cdot\\text{K})} \\approx 1,110.9\\,\\text{K}$.
Paso 5: Convertimos la temperatura a grados Celsius:
$T_{inv}(^\\circ\\text{C}) = 1,110.9 - 273.15 \\approx 837.75^\\circ\\text{C} \\approx 838^\\circ\\text{C}$.
Paso 6: Conclusión termodinámica:
- Si $T < 1,111\\,\\text{K}$ ($838^\\circ\\text{C}$): $\\Delta G^\\circ > 0$, el $\\text{CaCO}_3(s)$ es completamente estable a 1 atm.
- Si $T > 1,111\\,\\text{K}$ ($838^\\circ\\text{C}$): el término trófico $-T\\Delta S^\\circ$ sobrepasa a la entalpía endotérmica positiva, logrando $\\Delta G^\\circ < 0$, y la calcinación ocurre espontáneamente liberando $\\text{CO}_2(g)$ a 1 atm.`,
        pedagogicInsight: 'Este cálculo sustenta el proceso industrial de fabricación de cal viva en hornos rotatorios, donde se opera a temperaturas superiores a $900^\\circ\\text{C}$ para garantizar espontaneidad rápida.',
      },
      {
        number: 2,
        title: 'Cálculo de ΔG° y Kp para la síntesis de Haber-Bosch',
        problemStatement: 'Para la síntesis industrial de amoníaco: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, los valores termodinámicos a $298\\,\\text{K}$ son $\\Delta H^\\circ = -92.22\\,\\text{kJ/mol}$ y $\\Delta S^\\circ = -198.75\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$. Calcule $\\Delta G^\\circ$ a $298\\,\\text{K}$ y la constante de equilibrio termodinámica $K_p$.',
        stepByStepProof: `Paso 1: Homogeneizamos unidades:
$\\Delta H^\\circ = -92,220\\,\\text{J/mol}$.
$\\Delta S^\\circ = -198.75\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$.
$T = 298.15\\,\\text{K}$.
Paso 2: Calculamos el cambio de energía libre estándar $\\Delta G^\\circ$:
$\\Delta G^\\circ = \\Delta H^\\circ - T \\Delta S^\\circ$
$\\Delta G^\\circ = -92,220 - (298.15 \\times -198.75) = -92,220 - (-59,257.3)$
$\\Delta G^\\circ = -92,220 + 59,257.3 = -32,962.7\\,\\text{J/mol} \\approx -32.96\\,\\text{kJ/mol}$.
Paso 3: Como $\\Delta G^\\circ < 0$, la formación de amoníaco es espontánea en condiciones estándar a $25^\\circ\\text{C}$.
Paso 4: Calculamos la constante de equilibrio $K_p$ mediante la relación $\\Delta G^\\circ = -RT \\ln K_p$:
$\\ln K_p = -\\frac{\\Delta G^\\circ}{RT} = -\\frac{-32,962.7}{8.314 \\times 298.15} = \\frac{32,962.7}{2,478.82} \\approx 13.2977$.
Paso 5: Tomamos exponencial:
$K_p = e^{13.2977} \\approx 5.96 \\times 10^5$.
Conclusión: A $298\\,\\text{K}$, $K_p$ es muy grande ($5.96 \\times 10^5$), favoreciendo enormemente a los productos en el equilibrio.`,
        pedagogicInsight: 'Aunque a temperatura ambiente $K_p$ es muy favorable, la reacción no ocurre a velocidad apreciable debido a la enorme energía de activación por el triple enlace $N \\equiv N$ ($945\\,\\text{kJ/mol}$). Por ello la industria usa $450^\\circ\\text{C}$ con catalizador de hierro.',
      },
      {
        number: 3,
        title: 'Aplicación cuantitativa de van \'t Hoff para variación de constante de equilibrio',
        problemStatement: 'Una reacción endotérmica posee una constante de equilibrio $K_1 = 1.80 \\times 10^{-4}$ a $T_1 = 300\\,\\text{K}$ y su entalpía estándar de reacción es $\\Delta H^\\circ = +57.0\\,\\text{kJ/mol}$. Calcule el valor de la constante de equilibrio $K_2$ a una temperatura elevada de $T_2 = 400\\,\\text{K}$.',
        stepByStepProof: `Paso 1: Aplicamos la ecuación integrada de van 't Hoff asumiendo que $\\Delta H^\\circ$ es constante en el intervalo de temperatura:
$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) = \\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.
Paso 2: Homogeneizamos unidades:
$\\Delta H^\\circ = 57,000\\,\\text{J/mol}$, $R = 8.314\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$.
$T_1 = 300\\,\\text{K}$, $T_2 = 400\\,\\text{K}$.
Paso 3: Calculamos la diferencia de inversos de temperatura:
$\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{300} - \\frac{1}{400} = \\frac{400 - 300}{120,000} = \\frac{100}{120,000} = \\frac{1}{1,200}\\,\\text{K}^{-1} \\approx 8.333 \\times 10^{-4}\\,\\text{K}^{-1}$.
Paso 4: Evaluamos el logaritmo natural del cociente:
$\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{57,000}{8.314} \\times \\frac{1}{1,200} = \\frac{57,000}{9,976.8} \\approx 5.7132$.
Paso 5: Tomamos exponencial para despejar $K_2 / K_1$:
$\\frac{K_2}{K_1} = e^{5.7132} \\approx 302.83$.
Paso 6: Calculamos $K_2$:
$K_2 = K_1 \\times 302.83 = (1.80 \\times 10^{-4}) \\times 302.83 \\approx 0.0545 = 5.45 \\times 10^{-2}$.
Conclusión: Al incrementar la temperatura de $300\\,\\text{K}$ a $400\\,\\text{K}$, la constante de equilibrio aumentó más de 300 veces, confirmando cuantitativamente que el calentamiento favorece el equilibrio endotérmico.`,
        pedagogicInsight: 'La ecuación de van \'t Hoff es la base termodinámica rigurosa detrás de la formulación cualitativa del Principio de Le Châtelier.',
      },
      {
        number: 4,
        title: 'Entropía estándar de vaporización y aplicación de la Regla de Trouton',
        problemStatement: 'El benceno líquido ($\text{C}_6\text{H}_6$) tiene un punto de ebullición normal de $T_b = 80.1^\\circ\\text{C}$ (353.25 K) a 1 atm y su entalpía estándar de vaporización es $\\Delta H_{vap}^\\circ = 30.77\\,\\text{kJ/mol}$. Calcule el cambio de entropía de vaporización $\\Delta S_{vap}^\\circ$ y verifique el cumplimiento de la Regla de Trouton.',
        stepByStepProof: `Paso 1: En el punto de ebullición normal y presión de 1 atm, las fases líquida y gaseosa coexisten en equilibrio dinámico reversible:
$\\Delta G_{vap} = 0 \\implies \\Delta H_{vap}^\\circ - T_b \\Delta S_{vap}^\\circ = 0$.
Paso 2: Despejamos el cambio de entropía de vaporización:
$\\Delta S_{vap}^\\circ = \\frac{\\Delta H_{vap}^\\circ}{T_b}$.
Paso 3: Convertimos la entalpía a Joules:
$\\Delta H_{vap}^\\circ = 30,770\\,\\text{J/mol}$.
$T_b = 80.1 + 273.15 = 353.25\\,\\text{K}$.
Paso 4: Evaluamos el cociente:
$\\Delta S_{vap}^\\circ = \\frac{30,770\\,\\text{J/mol}}{353.25\\,\\text{K}} \\approx 87.10\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$.
Paso 5: Análisis de la Regla de Trouton:
La Regla empírica de Trouton enuncia que para líquidos no asociados (sin puentes de hidrógeno fuertes como agua o etanol), el cambio de entropía al pasar de líquido a vapor a 1 atm es aproximadamente constante:
$\\Delta S_{vap}^\\circ \\approx 85 - 88\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$.
El valor obtenido de $87.10\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$ coincide de forma casi exacta con el valor de Trouton, reflejando que la ganancia de volumen molar y desorden traslacional al evaporar un mol de gas ideal es prácticamente idéntica para líquidos comunes.`,
        pedagogicInsight: 'El agua líquida tiene $\\Delta S_{vap}^\\circ = 109\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$, desviándose marcadamente de Trouton debido a la red de puentes de hidrógeno altamente estructurada en el líquido.',
      },
      {
        number: 5,
        title: 'Acoplamiento termodinámico bioquímico con hidrólisis de ATP',
        problemStatement: 'La primera etapa de la glucólisis celular convierte glucosa en glucosa-6-fosfato: $\\text{Glucosa} + P_i \\rightleftharpoons \\text{Glucosa-6-P} + \\text{H}_2\\text{O}$, con $\\Delta G_1^{\\circ\\prime} = +13.8\\,\\text{kJ/mol}$ (no espontánea). Dicha reacción se acopla enzimáticamente a la hidrólisis de adenosín trifosfato (ATP): $\\text{ATP} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{ADP} + P_i$, con $\\Delta G_2^{\\circ\\prime} = -30.5\\,\\text{kJ/mol}$. Demuestre que la reacción acoplada neta es termodinámicamente favorable y calcule la relación entre las constantes de equilibrio de ambas rutas a $310.15\\,\\text{K}$ (temperatura corporal de $37^\\circ\\text{C}$).',
        stepByStepProof: `Paso 1: Aplicamos la ley de Hess para las funciones de estado termodinámicas sumando ambas reacciones químicas:
Reacción 1: $\\text{Glucosa} + P_i \\rightleftharpoons \\text{Glucosa-6-P} + \\text{H}_2\\text{O} \\quad (\\Delta G_1^{\\circ\\prime} = +13.8\\,\\text{kJ/mol})$
Reacción 2: $\\text{ATP} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{ADP} + P_i \\quad (\\Delta G_2^{\\circ\\prime} = -30.5\\,\\text{kJ/mol})$
Suma Neta: $\\text{Glucosa} + \\text{ATP} \\rightleftharpoons \\text{Glucosa-6-P} + \\text{ADP}$.
Paso 2: Calculamos el cambio de energía libre neta estándar bioquímica:
$\\Delta G_{neto}^{\\circ\\prime} = \\Delta G_1^{\\circ\\prime} + \\Delta G_2^{\\circ\\prime} = +13.8 + (-30.5) = -16.7\\,\\text{kJ/mol}$.
Paso 3: Interpretación de espontaneidad:
Como $\\Delta G_{neto}^{\\circ\\prime} = -16,700\\,\\text{J/mol} < 0$, la reacción acoplada catalizada por la enzima hexoquinasa es fuertemente exergónica y ocurre de forma altamente espontánea en el citoplasma.
Paso 4: Evaluamos el cociente de constantes de equilibrio $K_{acoplada} / K_1$ a $T = 310.15\\,\\text{K}$:
$K_1 = \\exp\\left(-\\frac{13,800}{8.314 \\times 310.15}\\right) = \\exp(-5.3516) \\approx 4.74 \\times 10^{-3}$.
$K_{acoplada} = \\exp\\left(-\\frac{-16,700}{8.314 \\times 310.15}\\right) = \\exp(6.4762) \\approx 6.49 \\times 10^2$.
Paso 5: Cociente de magnificación:
$\\frac{K_{acoplada}}{K_1} = \\frac{6.49 \\times 10^2}{4.74 \\times 10^{-3}} \\approx 1.37 \\times 10^5$.
Conclusión: El acoplamiento a la hidrólisis de ATP desplaza el equilibrio químico en un factor colosal de más de 130,000 a favor de la síntesis del metabolito fosforilado.`,
        pedagogicInsight: 'El acoplamiento energético es el mecanismo termodinámico universal que permite a los seres vivos conducir procesos anabólicos endergónicos a expensas de la degradación de ATP.',
      },
    ],
    practiceQuestions: [
      OLYMPIC_PROBLEMS_DATA[3], // onq-01
    ],
  },

  // -------------------------------------------------------------------------
  // UNIDAD 5: BIOLOGÍA (ONB) & COMPUTACIÓN (OSI) — GENÉTICA & GRAFOS/DP
  // -------------------------------------------------------------------------
  {
    id: 'onb-genetica-grafos-dp',
    discipline: 'computacion',
    disciplineLabel: 'Biología & Computación (ONB / OSI)',
    stage: 'Fase III (Academia Sabatina)',
    title: 'Genética de Poblaciones & Algoritmos en Grafos / Programación Dinámica',
    substantiveTheory: `La convergencia entre la Biología Teórica y las Ciencias de la Computación define la frontera de la ciencia contemporánea y de las olimpiadas científicas (ONB y OSI). En Biología Evolutiva y Genética de Poblaciones, el modelo fundacional matemático es el Principio del Equilibrio de Hardy-Weinberg, formulado independientemente por Godfrey Harold Hardy y Wilhelm Weinberg en 1908. El teorema establece que en una población infinitamente grande, panmíctica (con apareamiento rigurosamente aleatorio), diploide y exenta de perturbaciones evolutivas (mutación, migración, deriva genética y selección natural), tanto las frecuencias alélicas como las frecuencias genotípicas se mantienen inalterables de generación en generación.

Para un locus con dos alelos ($A$ y $a$) con frecuencias $p$ y $q$ respectivamente ($p + q = 1$), la distribución genotípica binomial binomial responde a $(p + q)^2 = p^2 + 2pq + q^2 = 1$, correspondiente a los genotipos $AA$, $Aa$ y $aa$. Para sistemas multialélicos de $k$ alelos (como los grupos sanguíneos ABO con alelos $I^A, I^B, i$ con frecuencias $p, q, r$), la expansión multinomial adopta la forma $(p + q + r)^2 = p^2 + 2pq + q^2 + 2pr + 2qr + r^2 = 1$. Cuando la selección natural actúa sobre un fenotipo, se modela mediante la aptitud biológica relativa ($w$) y el coeficiente de selección ($s = 1 - w$), alterando direccionalmente las frecuencias alélicas en cada ciclo generacional según la ecuación de cambio $\\Delta q = \\frac{p q [q(w_2 - w_3) + p(w_1 - w_2)]}{\\bar{w}}$.

Por su parte, la resolución algorítmica de modelos biológicos y problemas de optimización en grafos en la Olimpiada Salvadoreña de Informática (OSI) demanda estructuras de datos avanzadas y diseño formal de algoritmos. En teoría de grafos ponderados $G = (V, E)$, el problema del camino mínimo de fuente única sin aristas de peso negativo se resuelve óptimamente con el Algoritmo de Dijkstra. Mediante la técnica de relajación iterativa de aristas ($d[v] = \\min(d[v], d[u] + w(u, v))$), el algoritmo mantiene una cota superior de distancias mínimas. Implementado con un montículo binario de mínimos (Min-Heap / Cola de Prioridad), cada una de las $|V|$ operaciones de extracción del mínimo requiere $\\mathcal{O}(\\log |V|)$ y cada una de las $|E|$ actualizaciones de clave requiere $\\mathcal{O}(\\log |V|)$, logrando una complejidad asintótica total óptima de $\\mathcal{O}((|V| + |E|) \\log |V|)$, superando el tiempo cuadrático $\\mathcal{O}(|V|^2)$ del arreglo secuencial.

Para problemas de Árbol de Expansión Mínima (Minimum Spanning Tree o MST), el Algoritmo de Kruskal adopta un paradigma voraz (greedy) inspeccionando las aristas ordenadas por peso creciente e incorporándolas si no generan ciclos. El control de ciclos se efectúa en tiempo casi lineal mediante la estructura de datos Conjuntos Disjuntos (Disjoint Set Union o DSU), optimizada con Compresión de Caminos (Path Compression) y Unión por Rango (Union by Rank), alcanzando un tiempo amortizado por operación de $\\mathcal{O}(\\alpha(|V|))$, donde $\\alpha$ es la función inversa de Ackermann de crecimiento microscópico ultralento (en la práctica $\\alpha(N) \\le 4$).

Finalmente, la Programación Dinámica (Dynamic Programming o DP), conceptualizada por Richard Bellman, resuelve problemas de optimización combinatoria que satisfacen el Principio de Subestructura Óptima (la solución óptima global contiene soluciones óptimas a sus subproblemas) y exhiben Subproblemas Superpuestos (Overlapping Subproblems). A diferencia de los enfoques recursivos ingenuos con complejidad exponencial $\\mathcal{O}(2^n)$, la programación dinámica memoiza o tabula las transiciones de estado, garantizando que cada estado se compute exactamente una vez. En el clásico Problema de la Mochila 0/1 (Knapsack 0/1), la recurrencia $DP[i][w] = \\max(DP[i-1][w], DP[i-1][w - w_i] + v_i)$ reduce la complejidad temporal a $\\mathcal{O}(N \\cdot W)$ en tiempo pseudopolinomial, técnica vital en alineamiento de secuencias genéticas (Algoritmo de Needleman-Wunsch).`,
    keyTheorems: [
      {
        name: 'Equilibrio de Hardy-Weinberg Multialélico',
        statement: 'Para $k$ alelos con frecuencias $\\sum p_i = 1$, las frecuencias genotípicas en equilibrio vienen dadas por la expansión $(\\sum p_i)^2 = 1$.',
        importance: 'Modelo nulo estándar en genética poblacional para detectar acción de selección natural o endogamia.',
      },
      {
        name: 'Complejidad Asintótica de Dijkstra con Min-Heap',
        statement: '$\\mathcal{O}((|V| + |E|) \\log |V|)$ utilizando colas de prioridad basadas en montículos binarios para grafos con pesos positivos.',
        importance: 'Estándar de oro para ruteo de caminos mínimos en redes de datos e infraestructuras.',
      },
      {
        name: 'Complejidad Amortizada de DSU (Kruskal)',
        statement: '$\\mathcal{O}(|E| \\log |E| + |E| \\alpha(|V|))$ para hallar el Árbol de Expansión Mínima.',
        importance: 'Conecta redes al costo mínimo de construcción garantizando conectividad acíclica.',
      },
      {
        name: 'Principio de Optimalidad de Bellman',
        statement: 'Cualquier subsecuencia de decisiones óptimas para una trayectoria óptima dada es a su vez una subsecuencia óptima.',
        importance: 'Fundamento matemático indispensable de la programación dinámica.',
      },
      {
        name: 'Equilibrio Mutación-Selección para Alelos Letales',
        statement: 'Frecuencia de equilibrio $q = \\sqrt{\\mu / s}$ para alelos recesivos deletéreos con tasa de mutación $\\mu$.',
        importance: 'Explica la persistencia de enfermedades genéticas raras en poblaciones humanas.',
      },
    ],
    solvedExamples: [
      {
        number: 1,
        title: 'Cálculo de frecuencias alélicas del sistema sanguíneo ABO',
        problemStatement: 'En una muestra poblacional de 10,000 personas en El Salvador, se observaron las siguientes frecuencias fenotípicas de grupos sanguíneos: Grupo O = 4,900 personas, Grupo A = 3,600 personas, Grupo B = 1,200 personas, Grupo AB = 300 personas. Asumiendo que la población se encuentra en equilibrio de Hardy-Weinberg para los tres alelos $I^A$ ($p$), $I^B$ ($q$) e $i$ ($r$), calcule las frecuencias alélicas $p, q, r$.',
        stepByStepProof: `Paso 1: Convertimos los conteos observados en frecuencias fenotípicas relativas dividiendo entre el total de 10,000 personas:
- Frecuencia Fenotipo O: $F(O) = 4,900 / 10,000 = 0.49$.
- Frecuencia Fenotipo A: $F(A) = 3,600 / 10,000 = 0.36$.
- Frecuencia Fenotipo B: $F(B) = 1,200 / 10,000 = 0.12$.
- Frecuencia Fenotipo AB: $F(AB) = 300 / 10,000 = 0.03$.
Suma: $0.49 + 0.36 + 0.12 + 0.03 = 1.00$.
Paso 2: Expresamos las frecuencias fenotípicas en función de los alelos según Hardy-Weinberg:
- Fenotipo O corresponde exclusivamente al genotipo homocigoto recesivo $ii$: $F(O) = r^2$.
- Fenotipo A corresponde a genotipos $I^A I^A$ ($p^2$) e $I^A i$ ($2pr$): $F(A) = p^2 + 2pr$.
- Fenotipo B corresponde a genotipos $I^B I^B$ ($q^2$) e $I^B i$ ($2qr$): $F(B) = q^2 + 2qr$.
- Fenotipo AB corresponde al genotipo codominante $I^A I^B$: $F(AB) = 2pq$.
Paso 3: Calculamos la frecuencia del alelo recesivo $r$:
$r^2 = 0.49 \\implies r = \\sqrt{0.49} = 0.70$.
Paso 4: Consideramos la suma de las frecuencias de los grupos A y O:
$F(A) + F(O) = p^2 + 2pr + r^2 = (p + r)^2$.
Sustituyendo los valores numéricos:
$(p + r)^2 = 0.36 + 0.49 = 0.85$.
Extraemos la raíz cuadrada:
$p + r = \\sqrt{0.85} \\approx 0.92195$.
Paso 5: Despejamos el alelo $p$:
$p = (p + r) - r = 0.92195 - 0.70 = 0.22195 \\approx 0.222$ ($22.2\\%$).
Paso 6: Calculamos el alelo $q$ mediante la condición de normalización $p + q + r = 1$:
$q = 1 - p - r = 1 - 0.22195 - 0.70 = 0.07805 \\approx 0.078$ ($7.8\\%$).
Paso 7: Verificación con el grupo AB:
$2pq = 2(0.222)(0.078) = 0.0346 \\approx 0.035$ (muy cercano al $0.03$ observado experimentalmente).
Frecuencias alélicas: $p (I^A) \\approx 0.222$, $q (I^B) \\approx 0.078$, $r (i) = 0.700$.`,
        pedagogicInsight: 'El artificio algebraico $(p + r)^2 = F(A) + F(O)$ es el método de Bernstein que permite desacoplar los alelos dominantes sin resolver ecuaciones cuadráticas complejas.',
      },
      {
        number: 2,
        title: 'Dinámica de selección natural contra alelo letal recesivo',
        problemStatement: 'En una población diploide, un alelo recesivo $a$ provoca mortalidad pre-reproductiva completa (letalidad total: $w_{aa} = 0, s = 1$), mientras que los homocigotos dominantes $AA$ y heterocigotos $Aa$ son completamente viables ($w_{AA} = 1, w_{Aa} = 1$). Si la frecuencia inicial del alelo letal es $q_0 = 0.20$, demuestre analíticamente cuántas generaciones $t$ deben transcurrir para que la frecuencia se reduzca a la mitad ($q_t = 0.10$).',
        stepByStepProof: `Paso 1: Evaluamos las aptitudes biológicas:
$w_{AA} = 1$, $w_{Aa} = 1$, $w_{aa} = 0$.
Paso 2: En la generación actual con frecuencias $p$ y $q$, la aptitud biológica media poblacional $\\bar{w}$ es:
$\\bar{w} = p^2 w_{AA} + 2pq w_{Aa} + q^2 w_{aa} = p^2(1) + 2pq(1) + q^2(0) = p^2 + 2pq$.
Como $p^2 + 2pq + q^2 = 1$, se tiene: $\\bar{w} = 1 - q^2$.
Paso 3: La nueva frecuencia alélica $q_1$ tras una generación de selección viene dada por:
$q_1 = \\frac{p q w_{Aa} + q^2 w_{aa}}{\\bar{w}} = \\frac{pq(1) + q^2(0)}{1 - q^2} = \\frac{pq}{(1 - q)(1 + q)}$.
Paso 4: Dado que $p = 1 - q$, el factor $(1 - q)$ se cancela:
$q_1 = \\frac{q(1 - q)}{(1 - q)(1 + q)} = \\frac{q}{1 + q}$.
Paso 5: Tomamos el inverso algebraico de la relación de recurrencia:
$\\frac{1}{q_1} = \\frac{1 + q}{q} = \\frac{1}{q} + 1$.
Paso 6: Esta es una progresión aritmética en los inversos con diferencia común $+1$.
Para $t$ generaciones:
$\\frac{1}{q_t} = \\frac{1}{q_0} + t \\implies t = \\frac{1}{q_t} - \\frac{1}{q_0}$.
Paso 7: Sustituimos los valores numéricos iniciales y finales:
$q_0 = 0.20 \\implies \\frac{1}{q_0} = \\frac{1}{0.20} = 5$.
$q_t = 0.10 \\implies \\frac{1}{q_t} = \\frac{1}{0.10} = 10$.
$t = 10 - 5 = 5\\,\\text{generaciones}$.
Conclusión: Se requieren exactamente 5 generaciones para que la frecuencia del alelo letal se reduzca de $0.20$ a $0.10$.`,
        pedagogicInsight: 'A medida que el alelo se vuelve más raro, la selección es cada vez más lenta porque el alelo recesivo se "esconde" en heterocigotos sanos inmunes a la selección.',
      },
      {
        number: 3,
        title: 'Traza exhaustiva de Dijkstra en red de 6 nodos con Min-Heap',
        problemStatement: 'Dado un grafo no dirigido con vértices $V = \\{A, B, C, D, E, F\\}$ y aristas con sus pesos: $(A, B: 4)$, $(A, C: 2)$, $(B, C: 1)$, $(B, D: 5)$, $(C, D: 8)$, $(C, E: 10)$, $(D, E: 2)$, $(D, F: 6)$, $(E, F: 3)$. Ejecute paso a paso el algoritmo de Dijkstra para hallar la distancia mínima y la ruta más corta desde el nodo origen $A$ hasta el nodo destino $F$.',
        stepByStepProof: `Paso 1: Inicialización:
Distancias: $d[A] = 0$, y para todo $v \\ne A$, $d[v] = \\infty$.
Predecesores: $\\pi[v] = \\text{null}$ para todo $v$.
Cola de prioridad (Min-Heap): contiene $(0, A)$.
Conjunto de visitados cerrados $S = \\emptyset$.
Paso 2: Iteración 1:
Extraer mínimo: Nodo $A$ con distancia 0. $S = \\{A\\}$.
Relajar vecinos de $A$:
- Vecino $B$: $d[B] = \\min(\\infty, 0 + 4) = 4$. $\\pi[B] = A$. Insertar $(4, B)$.
- Vecino $C$: $d[C] = \\min(\\infty, 0 + 2) = 2$. $\\pi[C] = A$. Insertar $(2, C)$.
Cola: $[(2, C), (4, B)]$.
Paso 3: Iteración 2:
Extraer mínimo: Nodo $C$ con distancia 2. $S = \\{A, C\\}$.
Relajar vecinos no visitados de $C$ ($B, D, E$):
- Vecino $B$: $d[B] = \\min(4, 2 + 1) = 3$. ¡Se actualiza $d[B] = 3$! $\\pi[B] = C$. Insertar $(3, B)$.
- Vecino $D$: $d[D] = \\min(\\infty, 2 + 8) = 10$. $\\pi[D] = C$. Insertar $(10, D)$.
- Vecino $E$: $d[E] = \\min(\\infty, 2 + 10) = 12$. $\\pi[E] = C$. Insertar $(12, E)$.
Cola: $[(3, B), (4, B), (10, D), (12, E)]$.
Paso 4: Iteración 3:
Extraer mínimo: Nodo $B$ con distancia 3. $S = \\{A, C, B\\}$.
Relajar vecinos de $B$ ($D$):
- Vecino $D$: $d[D] = \\min(10, 3 + 5) = 8$. ¡Se actualiza $d[D] = 8$! $\\pi[D] = B$. Insertar $(8, D)$.
(El registro desactualizado $(4, B)$ se descarta al extraerse por estar ya visitado).
Cola: $[(8, D), (10, D), (12, E)]$.
Paso 5: Iteración 4:
Extraer mínimo: Nodo $D$ con distancia 8. $S = \\{A, C, B, D\\}$.
Relajar vecinos de $D$ ($E, F$):
- Vecino $E$: $d[E] = \\min(12, 8 + 2) = 10$. ¡Se actualiza $d[E] = 10$! $\\pi[E] = D$. Insertar $(10, E)$.
- Vecino $F$: $d[F] = \\min(\\infty, 8 + 6) = 14$. $\\pi[F] = D$. Insertar $(14, F)$.
Cola: $[(10, E), (10, D), (12, E), (14, F)]$.
Paso 6: Iteración 5:
Extraer mínimo: Nodo $E$ con distancia 10. $S = \\{A, C, B, D, E\\}$.
Relajar vecinos de $E$ ($F$):
- Vecino $F$: $d[F] = \\min(14, 10 + 3) = 13$. ¡Se actualiza $d[F] = 13$! $\\pi[F] = E$. Insertar $(13, F)$.
Cola: $[(13, F), \\dots]$.
Paso 7: Iteración 6:
Extraer mínimo: Nodo $F$ con distancia 13. $S = \\{A, C, B, D, E, F\\}$.
Reconstrucción de la ruta más corta rastreando los predecesores:
$F \\leftarrow E \\leftarrow D \\leftarrow B \\leftarrow C \\leftarrow A$.
Ruta Óptima: $A \\rightarrow C \\rightarrow B \\rightarrow D \\rightarrow E \\rightarrow F$.
Distancia Mínima Total: $2 + 1 + 5 + 2 + 3 = 13$.`,
        pedagogicInsight: 'Nótese cómo la arista directa $(A, B)$ de peso 4 fue superada por la ruta $(A, C, B)$ de peso $2 + 1 = 3$. La relajación voraz con Min-Heap garantiza la solución óptima.',
      },
      {
        number: 4,
        title: 'Solución del problema de la mochila 0/1 con tabla de programación dinámica',
        problemStatement: 'Un competidor dispone de una mochila con capacidad de peso máximo $W = 7\\,\\text{kg}$ y 4 artículos con los siguientes pesos y valores: Artículo 1: $(w_1 = 1\\,\\text{kg}, v_1 = 1)$, Artículo 2: $(w_2 = 3\\,\\text{kg}, v_2 = 4)$, Artículo 3: $(w_3 = 4\\,\\text{kg}, v_3 = 5)$, Artículo 4: $(w_4 = 5\\,\\text{kg}, v_4 = 7)$. Construya la tabla de programación dinámica $DP[i][w]$ y determine el valor máximo alcanzable junto con los artículos que deben incluirse.',
        stepByStepProof: `Paso 1: Definición del estado:
$DP[i][w]$ representa el valor máximo obtenible considerando únicamente los primeros $i$ artículos con una capacidad residual de mochila $w \\in \\{0, 1, \\dots, 7\\}$.
Paso 2: Ecuación de recurrencia de Bellman:
- Si $w_i > w$ (el artículo no cabe): $DP[i][w] = DP[i-1][w]$.
- Si $w_i \\le w$: $DP[i][w] = \\max(DP[i-1][w], DP[i-1][w - w_i] + v_i)$.
Casos base: $DP[0][w] = 0$ para todo $w$, y $DP[i][0] = 0$ para todo $i$.
Paso 3: Llenado iterativo de la tabla fila por fila:
Fila 0 (0 artículos): $[0, 0, 0, 0, 0, 0, 0, 0]$
Fila 1 ($w_1 = 1, v_1 = 1$):
Para $w=0: 0$; para $w=1..7$: $\\max(0, 0 + 1) = 1$.
Fila 1: $[0, 1, 1, 1, 1, 1, 1, 1]$
Fila 2 ($w_2 = 3, v_2 = 4$):
$w=0,1,2$: copia Fila 1 $\\implies [0, 1, 1]$.
$w=3: \\max(1, 0 + 4) = 4$.
$w=4: \\max(1, 1 + 4) = 5$.
$w=5: \\max(1, 1 + 4) = 5$.
$w=6: \\max(1, 1 + 4) = 5$.
$w=7: \\max(1, 1 + 4) = 5$.
Fila 2: $[0, 1, 1, 4, 5, 5, 5, 5]$
Fila 3 ($w_3 = 4, v_3 = 5$):
$w=0..3$: copia Fila 2 $\\implies [0, 1, 1, 4]$.
$w=4: \\max(5, DP[2][0] + 5) = \\max(5, 5) = 5$.
$w=5: \\max(5, DP[2][1] + 5) = \\max(5, 1 + 5) = 6$.
$w=6: \\max(5, DP[2][2] + 5) = \\max(5, 1 + 5) = 6$.
$w=7: \\max(5, DP[2][3] + 5) = \\max(5, 4 + 5) = 9$.
Fila 3: $[0, 1, 1, 4, 5, 6, 6, 9]$
Fila 4 ($w_4 = 5, v_4 = 7$):
$w=0..4$: copia Fila 3 $\\implies [0, 1, 1, 4, 5]$.
$w=5: \\max(6, DP[3][0] + 7) = \\max(6, 7) = 7$.
$w=6: \\max(6, DP[3][1] + 7) = \\max(6, 1 + 7) = 8$.
$w=7: \\max(9, DP[3][2] + 7) = \\max(9, 1 + 7) = 9$.
Fila 4: $[0, 1, 1, 4, 5, 7, 8, 9]$.
Paso 4: El valor óptimo en $DP[4][7]$ es 9.
Paso 5: Reconstrucción de la solución óptima:
- En $i=4, w=7$: $DP[4][7] = 9 = DP[3][7] \\implies$ NO tomamos el Artículo 4. Pasamos a $(i=3, w=7)$.
- En $i=3, w=7$: $DP[3][7] = 9 \\ne DP[2][7] = 5 \\implies$ SÍ tomamos el Artículo 3 ($w_3=4, v_3=5$). Capacidad restante: $7 - 4 = 3$. Pasamos a $(i=2, w=3)$.
- En $i=2, w=3$: $DP[2][3] = 4 \\ne DP[1][3] = 1 \\implies$ SÍ tomamos el Artículo 2 ($w_2=3, v_2=4$). Capacidad restante: $3 - 3 = 0$.
Artículos seleccionados: Artículo 2 y Artículo 3.
Peso total: $3 + 4 = 7\\,\\text{kg}$.
Valor total óptimo: $4 + 5 = 9$.`,
        pedagogicInsight: 'La programación dinámica garantiza encontrar la combinación óptima sin explorar las $2^4 = 16$ combinaciones por fuerza bruta, escalando a millones de estados.',
      },
      {
        number: 5,
        title: 'Árbol de Expansión Mínima con Kruskal y Conjuntos Disjuntos (DSU)',
        problemStatement: 'Para un grafo con 5 vértices $\\{1, 2, 3, 4, 5\\}$ y 7 aristas ponderadas: $(1-2: 3)$, $(1-3: 1)$, $(2-3: 4)$, $(2-4: 6)$, $(3-4: 5)$, $(3-5: 2)$, $(4-5: 7)$, ejecute el Algoritmo de Kruskal empleando la estructura de datos DSU para determinar el costo mínimo de interconexión y las aristas que componen el MST.',
        stepByStepProof: `Paso 1: Ordenamos todas las 7 aristas en orden no decreciente de peso:
1. $(1, 3)$ con peso 1
2. $(3, 5)$ con peso 2
3. $(1, 2)$ con peso 3
4. $(2, 3)$ con peso 4
5. $(3, 4)$ con peso 5
6. $(2, 4)$ con peso 6
7. $(4, 5)$ con peso 7.
Paso 2: Inicializamos la estructura DSU para 5 vértices:
Cada vértice comienza en su propio conjunto independiente:
$\\{1\\}, \\{2\\}, \\{3\\}, \\{4\\}, \\{5\\}$.
Contador de aristas agregadas: $E_{mst} = 0$. Un árbol con $|V| = 5$ requiere exactamente $|V| - 1 = 4$ aristas.
Paso 3: Evaluación voraz de aristas:
- Arista 1: $(1, 3)$ peso 1. $\\text{Find}(1) \\ne \\text{Find}(3)$. No forma ciclo.
Se acepta la arista. $\\text{Union}(1, 3)$. Conjuntos: $\\{1, 3\\}, \\{2\\}, \\{4\\}, \\{5\\}$. $E_{mst} = 1$.
- Arista 2: $(3, 5)$ peso 2. $\\text{Find}(3) \\ne \\text{Find}(5)$. No forma ciclo.
Se acepta la arista. $\\text{Union}(3, 5)$. Conjuntos: $\\{1, 3, 5\\}, \\{2\\}, \\{4\\}$. $E_{mst} = 2$.
- Arista 3: $(1, 2)$ peso 3. $\\text{Find}(1) \\ne \\text{Find}(2)$. No forma ciclo.
Se acepta la arista. $\\text{Union}(1, 2)$. Conjuntos: $\\{1, 2, 3, 5\\}, \\{4\\}$. $E_{mst} = 3$.
- Arista 4: $(2, 3)$ peso 4. $\\text{Find}(2) = \\text{Find}(3)$ (ambos pertenecen al conjunto $\\{1, 2, 3, 5\\}$).
¡Forma ciclo! Se RECHAZA la arista.
- Arista 5: $(3, 4)$ peso 5. $\\text{Find}(3) \\ne \\text{Find}(4)$. No forma ciclo.
Se acepta la arista. $\\text{Union}(3, 4)$. Conjuntos: $\\{1, 2, 3, 4, 5\\}$. $E_{mst} = 4$.
Paso 4: Como hemos seleccionado exactamente $4$ aristas, el algoritmo termina.
Aristas del MST: $(1, 3)$, $(3, 5)$, $(1, 2)$, $(3, 4)$.
Paso 5: Costo total del Árbol de Expansión Mínima:
$\\text{Costo} = 1 + 2 + 3 + 5 = 11$.`,
        pedagogicInsight: 'La detección instantánea de ciclos mediante las operaciones Find y Union con compresión de caminos es lo que confiere a Kruskal su altísima eficiencia en olimpiadas de informática.',
      },
    ],
    practiceQuestions: [
      OLYMPIC_PROBLEMS_DATA[4], // onb-01
      OLYMPIC_PROBLEMS_DATA[5], // osi-01
    ],
  },
];
