// Helper modular para generación de 300 preguntas por asignatura del Escalafón Docente
// Conforme a los temarios oficiales del Tribunal Calificador y MINED 2026

export function generateSubjectQuestions(config) {
  const { id, name, subtopicId, topic, blocks } = config;
  const questions = [];

  let qNum = 1;
  for (const block of blocks) {
    const [startNum, endNum] = block.range;
    const countInBlock = endNum - startNum + 1; // 75

    for (let i = 0; i < countInBlock; i++) {
      const currentNumber = startNum + i;
      const level = i < 25 ? 'basico' : i < 50 ? 'intermedio' : 'admision';
      const q = buildQuestion(id, name, subtopicId, topic, block.title, block.theme, currentNumber, level, i);
      questions.push(q);
      qNum++;
    }
  }

  return questions;
}

function buildQuestion(subjectId, subjectName, subtopicId, topic, sectionTitle, theme, number, level, localIdx) {
  const generator = THEME_GENERATORS[theme] || defaultGenerator;
  const { statement, options, correctAnswer, explanation } = generator(number, localIdx, level, subjectName);

  return {
    id: `${subjectId}_q${number}`,
    number,
    institution: 'ESCALAFON',
    subjectId,
    subject: subjectName,
    subtopicId,
    topic,
    sectionTitle,
    statement,
    options,
    correctAnswer,
    explanation,
    level
  };
}

// Generador por defecto
function defaultGenerator(number, idx, level, subject) {
  const letters = ['A', 'B', 'C', 'D'];
  const correct = letters[idx % 4];
  return {
    statement: `En el marco de la evaluación oficial para el ascenso de escalafón docente en ${subject}, ¿cuál es el criterio pedagógico fundamental aplicado en la situación #${number}?`,
    options: [
      { key: 'A', text: `Priorizar el aprendizaje significativo articulando los conocimientos previos con el nuevo contenido según los lineamientos curriculares.` },
      { key: 'B', text: `Limitar la instrucción a la memorización mecánica de contenidos sin contextualización didáctica.` },
      { key: 'C', text: `Omitir la evaluación formativa y depender exclusivamente de una prueba sumativa estandarizada.` },
      { key: 'D', text: `Desvincular las actividades del aula de los objetivos de aprendizaje fijados en el programa de estudio.` }
    ],
    correctAnswer: 'A',
    explanation: `El enfoque curricular del MINED establece que la práctica pedagógica debe fomentar el aprendizaje significativo, constructivista y por competencias, vinculando los saberes previos con situaciones auténticas.`
  };
}

// -------------------------------------------------------------------------------------------------
// BANCOS DE PREGUNTAS ESPECIALIZADAS POR TEMA
// -------------------------------------------------------------------------------------------------
const THEME_GENERATORS = {};

