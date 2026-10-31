import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 7° Grado - Unidad 1
// Números positivos, negativos y el cero
// -----------------------------------------------------------------
const u1Archetypes7G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const temps = [-5, -3, -1, -8, -12];
      const t = temps[(v - 1) % temps.length];
      return {
        statement: `En la cima del volcán de Santa Ana se registra una temperatura de $${Math.abs(t)}^\\circ\\text{C}$ bajo cero. ¿Cómo se expresa numéricamente con signo relativo?`,
        options: [`$${t}^\\circ\\text{C}$`, `$${Math.abs(t)}^\\circ\\text{C}$`, `$0^\\circ\\text{C}$`, `$-(-${Math.abs(t)})^\\circ\\text{C}$`],
        correctAnswer: 'A',
        explanation: `Las temperaturas por debajo del punto de referencia ($0^\\circ\\text{C}$) se expresan con signo negativo: $${t}^\\circ\\text{C}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const nums = [-15, -7, -23, -4, -18];
      const n = nums[(v - 1) % nums.length];
      const abs = Math.abs(n);
      return {
        statement: `¿Cuál es el valor absoluto del número negativo $|${n}|$?`,
        options: [`$-${abs}$`, `$${abs}$`, `$0$`, `$${n}^2$`],
        correctAnswer: 'B',
        explanation: `El valor absoluto representa la distancia geométrica desde el número hasta el origen $0$ en la recta numérica, siendo siempre un valor no negativo: $|${n}| = ${abs}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const pairs = [
        { a: -8, b: -3, comp: '<' },
        { a: -2, b: -9, comp: '>' },
        { a: -12, b: -5, comp: '<' },
        { a: 0, b: -7, comp: '>' },
        { a: -15, b: -1, comp: '<' },
      ];
      const p = pairs[(v - 1) % pairs.length];
      return {
        statement: `Al comparar los números enteros $${p.a}$ y $${p.b}$ en la recta numérica, la relación de orden correcta es:`,
        options: [
          `$${p.a} = ${p.b}$`,
          `$${p.a} ${p.comp === '<' ? '>' : '<'} ${p.b}$`,
          `$${p.a} ${p.comp} ${p.b}$`,
          `$${p.a} + ${p.b} = 0$`,
        ],
        correctAnswer: 'C',
        explanation: `En la recta numérica, entre dos números negativos es mayor aquel que está más cerca del cero (menor valor absoluto). Por ende, $${p.a} ${p.comp} ${p.b}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 8) + 3;
      return {
        statement: `¿Cuál es el número opuesto o simétrico de $+${n}$ respecto al cero en la recta numérica?`,
        options: [`$+${n}$`, `$\\frac{1}{${n}}$`, `$|${n}|$`, `$-${n}$`],
        correctAnswer: 'D',
        explanation: `Dos números son opuestos si están a la misma distancia del cero pero en lados contrarios de la recta numérica. El opuesto de $+${n}$ es $-${n}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const metros = [150, 200, 50, 80, 120];
      const m = metros[(v - 1) % metros.length];
      return {
        statement: `Un submarino navega a $${m}\\text{ metros}$ bajo el nivel del mar en la fosa mesoamericana de Acajutla. Su cota relativa respecto al nivel del mar ($0\\text{ m}$) es:`,
        options: [`$-${m}\\text{ m}$`, `$${m}\\text{ m}$`, `$0\\text{ m}$`, `$-(${m})^2\\text{ m}$`],
        correctAnswer: 'A',
        explanation: `Tomando el nivel del mar como nivel de referencia cero ($0\\text{ m}$), las profundidades submarinas se denotan con números negativos: $-${m}\\text{ m}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const ganancia = 450 + v * 25;
      return {
        statement: `Si una cooperativa agrícola registra una pérdida económica de ${ganancia} dólares, ¿cómo se anota en el balance financiero con signo relativo?`,
        options: [`+$${ganancia}$ dólares`, `-$${ganancia}$ dólares`, `$0$ dólares`, `-$${ganancia * 2}$ dólares`],
        correctAnswer: 'B',
        explanation: `Las ganancias se expresan con signo positivo ($+$) y las pérdidas se expresan con signo negativo ($-$), es decir, -$${ganancia}$ dólares.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cuál de las siguientes afirmaciones respecto al número $0$ (cero) es correcta en el conjunto de los números enteros ($\\mathbb{Z}$)?`,
        options: [
          'El cero es un número estrictamente positivo',
          'El cero es un número estrictamente negativo',
          'El cero no es ni positivo ni negativo, es el punto de referencia neutro',
          'El cero no pertenece a los números enteros',
        ],
        correctAnswer: 'C',
        explanation: `En la recta numérica de los números reales y enteros, el cero es el origen neutral que separa los números positivos de los números negativos.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = -(v * 4 + 2);
      return {
        statement: `Al evaluar la expresión $-(-${Math.abs(a)})$, ¿cuál es su valor simplificado?`,
        options: [`$-${Math.abs(a)}$`, `$0$`, `$-1$`, `$${Math.abs(a)}$`],
        correctAnswer: 'D',
        explanation: `El opuesto de un número negativo es positivo: $-(-x) = x$, por tanto $-(-${Math.abs(a)}) = ${Math.abs(a)}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 6) + 1;
      return {
        statement: `Si un móvil se desplaza $${n}\\text{ km}$ hacia el Oeste tomando el Este como sentido positivo (+), su desplazamiento relativo es:`,
        options: [`$-${n}\\text{ km}$`, `$${n}\\text{ km}$`, `$0\\text{ km}$`, `$${n * 10}\\text{ km}$`],
        correctAnswer: 'A',
        explanation: `Si la dirección hacia el Este es positiva, la dirección opuesta (Oeste) es negativa: $-${n}\\text{ km}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const p = -(v * 3 + 5);
      return {
        statement: `¿A qué distancia exacta del origen ($0$) se ubica el punto $P(${p})$ en la recta numérica?`,
        options: [`$-${Math.abs(p)}$ unidades`, `${Math.abs(p)} unidades`, '0 unidades', `${p * 2} unidades`],
        correctAnswer: 'B',
        explanation: `La distancia siempre es una magnitud no negativa y viene dada por el valor absoluto: $|${p}| = ${Math.abs(p)}$ unidades.`,
      };
    },
  },
];

const u1Questions7G = generate50UnitQuestions(
  'mined-mat-7g-u01',
  '7-grado',
  '7G',
  1,
  'Números positivos, negativos y el cero',
  'MINED ESMATE 7° Grado',
  u1Archetypes7G
);

const u1Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u01-l01',
    '1.1',
    'Posición relativa con respecto a un punto de referencia',
    'En la cordillera de Apaneca, la cumbre del volcán Ilamatepec se ubica a 2,381 metros sobre el nivel medio del mar, mientras que una estación de investigación sismológica en la fosa mesoamericana frente al puerto de Acajutla está situada a 180 metros bajo el nivel del mar. Si un meteorólogo toma como punto de referencia el nivel de la superficie marina como cero metros, ¿cómo se expresan matemáticamente ambas posiciones utilizando números con signo relativo y qué significado físico tiene el punto cero?',
    'Para expresar con precisión matemática una cantidad orientada en el espacio respecto a un punto de referencia fijo, se asigna el valor cero a dicha referencia. En este problema, el nivel medio del mar representa la cota de origen: cero metros ($0\\text{ m}$). En primer lugar, toda altitud situada por encima del nivel del mar se considera en sentido positivo; por consiguiente, la altura de la cumbre volcánica se expresa con el signo más como $+2,381\\text{ m}$. En segundo lugar, toda profundidad localizada por debajo del nivel de referencia se asume en sentido opuesto o negativo; de esta manera, la fosa sismológica marina se designa mediante el signo menos como $-180\\text{ m}$. En conclusión, el signo positivo indica elevación por encima de la cota de referencia, mientras que el signo negativo especifica depresión o profundidad por debajo del nivel basal.',
    'Cuando se fija un punto de referencia con valor numérico cero ($0$), las cantidades que representan posiciones en sentidos opuestos se expresan mediante **números positivos** y **números negativos**:\n$$\\text{Sentido hacia arriba o derecha: } +a, \\qquad \\text{Sentido hacia abajo o izquierda: } -a$$\nEl conjunto de los números enteros se simboliza con $\\mathbb{Z}$ y abarca los enteros negativos, el cero como elemento neutro y los enteros positivos:\n$$\\mathbb{Z} = \\{ \\dots, -3, -2, -1, 0, +1, +2, +3, \\dots \\}$$\nEl signo positivo ($+$) puede omitirse en contextos aritméticos generales, pero el signo negativo ($-$) es indispensable para indicar la dirección contraria.',
    'Una temperatura de cinco grados bajo cero en la cumbre del cerro El Pital se expresa como $-5^\\circ\\text{C}$, tomando como referencia cero grados.',
    [
      { exercise: 'Si una cooperativa cafetalera de El Salvador registra una pérdida de 350 dólares en el mes de marzo, ¿cómo se anota contablemente con número relativo?', hint: 'Las pérdidas y egresos se registran con signo negativo.', answer: '-350 dólares' },
      { exercise: 'Un vehículo se desplaza 45 kilómetros hacia el Oeste en la carretera Panamericana, tomando San Salvador como punto cero y el Este como sentido positivo. Expresa su posición.', hint: 'El Oeste es el sentido opuesto al Este.', answer: '-45 km' }
    ],
    [
      'Ejemplo 1 (Cotas altimétricas en la geografía salvadoreña): La cima del cerro El Pital se encuentra a 2,730 metros de altitud, mientras que una caverna subterránea de caliza en Metapán se extiende a 65 metros de profundidad bajo el suelo. Paso 1: Establecemos la superficie del suelo como cota de referencia cero metros ($0\\text{ m}$). Paso 2: La elevación de la montaña está por encima del suelo, por lo que se escribe $+2,730\\text{ m}$. Paso 3: La caverna desciende respecto a la superficie, por lo que se denota con signo negativo $-65\\text{ m}$. Solución: $+2,730\\text{ m}$ y $-65\\text{ m}$.',
      'Ejemplo 2 (Registros térmicos en estaciones meteorológicas): En una madrugada de diciembre, el observatorio meteorológico de Los Naranjos reporta 4 grados Celsius bajo cero, mientras que en la costa de Usulután se registran 28 grados sobre cero. Paso 1: Tomamos como referencia el punto de congelación del agua ($0^\\circ\\text{C}$). Paso 2: Las temperaturas inferiores a cero se identifican con signo menos: $-4^\\circ\\text{C}$. Paso 3: Las temperaturas superiores a cero se identifican con signo más: $+28^\\circ\\text{C}$. Solución: $-4^\\circ\\text{C}$ y $+28^\\circ\\text{C}$.',
      'Ejemplo 3 (Balance financiero y estados de cuenta bancarios): Un comerciante del mercado central inicia la semana con un saldo favorable de 520 dólares, pero realiza pagos a distribuidores por 680 dólares, generando un déficit. Paso 1: Definimos el saldo nulo (cero dólares) como referencia de balance equilibrado. Paso 2: El ingreso inicial representa una cantidad a favor: $+520$ dólares. Paso 3: La diferencia resultante tras los pagos deja una deuda de 160 dólares, expresada con signo relativo negativo. Solución: -160 dólares (saldo deudor de 160 dólares).',
      'Ejemplo 4 (Desplazamientos rectilíneos en sentidos opuestos): En una pista de atletismo recta, un corredor se desplaza 120 metros hacia el Norte desde la línea de salida. Luego camina 180 metros hacia el Sur. Si el Norte es la dirección positiva, determina la posición final respecto al origen. Paso 1: Asignamos $+120\\text{ m}$ al primer tramo. Paso 2: Asignamos $-180\\text{ m}$ al segundo tramo en dirección contraria. Paso 3: Sumamos algebraicamente: $(+120) + (-180) = -60\\text{ m}$. Solución: El corredor se ubica a 60 metros al Sur del punto de partida ($-60\\text{ m}$).',
      'Ejemplo 5 (Línea de tiempo histórica y años referenciales): Un evento arquitectónico ocurrió en el año 350 antes de nuestra era (a. C.) y otro acontecimiento en el año 480 de nuestra era (d. C.). Paso 1: Fijamos el inicio de la era común como el punto temporal cero ($0$). Paso 2: Los sucesos previos a la era común se representan con signo negativo: $-350$. Paso 3: Los sucesos posteriores a la era común se representan con signo positivo: $+480$. Solución: $-350$ y $+480$ años respecto al origen cronológico.'
    ]
  ),
  createPscerLesson(
    'mined-mat-7g-u01-l02',
    '1.2',
    'Valor absoluto y relación de orden en los números enteros',
    'En una recta numérica trazada en el aula de clases, un estudiante ubica la posición de dos termómetros digitales que marcan $-7^\\circ\\text{C}$ y $-2^\\circ\\text{C}$. El docente plantea dos preguntas clave al grupo: ¿cuál de las dos temperaturas es mayor en la escala numérica formal y cuál de los dos valores se encuentra a una mayor distancia geométrica con respecto al origen cero?',
    'Para responder a ambas interrogantes de forma analítica, representamos ambos números en la recta numérica horizontal. En primer lugar, observamos la posición relativa respecto al cero: el número $-2$ está ubicado dos unidades a la izquierda del origen, mientras que $-7$ se localiza siete unidades a la izquierda. En segundo lugar, aplicamos el criterio de orden: en la recta numérica, todo número que se ubique más a la derecha es estrictamente mayor que cualquiera situado a su izquierda; por lo tanto, $-2$ es mayor que $-7$, escribiéndose $-2 > -7$ o equivalentemente $-7 < -2$. En tercer lugar, calculamos las distancias al origen: la distancia desde $-2$ hasta $0$ es de $2$ unidades ($|-2| = 2$), y la distancia desde $-7$ hasta $0$ es de $7$ unidades ($|-7| = 7$). Por consiguiente, $-7$ tiene mayor valor absoluto a pesar de ser un número menor.',
    'El **valor absoluto** de un número entero $a$, denotado por $|a|$, representa la distancia que separa al punto $a$ del origen $0$ en la recta numérica y siempre es una cantidad mayor o igual a cero:\n$$|a| = \\begin{cases} a, & \\text{si } a \\ge 0 \\\\ -a, & \\text{si } a < 0 \\end{cases}$$\nPara comparar dos números enteros se aplican los siguientes criterios fundamentales de orden:\n1. Todo número positivo es mayor que el cero y que cualquier número negativo.\n2. El cero es mayor que cualquier número negativo y menor que cualquier positivo.\n3. Entre dos números negativos, **es mayor aquel que tiene menor valor absoluto** (el que está más próximo al cero en la recta numérica):\n$$\\text{Si } |a| < |b| \\text{ con } a, b < 0 \\implies a > b$$',
    'Para comparar $-12$ y $-5$: calculamos $|-12| = 12$ y $|-5| = 5$. Como $5 < 12$, el número $-5$ está más cerca del cero, por lo que $-5 > -12$.',
    [
      { exercise: 'Determina el valor absoluto de los números -18, +25 y -9.', hint: 'El valor absoluto es la distancia al cero y siempre es no negativo.', answer: '|-18| = 18, |+25| = 25, |-9| = 9' },
      { exercise: 'Compara los números enteros -14 y -20 utilizando el símbolo adecuado (< o >).', hint: 'Entre números negativos, es mayor el de menor valor absoluto.', answer: '-14 > -20' }
    ],
    [
      'Ejemplo 1 (Cálculo formal de valor absoluto en números opuestos): Determinar y comparar el valor absoluto de $+15$ y $-15$. Paso 1: Ubicamos ambos valores en la recta numérica respecto al origen $0$. Paso 2: Calculamos la distancia de $+15$ al cero: $|+15| = 15$. Paso 3: Calculamos la distancia de $-15$ al cero: $|-15| = -(-15) = 15$. Solución: Ambos números opuestos tienen exactamente el mismo valor absoluto: $|+15| = |-15| = 15$ unidades.',
      'Ejemplo 2 (Comparación de dos enteros negativos en contexto térmico): Un congelador industrial opera a $-19^\\circ\\text{C}$ y otro a $-8^\\circ\\text{C}$. Determina cuál temperatura es más fría (menor) y justifica con valor absoluto. Paso 1: Calculamos los valores absolutos: $|-19| = 19$ y $|-8| = 8$. Paso 2: Comparamos las magnitudes de distancia: $19 > 8$. Paso 3: Al ser números negativos, el que tiene mayor distancia al cero está más a la izquierda en la recta. Solución: $-19 < -8$, por lo que $-19^\\circ\\text{C}$ es la temperatura menor (más fría).',
      'Ejemplo 3 (Ordenamiento de un conjunto mixto de números enteros): Ordena de menor a mayor los siguientes números: $+6, -11, 0, -3, +9, -1$. Paso 1: Identificamos los enteros negativos: $-11, -3, -1$. Entre ellos, a mayor valor absoluto corresponde menor posición: $-11 < -3 < -1$. Paso 2: Integramos el cero, que es mayor que los negativos y menor que los positivos. Paso 3: Ordenamos los enteros positivos: $+6 < +9$. Solución: Secuencia ordenada ascendente: $-11 < -3 < -1 < 0 < +6 < +9$.',
      'Ejemplo 4 (Distancia entre dos puntos simétricos en la recta numérica): Calcula la distancia que separa el punto $A(-6)$ y el punto $B(+6)$ en la recta graduada en centímetros. Paso 1: La distancia desde $A(-6)$ hasta el origen $0$ es $|-6| = 6\\text{ cm}$. Paso 2: La distancia desde el origen $0$ hasta $B(+6)$ es $|+6| = 6\\text{ cm}$. Paso 3: Sumamos ambas distancias parciales: $6\\text{ cm} + 6\\text{ cm} = 12\\text{ cm}$. Solución: La distancia total entre $A$ y $B$ es de $12\\text{ cm}$.',
      'Ejemplo 5 (Resolución de inecuación con valor absoluto entero): Encuentra todos los números enteros $x$ que cumplen la condición $|x| < 4$. Paso 1: La condición $|x| < 4$ representa a todos los números cuya distancia al cero es menor que $4$ unidades. Paso 2: En la recta numérica, estos valores están comprendidos en el intervalo abierto entre $-4$ y $+4$. Paso 3: Identificamos los números enteros contenidos en dicho tramo: $-3, -2, -1, 0, 1, 2, 3$. Solución: Los números enteros son $\\{-3, -2, -1, 0, 1, 2, 3\\}$.'
    ]
  ),
];

