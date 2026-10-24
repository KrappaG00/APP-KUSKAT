import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 2° Bachillerato - Unidad 1
// Ecuaciones (Bicuadráticas, Radicales, Racionales)
// -----------------------------------------------------------------
const u1Archetypes2B: QuestionArchetype[] = [
  {
    generate: (v) => {
      const a = (v % 4) + 1;
      const b = (v % 3) + 2;
      const r1 = a * a;
      const r2 = b * b;
      const sum = r1 + r2;
      const prod = r1 * r2;
      return {
        statement: `Para resolver la ecuación bicuadrática $x^4 - ${sum}x^2 + ${prod} = 0$, se efectúa la sustitución de variable $u = x^2$. ¿Cuáles son las soluciones reales de la ecuación original?`,
        options: [
          `$x \\in \\{\\pm ${a}, \\pm ${b}\\}$`,
          `$x \\in \\{${r1}, ${r2}\\}$`,
          `$x \\in \\{\\pm ${r1}, \\pm ${r2}\\}$`,
          `$x \\in \\{${a}, ${b}\\}$`,
        ],
        correctAnswer: 'A',
        explanation: `Al sustituir $u = x^2$: $u^2 - ${sum}u + ${prod} = (u - ${r1})(u - ${r2}) = 0$. Obtenemos $u_1 = ${r1} \\implies x = \\pm \\sqrt{${r1}} = \\pm ${a}$, y $u_2 = ${r2} \\implies x = \\pm \\sqrt{${r2}} = \\pm ${b}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const k = (v % 5) + 3;
      const sq = k * k;
      return {
        statement: `Al resolver la ecuación con radicales $\\sqrt{x + ${v}} = ${k}$, ¿cuál es el valor de la incógnita $x$?`,
        options: [
          `$${sq + v}$`,
          `$${sq - v}$`,
          `$${k - v}$`,
          `$${sq * 2}$`,
        ],
        correctAnswer: 'B',
        explanation: `Elevando al cuadrado ambos miembros: $(\\sqrt{x + ${v}})^2 = ${k}^2 \\implies x + ${v} = ${sq} \\implies x = ${sq} - ${v} = ${sq - v}$. Verificando: $\\sqrt{${sq - v} + ${v}} = \\sqrt{${sq}} = ${k}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const c = (v % 4) + 2;
      return {
        statement: `Al elevar al cuadrado ambos miembros en una ecuación con radicales, es obligatorio verificar las soluciones en la ecuación original porque:`,
        options: [
          'La ecuación siempre carece de soluciones',
          'El grado se reduce a la mitad',
          'Pueden introducirse soluciones extrañas (falsas raíces)',
          'El signo del radical siempre se vuelve negativo',
        ],
        correctAnswer: 'C',
        explanation: `La operación de elevar al cuadrado no es una transformación biyectiva ($A = B \\implies A^2 = B^2$, pero $A^2 = B^2$ no implica necesariamente $A = B$). Por ello pueden surgir soluciones extrañas que no satisfacen la ecuación original.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      return {
        statement: `En la ecuación racional $\\frac{x}{x - ${a}} = 3$, ¿cuál es el valor restringido que $x$ no puede tomar en el dominio?`,
        options: [`$x \\neq 0$`, `$x \\neq -${a}$`, `$x \\neq ${a + 5}$`, `$x \\neq ${a}$`],
        correctAnswer: 'D',
        explanation: `En toda expresión racional el denominador no puede ser cero ($x - ${a} \\neq 0$), por lo que el valor prohibido o restringido del dominio es $x = ${a}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 4) + 1;
      const b = a + 3;
      return {
        statement: `Al resolver la ecuación racional $\\frac{1}{x} + \\frac{1}{2x} = \\frac{${b}}{${a * 6}}$, multiplicando por el mínimo común denominador, se obtiene una solución que es:`,
        options: [
          'Un número real bien definido',
          'Un número estrictamente negativo',
          'Una solución no real',
          'Indeterminada',
        ],
        correctAnswer: 'A',
        explanation: `Multiplicando por el MCD de los denominadores se transforma en una ecuación lineal entera de primer grado con solución real única verificable.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `Un sistema no lineal formado por una recta $y = mx + b$ y una parábola $y = ax^2 + c$ puede tener como máximo:`,
        options: [
          'Una única solución real',
          'Hasta dos soluciones reales distintas (dos puntos de intersección)',
          'Exactamente cuatro soluciones reales',
          'Infinitas soluciones en todos los casos',
        ],
        correctAnswer: 'B',
        explanation: `Al igualar ambas ecuaciones se obtiene una ecuación cuadrática $ax^2 - mx + (c - b) = 0$, la cual tiene a lo sumo dos soluciones reales distintas según el discriminante.`,
      };
    },
  },
  {
    generate: (v) => {
      const p = (v % 4) + 2;
      return {
        statement: `¿Cuántas soluciones complejas en total (contando reales e imaginarias) tiene cualquier ecuación bicuadrática no nula de grado $4$?`,
        options: ['2 soluciones', '3 soluciones', '4 soluciones por el Teorema Fundamental del Álgebra', '8 soluciones'],
        correctAnswer: 'C',
        explanation: `Por el Teorema Fundamental del Álgebra, todo polinomio de grado $n$ con coeficientes complejos tiene exactamente $n$ raíces en el cuerpo $\\mathbb{C}$, contadas con su multiplicidad. Para grado 4 tiene exactamente 4 raíces.`,
      };
    },
  },
  {
    generate: (v) => {
      const c = (v % 5) + 1;
      return {
        statement: `Al resolver $\\sqrt{2x + 1} = x - ${c}$, la ecuación equivalente tras elevar al cuadrado es de tipo:`,
        options: ['Cúbica', 'Lineal', 'Bicuadrática', 'Cuadrática de segundo grado'],
        correctAnswer: 'D',
        explanation: `Elevando al cuadrado: $2x + 1 = (x - ${c})^2 = x^2 - ${2 * c}x + ${c * c}$, la cual es una ecuación polinómica de segundo grado (cuadrática).`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `Si al resolver una ecuación bicuadrática $u = x^2$ se obtiene $u = -9$, ¿cuáles son los valores de $x$ en el cuerpo de los números complejos?`,
        options: [
          `$x = \\pm 3i$`,
          `$x = \\pm 3$`,
          `$x = -81$`,
          `$x = 0$`,
        ],
        correctAnswer: 'A',
        explanation: `$x^2 = -9 \\implies x = \\pm \\sqrt{-9} = \\pm \\sqrt{9} \\cdot \\sqrt{-1} = \\pm 3i$.`,
      };
    },
  },
  {
    generate: (v) => {
      const k = (v % 5) + 2;
      return {
        statement: `En la ecuación $x^4 - ${k * k} = 0$, al factorizar como diferencia de cuadrados se obtiene:`,
        options: [
          `$(x^2 - ${k})^2 = 0$`,
          `$(x^2 + ${k})(x^2 - ${k}) = 0$`,
          `$(x + ${k})^4 = 0$`,
          `$x^2(x^2 - ${k * k}) = 0$`,
        ],
        correctAnswer: 'B',
        explanation: `Tratando $x^4$ como $(x^2)^2$: $(x^2)^2 - ${k}^2 = (x^2 + ${k})(x^2 - ${k}) = 0$.`,
      };
    },
  },
];

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 2° Bachillerato - Unidad 3
// Secciones cónicas (Parábola, Circunferencia, Elipse, Hipérbola)
// -----------------------------------------------------------------
const u3Archetypes2B: QuestionArchetype[] = [
  {
    generate: (v) => {
      const p = (v % 6) + 1;
      const fourP = 4 * p;
      return {
        statement: `Dada la parábola canónica con foco en el eje horizontal $y^2 = ${fourP}x$, ¿cuáles son las coordenadas exactas de su foco $F$ y la ecuación de su directriz?`,
        options: [
          `$F(${p}, 0)$ y directriz $x = -${p}$`,
          `$F(0, ${p})$ y directriz $y = -${p}$`,
          `$F(-${p}, 0)$ y directriz $x = ${p}$`,
          `$F(${fourP}, 0)$ y directriz $x = -${fourP}$`,
        ],
        correctAnswer: 'A',
        explanation: `La ecuación canónica de la parábola horizontal con vértice en el origen es $y^2 = 4px$. Como $4p = ${fourP} \\implies p = ${p}$. El foco está en $F(p, 0) = F(${p}, 0)$ y la recta directriz es $x = -p = -${p}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const r = (v % 7) + 2;
      const r2 = r * r;
      const h = (v % 4) + 1;
      const k = (v % 3) + 2;
      return {
        statement: `¿Cuál es el radio $r$ y el centro $C(h, k)$ de la circunferencia cuya ecuación ordinaria es $(x - ${h})^2 + (y - ${k})^2 = ${r2}$?`,
        options: [
          `$C(-${h}, -${k})$ y radio $r = ${r2}$`,
          `$C(${h}, ${k})$ y radio $r = ${r}$`,
          `$C(${h}, ${k})$ y radio $r = ${r2}$`,
          `$C(0, 0)$ y radio $r = ${r}$`,
        ],
        correctAnswer: 'B',
        explanation: `La forma canónica desplazada de la circunferencia es $(x - h)^2 + (y - k)^2 = r^2$. El centro es $C(h, k) = C(${h}, ${k})$ y el radio es $r = \\sqrt{${r2}} = ${r}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 4) + 5;
      const b = (v % 3) + 2;
      const a2 = a * a;
      const b2 = b * b;
      return {
        statement: `En la elipse canónica horizontal $\\frac{x^2}{${a2}} + \\frac{y^2}{${b2}} = 1$, ¿cuál es la longitud de su semieje mayor $a$ y semieje menor $b$?`,
        options: [
          `$a = ${a2}$ y $b = ${b2}$`,
          `$a = ${b}$ y $b = ${a}$`,
          `$a = ${a}$ y $b = ${b}$`,
          `$a = ${a * 2}$ y $b = ${b * 2}$`,
        ],
        correctAnswer: 'C',
        explanation: `En la ecuación $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ con $a > b$: $a^2 = ${a2} \\implies a = ${a}$ (semieje mayor) y $b^2 = ${b2} \\implies b = ${b}$ (semieje menor).`,
      };
    },
  },
  {
    generate: (v) => {
      const a = 4;
      const b = 3;
      return {
        statement: `¿Cuáles son las ecuaciones de las asíntotas de la hipérbola canónica $\\frac{x^2}{${a * a}} - \\frac{y^2}{${b * b}} = 1$?`,
        options: [
          `$y = \\pm \\frac{${a}}{${b}}x$`,
          `$y = \\pm ${a}x$`,
          `$x = \\pm \\frac{${b}}{${a}}$`,
          `$y = \\pm \\frac{${b}}{${a}}x$`,
        ],
        correctAnswer: 'D',
        explanation: `Las asíntotas de una hipérbola canónica horizontal $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ son las rectas que pasan por el origen dadas por: $y = \\pm \\frac{b}{a}x = \\pm \\frac{${b}}{${a}}x$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cómo se define geométricamente el lugar geométrico de una parábola según el programa oficial del MINED?`,
        options: [
          'Conjunto de puntos del plano que equidistan de un punto fijo llamado foco y de una recta fija llamada directriz',
          'Conjunto de puntos cuya suma de distancias a dos focos fijos es constante',
          'Conjunto de puntos cuya diferencia de distancias a dos focos fijos es constante',
          'Conjunto de puntos que equidistan de un único punto central',
        ],
        correctAnswer: 'A',
        explanation: `Por definición de lugar geométrico cónico: la parábola está formada por todos los puntos $P(x, y)$ que cumplen $d(P, F) = d(P, l)$, donde $F$ es el foco y $l$ es la directriz.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cuál es el valor característico de la excentricidad $e$ para una elipse no circular?`,
        options: [
          `$e = 1$`,
          `$0 < e < 1$`,
          `$e > 1$`,
          `$e = 0$`,
        ],
        correctAnswer: 'B',
        explanation: `En la elipse, la relación focal $c < a$ determina que la excentricidad $e = \\frac{c}{a}$ cumpla estrictamente $0 < e < 1$. (Si $e = 1$ es parábola; si $e > 1$ es hipérbola; si $e = 0$ es circunferencia).`,
      };
    },
  },
  {
    generate: (v) => {
      const a = 5;
      const b = 3;
      const c = Math.sqrt(a * a - b * b);
      return {
        statement: `En una elipse con semieje mayor $a = ${a}$ y semieje menor $b = ${b}$, la distancia focal $c$ se calcula mediante:`,
        options: [
          `$c = \\sqrt{a^2 + b^2} = \\sqrt{34}$`,
          `$c = a + b = 8$`,
          `$c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = 4$`,
          `$c = a - b = 2$`,
        ],
        correctAnswer: 'C',
        explanation: `La relación pitagórica en la elipse es $a^2 = b^2 + c^2 \\implies c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = 4;
      const b = 3;
      return {
        statement: `En una hipérbola con semiejes $a = ${a}$ y $b = ${b}$, la relación fundamental entre $a$, $b$ y la distancia focal $c$ es:`,
        options: [
          `$a^2 = b^2 + c^2$`,
          `$b^2 = a^2 + c^2$`,
          `$c = a - b$`,
          `$c^2 = a^2 + b^2$`,
        ],
        correctAnswer: 'D',
        explanation: `En la hipérbola los focos se ubican más alejados que los vértices, cumpliéndose siempre la relación pitagórica $c^2 = a^2 + b^2$.`,
      };
    },
  },
  {
    generate: (v) => {
      const r = (v % 5) + 3;
      return {
        statement: `¿Cuál es la ecuación general de la circunferencia con centro en el origen $C(0, 0)$ y radio $r = ${r}$?`,
        options: [
          `$x^2 + y^2 - ${r * r} = 0$`,
          `$x^2 - y^2 = ${r * r}$`,
          `$x + y = ${r}$`,
          `$x^2 + y^2 + ${r} = 0$`,
        ],
        correctAnswer: 'A',
        explanation: `La circunferencia centrada en el origen tiene ecuación $x^2 + y^2 = r^2 \\implies x^2 + y^2 - ${r * r} = 0$.`,
      };
    },
  },
  {
    generate: (v) => {
      const p = (v % 4) + 2;
      return {
        statement: `Si una parábola vertical con vértice en el origen abre hacia arriba y tiene foco en $F(0, ${p})$, su ecuación canónica es:`,
        options: [
          `$y^2 = ${4 * p}x$`,
          `$x^2 = ${4 * p}y$`,
          `$x^2 = -${4 * p}y$`,
          `$y^2 = -${4 * p}x$`,
        ],
        correctAnswer: 'B',
        explanation: `Para una parábola vertical que abre hacia arriba con vértice en el origen, la ecuación es $x^2 = 4py = ${4 * p}y$.`,
      };
    },
  },
];

const u1Questions2B = generate50UnitQuestions(
  'mined-mat-2b-u01',
  '2-bachillerato',
  '2B',
  1,
  'Ecuaciones',
  'MINED ESMATE 2° Bachillerato',
  u1Archetypes2B
);

const u3Questions2B = generate50UnitQuestions(
  'mined-mat-2b-u03',
  '2-bachillerato',
  '2B',
  3,
  'Secciones cónicas',
  'MINED ESMATE 2° Bachillerato',
  u3Archetypes2B
);

const u1Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u01-l01',
    '1.1',
    'Ecuaciones bicuadráticas de la forma ax⁴ + bx² + c = 0',
    'Resuelve en el conjunto de los números reales la ecuación polinómica de cuarto grado: x⁴ - 13x² + 36 = 0.',
    'Efectuamos el cambio de variable u = x². Al sustituir, la ecuación se transforma en una cuadrática: u² - 13u + 36 = 0. Factorizamos: (u - 9)(u - 4) = 0, por lo que u₁ = 9 y u₂ = 4. Regresamos a la variable original: x² = 9 => x = ±3; x² = 4 => x = ±2. El conjunto solución es S = {-3, -2, 2, 3}.',
    'Una **ecuación bicuadrática** es una ecuación de cuarto grado con solo potencias pares de la incógnita: $$ax^4 + bx^2 + c = 0 \\quad (a \\neq 0)$$ Se resuelve mediante la sustitución $u = x^2$, resolviendo la ecuación cuadrática $au^2 + bu + c = 0$ y obteniendo luego $x = \\pm \\sqrt{u}$.',
    'En $x^4 - 5x^2 + 4 = 0$, $u^2 - 5u + 4 = (u-1)(u-4)=0 \\implies x \\in \\{\\pm 1, \\pm 2\\}$.',
    [{ exercise: 'Resuelve: x⁴ - 25x² + 144 = 0', hint: 'u = x², (u - 9)(u - 16) = 0.', answer: 'x ∈ {±3, ±4}' }]
  ),
  createPscerLesson(
    'mined-mat-2b-u01-l02',
    '1.2',
    'Ecuaciones con radicales y soluciones extrañas',
    'Resuelve la ecuación con raíz cuadrada: √(2x + 7) = x + 2 y determina si existen raíces extrañas.',
    'Elevamos ambos miembros al cuadrado: (√(2x + 7))² = (x + 2)². Desarrollamos: 2x + 7 = x² + 4x + 4. Igualamos a cero: x² + 2x - 3 = 0. Factorizamos: (x + 3)(x - 1) = 0, lo que da los candidatos x = -3 y x = 1. Comprobamos en la ecuación original: Para x = 1: √(2(1) + 7) = √9 = 3; 1 + 2 = 3 (Verdadero). Para x = -3: √(2(-3) + 7) = √1 = 1; -3 + 2 = -1; como 1 ≠ -1, x = -3 es una solución extraña. Solución única: x = 1.',
    'Al resolver **ecuaciones radicales** es indispensable comprobar cada candidato en la ecuación inicial para descartar soluciones introducidas por la elevación al cuadrado.',
    'La solución de $\\sqrt{x + 4} = 3$ es $x + 4 = 9 \\implies x = 5$.',
    [{ exercise: 'Resuelve y comprueba: √(3x + 1) = 4', hint: '3x + 1 = 16.', answer: 'x = 5' }]
  ),
];

const u2Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u02-l01',
    '2.1',
    'Línea recta: distancia euclidiana, punto medio y forma punto-pendiente',
    'Dados los puntos A(2, 3) y B(6, 11) en el mapa catastral de San Salvador, calcula la distancia entre ellos, el punto medio del segmento y la ecuación de la recta que los une.',
    'Distancia: d = √((6-2)² + (11-3)²) = √(4² + 8²) = √(16 + 64) = √80 = 4√5 ≈ 8.94. Punto medio: M = ((2+6)/2, (3+11)/2) = (4, 7). Pendiente: m = (11-3)/(6-2) = 8/4 = 2. Ecuación punto-pendiente: y - 3 = 2(x - 2) => y = 2x - 1.',
    'Fórmulas analíticas fundamentales de la recta en $\\mathbb{R}^2$: $$d(A, B) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \\qquad M\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right), \\qquad y - y_1 = m(x - x_1)$$ Rectas paralelas tienen $m_1 = m_2$; rectas perpendiculares cumplen $m_1 \\cdot m_2 = -1$.',
    'La distancia de un punto $P(x_0, y_0)$ a la recta $Ax + By + C = 0$ es $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.',
    [{ exercise: 'Calcula la distancia entre (0, 0) y (3, 4).', hint: '√(9 + 16).', answer: '5 unidades' }]
  ),
];

