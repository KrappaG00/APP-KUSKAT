export type Institution = 'UES' | 'ANSP';

export interface Option {
  key: string;
  text: string;
}

export interface Question {
  id: string;
  number: number;
  institution: Institution;
  subject: string;
  topic: string;
  statement: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
}

export const SUBJECTS_BY_INSTITUTION: Record<Institution, string[]> = {
  UES: [
    'Matemática',
    'Física',
    'Química',
    'Biología',
    'Lenguaje y Literatura',
    'Estudios Sociales',
  ],
  ANSP: [
    'Derecho Constitucional',
    'Legislación Salvadoreña',
    'Matemática',
    'Razonamiento Lógico',
    'Geografía e Historia',
  ],
};

export const QUESTIONS_DATA: Question[] = [
  // ==========================================
  // PREGUNTAS UES (Admisión Universitaria)
  // ==========================================
  {
    id: 'ues-mat-1',
    number: 1,
    institution: 'UES',
    subject: 'Matemática',
    topic: 'Álgebra y Ecuaciones Cuadráticas',
    statement: 'Determina las raíces reales de la ecuación cuadrática $x^2 - 5x + 6 = 0$:',
    options: [
      { key: 'A', text: '$x_1 = 2$, $x_2 = 3$' },
      { key: 'B', text: '$x_1 = -2$, $x_2 = -3$' },
      { key: 'C', text: '$x_1 = 1$, $x_2 = 6$' },
      { key: 'D', text: '$x_1 = -1$, $x_2 = -6$' },
    ],
    correctAnswer: 'A',
    explanation: 'Factorizando el trinomio de la forma $x^2 + bx + c$: buscamos dos números que multiplicados den $6$ y sumados den $-5$. Dichos números son $-2$ y $-3$, por lo que $(x - 2)(x - 3) = 0$, obteniendo $x = 2$ y $x = 3$.',
  },
  {
    id: 'ues-mat-2',
    number: 2,
    institution: 'UES',
    subject: 'Matemática',
    topic: 'Trigonometría y Geometría',
    statement: 'En un triángulo rectángulo, un ángulo agudo mide $45°$ y la hipotenusa mide $4\\sqrt{2}\\text{ cm}$. ¿Cuánto mide cada uno de sus catetos?',
    options: [
      { key: 'A', text: '$2\\text{ cm}$' },
      { key: 'B', text: '$4\\text{ cm}$' },
      { key: 'C', text: '$8\\text{ cm}$' },
      { key: 'D', text: '$4\\sqrt{2}\\text{ cm}$' },
    ],
    correctAnswer: 'B',
    explanation: 'En un triángulo notable de $45° - 45°$, los catetos son congruentes ($a = b$) y la hipotenusa es $h = a\\sqrt{2}$. Si $h = 4\\sqrt{2}$, entonces cada cateto mide $a = 4\\text{ cm}$.',
  },
  {
    id: 'ues-fis-1',
    number: 3,
    institution: 'UES',
    subject: 'Física',
    topic: 'Cinemática (MRUV)',
    statement: 'Un automóvil parte del reposo con una aceleración constante de $a = 3\\text{ m/s}^2$. ¿Qué velocidad alcanza al cabo de $t = 6\\text{ s}$?',
    options: [
      { key: 'A', text: '$9\\text{ m/s}$' },
      { key: 'B', text: '$12\\text{ m/s}$' },
      { key: 'C', text: '$18\\text{ m/s}$' },
      { key: 'D', text: '$36\\text{ m/s}$' },
    ],
    correctAnswer: 'C',
    explanation: 'Aplicando la ecuación del MRUV $v_f = v_0 + a \\cdot t$. Como parte del reposo, $v_0 = 0$. Por lo tanto: $v_f = (3\\text{ m/s}^2)(6\\text{ s}) = 18\\text{ m/s}$.',
  },
  {
    id: 'ues-qui-1',
    number: 4,
    institution: 'UES',
    subject: 'Química',
    topic: 'Estructura Atómica y Enlace Químico',
    statement: 'El enlace formado por la transferencia completa de uno o más electrones de valencia de un metal a un no metal se clasifica como:',
    options: [
      { key: 'A', text: 'Enlace covalente apolar' },
      { key: 'B', text: 'Enlace iónico o electrovalente' },
      { key: 'C', text: 'Enlace covalente coordinado' },
      { key: 'D', text: 'Enlace metálico' },
    ],
    correctAnswer: 'B',
    explanation: 'El enlace iónico se produce por la atracción electrostática entre iones de carga opuesta, producto de la transferencia de electrones desde un átomo de baja electronegatividad (metal) hacia uno de alta electronegatividad (no metal).',
  },
  {
    id: 'ues-bio-1',
    number: 5,
    institution: 'UES',
    subject: 'Biología',
    topic: 'Biología Celular y Metabolismo',
    statement: '¿Cuál es el organelo celular responsable de la respiración celular y la síntesis principal de trifosfato de adenosina ($\\text{ATP}$)?',
    options: [
      { key: 'A', text: 'Ribosoma' },
      { key: 'B', text: 'Aparato de Golgi' },
      { key: 'C', text: 'Mitocondria' },
      { key: 'D', text: 'Retículo endoplasmático liso' },
    ],
    correctAnswer: 'C',
    explanation: 'La mitocondria es la central energética de la célula eucariota, donde se llevan a cabo el ciclo de Krebs y la fosforilación oxidativa para producir la mayor parte del $\\text{ATP}$.',
  },
  {
    id: 'ues-len-1',
    number: 6,
    institution: 'UES',
    subject: 'Lenguaje y Literatura',
    topic: 'Gramática y Sintaxis',
    statement: 'Identifica el tipo de oración compuesta en el enunciado: *"Los estudiantes que prepararon el temario aprobaron el examen con honores"*:',
    options: [
      { key: 'A', text: 'Coordinada adversativa' },
      { key: 'B', text: 'Subordinada adjetiva (o de relativo)' },
      { key: 'C', text: 'Subordinada adverbial de tiempo' },
      { key: 'D', text: 'Coordinada copulativa' },
    ],
    correctAnswer: 'B',
    explanation: 'La proposición "que prepararon el temario" está introducida por el pronombre relativo "que", tiene como antecedente al sustantivo "estudiantes" y funciona como modificador adjetivo especificativo.',
  },
  {
    id: 'ues-soc-1',
    number: 7,
    institution: 'UES',
    subject: 'Estudios Sociales',
    topic: 'Historia Contemporánea de El Salvador',
    statement: '¿En qué fecha y lugar histórico se firmaron los Acuerdos de Paz que pusieron fin a doce años de conflicto armado en El Salvador?',
    options: [
      { key: 'A', text: '16 de enero de 1992 en el Castillo de Chapultepec, México' },
      { key: 'B', text: '15 de octubre de 1979 en San Salvador, El Salvador' },
      { key: 'C', text: '1 de junio de 1989 en Ginebra, Suiza' },
      { key: 'D', text: '15 de septiembre de 1990 en San José, Costa Rica' },
    ],
    correctAnswer: 'A',
    explanation: 'Los Acuerdos de Paz de Chapultepec fueron rubricados el 16 de enero de 1992 en el Castillo de Chapultepec (Ciudad de México) entre el Gobierno salvadoreño y el FMLN, con mediación de la ONU.',
  },

  // ==========================================
  // PREGUNTAS ANSP (Prueba Cultural 2025-2026)
  // ==========================================
  {
    id: 'ansp-der-1',
    number: 8,
    institution: 'ANSP',
    subject: 'Derecho Constitucional',
    topic: 'Bases de la Organización del Estado',
    statement: 'De acuerdo con el Artículo 1 de la Constitución de la República de El Salvador, ¿qué principio fundamental rige la actividad del Estado?',
    options: [
      { key: 'A', text: 'La primacía de la economía de mercado y la recaudación fiscal.' },
      { key: 'B', text: 'La persona humana es el origen y el fin de la actividad del Estado.' },
      { key: 'C', text: 'La soberanía irrestricta de las corporaciones públicas.' },
      { key: 'D', text: 'El predominio absoluto del poder militar en tiempos de paz.' },
    ],
    correctAnswer: 'B',
    explanation: 'El Art. 1, inciso primero de la Constitución salvadoreña establece textualmente: "El Salvador reconoce a la persona humana como el origen y el fin de la actividad del Estado, que está organizado para la consecución de la justicia, de la seguridad jurídica y del bien común".',
  },
  {
    id: 'ansp-leg-1',
    number: 9,
    institution: 'ANSP',
    subject: 'Legislación Salvadoreña',
    topic: 'Doctrina y Principios Policiales',
    statement: 'Según la normativa institucional de la ANSP y la PNC, ¿cuál es el principio de actuación rector del cuerpo policial respecto al uso de la fuerza?',
    options: [
      { key: 'A', text: 'Uso discrecional y punitivo en cualquier circunstancia.' },
      { key: 'B', text: 'Legalidad, necesidad, proporcionalidad y respeto a los Derechos Humanos.' },
      { key: 'C', text: 'Fuerza letal preventiva automática ante faltas leves.' },
      { key: 'D', text: 'Delegación de la fuerza en entidades privadas.' },
    ],
    correctAnswer: 'B',
    explanation: 'Los estándares policiales y la Ley Orgánica establecen que el uso de la fuerza física y letal se rige de manera estricta bajo los principios internacionales de legalidad, necesidad absoluta, estricta proporcionalidad y preservación de los DDHH.',
  },
  {
    id: 'ansp-mat-1',
    number: 10,
    institution: 'ANSP',
    subject: 'Matemática',
    topic: 'Aritmética y Porcentajes',
    statement: 'Un equipo de seguridad tiene un costo de $\$80.00$. Si se le aplica un descuento promocional del $25\\%$, ¿cuál es el precio final a pagar?',
    options: [
      { key: 'A', text: '$\$55.00$' },
      { key: 'B', text: '$\$60.00$' },
      { key: 'C', text: '$\$65.00$' },
      { key: 'D', text: '$\$70.00$' },
    ],
    correctAnswer: 'B',
    explanation: 'El monto del descuento es: $80 \\times 0.25 = \\$20.00$. Restando este valor del precio original: $80 - 20 = \\$60.00$.',
  },
  {
    id: 'ansp-log-1',
    number: 11,
    institution: 'ANSP',
    subject: 'Razonamiento Lógico',
    topic: 'Sucesiones y Patrones Numéricos',
    statement: '¿Cuál es el número que continúa lógicamente en la siguiente secuencia: $3,\\; 6,\\; 12,\\; 24,\\; 48,\\; \\dots$?',
    options: [
      { key: 'A', text: '$72$' },
      { key: 'B', text: '$84$' },
      { key: 'C', text: '$96$' },
      { key: 'D', text: '$120$' },
    ],
    correctAnswer: 'C',
    explanation: 'Se trata de una progresión geométrica con razón común $r = 2$ (cada término es el doble del anterior): $48 \\times 2 = 96$.',
  },
  {
    id: 'ansp-geo-1',
    number: 12,
    institution: 'ANSP',
    subject: 'Geografía e Historia',
    topic: 'Geografía Física de El Salvador',
    statement: '¿Cuál es el río más largo y con mayor cuenca hidrográfica del territorio salvadoreño?',
    options: [
      { key: 'A', text: 'Río Paz' },
      { key: 'B', text: 'Río Goascorán' },
      { key: 'C', text: 'Río Lempa' },
      { key: 'D', text: 'Río Grande de San Miguel' },
    ],
    correctAnswer: 'C',
    explanation: 'El Río Lempa es el curso fluvial más extenso de El Salvador y Centroamérica septentrional; es vital para la generación hidroeléctrica, suministro de agua potable y agricultura nacional.',
  },
];