const u2Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u02-l01',
    '2.1',
    'Suma y resta de números con igual y diferente signo',
    'En la contabilidad semanal de una tienda escolar en Cojutepeque se registran los siguientes movimientos diarios: el lunes hubo una ganancia de 14 dólares seguida de otra ganancia de 9 dólares; el martes se reportó un gasto de 12 dólares seguido de otro gasto de 8 dólares; y el miércoles se inició con un ingreso de 15 dólares pero ocurrió un desembolso imprevisto de 23 dólares. ¿Cómo se expresa cada situación mediante una adición formal de números con signo y cuál es el balance neto de cada día?',
    'Para determinar el balance de cada jornada aplicamos las leyes de la adición de números enteros. Para el lunes (dos números positivos): sumamos $(+14) + (+9)$. Al tener signos iguales, se suman los valores absolutos ($14 + 9 = 23$) y se conserva el signo positivo, obteniendo $+23$ dólares de ganancia. Para el martes (dos números negativos): sumamos $(-12) + (-8)$. Ambos tienen el mismo signo negativo; sumamos sus valores absolutos ($12 + 8 = 20$) y mantenemos el signo común: $-(12 + 8) = -20$ dólares (pérdida neta). Para el miércoles (signos diferentes): sumamos $(+15) + (-23)$. Al poseer signos distintos, calculamos la diferencia entre el mayor valor absoluto y el menor ($23 - 15 = 8$) y anteponemos el signo del sumando con mayor valor absoluto ($-23$); por tanto, $(+15) + (-23) = -(23 - 15) = -8$ dólares de déficit.',
    'Para sumar dos números con signo en el conjunto de los números enteros se distinguen dos casos generales:\n1. **Suma de números con igual signo**: se suman los valores absolutos de los números y al resultado se le coloca el signo común:\n$$(+a) + (+b) = +(a + b), \\qquad (-a) + (-b) = -(a + b)$$\n2. **Suma de números con diferente signo**: se restan los valores absolutos (el menor del mayor) y al resultado se le antepone el signo del sumando que tiene mayor valor absoluto:\n$$(+a) + (-b) = \\begin{cases} +(a - b), & \\text{si } a > b \\\\ -(b - a), & \\text{si } b > a \\end{cases}$$\nLa **resta** de dos números con signo se transforma en la suma del minuendo con el opuesto del sustraendo: $a - b = a + (-b)$.',
    'Para resolver $(-15) - (-7)$: transformamos la resta en suma del opuesto: $(-15) + (+7)$. Como tienen signos diferentes, restamos los valores absolutos: $-(15 - 7) = -8$.',
    [
      { exercise: 'Efectúa la suma algebraica de números enteros: (-16) + (-9)', hint: 'Mismo signo: suma valores absolutos y conserva el signo negativo.', answer: '-25' },
      { exercise: 'Calcula la operación combinada con diferente signo: (+24) + (-31)', hint: 'Resta 31 - 24 y antepón el signo del número con mayor valor absoluto.', answer: '-7' }
    ],
    [
      'Ejemplo 1 (Adición de enteros negativos en acumulación de deudas): Resolver la operación $(-18) + (-27)$. Paso 1: Identificamos que ambos sumandos poseen el mismo signo negativo. Paso 2: Obtenemos los valores absolutos de ambos números: $|-18| = 18$ y $|-27| = 27$. Paso 3: Sumamos los valores absolutos y asignamos el signo negativo común: $-(18 + 27) = -45$. Solución: $(-18) + (-27) = -45$.',
      'Ejemplo 2 (Adición con diferente signo y predominio del positivo): Resolver la suma $(+42) + (-17)$. Paso 1: Comparamos los valores absolutos: $|+42| = 42$ y $|-17| = 17$. Paso 2: Al ser de signos opuestos, restamos el menor valor absoluto del mayor: $42 - 17 = 25$. Paso 3: Como $+42$ tiene mayor valor absoluto que $-17$, el resultado es positivo. Solución: $(+42) + (-17) = +25$.',
      'Ejemplo 3 (Sustracción convertida en adición del opuesto): Calcular la resta $(-13) - (+25)$. Paso 1: Aplicamos la regla oficial de la sustracción: restar un número equivale a sumar su opuesto simétrico. Paso 2: El opuesto de $+25$ es $-25$, transformando la expresión en $(-13) + (-25)$. Paso 3: Sumamos ambos enteros de igual signo negativo: $-(13 + 25) = -38$. Solución: $(-13) - (+25) = -38$.',
      'Ejemplo 4 (Sustracción de un número negativo con doble signo): Efectuar la operación $(+10) - (-14)$. Paso 1: Identificamos el sustraendo negativo: $-14$. Paso 2: Cambiamos la resta por la suma de su opuesto, recordando que el opuesto de $-14$ es $+14$: $(+10) + (+14)$. Paso 3: Sumamos dos cantidades positivas directas: $10 + 14 = 24$. Solución: $(+10) - (-14) = +24$.',
      'Ejemplo 5 (Operación combinada de tres términos con supresión de paréntesis): Simplificar la expresión $(-8) + (+15) - (+11) - (-6)$. Paso 1: Convertimos todas las restas en sumas de opuestos: $(-8) + (+15) + (-11) + (+6)$. Paso 2: Agrupamos los términos positivos y los términos negativos por separado: $(+15 + 6) + (-8 - 11) = (+21) + (-19)$. Paso 3: Operamos la suma final con signos distintos: $+(21 - 19) = +2$. Solución: El valor simplificado es $+2$.'
    ]
  ),
];

