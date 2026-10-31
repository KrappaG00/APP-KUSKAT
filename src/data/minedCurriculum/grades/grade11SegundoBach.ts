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
    'Un ingeniero en sistemas diseña un algoritmo de optimización cuadrática cuya curva de convergencia matemática está modelada por la ecuación polinómica de cuarto grado: $x^4 - 13x^2 + 36 = 0$. Para determinar los cuatro puntos de equilibrio estables en los que el algoritmo se estabiliza, se requiere transformar la expresión de cuarto grado en una ecuación cuadrática equivalente utilizando una sustitución de variable adecuada, resolver las raíces secundarias resultantes y luego recuperar todas las soluciones en el conjunto de los números reales.',
    'Para resolver la ecuación de cuarto grado $x^4 - 13x^2 + 36 = 0$, observamos que la variable únicamente aparece elevada a exponentes pares ($4$ y $2$). Por consiguiente, aplicamos la sustitución de variable $u = x^2$. Elevando al cuadrado ambos miembros de la sustitución obtenemos $u^2 = (x^2)^2 = x^4$. Al reemplazar estas expresiones en la ecuación inicial, transformamos el polinomio bicuadrático en la ecuación cuadrática estándar de segundo grado: $u^2 - 13u + 36 = 0$. Procedemos a resolverla factorizando el trinomio cuadrático: buscamos dos números cuyo producto sea $+36$ y cuya suma algebraica sea $-13$. Dichos números son $-9$ y $-4$, por lo que la factorización es $(u - 9)(u - 4) = 0$. Igualando cada factor a cero obtenemos dos soluciones para la variable auxiliar: $u_1 = 9$ y $u_2 = 4$. Finalmente, revertimos la sustitución original para calcular los valores de la incógnita $x$: a partir de $x^2 = 9$ obtenemos $x = \\pm \\sqrt{9} = \\pm 3$; y a partir de $x^2 = 4$ calculamos $x = \\pm \\sqrt{4} = \\pm 2$. Por lo tanto, el conjunto solución completo de la ecuación bicuadrática en los números reales posee exactamente cuatro raíces: $S = \\{-3, -2, 2, 3\\}$.',
    'Una **ecuación bicuadrática** es una ecuación algebraica polinómica de cuarto grado que presenta exclusivamente potencias de exponente par respecto a la incógnita, adoptando la forma canónica general $ax^4 + bx^2 + c = 0$, donde los coeficientes numéricos son reales y se cumple que $a \\neq 0$. El método estándar universal de resolución consiste en efectuar la sustitución o cambio de variable auxiliar $u = x^2$, lo cual transforma inmediatamente la expresión de cuarto grado en una ecuación cuadrática equivalente de segundo grado: $au^2 + bu + c = 0$. A continuación, se calculan las raíces intermedias $u_1$ y $u_2$ empleando métodos algebraicos de factorización o la fórmula general cuadrática $u = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Una vez obtenidos estos valores auxiliares, se revierte el cambio de variable inicial mediante la extracción de raíces cuadradas: $x = \\pm \\sqrt{u_1}$ y $x = \\pm \\sqrt{u_2}$. Según el signo algebraico del discriminante y de las raíces secundarias, una ecuación bicuadrática puede tener cuatro soluciones reales distintas, dos soluciones reales y dos imaginarias conjugadas, o cuatro soluciones imaginarias puras.',
    'En $x^4 - 5x^2 + 4 = 0$, con $u = x^2$ se tiene $u^2 - 5u + 4 = (u-1)(u-4)=0 \\implies x \\in \\{\\pm 1, \\pm 2\\}$.',
    [
      { exercise: 'Resuelve la ecuación bicuadrática: x⁴ - 29x² + 100 = 0', hint: 'Haz el cambio de variable u = x² y factoriza (u - 25)(u - 4) = 0.', answer: 'x ∈ {±2, ±5}' },
      { exercise: 'Halla las soluciones reales de la ecuación: x⁴ - 8x² - 9 = 0', hint: 'Factoriza (u - 9)(u + 1) = 0 y descarta la raíz negativa en R.', answer: 'x ∈ {±3}' },
      { exercise: 'Resuelve la ecuación bicuadrática con coeficiente: 4x⁴ - 37x² + 9 = 0', hint: 'Con u = x², factoriza por tijeras (4u - 1)(u - 9) = 0.', answer: 'x ∈ {±1/2, ±3}' }
    ],
    [
      'Ejemplo 1 (Bicuadrática con cuatro raíces enteras): Resolver la ecuación bicuadrática $x^4 - 5x^2 + 4 = 0$. Paso 1: Hacemos el cambio de variable $u = x^2$, transformando la ecuación en $u^2 - 5u + 4 = 0$. Paso 2: Factorizamos el trinomio: $(u - 1)(u - 4) = 0$, lo que genera las soluciones $u = 1$ y $u = 4$. Paso 3: Retornamos a la variable $x$: $x^2 = 1 \\implies x = \\pm 1$; y $x^2 = 4 \\implies x = \\pm 2$. Solución: El conjunto solución es $S = \\{-2, -1, 1, 2\\}$.',
      'Ejemplo 2 (Bicuadrática mónina factorizable): Resolver la ecuación bicuadrática $x^4 - 10x^2 + 9 = 0$. Paso 1: Sustituimos la variable auxiliar $u = x^2$ para transformar el polinomio en la cuadrática estándar $u^2 - 10u + 9 = 0$. Paso 2: Factorizamos buscando dos números cuyo producto sea nueve positivo y cuya suma algebraica sea diez negativo: $(u - 9)(u - 1) = 0$, resultando las soluciones auxiliares $u = 9$ y $u = 1$. Paso 3: Despejamos la incógnita original extrayendo la raíz cuadrada en ambos miembros: $x^2 = 9 \\implies x = \\pm 3$; y de manera semejante $x^2 = 1 \\implies x = \\pm 1$. Solución: Las cuatro soluciones reales son $x \\in \\{-3, -1, 1, 3\\}$.',
      'Ejemplo 3 (Bicuadrática con raíces irracionales): Resolver la ecuación bicuadrática $2x^4 - 7x^2 + 3 = 0$. Paso 1: Sea el cambio de variable $u = x^2$, transformando la expresión en la cuadrática no mónina $2u^2 - 7u + 3 = 0$. Paso 2: Factorizamos mediante el método de tijeras o aspas: $(2u - 1)(u - 3) = 0$, por lo que obtenemos las soluciones secundarias $u = \\frac{1}{2}$ y $u = 3$. Paso 3: Despejamos la incógnita $x$ racionalizando el radical cuando sea necesario: $x = \\pm \\sqrt{\\frac{1}{2}} = \\pm \\frac{\\sqrt{2}}{2}$; y para la segunda raíz $x = \\pm \\sqrt{3}$. Solución: El conjunto solución completo contiene cuatro raíces irracionales: $S = \\{ \\pm \\frac{\\sqrt{2}}{2}, \\pm \\sqrt{3} \\}$.',
      'Ejemplo 4 (Bicuadrática con dos raíces reales y dos complejas): Resolver en los números reales la ecuación bicuadrática $x^4 - 3x^2 - 4 = 0$. Paso 1: Con $u = x^2$, escribimos $u^2 - 3u - 4 = 0$. Paso 2: Factorizamos: $(u - 4)(u + 1) = 0$, dando $u = 4$ y $u = -1$. Paso 3: Evaluamos las raíces: $x^2 = 4 \\implies x = \\pm 2$. Para $x^2 = -1$, no existen raíces reales ($\\pm i$). Solución: Las únicas soluciones reales son $x = -2$ y $x = 2$.',
      'Ejemplo 5 (Bicuadrática con coeficientes de cuadrados perfectos): Resolver la ecuación bicuadrática $x^4 - 25x^2 + 144 = 0$. Paso 1: Cambiamos variable $u = x^2$, obteniendo $u^2 - 25u + 144 = 0$. Paso 2: Factorizamos: $(u - 16)(u - 9) = 0$, lo que produce $u = 16$ y $u = 9$. Paso 3: Despejamos la incógnita original: $x = \\pm \\sqrt{16} = \\pm 4$; y $x = \\pm \\sqrt{9} = \\pm 3$. Solución: Las soluciones reales son $x \\in \\{-4, -3, 3, 4\\}$.'
    ]
  ),
  createPscerLesson(
    'mined-mat-2b-u01-l02',
    '1.2',
    'Ecuaciones con radicales y comprobación de raíces extrañas',
    'En un problema de cinemática aplicado al diseño vial, la velocidad de diseño $v$ y la distancia de frenado seguro $x$ en metros se relacionan según la ecuación que involucra una raíz cuadrada: $\\sqrt{2x + 7} = x + 2$. Para evitar accidentes y calibrar adecuadamente los semáforos, el equipo de ingenieros viales debe despejar la incógnita $x$ elevando ambos miembros de la ecuación al cuadrado, resolver la ecuación cuadrática resultante y efectuar una rigurosa comprobación en la ecuación original para detectar y descartar posibles soluciones extrañas generadas por la elevación de potencias.',
    'Para resolver la ecuación con radicales $\\sqrt{2x + 7} = x + 2$, aislamos el radical en el miembro izquierdo, el cual ya se encuentra despejado. Elevamos al cuadrado ambos miembros de la igualdad con el objetivo de eliminar la raíz: $(\\sqrt{2x + 7})^2 = (x + 2)^2$. Desarrollamos el binomio al cuadrado en el miembro derecho aplicando el producto notable $(a + b)^2 = a^2 + 2ab + b^2$, obteniendo: $2x + 7 = x^2 + 4x + 4$. Transponemos todos los términos hacia el miembro derecho para igualar la ecuación a cero: $x^2 + 4x - 2x + 4 - 7 = 0 \\implies x^2 + 2x - 3 = 0$. Factorizamos el trinomio buscando dos números que multiplicados den $-3$ y sumados den $+2$: $(x + 3)(x - 1) = 0$. Los valores candidatos a solución son $x = -3$ y $x = 1$. Dado que elevar al cuadrado no es una transformación biunívoca, es estrictamente obligatorio verificar cada candidato en la ecuación inicial: 1. Para $x = 1$: $\\sqrt{2(1) + 7} = \\sqrt{9} = 3$; $1 + 2 = 3$. Como $3 = 3$, $x = 1$ es válida. 2. Para $x = -3$: $\\sqrt{2(-3) + 7} = \\sqrt{1} = 1$; $-3 + 2 = -1$. Como $1 \\neq -1$, $x = -3$ es una **solución extraña**. Concluimos que la única solución admisible es $x = 1$.',
    'Una **ecuación radical o irracional** es aquella en la que la incógnita se encuentra bajo el signo del radical. El método formal de resolución requiere aislar el término con radical en un miembro y elevar ambos miembros a la potencia del índice de la raíz para cancelarla. No obstante, dado que la implicación $A = B \\implies A^2 = B^2$ es válida pero el recíproco $A^2 = B^2 \\not\\implies A = B$ no es necesariamente cierto (ya que también podría ser $A = -B$), el proceso algebraico puede introducir **soluciones extrañas o falsas raíces**. Por esta razón metodológica invariable, la **comprobación directa** de cada raíz candidata en la ecuación original constituye una fase indispensable del algoritmo de resolución.',
    'Verificación de raíz: $\\sqrt{x + 4} = 3 \\implies x + 4 = 9 \\implies x = 5$, y comprobando $\\sqrt{5 + 4} = 3$ es correcta.',
    [
      { exercise: 'Resuelve y comprueba la ecuación radical: √(3x + 4) = x', hint: 'Eleva al cuadrado ambos miembros, factoriza x² - 3x - 4 = 0 y descarta la raíz negativa.', answer: 'x = 4 (x = -1 es solución extraña)' },
      { exercise: 'Resuelve la ecuación racional con denominadores lineales: 2 / (x - 3) = 5 / (x + 3)', hint: 'Multiplica en cruz: 2(x + 3) = 5(x - 3) verificando que x ≠ ±3.', answer: 'x = 7' },
      { exercise: 'Resuelve y verifica la ecuación: √(x + 12) = x', hint: 'x² - x - 12 = 0.', answer: 'x = 4 (x = -3 es extraña)' }
    ],
    [
      'Ejemplo 1 (Ecuación con un solo radical lineal): Resolver la ecuación con radical $\\sqrt{x + 5} = 4$. Paso 1: Elevamos ambos miembros al cuadrado: $(\\sqrt{x + 5})^2 = 4^2$. Paso 2: Desarrollamos la ecuación lineal resultante: $x + 5 = 16 \\implies x = 16 - 5 = 11$. Paso 3: Comprobamos en la ecuación original: $\\sqrt{11 + 5} = \\sqrt{16} = 4$. La igualdad se verifica idénticamente. Solución: La solución es $x = 11$.',
      'Ejemplo 2 (Detección de solución extraña por signo negativo): Resolver la ecuación $\\sqrt{4x + 1} = x - 1$. Paso 1: Elevamos al cuadrado: $(\\sqrt{4x + 1})^2 = (x - 1)^2 \\implies 4x + 1 = x^2 - 2x + 1$. Paso 2: Igualamos a cero: $x^2 - 6x = 0 \\implies x(x - 6) = 0$, lo que genera los candidatos $x = 0$ y $x = 6$. Paso 3: Comprobamos: para $x = 0$ tenemos $\\sqrt{1} = -1$ (falso, raíz extraña); para $x = 6$ tenemos $\\sqrt{25} = 5$ y $6 - 1 = 5$ (verdadero). Solución: La única solución válida es $x = 6$.',
      'Ejemplo 3 (Ecuación con dos radicales cuadráticos): Resolver la ecuación con dos radicales $\\sqrt{2x + 3} - \\sqrt{x + 1} = 1$. Paso 1: Aislamos un radical: $\\sqrt{2x + 3} = 1 + \\sqrt{x + 1}$. Paso 2: Elevamos al cuadrado: $2x + 3 = 1 + 2\\sqrt{x + 1} + x + 1 \\implies x + 1 = 2\\sqrt{x + 1}$. Paso 3: Elevamos al cuadrado nuevamente: $(x + 1)^2 = 4(x + 1) \\implies (x + 1)(x - 3) = 0$, obteniendo $x = -1$ y $x = 3$. Al verificar ambos candidatos en la ecuación original, ambos satisfacen la igualdad. Solución: Las soluciones son $x = -1$ y $x = 3$.',
      'Ejemplo 4 (Ecuación fraccionaria o racional): Resolver la ecuación racional $\\frac{x}{x - 2} + \\frac{1}{x} = 1$. Paso 1: Identificamos las restricciones del dominio: $x \\neq 0$ y $x \\neq 2$. Paso 2: Multiplicamos toda la ecuación por el mínimo común denominador $x(x - 2)$: $x^2 + (x - 2) = x(x - 2) \\implies x^2 + x - 2 = x^2 - 2x$. Paso 3: Simplificamos los términos: $3x = 2 \\implies x = \\frac{2}{3}$. Como $\\frac{2}{3}$ no coincide con los valores prohibidos, la solución es válida. Solución: $x = \\frac{2}{3}$.',
      'Ejemplo 5 (Ecuación radical sin solución real): Resolver la ecuación radical $\\sqrt{3x - 2} = -4$. Paso 1: Analizamos la definición del radical con índice par en el cuerpo de los números reales. Paso 2: Por definición, el radical principal aritmético $\\sqrt{u}$ es siempre mayor o igual a cero para todo radicando válido. Paso 3: Dado que el miembro izquierdo es no negativo ($\\ge 0$) y el miembro derecho es estrictamente negativo ($-4 < 0$), no existe ningún valor real que satisfaga la igualdad. Solución: La ecuación carece de solución en el conjunto de los números reales ($S = \\emptyset$).'
    ]
  ),
];

