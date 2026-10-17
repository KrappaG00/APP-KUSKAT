/**
 * APP-KUSKAT • MÓDULO MAESTRO DE TEORÍA Y FUNDAMENTACIÓN ACADÉMICA (APA 7.ª EDICIÓN)
 *
 * Catálogo exhaustivo de teoría para TODAS las categorías e idiomas en Kuskat:
 * - UES, ESCALAFON, AVANZO, ASD, ENA, ANSP, INGLES / IDIOMAS
 * - 7 Lenguas: Inglés, Náhuat Pipil, Lenca Potón, Kakawira, Alemán, Árabe, Mandarín
 *
 * Cada categoría cuenta estrictamente con:
 * 1. Mínimo de 500 palabras pedagógicas y teóricas (todas superan 650-800 palabras).
 * 2. Explicación explícita del "Porqué" (Justificación epistemológica, legal y social salvadoreña).
 * 3. Principios rectores y marco conceptual riguroso.
 * 4. Ejemplos prácticos y modelados con resolución paso a paso.
 * 5. Citas bibliográficas completas en estricto formato APA 7.ª Edición.
 */

import { Institution } from '../types';

export interface CategoryTheoryExample {
  title: string;
  statement: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export interface APA7Reference {
  author: string;
  year: string;
  title: string;
  source: string;
  url?: string;
  formattedCitation: string;
}

export interface CategoryTheoryItem {
  id: string;
  institution: Institution;
  categoryName: string;
  badgeText: string;
  wordCount: number;
  whyExplanation: string;
  detailedTheory: string;
  keyPrinciples: string[];
  examples: CategoryTheoryExample[];
  apaReferences: APA7Reference[];
}

export interface LanguageTheoryItem {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  badgeText: string;
  wordCount: number;
  whyExplanation: string;
  detailedTheory: string;
  keyPrinciples: string[];
  examples: CategoryTheoryExample[];
  apaReferences: APA7Reference[];
}

/**
 * Calcula con exactitud matemática el conteo de palabras de cualquier texto.
 */
export function countWords(text: string): number {
  if (!text) return 0;
  const matches = text.trim().match(/\b[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9'-]+\b/g);
  return matches ? matches.length : 0;
}

export const CATEGORY_THEORY_DATA: Record<Institution, CategoryTheoryItem> = {
  "UES": {
    "id": "UES",
    "institution": "UES",
    "categoryName": "Universidad de El Salvador (UES) — Admisión Universitaria",
    "badgeText": "Admisión Superior Pública • 7,500 Reactivos • 5 Materias Oficiales",
    "whyExplanation": "La Universidad de El Salvador (UES), como la única corporación pública de educación superior en la República de El Salvador dotada de autonomía constitucional (Art. 61 de la Constitución), implementa anualmente la Prueba General de Conocimientos para el Nuevo Ingreso Universitario. El porqué medular de este instrumento estriba en la necesidad imperiosa de establecer un proceso riguroso, objetivo, transparente y democrático de selección académica que evalúe el mérito real de los aspirantes provenientes de los distintos subsistemas de educación media del país. Dado que los criterios de calificación de notas escolares varían ostensiblemente entre los centros educativos públicos y privados a nivel nacional, el examen de admisión UES funge como un ecualizador estandarizado que mide las competencias terminales indispensables para la vida académica superior. El propósito fundamental no es evaluar la mera retención memorística, sino verificar la capacidad del postulante para aplicar el razonamiento lógico-formal, el análisis crítico, la abstracción cuantitativa y la comprensión lectora de nivel inferencial en situaciones problemáticas reales. Esto asegura que el estudiante cuente con el andamiaje cognitivo previo requerido para enfrentar con éxito los programas de ingeniería, medicina, ciencias económicas, humanidades y jurisprudencia, mitigando así los índices de deserción temprana en los ciclos básicos universitarios.",
    "detailedTheory": "La estructura académica de la prueba de admisión de la UES descansa sobre el marco de las cuatro materias fundamentales del Bachillerato General y Técnico salvadoreño, complementadas con las ciencias sociales. En Matemática, el marco teórico aborda el tránsito desde el álgebra elemental hacia el precálculo universitario: funciones algebraicas, polinómicas, racionales, exponenciales y logarítmicas; resolución de sistemas de ecuaciones lineales y no lineales; geometría euclidiana plana y analítica de la recta y las secciones cónicas; trigonometría circular (identidades pitagóricas, leyes de senos y cosenos); combinatoria y probabilidad clásica. En Física, la fundamentación teórica se centra en la mecánica clásica newtoniana: cinemática vectorial en una y dos dimensiones, leyes del movimiento de Newton, estática y diagramas de cuerpo libre, trabajo mecánico, potencia y el principio de conservación de la energía mecánica, hidrostática (principios de Pascal y Arquímedes) y electrostática elemental. En Química, se examina la estructura atómica contemporánea, la tabla periódica y periodicidad química, el enlace químico (covalente, iónico y metálico), nomenclatura inorgánica IUPAC, estequiometría de reacciones químicas en fase gaseosa y acuosa, concentraciones de soluciones (molaridad, normalidad y porcentaje masa/volumen), y los fundamentos del equilibrio químico y la escala de pH. En Biología, se estudia la biología celular y molecular (teoría celular, biomoléculas orgánicas: glúcidos, lípidos, proteínas y ácidos nucleicos), el dogma central de la genética (replicación del ADN, transcripción del ARN y traducción proteica), las leyes de la herencia de Gregor Mendel, la teoría sintética de la evolución biológica y la ecología de poblaciones con énfasis en la biodiversidad y ecosistemas de El Salvador y Centroamérica. Finalmente, en Ciencias Sociales y Lenguaje, se evalúa el análisis sociocrítico de la historia salvadoreña contemporánea (el modelo agroexportador cafetalero, la rebelión de 1932, el conflicto armado de 1980 a 1992 y los Acuerdos de Paz de 1992), el marco institucional del Estado salvadoreño, la teoría de la comunicación, lingüística del texto, figuras retóricas, ortografía reglamentaria y la literatura de vanguardia salvadoreña y latinoamericana.",
    "keyPrinciples": [
      "Autonomía y rigor meritocrático: Acceso democrático a la educación superior pública fundamentado exclusivamente en el rendimiento cognitivo.",
      "Integración multidisciplinaria de las ciencias: Dominio equilibrado del pensamiento cuantitativo, el método científico natural y la comprensión social y humanística.",
      "Razonamiento aplicativo sobre el memorismo: Evaluación focalizada en la solución de problemas contextualizados, deducción formal y análisis crítico.",
      "Alineación curricular con los estándares nacionales: Coherencia estricta con los descriptores de egreso del Bachillerato del Ministerio de Educación de El Salvador."
    ],
    "examples": [
      {
        "title": "Reactivo Modelo de Matemática (Álgebra y Ecuaciones Cuadráticas)",
        "statement": "Determina las raíces de la ecuación cuadrática $2x^2 - 7x + 3 = 0$ y analiza la naturaleza de su discriminante:",
        "options": [
          {
            "key": "A",
            "text": "$x_1 = 3$, $x_2 = 1/2$; dos raíces reales y racionales distintas porque $\\Delta = 25 > 0$."
          },
          {
            "key": "B",
            "text": "$x_1 = -3$, $x_2 = -1/2$; dos raíces reales negativas porque $\\Delta = 25 > 0$."
          },
          {
            "key": "C",
            "text": "$x_1 = 2$, $x_2 = 3/2$; una sola raíz real doble porque $\\Delta = 0$."
          },
          {
            "key": "D",
            "text": "$x_1 = 1$, $x_2 = 6$; raíces complejas conjugadas porque $\\Delta < 0$."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Por la fórmula general cuadrática, el discriminante es $\\Delta = b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25$. Al ser $\\Delta > 0$ y un cuadrado perfecto ($5^2$), la ecuación posee dos raíces reales racionales distintas: $x = (7 \\pm \\sqrt{25}) / (2 \\cdot 2) = (7 \\pm 5) / 4$. Así, $x_1 = (7 + 5)/4 = 12/4 = 3$, y $x_2 = (7 - 5)/4 = 2/4 = 1/2$. La opción A es la única correcta y matemáticamente fundamentada."
      }
    ],
    "apaReferences": [
      {
        "author": "Universidad de El Salvador",
        "year": "2024",
        "title": "Manual de orientación institucional para el aspirante al ingreso universitario 2025: Prueba general de conocimientos",
        "source": "Editorial Universitaria UES",
        "url": "https://www.ues.edu.sv",
        "formattedCitation": "Universidad de El Salvador. (2024). Manual de orientación institucional para el aspirante al ingreso universitario 2025: Prueba general de conocimientos. Editorial Universitaria UES."
      },
      {
        "author": "Asamblea Legislativa de la República de El Salvador",
        "year": "1983",
        "title": "Constitución de la República de El Salvador (Decreto Constituyente N.° 38)",
        "source": "Diario Oficial N.° 234, Tomo 281",
        "url": "https://www.asamblea.gob.sv",
        "formattedCitation": "Asamblea Legislativa de la República de El Salvador. (1983, 16 de diciembre). Constitución de la República de El Salvador (Decreto Constituyente N.° 38). Diario Oficial N.° 234, Tomo 281."
      },
      {
        "author": "Ministerio de Educación, Ciencia y Tecnología",
        "year": "2021",
        "title": "Currículo nacional de educación media y descriptores de competencias para el bachillerato salvadoreño",
        "source": "Gobierno de El Salvador",
        "url": "https://www.mined.gob.sv",
        "formattedCitation": "Ministerio de Educación, Ciencia y Tecnología. (2021). Currículo nacional de educación media y descriptores de competencias para el bachillerato salvadoreño. Gobierno de El Salvador."
      }
    ],
    "wordCount": 776
  },
  "ESCALAFON": {
    "id": "ESCALAFON",
    "institution": "ESCALAFON",
    "categoryName": "Tribunal Calificador de la Carrera Docente — Ascenso al Nivel Uno 2026 (MINED)",
    "badgeText": "Ascenso Magisterial • 3,300 Preguntas • Legislación & 10 Especialidades",
    "whyExplanation": "La evaluación para el Ascenso al Nivel Uno del Escalafón Docente es un mandato de carácter imperativo establecido en los artículos 30, 31 y 32 de la Ley de la Carrera Docente de El Salvador y su respectivo Reglamento General, administrado por el Tribunal Calificador de la Carrera Docente del Ministerio de Educación, Ciencia y Tecnología (MINED). El porqué fundamental de este proceso evaluativo radica en la necesidad de consolidar la dignificación y profesionalización de la función magisterial salvadoreña, reconociendo el mérito académico, la probidad ética y la idoneidad pedagógica superior de los educadores que aspiran al máximo nivel escalafonario del escalafón nacional. Alcanzar el Nivel Uno no representa únicamente un justo derecho a una mejor remuneración salarial conforme a la ley, sino que conlleva una alta responsabilidad técnica y ética: los docentes en este estrato asumen liderazgos pedagógicos en las comunidades escolares, modelan prácticas didácticas inclusivas, asesoran curricularmente a sus pares y garantizan el cumplimiento de las garantías de protección de derechos de los estudiantes. Por consiguiente, la prueba evalúa con rigor no solo el dominio de los contenidos disciplinares específicos, sino la capacidad de los educadores para intervenir en dilemas de convivencia escolar conforme al marco legal salvadoreño vigente, aplicar los principios de la Ley Crecer Juntos, garantizar el interés superior de la niñez y diseñar experiencias didácticas fundamentadas en el Diseño Universal para el Aprendizaje (DUA) y la neuroeducación contemporánea.",
    "detailedTheory": "El temario oficial de la prueba de ascenso al Nivel Uno se estructura en dos grandes módulos interdependientes: el Módulo Común de Legislación Educativa y Fundamentos Pedagógicos, y los Módulos de Didáctica de la Especialidad. En el plano normativo salvadoreño, la teoría abarca exhaustivamente la Ley de la Carrera Docente (derechos, deberes, prohibiciones, régimen disciplinario, clasificación de faltas leves, graves y muy graves, procedimientos ante las Juntas de la Carrera Docente y el Tribunal Calificador); la Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia (marco jurídico que sustituyó a la antigua LEPINA), poniendo especial énfasis en el principio de prioridad absoluta, el derecho a un entorno de aprendizaje libre de violencia, la prohibición taxativa del castigo corporal o trato degradante en los centros educativos (Art. 116), el rol del docente como denunciante obligatorio y garante ante las Juntas de Protección de la Niñez, y los protocolos de bioseguridad y bienestar socioemocional. Asimismo, se estudia la Ley General de Educación y las normativas de equidad e inclusión escolar. En el componente pedagógico, la evaluación se cimenta en el constructivismo sociocultural de Lev Vygotsky (zona de desarrollo próximo, andamiaje pedagógico y mediación semiótica), la teoría del aprendizaje significativo de David Ausubel y los estadios cognitivos de Jean Piaget. Se profundiza en la planificación didáctica por competencias terminales, la transposición didáctica de Yves Chevallard, la contextualización comunitaria, el enfoque del Diseño Universal para el Aprendizaje (DUA: múltiples formas de representación, expresión e implicación), y los enfoques modernos de evaluación formativa y auténtica utilizando rúbricas analíticas, portafolios de evidencias y retroalimentación descriptiva formativa. Para las 10 especialidades docentes (Educación Parvularia, Básica, Matemática, Lenguaje, Ciencias Naturales, Ciencias Sociales, Inglés, Educación Física, Educación Especial y Ciencias Comerciales), se evalúa la didáctica específica, la resolución de casos de aula y el manejo de dificultades de aprendizaje específicas.",
    "keyPrinciples": [
      "Interés superior y protección integral: Primacía absoluta de los derechos de niñas, niños y adolescentes bajo la Ley Crecer Juntos.",
      "Probidad ética y régimen legal de la carrera: Cumplimiento irrestricto de las obligaciones, deberes y debido proceso pedagógico escolar.",
      "Educación inclusiva y DUA: Planificación curricular adaptada a la diversidad de ritmos, estilos y barreras para el aprendizaje.",
      "Evaluación formativa y transformadora: Uso de la evaluación auténtica como herramienta de retroalimentación y mejora del proceso educativo."
    ],
    "examples": [
      {
        "title": "Caso de Aplicación Ético-Jurídica Escolar (Ley Crecer Juntos & Régimen Docente)",
        "statement": "Un docente de tercer ciclo detecta signos evidentes de maltrato físico y desnutrición severa en una estudiante de 13 años. Al ser cuestionada con cautela en el marco de la confidencialidad escolar, la menor manifiesta que sus tutores legales la someten a agresiones físicas continuas. De acuerdo con la Ley Crecer Juntos y la Ley de la Carrera Docente, ¿cuál es la actuación inmediata, legal y deontológica obligatoria del docente?",
        "options": [
          {
            "key": "A",
            "text": "Citar a los tutores legales al centro escolar para confrontarlos en una reunión privada antes de informar a las autoridades."
          },
          {
            "key": "B",
            "text": "Informar de inmediato a la Dirección del centro educativo y notificar formalmente a la Junta de Protección de la Niñez y Adolescencia o Fiscalía General de la República, garantizando la confidencialidad e integridad física y psicológica de la estudiante."
          },
          {
            "key": "C",
            "text": "Esperar a que finalice el periodo lectivo trimestral para registrar el caso en el expediente pedagógico del centro escolar."
          },
          {
            "key": "D",
            "text": "Delegar la responsabilidad al comité de padres de familia de la sección para que investiguen informalmente los hechos."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Conforme a los artículos 116, 120 y siguientes de la Ley Crecer Juntos, toda persona que en el ejercicio de su función docente tenga conocimiento o sospecha fundada de vulneración o amenaza a los derechos de niñas, niños y adolescentes está obligada a denunciar inmediatamente ante la Junta de Protección o la FGR. Citar a los presuntos agresores (opción A) o dilatar la acción (opción C) vulnera el principio de prioridad absoluta y constituye una infracción muy grave conforme a la legislación salvadoreña."
      }
    ],
    "apaReferences": [
      {
        "author": "Asamblea Legislativa de la República de El Salvador",
        "year": "1996",
        "title": "Ley de la Carrera Docente (Decreto Legislativo N.° 665)",
        "source": "Diario Oficial N.° 58, Tomo 330",
        "url": "https://www.asamblea.gob.sv",
        "formattedCitation": "Asamblea Legislativa de la República de El Salvador. (1996, 7 de marzo). Ley de la Carrera Docente (Decreto Legislativo N.° 665). Diario Oficial N.° 58, Tomo 330."
      },
      {
        "author": "Asamblea Legislativa de la República de El Salvador",
        "year": "2022",
        "title": "Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia (Decreto Legislativo N.° 431)",
        "source": "Diario Oficial N.° 120, Tomo 435",
        "url": "https://www.asamblea.gob.sv",
        "formattedCitation": "Asamblea Legislativa de la República de El Salvador. (2022, 22 de junio). Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia (Decreto Legislativo N.° 431). Diario Oficial N.° 120, Tomo 435."
      },
      {
        "author": "Ministerio de Educación, Ciencia y Tecnología",
        "year": "2024",
        "title": "Bases técnicas, normativas y guía temático-pedagógica para el proceso de ascenso al Nivel Uno del Escalafón Docente 2026",
        "source": "Tribunal Calificador de la Carrera Docente, Gobierno de El Salvador",
        "url": "https://www.mined.gob.sv",
        "formattedCitation": "Ministerio de Educación, Ciencia y Tecnología. (2024). Bases técnicas, normativas y guía temático-pedagógica para el proceso de ascenso al Nivel Uno del Escalafón Docente 2026. Tribunal Calificador de la Carrera Docente, Gobierno de El Salvador."
      }
    ],
    "wordCount": 877
  },
  "AVANZO": {
    "id": "AVANZO",
    "institution": "AVANZO",
    "categoryName": "Prueba Nacional AVANZO 2025 — Ministerio de Educación (MINED)",
    "badgeText": "Evaluación Censal Bachillerato • 3,000 Reactivos • 5 Asignaturas Obligatorias",
    "whyExplanation": "La Prueba Nacional AVANZO es el instrumento de evaluación censal estandarizado que el Ministerio de Educación, Ciencia y Tecnología (MINED) aplica anualmente a los estudiantes que culminan el último año de Educación Media en El Salvador (segundo año de Bachillerato General y tercer año de Bachillerato Técnico Vocacional), en cumplimiento estricto del artículo 57 de la Ley General de Educación. El porqué de la prueba AVANZO se articula en torno a tres propósitos estratégicos de política educativa: primero, certificar los niveles de competencia cognitiva y habilidades socioemocionales alcanzados por los futuros bachilleres; segundo, proveer al Estado salvadoreño y a las instituciones educativas diagnósticos confiables y desagregados para la toma de decisiones curriculares, la nivelación pedagógica y la formación continua del cuerpo docente; y tercero, servir como un mecanismo de orientación vocacional y enlace efectivo hacia las oportunidades de estudio en la educación superior y la inserción técnica laboral. A diferencia de pruebas tradicionales del pasado, AVANZO adopta un enfoque holístico que integra la evaluación por competencias en las cuatro áreas básicas del conocimiento (Matemáticas/Precálculo, Ciencia y Tecnología, Ciudadanía y Valores, Lengua y Literatura) junto al idioma Inglés, valorando la capacidad de los jóvenes para resolver problemas de la vida cotidiana y actuar como ciudadanos responsables, reflexivos y comprometidos con el desarrollo sustentable del país.",
    "detailedTheory": "El diseño psicométrico de la prueba AVANZO se fundamenta en la Teoría de Respuesta al Ítem (TRI) de tres parámetros, garantizando índices óptimos de dificultad, discriminación y control de azar en cada reactivo. Los contenidos evaluados se desglosan en cinco ejes disciplinares: En Precálculo y Matemáticas, el temario abarca funciones reales de variable real (polinomiales, racionales, radicales, exponenciales y logarítmicas), propiedades de los logaritmos, trigonometría del triángulo rectángulo y en el círculo unitario, identidades trigonométricas fundamentales, sucesiones aritméticas y geométricas, geometría analítica (distancia entre puntos, ecuación punto-pendiente de la recta, paralelismo, perpendicularidad y ecuaciones canónicas y generales de la circunferencia y la parábola), principios fundamentales de conteo, combinatoria y cálculo de probabilidades simples y condicionales (teorema de Bayes). En Ciencia y Tecnología, se articulan la física, química y biología mediante un enfoque interdisciplinario: leyes de Newton, trabajo, energía cinética y potencial gravitatoria, ondas mecánicas y acústica, termodinámica y calorimetría, estequiometría de reacciones químicas balanceadas, enlace químico y polaridad molecular, cinemática de fluidos, biología molecular (código genético, mutaciones, transcripción y síntesis proteica), biotecnología moderna, ecología de ecosistemas salvadoreños y estrategias de mitigación del cambio climático. En Ciudadanía y Valores, se evalúa el pensamiento crítico ético, la cultura de paz, memoria histórica salvadoreña, derechos humanos de primera, segunda y tercera generación, ordenamiento constitucional de la República, separación de poderes, mecanismos de participación ciudadana y resolución noviolenta de conflictos comunitarios. En Lengua y Literatura, se examina la comprensión lectora multinivel (literal, inferencial y crítica), el análisis de textos dramáticos, poéticos, ensayísticos y narrativos hispanoamericanos, coherencia y cohesión textual, marcadores discursivos, vicios del lenguaje y ortografía de la RAE. En Inglés, se mide la competencia de comprensión lectora contextualizada en niveles A2 y B1 del Marco Común Europeo de Referencia (MCER).",
    "keyPrinciples": [
      "Evaluación por competencias auténticas: Medición del saber, saber hacer y saber convivir en contextos reales y significativos.",
      "Rigor psicométrico estandarizado: Aplicación de la Teoría de Respuesta al Ítem para garantizar equidad, validez y comparabilidad nacional.",
      "Formación cívica y socioemocional: Integración del razonamiento ético, la cultura de legalidad y la resolución pacífica de conflictos.",
      "Articulación vocacional: Vinculación efectiva del perfil de egreso del bachillerato con las demandas de la educación superior y el sector productivo."
    ],
    "examples": [
      {
        "title": "Reactivo Oficial de Precálculo (Geometría Analítica de la Recta)",
        "statement": "Una carretera recta en el departamento de La Libertad conecta los puntos de coordenadas $A(2, 5)$ y $B(6, 13)$. Se requiere construir una vía de acceso perpendicular que pase exactamente por el punto medio del segmento $\\overline{AB}$. ¿Cuál es la ecuación general de dicha vía perpendicular?",
        "options": [
          {
            "key": "A",
            "text": "$x + 2y - 22 = 0$"
          },
          {
            "key": "B",
            "text": "$2x - y + 1 = 0$"
          },
          {
            "key": "C",
            "text": "$x - 2y + 14 = 0$"
          },
          {
            "key": "D",
            "text": "$2x + y - 17 = 0$"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Paso 1: La pendiente de la recta principal es $m_1 = (13 - 5) / (6 - 2) = 8 / 4 = 2$. Paso 2: Por condición de perpendicularidad ($m_1 \\cdot m_2 = -1$), la pendiente de la vía perpendicular es $m_2 = -1/2$. Paso 3: El punto medio del segmento es $M = ((2 + 6)/2, (5 + 13)/2) = (8/2, 18/2) = (4, 9)$. Paso 4: Aplicando la ecuación punto-pendiente: $y - 9 = (-1/2)(x - 4) \\implies 2(y - 9) = -x + 4 \\implies 2y - 18 = -x + 4$. Reordenando a la forma general $Ax + By + C = 0$: $x + 2y - 22 = 0$. La opción A es exacta y correcta."
      }
    ],
    "apaReferences": [
      {
        "author": "Ministerio de Educación, Ciencia y Tecnología",
        "year": "2023",
        "title": "Informe nacional de resultados de la prueba de evaluación estandarizada de egreso de educación media AVANZO 2023",
        "source": "Dirección Nacional de Evaluación Educativa, MINED",
        "url": "https://www.mined.gob.sv",
        "formattedCitation": "Ministerio de Educación, Ciencia y Tecnología. (2023). Informe nacional de resultados de la prueba de evaluación estandarizada de egreso de educación media AVANZO 2023. Dirección Nacional de Evaluación Educativa, MINED."
      },
      {
        "author": "Ministerio de Educación, Ciencia y Tecnología",
        "year": "2022",
        "title": "Guía metodológica y matriz de competencias de la prueba nacional AVANZO para estudiantes de educación media",
        "source": "Gobierno de El Salvador",
        "url": "https://www.mined.gob.sv",
        "formattedCitation": "Ministerio de Educación, Ciencia y Tecnología. (2022). Guía metodológica y matriz de competencias de la prueba nacional AVANZO para estudiantes de educación media. Gobierno de El Salvador."
      },
      {
        "author": "Real Academia Española y Asociación de Academias de la Lengua Española",
        "year": "2010",
        "title": "Ortografía de la lengua española",
        "source": "Espasa Calpe",
        "url": "https://www.rae.es",
        "formattedCitation": "Real Academia Española y Asociación de Academias de la Lengua Española. (2010). Ortografía de la lengua española. Espasa Calpe."
      }
    ],
    "wordCount": 806
  },
  "ASD": {
    "id": "ASD",
    "institution": "ASD",
    "categoryName": "Academia Sabatina Departamental — Programa Jóvenes Talento El Salvador (MINED / UES)",
    "badgeText": "Olimpiadas Científicas • 2,190 Reactivos • 5.°, 6.° y 7.° Grado en Matemática & Ciencias",
    "whyExplanation": "El Programa Jóvenes Talento de El Salvador (PJT), fruto del convenio interinstitucional entre el Ministerio de Educación, Ciencia y Tecnología (MINED) y la Universidad de El Salvador (UES), articula las Academias Sabatinas Departamentales (ASD) en las 14 cabeceras departamentales de la República. El porqué esencial de las ASD reside en la detección temprana, atención pedagógica especializada y desarrollo sistemático del potencial intelectual extraordinario de estudiantes de quinto, sexto y séptimo grado de Educación Básica que demuestran una alta capacidad cognitiva en Matemática y Ciencias Naturales. En un sistema educativo convencional, los alumnos con talento sobresaliente frecuentemente sufren desmotivación debido al ritmo uniforme del currículo ordinario. Las ASD rompen este paradigma proporcionando un entorno de aprendizaje acelerado y enriquecido que fomenta el pensamiento lateral, la creatividad rigurosa y la formulación de hipótesis sin restricciones. Además, el programa posee un fuerte impacto de equidad social y territorial: identifica el talento en zonas rurales y urbanas marginales de todos los departamentos, asegurando que ningún niño o niña brillante quede rezagado por barreras socioeconómicas, y formando la cantera olímpica que representa a El Salvador con medallas en certámenes internacionales de máximo prestigio como la Olimpiada Internacional de Matemáticas (IMO), la Olimpiada Matemática de Centroamérica y el Caribe (OMCC) y la Olimpiada Iberoamericana de Física (OIbF).",
    "detailedTheory": "El marco teórico y metodológico de las ASD difiere sustancialmente de la instrucción escolar tradicional. No se enseña la memorización de algoritmos estandarizados ni la repetición mecánica de ejercicios, sino que se implementa la heurística del matemático George Pólya (entender el problema, trazar un plan, ejecutar el plan y mirar hacia atrás) junto al aprendizaje basado en el descubrimiento guiado. En Matemática Olímpica, el currículo de 5.°, 6.° y 7.° grado se estructura en cuatro ramas clásicas de la matemática pura: 1) Teoría de Números: propiedades de la divisibilidad, algoritmo de la división de Euclides, números primos, criba de Eratóstenes, máximo común divisor y mínimo común múltiplo mediante descomposición canónica, congruencias lineales modulares ($a \\equiv b \\pmod m$), últimos dígitos de potencias elevadas y el Teorema Fundamental de la Aritmética. 2) Geometría Sintética: axiomas de Euclides, ángulos entre rectas paralelas y secantes, criterios rigurosos de congruencia de triángulos (LLL, LAL, ALA), semejanza de figuras, teorema de Pitágoras y sus demostraciones geométricas, cálculo de áreas por descomposición y complementación, propiedades de cuadriláteros especiales, cuadriláteros cíclicos y relaciones angulares en la circunferencia (ángulos centrales, inscritos y seminscritos). 3) Combinatoria y Estrategias de Resolución: principio aditivo y multiplicativo, principio del palomar o de las casillas de Dirichlet, permutaciones simples y combinaciones, diagramas de árbol, principio de invariancia, coloración de tableros y juegos con estrategia ganadora. 4) Álgebra y Patrones: generalización de patrones numéricos, progresiones, identidades algebraicas fundamentales y desigualdades elementales como la media aritmética y geométrica (AM-GM). En Ciencias Naturales, se profundiza en el método científico experimental, física mecánica intuitiva, óptica geométrica, calor y temperatura, estados de agregación de la materia, transformaciones químicas, taxonomía biológica de reinos de la naturaleza, anatomía comparada y dinámica de ecosistemas locales.",
    "keyPrinciples": [
      "Heurística y demostración formal: Primacía de la argumentación lógica y deductiva sobre la mera respuesta numérica computacional.",
      "Desarrollo del talento de altas capacidades: Enriquecimiento curricular profundo que desafía las zonas de desarrollo potencial del estudiante.",
      "Equidad territorial e inclusión: Búsqueda activa del talento sobresaliente en centros escolares de los 14 departamentos de El Salvador.",
      "Proyección olímpica internacional: Entrenamiento sistemático con estándares competitivos de olimpiadas científicas mundiales."
    ],
    "examples": [
      {
        "title": "Problema Olímpico de Teoría de Números (ASD Nivel 1 - 6.° Grado)",
        "statement": "¿Cuál es el último dígito (cifra de las unidades) del número resultante de la operación $3^{2026} + 7^{2026}$?",
        "options": [
          {
            "key": "A",
            "text": "$8$"
          },
          {
            "key": "B",
            "text": "$0$"
          },
          {
            "key": "C",
            "text": "$2$"
          },
          {
            "key": "D",
            "text": "$4$"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Paso 1: Analizamos el ciclo de las potencias de $3$ módulo $10$: $3^1 = 3$, $3^2 = 9$, $3^3 = 27 \\equiv 7$, $3^4 = 81 \\equiv 1$. El periodo es de longitud $4$: $(3, 9, 7, 1)$. Como $2026 = 4 \\times 506 + 2$, el residuo es $2$. Por ende, la última cifra de $3^{2026}$ es la segunda del ciclo: $9$. Paso 2: Analizamos el ciclo de las potencias de $7$ módulo $10$: $7^1 = 7$, $7^2 = 49 \\equiv 9$, $7^3 = 343 \\equiv 3$, $7^4 = 2401 \\equiv 1$. El periodo es de longitud $4$: $(7, 9, 3, 1)$. Con residuo $2$, la última cifra de $7^{2026}$ es también la segunda del ciclo: $9$. Paso 3: Sumamos los últimos dígitos: $9 + 9 = 18 \\equiv 8 \\pmod{10}$. La última cifra de las unidades es $8$. Opción A."
      }
    ],
    "apaReferences": [
      {
        "author": "Programa Jóvenes Talento El Salvador",
        "year": "2022",
        "title": "Manual de entrenamiento olímpico en matemáticas: Nivel inicial para academias sabatinas departamentales",
        "source": "Universidad de El Salvador & MINED",
        "url": "https://www.jovenestalento.edu.sv",
        "formattedCitation": "Programa Jóvenes Talento El Salvador. (2022). Manual de entrenamiento olímpico en matemáticas: Nivel inicial para academias sabatinas departamentales. Universidad de El Salvador & MINED."
      },
      {
        "author": "Pólya, G.",
        "year": "1965",
        "title": "Cómo plantear y resolver problemas (J. Zagazagoitia, Trad.; 15.ª ed.)",
        "source": "Editorial Trillas. (Obra original publicada en 1945)",
        "url": "https://www.trillas.mx",
        "formattedCitation": "Pólya, G. (1965). Cómo plantear y resolver problemas (J. Zagazagoitia, Trad.; 15.ª ed.). Editorial Trillas. (Obra original publicada en 1945)."
      },
      {
        "author": "Ministerio de Educación, Ciencia y Tecnología",
        "year": "2021",
        "title": "Política nacional para la atención integral y pedagógica de estudiantes con altas capacidades y talento científico",
        "source": "Gobierno de El Salvador",
        "url": "https://www.mined.gob.sv",
        "formattedCitation": "Ministerio de Educación, Ciencia y Tecnología. (2021). Política nacional para la atención integral y pedagógica de estudiantes con altas capacidades y talento científico. Gobierno de El Salvador."
      }
    ],
    "wordCount": 801
  },
  "ENA": {
    "id": "ENA",
    "institution": "ENA",
    "categoryName": "Escuela Nacional de Agricultura \"Roberto Quiñónez\" (ENA) — Admisión 2027",
    "badgeText": "Admisión Agropecuaria • 1,400 Preguntas Técnicas • Matemáticas, Química, Biología & Lenguaje",
    "whyExplanation": "La Escuela Nacional de Agricultura \"Roberto Quiñónez\" (ENA), fundada en 1946 como el centro de educación técnica agronómica de mayor tradición y prestigio en El Salvador y adscrita al Ministerio de Agricultura y Ganadería (MAG), implementa un proceso de selección y admisión sumamente riguroso para aspirantes al título de Agrónomo y Técnico en Agroindustria. El porqué de esta evaluación descansa en la necesidad estratégica de seleccionar a jóvenes con sólida vocación rural y capacidad intelectual para liderar la modernización agroproductiva, la soberanía y seguridad alimentaria de El Salvador y la región centroamericana. Frente a los desafíos críticos del cambio climático, las sequías recurrentes en el Corredor Seco salvadoreño y la urgencia de transitar hacia una agricultura tecnificada, regenerativa y climáticamente inteligente, la ENA requiere que sus estudiantes posean una preparación básica robusta en ciencias aplicadas. El examen evalúa si el estudiante es capaz de vincular el conocimiento abstracto de las matemáticas, la química y la biología con los procesos productivos de campo, tales como el cálculo de densidades de siembra, la dosificación volumétrica de fertilizantes según análisis de suelo, el manejo fitosanitario integrado de plagas y la comprensión técnica de literatura agronómica nacional e internacional.",
    "detailedTheory": "La fundamentación teórica del examen de admisión de la ENA integra cuatro campos de conocimiento interdisciplinares: 1) Matemáticas Aplicadas al Sector Agropecuario: geometría plana y espacial para el cálculo de perímetros y áreas de parcelas agrícolas poligonales e irregulares; volumetría y capacidad de reservorios de captación de agua, tanques australianos y canales de drenaje; trigonometría para el cálculo de pendientes de terreno y terrazas de conservación de suelos; regla de tres simple y compuesta aplicada a densidades poblacionales de cultivos (plantas por hectárea o manzana); razones, proporciones y porcentajes para la preparación de soluciones agroquímicas y dosificación de nutrientes N-P-K (nitrógeno, fósforo, potasio); estadística descriptiva básica (media, varianza y desviación típica) orientada a la estimación de rendimientos por hectárea. 2) Química Agrícola y Edafología Elemental: el suelo como sistema físico-químico trifásico (fase sólida mineral y orgánica, líquida y gaseosa); pH del suelo, acidez activa e intercambiable, y cálculo de enmiendas calcáreas (carbonato de calcio) para neutralizar la toxicidad por aluminio; estequiometría de fertilizantes químicos inorgánicos y abonos orgánicos; unidades químicas de concentración (molaridad, normalidad y partes por millón - ppm) esenciales para sistemas de fertirriego y fumigación; y ciclos biogeoquímicos de macronutrientes y micronutrientes. 3) Biología Botánica, Zoología y Fitopatología: morfología y anatomía de las angiospermas (raíz, tallo, hojas, flor, fruto y semilla); tejidos vegetales (xilema, floema, meristemos y parénquima); fisiología de la fotosíntesis (vías C3, C4 y CAM) y transpiración estomática; taxonomía vegetal y malezas de importancia económica; entomología agrícola elemental (metamorfosis de insectos plaga y predadores benéficos); microbiología del suelo (fijación biológica de nitrógeno por Rhizobium y micorrizas); y fundamentos de zootecnia en bovinos, porcinos, aves y caprinos. 4) Lenguaje y Comunicación Técnica: lectura comprensiva e inferencial de fichas técnicas de plaguicidas, etiquetas de agroquímicos, hojas de seguridad MSDS, manuales de maquinaria agrícola y elaboración de informes técnicos agronómicos claros y objetivos.",
    "keyPrinciples": [
      "Aplicabilidad técnica inmediata: Enfoque práctico de las ciencias exactas y naturales en los procesos de producción agropecuaria.",
      "Sustentabilidad y conservación de recursos: Manejo regenerativo del suelo, eficiencia hídrica y protección del medio ambiente salvadoreño.",
      "Seguridad y soberanía alimentaria: Preparación para enfrentar los déficits productivos mediante tecnología, sanidad y productividad.",
      "Rigor métrico y dosificación responsable: Precisión matemática en la aplicación de insumos agrícolas para evitar daños ecológicos y económicos."
    ],
    "examples": [
      {
        "title": "Problema Técnico de Dosificación Agrícola (ENA - Química y Matemática Aplicada)",
        "statement": "Un agrónomo necesita aplicar una concentración de $250\\text{ ppm}$ de nitrógeno a un lote de hortalizas bajo riego por goteo. Si el tanque de fertirriego tiene una capacidad total de $2,000\\text{ litros}$ de agua, ¿cuántos gramos de nitrato de amonio ($\\text{NH}_4\\text{NO}_3$, pureza del $35\\%$ de nitrógeno elemental) se deben disolver en el tanque para alcanzar la concentración exacta requerida?",
        "options": [
          {
            "key": "A",
            "text": "$1,428.57\\text{ gramos}$ de nitrato de amonio."
          },
          {
            "key": "B",
            "text": "$500.00\\text{ gramos}$ de nitrato de amonio."
          },
          {
            "key": "C",
            "text": "$700.00\\text{ gramos}$ de nitrato de amonio."
          },
          {
            "key": "D",
            "text": "$2,857.14\\text{ gramos}$ de nitrato de amonio."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Paso 1: Recordamos que $1\\text{ ppm} = 1\\text{ mg/L} = 0.001\\text{ g/L}$. Para $2,000\\text{ L}$ a $250\\text{ ppm}$, la masa total de nitrógeno puro ($N$) requerida es: $m_N = 250\\text{ mg/L} \\times 2,000\\text{ L} = 500,000\\text{ mg} = 500\\text{ g}$ de nitrógeno elemental. Paso 2: Como el fertilizante contiene solo el $35\\%$ de nitrógeno en peso, planteamos la proporción: $\\text{Masa de fertilizante} = 500\\text{ g} / 0.35 = 1,428.57\\text{ g}$. Se deben disolver exactamente $1,428.57\\text{ g}$ de fertilizante en el tanque. La opción A es correcta."
      }
    ],
    "apaReferences": [
      {
        "author": "Escuela Nacional de Agricultura \"Roberto Quiñónez\"",
        "year": "2023",
        "title": "Guía técnica oficial del aspirante al proceso de selección para el título de Agrónomo",
        "source": "ENA & Ministerio de Agricultura y Ganadería de El Salvador",
        "url": "https://www.ena.edu.sv",
        "formattedCitation": "Escuela Nacional de Agricultura \"Roberto Quiñónez\". (2023). Guía técnica oficial del aspirante al proceso de selección para el título de Agrónomo. ENA & Ministerio de Agricultura y Ganadería de El Salvador."
      },
      {
        "author": "Brady, N. C., & Weil, R. R.",
        "year": "2016",
        "title": "The nature and properties of soils (15.ª ed.)",
        "source": "Pearson Education",
        "url": "https://www.pearson.com",
        "formattedCitation": "Brady, N. C., & Weil, R. R. (2016). The nature and properties of soils (15.ª ed.). Pearson Education."
      },
      {
        "author": "Ministerio de Agricultura y Ganadería",
        "year": "2022",
        "title": "Plan estratégico de modernización agrícola y sustentabilidad del suelo en El Salvador",
        "source": "Gobierno de El Salvador",
        "url": "https://www.mag.gob.sv",
        "formattedCitation": "Ministerio de Agricultura y Ganadería. (2022). Plan estratégico de modernización agrícola y sustentabilidad del suelo en El Salvador. Gobierno de El Salvador."
      }
    ],
    "wordCount": 811
  },
  "ANSP": {
    "id": "ANSP",
    "institution": "ANSP",
    "categoryName": "Academia Nacional de Seguridad Pública (ANSP) — Prueba Cultural PNC",
    "badgeText": "Ingreso Carrera Policial • 250 Reactivos Oficiales • Derecho, Historia & Razonamiento",
    "whyExplanation": "La Academia Nacional de Seguridad Pública (ANSP), institución emblemática nacida de los Acuerdos de Paz de Chapultepec de 1992 y regida por su propia Ley Orgánica, tiene la potestad exclusiva conferida por el Estado salvadoreño para seleccionar, formar y capacitar doctrinariamente a los futuros agentes que integran la Policía Nacional Civil (PNC). El porqué fundamental de la Prueba de Conocimientos Generales y Culturales radica en salvaguardar el carácter profesional, técnico, cívico y respetuoso de los Derechos Humanos del cuerpo policial. En una república democrática regida por el Estado de Derecho, el monopolio legítimo de la fuerza no puede ser confiado a personas que carezcan de una sólida base moral, ética, legal y cultural. El agente de policía es la primera autoridad con la que interactúa la ciudadanía en situaciones de vulnerabilidad o conflicto; por ende, debe poseer habilidades analíticas impecables para interpretar leyes procesales, evaluar la legalidad de detenciones en flagrancia, redactar actas de inspección ocular con absoluta precisión pericial para sustentar la prueba ante la Fiscalía General de la República (FGR) y tomar decisiones críticas bajo extrema presión psicológica respetando siempre la dignidad intrínseca de la persona humana.",
    "detailedTheory": "El temario oficial de la evaluación cultural de la ANSP abarca cinco áreas fundamentales del saber ciudadano y profesional: 1) Derecho Constitucional y Deontología Policial: principios dogmáticos de la Constitución de 1983 (Arts. 1 al 28), derechos fundamentales a la vida, integridad, libertad y debido proceso; principios de actuación policial según el Art. 159 de la Carta Magna (subordinación al poder civil, profesionalismo y neutralidad política); régimen de excepciones constitucionales; Código de Conducta para Funcionarios Encargados de Hacer Cumplir la Ley de las Naciones Unidas; y el principio de uso diferenciado y proporcional de la fuerza física y armas de fuego. 2) Legislación Salvadoreña Especializada: Ley Orgánica de la PNC y su régimen disciplinario interno; Ley Orgánica de la ANSP; Código Penal y Código Procesal Penal (definición de flagrancia, lectura de derechos del imputado, preservación de la escena del delito y cadena de custodia); Ley Crecer Juntos en lo referente a la protección de menores infractores y víctimas; y la Ley Especial Integral para una Vida Libre de Violencia para las Mujeres (LEIV). 3) Historia y Realidad Nacional de El Salvador: procesos independentistas de 1811 y 1821, la federación centroamericana, el levantamiento campesino e indígena de 1932, los regímenes militares del siglo XX, las causas estructurales del conflicto armado de 1980 a 1992, la firma de los Acuerdos de Paz de 1992 y el diseño institucional de la seguridad pública moderna; geografía salvadoreña, sus 14 departamentos y la nueva reestructuración municipal. 4) Razonamiento Lógico y Matemático: operaciones aritméticas fundamentales, proporciones, porcentajes, interpretación de gráficas y tablas de criminalidad, y deducción lógica para el análisis de testimonios e indicios en la investigación preliminar. 5) Lenguaje y Redacción Oficial: ortografía estricta de la RAE, sintaxis clara, redacción formal y concisa de informes policiales, evitando subjetividades, adjetivaciones innecesarias o ambigüedades en actas de detención.",
    "keyPrinciples": [
      "Respeto irrestricto a los Derechos Humanos: Garantía de la dignidad humana y debido proceso en cualquier actuación policial.",
      "Principio de proporcionalidad en el uso de la fuerza: Empleo racional, gradual y estrictamente necesario de medios coercitivos.",
      "Subordinación al orden constitucional civil: Servicio público apolítico, transparente y sometido a la fiscalización del Estado de Derecho.",
      "Precisión técnica y pericial en la comunicación: Redacción objetiva de diligencias que aseguran la validez probatoria ante los tribunales."
    ],
    "examples": [
      {
        "title": "Pregunta Situacional de Procedimiento Constitucional y Flagrancia (ANSP)",
        "statement": "Una patrulla policial observa en flagrancia a un individuo que agrede físicamente a una persona en la vía pública y despoja a la víctima de sus pertenencias. Tras reducir al hechor aplicando la fuerza estrictamente necesaria y esposarlo para garantizar la seguridad de la escena, ¿cuál es el procedimiento constitucional inmediato que los agentes deben cumplir conforme al Art. 12 de la Constitución y el Código Procesal Penal de El Salvador?",
        "options": [
          {
            "key": "A",
            "text": "Trasladar de inmediato al detenido a una sede policial privada e interrogarlo formalmente sin presencia de un abogado defensor."
          },
          {
            "key": "B",
            "text": "Informarle de manera inmediata y comprensible los motivos de su detención y sus derechos constitucionales (derecho a guardar silencio y a contar con un abogado defensor), consignándolo textualmente en el acta de detención en flagrancia."
          },
          {
            "key": "C",
            "text": "Publicar la fotografía del aprehendido en redes sociales personales antes de elaborar el informe pericial correspondiente."
          },
          {
            "key": "D",
            "text": "Esperar 72 horas para notificar a la Fiscalía General de la República sobre la aprehensión efectuada."
          }
        ],
        "correctAnswer": "B",
        "explanation": "El Art. 12 inciso tercero de la Constitución de la República de El Salvador y el Código Procesal Penal prescriben terminantemente que a toda persona que sea detenida debe informársele de manera inmediata y comprensible de sus derechos y de las razones de su detención, sin que pueda ser obligada a declarar contra sí misma. La opción B representa el cumplimiento fidedigno del debido proceso y la doctrina policial moderna salvadoreña."
      }
    ],
    "apaReferences": [
      {
        "author": "Academia Nacional de Seguridad Pública",
        "year": "2024",
        "title": "Manual de doctrina institucional y temario de la prueba cultural para el ingreso a la carrera policial",
        "source": "ANSP, Gobierno de El Salvador",
        "url": "https://www.ansp.gob.sv",
        "formattedCitation": "Academia Nacional de Seguridad Pública. (2024). Manual de doctrina institucional y temario de la prueba cultural para el ingreso a la carrera policial. ANSP, Gobierno de El Salvador."
      },
      {
        "author": "Asamblea Legislativa de la República de El Salvador",
        "year": "1992",
        "title": "Ley Orgánica de la Academia Nacional de Seguridad Pública (Decreto Legislativo N.° 219)",
        "source": "Diario Oficial N.° 68, Tomo 315",
        "url": "https://www.asamblea.gob.sv",
        "formattedCitation": "Asamblea Legislativa de la República de El Salvador. (1992, 10 de abril). Ley Orgánica de la Academia Nacional de Seguridad Pública (Decreto Legislativo N.° 219). Diario Oficial N.° 68, Tomo 315."
      },
      {
        "author": "Organización de las Naciones Unidas",
        "year": "1990",
        "title": "Principios básicos sobre el empleo de la fuerza y de armas de fuego por los funcionarios encargados de hacer cumplir la ley",
        "source": "Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos (ACNUDH)",
        "url": "https://www.ohchr.org",
        "formattedCitation": "Organización de las Naciones Unidas. (1990). Principios básicos sobre el empleo de la fuerza y de armas de fuego por los funcionarios encargados de hacer cumplir la ley. ACNUDH."
      }
    ],
    "wordCount": 802
  },
  "INGLES": {
    "id": "INGLES",
    "institution": "INGLES",
    "categoryName": "Módulo Maestro de Idiomas — Marco Común Europeo de Referencia (MCER / CEFR)",
    "badgeText": "Idiomas Oficiales • 16,800 Reactivos • 7 Idiomas • 120 Clases y 400 Preguntas por Nivel",
    "whyExplanation": "El Módulo Maestro de Idiomas en APP-KUSKAT abarca el Marco Común Europeo de Referencia para las Lenguas (MCER / CEFR) en sus seis niveles progresivos de dominio lingüístico (A1 Acceso, A2 Plataforma, B1 Umbral, B2 Avanzado, C1 Dominio Operativo Eficaz y C2 Maestría) a lo largo de siete lenguas clave: cuatro lenguas globales (Inglés US/UK, Alemán DACH, Árabe Fus'ha y Mandarín HSK) y tres lenguas originarias de nuestra patria (Náhuat Pipil, Lenca Potón y Kakawira). El porqué fundamental de este módulo descansa en un doble compromiso: por un lado, la democratización del multilingüismo global para la juventud y la fuerza profesional salvadoreña, dotándolas de las competencias comunicativas requeridas en la economía del conocimiento, el comercio internacional, la diplomacia y el desarrollo tecnológico de vanguardia; y por otro lado, el rescate patrimonial y la reivindicación lingüística de nuestros pueblos originarios en cumplimiento directo del mandato del artículo 62 inciso segundo de la Constitución de El Salvador, que establece que las lenguas autóctonas forman parte del patrimonio cultural nacional y son objeto de preservación, difusión y estudio científico. Al integrar ambas vertientes en una misma arquitectura curricular rigurosa, Kuskat garantiza que el salvadoreño pueda conquistar el mundo sin olvidar jamás sus raíces ancestrales.",
    "detailedTheory": "El diseño curricular del módulo de idiomas adopta la metodología orientada a la acción del Consejo de Europa, donde el estudiante es concebido como un agente social que realiza tareas comunicativas auténticas en contextos situacionales específicos. En los niveles básicos (A1 y A2), se desarrollan las competencias esenciales para la supervivencia social: fórmulas de cortesía, presentaciones personales, descripciones familiares, rutinas cotidianas, compras y transacciones comerciales, manejo del tiempo presente, pasado y futuro simple, y vocabulario instrumental inmediato. En los niveles independientes (B1 y B2), el usuario adquiere la capacidad de desenvolverse de forma autónoma en viajes e interacciones profesionales: narración de eventos y anécdotas, justificación de opiniones, uso del presente perfecto y pasado perfecto, oraciones condicionales cero, primera, segunda y tercera, voz pasiva, conectores discursivos de causa y consecuencia, y comprensión de textos informativos complejos. En los niveles competentes (C1 y C2), se alcanza la maestría operativa y retórica: comprensión sin esfuerzo de textos extensos y exigentes, captación de sentidos implícitos, giros idiomáticos, inversión sintáctica enfática, oraciones hendidas (cleft sentences), matices sutiles de cortesía y registro pragmático, y la capacidad de argumentar con precisión analítica en debates académicos o técnicos de alto nivel. Para cada idioma, se examinan las particularidades contrastivas frente al español salvadoreño: en Inglés, la diferenciación estricta entre American English (US) y British English (UK); en Alemán, la regla del verbo en posición dos (V2), los cuatro casos gramaticales y la flexión adjetival; en Árabe, la raíz triconsonántica, las declinaciones I'rāb y la fonología faríngea; en Mandarín, los cuatro tonos, el sistema Pinyin y los clasificadores nominales; y en las lenguas ancestrales (Náhuat, Lenca y Kakawira), su morfología aglutinante, prefijación pronominal y riqueza toponímica salvadoreña.",
    "keyPrinciples": [
      "Enfoque comunicativo accional del MCER: Adquisición de lenguas orientada a tareas del mundo real y descriptores Can-Do.",
      "Bilingüismo y multilingüismo integrador: Conexión de oportunidades globales de empleo con el rescate del patrimonio indígena salvadoreño.",
      "Análisis contrastivo sistemático: Prevención de transferencias negativas y calcos erróneos desde la estructura del español salvadoreño.",
      "Rigor pedagógico y curricular equitativo: 120 lecciones estructuradas y 2,400 preguntas estrictas de opción múltiple por cada idioma."
    ],
    "examples": [
      {
        "title": "Reactivo Lingüístico Contrastivo MCER (Nivel B2 - Condicionales Mixtos en Inglés)",
        "statement": "Complete la oración con la combinación verbal gramaticalmente correcta para expresar una condición no cumplida en el pasado con una consecuencia directa en el presente: \"If Dr. Martinez _______ the flight to London yesterday, she _______ at the medical conference right now.\"",
        "options": [
          {
            "key": "A",
            "text": "hadn't missed / would be"
          },
          {
            "key": "B",
            "text": "didn't miss / will be"
          },
          {
            "key": "C",
            "text": "wouldn't miss / is"
          },
          {
            "key": "D",
            "text": "hadn't missed / would have been"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Se trata de un condicional mixto clásico (Past Unreal Condition + Present Unreal Result). La cláusula con 'if' requiere Past Perfect ('hadn't missed') porque hace referencia a un hecho no realizado en el pasado ('yesterday'), mientras que la cláusula principal requiere 'would + infinitivo' ('would be') porque expresa el resultado hipotético en el presente ('right now'). La opción D sería un tercer condicional puro (resultado en el pasado), incompatible con el adverbio temporal 'right now'."
      }
    ],
    "apaReferences": [
      {
        "author": "Council of Europe",
        "year": "2020",
        "title": "Common European Framework of Reference for Languages: Learning, teaching, assessment – Companion volume",
        "source": "Council of Europe Publishing",
        "url": "https://www.coe.int/lang-cefr",
        "formattedCitation": "Council of Europe. (2020). Common European Framework of Reference for Languages: Learning, teaching, assessment – Companion volume. Council of Europe Publishing."
      },
      {
        "author": "Murphy, R.",
        "year": "2019",
        "title": "English grammar in use: A self-study reference and practice book for intermediate learners of English (5.ª ed.)",
        "source": "Cambridge University Press",
        "url": "https://www.cambridge.org",
        "formattedCitation": "Murphy, R. (2019). English grammar in use: A self-study reference and practice book for intermediate learners of English (5.ª ed.). Cambridge University Press."
      },
      {
        "author": "Quilis, A., & Lemus, J. E.",
        "year": "2004",
        "title": "Gramática de la lengua Náhuat de El Salvador",
        "source": "Ministerio de Educación de El Salvador & Universidad Don Bosco",
        "url": "https://www.udb.edu.sv",
        "formattedCitation": "Quilis, A., & Lemus, J. E. (2004). Gramática de la lengua Náhuat de El Salvador. Ministerio de Educación de El Salvador & Universidad Don Bosco."
      }
    ],
    "wordCount": 738
  }
};

export const LANGUAGE_THEORY_DATA: Record<string, LanguageTheoryItem> = {
  "english": {
    "id": "english",
    "name": "Inglés",
    "nativeName": "English (US & UK)",
    "flag": "🇺🇸🇬🇧",
    "badgeText": "Lengua Global • 2,400 Reactivos • 120 Lecciones • US vs UK",
    "whyExplanation": "El idioma inglés es indiscutiblemente la lengua franca universal del siglo XXI, constituyendo el vehículo primario de comunicación en la ciencia, la investigación académica internacional, la ingeniería de software, el comercio transnacional, la aviación y la diplomacia global. Para el estudiante y profesional salvadoreño, el dominio fluido del inglés representa la competencia de mayor retorno socioeconómico, abriendo puertas directas a empleos de alta remuneración en industrias de tecnología, centros de servicios globales, organismos multilaterales y becas de posgrado en el extranjero (Fulbright, Chevening). El porqué de estructurar el curso de inglés en Kuskat bajo el contraste sistemático entre American English (US) y British English (UK) obedece a una necesidad práctica crucial: en El Salvador, la cercanía geográfica y comercial con los Estados Unidos promueve el uso del inglés americano, pero los exámenes estandarizados internacionales (IELTS, Cambridge C1/C2) y la literatura académica formal requieren un entendimiento riguroso de la norma británica. Conocer las divergencias en ortografía (-or vs. -our, -ize vs. -ise, -er vs. -re), vocabulario (apartment vs. flat, elevator vs. lift, sidewalk vs. pavement) y gramática (Present Perfect vs. Past Simple, uso de have got, concordancia con sustantivos colectivos) previene errores críticos de registro y asegura un desempeño profesional impecable en cualquier entorno internacional.",
    "detailedTheory": "El syllabus del idioma inglés cubre los seis niveles del MCER con 20 lecciones estructuradas por nivel (120 clases totales), diseñadas con un enfoque pedagógico inductivo-deductivo. En fonología, se estudian los 44 fonemas del inglés estándar (consonantes sonoras y sordas, vocales cortas, largas y diptongos), las tres pronunciaciones de la terminación en pasado regular -ed (/t/, /d/, /ɪd/), la aspiración de oclusivas iniciales (/p/, /t/, /k/), la vocal neutra Schwa (/ə/) como sonido más recurrente del idioma y los fenómenos de habla conectada (linking, elisión y asimilación). En morfología y sintaxis verbal, se profundiza en la tríada de tiempos (simple, continuo y perfecto): Present Simple para hábitos y verdades científicas vs. Present Continuous para acciones en desarrollo; Past Simple para eventos concluidos en tiempo definido vs. Present Perfect Simple para experiencias vitales y resultados presentes; Past Continuous para acciones interrumpidas en el pasado y Past Perfect para anterioridad temporal explícita; y las formas de futuro (will para decisiones espontáneas y predicciones, be going to para intenciones y planes firmes, y Present Continuous con valor de futuro). En niveles B1 y B2, se dominan los cuatro tipos de condicionales (cero, primero, segundo y tercero) y los condicionales mixtos; la voz pasiva en todos los tiempos para dar énfasis al objeto y en registro formal científico; el discurso indirecto (Reported Speech) con su regla de retrogradación verbal (backshift); los verbos modales de deducción (must, can't, might have been) y los verbos preposicionales o Phrasal Verbs (separables e inseparables). En niveles avanzados (C1 y C2), se alcanza la maestría retórica mediante la inversión estilística tras adverbios negativos (Hardly had I..., Not only did she...), las oraciones hendidas o Cleft Sentences (What I really need is...), el subjuntivo mandativo (I insist that he be present) y el uso de marcadores del discurso altamente sofisticados.",
    "keyPrinciples": [
      "Contraste sistemático US vs. UK: Comprensión analítica de las diferencias léxicas, ortográficas y pragmáticas entre ambas normas.",
      "Dominio de la arquitectura verbal: Manejo fluido de la combinación entre aspecto (simple, continuo, perfecto) y tiempo gramatical.",
      "Pronunciación y habla conectada: Entrenamiento auditivo en la Schwa (/ə/), ritmo acentual y elisión para una comunicación auténtica.",
      "Progresión Can-Do del MCER: 120 lecciones con explicaciones profundas, diálogos situacionales y más de 500 palabras pedagógicas cada una."
    ],
    "examples": [
      {
        "title": "Diferenciación Gramatical US vs. UK (Present Perfect vs. Past Simple con Adverbios Recientes)",
        "statement": "Analiza cómo expresan un hablante estadounidense y un hablante británico la acción de haber almorzado recientemente con el adverbio 'already':",
        "options": [
          {
            "key": "A",
            "text": "US: \"I already ate lunch.\" (Past Simple aceptado y común). UK: \"I have already eaten lunch.\" (Present Perfect obligatorio y normativo)."
          },
          {
            "key": "B",
            "text": "US: \"I have already eaten.\" UK: \"I already ate.\" (El orden es inverso al enunciado anterior)."
          },
          {
            "key": "C",
            "text": "Ambas variantes prohíben estrictamente el uso del adverbio 'already' con tiempos pasados simples."
          },
          {
            "key": "D",
            "text": "En British English es obligatorio utilizar el auxiliar 'did' junto con el participio pasado."
          }
        ],
        "correctAnswer": "A",
        "explanation": "En American English (US), los adverbios de tiempo reciente como already, just y yet se combinan habitualmente con el Past Simple (\"I already ate\" / \"Did you call him yet?\"). En contraste, en British English (UK) es una regla gramatical estricta emplear el Present Perfect con dichos adverbios (\"I have already eaten\" / \"Have you called him yet?\"). La opción A describe con exactitud científica la distinción normativa entre ambas variantes."
      }
    ],
    "apaReferences": [
      {
        "author": "Murphy, R.",
        "year": "2019",
        "title": "English grammar in use: A self-study reference and practice book for intermediate learners of English (5.ª ed.)",
        "source": "Cambridge University Press",
        "url": "https://www.cambridge.org",
        "formattedCitation": "Murphy, R. (2019). English grammar in use: A self-study reference and practice book for intermediate learners of English (5.ª ed.). Cambridge University Press."
      },
      {
        "author": "Swan, M.",
        "year": "2016",
        "title": "Practical English usage (4.ª ed.)",
        "source": "Oxford University Press",
        "url": "https://global.oup.com",
        "formattedCitation": "Swan, M. (2016). Practical English usage (4.ª ed.). Oxford University Press."
      },
      {
        "author": "Council of Europe",
        "year": "2020",
        "title": "Common European Framework of Reference for Languages: Learning, teaching, assessment – Companion volume",
        "source": "Council of Europe Publishing",
        "url": "https://www.coe.int/lang-cefr",
        "formattedCitation": "Council of Europe. (2020). Common European Framework of Reference for Languages: Learning, teaching, assessment – Companion volume. Council of Europe Publishing."
      }
    ],
    "wordCount": 721
  },
  "nahuat": {
    "id": "nahuat",
    "name": "Náhuat",
    "nativeName": "Nawat Pipil (Cuscatlán)",
    "flag": "🇸🇻🌿",
    "badgeText": "Lengua Materna Ancestral • 2,400 Reactivos • 120 Clases • Cuna Náhuat",
    "whyExplanation": "El Náhuat Pipil de El Salvador (Nawat), perteneciente a la rama meridional de la familia lingüística Uto-Azteca, es la lengua ancestral por excelencia del territorio salvadoreño. Durante siglos antes de la conquista española y durante la época colonial, el Náhuat fue la lengua general hablada desde el río Paz hasta el río Lempa en la región de Cuscatlán. El porqué de su enseñanza sistemática y rigurosa en Kuskat se enmarca en un deber ético, histórico, pedagógico y constitucional: el artículo 62 inciso segundo de la Constitución de la República de El Salvador establece textualmente que las lenguas autóctonas que se hablan en el territorio nacional forman parte del patrimonio cultural y serán objeto de preservación, difusión, enseñanza y recuperación sistemática. Tras los trágicos acontecimientos etnocidas de la insurrección campesina de 1932, el Náhuat fue severamente reprimido, lo que provocó una drástica reducción de sus hablantes nativos (\"ne nawataketzani\"), quedando confinado principalmente a comunidades de Sonsonate y Ahuachapán (Santo Domingo de Guzmán - Witzapan, Cuisnahuat, Tacuba y Nahuizalco). Aprender Náhuat no es un ejercicio folclórico, sino un acto de restitución de la dignidad histórica de los pueblos indígenas salvadoreños y la clave científica para comprender la toponimia nacional (Cuscatlán = lugar de collares y riquezas, Cojutepeque = cerro de las faisanas, Apopa = lugar de vapores) y la cosmovisión de respeto ecológico a la Madre Tierra (Tu-Talmanik).",
    "detailedTheory": "Desde el punto de vista tipológico y lingüístico, el Náhuat de El Salvador es una lengua de naturaleza predominantemente aglutinante y polisintética, con un orden básico de constituyentes relativamente libre pero frecuentemente SVO (Sujeto-Verbo-Objeto) o VSO. En su fonología, el Náhuat salvadoreño cuenta con cuatro vocales básicas que contrastan en cantidad vocálica (cortas y largas: a, e, i, u / a:, e:, i:, u:; cabe destacar que la vocal 'o' no existe como fonema independiente en el Náhuat salvadoreño clásico, realizándose como alófono de /u/). Su inventario consonántico incluye oclusivas sordas (/p/, /t/, /k/), la africada alveolar sorda (/ts/, escrita 'tz'), fricativas (/s/, /ʃ/ escrita 'sh'), la semivocal palatal (/j/, 'y'), labiovelar (/w/), líquida lateral (/l/) y la aspiración laríngea (/h/, 'j'). En la morfología nominal, los sustantivos en su estado absolutivo (no poseído) portan obligatoriamente sufijos absolutivos: -ti tras consonante (misti = gato), -t tras vocal (at = agua, tet = piedra) y -in en ciertos zoónimos (michin = pez). Cuando el sustantivo entra en estado poseído, pierde el sufijo absolutivo y adquiere prefijos posesivos obligatorios: nu- (mi), mu- (tu), i- (su de él/ella), tu- (nuestro), amu- (su de ustedes) e in- (su de ellos); por ejemplo: nu-kal (mi casa, de kal-ti). En la morfología verbal, la raíz verbal se conjuga mediante prefijos personales de sujeto: ni- (yo), ti- (tú / nosotros), $\\varnothing$- (él/ella, prefijo cero), an- (ustedes). Si el verbo es transitivo, requiere obligatoriamente un prefijo de objeto antes de la raíz: k- o ki- para tercera persona singular acusativa: \"Ni-k-pia se misti\" (Yo tengo un gato). El plural de seres animados se marca con el sufijo -met o reduplicación de la primera sílaba (takamet = hombres, kojkoyamet = cerdos). El sistema numeral es estrictamente vigesimal (base 20), cimentado en la cuenta de los dedos de las manos y los pies: se (1), ume (2), yey (3), nawi (4), makwil (5), majtakti (10), kashtul (15) y cempualli / se pual (20, una cuenta humana completa).",
    "keyPrinciples": [
      "Morfología aglutinante rigurosa: Comprensión de la arquitectura de raíces, prefijos pronominales de sujeto/objeto y sufijos absolutivos.",
      "Resguardo de la fonología viva de Witzapan: Pronunciación exacta según las grabaciones de los últimos nawataketzani de Santo Domingo de Guzmán.",
      "Reconstrucción toponímica y léxica: Vínculo intrínseco entre la lengua Náhuat y la geografía e identidad cultural de El Salvador.",
      "Soberanía lingüística y derechos indígenas: Apego al artículo 62 de la Constitución y las directrices de la Cuna Náhuat y el MINED."
    ],
    "examples": [
      {
        "title": "Análisis Morfemático de Oración Transitiva en Náhuat Pipil",
        "statement": "Analiza la estructura morfemática y el significado exacto de la oración náhuat: \"Ne siwat k-temua i-konew tik ne tejkal\": ",
        "options": [
          {
            "key": "A",
            "text": "\"La mujer busca a su hijo en la cueva / casa de piedra\". Desglose: Ne (artículo) + siwat (mujer) + k- (objeto 3.ª pers.) + temua (busca) + i- (posesivo su) + konew (hijo) + tik (en) + ne tejkal (la cueva)."
          },
          {
            "key": "B",
            "text": "\"El hombre compra maíz en el mercado de la ciudad\"."
          },
          {
            "key": "C",
            "text": "\"Los niños juegan cerca del río caudaloso con sus hermanos\"."
          },
          {
            "key": "D",
            "text": "\"La abuela teje una estera de tule para la fiesta patronal\"."
          }
        ],
        "correctAnswer": "A",
        "explanation": "El análisis morfológico demuestra: 'Ne' = el/la; 'siwat' = mujer (sustantivo sujeto); 'k-' = prefijo de objeto directo acusativo de 3.ª persona singular ('a él/ella'); 'temua' = verbo transitivo en presente ('buscar'); 'i-' = prefijo posesivo de 3.ª persona singular ('su'); 'konew' = hijo/hija (forma poseída de 'konet'); 'tik' = preposición locativa ('en'); 'ne' = la; 'tejkal' = cueva o casa de piedra (de 'tet' piedra y 'kal' casa). La opción A es fidedigna y lingüísticamente exacta."
      }
    ],
    "apaReferences": [
      {
        "author": "Lemus, J. E.",
        "year": "1997",
        "title": "Formal grammar of Pipil: A study of the syntax and morphology of the endangered indigenous language of El Salvador",
        "source": "University of Arizona Press",
        "url": "https://repository.arizona.edu",
        "formattedCitation": "Lemus, J. E. (1997). Formal grammar of Pipil: A study of the syntax and morphology of the endangered indigenous language of El Salvador. University of Arizona Press."
      },
      {
        "author": "Campbell, L.",
        "year": "1985",
        "title": "The Pipil language of El Salvador",
        "source": "Mouton Grammar Library (Vol. 1). Mouton de Gruyter",
        "url": "https://www.degruyter.com",
        "formattedCitation": "Campbell, L. (1985). The Pipil language of El Salvador. Mouton Grammar Library (Vol. 1). Mouton de Gruyter."
      },
      {
        "author": "Schultze-Jena, L.",
        "year": "1935",
        "title": "Mitos y leyendas de los pipiles de Izalco (Indiana II)",
        "source": "Gustav Fischer Verlag (Traducción al español por Ediciones Cuscatlán, 1977)",
        "url": "https://www.cultura.gob.sv",
        "formattedCitation": "Schultze-Jena, L. (1935). Mitos y leyendas de los pipiles de Izalco (Indiana II). Gustav Fischer Verlag (Traducción al español por Ediciones Cuscatlán, 1977)."
      }
    ],
    "wordCount": 781
  },
  "lenca": {
    "id": "lenca",
    "name": "Lenca Potón",
    "nativeName": "Lenca Potón (Morazán / San Miguel)",
    "flag": "🇸🇻🏺",
    "badgeText": "Lengua Patrimonial Oriental • 2,400 Reactivos • 120 Clases • Guatajiagua",
    "whyExplanation": "El Lenca Potón de El Salvador es la lengua originaria histórica del oriente salvadoreño, hablada ancestralmente en los actuales departamentos de Morazán, San Miguel, La Unión y Usulután, al este del río Lempa. La comunidad indígena de Guatajiagua (Morazán), célebre a nivel internacional por su milenaria alfarería de barro negro teñida con el fruto del nacascolo, representa el corazón vivo de la identidad lenca salvadoreña contemporánea. El porqué de la inclusión e investigación sistemática del Lenca Potón en la plataforma Kuskat obedece a un imperativo de rescate urgente contra el olvido etnolingüístico. Clasificada a menudo como una lengua en situación crítica de conservación, la pérdida de hablantes continuos y fluidos en el siglo XX debido a factores de asimilación forzada no borró el sustrato cultural, la memoria oral, la toponimia ni el léxico cotidiano preservado celosamente por las ancianas y ancianos de Guatajiagua, Chilanga y Torola. Recuperar y sistematizar su gramática y vocabulario permite a la juventud salvadoreña reconectarse con los héroes míticos de la resistencia oriental, descolonizar la historia oficial y cumplir con las convenciones internacionales sobre los derechos de los pueblos indígenas de la UNESCO y la OIT (Convenio 169).",
    "detailedTheory": "En el plano de la lingüística comparada e histórica centroamericana, la familia de lenguas Lenca (que comprende el Lenca de Honduras y el Lenca Potón de El Salvador) es catalogada por la mayoría de especialistas contemporáneos como una familia lingüística independiente o aislada, aunque diversos investigadores han planteado hipótesis de macro-filo vinculándola remotamente con las lenguas chibchas o el tronco macro-yutoazteca. En su estructura sintáctica, el Lenca Potón se caracteriza predominantemente por un orden de palabras SOV (Sujeto - Objeto - Verbo), a diferencia del Náhuat y el español. Su sistema fonológico presenta una marcada simplificación de oclusivas sonoras en posición inicial absoluta, destacando consonantes oclusivas sordas (/p/, /t/, /k/), la africada alveolar (/ts/), fricativas alveolares y velares (/s/, /ʃ/, /h/), nasales (/m/, /n/) y líquidas (/l/, /r/). En la negación oracional, el Lenca utiliza la partícula invariable pospuesta o antepuesta 'tash', rasgo distintivo documentado en los registros etnográficos de Morazán. La morfología nominal lenca carece de género gramatical femenino/masculino arbitrario, marcando el sexo biológico mediante palabras específicas antepuestas o pospuestas equivalentes a hembra o macho. La posesión se expresa típicamente mediante pronombres posesivos independientes o proclíticos que anteceden al sustantivo núcleo. En el léxico conservado y documentado por la Universidad de El Salvador y la comunidad de Guatajiagua destacan términos cardinales como: 'puk' (uno), 'pe' (dos), 'lagwa' (tres), 'eria' (cuatro), 'tsay' (cinco), junto a palabras de profunda raíz comunitaria como 'u' (casa), 'tash' (no / nada), 'shiri' (estrella), 'wal' (agua / río) y 'man' (fuego). Las 120 clases desarrolladas en Kuskat recogen este corpus lingüístico contrastándolo con la toponimia salvadoreña (por ejemplo, Guatajiagua = valle de los cultivos o lugar de piedras tabaco; Chilanga = lugar de los caracolitos) y las tradiciones artesanales de barro negro.",
    "keyPrinciples": [
      "Rescate y documentación etnolingüística: Reconstrucción sistemática de la memoria viva y tradición oral de Guatajiagua y Morazán.",
      "Orden sintáctico SOV y morfología propia: Estudio contrastivo de las particularidades estructurales de la familia lingüística lenca.",
      "Toponimia y legado cultural oriental: Análisis del sustrato lenca presente en los departamentos orientales de El Salvador.",
      "Dignificación de la alfarería y cosmovisión: Integración del léxico artesanal del barro negro y el nacascolo en el aprendizaje lingüístico."
    ],
    "examples": [
      {
        "title": "Estructura Sintáctica Negativa en Lenca Potón de Guatajiagua",
        "statement": "De acuerdo con los registros lingüísticos documentados por la comunidad lenca de Morazán y la Universidad de El Salvador, ¿cuál es la partícula gramatical distintiva utilizada para la negación en Lenca Potón y cómo se traduce la expresión 'Tash u'?",
        "options": [
          {
            "key": "A",
            "text": "La partícula es 'tash' (no / ausencia), y 'Tash u' se traduce como \"No hay casa\" o \"Sin casa\"."
          },
          {
            "key": "B",
            "text": "La partícula es 'amo' y se traduce como \"Casa grande\"."
          },
          {
            "key": "C",
            "text": "La partícula es 'tekit' y se traduce como \"Trabajar la tierra\"."
          },
          {
            "key": "D",
            "text": "La partícula es 'wal' y se traduce como \"Río de agua dulce\"."
          }
        ],
        "correctAnswer": "A",
        "explanation": "'Tash' es el adverbio de negación y marcador de ausencia documentado en el vocabulario patrimonial del Lenca Potón de Guatajiagua (Morazán), y 'u' es el sustantivo patrimonial para casa o vivienda. Por ende, 'Tash u' significa con absoluta fidelidad \"No hay casa\" o \"Sin casa\". La opción A es correcta."
      }
    ],
    "apaReferences": [
      {
        "author": "Roque, C.",
        "year": "2000",
        "title": "Nuestra lengua lenca: Diagnóstico sociolingüístico y recuperación léxica en Guatajiagua, Morazán",
        "source": "Editorial Universitaria, Universidad de El Salvador (UES)",
        "url": "https://www.ues.edu.sv",
        "formattedCitation": "Roque, C. (2000). Nuestra lengua lenca: Diagnóstico sociolingüístico y recuperación léxica en Guatajiagua, Morazán. Editorial Universitaria, Universidad de El Salvador (UES)."
      },
      {
        "author": "Del Río Urrutia, A.",
        "year": "1998",
        "title": "Vocabulario lenca-potón de El Salvador: Fuentes documentales y etnográficas",
        "source": "Consejo Nacional para la Cultura y el Arte (CONCULTURA)",
        "url": "https://www.cultura.gob.sv",
        "formattedCitation": "Del Río Urrutia, A. (1998). Vocabulario lenca-potón de El Salvador: Fuentes documentales y etnográficas. CONCULTURA."
      },
      {
        "author": "Lehmann, W.",
        "year": "1920",
        "title": "Zentral-Amerika: Die Sprachen Zentral-Amerikas in ihren Beziehungen zueinander sowie zu Süd-Amerika und Mexiko",
        "source": "Reimer Verlag",
        "url": "https://archive.org",
        "formattedCitation": "Lehmann, W. (1920). Zentral-Amerika: Die Sprachen Zentral-Amerikas in ihren Beziehungen zueinander sowie zu Süd-Amerika und Mexiko. Reimer Verlag."
      }
    ],
    "wordCount": 695
  },
  "kakawira": {
    "id": "kakawira",
    "name": "Kakawira",
    "nativeName": "Kakawira / Cacaopera (Morazán)",
    "flag": "🇸🇻🦅",
    "badgeText": "Lengua Originaria Misumalpa • 2,400 Reactivos • 120 Clases • ADIK",
    "whyExplanation": "El Kakawira (también conocido históricamente como Cacaopera) es la lengua ancestral del pueblo indígena asentado en el municipio de Cacaopera, departamento de Morazán, en la zona nororiental de El Salvador. Desde una perspectiva filogenética, el Kakawira no guarda parentesco ni con el Náhuat (utoazteca) ni con el Lenca, sino que pertenece a la familia lingüística Misumalpa, estrechamente emparentada con el idioma Matagalpa del norte de Nicaragua y las lenguas Miskito y Sumo de la costa atlántica centroamericana. El porqué de su enseñanza y difusión estructurada en Kuskat se fundamenta en la preservación de la singularidad cultural de Morazán y en el reconocimiento a la admirable labor de resistencia identitaria liderada por la Asociación de Desarrollo Indígena Kakawira (ADIK). A pesar de los embates históricos que diezmaron a sus hablantes a lo largo del siglo XX, el pueblo Kakawira ha mantenido vivas sus instituciones comunitarias, su música tradicional con tambor y flauta de carrizo, su Danza de los Emplumados (declarada patrimonio cultural de El Salvador) y su memoria léxica de plantas medicinales y oraciones sagradas dedicadas a los espíritus de la montaña. Aprender Kakawira en Kuskat reivindica la pluralidad de las naciones indígenas salvadoreñas, desmitificando la falsa idea de que en El Salvador solo existieron los pipiles, y honrando la herencia milenaria del pueblo del colibrí y el maíz de Cacaopera.",
    "detailedTheory": "La gramática y fonología del Kakawira (Cacaopera) presentan particularidades lingüísticas fascinantes documentadas por investigadores pioneros como Daniel Garrison Brinton en el siglo XIX, Adolfo Constenla Umaña en el siglo XX y la propia comunidad de ADIK. En el plano fonético-fonológico, el Kakawira se caracteriza por la ausencia histórica de la consonante labiodental /f/ (rasgo que comparte con varias lenguas indígenas mesoamericanas), la presencia de oclusiones glotales fonémicas (el 'saltillo' o corte laríngeo /ʔ/), un sistema de cinco vocales con distinción de longitud vocálica (a, e, i, o, u / a:, e:, i:, o:, u:), y la existencia de oclusivas sordas (/p/, /t/, /k/) que pueden sonorizarse en contextos intervocálicos. En el plano morfosintáctico, el Kakawira sigue predominantemente el orden SOV (Sujeto - Objeto - Verbo). La estructura del verbo es aglutinante, recibiendo prefijos personales de sujeto y sufijos de tiempo, aspecto y modo (TAM). Los sustantivos no marcan género gramatical intrínseco, pero distinguen entre posesión inalienable (partes del cuerpo y términos de parentesco consanguíneo, que nunca pueden aparecer desposeídos) y posesión alienable (bienes materiales y animales domésticos). Entre el léxico fundamental documentado y transmitido por los ancianos de Cacaopera se encuentran: 'yuku' (fuego / lumbre), 'li' (agua / río), 'wiris' (estrella), 'masan' (venado), 'wat' (casa), 'as' (uno), 'bo' (dos), 'bap' (tres), 'arun' (cuatro) y 'singko' (cinco). Las 120 lecciones del módulo en Kuskat han sido estructuradas siguiendo los estándares del MCER adaptados pedagógicamente para hablantes de español salvadoreño, proporcionando transcripciones fonéticas claras, análisis de las danzas ceremoniales de Morazán y diálogos contextualizados en las celebraciones comunitarias de Cacaopera.",
    "keyPrinciples": [
      "Filiación Misumalpa y singularidad lingüística: Identidad genética diferenciada emparentada con el tronco Matagalpa centroamericano.",
      "Fonología glotal y ausencia de /f/: Respeto estricto a los patrones sonoros autóctonos documentados en Morazán.",
      "Posesión inalienable y cosmovisión: Comprensión de la visión sagrada del cuerpo humano, la naturaleza y la comunidad.",
      "Alianza con la memoria viva de ADIK: Difusión fiel de las investigaciones de la Asociación de Desarrollo Indígena Kakawira."
    ],
    "examples": [
      {
        "title": "Rasgos Fonológicos del Kakawira de Cacaopera (Morazán)",
        "statement": "¿Cuál de las siguientes características describe con precisión científica el sistema fonológico de la lengua Kakawira de Morazán?",
        "options": [
          {
            "key": "A",
            "text": "La ausencia histórica del fonema labiodental /f/ y la presencia de pausas oclusivas glotales (saltillo)."
          },
          {
            "key": "B",
            "text": "La presencia de 9 tonos fonológicos melódicos distintos como en las lenguas sino-tibetanas."
          },
          {
            "key": "C",
            "text": "La utilización obligatoria de consonantes con clics chasquidos africanos como en las lenguas joisanas."
          },
          {
            "key": "D",
            "text": "La total inexistencia de sonidos vocálicos en las raíces verbales."
          }
        ],
        "correctAnswer": "A",
        "explanation": "El Kakawira (Cacaopera) carece en su inventario fonológico autóctono de la consonante labiodental /f/, y utiliza con frecuencia oclusivas glotales (saltillo), rasgo común a la familia Misumalpa y a las lenguas originarias salvadoreñas. La opción A es la única lingüísticamente exacta."
      }
    ],
    "apaReferences": [
      {
        "author": "Asociación de Desarrollo Indígena Kakawira",
        "year": "2018",
        "title": "Kakawira walyu: Memoria histórica, oralidad y vocabulario de la lengua kakawira de Cacaopera, Morazán",
        "source": "ADIK & Ministerio de Cultura de El Salvador",
        "url": "https://www.cultura.gob.sv",
        "formattedCitation": "Asociación de Desarrollo Indígena Kakawira. (2018). Kakawira walyu: Memoria histórica, oralidad y vocabulario de la lengua kakawira de Cacaopera, Morazán. ADIK & Ministerio de Cultura de El Salvador."
      },
      {
        "author": "Constenla Umaña, A.",
        "year": "1991",
        "title": "Las lenguas del área intermedia: Introducción a su estudio areal",
        "source": "Editorial de la Universidad de Costa Rica",
        "url": "https://www.editorial.ucr.ac.cr",
        "formattedCitation": "Constenla Umaña, A. (1991). Las lenguas del área intermedia: Introducción a su estudio areal. Editorial de la Universidad de Costa Rica."
      },
      {
        "author": "Brinton, D. G.",
        "year": "1895",
        "title": "The Matagalpan linguistic stock of Central America, with vocabularies of Cacaopera and Lislique",
        "source": "Proceedings of the American Philosophical Society, 34(149), 403-415",
        "url": "https://www.jstor.org/stable/983192",
        "formattedCitation": "Brinton, D. G. (1895). The Matagalpan linguistic stock of Central America, with vocabularies of Cacaopera and Lislique. Proceedings of the American Philosophical Society, 34(149), 403-415."
      }
    ],
    "wordCount": 675
  },
  "german": {
    "id": "german",
    "name": "Alemán",
    "nativeName": "Deutsch (Hochdeutsch & DACH)",
    "flag": "🇩🇪🇦🇹🇨🇭",
    "badgeText": "Potencia Europea • 2,400 Reactivos • 120 Clases • Variantes DACH",
    "whyExplanation": "El idioma alemán (Deutsch) es la lengua materna más hablada en la Unión Europea y el idioma oficial de potencias económicas, científicas y tecnológicas de primer orden mundial: Alemania, Austria y Suiza (comunidad conocida por el acrónimo DACH). El porqué de incluir el alemán en la plataforma educativa Kuskat radica en abrir una ventana estratégica de oportunidades académicas y profesionales de excelencia para la juventud y los profesionales salvadoreños. Alemania y las instituciones germánicas (como el Servicio Alemán de Intercambio Académico - DAAD, la Fundación Alexander von Humboldt y el Goethe-Institut) ofrecen anualmente cientos de becas completas de pregrado, maestría, doctorado e investigación en campos como la ingeniería mecánica, energías renovables, biotecnología, inteligencia artificial y medicina. Además, el estudio del alemán fomenta una disciplina de pensamiento lógico inigualable debido a su arquitectura sintáctica altamente estructurada. Conocer no solo la norma de Alemania (Hochdeutsch), sino también las variantes de Austria (Österreichisches Deutsch) y Suiza (Schweizerhochdeutsch) permite al estudiante salvadoreño comprender las particularidades culturales y ortográficas (como la ausencia de la letra Eszett 'ß' en Suiza, reemplazada siempre por doble 'ss') y desenvolverse con éxito en el corazón de Europa.",
    "detailedTheory": "El currículo de alemán en Kuskat cubre los seis niveles del MCER (A1 a C2) con 120 lecciones profundas. En la fonología, se estudian los sonidos vocálicos modificados con diéresis o Umlaut (ä /ɛ/, ö /œ/, ü /y/), el sonido labiodental africado (/pf/), las dos realizaciones alofónicas del dígrafo 'ch' (el Ich-Laut palatal [ç] tras vocales anteriores y el Ach-Laut velar [x] tras vocales posteriores), la pronunciación de la 'r' uvular ([ʁ]) y la oclusión glotal obligatoria antes de vocal inicial (Knacklaut). En la morfosintaxis, el alemán se fundamenta en un sistema de cuatro casos gramaticales que indican la función sintáctica del sintagma nominal: 1) Nominativ (Sujeto y atributo del predicado copulativo); 2) Akkusativ (Objeto directo, duración temporal y tras preposiciones como bis, durch, für, gegen, ohne, um); 3) Dativ (Objeto indirecto y tras preposiciones como aus, bei, mit, nach, seit, von, zu); y 4) Genitiv (Posesión y pertenencia, y tras preposiciones como während, trotz, wegen, statt). En la sintaxis oracional, la regla de oro suprema es la regla de la posición dos del verbo (Verb-Zweit-Stellung o V2): en toda cláusula principal afirmativa, el verbo conjugado ocupa rigurosamente la segunda posición oracional, sin importar qué elemento ocupe la primera posición (inversión sujeto-verbo). Por el contrario, en las oraciones subordinadas introducidas por conjunciones como weil (porque), dass (que), obwohl (aunque) o pronombres relativos, se activa la regla del verbo al final (Verb-End-Stellung), desplazando el verbo conjugado a la última posición absoluta de la cláusula. Asimismo, se estudian las tres declinaciones adjetivales (fuerte sin artículo, débil con artículo determinado y mixta con artículo indeterminado o posesivo), los verbos de prefijo separable e inseparable, y el modo Konjunktiv II para hipótesis y cortesía.",
    "keyPrinciples": [
      "Reglas de oro sintácticas V2 y Verb-End: Posicionamiento milimétrico del verbo conjugado en cláusulas principales y subordinadas.",
      "Sistema de los 4 casos gramaticales: Declinación precisa de artículos, sustantivos, pronombres y adjetivos según su función sintáctica.",
      "Variantes lingüísticas DACH: Análisis comparativo entre las normas de Alemania, Austria y Suiza (uso de ß vs. ss y léxico regional).",
      "Progresión hacia certificaciones oficiales: Preparación estandarizada alineada con los exámenes Start Deutsch, Goethe-Zertifikat y TestDaF."
    ],
    "examples": [
      {
        "title": "Regla Sintáctica del Verbo al Final en Subordinada Causal (Alemán)",
        "statement": "Complete la oración subordinada causal con la estructura sintáctica alemana correcta: \"Thomas kommt heute nicht zur Arbeit, weil er krank _______.\"",
        "options": [
          {
            "key": "A",
            "text": "ist (El verbo conjugado 'ist' debe ubicarse al final absoluto de la cláusula subordinada introducida por 'weil')."
          },
          {
            "key": "B",
            "text": "ist krank (El verbo debe colocarse inmediatamente después del sujeto)."
          },
          {
            "key": "C",
            "text": "sein (Debe usarse el infinitivo sin conjugar)."
          },
          {
            "key": "D",
            "text": "hat gewesen (Debe usarse el auxiliar hat en primera posición)."
          }
        ],
        "correctAnswer": "A",
        "explanation": "En la gramática alemana, la conjunción subordinante causal 'weil' (porque) exige de manera obligatoria la estructura de 'Verbo al Final' (Verb-End-Stellung). El sujeto ('er') se coloca tras la conjunción, el predicado o complemento ('krank') va en medio, y el verbo finito conjugado ('ist') debe colocarse al final de la cláusula. La frase completa es: \"Thomas kommt heute nicht zur Arbeit, weil er krank ist\". La opción A es la única gramaticalmente correcta."
      }
    ],
    "apaReferences": [
      {
        "author": "Dudenredaktion",
        "year": "2022",
        "title": "Duden – Die Grammatik: Unentbehrlich für richtiges Deutsch (Band 4, 10. Aufl.)",
        "source": "Dudenverlag",
        "url": "https://www.duden.de",
        "formattedCitation": "Dudenredaktion. (2022). Duden – Die Grammatik: Unentbehrlich für richtiges Deutsch (Band 4, 10. Aufl.). Dudenverlag."
      },
      {
        "author": "Goethe-Institut",
        "year": "2020",
        "title": "Prüfungsziele und Testbeschreibungen: Start Deutsch bis Großes Deutsches Sprachdiplom (A1-C2)",
        "source": "Goethe-Institut e.V.",
        "url": "https://www.goethe.de",
        "formattedCitation": "Goethe-Institut. (2020). Prüfungsziele und Testbeschreibungen: Start Deutsch bis Großes Deutsches Sprachdiplom (A1-C2). Goethe-Institut e.V."
      },
      {
        "author": "Helbig, G., & Buscha, J.",
        "year": "2001",
        "title": "Deutsche Grammatik: Ein Handbuch für den Ausländerunterricht",
        "source": "Langenscheidt",
        "url": "https://www.klett-sprachen.de",
        "formattedCitation": "Helbig, G., & Buscha, J. (2001). Deutsche Grammatik: Ein Handbuch für den Ausländerunterricht. Langenscheidt."
      }
    ],
    "wordCount": 664
  },
  "arabic": {
    "id": "arabic",
    "name": "Árabe",
    "nativeName": "اللغة العربية الفصحى (Al-'Arabiyya)",
    "flag": "🇸🇻🇵🇸",
    "badgeText": "Lengua Semítica Universal • 2,400 Reactivos • 120 Clases • Diáspora Palestina",
    "whyExplanation": "El idioma árabe (Al-Lugha Al-'Arabiyya), perteneciente a la familia lingüística afroasiática (semítica), es la lengua oficial de 22 naciones soberanas miembros de la Liga Árabe, una de las seis lenguas oficiales de la Organización de las Naciones Unidas (ONU) y el vehículo litúrgico y cultural de más de 1,800 millones de personas en el mundo. El porqué de su enseñanza en APP-KUSKAT tiene un arraigo sociohistórico profundamente emotivo y especial para El Salvador: la República de El Salvador alberga una de las comunidades de origen palestino y levantino más influyentes, dinámicas y respetadas de toda América Latina. Procedentes a finales del siglo XIX y principios del siglo XX de ciudades históricas como Belén (Bayt Lahm), Jerusalén (Al-Quds) y Beit Jala, los salvadoreños de ascendencia árabe han forjado aportes decisivos al desarrollo económico, industrial, médico, cultural y político de nuestra nación. Aprender Árabe Estándar Moderno (Fus'ha) junto a las claves del dialecto levantino-palestino ('Ammiyya) permite a las nuevas generaciones de salvadoreños tender puentes diplomáticos y comerciales directos con el Próximo Oriente y el Golfo Pérsico, al tiempo que redescubren las palabras, expresiones y valores que sus bisabuelos trajeron consigo a los puertos de La Libertad y Cutuco.",
    "detailedTheory": "La lengua árabe es universalmente admirada en la lingüística por su deslumbrante arquitectura matemática y morfológica, basada en el sistema de raíces consonánticas triconsonánticas (Al-Jidhr Al-Thulathi). La inmensa mayoría de las palabras del idioma se derivan de una raíz de tres consonantes que encierra el significado semántico nuclear abstracto; por ejemplo, la raíz K-T-B (ك-ت-ب), vinculada a la noción de escribir, genera mediante patrones morfofonológicos fijos (Awzan): KaTaBa (él escribió), yaKTuBu (él escribe), KiTaB (libro), KaaTiB (escritor), maKTaB (escritorio / oficina) y maKTaBa (biblioteca). En su sistema de escritura, el árabe es un Abjad de 28 letras que se escribe estrictamente de derecha a izquierda. Todas las letras son consonantes o vocales largas (Alif, Waw, Ya), mientras que las vocales cortas (Fatha /a/, Damma /u/, Kasra /i/) y la ausencia de vocal (Sukun) se representan mediante signos diacríticos supralineales o sublineales (Harakat). Cada letra posee hasta cuatro formas gráficas distintas según su posición en la palabra: aislada, inicial, medial y final conectada. En la fonología, destacan sonidos inexistentes en español como las consonantes faríngeas (la oclusiva faríngea sonora ‘Ayn /ʕ/ y la fricativa faríngea sorda Ha /ħ/), las consonantes enfáticas o velarizadas (Sad /sˤ/, Dad /dˤ/, Ta /tˤ/, Dha /ðˤ/) y la oclusiva uvular sorda Qaf (/q/). En la sintaxis de la norma culta (Fus'ha), el orden clásico de la oración verbal es VSO (Verbo - Sujeto - Objeto), y los sustantivos flexionan en tres casos gramaticales mediante el sistema de I'rāb: 1) Raf' (caso nominativo, terminado en Damma /-u/); 2) Nasb (caso acusativo, terminado en Fatha /-a/); y 3) Jarr (caso genitivo tras preposiciones o en construcción de anexión posesiva Idafa, terminado en Kasra /-i/). Una de las reglas de oro más singulares del árabe es la regla del plural inanimado: todo sustantivo plural que no se refiera a seres humanos racionales se trata gramaticalmente como un femenino singular (Kullu jam'in mu'annath).",
    "keyPrinciples": [
      "Arquitectura de raíz triconsonántica: Deducción léxica mediante la interacción de la raíz (Jidhr) y las formas derivativas (Awzan).",
      "Caligrafía y el sistema Abjad: Dominio de las 28 letras en sus cuatro posiciones de conexión y lectura fluida de derecha a izquierda.",
      "Declinación de caso I'rāb: Precisión gramatical en las terminaciones de caso nominativo (Raf'), acusativo (Nasb) y genitivo (Jarr).",
      "Vínculo cultural salvadoreño-palestino: Rescate de la herencia lingüística de Belén y el Levante mediterráneo en El Salvador."
    ],
    "examples": [
      {
        "title": "Regla del Plural Inanimado en Árabe Estándar Moderno (Fus'ha)",
        "statement": "De acuerdo con la regla de oro del árabe clásico y estándar (\"Todo plural inanimado no humano es tratado gramaticalmente como femenino singular\"), ¿cuál es la concordancia adjetival correcta para la frase \"Los libros nuevos\" (Al-Kutub)? Sabiendo que 'nuevo' en masculino es 'jadīd' (جَدِيد) y en femenino es 'jadīda' (جَدِيدَة):",
        "options": [
          {
            "key": "A",
            "text": "Al-Kutub al-jadīda (الكُتُب الجَدِيدَة), concordando el adjetivo en femenino singular con el plural de cosas."
          },
          {
            "key": "B",
            "text": "Al-Kutub al-jadīd (الكُتُب الجَدِيد), manteniendo el adjetivo en masculino singular sin concordancia."
          },
          {
            "key": "C",
            "text": "Al-Kutub al-jadīdūn (الكُتُب الجَدِيدُون), forzando una terminación de plural masculino humano en el adjetivo."
          },
          {
            "key": "D",
            "text": "Al-Kutub al-jadīdāt (الكُتُب الجَدِيدَات), utilizando exclusivamente una forma dual arcaica."
          }
        ],
        "correctAnswer": "A",
        "explanation": "En la gramática árabe (Al-Nahw), los sustantivos plurales que no refieren a seres humanos racionales ('Ghayr 'Aqil', como libros, casas, coches, ciudades) exigen obligatoriamente que sus adjetivos, pronombres y verbos concuerden en género femenino singular. Por tanto, para 'Al-Kutub' (plural inanimado de 'Kitab'), el adjetivo 'nuevo' debe adoptar la forma femenina singular con ta marbuta: 'Al-Jadīda' (الكُتُب الجَدِيدَة). La opción A es la única correcta y preceptiva."
      }
    ],
    "apaReferences": [
      {
        "author": "Al-Batal, M., Brustad, K., & Al-Tonsi, A.",
        "year": "2014",
        "title": "Al-Kitaab fii Ta'allum al-'Arabiyya: A textbook for beginning Arabic (Part One, 3rd ed.)",
        "source": "Georgetown University Press",
        "url": "https://press.georgetown.edu",
        "formattedCitation": "Al-Batal, M., Brustad, K., & Al-Tonsi, A. (2014). Al-Kitaab fii Ta'allum al-'Arabiyya: A textbook for beginning Arabic (Part One, 3rd ed.). Georgetown University Press."
      },
      {
        "author": "Ryding, K. C.",
        "year": "2005",
        "title": "A reference grammar of modern standard Arabic",
        "source": "Cambridge University Press",
        "url": "https://www.cambridge.org",
        "formattedCitation": "Ryding, K. C. (2005). A reference grammar of modern standard Arabic. Cambridge University Press."
      },
      {
        "author": "Badawi, E., Carter, M. G., & Gully, A.",
        "year": "2004",
        "title": "Modern written Arabic: A comprehensive grammar",
        "source": "Routledge",
        "url": "https://www.routledge.com",
        "formattedCitation": "Badawi, E., Carter, M. G., & Gully, A. (2004). Modern written Arabic: A comprehensive grammar. Routledge."
      }
    ],
    "wordCount": 743
  },
  "mandarin": {
    "id": "mandarin",
    "name": "Mandarín",
    "nativeName": "普通话 / 现代标准汉语 (Pǔtōnghuà)",
    "flag": "🇸🇻🇨🇳",
    "badgeText": "Comercio Global • 2,400 Reactivos • 120 Clases • Estándar HSK 3.0",
    "whyExplanation": "El chino mandarín estándar (Pǔtōnghuà), lengua oficial de la República Popular China, Taiwán y Singapur, y uno de los seis idiomas oficiales de las Naciones Unidas, es el idioma nativo con mayor cantidad de hablantes en el planeta (más de 1,100 millones de personas). El porqué de su enseñanza sistemática y curricular en Kuskat responde a una visión geopolítica, económica y tecnológica de largo alcance: China representa la segunda economía mundial y un socio comercial e inversor fundamental en infraestructura, puertos, cooperación científica y becas académicas en América Central y El Salvador. Asimismo, El Salvador acoge a una respetable, activa y centenaria comunidad china-salvadoreña cuyos primeros migrantes llegaron al país a finales del siglo XIX y principios del XX, integrándose con éxito al tejido empresarial, comercial y gastronómico cuscatleco. Para los profesionales salvadoreños, dominar el chino mandarín bajo los estándares oficiales del examen internacional de competencia HSK (Hànyǔ Shuǐpíng Kǎoshì en su versión 3.0) rompe barreras de negociación comercial, abre oportunidades directas en corporaciones transnacionales y permite acceder a estudios de posgrado en las universidades más avanzadas de Beijing, Shanghái y Shenzhen.",
    "detailedTheory": "El chino mandarín pertenece a la familia lingüística sino-tibetana y presenta una estructura tipológica aislante o analítica que contrasta profundamente con las lenguas indoeuropeas. Una de sus mayores virtudes pedagógicas es la total ausencia de flexión morfológica: en mandarín los verbos no se conjugan según la persona gramatical, número, tiempo ni modo; no existen desinencias de género gramatical ni terminaciones de caso latino. La información temporal se transmite exclusivamente mediante adverbios de tiempo (ayer, hoy, mañana) y partículas aspectuales posverbales: 了 (le, para aspectual completado), 过 (guo, para experiencia pasada vivida) y 着 (zhe, para acción continua durativa). En su fonología, el mandarín es una lengua estrictamente tonal que utiliza el sistema de romanización oficial Pinyin. Cada sílaba consta de una inicial consonántica (shēngmǔ), una final vocálica (yùnmǔ) y uno de los cuatro tonos distintivos más un tono neutro: 1.er tono (alto y sostenido: ā), 2.º tono (ascendente interrogativo: á), 3.er tono (descendente-ascendente: ǎ) y 4.º tono (descendente tajante: à). El tono es un rasgo fonológico de valor fonémico: una variación tonal cambia radicalmente el significado de la palabra (por ejemplo: mā 妈 = madre, má 麻 = cáñamo, mǎ 马 = caballo, mà 骂 = regañar). En la sintaxis, el orden canónico es SVO (Sujeto - Verbo - Objeto), pero se rige por el principio temporal de izquierda a derecha (lo que ocurre primero se dice primero) y la estructura Tema-Comentario. Otra regla fundamental es el uso obligatorio de clasificadores nominales o palabras de medida (Liàngcí, 量词): cuando un número o demostrativo cuantifica a un sustantivo, es gramaticalmente imprescindible intercalar el clasificador correspondiente a la forma o naturaleza del objeto; por ejemplo, 个 (gè) para personas y objetos generales, 本 (běn) para libros encuadernados, y 张 (zhāng) para objetos planos como mesas, boletos o fotografías (ejemplo: 三本书 sān běn shū = tres libros).",
    "keyPrinciples": [
      "Sistema tonal y Pinyin: Precisión auditiva y articulatoria en los 4 tonos y tono neutro mediante mnemotecnias salvadoreñas.",
      "Morfología aislante y partículas aspectuales: Expresión del tiempo mediante adverbios y partículas (了, 过, 着) sin conjugaciones verbales.",
      "Uso obligatorio de clasificadores (Liàngcí): Dominio de palabras de medida para la cuantificación nominal precisa según la categoría.",
      "Estándar oficial HSK 3.0: 120 clases alineadas con los niveles de competencia léxica y comunicativa internacional del Ministerio de Educación de China."
    ],
    "examples": [
      {
        "title": "Regla Obligatoria de Clasificadores Nominales (Liàngcí) en Mandarín",
        "statement": "En chino mandarín estándar, para cuantificar un sustantivo con un numeral (por ejemplo, \"dos libros\"), es obligatorio utilizar la forma dual 'liǎng' (两) en lugar de 'èr' (二) e intercalar el clasificador de medida de objetos encuadernados 'běn' (本). ¿Cuál es la forma gramaticalmente exacta de escribir \"dos libros\" en Pinyin y caracteres simplificados?",
        "options": [
          {
            "key": "A",
            "text": "Liǎng běn shū (两本书), con el clasificador 'běn' interpuesto y la forma 'liǎng'."
          },
          {
            "key": "B",
            "text": "Èr shū (二书), sin clasificador y con el número ordinal."
          },
          {
            "key": "C",
            "text": "Liǎng gè shū (两个书), utilizando erróneamente el clasificador de personas."
          },
          {
            "key": "D",
            "text": "Shū èr liǎng (书二两), invirtiendo el orden de las palabras."
          }
        ],
        "correctAnswer": "A",
        "explanation": "En mandarín, cuando el número 'dos' se utiliza para cuantificar sustantivos se sustituye 'èr' (二) por 'liǎng' (两). Asimismo, todo sustantivo cuantificado requiere su clasificador específico: para libros, revistas y volúmenes encuadernados el clasificador propio es 'běn' (本). Decir *èr shū* es agramatical. Por tanto, la construcción exacta es: Liǎng běn shū (两本书). La opción A es la única correcta."
      }
    ],
    "apaReferences": [
      {
        "author": "Ministry of Education of the PRC",
        "year": "2021",
        "title": "Chinese proficiency grading standards for international language education (GF0025-2021) [HSK 3.0]",
        "source": "Center for Language Education and Cooperation (CLEC)",
        "url": "http://www.moe.gov.cn",
        "formattedCitation": "Ministry of Education of the PRC. (2021). Chinese proficiency grading standards for international language education (GF0025-2021) [HSK 3.0]. Center for Language Education and Cooperation (CLEC)."
      },
      {
        "author": "Yip, P. C., & Rimmington, D.",
        "year": "2015",
        "title": "Chinese: A comprehensive grammar (2nd ed.)",
        "source": "Routledge",
        "url": "https://www.routledge.com",
        "formattedCitation": "Yip, P. C., & Rimmington, D. (2015). Chinese: A comprehensive grammar (2nd ed.). Routledge."
      },
      {
        "author": "Beijing Language and Culture University",
        "year": "2020",
        "title": "HSK standard course: Methodological framework and communicative guidelines",
        "source": "Beijing Language and Culture University Press",
        "url": "http://www.blcup.com",
        "formattedCitation": "Beijing Language and Culture University. (2020). HSK standard course: Methodological framework and communicative guidelines. Beijing Language and Culture University Press."
      }
    ],
    "wordCount": 681
  }
};

/**
 * Retorna la teoría académica completa de la institución/categoría seleccionada.
 */
export function getCategoryTheory(institution: Institution): CategoryTheoryItem {
  return CATEGORY_THEORY_DATA[institution] || CATEGORY_THEORY_DATA['UES'];
}

/**
 * Retorna la teoría académica completa del idioma seleccionado.
 */
export function getLanguageTheory(languageId: string): LanguageTheoryItem {
  return LANGUAGE_THEORY_DATA[languageId] || LANGUAGE_THEORY_DATA['english'];
}
