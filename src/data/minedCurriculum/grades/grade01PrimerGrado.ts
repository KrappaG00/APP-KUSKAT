import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 1° Grado - Unidad 1
// Conozcamos los conceptos básicos y los números del 0 al 10
// -----------------------------------------------------------------
const u1Archetypes1G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const counts = [3, 4, 5, 6, 7];
      const n = counts[(v - 1) % counts.length];
      const items = ['mangos maduros', 'pelotas de fútbol', 'estrellas en la pizarra', 'cuadernos rayados', 'flores de izote'];
      const item = items[(v - 1) % items.length];
      return {
        statement: `Si en una canasta escolar hay $${n}$ ${item}, ¿cuál es el número cardinal que representa la cantidad total?`,
        options: [`${n}`, `${n + 1}`, `${n - 1}`, `${n + 2}`],
        correctAnswer: 'A',
        explanation: `Al contar uno a uno los elementos de la colección ($1, 2, \\dots, ${n}$), el último número nombrado representa el cardinal total, que es $${n}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const nums = [2, 5, 8, 4, 9];
      const n = nums[(v - 1) % nums.length];
      const words = ['dos', 'cinco', 'ocho', 'cuatro', 'nueve'];
      const word = words[(v - 1) % words.length];
      const wrong = ['tres', 'seis', 'siete', 'uno'];
      return {
        statement: `¿Cómo se escribe en palabras el número $${n}$ según el libro oficial de Números y Formas?`,
        options: [wrong[0], word, wrong[1], wrong[2]],
        correctAnswer: 'B',
        explanation: `El número cardinal $${n}$ se lee y escribe correctamente como "${word}".`,
      };
    },
  },
  {
    generate: (v) => {
      const places = ['primer', 'segundo', 'tercer', 'cuarto', 'quinto'];
      const ords = ['1.°', '2.°', '3.°', '4.°', '5.°'];
      const idx = (v - 1) % places.length;
      return {
        statement: `En una carrera deportiva escolar, el estudiante que llega en el ${places[idx]} lugar recibe el símbolo ordinal:`,
        options: ['10.°', '0.°', ords[idx], '6.°'],
        correctAnswer: 'C',
        explanation: `El orden de llegada se expresa mediante números ordinales. Para el ${places[idx]} puesto corresponde el símbolo $${ords[idx]}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const val = [4, 7, 6, 8, 5][(v - 1) % 5];
      const p1 = [2, 3, 2, 5, 1][(v - 1) % 5];
      const p2 = val - p1;
      return {
        statement: `En la composición del número $${val}$, si tenemos una parte que vale $${p1}$, ¿cuánto debe valer la otra parte?`,
        options: [`${p2 + 1}`, `${p2 - 1}`, `${p2 + 2}`, `${p2}`],
        correctAnswer: 'D',
        explanation: `La composición numérica establece que $${p1} + ${p2} = ${val}$. Por tanto, la parte faltante es $${p2}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const zeroScenarios = [
        'María tenía 3 jocotes y se comió los 3.',
        'En un árbol habían 5 pajaritos y volaron los 5.',
        'Carlos tenía 2 lápices y se le perdieron los 2.',
        'En un plato habían 4 pupusas y se repartieron las 4.',
        'En una rama habían 6 hojas y cayeron las 6.',
      ];
      return {
        statement: `${zeroScenarios[(v - 1) % zeroScenarios.length]} ¿Qué número representa la ausencia total de objetos restantes?`,
        options: ['0', '1', '10', 'No existe número'],
        correctAnswer: 'A',
        explanation: `El número $0$ (cero) representa la ausencia de elementos o cantidad nula en el sistema numérico decimal.`,
      };
    },
  },
  {
    generate: (v) => {
      const pairs = [
        { a: 3, b: 7, pos: 'menor que' },
        { a: 8, b: 2, pos: 'mayor que' },
        { a: 5, b: 9, pos: 'menor que' },
        { a: 6, b: 1, pos: 'mayor que' },
        { a: 4, b: 10, pos: 'menor que' },
      ];
      const p = pairs[(v - 1) % pairs.length];
      return {
        statement: `Al comparar las cantidades $${p.a}$ y $${p.b}$ en la recta numérica, se concluye correctamente que $${p.a}$ es:`,
        options: ['igual a', `${p.pos} ${p.b}`, 'el doble de', 'el triple de'],
        correctAnswer: 'B',
        explanation: `En la recta numérica de 1° Grado, los números a la derecha son mayores. Por ende, $${p.a}$ es ${p.pos} $${p.b}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v * 2) % 9 + 1;
      return {
        statement: `¿Cuál es el número que se encuentra inmediatamente después (sucesor) del número $${n}$?`,
        options: [`${n - 1}`, `${n + 2}`, `${n + 1}`, `${n}`],
        correctAnswer: 'C',
        explanation: `El número inmediatamente posterior a $${n}$ en la secuencia de números naturales es $${n} + 1 = ${n + 1}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = [3, 5, 7, 9, 4][(v - 1) % 5];
      return {
        statement: `¿Cuál es el número que se encuentra inmediatamente antes (antecesor) del número $${n}$?`,
        options: [`${n + 1}`, `${n}`, `${n + 2}`, `${n - 1}`],
        correctAnswer: 'D',
        explanation: `El número inmediatamente anterior a $${n}$ en la recta numérica es $${n} - 1 = ${n - 1}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const totals = [6, 7, 8, 9, 10];
      const tot = totals[(v - 1) % totals.length];
      return {
        statement: `Si se agrupan $${tot}$ tapitas de botella, ¿cuántas unidades exactas se tienen en dicha colección?`,
        options: [`${tot} unidades`, `${tot * 10} unidades`, '1 decena exacta', '0 unidades'],
        correctAnswer: 'A',
        explanation: `Cada tapita representa una unidad simple. Una colección de $${tot}$ tapitas equivale exactamente a $${tot}$ unidades.`,
      };
    },
  },
  {
    generate: (v) => {
      const positions = ['arriba', 'abajo', 'a la derecha', 'a la izquierda', 'en medio'];
      const pos = positions[(v - 1) % positions.length];
      return {
        statement: `En las nociones de orientación espacial de 1° Grado, si un libro está colocado "${pos}" de la mesa, esto indica su:`,
        options: ['peso', 'posición relativa', 'color primario', 'temperatura'],
        correctAnswer: 'B',
        explanation: `Términos como arriba, abajo, delante, detrás, derecha e izquierda definen la posición relativa de los objetos en el espacio.`,
      };
    },
  },
];

const u1Questions1G = generate50UnitQuestions(
  'mined-mat-1g-u01',
  '1-grado',
  '1G',
  1,
  'Conozcamos los conceptos básicos y los números del 0 al 10',
  'MINED Números y Formas 1° Grado Tomo 1',
  u1Archetypes1G
);

