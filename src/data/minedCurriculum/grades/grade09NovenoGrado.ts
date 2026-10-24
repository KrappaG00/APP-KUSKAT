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
    'Encuentra el área de un terreno rectangular que mide (x + 5) metros de largo por (x + 2) metros de ancho.',
    'Multiplicamos término a término: (x + 5)(x + 2) = x(x) + x(2) + 5(x) + 5(2) = x² + 2x + 5x + 10 = x² + 7x + 10.',
    'El producto de la forma $(x + a)(x + b)$ se resuelve directamente sumando los términos independientes para el término lineal y multiplicándolos para el término independiente: $$(x + a)(x + b) = x^2 + (a + b)x + ab$$',
    '$(x + 7)(x - 3) = x^2 + (7 - 3)x + (7)(-3) = x^2 + 4x - 21$.',
    [{ exercise: 'Desarrolla: (x + 4)(x + 6)', hint: 'Suma 4+6 y multiplica 4x6.', answer: 'x² + 10x + 24' }]
  ),
  createPscerLesson(
    'mined-mat-9g-u01-l02',
    '1.2',
    'Cuadrado de un binomio y diferencia de cuadrados',
    'Desarrolla algebraicamente (2x + 3)² y (3x + 5)(3x - 5).',
    'Para (2x + 3)²: el cuadrado del primero (2x)² = 4x², el doble producto 2(2x)(3) = 12x y el cuadrado del segundo 3² = 9: 4x² + 12x + 9. Para (3x + 5)(3x - 5): diferencia de cuadrados (3x)² - 5² = 9x² - 25.',
    'Reglas oficiales de productos notables ESMATE: $$(a \\pm b)^2 = a^2 \\pm 2ab + b^2, \\qquad (a + b)(a - b) = a^2 - b^2$$',
    '$(x - 4)^2 = x^2 - 8x + 16$.',
    [{ exercise: 'Desarrolla: (x + 8)(x - 8)', hint: 'x² - 8².', answer: 'x² - 64' }]
  ),
];

const u2Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u02-l01',
    '2.1',
    'Raíz cuadrada, números irracionales y racionalización',
    '¿Cuál es la medida exacta del lado de un terreno cuadrado cuya área es 50 m²?',
    'El lado es L = √50. Como 50 = 25 x 2 = 5² x 2, podemos simplificar el radical: L = √(5² x 2) = 5√2 metros.',
    'Para simplificar radicales se descomponen factores primos extrayendo los cuadrados perfectos: $$\\sqrt{a^2 b} = a\\sqrt{b}$$ Para **racionalizar** un denominador con raíz simple se multiplica numerador y denominador por la misma raíz: $$\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$$',
    'Racionalizar $\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.',
    [{ exercise: 'Simplifica la raíz cuadrada: √72', hint: '72 = 36 x 2.', answer: '6√2' }]
  ),
];

const u3Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u03-l01',
    '3.1',
    'Fórmula general de la ecuación cuadrática ax² + bx + c = 0',
    'Resuelve la ecuación cuadrática 2x² - 5x - 3 = 0 mediante la fórmula general.',
    'Identificamos coeficientes: a = 2, b = -5, c = -3. Discriminante: Δ = b² - 4ac = (-5)² - 4(2)(-3) = 25 + 24 = 49. Aplicamos la fórmula: x = (-(-5) ± √49) / (2 x 2) = (5 ± 7) / 4. Soluciones: x₁ = 12/4 = 3; x₂ = -2/4 = -1/2.',
    'La **fórmula cuadrática general** resuelve cualquier ecuación de segundo grado: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$ El discriminante $\\Delta = b^2 - 4ac$ indica la naturaleza de las soluciones: si $\\Delta > 0$ hay dos soluciones reales distintas; si $\\Delta = 0$ una solución doble; si $\\Delta < 0$ no hay solución real.',
    'En $x^2 - 4x + 4 = 0$, $\\Delta = 16 - 16 = 0$, por lo que $x = 2$ es solución única.',
    [{ exercise: 'Calcula el discriminante de x² - 6x + 8 = 0', hint: '(-6)² - 4(1)(8).', answer: 'Δ = 4 (dos soluciones reales)' }]
  ),
];

const u4Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u04-l01',
    '4.1',
    'Función cuadrática de la forma y = ax² + c',
    '¿Cómo varía la gráfica de la parábola y = 2x² + 3 en comparación con la gráfica base y = x²?',
    'El coeficiente a = 2 es positivo y mayor que 1, por lo que la parábola abre hacia arriba y es más estrecha (dilatación vertical). El término c = +3 traslada verticalmente el vértice 3 unidades hacia arriba: V(0, 3).',
    'En la función $y = ax^2 + c$: el vértice se ubica en $V(0, c)$, el eje de simetría es la recta $x = 0$ (eje $y$). Si $a > 0$ es cóncava hacia arriba; si $a < 0$ es cóncava hacia abajo.',
    'La parábola $y = -x^2 - 4$ abre hacia abajo con vértice en $(0, -4)$.',
    [{ exercise: '¿Cuál es el vértice de la parábola y = 3x² - 5?', hint: '(0, c).', answer: '(0, -5)' }]
  ),
];