const u3Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u03-l01',
    '3.1',
    'La parábola: foco, directriz y ecuación canónica',
    'Deduce la ecuación de la parábola con vértice en el origen V(0, 0) y foco en F(3, 0).',
    'El eje de la parábola es el eje x (horizontal). El parámetro focal es p = 3. La directriz es la recta vertical x = -3. Todo punto P(x, y) equidista del foco y la directriz: d(P, F) = d(P, l) => √((x - 3)² + y²) = |x + 3|. Elevando al cuadrado: (x - 3)² + y² = (x + 3)² => x² - 6x + 9 + y² = x² + 6x + 9 => y² = 12x.',
    'Ecuaciones canónicas de la parábola con vértice en el origen: $$\\text{Horizontal: } y^2 = 4px \\quad (F(p, 0), \\text{dir: } x = -p), \\qquad \\text{Vertical: } x^2 = 4py \\quad (F(0, p), \\text{dir: } y = -p)$$',
    'Si $p > 0$ la parábola horizontal abre a la derecha; si $p < 0$ abre a la izquierda.',
    [{ exercise: '¿Cuál es el foco de la parábola y² = 16x?', hint: '4p = 16 => p = 4.', answer: 'F(4, 0)' }]
  ),
  createPscerLesson(
    'mined-mat-2b-u03-l02',
    '3.2',
    'La circunferencia: ecuación ordinaria y forma general',
    'Encuentra la ecuación general de la circunferencia con centro en C(2, -3) y radio r = 5.',
    'Forma ordinaria: (x - 2)² + (y - (-3))² = 5² => (x - 2)² + (y + 3)² = 25. Desarrollamos los binomios: x² - 4x + 4 + y² + 6y + 9 = 25. Simplificamos agrupando términos: x² + y² - 4x + 6y - 12 = 0.',
    'La **circunferencia** es el lugar geométrico de los puntos que equidistan de un centro $C(h, k)$ a distancia constante $r$: $$(x - h)^2 + (y - k)^2 = r^2 \\iff x^2 + y^2 + Dx + Ey + F = 0$$',
    'Para obtener centro y radio desde la forma general se completa cuadrados.',
    [{ exercise: '¿Cuál es el radio de (x - 1)² + (y - 4)² = 49?', hint: '√49.', answer: 'r = 7' }]
  ),
  createPscerLesson(
    'mined-mat-2b-u03-l03',
    '3.3',
    'La elipse: focos, semiejes y excentricidad',
    'Dada la elipse x²/25 + y²/9 = 1, calcula sus vértices, focos y excentricidad.',
    'Como 25 > 9, el eje mayor es horizontal sobre el eje x. a² = 25 => a = 5 (vértices A(±5, 0)). b² = 9 => b = 3 (vértices menores B(0, ±3)). Relación fundamental: a² = b² + c² => c² = 25 - 9 = 16 => c = 4 (focos F(±4, 0)). Excentricidad: e = c / a = 4 / 5 = 0.8.',
    'La **elipse** es el conjunto de puntos cuya suma de distancias a dos focos fijos es constante ($2a$): $$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b), \\qquad c = \\sqrt{a^2 - b^2}, \\qquad e = \\frac{c}{a} < 1$$',
    'Si $a = b$, la elipse se convierte en una circunferencia de radio $r = a$ y excentricidad $e = 0$.',
    [{ exercise: 'Calcula la distancia focal c si a = 13 y b = 5.', hint: '√(169 - 25) = √144.', answer: 'c = 12' }]
  ),
  createPscerLesson(
    'mined-mat-2b-u03-l04',
    '3.4',
    'La hipérbola: asíntotas y focos',
    'Dada la hipérbola x²/16 - y²/9 = 1, determina las ecuaciones de sus asíntotas y las coordenadas de sus focos.',
    'Eje transversal horizontal: a² = 16 => a = 4 (vértices A(±4, 0)). b² = 9 => b = 3. Relación fundamental: c² = a² + b² = 16 + 9 = 25 => c = 5 (focos F(±5, 0)). Las asíntotas son las rectas: y = ±(b/a)x => y = ±(3/4)x.',
    'La **hipérbola** es el lugar geométrico donde el valor absoluto de la diferencia de distancias a dos focos es constante ($2a$): $$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1, \\qquad c = \\sqrt{a^2 + b^2}, \\qquad \\text{Asíntotas: } y = \\pm \\frac{b}{a}x$$',
    'La excentricidad de la hipérbola siempre cumple $e = \\frac{c}{a} > 1$.',
    [{ exercise: '¿Cuáles son las asíntotas de x²/25 - y²/4 = 1?', hint: 'y = ±(b/a)x.', answer: 'y = ±(2/5)x' }]
  ),
];

