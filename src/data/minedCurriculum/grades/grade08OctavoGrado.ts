import { GradeCurriculumData } from '../types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
} from './gradeHelpers';

// -----------------------------------------------------------------
// BANCO DE 50 PREGUNTAS: 8° Grado - Unidad 1
// Operaciones algebraicas
// -----------------------------------------------------------------
const u1Archetypes8G: QuestionArchetype[] = [
  {
    generate: (v) => {
      const g = (v % 5) + 2;
      return {
        statement: `¿Cuál es el grado absoluto del monomio algebraico $5x^${g}y^3$?`,
        options: [`$${g + 3}$`, `$${g}$`, `$${g + 4}$`, `$${g + 5}$`],
        correctAnswer: 'A',
        explanation: `El grado absoluto de un monomio es la suma de los exponentes de todas sus variables: $${g} + 3 = ${g + 3}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 5) + 2;
      const b = (v % 4) + 3;
      return {
        statement: `Al reducir los términos semejantes $${a}x^2 + ${b}x^2 - x^2$, se obtiene exactamente:`,
        options: [
          `$${a + b}x^4$`,
          `$${a + b - 1}x^2$`,
          `$${a + b - 1}x^4$`,
          `$${a + b}x^2$`,
        ],
        correctAnswer: 'B',
        explanation: `Para reducir términos semejantes se suman algebraicamente sus coeficientes y se conserva la parte literal común: $(${a} + ${b} - 1)x^2 = ${a + b - 1}x^2$.`,
      };
    },
  },
  {
    generate: (v) => {
      const m = (v % 4) + 2;
      return {
        statement: `Al multiplicar el monomio $${m}x$ por el binomio $(2x - 5)$, el producto resultante es:`,
        options: [
          `$${m * 2}x - ${m * 5}$`,
          `$${m * 2}x^2 + ${m * 5}x$`,
          `$${m * 2}x^2 - ${m * 5}x$`,
          `$${m * 2}x^2 - 5$`,
        ],
        correctAnswer: 'C',
        explanation: `Aplicando la propiedad distributiva: $${m}x(2x - 5) = (${m} \\times 2)x^2 - (${m} \\times 5)x = ${m * 2}x^2 - ${m * 5}x$.`,
      };
    },
  },
  {
    generate: (v) => {
      const c = (v % 6) + 1;
      return {
        statement: `¿Cuál es el valor numérico del polinomio $P(x) = 2x^2 - 3x + ${c}$ evaluado en $x = 2$?`,
        options: [
          `$${2 * 4 - 6 + c + 4}$`,
          `$${2 * 4 - 6 + c - 2}$`,
          `$${2 * 4 - 6 + c + 1}$`,
          `$${2 * 4 - 6 + c}$`,
        ],
        correctAnswer: 'D',
        explanation: `Sustituimos $x = 2$: $P(2) = 2(2)^2 - 3(2) + ${c} = 2(4) - 6 + ${c} = 8 - 6 + ${c} = ${2 + c}$.`,
      };
    },
  },
  {
    generate: (v) => {
      const n = (v % 5) + 2;
      return {
        statement: `Al sumar los polinomios $(3x^2 + 5x) + (${n}x^2 - 2x)$, la expresión simplificada es:`,
        options: [
          `$${3 + n}x^2 + 3x$`,
          `$${3 + n}x^4 + 3x^2$`,
          `$${3 + n}x^2 - 3x$`,
          `$3x^2 + ${n}x$`,
        ],
        correctAnswer: 'A',
        explanation: `Agrupando términos semejantes: $(3 + ${n})x^2 + (5 - 2)x = ${3 + n}x^2 + 3x$.`,
      };
    },
  },
  {
    generate: (v) => {
      const a = (v % 4) + 1;
      return {
        statement: `Al restar $(5x - 3) - (${a}x + 4)$, el resultado formal es:`,
        options: [
          `$${5 - a}x + 1$`,
          `$${5 - a}x - 7$`,
          `$${5 + a}x - 7$`,
          `$${5 - a}x - 1$`,
        ],
        correctAnswer: 'B',
        explanation: `Cambiamos los signos del sustraendo: $5x - 3 - ${a}x - 4 = (5 - ${a})x - 7 = ${5 - a}x - 7$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cómo se clasifica formalmente la expresión algebraica $3x^3 - 2x + 7$ por su número de términos?`,
        options: ['Monomio', 'Binomio', 'Trinomio', 'Polinomio de cuatro términos'],
        correctAnswer: 'C',
        explanation: `Una expresión algebraica compuesta por exactamente tres términos no semejantes se denomina **trinomio**.`,
      };
    },
  },
  {
    generate: (v) => {
      const k = (v % 5) + 2;
      return {
        statement: `Al dividir el monomio $12x^5$ entre el monomio $${k * 2}x^2$, se obtiene:`,
        options: [
          `$${Math.floor(12 / (k * 2))}x^7$`,
          `$${Math.floor(12 / (k * 2))}x^2$`,
          `$12x^3$`,
          `$\\frac{${12}}{${k * 2}}x^3$`,
        ],
        correctAnswer: 'D',
        explanation: `Se dividen los coeficientes y se restan los exponentes de bases iguales: $\\frac{12x^5}{${k * 2}x^2} = \\frac{12}{${k * 2}}x^{5-2} = \\frac{12}{${k * 2}}x^3$.`,
      };
    },
  },
  {
    generate: (v) => {
      return {
        statement: `¿Cuál es el término independiente en el polinomio $P(x) = 4x^3 - 5x^2 + 8x - 9$?`,
        options: ['$-9$', '$4$', '$8$', '$-5$'],
        correctAnswer: 'A',
        explanation: `El término independiente es aquel que no contiene variable (grado cero respecto a $x$), en este caso $-9$.`,
      };
    },
  },
  {
    generate: (v) => {
      const val = (v % 4) + 1;
      return {
        statement: `Al multiplicar los monomios $(-3x^2)(-${val}x^3)$, el producto correcto es:`,
        options: [
          `$-${3 * val}x^5$`,
          `$+${3 * val}x^5$`,
          `$+${3 * val}x^6$`,
          `$-${3 * val}x^6$`,
        ],
        correctAnswer: 'B',
        explanation: `Aplicando ley de signos $(-)(-) = (+)$ y producto de potencias de igual base $x^2 \\cdot x^3 = x^{2+3} = x^5$: $+${3 * val}x^5$.`,
      };
    },
  },
];

const u1Questions8G = generate50UnitQuestions(
  'mined-mat-8g-u01',
  '8-grado',
  '8G',
  1,
  'Operaciones algebraicas',
  'MINED ESMATE 8° Grado',
  u1Archetypes8G
);

const u1Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u01-l01',
    '1.1',
    'Monomios, polinomios y grado absoluto',
    'En una fábrica textil se modela el costo de producción mediante la expresión 4x²y³ + 2xy - 7. ¿Cuáles son los monomios que la componen y cuál es el grado del polinomio?',
    'La expresión tiene tres términos (trinomio): 4x²y³, 2xy y -7. El grado del primer término es 2+3=5. El segundo es 1+1=2. El término independiente es grado 0. El grado del polinomio es el mayor grado de sus términos, es decir, 5.',
    'Un **polinomio** es una suma finita de monomios. El **grado de un monomio** es la suma de los exponentes de sus variables. El **grado del polinomio** es el mayor de los grados de los monomios que lo conforman: $$\\operatorname{Grado}(P) = \\max(\\operatorname{Grado}(T_i))$$',
    'En el polinomio $3x^4 - 5x^2 + 8$, el grado es $4$ y el coeficiente principal es $3$.',
    [{ exercise: '¿Cuál es el grado absoluto de -6a³b⁴?', hint: 'Suma 3 + 4.', answer: 'Grado 7' }]
  ),
  createPscerLesson(
    'mined-mat-8g-u01-l02',
    '1.2',
    'Multiplicación de monomio por polinomio y binomio por binomio',
    'Calcula el área del rectángulo cuya base mide (2x + 3) y su altura mide (x + 4).',
    'Multiplicamos ambos binomios aplicando la propiedad distributiva: (2x + 3)(x + 4) = 2x(x) + 2x(4) + 3(x) + 3(4) = 2x² + 8x + 3x + 12 = 2x² + 11x + 12.',
    'Para multiplicar dos polinomios se multiplica cada término del primer polinomio por todos los términos del segundo polinomio y luego se reducen los términos semejantes: $$(a + b)(c + d) = ac + ad + bc + bd$$',
    '$(x + 5)(x + 2) = x^2 + 2x + 5x + 10 = x^2 + 7x + 10$.',
    [{ exercise: 'Desarrolla: (x + 3)(x - 2)', hint: 'x² - 2x + 3x - 6.', answer: 'x² + x - 6' }]
  ),
];

const u2Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u02-l01',
    '2.1',
    'Sistemas de ecuaciones 2x2 por el método de reducción',
    'En una pupusería de Olocuilta, 2 pupusas y 3 refrescos cuestan $4.00, mientras que 3 pupusas y 2 refrescos cuestan $4.50. ¿Cuánto cuesta cada pupusa y cada refresco?',
    'Planteamos: (1) 2x + 3y = 4.00; (2) 3x + 2y = 4.50. Multiplicamos (1) por 3 y (2) por -2 para eliminar x: 6x + 9y = 12; -6x - 4y = -9. Sumamos: 5y = 3, luego y = 0.60. Sustituimos y en (1): 2x + 1.80 = 4.00 => 2x = 2.20 => x = 1.10. Cada pupusa cuesta $1.10 y cada refresco $0.60.',
    'Un **sistema de ecuaciones lineales $2 \\times 2$** tiene solución única si las rectas se intersectan en un único punto $(x, y)$. El método de reducción suma o resta las ecuaciones tras multiplicar por factores convenientes para anular una incógnita.',
    'Verificación: $2(1.10) + 3(0.60) = 2.20 + 1.80 = 4.00$.',
    [{ exercise: 'Resuelve por reducción: x + y = 10; x - y = 4', hint: 'Suma ambas ecuaciones.', answer: 'x = 7, y = 3' }]
  ),
];

const u3Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u03-l01',
    '3.1',
    'Función lineal y forma pendiente-intercepto y = mx + b',
    'Un tanque de agua en Santa Ana tiene 20 galones al inicio y se llena a razón constante de 5 galones por minuto. ¿Cuál es la ecuación lineal que describe el volumen de agua en el minuto x?',
    'Al minuto 0 (intercepto b): 20 galones. Cada minuto que pasa aumenta 5 galones (razón de cambio o pendiente m = 5). La ecuación es: y = 5x + 20.',
    'La **función lineal** tiene la forma pendiente-intercepto: $$y = mx + b$$ donde $m = \\frac{y_2 - y_1}{x_2 - x_1}$ es la **pendiente** (inclinación) y $b$ es el **intercepto** con el eje $y$ en el punto $(0, b)$.',
    'Si $m > 0$ la recta es creciente; si $m < 0$ es decreciente; si $m = 0$ es una recta horizontal.',
    [{ exercise: 'Encuentra la pendiente de la recta que pasa por (1, 3) y (3, 7).', hint: 'm = (7 - 3)/(3 - 1).', answer: 'm = 2' }]
  ),
];

const u4Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u04-l01',
    '4.1',
    'Ángulos alternos internos y suma de ángulos de un polígono',
    'Si dos rectas paralelas son cortadas por una secante y uno de los ángulos mide 65°, ¿cuánto mide su ángulo alterno interno?',
    'Por el teorema fundamental de rectas paralelas cortadas por una secante, los ángulos alternos internos tienen exactamente la misma medida. Mide 65°.',
    'Para dos rectas paralelas cortadas por una secante: $$\\text{Alternos internos son congruentes: } \\alpha = \\beta$$ La suma de los ángulos externos de cualquier polígono convexo es siempre igual a $360^\\circ$.',
    'En un octágono ($n=8$), la suma de ángulos internos es $S_i = (8 - 2) \\times 180^\\circ = 1,080^\\circ$.',
    [{ exercise: '¿Cuánto suman los ángulos externos de un decágono?', hint: 'Siempre constante.', answer: '360°' }]
  ),
];

const u5Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u05-l01',
    '5.1',
    'Criterios de congruencia de triángulos (LLL, LAL, ALA)',
    'Dos triángulos ABC y DEF tienen AB = DE = 8 cm, BC = EF = 6 cm y el ángulo comprendido entre ellos ∠B = ∠E = 50°. ¿Son congruentes?',
    'Cumplen con tener dos lados y el ángulo comprendido de igual medida. Por el criterio LAL (Lado-Ángulo-Lado), los triángulos son congruentes: △ABC ≅ △DEF.',
    'Dos triángulos son **congruentes** ($\\triangle ABC \\cong \\triangle DEF$) si tienen la misma forma y tamaño exactos. Criterios de congruencia: **LLL** (tres lados iguales), **LAL** (dos lados y ángulo intermedio), **ALA** (dos ángulos y lado adyacente).',
    'Al ser congruentes, todos sus lados y ángulos homólogos son congruentes.',
    [{ exercise: 'Si tres lados de un triángulo miden igual que los tres lados de otro, ¿qué criterio aplica?', hint: 'Tres lados.', answer: 'Criterio LLL' }]
  ),
];

const u6Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u06-l01',
    '6.1',
    'Propiedades del triángulo isósceles y paralelogramos',
    'En un triángulo isósceles ABC con AB = AC, el ángulo en el vértice A mide 40°. ¿Cuánto miden los ángulos en la base B y C?',
    'Los ángulos de la base de un triángulo isósceles son iguales: ∠B = ∠C. La suma de los tres es 180°: 40° + 2∠B = 180° => 2∠B = 140° => ∠B = ∠C = 70°.',
    'En un **triángulo isósceles**, a lados de igual medida se oponen ángulos de igual medida. En todo **paralelogramo**, los lados opuestos son congruentes y las diagonales se cortan mutuamente en su punto medio.',
    'En un rombo, las diagonales son perpendiculares y se cortan en su punto medio.',
    [{ exercise: 'En un paralelogramo ABCD, si un ángulo mide 60°, ¿cuánto mide el consecutivo?', hint: 'Suman 180°.', answer: '120°' }]
  ),
];

const u7Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u07-l01',
    '7.1',
    'Volumen de conos, cilindros y esferas',
    'Un silo cilíndrico en Usulután tiene un radio de 3 metros y una altura de 10 metros. ¿Cuál es su volumen en metros cúbicos? (Usa pi ≈ 3.1416)',
    'Aplicamos la fórmula V = pi x r² x h: V = 3.1416 x 3² x 10 = 3.1416 x 9 x 10 = 282.744 m³.',
    'Fórmulas de volúmenes de cuerpos de revolución oficiales ESMATE: $$V_{\\text{cilindro}} = \\pi r^2 h, \\qquad V_{\\text{cono}} = \\frac{1}{3}\\pi r^2 h, \\qquad V_{\\text{esfera}} = \\frac{4}{3}\\pi r^3$$',
    'El volumen de un cono con la misma base y altura de un cilindro es exactamente un tercio ($1/3$) del volumen del cilindro.',
    [{ exercise: 'Calcula el volumen de un cono si el cilindro equivalente tiene volumen 90 cm³.', hint: 'Divide entre 3.', answer: '30 cm³' }]
  ),
];

const u8Lessons8G = [
  createPscerLesson(
    'mined-mat-8g-u08-l01',
    '8.1',
    'Organización de datos en tablas de frecuencia e histogramas',
    'Se tienen las estaturas de 40 estudiantes agrupadas en clases de amplitud 5 cm: [150, 155), [155, 160), etc. ¿Cómo se calcula la marca de clase del intervalo [150, 155)?',
    'La marca de clase es el punto medio del intervalo: (150 + 155) / 2 = 305 / 2 = 152.5 cm.',
    'La **marca de clase** ($M_i$) representa al intervalo: $$M_i = \\frac{L_i + L_s}{2}$$ El **histograma** representa frecuencias mediante rectángulos contiguos cuya base es la amplitud del intervalo y su altura la frecuencia absoluta.',
    'El polígono de frecuencias se obtiene uniendo los puntos medios superiores de las barras del histograma.',
    [{ exercise: 'Calcula la marca de clase del intervalo [20, 30).', hint: '(20+30)/2.', answer: '25' }]
  ),
];

export const GRADE_08_DATA: GradeCurriculumData = {
  id: '8-grado',
  name: '8° Grado',
  cycle: 'Tercer Ciclo de Básica',
  cycleId: 'tercer-ciclo',
  description: 'Currículo oficial ESMATE de octavo grado: polinomios, sistemas 2x2, función lineal (y=mx+b), congruencia y cuerpos de revolución.',
  subjects: [
    {
      id: 'matematica-esmate',
      name: 'Matemática (ESMATE)',
      icon: 'Calculator',
      color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      summary: 'Programa oficial ESMATE de octavo grado (Tercer Ciclo de Educación Básica).',
      units: [
        createCurriculumUnit(
          'mined-mat-8g-u01',
          1,
          'Operaciones algebraicas',
          '8-grado',
          1,
          'Monomios, polinomios, grado, suma/resta, multiplicación y valor numérico.',
          ['Opera con polinomios', 'Calcula el grado de monomios', 'Aplica propiedad distributiva'],
          u1Lessons8G,
          u1Questions8G,
          true
        ),
        createCurriculumUnit('mined-mat-8g-u02', 2, 'Sistemas de ecuaciones de primer grado con dos incógnitas', '8-grado', 1, 'Métodos de reducción, sustitución e igualación para sistemas 2x2.', ['Resuelve sistemas 2x2'], u2Lessons8G),
        createCurriculumUnit('mined-mat-8g-u03', 3, 'Función lineal', '8-grado', 1, 'Pendiente m, intercepto b, forma y = mx + b y gráficas.', ['Grafica funciones lineales'], u3Lessons8G),
        createCurriculumUnit('mined-mat-8g-u04', 4, 'Paralelismo y ángulos de un polígono', '8-grado', 1, 'Ángulos alternos internos y suma Si = (n-2)*180°.', ['Demuestra relaciones angulares'], u4Lessons8G),
        createCurriculumUnit('mined-mat-8g-u05', 5, 'Criterios de congruencia de triángulos', '8-grado', 2, 'Criterios formales LLL, LAL y ALA con demostraciones.', ['Demuestra congruencia triangular'], u5Lessons8G),
        createCurriculumUnit('mined-mat-8g-u06', 6, 'Características de los triángulos y cuadriláteros', '8-grado', 2, 'Propiedades del triángulo isósceles y paralelogramos.', ['Analiza propiedades de cuadriláteros'], u6Lessons8G),
        createCurriculumUnit('mined-mat-8g-u07', 7, 'Área y volumen de sólidos geométricos', '8-grado', 2, 'Volúmenes de cilindros, conos y esferas.', ['Calcula volúmenes de revolución'], u7Lessons8G),
        createCurriculumUnit('mined-mat-8g-u08', 8, 'Organización y análisis de datos estadísticos', '8-grado', 2, 'Tablas de frecuencias agrupadas e histogramas.', ['Construye e interpreta histogramas'], u8Lessons8G),
      ],
    },
  ],
};