const u2Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u02-l01',
    '2.1',
    'Línea recta: distancia euclidiana, punto medio y forma punto-pendiente',
    'Un equipo técnico de catastro y ordenamiento territorial de la Alcaldía de San Salvador debe trazar una nueva línea de tendido de fibra óptica entre dos torres de telecomunicaciones. La torre principal $A$ está georreferenciada en las coordenadas cartesianas $(2, 3)$ en kilómetros, mientras que la torre repetidora $B$ se ubica en las coordenadas $(6, 11)$. Se requiere calcular con precisión analítica la distancia euclidiana en línea recta entre ambas torres, determinar las coordenadas exactas de la estación intermedia de empalme situada en el punto medio del segmento, deducir la pendiente y la ecuación en la forma punto-pendiente y general de la recta que las une, y calcular la distancia más corta desde un centro escolar ubicado en el punto $P(1, 8)$ hasta la línea de tendido.',
    'Para calcular la distancia euclidiana entre los puntos $A(2, 3)$ y $B(6, 11)$, aplicamos la fórmula deducida del Teorema de Pitágoras: $d(A, B) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} = \\sqrt{(6 - 2)^2 + (11 - 3)^2} = \\sqrt{4^2 + 8^2} = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5} \\approx 8.94\\text{ km}$. Las coordenadas del punto medio $M$, donde se instalará la estación intermedia de empalme, se obtienen mediante el promedio aritmético de las coordenadas de los extremos: $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) = \\left(\\frac{2 + 6}{2}, \\frac{3 + 11}{2}\\right) = (4, 7)$. A continuación, calculamos la pendiente de la recta como la razón entre la variación vertical y horizontal: $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$. Escribimos la ecuación en la forma punto-pendiente tomando el punto $A$: $y - 3 = 2(x - 2)$, que al desarrollarse da $y = 2x - 1$, o en su forma general $2x - y - 1 = 0$, donde los coeficientes son $A = 2$, $B = -1$ y $C = -1$. Por último, para calcular la distancia desde el centro escolar $P(1, 8)$ hasta la recta, aplicamos la fórmula de la distancia de un punto a una recta: $d(P, r) = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|2(1) + (-1)(8) + (-1)|}{\\sqrt{2^2 + (-1)^2}} = \\frac{|2 - 8 - 1|}{\\sqrt{4 + 1}} = \\frac{|-7|}{\\sqrt{5}} = \\frac{7}{\\sqrt{5}} = \\frac{7\\sqrt{5}}{5} \\approx 3.13\\text{ km}$.',
    'En el marco conceptual de la geometría analítica en el plano cartesiano bidimensional $\\mathbb{R}^2$, una **línea recta** se define rigurosamente como el lugar geométrico de todos los puntos tales que, tomados dos puntos cualesquiera distintos, la razón de cambio o pendiente se mantiene estrictamente constante. Las herramientas analíticas fundamentales establecidas por el programa oficial MINED-ESMATE comprenden: 1. **Distancia Euclidiana y Punto Medio**: La distancia entre dos puntos cardinales se calcula mediante el teorema de Pitágoras $d(P_1, P_2) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, mientras que las coordenadas del punto de división media equidistante son $M = (\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2})$. 2. **Ecuaciones Canónicas de la Recta**: La forma punto-pendiente se formula como $y - y_1 = m(x - x_1)$, la forma pendiente-intercepto como $y = mx + b$, y la forma general implícita como $Ax + By + C = 0$. 3. **Criterios de Paralelismo y Perpendicularidad**: Dos rectas no verticales son paralelas si y solamente si sus pendientes son idénticas ($m_1 = m_2$), y son perpendiculares si y solo si el producto algebraico de sus pendientes es igual a menos uno ($m_1 \\cdot m_2 = -1$). 4. **Distancia de un Punto a una Recta**: La longitud del segmento perpendicular desde cualquier punto coordenado $P(x_0, y_0)$ hasta una recta general viene dada por la expresión normalizada $d(P, l) = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.',
    'Ecuación punto-pendiente: $y - 3 = 2(x - 2) \\implies y = 2x - 1$.',
    [
      { exercise: 'Calcula la distancia euclidiana entre los puntos (1, 2) y (4, 6)', hint: 'd = √((4-1)² + (6-2)²) = √(9 + 16) = √25.', answer: '5 unidades' },
      { exercise: 'Encuentra la pendiente de la recta que pasa por (2, 5) y (6, 13)', hint: 'm = (y₂ - y₁) / (x₂ - x₁) = (13 - 5) / (6 - 2).', answer: 'm = 2' },
      { exercise: 'Calcula la distancia del origen (0, 0) a la recta 4x + 3y - 15 = 0', hint: 'd = |4(0) + 3(0) - 15| / √(4² + 3²) = 15 / 5.', answer: '3 unidades' }
    ],
    [
      'Ejemplo 1 (Distancia y punto medio entre dos puntos): Hallar la distancia y el punto medio entre los puntos $P(-3, 2)$ y $Q(5, -4)$. Paso 1: Aplicamos la distancia euclidiana: $d = \\sqrt{(5 - (-3))^2 + (-4 - 2)^2} = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$. Paso 2: Calculamos el punto medio: $M = (\\frac{-3 + 5}{2}, \\frac{2 + (-4)}{2}) = (\\frac{2}{2}, \\frac{-2}{2}) = (1, -1)$. Solución: La distancia es $10$ unidades y el punto medio es $M(1, -1)$.',
      'Ejemplo 2 (Ecuación punto-pendiente y forma general): Encontrar la ecuación de la recta que pasa por $(3, -2)$ con pendiente $m = -\\frac{3}{4}$. Paso 1: Usamos la forma punto-pendiente: $y - (-2) = -\\frac{3}{4}(x - 3)$. Paso 2: Multiplicamos por cuatro para eliminar denominadores: $4(y + 2) = -3(x - 3) \\implies 4y + 8 = -3x + 9$. Paso 3: Agrupamos en forma general: $3x + 4y - 1 = 0$. Solución: La ecuación general es $3x + 4y - 1 = 0$.',
      'Ejemplo 3 (Criterio de perpendicularidad entre rectas): Determinar si las rectas $l_1: 2x - 3y + 6 = 0$ y $l_2: 3x + 2y - 8 = 0$ son perpendiculares. Paso 1: Despejamos la pendiente de $l_1$: $-3y = -2x - 6 \\implies m_1 = \\frac{2}{3}$. Paso 2: Despejamos la pendiente de $l_2$: $2y = -3x + 8 \\implies m_2 = -\\frac{3}{2}$. Paso 3: Calculamos el producto de pendientes: $m_1 \\cdot m_2 = (\\frac{2}{3})(-\\frac{3}{2}) = -1$. Solución: Las rectas son estrictamente perpendiculares.',
      'Ejemplo 4 (Distancia de un punto a una recta general): Calcular la distancia del punto $P(2, 5)$ a la recta $3x - 4y + 4 = 0$. Paso 1: Identificamos los coeficientes $A = 3$, $B = -4$, $C = 4$ y las coordenadas $x_0 = 2$, $y_0 = 5$. Paso 2: Sustituimos en la fórmula de distancia: $d = \\frac{|3(2) - 4(5) + 4|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|6 - 20 + 4|}{\\sqrt{9 + 16}} = \\frac{|-10|}{\\sqrt{25}}$. Paso 3: Calculamos el cociente: $\\frac{10}{5} = 2$. Solución: La distancia del punto a la recta es exactamente $2$ unidades.',
      'Ejemplo 5 (Ecuación de la recta mediatriz): Hallar la ecuación de la recta mediatriz del segmento que une $A(1, 1)$ y $B(5, 5)$. Paso 1: Calculamos el punto medio de $AB$: $M = (\\frac{1+5}{2}, \\frac{1+5}{2}) = (3, 3)$. Paso 2: Calculamos la pendiente de $AB$: $m_{AB} = \\frac{5 - 1}{5 - 1} = 1$; la pendiente perpendicular es $m_\\perp = -\\frac{1}{1} = -1$. Paso 3: Escribimos la recta por $M$ con pendiente $m_\\perp$: $y - 3 = -1(x - 3) \\implies y = -x + 6$. Solución: La ecuación de la mediatriz es $x + y - 6 = 0$.'
    ]
  ),
];

