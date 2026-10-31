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
    'Números hasta un millón, valor posicional y descomposición',
    'Durante el censo nacional agropecuario en El Salvador, el Ministerio de Agricultura registró que una región cafetalera cosechó exactamente quinientos cuarenta y dos mil seiscientos ochenta quintales de café en grano. La directiva comunitaria necesita registrar esta cifra en el libro oficial de contabilidad escolar y cooperativa. ¿Cómo se escribe esta cantidad en números, cuál es el valor posicional de cada una de sus cifras y cómo se descompone según sus órdenes decimales?',
    'Para resolver este problema, organizamos la cantidad en la tabla de valor posicional de derecha a izquierda dividida en períodos de tres órdenes. El primer período corresponde a las unidades simples: cero unidades, ocho decenas que equivalen a ochenta unidades y seis centenas que representan seiscientas unidades. El segundo período corresponde a los millares: dos unidades de millar que representan dos mil, cuatro decenas de millar que equivalen a cuarenta mil y cinco centenas de millar que representan quinientos mil. De este modo, la cantidad se escribe formalmente en cifras como 542,680. Al descomponer el número en forma aditiva según el valor posicional de sus dígitos obtenemos la suma de quinientos mil más cuarenta mil más dos mil más seiscientos más ochenta. Esta descomposición confirma que cada posición multiplica su valor por diez respecto a la posición inmediata a su derecha.',
    'El sistema de numeración decimal es posicional y de base diez. Cada seis cifras se completa el período de los millares y se da inicio a los millones. El valor de cada dígito depende estrictamente del lugar que ocupa en la tabla posicional, cumpliendo las equivalencias fundamentales: $$1\\text{ UMi} = 10\\text{ CM} = 100\\text{ DM} = 1,000\\text{ UM} = 1,000,000\\text{ U}$$ Para leer y escribir cantidades de hasta seis cifras, se separan en grupos de tres dígitos con un espacio o coma, leyendo primero la clase de los millares seguida de la palabra mil y finalmente la clase de las unidades.',
    'El número 542,680 se descompone en 5 CM + 4 DM + 2 UM + 6 C + 8 D + 0 U = 500,000 + 40,000 + 2,000 + 600 + 80.',
    [
      { exercise: 'Escribe en cifras el número novecientos cinco mil setecientos treinta y cuatro y descompónlo aditivamente.', hint: 'Coloca un cero en las decenas de millar.', answer: '905,734 = 900,000 + 5,000 + 700 + 30 + 4' },
      { exercise: 'Aproxima el número 482,650 a la centena de millar más cercana.', hint: 'Observa la cifra de las decenas de millar que es 8.', answer: '500,000' }
    ],
    [
      'Ejemplo 1 (Lectura y valor posicional): Escribir en palabras y determinar el valor de la cifra 7 en el número 734,512. Paso 1: Identificamos los períodos del número separando millares y unidades (734 mil y 512). Paso 2: Leemos la cantidad completa como setecientos treinta y cuatro mil quinientos doce. Paso 3: Observamos que el dígito 7 ocupa la posición de las centenas de millar. Solución: La cifra 7 representa 7 centenas de millar, equivalentes a 700,000 unidades simples.',
      'Ejemplo 2 (Descomposición aditiva expandida): Descomponer en forma polinómica o aditiva el número 408,395. Paso 1: Determinamos el valor relativo de cada dígito distinto de cero: 4 centenas de millar (400,000), 8 unidades de millar (8,000), 3 centenas (300), 9 decenas (90) y 5 unidades (5). Paso 2: Escribimos la suma de estos valores posicionales. Solución: La descomposición aditiva formal es 408,395 = 400,000 + 8,000 + 300 + 90 + 5.',
      'Ejemplo 3 (Composición a partir de órdenes de magnitud): Formar el número natural correspondiente a 6 centenas de millar, 3 decenas de millar, 0 unidades de millar, 9 centenas, 4 decenas y 1 unidad. Paso 1: Convertimos cada orden a unidades: 600,000 + 30,000 + 0 + 900 + 40 + 1. Paso 2: Colocamos cada cifra en su casilla posicional respectiva cuidando de colocar cero en los millares. Solución: El número formado es 630,941.',
      'Ejemplo 4 (Comparación de cantidades de seis cifras): Determinar cuál es mayor entre 856,420 y 859,100 utilizando los símbolos de orden. Paso 1: Alineamos ambas cantidades y comparamos de izquierda a derecha cifra por cifra; las centenas de millar (8) y decenas de millar (5) son iguales. Paso 2: Comparamos las unidades de millar: 6 es menor que 9. Solución: Se concluye rigurosamente que 856,420 < 859,100.',
      'Ejemplo 5 (Aproximación a la decena de millar más cercana): Redondear la cantidad de 367,840 habitantes a la decena de millar más próxima. Paso 1: Identificamos el dígito en las decenas de millar, que es 6 (60,000), y observamos el dígito a su derecha en las unidades de millar, que es 7. Paso 2: Como 7 es mayor o igual que 5, aumentamos en una unidad la decena de millar (de 6 a 7) y reemplazamos los órdenes inferiores por ceros. Solución: El número aproximado es 370,000.'
    ]
  ),
];