const u3Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u03-l01',
    '3.1',
    'Multiplicación y división con la Ley de Signos',
    'Un estanque de piscicultura en San Luis Talpa pierde agua de forma continua a razón de 4 centímetros de profundidad cada hora debido a una fuga imprevista en la compuerta inferior de desagüe. Si registramos la pérdida horaria de agua como una cantidad negativa de -4 centímetros por hora, ¿cuántos centímetros habrá descendido el nivel del agua al transcurrir 6 horas de drenaje constante? Asimismo, si el estanque acumuló una pérdida total registrada de -72 centímetros durante la madrugada, ¿cuántas horas estuvo abierta la compuerta defectuosa y cómo se comprueba el resultado mediante la operación inversa?',
    'Para resolver la primera parte del problema modelamos el descenso del nivel mediante una multiplicación formal de números enteros con signos distintos. La variación por hora es de -4 centímetros y el tiempo transcurrido corresponde a +6 horas. Aplicando la regla de multiplicación de números con diferente signo: el producto de un número negativo por uno positivo resulta invariablemente en un número negativo; por consiguiente: (-4) por (+6) es igual a -24 centímetros. Esto significa que el agua descendió 24 centímetros respecto a su nivel inicial. Para resolver la segunda parte, conocemos el descenso acumulado total (-72 centímetros) y la tasa horaria de fuga (-4 centímetros por hora). Planteamos la división correspondiente: (-72) entre (-4). De acuerdo con la ley de los signos para la división, el cociente de dos números con igual signo negativo es siempre un número estrictamente positivo: (-72) entre (-4) es igual a +18 horas. La fuga permaneció activa durante 18 horas completas. Comprobamos multiplicando 18 horas por -4 centímetros por hora, obteniendo con exactitud los -72 centímetros iniciales.',
    'La **Ley de los Signos** para la multiplicación y la división de números relativos establece las siguientes equivalencias algebraicas fundamentales:\n1. El producto o cociente de dos números con **signos iguales** (ambos positivos o ambos negativos) produce siempre un resultado con **signo positivo**:\n$$(+) \\times (+) = (+), \\qquad (-) \\times (-) = (+)$$\n$$(+) \\div (+) = (+), \\qquad (-) \\div (-) = (+)$$\n2. El producto o cociente de dos números con **signos diferentes** (uno positivo y otro negativo) produce siempre un resultado con **signo negativo**:\n$$(+) \\times (-) = (-), \\qquad (-) \\times (+) = (-)$$\n$$(+) \\div (-) = (-), \\qquad (-) \\div (+) = (-)$$\nEn el cálculo de potencias con base entera negativa $(-a)^n$: si el exponente natural $n$ es **par**, el resultado es positivo ($(-a)^n > 0$); mientras que si el exponente $n$ es **impar**, el resultado es negativo ($(-a)^n < 0$). Asimismo, dividir entre una fracción equivale a multiplicar por su recíproco con el mismo signo algebraico.',
    'Para resolver $(-5)^2$ y $-5^2$: en $(-5)^2 = (-5) \\times (-5) = +25$; mientras que en $-5^2 = -(5 \\times 5) = -25$, pues el signo negativo no está afectado por el exponente.',
    [
      { exercise: 'Calcula el producto de los números enteros: (-9) x (-8)', hint: 'Menos por menos da más.', answer: '+72' },
      { exercise: 'Efectúa la división entre enteros con signo: (+84) / (-7)', hint: 'Más entre menos da menos.', answer: '-12' },
      { exercise: 'Determina el resultado de la potencia entera: (-2)^5', hint: 'Base negativa elevada a exponente impar conserva signo negativo.', answer: '(-2)^5 = -32' }
    ],
    [
      'Ejemplo 1 (Multiplicación de factores con signos contrarios): Resolver el producto $(+14) \\times (-5)$. Paso 1: Identificamos los signos de los factores: uno es positivo y el otro negativo. Paso 2: De acuerdo con la ley de signos, $(+) \\times (-) = (-)$. Paso 3: Multiplicamos los valores absolutos de los términos: $14 \\times 5 = 70$. Solución: Asignamos el signo negativo resultante: $(+14) \\times (-5) = -70$.',
      'Ejemplo 2 (División exacta de dos enteros negativos): Determinar el cociente de $(-96) \\div (-8)$. Paso 1: Verificamos los signos de dividendo y divisor: ambos son negativos. Paso 2: Por la ley de signos, el cociente de dos cantidades de igual signo es positivo: $(-) \\div (-) = (+)$. Paso 3: Dividimos los valores absolutos: $96 \\div 8 = 12$. Solución: $(-96) \\div (-8) = +12$.',
      'Ejemplo 3 (Producto encadenado de tres números enteros con signo): Calcular el valor de $(-3) \\times (-4) \\times (-5)$. Paso 1: Multiplicamos los dos primeros factores negativos: $(-3) \\times (-4) = +12$. Paso 2: Multiplicamos el resultado positivo por el tercer factor negativo: $(+12) \\times (-5)$. Paso 3: Aplicamos la ley de signos para signos diferentes: $-(12 \\times 5) = -60$. Solución: El producto encadenado es $-60$.',
      'Ejemplo 4 (Diferenciación de potencias con base negativa y signo externo): Calcular y comparar los resultados de $(-4)^3$ y $(-3)^4$. Paso 1: En $(-4)^3$, el exponente es impar ($3$), por lo que $(-4) \\times (-4) \\times (-4) = -64$. Paso 2: En $(-3)^4$, el exponente es par ($4$), por lo que $(-3) \\times (-3) \\times (-3) \\times (-3) = +81$. Paso 3: Verificamos que base negativa con exponente par resulta positiva y con exponente impar resulta negativa. Solución: $(-4)^3 = -64$ y $(-3)^4 = +81$.',
      'Ejemplo 5 (Operación combinada respetando la jerarquía de las operaciones): Evaluar la expresión $(-6) \\times (+5) + (-36) \\div (-9) - (-14)$. Paso 1: Resolvemos las multiplicaciones y divisiones prioritarias: $(-6) \\times (+5) = -30$ y $(-36) \\div (-9) = +4$. Paso 2: Reescribimos la expresión: $-30 + (+4) - (-14) = -30 + 4 + 14$. Paso 3: Operamos las sumas y restas: $-30 + 18 = -12$. Solución: El valor simplificado es $-12$.'
    ]
  ),
];