const u4Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u04-l01',
    '4.1',
    'Funciones trascendentales I: función exponencial f(x) = a^x',
    'Modela el crecimiento de una colonia de bacterias en el laboratorio del MINSAL que se duplica cada hora comenzando con 500 bacterias.',
    'Al tiempo t = 0: N(0) = 500. A t = 1: 500 x 2 = 1,000. A t = 2: 500 x 2² = 2,000. La función exponencial que modela la población en la hora t es: N(t) = 500(2)^t.',
    'La **función exponencial** tiene la forma $f(x) = a^x$ con $a > 0$ y $a \\neq 1$. Su dominio son todos los reales $\\mathbb{R}$ y su rango es $(0, \\infty)$. La recta $y = 0$ (eje $x$) es su asíntota horizontal.',
    'Si $a > 1$ la función es estrictamente creciente; si $0 < a < 1$ es estrictamente decreciente.',
    [{ exercise: '¿Cuál es el intercepto con el eje y de f(x) = 3^x?', hint: 'f(0) = 3⁰.', answer: '(0, 1)' }]
  ),
];

const u5Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u05-l01',
    '5.1',
    'Funciones trascendentales II: logaritmos y función inversa',
    'Calcula log₂(32) y resuelve la ecuación logarítmica log₃(x + 2) = 4.',
    'Por definición: log_a(x) = y <=> a^y = x. Como 2⁵ = 32, log₂(32) = 5. Para la ecuación: log₃(x + 2) = 4 <=> 3⁴ = x + 2 => 81 = x + 2 => x = 79.',
    'La **función logarítmica** es la inversa de la función exponencial: $$y = \\log_a(x) \\iff a^y = x \\quad (x > 0, a > 0, a \\neq 1)$$ Propiedades clave: $\\log_a(xy) = \\log_a x + \\log_a y$, $\\log_a(x/y) = \\log_a x - \\log_a y$, $\\log_a(x^k) = k \\log_a x$.',
    'El logaritmo natural usa la base $e \\approx 2.71828$: $\\ln(x) = \\log_e(x)$.',
    [{ exercise: 'Calcula: log₁₀(1,000)', hint: '10³ = 1000.', answer: '3' }]
  ),
];

