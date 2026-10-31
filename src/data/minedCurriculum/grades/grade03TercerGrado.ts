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

// Lecciones P-S-C-E-R oficiales profundizadas con contenido ESMATE y 5 ejemplos resueltos
const u1Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u01-l01',
    '1.1',
    'Lectura y escritura de números hasta 10,000',
    'En un censo poblacional y comunitario realizado en los cantones del volcán de San Salvador, los encuestadores del Ministerio de Economía y Educación recopilan los datos demográficos de las familias cafetaleras. Al consolidar la información en la oficina municipal, se registra que en el cantón San Antonio viven exactamente 3,542 personas. El coordinador del censo les pide a los estudiantes de tercer grado que analicen este registro estadístico: ¿cómo se descompone este número de cuatro cifras según el valor posicional de cada uno de sus dígitos en la tabla de unidades de millar, centenas, decenas y unidades, y cómo se lee y escribe correctamente en palabras en español?',
    'Para analizar y descomponer con rigor matemático un número de cuatro cifras como 3,542, utilizamos la tabla de valor posicional extendida hasta el cuarto orden decimal. De izquierda a derecha, ubicamos cada dígito en su casilla correspondiente: la cifra 3 ocupa la columna de las Unidades de Millar (UM), con un valor relativo de 3,000 unidades; la cifra 5 se ubica en las Centenas (C), representando 500 unidades; la cifra 4 ocupa las Decenas (D), equivaliendo a 40 unidades; y la cifra 2 se ubica en las Unidades (U), con un valor de 2 unidades simples. La forma desarrollada o descomposición aditiva se expresa como la suma ordenada: 3,000 más 500 más 40 más 2 es igual a 3,542. Para leer y escribir este número en palabras, leemos primero el bloque de los millares agregando la palabra "mil" después del dígito ("tres mil"), y a continuación leemos de manera fluida las centenas, decenas y unidades restantes: "quinientos cuarenta y dos". El nombre completo oficial es tres mil quinientos cuarenta y dos.',
    'Los números de cuatro cifras comprendidos entre $1,000$ y $9,999$ se estructuran mediante cuatro órdenes posicionales sucesivos en el sistema decimal: $$N = \\text{UM} \\times 1,000 + \\text{C} \\times 100 + \\text{D} \\times 10 + \\text{U}$$ Donde cada unidad del orden superior equivale exactamente a diez unidades del orden inmediato anterior: $$1\\text{ Unidad de Millar (UM)} = 10\\text{ Centenas (C)} = 100\\text{ Decenas (D)} = 1,000\\text{ Unidades (U)}$$ Para leer y escribir en palabras un número de cuatro cifras, se menciona el número de unidades de millar seguido de la palabra "mil" y luego se lee el número de tres cifras formado por las centenas, decenas y unidades. Si alguna casilla intermedia contiene el dígito cero ($0$), esa posición no se pronuncia verbalmente, pero es indispensable escribirla en la representación simbólica para conservar el valor posicional.',
    'Descomposición polinómica y lectura oficial de números de cuatro cifras hasta 10,000.',
    [
      { exercise: 'Escribe en palabras el número 4,215.', hint: 'Cuatro mil doscientos...', answer: 'Cuatro mil doscientos quince' },
      { exercise: '¿Cuál es el valor relativo del dígito 7 en 7,804?', hint: 'El 7 está en la posición de unidades de millar.', answer: '7,000 unidades' },
    ],
    [
      'Paso 1: Para descomponer en forma desarrollada el número 7,804, identificamos el valor relativo de cada dígito. Paso 2: 7 millares valen 7,000; 8 centenas valen 800; hay 0 decenas y 4 unidades. Solución: La descomposición aditiva es $7,804 = 7,000 + 800 + 4$, leyéndose como siete mil ochocientos cuatro.',
      'Paso 1: Escribimos en cifras el número expresado oralmente como "cuatro mil doscientos quince". Paso 2: Asignamos dígitos por columna: 4 en UM, 2 en C, 1 en D y 5 en U. Solución: El número se escribe formalmente en cifras como 4,215 en la cuadrícula posicional.',
      'Paso 1: En una cooperativa agrícola se empacan 6 sacos de 1,000 libras y 3 bolsas de 100 libras. Paso 2: Calculamos el total sumando 6 millares (6,000) más 3 centenas (300): $6,000 + 300$. Solución: La cooperativa tiene 6,300 libras de café, leyéndose seis mil trescientas libras.',
      'Paso 1: Determinamos el valor relativo del dígito 9 en el número de cuatro cifras 9,451. Paso 2: El 9 se ubica en la posición de las unidades de millar: $9 \\times 1,000$. Solución: El valor relativo del 9 es de 9,000 unidades dentro de la cantidad analizada.',
      'Paso 1: Para formar el número con 5 UM, 0 C, 8 D y 2 U en la tabla. Paso 2: Escribimos ordenadamente cada dígito conservando el cero en las centenas: 5, 0, 8, 2. Solución: Se forma el número 5,082, el cual se lee como cinco mil ochenta y dos.',
    ]
  ),
  createPscerLesson(
    'mined-mat-3g-u01-l02',
    '1.2',
    'Aproximación y comparación en la recta numérica',
    'Un camión de carga pesada que transporta sacos de café cosechado en la cordillera de Apaneca viaja sobre la carretera panamericana con destino al puerto marítimo. En el odómetro de viaje, el conductor observa que ha recorrido exactamente 2,680 metros desde la salida del beneficio agroindustrial. Al mismo tiempo, en un puesto de control en el camino, otro camión de carga registra 2,340 metros recorridos. El inspector de transporte necesita resolver dos cuestiones matemáticas: primero, ¿a qué unidad de millar más cercana (a 2,000 metros o a 3,000 metros) se aproxima el primer camión, y segundo, cómo se comparan ambas distancias utilizando la recta numérica y los signos de relación de orden?',
    'Para resolver la primera parte del problema sobre el redondeo o aproximación a la unidad de millar más cercana, ubicamos el número 2,680 en la recta numérica graduada de mil en mil. El número 2,680 se encuentra entre 2,000 y 3,000. El punto medio exacto entre ambos millares es 2,500. La regla oficial de aproximación establece que se debe examinar la cifra del orden inmediatamente inferior al que se desea aproximar; en este caso, la cifra de las centenas. En el número 2,680, la cifra de las centenas es 6. Dado que 6 es mayor o igual a 5 ($6 \\ge 5$), el número ha sobrepasado la mitad del intervalo y se encuentra más próximo al millar superior. Por lo tanto, 2,680 se aproxima a 3,000 metros. Para la segunda parte, comparamos 2,680 y 2,340: ambos tienen 2 unidades de millar iguales; al comparar las centenas, 6 centenas es mayor que 3 centenas ($6 > 3$). En consecuencia, 2,680 es estrictamente mayor que 2,340 ($2,680 > 2,340$).',
    'La **aproximación** o redondeo a la unidad de millar consiste en sustituir un número por el millar más cercano para facilitar estimaciones rápidas. La regla formal establece:\n1. Se observa la cifra de las **centenas**:\n- Si la centena es menor que cinco ($0, 1, 2, 3, 4$), se mantiene la unidad de millar y las centenas, decenas y unidades se sustituyen por ceros (aproximación por defecto).\n- Si la centena es mayor o igual que cinco ($5, 6, 7, 8, 9$), se suma uno ($+1$) a la unidad de millar y las demás cifras se convierten en ceros (aproximación por exceso).\n2. Para **comparar** dos números de cuatro cifras en la recta numérica:\n- Es mayor el número que se ubica más a la derecha.\n- Se comparan de izquierda a derecha cifra por cifra: primero las UM, luego las C, después las D y finalmente las U.',
    'Reglas de redondeo a la unidad de millar y comparación ordinal en la recta.',
    [
      { exercise: 'Aproxima 4,320 a la unidad de millar más cercana.', hint: 'Centena 3 < 5.', answer: '4,000' },
      { exercise: 'Aproxima 6,750 a la unidad de millar más cercana.', hint: 'Centena 7 >= 5.', answer: '7,000' },
    ],
    [
      'Paso 1: Aproximamos el número 4,320 a la unidad de millar más cercana examinando su centena. Paso 2: La cifra de las centenas es 3; como 3 es menor que 5 ($3 < 5$), redondeamos hacia abajo. Solución: 4,320 se aproxima a 4,000 unidades de millar exactas.',
      'Paso 1: Para redondear 6,750 a la unidad de millar, observamos la cifra de las centenas. Paso 2: La centena es 7; al ser 7 mayor o igual que 5 ($7 \\ge 5$), sumamos 1 a los millares. Solución: El número 6,750 se aproxima a 7,000 unidades de millar.',
      'Paso 1: Comparamos en la recta numérica los números 5,420 y 5,480. Paso 2: Tienen iguales UM (5) e iguales C (4); en decenas, 2 D es menor que 8 D ($2 < 8$). Solución: Concluimos que 5,420 es menor que 5,480, escribiéndose $5,420 < 5,480$.',
      'Paso 1: Un atleta corre 3,500 metros en una competencia de fondo en el estadio escolar. Paso 2: Como la centena es exactamente 5, aplicamos la regla de aproximación al millar superior. Solución: La distancia recorrida de 3,500 metros se aproxima formalmente a 4,000 metros.',
      'Paso 1: Ordenamos de menor a mayor los números 8,100; 7,950 y 8,300. Paso 2: Comparamos millares y centenas: 7,950 tiene 7 UM; 8,100 tiene 8 UM y 1 C; 8,300 tiene 8 UM y 3 C. Solución: El orden ascendente correcto es $7,950 < 8,100 < 8,300$.',
    ]
  ),
];

