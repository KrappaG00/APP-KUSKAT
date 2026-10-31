import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 8° Grado - Unidad 1
// Operaciones algebraicas
// -----------------------------------------------------------------
const u1Archetypes8G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const g = (v % 5) + 2;
      return {
        statement: `¿Cuál es el grado absoluto del monomio algebraico $5x^${g}y^3$?`,
        options: [`$${g + 3}$`, `$${g}$`, `$${g + 4}$`, `$${g + 5}$`],
        correctAnswer: 'A',
        explanation: `El grado absoluto de un monomio es la suma de los exponentes de todas sus variables: $${g} + 3 = ${g + 3}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      const b = (v % 4) + 3;
      return {
        statement: `Al reducir los términos semejantes $${a}x^2 + ${b}x^2 - x^2$, se obtiene exactamente:`,
        options: [
          `$${a + b}x^4$`,
          `$${a + b - 1}x^2$`,
          `$${a + b - 1}x^4$`,
          `$${a + b}x^2$`,
        ],
        correctAnswer: 'B',
        explanation: `Para reducir términos semejantes se suman algebraicamente sus coeficientes y se conserva la parte literal común: $(${a} + ${b} - 1)x^2 = ${a + b - 1}x^2$.`,
      };
    },
  },
  {
    generate: (v) => {
      const m = (v % 4) + 2;
      return {
        statement: `Al multiplicar el monomio $${m}x$ por el binomio $(2x - 5)$, el producto resultante es:`,
        options: [
          `$${m * 2}x - ${m * 5}$`,
          `$${m * 2}x^2 + ${m * 5}x$`,
          `$${m * 2}x^2 - ${m * 5}x$`,
          `$${m * 2}x^2 - 5$`,
        ],
        correctAnswer: 'C',
        explanation: `Aplicando la propiedad distributiva: $${m}x(2x - 5) = (${m} \\times 2)x^2 - (${m} \\times 5)x = ${m * 2}x^2 - ${m * 5}x$.`,
      };
    },
  },
  {
    generate: (v) => {
      const c = (v % 6) + 1;
      return {
        statement: `¿Cuál es el valor numérico del polinomio $P(x) = 2x^2 - 3x + ${c}$ evaluado en $x = 2$?`,
        options: [
          `$${2 * 4 - 6 + c + 4}$`,
          `$${2 * 4 - 6 + c - 2}$`,
          `$${2 * 4 - 6 + c + 1}$`,
          `$${2 * 4 - 6 + c}$`,
        ],
        correctAnswer: 'D',
        explanation: `Sustituimos $x = 2$: $P(2) = 2(2)^2 - 3(2) + ${c} = 2(4) - 6 + ${c} = 8 - 6 + ${c} = ${2 + c}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 5) + 2;
      return {
        statement: `Al sumar los polinomios $(3x^2 + 5x) + (${n}x^2 - 2x)$, la expresión simplificada es:`,
        options: [
          `$${3 + n}x^2 + 3x$`,
          `$${3 + n}x^4 + 3x^2$`,
          `$${3 + n}x^2 - 3x$`,
          `$3x^2 + ${n}x$`,
        ],
        correctAnswer: 'A',
        explanation: `Agrupando términos semejantes: $(3 + ${n})x^2 + (5 - 2)x = ${3 + n}x^2 + 3x$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 4) + 1;
      return {
        statement: `Al restar $(5x - 3) - (${a}x + 4)$, el resultado formal es:`,
        options: [
          `$${5 - a}x + 1$`,
          `$${5 - a}x - 7$`,
          `$${5 + a}x - 7$`,
          `$${5 - a}x - 1$`,
        ],
        correctAnswer: 'B',
        explanation: `Cambiamos los signos del sustraendo: $5x - 3 - ${a}x - 4 = (5 - ${a})x - 7 = ${5 - a}x - 7$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cómo se clasifica formalmente la expresión algebraica $3x^3 - 2x + 7$ por su número de términos?`,
        options: ['Monomio', 'Binomio', 'Trinomio', 'Polinomio de cuatro términos'],
        correctAnswer: 'C',
        explanation: `Una expresión algebraica compuesta por exactamente tres términos no semejantes se denomina **trinomio**.`,
      };
    },
  },
  {
    generate: (v) => {
      const k = (v % 5) + 2;
      return {
        statement: `Al dividir el monomio $12x^5$ entre el monomio $${k * 2}x^2$, se obtiene:`,
        options: [
          `$${Math.floor(12 / (k * 2))}x^7$`,
          `$${Math.floor(12 / (k * 2))}x^2$`,
          `$12x^3$`,
          `$\\frac{${12}}{${k * 2}}x^3$`,
        ],
        correctAnswer: 'D',
        explanation: `Se dividen los coeficientes y se restan los exponentes de bases iguales: $\\frac{12x^5}{${k * 2}x^2} = \\frac{12}{${k * 2}}x^{5-2} = \\frac{12}{${k * 2}}x^3$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cuál es el término independiente en el polinomio $P(x) = 4x^3 - 5x^2 + 8x - 9$?`,
        options: ['$-9$', '$4$', '$8$', '$-5$'],
        correctAnswer: 'A',
        explanation: `El término independiente es aquel que no contiene variable (grado cero respecto a $x$), en este caso $-9$.`,
      };
    },
  },
  {
    generate: (v) => {
      const val = (v % 4) + 1;
      return {
        statement: `Al multiplicar los monomios $(-3x^2)(-${val}x^3)$, el producto correcto es:`,
        options: [
          `$-${3 * val}x^5$`,
          `$+${3 * val}x^5$`,
          `$+${3 * val}x^6$`,
          `$-${3 * val}x^6$`,
        ],
        correctAnswer: 'B',
        explanation: `Aplicando ley de signos $(-)(-) = (+)$ y producto de potencias de igual base $x^2 \\cdot x^3 = x^{2+3} = x^5$: $+${3 * val}x^5$.`,
      };
    },
  },
];

const u1Questions8G = generate50UnitQuestions(
  'mined-mat-8g-u01',
  '8-grado',
  '8G',
  1,
  'Operaciones algebraicas',
  'MINED ESMATE 8° Grado',
  u1Archetypes8G
);

const u1Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u01-l01',
    '1.1',
    'Monomios, polinomios y grado absoluto',
    'En una fábrica de confección textil en Ilopango se modela el costo total de producción semanal mediante la expresión algebraica 4x²y³ + 7xy² - 5x + 12, donde x representa los rollos de tela cortados e y las horas trabajadas en máquinas industriales. El ingeniero de control de calidad requiere clasificar formalmente la estructura de dicha expresión: ¿cuántos términos componen este polinomio, cuál es el grado absoluto de cada monomio individual y cuál es el grado absoluto resultante del polinomio completo?',
    'Para clasificar y analizar el polinomio, examinamos cada término por separado de acuerdo con las definiciones algebraicas de ESMATE. En primer lugar, la expresión está formada por cuatro términos separados por signos de adición y sustracción, por lo que se trata de un polinomio de cuatro términos (multinomio): 4x²y³, +7xy², -5x y +12. En segundo lugar, calculamos el grado absoluto de cada término sumando los exponentes de sus variables: para el primer término 4x²y³, la suma de los exponentes de x e y es 2 + 3 = 5, por lo que es de quinto grado; para el segundo término +7xy², los exponentes son 1 y 2, cuya suma es 1 + 2 = 3 (tercer grado); para el tercer término -5x, el exponente de la variable x es 1 (primer grado); y para el término independiente +12, no contiene variables, por lo que su grado es cero (0). En tercer lugar, el grado absoluto del polinomio corresponde al mayor de los grados absolutos de sus términos integrantes. Comparando los grados 5, 3, 1 y 0, determinamos que el mayor es 5. Por lo tanto, el polinomio es de quinto grado absoluto.',
    'Un **monomio** es una expresión algebraica formada por el producto de un coeficiente numérico real por una o más variables con exponentes enteros no negativos.\nUn **polinomio** es la suma algebraica finita de dos o más monomios.\n1. El **grado absoluto de un monomio** es la suma de los exponentes de todas las variables que lo constituyen:\n$$\\operatorname{Grado}(c x^a y^b z^k) = a + b + k$$\n2. El **grado de un monomio con respecto a una variable** es el exponente que posee dicha variable en el término.\n3. El **grado de un polinomio** es el valor máximo entre los grados absolutos de todos sus términos componentes:\n$$\\operatorname{Grado}(P) = \\max \\{ \\operatorname{Grado}(T_1), \\operatorname{Grado}(T_2), \\dots, \\operatorname{Grado}(T_m) \\}$$\nUn polinomio se dice **completo y ordenado** con respecto a una variable si los exponentes de dicha letra aparecen en orden decreciente consecutivo hasta el término independiente.',
    'En el polinomio $5x^4 - 2x^3y^2 + 8y - 9$: los términos tienen grados $4, 5, 1$ y $0$. El grado del polinomio es $\\max(4, 5, 1, 0) = 5$ respecto a sus variables conjuntas.',
    [
      { exercise: 'Determina el grado absoluto del monomio: -8a^3 b^4 c', hint: 'Suma los exponentes de a, b y c (recuerda que el exponente de c es 1).', answer: '3 + 4 + 1 = 8 (octavo grado)' },
      { exercise: '¿Cuál es el grado del polinomio 6x^5 - 9x^3y^4 + 14x^2 - 20?', hint: 'Identifica el término con la mayor suma de exponentes.', answer: 'El término -9x^3y^4 tiene grado 3 + 4 = 7; el grado del polinomio es 7.' },
      { exercise: 'Ordena de forma descendente respecto a la variable x el polinomio: 3x^2 - 7x^4 + 5 - 2x', hint: 'Escribe primero el término de mayor exponente de x y desciende hasta la constante.', answer: '-7x^4 + 3x^2 - 2x + 5' }
    ],
    [
      'Ejemplo 1 (Cálculo del grado absoluto en monomios de varias variables): Determinar el grado absoluto del monomio algebraico $-15x^4 y^3 z^2$. Paso 1: Identificamos las variables presentes en el término: $x, y, z$. Paso 2: Extraemos los exponentes correspondientes a cada variable: $4$ para $x$, $3$ para $y$, y $2$ para $z$. Paso 3: Sumamos los tres exponentes: $4 + 3 + 2 = 9$. Solución: El monomio tiene un grado absoluto de $9$ (noveno grado).',
      'Ejemplo 2 (Grado relativo y absoluto de un polinomio multivariable): Analizar el polinomio $P(x, y) = 7x^3 y^5 - 2x^6 y + 9x^2 y^4$. Paso 1: Grado respecto a $x$: el mayor exponente de $x$ es $6$. Paso 2: Grado respecto a $y$: el mayor exponente de $y$ es $5$. Paso 3: Grados absolutos de los términos: $3+5=8$, $6+1=7$, $2+4=6$. El mayor es $8$. Solución: Grado relativo a $x$ es $6$, a $y$ es $5$, y grado absoluto es $8$.',
      'Ejemplo 3 (Cálculo del valor numérico de un polinomio en dos variables): Evaluar el polinomio $2x^2 y - 3xy^2 + 5$ para $x = -2$ e $y = 3$. Paso 1: Sustituimos las variables: $2(-2)^2 (3) - 3(-2)(3)^2 + 5$. Paso 2: Calculamos las potencias: $(-2)^2 = 4$ y $3^2 = 9$. Paso 3: Multiplicamos y sumamos: $2(4)(3) - 3(-2)(9) + 5 = 24 - (-54) + 5 = 24 + 54 + 5 = 83$. Solución: El valor numérico es $83$.',
      'Ejemplo 4 (Despeje de una variable en fórmulas algebraicas geométricas): En la fórmula del área del trapecio $A = \\frac{(B + b)h}{2}$, despejar la base menor $b$. Paso 1: Multiplicamos ambos miembros por $2$: $2A = (B + b)h$. Paso 2: Dividimos ambos miembros entre la altura $h$: $\\frac{2A}{h} = B + b$. Paso 3: Restamos la base mayor $B$: $b = \\frac{2A}{h} - B$. Solución: La fórmula despejada es $b = \\frac{2A - Bh}{h}$.',
      'Ejemplo 5 (Reducción ordenada de polinomios semejantes): Simplificar y ordenar $(5a^2 - 3ab + 4b^2) - (2a^2 + 7ab - 6b^2)$. Paso 1: Cambiamos los signos del sustraendo: $5a^2 - 3ab + 4b^2 - 2a^2 - 7ab + 6b^2$. Paso 2: Agrupamos términos semejantes: $(5 - 2)a^2 + (-3 - 7)ab + (4 + 6)b^2$. Paso 3: Reducimos coeficientes: $3a^2 - 10ab + 10b^2$. Solución: El polinomio simplificado es $3a^2 - 10ab + 10b^2$.'
    ]
  ),
  createPscerLesson(
    'mined-mat-8g-u01-l02',
    '1.2',
    'Multiplicación de monomio por polinomio y binomio por binomio',
    'Un maestro de obra en San Martín diseña la distribución de una bodega rectangular. El plano general establece que el ancho total de la bodega mide (2x + 3) metros y el largo total mide (3x + 5) metros. Para presupuestar los costos de piso cerámico por secciones, el maestro necesita determinar la expresión polinomial desarrollada que representa el área total de la bodega y calcular dicha superficie si la variable de diseño x toma el valor de 4 metros.',
    'Para calcular el área de la bodega rectangular multiplicamos el binomio del ancho por el binomio del largo: A = (2x + 3)(3x + 5). Aplicamos de forma metódica la propiedad distributiva de la multiplicación respecto a la suma, multiplicando cada término del primer binomio por todos los términos del segundo binomio. En primer lugar, multiplicamos el primer término 2x: 2x(3x) = 6x² y 2x(5) = 10x. En segundo lugar, multiplicamos el segundo término +3: 3(3x) = 9x y 3(5) = 15. En tercer lugar, agrupamos los cuatro productos intermedios en una sola expresión polinomial: A = 6x² + 10x + 9x + 15. En cuarto lugar, identificamos y reducimos los términos semejantes centrales (10x + 9x = 19x), obteniendo el trinomio final del área: A = 6x² + 19x + 15 metros cuadrados. Finalmente, sustituimos el valor específico x = 4: A = 6(4)² + 19(4) + 15 = 6(16) + 76 + 15 = 96 + 76 + 15 = 187 metros cuadrados.',
    'La multiplicación de expresiones algebraicas polinomiales se fundamenta en la **ley distributiva** y las leyes de los exponentes:\n1. **Monomio por polinomio**: se multiplica el monomio por cada uno de los términos del polinomio, sumando los exponentes de potencias con la misma base:\n$$m(a + b + c) = ma + mb + mc$$\n2. **Binomio por binomio**: se aplica la propiedad distributiva doble, multiplicando cada término del primer binomio por cada término del segundo binomio y reduciendo términos semejantes:\n$$(a + b)(c + d) = ac + ad + bc + bd$$\n3. En la división de un polinomio entre un monomio, se divide de manera independiente cada término del dividendo entre el monomio divisor:\n$$\\frac{a + b + c}{m} = \\frac{a}{m} + \\frac{b}{m} + \\frac{c}{m} \\qquad (m \\neq 0)$$',
    'Para multiplicar $(3x - 2)(x + 4)$: aplicamos distributiva: $3x(x) + 3x(4) - 2(x) - 2(4) = 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8$.',
    [
      { exercise: 'Multiplica el monomio por el polinomio: -3x²(4x³ - 5x + 7)', hint: 'Aplica propiedad distributiva multiplicando coeficientes y sumando exponentes.', answer: '-12x^5 + 15x^3 - 21x^2' },
      { exercise: 'Desarrolla el producto de binomios: (4a + 5)(2a - 3)', hint: 'Distribuye 4a y luego +5, sumando términos semejantes.', answer: '8a² - 12a + 10a - 15 = 8a² - 2a - 15' },
      { exercise: 'Divide el trinomio entre el monomio: (18x⁴ - 12x³ + 6x²) / (6x²)', hint: 'Divide cada término por separado entre 6x².', answer: '3x² - 2x + 1' }
    ],
    [
      'Ejemplo 1 (Multiplicación de monomio por trinomio con signos variados): Desarrollar $-4x^2 (3x^3 - 2x^2 + 5x - 7)$. Paso 1: Multiplicamos por el primer término: $(-4x^2)(3x^3) = -12x^5$. Paso 2: Multiplicamos por los siguientes términos: $(-4x^2)(-2x^2) = +8x^4$ y $(-4x^2)(5x) = -20x^3$. Paso 3: Multiplicamos por la constante: $(-4x^2)(-7) = +28x^2$. Solución: La expresión expandida es $-12x^5 + 8x^4 - 20x^3 + 28x^2$.',
      'Ejemplo 2 (Producto de dos binomios con coeficientes fraccionarios): Efectuar $\\left(x + \\frac{1}{2}\\right)\\left(x + \\frac{2}{3}\\right)$. Paso 1: Multiplicamos términos cuadráticos: $x(x) = x^2$. Paso 2: Multiplicamos términos cruzados y sumamos: $\\frac{2}{3}x + \\frac{1}{2}x = \\left(\\frac{4 + 3}{6}\\right)x = \\frac{7}{6}x$. Paso 3: Multiplicamos constantes: $\\left(\\frac{1}{2}\\right)\\left(\\frac{2}{3}\\right) = \\frac{2}{6} = \\frac{1}{3}$. Solución: El trinomio resultante es $x^2 + \\frac{7}{6}x + \\frac{1}{3}$.',
      'Ejemplo 3 (Multiplicación de un binomio por un trinomio completo): Desarrollar $(x + 2)(x^2 - 3x + 4)$. Paso 1: Distribuimos la variable $x$: $x(x^2) + x(-3x) + x(4) = x^3 - 3x^2 + 4x$. Paso 2: Distribuimos la constante $2$: $2(x^2) + 2(-3x) + 2(4) = 2x^2 - 6x + 8$. Paso 3: Sumamos y reducimos términos semejantes: $x^3 + (-3 + 2)x^2 + (4 - 6)x + 8 = x^3 - x^2 - 2x + 8$. Solución: El polinomio simplificado es $x^3 - x^2 - 2x + 8$.',
      'Ejemplo 4 (División de un polinomio de tres términos entre un monomio): Simplificar $\\frac{24a^4 b^3 - 16a^3 b^2 + 8a^2 b}{8a^2 b}$. Paso 1: Separamos la fracción en tres divisiones independientes. Paso 2: Simplificamos cada cociente: $\\frac{24a^4 b^3}{8a^2 b} = 3a^2 b^2$; $\\frac{-16a^3 b^2}{8a^2 b} = -2ab$; $\\frac{8a^2 b}{8a^2 b} = +1$. Paso 3: Unimos los términos resultantes. Solución: El cociente exacto es $3a^2 b^2 - 2ab + 1$.',
      'Ejemplo 5 (Modelado algebraico del área de una superficie compuesta): Una terraza tiene forma de rectángulo con base $(3x + 1)$ y altura $(2x + 4)$ al que se le resta una jardinera cuadrada central de lado $x$. Determinar el área neta. Paso 1: Área del rectángulo total: $(3x + 1)(2x + 4) = 6x^2 + 12x + 2x + 4 = 6x^2 + 14x + 4$. Paso 2: Área de la jardinera: $x \\cdot x = x^2$. Paso 3: Restamos las áreas: $(6x^2 + 14x + 4) - x^2 = 5x^2 + 14x + 4$. Solución: El área neta de la terraza es $5x^2 + 14x + 4$.'
    ]
  ),
];

const u2Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u02-l01',
    '2.1',
    'Sistemas de ecuaciones 2x2 por el método de reducción',
    'En una pupusería tradicional en Olocuilta, una familia realiza dos pedidos durante el almuerzo: el primer pedido incluye 5 pupusas de arroz y 3 bebidas naturales, con un costo total de 7.00 dólares; el segundo pedido incluye 3 pupusas de arroz y 4 bebidas naturales, totalizando 6.40 dólares. Los clientes desean saber el precio unitario exacto de cada pupusa de arroz (x) y de cada bebida natural (y). ¿Cómo se modela la situación mediante un sistema de ecuaciones lineales 2x2 y cómo se resuelve aplicando el método de reducción por suma o resta?',
    'Para determinar el precio unitario de cada producto planteamos el sistema de dos ecuaciones lineales con dos incógnitas: (1) 5x + 3y = 7.00; (2) 3x + 4y = 6.40. Aplicamos el método de reducción (eliminación) para igualar los coeficientes de la incógnita x. El mínimo común múltiplo de los coeficientes de x (5 y 3) es 15. Multiplicamos la ecuación (1) por 3 y la ecuación (2) por -5 para obtener coeficientes opuestos: (1) 3(5x + 3y = 7.00) resulta en 15x + 9y = 21.00; (2) -5(3x + 4y = 6.40) resulta en -15x - 20y = -32.00. Sumamos ambas ecuaciones miembro a miembro: (15x - 15x) + (9y - 20y) = 21.00 - 32.00, lo que nos da -11y = -11.00. Despejamos y dividiendo entre -11: y = 1.00 dólar por bebida natural. Sustituimos el valor y = 1.00 en la primera ecuación original: 5x + 3(1.00) = 7.00, de donde 5x + 3.00 = 7.00, luego 5x = 4.00 y finalmente x = 0.80 dólares. Comprobamos en la ecuación (2): 3(0.80) + 4(1.00) = 2.40 + 4.00 = 6.40. Cada pupusa cuesta 0.80 dólares y cada bebida 1.00 dólar.',
    'Un **sistema de ecuaciones de primer grado con dos incógnitas** ($2 \\times 2$) tiene la forma general:\n$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$\nEl **método de reducción** (o eliminación por suma y resta) sigue la siguiente secuencia analítica:\n1. Se eligen factores adecuados para multiplicar una o ambas ecuaciones, de modo que los coeficientes de una de las incógnitas resulten números opuestos ($k$ y $-k$).\n2. Se suman miembro a miembro las ecuaciones transformadas para anular esa incógnita, obteniendo una ecuación lineal con una sola incógnita.\n3. Se resuelve la ecuación lineal de una incógnita para hallar su valor numérico.\n4. Se sustituye el valor hallado en cualquiera de las ecuaciones originales para calcular la otra incógnita.\n5. Se comprueba la pareja solución $(x, y)$ sustituyendo en ambas ecuaciones del sistema original.',
    'Para resolver $x + y = 12$ y $x - y = 4$: sumamos directamente las dos ecuaciones: $2x = 16 \\implies x = 8$. Sustituimos en la primera: $8 + y = 12 \\implies y = 4$. La solución es $(8, 4)$.',
    [
      { exercise: 'Resuelve por el método de reducción el sistema: 2x + 3y = 13; 2x - y = 5', hint: 'Resta la segunda ecuación de la primera para eliminar 2x directamente.', answer: '4y = 8 => y = 2, luego 2x - 2 = 5 => 2x = 7 => x = 3.5' },
      { exercise: 'Encuentra la solución del sistema: 3x + 2y = 19; 5x - 3y = 6', hint: 'Multiplica la primera por 3 y la segunda por 2 para eliminar y.', answer: '9x + 6y = 57 y 10x - 6y = 12 => 19x = 69 => x = 3.63... o bien valores enteros.' },
      { exercise: 'La suma de dos números es 45 y su diferencia es 15. Modela y halla los números.', hint: 'Plantea x + y = 45 y x - y = 15.', answer: '2x = 60 => x = 30; y = 15.' }
    ],
    [
      'Ejemplo 1 (Reducción directa cuando los coeficientes son opuestos): Resolver el sistema lineal: $4x + 3y = 22$ y $5x - 3y = 14$. Paso 1: Notamos que la variable $y$ tiene coeficientes opuestos $+3$ y $-3$. Paso 2: Sumamos ambas ecuaciones directamente: $(4x + 5x) + (3y - 3y) = 22 + 14 \\implies 9x = 36$. Paso 3: Despejamos $x = \\frac{36}{9} = 4$. Paso 4: Sustituimos en la primera ecuación: $4(4) + 3y = 22 \\implies 16 + 3y = 22 \\implies 3y = 6 \\implies y = 2$. Solución: La solución es el par ordenado $(4, 2)$.',
      'Ejemplo 2 (Reducción multiplicando una sola ecuación): Resolver el sistema $3x + 2y = 16$ y $x - 4y = -4$. Paso 1: Multiplicamos la segunda ecuación por $-3$ para eliminar $x$: $-3x + 12y = 12$. Paso 2: Sumamos con la primera ecuación: $(3x - 3x) + (2y + 12y) = 16 + 12 \\implies 14y = 28$. Paso 3: Despejamos $y = 2$. Paso 4: Sustituimos en la segunda ecuación original: $x - 4(2) = -4 \\implies x - 8 = -4 \\implies x = 4$. Solución: La pareja solución es $(4, 2)$.',
      'Ejemplo 3 (Resolución por el método de sustitución): Resolver el sistema $y = 2x - 1$ y $3x + 4y = 40$. Paso 1: Como $y$ ya está despejada, la sustituimos en la segunda ecuación: $3x + 4(2x - 1) = 40$. Paso 2: Aplicamos distributiva y resolvemos: $3x + 8x - 4 = 40 \\implies 11x = 44 \\implies x = 4$. Paso 3: Calculamos $y$ sustituyendo $x=4$: $y = 2(4) - 1 = 8 - 1 = 7$. Solución: La solución única es $(4, 7)$.',
      'Ejemplo 4 (Resolución por el método de igualación): Resolver el sistema despejando la misma variable: $x = 3y + 2$ y $x = 5y - 8$. Paso 1: Igualamos ambas expresiones correspondientes a $x$: $3y + 2 = 5y - 8$. Paso 2: Transponemos términos semejantes: $2 + 8 = 5y - 3y \\implies 10 = 2y \\implies y = 5$. Paso 3: Sustituimos $y=5$ en la primera ecuación: $x = 3(5) + 2 = 15 + 2 = 17$. Solución: La solución del sistema es $(17, 5)$.',
      'Ejemplo 5 (Problema verbal de edades resuelto con sistema 2x2): La edad de Carlos es el triple de la edad de Ana y ambas edades suman 48 años. Determina sus edades. Paso 1: Definimos las variables: $c$ para la edad de Carlos y $a$ para la de Ana. Paso 2: Planteamos las ecuaciones: $c = 3a$ y $c + a = 48$. Paso 3: Sustituimos $c$ en la suma: $3a + a = 48 \\implies 4a = 48 \\implies a = 12$. Paso 4: Calculamos $c = 3(12) = 36$. Solución: Carlos tiene 36 años y Ana tiene 12 años.'
    ]
  ),
];

const u3Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u03-l01',
    '3.1',
    'Función lineal y forma pendiente-intercepto y = mx + b',
    'Un camión cisterna en Santa Ana suministra agua potable a una comunidad rural. El tanque de la comunidad almacena inicialmente una reserva base de 250 galones de agua. Cuando la bomba de descarga comienza a operar, vierte agua a razón uniforme y constante de 40 galones por minuto. Si x representa el tiempo en minutos transcurrido desde el encendido de la bomba e y el volumen total acumulado en el tanque en galones, ¿cuál es la ecuación matemática de la función lineal que modela este proceso, qué significado geométrico y físico tienen la pendiente y el intercepto, y cuánta agua habrá tras 15 minutos?',
    'Para modelar matemáticamente la cantidad de agua acumulada analizamos la tasa de variación y la condición inicial. En el instante inicial (x = 0 minutos), el volumen del tanque es de 250 galones; este valor corresponde al intercepto con el eje vertical y, denotado por b = 250, con coordenadas (0, 250) en el plano cartesiano. A medida que transcurre el tiempo, por cada minuto adicional que pasa, el volumen se incrementa exactamente en 40 galones. Esta razón constante de cambio representa la pendiente de la recta: m = 40. Escribiendo la relación funcional en la forma canónica pendiente-intercepto, obtenemos: y = 40x + 250. Físicamente, la pendiente m = 40 representa la velocidad de flujo volumétrico (tasa de llenado) y el intercepto b = 250 representa la reserva previa en el depósito. Para calcular el volumen a los 15 minutos, sustituimos x = 15: y = 40(15) + 250 = 600 + 250 = 850 galones de agua potable.',
    'Una **función lineal** es una relación matemática de primer grado entre dos variables que se expresa en la **forma pendiente-intercepto**:\n$$y = mx + b$$\ndonde:\n- $m$ es la **pendiente** o razón constante de cambio:\n$$m = \\frac{y_2 - y_1}{x_2 - x_1} \\qquad (x_2 \\neq x_1)$$\n  Si $m > 0$, la función es estrictamente creciente; si $m < 0$, la función es decreciente; si $m = 0$, la gráfica es una recta horizontal constante $y = b$.\n- $b$ es el **intercepto** en el eje $y$, que indica el punto de corte $(0, b)$.\n- El intercepto con el eje $x$ (cero o raíz de la función) se obtiene haciendo $y = 0$, resultando en el punto $\\left(-\\frac{b}{m}, 0\\right)$.\nDos rectas no verticales son **paralelas** si y solo si tienen la misma pendiente ($m_1 = m_2$) y distintos interceptos.',
    'Para la recta $y = -2x + 6$: la pendiente es $m = -2$ (decrece 2 unidades en $y$ por cada unidad en $x$), el intercepto con el eje $y$ es $(0, 6)$ y el intercepto con el eje $x$ es $(3, 0)$.',
    [
      { exercise: 'Calcula la pendiente de la recta que pasa por los puntos A(2, 5) y B(6, 17).', hint: 'Aplica la fórmula m = (y2 - y1) / (x2 - x1).', answer: 'm = (17 - 5) / (6 - 2) = 12 / 4 = 3' },
      { exercise: 'Escribe la ecuación de la recta cuya pendiente es -4 y corta al eje y en el punto (0, 7).', hint: 'Sustituye m = -4 y b = 7 en y = mx + b.', answer: 'y = -4x + 7' },
      { exercise: 'Determina las coordenadas del intercepto con el eje x para la recta y = 3x - 12.', hint: 'Haz y = 0 y despeja x.', answer: '3x - 12 = 0 => 3x = 12 => x = 4; punto (4, 0)' }
    ],
    [
      'Ejemplo 1 (Cálculo de pendiente y ecuación a partir de dos puntos): Determinar la ecuación de la recta que pasa por $P_1(1, 4)$ y $P_2(3, 10)$. Paso 1: Calculamos la pendiente $m$: $m = \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3$. Paso 2: Utilizamos la forma punto-pendiente: $y - 4 = 3(x - 1)$. Paso 3: Desarrollamos y despejamos $y$: $y = 3x - 3 + 4 \\implies y = 3x + 1$. Solución: La pendiente es $m = 3$ y la ecuación de la función es $y = 3x + 1$.',
      'Ejemplo 2 (Identificación de elementos lineales desde la ecuación general): Encontrar la pendiente y los interceptos de la recta $2x + 3y - 12 = 0$. Paso 1: Despejamos la variable $y$ para obtener la forma $y = mx + b$: $3y = -2x + 12 \\implies y = -\\frac{2}{3}x + 4$. Paso 2: La pendiente es $m = -\\frac{2}{3}$ y el intercepto con el eje $y$ es $(0, 4)$. Paso 3: Para el intercepto con el eje $x$, hacemos $y = 0$: $2x = 12 \\implies x = 6$, punto $(6, 0)$. Solución: Pendiente $m = -\\frac{2}{3}$, cortes en $(0, 4)$ y $(6, 0)$.',
      'Ejemplo 3 (Verificación de paralelismo entre dos rectas en el plano): Determinar si las rectas $L_1: y = 5x - 8$ y $L_2: 10x - 2y + 7 = 0$ son paralelas. Paso 1: La pendiente de $L_1$ es $m_1 = 5$. Paso 2: Despejamos $y$ en $L_2$: $2y = 10x + 7 \\implies y = 5x + \\frac{7}{2}$; su pendiente es $m_2 = 5$. Paso 3: Como $m_1 = m_2 = 5$ y los interceptos $-8 \\neq 3.5$ son diferentes, las rectas no se cruzan. Solución: Las rectas son estrictamente paralelas.',
      'Ejemplo 4 (Modelado de tarifa de transporte con costo fijo y variable): Un servicio de transporte de carga cobra 15 dólares como tarifa base de contratación más 2.50 dólares por kilómetro recorrido. Escribir la función y calcular el costo de un viaje de 32 km. Paso 1: Identificamos la constante $b = 15$ y la tasa de cambio $m = 2.50$. Paso 2: Formulamos la ecuación: $y = 2.5x + 15$. Paso 3: Evaluamos para $x = 32$: $y = 2.5(32) + 15 = 80 + 15 = 95$ dólares. Solución: La función es $y = 2.5x + 15$ y el costo total es 95 dólares.',
      'Ejemplo 5 (Interpretación del signo de la pendiente y decrecimiento): Un tanque con 600 litros de combustible se vacía a razón de 25 litros por minuto. Analizar su gráfica. Paso 1: La reserva inicial es $b = 600$. Como se vacía, la tasa es negativa: $m = -25$. Paso 2: La función es $y = -25x + 600$. Paso 3: Calculamos el tiempo de vaciado total ($y=0$): $-25x + 600 = 0 \\implies 25x = 600 \\implies x = 24$ minutos. Solución: La recta es decreciente con pendiente $-25$ y el tanque se vacía totalmente a los 24 minutos.'
    ]
  ),
];

const u4Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u04-l01',
    '4.1',
    'Ángulos alternos internos y suma de ángulos de un polígono',
    'En el diseño arquitectónico de una estructura metálica para el techo de una cancha deportiva en San Vicente, dos vigas horizontales paralelas son atravesadas por una viga transversal de soporte diagonal formando varios ángulos. Si uno de los ángulos agudos formados entre la transversal y la primera viga mide exactamente 54 grados, ¿cuánto miden sus ángulos alternos internos, alternos externos y conjugados internos? Asimismo, si el marco poligonal de la estructura perimetral tiene forma de un hexágono regular, ¿cuánto suman sus ángulos internos y cuánto mide cada ángulo interior?',
    'Para responder a la primera parte del problema aplicamos los teoremas angulares de dos rectas paralelas cortadas por una transversal o secante. En primer lugar, los **ángulos alternos internos** se ubican en lados opuestos de la transversal y entre las dos paralelas; por el teorema fundamental de paralelismo, estos ángulos son congruentes y tienen exactamente la misma medida: miden 54 grados. En segundo lugar, los **ángulos alternos externos** se encuentran en lados opuestos de la transversal pero en la región exterior a las paralelas, siendo también congruentes con valor de 54 grados. En tercer lugar, los **ángulos conjugados internos** (o colaterales internos) están del mismo lado de la secante y son suplementarios, por lo que su suma es igual a 180 grados; por tanto, el conjugado mide 180 - 54 = 126 grados. Para responder a la segunda parte sobre el hexágono (n = 6), aplicamos la fórmula de la suma de ángulos interiores de un polígono convexo de n lados: Si = 180(n - 2) = 180(6 - 2) = 180 x 4 = 720 grados. Al ser un hexágono regular con seis ángulos interiores congruentes, cada ángulo mide 720 / 6 = 120 grados.',
    'Para dos rectas paralelas $L_1 \\parallel L_2$ cortadas por una recta secante $T$:\n1. Los pares de ángulos **correspondientes**, **alternos internos** y **alternos externos** son congruentes entre sí:\n$$\\alpha_{\\text{alt. int.}} = \\beta_{\\text{alt. int.}}, \\qquad \\alpha_{\\text{alt. ext.}} = \\beta_{\\text{alt. ext.}}$$\n2. Los pares de ángulos **conjugados internos** y **conjugados externos** son suplementarios (suman $180^\\circ$):\n$$\\alpha + \\beta = 180^\\circ$$\nPara cualquier polígono convexo de $n$ lados ($n \\ge 3$):\n1. La **suma de los ángulos internos** es proporcional al número de triángulos en que se puede triangular desde un solo vértice:\n$$S_i = 180^\\circ(n - 2)$$\n2. La **suma de los ángulos externos** (uno por cada vértice) es una constante universal independiente del número de lados:\n$$S_e = 360^\\circ$$\n3. En un **polígono regular**, cada ángulo interior mide $\\theta = \\frac{180^\\circ(n - 2)}{n}$ y cada ángulo exterior mide $\\theta_e = \\frac{360^\\circ}{n}$.',
    'En un octágono ($n=8$): la suma de ángulos internos es $S_i = 180^\\circ(8 - 2) = 180^\\circ \\times 6 = 1,080^\\circ$. Si es regular, cada ángulo interior mide $1,080^\\circ / 8 = 135^\\circ$.',
    [
      { exercise: 'Si dos rectas paralelas son cortadas por una secante y un ángulo mide 115°, ¿cuánto mide su ángulo alterno interno y su conjugado interno?', hint: 'Alterno interno es igual (115°); conjugado interno es suplementario (180° - 115°).', answer: 'Alterno interno = 115°, conjugado interno = 65°' },
      { exercise: 'Calcula la suma de los ángulos internos de un decágono (polígono de 10 lados).', hint: 'Aplica Si = 180° x (10 - 2).', answer: '180° x 8 = 1,440°' },
      { exercise: '¿Cuántos lados tiene un polígono regular cuyos ángulos internos suman 1,800°?', hint: 'Iguala 180°(n - 2) = 1,800° y despeja n.', answer: 'n - 2 = 10 => n = 12 lados (dodecágono)' }
    ],
    [
      'Ejemplo 1 (Cálculo de ángulos complementarios y suplementarios con paralelas): Dos rectas paralelas cortadas por una transversal forman ángulos alternos internos expresados como $(3x + 10^\\circ)$ y $(5x - 30^\\circ)$. Determinar el valor de $x$ y de los ángulos. Paso 1: Como son alternos internos, son congruentes: $3x + 10 = 5x - 30$. Paso 2: Resolvemos la ecuación: $10 + 30 = 5x - 3x \\implies 40 = 2x \\implies x = 20^\\circ$. Paso 3: Evaluamos: $3(20) + 10 = 70^\\circ$. Solución: La incógnita es $x = 20^\\circ$ y cada ángulo mide $70^\\circ$.',
      'Ejemplo 2 (Suma de ángulos internos y ángulo individual en un pentágono regular): Calcular la suma de ángulos internos y la medida de cada ángulo en un pentágono regular ($n = 5$). Paso 1: Calculamos la suma total de ángulos internos: $S_i = 180^\\circ(5 - 2) = 180^\\circ(3) = 540^\\circ$. Paso 2: Al ser regular, dividimos entre los 5 vértices: $\\theta = \\frac{540^\\circ}{5}$. Paso 3: Realizamos la división: $\\theta = 108^\\circ$. Solución: La suma es $540^\\circ$ y cada ángulo interno mide $108^\\circ$.',
      'Ejemplo 3 (Cálculo de lados a partir de la medida de un ángulo exterior): Un polígono regular tiene un ángulo exterior que mide $40^\\circ$. ¿Cuántos lados tiene el polígono? Paso 1: La suma de ángulos exteriores es siempre $360^\\circ$. Paso 2: Para un polígono regular: $\\text{Ángulo exterior} = \\frac{360^\\circ}{n}$. Paso 3: Despejamos $n$: $n = \\frac{360^\\circ}{40^\\circ} = 9$. Solución: El polígono tiene $9$ lados (eneágono o nonágono regular).',
      'Ejemplo 4 (Número total de diagonales de un polígono): Determinar cuántas diagonales totales pueden trazarse en un octágono ($n = 8$). Paso 1: La fórmula del número total de diagonales es $D = \\frac{n(n - 3)}{2}$. Paso 2: Sustituimos $n = 8$: $D = \\frac{8(8 - 3)}{2} = \\frac{8(5)}{2}$. Paso 3: Calculamos: $D = \\frac{40}{2} = 20$. Solución: En un octágono se pueden trazar 20 diagonales en total.',
      'Ejemplo 5 (Ángulos interiores desconocidos en un cuadrilátero irregular): En un cuadrilátero, tres de sus ángulos internos miden $85^\\circ, 110^\\circ$ y $75^\\circ$. Hallar el cuarto ángulo. Paso 1: La suma de ángulos internos de cualquier cuadrilátero ($n = 4$) es $S_i = 180^\\circ(4 - 2) = 360^\\circ$. Paso 2: Sumamos los tres ángulos conocidos: $85^\\circ + 110^\\circ + 75^\\circ = 270^\\circ$. Paso 3: Restamos del total: $360^\\circ - 270^\\circ = 90^\\circ$. Solución: El cuarto ángulo interior mide exactamente $90^\\circ$ (un ángulo recto).'
    ]
  ),
];

const u5Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u05-l01',
    '5.1',
    'Criterios de congruencia de triángulos (LLL, LAL, ALA)',
    'Durante un proyecto de ingeniería topográfica para la construcción de una pasarela peatonal sobre un río en Chalatenango, el equipo de topografía necesita demostrar deductivamente que dos secciones triangulares de acero ABC y DEF son idénticas en forma y tamaño exactos. Los ingenieros han medido y verificado que el lado AB = DE = 7.5 metros, el lado BC = EF = 5.0 metros y el ángulo comprendido entre ellos mide ∠B = ∠E = 48 grados. ¿Qué criterio formal de congruencia asegura que ambas estructuras son congruentes y qué conclusiones geométricas se deducen respecto a los lados y ángulos restantes?',
    'Para establecer rigurosamente la congruencia entre los dos triángulos ABC y DEF, comparamos sus elementos homólogos correspondientes. En primer lugar, identificamos que se conocen dos pares de lados congruentes: el segmento AB tiene la misma longitud que el segmento DE (AB = DE = 7.5 m), y el segmento BC tiene la misma longitud que el segmento EF (BC = EF = 5.0 m). En segundo lugar, verificamos la posición del ángulo dado: el ángulo ∠B está situado exactamente entre los lados AB y BC, y el ángulo ∠E está ubicado entre los lados DE y EF; además, ambos ángulos tienen idéntica abertura de 48 grados (∠B = ∠E). En tercer lugar, aplicamos el **Criterio LAL (Lado-Ángulo-Lado)** de congruencia de triángulos, el cual postula que si dos lados y el ángulo comprendido de un triángulo son respectivamente congruentes con dos lados y el ángulo comprendido de otro triángulo, entonces ambos triángulos son estrictamente congruentes: △ABC ≅ △DEF. Como consecuencia geométrica directa, todos los demás elementos homólogos correspondientes son congruentes: el tercer lado AC = DF, el ángulo ∠A = ∠D y el ángulo ∠C = ∠F.',
    'Dos figuras geométricas son **congruentes** (símbolo $\\cong$) si tienen exactamente la misma forma geométrica y el mismo tamaño, de manera que haciéndolas coincidir mediante traslación, rotación o reflexión se superponen punto por punto.\nPara demostrar la congruencia entre dos triángulos sin necesidad de medir los seis elementos se utilizan tres **criterios fundamentales de congruencia**:\n1. **Criterio LLL (Lado-Lado-Lado)**: dos triángulos son congruentes si sus tres lados correspondientes tienen respectivamente la misma longitud:\n$$AB = DE, \\quad BC = EF, \\quad CA = FD \\implies \\triangle ABC \\cong \\triangle DEF$$\n2. **Criterio LAL (Lado-Ángulo-Lado)**: dos triángulos son congruentes si tienen dos lados congruentes y el ángulo comprendido entre ellos de igual medida:\n$$AB = DE, \\quad \\angle B = \\angle E, \\quad BC = EF \\implies \\triangle ABC \\cong \\triangle DEF$$\n3. **Criterio ALA (Ángulo-Lado-Ángulo)**: dos triángulos son congruentes si tienen dos ángulos congruentes y el lado adyacente comprendido entre ellos de igual medida:\n$$\\angle A = \\angle D, \\quad AB = DE, \\quad \\angle B = \\angle E \\implies \\triangle ABC \\cong \\triangle DEF$$',
    'Si en dos triángulos $\\triangle ABC$ y $\\triangle PQR$ se tiene que $AB = PQ = 6\\text{ cm}$, $\\angle A = \\angle P = 40^\\circ$ y $\\angle B = \\angle Q = 75^\\circ$: por el criterio ALA se concluye que $\\triangle ABC \\cong \\triangle PQR$.',
    [
      { exercise: 'Si los tres lados de un triángulo miden 5 cm, 8 cm y 10 cm, y otro triángulo tiene lados de 8 cm, 10 cm y 5 cm, ¿son congruentes y por qué criterio?', hint: 'Compara los tres lados.', answer: 'Son congruentes por el criterio LLL (Lado-Lado-Lado).' },
      { exercise: 'En dos triángulos rectángulos, los dos catetos del primero miden igual que los dos catetos del segundo. ¿Qué criterio demuestra su congruencia?', hint: 'El ángulo recto entre los dos catetos mide 90° en ambos.', answer: 'Criterio LAL (cateto-ángulo recto-cateto).' },
      { exercise: 'Dos triángulos tienen dos ángulos iguales de 30° y 60°, pero sus lados no miden lo mismo. ¿Son congruentes?', hint: 'La igualdad de tres ángulos garantiza semejanza, no congruencia.', answer: 'No necesariamente; son semejantes (tienen la misma forma pero distinto tamaño).' }
    ],
    [
      'Ejemplo 1 (Demostración formal con criterio LAL): En un cuadrilátero con lados $AB = AD$ y la diagonal $AC$ que biseca el ángulo en $A$ ($\\angle BAC = \\angle DAC$). Demostrar que $\\triangle ABC \\cong \\triangle ADC$. Paso 1: Lado $AB \\cong AD$ (hipótesis). Paso 2: Ángulo $\\angle BAC \\cong \\angle DAC$ (por ser $AC$ bisectriz). Paso 3: Lado $AC \\cong AC$ (lado compartido o reflexivo). Solución: Por el criterio LAL, $\\triangle ABC \\cong \\triangle ADC$, lo que implica que $BC = DC$.',
      'Ejemplo 2 (Demostración de congruencia con criterio ALA): Demostrar que la diagonal de un paralelogramo $ABCD$ lo divide en dos triángulos congruentes. Paso 1: Dado que $AB \\parallel CD$, los ángulos alternos internos son congruentes: $\\angle BAC = \\angle DCA$. Paso 2: La diagonal $AC$ es un lado común a ambos triángulos ($AC = CA$). Paso 3: Por $AD \\parallel BC$, los ángulos alternos internos son congruentes: $\\angle BCA = \\angle DAC$. Solución: Por el criterio ALA, $\\triangle ABC \\cong \\triangle CDA$.',
      'Ejemplo 3 (Rigidez triangular por criterio LLL): Explicar por qué las estructuras de puentes y techos se construyen a base de triángulos y no de cuadriláteros. Paso 1: Dados tres segmentos de longitudes fijas que cumplen la desigualdad triangular, solo puede formarse un único triángulo en forma y tamaño. Paso 2: Por el criterio LLL, cualquier otro triángulo con esos mismos tres lados será congruente al primero. Paso 3: No es posible deformar sus ángulos sin alterar las longitudes de los lados. Solución: El criterio LLL garantiza la indeformabilidad y rigidez geométrica del triángulo.',
      'Ejemplo 4 (Congruencia de triángulos rectángulos por hipotenusa y cateto): Demostrar que dos triángulos rectángulos con igual hipotenusa ($c = 13\\text{ cm}$) y un cateto igual ($a = 5\\text{ cm}$) son congruentes. Paso 1: Aplicamos el teorema de Pitágoras en ambos triángulos: $b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$. Paso 2: Ambos triángulos tienen sus tres lados correspondientes congruentes: $5, 12$ y $13\\text{ cm}$. Paso 3: Por el criterio LLL (o criterio LAL con catetos), los triángulos son congruentes. Solución: Se demuestra que son congruentes.',
      'Ejemplo 5 (Cálculo de distancias inaccesibles mediante triángulos congruentes): Para medir el ancho de un río desde la orilla, un topógrafo fija estacas formando dos triángulos opuestos por el vértice con ángulos rectos y un lado base conocido de $28\\text{ m}$. Paso 1: Los ángulos opuestos por el vértice son iguales. Paso 2: Los ángulos rectos de observación en las orillas son congruentes ($90^\\circ$). Paso 3: El lado intermedio común se mide como $28\\text{ m}$. Por criterio ALA, ambos triángulos son congruentes. Solución: El ancho del río es exactamente igual al lado homólogo medido: $28\\text{ metros}$.'
    ]
  ),
];

const u6Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u06-l01',
    '6.1',
    'Propiedades del triángulo isósceles y paralelogramos',
    'En un taller de carpintería en Izalco se fabrica una cercha de soporte en forma de triángulo isósceles ABC con lados iguales AB = AC = 2.6 metros para sostener el techo de una vivienda rural. El carpintero mide con transportador el ángulo en el vértice superior A obteniendo exactamente 36 grados. Para cortar los tirantes de refuerzo en los apoyos inferiores B y C, ¿cuánto debe medir cada uno de los dos ángulos de la base? Además, si se incorpora una pieza transversal uniendo los puntos medios de los lados formando un paralelogramo en la base, ¿cuáles son las propiedades angulares y diagonales que garantizan la estabilidad del marco?',
    'Para determinar la medida de los ángulos de la base del triángulo isósceles aplicamos el teorema fundamental de los triángulos isósceles de ESMATE: en todo triángulo isósceles, los ángulos opuestos a los lados de igual longitud son congruentes; por consiguiente, el ángulo en el vértice B y el ángulo en el vértice C tienen exactamente la misma medida: ∠B = ∠C. Sabemos además que en cualquier triángulo la suma de los tres ángulos interiores es igual a 180 grados: ∠A + ∠B + ∠C = 180 grados. Sustituyendo el ángulo conocido del vértice superior (∠A = 36 grados) y haciendo ∠B = ∠C = x, planteamos la ecuación: 36 + 2x = 180. Despejamos el valor de la incógnita x: 2x = 180 - 36 = 144, de donde x = 144 / 2 = 72 grados. Cada ángulo de la base debe cortarse a 72 grados. Para el paralelogramo base, sus propiedades geométricas garantizan estabilidad: los lados opuestos son paralelos y de igual longitud, los ángulos opuestos son congruentes, los ángulos consecutivos son suplementarios (suman 180 grados) y sus diagonales se bisecan mutuamente cortándose exactamente en su punto medio.',
    'En la geometría deductiva plana de 8° Grado se destacan las siguientes propiedades fundamentales:\n1. **Propiedades del triángulo isósceles**:\n   - A lados iguales se oponen ángulos iguales: $AB = AC \\iff \\angle B = \\angle C$.\n   - La bisectriz del ángulo del vértice es al mismo tiempo la **altura**, la **mediana** respecto a la base y la **mediatriz** de la base.\n2. **Propiedades fundamentales del paralelogramo**:\n   - Los lados opuestos son congruentes: $AB = CD$ y $BC = DA$.\n   - Los ángulos opuestos son congruentes: $\\angle A = \\angle C$ y $\\angle B = \\angle D$.\n   - Los ángulos consecutivos son suplementarios: $\\angle A + \\angle B = 180^\\circ$.\n   - **Las diagonales se cortan mutuamente en su punto medio**: si $M$ es el cruce de las diagonales $AC$ y $BD$, entonces $AM = MC$ y $BM = MD$.\n3. En un **rombo**, las diagonales son perpendiculares entre sí y son bisectrices de los ángulos interiores. En un **rectángulo**, las diagonales tienen exactamente la misma longitud.',
    'En un paralelogramo $ABCD$, si el ángulo $\\angle A = 65^\\circ$: el ángulo opuesto $\\angle C = 65^\\circ$ y los ángulos consecutivos $\\angle B = \\angle D = 180^\\circ - 65^\\circ = 115^\\circ$.',
    [
      { exercise: 'En un triángulo isósceles, el ángulo del vértice mide 50°. ¿Cuánto mide cada uno de los dos ángulos de la base?', hint: 'Resta 180° - 50° y divide el resultado entre 2.', answer: '(180° - 50°) / 2 = 130° / 2 = 65°' },
      { exercise: 'En un paralelogramo ABCD, si la diagonal AC mide 16 cm y la diagonal BD mide 10 cm, ¿cuánto mide el segmento desde un vértice al punto de corte M?', hint: 'Las diagonales se cortan en su punto medio.', answer: 'AM = MC = 8 cm, BM = MD = 5 cm' },
      { exercise: 'Si los cuatro lados de un cuadrilátero son iguales pero sus diagonales no son perpendiculares, ¿es un rombo?', hint: 'En todo rombo las diagonales son obligatoriamente perpendiculares.', answer: 'No; por definición un cuadrilátero de lados iguales es un rombo y sus diagonales deben ser perpendiculares.' }
    ],
    [
      'Ejemplo 1 (Cálculo del ángulo del vértice en un triángulo isósceles): Si uno de los ángulos de la base de un triángulo isósceles mide $55^\\circ$, calcular el ángulo del vértice opuesto. Paso 1: Como los dos ángulos de la base son iguales, ambos miden $55^\\circ$. Paso 2: Sumamos los ángulos basales: $55^\\circ + 55^\\circ = 110^\\circ$. Paso 3: Restamos de la suma total interior ($180^\\circ$): $180^\\circ - 110^\\circ = 70^\\circ$. Solución: El ángulo del vértice mide $70^\\circ$.',
      'Ejemplo 2 (Demostración de que la altura en un isósceles es mediana): En $\\triangle ABC$ con $AB = AC$, se traza la altura $AD \\perp BC$. Demostrar que $BD = DC$. Paso 1: En los triángulos rectángulos $\\triangle ADB$ y $\\triangle ADC$, la hipotenusa es igual ($AB = AC$). Paso 2: El cateto $AD$ es común a ambos triángulos. Paso 3: Por el criterio de congruencia de triángulos rectángulos, $\\triangle ADB \\cong \\triangle ADC$, lo que implica $BD = DC$. Solución: Se demuestra que $D$ es el punto medio de $BC$.',
      'Ejemplo 3 (Ecuaciones algebraicas en lados opuestos de un paralelogramo): En el paralelogramo $ABCD$, el lado $AB = 3x + 5$ y el lado opuesto $CD = 5x - 7$. Hallar la longitud del lado. Paso 1: Los lados opuestos son congruentes: $3x + 5 = 5x - 7$. Paso 2: Resolvemos la ecuación: $5 + 7 = 5x - 3x \\implies 12 = 2x \\implies x = 6$. Paso 3: Sustituimos $x = 6$: $AB = 3(6) + 5 = 18 + 5 = 23$. Solución: La longitud del lado es 23 unidades.',
      'Ejemplo 4 (Propiedades de diagonales en un rombo): Un rombo tiene diagonales que miden $12\\text{ cm}$ y $16\\text{ cm}$. Calcular la longitud de cada uno de sus cuatro lados. Paso 1: Las diagonales son perpendiculares y se cortan en su punto medio, formando cuatro triángulos rectángulos con catetos de $6\\text{ cm}$ y $8\\text{ cm}$. Paso 2: Aplicamos el teorema de Pitágoras: $L = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$. Paso 3: Concluimos que los cuatro lados del rombo son iguales. Solución: Cada lado del rombo mide $10\\text{ cm}$.',
      'Ejemplo 5 (Ángulos en un trapecio isósceles): En un trapecio isósceles $ABCD$, el ángulo en la base mayor mide $68^\\circ$. Determinar los tres ángulos restantes. Paso 1: Por ser isósceles, los ángulos en la misma base son iguales: el otro ángulo de la base mayor mide $68^\\circ$. Paso 2: Como las bases son paralelas, los ángulos adyacentes a un lado no paralelo son suplementarios: $180^\\circ - 68^\\circ = 112^\\circ$. Paso 3: Los dos ángulos de la base menor miden $112^\\circ$ cada uno. Solución: Los ángulos son $68^\\circ, 68^\\circ, 112^\\circ$ y $112^\\circ$.'
    ]
  ),
];

const u7Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u07-l01',
    '7.1',
    'Volumen de conos, cilindros y esferas',
    'En una cooperativa agropecuaria de Usulután se almacenan granos básicos en tres tipos de silos metálicos: el primer silo tiene forma de cilindro circular recto de radio 3 metros y altura 8 metros; el segundo tiene forma de cono invertido de igual radio (3 metros) e igual altura (8 metros); y el tercer depósito es un tanque esférico de almacenamiento de gas propano con un radio de 3 metros. ¿Cuál es el volumen en metros cúbicos de cada uno de los tres depósitos (utilizando pi ≈ 3.1416), qué relación geométrica proporcional existe entre el cilindro y el cono, y cuántos litros de capacidad posee el silo cilíndrico?',
    'Para calcular el volumen de cada cuerpo de revolución aplicamos las fórmulas oficiales del MINED. En primer lugar, para el cilindro calculamos el área de su base circular y la multiplicamos por la altura: V = pi por radio al cuadrado por altura = 3.1416 x 3² x 8 = 3.1416 x 9 x 8 = 3.1416 x 72 = 226.1952 metros cúbicos. En segundo lugar, para el cono con idéntico radio y altura, su volumen es exactamente un tercio de la capacidad del cilindro: V = (1/3) pi por radio al cuadrado por altura = (1/3)(226.1952) = 75.3984 metros cúbicos. En tercer lugar, para la esfera aplicamos la fórmula correspondiente a su radio: V = (4/3) pi por radio al cubo = (4/3)(3.1416) x 27 = 4 x 3.1416 x 9 = 113.0976 metros cúbicos. Comprobamos la relación geométrica: el volumen del cono es 1/3 del cilindro y el de la esfera equivale a 2/3 del volumen de un cilindro circunscrito de radio 3 y altura 6 metros. Finalmente, dado que 1 metro cúbico equivale a 1,000 litros, el silo cilíndrico tiene una capacidad de 226,195.2 litros.',
    'Los **cuerpos de revolución** se generan al girar una figura plana alrededor de un eje. Sus volúmenes oficiales en ESMATE son:\n1. **Cilindro circular recto** (giro de un rectángulo):\n$$V_{\\text{cilindro}} = A_b \\times h = \\pi r^2 h$$\nÁrea total: $A_T = 2\\pi r h + 2\\pi r^2 = 2\\pi r(h + r)$.\n2. **Cono circular recto** (giro de un triángulo rectángulo):\n$$V_{\\text{cono}} = \\frac{1}{3} A_b \\times h = \\frac{1}{3} \\pi r^2 h$$\nLa generatriz $g$, el radio $r$ y la altura $h$ cumplen el teorema de Pitágoras: $g^2 = r^2 + h^2$.\n3. **Esfera** (giro de un semicírculo):\n$$V_{\\text{esfera}} = \\frac{4}{3} \\pi r^3$$\nÁrea superficial esférica: $A_{\\text{esfera}} = 4\\pi r^2$.\nEquivalencia métrica fundamental: $1\\text{ litro} = 1,000\\text{ cm}^3 = 0.001\\text{ m}^3$, y $1\\text{ m}^3 = 1,000\\text{ litros}$.',
    'Para un cono con radio $r = 4\\text{ cm}$ y altura $h = 9\\text{ cm}$: $V = \\frac{1}{3}\\pi(4^2)(9) = \\frac{1}{3}\\pi(16)(9) = 48\\pi \\approx 150.8\\text{ cm}^3$.',
    [
      { exercise: 'Calcula el volumen de un cilindro metálico que tiene 5 cm de radio y 12 cm de altura (usa pi ≈ 3.1416).', hint: 'Aplica V = pi * r² * h.', answer: 'V = 3.1416 * 25 * 12 = 942.48 cm³' },
      { exercise: 'Si un cilindro tiene un volumen de 120 cm³, ¿cuál es el volumen de un cono que tiene su misma base y misma altura?', hint: 'El cono tiene exactamente un tercio del volumen del cilindro.', answer: '120 / 3 = 40 cm³' },
      { exercise: 'Calcula el volumen de una esfera cuyo radio mide 6 cm en términos de pi.', hint: 'V = (4/3) * pi * 6³ = (4/3) * pi * 216.', answer: 'V = 288*pi cm³ (aprox 904.78 cm³)' }
    ],
    [
      'Ejemplo 1 (Cálculo del volumen de un cono dada su generatriz y radio): Un cono tiene radio $r = 6\\text{ cm}$ y generatriz $g = 10\\text{ cm}$. Calcular su volumen. Paso 1: Hallamos la altura $h$ aplicando el teorema de Pitágoras: $h = \\sqrt{g^2 - r^2} = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8\\text{ cm}$. Paso 2: Aplicamos la fórmula del cono: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(6^2)(8)$. Paso 3: Multiplicamos: $\\frac{1}{3}\\pi(36)(8) = 96\\pi \\approx 301.59\\text{ cm}^3$. Solución: El volumen del cono es $96\\pi\\text{ cm}^3$ ($301.59\\text{ cm}^3$).',
      'Ejemplo 2 (Capacidad en litros de un depósito cilíndrico de agua): Un tanque cilíndrico en una finca tiene $2\\text{ m}$ de diámetro y $3\\text{ m}$ de altura. Determinar cuántos litros contiene. Paso 1: El radio es la mitad del diámetro: $r = 1\\text{ m}$. Paso 2: Calculamos el volumen: $V = \\pi r^2 h = 3.1416 \\times 1^2 \\times 3 = 9.4248\\text{ m}^3$. Paso 3: Convertimos a litros ($1\\text{ m}^3 = 1,000\\text{ l}$): $9.4248 \\times 1,000 = 9,424.8\\text{ litros}$. Solución: El depósito tiene una capacidad de 9,424.8 litros.',
      'Ejemplo 3 (Cálculo del volumen de una esfera a partir de su diámetro): Una pelota medicinal tiene un diámetro de $20\\text{ cm}$. Calcular su volumen en centímetros cúbicos. Paso 1: El radio es $r = 10\\text{ cm}$. Paso 2: Aplicamos la fórmula de la esfera: $V = \\frac{4}{3}\\pi(10)^3 = \\frac{4}{3}\\pi(1,000)$. Paso 3: Multiplicamos: $\\frac{4,000}{3}\\pi \\approx 1,333.33 \\times 3.1416 \\approx 4,188.79\\text{ cm}^3$. Solución: El volumen es aproximadamente $4,188.79\\text{ cm}^3$.',
      'Ejemplo 4 (Área superficial total de un cilindro cerrado): Calcular el área total de una lata cilíndrica de radio $4\\text{ cm}$ y altura $10\\text{ cm}$. Paso 1: Área lateral: $A_L = 2\\pi r h = 2\\pi(4)(10) = 80\\pi\\text{ cm}^2$. Paso 2: Área de las dos bases circulares: $2A_b = 2(\\pi r^2) = 2\\pi(4^2) = 32\\pi\\text{ cm}^2$. Paso 3: Sumamos ambas áreas: $A_T = 80\\pi + 32\\pi = 112\\pi \\approx 351.86\\text{ cm}^2$. Solución: El área total es $112\\pi\\text{ cm}^2$ ($351.86\\text{ cm}^2$).',
      'Ejemplo 5 (Volumen de un cuerpo compuesto de cilindro y semiesfera): Un silo está compuesto por un cilindro de radio $2\\text{ m}$ y altura $5\\text{ m}$, coronado por una semiesfera de igual radio. Paso 1: Volumen del cilindro: $V_1 = \\pi(2^2)(5) = 20\\pi\\text{ m}^3$. Paso 2: Volumen de la semiesfera (mitad de esfera): $V_2 = \\frac{1}{2}\\left(\\frac{4}{3}\\pi(2^3)\\right) = \\frac{16}{3}\\pi\\text{ m}^3$. Paso 3: Sumamos ambos volúmenes: $V_T = 20\\pi + 5.33\\pi = 25.33\\pi \\approx 79.59\\text{ m}^3$. Solución: El volumen total del silo compuesto es $79.59\\text{ m}^3$.'
    ]
  ),
];

const u8Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u08-l01',
    '8.1',
    'Organización de datos en tablas de frecuencia e histogramas',
    'En una jornada médica escolar desarrollada en el departamento de Morazán, se registra la masa corporal en kilogramos de 40 estudiantes de octavo grado, obteniendo valores continuos comprendidos entre 42 kg y 74 kg. El equipo de salud y el docente de matemática necesitan organizar esta información en una tabla de distribución de frecuencias agrupadas en intervalos de clase de igual amplitud, determinar el número óptimo de clases, calcular las marcas de clase correspondientes y trazar un histograma junto con su polígono de frecuencias. ¿Cuáles son los pasos analíticos para estructurar la tabla y qué interpretación visual proporciona el histograma?',
    'Para organizar y resumir un conjunto de datos cuantitativos continuos se sigue el método estadístico de clases y frecuencias de ESMATE. En primer lugar, determinamos el rango o recorrido restando el dato menor del dato mayor: R = 74 - 42 = 32 kilogramos. En segundo lugar, definimos el número de clases (k). Para 40 datos, se eligen habitualmente entre 5 y 6 clases. Si seleccionamos k = 5 clases, calculamos el ancho o amplitud de clase dividiendo el rango entre las clases: c = 32 / 5 = 6.4, el cual redondeamos hacia arriba a c = 7 para garantizar la cobertura total de los datos mediante intervalos cerrados a la izquierda y abiertos a la derecha: [42, 49), [49, 56), [56, 63), [63, 70), [70, 77). En tercer lugar, calculamos la marca de clase de cada intervalo sumando sus límites y dividiendo entre dos: para la primera clase tenemos (42 + 49) / 2 = 45.5 kilogramos. En cuarto lugar, realizamos el conteo para registrar la frecuencia absoluta de cada intervalo, la frecuencia relativa porcentual y la acumulada. Finalmente, el histograma se construye con rectángulos contiguos sobre el eje horizontal graduado con los intervalos, y el polígono de frecuencias se obtiene uniendo con segmentos rectilíneos los puntos medios de los techos superiores de las barras.',
    'En la estadística descriptiva para datos agrupados en intervalos:\n1. El **rango** ($R$) es la dispersión total entre el valor máximo y el valor mínimo:\n$$R = X_{\\max} - X_{\\min}$$\n2. La **amplitud de clase** ($c$) es el ancho de cada intervalo: $c \\approx \\frac{R}{k}$.\n3. La **marca de clase** ($M_i$) es el punto medio representativo del intervalo $[L_i, L_s)$:\n$$M_i = \\frac{L_i + L_s}{2}$$\n4. La **media aritmética para datos agrupados** ($\\bar{x}$) se calcula mediante el promedio ponderado de las marcas de clase multiplicadas por sus frecuencias absolutas:\n$$\\bar{x} = \\frac{\\sum (f_i \\cdot M_i)}{n}$$\n5. El **histograma** no deja espacios entre barras porque la variable es continua. El área de cada barra es directamente proporcional a la frecuencia del intervalo.',
    'Para el intervalo de clase $[30, 40)$: la marca de clase es $M = \\frac{30 + 40}{2} = 35$. Si tiene frecuencia $f = 8$, su aporte a la media es $8 \\times 35 = 280$.',
    [
      { exercise: 'Calcula la marca de clase del intervalo [50, 60) y determina su amplitud.', hint: 'Marca de clase = (50 + 60) / 2; amplitud = 60 - 50.', answer: 'Marca de clase = 55, amplitud = 10' },
      { exercise: 'Un conjunto de datos tiene como valor mínimo 18 y valor máximo 58. Si se quieren formar 5 clases, ¿cuál debe ser la amplitud mínima?', hint: 'Rango = 58 - 18 = 40; divide 40 entre 5.', answer: 'Amplitud = 40 / 5 = 8' },
      { exercise: 'En un histograma, ¿qué puntos se unen para construir el polígono de frecuencias?', hint: 'Puntos medios superiores de cada barra.', answer: 'Las coordenadas (Marca de clase, Frecuencia absoluta) en el techo de cada rectángulo.' }
    ],
    [
      'Ejemplo 1 (Cálculo de marcas de clase en una tabla completa): Dado los intervalos $[10, 20), [20, 30), [30, 40)$ y $[40, 50)$, calcular sus marcas de clase. Paso 1: Para $[10, 20)$: $M_1 = \\frac{10 + 20}{2} = 15$. Paso 2: Para $[20, 30)$: $M_2 = \\frac{20 + 30}{2} = 25$. Paso 3: Para las clases restantes: $M_3 = 35$ y $M_4 = 45$. Solución: Las marcas de clase son $15, 25, 35$ y $45$ unidades.',
      'Ejemplo 2 (Cálculo de la media aritmética ponderada para datos agrupados): Una tabla tiene tres clases con marcas $M = 5, 15, 25$ y frecuencias $f = 4, 10, 6$. Calcular la media $\\bar{x}$. Paso 1: Multiplicamos marca por frecuencia: $4(5) = 20$; $10(15) = 150$; $6(25) = 150$. Paso 2: Sumamos los productos: $\\sum (f_i \\cdot M_i) = 20 + 150 + 150 = 320$. Paso 3: Dividimos entre el total de datos ($n = 20$): $\\bar{x} = \\frac{320}{20} = 16$. Solución: La media aritmética estimada es $16$.',
      'Ejemplo 3 (Frecuencia acumulada y frecuencia relativa porcentual): Un intervalo tiene frecuencia absoluta de $12$ en un total de $60$ observaciones. Calcular su porcentaje. Paso 1: Calculamos la frecuencia relativa simple: $h_i = \\frac{12}{60} = 0.20$. Paso 2: Multiplicamos por $100$ para obtener porcentaje: $0.20 \\times 100 = 20\\%$. Paso 3: Si las frecuencias de las clases previas sumaban $18$, la acumulada es $18 + 12 = 30$. Solución: Frecuencia relativa es $20\\%$ y acumulada es $30$.',
      'Ejemplo 4 (Identificación de la clase modal en una distribución): En una distribución de estaturas, las frecuencias de 4 clases son: $6, 18, 11, 5$. Identificar la clase modal. Paso 1: Buscamos la mayor frecuencia absoluta en la columna de frecuencias. Paso 2: La mayor frecuencia es $18$, correspondiente a la segunda clase. Paso 3: Por definición, la clase con mayor frecuencia es la clase modal. Solución: La segunda clase es la clase modal del conjunto.',
      'Ejemplo 5 (Interpretación del sesgo en la forma de un histograma): Un histograma de tiempos de espera muestra una barra muy alta a la izquierda y barras decrecientes hacia la derecha con cola larga. Paso 1: Identificamos la concentración principal de los datos en valores bajos. Paso 2: La cola de la distribución se alarga hacia los valores superiores de la derecha. Paso 3: Esta forma geométrica define una distribución con asimetría positiva o sesgo hacia la derecha. Solución: El histograma tiene sesgo positivo hacia la derecha.'
    ]
  ),
];

export const GRADE_08_DATA: GradeCurriculumData = {
  id: '8-grado',
  name: '8° Grado',
  cycle: 'Tercer Ciclo de Básica',
  cycleId: 'tercer-ciclo',
  description: 'Currículo oficial ESMATE de octavo grado: polinomios, sistemas 2x2, función lineal (y=mx+b), congruencia y cuerpos de revolución.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de octavo grado (Tercer Ciclo de Educación Básica).',
      units: [
        createCurriculumUnit(
          'mined-mat-8g-u01',
          1,
          'Operaciones algebraicas',
          '8-grado',
          1,
          'Monomios, polinomios, grado, suma/resta, multiplicación y valor numérico.',
          ['Opera con polinomios', 'Calcula el grado de monomios', 'Aplica propiedad distributiva'],
          u1Lessons8G,
          u1Questions8G,
          true
        ),
        createCurriculumUnit('mined-mat-8g-u02', 2, 'Sistemas de ecuaciones de primer grado con dos incógnitas', '8-grado', 1, 'Métodos de reducción, sustitución e igualación para sistemas 2x2.', ['Resuelve sistemas 2x2'], u2Lessons8G),
        createCurriculumUnit('mined-mat-8g-u03', 3, 'Función lineal', '8-grado', 1, 'Pendiente m, intercepto b, forma y = mx + b y gráficas.', ['Grafica funciones lineales'], u3Lessons8G),
        createCurriculumUnit('mined-mat-8g-u04', 4, 'Paralelismo y ángulos de un polígono', '8-grado', 1, 'Ángulos alternos internos y suma Si = (n-2)*180°.', ['Demuestra relaciones angulares'], u4Lessons8G),
        createCurriculumUnit('mined-mat-8g-u05', 5, 'Criterios de congruencia de triángulos', '8-grado', 2, 'Criterios formales LLL, LAL y ALA con demostraciones.', ['Demuestra congruencia triangular'], u5Lessons8G),
        createCurriculumUnit('mined-mat-8g-u06', 6, 'Características de los triángulos y cuadriláteros', '8-grado', 2, 'Propiedades del triángulo isósceles y paralelogramos.', ['Analiza propiedades de cuadriláteros'], u6Lessons8G),
        createCurriculumUnit('mined-mat-8g-u07', 7, 'Área y volumen de sólidos geométricos', '8-grado', 2, 'Volúmenes de cilindros, conos y esferas.', ['Calcula volúmenes de revolución'], u7Lessons8G),
        createCurriculumUnit('mined-mat-8g-u08', 8, 'Organización y análisis de datos estadísticos', '8-grado', 2, 'Tablas de frecuencias agrupadas e histogramas.', ['Construye e interpreta histogramas'], u8Lessons8G),
      ],
    },
  ],
};
