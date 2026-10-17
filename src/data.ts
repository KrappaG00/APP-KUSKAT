export type Institution = 'UES' | 'ANSP' | 'ASD' | 'AVANZO' | 'ENA' | 'ESCALAFON' | 'INGLES';

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
  ASD: [
    'Matemática',
    'Ciencias Naturales',
  ],
  AVANZO: [
    'Precálculo',
    'Ciudadanía y Valores',
    'Ciencia y Tecnología',
    'Lengua y Literatura',
    'Inglés',
  ],
  ENA: [
    'Matemáticas',
    'Química',
    'Biología',
    'Lenguaje',
  ],
  ESCALAFON: [
    'Formación General Pedagógica y Legislación',
    'Educación Parvularia',
    'Educación Básica (I y II Ciclo)',
    'Lenguaje y Literatura',
    'Matemática',
    'Ciencias Naturales',
    'Ciencias Sociales',
    'Inglés',
    'Educación Física',
    'Educación Especial',
    'Ciencias Comerciales',
  ],
  INGLES: [
    'A1 - Breakthrough / Beginner',
    'A2 - Waystage / Elementary',
    'B1 - Threshold / Intermediate',
    'B2 - Vantage / Upper-Intermediate',
    'C1 - Effective Operational Proficiency',
    'C2 - Mastery / Proficiency',
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
  // ==========================================
  // PREGUNTAS ASD (Jóvenes Talento)
  // ==========================================
  {
    id: 'asd-mat-5-1',
    number: 13,
    institution: 'ASD',
    subject: 'Matemática',
    topic: 'Divisibilidad y Múltiplos (5.° Grado)',
    statement: '¿Cuál es el mínimo común múltiplo (MCM) de $4$ y $6$?',
    options: [
      { key: 'A', text: '$12$' },
      { key: 'B', text: '$24$' },
      { key: 'C', text: '$8$' },
      { key: 'D', text: '$10$' },
    ],
    correctAnswer: 'A',
    explanation: 'Los múltiplos de $4$ son $4, 8, 12, 16, \\dots$ y los de $6$ son $6, 12, 18, \\dots$. El menor múltiplo común positivo es $12$.',
  },
  {
    id: 'asd-cie-5-1',
    number: 14,
    institution: 'ASD',
    subject: 'Ciencias Naturales',
    topic: 'La Materia y sus Propiedades (5.° Grado)',
    statement: '¿Qué estado de la materia tiene volumen constante pero adopta la forma del recipiente que lo contiene?',
    options: [
      { key: 'A', text: 'Sólido' },
      { key: 'B', text: 'Líquido' },
      { key: 'C', text: 'Gaseoso' },
      { key: 'D', text: 'Plasma' },
    ],
    correctAnswer: 'B',
    explanation: 'En los líquidos las moléculas pueden desplazarse unas sobre otras adaptándose al recipiente, manteniendo su volumen constante.',
  },
  {
    id: 'asd-mat-6-1',
    number: 15,
    institution: 'ASD',
    subject: 'Matemática',
    topic: 'Operaciones con Fracciones (6.° Grado)',
    statement: 'Calcula el producto de las fracciones: $\\frac{2}{3} \\times \\frac{4}{5}$:',
    options: [
      { key: 'A', text: '$\\frac{8}{15}$' },
      { key: 'B', text: '$\\frac{6}{8}$' },
      { key: 'C', text: '$\\frac{8}{5}$' },
      { key: 'D', text: '$\\frac{2}{5}$' },
    ],
    correctAnswer: 'A',
    explanation: 'En la multiplicación de fracciones se multiplican directamente numeradores y denominadores: $\\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$.',
  },
  {
    id: 'asd-cie-7-1',
    number: 16,
    institution: 'ASD',
    subject: 'Ciencias Naturales',
    topic: 'Estructura Atómica (7.° Grado)',
    statement: '¿Qué partículas subatómicas poseen carga eléctrica positiva y se ubican en el núcleo atómico?',
    options: [
      { key: 'A', text: 'Los electrones' },
      { key: 'B', text: 'Los protones' },
      { key: 'C', text: 'Los neutrones' },
      { key: 'D', text: 'Los fotones' },
    ],
    correctAnswer: 'B',
    explanation: 'Los protones poseen carga positiva $+1$ y residen en el núcleo atómico junto a los neutrones neutros.',
  },
  // ==========================================
  // PREGUNTAS AVANZO (Prueba Nacional 2025)
  // ==========================================
  {
    id: 'avanzo-pre-1',
    number: 1,
    institution: 'AVANZO',
    subject: 'Precálculo',
    topic: 'Álgebra y Ecuaciones Cuadráticas',
    statement: 'Determina las raíces de la ecuación cuadrática $x^2 - 7x + 12 = 0$:',
    options: [
      { key: 'A', text: '$x_1 = 3,\\; x_2 = 4$' },
      { key: 'B', text: '$x_1 = -3,\\; x_2 = -4$' },
      { key: 'C', text: '$x_1 = 2,\\; x_2 = 6$' },
      { key: 'D', text: '$x_1 = 1,\\; x_2 = 12$' },
    ],
    correctAnswer: 'A',
    explanation: 'Factorizando el trinomio cuadrático: $(x - 3)(x - 4) = 0$, de donde $x_1 = 3$ y $x_2 = 4$.',
  },
  {
    id: 'avanzo-ciu-1',
    number: 2,
    institution: 'AVANZO',
    subject: 'Ciudadanía y Valores',
    topic: 'Historia Reciente y Acuerdos de Paz',
    statement: '¿En qué fecha y lugar histórico se firmaron los Acuerdos de Paz que culminaron el conflicto armado salvadoreño?',
    options: [
      { key: 'A', text: '16 de enero de 1992 en el Castillo de Chapultepec, México' },
      { key: 'B', text: '15 de octubre de 1979 en San Salvador' },
      { key: 'C', text: '1 de junio de 1989 en San José, Costa Rica' },
      { key: 'D', text: '15 de septiembre de 1990 en Ginebra, Suiza' },
    ],
    correctAnswer: 'A',
    explanation: 'Los Acuerdos de Paz definitivos fueron firmados el 16 de enero de 1992 en el Castillo de Chapultepec, México, bajo los auspicios de la ONU.',
  },
  {
    id: 'avanzo-cie-1',
    number: 3,
    institution: 'AVANZO',
    subject: 'Ciencia y Tecnología',
    topic: 'Dinámica y Segunda Ley de Newton',
    statement: 'Si se aplica una fuerza neta de $30\\text{ N}$ a un cuerpo de $6\\text{ kg}$ de masa, ¿cuál es su aceleración?',
    options: [
      { key: 'A', text: '$5\\text{ m/s}^2$' },
      { key: 'B', text: '$180\\text{ m/s}^2$' },
      { key: 'C', text: '$24\\text{ m/s}^2$' },
      { key: 'D', text: '$36\\text{ m/s}^2$' },
    ],
    correctAnswer: 'A',
    explanation: 'Por la Segunda Ley de Newton: $a = \\frac{F}{m} = \\frac{30\\text{ N}}{6\\text{ kg}} = 5\\text{ m/s}^2$.',
  },
  {
    id: 'avanzo-len-1',
    number: 4,
    institution: 'AVANZO',
    subject: 'Lengua y Literatura',
    topic: 'Literatura Costumbrista Salvadoreña',
    statement: '¿Quién es el autor salvadoreño de la célebre obra costumbrista \'Cuentos de Barro\'?',
    options: [
      { key: 'A', text: 'Salvador Salazar Arrué (Salarrué)' },
      { key: 'B', text: 'Roque Dalton' },
      { key: 'C', text: 'Alberto Masferrer' },
      { key: 'D', text: 'Alfredo Espino' },
    ],
    correctAnswer: 'A',
    explanation: '\'Cuentos de Barro\' fue publicada en 1933 por Salarrué, retratando con ternura el lenguaje y la cosmovisión campesina salvadoreña.',
  },
  {
    id: 'avanzo-ing-1',
    number: 5,
    institution: 'AVANZO',
    subject: 'Inglés',
    topic: 'Simple Present Tense',
    statement: 'Choose the correct form: "She ________ English and Spanish every day at high school."',
    options: [
      { key: 'A', text: 'practices' },
      { key: 'B', text: 'practice' },
      { key: 'C', text: 'practicing' },
      { key: 'D', text: 'is practice' },
    ],
    correctAnswer: 'A',
    explanation: 'In Simple Present, third person singular subjects (he, she, it) require the verb ending in -s or -es (practices).',
  },
  // ==========================================
  // PREGUNTAS ENA (Escuela Nacional de Agricultura)
  // ==========================================
  {
    id: 'ena-mat-1',
    number: 1,
    institution: 'ENA',
    subject: 'Matemáticas',
    topic: 'Medidas de Superficie Agraria',
    statement: 'En El Salvador, ¿a cuántos metros cuadrados equivale aproximadamente una manzana ($1\\text{ mz}$) de terreno agrícola?',
    options: [
      { key: 'A', text: '$7,000\\text{ m}^2$' },
      { key: 'B', text: '$10,000\\text{ m}^2$' },
      { key: 'C', text: '$1,000\\text{ m}^2$' },
      { key: 'D', text: '$5,000\\text{ m}^2$' },
    ],
    correctAnswer: 'A',
    explanation: 'Una manzana de terreno equivale a $10,000\\text{ varas cuadradas}$, que en el sistema métrico decimal corresponde aproximadamente a $7,000\\text{ m}^2$ (exactamente $6,988.96\\text{ m}^2$).',
  },
  {
    id: 'ena-qui-1',
    number: 2,
    institution: 'ENA',
    subject: 'Química',
    topic: 'Macronutrientes NPK',
    statement: 'En fertilización agrícola, ¿qué elementos químicos esenciales para las plantas representan las siglas \'NPK\'?',
    options: [
      { key: 'A', text: 'Nitrógeno, Fósforo y Potasio' },
      { key: 'B', text: 'Níquel, Plomo y Kriptón' },
      { key: 'C', text: 'Sodio, Platino y Calcio' },
      { key: 'D', text: 'Nitrógeno, Flúor y Cloro' },
    ],
    correctAnswer: 'A',
    explanation: 'Las siglas NPK representan los tres macronutrientes primarios esenciales: Nitrógeno (N), Fósforo (P) y Potasio (K).',
  },
  {
    id: 'ena-bio-1',
    number: 3,
    institution: 'ENA',
    subject: 'Biología',
    topic: 'Organelos y Fotosíntesis',
    statement: '¿Qué organelo de las células vegetales contiene clorofila y realiza la fotosíntesis?',
    options: [
      { key: 'A', text: 'El cloroplasto' },
      { key: 'B', text: 'La mitocondria' },
      { key: 'C', text: 'El lisosoma' },
      { key: 'D', text: 'El aparato de Golgi' },
    ],
    correctAnswer: 'A',
    explanation: 'Los cloroplastos son los organelos especializados en capturar energía lumínica y transformarla en azúcares mediante la fotosíntesis.',
  },
  {
    id: 'ena-len-1',
    number: 4,
    institution: 'ENA',
    subject: 'Lenguaje',
    topic: 'Literatura Salvadoreña Costumbrista',
    statement: '¿Qué autor salvadoreño escribió la emblemática obra costumbrista \'Cuentos de Barro\'?',
    options: [
      { key: 'A', text: 'Salvador Salazar Arrué (Salarrué)' },
      { key: 'B', text: 'Alberto Masferrer' },
      { key: 'C', text: 'Roque Dalton' },
      { key: 'D', text: 'Alfredo Espino' },
    ],
    correctAnswer: 'A',
    explanation: 'Salarrué publicó \'Cuentos de Barro\' en 1933, recreando de forma lírica las vivencias y el habla del campesinado salvadoreño.',
  },
  // ==========================================
  // PREGUNTAS ESCALAFÓN DOCENTE (Ascenso Nivel 1)
  // ==========================================
  {
    id: 'escalafon-gen-1',
    number: 1,
    institution: 'ESCALAFON',
    subject: 'Formación General Pedagógica y Legislación',
    topic: 'Marco Legal Educativo',
    statement: '¿Cuál es el cuerpo legal salvadoreño que regula los deberes, derechos, escalafón docente y régimen disciplinario del magisterio nacional?',
    options: [
      { key: 'A', text: 'Ley de la Carrera Docente' },
      { key: 'B', text: 'Código de Trabajo' },
      { key: 'C', text: 'Ley General de Educación' },
      { key: 'D', text: 'Ley de Ética Gubernamental' },
    ],
    correctAnswer: 'A',
    explanation: 'La Ley de la Carrera Docente (Decreto Legislativo N.° 665) regula de manera especial las relaciones laborales, derechos, deberes y ascensos de nivel del personal docente en El Salvador.',
  },
  {
    id: 'escalafon-mat-1',
    number: 2,
    institution: 'ESCALAFON',
    subject: 'Matemática',
    topic: 'Didáctica de la Matemática ESMATE',
    statement: 'En la metodología curricular ESMATE del MINED, ¿cuál es el propósito de la fase de \'Trabajo Individual\' tras plantear el Problema Inicial?',
    options: [
      { key: 'A', text: 'Permitir al estudiante movilizar sus saberes previos y ensayar estrategias de solución autónomas' },
      { key: 'B', text: 'Dictar la fórmula correcta antes de que surjan dudas' },
      { key: 'C', text: 'Calificar sumativamente el cuaderno de ejercicios del día' },
      { key: 'D', text: 'Excluir a los estudiantes que no recuerdan conceptos de grados anteriores' },
    ],
    correctAnswer: 'A',
    explanation: 'La secuencia ESMATE fomenta el protagonismo del estudiante dando un tiempo indispensable para la indagación autónoma e hipótesis antes de la socialización y conclusión.',
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