// Lecciones P-S-C-E-R oficiales profundizadas con contenido ESMATE y 5 ejemplos resueltos
const u1Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u01-l01',
    '1.1',
    'Conteo y escritura de los números del 1 al 5',
    'En el centro escolar rural de primer grado, la maestra Alicia coloca sobre una mesa varios materiales didácticos para que los niños aprendan a contar colecciones. Hay una regla larga de madera, dos borradores de pizarra grandes, tres tijeras de punta redonda, cuatro botes de témpera de colores y cinco cuadernos de cuadrícula. Si la maestra le pide a Mario que cuente en voz alta y escriba el símbolo numérico correspondiente para cada grupo de objetos escolares, ¿cómo debe realizar el conteo ordenado y qué número representa cada colección?',
    'Para contar de manera ordenada cada colección de objetos, Mario aplica el principio de correspondencia uno a uno, señalando con el dedo cada elemento y mencionando en voz alta la palabra numérica en orden ascendente sin omitir ni repetir ningún objeto. Primero, señala la regla de madera: pronuncia "uno" y escribe el trazo vertical del número 1. Segundo, señala los dos borradores: cuenta "uno, dos", determinando que el último número dicho representa el total de la colección y traza el número 2 con su curva superior y base horizontal. Tercero, cuenta las tijeras: "uno, dos, tres", trazando el número 3 con dos semicírculos unidos. Cuarto, toma los botes de témpera: "uno, dos, tres, cuatro", dibujando el número 4 formado por segmentos rectos. Quinto, cuenta los cinco cuadernos: "uno, dos, tres, cuatro, cinco", escribiendo el número 5 con su línea superior horizontal, trazo vertical corto y semicírculo inferior. Cada símbolo numérico resume fielmente la cantidad total de elementos contados.',
    'Los números naturales $1, 2, 3, 4$ y $5$ son símbolos cardinales que expresan la cantidad total de objetos pertenecientes a una colección discreta. Al contar, se asigna exactamente una palabra numérica a cada objeto mediante correspondencia biunívoca; el último término verbal pronunciado indica el valor cardinal total del grupo. En la cuadrícula escolar de primer grado, cada número se traza comenzando siempre desde el punto superior hacia abajo respetando la orientación espacial correcta. La secuencia ordenada de conteo ascendente se define formalmente como: $$1 < 2 < 3 < 4 < 5$$ Cada número sucesor tiene exactamente una unidad más que el anterior.',
    'Conteo cardinal de colecciones de 1 a 5 elementos.',
    [
      { exercise: 'Escribe el número cardinal que corresponde a una colección de 4 mangos maduros.', hint: 'Cuenta uno a uno señalando cada fruto.', answer: '4' },
      { exercise: 'Si en un nido hay 3 pajaritos y llega 1 más, ¿cuántos pajaritos hay en total?', hint: 'Avanza una unidad a partir de 3.', answer: '4' },
    ],
    [
      'Paso 1: Identificamos tres patitos nadando en una pequeña charca escolar y los señalamos uno a uno con el dedo sin saltar ninguno. Paso 2: Mencionamos en voz alta la secuencia ordenada: uno, dos y tres, verificando que el último número pronunciado sea tres. Solución: La cantidad total de patitos es 3 y se escribe mediante el trazo de dos curvas abiertas hacia la izquierda: 3 patitos.',
      'Paso 1: En una bandeja de frutas hay mangos maduros que Carlos desea registrar; cuenta primero un mango, luego otro y finalmente otro más hasta alcanzar cuatro mangos. Paso 2: Asociamos cada mango con un objeto contador o tapita plástica para asegurar que no falte ninguno. Solución: La colección contiene exactamente 4 mangos, representados con el número cardinal 4.',
      'Paso 1: Ana observa una sola bandera nacional salvadoreña ondeando en el patio principal de la escuela. Paso 2: Dado que no hay más banderas alrededor, el conteo comienza y termina inmediatamente con el primer elemento. Solución: La colección está formada por una sola unidad y se representa formalmente con el número 1, trazando una línea inclinada corta y una recta vertical descendente.',
      'Paso 1: Un grupo de estudiantes reúne lápices de color sobre su pupitre y va separando uno, dos, tres, cuatro y cinco lápices en fila ordenada. Paso 2: Comprobamos que después del cuatro sigue el cinco al agregar un lápiz más a la hilera. Solución: El conjunto completo reúne 5 lápices en total, correspondiendo al cardinal 5 trazado en la cuadrícula.',
      'Paso 1: En el estante de lectura hay dos libros de cuentos infantiles colocados juntos verticalmente. Paso 2: Contamos secuencialmente los ejemplares: el primer libro corresponde a uno y el siguiente a dos. Solución: Hay exactamente 2 libros de cuentos en el estante escolar, cuyo cardinal se escribe formalmente con la cifra 2.',
    ]
  ),
  createPscerLesson(
    'mined-mat-1g-u01-l02',
    '1.2',
    'El número 0 y su significado',
    'En la hora del recreo escolar, la niña Sofía lleva a su mesa una pequeña canastita de mimbre que contiene tres jocotes maduros para compartir con sus amigos. Primero, le regala un jocote a Lucas; luego, le entrega otro jocote a Valeria; y finalmente, ella misma se come el último jocote que quedaba. Al mirar el interior de la canastita, los niños notan que no queda ninguna fruta. ¿Qué número matemático se utiliza para representar la ausencia total de objetos en una colección vacía?',
    'Para comprender el significado matemático de esta situación, analizamos de manera sucesiva la disminución de elementos en la canastita escolar. Al inicio, tenemos una colección con 3 jocotes. Cuando Sofía entrega el primer jocote a Lucas, la cantidad disminuye en uno y quedan 2 jocotes. Al entregar el segundo jocote a Valeria, la colección vuelve a reducirse en una unidad y queda únicamente 1 jocote. Por último, cuando Sofía consume el tercer jocote, se retira la última fruta restante de la canasta. En este momento, no existe ningún objeto tangible que pueda ser señalado o contado con los números cardinales ordinarios del 1 al 9. En la matemática escolar formal del MINED, la colección que no tiene elementos se denomina conjunto vacío. La cantidad de elementos de un conjunto vacío no puede quedar sin registro cuantitativo, por lo que se representa de forma universal mediante el símbolo del número 0 (cero).',
    'El número $0$ (cero) es el cardinal que representa cuantitativamente la ausencia absoluta de elementos en una colección o conjunto vacío. En la recta numérica y en la secuencia de conteo escolar, el $0$ se ubica inmediatamente antes del número $1$, cumpliendo la relación fundamental de orden: $$0 < 1$$ El cero posee la propiedad de elemento neutro en la suma, ya que agregar cero objetos a una cantidad cualquiera no altera su valor total: $$a + 0 = a \\quad \\text{y} \\quad 0 + a = a$$ Su trazo es una curva cerrada ovalada que se inicia en la parte superior y gira en sentido contrario a las agujas del reloj.',
    'Significado cuantitativo del número 0 como colección vacía.',
    [
      { exercise: 'Si en un árbol habían 4 mangos y cayeron los 4, ¿cuántos mangos quedan en el árbol?', hint: 'Representa la ausencia total de frutos.', answer: '0 mangos' },
      { exercise: 'En una caja no hay lápices. ¿Qué número indica la cantidad de lápices?', hint: 'Conjunto vacío.', answer: '0' },
    ],
    [
      'Paso 1: En una rama de árbol cantaban dos pajaritos y de pronto ambos vuelan hacia el cielo al mismo tiempo. Paso 2: Observamos la rama y constatamos que ya no queda ningún pajarito posado sobre ella. Solución: La cantidad de pájaros en la rama es 0, expresando la ausencia total de aves tras haber volado.',
      'Paso 1: Diego tiene cuatro monedas de cinco centavos en su bolsillo escolar y las gasta todas comprando una merienda. Paso 2: Al revisar su bolsillo, verifica que no queda ninguna moneda restante para gastar. Solución: El bolsillo contiene exactamente 0 monedas, lo que representa un valor nulo en su presupuesto escolar.',
      'Paso 1: Sobre un plato blanco habían cinco galletas de avena y los niños consumen las cinco galletas durante la merienda. Paso 2: Constatamos que la superficie del plato quedó completamente limpia y desocupada. Solución: El número de galletas restantes sobre el plato es 0, indicando que el conjunto quedó vacío.',
      'Paso 1: Una caja de témperas escolares contiene cero tubos de pintura azul porque nunca fueron colocados en el empaque. Paso 2: Al abrir la caja vacía, confirmamos que la cuenta de pinturas azules no puede iniciarse en uno. Solución: La cantidad de témperas azules registradas en el inventario escolar es exactamente 0 unidades.',
      'Paso 1: En una pista de carreras infantiles compiten tres carritos de madera y todos cruzan la meta, dejando la pista de salida sin competidores. Paso 2: Verificamos cuántos carritos permanecen esperando en la línea de partida. Solución: Hay 0 carritos en la línea de salida, pues la totalidad de ellos avanzó hacia el final del circuito.',
    ]
  ),
  createPscerLesson(
    'mined-mat-1g-u01-l03',
    '1.3',
    'Composición y descomposición de números hasta 10',
    'Beatriz y su compañero Tomás están trabajando en el aula con fichas circulares bicolores y semillas de frijol para aprender cómo se forman los números en primer grado. La maestra les entrega exactamente 7 semillas de maíz y dos tapitas plásticas de color rojo y azul. La tarea consiste en colocar todas las semillas dentro de las dos tapitas, explorando distintas combinaciones posibles sin que sobre ninguna semilla afuera. ¿De cuántas maneras diferentes pueden Beatriz y Tomás descomponer y volver a componer el número 7?',
    'Para resolver este reto pedagógico de descomposición numérica, los estudiantes distribuyen gradualmente las 7 semillas entre la tapita roja y la tapita azul de forma sistemática y ordenada. Si colocan 6 semillas en la tapita roja, la tapita azul recibirá 1 semilla, formando la pareja 6 y 1. Si pasan una semilla más a la tapita azul, tendrán 5 semillas en la roja y 2 en la azul, formando la pareja 5 y 2. Continuando con este procedimiento ordenado, pueden obtener 4 y 3; 3 y 4; 2 y 5; o bien 1 y 6 semillas. En cada uno de estos casos, al reunir nuevamente las semillas de ambas tapitas en una sola mano y contarlas todas juntas, se comprueba que el total sigue siendo invariablemente 7. La descomposición consiste en separar una cantidad total en dos partes menores, mientras que la composición consiste en juntar dos partes conocidas para reconstruir la cantidad original de referencia.',
    'Cualquier número natural $n$ entre $2$ y $10$ puede descomponerse en dos partes enteras no nulas $a$ y $b$, de modo que su suma reproduce con exactitud el número original: $$a + b = n$$ Esta propiedad de reversibilidad matemática entre componer y descomponer es el fundamento directo para el cálculo mental, la memorización comprensiva de las tablas de adición y el dominio de la suma llevando en grados posteriores. Para descomponer un número $n$ se eligen dos cantidades que juntas sumen $n$; para componerlo, se unen dos partes complementarias: $$7 = 6 + 1 = 5 + 2 = 4 + 3$$',
    'Descomposición y composición aditiva de números hasta 10.',
    [
      { exercise: '¿Con qué número y 4 se compone exactamente el número 9?', hint: 'Determina cuánto le falta a 4 para completar 9.', answer: '5' },
      { exercise: 'Descompón el número 8 en dos partes iguales.', hint: 'Busca dos números idénticos que sumen 8.', answer: '4 y 4' },
    ],
    [
      'Paso 1: Deseamos descomponer el número 6 utilizando botones escolares en dos recipientes pequeños. Paso 2: Colocamos 4 botones en el primer recipiente y los 2 botones restantes en el segundo recipiente. Solución: El número 6 se descompone en las partes 4 y 2, cumpliendo la relación aditiva fundamental de que 4 y 2 forman 6.',
      'Paso 1: Se tienen dos grupos de tapitas plásticas: un grupo contiene 5 tapitas verdes y el otro tiene 3 tapitas amarillas. Paso 2: Unimos ambos grupos sobre la mesa escolar y contamos la colección total resultante. Solución: Al componer 5 y 3 obtenemos exactamente 8 tapitas en total, porque 5 más 3 es igual a 8.',
      'Paso 1: Para formar el número 10, un estudiante coloca 7 fichas en una tira de diez casillas. Paso 2: Cuenta cuántas casillas vacías quedan por llenar para completar la decena entera: observa 3 casillas libres. Solución: El número 10 se compone con las cantidades 7 y 3, demostrando que 7 y 3 completan 10.',
      'Paso 1: Si tenemos 9 crayones de cera y separaman en dos estuches, ponemos 8 crayones en el estuche grande. Paso 2: Identificamos cuántos crayones deben colocarse en el estuche pequeño para que no sobre ninguno. Solución: En el estuche pequeño se coloca 1 crayón, ya que 9 se descompone exactamente en 8 y 1.',
      'Paso 1: En una actividad de conteo rápido, la maestra muestra dos tarjetas con los números 2 y 3. Paso 2: Los alumnos juntan mentalmente ambas cantidades calculando el total reunido en una sola cifra. Solución: Las cantidades 2 y 3 componen el número cardinal 5, verificándose mediante la suma directa 2 más 3 igual a 5.',
    ]
  ),
  createPscerLesson(
    'mined-mat-1g-u01-l04',
    '1.4',
    'Los números ordinales hasta el 10.°',
    'En el patio cívico del centro escolar, diez estudiantes de primer grado participan con entusiasmo en una carrera deportiva de velocidad en línea recta. Al cruzar la cinta de llegada situada frente a la meta, los niños van pasando uno tras otro de forma sucesiva. La profesora encargada del registro necesita anotar en una tabla de mérito la posición exacta de llegada de cada estudiante, desde el corredor más rápido hasta el último que completó el recorrido. ¿Qué tipo de números debe utilizar la docente y cómo se escriben y leen del 1.° al 10.°?',
    'Para registrar de manera rigurosa la posición o el orden en que los diez corredores llegaron a la meta escolar, no se utilizan los números cardinales comunes (que indican cuántos son en total), sino los números ordinales, los cuales determinan el lugar relativo que ocupa un elemento dentro de una serie ordenada. La profesora asigna al estudiante que llegó primero el símbolo 1.° y lo nombra "primero". Al segundo corredor le corresponde el símbolo 2.° ("segundo"); al siguiente, 3.° ("tercero"); luego 4.° ("cuarto"); 5.° ("quinto"); 6.° ("sexto"); 7.° ("séptimo"); 8.° ("octavo"); 9.° ("noveno"); y al último corredor de la serie de diez le asigna el 10.° ("décimo"). Para escribir un número ordinal en nuestro idioma, se traza el número arábigo seguido de un pequeño círculo volado en la parte superior derecha, lo cual transforma inmediatamente la cantidad en un indicador de orden jerárquico.',
    'Los números ordinales indican la posición relativa, el turno o el ordenamiento secuencial de los elementos en una colección linealmente ordenada. A diferencia de los números cardinales que responden a la pregunta "¿cuántos hay?", los ordinales responden a la pregunta "¿en qué lugar está?". La serie completa de números ordinales del primero al décimo se formaliza como: $$1.^{\\circ}, 2.^{\\circ}, 3.^{\\circ}, 4.^{\\circ}, 5.^{\\circ}, 6.^{\\circ}, 7.^{\\circ}, 8.^{\\circ}, 9.^{\\circ}, 10.^{\\circ}$$ En la lectura, cada ordinal tiene un nombre propio en masculino y femenino (primero/primera, segundo/segunda, etc.) y se emplea para designar grados escolares, fechas ceremoniales, posiciones de llegada y pisos de un edificio.',
    'Uso de números ordinales del 1.° al 10.° en secuencias escolares.',
    [
      { exercise: '¿Qué símbolo ordinal corresponde exactamente al quinto lugar en una competencia?', hint: 'Escribe el número 5 con su círculo volado.', answer: '5.°' },
      { exercise: 'En la semana escolar (lunes a viernes), ¿qué posición ordinal ocupa el miércoles?', hint: 'Lunes es 1.°, martes es 2.°...', answer: '3.°' },
    ],
    [
      'Paso 1: En una fila ordenada de estudiantes frente al lavamanos, identificamos a Carlos ubicado en la tercera posición contando desde el frente. Paso 2: Escribimos el dígito 3 y le añadimos en la esquina superior derecha el símbolo de círculo volado. Solución: La posición de Carlos es 3.° y se lee formalmente como tercer lugar o tercero.',
      'Paso 1: Al clasificar los tomos de una enciclopedia escolar colocados verticalmente en un librero, tomamos el libro situado en el lugar número cinco. Paso 2: Transformamos el número cardinal 5 en su correspondiente símbolo ordinal de ubicación. Solución: El libro corresponde al tomo 5.° de la colección y se nombra correctamente como quinto tomo.',
      'Paso 1: En un certamen de dibujo escolar, el jurado calificador anuncia que María obtuvo el puesto número uno por su destacada pintura. Paso 2: Representamos con simbología ordinal oficial el máximo puesto de honor en la competencia. Solución: A María le corresponde el 1.° lugar, que se pronuncia formalmente como primer lugar o primero.',
      'Paso 1: Un edificio escolar tiene varios niveles y el aula de música se encuentra ubicada en el nivel número dos. Paso 2: Asignamos el ordinal que describe la altura del nivel dentro de la estructura física del centro educativo. Solución: El aula de música se ubica en el 2.° piso, lo que se lee textualmente como segundo piso.',
      'Paso 1: Diez ciclistas infantiles completan una vuelta al circuito escolar y el último atleta cruza la línea en la posición número diez. Paso 2: Anotamos la llegada empleando la notación ordinal estándar de primer ciclo. Solución: El ciclista finalizó en el 10.° puesto, el cual se lee y nombra oficialmente como décimo lugar.',
    ]
  ),
];

