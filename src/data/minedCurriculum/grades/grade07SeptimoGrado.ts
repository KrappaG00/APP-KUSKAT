import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 7° Grado - Unidad 1
// Números positivos, negativos y el cero
// -----------------------------------------------------------------
const u1Archetypes7G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const temps = [-5, -3, -1, -8, -12];
      const t = temps[(v - 1) % temps.length];
      return {
        statement: `En la cima del volcán de Santa Ana se registra una temperatura de $${Math.abs(t)}^\\circ\\text{C}$ bajo cero. ¿Cómo se expresa numéricamente con signo relativo?`,
        options: [`$${t}^\\circ\\text{C}$`, `$${Math.abs(t)}^\\circ\\text{C}$`, `$0^\\circ\\text{C}$`, `$-(-${Math.abs(t)})^\\circ\\text{C}$`],
        correctAnswer: 'A',
        explanation: `Las temperaturas por debajo del punto de referencia ($0^\\circ\\text{C}$) se expresan con signo negativo: $${t}^\\circ\\text{C}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const nums = [-15, -7, -23, -4, -18];
      const n = nums[(v - 1) % nums.length];
      const abs = Math.abs(n);
      return {
        statement: `¿Cuál es el valor absoluto del número negativo $|${n}|$?`,
        options: [`$-${abs}$`, `$${abs}$`, `$0$`, `$${n}^2$`],
        correctAnswer: 'B',
        explanation: `El valor absoluto representa la distancia geométrica desde el número hasta el origen $0$ en la recta numérica, siendo siempre un valor no negativo: $|${n}| = ${abs}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const pairs = [
        { a: -8, b: -3, comp: '<' },
        { a: -2, b: -9, comp: '>' },
        { a: -12, b: -5, comp: '<' },
        { a: 0, b: -7, comp: '>' },
        { a: -15, b: -1, comp: '<' },
      ];
      const p = pairs[(v - 1) % pairs.length];
      return {
        statement: `Al comparar los números enteros $${p.a}$ y $${p.b}$ en la recta numérica, la relación de orden correcta es:`,
        options: [
          `$${p.a} = ${p.b}$`,
          `$${p.a} ${p.comp === '<' ? '>' : '<'} ${p.b}$`,
          `$${p.a} ${p.comp} ${p.b}$`,
          `$${p.a} + ${p.b} = 0$`,
        ],
        correctAnswer: 'C',
        explanation: `En la recta numérica, entre dos números negativos es mayor aquel que está más cerca del cero (menor valor absoluto). Por ende, $${p.a} ${p.comp} ${p.b}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 8) + 3;
      return {
        statement: `¿Cuál es el número opuesto o simétrico de $+${n}$ respecto al cero en la recta numérica?`,
        options: [`$+${n}$`, `$\\frac{1}{${n}}$`, `$|${n}|$`, `$-${n}$`],
        correctAnswer: 'D',
        explanation: `Dos números son opuestos si están a la misma distancia del cero pero en lados contrarios de la recta numérica. El opuesto de $+${n}$ es $-${n}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const metros = [150, 200, 50, 80, 120];
      const m = metros[(v - 1) % metros.length];
      return {
        statement: `Un submarino navega a $${m}\\text{ metros}$ bajo el nivel del mar en la fosa mesoamericana de Acajutla. Su cota relativa respecto al nivel del mar ($0\\text{ m}$) es:`,
        options: [`$-${m}\\text{ m}$`, `$${m}\\text{ m}$`, `$0\\text{ m}$`, `$-(${m})^2\\text{ m}$`],
        correctAnswer: 'A',
        explanation: `Tomando el nivel del mar como nivel de referencia cero ($0\\text{ m}$), las profundidades submarinas se denotan con números negativos: $-${m}\\text{ m}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const ganancia = 450 + v * 25;
      return {
        statement: `Si una cooperativa agrícola registra una pérdida económica de $${ganancia}$ dólares, ¿cómo se anota en el balance financiero con signo relativo?`,
        options: [`$+\\$${ganancia}$`, `$-\\$${ganancia}$`, `$\\$0$`, `$\\$${ganancia * 2}$`],
        correctAnswer: 'B',
        explanation: `Las ganancias se expresan con signo positivo ($+$) y las pérdidas se expresan con signo negativo ($-$), es decir, $-\\$${ganancia}$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cuál de las siguientes afirmaciones respecto al número $0$ (cero) es correcta en el conjunto de los números enteros ($\\mathbb{Z}$)?`,
        options: [
          'El cero es un número estrictamente positivo',
          'El cero es un número estrictamente negativo',
          'El cero no es ni positivo ni negativo, es el punto de referencia neutro',
          'El cero no pertenece a los números enteros',
        ],
        correctAnswer: 'C',
        explanation: `En la recta numérica de los números reales y enteros, el cero es el origen neutral que separa los números positivos de los números negativos.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = -(v * 4 + 2);
      return {
        statement: `Al evaluar la expresión $-(-${Math.abs(a)})$, ¿cuál es su valor simplificado?`,
        options: [`$-${Math.abs(a)}$`, `$0$`, `$-1$`, `$${Math.abs(a)}$`],
        correctAnswer: 'D',
        explanation: `El opuesto de un número negativo es positivo: $-(-x) = x$, por tanto $-(-${Math.abs(a)}) = ${Math.abs(a)}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 6) + 1;
      return {
        statement: `Si un móvil se desplaza $${n}\\text{ km}$ hacia el Oeste tomando el Este como sentido positivo (+), su desplazamiento relativo es:`,
        options: [`$-${n}\\text{ km}$`, `$${n}\\text{ km}$`, `$0\\text{ km}$`, `$${n * 10}\\text{ km}$`],
        correctAnswer: 'A',
        explanation: `Si la dirección hacia el Este es positiva, la dirección opuesta (Oeste) es negativa: $-${n}\\text{ km}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const p = -(v * 3 + 5);
      return {
        statement: `¿A qué distancia exacta del origen ($0$) se ubica el punto $P(${p})$ en la recta numérica?`,
        options: [`$-${Math.abs(p)}$ unidades`, `${Math.abs(p)} unidades`, '0 unidades', `${p * 2} unidades`],
        correctAnswer: 'B',
        explanation: `La distancia siempre es una magnitud no negativa y viene dada por el valor absoluto: $|${p}| = ${Math.abs(p)}$ unidades.`,
      };
    },
  },
];

const u1Questions7G = generate50UnitQuestions(
  'mined-mat-7g-u01',
  '7-grado',
  '7G',
  1,
  'Números positivos, negativos y el cero',
  'MINED ESMATE 7° Grado',
  u1Archetypes7G
);

const u1Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u01-l01',
    '1.1',
    'Posición relativa con respecto a un punto de referencia',
    'La cumbre del volcán Ilamatepec está a +2,381 metros sobre el nivel del mar y una sima marina en La Libertad está a -150 metros. ¿Qué significa el signo + y el signo -?',
    'El nivel medio del mar se toma como punto de referencia 0. Las alturas sobre el mar son positivas (+2,381 m) y las profundidades bajo el mar son negativas (-150 m).',
    'Para indicar una posición o cantidad con respecto a un punto de referencia se utilizan números con signo: **números positivos** ($+a$) para valores por encima o a la derecha, y **números negativos** ($-a$) para valores por debajo o a la izquierda del cero: $$\\mathbb{Z} = \\{ \\dots, -3, -2, -1, 0, +1, +2, +3, \\dots \\}$$',
    'Una temperatura de $5^\\circ\\text{C}$ bajo cero se escribe $-5^\\circ\\text{C}$.',
    [{ exercise: 'Si una deuda es de $40, ¿cómo se expresa con signo?', hint: 'Pérdida/deuda.', answer: '-$40' }]
  ),
  createPscerLesson(
    'mined-mat-7g-u01-l02',
    '1.2',
    'Valor absoluto y relación de orden en los números enteros',
    '¿Cuál número es mayor: -3 o -8? ¿Y cuál de los dos tiene mayor valor absoluto?',
    'En la recta numérica -3 está a la derecha de -8, por lo que -3 > -8. Sin embargo, la distancia de -8 al 0 es 8 unidades y la de -3 es 3 unidades, por lo que |-8| = 8 > |-3| = 3.',
    'El **valor absoluto** de un número es la distancia que hay entre dicho número y el cero en la recta numérica: $$|a| = \\begin{cases} a & \\text{si } a \\ge 0 \\\\ -a & \\text{si } a < 0 \\end{cases}$$ Entre dos números negativos, es mayor el que tiene **menor valor absoluto**.',
    '$|-7| = 7$, $|+7| = 7$. Como $3 < 7$, se cumple que $-3 > -7$.',
    [{ exercise: 'Compara -15 y -10 con el signo correspondiente.', hint: '-10 está más cerca del 0.', answer: '-15 < -10' }]
  ),
];