const u5Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u05-l01',
    '5.1',
    'Criterios de semejanza de triángulos y Teorema de Tales',
    'Un poste vertical de 6 metros de altura proyecta una sombra de 4 metros en la plaza de Santa Ana. A la misma hora, un edificio proyecta una sombra de 24 metros. ¿Cuál es la altura del edificio?',
    'Por el criterio AA (Ángulo-Ángulo), los rayos solares y los ángulos rectos forman triángulos semejantes. Planteamos la proporción: 6 / 4 = h / 24 => h = (6 x 24) / 4 = 144 / 4 = 36 metros.',
    "Dos triángulos son **semejantes** ($\\triangle ABC \\sim \\triangle A'B'C'$) si sus ángulos correspondientes son iguales y sus lados homólogos son proporcionales: $$\\frac{a}{a'} = \\frac{b}{b'} = \\frac{c}{c'} = k$$ donde $k$ es la **razón de semejanza**.",
    'Si la razón de semejanza de lados es $k$, la razón de sus áreas es $k^2$.',
    [{ exercise: 'Si un triángulo tiene lados 3, 4, 5 y otro semejante tiene lados 6, 8, x, ¿cuánto vale x?', hint: 'Doble.', answer: 'x = 10' }]
  ),
];

const u6Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u06-l01',
    '6.1',
    'El Teorema de Pitágoras y aplicaciones en el espacio',
    'Una escalera de 5 metros se apoya contra una pared vertical de modo que su pie queda a 3 metros de la base de la pared. ¿A qué altura de la pared llega la escalera?',
    'La escalera es la hipotenusa (c = 5) y la distancia a la base es un cateto (a = 3). Aplicamos Pitágoras: a² + b² = c² => 3² + b² = 5² => 9 + b² = 25 => b² = 16 => b = √16 = 4 metros.',
    'En todo triángulo rectángulo, el cuadrado de la longitud de la hipotenusa es igual a la suma de los cuadrados de los catetos: $$a^2 + b^2 = c^2 \\iff c = \\sqrt{a^2 + b^2}$$',
    'La diagonal de un rectángulo de lados $a$ y $b$ es $d = \\sqrt{a^2 + b^2}$.',
    [{ exercise: 'Calcula la hipotenusa de un triángulo rectángulo de catetos 6 cm y 8 cm.', hint: '√(36 + 64).', answer: '10 cm' }]
  ),
];

const u7Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u07-l01',
    '7.1',
    'Ángulo inscrito y ángulo central en circunferencias',
    'En una circunferencia de centro O, un ángulo central AOB subtiende un arco AB y mide 80°. Si P es un punto sobre la circunferencia que subtiende el mismo arco, ¿cuánto mide el ángulo inscrito APB?',
    'Por el teorema del ángulo central e inscrito, la medida del ángulo inscrito es exactamente la mitad del ángulo central correspondiente: ∠APB = 80° / 2 = 40°.',
    'En toda circunferencia, la medida del ángulo central es el doble de la medida de cualquier ángulo inscrito que subtienda el mismo arco: $$\\theta = 2\\alpha \\iff \\alpha = \\frac{\\theta}{2}$$ Todo ángulo inscrito que subtienda un diámetro mide exactamente $90^\\circ$.',
    'Si un ángulo inscrito mide $35^\\circ$, el ángulo central que subtiende el mismo arco mide $70^\\circ$.',
    [{ exercise: 'Si el ángulo central mide 110°, ¿cuánto mide el ángulo inscrito?', hint: 'Divide entre 2.', answer: '55°' }]
  ),
];

const u8Lessons9G = [
  createPscerLesson(
    'mined-mat-9g-u08-l01',
    '8.1',
    'Medidas de dispersión: varianza y desviación típica',
    'En dos secciones escolares la media de notas es 8.0, pero en la sección A los datos están entre 7.5 y 8.5, mientras que en la sección B están entre 4.0 y 10.0. ¿Cómo medimos esta diferencia de dispersión?',
    'Aunque ambas tienen igual promedio (8.0), la sección B tiene mucha mayor dispersión respecto a la media. Esto se cuantifica mediante la desviación estándar (típica).',
    'La **varianza** ($\\sigma^2$) es la media de los cuadrados de las desviaciones respecto a la media. La **desviación típica** ($\\sigma$) es su raíz cuadrada: $$\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}, \\qquad \\sigma = \\sqrt{\\sigma^2}$$',
    'A menor desviación típica, mayor es la homogeneidad y consistencia del conjunto de datos.',
    [{ exercise: 'Si la varianza de un grupo de datos es 16, ¿cuál es su desviación típica?', hint: '√16.', answer: 'σ = 4' }]
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
