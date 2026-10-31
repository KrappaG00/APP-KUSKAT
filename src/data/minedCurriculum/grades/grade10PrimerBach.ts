import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 1° Bachillerato - Unidad 1
// Números reales
// -----------------------------------------------------------------
const u1Archetypes1B: QuestionArchetype[] = [
  {
    generate: (v) => {
      const n = (v % 4) + 3;
      return {
        statement: `Al simplificar la expresión con exponente racional $a^{${n}/2}$ en forma de radical, se obtiene:`,
        options: [
          `$\\sqrt{a^{${n}}}$`,
          `$\\sqrt[${n}]{a^2}$`,
          `$a^{${n - 1}}$`,
          `$\\frac{a^{${n}}}{2}$`,
        ],
        correctAnswer: 'A',
        explanation: `Por la definición fundamental de exponente fraccionario: $a^{m/n} = \\sqrt[n]{a^m}$. Para exponente $\\frac{${n}}{2}$, el índice de la raíz es $2$ (raíz cuadrada): $\\sqrt{a^{${n}}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      return {
        statement: `Al racionalizar el denominador de la fracción $\\frac{1}{\\sqrt{${a}} + 1}$ multiplicando por el conjugado, se obtiene:`,
        options: [
          `$\\frac{\\sqrt{${a}} + 1}{${a} - 1}$`,
          `$\\frac{\\sqrt{${a}} - 1}{${a} - 1}$`,
          `$\\frac{1}{${a} - 1}$`,
          `$\\sqrt{${a}} - 1$`,
        ],
        correctAnswer: 'B',
        explanation: `El conjugado de $(\\sqrt{${a}} + 1)$ es $(\\sqrt{${a}} - 1)$. Al multiplicar numerador y denominador por el conjugado: $\\frac{\\sqrt{${a}} - 1}{(\\sqrt{${a}})^2 - 1^2} = \\frac{\\sqrt{${a}} - 1}{${a} - 1}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const p = (v % 4) + 2;
      const q = (v % 3) + 2;
      return {
        statement: `Al aplicar las propiedades de los exponentes a $(x^{${p}})^{${q}}$, la expresión simplificada es:`,
        options: [
          `$x^{${p + q}}$`,
          `$x^{${p - q}}$`,
          `$x^{${p * q}}$`,
          `$x^{${p}^{${q}}}$`,
        ],
        correctAnswer: 'C',
        explanation: `Por la ley de potencia de una potencia: $(x^m)^n = x^{m \\cdot n}$. Por ende, $(x^{${p}})^{${q}} = x^{${p * q}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const left = -(v * 2 + 1);
      const right = v * 3 + 4;
      return {
        statement: `El conjunto de todos los números reales $x$ que cumplen la condición $${left} < x \\le ${right}$ se denota en notación de intervalo como:`,
        options: [
          `$[${left}, ${right}]$`,
          `$(${left}, ${right})$`,
          `$[${left}, ${right})$`,
          `$(${left}, ${right}]$`,
        ],
        correctAnswer: 'D',
        explanation: `El signo de desigualdad estricta ($<$) corresponde a un extremo abierto (paréntesis), mientras que la desigualdad débil ($\\le$) corresponde a un extremo cerrado (corchete): $(${left}, ${right}]$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿A cuál de los siguientes conjuntos numéricos pertenece formalmente el número $\\pi = 3.14159265...$?`,
        options: [
          'Números irracionales (I) y reales (R)',
          'Números racionales (Q) pero no reales',
          'Números enteros (Z)',
          'Números naturales (N)',
        ],
        correctAnswer: 'A',
        explanation: `El número $\\pi$ es un número irracional con infinitas cifras decimales no periódicas, perteneciendo al conjunto de los números irracionales ($\\mathbb{I}$) y al de los números reales ($\\mathbb{R}$).`,
      };
    },
  },
  {
    generate: (v) => {
      const k = (v % 5) + 2;
      return {
        statement: `Al simplificar la raíz enésima $\\sqrt[3]{${k * k * k}x^6}$, se obtiene exactamente:`,
        options: [
          `$${k}x$`,
          `$${k}x^2$`,
          `$${k * k}x^2$`,
          `$${k}x^3$`,
        ],
        correctAnswer: 'B',
        explanation: `$\\sqrt[3]{${k * k * k}x^6} = \\sqrt[3]{${k}^3} \\cdot \\sqrt[3]{x^6} = ${k} \\cdot x^{6/3} = ${k}x^2$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      return {
        statement: `¿Cuál es el valor simplificado de $(${a})^{-2}$ expresado como fracción positiva?`,
        options: [
          `$-${a * 2}$`,
          `$-${a * a + 1}$`,
          `$\\frac{1}{${a * a}}$`,
          `$\\frac{1}{${a * 2 + 1}}$`,
        ],
        correctAnswer: 'C',
        explanation: `Por la propiedad de los exponentes negativos: $a^{-n} = \\frac{1}{a^n}$. Así, $(${a})^{-2} = \\frac{1}{${a}^2} = \\frac{1}{${a * a}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `La distancia euclidiana entre dos puntos $a$ y $b$ sobre la recta numérica real se define algebraicamente mediante:`,
        options: [
          `$a - b$`,
          `$a + b$`,
          `$\\frac{a + b}{2}$`,
          `$|a - b|$`,
        ],
        correctAnswer: 'D',
        explanation: `La distancia geométrica entre dos números reales en la recta es el valor absoluto de su diferencia: $d(a, b) = |a - b| = |b - a|$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 4) + 1;
      return {
        statement: `Al evaluar el radical $\\sqrt[4]{16x^{${n * 4}}}$, el resultado positivo para $x \\ge 0$ es:`,
        options: [
          `$2x^{${n}}$`,
          `$4x^{${n}}$`,
          `$2x^{${n * 4}}$`,
          `$16x^{${n}}$`,
        ],
        correctAnswer: 'A',
        explanation: `$\\sqrt[4]{16} = 2$ y $\\sqrt[4]{x^{${n * 4}}} = x^{${n * 4}/4} = x^{${n}}$, dando $2x^{${n}}$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cuál de las siguientes propiedades garantiza que para todo número real $a, b \\in \\mathbb{R}$, se cumple $a + b = b + a$?`,
        options: [
          'Propiedad asociativa',
          'Propiedad conmutativa de la adición',
          'Propiedad distributiva',
          'Propiedad del elemento neutro',
        ],
        correctAnswer: 'B',
        explanation: `La propiedad conmutativa establece que el orden de los sumandos no altera la suma en el cuerpo de los números reales.`,
      };
    },
  },
];

const u1Questions1B = generate50UnitQuestions(
  'mined-mat-1b-u01',
  '1-bachillerato',
  '1B',
  1,
  'Números reales',
  'MINED ESMATE 1° Bachillerato',
  u1Archetypes1B
);

const u1Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u01-l01',
    '1.1',
    'Propiedades de las raíces n-ésimas y exponentes racionales',
    'En el laboratorio de ciencias aplicadas se investiga la desintegración de una sustancia cuyo factor de reducción se modela mediante la expresión algebraica que combina radicales y potencias: $\\frac{\\sqrt[3]{a^6 b^9 c^{12}}}{\\sqrt{a^2 b^4 c^6}}$, donde las variables representan concentraciones positivas de tres componentes esenciales. ¿Cómo se simplifica esta expresión aplicando las leyes de los exponentes racionales para expresar el resultado final utilizando únicamente potencias enteras irreducibles en el cuaderno de trabajo?',
    'Para resolver la simplificación de manera rigurosa, primero transformamos cada término con radical en su correspondiente forma de exponente fraccionario utilizando la propiedad fundamental que establece que la raíz enésima de una potencia equivale a dividir el exponente entre el índice. Para el numerador tenemos: $\\sqrt[3]{a^6 b^9 c^{12}} = a^{\\frac{6}{3}} b^{\\frac{9}{3}} c^{\\frac{12}{3}} = a^2 b^3 c^4$. A continuación, realizamos el mismo procedimiento para el denominador que posee índice dos por tratarse de una raíz cuadrada: $\\sqrt{a^2 b^4 c^6} = a^{\\frac{2}{2}} b^{\\frac{4}{2}} c^{\\frac{6}{2}} = a^1 b^2 c^3$. En tercer lugar, dividimos potencias que comparten la misma base restando ordenadamente los exponentes respectivos del numerador menos los del denominador: para la variable $a$ obtenemos $2 - 1 = 1$, para la variable $b$ resulta $3 - 2 = 1$, y para la variable $c$ calculamos $4 - 3 = 1$. Verificamos que cada base conserve un exponente entero positivo, concluyendo con certeza analítica que la expresión simplificada al máximo es exactamente el producto monomio irreducible $a b c$.',
    'Formalmente, si $a$ es un número real positivo y los valores $m, n$ son números enteros positivos con índice $n \\ge 2$, se define la potencia con exponente racional como $a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$. Esta correspondencia algebraica biunívoca garantiza que todas las propiedades operativas demostradas para exponentes enteros se mantengan plenamente válidas en el cuerpo de los números reales con exponentes racionales. De manera específica, el producto de potencias con base compartida suma sus exponentes $a^p \\cdot a^q = a^{p+q}$, el cociente de potencias de igual base resta los exponentes $\\frac{a^p}{a^q} = a^{p-q}$, la potencia de una potencia multiplica sus respectivos exponentes $(a^p)^q = a^{p \\cdot q}$, y la distribución respecto a la multiplicación distribuye el exponente sobre cada factor $(ab)^p = a^p b^p$. Al simplificar radicales, siempre se busca extraer factores enteros fuera del radicando dividiendo los exponentes entre el índice de la raíz.',
    'Simplificación directa: $\\sqrt[4]{81x^8} = 81^{1/4} \\cdot x^{8/4} = 3x^2$.',
    [
      { exercise: 'Simplifica la expresión radical: ∜(81 m¹⁶ n²⁴)', hint: 'Descompón 81 = 3⁴ y divide cada exponente entre el índice 4.', answer: '3m⁴n⁶' },
      { exercise: 'Calcula el valor numérico exacto de la potencia racional: 64^(2/3)', hint: 'Escribe 64 como 4³ o 2⁶ y multiplica los exponentes.', answer: '16' },
      { exercise: 'Reduce a una sola potencia de base común: (x^(1/2) · x^(3/4)) / x^(1/4)', hint: 'Suma los exponentes en el numerador y resta el exponente del divisor.', answer: 'x¹ = x' }
    ],
    [
      'Ejemplo 1 (Extracción de factores fuera del radical): Simplificar la raíz enésima $\\sqrt[4]{16 x^8 y^{12}}$. Paso 1: Descomponemos el coeficiente numérico en sus factores primos fundamentales, obteniendo que dieciséis equivale a $16 = 2^4$. Paso 2: Convertimos cada factor a potencia fraccionaria dividiendo sus exponentes entre el índice cuatro: $2^{\\frac{4}{4}} x^{\\frac{8}{4}} y^{\\frac{12}{4}}$. Paso 3: Evaluamos las divisiones enteras de los exponentes: $2^1 x^2 y^3$. Solución: La expresión simplificada irreducible es $2x^2 y^3$.',
      'Ejemplo 2 (Multiplicación de potencias con base común): Efectuar el producto de potencias racionales $x^{\\frac{2}{3}} \\cdot x^{\\frac{5}{6}}$. Paso 1: Aplicamos la ley del producto sumando los exponentes racionales correspondientes: $\\frac{2}{3} + \\frac{5}{6}$. Paso 2: Homogeneizamos las fracciones buscando el mínimo común múltiplo de los denominadores, que es seis: $\\frac{4}{6} + \\frac{5}{6} = \\frac{9}{6}$. Paso 3: Simplificamos la fracción resultante dividiendo numerador y denominador entre tres: $\\frac{3}{2}$. Solución: Obtenemos la expresión equivalente $x^{\\frac{3}{2}} = \\sqrt{x^3} = x\\sqrt{x}$.',
      'Ejemplo 3 (Cociente de potencias con base compartida): Simplificar la expresión fraccionaria $\\frac{y^{\\frac{7}{4}}}{y^{\\frac{3}{2}}}$. Paso 1: Restamos el exponente del divisor al exponente del dividendo aplicando la regla del cociente: $\\frac{7}{4} - \\frac{3}{2}$. Paso 2: Convertimos la segunda fracción a cuartos para operar con denominadores homogéneos: $\\frac{7}{4} - \\frac{6}{4} = \\frac{1}{4}$. Paso 3: Escribimos la expresión final en notación radical con índice cuatro. Solución: El cociente simplificado es $y^{\\frac{1}{4}} = \\sqrt[4]{y}$.',
      'Ejemplo 4 (Exponente fraccionario negativo): Calcular el valor numérico de la potencia $27^{-\\frac{2}{3}}$. Paso 1: Aplicamos la propiedad del exponente negativo invirtiendo la base numérica: $\\frac{1}{27^{\\frac{2}{3}}}$. Paso 2: Expresamos la base veintisiete como una potencia cúbica: $27 = 3^3$. Paso 3: Multiplicamos los exponentes conforme a la ley de potencias: $(3^3)^{\\frac{2}{3}} = 3^{3 \\cdot \\frac{2}{3}} = 3^2 = 9$. Solución: La fracción resultante irreducible es $\\frac{1}{9}$.',
      'Ejemplo 5 (Simplificación de cociente bajo radical): Racionalizar y simplificar la expresión compuesta $\\sqrt[3]{\\frac{8 a^9}{b^6}}$. Paso 1: Aplicamos la propiedad distributiva del radical al numerador y denominador por separado: $\\frac{\\sqrt[3]{8 a^9}}{\\sqrt[3]{b^6}}$. Paso 2: Expresamos el número ocho como dos al cubo y dividimos los exponentes entre el índice tres. Paso 3: Calculamos $2^{\\frac{3}{3}} a^{\\frac{9}{3}} = 2a^3$ en el numerador y $b^{\\frac{6}{3}} = b^2$ en el denominador. Solución: La fracción algebraica irreducible es $\\frac{2a^3}{b^2}$.'
    ]
  ),
  createPscerLesson(
    'mined-mat-1b-u01-l02',
    '1.2',
    'Racionalización con binomios conjugados e intervalos en la recta real',
    'Un ingeniero topógrafo debe calcular con exactitud la resistencia estructural de una viga de concreto, cuya fórmula técnica arroja el valor numérico expresado mediante la fracción con radicales en el denominador: $\\frac{12}{\\sqrt{7} - \\sqrt{3}}$. Además, para garantizar que la estructura soporte las cargas dinámicas admisibles, la deformación elástica calculada debe ubicarse estrictamente dentro del intervalo de tolerancia real de valores mayores o iguales que $2$ y menores estrictos que $8$. ¿Cómo se racionaliza el denominador multiplicando por el binomio conjugado y cómo se describe algebraicamente y en notación conjuntista el intervalo admisible?',
    'Para eliminar los radicales presentes en el denominador, recurrimos a la técnica algebraica de multiplicación por el binomio conjugado, aprovechando la identidad de la diferencia de cuadrados que garantiza que $(\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b}) = a - b$. Multiplicamos simultáneamente el numerador y el denominador por el conjugado $(\\sqrt{7} + \\sqrt{3})$: $\\frac{12(\\sqrt{7} + \\sqrt{3})}{(\\sqrt{7} - \\sqrt{3})(\\sqrt{7} + \\sqrt{3})} = \\frac{12(\\sqrt{7} + \\sqrt{3})}{(\\sqrt{7})^2 - (\\sqrt{3})^2} = \\frac{12(\\sqrt{7} + \\sqrt{3})}{7 - 3} = \\frac{12(\\sqrt{7} + \\sqrt{3})}{4}$. Dividiendo doce entre cuatro, simplificamos el coeficiente a tres, obteniendo finalmente la expresión entera $3(\\sqrt{7} + \\sqrt{3}) = 3\\sqrt{7} + 3\\sqrt{3}$. En segundo lugar, para la condición de tolerancia que establece que la deformación elástica debe ser mayor o igual que dos y estrictamente menor que ocho, representamos el intervalo semiabierto a la derecha mediante la notación conjuntista formal $[2, 8) = \\{ x \\in \\mathbb{R} \\mid 2 \\le x < 8 \\}$. En la recta numérica real, este conjunto se gráfica trazando un corchete cerrado o punto sólido relleno sobre el extremo inferior dos y un paréntesis abierto o punto hueco sobre el extremo superior ocho, abarcando todos los números reales continuos intermedios.',
    'Racionalizar una expresión fraccionaria consiste en transformarla sistemáticamente en una fracción equivalente cuyo denominador esté libre de radicales, lo que optimiza su precisión numérica en cálculos analíticos. Cuando el denominador está compuesto por un binomio con raíces cuadradas de la forma $\\sqrt{a} \\pm \\sqrt{b}$, el algoritmo exige multiplicar tanto el numerador como el denominador por su correspondiente binomio conjugado $\\sqrt{a} \\mp \\sqrt{b}$, apoyándose en el producto notable de la diferencia de cuadrados $(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = a - b$. Paralelamente, los subconjuntos continuos de la recta real $\\mathbb{R}$ se denominan intervalos y se clasifican según la inclusión de sus cotas extremas: intervalos abiertos $(a, b)$, intervalos cerrados $[a, b]$, intervalos semiabiertos $[a, b)$ o $(a, b]$, e intervalos no acotados infinitos como $(-\\infty, b]$ o $[a, \\infty)$. La presencia de corchetes indica que el punto extremo forma parte de la solución por una desigualdad amplia, mientras que los paréntesis señalan exclusión estricta.',
    'Racionalización modelo: $\\frac{2}{\\sqrt{3} + 1} = \\frac{2(\\sqrt{3}-1)}{3 - 1} = \\sqrt{3} - 1$.',
    [
      { exercise: 'Racionaliza el denominador de la fracción: 8 / (√6 - √2)', hint: 'Multiplica por el conjugado √6 + √2 y divide entre la diferencia 6 - 2 = 4.', answer: '2(√6 + √2)' },
      { exercise: 'Dados los intervalos reales I = (-2, 4] y J = [1, 7), calcula su intersección I ∩ J.', hint: 'Identifica los números reales que pertenecen a ambos intervalos al mismo tiempo.', answer: '[1, 4]' },
      { exercise: 'Escribe en notación de intervalo el conjunto: {x ∈ R | x > -5}', hint: 'Es un intervalo no acotado hacia la derecha que inicia abierto en -5.', answer: '(-5, ∞)' }
    ],
    [
      'Ejemplo 1 (Racionalización con entero y raíz): Racionalizar la fracción $\\frac{6}{\\sqrt{5} + 1}$. Paso 1: Identificamos el binomio conjugado del denominador, que corresponde a $(\\sqrt{5} - 1)$. Paso 2: Multiplicamos numerador y denominador por dicho conjugado: $\\frac{6(\\sqrt{5} - 1)}{(\\sqrt{5})^2 - 1^2} = \\frac{6(\\sqrt{5} - 1)}{5 - 1} = \\frac{6(\\sqrt{5} - 1)}{4}$. Paso 3: Simplificamos la fracción dividiendo entre dos tanto el numerador como el denominador. Solución: El resultado irreducible es $\\frac{3(\\sqrt{5} - 1)}{2}$.',
      'Ejemplo 2 (Racionalización con dos raíces cuadradas): Racionalizar la fracción $\\frac{10}{\\sqrt{11} - \\sqrt{6}}$. Paso 1: El conjugado del denominador es $(\\sqrt{11} + \\sqrt{6})$. Paso 2: Multiplicamos ambos términos por el conjugado: $\\frac{10(\\sqrt{11} + \\sqrt{6})}{(\\sqrt{11})^2 - (\\sqrt{6})^2} = \\frac{10(\\sqrt{11} + \\sqrt{6})}{11 - 6} = \\frac{10(\\sqrt{11} + \\sqrt{6})}{5}$. Paso 3: Dividimos diez entre cinco obteniendo dos. Solución: La expresión simplificada es $2(\\sqrt{11} + \\sqrt{6}) = 2\\sqrt{11} + 2\\sqrt{6}$.',
      'Ejemplo 3 (Operaciones de unión e intersección con intervalos): Determinar la unión e intersección de los intervalos reales $A = [-3, 5)$ y $B = (1, 9]$. Paso 1: Representamos ambos intervalos sobre la recta numérica real observando las zonas de coincidencia. Paso 2: La unión reúne todos los puntos que pertenecen a al menos uno de los conjuntos: $A \\cup B = [-3, 9]$. Paso 3: La intersección selecciona los elementos comunes a ambos intervalos simultáneamente: $A \\cap B = (1, 5)$. Solución: $A \\cup B = [-3, 9]$ y $A \\cap B = (1, 5)$.',
      'Ejemplo 4 (Racionalización con entero mayor): Racionalizar el denominador de la fracción $\\frac{4}{3 - \\sqrt{5}}$. Paso 1: Determinamos el binomio conjugado que es $(3 + \\sqrt{5})$. Paso 2: Multiplicamos numerador y denominador: $\\frac{4(3 + \\sqrt{5})}{3^2 - (\\sqrt{5})^2} = \\frac{4(3 + \\sqrt{5})}{9 - 5} = \\frac{4(3 + \\sqrt{5})}{4}$. Paso 3: Cancelamos el factor común cuatro presente en el numerador y denominador. Solución: La expresión simplificada es $3 + \\sqrt{5}$.',
      'Ejemplo 5 (Representación conjuntista de intervalo acotado): Expresar en notación de intervalo el conjunto $C = \\{ x \\in \\mathbb{R} \\mid x \\ge -4 \\text{ y } x < 6 \\}$. Paso 1: Reconocemos que el límite inferior incluye a menos cuatro debido a la desigualdad débil mayor o igual. Paso 2: El límite superior excluye al seis por la desigualdad estricta menor que. Paso 3: Escribimos el intervalo utilizando corchete a la izquierda y paréntesis a la derecha. Solución: El intervalo es $[-4, 6)$ y contiene todos los reales entre $-4$ y $6$.'
    ]
  ),
];