const u4Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u04-l01',
    '4.1',
    'Comunicación con símbolos y expresiones algebraicas',
    'En una papelería escolar de Santa Tecla, un cuaderno de espiral cuesta x dólares, un estuche de lápices de color cuesta y dólares y una mochila tiene un precio fijo de 18 dólares. Si una directiva escolar adquiere 5 cuadernos de espiral y 3 estuches de lápices de color para equipar el botiquín del aula, ¿cuál es la expresión algebraica que modela el costo total de la compra sin incluir la mochila? Además, si se adquiere también la mochila y el costo por cuaderno es de 2.50 dólares y por estuche de 4.00 dólares, ¿cuál es el importe total a pagar?',
    'Para traducir la situación verbal a una expresión simbólica, definimos las cantidades desconocidas mediante letras algebraicas. El costo unitario de cada cuaderno es x, por lo que 5 cuadernos representan 5 veces x igual a 5x dólares. De manera similar, cada estuche cuesta y, de modo que 3 estuches corresponden a 3 veces y igual a 3y dólares. Sumando ambos subtotales, obtenemos la expresión algebraica del costo parcial: 5x + 3y. Si agregamos el costo constante de la mochila (18 dólares), la expresión del costo total completo es 5x + 3y + 18. Para evaluar el valor numérico con los datos concretos (x = 2.50 e y = 4.00), sustituimos directamente las variables en la expresión: 5(2.50) + 3(4.00) + 18 = 12.50 + 12.00 + 18.00 = 42.50 dólares. El gasto total de la directiva asciende exactamente a 42.50 dólares.',
    'Una **expresión algebraica** es una combinación estructurada de letras (variables), números (constantes) y signos de operaciones aritméticas ($+, -, \\times, \\div$).\nEn un término algebraico como $-7x^2$:\n- El signo y número $-7$ es el **coeficiente numérico**.\n- La letra $x$ es la **variable** o factor literal.\n- El número $2$ es el **exponente** que define el grado del término respecto a esa variable.\nDos términos son **términos semejantes** si tienen exactamente la misma parte literal elevada a los mismos exponentes. Se reducen sumando o restando sus coeficientes:\n$$ax^n + bx^n = (a + b)x^n$$\nEl **valor numérico** es el resultado de sustituir cada variable por un valor concreto y efectuar las operaciones indicadas.',
    'Para reducir $8a - 3b + 5a + 7b$: agrupamos semejantes $(8 + 5)a + (-3 + 7)b = 13a + 4b$. Si $a=2$ y $b=3$, el valor numérico es $13(2) + 4(3) = 26 + 12 = 38$.',
    [
      { exercise: 'Reduce los términos semejantes de la expresión: 7x - 4y + 9x + 11y - 3x', hint: 'Agrupa los términos con x por un lado y los términos con y por otro.', answer: '13x + 7y' },
      { exercise: 'Calcula el valor numérico de 4x² - 5x + 8 cuando x = -3.', hint: 'Sustituye x por (-3), elevando primero al cuadrado: (-3)² = 9.', answer: '4(9) - 5(-3) + 8 = 36 + 15 + 8 = 59' }
    ],
    [
      'Ejemplo 1 (Traducción de lenguaje natural a lenguaje algebraico): Expresar algebraicamente: "El triple de un número aumentado en el cuadrado de otro número menos cinco unidades". Paso 1: Asignamos una letra variable al primer número ($a$) y otra al segundo número ($b$). Paso 2: El triple del primero se escribe como $3a$, y el cuadrado del segundo como $b^2$. Paso 3: Aumentar indica adición ($+$) y disminuir indica sustracción ($-$). Solución: La expresión formal es $3a + b^2 - 5$.',
      'Ejemplo 2 (Reducción de términos semejantes con coeficientes enteros): Reducir la expresión polinomial $9m - 4n + 7 - 12m + 10n - 15$. Paso 1: Identificamos y agrupamos los términos semejantes con variable $m$: $(9 - 12)m = -3m$. Paso 2: Agrupamos los términos semejantes con variable $n$: $(-4 + 10)n = +6n$. Paso 3: Operamos los términos constantes independientes: $7 - 15 = -8$. Solución: La expresión reducida es $-3m + 6n - 8$.',
      'Ejemplo 3 (Reducción de términos semejantes con coeficientes fraccionarios): Simplificar la suma de monomios $\\frac{2}{3}x + \\frac{1}{2}x - \\frac{1}{6}x$. Paso 1: Comprobamos que todos los términos comparten la misma variable $x$. Paso 2: Obtenemos el mínimo común múltiplo de los denominadores ($3, 2, 6$), que es $6$. Paso 3: Homogeneizamos los coeficientes: $\\frac{4}{6} + \\frac{3}{6} - \\frac{1}{6} = \\frac{6}{6} = 1$. Solución: El resultado simplificado es $1x = x$.',
      'Ejemplo 4 (Cálculo del valor numérico con cantidades negativas): Evaluar la expresión $-2a^2 + 5ab - 3b^2$ para $a = -2$ y $b = 3$. Paso 1: Sustituimos cuidadosamente protegiendo con paréntesis: $-2(-2)^2 + 5(-2)(3) - 3(3)^2$. Paso 2: Calculamos potencias prioritarias: $(-2)^2 = 4$ y $3^2 = 9$. Paso 3: Efectuamos productos y sumas: $-2(4) + 5(-6) - 3(9) = -8 - 30 - 27 = -65$. Solución: El valor numérico obtenido es $-65$.',
      'Ejemplo 5 (Multiplicación de un término algebraico por una constante entera): Desarrollar la expresión aplicando la propiedad distributiva: $-4(3x - 5y + 2)$. Paso 1: Multiplicamos el factor $-4$ por el primer término: $(-4)(3x) = -12x$. Paso 2: Multiplicamos el factor $-4$ por el segundo término: $(-4)(-5y) = +20y$. Paso 3: Multiplicamos el factor $-4$ por la constante: $(-4)(+2) = -8$. Solución: El desarrollo final es $-12x + 20y - 8$.'
    ]
  ),
];

