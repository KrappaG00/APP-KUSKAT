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

// Lecciones P-S-C-E-R oficiales profundizadas con contenido ESMATE y 5 ejemplos resueltos
const u1Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u01-l01',
    '1.1',
    'Conozcamos los números hasta 200 y la centena',
    'En una cooperativa de productores agrícolas de café y granos básicos en Ahuachapán, los trabajadores empacan semillas certificadas en sacos pequeños de exactamente cien granos cada uno. Don Manuel prepara un pedido escolar especial y coloca sobre la tarima de despacho un saco completo con cien semillas, además de cuatro bolsas medianas que contienen diez semillas cada una y siete semillas sueltas que quedaron en la mesa de pesado. Si don Manuel necesita registrar en la boleta oficial de inventario la cantidad total exacta de semillas despachadas, ¿cómo representamos esta cantidad en la tabla de valor posicional y cómo se lee y escribe este número de tres cifras?',
    'Para determinar con rigor matemático la cantidad total de semillas despachadas por la cooperativa, organizamos las cantidades de acuerdo con el principio de valor posicional del sistema decimal. En primer lugar, identificamos que el saco grande contiene 100 semillas, lo cual corresponde exactamente a 1 centena (1 C), con un valor relativo de 100 unidades. En segundo lugar, analizamos las cuatro bolsas medianas de 10 semillas cada una; estas forman 4 decenas (4 D), que equivalen a 40 unidades. En tercer lugar, tomamos las 7 semillas que quedaron sueltas sobre la mesa de pesado, las cuales representan 7 unidades individuales (7 U). Al sumar las tres cantidades componentes obtenemos: 100 más 40 más 7 es igual a 147 semillas. En la tabla posicional escribimos el dígito 1 en la columna de las Centenas (C), el dígito 4 en la columna de las Decenas (D) y el dígito 7 en la columna de las Unidades (U). Este número de tres cifras se lee y escribe formalmente en palabras como ciento cuarenta y siete.',
    'Los números naturales de tres cifras representan cantidades formadas por centenas, decenas y unidades. En el sistema posicional decimal, la posición de cada dígito determina su valor relativo en potencias de diez: $$1\\text{ Centena (C)} = 10\\text{ Decenas (D)} = 100\\text{ Unidades (U)}$$ Para leer y escribir un número de tres cifras entre $100$ y $199$, se utiliza la palabra "ciento" seguida de la lectura habitual de las dos últimas cifras formadas por las decenas y unidades: $$N = c \\times 100 + d \\times 10 + u \\implies 147 = 100 + 40 + 7$$ En la recta numérica de segundo grado, los números avanzan de uno en uno o en escalas regulares de diez en diez, ubicándose el $147$ exactamente a siete unidades a la derecha del $140$.',
    'Lectura, escritura y valor posicional de números de tres cifras hasta 200.',
    [
      { exercise: 'Escribe en cifras el número "ciento noventa y dos".', hint: '1 centena, 9 decenas y 2 unidades.', answer: '192' },
      { exercise: '¿Cuántas centenas, decenas y unidades contiene el número 165?', hint: 'Descompón según su posición CDU.', answer: '1 centena, 6 decenas y 5 unidades' },
    ],
    [
      'Paso 1: Se tiene 1 caja con cien lápices, 5 estuches con diez lápices cada uno y 3 lápices sueltos. Paso 2: Expresamos los valores en la tabla posicional: 1 C, 5 D y 3 U ($100 + 50 + 3$). Solución: El total es de 153 lápices, nombrándose formalmente como ciento cincuenta y tres.',
      'Paso 1: Deseamos descomponer en forma desarrollada el número 186 registrado en una biblioteca. Paso 2: Identificamos centenas, decenas y unidades: 1 centena vale 100, 8 decenas valen 80 y 6 unidades valen 6. Solución: La descomposición aditiva es $186 = 100 + 80 + 6$, comprobándose mediante la adición directa.',
      'Paso 1: Un agricultor empaca 1 centena de naranjas y 9 unidades sueltas sin ninguna decena intermedia. Paso 2: Colocamos 1 en las centenas, 0 en las decenas y 9 en las unidades. Solución: Se forma el número 109, el cual se lee correctamente en español como ciento nueve.',
      'Paso 1: Para comparar los números 135 y 162, observamos primero la cifra de las centenas: ambas tienen 1 C. Paso 2: Comparamos las cifras de las decenas: 3 D es menor que 6 D ($3 < 6$). Solución: Concluimos formalmente que 135 es menor que 162, expresado mediante el símbolo matemático como $135 < 162$.',
      'Paso 1: Averiguamos qué número resulta al sumar una unidad al número 199 en el conteo escolar. Paso 2: Sumamos 1 unidad a 199: 9 más 1 forma diez, completando dos centenas enteras. Solución: El número resultante es 200, que corresponde a 2 centenas exactas ($200 = 2\\text{ C}$).',
    ]
  ),
  createPscerLesson(
    'mined-mat-2g-u01-l02',
    '1.2',
    'Números de tres cifras y la unidad de millar',
    'En el centro de recursos pedagógicos de una escuela de segundo grado, la bibliotecaria organiza los libros de texto donados para el año lectivo. En los anaqueles principales tiene colocadas ordenadamente 9 cajas grandes que contienen 100 libros cada una, 9 paquetes medianos con 10 libros cada uno y 9 libros sueltos en el mostrador de atención. Si una delegación comunitaria entrega en ese mismo instante 1 libro adicional para completar la donación, ¿cuántos libros hay en total y qué nueva unidad de orden posicional superior se forma al agregar esa unidad a los 999 libros existentes?',
    'Para comprender la transición hacia un nuevo orden numérico, analizamos paso a paso el conteo de los libros antes y después de recibir la nueva donación. Al inicio, la bibliotecaria tiene 9 centenas (900 libros), 9 decenas (90 libros) y 9 unidades (9 libros), lo que compone exactamente el número 999 libros. Cuando se añade 1 libro adicional al mostrador, las 9 unidades sueltas se convierten en 10 unidades. En nuestro sistema de base diez, 10 unidades no pueden permanecer en la casilla de las unidades, sino que se agrupan para formar 1 nueva decena, que se suma a las 9 decenas existentes dando 10 decenas. De igual manera, 10 decenas no pueden permanecer en la casilla de las decenas y se transforman en 1 nueva centena, sumándose a las 9 centenas previas para alcanzar 10 centenas. Finalmente, 10 centenas completas dan origen a un nuevo orden posicional: la unidad de millar (UM). La unidad de millar equivale a mil unidades y se escribe como 1,000 con cuatro cifras.',
    'Diez centenas completas forman una **unidad de millar** ($1\\text{ UM}$), que equivale exactamente a mil unidades individuales en el sistema decimal: $$10\\text{ Centenas (C)} = 1\\text{ Unidad de Millar (UM)} = 1,000\\text{ Unidades (U)}$$ El número $1,000$ es el primer número natural de cuatro cifras posicionales (Unidades de Millar, Centenas, Decenas y Unidades: UM-C-D-U). En la recta numérica, se sitúa inmediatamente después del número $999$: $$999 + 1 = 1,000$$ Para números entre $200$ y $999$, la lectura inicia con el nombre de las centenas correspondientes: doscientos ($200$), trescientos ($300$), cuatrocientos ($400$), quinientos ($500$), seiscientos ($600$), setecientos ($700$), ochocientos ($800$) y novecientos ($900$).',
    'La unidad de millar como agrupación de 10 centenas y números hasta 1,000.',
    [
      { exercise: '¿Cuántas centenas completas se necesitan para formar 1,000 unidades?', hint: 'Recuerda que 1 UM = 10 C.', answer: '10 centenas' },
      { exercise: 'Escribe en cifras el número "quinientos setenta y ocho".', hint: '5 centenas, 7 decenas y 8 unidades.', answer: '578' },
    ],
    [
      'Paso 1: Si un banco escolar reúne 5 cajas con 100 billetes didácticos cada una, contamos centenas completas. Paso 2: Multiplicamos o contamos de cien en cien: 100, 200, 300, 400 y 500 billetes. Solución: 5 centenas completas equivalen a 500 unidades, representadas posicionalmente como 5 C, 0 D y 0 U.',
      'Paso 1: Un camión repartidor traslada 8 centenas, 3 decenas y 5 unidades de bolsas de leche escolar. Paso 2: Sumamos los valores relativos correspondientes: 800 más 30 más 5 unidades. Solución: El cargamento totaliza 835 bolsas de leche, leyéndose como ochocientos treinta y cinco.',
      'Paso 1: Se desea conocer cuántas decenas completas caben en una unidad de millar ($1,000$). Paso 2: Dado que 1 C tiene 10 D y 1 UM tiene 10 C, multiplicamos 10 por 10 decenas. Solución: En 1 unidad de millar hay exactamente 100 decenas completas ($1,000 = 100\\text{ D}$).',
      'Paso 1: Para escribir en cifras el número "setecientos cuatro", analizamos sus componentes orales. Paso 2: Contiene 7 centenas, ninguna decena (0 D) y 4 unidades individuales. Solución: La escritura numérica correcta es 704, colocando el cero en la columna intermedia de las decenas.',
      'Paso 1: En una competencia escolar de ahorro, el aula A tiene 650 puntos y el aula B tiene 605 puntos. Paso 2: Comparamos decenas: el aula A tiene 5 D mientras que el aula B tiene 0 D ($5 > 0$). Solución: El aula A tiene mayor puntaje que el aula B porque 650 es mayor que 605 ($650 > 605$).',
    ]
  ),
];

