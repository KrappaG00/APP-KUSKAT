import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 6° Grado - Unidad 1
// Operaciones con fracciones
// -----------------------------------------------------------------
const u1Archetypes6G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const a = (v % 5) + 1;
      const b = 6;
      const c = 2;
      const d = 5;
      const num = a * c;
      const den = b * d;
      return {
        statement: `¿Cuál es el resultado de la multiplicación de fracciones $\\frac{${a}}{${b}} \\times \\frac{${c}}{${d}}$?`,
        options: [
          `$\\frac{${num}}{${den}}$`,
          `$\\frac{${a + c}}{${b + d}}$`,
          `$\\frac{${a * d}}{${b * c}}$`,
          `$\\frac{${num + 1}}{${den}}$`,
        ],
        correctAnswer: 'A',
        explanation: `Para multiplicar fracciones se multiplican los numeradores entre sí y los denominadores entre sí: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d} = \\frac{${num}}{${den}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 7) + 2;
      const d = (v % 5) + 3;
      return {
        statement: `¿Cuál es el recíproco o inverso multiplicativo de la fracción $\\frac{${n}}{${d}}$?`,
        options: [
          `$-\\frac{${n}}{${d}}$`,
          `$\\frac{${d}}{${n}}$`,
          `$\\frac{${n + 1}}{${d + 1}}$`,
          `$1$`,
        ],
        correctAnswer: 'B',
        explanation: `El recíproco de una fracción $\\frac{a}{b}$ es $\\frac{b}{a}$, de tal forma que su producto sea igual a $1$: $\\frac{${n}}{${d}} \\times \\frac{${d}}{${n}} = 1$.`,
      };
    },
  },
  {
    generate: (v) => {
      const entero = (v % 6) + 2;
      const num = 3;
      const den = 4;
      const prodNum = entero * num;
      return {
        statement: `Al multiplicar el número natural $${entero}$ por la fracción $\\frac{${num}}{${den}}$, se obtiene:`,
        options: [
          `$\\frac{${num}}{${entero * den}}$`,
          `$\\frac{${entero + num}}{${den}}$`,
          `$\\frac{${prodNum}}{${den}}$`,
          `$\\frac{${prodNum}}{${entero * den}}$`,
        ],
        correctAnswer: 'C',
        explanation: `Al multiplicar un número entero por una fracción, se multiplica el entero por el numerador y se conserva el denominador: $n \\times \\frac{a}{b} = \\frac{n \\cdot a}{b} = \\frac{${prodNum}}{${den}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const frac = '12/18';
      return {
        statement: `Al simplificar la fracción $\\frac{12}{18}$ a su mínima expresión irreductible, ¿cuál es el resultado?`,
        options: ['$\\frac{6}{9}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$', '$\\frac{2}{3}$'],
        correctAnswer: 'D',
        explanation: `Dividiendo numerador y denominador entre su $\\text{MCD}(12, 18) = 6$: $\\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 4) + 1;
      return {
        statement: `Si para elaborar un pastel típico se necesitan $\\frac{${a}}{4}$ libras de harina, ¿cuántas libras se necesitarán para elaborar $3$ pasteles iguales?`,
        options: [
          `$\\frac{${a * 3}}{4}$ libras`,
          `$\\frac{${a}}{12}$ libras`,
          `$\\frac{${a + 3}}{4}$ libras`,
          `$${a * 3}$ libras`,
        ],
        correctAnswer: 'A',
        explanation: `Multiplicamos la cantidad por pastel por el número de pasteles: $3 \\times \\frac{${a}}{4} = \\frac{${a * 3}}{4}$ libras.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 8) + 2;
      return {
        statement: `¿Cuál es el recíproco del número entero positivo $${n}$?`,
        options: [
          `$-${n}$`,
          `$\\frac{1}{${n}}$`,
          `$\\frac{${n}}{10}$`,
          `$0$`,
        ],
        correctAnswer: 'B',
        explanation: `El entero $${n}$ se puede escribir como $\\frac{${n}}{1}$. Su inverso multiplicativo o recíproco es $\\frac{1}{${n}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const f1 = '2/5';
      const f2 = '5/2';
      return {
        statement: `¿Cuál es el producto de multiplicar dos números recíprocos entre sí, como $\\frac{2}{5} \\times \\frac{5}{2}$?`,
        options: ['0', '10', '1', '25/4'],
        correctAnswer: 'C',
        explanation: `Por definición de recíproco multiplicativo, el producto de cualquier número no nulo por su recíproco es siempre exactamente igual a $1$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = 2;
      const b = 3;
      const c = 3;
      const d = 4;
      return {
        statement: `Al calcular $\\frac{2}{3} \\times \\frac{3}{4}$, simplificando antes de multiplicar, el resultado final es:`,
        options: ['6/12', '1/3', '2/4', '1/2'],
        correctAnswer: 'D',
        explanation: `Simplificamos el 3 en el numerador y denominador, y el 2 con el 4: $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{1} \\times \\frac{1}{2} = \\frac{1}{2}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 4) + 1;
      return {
        statement: `Al convertir la fracción impropia $\\frac{${n * 3 + 1}}{3}$ a número mixto, se obtiene:`,
        options: [
          `$${n}\\,\\frac{1}{3}$`,
          `$${n + 1}\\,\\frac{1}{3}$`,
          `$${n}\\,\\frac{2}{3}$`,
          `$3\\,\\frac{${n}}{3}$`,
        ],
        correctAnswer: 'A',
        explanation: `Dividiendo $${n * 3 + 1} \\div 3$: cociente $${n}$, residuo $1$. Por tanto equivale a $${n}\\,\\frac{1}{3}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const val = (v % 5) + 2;
      return {
        statement: `¿Cuál de las siguientes fracciones es igual a $1$ entero completo?`,
        options: [
          `$\\frac{${val}}{${val + 1}}$`,
          `$\\frac{${val}}{${val}}$`,
          `$\\frac{${val + 1}}{${val}}$`,
          `$\\frac{1}{${val}}$`,
        ],
        correctAnswer: 'B',
        explanation: `Toda fracción cuyo numerador sea exactamente igual a su denominador (con denominador distinto de cero) representa la unidad completa: $\\frac{n}{n} = 1$.`,
      };
    },
  },
];

const u1Questions6G = generate50UnitQuestions(
  'mined-mat-6g-u01',
  '6-grado',
  '6G',
  1,
  'Operaciones con fracciones',
  'MINED ESMATE 6° Grado',
  u1Archetypes6G
);

const u1Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u01-l01',
    '1.1',
    'Multiplicación de fracción por fracción y simplificación previa',
    'Si un metro de alambre de púas pesa 3/5 de libra, ¿cuánto pesarán 2/3 de metro de dicho alambre?',
    'Multiplicamos la longitud por el peso unitario: (2/3) x (3/5). Antes de multiplicar en cruz o horizontal, observamos que el 3 se repite en numerador y denominador, cancelándose a 1: (2 x 1) / (1 x 5) = 2/5 de libra.',
    'Para multiplicar dos fracciones se multiplican numeradores entre sí y denominadores entre sí. Siempre es recomendable simplificar factores comunes antes de efectuar los productos: $$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$',
    '$\\frac{4}{7} \\times \\frac{14}{5} = \\frac{4 \\times 2}{1 \\times 5} = \\frac{8}{5} = 1\\,\\frac{3}{5}$.',
    [{ exercise: 'Calcula simplificando: (3/8) x (4/9)', hint: 'Simplifica 3 con 9 y 4 con 8.', answer: '1/6' }]
  ),
  createPscerLesson(
    'mined-mat-6g-u01-l02',
    '1.2',
    'El número recíproco y sus propiedades',
    '¿Por cuál número debemos multiplicar a 3/7 para que el resultado sea exactamente 1?',
    'Invertimos la fracción: cambiamos el numerador por el denominador, obteniendo 7/3. Al multiplicar: (3/7) x (7/3) = 21/21 = 1.',
    'Dos números son **recíprocos** si su producto es igual a $1$. Si el número es la fracción $\\frac{a}{b}$, su recíproco es $\\frac{b}{a}$: $$\\frac{a}{b} \\times \\frac{b}{a} = 1$$',
    'El recíproco del número entero $5$ es $\\frac{1}{5}$.',
    [{ exercise: 'Encuentra el recíproco de 4/9.', hint: 'Invierte numerador y denominador.', answer: '9/4' }]
  ),
];