const u5Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u05-l01',
    '5.1',
    'Resolución de ecuaciones lineales de primer grado ax + b = c',
    'En una jornada comunitaria en Chalatenango, un grupo juvenil recolecta fondos para reparar el techo comunal. El tesorero informa que tenían un fondo base ahorrado de 45 dólares y que durante el fin de semana vendieron 28 porciones de tamales a un precio uniforme de x dólares cada una. Al finalizar la venta, el dinero recaudado en la alcancía sumó exactamente 129 dólares. ¿Cuál ecuación de primer grado describe la situación planteada y cuál es el precio de venta de cada porción de tamal?',
    'Para determinar el valor desconocido de la incógnita x (precio de cada porción de tamal), formulamos una ecuación lineal de primer grado. El dinero aportado por las ventas es 28 veces x igual a 28x dólares, y sumado al fondo base de 45 dólares totaliza 129 dólares: 28x + 45 = 129. Para resolver la ecuación aplicamos las propiedades uniformes de la igualdad. En primer lugar, restamos 45 a ambos miembros de la ecuación (transposición de términos con cambio de signo): 28x = 129 - 45 = 84. En segundo lugar, dividimos ambos miembros entre el coeficiente 28 para despejar la incógnita: x = 84 / 28 = 3. Comprobamos el resultado sustituyendo en la ecuación original: 28(3) + 45 = 84 + 45 = 129, lo que valida plenamente la solución. Cada porción de tamal costó 3 dólares.',
    'Una **ecuación de primer grado** con una incógnita es una igualdad matemática en la que la variable tiene exponente uno ($1$). Su forma canónica general es:\n$$ax + b = c \\qquad (a \\neq 0)$$\nPara resolverla se aplican las **propiedades de la igualdad**:\n1. Si se suma o resta la misma cantidad a ambos miembros, la igualdad se mantiene:\n$$ax + b = c \\implies ax = c - b$$\n2. Si se multiplica o divide ambos miembros por un número distinto de cero, la igualdad se conserva:\n$$ax = c - b \\implies x = \\frac{c - b}{a}$$\nEl procedimiento operativo de pasar un término de un miembro al otro con la operación inversa se denomina **transposición de términos**.',
    'Para resolver $5x - 8 = 22$: sumamos 8 a ambos miembros: $5x = 22 + 8 = 30$. Dividimos entre 5: $x = 30 / 5 = 6$. Verificación: $5(6) - 8 = 30 - 8 = 22$.',
    [
      { exercise: 'Resuelve la ecuación lineal de primer grado: 6x - 14 = 28', hint: 'Transpón -14 sumando al segundo miembro y luego divide entre 6.', answer: '6x = 42 => x = 7' },
      { exercise: 'Encuentra el valor de x en la ecuación con términos en ambos miembros: 5x + 7 = 2x + 25', hint: 'Agrupa los términos con x a la izquierda y las constantes a la derecha.', answer: '5x - 2x = 25 - 7 => 3x = 18 => x = 6' }
    ],
    [
      'Ejemplo 1 (Ecuación lineal con transposición directa de constantes): Resolver la ecuación $4x + 15 = 47$. Paso 1: Restamos $15$ en ambos miembros para aislar el término con la incógnita: $4x = 47 - 15$. Paso 2: Realizamos la sustracción: $4x = 32$. Paso 3: Dividimos ambos miembros entre el coeficiente $4$: $x = \\frac{32}{4} = 8$. Solución: La raíz de la ecuación es $x = 8$.',
      'Ejemplo 2 (Ecuación con incógnita en ambos miembros de la igualdad): Resolver $7x - 9 = 3x + 19$. Paso 1: Agrupamos los términos con incógnita en el miembro izquierdo: $7x - 3x$. Paso 2: Agrupamos los términos numéricos en el miembro derecho: $19 + 9$. Paso 3: Reducimos términos semejantes: $4x = 28$, de donde $x = \\frac{28}{4} = 7$. Solución: La solución única es $x = 7$.',
      'Ejemplo 3 (Ecuación de primer grado con signos de agrupación): Resolver $3(2x - 4) = 4(x + 1) + 2$. Paso 1: Aplicamos la propiedad distributiva para suprimir los paréntesis: $6x - 12 = 4x + 4 + 2$. Paso 2: Simplificamos el miembro derecho: $6x - 12 = 4x + 6$. Paso 3: Transponemos términos semejantes: $6x - 4x = 6 + 12 \\implies 2x = 18 \\implies x = 9$. Solución: La solución es $x = 9$.',
      'Ejemplo 4 (Ecuación lineal con coeficientes fraccionarios): Resolver $\\frac{x}{3} + \\frac{x}{4} = 7$. Paso 1: Calculamos el mínimo común múltiplo de los denominadores $3$ y $4$, que es $12$. Paso 2: Multiplicamos toda la ecuación por $12$ para eliminar fracciones: $12\\left(\\frac{x}{3}\\right) + 12\\left(\\frac{x}{4}\\right) = 12(7)$. Paso 3: Obtenemos $4x + 3x = 84 \\implies 7x = 84 \\implies x = 12$. Solución: La incógnita vale $x = 12$.',
      'Ejemplo 5 (Problema verbal modelado con ecuación lineal): La suma de tres números enteros consecutivos es igual a 72. Determina cuáles son esos tres números. Paso 1: Definimos los tres enteros consecutivos como $x$, $x+1$ y $x+2$. Paso 2: Planteamos la ecuación: $x + (x + 1) + (x + 2) = 72 \\implies 3x + 3 = 72$. Paso 3: Resolvemos: $3x = 72 - 3 = 69 \\implies x = 23$. Solución: Los tres números consecutivos son $23, 24$ y $25$.'
    ]
  ),
];

