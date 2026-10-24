import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 5° Grado - Unidad 1
// Divisibilidad, múltiplos y divisores
// -----------------------------------------------------------------
const u1Archetypes5G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19];
      const p = primes[(v - 1) % primes.length];
      return {
        statement: `¿Por qué el número $${p}$ se clasifica formalmente como un número primo en 5° Grado?`,
        options: [
          `Porque solo tiene exactamente dos divisores: el $1$ y él mismo ($${p}$)`,
          `Porque es un número impar`,
          `Porque termina en una cifra par`,
          `Porque tiene más de dos divisores naturales`,
        ],
        correctAnswer: 'A',
        explanation: `Por definición matemática oficial del MINED, un número primo es aquel número natural mayor que 1 que posee exactamente dos divisores positivos distintos: el 1 y el propio número.`,
      };
    },
  },
  {
    generate: (v) => {
      const composites = [4, 6, 8, 9, 10, 12, 14, 15];
      const c = composites[(v - 1) % composites.length];
      return {
        statement: `¿Cuál de las siguientes afirmaciones sobre el número $${c}$ es verdadera?`,
        options: [
          `Es un número primo`,
          `Es un número compuesto porque tiene más de dos divisores`,
          `No tiene ningún divisor natural`,
          `Es un número negativo`,
        ],
        correctAnswer: 'B',
        explanation: `Un número compuesto es aquel que tiene tres o más divisores positivos. El número $${c}$ posee factores adicionales además de $1$ y él mismo.`,
      };
    },
  },
  {
    generate: (v) => {
      const pairs = [
        { a: 4, b: 6, mcm: 12 },
        { a: 6, b: 8, mcm: 24 },
        { a: 3, b: 5, mcm: 15 },
        { a: 8, b: 12, mcm: 24 },
        { a: 6, b: 9, mcm: 18 },
      ];
      const p = pairs[(v - 1) % pairs.length];
      return {
        statement: `¿Cuál es el Mínimo Común Múltiplo (MCM) entre los números $${p.a}$ y $${p.b}$?`,
        options: [`${p.mcm * 2}`, `${p.mcm - 2}`, `${p.mcm}`, `${p.mcm + 4}`],
        correctAnswer: 'C',
        explanation: `El MCM es el menor múltiplo común distinto de cero entre ambos números: $\\text{MCM}(${p.a}, ${p.b}) = ${p.mcm}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const pairs = [
        { a: 12, b: 18, mcd: 6 },
        { a: 20, b: 30, mcd: 10 },
        { a: 16, b: 24, mcd: 8 },
        { a: 15, b: 25, mcd: 5 },
        { a: 18, b: 27, mcd: 9 },
      ];
      const p = pairs[(v - 1) % pairs.length];
      return {
        statement: `¿Cuál es el Máximo Común Divisor (MCD) entre $${p.a}$ y $${p.b}$?`,
        options: [`${p.mcd * 2}`, `${p.mcd + 2}`, `${p.mcd - 1}`, `${p.mcd}`],
        correctAnswer: 'D',
        explanation: `El MCD es el mayor de los divisores comunes a ambos números: $\\text{MCD}(${p.a}, ${p.b}) = ${p.mcd}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const nums = [124, 348, 560, 782, 916];
      const n = nums[(v - 1) % nums.length];
      return {
        statement: `Según el criterio de divisibilidad del MINED, el número $${n}$ es divisible entre $2$ porque:`,
        options: [
          `Su última cifra termina en número par ($0, 2, 4, 6, 8$)`,
          `La suma de sus cifras es múltiplo de 3`,
          `Termina en 0 o en 5`,
          `Es mayor que 100`,
        ],
        correctAnswer: 'A',
        explanation: `Un número natural es divisible entre 2 si y solo si su cifra de las unidades es par ($0, 2, 4, 6, 8$).`,
      };
    },
  },
  {
    generate: (v) => {
      const mults3 = [123, 234, 345, 456, 567];
      const n = mults3[(v - 1) % mults3.length];
      const sum = String(n).split('').reduce((acc, c) => acc + Number(c), 0);
      return {
        statement: `El número $${n}$ es divisible entre $3$ debido a que la suma de sus cifras es $${sum}$, la cual cumple que:`,
        options: [
          `Es un número par`,
          `Es un múltiplo exacto de $3$`,
          `Es menor que 10`,
          `Termina en cero`,
        ],
        correctAnswer: 'B',
        explanation: `El criterio de divisibilidad por 3 establece que un número es divisible entre 3 si la suma de todas sus cifras es un múltiplo de 3 ($${sum} = 3k$).`,
      };
    },
  },
  {
    generate: (v) => {
      const mults5 = [125, 340, 565, 780, 925];
      const n = mults5[(v - 1) % mults5.length];
      return {
        statement: `¿Cuál es el criterio formal para determinar que $${n}$ es divisible entre $5$?`,
        options: [
          `La suma de sus dígitos es 5`,
          `Termina en cifra par`,
          `Su última cifra es $0$ o $5$`,
          `Tiene tres cifras`,
        ],
        correctAnswer: 'C',
        explanation: `Un número es divisible entre 5 si su última cifra (unidades) es exactamente 0 o 5.`,
      };
    },
  },
  {
    generate: (v) => {
      const base = (v % 8) + 3;
      return {
        statement: `¿Cuál es el conjunto de los primeros cuatro múltiplos positivos del número $${base}$?`,
        options: [
          `$\\{1, 2, 3, 4\\}$`,
          `$\\{${base}, ${base + 1}, ${base + 2}, ${base + 3}\\}$`,
          `$\\{${base * 2}, ${base * 3}, ${base * 4}, ${base * 5}\\}$`,
          `$\\{${base}, ${base * 2}, ${base * 3}, ${base * 4}\\}$`,
        ],
        correctAnswer: 'D',
        explanation: `Los múltiplos de $n$ se obtienen multiplicando $n$ por $1, 2, 3, 4$: $\\{${base}, ${base * 2}, ${base * 3}, ${base * 4}\\}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = 12;
      return {
        statement: `¿Cuál es la lista exhaustiva de todos los divisores positivos del número $${n}$?`,
        options: [
          `$\\{1, 2, 3, 4, 6, 12\\}$`,
          `$\\{2, 3, 4, 6\\}$`,
          `$\\{1, 12\\}$`,
          `$\\{1, 2, 4, 8, 12\\}$`,
        ],
        correctAnswer: 'A',
        explanation: `Los números que dividen exactamente a 12 sin dejar residuo son 1, 2, 3, 4, 6 y 12.`,
      };
    },
  },
  {
    generate: (v) => {
      const mayaNums = [
        { v: 1, desc: 'un punto' },
        { v: 5, desc: 'una raya horizontal' },
        { v: 6, desc: 'una raya y un punto arriba' },
        { v: 10, desc: 'dos rayas horizontales' },
        { v: 15, desc: 'tres rayas horizontales' },
      ];
      const m = mayaNums[(v - 1) % mayaNums.length];
      return {
        statement: `En el sistema de numeración maya estudiado en 5° Grado, el número $${m.v}$ se representa simbólicamente mediante:`,
        options: ['un caracol', `${m.desc}`, 'un círculo vacío', 'dos puntos'],
        correctAnswer: 'B',
        explanation: `En la numeración vigesimal maya, el punto vale 1, la raya vale 5 y el caracol representa el cero. El número $${m.v}$ corresponde a ${m.desc}.`,
      };
    },
  },
];

const u1Questions5G = generate50UnitQuestions(
  'mined-mat-5g-u01',
  '5-grado',
  '5G',
  1,
  'Divisibilidad, múltiplos y divisores',
  'MINED ESMATE 5° Grado',
  u1Archetypes5G
);

const u1Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u01-l01',
    '1.1',
    'Números primos y números compuestos',
    'Una maestra tiene tarjetas con los números 7, 12, 13 y 18. ¿Cómo puede agruparlos según la cantidad de divisores que tiene cada número?',
    'Buscamos divisores: de 7 son {1, 7} (dos divisores). De 13 son {1, 13} (dos divisores). De 12 son {1, 2, 3, 4, 6, 12} (seis divisores). De 18 son {1, 2, 3, 6, 9, 18} (seis divisores). Los números 7 y 13 son primos; 12 y 18 son compuestos.',
    'Un **número primo** tiene únicamente dos divisores positivos: el $1$ y él mismo. Un **número compuesto** tiene más de dos divisores. El número $1$ no es primo ni compuesto.',
    'El número $2$ es el único número primo que es par.',
    [{ exercise: '¿El número 29 es primo o compuesto?', hint: 'Divisores de 29.', answer: 'Es número primo' }]
  ),
  createPscerLesson(
    'mined-mat-5g-u01-l02',
    '1.2',
    'Criterios de divisibilidad por 2, 3, 5 y 10',
    '¿Cómo podemos saber rápidamente si 2,580 es divisible entre 2, 3, 5 y 10 sin hacer la división?',
    'Termina en 0: es par, luego es divisible entre 2. Termina en 0, luego es divisible entre 5 y entre 10. Sumamos sus cifras: 2 + 5 + 8 + 0 = 15; como 15 es múltiplo de 3, también es divisible entre 3.',
    'Criterios oficiales ESMATE: Divisible entre $2$ si termina en cifra par; entre $3$ si la suma de sus cifras es múltiplo de $3$; entre $5$ si termina en $0$ o $5$; y entre $10$ si termina en $0$.',
    '$345$ es divisible entre $3$ y entre $5$, pero no entre $2$ ni entre $10$.',
    [{ exercise: '¿Es 414 divisible entre 3?', hint: '4 + 1 + 4 = 9.', answer: 'Sí, porque 9 es múltiplo de 3' }]
  ),
];

const u2Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u02-l01',
    '2.1',
    'Suma de los ángulos internos de un polígono',
    'Si un triángulo tiene ángulos internos que suman 180°, ¿cuánto suman los ángulos internos de cualquier cuadrilátero?',
    'Al trazar una diagonal en un cuadrilátero, se divide en 2 triángulos. Como cada triángulo suma 180°, el cuadrilátero suma: 2 x 180° = 360°.',
    'La suma de los ángulos internos de un polígono de $n$ lados es: $$S_i = (n - 2) \\times 180^\\circ$$ Para un triángulo ($n=3$): $S_i = 180^\\circ$. Para un cuadrilátero ($n=4$): $S_i = 360^\\circ$.',
    'En un pentágono ($n=5$): $S_i = (5 - 2) \\times 180^\\circ = 540^\\circ$.',
    [{ exercise: 'Calcula la suma de ángulos internos de un hexágono (n=6).', hint: '(6 - 2) x 180°.', answer: '720°' }]
  ),
];

const u3Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u03-l01',
    '3.1',
    'Multiplicación de decimales por números naturales',
    'Un bote de pintura cuesta $3.25. ¿Cuánto cuestan 4 botes iguales?',
    'Multiplicamos como si fueran números naturales: 325 x 4 = 1,300. Como 3.25 tiene 2 cifras decimales, colocamos el punto decimal dejando 2 cifras decimales a la derecha: 13.00 = $13.',
    'Para multiplicar un número decimal por un natural se multiplican como enteros y en el producto se separan tantas cifras decimales como tenga el factor decimal: $$a.bc \\times n = \\frac{abc \\times n}{100}$$',
    '$2.15 \\times 3 = 6.45$.',
    [{ exercise: 'Calcula: 1.25 x 6', hint: '125 x 6 = 750.', answer: '7.50' }]
  ),
];

const u4Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u04-l01',
    '4.1',
    'Lectura e interpretación de gráficas de líneas',
    'Una estación meteorológica en Ilopango registra la temperatura cada 2 horas y une los puntos con segmentos de recta. ¿Qué información nos brinda la pendiente de la línea?',
    'Si la línea sube hacia la derecha, la temperatura aumenta. Si baja, disminuye. Si se mantiene horizontal, la temperatura permanece constante.',
    'La **gráfica de líneas** se utiliza para representar los cambios continuos de una variable a lo largo del tiempo, facilitando la identificación de tendencias crecientes, decrecientes o estables.',
    'Una pendiente muy inclinada indica un cambio rápido y drástico de la variable.',
    [{ exercise: '¿Qué indica una gráfica de línea horizontal?', hint: 'Sin variación.', answer: 'Que el valor se mantiene constante' }]
  ),
];

const u5Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u05-l01',
    '5.1',
    'Multiplicación de números decimales por decimales',
    'Una parcela rectangular mide 2.4 metros de ancho por 3.5 metros de largo. ¿Cuál es su área exacta?',
    'Multiplicamos como enteros: 24 x 35 = 840. Contamos cifras decimales: 2.4 tiene 1 cifra y 3.5 tiene 1 cifra (total 2 cifras). Colocamos el punto dos lugares a la izquierda: 8.40 m².',
    'Al multiplicar dos números decimales, el producto tendrá tantas cifras decimales como la suma de las cifras decimales de ambos factores: $$\\text{Cifras decimales del producto} = c_1 + c_2$$',
    '$0.3 \\times 0.2 = 0.06$ (dos cifras decimales).',
    [{ exercise: 'Calcula: 1.2 x 0.4', hint: '12 x 4 = 48, dos cifras decimales.', answer: '0.48' }]
  ),
];

const u6Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u06-l01',
    '6.1',
    'Cantidad por unidad, densidad poblacional y rapidez',
    'En el municipio de San Salvador viven aproximadamente 300,000 personas en un área de 72 km². ¿Cómo se calcula su densidad poblacional?',
    'Dividimos el número de habitantes entre la superficie en km²: 300,000 / 72 ≈ 4,166.67 hab/km².',
    'La **cantidad por unidad** compara dos magnitudes para estandarizar el rendimiento o concentración: $$\\text{Densidad} = \\frac{\\text{Cantidad total}}{\\text{Área o tiempo}}, \\qquad v = \\frac{d}{t}$$',
    'Un automóvil que recorre $120\\text{ km}$ en $2\\text{ h}$ tiene una rapidez de $v = \\frac{120}{2} = 60\\text{ km/h}$.',
    [{ exercise: 'Calcula la rapidez de un ciclista que recorre 30 km en 2 horas.', hint: '30 / 2.', answer: '15 km/h' }]
  ),
];

const u7Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u07-l01',
    '7.1',
    'Presupuestos familiares y equivalencia monetaria',
    'Una familia tiene ingresos mensuales de $600 y gasta $250 en alimentación, $150 en vivienda y $100 en educación. ¿Cuánto dinero puede destinar al ahorro?',
    'Sumamos los egresos: 250 + 150 + 100 = $500. Restamos de los ingresos: 600 - 500 = $100 de saldo disponible para ahorro.',
    'En un presupuesto equilibrado: $$\\text{Saldo} = \\text{Ingresos} - \\text{Egresos}$$ Si los ingresos son mayores a los egresos se genera un superávit para el ahorro.',
    'El ahorro planificado permite afrontar imprevistos y emergencias familiares.',
    [{ exercise: 'Si los ingresos son $500 y los gastos son $420, ¿cuál es el ahorro?', hint: '500 - 420.', answer: '$80' }]
  ),
];

const u8Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u08-l01',
    '8.1',
    'Áreas de paralelogramos, triángulos y trapecios',
    '¿Cuál es el área de un terreno en forma de trapecio con bases de 12 m y 8 m y una altura perpendicular de 5 m?',
    'Sumamos las bases: 12 + 8 = 20 m. Multiplicamos por la altura y dividimos entre 2: (20 x 5) / 2 = 100 / 2 = 50 m².',
    'Fórmulas oficiales de áreas geométricas: $$A_{\\text{paral}} = b \\times h, \\qquad A_{\\triangle} = \\frac{b \\times h}{2}, \\qquad A_{\\text{trap}} = \\frac{(B + b) \\times h}{2}$$',
    'Un triángulo con base de $10\\text{ cm}$ y altura de $6\\text{ cm}$ tiene área $A = \\frac{10 \\times 6}{2} = 30\\text{ cm}^2$.',
    [{ exercise: 'Calcula el área de un paralelogramo de base 7 cm y altura 4 cm.', hint: '7 x 4.', answer: '28 cm²' }]
  ),
];

const u9Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u09-l01',
    '9.1',
    'Unidades de medida en el sistema inglés y tradicionales',
    'En el agro salvadoreño se venden granos básicos por arrobas y quintales. ¿A cuántas libras equivale 1 quintal?',
    'Una arroba equivale a 25 libras. Un quintal está compuesto por 4 arrobas: 4 x 25 = 100 libras.',
    'Equivalencias del sistema de pesas tradicional en El Salvador: $$1\\text{ quintal (qq)} = 4\\text{ arrobas (@)} = 100\\text{ libras (lb)}$$',
    '$2\\text{ quintales}$ de maíz equivalen a $200\\text{ libras}$.',
    [{ exercise: '¿Cuántas libras hay en 3 arrobas?', hint: '3 x 25.', answer: '75 libras' }]
  ),
];

const u10Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u10-l01',
    '10.1',
    'Suma y resta de fracciones heterogéneas con MCM',
    '¿Cómo sumamos $\\frac{1}{4} + \\frac{2}{3}$ si los denominadores son distintos?',
    'Calculamos el MCM de 4 y 3: MCM(4, 3) = 12. Convertimos a fracciones equivalentes con denominador 12: 1/4 = 3/12 y 2/3 = 8/12. Sumamos numeradores: 3/12 + 8/12 = 11/12.',
    "Para sumar o restar fracciones heterogéneas se homogeneizan encontrando el Mínimo Común Múltiplo de los denominadores: $$\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{a \\cdot d' \\pm c \\cdot b'}{\\text{MCM}(b, d)}$$",
    '$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.',
    [{ exercise: 'Calcula: 1/3 + 1/6', hint: 'MCM(3, 6) = 6.', answer: '3/6 = 1/2' }]
  ),
];

export const GRADE_05_DATA: GradeCurriculumData = {
  id: '5-grado',
  name: '5° Grado',
  cycle: 'Segundo Ciclo de Básica',
  cycleId: 'segundo-ciclo',
  description: 'Currículo oficial ESMATE de quinto grado: divisibilidad, MCM/MCD, decimales por decimales, áreas de polígonos y fracciones heterogéneas.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de quinto grado estructurado en 10 unidades oficiales.',
      units: [
        createCurriculumUnit(
          'mined-mat-5g-u01',
          1,
          'Divisibilidad, múltiplos y divisores',
          '5-grado',
          1,
          'Primos y compuestos, criterios de divisibilidad (2, 3, 5, 10), MCM y MCD por descomposición.',
          ['Calcula el MCM y MCD', 'Identifica primos y compuestos', 'Aplica criterios de divisibilidad'],
          u1Lessons5G,
          u1Questions5G,
          true
        ),
        createCurriculumUnit('mined-mat-5g-u02', 2, 'Ángulos y polígonos', '5-grado', 1, 'Suma de ángulos internos Si = (n-2)*180° y polígonos regulares.', ['Calcula ángulos en polígonos'], u2Lessons5G),
        createCurriculumUnit('mined-mat-5g-u03', 3, 'Multiplicación y división de números decimales por números naturales', '5-grado', 1, 'Algoritmos y manejo del punto decimal.', ['Multiplica decimales por naturales'], u3Lessons5G),
        createCurriculumUnit('mined-mat-5g-u04', 4, 'Gráfica de líneas', '5-grado', 1, 'Representación de cambios en el tiempo y tendencias.', ['Interpreta gráficas temporales'], u4Lessons5G),
        createCurriculumUnit('mined-mat-5g-u05', 5, 'Multiplicación y división de números decimales por números decimales', '5-grado', 1, 'Regla del número de cifras decimales.', ['Opera productos de decimales'], u5Lessons5G),
        createCurriculumUnit('mined-mat-5g-u06', 6, 'Cantidad por unidad', '5-grado', 2, 'Densidad poblacional y rapidez v = d/t.', ['Calcula razones por unidad'], u6Lessons5G),
        createCurriculumUnit('mined-mat-5g-u07', 7, 'Equivalencia de monedas y elaboración de presupuestos', '5-grado', 2, 'Ingresos, egresos, saldo y ahorro planificado.', ['Elabora presupuestos familiares'], u7Lessons5G),
        createCurriculumUnit('mined-mat-5g-u08', 8, 'Área de triángulos y cuadriláteros', '5-grado', 2, 'Áreas de paralelogramo, triángulo, rombo y trapecio.', ['Aplica fórmulas de áreas planas'], u8Lessons5G),
        createCurriculumUnit('mined-mat-5g-u09', 9, 'Unidades de medida en el sistema inglés', '5-grado', 2, 'Pulgada, pie, yarda, vara, libra, arroba y quintal.', ['Convierte unidades del sistema inglés'], u9Lessons5G),
        createCurriculumUnit('mined-mat-5g-u10', 10, 'Fracciones', '5-grado', 2, 'Homogeneización con MCM y operaciones heterogéneas.', ['Suma y resta con distinto denominador'], u10Lessons5G),
      ],
    },
  ],
};