const u2Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u02-l01',
    '2.1',
    'División sintética (Regla de Ruffini), Teorema del Residuo y números complejos',
    'Un docente de educación media propone a sus estudiantes analizar el comportamiento algebraico del polinomio cúbico $P(x) = 2x^3 - 5x^2 + 4x - 6$ al ser dividido entre el binomio lineal $(x - 2)$. Se solicita encontrar de forma rápida y abreviada el cociente y el residuo sin realizar la división larga tradicional, contrastar el residuo obtenido con el valor numérico evaluado $P(2)$, y finalmente definir rigurosamente la unidad imaginaria $i$ resolviendo la ecuación cuadrática fundamental $x^2 + 9 = 0$ dentro del cuerpo de los números complejos.',
    'Para dividir el polinomio $P(x) = 2x^3 - 5x^2 + 4x - 6$ entre el binomio lineal $(x - 2)$ empleamos el algoritmo abreviado de la división sintética o regla de Ruffini tomando el valor raíz $c = 2$. Anotamos los coeficientes ordenados de forma descendente: $[2, -5, 4, -6]$. Bajamos el coeficiente principal dos a la fila inferior. Multiplicamos dos por dos obteniendo cuatro; sumamos algebraicamente con el segundo coeficiente: $-5 + 4 = -1$. Multiplicamos menos uno por dos obteniendo menos dos; sumamos con el tercer término: $4 + (-2) = 2$. Multiplicamos dos por dos obteniendo cuatro; sumamos con el término independiente final: $-6 + 4 = -2$. Con estos valores deducimos que el polinomio cociente resultante es de grado dos $Q(x) = 2x^2 - x + 2$, mientras que el residuo numérico constante es $R = -2$. Al evaluar directamente la función polinómica en $c = 2$, tenemos $P(2) = 2(2)^3 - 5(2)^2 + 4(2) - 6 = 16 - 20 + 8 - 6 = -2$, confirmando con absoluta exactitud el Teorema del Residuo. Por último, para la ecuación cuadrática $x^2 + 9 = 0 \\implies x^2 = -9$, extraemos raíz cuadrada formal introduciendo la unidad imaginaria $i = \\sqrt{-1}$ (donde se cumple que $i^2 = -1$), obteniendo las dos soluciones complejas conjugadas $x = \\pm 3i$.',
    'El **Teorema del Residuo** formaliza que al dividir cualquier polinomio de coeficientes reales $P(x)$ entre un divisor lineal de la forma $(x - c)$, el residuo de la división algebraica es idéntico al valor numérico obtenido al evaluar el polinomio en dicho punto $R = P(c)$. Como consecuencia inmediata, el **Teorema del Factor** establece que el binomio $(x - c)$ constituye un factor exacto del polinomio si y solo si el residuo evaluado es nulo, es decir, $P(c) = 0$, lo que permite factorizar polinomios de grado superior. Por otro lado, la imposibilidad matemática de resolver raíces cuadradas de números negativos en el conjunto $\\mathbb{R}$ conduce a la ampliación hacia el cuerpo de los **números complejos** $\\mathbb{C} = \\{ a + bi \\mid a, b \\in \\mathbb{R}, i^2 = -1 \\}$. En esta estructura, $a$ representa la parte real y $b$ la parte imaginaria. Para todo número complejo $z = a + bi$, su conjugado algebraico se denota como $\\overline{z} = a - bi$, y su módulo euclidiano se calcula mediante la relación pitagórica $|z| = \\sqrt{a^2 + b^2}$.',
    'Suma binomial de complejos: $(3 + 4i) + (2 - 6i) = (3 + 2) + (4 - 6)i = 5 - 2i$.',
    [
      { exercise: 'Divide usando la regla de Ruffini: (x³ - 2x² - 5x + 6) ÷ (x - 3)', hint: 'Usa c = 3 con coeficientes ordenados [1, -2, -5, 6].', answer: 'Cociente: x² + x - 2, Residuo: 0' },
      { exercise: 'Calcula el módulo exacto del número complejo z = 3 - 4i', hint: 'Aplica la fórmula |z| = √(a² + b²) = √(3² + (-4)²).', answer: '5' },
      { exercise: 'Efectúa el producto de números complejos conjugados: (2 + 5i)(2 - 5i)', hint: 'Aplica la diferencia de cuadrados teniendo presente que i² = -1.', answer: '29' }
    ],
    [
      'Ejemplo 1 (División sintética paso a paso): Dividir mediante la regla de Ruffini el polinomio $3x^3 - 4x^2 + 2x - 5$ entre $(x - 1)$. Paso 1: Colocamos el valor raíz $c = 1$ y ordenamos los coeficientes $[3, -4, 2, -5]$. Paso 2: Bajamos el coeficiente inicial tres; calculamos el producto $3 \\times 1 = 3$; sumamos $-4 + 3 = -1$. Paso 3: Multiplicamos $-1 \\times 1 = -1$; sumamos $2 + (-1) = 1$; calculamos $1 \\times 1 = 1$; sumamos $-5 + 1 = -4$. Solución: El polinomio cociente es $Q(x) = 3x^2 - x + 1$ y el residuo es $R = -4$.',
      'Ejemplo 2 (Comprobación con el Teorema del Factor): Determinar si $(x + 2)$ es un factor de $P(x) = x^3 + 3x^2 - 4$ aplicando el Teorema del Factor. Paso 1: Como el divisor tiene la forma $(x - c) = (x - (-2))$, evaluamos la función en $c = -2$. Paso 2: Sustituimos numéricamente: $P(-2) = (-2)^3 + 3(-2)^2 - 4 = -8 + 3(4) - 4$. Paso 3: Agrupamos y simplificamos los términos: $-8 + 12 - 4 = 0$. Solución: Puesto que el residuo evaluado $P(-2) = 0$, queda demostrado que $(x + 2)$ sí es un factor exacto del polinomio.',
      'Ejemplo 3 (Suma y resta en forma binómica de complejos): Realizar la suma y resta de los números complejos $z_1 = 4 + 7i$ y $z_2 = 2 - 3i$. Paso 1: Para calcular la suma, agrupamos ordenadamente partes reales y partes imaginarias: $(4 + 2) + (7 - 3)i$. Paso 2: Efectuamos las operaciones aritméticas: $6 + 4i$. Paso 3: Para la resta calculamos $z_1 - z_2 = (4 - 2) + (7 - (-3))i = 2 + 10i$. Solución: La suma es $6 + 4i$ y la resta es $2 + 10i$.',
      'Ejemplo 4 (Multiplicación de números complejos): Efectuar la multiplicación de números complejos $(3 + 2i)(1 - 4i)$. Paso 1: Aplicamos la propiedad distributiva término a término: $3(1) + 3(-4i) + 2i(1) + 2i(-4i)$. Paso 2: Efectuamos los productos: $3 - 12i + 2i - 8i^2$. Paso 3: Sustituimos la identidad fundamental $i^2 = -1$ y agrupamos términos: $3 - 10i - 8(-1) = 3 - 10i + 8 = 11 - 10i$. Solución: El producto de los dos números complejos es $11 - 10i$.',
      'Ejemplo 5 (División de números complejos por el conjugado): Calcular el cociente de los números complejos $\\frac{5 + i}{2 - i}$ multiplicando por el conjugado. Paso 1: Identificamos el conjugado del denominador que corresponde a $(2 + i)$. Paso 2: Multiplicamos numerador y denominador por $(2 + i)$: $\\frac{(5 + i)(2 + i)}{(2 - i)(2 + i)} = \\frac{10 + 5i + 2i + i^2}{2^2 - i^2}$. Paso 3: Sustituimos $i^2 = -1$ en ambos términos: $\\frac{10 + 7i - 1}{4 - (-1)} = \\frac{9 + 7i}{5} = \\frac{9}{5} + \\frac{7}{5}i$. Solución: El cociente exacto es $\\frac{9}{5} + \\frac{7}{5}i$.'
    ]
  ),
];

