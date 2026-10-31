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
    'Números primos, números compuestos y descomposición en factores primos',
    'En una feria escolar de ciencias en Santa Tecla, una docente organiza equipos de trabajo con grupos de estudiantes de diferentes tamaños. Para una actividad de relevos dispone de tarjetas numeradas del 1 al 20 y pide a los alumnos que encuentren todas las formas posibles de formar filas rectangulares completas sin que sobre ningún participante. Los alumnos notan que con números como 7, 11 y 13 solo pueden formar una fila simple, mientras que con 12, 16 y 18 pueden formar múltiples arreglos rectangulares. ¿Cómo se clasifican los números naturales según la cantidad de divisores que poseen y cómo se descompone un número compuesto en factores primos?',
    'Para responder a esta pregunta determinamos el conjunto de todos los divisores positivos de cada número natural. Un número que divide de forma exacta sin dejar residuo es un divisor. Al examinar el número 7 observamos que sus únicos divisores son 1 y 7, sumando exactamente dos divisores; por ello es un número primo. Al examinar el número 12, sus divisores son 1, 2, 3, 4, 6 y 12, sumando seis divisores; por poseer más de dos divisores es un número compuesto. El número 1 tiene un solo divisor (él mismo), por lo que no es ni primo ni compuesto. Para descomponer un número compuesto como 60 en sus factores primos fundamentales, dividimos sucesivamente entre los números primos menores: 60 entre 2 es 30; 30 entre 2 es 15; 15 entre 3 es 5; y 5 entre 5 es 1. Así, 60 se expresa de forma única como dos al cuadrado multiplicado por tres por cinco.',
    'Un **número primo** es aquel número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: el número 1 y sí mismo. Un **número compuesto** tiene más de dos divisores. El número 1 no es primo ni compuesto. El número 2 es el único número primo par. El **Teorema Fundamental de la Aritmética** establece que todo número compuesto se puede descomponer de manera única (salvo el orden) como producto de números primos: $$N = p_1^{a_1} \\times p_2^{a_2} \\times \\dots \\times p_k^{a_k}$$ Esta descomposición factorial constituye la base para calcular de forma sistemática el Mínimo Común Múltiplo (MCM) y el Máximo Común Divisor (MCD).',
    'El número 2 es el único primo par; 60 se descompone como 2² x 3 x 5.',
    [
      { exercise: 'Determina si el número 51 es primo o compuesto justificando tu respuesta.', hint: 'Suma sus cifras 5 + 1 = 6 para probar divisibilidad entre 3.', answer: 'Es compuesto porque es divisible entre 3 (51 = 3 x 17)' },
      { exercise: 'Escribe la descomposición en factores primos del número 72.', hint: 'Divide sucesivamente entre 2 y luego entre 3.', answer: '72 = 2³ x 3²' }
    ],
    [
      'Ejemplo 1 (Identificación de números primos menores que 30): Determinar si los números 19, 21 y 29 son primos o compuestos. Paso 1: Buscamos divisores de 19: solo 1 y 19, por lo que 19 es primo. Paso 2: Buscamos divisores de 21: 1, 3, 7 y 21; tiene 4 divisores, por lo que 21 es compuesto. Paso 3: Buscamos divisores de 29: solo 1 y 29, por lo que 29 es primo. Solución: 19 y 29 son primos; 21 es compuesto.',
      'Ejemplo 2 (Descomposición en factores primos en árbol): Descomponer el número 36 mediante divisiones sucesivas. Paso 1: Dividimos 36 entre 2: 36 / 2 = 18. Paso 2: Dividimos 18 entre 2: 18 / 2 = 9. Paso 3: Dividimos 9 entre 3: 9 / 3 = 3. Paso 4: Dividimos 3 entre 3: 3 / 3 = 1. Solución: La descomposición prima es 36 = 2 x 2 x 3 x 3 = 2² x 3².',
      'Ejemplo 3 (Cálculo de todos los divisores a partir de factores primos): Hallar todos los divisores positivos de 20. Paso 1: Descomponemos 20 en factores primos: 20 = 2² x 5. Paso 2: Formamos todas las combinaciones posibles de factores: 1, 2, 2² (4), 5, 2 x 5 (10) y 4 x 5 (20). Solución: Los divisores de 20 son {1, 2, 4, 5, 10, 20}.',
      'Ejemplo 4 (Comprobación de primalidad en números de dos cifras): Verificar si 37 es primo probando divisibilidad entre primos menores que su raíz (2, 3, 5). Paso 1: 37 no termina en cifra par, no es divisible entre 2. Paso 2: 3 + 7 = 10, no es múltiplo de 3. Paso 3: No termina en 0 ni en 5, no es divisible entre 5. Solución: Como no es divisible entre ningún primo menor, 37 es un número primo.',
      'Ejemplo 5 (Descomposición factorial de cantidad mayor): Expresar 180 como producto de potencias de números primos. Paso 1: 180 / 2 = 90. Paso 2: 90 / 2 = 45. Paso 3: 45 / 3 = 15. Paso 4: 15 / 3 = 5. Paso 5: 5 / 5 = 1. Solución: 180 = 2² x 3² x 5.'
    ]
  ),
  createPscerLesson(
    'mined-mat-5g-u01-l02',
    '1.2',
    'Criterios de divisibilidad por 2, 3, 5 y 10, MCM y MCD',
    'Una distribuidora de libros de texto en San Salvador recibe un lote con 4,620 cuadernos de trabajo para repartirlos equitativamente en escuelas departamentales. La administración necesita saber de inmediato si la cantidad total de cuadernos puede empacarse en paquetes iguales de 2, 3, 5 o 10 unidades sin que sobre ninguno y sin necesidad de realizar las divisiones largas completas. Además, deben preparar kits escolares con 24 lápices y 36 borradores de modo que cada bolsa tenga la misma cantidad máxima posible de cada artículo sin sobrantes. ¿Cómo se aplican los criterios de divisibilidad y cómo se calculan el MCM y el MCD?',
    'Para verificar la divisibilidad de 4,620 aplicamos los criterios oficiales del MINED. Para el 2: el número 4,620 termina en 0, que es cifra par; por lo tanto, es divisible entre 2. Para el 3: sumamos el valor de sus cifras individuales: 4 más 6 más 2 más 0 es igual a 12; dado que 12 es múltiplo de 3, 4,620 es divisible entre 3. Para el 5: su última cifra es 0; por lo tanto, es divisible entre 5. Para el 10: termina en 0, por lo que también es divisible entre 10. Para el segundo problema, que exige encontrar la cantidad máxima de bolsas iguales sin sobrantes, calculamos el Máximo Común Divisor (MCD) entre 24 y 36. Descomponemos ambos números: 24 es dos al cubo por tres, y 36 es dos al cuadrado por tres al cuadrado. El MCD se forma con los factores primos comunes con su menor exponente: dos al cuadrado multiplicado por tres es igual a 12 bolsas completas.',
    'Los **criterios de divisibilidad** permiten determinar si un número natural es divisible entre otro sin efectuar la división: entre $2$ si termina en cifra par ($0, 2, 4, 6, 8$); entre $3$ si la suma de sus cifras es múltiplo de $3$; entre $5$ si termina en $0$ o $5$; y entre $10$ si termina en $0$. El **Mínimo Común Múltiplo (MCM)** es el menor múltiplo positivo común (factores comunes y no comunes con su mayor exponente). El **Máximo Común Divisor (MCD)** es el mayor divisor común (factores comunes con su menor exponente): $$\\text{MCM}(a, b) \\times \\text{MCD}(a, b) = a \\times b$$',
    'El número 2,580 es divisible entre 2, 3, 5 y 10; MCD(24, 36) = 12 y MCM(24, 36) = 72.',
    [
      { exercise: 'Averigua si el número 5,832 es divisible entre 2, 3 y 5.', hint: 'Aplica el criterio de terminación y suma de cifras 5 + 8 + 3 + 2 = 18.', answer: 'Es divisible entre 2 y entre 3, pero no entre 5' },
      { exercise: 'Calcula el MCM y el MCD de los números 16 y 24.', hint: 'Descompón 16 en 2⁴ y 24 en 2³ x 3.', answer: 'MCM = 48 y MCD = 8' }
    ],
    [
      'Ejemplo 1 (Aplicación combinada de criterios): Verificar si 7,395 es divisible entre 2, 3, 5 y 10. Paso 1: Termina en 5 (impar), no es divisible entre 2 ni entre 10. Paso 2: Termina en 5, es divisible entre 5. Paso 3: Sumamos sus cifras: 7 + 3 + 9 + 5 = 24; como 24 es múltiplo de 3, sí es divisible entre 3. Solución: 7,395 es divisible entre 3 y 5, pero no entre 2 ni 10.',
      'Ejemplo 2 (Cálculo del MCM por descomposición simultánea): Calcular el MCM de 12 y 18. Paso 1: Descomponemos en factores primos: 12 = 2² x 3 y 18 = 2 x 3². Paso 2: Tomamos factores comunes y no comunes con mayor exponente: 2² y 3². Paso 3: Multiplicamos: 2² x 3² = 4 x 9 = 36. Solución: MCM(12, 18) = 36.',
      'Ejemplo 3 (Cálculo del MCD para empaque equitativo): Hallar el MCD de 40 y 60. Paso 1: Descomponemos: 40 = 2³ x 5 y 60 = 2² x 3 x 5. Paso 2: Identificamos factores primos comunes con su menor exponente: 2² y 5¹. Paso 3: Multiplicamos: 2² x 5 = 4 x 5 = 20. Solución: MCD(40, 60) = 20.',
      'Ejemplo 4 (Problema de coincidencia periódica con MCM): Dos campanas escolares suenan cada 6 y cada 8 minutos respectivamente. Si sonaron juntas a las 8:00 a.m., ¿cuándo volverán a sonar juntas? Paso 1: Hallamos MCM(6, 8): 6 = 2 x 3 y 8 = 2³; MCM = 2³ x 3 = 24 minutos. Paso 2: Sumamos 24 minutos a las 8:00 a.m. Solución: Volverán a sonar juntas exactamente a las 8:24 a.m.',
      'Ejemplo 5 (Verificación de la relación fundamental): Comprobar que MCM(15, 20) x MCD(15, 20) = 15 x 20. Paso 1: MCM(15, 20) = 60 y MCD(15, 20) = 5. Paso 2: Calculamos el producto: 60 x 5 = 300. Paso 3: Multiplicamos los números originales: 15 x 20 = 300. Solución: Se verifica exactamente la igualdad fundamental 300 = 300.'
    ]
  ),
];

