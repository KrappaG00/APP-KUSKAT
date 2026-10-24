import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 1° Grado - Unidad 1
// Conozcamos los conceptos básicos y los números del 0 al 10
// -----------------------------------------------------------------
const u1Archetypes1G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const counts = [3, 4, 5, 6, 7];
      const n = counts[(v - 1) % counts.length];
      const items = ['mangos maduros', 'pelotas de fútbol', 'estrellas en la pizarra', 'cuadernos rayados', 'flores de izote'];
      const item = items[(v - 1) % items.length];
      return {
        statement: `Si en una canasta escolar hay $${n}$ ${item}, ¿cuál es el número cardinal que representa la cantidad total?`,
        options: [`${n}`, `${n + 1}`, `${n - 1}`, `${n + 2}`],
        correctAnswer: 'A',
        explanation: `Al contar uno a uno los elementos de la colección ($1, 2, \\dots, ${n}$), el último número nombrado representa el cardinal total, que es $${n}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const nums = [2, 5, 8, 4, 9];
      const n = nums[(v - 1) % nums.length];
      const words = ['dos', 'cinco', 'ocho', 'cuatro', 'nueve'];
      const word = words[(v - 1) % words.length];
      const wrong = ['tres', 'seis', 'siete', 'uno'];
      return {
        statement: `¿Cómo se escribe en palabras el número $${n}$ según el libro oficial de Números y Formas?`,
        options: [wrong[0], word, wrong[1], wrong[2]],
        correctAnswer: 'B',
        explanation: `El número cardinal $${n}$ se lee y escribe correctamente como "${word}".`,
      };
    },
  },
  {
    generate: (v) => {
      const places = ['primer', 'segundo', 'tercer', 'cuarto', 'quinto'];
      const ords = ['1.°', '2.°', '3.°', '4.°', '5.°'];
      const idx = (v - 1) % places.length;
      return {
        statement: `En una carrera deportiva escolar, el estudiante que llega en el ${places[idx]} lugar recibe el símbolo ordinal:`,
        options: ['10.°', '0.°', ords[idx], '6.°'],
        correctAnswer: 'C',
        explanation: `El orden de llegada se expresa mediante números ordinales. Para el ${places[idx]} puesto corresponde el símbolo $${ords[idx]}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const val = [4, 7, 6, 8, 5][(v - 1) % 5];
      const p1 = [2, 3, 2, 5, 1][(v - 1) % 5];
      const p2 = val - p1;
      return {
        statement: `En la composición del número $${val}$, si tenemos una parte que vale $${p1}$, ¿cuánto debe valer la otra parte?`,
        options: [`${p2 + 1}`, `${p2 - 1}`, `${p2 + 2}`, `${p2}`],
        correctAnswer: 'D',
        explanation: `La composición numérica establece que $${p1} + ${p2} = ${val}$. Por tanto, la parte faltante es $${p2}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const zeroScenarios = [
        'María tenía 3 jocotes y se comió los 3.',
        'En un árbol habían 5 pajaritos y volaron los 5.',
        'Carlos tenía 2 lápices y se le perdieron los 2.',
        'En un plato habían 4 pupusas y se repartieron las 4.',
        'En una rama habían 6 hojas y cayeron las 6.',
      ];
      return {
        statement: `${zeroScenarios[(v - 1) % zeroScenarios.length]} ¿Qué número representa la ausencia total de objetos restantes?`,
        options: ['0', '1', '10', 'No existe número'],
        correctAnswer: 'A',
        explanation: `El número $0$ (cero) representa la ausencia de elementos o cantidad nula en el sistema numérico decimal.`,
      };
    },
  },
  {
    generate: (v) => {
      const pairs = [
        { a: 3, b: 7, pos: 'menor que' },
        { a: 8, b: 2, pos: 'mayor que' },
        { a: 5, b: 9, pos: 'menor que' },
        { a: 6, b: 1, pos: 'mayor que' },
        { a: 4, b: 10, pos: 'menor que' },
      ];
      const p = pairs[(v - 1) % pairs.length];
      return {
        statement: `Al comparar las cantidades $${p.a}$ y $${p.b}$ en la recta numérica, se concluye correctamente que $${p.a}$ es:`,
        options: ['igual a', `${p.pos} ${p.b}`, 'el doble de', 'el triple de'],
        correctAnswer: 'B',
        explanation: `En la recta numérica de 1° Grado, los números a la derecha son mayores. Por ende, $${p.a}$ es ${p.pos} $${p.b}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v * 2) % 9 + 1;
      return {
        statement: `¿Cuál es el número que se encuentra inmediatamente después (sucesor) del número $${n}$?`,
        options: [`${n - 1}`, `${n + 2}`, `${n + 1}`, `${n}`],
        correctAnswer: 'C',
        explanation: `El número inmediatamente posterior a $${n}$ en la secuencia de números naturales es $${n} + 1 = ${n + 1}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = [3, 5, 7, 9, 4][(v - 1) % 5];
      return {
        statement: `¿Cuál es el número que se encuentra inmediatamente antes (antecesor) del número $${n}$?`,
        options: [`${n + 1}`, `${n}`, `${n + 2}`, `${n - 1}`],
        correctAnswer: 'D',
        explanation: `El número inmediatamente anterior a $${n}$ en la recta numérica es $${n} - 1 = ${n - 1}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const totals = [6, 7, 8, 9, 10];
      const tot = totals[(v - 1) % totals.length];
      return {
        statement: `Si se agrupan $${tot}$ tapitas de botella, ¿cuántas unidades exactas se tienen en dicha colección?`,
        options: [`${tot} unidades`, `${tot * 10} unidades`, '1 decena exacta', '0 unidades'],
        correctAnswer: 'A',
        explanation: `Cada tapita representa una unidad simple. Una colección de $${tot}$ tapitas equivale exactamente a $${tot}$ unidades.`,
      };
    },
  },
  {
    generate: (v) => {
      const positions = ['arriba', 'abajo', 'a la derecha', 'a la izquierda', 'en medio'];
      const pos = positions[(v - 1) % positions.length];
      return {
        statement: `En las nociones de orientación espacial de 1° Grado, si un libro está colocado "${pos}" de la mesa, esto indica su:`,
        options: ['peso', 'posición relativa', 'color primario', 'temperatura'],
        correctAnswer: 'B',
        explanation: `Términos como arriba, abajo, delante, detrás, derecha e izquierda definen la posición relativa de los objetos en el espacio.`,
      };
    },
  },
];