const u2Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u02-l01',
    '2.1',
    'Clasificación de triángulos y cuadriláteros, y medición de ángulos',
    'En un taller de carpintería escolar en Santa Ana, los estudiantes construyen armazones de madera para techos y ventanas. El profesor entrega tres listones que miden 12 centímetros, 12 centímetros y 12 centímetros para armar una cercha triangular, y cuatro listones para una ventana con lados opuestos iguales dos a dos y ángulos rectos. ¿Cómo se clasifican estas figuras geométricas según la medida de sus lados y ángulos, y cómo se utiliza el transportador para medir sus aberturas?',
    'Para clasificar la primera figura, examinamos la longitud de sus tres lados. Dado que los tres listones tienen exactamente la misma longitud de doce centímetros, la figura corresponde a un triángulo equilátero. Además, en todo triángulo equilátero sus tres ángulos internos son de igual medida, midiendo cada uno exactamente sesenta grados, por lo que también es un triángulo acutángulo. Para la ventana, como posee cuatro lados rectos con lados opuestos paralelos e iguales y sus cuatro ángulos internos miden noventa grados, se clasifica como un rectángulo, perteneciente a la familia de los paralelogramos. Para medir cualquier ángulo con el transportador graduado en grados sexagesimales, colocamos el centro del transportador sobre el vértice de la figura y alineamos la línea del cero con uno de los lados, leyendo la escala donde cruza el segundo lado.',
    'Los triángulos se clasifican según sus lados en: **equiláteros** (tres lados iguales), **isósceles** (dos lados iguales) y **escalenos** (tres lados desiguales). Según sus ángulos interiores se clasifican en: **acutángulos** (tres ángulos agudos menores de $90^{\\circ}$), **rectángulos** (un ángulo recto de $90^{\\circ}$) y **obtusángulos** (un ángulo obtuso mayor de $90^{\\circ}$). En cualquier triángulo se cumple que la suma de sus ángulos internos es constante: $$S_{\\triangle} = \\alpha + \\beta + \\gamma = 180^{\\circ}$$ Los cuadriláteros se clasifican en **paralelogramos** (lados opuestos paralelos dos a dos), **trapecios** (un par de lados paralelos) y **trapezoides** (sin lados paralelos).',
    'Un triángulo con lados de 8 cm, 8 cm y 11 cm es isósceles; si tiene un ángulo de 95° es además obtusángulo.',
    [
      { exercise: 'Si un triángulo rectángulo tiene un ángulo agudo de 35°, ¿cuánto mide el otro ángulo agudo?', hint: 'El ángulo recto mide 90° y los tres suman 180°.', answer: '55°' },
      { exercise: 'Clasifica un cuadrilátero que tiene solo dos lados paralelos de diferente longitud.', hint: 'Tiene un solo par de lados paralelos.', answer: 'Trapecio' }
    ],
    [
      'Ejemplo 1 (Clasificación combinada de triángulo): Un triángulo tiene lados de 8 cm, 8 cm y 11 cm, y uno de sus ángulos interiores mide 95°. Clasificarlo por lados y ángulos. Paso 1: Comparamos la longitud de los lados; tiene dos lados iguales (8 cm), por lo que es isósceles. Paso 2: Observamos los ángulos; tiene un ángulo mayor de 90° (95°), por lo que es obtusángulo. Solución: Es un triángulo isósceles obtusángulo.',
      'Ejemplo 2 (Cálculo del ángulo faltante en un triángulo): En un triángulo dos de sus ángulos miden 50° y 70°. Calcular la medida del tercer ángulo. Paso 1: Sumamos los dos ángulos conocidos: 50° + 70° = 120°. Paso 2: Restamos esta suma de 180°, que es la suma total interna de cualquier triángulo: 180° - 120° = 60°. Solución: El tercer ángulo mide exactamente 60°, siendo un triángulo acutángulo.',
      'Ejemplo 3 (Medición de un ángulo obtuso con transportador): Medir un ángulo abierto cuyos lados apuntan hacia la izquierda y arriba. Paso 1: Hacemos coincidir el punto central del transportador con el vértice del ángulo. Paso 2: Alineamos la base con el rayo horizontal y leemos la escala que inicia en 0° en dicho rayo hasta llegar al segundo rayo, marcando 135°. Solución: La medida del ángulo es de 135°, tratándose de un ángulo obtuso.',
      'Ejemplo 4 (Identificación de cuadriláteros): Una figura de cuatro lados tiene lados opuestos paralelos de 10 cm y 6 cm, pero sus ángulos no son rectos (miden 60° y 120°). Determinar de qué figura se trata. Paso 1: Verificamos si los lados opuestos son paralelos dos a dos; como sí lo son, es un paralelogramo. Paso 2: Como sus lados contiguos no son todos iguales y sus ángulos no son rectos, no es cuadrado ni rectángulo ni rombo. Solución: La figura es un romboide.',
      'Ejemplo 5 (Propiedad de los ángulos en cuadriláteros): Un trapecio tiene tres ángulos conocidos que miden 90°, 90° y 115°. Determinar la medida del cuarto ángulo interior. Paso 1: Recordamos que la suma de los cuatro ángulos internos de cualquier cuadrilátero es siempre 360°. Paso 2: Sumamos los conocidos: 90° + 90° + 115° = 295°. Paso 3: Restamos de 360°: 360° - 295° = 65°. Solución: El cuarto ángulo mide 65°.'
    ]
  ),
];