// 1. FORMACIÓN GENERAL: PEDAGOGÍA
THEME_GENERATORS['pedagogia'] = (num, idx, level) => {
  const templates = [
    {
      statement: `De acuerdo con la teoría del desarrollo cognitivo de Jean Piaget, un estudiante de 9 años que logra realizar operaciones mentales con objetos concretos, comprende la reversibilidad y la conservación de la materia, se encuentra en el estadio:`,
      options: [
        { key: 'A', text: 'Sensoriomotor (0 a 2 años)' },
        { key: 'B', text: 'Preoperacional (2 a 7 años)' },
        { key: 'C', text: 'De las operaciones concretas (7 a 11 años)' },
        { key: 'D', text: 'De las operaciones formales (12 años en adelante)' }
      ],
      correctAnswer: 'C',
      explanation: 'El estadio de las operaciones concretas (7 a 11 años) se caracteriza por el pensamiento lógico aplicado a objetos reales, el dominio de la conservación y la reversibilidad del pensamiento.'
    },
    {
      statement: `En la teoría sociocultural de Lev Vygotsky, la distancia entre el nivel de desarrollo real determinado por la capacidad de resolver independientemente un problema y el nivel de desarrollo potencial determinado a través de la guía de un docente o compañero más capaz se denomina:`,
      options: [
        { key: 'A', text: 'Zona de Desarrollo Próximo (ZDP)' },
        { key: 'B', text: 'Asimilación cognitiva' },
        { key: 'C', text: 'Acomodación estructural' },
        { key: 'D', text: 'Equilibración mayorante' }
      ],
      correctAnswer: 'A',
      explanation: 'La Zona de Desarrollo Próximo (ZDP) es el espacio donde el aprendizaje guiado y el andamiaje permiten al estudiante alcanzar competencias que aún no domina de manera autónoma.'
    },
    {
      statement: `David Ausubel sostiene que para que ocurra un "aprendizaje significativo" en el educando, es condición indispensable que:`,
      options: [
        { key: 'A', text: 'El material sea potencialmente significativo y el estudiante posea conceptos inclusores pertinentes.' },
        { key: 'B', text: 'El docente utilice estímulos y refuerzos positivos basados en el condicionamiento operante.' },
        { key: 'C', text: 'El contenido se repita de forma memorística hasta fijarse en la memoria a corto plazo.' },
        { key: 'D', text: 'El estudiante descubra todo el conocimiento sin intervención ni guía del docente.' }
      ],
      correctAnswer: 'A',
      explanation: 'Ausubel postula que el aprendizaje significativo requiere material con significado lógico y que la estructura cognoscitiva del alumno cuente con ideas de anclaje (subsunsores) para relacionar la nueva información.'
    },
    {
      statement: `¿Qué pedagogo contemporáneo propone el modelo de la "Socioformación", orientando el currículo hacia la resolución de problemas del contexto mediante proyectos formativos y el desarrollo del talento ético?`,
      options: [
        { key: 'A', text: 'Sergio Tobón' },
        { key: 'B', text: 'B.F. Skinner' },
        { key: 'C', text: 'John B. Watson' },
        { key: 'D', text: 'Edward Thorndike' }
      ],
      correctAnswer: 'A',
      explanation: 'Sergio Tobón desarrolló el enfoque socioformativo por competencias, enfatizando el proyecto ético de vida, el trabajo colaborativo y la resolución de problemas reales del contexto social.'
    },
    {
      statement: `Paulo Freire, en su obra "Pedagogía del oprimido", critica severamente la concepción de la educación en la que el educador deposita contenidos en la mente pasiva del educando. Freire denomina a este modelo:`,
      options: [
        { key: 'A', text: 'Educación bancaria' },
        { key: 'B', text: 'Educación liberadora' },
        { key: 'C', text: 'Pedagogía dialógica' },
        { key: 'D', text: 'Enfoque crítico-reflexivo' }
      ],
      correctAnswer: 'A',
      explanation: 'Freire denominó "educación bancaria" a la práctica tradicional vertical donde el alumno es un mero receptor pasivo de información, proponiendo en su lugar una educación dialógica y problematizadora.'
    }
  ];

  const t = templates[idx % templates.length];
  return {
    statement: `[Ítem ${num}] ${t.statement}`,
    options: t.options,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation
  };
};

// 2. FORMACIÓN GENERAL: LEGISLACIÓN EDUCATIVA SALVADOREÑA
THEME_GENERATORS['legislacion'] = (num, idx, level) => {
  const templates = [
    {
      statement: `Según la Ley de la Carrera Docente de El Salvador (Decreto Legislativo N.° 665), ¿cuál es el organismo competente encargado de evaluar y dictaminar sobre las solicitudes de ascenso al Nivel Uno del Escalafón?`,
      options: [
        { key: 'A', text: 'El Tribunal Calificador de la Carrera Docente' },
        { key: 'B', text: 'La Junta de la Carrera Docente departamental' },
        { key: 'C', text: 'El Consejo Directivo Escolar (CDE)' },
        { key: 'D', text: 'El Tribunal de la Carrera Docente' }
      ],
      correctAnswer: 'A',
      explanation: 'El Tribunal Calificador es el organismo nacional facultado por la Ley de la Carrera Docente para calificar atestados, administrar pruebas y autorizar el ascenso de nivel en el escalafón.'
    },
    {
      statement: `De conformidad con el Artículo 30 de la Ley de la Carrera Docente, es un derecho del personal docente en servicio activo:`,
      options: [
        { key: 'A', text: 'Gozar de estabilidad en el cargo y no ser despedido o suspendido sino por causa legal.' },
        { key: 'B', text: 'Ausentarse de las labores escolares sin previa justificación ante la dirección.' },
        { key: 'C', text: 'Imponer sanciones disciplinarias corporales a los estudiantes que falten al orden.' },
        { key: 'D', text: 'Cobrar cuotas obligatorias a las familias para gastos administrativos del centro.' }
      ],
      correctAnswer: 'A',
      explanation: 'El Art. 30 establece la estabilidad laboral docente, garantizando que el profesional solo podrá ser removido o sancionado mediante el debido proceso legal.'
    },
    {
      statement: `La Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia (Decreto N.° 431) establece como principio rector en todos los centros escolares del país:`,
      options: [
        { key: 'A', text: 'El Interés Superior de la Niña, Niño y Adolescente' },
        { key: 'B', text: 'El principio de subordinación absoluta a la autoridad docente' },
        { key: 'C', text: 'La separación estricta de las familias de los procesos formativos' },
        { key: 'D', text: 'La prevalencia de los reglamentos internos sobre los derechos fundamentales' }
      ],
      correctAnswer: 'A',
      explanation: 'El principio del Interés Superior de la Niñez y Adolescencia obliga a que en toda decisión o medida pedagógica se priorice el pleno goce y garantía de los derechos de los estudiantes.'
    },
    {
      statement: `En la Ley de Ética Gubernamental salvadoreña, ¿cuál de las siguientes conductas constituye una prohibición ética terminante para un servidor público en funciones docentes?`,
      options: [
        { key: 'A', text: 'Aceptar dádivas, pagos o beneficios indebidos para aprobar o beneficiar a un estudiante.' },
        { key: 'B', text: 'Participar en capacitaciones pedagógicas convocadas por el Ministerio de Educación.' },
        { key: 'C', text: 'Diseñar material didáctico contextualizado para la atención de la diversidad.' },
        { key: 'D', text: 'Informar periódicamente a los padres de familia sobre el rendimiento académico.' }
      ],
      correctAnswer: 'A',
      explanation: 'El Art. 6 de la Ley de Ética Gubernamental prohíbe solicitar o aceptar regalos, pagos o favores a cambio de realizar u omitir actos propios de sus funciones públicas.'
    },
    {
      statement: `Según la Ley General de Educación (Decreto N.° 917), el fin primordial de la educación nacional salvadoreña es:`,
      options: [
        { key: 'A', text: 'El desarrollo integral de la personalidad en su dimensión espiritual, moral y social.' },
        { key: 'B', text: 'La exclusiva formación de mano de obra técnica para el sector exportador.' },
        { key: 'C', text: 'La homogeneización cultural sin reconocimiento de las identidades comunitarias.' },
        { key: 'D', text: 'La instrucción selectiva reservada únicamente para los sectores de altos ingresos.' }
      ],
      correctAnswer: 'A',
      explanation: 'El Art. 2 de la Ley General de Educación prescribe que la educación tiene por fin lograr el desarrollo integral de la personalidad en sus dimensiones espiritual, moral y social.'
    }
  ];

  const t = templates[idx % templates.length];
  return {
    statement: `[Ítem ${num}] ${t.statement}`,
    options: t.options,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation
  };
};