// Unidad 2 a 8 con lecciones P-S-C-E-R oficiales
const u2Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u02-l01',
    '2.1',
    'Sentido de la suma horizontal hasta 10',
    'En el huerto escolar de primer grado, Carlos recolecta 3 tomates maduros en una pequeña canasta plástica por la mañana. Más tarde, su compañera Elena le entrega 2 tomates adicionales que acaba de cosechar en otra era del huerto. Los dos niños deciden juntar todos los tomates en una sola canasta grande para llevarlos al comedor escolar. ¿Cuántos tomates tienen en total y cómo se plantea esta situación mediante una operación matemática horizontal utilizando los símbolos oficiales de suma e igualdad?',
    'Para encontrar la cantidad total de tomates, los estudiantes realizan la acción física de reunir o juntar dos grupos distintos en una única colección común. El primer grupo está compuesto por 3 tomates y el segundo grupo está formado por 2 tomates. Al colocar todos los tomates juntos sobre una mesa y contarlos uno a uno de corrido, la secuencia numérica avanza: uno, dos, tres (del primer grupo), cuatro y cinco (del segundo grupo agregado). La cantidad final obtenida es de 5 tomates. En el lenguaje formal de la matemática, la acción de juntar, reunir o agregar colecciones se expresa mediante la operación de adición o suma. Escribimos primero el número 3, luego colocamos el signo más ($+$) que representa la unión de las cantidades, después el número 2 que corresponde a la cantidad agregada, y finalmente el signo igual ($=$) seguido del resultado 5: $3 + 2 = 5$.',
    'La suma o adición es la operación matemática que modela las situaciones de agrupar, reunir o agregar dos o más cantidades para obtener un total integrado. En la notación horizontal de primer grado, se utilizan el signo más ($+$) para indicar la adición y el signo igual ($=$) para señalar el resultado o suma total: $$\\text{Sumando} + \\text{Sumando} = \\text{Total} \\implies a + b = c$$ La suma cumple la propiedad conmutativa en el conjunto de los números naturales, lo que significa que el orden en que se sumen las partes no altera el resultado final: $$a + b = b + a \\quad (3 + 2 = 2 + 3 = 5)$$ Cuando uno de los sumandos es cero, el total es igual al otro sumando: $a + 0 = a$.',
    'Sentido aditivo horizontal de juntar y agregar cantidades hasta 10.',
    [
      { exercise: 'Calcula el resultado de la siguiente suma horizontal: 5 + 3', hint: 'Parte de 5 y cuenta 3 unidades en avance.', answer: '8' },
      { exercise: 'En una mesa hay 4 cuadernos y se colocan 0 cuadernos más. ¿Cuántos hay?', hint: 'El cero no altera la cantidad.', answer: '4' },
    ],
    [
      'Paso 1: Lucas tiene 4 chibolas verdes en una bolsa y su tía le regala 3 chibolas rojas más. Paso 2: Planteamos la operación horizontal sumando ambas cantidades: 4 más 3, y contamos en avance: 5, 6, 7. Solución: Planteamiento $4 + 3 = 7$. Lucas tiene ahora 7 chibolas en total.',
      'Paso 1: En una mesa de trabajo hay 5 lápices negros y se colocan a la par 2 lápices de color rojo. Paso 2: Escribimos el planteamiento horizontal uniendo los términos mediante el signo más: $5 + 2$. Solución: Efectuamos el conteo conjunto $5 + 2 = 7$, obteniendo exactamente 7 lápices reunidos.',
      'Paso 1: Sofía tiene 6 semillas de frijol en un plato y no agrega ninguna semilla adicional ($0$ semillas). Paso 2: Aplicamos la propiedad de la suma con cero donde el número original no sufre modificación. Solución: Planteamiento $6 + 0 = 6$. Sofía conserva exactamente las mismas 6 semillas en el plato.',
      'Paso 1: En un árbol cantan 2 golondrinas por la mañana y al mediodía llegan 6 golondrinas más a cantar juntas. Paso 2: Escribimos la adición horizontal $2 + 6$ y calculamos sumando el número mayor primero: $6 + 2$. Solución: Planteamiento $2 + 6 = 8$. En el árbol cantan ahora 8 golondrinas en total.',
      'Paso 1: En un estante hay 1 cuaderno de dibujo y el maestro coloca 4 cuadernos de cuadrícula en el mismo estante. Paso 2: Formulamos la expresión aditiva horizontal $1 + 4$ y contamos en avance cuatro unidades a partir de uno. Solución: Planteamiento $1 + 4 = 5$. Hay en total 5 cuadernos organizados en el estante escolar.',
    ]
  ),
];

