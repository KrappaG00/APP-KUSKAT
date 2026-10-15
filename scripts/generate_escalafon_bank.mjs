import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'public', 'data', 'escalafon');
fs.mkdirSync(outDir, { recursive: true });

const curriculum = {
  title: 'Evaluación para el Ascenso al Nivel Uno del Escalafón Docente — MINED 2026',
  description: 'Banco oficial de preparación para las pruebas de suficiencia y ascenso de categoría docente convocadas por el Tribunal Calificador de la Carrera Docente del Ministerio de Educación de El Salvador (MINED), estructurado en Formación General y 10 Especialidades Curriculares (300 preguntas por sección).',
  institution: 'ESCALAFON',
  totalQuestions: 3300,
  totalSubtopics: 11,
  subjects: [
    {
      id: 'escalafon_general',
      number: 1,
      name: 'Formación General Pedagógica y Legislación',
      codeRange: '1.1 al 1.12',
      description: 'Pensamiento pedagógico, desarrollo cognitivo de Piaget, fines de la educación, marco normativo (Ley de la Carrera Docente, Ley Crecer Juntos, Ley de Ética Gubernamental), secuencias didácticas, adaptaciones curriculares, evaluación por competencias, investigación y TIC.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-purple-700 to-indigo-800',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-800',
      borderColor: 'border-purple-200',
      icon: 'Award',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_general',
          code: '1.0',
          title: 'Formación General Pedagógica y Normativa',
          subjectId: 'escalafon_general',
          questionCount: 300,
          sections: [
            'SECCIÓN I: TEORÍAS PEDAGÓGICAS Y DESARROLLO COGNITIVO (1–75)',
            'SECCIÓN II: MARCO LEGAL Y NORMATIVA DE LA CARRERA DOCENTE (76–150)',
            'SECCIÓN III: DIDÁCTICA, SECUENCIAS Y EVALUACIÓN POR COMPETENCIAS (151–225)',
            'SECCIÓN IV: INVESTIGACIÓN-ACCIÓN, COMPETENCIA DIGITAL Y MEDIO AMBIENTE (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_parvularia',
      number: 2,
      name: 'Educación Parvularia',
      codeRange: '2.1 al 2.4',
      description: 'Desarrollo infantil físico, psicomotor y socioafectivo, estimulación temprana, didáctica y precursores de la educación inicial, organización curricular, rincones de aprendizaje y expresión creativa.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-pink-600 to-rose-700',
      badgeBg: 'bg-pink-100',
      badgeText: 'text-pink-800',
      borderColor: 'border-pink-200',
      icon: 'Sparkles',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_parvularia',
          code: '2.0',
          title: 'Didáctica y Desarrollo en Educación Parvularia',
          subjectId: 'escalafon_parvularia',
          questionCount: 300,
          sections: [
            'SECCIÓN I: DESARROLLO INFANTIL Y ESTIMULACIÓN TEMPRANA (1–75)',
            'SECCIÓN II: DIDÁCTICA Y METODOLOGÍAS DEL NIVEL INICIAL Y PARVULARIO (76–150)',
            'SECCIÓN III: ORGANIZACIÓN CURRICULAR Y RINCONES DE APRENDIZAJE (151–225)',
            'SECCIÓN IV: EXPRESIÓN CREATIVA, LECTOESCRITURA Y COMUNICACIÓN (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_basica',
      number: 3,
      name: 'Educación Básica (I y II Ciclo)',
      codeRange: '3.1 al 3.4',
      description: 'Didáctica de la educación primaria (1.° a 6.° grado), procesos de alfabetización inicial, enfoque ESMATE en básica, comprensión lectora, indagación en ciencias y ciencias sociales comunitarias.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-blue-600 to-cyan-700',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-800',
      borderColor: 'border-blue-200',
      icon: 'BookOpen',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_basica',
          code: '3.0',
          title: 'Didáctica Integral de Educación Básica',
          subjectId: 'escalafon_basica',
          questionCount: 300,
          sections: [
            'SECCIÓN I: FUNDAMENTOS DEL CURRÍCULO DE I Y II CICLO (1–75)',
            'SECCIÓN II: DIDÁCTICA DE LA MATEMÁTICA Y ESMATE EN PRIMARIA (76–150)',
            'SECCIÓN III: DIDÁCTICA DEL LENGUAJE, LECTURA Y ESCRITURA (151–225)',
            'SECCIÓN IV: DIDÁCTICA DE CIENCIAS NATURALES Y ESTUDIOS SOCIALES (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_lenguaje',
      number: 4,
      name: 'Lenguaje y Literatura',
      codeRange: '4.1 al 4.4',
      description: 'Literatura salvadoreña y universal, generaciones literarias, sintaxis narrativa, niveles del discurso, lingüística, semiótica, funciones del lenguaje, normativa de la RAE y didáctica de la lengua.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-amber-600 to-orange-700',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-800',
      borderColor: 'border-amber-200',
      icon: 'Feather',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_lenguaje',
          code: '4.0',
          title: 'Especialidad en Lenguaje y Literatura',
          subjectId: 'escalafon_lenguaje',
          questionCount: 300,
          sections: [
            'SECCIÓN I: LITERATURA SALVADOREÑA Y TEORÍA NARRATIVA (1–75)',
            'SECCIÓN II: GÉNEROS LITERARIOS, POESÍA Y TRANSTEXTUALIDAD (76–150)',
            'SECCIÓN III: LINGÜÍSTICA, SEMÁNTICA Y FUNCIONES DEL LENGUAJE (151–225)',
            'SECCIÓN IV: GRAMÁTICA, ORTOGRAFÍA RAE Y DIDÁCTICA COMUNICATIVA (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_matematica',
      number: 5,
      name: 'Matemática',
      codeRange: '5.1 al 5.4',
      description: 'Aritmética, lógica proposicional, álgebra de polinomios y matrices, funciones reales y trascendentales, geometría euclidiana y analítica, cálculo diferencial e integral, probabilidad y didáctica.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-indigo-600 to-blue-800',
      badgeBg: 'bg-indigo-100',
      badgeText: 'text-indigo-800',
      borderColor: 'border-indigo-200',
      icon: 'Calculator',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_matematica',
          code: '5.0',
          title: 'Especialidad en Matemática',
          subjectId: 'escalafon_matematica',
          questionCount: 300,
          sections: [
            'SECCIÓN I: ARITMÉTICA, CONJUNTOS Y LÓGICA MATEMÁTICA (1–75)',
            'SECCIÓN II: ÁLGEBRA, SISTEMAS DE ECUACIONES Y MATRICES (76–150)',
            'SECCIÓN III: RELACIONES, FUNCIONES Y GEOMETRÍA ANALÍTICA (151–225)',
            'SECCIÓN IV: CÁLCULO DIFERENCIAL, INTEGRAL Y PROBABILIDAD (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_naturales',
      number: 6,
      name: 'Ciencias Naturales',
      codeRange: '6.1 al 6.4',
      description: 'Física clásica y leyes del movimiento, fluidos y termodinámica, química atómica y reacciones, citología y genética biológica, ecología y cambio climático con enfoque CTSA.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-teal-600 to-emerald-700',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-800',
      borderColor: 'border-teal-200',
      icon: 'Atom',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_naturales',
          code: '6.0',
          title: 'Especialidad en Ciencias Naturales',
          subjectId: 'escalafon_naturales',
          questionCount: 300,
          sections: [
            'SECCIÓN I: FÍSICA CLÁSICA, CINEMÁTICA Y LEYES DE NEWTON (1–75)',
            'SECCIÓN II: FLUIDOS, ENERGÍA, ONDAS Y ELECTROSTÁTICA (76–150)',
            'SECCIÓN III: QUÍMICA: ÁTOMOS, TABLA PERIÓDICA, ENLACES Y PH (151–225)',
            'SECCIÓN IV: BIOLOGÍA, CITOLOGÍA, GENÉTICA Y ECOLOGÍA (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_sociales',
      number: 7,
      name: 'Ciencias Sociales',
      codeRange: '7.1 al 7.4',
      description: 'Epistemología y teorías sociológicas, historia colonial e independiente de Centroamérica, República Cafetalera, militarismo salvadoreño, conflicto armado, Acuerdos de Paz y Constitución de 1983.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-rose-600 to-pink-700',
      badgeBg: 'bg-rose-100',
      badgeText: 'text-rose-800',
      borderColor: 'border-rose-200',
      icon: 'Landmark',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_sociales',
          code: '7.0',
          title: 'Especialidad en Ciencias Sociales',
          subjectId: 'escalafon_sociales',
          questionCount: 300,
          sections: [
            'SECCIÓN I: EPISTEMOLOGÍA Y TEORÍAS DE LAS CIENCIAS SOCIALES (1–75)',
            'SECCIÓN II: HISTORIA DE EL SALVADOR Y CENTROAMÉRICA (76–150)',
            'SECCIÓN III: CONFLICTO ARMADO, ACUERDOS DE PAZ Y DEMOCRACIA (151–225)',
            'SECCIÓN IV: DERECHOS HUMANOS, CONSTITUCIÓN Y GEOGRAFÍA (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_ingles',
      number: 8,
      name: 'Inglés (English)',
      codeRange: '8.1 al 8.4',
      description: 'Listening and speech production, minimal pairs, reading comprehension in academic contexts, advanced grammar, communicative language teaching methodology (CLT), and CEFR assessment.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-sky-600 to-blue-700',
      badgeBg: 'bg-sky-100',
      badgeText: 'text-sky-800',
      borderColor: 'border-sky-200',
      icon: 'Globe',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_ingles',
          code: '8.0',
          title: 'English Language Specialty',
          subjectId: 'escalafon_ingles',
          questionCount: 300,
          sections: [
            'SECTION I: PHONETICS, SPEECH PRODUCTION AND MINIMAL PAIRS (1–75)',
            'SECTION II: READING COMPREHENSION AND TEXTUAL INFERENCE (76–150)',
            'SECTION III: ADVANCED GRAMMAR, SYNTAX AND DISCOURSE MARKERS (151–225)',
            'SECTION IV: ELT METHODOLOGY, TASK-BASED LEARNING AND ASSESSMENT (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_fisica',
      number: 9,
      name: 'Educación Física',
      codeRange: '9.1 al 9.4',
      description: 'Fundamentos epistemológicos de la educación física, desarrollo motor, continuo psicomotor, capacidades físicas condicionales y coordinativas, didáctica del deporte escolar y programas de estudio.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-emerald-600 to-green-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      borderColor: 'border-emerald-200',
      icon: 'Award',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_fisica',
          code: '9.0',
          title: 'Especialidad en Educación Física',
          subjectId: 'escalafon_fisica',
          questionCount: 300,
          sections: [
            'SECCIÓN I: FUNDAMENTOS CURRICULARES Y EPISTEMOLOGÍA DE LA EDUCACIÓN FÍSICA (1–75)',
            'SECCIÓN II: DESARROLLO MOTOR, CONTINUO PSICOMOTOR Y LATERALIDAD (76–150)',
            'SECCIÓN III: CAPACIDADES FÍSICAS CONDICIONALES Y COORDINATIVAS (151–225)',
            'SECCIÓN IV: DIDÁCTICA DEL DEPORTE, PLANIFICACIÓN Y EVALUACIÓN (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_especial',
      number: 10,
      name: 'Educación Especial',
      codeRange: '10.1 al 10.4',
      description: 'Evaluación y diagnóstico psicopedagógico de NEE, caracterización de discapacidades sensoriales, motoras e intelectuales, trastornos del neurodesarrollo (TEA, TDAH), Diseño Universal para el Aprendizaje (DUA) e inclusión.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-violet-600 to-purple-700',
      badgeBg: 'bg-violet-100',
      badgeText: 'text-violet-800',
      borderColor: 'border-violet-200',
      icon: 'Shield',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_especial',
          code: '10.0',
          title: 'Especialidad en Educación Especial',
          subjectId: 'escalafon_especial',
          questionCount: 300,
          sections: [
            'SECCIÓN I: EVALUACIÓN Y DIAGNÓSTICO DE NECESIDADES EDUCATIVAS ESPECIALES (1–75)',
            'SECCIÓN II: CARACTERIZACIÓN DE DISCAPACIDADES Y TRASTORNOS (76–150)',
            'SECCIÓN III: METODOLOGÍAS Y ESTRATEGIAS DE INTERVENCIÓN COGNITIVA (151–225)',
            'SECCIÓN IV: DISEÑO UNIVERSAL PARA EL APRENDIZAJE (DUA) E INCLUSIÓN EDUCATIVA (226–300)'
          ]
        }
      ]
    },
    {
      id: 'escalafon_comerciales',
      number: 11,
      name: 'Ciencias Comerciales',
      codeRange: '11.1 al 11.4',
      description: 'Administración empresarial, talento humano y prestaciones de ley, modelos de empresa, factores productivos, regulaciones jurídicas (Código de Comercio, Ley de Renta, Ley del ISSS) y contabilidad.',
      totalSubtopics: 1,
      totalQuestions: 300,
      color: 'from-slate-700 to-slate-900',
      badgeBg: 'bg-slate-100',
      badgeText: 'text-slate-800',
      borderColor: 'border-slate-300',
      icon: 'Landmark',
      institution: 'ESCALAFON',
      subtopics: [
        {
          id: 'escalafon_comerciales',
          code: '11.0',
          title: 'Especialidad en Ciencias Comerciales',
          subjectId: 'escalafon_comerciales',
          questionCount: 300,
          sections: [
            'SECCIÓN I: TEORÍA DE LA ADMINISTRACIÓN Y TALENTO HUMANO (1–75)',
            'SECCIÓN II: ORGANIZACIÓN, MODELOS DE EMPRESA Y PROCESOS PRODUCTIVOS (76–150)',
            'SECCIÓN III: MARCO JURÍDICO COMERCIAL, LABORAL Y TRIBUTARIO (151–225)',
            'SECCIÓN IV: CONTABILIDAD FINANCIERA, TRIBUTACIÓN Y ÉTICA GUBERNAMENTAL (226–300)'
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync(
  path.join(outDir, 'curriculum.json'),
  JSON.stringify(curriculum, null, 2),
  'utf-8'
);

console.log('Currículo de Escalafón Docente generado con éxito (11 asignaturas, 3,300 preguntas).');
