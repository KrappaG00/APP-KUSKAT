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
    'En un taller de artesanías en Ilobasco, un artesano utiliza tiras de alambre galvanizado para elaborar armazones decorativos. Se sabe que un metro de alambre especial pesa exactamente cuatro quintos (4/5) de libra. El artesano necesita utilizar una sección que mide dos tercios (2/3) de metro para armar una figura ornamental. ¿Cuánto pesará dicha sección de alambre, cuál es el algoritmo formal para multiplicar fracciones y por qué es fundamental simplificar factores comunes antes de realizar las multiplicaciones en numeradores y denominadores?',
    'Para calcular el peso de la sección de alambre multiplicamos la fracción de longitud por el peso unitario por metro: dos tercios (2/3) multiplicado por cuatro quintos (4/5). El algoritmo para multiplicar dos fracciones establece que se multiplican numeradores entre sí y denominadores entre sí: dos por cuatro es igual a ocho en el numerador, y tres por cinco es igual a quince en el denominador, obteniendo ocho quinceavos (8/15) de libra. Como ocho y quince no comparten ningún divisor común mayor que uno, la fracción es irreducible. Cuando multiplicamos fracciones donde existen factores comunes cruzados, como en cuatro séptimos (4/7) por catorce quintos (14/5), simplificamos antes de operar: observamos que 14 en el numerador y 7 en el denominador tienen a 7 como factor común; dividimos 14 entre 7 (queda 2) y 7 entre 7 (queda 1). Luego multiplicamos los términos simplificados: cuatro por dos es ocho, y uno por cinco es cinco, dando ocho quintos (8/5), equivalente al número mixto un entero tres quintos (1 3/5).',
    'Para **multiplicar dos o más fracciones**, se multiplican los numeradores entre sí para obtener el numerador del producto, y se multiplican los denominadores entre sí para obtener el denominador del producto: $$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d} \\qquad (b, d \\neq 0)$$ **Estrategia de simplificación previa**: antes de efectuar los productos, es indispensable simplificar cualquier factor común entre numeradores y denominadores. Esto agiliza el cálculo y garantiza que el resultado quede directamente como fracción irreducible o número mixto.',
    'Al multiplicar (2/3) x (4/5) obtenemos 8/15 de libra; y (4/7) x (14/5) = (4 x 2) / (1 x 5) = 8/5 = 1 3/5.',
    [
      { exercise: 'Calcula aplicando simplificación previa: (5/12) x (6/25)', hint: 'Simplifica 5 con 25 y 6 con 12 antes de multiplicar.', answer: '1/10' },
      { exercise: 'Si una botella contiene 3/4 de litro de jugo, ¿cuántos litros hay en 8 botellas iguales?', hint: 'Multiplica 8 x 3/4 simplificando 8 con 4.', answer: '6 litros' }
    ],
    [
      'Ejemplo 1 (Multiplicación directa de fracciones irreducibles): Multiplicar 3/5 por 2/7. Paso 1: Multiplicamos numeradores: 3 x 2 = 6. Paso 2: Multiplicamos denominadores: 5 x 7 = 35. Paso 3: Verificamos si se puede simplificar; 6 y 35 son primos entre sí. Solución: 3/5 x 2/7 = 6/35.',
      'Ejemplo 2 (Simplificación cruzada previa): Calcular (3/8) x (4/9) simplificando antes de multiplicar. Paso 1: Simplificamos 4 y 8 dividiendo entre 4 (queda 1 y 2). Paso 2: Simplificamos 3 y 9 dividiendo entre 3 (queda 1 y 3). Paso 3: Multiplicamos los términos reducidos: (1 x 1) / (2 x 3) = 1/6. Solución: (3/8) x (4/9) = 1/6.',
      'Ejemplo 3 (Multiplicación de número natural por fracción): Calcular 6 multiplicado por 3/4. Paso 1: Escribimos el natural 6 como 6/1: (6/1) x (3/4). Paso 2: Simplificamos 6 y 4 entre 2 (queda 3 y 2). Paso 3: Multiplicamos: (3 x 3) / (1 x 2) = 9/2 = 4 1/2. Solución: 6 x (3/4) = 9/2 = 4 enteros y 1/2.',
      'Ejemplo 4 (Multiplicación con números mixtos): Resolver 1 2/3 x 2 1/5. Paso 1: Convertimos los mixtos a fracciones impropias: 1 2/3 = 5/3 y 2 1/5 = 11/5. Paso 2: Planteamos (5/3) x (11/5) y simplificamos los 5 a 1. Paso 3: Multiplicamos: (1 x 11) / (3 x 1) = 11/3 = 3 2/3. Solución: 1 2/3 x 2 1/5 = 3 2/3.',
      'Ejemplo 5 (Multiplicación de tres fracciones sucesivas): Calcular (2/3) x (3/4) x (5/6). Paso 1: Cancelamos los 3 en numerador y denominador. Paso 2: Simplificamos 2 con 4 (queda 1 y 2). Paso 3: Multiplicamos los factores restantes: (1 x 1 x 5) / (1 x 2 x 6) = 5/12. Solución: El producto final es 5/12.'
    ]
  ),
  createPscerLesson(
    'mined-mat-6g-u01-l02',
    '1.2',
    'El número recíproco y sus propiedades algebraicas',
    'En una clase de matemática en Sonsonate, la profesora plantea el siguiente reto a sus estudiantes: ¿por cuál número se debe multiplicar a tres séptimos (3/7) para que el producto sea exactamente igual a uno? Los estudiantes prueban con números enteros y no lo logran, hasta que descubren que al invertir la posición del numerador y del denominador obtienen siete tercios (7/3). ¿Cómo se define formalmente el concepto de número recíproco, qué condiciones debe cumplir y cómo se encuentra el recíproco de un número natural, de una fracción propia o impropia y de un número mixto?',
    'Para dar respuesta al reto multiplicamos tres séptimos (3/7) por siete tercios (7/3): en el numerador multiplicamos tres por siete (21) y en el denominador multiplicamos siete por tres (21); al dividir 21 entre 21 el resultado es exactamente 1. Dos números distintos de cero cuyo producto es igual a 1 se denominan recíprocos o inversos multiplicativos. Para encontrar el recíproco de cualquier fracción a/b con a y b distintos de cero, basta con intercambiar el numerador con el denominador, obteniendo b/a. Para encontrar el recíproco de un número natural n, consideramos que n equivale a n/1, por lo que su recíproco es 1/n; por ejemplo, el recíproco de 5 es un quinto (1/5) porque 5 por 1/5 es igual a 1. El número 1 es su propio recíproco (1 por 1 es 1), mientras que el número 0 no tiene recíproco porque la división entre cero no está definida en la matemática. Para hallar el recíproco de un número mixto, primero se convierte obligatoriamente a fracción impropia y luego se invierten sus términos.',
    'Dos números son **recíprocos** o inversos multiplicativos entre sí si su producto es estrictamente igual a $1$: $$\\frac{a}{b} \\times \\frac{b}{a} = 1 \\qquad (a, b \\neq 0)$$ Propiedades fundamentales: el recíproco de la fracción $\\frac{a}{b}$ es $\\frac{b}{a}$; el recíproco del número natural $n$ es $\\frac{1}{n}$; el número $1$ es su propio recíproco; y el número $0$ carece de recíproco. El recíproco es la base algebraica que transforma la división de fracciones en multiplicación.',
    'El recíproco de 3/7 es 7/3 (ya que 3/7 x 7/3 = 1); el recíproco de 5 es 1/5; y el de 2 1/2 es 2/5.',
    [
      { exercise: 'Encuentra el recíproco de 5/11 y comprueba tu respuesta.', hint: 'Invierte los términos y verifica que el producto dé 1.', answer: '11/5 (o 2 1/5)' },
      { exercise: 'Determina el recíproco de 1 1/2.', hint: 'Convierte primero a 3/2 e invierte.', answer: '2/3' }
    ],
    [
      'Ejemplo 1 (Recíproco de una fracción propia): Encontrar el recíproco de 4/9 y verificar el producto. Paso 1: Invertimos numerador y denominador: el recíproco es 9/4. Paso 2: Verificamos multiplicando: (4/9) x (9/4) = 36/36 = 1. Solución: El recíproco de 4/9 es 9/4 = 2 1/4.',
      'Ejemplo 2 (Recíproco de un número entero): Hallar el número recíproco de 8. Paso 1: Escribimos 8 en forma fraccionaria como 8/1. Paso 2: Invertimos los términos para obtener 1/8. Paso 3: Comprobamos: 8 x (1/8) = 8/8 = 1. Solución: El recíproco de 8 es 1/8.',
      'Ejemplo 3 (Recíproco de una fracción unitaria): Determinar el recíproco de 1/6. Paso 1: Invertimos los términos: 6/1 = 6. Paso 2: Comprobamos: (1/6) x 6 = 6/6 = 1. Solución: El recíproco de 1/6 es el número natural 6.',
      'Ejemplo 4 (Recíproco de un número mixto): Encontrar el recíproco de 2 3/5. Paso 1: Convertimos el número mixto a fracción impropia: 2 x 5 + 3 = 13, obteniendo 13/5. Paso 2: Invertimos la fracción impropia obtenida: 5/13. Paso 3: Verificamos: (13/5) x (5/13) = 1. Solución: El recíproco de 2 3/5 es 5/13.',
      'Ejemplo 5 (Recíproco de un número decimal): Hallar el recíproco de 0.25. Paso 1: Escribimos el decimal en forma de fracción irreducible: 0.25 = 25/100 = 1/4. Paso 2: Invertimos la fracción 1/4, obteniendo 4/1 = 4. Paso 3: Comprobamos: 0.25 x 4 = 1. Solución: El recíproco de 0.25 es 4.'
    ]
  ),
];