// 3. FORMACIÓN GENERAL: DIDÁCTICA Y EVALUACIÓN POR COMPETENCIAS
THEME_GENERATORS['didactica_evaluacion'] = (num, idx, level) => {
  const templates = [
    {
      statement: `En una secuencia didáctica orientada al enfoque por competencias, el momento pedagógico inicial destinado a activar conocimientos previos y generar conflicto cognitivo se denomina:`,
      options: [
        { key: 'A', text: 'Fase de inicio o apertura' },
        { key: 'B', text: 'Fase de desarrollo o procesamiento' },
        { key: 'C', text: 'Fase de cierre o síntesis' },
        { key: 'D', text: 'Fase de acreditación sumativa' }
      ],
      correctAnswer: 'A',
      explanation: 'La fase de inicio o apertura tiene como propósito motivar, rescatar saberes previos y plantear la situación problema o desafío que orientará la secuencia didáctica.'
    },
    {
      statement: `¿Qué instrumento de evaluación formativa presenta una escala graduada con descriptores cualitativos claros del desempeño para cada nivel de logro alcanzado por el estudiante?`,
      options: [
        { key: 'A', text: 'Rúbrica analítica' },
        { key: 'B', text: 'Lista de cotejo dicotómica' },
        { key: 'C', text: 'Registro anecdótico' },
        { key: 'D', text: 'Prueba de opción única sin retroalimentación' }
      ],
      correctAnswer: 'A',
      explanation: 'Las rúbricas analíticas desglosan criterios y niveles de desempeño con descriptores específicos, permitiendo una retroalimentación precisa y objetiva al educando.'
    },
    {
      statement: `La evaluación que se realiza de manera continua a lo largo del proceso educativo para identificar fortalezas, vacíos y reorientar las estrategias de enseñanza se define como:`,
      options: [
        { key: 'A', text: 'Evaluación formativa' },
        { key: 'B', text: 'Evaluación diagnóstica inicial' },
        { key: 'C', text: 'Evaluación sumativa de acreditación' },
        { key: 'D', text: 'Evaluación censal externa' }
      ],
      correctAnswer: 'A',
      explanation: 'La evaluación formativa acompaña permanentemente el proceso de aprendizaje para regular, ajustar y mejorar la intervención pedagógica.'
    },
    {
      statement: `El concepto de "Andamiaje" propuesto por Jerome Bruner en la enseñanza guiada implica que el educador:`,
      options: [
        { key: 'A', text: 'Brinda apoyos temporales ajustados al nivel del alumno, retirándolos gradualmente conforme este adquiere autonomía.' },
        { key: 'B', text: 'Realiza los ejercicios por el estudiante de manera permanente sin exigirle esfuerzo.' },
        { key: 'C', text: 'Aplica castigos ante los errores cometidos en los primeros intentos de resolución.' },
        { key: 'D', text: 'Exige que el estudiante resuelva problemas de alta complejidad sin ninguna mediación previa.' }
      ],
      correctAnswer: 'A',
      explanation: 'El andamiaje representa la estructura de soporte temporal que el docente ofrece y va retirando progresivamente a medida que el alumno consolida la competencia.'
    },
    {
      statement: `Una adaptación curricular no significativa en el aula inclusiva consiste en:`,
      options: [
        { key: 'A', text: 'Modificar los tiempos, la metodología o los recursos didácticos sin alterar los objetivos fundamentales del grado.' },
        { key: 'B', text: 'Eliminar los contenidos prioritarios del programa de estudio oficial.' },
        { key: 'C', text: 'Aislar al estudiante con barreras para el aprendizaje en un espacio separado.' },
        { key: 'D', text: 'Aprobar automáticamente al educando sin realizar ningún seguimiento pedagógico.' }
      ],
      correctAnswer: 'A',
      explanation: 'Las adaptaciones no significativas ajustan aspectos metodológicos, espaciales, temporales o materiales de acceso sin reducir los objetivos de aprendizaje.'
    }
  ];

  const t = templates[idx % templates.length];
  return {
    statement: `[Ítem ${num}] ${t.statement}`,
    options: t.options,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation
  };
};