const u2Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u02-l01',
    '2.1',
    'Suma de los ángulos internos de un polígono y polígonos regulares',
    'Un grupo de estudiantes de quinto grado en Cojutepeque construye señales de seguridad vial con láminas de aluminio en forma de cuadriláteros, pentágonos y hexágonos. Saben con certeza que los tres ángulos internos de cualquier triángulo suman exactamente 180 grados, pero desean calcular cuánto suman los ángulos internos de un cuadrilátero, de un pentágono y de cualquier polígono regular de n lados trazando diagonales desde un único vértice. ¿Cuál es el método geométrico de triangulación para deducir la fórmula general y cuánto mide cada ángulo interno en un polígono regular?',
    'Para deducir la suma de los ángulos internos elegimos un vértice fijo del polígono y trazamos todas las diagonales posibles hacia los vértices no adyacentes. Al hacerlo en un cuadrilátero de 4 lados se forman 2 triángulos; como cada triángulo suma 180 grados, la suma total es 2 por 180, es decir, 360 grados. En un pentágono de 5 lados se trazan dos diagonales que dividen la figura en 3 triángulos; por lo tanto, la suma total de sus ángulos interiores es 3 por 180, lo que resulta en 540 grados. En un hexágono de 6 lados se forman 4 triángulos, sumando 4 por 180 igual a 720 grados. En general, en cualquier polígono de n lados el número de triángulos formados desde un vértice es n menos dos. Si el polígono es regular, todos sus lados son iguales y todos sus ángulos internos tienen exactamente la misma medida, por lo que dividimos la suma total entre el número n de ángulos.',
    'La suma de los ángulos internos de cualquier polígono convexo de $n$ lados se obtiene mediante la fórmula general de triangulación: $$S_i = (n - 2) \\times 180^{\\circ}$$ Un **polígono regular** es aquel que es equilátero (todos sus lados de igual longitud) y equiángulo (todos sus ángulos interiores de igual medida). En un polígono regular de $n$ lados, la medida de cada ángulo interior individual viene dada por: $$\\theta = \\frac{S_i}{n} = \\frac{(n - 2) \\times 180^{\\circ}}{n}$$ Además, la suma de los ángulos externos de cualquier polígono convexo es siempre igual a $360^{\\circ}$.',
    'Para un triángulo ($n=3$): $S_i = 180^{\\circ}$; para un pentágono ($n=5$): $S_i = (5-2) \\times 180^{\\circ} = 540^{\\circ}$, y cada ángulo mide $108^{\\circ}$.',
    [
      { exercise: 'Calcula la suma de los ángulos internos de un heptágono (polígono de 7 lados).', hint: 'Aplica Si = (7 - 2) x 180°.', answer: '900°' },
      { exercise: '¿Cuánto mide cada ángulo interno de un octógono regular?', hint: 'Divide la suma de 1,080° entre 8.', answer: '135°' }
    ],
    [
      'Ejemplo 1 (Suma de ángulos internos de un cuadrilátero): Demostrar analíticamente cuánto suman los ángulos de un trapecio. Paso 1: Identificamos el número de lados n = 4. Paso 2: Aplicamos la fórmula: Si = (4 - 2) x 180° = 2 x 180°. Solución: La suma de los ángulos internos de cualquier cuadrilátero es siempre 360°.',
      'Ejemplo 2 (Suma de ángulos de un octógono): Calcular la suma de los ángulos interiores de una señal de alto de 8 lados. Paso 1: Identificamos n = 8. Paso 2: Calculamos los triángulos formados: 8 - 2 = 6. Paso 3: Multiplicamos por 180°: 6 x 180° = 1,080°. Solución: La suma total es 1,080°.',
      'Ejemplo 3 (Medida del ángulo interior de un pentágono regular): Determinar cuánto mide cada ángulo en un pentágono regular. Paso 1: Calculamos la suma total: Si = (5 - 2) x 180° = 3 x 180° = 540°. Paso 2: Dividimos entre el número de ángulos (5): 540° / 5 = 108°. Solución: Cada ángulo interno mide exactamente 108°.',
      'Ejemplo 4 (Medida del ángulo interior de un hexágono regular): Calcular el valor de un ángulo interno en un hexágono regular. Paso 1: Calculamos la suma: Si = (6 - 2) x 180° = 4 x 180° = 720°. Paso 2: Dividimos entre 6 ángulos: 720° / 6 = 120°. Solución: Cada ángulo interno de un hexágono regular mide 120°.',
      'Ejemplo 5 (Cálculo del ángulo desconocido en un pentágono irregular): Un pentágono tiene cuatro ángulos conocidos de 100°, 110°, 120° y 90°. Hallar el quinto ángulo. Paso 1: La suma total de un pentágono es 540°. Paso 2: Sumamos los ángulos conocidos: 100° + 110° + 120° + 90° = 420°. Paso 3: Restamos de 540°: 540° - 420° = 120°. Solución: El ángulo desconocido mide 120°.'
    ]
  ),
];