const u2Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u02-l01',
    '2.1',
    'Cantidades variables, expresiones algebraicas y numeración romana',
    'En una ruta del transporte colectivo en San Salvador, la tarifa autorizada de pasaje es de veinticinco centavos de dólar (0.25 dólares) por usuario. El conductor desea una expresión matemática que le permita calcular de forma rápida la cantidad total de dinero recolectado para cualquier número x de pasajeros que aborden la unidad. Al mismo tiempo, en un monumento histórico de la capital se observa una placa conmemorativa con el año grabado en números romanos: MDCCCXXI. ¿Cómo se utilizan las letras y símbolos para representar cantidades variables en expresiones matemáticas y cuáles son las reglas oficiales del sistema de numeración romana?',
    'Para resolver la primera situación analizamos el patrón multiplicativo: si viaja 1 pasajero se recaudan 0.25 por 1; si viajan 2 se recaudan 0.25 por 2; si viajan 3 se recaudan 0.25 por 3. Cuando la cantidad de pasajeros cambia continuamente, utilizamos una letra minúscula como variable x para representarla. Así, la recaudación total en dólares se expresa algebraicamente como 0.25 por x (o 0.25x). Esta expresión permite calcular el valor numérico sustituyendo x por cualquier número natural. Para la numeración romana analizamos los símbolos fundamentales: M vale 1,000; D vale 500; C vale 100; L vale 50; X vale 10; V vale 5; e I vale 1. En MDCCCXXI aplicamos la regla de la suma: M (1,000) más D (500) más tres C (300) más dos X (20) más I (1), lo que suma exactamente 1821, año de la Independencia patria salvadoreña.',
    'Una **variable** es un símbolo o letra (como $x, y, n$) que representa una cantidad cuyo valor puede cambiar o ser desconocido. Una **expresión algebraica** combina variables, números y signos: $$\\text{Costo total} = c \\cdot x$$ El **sistema de numeración romana** utiliza 7 letras: $\\text{I} = 1, \\text{V} = 5, \\text{X} = 10, \\text{L} = 50, \\text{C} = 100, \\text{D} = 500, \\text{M} = 1000$. Reglas: letras menores a la derecha se suman; I, X, C a la izquierda de su orden superior inmediato se restan; y no se repiten letras más de 3 veces seguidas (V, L, D nunca se repiten).',
    'Para x pasajeros a 0.25 dólares el total es 0.25x; el año 1821 se escribe MDCCCXXI y 1994 se escribe MCMXCIV.',
    [
      { exercise: 'Escribe la expresión algebraica para el costo total de x cuadernos a 1.25 dólares cada uno.', hint: 'Multiplica el precio unitario por la variable x.', answer: '1.25x' },
      { exercise: 'Convierte el número romano MCMXCIV al sistema decimal.', hint: 'M=1000, CM=900, XC=90, IV=4.', answer: '1994' }
    ],
    [
      'Ejemplo 1 (Traducción de lenguaje cotidiano a expresión variable): Expresar algebraicamente el costo de comprar n pupusas si cada una cuesta 0.80 dólares. Paso 1: Identificamos el precio unitario constante (0.80 dólares) y la cantidad variable de pupusas (n). Paso 2: Multiplicamos el valor unitario por la cantidad. Solución: La expresión algebraica es 0.80n (u 0.80 x n).',
      'Ejemplo 2 (Valor numérico de una expresión variable): Si la expresión del perímetro de un triángulo equilátero es 3l, calcular el perímetro cuando el lado l = 8 cm. Paso 1: Sustituimos el valor l = 8 en la expresión 3l. Paso 2: Multiplicamos: 3 x 8 = 24. Solución: El perímetro es de 24 centímetros.',
      'Ejemplo 3 (Lectura de número romano con regla de resta): Convertir el número romano XIV a sistema decimal. Paso 1: X vale 10. Paso 2: En IV la I está antes de V, aplicamos resta: 5 - 1 = 4. Paso 3: Sumamos los valores: 10 + 4 = 14. Solución: XIV = 14.',
      'Ejemplo 4 (Conversión de decimal a numeración romana): Escribir el número 449 en números romanos. Paso 1: Descomponemos: 400 + 40 + 9. Paso 2: 400 se escribe CD (500 - 100); 40 se escribe XL (50 - 10); 9 se escribe IX (10 - 1). Paso 3: Unimos los símbolos: CDXLIX. Solución: 449 = CDXLIX.',
      'Ejemplo 5 (Regla de repetición en numeración romana): Identificar por qué la escritura VIIII es incorrecta y escribir la forma válida para 9. Paso 1: La regla prohíbe repetir la letra I cuatro veces consecutivas. Paso 2: Se escribe restando 1 a 10: IX. Solución: La forma correcta es IX.'
    ]
  ),
];