const u3Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u03-l01',
    '3.1',
    'Conozcamos la decena y los números del 11 al 20',
    'En una jornada de trabajo cooperativo en el aula de primer grado, el docente reparte tapitas plásticas recolectadas para reciclaje. Diego reúne sobre su pupitre exactamente 10 tapitas plásticas y las amarra juntas con una liga elástica formando un atado cerrado. A la par de este atado, coloca 4 tapitas sueltas más que le sobraron en la mesa. La maestra pregunta a la clase: ¿qué nombre recibe el grupo formado por diez unidades completas, qué número representan el atado y las tapitas sueltas, y cómo se ubican en la tabla de valor posicional?',
    'Para resolver esta interrogante, analizamos la estructura del sistema de numeración decimal base diez. Cuando se agrupan exactamente 10 unidades individuales de cualquier objeto, se forma una nueva unidad de orden superior llamada decena. En el caso de Diego, el atado amarrado con la liga contiene 10 tapitas, lo que equivale exactamente a 1 decena. Las 4 tapitas que quedaron afuera sin amarrar representan 4 unidades sueltas. Al combinar 1 decena (10) con las 4 unidades (4), formamos el número catorce (14), que matemáticamente se expresa como la suma $10 + 4 = 14$. En la tabla de valor posicional, colocamos la cifra 1 en la columna de las Decenas (D) a la izquierda, y la cifra 4 en la columna de las Unidades (U) a la derecha. De esta manera, cada número entre el 11 y el 19 se compone de una decena completa más una cantidad determinada de unidades sueltas.',
    'Una **decena** es una agrupación elemental constituida por exactamente $10$ unidades individuales: $$1\\text{ Decena (D)} = 10\\text{ Unidades (U)}$$ En el sistema decimal, los números del $11$ al $19$ se forman al sumar a una decena ($10$) un número de unidades del $1$ al $9$, según la regla estructural: $$10 + u = 1u \\quad (\\text{por ejemplo: } 10 + 4 = 14)$$ El número $20$ representa exactamente dos decenas completas ($10 + 10 = 20$), lo cual se escribe con un $2$ en la casilla de las decenas y un $0$ en la casilla de las unidades ($2\\text{ D}, 0\\text{ U}$).',
    'Estructura de la decena y formación posicional del 11 al 20.',
    [
      { exercise: '¿Cuántas decenas y cuántas unidades contiene el número 17?', hint: 'Separa el grupo de 10 de las unidades sueltas.', answer: '1 decena y 7 unidades' },
      { exercise: 'Si tenemos 1 decena de lápices y agregamos 5 lápices sueltos, ¿qué número formamos?', hint: 'Suma 10 + 5.', answer: '15' },
    ],
    [
      'Paso 1: Se tiene 1 atado de diez pajillas plásticas y 3 pajillas sueltas colocadas a la par sobre la mesa. Paso 2: Reconocemos que el atado vale 10 y sumamos las tres unidades sueltas: 10 más 3. Solución: 1 decena y 3 unidades componen el número 13, que se lee y escribe como trece.',
      'Paso 1: En una caja hay 17 lápices de grafito organizados en una decena cerrada y varias unidades sueltas. Paso 2: Descomponemos el número 17 separando el grupo de diez del remanente de unidades individuales. Solución: El número 17 está formado exactamente por 1 decena (10 unidades) y 7 unidades sueltas: $17 = 10 + 7$.',
      'Paso 1: Un estudiante coloca 1 decena de fichas de madera y agrega 6 fichas individuales en la cuadrícula posicional. Paso 2: Escribimos el dígito 1 en la columna D y el dígito 6 en la columna U. Solución: La combinación de 1 D y 6 U forma el número 16, nombrado oficialmente como dieciséis.',
      'Paso 1: Disponemos de 1 decena de botones escolares y no añadimos ningún botón suelto adicional ($0$ unidades). Paso 2: Representamos la cantidad en la tabla posicional con 1 en las decenas y 0 en las unidades. Solución: Se forma el número cardinal 10, compuesto por 1 decena completa y 0 unidades individuales.',
      'Paso 1: Para formar el número 20, unimos dos paquetes que contienen diez semillas de frijol cada uno. Paso 2: Sumamos las dos decenas completas comprobando que no queda ninguna semilla libre por fuera. Solución: Dos decenas completas equivalen a 20 unidades ($10 + 10 = 20$), representadas posicionalmente como 2 D y 0 U.',
    ]
  ),
];