const u2Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u02-l01',
    '2.1',
    'Suma vertical de números de hasta cuatro cifras llevando',
    'En la gran feria agropecuaria y ganadera de San Miguel, los organizadores registran la asistencia de familias y productores durante el fin de semana patronal. El día sábado ingresaron por los molinetes de control 2,456 visitantes con boleto pagado. El día domingo, que fue el día de mayor concurrencia popular, ingresaron 1,789 visitantes adicionales. La comisión financiera de la feria necesita calcular el número total consolidado de boletos emitidos en ambos días. ¿Cómo se ordenan y suman en forma vertical estas dos cantidades de cuatro cifras cuando se presentan múltiples llevadas sucesivas a las decenas, centenas y unidades de millar?',
    'Para resolver esta suma vertical aplicando el algoritmo formal ESMATE, alineamos minuciosamente los dos sumandos en una tabla posicional de cuatro columnas: Unidades de Millar (UM), Centenas (C), Decenas (D) y Unidades (U). Escribimos 2,456 en la fila superior y 1,789 en la fila inferior, trazando la línea divisoria. Iniciamos el cálculo sumando las unidades: 6 más 9 es igual a 15; como 15 tiene 1 decena y 5 unidades, escribimos el 5 en la columna de las unidades y llevamos 1 a la columna de las decenas. Luego sumamos las decenas incluyendo la llevada: 5 decenas más 8 decenas más 1 decena que llevábamos resulta 14 decenas; escribimos 4 en las decenas y llevamos 1 a las centenas. A continuación sumamos las centenas: 4 centenas más 7 centenas más 1 centena llevada da 12 centenas; escribimos 2 en las centenas y llevamos 1 a las unidades de millar. Por último sumamos los millares: 2 más 1 más 1 llevado resulta 4 unidades de millar. El total consolidado es de 4,245 visitantes.',
    'El algoritmo de la **suma vertical con llevadas sucesivas** para números de cuatro cifras sigue una secuencia estricta de derecha a izquierda:\n1. **Unidades**: si $u_1 + u_2 \\ge 10$, se escribe la unidad en el resultado y se lleva $1$ decena.\n2. **Decenas**: se suman las decenas y la llevada; si la suma es $\\ge 10$, se escribe la decena y se lleva $1$ centena.\n3. **Centenas**: se suman las centenas y la llevada; si la suma es $\\ge 10$, se escribe la centena y se lleva $1$ unidad de millar.\n4. **Unidades de Millar**: se suman los millares junto con la llevada correspondiente:\n$$\\begin{array}{rl} 1\\;1\\;1 & \\text{(llevadas)} \\\\ 2456 & \\\\ +\\; 1789 & \\\\ \\hline 4245 & \\end{array}$$\nEste procedimiento garantiza que no se omita ninguna agrupación posicional en el cálculo aditivo.',
    'Algoritmo formal de adición vertical con llevadas encadenadas hasta UM.',
    [
      { exercise: 'Calcula verticalmente: 3,580 + 2,645', hint: 'Suma llevando a centenas y millares.', answer: '6,225' },
      { exercise: 'En una bodega hay 1,450 sacos de frijol y compran 2,875 más. ¿Cuántos sacos hay?', hint: '1,450 + 2,875.', answer: '4,325 sacos' },
    ],
    [
      'Paso 1: Sumamos verticalmente 3,580 más 2,645 alineando UM, C, D y U. Paso 2: Unidades: 0 + 5 = 5. Decenas: 8 + 4 = 12 (llevo 1). Centenas: 5 + 6 + 1 = 12 (llevo 1). Millares: 3 + 2 + 1 = 6. Solución: El resultado formal de la suma es $3,580 + 2,645 = 6,225$.',
      'Paso 1: En una biblioteca escolar hay 1,845 libros de ciencias y se reciben 2,378 libros de literatura. Paso 2: Sumamos por columnas: U: 5 + 8 = 13; D: 4 + 7 + 1 = 12; C: 8 + 3 + 1 = 12; UM: 1 + 2 + 1 = 4. Solución: La biblioteca reúne un total de 4,223 libros ($1,845 + 2,378 = 4,223$).',
      'Paso 1: Para sumar verticalmente 4,679 más 3,584 disponemos los términos en cuadrícula. Paso 2: Calculamos con llevadas: U: 9+4=13; D: 7+8+1=16; C: 6+5+1=12; UM: 4+3+1=8. Solución: La suma total calculada es $4,679 + 3,584 = 8,263$ verificada columna por columna.',
      'Paso 1: Un camión traslada 2,500 libras de azúcar en un viaje y 3,850 libras en un segundo viaje. Paso 2: Sumamos verticalmente unidades de millar y centenas: 0+0=0, 0+5=5, 5+8=13 (llevo 1), 2+3+1=6. Solución: El cargamento total transportado es de 6,350 libras de azúcar ($2,500 + 3,850 = 6,350$).',
      'Paso 1: Sumamos 5,198 más 2,903 prestando atención a las llevadas intermedias. Paso 2: U: 8 + 3 = 11 (llevo 1); D: 9 + 0 + 1 = 10 (llevo 1); C: 1 + 9 + 1 = 11 (llevo 1); UM: 5 + 2 + 1 = 8. Solución: La suma obtenida es $5,198 + 2,903 = 8,101$.',
    ]
  ),
];