const u3Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u03-l01',
    '3.1',
    'División de fracciones como multiplicación por el recíproco y operaciones combinadas',
    'En la cafetería de un centro escolar en Santa Ana se preparan tres cuartos (3/4) de galón de refresco natural de horchata. Para servirlo a los estudiantes se utilizan vasitos plásticos cuya capacidad es exactamente de un octavo (1/8) de galón cada uno. La administradora necesita saber con precisión cuántos vasitos completos se pueden llenar con el refresco disponible. Además, debe calcular el resultado de una operación combinada que incluye fracciones y números decimales: tres cuartos entre un medio más 1.5 multiplicado por dos quintos. ¿Cuál es el algoritmo formal para dividir fracciones y cuál es el orden jerárquico estricto en operaciones combinadas?',
    'Para saber cuántos vasitos se pueden llenar dividimos la cantidad total de refresco entre la capacidad de cada vaso: tres cuartos (3/4) dividido entre un octavo (1/8). La regla formal de la división de fracciones establece que dividir entre una fracción equivale exactamente a multiplicar el dividendo por la fracción recíproca del divisor. El recíproco de un octavo (1/8) es ocho sobre uno (8/1). Planteamos la multiplicación: tres cuartos por ocho sobre uno. Antes de operar simplificamos: el 8 en el numerador y el 4 en el denominador se simplifican entre 4, quedando 2 y 1. Multiplicamos los términos resultantes: tres por dos es seis, y uno por uno es uno, obteniendo exactamente 6 vasitos completos. Para resolver la operación combinada convertimos primero el decimal 1.5 a fracción (3/2). Luego respetamos la jerarquía: primero resolvemos divisiones y multiplicaciones de izquierda a derecha; (3/4) entre (1/2) es (3/4) por (2/1) igual a 3/2; y (3/2) por (2/5) es 3/5. Finalmente sumamos 3/2 más 3/5 homogeneizando a décimos: 15/10 más 6/10 es 21/10 = 2 enteros 1/10.',
    'Para **dividir una fracción entre otra**, se multiplica el dividendo por el número recíproco del divisor: $$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c} \\qquad (b, c, d \\neq 0)$$ En **operaciones combinadas** con fracciones, decimales y signos de agrupación, se sigue la jerarquía estricta: primero operaciones entre paréntesis; segundo multiplicaciones y divisiones de izquierda a derecha; y tercero adiciones y sustracciones de izquierda a derecha.',
    'Al dividir (3/4) entre (1/8) multiplicamos (3/4) x (8/1) = 6 vasos; y (2/5) / (3/7) = (2/5) x (7/3) = 14/15.',
    [
      { exercise: 'Divide: (7/9) entre (14/3) aplicando simplificación.', hint: 'Multiplica por 3/14 y simplifica 7 con 14 y 3 con 9.', answer: '1/6' },
      { exercise: 'Calcula: 2/3 + 1/2 x 4/5 respetando la jerarquía.', hint: 'Resuelve primero la multiplicación 1/2 x 4/5 = 2/5.', answer: '2/3 + 2/5 = 16/15 = 1 1/15' }
    ],
    [
      'Ejemplo 1 (División directa aplicando recíproco): Dividir 2/5 entre 3/7. Paso 1: Hallamos el recíproco del divisor 3/7, que es 7/3. Paso 2: Multiplicamos el dividendo por el recíproco: (2/5) x (7/3). Paso 3: Multiplicamos numeradores y denominadores: (2 x 7) / (5 x 3) = 14/15. Solución: 2/5 / 3/7 = 14/15.',
      'Ejemplo 2 (División con simplificación previa): Calcular (5/6) dividido entre (1/3). Paso 1: Invertimos el divisor: 1/3 pasa a ser 3/1. Paso 2: Planteamos (5/6) x (3/1). Paso 3: Simplificamos 3 y 6 entre 3 (queda 1 y 2). Paso 4: Multiplicamos: (5 x 1) / (2 x 1) = 5/2 = 2 1/2. Solución: (5/6) / (1/3) = 2 1/2.',
      'Ejemplo 3 (División de un natural entre una fracción): Dividir 4 entre 2/3. Paso 1: Escribimos 4 como 4/1 y multiplicamos por el recíproco de 2/3 (3/2): (4/1) x (3/2). Paso 2: Simplificamos 4 y 2 entre 2 (queda 2 y 1). Paso 3: Multiplicamos: 2 x 3 = 6. Solución: 4 / (2/3) = 6.',
      'Ejemplo 4 (División de una fracción entre un número natural): Resolver (3/7) dividido entre 6. Paso 1: El recíproco del número natural 6 es 1/6. Paso 2: Multiplicamos: (3/7) x (1/6). Paso 3: Simplificamos 3 y 6 entre 3 (queda 1 y 2). Paso 4: (1 x 1) / (7 x 2) = 1/14. Solución: (3/7) / 6 = 1/14.',
      'Ejemplo 5 (Operación combinada con paréntesis): Resolver (1/2 + 1/4) / (3/8). Paso 1: Operamos el paréntesis sumando: 1/2 + 1/4 = 2/4 + 1/4 = 3/4. Paso 2: Dividimos 3/4 entre 3/8 multiplicando por el recíproco: (3/4) x (8/3). Paso 3: Cancelamos los 3 y simplificamos 8 con 4: 8 / 4 = 2. Solución: El resultado final es 2.'
    ]
  ),
];

const u4Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u04-l01',
    '4.1',
    'Razones, porcentajes, aumentos, descuentos y cálculo del IVA (13%) en El Salvador',
    'En un almacén comercial en San Salvador se exhibe un televisor inteligente con un precio base de doscientos dólares (200 dólares) sin impuestos. La legislación salvadoreña establece que toda venta de bienes y servicios está gravada con el Impuesto a la Transferencia de Bienes Muebles y a la Prestación de Servicios, conocido comúnmente como IVA, cuya tasa fija es del 13%. Además, por temporada de promociones el almacén ofrece un descuento especial del 15% sobre el precio base antes de gravar el impuesto. ¿Cuál es el valor de la razón porcentual, cuánto dinero se descuenta, cuánto se paga de IVA y cuál es el precio final a cancelar en caja?',
    'Para resolver este problema aplicamos la teoría de razones y porcentajes. Una razón compara dos cantidades por cociente: a es a b (a/b), y el porcentaje expresa cuántas partes se toman de cada cien unidades. Para calcular el descuento del 15% sobre el precio base de 200 dólares, multiplicamos 200 por el valor decimal de la razón (15 dividido entre 100 es 0.15): 200 por 0.15 es igual a 30 dólares de descuento. Restamos el descuento del precio original: 200 menos 30 nos da un precio rebajado de 170 dólares. Sobre este nuevo precio base aplicamos la tasa del IVA del 13% en El Salvador: multiplicamos 170 por 0.13, lo que resulta en 22.10 dólares de impuesto fiscal. Finalmente, sumamos el precio rebajado más el impuesto del IVA: 170 más 22.10 da un total a pagar en caja de 192.10 dólares. Si no hubiera descuento, el IVA sobre 200 dólares sería 26 dólares (200 por 0.13) y el precio total ascendería a 226 dólares.',
    'Una **razón** $a : b$ compara dos magnitudes homogéneas o heterogéneas mediante su cociente; su resultado numérico exacto es el **valor de la razón** $\\frac{a}{b}$. El **porcentaje o tanto por ciento** ($\\text{\\%}$) es una razón estandarizada con base cien, lo que permite comparar proporciones de manera universal: $$\\text{Porcentaje} = \\text{Valor de la razón} \\times 100\\%, \\qquad \\text{Cantidad} = \\text{Total} \\times \\frac{\\%}{100}$$ En la República de El Salvador, el **Impuesto al Valor Agregado (IVA)** está regulado por el Ministerio de Hacienda con una tasa oficial fija del $13\\%$ ($0.13$). Las fórmulas de cálculo aplicadas en el comercio formal salvadoreño son: $$\\text{IVA} = \\text{Precio base} \\times 0.13, \\qquad \\text{Total a pagar con IVA} = \\text{Precio base} \\times 1.13$$ Para un descuento porcentual del $d\\%$, el precio rebajado se calcula mediante $\\text{Precio con descuento} = \\text{Precio base} \\times (1 - d/100)$.',
    'El 13% de IVA de 200 dólares es 26 dólares; el 25% de 80 dólares es 20 dólares; con un descuento de 15% sobre 200 dólares se paga 170 dólares.',
    [
      { exercise: 'Calcula el 13% de IVA correspondiente a una factura comercial con precio base de 150 dólares.', hint: 'Multiplica el precio base 150 por la tasa decimal 0.13.', answer: '19.50 dólares de impuesto IVA' },
      { exercise: 'Un par de zapatos tiene un precio de lista de 50 dólares y cuenta con un 20% de descuento en almacén. ¿Cuánto dinero se cancela en caja?', hint: 'Calcula el 20% de 50 (10 dólares) y resta esa rebaja del precio original.', answer: '40 dólares en total' }
    ],
    [
      'Ejemplo 1 (Cálculo directo del 13% de IVA oficial en compra escolar): Un lote de materiales pedagógicos tiene un precio base neto de 80 dólares sin impuestos. ¿Cuánto dinero se cancela por concepto de IVA y cuál es el monto total facturado? Paso 1: Calculamos el valor del impuesto multiplicando el precio base por la tasa oficial del trece por ciento: 80 x 0.13 = 10.40 dólares de IVA. Paso 2: Sumamos el impuesto al precio base original: 80 + 10.40 = 90.40 dólares. Solución: El valor del IVA es de 10.40 dólares y el precio final cancelado asciende exactamente a 90.40 dólares.',
      'Ejemplo 2 (Cálculo de descuento comercial y valor final en tienda): Una camisa de vestir tiene un precio rotulado de 24 dólares y se ofrece con una rebaja de liquidación del 25%. ¿Cuánto dinero se descuenta y cuánto debe pagar el comprador? Paso 1: Calculamos el monto de la rebaja multiplicando por la razón decimal 0.25: 24 x 0.25 = 6 dólares de descuento directo. Paso 2: Restamos la rebaja del precio inicial: 24 - 6 = 18 dólares. Solución: El ahorro obtenido es de 6 dólares y el precio final pagado es de 18 dólares.',
      'Ejemplo 3 (Cálculo del porcentaje correspondiente a un subconjunto de datos): En un grado escolar de 40 estudiantes, exactamente 14 alcanzaron la máxima calificación sobresaliente. ¿Qué porcentaje del aula representa este subgrupo? Paso 1: Planteamos el valor de la razón dividiendo los casos favorables entre el total: 14 / 40 = 0.35. Paso 2: Convertimos la razón a porcentaje multiplicando por el cien por ciento: 0.35 x 100 = 35%. Solución: Los alumnos destacados representan exactamente el 35% de la matrícula total.',
      'Ejemplo 4 (Desglose del precio base a partir de un valor final con IVA): Una factura comercial emitida en una librería indica un total cancelado de 113 dólares con el trece por ciento de IVA ya incluido. ¿Cuál era el precio base antes de impuestos? Paso 1: Comprendemos que el precio facturado representa el 113% del precio neto original. Paso 2: Dividimos el total entre el factor 1.13: 113 / 1.13 = 100 dólares. Solución: El precio base sin impuestos era de 100 dólares y el impuesto correspondiente fue de 13 dólares.',
      'Ejemplo 5 (Aumento salarial porcentual y cálculo del nuevo ingreso): Un trabajador del sector comercio percibe un salario básico de 365 dólares al mes y recibe un incremento por antigüedad del 10%. ¿A cuánto ascenderá su nuevo ingreso mensual? Paso 1: Calculamos el incremento salarial multiplicando por 0.10: 365 x 0.10 = 36.50 dólares de aumento. Paso 2: Sumamos el incremento al salario previo: 365 + 36.50 = 401.50 dólares. Solución: El nuevo salario asignado es de 401.50 dólares mensuales.'
    ]
  ),
];

