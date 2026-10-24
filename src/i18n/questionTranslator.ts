import { Question } from '../types';
import { AppLocale, GlossaryTerm, LanguageMeta, TranslatedQuestionContent } from './types';

/**
 * Catálogo oficial de lenguas soportadas por el sistema multilingüe intercultural de APP-KUSKAT.
 * Nota cultural: Para las lenguas originarias de El Salvador (Náhuat, Lenca, Kakawira) se emplean
 * monogramas tipográficos respetuosos en lugar de banderas estatales.
 */
export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  {
    code: 'es',
    nativeName: 'Español',
    spanishName: 'Español (Base)',
    region: 'El Salvador / Hispanoamérica',
    dir: 'ltr',
    script: 'latin',
    monogram: 'ES',
    isIndigenous: false,
    bcp47: 'es-SV',
  },
  {
    code: 'nahuat',
    nativeName: 'Náhuat (Nawat)',
    spanishName: 'Náhuat Pipil',
    region: 'Sonsonate, La Libertad, Ahuachapán (Kuskatan)',
    dir: 'ltr',
    script: 'latin',
    monogram: 'NW',
    isIndigenous: true,
    bcp47: 'ppl-SV',
  },
  {
    code: 'lenca',
    nativeName: 'Lenca (Potón)',
    spanishName: 'Lenca Salvadoreño',
    region: 'Guatajiagua, Chilanga, Oriente de El Salvador',
    dir: 'ltr',
    script: 'latin',
    monogram: 'LN',
    isIndigenous: true,
    bcp47: 'len-SV',
  },
  {
    code: 'kakawira',
    nativeName: 'Kakawira (Cacaopera)',
    spanishName: 'Kakawira',
    region: 'Cacaopera, Departamento de Morazán',
    dir: 'ltr',
    script: 'latin',
    monogram: 'KK',
    isIndigenous: true,
    bcp47: 'ccr-SV',
  },
  {
    code: 'en',
    nativeName: 'English',
    spanishName: 'Inglés',
    region: 'Internacional (US / UK)',
    dir: 'ltr',
    script: 'latin',
    monogram: 'EN',
    isIndigenous: false,
    bcp47: 'en-US',
  },
  {
    code: 'ar',
    nativeName: 'العربية',
    spanishName: 'Árabe Estándar',
    region: 'Comunidad Árabe-Salvadoreña / MENA',
    dir: 'rtl',
    script: 'arabic',
    monogram: 'ع',
    isIndigenous: false,
    bcp47: 'ar',
  },
  {
    code: 'zh',
    nativeName: '中文 (普通话)',
    spanishName: 'Chino Mandarín',
    region: 'Comunidad Chino-Salvadoreña / Internacional',
    dir: 'ltr',
    script: 'chinese',
    monogram: '中',
    isIndigenous: false,
    bcp47: 'zh-CN',
  },
];

export function getLanguageMeta(code: AppLocale): LanguageMeta {
  return SUPPORTED_LANGUAGES.find((l) => l.code === code) || SUPPORTED_LANGUAGES[0];
}

/**
 * Glosario Técnico Intercultural consensuado para apoyar el modo "Aprender Español"
 * y la comprensión de reactivos matemáticos, científicos, sociales y humanísticos.
 */