const u2Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u02-l01',
    '2.1',
    'Suma vertical llevando a las decenas',
    'En una finca frutícola de Sonsonate, los recolectores cortan naranjas valencianas en dos jornadas de trabajo escolar. Durante la mañana, el equipo de corte llena canastos con 47 naranjas seleccionadas. Por la tarde, el mismo equipo recolecta 28 naranjas adicionales en otra parcela del huerto. La encargada del registro agrícola necesita saber cuántas naranjas se han recolectado en total a lo largo de todo el día. ¿Cómo se ordenan y resuelven estas cantidades en forma vertical utilizando el algoritmo oficial ESMATE de la suma con llevada a las decenas?',
    'Para resolver esta suma aplicando el algoritmo vertical estándar, colocamos los dos sumandos en una cuadrícula alineando rigurosamente las columnas de unidades y decenas. En la fila superior escribimos el primer sumando 47 (4 decenas y 7 unidades) y debajo escribimos el segundo sumando 28 (2 decenas y 8 unidades), trazando una línea horizontal de separación y el signo de suma a la izquierda. Iniciamos siempre el cálculo por la columna de la derecha correspondiente a las unidades: sumamos 7 unidades más 8 unidades, obteniendo 15 unidades. Como 15 es mayor o igual a 10, no podemos escribir dos cifras en la casilla de las unidades; por tanto, descomponemos 15 en 1 decena y 5 unidades. Escribimos la cifra 5 en la columna de las unidades y llevamos el 1 como decena pendiente a la columna de las decenas. A continuación, sumamos la columna de las decenas incluyendo la llevada: 4 decenas más 2 decenas más 1 decena que llevábamos resulta 7 decenas. El total recolectado es de 75 naranjas.',
    'Para sumar números de dos cifras en forma vertical con llevada a las decenas, se siguen tres pasos sistemáticos fundamentales:\n1. **Alineación posicional**: se escriben los sumandos alineando unidades bajo unidades y decenas bajo decenas.\n2. **Suma de unidades**: se suman los dígitos de las unidades. Si la suma es $10$ o superior ($u_1 + u_2 \\ge 10$), se escribe la cifra de las unidades en el total y se lleva $1$ decena a la parte superior de la columna de las decenas.\n3. **Suma de decenas**: se suman los dígitos de las decenas junto con la decena que se lleva:\n$$\\begin{array}{rl} 1 & \\text{(llevada)} \\\\ 47 & \\\\ +\\; 28 & \\\\ \\hline 75 & \\end{array}$$\nEste algoritmo garantiza la exactitud y conservación del valor posicional en el cálculo aditivo.',
    'Algoritmo formal de adición vertical con llevada a la columna de decenas.',
    [
      { exercise: 'Calcula verticalmente la siguiente suma: 58 + 26', hint: 'Suma 8 + 6 = 14 (escribe 4 y lleva 1 a decenas).', answer: '84' },
      { exercise: 'En una panadería hornean 37 panes dulces y 45 franceses. ¿Cuántos panes hay en total?', hint: '37 + 45 llevando 1.', answer: '82 panes' },
    ],
    [
      'Paso 1: Sumamos verticalmente 36 más 27 alineando U y D. Paso 2: Unidades: 6 más 7 es igual a 13; escribimos 3 y llevamos 1 a las decenas. Decenas: 3 más 2 más 1 que llevamos es igual a 6. Solución: El resultado formal de la suma vertical es $36 + 27 = 63$.',
      'Paso 1: En un huerto se recogen 58 mangos el lunes y 26 mangos el martes. Paso 2: Sumamos unidades: 8 más 6 igual a 14; anotamos 4 y llevamos 1. Sumamos decenas: 5 más 2 más 1 igual a 8. Solución: Se recolectaron en total 84 mangos en ambas jornadas ($58 + 26 = 84$).',
      'Paso 1: Para calcular la suma vertical 64 más 19, colocamos las cifras en columnas ordenadas. Paso 2: Unidades: 4 más 9 igual a 13; anotamos 3 y llevamos 1. Decenas: 6 más 1 más 1 llevado igual a 8. Solución: La suma total calculada es $64 + 19 = 83$ verificada minuciosamente.',
      'Paso 1: Se suman 45 libros infantiles y 38 libros juveniles en el inventario escolar. Paso 2: En unidades: 5 más 8 es 13 (llevamos 1). En decenas: 4 más 3 más 1 llevado es 8. Solución: La biblioteca dispone de 83 libros en total registrados en el catálogo ($45 + 38 = 83$).',
      'Paso 1: Calculamos la adición 29 más 43 disponiendo los sumandos verticalmente. Paso 2: Suma de unidades: 9 más 3 es 12; escribimos 2 y llevamos 1 a decenas. Decenas: 2 más 4 más 1 es 7. Solución: La operación vertical produce exactamente $29 + 43 = 72$ como resultado final.',
    ]
  ),
];