const u2Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u02-l01',
    '2.1',
    'Cantidades variables y uso de símbolos en álgebra temprana',
    'En un microbús del transporte público de San Salvador el pasaje cuesta $0.25 por persona. ¿Cómo se expresa el dinero total recaudado para cualquier cantidad x de pasajeros?',
    'Si viaja 1 pasajero: 0.25 x 1. Si viajan 2: 0.25 x 2. Para x pasajeros, la relación es: 0.25 x x.',
    'Una **variable** es una letra o símbolo ($x, y$) que representa una cantidad que puede cambiar. La relación entre variables modela situaciones de la vida real.',
    'Si un cuaderno cuesta $x$ dólares, tres cuadernos cuestan $3x$.',
    [{ exercise: 'Expresa el costo de n pupusas si cada una vale $0.80.', hint: '0.80 por n.', answer: '0.80n' }]
  ),
];

const u3Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u03-l01',
    '3.1',
    'División de fracciones como multiplicación por el recíproco',
    'Se tienen 3/4 de galón de jugo de naranja y se van a servir en vasitos de 1/8 de galón. ¿Cuántos vasitos se pueden llenar?',
    'Dividimos 3/4 entre 1/8. Aplicamos la regla: dividir entre una fracción equivale a multiplicar por su recíproco (8/1): (3/4) x (8/1) = 24/4 = 6 vasitos completos.',
    'Para dividir dos fracciones se multiplica el dividendo por la fracción recíproca del divisor: $$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$',
    '$\\frac{2}{5} \\div \\frac{3}{7} = \\frac{2}{5} \\times \\frac{7}{3} = \\frac{14}{15}$.',
    [{ exercise: 'Divide: (5/6) entre (1/3)', hint: 'Multiplica por 3/1.', answer: '5/2 = 2 1/2' }]
  ),
];