export const INTERCULTURAL_GLOSSARY: Record<AppLocale, GlossaryTerm[]> = {
  es: [
    {
      termEs: 'Fracción / Número racional',
      termTarget: 'Razón de dos enteros (a/b)',
      category: 'matematica',
      definitionEs: 'Expresión que representa una parte de un todo dividido en partes iguales.',
      definitionTarget: 'Cociente indicado entre un numerador entero y un denominador distinto de cero.',
    },
    {
      termEs: 'Ecuación algebraica',
      termTarget: 'Igualdad con incógnita',
      category: 'matematica',
      definitionEs: 'Igualdad matemática entre dos expresiones que contiene una o más variables.',
      definitionTarget: 'Relación de equilibrio donde se despeja el valor desconocido x.',
    },
    {
      termEs: 'Átomo',
      termTarget: 'Unidad fundamental de la materia',
      category: 'ciencias',
      definitionEs: 'Partícula más pequeña de un elemento químico que conserva sus propiedades.',
      definitionTarget: 'Sistema compuesto por núcleo (protones y neutrones) y nube electrónica.',
    },
    {
      termEs: 'Célula',
      termTarget: 'Unidad biológica estructural y funcional',
      category: 'ciencias',
      definitionEs: 'Unidad morfológica y fisiológica elemental de todo ser vivo.',
      definitionTarget: 'Estructura viva capaz de nutrirse, relacionarse y reproducirse.',
    },
    {
      termEs: 'Constitución de la República',
      termTarget: 'Ley primaria del Estado salvadoreño',
      category: 'sociales',
      definitionEs: 'Norma jurídica suprema que rige la organización del Estado y los derechos fundamentales.',
      definitionTarget: 'Marco constitucional vigente desde 1983 en El Salvador.',
    },
  ],
  nahuat: [
    {
      termEs: 'Número / Conteo',
      termTarget: 'Tapual (Tajtapual)',
      category: 'matematica',
      definitionEs: 'Concepto matemático que expresa una cantidad o magnitud.',
      definitionTarget: 'Tik Nawat, ne tapual techilwia keski datka nemi (se, ume, yey, nawi, makwil).',
      isLoanword: false,
      culturalNote: 'El sistema numérico ancestral pipil es vigesimal (base 20: sempual).',
    },
    {
      termEs: 'Fracción / Parte',
      termTarget: 'Tatzayan / Tajku-tapual',
      category: 'matematica',
      definitionEs: 'División de una unidad entera en partes iguales ($a/b$).',
      definitionTarget: 'Keman tikxexelua se datka tik tajku o miak tatzayan ($a/b$).',
      isLoanword: false,
      culturalNote: 'Se emplea "tajku" (mitad/parte) combinado con "tapual" (número).',
    },
    {
      termEs: 'Ecuación',
      termTarget: 'Ecuación (Titaketzalis-tapual)',
      category: 'matematica',
      definitionEs: 'Igualdad matemática con al menos una incógnita por resolver.',
      definitionTarget: 'Ume tapual nusan kenha kan tiktemua ne incógnita $x$.',
      isLoanword: true,
      culturalNote: 'Préstamo técnico justificado acompañado del circunloquio pedagógico "tapual kenha".',
    },
    {
      termEs: 'Naturaleza / Tierra / Entorno físico',
      termTarget: 'Taltikpak / Tal',
      category: 'ciencias',
      definitionEs: 'Conjunto de seres vivos, materia, energía y fenómenos físicos del planeta.',
      definitionTarget: 'Muchi tay yultuk, at, ehekat, teshkal wan kojtan tik ne Taltikpak.',
      isLoanword: false,
    },
    {
      termEs: 'Átomo',
      termTarget: 'Átomo (chikitik-datka)',
      category: 'ciencias',
      definitionEs: 'Unidad constitutiva más pequeña de la materia ordinaria.',
      definitionTarget: 'Ne mas chikitik tatzayan ipal muchi tay nemi tik ne Taltikpak.',
      isLoanword: true,
      culturalNote: 'Se conserva el término científico internacional "átomo" con glosa explicativa en Náhuat.',
    },
    {
      termEs: 'Comunidad / Pueblo / Sociedad',
      termTarget: 'Techan',
      category: 'sociales',
      definitionEs: 'Organización social, histórica y ciudadana que habita un territorio.',
      definitionTarget: 'Ne tuijikniwan, kalpuli wan ciudadanojmet tik Kuskatan.',
      isLoanword: false,
    },
    {
      termEs: 'Palabra / Lenguaje / Discurso',
      termTarget: 'Taketzalis',
      category: 'lenguaje',
      definitionEs: 'Facultad de expresión y sistema de comunicación humana.',
      definitionTarget: 'Ken titaketzat, titajkwiluat wan timoyulmelawat.',
      isLoanword: false,
    },
  ],
  lenca: [
    {
      termEs: 'Número / Cantidad',
      termTarget: 'Tapual / Peta-mina',
      category: 'matematica',
      definitionEs: 'Expresión de cantidad o medida aritmética.',
      definitionTarget: 'Cuenta numérica en tradición Potón Lenca (peta = 1, pe = 2, lawa = 3, aria = 4).',
      isLoanword: false,
      culturalNote: 'Revitalizado a partir de los registros lingüísticos de Chilanga y Guatajiagua.',
    },
    {
      termEs: 'Fracción',
      termTarget: 'Fracción (Partición de unidad)',
      category: 'matematica',
      definitionEs: 'Representación de una división o proporción entre dos números enteros.',
      definitionTarget: 'Proporción $a/b$ utilizada en medición comunitaria de tierras y granos.',
      isLoanword: true,
      culturalNote: 'Préstamo técnico matemático consensuado para educación media y superior.',
    },
    {
      termEs: 'Agua / Recurso hídrico',
      termTarget: 'Wal',
      category: 'ciencias',
      definitionEs: 'Compuesto químico esencial ($H_2O$) para la vida y los ecosistemas.',
      definitionTarget: 'Wal (agua/río), elemento central en la toponimia e hidrología lenca del oriente salvadoreño.',
      isLoanword: false,
      culturalNote: 'El sufijo "-wal" o "-gual" da nombre a numerosos ríos y municipios de oriente.',
    },
    {
      termEs: 'Tierra / Territorio',
      termTarget: 'Ou / Tal',
      category: 'sociales',
      definitionEs: 'Espacio geográfico, ecológico e histórico de asentamiento humano.',
      definitionTarget: 'Territorio ancestral de los pueblos de oriente (Morazán, San Miguel, Usulután, La Unión).',
      isLoanword: false,
    },
    {
      termEs: 'Lengua / Habla',
      termTarget: 'Potón / Yul',
      category: 'lenguaje',
      definitionEs: 'Sistema lingüístico de comunicación e identidad cultural.',
      definitionTarget: 'Lengua materna del pueblo Lenca salvadoreño.',
      isLoanword: false,
    },
  ],
  kakawira: [
    {
      termEs: 'Agua / Río',
      termTarget: 'Li',
      category: 'ciencias',
      definitionEs: 'Sustancia líquida vital ($H_2O$) y cuerpo hidrográfico.',
      definitionTarget: 'En lengua Kakawira (familia Misumalpa), "li" designa el agua y las corrientes fluviales.',
      isLoanword: false,
      culturalNote: 'Vocablo fundamental documentado en Cacaopera, departamento de Morazán.',
    },
    {
      termEs: 'Sol / Energía solar',
      termTarget: 'Lapa',
      category: 'ciencias',
      definitionEs: 'Estrella central del sistema solar, fuente de luz, calor y fotosíntesis.',
      definitionTarget: 'Astro solar ("lapa") que regula los ciclos agrícolas y energéticos.',
      isLoanword: false,
    },
    {
      termEs: 'Fracción / Ecuación',
      termTarget: 'Fracción / Ecuación (Préstamo académico)',
      category: 'matematica',
      definitionEs: 'Operación racional e igualdad algebraica.',
      definitionTarget: 'Término matemático mantenido como préstamo directo con explicación bilingüe contextual.',
      isLoanword: true,
      culturalNote: 'Evita calcos artificiales y asegura la transición fluida al examen universitario.',
    },
    {
      termEs: 'Comunidad / Familia',
      termTarget: 'Karan / Pueblo Kakawira',
      category: 'sociales',
      definitionEs: 'Núcleo social y cultural con historia e instituciones compartidas.',
      definitionTarget: 'Organización comunitaria e histórica de Cacaopera.',
      isLoanword: false,
    },
  ],
  en: [
    {
      termEs: 'Fracción',
      termTarget: 'Fraction / Rational Number',
      category: 'matematica',
      definitionEs: 'Cociente de dos números enteros $a/b$ con $b \\neq 0$.',
      definitionTarget: 'A numerical quantity that represents a part of a whole ($a/b$).',
    },
    {
      termEs: 'Ecuación',
      termTarget: 'Equation',
      category: 'matematica',
      definitionEs: 'Igualdad matemática que contiene una o más incógnitas.',
      definitionTarget: 'A mathematical statement asserting the equality of two expressions.',
    },
    {
      termEs: 'Átomo',
      termTarget: 'Atom',
      category: 'ciencias',
      definitionEs: 'Unidad básica de un elemento químico.',
      definitionTarget: 'The smallest unit of ordinary matter that forms a chemical element.',
    },
    {
      termEs: 'Constitución',
      termTarget: 'Constitution',
      category: 'sociales',
      definitionEs: 'Ley suprema de un Estado soberano.',
      definitionTarget: 'The supreme law and foundational legal framework of the Republic.',
    },
  ],
  ar: [
    {
      termEs: 'Fracción',
      termTarget: 'كسر اعتيادي (Fraction)',
      category: 'matematica',
      definitionEs: 'Relación proporcional entre un numerador y un denominador.',
      definitionTarget: 'علاقة رياضية تمثل جزءاً من كل وتُكتب على صورة بسط ومقام ($a/b$).',
    },
    {
      termEs: 'Ecuación',
      termTarget: 'معادلة جبرية (Equation)',
      category: 'matematica',
      definitionEs: 'Igualdad algebraica con variables desconocidas.',
      definitionTarget: 'متساوية رياضية تحتوي على متغير مجهول واحد أو أكثر (مثل $x$).',
    },
    {
      termEs: 'Átomo',
      termTarget: 'ذرّة (Atom)',
      category: 'ciencias',
      definitionEs: 'Unidad elemental de la materia química.',
      definitionTarget: 'أصغر وحدة بنائية للعنصر الكيميائي تحتفظ بخصائصه.',
    },
    {
      termEs: 'Constitución',
      termTarget: 'الدستور (Constitución)',
      category: 'sociales',
      definitionEs: 'Norma suprema del ordenamiento jurídico.',
      definitionTarget: 'القانون الأعلى الذي يحدد نظام الحكم والحقوق والواجبات الأساسية.',
    },
  ],
  zh: [
    {
      termEs: 'Fracción',
      termTarget: '分数 / 有理数 (Fracción)',
      category: 'matematica',
      definitionEs: 'Expresión de una cantidad dividida entre otra.',
      definitionTarget: '表示一个数是另一个数的几分之几的数，由分子和分母组成（$a/b$）。',
    },
    {
      termEs: 'Ecuación',
      termTarget: '方程 / 等式 (Ecuación)',
      category: 'matematica',
      definitionEs: 'Igualdad matemática que contiene incógnitas.',
      definitionTarget: '含有未知数的等式，通过代数运算求解未知数的值。',
    },
    {
      termEs: 'Átomo',
      termTarget: '原子 (Átomo)',
      category: 'ciencias',
      definitionEs: 'Partícula fundamental de un elemento químico.',
      definitionTarget: '化学变化中的最小微粒，由原子核和核外电子构成。',
    },
    {
      termEs: 'Constitución',
      termTarget: '宪法 (Constitución)',
      category: 'sociales',
      definitionEs: 'Ley fundamental de un Estado.',
      definitionTarget: '国家的根本大法，规定国家根本制度和公民基本权利。',
    },
  ],
};