const u2Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u02-l01',
    '2.1',
    'Suma y resta de números con igual y diferente signo',
    'Calcula: (+5) + (+3), (-4) + (-6) y (+7) + (-10).',
    'Igual signo: sumamos valores absolutos y conservamos el signo: (+5)+(+3)=+8; (-4)+(-6)=-10. Diferente signo: restamos el menor valor absoluto del mayor y colocamos el signo del mayor: (+7)+(-10) = -(10-7) = -3.',
    'Reglas oficiales de suma con signos: $$(+a) + (+b) = +(a+b), \\qquad (-a) + (-b) = -(a+b), \\qquad (+a) + (-b) = \\operatorname{signo}(\\max) (|a| - |b|)$$ La resta se convierte en suma del número opuesto: $a - b = a + (-b)$.',
    '$(-8) - (+5) = (-8) + (-5) = -13$.',
    [{ exercise: 'Calcula: (-12) + (+8)', hint: 'Resta valores absolutos.', answer: '-4' }]
  ),
];

const u3Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u03-l01',
    '3.1',
    'Multiplicación y división con la Ley de Signos',
    'Calcula los productos: (+4) x (-3) y (-6) x (-5).',
    'Un número positivo por uno negativo da negativo: (+4) x (-3) = -12. Dos números negativos al multiplicarse dan positivo: (-6) x (-5) = +30.',
    '**Ley de los signos** para multiplicación y división: $$(+) \\times (+) = (+), \\quad (-) \\times (-) = (+), \\quad (+) \\times (-) = (-), \\quad (-) \\times (+) = (-)$$',
    '$(-20) \\div (-4) = +5$, $(-18) \\div (+3) = -6$.',
    [{ exercise: 'Calcula: (-7) x (-8)', hint: 'Menos por menos es más.', answer: '+56' }]
  ),
];

