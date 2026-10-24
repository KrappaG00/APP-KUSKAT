import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 1° Bachillerato - Unidad 1
// Números reales
// -----------------------------------------------------------------
const u1Archetypes1B: QuestionArchetype[] = [
  {
    generate: (v) => {
      const n = (v % 4) + 3;
      return {
        statement: `Al simplificar la expresión con exponente racional $a^{${n}/2}$ en forma de radical, se obtiene:`,
        options: [
          `$\\sqrt{a^{${n}}}$`,
          `$\\sqrt[${n}]{a^2}$`,
          `$a^{${n - 1}}$`,
          `$\\frac{a^{${n}}}{2}$`,
        ],
        correctAnswer: 'A',
        explanation: `Por la definición fundamental de exponente fraccionario: $a^{m/n} = \\sqrt[n]{a^m}$. Para exponente $\\frac{${n}}{2}$, el índice de la raíz es $2$ (raíz cuadrada): $\\sqrt{a^{${n}}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      return {
        statement: `Al racionalizar el denominador de la fracción $\\frac{1}{\\sqrt{${a}} + 1}$ multiplicando por el conjugado, se obtiene:`,
        options: [
          `$\\frac{\\sqrt{${a}} + 1}{${a} - 1}$`,
          `$\\frac{\\sqrt{${a}} - 1}{${a} - 1}$`,
          `$\\frac{1}{${a} - 1}$`,
          `$\\sqrt{${a}} - 1$`,
        ],
        correctAnswer: 'B',
        explanation: `El conjugado de $(\\sqrt{${a}} + 1)$ es $(\\sqrt{${a}} - 1)$. Al multiplicar numerador y denominador por el conjugado: $\\frac{\\sqrt{${a}} - 1}{(\\sqrt{${a}})^2 - 1^2} = \\frac{\\sqrt{${a}} - 1}{${a} - 1}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const p = (v % 4) + 2;
      const q = (v % 3) + 2;
      return {
        statement: `Al aplicar las propiedades de los exponentes a $(x^{${p}})^{${q}}$, la expresión simplificada es:`,
        options: [
          `$x^{${p + q}}$`,
          `$x^{${p - q}}$`,
          `$x^{${p * q}}$`,
          `$x^{${p}^{${q}}}$`,
        ],
        correctAnswer: 'C',
        explanation: `Por la ley de potencia de una potencia: $(x^m)^n = x^{m \\cdot n}$. Por ende, $(x^{${p}})^{${q}} = x^{${p * q}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const left = -(v * 2 + 1);
      const right = v * 3 + 4;
      return {
        statement: `El conjunto de todos los números reales $x$ que cumplen la condición $${left} < x \\le ${right}$ se denota en notación de intervalo como:`,
        options: [
          `$[${left}, ${right}]$`,
          `$(${left}, ${right})$`,
          `$[${left}, ${right})$`,
          `$(${left}, ${right}]$`,
        ],
        correctAnswer: 'D',
        explanation: `El signo de desigualdad estricta ($<$) corresponde a un extremo abierto (paréntesis), mientras que la desigualdad débil ($\\le$) corresponde a un extremo cerrado (corchete): $(${left}, ${right}]$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿A cuál de los siguientes conjuntos numéricos pertenece formalmente el número $\\pi = 3.14159265...$?`,
        options: [
          'Números irracionales (I) y reales (R)',
          'Números racionales (Q) pero no reales',
          'Números enteros (Z)',
          'Números naturales (N)',
        ],
        correctAnswer: 'A',
        explanation: `El número $\\pi$ es un número irracional con infinitas cifras decimales no periódicas, perteneciendo al conjunto de los números irracionales ($\\mathbb{I}$) y al de los números reales ($\\mathbb{R}$).`,
      };
    },
  },
  {
    generate: (v) => {
      const k = (v % 5) + 2;
      return {
        statement: `Al simplificar la raíz enésima $\\sqrt[3]{${k * k * k}x^6}$, se obtiene exactamente:`,
        options: [
          `$${k}x$`,
          `$${k}x^2$`,
          `$${k * k}x^2$`,
          `$${k}x^3$`,
        ],
        correctAnswer: 'B',
        explanation: `$\\sqrt[3]{${k * k * k}x^6} = \\sqrt[3]{${k}^3} \\cdot \\sqrt[3]{x^6} = ${k} \\cdot x^{6/3} = ${k}x^2$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      return {
        statement: `¿Cuál es el valor simplificado de $(${a})^{-2}$ expresado como fracción positiva?`,
        options: [
          `$-${a * 2}$`,
          `$-${a * a + 1}$`,
          `$\\frac{1}{${a * a}}$`,
          `$\\frac{1}{${a * 2 + 1}}$`,
        ],
        correctAnswer: 'C',
        explanation: `Por la propiedad de los exponentes negativos: $a^{-n} = \\frac{1}{a^n}$. Así, $(${a})^{-2} = \\frac{1}{${a}^2} = \\frac{1}{${a * a}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `La distancia euclidiana entre dos puntos $a$ y $b$ sobre la recta numérica real se define algebraicamente mediante:`,
        options: [
          `$a - b$`,
          `$a + b$`,
          `$\\frac{a + b}{2}$`,
          `$|a - b|$`,
        ],
        correctAnswer: 'D',
        explanation: `La distancia geométrica entre dos números reales en la recta es el valor absoluto de su diferencia: $d(a, b) = |a - b| = |b - a|$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 4) + 1;
      return {
        statement: `Al evaluar el radical $\\sqrt[4]{16x^{${n * 4}}}$, el resultado positivo para $x \\ge 0$ es:`,
        options: [
          `$2x^{${n}}$`,
          `$4x^{${n}}$`,
          `$2x^{${n * 4}}$`,
          `$16x^{${n}}$`,
        ],
        correctAnswer: 'A',
        explanation: `$\\sqrt[4]{16} = 2$ y $\\sqrt[4]{x^{${n * 4}}} = x^{${n * 4}/4} = x^{${n}}$, dando $2x^{${n}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cuál de las siguientes propiedades garantiza que para todo número real $a, b \\in \\mathbb{R}$, se cumple $a + b = b + a$?`,
        options: [
          'Propiedad asociativa',
          'Propiedad conmutativa de la adición',
          'Propiedad distributiva',
          'Propiedad del elemento neutro',
        ],
        correctAnswer: 'B',
        explanation: `La propiedad conmutativa establece que el orden de los sumandos no altera la suma en el cuerpo de los números reales.`,
      };
    },
  },
];

const u1Questions1B = generate50UnitQuestions(
  'mined-mat-1b-u01',
  '1-bachillerato',
  '1B',
  1,
  'Números reales',
  'MINED ESMATE 1° Bachillerato',
  u1Archetypes1B
);

const u1Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u01-l01',
    '1.1',
    'Propiedades de las raíces n-ésimas y exponentes racionales',
    'Simplifica la expresión matemática que combina radicales: ∛(a⁶ b⁹) / √(a² b⁴).',
    'Convertimos los radicales a exponentes racionales: ∛(a⁶ b⁹) = a^(6/3) b^(9/3) = a² b³. Para el denominador: √(a² b⁴) = a^(2/2) b^(4/2) = a¹ b² = a b². Dividimos potencias de igual base restando exponentes: a^(2-1) b^(3-2) = a b.',
    'Definición formal oficial de exponente fraccionario: $$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m \\quad (a > 0, n \\in \\mathbb{Z}^+)$$ Propiedades: $a^p \\cdot a^q = a^{p+q}$, $\\frac{a^p}{a^q} = a^{p-q}$, $(a^p)^q = a^{pq}$.',
    '$\\sqrt[4]{81x^8} = 81^{1/4} \\cdot x^{8/4} = 3x^2$.',
    [{ exercise: 'Expresa en forma radical: x^(3/5)', hint: 'Índice 5, potencia 3.', answer: '⁵√x³' }]
  ),
  createPscerLesson(
    'mined-mat-1b-u01-l02',
    '1.2',
    'Racionalización con binomios conjugados e intervalos en R',
    'Racionaliza el denominador de la fracción 4 / (√5 - 1) y representa el intervalo de números reales mayores que 2 y menores o iguales que 7.',
    'Multiplicamos por el binomio conjugado (√5 + 1): 4(√5 + 1) / ((√5)² - 1²) = 4(√5 + 1) / (5 - 1) = 4(√5 + 1) / 4 = √5 + 1. El intervalo para 2 < x ≤ 7 se denota (2, 7].',
    'Para racionalizar un binomio con raíces cuadradas se multiplica por su conjugado aplicando diferencia de cuadrados: $$\\frac{k}{\\sqrt{a} \\pm \\sqrt{b}} \\times \\frac{\\sqrt{a} \\mp \\sqrt{b}}{\\sqrt{a} \\mp \\sqrt{b}} = \\frac{k(\\sqrt{a} \\mp \\sqrt{b})}{a - b}$$ Los intervalos en $\\mathbb{R}$ acotan subconjuntos de la recta real: $(a, b], [a, b], (-\\infty, b)$.',
    'Racionalizar $\\frac{2}{\\sqrt{3} + 1} = \\frac{2(\\sqrt{3}-1)}{3 - 1} = \\sqrt{3} - 1$.',
    [{ exercise: 'Racionaliza: 6 / (√7 - 1)', hint: 'Multiplica por √7 + 1.', answer: '√7 + 1' }]
  ),
];