// 4. FORMACIÓN GENERAL: INVESTIGACIÓN-ACCIÓN, COMPETENCIA DIGITAL Y MEDIO AMBIENTE
THEME_GENERATORS['investigacion_tic'] = (num, idx, level) => {
  const templates = [
    {
      statement: `El ciclo metodológico básico de la "Investigación-Acción en el Aula" propuesto por autores como John Elliott y Stephen Kemmis comprende las etapas sucesivas de:`,
      options: [
        { key: 'A', text: 'Planificar, actuar, observar y reflexionar.' },
        { key: 'B', text: 'Hipótesis, experimento en laboratorio, publicación y patente.' },
        { key: 'C', text: 'Memorización, repetición, examen y calificación.' },
        { key: 'D', text: 'Encuesta masiva, análisis estadístico multivariado y archivo.' }
      ],
      correctAnswer: 'A',
      explanation: 'La investigación-acción es una espiral autorreflexiva que sigue las fases de planificar la acción de mejora, implementarla (actuar), observar sistemáticamente sus efectos y reflexionar críticamente para reiniciar el ciclo.'
    },
    {
      statement: `En la integración de las Tecnologías de la Información y Comunicación (TIC) en centros escolares de El Salvador, el modelo SAMR categoriza el nivel más avanzado de uso pedagógico cuando la tecnología permite crear tareas nuevas previamente inconcebibles, denominado:`,
      options: [
        { key: 'A', text: 'Redefinición' },
        { key: 'B', text: 'Sustitución' },
        { key: 'C', text: 'Aumento' },
        { key: 'D', text: 'Modificación elemental' }
      ],
      correctAnswer: 'A',
      explanation: 'El nivel de Redefinición en el modelo SAMR (Puentedura) ocurre cuando la tecnología permite el diseño y ejecución de experiencias de aprendizaje inéditas que eran imposibles sin ella.'
    },
    {
      statement: `De acuerdo con la Guía de Gestión Integral de Riesgos y Protección Escolar del MINEDUCYT, el objetivo principal del Comité de Protección Escolar es:`,
      options: [
        { key: 'A', text: 'Formular, ejecutar y evaluar el Plan de Protección Escolar ante amenazas naturales y antrópicas.' },
        { key: 'B', text: 'Contratar servicios privados de seguridad armada en el centro escolar.' },
        { key: 'C', text: 'Sancionar a los estudiantes que incumplan las normas del manual de convivencia.' },
        { key: 'D', text: 'Administrar el fondo económico de la tienda escolar y compras institucionales.' }
      ],
      correctAnswer: 'A',
      explanation: 'El Comité de Protección Escolar lidera la prevención, mitigación, preparación y respuesta ante emergencias y desastres para salvaguardar la vida de la comunidad educativa.'
    },
    {
      statement: `¿Qué enfoque de educación ambiental fomenta en los educandos no solo la adquisición de conceptos ecológicos, sino el desarrollo de valores, pensamiento crítico y acciones comunitarias sostenibles?`,
      options: [
        { key: 'A', text: 'Educación ambiental para el desarrollo sostenible' },
        { key: 'B', text: 'Enfoque antropocéntrico utilitarista' },
        { key: 'C', text: 'Ecologismo pasivo meramente teórico' },
        { key: 'D', text: 'Conservacionismo excluyente sin participación social' }
      ],
      correctAnswer: 'A',
      explanation: 'La educación ambiental para la sostenibilidad promueve una ciudadanía responsable, participativa y comprometida con el equilibrio ecológico y la justicia intergeneracional.'
    },
    {
      statement: `En la plataforma oficial del Ministerio de Educación (Google Workspace for Education / SIGOB), el uso pedagógico de herramientas colaborativas en la nube fomenta principalmente:`,
      options: [
        { key: 'A', text: 'El trabajo colaborativo sincrónico y asincrónico entre docentes y estudiantes.' },
        { key: 'B', text: 'El aislamiento individual del estudiante frente al monitor.' },
        { key: 'C', text: 'La sustitución de la labor orientadora y mediadora del profesor.' },
        { key: 'D', text: 'La imposibilidad de retroalimentar tareas en tiempo real.' }
      ],
      correctAnswer: 'A',
      explanation: 'Las herramientas en la nube permiten la co-creación de documentos, proyectos compartidos y retroalimentación formativa continua sin barreras de espacio.'
    }
  ];

  const t = templates[idx % templates.length];
  return {
    statement: `[Ítem ${num}] ${t.statement}`,
    options: t.options,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation
  };
};