const u5Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u05-l01',
    '5.1',
    'Proporcionalidad directa, proporcionalidad inversa y representación cartesiana',
    'En una cooperativa agropecuaria en Usulután se empaca café en bolsas de una libra. Si tres paquetes iguales contienen 15 libras de café, la administración observa que al duplicar el número de paquetes a 6, la cantidad total de libras se duplica exactamente a 30 libras; al triplicar a 9 paquetes, la cantidad aumenta a 45 libras. Por otra parte, para trasladar 120 quintales de maíz desde la bodega al camión, 2 trabajadores tardan 6 horas; pero si se contratan 4 trabajadores tardan 3 horas, y con 6 trabajadores tardan solo 2 horas. ¿Cómo se diferencian matemáticamente la proporcionalidad directa de la inversa y cómo se representan sus relaciones mediante constantes y gráficas en el plano cartesiano?',
    'Para analizar la primera situación examinamos la razón entre las dos cantidades: dividimos las libras de café (y) entre el número de paquetes (x): 15 entre 3 es 5; 30 entre 6 es 5; 45 entre 9 es 5. Dado que el cociente entre ambas cantidades se mantiene estrictamente constante (k = 5), decimos que las dos cantidades son directamente proporcionales y su ecuación es y = 5x. En una proporcionalidad directa, al multiplicar una variable por 2, 3 o 4, la otra variable queda multiplicada exactamente por el mismo factor. Su gráfica en el plano cartesiano es una línea recta que pasa por el origen de coordenadas (0, 0). En la segunda situación, al multiplicar el número de trabajadores por las horas empleadas: 2 por 6 es 120; 4 por 3 es 120; 6 por 2 es 120. En este caso no es el cociente sino el producto de ambas variables lo que permanece constante (x por y = 120); por ende, son inversamente proporcionales y su ecuación es y = 120/x. Al aumentar el número de trabajadores, el tiempo disminuye en la misma proporción.',
    'Dos magnitudes $x$ e $y$ son **directamente proporcionales** si el cociente entre cada par de valores correspondientes se mantiene estrictamente constante en toda la tabla de datos: $$\\frac{y}{x} = k \\iff y = k \\cdot x$$ Donde $k$ representa la **constante de proporcionalidad directa**. En el plano cartesiano, los puntos de una relación directamente proporcional se alinean sobre una línea recta que pasa necesariamente por el origen de coordenadas $(0, 0)$. Por el contrario, dos magnitudes son **inversamente proporcionales** si el producto de cada par de valores asociados permanece invariable: $$x \\cdot y = k \\iff y = \\frac{k}{x}$$ Donde $k$ representa la **constante de proporcionalidad inversa**. Al duplicar una magnitud la otra se reduce a la mitad, formando en el plano cartesiano una curva decreciente asintótica denominada hipérbola.',
    'Si 3 paquetes pesan 15 lb, k = 15/3 = 5 lb/paquete; si 2 obreros tardan 6 h, k = 2 x 6 = 12 h-obrero.',
    [
      { exercise: 'Si 5 libras de queso especial cuestan 15 dólares en el mercado, ¿cuánto costarán 8 libras al mismo precio unitario?', hint: 'Calcula primero el costo unitario por libra (15 / 5 = 3) y multiplica por 8.', answer: '24 dólares en total' },
      { exercise: 'Tres bombas de agua idénticas llenan una cisterna comunitaria en 6 horas. ¿En cuántas horas la llenarán 9 bombas con el mismo caudal?', hint: 'El producto es constante: 3 x 6 = 18. Divide ese producto entre las 9 bombas.', answer: '2 horas completas' }
    ],
    [
      'Ejemplo 1 (Verificación de proporcionalidad directa en tabla de valores): Determinar si los pares ordenados (2, 8), (3, 12) y (5, 20) corresponden a una relación de proporcionalidad directa. Paso 1: Calculamos los cocientes individuales y/x en cada fila: 8 / 2 = 4; 12 / 3 = 4; 20 / 5 = 4. Paso 2: Como el cociente es idéntico y constante (k = 4), se confirma que existe proporcionalidad directa. Solución: Las variables son directamente proporcionales y su modelo algebraico es y = 4x.',
      'Ejemplo 2 (Cálculo de cantidad desconocida mediante la constante directa): Si 4 cuadernos universitarios cuestan 6 dólares, ¿cuánto costarán 10 cuadernos al mismo precio unitario? Paso 1: Calculamos la constante de proporcionalidad o precio por unidad: k = 6 / 4 = 1.50 dólares por cada cuaderno. Paso 2: Multiplicamos la constante por la cantidad requerida: y = 1.50 x 10 = 15 dólares. Solución: El costo de los 10 cuadernos es de exactamente 15 dólares.',
      'Ejemplo 3 (Verificación analítica de proporcionalidad inversa): Determinar si los datos de pares asociados (2, 30), (3, 20) y (5, 12) corresponden a proporcionalidad inversa. Paso 1: Calculamos el producto de los valores asociados x * y: 2 x 30 = 60; 3 x 20 = 60; 5 x 12 = 60. Paso 2: Como el producto se conserva exactamente igual (k = 60), se confirma la relación inversa. Solución: Cumplen proporcionalidad inversa con ecuación y = 60/x.',
      'Ejemplo 4 (Resolución de problema práctico de transporte con proporcionalidad inversa): Un autobús que viaja a 60 km/h de rapidez constante tarda 4 horas en llegar a San Miguel. ¿Cuánto tiempo tardará si viaja a 80 km/h? Paso 1: Calculamos la distancia constante multiplicando rapidez por tiempo: k = 60 x 4 = 240 kilómetros. Paso 2: Hallamos el nuevo tiempo dividiendo la distancia entre la nueva rapidez: t = 240 / 80 = 3 horas. Solución: El autobús tardará exactamente 3 horas en completar el trayecto.',
      'Ejemplo 5 (Interpretación de la representación gráfica cartesiana): Explicar por qué una gráfica lineal que pasa por el origen (0, 0) y por el punto (2, 10) modela proporcionalidad directa. Paso 1: Toda línea recta que cruza el origen posee una razón y/x constante en todos sus puntos: k = 10 / 2 = 5. Paso 2: La ecuación matemática que describe la recta es y = 5x. Solución: La gráfica representa una proporcionalidad directa con constante k = 5.'
    ]
  ),
];