const u4Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u04-l01',
    '4.1',
    'Comunicación con símbolos y expresiones algebraicas',
    'Si un cuaderno cuesta $x$ dólares y una regla cuesta $y$ dólares, ¿cuánto cuestan 3 cuadernos y 2 reglas?',
    'Costo de 3 cuadernos: 3x. Costo de 2 reglas: 2y. Costo total combinado: 3x + 2y.',
    'Una **expresión algebraica** combina letras, números y signos de operación. En un término algebraico como $-5x^2$, $-5$ es el **coeficiente**, $x$ es la **variable** y $2$ es el **exponente**.',
    'Para calcular el valor numérico de $2x + 5$ cuando $x = 3$: $2(3) + 5 = 6 + 5 = 11$.',
    [{ exercise: 'Reduce los términos semejantes: 4a + 7a - 2a', hint: '(4 + 7 - 2)a.', answer: '9a' }]
  ),
];

const u5Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u05-l01',
    '5.1',
    'Resolución de ecuaciones lineales de primer grado ax + b = c',
    'Marta pensó un número, lo multiplicó por 3, le sumó 5 y obtuvo 26. ¿Cuál fue el número pensado?',
    'Planteamos la ecuación: 3x + 5 = 26. Restamos 5 a ambos lados (propiedad uniforme): 3x = 26 - 5 = 21. Dividimos entre 3: x = 21 / 3 = 7.',
    'Una **ecuación de primer grado** es una igualdad con una incógnita con exponente $1$. Se resuelve transponiendo términos mediante las propiedades de la igualdad: $$ax + b = c \\implies ax = c - b \\implies x = \\frac{c - b}{a}$$',
    '$2x - 8 = 10 \\implies 2x = 18 \\implies x = 9$.',
    [{ exercise: 'Resuelve: 4x + 6 = 22', hint: 'Resta 6 y divide entre 4.', answer: 'x = 4' }]
  ),
];

const u6Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u06-l01',
    '6.1',
    'Proporcionalidad directa e inversa en el plano cartesiano',
    '¿Cuál es la diferencia entre la gráfica de proporcionalidad directa y la de proporcionalidad inversa?',
    'La proporcionalidad directa (y = ax) es una línea recta que pasa por el origen (0, 0). La proporcionalidad inversa (y = a/x) es una curva formada por dos ramas hiperbólicas que nunca tocan los ejes.',
    'En el plano cartesiano: $$\\text{Directa: } y = ax, \\qquad \\text{Inversa: } xy = a \\iff y = \\frac{a}{x}$$ donde $a$ es la constante de proporcionalidad.',
    'Si $y = 3x$, cuando $x=2$, $y=6$.',
    [{ exercise: 'Si y es directamente proporcional a x con a = 4, escribe la ecuación.', hint: 'y = ax.', answer: 'y = 4x' }]
  ),
];