const u3Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u03-l01',
    '3.1',
    'Ángulos rectos, agudos y obtusos',
    'En el taller de carpintería y geometría escolar de tercer grado, los estudiantes observan diferentes herramientas e instrumentos de trabajo: una escuadra metálica de carpintero, una tijera de cortar tela abierta en diferentes posiciones y una escalera de mano apoyada contra la pared. El profesor les muestra que cuando dos líneas rectas se cruzan o comparten un mismo punto de origen llamado vértice, se genera una abertura en el plano llamada ángulo. El maestro les pide clasificar las aberturas que forman las hojas de la tijera cuando se abren poco, cuando forman una esquina perfecta y cuando se abren ampliamente. ¿Cómo se clasifican estos ángulos según su abertura respecto al ángulo recto?',
    'Para clasificar rigurosamente los ángulos formados por dos semirrectas que comparten un vértice común, tomamos como unidad fundamental de referencia geométrica el ángulo recto. Un ángulo recto mide exactamente 90 grados sexagesimales ($90^\\circ$) y corresponde a la abertura perfecta de la esquina de una hoja de papel doblada en cuatro partes iguales o a la esquina interior de una escuadra escolar. Cuando abrimos la tijera de tela de manera que sus dos hojas coincidan con la esquina de la escuadra, el ángulo formado es un ángulo recto ($90^\\circ$). Si cerramos un poco las hojas de la tijera de modo que la abertura sea menor que la de la esquina de la escuadra (es decir, mayor que $0^\\circ$ y menor que $90^\\circ$), obtenemos una abertura puntiaguda llamada ángulo agudo. Por el contrario, si abrimos las hojas de la tijera de forma muy amplia superando la esquina de la escuadra (más de $90^\\circ$ pero menos de $180^\\circ$), la abertura generada recibe el nombre de ángulo obtuso.',
    'Un **ángulo** es la región del plano comprendida entre dos semirrectas que tienen el mismo punto de origen llamado **vértice**. Según la amplitud de su abertura, los ángulos se clasifican formalmente en:\n1. **Ángulo recto**: mide exactamente noventa grados sexagesimales:\n$$\\text{Ángulo recto} = 90^\\circ$$\nSus dos lados son semirrectas perpendiculares entre sí.\n2. **Ángulo agudo**: tiene una abertura menor que la de un ángulo recto:\n$$0^\\circ < \\text{Ángulo agudo} < 90^\\circ$$\n3. **Ángulo obtuso**: tiene una abertura mayor que la de un ángulo recto y menor que un ángulo llano:\n$$90^\\circ < \\text{Ángulo obtuso} < 180^\\circ$$\nPara comprobar si un ángulo es recto, agudo u obtuso en clase se utiliza la esquina recta patrón de una escuadra.',
    'Clasificación angular en el plano euclidiano respecto al ángulo recto.',
    [
      { exercise: '¿Cómo se llama un ángulo cuya medida es de 45°?', hint: 'Es menor que 90°.', answer: 'Ángulo agudo' },
      { exercise: '¿Qué tipo de ángulo forman las esquinas rectangulares de una puerta?', hint: 'Esquinas de 90°.', answer: 'Ángulo recto' },
    ],
    [
      'Paso 1: Examinamos la esquina de un libro escolar y comparamos su abertura con la escuadra. Paso 2: Observamos que los dos bordes del libro coinciden exactamente con los lados de la escuadra. Solución: La esquina del libro forma un ángulo recto de noventa grados ($90^\\circ$).',
      'Paso 1: Al abrir un abanico escolar hasta la mitad, observamos una abertura que supera la esquina recta. Paso 2: Comprobamos con la escuadra que la abertura es mayor que $90^\\circ$ pero menor que una línea recta. Solución: El abanico abierto forma geométricamente un ángulo obtuso.',
      'Paso 1: La punta afilada de un lápiz escolar de grafito forma una esquina estrecha. Paso 2: Colocamos la escuadra y confirmamos que la abertura de la punta es notablemente menor que $90^\\circ$. Solución: La punta del lápiz constituye un ángulo agudo al ser menor que el ángulo recto.',
      'Paso 1: Las manecillas de un reloj marcan exactamente las 3:00 en punto de la tarde. Paso 2: El horario en el 3 y el minutero en el 12 forman dos líneas perpendiculares en la carátula. Solución: A las 3:00 en punto, las manecillas forman un ángulo recto perfecto de $90^\\circ$.',
      'Paso 1: Si abrimos una puerta formando una abertura de aproximadamente 45 grados. Paso 2: Comparamos la abertura con la escuadra y verificamos que 45 es menor que noventa grados ($45^\\circ < 90^\\circ$). Solución: La puerta entreabierta define un ángulo agudo respecto al marco de la pared.',
    ]
  ),
];