const u3Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u03-l01',
    '3.1',
    'Multiplicación y división de números decimales por números naturales',
    'En una cooperativa de artesanos de San Sebastián se compran 8 carretes de hilo especial de algodón para telares artesanales. Cada carrete tiene un costo de dos dólares con setenta y cinco centavos ($2.75). Además, para repartir un rollo de tela que mide 14.7 metros en 6 manteles individuales de exactamente la misma longitud, los artesanos deben cortar la tela sin desperdicio. ¿Cuánto dinero gastaron en los 8 carretes de hilo y cuánto mide de largo cada uno de los manteles resultantes?',
    'Para resolver la primera situación multiplicamos el número decimal 2.75 por el número natural 8. Primero multiplicamos los números ignorando temporalmente el punto decimal como si fueran números naturales: 275 multiplicado por 8 da como producto 2,200. Luego contamos la cantidad de cifras decimales que tiene el factor decimal: 2.75 tiene exactamente dos cifras decimales. Colocamos el punto decimal en el producto final contando dos lugares de derecha a izquierda: 22.00, lo que equivale a 22 dólares exactos. Para resolver la segunda situación dividimos el dividendo decimal 14.7 entre el divisor natural 6. Dividimos primero la parte entera: 14 entre 6 es igual a 2, con residuo 2. Antes de bajar la primera cifra decimal (el 7), colocamos obligatoriamente el punto decimal en el cociente. Bajamos el 7, formando 27 décimas. 27 entre 6 es 4 (4 por 6 es 24), quedando 3 de residuo. Agregamos un cero para continuar dividiendo centésimas: 30 entre 6 es 5, con residuo cero. Por lo tanto, cada mantel mide 2.45 metros.',
    'Para **multiplicar un número decimal por un número natural**, se realiza la multiplicación como si ambos fueran números naturales y en el producto resultante se separa con el punto decimal tantas cifras de derecha a izquierda como cifras decimales tenga el factor decimal: $$a.bc \\times n = \\frac{abc \\times n}{100}$$ Para **dividir un número decimal entre un número natural**, se divide primero la parte entera y, en el instante preciso de bajar la primera cifra decimal del dividendo, se coloca el punto decimal en el cociente, continuando luego la división normalmente agregando ceros al residuo si se requiere mayor precisión.',
    'Al multiplicar 3.25 x 4 se obtiene 13.00 = 13; al dividir 14.7 entre 6 se obtiene 2.45.',
    [
      { exercise: 'Calcula el producto de 4.15 multiplicado por 6.', hint: 'Multiplica 415 x 6 y separa dos cifras decimales.', answer: '24.90 = 24.9' },
      { exercise: 'Divide 9.6 entre 8 en forma vertical.', hint: 'Divide 9 entre 8, coloca el punto en el cociente y baja el 6.', answer: '1.2' }
    ],
    [
      'Ejemplo 1 (Multiplicación decimal por una cifra entera): Multiplicar 3.42 por 5 en forma vertical. Paso 1: Multiplicamos como números enteros: 342 x 5 = 1,710. Paso 2: Como 3.42 tiene dos cifras decimales, separamos dos cifras desde la derecha. Solución: 3.42 x 5 = 17.10 = 17.1.',
      'Ejemplo 2 (Multiplicación con ceros a la izquierda en el resultado): Multiplicar 0.04 por 6. Paso 1: Multiplicamos los enteros: 4 x 6 = 24. Paso 2: El factor decimal tiene dos cifras decimales; colocamos el punto dos lugares a la izquierda completando con cero entero. Solución: 0.04 x 6 = 0.24.',
      'Ejemplo 3 (División de decimal entre natural con residuo cero): Dividir 8.52 entre 4. Paso 1: Dividimos la parte entera: 8 / 4 = 2 (residuo 0). Paso 2: Colocamos el punto en el cociente y bajamos el 5. Paso 3: 5 / 4 = 1 (residuo 1); bajamos el 2, formando 12. Paso 4: 12 / 4 = 3 (residuo 0). Solución: 8.52 / 4 = 2.13.',
      'Ejemplo 4 (División donde la parte entera es menor que el divisor): Dividir 1.8 entre 5. Paso 1: Como la parte entera 1 es menor que 5, colocamos 0 en el cociente seguido del punto decimal. Paso 2: Tomamos 18 décimas: 18 / 5 = 3 (3 x 5 = 15, residuo 3). Paso 3: Agregamos un cero al residuo: 30 / 5 = 6 (residuo 0). Solución: 1.8 / 5 = 0.36.',
      'Ejemplo 5 (Problema aplicado de costo unitario): Si 4 cuadernos iguales costaron en total 7.40 dólares, ¿cuánto costó cada uno? Paso 1: Dividimos 7.40 entre 4. Parte entera: 7 / 4 = 1 (residuo 3). Paso 2: Ponemos punto en el cociente y bajamos el 4: 34 / 4 = 8 (residuo 2). Paso 3: Bajamos el 0: 20 / 4 = 5 (residuo 0). Solución: Cada cuaderno costó 1.85 dólares.'
    ]
  ),
];