const u6Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u06-l01',
    '6.1',
    'Longitud de la circunferencia, el número pi y área del círculo',
    'El comité de ornato del Parque Cuscatlán en San Salvador restaura una glorieta circular histórica cuyo radio medido desde el centro exacto hasta el borde exterior es de 5 metros. Los restauradores necesitan encargar una barandilla metálica perimetral para rodearla por completo y baldosas decorativas para cubrir toda su superficie interior. Para realizar el pedido deben calcular con precisión la longitud de la circunferencia exterior y el área del círculo interior. ¿Cómo se define el número pi, cuál es la relación entre el diámetro y el perímetro de cualquier círculo y cómo se deducen las fórmulas para la longitud y el área circular?',
    'Para resolver este problema analizamos la relación geométrica invariable que existe en toda circunferencia. Si medimos el perímetro de cualquier objeto circular y lo dividimos entre su diámetro (longitud que pasa por el centro uniendo dos puntos opuestos), el cociente resultante es siempre constante: ese número es pi, cuyo valor aproximado en educación básica es 3.1416. Dado que el radio de la glorieta es r = 5 metros, su diámetro d es el doble del radio: dos por cinco es diez metros. Para calcular la longitud de la circunferencia aplicamos la fórmula perímetro igual a pi por diámetro: 3.1416 multiplicado por 10 metros resulta en 31.416 metros de barandilla requeridos. Para deducir el área del círculo dividimos la región circular en una gran cantidad de sectores triangulares iguales y los reordenamos alternadamente; la figura se asemeja a un paralelogramo con base igual a la mitad de la circunferencia (pi por r) y altura igual al radio r. Por tanto, el área del círculo es pi por radio al cuadrado: 3.1416 por cinco al cuadrado (25) da como resultado 78.54 metros cuadrados de baldosas.',
    'El número **$\\pi$** (pi) es una constante matemática que representa la razón entre la longitud de la circunferencia y su diámetro: $$\\pi = \\frac{C}{d} \\approx 3.1416$$ Fórmulas fundamentales oficiales del círculo y la circunferencia: - Longitud de la circunferencia (perímetro exterior): $$C = \\pi \\times d = 2\\pi r$$ - Área del círculo (superficie interior): $$A = \\pi \\times r^2$$ Donde $r$ es el radio ($d = 2r$). El área se expresa en unidades cuadradas ($\\text{cm}^2, \\text{m}^2$) y la longitud en unidades lineales ($\\text{cm}, \\text{m}$).',
    'Con radio r = 5 m: longitud C = 2 x 3.1416 x 5 = 31.416 m; y área A = 3.1416 x 5² = 78.54 m².',
    [
      { exercise: 'Calcula la longitud de una circunferencia cuyo radio mide 4 cm.', hint: 'Aplica C = 2 x 3.1416 x 4.', answer: '25.1328 cm (aproximadamente 25.13 cm)' },
      { exercise: 'Halla el área de un círculo cuyo radio mide 6 metros.', hint: 'Calcula A = 3.1416 x 6² = 3.1416 x 36.', answer: '113.0976 metros cuadrados' }
    ],
    [
      'Ejemplo 1 (Cálculo de longitud de circunferencia conocido el diámetro): Una rueda de bicicleta tiene 70 cm de diámetro. ¿Qué distancia recorre en una vuelta completa? Paso 1: Usamos la fórmula C = pi x d con pi ≈ 3.1416. Paso 2: Multiplicamos 3.1416 x 70 = 219.91 cm. Solución: Recorre aproximadamente 219.91 centímetros (unos 2.2 metros) por vuelta.',
      'Ejemplo 2 (Cálculo del área de un círculo a partir del radio): Hallar el área de un disco circular con radio de 10 cm. Paso 1: Elevamos el radio al cuadrado: r² = 10² = 100 cm². Paso 2: Multiplicamos por pi: 3.1416 x 100 = 314.16 cm². Solución: El área es de 314.16 centímetros cuadrados.',
      'Ejemplo 3 (Cálculo del área de un círculo conocido el diámetro): Un pozo circular tiene 2 metros de diámetro. Calcular el área de su brocal. Paso 1: Hallamos el radio dividiendo el diámetro entre 2: r = 2 / 2 = 1 metro. Paso 2: Aplicamos A = pi x r²: 3.1416 x 1² = 3.1416 m². Solución: El área es de 3.1416 metros cuadrados.',
      'Ejemplo 4 (Despeje del radio a partir de la longitud conocida): Una pista circular para correr tiene 62.832 metros de perímetro. ¿Cuál es su radio? Paso 1: De C = 2 * pi * r despejamos r = C / (2 * pi). Paso 2: Calculamos 2 * 3.1416 = 6.2832. Paso 3: Dividimos 62.832 / 6.2832 = 10. Solución: El radio de la pista mide exactamente 10 metros.',
      'Ejemplo 5 (Área de una corona circular): Un camino circular rodea una fuente de radio 3 m, teniendo el borde exterior un radio de 4 m. Hallar el área del camino. Paso 1: Área exterior: A_ext = pi * 4² = 16 * 3.1416 = 50.27 m². Paso 2: Área interior: A_int = pi * 3² = 9 * 3.1416 = 28.27 m². Paso 3: Restamos ambas áreas: 50.27 - 28.27 = 22 m². Solución: El área del camino es de 22 metros cuadrados.'
    ]
  ),
];