const u6Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u06-l01',
    '6.1',
    'Sucesiones aritméticas, geométricas y series infinitas',
    'Una persona ahorra $10 la primera semana y cada semana aumenta $4 respecto a la anterior. ¿Cuánto ahorra en la semana 15 y cuál es su ahorro acumulado?',
    'Es una sucesión aritmética con a₁ = 10 y diferencia d = 4. Término general: a₁₅ = a₁ + (15 - 1)d = 10 + 14(4) = 10 + 56 = $66. Suma de los 15 términos: S₁₅ = 15(a₁ + a₁₅) / 2 = 15(10 + 66) / 2 = 15(76) / 2 = 15 x 38 = $570.',
    'Fórmulas oficiales de sucesiones ESMATE: $$\\text{Aritmética: } a_n = a_1 + (n - 1)d, \\quad S_n = \\frac{n(a_1 + a_n)}{2}$$ $$\\text{Geométrica: } a_n = a_1 r^{n-1}, \\quad S_n = \\frac{a_1(1 - r^n)}{1 - r}, \\quad S_\\infty = \\frac{a_1}{1 - r} \\; (|r| < 1)$$',
    'La serie geométrica infinita $1 + \\frac{1}{2} + \\frac{1}{4} + \\dots$ converge a $S_\\infty = \\frac{1}{1 - 1/2} = 2$.',
    [{ exercise: 'Encuentra el término 10 de la sucesión aritmética con a₁ = 3 y d = 5.', hint: '3 + 9(5).', answer: '48' }]
  ),
];