const u3Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u03-l01',
    '3.1',
    'Multiplicación de factores de varias cifras en forma vertical',
    'Una cooperativa cafetalera en Ahuachapán recolecta 348 sacos de café especial durante la temporada de cosecha. Si cada saco contiene exactamente 125 libras de café de exportación y se comercializa a granel en el mercado nacional, ¿cuántas libras de café recolectó en total la cooperativa y cuál es el procedimiento vertical formal para multiplicar factores de tres cifras por tres cifras?',
    'Para encontrar la cantidad total de libras multiplicamos 348 por 125 disponiendo los factores en forma vertical de manera que coincidan las unidades, decenas y centenas. Primero, multiplicamos 348 por la cifra de las unidades del multiplicador, que es 5: 348 por 5 es igual a 1,740 (primer producto parcial). Segundo, multiplicamos 348 por la cifra de las decenas, que es 2, desplazando el resultado una posición hacia la izquierda porque representa veinte unidades: 348 por 2 decenas es igual a 696 decenas, es decir, 6,960 (segundo producto parcial). Tercero, multiplicamos 348 por la cifra de las centenas, que es 1, desplazando dos posiciones hacia la izquierda: 348 por 1 centena es igual a 348 centenas, o 34,800 (tercer producto parcial). Finalmente, sumamos los tres productos parciales ordenadamente: 1,740 más 6,960 más 34,800 da como resultado 43,500 libras en total.',
    'Para multiplicar factores de dos o tres cifras en forma vertical, se multiplica el multiplicando sucesivamente por cada dígito del multiplicador, iniciando por las unidades, continuando con las decenas y luego con las centenas. Cada producto parcial se desplaza un espacio hacia la izquierda según el valor posicional del dígito correspondiente: $$\\begin{array}{r} 348 \\\\ \\times 125 \\\\ \\hline 1740 \\\\ 696\\phantom{0} \\\\ 348\\phantom{00} \\\\ \\hline 43500 \\end{array}$$ Al final, se efectúa la adición de todos los productos parciales. La multiplicación cumple además con la propiedad distributiva: $a \\times (b + c) = (a \\times b) + (a \\times c)$.',
    'Para multiplicar 245 x 132 se multiplican 245 x 2 (490), 245 x 30 (7,350) y 245 x 100 (24,500), obteniendo 32,340.',
    [
      { exercise: 'Calcula verticalmente el producto de 425 por 32.', hint: 'Multiplica primero por 2 y luego por 3 decenas.', answer: '13,600' },
      { exercise: 'Un camión transporta 145 cajas con 24 jugos cada una. ¿Cuántos jugos lleva en total?', hint: 'Multiplica 145 x 24.', answer: '3,480 jugos' }
    ],
    [
      'Ejemplo 1 (Multiplicación CDU x U con llevadas): Multiplicar 467 por 6 en forma vertical. Paso 1: Multiplicamos unidades: 6 x 7 = 42 (escribimos 2 y llevamos 4). Paso 2: Multiplicamos decenas: 6 x 6 = 36, más 4 que llevábamos es 40 (escribimos 0 y llevamos 4). Paso 3: Multiplicamos centenas: 6 x 4 = 24, más 4 es 28. Solución: El producto final es 2,802.',
      'Ejemplo 2 (Multiplicación CDU x D con cero final): Calcular el producto de 520 por 40 mentalmente y por descomposición. Paso 1: Separamos los factores en sus cifras significativas y potencias de diez: 52 x 4 x 100. Paso 2: Multiplicamos 52 por 4: 50 x 4 = 200 y 2 x 4 = 8, dando 208. Paso 3: Agregamos los dos ceros al final del producto. Solución: 520 x 40 = 20,800.',
      'Ejemplo 3 (Multiplicación CDU x DU): Multiplicar 234 por 36 ordenando los productos parciales. Paso 1: Multiplicamos 234 por 6: 6 x 4 = 24 (llevamos 2), 6 x 3 = 18 + 2 = 20 (llevamos 2), 6 x 2 = 12 + 2 = 14; producto parcial: 1,404. Paso 2: Multiplicamos 234 por 3 decenas: 3 x 234 = 702 decenas (7,020). Paso 3: Sumamos ambos productos parciales: 1,404 + 7,020. Solución: El resultado es 8,424.',
      'Ejemplo 4 (Aplicación de la propiedad distributiva): Calcular 125 x 18 descomponiendo 18 en 10 + 8. Paso 1: Expresamos la operación como 125 x (10 + 8) = (125 x 10) + (125 x 8). Paso 2: Calculamos 125 x 10 = 1,250. Paso 3: Calculamos 125 x 8 = 1,000. Paso 4: Sumamos los resultados parciales: 1,250 + 1,000. Solución: El producto obtenido es 2,250.',
      'Ejemplo 5 (Multiplicación con cero intermedio en el multiplicador): Resolver 315 por 204 en forma vertical. Paso 1: Multiplicamos 315 por 4: 1,260. Paso 2: Como las decenas son 0, colocamos un cero o saltamos a las centenas desplazando dos lugares: 315 por 2 centenas = 630 centenas (63,000). Paso 3: Sumamos los valores: 1,260 + 63,000. Solución: El producto total es 64,260.'
    ]
  ),
];

