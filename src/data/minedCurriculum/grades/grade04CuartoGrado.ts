import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 4° Grado - Unidad 1
// Números y operaciones de suma y resta
// -----------------------------------------------------------------
const u1Archetypes4G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const dm = (v % 8) + 2;
      const um = (v * 2) % 9;
      const c = (v * 3) % 9;
      const num = dm * 10000 + um * 1000 + c * 100;
      return {
        statement: `En el número de cinco cifras $${num}$, ¿cuántas decenas de millar (DM) completas contiene?`,
        options: [`${dm} decenas de millar`, `${dm + 1} decenas de millar`, `${dm + 2} decenas de millar`, `${dm * 10} decenas de millar`],
        correctAnswer: 'A',
        explanation: `En el sistema de numeración decimal, el quinto orden corresponde a las Decenas de Millar (DM). En $${num}$, hay exactamente $${dm}$ DM.`,
      };
    },
  },
  {
    generate: (v) => {
      const centenasDeMillar = (v % 9) + 1;
      const val = centenasDeMillar * 100000;
      return {
        statement: `¿A cuántas unidades simples equivalen exactamente $${centenasDeMillar}$ centenas de millar (CM)?`,
        options: [`$${val + 10000}$`, `$${val}$`, `$${val - 10000}$`, `$${centenasDeMillar * 10000}$`],
        correctAnswer: 'B',
        explanation: `Una centena de millar ($1\\text{ CM}$) equivale a $100,000$ unidades. Por lo tanto, $${centenasDeMillar}$ CM son $${centenasDeMillar} \\times 100,000 = ${val}$ unidades.`,
      };
    },
  },
  {
    generate: (v) => {
      const base = 245000 + v * 3500;
      const rounded = Math.round(base / 10000) * 10000;
      return {
        statement: `Al redondear el número $${base}$ a la decena de millar más cercana, se obtiene:`,
        options: [`${rounded - 10000}`, `${rounded + 10000}`, `${rounded}`, `${rounded + 1000}`],
        correctAnswer: 'C',
        explanation: `Para redondear a la decena de millar observamos las unidades de millar. Al aplicar la regla del 5 obtenemos $${rounded}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n1 = 580400 + v * 1200;
      const n2 = 580400 + v * 1200 + 50;
      return {
        statement: `Al comparar las poblaciones $${n1}$ y $${n2}$ en el censo salvadoreño, la relación correcta es:`,
        options: [`$${n1} > ${n2}$`, `$${n1} = ${n2}$`, `$${n1} \\ge ${n2}$`, `$${n1} < ${n2}$`],
        correctAnswer: 'D',
        explanation: `Comparando de izquierda a derecha cifra por cifra, las decenas de $${n1}$ son $0$ y las de $${n2}$ son $5$, por lo que $${n1} < ${n2}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = 120000 + v * 5000;
      const b = 340000 + v * 3000;
      const sum = a + b;
      return {
        statement: `¿Cuál es el resultado de sumar verticalmente $${a} + ${b}$?`,
        options: [`${sum}`, `${sum + 10000}`, `${sum - 10000}`, `${sum + 1000}`],
        correctAnswer: 'A',
        explanation: `Sumando posición a posición: $${a} + ${b} = ${sum}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = 850000 + v * 4000;
      const b = 320000 + v * 2000;
      const diff = a - b;
      return {
        statement: `¿Cuál es la diferencia exacta al restar $${a} - ${b}$?`,
        options: [`${diff + 5000}`, `${diff}`, `${diff - 5000}`, `${diff + 10000}`],
        correctAnswer: 'B',
        explanation: `Efectuando la sustracción en cada columna posicional: $${a} - ${b} = ${diff}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = 999999;
      return {
        statement: `¿Qué número se obtiene al sumar $1$ a $${n}$?`,
        options: ['100,000', '9,999,999', '1,000,000 (un millón)', '10,000,000'],
        correctAnswer: 'C',
        explanation: `$999,999 + 1 = 1,000,000$ (un millón), que es el primer número del séptimo orden en el sistema decimal.`,
      };
    },
  },
  {
    generate: (v) => {
      const c = 7;
      const d = 3;
      const u = 5;
      return {
        statement: `En la descomposición $${c}00,000 + ${d}0,000 + ${u},000$, ¿cuál es el número total representado?`,
        options: ['73,500', '7,350,000', '730,005', `${c}${d}${u},000`],
        correctAnswer: 'D',
        explanation: `Sumando las partes desarrolladas: $${c}00,000 + ${d}0,000 + ${u},000 = ${c}${d}${u},000$.`,
      };
    },
  },
  {
    generate: (v) => {
      const val = 450000;
      return {
        statement: `¿Cuántas veces $10,000$ contiene el número $${val}$?`,
        options: ['45 veces', '450 veces', '4.5 veces', '4,500 veces'],
        correctAnswer: 'A',
        explanation: `$450,000 \\div 10,000 = 45$. Por lo tanto, contiene $45$ decenas de millar.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = 500000 + v * 10000;
      return {
        statement: `En la recta numérica de 4° Grado, el punto equidistante entre $${n}$ y $${n + 100000}$ corresponde a:`,
        options: [`${n + 40000}`, `${n + 50000}`, `${n + 60000}`, `${n + 25000}`],
        correctAnswer: 'B',
        explanation: `El punto medio entre dos valores es su promedio: $\\frac{${n} + ${n + 100000}}{2} = ${n + 50000}$.`,
      };
    },
  },
];

const u1Questions4G = generate50UnitQuestions(
  'mined-mat-4g-u01',
  '4-grado',
  '4G',
  1,
  'Números y operaciones de suma y resta',
  'MINED ESMATE 4° Grado',
  u1Archetypes4G
);

const u1Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u01-l01',
    '1.1',
    'Números hasta un millón y valor posicional',
    'En las elecciones nacionales de El Salvador votaron 1,458,920 ciudadanos. ¿Cómo se ubica este número en la tabla de órdenes de valor posicional?',
    'Ubicamos de derecha a izquierda: U, D, C (primer período: unidades); UM, DM, CM (segundo período: miles); y UMi (tercer período: millones). Hay 1 UMi, 4 CM, 5 DM, 8 UM, 9 C, 2 D y 0 U.',
    'El sistema de numeración decimal agrupa de $10$ en $10$. Diez centenas de millar forman un **millón** ($1,000,000$): $$1\\text{ UMi} = 10\\text{ CM} = 100\\text{ DM} = 1,000\\text{ UM} = 1,000,000\\text{ U}$$',
    'El número $2,305,400$ se lee dos millones trescientos cinco mil cuatrocientos.',
    [{ exercise: 'Escribe en cifras: trescientos cuarenta mil doscientos.', hint: '340 mil...', answer: '340,200' }]
  ),
];

const u2Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u02-l01',
    '2.1',
    'Clasificación de triángulos por sus lados y ángulos',
    'Un arquitecto diseña una estructura con tres vigas que miden 5 m, 5 m y 8 m. ¿Qué tipo de triángulo forma?',
    'Tiene dos lados de igual medida (5 m) y uno diferente (8 m). Por sus lados es un triángulo isósceles.',
    'Por sus lados, los triángulos se clasifican en: **equiláteros** ($3$ lados iguales), **isósceles** ($2$ lados iguales) y **escalenos** ($3$ lados desiguales). Por sus ángulos: acutángulos, rectángulos y obtusángulos.',
    'Un triángulo con lados de $6\\text{ cm}, 6\\text{ cm}, 6\\text{ cm}$ es equilátero.',
    [{ exercise: '¿Cómo se llama el triángulo con sus 3 lados distintos?', hint: 'Escaleno.', answer: 'Triángulo escaleno' }]
  ),
];

const u3Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u03-l01',
    '3.1',
    'Multiplicación de factores de varias cifras',
    'Una cooperativa cafetalera de Ataco vende 245 sacos de café a $132 cada uno. ¿Cuánto dinero recibe en total?',
    'Multiplicamos 245 x 132 en vertical multiplicando por las unidades (2), decenas (3) y centenas (1), desplazando un lugar a la izquierda en cada fila: 490 + 7,350 + 24,500 = 32,340.',
    'Para multiplicar factores de varias cifras se multiplica sucesivamente por cada orden y se suman los productos parciales: $$\\begin{array}{r} 245 \\\\ \\times 132 \\\\ \\hline 490 \\\\ 7350 \\\\ 24500 \\\\ \\hline 32340 \\end{array}$$',
    '$150 \\times 24 = 3,600$.',
    [{ exercise: 'Calcula: 124 x 23', hint: 'Suma productos parciales.', answer: '2,852' }]
  ),
];

const u4Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u04-l01',
    '4.1',
    'Números decimales: décimas, centésimas y milésimas',
    'Al medir el grosor de una lámina metálica, el calibrador marca 0.35 metros. ¿Qué representan las cifras 3 y 5?',
    'El 3 está en el orden de las décimas (3/10) y el 5 en el orden de las centésimas (5/100). En total son 35 centésimas de metro.',
    'Las posiciones a la derecha del punto decimal representan partes fraccionarias de la unidad: $$0.1 = \\frac{1}{10} \\text{ (décima)}, \\quad 0.01 = \\frac{1}{100} \\text{ (centésima)}, \\quad 0.001 = \\frac{1}{1000} \\text{ (milésima)}$$',
    '$2.45$ se lee dos enteros cuarenta y cinco centésimas.',
    [{ exercise: '¿Qué valor posicional tiene el 7 en 3.07?', hint: 'Segunda cifra decimal.', answer: 'Centésimas' }]
  ),
];

const u5Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u05-l01',
    '5.1',
    'Algoritmo de la división larga entre números de dos cifras',
    'En un ingenio azucarero de El Salvador se reparten 1,440 quintales de azúcar en camiones con capacidad de 45 quintales cada uno. ¿Cuántos viajes se requieren?',
    'Dividimos 1,440 entre 45. Estimamos cuántas veces cabe 45 en 144: cabe 3 veces (3 x 45 = 135). Restamos 144 - 135 = 9. Bajamos el 0 (90). 90 entre 45 = 2 (2 x 45 = 90). Cociente: 32 viajes.',
    'El algoritmo de la división larga divide, multiplica, resta y baja la cifra siguiente hasta agotar el dividendo: $$\\text{Cociente} = \\frac{D}{d}$$',
    '$960 \\div 32 = 30$.',
    [{ exercise: 'Divide: 750 entre 25', hint: 'Exacto.', answer: '30' }]
  ),
];

const u6Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u06-l01',
    '6.1',
    'Área de cuadrados y rectángulos',
    'Un aula de clases en San Salvador tiene forma rectangular de 8 metros de largo por 6 metros de ancho. ¿Cuál es su superficie en metros cuadrados?',
    'Multiplicamos la base por la altura: 8 m x 6 m = 48 m².',
    'El **área** es la medida de la superficie interior de una figura. Fórmulas oficiales: $$A_{\\text{rect}} = b \\times h, \\qquad A_{\\square} = l^2$$',
    'El área de un jardín cuadrado de $5\\text{ m}$ de lado es $A = 5^2 = 25\\text{ m}^2$.',
    [{ exercise: 'Calcula el área de un rectángulo de 9 cm de base por 4 cm de altura.', hint: '9 x 4.', answer: '36 cm²' }]
  ),
];

const u7Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u07-l01',
    '7.1',
    'Suma y resta vertical de números decimales',
    'María compra 3.75 libras de frijol y 2.4 libras de arroz. ¿Cuántas libras compró en total?',
    'Alineamos los números haciendo coincidir el punto decimal. Sumamos centésimas: 5 + 0 = 5. Décimas: 7 + 4 = 11 (escribo 1, llevo 1). Unidades: 3 + 2 + 1 = 6. Resultado: 6.15 libras.',
    'Para sumar o restar decimales en forma vertical, se alinean obligatoriamente las cifras por el punto decimal, completando con ceros si es necesario: $$\\begin{array}{r} 3.75 \\\\ + 2.40 \\\\ \\hline 6.15 \\end{array}$$',
    '$5.80 - 2.35 = 3.45$.',
    [{ exercise: 'Calcula: 4.6 + 3.25', hint: 'Alinea el punto.', answer: '7.85' }]
  ),
];

const u8Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u08-l01',
    '8.1',
    'Fracciones propias, impropias y mixtas',
    'Si una familia consume 7 cuartos (7/4) de galón de leche, ¿cómo expresamos esta cantidad en número mixto?',
    '7/4 es una fracción impropia porque el numerador es mayor que el denominador. Dividimos 7 entre 4: cociente 1, residuo 3. Representa 1 galón entero y 3/4 de galón.',
    'Una **fracción impropia** ($\\frac{a}{b}$ con $a > b$) equivale a un **número mixto** compuesto por un entero y una fracción propia: $$\\frac{a}{b} = q\\,\\frac{r}{b} \\quad \\text{donde } a = b \\times q + r$$',
    '$\\frac{5}{2} = 2\\,\\frac{1}{2}$.',
    [{ exercise: 'Convierte 9/4 a número mixto.', hint: 'Divide 9 entre 4.', answer: '2 1/4' }]
  ),
];

const u9Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u09-l01',
    '9.1',
    'Tablas de doble entrada y pictogramas',
    'En un torneo escolar se registran medallas de oro y plata obtenidas por 4 escuelas en una tabla con filas y columnas. ¿Cómo se lee la información cruzada?',
    'Para saber cuántas medallas de oro ganó la Escuela A, buscamos la intersección de la fila de la Escuela A con la columna de Oro.',
    'Una **tabla de doble entrada** organiza datos asociados a dos variables simultáneas, permitiendo cruzar información de manera rápida y estructurada.',
    'Un pictograma donde cada estrella vale 10 puntos muestra 4 estrellas para representar 40 puntos.',
    [{ exercise: 'Si cada icono de lápiz vale 5 votos y hay 3 iconos, ¿cuántos votos son?', hint: '3 x 5.', answer: '15 votos' }]
  ),
];

export const GRADE_04_DATA: GradeCurriculumData = {
  id: '4-grado',
  name: '4° Grado',
  cycle: 'Segundo Ciclo de Básica',
  cycleId: 'segundo-ciclo',
  description: 'Currículo oficial ESMATE de cuarto grado: números hasta un millón, multiplicación/división larga, decimales y áreas de rectángulos.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de cuarto grado estructurado en 9 unidades oficiales.',
      units: [
        createCurriculumUnit(
          'mined-mat-4g-u01',
          1,
          'Números y operaciones de suma y resta',
          '4-grado',
          1,
          'Números hasta 1,000,000, descomposición decimal, aproximación y suma/resta de grandes cantidades.',
          ['Opera hasta un millón', 'Aproxima a decenas de millar', 'Compara cantidades grandes'],
          u1Lessons4G,
          u1Questions4G,
          true
        ),
        createCurriculumUnit('mined-mat-4g-u02', 2, 'Figuras y cuerpos geométricos', '4-grado', 1, 'Medición de ángulos y clasificación de triángulos y cuadriláteros.', ['Mide ángulos con transportador'], u2Lessons4G),
        createCurriculumUnit('mined-mat-4g-u03', 3, 'Multiplicación de números naturales', '4-grado', 1, 'Algoritmo de la multiplicación de varias cifras.', ['Multiplica en forma vertical'], u3Lessons4G),
        createCurriculumUnit('mined-mat-4g-u04', 4, 'Números decimales', '4-grado', 1, 'Décimas, centésimas y milésimas en la recta numérica.', ['Ubica decimales en la recta'], u4Lessons4G),
        createCurriculumUnit('mined-mat-4g-u05', 5, 'División', '4-grado', 1, 'División larga entre números de dos cifras.', ['Aplica división larga'], u5Lessons4G),
        createCurriculumUnit('mined-mat-4g-u06', 6, 'Área de cuadrados y rectángulos', '4-grado', 2, 'Unidades cm² y m², fórmulas A = l² y A = b * h.', ['Calcula áreas de superficies planas'], u6Lessons4G),
        createCurriculumUnit('mined-mat-4g-u07', 7, 'Operaciones con números decimales', '4-grado', 2, 'Suma y resta vertical con alineación del punto decimal.', ['Opera decimales con precisión'], u7Lessons4G),
        createCurriculumUnit('mined-mat-4g-u08', 8, 'Fracciones', '4-grado', 2, 'Fracciones propias, impropias, mixtas y suma homogénea.', ['Convierte fracciones a mixtos'], u8Lessons4G),
        createCurriculumUnit('mined-mat-4g-u09', 9, 'Medida y representación de datos', '4-grado', 2, 'Tablas de doble entrada y pictogramas con escala.', ['Interpreta datos estadísticos'], u9Lessons4G),
      ],
    },
  ],
};