const u7Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u07-l01',
    '7.1',
    'Métodos de conteo: permutaciones, combinaciones y Teorema del Binomio',
    'De un grupo de 10 estudiantes se desea elegir un comité de 3 personas sin importar el orden de los cargos. ¿Cuántos comités distintos se pueden formar?',
    'Como el orden no importa, es una combinación de 10 elementos tomados de 3 en 3: C(10, 3) = 10! / (3! x 7!) = (10 x 9 x 8) / (3 x 2 x 1) = 720 / 6 = 120 comités.',
    'Técnicas combinatorias fundamentales: $$\\text{Permutación (orden sí importa): } P(n, r) = \\frac{n!}{(n - r)!}, \\qquad \\text{Combinación (orden no importa): } C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}$$',
    'El Teorema del Binomio de Newton expande $(a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k$.',
    [{ exercise: 'Calcula C(5, 2)', hint: '(5 x 4) / (2 x 1).', answer: '10' }]
  ),
];

const u8Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u08-l01',
    '8.1',
    'Probabilidad condicional, eventos independientes y Teorema de Bayes',
    'En un hospital de San Salvador, el 60% de los pacientes son atendidos en el turno matutino y el 40% en el vespertino. La probabilidad de requerir hospitalización es 10% en la mañana y 20% en la tarde. Si un paciente es seleccionado al azar y requiere hospitalización, ¿cuál es la probabilidad de que haya sido atendido en la mañana?',
    'Probabilidad total de hospitalización: P(H) = P(M)P(H|M) + P(V)P(H|V) = (0.60)(0.10) + (0.40)(0.20) = 0.06 + 0.08 = 0.14. Por el Teorema de Bayes: P(M|H) = P(M)P(H|M) / P(H) = 0.06 / 0.14 = 6/14 = 3/7 ≈ 42.86%.',
    'Leyes formales de probabilidad del MINED: $$\\text{Probabilidad condicional: } P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\qquad \\text{Teorema de Bayes: } P(A_i|B) = \\frac{P(A_i)P(B|A_i)}{\\sum P(A_k)P(B|A_k)}$$',
    'Dos eventos son **independientes** si y solo si $P(A \\cap B) = P(A) \\cdot P(B)$.',
    [{ exercise: 'Si P(A ∩ B) = 0.12 y P(B) = 0.40, calcula P(A|B).', hint: '0.12 / 0.40.', answer: '0.30' }]
  ),
];