const u4Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u04-l01',
    '4.1',
    'Números decimales: décimas, centésimas y milésimas',
    'En una competencia de atletismo escolar en San Salvador, tres estudiantes registran sus marcas de salto de longitud utilizando una cinta métrica graduada en metros y centímetros. El primer atleta saltó dos metros con tres décimas de metro, el segundo saltó dos metros con treinta y cinco centésimas, y el tercero saltó dos metros con trescientas cuarenta y ocho milésimas. ¿Cómo se representan estos valores con números decimales y cómo se ubican en la recta numérica?',
    'Para representar estas medidas dividimos la unidad fundamental del metro en partes iguales de diez, cien y mil. Si dividimos un metro en diez partes iguales, cada parte es una décima de metro, que se escribe como 0.1 m; por lo tanto, el salto del primer atleta es 2.3 metros. Si dividimos el metro en cien partes iguales, cada parte es una centésima de metro (0.01 m); el segundo salto tiene 2 unidades enteras, 3 décimas y 5 centésimas, escribiéndose como 2.35 metros. Si dividimos en mil partes iguales, cada parte es una milésima de metro (0.001 m); el tercer salto se compone de 2 unidades, 3 décimas, 4 centésimas y 8 milésimas, escribiéndose como 2.348 metros. Al compararlos en la recta numérica entre 2 y 3 metros, observamos que 2.300 es menor que 2.348 y este es menor que 2.350.',
    'Los números decimales permiten cuantificar cantidades que no son enteras. El punto decimal separa la parte entera a la izquierda de la parte decimal a la derecha. Cada posición decimal tiene un valor que es la décima parte del orden anterior: $$0.1 = \\frac{1}{10}\\text{ (décima)}, \\quad 0.01 = \\frac{1}{100}\\text{ (centésima)}, \\quad 0.001 = \\frac{1}{1000}\\text{ (milésima)}$$ Para comparar dos números decimales, se compara primero la parte entera; si son iguales, se comparan las décimas, luego las centésimas y sucesivamente las milésimas, pudiendo agregar ceros a la derecha sin alterar el valor numérico.',
    'El número 2.35 se compone de 2 unidades + 3 décimas + 5 centésimas, ubicándose entre 2.3 y 2.4 en la recta.',
    [
      { exercise: 'Escribe en forma decimal: tres unidades y veinticinco milésimas.', hint: 'Recuerda que las milésimas ocupan tres cifras decimales.', answer: '3.025' },
      { exercise: 'Ordena de menor a mayor los siguientes decimales: 0.7, 0.65, 0.72 y 0.608.', hint: 'Iguala todas las cantidades a tres cifras decimales.', answer: '0.608 < 0.65 < 0.7 < 0.72' }
    ],
    [
      'Ejemplo 1 (Conversión de fracción decimal a número decimal): Expresar la fracción 47/100 como número decimal y nombrar sus partes. Paso 1: Identificamos que el denominador 100 indica que la cantidad corresponde a centésimas. Paso 2: Escribimos el numerador 47 con dos cifras después del punto decimal. Solución: 47/100 = 0.47, que se lee cuarenta y siete centésimas.',
      'Ejemplo 2 (Identificación de valor posicional): En el número decimal 5.826, señalar qué valor representa cada dígito decimal. Paso 1: El 8 está en la primera posición después del punto, representando 8 décimas (0.8). Paso 2: El 2 está en la segunda posición, representando 2 centésimas (0.02). Paso 3: El 6 está en la tercera posición, representando 6 milésimas (0.006). Solución: 5.826 = 5 + 0.8 + 0.02 + 0.006.',
      'Ejemplo 3 (Comparación de decimales con distinta cantidad de cifras): Determinar cuál número es mayor entre 3.4 y 3.28. Paso 1: Comparamos las partes enteras; ambas son 3. Paso 2: Comparamos las décimas; 4 décimas es mayor que 2 décimas. Paso 3: Igualamos cifras agregando un cero: 3.40 frente a 3.28; 3.40 es mayor. Solución: 3.4 > 3.28.',
      'Ejemplo 4 (Ubicación en la recta numérica): Ubicar el número 1.6 en una recta numérica entre 1 y 2. Paso 1: Dividimos el segmento de longitud 1 entre el 1 y el 2 en diez partes iguales de 0.1 cada una. Paso 2: Contamos 6 marcas a la derecha del número 1 (1.1, 1.2, 1.3, 1.4, 1.5, 1.6). Solución: El punto se sitúa exactamente sobre la sexta marca decimal.',
      'Ejemplo 5 (Multiplicación y división por 10, 100 y 1,000): Calcular el resultado de multiplicar 0.45 por 10 y por 100. Paso 1: Para multiplicar por 10 desplazamos el punto decimal un lugar a la derecha: 0.45 x 10 = 4.5. Paso 2: Para multiplicar por 100 desplazamos el punto dos lugares a la derecha: 0.45 x 100 = 45. Solución: Los resultados obtenidos son 4.5 y 45 respectivamente.'
    ]
  ),
];