const u1Questions1G = generate50UnitQuestions(
  'mined-mat-1g-u01',
  '1-grado',
  '1G',
  1,
  'Conozcamos los conceptos básicos y los números del 0 al 10',
  'MINED Números y Formas 1° Grado Tomo 1',
  u1Archetypes1G
);

// Lecciones P-S-C-E-R oficiales
const u1Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u01-l01',
    '1.1',
    'Conteo y escritura de los números del 1 al 5',
    'Mario observa en su jardín 1 mariposa, 2 patitos en una charca y 3 flores rojas. ¿Cómo representamos simbólicamente la cantidad de mariposas, patitos y flores?',
    'Contamos señalando cada objeto: 1 mariposa se asocia con el símbolo "1". Los patitos: 1, 2; se asocia con "2". Las flores: 1, 2, 3; se asocia con el trazo "3".',
    'Los números $1, 2, 3, 4, 5$ son cardinales que representan la cantidad exacta de elementos en un grupo. Se escriben empezando de arriba hacia abajo siguiendo la cuadrícula escolar.',
    'Si en una rama hay 4 pajaritos y llega 1 más, contamos: $1, 2, 3, 4, 5$. El número total es $5$.',
    [
      { exercise: 'Escribe el número que corresponde a un grupo de 4 manzanas.', hint: 'Cuenta una a una.', answer: '4' },
      { exercise: 'Dibuja 3 círculos y escribe su número.', hint: 'Son tres elementos.', answer: '3' },
    ]
  ),
  createPscerLesson(
    'mined-mat-1g-u01-l02',
    '1.2',
    'El número 0 y su significado',
    'En un plato habían 3 galletas. Ana se comió 1, luego otra y al final la última. ¿Cuántas galletas quedaron en el plato?',
    'Al inicio: 3 galletas. Se come 1, quedan 2. Se come otra, queda 1. Se come la última, no queda ninguna galleta en el plato.',
    'Cuando no hay ningún elemento que contar en una colección, decimos que hay "cero" objetos y se representa con el símbolo $$0$$.',
    'Si un árbol de mangos tiene 0 mangos maduros, significa que no hay frutos listos para cortar.',
    [
      { exercise: 'Si en una caja vacía no hay lápices, ¿qué número representa la cantidad de lápices?', hint: 'Ausencia de objetos.', answer: '0' },
    ]
  ),
  createPscerLesson(
    'mined-mat-1g-u01-l03',
    '1.3',
    'Composición y descomposición de números hasta 10',
    'Beatriz tiene 7 semillas de frijol y quiere repartirlas en dos tapitas plásticas. ¿De cuántas formas distintas puede repartir las 7 semillas?',
    'Separamos las 7 semillas: pueden quedar 6 y 1, 5 y 2, 4 y 3, 3 y 4, 2 y 5, o 1 y 6. Ambas partes juntas siempre suman 7.',
    'Cualquier número natural hasta $10$ puede descomponerse en dos partes. La suma de ambas partes vuelve a formar el número original: $$a + b = n$$',
    'El número $8$ se puede componer con $5$ y $3$, o con $4$ y $4$.',
    [
      { exercise: '¿Con qué número y 4 se compone el 9?', hint: 'Piensa cuánto le falta a 4 para llegar a 9.', answer: '5' },
    ]
  ),
  createPscerLesson(
    'mined-mat-1g-u01-l04',
    '1.4',
    'Los números ordinales hasta el 10.°',
    'Diez niños hacen fila para entrar al salón de clases de primer grado. ¿Cómo identificamos la posición de cada niño en la fila?',
    'Al niño que está al frente le llamamos primero (1.°). Al que le sigue, segundo (2.°), luego tercero (3.°), cuarto (4.°), quinto (5.°), sexto (6.°), séptimo (7.°), octavo (8.°), noveno (9.°) y décimo (10.°).',
    'Los números ordinales indican la posición u orden de los elementos en una secuencia ordenada. Se escriben con el número acompañado de un pequeño círculo volado: $$1.^{\\circ}, 2.^{\\circ}, 3.^{\\circ}, \\dots, 10.^{\\circ}$$',
    'El tercer día de la semana escolar (lunes 1.°, martes 2.°) es el miércoles ($3.^{\\circ}$).',
    [
      { exercise: '¿Qué símbolo ordinal corresponde al quinto lugar?', hint: 'El número 5 con su circulito.', answer: '5.°' },
    ]
  ),
];