/**
 * Diccionario de materias y encabezados pedagógicos por idioma.
 */
const SUBJECT_TRANSLATIONS: Record<AppLocale, Record<string, string>> = {
  es: {},
  nahuat: {
    Matemática: 'Tapual-Tamatilis (Matemática)',
    Matemáticas: 'Tapual-Tamatilis (Matemáticas)',
    Precálculo: 'Wey Tapual-Tamatilis (Precálculo)',
    Física: 'Taltikpak-Tajpal (Física)',
    Química: 'At-wan-Teshkal Tamatilis (Química)',
    Biología: 'Yultuk-Tamatilis (Biología)',
    'Ciencias Naturales': 'Taltikpak Tamatilis (Ciencias Naturales)',
    'Ciencia y Tecnología': 'Tamatilis wan Yankwik-Tachiwalis (Ciencia y Tecnología)',
    'Lenguaje y Literatura': 'Taketzalis wan Amat-Tamatilis (Lenguaje y Literatura)',
    'Lengua y Literatura': 'Taketzalis wan Amat-Tamatilis (Lengua y Literatura)',
    Lenguaje: 'Taketzalis (Lenguaje)',
    'Estudios Sociales': 'Techan wan Ikman Tamatilis (Estudios Sociales)',
    'Ciencias Sociales': 'Techan Tamatilis (Ciencias Sociales)',
    'Ciudadanía y Valores': 'Techan-Yeknemilis (Ciudadanía y Valores)',
    'Derecho Constitucional': 'Wey Tatzkuntalis (Derecho Constitucional)',
    'Legislación Salvadoreña': 'Tatzkuntalis ipal Kuskatan (Legislación)',
  },
  lenca: {
    Matemática: 'Tapual Potón (Matemática)',
    Matemáticas: 'Tapual Potón (Matemáticas)',
    Precálculo: 'Precálculo (Tapual Wey)',
    Física: 'Física (Naturaleza y Fuerzas)',
    Química: 'Química (Transformación de la Materia)',
    Biología: 'Biología (Seres Vivos)',
    'Ciencias Naturales': 'Ciencias Naturales (Wal wan Ou)',
    'Ciencia y Tecnología': 'Ciencia y Tecnología',
    'Lenguaje y Literatura': 'Yul Potón wan Literatura (Lenguaje)',
    'Lengua y Literatura': 'Yul Potón wan Literatura',
    'Estudios Sociales': 'Historia wan Techan (Estudios Sociales)',
    'Ciudadanía y Valores': 'Convivencia Comunitaria (Ciudadanía)',
  },
  kakawira: {
    Matemática: 'Matemática (Conteo y Medición Kakawira)',
    Matemáticas: 'Matemáticas (Cálculo Académico)',
    Precálculo: 'Precálculo',
    Física: 'Física (Fenómenos Físicos)',
    Química: 'Química (Elementos y Compuestos)',
    Biología: 'Biología (Vida y Ecosistemas)',
    'Ciencias Naturales': 'Ciencias Naturales (Li & Lapa)',
    'Lenguaje y Literatura': 'Lenguaje y Tradición Oral Kakawira',
    'Estudios Sociales': 'Estudios Sociales e Identidad de Morazán',
  },
  en: {
    Matemática: 'Mathematics',
    Matemáticas: 'Mathematics',
    Precálculo: 'Precalculus',
    Física: 'Physics',
    Química: 'Chemistry',
    Biología: 'Biology',
    'Ciencias Naturales': 'Natural Sciences',
    'Ciencia y Tecnología': 'Science and Technology',
    'Lenguaje y Literatura': 'Language and Literature',
    'Lengua y Literatura': 'Language and Literature',
    Lenguaje: 'Language Arts',
    'Estudios Sociales': 'Social Studies',
    'Ciencias Sociales': 'Social Sciences',
    'Ciudadanía y Valores': 'Citizenship and Ethics',
    'Derecho Constitucional': 'Constitutional Law',
    'Legislación Salvadoreña': 'Salvadorean Legislation',
    'Razonamiento Lógico': 'Logical Reasoning',
    'Geografía e Historia': 'Geography and History',
  },
  ar: {
    Matemática: 'الرياضيات (Matemática)',
    Matemáticas: 'الرياضيات (Matemáticas)',
    Precálculo: 'ما قبل التفاضل والتكامل (Precálculo)',
    Física: 'الفيزياء (Física)',
    Química: 'الكيمياء (Química)',
    Biología: 'علم الأحياء (Biología)',
    'Ciencias Naturales': 'العلوم الطبيعية (Ciencias Naturales)',
    'Ciencia y Tecnología': 'العلوم والتكنولوجيا (Ciencia y Tecnología)',
    'Lenguaje y Literatura': 'اللغة والأدب (Lenguaje y Literatura)',
    'Lengua y Literatura': 'اللغة والأدب (Lengua y Literatura)',
    Lenguaje: 'اللغة (Lenguaje)',
    'Estudios Sociales': 'الدراسات الاجتماعية (Estudios Sociales)',
    'Ciencias Sociales': 'العلوم الاجتماعية (Ciencias Sociales)',
    'Ciudadanía y Valores': 'المواطنة والقيم (Ciudadanía y Valores)',
    'Derecho Constitucional': 'القانون الدستوري (Derecho Constitucional)',
  },
  zh: {
    Matemática: '数学 (Matemática)',
    Matemáticas: '数学 (Matemáticas)',
    Precálculo: '微积分预备 (Precálculo)',
    Física: '物理学 (Física)',
    Química: '化学 (Química)',
    Biología: '生物学 (Biología)',
    'Ciencias Naturales': '自然科学 (Ciencias Naturales)',
    'Ciencia y Tecnología': '科学与技术 (Ciencia y Tecnología)',
    'Lenguaje y Literatura': '语言与文学 (Lenguaje y Literatura)',
    'Lengua y Literatura': '语言与文学 (Lengua y Literatura)',
    Lenguaje: '语言学 (Lenguaje)',
    'Estudios Sociales': '社会研究 (Estudios Sociales)',
    'Ciencias Sociales': '社会科学 (Ciencias Sociales)',
    'Ciudadanía y Valores': '公民与价值观 (Ciudadanía y Valores)',
    'Derecho Constitucional': '宪法学 (Derecho Constitucional)',
  },
};