const u4Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u04-l01',
    '4.1',
    'Sumas y restas sin llevar hasta 20',
    'En la panadería del barrio escolar, doña Rosa hornea deliciosas semitas de piña para la merienda. En una canasta grande tiene guardadas 12 semitas frescas. Al mediodía, saca de la bandeja del horno 5 semitas más y las agrega a la canasta. Por la tarde, de las semitas que tiene reunidas, don Pedro compra 4 semitas para su familia. La maestra de primer grado plantea a sus estudiantes: ¿cómo calculamos el total de semitas al agregarlas y cuántas semitas quedan después de la venta, realizando las operaciones sin llevar ni prestar?',
    'Para resolver estas operaciones horizontales de suma y resta con números hasta 20 sin llevar ni prestar, aplicamos la estrategia didáctica de descomponer los números en decenas y unidades. Para la suma $12 + 5$, descomponemos el número 12 en 10 (1 decena) y 2 (unidades). Mantenemos separada la decena de 10 y sumamos únicamente las unidades sueltas: 2 + 5 = 7. Luego, unimos la decena intacta con el nuevo resultado de las unidades: 10 + 7 = 17 semitas en total. Para la resta $17 - 4$, procedemos de manera análoga: descomponemos el minuendo 17 en 10 y 7 unidades. Como debemos restar 4 unidades, operamos directamente sobre las unidades sueltas: 7 - 4 = 3 unidades restantes. Finalmente, volvemos a unir la decena que no sufrió ninguna modificación con las 3 unidades sobrantes: 10 + 3 = 13 semitas. En ambos casos, el cálculo se efectúa con rapidez y precisión mental sin descomponer la decena.',
    'Para sumar o restar un número de una cifra con un número de dos cifras entre $11$ y $19$ sin llevar ni prestar, se descompone el número de dos cifras en $10$ y sus unidades ($U$). El cálculo se realiza operando exclusivamente las unidades sueltas y agregando al final la decena: $$\\text{Suma: } (10 + u_1) + u_2 = 10 + (u_1 + u_2)$$ $$\\text{Resta: } (10 + u_1) - u_2 = 10 + (u_1 - u_2) \\quad \\text{con } u_1 \\ge u_2$$ Este procedimiento fortalece el sentido numérico posicional antes de aprender las técnicas algorítmicas verticales de llevada y préstamo.',
    'Cálculo horizontal de sumas y restas sin transformar la decena.',
    [
      { exercise: 'Calcula horizontalmente la suma: 14 + 3', hint: 'Suma las unidades 4 + 3 y une la decena.', answer: '17' },
      { exercise: 'Calcula horizontalmente la resta: 18 - 5', hint: 'Resta las unidades 8 - 5 y une la decena.', answer: '13' },
    ],
    [
      'Paso 1: Para calcular la suma horizontal $13 + 4$, descomponemos el número 13 en 10 y 3 unidades. Paso 2: Sumamos las unidades sueltas: 3 más 4 es igual a 7; luego añadimos la decena: 10 más 7. Solución: La suma calculada es $13 + 4 = 17$, conservando la decena intacta y sumando unidades.',
      'Paso 1: Para resolver la resta horizontal $16 - 2$, descomponemos el número 16 en 10 y 6 unidades. Paso 2: Restamos las unidades sueltas entre sí: 6 menos 2 es igual a 4; unimos la decena: 10 más 4. Solución: El resultado obtenido es $16 - 2 = 14$, manteniendo constante la decena inicial.',
      'Paso 1: En una biblioteca escolar hay 11 libros de aventuras y se reciben 6 libros nuevos del mismo tema. Paso 2: Sumamos las unidades: 1 más 6 igual a 7, y agregamos la decena existente: 10 más 7. Solución: En total hay $11 + 6 = 17$ libros de aventuras registrados en la biblioteca.',
      'Paso 1: Un agricultor cosecha 18 piñas maduras en su huerto y regala 5 piñas a sus vecinos de la comunidad. Paso 2: Restamos las unidades directamente: 8 menos 5 es igual a 3, conservando la decena intacta: 10 más 3. Solución: Al agricultor le quedan exactamente $18 - 5 = 13$ piñas maduras en su canasto.',
      'Paso 1: Un alumno desea calcular mentalmente la suma $15 + 3$ durante una práctica rápida de cálculo. Paso 2: Separa mentalmente la decena 10 y calcula en las unidades: 5 más 3 igual a 8; luego une 10 y 8. Solución: El valor de la operación es $15 + 3 = 18$, resuelto de forma directa y ordenada.',
    ]
  ),
];