// Unidad 2 a 8 con lecciones P-S-C-E-R oficiales
const u2Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u02-l01',
    '2.1',
    'Sentido de la suma horizontal hasta 10',
    'Carlos tiene 3 chibolas rojas y su hermano le regala 2 chibolas azules. ¿Cuántas chibolas tiene Carlos en total?',
    'Juntamos las colecciones: 3 chibolas y 2 chibolas. Al contar todas juntas tenemos: 1, 2, 3, 4, 5 chibolas.',
    'La acción de juntar o agregar se representa con la suma. Usamos el signo más ($+$) y el signo igual ($=$): $$3 + 2 = 5$$',
    'Si hay 4 manzanas en una mesa y ponemos 3 más: $$4 + 3 = 7$$',
    [{ exercise: 'Calcula: 5 + 2', hint: 'Agrega 2 a 5.', answer: '7' }]
  ),
];

const u3Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u03-l01',
    '3.1',
    'Conozcamos la decena y los números del 11 al 20',
    'Si agrupamos 10 tapitas plásticas con una liga y colocamos 3 tapitas sueltas a la par, ¿cuántas tapitas tenemos en total?',
    'El grupo de 10 tapitas forma 1 decena. Las 3 tapitas sueltas son 3 unidades. 1 decena y 3 unidades forman el número 13.',
    'Una colección de $10$ unidades forma una **decena**. Los números del $11$ al $19$ se componen de $1$ decena y unidades sueltas: $$10 + u = 1u$$',
    '$1$ decena y $6$ unidades forman el número $16$.',
    [{ exercise: '¿Cuántas decenas y unidades hay en 15?', hint: '1 grupo de 10 y 5 sueltas.', answer: '1 decena y 5 unidades' }]
  ),
];