const u7Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u07-l01',
    '7.1',
    'Medidas de tendencia central: media aritmética, mediana y moda',
    'En un centro escolar en San Vicente, el profesor de educación física evalúa el desempeño de un grupo de estudiantes en salto largo registrando las siguientes distancias en metros: 2.1, 2.4, 2.1, 2.5, 2.8, 2.1 y 3.5. Al presentar el informe pedagógico, el docente necesita resumir el comportamiento de todo el grupo utilizando un valor representativo promedio, el valor que ocupa la posición central al ordenar los datos y el valor que se repite con mayor frecuencia. ¿Cómo se calculan la media aritmética, la mediana y la moda para datos no agrupados y en qué situaciones es preferible utilizar la mediana frente a la media?',
    'Para calcular la media aritmética o promedio sumamos todas las mediciones individuales y dividimos entre el número total de datos recolectados (n = 7). Sumamos: 2.1 más 2.4 más 2.1 más 2.5 más 2.8 más 2.1 más 3.5 es igual a 17.5 metros en total; al dividir 17.5 entre 7 obtenemos una media aritmética de exactamente 2.5 metros. Para calcular la mediana ordenamos los siete datos de menor a mayor: 2.1, 2.1, 2.1, 2.4, 2.5, 2.8 y 3.5. Como la cantidad de datos es impar (n = 7), la mediana corresponde exactamente al dato que ocupa la posición central número cuatro: el valor central es 2.4 metros. Para determinar la moda identificamos el dato que tiene mayor frecuencia de aparición: el valor 2.1 metros se repite 3 veces, mientras que los demás aparecen solo una vez; por lo tanto, la moda es 2.1 metros. Cuando una serie tiene un valor extremo muy alejado (como 3.5), la mediana ofrece una medida más representativa de la tendencia central que la media.',
    'Las **medidas de tendencia central** resumen en un solo valor numérico el centro en torno al cual se distribuyen los datos de una muestra o población: - **Media aritmética (promedio)**: $$\\bar{x} = \\frac{\\sum_{i=1}^n x_i}{n}$$ - **Mediana ($Me$)**: es el dato ubicado en la posición central cuando los datos están ordenados de menor a mayor. Si el número de datos es par, es el promedio de los dos datos centrales. - **Moda ($Mo$)**: es el valor que aparece con mayor frecuencia absoluta.',
    'Para las notas 8, 9, 7, 9, 10: media = 43/5 = 8.6; la moda es 9 (repite 2 veces); y la mediana ordenada (7, 8, 9, 9, 10) es 9.',
    [
      { exercise: 'Calcula la media, mediana y moda de los siguientes números: 5, 7, 7, 8, 9, 10.', hint: 'Suma y divide entre 6; promedia los dos del centro para la mediana.', answer: 'Media = 7.67, Mediana = 7.5, Moda = 7' },
      { exercise: 'Halla la mediana del conjunto ordenado: 12, 15, 18, 22, 25.', hint: 'Es el dato central de los cinco.', answer: 'Mediana = 18' }
    ],
    [
      'Ejemplo 1 (Cálculo de media de notas escolares): Un estudiante obtiene las calificaciones 8, 9, 7, 10 y 6. Hallar su media aritmética. Paso 1: Sumamos las notas: 8 + 9 + 7 + 10 + 6 = 40. Paso 2: Dividimos entre el número de notas (5): 40 / 5 = 8. Solución: La media aritmética del alumno es de 8.',
      'Ejemplo 2 (Mediana con número par de datos): Encontrar la mediana de los datos {4, 6, 8, 10, 12, 14}. Paso 1: Los datos ya están ordenados y son 6 datos (número par). Paso 2: Identificamos los dos datos centrales: el tercero (8) y el cuarto (10). Paso 3: Calculamos su promedio: (8 + 10) / 2 = 18 / 2 = 9. Solución: La mediana es 9.',
      'Ejemplo 3 (Identificación de serie bimodal): Determinar la moda del conjunto {3, 5, 5, 7, 8, 8, 9}. Paso 1: Contamos frecuencias: el 5 aparece dos veces y el 8 aparece dos veces; los demás solo una. Solución: La serie es bimodal con modas Mo = 5 y Mo = 8.',
      'Ejemplo 4 (Efecto de un valor atípico en la media): En los salarios de cinco empleados {365, 365, 400, 420, 2500} dólares, comparar media y mediana. Paso 1: Media: (365 + 365 + 400 + 420 + 2500) / 5 = 4050 / 5 = 810 dólares. Paso 2: Mediana: el valor central ordenado es 400 dólares. Solución: La mediana (400 dólares) representa mejor a la mayoría porque la media (810 dólares) está distorsionada por el salario extremo de 2500 dólares.',
      'Ejemplo 5 (Cálculo de nota faltante para promedio objetivo): Un alumno tiene notas de 7 y 8 en dos pruebas. ¿Qué nota debe sacar en la tercera prueba para que su promedio final sea 8? Paso 1: Para que el promedio de 3 notas sea 8, la suma total debe ser 3 x 8 = 24. Paso 2: Sumamos las dos pruebas: 7 + 8 = 15. Paso 3: Restamos: 24 - 15 = 9. Solución: Debe obtener un 9 en la tercera prueba.'
    ]
  ),
];

const u8Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u08-l01',
    '8.1',
    'Volumen de cubos y prismas rectangulares y relación con la capacidad',
    'Una cooperativa comunitaria en Chalatenango construye una cisterna de almacenamiento de agua potable para una escuela rural. La cisterna tiene forma de prisma rectangular recto con medidas interiores de 4 metros de largo, 2.5 metros de ancho y 2 metros de profundidad. Al mismo tiempo, en el laboratorio escolar se utiliza un cubo de madera maciza de 10 centímetros de arista para estudiar unidades de volumen. ¿Cuál es el volumen de la cisterna en metros cúbicos, cuántos litros de agua puede almacenar a su máxima capacidad y cuál es el volumen del cubo en centímetros cúbicos?',
    'Para calcular el volumen de un cuerpo geométrico tridimensional medimos cuántas unidades cúbicas caben en su interior. En un prisma rectangular multiplicamos el área de su base rectangular por la altura o profundidad. La base de la cisterna mide 4 metros de largo por 2.5 metros de ancho, teniendo un área de base de 4 por 2.5 igual a 10 metros cuadrados. Multiplicamos esta área de base por los 2 metros de profundidad: 10 metros cuadrados por 2 metros es igual a 20 metros cúbicos de volumen. Para establecer la capacidad en litros utilizamos la equivalencia fundamental entre volumen y capacidad: un metro cúbico equivale exactamente a mil litros de agua (1 m³ = 1,000 litros). Por lo tanto, 20 metros cúbicos equivalen a 20 multiplicado por 1,000, lo que da 20,000 litros de agua de capacidad máxima. Para el cubo de 10 centímetros de arista, como sus tres dimensiones (largo, ancho y alto) son iguales a diez centímetros, elevamos la arista al cubo: 10 por 10 por 10 es igual a 1,000 centímetros cúbicos, lo que equivale exactamente a un litro de capacidad.',
    'El **volumen** es la medida del espacio tridimensional que ocupa un cuerpo geométrico y se expresa en unidades cúbicas ($\\text{cm}^3, \\text{m}^3$). Fórmulas fundamentales oficiales del MINED: - Prisma rectangular recto: $$V = A_b \\times h = l \\times a \\times h$$ - Cubo con arista $l$: $$V = l^3 = l \\times l \\times l$$ Equivalencias fundamentales de volumen y capacidad: $$1\\text{ litro (l)} = 1,000\\text{ cm}^3 = 1\\text{ dm}^3, \\qquad 1\\text{ m}^3 = 1,000\\text{ litros}$$',
    'Una cisterna de 4 m x 3 m x 2 m tiene V = 24 m³ (24,000 litros); un cubo de 3 cm de arista tiene V = 27 cm³.',
    [
      { exercise: 'Calcula el volumen de un prisma rectangular con dimensiones de 8 cm de largo, 5 cm de ancho y 4 cm de altura.', hint: 'Multiplica las tres dimensiones: 8 x 5 x 4.', answer: '160 centímetros cúbicos' },
      { exercise: '¿Cuántos litros de agua caben en un tanque cúbico de 2 metros de arista?', hint: 'Calcula V = 2³ = 8 m³ y multiplica por 1,000.', answer: '8,000 litros de agua' }
    ],
    [
      'Ejemplo 1 (Cálculo directo de volumen de prisma rectangular): Una caja de zapatos mide 30 cm de largo, 18 cm de ancho y 12 cm de alto. Hallar su volumen. Paso 1: Identificamos largo l = 30 cm, ancho a = 18 cm y alto h = 12 cm. Paso 2: Multiplicamos las tres dimensiones: 30 x 18 x 12 = 6,480. Solución: El volumen de la caja es de 6,480 centímetros cúbicos.',
      'Ejemplo 2 (Cálculo de volumen de un cubo): Un depósito cúbico tiene 3 metros de arista. Calcular su volumen. Paso 1: Aplicamos la fórmula V = l³ con l = 3 m. Paso 2: Calculamos 3 x 3 x 3 = 27. Solución: El volumen del depósito es de 27 metros cúbicos.',
      'Ejemplo 3 (Conversión de volumen a litros): Una piscina pequeña contiene 15 metros cúbicos de agua. ¿Cuántos litros contiene? Paso 1: Sabemos que 1 m³ = 1,000 litros. Paso 2: Multiplicamos 15 x 1,000 = 15,000. Solución: Contiene 15,000 litros de agua.',
      'Ejemplo 4 (Despeje de una dimensión conocido el volumen): Un contenedor rectangular tiene 60 m³ de volumen, 5 m de largo y 4 m de ancho. ¿Cuál es su altura? Paso 1: Calculamos el área de la base: Ab = 5 x 4 = 20 m². Paso 2: Despejamos la altura: h = V / Ab = 60 / 20 = 3. Solución: La altura del contenedor es de 3 metros.',
      'Ejemplo 5 (Volumen de líquido en recipiente parcialmente lleno): Un acuario rectangular de 50 cm de largo y 30 cm de ancho se llena de agua hasta 20 cm de altura. ¿Cuántos litros de agua contiene? Paso 1: Calculamos el volumen de agua: 50 x 30 x 20 = 30,000 cm³. Paso 2: Convertimos a litros dividiendo entre 1,000: 30,000 / 1,000 = 30. Solución: El acuario contiene exactamente 30 litros de agua.'
    ]
  ),
];