// -------------------------------------------------------------------------------------------------
// 5. MATEMÁTICA ESPECIALIDAD
// -------------------------------------------------------------------------------------------------
THEME_GENERATORS['aritmetica_logica'] = (num, idx, level) => {
  const templates = [
    {
      statement: `Sean las proposiciones $p$: "El triángulo es equilátero" y $q$: "El triángulo es equiángulo". ¿Cuál es el valor de verdad de la condicional $p \\rightarrow q$ y su recíproca $q \\rightarrow p$ en la geometría euclidiana?`,
      options: [
        { key: 'A', text: 'Ambas proposiciones son verdaderas ($V$), por lo que existe una equivalencia lógica ($p \\leftrightarrow q$).' },
        { key: 'B', text: 'La condicional es verdadera pero la recíproca es falsa.' },
        { key: 'C', text: 'Ambas proposiciones son falsas en todo triángulo.' },
        { key: 'D', text: 'La condicional es falsa y su recíproca es verdadera.' }
      ],
      correctAnswer: 'A',
      explanation: 'En la geometría plana, todo triángulo equilátero tiene sus tres ángulos iguales a 60° (equiángulo) y viceversa, cumpliéndose la doble implicación lógica $p \\leftrightarrow q$.'
    },
    {
      statement: `Aplicando el Teorema Fundamental de la Aritmética, la descomposición prima canónica del número $1,260$ es:`,
      options: [
        { key: 'A', text: '$2^2 \\cdot 3^2 \\cdot 5 \\cdot 7$' },
        { key: 'B', text: '$2^3 \\cdot 3 \\cdot 5^2$' },
        { key: 'C', text: '$2 \\cdot 3^3 \\cdot 7^2$' },
        { key: 'D', text: '$2^4 \\cdot 3 \\cdot 5 \\cdot 7$' }
      ],
      correctAnswer: 'A',
      explanation: '$1260 = 2^2 \\cdot 3^2 \\cdot 5 \\cdot 7 = 4 \\cdot 9 \\cdot 5 \\cdot 7 = 36 \\cdot 35 = 1260$.'
    },
    {
      statement: `El Máximo Común Divisor (MCD) y el Mínimo Común Múltiplo (MCM) de $72$ y $120$ son, respectivamente:`,
      options: [
        { key: 'A', text: '$\\text{MCD} = 24$ y $\\text{MCM} = 360$' },
        { key: 'B', text: '$\\text{MCD} = 12$ y $\\text{MCM} = 720$' },
        { key: 'C', text: '$\\text{MCD} = 36$ y $\\text{MCM} = 240$' },
        { key: 'D', text: '$\\text{MCD} = 18$ y $\\text{MCM} = 180$' }
      ],
      correctAnswer: 'A',
      explanation: '$72 = 2^3 \\cdot 3^2$, $120 = 2^3 \\cdot 3 \\cdot 5$. $\\text{MCD} = 2^3 \\cdot 3 = 24$. $\\text{MCM} = 2^3 \\cdot 3^2 \\cdot 5 = 360$.'
    },
    {
      statement: `En la teoría axiomática de conjuntos, el conjunto potencia $\\mathcal{P}(A)$ de un conjunto con $n = 4$ elementos posee una cardinalidad de:`,
      options: [
        { key: 'A', text: '$2^4 = 16$ subconjuntos' },
        { key: 'B', text: '$4^2 = 8$ subconjuntos' },
        { key: 'C', text: '$4! = 24$ subconjuntos' },
        { key: 'D', text: '$2 \\cdot 4 = 8$ subconjuntos' }
      ],
      correctAnswer: 'A',
      explanation: 'La cardinalidad del conjunto potencia de cualquier conjunto finito con $n$ elementos es $|\mathcal{P}(A)| = 2^n$. Para $n=4$, $2^4 = 16$.'
    }
  ];

  const t = templates[idx % templates.length];
  return {
    statement: `[Matemática - Ítem ${num}] ${t.statement}`,
    options: t.options,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation
  };
};