const u4Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u04-l01',
    '4.1',
    'Sumas y restas sin llevar hasta 20',
    'En un canasto hay 12 panes dulces y la panadera agrega 3 más. ¿Cuántos panes hay en total?',
    'Descomponemos 12 en 10 y 2. Sumamos las unidades: 2 + 3 = 5. Luego unimos la decena con las 5 unidades: 10 + 5 = 15.',
    'Para sumar un número de dos cifras con uno de una cifra sin llevar, se suman primero las unidades y se mantiene la decena: $$12 + 3 = 10 + (2 + 3) = 15$$',
    'Para restar $17 - 4$: restamos $7 - 4 = 3$, por lo que $17 - 4 = 13$.',
    [{ exercise: 'Calcula: 14 + 5', hint: 'Suma 4 + 5 y añade la decena.', answer: '19' }]
  ),
];

const u5Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u05-l01',
    '5.1',
    'Conozcamos los números hasta 100 y la centena',
    'Si tenemos 10 atados de 10 lápices cada uno, ¿cuántos lápices hay en total?',
    'Contamos de 10 en 10: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. Hay 10 decenas completas.',
    'Diez grupos de $10$ forman una **centena** ($100$ unidades). Se escribe con el número $$100$$.',
    'El número $99$ más $1$ unidad forma exactamente el número $100$.',
    [{ exercise: '¿Cuántas decenas hay en 70?', hint: 'Cuenta de 10 en 10.', answer: '7 decenas' }]
  ),
];

const u6Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u06-l01',
    '6.1',
    'Comparación directa e indirecta de longitudes',
    '¿Cómo podemos saber cuál de dos cintas de tela es más larga si ambas están enrolladas?',
    'Estiramos ambas cintas en una superficie plana y alineamos uno de sus extremos en la misma línea de partida.',
    'Para comparar longitudes de forma directa se debe hacer coincidir un extremo de referencia común. El objeto que sobresalga en el otro extremo es el más largo.',
    'Si un lápiz mide 6 clips y un borrador mide 2 clips, el lápiz es más largo por 4 clips.',
    [{ exercise: '¿Qué cinta es más larga si la cinta A mide 8 cuartas y la B mide 5 cuartas?', hint: 'Compara 8 y 5.', answer: 'Cinta A' }]
  ),
];

const u7Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u07-l01',
    '7.1',
    'Identificación de figuras planas y líneas rectas',
    'Al observar la cara de una caja de fósforos y una moneda, ¿qué formas geométricas identificamos?',
    'El contorno de la cara de la caja tiene 4 lados rectos (rectángulo). El contorno de la moneda es una línea curva cerrada (círculo).',
    'Las figuras planas delimitadas por líneas rectas son los triángulos ($3$ lados) y cuadriláteros ($4$ lados). Las delimitadas por curvas cerradas forman el círculo.',
    'Una señal de tránsito de "ALTO" tiene forma poligonal con bordes rectos.',
    [{ exercise: '¿Cuántos lados rectos tiene un triángulo?', hint: 'Cuenta sus esquinas.', answer: '3 lados' }]
  ),
];