const u6Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u06-l01',
    '6.1',
    'Proporcionalidad directa e inversa en el plano cartesiano',
    'En un laboratorio de ciencias de Sonsonate se investigan dos experimentos de fluidos. En el primer experimento, una bomba llena un depósito a flujo constante de 4 litros por minuto, registrándose el volumen acumulado y en función del tiempo x. En el segundo experimento, se dispone de una cantidad fija de 60 litros de reactivo que debe repartirse de forma equitativa entre x recipientes idénticos, correspondiéndole y litros a cada uno. ¿Qué tipo de relación de proporcionalidad describe cada fenómeno, cuáles son sus constantes de proporcionalidad y cómo se distinguen sus gráficas en el plano cartesiano?',
    'Para el primer experimento, al duplicarse o triplicarse el tiempo de bombeo (x), el volumen acumulado (y) se duplica o triplica en la misma razón. El cociente y / x = 4 es estrictamente constante, lo que define una **proporcionalidad directa** con ecuación de la forma y = ax, donde la constante de proporcionalidad es a = 4. Su gráfica en el plano cartesiano es una línea recta continua que pasa exactamente por el origen de coordenadas (0, 0). Para el segundo experimento, al duplicarse la cantidad de recipientes (x), el volumen asignado a cada uno (y) se reduce a la mitad. En este caso, el producto de ambas variables es constante: x por y = 60, lo que define una **proporcionalidad inversa** expresada como y = a / x, con constante a = 60. Su gráfica en el plano cartesiano no es recta, sino una curva asintótica llamada hipérbola que decrece sin tocar jamás los ejes coordenados.',
    'En el plano cartesiano, las dos formas fundamentales de variación proporcional se formalizan de la siguiente manera:\n1. **Proporcionalidad directa**: dos variables $x$ e $y$ son directamente proporcionales si el cociente entre ellas permanece constante ($a = \\frac{y}{x}$):\n$$y = ax$$\nSu gráfica cartesiana es una **línea recta** que pasa por el punto de origen $(0, 0)$. Si $a > 0$, la recta es creciente (cuadrantes I y III); si $a < 0$, es decreciente (cuadrantes II y IV).\n2. **Proporcionalidad inversa**: dos variables $x$ e $y$ son inversamente proporcionales si el producto entre ellas permanece constante ($a = x \\cdot y$):\n$$y = \\frac{a}{x} \\iff xy = a$$\nSu gráfica cartesiana es una **hipérbola**, formada por dos curvas simétricas en cuadrantes opuestos respecto al origen.',
    'Si $y$ es directamente proporcional a $x$ y cuando $x = 3$ se tiene $y = 15$: calculamos $a = 15 / 3 = 5$. La ecuación es $y = 5x$. Para $x = 7$, $y = 5(7) = 35$.',
    [
      { exercise: 'Determina si la relación y = 8/x es de proporcionalidad directa o inversa, identifica la constante a y calcula y cuando x = 4.', hint: 'Forma y = a/x corresponde a proporcionalidad inversa.', answer: 'Proporcionalidad inversa, a = 8; cuando x = 4, y = 8/4 = 2.' },
      { exercise: 'Una máquina empacadora etiqueta 120 latas en 3 minutos de forma constante. Escribe la ecuación de proporcionalidad directa que relaciona las latas (y) con los minutos (x).', hint: 'Calcula a = y / x = 120 / 3.', answer: 'a = 40 latas/minuto, ecuación: y = 40x' }
    ],
    [
      'Ejemplo 1 (Cálculo de la constante y modelado de proporcionalidad directa): Se sabe que $y$ es directamente proporcional a $x$. Cuando $x = 5$, se registra $y = 35$. Paso 1: Aplicamos la relación $y = ax$ para despejar la constante: $a = \\frac{y}{x}$. Paso 2: Calculamos el valor de la constante: $a = \\frac{35}{5} = 7$. Paso 3: Escribimos la ecuación formal que relaciona ambas variables: $y = 7x$. Solución: La constante es $a = 7$ y la ecuación es $y = 7x$.',
      'Ejemplo 2 (Gráfica de proporcionalidad directa con constante negativa): Graficar y analizar la relación $y = -3x$ en el plano cartesiano. Paso 1: Elaboramos una tabla de valores: para $x = -2, y = 6$; para $x = 0, y = 0$; para $x = 2, y = -6$. Paso 2: Ubicamos las coordenadas $(-2, 6), (0, 0)$ y $(2, -6)$ en el plano cartesiano. Paso 3: Unimos los puntos mediante una recta continua que atraviesa los cuadrantes II y IV. Solución: Es una recta decreciente que pasa por el origen con pendiente negativa $-3$.',
      'Ejemplo 3 (Constante y ecuación de proporcionalidad inversa): Dos albañiles tardan 18 horas en construir una pared divisoria. Si el tiempo $y$ es inversamente proporcional al número de trabajadores $x$, determina la ecuación. Paso 1: Aplicamos la propiedad del producto constante: $a = x \\cdot y$. Paso 2: Multiplicamos los datos conocidos: $a = 2 \\times 18 = 36$ persona-horas. Paso 3: Formulamos la ecuación: $y = \\frac{36}{x}$. Solución: La ecuación es $y = \\frac{36}{x}$; para 6 albañiles tardarán $y = \\frac{36}{6} = 6$ horas.',
      'Ejemplo 4 (Identificación tabular del tipo de proporcionalidad): Dada la tabla con pares $(x, y)$: $(2, 24), (3, 16), (4, 12), (6, 8)$, determinar el tipo de relación. Paso 1: Verificamos los cocientes $\\frac{y}{x}$: $\\frac{24}{2} = 12$, pero $\\frac{16}{3} \\approx 5.33$; no es directa. Paso 2: Verificamos los productos $x \\cdot y$: $2 \\times 24 = 48, 3 \\times 16 = 48, 4 \\times 12 = 48, 6 \\times 8 = 48$. Paso 3: Como el producto es estrictamente constante ($48$), la relación es inversamente proporcional. Solución: Proporcionalidad inversa con ecuación $y = \\frac{48}{x}$.',
      'Ejemplo 5 (Cálculo de valores desconocidos mediante regla de proporcionalidad): Un vehículo que viaja a velocidad constante recorre 150 kilómetros consumiendo 5 galones de gasolina. ¿Cuántos galones requerirá para recorrer 360 kilómetros? Paso 1: La distancia recorrida es directamente proporcional al combustible consumido. Paso 2: Calculamos el rendimiento unitario: $a = \\frac{150\\text{ km}}{5\\text{ gal}} = 30\\text{ km/gal}$. Paso 3: Despejamos los galones necesarios: $\\text{galones} = \\frac{360\\text{ km}}{30\\text{ km/gal}} = 12\\text{ galones}$. Solución: Se requieren exactamente 12 galones de combustible.'
    ]
  ),
];