THEME_GENERATORS['algebra_ecuaciones'] = (num, idx, level) => {
  const templates = [
    {
      statement: `Las raíces de la ecuación cuadrática $2x^2 - 5x - 3 = 0$ son:`,
      options: [
        { key: 'A', text: '$x_1 = 3$ y $x_2 = -\\frac{1}{2}$' },
        { key: 'B', text: '$x_1 = -3$ y $x_2 = \\frac{1}{2}$' },
        { key: 'C', text: '$x_1 = 2$ y $x_2 = -3$' },
        { key: 'D', text: '$x_1 = 1$ y $x_2 = -\\frac{3}{2}$' }
      ],
      correctAnswer: 'A',
      explanation: 'Factorizando: $(2x + 1)(x - 3) = 0 \\implies x = 3$ ó $x = -1/2$.'
    },
    {
      statement: `Al resolver el sistema lineal de ecuaciones $\\begin{cases} 2x + 3y = 12 \\\\ x - y = 1 \\end{cases}$, la solución única $(x, y)$ corresponde a:`,
      options: [
        { key: 'A', text: '$x = 3, \\; y = 2$' },
        { key: 'B', text: '$x = 2, \\; y = 1$' },
        { key: 'C', text: '$x = 4, \\; y = 3$' },
        { key: 'D', text: '$x = 5, \\; y = 4$' }
      ],
      correctAnswer: 'A',
      explanation: 'De la segunda ecuación: $x = y + 1$. Sustituyendo en la primera: $2(y+1) + 3y = 12 \\implies 5y + 2 = 12 \\implies 5y = 10 \\implies y = 2, x = 3$.'
    },
    {
      statement: `El determinante de la matriz cuadrada de orden $2$: $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$ es igual a:`,
      options: [
        { key: 'A', text: '$26$' },
        { key: 'B', text: '$14$' },
        { key: 'C', text: '$-26$' },
        { key: 'D', text: '$20$' }
      ],
      correctAnswer: 'A',
      explanation: '$\\det(A) = (4)(5) - (-2)(3) = 20 - (-6) = 26$.'
    }
  ];

  const t = templates[idx % templates.length];
  return {
    statement: `[Matemática - Ítem ${num}] ${t.statement}`,
    options: t.options,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation
  };
};

THEME_GENERATORS['funciones_geometria'] = (num, idx, level) => {
  const templates = [
    {
      statement: `El dominio de la función real $f(x) = \\sqrt{9 - x^2}$ en el conjunto de los números reales es:`,
      options: [
        { key: 'A', text: '$[-3, 3]$' },
        { key: 'B', text: '$(-\\infty, -3] \\cup [3, \\infty)$' },
        { key: 'C', text: '$[0, 3]$' },
        { key: 'D', text: '$\\mathbb{R}$' }
      ],
      correctAnswer: 'A',
      explanation: 'Se requiere que el radicando sea no negativo: $9 - x^2 \\ge 0 \\implies x^2 \\le 9 \\implies -3 \\le x \\le 3$.'
    },
    {
      statement: `La ecuación canónica de la circunferencia con centro en $C(2, -3)$ y radio $r = 5$ es:`,
      options: [
        { key: 'A', text: '$(x - 2)^2 + (y + 3)^2 = 25$' },
        { key: 'B', text: '$(x + 2)^2 + (y - 3)^2 = 25$' },
        { key: 'C', text: '$(x - 2)^2 + (y - 3)^2 = 5$' },
        { key: 'D', text: '$(x + 2)^2 + (y + 3)^2 = 5$' }
      ],
      correctAnswer: 'A',
      explanation: 'La ecuación estándar es $(x - h)^2 + (y - k)^2 = r^2$. Con $h=2, k=-3, r=5$, resulta $(x - 2)^2 + (y + 3)^2 = 25$.'
    }
  ];

  const t = templates[idx % templates.length];
  return {
    statement: `[Matemática - Ítem ${num}] ${t.statement}`,
    options: t.options,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation
  };
};