const u3Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u03-l01',
    '3.1',
    'La parábola: foco, directriz y ecuación canónica',
    'Un ingeniero en telecomunicaciones diseña una antena parabólica reflectora para la captación de señales satelitales en una estación terrena. La sección transversal de la antena se modela mediante una parábola con vértice en el origen de coordenadas $V(0, 0)$ en centímetros, cuyo eje de simetría coincide con el eje horizontal de las abscisas $x$. El receptor de señal de alta ganancia debe situarse exactamente en el foco $F(3, 0)$. Se solicita deducir la ecuación analítica canónica de la parábola a partir de la definición de lugar geométrico de puntos equidistantes del foco y de la recta directriz, determinar la ecuación de la directriz y calcular el ancho focal o lado recto ($LR$).',
    'Por definición geométrica, la **parábola** es el lugar geométrico de todos los puntos $P(x, y)$ del plano cartesiano cuya distancia al foco fijo $F(p, 0)$ es exactamente igual a su distancia a la recta directriz fija $d$. En nuestro caso, como el vértice es el origen $V(0, 0)$ y el foco es $F(3, 0)$, el parámetro focal es $p = 3$. Dado que el foco se ubica sobre el eje positivo de las abscisas, la recta directriz es la recta vertical paralela al eje $y$ situada a una distancia $p$ a la izquierda del vértice: su ecuación es $x = -p \\implies x = -3$, o bien $x + 3 = 0$. Para deducir la ecuación analítica, igualamos la distancia del punto genérico $P(x, y)$ al foco con su distancia perpendicular a la directriz: $d(P, F) = d(P, d) \\implies \\sqrt{(x - 3)^2 + (y - 0)^2} = |x - (-3)| = |x + 3|$. Elevamos ambos miembros al cuadrado para suprimir el radical y las barras de valor absoluto: $(x - 3)^2 + y^2 = (x + 3)^2$. Desarrollamos los binomios al cuadrado aplicando productos notables: $x^2 - 6x + 9 + y^2 = x^2 + 6x + 9$. Cancelamos los términos idénticos $x^2$ y $9$ presentes en ambos miembros: $-6x + y^2 = 6x$. Despejamos el término cuadrático transponiendo $-6x$: $y^2 = 6x + 6x \\implies y^2 = 12x$. Esta representa la ecuación canónica horizontal, donde $4p = 4(3) = 12$. Finalmente, el ancho del lado recto es $LR = |4p| = |12| = 12\\text{ cm}$.',
    'Una **parábola** es el conjunto de puntos del plano que equidistan de un punto fijo llamado **foco ($F$)** y de una recta fija llamada **directriz ($d$)**. La distancia del vértice al foco es el parámetro focal $p$. Ecuaciones canónicas con vértice en el origen $V(0, 0)$: 1. **Eje horizontal (eje $x$)**: $y^2 = 4px$, foco $F(p, 0)$, directriz $x = -p$. Abre a la derecha si $p > 0$ o a la izquierda si $p < 0$. 2. **Eje vertical (eje $y$)**: $x^2 = 4py$, foco $F(0, p)$, directriz $y = -p$. Abre hacia arriba si $p > 0$ o hacia abajo si $p < 0$. Longitud del lado recto: $LR = |4p|$. Trasladada a $V(h, k)$: $(y - k)^2 = 4p(x - h)$ o $(x - h)^2 = 4p(y - k)$.',
    'Ecuación canónica de parábola horizontal: $y^2 = 12x$ tiene foco $F(3, 0)$ y directriz $x = -3$.',
    [
      { exercise: 'Halla el foco y la directriz de la parábola: x² = 12y', hint: '4p = 12 => p = 3. Al ser x², es una parábola vertical con foco en el eje y.', answer: 'Foco: (0, 3), Directriz: y = -3' },
      { exercise: 'Deduce la ecuación de la parábola con vértice en V(0, 0) y foco en F(-5, 0)', hint: 'Eje horizontal, parámetro p = -5, ecuación y² = 4px.', answer: 'y² = -20x' },
      { exercise: '¿Cuál es la longitud del lado recto de la parábola y² = -28x?', hint: 'El lado recto es el valor absoluto LR = |4p|.', answer: '28 unidades' }
    ],
    [
      'Ejemplo 1 (Foco y directriz en parábola horizontal): Determinar el foco, directriz y lado recto de la parábola $y^2 = 16x$. Paso 1: Comparamos con la forma canónica $y^2 = 4px$, identificando $4p = 16$. Paso 2: Despejamos el parámetro focal: $p = \\frac{16}{4} = 4$. Paso 3: Como es horizontal y $p > 0$, abre a la derecha. Solución: Foco $F(4, 0)$, directriz $x = -4$ y lado recto $LR = 16$.',
      'Ejemplo 2 (Ecuación a partir de directriz horizontal): Hallar la ecuación de la parábola con vértice $V(0, 0)$ y directriz horizontal $y = 2$. Paso 1: La directriz es $y = -p = 2$, por lo que el parámetro es $p = -2$. Paso 2: Al ser directriz horizontal, el eje es vertical: $x^2 = 4py$. Paso 3: Sustituimos $p = -2$: $x^2 = 4(-2)y = -8y$. Solución: La ecuación es $x^2 = -8y$, y abre hacia abajo con foco $F(0, -2)$.',
      'Ejemplo 3 (Parábola con vértice trasladado): Hallar el vértice y foco de la parábola trasladada $(x - 2)^2 = 8(y + 3)$. Paso 1: Identificamos el vértice en $(h, k)$: $h = 2$ y $k = -3$, por lo que $V(2, -3)$. Paso 2: Calculamos el parámetro focal igualando $4p = 8 \\implies p = 2$. Paso 3: Al ser vertical con $p > 0$, el foco suma $p$ a la ordenada: $F(h, k + p) = (2, -3 + 2) = (2, -1)$. Solución: Vértice $V(2, -3)$ y foco $F(2, -1)$.',
      'Ejemplo 4 (Ecuación a partir de un punto conocido): Determinar la ecuación de la parábola con vértice $V(0, 0)$ que pasa por el punto $(2, 4)$ con eje horizontal. Paso 1: La ecuación es $y^2 = 4px$. Paso 2: Sustituimos las coordenadas del punto dado $x = 2$ e $y = 4$: $4^2 = 4p(2) \\implies 16 = 8p$. Paso 3: Despejamos el parámetro: $p = 2$, luego $4p = 8$. Solución: La ecuación canónica es $y^2 = 8x$.',
      'Ejemplo 5 (Cortes con los ejes de curva parabólica): Calcular los puntos de corte con los ejes de la parábola $y = x^2 - 4x + 3$. Paso 1: Para el corte con el eje $y$, evaluamos en $x = 0$: $y = 3$, punto $(0, 3)$. Paso 2: Para los cortes con el eje $x$, igualamos a cero: $x^2 - 4x + 3 = 0$. Paso 3: Factorizamos: $(x - 1)(x - 3) = 0 \\implies x = 1$ y $x = 3$. Solución: Corta al eje $x$ en $(1, 0)$ y $(3, 0)$, y al eje $y$ en $(0, 3)$.'
    ]
  ),
  createPscerLesson(
    'mined-mat-2b-u03-l02',
    '3.2',
    'La circunferencia: ecuación ordinaria y forma general',
    'El sistema de radar del Aeropuerto Internacional de El Salvador San Óscar Arnulfo Romero detecta una aeronave comercial que realiza un patrón de espera circular alrededor de una radiobaliza de navegación. El centro de la trayectoria circular se localiza en las coordenadas cartesianas $C(2, -3)$ medidas en kilómetros, y el radio de giro constante establecido por los protocolos de aeronáutica civil es $r = 5\\text{ km}$. Se requiere deducir la ecuación ordinaria de la circunferencia que describe el vuelo de la aeronave, transformarla algebraicamente a su forma general $x^2 + y^2 + Dx + Ey + F = 0$, y explicar el procedimiento inverso de completación de cuadrados para recuperar el centro y el radio a partir de dicha forma general.',
    'Por definición de lugar geométrico, una **circunferencia** es el conjunto de todos los puntos $P(x, y)$ del plano cartesiano cuya distancia euclidiana hacia un punto fijo denominado centro $C(h, k)$ permanece estrictamente constante e igual a la longitud del radio $r$, es decir, $d(P, C) = r$. Aplicando la fórmula de la distancia entre dos puntos en el plano cartesiano obtenemos la relación radical: $\\sqrt{(x - h)^2 + (y - k)^2} = r$. Para eliminar el operador radical, elevamos al cuadrado ambos miembros de la ecuación, obteniendo la **ecuación ordinaria o canónica**: $(x - h)^2 + (y - k)^2 = r^2$. Sustituyendo directamente los valores dados en el problema con centro en las coordenadas $h = 2$, $k = -3$ y longitud de radio $r = 5$, obtenemos: $(x - 2)^2 + (y - (-3))^2 = 5^2$, lo cual se simplifica como $(x - 2)^2 + (y + 3)^2 = 25$. Para transformar esta expresión a su **forma general**, desarrollamos analíticamente los binomios al cuadrado utilizando los productos notables de álgebra básica: $(x^2 - 4x + 4) + (y^2 + 6y + 9) = 25$. Luego, reordenamos los términos disponiendo primero los cuadráticos, luego los lineales y finalmente sumando algebraicamente los términos constantes: $x^2 + y^2 - 4x + 6y + (4 + 9 - 25) = 0 \\implies x^2 + y^2 - 4x + 6y - 12 = 0$. De esta manera determinamos los coeficientes canónicos: $D = -4$, $E = 6$ y $F = -12$. Por último, para recuperar el centro y el radio a partir de dicha ecuación general, aplicamos el método algebraico de completación de trinomios cuadrados perfectos: agrupamos las variables independientes $(x^2 - 4x) + (y^2 + 6y) = 12$; sumamos la mitad de cada coeficiente lineal elevada al cuadrado en ambos miembros: $(x^2 - 4x + 4) + (y^2 + 6y + 9) = 12 + 4 + 9$, factorizando obtenemos nuevamente $(x - 2)^2 + (y + 3)^2 = 25$, lo que confirma que el centro es $C(2, -3)$ y el radio es $r = \\sqrt{25} = 5$.',
    'En la geometría analítica del programa ESMATE, la **circunferencia** representa el lugar geométrico fundamental formado por la totalidad de puntos del plano cartesiano que se encuentran a una distancia euclidiana constante $r$, denominada radio, respecto de un punto fijo interior $C(h, k)$ llamado centro. Las formas canónicas oficiales son las siguientes: 1. **Ecuación Ordinaria**: $(x - h)^2 + (y - k)^2 = r^2$. Cuando el centro coincide exactamente con el origen de coordenadas $C(0, 0)$, adopta la forma reducida o canónica $x^2 + y^2 = r^2$. 2. **Ecuación General**: Al desarrollar los binomios al cuadrado e igualar a cero se obtiene la expresión polinómica $x^2 + y^2 + Dx + Ey + F = 0$. Las coordenadas del centro se determinan algebraicamente mediante las relaciones $h = -\\frac{D}{2}$ y $k = -\\frac{E}{2}$, mientras que el radio está definido por la expresión radical $r = \\frac{1}{2}\\sqrt{D^2 + E^2 - 4F}$. Para que la ecuación represente una circunferencia real en el plano cartesiano, la cantidad subradical o discriminante geométrico debe satisfacer estrictamente la condición de positividad $D^2 + E^2 - 4F > 0$. Si dicho valor es exactamente igual a cero, la gráfica se reduce a un único punto geométrico $C(h, k)$, y si es negativo, no posee ningún punto en el plano real.',
    'Forma general expandida: $(x - 2)^2 + (y + 3)^2 = 25 \\implies x^2 + y^2 - 4x + 6y - 12 = 0$.',
    [
      { exercise: 'Halla la ecuación ordinaria de la circunferencia con centro C(-1, 5) y radio r = 4', hint: '(x - (-1))² + (y - 5)² = 4².', answer: '(x + 1)² + (y - 5)² = 16' },
      { exercise: 'Encuentra el centro y el radio de la circunferencia: x² + y² - 10x - 6y + 9 = 0', hint: 'Completa cuadrados en x y en y: (x - 5)² + (y - 3)² = 25 + 9 - 9 = 25.', answer: 'Centro: (5, 3), Radio: 5' },
      { exercise: '¿Cuál es la ecuación general de la circunferencia con C(0, 2) y r = 3?', hint: 'x² + (y - 2)² = 9 <=> x² + y² - 4y - 5 = 0.', answer: 'x² + y² - 4y - 5 = 0' }
    ],
    [
      'Ejemplo 1 (Circunferencia canónica con centro en el origen): Hallar la ecuación general de la circunferencia con centro en el origen $C(0, 0)$ y radio $r = 6$. Paso 1: Escribimos la ecuación canónica en el origen: $x^2 + y^2 = r^2$. Paso 2: Sustituimos el radio: $x^2 + y^2 = 6^2 = 36$. Paso 3: Igualamos a cero para obtener la forma general: $x^2 + y^2 - 36 = 0$. Solución: La ecuación general es $x^2 + y^2 - 36 = 0$.',
      'Ejemplo 2 (Extracción de centro y radio desde forma ordinaria): Determinar el centro y el radio de la circunferencia $(x + 4)^2 + (y - 1)^2 = 49$. Paso 1: Comparamos con $(x - h)^2 + (y - k)^2 = r^2$. Paso 2: Identificamos $h = -4$, $k = 1$ y $r^2 = 49$. Paso 3: Extraemos la raíz cuadrada del radio: $r = \\sqrt{49} = 7$. Solución: El centro es $C(-4, 1)$ y el radio es $r = 7$.',
      'Ejemplo 3 (Completación de cuadrados desde forma general): Convertir la ecuación general $x^2 + y^2 - 6x + 8y = 0$ a su forma ordinaria completando cuadrados. Paso 1: Agrupamos por variable: $(x^2 - 6x) + (y^2 + 8y) = 0$. Paso 2: Completamos trinomios sumando $(\\frac{-6}{2})^2 = 9$ y $(\\frac{8}{2})^2 = 16$ en ambos miembros. Paso 3: Factorizamos: $(x - 3)^2 + (y + 4)^2 = 25$. Solución: Forma ordinaria $(x - 3)^2 + (y + 4)^2 = 25$, con centro $C(3, -4)$ y radio $r = 5$.',
      'Ejemplo 4 (Circunferencia determinada por un diámetro): Hallar la ecuación de la circunferencia con extremos de un diámetro en $A(-2, 1)$ y $B(4, 7)$. Paso 1: El centro es el punto medio del diámetro: $C = (\\frac{-2 + 4}{2}, \\frac{1 + 7}{2}) = (1, 4)$. Paso 2: El radio al cuadrado es la distancia del centro al punto $B$: $r^2 = (4 - 1)^2 + (7 - 4)^2 = 3^2 + 3^2 = 9 + 9 = 18$. Paso 3: Escribimos la ecuación ordinaria: $(x - 1)^2 + (y - 4)^2 = 18$. Solución: $(x - 1)^2 + (y - 4)^2 = 18$.',
      'Ejemplo 5 (Posición relativa de un punto respecto a circunferencia): Determinar la posición relativa del punto $P(3, 2)$ respecto a la circunferencia $x^2 + y^2 = 9$. Paso 1: Evaluamos las coordenadas del punto en la expresión $x^2 + y^2$: $3^2 + 2^2 = 9 + 4 = 13$. Paso 2: Comparamos el valor obtenido con $r^2 = 9$: como $13 > 9$, la distancia del punto al centro es estrictamente mayor que el radio. Paso 3: Concluimos la posición geométrica. Solución: El punto $P(3, 2)$ es exterior a la circunferencia.'
    ]
  ),
  createPscerLesson(
    'mined-mat-2b-u03-l03',
    '3.3',
    'La elipse: focos, semiejes y excentricidad',
    'Un modelo astronómico que analiza la trayectoria orbital elíptica de un satélite artificial alrededor de la Tierra establece que su órbita en el plano cartesiano está descrita por la ecuación canónica: $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, donde las unidades están medidas en miles de kilómetros. Para planificar las maniobras de telemetría y comunicación espacial, se solicita determinar la orientación del eje mayor, calcular las longitudes de los semiejes mayor y menor, ubicar las coordenadas exactas de los cuatro vértices y de los dos focos aplicando la relación pitagórica fundamental, y calcular la excentricidad de la elipse interpretando el grado de achatamiento de la curva.',
    'Dada la ecuación de la elipse en su forma canónica $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, comparamos los denominadores para determinar la orientación de la curva. Observamos que $25 > 9$, por lo que el denominador mayor se ubica bajo la variable $x$. Esto significa que el eje mayor es horizontal y coincide con el eje de las abscisas. Identificamos los parámetros cuadráticos: $a^2 = 25 \\implies a = \\sqrt{25} = 5$ (longitud del semieje mayor), y $b^2 = 9 \\implies b = \\sqrt{9} = 3$ (longitud del semieje menor). La longitud del eje mayor completo es $2a = 2(5) = 10$, y la del eje menor es $2b = 2(3) = 6$. Los vértices principales sobre el eje mayor son $A_1(-5, 0)$ y $A_2(5, 0)$, mientras que los vértices secundarios sobre el eje menor son $B_1(0, -3)$ y $B_2(0, 3)$. Para ubicar los focos, aplicamos la relación fundamental de la elipse $a^2 = b^2 + c^2$, donde $c$ representa la distancia semifocal: $c^2 = a^2 - b^2 = 25 - 9 = 16 \\implies c = \\sqrt{16} = 4$. Al estar situados sobre el eje mayor, las coordenadas de los focos son exactamente $F_1(-4, 0)$ y $F_2(4, 0)$. Por último, calculamos la **excentricidad** como el cociente entre la distancia semifocal y el semieje mayor: $e = \\frac{c}{a} = \\frac{4}{5} = 0.8$. Al ser un valor cercano a $1$, la elipse presenta un achatamiento pronunciado en comparación con una circunferencia perfecta.',
    'La **elipse** es el lugar geométrico formado por todos los puntos del plano cartesiano cuya suma de distancias hacia dos puntos fijos interiores denominados focos ($F_1$ y $F_2$) es constante e igual a la longitud del eje mayor: $d(P, F_1) + d(P, F_2) = 2a$. De acuerdo con el currículo oficial ESMATE, se distinguen dos configuraciones canónicas fundamentales con centro en el origen de coordenadas $C(0, 0)$: 1. **Eje Mayor Horizontal**: Su ecuación canónica es $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, cumpliendo la condición $a > b > 0$. Sus vértices principales se localizan en los puntos $(\\pm a, 0)$, los vértices secundarios en $(0, \\pm b)$ y los focos sobre el eje de las abscisas en $(\\pm c, 0)$. 2. **Eje Mayor Vertical**: Su ecuación canónica es $\\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1$, con vértices principales en $(0, \\pm a)$ y focos en $(0, \\pm c)$. En toda elipse se verifica de manera invariable la **relación pitagórica fundamental**: $a^2 = b^2 + c^2$, lo cual permite determinar la distancia semifocal mediante $c = \\sqrt{a^2 - b^2}$. La **excentricidad** de la curva se define como la razón adimensional $e = \\frac{c}{a}$, la cual siempre satisface el intervalo $0 < e < 1$, cuantificando con precisión analítica el grado de elongación o achatamiento de la elipse respecto a una circunferencia.',
    'Relación fundamental elíptica: $a^2 = b^2 + c^2$, con $c = \\sqrt{25 - 9} = 4$ y excentricidad $e = 4/5 = 0.8$.',
    [
      { exercise: 'Calcula la distancia semifocal c de la elipse: x²/100 + y²/36 = 1', hint: 'c = √(a² - b²) = √(100 - 36) = √64.', answer: 'c = 8 (Focos: (±8, 0))' },
      { exercise: 'Halla la excentricidad de la elipse con semiejes a = 10 y b = 6', hint: 'c = √(100 - 36) = 8, calcula e = c / a.', answer: 'e = 0.8' },
      { exercise: 'Escribe en forma canónica dividiendo entre 100: 25x² + 4y² = 100', hint: 'x² / 4 + y² / 25 = 1 (elipse con eje mayor vertical).', answer: 'x²/4 + y²/25 = 1' }
    ],
    [
      'Ejemplo 1 (Focos y excentricidad de elipse horizontal): Determinar los focos y la excentricidad de la elipse $\\frac{x^2}{169} + \\frac{y^2}{25} = 1$. Paso 1: Como $169 > 25$, el eje mayor es horizontal con $a^2 = 169 \\implies a = 13$ y $b^2 = 25 \\implies b = 5$. Paso 2: Calculamos la distancia focal: $c = \\sqrt{a^2 - b^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. Paso 3: Escribimos los focos $F(\\pm 12, 0)$ y calculamos la excentricidad: $e = \\frac{c}{a} = \\frac{12}{13} \\approx 0.923$. Solución: Focos en $(\\pm 12, 0)$ y excentricidad $e = \\frac{12}{13}$.',
      'Ejemplo 2 (Ecuación de elipse vertical a partir de focos): Hallar la ecuación canónica de la elipse con focos en $(0, \\pm 3)$ y semieje mayor $a = 5$. Paso 1: Como los focos están en el eje $y$, el eje mayor es vertical y $c = 3$. Paso 2: Calculamos el semieje menor: $b^2 = a^2 - c^2 = 5^2 - 3^2 = 25 - 9 = 16 \\implies b = 4$. Paso 3: Escribimos la ecuación con $a^2 = 25$ bajo la variable $y$: $\\frac{x^2}{16} + \\frac{y^2}{25} = 1$. Solución: $\\frac{x^2}{16} + \\frac{y^2}{25} = 1$.',
      'Ejemplo 3 (Forma canónica dividiendo coeficientes): Reducir a la forma canónica la ecuación general $4x^2 + 9y^2 = 36$. Paso 1: Dividimos todos los términos entre el término constante $36$: $\\frac{4x^2}{36} + \\frac{9y^2}{36} = \\frac{36}{36}$. Paso 2: Simplificamos los coeficientes: $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$. Paso 3: Identificamos $a^2 = 9 \\implies a = 3$ y $b^2 = 4 \\implies b = 2$. Solución: La ecuación canónica es $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$.',
      'Ejemplo 4 (Longitud del lado recto de la elipse): Calcular la longitud del lado recto de la elipse $\\frac{x^2}{100} + \\frac{y^2}{64} = 1$. Paso 1: Identificamos $a^2 = 100 \\implies a = 10$ y $b^2 = 64 \\implies b = 8$. Paso 2: Recordamos la fórmula del lado recto de la elipse: $LR = \\frac{2b^2}{a}$. Paso 3: Sustituimos los valores numéricos: $LR = \\frac{2(64)}{10} = \\frac{128}{10} = 12.8$. Solución: La longitud del lado recto es $12.8$ unidades.',
      'Ejemplo 5 (Elipse trasladada con centro fuera del origen): Determinar el centro, vértices y focos de la elipse trasladada $\\frac{(x - 1)^2}{16} + \\frac{(y + 2)^2}{9} = 1$. Paso 1: El centro es $(h, k) = (1, -2)$. Paso 2: Con $a = 4$ horizontal, los vértices principales son $(1 \\pm 4, -2)$, resultando $(-3, -2)$ y $(5, -2)$. Paso 3: Calculamos $c = \\sqrt{16 - 9} = \\sqrt{7}$, por lo que los focos son $(1 \\pm \\sqrt{7}, -2)$. Solución: Centro $C(1, -2)$, vértices principales $(-3, -2)$ y $(5, -2)$, y focos en $(1 \\pm \\sqrt{7}, -2)$.'
    ]
  ),
  createPscerLesson(
    'mined-mat-2b-u03-l04',
    '3.4',
    'La hipérbola: asíntotas y focos',
    'Un sistema de radionavegación hiperbólica marítima determina la posición de una embarcación midiendo la diferencia constante de tiempo en la llegada de señales sincronizadas emitidas por dos estaciones transmisoras fijas que actúan como focos. La trayectoria de posición calculada se modela mediante la hipérbola canónica: $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$. Para trazar con total rigor los corredores de navegación seguros, se solicita determinar la orientación del eje transversal, calcular los semiejes real e imaginario, ubicar las coordenadas de los vértices y focos aplicando la relación fundamental hiperbólica, y deducir las ecuaciones algebraicas de las dos rectas asíntotas hacia las cuales convergen las ramas de la curva en el infinito.',
    'Dada la ecuación de la hipérbola en su forma canónica $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$, observamos que el término positivo corresponde a la variable $x$, mientras que el término negativo acompaña a la variable $y$. Esto indica que el **eje transversal o real** es horizontal y coincide con el eje de las abscisas, mientras que el eje conjugado o imaginario es vertical. Identificamos los parámetros: $a^2 = 16 \\implies a = \\sqrt{16} = 4$ (semieje real), y $b^2 = 9 \\implies b = \\sqrt{9} = 3$ (semieje imaginario). La longitud del eje transversal completo es $2a = 2(4) = 8$, y sus vértices principales se ubican en $A_1(-4, 0)$ y $A_2(4, 0)$. Para determinar la posición de los focos, aplicamos la relación fundamental que rige para la hipérbola, en la cual el parámetro focal $c$ es mayor que $a$ y $b$: $c^2 = a^2 + b^2 = 16 + 9 = 25 \\implies c = \\sqrt{25} = 5$. Por lo tanto, los focos están situados sobre el eje transversal en $F_1(-5, 0)$ y $F_2(5, 0)$, con una distancia interfocal de $2c = 10$. La excentricidad de la curva es $e = \\frac{c}{a} = \\frac{5}{4} = 1.25 > 1$. Finalmente, para deducir las ecuaciones de las **asíntotas**, consideramos las rectas oblicuas que pasan por el centro hacia las que se aproxima la curva asintóticamente: $y = \\pm \\frac{b}{a}x \\implies y = \\pm \\frac{3}{4}x$, es decir, las rectas $3x - 4y = 0$ y $3x + 4y = 0$.',
    'La **hipérbola** es el lugar geométrico constituido por todos los puntos del plano cartesiano donde el valor absoluto de la diferencia de sus distancias hacia dos puntos fijos denominados focos ($F_1$ y $F_2$) se mantiene constante e igual a la longitud del eje real o transversal: $|d(P, F_1) - d(P, F_2)| = 2a$. Según las pautas curriculares oficiales de ESMATE, se presentan dos estructuras canónicas básicas con centro en el origen cartesiano $C(0, 0)$: 1. **Eje Transversal Horizontal**: Su ecuación analítica es $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, con vértices reales ubicados en $(\\pm a, 0)$, focos situados en $(\\pm c, 0)$ y un par de rectas asíntotas oblicuas dadas por $y = \\pm \\frac{b}{a}x$. 2. **Eje Transversal Vertical**: Su ecuación analítica es $\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$, con vértices en $(0, \\pm a)$, focos en $(0, \\pm c)$ y asíntotas de pendiente inversa $y = \\pm \\frac{a}{b}x$. En toda hipérbola rige la **relación fundamental de semiejes**: $c^2 = a^2 + b^2$, de donde la distancia semifocal es $c = \\sqrt{a^2 + b^2}$. La **excentricidad** de la hipérbola se calcula como $e = \\frac{c}{a}$, cumpliendo siempre la desigualdad estricta $e > 1$. Las asíntotas guían las ramas hiperbólicas hacia el infinito sin llegar a tocarlas.',
    'Ecuaciones de asíntotas: para $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ las asíntotas son $y = \\pm \\frac{3}{4}x$.',
    [
      { exercise: 'Encuentra las ecuaciones de las asíntotas de la hipérbola: x²/36 - y²/25 = 1', hint: 'Aplica y = ±(b/a)x identificando a = 6 y b = 5.', answer: 'y = ±(5/6)x' },
      { exercise: 'Calcula la distancia semifocal c de la hipérbola: x²/64 - y²/36 = 1', hint: 'c = √(a² + b²) = √(64 + 36) = √100.', answer: 'c = 10' },
      { exercise: '¿Cuál es la excentricidad de la hipérbola con semieje real a = 8 y distancia c = 12?', hint: 'Calcula e = c / a = 12 / 8.', answer: 'e = 1.5' }
    ],
    [
      'Ejemplo 1 (Focos y asíntotas de hipérbola horizontal): Hallar los focos y las asíntotas de la hipérbola $\\frac{x^2}{25} - \\frac{y^2}{144} = 1$. Paso 1: Identificamos $a^2 = 25 \\implies a = 5$ y $b^2 = 144 \\implies b = 12$. Paso 2: Calculamos la distancia semifocal: $c = \\sqrt{a^2 + b^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Paso 3: Escribimos los focos $F(\\pm 13, 0)$ y las ecuaciones de las asíntotas: $y = \\pm \\frac{b}{a}x = \\pm \\frac{12}{5}x$. Solución: Focos en $(\\pm 13, 0)$ y asíntotas $y = \\pm \\frac{12}{5}x$.',
      'Ejemplo 2 (Ecuación de hipérbola vertical a partir de vértices y focos): Determinar la ecuación canónica de la hipérbola vertical con vértices en $(0, \\pm 6)$ y focos en $(0, \\pm 10)$. Paso 1: Como los vértices están en el eje $y$, la hipérbola es vertical con $a = 6$ y $c = 10$. Paso 2: Calculamos el semieje imaginario: $b^2 = c^2 - a^2 = 10^2 - 6^2 = 100 - 36 = 64 \\implies b = 8$. Paso 3: Escribimos la ecuación canónica vertical: $\\frac{y^2}{36} - \\frac{x^2}{64} = 1$. Solución: $\\frac{y^2}{36} - \\frac{x^2}{64} = 1$.',
      'Ejemplo 3 (Cálculo de excentricidad hiperbólica): Calcular la excentricidad de la hipérbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$. Paso 1: Identificamos $a = 3$ y $b = 4$. Paso 2: Calculamos $c = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Paso 3: Aplicamos la definición de excentricidad: $e = \\frac{c}{a} = \\frac{5}{3} \\approx 1.67$. Solución: La excentricidad es $e = \\frac{5}{3} > 1$.',
      'Ejemplo 4 (Hipérbola equilátera con asíntotas perpendiculares): Determinar las asíntotas de la hipérbola equilátera $x^2 - y^2 = 16$. Paso 1: Dividimos entre $16$: $\\frac{x^2}{16} - \\frac{y^2}{16} = 1$, con $a = b = 4$. Paso 2: Como $a = b$, la razón de las pendientes de las asíntotas es $\\frac{b}{a} = \\frac{4}{4} = 1$. Paso 3: Escribimos las ecuaciones lineales: $y = \\pm 1x \\implies y = x$ e $y = -x$. Solución: Las asíntotas son las bisectrices perpendiculares $y = x$ e $y = -x$.',
      'Ejemplo 5 (Longitud del lado recto en hipérbola): Hallar la longitud del lado recto de la hipérbola $\\frac{x^2}{64} - \\frac{y^2}{36} = 1$. Paso 1: Identificamos $a^2 = 64 \\implies a = 8$ y $b^2 = 36 \\implies b = 6$. Paso 2: Aplicamos la fórmula del lado recto de la hipérbola: $LR = \\frac{2b^2}{a}$. Paso 3: Calculamos: $LR = \\frac{2(36)}{8} = \\frac{72}{8} = 9$. Solución: El lado recto mide $9$ unidades.'
    ]
  ),
];