const u2Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u02-l01',
    '2.1',
    'División sintética (Regla de Ruffini) y números complejos',
    'Divide el polinomio P(x) = 2x³ - 5x² + 4x - 6 entre (x - 2) y define la unidad imaginaria i.',
    'Aplicamos Ruffini con c = 2: coeficientes [2, -5, 4, -6]. Bajamos 2. 2x2=4; -5+4=-1. -1x2=-2; 4-2=2. 2x2=4; -6+4=-2. Cociente Q(x) = 2x² - x + 2, Residuo R = -2. La unidad imaginaria se define como i = √(-1), donde i² = -1.',
    'Por el **Teorema del Residuo**, al dividir $P(x)$ entre $(x - c)$, el residuo es exactamente $R = P(c)$. El conjunto de los **números complejos** es: $$\\mathbb{C} = \\{ a + bi \\mid a, b \\in \\mathbb{R}, i^2 = -1 \\}$$',
    'Para sumar complejos: $(3 + 4i) + (2 - 6i) = (3 + 2) + (4 - 6)i = 5 - 2i$.',
    [{ exercise: 'Calcula i²', hint: 'Definición de unidad imaginaria.', answer: '-1' }]
  ),
];

const u3Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u03-l01',
    '3.1',
    'Desigualdades cuadráticas mediante cuadro de variación de signos',
    'Resuelve la desigualdad cuadrática x² - 5x + 6 ≥ 0.',
    'Factorizamos el trinomio: (x - 2)(x - 3) ≥ 0. Puntos críticos: x = 2 y x = 3. Construimos el cuadro de signos en los intervalos (-∞, 2), (2, 3) y (3, ∞). En (-∞, 2): (-) x (-) = (+). En (2, 3): (+) x (-) = (-). En (3, ∞): (+) x (+) = (+). Como buscamos ≥ 0, la solución es (-∞, 2] U [3, ∞).',
    'Para resolver **desigualdades no lineales**, se hallan las raíces reales de los factores y se analiza el signo en cada intervalo mediante un cuadro de variación: $$P(x) \\ge 0 \\implies x \\in (-\\infty, r_1] \\cup [r_2, \\infty)$$',
    '$(x + 1)(x - 4) < 0$ tiene solución en el intervalo abierto $(-1, 4)$.',
    [{ exercise: 'Encuentra los puntos críticos de x² - 9 = 0', hint: 'Diferencia de cuadrados.', answer: 'x = -3 y x = 3' }]
  ),
];