/**
 * Traduce los prefijos de enunciado y explicación de las preguntas para ofrecer
 * un andamiaje intercultural auténtico sin distorsionar las fórmulas ni los datos exactos.
 */
function adaptStatementToLocale(statement: string, locale: AppLocale): { text: string; isFallback: boolean } {
  if (locale === 'es') {
    return { text: statement, isFallback: false };
  }

  let text = statement;
  let translatedPart = false;

  const replacements: Record<Exclude<AppLocale, 'es'>, Array<[RegExp, string]>> = {
    nahuat: [
      [/^¿Cuál es el resultado de\b/i, '¿Tay kisa keman tikchiwat (Cuál es el resultado de)'],
      [/^¿Cuál de las siguientes\b/i, '¿Katka ipal ini (Cuál de las siguientes)'],
      [/^Determina el valor de\b/i, 'Shiktemu ne ipatiw ipal (Determina el valor de)'],
      [/^Calcula\b/i, 'Shiktapua / Calcula'],
      [/^Resuelve\b/i, 'Shikpatla / Resuelve'],
      [/^Selecciona la opción correcta/i, 'Shikpejpena ne yankwik yek (Selecciona la opción correcta)'],
      [/^En el contexto de\b/i, 'Tik ne tamatilis ipal (En el contexto de)'],
    ],
    lenca: [
      [/^¿Cuál es el resultado de\b/i, '[Potón: Lepa tapual] ¿Cuál es el resultado de'],
      [/^Determina el valor de\b/i, '[Potón: Taukina valor] Determina el valor de'],
      [/^Calcula\b/i, '[Potón: Tapua] Calcula'],
      [/^Selecciona la opción correcta/i, '[Potón: Pejpena opción shi] Selecciona la opción correcta'],
    ],
    kakawira: [
      [/^¿Cuál es el resultado de\b/i, '[Kakawira] ¿Cuál es el resultado de'],
      [/^Determina el valor de\b/i, '[Kakawira] Determina el valor de'],
      [/^Calcula\b/i, '[Kakawira] Calcula'],
    ],
    en: [
      [/^¿Cuál es el resultado de\b/i, 'What is the result of'],
      [/^¿Cuál de las siguientes afirmaciones es correcta\b/i, 'Which of the following statements is correct'],
      [/^¿Cuál de las siguientes opciones\b/i, 'Which of the following options'],
      [/^Determina el valor de\b/i, 'Determine the value of'],
      [/^Calcula el valor de\b/i, 'Calculate the value of'],
      [/^Calcula\b/i, 'Calculate'],
      [/^Resuelve la siguiente ecuación\b/i, 'Solve the following equation'],
      [/^Simplifica la expresión\b/i, 'Simplify the expression'],
      [/^Selecciona la opción correcta/i, 'Select the correct option'],
      [/\bVerdadero\b/g, 'True (Verdadero)'],
      [/\bFalso\b/g, 'False (Falso)'],
    ],
    ar: [
      [/^¿Cuál es el resultado de\b/i, 'ما هي نتيجة (¿Cuál es el resultado de)'],
      [/^Determina el valor de\b/i, 'حدّد قيمة (Determina el valor de)'],
      [/^Calcula\b/i, 'احسب (Calcula)'],
      [/^Resuelve\b/i, 'حلّ المعادلة (Resuelve)'],
    ],
    zh: [
      [/^¿Cuál es el resultado de\b/i, '计算以下结果 (¿Cuál es el resultado de)'],
      [/^Determina el valor de\b/i, '求以下数值 (Determina el valor de)'],
      [/^Calcula\b/i, '计算 (Calcula)'],
      [/^Resuelve\b/i, '求解 (Resuelve)'],
    ],
  };

  const rules = replacements[locale] || [];
  for (const [pattern, replacement] of rules) {
    if (pattern.test(text)) {
      text = text.replace(pattern, replacement);
      translatedPart = true;
    }
  }

  // Si no coincidió con ningún patrón directo, agregamos la guía contextual bilingüe intercultural
  // y marcamos si requiere apoyo del español base.
  if (!translatedPart) {
    const prefixMap: Record<Exclude<AppLocale, 'es'>, string> = {
      nahuat: '[Tajtanilis tik Nawat / Kastiya] ',
      lenca: '[Reactivo Potón Lenca / Español] ',
      kakawira: '[Reactivo Kakawira / Español] ',
      en: '[Academic Item — ES/EN] ',
      ar: '[سؤال أكاديمي — ES/AR] ',
      zh: '[学术题目 — 西/中对照] ',
    };
    return {
      text: `${prefixMap[locale]}${text}`,
      isFallback: true,
    };
  }

  return { text, isFallback: false };
}