const u7Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u07-l01',
    '7.1',
    'Gráficas de faja y circulares',
    'En una consulta escolar efectuada a 200 estudiantes de séptimo grado en el departamento de La Paz sobre su platillo típico preferido, se obtuvieron los siguientes resultados: 90 estudiantes prefieren pupusas de queso con loroco, 50 eligen pastelitos de carne, 40 prefieren yuca frita con chicharrón y 20 eligen empanadas de plátano. ¿Cuáles son los porcentajes correspondientes a cada categoría y cuántos grados sexagesimales debe medir el ángulo central de cada sector para construir la gráfica circular oficial?',
    'Para construir la tabla estadística organizamos los datos calculando la frecuencia relativa, el porcentaje y el ángulo central de cada sector circular. En primer lugar, determinamos los porcentajes dividiendo cada frecuencia absoluta entre el total ($200$) y multiplicando por $100$: pupusas representan $\\frac{90}{200} \\times 100 = 45\\%$; pastelitos son $\\frac{50}{200} \\times 100 = 25\\%$; yuca frita es $\\frac{40}{200} \\times 100 = 20\\%$; y empanadas corresponden a $\\frac{20}{200} \\times 100 = 10\\%$. La suma total verifica el $100\\%$. En segundo lugar, dado que la circunferencia completa mide $360^\\circ$ y representa el $100\\%$, cada $1\\%$ equivale exactamente a $\\frac{360^\\circ}{100} = 3.6^\\circ$. Calculamos los ángulos centrales multiplicando el porcentaje de cada categoría por $3.6^\\circ$: para pupusas, $45 \\times 3.6^\\circ = 162^\\circ$; para pastelitos, $25 \\times 3.6^\\circ = 90^\\circ$; para yuca frita, $20 \\times 3.6^\\circ = 72^\\circ$; y para empanadas, $10 \\times 3.6^\\circ = 36^\\circ$. La suma de los cuatro ángulos es $162^\\circ + 90^\\circ + 72^\\circ + 36^\\circ = 360^\\circ$.',
    'Las **gráficas de faja** y las **gráficas circulares** son representaciones visuales que permiten comparar las proporciones o porcentajes en que se distribuyen las distintas categorías de una variable cualitativa o cuantitativa discreta:\n1. En una **gráfica de faja**, un rectángulo de longitud total equivalente al $100\\%$ se divide en secciones proporcionales a cada frecuencia relativa.\n2. En una **gráfica circular** (o de pastel), el círculo completo de $360^\\circ$ se subdivide en sectores circulares cuyos ángulos centrales son proporcionales al porcentaje de cada categoría mediante la fórmula:\n$$\\text{Ángulo del sector} = \\% \\times 3.6^\\circ = \\frac{\\text{Frecuencia absoluta}}{\\text{Total de datos}} \\times 360^\\circ$$\nLa suma de todos los porcentajes debe ser exactamente igual al $100\\%$ y la suma de los ángulos debe totalizar $360^\\circ$.',
    'Para representar una categoría con el $35\\%$ de frecuencia: calculamos el ángulo del sector circular como $35 \\times 3.6^\\circ = 126^\\circ$, el cual se traza desde el radio inicial usando transportador.',
    [
      { exercise: 'Calcula el ángulo del sector circular correspondiente a una preferencia estudiantil del 15% en una encuesta.', hint: 'Multiplica el porcentaje por el factor 3.6°.', answer: '15 x 3.6° = 54°' },
      { exercise: 'En una gráfica circular de 360°, un sector mide 108°. ¿Qué porcentaje del total representa dicho sector?', hint: 'Divide 108° entre 3.6° (o entre 360° y multiplica por 100).', answer: '108° / 3.6° = 30%' }
    ],
    [
      'Ejemplo 1 (Cálculo de porcentajes y ángulos a partir de frecuencias absolutas): En una muestra de 50 alumnos, 15 practican fútbol. Determina el porcentaje y el ángulo para la gráfica circular. Paso 1: Calculamos la frecuencia relativa porcentual: $\\frac{15}{50} \\times 100 = 30\\%$. Paso 2: Convertimos el porcentaje a grados sexagesimales multiplicando por el factor constante: $30 \\times 3.6^\\circ$. Paso 3: Efectuamos el cálculo: $30 \\times 3.6^\\circ = 108^\\circ$. Solución: Representa el $30\\%$ y un ángulo central de $108^\\circ$.',
      'Ejemplo 2 (Construcción de una gráfica de faja con escala porcentual): Una cooperativa distribuye sus tierras en: 50% café, 30% maíz y 20% frijol. Diseña la distribución en una faja de 10 cm. Paso 1: La faja completa mide $10\\text{ cm}$ representando el $100\\%$, por lo que cada $10\\%$ equivale a $1\\text{ cm}$. Paso 2: Calculamos la longitud para el café: $50\\% = 5\\text{ cm}$. Paso 3: Para el maíz: $30\\% = 3\\text{ cm}$, y para el frijol: $20\\% = 2\\text{ cm}$. Solución: Los segmentos de la faja miden $5\\text{ cm}, 3\\text{ cm}$ y $2\\text{ cm}$ consecutivamente.',
      'Ejemplo 3 (Deducción de la frecuencia absoluta a partir del ángulo del sector): En una gráfica circular de 400 votantes, el sector de un candidato mide 72°. ¿Cuántos votos obtuvo? Paso 1: Convertimos el ángulo a porcentaje dividiendo entre $3.6^\\circ$: $\\frac{72^\\circ}{3.6^\\circ} = 20\\%$. Paso 2: Calculamos el $20\\%$ del total de la población de votantes: $0.20 \\times 400$. Paso 3: Realizamos la multiplicación aritmética: $0.20 \\times 400 = 80$. Solución: El candidato obtuvo 80 votos.',
      'Ejemplo 4 (Comprobación de consistencia en tabla de frecuencias circulares): Un estudio tiene 4 categorías con ángulos: $120^\\circ, 90^\\circ, 85^\\circ$ y $65^\\circ$. Verificar si la tabla es consistente. Paso 1: Sumamos todos los ángulos reportados: $120^\\circ + 90^\\circ + 85^\\circ + 65^\\circ$. Paso 2: Obtenemos $210^\\circ + 150^\\circ = 360^\\circ$. Paso 3: Como la suma es exactamente igual a $360^\\circ$, la partición del círculo es correcta y no tiene huecos ni solapamientos. Solución: La distribución es matemáticamente válida.',
      'Ejemplo 5 (Interpretación de datos y toma de decisiones a partir de una gráfica circular): Una gráfica circular muestra los gastos familiares mensuales: Vivienda 40%, Alimentación 35%, Transporte 15% y Recreación 10%. Si el ingreso total es de 800 dólares, ¿cuánto se gasta en alimentación? Paso 1: Identificamos el porcentaje correspondiente a alimentación: $35\\%$. Paso 2: Expresamos el porcentaje como decimal: $0.35$. Paso 3: Multiplicamos por el ingreso mensual total: $0.35 \\times 800 = 280$ dólares. Solución: La familia destina 280 dólares a la alimentación.'
    ]
  ),
];