const u4Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u04-l01',
    '4.1',
    'Funciones reales, dominio, rango y traslaciones f(x) = a(x - h)² + k',
    'Dada la función f(x) = 2(x - 3)² + 4, determina las coordenadas de su vértice, su dominio y su rango.',
    'La forma canónica f(x) = a(x - h)² + k tiene vértice en V(h, k). Aquí h = 3 y k = 4, luego el vértice es V(3, 4). Como a = 2 > 0, la parábola abre hacia arriba. El dominio son todos los reales R y el rango es [4, ∞).',
    'La gráfica de $f(x) = a(x - h)^2 + k$ se obtiene desplazando $y = ax^2$: $h$ unidades horizontalmente ($h > 0$ derecha, $h < 0$ izquierda) y $k$ unidades verticalmente: $$\\text{Vértice: } V(h, k), \\quad \\text{Rango: } [k, \\infty) \\text{ si } a > 0$$',
    'Una función es **inyectiva** si a elementos distintos del dominio les corresponden imágenes distintas en el codominio.',
    [{ exercise: '¿Cuál es el vértice de f(x) = -(x + 2)² + 5?', hint: 'h = -2, k = 5.', answer: 'V(-2, 5)' }]
  ),
];

const u5Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u05-l01',
    '5.1',
    'Resolución de triángulos oblicuángulos: Ley de Senos y Ley de Cosenos',
    'En un triángulo ABC se conocen los lados a = 7 cm, b = 5 cm y el ángulo comprendido ∠C = 60°. Calcula la longitud del tercer lado c.',
    'Como conocemos dos lados y el ángulo comprendido, aplicamos la Ley de Cosenos: c² = a² + b² - 2ab cos(C). Sustituimos: c² = 7² + 5² - 2(7)(5) cos(60°) = 49 + 25 - 70(0.5) = 74 - 35 = 39. Por lo tanto c = √39 ≈ 6.24 cm.',
    'Teoremas trigonométricos oficiales para triángulos no rectángulos: $$\\text{Ley de Senos: } \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}, \\qquad \\text{Ley de Cosenos: } c^2 = a^2 + b^2 - 2ab\\cos C$$',
    'El área de cualquier triángulo oblicuángulo es $A = \\frac{1}{2}ab\\sin C$.',
    [{ exercise: 'Si a = 10, sen A = 0.5 y sen B = 0.4, calcula b con la Ley de Senos.', hint: '10 / 0.5 = b / 0.4.', answer: 'b = 8' }]
  ),
];