const u9Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u09-l01',
    '9.1',
    'Conversión de unidades de superficie agrarias y tradicionales al Sistema Internacional',
    'En un cantón rural de Morazán, una familia campesina adquiere una parcela agrícola destinada al cultivo de maíz y frijol. La escritura pública de propiedad inscrita en el Centro Nacional de Registros (CNR) especifica que el terreno tiene una extensión de dos manzanas y media (2.5 manzanas). Los miembros de la cooperativa necesitan delimitar el terreno con alambre de púas y comprar fertilizantes dosificados por metro cuadrado y hectárea según las guías técnicas del Ministerio de Agricultura y Ganadería. ¿A cuántas varas cuadradas equivale la parcela, cuántos metros cuadrados representa y cómo se realiza la conversión entre el sistema agrario tradicional salvadoreño y el Sistema Internacional de Unidades?',
    'Para resolver este problema identificamos las medidas vernáculas agrarias salvadoreñas oficiales. En El Salvador, la unidad de longitud tradicional es la vara (v), que equivale aproximadamente a 0.836 metros (o 83.6 centímetros). La vara cuadrada (v²) es la superficie de un cuadrado de una vara de lado y equivale a 0.836 multiplicado por 0.836, es decir, aproximadamente 0.6989 metros cuadrados. En el ámbito agrario, la manzana (mz) es la unidad de superficie por excelencia y está estandarizada por ley como diez mil varas cuadradas (1 mz = 10,000 v²). Para saber a cuántas varas cuadradas equivalen 2.5 manzanas multiplicamos 2.5 por 10,000, lo que da 25,000 varas cuadradas. Para convertir esta medida a metros cuadrados multiplicamos las 25,000 varas cuadradas por el factor de conversión oficial de 0.6989 m² por cada vara cuadrada (o multiplicamos las 2.5 manzanas por 6,988.96 m² por manzana), obteniendo aproximadamente 17,472.4 metros cuadrados, lo que equivale a 1.75 hectáreas (1 hectárea = 10,000 m²).',
    'En el sistema agrario y catastral salvadoreño se utilizan medidas tradicionales junto al Sistema Internacional: $$1\\text{ vara (v)} \\approx 0.836\\text{ m}, \\qquad 1\\text{ vara cuadrada (v}^2) \\approx 0.6989\\text{ m}^2$$ $$1\\text{ manzana (mz)} = 10,000\\text{ v}^2 \\approx 6,988.96\\text{ m}^2 \\approx 0.70\\text{ ha}$$ Para convertir de manzanas a varas cuadradas se multiplica por $10,000$; para convertir de varas cuadradas a metros cuadrados se multiplica por $0.6989$.',
    'Una manzana equivale a 10,000 varas cuadradas (aprox. 6,989 m²); media manzana equivale a 5,000 v².',
    [
      { exercise: '¿Cuántas varas cuadradas contiene una parcela de 3 manzanas?', hint: 'Multiplica 3 por 10,000.', answer: '30,000 varas cuadradas' },
      { exercise: 'Convierte 5,000 varas cuadradas a metros cuadrados usando el factor 0.6989.', hint: 'Multiplica 5,000 por 0.6989.', answer: '3,494.5 metros cuadrados' }
    ],
    [
      'Ejemplo 1 (Conversión de manzanas a varas cuadradas): ¿Cuántas varas cuadradas hay en 4 manzanas de terreno? Paso 1: Recordamos la equivalencia fija: 1 manzana = 10,000 varas cuadradas. Paso 2: Multiplicamos 4 x 10,000 = 40,000. Solución: 4 manzanas equivalen a 40,000 varas cuadradas.',
      'Ejemplo 2 (Conversión de varas cuadradas a manzanas): Un terreno rústico tiene 35,000 varas cuadradas. ¿A cuántas manzanas equivale? Paso 1: Dividimos la cantidad entre 10,000: 35,000 / 10,000 = 3.5. Solución: Equivale a 3.5 manzanas (tres manzanas y media).',
      'Ejemplo 3 (Conversión de varas cuadradas a metros cuadrados): Convertir 1,000 varas cuadradas a metros cuadrados. Paso 1: Multiplicamos por el factor 0.6989 m²/v²: 1,000 x 0.6989 = 698.9 m². Solución: 1,000 varas cuadradas equivalen aproximadamente a 698.9 metros cuadrados.',
      'Ejemplo 4 (Conversión de manzanas a metros cuadrados): Calcular la superficie en metros cuadrados de media manzana (0.5 mz). Paso 1: 0.5 mz = 5,000 v². Paso 2: Multiplicamos 5,000 x 0.6989 = 3,494.5 m² (o 6,988.96 / 2 = 3,494.48 m²). Solución: Media manzana equivale aproximadamente a 3,494.5 metros cuadrados.',
      'Ejemplo 5 (Comparación entre hectárea y manzana): Determinar cuál unidad de superficie es mayor entre 1 hectárea y 1 manzana. Paso 1: 1 hectárea (ha) equivale a 10,000 metros cuadrados. Paso 2: 1 manzana (mz) equivale a aproximadamente 6,989 metros cuadrados. Solución: La hectárea es mayor que la manzana (1 ha ≈ 1.43 mz).'
    ]
  ),
];

const u10Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u10-l01',
    '10.1',
    'Simetría axial, simetría puntual, traslaciones y rotaciones en el plano',
    'En un taller de diseño textil y cerámica artesanal en Guatajiagua, los artesanos decoran vasijas de barro y telas bordadas con patrones geométricos tradicionales. Al doblar una plantilla de papel con el dibujo de una flor por una línea media vertical, ambas mitades coinciden exactamente punto por punto; mientras que en otra figura geométrica en forma de molinete de viento, al girarla 180 grados alrededor de su centro geométrico la figura vuelve a quedar en su posición original idéntica. ¿Cómo se distinguen la simetría axial y la simetría puntual, cómo se identifican los ejes y centros de simetría y cómo se definen las transformaciones de traslación y rotación en el plano geométrico?',
    'Para analizar estas transformaciones geométricas examinamos los invariantes de posición en el plano. En la primera figura, cuando los puntos de un lado se corresponden con los puntos del lado opuesto a la misma distancia perpendicular respecto a una recta fija, la figura posee simetría axial; dicha recta divisoria se llama eje de simetría. Por ejemplo, un cuadrado tiene cuatro ejes de simetría (dos diagonales, una vertical y una horizontal), un rectángulo tiene dos ejes de simetría y un triángulo equilátero tiene tres ejes. En la segunda figura, cuando cada punto de la figura se corresponde con otro punto opuesto situado sobre una línea recta que pasa por un punto central fijo y a la misma distancia de este centro, la figura posee simetría puntual (equivalente a una rotación exacta de 180 grados); dicho punto es el centro de simetría. En una traslación, la figura completa se desplaza en línea recta conservando exactamente su tamaño, forma y orientación según una dirección, sentido y longitud vectorial. En una rotación, la figura gira alrededor de un punto fijo un ángulo determinado en sentido horario o antihorario.',
    'Las transformaciones isométricas conservan la forma y el tamaño en el plano: - **Simetría axial**: existe un **eje de simetría** respecto al cual cada punto $P$ tiene su homólogo $P\'$ reflejado perpendicularmente. - **Simetría puntual**: existe un **centro de simetría** común que es punto medio de cada segmento que une puntos homólogos ($180^{\\circ}$). - **Traslación**: desplazamiento según un vector de dirección y distancia. - **Rotación**: giro respecto a un centro con un ángulo determinado.',
    'Un cuadrado tiene 4 ejes de simetría axial; un paralelogramo tiene simetría puntual respecto al corte de sus diagonales.',
    [
      { exercise: '¿Cuántos ejes de simetría axial tiene un rectángulo no cuadrado?', hint: 'Piensa en las líneas medias horizontal y vertical.', answer: 'Exactamente 2 ejes de simetría' },
      { exercise: '¿A qué ángulo de giro equivale exactamente la simetría puntual en el plano?', hint: 'Es media vuelta completa.', answer: '180 grados' }
    ],
    [
      'Ejemplo 1 (Identificación de ejes de simetría en polígonos regulares): Determinar cuántos ejes de simetría tiene un triángulo equilátero y un cuadrado. Paso 1: En el triángulo equilátero, las 3 alturas son ejes de simetría: tiene 3 ejes. Paso 2: En el cuadrado hay 2 ejes perpendiculares medios y 2 ejes diagonales: tiene 4 ejes. Solución: El triángulo equilátero tiene 3 ejes y el cuadrado tiene 4 ejes.',
      'Ejemplo 2 (Figuras con simetría puntual): Determinar si un paralelogramo no rectangular tiene simetría axial o puntual. Paso 1: Al doblar un paralelogramo no coinciden sus bordes; no tiene simetría axial. Paso 2: Al girar 180° sobre el punto donde se cruzan sus diagonales, coincide consigo mismo. Solución: El paralelogramo tiene simetría puntual respecto a la intersección de sus diagonales.',
      'Ejemplo 3 (Comprobación de traslación en cuadrícula): Un triángulo con vértices en (1, 1), (4, 1) y (2, 4) se traslada 3 unidades a la derecha y 2 hacia arriba. Hallar las nuevas coordenadas. Paso 1: Sumamos 3 a las x y 2 a las y de cada vértice. Paso 2: Nuevos vértices: (1+3, 1+2) = (4, 3); (4+3, 1+2) = (7, 3); (2+3, 4+2) = (5, 6). Solución: Los nuevos vértices son (4, 3), (7, 3) y (5, 6).',
      'Ejemplo 4 (Rotación de 90° en sentido horario): Un punto P(2, 5) gira 90° horario alrededor del origen (0, 0). Hallar las nuevas coordenadas. Paso 1: En rotación de 90° horario alrededor del origen la regla es (x, y) -> (y, -x). Paso 2: Sustituimos x = 2 e y = 5: el nuevo punto es (5, -2). Solución: Las coordenadas transformadas son (5, -2).',
      'Ejemplo 5 (Simetría en letras del alfabeto): Analizar los ejes de simetría de las letras A, H y O mayúsculas. Paso 1: La letra A tiene 1 eje vertical. Paso 2: La letra H tiene 2 ejes (uno vertical y uno horizontal) y simetría puntual. Paso 3: La letra O tiene infinitos ejes si es un círculo (o 2 si es óvalo). Solución: A tiene 1 eje; H tiene 2 ejes y centro simétrico; O tiene múltiples ejes.'
    ]
  ),
];