const u4Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u04-l01',
    '4.1',
    'Multiplicación de números de dos y tres cifras por una cifra',
    'En un taller artesanal de calzado de Santa Ana, un equipo de zapateros fabrica pares de zapatos escolares para abastecer el paquete de útiles del Ministerio de Educación. Cada día de trabajo completo, el taller produce exactamente 234 pares de zapatos debidamente empacados en cajas de cartón. El propietario del taller recibe un pedido institucional que requiere conocer cuántos pares de zapatos se lograrán producir en un período continuo de 3 días laborables al mismo ritmo de trabajo. ¿Cómo se plantea y calcula esta operación utilizando el algoritmo formal de multiplicación vertical de tres cifras por una cifra con llevadas según el libro ESMATE?',
    'Para calcular la producción total de zapatos en los 3 días de trabajo, planteamos la multiplicación vertical del número de tres cifras 234 (multiplicando) por el número de una cifra 3 (multiplicador): $234 \\times 3$. Colocamos el multiplicando 234 en la fila superior alineando Centenas (2), Decenas (3) y Unidades (4), y debajo escribimos el multiplicador 3 alineado en la columna de las unidades, trazando la línea de resultado. El algoritmo se ejecuta multiplicando el 3 por cada cifra del multiplicando de derecha a izquierda:\nPrimero, multiplicamos por las unidades: 3 por 4 unidades es igual a 12 unidades. Escribimos la cifra 2 en la casilla de las unidades y llevamos 1 decena a la parte superior de las decenas.\nSegundo, multiplicamos por las decenas: 3 por 3 decenas es igual a 9 decenas; sumamos la decena que llevábamos: 9 más 1 es igual a 10 decenas. Escribimos la cifra 0 en las decenas y llevamos 1 centena a las centenas.\nTercero, multiplicamos por las centenas: 3 por 2 centenas es igual a 6 centenas; sumamos la centena llevada: 6 más 1 es igual a 7 centenas. El resultado final es 702 pares de zapatos.',
    'Para multiplicar un número de tres cifras por un número de una cifra en forma vertical ($CDU \\times U$), se multiplica el factor inferior por cada cifra del factor superior de derecha a izquierda:\n1. Multiplicador por **Unidades**: se escribe la unidad y se lleva la decena si el producto es $\\ge 10$.\n2. Multiplicador por **Decenas**: se calcula el producto, se le suma la llevada, se anota la decena y se lleva la centena si corresponde.\n3. Multiplicador por **Centenas**: se calcula el producto y se le suma la llevada respectiva:\n$$\\begin{array}{rl} 1\\;1 & \\text{(llevadas)} \\\\ 234 & \\\\ \\times\\quad 3 & \\\\ \\hline 702 & \\end{array}$$\nEste algoritmo asegura la aplicación distributiva del producto sobre la descomposición polinómica decimal: $3 \\times (200 + 30 + 4) = 600 + 90 + 12 = 702$.',
    'Algoritmo vertical de multiplicación de 3 cifras por 1 cifra con llevadas.',
    [
      { exercise: 'Calcula verticalmente: 312 x 3', hint: 'Sin llevar.', answer: '936' },
      { exercise: 'Calcula verticalmente: 145 x 4', hint: 'Lleva a decenas y centenas.', answer: '580' },
    ],
    [
      'Paso 1: Multiplicamos verticalmente 312 por 3 sin llevadas intermedias. Paso 2: Unidades: 3 x 2 = 6; Decenas: 3 x 1 = 3; Centenas: 3 x 3 = 9. Solución: El producto de la operación es exactamente $312 \\times 3 = 936$, resuelto de forma directa y ordenada.',
      'Paso 1: Para calcular 125 por 4 en forma vertical con llevada a decenas y centenas. Paso 2: U: 4 x 5 = 20 (llevo 2); D: 4 x 2 + 2 = 10 (llevo 1); C: 4 x 1 + 1 = 5. Solución: El resultado obtenido es $125 \\times 4 = 500$ pares de calcetines escolares.',
      'Paso 1: En una granja avícola empacan 416 huevos diarios durante 2 días seguidos. Paso 2: Multiplicamos 416 por 2: U: 2 x 6 = 12 (llevo 1); D: 2 x 1 + 1 = 3; C: 2 x 4 = 8. Solución: La producción total acumulada es de $416 \\times 2 = 832$ huevos.',
      'Paso 1: Multiplicamos 53 por 4 colocando las cifras en columnas posicionales. Paso 2: Unidades: 4 x 3 = 12 (escribimos 2 y llevamos 1); Decenas: 4 x 5 + 1 = 21. Solución: El producto vertical calculado es $53 \\times 4 = 212$ verificado paso a paso.',
      'Paso 1: Un camión traslada 148 cajas de leche escolar en 5 entregas idénticas. Paso 2: Multiplicamos 148 por 5: U: 5x8=40 (llevo 4); D: 5x4+4=24 (llevo 2); C: 5x1+2=7. Solución: Se han distribuido exactamente $148 \\times 5 = 740$ cajas de leche en total.',
    ]
  ),
];