const u3Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u03-l01',
    '3.1',
    'Figuras planas: rectángulos, cuadrados y triángulos',
    'En la clase de geometría de segundo grado, la profesora reparte a cada equipo tiras de cartulina de diferentes longitudes, chinches de cabeza redonda y una escuadra escolar con una esquina recta de noventa grados. Con estos materiales, los estudiantes deben construir y clasificar marcos de diferentes figuras cerradas: una figura de tres lados y dos figuras distintas de cuatro lados. Los niños se preguntan con curiosidad: ¿cuáles son los elementos geométricos que definen a cada figura, cómo utilizamos la esquina recta de la escuadra para comprobar sus ángulos y qué características diferencian con precisión a un cuadrado de un rectángulo?',
    'Para resolver esta indagación geométrica de manera sistemática, los alumnos analizan los tres componentes primordiales de toda figura poligonal plana: los lados (segmentos rectos que forman el contorno exterior), los vértices (puntos de unión donde se cruzan dos lados consecutivos) y los ángulos o esquinas interiores. Al unir tres tiras de cartulina, obtienen una figura de 3 lados rectos y 3 vértices llamada triángulo. Al unir cuatro tiras con esquinas rectas comprobadas mediante la escuadra, construyen cuadriláteros especiales. La primera figura de cuatro lados tiene sus lados opuestos de igual longitud dos a dos (dos lados largos horizontales y dos lados cortos verticales) y posee 4 esquinas rectas perfectas: esta figura es un rectángulo. La segunda figura de cuatro lados tiene también 4 esquinas rectas comprobadas con la escuadra, pero sus 4 lados miden exactamente la misma longitud: esta figura es un cuadrado. Concluimos que todo cuadrado es un rectángulo particular donde todos sus lados son congruentes.',
    'Las **figuras geométricas planas** poligonales se clasifican según el número de lados rectos y las propiedades de sus vértices:\n1. **Triángulo**: polígono delimitado por $3$ lados y $3$ vértices. Sus esquinas pueden ser rectas, agudas u obtusas.\n2. **Rectángulo**: cuadrilátero que tiene $4$ lados rectos y $4$ esquinas o vértices rectos ($90^\\circ$). Sus lados opuestos tienen la misma medida dos a dos:\n$$\\text{Largo superior} = \\text{Largo inferior} \\quad \\text{y} \\quad \\text{Ancho izquierdo} = \\text{Ancho derecho}$$\n3. **Cuadrado**: caso especial de rectángulo que tiene sus $4$ lados de igual longitud ($l_1 = l_2 = l_3 = l_4$) y sus $4$ esquinas rectas.',
    'Propiedades geométricas de triángulos, rectángulos y cuadrados.',
    [
      { exercise: '¿Cuántos vértices y cuántos ángulos rectos tiene un rectángulo?', hint: 'Esquina recta de 90°.', answer: '4 vértices y 4 ángulos rectos' },
      { exercise: '¿Cuál es la diferencia principal entre un cuadrado y un rectángulo general?', hint: 'Compara la medida de sus 4 lados.', answer: 'El cuadrado tiene sus 4 lados de igual longitud' },
    ],
    [
      'Paso 1: Examinamos la superficie de una hoja de papel bond tamaño carta colocada en el pupitre. Paso 2: Verificamos con una regla sus 4 lados y con la escuadra sus 4 esquinas rectas; los lados opuestos son iguales. Solución: La hoja de papel bond es un rectángulo con cuatro esquinas perfectamente rectas.',
      'Paso 1: Medimos los cuatro bordes de un pañuelo de tela doblado: cada borde mide exactamente 20 centímetros. Paso 2: Comprobamos que sus cuatro esquinas coinciden con la esquina recta de la escuadra escolar. Solución: El pañuelo extendido tiene forma geométrica de cuadrado al poseer cuatro lados de igual medida y cuatro ángulos rectos.',
      'Paso 1: Observamos una señal escolar de advertencia de tres lados rectos y tres esquinas puntiagudas. Paso 2: Contamos los elementos estructurales de la figura plana: posee exactamente tres lados y tres vértices. Solución: La señal escolar corresponde a la figura de un triángulo, polígono fundamental de tres lados.',
      'Paso 1: Un estudiante une 4 lápices de igual tamaño sobre la mesa formando una figura cerrada con esquinas rectas. Paso 2: Comprueba que la figura encierra una superficie plana con cuatro lados idénticos y cuatro ángulos de noventa grados. Solución: La figura plana construida sobre la mesa es un cuadrado perfecto.',
      'Paso 1: Dibujamos un marco de cuadro de 30 cm de largo por 15 cm de ancho con regla graduada. Paso 2: Comprobamos que los lados paralelos son iguales y las esquinas forman ángulos rectos. Solución: El marco del cuadro corresponde a un rectángulo regular de cuatro lados y cuatro vértices rectos.',
    ]
  ),
];