export const GRADE_11_DATA: GradeCurriculumData = {
  id: '2-bachillerato',
  name: '2° Bachillerato',
  cycle: 'Educación Media',
  cycleId: 'educacion-media',
  description: 'Currículo oficial ESMATE de segundo año de bachillerato: ecuaciones bicuadráticas/radicales, geometría analítica de cónicas, funciones trascendentales, sucesiones y probabilidad (AVANZO/PAES/UES).',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de segundo año de bachillerato enfocado en preparación para la prueba AVANZO y admisión universitaria.',
      units: [
        createCurriculumUnit(
          'mined-mat-2b-u01',
          1,
          'Ecuaciones',
          '2-bachillerato',
          1,
          'Ecuaciones bicuadráticas, ecuaciones con radicales, ecuaciones racionales y sistemas no lineales.',
          ['Resuelve ecuaciones bicuadráticas', 'Elimina radicales', 'Descarta soluciones extrañas'],
          u1Lessons2B,
          u1Questions2B,
          true
        ),
        createCurriculumUnit('mined-mat-2b-u02', 2, 'Línea recta', '2-bachillerato', 1, 'Distancia euclidiana, punto medio, ecuación punto-pendiente y distancia punto-recta.', ['Modela rectas cartesianas'], u2Lessons2B),
        createCurriculumUnit(
          'mined-mat-2b-u03',
          3,
          'Secciones cónicas',
          '2-bachillerato',
          1,
          'Parábola, circunferencia, elipse e hipérbola con sus elementos geométricos y asíntotas.',
          ['Determina elementos de cónicas', 'Calcula focos y directriz', 'Traza asíntotas de la hipérbola'],
          u3Lessons2B,
          u3Questions2B,
          true
        ),
        createCurriculumUnit('mined-mat-2b-u04', 4, 'Funciones trascendentales I', '2-bachillerato', 1, 'Función exponencial f(x) = a^x, propiedades y aplicaciones.', ['Modela crecimiento exponencial'], u4Lessons2B),
        createCurriculumUnit('mined-mat-2b-u05', 5, 'Funciones trascendentales II', '2-bachillerato', 2, 'Función logarítmica, propiedades y ecuaciones logarítmicas.', ['Opera propiedades logarítmicas'], u5Lessons2B),
        createCurriculumUnit('mined-mat-2b-u06', 6, 'Sucesiones aritméticas y geométricas', '2-bachillerato', 2, 'Término general a_n, sumas finitas Sn y series geométricas infinitas.', ['Calcula sumas de progresiones'], u6Lessons2B),
        createCurriculumUnit('mined-mat-2b-u07', 7, 'Métodos de conteo', '2-bachillerato', 2, 'Permutaciones, combinaciones y Teorema del Binomio de Newton.', ['Aplica técnicas combinatorias'], u7Lessons2B),
        createCurriculumUnit('mined-mat-2b-u08', 8, 'Probabilidad', '2-bachillerato', 2, 'Axiomas de Kolmogorov, probabilidad condicional y Teorema de Bayes.', ['Calcula probabilidad condicional'], u8Lessons2B),
      ],
    },
  ],
};