const u5Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u05-l01',
    '5.1',
    'Triángulos y cálculo del perímetro',
    'En una comunidad campesina de Cojutepeque, un agricultor decide cercar con alambre de púas y postes de madera una parcela de tierra que tiene forma triangular para proteger sus cultivos de hortalizas. Con una cinta métrica de agrimensor, el agricultor mide los tres lados de la parcela: el primer lado mide 15 metros, el segundo lado mide 20 metros y el tercer lado mide 25 metros. Para comprar la cantidad exacta de alambre requerida para una sola vuelta completa, el agricultor necesita calcular la longitud total de la cerca que rodea el terreno. ¿Qué nombre recibe la medida del contorno total de una figura poligonal y cómo se calcula el perímetro de cualquier triángulo?',
    'Para calcular la longitud total de la cerca que rodea la parcela de tierra, debemos determinar el contorno completo de la figura geométrica formada por el terreno. En geometría, la longitud total del contorno o frontera de cualquier polígono plano cerrado se denomina perímetro y se simboliza comúnmente con la letra mayúscula P. La parcela analizada tiene exactamente tres lados rectos, por lo que corresponde a un triángulo con lados de longitudes desiguales (conocido como triángulo escaleno). La regla matemática para obtener el perímetro de un triángulo consiste en sumar las longitudes de sus tres lados constitutivos. En este caso particular, sumamos las medidas de los tres bordes de la parcela: 15 metros del primer lado, más 20 metros del segundo lado, más 25 metros del tercer lado. Al efectuar la adición obtenemos: 15 más 20 es igual a 35 metros; y 35 más 25 resulta exactamente 60 metros ($15 + 20 + 25 = 60$). Por lo tanto, el agricultor debe comprar 60 metros lineales de alambre de púas para dar una vuelta completa a la parcela.',
    'El **perímetro** ($P$) de una figura geométrica plana es la medida de la longitud total de su contorno exterior. En cualquier triángulo cuyos tres lados miden $a$, $b$ y $c$, el perímetro se calcula mediante la fórmula general de la suma de sus lados:\n$$P = a + b + c$$\nLos triángulos se clasifican según la longitud de sus lados en tres tipos fundamentales:\n1. **Triángulo equilátero**: tiene sus tres lados de igual longitud ($a = b = c$). Su perímetro se simplifica multiplicando por tres: $P = 3 \\times a$.\n2. **Triángulo isósceles**: tiene dos lados de igual longitud y uno diferente ($a = b \\neq c$). Su perímetro es $P = 2 \\times a + c$.\n3. **Triángulo escaleno**: tiene sus tres lados de medidas completamente distintas ($a \\neq b \\neq c$).',
    'Deducción y cálculo del perímetro de triángulos equiláteros, isósceles y escalenos.',
    [
      { exercise: 'Calcula el perímetro de un triángulo equilátero cuyos lados miden 9 cm cada uno.', hint: 'Suma 9 + 9 + 9 o multiplica 9 x 3.', answer: '27 cm' },
      { exercise: 'Un triángulo tiene lados de 7 m, 10 m y 12 m. ¿Cuál es su perímetro?', hint: 'Suma 7 + 10 + 12.', answer: '29 metros' },
    ],
    [
      'Paso 1: Calculamos el perímetro de un triángulo equilátero cuyos tres lados miden 8 cm cada uno. Paso 2: Aplicamos la fórmula del triángulo equilátero multiplicando 3 por 8 cm: $3 \\times 8 = 24$. Solución: El perímetro total del triángulo equilátero es exactamente $P = 24\\text{ cm}$.',
      'Paso 1: Un triángulo isósceles tiene dos lados iguales de 12 metros y una base de 7 metros. Paso 2: Sumamos las tres longitudes: 12 más 12 más 7 metros ($12 + 12 + 7 = 31$). Solución: El perímetro del triángulo isósceles es de $P = 31\\text{ metros}$ lineales.',
      'Paso 1: Para hallar el perímetro de un triángulo escaleno de lados 6 cm, 9 cm y 11 cm. Paso 2: Sumamos las medidas de los tres lados diferentes: 6 más 9 más 11 es igual a 26. Solución: El contorno exterior mide exactamente $P = 26\\text{ cm}$ de perímetro.',
      'Paso 1: Un patio escolar de forma cuadrada mide 10 metros de lado en cada borde. Paso 2: Como el cuadrado tiene 4 lados iguales, multiplicamos 4 por 10 metros: $4 \\times 10$. Solución: El perímetro total que encierra el patio escolar es de $P = 40\\text{ metros}$.',
      'Paso 1: Se desea enmarcar una fotografía triangular con lados de 14 cm, 18 cm y 20 cm. Paso 2: Sumamos ordenadamente las medidas de las molduras: $14 + 18 + 20 = 52$. Solución: Se requieren exactamente 52 cm de moldura para completar el marco de la fotografía.',
    ]
  ),
];

const u6Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u06-l01',
    '6.1',
    'División con residuo y algoritmo de reparto',
    'En una jornada de cosecha en las milpas de San Vicente, un agricultor corta 23 elotes tiernos para preparar tamales y elotes locos. Para trasladarlos con comodidad, decide repartir los 23 elotes equitativamente en 4 bolsas plásticas resistentes de manera que cada bolsa contenga exactamente la misma cantidad de mazorcas. Al comenzar a colocar los elotes uno por uno en las bolsas, el agricultor nota que después de llenar las bolsas con cantidades iguales, le quedan algunos elotes sobrantes que ya no alcanzan para repartir uno más a cada bolsa. ¿Cuántos elotes coloca en cada bolsa, cuántos elotes sobran y qué relación fundamental define a la división inexacta?',
    'Para resolver esta situación de reparto equitativo, aplicamos la operación de división en los números naturales. El número total de elotes que se van a repartir es 23 y representa el dividendo ($D$). La cantidad de bolsas entre las cuales se reparten los elotes es 4 y representa el divisor ($d$). La cantidad de elotes que le corresponde a cada bolsa es el cociente ($q$), y los elotes que sobran forman el residuo ($r$). Para encontrar el cociente, buscamos en la tabla de multiplicar del 4 un número que multiplicado por 4 se acerque lo más posible a 23 sin pasarse: 4 por 5 es igual a 20 ($4 \\times 5 = 20$), mientras que 4 por 6 es 24 ($4 \\times 6 = 24$, que sobrepasa a 23). Por lo tanto, el cociente es 5 elotes por bolsa. Al colocar 5 elotes en cada una de las 4 bolsas, hemos repartido 20 elotes en total. Los elotes que sobran se calculan restando el total repartido del dividendo original: 23 menos 20 es igual a 3 elotes sobrantes. El residuo es 3, el cual cumple estrictamente la condición de ser menor que el divisor 4.',
    'La **división** es la operación matemática que modela situaciones de reparto equitativo y agrupamiento en partes iguales. Cuando la cantidad a repartir no se distribuye de manera exacta, se produce una **división inexacta o con residuo**. En toda división en los números naturales, los cuatro términos fundamentales cumplen la **relación del algoritmo de Euclides**:\n$$\\text{Dividendo} = \\text{Divisor} \\times \\text{Cociente} + \\text{Residuo} \\implies D = d \\times q + r$$\nBajo la condición indispensable y obligatoria de que el residuo debe ser estrictamente menor que el divisor:\n$$0 \\le r < d$$\nSi el residuo es cero ($r = 0$), la división se denomina **división exacta**.',
    'Algoritmo formal de reparto en división inexacta: D = d*q + r con r < d.',
    [
      { exercise: 'Calcula el cociente y el residuo de la división: 27 ÷ 5', hint: '5 x 5 = 25; resta 27 - 25.', answer: 'Cociente 5, residuo 2' },
      { exercise: 'Si se reparten 38 naranjas en 6 canastas iguales, ¿cuántas sobran?', hint: '6 x 6 = 36.', answer: 'Sobran 2 naranjas' },
    ],
    [
      'Paso 1: Repartimos 29 mandarinas entre 4 niños en partes iguales y calculamos el sobrante. Paso 2: Buscamos en la tabla del 4: $4 \\times 7 = 28$. Restamos 29 menos 28 obteniendo residuo 1. Solución: A cada niño le tocan 7 mandarinas (cociente) y sobra 1 mandarina ($r = 1 < 4$).',
      'Paso 1: Dividimos 17 cuadernos entre 3 estudiantes para una práctica escolar formativa. Paso 2: Multiplicamos 3 por 5 igual a 15; restamos 17 menos 15 obteniendo 2 de residuo. Solución: El cociente es 5 cuadernos por estudiante y sobran 2 cuadernos ($17 = 3 \\times 5 + 2$).',
      'Paso 1: Se desean colocar 35 huevos en cartones con capacidad para 6 huevos cada uno. Paso 2: Calculamos en la tabla del 6: $6 \\times 5 = 30$. Restamos: $35 - 30 = 5$. Solución: Se llenan completamente 5 cartones (cociente 5) y sobran 5 huevos sin empacar ($r = 5$).',
      'Paso 1: Para efectuar la división formal de 45 entre 7 buscando cociente y residuo. Paso 2: Estimamos: 7 por 6 es 42; calculamos el residuo restando 45 menos 42: $r = 3$. Solución: La división produce cociente 6 y residuo 3, cumpliendo que 3 es menor que 7.',
      'Paso 1: Un maestro tiene 50 lápices y los reparte en 8 estuches con igual cantidad. Paso 2: En la tabla del 8: $8 \\times 6 = 48$. Restamos 50 menos 48 quedando 2 lápices. Solución: Cada estuche recibe 6 lápices y sobran 2 lápices ($50 = 8 \\times 6 + 2$).',
    ]
  ),
];