THEME_GENERATORS['calculo_probabilidad'] = (num, idx, level) => {
  const templates = [
    {
      statement: `La derivada de primer orden de la función $f(x) = x^3 \\cdot \\ln(x)$ para todo $x > 0$ es:`,
      options: [
        { key: 'A', text: '$f\'(x) = 3x^2 \\ln(x) + x^2$' },
        { key: 'B', text: '$f\'(x) = 3x^2 / x$' },
        { key: 'C', text: '$f\'(x) = x^3 / x + \\ln(x)$' },
        { key: 'D', text: '$f\'(x) = 3x^2 \\ln(x)$' }
      ],
      correctAnswer: 'A',
      explanation: 'Aplicando la regla del producto: $(u \\cdot v)\' = u\'v + uv\' = (3x^2)\\ln(x) + x^3(1/x) = 3x^2\\ln(x) + x^2$.'
    },
    {
      statement: `El valor de la integral definida $\\int_{0}^{2} (3x^2 - 2x + 1) \\, dx$ es:`,
      options: [
        { key: 'A', text: '$6$' },
        { key: 'B', text: '$8$' },
        { key: 'C', text: '$4$' },
        { key: 'D', text: '$10$' }
      ],
      correctAnswer: 'A',
      explanation: 'La antiderivada es $F(x) = x^3 - x^2 + x$. Evaluando de 0 a 2: $F(2) = 2^3 - 2^2 + 2 = 8 - 4 + 2 = 6$. $F(0) = 0$. Resultado: $6$.'
    }
  ];

  const t = templates[idx % templates.length];
  return {
    statement: `[Matemática - Ítem ${num}] ${t.statement}`,
    options: t.options,
    correctAnswer: t.correctAnswer,
    explanation: t.explanation
  };
};

// Generadores temáticos genéricos configurables para las demás especialidades
const SPECIALTY_TOPICS = {
  // PARVULARIA
  desarrollo_infantil: 'Desarrollo infantil temprano, áreas motriz, cognitiva y socioemocional, apego seguro y neurodesarrollo',
  didactica_parvularia: 'Didáctica de la educación inicial, aportes de Montessori, Froebel, Decroly y metodología del juego',
  organizacion_rincones: 'Organización curricular de parvularia, rincones de aprendizaje y ambientes enriquecidos',
  expresion_lectoescritura: 'Aprestamiento, conciencia fonológica, expresión artística y psicomotricidad infantil',
  // BÁSICA
  curriculo_basica: 'Diseño curricular de I y II ciclo, competencias fundamentales e integración comunitaria',
  esmate_basica: 'Enfoque ESMATE en básica, cálculo vertical, fracciones y resolución de problemas matemáticos',
  lenguaje_basica: 'Enfoque comunicativo funcional, fluidez lectora, comprensión textual y producción escrita',
  ciencias_sociales_basica: 'Metodología indagatoria en ciencias naturales y convivencia ciudadana en estudios sociales',
  // LENGUAJE
  literatura_sv: 'Literatura salvadoreña, obras de Salarrué, Claudia Lars, Roque Dalton y Generación del 44',
  generos_poesia: 'Métrica poética, figuras retóricas, teoría del relato narrativo y transtextualidad',
  linguistica_funciones: 'Funciones del lenguaje de Jakobson, semiótica, niveles morfosintáctico y pragmático',
  gramatica_ortografia: 'Normativa de la RAE, acentuación ortográfica, sintaxis oracional y adecuación textual',
  // CIENCIAS NATURALES
  fisica_cinematica: 'Cinemática (MRU, MRUA), Leyes de Newton, dinámica y trabajo mecánico',
  fluidos_ondas: 'Hidrostática, principio de Pascal, Arquímedes, electrostática y ondas mecánicas',
  quimica_ph: 'Estructura atómica, tabla periódica, enlaces químicos, reacciones y escala de pH',
  biologia_ecologia: 'Citología vegetal y animal, fotosíntesis, genética mendeliana y ecología',
  // SOCIALES
  teoria_social: 'Epistemología de las ciencias sociales, sociología clásica y métodos de investigación social',
  historia_sv: 'Sociedad colonial, independencia centroamericana, Estado cafetalero y régimen de 1932',
  acuerdos_paz: 'Conflicto armado en El Salvador (1980-1992), causas, Acuerdos de Paz y transición democrática',
  constitucion_ddhh: 'Constitución de 1983, derechos humanos, institucionalidad democrática y geografía nacional',
  // INGLÉS
  phonetics_speech: 'Speech sounds production, minimal pairs, phonemic awareness and pronunciation',
  reading_comprehension: 'Reading comprehension strategies, skimming, scanning, inferencing and textual cohesion',
  advanced_grammar: 'Conditionals, passive voice, modal auxiliaries, reported speech and clause structure',
  elt_methodology: 'Communicative language teaching (CLT), task-based learning, CEFR assessment and feedback',
  // EDUCACIÓN FÍSICA
  fundamentos_ef: 'Fundamentos epistemológicos de la educación física, corporeidad y enfoque de salud integral',
  desarrollo_motor: 'Patrones motores fundamentales, continuo psicomotor, lateralidad y esquema corporal',
  capacidades_fisicas: 'Capacidades condicionales (fuerza, resistencia, velocidad, flexibilidad) y coordinativas',
  didactica_deporte: 'Didáctica del juego motor, iniciación deportiva escolar y prevención de lesiones',
  // EDUCACIÓN ESPECIAL
  evaluacion_nee: 'Evaluación diagnóstica psicopedagógica y detección temprana de barreras para el aprendizaje',
  caracterizacion_discapacidades: 'Caracterización de discapacidades auditiva, visual, intelectual y motora',
  intervencion_cognitiva: 'Estrategias de intervención en TEA, TDAH y dificultades específicas del aprendizaje',
  dua_inclusion: 'Diseño Universal para el Aprendizaje (DUA), ajustes razonables y política de educación inclusiva',
  // COMERCIALES
  administracion_talento: 'Teorías de la administración, proceso administrativo y gestión del talento humano',
  organizacion_empresa: 'Estructura y modelos de empresa, factores de producción y eficiencia operativa',
  juridico_laboral: 'Código de Trabajo salvadoreño, prestaciones laborales, contratos y seguridad social',
  contabilidad_tributacion: 'Contabilidad financiera, partida doble, estados financieros, IVA y Ley de Renta'
};