const u4Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u04-l01',
    '4.1',
    'Funciones trascendentales I: función exponencial f(x) = a^x',
    'Un equipo multidisciplinario del Ministerio de Salud (MINSAL) y la Universidad de El Salvador investiga el crecimiento in vitro de una colonia de bacterias patógenas en condiciones óptimas de cultivo. El recuento microbiológico inicial registra $N_0 = 500$ bacterias. Las observaciones experimentales demuestran que la población se duplica con total regularidad cada hora transcurrida. Se solicita deducir la función matemática exponencial que describe el tamaño poblacional $N(t)$ en cualquier instante de tiempo $t$ en horas, calcular la cantidad de bacterias al cabo de $6$ horas, determinar las propiedades esenciales de la función exponencial (dominio, rango, asíntota horizontal e intercepto con el eje de ordenadas), y resolver la ecuación exponencial asociada para predecir cuándo la colonia alcanzará exactamente $32,000$ microorganismos.',
    'Para modelar el crecimiento bacteriano, analizamos la evolución discreta de la población paso a paso: En el tiempo inicial $t = 0$: $N(0) = 500 = 500 \\cdot 2^0$. Al cabo de $t = 1$ hora: $N(1) = 500 \\cdot 2 = 1,000 = 500 \\cdot 2^1$. Al cabo de $t = 2$ horas: $N(2) = 1,000 \\cdot 2 = 2,000 = 500 \\cdot 2^2$. Generalizando para cualquier número de horas $t \\ge 0$, la función exponencial que modela la población es $N(t) = 500 \\cdot 2^t$. Para calcular la población tras seis horas, evaluamos en $t = 6$: $N(6) = 500 \\cdot 2^6 = 500 \\cdot 64 = 32,000$ bacterias. Analizando formalmente la función exponencial $f(x) = a^x$ con base $a = 2 > 1$: 1. Su **dominio** está constituido por todos los números reales $\\mathbb{R} = (-\\infty, \\infty)$. 2. Su **rango** es el intervalo abierto $(0, \\infty)$, pues $a^x > 0$ para todo $x \\in \\mathbb{R}$. 3. Su gráfica intercepta al eje vertical en $(0, 1)$ ya que $a^0 = 1$. 4. La recta horizontal $y = 0$ (eje $x$) actúa como **asíntota horizontal** hacia la izquierda. Para resolver $500 \\cdot 2^t = 32,000$, dividimos entre $500$: $2^t = 64 = 2^6 \\implies t = 6$ horas.',
    'La **función exponencial** es aquella función trascendental que asigna a cada número real $x$ la potencia $f(x) = a^x$, donde la base constante $a$ es un número real estrictamente positivo y diferente de uno ($a > 0$ y $a \\neq 1$). Las propiedades matemáticas esenciales establecidas en el currículo oficial MINED-ESMATE son: 1. **Dominio Natural**: El dominio de la función comprende a la totalidad de la recta de números reales, $\\text{Dom}(f) = \\mathbb{R} = (-\\infty, \\infty)$. 2. **Rango o Recorrido**: Dado que cualquier base positiva elevada a cualquier exponente real produce un valor estrictamente positivo, el rango corresponde al intervalo abierto de reales positivos $\\text{Ran}(f) = (0, \\infty)$. 3. **Intercepto**: La curva interseca al eje vertical de las ordenadas en el punto $(0, 1)$, pues por definición $a^0 = 1$ para cualquier base admisible. 4. **Comportamiento y Monotonía**: Cuando la base es mayor que uno ($a > 1$), la función es estrictamente creciente; mientras que si la base está comprendida entre cero y uno ($0 < a < 1$), la función es estrictamente decreciente. 5. **Asíntota Horizontal**: El eje horizontal de las abscisas, correspondiente a la recta $y = 0$, actúa como asíntota horizontal de la función. En la resolución de ecuaciones exponenciales se aplica el principio de inyectividad: $a^u = a^v \\iff u = v$.',
    'Intercepto y asíntota exponencial: $f(x) = 3^x$ interseca en $(0, 1)$ y tiene asíntota horizontal $y = 0$.',
    [
      { exercise: 'Resuelve la ecuación exponencial igualando bases: 2^(3x - 5) = 16', hint: '16 = 2⁴, iguala exponentes 3x - 5 = 4.', answer: 'x = 3' },
      { exercise: 'Halla el rango de la función trasladada: f(x) = 3^x - 2', hint: 'La asíntota horizontal se desplaza dos unidades abajo a y = -2.', answer: '(-2, ∞)' },
      { exercise: 'Resuelve la ecuación exponencial: 9^x = 27', hint: 'Expresa en base tres: (3²)^x = 3³ <=> 3^(2x) = 3³.', answer: 'x = 3/2 = 1.5' }
    ],
    [
      'Ejemplo 1 (Ecuación exponencial con base entera): Resolver la ecuación exponencial $3^{2x - 1} = 27$. Paso 1: Expresamos el miembro derecho de la igualdad como una potencia de base tres: $27 = 3^3$. Paso 2: Reescribimos la ecuación igualando potencias que poseen la misma base: $3^{2x - 1} = 3^3$. Paso 3: Por la propiedad de inyectividad de las funciones exponenciales, igualamos algebraicamente los exponentes: $2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$. Solución: La solución real de la ecuación exponencial es $x = 2$.',
      'Ejemplo 2 (Ecuación exponencial con fracción y exponente negativo): Resolver la ecuación exponencial $4^{x + 1} = \\frac{1}{16}$. Paso 1: Expresamos el término fraccionario como una potencia de base cuatro con exponente negativo: $\\frac{1}{16} = 4^{-2}$. Paso 2: Igualamos los exponentes correspondientes a la misma base común: $x + 1 = -2$. Paso 3: Despejamos con precisión la incógnita mediante transposición de términos: $x = -2 - 1 = -3$. Solución: La solución única es $x = -3$.',
      'Ejemplo 3 (Intercepto y asíntota de exponencial trasladada): Determinar el intercepto y la asíntota de la función trasladada $g(x) = 2^{x - 3} + 4$. Paso 1: Evaluamos en $x = 0$ para el intercepto: $g(0) = 2^{-3} + 4 = \\frac{1}{8} + 4 = \\frac{33}{8} = 4.125$. Paso 2: La asíntota horizontal base $y = 0$ se traslada verticalmente cuatro unidades hacia arriba. Paso 3: La asíntota horizontal es la recta $y = 4$. Solución: Intercepto $(0, 4.125)$ y asíntota horizontal $y = 4$ con rango $(4, \\infty)$.',
      'Ejemplo 4 (Ecuación con potencia cuadrática en exponente): Resolver la ecuación exponencial $5^{x^2 - 4} = 1$. Paso 1: Recordamos que cualquier número no nulo elevado a la potencia cero es igual a uno: $1 = 5^0$. Paso 2: Igualamos la ecuación con base cinco: $5^{x^2 - 4} = 5^0$. Paso 3: Igualamos los exponentes: $x^2 - 4 = 0 \\implies x^2 = 4 \\implies x = \\pm 2$. Solución: Las soluciones son $x = -2$ y $x = 2$.',
      'Ejemplo 5 (Ecuación de tipo cuadrático reducible a exponencial): Resolver la ecuación $2^{2x} - 5 \\cdot 2^x + 4 = 0$. Paso 1: Efectuamos el cambio de variable $u = 2^x$, transformando en $u^2 - 5u + 4 = 0$. Paso 2: Factorizamos: $(u - 1)(u - 4) = 0$, obteniendo $u = 1$ y $u = 4$. Paso 3: Regresamos a la variable original: $2^x = 1 \\implies x = 0$; y $2^x = 4 \\implies 2^x = 2^2 \\implies x = 2$. Solución: $x = 0$ y $x = 2$.'
    ]
  ),
];