const u7Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u07-l01',
    '7.1',
    'Gráficas de faja y circulares',
    'En una encuesta escolar el 40% de los alumnos prefiere pupusas revueltas. ¿Cuántos grados debe medir el sector circular que representa esta preferencia?',
    'El círculo completo tiene 360°, que equivale al 100%. Aplicamos regla de tres: Grados = (40 x 360°) / 100 = 40 x 3.6° = 144°.',
    'Para construir una **gráfica circular**, cada porcentaje se convierte a grados multiplicando por el factor constante de $3.6^\\circ$: $$\\text{Ángulo del sector} = \\% \\times 3.6^\\circ$$',
    'El $25\\%$ de un círculo corresponde a $25 \\times 3.6^\\circ = 90^\\circ$ (un cuadrante recto).',
    [{ exercise: '¿Cuántos grados corresponden al 50% en un gráfico circular?', hint: '50 x 3.6°.', answer: '180°' }]
  ),
];

const u8Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u08-l01',
    '8.1',
    'Construcción geométrica con compás: mediatriz y bisectriz',
    '¿Cómo se traza la mediatriz de un segmento AB utilizando regla y compás?',
    'Hacemos centro en A con una abertura mayor a la mitad de AB y trazamos dos arcos. Con el mismo radio hacemos centro en B cortando los arcos anteriores en dos puntos. Trazamos la recta que une ambos cruces.',
    'La **mediatriz** es la recta perpendicular a un segmento trazada por su punto medio. Todo punto de la mediatriz equidista de los extremos del segmento: $$PA = PB$$ La **bisectriz** es el rayo que divide un ángulo en dos ángulos congruentes.',
    'El punto donde se cortan las tres mediatrices de un triángulo es el circuncentro.',
    [{ exercise: '¿Qué ángulo forma la mediatriz con el segmento que divide?', hint: 'Perpendicular.', answer: '90° (ángulo recto)' }]
  ),
];

export const GRADE_07_DATA: GradeCurriculumData = {
  id: '7-grado',
  name: '7° Grado',
  cycle: 'Tercer Ciclo de Básica',
  cycleId: 'tercer-ciclo',
  description: 'Currículo oficial ESMATE de séptimo grado: números con signo, expresiones algebraicas, ecuaciones lineales de 1° grado y proporcionalidad.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de séptimo grado (Tercer Ciclo de Educación Básica).',
      units: [
        createCurriculumUnit(
          'mined-mat-7g-u01',
          1,
          'Números positivos, negativos y el cero',
          '7-grado',
          1,
          'Números relativos, recta numérica, valor absoluto y orden en Z.',
          ['Ordena enteros en la recta', 'Calcula valor absoluto', 'Resuelve problemas con signo'],
          u1Lessons7G,
          u1Questions7G,
          true
        ),
        createCurriculumUnit('mined-mat-7g-u02', 2, 'Suma y resta de números positivos, negativos y el cero', '7-grado', 1, 'Operaciones aditivas con signos y supresión de paréntesis.', ['Opera sumas algebraicas'], u2Lessons7G),
        createCurriculumUnit('mined-mat-7g-u03', 3, 'Multiplicación y división de números positivos, negativos y el cero', '7-grado', 1, 'Ley de los signos y potencias de enteros.', ['Aplica ley de signos'], u3Lessons7G),
        createCurriculumUnit('mined-mat-7g-u04', 4, 'Comunicación con símbolos', '7-grado', 1, 'Variables, términos semejantes y valor numérico.', ['Traduce a lenguaje algebraico'], u4Lessons7G),
        createCurriculumUnit('mined-mat-7g-u05', 5, 'Ecuaciones de primer grado', '7-grado', 2, 'Propiedades de la igualdad y transposición de términos ax+b=c.', ['Resuelve ecuaciones de primer grado'], u5Lessons7G),
        createCurriculumUnit('mined-mat-7g-u06', 6, 'Proporcionalidad directa e inversa', '7-grado', 2, 'Gráficas en el plano cartesiano y constantes de proporcionalidad.', ['Modela relaciones cartesianas'], u6Lessons7G),
        createCurriculumUnit('mined-mat-7g-u07', 7, 'Gráfica de faja y circular', '7-grado', 2, 'Distribución porcentual y cálculo de sectores en 360°.', ['Construye gráficos circulares'], u7Lessons7G),
        createCurriculumUnit('mined-mat-7g-u08', 8, 'Figuras planas y construcción de cuerpos geométricos', '7-grado', 2, 'Mediatriz, bisectriz y poliedros regulares.', ['Aplica construcciones con compás'], u8Lessons7G),
      ],
    },
  ],
};