const u4Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u04-l01',
    '4.1',
    'Razones, porcentajes y cálculo del IVA (13%) en El Salvador',
    'Un televisor tiene un precio sin IVA de $200. En El Salvador la tasa del Impuesto al Valor Agregado (IVA) es del 13%. ¿Cuánto se paga de IVA y cuál es el precio final?',
    'Calculamos el 13% de 200: 200 x 0.13 = $26 de IVA. Sumamos al precio base: 200 + 26 = $226 precio final.',
    'El **porcentaje** representa una razón referida a $100$. El cálculo del IVA en El Salvador se realiza mediante: $$\\text{IVA} = \\text{Precio base} \\times 0.13, \\qquad \\text{Total} = \\text{Precio base} \\times 1.13$$',
    'El $25\\%$ de $\$80$ es $80 \\times 0.25 = \\$20$.',
    [{ exercise: 'Calcula el 13% de IVA de un producto que cuesta $100.', hint: '100 x 0.13.', answer: '$13' }]
  ),
];

const u5Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u05-l01',
    '5.1',
    'Proporcionalidad directa e inversa',
    'Si 3 paquetes de café cuestan $15, ¿cuánto costarán 6 paquetes al mismo precio unitario?',
    'El número de paquetes se duplicó (3 x 2 = 6), por lo que el costo también se duplica: 15 x 2 = $30. El cociente constante k = 15/3 = $5/paquete.',
    'Dos cantidades son **directamente proporcionales** si al multiplicar una por $n$, la otra se multiplica por $n$ ($y = kx$). Son **inversamente proporcionales** si al multiplicar una por $n$, la otra se divide entre $n$ ($y = \\frac{k}{x}$).',
    'En proporcionalidad directa, la gráfica en el plano cartesiano es una línea recta que pasa por el origen $(0, 0)$.',
    [{ exercise: 'Si 2 lápices valen $1, ¿cuánto valen 8 lápices?', hint: 'El cuádruple.', answer: '$4' }]
  ),
];

const u6Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u06-l01',
    '6.1',
    'Longitud de la circunferencia y área del círculo',
    'Una glorieta circular en el parque Cuscatlán tiene un radio de 5 metros. ¿Cuál es la longitud de su cerco y cuál es su superficie interior? (Usa pi ≈ 3.1416)',
    'Longitud: C = 2 x pi x r = 2 x 3.1416 x 5 = 31.416 m. Área: A = pi x r² = 3.1416 x 5² = 3.1416 x 25 = 78.54 m².',
    'Fórmulas oficiales del círculo y la circunferencia: $$C = 2\\pi r = \\pi d, \\qquad A = \\pi r^2$$ donde $\\pi \\approx 3.1416$ es la razón constante entre el perímetro y el diámetro.',
    'Un círculo con radio $r = 10\\text{ cm}$ tiene área $A = 3.1416 \\times 100 = 314.16\\text{ cm}^2$.',
    [{ exercise: 'Calcula la longitud de una circunferencia de diámetro d = 10 cm.', hint: 'pi x d.', answer: '31.416 cm' }]
  ),
];

