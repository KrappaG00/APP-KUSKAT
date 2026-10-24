import {
  CatalogGradeItem,
  CatalogSubjectItem,
  CatalogUnitItem,
  GradeLevelId,
  SubjectId,
  CycleId,
} from './types';

export const MINED_SUBJECT_METADATA: Record<
  SubjectId,
  { name: string; icon: string; color: string; badgeColor: string; summary: string }
> = {
  'matematica-esmate': {
    name: 'Matemática (ESMATE)',
    icon: 'Calculator',
    color: 'border-blue-300 bg-blue-50/60 dark:bg-blue-950/20 dark:border-blue-800',
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
    summary: 'Metodología didáctica P-S-C-E-R oficial del MINED.',
  },
  'lenguaje-eslengua': {
    name: 'Lengua y Literatura (ESLENGUA)',
    icon: 'BookOpen',
    color: 'border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/20 dark:border-emerald-800',
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300',
    summary: 'Comprensión lectora, producción escrita y análisis literario.',
  },
  'ciencia-tecnologia': {
    name: 'Ciencia y Tecnología',
    icon: 'Atom',
    color: 'border-amber-300 bg-amber-50/60 dark:bg-amber-950/20 dark:border-amber-800',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300',
    summary: 'Indagación científica, física, química y biología.',
  },
  'ciudadania-valores': {
    name: 'Ciudadanía y Valores',
    icon: 'HeartHandshake',
    color: 'border-rose-300 bg-rose-50/60 dark:bg-rose-950/20 dark:border-rose-800',
    badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300',
    summary: 'Derechos humanos, Constitución y convivencia democrática.',
  },
};

type UDef = [number, string, 1 | 2, string, string[], number?, boolean?];

function bU(g: GradeLevelId, s: SubjectId, defs: UDef[]): CatalogUnitItem[] {
  const sg = g.replace('-grado', 'g').replace('-bachillerato', 'b');
  const ss = s === 'matematica-esmate' ? 'mat' : s === 'lenguaje-eslengua' ? 'len' : s === 'ciencia-tecnologia' ? 'cie' : 'ciu';
  return defs.map(([n, title, tomo, summary, comps, lc = 3, ev = false]) => ({
    id: `mined-${ss}-${sg}-u${n < 10 ? '0' : ''}${n}`,
    unitNumber: n,
    title,
    subjectId: s,
    gradeId: g,
    tomo,
    summary,
    competencies: comps,
    lessonCount: lc,
    isEvaluated: ev,
    questionCount: ev ? 50 : 0,
  }));
}

function bS(g: GradeLevelId, s: SubjectId, defs: UDef[]): CatalogSubjectItem {
  const meta = MINED_SUBJECT_METADATA[s];
  const units = bU(g, s, defs);
  return { id: s, ...meta, unitCount: units.length, units };
}

const cSec = (g: GradeLevelId) => [
  bS(g, 'lenguaje-eslengua', [
    [1, 'Comprensión lectora y textos', 1, 'Análisis de textos y vocabulario.', ['Aplica lectura comprensiva'], 3],
    [2, 'Producción escrita y gramática', 2, 'Ortografía y redacción formal.', ['Produce textos coherentes'], 3],
  ]),
  bS(g, 'ciencia-tecnologia', [
    [1, 'Materia, energía y entorno', 1, 'Fenómenos físicos y químicos.', ['Aplica indagación científica'], 2],
    [2, 'Seres vivos y medio ambiente', 2, 'Ecosistemas y salud ambiental.', ['Comprende sistemas biológicos'], 2],
  ]),
  bS(g, 'ciudadania-valores', [
    [1, 'Derechos y convivencia escolar', 1, 'Normas cívicas y derechos.', ['Aplica convivencia armónica'], 2],
    [2, 'Identidad y cultura ciudadana', 2, 'Valores patrios y democracia.', ['Ejerce ciudadanía activa'], 2],
  ]),
];

