import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const DIST_INDEX = path.join(DIST_DIR, 'index.html');
const ROUTES_OUT_DIR = path.join(DIST_DIR, 'routes');

const ROUTE_DEFINITIONS = [
  {
    tab: 'el-salvador-portal',
    title: 'KUSKAT El Salvador | Portal Académico Completo (19 Áreas y Simuladores)',
    description:
      'Portal académico completo de El Salvador con las 19 áreas de estudio, estadísticas educativas, simuladores oficiales UES, AVANZO, MINED-ESMATE, ANSP, CSJ, MINSAL y lenguas originarias.',
    heading: 'KUSKAT El Salvador — Portal Académico Completo (19 Áreas)',
    institution: 'UES, MINED, MINSAL, CSJ, VMT y ANSP',
    focus:
      '19 áreas académicas gratuitas, estadísticas de preparación, dirección pedagógica y acceso directo a simuladores de admisión universitaria, habilitación profesional, ciencias exactas e idiomas',
    applications:
      'estudio integral gratuito para aspirantes salvadoreños a educación superior, certificaciones profesionales, educación media y revitalización lingüística',
  },
  {
    tab: 'academic-reinforcement',
    title: 'Refuerzo Curricular Oficial MINED-ESMATE (1° Grado a Bachillerato) | KUSKAT',
    description:
      'Guías teóricas paso a paso, definiciones formales, ejemplos resueltos y bancos de práctica alineados al currículo oficial MINED-ESMATE de El Salvador desde 1° grado hasta 2° año de bachillerato.',
    heading: 'Refuerzo Curricular Oficial MINED-ESMATE: 1° Grado a Bachillerato',
    institution: 'Ministerio de Educación, Ciencia y Tecnología (MINED / ESMATE)',
    focus:
      'aritmética posicional, fracciones, proporcionalidad, álgebra lineal y cuadrática, geometría euclidiana y analítica, trigonometría, secciones cónicas, cálculo diferencial introductorio y probabilidad',
    applications:
      'resolución de guías escolares, nivelación de competencias matemáticas, preparación previa a la prueba nacional AVANZO y transición sólida hacia carreras universitarias de ingeniería, medicina y ciencias exactas',
  },
  {
    tab: 'practice',
    title: 'Simulador Oficial de Exámenes (UES, AVANZO, Escalafón, ANSP, ENA) | KUSKAT',
    description:
      'Simulador cronometrado con 17,640 reactivos base y solucionarios comentados para Admisión UES, Prueba AVANZO, Escalafón Docente, ANSP y ENA en El Salvador.',
    heading: 'Simulador Oficial de Evaluaciones y Admisión Nacional KUSKAT',
    institution: 'UES, MINED (AVANZO), Escalafón Docente, ANSP y ENA',
    focus:
      'evaluación diagnóstica, práctica cronometrada por asignatura o subtema, retroalimentación inmediata con análisis de distractores y seguimiento de progreso con repetición espaciada',
    applications:
      'entrenamiento bajo condiciones reales de examen para aspirantes a la Universidad de El Salvador, estudiantes de educación media en AVANZO, docentes del magisterio nacional y postulantes a la ANSP y ENA',
  },
  {
    tab: 'categories',
    title: 'Categorías y Bancos de Preguntas Oficiales de El Salvador | KUSKAT',
    description:
      'Explora los bancos de reactivos oficiales organizados por institución, asignatura, unidad temática y nivel educativo en El Salvador.',
    heading: 'Explorador Jerárquico de Categorías y Bancos Oficiales',
    institution: 'UES, MINED, ANSP, ENA y Escalafón Docente',
    focus:
      'clasificación estructurada por institución examinadora, área disciplinaria, unidad curricular y nivel de dificultad con exportación directa a práctica o formato LaTeX',
    applications:
      'búsqueda selectiva de temas específicos, planificación de sesiones de estudio focalizadas y diseño de evaluaciones diagnósticas para docentes y estudiantes salvadoreños',
  },
  {
    tab: 'driver-license',
    title: 'Simulador de Examen de Conducir VMT El Salvador | KUSKAT',
    description:
      'Curso teórico completo de Educación Vial y Licencia de Conducir VMT conforme a la Ley de Transporte Terrestre, Reglamento General de Tránsito y manual SIECA.',
    heading: 'Educación Vial y Preparación para Licencia de Conducir VMT',
    institution: 'Viceministerio de Transporte (VMT), PNC Tránsito y SIECA',
    focus:
      'marco jurídico vial, señalización uniforme centroamericana SIECA, prioridad de paso en intersecciones y redondeles, límites de velocidad, seguridad activa y pasiva, alcoholemia y transporte de carga',
    applications:
      'preparación integral para el examen teórico y psicológico de obtención o refrenda de licencia de conducir particular, motocicleta, transporte colectivo y carga pesada en El Salvador',
  },
  {
    tab: 'patriotic-history',
    title: 'Historia Patria y Cultura de El Salvador | KUSKAT',
    description:
      'Módulo de Historia Patria, Civismo y Cultura Cuscatleca: pueblos originarios, independencia de 1811-1821, república cafetalera, símbolos patrios y literatura salvadoreña.',
    heading: 'Historia Patria, Civismo y Cultura Cuscatleca',
    institution: 'Ministerio de Educación (MINED) y Marco Constitucional de El Salvador',
    focus:
      'Señorío de Cuscatlán, sitios arqueológicos como Joya de Cerén y Tazumal, gesta independentista de 1811 y 1821, transformaciones agrarias del siglo XIX y XX, Acuerdos de Paz de 1992 y Ley de Símbolos Patrios',
    applications:
      'fortalecimiento de la identidad cívica, comprensión crítica de la historia republicana salvadoreña y dominio de contenidos de estudios sociales para pruebas nacionales',
  },
  {
    tab: 'languages',
    title: 'Escuela de Idiomas y Rescate Ancestral (Náhuat, Lenca, Kakawira, Inglés) | KUSKAT',
    description:
      'Programa de revitalización de lenguas indígenas salvadoreñas (Náhuat Pipil, Lenca Potón, Kakawira) y formación en Inglés (MCER A1-C2), Mandarín y Árabe.',
    heading: 'Escuela de Lenguas Originarias e Internacionales',
    institution: 'Consejo de Europa (MCER/CEFR), Cambridge, British Council y ETS',
    focus:
      'fonología, morfología aglutinante, léxico auténtico y unidades comunicativas en Náhuat Pipil, Lenca Potón y Kakawira, junto con gramática contrastiva y niveles A1-C2 en inglés y lenguas internacionales',
    applications:
      'preservación del patrimonio lingüístico salvadoreño, desarrollo de competencias comunicativas multilingües y preparación para certificaciones internacionales de idioma',
  },
  {
    tab: 'technical-courses',
    title: 'Cursos Técnicos Vocacionales INCAF (400 Horas • Normativa Salvadoreña) | KUSKAT',
    description:
      'Formación técnica vocacional estructurada en módulos teóricos y casos prácticos aplicados a estándares productivos y normativa técnica de El Salvador.',
    heading: 'Formación Técnica Vocacional y Especialización Productiva',
    institution: 'Normativa Técnica Nacional, AWS y Estándares NFPA/NEC',
    focus:
      'competencias técnicas aplicadas en electricidad, mantenimiento industrial, administración, soporte tecnológico, logística y seguridad ocupacional con casos prácticos resueltos',
    applications:
      'capacitación laboral continua, actualización de técnicos e instructores y fortalecimiento de habilidades productivas alineadas al mercado salvadoreño',
  },
  {
    tab: 'residentado-medico',
    title: 'Residentado Médico ENAR y Casos Clínicos Hospitalarios | KUSKAT',
    description:
      'Preparación de alto nivel para el Examen Nacional de Aspirantes a Residencias Médicas en El Salvador con guías clínicas MINSAL y OPS/OMS.',
    heading: 'Residentado Médico ENAR y Medicina Clínica Basada en Evidencia',
    institution: 'Ministerio de Salud (MINSAL) y Organización Panamericana de la Salud (OPS/OMS)',
    focus:
      'medicina interna, cirugía general, ginecología y obstetricia, pediatría, medicina de emergencias, fisiopatología diagnóstica y terapéutica conforme a protocolos clínicos vigentes',
    applications:
      'entrenamiento mediante viñetas clínicas complejas, toma de decisiones diagnósticas escalonadas y preparación rigurosa para plazas de residencia médica hospitalaria',
  },
  {
    tab: 'notary-exam',
    title: 'Examen de Suficiencia Notarial CSJ El Salvador | KUSKAT',
    description:
      'Guía doctrinal, jurisprudencia y simulador especializado para el Examen de Suficiencia Notarial ante la Corte Suprema de Justicia de El Salvador.',
    heading: 'Examen de Suficiencia Notarial — Corte Suprema de Justicia',
    institution: 'Corte Suprema de Justicia (CSJ) de El Salvador',
    focus:
      'Ley de Notariado, Ley del Ejercicio Notarial de la Jurisdicción Voluntaria y de Otras Diligencias, protocolizaciones, actas notariales, testamentos, compraventas y responsabilidad disciplinaria',
    applications:
      'estudio sistemático de formalidades instrumentales, prevención de nulidades notariales y preparación directa para la evaluación oficial ante la Sección de Notariado de la CSJ',
  },
  {
    tab: 'derecho-administrativo',
    title: 'Derecho Administrativo (LPA) y Firma Electrónica | KUSKAT',
    description:
      'Estudio normativo de la Ley de Procedimientos Administrativos (LPA), actos administrativos, silencio administrativo, recursos y firma electrónica en El Salvador.',
    heading: 'Derecho Administrativo (LPA) y Transformación Digital del Estado',
    institution: 'Corte Suprema de Justicia (CSJ) — Sala de lo Contencioso Administrativo',
    focus:
      'principios del procedimiento administrativo, validez y eficacia del acto administrativo, nulidades absolutas y relativas, recursos de reconsideración y apelación, y marco de firma electrónica certificada',
    applications:
      'preparación para evaluaciones jurídicas, ejercicio profesional ante la administración pública salvadoreña y análisis de casos contencioso-administrativos',
  },
  {
    tab: 'ingenieria-ciencias',
    title: 'Métodos Cuantitativos y Ciencias de Ingeniería | KUSKAT',
    description:
      'Módulo avanzado de cálculo multivariable, álgebra lineal, ecuaciones diferenciales, física aplicada y métodos numéricos para ingeniería en El Salvador.',
    heading: 'Métodos Cuantitativos, Física Aplicada y Ciencias de Ingeniería',
    institution: 'MINED, UES y Estándares de Ingeniería Aplicada',
    focus:
      'análisis vectorial, matrices y valores propios, transformadas y ecuaciones diferenciales ordinarias, mecánica clásica, termodinámica y modelado matemático cuantitativo',
    applications:
      'nivelación universitaria en facultades de ingeniería y arquitectura, resolución de problemas cuantitativos avanzados y dominio de modelación física',
  },
  {
    tab: 'salud-primaria',
    title: 'Atención Primaria MINSAL y Farmacovigilancia DNM | KUSKAT',
    description:
      'Capacitación en Atención Primaria en Salud (APS), vigilancia epidemiológica MINSAL y farmacovigilancia conforme a la SRS/DNM y OPS/OMS.',
    heading: 'Atención Primaria en Salud MINSAL y Farmacovigilancia SRS/DNM',
    institution: 'Ministerio de Salud (MINSAL), SRS / DNM y OPS/OMS',
    focus:
      'protocolos de atención primaria comunitaria, esquemas de vacunación, vigilancia epidemiológica, uso racional de medicamentos y notificación de reacciones adversas ante la autoridad sanitaria',
    applications:
      'actualización continua de personal de salud en primer nivel de atención, internado rotatorio, servicio social y cumplimiento regulatorio sanitario',
  },
  {
    tab: 'cssp-health',
    title: 'Juntas de Vigilancia del Consejo Superior de Salud Pública (CSSP) | KUSKAT',
    description:
      'Marco ético, legal y regulatorio de las Juntas de Vigilancia de las profesiones de la salud ante el Consejo Superior de Salud Pública de El Salvador.',
    heading: 'Regulación Profesional y Juntas de Vigilancia del CSSP',
    institution: 'Consejo Superior de Salud Pública (CSSP) y MINSAL',
    focus:
      'Ley del Consejo Superior de Salud Pública, Código de Salud, deberes éticos de médicos, odontólogos, químicos farmacéuticos, enfermería y laboratorio clínico, y régimen sancionatorio',
    applications:
      'preparación para exámenes de suficiencia y autorización profesional ante las Juntas de Vigilancia del CSSP y práctica clínica ajustada a derecho',
  },
  {
    tab: 'ansp-ascenso',
    title: 'Simulador de Ascenso Policial ANSP El Salvador | KUSKAT',
    description:
      'Banco especializado y teoría normativa para cursos de ingreso y ascenso policial en la Academia Nacional de Seguridad Pública (ANSP) y PNC.',
    heading: 'Preparación Institucional ANSP y Ascenso Policial PNC',
    institution: 'Academia Nacional de Seguridad Pública (ANSP) y Policía Nacional Civil (PNC)',
    focus:
      'Derecho Constitucional, Código Penal y Procesal Penal salvadoreño, Derechos Humanos en la función policial, Ley Disciplinaria Policial, ética pública y procedimientos operativos',
    applications:
      'entrenamiento para aspirantes al Nivel Básico y miembros de la corporación policial que optan a ascensos a Cabo, Sargento, Subinspector e Inspector',
  },
  {
    tab: 'compliance-financial',
    title: 'Cumplimiento Financiero AML (UIF/FGR) y Seguros SSF | KUSKAT',
    description:
      'Módulo técnico de Prevención de Lavado de Dinero (LDA/FT) conforme al Instructivo UIF-FGR, regulación financiera SSF y normas del BCR.',
    heading: 'Cumplimiento Financiero AML (UIF-FGR), Banca y Seguros SSF',
    institution: 'UIF - FGR, Superintendencia del Sistema Financiero (SSF) y BCR',
    focus:
      'debida diligencia del cliente (DDC), enfoque basado en riesgos, reporte de operaciones sospechosas (ROS), gobernanza de cumplimiento, supervisión bancaria y normativa de seguros',
    applications:
      'formación de oficiales de cumplimiento, auditores internos, analistas financieros y profesionales del sector asegurador y bancario en El Salvador',
  },
  {
    tab: 'constitution',
    title: 'Casoteca Constitucional y Jurisprudencia CSJ | KUSKAT',
    description:
      'Análisis de la Constitución de la República de El Salvador de 1983, derechos fundamentales, procesos de amparo, hábeas corpus e inconstitucionalidad.',
    heading: 'Casoteca Constitucional y Jurisprudencia de la Sala de lo Constitucional',
    institution: 'Corte Suprema de Justicia (CSJ) — Sala de lo Constitucional',
    focus:
      'supremacía constitucional, catálogo de derechos fundamentales y garantías procesales, control difuso y concentrado de constitucionalidad, amparo, hábeas corpus y separación de poderes',
    applications:
      'estudio de jurisprudencia constitucional salvadoreña para estudiantes de derecho, litigantes y aspirantes a judicatura y función pública',
  },
  {
    tab: 'oral-litigation',
    title: 'Simulador de Litigación Oral y Audiencias | KUSKAT',
    description:
      'Técnicas de litigación oral estratégica en el sistema acusatorio y procesal civil salvadoreño: teoría del caso, interrogatorio, objeciones y alegatos.',
    heading: 'Litigación Oral Estratégica y Conducción de Audiencias',
    institution: 'Corte Suprema de Justicia (CSJ) y Código Procesal Salvadoreño',
    focus:
      'construcción de la teoría del caso, alegato de apertura, examen directo y contrainterrogatorio de testigos y peritos, incorporación de prueba material y objeciones en audiencia',
    applications:
      'desarrollo de destrezas forenses en audiencias preliminares, probatorias y vistas públicas conforme al ordenamiento procesal vigente en El Salvador',
  },
  {
    tab: 'siget-solar',
    title: 'Normativa Eléctrica SIGET y Sistemas Fotovoltaicos | KUSKAT',
    description:
      'Regulación eléctrica de la SIGET, normas técnicas de generación distribuida, dimensionamiento fotovoltaico y código eléctrico NFPA/NEC.',
    heading: 'Normativa Eléctrica SIGET y Sistemas Solares Fotovoltaicos',
    institution: 'Superintendencia General de Electricidad y Telecomunicaciones (SIGET) y NFPA/NEC',
    focus:
      'Ley General de Electricidad, normas técnicas de conexión de usuarios autoproductores, cálculo de arreglos fotovoltaicos, inversores, protecciones DC/AC y puesta a tierra según NEC',
    applications:
      'capacitación de ingenieros electricistas, técnicos instaladores certificados y consultores energéticos en proyectos solares residenciales e industriales',
  },
  {
    tab: 'jovenes-talento',
    title: 'ASD MINED | Programa de Olimpiadas Científicas | KUSKAT',
    description:
      'Entrenamiento de alto rendimiento para la Academia Sabatina Departamental (ASD) y Programa Jóvenes Talento del MINED en matemáticas y ciencias.',
    heading: 'Academia Sabatina Departamental (ASD) y Olimpiadas Científicas',
    institution: 'Ministerio de Educación (MINED) — Programa Jóvenes Talento',
    focus:
      'teoría de números, combinatoria olímpica, geometría sintética, desigualdades algebraicas y razonamiento lógico-científico de nivel competitivo nacional e internacional',
    applications:
      'preparación de estudiantes sobresalientes de tercer ciclo y bachillerato para convocatorias de la ASD, olimpiadas nacionales de matemática y certámenes regionales',
  },
  {
    tab: 'formula-lab',
    title: 'Laboratorio Interactivo de Fórmulas Científicas | KUSKAT',
    description:
      'Compendio interactivo y marco teórico de fórmulas fundamentales de física, química, matemática y bioestadística con unidades del Sistema Internacional.',
    heading: 'Laboratorio Interactivo de Fórmulas y Modelado Científico',
    institution: 'MINED, MINSAL y OPS/OMS',
    focus:
      'cinemática, dinámica, electromagnetismo, estequiometría, soluciones químicas, estadística descriptiva, bioestadística clínica y cálculo aplicado con despejes comentados',
    applications:
      'consulta rápida verificada y práctica cuantitativa para exámenes de admisión universitaria UES, laboratorios de ciencias y evaluaciones médicas',
  },
  {
    tab: 'one-page-sheets',
    title: 'Hojas Mnemotécnicas de 1 Página y Fórmulas | KUSKAT',
    description:
      'Resúmenes ejecutivos de una página diseñados para repaso rápido antes de exámenes oficiales en El Salvador.',
    heading: 'Hojas Mnemotécnicas de 1 Página y Síntesis de Estudio',
    institution: 'MINED, UES, VMT y CSJ',
    focus:
      'condensación visual de teoremas clave, tablas de derivadas e integrales, reglas ortográficas, plazos legales críticos y señales viales reglamentarias para retención acelerada',
    applications:
      'repaso intensivo previo a evaluaciones académicas, sesiones de estudio con tarjetas FSRS y consolidación de conceptos de alta frecuencia en exámenes',
  },
  {
    tab: 'central-america',
    title: 'Atlas Interactivo de Centroamérica | KUSKAT',
    description:
      'Geografía política, física, demografía e integración regional del Sistema de la Integración Centroamericana (SICA) y El Salvador.',
    heading: 'Atlas Interactivo de Centroamérica y El Salvador',
    institution: 'SICA, SIECA y CEPAL',
    focus:
      'división político-administrativa de los 14 departamentos de El Salvador y los países miembros del SICA, hidrografía, cadenas volcánicas, corredores logísticos e indicadores regionales',
    applications:
      'enseñanza de geografía nacional y centroamericana, análisis territorial y comprensión de los procesos de integración económica y social del istmo',
  },
  {
    tab: 'latex',
    title: 'Generador Tipográfico LaTeX y Hojas OMR | KUSKAT',
    description:
      'Herramienta gratuita para exportar bancos de preguntas en código LaTeX compilable en Overleaf y generar hojas de lectura óptica OMR de 50 y 100 ítems.',
    heading: 'Exportador Tipográfico LaTeX y Generador de Hojas OMR',
    institution: 'KUSKAT — Herramientas Docentes de Acceso Abierto',
    focus:
      'compilación automática de exámenes institucionales con notación matemática KaTeX/LaTeX, generación de solucionarios comentados y plantillas de hojas de burbujas OMR de 50 y 100 reactivos',
    applications:
      'ahorro de tiempo para docentes de centros escolares, institutos nacionales y cátedras universitarias que preparan evaluaciones impresas profesionales en Overleaf o TeX Live',
  },
];

