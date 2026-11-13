import {
  CurriculumUnit,
  GradeLevelId,
  PscerLesson,
  SubjectCurriculum,
  SubjectId,
  TomoNumber,
} from './types';
import {
  createCurriculumUnit,
  createPscerLesson,
  generate50UnitQuestions,
  QuestionArchetype,
  SUBJECT_CODE_MAP,
} from './grades/gradeHelpers';
import { getResourcesByGradeAndSubject } from './minedResourcesManifest';
import { MINED_SUBJECT_METADATA } from './catalog';


interface SubjectUnitBlueprint {
  unitNumber: number;
  tomo: TomoNumber;
  title: string;
  summary: string;
  bookRef: string;
  competencies: string[];
  lessonTitle: string;
  domainConcept: string;
  normativeFramework: string;
  analyticalMethod: string;
  keyFormulaLatex: string;
  applicationContext: string;
  evaluationMetric: string;
  archetypeThemes: [
    { topic: string; conceptA: string; conceptB: string; indicator: string; rule: string },
    { topic: string; conceptA: string; conceptB: string; indicator: string; rule: string },
    { topic: string; conceptA: string; conceptB: string; indicator: string; rule: string },
    { topic: string; conceptA: string; conceptB: string; indicator: string; rule: string },
    { topic: string; conceptA: string; conceptB: string; indicator: string; rule: string }
  ];
}

const GRADE_CODE_MAP: Record<GradeLevelId, string> = {
  '1-grado': '1G',
  '2-grado': '2G',
  '3-grado': '3G',
  '4-grado': '4G',
  '5-grado': '5G',
  '6-grado': '6G',
  '7-grado': '7G',
  '8-grado': '8G',
  '9-grado': '9G',
  '1-bachillerato': '1B',
  '2-bachillerato': '2B',
};

const GRADE_LABEL_MAP: Record<GradeLevelId, string> = {
  '1-grado': '1.° Grado de Educación Básica',
  '2-grado': '2.° Grado de Educación Básica',
  '3-grado': '3.° Grado de Educación Básica',
  '4-grado': '4.° Grado de Educación Básica',
  '5-grado': '5.° Grado de Educación Básica',
  '6-grado': '6.° Grado de Educación Básica',
  '7-grado': '7.° Grado de Tercer Ciclo',
  '8-grado': '8.° Grado de Tercer Ciclo',
  '9-grado': '9.° Grado de Tercer Ciclo',
  '1-bachillerato': '1.° Año de Bachillerato (Educación Media)',
  '2-bachillerato': '2.° Año de Bachillerato (Educación Media)',
};

const SUBJECT_META: Record<
  Exclude<SubjectId, 'matematica-esmate'>,
  { name: string; shortName: string; slugPrefix: string }
> = {
  'lenguaje-eslengua': {
    name: 'Lengua y Literatura / Comunicación (ESLENGUA)',
    shortName: 'ESLENGUA',
    slugPrefix: 'len',
  },
  'ciencia-tecnologia': {
    name: 'Ciencia y Tecnología',
    shortName: 'Ciencia y Tecnología',
    slugPrefix: 'cie',
  },
  'ciudadania-valores': {
    name: 'Ciudadanía y Valores',
    shortName: 'Ciudadanía y Valores',
    slugPrefix: 'ciu',
  },
  'educacion-artistica': {
    name: 'Educación Artística (Artes)',
    shortName: 'Artes',
    slugPrefix: 'art',
  },
  'educacion-fisica': {
    name: 'Desarrollo Corporal y Educación Física',
    shortName: 'Educación Física',
    slugPrefix: 'edf',
  },
  'educacion-financiera': {
    name: 'Educación Financiera (Finanzas y Economía)',
    shortName: 'Finanzas y Economía',
    slugPrefix: 'fin',
  },
};

function buildSubstantiveLesson(
  gradeId: GradeLevelId,
  subjectId: Exclude<SubjectId, 'matematica-esmate'>,
  bp: SubjectUnitBlueprint
): PscerLesson {
  const gradeLabel = GRADE_LABEL_MAP[gradeId];
  const subjMeta = SUBJECT_META[subjectId];
  const lessonId = `${gradeId}-${subjMeta.slugPrefix}-u${bp.unitNumber}-l1`;

  const problema = [
    `En el desarrollo curricular de ${gradeLabel} dentro de la asignatura de ${subjMeta.name}, los equipos estudiantiles analizan un estudio de caso institucional documentado en ${bp.bookRef} sobre "${bp.title}".`,
    `El desafío técnico consiste en articular el eje conceptual de ${bp.domainConcept} con las disposiciones de ${bp.normativeFramework}, aplicando el método de ${bp.analyticalMethod} en el contexto salvadoreño de ${bp.applicationContext}.`,
    `Durante una jornada de evaluación formativa de $N = 40$ participantes organizada en $k = 5$ comisiones de trabajo colaborativo (con $n = \\frac{40}{5} = 8$ integrantes por comisión), se solicita verificar el indicador de desempeño ${bp.evaluationMetric} mediante la relación formal ${bp.keyFormulaLatex}.`,
    `¿Cómo debe estructurarse el análisis técnico, la validación documental y la toma de decisiones fundamentada para resolver el caso con rigor académico según los lineamientos del Ministerio de Educación, Ciencia y Tecnología (MINED)?`,
  ].join(' ');

  const solucion = [
    `**Fase 1 (Diagnóstico conceptual y delimitación curricular):** Se identifica que el núcleo temático "${bp.lessonTitle}" pertenece a la Unidad ${bp.unitNumber} de ${gradeLabel} (${bp.bookRef}). El estudio riguroso de ${bp.domainConcept} exige distinguir entre las variables primarias de observación y los criterios normativos establecidos en ${bp.normativeFramework}. Al organizar las $k = 5$ comisiones de $n = 8$ estudiantes ($N = k \\times n = 40$), cada equipo registra evidencias empíricas y textuales verificables dentro de ${bp.applicationContext}.`,
    `**Fase 2 (Aplicación del método analítico y modelación cuantitativa):** Siguiendo el procedimiento de ${bp.analyticalMethod}, se sistematizan los datos recolectados y se evalúa la expresión de referencia ${bp.keyFormulaLatex}. Este modelo permite cuantificar la consistencia del indicador ${bp.evaluationMetric}, asegurando que al menos el $85\\%$ de los criterios técnicos ($0.85 \\times 40 = 34$ registros validados) cumplan con los estándares de coherencia, pertinencia territorial y exactitud metodológica exigidos por el MINED.`,
    `**Fase 3 (Contraste de hipótesis y verificación institucional):** Se contrastan los hallazgos de cada comisión frente a las fuentes oficiales salvadoreñas e internacionales autorizadas (${bp.normativeFramework}). Cualquier desviación o interpretación fragmentaria se corrige mediante una matriz de trazabilidad que vincula cada conclusión con su evidencia documental, garantizando una resolución integral, transparente y reproducible en el aula.`,
  ].join(' ');

  const conclusion = [
    `**Síntesis Doctrinaria y Normativa (${subjMeta.shortName} - ${gradeLabel}):** El dominio de "${bp.title}" y específicamente de la lección "${bp.lessonTitle}" constituye un pilar formativo indispensable dentro de ${bp.bookRef}.`,
    `En primer lugar, la comprensión profunda de ${bp.domainConcept} permite al estudiantado superar la memorización mecánica y transitar hacia el pensamiento crítico aplicado a ${bp.applicationContext}.`,
    `En segundo lugar, la articulación con ${bp.normativeFramework} asegura que toda práctica académica y ciudadana se fundamente en marcos institucionales legítimos del Estado salvadoreño y organismos técnicos reconocidos.`,
    `En tercer lugar, la ejecución sistemática de ${bp.analyticalMethod} apoyada en la relación formal ${bp.keyFormulaLatex} proporciona un criterio objetivo para auditar el indicador ${bp.evaluationMetric}, consolidando las competencias de investigación, comunicación rigurosa y resolución ética de problemas complejos en ${gradeLabel}.`,
  ].join(' ');

  const examples: string[] = bp.archetypeThemes.map((theme, idx) => {
    const exNum = idx + 1;
    const baseVal = (idx + 2) * 12;
    const targetVal = Math.round(baseVal * 0.75);
    return [
      `**Ejemplo Resuelto ${exNum} (${theme.topic} en ${gradeLabel}):** En un proyecto escolar de ${subjMeta.shortName} fundamentado en ${bp.bookRef}, se analiza la interacción entre ${theme.conceptA} y ${theme.conceptB} sobre una muestra de $${baseVal}$ registros documentales del contexto de ${bp.applicationContext}.`,
      `Paso 1: Identificar el criterio rector definido por ${theme.rule} dentro del marco de ${bp.normativeFramework}, delimitando las variables observables de ${theme.conceptA}.`,
      `Paso 2: Aplicar el procedimiento de ${bp.analyticalMethod} utilizando la proporción técnica $$R_${exNum} = \\frac{${targetVal}}{${baseVal}} = 0.75$$ equivalente al $75\\%$ de cumplimiento en el indicador ${theme.indicator}, validando su correspondencia con ${bp.keyFormulaLatex}.`,
      `Paso 3: Contrastar el resultado con las exigencias de ${theme.conceptB} y redactar el dictamen técnico verificando que los $${targetVal}$ casos principales satisfacen íntegramente el estándar del MINED.`,
      `Solución: Se comprueba una efectividad del $75\\%$ ($${targetVal}$ de $${baseVal}$ registros validados), consolidando la articulación entre ${theme.conceptA} y ${theme.conceptB} conforme a ${theme.rule}.`,
    ].join(' ');
  });

  const resuelve = [
    {
      exercise: `En una actividad evaluada de ${subjMeta.shortName} (${gradeLabel}, ${bp.bookRef}), un equipo revisa $60$ evidencias sobre ${bp.domainConcept} aplicando ${bp.analyticalMethod}. Si el criterio de aprobación exige al menos el $80\\%$ de validez según ${bp.keyFormulaLatex}, ¿cuántas evidencias válidas como mínimo deben certificarse y cómo se vinculan con ${bp.evaluationMetric}?`,
      hint: `Multiplica el total de evidencias ($60$) por la proporción decimal ($0.80$) y relaciona el resultado con ${bp.normativeFramework}.`,
      answer: `Deben certificarse como mínimo $48$ evidencias válidas ($60 \\times 0.80 = 48$), garantizando la trazabilidad del indicador ${bp.evaluationMetric}.`,
    },
    {
      exercise: `Explica cómo se integran ${bp.archetypeThemes[0].conceptA} y ${bp.archetypeThemes[1].conceptA} al resolver una situación práctica de ${bp.applicationContext} en la Unidad ${bp.unitNumber} ("${bp.title}"), cumpliendo con ${bp.normativeFramework}.`,
      hint: `Analiza la secuencia de ${bp.analyticalMethod} y la regla ${bp.archetypeThemes[0].rule}.`,
      answer: `Se integran diagnosticando primero ${bp.archetypeThemes[0].conceptA} bajo la regla de ${bp.archetypeThemes[0].rule} y verificando luego ${bp.archetypeThemes[1].conceptA} mediante el indicador ${bp.evaluationMetric}.`,
    },
    {
      exercise: `Si en dos secciones de ${gradeLabel} se evalúan $35$ y $45$ estudios de caso sobre "${bp.lessonTitle}" con una tasa de logro del $90\\%$, determina el total de estudios aprobados empleando la propiedad distributiva $0.90 \\times (35 + 45)$ e interpreta su impacto en ${bp.applicationContext}.`,
      hint: `Suma primero $35 + 45 = 80$ y multiplica por $0.90$.`,
      answer: `El total es de $72$ estudios de caso aprobados ($0.90 \\times 80 = 72$), demostrando dominio alto en ${bp.domainConcept}.`,
    },
  ];

  return createPscerLesson(
    lessonId,
    '1.1',
    bp.lessonTitle,
    problema,
    solucion,
    conclusion,
    examples[0],
    resuelve,
    examples
  );
}

