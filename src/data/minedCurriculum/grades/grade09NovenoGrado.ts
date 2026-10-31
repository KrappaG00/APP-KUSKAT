import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 9° Grado - Unidad 1
// Multiplicación de polinomios y productos notables
// -----------------------------------------------------------------
const u1Archetypes9G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const a = (v % 7) + 1;
      const b = (v % 5) + 2;
      const sum = a + b;
      const prod = a * b;
      return {
        statement: `Al desarrollar el producto notable $(x + ${a})(x + ${b})$, ¿cuál es el trinomio resultante?`,
        options: [
          `$x^2 + ${sum}x + ${prod}$`,
          `$x^2 + ${prod}x + ${sum}$`,
          `$x^2 + ${sum}x - ${prod}$`,
          `$x^2 + ${prod}$`,
        ],
        correctAnswer: 'A',
        explanation: `Por la regla del producto de binomios con término común: $(x + a)(x + b) = x^2 + (a + b)x + ab = x^2 + ${sum}x + ${prod}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 6) + 2;
      const sq = a * a;
      return {
        statement: `Al factorizar la diferencia de cuadrados $x^2 - ${sq}$, se obtiene la expresión:`,
        options: [
          `$(x - ${a})^2$`,
          `$(x + ${a})(x - ${a})$`,
          `$(x + ${sq})(x - 1)$`,
          `$x(x - ${sq})$`,
        ],
        correctAnswer: 'B',
        explanation: `La factorización de una diferencia de cuadrados sigue la regla: $a^2 - b^2 = (a + b)(a - b)$. Por tanto, $x^2 - ${sq} = (x + ${a})(x - ${a})$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      const mid = 2 * a;
      const last = a * a;
      return {
        statement: `Al desarrollar el cuadrado de un binomio $(x + ${a})^2$, ¿cuál es el trinomio cuadrado perfecto?`,
        options: [
          `$x^2 + ${last}$`,
          `$x^2 + ${a}x + ${last}$`,
          `$x^2 + ${mid}x + ${last}$`,
          `$x^2 - ${mid}x + ${last}$`,
        ],
        correctAnswer: 'C',
        explanation: `Por la fórmula del cuadrado de un binomio: $(x + a)^2 = x^2 + 2ax + a^2 = x^2 + ${mid}x + ${last}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 6) + 1;
      const mid = 2 * a;
      const last = a * a;
      return {
        statement: `Al desarrollar el cuadrado de una diferencia $(x - ${a})^2$, el resultado es:`,
        options: [
          `$x^2 - ${last}$`,
          `$x^2 + ${mid}x - ${last}$`,
          `$x^2 - ${a}x + ${last}$`,
          `$x^2 - ${mid}x + ${last}$`,
        ],
        correctAnswer: 'D',
        explanation: `Por la fórmula del cuadrado de una diferencia: $(x - a)^2 = x^2 - 2ax + a^2 = x^2 - ${mid}x + ${last}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      return {
        statement: `Al factorizar por factor común monomio la expresión $${a}x^2 + ${a * 3}x$, se obtiene:`,
        options: [
          `$${a}x(x + 3)$`,
          `$${a}(x^2 + 3)$`,
          `$x(${a}x + 3)$`,
          `$${a}x(x - 3)$`,
        ],
        correctAnswer: 'A',
        explanation: `El máximo factor común de ambos términos es $${a}x$. Extrayendo dicho factor: $${a}x^2 + ${a * 3}x = ${a}x(x + 3)$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 4) + 2;
      const b = (v % 3) + 1;
      const p = a * b;
      const s = a + b;
      return {
        statement: `Al factorizar el trinomio de la forma $x^2 + ${s}x + ${p}$, se obtienen los factores:`,
        options: [
          `$(x - ${a})(x + ${b})$`,
          `$(x + ${a})(x + ${b})$`,
          `$(x - ${a})(x - ${b})$`,
          `$(x + ${a + 2})(x + ${b + 2})$`,
        ],
        correctAnswer: 'B',
        explanation: `Buscamos dos números que sumados den $${s}$ y multiplicados den $${p}$. Dichos números son $${a}$ y $${b}$: $(x + ${a})(x + ${b})$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 3;
      return {
        statement: `El producto de la suma por la diferencia $(2x + ${a})(2x - ${a})$ es igual a:`,
        options: [
          `$2x^2 - ${a * a}$`,
          `$4x^2 + ${a * a}$`,
          `$4x^2 - ${a * a}$`,
          `$4x - ${a * a}$`,
        ],
        correctAnswer: 'C',
        explanation: `Aplicando la fórmula $(A + B)(A - B) = A^2 - B^2$: $(2x)^2 - (${a})^2 = 4x^2 - ${a * a}$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cuál de los siguientes trinomios es un Trinomio Cuadrado Perfecto (TCP)?`,
        options: [
          `$x^2 + 5x + 6$`,
          `$x^2 + 4x + 9$`,
          `$x^2 + 6x + 8$`,
          `$x^2 + 6x + 9$`,
        ],
        correctAnswer: 'D',
        explanation: `En $x^2 + 6x + 9$, el término central $6x = 2(x)(3)$ y el último término $9 = 3^2$. Por tanto es $(x + 3)^2$, un TCP.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 4) + 1;
      return {
        statement: `Al desarrollar $(x + ${a})(x - ${a})$, la simplificación cancela los términos centrales debido a que:`,
        options: [
          `Son términos opuestos $+${a}x$ y $-${a}x$ que suman $0$`,
          `Ambos son negativos`,
          `El resultado es un trinomio`,
          `Las variables tienen distinto exponente`,
        ],
        correctAnswer: 'A',
        explanation: `Al efectuar el producto: $x^2 - ${a}x + ${a}x - ${a * a} = x^2 - ${a * a}$. Los términos cruzados son simétricos y su suma es cero.`,
      };
    },
  },
  {
    generate: (v) => {
      const k = (v % 4) + 2;
      return {
        statement: `Al factorizar por agrupación de términos $ax + ay + ${k}x + ${k}y$, la expresión factorizada es:`,
        options: [
          `$(a - ${k})(x - y)$`,
          `$(a + ${k})(x + y)$`,
          `$(ax + ${k}y)(a + y)$`,
          `$a(x + y) + ${k}$`,
        ],
        correctAnswer: 'B',
        explanation: `Agrupando: $a(x + y) + ${k}(x + y) = (a + ${k})(x + y)$.`,
      };
    },
  },
];

const u1Questions9G = generate50UnitQuestions(
  'mined-mat-9g-u01',
  '9-grado',
  '9G',
  1,
  'Multiplicación de polinomios y productos notables',
  'MINED ESMATE 9° Grado',
  u1Archetypes9G
);

const u1Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u01-l01',
    '1.1',
    'Productos notables: producto de binomios con término común',
    'En una cooperativa agropecuaria de Zapotitán se planifica la ampliación de una parcela cuadrada destinada al cultivo de hortalizas. El terreno original medía x metros por lado. Debido a la disponibilidad de riego por goteo, se decide ampliar el largo del terreno en 7 metros y el ancho en 3 metros, conformando una nueva parcela rectangular de dimensiones (x + 7) metros por (x + 3) metros. ¿Cómo se expresa algebraicamente el área total de la nueva parcela mediante la regla del producto de binomios con un término común, cuál es su desarrollo simplificado y cuántos metros cuadrados medirá si el terreno base medía 20 metros de lado?',
    'Para determinar el área de la nueva parcela rectangular multiplicamos las dos dimensiones: A = (x + 7)(x + 3). Analizamos el producto como una multiplicación especial de binomios que comparten la misma variable común x. Aplicamos la regla deductiva de ESMATE: en primer lugar, el primer término del resultado es el cuadrado del término común: x por x es igual a x². En segundo lugar, el coeficiente del término lineal con la variable común se obtiene sumando algebraicamente los dos términos independientes constantes: (+7) + (+3) = +10, lo que genera +10x. En tercer lugar, el término independiente constante resulta de multiplicar ambos números: (+7) por (+3) = +21. Reuniendo los tres términos, el trinomio que representa el área total es A = x² + 10x + 21 metros cuadrados. Geométricamente, el área se compone del cuadrado original (x²), dos franjas rectangulares laterales (7x y 3x que suman 10x) y la esquina rectangular complementaria (21 m²). Finalmente, si el terreno base medía x = 20 metros, calculamos el área numérica: A = (20)² + 10(20) + 21 = 400 + 200 + 21 = 621 metros cuadrados.',
    'El **producto de dos binomios con término común** tiene la estructura general $(x + a)(x + b)$. Su desarrollo algebraico genera un trinomio cuadrático de la forma:\n$$(x + a)(x + b) = x^2 + (a + b)x + ab$$\nRegla mnemotécnica procedimental:\n1. El término cuadrático es el **cuadrado del término común**: $x^2$.\n2. El término lineal es el producto de la **suma de los términos no comunes** por el término común: $(a + b)x$.\n3. El término independiente es el **producto de los términos no comunes**: $ab$.\nEsta regla es bidireccional: para **factorizar** un trinomio de la forma $x^2 + px + q$, se buscan dos números $a$ y $b$ tales que sumados den $p$ ($a + b = p$) y multiplicados den $q$ ($a \\cdot b = q$), expresándolo como $(x + a)(x + b)$.',
    'Para desarrollar $(x + 8)(x - 5)$: sumamos los términos no comunes: $8 + (-5) = +3$; multiplicamos: $(8)(-5) = -40$. El resultado es $x^2 + 3x - 40$.',
    [
      { exercise: 'Desarrolla el producto notable con término común: (x + 6)(x + 4)', hint: 'Suma 6 + 4 para el término lineal y multiplica 6 x 4 para el término independiente.', answer: 'x² + 10x + 24' },
      { exercise: 'Calcula el desarrollo algebraico: (x - 9)(x + 2)', hint: 'Suma (-9) + 2 = -7; multiplica (-9)(2) = -18.', answer: 'x² - 7x - 18' },
      { exercise: 'Factoriza el trinomio cuadrático: x² - 11x + 28', hint: 'Busca dos números que multiplicados den 28 y sumados den -11.', answer: '(x - 7)(x - 4)' }
    ],
    [
      'Ejemplo 1 (Producto con dos constantes positivas): Desarrollar $(x + 9)(x + 5)$. Paso 1: Elevamos al cuadrado el término común: $x^2$. Paso 2: Sumamos las constantes no comunes: $9 + 5 = 14$ para formar el coeficiente de $x$: $+14x$. Paso 3: Multiplicamos las constantes: $9 \\times 5 = 45$. Solución: El trinomio desarrollado es $x^2 + 14x + 45$.',
      'Ejemplo 2 (Producto con constantes de signos opuestos): Efectuar $(y + 11)(y - 4)$. Paso 1: El cuadrado del término común es $y^2$. Paso 2: Suma algebraica de constantes: $11 + (-4) = +7$, término $+7y$. Paso 3: Producto de constantes: $(11)(-4) = -44$. Solución: La expresión simplificada es $y^2 + 7y - 44$.',
      'Ejemplo 3 (Producto con dos constantes negativas): Desarrollar $(m - 6)(m - 8)$. Paso 1: Término cuadrático: $m^2$. Paso 2: Suma algebraica de números negativos: $(-6) + (-8) = -14$, término $-14m$. Paso 3: Producto de dos negativos: $(-6)(-8) = +48$. Solución: El trinomio resultante es $m^2 - 14m + 48$.',
      'Ejemplo 4 (Factorización inversa de trinomio cuadrático): Factorizar la expresión $x^2 + 2x - 35$. Paso 1: Buscamos dos números $a$ y $b$ cuyo producto sea $-35$ y cuya suma sea $+2$. Paso 2: Los divisores de $35$ son $1, 5, 7, 35$. Probamos con $+7$ y $-5$: $7 \\times (-5) = -35$ y $7 + (-5) = +2$. Paso 3: Escribimos el producto de binomios: $(x + 7)(x - 5)$. Solución: La factorización es $(x + 7)(x - 5)$.',
      'Ejemplo 5 (Aplicación geométrica al cálculo de áreas de terrenos): Un jardín rectangular mide $(x + 12)$ metros de largo y $(x - 3)$ metros de ancho. Determinar su área si $x = 10\\text{ m}$. Paso 1: Desarrollamos el producto notable: $(x + 12)(x - 3) = x^2 + (12 - 3)x + (12)(-3) = x^2 + 9x - 36$. Paso 2: Sustituimos $x = 10$: $10^2 + 9(10) - 36 = 100 + 90 - 36$. Paso 3: Calculamos: $190 - 36 = 154\\text{ m}^2$. Solución: El área es $x^2 + 9x - 36$ y mide $154\\text{ m}^2$.'
    ]
  ),
  createPscerLesson(
    'mined-mat-9g-u01-l02',
    '1.2',
    'Cuadrado de un binomio y diferencia de cuadrados',
    'En un proyecto de arquitectura bioclimática en Santa Tecla se diseñan dos módulos residenciales: el primer módulo es un salón cuadrado de lado (3x + 4) metros; el segundo módulo es un patio rectangular cuyas dimensiones son (3x + 4) metros de largo por (3x - 4) metros de ancho. El diseñador requiere determinar el área algebraica de ambos espacios mediante los productos notables correspondientes: ¿cuál es el desarrollo analítico del cuadrado del binomio para el salón y cuál es la diferencia de cuadrados para el patio rectangular?',
    'Para calcular el área del salón cuadrado desarrollamos el cuadrado de la suma de un binomio: A1 = (3x + 4)². De acuerdo con el producto notable, elevamos al cuadrado el primer término: (3x)² = 9x²; sumamos el doble producto del primer término por el segundo: 2(3x)(4) = 24x; y sumamos el cuadrado del segundo término: 4² = 16. El área resultante es el trinomio cuadrado perfecto: A1 = 9x² + 24x + 16 metros cuadrados. Para calcular el área del patio rectangular multiplicamos la suma por la diferencia de binomios: A2 = (3x + 4)(3x - 4). Aplicamos la propiedad distributiva: (3x)(3x) + (3x)(-4) + (4)(3x) + (4)(-4) = 9x² - 12x + 12x - 16. Observamos que los términos cruzados -12x y +12x son simétricos u opuestos y su suma se anula exactamente a cero. Por consiguiente, el resultado simplificado es una diferencia de cuadrados: A2 = (3x)² - 4² = 9x² - 16 metros cuadrados. La diferencia entre ambas áreas es de 24x + 32 metros cuadrados.',
    'Las identidades algebraicas de productos notables y sus factorizaciones asociadas son fundamentales en 9° Grado:\n1. **Cuadrado de un binomio** (Trinomio Cuadrado Perfecto):\n   - Cuadrado de la suma:\n   $$(a + b)^2 = a^2 + 2ab + b^2$$\n   - Cuadrado de la diferencia:\n   $$(a - b)^2 = a^2 - 2ab + b^2$$\n   Factorización inversa: un trinomio $a^2 \\pm 2ab + b^2$ se factoriza como $(a \\pm b)^2$.\n2. **Producto de la suma por la diferencia** (Diferencia de cuadrados):\n   $$(a + b)(a - b) = a^2 - b^2$$\n   Factorización inversa: toda diferencia de dos cuadrados perfectos se descompone en el producto de binomios conjugados:\n   $$a^2 - b^2 = (a + b)(a - b)$$',
    'Para desarrollar $(5x - 3)^2$: $(5x)^2 - 2(5x)(3) + 3^2 = 25x^2 - 30x + 9$. Para factorizar $49x^2 - 64$: $(\\sqrt{49x^2} + \\sqrt{64})(\\sqrt{49x^2} - \\sqrt{64}) = (7x + 8)(7x - 8)$.',
    [
      { exercise: 'Desarrolla el cuadrado del binomio: (2x + 5)²', hint: 'Cuadrado del primero + doble producto + cuadrado del segundo.', answer: '4x² + 20x + 25' },
      { exercise: 'Efectúa el producto de la suma por la diferencia: (4x + 7)(4x - 7)', hint: '(a+b)(a-b) = a² - b².', answer: '16x² - 49' },
      { exercise: 'Factoriza la diferencia de cuadrados: 81x² - 100y²', hint: 'Extrae raíz cuadrada a ambos términos y forma los binomios conjugados.', answer: '(9x + 10y)(9x - 10y)' }
    ],
    [
      'Ejemplo 1 (Cuadrado de la suma con coeficientes numéricos): Desarrollar $(4x + 3y)^2$. Paso 1: Cuadrado del primer término: $(4x)^2 = 16x^2$. Paso 2: Doble producto del primero por el segundo: $2(4x)(3y) = 24xy$. Paso 3: Cuadrado del segundo término: $(3y)^2 = 9y^2$. Solución: El trinomio cuadrado perfecto es $16x^2 + 24xy + 9y^2$.',
      'Ejemplo 2 (Cuadrado de la diferencia con monomios): Desarrollar $(6m - 5n)^2$. Paso 1: Cuadrado del primer término: $(6m)^2 = 36m^2$. Paso 2: Doble producto con signo negativo: $-2(6m)(5n) = -60mn$. Paso 3: Cuadrado del segundo término: $(-5n)^2 = +25n^2$. Solución: La expresión desarrollada es $36m^2 - 60mn + 25n^2$.',
      'Ejemplo 3 (Producto de binomios conjugados): Efectuar $(7a + 2b)(7a - 2b)$. Paso 1: Identificamos que son binomios conjugados de la forma $(u + v)(u - v)$. Paso 2: Elevamos al cuadrado el primer término: $(7a)^2 = 49a^2$. Paso 3: Elevamos al cuadrado el segundo término y restamos: $(2b)^2 = 4b^2$. Solución: El resultado simplificado es $49a^2 - 4b^2$.',
      'Ejemplo 4 (Factorización de trinomio cuadrado perfecto): Factorizar la expresión $25x^2 + 70x + 49$. Paso 1: Extraemos raíz cuadrada del primer término: $\\sqrt{25x^2} = 5x$. Paso 2: Extraemos raíz cuadrada del tercer término: $\\sqrt{49} = 7$. Paso 3: Comprobamos el doble producto: $2(5x)(7) = 70x$, que coincide con el término central. Solución: La factorización es $(5x + 7)^2$.',
      'Ejemplo 5 (Cálculo mental de productos aritméticos mediante diferencia de cuadrados): Calcular $52 \\times 48$ sin calculadora utilizando álgebra. Paso 1: Expresamos ambos factores centrados en $50$: $(50 + 2)(50 - 2)$. Paso 2: Aplicamos diferencia de cuadrados: $50^2 - 2^2$. Paso 3: Calculamos: $2,500 - 4 = 2,496$. Solución: $52 \\times 48 = 2,496$.'
    ]
  ),
];

const u2Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u02-l01',
    '2.1',
    'Raíz cuadrada, números irracionales y racionalización',
    'En una obra de remodelación de la plaza central de Suchitoto se diseña un jardín cuadrangular cuya superficie total es exactamente de 72 metros cuadrados. El maestro de obras debe recortar una moldura de piedra pulida que bordee todo el perímetro del jardín. Para cortar las piezas con precisión milimétrica, necesita determinar la longitud exacta del lado del jardín expresada en su forma radical simplificada más simple y calcular la longitud total del perímetro. Asimismo, si un tramo de borde se calcula mediante la fracción 12 / √6, ¿cómo se racionaliza el denominador para eliminar la raíz del divisor?',
    'Para determinar la medida exacta del lado de un cuadrado de área conocida aplicamos la definición de raíz cuadrada: L = √72 metros. En primer lugar, simplificamos el radical descomponiendo el número 72 en sus factores primos: 72 = 2³ x 3² = (2² x 3²) x 2 = 6² x 2. Aplicando la propiedad distributiva del radical respecto a la multiplicación de factores positivos, extraemos las potencias de exponente par fuera del radical: L = √(6² x 2) = √(6²) x √2 = 6√2 metros. Como √2 no puede expresarse como cociente de dos enteros, es un **número irracional** cuyo valor aproximado es 1.4142, por lo que L ≈ 6(1.4142) = 8.485 metros. Para calcular el perímetro total multiplicamos el lado por cuatro: P = 4L = 4(6√2) = 24√2 metros. Para racionalizar la fracción 12 / √6, multiplicamos el numerador y el denominador por √6 (multiplicación por uno neutro): (12 / √6) x (√6 / √6) = 12√6 / (√6)² = 12√6 / 6 = 2√6 metros.',
    'El conjunto de los **números reales** ($\\mathbb{R}$) está formado por la unión disjunta de los números racionales ($\\mathbb{Q}$) y los números irracionales ($\\mathbb{I}$):\n$$\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$$\nPropiedades fundamentales de los radicales:\n1. **Simplificación**: si $a \\ge 0$ y $b \\ge 0$, se extraen los cuadrados perfectos:\n$$\\sqrt{a^2 b} = a\\sqrt{b}$$\n2. **Multiplicación y división**:\n$$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}, \\qquad \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}} \\qquad (b > 0)$$\n3. **Racionalización de denominadores**: proceso que consiste en transformar una fracción con radicales en el denominador en una fracción equivalente con denominador entero racional:\n   - Para monomio: $\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$.\n   - Para binomio: se multiplica por el conjugado $(\\sqrt{a} \\mp \\sqrt{b})$ aplicando diferencia de cuadrados:\n   $$\\frac{c}{\\sqrt{a} \\pm \\sqrt{b}} = \\frac{c(\\sqrt{a} \\mp \\sqrt{b})}{a - b}$$',
    'Para racionalizar $\\frac{10}{\\sqrt{5}}$: multiplicamos por $\\frac{\\sqrt{5}}{\\sqrt{5}}$, resultando $\\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$.',
    [
      { exercise: 'Simplifica a su mínima expresión el radical: √108', hint: 'Descompón 108 en factores primos: 108 = 36 x 3.', answer: '√(36 x 3) = 6√3' },
      { exercise: 'Efectúa la operación combinada de radicales semejantes: 5√7 + 3√7 - 2√7', hint: 'Suma los coeficientes externos: (5 + 3 - 2)√7.', answer: '6√7' },
      { exercise: 'Racionaliza el denominador de la fracción: 15 / √3', hint: 'Multiplica numerador y denominador por √3.', answer: '(15√3) / 3 = 5√3' }
    ],
    [
      'Ejemplo 1 (Simplificación de raíz cuadrada de número compuesto): Simplificar $\\sqrt{200}$. Paso 1: Descomponemos $200$ en factores primos: $200 = 100 \\times 2 = 10^2 \\times 2$. Paso 2: Aplicamos la propiedad de la raíz de un producto: $\\sqrt{10^2 \\times 2} = \\sqrt{10^2} \\cdot \\sqrt{2}$. Paso 3: Extraemos la raíz cuadrada exacta de $100$: $10\\sqrt{2}$. Solución: $\\sqrt{200} = 10\\sqrt{2}$.',
      'Ejemplo 2 (Suma y resta de radicales heterogéneos simplificables): Calcular $\\sqrt{75} - \\sqrt{27} + \\sqrt{48}$. Paso 1: Simplificamos cada radical: $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$. Paso 2: $\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$ y $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$. Paso 3: Reducimos términos semejantes: $(5 - 3 + 4)\\sqrt{3} = 6\\sqrt{3}$. Solución: El valor simplificado es $6\\sqrt{3}$.',
      'Ejemplo 3 (Multiplicación de expresiones con radicales): Efectuar $(2\\sqrt{3})(5\\sqrt{6})$. Paso 1: Multiplicamos los coeficientes externos: $2 \\times 5 = 10$. Paso 2: Multiplicamos los radicales bajo una misma raíz: $\\sqrt{3 \\times 6} = \\sqrt{18}$. Paso 3: Simplificamos $\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$. Multiplicamos: $10(3\\sqrt{2}) = 30\\sqrt{2}$. Solución: El producto es $30\\sqrt{2}$.',
      'Ejemplo 4 (Racionalización de un monomio con raíz en el divisor): Racionalizar la expresión $\\frac{18}{\\sqrt{2}}$. Paso 1: Multiplicamos por la fracción unitaria $\\frac{\\sqrt{2}}{\\sqrt{2}}$. Paso 2: Operamos el producto: $\\frac{18\\sqrt{2}}{(\\sqrt{2})^2} = \\frac{18\\sqrt{2}}{2}$. Paso 3: Simplificamos el cociente entero: $\\frac{18}{2} = 9$. Solución: La fracción racionalizada es $9\\sqrt{2}$.',
      'Ejemplo 5 (Racionalización con binomio en el denominador usando el conjugado): Racionalizar $\\frac{4}{\\sqrt{5} - 1}$. Paso 1: El conjugado del denominador $\\sqrt{5} - 1$ es $\\sqrt{5} + 1$. Paso 2: Multiplicamos numerador y denominador por el conjugado: $\\frac{4(\\sqrt{5} + 1)}{(\\sqrt{5} - 1)(\\sqrt{5} + 1)}$. Paso 3: Aplicamos diferencia de cuadrados: $(\\sqrt{5})^2 - 1^2 = 5 - 1 = 4$. Simplificamos: $\\frac{4(\\sqrt{5} + 1)}{4} = \\sqrt{5} + 1$. Solución: El resultado racionalizado es $\\sqrt{5} + 1$.'
    ]
  ),
];

const u3Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u03-l01',
    '3.1',
    'Fórmula general de la ecuación cuadrática ax² + bx + c = 0',
    'En una práctica de física aplicada en el Instituto Nacional de Usulután, se lanza verticalmente hacia arriba un cohete de agua desde una plataforma situada a 2 metros del suelo con una velocidad inicial de 17 metros por segundo. La altura h en metros respecto al suelo en el tiempo t en segundos se modela mediante la ecuación cuadrática h(t) = -5t² + 17t + 2. Los estudiantes necesitan determinar el tiempo exacto en que el cohete aterriza en el suelo (h=0), resolviendo la ecuación cuadrática -5t² + 17t + 2 = 0 mediante la fórmula general. ¿Cuál es el procedimiento analítico para calcular el discriminante y cuáles son las raíces reales resultantes?',
    'Para determinar el instante en que el cohete impacta el suelo igualamos la ecuación a cero: -5t² + 17t + 2 = 0. Multiplicamos toda la ecuación por -1 para trabajar con coeficiente principal positivo: 5t² - 17t - 2 = 0. Identificamos los coeficientes de la ecuación canónica at² + bt + c = 0: a = 5, b = -17 y c = -2. En primer lugar, calculamos el valor del **discriminante** Δ = b² - 4ac: Δ = (-17)² - 4(5)(-2) = 289 - (-40) = 289 + 40 = 329. Como Δ > 0, la ecuación posee dos raíces reales distintas. En segundo lugar, aplicamos la **fórmula cuadrática general**: t = (-b ± √Δ) / (2a) = (-(-17) ± √329) / (2 x 5) = (17 ± √329) / 10. Como √329 ≈ 18.138, calculamos las dos soluciones numéricas: t1 = (17 + 18.138) / 10 = 35.138 / 10 ≈ 3.51 segundos, y t2 = (17 - 18.138) / 10 = -1.138 / 10 ≈ -0.11 segundos. Como el tiempo físico debe ser no negativo (t ≥ 0), se descarta la raíz negativa t2. El cohete aterriza exactamente a los 3.51 segundos de vuelo.',
    'Cualquier ecuación de segundo grado con una incógnita en su forma canónica:\n$$ax^2 + bx + c = 0 \\qquad (a \\neq 0)$$\nse resuelve universalmente mediante la **fórmula cuadrática general**:\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\nEl término subradical $\\Delta = b^2 - 4ac$ se denomina **discriminante** e indica la naturaleza de las soluciones:\n1. Si $\\Delta > 0$: la ecuación tiene **dos soluciones reales distintas**:\n$$x_1 = \\frac{-b + \\sqrt{\\Delta}}{2a}, \\qquad x_2 = \\frac{-b - \\sqrt{\\Delta}}{2a}$$\n2. Si $\\Delta = 0$: la ecuación tiene **una solución real única (raíz doble)**:\n$$x_1 = x_2 = -\\frac{b}{2a}$$\n3. Si $\\Delta < 0$: la ecuación **no tiene solución en el conjunto de los números reales** (posee dos raíces complejas conjugadas en $\\mathbb{C}$).',
    'Para resolver $x^2 - 6x + 9 = 0$: $a=1, b=-6, c=9$. $\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$. Raíz única: $x = \\frac{-(-6)}{2(1)} = \\frac{6}{2} = 3$.',
    [
      { exercise: 'Calcula el discriminante y resuelve por fórmula general: x² - 5x + 6 = 0', hint: 'a = 1, b = -5, c = 6. Δ = (-5)² - 4(1)(6) = 25 - 24 = 1.', answer: 'x = (5 ± 1)/2 => x1 = 3, x2 = 2' },
      { exercise: 'Resuelve la ecuación cuadrática: 2x² + 3x - 5 = 0', hint: 'Δ = 3² - 4(2)(-5) = 9 + 40 = 49; √49 = 7.', answer: 'x = (-3 ± 7)/4 => x1 = 1, x2 = -2.5 (-5/2)' },
      { exercise: 'Determina si la ecuación 3x² - 2x + 4 = 0 tiene soluciones reales analizando su discriminante.', hint: 'Calcula Δ = b² - 4ac.', answer: 'Δ = (-2)² - 4(3)(4) = 4 - 48 = -44 < 0; no tiene soluciones reales.' }
    ],
    [
      'Ejemplo 1 (Ecuación cuadrática con raíces enteras exactas): Resolver $x^2 - 7x + 12 = 0$. Paso 1: Coeficientes: $a = 1, b = -7, c = 12$. Paso 2: Calculamos el discriminante: $\\Delta = (-7)^2 - 4(1)(12) = 49 - 48 = 1$. Paso 3: Aplicamos fórmula general: $x = \\frac{7 \\pm \\sqrt{1}}{2} = \\frac{7 \\pm 1}{2}$. Soluciones: $x_1 = \\frac{8}{2} = 4$ y $x_2 = \\frac{6}{2} = 3$. Solución: Las raíces son $x = 4$ y $x = 3$.',
      'Ejemplo 2 (Ecuación con discriminante no cuadrado perfecto y raíces irracionales): Resolver $x^2 - 4x - 1 = 0$. Paso 1: Coeficientes: $a = 1, b = -4, c = -1$. Paso 2: Calculamos el discriminante: $\\Delta = (-4)^2 - 4(1)(-1) = 16 + 4 = 20$. Paso 3: Aplicamos fórmula: $x = \\frac{4 \\pm \\sqrt{20}}{2} = \\frac{4 \\pm 2\\sqrt{5}}{2} = 2 \\pm \\sqrt{5}$. Solución: Las dos soluciones exactas son $x_1 = 2 + \\sqrt{5}$ y $x_2 = 2 - \\sqrt{5}$.',
      'Ejemplo 3 (Ecuación cuadrática con raíz real doble): Resolver $4x^2 - 12x + 9 = 0$. Paso 1: Coeficientes: $a = 4, b = -12, c = 9$. Paso 2: Discriminante: $\\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$. Paso 3: Al ser $\\Delta = 0$, hay una única raíz: $x = \\frac{-(-12)}{2(4)} = \\frac{12}{8} = \\frac{3}{2}$. Solución: Raíz única (doble) $x = 1.5$ ($3/2$).',
      'Ejemplo 4 (Ecuación cuadrática incompleta sin término independiente): Resolver $3x^2 - 15x = 0$. Paso 1: Identificamos $a = 3, b = -15, c = 0$. Paso 2: Factorizamos el factor común monomio: $3x(x - 5) = 0$. Paso 3: Igualamos cada factor a cero: $3x = 0 \\implies x = 0$, o bien $x - 5 = 0 \\implies x = 5$. Solución: Las dos soluciones son $x_1 = 0$ y $x_2 = 5$.',
      'Ejemplo 5 (Problema verbal de área modelado con ecuación cuadrática): El largo de un terreno rectangular excede a su ancho en 3 metros y su área total es de 40 metros cuadrados. Hallar las dimensiones. Paso 1: Si el ancho es $x$, el largo es $x + 3$. Ecuación de área: $x(x + 3) = 40 \\implies x^2 + 3x - 40 = 0$. Paso 2: Discriminante: $\\Delta = 3^2 - 4(1)(-40) = 9 + 160 = 169$ ($\\sqrt{169} = 13$). Paso 3: $x = \\frac{-3 \\pm 13}{2}$; descartando la negativa, $x = \\frac{10}{2} = 5\\text{ m}$. Solución: El ancho mide $5\\text{ m}$ y el largo mide $8\\text{ m}$.'
    ]
  ),
];

const u4Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u04-l01',
    '4.1',
    'Función cuadrática de la forma y = ax² + c',
    'En el diseño arquitectónico de un puente vehicular sobre la autopista a Comalapa, los ingenieros proyectan un arco parabólico principal de soporte cuya trayectoria vertical sigue la función cuadrática y = -0.5x² + 8, donde x mide la distancia horizontal en metros desde el eje central del puente e y representa la altura del arco sobre la calzada en metros. Para garantizar la seguridad del tránsito pesado, los ingenieros deben analizar detalladamente la curva parabólica: ¿hacia dónde abre la parábola, cuáles son las coordenadas exactas de su vértice y punto de altura máxima, cuál es su eje de simetría y cuál es la luz o ancho total del puente donde el arco corta la calzada (y=0)?',
    'Para responder a todas las preguntas de ingeniería analizamos la ecuación de la función cuadrática de la forma y = ax² + c, donde identificamos los parámetros a = -0.5 y c = 8. En primer lugar, evaluamos la concavidad de la curva: como el coeficiente principal a = -0.5 es estrictamente negativo (a < 0), la parábola abre hacia abajo (cóncava hacia abajo), lo que confirma que el vértice constituye un punto máximo absoluto de elevación. En segundo lugar, dado que no existe término lineal (bx = 0), el eje de simetría vertical de la parábola es exactamente el eje de las ordenadas y, definido por la recta de ecuación x = 0. En tercer lugar, determinamos las coordenadas del vértice evaluando la función en x = 0: y = -0.5(0)² + 8 = 8; por lo tanto, el vértice se ubica en el punto V(0, 8), indicando que la altura máxima del arco es de 8 metros sobre la calzada. En cuarto lugar, para encontrar los puntos de corte con la calzada horizontal hacemos y = 0: -0.5x² + 8 = 0, lo que da 0.5x² = 8, luego x² = 8 / 0.5 = 16, y extrayendo raíz x = ±4 metros. El arco toca la calzada en los puntos (-4, 0) y (4, 0), por lo que la luz horizontal total del arco es de 4 - (-4) = 8 metros.',
    'La **función cuadrática** de la forma canónica incompleta:\n$$y = ax^2 + c \\qquad (a \\neq 0)$$\nrepresenta una parábola en el plano cartesiano con las siguientes propiedades:\n1. **Concavidad y orientación**:\n   - Si $a > 0$: abre hacia arriba (convexa), posee un valor **mínimo** en el vértice.\n   - Si $a < 0$: abre hacia abajo (cóncava), posee un valor **máximo** en el vértice.\n2. **Amplitud**:\n   - Si $|a| > 1$: la parábola es más estrecha (dilatación vertical) que la parábola básica $y = x^2$.\n   - Si $0 < |a| < 1$: la parábola es más ancha (compresión vertical) que $y = x^2$.\n3. **Vértice y eje de simetría**:\n   - El vértice se ubica siempre en el punto coordenado $V(0, c)$.\n   - El eje de simetría es la recta vertical $x = 0$ (el eje $y$).\n4. **Dominio y Rango**:\n   - $\\operatorname{Dom}(f) = \\mathbb{R} = (-\\infty, +\\infty)$.\n   - Si $a > 0$: $\\operatorname{Ran}(f) = [c, +\\infty)$.\n   - Si $a < 0$: $\\operatorname{Ran}(f) = (-\\infty, c]$.',
    'Para la función $y = 3x^2 - 12$: como $a = 3 > 0$, abre hacia arriba; su vértice es $V(0, -12)$ (mínimo); su rango es $[-12, +\\infty)$; y corta al eje $x$ en $3x^2 = 12 \\implies x = \\pm 2$.',
    [
      { exercise: 'Identifica la concavidad, el vértice y el rango de la función cuadrática: y = -2x² + 18', hint: 'a = -2 (abre hacia abajo), c = 18.', answer: 'Abre hacia abajo, vértice V(0, 18), rango (-∞, 18]' },
      { exercise: 'Encuentra los puntos de intersección con el eje x de la parábola: y = x² - 25', hint: 'Haz y = 0 y resuelve x² - 25 = 0.', answer: 'x = ±5; puntos (-5, 0) y (5, 0)' },
      { exercise: 'Compara la gráfica de y = 4x² con la gráfica base y = x².', hint: 'Evalúa la apertura de la curva según el valor de |a|.', answer: 'Ambas abren hacia arriba con vértice en (0, 0), pero y = 4x² es 4 veces más estrecha que y = x².' }
    ],
    [
      'Ejemplo 1 (Graficación por tabla de valores de parábola vertical): Graficar la función $y = x^2 - 4$ tabulando en el intervalo $[-3, 3]$. Paso 1: Calculamos valores: para $x = -3, y = 5$; para $x = -2, y = 0$; para $x = -1, y = -3$; para $x = 0, y = -4$; para $x = 1, y = -3$; para $x = 2, y = 0$; para $x = 3, y = 5$. Paso 2: Ubicamos los puntos en el plano cartesiano observando la simetría respecto al eje $y$. Paso 3: Trazamos la curva continua suave. Solución: Es una parábola simétrica que abre hacia arriba con vértice en $V(0, -4)$ y cortes en $(\\pm 2, 0)$.',
      'Ejemplo 2 (Efecto del parámetro a en la apertura de la parábola): Comparar las aperturas de $y_1 = 0.25x^2$ y $y_2 = 4x^2$. Paso 1: En $y_1$, $|a| = 0.25 < 1$, lo que ensancha la parábola alejándola del eje $y$. Paso 2: En $y_2$, $|a| = 4 > 1$, lo que contrae la parábola acercándola al eje $y$. Paso 3: Ambas abren hacia arriba y comparten vértice en $(0, 0)$. Solución: $y_1 = 0.25x^2$ es significativamente más abierta que $y_2 = 4x^2$.',
      'Ejemplo 3 (Determinación del vértice y traslación vertical): Determinar cómo se transforma la gráfica de $y = -x^2$ al convertirse en $y = -x^2 + 5$. Paso 1: La gráfica base $y = -x^2$ abre hacia abajo con vértice en el origen $(0, 0)$. Paso 2: El término $c = +5$ genera una traslación vertical rígida de $5$ unidades hacia arriba. Paso 3: Las coordenadas del nuevo vértice son $V(0, 5)$. Solución: La parábola se traslada 5 unidades hacia arriba alcanzando un valor máximo en $y = 5$.',
      'Ejemplo 4 (Cálculo del rango de una función cuadrática): Hallar el dominio y rango de la función $f(x) = 3x^2 + 7$. Paso 1: El dominio de cualquier función polinomial es todo el conjunto real: $\\operatorname{Dom}(f) = \\mathbb{R}$. Paso 2: Como $a = 3 > 0$, la parábola abre hacia arriba y su vértice es el punto mínimo: $V(0, 7)$. Paso 3: Los valores de $y$ crecen desde $7$ hasta infinito. Solución: El rango es $[7, +\\infty)$.',
      'Ejemplo 5 (Modelado físico de la altura de un túnel parabólico): La sección de un túnel tiene forma de parábola $y = -\\frac{1}{2}x^2 + 4.5$ en metros. ¿Puede pasar un camión de 3 metros de ancho y 3.5 metros de altura? Paso 1: El ancho de 3 m se extiende desde $x = -1.5$ hasta $x = 1.5$. Paso 2: Calculamos la altura de la parábola en el extremo $x = 1.5$: $y = -0.5(1.5)^2 + 4.5 = -0.5(2.25) + 4.5 = -1.125 + 4.5 = 3.375\\text{ m}$. Paso 3: La altura del túnel en los bordes del camión es $3.375\\text{ m}$, menor a la altura requerida de $3.5\\text{ m}$. Solución: El camión no puede pasar con seguridad pues chocaría en las esquinas superiores.'
    ]
  ),
];

const u5Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u05-l01',
    '5.1',
    'Criterios de semejanza de triángulos y Teorema de Tales',
    'En la plaza central de Santa Ana, un estudiante de noveno grado desea medir la altura de la torre del campanario de la iglesia sin subirse a ella. Para lograrlo en un día soleado, coloca verticalmente una regla escolar de 1.5 metros de longitud y mide la sombra que proyecta sobre el pavimento, obteniendo 0.9 metros. En ese mismo instante, mide la sombra que proyecta la torre completa del campanario sobre la plaza, registrando exactamente 21.6 metros. ¿Qué criterio geométrico de semejanza de triángulos justifica el cálculo de la altura, cuál es la proporción matemática correspondiente y cuál es la altura exacta del campanario?',
    'Para calcular la altura del campanario modelamos la situación mediante dos triángulos rectángulos formados por los objetos verticales, el suelo horizontal y los rayos solares paralelos. En primer lugar, la regla forma un triángulo rectángulo de altura h1 = 1.5 metros y sombra s1 = 0.9 metros. La torre del campanario forma un triángulo rectángulo mayor de altura desconocida H y sombra s2 = 21.6 metros. En segundo lugar, justificamos la semejanza de ambos triángulos: ambos poseen un ángulo recto de 90 grados en su base respecto al suelo, y los rayos solares inciden con el mismo ángulo de elevación respecto a la horizontal por ser líneas de luz paralelas. De acuerdo con el **Criterio AA (Ángulo-Ángulo)** de semejanza de triángulos, si dos triángulos tienen dos pares de ángulos correspondientes congruentes, entonces los triángulos son estrictamente semejantes. En tercer lugar, al ser semejantes, sus lados homólogos son proporcionales, permitiendo plantear la igualdad de razones: H / 1.5 = 21.6 / 0.9. En cuarto lugar, calculamos la razón de semejanza: k = 21.6 / 0.9 = 24. Despejamos la altura: H = 1.5 x 24 = 36 metros. El campanario mide exactamente 36 metros de altura.',
    "Dos figuras geométricas son **semejantes** (símbolo $\\sim$) si tienen exactamente la misma forma aunque difieran en su tamaño. En triángulos, esto significa que sus ángulos correspondientes son iguales y sus lados homólogos son proporcionales:\n$$\\triangle ABC \\sim \\triangle A'B'C' \\iff \\angle A = \\angle A', \\; \\angle B = \\angle B', \\; \\angle C = \\angle C' \\quad \\text{y} \\quad \\frac{a}{a'} = \\frac{b}{b'} = \\frac{c}{c'} = k$$\ndonde $k$ es la **razón de semejanza**.\n**Criterios de semejanza de triángulos**:\n1. **Criterio AA (Ángulo-Ángulo)**: dos pares de ángulos correspondientes congruentes.\n2. **Criterio LLL (Lado-Lado-Lado)**: tres pares de lados homólogos proporcionales: $\\frac{a}{a'} = \\frac{b}{b'} = \\frac{c}{c'}$.\n3. **Criterio LAL (Lado-Ángulo-Lado)**: dos pares de lados proporcionales y el ángulo comprendido congruente.\n**Teorema de Tales**: si varias rectas paralelas cortan a dos transversales, los segmentos determinados en una de ellas son proporcionales a los correspondientes en la otra. Si dos triángulos son semejantes con razón $k$, la razón de sus áreas es $k^2$ y la de sus volúmenes es $k^3$.",
    'Si dos triángulos semejantes tienen lados en razón $k = 3$, y el área del menor es $15\\text{ cm}^2$: el área del mayor es $15 \\times 3^2 = 15 \\times 9 = 135\\text{ cm}^2$.',
    [
      { exercise: 'Un árbol proyecta una sombra de 6 m cuando una vara vertical de 2 m proyecta una sombra de 1.5 m. Halla la altura del árbol.', hint: 'Plantea la proporción h / 2 = 6 / 1.5.', answer: 'h = (6 x 2) / 1.5 = 12 / 1.5 = 8 metros' },
      { exercise: 'Los lados de un triángulo miden 4 cm, 6 cm y 8 cm. Si un triángulo semejante tiene su lado menor de 10 cm, ¿cuánto miden los otros dos lados?', hint: 'Razón de semejanza k = 10 / 4 = 2.5.', answer: 'Lados: 6 x 2.5 = 15 cm y 8 x 2.5 = 20 cm' },
      { exercise: 'Si dos figuras son semejantes con razón de lados k = 5, ¿cuál es la razón entre sus áreas?', hint: 'La razón de áreas es igual a k².', answer: 'k² = 5² = 25 (el área mayor es 25 veces el área menor)' }
    ],
    [
      'Ejemplo 1 (Aplicación del Teorema de Tales en un triángulo): En $\\triangle ABC$, una recta paralela a la base $BC$ corta a los lados $AB$ en $D$ y $AC$ en $E$. Si $AD = 6\\text{ cm}, DB = 4\\text{ cm}$ y $AE = 9\\text{ cm}$, calcular $EC$. Paso 1: Por el teorema de Tales, $\\frac{AD}{DB} = \\frac{AE}{EC}$. Paso 2: Sustituimos valores conocidos: $\\frac{6}{4} = \\frac{9}{EC}$. Paso 3: Despejamos $EC$: $EC = \\frac{4 \\times 9}{6} = \\frac{36}{6} = 6\\text{ cm}$. Solución: El segmento $EC$ mide $6\\text{ cm}$.',
      'Ejemplo 2 (Comprobación del criterio LLL de semejanza): Dos triángulos tienen lados $T_1: (6, 9, 12)$ y $T_2: (8, 12, 16)$. Determinar si son semejantes. Paso 1: Comparamos las razones de lados homólogos: $\\frac{8}{6} = \\frac{4}{3}$, $\\frac{12}{9} = \\frac{4}{3}$ y $\\frac{16}{12} = \\frac{4}{3}$. Paso 2: Como las tres razones son idénticas ($k = \\frac{4}{3}$), se cumple la proporcionalidad estricta. Paso 3: Aplicamos el criterio LLL. Solución: Los triángulos son semejantes con razón de semejanza $k = \\frac{4}{3}$.',
      'Ejemplo 3 (Criterio LAL de semejanza): En dos triángulos, $\\angle B = \\angle E = 45^\\circ$, con lados adyacentes $AB = 8, BC = 12$ y $DE = 12, EF = 18$. ¿Son semejantes? Paso 1: Verificamos el ángulo comprendido: $\\angle B = \\angle E = 45^\\circ$. Paso 2: Calculamos las razones de los lados que forman el ángulo: $\\frac{DE}{AB} = \\frac{12}{8} = 1.5$, y $\\frac{EF}{BC} = \\frac{18}{12} = 1.5$. Paso 3: Al coincidir el ángulo y las razones de los lados, aplica el criterio LAL. Solución: Los triángulos son semejantes.',
      'Ejemplo 4 (Relación entre perímetros y áreas de triángulos semejantes): Dos triángulos semejantes tienen perímetros de $24\\text{ cm}$ y $72\\text{ cm}$. Si el área del primero es $20\\text{ cm}^2$, ¿cuál es el área del segundo? Paso 1: La razón de semejanza lineal es la razón de perímetros: $k = \\frac{72}{24} = 3$. Paso 2: La razón de áreas es $k^2 = 3^2 = 9$. Paso 3: Calculamos el área del segundo triángulo: $A_2 = 20 \\times 9 = 180\\text{ cm}^2$. Solución: El área del segundo triángulo es $180\\text{ cm}^2$.',
      'Ejemplo 5 (Cálculo del ancho de un río mediante semejanza de triángulos): Un topógrafo marca triángulos opuestos por el vértice con líneas visuales para medir el ancho de un río $x$. La proporción es $\\frac{x}{15\\text{ m}} = \\frac{40\\text{ m}}{20\\text{ m}}$. Paso 1: Razón de semejanza: $\\frac{40}{20} = 2$. Paso 2: Despejamos la distancia $x$: $x = 15 \\times 2 = 30\\text{ m}$. Paso 3: Concluimos que el ancho del río es proporcional al segmento medido. Solución: El ancho del río es de $30\\text{ metros}$.'
    ]
  ),
];

const u6Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u06-l01',
    '6.1',
    'El Teorema de Pitágoras y aplicaciones en el espacio',
    'En una estación de bomberos en Santa Ana se despliega una escalera telescópica de rescate de 15 metros de longitud total para evacuar a una persona atrapada en la ventana de un edificio de apartamentos en llamas. Por normas técnicas de seguridad y estabilidad mecánica, la base del camión de bomberos debe estacionarse a exactamente 9 metros de distancia de la fachada vertical del edificio. ¿A qué altura del edificio llega con precisión el extremo superior de la escalera, cómo se demuestra algebraicamente mediante el Teorema de Pitágoras y cuál sería la longitud de la diagonal espacial si el salón de rescate mide 4 metros de largo, 3 metros de ancho y 2.5 metros de alto?',
    'Para calcular la altura que alcanza la escalera modelamos el sistema como un triángulo rectángulo donde la escalera extendida es la hipotenusa (c = 15 m), la distancia horizontal de la base a la pared es uno de los catetos (a = 9 m) y la altura vertical alcanzada en la pared es el otro cateto (b). Aplicamos el **Teorema de Pitágoras**: a² + b² = c². Sustituyendo los valores numéricos: 9² + b² = 15², lo que resulta en 81 + b² = 225. Para despejar el cateto desconocido b², restamos 81 a ambos miembros de la ecuación: b² = 225 - 81 = 144. Extrayendo la raíz cuadrada positiva en ambos lados (por tratarse de una magnitud geométrica de longitud): b = √144 = 12 metros. La escalera alcanza exactamente los 12 metros de altura sobre la pared. Para la segunda parte sobre la diagonal espacial del salón tridimensional de dimensiones l = 4 m, w = 3 m y h = 2.5 m, aplicamos la extensión tridimensional del teorema de Pitágoras: D = √(l² + w² + h²) = √(4² + 3² + 2.5²) = √(16 + 9 + 6.25) = √31.25 ≈ 5.59 metros.',
    'El **Teorema de Pitágoras** es uno de los teoremas angulares de la geometría euclidiana:\nEn todo triángulo rectángulo, el cuadrado de la longitud de la hipotenusa ($c$) es igual a la suma de los cuadrados de las longitudes de los catetos ($a$ y $b$):\n$$a^2 + b^2 = c^2 \\iff c = \\sqrt{a^2 + b^2}$$\nDespejes de los catetos:\n$$a = \\sqrt{c^2 - b^2}, \\qquad b = \\sqrt{c^2 - a^2}$$\n**Recíproco del Teorema de Pitágoras**: si los lados de un triángulo cumplen $a^2 + b^2 = c^2$, entonces el triángulo es **rectángulo** con ángulo recto opuesto al lado $c$.\n- Si $a^2 + b^2 > c^2$: el triángulo es **acutángulo** (todos los ángulos agudos).\n- Si $a^2 + b^2 < c^2$: el triángulo es **obtusángulo** (posee un ángulo obtuso $> 90^\\circ$).\nEn el espacio tridimensional, la diagonal de un paralelepípedo rectangular (ortoedro) es:\n$$D = \\sqrt{a^2 + b^2 + c^2}$$',
    'Para un triángulo con lados 6 cm, 8 cm y 10 cm: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Se cumple la igualdad pitagórica, por lo que es un triángulo rectángulo.',
    [
      { exercise: 'Calcula la hipotenusa de un triángulo rectángulo cuyos catetos miden 5 cm y 12 cm.', hint: 'c = √(5² + 12²) = √(25 + 144).', answer: 'c = √169 = 13 cm' },
      { exercise: 'En un triángulo rectángulo, la hipotenusa mide 25 m y un cateto mide 7 m. ¿Cuánto mide el otro cateto?', hint: 'b = √(25² - 7²) = √(625 - 49).', answer: 'b = √576 = 24 m' },
      { exercise: 'Determina si un triángulo de lados 7 cm, 9 cm y 12 cm es rectángulo, acutángulo u obtusángulo.', hint: 'Compara 7² + 9² con 12².', answer: '49 + 81 = 130 < 144 (12²); es un triángulo obtusángulo.' }
    ],
    [
      'Ejemplo 1 (Cálculo de la diagonal de un rectángulo): Una cancha de fútbol mide $100\\text{ metros}$ de largo por $75\\text{ metros}$ de ancho. Calcular la distancia en diagonal de esquina a esquina. Paso 1: La diagonal divide el rectángulo en dos triángulos rectángulos donde la diagonal es la hipotenusa $c$. Paso 2: Aplicamos Pitágoras: $c = \\sqrt{100^2 + 75^2} = \\sqrt{10,000 + 5,625} = \\sqrt{15,625}$. Paso 3: Calculamos la raíz: $c = 125\\text{ metros}$. Solución: La diagonal de la cancha mide $125\\text{ metros}$.',
      'Ejemplo 2 (Cálculo de la altura de un triángulo equilátero): Calcular la altura de un triángulo equilátero cuyo lado mide $8\\text{ cm}$. Paso 1: La altura divide el triángulo en dos triángulos rectángulos congruentes con hipotenusa $8\\text{ cm}$ y base media de $4\\text{ cm}$. Paso 2: Aplicamos Pitágoras para la altura: $h = \\sqrt{8^2 - 4^2} = \\sqrt{64 - 16} = \\sqrt{48}$. Paso 3: Simplificamos el radical: $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3} \\approx 6.93\\text{ cm}$. Solución: La altura mide $4\\sqrt{3}\\text{ cm}$ ($6.93\\text{ cm}$).',
      'Ejemplo 3 (Verificación de ternas pitagóricas en construcción): Un albañil quiere comprobar que una esquina entre dos paredes forma un ángulo recto perfecto ($90^\\circ$). Mide $3\\text{ m}$ en una pared y $4\\text{ m}$ en la otra. Paso 1: Si la esquina es recta, la distancia entre marcas debe cumplir la terna $(3, 4, 5)$. Paso 2: Calculamos $c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ m}$. Paso 3: Si la distancia diagonal medida con la cinta es exactamente $5\\text{ m}$, la esquina está a escuadra perfecta. Solución: La distancia requerida es de 5 metros.',
      'Ejemplo 4 (Diagonal espacial de una caja cúbica): Calcular la diagonal espacial que une dos vértices opuestos de un cubo de $6\\text{ cm}$ de arista. Paso 1: La fórmula tridimensional para el cubo es $D = \\sqrt{a^2 + a^2 + a^2} = \\sqrt{3a^2} = a\\sqrt{3}$. Paso 2: Sustituimos la arista $a = 6\\text{ cm}$: $D = 6\\sqrt{3}$. Paso 3: Calculamos numéricamente: $6(1.732) \\approx 10.39\\text{ cm}$. Solución: La diagonal espacial mide $6\\sqrt{3}\\text{ cm}$ ($10.39\\text{ cm}$).',
      'Ejemplo 5 (Distancia euclidiana entre dos puntos en el plano cartesiano): Calcular la distancia entre los puntos $A(1, 2)$ y $B(7, 10)$. Paso 1: Diferencia en $x$: $\\Delta x = 7 - 1 = 6$. Paso 2: Diferencia en $y$: $\\Delta y = 10 - 2 = 8$. Paso 3: Aplicamos la fórmula de distancia derivada de Pitágoras: $d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Solución: La distancia entre $A$ y $B$ es de 10 unidades.'
    ]
  ),
];

const u7Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u07-l01',
    '7.1',
    'Ángulo inscrito y ángulo central en circunferencias',
    'En el diseño de una rotonda vial en el redondel Masferrer en San Salvador, un topógrafo traza una circunferencia con centro en O. Dos señales luminosas de advertencia están ubicadas en los puntos A y B sobre la circunferencia. El centro de control O observa el arco formado por ambas señales bajo un ángulo central ∠AOB = 84 grados. Por su parte, una caseta de vigilancia policial está situada en un punto P del borde perimetral de la rotonda, desde donde se observan ambas señales A y B bajo el ángulo inscrito ∠APB. ¿Cuál es la medida exacta del ángulo inscrito observado desde la caseta y qué teorema angular fundamental de la circunferencia sustenta dicha relación?',
    'Para responder a la pregunta de topografía vial aplicamos el **Teorema del Ángulo Inscrito** de ESMATE. En primer lugar, identificamos los elementos de la circunferencia: el ángulo ∠AOB tiene su vértice en el centro O, por lo que es un **ángulo central** cuya medida es de 84 grados y subtiende el arco AB. En segundo lugar, el ángulo ∠APB tiene su vértice P situado sobre la circunferencia misma y sus lados son cuerdas que pasan por los puntos A y B, subtiendiendo exactamente el mismo arco AB; por lo tanto, es un **ángulo inscrito**. En tercer lugar, el teorema fundamental postula que la medida de todo ángulo inscrito en una circunferencia es exactamente igual a la mitad de la medida del ángulo central que subtiende el mismo arco: ∠APB = (1/2) ∠AOB. Sustituyendo el valor conocido del ángulo central: ∠APB = 84 / 2 = 42 grados. La caseta de vigilancia observa las señales luminosas bajo un ángulo de 42 grados. Como corolario directo, cualquier otra caseta ubicada en cualquier otro punto Q sobre el mismo arco mayor observará las señales bajo el mismo ángulo de 42 grados.',
    'En la geometría de la circunferencia en 9° Grado se destacan los siguientes teoremas fundamentales:\n1. **Teorema del Ángulo Central e Inscrito**: la medida de un ángulo inscrito es siempre igual a la mitad del ángulo central que subtiende el mismo arco:\n$$\\theta_{\\text{inscrito}} = \\frac{1}{2}\\theta_{\\text{central}} \\iff \\theta_{\\text{central}} = 2\\theta_{\\text{inscrito}}$$\n2. **Congruencia de ángulos inscritos**: todos los ángulos inscritos que subtienden el mismo arco (o arcos congruentes) tienen exactamente la misma medida.\n3. **Ángulo inscrito en una semicircunferencia**: todo ángulo inscrito cuyos lados pasan por los extremos de un diámetro subtiende un arco de $180^\\circ$ y mide exactamente $90^\\circ$ (un ángulo recto):\n$$AB \\text{ es diámetro} \\implies \\angle APB = 90^\\circ$$\n4. **Cuadrilátero cíclico (inscrito)**: en todo cuadrilátero cuyos cuatro vértices pertenecen a una circunferencia, los ángulos opuestos son suplementarios (suman $180^\\circ$):\n$$\\angle A + \\angle C = 180^\\circ, \\qquad \\angle B + \\angle D = 180^\\circ$$\n5. **Ángulo semi-inscrito**: formado por una cuerda y una recta tangente en el punto de contacto, mide la mitad del arco que subtiende la cuerda.',
    'Si un ángulo central mide $130^\\circ$, el ángulo inscrito correspondiente mide $130^\\circ / 2 = 65^\\circ$. Si un triángulo está inscrito con la hipotenusa en el diámetro, el ángulo opuesto mide $90^\\circ$.',
    [
      { exercise: 'Si un ángulo central mide 96°, ¿cuánto mide cualquier ángulo inscrito que subtienda el mismo arco?', hint: 'Divide el ángulo central entre 2.', answer: '96° / 2 = 48°' },
      { exercise: 'Si un ángulo inscrito en una circunferencia mide 37°, ¿cuál es la medida del ángulo central correspondiente?', hint: 'Multiplica el ángulo inscrito por 2.', answer: '37° x 2 = 74°' },
      { exercise: 'En un cuadrilátero cíclico ABCD, si el ángulo en el vértice A mide 72°, ¿cuánto mide el ángulo opuesto en el vértice C?', hint: 'Los ángulos opuestos de un cuadrilátero cíclico suman 180°.', answer: '180° - 72° = 108°' }
    ],
    [
      'Ejemplo 1 (Cálculo de ángulo central a partir del inscrito): En una circunferencia, una cuerda $AB$ subtiende un ángulo inscrito $\\angle APB = 53^\\circ$. Calcular el ángulo central $\\angle AOB$. Paso 1: Identificamos que el ángulo central subtiende el mismo arco que el inscrito. Paso 2: Aplicamos la relación $\\angle AOB = 2 \\times \\angle APB$. Paso 3: Multiplicamos: $2 \\times 53^\\circ = 106^\\circ$. Solución: El ángulo central mide $106^\\circ$.',
      'Ejemplo 2 (Triángulo inscrito con hipotenusa en el diámetro): En una circunferencia de centro $O$, el segmento $AB$ es un diámetro y $C$ es un punto sobre la circunferencia tal que $\\angle CAB = 32^\\circ$. Hallar $\\angle ABC$. Paso 1: Por ser $AB$ diámetro, el ángulo inscrito $\\angle ACB$ mide exactamente $90^\\circ$. Paso 2: La suma de ángulos interiores de $\\triangle ABC$ es $180^\\circ$. Paso 3: Despejamos: $\\angle ABC = 180^\\circ - (90^\\circ + 32^\\circ) = 180^\\circ - 122^\\circ = 58^\\circ$. Solución: El ángulo $\\angle ABC$ mide $58^\\circ$.',
      'Ejemplo 3 (Ángulos opuestos en cuadrilátero inscrito): En un cuadrilátero inscrito $PQRS$, el ángulo $\\angle P = 85^\\circ$ y el ángulo $\\angle Q = 102^\\circ$. Hallar los ángulos $\\angle R$ y $\\angle S$. Paso 1: Los ángulos opuestos son suplementarios: $\\angle P + \\angle R = 180^\\circ$. Paso 2: Calculamos $\\angle R = 180^\\circ - 85^\\circ = 95^\\circ$. Paso 3: Calculamos $\\angle S = 180^\\circ - 102^\\circ = 78^\\circ$. Solución: $\\angle R = 95^\\circ$ y $\\angle S = 78^\\circ$.',
      'Ejemplo 4 (Ángulo semi-inscrito formado por recta tangente y cuerda): Una recta es tangente en $T$ a una circunferencia y forma con la cuerda $TA$ un ángulo semi-inscrito de $64^\\circ$. ¿Cuánto mide el arco $\\widehat{TA}$? Paso 1: El ángulo semi-inscrito mide la mitad del arco interceptado. Paso 2: Despejamos el arco: $\\text{Medida del arco} = 2 \\times 64^\\circ$. Paso 3: Calculamos: $2 \\times 64^\\circ = 128^\\circ$. Solución: El arco subtendido mide $128^\\circ$.',
      'Ejemplo 5 (Múltiples ángulos inscritos que comparten arco): Tres estudiantes $P_1, P_2$ y $P_3$ se sitúan en el borde circular de una pista observando la meta $AB$. Si $P_1$ mide un ángulo visual de $38^\\circ$, ¿qué ángulo miden $P_2$ y $P_3$? Paso 1: Todos los puntos están sobre el mismo arco de la circunferencia. Paso 2: Todos los ángulos inscritos que subtienden la misma cuerda $AB$ son congruentes entre sí. Paso 3: Por tanto, $\\angle AP_1 B = \\angle AP_2 B = \\angle AP_3 B = 38^\\circ$. Solución: Ambos estudiantes observan la meta bajo un ángulo de $38^\\circ$.'
    ]
  ),
];

const u8Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u08-l01',
    '8.1',
    'Medidas de dispersión: varianza y desviación típica',
    'En la evaluación trimestral de matemática de un complejo educativo en Ahuachapán, el coordinador académico analiza las calificaciones de dos secciones de noveno grado, Sección A y Sección B. Ambas secciones obtuvieron exactamente el mismo promedio o media aritmética general de 7.0 puntos sobre 10. Sin embargo, al examinar detalladamente las notas individuales, en la Sección A las notas están muy concentradas entre 6.5 y 7.5 puntos, mientras que en la Sección B se registran notas extremas muy dispersas entre 3.0 y 10.0 puntos. ¿Por qué la media aritmética es insuficiente para describir el rendimiento global de ambos grupos, qué medidas de dispersión cuantifican esta variabilidad y cuáles son los pasos analíticos para calcular la varianza y la desviación típica?',
    'Para comparar con rigor el comportamiento de ambos grupos de estudiantes necesitamos calcular las **medidas de dispersión**. La media aritmética (media = 7.0) solo mide la tendencia central pero no informa cuán dispersos o alejados se encuentran los datos con respecto a ese centro. En primer lugar, calculamos el rango: en la Sección A el rango es pequeño (7.5 - 6.5 = 1.0), indicando alta concentración, mientras que en la Sección B el rango es amplio (10.0 - 3.0 = 7.0), reflejando gran separación. En segundo lugar, para cuantificar la dispersión de todos los datos calculamos la desviación de cada dato respecto a la media: (xi - media). Si simplemente sumáramos estas desviaciones directas, las positivas y negativas se anularían sumando cero; por esa razón, elevamos cada desviación al cuadrado: (xi - media)². En tercer lugar, calculamos la **varianza** (σ²), que es el promedio aritmético de todos los cuadrados de las desviaciones: dividimos la suma de los cuadrados de las desviaciones entre el número total de datos n. En cuarto lugar, como la varianza queda expresada en unidades al cuadrado (puntos cuadrados), extraemos su raíz cuadrada positiva para obtener la **desviación típica o estándar** (σ = √σ²), la cual regresa a las unidades originales de la escala de notas. Una desviación estándar menor en la Sección A demuestra que su rendimiento es homogéneo y consistente, mientras que la mayor desviación en la Sección B evidencia heterogeneidad y desigualdad académica.',
    'Las **medidas de dispersión** cuantifican el grado de separación, variabilidad o dispersión que presentan los valores de un conjunto de datos numéricos con respecto a su valor central:\n1. **Rango o recorrido** ($R$):\n$$R = X_{\\max} - X_{\\min}$$\n2. **Desviación respecto a la media**: diferencia con signo entre cada valor individual y la media:\n$$d_i = x_i - \\bar{x}$$\n3. **Varianza poblacional** ($\\sigma^2$): promedio de los cuadrados de las desviaciones:\n$$\\sigma^2 = \\frac{\\sum_{i=1}^n (x_i - \\bar{x})^2}{n}$$\n4. **Desviación típica o estándar** ($\\sigma$): raíz cuadrada positiva de la varianza:\n$$\\sigma = \\sqrt{\\sigma^2} = \\sqrt{\\frac{\\sum_{i=1}^n (x_i - \\bar{x})^2}{n}}$$\nPropiedades de la desviación típica:\n- Siempre es una cantidad no negativa: $\\sigma \\ge 0$.\n- Si todos los datos son idénticos, no hay variabilidad y $\\sigma = 0$.\n- A menor desviación típica, mayor es la homogeneidad y confiabilidad del conjunto de datos.',
    'Para los datos 5, 7, 9 con media $\\bar{x} = 7$: desviaciones al cuadrado: $(5-7)^2 = 4$, $(7-7)^2 = 0$, $(9-7)^2 = 4$. Varianza: $\\sigma^2 = (4+0+4)/3 = 8/3 \\approx 2.67$. Desviación típica: $\\sigma = \\sqrt{2.67} \\approx 1.63$.',
    [
      { exercise: 'Si la varianza de un conjunto de datos es 25, ¿cuál es el valor exacto de su desviación típica?', hint: 'La desviación típica es la raíz cuadrada de la varianza.', answer: 'σ = √25 = 5' },
      { exercise: 'Calcula el rango de la serie de notas: 4.5, 6.0, 7.5, 8.0, 9.5', hint: 'Rango = Dato máximo - Dato mínimo.', answer: 'Rango = 9.5 - 4.5 = 5.0' },
      { exercise: 'Dos grupos tienen el mismo promedio de 8.0, pero el grupo 1 tiene σ = 0.5 y el grupo 2 tiene σ = 2.1. ¿Cuál grupo es más homogéneo?', hint: 'Menor desviación típica indica mayor homogeneidad.', answer: 'El grupo 1 es más homogéneo y consistente porque sus datos están más agrupados en torno a la media.' }
    ],
    [
      'Ejemplo 1 (Cálculo paso a paso de varianza para cuatro datos): Calcular la varianza de los datos $4, 6, 8, 10$. Paso 1: Calculamos la media: $\\bar{x} = \\frac{4 + 6 + 8 + 10}{4} = \\frac{28}{4} = 7$. Paso 2: Calculamos los cuadrados de las desviaciones: $(4-7)^2 = 9$; $(6-7)^2 = 1$; $(8-7)^2 = 1$; $(10-7)^2 = 9$. Paso 3: Promediamos los cuadrados: $\\sigma^2 = \\frac{9 + 1 + 1 + 9}{4} = \\frac{20}{4} = 5$. Solución: La varianza es $\\sigma^2 = 5$.',
      'Ejemplo 2 (Cálculo de la desviación típica a partir de la varianza): Con base en los datos del ejemplo anterior donde $\\sigma^2 = 5$, calcular la desviación típica. Paso 1: Extraemos la raíz cuadrada de la varianza: $\\sigma = \\sqrt{5}$. Paso 2: Aproximamos a dos cifras decimales: $\\sqrt{5} \\approx 2.24$. Paso 3: Interpretamos que en promedio los datos se desvían $2.24$ unidades respecto a la media $7$. Solución: La desviación típica es $\\sigma \\approx 2.24$.',
      'Ejemplo 3 (Comparación de dos conjuntos con igual media y diferente dispersión): Conjunto 1: $\\{9, 10, 11\\}$; Conjunto 2: $\\{5, 10, 15\\}$. Determinar cuál conjunto tiene mayor dispersión. Paso 1: Ambos conjuntos tienen media $\\bar{x} = 10$. Paso 2: Varianza 1: $\\frac{(-1)^2 + 0^2 + 1^2}{3} = \\frac{2}{3} \\approx 0.67 \\implies \\sigma_1 \\approx 0.82$. Paso 3: Varianza 2: $\\frac{(-5)^2 + 0^2 + 5^2}{3} = \\frac{50}{3} \\approx 16.67 \\implies \\sigma_2 \\approx 4.08$. Solución: El Conjunto 2 tiene una desviación estándar 5 veces mayor, evidenciando mucha mayor dispersión.',
      'Ejemplo 4 (Efecto de sumar una constante a todos los datos sobre la dispersión): Si a todos los datos de una muestra con $\\sigma = 3.5$ se les suma una bonificación fija de $+5$ puntos, ¿cuál es la nueva desviación típica? Paso 1: Al sumar una constante a todos los datos, la media aumenta en esa misma constante: $\\bar{x}_{\\text{nuevo}} = \\bar{x} + 5$. Paso 2: La diferencia $(x_i + 5) - (\\bar{x} + 5) = x_i - \\bar{x}$ permanece estrictamente inalterada. Paso 3: Por tanto, la dispersión no cambia. Solución: La nueva desviación típica sigue siendo exactamente $\\sigma = 3.5$.',
      'Ejemplo 5 (Interpretación de la desviación típica en control de calidad): Una fábrica de conservas de atún en La Unión calibra máquinas empacadoras. La máquina 1 produce latas de $170\\text{ g}$ con $\\sigma = 1.2\\text{ g}$; la máquina 2 produce latas de $170\\text{ g}$ con $\\sigma = 4.8\\text{ g}$. ¿Qué máquina es más precisa? Paso 1: Comparamos las desviaciones estándar de ambas máquinas. Paso 2: La máquina 1 tiene menor variabilidad respecto al peso nominal ($1.2 < 4.8$). Paso 3: La máquina con menor desviación estándar tiene un proceso más controlado y menor margen de error. Solución: La máquina 1 es significativamente más precisa y confiable.'
    ]
  ),
];

export const GRADE_09_DATA: GradeCurriculumData = {
  id: '9-grado',
  name: '9° Grado',
  cycle: 'Tercer Ciclo de Básica',
  cycleId: 'tercer-ciclo',
  description: 'Currículo oficial ESMATE de noveno grado: productos notables, factorización, cuadráticas, semejanza, Pitágoras y dispersión.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de noveno grado (Tercer Ciclo de Educación Básica).',
      units: [
        createCurriculumUnit(
          'mined-mat-9g-u01',
          1,
          'Multiplicación de polinomios y productos notables',
          '9-grado',
          1,
          'Productos notables, factor común, trinomio cuadrado perfecto y diferencia de cuadrados.',
          ['Factoriza trinomios', 'Aplica productos notables', 'Resuelve problemas geométricos'],
          u1Lessons9G,
          u1Questions9G,
          true
        ),
        createCurriculumUnit('mined-mat-9g-u02', 2, 'Raíz cuadrada y números reales', '9-grado', 1, 'Radicales, simplificación sqrt(a²b) = a*sqrt(b) y racionalización.', ['Opera y racionaliza radicales'], u2Lessons9G),
        createCurriculumUnit('mined-mat-9g-u03', 3, 'Ecuación cuadrática', '9-grado', 1, 'Fórmula general, completación de cuadrados y análisis del discriminante.', ['Resuelve ecuaciones de segundo grado'], u3Lessons9G),
        createCurriculumUnit('mined-mat-9g-u04', 4, 'Función cuadrática de la forma y = ax² + c', '9-grado', 1, 'Parábola con vértice (0, c), concavidad y traslaciones.', ['Grafica funciones cuadráticas'], u4Lessons9G),
        createCurriculumUnit('mined-mat-9g-u05', 5, 'Figuras semejantes', '9-grado', 2, 'Criterios de semejanza de triángulos y Teorema de Tales.', ['Aplica proporciones en semejanza'], u5Lessons9G),
        createCurriculumUnit('mined-mat-9g-u06', 6, 'Teorema de Pitágoras', '9-grado', 2, 'Demostración a² + b² = c² y aplicaciones en distancias.', ['Calcula diagonales con Pitágoras'], u6Lessons9G),
        createCurriculumUnit('mined-mat-9g-u07', 7, 'Ángulo inscrito y central en circunferencias', '9-grado', 2, 'Teorema del ángulo central (theta = 2*alpha) y cuadriláteros cíclicos.', ['Demuestra relaciones angulares'], u7Lessons9G),
        createCurriculumUnit('mined-mat-9g-u08', 8, 'Medidas de dispersión', '9-grado', 2, 'Rango, varianza y desviación típica sigma.', ['Calcula desviación estándar'], u8Lessons9G),
      ],
    },
  ],
};