const u6Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u06-l01',
    '6.1',
    'Identidades trigonométricas fundamentales y fórmulas de ángulo doble',
    'Demuestra que sen²θ + cos²θ = 1 y calcula sen(2θ) si sen θ = 3/5 y θ está en el primer cuadrante.',
    'En el círculo unitario x = cos θ e y = sen θ. Por el teorema de Pitágoras x² + y² = 1, por lo que cos²θ + sen²θ = 1. Para sen(2θ): cos θ = √(1 - (3/5)²) = 4/5. Aplicamos la fórmula del ángulo doble: sen(2θ) = 2 sen θ cos θ = 2(3/5)(4/5) = 24/25.',
    'Identidades pitagóricas y de ángulo doble fundamentales: $$\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta, \\quad \\sin(2\\theta) = 2\\sin\\theta\\cos\\theta, \\quad \\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$$',
    '$\\cos(2\\theta) = (4/5)^2 - (3/5)^2 = 16/25 - 9/25 = 7/25$.',
    [{ exercise: 'Si sen θ = 0.6 y cos θ = 0.8, calcula sen(2θ).', hint: '2(0.6)(0.8).', answer: '0.96' }]
  ),
];

const u7Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u07-l01',
    '7.1',
    'Vectores en R² y producto escalar (producto punto)',
    'Dados los vectores u = (3, 4) y v = (2, -1) en el plano cartesiano, calcula la magnitud de u y el producto escalar u · v.',
    'Magnitud: ||u|| = √(3² + 4²) = √(9 + 16) = √25 = 5. Producto escalar: u · v = (3)(2) + (4)(-1) = 6 - 4 = 2.',
    'En $\\mathbb{R}^2$, dados $\\vec{u} = (u_x, u_y)$ y $\\vec{v} = (v_x, v_y)$: $$\\text{Magnitud: } \\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2}, \\qquad \\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$$ Dos vectores son perpendiculares (ortogonales) si y solo si $\\vec{u} \\cdot \\vec{v} = 0$.',
    'Si $\\vec{u} = (2, 3)$ y $\\vec{v} = (-3, 2)$: $\\vec{u} \\cdot \\vec{v} = 2(-3) + 3(2) = -6 + 6 = 0$ (ortogonales).',
    [{ exercise: 'Calcula la magnitud del vector (6, 8).', hint: '√(36 + 64).', answer: '10' }]
  ),
];