const u11Lessons6G = [
  createPscerLesson(
    'mined-mat-6g-u11-l01',
    '11.1',
    'Principios de conteo, diagramas de árbol y probabilidad clásica de Laplace',
    'En un torneo escolar de intramuros en La Paz, tres equipos finalistas (Equipo A, Equipo B y Equipo C) compiten por los trofeos de primer y segundo lugar. La comisión organizadora necesita saber de cuántas maneras distintas pueden quedar definidos los dos primeros lugares sin empates. Además, para la inauguración se prepara una tómbola con 10 pelotas de colores numeradas de igual tamaño: 5 rojas, 3 azules y 2 verdes; al extraer una pelota al azar, se otorgará un premio al estudiante seleccionado. ¿Cómo se utiliza un diagrama de árbol y los principios fundamentales de conteo para determinar todos los resultados posibles y cómo se calcula la probabilidad clásica mediante la regla de Laplace?',
    'Para resolver la primera situación de conteo elaboramos un diagrama de árbol organizado por etapas sucesivas. En la primera etapa elegimos al equipo que obtiene el primer lugar: hay 3 opciones posibles (A, B o C). En la segunda etapa elegimos al equipo que obtiene el segundo lugar: dado que el mismo equipo no puede ocupar dos posiciones a la vez, para cada elección del primer lugar quedan exactamente 2 opciones para el segundo lugar. Si el primer lugar es A, el segundo puede ser B o C (2 resultados: AB, AC); si es B, el segundo puede ser A o C (BA, BC); si es C, el segundo puede ser A o B (CA, CB). Aplicando el principio de la multiplicación, multiplicamos el número de opciones de la primera etapa por las de la segunda: 3 multiplicado por 2 da un total de 6 maneras posibles. Para el segundo problema aplicamos la regla de Laplace de probabilidad clásica: el espacio muestral total tiene 10 pelotas posibles equiprobables (5 rojas más 3 azules más 2 verdes). La probabilidad de extraer una pelota roja es 5 de 10 (5/10 = 1/2 = 50%); la de una azul es 3/10 (30%); y la de una verde es 2/10 (2/10 = 1/5 = 20%).',
    'Las técnicas de conteo y la probabilidad permiten cuantificar resultados aleatorios: - **Principio de la multiplicación**: si una primera opción tiene $m$ alternativas y una segunda $n$, el total conjunto es $m \\times n$. - **Principio de la suma**: para eventos alternativos y disjuntos, el total es $m + n$. - **Regla de Laplace (probabilidad clásica)**: $$P(A) = \\frac{\\text{Casos favorables al evento } A}{\\text{Casos posibles totales del espacio muestral}}$$ Con $0 \\le P(A) \\le 1$. La probabilidad de un evento imposible es $0$ y la de un evento seguro es $1$ ($100\\%$).',
    'Con 3 equipos hay 3 x 2 = 6 formas de definir 1.° y 2.° lugar; al lanzar un dado, P(par) = 3/6 = 1/2 = 50%.',
    [
      { exercise: 'Si una cafetería ofrece 4 tipos de sándwich y 3 tipos de bebida, ¿cuántos menús distintos se pueden armar?', hint: 'Aplica el principio de la multiplicación 4 x 3.', answer: '12 menús diferentes' },
      { exercise: 'En una bolsa hay 4 chibolas verdes y 6 rojas. ¿Cuál es la probabilidad de sacar una verde al azar?', hint: 'Aplica la regla de Laplace: 4 favorables entre 10 posibles.', answer: '4/10 = 2/5 (o 40%)' }
    ],
    [
      'Ejemplo 1 (Combinaciones de vestimenta con principio de multiplicación): Un estudiante tiene 3 camisas (blanca, azul, gris) y 2 pantalones (negro, café). ¿Cuántas combinaciones diferentes puede formar? Paso 1: Opciones de camisas m = 3; opciones de pantalones n = 2. Paso 2: Multiplicamos: 3 x 2 = 6 combinaciones. Solución: Puede vestirse de 6 maneras distintas.',
      'Ejemplo 2 (Probabilidad clásica con un dado de 6 caras): Al lanzar un dado equilibrado de 6 caras, ¿cuál es la probabilidad de obtener un número par? Paso 1: Casos posibles totales: {1, 2, 3, 4, 5, 6}, n = 6. Paso 2: Casos favorables (pares): {2, 4, 6}, m = 3. Paso 3: Aplicamos Laplace: P = 3/6 = 1/2 = 0.50 = 50%. Solución: La probabilidad es 1/2 (50%).',
      'Ejemplo 3 (Probabilidad del evento seguro e imposible): Al lanzar un dado de 6 caras, hallar la probabilidad de sacar un número menor que 7 y la de sacar un 8. Paso 1: Números menores que 7 son todos {1, 2, 3, 4, 5, 6}, casos favorables 6/6 = 1 (evento seguro). Paso 2: No hay ninguna cara con 8, casos favorables 0/6 = 0 (evento imposible). Solución: P(menor que 7) = 1 (100%) y P(sacar 8) = 0 (0%).',
      'Ejemplo 4 (Diagrama de árbol para lanzamiento de dos monedas): Determinar el espacio muestral al lanzar dos monedas al aire. Paso 1: Primera moneda: Cara (C) o Corona (+). Paso 2: Segunda moneda: para cada rama hay C o +. Paso 3: Los resultados posibles son {CC, C+, +C, ++}, total 4 casos. Solución: El espacio muestral consta de 4 resultados equiprobables.',
      'Ejemplo 5 (Probabilidad en extracción de una baraja): En una baraja estándar de 52 cartas hay 4 reyes. ¿Cuál es la probabilidad de extraer un rey al azar? Paso 1: Casos favorables m = 4. Paso 2: Casos posibles totales n = 52. Paso 3: Simplificamos P = 4/52 = 1/13 ≈ 0.0769 (7.69%). Solución: La probabilidad es 1/13.'
    ]
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