const u4Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u04-l01',
    '4.1',
    'Lectura, construcción e interpretación de gráficas de líneas',
    'Una estación de monitoreo ambiental del Ministerio de Medio Ambiente en Ilopango registra la temperatura ambiente cada dos horas desde las 6:00 a.m. hasta las 4:00 p.m. durante un día soleado de marzo. Los datos recolectados son: 20 °C a las 6:00 a.m., 24 °C a las 8:00 a.m., 28 °C a las 10:00 a.m., 32 °C a las 12:00 m., 32 °C a las 2:00 p.m. y 29 °C a las 4:00 p.m. ¿Cómo se construye una gráfica de líneas para representar estos cambios continuos de temperatura en el tiempo y cómo se interpretan la inclinación de los segmentos y los cortes de escala?',
    'Para construir la gráfica de líneas trazamos dos ejes perpendiculares en una cuadrícula. En el eje horizontal (eje de las abscisas) ubicamos la variable de tiempo a intervalos constantes: 6:00 a.m., 8:00 a.m., 10:00 a.m., 12:00 m., 2:00 p.m. y 4:00 p.m. En el eje vertical (eje de las ordenadas) ubicamos la escala de temperatura graduada de dos en dos grados. Si los datos inician en un valor alejado de cero, podemos utilizar un corte de escala (símbolo de línea en zigzag o corte de eje) para omitir valores que no se utilizan y ampliar la visualización de los cambios. Marcamos cada punto según la intersección de la hora y la temperatura correspondiente. Luego unimos los puntos consecutivos mediante segmentos rectos. Al interpretar la gráfica: una línea ascendente hacia la derecha indica que la temperatura aumenta (como entre las 6:00 a.m. y las 12:00 m.); una línea horizontal indica que el valor se mantiene constante (entre las 12:00 m. y las 2:00 p.m.); y una línea descendente indica que la temperatura disminuye (entre las 2:00 p.m. y las 4:00 p.m.).',
    'La **gráfica de líneas** es un tipo de representación gráfica idónea para mostrar los cambios continuos que experimenta una variable numérica a lo largo de un período continuo de tiempo. Sus componentes fundamentales son: el **eje horizontal** (variable independiente continua: tiempo), el **eje vertical** (magnitud medida con escala uniforme), los **segmentos de unión** (cuya pendiente refleja la rapidez de cambio) y el **corte de escala** (símbolo de interrupción que permite concentrar la visualización en el rango útil sin distorsionar los datos).',
    'Una línea ascendente refleja aumento de la variable; una horizontal, estabilidad; y un descenso, disminución del valor temporal.',
    [
      { exercise: '¿Qué significa que un segmento en una gráfica de líneas descienda de izquierda a derecha?', hint: 'Relaciona la dirección con la disminución de la variable.', answer: 'Significa que el valor de la variable está disminuyendo en ese intervalo' },
      { exercise: 'Si a las 8:00 a.m. marcaba 18 °C y a las 10:00 a.m. marcaba 26 °C, ¿cuál fue el aumento de temperatura?', hint: 'Resta 26 - 18.', answer: 'Aumentó 8 °C' }
    ],
    [
      'Ejemplo 1 (Lectura de tendencia en gráfica de líneas): Una línea sube de 15 a 25 en el primer intervalo y de 25 a 27 en el segundo. Comparar la rapidez del cambio. Paso 1: En el primer intervalo el cambio es de 25 - 15 = 10 unidades. Paso 2: En el segundo intervalo el cambio es de 27 - 25 = 2 unidades. Solución: La variable aumentó mucho más rápido en el primer intervalo, lo que se aprecia en una pendiente más empinada.',
      'Ejemplo 2 (Identificación de periodos constantes): En una gráfica de peso corporal la línea se mantiene completamente horizontal entre los meses 3 y 5. Interpretar la situación. Paso 1: Observamos que no hay elevación ni descenso en el eje vertical. Solución: El peso del paciente permaneció constante sin variación durante esos dos meses.',
      'Ejemplo 3 (Uso del corte de escala en eje vertical): Los datos de estatura de un grupo van de 140 cm a 155 cm. Explicar por qué conviene usar corte de escala. Paso 1: Si iniciamos en cero de 10 en 10, el espacio de 0 a 140 cm queda vacío y la variación de 140 a 155 cm se ve muy pequeña. Paso 2: Al cortar el eje entre 0 y 140 cm, podemos graduar de 2 en 2 cm. Solución: El corte de escala permite visualizar con claridad pequeñas variaciones.',
      'Ejemplo 4 (Determinación de valor máximo y mínimo): Una gráfica de precipitaciones mensuales muestra su punto más alto en junio (350 mm) y el más bajo en enero (10 mm). Calcular la amplitud de variación. Paso 1: Restamos el valor mínimo del máximo: 350 - 10 = 340 mm. Solución: La variación pluviométrica total fue de 340 milímetros.',
      'Ejemplo 5 (Comparación de dos líneas simultáneas): En una gráfica con dos líneas (temperatura diurna y nocturna), a las 3:00 p.m. la diurna marca 30 °C y la nocturna marca 18 °C. Paso 1: Calculamos la diferencia vertical entre ambas líneas: 30 - 18 = 12 °C. Solución: La amplitud térmica entre el día y la noche en ese instante fue de 12 grados Celsius.'
    ]
  ),
];