const u3Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u03-l01',
    '3.1',
    'Desigualdades cuadráticas y método del cuadro de variación de signos',
    'Una cooperativa agropecuaria salvadoreña analiza los ingresos netos obtenidos por la venta de café en grano, modelados por la función cuadrática $I(x) = -2x^2 + 14x - 20$, donde $x$ representa la cantidad producida en cientos de quintales. Para evitar pérdidas financieras y asegurar rentabilidad operativa, la administración necesita que el ingreso neto sea mayor o igual a cero: $-2x^2 + 14x - 20 \\ge 0$. ¿Cómo se resuelve esta inecuación cuadrática factorizando el trinomio y utilizando sistemáticamente el cuadro de variación de signos para encontrar el intervalo exacto de producción rentable?',
    'Para resolver la inecuación cuadrática $-2x^2 + 14x - 20 \\ge 0$, primero multiplicamos toda la desigualdad por el factor negativo $-\\frac{1}{2}$, recordando la propiedad fundamental de las desigualdades que invierte el sentido de la relación de orden: $x^2 - 7x + 10 \\le 0$. A continuación, factorizamos el trinomio buscando dos números que multiplicados den $+10$ y sumados algebraicamente resulten $-7$, los cuales son $-2$ y $-5$: $(x - 2)(x - 5) \\le 0$. Los puntos críticos donde los factores se anulan son $x = 2$ y $x = 5$. Estos puntos dividen la recta numérica real en tres intervalos disjuntos: $(-\\infty, 2)$, $(2, 5)$ y $(5, \\infty)$. Construimos el cuadro de signos: en el intervalo $(-\\infty, 2)$, el factor $(x - 2)$ es negativo y $(x - 5)$ es negativo, por lo que su producto es positivo $(-)(-) = +$. En $(2, 5)$, $(x - 2)$ es positivo y $(x - 5)$ es negativo, resultando un producto negativo $(+)(-) = -$. En $(5, \\infty)$, ambos factores son positivos, dando un producto positivo $(+)(+) = +$. Como la inecuación transformada exige que el producto sea menor o igual a cero ($\\le 0$), seleccionamos el intervalo cerrado donde el signo es negativo o nulo: $[2, 5]$. Por lo tanto, la producción debe situarse entre $200$ y $500$ quintales.',
    'Para resolver una **desigualdad no lineal** (cuadrática o racional) se llevan todos los términos a un miembro para comparar contra cero: $P(x) \\ge 0$ o $P(x) \\le 0$. Luego se factoriza completamente la expresión hallando sus raíces reales o puntos críticos. Estos valores dividen la recta real en intervalos de prueba donde cada factor lineal conserva signo constante. Mediante un **cuadro de variación de signos**, se determina el signo del producto o cociente en cada intervalo aplicando la ley de los signos: $(-)(-) = +$, $(+)(-) = -$ y $(+)(+) = +$. Si la desigualdad incluye igualdad ($\\le, \\ge$), los puntos críticos que no anulen denominadores forman parte de la solución en intervalos cerrados.',
    'Intervalo solución cuadrático: $(x + 1)(x - 4) < 0$ tiene solución en el intervalo abierto $(-1, 4)$.',
    [
      { exercise: 'Resuelve la desigualdad cuadrática: x² - 4x - 5 ≤ 0', hint: 'Factoriza como (x - 5)(x + 1) ≤ 0 y analiza el signo entre raíces.', answer: '[-1, 5]' },
      { exercise: 'Encuentra el conjunto solución de la desigualdad con valor absoluto: |x + 3| > 4', hint: 'Aplica la propiedad |u| > a <=> u < -a ó u > a.', answer: '(-∞, -7) ∪ (1, ∞)' },
      { exercise: 'Resuelve la desigualdad racional: (x - 3) / (x - 6) ≤ 0', hint: 'El punto crítico x = 6 debe quedar abierto por anular el denominador.', answer: '[3, 6)' }
    ],
    [
      'Ejemplo 1 (Desigualdad cuadrática estricta): Resolver la desigualdad cuadrática $x^2 - 9 < 0$. Paso 1: Factorizamos como diferencia de cuadrados: $(x - 3)(x + 3) < 0$. Paso 2: Identificamos los puntos críticos en $x = -3$ y $x = 3$, que delimitan los intervalos $(-\\infty, -3)$, $(-3, 3)$ y $(3, \\infty)$. Paso 3: Evaluamos signos en cada tramo: en $(-3, 3)$ tomando $x = 0$, tenemos $(0-3)(0+3) = -9 < 0$. Solución: Como la desigualdad es estricta menor que cero, el conjunto solución es el intervalo abierto $(-3, 3)$.',
      'Ejemplo 2 (Desigualdad con signo mayor o igual): Resolver la inecuación cuadrática $x^2 + 5x + 6 \\ge 0$. Paso 1: Factorizamos el trinomio cuadrático: $(x + 2)(x + 3) \\ge 0$. Paso 2: Determinamos los puntos críticos que son $x = -3$ y $x = -2$. Paso 3: Analizamos los intervalos: en $(-\\infty, -3]$ ambos factores son negativos dando producto positivo; en $[-3, -2]$ tienen signos opuestos dando negativo; en $[-2, \\infty)$ ambos son positivos. Solución: El conjunto solución son los tramos positivos: $(-\\infty, -3] \\cup [-2, \\infty)$.',
      'Ejemplo 3 (Desigualdad fraccionaria o racional): Resolver la inecuación racional $\\frac{x - 1}{x + 4} > 0$. Paso 1: Los puntos críticos del numerador y denominador son $x = 1$ y $x = -4$ (restringido porque anula el denominador). Paso 2: Formamos los intervalos $(-\\infty, -4)$, $(-4, 1)$ y $(1, \\infty)$. Paso 3: Verificamos signos: para $x < -4$ tenemos $(-)/(-) = +$; para $-4 < x < 1$ tenemos $(+)/(-) = -$; para $x > 1$ tenemos $(+)/(+) = +$. Solución: La solución es la unión abierta $(-\\infty, -4) \\cup (1, \\infty)$.',
      'Ejemplo 4 (Multiplicación por coeficiente negativo): Resolver la inecuación cuadrática $-x^2 + 4x - 3 > 0$. Paso 1: Multiplicamos por $-1$ invirtiendo el sentido de la desigualdad: $x^2 - 4x + 3 < 0$. Paso 2: Factorizamos en binomios con término común: $(x - 1)(x - 3) < 0$. Paso 3: Evaluamos el signo entre los puntos críticos $x = 1$ y $x = 3$, donde los factores tienen signos contrarios resultando negativo. Solución: El conjunto solución es el intervalo abierto $(1, 3)$.',
      'Ejemplo 5 (Desigualdad con valor absoluto acotado): Resolver la desigualdad con valor absoluto $|2x - 5| \\le 7$. Paso 1: Aplicamos la propiedad $|u| \\le a \\iff -a \\le u \\le a$: $-7 \\le 2x - 5 \\le 7$. Paso 2: Sumamos cinco en los tres miembros de la desigualdad: $-2 \\le 2x \\le 12$. Paso 3: Dividimos entre dos preservando la orientación: $-1 \\le x \\le 6$. Solución: El conjunto solución es el intervalo cerrado $[-1, 6]$.'
    ]
  ),
];