const u7Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u07-l01',
    '7.1',
    'Medidas de tendencia central: media aritmética, moda y mediana',
    'Las notas de un alumno en 5 tareas de matemática son: 8, 9, 7, 9 y 10. ¿Cuál es su promedio (media), la moda y la mediana?',
    'Media: (8 + 9 + 7 + 9 + 10) / 5 = 43 / 5 = 8.6. Moda: el valor que más se repite es 9. Mediana: ordenamos (7, 8, 9, 9, 10); el dato central es 9.',
    'La **media aritmética** es el promedio: $\\bar{x} = \\frac{\\sum x_i}{n}$. La **moda** es el dato con mayor frecuencia. La **mediana** es el valor que ocupa la posición central al ordenar los datos.',
    'En los datos $\\{4, 4, 6, 8\\}$: la moda es $4$ y la mediana es $\\frac{4+6}{2} = 5$.',
    [{ exercise: 'Calcula la media de: 6, 8, 10', hint: '(6+8+10)/3.', answer: '8' }]
  ),
];

const u8Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u08-l01',
    '8.1',
    'Volumen de cubos y prismas rectangulares',
    'Una cisterna rectangular tiene 4 metros de largo, 3 metros de ancho y 2 metros de profundidad. ¿Cuál es su volumen en metros cúbicos?',
    'Multiplicamos las tres dimensiones: V = 4 m x 3 m x 2 m = 24 m³.',
    'El **volumen** de un prisma rectangular recto es el producto del área de su base por la altura: $$V = A_b \\times h = l \\times a \\times h$$ Para un cubo de arista $a$: $V = a^3$.',
    'El volumen de un cubo de $3\\text{ cm}$ de arista es $V = 3^3 = 27\\text{ cm}^3$.',
    [{ exercise: 'Calcula el volumen de un prisma de 5 cm x 2 cm x 3 cm.', hint: '5 x 2 x 3.', answer: '30 cm³' }]
  ),
];

const u9Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u09-l01',
    '9.1',
    'Conversión de unidades tradicionales al Sistema Internacional',
    'En una escritura de propiedad rural en Chalatenango se indica que una milpa mide 1 manzana. ¿A cuántas varas cuadradas equivale?',
    'Según la normativa del Centro Nacional de Registros (CNR) y el sistema agrario salvadoreño, 1 manzana equivale a 10,000 varas cuadradas (aproximadamente 7,000 m²).',
    'Equivalencias agrarias tradicionales en El Salvador: $$1\\text{ manzana (mz)} = 10,000\\text{ v}^2 \\approx 6,988.96\\text{ m}^2, \\qquad 1\\text{ vara (v)} \\approx 0.836\\text{ m}$$',
    'Media manzana equivale a $5,000\\text{ varas cuadradas}$.',
    [{ exercise: '¿Cuántas varas cuadradas hay en 2 manzanas?', hint: '2 x 10,000.', answer: '20,000 varas cuadradas' }]
  ),
];

const u10Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u10-l01',
    '10.1',
    'Simetría axial y simetría puntual',
    'Al doblar por la mitad una hoja con una mariposa dibujada, ambas mitades coinciden exactamente. ¿Qué tipo de simetría posee?',
    'Posee simetría axial respecto a la línea del doblez (eje de simetría). Cada punto tiene su correspondiente a la misma distancia perpendicular del eje.',
    'En la **simetría axial**, la recta que divide la figura en dos partes superponibles se llama **eje de simetría**. En la **simetría puntual de $180^\\circ$**, cada punto se refleja a través de un punto central común.',
    'Un rectángulo tiene dos ejes de simetría axial.',
    [{ exercise: '¿Cuántos ejes de simetría tiene un cuadrado?', hint: 'Horizontales, verticales y diagonales.', answer: '4 ejes de simetría' }]
  ),
];