const u5Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u05-l01',
    '5.1',
    'Algoritmo de la división larga entre números de dos cifras',
    'En una cooperativa lechera de San Vicente se recolectan 1,575 litros de leche fresca que deben ser envasados en recipientes plásticos de 35 litros de capacidad para su distribución en escuelas rurales. El encargado de bodega necesita planificar la entrega y comprobar cuántos recipientes completos se llenarán y si sobrará algún litro de leche. ¿Cuál es el procedimiento paso a paso para efectuar esta división larga de tres y cuatro cifras entre un divisor de dos cifras?',
    'Para resolver este problema dividimos 1,575 entre 35 utilizando el algoritmo formal de la división larga. Como el divisor 35 tiene dos cifras, tomamos las dos primeras cifras del dividendo, que forman el número 15; como 15 es menor que 35, tomamos las primeras tres cifras, formando 157. Estimamos cuántas veces cabe 35 en 157 tapando las unidades: 3 en 15 cabe aproximadamente 4 veces. Multiplicamos 4 por 35, lo que da 140. Restamos 157 menos 140, obteniendo 17 de residuo parcial. A continuación, bajamos la siguiente cifra del dividendo, que es 5, formando 175. Estimamos cuántas veces cabe 35 en 175: probamos con 5. Multiplicamos 5 por 35: 5 por 30 es 150 y 5 por 5 es 25, cuya suma es exactamente 175. Restamos 175 menos 175, obteniendo un residuo final de 0. Por lo tanto, el cociente exacto es de 45 recipientes completos.',
    'El algoritmo de la división larga comprende cuatro pasos sucesivos y ordenados que se repiten hasta procesar todas las cifras del dividendo: **estimar el cociente parcial**, **multiplicar** el divisor por la cifra estimada, **restar** el producto del dividendo parcial y **bajar** la siguiente cifra. Toda división cumple con la relación fundamental e invariable de la división entera: $$D = d \\times q + r \\qquad \\text{donde } 0 \\le r < d$$ Si el residuo final es cero ($r = 0$), la división es exacta; si es mayor que cero, la división es inexacta y el residuo debe ser estrictamente menor que el divisor.',
    'Al dividir 1,440 entre 45: 144 / 45 = 3 (residuo 9); bajamos 0 (90); 90 / 45 = 2. Cociente = 32.',
    [
      { exercise: 'Efectúa la división vertical: 936 dividido entre 36.', hint: 'Estima cuántas veces cabe 36 en 93.', answer: 'Cociente 26, residuo 0' },
      { exercise: 'Comprueba si la división 455 entre 15 da cociente 30 y residuo 5.', hint: 'Verifica si 15 x 30 + 5 es igual a 455.', answer: 'Sí, es correcta porque 15 x 30 + 5 = 450 + 5 = 455' }
    ],
    [
      'Ejemplo 1 (División DU entre DU con estimación directa): Dividir 84 entre 21 en forma vertical. Paso 1: Estimamos cuántas veces cabe 20 en 80; probamos con 4 en el cociente. Paso 2: Multiplicamos 4 por 21: 4 x 1 = 4 y 4 x 2 = 8, obteniendo 84. Paso 3: Restamos 84 - 84 = 0. Solución: El cociente es exactamente 4 con residuo 0 (división exacta).',
      'Ejemplo 2 (División CDU entre DU con residuo): Resolver 748 dividido entre 23. Paso 1: Tomamos las dos primeras cifras (74). Estimamos 23 en 74: cabe 3 veces (3 x 23 = 69). Paso 2: Restamos 74 - 69 = 5. Bajamos la cifra 8, formando 58. Paso 3: Estimamos 23 en 58: cabe 2 veces (2 x 23 = 46). Paso 4: Restamos 58 - 46 = 12. Solución: Cociente = 32 con residuo r = 12 (comprobación: 23 x 32 + 12 = 736 + 12 = 748).',
      'Ejemplo 3 (División con ajuste a la baja del cociente estimado): Dividir 192 entre 28. Paso 1: Estimamos 28 como 30 y probamos cuántas veces cabe en 190: probamos con 7. Paso 2: Multiplicamos 7 x 28 = 196; como 196 es mayor que 192, ajustamos el cociente a 6. Paso 3: Multiplicamos 6 x 28 = 168. Paso 4: Restamos 192 - 168 = 24. Solución: Cociente = 6 con residuo r = 24 (24 < 28).',
      'Ejemplo 4 (División con cero intermedio en el cociente): Dividir 6,180 entre 60. Paso 1: Tomamos 61; 60 en 61 cabe 1 vez (1 x 60 = 60). Restamos: 61 - 60 = 1. Paso 2: Bajamos el 8, formando 18; como 60 no cabe en 18, colocamos 0 en el cociente. Paso 3: Bajamos la última cifra 0, formando 180. Paso 4: 60 en 180 cabe 3 veces (3 x 60 = 180), residuo 0. Solución: Cociente = 103 con residuo 0.',
      'Ejemplo 5 (Problema de reparto equitativo con sobrante): Se reparten 500 cuadernos entre 24 salones de clase. ¿Cuántos cuadernos recibe cada salón y cuántos sobran? Paso 1: Dividimos 500 entre 24. Tomamos 50; 24 cabe 2 veces (2 x 24 = 48). Restamos 50 - 48 = 2. Paso 2: Bajamos el 0, formando 20; como 24 no cabe en 20, colocamos 0 en las unidades del cociente. Paso 3: El residuo es 20. Solución: Cada salón recibe 20 cuadernos y sobran 20 cuadernos.'
    ]
  ),
];

const u6Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u06-l01',
    '6.1',
    'Área de cuadrados, rectángulos y figuras compuestas',
    'El comité escolar de un centro educativo en Chalatenango desea instalar baldosas de cerámica en el piso de la biblioteca, la cual tiene forma rectangular con medidas de 9 metros de largo por 5 metros de ancho. Junto a la biblioteca hay una pequeña bodega cuadrada de 3 metros de lado que también será pavimentada. ¿Cuál es el área de cada espacio en metros cuadrados, cuál es la superficie total a cubrir y cómo se deducen las fórmulas de cálculo?',
    'Para calcular el área de una figura plana medimos cuántos cuadrados unitarios de un metro de lado caben en su interior. En el caso de la biblioteca rectangular de 9 metros de largo por 5 metros de ancho, podemos colocar 9 cuadrados de un metro en cada fila y formar 5 filas completas. El total de cuadrados de un metro cuadrado se obtiene multiplicando la medida de la base por la medida de la altura: 9 multiplicado por 5 es igual a 45 metros cuadrados. Para la bodega cuadrada de 3 metros de lado, dado que un cuadrado tiene sus cuatro lados iguales, multiplicamos lado por lado: 3 multiplicado por 3 es igual a 9 metros cuadrados. Para determinar la superficie total de la figura compuesta sumamos ambas áreas parciales: 45 metros cuadrados más 9 metros cuadrados da un total de 54 metros cuadrados de cerámica requeridos.',
    'El **área** representa la medida de la superficie encerrada por el perímetro de una figura geométrica y se expresa en unidades cuadradas como el centímetro cuadrado ($\\text{cm}^2$) y el metro cuadrado ($\\text{m}^2$). Las fórmulas oficiales son: $$A_{\\text{rect}} = b \\times h, \\qquad A_{\\square} = l \\times l = l^2$$ Para calcular el área de **figuras compuestas**, se divide la figura en rectángulos o cuadrados más simples que no se solapen, se calcula el área de cada parte mediante sus respectivas fórmulas y se suman todas las áreas parciales para obtener el área total.',
    'El área de un aula rectangular de 8 m por 6 m es A = 8 x 6 = 48 m²; un jardín cuadrado de 5 m tiene A = 5² = 25 m².',
    [
      { exercise: 'Calcula el área de un ventanal rectangular que mide 12 metros de largo por 4 metros de altura.', hint: 'Multiplica base por altura (12 x 4).', answer: '48 metros cuadrados' },
      { exercise: 'Un piso cuadrado tiene 64 metros cuadrados de área. ¿Cuánto mide cada uno de sus lados?', hint: 'Busca un número que multiplicado por sí mismo sea 64.', answer: '8 metros de lado' }
    ],
    [
      'Ejemplo 1 (Cálculo directo de área rectangular): Una cancha de baloncesto escolar mide 28 metros de largo por 15 metros de ancho. Calcular su área en metros cuadrados. Paso 1: Identificamos la base (b = 28 m) y la altura (h = 15 m). Paso 2: Aplicamos la fórmula A = b x h: multiplicamos 28 x 15 = 420. Solución: El área de la cancha es de 420 metros cuadrados.',
      'Ejemplo 2 (Cálculo del área de un cuadrado): Un jardín comunitario tiene forma cuadrada con 14 metros de lado. Calcular su superficie total. Paso 1: Identificamos la longitud del lado (l = 14 m). Paso 2: Aplicamos la fórmula A = l x l: multiplicamos 14 x 14 = 196. Solución: La superficie del jardín es de 196 metros cuadrados.',
      'Ejemplo 3 (Área de figura compuesta en forma de L): Una habitación en forma de L se puede descomponer en dos rectángulos: uno de 6 m de base por 4 m de altura, y otro de 3 m de base por 2 m de altura. Paso 1: Calculamos el área del primer rectángulo: A1 = 6 x 4 = 24 m². Paso 2: Calculamos el área del segundo rectángulo: A2 = 3 x 2 = 6 m². Paso 3: Sumamos ambas áreas: 24 + 6 = 30 m². Solución: El área total de la habitación es de 30 metros cuadrados.',
      'Ejemplo 4 (Despeje de una dimensión a partir del área conocida): Un terreno rectangular tiene un área total de 72 metros cuadrados y su frente mide 8 metros de base. ¿Cuál es su fondo o altura? Paso 1: Usamos la fórmula A = b x h y despejamos la altura: h = A / b. Paso 2: Dividimos 72 entre 8: 72 / 8 = 9. Solución: El fondo o altura del terreno mide 9 metros.',
      'Ejemplo 5 (Conversión básica entre unidades de área): Calcular cuántos centímetros cuadrados contiene una lámina de cartulina cuadrada de 10 centímetros de lado. Paso 1: Identificamos el lado l = 10 cm. Paso 2: Calculamos el área multiplicando 10 x 10 = 100 cm². Solución: El área de la lámina es de 100 centímetros cuadrados.'
    ]
  ),
];