export const MINED_CATALOG: CatalogGradeItem[] = [
  {
    id: '1-grado',
    name: '1° Grado',
    cycle: 'Primer Ciclo de Básica',
    cycleId: 'primer-ciclo',
    description: 'Noción numérica del 0 al 100, suma, resta y figuras (Números y Formas T1 y T2).',
    subjectCount: 4,
    totalUnits: 14,
    subjects: [
      bS('1-grado', 'matematica-esmate', [
        [1, 'Conozcamos los conceptos básicos y los números del 0 al 10', 1, 'Orientación y conteo del 0 al 10.', ['Identifica cardinales del 0 al 10'], 4, true],
        [2, 'Sumemos y restemos de forma horizontal con números del 0 al 10', 1, 'Adición y sustracción horizontal.', ['Calcula sumas y restas hasta 10'], 4],
        [3, 'Conozcamos los números del 11 al 20 y valor posicional', 1, 'Decenas y unidades hasta 20.', ['Compone números hasta 20'], 3],
        [4, 'Sumemos y restemos de forma horizontal con números hasta el 20', 1, 'Sumas y restas sin llevar hasta 20.', ['Resuelve operaciones hasta 20'], 3],
        [5, 'Conozcamos los números hasta 100', 2, 'Decenas completas y centena (100).', ['Cuenta de 10 en 10 hasta 100'], 3],
        [6, 'Aprendamos a medir longitudes y comparar', 2, 'Comparación directa de longitud.', ['Compara longitudes'], 2],
        [7, 'Identifiquemos figuras y líneas', 2, 'Líneas y figuras geométricas básicas.', ['Distingue formas geométricas'], 2],
        [8, 'Conozcamos el tiempo y la moneda', 2, 'Reloj en punto y monedas de dólar.', ['Reconoce monedas y la hora'], 2],
      ]),
      ...cSec('1-grado'),
    ],
  },
  {
    id: '2-grado',
    name: '2° Grado',
    cycle: 'Primer Ciclo de Básica',
    cycleId: 'primer-ciclo',
    description: 'Números hasta 1,000, sumas/restas llevando/prestando y multiplicación inicial (ESMATE T1 y T2).',
    subjectCount: 4,
    totalUnits: 15,
    subjects: [
      bS('2-grado', 'matematica-esmate', [
        [1, 'Conozcamos los números hasta 1,000', 1, 'Centenas y valor posicional.', ['Escribe números de 3 cifras'], 5, true],
        [2, 'Aprendamos más sobre la suma', 1, 'Suma vertical llevando.', ['Suma llevando a decenas'], 4],
        [3, 'Conozcamos figuras y cuerpos geométricos', 1, 'Polígonos y cuerpos 3D.', ['Diferencia figuras y cuerpos'], 2],
        [4, 'Aprendamos más sobre la resta', 1, 'Resta vertical prestando.', ['Resta prestando de decenas'], 5],
        [5, 'Comencemos a multiplicar', 2, 'Tablas del 2, 3, 4 y 5.', ['Domina tablas del 2 al 5'], 2],
        [6, 'Conozcamos medidas de longitud', 2, 'Centímetro y regla graduada.', ['Mide segmentos en cm'], 2],
        [7, 'Sigamos multiplicando', 2, 'Tablas del 6, 7, 8, 9 y 10.', ['Domina tablas del 6 al 10'], 2],
        [8, 'Conozcamos medidas de peso y capacidad', 2, 'Libra y litro en el entorno.', ['Compara pesos y volúmenes'], 2],
        [9, 'Apliquemos la Matemática', 2, 'Reloj de agujas y calendario.', ['Resuelve problemas integrados'], 4],
      ]),
      ...cSec('2-grado'),
    ],
  },
  {
    id: '3-grado',
    name: '3° Grado',
    cycle: 'Primer Ciclo de Básica',
    cycleId: 'primer-ciclo',
    description: 'Números hasta 10,000, multiplicación vertical, división con residuo, fracciones y geometría.',
    subjectCount: 4,
    totalUnits: 16,
    subjects: [
      bS('3-grado', 'matematica-esmate', [
        [1, 'Números hasta 10,000', 1, 'Valor posicional hasta UM.', ['Lee números de 4 cifras'], 4, true],
        [2, 'Suma y resta de números hasta de cuatro cifras', 1, 'Suma y resta vertical.', ['Opera números de 4 cifras'], 5],
        [3, 'Ángulos, líneas, círculos y esferas', 1, 'Paralelas y círculo.', ['Describe radio y diámetro'], 2],
        [4, 'Multiplicación', 1, 'Factores de 2 y 3 cifras por 1 cifra.', ['Multiplica en vertical'], 4],
        [5, 'Figuras planas y cuerpos geométricos', 1, 'Triángulos y perímetros.', ['Calcula perímetros'], 4],
        [6, 'División y comparación', 2, 'D = d*q + r.', ['Aplica división'], 3],
        [7, 'Aplicaciones matemáticas', 2, 'Metro, km y tiempo.', ['Convierte unidades'], 4],
        [8, 'Fracciones', 2, 'Fracción propia y recta.', ['Ubica fracciones en recta'], 3],
        [9, 'Monedas y gráfica de barras', 2, 'Dólares y barras.', ['Interpreta gráficas de barras'], 2],
        [10, 'Operaciones combinadas', 2, 'Jerarquía con paréntesis.', ['Resuelve con paréntesis'], 2],
      ]),
      ...cSec('3-grado'),
    ],
  },
  {
    id: '4-grado',
    name: '4° Grado',
    cycle: 'Segundo Ciclo de Básica',
    cycleId: 'segundo-ciclo',
    description: 'Números hasta 1,000,000, división larga, decimales, área de cuadrados y fracciones equivalentes.',
    subjectCount: 4,
    totalUnits: 15,
    subjects: [
      bS('4-grado', 'matematica-esmate', [
        [1, 'Números y operaciones de suma y resta', 1, 'Decimal hasta 1,000,000.', ['Opera hasta un millón'], 5, true],
        [2, 'Figuras y cuerpos geométricos', 1, 'Transportador y cuadriláteros.', ['Mide ángulos con rigor'], 4],
        [3, 'Multiplicación de números naturales', 1, 'Multiplicación de varias cifras.', ['Multiplica factores de 3 cifras'], 3],
        [4, 'Números decimales', 1, 'Décimas, centésimas y milésimas.', ['Comprende orden decimal'], 2],
        [5, 'División', 1, 'División entre dos cifras.', ['Aplica división larga'], 4],
        [6, 'Área de cuadrados y rectángulos', 2, 'A = l² y A = b*h.', ['Calcula áreas poligonales'], 2],
        [7, 'Operaciones con números decimales', 2, 'Suma y resta con punto alineado.', ['Opera sumas con decimales'], 3],
        [8, 'Fracciones', 2, 'Fracciones mixtas y sumas.', ['Suma fracciones homogéneas'], 5],
        [9, 'Medida y representación de datos', 2, 'Tablas dobles y pictogramas.', ['Elabora gráficos estadísticos'], 4],
      ]),
      ...cSec('4-grado'),
    ],
  },
  {
    id: '5-grado',
    name: '5° Grado',
    cycle: 'Segundo Ciclo de Básica',
    cycleId: 'segundo-ciclo',
    description: 'Divisibilidad (MCM/MCD), decimales por decimales, ángulos en polígonos, áreas y fracciones heterogéneas.',
    subjectCount: 4,
    totalUnits: 16,
    subjects: [
      bS('5-grado', 'matematica-esmate', [
        [1, 'Divisibilidad, múltiplos y divisores', 1, 'Primos, MCM y MCD.', ['Calcula MCM y MCD'], 4, true],
        [2, 'Ángulos y polígonos', 1, 'Suma interna (triángulo 180°).', ['Calcula ángulos desconocidos'], 3],
        [3, 'Multiplicación y división de números decimales por números naturales', 1, 'Punto decimal y redondeo.', ['Opera decimales con enteros'], 2],
        [4, 'Gráfica de líneas', 1, 'Series de tiempo.', ['Interpreta gráficas de líneas'], 1],
        [5, 'Multiplicación y división de números decimales por números decimales', 1, 'Conteo de cifras decimales.', ['Multiplica y divide decimales'], 4],
        [6, 'Cantidad por unidad', 2, 'Rapidez v=d/t y densidad.', ['Calcula razones unitarias'], 1],
        [7, 'Equivalencia de monedas y elaboración de presupuestos', 2, 'Ingresos y egresos.', ['Elabora presupuestos'], 2],
        [8, 'Área de triángulos y cuadriláteros', 2, 'Paralelogramo y trapecio.', ['Aplica fórmulas de áreas'], 1],
        [9, 'Unidades de medida en el sistema inglés', 2, 'Pulgada, libra y quintal.', ['Convierte medidas inglesas'], 2],
        [10, 'Fracciones', 2, 'Fracciones heterogéneas.', ['Suma con distinto denominador'], 5],
      ]),
      ...cSec('5-grado'),
    ],
  },
  {
    id: '6-grado',
    name: '6° Grado',
    cycle: 'Segundo Ciclo de Básica',
    cycleId: 'segundo-ciclo',
    description: 'Operaciones con fracciones, variables, razones y porcentajes (IVA 13%), proporcionalidad, círculo y volumen.',
    subjectCount: 4,
    totalUnits: 17,
    subjects: [
      bS('6-grado', 'matematica-esmate', [
        [1, 'Operaciones con fracciones', 1, 'Multiplicación y recíproco.', ['Multiplica fracciones'], 3, true],
        [2, 'Cantidades variables y números romanos', 1, 'Variables y romanos.', ['Usa letras para variables'], 2],
        [3, 'División de fracciones y operaciones combinadas', 1, 'División por recíproco.', ['Divide fracciones y simplifica'], 2],
        [4, 'Razones y porcentajes', 1, 'Cálculo de IVA (13%).', ['Calcula porcentajes e IVA'], 2],
        [5, 'Proporcionalidad', 1, 'Directa (y=kx) e inversa.', ['Modela proporcionalidad'], 3],
        [6, 'Longitud de una circunferencia y área del círculo', 2, 'C = 2*pi*r y A = pi*r².', ['Calcula área del círculo'], 2],
        [7, 'Análisis de datos', 2, 'Media, moda y mediana.', ['Calcula tendencia central'], 2],
        [8, 'Volumen de cubos y prismas rectangulares', 2, 'V = Ab * h.', ['Calcula volumen de prismas'], 1],
        [9, 'Conversión de otros sistemas al sistema internacional', 2, 'Varas cuadradas y manzanas.', ['Convierte unidades agrarias'], 1],
        [10, 'Traslaciones, simetrías y rotaciones', 2, 'Simetría axial y traslación.', ['Reconoce figuras simétricas'], 3],
        [11, 'Formas de contar y ordenar objetos', 2, 'Árbol y probabilidad.', ['Calcula probabilidades'], 2],
      ]),
      ...cSec('6-grado'),
    ],
  },
  {
    id: '7-grado',
    name: '7° Grado',
    cycle: 'Tercer Ciclo de Básica',
    cycleId: 'tercer-ciclo',
    description: 'Números con signo, álgebra con símbolos, ecuaciones lineales de 1° grado y proporcionalidad.',
    subjectCount: 4,
    totalUnits: 14,
    subjects: [
      bS('7-grado', 'matematica-esmate', [
        [1, 'Números positivos, negativos y el cero', 1, 'Valor absoluto y orden en Z.', ['Ordena enteros en recta'], 4, true],
        [2, 'Suma y resta de números positivos, negativos y el cero', 1, 'Operaciones con signos.', ['Opera sumas algebraicas'], 4],
        [3, 'Multiplicación y división de números positivos, negativos y el cero', 1, 'Ley de signos y potencias.', ['Aplica ley de signos'], 4],
        [4, 'Comunicación con símbolos', 1, 'Variables y términos semejantes.', ['Reduce términos algebraicos'], 4],
        [5, 'Ecuaciones de primer grado', 2, 'Resolución de ax + b = c.', ['Resuelve ecuaciones lineales'], 4],
        [6, 'Proporcionalidad directa e inversa', 2, 'Gráficas cartesianas.', ['Modela proporcionalidad'], 3],
        [7, 'Gráfica de faja y circular', 2, 'Distribución porcentual.', ['Interpreta gráficos circulares'], 2],
        [8, 'Figuras planas y construcción de cuerpos geométricos', 2, 'Mediatriz y bisectriz.', ['Construye con compás'], 3],
      ]),
      ...cSec('7-grado'),
    ],
  },
  {
    id: '8-grado',
    name: '8° Grado',
    cycle: 'Tercer Ciclo de Básica',
    cycleId: 'tercer-ciclo',
    description: 'Polinomios, sistemas 2x2, función lineal (y = mx + b), congruencia de triángulos y sólidos.',
    subjectCount: 4,
    totalUnits: 14,
    subjects: [
      bS('8-grado', 'matematica-esmate', [
        [1, 'Operaciones algebraicas', 1, 'Polinomios y multiplicación.', ['Opera expresiones algebraicas'], 4, true],
        [2, 'Sistemas de ecuaciones de primer grado con dos incógnitas', 1, 'Reducción y sustitución 2x2.', ['Resuelve sistemas 2x2'], 4],
        [3, 'Función lineal', 1, 'Pendiente m y forma y = mx + b.', ['Grafica funciones lineales'], 5],
        [4, 'Paralelismo y ángulos de un polígono', 1, 'Suma interna Si = 180°(n-2).', ['Demuestra teoremas de ángulos'], 3],
        [5, 'Criterios de congruencia de triángulos', 2, 'Criterios LLL, LAL y ALA.', ['Demuestra congruencia'], 3],
        [6, 'Características de los triángulos y cuadriláteros', 2, 'Propiedades del paralelogramo.', ['Analiza cuadriláteros'], 3],
        [7, 'Área y volumen de sólidos geométricos', 2, 'Conos, cilindros y esferas.', ['Calcula volúmenes 3D'], 3],
        [8, 'Organización y análisis de datos estadísticos', 2, 'Datos agrupados e histogramas.', ['Analiza frecuencias'], 3],
      ]),
      ...cSec('8-grado'),
    ],
  },
  {
    id: '9-grado',
    name: '9° Grado',
    cycle: 'Tercer Ciclo de Básica',
    cycleId: 'tercer-ciclo',
    description: 'Productos notables, factorización, raíces cuadradas, ecuaciones cuadráticas, Pitágoras y dispersión.',
    subjectCount: 4,
    totalUnits: 14,
    subjects: [
      bS('9-grado', 'matematica-esmate', [
        [1, 'Multiplicación de polinomios y productos notables', 1, 'Binomios y factorización.', ['Factoriza trinomios'], 4, true],
        [2, 'Raíz cuadrada y números reales', 1, 'Radicales y racionalización.', ['Opera con radicales'], 4],
        [3, 'Ecuación cuadrática', 1, 'Fórmula general y discriminante.', ['Resuelve cuadráticas'], 4],
        [4, 'Función cuadrática de la forma y = ax² + c', 1, 'Parábolas y vértice (0, c).', ['Grafica funciones cuadráticas'], 3],
        [5, 'Figuras semejantes', 2, 'Semejanza y Teorema de Tales.', ['Aplica semejanza'], 3],
        [6, 'Teorema de Pitágoras', 2, 'Demostración a² + b² = c².', ['Aplica Pitágoras en 2D y 3D'], 3],
        [7, 'Ángulo inscrito y central en circunferencias', 2, 'Teorema theta = 2*alpha.', ['Demuestra relaciones angulares'], 3],
        [8, 'Medidas de dispersión', 2, 'Varianza y desviación típica.', ['Calcula desviación típica'], 3],
      ]),
      ...cSec('9-grado'),
    ],
  },
  {
    id: '1-bachillerato',
    name: '1° Bachillerato',
    cycle: 'Educación Media',
    cycleId: 'educacion-media',
    description: 'Números reales, polinomios y complejos, desigualdades, funciones, triángulos oblicuángulos, vectores y estadística.',
    subjectCount: 4,
    totalUnits: 14,
    subjects: [
      bS('1-bachillerato', 'matematica-esmate', [
        [1, 'Números reales', 1, 'Radicales e intervalos.', ['Opera números irracionales'], 4, true],
        [2, 'Operaciones con polinomios y números complejos', 1, 'División sintética y C.', ['Factoriza polinomios y complejos'], 4],
        [3, 'Desigualdades', 1, 'Inecuaciones y cuadro de signos.', ['Resuelve inecuaciones'], 4],
        [4, 'Funciones reales', 1, 'Traslaciones f(x)=a(x-h)²+k.', ['Grafica funciones reales'], 4],
        [5, 'Resolución de triángulos oblicuángulos', 2, 'Leyes de Senos y Cosenos.', ['Aplica trigonometría'], 4],
        [6, 'Identidades y ecuaciones trigonométricas', 2, 'Identidades pitagóricas.', ['Resuelve ecuaciones angulares'], 4],
        [7, 'Vectores y números complejos', 2, 'Producto escalar y forma polar.', ['Opera vectores en R²'], 4],
        [8, 'Estadística descriptiva', 2, 'Cuartiles y box-plot.', ['Interpreta diagramas de caja'], 3],
      ]),
      ...cSec('1-bachillerato'),
    ],
  },
  {
    id: '2-bachillerato',
    name: '2° Bachillerato',
    cycle: 'Educación Media',
    cycleId: 'educacion-media',
    description: 'Ecuaciones bicuadráticas, geometría analítica de recta y cónicas, funciones trascendentales, sucesiones y probabilidad (AVANZO/UES).',
    subjectCount: 4,
    totalUnits: 14,
    subjects: [
      bS('2-bachillerato', 'matematica-esmate', [
        [1, 'Ecuaciones', 1, 'Bicuadráticas y radicales.', ['Resuelve ecuaciones avanzadas'], 4, true],
        [2, 'Línea recta', 1, 'Ecuación general y distancia.', ['Modela rectas en el plano'], 4],
        [3, 'Secciones cónicas', 1, 'Parábola, elipse e hipérbola.', ['Determina elementos cónicos'], 5, true],
        [4, 'Funciones trascendentales I', 1, 'Función exponencial f(x)=a^x.', ['Resuelve ecuaciones exponenciales'], 4],
        [5, 'Funciones trascendentales II', 2, 'Logaritmos y función inversa.', ['Aplica propiedades logarítmicas'], 4],
        [6, 'Sucesiones aritméticas y geométricas', 2, 'Término a_n y sumas Sn.', ['Calcula sumas de progresiones'], 4],
        [7, 'Métodos de conteo', 2, 'Permutaciones y combinaciones.', ['Aplica combinatoria'], 4],
        [8, 'Probabilidad', 2, 'Laplace, condicional y Bayes.', ['Calcula probabilidad condicional'], 4],
      ]),
      ...cSec('2-bachillerato'),
    ],
  },
];