const u4Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u04-l01',
    '4.1',
    'Resta vertical prestando de las decenas',
    'En un puesto comercial de frutas típicas ubicado en la entrada de la playa El Tunco, en La Libertad, don Tomás tiene exhibidos 63 cocos frescos en un canasto grande de madera para refrescar a los turistas. Durante la mañana y las primeras horas de la tarde, don Tomás atiende a varias familias de visitantes y vende un total de 27 cocos. Don Tomás desea saber cuántos cocos le quedan disponibles para la venta del resto del día. ¿Cómo se resuelve esta situación mediante el algoritmo vertical de la resta prestando de las decenas conforme a la metodología oficial ESMATE?',
    'Para calcular cuántos cocos quedan en el canasto, planteamos la resta vertical $63 - 27$ alineando minuendo y sustraendo según el valor posicional de sus cifras. El minuendo es 63 (6 decenas y 3 unidades) y el sustraendo es 27 (2 decenas y 7 unidades). Iniciamos la resta por la columna de la derecha correspondiente a las unidades: observamos que a 3 unidades no se le pueden restar 7 unidades porque 3 es menor que 7. Por esta razón, recurrimos al procedimiento de prestar: tomamos 1 decena de las 6 decenas disponibles en el minuendo; esa decena prestada equivale exactamente a 10 unidades, las cuales se suman a las 3 unidades existentes obteniendo 13 unidades ($10 + 3 = 13$). Al mismo tiempo, la cifra de las decenas disminuye en uno y queda en 5 decenas. Ahora sí podemos efectuar la resta en las unidades: 13 menos 7 es igual a 6 unidades. Luego restamos las decenas: 5 menos 2 es igual a 3 decenas. El resultado final indica que a don Tomás le quedan 36 cocos.',
    'Cuando en la resta vertical la cifra de las unidades del minuendo es menor que la del sustraendo ($u_1 < u_2$), se aplica el algoritmo de **resta con préstamo de las decenas**:\n1. Se presta $1$ decena de la columna de las decenas del minuendo, reduciéndose dicha cifra en una unidad ($d_1 - 1$).\n2. La decena prestada se convierte en $10$ unidades y se agrega a la cifra original de las unidades: $10 + u_1$.\n3. Se efectúa la resta de las unidades transformadas: $(10 + u_1) - u_2$.\n4. Se efectúa la resta de las decenas remanentes: $(d_1 - 1) - d_2$.\n$$\\begin{array}{rl} 5\\;13 & \\text{(transformación)} \\\\ 63 & \\\\ -\\; 27 & \\\\ \\hline 36 & \\end{array}$$\nLa respuesta se comprueba sumando el resultado con el sustraendo: $36 + 27 = 63$.',
    'Algoritmo formal de sustracción vertical con préstamo de las decenas.',
    [
      { exercise: 'Calcula verticalmente: 72 - 35', hint: 'Presta 1 decena: 12 - 5 = 7; decenas: 6 - 3 = 3.', answer: '37' },
      { exercise: 'De 80 páginas de un libro, Carlos lee 43. ¿Cuántas páginas le faltan por leer?', hint: '80 - 43 prestando de 8.', answer: '37 páginas' },
    ],
    [
      'Paso 1: Colocamos verticalmente 71 menos 38 alineando unidades y decenas. Paso 2: A 1 no podemos restarle 8; prestamos 1 decena de 7: queda en 6 y 1 pasa a ser 11. Restamos unidades: 11 menos 8 es 3. Restamos decenas: 6 menos 3 es 3. Solución: El resultado verificado de la resta es $71 - 38 = 33$.',
      'Paso 1: Para restar 82 menos 45 en forma vertical, organizamos minuendo y sustraendo. Paso 2: En unidades, prestamos 1 de 8: 12 menos 5 es igual a 7; las decenas quedan en 7: 7 menos 4 es igual a 3. Solución: La diferencia obtenida es $82 - 45 = 37$, comprobándose con $37 + 45 = 82$.',
      'Paso 1: En una librería escolar hay 54 lápices y se venden 29 a los estudiantes. Paso 2: Transformamos unidades: prestamos 1 decena quedando 4 D y 14 U. Restamos: 14 menos 9 es 5; en decenas: 4 menos 2 es 2. Solución: Quedan exactamente 25 lápices en la librería ($54 - 29 = 25$).',
      'Paso 1: Calculamos la resta 90 menos 36 con cero en las unidades del minuendo. Paso 2: Prestamos 1 decena de 9: quedan 8 D y 10 U. Restamos unidades: 10 menos 6 es 4; decenas: 8 menos 3 es 5. Solución: La resta da como resultado $90 - 36 = 54$, comprobándose mediante suma.',
      'Paso 1: Un sastre tiene una cinta de 65 cm y corta un trozo de 28 cm para un dobladillo. Paso 2: Restamos unidades: 15 menos 8 es 7; restamos decenas: 5 menos 2 es 3. Solución: El trozo restante de cinta mide exactamente 37 cm de longitud ($65 - 28 = 37$).',
    ]
  ),
];