const u7Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u07-l01',
    '7.1',
    'Suma y resta vertical de números decimales y alineación posicional',
    'Una estudiante de cuarto grado ayuda a su madre a verificar la libreta de compras del mercado en Sonsonate. Compraron 4.65 libras de queso fresco, 2.8 libras de frijoles rojos y 1.275 libras de especias molidas. Además, antes de pagar disponían de un billete de diez dólares y el total de la compra fue de ocho dólares con setenta y dos centavos. ¿Cómo se suman y restan estas cantidades decimales en forma vertical asegurando la correcta alineación del punto decimal?',
    'Para sumar cantidades decimales disponemos los sumandos en forma vertical de manera que los puntos decimales queden en una misma columna vertical perfecta. Esto garantiza que las unidades queden bajo las unidades, las décimas bajo las décimas, las centésimas bajo las centésimas y las milésimas bajo las milésimas. Para sumar 4.65 más 2.8 más 1.275 completamos con ceros los espacios vacíos a la derecha: escribimos 4.650 más 2.800 más 1.275. Sumamos las milésimas: 0 más 0 más 5 es 5. Sumamos las centésimas: 5 más 0 más 7 es 12 (escribimos 2 y llevamos 1). Sumamos las décimas: 6 más 8 más 2 más 1 que llevábamos es 17 (escribimos 7 y llevamos 1). Colocamos el punto decimal. Sumamos las unidades: 4 más 2 más 1 más 1 es 8. El peso total es 8.725 libras. Para restar 8.72 de 10.00 alineamos los puntos prestando de las unidades, obteniendo 1.28 dólares de vuelto.',
    'Para sumar o restar números decimales en forma vertical, es regla indispensable alinear todos los números haciendo coincidir el **punto decimal**. Si los términos tienen diferente cantidad de cifras decimales, se agregan ceros a la derecha de la parte decimal para igualar los órdenes: $$\\begin{array}{r} 4.650 \\\\ 2.800 \\\\ + 1.275 \\\\ \\hline 8.725 \\end{array} \\qquad \\begin{array}{r} 10.00 \\\\ - 8.72 \\\\ \\hline 1.28 \\end{array}$$ Se opera columna por columna de derecha a izquierda tal como en los números naturales, llevando o prestando según sea necesario, y se desciende el punto decimal en la misma posición relativa.',
    'Al sumar 3.75 + 2.40 alineando el punto decimal obtenemos 6.15; al restar 5.80 - 2.35 obtenemos 3.45.',
    [
      { exercise: 'Calcula en forma vertical la suma de 18.6 + 4.95.', hint: 'Escribe 18.60 para alinear las centésimas.', answer: '23.55' },
      { exercise: 'Resta verticalmente: 15.00 menos 6.48.', hint: 'Presta desde las unidades para restar las décimas y centésimas.', answer: '8.52' }
    ],
    [
      'Ejemplo 1 (Suma de decimales con igual cantidad de cifras): Sumar 14.36 + 8.45 en vertical. Paso 1: Alineamos por el punto decimal las unidades y los decimales. Paso 2: Sumamos centésimas: 6 + 5 = 11 (escribimos 1 y llevamos 1 a las décimas). Paso 3: Sumamos décimas: 3 + 4 + 1 = 8. Paso 4: Sumamos enteros: 14 + 8 = 22. Solución: El resultado de la suma es 22.81.',
      'Ejemplo 2 (Suma con diferente cantidad de cifras decimales): Calcular 5.7 + 3.48 completando con ceros. Paso 1: Escribimos 5.70 para tener dos cifras decimales como en 3.48. Paso 2: Sumamos centésimas: 0 + 8 = 8. Paso 3: Sumamos décimas: 7 + 4 = 11 (escribimos 1 y llevamos 1 a las unidades). Paso 4: Sumamos unidades: 5 + 3 + 1 = 9. Solución: 5.70 + 3.48 = 9.18.',
      'Ejemplo 3 (Resta de decimales prestando de los enteros): Restar 12.45 de 20.00. Paso 1: Alineamos 20.00 sobre 12.45. Paso 2: Como a 0 centésimas no se le puede restar 5, prestamos sucesivamente desde las decenas. Paso 3: Operamos: 10 - 5 = 5 en centésimas; 9 - 4 = 5 en décimas; 9 - 2 = 7 en unidades; 1 - 1 = 0 en decenas. Solución: La diferencia es 7.55.',
      'Ejemplo 4 (Resta donde el sustraendo tiene más cifras decimales): Calcular 8.5 menos 2.36. Paso 1: Completamos el minuendo agregando un cero: 8.50. Paso 2: Restamos centésimas: 10 - 6 = 4 (el 5 prestó 1 y quedó en 4). Paso 3: Restamos décimas: 4 - 3 = 1. Paso 4: Restamos unidades: 8 - 2 = 6. Solución: El resultado exacto es 6.14.',
      'Ejemplo 5 (Operación combinada de contexto escolar): Mario tiene 15.50 dólares, compra un cuaderno por 2.75 dólares y una regla por 1.20 dólares. ¿Cuánto dinero le queda? Paso 1: Sumamos el total del gasto: 2.75 + 1.20 = 3.95 dólares. Paso 2: Restamos el gasto del dinero inicial: 15.50 - 3.95 = 11.55 dólares. Solución: A Mario le quedan 11.55 dólares.'
    ]
  ),
];