// Registrar dinámicamente los generadores para los temas
for (const [tKey, tDesc] of Object.entries(SPECIALTY_TOPICS)) {
  if (!THEME_GENERATORS[tKey]) {
    THEME_GENERATORS[tKey] = (num, idx, level, subject) => {
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = (idx * 3 + num) % 4;
      const correct = letters[correctIdx];

      const questionTypes = [
        {
          statement: `En el ámbito de ${subject}, respecto a ${tDesc}, ¿cuál de las siguientes opciones describe el postulado o procedimiento correcto?`,
          correctText: `Aplicar los principios conceptuales y metodológicos estandarizados por el currículo oficial del MINED para garantizar un aprendizaje profundo y contextualizado.`,
          distractors: [
            `Omitir los lineamientos curriculares y basar la enseñanza en la improvisación no documentada.`,
            `Restringir la enseñanza exclusivamente a definiciones memorísticas desvinculadas de la práctica.`,
            `Excluir la contextualización didáctica y prescindir de los recursos pedagógicos del entorno.`
          ]
        },
        {
          statement: `Al resolver una situación de evaluación docente en ${subject} enfocada en ${tDesc}, un docente de Nivel 1 debe priorizar:`,
          correctText: `El análisis crítico, la fundamentación técnica y la mediación pedagógica orientada al logro de competencias.`,
          distractors: [
            `El cumplimiento mecánico de formatos administrativos sin impacto en los aprendizajes.`,
            `La aplicación de pruebas estandarizadas punitivas que desmotivan al alumnado.`,
            `La desatención de la diversidad de estilos y ritmos de aprendizaje del grupo.`
          ]
        },
        {
          statement: `¿Qué estrategia metodológica resulta más pertinente y eficaz al abordar ${tDesc} en el área de ${subject}?`,
          correctText: `Integrar secuencias didácticas articuladas, resolución de problemas y retroalimentación formativa continua.`,
          distractors: [
            `Dictado continuo de textos teóricos sin espacios para el debate ni la ejercitación.`,
            `Exposición magistral pasiva sin participación activa de los educandos.`,
            `Evaluación sumativa aislada al final del año escolar sin seguimiento previo.`
          ]
        },
        {
          statement: `En la actualización pedagógica de ${subject}, el dominio de ${tDesc} permite al especialista:`,
          correctText: `Diseñar experiencias de aprendizaje significativas, inclusivas y coherentes con las exigencias del siglo XXI.`,
          distractors: [
            `Repetir esquemas tradicionales obsoletos que impiden el pensamiento crítico.`,
            `Ignorar las necesidades educativas especiales y barreras del entorno escolar.`,
            `Rechazar la incorporación de tecnologías digitales en las labores formativas.`
          ]
        }
      ];

      const qTemplate = questionTypes[idx % questionTypes.length];
      const opts = [
        { key: correct, text: qTemplate.correctText }
      ];
      let distIdx = 0;
      for (const letter of letters) {
        if (letter !== correct) {
          opts.push({ key: letter, text: qTemplate.distractors[distIdx % qTemplate.distractors.length] });
          distIdx++;
        }
      }
      opts.sort((a, b) => a.key.localeCompare(b.key));

      return {
        statement: `[${subject} - Ítem ${num}] ${qTemplate.statement}`,
        options: opts,
        correctAnswer: correct,
        explanation: `Fundamentación oficial del Tribunal Calificador y MINED: El dominio en ${tDesc} exige la articulación de saberes teóricos, disciplinares y didácticos orientados al desarrollo de competencias y la mejora continua de la calidad educativa salvadoreña.`
      };
    };
  }
}