const u8Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u08-l01',
    '8.1',
    'Medidas de posición: cuartiles, percentiles y diagrama de caja (Box Plot)',
    '¿Qué porcentaje de los datos se ubica por debajo del primer cuartil (Q1) y cuál es el rango intercuartílico (IQR)?',
    'El primer cuartil Q1 deja exactamente al 25% de los datos ordenados por debajo de él. El segundo cuartil Q2 es la mediana (50%) y el tercer cuartil Q3 deja al 75%. El rango intercuartílico es la diferencia IQR = Q3 - Q1.',
    'Las **medidas de posición** dividen la distribución en partes iguales: cuartiles ($4$ partes), deciles ($10$ partes) y percentiles ($100$ partes). El **diagrama de caja y bigotes** representa el mínimo, $Q_1$, la mediana $Q_2$, $Q_3$ y el máximo: $$\\text{IQR} = Q_3 - Q_1$$',
    'Los datos fuera de $[Q_1 - 1.5\\,\\text{IQR}, Q_3 + 1.5\\,\\text{IQR}]$ se consideran valores atípicos (outliers).',
    [{ exercise: '¿Qué porcentaje de los datos se encuentra entre Q1 y Q3?', hint: '75% - 25%.', answer: '50% de los datos' }]
  ),
];

export const GRADE_10_DATA: GradeCurriculumData = {
  id: '1-bachillerato',
  name: '1° Bachillerato',
  cycle: 'Educación Media',
  cycleId: 'educacion-media',
  description: 'Currículo oficial ESMATE de primer año de bachillerato: números reales, polinomios, desigualdades, funciones reales, trigonometría, vectores y estadística.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de primer año de bachillerato general y técnico.',
      units: [
        createCurriculumUnit(
          'mined-mat-1b-u01',
          1,
          'Números reales',
          '1-bachillerato',
          1,
          'Raíces n-ésimas, exponentes racionales, racionalización con conjugados e intervalos reales.',
          ['Opera radicales y exponentes racionales', 'Racionaliza denominadores', 'Modela intervalos en R'],
          u1Lessons1B,
          u1Questions1B,
          true
        ),
        createCurriculumUnit('mined-mat-1b-u02', 2, 'Operaciones con polinomios y números complejos', '1-bachillerato', 1, 'División sintética, Teorema del Residuo y cuerpo de los complejos C.', ['Factoriza polinomios y complejos'], u2Lessons1B),
        createCurriculumUnit('mined-mat-1b-u03', 3, 'Desigualdades', '1-bachillerato', 1, 'Desigualdades lineales dobles y cuadráticas con cuadro de signos.', ['Resuelve inecuaciones con signos'], u3Lessons1B),
        createCurriculumUnit('mined-mat-1b-u04', 4, 'Funciones reales', '1-bachillerato', 1, 'Dominio, rango, traslaciones f(x)=a(x-h)²+k e inyectividad.', ['Grafica funciones transformadas'], u4Lessons1B),
        createCurriculumUnit('mined-mat-1b-u05', 5, 'Resolución de triángulos oblicuángulos', '1-bachillerato', 2, 'Leyes de Senos y Cosenos en problemas trigonométricos.', ['Aplica leyes trigonométricas'], u5Lessons1B),
        createCurriculumUnit('mined-mat-1b-u06', 6, 'Identidades y ecuaciones trigonométricas', '1-bachillerato', 2, 'Identidades pitagóricas, ángulo doble y ecuaciones angulares.', ['Resuelve ecuaciones trigonométricas'], u6Lessons1B),
        createCurriculumUnit('mined-mat-1b-u07', 7, 'Vectores y números complejos', '1-bachillerato', 2, 'Magnitud, producto escalar u·v, forma polar y De Moivre.', ['Opera vectores en el plano'], u7Lessons1B),
        createCurriculumUnit('mined-mat-1b-u08', 8, 'Estadística descriptiva', '1-bachillerato', 2, 'Muestreo, cuartiles, percentiles y diagramas de caja (box-plot).', ['Interpreta diagramas de caja'], u8Lessons1B),
      ],
    },
  ],
};