const u5Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u05-l01',
    '5.1',
    'Conozcamos los números hasta 100 y la centena',
    'En la cooperativa escolar de útiles de primer grado, los estudiantes recolectan lápices de grafito donados para equipar las aulas de clase. Cada vez que juntan 10 lápices, los atan con una cinta formando un paquete cerrado de una decena. Al finalizar la jornada de clasificación y empaque, los niños han logrado armar exactamente 10 paquetes idénticos de 10 lápices cada uno sobre el escritorio del profesor. ¿Cuántos lápices han logrado reunir en total y qué nuevo orden de numeración se forma al juntar diez decenas completas?',
    'Para determinar el total de lápices recolectados sin tener que desarmar los paquetes y contarlos uno a uno, aplicamos la estrategia didáctica de conteo de 10 en 10. Comenzamos con el primer paquete: 10 lápices (1 decena). Al agregar el segundo paquete tenemos 20 (2 decenas); con el tercero, 30 (3 decenas); con el cuarto, 40 (4 decenas); con el quinto, 50 (5 decenas); con el sexto, 60 (6 decenas); con el séptimo, 70 (7 decenas); con el octavo, 80 (8 decenas); con el noveno, 90 (9 decenas); y al incorporar el décimo paquete llegamos a 100 lápices en total. En el sistema de numeración decimal salvadoreño, una colección formada por exactamente 10 decenas completas recibe el nombre oficial de centena. La centena representa 100 unidades y se escribe simbólicamente mediante el número 100, el cual requiere por primera vez tres cifras posicionales: 1 centena, 0 decenas y 0 unidades.',
    'Diez decenas completas forman una **centena**, que equivale a cien unidades individuales y se denota simbólicamente como: $$10\\text{ Decenas (D)} = 1\\text{ Centena (C)} = 100\\text{ Unidades (U)}$$ La secuencia de decenas completas se lee y escribe como: $10, 20, 30, 40, 50, 60, 70, 80, 90$ y $100$. El número $100$ es el primer número natural de tres cifras posicionales (Centenas, Decenas, Unidades: CDU). En la recta numérica, el $100$ se ubica inmediatamente a la derecha del número $99$: $$99 + 1 = 100$$',
    'Conteo de 10 en 10 hasta 100 y formación de la centena.',
    [
      { exercise: '¿Cuántas decenas completas hay en el número 80?', hint: 'Cuenta de 10 en 10.', answer: '8 decenas' },
      { exercise: '¿Qué número se forma con 6 decenas y 4 unidades?', hint: '6 D = 60; suma 4.', answer: '64' },
    ],
    [
      'Paso 1: Si contamos paquetes de cuadernos de diez en diez, tenemos 4 paquetes completos de diez cuadernos cada uno. Paso 2: Multiplicamos o contamos sucesivamente: diez, veinte, treinta y cuarenta cuadernos en total. Solución: 4 decenas completas equivalen exactamente a 40 unidades, escribiéndose con un 4 en D y 0 en U.',
      'Paso 1: En una bodega hay 7 cajas pequeñas que contienen 10 borradores escolares cada una. Paso 2: Efectuamos el conteo por decenas consecutivas: 10, 20, 30, 40, 50, 60 y 70 borradores. Solución: Las 7 decenas de borradores corresponden a 70 unidades totales almacenadas en la bodega escolar.',
      'Paso 1: Un comerciante tiene 90 naranjas empacadas en 9 bolsas de 10 unidades y compra 1 bolsa más de 10 naranjas. Paso 2: Sumamos una decena más a las nueve decenas previas: $90 + 10 = 100$. Solución: Se completan 10 decenas, lo que forma exactamente 1 centena ($100$ naranjas en total).',
      'Paso 1: Deseamos saber qué número se encuentra inmediatamente antes del número 100 en la recta numérica. Paso 2: Restamos una unidad a la centena: $100 - 1$, obteniendo el número antecesor de dos cifras. Solución: El antecesor inmediato de 100 es 99, formado por 9 decenas y 9 unidades individuales.',
      'Paso 1: En un juego de fichas numéricas, se solicita componer el número 53 utilizando decenas y unidades. Paso 2: Identificamos 5 grupos de diez fichas (50) más 3 fichas sueltas individuales ($50 + 3$). Solución: El número 53 está compuesto por 5 decenas y 3 unidades en la tabla posicional.',
    ]
  ),
];

const u6Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u06-l01',
    '6.1',
    'Comparación directa e indirecta de longitudes',
    'En la clase de educación artística de primer grado, la maestra entrega a Sofía una cinta de tela de color azul y a Mateo una cinta de tela de color verde para adornar el periódico mural. Ambas cintas se encuentran enrolladas sobre la mesa de trabajo. Mateo afirma que su cinta verde es más larga a simple vista, mientras que Sofía sostiene que la suya es de mayor longitud. ¿Qué procedimiento práctico y riguroso deben seguir los estudiantes para comparar de forma directa e indirecta la longitud de ambas cintas y determinar con certeza cuál es más larga?',
    'Para comparar de manera objetiva y precisa la longitud de dos objetos flexibles como las cintas de tela, no basta con una estimación visual aproximada. El procedimiento matemático correcto exige realizar primero una comparación directa. Para ello, los estudiantes deben desenrollar completamente ambas cintas sobre una superficie plana y horizontal, como el piso del salón o una mesa larga. El paso fundamental e indispensable consiste en alinear con exactitud uno de los extremos de ambas cintas sobre una misma línea recta de partida común de referencia. Una vez emparejado ese primer extremo, se extienden ambas cintas en línea recta sin estirarlas de más ni dejar dobleces. La cinta cuyo extremo opuesto sobresalga o sobrepase al otro será inequívocamente la cinta más larga. Si las cintas no pudieran moverse de lugar, se aplicaría una comparación indirecta utilizando un objeto intermediario como unidad no estandarizada (por ejemplo, clips, lápices o cuartas de mano) para contar cuántas unidades mide cada una.',
    'La **longitud** es la magnitud geométrica que mide la distancia comprendida entre dos puntos o los extremos de un cuerpo. Para comparar longitudes de manera directa entre dos objetos, es condición obligatoria alinear uno de sus extremos sobre una misma línea base de referencia común; el objeto cuyo extremo final sobrepase al otro tiene mayor longitud (es más largo). En la comparación indirecta, se utiliza un objeto intermediario o unidad patrón no estandarizada (clips, pasos, cuartas) para medir ambas longitudes y comparar sus valores numéricos: $$\\text{Longitud } A > \\text{Longitud } B \\iff \\text{Unidades}(A) > \\text{Unidades}(B)$$',
    'Comparación directa alineando bases e indirecta con unidades arbitrarias.',
    [
      { exercise: 'Si la cinta roja mide 7 clips y la cinta azul mide 9 clips, ¿cuál cinta es más larga?', hint: 'Compara las cantidades 7 y 9.', answer: 'La cinta azul' },
      { exercise: '¿Qué condición indispensable se requiere para comparar dos objetos de forma directa?', hint: 'Punto de partida.', answer: 'Alinear un extremo en una línea común de referencia' },
    ],
    [
      'Paso 1: Para comparar un lápiz de grafito nuevo y un lápiz usado, los colocamos parados verticalmente sobre una mesa plana. Paso 2: Verificamos que las bases de ambos lápices descansen exactamente en la superficie de la mesa y observamos sus puntas. Solución: El lápiz nuevo sobrepasa la altura del lápiz usado; por consiguiente, el lápiz nuevo es más largo.',
      'Paso 1: Medimos el ancho de un pupitre escolar utilizando clips metálicos idénticos colocados en fila de extremo a extremo. Paso 2: Contamos la cantidad de clips utilizados sin dejar espacios vacíos: se colocan 12 clips continuos. Solución: La longitud del pupitre mide exactamente 12 clips de ancho según la unidad de medida no estandarizada.',
      'Paso 1: Dos estudiantes comparan la distancia entre sus escritorios midiendo con pasos normales y uniformes en el aula. Paso 2: Carlos cuenta 8 pasos de distancia y Luis confirma el mismo recorrido con 8 pasos equivalentes. Solución: La longitud que separa ambos escritorios es de 8 pasos, permitiendo comparar distancias dentro del salón.',
      'Paso 1: Se desea comparar dos cuerdas para saltar, pero están fijas a diferentes árboles del patio escolar. Paso 2: Empleamos una vara de madera como intermediario: la cuerda A mide 3 varas y la cuerda B mide 2 varas. Solución: La cuerda A es más larga que la cuerda B porque 3 varas es mayor que 2 varas.',
      'Paso 1: Para comparar el largo de dos borradores de goma, alineamos sus esquinas izquierdas con el borde de una regla. Paso 2: Observamos cuál de los dos borradores alcanza una marca más lejana en el borde derecho. Solución: El borrador que llega más lejos en la marca derecha tiene mayor longitud que el otro borrador examinado.',
    ]
  ),
];