const u5Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u05-l01',
    '5.1',
    'Funciones trascendentales II: logaritmos y función inversa',
    'Un sismólogo del Ministerio de Medio Ambiente calcula la energía liberada durante un movimiento telúrico en la escala de Richter, cuya magnitud sismológica $M$ se modela mediante la función logarítmica $M = \\frac{2}{3}\\log_{10}\\left(\\frac{E}{E_0}\\right)$, donde $E$ es la energía liberada y $E_0$ es una constante física de referencia. Para dominar el uso analítico de los logaritmos, se solicita calcular el valor exacto de expresiones como $\\log_2(32)$ y $\\log_3(\\frac{1}{27})$ aplicando rigurosamente la definición de logaritmo como función inversa de la exponencial, resolver la ecuación logarítmica $\\log_3(x + 2) + \\log_3(x - 4) = 3$ utilizando propiedades de condensación de logaritmos, y verificar la validez de los argumentos en el dominio real.',
    'Por definición formal en el currículo de segundo año de bachillerato, el **logaritmo** en base $a$ de un número real estrictamente positivo $x$ es el exponente $y$ al que debe elevarse la base $a$ para obtener exactamente el argumento $x$: $\\log_a(x) = y \\iff a^y = x$, con $a > 0$ y $a \\neq 1$. Para resolver la primera parte del problema evaluando valores exactos: 1. Para calcular $\\log_2(32)$, planteamos la equivalencia exponencial correspondiente $2^y = 32$. Dado que $32 = 2^5$, por inyectividad exponencial se concluye de inmediato que el exponente buscado es $y = 5$, por lo cual $\\log_2(32) = 5$. 2. Para calcular $\\log_3(\\frac{1}{27})$, planteamos la ecuación exponencial $3^y = \\frac{1}{27} = 3^{-3}$, lo que conduce directamente a $y = -3$. En la segunda parte, para resolver la ecuación logarítmica $\\log_3(x + 2) + \\log_3(x - 4) = 3$, procedemos mediante tres etapas metódicas: primero, establecemos las restricciones del dominio real de los argumentos, los cuales deben ser estrictamente positivos: $x + 2 > 0 \\implies x > -2$, y además $x - 4 > 0 \\implies x > 4$, lo que exige conjuntamente que $x > 4$. Segundo, aplicamos la propiedad del logaritmo de un producto para condensar el miembro izquierdo: $\\log_3((x + 2)(x - 4)) = 3$. Tercero, transformamos la ecuación a su forma exponencial equivalente: $(x + 2)(x - 4) = 3^3 = 27$. Desarrollamos el producto de binomios: $x^2 - 2x - 8 = 27 \\implies x^2 - 2x - 35 = 0$. Factorizamos el trinomio cuadrático resultante: $(x - 7)(x + 5) = 0$, obteniendo las raíces candidatas $x = 7$ y $x = -5$. Finalmente, contrastamos ambos valores con la condición inicial de existencia en el dominio ($x > 4$): el valor $x = -5$ se descarta por generar argumentos negativos no admisibles en los reales. Por lo tanto, la única solución admisible y válida es $x = 7$.',
    'La **función logarítmica** en base $a$ se define formalmente como la función inversa biunívoca de la función exponencial: $y = \\log_a(x) \\iff a^y = x$, donde el argumento satisface $x > 0$ y la base cumple $a > 0$ con $a \\neq 1$. Las propiedades fundamentales estipuladas en el programa oficial MINED-ESMATE son: 1. **Dominio**: El dominio natural está restringido exclusivamente al intervalo de los números reales positivos, $\\text{Dom}(f) = (0, \\infty)$. 2. **Rango**: El conjunto imagen o rango abarca la totalidad de los números reales, $\\text{Ran}(f) = \\mathbb{R} = (-\\infty, \\infty)$. 3. **Asíntota Vertical**: La recta vertical $x = 0$ (eje de las ordenadas) actúa como asíntota vertical inalcanzable de la curva hacia la izquierda. 4. **Intercepto con los Ejes**: La gráfica interseca al eje horizontal de las abscisas en el punto coordenado $(1, 0)$, puesto que $\\log_a(1) = 0$ para cualquier base válida. 5. **Leyes Operativas de Logaritmos**: El logaritmo de un producto es la suma de logaritmos $\\log_a(uv) = \\log_a u + \\log_a v$, el logaritmo de un cociente es la resta $\\log_a(u/v) = \\log_a u - \\log_a v$, y el logaritmo de una potencia permite extraer el exponente como factor multiplicador $\\log_a(u^k) = k\\log_a u$. Para cambiar a cualquier base conveniente se utiliza la identidad $\\log_b x = \\frac{\\ln x}{\\ln b}$.',
    'Definición de logaritmo: $\\log_a(x) = y \\iff a^y = x$, donde $\\log_2(32) = 5$ pues $2^5 = 32$.',
    [
      { exercise: 'Calcula el valor numérico: log₁₀(10,000) + log₃(81)', hint: '10⁴ = 10000 y 3⁴ = 81.', answer: '4 + 4 = 8' },
      { exercise: 'Resuelve la ecuación logarítmica: log₂(x + 6) - log₂(x) = 1', hint: 'Condensa: log₂((x + 6)/x) = 1 <=> (x + 6)/x = 2.', answer: 'x = 6' },
      { exercise: 'Aplica la fórmula de cambio de base para expresar log₂(10) con logaritmos decimales', hint: 'log₂(10) = log₁₀(10) / log₁₀(2) = 1 / log₁₀(2).', answer: '1 / log₁₀(2) ≈ 3.3219' }
    ],
    [
      'Ejemplo 1 (Cálculo directo con potencias de base entera y fraccionaria): Calcular detalladamente el valor numérico de $\\log_5(125)$ y $\\log_2(\\frac{1}{16})$ utilizando la definición de logaritmo. Paso 1: Para la primera expresión $\\log_5(125)$, planteamos la igualdad exponencial equivalente $5^y = 125 = 5^3$, de donde deducimos de inmediato que el exponente es $y = 3$. Paso 2: Para la segunda expresión $\\log_2(\\frac{1}{16})$, planteamos la igualdad con potencia negativa $2^y = \\frac{1}{16} = 2^{-4}$, concluyendo que el exponente correspondiente es $y = -4$. Paso 3: Verificamos que ambos resultados satisfacen la definición formal. Solución: Los valores exactos calculados son $\\log_5(125) = 3$ y $\\log_2(\\frac{1}{16}) = -4$.',
      'Ejemplo 2 (Ecuación logarítmica simple con base dos): Resolver la ecuación logarítmica simple $\\log_2(3x - 1) = 4$. Paso 1: Convertimos a la forma exponencial equivalente: $3x - 1 = 2^4$. Paso 2: Evaluamos la potencia: $3x - 1 = 16$. Paso 3: Despejamos la incógnita: $3x = 17 \\implies x = \\frac{17}{3}$. Como $3(\\frac{17}{3}) - 1 = 16 > 0$, la solución es válida. Solución: $x = \\frac{17}{3}$.',
      'Ejemplo 3 (Ecuación logarítmica con suma en base diez): Resolver la ecuación $\\log(x) + \\log(x - 3) = 1$ en base decimal ($10$). Paso 1: Condensamos usando la propiedad del producto: $\\log(x(x - 3)) = 1$. Paso 2: Transformamos a forma exponencial: $x(x - 3) = 10^1 = 10 \\implies x^2 - 3x - 10 = 0$. Paso 3: Factorizamos: $(x - 5)(x + 2) = 0$, dando $x = 5$ y $x = -2$. Descartamos $x = -2$ por restricción de dominio $x > 3$. Solución: La única solución válida es $x = 5$.',
      'Ejemplo 4 (Condensación de logaritmos en una sola expresión): Aplicar propiedades para expresar como un solo logaritmo: $2\\ln(x) - 3\\ln(y) + \\frac{1}{2}\\ln(z)$. Paso 1: Introducimos los coeficientes como exponentes: $\\ln(x^2) - \\ln(y^3) + \\ln(z^{\\frac{1}{2}})$. Paso 2: Agrupamos los términos positivos en el numerador y los negativos en el denominador. Paso 3: Escribimos la expresión condensada: $\\ln\\left(\\frac{x^2 \\sqrt{z}}{y^3}\\right)$. Solución: $\\ln\\left(\\frac{x^2 \\sqrt{z}}{y^3}\\right)$.',
      'Ejemplo 5 (Resolución de ecuación exponencial mediante logaritmos): Resolver la ecuación exponencial mediante logaritmos: $5^x = 18$. Paso 1: Aplicamos logaritmo natural ($\\ln$) a ambos miembros: $\\ln(5^x) = \\ln(18)$. Paso 2: Bajamos el exponente como factor multiplicativo: $x \\ln(5) = \\ln(18)$. Paso 3: Despejamos la variable: $x = \\frac{\\ln(18)}{\\ln(5)} \\approx \\frac{2.8904}{1.6094} \\approx 1.796$. Solución: $x = \\frac{\\ln(18)}{\\ln(5)} \\approx 1.796$.'
    ]
  ),
];