const u8Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u08-l01',
    '8.1',
    'Fracciones propias, impropias, números mixtos y operaciones homogéneas',
    'Durante una jornada de reforestación comunitaria en Morazán, dos brigadas estudiantiles transportan agua para regar arbolitos recién plantados. La primera brigada utiliza cinco tercios (5/3) de galón de agua y la segunda brigada utiliza cuatro tercios (4/3) de galón. Los brigadistas necesitan saber cuántos galones completos y sobrantes representa cada cantidad mediante números mixtos y cuánta agua consumieron entre ambas brigadas en total.',
    'Para resolver este problema clasificamos las fracciones según la relación entre el numerador y el denominador. En la fracción cinco tercios (5/3), el numerador 5 es mayor que el denominador 3, por lo que es una fracción impropia que representa más de una unidad completa. Para convertirla en número mixto dividimos el numerador entre el denominador: 5 dividido entre 3 da un cociente de 1 con un residuo de 2; esto indica que 5/3 equivale a 1 galón entero y dos tercios de galón (1 2/3). De manera análoga, para la segunda brigada dividimos 4 entre 3: da cociente 1 y residuo 1, representando 1 galón y un tercio (1 1/3). Para calcular el consumo total sumamos ambas fracciones homogéneas manteniendo el mismo denominador 3 y sumando directamente los numeradores: 5 más 4 es 9, obteniendo nueve tercios (9/3), que al simplificarse dividiendo 9 entre 3 equivale exactamente a 3 galones completos de agua.',
    'Una **fracción propia** tiene el numerador menor que el denominador ($a < b$) y representa menos de la unidad. Una **fracción impropia** tiene el numerador mayor o igual que el denominador ($a \\ge b$) y equivale a un **número mixto** formado por una parte entera y una fracción propia: $$\\frac{a}{b} = q\\,\\frac{r}{b} \\qquad \\text{donde } a = b \\times q + r$$ Para **sumar o restar fracciones homogéneas** (con igual denominador), se conserva el mismo denominador común y se suman o restan únicamente los numeradores: $\\frac{a}{d} \\pm \\frac{b}{d} = \\frac{a \\pm b}{d}$.',
    'La fracción impropia 7/4 equivale al número mixto 1 3/4; y 5/2 equivale a 2 1/2.',
    [
      { exercise: 'Convierte la fracción impropia 13/5 a número mixto.', hint: 'Divide 13 entre 5 calculando cociente y residuo.', answer: '2 3/5' },
      { exercise: 'Calcula: 5/9 + 2/9 - 1/9', hint: 'Conserva el denominador 9 y opera los numeradores.', answer: '6/9 = 2/3' }
    ],
    [
      'Ejemplo 1 (Conversión de fracción impropia a número mixto): Convertir la fracción impropia 11/4 a número mixto. Paso 1: Dividimos el numerador 11 entre el denominador 4. Paso 2: Calculamos: 11 / 4 = 2 con residuo r = 3 (ya que 4 x 2 = 8 y 11 - 8 = 3). Paso 3: Escribimos el cociente como entero y el residuo sobre el divisor. Solución: 11/4 = 2 3/4 (dos enteros tres cuartos).',
      'Ejemplo 2 (Conversión de número mixto a fracción impropia): Convertir el número mixto 3 2/5 a fracción impropia. Paso 1: Multiplicamos la parte entera por el denominador: 3 x 5 = 15. Paso 2: Sumamos el numerador al producto obtenido: 15 + 2 = 17. Paso 3: Colocamos el resultado sobre el mismo denominador 5. Solución: 3 2/5 = 17/5.',
      'Ejemplo 3 (Suma de fracciones homogéneas): Calcular la suma de 3/7 + 2/7. Paso 1: Verificamos que ambos denominadores son iguales (7). Paso 2: Mantenemos el denominador 7 y sumamos los numeradores: 3 + 2 = 5. Solución: 3/7 + 2/7 = 5/7 (fracción propia irreducible).',
      'Ejemplo 4 (Resta de fracciones homogéneas con simplificación): Resolver 7/8 menos 3/8. Paso 1: Como tienen el mismo denominador 8, restamos los numeradores: 7 - 3 = 4, obteniendo 4/8. Paso 2: Simplificamos dividiendo numerador y denominador entre su factor común 4: 4/4 = 1 y 8/4 = 2. Solución: 7/8 - 3/8 = 4/8 = 1/2.',
      'Ejemplo 5 (Suma de números mixtos homogéneos): Sumar 2 1/5 + 1 3/5. Paso 1: Sumamos las partes enteras: 2 + 1 = 3. Paso 2: Sumamos las partes fraccionarias que tienen igual denominador: 1/5 + 3/5 = 4/5. Paso 3: Unimos la parte entera y la fraccionaria. Solución: 2 1/5 + 1 3/5 = 3 4/5.'
    ]
  ),
];