const u5Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u05-l01',
    '5.1',
    'Multiplicación y división de números decimales por números decimales',
    'Un agricultor de Zapotitán tiene una parcela rectangular de hortalizas que mide 3.6 metros de ancho por 4.25 metros de largo. Para fertilizar la tierra de manera tecnificada necesita calcular con exactitud la superficie en metros cuadrados. Además, dispone de un bidón con 8.75 litros de fertilizante líquido orgánico y desea repartirlo en frascos dosificadores con capacidad de 0.25 litros cada uno. ¿Cuál es el área total de la parcela y cuántos frascos dosificadores completos se pueden llenar con el fertilizante disponible?',
    'Para calcular el área de la parcela multiplicamos 4.25 por 3.6. Primero multiplicamos los dos factores ignorando los puntos decimales como si fueran números enteros: 425 multiplicado por 36. Multiplicamos 425 por 6 (unidades), obteniendo 2,550; luego multiplicamos 425 por 3 (decenas), obteniendo 1,275 decenas (12,750). Sumamos ambos productos parciales: 2,550 más 12,750 da como resultado 15,300. Ahora sumamos la cantidad de cifras decimales de ambos factores: 4.25 tiene dos cifras decimales y 3.6 tiene una cifra decimal; 2 más 1 suma un total de tres cifras decimales. Colocamos el punto en el producto contando tres lugares de derecha a izquierda: 15.300, lo que equivale a 15.3 metros cuadrados. Para la división de 8.75 entre 0.25, transformamos el divisor en número natural multiplicando dividendo y divisor por 100 (amplificación): 8.75 por 100 es 875, y 0.25 por 100 es 25. Dividimos 875 entre 25: 87 entre 25 es 3 (residuo 12); bajamos el 5, formando 125; 125 entre 25 es 5 con residuo cero. Por lo tanto, se pueden llenar exactamente 35 frascos dosificadores.',
    'Al **multiplicar dos números decimales**, se multiplican como números enteros y en el producto final se separan tantas cifras decimales como la suma de las cifras decimales que tengan ambos factores: $$\\text{Cifras decimales del producto} = c_1 + c_2$$ Al **dividir números decimales**, la regla fundamental exige que el divisor sea transformado en número natural multiplicando tanto el dividendo como el divisor por $10$, $100$ o $1,000$ según la cantidad de cifras decimales del divisor: $$\\frac{D}{d} = \\frac{D \\times 10^k}{d \\times 10^k}$$ Una vez que el divisor es un número entero, se efectúa la división aplicando el algoritmo usual.',
    'Para 2.4 x 3.5: 24 x 35 = 840 (dos cifras decimales) = 8.40; para 8.75 / 0.25 = 875 / 25 = 35.',
    [
      { exercise: 'Calcula el producto de 3.25 por 0.4.', hint: 'Multiplica 325 por 4 y separa tres cifras decimales.', answer: '1.300 = 1.3' },
      { exercise: 'Efectúa la división: 6.4 entre 0.16.', hint: 'Multiplica ambos términos por 100 para obtener 640 entre 16.', answer: '40' }
    ],
    [
      'Ejemplo 1 (Multiplicación de dos factores con una cifra decimal): Multiplicar 2.4 por 1.5 en forma vertical. Paso 1: Multiplicamos como enteros: 24 x 15 = 360. Paso 2: Sumamos las cifras decimales: 1 + 1 = 2 cifras decimales. Paso 3: Separamos dos cifras desde la derecha: 3.60 = 3.6. Solución: 2.4 x 1.5 = 3.6.',
      'Ejemplo 2 (Multiplicación con resultado menor que uno): Multiplicar 0.3 por 0.2. Paso 1: Multiplicamos enteros: 3 x 2 = 6. Paso 2: Sumamos cifras decimales: 1 + 1 = 2 cifras. Paso 3: Colocamos un cero a la izquierda para completar las dos cifras: 0.06. Solución: 0.3 x 0.2 = 0.06.',
      'Ejemplo 3 (División con divisor de una cifra decimal): Dividir 7.2 entre 0.8. Paso 1: Como el divisor tiene una cifra decimal, multiplicamos dividendo y divisor por 10: 72 y 8. Paso 2: Dividimos: 72 / 8 = 9 con residuo 0. Solución: 7.2 / 0.8 = 9.',
      'Ejemplo 4 (División de un natural entre un decimal): Resolver 12 dividido entre 0.5. Paso 1: Multiplicamos ambos términos por 10: 12 x 10 = 120 y 0.5 x 10 = 5. Paso 2: Dividimos 120 entre 5: 120 / 5 = 24. Solución: 12 / 0.5 = 24.',
      'Ejemplo 5 (División donde el dividendo tiene menos cifras decimales que el divisor): Dividir 4.5 entre 0.15. Paso 1: El divisor 0.15 tiene 2 cifras decimales, multiplicamos ambos por 100: 4.5 x 100 = 450 y 0.15 x 100 = 15. Paso 2: Dividimos 450 entre 15: 450 / 15 = 30. Solución: 4.5 / 0.15 = 30.'
    ]
  ),
];

const u6Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u06-l01',
    '6.1',
    'Cantidad por unidad, densidad poblacional y rapidez',
    'En un estudio geográfico escolar en el departamento de La Libertad se comparan dos municipios: el Municipio A tiene una población de 48,000 habitantes distribuidos en un territorio de 32 kilómetros cuadrados, mientras que el Municipio B tiene 35,000 habitantes en un área de 20 kilómetros cuadrados. Al mismo tiempo, un autobús interurbano recorre una distancia de 150 kilómetros sobre la carretera Litoral en 2.5 horas a velocidad constante. ¿Cuál de los dos municipios tiene mayor concentración de habitantes por kilómetro cuadrado y cuál fue la rapidez promedio del autobús?',
    'Para resolver este problema aplicamos el concepto matemático de cantidad por unidad, que compara dos magnitudes heterogéneas mediante su cociente para establecer un estándar unitario común. Para la densidad poblacional dividimos la cantidad total de personas entre la superficie territorial en kilómetros cuadrados. En el Municipio A dividimos 48,000 habitantes entre 32 km², lo que da exactamente 1,500 habitantes por kilómetro cuadrado. En el Municipio B dividimos 35,000 habitantes entre 20 km², lo que resulta en 1,750 habitantes por kilómetro cuadrado. Al comparar ambas tasas unitarias se concluye que el Municipio B está más densamente poblado que el Municipio A, a pesar de tener menor población absoluta. Para la rapidez del autobús relacionamos la distancia recorrida con el tiempo empleado mediante la fórmula de rapidez: dividimos 150 kilómetros entre 2.5 horas; amplificamos por diez para dividir 1,500 entre 25, obteniendo exactamente 60 kilómetros por hora.',
    'La **cantidad por unidad** es una razón que expresa cuántas unidades de una primera magnitud corresponden a exactamente una unidad de una segunda magnitud de referencia. Fórmulas fundamentales oficiales del MINED: $$\\text{Densidad poblacional} = \\frac{\\text{Número de habitantes}}{\\text{Área territorial (km}^2)}, \\qquad v = \\frac{d}{t}$$ Donde $v$ es la rapidez, $d$ es la distancia y $t$ es el tiempo. A partir de la rapidez se deducen por despeje algebraico directo las fórmulas para distancia y tiempo: $d = v \\times t$ y $t = \\frac{d}{v}$.',
    'Un auto que viaja 120 km en 2 horas tiene rapidez v = 120 / 2 = 60 km/h; en San Salvador viven 300,000 personas en 72 km².',
    [
      { exercise: 'Calcula la densidad de una comunidad con 12,000 personas que habitan en un territorio de 8 km².', hint: 'Divide 12,000 entre 8.', answer: '1,500 habitantes por km²' },
      { exercise: 'Si un automóvil viaja a 80 km/h durante 4 horas, ¿qué distancia recorre?', hint: 'Multiplica rapidez por tiempo (80 x 4).', answer: '320 kilómetros' }
    ],
    [
      'Ejemplo 1 (Cálculo de densidad poblacional): Un aula de 40 metros cuadrados alberga a 30 estudiantes. Hallar el espacio por estudiante y la densidad. Paso 1: Calculamos metros cuadrados por alumno: 40 / 30 ≈ 1.33 m²/alumno. Paso 2: Calculamos alumnos por metro cuadrado: 30 / 40 = 0.75 alumnos/m². Solución: La densidad es de 0.75 estudiantes por metro cuadrado.',
      'Ejemplo 2 (Cálculo de rapidez en movimiento rectilíneo): Un automóvil recorre 210 kilómetros en 3 horas en la carretera Panamericana. Calcular su rapidez media. Paso 1: Identificamos distancia d = 210 km y tiempo t = 3 h. Paso 2: Aplicamos la fórmula v = d / t: 210 / 3 = 70. Solución: La rapidez del vehículo es de 70 km/h.',
      'Ejemplo 3 (Cálculo de distancia recorrida): Un ciclista entrena manteniendo una rapidez constante de 18 km/h durante 3.5 horas. ¿Qué distancia total recorrió? Paso 1: Usamos la fórmula despejada d = v x t. Paso 2: Multiplicamos 18 x 3.5 = 63. Solución: El ciclista recorrió 63 kilómetros.',
      'Ejemplo 4 (Cálculo del tiempo de viaje): Un tren de carga debe recorrer 180 km viajando a una rapidez media constante de 45 km/h. ¿Cuántas horas tardará? Paso 1: Usamos la fórmula despejada t = d / v. Paso 2: Dividimos 180 entre 45: 180 / 45 = 4. Solución: El tiempo de viaje es exactamente de 4 horas.',
      'Ejemplo 5 (Rendimiento agrícola por unidad de superficie): Una parcela de 5 manzanas produce 350 quintales de maíz. ¿Cuál es el rendimiento por manzana? Paso 1: Dividimos la producción total entre el área: 350 / 5 = 70. Solución: El rendimiento de la parcela es de 70 quintales por manzana.'
    ]
  ),
];