const u6Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u06-l01',
    '6.1',
    'Sucesiones aritméticas, geométricas y series infinitas',
    'Un programa de ahorro juvenil cooperativo en un instituto nacional propone a un estudiante el siguiente plan financiero de dos modalidades: en la primera modalidad (ahorro lineal o aritmético), aporta 10 dólares durante la primera semana y en cada semana sucesiva incrementa su cuota en 4 dólares respecto a la semana previa. En la segunda modalidad (fondo de inversión geométrica), una cooperativa escolar reinvierte un capital inicial de 100 dólares a una tasa de ganancia semanal que multiplica el saldo por una razón de $r = \\frac{1}{2}$ para constituir un fondo de reserva perpetuo. Se requiere deducir el término general y calcular el saldo acumulado en la semana 15 para la modalidad aritmética, formular el término general de una sucesión geométrica, y calcular la suma infinita convergente de la serie geométrica decreciente para determinar el límite teórico máximo del fondo perpetuo.',
    'Para la primera modalidad, los aportes forman una **sucesión aritmética** con primer término $a_1 = 10$ y diferencia común constante $d = 4$. El término general de una progresión aritmética viene dado por $a_n = a_1 + (n - 1)d$. Para la semana $n = 15$, el aporte correspondiente es: $a_{15} = 10 + (15 - 1)(4) = 10 + 14(4) = 10 + 56 = 66$ dólares. Para calcular el ahorro total acumulado tras las quince semanas, aplicamos la fórmula de la suma de los primeros $n$ términos de una sucesión aritmética: $S_n = \\frac{n(a_1 + a_n)}{2}$. Sustituyendo: $S_{15} = \\frac{15(a_1 + a_{15})}{2} = \\frac{15(10 + 66)}{2} = \\frac{15(76)}{2} = 15 \\cdot 38 = 570$ dólares. Para la segunda modalidad, consideramos una **sucesión geométrica** donde cada término se obtiene multiplicando el anterior por una razón fija $r$. Su término general es $a_n = a_1 \\cdot r^{n-1}$. La suma finita de sus primeros $n$ términos viene dada por $S_n = \\frac{a_1(1 - r^n)}{1 - r}$ (para $r \\neq 1$). Cuando $|r| < 1$, el término $r^n \\to 0$ conforme $n \\to \\infty$, convergiendo la serie a $S_\\infty = \\frac{a_1}{1 - r} = \\frac{100}{1 - 1/2} = 200$ dólares. El fondo perpetuo converge a doscientos dólares.',
    'Una **sucesión o progresión matemática** es una función estructurada cuyo dominio de definición está constituido por el conjunto de los números enteros positivos $\\mathbb{Z}^+ = \\{1, 2, 3, \\dots\\}$. Las fórmulas y conceptos canónicos desarrollados en el currículo de segundo año de bachillerato ESMATE comprenden: 1. **Sucesión Aritmética**: Es aquella en la que cada término sucesivo se genera sumando al anterior una constante aditiva fija llamada diferencia común ($d = a_n - a_{n-1}$). Su término general viene determinado por la expresión lineal $a_n = a_1 + (n - 1)d$, y la suma de sus primeros $n$ términos se calcula mediante la fórmula clásica atribuida a Gauss: $S_n = \\frac{n(a_1 + a_n)}{2}$. 2. **Sucesión Geométrica**: Es aquella en la que cada término posterior se calcula multiplicando el término precedente por un factor constante denominado razón común ($r = \\frac{a_n}{a_{n-1}}$). Su término general responde al modelo exponencial discreto $a_n = a_1 r^{n-1}$, y la suma finita de sus primeros $n$ términos está dada por $S_n = \\frac{a_1(1 - r^n)}{1 - r}$ para cualquier razón distinta de uno ($r \\neq 1$). 3. **Serie Geométrica Infinita**: Cuando el valor absoluto de la razón satisface la condición estricta de acotamiento $|r| < 1$, los términos se aproximan asintóticamente a cero y la serie infinita converge al límite finito $S_\\infty = \\frac{a_1}{1 - r}$. Si por el contrario la razón cumple $|r| \\ge 1$, la serie carece de límite finito y diverge.',
    'Sucesión aritmética: $a_n = a_1 + (n-1)d$, para $a_1 = 10$ y $d = 4$, $a_{15} = 10 + 14(4) = 66$.',
    [
      { exercise: 'Halla el término general an de la sucesión aritmética: 7, 10, 13, 16, ...', hint: 'a₁ = 7, d = 3. Aplica an = a₁ + (n - 1)d = 7 + (n - 1)3.', answer: 'an = 3n + 4' },
      { exercise: 'Calcula la suma infinita de la serie geométrica: 16 + 8 + 4 + 2 + ...', hint: 'Aplica S∞ = a₁ / (1 - r) con a₁ = 16 y r = 0.5.', answer: 'S∞ = 32' },
      { exercise: 'Halla el término 8 de la progresión geométrica con a₁ = 5 y r = 2', hint: 'a₈ = a₁ · r⁷ = 5 · 2⁷ = 5 · 128.', answer: '640' }
    ],
    [
      'Ejemplo 1 (Término general de sucesión aritmética): Hallar el término vigésimo ($a_{20}$) de la sucesión aritmética $3, 7, 11, 15, \\dots$. Paso 1: Identificamos el primer término $a_1 = 3$ y la diferencia común $d = 7 - 3 = 4$. Paso 2: Planteamos la fórmula del término general: $a_n = a_1 + (n - 1)d$. Paso 3: Evaluamos en $n = 20$: $a_{20} = 3 + (20 - 1)(4) = 3 + 19(4) = 3 + 76 = 79$. Solución: El vigésimo término es $79$.',
      'Ejemplo 2 (Suma de términos de progresión aritmética): Calcular la suma de los primeros $30$ términos de la sucesión aritmética con $a_1 = 5$ y $d = 3$. Paso 1: Calculamos el término $a_{30} = 5 + 29(3) = 5 + 87 = 92$. Paso 2: Aplicamos la fórmula de la suma finita: $S_{30} = \\frac{30(a_1 + a_{30})}{2}$. Paso 3: Operamos: $15(5 + 92) = 15(97) = 1,455$. Solución: La suma acumulada es $1,455$.',
      'Ejemplo 3 (Término y suma de progresión geométrica): Hallar el sexto término y la suma de los primeros seis términos de la sucesión geométrica $2, 6, 18, 54, \\dots$. Paso 1: Identificamos $a_1 = 2$ y la razón común $r = \\frac{6}{2} = 3$. Paso 2: Calculamos $a_6 = 2 \\cdot 3^{6 - 1} = 2 \\cdot 3^5 = 2 \\cdot 243 = 486$. Paso 3: Calculamos la suma: $S_6 = \\frac{2(3^6 - 1)}{3 - 1} = \\frac{2(729 - 1)}{2} = 728$. Solución: $a_6 = 486$ y $S_6 = 728$.',
      'Ejemplo 4 (Suma de serie geométrica infinita convergente): Calcular la suma de la serie geométrica infinita $12 + 6 + 3 + \\frac{3}{2} + \\dots$. Paso 1: Identificamos $a_1 = 12$ y la razón $r = \\frac{6}{12} = \\frac{1}{2}$. Paso 2: Verificamos que $|r| = \\frac{1}{2} < 1$, lo que garantiza la convergencia de la serie. Paso 3: Aplicamos la fórmula de suma infinita: $S_\\infty = \\frac{12}{1 - 1/2} = \\frac{12}{1/2} = 24$. Solución: La suma infinita es exactamente $24$.',
      'Ejemplo 5 (Conversión de decimal periódico a fracción): Expresar el número decimal periódico $0.\\overline{3} = 0.333\\dots$ como fracción irreducible usando series geométricas. Paso 1: Descomponemos el número como serie infinita: $\\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\dots$. Paso 2: Identificamos $a_1 = \\frac{3}{10}$ y la razón $r = \\frac{1}{10} = 0.1 < 1$. Paso 3: Calculamos la suma: $S_\\infty = \\frac{3/10}{1 - 1/10} = \\frac{3/10}{9/10} = \\frac{3}{9} = \\frac{1}{3}$. Solución: El número decimal periódico equivale a $\\frac{1}{3}$.'
    ]
  ),
];