const u5Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u05-l01',
    '5.1',
    'Sentido de la multiplicación y tablas del 2, 3, 4 y 5',
    'En la cafetería escolar comunitaria de segundo grado, las cocineras preparan el desayuno tradicional para los estudiantes. Sobre una mesa larga colocan 4 platos hondos y en cada uno de los platos sirven exactamente 3 pupusas de queso recién hechas. Los niños se disponen a calcular cuántas pupusas hay servidas en total sobre la mesa. La maestra les propone un reto: en lugar de contar una por una o realizar una suma larga sumando tres varias veces seguidas, ¿cómo podemos calcular el total de pupusas de forma abreviada y qué significa el concepto de multiplicación en matemática escolar?',
    'Para comprender el significado matemático de la multiplicación, observamos la estructura de los objetos que forman la situación planteada. Tenemos varios grupos que cumplen una condición indispensable: todos los grupos contienen exactamente la misma cantidad de elementos. En este caso, la cantidad de pupusas en cada plato es 3 y la cantidad de platos servidos sobre la mesa es 4. Tradicionalmente, calcularíamos el total sumando los grupos iguales: 3 pupusas más 3 pupusas más 3 pupusas más 3 pupusas, lo que da como resultado 12 pupusas ($3 + 3 + 3 + 3 = 12$). Sin embargo, cuando se tiene una suma repetida de un mismo número, la matemática utiliza una operación más eficiente llamada multiplicación. En la multiplicación oficial del MINED, el primer número representa la cantidad de objetos en cada grupo (3) y el segundo número representa la cantidad de grupos repetidos (4). Utilizamos el signo por ($\\times$) para escribir la expresión abreviada: $3 \\times 4 = 12$ pupusas.',
    'La **multiplicación** es una operación aritmética que consiste en calcular el resultado de sumar un mismo número varias veces consecutivas de manera abreviada. El modelo fundamental de la multiplicación se define formalmente como:\n$$\\text{Cantidad en cada grupo} \\times \\text{Cantidad de grupos} = \\text{Total de elementos}$$\nEn la expresión $a \\times b = c$, los términos $a$ y $b$ se llaman **factores** y el resultado $c$ se denomina **producto**. Las tablas básicas del $2, 3, 4$ y $5$ se construyen sumando repetidamente el factor base:\n- Tabla del 2: avanza de dos en dos ($2, 4, 6, 8, 10, \\dots$)\n- Tabla del 3: avanza de tres en tres ($3, 6, 9, 12, 15, \\dots$)\n- Tabla del 4: avanza de cuatro en cuatro ($4, 8, 12, 16, 20, \\dots$)\n- Tabla del 5: avanza de cinco en cinco ($5, 10, 15, 20, 25, \\dots$)',
    'Sentido de suma abreviada y dominio de las tablas del 2, 3, 4 y 5.',
    [
      { exercise: 'Escribe como multiplicación y calcula: 5 + 5 + 5 + 5', hint: '4 grupos de 5.', answer: '5 x 4 = 20' },
      { exercise: 'En una huerta hay 3 eras con 8 matas de tomate cada una. ¿Cuántas matas hay?', hint: '8 x 3.', answer: '24 matas' },
    ],
    [
      'Paso 1: Se tienen 5 bolsas de papel con 2 manzanas en cada bolsa para el refrigerio. Paso 2: Identificamos cantidad por grupo (2) y número de grupos (5); planteamos $2 \\times 5$. Solución: Efectuamos la multiplicación $2 \\times 5 = 10$, totalizando 10 manzanas sin necesidad de sumarlas una a una.',
      'Paso 1: En un estante hay 3 frascos y cada frasco contiene 4 borradores escolares. Paso 2: Escribimos el planteamiento multiplicativo: 4 borradores por frasco multiplicado por 3 frascos ($4 \\times 3$). Solución: El total es $4 \\times 3 = 12$ borradores en los tres frascos del estante escolar.',
      'Paso 1: Una niña compra 6 paquetes de galletas con 5 galletitas en cada paquete. Paso 2: Planteamos la operación multiplicativa con la tabla del cinco: $5 \\times 6$. Solución: Multiplicamos $5 \\times 6 = 30$, determinando que la niña tiene 30 galletitas en total para compartir.',
      'Paso 1: En una pista infantil corren 4 equipos formados por 3 niños cada uno. Paso 2: Calculamos el total de corredores multiplicando niños por equipo por número de equipos: $3 \\times 4$. Solución: Participan exactamente $3 \\times 4 = 12$ niños en la carrera deportiva de la escuela.',
      'Paso 1: Si tenemos 7 nidos y en cada nido hay 2 pajaritos descansando. Paso 2: Aplicamos la tabla del dos multiplicando la cantidad por nido por los siete nidos ($2 \\times 7$). Solución: Hay en total $2 \\times 7 = 14$ pajaritos observados en los árboles del patio.',
    ]
  ),
];