const u7Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u07-l01',
    '7.1',
    'Equivalencia de monedas centroamericanas y diseño de presupuestos familiares',
    'Una familia salvadoreña en Sonsonate planifica sus finanzas del mes para administrar responsablemente sus recursos. Tienen ingresos mensuales comprobados que suman 750 dólares, provenientes de un sueldo laboral y un emprendimiento de panadería artesanal. Sus egresos presupuestados son: 320 dólares en alimentación, 160 dólares en vivienda y servicios básicos, 90 dólares en educación y transporte, y 60 dólares en imprevistos médicos. Además, el padre viaja a Guatemala y Honduras por negocios y necesita conocer el valor de cambio entre dólares estadounidenses y quetzales o lempiras. ¿Cómo se elabora un presupuesto balanceado, cuánto dinero pueden destinar al ahorro y cómo funciona la conversión monetaria?',
    'Para diseñar el presupuesto familiar ordenamos los datos financieros en dos columnas claramente diferenciadas: ingresos y egresos. Primero totalizamos los ingresos familiares, que ascienden a 750 dólares. Luego sumamos todos los egresos proyectados del mes: 320 más 160 más 90 más 60 da un total de 630 dólares en gastos necesarios. Para calcular el saldo disponible restamos los egresos de los ingresos: 750 menos 630 es igual a 120 dólares. Como los ingresos superan a los egresos, el presupuesto presenta un saldo positivo o superávit, el cual se destina al fondo de ahorro familiar para metas futuras o emergencias. Para la conversión de monedas, si un dólar equivale aproximadamente a 7.75 quetzales guatemaltecos (GTQ), para convertir dólares a quetzales multiplicamos la cantidad de dólares por la tasa de cambio; por ejemplo, 50 dólares equivalen a 50 multiplicado por 7.75, es decir, 387.50 quetzales.',
    'Un **presupuesto** es una herramienta financiera estructurada que permite planificar y controlar los ingresos y gastos durante un período determinado. La relación fundamental del balance financiero es: $$\\text{Saldo} = \\text{Ingresos totales} - \\text{Egresos totales}$$ Si $\\text{Ingresos} > \\text{Egresos}$, hay superávit y capacidad de ahorro; si $\\text{Ingresos} < \\text{Egresos}$, hay déficit. La **conversión monetaria** se calcula mediante el tipo de cambio: $\\text{Moneda local} = \\text{Dólares} \\times \\text{Tipo de cambio}$.',
    'Con ingresos de 600 dólares y egresos de 500 dólares, el saldo para ahorro es de 100 dólares mensuales; 1 USD equivale a unos 7.80 GTQ.',
    [
      { exercise: 'Si una persona gana 500 dólares y sus gastos fijos suman 385 dólares, ¿cuánto dinero le queda para ahorrar?', hint: 'Resta 500 - 385.', answer: '115 dólares de saldo para ahorro' },
      { exercise: 'Convierte 40 dólares a quetzales si la tasa es de 7.70 quetzales por cada dólar.', hint: 'Multiplica 40 x 7.70.', answer: '308 quetzales' }
    ],
    [
      'Ejemplo 1 (Cálculo de balance en presupuesto con déficit): Una persona tiene ingresos de 400 dólares y egresos de 450 dólares. Analizar su situación financiera. Paso 1: Restamos ingresos menos egresos: 400 - 450 = -50 dólares. Paso 2: Interpretamos el saldo negativo. Solución: Presenta un déficit de 50 dólares, por lo que debe reducir gastos no esenciales.',
      'Ejemplo 2 (Plan de ahorro para una meta específica): Una familia ahorra 80 dólares cada mes para comprar una computadora que cuesta 480 dólares. ¿En cuántos meses logrará su meta? Paso 1: Dividimos el costo total entre el ahorro mensual: 480 / 80 = 6. Solución: Logrará comprar la computadora en exactamente 6 meses.',
      'Ejemplo 3 (Conversión de dólares a quetzales guatemaltecos): Si la tasa de cambio es 1 USD = 7.80 GTQ, ¿cuántos quetzales se reciben por 100 dólares? Paso 1: Multiplicamos los dólares por la tasa: 100 x 7.80 = 780. Solución: Se reciben 780 quetzales.',
      'Ejemplo 4 (Conversión de lempiras hondureños a dólares): Si la tasa de cambio es 1 USD = 24.50 HNL, ¿cuántos dólares equivalen 490 lempiras? Paso 1: Dividimos la cantidad de lempiras entre la tasa de cambio: 490 / 24.50 = 20. Solución: 490 lempiras equivalen exactamente a 20 dólares estadounidenses.',
      'Ejemplo 5 (Ajuste presupuestario ante un gasto imprevisto): Un hogar tiene saldo disponible de 150 dólares, pero surge una reparación de tubería de 95 dólares. ¿Cuál es el nuevo saldo de ahorro? Paso 1: Restamos el imprevisto del saldo anterior: 150 - 95 = 55. Solución: El nuevo saldo para ahorro es de 55 dólares.'
    ]
  ),
];