const u4Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u04-l01',
    '4.1',
    'Funciones reales, dominio, rango y traslaciones f(x) = a(x - h)² + k',
    'Un proyectil balístico lanzado durante un ensayo de física aplicada describe una trayectoria parabólica cuya altura en metros respecto al suelo en función de la distancia horizontal $x$ en metros se modela mediante la función cuadrática $f(x) = -2(x - 4)^2 + 18$. Se requiere determinar analíticamente las coordenadas del vértice de la parábola, interpretar el significado físico de su altura máxima, especificar formalmente el dominio y rango de la función en el contexto real, y explicar geométricamente cómo se obtiene su gráfica a partir de la parábola básica $y = x^2$ mediante reflexiones y traslaciones rígidas en el plano cartesiano.',
    'La función cuadrática se encuentra presentada en su forma canónica o de vértice $f(x) = a(x - h)^2 + k$, donde los parámetros identificados son $a = -2$, $h = 4$ y $k = 18$. A partir de esta estructura, las coordenadas del vértice son de forma inmediata $V(h, k) = (4, 18)$. Dado que el coeficiente principal $a = -2$ es estrictamente negativo, la parábola se abre hacia abajo, lo que garantiza que el vértice constituye un punto máximo absoluto: la altura máxima alcanzada por el proyectil es de $18$ metros cuando ha recorrido una distancia horizontal de $4$ metros. El dominio matemático de cualquier función cuadrática son todos los números reales $\\mathbb{R} = (-\\infty, \\infty)$; no obstante, para el rango de la función, al estar acotada superiormente por su valor máximo en $k = 18$, el conjunto de valores de salida es $(-\\infty, 18]$. Desde la perspectiva de transformaciones geométricas, la gráfica de $f(x)$ se construye a partir de $y = x^2$ mediante una serie ordenada de tres transformaciones: primero, un desplazamiento horizontal rígido de $4$ unidades hacia la derecha obteniendo $(x - 4)^2$; segundo, un estiramiento vertical de factor dos combinado con una reflexión respecto al eje horizontal $x$ debido al signo negativo resultando $-2(x - 4)^2$; y tercero, una traslación vertical de $18$ unidades hacia arriba.',
    'Toda **función cuadrática** de la forma canónica $f(x) = a(x - h)^2 + k$ tiene como gráfica una parábola con eje de simetría vertical en la recta $x = h$ y vértice en las coordenadas $V(h, k)$. Si el parámetro $a > 0$, la curva es cóncava hacia arriba, su vértice es un mínimo y su rango es $[k, \\infty)$. Si $a < 0$, la curva es cóncava hacia abajo, su vértice es un máximo y su rango es $(-\\infty, k]$. Geométricamente, el valor $h$ desplaza la gráfica horizontalmente ($h > 0$ hacia la derecha, $h < 0$ hacia la izquierda), mientras que $k$ produce un desplazamiento vertical ($k > 0$ hacia arriba, $k < 0$ hacia abajo). Asimismo, una función es inyectiva en un intervalo si y solo si cualquier recta horizontal corta a su gráfica en a lo sumo un punto.',
    'Forma canónica de parábola: $f(x) = 2(x - 3)^2 + 4$ tiene vértice $V(3, 4)$ y rango $[4, \\infty)$.',
    [
      { exercise: 'Halla el vértice y el rango de la función: f(x) = -4(x - 1)² + 7', hint: 'Identifica h = 1, k = 7 y observa que a = -4 < 0.', answer: 'Vértice: (1, 7), Rango: (-∞, 7]' },
      { exercise: 'Completa cuadrados para llevar a forma canónica: f(x) = x² + 8x + 10', hint: 'Suma y resta (8/2)² = 16 dentro de la expresión.', answer: 'f(x) = (x + 4)² - 6' },
      { exercise: 'Encuentra el dominio de la función racional: h(x) = (x + 2) / (x² - 16)', hint: 'Determina los valores que anulan el denominador x² - 16 = 0.', answer: 'R - {-4, 4}' }
    ],
    [
      'Ejemplo 1 (Identificación directa de vértice y rango): Determinar el vértice, eje de simetría y rango de la función $f(x) = 3(x + 2)^2 - 5$. Paso 1: Reescribimos la función en forma canónica identificando $h = -2$, $k = -5$ y $a = 3$. Paso 2: El vértice se ubica en $V(-2, -5)$ y el eje de simetría es la recta vertical $x = -2$. Paso 3: Como $a = 3 > 0$, la parábola abre hacia arriba y alcanza un valor mínimo en $y = -5$. Solución: El vértice es $(-2, -5)$ y el rango es el intervalo $[-5, \\infty)$.',
      'Ejemplo 2 (Completación de cuadrados para hallar forma canónica): Convertir la forma general $f(x) = x^2 - 6x + 13$ a la forma canónica completando cuadrados. Paso 1: Agrupamos los términos con la variable: $(x^2 - 6x) + 13$. Paso 2: Sumamos y restamos la mitad del coeficiente lineal elevada al cuadrado: $(\\frac{6}{2})^2 = 3^2 = 9$. Paso 3: Escribimos el trinomio cuadrado perfecto: $(x^2 - 6x + 9) - 9 + 13 = (x - 3)^2 + 4$. Solución: La forma canónica es $f(x) = (x - 3)^2 + 4$, con vértice en $V(3, 4)$.',
      'Ejemplo 3 (Dominio y rango de función radical): Determinar el dominio y rango de la función radical $g(x) = \\sqrt{2x - 8}$. Paso 1: Para que la raíz cuadrada esté bien definida en los reales, el radicando debe ser no negativo: $2x - 8 \\ge 0$. Paso 2: Despejamos la variable sumando ocho y dividiendo entre dos: $2x \\ge 8 \\implies x \\ge 4$. Paso 3: La raíz aritmética siempre genera valores mayores o iguales a cero. Solución: El dominio es $[4, \\infty)$ y el rango es $[0, \\infty)$.',
      'Ejemplo 4 (Prueba de inyectividad en dominio restringido): Verificar si la función cuadrática $f(x) = (x - 1)^2 + 2$ es inyectiva en el intervalo $[1, \\infty)$. Paso 1: Evaluamos la prueba de la recta horizontal sobre el dominio restringido a la derecha del vértice. Paso 2: Para cualesquiera $x_1, x_2 \\ge 1$, si $(x_1 - 1)^2 + 2 = (x_2 - 1)^2 + 2$, se sigue que $(x_1 - 1)^2 = (x_2 - 1)^2$. Paso 3: Como ambos valores son no negativos, extrayendo raíz obtenemos $x_1 - 1 = x_2 - 1 \\implies x_1 = x_2$. Solución: La función sí es inyectiva en el intervalo restringido $[1, \\infty)$.',
      'Ejemplo 5 (Secuencia de traslaciones rígidas en el plano): Describir la traslación que transforma la gráfica de $y = x^2$ en $g(x) = -(x + 5)^2 - 3$. Paso 1: El término $(x + 5)$ produce un desplazamiento de cinco unidades hacia la izquierda. Paso 2: El signo negativo exterior refleja la curva respecto al eje de las abscisas (eje $x$). Paso 3: El término $-3$ desplaza la curva tres unidades hacia abajo. Solución: Traslación de 5 unidades a la izquierda, reflexión vertical respecto al eje $x$ y traslación de 3 unidades hacia abajo.'
    ]
  ),
];