/**
 * Genera código LaTeX estándar (.tex) compilable en Overleaf o TeX Live
 */
export function generateLatexDocument(questions: Question[], title: string): string {
  const sanitize = (text: string) => {
    return text.replace(/%/g, '\\%').replace(/#/g, '\\#');
  };

  let tex = `\\documentclass[11pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{geometry}
\\usepackage{enumitem}
\\usepackage{xcolor}
\\usepackage{tcolorbox}
\\usepackage{fancyhdr}

\\geometry{top=2cm,bottom=2.5cm,left=2cm,right=2cm}
\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[L]{\\textbf{KUSKAT} • Banco Maestro de Preguntas}
\\fancyhead[R]{${title}}
\\fancyfoot[C]{\\thepage}

\\title{\\textbf{KUSKAT: Banco Maestro de Preguntas}\\\\ \\large ${title}}
\\author{Plataforma Académica KUSKAT \\\\ Desarrollado por Yeferson E. Perez}
\\date{Convocatoria 2026}

\\begin{document}
\\maketitle

\\begin{tcolorbox}[colback=blue!5!white,colframe=blue!75!black,title=Instrucciones Generales]
Lea cuidadosamente cada reactivo y seleccione la opción correcta. Documento generado automáticamente por la plataforma KUSKAT.
\\end{tcolorbox}

\\section*{Cuestionario de Evaluación}

\\begin{enumerate}[label=\\textbf{\\arabic*.}]
`;

  questions.forEach((q) => {
    tex += `\\item \\textbf{[${q.institution} - ${q.subject}]} \\\\
${sanitize(q.statement)}
\\begin{enumerate}[label=\\textbf{\\Alph*.}]
`;
    q.options.forEach((opt) => {
      tex += `  \\item ${sanitize(opt.text)}\n`;
    });
    tex += `\\end{enumerate}
\\vspace{0.3cm}
`;
  });

  tex += `\\end{enumerate}

\\newpage
\\section*{Clave de Respuestas y Justificaciones Pedagógicas}

\\begin{enumerate}[label=\\textbf{\\arabic*.}]
`;

  questions.forEach((q) => {
    tex += `\\item \\textbf{Respuesta Correcta: [${q.correctAnswer}]} \\\\
\\textit{Justificación:} ${sanitize(q.explanation)}
\\vspace{0.2cm}
`;
  });

  tex += `\\end{enumerate}

\\vfill
\\begin{center}
\\small
\\textbf{KUSKAT © 2026 • Todos los derechos reservados} \\\\
Contacto oficial: +503 7657 4463 • Instagram: @Kuskat.es
\\end{center}

\\end{document}
`;

  return tex;
}