function buildUnitArchetypes(
  gradeId: GradeLevelId,
  subjectId: Exclude<SubjectId, 'matematica-esmate'>,
  bp: SubjectUnitBlueprint
): QuestionArchetype[] {
  const gradeLabel = GRADE_LABEL_MAP[gradeId];
  const subjMeta = SUBJECT_META[subjectId];

  const archetypes: QuestionArchetype[] = [];

  for (let tIdx = 0; tIdx < bp.archetypeThemes.length; tIdx++) {
    const theme = bp.archetypeThemes[tIdx];

    // Archetype Pair A: Conceptual & Normative Analysis
    archetypes.push({
      generate: (variation: number, qIndex: number) => {
        const caseNumber = variation * 10 + tIdx + 1;
        const sampleSize = (variation + 2) * 15;
        const validCount = Math.round(sampleSize * 0.8);
        return {
          statement: `[Caso ${caseNumber} - ${subjMeta.shortName} ${gradeLabel}] Al analizar "${theme.topic}" dentro de la Unidad ${bp.unitNumber} (${bp.title}), se examinan $${sampleSize}$ registros del contexto de ${bp.applicationContext} de los cuales $${validCount}$ cumplen con ${theme.rule}. Según ${bp.bookRef} y ${bp.normativeFramework}, ¿cuál es el fundamento técnico que articula correctamente ${theme.conceptA} con ${theme.conceptB}?`,
          options: [
            `Aplicar ${bp.analyticalMethod} verificando el indicador ${theme.indicator} ($\\frac{${validCount}}{${sampleSize}} = 80\\%$) conforme a ${theme.rule} y ${bp.normativeFramework}`,
            `Omitir la validación de ${theme.conceptA} y sustituir ${theme.rule} por una estimación subjetiva sin respaldo documental en ${bp.bookRef}`,
            `Aislar ${theme.conceptB} descartando el contexto de ${bp.applicationContext} y reduciendo la muestra a valores no verificables`,
            `Invertir la relación entre ${theme.conceptA} y ${theme.indicator} ignorando las directrices oficiales del MINED para ${gradeLabel}`,
          ],
          correctAnswer: 'A',
          explanation: `De acuerdo con ${bp.bookRef} (${gradeLabel}), el estudio de ${theme.topic} exige aplicar ${bp.analyticalMethod} para vincular ${theme.conceptA} y ${theme.conceptB}, verificando el cumplimiento del $80\\%$ ($\\frac{${validCount}}{${sampleSize}}$) en ${theme.indicator} bajo ${theme.rule}.`,
        };
      },
    });

    // Archetype Pair B: Quantitative & Procedural Application in Discipline
    archetypes.push({
      generate: (variation: number, qIndex: number) => {
        const groupCount = variation + 3;
        const itemsPerGroup = (tIdx + 2) * 4;
        const totalItems = groupCount * itemsPerGroup;
        const wrongA = totalItems + itemsPerGroup;
        const wrongB = Math.max(4, totalItems - itemsPerGroup);
        const wrongC = groupCount + itemsPerGroup;
        return {
          statement: `[Aplicación ${qIndex} - ${bp.lessonTitle}] En un laboratorio pedagógico de ${subjMeta.name} (${gradeLabel}), se organizan $${groupCount}$ equipos para evaluar "${theme.topic}" mediante el indicador ${theme.indicator}. Si cada equipo sistematiza $${itemsPerGroup}$ evidencias verificadas bajo ${theme.rule} (${bp.keyFormulaLatex}), ¿cuántas evidencias totales se consolidan y qué principio de ${bp.domainConcept} se comprueba?`,
          options: [
            `Se consolidan $${totalItems}$ evidencias ($${groupCount} \\times ${itemsPerGroup} = ${totalItems}$), comprobando la consistencia entre ${theme.conceptA} y ${theme.conceptB}`,
            `Se consolidan $${wrongA}$ evidencias al duplicar arbitrariamente un equipo fuera del protocolo de ${bp.analyticalMethod}`,
            `Se consolidan $${wrongB}$ evidencias al excluir un bloque completo de observación de ${theme.indicator}`,
            `Se consolidan $${wrongC}$ evidencias al sumar linealmente equipos y registros sin aplicar la relación multiplicativa`,
          ],
          correctAnswer: 'A',
          explanation: `Al multiplicar los $${groupCount}$ equipos por las $${itemsPerGroup}$ evidencias validadas se obtienen $${totalItems}$ evidencias ($${groupCount} \\times ${itemsPerGroup} = ${totalItems}$), cumpliendo el estándar de ${bp.evaluationMetric} en ${bp.bookRef}.`,
        };
      },
    });
  }

  return archetypes;
}