const u5Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u05-l01',
    '5.1',
    'Resolución de triángulos oblicuángulos: Ley de Senos y Ley de Cosenos',
    'Dos estaciones de monitoreo sísmico del Observatorio Ambiental de El Salvador, ubicadas en los puntos $A$ y $B$ con una separación de $12\\text{ km}$ entre sí en línea recta, detectan un movimiento telúrico originado en un epicentro superficial situado en el punto $C$. Desde la estación $A$ se mide un ángulo $\\angle CAB = 48^\\circ$, mientras que desde la estación $B$ se registra un ángulo $\\angle CBA = 67^\\circ$. ¿Cómo se determina analíticamente la distancia exacta desde cada estación de monitoreo hasta el epicentro empleando la Ley de Senos, y cómo se calcularía la distancia si se conocieran dos lados y el ángulo comprendido aplicando la Ley de Cosenos?',
    'En el triángulo oblicuángulo formado por los puntos $A$, $B$ y $C$, la suma de los tres ángulos internos siempre es igual a $180^\\circ$. Por lo tanto, calculamos primero la amplitud del tercer ángulo opuesto a la distancia conocida: $\\angle C = 180^\\circ - (48^\\circ + 67^\\circ) = 180^\\circ - 115^\\circ = 65^\\circ$. Conociendo el lado $c = 12\\text{ km}$ y su ángulo opuesto $\\angle C = 65^\\circ$, aplicamos la **Ley de Senos**: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$. Para encontrar la distancia desde la estación $B$ al epicentro (lado $a$, opuesto al ángulo $A$): $a = \\frac{c \\cdot \\sin A}{\\sin C} = \\frac{12 \\cdot \\sin(48^\\circ)}{\\sin(65^\\circ)} \\approx \\frac{12 \\cdot 0.7431}{0.9063} \\approx 9.84\\text{ km}$. De forma análoga, calculamos la distancia desde la estación $A$ al epicentro (lado $b$, opuesto al ángulo $B$): $b = \\frac{c \\cdot \\sin B}{\\sin C} = \\frac{12 \\cdot \\sin(67^\\circ)}{\\sin(65^\\circ)} \\approx \\frac{12 \\cdot 0.9205}{0.9063} \\approx 12.19\\text{ km}$. Constatamos que a mayor ángulo opuesto le corresponde mayor longitud de lado, verificando la consistencia geométrica del triángulo. Si en lugar de estos datos se conocieran los lados $a$ y $b$ junto con el ángulo comprendido $\\angle C$, la **Ley de Cosenos** permitiría calcular directamente el lado faltante mediante la relación cuadrática $c^2 = a^2 + b^2 - 2ab\\cos C$.',
    'Para resolver cualquier triángulo oblicuángulo, es decir, aquel que carece de ángulos rectos de noventa grados, se emplean dos teoremas fundamentales de la trigonometría analítica oficial: 1. **Ley de los Senos**: establece que en todo triángulo los lados son directamente proporcionales a los senos de sus respectivos ángulos opuestos: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$. Este teorema se aplica de manera directa cuando se conocen dos ángulos y cualquier lado, o cuando se tienen dos lados y el ángulo opuesto a uno de ellos. 2. **Ley de los Cosenos**: generaliza el Teorema de Pitágoras para triángulos generales mediante las igualdades $c^2 = a^2 + b^2 - 2ab\\cos C$, $a^2 = b^2 + c^2 - 2bc\\cos A$, y $b^2 = a^2 + c^2 - 2ac\\cos B$. Se utiliza cuando se conocen dos lados y el ángulo comprendido entre ellos, o los tres lados del triángulo. Asimismo, el área de la región triangular se calcula mediante el semiproducto de dos lados por el seno del ángulo comprendido $Área = \\frac{1}{2}ab\\sin C$.',
    'Ley de Cosenos: $c^2 = 7^2 + 5^2 - 2(7)(5)\\cos(60^\\circ) = 49 + 25 - 35 = 39 \\implies c = \\sqrt{39} \\approx 6.24\\text{ cm}$.',
    [
      { exercise: 'En un triángulo ABC, a = 12 cm, sen A = 0.6 y sen B = 0.4. Calcula la longitud del lado b.', hint: 'Aplica la proporción de la Ley de Senos: b = (a · sen B) / sen A.', answer: 'b = 8 cm' },
      { exercise: 'Calcula el lado c en un triángulo con a = 6, b = 10 y C = 120°, sabiendo que cos 120° = -0.5.', hint: 'c² = 6² + 10² - 2(6)(10)(-0.5) = 36 + 100 + 60.', answer: 'c = √196 = 14' },
      { exercise: 'Halla el área del triángulo cuyos lados miden 8 cm y 12 cm formando un ángulo de 45°.', hint: 'Aplica Área = (1/2) · 8 · 12 · sen(45°) = 48 · (√2 / 2).', answer: '24√2 cm²' }
    ],
    [
      'Ejemplo 1 (Cálculo de lado mediante Ley de Senos): En un triángulo $ABC$ se tiene $a = 8\\text{ cm}$, $\\angle A = 30^\\circ$ y $\\angle B = 45^\\circ$. Calcular la longitud del lado $b$. Paso 1: Identificamos que conocemos un lado y dos ángulos, por lo que aplicamos la Ley de Senos: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. Paso 2: Despejamos el lado $b$: $b = \\frac{a \\cdot \\sin B}{\\sin A}$. Paso 3: Sustituimos los valores notables: $b = \\frac{8 \\cdot \\sin(45^\\circ)}{\\sin(30^\\circ)} = \\frac{8 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 8\\sqrt{2}\\text{ cm} \\approx 11.31\\text{ cm}$. Solución: El lado $b$ mide exactamente $8\\sqrt{2}\\text{ cm}$.',
      'Ejemplo 2 (Cálculo de lado mediante Ley de Cosenos): Un triángulo posee lados $a = 5\\text{ cm}$, $b = 7\\text{ cm}$ y el ángulo comprendido $\\angle C = 60^\\circ$. Calcular el lado $c$. Paso 1: Como se conocen dos lados y el ángulo entre ellos, aplicamos la Ley de Cosenos: $c^2 = a^2 + b^2 - 2ab\\cos C$. Paso 2: Sustituimos los valores numéricos: $c^2 = 5^2 + 7^2 - 2(5)(7)\\cos(60^\\circ) = 25 + 49 - 70(0.5) = 74 - 35 = 39$. Paso 3: Extraemos raíz cuadrada positiva: $c = \\sqrt{39}\\text{ cm} \\approx 6.24\\text{ cm}$. Solución: La longitud del tercer lado es $\\sqrt{39}\\text{ cm}$.',
      'Ejemplo 3 (Cálculo de ángulo mediante Ley de Cosenos): Calcular el ángulo $\\angle A$ de un triángulo cuyos tres lados miden $a = 7\\text{ cm}$, $b = 5\\text{ cm}$ y $c = 8\\text{ cm}$. Paso 1: Despejamos el coseno en la Ley de Cosenos: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$. Paso 2: Sustituimos los lados: $\\cos A = \\frac{5^2 + 8^2 - 7^2}{2(5)(8)} = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$. Paso 3: Aplicamos la función inversa: $A = \\arccos(0.5) = 60^\\circ$. Solución: El ángulo interno $\\angle A$ mide exactamente $60^\\circ$.',
      'Ejemplo 4 (Área de triángulo con razón trigonométrica): Calcular el área de un triángulo con lados $a = 10\\text{ cm}$, $b = 14\\text{ cm}$ y ángulo intermedio $\\angle C = 30^\\circ$. Paso 1: Utilizamos la fórmula trigonométrica del área: $Área = \\frac{1}{2}ab\\sin C$. Paso 2: Sustituimos los valores: $Área = \\frac{1}{2}(10)(14)\\sin(30^\\circ)$. Paso 3: Como $\\sin(30^\\circ) = 0.5$, calculamos: $\\frac{1}{2}(140)(0.5) = 35\\text{ cm}^2$. Solución: El área de la región triangular es $35\\text{ cm}^2$.',
      'Ejemplo 5 (Caso ambiguo de la Ley de Senos): Resolver el caso ambiguo de la Ley de Senos con $a = 6$, $b = 10$ y $\\angle A = 30^\\circ$. Paso 1: Calculamos la altura de referencia $h = b \\cdot \\sin A = 10 \\cdot \\sin(30^\\circ) = 10(0.5) = 5$. Paso 2: Comparamos el lado $a$ con la altura $h$ y el lado $b$: como $h < a < b$ ($5 < 6 < 10$), existen exactamente dos triángulos posibles. Paso 3: Calculamos $\\sin B = \\frac{b \\sin A}{a} = \\frac{10(0.5)}{6} = \\frac{5}{6} \\approx 0.8333$, dando $B_1 \\approx 56.44^\\circ$ y $B_2 \\approx 123.56^\\circ$. Solución: Existen dos soluciones geométricas válidas.'
    ]
  ),
];