const u7Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u07-l01',
    '7.1',
    'El metro y el kilómetro',
    'En un proyecto escolar de educación física y geografía comunitaria en el departamento de La Paz, dos escuelas rurales organizan una carrera de caminata ecológica para concientizar sobre el cuidado del medio ambiente. La comisión de docentes mide con un odómetro de rueda la distancia total que separa la Escuela El Espino de la Escuela San José sobre la calle principal pavimentada y registra exactamente 3,000 metros de distancia. Los estudiantes de tercer grado desean registrar este dato en un mapa mural escolar donde las distancias interurbanas se expresan en kilómetros. ¿Cómo se define el kilómetro, cuál es su factor de conversión respecto al metro y a cuántos kilómetros equivale la distancia medida entre ambas escuelas?',
    'Para responder a esta pregunta de medición y conversión de longitudes, analizamos las unidades del Sistema Internacional de Unidades (SI). La unidad básica y fundamental para medir longitudes en nuestra vida diaria es el metro, representado por el símbolo m. Sin embargo, cuando se trata de medir distancias geográficas muy grandes entre pueblos, ciudades, carreteras o centros escolares, expresar las medidas en metros requiere manejar números con demasiadas cifras de ceros que resultan incómodos para la comunicación social y la cartografía. Por esta razón, el sistema métrico decimal introduce una unidad mayor denominada kilómetro, cuyo símbolo oficial es km. El prefijo "kilo" proviene del idioma griego y significa exactamente mil unidades. En consecuencia, un kilómetro equivale a mil metros ($1\\text{ km} = 1,000\\text{ m}$). Para convertir los 3,000 metros medidos entre las dos escuelas a kilómetros, dividimos la cantidad entre 1,000: 3,000 dividido entre 1,000 es igual a 3 kilómetros ($3,000 \\div 1,000 = 3$). La distancia entre las dos escuelas es de 3 km.',
    'El **metro** ($\\text{m}$) y el **kilómetro** ($\\text{km}$) son unidades de medida de longitud del Sistema Internacional utilizadas para describir distancias:\n1. **Factor de equivalencia fundamental**: un kilómetro contiene exactamente mil metros:\n$$1\\text{ kilómetro (km)} = 1,000\\text{ metros (m)}$$\n2. **Reglas de conversión**:\n- Para convertir de **kilómetros a metros**, se multiplica por mil ($1,000$):\n$$\\text{Distancia en m} = \\text{Distancia en km} \\times 1,000$$\n- Para convertir de **metros a kilómetros**, se divide entre mil ($1,000$):\n$$\\text{Distancia en km} = \\frac{\\text{Distancia en m}}{1,000}$$\nEl kilómetro es la unidad estándar empleada en la señalización de carreteras y mapas de El Salvador.',
    'Conversión métrica bidireccional entre el metro y el kilómetro.',
    [
      { exercise: '¿A cuántos metros equivale un recorrido de 4 kilómetros?', hint: 'Multiplica 4 x 1,000.', answer: '4,000 metros' },
      { exercise: 'Convierte 8,000 metros a kilómetros.', hint: 'Divide 8,000 entre 1,000.', answer: '8 km' },
    ],
    [
      'Paso 1: Convertimos una caminata de 5 kilómetros a su medida equivalente en metros. Paso 2: Multiplicamos los kilómetros por el factor 1,000: $5 \\times 1,000 = 5,000$. Solución: La caminata de 5 km equivale exactamente a una distancia de 5,000 metros de recorrido.',
      'Paso 1: Un ciclista recorre 7,000 metros en una pista de entrenamiento rural. Paso 2: Dividimos la cantidad en metros entre 1,000 para obtener kilómetros: $7,000 \\div 1,000 = 7$. Solución: El ciclista ha pedaleado una distancia de 7 kilómetros ($7,000\\text{ m} = 7\\text{ km}$).',
      'Paso 1: Un autobús escolar viaja 2 km por carretera y luego 800 metros por camino vecinal. Paso 2: Convertimos 2 km a metros ($2,000\\text{ m}$) y sumamos los 800 metros: $2,000 + 800$. Solución: El recorrido total del autobús es de 2,800 metros o 2 km con 800 metros.',
      'Paso 1: Para saber cuántos kilómetros hay en 4,500 metros recorridos por un camión. Paso 2: Separamos 4,000 metros (4 km) y el remanente de 500 metros (medio kilómetro). Solución: 4,500 metros equivalen a 4 kilómetros y medio ($4.5\\text{ km}$ o 4 km con 500 m).',
      'Paso 1: La cerca perimetral de un bosque municipal mide 10 kilómetros de longitud total. Paso 2: Multiplicamos por 1,000 para determinar cuántos metros de cerca se construyeron: $10 \\times 1,000$. Solución: La cerca del bosque tiene una longitud total de 10,000 metros de extensión.',
    ]
  ),
];