function createSubjectBlueprintsForGrade(
  gradeId: GradeLevelId,
  subjectId: Exclude<SubjectId, 'matematica-esmate'>
): SubjectUnitBlueprint[] {
  const gradeLabel = GRADE_LABEL_MAP[gradeId];

  if (subjectId === 'lenguaje-eslengua') {
    const isCicloI = ['1-grado', '2-grado', '3-grado'].includes(gradeId);
    const isMedia = ['1-bachillerato', '2-bachillerato'].includes(gradeId);
    const bookTitle = isCicloI
      ? `Libro de Texto y Cuadernillo de Lectoescritura Comunicación / ESLENGUA MINED (${gradeLabel})`
      : `Libro de Texto Oficial Lengua y Literatura ESLENGUA MINED (${gradeLabel})`;

    return [
      {
        unitNumber: 1,
        tomo: 1,
        title: isCicloI
          ? 'Comunicación Oral, Conciencia Fonológica y Comprensión Lectora Inicial'
          : isMedia
          ? 'Literatura Clásica, Retórica Discursiva y Hermenéutica Textual'
          : 'Comprensión Lectora, Tipologías Textuales y Coherencia Discursiva',
        summary: `Estudio sistemático de la comprensión lectora, estructura del discurso, propiedades textuales y análisis literario conforme al programa oficial ESLENGUA del MINED para ${gradeLabel}.`,
        bookRef: `${bookTitle}, Tomo 1`,
        competencies: [
          'Comprende e interpreta textos literarios y no literarios identificando su estructura, propósito comunicativo e inferencias pragmáticas.',
          'Produce discursos orales y escritos aplicando las propiedades de coherencia, cohesión, adecuación y corrección gramatical según la norma estándar.',
        ],
        lessonTitle: isCicloI
          ? 'Código Alfabético, Decodificación Fluida y Secuencia Narrativa'
          : 'Estructura Macroestructural del Texto, Inferencia Pragmática y Figuras Literarias',
        domainConcept: 'la macroestructura semántica, la progresión temática y los niveles de comprensión lectora (literal, inferencial y crítico)',
        normativeFramework: 'el Programa de Estudio de Lengua y Literatura (ESLENGUA) del MINED y los estándares del Marco Común de Referencia para la competencia comunicativa',
        analyticalMethod: 'el análisis estructural del discurso, la segmentación sintáctica y la verificación de marcadores discursivos',
        keyFormulaLatex: '$$I_c = \\frac{\\text{Proposiciones Coherentes Validadas}}{\\text{Total de Unidades Textuales}} \\times 100\\%$$',
        applicationContext: 'la lectura crítica de textos literarios salvadoreños, crónicas periodísticas y documentos académicos oficiales',
        evaluationMetric: 'Índice de Coherencia y Comprensión Lectora (ICCL)',
        archetypeThemes: [
          {
            topic: 'Macroestructura y tema central del texto',
            conceptA: 'la idea principal explícita e implícita',
            conceptB: 'la jerarquía de ideas secundarias argumentativas',
            indicator: 'precisión en la síntesis macroestructural',
            rule: 'la macrorregla de supresión, generalización y construcción textual de ESLENGUA',
          },
          {
            topic: 'Cohesión léxica y conectores discursivos',
            conceptA: 'los marcadores de causa, consecuencia y oposición',
            conceptB: 'la correferencia pronominal y sustitución sinonímica',
            indicator: 'continuidad referencial entre párrafos',
            rule: 'el principio de cohesión morfosintáctica y progresión temática',
          },
          {
            topic: 'Análisis de géneros literarios y figuras retóricas',
            conceptA: 'la voz narrativa o yo lírico en la obra literaria',
            conceptB: 'los recursos estilísticos (metáfora, símil, hipérbole y anáfora)',
            indicator: 'interpretación estética y simbólica del texto',
            rule: 'la convención de lectura literaria e intertextualidad del programa MINED',
          },
          {
            topic: 'Inferencia pragmática y actitud del hablante',
            conceptA: 'la intención comunicativa del emisor y el contexto sociocultural',
            conceptB: 'los actos de habla directos e indirectos en el discurso',
            indicator: 'validez de las inferencias pragmáticas formuladas',
            rule: 'el modelo de adecuación pragmática al destinatario y situación comunicativa',
          },
          {
            topic: 'Normativa ortográfica y sintaxis oracional',
            conceptA: 'la concordancia gramatical entre sujeto y predicado verbal',
            conceptB: 'las reglas de acentuación gráfica y puntuación delimitadora',
            indicator: 'corrección idiomática en la producción escrita',
            rule: 'la normativa ortográfica y gramatical vigente en los textos oficiales ESLENGUA',
          },
        ],
      },
      {
        unitNumber: 2,
        tomo: 2,
        title: isCicloI
          ? 'Producción Escrita, Textos Informativos y Expresión Dialógica'
          : isMedia
          ? 'Literatura Salvadoreña y Latinoamericana, Ensayo Argumentativo y Crítica de Medios'
          : 'Argumentación Escrita, Investigación Documental y Literatura Salvadoreña',
        summary: `Desarrollo de la producción textual argumentativa y expositiva, investigación con fuentes confiables y apreciación de la tradición literaria salvadoreña en ${gradeLabel}.`,
        bookRef: `${bookTitle}, Tomo 2`,
        competencies: [
          'Redacta textos expositivos y argumentativos integrando tesis, argumentos de autoridad y contraargumentos verificables.',
          'Analiza obras representativas de la literatura salvadoreña y universal reconociendo su contexto histórico y valor cultural.',
        ],
        lessonTitle: 'Construcción del Texto Argumentativo, Citación Documental y Tradición Literaria',
        domainConcept: 'la estructura argumentativa (tesis, base, garantía y respaldo) y la recepción crítica de la literatura nacional',
        normativeFramework: 'las Guías Metodológicas y Libros de Texto ESLENGUA del Ministerio de Educación, Ciencia y Tecnología (MINED)',
        analyticalMethod: 'la planificación retórica, la revisión textual multinivel y el contraste de fuentes primarias',
        keyFormulaLatex: '$$S_a = \\frac{\\text{Argumentos con Evidencia Verificable}}{\\text{Total de Premisas del Ensayo}} \\times 100\\%$$',
        applicationContext: 'el debate académico escolar, el ensayo literario y el análisis de medios de comunicación en El Salvador',
        evaluationMetric: 'Solidez Argumentativa y Rigor Documental (SARD)',
        archetypeThemes: [
          {
            topic: 'Tesis y estructura del texto argumentativo',
            conceptA: 'la formulación de una tesis debatible y clara',
            conceptB: 'el desarrollo de argumentos lógicos y empíricos de respaldo',
            indicator: 'consistencia entre tesis, premisas y conclusión',
            rule: 'el esquema de planificación, textualización y revisión de ESLENGUA',
          },
          {
            topic: 'Falacias argumentativas y pensamiento crítico',
            conceptA: 'la detección de generalizaciones apresuradas y argumentos ad hominem',
            conceptB: 'la validación de evidencias estadísticas e institucionales',
            indicator: 'rigor lógico del discurso oral y escrito',
            rule: 'el criterio de validez dialéctica y honestidad intelectual',
          },
          {
            topic: 'Literatura salvadoreña e identidad cultural',
            conceptA: 'el costumbrismo, realismo crítico y lírica en El Salvador',
            conceptB: 'la representación del entorno social e histórico nacional',
            indicator: 'contextualización histórico-literaria de la obra',
            rule: 'el canon curricular de lectura literaria establecido por el MINED',
          },
          {
            topic: 'Investigación documental y síntesis de información',
            conceptA: 'la selección de fuentes institucionales y académicas verificadas',
            conceptB: 'la paráfrasis constructiva y el uso de organizadores gráficos',
            indicator: 'trazabilidad y fidelidad de las referencias utilizadas',
            rule: 'el protocolo de integridad académica y citación documental',
          },
          {
            topic: 'Oratoria, debate y comunicación multimodal',
            conceptA: 'la articulación prosódica, dicción y lenguaje no verbal',
            conceptB: 'la integración de recursos visuales y digitales de apoyo',
            indicator: 'eficacia persuasiva y respeto a los turnos de habla',
            rule: 'las pautas de cortesía comunicativa y debate moderado en el aula',
          },
        ],
      },
    ];
  }

  if (subjectId === 'ciencia-tecnologia') {
    const isPrimariaBaja = ['1-grado'].includes(gradeId);
    const bookTitle = isPrimariaBaja
      ? `Programa Oficial de Ciencia y Tecnología MINED (${gradeLabel})`
      : `Libro de Texto y Cuaderno de Ejercicios de Ciencia y Tecnología MINED (${gradeLabel})`;

    return [
      {
        unitNumber: 1,
        tomo: 1,
        title: 'Indagación Científica, Propiedades de la Materia y Transformaciones de la Energía',
        summary: `Aplicación del método de indagación científica, medición en el Sistema Internacional (SI), estructura de la materia y conservación de la energía según el currículo de Ciencia y Tecnología del MINED para ${gradeLabel}.`,
        bookRef: `${bookTitle}, Unidad 1`,
        competencies: [
          'Aplica el método de indagación científica formulando hipótesis verificables, controlando variables y analizando magnitudes físicas en el Sistema Internacional.',
          'Explica las propiedades físico-químicas de la materia y las transformaciones de la energía mediante modelos cuantitativos y experimentales.',
        ],
        lessonTitle: 'Magnitudes Físicas, Estados de Agregación y Conservación de la Energía',
        domainConcept: 'la cuantificación experimental de variables físicas, los cambios de estado de la materia y el balance energético en sistemas cerrados y abiertos',
        normativeFramework: 'los Libros de Texto y Guías Metodológicas de Ciencia y Tecnología del MINED y las normas metrológicas del Sistema Internacional de Unidades (SI)',
        analyticalMethod: 'el diseño experimental con control de variables, el análisis dimensional y el cálculo de incertidumbre y rendimiento energético',
        keyFormulaLatex: '$$\\eta = \\frac{E_{\\text{útil}}}{E_{\\text{suministrada}}} \\times 100\\%, \\quad \\rho = \\frac{m}{V}$$',
        applicationContext: 'los laboratorios escolares de ciencias naturales, el uso eficiente de la energía eléctrica y los procesos productivos en El Salvador',
        evaluationMetric: 'Exactitud Experimental y Balance Energético (EEBE)',
        archetypeThemes: [
          {
            topic: 'Método científico y control de variables experimentales',
            conceptA: 'la variable independiente manipulada en el diseño experimental',
            conceptB: 'la variable dependiente medida y las variables controladas constantes',
            indicator: 'reproducibilidad y validez interna del experimento escolar',
            rule: 'el protocolo de indagación científica del currículo de Ciencia y Tecnología MINED',
          },
          {
            topic: 'Sistema Internacional de Unidades (SI) y densidad de la materia',
            conceptA: 'la relación entre masa ($m$ en $\\text{kg}$ o $\\text{g}$) y volumen ($V$ en $\\text{m}^3$ o $\\text{cm}^3$)',
            conceptB: 'el cálculo de la densidad $\\rho = \\frac{m}{V}$ como propiedad intensiva',
            indicator: 'homogeneidad dimensional y precisión en la medición',
            rule: 'la normativa metrológica del Sistema Internacional de Unidades (SI)',
          },
          {
            topic: 'Transformaciones físicas, químicas y conservación de la masa',
            conceptA: 'la distinción entre cambios de fase reversibles y reacciones químicas',
            conceptB: 'la ley de conservación de la masa entre reactivos y productos',
            indicator: 'equilibrio estequiométrico y conservación másica',
            rule: 'el principio fundamental de conservación de la materia en sistemas aislados',
          },
          {
            topic: 'Transferencia de calor, trabajo mecánico y eficiencia energética',
            conceptA: 'los mecanismos de conducción, convección y radiación térmica',
            conceptB: 'el rendimiento energético $\\eta = \\frac{E_{\\text{útil}}}{E_{\\text{total}}} \\times 100\\%$',
            indicator: 'optimización del consumo energético y reducción de pérdidas',
            rule: 'el principio de conservación y degradación de la energía',
          },
          {
            topic: 'Cinemática, fuerzas e interacciones electromagnéticas',
            conceptA: 'la relación entre fuerza neta, masa y cambio de movimiento ($F = m \\cdot a$)',
            conceptB: 'el comportamiento de circuitos eléctricos básicos y leyes de conservación',
            indicator: 'coherencia entre el diagrama físico y la predicción cuantitativa',
            rule: 'las leyes fundamentales de la mecánica clásica y electromagnetismo escolar',
          },
        ],
      },
      {
        unitNumber: 2,
        tomo: 2,
        title: 'Sistemas Biológicos, Dinámica de Ecosistemas y Sostenibilidad Ambiental en El Salvador',
        summary: `Estudio de la organización celular, fisiología de los seres vivos, flujo de energía en ecosistemas tropicales y gestión de riesgos socioambientales en El Salvador para ${gradeLabel}.`,
        bookRef: `${bookTitle}, Unidad 2`,
        competencies: [
          'Analiza la estructura y función de los niveles de organización biológica desde la célula hasta la biosfera.',
          'Evalúa el impacto de las actividades humanas en las cuencas hidrográficas y ecosistemas de El Salvador proponiendo soluciones científicas sostenibles.',
        ],
        lessonTitle: 'Organización Celular, Flujo Trófico y Resiliencia Ecológica Territorial',
        domainConcept: 'la homeostasis celular, la transferencia de energía en redes tróficas y la gestión integral del recurso hídrico y la biodiversidad salvadoreña',
        normativeFramework: 'el currículo oficial de Ciencia y Tecnología del MINED y los lineamientos científicos de salud ambiental de MINSAL y OMS/OPS',
        analyticalMethod: 'el muestreo ecológico cuantitativo, el análisis de pirámides bioenergéticas y la evaluación de indicadores de calidad ambiental',
        keyFormulaLatex: '$$E_{n} = 0.10 \\times E_{n-1}, \\quad I_B = \\frac{\\text{Especies Nativas Registradas}}{\\text{Total de Individuos Muestreados}}$$',
        applicationContext: 'la conservación de bosques salados, cafetales de sombra, cuencas del río Lempa y salud comunitaria en El Salvador',
        evaluationMetric: 'Índice de Equilibrio Trófico y Sostenibilidad Ambiental (IETSA)',
        archetypeThemes: [
          {
            topic: 'Estructura celular y procesos metabólicos vitales',
            conceptA: 'la función de los orgánulos celulares en células eucariotas vegetales y animales',
            conceptB: 'la complementariedad energética entre fotosíntesis y respiración celular',
            indicator: 'comprensión del intercambio de materia y energía celular',
            rule: 'la teoría celular y los principios bioenergéticos del programa MINED',
          },
          {
            topic: 'Redes tróficas y regla del diezmo ecológico',
            conceptA: 'el flujo unidireccional de energía desde productores hasta consumidores y descomponedores',
            conceptB: 'la transferencia aproximada del $10\\%$ de energía entre niveles tróficos sucesivos',
            indicator: 'cálculo de biomasa y energía disponible por nivel trófico',
            rule: 'la ley termodinámica de transferencia energética en ecosistemas',
          },
          {
            topic: 'Ciclos biogeoquímicos y gestión de cuencas hidrográficas',
            conceptA: 'la infiltración, escorrentía y recarga de acuíferos en el ciclo hidrológico',
            conceptB: 'la fijación de carbono y nitrógeno en suelos agrícolas y forestales',
            indicator: 'balance hídrico y conservación de suelos en laderas',
            rule: 'el enfoque de manejo integrado de cuencas hidrográficas en El Salvador',
          },
          {
            topic: 'Salud preventiva, genética básica y homeostasis humana',
            conceptA: 'la coordinación de los sistemas nervioso, endocrino, circulatorio e inmunológico',
            conceptB: 'la prevención epidemiológica de enfermedades transmitidas por vectores y agua',
            indicator: 'aplicación de protocolos preventivos basados en evidencia científica',
            rule: 'los lineamientos de educación para la salud de MINED y MINSAL',
          },
          {
            topic: 'Geología, vulcanismo y gestión de riesgos en El Salvador',
            conceptA: 'la dinámica de placas tectónicas (Coco y Caribe) en la cadena volcánica salvadoreña',
            conceptB: 'los sistemas de alerta temprana y mitigación de amenazas hidrometeorológicas y sísmicas',
            indicator: 'reducción de la vulnerabilidad física y comunitaria',
            rule: 'el marco técnico de gestión integral de riesgos y protección civil',
          },
        ],
      },
    ];
  }

  if (subjectId === 'ciudadania-valores') {
    const isCicloI = ['1-grado', '2-grado', '3-grado'].includes(gradeId);
    const bookTitle = isCicloI
      ? `Programa de Formación en Ciudadanía y Valores MINED (${gradeLabel})`
      : `Libro de Texto y Guía Metodológica de Ciudadanía y Valores MINED (${gradeLabel})`;

    return [
      {
        unitNumber: 1,
        tomo: 1,
        title: 'Identidad Cultural, Convivencia Democrática y Derechos Humanos en El Salvador',
        summary: `Estudio de la convivencia pacífica, los Derechos Humanos, la institucionalidad democrática salvadoreña y la resolución constructiva de conflictos según el programa de Ciudadanía y Valores del MINED para ${gradeLabel}.`,
        bookRef: `${bookTitle}, Unidad 1`,
        competencies: [
          'Ejerce una ciudadanía activa y responsable fundamentada en el respeto a los Derechos Humanos, la Constitución de la República y la cultura de paz.',
          'Aplica mecanismos de diálogo, mediación e inclusión social para resolver conflictos escolares y comunitarios de forma pacífica.',
        ],
        lessonTitle: 'Estado Constitucional de Derecho, Dignidad Humana y Cultura de Paz',
        domainConcept: 'la dignidad humana como fundamento de los derechos fundamentales, los deberes ciudadanos y la participación democrática e inclusiva',
        normativeFramework: 'los Libros de Texto de Ciudadanía y Valores del MINED, la Constitución de la República de El Salvador (jurisprudencia CSJ) y los instrumentos de integración del SICA',
        analyticalMethod: 'el análisis deliberativo de casos ético-jurídicos, la mediación escolar estructurada y la auditoría de participación ciudadana',
        keyFormulaLatex: '$$I_{pc} = \\frac{\\text{Acuerdos Consensuados y Cumplidos}}{\\text{Total de Mesas de Diálogo}} \\times 100\\%$$',
        applicationContext: 'los gobiernos estudiantiles, los comités de convivencia escolar y el ejercicio cívico en los municipios y distritos de El Salvador',
        evaluationMetric: 'Índice de Participación Democrática y Convivencia (IPDC)',
        archetypeThemes: [
          {
            topic: 'Dignidad humana y clasificación de los Derechos Humanos',
            conceptA: 'el carácter universal, inalienable, indivisible e interdependiente de los derechos',
            conceptB: 'la corresponsabilidad entre garantías constitucionales y deberes ciudadanos',
            indicator: 'reconocimiento y defensa de los derechos fundamentales en situaciones concretas',
            rule: 'el marco constitucional salvadoreño y los programas de Ciudadanía y Valores del MINED',
          },
          {
            topic: 'Mediación pacífica y transformación constructiva de conflictos',
            conceptA: 'la escucha empática, la comunicación asertiva y la identificación de intereses comunes',
            conceptB: 'la negociación colaborativa frente a la imposición o la evasión del conflicto',
            indicator: 'tasa de acuerdos sostenibles alcanzados sin violencia',
            rule: 'el protocolo de convivencia armónica y cultura de paz en centros educativos',
          },
          {
            topic: 'Institucionalidad democrática y separación de funciones del Estado',
            conceptA: 'las atribuciones de los órganos Legislativo, Ejecutivo y Judicial (CSJ) en El Salvador',
            conceptB: 'la transparencia pública, la rendición de cuentas y la contraloría social',
            indicator: 'comprensión del equilibrio institucional y la legalidad democrática',
            rule: 'el principio de supremacía constitucional y Estado de Derecho',
          },
          {
            topic: 'Patrimonio cultural e identidad centroamericana',
            conceptA: 'la conservación del patrimonio histórico, arqueológico e inmaterial de El Salvador',
            conceptB: 'los lazos históricos y de cooperación regional dentro del SICA',
            indicator: 'valoración activa de la diversidad cultural y memoria histórica',
            rule: 'los lineamientos de identidad nacional y ciudadanía centroamericana del MINED',
          },
          {
            topic: 'Ciudadanía digital responsable y ética de la información',
            conceptA: 'la protección de la privacidad, la huella digital y la prevención del ciberacoso',
            conceptB: 'la verificación crítica de datos frente a la desinformación en entornos virtuales',
            indicator: 'convivencia ética y segura en plataformas digitales educativas',
            rule: 'el código de ética ciudadana y seguridad digital escolar',
          },
        ],
      },
      {
        unitNumber: 2,
        tomo: 2,
        title: 'Geografía Humana, Desarrollo Sostenible e Integración Regional Centroamericana',
        summary: `Análisis de los procesos históricos de El Salvador, dinámica demográfica, ordenamiento territorial, desarrollo humano sostenible e integración en el SICA y CEPAL para ${gradeLabel}.`,
        bookRef: `${bookTitle}, Unidad 2`,
        competencies: [
          'Interpreta los procesos históricos, geográficos y socioeconómicos de El Salvador y Centroamérica desde una perspectiva multicausal.',
          'Diseña propuestas de acción comunitaria orientadas al desarrollo sostenible, la equidad social y la resiliencia territorial.',
        ],
        lessonTitle: 'Dinámica Demográfica, Desarrollo Humano y Cooperación Regional (SICA - CEPAL)',
        domainConcept: 'la relación entre población, territorio, recursos productivos e indicadores de desarrollo humano sostenible en El Salvador',
        normativeFramework: 'los Libros de Texto de Ciudadanía y Valores del MINED y los marcos estadísticos de BCR, SICA, SIECA y CEPAL',
        analyticalMethod: 'la interpretación de indicadores socioeconómicos y cartográficos, el análisis histórico multicausal y la formulación de proyectos ciudadanos',
        keyFormulaLatex: '$$D_p = \\frac{\\text{Población Total (hab)}}{\\text{Superficie Territorial (km}^2\\text{)}}$$',
        applicationContext: 'la planificación del desarrollo local en los $14$ departamentos de El Salvador y el comercio intrarregional centroamericano',
        evaluationMetric: 'Indicador de Cohesión Territorial y Desarrollo Sostenible (ICTDS)',
        archetypeThemes: [
          {
            topic: 'Geografía humana, densidad poblacional y migración',
            conceptA: 'la distribución espacial de la población urbana y rural en El Salvador',
            conceptB: 'el cálculo de la densidad demográfica $D_p = \\frac{\\text{Población}}{\\text{Superficie}}$ y sus efectos en los servicios públicos',
            indicator: 'análisis riguroso de variables demográficas y territoriales',
            rule: 'la metodología de análisis geográfico y poblacional del programa MINED',
          },
          {
            topic: 'Procesos históricos y memoria colectiva de El Salvador',
            conceptA: 'las causas estructurales y coyunturales de las transformaciones políticas y sociales',
            conceptB: 'el contraste de fuentes primarias y secundarias en la investigación histórica',
            indicator: 'explicación multicausal libre de anacronismos históricos',
            rule: 'el enfoque de pensamiento histórico crítico en Ciudadanía y Valores',
          },
          {
            topic: 'Desarrollo sostenible y Objetivos de Desarrollo en la región',
            conceptA: 'el equilibrio entre crecimiento económico, inclusión social y protección ambiental',
            conceptB: 'las políticas públicas de erradicación de la pobreza, educación y salud',
            indicator: 'pertinencia social y ambiental de los proyectos comunitarios',
            rule: 'los marcos técnicos de desarrollo humano sostenible de CEPAL y MINED',
          },
          {
            topic: 'Integración centroamericana (SICA y SIECA)',
            conceptA: 'la cooperación política, económica, educativa y ambiental entre los países miembros del SICA',
            conceptB: 'la facilitación del comercio intrarregional y la movilidad humana regulada por SIECA',
            indicator: 'comprensión de las ventajas de la integración regional',
            rule: 'los tratados e instrumentos oficiales del Sistema de la Integración Centroamericana (SICA)',
          },
          {
            topic: 'Ética pública, cultura tributaria y bien común',
            conceptA: 'la contribución de los tributos al financiamiento de educación, salud e infraestructura pública',
            conceptB: 'la integridad, probidad y rechazo a toda forma de corrupción en lo público y privado',
            indicator: 'compromiso ciudadano con la legalidad y el bienestar colectivo',
            rule: 'los principios de ética cívica y responsabilidad fiscal enseñados por el MINED',
          },
        ],
      },
    ];
  }

  if (subjectId === 'educacion-artistica') {
    return [
      {
        unitNumber: 1,
        tomo: 1,
        title: 'Lenguajes Artísticos, Percepción Estética y Expresión Plástica y Visual',
        summary: `Exploración de los elementos del lenguaje visual, teoría del color, composición espacial y apreciación del patrimonio artístico salvadoreño según el Programa de Estudios de Artes del MINED para ${gradeLabel}.`,
        bookRef: `Programa de Estudios y Guía Metodológica de Educación Artística (Artes) MINED (${gradeLabel}), Unidad 1`,
        competencies: [
          'Utiliza los elementos de la expresión plástica y visual (línea, forma, color, textura y proporción) para comunicar ideas y emociones con creatividad.',
          'Aprecia críticamente las manifestaciones artísticas visuales de El Salvador y el mundo reconociendo su valor estético e histórico.',
        ],
        lessonTitle: 'Composición Visual, Armonía Cromática y Patrimonio Plástico Salvadoreño',
        domainConcept: 'la estructuración del espacio plástico mediante leyes de composición, proporción armónica y psicología del color en las artes visuales',
        normativeFramework: 'el Programa de Estudios de Artes y las Guías Metodológicas de Educación Artística del Ministerio de Educación, Ciencia y Tecnología (MINED)',
        analyticalMethod: 'el análisis formal e iconográfico de obras de arte, la experimentación técnica con soportes y pigmentos y el diseño de bocetos proporcionales',
        keyFormulaLatex: '$$P = \\frac{A_{\\text{figura}}}{A_{\\text{formato}}} \\times 100\\%, \\quad \\phi \\approx 1.618$$',
        applicationContext: 'el muralismo comunitario, el diseño artesanal identitario (Ilobasco, La Palma, Nahuizalco) y las exposiciones escolares en El Salvador',
        evaluationMetric: 'Equilibrio Compositivo y Expresividad Estética (ECEE)',
        archetypeThemes: [
          {
            topic: 'Teoría del color y armonías cromáticas',
            conceptA: 'la clasificación de colores primarios, secundarios, terciarios y complementarios',
            conceptB: 'el uso expresivo de gamas cálidas, frías y contrastes lumínicos (claroscuro)',
            indicator: 'coherencia cromática respecto a la intención comunicativa de la obra',
            rule: 'los fundamentos de percepción visual y cromatología del currículo de Artes MINED',
          },
          {
            topic: 'Proporción, simetría y perspectiva en el espacio bidimensional',
            conceptA: 'el equilibrio simétrico, asimétrico y radial en el plano compositivo',
            conceptB: 'el uso de líneas de horizonte y puntos de fuga para representar profundidad espacial',
            indicator: 'proporcionalidad geométrica y dominio del formato visual',
            rule: 'las leyes de composición plástica y organización espacial',
          },
          {
            topic: 'Artesanía tradicional y plástica contemporánea de El Salvador',
            conceptA: 'el simbolismo iconográfico del arte popular de La Palma, cerámica de Ilobasco y fibras de Nahuizalco',
            conceptB: 'la preservación de técnicas ancestrales combinadas con innovación estética',
            indicator: 'reconocimiento y respeto del patrimonio artístico nacional',
            rule: 'el eje de apreciación cultural e identidad artística del programa MINED',
          },
          {
            topic: 'Volumen, relieve y escultura tridimensional',
            conceptA: 'el modelado aditivo en arcilla y la talla o ensamblaje con materiales reciclables',
            conceptB: 'la relación entre masa tridimensional, vacío espacial y textura táctil',
            indicator: 'estabilidad estructural y expresividad formal de la escultura',
            rule: 'la metodología de taller plástico tridimensional del MINED',
          },
          {
            topic: 'Lectura iconográfica y apreciación estética crítica',
            conceptA: 'la descripción objetiva de los elementos formales y técnicos de una obra visual',
            conceptB: 'la interpretación del mensaje simbólico y su contexto sociocultural de creación',
            indicator: 'argumentación estética fundamentada y respetuosa de la diversidad',
            rule: 'el modelo de recepción crítica y valoración artística escolar',
          },
        ],
      },
      {
        unitNumber: 2,
        tomo: 2,
        title: 'Expresión Musical, Artes Escénicas y Creación Colectiva Interdisciplinaria',
        summary: `Práctica del ritmo, melodía, armonía, expresión corporal dramática y montaje de proyectos escénicos integrados conforme al currículo de Educación Artística del MINED para ${gradeLabel}.`,
        bookRef: `Programa de Estudios y Guía Metodológica de Educación Artística (Artes) MINED (${gradeLabel}), Unidad 2`,
        competencies: [
          'Interpreta secuencias rítmicas, vocales e instrumentales aplicando la lectoescritura musical y la escucha activa.',
          'Participa en montajes de teatro y danza escolar integrando la expresión corporal, la voz y el trabajo colaborativo.',
        ],
        lessonTitle: 'Métrica Musical, Dramaturgia Escolar y Puesta en Escena Colectiva',
        domainConcept: 'la organización temporal del sonido (pulso, acento, compás y altura) y la construcción dramática del personaje en el espacio escénico',
        normativeFramework: 'las Guías Metodológicas de Educación Artística (Música y Artes Escénicas) del Ministerio de Educación, Ciencia y Tecnología (MINED)',
        analyticalMethod: 'la solmización rítmico-melódica, la improvisación teatral estructurada y la dirección colaborativa de ensambles artísticos',
        keyFormulaLatex: '$$T_{\\text{compás}} = n_{\\text{tiempos}} \\times \\frac{60}{\\text{BPM}} \\text{ segundos}$$',
        applicationContext: 'los coros y ensambles escolares, los festivales de teatro estudiantil y la difusión del folclore musical salvadoreño',
        evaluationMetric: 'Precisión Rítmico-Melódica y Cohesión Escénica (PRMCE)',
        archetypeThemes: [
          {
            topic: 'Cualidades del sonido y métrica musical',
            conceptA: 'la distinción acústica y musical entre altura, duración, intensidad y timbre',
            conceptB: 'la subdivisión proporcional de figuras musicales (redonda, blanca, negra y corchea) en el compás',
            indicator: 'exactitud temporal en la lectura y ejecución rítmica',
            rule: 'la teoría métrica y lectoescritura musical del programa de Artes MINED',
          },
          {
            topic: 'Canto coral, técnica vocal e instrumentación escolar',
            conceptA: 'la respiración diafragmática, la impostación vocal saludable y la afinación colectiva',
            conceptB: 'el acoplamiento rítmico y armónico en ensambles de flauta dulce, percusión y cuerdas',
            indicator: 'empaste sonoro y equilibrio dinámico del ensamble musical',
            rule: 'las pautas pedagógicas de educación vocal e instrumental del MINED',
          },
          {
            topic: 'Expresión dramática, estructura teatral y creación de personajes',
            conceptA: 'el conflicto dramático (planteamiento, nudo o clímax y desenlace) en el texto teatral',
            conceptB: 'el uso consciente del gesto, el desplazamiento escénico y la proyección de la voz',
            indicator: 'verosimilitud expresiva y comunicación orgánica con el público',
            rule: 'la metodología de pedagogía teatral y juego dramático escolar',
          },
          {
            topic: 'Danza, movimiento expresivo y folclore salvadoreño',
            conceptA: 'la coordinación del movimiento corporal con el fraseo musical y el espacio coreográfico',
            conceptB: 'la valoración de danzas tradicionales e históricas de las regiones de El Salvador',
            indicator: 'fluidez kinestésica y sentido de pertenencia cultural',
            rule: 'los lineamientos de expresión corporal y patrimonio dancístico del MINED',
          },
          {
            topic: 'Producción y gestión de proyectos artísticos integrados',
            conceptA: 'la integración de escenografía, iluminación, vestuario, música y actuación',
            conceptB: 'la distribución equitativa de roles técnicos y creativos en el colectivo estudiantil',
            indicator: 'calidad integral de la puesta en escena y trabajo cooperativo',
            rule: 'el enfoque de aprendizaje basado en proyectos artísticos interdisciplinarios',
          },
        ],
      },
    ];
  }

  if (subjectId === 'educacion-fisica') {
    const isCicloI = ['1-grado', '2-grado', '3-grado'].includes(gradeId);
    const bookTitle = isCicloI
      ? `Guía Metodológica de Desarrollo Corporal y Educación Física MINED (${gradeLabel})`
      : `Programa y Guía Metodológica de Educación Física y Deporte Escolar MINED (${gradeLabel})`;

    return [
      {
        unitNumber: 1,
        tomo: 1,
        title: 'Condición Física Saludable, Motricidad Integrada y Fisiología del Ejercicio',
        summary: `Desarrollo de las capacidades físicas condicionales y coordinativas, control postural, dosificación del esfuerzo y promoción de la salud integral según el currículo del MINED para ${gradeLabel}.`,
        bookRef: `${bookTitle}, Unidad 1`,
        competencies: [
          'Regula la intensidad de su esfuerzo físico mediante indicadores fisiológicos y posturales para preservar la salud cardiovascular y osteomuscular.',
          'Ejecuta patrones motores condicionales y coordinativos con eficiencia biomecánica y seguridad personal.',
        ],
        lessonTitle: 'Capacidades Físicas Condicionales, Frecuencia Cardíaca y Biomecánica Postural',
        domainConcept: 'la adaptación fisiológica al ejercicio físico, la dosificación de resistencia, fuerza, velocidad y flexibilidad, y la higiene postural',
        normativeFramework: 'las Guías Metodológicas de Desarrollo Corporal y Educación Física del MINED y las recomendaciones de actividad física para la salud de MINSAL y OMS/OPS',
        analyticalMethod: 'la monitorización de la frecuencia cardíaca, la evaluación funcional de capacidades motrices y la planificación de cargas de entrenamiento saludable',
        keyFormulaLatex: '$$FC_{\\text{máx}} \\approx 220 - \\text{Edad}, \\quad Z_{\\text{aeróbica}} = [0.60, 0.80] \\times FC_{\\text{máx}}$$',
        applicationContext: 'las clases prácticas de Educación Física, las pausas activas escolares y los hábitos de vida saludable en la comunidad salvadoreña',
        evaluationMetric: 'Índice de Aptitud Física Saludable y Control Motor (IAFSCM)',
        archetypeThemes: [
          {
            topic: 'Frecuencia cardíaca y zonas de esfuerzo aeróbico seguro',
            conceptA: 'la toma del pulso en reposo, durante la actividad física y en la fase de recuperación',
            conceptB: 'el cálculo de la zona aeróbica saludable entre el $60\\%$ y el $80\\%$ de la $FC_{\\text{máx}}$',
            indicator: 'autorregulación de la intensidad del ejercicio sin sobrecarga fisiológica',
            rule: 'el protocolo de seguridad fisiológica en Educación Física del MINED y OMS/OPS',
          },
          {
            topic: 'Fases de la sesión: calentamiento, parte principal y vuelta a la calma',
            conceptA: 'la movilidad articular y activación cardiorrespiratoria progresiva previa al esfuerzo',
            conceptB: 'la elongación muscular y normalización fisiológica al concluir la sesión',
            indicator: 'prevención efectiva de lesiones musculares y articulares',
            rule: 'la estructura metodológica oficial de la clase de Educación Física del MINED',
          },
          {
            topic: 'Capacidades físicas condicionales: resistencia, fuerza, velocidad y flexibilidad',
            conceptA: 'la resistencia aeróbica de larga duración y la fuerza-resistencia con el propio peso corporal',
            conceptB: 'la amplitud de movimiento articular (flexibilidad) y la velocidad de reacción motriz',
            indicator: `desarrollo armónico acorde a la etapa de maduración biológica de ${gradeLabel}`,
            rule: 'el principio de progresión pedagógica y adecuación etaria del entrenamiento escolar',
          },
          {
            topic: 'Capacidades coordinativas, equilibrio y ubicación temporo-espacial',
            conceptA: 'el equilibrio estático y dinámico junto con la coordinación óculo-manual y óculo-pédica',
            conceptB: 'el ajuste del ritmo motor, la agilidad y la orientación espacial en desplazamientos',
            indicator: 'fluidez, economía de esfuerzo y precisión en las secuencias motrices',
            rule: 'la guía de desarrollo psicomotor y corporeidad del MINED',
          },
          {
            topic: 'Higiene postural, hidratación y nutrición energética escolar',
            conceptA: 'la alineación ergonómica de la columna vertebral al caminar, sentarse y levantar cargas',
            conceptB: 'la reposición hídrica oportuna y el balance energético nutricional antes y después del ejercicio',
            indicator: 'adopción sostenida de hábitos de autocuidado e higiene corporal',
            rule: 'los lineamientos intersectoriales de salud escolar de MINED y MINSAL',
          },
        ],
      },
      {
        unitNumber: 2,
        tomo: 2,
        title: 'Juegos Cooperativos, Iniciación Deportiva, Táctica Colectiva y Juego Limpio',
        summary: `Práctica de juegos motores tradicionales y cooperativos, fundamentos técnicos y tácticos de deportes individuales y colectivos, e inclusión en la cultura física para ${gradeLabel}.`,
        bookRef: `${bookTitle}, Unidad 2`,
        competencies: [
          'Aplica fundamentos técnicos y principios tácticos de cooperación-oposición en juegos pre-deportivos y deportes escolares.',
          'Practica la ética del juego limpio (fair play), la inclusión de todas las personas y la resolución pacífica de discrepancias reglamentarias.',
        ],
        lessonTitle: 'Lógica Interna de los Deportes Colectivos, Táctica Cooperativa y Ética Deportiva',
        domainConcept: 'la toma de decisiones tácticas en situaciones motrices de cooperación-oposición, el reglamento deportivo y la cohesión grupal inclusiva',
        normativeFramework: 'las Guías Metodológicas de Educación Física del MINED y los principios internacionales de deporte escolar, inclusión y juego limpio',
        analyticalMethod: 'el análisis de situaciones tácticas de juego, la práctica comprensiva de habilidades abiertas y la evaluación formativa socio-motriz',
        keyFormulaLatex: '$$E_{\\text{táctica}} = \\frac{\\text{Acciones Cooperativas Exitosas}}{\\text{Total de Posesiones de Juego}} \\times 100\\%$$',
        applicationContext: 'los torneos intramuros estudiantiles, los festivales recreativos comunitarios y los juegos estudiantiles nacionales en El Salvador',
        evaluationMetric: 'Eficiencia Táctica Colectiva y Juego Limpio (ETCJL)',
        archetypeThemes: [
          {
            topic: 'Principios tácticos ofensivos y defensivos en deportes colectivos',
            conceptA: 'la conservación del móvil, el desmarque de apoyo y la progresión hacia la meta en ataque',
            conceptB: 'la recuperación del balón, la cobertura defensiva y la protección del espacio propio',
            indicator: 'lectura inteligente del juego y sincronización con los compañeros de equipo',
            rule: 'el modelo comprensivo de iniciación deportiva escolar del MINED',
          },
          {
            topic: 'Juegos cooperativos e inclusión motriz sin discriminación',
            conceptA: 'el diseño de reglas donde el objetivo exige la participación coordinada de todo el grupo',
            conceptB: 'la adaptación inclusiva de materiales y espacios para garantizar la equidad de género y capacidad',
            indicator: 'integración del $100\\%$ del estudiantado en la experiencia motriz',
            rule: 'el enfoque de educación física inclusiva y derechos de la niñez del MINED',
          },
          {
            topic: 'Deportes individuales y pruebas de atletismo formativo',
            conceptA: 'la técnica biomecánica en carreras de velocidad, relevos, saltos y lanzamientos seguros',
            conceptB: 'la superación personal basada en la constancia y el control del ritmo de carrera',
            indicator: 'mejora progresiva del desempeño técnico individual sin riesgo físico',
            rule: 'la progresión metodológica de atletismo escolar del currículo oficial',
          },
          {
            topic: 'Juegos tradicionales salvadoreños y recreación al aire libre',
            conceptA: 'la preservación lúdica de juegos tradicionales comunitarios que fortalecen la identidad cultural',
            conceptB: 'la organización segura de actividades recreativas en convivencia armónica con la naturaleza',
            indicator: 'participación entusiasta y rescate del patrimonio lúdico nacional',
            rule: 'el eje de recreación, cultura física y convivencia comunitaria del MINED',
          },
          {
            topic: 'Reglamento deportivo, arbitraje pedagógico y juego limpio (Fair Play)',
            conceptA: 'el respeto irrestricto a las reglas pactadas, al rival, a los compañeros y a las decisiones arbitrales',
            conceptB: 'el diálogo sereno y el autocontrol emocional ante situaciones de victoria o derrota',
            indicator: 'cero incidencias de conducta antideportiva durante la competencia escolar',
            rule: 'el código de ética deportiva y convivencia escolar del Ministerio de Educación',
          },
        ],
      },
    ];
  }

  // subjectId === 'educacion-financiera'
  return [
    {
      unitNumber: 1,
      tomo: 1,
      title: 'Presupuesto Familiar, Ahorro Programado y Consumo Responsable en El Salvador',
      summary: `Fundamentos de finanzas personales, planificación del presupuesto de ingresos y gastos, metas de ahorro y derechos del consumidor conforme al cuaderno oficial de Finanzas y Economía del MINED para ${gradeLabel}.`,
      bookRef: `Cuaderno de Aprendizaje Finanzas y Economía MINED (${gradeLabel}), Unidad 1`,
      competencies: [
        'Elabora presupuestos personales y familiares clasificando ingresos, gastos fijos, gastos variables y fondos de ahorro para emergencias.',
        'Toma decisiones de consumo responsable comparando precios, calidad y utilidad real frente a impulsos publicitarios.',
      ],
      lessonTitle: 'Equilibrio Presupuestario, Tasa de Ahorro y Decisiones Racionales de Consumo',
      domainConcept: 'la administración eficiente de recursos monetarios escasos, el costo de oportunidad, el superávit presupuestario y la cultura de ahorro previsional',
      normativeFramework: 'el Cuaderno de Aprendizaje de Finanzas y Economía del MINED y las guías de educación financiera del Banco Central de Reserva (BCR) y la Superintendencia del Sistema Financiero (SSF)',
      analyticalMethod: 'el balance contable de flujo de caja familiar, el cálculo de razones de ahorro y el análisis de costo de oportunidad en decisiones de compra',
      keyFormulaLatex: '$$S = I_{\\text{total}} - (G_{\\text{fijos}} + G_{\\text{variables}}), \\quad t_a = \\frac{S}{I_{\\text{total}}} \\times 100\\%$$',
      applicationContext: 'la economía de los hogares salvadoreños, el ahorro escolar cooperativo y el comercio formal en los municipios del país',
      evaluationMetric: 'Índice de Solvencia Presupuestaria y Ahorro (ISPA)',
      archetypeThemes: [
        {
          topic: 'Estructura del presupuesto familiar: ingresos, gastos fijos y variables',
          conceptA: 'la diferenciación rigurosa entre necesidades básicas prioritarias y deseos prescindibles',
          conceptB: 'el cálculo del saldo neto $S = I - (G_{\\text{fijos}} + G_{\\text{variables}})$ para evitar el déficit',
          indicator: 'equilibrio o superávit sostenido en el flujo mensual del hogar',
          rule: 'la metodología de planificación presupuestaria de Finanzas y Economía MINED y BCR',
        },
        {
          topic: 'Ahorro programado y fondo de reserva para imprevistos',
          conceptA: 'la separación preventiva de un porcentaje fijo del ingreso ($t_a \\ge 10\\%$) antes de realizar gastos discrecionales',
          conceptB: 'la definición de metas financieras de corto, mediano y largo plazo con plazos y montos cuantificados',
          indicator: 'cumplimiento sistemático de la meta de ahorro escolar o familiar',
          rule: 'el principio de ahorro previsional promovido por el MINED y la SSF',
        },
        {
          topic: 'Costo de oportunidad y consumo crítico responsable',
          conceptA: 'la valoración de la mejor alternativa sacrificada al tomar una decisión económica con presupuesto limitado',
          conceptB: 'la comparación objetiva de precio unitario, durabilidad, eficiencia energética y garantía del producto',
          indicator: 'maximización del bienestar real y reducción de gastos hormiga',
          rule: 'el criterio de racionalidad económica y consumo sostenible del programa MINED',
        },
        {
          topic: 'Funciones del dinero, inflación y poder adquisitivo',
          conceptA: 'el papel del dinero como medio de cambio, unidad de cuenta y depósito de valor en la economía',
          conceptB: 'el efecto de la variación del nivel general de precios sobre la capacidad real de compra de las familias',
          indicator: 'ajuste oportuno del presupuesto ante variaciones de precios de la canasta básica',
          rule: 'los fundamentos macroeconómicos básicos explicados por el BCR y el MINED',
        },
        {
          topic: 'Emprendimiento escolar, costos de producción y punto de equilibrio',
          conceptA: 'la distinción entre costos fijos ($CF$) y costos variables unitarios ($CV_u$) en un proyecto productivo',
          conceptB: 'la determinación del ingreso por ventas necesario para cubrir los costos totales y generar excedente social',
          indicator: 'viabilidad técnica y financiera del proyecto de emprendimiento estudiantil',
          rule: 'la guía de formulación de proyectos productivos escolares del MINED',
        },
      ],
    },
    {
      unitNumber: 2,
      tomo: 2,
      title: 'Sistema Financiero Salvadoreño, Crédito Responsable, Interés y Prevención de Fraudes',
      summary: `Análisis del funcionamiento del sistema financiero supervisado en El Salvador (BCR y SSF), cálculo de interés simple y compuesto, uso responsable del crédito y seguridad financiera digital para ${gradeLabel}.`,
      bookRef: `Cuaderno de Aprendizaje Finanzas y Economía MINED (${gradeLabel}), Unidad 2`,
      competencies: [
        'Compara productos de ahorro y crédito evaluando tasas de interés, plazos, comisiones y capacidad real de endeudamiento.',
        'Reconoce el rol regulador del BCR y la SSF en El Salvador y aplica medidas de ciberseguridad y prevención contra fraudes financieros.',
      ],
      lessonTitle: 'Matemática Financiera Aplicada, Capacidad de Endeudamiento y Regulación (BCR - SSF)',
      domainConcept: 'el valor del dinero en el tiempo, el costo efectivo del crédito, la solvencia crediticia y la supervisión prudencial del sistema financiero nacional',
      normativeFramework: 'el Cuaderno de Finanzas y Economía del MINED y la normativa de educación e inclusión financiera del Banco Central de Reserva (BCR), la Superintendencia del Sistema Financiero (SSF) y la UIF',
      analyticalMethod: 'el cálculo comparativo de interés simple y compuesto, la evaluación de la razón de endeudamiento sobre ingresos y la verificación de entidades autorizadas',
      keyFormulaLatex: '$$I = C \\cdot r \\cdot t, \\quad M = C(1 + r)^t, \\quad R_e = \\frac{\\text{Cuota Mensual de Deuda}}{\\text{Ingreso Neto}} \\le 30\\%$$',
      applicationContext: 'el uso de cuentas de ahorro, cooperativas, créditos productivos, pagos digitales y prevención de estafas en El Salvador',
      evaluationMetric: 'Índice de Salud Crediticia y Seguridad Financiera (ISCSF)',
      archetypeThemes: [
        {
          topic: 'Cálculo de interés simple y monto acumulado en operaciones financieras',
          conceptA: 'la relación directa entre capital principal ($C$), tasa de interés periódica ($r$) y tiempo ($t$)',
          conceptB: 'la determinación del interés $I = C \\cdot r \\cdot t$ y el monto final $M = C + I$',
          indicator: 'exactitud en la liquidación de rendimientos de ahorro y costos de préstamos',
          rule: 'las fórmulas financieras estándar del currículo de Finanzas y Economía del MINED',
        },
        {
          topic: 'Capacidad de endeudamiento e historial crediticio responsable',
          conceptA: 'el límite prudencial según el cual las cuotas de deuda no deben superar el $30\\%$ del ingreso neto mensual',
          conceptB: 'la diferencia entre deuda productiva (inversión en educación o herramientas) y sobreendeudamiento de consumo',
          indicator: 'cumplimiento puntual de obligaciones sin comprometer las necesidades básicas del hogar',
          rule: 'las normas de salud crediticia difundidas por la SSF y el BCR en El Salvador',
        },
        {
          topic: 'Instituciones del sistema financiero supervisado (BCR y SSF)',
          conceptA: 'la función reguladora y estadística del Banco Central de Reserva (BCR) y la supervisión de la SSF',
          conceptB: 'el riesgo de acudir a prestamistas informales o esquemas piramidales fuera de la supervisión legal',
          indicator: 'verificación previa de que toda entidad depositaria esté legalmente autorizada por la SSF',
          rule: 'el marco institucional de estabilidad y protección al usuario financiero en El Salvador',
        },
        {
          topic: 'Medios de pago electrónicos, banca digital y ciberseguridad financiera',
          conceptA: 'el uso seguro de transferencias electrónicas, billeteras digitales y tarjetas de débito',
          conceptB: 'la protección de contraseñas, tokens de doble factor y el rechazo absoluto al phishing o ingeniería social',
          indicator: 'cero vulneraciones de credenciales bancarias o fraudes electrónicos',
          rule: 'los protocolos de ciberseguridad financiera y prevención de delitos informáticos',
        },
        {
          topic: 'Seguros, previsión social, tributación e integridad financiera (UIF)',
          conceptA: 'la transferencia de riesgos mediante pólizas de seguro y el ahorro previsional para el retiro',
          conceptB: 'la transparencia en el origen lícito de los fondos conforme a las normas de prevención de la UIF',
          indicator: 'cultura de legalidad tributaria, previsión familiar y trazabilidad financiera',
          rule: 'los lineamientos de educación cívico-tributaria y cumplimiento normativo del Estado salvadoreño',
        },
      ],
    },
  ];
}