const u6Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u06-l01',
    '6.1',
    'Identidades trigonométricas fundamentales y fórmulas de ángulo doble',
    'Un grupo de estudiantes de bachillerato que analiza señales de corriente alterna en su taller técnico necesita simplificar la expresión trigonométrica compuesta $\\frac{\\sin(2\\theta)}{1 + \\cos(2\\theta)}$ para facilitar la programación de un osciloscopio digital. Asimismo, conociendo que $\\sin\\theta = \\frac{3}{5}$ y que el ángulo $\\theta$ pertenece al segundo cuadrante del plano cartesiano ($\\frac{\\pi}{2} < \\theta < \\pi$), se les pide calcular con total precisión analítica los valores exactos de $\\cos\\theta$, $\\sin(2\\theta)$ y $\\cos(2\\theta)$ sin recurrir a aproximaciones decimales de la calculadora.',
    'Para simplificar la expresión inicial $\\frac{\\sin(2\\theta)}{1 + \\cos(2\\theta)}$, sustituimos en el numerador la identidad del ángulo doble para el seno: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$. En el denominador, empleamos la identidad del ángulo doble para el coseno expresada en términos del coseno: $\\cos(2\\theta) = 2\\cos^2\\theta - 1$. Al sumar uno con el denominador, cancelamos los términos constantes: $1 + (2\\cos^2\\theta - 1) = 2\\cos^2\\theta$. Sustituyendo en la fracción obtenemos $\\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta}$. Cancelando el factor común dos y una potencia del coseno, la expresión se reduce limpiamente a $\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$. En segundo lugar, para evaluar los valores exactos con $\\sin\\theta = \\frac{3}{5}$ en el segundo cuadrante, aplicamos la identidad pitagórica fundamental $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - (\\frac{3}{5})^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$. Dado que en el segundo cuadrante el coseno es estrictamente negativo por la convención cartesiana de los signos, se tiene $\\cos\\theta = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}$. Calculamos el seno del ángulo doble: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = 2(\\frac{3}{5})(-\\frac{4}{5}) = -\\frac{24}{25}$. Por último, determinamos el coseno del ángulo doble: $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = (-\\frac{4}{5})^2 - (\\frac{3}{5})^2 = \\frac{16}{25} - \\frac{9}{25} = \\frac{7}{25}$, concluyendo con éxito la resolución analítica.',
    'Las identidades trigonométricas son igualdades algebraicas que se verifican de manera universal para cualquier valor admisible de la variable angular en el plano. En el currículo oficial de Educación Media del Ministerio de Educación, se estructuran en tres familias esenciales: primero, las **identidades pitagóricas** derivadas del Teorema de Pitágoras en el círculo trigonométrico unitario, destacando $\\sin^2\\theta + \\cos^2\\theta = 1$, junto con sus formas secundarias $1 + \\tan^2\\theta = \\sec^2\\theta$ y $1 + \\cot^2\\theta = \\csc^2\\theta$; segundo, las **identidades de cociente y recíprocas** que definen la tangente como cociente de seno sobre coseno, la cotangente como coseno sobre seno, la secante como el inverso multiplicativo del coseno y la cosecante como el inverso del seno; y tercero, las **fórmulas de adición y del ángulo doble** que permiten descomponer funciones compuestas: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ y $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$. Para resolver una ecuación trigonométrica se aplican estas relaciones para homogeneizar la expresión a una sola función en el intervalo fundamental $[0, 2\\pi)$.',
    'Ángulo doble: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = 24/25$.',
    [
      { exercise: 'Demuestra algebraicamente la identidad: (1 + tan² θ) · cos² θ = 1', hint: 'Sustituye 1 + tan² θ por sec² θ y recuerda que sec θ · cos θ = 1.', answer: '1' },
      { exercise: 'Resuelve la ecuación trigonométrica en el intervalo [0, 2π): 2 cos x - √3 = 0', hint: 'cos x = √3 / 2 en los cuadrantes I y IV.', answer: '{π/6, 11π/6}' },
      { exercise: 'Si sen θ = 0.8 y cos θ = 0.6, calcula sen(2θ) y cos(2θ).', hint: 'sen(2θ) = 2(0.8)(0.6) y cos(2θ) = 0.6² - 0.8².', answer: 'sen(2θ) = 0.96, cos(2θ) = -0.28' }
    ],
    [
      'Ejemplo 1 (Demostración de identidad pitagórica): Demostrar la identidad trigonométrica $\\frac{1 - \\cos^2 x}{\\sin x} = \\sin x$. Paso 1: Reconocemos la identidad pitagórica fundamental despejada en el numerador: $1 - \\cos^2 x = \\sin^2 x$. Paso 2: Sustituimos en la fracción algebraica: $\\frac{\\sin^2 x}{\\sin x}$. Paso 3: Cancelamos una potencia del seno entre numerador y denominador común. Solución: La expresión simplificada es exactamente $\\sin x$, completando la demostración.',
      'Ejemplo 2 (Ecuación lineal trigonométrica en la circunferencia): Resolver la ecuación trigonométrica $2\\sin x - 1 = 0$ en el intervalo $[0, 2\\pi)$. Paso 1: Despejamos la razón trigonométrica sumando uno y dividiendo entre dos: $2\\sin x = 1 \\implies \\sin x = \\frac{1}{2}$. Paso 2: Identificamos el ángulo del primer cuadrante cuyo seno es un medio, que es $x_1 = \\frac{\\pi}{6}$ ($30^\\circ$). Paso 3: Como el seno también es positivo en el segundo cuadrante, calculamos $x_2 = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ ($150^\\circ$). Solución: El conjunto solución es $\\{ \\frac{\\pi}{6}, \\frac{5\\pi}{6} \\}$.',
      'Ejemplo 3 (Cálculo de ángulo mediante suma de notables): Calcular el valor exacto de $\\cos(75^\\circ)$ aplicando la fórmula de la suma para el coseno. Paso 1: Descomponemos el ángulo en suma de dos ángulos notables: $75^\\circ = 45^\\circ + 30^\\circ$. Paso 2: Aplicamos la fórmula $\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B$: $\\cos(45^\\circ)\\cos(30^\\circ) - \\sin(45^\\circ)\\sin(30^\\circ)$. Paso 3: Sustituimos los valores exactos: $(\\frac{\\sqrt{2}}{2})(\\frac{\\sqrt{3}}{2}) - (\\frac{\\sqrt{2}}{2})(\\frac{1}{2}) = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$. Solución: $\\cos(75^\\circ) = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.',
      'Ejemplo 4 (Ecuación trigonométrica de tipo cuadrático): Resolver la ecuación cuadrática trigonométrica $2\\cos^2 x + \\cos x - 1 = 0$ en $[0, 2\\pi)$. Paso 1: Hacemos el cambio de variable auxiliar $u = \\cos x$, obteniendo la cuadrática $2u^2 + u - 1 = 0$. Paso 2: Factorizamos por el método de tijeras: $(2u - 1)(u + 1) = 0$, lo que genera $\\cos x = \\frac{1}{2}$ y $\\cos x = -1$. Paso 3: Para $\\cos x = \\frac{1}{2}$ los ángulos son $\\frac{\\pi}{3}$ y $\\frac{5\\pi}{3}$; para $\\cos x = -1$ el ángulo es $\\pi$. Solución: Las soluciones son $\\{ \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3} \\}$.',
      'Ejemplo 5 (Ángulo doble para la tangente): Calcular $\\tan(2\\theta)$ si $\\tan\\theta = \\frac{2}{3}$. Paso 1: Recordamos la fórmula del ángulo doble para la tangente: $\\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$. Paso 2: Sustituimos el valor numérico dado: $\\frac{2(2/3)}{1 - (2/3)^2} = \\frac{4/3}{1 - 4/9} = \\frac{4/3}{5/9}$. Paso 3: Efectuamos la división de fracciones multiplicando extremos y medios: $\\frac{4}{3} \\times \\frac{9}{5} = \\frac{36}{15} = \\frac{12}{5}$. Solución: El valor de $\\tan(2\\theta)$ es exactamente $\\frac{12}{5} = 2.4$.'
    ]
  ),
];