const u8Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u08-l01',
    '8.1',
    'Concepto de fracción y partes de la unidad',
    'En la fiesta de celebración del día de la madre en la escuela rural, una madre de familia lleva para compartir una tradicional y deliciosa quesadilla salvadoreña horneada en molde redondo. Con un cuchillo largo, la madre divide la quesadilla completa en 4 partes exactamente iguales en forma y tamaño. Juan toma y se come 1 de esas 4 partes con una taza de chocolate caliente, mientras que su hermana María toma 2 partes para compartirlas con sus amigos. La maestra de tercer grado propone a los alumnos: ¿cómo expresamos matemáticamente las partes que comieron Juan y María respecto al total de la quesadilla utilizando el concepto de fracción, y qué representan el numerador y el denominador?',
    'Para representar matemáticamente las partes tomadas de un objeto entero, utilizamos el concepto numérico de fracción. Consideramos la quesadilla completa como la unidad entera indivisa (1 unidad). La condición indispensable para que exista una fracción es que el objeto entero se divida en partes exactamente iguales entre sí. En este caso, la quesadilla fue dividida en 4 partes iguales; este número 4 representa la cantidad total de partes iguales en que se fraccionó la unidad y se denomina denominador, escribiéndose en la parte inferior debajo de una línea horizontal llamada raya fraccionaria. Por otro lado, la cantidad de partes que una persona toma o consume se denomina numerador y se escribe en la parte superior. Como Juan comió 1 de las 4 partes iguales, la fracción que representa su porción es un cuarto, denotada simbólicamente como $1/4$. En el caso de María, quien tomó 2 de las 4 partes iguales, su porción se expresa como dos cuartos ($2/4$). Cada fracción nos permite cuantificar con exactitud porciones menores que la unidad.',
    'Una **fracción** es una expresión matemática que representa una o varias partes iguales tomadas de una unidad dividida en porciones equivalentes. Su estructura formal se escribe como:\n$$\\frac{a}{b} = \\frac{\\text{Numerador}}{\\text{Denominador}}$$\nDonde:\n1. **Denominador ($b$)**: indica el número de partes iguales en que se ha dividido la unidad entera ($b \\neq 0$).\n2. **Numerador ($a$)**: indica el número de esas partes iguales que se han tomado, pintado o considerado.\nUna fracción es una **fracción propia** o menor que la unidad cuando el numerador es estrictamente menor que el denominador ($a < b$). En la recta numérica escolar, las fracciones propias se ubican en el intervalo entre $0$ y $1$ dividiendo el segmento unitario en $b$ partes iguales.',
    'Concepto formal de fracción propia, numerador y denominador.',
    [
      { exercise: '¿Cuál es el numerador y cuál es el denominador en la fracción 3/5?', hint: 'El de arriba es numerador y el de abajo denominador.', answer: 'Numerador 3, denominador 5' },
      { exercise: 'Si una pizza se divide en 6 porciones iguales y tomas 2, ¿qué fracción representa?', hint: '2 sobre 6.', answer: '2/6 de la pizza' },
    ],
    [
      'Paso 1: Una pizza escolar se corta en 8 rebanadas iguales y Carlos come 3 rebanadas. Paso 2: El denominador es 8 (partes totales) y el numerador es 3 (partes comidas). Solución: La fracción que comió Carlos es tres octavos, escrita matemáticamente como $\\frac{3}{8}$.',
      'Paso 1: En una tira de papel dividida en 5 partes iguales, Sofía colorea 4 partes con témpera azul. Paso 2: Escribimos el numerador 4 arriba y el denominador 5 abajo de la raya fraccionaria. Solución: La porción coloreada de la tira corresponde a la fracción cuatro quintos: $\\frac{4}{5}$.',
      'Paso 1: Identificamos los términos de la fracción tres séptimos ($\\frac{3}{7}$). Paso 2: El número 3 colocado en la parte superior es el numerador; el 7 en la parte inferior es el denominador. Solución: En $\\frac{3}{7}$, el numerador es 3 y el denominador es 7.',
      'Paso 1: Si un litro de jugo se reparte equitativamente en 2 jarras idénticas de igual tamaño. Paso 2: Cada jarra contiene 1 de las 2 partes iguales en que se dividió el litro. Solución: Cada jarra contiene un medio litro de jugo, representado por la fracción $\\frac{1}{2}$.',
      'Paso 1: Ubicamos la fracción dos tercios ($\\frac{2}{3}$) en la recta numérica entre 0 y 1. Paso 2: Dividimos la unidad de 0 a 1 en 3 segmentos iguales y avanzamos 2 partes desde cero. Solución: El punto de llegada sobre la recta marca exactamente la posición de $\\frac{2}{3}$.',
    ]
  ),
];

const u9Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u09-l01',
    '9.1',
    'Monedas y gráficas de barras con escala',
    'En el centro escolar de tercer grado, los estudiantes del comité ambiental organizan una campaña de reciclaje y una encuesta sobre deportes preferidos entre 50 alumnos de la escuela. Para presentar los resultados ante la asamblea escolar de forma visual, clara y comprensible, los niños diseñan una gráfica de barras en un pliego de papel bond cuadriculado. En el eje horizontal colocan los cuatro deportes favoritos: fútbol, básquetbol, natación y atletismo. En el eje vertical colocan una escala numérica graduada donde cada cuadro de altura representa 5 estudiantes. Si la barra de fútbol tiene 6 cuadros de alto y la de natación tiene 4 cuadros de alto, ¿cómo se interpreta la escala para calcular cuántos alumnos prefieren cada deporte y qué ventajas ofrece este gráfico estadístico?',
    'Para interpretar y calcular con precisión los datos representados en una gráfica de barras con escala, es fundamental comprender la relación numérica entre la longitud de la barra y el valor asignado a cada división de la escala vertical. Cuando la cantidad de datos que se desea graficar es grande, no es práctico que cada cuadro represente a un solo individuo porque la gráfica resultaría excesivamente alta; por ello se emplea una escala graduada con intervalos regulares, que en este caso avanza de 5 en 5 (escala de 5). Para calcular la frecuencia real de cada categoría, multiplicamos la cantidad de cuadros o divisiones que alcanza la barra por el valor de cada cuadro. Para el fútbol, la barra mide 6 cuadros de altura: multiplicamos 6 por 5 y obtenemos 30 estudiantes ($6 \\times 5 = 30$). Para la natación, la barra tiene 4 cuadros de altura: multiplicamos 4 por 5 y obtenemos 20 estudiantes ($4 \\times 5 = 20$). La gráfica de barras permite comparar visualmente a simple vista qué categoría tiene mayor frecuencia sin necesidad de leer una tabla extensa de números.',
    'La **gráfica de barras con escala** es una representación estadística visual que organiza datos discretos mediante barras rectangulares cuya altura o longitud es proporcional a la frecuencia de cada categoría. Sus componentes principales son:\n1. **Título**: explica claramente de qué tema tratan los datos.\n2. **Eje horizontal**: muestra las categorías o variables analizadas.\n3. **Eje vertical**: presenta la escala numérica graduada con intervalos constantes ($2$ en $2$, $5$ en $5$, $10$ en $10$).\n4. **Cálculo de la frecuencia**: se determina multiplicando el número de divisiones de la barra por el valor unitario de la escala:\n$$\\text{Frecuencia real} = \\text{Divisiones de la barra} \\times \\text{Valor de cada división}$$\nEsta herramienta facilita la interpretación de tendencias y la toma de decisiones basada en datos.',
    'Construcción y lectura de gráficas de barras verticales con escala numérica.',
    [
      { exercise: 'Si en una gráfica con escala de 10 en 10 la barra de lectura tiene 3 cuadros de alto, ¿cuántos lectores representa?', hint: 'Multiplica 3 x 10.', answer: '30 lectores' },
      { exercise: '¿Cuántos dólares representan 8 monedas de 25 centavos de dólar?', hint: '4 monedas de 25 c = 1 dólar.', answer: '2 dólares' },
    ],
    [
      'Paso 1: En una gráfica con escala de 10 en 10, la barra de libros leídos mide 4 divisiones. Paso 2: Multiplicamos las 4 divisiones por 10: $4 \\times 10 = 40$. Solución: La barra representa un total de 40 libros leídos por los estudiantes del aula.',
      'Paso 1: Si cada cuadro de una gráfica representa 2 árboles sembrados y la barra de pinos tiene 7 cuadros. Paso 2: Multiplicamos la altura de la barra por 2: $7 \\times 2 = 14$. Solución: Se sembraron exactamente 14 pinos en el proyecto de reforestación escolar.',
      'Paso 1: Un grupo vende 5 pupusas de 50 centavos y 4 jugos de 25 centavos en un evento. Paso 2: Calculamos el dinero: $5 \\times 0.50 = 2.50$ dólares y $4 \\times 0.25 = 1.00$ dólar ($2.50 + 1.00$). Solución: El dinero total recaudado en la venta es de $3.50$ dólares.',
      'Paso 1: En una gráfica de barras de frutas, la barra de manzanas mide 8 cuadros con escala de 5. Paso 2: Efectuamos el producto: 8 por 5 es igual a 40 ($8 \\times 5 = 40$). Solución: La frecuencia representada corresponde a 40 manzanas consumidas en la semana.',
      'Paso 1: Para graficar 25 estudiantes en una cuadrícula cuya escala vertical es de 5 en 5. Paso 2: Dividimos 25 entre el valor de la escala: $25 \\div 5 = 5$. Solución: La barra debe dibujarse con una altura de exactamente 5 cuadros para representar a los 25 alumnos.',
    ]
  ),
];