const u8Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u08-l01',
    '8.1',
    'Área de paralelogramos, triángulos, rombos y trapecios',
    'En un proyecto escolar de geometría aplicada en Cuscatlán, los estudiantes diseñan banderas y estandartes con diferentes formas poligonales. Uno de los estandartes tiene forma de paralelogramo con una base de 14 centímetros y una altura perpendicular de 9 centímetros; otro estandarte es un triángulo con base de 12 centímetros y altura de 8 centímetros; y una insignia decorativa tiene forma de rombo cuyas diagonales miden 10 centímetros y 6 centímetros. ¿Cómo se deducen geométricamente las fórmulas para calcular el área de estas figuras a partir del rectángulo y cuál es la superficie exacta de cada una?',
    'Para deducir el área del paralelogramo cortamos un triángulo rectángulo de uno de sus extremos y lo trasladamos al extremo opuesto; la figura se transforma exactamente en un rectángulo con la misma base y la misma altura. Por tanto, el área del paralelogramo es base por altura: 14 multiplicado por 9 es igual a 126 centímetros cuadrados. Para el triángulo, si unimos dos triángulos congruentes iguales, se forma un paralelogramo completo cuya superficie es base por altura; dado que el triángulo es exactamente la mitad de ese paralelogramo, su fórmula es base por altura dividido entre dos: 12 por 8 es 96, y 96 entre 2 da 48 centímetros cuadrados. Para el rombo, al inscribirlo en un rectángulo delimitado por sus diagonales mayor D y menor d, el rombo ocupa exactamente la mitad del área del rectángulo envolvente; por lo tanto, su fórmula es diagonal mayor por diagonal menor dividido entre dos: 10 por 6 es 60, y 60 entre 2 da 30 centímetros cuadrados.',
    'Las fórmulas oficiales del MINED para el cálculo de áreas de polígonos fundamentales se deducen por descomposición y recomposición de figuras rectangulares: $$A_{\\text{paral}} = b \\times h, \\qquad A_{\\triangle} = \\frac{b \\times h}{2}, \\qquad A_{\\text{rombo}} = \\frac{D \\times d}{2}, \\qquad A_{\\text{trap}} = \\frac{(B + b) \\times h}{2}$$ Donde $B$ es la base mayor, $b$ es la base menor, $h$ es la altura perpendicular y $D, d$ son las diagonales del rombo. Todas las medidas deben expresarse en la misma unidad antes de calcular.',
    'Un trapecio con bases de 12 m y 8 m y altura de 5 m tiene área A = (12 + 8) x 5 / 2 = 50 m².',
    [
      { exercise: 'Calcula el área de un trapecio cuyas bases miden 14 cm y 8 cm y su altura es de 5 cm.', hint: 'Aplica A = (B + b) x h / 2.', answer: '55 centímetros cuadrados' },
      { exercise: 'Encuentra el área de un rombo con diagonal mayor de 16 cm y diagonal menor de 7 cm.', hint: 'Multiplica 16 x 7 y divide entre 2.', answer: '56 centímetros cuadrados' }
    ],
    [
      'Ejemplo 1 (Área de paralelogramo con altura interior): Un terreno en forma de paralelogramo tiene 25 metros de base y una altura de 12 metros. Calcular su área. Paso 1: Identificamos base b = 25 m y altura h = 12 m. Paso 2: Multiplicamos b x h: 25 x 12 = 300. Solución: El área es de 300 metros cuadrados.',
      'Ejemplo 2 (Área de triángulo rectángulo): Un triángulo rectángulo tiene catetos que miden 9 cm y 14 cm. Calcular su área. Paso 1: En un triángulo rectángulo los catetos son la base y la altura: b = 14 cm y h = 9 cm. Paso 2: Calculamos (b x h) / 2: (14 x 9) / 2 = 126 / 2 = 63. Solución: El área es de 63 centímetros cuadrados.',
      'Ejemplo 3 (Área de un trapecio de regadío): Un bancal en forma de trapecio tiene bases de 16 m y 10 m, con una altura de 6 m. Paso 1: Sumamos las bases B + b = 16 + 10 = 26 m. Paso 2: Multiplicamos por la altura: 26 x 6 = 156. Paso 3: Dividimos entre 2: 156 / 2 = 78. Solución: El área del trapecio es de 78 metros cuadrados.',
      'Ejemplo 4 (Área de un rombo en artesanía): Un rombo decorativo tiene diagonales de 18 cm y 12 cm. Hallar su superficie. Paso 1: Identificamos D = 18 cm y d = 12 cm. Paso 2: Aplicamos (D x d) / 2: (18 x 12) / 2 = 216 / 2 = 108. Solución: El área del rombo es de 108 centímetros cuadrados.',
      'Ejemplo 5 (Despeje de la base de un triángulo con área dada): Un triángulo tiene un área de 45 cm² y una altura de 6 cm. Calcular su base. Paso 1: De A = (b x h) / 2 despejamos b = (2 x A) / h. Paso 2: Sustituimos: (2 x 45) / 6 = 90 / 6 = 15. Solución: La base del triángulo mide 15 centímetros.'
    ]
  ),
];

const u9Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u09-l01',
    '9.1',
    'Unidades de medida del sistema inglés y tradicionales en El Salvador',
    'En un mercado mayorista de cereales y ferretería en Ahuachapán, los comerciantes utilizan cotidianamente unidades del sistema inglés y unidades agrarias tradicionales salvadoreñas. Un agricultor compra tres quintales de fertilizante en polvo empacados en sacos y necesita saber cuántas arrobas y cuántas libras representan en total. Al mismo tiempo, un carpintero compra listones de madera que se comercializan en varas, yardas y pies, requiriendo 12 pies de tabla para construir un mueble escolar. ¿Cómo se relacionan estas unidades tradicionales de peso y longitud entre sí y con el Sistema Internacional de Unidades?',
    'Para resolver este problema identificamos las equivalencias formales del sistema inglés y tradicional contempladas en el currículo de quinto grado. En las unidades de peso o masa tradicionales en El Salvador: una libra equivale a 16 onzas; una arroba está formada por 25 libras; y un quintal está compuesto por 4 arrobas, lo que equivale exactamente a 100 libras (1 quintal = 4 arrobas = 100 libras). Por tanto, para los tres quintales de fertilizante multiplicamos: 3 multiplicado por 4 da 12 arrobas; y 3 multiplicado por 100 da 300 libras de fertilizante. Para las unidades de longitud: un pie equivale a 12 pulgadas (aproximadamente 30.48 centímetros); una yarda equivale a 3 pies (36 pulgadas o 91.44 centímetros); y una vara salvadoreña tradicional equivale aproximadamente a 0.836 metros (o unas 33 pulgadas). Por ende, los 12 pies de tabla que necesita el carpintero equivalen a 4 yardas completas (12 dividido entre 3).',
    'En el comercio y las actividades productivas de El Salvador coexisten unidades del Sistema Internacional y unidades del sistema inglés y tradicional. Equivalencias fundamentales oficiales: $$1\\text{ quintal (qq)} = 4\\text{ arrobas (@)} = 100\\text{ libras (lb)}, \\qquad 1\\text{ lb} = 16\\text{ onzas (oz)}$$ $$1\\text{ yarda (yd)} = 3\\text{ pies (ft)} = 36\\text{ pulgadas (in)}, \\qquad 1\\text{ vara (v)} \\approx 0.836\\text{ m}$$ Para convertir de una unidad mayor a una menor se multiplica por el factor de conversión; para pasar de menor a mayor se divide.',
    'Un quintal equivale a 100 libras (4 arrobas de 25 lb); una yarda equivale a 3 pies (36 pulgadas).',
    [
      { exercise: '¿Cuántas libras equivalen a 6 arrobas de maíz?', hint: 'Multiplica 6 por 25.', answer: '150 libras' },
      { exercise: 'Una cuerda de tender mide 18 pies. ¿A cuántas yardas equivale?', hint: 'Divide 18 entre 3.', answer: '6 yardas' }
    ],
    [
      'Ejemplo 1 (Conversión de arrobas a libras): ¿Cuántas libras hay en 7 arrobas de café? Paso 1: Identificamos la equivalencia: 1 arroba = 25 libras. Paso 2: Multiplicamos 7 por 25: 7 x 25 = 175. Solución: 7 arrobas equivalen a 175 libras.',
      'Ejemplo 2 (Conversión de libras a quintales): Un camión carga 500 libras de frijol rojo. ¿A cuántos quintales equivale? Paso 1: Identificamos que 1 quintal = 100 libras. Paso 2: Dividimos 500 entre 100: 500 / 100 = 5. Solución: La carga equivale a 5 quintales de frijol.',
      'Ejemplo 3 (Conversión de yardas a pulgadas): Convertir 5 yardas a pulgadas. Paso 1: Convertimos yardas a pies: 5 x 3 = 15 pies. Paso 2: Convertimos pies a pulgadas: 15 x 12 = 180 pulgadas. Solución: 5 yardas equivalen a 180 pulgadas.',
      'Ejemplo 4 (Conversión de pulgadas a centímetros en carpintería): Un clavo mide 3 pulgadas de largo. Si 1 pulgada ≈ 2.54 cm, ¿cuánto mide en centímetros? Paso 1: Multiplicamos 3 por 2.54: 3 x 2.54 = 7.62. Solución: El clavo mide aproximadamente 7.62 centímetros.',
      'Ejemplo 5 (Conversión de varas a metros en cercados rurales): Un cerco perimetral mide 50 varas. Si 1 vara ≈ 0.84 metros, calcular su longitud en metros. Paso 1: Multiplicamos 50 por 0.84: 50 x 0.84 = 42. Solución: El cerco mide aproximadamente 42 metros de longitud.'
    ]
  ),
];