const u7Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u07-l01',
    '7.1',
    'Identificación de figuras planas y líneas rectas',
    'Durante una clase de exploración matemática en los alrededores de la escuela, los alumnos de primer grado observan distintos objetos cotidianos del entorno escolar: la puerta principal del salón, una señal de tránsito redonda colocada en la esquina de la calle, una escuadra escolar de madera y un mosaico del piso. El docente les pide que pasen el dedo por el borde de cada objeto y clasifiquen las figuras geométricas que descubren según sus lados sean rectos o curvos. ¿Qué figuras planas elementales se identifican y cuáles son sus propiedades fundamentales?',
    'Para identificar y clasificar las figuras planas presentes en los objetos observados, analizamos la forma de su contorno o frontera exterior. Cuando los alumnos recorren con su dedo el borde del mosaico del piso, notan que tiene cuatro lados perfectamente rectos y de igual longitud, formando un cuadrado con cuatro esquinas rectas llamadas vértices. Al tocar el marco de la puerta del salón, descubren también cuatro lados rectos con cuatro esquinas rectas, pero con dos lados largos iguales y dos lados cortos iguales, lo cual corresponde a un rectángulo. Al pasar la mano por la escuadra de madera, perciben tres lados rectos que se unen en tres esquinas, identificando con claridad la figura del triángulo. Finalmente, al seguir el contorno de la señal de tránsito, notan que el borde es una línea curva cerrada y suave sin esquinas ni lados rectos, reconociendo la figura del círculo. De esta forma, las figuras se clasifican en poligonales con lados rectos (cuadrado, rectángulo, triángulo) y curvas cerradas (círculo).',
    'Las **figuras planas** son regiones cerradas delimitadas por líneas en una superficie bidimensional. Se clasifican según la naturaleza de sus bordes o lados:\n1. **Triángulo**: figura geométrica delimitada por $3$ lados rectos y $3$ esquinas o vértices.\n2. **Cuadrilátero**: figura delimitada por $4$ lados rectos y $4$ vértices; incluye al **cuadrado** (con $4$ lados de igual medida) y al **rectángulo** (con lados opuestos iguales dos a dos).\n3. **Círculo**: figura plana delimitada por una línea curva cerrada donde todos los puntos del borde equidistan de su centro.\nUna línea recta no tiene curvas ni dobleces, mientras que una línea curva cambia de dirección constantemente.',
    'Identificación geométrica de figuras planas poligonales y circulares.',
    [
      { exercise: '¿Cuántos lados rectos y cuántos vértices tiene un triángulo?', hint: 'Cuenta esquinas y bordes rectos.', answer: '3 lados rectos y 3 vértices' },
      { exercise: '¿Qué figura geométrica plana tiene 4 lados iguales y 4 esquinas rectas?', hint: 'Cuadrilátero regular.', answer: 'El cuadrado' },
    ],
    [
      'Paso 1: Examinamos la cara frontal de una caja de fósforos escolar y recorremos sus bordes con el dedo. Paso 2: Contamos 4 lados rectos y verificamos que dos lados opuestos son más largos que los otros dos. Solución: La cara frontal de la caja de fósforos tiene forma de rectángulo con cuatro esquinas rectas.',
      'Paso 1: Observamos una moneda de un dólar colocada plana sobre la superficie del pupitre del estudiante. Paso 2: Recorremos su orilla exterior comprobando que no posee esquinas puntiagudas ni segmentos rectos. Solución: La moneda tiene forma de círculo, delimitada por una línea curva cerrada y uniforme.',
      'Paso 1: En una hoja de papel doblamos una esquina para construir una cometa o barrilete de tres esquinas. Paso 2: Contamos sus elementos principales: posee 3 bordes rectos unidos en 3 vértices puntiagudos. Solución: La figura plana obtenida es un triángulo, caracterizado por tener exactamente tres lados rectos.',
      'Paso 1: Un mosaico de cerámica del piso del aula tiene todos sus cuatro bordes de igual tamaño. Paso 2: Medimos o comparamos sus lados rectos y confirmamos que sus cuatro esquinas son perfectamente iguales. Solución: El mosaico tiene forma de cuadrado, siendo un cuadrilátero regular de cuatro lados iguales.',
      'Paso 1: Trazamos en la pizarra una línea con una regla y luego otra línea con el borde de un vaso redondo. Paso 2: Comparamos el trazo con regla (no cambia de dirección) y el trazo con vaso (se dobla continuamente). Solución: El trazo con regla es una línea recta, mientras que el trazo con vaso es una línea curva.',
    ]
  ),
];