const u10Lessons3G = [
  createPscerLesson(
    'mined-mat-3g-u10-l01',
    '10.1',
    'Jerarquía de operaciones combinadas con paréntesis',
    'En una clase de resolución de problemas de tercer grado, el profesor plantea la siguiente expresión matemática en la pizarra: diez más tres multiplicado por cuatro ($10 + 3 \\times 4$). Dos alumnos resuelven la operación pero obtienen resultados completamente diferentes: Carlos afirma que primero debe sumar diez más tres (obteniendo trece) y luego multiplicar trece por cuatro, lo que le da un resultado de cincuenta y dos ($52$). En cambio, Beatriz sostiene que primero se debe realizar la multiplicación de tres por cuatro (obteniendo doce) y luego sumar diez más doce, lo que da un resultado de veintidós ($22$). ¿Cuál de los dos estudiantes aplicó el procedimiento matemáticamente correcto y qué reglas oficiales de jerarquía y uso de paréntesis determinan el orden de las operaciones?',
    'Para resolver esta discrepancia y determinar el resultado matemáticamente válido de la expresión planteada, debemos aplicar las reglas universales de la jerarquía de las operaciones aritméticas. En una expresión numérica donde aparecen combinadas operaciones de suma y multiplicación sin signos de agrupación, la matemática establece un orden de prioridad riguroso: las operaciones de multiplicación y división tienen mayor jerarquía operativa y deben efectuarse siempre antes que las operaciones de suma y resta. En la expresión $10 + 3 \\times 4$, el procedimiento correcto consiste en resolver en primer lugar la multiplicación: 3 multiplicado por 4 es igual a 12 ($3 \\times 4 = 12$). Luego, sumamos el número 10 con el producto obtenido: 10 más 12 es igual a 22 ($10 + 12 = 22$). Por lo tanto, el razonamiento de Beatriz es el único matemáticamente correcto y su resultado de 22 es la respuesta verdadera. El error de Carlos consistió en operar de izquierda a derecha de forma ingenua sin respetar la jerarquía operativa. Si hubiésemos querido que la suma se calculara primero, habría sido indispensable colocar paréntesis: $(10 + 3) \\times 4 = 13 \\times 4 = 52$.',
    'La **jerarquía de operaciones** es el conjunto de reglas que establece el orden estricto en que deben resolverse las operaciones aritméticas combinadas:\n1. **Operaciones dentro de paréntesis**: se resuelven primero todas las operaciones encerradas entre paréntesis $( )$, de adentro hacia afuera.\n2. **Multiplicaciones y divisiones**: se efectúan en segundo lugar, de izquierda a derecha según aparezcan.\n3. **Sumas y restas**: se resuelven en último lugar, de izquierda a derecha:\n$$\\text{Paréntesis } () \\implies \\text{Multiplicación y División } (\\times, \\div) \\implies \\text{Suma y Resta } (+, -)$$\nLos paréntesis tienen la propiedad de alterar la prioridad natural de las operaciones, obligando a resolver primero su contenido interior:\n$$10 + 3 \\times 4 = 10 + 12 = 22 \\quad \\text{mientras que} \\quad (10 + 3) \\times 4 = 13 \\times 4 = 52$$',
    'Jerarquía de operaciones aritméticas elementales y prioridad de los paréntesis.',
    [
      { exercise: 'Calcula el resultado de la operación combinada: 25 - 3 x 6', hint: 'Multiplica 3 x 6 primero; luego resta de 25.', answer: '7' },
      { exercise: 'Calcula el resultado con paréntesis: (12 - 4) x 5', hint: 'Resuelve primero el paréntesis 12 - 4.', answer: '40' },
    ],
    [
      'Paso 1: Resolvemos la operación combinada $20 - 4 \\times 3$ aplicando jerarquía operativa. Paso 2: Primero multiplicamos 4 por 3: $4 \\times 3 = 12$; luego restamos 20 menos 12: $20 - 12 = 8$. Solución: El resultado correcto de la operación es 8, evitando restar antes de multiplicar.',
      'Paso 1: Calculamos la expresión con paréntesis $(5 + 3) \\times 2$. Paso 2: Resolvemos primero la operación dentro del paréntesis: 5 más 3 es 8; luego multiplicamos 8 por 2: $8 \\times 2 = 16$. Solución: El resultado formal obtenido es 16 gracias al uso de los paréntesis.',
      'Paso 1: Para calcular la operación $15 + 18 \\div 3$ determinamos la operación prioritaria. Paso 2: Efectuamos primero la división: 18 dividido entre 3 es 6; luego sumamos: $15 + 6 = 21$. Solución: El valor de la operación es 21 al priorizar la división sobre la suma.',
      'Paso 1: Resolvemos la expresión combinada $6 \\times (9 - 4)$ con paréntesis obligatorio. Paso 2: Operamos el paréntesis primero: 9 menos 4 es igual a 5; luego multiplicamos 6 por 5: $6 \\times 5 = 30$. Solución: El resultado verificado de la operación es exactamente 30.',
      'Paso 1: Calculamos la expresión combinada sin paréntesis $8 + 2 \\times 5 - 3$. Paso 2: Primero multiplicamos: $2 \\times 5 = 10$; luego operamos sumas y restas de izquierda a derecha: $8 + 10 - 3 = 18 - 3 = 15$. Solución: El resultado exacto es 15.',
    ]
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
