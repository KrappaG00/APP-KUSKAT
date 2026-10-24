import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 2° Grado - Unidad 1
// Conozcamos los números hasta 1,000
// -----------------------------------------------------------------
const u1Archetypes2G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const c = (v % 8) + 1;
      const d = (v * 2) % 9;
      const u = (v * 3) % 9;
      const num = c * 100 + d * 10 + u;
      return {
        statement: `En el número de tres cifras $${num}$, ¿cuántas centenas exactas hay en su valor posicional?`,
        options: [`${c} centenas`, `${c + 1} centenas`, `${c + 2} centenas`, `${c * 10} centenas`],
        correctAnswer: 'A',
        explanation: `En la tabla de valor posicional (C, D, U), la cifra de las centenas en $${num}$ es $${c}$, que representa $${c * 100}$ unidades.`,
      };
    },
  },
  {
    generate: (v) => {
      const c = (v % 7) + 2;
      const total = c * 100;
      return {
        statement: `Si en una bodega escolar hay $${c}$ cajas con $100$ cuadernos cada una, ¿cuántos cuadernos hay en total?`,
        options: [`${total + 10}`, `${total}`, `${total - 100}`, `${c * 10}`],
        correctAnswer: 'B',
        explanation: `Cada caja de $100$ representa una centena. $${c}$ centenas equivalen a $${c} \\times 100 = ${total}$ unidades.`,
      };
    },
  },
  {
    generate: (v) => {
      const ordinals = [
        { ord: '11.°', text: 'undécimo' },
        { ord: '12.°', text: 'duodécimo' },
        { ord: '15.°', text: 'décimo quinto' },
        { ord: '20.°', text: 'vigésimo' },
        { ord: '18.°', text: 'décimo octavo' },
      ];
      const o = ordinals[(v - 1) % ordinals.length];
      return {
        statement: `¿Cómo se lee correctamente el número ordinal $${o.ord}$ según el libro oficial ESMATE de 2° Grado?`,
        options: ['décimo', 'vigésimo primero', `${o.text}`, 'trigésimo'],
        correctAnswer: 'C',
        explanation: `El ordinal $${o.ord}$ se nombra formalmente en español como "${o.text}".`,
      };
    },
  },
  {
    generate: (v) => {
      const n = 200 + v * 30;
      return {
        statement: `¿Cuál es el número que equivale a descomponer $${n}$ en centenas completas?`,
        options: [
          `${n + 10}`,
          `${n - 10}`,
          `${n + 100}`,
          `${Math.floor(n / 100)} centenas y ${n % 100} unidades`,
        ],
        correctAnswer: 'D',
        explanation: `Al descomponer $${n}$, se toman sus centenas ($${Math.floor(n / 100)}$ centenas) y las unidades restantes ($${n % 100}$).`,
      };
    },
  },
  {
    generate: (v) => {
      const a = 350 + v * 15;
      const b = 400 + v * 10;
      return {
        statement: `Al comparar los números $${a}$ y $${b}$ usando los signos de relación, ¿cuál expresión es la correcta?`,
        options: [`$${a} < ${b}$`, `$${a} > ${b}$`, `$${a} = ${b}$`, `$${a} + ${b} = 1000$`],
        correctAnswer: 'A',
        explanation: `Al comparar las cifras de las centenas o su posición en la recta numérica, $${a}$ está a la izquierda de $${b}$, por lo tanto $${a} < ${b}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const centenas = (v % 9) + 1;
      return {
        statement: `¿Cuántas decenas completas se necesitan para formar exactamente $${centenas}$ centenas?`,
        options: [`${centenas * 5}`, `${centenas * 10}`, `${centenas * 100}`, `${centenas}`],
        correctAnswer: 'B',
        explanation: `Cada centena está formada por $10$ decenas. Por lo tanto, $${centenas}$ centenas tienen $${centenas} \\times 10 = ${centenas * 10}$ decenas.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = 999;
      return {
        statement: `Si al número $${n}$ le sumamos $1$ unidad, ¿qué nuevo orden de valor posicional se forma en el sistema decimal?`,
        options: ['1 centena', '10 decenas', '1 unidad de millar (1,000)', '10 centenas y 1 unidad'],
        correctAnswer: 'C',
        explanation: `Al sumar $999 + 1 = 1,000$, se completa la primera unidad de millar ($1\\text{ UM}$), que equivale a $10$ centenas o $1,000$ unidades.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = 500 + v * 25;
      return {
        statement: `¿Cuál es el número inmediatamente posterior (sucesor) a $${n}$ en la recta numérica?`,
        options: [`${n - 1}`, `${n + 10}`, `${n + 2}`, `${n + 1}`],
        correctAnswer: 'D',
        explanation: `El sucesor inmediato de un número natural $n$ siempre se obtiene sumándole $1$, es decir, $${n} + 1 = ${n + 1}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const c = [4, 6, 8, 3, 7][(v - 1) % 5];
      const d = 5;
      const u = 2;
      const num = c * 100 + d * 10 + u;
      return {
        statement: `En la tabla de valor posicional, ¿cuál es la forma desarrollada del número $${num}$?`,
        options: [
          `$${c * 100} + ${d * 10} + ${u}$`,
          `$${c} + ${d} + ${u}$`,
          `$${c * 10} + ${d} + ${u}$`,
          `$${c * 1000} + ${d * 10} + ${u}$`,
        ],
        correctAnswer: 'A',
        explanation: `La forma desarrollada descompone el número según el valor relativo de cada cifra: $${c * 100} + ${d * 10} + ${u} = ${num}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const step = 50;
      const start = 200 + (v % 4) * 100;
      return {
        statement: `Si contamos de $50$ en $50$ empezando en $${start}$, ¿cuál es el siguiente número de la serie?`,
        options: [`${start + 100}`, `${start + step}`, `${start + 25}`, `${start + 10}`],
        correctAnswer: 'B',
        explanation: `En un conteo de $50$ en $50$, sumamos $50$ al término anterior: $${start} + 50 = ${start + step}$.`,
      };
    },
  },
];

const u1Questions2G = generate50UnitQuestions(
  'mined-mat-2g-u01',
  '2-grado',
  '2G',
  1,
  'Conozcamos los números hasta 1,000',
  'MINED ESMATE 2° Grado Tomo 1',
  u1Archetypes2G
);

// Lecciones P-S-C-E-R oficiales
const u1Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u01-l01',
    '1.1',
    'Conozcamos los números hasta 200 y la centena',
    'Una cooperativa de café en Ahuachapán empaca granos en bolsas de 100 unidades. Si tienen 1 bolsa de 100 y 4 bolsas de 10 granos y 7 granos sueltos, ¿cuántos granos tienen?',
    '1 bolsa de 100 = 1 centena (100). 4 bolsas de 10 = 4 decenas (40). 7 granos = 7 unidades. Juntando todo: 100 + 40 + 7 = 147.',
    'Los números de tres cifras se representan en la tabla de valor posicional con Centenas (C), Decenas (D) y Unidades (U). Una centena equivale a $$1\\text{ C} = 10\\text{ D} = 100\\text{ U}$$',
    'El número $185$ está formado por $1$ centena, $8$ decenas y $5$ unidades.',
    [{ exercise: 'Escribe el número formado por 1 C, 9 D y 2 U.', hint: 'Coloca cada dígito en su casilla.', answer: '192' }]
  ),
  createPscerLesson(
    'mined-mat-2g-u01-l02',
    '1.2',
    'Números de tres cifras y la unidad de millar',
    'En una biblioteca escolar hay 9 cajas de 100 libros cada una, 9 paquetes de 10 libros y 9 libros sueltos. Si donan 1 libro más, ¿cuántos libros hay?',
    'Antes de la donación habían 999 libros. Al agregar 1 libro, se completan 10 unidades que pasan a ser 1 decena; 10 decenas pasan a ser 1 centena; y 10 centenas forman una unidad de millar: 1,000.',
    'Diez centenas forman una **unidad de millar** ($1\\text{ UM}$), que se escribe como $$1,000$$ y equivale a mil unidades.',
    'Si tenemos 5 cajas de 100 libros, tenemos $500$ libros.',
    [{ exercise: '¿Cuántas centenas forman 1,000?', hint: 'Grupos de 100.', answer: '10 centenas' }]
  ),
];

const u2Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u02-l01',
    '2.1',
    'Suma vertical llevando a las decenas',
    'En un huerto de Sonsonate se cortaron 47 naranjas por la mañana y 28 naranjas por la tarde. ¿Cuántas naranjas se cortaron en total?',
    'Colocamos en forma vertical alineando U y D. Sumamos unidades: 7 + 8 = 15. Escribimos 5 en las unidades y llevamos 1 a las decenas. Sumamos decenas: 4 + 2 + 1 = 7. Total: 75.',
    'Cuando la suma de las unidades es $10$ o más, se escribe la cifra de las unidades y se lleva $1$ a la columna de las decenas: $$\\begin{array}{r} 47 \\\\ + 28 \\\\ \\hline 75 \\end{array}$$',
    'Para sumar $36 + 19$: $6 + 9 = 15$ (llevo 1), $3 + 1 + 1 = 5$, resultado: $55$.',
    [{ exercise: 'Calcula verticalmente: 58 + 26', hint: 'Lleva 1 a las decenas.', answer: '84' }]
  ),
];

const u3Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u03-l01',
    '3.1',
    'Figuras planas: rectángulos, cuadrados y triángulos',
    '¿Qué características diferencian a un cuadrado de un rectángulo?',
    'Ambos tienen 4 lados rectos y 4 esquinas rectas (vértices), pero el cuadrado tiene sus 4 lados de igual longitud, mientras que el rectángulo tiene lados opuestos iguales dos a dos.',
    'Un **rectángulo** tiene $4$ lados y $4$ vértices rectos con lados opuestos de igual medida. Un **cuadrado** es un rectángulo especial con sus $4$ lados de igual medida.',
    'Una hoja de cuaderno tamaño carta tiene forma de rectángulo.',
    [{ exercise: '¿Cuántos vértices tiene un triángulo?', hint: 'Cuenta las esquinas.', answer: '3 vértices' }]
  ),
];

const u4Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u04-l01',
    '4.1',
    'Resta vertical prestando de las decenas',
    'Don Tomás tenía 63 cocos en su puesto de playa El Tunco y vendió 27. ¿Cuántos cocos le quedaron?',
    'Alineamos U y D: como a 3 no le podemos restar 7, prestamos 1 decena de las 6 decenas. La decena prestada se convierte en 10 unidades: 10 + 3 = 13. Restamos unidades: 13 - 7 = 6. Las decenas quedaron en 5: 5 - 2 = 3. Resultado: 36.',
    'Si la cifra del minuendo en las unidades es menor que la del sustraendo, se presta $1$ decena (que vale $10$ unidades): $$\\begin{array}{r} 63 \\\\ - 27 \\\\ \\hline 36 \\end{array}$$',
    'Para restar $82 - 35$: $12 - 5 = 7$, $7 - 3 = 4$, resultado: $47$.',
    [{ exercise: 'Calcula: 71 - 38', hint: 'Presta 1 decena.', answer: '33' }]
  ),
];

const u5Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u05-l01',
    '5.1',
    'Sentido de la multiplicación y tablas del 2, 3, 4 y 5',
    'En una mesa hay 4 platos con 3 pupusas cada uno. ¿Cuántas pupusas hay en total sin sumar de uno en uno?',
    'Hay 4 grupos de 3 pupusas. En lugar de sumar 3 + 3 + 3 + 3, multiplicamos la cantidad por plato por el número de platos: 3 x 4 = 12.',
    'La multiplicación es una suma abreviada de sumandos iguales. Se escribe usando el signo por ($\\times$): $$\\text{Cantidad en cada grupo} \\times \\text{Cantidad de grupos} = \\text{Total}$$',
    'Si hay 5 bolsas con 2 panes: $2 \\times 5 = 10$.',
    [{ exercise: 'Calcula usando multiplicación: 4 platos con 5 mangos', hint: '5 x 4', answer: '20 mangos' }]
  ),
];

const u6Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u06-l01',
    '6.1',
    'El centímetro y el uso de la regla graduada',
    '¿Cómo medimos con exactitud el largo de un borrador escolar con una regla graduada?',
    'Colocamos la marca del 0 de la regla en el borde inicial del borrador y leemos el número donde termina el borrador.',
    'El **centímetro** ($\\text{cm}$) es una unidad de medida estándar de longitud. $1$ metro contiene $100\\text{ cm}$.',
    'Si un lápiz comienza en el $0$ y llega al $14$, mide $14\\text{ cm}$.',
    [{ exercise: '¿Cuántos centímetros hay en 2 metros?', hint: '1 m = 100 cm.', answer: '200 cm' }]
  ),
];

const u7Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u07-l01',
    '7.1',
    'Tablas de multiplicar del 6, 7, 8, 9 y 10',
    'En un desfile patrio marchan 7 filas con 6 estudiantes en cada fila. ¿Cuántos estudiantes marchan?',
    'Multiplicamos estudiantes por fila por número de filas: 6 x 7 = 42 estudiantes.',
    'La multiplicación cumple la propiedad conmutativa: cambiar el orden de los factores no altera el producto: $$a \\times b = b \\times a$$ Por ejemplo, $6 \\times 7 = 7 \\times 6 = 42$.',
    '$8 \\times 9 = 72$, que es igual a $9 \\times 8 = 72$.',
    [{ exercise: 'Calcula: 7 x 8', hint: '56.', answer: '56' }]
  ),
];

const u8Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u08-l01',
    '8.1',
    'La libra y el litro en la vida cotidiana',
    'En el mercado central de Santa Tecla, Doña Carmen pesa frijoles en una balanza y mide leche en recipientes. ¿Qué unidades utiliza?',
    'Para el peso utiliza la libra (lb). Para la capacidad de líquidos utiliza el litro (l).',
    'La **libra** es la unidad tradicional de peso de uso común en El Salvador. El **litro** es la unidad de capacidad para medir líquidos.',
    'Una libra de queso equivale a dos medias libras.',
    [{ exercise: '¿Cuántos medios litros caben en 1 litro?', hint: 'Mitades.', answer: '2 medios litros' }]
  ),
];

const u9Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u09-l01',
    '9.1',
    'El reloj de agujas con horas y minutos',
    'Si la aguja corta apunta al 4 y la aguja larga apunta al 6, ¿qué hora marca el reloj?',
    'La aguja corta indica las 4. La aguja larga (minutero) avanza de 5 en 5 minutos por cada número: 6 x 5 = 30 minutos. Marca las 4:30.',
    'Cada número en el reloj analógico representa $5$ minutos para el minutero: $$\\text{Minutos} = \\text{Número marcado} \\times 5$$',
    'Si el minutero apunta al 3, han transcurrido $3 \\times 5 = 15$ minutos (cuarto de hora).',
    [{ exercise: '¿Qué hora es si el horario está en las 2 y el minutero en el 6?', hint: 'Media hora.', answer: 'Las 2:30' }]
  ),
];

export const GRADE_02_DATA: GradeCurriculumData = {
  id: '2-grado',
  name: '2° Grado',
  cycle: 'Primer Ciclo de Básica',
  cycleId: 'primer-ciclo',
  description: 'Currículo oficial ESMATE de segundo grado: números hasta 1,000, sumas/restas verticales, multiplicación y medidas.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de segundo grado (Tomos 1 y 2).',
      units: [
        createCurriculumUnit(
          'mined-mat-2g-u01',
          1,
          'Conozcamos los números hasta 1,000',
          '2-grado',
          1,
          'Lectura y escritura hasta 1,000, valor posicional (C, D, U), unidad de millar y números ordinales hasta el 20°.',
          ['Escribe números de tres cifras', 'Reconoce la unidad de millar', 'Usa números ordinales hasta 20°'],
          u1Lessons2G,
          u1Questions2G,
          true
        ),
        createCurriculumUnit('mined-mat-2g-u02', 2, 'Aprendamos más sobre la suma', '2-grado', 1, 'Suma vertical llevando a las decenas y centenas.', ['Calcula sumas llevando verticalmente'], u2Lessons2G),
        createCurriculumUnit('mined-mat-2g-u03', 3, 'Conozcamos figuras y cuerpos geométricos', '2-grado', 1, 'Figuras planas y cuerpos geométricos tridimensionales.', ['Distingue rectángulos y prismas'], u3Lessons2G),
        createCurriculumUnit('mined-mat-2g-u04', 4, 'Aprendamos más sobre la resta', '2-grado', 1, 'Resta vertical prestando a las decenas y centenas.', ['Aplica algoritmo de resta con préstamo'], u4Lessons2G),
        createCurriculumUnit('mined-mat-2g-u05', 5, 'Comencemos a multiplicar', '2-grado', 2, 'Sentido de la multiplicación y tablas del 2, 3, 4 y 5.', ['Domina las tablas del 2 al 5'], u5Lessons2G),
        createCurriculumUnit('mined-mat-2g-u06', 6, 'Conozcamos medidas de longitud', '2-grado', 2, 'El centímetro y uso de la regla graduada.', ['Mide segmentos en centímetros'], u6Lessons2G),
        createCurriculumUnit('mined-mat-2g-u07', 7, 'Sigamos multiplicando', '2-grado', 2, 'Tablas del 6 al 10 y propiedad conmutativa.', ['Domina tablas del 6 al 10'], u7Lessons2G),
        createCurriculumUnit('mined-mat-2g-u08', 8, 'Conozcamos medidas de peso y capacidad', '2-grado', 2, 'La libra y el litro en situaciones cotidianas.', ['Compara pesos y capacidades'], u8Lessons2G),
        createCurriculumUnit('mined-mat-2g-u09', 9, 'Apliquemos la Matemática', '2-grado', 2, 'Reloj de agujas, calendario, dinero y gráficas de barras.', ['Resuelve problemas aplicados'], u9Lessons2G),
      ],
    },
  ],
};
