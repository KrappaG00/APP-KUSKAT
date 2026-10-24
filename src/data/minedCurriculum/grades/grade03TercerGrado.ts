import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 3° Grado - Unidad 1
// Números hasta 10,000
// -----------------------------------------------------------------
const u1Archetypes3G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const um = (v % 8) + 1;
      const c = (v * 2) % 9;
      const d = (v * 3) % 9;
      const u = (v * 4) % 9;
      const num = um * 1000 + c * 100 + d * 10 + u;
      return {
        statement: `En el número de cuatro cifras $${num}$, ¿cuál es el valor relativo de la cifra de las unidades de millar ($${um}$)?`,
        options: [`$${um * 1000}$`, `$${um * 100}$`, `$${um * 10}$`, `$${um}$`],
        correctAnswer: 'A',
        explanation: `La cifra en la posición de las unidades de millar (UM) tiene un valor relativo multiplicado por $1,000$, por lo que $${um}$ vale $${um * 1000}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const um = (v % 7) + 2;
      const total = um * 1000;
      return {
        statement: `Si un banco salvadoreño empaca billetes en fajos de $1,000$ dólares y tiene $${um}$ fajos completos, ¿cuál es el total en dólares?`,
        options: [`$${total + 100}$`, `$${total}$`, `$${total - 100}$`, `$${um * 100}$`],
        correctAnswer: 'B',
        explanation: `$${um}$ unidades de millar equivalen a $${um} \\times 1,000 = ${total}$ dólares.`,
      };
    },
  },
  {
    generate: (v) => {
      const base = 4320 + v * 45;
      const rounded = Math.round(base / 100) * 100;
      return {
        statement: `Al redondear el número $${base}$ a la centena más cercana, ¿cuál es el resultado correcto?`,
        options: [`${rounded - 100}`, `${rounded + 100}`, `${rounded}`, `${rounded + 10}`],
        correctAnswer: 'C',
        explanation: `Para redondear a la centena se observa la cifra de las decenas. Si es menor que 5 se mantiene la centena; si es 5 o mayor se suma 1 a la centena, resultando $${rounded}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n1 = 3000 + v * 120;
      const n2 = 3000 + v * 120 + 35;
      return {
        statement: `Al comparar los números $${n1}$ y $${n2}$, ¿cuál relación de orden es correcta?`,
        options: [`$${n1} > ${n2}$`, `$${n1} = ${n2}$`, `$${n1} \\ge ${n2}$`, `$${n1} < ${n2}$`],
        correctAnswer: 'D',
        explanation: `Como ambos tienen igual cifra de millar y centena, comparamos las decenas y unidades: $${n1}$ es estrictamente menor que $${n2}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const um = (v % 6) + 3;
      return {
        statement: `¿Cuántas centenas completas se necesitan para componer exactamente $${um}$ unidades de millar?`,
        options: [`${um * 10} centenas`, `${um * 100} centenas`, `${um} centenas`, `${um * 5} centenas`],
        correctAnswer: 'A',
        explanation: `Cada unidad de millar está compuesta por $10$ centenas. Por ende, $${um}$ unidades de millar equivalen a $${um} \\times 10 = ${um * 10}$ centenas.`,
      };
    },
  },
  {
    generate: (v) => {
      const num = 1000 + v * 500;
      return {
        statement: `En la recta numérica de 3° Grado, el número que está a la mitad exacta entre $${num}$ y $${num + 1000}$ es:`,
        options: [`${num + 400}`, `${num + 500}`, `${num + 600}`, `${num + 250}`],
        correctAnswer: 'B',
        explanation: `El punto medio entre dos números en la recta numérica es su promedio: $\\frac{${num} + ${num + 1000}}{2} = ${num + 500}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const um = 5;
      const c = 0;
      const d = 4;
      const u = 8;
      const val = um * 1000 + c * 100 + d * 10 + u;
      return {
        statement: `¿Cómo se escribe en cifras el número "cinco mil cuarenta y ocho"?`,
        options: ['5,480', '50,048', '5,048', '548'],
        correctAnswer: 'C',
        explanation: `Tiene 5 unidades de millar, 0 centenas, 4 decenas y 8 unidades: $5,048$.`,
      };
    },
  },
  {
    generate: (v) => {
      const val = 7000 + v * 100;
      return {
        statement: `¿Cuál es el valor del número que se obtiene al sumar $1,000$ a $${val}$?`,
        options: [`${val + 100}`, `${val + 10}`, `${val + 2000}`, `${val + 1000}`],
        correctAnswer: 'D',
        explanation: `Al sumar una unidad de millar ($1,000$) a $${val}$, obtenemos $${val} + 1,000 = ${val + 1000}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = 9999;
      return {
        statement: `¿Qué número natural se forma al sumar $1$ al número de cuatro cifras más grande ($${n}$)?`,
        options: ['10,000 (diez mil)', '100,000 (cien mil)', '9,990', '1,000 (mil)'],
        correctAnswer: 'A',
        explanation: `$9,999 + 1 = 10,000$ (diez mil), que inicia las decenas de millar en el sistema de numeración decimal.`,
      };
    },
  },
  {
    generate: (v) => {
      const val = 6450;
      return {
        statement: `En la descomposición aditiva del número $${val}$, ¿cuál es su expresión correcta?`,
        options: [
          `$600 + 40 + 5$`,
          `$6,000 + 400 + 50$`,
          `$60,000 + 400 + 50$`,
          `$6 + 4 + 5 + 0$`,
        ],
        correctAnswer: 'B',
        explanation: `La forma desarrollada descompone según las posiciones relativas: $6,000 + 400 + 50 = 6,450$.`,
      };
    },
  },
];

const u1Questions3G = generate50UnitQuestions(
  'mined-mat-3g-u01',
  '3-grado',
  '3G',
  1,
  'Números hasta 10,000',
  'MINED ESMATE 3° Grado',
  u1Archetypes3G
);

const u1Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u01-l01',
    '1.1',
    'Lectura y escritura de números hasta 10,000',
    'En el censo de una comunidad del volcán de San Salvador se registraron 3,542 habitantes. ¿Cómo se lee y escribe este número en la tabla posicional?',
    'Ubicamos en la tabla: UM = 3, C = 5, D = 4, U = 2. Se lee: tres mil quinientos cuarenta y dos.',
    'Los números de cuatro cifras se componen de Unidades de Millar (UM), Centenas (C), Decenas (D) y Unidades (U). Su valor se expresa como: $$N = \\text{UM} \\times 1000 + \\text{C} \\times 100 + \\text{D} \\times 10 + \\text{U}$$',
    'El número $7,804$ se lee siete mil ochocientos cuatro.',
    [{ exercise: 'Escribe en palabras el número 4,215.', hint: 'Cuatro mil...', answer: 'Cuatro mil doscientos quince' }]
  ),
  createPscerLesson(
    'mined-mat-3g-u01-l02',
    '1.2',
    'Aproximación y comparación en la recta numérica',
    'Un camión que transporta mangos desde La Unión ha recorrido 2,680 metros. ¿A qué millar está más cerca: a 2,000 m o a 3,000 m?',
    'Observamos la cifra de las centenas (6). Como 6 es mayor o igual que 5, 2,680 está más cerca de 3,000 m que de 2,000 m.',
    'Para aproximar un número a la unidad de millar más cercana se examina la cifra de las centenas: si es $\\ge 5$, se aproxima al millar superior.',
    '$1,240$ se aproxima a $1,000$ porque la centena es $2 < 5$.',
    [{ exercise: 'Aproxima 6,750 a la unidad de millar.', hint: 'Centena 7 >= 5.', answer: '7,000' }]
  ),
];

const u2Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u02-l01',
    '2.1',
    'Suma vertical de números de hasta cuatro cifras llevando',
    'En una feria ganadera en San Miguel se vendieron 2,456 cabezas de ganado el sábado y 1,789 el domingo. ¿Cuántas se vendieron en total?',
    'Alineamos UM, C, D, U. Sumamos unidades 6+9=15 (llevo 1). Decenas: 5+8+1=14 (llevo 1). Centenas: 4+7+1=12 (llevo 1). Millares: 2+1+1=4. Total: 4,245.',
    'En la suma vertical de números de cuatro cifras, se puede llevar a las decenas, a las centenas y a las unidades de millar de forma sucesiva: $$\\begin{array}{r} 2456 \\\\ + 1789 \\\\ \\hline 4245 \\end{array}$$',
    'Sumar $3,150 + 2,980 = 6,130$.',
    [{ exercise: 'Calcula: 3,580 + 2,645', hint: 'Suma llevando.', answer: '6,225' }]
  ),
];

const u3Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u03-l01',
    '3.1',
    'Ángulos rectos, agudos y obtusos',
    'Al abrir una tijera o una ventana escolar, ¿cómo clasificamos la abertura formada por las dos líneas?',
    'Si la abertura coincide exactamente con la esquina de una hoja de papel, es un ángulo recto (90°). Si es menor, es agudo. Si es mayor, es obtuso.',
    'Un **ángulo recto** mide $90^\\circ$. Un **ángulo agudo** mide menos de $90^\\circ$. Un **ángulo obtuso** mide más de $90^\\circ$ y menos de $180^\\circ$.',
    'Las esquinas de un libro forman siempre ángulos rectos de $90^\\circ$.',
    [{ exercise: '¿Cómo se llama un ángulo menor que 90°?', hint: 'Ángulo puntiagudo.', answer: 'Ángulo agudo' }]
  ),
];

const u4Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u04-l01',
    '4.1',
    'Multiplicación de números de dos y tres cifras por una cifra',
    'Una fábrica de calzado en Santa Ana produce 234 pares de zapatos cada día. ¿Cuántos pares produce en 3 días de trabajo?',
    'Multiplicamos en vertical: 234 x 3. Unidades: 4 x 3 = 12 (escribo 2, llevo 1). Decenas: 3 x 3 = 9 + 1 = 10 (escribo 0, llevo 1). Centenas: 2 x 3 = 6 + 1 = 7. Total: 702 pares.',
    'Para multiplicar en vertical se multiplica la cifra del multiplicador por las unidades, luego por las decenas y finalmente por las centenas, sumando lo que se lleva: $$234 \\times 3 = 702$$',
    '$125 \\times 4 = 500$.',
    [{ exercise: 'Calcula: 312 x 3', hint: 'Sin llevar.', answer: '936' }]
  ),
];

const u5Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u05-l01',
    '5.1',
    'Triángulos y cálculo del perímetro',
    'Un terreno triangular en Cojutepeque mide 15 metros en un lado, 20 metros en otro y 25 metros en el tercero. ¿Cuánto mide su cerco perimetral?',
    'Sumamos la longitud de sus tres lados: 15 + 20 + 25 = 60 metros.',
    'El **perímetro** ($P$) de un polígono es la suma de las longitudes de todos sus lados: $$P = a + b + c$$',
    'El perímetro de un cuadrado de lado $8\\text{ cm}$ es $P = 4 \\times 8 = 32\\text{ cm}$.',
    [{ exercise: 'Calcula el perímetro de un triángulo equilátero de 6 cm de lado.', hint: '6 + 6 + 6.', answer: '18 cm' }]
  ),
];

const u6Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u06-l01',
    '6.1',
    'División con residuo y algoritmo de reparto',
    'Un agricultor tiene 23 elotes y los reparte equitativamente en 4 bolsas. ¿Cuántos elotes coloca en cada bolsa y cuántos sobran?',
    'Buscamos en la tabla del 4: 4 x 5 = 20 (caben 5 elotes). Sobran: 23 - 20 = 3 elotes. El residuo es 3 (menor que el divisor 4).',
    'En toda división, el dividendo ($D$), divisor ($d$), cociente ($q$) y residuo ($r$) cumplen: $$D = d \\times q + r \\quad \\text{con } r < d$$',
    'Al dividir $17 \\div 3$: $17 = 3 \\times 5 + 2$. El cociente es $5$ y el residuo es $2$.',
    [{ exercise: 'Divide: 29 entre 4', hint: 'Cociente y residuo.', answer: 'Cociente 7, residuo 1' }]
  ),
];

const u7Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u07-l01',
    '7.1',
    'El metro y el kilómetro',
    'La distancia entre dos escuelas rurales es de 3,000 metros. ¿A cuántos kilómetros equivale esa distancia?',
    'Sabemos que 1,000 metros equivalen a 1 kilómetro. Dividimos 3,000 entre 1,000: 3 km.',
    'El **kilómetro** ($\\text{km}$) es la unidad del Sistema Internacional para medir grandes distancias: $$1\\text{ km} = 1,000\\text{ m}$$',
    'Una caminata de $2\\text{ km}$ equivale a $2,000\\text{ m}$.',
    [{ exercise: '¿Cuántos metros hay en 5 km?', hint: '5 x 1000.', answer: '5,000 m' }]
  ),
];

const u8Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u08-l01',
    '8.1',
    'Concepto de fracción y partes de la unidad',
    'Una quesadilla salvadoreña se divide en 4 partes exactamente iguales. Si Juan se come 1 parte, ¿qué fracción representa lo que comió?',
    'La quesadilla es la unidad (1). Está dividida en 4 partes iguales (denominador). Juan tomó 1 parte (numerador). Comió 1/4.',
    'Una fracción representa una o varias partes iguales tomadas de la unidad: $$\\frac{a}{b} = \\frac{\\text{Numerador (partes tomadas)}}{\\text{Denominador (partes iguales totales)}}$$',
    'Si pintamos 3 partes de una figura dividida en 5, la fracción es $\\frac{3}{5}$.',
    [{ exercise: '¿Cuál es el numerador en la fracción 2/3?', hint: 'Número de arriba.', answer: '2' }]
  ),
];

const u9Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u09-l01',
    '9.1',
    'Monedas y gráficas de barras con escala',
    'En un gráfico de barras cada cuadro vertical representa 5 estudiantes. Si la barra de natación tiene 4 cuadros de alto, ¿cuántos estudiantes prefieren natación?',
    'Multiplicamos la altura de la barra por el valor de la escala: 4 x 5 = 20 estudiantes.',
    'En una gráfica de barras con escala, la frecuencia representada es: $$\\text{Frecuencia} = \\text{Número de divisiones} \\times \\text{Valor de cada división}$$',
    'Si la escala es de 10 en 10 y la barra mide 3 divisiones, representa $30$.',
    [{ exercise: 'Si cada cuadro vale 2 libros y una barra tiene 6 cuadros, ¿cuántos libros son?', hint: '6 x 2.', answer: '12 libros' }]
  ),
];

const u10Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u10-l01',
    '10.1',
    'Jerarquía de operaciones combinadas con paréntesis',
    '¿Cuál es el resultado correcto de la operación $10 + 3 \\times 4$?',
    'Por regla de jerarquía, la multiplicación se realiza antes que la suma: 3 x 4 = 12. Luego sumamos: 10 + 12 = 22.',
    'En las operaciones combinadas se efectúan primero las operaciones dentro de los paréntesis; después las multiplicaciones y divisiones; y finalmente las sumas y restas: $$\\text{Paréntesis} \\to \\times, \\div \\to +, -$$',
    '$(5 + 3) \\times 2 = 8 \\times 2 = 16$.',
    [{ exercise: 'Calcula: 20 - 4 x 3', hint: 'Multiplica 4 x 3 primero.', answer: '8' }]
  ),
];

export const GRADE_03_DATA: GradeCurriculumData = {
  id: '3-grado',
  name: '3° Grado',
  cycle: 'Primer Ciclo de Básica',
  cycleId: 'primer-ciclo',
  description: 'Currículo oficial ESMATE de tercer grado: números hasta 10,000, multiplicación vertical, división con residuo, fracciones y geometría.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de tercer grado compuesto por 10 unidades oficiales.',
      units: [
        createCurriculumUnit(
          'mined-mat-3g-u01',
          1,
          'Números hasta 10,000',
          '3-grado',
          1,
          'Lectura y escritura hasta 10,000, valor posicional, comparación en recta numérica y redondeo.',
          ['Escribe números de cuatro cifras', 'Aproxima números a millares', 'Compara cantidades'],
          u1Lessons3G,
          u1Questions3G,
          true
        ),
        createCurriculumUnit('mined-mat-3g-u02', 2, 'Suma y resta de números hasta de cuatro cifras', '3-grado', 1, 'Suma y resta vertical con múltiples llevadas y préstamos.', ['Opera números de hasta 4 cifras'], u2Lessons3G),
        createCurriculumUnit('mined-mat-3g-u03', 3, 'Ángulos, líneas, círculos y esferas', '3-grado', 1, 'Rectas perpendiculares, paralelas, ángulos rectos y círculo.', ['Clasifica ángulos y traza líneas'], u3Lessons3G),
        createCurriculumUnit('mined-mat-3g-u04', 4, 'Multiplicación', '3-grado', 1, 'Multiplicación de factores de 2 y 3 cifras por 1 cifra en vertical.', ['Multiplica en forma vertical'], u4Lessons3G),
        createCurriculumUnit('mined-mat-3g-u05', 5, 'Figuras planas y cuerpos geométricos', '3-grado', 1, 'Clasificación de triángulos y cálculo del perímetro.', ['Calcula perímetros'], u5Lessons3G),
        createCurriculumUnit('mined-mat-3g-u06', 6, 'División y comparación', '3-grado', 2, 'Sentido de la división con residuo: D = d*q + r.', ['Aplica el algoritmo de la división'], u6Lessons3G),
        createCurriculumUnit('mined-mat-3g-u07', 7, 'Aplicaciones matemáticas', '3-grado', 2, 'El metro, kilómetro, gramo, kilogramo y tiempo.', ['Convierte unidades del SI'], u7Lessons3G),
        createCurriculumUnit('mined-mat-3g-u08', 8, 'Fracciones', '3-grado', 2, 'Concepto de fracción, numerador, denominador y recta.', ['Representa fracciones propias'], u8Lessons3G),
        createCurriculumUnit('mined-mat-3g-u09', 9, 'Monedas y gráfica de barras', '3-grado', 2, 'Operaciones con dinero y gráficas con escala.', ['Interpreta gráficas de barras'], u9Lessons3G),
        createCurriculumUnit('mined-mat-3g-u10', 10, 'Operaciones combinadas', '3-grado', 2, 'Jerarquía con paréntesis y resolución combinada.', ['Aplica orden de operaciones'], u10Lessons3G),
      ],
    },
  ],
};