const u7Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u07-l01',
    '7.1',
    'Métodos de conteo: permutaciones, combinaciones y Teorema del Binomio',
    'En un centro escolar salvadoreño de educación media se organiza el comité electoral estudiantil para las elecciones del gobierno escolar. Se cuenta con un grupo selecto de $10$ estudiantes candidatos destacados. El reglamento electoral establece dos fases organizativas distintas: en la primera fase, se debe conformar la directiva ejecutiva eligiendo a $3$ personas para desempeñar cargos jerárquicos diferenciados (presidente, secretario y tesorero). En la segunda fase, se debe seleccionar una comisión de apoyo logístico de $3$ estudiantes donde todos desempeñarán funciones de igual jerarquía sin distinción de cargos. Se solicita calcular analíticamente de cuántas formas diferentes puede conformarse la directiva ejecutiva y la comisión logística, contrastar la diferencia formal entre permutaciones y combinaciones, y expandir la potencia binomial $(2x + y)^4$ aplicando el Teorema del Binomio de Newton.',
    'Para resolver la primera fase, observamos que los cargos son diferenciados (presidente, secretario y tesorero), por lo que el orden en que se eligen los tres estudiantes es determinante: la terna (Ana, Beto, Carlos) es distinta a (Carlos, Ana, Beto). Se trata de una **permutación** sin repetición de $n = 10$ elementos tomados de $r = 3$ en $3$. Aplicamos la fórmula factorial de permutaciones: $P(10, 3) = \\frac{10!}{(10 - 3)!} = \\frac{10!}{7!} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7!}{7!} = 10 \\cdot 9 \\cdot 8 = 720$ formas distintas de elegir la directiva ejecutiva. Para la segunda fase, la comisión de apoyo logístico está compuesta por tres integrantes que desempeñan el mismo rol sin jerarquía interna: el orden no importa. Se trata de una **combinación** de $n = 10$ elementos tomados de $r = 3$ en $3$. Aplicamos la fórmula del coeficiente binomial: $C(10, 3) = \\binom{10}{3} = \\frac{10!}{3!(10 - 3)!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = \\frac{720}{6} = 120$ formas distintas de integrar la comisión de apoyo. Por último, para expandir $(2x + y)^4$ recurrimos al **Teorema del Binomio de Newton**: $(a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k$. Desarrollando los coeficientes de la fila cuatro del Triángulo de Pascal $[1, 4, 6, 4, 1]$: $1(16x^4) + 4(8x^3)(y) + 6(4x^2)(y^2) + 4(2x)(y^3) + 1(y^4) = 16x^4 + 32x^3 y + 24x^2 y^2 + 8xy^3 + y^4$.',
    'Los **métodos de conteo y combinatoria** constituyen las herramientas analíticas para cuantificar agrupaciones, arreglos y selecciones de elementos en conjuntos finitos sin necesidad de listar individualmente todos los casos posibles. El currículo oficial ESMATE establece los siguientes principios estructurales: 1. **Principios Fundamentales**: El principio de la multiplicación establece que si una actividad se efectúa en etapas sucesivas independientes con $m$ y $n$ posibilidades, el total es $m \\cdot n$. El principio de la adición aplica cuando las opciones son alternativas mutuamente excluyentes, sumando $m + n$. 2. **Permutaciones (el orden de selección SÍ es relevante)**: Se aplican cuando la posición o rol de cada elemento genera arreglos diferenciados, expresándose mediante el cociente factorial $P(n, r) = \\frac{n!}{(n - r)!}$, y para permutaciones completas de todos los elementos $P(n, n) = n!$. 3. **Combinaciones (el orden de selección NO es relevante)**: Se aplican cuando los subconjuntos formados no dependen de la secuencia en que fueron elegidos sus integrantes, calculándose mediante el coeficiente binomial $C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}$. 4. **Teorema del Binomio de Newton**: Permite desarrollar cualquier potencia entera positiva de un binomio mediante la sumatoria algebraica $(a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k$, donde los coeficientes binomiales corresponden simétricamente a la fila $n$ del Triángulo de Pascal y verifican la identidad $\\binom{n}{k} = \\binom{n}{n-k}$.',
    'Combinaciones: $C(10, 3) = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120$ comités posibles sin orden.',
    [
      { exercise: 'Calcula: P(7, 3) y C(7, 3)', hint: 'P(7, 3) = 7 · 6 · 5 = 210, y C(7, 3) = 210 / (3 · 2 · 1) = 35.', answer: 'P(7, 3) = 210, C(7, 3) = 35' },
      { exercise: '¿De cuántas maneras se puede elegir un capitán y un subcapitán en un equipo de 8 jugadores?', hint: 'El orden de asignación de los cargos sí importa: P(8, 2) = 8 · 7.', answer: '56 maneras' },
      { exercise: 'Expande mediante el Binomio de Newton el binomio: (x + y)³', hint: 'Usa los coeficientes de la fila 3 del Triángulo de Pascal: 1, 3, 3, 1.', answer: 'x³ + 3x²y + 3xy² + y³' }
    ],
    [
      'Ejemplo 1 (Permutación lineal sin repetición): ¿De cuántas formas pueden sentarse cinco personas en una fila de cinco sillas de cine? Paso 1: Como intervienen todos los elementos y el orden en los asientos importa, es una permutación lineal simple de cinco elementos: $P(5, 5) = 5!$. Paso 2: Calculamos el factorial: $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$. Paso 3: Multiplicamos los factores: $120$. Solución: Hay exactamente $120$ formas distintas de sentarse.',
      'Ejemplo 2 (Combinación de subconjuntos sin orden): En un examen de diez preguntas, un estudiante debe responder siete cualesquiera sin importar el orden. ¿Cuántas opciones tiene? Paso 1: Como el orden en que responda las preguntas no afecta la selección, es una combinación de diez en siete: $C(10, 7)$. Paso 2: Por propiedad de simetría $C(10, 7) = C(10, 3) = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1}$. Paso 3: Simplificamos: $\\frac{720}{6} = 120$. Solución: Tiene $120$ opciones diferentes de selección.',
      'Ejemplo 3 (Permutaciones con elementos repetidos): Calcular el número de permutaciones con repetición de las letras de la palabra "ESMATE" y de "MATEMATICA". Paso 1: "ESMATE" tiene seis letras sin repeticiones: $6! = 720$. Paso 2: "MATEMATICA" tiene diez letras con $M(2)$, $A(3)$, $T(2)$, $E(1)$, $I(1)$, $C(1)$. Paso 3: Aplicamos la fórmula: $P = \\frac{10!}{2! \\cdot 3! \\cdot 2!} = \\frac{3,628,800}{2 \\times 6 \\times 2} = \\frac{3,628,800}{24} = 151,200$. Solución: $151,200$ palabras distintas.',
      'Ejemplo 4 (Término específico en expansión binomial): Hallar el término que contiene $x^3$ en la expansión de $(x + 2)^5$. Paso 1: En el término general $\\binom{n}{k} x^{n-k} b^k$, con $n = 5$ buscamos $n - k = 3 \\implies k = 2$. Paso 2: El término correspondiente es $\\binom{5}{2} x^3 (2)^2$. Paso 3: Calculamos: $\\binom{5}{2} = 10$, y $2^2 = 4$; entonces $10 \\cdot 4 \\cdot x^3 = 40x^3$. Solución: El término es $40x^3$.',
      'Ejemplo 5 (Números formados con dígitos sin repetición): ¿Cuántos números de cuatro cifras distintas pueden formarse con los dígitos $\\{1, 2, 3, 4, 5, 6\\}$? Paso 1: Como las cifras no se repiten y el orden determina números distintos, es una permutación de seis tomados de cuatro en cuatro: $P(6, 4)$. Paso 2: Planteamos el cálculo: $\\frac{6!}{(6 - 4)!} = \\frac{6!}{2!} = 6 \\times 5 \\times 4 \\times 3$. Paso 3: Multiplicamos: $360$. Solución: Pueden formarse $360$ números distintos.'
    ]
  ),
];