function adaptExplanationToLocale(explanation: string, correctAnswer: string, locale: AppLocale): string {
  if (!explanation) return '';
  if (locale === 'es') return explanation;

  const headerMap: Record<Exclude<AppLocale, 'es'>, string> = {
    nahuat: `• Taneshtilis tik Nawat (Clave yek: ${correctAnswer}): Ne yankwik yek pal ini tajtanilis neshti ika: `,
    lenca: `• Taneshtilis Potón Lenca (Respuesta Shi: ${correctAnswer}): `,
    kakawira: `• Justificación Intercultural Kakawira (Clave: ${correctAnswer}): `,
    en: `• Pedagogical Rationale (Correct Key: ${correctAnswer}): `,
    ar: `• التبرير التربوي (الإجابة الصحيحة: ${correctAnswer}): `,
    zh: `• 教学解析（正确答案：${correctAnswer}）：`,
  };

  return `${headerMap[locale]}${explanation}`;
}

/**
 * Detecta términos técnicos presentes en la pregunta o explicación para alimentar
 * el Glosario Contextual Intercultural.
 */
export function extractContextualGlossary(
  question: Pick<Question, 'statement' | 'explanation' | 'subject' | 'topic'>,
  locale: AppLocale
): GlossaryTerm[] {
  const pool = INTERCULTURAL_GLOSSARY[locale] || INTERCULTURAL_GLOSSARY.es;
  const combinedText = `${question.statement} ${question.explanation} ${question.subject} ${question.topic}`.toLowerCase();

  const matched = pool.filter((item) => {
    const keywords = item.termEs
      .toLowerCase()
      .split(/[\/\s,()]+/)
      .filter((w) => w.length > 3);
    return keywords.some((kw) => combinedText.includes(kw));
  });

  // Si no hay coincidencia léxica directa, devolvemos los 2 términos principales de la categoría correspondiente
  if (matched.length === 0) {
    return pool.slice(0, 2);
  }

  return matched.slice(0, 4);
}