const u6Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u06-l01',
    '6.1',
    'El centímetro y el uso de la regla graduada',
    'En la clase de ciencias y matemática de segundo grado, los estudiantes realizan un proyecto de registro botánico midiendo el crecimiento de plántulas de frijol sembradas en vasos plásticos. Para registrar datos confiables en sus cuadernos de trabajo, la maestra les pide que midan con precisión la longitud del tallo de una plántula y el largo de un borrador nuevo utilizando una regla escolar graduada. Algunos niños intentan medir colocando el objeto en el borde exterior de la regla donde empieza el plástico, mientras que otros colocan el objeto en la marca del número 1. ¿Cuál es la forma correcta y precisa de utilizar la regla graduada y qué unidad estándar representa cada división numerada?',
    'Para medir longitudes con exactitud científica y escolar, es indispensable comprender cómo está calibrada y construida la regla graduada estándar. En la regla, las divisiones principales numeradas del 0 en adelante representan centímetros, que es la unidad estándar de longitud adoptada internacionalmente. El error más común al medir consiste en alinear el objeto con el borde físico de la regla o con la marca del número 1. El procedimiento correcto exige ubicar el borde inicial del objeto que deseamos medir exactamente alineado con la línea que marca el número 0 de la regla graduada. A partir de esa línea de referencia cero, se observa hasta qué número de la escala graduada llega el extremo final del objeto. Si el tallo de la plántula inicia en el 0 y su extremo superior coincide con la marca del número 8, significa que el tallo mide exactamente 8 centímetros. De igual forma, si el borrador inicia en el 0 y llega al 5, su longitud es de 5 centímetros de largo.',
    'El **centímetro** (símbolo: $\\text{cm}$) es una unidad de medida estandarizada de longitud perteneciente al Sistema Internacional de Unidades (SI). Para medir un objeto con la regla graduada de forma correcta:\n1. Se alinea el extremo inicial del objeto exactamente con la marca del cero ($0$).\n2. Se lee el número de la graduación con el que coincide el extremo final del objeto.\n3. Si el objeto no inicia en el $0$, su longitud se calcula restando la posición final menos la posición inicial:\n$$\\text{Longitud} = \\text{Marca final} - \\text{Marca inicial}$$\nEl **metro** (símbolo: $\\text{m}$) es la unidad básica de longitud para distancias mayores y equivale a cien centímetros:\n$$1\\text{ metro (m)} = 100\\text{ centímetros (cm)}$$',
    'Uso métrico de la regla graduada en centímetros y conversiones básicas a metros.',
    [
      { exercise: '¿Cuántos centímetros mide un listón si comienza en el 0 y termina en el 17?', hint: 'Lectura directa desde el cero.', answer: '17 cm' },
      { exercise: '¿A cuántos centímetros equivalen 3 metros completos?', hint: 'Multiplica 3 x 100.', answer: '300 cm' },
    ],
    [
      'Paso 1: Medimos un lápiz nuevo colocando su base en el 0 de la regla graduada. Paso 2: Observamos la punta del lápiz y confirmamos que coincide exactamente con la marca del número 14. Solución: La longitud del lápiz es de 14 centímetros, escribiéndose formalmente como $14\\text{ cm}$.',
      'Paso 1: Un clip metálico se coloca en una regla rota comenzando en el 3 y terminando en el 7. Paso 2: Restamos la marca inicial de la marca final para calcular la longitud: 7 menos 3. Solución: El clip metálico mide exactamente 4 centímetros de largo ($7 - 3 = 4\\text{ cm}$).',
      'Paso 1: Para trazar en el cuaderno un segmento recto de 6 cm de longitud con regla. Paso 2: Marcamos un punto en el 0 y otro punto en el 6; unimos ambos puntos con trazo continuo. Solución: Obtenemos un segmento de línea recta que mide con exactitud $6\\text{ cm}$ de largo.',
      'Paso 1: Si una cinta de tela mide 2 metros de largo, deseamos saber su equivalencia en centímetros. Paso 2: Como cada metro tiene 100 centímetros, multiplicamos 2 por 100: $2 \\times 100$. Solución: La cinta de tela mide exactamente 200 centímetros de longitud total ($2\\text{ m} = 200\\text{ cm}$).',
      'Paso 1: Medimos el ancho de un libro escolar colocando su borde izquierdo en la marca 0 de la regla. Paso 2: Verificamos que el borde derecho del libro llega al número 19 de la graduación. Solución: El libro escolar tiene un ancho de 19 centímetros ($19\\text{ cm}$ de ancho).',
    ]
  ),
];

const u7Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u07-l01',
    '7.1',
    'Tablas de multiplicar del 6, 7, 8, 9 y 10',
    'En los actos cívicos conmemorativos del mes cívico escolar, los estudiantes de segundo grado se organizan en el patio central para participar en una tabla gimnástica rítmica. El profesor de educación física ordena a los alumnos en 7 filas horizontales perfectamente alineadas, colocando exactamente a 6 estudiantes en cada una de las filas. La directora de la escuela necesita saber rápidamente cuántos alumnos están participando en total en la presentación cívica. ¿Cómo podemos resolver este cálculo utilizando la tabla de multiplicar del 6 o del 7 y qué importante propiedad geométrica y conmutativa de la multiplicación nos permite comprobar el resultado?',
    'Para calcular el número total de estudiantes participantes sin recurrir al conteo individual lento, aplicamos el modelo de multiplicación por filas y columnas conocido como arreglo rectangular. En la formación cívica tenemos 6 estudiantes por cada fila (cantidad por grupo) y un total de 7 filas de alumnos (cantidad de grupos). Siguiendo el orden formal, la operación se plantea multiplicando la cantidad de alumnos por fila por el número de filas: 6 multiplicado por 7 ($6 \\times 7$). Para resolver $6 \\times 7$, aplicamos la tabla del 6 o recordamos que consiste en sumar siete veces el número seis: 6, 12, 18, 24, 30, 36 y 42 estudiantes en total. Ahora bien, si observáramos la formación desde un costado del patio escolar, veríamos 7 columnas con 6 estudiantes en cada una, lo que generaría la operación 7 multiplicado por 6 ($7 \\times 6$). Al efectuar $7 \\times 6$ obtenemos exactamente el mismo producto: 42 estudiantes. Esto demuestra que cambiar el orden de los factores no altera el producto final.',
    'La multiplicación cumple de manera universal la **propiedad conmutativa**: el orden de los factores no altera el producto final obtenido:\n$$a \\times b = b \\times a$$\nEsta propiedad permite deducir y memorizar con mayor facilidad las tablas del $6, 7, 8, 9$ y $10$. Por ejemplo, conocer que $3 \\times 7 = 21$ permite saber de inmediato que $7 \\times 3 = 21$.\nLas regularidades de las tablas superiores son fundamentales:\n- Multiplicar por $10$ desplaza el valor posicional agregando un cero: $a \\times 10 = a0$.\n- La tabla del $9$ tiene la propiedad de que los dígitos de sus productos suman $9$ ($9, 18, 27, 36, 45, \\dots$).\n- En la tabla pitagórica, los productos de la fila $a$ y la columna $b$ coinciden con los de la fila $b$ y la columna $a$.',
    'Propiedad conmutativa y resolución con tablas del 6 al 10.',
    [
      { exercise: 'Calcula el producto aplicando la tabla del 7: 7 x 8', hint: 'Recuerda que 7 x 8 = 8 x 7.', answer: '56' },
      { exercise: 'Si un paquete escolar tiene 9 lápices y compramos 4 paquetes, ¿cuántos lápices hay?', hint: '9 x 4.', answer: '36 lápices' },
    ],
    [
      'Paso 1: Un agricultor siembra 8 hileras con 6 matas de maíz en cada hilera en su parcela. Paso 2: Planteamos la multiplicación de factores: $6 \\times 8$ y calculamos su valor en la tabla del 6. Solución: En total hay $6 \\times 8 = 48$ matas de maíz cultivadas en la parcela escolar.',
      'Paso 1: En una pastelería empacan galletas en 9 cajas con 7 unidades en cada caja. Paso 2: Formulamos la operación $7 \\times 9$ y comprobamos mediante conmutatividad con $9 \\times 7$. Solución: Se han empacado exactamente $7 \\times 9 = 63$ galletas listas para su distribución comercial.',
      'Paso 1: Si un pulpo tiene 8 tentáculos y observamos 4 pulpos nadando en un arrecife marino. Paso 2: Multiplicamos tentáculos por pulpo por el número de animales: $8 \\times 4$. Solución: Los cuatro pulpos reúnen un total de $8 \\times 4 = 32$ tentáculos en movimiento.',
      'Paso 1: Para calcular rápidamente el resultado de multiplicar 9 por 8 en una prueba de cálculo. Paso 2: Aplicamos la propiedad de la tabla del 9: $9 \\times 8 = 72$ (notando que 7 más 2 es 9). Solución: El producto de la operación es $9 \\times 8 = 72$ verificado minuciosamente.',
      'Paso 1: Una cooperativa escolar vende 10 cuadernos a un precio de 3 dólares cada cuaderno. Paso 2: Multiplicamos el valor unitario por las diez unidades vendidas: $3 \\times 10$. Solución: El ingreso total recaudado por la venta de los cuadernos es de $3 \\times 10 = 30$ dólares exactos.',
    ]
  ),
];