const ALL_GRADE_IDS: GradeLevelId[] = [
  '1-grado',
  '2-grado',
  '3-grado',
  '4-grado',
  '5-grado',
  '6-grado',
  '7-grado',
  '8-grado',
  '9-grado',
  '1-bachillerato',
  '2-bachillerato',
];

const ADDITIONAL_SUBJECT_IDS: Exclude<SubjectId, 'matematica-esmate'>[] = [
  'lenguaje-eslengua',
  'ciencia-tecnologia',
  'ciudadania-valores',
  'educacion-artistica',
  'educacion-fisica',
  'educacion-financiera',
];

function buildCanonicalMultiUnitId(gradeId: GradeLevelId, slugPrefix: string, unitNumber: number): string {
  const sg = gradeId.replace('-grado', 'g').replace('-bachillerato', 'b');
  const uStr = unitNumber < 10 ? `0${unitNumber}` : `${unitNumber}`;
  return `mined-${slugPrefix}-${sg}-u${uStr}`;
}

const MULTI_SUBJECT_CACHE: Partial<Record<GradeLevelId, SubjectCurriculum[]>> = {};
const MULTI_UNIT_QUESTIONS_CACHE: Record<string, ReturnType<typeof generate50UnitQuestions>> = {};

export function getMultiSubjectUnitQuestions(gradeId: GradeLevelId, unitId: string) {
  const gradeCode = GRADE_CODE_MAP[gradeId];
  if (!gradeCode) return undefined;

  for (const subjectId of ADDITIONAL_SUBJECT_IDS) {
    const meta = SUBJECT_META[subjectId];
    const blueprints = createSubjectBlueprintsForGrade(gradeId, subjectId);
    for (const bp of blueprints) {
      const canonicalUnitId = buildCanonicalMultiUnitId(gradeId, meta.slugPrefix, bp.unitNumber);
      const legacyUnitId = `${gradeId}-${meta.slugPrefix}-u${bp.unitNumber}`;
      if (unitId === canonicalUnitId || unitId === legacyUnitId) {
        const cacheKey = `${gradeId}:${canonicalUnitId}`;
        if (MULTI_UNIT_QUESTIONS_CACHE[cacheKey]) {
          return MULTI_UNIT_QUESTIONS_CACHE[cacheKey];
        }
        const subjectCode = SUBJECT_CODE_MAP[subjectId];
        const archetypes = buildUnitArchetypes(gradeId, subjectId, bp);
        const questions = generate50UnitQuestions(
          canonicalUnitId,
          gradeId,
          gradeCode,
          bp.unitNumber,
          bp.title,
          bp.bookRef,
          archetypes,
          subjectId,
          subjectCode
        );
        MULTI_UNIT_QUESTIONS_CACHE[cacheKey] = questions;
        return questions;
      }
    }
  }
  return undefined;
}