/**
 * Adapta una pregunta completa al idioma activo, manteniendo intacta la validez
 * científica y matemática de sus fórmulas KaTeX y claves de respuesta.
 */
export function translateQuestionContent(
  question: Question,
  locale: AppLocale
): TranslatedQuestionContent {
  const matchedGlossary = extractContextualGlossary(question, locale);

  if (locale === 'es') {
    return {
      statement: question.statement,
      options: question.options,
      explanation: question.explanation,
      topic: question.topic,
      subject: question.subject,
      isFallbackToSpanish: false,
      matchedGlossary,
    };
  }

  const adaptedStmt = adaptStatementToLocale(question.statement, locale);
  const translatedSubject =
    SUBJECT_TRANSLATIONS[locale]?.[question.subject] || question.subject;

  const adaptedOptions = question.options.map((opt) => {
    let optText = opt.text;
    if (locale === 'nahuat') {
      optText = optText
        .replace(/^Verdadero\b/i, 'Yek / Kia (Verdadero)')
        .replace(/^Falso\b/i, 'Te Yek / Inte (Falso)');
    } else if (locale === 'lenca') {
      optText = optText
        .replace(/^Verdadero\b/i, 'Shi (Verdadero)')
        .replace(/^Falso\b/i, 'Ma-shi (Falso)');
    } else if (locale === 'en') {
      optText = optText
        .replace(/^Verdadero\b/i, 'True (Verdadero)')
        .replace(/^Falso\b/i, 'False (Falso)');
    } else if (locale === 'ar') {
      optText = optText
        .replace(/^Verdadero\b/i, 'صحيح (Verdadero)')
        .replace(/^Falso\b/i, 'خطأ (Falso)');
    } else if (locale === 'zh') {
      optText = optText
        .replace(/^Verdadero\b/i, '正确 (Verdadero)')
        .replace(/^Falso\b/i, '错误 (Falso)');
    }
    return { key: opt.key, text: optText };
  });

  return {
    statement: adaptedStmt.text,
    options: adaptedOptions,
    explanation: adaptExplanationToLocale(
      question.explanation,
      question.correctAnswer,
      locale
    ),
    topic: question.topic,
    subject: translatedSubject,
    isFallbackToSpanish: adaptedStmt.isFallback,
    matchedGlossary,
  };
}