const u7Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u07-l01',
    '7.1',
    'Vectores en el plano real R², producto escalar y números complejos',
    'Un barco pesquero que navega cerca de la costa de Acajutla es impulsado simultáneamente por dos fuerzas vectoriales en el plano horizontal: la fuerza del motor principal representada por el vector $\\vec{u} = (6, 8)$ medido en kilonewtons, y la fuerza de la corriente marina y viento representada por el vector $\\vec{v} = (3, -4)$. Se requiere calcular analíticamente la magnitud de cada vector de fuerza, determinar el vector resultante de la fuerza total $\\vec{w} = \\vec{u} + \\vec{v}$, calcular el producto escalar $\\vec{u} \\cdot \\vec{v}$, averiguar el ángulo existente entre ambas direcciones de fuerza, y comprobar si existe ortogonalidad entre ellos.',
    'Para calcular la magnitud o norma euclidiana de un vector $\\vec{u} = (u_x, u_y)$, aplicamos el Teorema de Pitágoras en el plano cartesiano bidimensional: $\\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ kN}$. Para el segundo vector que modela la corriente marina $\\vec{v} = (3, -4)$, calculamos su magnitud euclidiana de forma completamente análoga: $\\|\\vec{v}\\| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ kN}$. El vector fuerza resultante total que experimenta la embarcación se obtiene sumando algebraicamente componente por componente: $\\vec{w} = \\vec{u} + \\vec{v} = (6 + 3, 8 + (-4)) = (9, 4)\\text{ kN}$. A continuación, calculamos el **producto escalar** o producto punto multiplicando las componentes homólogas y sumando los resultados intermedios: $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y = (6)(3) + (8)(-4) = 18 - 32 = -14$. Para hallar la medida angular $\\theta$ comprendida entre ambos vectores de fuerza, despejamos dicha incógnita de la definición geométrica del producto escalar $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta$: $\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\|\\|\\vec{v}\\|} = \\frac{-14}{(10)(5)} = \\frac{-14}{50} = -0.28$. Aplicando la función trigonométrica inversa del arco coseno obtenemos el ángulo exacto $\\theta = \\arccos(-0.28) \\approx 106.26^\\circ$. Como el producto escalar resultante es estrictamente negativo y distinto de cero ($\\vec{u} \\cdot \\vec{v} = -14 \\neq 0$), concluimos con total certeza que los vectores no son ortogonales ni perpendiculares, sino que forman un ángulo obtuso en la trayectoria real del barco pesquero.',
    'En el espacio vectorial bidimensional $\\mathbb{R}^2$, un vector geométrico $\\vec{u} = (u_x, u_y)$ posee magnitud euclidiana $\\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2}$ y dirección angular orientada respecto al semieje positivo de las abscisas dada por el ángulo $\\alpha = \\arctan(u_y / u_x)$. El **producto escalar** entre dos vectores en el plano se define tanto algebraica como geométricamente mediante las relaciones: $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$. Un criterio fundamental de la geometría analítica establece que dos vectores no nulos son **ortogonales o perpendiculares** si y solo si su producto escalar es idénticamente nulo: $\\vec{u} \\cdot \\vec{v} = 0 \\iff \\theta = 90^\\circ$. Asimismo, en el plano complejo de Argand, cada vector bidimensional $(a, b)$ se asocia biunívocamente con el número complejo $z = a + bi$, cuya representación trigonométrica o polar es $z = r(\\cos\\theta + i\\sin\\theta)$, lo que permite calcular potencias enteras de manera directa aplicando el **Teorema de De Moivre**: $z^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))$.',
    'Producto escalar ortogonal: si $\\vec{u} = (2, 3)$ y $\\vec{v} = (-3, 2)$, entonces $\\vec{u} \\cdot \\vec{v} = 2(-3) + 3(2) = 0$.',
    [
      { exercise: 'Calcula la magnitud euclidiana del vector v = (8, -15)', hint: '||v|| = √(8² + (-15)²) = √(64 + 225) = √289.', answer: '17' },
      { exercise: 'Si u = (3, k) y v = (4, -6), halla el valor de k para que u y v sean ortogonales.', hint: 'Plantea u · v = 0 <=> 3(4) + k(-6) = 0.', answer: 'k = 2' },
      { exercise: 'Multiplica el vector a = (3, -2) por el escalar c = -4', hint: 'Multiplica cada componente escalarmente: (-4 · 3, -4 · -2).', answer: '(-12, 8)' }
    ],
    [
      'Ejemplo 1 (Criterio de ortogonalidad entre vectores): Dados los vectores $\\vec{u} = (4, 3)$ y $\\vec{v} = (-3, 4)$, determinar si son ortogonales. Paso 1: Planteamos la fórmula del producto escalar analítico: $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y$. Paso 2: Multiplicamos las componentes respectivas: $(4)(-3) + (3)(4) = -12 + 12 = 0$. Paso 3: Interpretamos el resultado geométrico conforme al criterio de perpendicularidad. Solución: Como el producto escalar es cero ($\\vec{u} \\cdot \\vec{v} = 0$), los vectores son estrictamente perpendiculares (ortogonales).',
      'Ejemplo 2 (Normalización y cálculo de vector unitario): Hallar el vector unitario en la dirección del vector $\\vec{a} = (5, 12)$. Paso 1: Calculamos la norma euclidiana de $\\vec{a}$: $\\|\\vec{a}\\| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Paso 2: Dividimos cada componente del vector entre su norma: $\\vec{u}_a = \\frac{1}{\\|\\vec{a}\\|}\\vec{a} = (\\frac{5}{13}, \\frac{12}{13})$. Paso 3: Comprobamos que su norma resultante sea exactamente igual a uno: $\\sqrt{(5/13)^2 + (12/13)^2} = \\sqrt{25/169 + 144/169} = 1$. Solución: El vector unitario es $(\\frac{5}{13}, \\frac{12}{13})$.',
      'Ejemplo 3 (Conversión de número complejo a forma polar): Convertir el número complejo $z = 1 + \\sqrt{3}i$ a su forma polar o trigonométrica. Paso 1: Calculamos el módulo complejo: $r = |z| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$. Paso 2: Determinamos el argumento principal en el primer cuadrante: $\\tan\\theta = \\frac{\\sqrt{3}}{1} \\implies \\theta = \\frac{\\pi}{3} = 60^\\circ$. Paso 3: Expresamos en forma polar $r(\\cos\\theta + i\\sin\\theta)$. Solución: $z = 2(\\cos 60^\\circ + i\\sin 60^\\circ) = 2\\text{ cis}(60^\\circ)$.',
      'Ejemplo 4 (Potencias complejas mediante Teorema de De Moivre): Aplicar el Teorema de De Moivre para calcular $(1 + i)^4$. Paso 1: Expresamos el binomio $1 + i$ en su forma polar: $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$, y ángulo $\\theta = 45^\\circ$. Paso 2: Aplicamos la fórmula de De Moivre para exponente $n = 4$: $(\\sqrt{2})^4[\\cos(4 \\times 45^\\circ) + i\\sin(4 \\times 45^\\circ)]$. Paso 3: Operamos los valores angulares: $4[\\cos(180^\\circ) + i\\sin(180^\\circ)] = 4[-1 + i(0)] = -4$. Solución: El resultado exacto es $-4$.',
      'Ejemplo 5 (Cálculo del ángulo entre dos vectores en el plano): Calcular el ángulo entre los vectores $\\vec{p} = (2, 0)$ y $\\vec{q} = (2, 2)$. Paso 1: Calculamos el producto escalar: $\\vec{p} \\cdot \\vec{q} = (2)(2) + (0)(2) = 4$. Paso 2: Calculamos las normas de cada vector: $\\|\\vec{p}\\| = 2$, y $\\|\\vec{q}\\| = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$. Paso 3: Despejamos el coseno del ángulo: $\\cos\\theta = \\frac{4}{2(2\\sqrt{2})} = \\frac{4}{4\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\implies \\theta = 45^\\circ$. Solución: El ángulo entre los vectores es $45^\\circ$.'
    ]
  ),
];