function buildRouteBodyHtml(route) {
  const relatedLinks = ROUTE_DEFINITIONS.filter((r) => r.tab !== route.tab)
    .slice(0, 6)
    .map(
      (r) =>
        `<li style="margin-bottom:6px;"><a href="/?tab=${r.tab}" style="color:#1D4ED8;text-decoration:underline;">${r.heading}</a></li>`
    )
    .join('\n          ');

  return `
      <header style="max-width: 1100px; margin: 0 auto; padding: 32px 20px 16px; font-family: 'Tinos', Georgia, serif;">
        <nav aria-label="Ruta institucional" style="font-size: 0.95rem; margin-bottom: 14px; color: #475569;">
          <a href="/" style="color: #0B1B3D; font-weight: 700; text-decoration: none;">KUSKAT Portal de Inicio</a>
          <span style="margin: 0 8px;">/</span>
          <span>${route.heading}</span>
        </nav>
        <h1 style="font-size: 2rem; font-weight: 800; color: #0B1B3D; line-height: 1.25; margin: 0 0 12px;">
          ${route.heading}
        </h1>
        <p style="font-size: 1.1rem; color: #334155; line-height: 1.65; max-width: 900px;">
          ${route.description}
        </p>
      </header>

      <main style="max-width: 1100px; margin: 0 auto; padding: 0 20px 56px; font-family: 'Tinos', Georgia, serif; line-height: 1.75; color: #1E293B;">
        <article style="background: #ffffff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 28px; margin-bottom: 28px;">
          <h2 style="font-size: 1.45rem; color: #0B1B3D; margin-top: 0; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px;">
            1. Marco Institucional y Alcance Curricular
          </h2>
          <p>
            El módulo <strong>${route.heading}</strong> forma parte de la arquitectura académica abierta de <strong>KUSKAT El Salvador</strong> (<code>https://kuskates.com/?tab=${route.tab}</code>). Su diseño curricular responde directamente a los lineamientos técnicos, normativos y pedagógicos emitidos por <strong>${route.institution}</strong>, garantizando acceso libre y gratuito sin muros de pago ni suscripciones para toda la comunidad educativa salvadoreña.
          </p>
          <p>
            A diferencia de recopilaciones fragmentadas o guías informales, esta sección articula exposición doctrinal y técnica rigurosa sobre ${route.focus}. Cada bloque temático ha sido estructurado para facilitar tanto el aprendizaje autodidacta de estudiantes e investigadores como la consulta estructurada por parte de docentes y profesionales en ejercicio.
          </p>

          <h2 style="font-size: 1.45rem; color: #0B1B3D; margin-top: 26px;">
            2. Metodología de Estudio, Casuística y Validación Pedagógica
          </h2>
          <p>
            La metodología aplicada en esta área combina tres niveles progresivos de dominio cognitivo. En una primera etapa, el usuario aborda la fundamentación teórica sustantiva, donde se precisan conceptos, definiciones formales, fórmulas científicas o artículos normativos vigentes en la República de El Salvador. En una segunda etapa, se analizan casos prácticos resueltos paso a paso que ilustran la aplicación concreta de la teoría ante escenarios reales de evaluación o práctica profesional.
          </p>
          <p>
            Finalmente, en la tercera etapa, la plataforma ofrece entrenamiento interactivo mediante reactivos de selección múltiple con cuatro opciones equilibradas, retroalimentación inmediata y análisis razonado de distractores. Este enfoque permite comprender no solo cuál es la respuesta correcta, sino también las razones técnicas o jurídicas por las cuales las alternativas restantes resultan improcedentes, reduciendo errores sistemáticos en pruebas estandarizadas.
          </p>

          <h2 style="font-size: 1.45rem; color: #0B1B3D; margin-top: 26px;">
            3. Aplicaciones Académicas y Profesionales en El Salvador
          </h2>
          <p>
            Los contenidos integrados en <strong>${route.heading}</strong> están orientados principalmente a ${route.applications}. Además, se complementan con herramientas transversales de KUSKAT como el sistema de tarjetas de repaso espaciado basado en el algoritmo FSRS, el Cuaderno Inteligente de Errores para remediación deliberada y el exportador tipográfico LaTeX compatible con Overleaf y TeX Live para impresión de evaluaciones y hojas de lectura óptica OMR.
          </p>
          <p>
            Todo el material disponible en esta ruta se sostiene bajo un modelo 100% gratuito financiado mediante publicidad no intrusiva, preservando la integridad de los 17,640 reactivos base de la plataforma y manteniendo estricto apego a fuentes oficiales salvadoreñas e internacionales de primer nivel.
          </p>

          <h2 style="font-size: 1.35rem; color: #0B1B3D; margin-top: 26px;">
            4. Navegación Relacionada y Transparencia Institucional
          </h2>
          <ul style="padding-left: 20px;">
            ${relatedLinks}
          </ul>
          <p style="margin-top: 18px; font-size: 0.95rem; color: #475569;">
            Consulte también nuestra información institucional en
            <a href="/sobre-nosotros.html" style="color:#0B1B3D;">Sobre Nosotros</a>,
            <a href="/privacidad.html" style="color:#0B1B3D;">Política de Privacidad y Cookies</a>,
            <a href="/terminos.html" style="color:#0B1B3D;">Términos y Condiciones</a> y
            <a href="/contacto.html" style="color:#0B1B3D;">Contacto Oficial (+503 7657 4463)</a>.
          </p>
        </article>
      </main>
    `;
}

function escapeHtmlAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function prerenderRoutes() {
  if (!fs.existsSync(DIST_INDEX)) {
    throw new Error(`No se encontró ${DIST_INDEX}. Ejecuta "vite build" antes de prerender-routes.mjs.`);
  }

  const templateHtml = fs.readFileSync(DIST_INDEX, 'utf-8');
  fs.mkdirSync(ROUTES_OUT_DIR, { recursive: true });

  const rootMarker = '<div id="root">';
  const rootStart = templateHtml.indexOf(rootMarker);
  const bodyCloseIdx = templateHtml.lastIndexOf('</body>');

  if (rootStart === -1 || bodyCloseIdx === -1) {
    throw new Error('No se pudo localizar <div id="root"> o </body> en dist/index.html.');
  }

  const rootClosingIdx = templateHtml.lastIndexOf('</div>', bodyCloseIdx);
  if (rootClosingIdx === -1 || rootClosingIdx <= rootStart) {
    throw new Error('No se pudo localizar el cierre de <div id="root"> en dist/index.html.');
  }

  const beforeRoot = templateHtml.slice(0, rootStart + rootMarker.length);
  const afterRoot = templateHtml.slice(rootClosingIdx);

  let generatedCount = 0;

  for (const route of ROUTE_DEFINITIONS) {
    const canonicalUrl = `https://kuskates.com/?tab=${route.tab}`;
    const safeTitle = escapeHtmlAttr(route.title);
    const safeDesc = escapeHtmlAttr(route.description);

    let headPart = beforeRoot
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${safeDesc}" />`
      )
      .replace(
        /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
        `<link rel="canonical" href="${canonicalUrl}" />`
      )
      .replace(
        /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
        `<meta property="og:url" content="${canonicalUrl}" />`
      )
      .replace(
        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
        `<meta property="og:title" content="${safeTitle}" />`
      )
      .replace(
        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
        `<meta property="og:description" content="${safeDesc}" />`
      )
      .replace(
        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
        `<meta name="twitter:title" content="${safeTitle}" />`
      )
      .replace(
        /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
        `<meta name="twitter:description" content="${safeDesc}" />`
      );

    const routeHtml = `${headPart}${buildRouteBodyHtml(route)}${afterRoot}`;
    const outFile = path.join(ROUTES_OUT_DIR, `${route.tab}.html`);
    fs.writeFileSync(outFile, routeHtml, 'utf-8');
    generatedCount++;
  }

  console.log(`[prerender-routes] Generadas ${generatedCount} rutas estáticas en dist/routes/*.html`);
}

prerenderRoutes();