const u9Lessons4G = [
  createPscerLesson(
    'mined-mat-4g-u09-l01',
    '9.1',
    'Tablas de doble entrada, pictogramas con escala y medidas de longitud',
    'En un festival de talentos escolares en Usulután se registra la participación de estudiantes de cuarto, quinto y sexto grado en dos categorías: música y dibujo. Para presentar los resultados a la comunidad educativa se organiza la información en una tabla de doble entrada y luego se diseña un pictograma donde cada símbolo de estrella representa a 5 participantes. ¿Cómo se lee e interpreta la información cruzada en la tabla y cómo se construye correctamente el pictograma?',
    'Para organizar la información utilizamos una tabla de doble entrada disponiendo en las filas los tres grados escolares y en las columnas las dos disciplinas artísticas, añadiendo filas y columnas de totales. Si en cuarto grado participaron 15 estudiantes en música y 10 en dibujo, la celda de intersección correspondiente a cuarto grado y música muestra 15, y la de dibujo muestra 10, sumando 25 participantes en ese grado. Si en quinto participaron 20 en música y 15 en dibujo, y en sexto participaron 25 en música y 10 en dibujo, podemos sumar verticalmente para saber que en música participaron 60 estudiantes en total y en dibujo 35. Para representar estos datos en un pictograma donde una estrella equivale a 5 estudiantes, dividimos cada cantidad entre la escala: para 15 estudiantes dibujamos 3 estrellas (15 dividido entre 5), para 20 dibujamos 4 estrellas y para 25 dibujamos 5 estrellas completas.',
    'Una **tabla de doble entrada** organiza datos estadísticos relacionando simultáneamente dos variables (una en filas horizontales y otra en columnas verticales), permitiendo comparar categorías y calcular totales marginales de forma rápida. Un **pictograma** es una representación gráfica que utiliza iconos o dibujos figurativos asociados al tema; cada símbolo posee un valor de **escala** determinado: $$\\text{Número de símbolos} = \\frac{\\text{Frecuencia del dato}}{\\text{Valor de cada símbolo}}$$ En mediciones físicas complementarias de cuarto grado se emplea el **milímetro** ($\\text{mm}$), donde $1\\text{ cm} = 10\\text{ mm}$ y $1\\text{ m} = 1,000\\text{ mm}$.',
    'En un pictograma con escala de 10 puntos por estrella, 4 estrellas representan 40 puntos; 1 metro equivale a 1,000 mm.',
    [
      { exercise: 'Si en un pictograma cada lápiz vale 6 estudiantes, ¿cuántos estudiantes representan 5 lápices?', hint: 'Multiplica 5 x 6.', answer: '30 estudiantes' },
      { exercise: 'Expresa una longitud de 4 metros y 25 centímetros únicamente en centímetros.', hint: '1 metro equivale a 100 centímetros.', answer: '425 centímetros' }
    ],
    [
      'Ejemplo 1 (Lectura de celda en tabla de doble entrada): En una tabla de medios de transporte hacia la escuela, la fila 4° Grado y la columna Bicicleta indica el número 12. Interpretar este valor. Paso 1: Ubicamos la fila horizontal de 4° Grado. Paso 2: Cruzamos con la columna vertical de Bicicleta. Solución: El dato significa que exactamente 12 estudiantes de cuarto grado viajan a la escuela en bicicleta.',
      'Ejemplo 2 (Cálculo de frecuencias a partir de un pictograma): En una biblioteca cada icono de libro representa 10 libros leídos. Si el grado A tiene 4 iconos y medio icono, ¿cuántos libros leyó? Paso 1: Calculamos el valor de los 4 iconos completos: 4 x 10 = 40 libros. Paso 2: Calculamos el medio icono: 10 / 2 = 5 libros. Paso 3: Sumamos ambos valores: 40 + 5 = 45. Solución: El grado A leyó 45 libros en total.',
      'Ejemplo 3 (Construcción de símbolos para una frecuencia dada): Si cada manzana dibujada equivale a 8 frutas cosechadas, ¿cuántos símbolos deben dibujarse para representar 32 frutas? Paso 1: Identificamos la escala (1 símbolo = 8 frutas) y el total (32 frutas). Paso 2: Dividimos el total entre la escala: 32 / 8 = 4. Solución: Se deben dibujar exactamente 4 símbolos de manzana.',
      'Ejemplo 4 (Conversión de unidades de longitud métrica): Convertir 35 centímetros a milímetros. Paso 1: Recordamos la equivalencia fundamental: 1 centímetro equivale a 10 milímetros. Paso 2: Multiplicamos los centímetros por 10: 35 x 10 = 350. Solución: 35 centímetros equivalen a 350 milímetros.',
      'Ejemplo 5 (Interpretación de totales marginales en tabla): En una tabla de asistencia escolar, la columna de Total muestra 120 niñas y 115 niños. ¿Cuál es la población escolar total? Paso 1: Identificamos las frecuencias totales por género. Paso 2: Sumamos ambas cantidades: 120 + 115 = 235. Solución: La población escolar total es de 235 estudiantes.'
    ]
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