const u8Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u08-l01',
    '8.1',
    'La libra y el litro en la vida cotidiana',
    'En una visita pedagógica guiada al mercado municipal de Santa Tecla, los estudiantes de segundo grado acompañan a doña Carmen a realizar las compras de víveres para el comedor estudiantil. En el puesto de granos básicos, doña Carmen solicita que le despachen frijoles rojos y el vendedor coloca las semillas sobre una balanza mecánica con pesas metálicas. Luego, en el puesto de lácteos, doña Carmen pide leche fresca y la vendedora vierte el líquido en recipientes cilíndricos graduados. Los niños observan con gran atención y preguntan a su maestra: ¿cuáles son las unidades tradicionales y estándar que se utilizan en El Salvador para medir el peso de los sólidos y la capacidad de los líquidos?',
    'Para responder a las observaciones de los estudiantes durante la visita al mercado, diferenciamos con claridad dos magnitudes físicas fundamentales: la masa o peso de los objetos sólidos y la capacidad de los recipientes para contener líquidos. Para medir el peso de sustancias sólidas como frijoles, arroz, azúcar o maíz, en El Salvador se utiliza de forma generalizada y tradicional la libra (símbolo: lb). La balanza es el instrumento que compara el peso del producto con pesas calibradas; cuando ambos platillos quedan a la misma altura, se determina el peso exacto. Una libra se subdivide comúnmente en dos medias libras ($1/2\\text{ lb}$) o cuatro cuartos de libra ($1/4\\text{ lb}$). Por otra parte, para medir la capacidad de líquidos como la leche, el agua o los jugos naturales, se utiliza como unidad estándar el litro (símbolo: l). El litro mide el volumen interior del recipiente; un litro completo equivale a dos medios litros ($1/2\\text{ l}$) o a cuatro recipientes de un cuarto de litro ($1/4\\text{ l}$).',
    'El **peso** y la **capacidad** son dos magnitudes distintas con sus propias unidades de medida en el comercio salvadoreño:\n1. **La libra** ($\\text{lb}$): es la unidad tradicional de peso de mayor uso popular en nuestro país para comercializar alimentos sólidos. Sus equivalencias prácticas son:\n$$1\\text{ libra (lb)} = 2\\text{ medias libras} = 4\\text{ cuartos de libra} = 16\\text{ onzas (oz)}$$\n2. **El litro** ($\\text{l}$): es la unidad básica del Sistema Internacional para medir la capacidad de los líquidos. Sus subdivisiones comunes son:\n$$1\\text{ litro (l)} = 2\\text{ medios litros} = 4\\text{ cuartos de litro}$$\nPara medir el peso se utiliza la **balanza** o báscula, y para medir la capacidad se emplean **recipientes graduados**.',
    'Medición del peso en libras y capacidad en litros con sus subdivisiones.',
    [
      { exercise: '¿A cuántas medias libras equivalen 3 libras completas de maíz?', hint: 'Multiplica 3 x 2.', answer: '6 medias libras' },
      { exercise: '¿Cuántos vasos de medio litro se pueden servir con una botella de 2 litros de leche?', hint: 'Multiplica 2 x 2.', answer: '4 vasos de medio litro' },
    ],
    [
      'Paso 1: Doña Rosa compra 2 libras de frijoles negros y desea saber a cuántas medias libras equivalen. Paso 2: Como cada libra tiene 2 medias libras, multiplicamos 2 por 2: $2 \\times 2 = 4$. Solución: 2 libras de frijoles equivalen exactamente a 4 medias libras para repartir en bolsas.',
      'Paso 1: Para preparar una merienda escolar se necesitan 3 litros de fresco de horchata natural. Paso 2: Calculamos cuántos vasos de medio litro se pueden llenar: multiplicamos 3 por 2 medios litros. Solución: Con 3 litros de fresco se pueden servir exactamente 6 vasos de medio litro ($3 \\times 2 = 6$).',
      'Paso 1: En una balanza colocamos un paquete de 1 libra en el platillo izquierdo. Paso 2: En el platillo derecho colocamos dos bolsas de media libra comprobando que la balanza queda equilibrada. Solución: Se confirma experimentalmente que 1 libra equilibra perfectamente a dos medias libras de peso idéntico.',
      'Paso 1: Una jarra escolar tiene una capacidad total de 1 litro de agua purificada. Paso 2: Si vaciamos la jarra llenando recipientes pequeños de un cuarto de litro ($1/4\\text{ l}$). Solución: Se pueden llenar exactamente 4 cuartos de litro con el agua contenida en la jarra de 1 litro.',
      'Paso 1: Un comerciante tiene 8 libras de queso duro blando y las empaca en bolsas de 1 libra cada una. Paso 2: Contamos directamente una bolsa por cada libra disponible: 8 bolsas en total. Solución: El comerciante obtiene exactamente 8 bolsas individuales de 1 libra de queso para la venta.',
    ]
  ),
];