const u11Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u11-l01',
    '11.1',
    'Diagramas de árbol y probabilidad clásica',
    'Si lanzamos una moneda al aire (cara o corona), ¿cuál es la probabilidad de que caiga cara?',
    'Hay 2 resultados posibles equiprobables: {cara, corona}. El evento favorable "cara" es 1 caso. Probabilidad: 1/2 = 0.50 = 50%.',
    'La regla de **Laplace** para la probabilidad clásica establece: $$P(A) = \\frac{\\text{Casos favorables a } A}{\\text{Casos posibles totales}}$$ con $0 \\le P(A) \\le 1$.',
    'Al lanzar un dado de 6 caras, la probabilidad de sacar un número par $\\{2, 4, 6\\}$ es $P = \\frac{3}{6} = \\frac{1}{2}$.',
    [{ exercise: '¿Cuál es la probabilidad de sacar un as de una baraja si hay 4 ases entre 52 cartas?', hint: '4/52.', answer: '1/13' }]
  ),
];

export const GRADE_06_DATA: GradeCurriculumData = {
  id: '6-grado',
  name: '6° Grado',
  cycle: 'Segundo Ciclo de Básica',
  cycleId: 'segundo-ciclo',
  description: 'Currículo oficial ESMATE de sexto grado: multiplicación/división de fracciones, razones y porcentajes (IVA), proporcionalidad, circunferencia y probabilidad.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de sexto grado estructurado en 11 unidades oficiales.',
      units: [
        createCurriculumUnit(
          'mined-mat-6g-u01',
          1,
          'Operaciones con fracciones',
          '6-grado',
          1,
          'Multiplicación de fracciones, simplificación previa y números recíprocos.',
          ['Multiplica fracciones irreducibles', 'Identifica el recíproco', 'Resuelve problemas cotidianos'],
          u1Lessons6G,
          u1Questions6G,
          true
        ),
        createCurriculumUnit('mined-mat-6g-u02', 2, 'Cantidades variables y números romanos', '6-grado', 1, 'Expresiones algebraicas elementales y numeración romana.', ['Usa variables en relaciones'], u2Lessons6G),
        createCurriculumUnit('mined-mat-6g-u03', 3, 'División de fracciones y operaciones combinadas', '6-grado', 1, 'División por recíproco y operaciones mixtas.', ['Divide fracciones y simplifica'], u3Lessons6G),
        createCurriculumUnit('mined-mat-6g-u04', 4, 'Razones y porcentajes', '6-grado', 1, 'Cálculo de razones, porcentaje y tasa del IVA (13%).', ['Calcula porcentajes e IVA'], u4Lessons6G),
        createCurriculumUnit('mined-mat-6g-u05', 5, 'Proporcionalidad', '6-grado', 1, 'Proporcionalidad directa (y = kx) e inversa en gráficas y tablas.', ['Modela relaciones de proporcionalidad'], u5Lessons6G),
        createCurriculumUnit('mined-mat-6g-u06', 6, 'Longitud de una circunferencia y área del círculo', '6-grado', 2, 'El número pi, C = 2*pi*r y A = pi*r².', ['Calcula área del círculo'], u6Lessons6G),
        createCurriculumUnit('mined-mat-6g-u07', 7, 'Análisis de datos', '6-grado', 2, 'Media aritmética, moda y mediana para datos no agrupados.', ['Calcula medidas de tendencia central'], u7Lessons6G),
        createCurriculumUnit('mined-mat-6g-u08', 8, 'Volumen de cubos y prismas rectangulares', '6-grado', 2, 'Unidades cm³ y m³, fórmula V = Ab * h.', ['Calcula volúmenes geométricos'], u8Lessons6G),
        createCurriculumUnit('mined-mat-6g-u09', 9, 'Conversión de otros sistemas al sistema internacional', '6-grado', 2, 'Medidas agrarias tradicionales: varas cuadradas y manzanas.', ['Convierte unidades de superficie'], u9Lessons6G),
        createCurriculumUnit('mined-mat-6g-u10', 10, 'Traslaciones, simetrías y rotaciones', '6-grado', 2, 'Simetría axial, simetría puntual y traslaciones.', ['Distingue ejes de simetría'], u10Lessons6G),
        createCurriculumUnit('mined-mat-6g-u11', 11, 'Formas de contar y ordenar objetos', '6-grado', 2, 'Diagramas de árbol, permutaciones y probabilidad de Laplace.', ['Calcula probabilidad clásica'], u11Lessons6G),
      ],
    },
  ],
};
