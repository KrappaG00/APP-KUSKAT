import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'public', 'data', 'escalafon', 'questions');
fs.mkdirSync(outDir, { recursive: true });

// Definición de las 11 asignaturas/secciones con sus bloques temáticos
const SUBJECT_CONFIGS = [
  {
    id: 'escalafon_general',
    name: 'Formación General Pedagógica y Legislación',
    subtopicId: 'escalafon_general',
    topic: 'Formación General Pedagógica y Normativa',
    blocks: [
      {
        title: 'SECCIÓN I: TEORÍAS PEDAGÓGICAS Y DESARROLLO COGNITIVO (1–75)',
        range: [1, 75],
        theme: 'pedagogia'
      },
      {
        title: 'SECCIÓN II: MARCO LEGAL Y NORMATIVA DE LA CARRERA DOCENTE (76–150)',
        range: [76, 150],
        theme: 'legislacion'
      },
      {
        title: 'SECCIÓN III: DIDÁCTICA, SECUENCIAS Y EVALUACIÓN POR COMPETENCIAS (151–225)',
        range: [151, 225],
        theme: 'didactica_evaluacion'
      },
      {
        title: 'SECCIÓN IV: INVESTIGACIÓN-ACCIÓN, COMPETENCIA DIGITAL Y MEDIO AMBIENTE (226–300)',
        range: [226, 300],
        theme: 'investigacion_tic'
      }
    ]
  },
  {
    id: 'escalafon_parvularia',
    name: 'Educación Parvularia',
    subtopicId: 'escalafon_parvularia',
    topic: 'Didáctica y Desarrollo en Educación Parvularia',
    blocks: [
      {
        title: 'SECCIÓN I: DESARROLLO INFANTIL Y ESTIMULACIÓN TEMPRANA (1–75)',
        range: [1, 75],
        theme: 'desarrollo_infantil'
      },
      {
        title: 'SECCIÓN II: DIDÁCTICA Y METODOLOGÍAS DEL NIVEL INICIAL Y PARVULARIO (76–150)',
        range: [76, 150],
        theme: 'didactica_parvularia'
      },
      {
        title: 'SECCIÓN III: ORGANIZACIÓN CURRICULAR Y RINCONES DE APRENDIZAJE (151–225)',
        range: [151, 225],
        theme: 'organizacion_rincones'
      },
      {
        title: 'SECCIÓN IV: EXPRESIÓN CREATIVA, LECTOESCRITURA Y COMUNICACIÓN (226–300)',
        range: [226, 300],
        theme: 'expresion_lectoescritura'
      }
    ]
  },
  {
    id: 'escalafon_basica',
    name: 'Educación Básica (I y II Ciclo)',
    subtopicId: 'escalafon_basica',
    topic: 'Didáctica Integral de Educación Básica',
    blocks: [
      {
        title: 'SECCIÓN I: FUNDAMENTOS DEL CURRÍCULO DE I Y II CICLO (1–75)',
        range: [1, 75],
        theme: 'curriculo_basica'
      },
      {
        title: 'SECCIÓN II: DIDÁCTICA DE LA MATEMÁTICA Y ESMATE EN PRIMARIA (76–150)',
        range: [76, 150],
        theme: 'esmate_basica'
      },
      {
        title: 'SECCIÓN III: DIDÁCTICA DEL LENGUAJE, LECTURA Y ESCRITURA (151–225)',
        range: [151, 225],
        theme: 'lenguaje_basica'
      },
      {
        title: 'SECCIÓN IV: DIDÁCTICA DE CIENCIAS NATURALES Y ESTUDIOS SOCIALES (226–300)',
        range: [226, 300],
        theme: 'ciencias_sociales_basica'
      }
    ]
  },
  {
    id: 'escalafon_lenguaje',
    name: 'Lenguaje y Literatura',
    subtopicId: 'escalafon_lenguaje',
    topic: 'Especialidad en Lenguaje y Literatura',
    blocks: [
      {
        title: 'SECCIÓN I: LITERATURA SALVADOREÑA Y TEORÍA NARRATIVA (1–75)',
        range: [1, 75],
        theme: 'literatura_sv'
      },
      {
        title: 'SECCIÓN II: GÉNEROS LITERARIOS, POESÍA Y TRANSTEXTUALIDAD (76–150)',
        range: [76, 150],
        theme: 'generos_poesia'
      },
      {
        title: 'SECCIÓN III: LINGÜÍSTICA, SEMÁNTICA Y FUNCIONES DEL LENGUAJE (151–225)',
        range: [151, 225],
        theme: 'linguistica_funciones'
      },
      {
        title: 'SECCIÓN IV: GRAMÁTICA, ORTOGRAFÍA RAE Y DIDÁCTICA COMUNICATIVA (226–300)',
        range: [226, 300],
        theme: 'gramatica_ortografia'
      }
    ]
  },
  {
    id: 'escalafon_matematica',
    name: 'Matemática',
    subtopicId: 'escalafon_matematica',
    topic: 'Especialidad en Matemática',
    blocks: [
      {
        title: 'SECCIÓN I: ARITMÉTICA, CONJUNTOS Y LÓGICA MATEMÁTICA (1–75)',
        range: [1, 75],
        theme: 'aritmetica_logica'
      },
      {
        title: 'SECCIÓN II: ÁLGEBRA, SISTEMAS DE ECUACIONES Y MATRICES (76–150)',
        range: [76, 150],
        theme: 'algebra_ecuaciones'
      },
      {
        title: 'SECCIÓN III: RELACIONES, FUNCIONES Y GEOMETRÍA ANALÍTICA (151–225)',
        range: [151, 225],
        theme: 'funciones_geometria'
      },
      {
        title: 'SECCIÓN IV: CÁLCULO DIFERENCIAL, INTEGRAL Y PROBABILIDAD (226–300)',
        range: [226, 300],
        theme: 'calculo_probabilidad'
      }
    ]
  },
  {
    id: 'escalafon_naturales',
    name: 'Ciencias Naturales',
    subtopicId: 'escalafon_naturales',
    topic: 'Especialidad en Ciencias Naturales',
    blocks: [
      {
        title: 'SECCIÓN I: FÍSICA CLÁSICA, CINEMÁTICA Y LEYES DE NEWTON (1–75)',
        range: [1, 75],
        theme: 'fisica_cinematica'
      },
      {
        title: 'SECCIÓN II: FLUIDOS, ENERGÍA, ONDAS Y ELECTROSTÁTICA (76–150)',
        range: [76, 150],
        theme: 'fluidos_ondas'
      },
      {
        title: 'SECCIÓN III: QUÍMICA: ÁTOMOS, TABLA PERIÓDICA, ENLACES Y PH (151–225)',
        range: [151, 225],
        theme: 'quimica_ph'
      },
      {
        title: 'SECCIÓN IV: BIOLOGÍA, CITOLOGÍA, GENÉTICA Y ECOLOGÍA (226–300)',
        range: [226, 300],
        theme: 'biologia_ecologia'
      }
    ]
  },
  {
    id: 'escalafon_sociales',
    name: 'Ciencias Sociales',
    subtopicId: 'escalafon_sociales',
    topic: 'Especialidad en Ciencias Sociales',
    blocks: [
      {
        title: 'SECCIÓN I: EPISTEMOLOGÍA Y TEORÍAS DE LAS CIENCIAS SOCIALES (1–75)',
        range: [1, 75],
        theme: 'teoria_social'
      },
      {
        title: 'SECCIÓN II: HISTORIA DE EL SALVADOR Y CENTROAMÉRICA (76–150)',
        range: [76, 150],
        theme: 'historia_sv'
      },
      {
        title: 'SECCIÓN III: CONFLICTO ARMADO, ACUERDOS DE PAZ Y DEMOCRACIA (151–225)',
        range: [151, 225],
        theme: 'acuerdos_paz'
      },
      {
        title: 'SECCIÓN IV: DERECHOS HUMANOS, CONSTITUCIÓN Y GEOGRAFÍA (226–300)',
        range: [226, 300],
        theme: 'constitucion_ddhh'
      }
    ]
  },
  {
    id: 'escalafon_ingles',
    name: 'Inglés (English)',
    subtopicId: 'escalafon_ingles',
    topic: 'English Language Specialty',
    blocks: [
      {
        title: 'SECTION I: PHONETICS, SPEECH PRODUCTION AND MINIMAL PAIRS (1–75)',
        range: [1, 75],
        theme: 'phonetics_speech'
      },
      {
        title: 'SECTION II: READING COMPREHENSION AND TEXTUAL INFERENCE (76–150)',
        range: [76, 150],
        theme: 'reading_comprehension'
      },
      {
        title: 'SECTION III: ADVANCED GRAMMAR, SYNTAX AND DISCOURSE MARKERS (151–225)',
        range: [151, 225],
        theme: 'advanced_grammar'
      },
      {
        title: 'SECTION IV: ELT METHODOLOGY, TASK-BASED LEARNING AND ASSESSMENT (226–300)',
        range: [226, 300],
        theme: 'elt_methodology'
      }
    ]
  },
  {
    id: 'escalafon_fisica',
    name: 'Educación Física',
    subtopicId: 'escalafon_fisica',
    topic: 'Especialidad en Educación Física',
    blocks: [
      {
        title: 'SECCIÓN I: FUNDAMENTOS CURRICULARES Y EPISTEMOLOGÍA DE LA EDUCACIÓN FÍSICA (1–75)',
        range: [1, 75],
        theme: 'fundamentos_ef'
      },
      {
        title: 'SECCIÓN II: DESARROLLO MOTOR, CONTINUO PSICOMOTOR Y LATERALIDAD (76–150)',
        range: [76, 150],
        theme: 'desarrollo_motor'
      },
      {
        title: 'SECCIÓN III: CAPACIDADES FÍSICAS CONDICIONALES Y COORDINATIVAS (151–225)',
        range: [151, 225],
        theme: 'capacidades_fisicas'
      },
      {
        title: 'SECCIÓN IV: DIDÁCTICA DEL DEPORTE, PLANIFICACIÓN Y EVALUACIÓN (226–300)',
        range: [226, 300],
        theme: 'didactica_deporte'
      }
    ]
  },
  {
    id: 'escalafon_especial',
    name: 'Educación Especial',
    subtopicId: 'escalafon_especial',
    topic: 'Especialidad en Educación Especial',
    blocks: [
      {
        title: 'SECCIÓN I: EVALUACIÓN Y DIAGNÓSTICO DE NECESIDADES EDUCATIVAS ESPECIALES (1–75)',
        range: [1, 75],
        theme: 'evaluacion_nee'
      },
      {
        title: 'SECCIÓN II: CARACTERIZACIÓN DE DISCAPACIDADES Y TRASTORNOS (76–150)',
        range: [76, 150],
        theme: 'caracterizacion_discapacidades'
      },
      {
        title: 'SECCIÓN III: METODOLOGÍAS Y ESTRATEGIAS DE INTERVENCIÓN COGNITIVA (151–225)',
        range: [151, 225],
        theme: 'intervencion_cognitiva'
      },
      {
        title: 'SECCIÓN IV: DISEÑO UNIVERSAL PARA EL APRENDIZAJE (DUA) E INCLUSIÓN EDUCATIVA (226–300)',
        range: [226, 300],
        theme: 'dua_inclusion'
      }
    ]
  },
  {
    id: 'escalafon_comerciales',
    name: 'Ciencias Comerciales',
    subtopicId: 'escalafon_comerciales',
    topic: 'Especialidad en Ciencias Comerciales',
    blocks: [
      {
        title: 'SECCIÓN I: TEORÍA DE LA ADMINISTRACIÓN Y TALENTO HUMANO (1–75)',
        range: [1, 75],
        theme: 'administracion_talento'
      },
      {
        title: 'SECCIÓN II: ORGANIZACIÓN, MODELOS DE EMPRESA Y PROCESOS PRODUCTIVOS (76–150)',
        range: [76, 150],
        theme: 'organizacion_empresa'
      },
      {
        title: 'SECCIÓN III: MARCO JURÍDICO COMERCIAL, LABORAL Y TRIBUTARIO (151–225)',
        range: [151, 225],
        theme: 'juridico_laboral'
      },
      {
        title: 'SECCIÓN IV: CONTABILIDAD FINANCIERA, TRIBUTACIÓN Y ÉTICA GUBERNAMENTAL (226–300)',
        range: [226, 300],
        theme: 'contabilidad_tributacion'
      }
    ]
  }
];

export { SUBJECT_CONFIGS, outDir };