const u9Lessons2G = [
  createPscerLesson(
    'mined-mat-2g-u09-l01',
    '9.1',
    'El reloj de agujas con horas y minutos',
    'En el horario escolar de segundo grado, los alumnos deben registrar con puntualidad los momentos exactos de sus actividades diarias: el inicio de la clase de matemática, el recreo matutino y la hora del almuerzo. En el reloj de pared del aula, que tiene carátula circular numerada del 1 al 12, los estudiantes observan que la aguja corta apunta hacia el número 4 y la aguja larga apunta directamente hacia el número 6. Mateo piensa que son las 4 horas con 6 minutos, pero Sofía le recuerda que los números de la carátula no representan minutos directos para la aguja larga. ¿Qué hora exacta marca el reloj y cómo se calcula el paso de los minutos de cinco en cinco?',
    'Para leer con exactitud la hora y los minutos en un reloj analógico de agujas, analizamos las funciones diferenciadas de sus dos manecillas. La aguja corta o manecilla horaria indica las horas completas; al estar ubicada en el número 4, confirma que han transcurrido 4 horas. Por su parte, la aguja larga o minutero indica los minutos transcurridos dentro de la hora actual. En la carátula del reloj, el círculo completo contiene 60 minutos distribuidos en 12 divisiones principales marcadas con los números del 1 al 12. Esto significa que la distancia entre cada número consecutivo equivale exactamente a 5 minutos. Por lo tanto, cuando el minutero apunta a un número, la cantidad de minutos se calcula multiplicando ese número por 5. En el caso observado, el minutero apunta al número 6: multiplicamos 6 por 5 y obtenemos 30 minutos ($6 \\times 5 = 30$). El reloj marca exactamente las 4:30 (cuatro y media). El error de Mateo consistió en leer el número del minutero de forma directa en vez de multiplicarlo por cinco.',
    'En el reloj analógico de manecillas, el tiempo se lee combinando la posición de las dos agujas principales:\n1. **Horario** (aguja corta): señala la hora observando el último número que ha sobrepasado o en el que se ubica.\n2. **Minutero** (aguja larga): señala los minutos multiplicando el número al que apunta por cinco:\n$$\\text{Minutos transcurridos} = \\text{Número marcado por el minutero} \\times 5$$\nLas posiciones más destacadas del minutero son:\n- En el $12$: marca los minutos en cero ($:00$, hora en punto).\n- En el $3$: marca $15$ minutos ($3 \\times 5 = 15$, cuarto de hora).\n- En el $6$: marca $30$ minutos ($6 \\times 5 = 30$, media hora).\n- En el $9$: marca $45$ minutos ($9 \\times 5 = 45$, tres cuartos de hora).',
    'Lectura precisa del reloj de manecillas en horas y múltiplos de 5 minutos.',
    [
      { exercise: '¿Qué hora es si la aguja corta apunta al 5 y la larga apunta al 3?', hint: '3 x 5 = 15 minutos.', answer: 'Las 5:15' },
      { exercise: '¿Cuántos minutos han transcurrido si la aguja larga apunta al número 8?', hint: 'Multiplica 8 x 5.', answer: '40 minutos' },
    ],
    [
      'Paso 1: Observamos un reloj donde la aguja corta está entre el 2 y el 3, y la aguja larga apunta al 6. Paso 2: La hora es 2; calculamos minutos multiplicando 6 por 5: $6 \\times 5 = 30$. Solución: El reloj marca exactamente las 2:30 (dos y media o dos horas con treinta minutos).',
      'Paso 1: Si la aguja corta apunta hacia el 8 y la aguja larga apunta hacia el número 3. Paso 2: Calculamos los minutos del minutero: 3 multiplicado por 5 es igual a 15 minutos ($3 \\times 5 = 15$). Solución: La hora marcada es las 8:15 (ocho y cuarto de la mañana escolar).',
      'Paso 1: En la hora de salida de clases, la aguja corta apunta al 1 y la aguja larga apunta al 12. Paso 2: La aguja corta indica la hora 1 y la larga en 12 señala cero minutos adicionales. Solución: El reloj marca exactamente la 1:00 en punto de la tarde.',
      'Paso 1: Determinamos los minutos cuando la aguja minutera apunta directamente al número 9 del reloj. Paso 2: Multiplicamos el número marcado por cinco según la escala minutera: 9 por 5 es 45. Solución: Han transcurrido exactamente 45 minutos de la hora en curso ($9 \\times 5 = 45\\text{ min}$).',
      'Paso 1: Un estudiante entra a educación física a las 9:00 y sale cuando el reloj marca las 9:45. Paso 2: Restamos la hora inicial de la hora final para obtener la duración: 45 minutos menos 0 minutos. Solución: La clase de educación física duró exactamente 45 minutos de actividad continua.',
    ]
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