const u8Lessons7G = [
  createPscerLesson(
    'mined-mat-7g-u08-l01',
    '8.1',
    'Construcción geométrica con compás: mediatriz y bisectriz',
    'En el taller de dibujo técnico de un instituto nacional en Ahuachapán, se solicita a los alumnos diseñar el plano de un parque infantil triangular. Para situar una farola de iluminación que se encuentre a la misma distancia de dos bancas situadas en los puntos A y B, y trazar una vereda que divida exactamente por la mitad el ángulo de 60 grados que forman dos senderos principales, ¿qué construcciones geométricas con regla sin graduar y compás deben emplearse y cuáles son los pasos rigurosos para ejecutarlas?',
    'Para resolver la primera necesidad (equidistancia respecto a dos puntos fijos A y B), debemos construir la **mediatriz** del segmento AB. El procedimiento formal con compás consiste en: 1) Hacer centro en el punto A y abrir el compás con un radio mayor que la mitad estimada del segmento AB, trazando dos arcos, uno arriba y otro abajo del segmento; 2) Manteniendo exactamente la misma abertura del compás, hacer centro en el punto B y cortar los dos arcos anteriores en dos puntos de intersección P y Q; 3) Con la regla, trazar la recta que pasa por P y Q. Esta recta es perpendicular a AB y pasa por su punto medio M. Para resolver la segunda necesidad (dividir el ángulo en dos mitades congruentes de 30 grados), construimos la **bisectriz**: 1) Con centro en el vértice del ángulo V, se traza un arco de radio arbitrario que corte a ambos lados en los puntos D y E; 2) Con centros en D y E, con igual radio, se trazan dos arcos en la región interior del ángulo que se cortan en el punto F; 3) Se traza el rayo que parte del vértice V y pasa por F.',
    'Las construcciones fundamentales euclidianas con regla y compás garantizan precisión deductiva en geometría:\n1. La **mediatriz** de un segmento es la recta perpendicular trazada en su punto medio. Cumple la propiedad de **equidistancia**: todo punto $P$ perteneciente a la mediatriz equidista de los extremos del segmento:\n$$P \\in \\text{Mediatriz}(AB) \\iff PA = PB$$\n2. La **bisectriz** de un ángulo es el rayo o semirrecta con origen en el vértice que divide el ángulo en dos ángulos adyacentes congruentes de igual medida:\n$$\\angle AVF \\cong \\angle BVF = \\frac{1}{2}\\angle AVB$$\nTodo punto de la bisectriz equidista de los dos lados que delimitan el ángulo.',
    'Para trazar la mediatriz de un segmento $AB$ de 8 cm: se abren arcos con radio de 5 cm desde ambos extremos; la recta trazada por las intersecciones corta el segmento a 4 cm formando ángulos rectos de $90^\\circ$.',
    [
      { exercise: '¿Qué propiedad cumple cualquier punto situado sobre la mediatriz de un segmento de recta AB?', hint: 'Se refiere a las distancias hacia los extremos A y B.', answer: 'Equidista de ambos extremos, es decir, PA = PB.' },
      { exercise: 'Si un ángulo mide 78° y se le traza su bisectriz con compás, ¿cuánto mide cada uno de los dos ángulos resultantes?', hint: 'La bisectriz divide el ángulo exactamente por la mitad.', answer: '78° / 2 = 39°' }
    ],
    [
      'Ejemplo 1 (Verificación geométrica de equidistancia en la mediatriz): Se tiene un segmento $AB$ de $10\\text{ cm}$. Se ubica un punto $P$ en su mediatriz a $12\\text{ cm}$ de altura del punto medio $M$. Demostrar que $PA = PB$. Paso 1: La mediatriz es perpendicular en $M$, por lo que $AM = MB = 5\\text{ cm}$ y el ángulo en $M$ es de $90^\\circ$. Paso 2: Aplicamos el teorema de Pitágoras en los triángulos rectángulos $\\triangle PMA$ y $\\triangle PMB$: $PA = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13\\text{ cm}$. Paso 3: Calculamos $PB = \\sqrt{5^2 + 12^2} = 13\\text{ cm}$. Solución: Se comprueba que $PA = PB = 13\\text{ cm}$.',
      'Ejemplo 2 (Construcción con compás de ángulos notables de 45° mediante bisectriz): Explicar cómo obtener un ángulo exacto de 45° a partir de un ángulo recto de 90°. Paso 1: Trazamos dos rectas perpendiculares para formar un ángulo recto de $90^\\circ$ con vértice $V$. Paso 2: Hacemos centro en $V$ y marcamos arcos en ambos lados en los puntos $A$ y $B$. Paso 3: Con centros en $A$ y $B$, trazamos arcos interiores que se cortan en $C$ y unimos $VC$. Solución: La bisectriz $VC$ divide el ángulo de $90^\\circ$ en dos ángulos de $45^\\circ$.',
      'Ejemplo 3 (Localización del circuncentro de un triángulo mediante mediatrices): Un topógrafo debe ubicar una torre de radio que equidiste de tres poblaciones $A, B$ y $C$. Paso 1: Unimos las tres poblaciones formando el triángulo $\\triangle ABC$. Paso 2: Trazamos con regla y compás la mediatriz del lado $AB$ y la mediatriz del lado $BC$. Paso 3: El punto donde se intersectan ambas mediatrices es el circuncentro $O$, centro de la circunferencia circunscrita. Solución: La torre debe situarse exactamente en el circuncentro $O$.',
      'Ejemplo 4 (Localización del incentro de un triángulo mediante bisectrices): Determinar el centro de la circunferencia inscrita en un triángulo utilizando bisectrices de sus ángulos interiores. Paso 1: Trazamos la bisectriz del ángulo interior $\\angle A$. Paso 2: Trazamos la bisectriz del ángulo interior $\\angle B$. Paso 3: El punto de cruce de las bisectrices es el incentro $I$, el cual equidista de los tres lados del triángulo. Solución: El punto buscado es el incentro $I$.',
      'Ejemplo 5 (Trazo de recta tangente a una circunferencia con regla y compás): Trazar la recta tangente a una circunferencia de radio $r$ que pase por un punto $P$ situado sobre ella. Paso 1: Trazamos el radio que une el centro $O$ con el punto de tangencia $P$. Paso 2: Extendemos el radio y construimos la recta perpendicular al radio en el punto $P$ usando compás. Paso 3: Como toda tangente es perpendicular al radio en el punto de contacto, la perpendicular trazada es la recta tangente exacta. Solución: La recta perpendicular construida es la tangente buscada.'
    ]
  ),
];

export const GRADE_07_DATA: GradeCurriculumData = {
  id: '7-grado',
  name: '7° Grado',
  cycle: 'Tercer Ciclo de Básica',
  cycleId: 'tercer-ciclo',
  description: 'Currículo oficial ESMATE de séptimo grado: números con signo, expresiones algebraicas, ecuaciones lineales de 1° grado y proporcionalidad.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de séptimo grado (Tercer Ciclo de Educación Básica).',
      units: [
        createCurriculumUnit(
          'mined-mat-7g-u01',
          1,
          'Números positivos, negativos y el cero',
          '7-grado',
          1,
          'Números relativos, recta numérica, valor absoluto y orden en Z.',
          ['Ordena enteros en la recta', 'Calcula valor absoluto', 'Resuelve problemas con signo'],
          u1Lessons7G,
          u1Questions7G,
          true
        ),
        createCurriculumUnit('mined-mat-7g-u02', 2, 'Suma y resta de números positivos, negativos y el cero', '7-grado', 1, 'Operaciones aditivas con signos y supresión de paréntesis.', ['Opera sumas algebraicas'], u2Lessons7G),
        createCurriculumUnit('mined-mat-7g-u03', 3, 'Multiplicación y división de números positivos, negativos y el cero', '7-grado', 1, 'Ley de los signos y potencias de enteros.', ['Aplica ley de signos'], u3Lessons7G),
        createCurriculumUnit('mined-mat-7g-u04', 4, 'Comunicación con símbolos', '7-grado', 1, 'Variables, términos semejantes y valor numérico.', ['Traduce a lenguaje algebraico'], u4Lessons7G),
        createCurriculumUnit('mined-mat-7g-u05', 5, 'Ecuaciones de primer grado', '7-grado', 2, 'Propiedades de la igualdad y transposición de términos ax+b=c.', ['Resuelve ecuaciones de primer grado'], u5Lessons7G),
        createCurriculumUnit('mined-mat-7g-u06', 6, 'Proporcionalidad directa e inversa', '7-grado', 2, 'Gráficas en el plano cartesiano y constantes de proporcionalidad.', ['Modela relaciones cartesianas'], u6Lessons7G),
        createCurriculumUnit('mined-mat-7g-u07', 7, 'Gráfica de faja y circular', '7-grado', 2, 'Distribución porcentual y cálculo de sectores en 360°.', ['Construye gráficos circulares'], u7Lessons7G),
        createCurriculumUnit('mined-mat-7g-u08', 8, 'Figuras planas y construcción de cuerpos geométricos', '7-grado', 2, 'Mediatriz, bisectriz y poliedros regulares.', ['Aplica construcciones con compás'], u8Lessons7G),
      ],
    },
  ],
};