const u8Lessons1G = [
  createPscerLesson(
    'mined-mat-1g-u08-l01',
    '8.1',
    'Lectura del reloj analógico y monedas de curso legal',
    'En la pared frontal del salón de primer grado hay un reloj analógico de manecillas circulares que marca los tiempos escolares del día a día. A la entrada de clases por la mañana, la aguja corta apunta directamente al número 7 y la aguja larga apunta verticalmente hacia arriba al número 12. Más tarde, a la hora del recreo y del refrigerio escolar, la niña Andrea desea comprar una rica fruta de temporada que cuesta veinticinco centavos de dólar y revisa cuidadosamente las monedas que lleva guardadas en su monedero de tela: encuentra dos monedas de diez centavos y una moneda de cinco centavos. La maestra les pide a los estudiantes que respondan dos preguntas fundamentales: ¿qué hora exacta marca el reloj analógico y cómo puede comprobar Andrea si su dinero reunido es suficiente para pagar la fruta?',
    'Para resolver la primera parte del problema relacionada con la medición social del tiempo, examinamos minuciosamente el funcionamiento coordinado de las dos manecillas del reloj analógico escolar. La aguja corta se llama horario y señala las horas transcurridas del día; al estar dirigida exactamente hacia el número 7 nos indica que estamos en la hora siete. La aguja larga se llama minutero y señala los minutos; cuando el minutero apunta verticalmente hacia el número 12, significa que no ha transcurrido ningún minuto adicional de la nueva hora, lo que corresponde a una hora exacta en punto. Por lo tanto, el reloj analógico marca exactamente las 7:00 en punto de la mañana. Para resolver la segunda parte sobre las monedas de curso legal en El Salvador, calculamos el valor monetario total sumando de forma ordenada las denominaciones fraccionarias en centavos de dólar: Andrea tiene dos monedas de diez centavos, que al sumarse dan veinte centavos; luego agrega una moneda de cinco centavos, completando exactamente veinticinco centavos de dólar. Dado que veinticinco centavos es precisamente el costo de la fruta escolar, comprobamos con certeza que su dinero es suficiente y exacto para pagar sin requerir vuelto del vendedor.',
    'El reloj analógico o de manecillas es un instrumento para medir el paso del tiempo mediante dos agujas giratorias principales: la aguja más corta y gruesa es el **horario**, encargada de indicar las horas completas; y la aguja más larga y delgada es el **minutero**, encargada de indicar los minutos transcurridos. Cuando la aguja larga se ubica exactamente sobre el número doce, el reloj marca siempre una hora en punto: $$\\text{Hora en punto} = n:00$$ En la República de El Salvador, la moneda de curso legal es el dólar de los Estados Unidos de América. Cada dólar completo se divide en cien partes iguales denominadas centavos. En las transacciones comerciales cotidianas de la tienda escolar y los mercados se utilizan monedas de un centavo, cinco centavos, diez centavos y veinticinco centavos, así como la moneda de un dólar completo.',
    'Lectura de la hora en punto en reloj analógico y monedas fraccionarias de dólar.',
    [
      { exercise: '¿Qué hora marca el reloj analógico si el horario apunta al 9 y el minutero al 12?', hint: 'Minutero en 12 indica hora en punto.', answer: 'Las 9:00 en punto' },
      { exercise: '¿Cuántas monedas de 25 centavos equivalen a una moneda de 1 dólar?', hint: 'Suma 25 centavos cuatro veces consecutivas.', answer: '4 monedas de 25 centavos' },
    ],
    [
      'Paso 1: Observamos con atención un reloj de pared escolar donde la aguja corta apunta hacia el número 8 y la aguja larga apunta directamente al 12. Paso 2: Identificamos que la aguja corta señala las ocho horas y el minutero en el 12 representa cero minutos adicionales. Solución: El reloj marca exactamente las 8:00 en punto de la mañana, hora formal de trabajo.',
      'Paso 1: Carlos tiene en su bolsillo una moneda de veinticinco centavos de dólar y desea cambiarla en la tienda escolar por monedas de cinco centavos. Paso 2: Calculamos cuántas monedas de cinco centavos completan la cantidad: cinco, diez, quince, veinte y veinticinco centavos. Solución: Una moneda de veinticinco centavos equivale exactamente a cinco monedas de cinco centavos de dólar.',
      'Paso 1: En una alcancía escolar hay una moneda de diez centavos y cuatro monedas de un centavo cada una que Sofía ahorró. Paso 2: Sumamos de manera ordenada los valores monetarios: diez centavos más cuatro centavos es igual a catorce centavos de dólar. Solución: El dinero total acumulado en la alcancía es de catorce centavos de dólar exactos.',
      'Paso 1: En la sesión de la tarde, la aguja corta del reloj escolar apunta al número 3 y la aguja larga apunta al número 12. Paso 2: Verificamos que la aguja corta define la hora y la larga en el doce indica que no hay minutos sueltos. Solución: El reloj analógico marca exactamente las 3:00 en punto de la tarde.',
      'Paso 1: Mateo reúne diez monedas de diez centavos de dólar obtenidas de su ahorro escolar para comprar un cuaderno nuevo. Paso 2: Contamos de diez en diez hasta alcanzar la cifra de cien centavos: diez, veinte, treinta hasta cien centavos. Solución: Diez monedas de diez centavos equivalen a cien centavos, lo que forma exactamente un dólar de curso legal.',
    ]
  ),
];

export const GRADE_01_DATA: GradeCurriculumData = {
  id: '1-grado',
  name: '1° Grado',
  cycle: 'Primer Ciclo de Básica',
  cycleId: 'primer-ciclo',
  description: 'Fundamentos de matemática escolar oficial bajo el programa Números y Formas (Tomo 1 y Tomo 2).',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (Números y Formas)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial MINED de primer grado enfocado en números cardinales, ordinales, sumas, restas y figuras.',
      units: [
        createCurriculumUnit(
          'mined-mat-1g-u01',
          1,
          'Conozcamos los conceptos básicos y los números del 0 al 10',
          '1-grado',
          1,
          'Orientación espacial, conteo, números cardinales del 0 al 10, números ordinales y descomposición.',
          ['Identifica cardinales del 0 al 10', 'Escribe números ordinales', 'Compone números'],
          u1Lessons1G,
          u1Questions1G,
          true
        ),
        createCurriculumUnit(
          'mined-mat-1g-u02',
          2,
          'Sumemos y restemos de forma horizontal con números del 0 al 10',
          '1-grado',
          1,
          'Sentido de la adición y sustracción horizontal, uso del cero.',
          ['Calcula sumas y restas horizontales hasta 10'],
          u2Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u03',
          3,
          'Conozcamos los números del 11 al 20 y valor posicional',
          '1-grado',
          1,
          'Conteo del 11 al 20, decenas y unidades, recta numérica.',
          ['Reconoce la decena como 10 unidades'],
          u3Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u04',
          4,
          'Sumemos y restemos de forma horizontal con números hasta el 20',
          '1-grado',
          1,
          'Adición sin llevar y sustracción sin prestar con minuendos hasta 19.',
          ['Resuelve operaciones horizontales hasta 20'],
          u4Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u05',
          5,
          'Conozcamos los números hasta 100',
          '1-grado',
          2,
          'Agrupación de 10 en 10, decenas completas y la centena (100).',
          ['Cuenta de 10 en 10 hasta 100'],
          u5Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u06',
          6,
          'Aprendamos a medir longitudes y comparar',
          '1-grado',
          2,
          'Comparación directa e indirecta de objetos y medidas no estandarizadas.',
          ['Compara longitudes alineando extremos'],
          u6Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u07',
          7,
          'Identifiquemos figuras y líneas',
          '1-grado',
          2,
          'Líneas rectas y curvas, superficies planas y figuras geométricas básicas.',
          ['Distingue círculos, triángulos y rectángulos'],
          u7Lessons1G
        ),
        createCurriculumUnit(
          'mined-mat-1g-u08',
          8,
          'Conozcamos el tiempo y la moneda',
          '1-grado',
          2,
          'El reloj analógico, horas en punto, monedas de centavos y billete de 1 dólar.',
          ['Reconoce denominaciones de dólar y hora en punto'],
          u8Lessons1G
        ),
      ],
    },
  ],
};