export function getAdditionalSubjectsForGrade(gradeId: GradeLevelId): SubjectCurriculum[] {
  if (MULTI_SUBJECT_CACHE[gradeId]) {
    return MULTI_SUBJECT_CACHE[gradeId]!;
  }

  const subjects: SubjectCurriculum[] = ADDITIONAL_SUBJECT_IDS.map((subjectId) => {
    const meta = SUBJECT_META[subjectId];
    const blueprints = createSubjectBlueprintsForGrade(gradeId, subjectId);

    const units: CurriculumUnit[] = blueprints.map((bp) => {
      const unitId = buildCanonicalMultiUnitId(gradeId, meta.slugPrefix, bp.unitNumber);
      const lesson = buildSubstantiveLesson(gradeId, subjectId, bp);
      // Pre-populate static questions for 1-grado U1 of each subject (6 x 50 = 300 questions)
      // while all other units generate their 50 subject-specific questions on-demand via getMultiSubjectUnitQuestions
      const isStaticEvaluated = gradeId === '1-grado' && bp.unitNumber === 1;
      const questions = isStaticEvaluated ? getMultiSubjectUnitQuestions(gradeId, unitId) || [] : [];

      return createCurriculumUnit(
        unitId,
        bp.unitNumber,
        bp.title,
        gradeId,
        bp.tomo,
        bp.summary,
        bp.competencies,
        [lesson],
        questions,
        isStaticEvaluated,
        subjectId
      );
    });

    return {
      ...MINED_SUBJECT_METADATA[subjectId],
      id: subjectId,
      name: meta.name,
      shortName: meta.shortName,
      units,
      resources: getResourcesByGradeAndSubject(gradeId, subjectId),
    };
  });

  MULTI_SUBJECT_CACHE[gradeId] = subjects;
  return subjects;
}