const u8Lessons1B = [
  createPscerLesson(
    'mined-mat-1b-u08-l01',
    '8.1',
    'Medidas de posición no central: cuartiles, percentiles y diagramas de caja',
    'El Ministerio de Educación recopila los puntajes obtenidos en una prueba diagnóstica de matemática por una muestra de $15$ estudiantes de primer año de bachillerato: $42, 48, 55, 60, 62, 65, 70, 72, 75, 78, 80, 85, 88, 92, 98$. El equipo técnico de evaluación pedagógica necesita dividir la distribución en cuatro grupos homogéneos mediante el cálculo formal de los tres cuartiles ($Q_1, Q_2, Q_3$), determinar el rango intercuartílico ($IQR$), delimitar las barreras inferior y superior para identificar la posible presencia de valores atípicos (outliers), y representar la estructura general de los datos mediante un diagrama de caja y bigotes (box-plot).',
    'Los $n = 15$ datos se encuentran ya ordenados en sentido ascendente. Para calcular las medidas de posición no central procedemos paso a paso: 1. **Segundo Cuartil o Mediana ($Q_2$)**: Al ser $n = 15$ un número impar, la mediana es el dato central ubicado en la posición $\\frac{n+1}{2} = \\frac{16}{2} = 8$. Contando hasta la octava posición identificamos $Q_2 = 72$, el cual divide la muestra en dos mitades inferiores y superiores de siete datos cada una. 2. **Primer Cuartil ($Q_1$)**: Es la mediana de los siete datos inferiores $\\{42, 48, 55, 60, 62, 65, 70\\}$, ubicado en la cuarta posición: $Q_1 = 60$. Por ende, el $25\\%$ de los estudiantes obtuvo $60$ puntos o menos. 3. **Tercer Cuartil ($Q_3$)**: Es la mediana de los siete datos superiores $\\{75, 78, 80, 85, 88, 92, 98\\}$, situado en la cuarta posición del grupo superior: $Q_3 = 85$. Así, el $75\\%$ de los estudiantes obtuvo $85$ puntos o menos. 4. **Rango Intercuartílico ($IQR$)**: $IQR = Q_3 - Q_1 = 85 - 60 = 25$ puntos, el cual concentra el $50\\%$ central de las calificaciones. 5. **Detección de Valores Atípicos**: Calculamos las barreras de Tukey: barrera inferior $B_I = Q_1 - 1.5(IQR) = 60 - 1.5(25) = 22.5$; barrera superior $B_S = Q_3 + 1.5(IQR) = 85 + 37.5 = 122.5$. Como todos los puntajes están contenidos dentro de $[22.5, 122.5]$, no se registran valores atípicos en la muestra.',
    'Las **medidas de posición no central** dividen una distribución de datos cuantitativos ordenados en intervalos que contienen porcentajes idénticos de observaciones: los **Cuartiles ($Q_k$)** dividen los datos en cuatro partes iguales del veinticinco por ciento cada una ($25\\%, 50\\%, 75\\%$), coincidiendo exactamente el segundo cuartil $Q_2$ con la mediana muestral; los **Deciles ($D_k$)** dividen la serie estadística en diez partes iguales de diez por ciento; y los **Percentiles ($P_k$)** fragmentan la distribución en cien partes iguales de un por ciento. El **diagrama de caja y bigotes (Box-Plot)** resume de forma visual la dispersión y asimetría de la muestra a partir del conjunto de los cinco números de Tukey: el mínimo, el primer cuartil, la mediana, el tercer cuartil y el máximo. La longitud física de la caja representa el **rango intercuartílico** $IQR = Q_3 - Q_1$. Cualquier dato que se encuentre ubicado fuera del intervalo de tolerancia delimitado por las barreras $[Q_1 - 1.5\\,IQR, \\, Q_3 + 1.5\\,IQR]$ se clasifica formalmente como un **valor atípico (outlier)**.',
    'Rango intercuartílico: $IQR = Q_3 - Q_1 = 85 - 60 = 25$ puntos.',
    [
      { exercise: 'Calcula el rango intercuartílico (IQR) si Q1 = 28 y Q3 = 64.', hint: 'Aplica directamente la definición: IQR = Q3 - Q1.', answer: '36' },
      { exercise: 'Si IQR = 12 y Q3 = 50, ¿cuál es la barrera superior para detectar datos atípicos?', hint: 'Barrera superior = Q3 + 1.5(IQR).', answer: '68' },
      { exercise: '¿Qué medida de posición cuartilar equivale exactamente al percentil 75?', hint: 'Divide la escala del 100% en cuatro partes de 25%.', answer: 'El tercer cuartil Q3' }
    ],
    [
      'Ejemplo 1 (Cálculo directo de rango intercuartílico): Hallar el rango intercuartílico ($IQR$) en una distribución con $Q_1 = 35$ y $Q_3 = 70$. Paso 1: Recordamos la definición del rango intercuartílico: $IQR = Q_3 - Q_1$. Paso 2: Sustituimos los valores numéricos correspondientes: $IQR = 70 - 35 = 35$. Paso 3: Interpretamos que el cincuenta por ciento central de las observaciones tiene una dispersión de $35$ unidades. Solución: El $IQR$ es exactamente $35$.',
      'Ejemplo 2 (Detección rigurosa de dato atípico): Determinar si el valor $x = 105$ es atípico si $Q_1 = 40$ y $Q_3 = 60$. Paso 1: Calculamos el $IQR = 60 - 40 = 20$. Paso 2: Calculamos la barrera superior: $B_S = Q_3 + 1.5(IQR) = 60 + 1.5(20) = 60 + 30 = 90$. Paso 3: Comparamos el valor con la barrera: como $105 > 90$, el valor excede el límite superior. Solución: El valor $x = 105$ es formalmente un dato atípico (outlier).',
      'Ejemplo 3 (Mediana y percentil cincuenta): Calcular el percentil $50$ ($P_{50}$) de la serie de datos: $12, 15, 18, 22, 25, 30$. Paso 1: Reconocemos que el percentil 50 coincide exactamente con la mediana ($Q_2$). Paso 2: Al ser seis datos (número par), promediamos los dos valores centrales: $18$ y $22$. Paso 3: Calculamos la media aritmética: $\\frac{18 + 22}{2} = \\frac{40}{2} = 20$. Solución: El percentil 50 es $20$.',
      'Ejemplo 4 (Resumen de los cinco números de Tukey): Identificar los cinco números del diagrama de caja para el conjunto $\\{5, 9, 11, 14, 18, 20, 24\\}$. Paso 1: El mínimo es $5$ y el máximo es $24$. Paso 2: La mediana ($Q_2$) es el dato central de los siete números: $Q_2 = 14$. Paso 3: La mitad inferior es $\\{5, 9, 11\\}$ cuyo centro es $Q_1 = 9$; la mitad superior es $\\{18, 20, 24\\}$ con centro $Q_3 = 20$. Solución: Los cinco números son $\\{5, 9, 14, 20, 24\\}$.',
      'Ejemplo 5 (Interpretación de deciles en evaluación escolar): Interpretar el decil $7$ ($D_7$) en los resultados de una prueba de admisión. Paso 1: Recordamos que cada decil acumula un diez por ciento de la muestra ordenada. Paso 2: El decil 7 corresponde a $7 \\times 10\\% = 70\\%$ de los datos. Paso 3: Redactamos la interpretación pedagógica: el $70\\%$ de los aspirantes obtuvo un puntaje menor o igual al valor del $D_7$, y el $30\\%$ restante superó dicha calificación. Solución: $D_7$ delimita al 70% inferior del 30% superior.'
    ]
  ),
];

export const GRADE_10_DATA: GradeCurriculumData = {
  id: '1-bachillerato',
  name: '1° Bachillerato',
  cycle: 'Educación Media',
  cycleId: 'educacion-media',
  description: 'Currículo oficial ESMATE de primer año de bachillerato: números reales, polinomios, desigualdades, funciones reales, trigonometría, vectores y estadística.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de primer año de bachillerato general y técnico.',
      units: [
        createCurriculumUnit(
          'mined-mat-1b-u01',
          1,
          'Números reales',
          '1-bachillerato',
          1,
          'Raíces n-ésimas, exponentes racionales, racionalización con conjugados e intervalos reales.',
          ['Opera radicales y exponentes racionales', 'Racionaliza denominadores', 'Modela intervalos en R'],
          u1Lessons1B,
          u1Questions1B,
          true
        ),
        createCurriculumUnit('mined-mat-1b-u02', 2, 'Operaciones con polinomios y números complejos', '1-bachillerato', 1, 'División sintética, Teorema del Residuo y cuerpo de los complejos C.', ['Factoriza polinomios y complejos'], u2Lessons1B),
        createCurriculumUnit('mined-mat-1b-u03', 3, 'Desigualdades', '1-bachillerato', 1, 'Desigualdades lineales dobles y cuadráticas con cuadro de signos.', ['Resuelve inecuaciones con signos'], u3Lessons1B),
        createCurriculumUnit('mined-mat-1b-u04', 4, 'Funciones reales', '1-bachillerato', 1, 'Dominio, rango, traslaciones f(x)=a(x-h)²+k e inyectividad.', ['Grafica funciones transformadas'], u4Lessons1B),
        createCurriculumUnit('mined-mat-1b-u05', 5, 'Resolución de triángulos oblicuángulos', '1-bachillerato', 2, 'Leyes de Senos y Cosenos en problemas trigonométricos.', ['Aplica leyes trigonométricas'], u5Lessons1B),
        createCurriculumUnit('mined-mat-1b-u06', 6, 'Identidades y ecuaciones trigonométricas', '1-bachillerato', 2, 'Identidades pitagóricas, ángulo doble y ecuaciones angulares.', ['Resuelve ecuaciones trigonométricas'], u6Lessons1B),
        createCurriculumUnit('mined-mat-1b-u07', 7, 'Vectores y números complejos', '1-bachillerato', 2, 'Magnitud, producto escalar u·v, forma polar y De Moivre.', ['Opera vectores en el plano'], u7Lessons1B),
        createCurriculumUnit('mined-mat-1b-u08', 8, 'Estadística descriptiva', '1-bachillerato', 2, 'Muestreo, cuartiles, percentiles y diagramas de caja (box-plot).', ['Interpreta diagramas de caja'], u8Lessons1B),
      ],
    },
  ],
};