const u8Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u08-l01',
    '8.1',
    'Lectura del reloj analógico y monedas de curso legal',
    'Si la aguja corta del reloj marca el 8 y la aguja larga marca el 12, ¿qué hora es en El Salvador?',
    'La aguja corta (horario) indica las horas y la aguja larga (minutero) indica los minutos. Cuando la aguja larga apunta al 12, marca la hora en punto.',
    'En un reloj de manecillas, si el minutero está en el $12$ y el horario en el número $n$, la hora es exactamente las $$n:00\\text{ en punto}$$',
    'Una moneda de $25$ centavos de dólar equivale a cinco monedas de $5$ centavos.',
    [{ exercise: '¿Qué hora marca el reloj si la aguja corta apunta al 3 y la larga al 12?', hint: 'Hora en punto.', answer: 'Las 3:00' }]
  ),
];

export const GRADE_01_DATA: GradeCurriculumData = {
  id: '1-grado',
  name: '1° Grado',
  cycle: 'Primer Ciclo de Básica',
  cycleId: 'primer-ciclo',
  description: 'Fundamentos de matemática escolar oficial bajo el programa Números y Formas (Tomo 1 y Tomo 2).',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (Números y Formas)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial MINED de primer grado enfocado en números cardinales, ordinales, sumas, restas y figuras.',
      units: [
        createCurriculumUnit(
          'mined-mat-1g-u01',
          1,
          'Conozcamos los conceptos básicos y los números del 0 al 10',
          '1-grado',
          1,
          'Orientación espacial, conteo, números cardinales del 0 al 10, números ordinales y descomposición.',
          ['Identifica cardinales del 0 al 10', 'Escribe números ordinales', 'Compone números'],
          u1Lessons1G,
          u1Questions1G,
          true
        ),
        createCurriculumUnit(
          'mined-mat-1g-u02',
          2,
          'Sumemos y restemos de forma horizontal con números del 0 al 10',
          '1-grado',
          1,
          'Sentido de la adición y sustracción horizontal, uso del cero.',
          ['Calcula sumas y restas horizontales hasta 10'],
          u2Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u03',
          3,
          'Conozcamos los números del 11 al 20 y valor posicional',
          '1-grado',
          1,
          'Conteo del 11 al 20, decenas y unidades, recta numérica.',
          ['Reconoce la decena como 10 unidades'],
          u3Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u04',
          4,
          'Sumemos y restemos de forma horizontal con números hasta el 20',
          '1-grado',
          1,
          'Adición sin llevar y sustracción sin prestar con minuendos hasta 19.',
          ['Resuelve operaciones horizontales hasta 20'],
          u4Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u05',
          5,
          'Conozcamos los números hasta 100',
          '1-grado',
          2,
          'Agrupación de 10 en 10, decenas completas y la centena (100).',
          ['Cuenta de 10 en 10 hasta 100'],
          u5Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u06',
          6,
          'Aprendamos a medir longitudes y comparar',
          '1-grado',
          2,
          'Comparación directa e indirecta de objetos y medidas no estandarizadas.',
          ['Compara longitudes alineando extremos'],
          u6Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u07',
          7,
          'Identifiquemos figuras y líneas',
          '1-grado',
          2,
          'Líneas rectas y curvas, superficies planas y figuras geométricas básicas.',
          ['Distingue círculos, triángulos y rectángulos'],
          u7Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u08',
          8,
          'Conozcamos el tiempo y la moneda',
          '1-grado',
          2,
          'El reloj analógico, horas en punto, monedas de centavos y billete de 1 dólar.',
          ['Reconoce denominaciones de dólar y hora en punto'],
          u8Lessons1G
        ),
      ],
    },
  ],
};