const u8Lessons2B = [
  createPscerLesson(
    'mined-mat-2b-u08-l01',
    '8.1',
    'Probabilidad condicional, eventos independientes y Teorema de Bayes',
    'En un hospital de la red pública nacional de El Salvador, el $60\\%$ de los pacientes son atendidos en el turno matutino y el $40\\%$ restante en el turno vespertino. Los registros epidemiológicos demuestran que la probabilidad de que un paciente requiera hospitalización de emergencia es del $10\\%$ para los atendidos en la mañana, mientras que asciende al $20\\%$ para los atendidos en la tarde. Si un paciente hospitalizado es seleccionado de forma aleatoria, se requiere calcular la probabilidad total de que cualquier paciente atendido requiera hospitalización, determinar mediante el Teorema de Bayes la probabilidad a posteriori de que dicho paciente hospitalizado haya sido atendido originalmente en el turno matutino, y contrastar analíticamente el concepto de eventos independientes con eventos mutuamente excluyentes.',
    'Definimos rigurosamente los eventos del espacio muestral: sea $M$ el evento "el paciente fue atendido en el turno matutino" con probabilidad a priori $P(M) = 0.60$; y sea $V$ el evento "el paciente fue atendido en el turno vespertino" con $P(V) = 0.40$. Los eventos $M$ y $V$ forman una partición completa del espacio muestral ($M \\cap V = \\emptyset$ y $M \\cup V = \\Omega$). Sea $H$ el evento "el paciente requiere hospitalización de emergencia". Las probabilidades condicionales conocidas son $P(H \\mid M) = 0.10$ y $P(H \\mid V) = 0.20$. En primer lugar, calculamos la **probabilidad total** de hospitalización aplicando el Teorema de la Probabilidad Total: $P(H) = P(M) \\cdot P(H \\mid M) + P(V) \\cdot P(H \\mid V) = (0.60)(0.10) + (0.40)(0.20) = 0.06 + 0.08 = 0.14$. Es decir, el $14\\%$ de todos los pacientes atendidos en el hospital requiere hospitalización. En segundo lugar, para calcular la probabilidad a posteriori de que el paciente seleccionado haya sido atendido en el turno matutino dado que requirió hospitalización, aplicamos el **Teorema de Bayes**: $P(M \\mid H) = \\frac{P(M) \\cdot P(H \\mid M)}{P(H)} = \\frac{0.06}{0.14} = \\frac{6}{14} = \\frac{3}{7} \\approx 0.4286 \\approx 42.86\\%$. Por último, dos eventos $A$ y $B$ son **independientes** si la ocurrencia de uno no modifica la probabilidad de ocurrencia del otro, lo cual se cumple si y solo si $P(A \\cap B) = P(A) \\cdot P(B)$. En contraste, dos eventos son **mutuamente excluyentes** si no pueden ocurrir simultáneamente ($A \\cap B = \\emptyset \\implies P(A \\cap B) = 0$).',
    'La **teoría de la probabilidad** proporciona el marco axiomático riguroso para cuantificar la incertidumbre y modelar el comportamiento de fenómenos aleatorios en la ciencia y la toma de decisiones. El programa oficial MINED-ESMATE articula los siguientes teoremas y axiomas fundamentales: 1. **Axiomas de Kolmogorov**: Para todo evento $A$ perteneciente al espacio muestral $\\Omega$, se cumple que $0 \\le P(A) \\le 1$, la probabilidad del evento seguro es $P(\\Omega) = 1$, y la probabilidad del evento complementario es $P(A^c) = 1 - P(A)$. 2. **Regla General de la Adición**: Para cualesquiera dos eventos compatibles, la probabilidad de su unión es $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si ambos eventos son mutuamente excluyentes ($A \\cap B = \\emptyset$), se simplifica a la suma directa $P(A \\cup B) = P(A) + P(B)$. 3. **Probabilidad Condicional**: La probabilidad de que ocurra un evento $A$ habiendo ocurrido previamente el evento condicionante $B$ se define por el cociente $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, con $P(B) > 0$. 4. **Criterio de Independencia Estadística**: Dos eventos son probabilísticamente independientes si y solo si la probabilidad de su intersección equivale al producto simple de sus probabilidades individuales: $P(A \\cap B) = P(A) \\cdot P(B)$. 5. **Teorema de la Probabilidad Total y Teorema de Bayes**: Si una colección de eventos $A_1, A_2, \\dots, A_k$ constituye una partición exhaustiva del espacio muestral, la probabilidad de un evento observado $B$ es $P(B) = \\sum_{i=1}^k P(A_i)P(B \\mid A_i)$. El Teorema de Bayes permite actualizar la probabilidad a priori de una causa $A_i$ a una probabilidad a posteriori tras observar la evidencia $B$: $P(A_i \\mid B) = \\frac{P(A_i)P(B \\mid A_i)}{\\sum_{j=1}^k P(A_j)P(B \\mid A_j)}$.',
    'Teorema de Bayes: $P(M \\mid H) = \\frac{0.60 \\cdot 0.10}{0.14} = \\frac{3}{7} \\approx 42.86\\%$.',
    [
      { exercise: 'Si P(A ∩ B) = 0.18 y P(B) = 0.60, calcula la probabilidad condicional P(A | B)', hint: 'P(A | B) = P(A ∩ B) / P(B) = 0.18 / 0.60.', answer: '0.30' },
      { exercise: 'Si A y B son eventos independientes con P(A) = 0.3 y P(B) = 0.7, ¿cuál es P(A ∩ B)?', hint: 'Multiplica P(A) por P(B) por definición de eventos independientes.', answer: '0.21' },
      { exercise: 'Calcula la probabilidad del evento complemento si P(A) = 0.38', hint: 'Aplica P(A^c) = 1 - P(A).', answer: '0.62' }
    ],
    [
      'Ejemplo 1 (Probabilidad condicional en baraja de cartas): Se extrae una carta de una baraja estándar de $52$ cartas. Si se sabe que la carta extraída es roja ($B$), ¿cuál es la probabilidad de que sea un as ($A$)? Paso 1: Hay $26$ cartas rojas en total: $P(B) = \\frac{26}{52} = \\frac{1}{2}$. Paso 2: Hay dos ases rojos (corazones y diamantes): $P(A \\cap B) = \\frac{2}{52}$. Paso 3: Aplicamos probabilidad condicional: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{2/52}{26/52} = \\frac{2}{26} = \\frac{1}{13} \\approx 0.0769$. Solución: La probabilidad condicional es $\\frac{1}{13}$.',
      'Ejemplo 2 (Regla de adición con eventos independientes): Sean $A$ y $B$ dos eventos independientes con $P(A) = 0.40$ y $P(B) = 0.50$. Calcular $P(A \\cap B)$ y $P(A \\cup B)$. Paso 1: Como son independientes, multiplicamos sus probabilidades: $P(A \\cap B) = P(A) \\cdot P(B) = (0.40)(0.50) = 0.20$. Paso 2: Aplicamos la regla general de la adición: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Paso 3: Calculamos: $0.40 + 0.50 - 0.20 = 0.70$. Solución: $P(A \\cap B) = 0.20$ y $P(A \\cup B) = 0.70$.',
      'Ejemplo 3 (Diagnóstico médico mediante Teorema de Bayes): Una prueba diagnóstica tiene sensibilidad del $95\\%$ ($P(+ \\mid E) = 0.95$) y tasa de falsos positivos del $2\\%$ ($P(+ \\mid E^c) = 0.02$). Si la prevalencia es del $1\\%$ ($P(E) = 0.01$), calcular $P(E \\mid +)$. Paso 1: Calculamos la probabilidad total: $P(+) = (0.01)(0.95) + (0.99)(0.02) = 0.0095 + 0.0198 = 0.0293$. Paso 2: Aplicamos Bayes: $P(E \\mid +) = \\frac{(0.01)(0.95)}{0.0293} = \\frac{0.0095}{0.0293} \\approx 0.3242$. Solución: La probabilidad real es del $32.42\\%$.',
      'Ejemplo 4 (Lanzamiento de dados con espacio muestral reducido): Se lanzan dos dados honestos. Calcular la probabilidad de que la suma sea mayor o igual a $10$ dado que en el primer dado cayó un número mayor o igual a $5$. Paso 1: El espacio condicionado consta de los resultados con primer dado en $5$ o $6$: doce pares posibles. Paso 2: De esos doce pares, las sumas mayores o iguales a $10$ son $(5, 5), (5, 6), (6, 4), (6, 5), (6, 6)$, es decir, cinco resultados favorables. Paso 3: Calculamos la razón: $\\frac{5}{12} \\approx 0.4167$. Solución: La probabilidad condicional es $\\frac{5}{12}$.',
      'Ejemplo 5 (Extracción consecutiva sin reemplazo): Una urna contiene $4$ bolas blancas y $6$ negras. Se extraen dos consecutivas sin reemplazo. Calcular la probabilidad de que ambas sean blancas. Paso 1: La probabilidad de que la primera sea blanca es $P(B_1) = \\frac{4}{10} = \\frac{2}{5}$. Paso 2: Tras extraer una blanca, quedan $3$ blancas y $9$ bolas: $P(B_2 \\mid B_1) = \\frac{3}{9} = \\frac{1}{3}$. Paso 3: Multiplicamos: $P(B_1 \\cap B_2) = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15} \\approx 0.1333$. Solución: La probabilidad es $\\frac{2}{15}$.'
    ]
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