const u10Lessons5G = [
  createPscerLesson(
    'mined-mat-5g-u10-l01',
    '10.1',
    'Suma y resta de fracciones heterogéneas mediante homogeneización con MCM',
    'En un huerto escolar en Chalatenango, los estudiantes preparan una mezcla orgánica de abono para fertilizar parcelas de tomate. Un grupo aporta tres cuartos (3/4) de quintal de compost vegetal y otro grupo aporta dos tercios (2/3) de quintal de abono de lombriz. Para registrar el peso total en el cuaderno de campo deben sumar ambas cantidades, pero observan que las fracciones tienen denominadores distintos (4 y 3). Además, de la mezcla total deciden apartar cinco sextos (5/6) de quintal para un semillero. ¿Cómo se homogenizan fracciones heterogéneas mediante el Mínimo Común Múltiplo de los denominadores para efectuar la suma y la resta?',
    'Para sumar o restar fracciones heterogéneas no podemos operar directamente los numeradores porque las partes tienen tamaños distintos (cuartos, tercios y sextos). El procedimiento oficial consiste en homogeneizar las fracciones, es decir, convertirlas en fracciones equivalentes que compartan exactamente el mismo denominador común. Para encontrar el denominador común más pequeño calculamos el Mínimo Común Múltiplo (MCM) de los denominadores 4 y 3: los múltiplos de 4 son 4, 8, 12, 16... y los de 3 son 3, 6, 9, 12... siendo MCM(4, 3) = 12. Amplificamos tres cuartos multiplicando numerador y denominador por 3: 3 por 3 es 9 y 4 por 3 es 12, obteniendo 9/12. Amplificamos dos tercios multiplicando por 4: 2 por 4 es 8 y 3 por 4 es 12, obteniendo 8/12. Ahora sumamos como fracciones homogéneas: 9/12 más 8/12 es igual a 17/12 de quintal (1 entero y 5/12). Para restar los 5/6 calculamos MCM(12, 6) = 12; como 5/6 equivale a 10/12, restamos 17/12 menos 10/12, obteniendo 7/12 de quintal.',
    'Las **fracciones heterogéneas** poseen diferente denominador. Para efectuar su adición o sustracción se sigue el proceso de **homogeneización**: se calcula el Mínimo Común Múltiplo (MCM) de los denominadores, se convierte cada fracción en su equivalente con denominador igual al MCM y se operan los numeradores: $$\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{a \\cdot (m/b) \\pm c \\cdot (m/d)}{m} \\qquad \\text{donde } m = \\text{MCM}(b, d)$$ El resultado final debe simplificarse a su mínima expresión o convertirse a número mixto si es impropio.',
    'Para sumar 1/4 + 2/3 se halla MCM(4, 3) = 12: 3/12 + 8/12 = 11/12; para 1/2 + 1/3 = 3/6 + 2/6 = 5/6.',
    [
      { exercise: 'Calcula la suma de fracciones: 2/5 + 1/3', hint: 'Homogeneiza encontrando MCM(5, 3) = 15.', answer: '11/15' },
      { exercise: 'Resta las fracciones heterogéneas: 3/4 menos 2/5', hint: 'El MCM de 4 y 5 es 20.', answer: '7/20' }
    ],
    [
      'Ejemplo 1 (Suma de fracciones heterogéneas básicas): Calcular 1/2 + 1/3. Paso 1: Hallamos MCM(2, 3) = 6. Paso 2: Homogeneizamos: 1/2 = 3/6 y 1/3 = 2/6. Paso 3: Sumamos numeradores: 3/6 + 2/6 = 5/6. Solución: 1/2 + 1/3 = 5/6.',
      'Ejemplo 2 (Resta de fracciones heterogéneas): Resolver 5/6 menos 1/4. Paso 1: MCM(6, 4) = 12. Paso 2: Homogeneizamos: 5/6 = 10/12 y 1/4 = 3/12. Paso 3: Restamos: 10/12 - 3/12 = 7/12. Solución: 5/6 - 1/4 = 7/12.',
      'Ejemplo 3 (Suma con resultado impropio y conversión a mixto): Sumar 2/3 + 3/5. Paso 1: MCM(3, 5) = 15. Paso 2: Homogeneizamos: 2/3 = 10/15 y 3/5 = 9/15. Paso 3: Sumamos: 10/15 + 9/15 = 19/15. Paso 4: Convertimos a mixto: 19 / 15 = 1 con residuo 4. Solución: 19/15 = 1 4/15.',
      'Ejemplo 4 (Suma de números mixtos con denominadores distintos): Calcular 1 1/4 + 2 1/3. Paso 1: Sumamos partes enteras: 1 + 2 = 3. Paso 2: Homogeneizamos partes fraccionarias con MCM(4, 3) = 12: 1/4 = 3/12 y 1/3 = 4/12. Paso 3: Sumamos fracciones: 3/12 + 4/12 = 7/12. Solución: 1 1/4 + 2 1/3 = 3 7/12.',
      'Ejemplo 5 (Operación combinada con tres denominadores): Calcular 1/2 + 1/4 - 1/8. Paso 1: Calculamos MCM(2, 4, 8) = 8. Paso 2: Homogeneizamos: 1/2 = 4/8, 1/4 = 2/8 y 1/8 = 1/8. Paso 3: Operamos numeradores: 4 + 2 - 1 = 5. Solución: 5/8.'
    ]
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
