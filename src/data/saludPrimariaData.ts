/**
 * BANCO OFICIAL DE ATENCIÓN PRIMARIA EN SALUD, GUÍAS MINSAL Y FARMACOVIGILANCIA SRS/DNM
 * Plataforma KUSKAT · República de El Salvador
 *
 * Marco Normativo y Guías Clínicas Oficiales:
 * - Lineamientos Técnicos para la Prevención, Diagnóstico y Tratamiento del Dengue (MINSAL / OPS-OMS).
 * - Guía Clínica de Diagnóstico y Tratamiento de la Hipertensión Arterial en el Primer Nivel de Atención (MINSAL).
 * - Guía Clínica para la Atención Integral de las Personas con Diabetes Mellitus Tipo 2 (MINSAL).
 * - Lineamientos Técnicos para la Prevención y Control de las Infecciones Respiratorias Agudas (MINSAL).
 * - Guía de Atención Integral en Salud Materno-Infantil, Control Prenatal y PAI (MINSAL / Ley Crecer Juntos).
 * - Reglamento Técnico Centroamericano RTCA 11.04.47:17 (Farmacovigilancia de Medicamentos de Uso Humano).
 * - Normativa del Centro Nacional de Farmacovigilancia y Superintendencia de Regulación Sanitaria (SRS / antigua DNM).
 */

export interface SaludPrimariaQuestion {
  id: string;
  category: 'dengue' | 'hta-dm2' | 'iras' | 'materno-infantil' | 'farmacovigilancia';
  categoryLabel: string;
  clinicalArea: string;
  vignette?: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  clinicalExplanation: string;
  officialGuidelineRef: string;
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export interface DengueTriageStep {
  group: 'Grupo A' | 'Grupo B' | 'Grupo C';
  title: string;
  clinicalCriteria: string[];
  immediateTherapy: string;
  contraindications: string;
  disposition: string;
}

export const SALUD_SECTORS = [
  {
    id: 'all',
    name: 'Todos los Temas Clínicos',
    icon: '🩺',
  },
  {
    id: 'dengue',
    name: 'Protocolo de Dengue (Grupos A, B y C)',
    icon: '🦟',
  },
  {
    id: 'hta-dm2',
    name: 'Hipertensión Arterial & Diabetes Mellitus Tipo 2',
    icon: '❤️',
  },
  {
    id: 'iras',
    name: 'Infecciones Respiratorias Agudas (IRAS)',
    icon: '🫁',
  },
  {
    id: 'materno-infantil',
    name: 'Salud Materno-Infantil & Lactancia',
    icon: '👶',
  },
  {
    id: 'farmacovigilancia',
    name: 'Farmacovigilancia SRS/DNM & Reporte RAM',
    icon: '💊',
  },
];

export const DENGUE_TRIAGE_ALGORITHM: DengueTriageStep[] = [
  {
    group: 'Grupo A',
    title: 'Dengue sin Signos de Alarma (Manejo Ambulatorio)',
    clinicalCriteria: [
      'Cuadro febril agudo de 2 a 7 días',
      'Cefalea frontal o dolor retroocular, mialgias, artralgias',
      'Exantema cutáneo maculopapular sin hemorragias',
      'Tolerancia adecuada a la vía oral y diuresis normal',
      'Ausencia total de criterios de alarma o comorbilidades descompensadas',
    ],
    immediateTherapy:
      'Hidratación oral vigorosa con Sales de Rehidratación Oral (SRO) y líquidos con electrolitos. Antipirético de elección exclusiva: Acetaminofén / Paracetamol (Adultos: 500-1000 mg c/6h, máx. 4 g/día; Niños: 10-15 mg/kg/dosis c/6h). Reposo estricto en cama bajo mosquitero.',
    contraindications:
      'TERMINANTEMENTE PROHIBIDO: Ácido acetilsalicílico (Aspirina), Ibuprofeno, Diclofenaco, Naproxeno o cualquier AINE y esteroides (riesgo inminente de sangrado gástrico, plaquetopenia y Síndrome de Reye). No administrar antibióticos ni inyecciones intramusculares.',
    disposition:
      'Manejo en el hogar con cita de control clínico diario en la Unidad Comunitaria de Salud Familiar (UCSF) hasta 48 horas después del cese de la fiebre (fase crítica).',
  },
  {
    group: 'Grupo B',
    title: 'Dengue con Signos de Alarma o Comorbilidades (Hospitalización Inmediata)',
    clinicalCriteria: [
      'Presencia de al menos uno de los siguientes signos de alarma:',
      '• Dolor abdominal intenso y continuo o dolor a la palpación',
      '• Vómitos persistentes (>= 3 en 1 hora o 4 en 6 horas)',
      '• Acumulación clínica de líquidos (ascitis, derrame pleural, edema pericárdico)',
      '• Sangrado activo de mucosas (epistaxis, gingivorragia, metrorragia)',
      '• Letargia, somnolencia extrema o irritabilidad',
      '• Hepatomegalia > 2 cm por debajo del reborde costal',
      '• Aumento progresivo del hematocrito concurrente con descenso rápido de plaquetas',
    ],
    immediateTherapy:
      'Canalización venosa inmediata e infusión reglada de cristaloides isotónicos (Lactato Ringer o Solución Salina Normal 0.9%) a razón de 5 a 7 mL/kg/hora durante 2 a 4 horas. Titular progresivamente a 3-5 mL/kg/h según respuesta clínica, gasto urinario (> 0.5-1 mL/kg/h) y hematocrito seriado cada 12 a 24 horas.',
    contraindications:
      'Evitar soluciones hipotónicas o dextrosadas sin electrolitos para expansión. No sobrecargar con líquidos si el paciente ya orina adecuadamente y el hematocrito se ha normalizado.',
    disposition:
      'Ingreso formal inmediato en sala de observación o cuidados intermedios de UCSF Especializada o Hospital Nacional.',
  },
  {
    group: 'Grupo C',
    title: 'Dengue Grave (Emergencia Médica Vital - Choque en UCI)',
    clinicalCriteria: [
      'Extravasación severa de plasma que conduce a Choque Hipovolémico por Dengue:',
      '• Presión de pulso diferencial convergente (<= 20 mmHg, ej. 90/75 mmHg)',
      '• Frialdad periférica, llenado capilar lento (> 2 segundos), pulso filiforme',
      '• Dificultad respiratoria por derrame pleural masivo o ascitis a tensión',
      '• Sangrado clínicamente grave (hemorragia digestiva masiva)',
      '• Daño orgánico severo: AST o ALT >= 1000 UI/L, encefalopatía, miocarditis o fallo renal agudo',
    ],
    immediateTherapy:
      'Expansión hemodinámica inmediata con bolos de cristaloides de 10 a 20 mL/kg en 15 a 30 minutos. Si no responde al primer o segundo bolo, evaluar uso de coloides o soporte inotrópico y transfusión de hemoderivados si hay hemorragia grave demostrada.',
    contraindications:
      'Retrasar el inicio de la fluidoterapia parenteral por esperar exámenes de laboratorio. El choque por dengue es reversible si se expande inmediatamente.',
    disposition:
      'Ingreso urgente a Unidad de Cuidados Intensivos (UCI) pediátrica o de adultos con monitoreo invasivo de presión venosa central y gasto urinario continuo por sonda Foley.',
  },
];

export const SALUD_PRIMARIA_QUESTIONS: SaludPrimariaQuestion[] = [
  {
    "id": "dengue-01",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Fase Crítica y Momento de Mayor Riesgo",
    "vignette": "Paciente masculino de 8 años de edad es llevado a la Unidad Comunitaria de Salud Familiar (UCSF) con antecedente de 4 días de fiebre alta (39.5 °C). La madre refiere que hoy por la mañana la fiebre desapareció espontáneamente (temperatura actual 36.8 °C), pero el niño luce decaído, no quiere jugar y refiere dolor de estómago.",
    "statement": "Desde la perspectiva de la fisiopatología y el curso clínico del dengue según los lineamientos del MINSAL, ¿en qué fase se encuentra el paciente y qué riesgo hemodinámico prioritario debe anticipar el médico tratante?",
    "options": {
      "A": "Se encuentra en la Fase Crítica (coincidente con la defervescencia o caída de la fiebre), período de máximo riesgo de extravasación plasmática y choque hipovolémico.",
      "B": "Se encuentra en la Fase de Recuperación completa y puede ser dado de alta sin mayores cuidados puesto que ya no tiene fiebre.",
      "C": "Se encuentra en la Fase Febril tardía y el dolor abdominal se debe exclusivamente a constipación funcional.",
      "D": "Es un cuadro no relacionado con dengue y debe iniciarse tratamiento con amoxicilina oral para faringoamigdalitis bacteriana."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En el dengue, el período de mayor peligro vital inicia precisamente cuando la fiebre cede (defervescencia, generalmente entre los días 3 y 7 de enfermedad). En esta Fase Crítica es cuando ocurre el fenómeno inmunomediado de permeabilidad vascular capilar aumentada, con extravasación de plasma hacia cavidades serosas (ascitis, derrame pleural), hemoconcentración rápida y riesgo de colapso cardiovascular (choque). El dolor abdominal es un signo de alarma ineludible que exige hospitalización inmediata.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Tratamiento del Dengue, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La defervescencia marca el inicio de la fase crítica de extravasación plasmática.",
      "B": "Error mortal común: creer que la ausencia de fiebre es sinónimo de curación cuando en realidad es el inicio del período de choque.",
      "C": "El dolor abdominal persistente es el signo de alarma primordial de extravasación retroperitoneal y choque inminente.",
      "D": "El dengue es viral y la prescripción innecesaria de antibióticos expone al paciente a reacciones adversas."
    }
  },
  {
    "id": "dengue-02",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Contraindicación Absoluta de Antipiréticos en Dengue",
    "statement": "Una madre consulta en la farmacia comunitaria de una UCSF solicitando un medicamento para bajar la fiebre de su hija de 6 años con sospecha de dengue. ¿Por qué razón farmacológica y clínica las guías del MINSAL y la OPS prohíben taxativamente la administración de Ácido Acetilsalicílico (Aspirina), Ibuprofeno o cualquier AINE en estos pacientes?",
    "options": {
      "A": "Porque inhiben la agregación plaquetaria mediante la ciclooxigenasa y lesionan la mucosa gástrica, potenciando el riesgo de hemorragia severa y Síndrome de Reye en pediatría.",
      "B": "Porque los AINEs neutralizan la inmunidad antiviral natural del cuerpo haciéndolo inmune a las vacunas.",
      "C": "Porque causan que el mosquito Aedes aegypti pique con mayor frecuencia a los convivientes del hogar.",
      "D": "Porque la aspirina incrementa el tamaño de los glóbulos rojos impidiendo su paso por los alvéolos pulmonares."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El virus del dengue induce trombocitopenia y disfunción endotelial. Los antiinflamatorios no esteroideos (AINEs como ibuprofeno, diclofenaco, naproxeno) y el ácido acetilsalicílico ejercen un efecto antiplaquetario prolongado e incrementan drásticamente el riesgo de sangrados gastrointestinales masivos y diátesis hemorrágica. Además, los salicilatos en niños con infecciones virales están asociados al letal Síndrome de Reye (encefalopatía aguda y degeneración grasa hepática). El único antipirético autorizado es el Acetaminofén.",
    "officialGuidelineRef": "Guía Clínica de Manejo del Dengue MINSAL / OPS-OMS.",
    "distractorRationale": {
      "A": "Correcto. El bloqueo plaquetario y el daño gástrico de los AINEs multiplican la mortalidad en dengue.",
      "B": "Mecanismo farmacológico inexistente.",
      "C": "Los fármacos no alteran el tropismo etológico del vector.",
      "D": "Distractor fisiológico falso."
    }
  },
  {
    "id": "dengue-03",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Identificación de Choque por Dengue (Presión de Pulso Convergente)",
    "statement": "Durante la evaluación de un adolescente de 14 años en la sala de observación de una UCSF con sospecha de dengue en su 5° día de evolución, el personal de enfermería reporta los siguientes signos vitales: Frecuencia Cardíaca: 125 lpm (taquicardia), Frecuencia Respiratoria: 26 rpm, Presión Arterial: 90/75 mmHg, extremidades frías y llenado capilar de 4 segundos. ¿Cómo se interpreta clínicamente este parámetro hemodinámico?",
    "options": {
      "A": "Paciente en Choque Hipovolémico por Dengue (Grupo C) evidenciado por presión de pulso diferencial convergente (<= 20 mmHg: 90 - 75 = 15 mmHg) y perfusión deficiente, requiriendo bolos inmediatos de cristaloides a 10-20 mL/kg.",
      "B": "Paciente estable en Grupo A que solo requiere descanso y un vaso de agua antes de enviarlo a su casa.",
      "C": "Paciente con hipertensión arterial secundaria que requiere diuréticos intravenosos inmediatos.",
      "D": "Parámetros completamente normales y esperados para un adolescente deportista."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En el dengue, el choque compensado temprano se manifiesta de forma clásica por una presión de pulso convergente (diferencia entre presión sistólica y diastólica menor o igual a 20 mmHg; en este caso 90 - 75 = 15 mmHg). Esto se debe a vasoconstricción periférica refleja compensatoria (que eleva la diastólica) ante la caída masiva del volumen intravascular. Junto al llenado capilar lento (> 2 s) y taquicardia, clasifica al paciente en Grupo C (Dengue Grave) y exige reanimación con bolos endovenosos inmediatos de cristaloides.",
    "officialGuidelineRef": "Lineamientos Técnicos del Dengue, MINSAL, Criterios de Choque Grupo C.",
    "distractorRationale": {
      "A": "Correcto. La presión de pulso <= 20 mmHg y la frialdad periférica definen el choque por dengue.",
      "B": "Enviar a casa a este paciente resultaría en colapso cardiovascular irreversible y muerte.",
      "C": "Administrar diuréticos profundizaría la hipovolemia acelerando el paro cardíaco.",
      "D": "La taquicardia y la presión convergente son inequívocamente patológicas."
    }
  },
  {
    "id": "dengue-04",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Criterios de Manejo Ambulatorio Grupo A",
    "vignette": "Adulto joven de 24 años consulta a la UCSF con cuadro de 2 días de fiebre de 38.8 °C, cefalea retroocular y mialgias. Al examen físico: PA 115/75 mmHg, FC 82 lpm, afebril en el momento, diuresis conservada, tolera adecuadamente la vía oral, sin dolor abdominal ni sangrados.",
    "statement": "¿Cuál es el plan terapéutico normado por el MINSAL para este paciente catalogado en Grupo A?",
    "options": {
      "A": "Manejo ambulatorio en el hogar con reposo bajo mosquitero, rehidratación oral abundante con Sales de Rehidratación Oral (SRO) y líquidos caseros, Acetaminofén oral para fiebre/dolor, y control diario obligatorio en la UCSF.",
      "B": "Ingreso inmediato a Unidad de Cuidados Intensivos e inicio de infusión continua de noradrenalina.",
      "C": "Prescripción de Ceftriaxona intramuscular y dexametasona para evitar la progresión de la enfermedad.",
      "D": "Alta definitiva sin necesidad de seguimiento clínico ni advertencia de signos de alarma."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Grupo A incluye pacientes sin signos de alarma y sin condiciones asociadas o riesgo social, capaces de tolerar líquidos orales y con diuresis adecuada. El tratamiento es ambulatorio con abundantes líquidos orales (SRO, agua de coco, sopas), reposo bajo mosquitero para cortar la cadena de transmisión vectorial, y acetaminofén en dosis terapéuticas. Es imperativo instruir sobre los signos de alarma y citar a evaluación médica diaria hasta 48 horas post-defervescencia.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Manejo del Dengue, MINSAL, Sección Grupo A.",
    "distractorRationale": {
      "A": "Correcto. El manejo ambulatorio con hidratación oral y vigilancia de signos de alarma es la conducta normada.",
      "B": "El paciente no presenta choque ni criterios de gravedad.",
      "C": "Los antibióticos y esteroides están contraindicados en dengue no complicado.",
      "D": "Omitir la vigilancia diaria en fase crítica pone en riesgo la vida del paciente."
    }
  },
  {
    "id": "dengue-05",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Signos de Alarma y Clasificación en Grupo B",
    "statement": "¿Cuál de los siguientes grupos de manifestaciones clínicas constituye la lista canónica de SIGNOS DE ALARMA del dengue según la clasificación oficial MINSAL / OPS?",
    "options": {
      "A": "Dolor abdominal intenso y continuo, vómitos persistentes, acumulación de líquidos (ascitis/derrame), sangrado de mucosas, letargia o irritabilidad, hepatomegalia > 2 cm y aumento del hematocrito con descenso rápido de plaquetas.",
      "B": "Prurito palmo-plantar, estornudos frecuentes, hipoacusia bilateral y dolor en el tendón de Aquiles.",
      "C": "Tos productiva con esputo verdoso, crepitantes basales unilaterales y dolor pleurítico.",
      "D": "Poliuria, polidipsia, polifagia y aliento cetónico frutal."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los signos de alarma indican fuga capilar activa inminente o hemorragia en curso. Su presencia clasifica al paciente inmediatamente en Grupo B (subgrupo B2: con signos de alarma) y exige hospitalización inmediata en un centro con capacidad resolutiva para iniciar reposición hídrica intravenosa reglada.",
    "officialGuidelineRef": "MINSAL / OPS, Guía de Diagnóstico y Manejo del Dengue, Criterios de Signos de Alarma.",
    "distractorRationale": {
      "A": "Correcto. Conjunto estandarizado de signos de alarma adoptado internacionalmente.",
      "B": "El prurito palmo-plantar ocurre en fase de recuperación y no es signo de alarma.",
      "C": "Corresponde a neumonía bacteriana adquirida en la comunidad.",
      "D": "Cuadro característico de cetoacidosis diabética."
    }
  },
  {
    "id": "dengue-06",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Fluidoterapia Reglada en Dengue Grupo B con Signos de Alarma",
    "vignette": "Paciente femenina de 30 años, peso 60 kg, ingresa a la sala de observación de UCSF con dengue en día 5, presentando vómitos incoercibles (4 episodios en 2 horas) y dolor abdominal a la palpación. Hematocrito: 44%, plaquetas: 70,000/uL.",
    "statement": "De acuerdo con el algoritmo oficial de fluidoterapia del MINSAL para Grupo B con signos de alarma, ¿cuál es el esquema inicial recomendado de cristaloides isotónicos intravenosos?",
    "options": {
      "A": "Iniciar Solución Salina Normal 0.9% o Lactato Ringer a razón de 5 a 7 mL/kg/hora durante las primeras 2 a 4 horas, con reevaluación hemodinámica continua.",
      "B": "Administrar bolo rápido de 50 mL/kg en 10 minutos y luego suspender la venoclisis.",
      "C": "Infusión de Solución Dextrosada al 5% a 20 mL/kg/h sin electrolitos.",
      "D": "Restricción hídrica absoluta por vía oral y parenteral para no forzar los riñones."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El esquema normado para dengue Grupo B con signos de alarma dicta iniciar con cristaloides isotónicos (Lactato Ringer o SSN 0.9%) a 5-7 mL/kg/h por 2-4 horas. Si el paciente mejora clínicamente y la diuresis es >= 1 mL/kg/h, se reduce a 3-5 mL/kg/h por 2-4 horas y luego a 2-3 mL/kg/h por 24-48 horas. Siempre deben evitarse las soluciones hipotónicas.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención y Tratamiento del Dengue, MINSAL, Esquema de Fluidoterapia Grupo B.",
    "distractorRationale": {
      "A": "Correcto. Infusión reglada de cristaloides a 5-7 mL/kg/h para compensar la fuga plasmática.",
      "B": "Bolos ultrarrápidos sin choque establecido conllevan sobrecarga hídrica pulmonar iatrogénica.",
      "C": "Las soluciones hipotónicas o glucosadas puras no expanden el intravascular y provocan edema cerebral.",
      "D": "La restricción hídrica acelera el choque hipovolémico letal."
    }
  },
  {
    "id": "dengue-07",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Reanimación Hemodinámica en Choque por Dengue Grupo C",
    "statement": "Un niño de 10 años con dengue ingresa en Choque por Dengue (Grupo C) con hipotensión severa, pulso filiforme y sensorio deprimido. ¿Cuál es la indicación inicial de emergencia en fluidoterapia según las guías del MINSAL?",
    "options": {
      "A": "Bolo intravenoso inmediato de cristaloide isotónico (Lactato Ringer o SSN 0.9%) a 10 a 20 mL/kg en 15 a 30 minutos.",
      "B": "Infusión de albúmina humana al 20% en bomba de infusión a 0.1 mL/kg/h durante 24 horas.",
      "C": "Esperar a que se procese el hemograma completo antes de canalizar la vía venosa.",
      "D": "Furosemida intravenosa a 2 mg/kg en bolo para aumentar la diuresis."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En el choque por dengue (Grupo C), la intervención que salva la vida es la expansión intravascular urgente con bolos de 10 a 20 mL/kg de cristaloides isotónicos administrados en 15 a 30 minutos. Si el choque cede, se titula progresivamente a 10 mL/kg/h y luego a tasas menores. Si no cede tras 2 bolos, se evalúa coloides o soporte inotrópico y búsqueda de sangrado oculto.",
    "officialGuidelineRef": "MINSAL, Manejo del Dengue Grave Grupo C, Protocolo de Choque Hipovolémico.",
    "distractorRationale": {
      "A": "Correcto. El bolo de cristaloide isotónico a 10-20 mL/kg en 15-30 min es la maniobra vital de primera línea.",
      "B": "Los coloides son de segunda línea si no hay respuesta a cristaloides; retrasar la infusión es deletéreo.",
      "C": "El choque es una emergencia clínica inmediata; nunca debe retrasarse la rehidratación por laboratorio.",
      "D": "Los diuréticos en choque hipovolémico causan colapso cardiovascular irreversible inmediato."
    }
  },
  {
    "id": "dengue-08",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Valor Clínico del Hematocrito Seriado",
    "statement": "¿Qué porcentaje de incremento relativo del Hematocrito respecto al valor basal del paciente (o del promedio poblacional) define laboratorialmente una hemoconcentración significativa indicadora de fuga plasmática grave en dengue?",
    "options": {
      "A": "Un aumento igual o superior al 20% respecto al valor basal del paciente.",
      "B": "Un aumento del 2% al 3% sin significancia clínica.",
      "C": "Cualquier aumento inferior al 5% acompañado de leucocitosis.",
      "D": "El hematocrito no tiene ninguna correlación con la fuga de plasma en dengue."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El hematocrito es el biomarcador indirecto por excelencia del volumen intravascular en dengue. Una elevación >= 20% sobre el hematocrito basal indica extravasación plasmática activa grave. Por ejemplo, en un niño cuyo basal es 35%, un hematocrito >= 42% confirma hemoconcentración crítica y necesidad de ajuste intensivo de fluidos.",
    "officialGuidelineRef": "Guía Clínica de Dengue, MINSAL / OPS, Monitorización Laboratorial.",
    "distractorRationale": {
      "A": "Correcto. El incremento >= 20% es el estándar internacional de hemoconcentración por dengue.",
      "B": "Variación dentro del error analítico habitual.",
      "C": "Umbral insuficiente para definir extravasación grave.",
      "D": "El hematocrito es fundamental para monitorizar la fluidoterapia en dengue."
    }
  },
  {
    "id": "dengue-09",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Detección de Hemorragia Oculta Grave",
    "vignette": "Un paciente en Grupo B tratado con fluidoterapia reglada presenta súbitamente taquicardia, palidez marcada y caída de la presión arterial, pero su control de hematocrito muestra un descenso brusco de 45% a 28% sin que se observe sangrado externo evidente.",
    "statement": "¿Cuál es la interpretación clínica y la conducta prioritaria ante este cuadro?",
    "options": {
      "A": "Sospecha inminente de hemorragia interna oculta (generalmente digestiva o retroperitoneal); se debe tipificar y cruzar sangre para transfusión de glóbulos rojos empacados de emergencia.",
      "B": "El paciente se ha curado completamente porque el hematocrito bajó a valores normales.",
      "C": "Se trata de anemia ferropénica crónica y debe prescribirse sulfato ferroso oral al alta.",
      "D": "Debe aumentarse la dosis de paracetamol intravenoso para controlar la taquicardia."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Un descenso abrupto del hematocrito acompañado de inestabilidad hemodinámica sin mejoría clínica en un paciente con dengue es el signo patognomónico de sangrado grave no visible (ej. hemorragia de vías digestivas altas o hematoma retroperitoneal). La conducta inmediata es la transfusión de concentrado de eritrocitos (glóbulos rojos empacados) a 5-10 mL/kg.",
    "officialGuidelineRef": "Lineamientos Técnicos del Dengue, MINSAL, Manejo de Hemorragias Graves.",
    "distractorRationale": {
      "A": "Correcto. La caída no explicada del hematocrito con choque señala hemorragia oculta y necesidad transfusional.",
      "B": "Confundir hemorragia con curación es un error con consecuencias letales.",
      "C": "La anemia aguda hemodinámicamente inestable no es ferropenia nutricional.",
      "D": "El paracetamol no restituye la volemia ni detiene la hemorragia."
    }
  },
  {
    "id": "dengue-10",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Diagnóstico Virológico y Serológico por Días de Evolución",
    "statement": "¿Cuál es la prueba de laboratorio diagnóstica recomendada para la confirmación de infección por dengue según el tiempo de evolución de los síntomas febriles?",
    "options": {
      "A": "Detección de Antígeno NS1 o RT-PCR durante los primeros 5 días de fiebre; serología IgM mediante ELISA a partir del 6° día de inicio de los síntomas.",
      "B": "Serología IgM exclusivamente el primer día de fiebre y NS1 a las 4 semanas.",
      "C": "Cultivo bacteriano de esputo y hemocultivo a las 2 horas de fiebre.",
      "D": "Prueba de tuberculina (PPD) en el antebrazo durante la fase febril."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Durante la fase virémica inicial (días 1 a 5), el virus y su proteína no estructural NS1 circulan en títulos elevados, siendo el Antígeno NS1 y la RT-PCR las pruebas de elección. Hacia el 5°-6° día la viremia declina y se inicia la respuesta humoral con aparición de anticuerpos IgM específicos contra el dengue, detectables por ELISA hasta por 2 a 3 meses.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Vigilancia Epidemiológica de Dengue, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. NS1/PCR en días 1-5; serología IgM del día 6 en adelante.",
      "B": "Los anticuerpos IgM tardan al menos 5 días en alcanzar títulos detectables.",
      "C": "El dengue es producido por un virus ARN de la familia Flaviviridae, no cultivable en medios bacterianos ordinarios.",
      "D": "El PPD evalúa infección tuberculosa latente, sin relación con el dengue."
    }
  },
  {
    "id": "dengue-11",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Sobrecarga Hídrica Iatrogénica en Fase de Recuperación",
    "vignette": "Niño de 7 años ingresado por dengue con signos de alarma que recibió fluidoterapia intravenosa continua durante 48 horas. Al tercer día se encuentra afebril, pero desarrolla taquipnea, estertores crepitantes bibasales, ingurgitación yugular y edema palpebral bilateral. Hematocrito: 30%.",
    "statement": "¿Cuál es la complicación que presenta el paciente y cuál es la medida terapéutica inmediata?",
    "options": {
      "A": "Sobrecarga hídrica / hipervolemia iatrogénica en fase de reabsorción; debe suspenderse de inmediato la fluidoterapia intravenosa y evaluar diuréticos de asa (Furosemida) si está hemodinámicamente estable.",
      "B": "Choque por dengue recurrente; se debe pasar un bolo adicional de 30 mL/kg de cristaloides.",
      "C": "Neumonía bacteriana intrahospitalaria; iniciar triple esquema antibiótico.",
      "D": "Reacción alérgica al mosquitero; administrar antihistamínicos orales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En la fase de recuperación (usualmente a las 48-72h de la defervescencia), el endotelio recupera su integridad y el líquido extravasado en el tercer espacio es reabsorbido hacia el intravascular. Si se mantiene la infusión intravenosa rápida de líquidos en esta fase, sobreviene sobrecarga de volumen con edema agudo pulmonar e insuficiencia cardíaca. La conducta obligada es detener los líquidos parenterales.",
    "officialGuidelineRef": "MINSAL / OPS, Guía Clínica del Dengue, Manejo de la Sobrecarga de Líquidos.",
    "distractorRationale": {
      "A": "Correcto. La suspensión inmediata de líquidos intravenosos y el uso prudente de furosemida salvan al paciente.",
      "B": "Administrar más líquidos empeoraría el edema agudo de pulmón y causaría asfixia.",
      "C": "El cuadro es congestivo/hemodinámico por hipervolemia, no infeccioso pulmonar primario.",
      "D": "Distractor inconsistente con los hallazgos cardiorrespiratorios."
    }
  },
  {
    "id": "dengue-12",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Criterios de Egreso Hospitalario en Dengue",
    "statement": "¿Cuáles son los criterios clínicos y de laboratorio normados por el MINSAL que deben cumplirse estrictamente para autorizar el alta médica de un paciente hospitalizado por dengue?",
    "options": {
      "A": "Ausencia de fiebre por al menos 48 horas sin antipiréticos, recuperación del apetito y del estado general, hematocrito estable por 24 horas, recuento plaquetario en ascenso (> 50,000/uL) y ausencia total de distrés respiratorio.",
      "B": "Haber completado 24 horas de internamiento aunque persista la fiebre alta y plaquetas en 15,000/uL.",
      "C": "Haber recibido un frasco de antibiótico intravenoso y tener prueba rápida de malaria negativa.",
      "D": "Normalización exclusiva de la hemoglobina sin importar la volemia ni las plaquetas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los criterios de egreso hospitalario del MINSAL garantizan que el paciente haya superado completamente la fase crítica: 1) Ausencia de fiebre durante 48 horas sin uso de antipiréticos; 2) Mejoría del estado clínico, sensorio normal y apetito recuperado; 3) Hematocrito estable sin líquidos IV; 4) Plaquetas con tendencia franca al ascenso superando 50,000/uL; y 5) Ausencia de dificultad respiratoria o derrame pleural significativo.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Tratamiento del Dengue, MINSAL, Criterios de Egreso.",
    "distractorRationale": {
      "A": "Correcto. Conjunto oficial de criterios que aseguran seguridad clínica antes del alta.",
      "B": "Dar de alta a un paciente con plaquetas en caída o fiebre activa conduce a choque extrahospitalario.",
      "C": "Los antibióticos no tienen indicación rutinaria en dengue y no constituyen criterio de alta.",
      "D": "La hemoglobina aislada no refleja la superación de la fase crítica de extravasación."
    }
  },
  {
    "id": "dengue-13",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Compromiso Hepático Severo en Dengue",
    "statement": "¿Qué nivel de elevación de enzimas transaminasas séricas (AST/TGO o ALT/TGP) define por sí mismo la presencia de daño hepático grave y clasifica al caso como Dengue Grave según los lineamientos del MINSAL?",
    "options": {
      "A": "Valores de AST o ALT mayores o iguales a 1,000 UI/L.",
      "B": "Valores de AST o ALT discretamente elevados entre 50 y 80 UI/L.",
      "C": "Transaminasas exactamente en 40 UI/L.",
      "D": "Solo la fosfatasa alcalina define dengue grave si supera 100 UI/L."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El dengue puede causar hepatitis aguda por replicación viral directa en hepatocitos y células de Kupffer, así como por choque e hipoperfusión. La definición de Dengue Grave por daño orgánico severo estipula una elevación de AST (TGO) o ALT (TGP) >= 1,000 UI/L, lo cual se asocia a insuficiencia hepática aguda y coagulopatía.",
    "officialGuidelineRef": "Lineamientos Técnicos del Dengue, MINSAL, Criterios de Daño Severo a Órganos.",
    "distractorRationale": {
      "A": "Correcto. Transaminasas >= 1000 UI/L es el criterio cuantitativo oficial de daño hepático grave.",
      "B": "Elevaciones leves a moderadas (< 5 veces el límite superior) son muy comunes y no definen dengue grave.",
      "C": "Valores normales o limítrofes.",
      "D": "La fosfatasa alcalina no es el marcador de daño necroinflamatorio hepatocelular en dengue."
    }
  },
  {
    "id": "dengue-14",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Compromiso Neurológico y Encefalopatía por Dengue",
    "statement": "Un paciente con diagnóstico de dengue presenta deterioro progresivo del estado de conciencia, convulsiones tónico-clónicas generalizadas y Glasgow de 10 puntos en ausencia de choque profundo o hipoglucemia. ¿Cuál es el diagnóstico más probable?",
    "options": {
      "A": "Encefalitis / Encefalopatía por Dengue, manifestación extrapulmonar grave por neurotropismo viral directo o daño metabólico.",
      "B": "Simulación psicológica por estrés escolar.",
      "C": "Tétanos neonatal secundario a herida limpia.",
      "D": "Efecto secundario normal del consumo de sales de rehidratación oral."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Aunque históricamente se consideró no neurotropo, se ha demostrado que el virus del dengue puede invadir directamente el sistema nervioso central causando encefalitis, o inducir encefalopatía secundaria a edema cerebral, hemorragia microvascular o fallo hepático. Se clasifica como Dengue Grave con compromiso neurológico y requiere manejo en UCI.",
    "officialGuidelineRef": "Guía Clínica de Dengue, MINSAL, Manifestaciones Neurológicas del Dengue.",
    "distractorRationale": {
      "A": "Correcto. El compromiso del SNC clasifica directamente como Dengue Grave.",
      "B": "Descartar deterioro neurológico como simulación pone en riesgo la vida del paciente.",
      "C": "El tétanos neonatal se manifiesta con trismo, risa sardónica y espasmos en las primeras semanas de vida.",
      "D": "Las SRO no provocan depresión neurológica ni convulsiones cuando se dosifican adecuadamente."
    }
  },
  {
    "id": "dengue-15",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Afectación Cardiovascular y Miocarditis por Dengue",
    "vignette": "Adolescente de 16 años con dengue en día 4 presenta dolor precordial opresivo, disnea, ritmo de galope, elevación de troponina I ultrasensible y cambios difusos del segmento ST en el electrocardiograma sin antecedentes cardíacos.",
    "statement": "¿Cuál es la complicación cardiovascular que debe sospecharse inmediatamente?",
    "options": {
      "A": "Miocarditis aguda por Dengue con riesgo inminente de fallo cardíaco agudo y choque cardiogénico.",
      "B": "Pericarditis constrictiva crónica calcificada de origen tuberculoso.",
      "C": "Estenosis aórtica congénita descompensada por ejercicio leve.",
      "D": "Reflujo gastroesofágico simple sin compromiso miocárdico."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La miocarditis es una forma grave de afectación por dengue que puede manifestarse con arritmias, elevación de biomarcadores cardíacos (troponinas, CK-MB), disfunción sistólica ventricular y choque cardiogénico. Esta complicación clasifica al paciente en Grupo C y contraindica la sobrecarga agresiva de volumen indiscriminado.",
    "officialGuidelineRef": "MINSAL / OPS, Lineamientos Técnicos para el Manejo del Dengue Grave.",
    "distractorRationale": {
      "A": "Correcto. La miocarditis por dengue es una causa documentada de choque y muerte que requiere ecocardiograma y soporte inotrópico.",
      "B": "La pericarditis constrictiva es un proceso fibrótico crónico de meses a años.",
      "C": "La clínica aguda en un paciente febril orienta a miocarditis infecciosa/viral.",
      "D": "La elevación de troponina descarta origen esofágico aislado."
    }
  },
  {
    "id": "dengue-16",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Dengue en la Paciente Obstétrica",
    "statement": "En una mujer embarazada en el tercer trimestre con sospecha clínica de dengue, ¿por qué el MINSAL clasifica su condición directamente como criterio de GRUPO B con indicación de ingreso hospitalario obligatorio, aun sin signos de alarma clásicos?",
    "options": {
      "A": "Por el riesgo elevado de hemorragia obstétrica masiva durante el desprendimiento placentario o parto, muerte fetal intrauterina, parto pretérmino y transmisión vertical al neonato.",
      "B": "Porque las mujeres embarazadas son inmunes al virus y solo se ingresan para fines de estadística.",
      "C": "Porque el tratamiento exige cesárea inmediata en el 100% de los casos al primer día de fiebre.",
      "D": "Porque la prueba de dengue siempre da falsos positivos en el embarazo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El embarazo es una condición especial de comorbilidad (Grupo B1). Los cambios fisiológicos de la gestación (hemodilución fisiológica, taquicardia basal) enmascaran los signos tempranos de choque. Además, existe un riesgo muy incrementado de complicaciones obstétricas graves: amenaza de parto pretérmino, desprendimiento prematuro de placenta, atonía uterina hemorrágica y transmisión vertical perinatal con dengue neonatal.",
    "officialGuidelineRef": "Lineamientos Técnicos del Dengue en la Paciente Embarazada, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. El embarazo es condición de riesgo que exige hospitalización y vigilancia materno-fetal estrecha.",
      "B": "La gestante es especialmente vulnerable a desenlaces fatales por dengue.",
      "C": "La cesárea electiva profiláctica durante la fase crítica está contraindicada por el altísimo riesgo hemorrágico.",
      "D": "Las pruebas serológicas y virológicas son válidas en la embarazada."
    }
  },
  {
    "id": "dengue-17",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Particularidades del Dengue en Lactantes Menores",
    "statement": "¿Cuál de las siguientes particularidades clínicas en lactantes menores (< 1 año) complica el diagnóstico y manejo oportuno del dengue en el primer nivel de atención?",
    "options": {
      "A": "Presentan mayor fragilidad capilar, se deshidratan más rápidamente, la fiebre puede acompañarse de convulsiones febriles, y el choque suele manifestarse inicialmente solo con letargia, irritabilidad o rechazo a la toma de leche.",
      "B": "Los lactantes menores nunca presentan trombocitopenia debido a la inmunidad de la leche materna.",
      "C": "La enfermedad siempre se manifiesta con ictericia severa y dolor articular en dedos de las manos.",
      "D": "Los lactantes toleran pérdidas del 50% de su volemia sin presentar ninguna alteración de signos vitales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En lactantes, la reserva fisiológica es limitada y la volemia es proporcionalmente menor. La extravasación plasmática produce choque compensado muy temprano que puede confundirse con apatía, llanto débil o rechazo a la lactancia. Además, el examen del dolor abdominal es difícil. Todo lactante < 1 año con dengue debe ser clasificado en Grupo B1 e ingresado para monitoreo estricto.",
    "officialGuidelineRef": "Guía Clínica de Dengue en Pediatría, MINSAL / OPS.",
    "distractorRationale": {
      "A": "Correcto. La presentación atípica y la rápida descompensación hacen mandatorio el ingreso en menores de un año.",
      "B": "La trombocitopenia y la fuga capilar ocurren con gran intensidad en lactantes.",
      "C": "La poliartritis simétrica es propia del Chikungunya, no del dengue en lactantes.",
      "D": "Una pérdida del 15-20% de volemia en lactantes desencadena choque hipovolémico letal."
    }
  },
  {
    "id": "dengue-18",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Indicación Específica de Coloides en Choque Refractario",
    "statement": "¿En qué situación clínica muy específica y protocolizada por el MINSAL está indicado el uso de soluciones coloides (como Albúmina al 5%) en el paciente con choque por dengue?",
    "options": {
      "A": "En pacientes con Choque por Dengue que no responden favorablemente tras la administración de dos bolos sucesivos de cristaloides isotónicos (10-20 mL/kg cada uno) y persisten con hematocrito elevado.",
      "B": "Como líquido de rehidratación de primera línea en todos los pacientes ambulatorios del Grupo A.",
      "C": "En cualquier paciente que tenga plaquetas por debajo de 100,000/uL.",
      "D": "Para prevenir el dengue antes de que aparezcan los primeros síntomas febriles."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los coloides están estrictamente reservados para el choque refractario a cristaloides (cuando dos cargas de 20 mL/kg no logran estabilizar la presión arterial ni la diuresis, y el hematocrito se mantiene alto confirmando fuga plasmática no controlada). Los coloides retienen agua intravascularmente por presión oncótica, administrándose en dosis de 10 a 20 mL/kg en 30 a 60 minutos.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Tratamiento del Dengue, MINSAL, Uso de Coloides.",
    "distractorRationale": {
      "A": "Correcto. Uso reservado para choque refractario con hemoconcentración persistente.",
      "B": "Los coloides son medicamentos de uso intrahospitalario estricto en cuidados intensivos.",
      "C": "La cifra plaquetaria aislada no es indicación de coloides.",
      "D": "Los coloides no tienen acción profiláctica antiviral."
    }
  },
  {
    "id": "dengue-19",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Criterios de Transfusión Plaquetaria en Dengue",
    "statement": "Un paciente de 20 años con dengue se encuentra hemodinámicamente estable, afebril, sin sangrado activo alguno, pero su laboratorio reporta un recuento plaquetario de 15,000/uL. ¿Cuál es la indicación normada por las guías clínicas respecto a la transfusión de plaquetas?",
    "options": {
      "A": "NO está indicada la transfusión profiláctica de plaquetas; se debe mantener la vigilancia clínica y el reposo estricto, ya que la transfusión profiláctica no previene hemorragias y se asocia a sobrecarga hídrica y complicaciones infecciosas.",
      "B": "Transfundir inmediatamente 12 unidades de plaquetas en bolo rápido.",
      "C": "Indicar plasma fresco congelado y crioprecipitados cada 4 horas.",
      "D": "Realizar esplenectomía de urgencia para frenar la destrucción plaquetaria."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Tanto el MINSAL como la OMS y ensayos clínicos aleatorizados han demostrado que la transfusión profiláctica de plaquetas en pacientes con dengue sin hemorragia clínica NO previene el sangrado, NO acelera la recuperación plaquetaria y se asocia a mayor riesgo de sobrecarga circulatoria (TACO), lesión pulmonar aguda (TRALI) y prolongación de la estancia hospitalaria. La transfusión se reserva para hemorragias graves que amenazan la vida.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Manejo del Dengue, MINSAL, Transfusión de Hemocomponentes.",
    "distractorRationale": {
      "A": "Correcto. La transfusión profiláctica está contraindicada por falta de beneficio y riesgo de sobrecarga.",
      "B": "Práctica médica obsoleta y desaconsejada internacionalmente.",
      "C": "El plasma y crioprecipitados solo se indican ante coagulopatía de consumo demostrada con sangrado activo.",
      "D": "La esplenectomía no tiene cabida en el tratamiento del dengue agudo."
    }
  },
  {
    "id": "dengue-20",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Riesgos del Enmascaramiento de Signos de Alarma",
    "statement": "En la UCSF, un médico evalúa a un paciente con dengue y dolor abdominal en epigastrio y mesogastrio. ¿Por qué se debe evitar la administración de opioides potentes o antiespasmódicos intravenosos para calmar el dolor sin antes haber evaluado a fondo la volemia?",
    "options": {
      "A": "Porque pueden enmascarar la evolución del dolor abdominal continuo como signo de choque inminente y alterar el examen abdominal para detectar peritonitis o hemorragia interna.",
      "B": "Porque los opioides estimulan la replicación del genoma viral de los cuatro serotipos de dengue.",
      "C": "Porque los antiespasmódicos causan proliferación acelerada del vector Aedes aegypti.",
      "D": "Porque los analgésicos convierten la sangre del paciente en líquido cefalorraquídeo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El dolor abdominal es el signo de alarma cardinal de hipoperfusión esplácnica, isquemia intestinal incipiente y extravasación retroperitoneal. La administración indiscriminada de analgésicos potentes enmascara el deterioro clínico, impidiendo detectar a tiempo la transición hacia el choque descompensado o complicaciones quirúrgicas concomitantes (apendicitis aguda coincidente). El tratamiento del dolor en dengue es la adecuada reposición de volumen.",
    "officialGuidelineRef": "Lineamientos Técnicos del Dengue, MINSAL, Evaluación de Signos de Alarma.",
    "distractorRationale": {
      "A": "Correcto. La analgesia agresiva oculta el principal signo de alarma de fuga plasmática.",
      "B": "Los opioides no ejercen función moduladora directa sobre la ARN polimerasa viral.",
      "C": "No existe relación farmacológica con el vector.",
      "D": "Distractor fisiológico sin fundamento."
    }
  },
  {
    "id": "dengue-21",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Monitoreo de la Diuresis Horaria",
    "statement": "¿Cuál es la meta mínima de gasto urinario que debe mantenerse en un paciente hospitalizado por dengue con fluidoterapia para considerar que la perfusión tisular renal es adecuada?",
    "options": {
      "A": "Al menos 0.5 a 1.0 mL/kg/hora en adultos y niños mayores de 1 año.",
      "B": "Menos de 0.1 mL/kg/hora.",
      "C": "Exactamente 10 mL/kg/hora en todo momento.",
      "D": "La diuresis no necesita ser cuantificada si el paciente bebe agua."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El gasto urinario horario es el parámetro hemodinámico más sensible, dinámico y no invasivo para titular la fluidoterapia en dengue. Una diuresis entre 0.5 y 1.0 mL/kg/h confirma que la volemia efectiva es suficiente para perfundir los lechos capilares renales sin caer en sobrehidratación.",
    "officialGuidelineRef": "MINSAL, Criterios de Monitoreo Hemodinámico en Dengue.",
    "distractorRationale": {
      "A": "Correcto. 0.5-1.0 mL/kg/h es la meta estándar de gasto urinario en hidratación parenteral.",
      "B": "Menos de 0.5 mL/kg/h define oliguria y requiere reevaluación urgente del volumen administrado.",
      "C": "10 mL/kg/h representaría poliuria masiva por sobrecarga hídrica extrema.",
      "D": "El balance hídrico estricto con sonda Foley en pacientes graves es mandatario."
    }
  },
  {
    "id": "dengue-22",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Exantema Clásico de Recuperación",
    "statement": "Al 7° día de evolución, un paciente que se recupera favorablemente de dengue presenta una erupción cutánea eritematosa generalizada que respeta pequeñas zonas redondeadas de piel pálida, con intenso prurito en palmas y plantas. ¿Cómo se denomina clásicamente a este exantema?",
    "options": {
      "A": "Exantema en \"islas blancas en un mar rojo\", característico de la fase de recuperación del dengue.",
      "B": "Eritema migratorio anular patognomónico de Enfermedad de Lyme.",
      "C": "Fascitis necrotizante tipo II por Estreptococo del grupo A.",
      "D": "Signo de Nikolsky positivo por pénfigo vulgar autoinmune."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El exantema de recuperación o \"islas blancas en un mar rojo\" aparece típicamente hacia el final de la fase crítica y marca la entrada a la fase de recuperación. Es maculopapular, confluente, rodea áreas circulares de piel indemne y genera intenso prurito palmo-plantar debido a la reabsorción inmunológica de antígenos virales en la dermis.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico del Dengue, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Es el exantema de convalecencia clásico del dengue.",
      "B": "El eritema migratorio de Lyme es una lesión en diana expansiva transmitida por garrapatas Ixodes.",
      "C": "La fascitis necrotizante es una infección bacteriana profunda fulminante con necrosis tisular.",
      "D": "El signo de Nikolsky evalúa desprendimiento epidérmico por acantólisis en pénfigo o NET."
    }
  },
  {
    "id": "dengue-23",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Control Vectorial Comunitario en UCSF",
    "statement": "Dentro del programa comunitario de prevención de las UCSF del MINSAL en El Salvador, ¿cuál es el larvicida químico de elección distribuido para la protección de pilas, barriles y tanques de almacenamiento de agua doméstica, y qué técnica educativa se promueve?",
    "options": {
      "A": "Temefos (Abate) granulado al 1% dosificado a 1 gramo por cada 10 litros de agua, complementado con la técnica de \"La Untadita\" (mezcla de cloro y detergente en las paredes de las pilas).",
      "B": "DDT en polvo espolvoreado directamente en el agua potable de consumo familiar.",
      "C": "Sulfato de cobre en dosis tóxicas no reguladas.",
      "D": "Gasolina vertida sobre la superficie de los reservorios de agua para consumo humano."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El control vectorial integrado del MINSAL se basa en la eliminación física de criaderos y la aplicación de temefos (Abate) al 1% en depósitos de agua útil (a dosis inocua de 20 g por barril de 200 L / 1 g c/10 L), junto a la estrategia de \"La Untadita\" para destruir los huevecillos de Aedes aegypti adheridos a las paredes de los recipientes antes de que eclosionen.",
    "officialGuidelineRef": "Manual de Normas Técnicas de Control de Vectores, MINSAL El Salvador.",
    "distractorRationale": {
      "A": "Correcto. El temefos al 1% y La Untadita constituyen la estrategia insignia de salud comunitaria salvadoreña.",
      "B": "El DDT es un contaminante orgánico persistente prohibido internacionalmente.",
      "C": "Sustancia tóxica no aprobada para agua potable.",
      "D": "Práctica peligrosa que contamina el agua de consumo y genera intoxicaciones químicas."
    }
  },
  {
    "id": "dengue-24",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Diagnóstico Diferencial Clínico entre Arbovirosis",
    "statement": "¿Cuál de las siguientes características clínicas permite orientar fuertemente el diagnóstico hacia Fiebre Chikungunya en lugar de Dengue durante los primeros días de atención médica en la UCSF?",
    "options": {
      "A": "Artralgias y artritis intensas, bilaterales, simétricas, predominantemente en articulaciones distales (manos, muñecas, tobillos), frecuentemente invalidantes desde el inicio del cuadro febril.",
      "B": "Fuga plasmática masiva con derrame pleural y choque precoz en el 90% de los casos.",
      "C": "Ausencia total de fiebre y presencia exclusiva de tos ferina.",
      "D": "Pérdida de la memoria retrógrada con conservación exclusiva del lenguaje nativo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El virus Chikungunya (alfavirus) se distingue clínicamente del dengue por la severidad y el patrón simétrico e invalidante de las artralgias y artritis (que pueden cronificarse por meses o años), con menor tendencia a la trombocitopenia extrema o a la extravasación plasmática con choque que caracteriza al dengue.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Atención de Arbovirosis (Dengue, Chikungunya, Zika), MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La poliartritis simétrica e invalidante es el sello clínico del Chikungunya.",
      "B": "La fuga plasmática masiva es la característica distintiva del dengue, no de Chikungunya.",
      "C": "La fiebre alta súbita es constante en Chikungunya.",
      "D": "No produce amnesia retrógrada aislada."
    }
  },
  {
    "id": "dengue-25",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Choque Hipotensivo Descompensado",
    "statement": "¿Qué hallazgo hemodinámico define la transición de Choque Compensado a Choque Hipotensivo Descompensado en un paciente con dengue grave?",
    "options": {
      "A": "Caída franca de la Presión Arterial Sistólica por debajo del percentil 5 para la edad (o PAS < 90 mmHg en adultos) acompañada de frialdad generalizada, livedo reticularis y colapso circulatorio inminente.",
      "B": "Aumento de la presión arterial por encima de 180/120 mmHg con pulso fuerte.",
      "C": "Fiebre persistente de 40 °C sin ninguna alteración del pulso.",
      "D": "Aparición de caries dentales múltiples en molares inferiores."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Cuando los mecanismos compensatorios de vasoconstricción periférica claudican ante la hipovolemia extrema no tratada, la presión sistólica cae por debajo de los límites mínimos viables (PAS < 90 mmHg en adultos o < p5 para edad/talla en niños). Este Choque Hipotensivo Descompensado tiene una altísima mortalidad y exige maniobras de reanimación agresivas inmediatas con cristaloides y eventualmente vasopresores.",
    "officialGuidelineRef": "Guía Clínica de Manejo del Dengue Grave, MINSAL / OPS.",
    "distractorRationale": {
      "A": "Correcto. La hipotensión sistólica manifiesta define el choque descompensado avanzado.",
      "B": "Corresponde a una crisis hipertensiva, lo opuesto al choque.",
      "C": "La fiebre suele estar ausente durante el choque por dengue (fase de defervescencia).",
      "D": "Patología odontológica sin relación con el estado hemodinámico."
    }
  },
  {
    "id": "dengue-26",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Dosificación Segura de Acetaminofén en Dengue",
    "statement": "Para evitar toxicidad hepática iatrogénica en un paciente con dengue cuya función hepática ya se encuentra vulnerable por la infección viral, ¿cuál es la dosis máxima diaria normada de Acetaminofén en adultos y en pediatría?",
    "options": {
      "A": "Adultos: 500 a 1000 mg cada 6 horas (dosis máxima absoluta: 4 gramos al día); Niños: 10 a 15 mg/kg/dosis cada 6 horas (máximo 60 mg/kg/día).",
      "B": "Adultos: 15 gramos al día en una sola toma matutina; Niños: 200 mg/kg/día.",
      "C": "Adultos y niños: 100 mg cada 30 minutos sin límite diario.",
      "D": "No debe administrarse ninguna dosis de acetaminofén porque está totalmente prohibido en dengue."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El acetaminofén (paracetamol) es el único antipirético/analgésico seguro autorizado en dengue, pero su dosificación debe ser rigurosa para no superar la capacidad hepática de conjugación con glutatión. En adultos la dosis máxima es 4 g/día (en pacientes con transaminasas elevadas se sugiere reducir a 2-3 g/día) y en pediatría 10-15 mg/kg cada 6 horas sin exceder 60 mg/kg/día.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Tratamiento del Dengue, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Esquema de dosificación seguro para prevenir hepatotoxicidad por acetaminofén.",
      "B": "Dosis masiva letal que causaría necrosis hepática fulminante por metabolito NAPQI.",
      "C": "Frecuencia tóxica inaceptable.",
      "D": "El acetaminofén es el medicamento de elección normado."
    }
  },
  {
    "id": "dengue-27",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Sospecha de Sobreinfección Bacteriana en Dengue",
    "vignette": "Un paciente que cursaba el 6° día de dengue grave en cuidados intensivos presenta de forma súbita un nuevo pico febril de 39 °C, leucocitosis con neutrofilia del 88% y bandas del 12%, y secreción purulenta por el tubo orotraqueal.",
    "statement": "¿Cuál es la conducta terapéutica indicada según las normas de control de infecciones?",
    "options": {
      "A": "Tomar hemocultivos y cultivo de secreción traqueal e iniciar cobertura antibiótica empírica dirigida a infección bacteriana sobreagregada (neumonía asociada a ventilación / bacteriemia nosocomial).",
      "B": "Asumir que es la evolución natural del dengue y no tomar cultivos ni iniciar antibióticos.",
      "C": "Suspender todo tratamiento y dar el alta por mejoría del dengue viral.",
      "D": "Administrar aspirina en dosis alta para suprimir la fiebre."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los pacientes con dengue grave en UCI, debido a la disfunción inmune transitoria, accesos venosos invasivos y ventilación mecánica, tienen alto riesgo de infecciones bacterianas nosocomiales. La reaparición de fiebre con leucocitosis neutrofílica franca y desviación a la izquierda obliga a sospechar sepsis bacteriana secundaria, tomar cultivos e iniciar terapia antimicrobiana dirigida.",
    "officialGuidelineRef": "MINSAL, Lineamientos de Infecciones Asociadas a la Atención en Salud (IAAS) en Cuidados Críticos.",
    "distractorRationale": {
      "A": "Correcto. La sobreinfección bacteriana en dengue grave debe diagnosticarse y tratarse con antibióticos guiados por cultivo.",
      "B": "El dengue cursa con leucopenia y linfocitosis; la neutrofilia marcada con bandas indica infección bacteriana.",
      "C": "Conducta de negligencia médica ante un paciente crítico.",
      "D": "La aspirina continúa contraindicada por riesgo de coagulopatía."
    }
  },
  {
    "id": "dengue-28",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Utilidad del Ultrasonido al Lado de la Cama (POCUS)",
    "statement": "¿Cuáles son los tres hallazgos ultrasonográficos tempranos más útiles que el médico puede detectar en la ecografía de cabecera (POCUS) para confirmar extravasación plasmática subclínica en dengue antes de que sea evidente al examen físico?",
    "options": {
      "A": "Engrosamiento de la pared vesicular (> 3 mm) con aspecto en doble carril, líquido libre en el espacio hepatorrenal (espacio de Morrison) y derrame pleural derecho.",
      "B": "Presencia de cálculos biliares gigantes en el colédoco distal.",
      "C": "Atrofia renal bilateral simétrica con quistes corticales múltiples.",
      "D": "Ausencia total de hígado y bazo en la cavidad abdominal."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El ultrasonido de cabecera es altamente sensible para detectar la extravasación de plasma horas antes de que se manifieste clínicamente. El engrosamiento de la pared vesicular por edema subseroso (> 3 mm), la presencia de una lámina de líquido ascítico en el receso hepatorrenal de Morrison y el derrame pleural (con predominio derecho) confirman fuga plasmática activa y clasifican al paciente como Grupo B.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Manejo del Dengue, MINSAL / OPS, Uso de Ultrasonido.",
    "distractorRationale": {
      "A": "Correcto. La triada de engrosamiento vesicular, líquido en Morrison y derrame pleural derecho confirma fuga capilar.",
      "B": "Corresponde a coledocolitiasis, no a fuga capilar por dengue.",
      "C": "Hallazgo de enfermedad renal crónica poliquística.",
      "D": "Incompatible con la anatomía humana viable."
    }
  },
  {
    "id": "dengue-29",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Cálculo de Fluidos en Pacientes con Obesidad",
    "statement": "Al prescribir la fluidoterapia de reposición en un paciente con dengue y signos de alarma que presenta obesidad grado II (peso real: 110 kg, peso ideal calculado: 70 kg), ¿sobre qué peso corporal debe calcularse la tasa de infusión de cristaloides según la guía del MINSAL?",
    "options": {
      "A": "Sobre el peso ideal o peso ajustado del paciente (70 kg), para evitar la sobrecarga hídrica masiva y edema pulmonar inducido por el cálculo sobre el tejido adiposo no vascularizado.",
      "B": "Sobre el peso real de 110 kg más un 20% adicional por la grasa corporal.",
      "C": "Sobre un peso fijo estándar de 20 kg sin importar la talla ni la edad.",
      "D": "En los pacientes con obesidad no se deben utilizar soluciones intravenosas bajo ninguna circunstancia."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El tejido adiposo tiene un contenido hídrico significativamente menor que la masa magra. Calcular los mililitros por kilogramo de fluidoterapia basándose en el peso real de un paciente obeso conduce a una sobreestimación masiva del volumen intravascular requerido, provocando insuficiencia cardíaca aguda y edema pulmonar iatrogénico. La norma estipula calcular sobre el peso ideal para la talla.",
    "officialGuidelineRef": "MINSAL / OPS, Lineamientos Técnicos del Dengue, Cálculo de Líquidos en Poblaciones Especiales.",
    "distractorRationale": {
      "A": "Correcto. El cálculo debe realizarse siempre con base en el peso ideal o ajustado.",
      "B": "Calcular sobre 110 kg provocaría una sobrecarga volumétrica de más del 50%, desencadenando edema pulmonar.",
      "C": "20 kg subdosificaría de forma crítica a un adulto de 70 kg de peso ideal.",
      "D": "El paciente obeso requiere la misma reposición fisiológica de volemia que un no obeso."
    }
  },
  {
    "id": "dengue-30",
    "category": "dengue",
    "categoryLabel": "Protocolo de Dengue",
    "clinicalArea": "Criterios de Referencia Inmediata desde la UCSF al Hospital",
    "statement": "¿Cuál de las siguientes condiciones observadas durante el control ambulatorio en una UCSF Intermedia constituye un criterio mandatorio de referencia inmediata en ambulancia medicalizada hacia un Hospital Nacional de la red MINSAL?",
    "options": {
      "A": "Presencia de cualquier signo de alarma (ej. dolor abdominal persistente o vómitos frecuentes), hipotensión postural, o intolerancia total a la vía oral.",
      "B": "Un único episodio de estornudo con temperatura corporal de 36.6 °C.",
      "C": "Que el paciente manifieste deseo de cambiar el color de la ropa de cama en su domicilio.",
      "D": "Que el paciente haya presentado un hemograma con plaquetas normales y hematocrito estable."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En el primer nivel de atención (UCSF Básica o Intermedia), la aparición de cualquier signo de alarma marca la transición a Grupo B y demanda referencia inmediata con vía venosa canalizada e infusión de mantenimiento reglada hacia un centro hospitalario con sala de observación y laboratorio continuo, para evitar que el paciente llegue en choque irreversible.",
    "officialGuidelineRef": "Red Nacional de Servicios de Salud, MINSAL, Criterios de Referencia y Respuesta Rápida en Dengue.",
    "distractorRationale": {
      "A": "Correcto. La aparición de signos de alarma exige hospitalización inmediata en segundo nivel.",
      "B": "El estornudo aislado afebril no es criterio de referencia.",
      "C": "Preferencia doméstica sin relevancia médica.",
      "D": "Paciente estable que puede continuar en seguimiento ambulatorio Grupo A."
    }
  },
  {
    "id": "hta-01",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Criterios Diagnósticos Confirmatorios de Hipertensión Arterial",
    "statement": "De acuerdo con la Guía Clínica de Diagnóstico y Tratamiento de la Hipertensión Arterial en el Primer Nivel de Atención del MINSAL, ¿cuál de los siguientes criterios confirma el diagnóstico de HTA en un paciente adulto en la consulta ambulatoria?",
    "options": {
      "A": "Cifras de Presión Arterial Sistólica >= 140 mmHg y/o Presión Arterial Diastólica >= 90 mmHg registradas en al menos dos consultas médicas separadas por 1 a 2 semanas, con técnica estandarizada.",
      "B": "Una sola toma de PA de 135/85 mmHg tras subir apresuradamente las escaleras de la UCSF.",
      "C": "Tener antecedente familiar de hipertensión aunque las tomas actuales de PA sean de 115/75 mmHg.",
      "D": "Un único registro de PA sistólica de 125 mmHg con frecuencia cardíaca de 70 lpm."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El diagnóstico de HTA exige corroborar la persistencia de la elevación tensional (PAS >= 140 mmHg y/o PAD >= 90 mmHg) en al menos dos ocasiones distintas separadas por 1 a 2 semanas, utilizando un esfigmomanómetro calibrado y técnica adecuada (paciente sentado, reposo previo de 5 min, vejiga vacía, manguito apropiado). La excepción es la crisis hipertensiva o PA inicial >= 180/110 mmHg con daño de órgano diana, donde se diagnostica de inmediato.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Tratamiento de la Hipertensión Arterial en el Primer Nivel de Atención, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La confirmación en al menos dos consultas separadas con cifras >= 140/90 mmHg es el estándar normado.",
      "B": "Una toma aislada tras ejercicio no cumple los criterios diagnósticos y refleja respuesta fisiológica.",
      "C": "El antecedente familiar es un factor de riesgo cardiovascular, no un criterio diagnóstico.",
      "D": "Cifras dentro del rango de presión arterial normal-elevada."
    }
  },
  {
    "id": "hta-02",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Farmacoterapia de Primera Línea y Nefroprotección",
    "statement": "Un paciente masculino de 56 años con diagnóstico reciente de Hipertensión Arterial Estadio 2 (PA: 155/95 mmHg) y Diabetes Mellitus Tipo 2 presenta en sus exámenes de control una tasa de filtración glomerular estimada (TFGe) de 75 mL/min/1.73m² y microalbuminuria positiva (relación albúmina/creatinina en orina: 180 mg/g). Según la guía del MINSAL, ¿cuál es el esquema farmacológico antihipertensivo de primera elección por su demostrado efecto nefroprotector?",
    "options": {
      "A": "Iniciar con un Inhibidor de la Enzima Convertidora de Angiotensina (IECA como Enalapril) o un Antagonista de Receptores de Angiotensina II (ARA-II como Losartán), combinado con un Bloqueador de Canales de Calcio (Amlodipino).",
      "B": "Iniciar monoterapia con Atenolol en dosis altas para deprimir la contractilidad miocárdica.",
      "C": "Prescribir únicamente Furosemida tres veces al día sin ningún protector del sistema renina-angiotensina.",
      "D": "No iniciar medicamentos y postergar el tratamiento por 5 años para evaluar si la nefropatía avanza sola."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los IECAs (Enalapril) y ARA-II (Losartán) son los fármacos antihipertensivos de primera elección obligatoria en pacientes diabéticos con microalbuminuria o enfermedad renal crónica debido a que dilatan preferencialmente la arteriola eferente del glomérulo, disminuyendo la presión intraglomerular y frenando la progresión de la nefropatía diabética. Dado que el paciente se encuentra en Estadio 2 (> 20/10 mmHg sobre meta), las guías recomiendan iniciar con terapia combinada fija (ARA-II o IECA + Amlodipino).",
    "officialGuidelineRef": "Guía Clínica de Hipertensión Arterial y Nefropatía, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La nefroprotección con IECA/ARA-II sumada al BCC es el estándar de oro en pacientes diabéticos.",
      "B": "Los betabloqueadores no son primera línea en HTA no complicada y enmascaran síntomas de hipoglucemia.",
      "C": "Los diuréticos de asa como furosemida se reservan para sobrecarga hídrica en insuficiencia cardíaca o TFGe < 30.",
      "D": "La inercia clínica aceleraría la insuficiencia renal terminal y el riesgo cardiovascular del paciente."
    }
  },
  {
    "id": "hta-03",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Evaluación del Daño a Órgano Blanco Cardiovascular",
    "vignette": "Hombre de 62 años con HTA mal controlada de 10 años de evolución consulta a la UCSF para renovación de receta. Al examen: PA 165/100 mmHg, choque de la punta desplazado hacia el 6° espacio intercostal línea axilar anterior, segundo ruido aórtico reforzado.",
    "statement": "¿Qué estudio básico inicial y accesible en la red de atención primaria debe indicarse para evaluar hipertrofia ventricular izquierda como daño a órgano blanco?",
    "options": {
      "A": "Electrocardiograma de 12 derivaciones (evaluación de criterios de Sokolow-Lyon o Cornell).",
      "B": "Angiografía coronaria invasiva con cateterismo cardíaco izquierdo inmediato.",
      "C": "Resonancia magnética nuclear con espectroscopía de fósforo 31.",
      "D": "Tomografía por emisión de positrones (PET-CT) de cuerpo entero."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El electrocardiograma de 12 derivaciones es el estudio inicial costo-efectivo indispensable en todo paciente hipertenso. Permite evaluar repercusión a órgano diana (hipertrofia ventricular izquierda mediante el índice de Sokolow-Lyon: onda S en V1 + onda R en V5 o V6 >= 35 mm), así como descartar isquemia silente, sobrecarga sistólica o trastornos de conducción.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico de HTA en Atención Primaria, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. El ECG es accesible, no invasivo y detecta hipertrofia ventricular y cardiopatía hipertensiva.",
      "B": "El cateterismo es un procedimiento invasivo de tercer nivel indicado ante sospecha de síndrome coronario agudo.",
      "C": "Estudio de investigación avanzada, no indicado para tamizaje habitual.",
      "D": "La PET-CT es un estudio oncológico no justificado en evaluación rutinaria de HTA."
    }
  },
  {
    "id": "hta-04",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Clasificación de Estadios de Presión Arterial",
    "statement": "Según los estándares clínicos vigentes adoptados por el MINSAL, ¿cómo se clasifica a un paciente adulto asintomático con tomas repetidas de Presión Arterial en 136/84 mmHg?",
    "options": {
      "A": "Hipertensión Arterial Estadio 1 (Presión Sistólica entre 130-139 mmHg y/o Presión Diastólica entre 80-89 mmHg).",
      "B": "Presión Arterial Óptima que no requiere ninguna intervención ni control.",
      "C": "Crisis Hipertensiva tipo Emergencia que exige hospitalización en UCI.",
      "D": "Hipotensión Ortostática Grave que requiere expansores plasmáticos inmediatos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las guías clínicas clasifican la PA en: Normal (< 120/80 mmHg), Elevada (120-129/< 80 mmHg), HTA Estadio 1 (130-139 / 80-89 mmHg) e HTA Estadio 2 (>= 140 / >= 90 mmHg). En Estadio 1, la conducta inicial en pacientes de bajo riesgo cardiovascular incluye cambios terapéuticos en el estilo de vida durante 3 a 6 meses; si el riesgo cardiovascular es alto o no hay meta, se añade farmacoterapia.",
    "officialGuidelineRef": "Guía Clínica de Hipertensión Arterial, MINSAL, Clasificación.",
    "distractorRationale": {
      "A": "Correcto. Cifras entre 130-139 sistólica y 80-89 diastólica corresponden a HTA Estadio 1.",
      "B": "Presión óptima es < 120/80 mmHg.",
      "C": "Emergencia hipertensiva se define con cifras > 180/120 con daño agudo de órgano diana.",
      "D": "Hipotensión ortostática es una caída de >= 20 mmHg sistólica o >= 10 mmHg diastólica al ponerse de pie."
    }
  },
  {
    "id": "hta-05",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Diagnóstico Diferencial: Emergencia vs Urgencia Hipertensiva",
    "statement": "¿Cuál es el elemento fisiopatológico y clínico determinante que diferencia taxativamente una EMERGENCIA HIPERTENSIVA de una URGENCIA HIPERTENSIVA ante un registro de PA de 190/120 mmHg?",
    "options": {
      "A": "La presencia de daño agudo y progresivo a órganos blanco o diana (ej. encefalopatía, infarto agudo de miocardio, edema agudo de pulmón, disección aórtica o eclampsia).",
      "B": "El valor numérico absoluto de la presión arterial, ya que por encima de 180 mmHg siempre es emergencia.",
      "C": "El sexo del paciente, siendo emergencia en hombres y urgencia en mujeres.",
      "D": "La presencia de mareo leve sin ninguna alteración orgánica comprobable."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La distinción crítica entre emergencia y urgencia hipertensiva NO radica en la cifra tensional per se (ambas suelen tener PA > 180/120 mmHg), sino en el daño agudo a órganos diana. La Emergencia Hipertensiva presenta lesión activa que amenaza la vida (cerebro, corazón, riñón, retina, grandes vasos) y exige hospitalización en UCI con fármacos parenterales continuos. La Urgencia carece de daño agudo y se trata por vía oral.",
    "officialGuidelineRef": "Guía de Manejo de Crisis Hipertensivas, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La lesión aguda y progresiva de órgano diana es el criterio definitorio de emergencia hipertensiva.",
      "B": "La cifra aislada sin daño orgánico agudo define urgencia hipertensiva.",
      "C": "El sexo no determina la clasificación de la crisis.",
      "D": "El mareo o cefalea inespecífica sin daño orgánico agudo corresponde a urgencia hipertensiva."
    }
  },
  {
    "id": "hta-06",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Manejo Terapéutico de la Urgencia Hipertensiva",
    "statement": "En la sala de observación de una UCSF se atiende a una paciente de 50 años con Urgencia Hipertensiva (PA 185/110 mmHg, sin signos de daño agudo de órgano blanco). ¿Cuál es la estrategia terapéutica normada para su manejo seguro?",
    "options": {
      "A": "Reducción gradual y progresiva de la PA en un lapso de 24 a 48 horas mediante medicación oral (ej. Captopril oral o Amlodipino), evitando descensos bruscos para prevenir hipoperfusión cerebral o coronaria.",
      "B": "Descenso inmediato de la presión arterial a 100/60 mmHg en menos de 10 minutos con bolos intravenosos múltiples.",
      "C": "Administración de nifedipino sublingual de acción corta en cápsula perforada.",
      "D": "Lavar el estómago con suero helado para estimular el nervio vago."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En la Urgencia Hipertensiva la autorregulación vascular cerebral está adaptada a presiones basales elevadas. Provocar un descenso abrupto de la presión arterial ocasiona isquemia cerebral, ceguera o infarto de miocardio iatrogénico. La meta es reducir la PA gradualmente en 24 a 48 horas con fármacos por vía oral, con reposo y seguimiento ambulatorio.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Tratamiento de la Hipertensión Arterial, MINSAL, Crisis Hipertensivas.",
    "distractorRationale": {
      "A": "Correcto. El descenso paulatino en 24-48 horas con fármacos orales es la conducta médica segura.",
      "B": "Bajar bruscamente la PA en urgencia hipertensiva precipita accidentes cerebrovasculares isquémicos.",
      "C": "El nifedipino sublingual de acción rápida está formalmente proscrito por riesgo de muerte súbita e infarto.",
      "D": "Práctica aberrante y peligrosa sin sustento científico."
    }
  },
  {
    "id": "hta-07",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Contraindicación Absoluta de Nifedipino Sublingual Inmediato",
    "statement": "¿Por qué las autoridades sanitarias (MINSAL, FDA, OMS) prohíben taxativamente el uso de cápsulas de Nifedipino de liberación inmediata por vía sublingual u oral en crisis hipertensivas?",
    "options": {
      "A": "Porque produce vasodilatación incontrolable con caída precipitada y no predecible de la PA, taquicardia refleja simpática intensa y fenómeno de robo coronario, provocando eventos cerebrovasculares isquémicos e infartos.",
      "B": "Porque causa adicción psicológica inmediata en el paciente.",
      "C": "Porque neutraliza el efecto de las vacunas antivirales en el organismo.",
      "D": "Porque tiñe irreversiblemente la orina y las lágrimas de color azul."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El nifedipino de acción corta sublingual u oral provoca una caída descontrolada y brusca de la resistencia vascular periférica en minutos, activando un potente tono simpático reflejo con taquicardia que induce isquemia miocárdica (robo coronario), síncope, infarto de miocardio y eventos cerebrovasculares fatales. Su uso en crisis hipertensiva constituye mala praxis.",
    "officialGuidelineRef": "Alertas Sanitarias y Guía Clínica de HTA, MINSAL / DNM.",
    "distractorRationale": {
      "A": "Correcto. El riesgo de colapso hemodinámico e infarto por descenso descontrolado justifica su prohibición.",
      "B": "Los antagonistas de canales de calcio no tienen propiedades adictógenas.",
      "C": "No interfiere con los biológicos vacunales.",
      "D": "Efecto secundario ficticio."
    }
  },
  {
    "id": "hta-08",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Metas Tensionales Terapéuticas en Atención Primaria",
    "statement": "En un paciente hipertenso de 58 años diagnosticado con Diabetes Mellitus Tipo 2 y Enfermedad Renal Crónica Estadio 3a, ¿cuál es la meta tensional estandarizada recomendada por las guías del MINSAL?",
    "options": {
      "A": "Presión arterial menor a 130/80 mmHg, tolerada y sin hipotensión ortostática sintomática.",
      "B": "Mantener la presión arterial entre 160/100 y 170/110 mmHg.",
      "C": "Presión arterial menor a 80/40 mmHg a cualquier costo.",
      "D": "No existe ninguna meta en pacientes con diabetes y se permite cualquier cifra."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En pacientes con comorbilidades de muy alto riesgo cardiovascular (como diabetes mellitus, nefropatía crónica o antecedente de EVC/cardiopatía isquémica), la meta tensional recomendada por las guías del MINSAL y KDIGO es < 130/80 mmHg para retardar el deterioro renal y minimizar eventos macrovasculares.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Tratamiento de la Hipertensión Arterial, MINSAL, Metas Tensionales.",
    "distractorRationale": {
      "A": "Correcto. Meta estricta de < 130/80 mmHg para nefroprotección y reducción de riesgo coronario.",
      "B": "Cifras claramente hipertensivas que perpetúan el daño cardiovascular.",
      "C": "Cifras patológicas de hipotensión severa que provocan hipoperfusión tisular.",
      "D": "La inercia terapéutica en pacientes de alto riesgo está proscrita."
    }
  },
  {
    "id": "hta-09",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Efecto Adverso Tos por IECAs y Cambio Terapéutico",
    "vignette": "Mujer de 54 años en tratamiento con Enalapril 20 mg/día consulta a la UCSF por presentar tos seca, espasmódica, irritativa, predominantemente nocturna, de 4 semanas de evolución, sin estertores ni fiebre. La radiografía de tórax es completamente normal.",
    "statement": "¿Cuál es el mecanismo fisiopatológico de este síntoma y cuál es la conducta farmacológica correcta según el MINSAL?",
    "options": {
      "A": "La tos se debe a la acumulación de bradicinina y sustancia P en el árbol respiratorio al bloquear su degradación por la ECA; la conducta es suspender el Enalapril y sustituirlo por un ARA-II (Losartán).",
      "B": "La tos es provocada por alergia a los excipientes de almidón y debe aumentarse la dosis de Enalapril a 40 mg.",
      "C": "Es una tuberculosis pulmonar cavitada resistente y debe iniciarse tratamiento TAES.",
      "D": "El Enalapril no tiene ninguna relación con la tos y debe enviarse a psiquiatría por somatización."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La enzima convertidora de angiotensina (ECA) también degrada la bradicinina y la sustancia P en el pulmón. Al inhibirla con Enalapril, estos péptidos proinflamatorios se acumulan, estimulando las fibras C del árbol traqueobronquial y desencadenando tos seca persistente en 10-20% de pacientes. Los ARA-II (Losartán) bloquean selectivamente el receptor AT1 sin alterar el metabolismo de la bradicinina, por lo que son el sustituto de elección.",
    "officialGuidelineRef": "Guía de Farmacoterapia Hipertensiva, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Acumulación de bradicininas tratada mediante sustitución por Losartán.",
      "B": "Aumentar la dosis incrementaría la concentración de bradicininas y empeoraría la tos.",
      "C": "La radiografía normal y ausencia de síntomas sistémicos descartan tuberculosis activa.",
      "D": "La tos por IECA es una reacción adversa farmacológica clásica bien tipificada."
    }
  },
  {
    "id": "hta-10",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Angioedema por Fármacos Antihipertensivos",
    "statement": "Un paciente que inició Enalapril hace 3 semanas se presenta a la emergencia con edema súbito no pruriginoso de labios, lengua, úvula y dificultad para deglutir y respirar (angioedema). ¿Cuál es la implicación clínica futura respecto a esta familia de medicamentos?",
    "options": {
      "A": "El angioedema por IECA es una emergencia potencialmente fatal mediada por bradicinina que contraindica permanentemente el uso de Enalapril y de cualquier otro IECA en el paciente de por vida.",
      "B": "Puede reanudarse el Enalapril en cuanto baje la inflamación facial si se toma con jugo de naranja.",
      "C": "Es una reacción transitoria normal que indica que el medicamento está funcionando a nivel endotelial.",
      "D": "El angioedema se cura aumentando la dosis de enalapril al doble."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El angioedema por IECA es una reacción adversa grave potencialmente mortal debida a la acumulación tisular masiva de bradicinina. Afecta típicamente la vía aérea superior (lengua, laringe) con riesgo de asfixia. Su antecedente constituye una contraindicación absoluta permanente para toda la familia de los IECAs. Los ARA-II también deben usarse con extrema precaución o evitarse.",
    "officialGuidelineRef": "MINSAL, Lineamientos de Farmacovigilancia y Seguridad del Paciente.",
    "distractorRationale": {
      "A": "Correcto. Contraindicación absoluta y permanente por riesgo de obstrucción laríngea fatal.",
      "B": "Reexponer al paciente a un IECA tras angioedema puede desencadenar paro respiratorio por asfixia.",
      "C": "El angioedema nunca es un efecto normal de eficacia.",
      "D": "Aumentar la dosis profundizaría la gravedad de la obstrucción de la vía aérea."
    }
  },
  {
    "id": "hta-11",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Monitoreo de Electrolitos y Función Renal con IECA/ARA-II",
    "statement": "¿Qué dos parámetros de laboratorio obligatorios deben ser controlados en sangre antes de iniciar y a las 2 a 4 semanas de titular un IECA (Enalapril) o un ARA-II (Losartán) según la guía del MINSAL?",
    "options": {
      "A": "Creatinina sérica (para estimar la TFGe) y Potasio sérico (por riesgo de hiperpotasemia).",
      "B": "Colesterol total y triglicéridos únicamente.",
      "C": "Nivel plasmático de vitamina C y ácido fólico.",
      "D": "Antígeno prostático específico (PSA) y fosfatasa ácida."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los IECAs y ARA-II disminuyen la secreción de aldosterona en la corteza suprarrenal, favoreciendo la retención de potasio y pudiendo provocar hiperpotasemia potencialmente arrítmica. Asimismo, al relajar la arteriola eferente pueden causar una caída hemodinámica transitoria de la TFGe. Se acepta un incremento de creatinina de hasta un 20-30% respecto al basal; incrementos mayores exigen evaluar estenosis de arteria renal o hipovolemia.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Tratamiento de la Hipertensión Arterial, MINSAL, Parámetros de Seguridad.",
    "distractorRationale": {
      "A": "Correcto. Creatinina y potasio son los parámetros críticos de monitoreo bioquímico.",
      "B": "El perfil lipídico es parte del riesgo cardiovascular pero no evalúa la toxicidad renal/electrolítica aguda del IECA.",
      "C": "Vitaminas no afectadas por el sistema renina-angiotensina.",
      "D": "Marcadores urológicos no vinculados al mecanismo del IECA."
    }
  },
  {
    "id": "hta-12",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Efecto Adverso de Antagonistas de Calcio (Amlodipino)",
    "vignette": "Paciente masculino de 60 años en tratamiento con Amlodipino 10 mg/día refiere que desde hace 3 semanas nota hinchazón progresiva en ambos tobillos (edema maleolar bilateral) al final de la tarde, indoloro, sin disnea ni ortopnea. La fracción de eyección cardíaca es del 65% y la función renal normal.",
    "statement": "¿Cuál es la causa fisiopatológica de este edema y cuál es la conducta clínica apropiada?",
    "options": {
      "A": "Edema vasogénico periférico por vasodilatación arteriolar precapilar selectiva que aumenta la presión hidrostática capilar; no es falla cardíaca ni retención hídrica renal, y puede manejarse reduciendo la dosis de Amlodipino a 5 mg o combinándolo con un IECA/ARA-II.",
      "B": "Fallo renal agudo anúrico terminal que requiere diálisis peritoneal de urgencia.",
      "C": "Insuficiencia cardíaca congestiva descompensada clase IV que exige reposo absoluto en cama.",
      "D": "Trombosis venosa profunda bilateral fulminante que amerita amputación de miembros inferiores."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El edema inducido por dihidropiridinas (Amlodipino) no se debe a retención de sodio o agua, sino a vasodilatación preferencial de los esfínteres arteriolares precapilares sin dilatación venular postcapilar correspondiente, lo que incrementa la presión hidrostática intracapilar y fuga líquido al intersticio maleolar. La adición de un IECA o ARA-II dilata la vénula postcapilar, normalizando la presión capilar y resolviendo el edema.",
    "officialGuidelineRef": "Guía Clínica de Hipertensión Arterial, MINSAL, Farmacología de Calcioantagonistas.",
    "distractorRationale": {
      "A": "Correcto. El edema por amlodipino es microvascular/vasogénico y mejora con IECA/ARA-II o reducción de dosis.",
      "B": "La función renal normal descarta fallo renal.",
      "C": "La fracción de eyección normal (65%) y ausencia de ortopnea descartan insuficiencia cardíaca.",
      "D": "La bilateralidad y ausencia de dolor o eritema descartan TVP aguda."
    }
  },
  {
    "id": "hta-13",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Alteraciones Metabólicas por Diuréticos Tiazídicos",
    "statement": "Al prescribir un diurético tiazídico (como Hidroclorotiazida o Clortalidona) en la UCSF, ¿cuál de los siguientes patrones de alteraciones hidroelectrolíticas y metabólicas debe anticipar el médico en los controles laboratoriales?",
    "options": {
      "A": "Hipopotasemia, hiponatremia, hiperuricemia (con riesgo de desencadenar crisis de gota) e hiperglucemia leve.",
      "B": "Hiperpotasemia severa con hipouricemia e hipoglucemia extrema.",
      "C": "Hipercalcemia mortal con descenso de todos los lípidos plasmáticos.",
      "D": "Las tiazidas no modifican ningún ion ni metabolito en sangre."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las tiazidas inhiben el cotransportador Na+/Cl- en el túbulo contorneado distal, aumentando la excreción de sodio, agua y potasio (hipopotasemia e hiponatremia). Compiten con el ácido úrico por los transportadores de secreción tubular orgánica proximal, elevando el ácido úrico en sangre (hiperuricemia). Además, la depleción de potasio disminuye la liberación de insulina pancreática, favoreciendo la hiperglucemia.",
    "officialGuidelineRef": "Guía Clínica de Hipertensión Arterial, MINSAL, Manejo de Diuréticos.",
    "distractorRationale": {
      "A": "Correcto. Hipopotasemia, hiponatremia, hiperuricemia e hiperglucemia son las alteraciones tiazídicas típicas.",
      "B": "Las tiazidas excretan potasio (no causan hiperpotasemia) y retienen ácido úrico.",
      "C": "Pueden elevar levemente el calcio al aumentar su reabsorción tubular, pero no de forma letal rutinaria.",
      "D": "Las alteraciones hidroelectrolíticas son farmacológicamente inherentes a su mecanismo de acción."
    }
  },
  {
    "id": "hta-14",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Hipertensión Sistólica Aislada en el Adulto Mayor",
    "statement": "En un paciente de 75 años con registro de PA en 155/75 mmHg, ¿cómo se denomina este fenotipo clínico y cuál es su principal mecanismo fisiopatológico subyacente?",
    "options": {
      "A": "Hipertensión Sistólica Aislada (PAS >= 140 con PAD < 90 mmHg), producida por el envejecimiento vascular, aterosclerosis y pérdida de la distensibilidad elástica de la aorta y grandes arterias.",
      "B": "Hipertensión Diastólica Secundaria por feocromocitoma.",
      "C": "Hipotensión Sistólica Fisiológica sin ninguna relevancia clínica.",
      "D": "Valores enteramente ideales para una persona mayor que no ameritan ninguna intervención."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Hipertensión Sistólica Aislada es la forma más común de HTA en adultos mayores de 65 años. Se debe a la esclerosis y calcificación de la túnica media aórtica (arteriosclerosis), que reduce la distensibilidad elástica de amortiguación durante la sístole, incrementando la onda de pulso reflejada sistólica y reduciendo la presión diastólica. Es un potente factor de riesgo de EVC y demencia vascular.",
    "officialGuidelineRef": "Guía de Manejo del Adulto Mayor Hipertenso, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La rigidez arterial aórtica senil explica la hipertensión sistólica aislada.",
      "B": "La presión diastólica está en 75 mmHg (< 90), descartando HTA diastólica.",
      "C": "La presión sistólica está muy elevada (155 mmHg), no hipotensa.",
      "D": "La PAS >= 140 duplica el riesgo de accidente cerebrovascular e infarto en ancianos."
    }
  },
  {
    "id": "hta-15",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Patrón Dipper en Monitoreo Ambulatorio de Presión Arterial (MAPA)",
    "statement": "En el informe de un Monitoreo Ambulatorio de Presión Arterial (MAPA) de 24 horas, ¿qué define a un paciente con patrón \"Dipper\" normal?",
    "options": {
      "A": "Un descenso fisiológico de la presión arterial media nocturna entre el 10% y el 20% con respecto al promedio diurno.",
      "B": "Un aumento de la presión arterial nocturna mayor al 50% respecto al día.",
      "C": "La ausencia total de latidos cardíacos durante el sueño.",
      "D": "Valores fijos e idénticos de presión arterial durante todas las horas del día y la noche."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En condiciones fisiológicas sanas, la actividad simpática disminuye durante el sueño profundo, condicionando un descenso fisiológico de la presión arterial nocturna del 10% al 20% respecto a la vigilia (patrón Dipper). Los pacientes \"non-dipper\" (descenso < 10%) o \"riser\" (la presión sube de noche) tienen un riesgo cardiovascular y de daño renal significativamente mayor.",
    "officialGuidelineRef": "MINSAL, Lineamientos para el Diagnóstico Ambulatorio de HTA (MAPA y AMPA).",
    "distractorRationale": {
      "A": "Correcto. La caída nocturna del 10% al 20% define el patrón dipper fisiológico.",
      "B": "El aumento nocturno define el patrón \"riser\" o invertido, de muy alto riesgo.",
      "C": "Incompatible con la vida.",
      "D": "La presión arterial es una variable biológica continua con ritmo circadiano dinámico."
    }
  },
  {
    "id": "hta-16",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Hipertensión de Bata Blanca vs Hipertensión Enmascarada",
    "statement": "¿Cuál es la definición clínica de HIPERTENSIÓN ENMASCARADA en la práctica ambulatoria de atención primaria?",
    "options": {
      "A": "Presión arterial que se encuentra en rangos normales en la consulta médica de la UCSF (< 140/90 mmHg), pero persistentemente elevada en el monitoreo ambulatorio diurno en el hogar o trabajo (AMPA/MAPA).",
      "B": "Presión arterial elevada exclusivamente en presencia del médico y normal en el hogar.",
      "C": "Uso de mascarilla quirúrgica durante la toma de signos vitales.",
      "D": "Hipertensión que ocurre únicamente los fines de semana durante las comidas familiares."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Hipertensión Enmascarada u oculta se define por cifras normales en el consultorio (< 140/90 mmHg) pero cifras hipertensivas fuera del entorno médico (MAPA diurno >= 135/85 mmHg o AMPA en casa). Se asocia a un riesgo cardiovascular casi idéntico al de la hipertensión sostenida y suele pasar desapercibida si no se sospecha ante daño a órgano blanco no explicado.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico de HTA, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Normal en la clínica y elevada en el ambiente habitual define la hipertensión enmascarada.",
      "B": "Corresponde a la Hipertensión de Bata Blanca (reacción de alarma en consulta).",
      "C": "Distractor literal erróneo.",
      "D": "No constituye una entidad médica validada."
    }
  },
  {
    "id": "hta-17",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Selección Farmacológica en Paciente Post-Infarto Agudo",
    "statement": "En un paciente hipertenso con antecedente de infarto agudo de miocardio hace 6 meses, ¿qué grupos farmacológicos antihipertensivos tienen indicación obligatoria de primera línea con grado de recomendación IA por reducir la mortalidad y prevenir el remodelado ventricular adverso?",
    "options": {
      "A": "Betabloqueadores cardioselectivos (Atenolol, Metoprolol, Bisoprolol) e Inhibidores de la ECA (Enalapril).",
      "B": "Doxazosina y terazosina en monoterapia.",
      "C": "Hidralazina oral sola sin ningún betabloqueador.",
      "D": "Aspirina en megadosis de 5 gramos diarios sin ningún antihipertensivo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En el paciente post-infarto, los betabloqueadores reducen el consumo miocárdico de oxígeno, previenen arritmias ventriculares y muerte súbita. Los IECAs bloquean el remodelado patológico del ventrículo izquierdo y la dilatación progresiva. Ambos grupos han demostrado de manera contundente reducir la mortalidad global y cardiovascular en cardiopatía isquémica.",
    "officialGuidelineRef": "Guía Clínica de Cardiopatía Isquémica e Hipertensión Arterial, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Betabloqueador + IECA es la combinación fundamental con evidencia IA post-IAM.",
      "B": "Los alfabloqueadores periféricos no reducen la mortalidad cardiovascular post-infarto.",
      "C": "La hidralazina sola induce taquicardia refleja e incrementa el consumo de oxígeno miocárdico.",
      "D": "Megadosis de aspirina son tóxicas y no controlan la presión arterial."
    }
  },
  {
    "id": "hta-18",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Tercer Fármaco en HTA con Insuficiencia Cardíaca",
    "statement": "En un paciente hipertenso con Insuficiencia Cardíaca con Fracción de Eyección Reducida (ICFEr < 40%) que ya recibe Enalapril, Carvedilol y Furosemida pero persiste hipertenso (PA 145/92 mmHg) y con síntomas clase funcional II de la NYHA, ¿cuál es el tercer fármaco modificador de la enfermedad recomendado?",
    "options": {
      "A": "Espironolactona (antagonista del receptor de mineralocorticoides) a 25 mg/día, monitorizando potasio sérico y función renal.",
      "B": "Diltiazem o Verapamilo intravenoso para frenar la contractilidad.",
      "C": "Antiinflamatorios no esteroideos (Ibuprofeno 800 mg c/8h).",
      "D": "Prednisona oral a dosis inmunosupresoras continuas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En la ICFEr, la espironolactona (o eplerenona) bloquea los efectos fibróticos, remodeladores y proarrítmicos de la aldosterona en el miocardio y los vasos. Añadida a IECA y betabloqueador, reduce significativamente la mortalidad y las hospitalizaciones por falla cardíaca en pacientes sintomáticos con TFGe > 30 y K+ < 5.0 mEq/L.",
    "officialGuidelineRef": "Guía de Insuficiencia Cardíaca Crónica, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La espironolactona es uno de los cuatro pilares farmacológicos de la falla cardíaca.",
      "B": "Verapamilo y diltiazem tienen efecto inotrópico negativo y están contraindicados en ICFEr.",
      "C": "Los AINEs retienen sodio y agua, precipitando descompensación aguda y daño renal.",
      "D": "Los glucocorticoides promueven retención hídrica y empeoran la insuficiencia cardíaca."
    }
  },
  {
    "id": "hta-19",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Contraindicación de Betabloqueadores No Selectivos en Asma",
    "statement": "¿Por qué está contraindicada la administración de betabloqueadores no selectivos (como Propranolol) en pacientes hipertensos con antecedente de Asma Bronquial o EPOC con componente espástico severo?",
    "options": {
      "A": "Porque bloquean los receptores beta-2 del músculo liso bronquial, inhibiendo la broncodilatación fisiológica y desencadenando broncoespasmo agudo severo potencialmente letal.",
      "B": "Porque transforman el asma en fibrosis quística pulmonar.",
      "C": "Porque aumentan la absorción de polvo en la vía aérea superior.",
      "D": "Porque inhiben la tos impidiendo que el paciente hable."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los receptores beta-2 adrenérgicos median la relajación del músculo liso bronquial. Los betabloqueadores no cardioselectivos (Propranolol, Nadolol, Timolol) bloquean simultáneamente los receptores beta-1 cardíacos y beta-2 bronquiales, provocando broncoconstricción intensa, refractariedad a los agonistas inhalados (salbutamol) y crisis asmática fatal.",
    "officialGuidelineRef": "Guía Clínica de Hipertensión Arterial, MINSAL, Contraindicaciones Farmacológicas.",
    "distractorRationale": {
      "A": "Correcto. El bloqueo de receptores beta-2 bronquiales desencadena broncoespasmo potencialmente mortal.",
      "B": "La fibrosis quística es una enfermedad genética autosómica recesiva del canal CFTR.",
      "C": "Mecanismo físico inexistente.",
      "D": "No tienen propiedades supresoras motoras del lenguaje."
    }
  },
  {
    "id": "hta-20",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Sospecha Clínica de Estenosis de la Arteria Renal",
    "statement": "Un paciente de 65 años con HTA de difícil control inicia tratamiento con Enalapril. En el examen de control a las 2 semanas, su creatinina sérica se elevó bruscamente de 1.1 mg/dL a 2.6 mg/dL (aumento > 100%), con deterioro de la función renal y soplo abdominal audible en epigastrio. ¿Cuál es el diagnóstico más probable?",
    "options": {
      "A": "Estenosis bilateral de arterias renales (o estenosis en riñón único), donde la filtración glomerular dependía de la vasoconstricción de la arteriola eferente mediada por angiotensina II.",
      "B": "Deshidratación leve por transpiración que se cura bebiendo un refresco.",
      "C": "Cistitis bacteriana aguda por Escherichia coli.",
      "D": "Cálculo de ácido úrico en uretra distal."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En la estenosis de arteria renal bilateral crítica, la presión de perfusión glomerular cae drásticamente y la tasa de filtración glomerular solo se sostiene gracias a la vasoconstricción compensatoria de la arteriola eferente mediada por angiotensina II. Al administrar un IECA o ARA-II, se suprime esta vasoconstricción, la presión hidrostática intraglomerular colapsa y sobreviene insuficiencia renal aguda hemodinámica con soplo vascular en flancos/epigastrio.",
    "officialGuidelineRef": "Guía de Diagnóstico de Hipertensión Secundaria, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. El deterioro agudo renal > 30-50% con IECA y soplo abdominal es clásico de estenosis arterial renal.",
      "B": "Una elevación de creatinina superior al doble no se explica por transpiración leve.",
      "C": "La cistitis no eleva bruscamente la creatinina ni produce soplos abdominales.",
      "D": "Un cálculo uretral produce dolor miccional y retención urinaria baja, no este cuadro hemodinámico."
    }
  },
  {
    "id": "hta-21",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Hiperaldosteronismo Primario (Síndrome de Conn)",
    "vignette": "Paciente femenina de 42 años sin comorbilidades presenta HTA refractaria a triple esquema farmacológico. Los exámenes de laboratorio revelan potasio sérico en 2.8 mEq/L (hipopotasemia marcada no explicada por diuréticos), sodio en 144 mEq/L y bicarbonato sérico en 32 mEq/L (alcalosis metabólica).",
    "statement": "¿Cuál es la causa de hipertensión secundaria más probable que debe investigarse?",
    "options": {
      "A": "Hiperaldosteronismo primario (Síndrome de Conn / adenoma suprarrenal productor de aldosterona).",
      "B": "Hipotiroidismo primario descompensado por deficiencia de yodo.",
      "C": "Insuficiencia suprarrenal primaria (Enfermedad de Addison).",
      "D": "Deficiencia dietética de potasio por comer únicamente manzanas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El hiperaldosteronismo primario se caracteriza por secreción autónoma de aldosterona no suprimible, que estimula el canal ENaC en el túbulo colector renal, provocando reabsorción masiva de sodio y agua (con hipertensión y supresión de renina) y excreción excesiva de potasio e hidrogeniones (hipopotasemia y alcalosis metabólica). Se confirma mediante la relación aldosterona/renina plasmática.",
    "officialGuidelineRef": "Guía de Hipertensión Arterial Secundaria, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La triada de HTA resistente, hipopotasemia espontánea y alcalosis metabólica orienta a hiperaldosteronismo.",
      "B": "El hipotiroidismo cursa con ganancia de peso, piel seca, bradicardia y no produce hipopotasemia con alcalosis.",
      "C": "La enfermedad de Addison cursa con hipotensión e hiperpotasemia, lo contrario al cuadro.",
      "D": "La deficiencia nutricional aislada pura de potasio es excepcionalmente rara sin pérdidas renales o digestivas."
    }
  },
  {
    "id": "hta-22",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Feocromocitoma: Triada Clásica Paroxística",
    "statement": "¿Cuál es la tríada sintomática clásica que, cuando se presenta de forma paroxística asociada a crisis hipertensivas severas y lábiles, sugiere fuertemente la presencia de un Feocromocitoma?",
    "options": {
      "A": "Cefalea pulsátil intensa, diaforesis profusa (sudoración) y palpitaciones taquicárdicas paroxísticas.",
      "B": "Prurito ocular, rinorrea hialina y estornudos en salva.",
      "C": "Aumento de peso de 20 kg, somnolencia extrema y mixedema pretibial.",
      "D": "Hematemesis masiva, melena y ascitis con red venosa colateral."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El feocromocitoma es un tumor neuroendocrino de la médula suprarrenal productor de catecolaminas (adrenalina y noradrenalina). Su presentación clásica consiste en paroxismos de cefalea intensa, sudoración profusa y palpitaciones/taquicardia con hipertensión grave lábil. El diagnóstico se tamiza con metanefrinas libres en plasma o fraccionadas en orina de 24 horas.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico de HTA Secundaria, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Cefalea, diaforesis y palpitaciones paroxísticas constituyen la triada clásica de feocromocitoma.",
      "B": "Corresponde a una rinitis alérgica estacional.",
      "C": "Signos clásicos de hipotiroidismo severo / mixedema.",
      "D": "Manifestaciones de cirrosis hepática con hipertensión portal y varices esofágicas sangrantes."
    }
  },
  {
    "id": "hta-23",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Definición de Hipertensión Arterial Resistente",
    "statement": "¿Cuál es la definición clínica estricta de HIPERTENSIÓN ARTERIAL RESISTENTE o REFRACTARIA según las guías del MINSAL?",
    "options": {
      "A": "Cifras de PA que se mantienen por encima de las metas terapéuticas (>= 140/90 mmHg) a pesar del uso simultáneo de 3 fármacos antihipertensivos de diferentes clases a dosis óptimas (uno de los cuales debe ser obligatoriamente un diurético), o pacientes que requieren 4 o más fármacos para alcanzar la meta.",
      "B": "Pacientes que se niegan a tomar los medicamentos por motivos religiosos.",
      "C": "Pacientes con PA de 135/85 mmHg que toman únicamente medio comprimido de Enalapril de 5 mg al mes.",
      "D": "Pacientes cuya presión arterial no baja tras haber trotado 100 metros en la playa."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La HTA resistente se define formalmente como la falta de control tensional (PA >= 140/90 mmHg) a pesar de adherencia confirmada a un esquema de al menos tres fármacos antihipertensivos de familias distintas a dosis máximas toleradas, incluyendo un diurético (típicamente IECA/ARA-II + BCC + tiazida). Exige descartar pseudorresistencia (mala técnica, adherencia deficiente, bata blanca) e investigar HTA secundaria.",
    "officialGuidelineRef": "Guía de Hipertensión Arterial Resistente, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Tres fármacos a dosis plenas incluyendo un diurético define la HTA resistente.",
      "B": "Eso define incumplimiento terapéutico / falta de adherencia voluntaria, no resistencia farmacológica.",
      "C": "Subdosificación extrema que no constituye un tratamiento estándar.",
      "D": "Respuesta hemodinámica al esfuerzo no relacionada con la definición."
    }
  },
  {
    "id": "hta-24",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Restricción Dietética de Sodio y Dieta DASH",
    "statement": "En la consejería nutricional para pacientes hipertensos en la UCSF, ¿cuál es el límite máximo de sal común (cloruro de sodio) y de sodio elemental recomendado al día por el MINSAL y la OMS para coadyuvar al control tensional?",
    "options": {
      "A": "Menos de 5 gramos de sal común al día (equivalente a menos de 2 gramos de sodio elemental al día, aproximadamente una cucharadita cafetera rasa).",
      "B": "Menos de 50 gramos de sal común al día.",
      "C": "Consumo libre e ilimitado de alimentos ultraprocesados y sopas instantáneas con glutamato monosódico.",
      "D": "Cero gramos absolutos de cualquier mineral durante toda la vida."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La reducción de sodio en la dieta disminuye la retención de agua intravascular y la rigidez arterial. Las recomendaciones universales fijan la ingesta en < 5 g de sal común (NaCl) al día, lo que equivale a < 2 g de sodio elemental. La dieta DASH (rica en frutas, verduras, lácteos descremados y baja en grasas saturadas) puede reducir la PAS entre 8 y 14 mmHg.",
    "officialGuidelineRef": "Guía de Promoción de Estilos de Vida Saludables y Nutrición, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. < 5 g de sal (< 2 g de sodio) al día es la meta nutricional estándar en hipertensión.",
      "B": "50 gramos es una ingesta excesiva masiva altamente peligrosa.",
      "C": "Los alimentos ultraprocesados y sopas de fideos instantáneas contienen hasta 2-3 veces el sodio diario en una porción.",
      "D": "La restricción absoluta de sodio causaría hiponatremia severa incompatible con la homeostasis."
    }
  },
  {
    "id": "hta-25",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Retinopatía Hipertensiva: Clasificación de Keith-Wagener-Barker",
    "statement": "Al realizar el fondo de ojo a un paciente hipertenso descompensado, ¿qué hallazgo oftalmológico clasifica el cuadro como Retinopatía Hipertensiva Grado IV de Keith-Wagener-Barker, confirmando una Emergencia Hipertensiva por edema cerebral o malignización?",
    "options": {
      "A": "Edema de papila (papiledema con borramiento de los bordes del disco óptico) asociado a exudados algodonosos y hemorragias en llama.",
      "B": "Discreto estrechamiento arteriolar focal (Grado I).",
      "C": "Signos de cruce arteriovenoso patológico de Gunn (Grado II).",
      "D": "Ausencia total de vasos sanguíneos en toda la retina de nacimiento."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La clasificación de Keith-Wagener-Barker gradúa el daño retiniano en: Grado I (estrechamiento arteriolar leve); Grado II (cruces AV patológicos); Grado III (hemorragias retinianas, exudados algodonosos y duros); y Grado IV (presencia de PAPILEDEMA / edema de papila). El papiledema refleja hipertensión intracraneal o encefalopatía hipertensiva maligna y exige manejo hospitalario urgente.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Manejo de la HTA, MINSAL, Examen de Fondo de Ojo.",
    "distractorRationale": {
      "A": "Correcto. El papiledema es el marcador definitorio del Grado IV de retinopatía hipertensiva.",
      "B": "Corresponde a Grado I.",
      "C": "Corresponde a Grado II.",
      "D": "Cuadro incompatible con la anatomía ocular humana."
    }
  },
  {
    "id": "hta-26",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Manejo Inicial de la Encefalopatía Hipertensiva",
    "vignette": "Paciente de 48 años ingresa al servicio de urgencias hospitalario con PA 220/130 mmHg, cefalea intensa, vómitos en proyectil, confusión mental y retinopatía grado IV con papiledema. Se diagnostica Encefalopatía Hipertensiva (Emergencia Hipertensiva).",
    "statement": "¿Cuál es la meta de reducción hemodinámica segura normada durante la primera hora de infusión con antihipertensivos parenterales (como Labetalol o Nicardipino)?",
    "options": {
      "A": "Reducir la Presión Arterial Media (PAM) no más del 20% al 25% durante la primera hora, o alcanzar una PA diastólica de 100-110 mmHg, evitando descensos mayores para no inducir infartos cerebrales en zonas limítrofes.",
      "B": "Reducir la presión arterial inmediatamente a 90/60 mmHg en los primeros 5 minutos.",
      "C": "Aumentar la presión arterial con noradrenalina para forzar la perfusión cerebral.",
      "D": "No bajar la presión arterial durante las primeras 72 horas bajo ninguna circunstancia."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En la encefalopatía hipertensiva, la curva de autorregulación del flujo sanguíneo cerebral está desplazada hacia la derecha. Si se normaliza bruscamente la PA, la presión de perfusión cae por debajo del umbral crítico de autorregulación, desencadenando isquemia cerebral global. La regla de oro es reducir la PAM un máximo del 20-25% en la primera hora, y luego hacia 160/100 mmHg en las siguientes 2 a 6 horas.",
    "officialGuidelineRef": "Guía de Manejo de Emergencias Hipertensivas, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Reducción controlada del 20-25% de la PAM en la 1ª hora para preservar la perfusión cerebral.",
      "B": "Caída precipitada que induce infarto cerebral extenso y muerte.",
      "C": "Los vasopresores agravarían la hemorragia intracraneal y el edema cerebral.",
      "D": "La inacción terapéutica prolongaría la encefalopatía hacia herniación cerebral y muerte."
    }
  },
  {
    "id": "hta-27",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Fármacos Contraindicados en Hipertensión y Embarazo",
    "statement": "¿Por qué los IECAs (Enalapril) y ARA-II (Losartán) están TERMINANTEMENTE CONTRAINDICADOS en el segundo y tercer trimestre del embarazo?",
    "options": {
      "A": "Porque causan fetopatía grave caracterizada por oligohidramnios severo, disgenesia tubular renal, hipoplasia pulmonar, retraso del crecimiento intrauterino y muerte fetal.",
      "B": "Porque provocan que el recién nacido nazca con dientes supernumerarios.",
      "C": "Porque aumentan excesivamente el tamaño de la placenta hasta romper el útero.",
      "D": "Porque transforman la sangre fetal en leche materna."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los IECAs y ARA-II atraviesan libremente la placenta. En el feto, el sistema renina-angiotensina es indispensable para el desarrollo renal normal y el mantenimiento de la perfusión renal fetal. Su bloqueo farmacológico produce fallo renal fetal con anuria, lo que resulta en oligohidramnios severo (falta de líquido amniótico), hipoplasia pulmonar y deformidades de Potter. Son fármacos teratogénicos categoría D/X.",
    "officialGuidelineRef": "Guía de Trastornos Hipertensivos del Embarazo, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La fetopatía por bloqueo del SRAA fetal (oligohidramnios e hipoplasia pulmonar) es letal.",
      "B": "Efecto secundario ficticio.",
      "C": "No inducen hipertrofia placentaria destructiva.",
      "D": "Distractor absurdo sin base biológica."
    }
  },
  {
    "id": "hta-28",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Interacción de AINEs con Antihipertensivos",
    "vignette": "Un paciente hipertenso controlado con Enalapril y Amlodipino inicia automedicación con Ibuprofeno 600 mg tres veces al día por dolor de rodilla. A las 2 semanas, su PA se descontrola elevándose a 155/95 mmHg y se constata aumento de 2 kg de peso por retención de líquidos.",
    "statement": "¿Cuál es la base farmacológica de esta interacción adversa?",
    "options": {
      "A": "Los AINEs inhiben las prostaglandinas renales (PGE2 y PGI2) que median la vasodilatación y la natriuresis, reduciendo el flujo sanguíneo renal, reteniendo sodio y atenuando el efecto hipotensor de los antihipertensivos.",
      "B": "El ibuprofeno estimula directamente los receptores beta-1 cardíacos como si fuera adrenalina.",
      "C": "Los AINEs destruyen físicamente las moléculas de Enalapril en el estómago.",
      "D": "El ibuprofeno bloquea la absorción de agua en el colon provocando deshidratación hipertensiva."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las prostaglandinas renales vasodilatadoras (PGE2 y prostaciclina PGI2) son esenciales para contrarrestar la vasoconstricción y mantener la excreción tubular de sodio, especialmente en pacientes hipertensos o bajo IECAs. Al inhibir la COX-1 y COX-2, los AINEs suprimen estas prostaglandinas protectoras, induciendo retención de agua/sodio, elevación de la PA en 5 a 10 mmHg y riesgo de insuficiencia renal aguda.",
    "officialGuidelineRef": "Guía Clínica de Farmacoterapia en HTA e Interacciones, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La inhibición de prostaglandinas renales vasodilatadoras causa retención salina e hipertensión.",
      "B": "Los AINEs no son agonistas simpaticomiméticos beta-1.",
      "C": "No existe degradación química estomacal directa entre estos fármacos.",
      "D": "El cuadro se asocia a retención de líquidos y aumento ponderal, no a deshidratación colónica."
    }
  },
  {
    "id": "hta-29",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Criterios Electrocardiográficos de Hipertrofia Ventricular Izquierda",
    "statement": "En la lectura del electrocardiograma de un paciente hipertenso crónico, ¿cuál es el cálculo del Índice de Sokolow-Lyon que confirma hipertrofia ventricular izquierda (HVI)?",
    "options": {
      "A": "Amplitud de la onda S en derivación V1 + amplitud de la onda R en derivación V5 o V6 >= 35 mm (3.5 mV).",
      "B": "Amplitud de la onda P en DII mayor a 2.5 mm.",
      "C": "Duración del intervalo PR menor a 0.12 segundos.",
      "D": "Presencia de onda Q en todas las derivaciones sin voltaje alguno."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El índice de Sokolow-Lyon es uno de los criterios electrocardiográficos de voltaje más utilizados para el tamizaje de HVI en atención primaria. Se calcula sumando la profundidad de la onda S en V1 y la altura de la onda R en V5 o V6 (la que sea mayor). Un valor >= 35 mm (en mayores de 35 años) confirma sobrecarga y crecimiento ventricular izquierdo por HTA crónica.",
    "officialGuidelineRef": "Guía de Diagnóstico Electrocardiográfico en Atención Primaria, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. S en V1 + R en V5/V6 >= 35 mm es el criterio canónico de Sokolow-Lyon.",
      "B": "Criterio de crecimiento auricular derecho (P pulmonale).",
      "C": "Criterio de conducción AV acelerada o preexcitación (Síndrome de Wolff-Parkinson-White).",
      "D": "Patrón de necrosis transmural difusa o mala técnica de calibración."
    }
  },
  {
    "id": "hta-30",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Estratificación del Riesgo Cardiovascular Global",
    "statement": "¿Por qué la estratificación del Riesgo Cardiovascular Global mediante las tablas de predicción de la OPS/OMS adaptadas por el MINSAL es el pilar fundamental para decidir el tratamiento de la HTA en el primer nivel?",
    "options": {
      "A": "Porque el riesgo absoluto de sufrir un infarto o EVC depende del efecto sinérgico acumulativo de múltiples factores (edad, sexo, tabaquismo, PA, diabetes, colesterol) y no de la cifra de presión arterial aislada.",
      "B": "Porque permite predecir con exactitud el día y la hora en que el paciente va a fallecer.",
      "C": "Porque se utiliza únicamente para clasificar a los pacientes según su nivel de ingresos económicos.",
      "D": "Porque las tablas de riesgo permiten prescindir totalmente de los medicamentos en el 100% de los casos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La enfermedad cardiovascular es de etiología multifactorial. Un paciente con PA en 142/92 mmHg pero que además es diabético, fuma y tiene dislipidemia tiene un riesgo a 10 años mucho mayor de morir por infarto que un joven con 150/90 mmHg sin otros factores. La estratificación del riesgo global (bajo < 10%, moderado 10-20%, alto 20-30%, muy alto > 30%) guía la intensidad del tratamiento farmacológico y las metas.",
    "officialGuidelineRef": "Lineamientos Técnicos para el Abordaje del Riesgo Cardiovascular Global, MINSAL / OPS.",
    "distractorRationale": {
      "A": "Correcto. El abordaje integral del riesgo multifactorial determina la agresividad del tratamiento.",
      "B": "La epidemiología estima probabilidades poblacionales a 10 años, no eventos deterministas individuales puntuales.",
      "C": "Las tablas miden variables biológicas y hábitos de salud, no estratos socioeconómicos.",
      "D": "El alto riesgo cardiovascular exige farmacoterapia combinada inmediata."
    }
  },
  {
    "id": "dm-01",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Criterios Diagnósticos Confirmatorios de Diabetes Tipo 2",
    "statement": "De acuerdo con la Guía Clínica Oficial para la Atención Integral de la Diabetes Mellitus Tipo 2 del MINSAL, ¿cuál de los siguientes hallazgos de laboratorio confirma el diagnóstico de diabetes en un paciente asintomático en una consulta de tamizaje?",
    "options": {
      "A": "Glucemia plasmática en ayunas >= 126 mg/dL confirmada en dos días diferentes.",
      "B": "Glucemia capilar casual al azar de 105 mg/dL en una sola toma.",
      "C": "Hemoglobina glucosilada (HbA1c) de 5.8% estandarizada por NGSP.",
      "D": "Glucemia plasmática a las 2 horas post-carga de 75 g de glucosa de 135 mg/dL."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los criterios diagnósticos universales adoptados por el MINSAL estipulan: 1) Glucemia plasmática en ayunas >= 126 mg/dL (confirmada con una segunda prueba en día distinto si no hay crisis hiperglucémica franca); 2) Glucemia a las 2 horas de una curva de tolerancia oral a la glucosa con 75 g >= 200 mg/dL; 3) HbA1c >= 6.5%; o 4) Síntomas clásicos de hiperglucemia (poliuria, polidipsia, pérdida de peso) más glucemia al azar >= 200 mg/dL.",
    "officialGuidelineRef": "Guía Clínica de Diabetes Mellitus Tipo 2, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Glucemia en ayunas >= 126 mg/dL repetida en dos ocasiones confirma el diagnóstico.",
      "B": "105 mg/dL en ayunas representa glucemia alterada en ayunas (prediabetes), no diabetes.",
      "C": "5.8% está en el rango de prediabetes (5.7% a 6.4%); el punto de corte diagnóstico de diabetes es >= 6.5%.",
      "D": "135 mg/dL a las 2 horas es normal (< 140 mg/dL)."
    }
  },
  {
    "id": "dm-02",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Criterios de Laboratorio para Prediabetes",
    "statement": "¿Cuáles son los valores de laboratorio que definen las dos categorías de PREDIABETES (Glucemia Alterada en Ayunas e Intolerancia a la Glucosa) según las guías del MINSAL y de la Asociación Americana de Diabetes (ADA)?",
    "options": {
      "A": "Glucemia en ayunas entre 100 y 125 mg/dL (Glucemia Alterada en Ayunas) y/o glucemia a las 2 horas de la PTOG de 75 g entre 140 y 199 mg/dL (Intolerancia a la Glucosa), o HbA1c entre 5.7% y 6.4%.",
      "B": "Glucemia en ayunas entre 60 y 80 mg/dL con HbA1c menor a 4.0%.",
      "C": "Glucemia en ayunas mayor a 300 mg/dL con cetonuria masiva.",
      "D": "Glucemia que cambia de valor cada vez que el paciente parpadea."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La prediabetes engloba estados intermedios de resistencia a la insulina y disfunción de células beta que conllevan alto riesgo de progresión a diabetes tipo 2 y enfermedad cardiovascular. Se define por: 1) Glucemia en ayunas alterada: 100-125 mg/dL; 2) Intolerancia a la glucosa oral (PTOG 2h): 140-199 mg/dL; o 3) HbA1c: 5.7% a 6.4%. En esta fase, los cambios en el estilo de vida reducen la progresión en un 58%.",
    "officialGuidelineRef": "Guía Clínica de Diabetes Mellitus Tipo 2, MINSAL, Diagnóstico de Prediabetes.",
    "distractorRationale": {
      "A": "Correcto. Valores exactos estandarizados de prediabetes.",
      "B": "Cifras dentro de la normoglucemia basal o hipoglucemia leve.",
      "C": "Valores correspondientes a diabetes franca descompensada con cetoacidosis.",
      "D": "Distractor fisiológico falso."
    }
  },
  {
    "id": "dm-03",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Mecanismo de Acción de la Metformina",
    "statement": "¿Cuál es el mecanismo de acción celular y farmacológico primordial de la Metformina (biguanida) como fármaco de primera línea en la Diabetes Mellitus Tipo 2?",
    "options": {
      "A": "Activación de la proteína quinasa activada por AMP (AMPK) a nivel de los hepatocitos, lo que disminuye drásticamente la gluconeogénesis y glucogenólisis hepática, mejorando la sensibilidad periférica a la insulina.",
      "B": "Estimulación directa de la secreción de insulina por cierre de los canales de potasio dependientes de ATP en células beta.",
      "C": "Inhibición del cotransportador SGLT2 en el túbulo contorneado proximal para eliminar glucosa en orina.",
      "D": "Destrucción de los carbohidratos en la luz intestinal mediante enzimas artificiales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La metformina actúa principalmente en el hígado mediante la activación de la enzima AMPK intracelular y la inhibición del complejo I de la cadena respiratoria mitocondrial, suprimiendo la sobreproducción hepática basal de glucosa (gluconeogénesis). Además, incrementa la captación de glucosa mediada por GLUT4 en el músculo esquelético, no produce aumento de peso y presenta un riesgo intrínseco de hipoglucemia prácticamente nulo en monoterapia.",
    "officialGuidelineRef": "Guía Clínica de Atención Integral de la Diabetes Mellitus, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La activación de AMPK y la reducción de la gluconeogénesis hepática explican su efecto hipoglucemiante.",
      "B": "Corresponde al mecanismo secretagogo de las sulfonilureas (glibenclamida).",
      "C": "Mecanismo de los inhibidores de SGLT2 (dapagliflozina, empagliflozina).",
      "D": "Mecanismo no farmacológico; los inhibidores de alfa-glucosidasa (acarbosa) solo retrasan la digestión enzimática."
    }
  },
  {
    "id": "dm-04",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Contraindicación Renal y Ajuste de Dosis de Metformina",
    "statement": "¿A partir de qué nivel de Tasa de Filtración Glomerular estimada (TFGe) está CONTRAINDICADA de forma absoluta la Metformina por el riesgo inminente de provocar Acidosis Láctica potencialmente mortal?",
    "options": {
      "A": "TFGe menor a 30 mL/min/1.73m² (contraindicación absoluta); debiendo reducirse la dosis máxima a 1000 mg/día si la TFGe está entre 30 y 44 mL/min/1.73m².",
      "B": "TFGe menor a 90 mL/min/1.73m².",
      "C": "La metformina nunca se contraindica y puede darse a dosis plenas incluso en diálisis.",
      "D": "Solo se contraindica si la creatinina es exactamente 0.5 mg/dL."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La metformina se elimina inalterada por filtración glomerular y secreción tubular renal. Cuando la TFGe desciende por debajo de 30 mL/min/1.73m² (ERC estadios 4 y 5), el fármaco se acumula progresivamente en sangre, inhibiendo la oxidación mitocondrial del lactato y precipitando la temida Acidosis Láctica por Metformina (MALA), con una mortalidad del 30-50%.",
    "officialGuidelineRef": "Guía Clínica de Diabetes Mellitus y Enfermedad Renal, MINSAL / SRS.",
    "distractorRationale": {
      "A": "Correcto. TFGe < 30 contraindica absolutamente la metformina; ajuste a 1000 mg entre 30-44 mL/min.",
      "B": "TFGe de 90 es función renal normal que tolera dosis plenas de metformina.",
      "C": "Dar metformina en diálisis o falla renal avanzada genera acidosis láctica fatal.",
      "D": "0.5 mg/dL es un valor de creatinina normal/bajo."
    }
  },
  {
    "id": "dm-05",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Tolerancia Gastrointestinal y Titulación de Metformina",
    "vignette": "Paciente de 50 años a quien se le prescribe Metformina 850 mg dos veces al día refiere náuseas, plenitud gástrica, sabor metálico y diarrea acuosa a los 3 días de iniciar el tratamiento, queriendo abandonar el fármaco.",
    "statement": "¿Cuál es la estrategia recomendada por el MINSAL para prevenir y superar estos efectos adversos gastrointestinales frecuentes?",
    "options": {
      "A": "Titulación lenta y progresiva: iniciar con dosis baja (425 mg o 500 mg una vez al día) administrada siempre durante o inmediatamente después de las comidas principales, aumentando gradualmente cada 1 a 2 semanas según tolerancia.",
      "B": "Duplicar la dosis a 3000 mg/día en ayunas estrictas para saturar los receptores.",
      "C": "Suspender permanentemente todo tratamiento antidiabético y recomendar dieta de solo jugos de caña.",
      "D": "Reemplazar la metformina por dexametasona oral en dosis altas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los efectos gastrointestinales (diarrea, dispepsia, náuseas) ocurren en hasta el 25% de los pacientes al inicio de la metformina debido a irritación local y aumento del GLP-1 y serotonina intestinal. Son transitorios y se mitigan de forma drástica si el medicamento se toma con alimentos y se introduce con titulación paulatina semanal (iniciando con 500 mg con la cena).",
    "officialGuidelineRef": "Guía Clínica para la Atención Integral de la DM2, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La titulación gradual con las comidas minimiza los síntomas gastrointestinales y asegura la adherencia.",
      "B": "Aumentar la dosis en ayunas agravaría severamente la diarrea y el malestar gástrico.",
      "C": "El jugo de caña contiene sacarosa pura que causaría hiperglucemia severa.",
      "D": "La dexametasona es un corticoide potente con efecto hiperglucemiante severo."
    }
  },
  {
    "id": "dm-06",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Deficiencia Nutricional Crónica por Uso Prolongado de Metformina",
    "statement": "En pacientes que han tomado Metformina de forma continua durante más de 3 a 5 años, ¿qué deficiencia vitamínica específica debe monitorizarse periódicamente en sangre debido a que el fármaco interfiere con su absorción ileal dependiente de calcio?",
    "options": {
      "A": "Deficiencia de Vitamina B12 (Cobalamina), que puede causar anemia megaloblástica y empeorar o simular una neuropatía periférica diabética.",
      "B": "Deficiencia de Vitamina C causante de escorbuto fulminante.",
      "C": "Exceso tóxico de Vitamina A con calcificación ósea.",
      "D": "Deficiencia de Vitamina K con hemorragias espontáneas en las encías."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La metformina altera la captación dependiente de calcio del complejo factor intrínseco-vitamina B12 en la mucosa del íleon terminal, reduciendo los niveles séricos de cobalamina en hasta un 30% de los usuarios crónicos. Esta hipovitaminosis B12 puede provocar parestesias y ataxia sensitiva que se confunden con progresión de la neuropatía diabética, por lo que el MINSAL y la ADA recomiendan medir niveles séricos de B12 anualmente.",
    "officialGuidelineRef": "Guía Clínica de Diabetes Mellitus Tipo 2, MINSAL / ADA Standards of Care.",
    "distractorRationale": {
      "A": "Correcto. La deficiencia de vitamina B12 y su consecuente neuropatía/anemia megaloblástica es un efecto adverso clásico.",
      "B": "La absorción de ácido ascórbico no se afecta por metformina.",
      "C": "La metformina no induce hipervitaminosis A.",
      "D": "La vitamina K no se ve alterada por la metformina."
    }
  },
  {
    "id": "dm-07",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Riesgos de las Sulfonilureas (Glibenclamida)",
    "statement": "¿Cuál es la razón principal por la que las guías clínicas contemporáneas del MINSAL desaconsejan el uso de Glibenclamida en adultos mayores de 65 años o pacientes con insuficiencia renal?",
    "options": {
      "A": "Porque posee una vida media biológica prolongada y metabolitos activos de eliminación renal que provocan hipoglucemias severas, prolongadas y potencialmente mortales en ancianos con apetito irregular o fallo renal.",
      "B": "Porque causa ceguera nocturna instantánea tras la primera toma.",
      "C": "Porque la glibenclamida neutraliza los efectos de los antibióticos penicilínicos.",
      "D": "Porque disuelve el esmalte de los dientes superiores."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La glibenclamida es una sulfonilurea de segunda generación con unión de alta afinidad al receptor SUR1 y aclaramiento renal de metabolitos activos. En el adulto mayor o en presencia de TFGe disminuida, la eliminación se retrasa drásticamente, prolongando la estimulación de secreción de insulina y generando hipoglucemias refractarias que duran más de 24 a 48 horas, con secuelas neurológicas graves o infartos.",
    "officialGuidelineRef": "MINSAL, Lineamientos de Seguridad Farmacológica en Diabetes.",
    "distractorRationale": {
      "A": "Correcto. Las hipoglucemias prolongadas y fatales contraindican la glibenclamida en ancianos y falla renal.",
      "B": "No produce ceguera nocturna instantánea.",
      "C": "No tiene interacción farmacodinámica destructiva con penicilinas.",
      "D": "Efecto secundario inexistente."
    }
  },
  {
    "id": "dm-08",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Manejo Ambulatorio de la Hipoglucemia: Regla de los 15",
    "statement": "Un paciente diabético consciente presenta temblor distal, sudoración fría, palpitaciones y hambre intensa en su domicilio, corroborándose una glucemia capilar de 58 mg/dL (hipoglucemia leve-moderada). ¿Cuál es la \"Regla de los 15\" normada para su tratamiento inmediato?",
    "options": {
      "A": "Ingerir 15 gramos de carbohidratos simples de acción rápida (ej. 3 a 4 cucharaditas de azúcar disueltas en agua, o 120 mL de jugo de frutas), esperar 15 minutos en reposo y volver a medir la glucemia capilar; si persiste < 70 mg/dL, repetir la ingesta.",
      "B": "Comer 15 porciones de carne asada con grasa y esperar 15 horas.",
      "C": "Inyectarse 15 unidades de insulina rápida para quemar el azúcar remanente.",
      "D": "Correr durante 15 minutos a máxima velocidad sin detenerse."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La \"Regla de los 15\" es el estándar clínico universal para hipoglucemias leves/moderadas en pacientes conscientes: aportar 15 g de carbohidratos simples (monosacáridos/disacáridos sin grasa ni proteínas para no demorar la absorción gástrica), esperar 15 minutos (tiempo fisiológico para elevar la glucemia unos 30-45 mg/dL) y reevaluar. Una vez recuperada la cifra > 70 mg/dL, se debe consumir un refrigerio con carbohidratos complejos.",
    "officialGuidelineRef": "Guía Clínica de Manejo de la Hipoglucemia en DM2, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. 15 gramos de glucosa simple oral + reevaluación en 15 minutos es la regla terapéutica de oro.",
      "B": "Las proteínas y grasas no elevan rápidamente la glucosa y retardan el vaciamiento gástrico.",
      "C": "Inyectar insulina en hipoglucemia profundizaría el colapso provocando coma hipoglucémico y muerte.",
      "D": "El ejercicio físico consume más glucosa muscular, agravando la neuroglucopenia."
    }
  },
  {
    "id": "dm-09",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Manejo de la Hipoglucemia Severa Inconsciente",
    "vignette": "Paciente diabético de 68 años es traído en ambulancia a la UCSF inconsciente, estuporoso, diaforético y con convulsiones focales. La tira reactiva reporta glucemia capilar de 32 mg/dL. No es posible administrar nada por vía oral por riesgo de broncoaspiración.",
    "statement": "¿Cuál es el tratamiento parenteral inmediato de elección normado por el MINSAL?",
    "options": {
      "A": "Administración intravenosa inmediata de un bolo de Dextrosa al 33% o al 50% (50 mL en bolo lento), seguido de infusión continua de Solución Dextrosada al 10% con monitoreo glucémico seriado cada 15 a 30 minutos.",
      "B": "Infusión rápida de 2 litros de agua destilada sin solutos.",
      "C": "Aplicación de insulina NPH intramuscular profunda.",
      "D": "Esperar a que despierte espontáneamente para ofrecerle un vaso de leche."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La hipoglucemia severa con alteración de la conciencia es una emergencia neurológica vital (riesgo de daño neuronal permanente en corteza e hipocampo). La vía oral está proscrita por peligro de broncoaspiración masiva. El tratamiento de urgencia es el bolo IV de solución glucosada hiperosmolar (Dextrosa al 33% o 50%, aportando 20-25 g de glucosa), manteniendo luego una infusión de mantenimiento para evitar el rebote hipoglucémico.",
    "officialGuidelineRef": "Lineamientos Técnicos para el Manejo de Urgencias Metabólicas, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Bolo IV de dextrosa hipertrónica es el tratamiento de rescate neurológico de emergencia.",
      "B": "El agua destilada IV produce hemólisis intravascular masiva fatal.",
      "C": "La insulina profundizaría la neuroglucopenia letal.",
      "D": "El retraso terapéutico condiciona edema cerebral irreversible y muerte cerebral."
    }
  },
  {
    "id": "dm-10",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Tamizaje y Prevención de Pie Diabético con Monofilamento",
    "vignette": "En la consulta de control mensual del Club de Diabéticos de la UCSF, el médico procede a la evaluación neurológica sensitiva preventiva de las extremidades inferiores de un paciente diabético de larga data.",
    "statement": "¿Cuál es el instrumento clínico estandarizado por el MINSAL para evaluar la pérdida de la sensibilidad protectora en la planta del pie y prevenir úlceras neuropáticas?",
    "options": {
      "A": "El Monofilamento de Semmes-Weinstein de 10 gramos (calibre 5.07).",
      "B": "Una aguja de biopsia renal de 14 French.",
      "C": "Un termómetro de mercurio axilar.",
      "D": "Un diapasón de 10,000 Hertz para ultrasonido médico."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El monofilamento de nailon de Semmes-Weinstein calibrado para doblarse con una fuerza de 10 gramos (calibre 5.07) es el instrumento estándar recomendado internacionalmente y adoptado por el MINSAL para evaluar la sensibilidad táctil superficial y la presencia de neuropatía sensorial periférica. La incapacidad del paciente de percibir el contacto del monofilamento en sitios plantares clave indica pérdida de la sensibilidad protectora y riesgo elevado de desarrollar úlceras por presión y amputaciones.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención y Manejo del Pie Diabético, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. El monofilamento de 10 g es el estándar de tamizaje en atención primaria.",
      "B": "Una aguja de biopsia causaría daño tisular grave en un pie insensible.",
      "C": "El termómetro no evalúa la sensibilidad táctil neuropática.",
      "D": "La vibración se evalúa con diapasón de 128 Hz, no de 10,000 Hz."
    }
  },
  {
    "id": "dm-11",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Clasificación de Meggitt-Wagner para Pie Diabético",
    "statement": "Según la clasificación clínica de Meggitt-Wagner para úlceras de pie diabético, ¿cómo se clasifica una lesión ulcerosa profunda que llega hasta el hueso o articulación y presenta osteomielitis o formación de absceso profundo?",
    "options": {
      "A": "Grado 3 (Úlcera profunda con osteomielitis, absceso o infección articular).",
      "B": "Grado 0 (Pie de riesgo sin úlcera activa).",
      "C": "Grado 1 (Úlcera superficial que no compromete tejido celular subcutáneo).",
      "D": "Grado 5 (Gangrena de todo el pie con compromiso sistémico irreversible)."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La escala de Wagner clasifica las lesiones en: Grado 0 (sin úlcera, pie de alto riesgo); Grado 1 (úlcera superficial); Grado 2 (úlcera profunda que llega a tendón o cápsula sin absceso ni hueso); Grado 3 (úlcera profunda con celulitis, absceso, osteomielitis o artritis séptica); Grado 4 (gangrena localizada en dedos o talón); y Grado 5 (gangrena extensa de todo el pie que requiere amputación mayor).",
    "officialGuidelineRef": "Guía de Diagnóstico y Tratamiento del Pie Diabético, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Compromiso óseo con osteomielitis o absceso profundo corresponde exactamente a Wagner Grado 3.",
      "B": "Grado 0 carece de solución de continuidad cutánea.",
      "C": "Grado 1 es estrictamente superficial.",
      "D": "Grado 5 implica gangrena masiva de todo el pie."
    }
  },
  {
    "id": "dm-12",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Tamizaje de Nefropatía Diabética (Relación Albúmina/Creatinina)",
    "statement": "¿Cuál es la prueba de laboratorio de tamizaje inicial recomendada anualmente en todo paciente con DM2 para la detección precoz de daño renal (nefropatía diabética incipiente)?",
    "options": {
      "A": "Relación Albúmina/Creatinina en una muestra aislada de orina (RAC matutina), donde una excreción entre 30 y 300 mg/g define microalbuminuria.",
      "B": "Examen general de orina con tira reactiva convencional para proteínas (sensible solo a macroalbuminuria > 300-500 mg/L).",
      "C": "Biopsia renal percutánea bilateral cada 6 meses.",
      "D": "Urocultivo cuantitativo para hongos filamentosos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La relación albúmina/creatinina en la primera orina de la mañana (RAC) corrige por la concentración urinaria y es el método de elección para detectar microalbuminuria (30 a 300 mg/g), estadio reversible donde las tiras reactivas convencionales dan falsos negativos (ya que solo viran ante macroalbuminuria > 300 mg/g). Su detección oportuna permite iniciar IECA/ARA-II e inhibidores SGLT2 para frenar la insuficiencia renal.",
    "officialGuidelineRef": "Guía Clínica de Atención de la Diabetes Mellitus Tipo 2, MINSAL, Tamizaje Renal.",
    "distractorRationale": {
      "A": "Correcto. La RAC matutina entre 30-300 mg/g detecta microalbuminuria incipiente prevenible.",
      "B": "La tira reactiva simple no detecta microalbuminuria temprana y retrasa el diagnóstico en años.",
      "C": "La biopsia renal es invasiva y no se utiliza para tamizaje rutinario.",
      "D": "El urocultivo detecta infección, no daño glomerular diabético estructural."
    }
  },
  {
    "id": "dm-13",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Tamizaje y Frecuencia de Retinopatía Diabética",
    "statement": "En un paciente con diagnóstico recién establecido de Diabetes Mellitus Tipo 2, ¿cuándo debe realizarse su primera evaluación oftalmológica con examen de fondo de ojo bajo dilatación pupilar según el MINSAL?",
    "options": {
      "A": "Al momento del diagnóstico de DM2, y posteriormente al menos una vez al año si no hay retinopatía previa.",
      "B": "Diez años después de haber iniciado la metformina.",
      "C": "Únicamente cuando el paciente quede completamente ciego.",
      "D": "No se requiere evaluación de los ojos en la diabetes tipo 2."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "A diferencia de la DM1 (donde el inicio de la enfermedad es abrupto), la DM2 tiene un período subclínico prolongado de 5 a 7 años previo al diagnóstico clínico. Por ello, hasta un 20% de los pacientes recién diagnosticados con DM2 ya presentan algún grado de retinopatía diabética en el momento del diagnóstico. La evaluación con fondo de ojo dilatado por oftalmología o médico capacitado es mandatoria desde el diagnóstico.",
    "officialGuidelineRef": "Guía Clínica de Salud Ocular y Retinopatía Diabética, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Evaluación inicial al momento del diagnóstico de DM2 y luego anual.",
      "B": "Esperar 10 años permite la progresión a retinopatía proliferativa irreversible con ceguera.",
      "C": "El tamizaje busca prevenir el desprendimiento de retina o edema macular antes de la pérdida visual.",
      "D": "La diabetes es la principal causa de ceguera no traumática en adultos en edad productiva."
    }
  },
  {
    "id": "dm-14",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Criterios de Inicio de Insulinoterapia en DM2",
    "statement": "¿Cuál de las siguientes situaciones clínicas en un paciente con Diabetes Mellitus Tipo 2 constituye una indicación formal para iniciar tratamiento inmediato con Insulina según los lineamientos del MINSAL?",
    "options": {
      "A": "Glucemia en ayunas > 300 mg/dL, HbA1c > 10%, presencia de catabolismo acelerado (pérdida de peso involuntaria, cetonuria) o descompensación hiperglucémica aguda.",
      "B": "HbA1c de 6.8% con estilo de vida saludable.",
      "C": "Paciente asintomático con glucemia en ayunas de 115 mg/dL.",
      "D": "Presencia exclusiva de sobrepeso sin ninguna elevación de glucosa."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La presencia de síntomas catabólicos (pérdida de peso rápida, polidipsia, poliuria intensa), cetonuria o niveles muy elevados de hiperglucemia (glucemia >= 300 mg/dL o HbA1c >= 10.0%) denota un déficit severo de secreción endógena de insulina por glucotoxicidad en las células beta. En este escenario, los antidiabéticos orales son ineficaces y es obligatorio iniciar insulinoterapia de rescate.",
    "officialGuidelineRef": "Guía Clínica para la Atención Integral de la DM2, MINSAL, Criterios de Insulinización.",
    "distractorRationale": {
      "A": "Correcto. Cifras extremas con catabolismo y HbA1c > 10% exigen insulinización inmediata.",
      "B": "HbA1c < 7% indica excelente control glucémico que no amerita insulina.",
      "C": "Rango de prediabetes/control aceptable tratable con medidas no farmacológicas o metformina.",
      "D": "El sobrepeso aislado sin hiperglucemia se maneja con dieta y actividad física."
    }
  },
  {
    "id": "dm-15",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Esquema de Insulinización Basal con NPH en UCSF",
    "statement": "Al prescribir el inicio de insulina basal (Insulina Humana NPH) en un paciente con DM2 que no alcanza metas con terapia oral combinada en la UCSF, ¿cuál es la dosis inicial recomendada y el horario de administración?",
    "options": {
      "A": "Iniciar a razón de 0.1 a 0.2 UI por kilogramo de peso al día (o dosis fija de 10 UI), administrada al acostarse (hora de dormir: 9:00-10:00 PM), titulando la dosis cada 3-7 días según la glucemia en ayunas.",
      "B": "Iniciar a 2.0 UI/kg antes del desayuno en bolo masivo.",
      "C": "Inyectar 50 UI de NPH inmediatamente antes de cada comida tres veces al día.",
      "D": "La insulina NPH solo se administra por vía intravenosa continua con bomba de infusión."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El esquema estándar de insulinización basal en el primer nivel consiste en añadir Insulina NPH a dosis baja (0.1 a 0.2 UI/kg/día o 10 UI fijas) aplicada subcutáneamente al acostarse (bedtime). Administrarla antes de dormir desplaza el pico de acción de la NPH (6 a 8 horas) hacia las primeras horas de la madrugada, suprimiendo la gluconeogénesis hepática nocturna y controlando la glucemia matutina en ayunas con mínimo riesgo de hipoglucemia diurna.",
    "officialGuidelineRef": "Guía Clínica de Diabetes Mellitus Tipo 2, MINSAL, Protocolo de Insulina Basal.",
    "distractorRationale": {
      "A": "Correcto. Dosis de 0.1-0.2 UI/kg al acostarse con titulación por glucemia matutina es el protocolo oficial.",
      "B": "Dosis inicial masiva que provocaría coma hipoglucémico letal.",
      "C": "La NPH es una insulina basal de acción intermedia; no se administra como bolo prandial tres veces al día.",
      "D": "La NPH contiene protamina y es una suspensión lechosa; su inyección IV está formalmente contraindicada."
    }
  },
  {
    "id": "dm-16",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Fenómeno del Amanecer vs Efecto Somogyi",
    "statement": "¿Cómo se diferencia clínicamente el \"Fenómeno del Amanecer\" (Dawn Phenomenon) del \"Efecto Somogyi\" ante un paciente con hiperglucemia matutina en ayunas en tratamiento con insulina nocturna?",
    "options": {
      "A": "Midiendo la glucemia capilar a las 3:00 AM: si a las 3:00 AM la glucemia es BAJA (< 70 mg/dL), se trata del Efecto Somogyi (rebote adrenérgico poshipoglucemia nocturna); si a las 3:00 AM es NORMAL o ELEVADA, se trata del Fenómeno del Amanecer (secreción fisiológica matutina de cortisol y hormona de crecimiento).",
      "B": "Midiendo el nivel de ácido úrico en orina de 24 horas.",
      "C": "Ambos fenómenos son idénticos y se tratan aumentando la dosis de insulina nocturna al triple.",
      "D": "Mediante una radiografía de columna lumbosacra."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La medición de glucemia a las 3:00 AM es la clave diagnóstica. En el Efecto Somogyi, una dosis excesiva de insulina produce hipoglucemia nocturna inadvertida a las 3:00 AM, desencadenando una respuesta masiva de hormonas contrarreguladoras (adrenalina, glucagón, cortisol) que elevan la glucosa por la mañana; la solución es REDUCIR la insulina nocturna o dar refrigerio. En el Fenómeno del Amanecer la glucosa a las 3:00 AM es normal/alta y la solución es AUMENTAR la insulina nocturna.",
    "officialGuidelineRef": "Guía de Insulinoterapia en Atención Primaria, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La glucemia de las 3:00 AM permite diferenciar la hipoglucemia de rebote (Somogyi) del amanecer.",
      "B": "El ácido úrico no tiene relación con los ritmos contrarreguladores de la glucemia.",
      "C": "Aumentar la insulina en Somogyi causaría una hipoglucemia nocturna aún más profunda y potencialmente letal.",
      "D": "Estudio óseo irrelevante."
    }
  },
  {
    "id": "dm-17",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Conservación Segura de la Insulina en el Hogar",
    "statement": "En la educación para el autocuidado brindada en la UCSF, ¿cuáles son las recomendaciones técnicas normadas para la correcta conservación de los frascos y plumas de insulina?",
    "options": {
      "A": "Los frascos de reserva sin abrir deben mantenerse refrigerados entre +2 °C y +8 °C (nunca en el congelador); el frasco o pluma en uso actual puede conservarse a temperatura ambiente (< 30 °C), lejos del calor y sol directo, durante un máximo de 28 a 30 días.",
      "B": "Deben congelarse en el bloque de hielo para que duren 10 años.",
      "C": "Deben colocarse en el microondas 10 segundos antes de inyectarse.",
      "D": "La insulina pierde su efecto si pasa más de 2 horas fuera de un recipiente con hielo seco."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La insulina es una hormona peptídica sensible a la temperatura. El congelamiento (< 0 °C) destruye irreversiblemente su estructura terciaria mediante cristalización. Los frascos cerrados se refrigeran a 2-8 °C. Una vez abierto, el frasco en uso conserva su potencia a temperatura ambiente moderada (< 30 °C) por 28 a 30 días; inyectar insulina a temperatura ambiente disminuye además el dolor local en el sitio de punción.",
    "officialGuidelineRef": "Manual de Procedimientos de Enfermería y Farmacia, Cadena de Frío e Insulinas, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. 2-8 °C cerrada, temperatura ambiente < 30 °C abierta por 28 días, nunca congelar.",
      "B": "El congelamiento desnaturaliza y precipita la proteína de la insulina dejándola biológicamente inerte.",
      "C": "El calentamiento térmico desnaturaliza las cadenas polipeptídicas de forma inmediata.",
      "D": "La insulina resiste temperatura ambiente controlada hasta por un mes."
    }
  },
  {
    "id": "dm-18",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Técnica de Inyección de Insulina y Prevención de Lipohipertrofia",
    "statement": "¿Por qué es fundamental capacitar al paciente diabético en la ROTACIÓN SISTEMÁTICA de los sitios de inyección subcutánea de insulina (abdomen, muslos, brazos, glúteos)?",
    "options": {
      "A": "Para prevenir la aparición de lipohipertrofia (acumulación fibro-adiposa dérmica que altera y retrasa la absorción de la insulina, causando variabilidad glucémica extrema e hipoglucemias inexplicadas).",
      "B": "Para que la insulina circule por diferentes arterias cada día.",
      "C": "Porque la piel solo tolera dos inyecciones en el mismo lugar antes de necrosarse espontáneamente.",
      "D": "Para evitar que el vello corporal cambie de color hacia el rubio."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La inyección repetida de insulina en la misma zona induce lipohipertrofia dérmica local por el efecto lipogénico directo de la hormona. Inyectar en áreas lipohipertróficas provoca una absorción errática, lenta e impredecible de la insulina, ocasionando fallos de control y picos de hipoglucemia severa súbita. La rotación sistemática en cuadrantes dentro del mismo sitio previene esta distrofia.",
    "officialGuidelineRef": "Guía Clínica de Atención Integral de la Diabetes Mellitus Tipo 2, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La rotación previene la lipohipertrofia y asegura una farmacocinética de absorción predecible.",
      "B": "La absorción de la insulina es en capilares subcutáneos y vénulas, no por selección arterial directa.",
      "C": "La piel no se necrosa automáticamente por dos inyecciones.",
      "D": "Efecto estético ficticio."
    }
  },
  {
    "id": "dm-19",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Diagnóstico Bioquímico de Cetoacidosis Diabética (CAD)",
    "statement": "¿Cuál es la tríada bioquímica de laboratorio que define diagnósticamente una CETOACIDOSIS DIABÉTICA (CAD) en el servicio de urgencias?",
    "options": {
      "A": "Hiperglucemia (generalmente > 250 mg/dL), acidosis metabólica con anión gap elevado (pH arterial < 7.30 y/o Bicarbonato sérico < 18 mEq/L) y presencia de cuerpos cetónicos positivos en suero u orina.",
      "B": "Glucemia menor a 50 mg/dL con pH de 7.50 y cetonas negativas.",
      "C": "Alcalosis respiratoria con bicarbonato mayor a 35 mEq/L y glucemia normal.",
      "D": "Exclusivamente la presencia de hematuria microscópica con glucemia de 90 mg/dL."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Cetoacidosis Diabética se caracteriza por la deficiencia absoluta o relativa severa de insulina combinada con exceso de hormonas contrarreguladoras (glucagón, catecolaminas), lo que activa la lipólisis descontrolada y la cetogénesis hepática de acetoacetato y beta-hidroxibutirato. Sus tres pilares diagnósticos son: 1) Hiperglucemia > 250 mg/dL; 2) Acidosis con anión gap elevado (pH < 7.30, HCO3 < 18); y 3) Cetonemia o cetonuria moderada a intensa.",
    "officialGuidelineRef": "Guía de Manejo de Emergencias Hiperglucémicas, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Hiperglucemia + acidosis metabólica con anión gap elevado + cetonemia/cetonuria define la CAD.",
      "B": "Corresponde a hipoglucemia con alcalosis.",
      "C": "Parámetros incompatibles con cetoacidosis metabólica.",
      "D": "Hallazgo urológico sin relación con descompensación hiperglucémica cetoácida."
    }
  },
  {
    "id": "dm-20",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Criterios de Estado Hiperglucémico Hiperosmolar (EHH)",
    "statement": "¿Cuáles son los parámetros clave que caracterizan al ESTADO HIPERGLUCÉMICO HIPEROSMOLAR (EHH) y lo diferencian de la cetoacidosis diabética?",
    "options": {
      "A": "Hiperglucemia extrema (frecuentemente > 600 mg/dL), osmolaridad sérica efectiva marcadamente elevada (> 320 mOsm/kg), deshidratación profunda con alteración del sensorio (estupor o coma), y ausencia de acidosis metabólica significativa (pH > 7.30, bicarbonato > 18 mEq/L).",
      "B": "Glucemia de 140 mg/dL con pH de 6.90 y anión gap de 30.",
      "C": "Presencia de hipotermia extrema con hipernatremia y glucemia de 80 mg/dL.",
      "D": "Cuadro idéntico a una crisis de pánico con hiperventilación sin deshidratación."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El EHH ocurre típicamente en pacientes con DM2 de edad avanzada. A diferencia de la CAD, persiste una mínima secreción residual de insulina suficiente para inhibir la lipólisis y la cetogénesis hepática, pero insuficiente para permitir la utilización periférica de glucosa. Esto conduce a diuresis osmótica masiva, deshidratación de 8-12 litros, hiperosmolaridad (> 320 mOsm/kg) y coma hiperosmolar sin cetoacidosis marcada.",
    "officialGuidelineRef": "Lineamientos para el Manejo del Estado Hiperosmolar, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Glucosa > 600, osmolaridad > 320 mOsm/kg, deshidratación grave sin acidosis definen el EHH.",
      "B": "Presenta acidosis metabólica severa con glucemia baja, lo opuesto al EHH.",
      "C": "Parámetros que no definen una crisis hiperosmolar diabética.",
      "D": "El EHH es una urgencia vital con alta mortalidad por deshidratación y colapso cardiovascular."
    }
  },
  {
    "id": "dm-21",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Hidratación Inicial en Crisis Hiperglucémicas",
    "statement": "En la reanimación inicial de un paciente con crisis hiperglucémica severa descompensada (CAD o EHH) en la sala de emergencias, ¿cuál es el fluido intravenoso de elección durante la primera hora y a qué volumen aproximado?",
    "options": {
      "A": "Solución Salina Normal al 0.9% (cristaloide isotónico) a razón de 1,000 a 1,500 mL en la primera hora (15 a 20 mL/kg/h) para restaurar rápidamente el volumen intravascular efectivo.",
      "B": "Solución Dextrosada al 50% en infusión continua rápida.",
      "C": "Agua bidestilada libre por vía venosa central a 500 mL/h.",
      "D": "Restricción total de líquidos y administración exclusiva de furosemida en bolo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El primer paso ineludible en el manejo de las crisis hiperglucémicas (antes incluso de la insulina) es la restitución agresiva de la volemia intravascular para mejorar la perfusión tisular, revertir el choque hipovolémico y restaurar la tasa de filtración glomerular. Se inicia con Solución Salina al 0.9% a 1-1.5 L en la primera hora, ajustando luego según el sodio sérico corregido.",
    "officialGuidelineRef": "Guía Clínica de Urgencias Hiperglucémicas en el Adulto, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La expansión inicial con SSN 0.9% a 1000-1500 mL/h es la conducta médica de primera línea.",
      "B": "Administrar más dextrosa elevaría catastróficamente la hiperosmolaridad.",
      "C": "El agua libre no isotónica por vía venosa produce lisis eritrocitaria y edema cerebral letal.",
      "D": "La restricción o uso de diuréticos en pacientes deshidratados provoca choque hipovolémico fatal."
    }
  },
  {
    "id": "dm-22",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Seguridad en la Infusión de Insulina y Potasio Sérico",
    "statement": "¿Cuál es la regla de seguridad fisiológica obligatoria respecto al nivel de POTASIO SÉRICO antes de iniciar la infusión continua de insulina intravenosa en un paciente con cetoacidosis diabética?",
    "options": {
      "A": "NO debe iniciarse la infusión de insulina si el potasio sérico es menor a 3.3 mEq/L; se debe reponer potasio intravenoso primero hasta que supere 3.3 mEq/L, debido a que la insulina introduce potasio al interior celular pudiendo desencadenar arritmias ventriculares letales o paro cardíaco por hipopotasemia aguda.",
      "B": "La insulina siempre debe iniciarse de inmediato sin importar si el potasio está en 1.5 mEq/L.",
      "C": "El potasio solo se evalúa si el paciente tiene dolor en las articulaciones.",
      "D": "La insulina eleva el potasio extracelular y siempre causa hiperpotasemia inmediata."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La insulina estimula la bomba Na+/K+ ATPasa, introduciendo masivamente potasio y glucosa al interior de las células. Si se administra insulina a un paciente con hipopotasemia (< 3.3 mEq/L), los niveles plasmáticos de potasio colapsan con rapidez, desencadenando arritmias ventriculares malignas (fibrilación ventricular, torsades de pointes) y parálisis muscular respiratoria. Primero se repone potasio y luego se inicia la insulina.",
    "officialGuidelineRef": "Lineamientos Técnicos para el Manejo de la Cetoacidosis Diabética, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Suspender o diferir insulina si K+ < 3.3 mEq/L y reponer primero es mandatorio.",
      "B": "Iniciar insulina con K < 3.3 causa paro cardíaco por hipopotasemia severa iatrogénica.",
      "C": "El potasio es un electrolito vital para la excitabilidad miocárdica que exige monitoreo continuo en CAD.",
      "D": "La insulina disminuye el potasio plasmático extracelular al desplazarlo al intracelular."
    }
  },
  {
    "id": "dm-23",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Inhibidores de SGLT2 (Dapagliflozina, Empagliflozina)",
    "statement": "¿Cuál es el beneficio cardiorrenal adicional demostrado por los Inhibidores del Cotransportador Sodio-Glucosa tipo 2 (iSGLT2) en pacientes diabéticos con insuficiencia cardíaca o nefropatía crónica?",
    "options": {
      "A": "Reducen significativamente las hospitalizaciones por insuficiencia cardíaca, disminuyen la progresión de la enfermedad renal crónica y reducen la mortalidad cardiovascular mediante glucosuria, natriuresis y reducción de la presión intraglomerular.",
      "B": "Aumentan la masa muscular hasta niveles de culturismo sin necesidad de ejercicio.",
      "C": "Eliminan la necesidad de realizarse pruebas de glucosa por el resto de la vida.",
      "D": "Provocan hipertrofia prostática benigna protectora."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los iSGLT2 bloquean la reabsorción tubular de glucosa y sodio en el túbulo proximal. Además de su modesto efecto hipoglucemiante, restauran la retroalimentación tubuloglomerular (vasoconstricción de la arteriola aferente), reduciendo la hiperfiltración glomerular protectoramente. En insuficiencia cardíaca reducen precarga y postcarga, consolidándose como fármacos de primera línea cardiorrenal.",
    "officialGuidelineRef": "Guía Clínica de Diabetes Mellitus y Manejo de Comorbilidades Cardiorrenales, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Beneficio indiscutible en reducción de hospitalización por falla cardíaca y freno de la ERC.",
      "B": "No ejercen efecto anabólico esteroideo sobre la masa muscular.",
      "C": "El automonitoreo de glucosa sigue siendo necesario.",
      "D": "No tienen indicación prostática; su principal riesgo es la micosis genital por glucosuria."
    }
  },
  {
    "id": "dm-24",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Agonistas del Receptor de GLP-1 y Riesgo Cardiovascular",
    "statement": "¿Cuáles son los efectos fisiológicos y clínicos destacados de los Agonistas del Receptor del Péptido Similar al Glucagón-1 (arGLP-1 como Liraglutida o Semaglutida) en pacientes con DM2 y obesidad o enfermedad cardiovascular establecida?",
    "options": {
      "A": "Estimulación de la secreción de insulina dependiente de glucosa, supresión de glucagón, enlentecimiento del vaciamiento gástrico, aumento de la saciedad central con pérdida de peso significativa y reducción de eventos cardiovasculares mayores (MACE).",
      "B": "Aumento del apetito desmedido y ganancia de 10 kg de grasa visceral.",
      "C": "Destrucción de los islotes de Langerhans para frenar la producción de insulina.",
      "D": "Bloqueo absoluto de la digestión de proteínas en el estómago."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los análogos de GLP-1 actúan como incretinas de larga duración. Su estímulo de insulina y supresión de glucagón ocurren únicamente en presencia de hiperglucemia (bajo riesgo de hipoglucemia). A nivel hipotalámico inducen saciedad precoz y retrasan el vaciamiento gástrico, logrando pérdidas de peso de 5% al 15% y reducción demostrada de infartos y EVC en pacientes con aterosclerosis.",
    "officialGuidelineRef": "Lineamientos Técnicos en Farmacoterapia Avanzada de la DM2, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Inducción de saciedad, pérdida ponderal y protección cardiovascular comprobada.",
      "B": "Los análogos de GLP-1 reducen el apetito y promueven pérdida ponderal sustancial.",
      "C": "Tienen efecto trófico y protector sobre la masa de células beta.",
      "D": "No inhiben la pepsina ni la proteólisis estomacal."
    }
  },
  {
    "id": "dm-25",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Inhibidores de la DPP-4 (Sitagliptina, Linagliptina)",
    "statement": "¿Cuál es una ventaja clave en el perfil de seguridad de los Inhibidores de la Dipeptidil Peptidasa-4 (iDPP-4 como Linagliptina o Sitagliptina) cuando se indican en pacientes adultos mayores con DM2?",
    "options": {
      "A": "Riesgo sumamente bajo de provocar hipoglucemia en monoterapia (debido a que su efecto insulinotrópico depende de los niveles de glucosa en sangre) y neutralidad sobre el peso corporal.",
      "B": "Provocan pérdida acelerada de 30 kg en dos semanas.",
      "C": "Permiten consumir azúcar refinada en cantidades ilimitadas sin elevar la glucemia.",
      "D": "Aumentan la masa ósea curando la osteoporosis en 24 horas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los inhibidores de DPP-4 prolongan la vida media de las incretinas endógenas (GLP-1 y GIP) al impedir su degradación enzimática. Al depender su acción de la presencia de alimento en la luz intestinal y de glucosa elevada, el riesgo de hipoglucemia es mínimo, lo que los hace ideales para pacientes frágiles o ancianos donde la hipoglucemia es un peligro mayor. Son neutros respecto al peso.",
    "officialGuidelineRef": "Guía Clínica de Atención Integral de la Diabetes Mellitus Tipo 2, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Seguridad hipoglucémica y neutralidad ponderal en el adulto mayor.",
      "B": "Son neutros sobre el peso corporal, no causan pérdida de peso masiva.",
      "C": "La transgresión dietética excesiva sobrepasa cualquier efecto incretínico.",
      "D": "No tienen efecto anabólico óseo acelerado sobre la osteoporosis."
    }
  },
  {
    "id": "dm-26",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Metas Individualizadas de Hemoglobina Glucosilada (HbA1c)",
    "statement": "¿Por qué las guías clínicas del MINSAL establecen que la meta de HbA1c debe ser INDIVIDUALIZADA, recomendando metas más estrictas (< 7.0% o < 6.5%) en adultos jóvenes con diagnóstico reciente, y metas más flexibles (7.5% a 8.0%) en ancianos frágiles con comorbilidades avanzadas?",
    "options": {
      "A": "Porque en adultos mayores con comorbilidades y expectativa de vida limitada, el daño cognitivo y cardiovascular severo de las hipoglucemias supera con creces el beneficio microvascular a largo plazo de un control glucémico estricto.",
      "B": "Porque los adultos mayores no procesan la hemoglobina en su médula ósea.",
      "C": "Porque la prueba de HbA1c deja de funcionar a partir de los 60 años de edad.",
      "D": "Porque las metas más estrictas aumentan el costo financiero para la familia."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La individualización de metas de HbA1c es un principio de seguridad clínica fundamental. Los beneficios del control glucémico intensivo (< 6.5-7.0%) en reducir complicaciones microvasculares requieren de 10 a 20 años para manifestarse. En un anciano frágil o con cardiopatía, forzar un control estricto multiplica el riesgo de hipoglucemia severa, la cual desencadena arritmias fatales, caídas con fractura de cadera y deterioro cognitivo agudo.",
    "officialGuidelineRef": "Guía Clínica de Diabetes Mellitus Tipo 2, MINSAL, Metas Terapéuticas Individualizadas.",
    "distractorRationale": {
      "A": "Correcto. En ancianos frágiles prima la seguridad contra hipoglucemias sobre el beneficio microvascular diferido.",
      "B": "La síntesis de hemoglobina se mantiene a lo largo de toda la vida.",
      "C": "La prueba de HbA1c es biológicamente válida en cualquier rango de edad.",
      "D": "La decisión médica se fundamenta en el balance beneficio-daño clínico, no en criterios arbitrarios."
    }
  },
  {
    "id": "dm-27",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Tamizaje y Diagnóstico de Diabetes Gestacional",
    "vignette": "Gestante de 26 semanas de embarazo, sin antecedentes de diabetes previa, asiste a su control prenatal en la UCSF y se le realiza la Prueba de Tolerancia Oral a la Glucosa (PTOG) con carga de 75 gramos en ayunas según el protocolo en un paso.",
    "statement": "¿Cuál de los siguientes puntos de corte de glucemia plasmática (ayuno, 1 hora o 2 horas) basta con que esté alterado para confirmar el diagnóstico de Diabetes Gestacional según el MINSAL?",
    "options": {
      "A": "Ayunas >= 92 mg/dL, a la hora >= 180 mg/dL, o a las 2 horas >= 153 mg/dL (un solo valor alterado confirma el diagnóstico).",
      "B": "Ayunas >= 250 mg/dL exclusivamente con cetonuria en las tres tomas.",
      "C": "Los tres valores deben superar 300 mg/dL simultáneamente.",
      "D": "Solo se confirma si el feto ya pesa más de 5 kilogramos en el ultrasonido."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El tamizaje universal de Diabetes Gestacional se realiza entre las semanas 24 y 28 de amenorrea mediante la PTOG con 75 g de glucosa en ayunas (criterios IADPSG / OMS adoptados por el MINSAL). Los umbrales diagnósticos son: Ayuno >= 92 mg/dL, 1 hora >= 180 mg/dL, 2 horas >= 153 mg/dL. Basta con que uno solo de estos tres valores alcance o supere el umbral para establecer el diagnóstico y prevenir macrosomía y distocia de hombros.",
    "officialGuidelineRef": "Guía de Diagnóstico y Manejo de la Diabetes Gestacional, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Ayuno >= 92, 1h >= 180 o 2h >= 153 mg/dL con un solo valor alterado confirma diabetes gestacional.",
      "B": "Valores propios de cetoacidosis descompensada, no umbrales de tamizaje gestacional.",
      "C": "Exigir tres valores tan extremos dejaría al 99% de las diabéticas gestacionales sin tratamiento.",
      "D": "La macrosomía fetal es una complicación tardía evitable, no un criterio diagnóstico de laboratorio."
    }
  },
  {
    "id": "dm-28",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Inmunización Específica en el Paciente con Diabetes",
    "statement": "¿Cuáles son las vacunas prioritarias recomendadas en el esquema de inmunización del adulto para personas con Diabetes Mellitus Tipo 2 atendidas en la red del MINSAL para prevenir hospitalizaciones y morbimortalidad infecciosa?",
    "options": {
      "A": "Vacuna contra la Influenza estacional (anual), vacuna conjugada y polisacárida contra Streptococcus pneumoniae (Neumococo), y serie completa contra el virus de la Hepatitis B.",
      "B": "Vacuna contra la fiebre amarilla cada 15 días.",
      "C": "En los pacientes diabéticos las vacunas están estrictamente prohibidas por peligro de hiperglucemia.",
      "D": "Únicamente la vacuna antirrábica tras morder a un animal doméstico."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los pacientes con diabetes presentan una disfunción inmunológica humoral y celular relativa (fagocitosis alterada por hiperglucemia) que incrementa significativamente el riesgo de bacteriemia por neumococo, neumonía grave e influenza con complicaciones. La vacunación anual contra la influenza, el esquema contra neumococo y la vacunación contra hepatitis B (por exposición a lancetas/sangre) son estándares universales de prevención.",
    "officialGuidelineRef": "Lineamientos Técnicos de Vacunación del Adulto y Grupos de Riesgo, PAI / MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Influenza anual, neumococo y hepatitis B son el núcleo vacunal del paciente diabético.",
      "B": "La fiebre amarilla se aplica como dosis única a viajeros a zonas endémicas, no quincenalmente.",
      "C": "Las vacunas salvan vidas y no están contraindicadas en diabetes.",
      "D": "La vacuna antirrábica tiene indicación post-exposición por mordedura de animales sospechosos."
    }
  },
  {
    "id": "dm-29",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Dislipidemia Aterogénica Diabética y Terapia con Estatinas",
    "statement": "¿Cuál es la tríada lipídica que caracteriza a la \"Dislipidemia Aterogénica\" en pacientes con Diabetes Tipo 2 y cuál es la indicación de tratamiento con Estatinas (como Atorvastatina o Simvastatina)?",
    "options": {
      "A": "Triglicéridos elevados, colesterol HDL bajo y partículas de LDL pequeñas y densas (altamente aterogénicas); indicándose estatinas de moderada o alta intensidad en todo paciente diabético de 40 a 75 años independientemente de su cifra basal de colesterol LDL.",
      "B": "Triglicéridos en cero con colesterol total en cero; no requiriendo ningún fármaco.",
      "C": "Colesterol HDL mayor a 150 mg/dL con triglicéridos indetectables.",
      "D": "Las estatinas solo se prescriben si el paciente ya sufrió tres infartos previos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La resistencia a la insulina estimula la secreción hepática de VLDL ricas en triglicéridos y acelera el catabolismo del HDL, transformando las LDL en partículas pequeñas y densas que penetran con facilidad la pared vascular y se oxidan. Dado su altísimo riesgo cardiovascular equivalente, las guías internacionales y del MINSAL indican tratamiento con estatinas de moderada a alta intensidad en todo diabético de 40 a 75 años para prevención primaria.",
    "officialGuidelineRef": "Guía Clínica de Dislipidemias y Riesgo Cardiovascular en Diabetes, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Hipertrigliceridemia + HDL bajo + LDL pequeña y densa; indicación formal de estatinas en diabéticos 40-75 años.",
      "B": "Los lípidos plasmáticos nunca están en cero absoluto en un organismo vivo.",
      "C": "HDL > 150 con triglicéridos indetectables no corresponde a dislipidemia diabética.",
      "D": "Las estatinas se indican para prevención primaria antes de que ocurra el primer infarto."
    }
  },
  {
    "id": "dm-30",
    "category": "hta-dm2",
    "categoryLabel": "Hipertensión & Diabetes",
    "clinicalArea": "Monitoreo Glucémico Capilar y Metas Pre y Postprandiales",
    "statement": "En el autocontrol y monitoreo de la glucemia capilar ambulatoria del paciente con DM2, ¿cuáles son las metas glucémicas preprandiales (en ayunas y antes de comer) y postprandiales (1 a 2 horas después del inicio de la comida) recomendadas por las guías para la mayoría de los adultos no gestantes?",
    "options": {
      "A": "Glucemia preprandial en ayunas: 80 a 130 mg/dL; Glucemia postprandial (1 a 2 horas post-comida): menor a 180 mg/dL.",
      "B": "Glucemia preprandial: menor a 40 mg/dL; Glucemia postprandial: mayor a 400 mg/dL.",
      "C": "Mantener la glucemia en exactamente 100 mg/dL durante las 24 horas del día sin ninguna variación.",
      "D": "La glucemia postprandial nunca debe ser inferior a 350 mg/dL."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Para evitar complicaciones crónicas micro y macrovasculares sin inducir hipoglucemias, las metas glucémicas estandarizadas por el MINSAL y la ADA son: glucemia preprandial (en ayunas y previa a las comidas) entre 80 y 130 mg/dL, y pico de glucemia postprandial (medida 1 a 2 horas después de iniciar la ingesta de alimentos) menor a 180 mg/dL. Estas metas correlacionan con una HbA1c en torno al 7.0%.",
    "officialGuidelineRef": "Guía Clínica de Atención Integral de la Diabetes Mellitus Tipo 2, MINSAL, Metas Glucémicas.",
    "distractorRationale": {
      "A": "Correcto. Preprandial 80-130 mg/dL y postprandial < 180 mg/dL son las metas clínicas validadas.",
      "B": "Preprandial < 40 es hipoglucemia severa sintomática; postprandial > 400 es hiperglucemia descontrolada.",
      "C": "Fijar una cifra rígida sin oscilaciones biológicas es imposible e incompatible con la fisiología humana.",
      "D": "Glucemia postprandial > 350 mg/dL causa glucotoxicidad severa y daño endotelial acelerado."
    }
  },
  {
    "id": "iras-01",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Criterios de Taquipnea según Grupo Etario en Neumonía Pediátrica",
    "statement": "De acuerdo con la estrategia de Atención Integrada a las Enfermedades Prevalentes de la Infancia (AIEPI) adoptada por el MINSAL y la OMS, ¿cuáles son los puntos de corte de FRECUENCIA RESPIRATORIA que definen taquipnea (respiración rápida) para el diagnóstico clínico de Neumonía en menores de 5 años?",
    "options": {
      "A": "< 2 meses: >= 60 rpm; de 2 a 11 meses: >= 50 rpm; de 12 meses a 4 años: >= 40 rpm; de 5 años o más: >= 30 rpm.",
      "B": "En todas las edades pediátricas se define exclusivamente con FR >= 100 rpm.",
      "C": "< 2 meses: >= 20 rpm; de 2 a 11 meses: >= 15 rpm.",
      "D": "La frecuencia respiratoria no tiene ninguna relación con el diagnóstico de neumonía en niños."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En el primer nivel de atención donde la radiografía de tórax no siempre está disponible de inmediato, la taquipnea es el signo clínico con mayor sensibilidad y especificidad para el diagnóstico de neumonía en pediatría. Los umbrales estandarizados según maduración del centro respiratorio son: < 2 meses: >= 60 rpm; 2-11 meses: >= 50 rpm; 1-4 años: >= 40 rpm; y >= 5 años: >= 30 rpm (contada durante un minuto completo con el niño tranquilo y sin fiebre extrema).",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención y Control de las IRAS y Manual AIEPI, MINSAL / OPS.",
    "distractorRationale": {
      "A": "Correcto. Umbrales canónicos de AIEPI/MINSAL para definir respiración rápida según edad.",
      "B": "100 rpm es un valor extremo de fallo respiratorio inminente, no un umbral de tamizaje.",
      "C": "Cifras dentro del rango de bradipnea o frecuencias de adultos en reposo.",
      "D": "La taquipnea es el signo cardinal indispensable para definir neumonía comunitaria pediátrica."
    }
  },
  {
    "id": "iras-02",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Signos de Peligro y Gravedad en Lactantes con IRAS",
    "statement": "¿Cuál de los siguientes grupos de signos clínicos constituye indicación obligatoria de clasificación como \"Neumonía Grave o Enfermedad Muy Grave\" y referencia urgente al hospital según el MINSAL?",
    "options": {
      "A": "Tiraje subcostal grave (retracción de la pared torácica inferior al inspirar), quejido espiratorio audible, aleteo nasal, cianosis central o incapacidad total para lactar o beber líquidos.",
      "B": "Rinorrea hialina matutina con estornudos y temperatura de 37.0 °C.",
      "C": "Apetito conservado con llanto enérgico durante el cambio de pañal.",
      "D": "Erupción dental en incisivos centrales con salivación abundante."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La presencia de tiraje subcostal grave traduce agotamiento mecánico de los músculos intercostales y diafragma con disminución de la distensibilidad pulmonar. Junto con el quejido espiratorio (mecanismo reflejo de cierre glótico para mantener presión positiva al final de la espiración y evitar atelectasias), cianosis e incapacidad de alimentarse, define Neumonía Grave con riesgo inminente de paro respiratorio, requiriendo oxígeno y referencia hospitalaria.",
    "officialGuidelineRef": "Guía Clínica de Infecciones Respiratorias Agudas en Pediatría, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Tiraje subcostal, quejido, aleteo, cianosis e incapacidad para beber son signos de gravedad ineludibles.",
      "B": "Cuadro típico de resfriado común / rinitis viral sin datos de alarma.",
      "C": "Indica estado neurológico y hemodinámico normal.",
      "D": "Fenómeno fisiológico del desarrollo infantil."
    }
  },
  {
    "id": "iras-03",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Estratificación de Neumonía en Adultos: Escala CURB-65",
    "statement": "En la evaluación de un adulto con Neumonía Adquirida en la Comunidad (NAC) en la UCSF, ¿cuáles son los 5 parámetros que componen la escala pronóstica de severidad CURB-65 para decidir el manejo ambulatorio versus internamiento hospitalario?",
    "options": {
      "A": "C: Confusión mental aguda; U: Urea sérica > 19 mg/dL (BUN > 20 mg/dL); R: Frecuencia Respiratoria >= 30 rpm; B: Presión Arterial baja (PAS < 90 mmHg o PAD <= 60 mmHg); y 65: Edad >= 65 años (1 punto por cada ítem presente).",
      "B": "C: Color de ojos; U: Uso de anteojos; R: Reflejos rotulianos; B: Braquidactilia; 65: Talla mayor a 65 centímetros.",
      "C": "C: Conteo plaquetario; U: Uricosuria; R: Ritmo cardíaco; B: Bilirrubina; 65: Peso corporal mayor a 65 kg.",
      "D": "La escala CURB-65 solo evalúa el costo del medicamento en dólares."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La escala CURB-65 (o su variante clínica CRB-65 en atención primaria donde no se dispone de urea inmediata) es la herramienta validada recomendada por el MINSAL para estratificar la mortalidad a 30 días en NAC: 0-1 punto: bajo riesgo, manejo ambulatorio; 2 puntos: riesgo intermedio, hospitalización en sala general; >= 3 puntos: alto riesgo de muerte, considerar ingreso a cuidados intensivos.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Tratamiento de la Neumonía Adquirida en la Comunidad, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Confusión, Urea, Respiración, Presión baja y Edad >= 65 años definen el acrónimo CURB-65.",
      "B": "Distractor absurdo sin pertinencia clínica.",
      "C": "Parámetros ajenos a la escala CURB-65.",
      "D": "La escala evalúa predicción de mortalidad clínica, no variables financieras."
    }
  },
  {
    "id": "iras-04",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Antibioterapia Ambulatoria de Primera Línea en Neumonía Infantil",
    "statement": "¿Cuál es el antibiótico oral de primera elección y a qué dosis se prescribe en el primer nivel de atención para el tratamiento ambulatorio de la Neumonía bacteriana típica no complicada en niños de 2 meses a 5 años según las guías del MINSAL?",
    "options": {
      "A": "Amoxicilina oral a dosis altas: 80 a 90 mg/kg/día, fraccionada en 2 o 3 tomas al día (cada 8 o 12 horas) durante 7 a 10 días.",
      "B": "Ciprofloxacina oral a 5 mg/kg/día durante 30 días.",
      "C": "Gentamicina oral tres veces al día.",
      "D": "No se debe dar ningún antibiótico y solo ofrecer té de manzanilla con miel."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El agente etiológico bacteriano más frecuente y letal en NAC comunitaria pediátrica es Streptococcus pneumoniae (neumococo). Para superar los mecanismos de resistencia intermedia de las proteínas fijadoras de penicilina (PBP) del neumococo en las vías respiratorias, las guías internacionales y del MINSAL norman el uso de amoxicilina a dosis altas (80-90 mg/kg/día), alcanzando concentraciones alveolares bactericidas óptimas.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Atención de las IRAS, MINSAL, Tratamiento Antimicrobiano.",
    "distractorRationale": {
      "A": "Correcto. Amoxicilina a dosis altas (80-90 mg/kg/día) es el estándar de oro en neumonía típica ambulatoria.",
      "B": "Las fluoroquinolonas están restringidas en pediatría y no son primera línea en neumonía bacteriana.",
      "C": "La gentamicina no se absorbe por vía oral.",
      "D": "Omitir el antibiótico en neumonía bacteriana confirmada incrementa la mortalidad por empiema o sepsis."
    }
  },
  {
    "id": "iras-05",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Tratamiento Empírico de NAC en Adultos Ambulatorios",
    "statement": "En un adulto de 35 años sin enfermedades crónicas asociadas ni factores de riesgo de patógenos resistentes, con diagnóstico de NAC leve tratada de forma ambulatoria (CURB-65 = 0), ¿cuál es el esquema antibiótico de primera elección normado por el MINSAL?",
    "options": {
      "A": "Amoxicilina oral: 500 mg cada 8 horas o 875/125 mg cada 12 horas durante 5 a 7 días (o Doxiciclina como alternativa).",
      "B": "Vancomicina intravenosa combinada con Meropenem en infusión continua ambulatoria.",
      "C": "Clindamicina tópica en ungüento aplicada sobre el tórax.",
      "D": "Paracetamol únicamente porque los adultos no desarrollan neumonías bacterianas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En adultos jóvenes sanos sin comorbilidades (sin diabetes, insuficiencia cardíaca o uso reciente de antibióticos), Streptococcus pneumoniae sigue siendo el patógeno predominante, junto con atípicos (Mycoplasma pneumoniae). La monoterapia oral con Amoxicilina (500 mg c/8h o 1 g c/8h) o un macrólido/doxiciclina es altamente efectiva, segura y de bajo costo para el sistema de salud pública.",
    "officialGuidelineRef": "Guía Clínica de Neumonía Adquirida en la Comunidad en el Adulto, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Amoxicilina oral en monoterapia es la elección en pacientes sin comorbilidades y bajo riesgo.",
      "B": "Esquema de rescate intrahospitalario para patógenos multirresistentes (MRSA, Pseudomonas).",
      "C": "La vía tópica no alcanza ninguna concentración en el parénquima pulmonar.",
      "D": "La neumonía bacteriana comunitaria del adulto requiere antibióticos orales adecuados."
    }
  },
  {
    "id": "iras-06",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Crup Laríngeo: Etiología y Tríada Clínica Clásica",
    "vignette": "Niño de 2 años es traído a la UCSF a las 2:00 AM por presentar súbitamente dificultad para respirar, tos seca de tono metálico resonante muy particular y cambio en el timbre de la voz tras 2 días de rinorrea leve.",
    "statement": "¿Cuál es el agente etiológico más común del Crup Laríngeo (Laringotraqueobronquitis aguda) y cuál es su tríada clínica patognomónica?",
    "options": {
      "A": "Virus Parainfluenza (principalmente serotipos 1 y 2); y su tríada clásica es: tos traqueal perruna (o metálica), estridor inspiratorio y disfonía (ronquera).",
      "B": "Staphylococcus aureus resistente a meticilina; tríada de tos productiva purulenta, diarrea y ceguera.",
      "C": "Mycobacterium leprae; tríada de manchas hipocrómicas, anestesia dérmica y nódulos.",
      "D": "Hongos Aspergillus fumigatus exclusivamente en pacientes que conviven con palomas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El crup o laringotraqueobronquitis es una infección viral aguda del epitelio de la laringe, tráquea y bronquios que predomina en niños de 6 meses a 3 años. El Virus Parainfluenza (tipos 1, 2 y 3) es responsable de más del 75% de los casos. La inflamación de la región subglótica produce el estrechamiento característico manifestado por la tríada: tos perruna metálica, estridor inspiratorio y disfonía.",
    "officialGuidelineRef": "Lineamientos Técnicos para el Diagnóstico y Manejo del Crup Laríngeo, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Virus Parainfluenza y la triada de tos perruna, estridor inspiratorio y disfonía definen el crup.",
      "B": "Corresponde a traqueítis bacteriana membranosa, complicación infrecuente.",
      "C": "Cuadro característico de lepra (Enfermedad de Hansen).",
      "D": "Aspergilosis invasiva propia de inmunodeprimidos severos."
    }
  },
  {
    "id": "iras-07",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Escala de Westley para Crup Laríngeo",
    "statement": "¿Cuál es la escala clínica internacionalmente recomendada por el MINSAL para graduar la severidad del Crup Laríngeo (evaluando estridor, tiraje, entrada de aire, cianosis y nivel de conciencia)?",
    "options": {
      "A": "Escala de Westley (puntuación que clasifica en Crup Leve, Moderado y Severo).",
      "B": "Escala de Glasgow para traumatismo craneoencefálico únicamente.",
      "C": "Escala de Norton para riesgo de úlceras por presión en cama.",
      "D": "Escala de Alvarado para sospecha de apendicitis aguda."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Escala de Westley es el instrumento estandarizado para evaluar la gravedad del crup. Pondera cinco variables: 1) Estridor (0: ninguno; 1: con agitación; 2: en reposo); 2) Tiraje (0 a 3); 3) Ventilación/entrada de aire (0 a 2); 4) Cianosis (0 a 5); y 5) Nivel de conciencia (0 a 5). Puntuaciones <= 2 indican crup leve; 3-7 moderado; y >= 8 severo con riesgo de obstrucción total.",
    "officialGuidelineRef": "Guía Clínica de Urgencias Respiratorias Pediátricas, MINSAL, Escala de Westley.",
    "distractorRationale": {
      "A": "Correcto. La escala de Westley es la herramienta universalmente validada para crup.",
      "B": "La escala de Glasgow evalúa nivel de conciencia mediante respuesta ocular, verbal y motora.",
      "C": "La escala de Norton evalúa riesgo de lesiones por decúbito en piel.",
      "D": "La escala de Alvarado evalúa apendicitis aguda."
    }
  },
  {
    "id": "iras-08",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Fármaco de Elección en Crup Laríngeo: Dexametasona",
    "statement": "¿Cuál es el medicamento antiinflamatorio de elección recomendado con recomendación IA para todos los casos de Crup Laríngeo (desde leves hasta severos) según los lineamientos del MINSAL?",
    "options": {
      "A": "Dexametasona en dosis única (0.15 a 0.60 mg/kg por vía oral o intramuscular, dosis máxima habitual 10 a 16 mg).",
      "B": "Amoxicilina combinada con ácido clavulánico por vía oral durante 14 días.",
      "C": "Codeína jarabe cada 4 horas para frenar completamente la tos.",
      "D": "Antihistamínicos de primera generación (clorfeniramina) en gotas nasales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Dexametasona es el pilar terapéutico incuestionable del crup. Su prolongada vida media biológica (36 a 72 horas) y potente efecto antiinflamatorio glucocorticoide reducen de forma rápida el edema de la mucosa subglótica. Una sola dosis oral (incluso a dosis bajas de 0.15 mg/kg) ha demostrado reducir las hospitalizaciones, la necesidad de adrenalina nebulizada y las consultas de urgencia.",
    "officialGuidelineRef": "Lineamientos Técnicos del Crup Laríngeo, MINSAL, Farmacoterapia.",
    "distractorRationale": {
      "A": "Correcto. Dexametasona en dosis única (0.15-0.6 mg/kg) es el estándar terapéutico de elección.",
      "B": "El crup es viral; los antibióticos no tienen ninguna indicación terapéutica y no desinflaman la laringe.",
      "C": "Los antitusígenos opioides deprimen el centro respiratorio y están contraindicados en pediatría.",
      "D": "Los antihistamínicos espesan las secreciones traqueales empeorando la obstrucción."
    }
  },
  {
    "id": "iras-09",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Manejo del Crup Moderado-Severo con Adrenalina Nebulizada",
    "vignette": "Lactante de 18 meses con crup moderado presenta estridor inspiratorio marcado en reposo y tiraje intercostal evidente. En la UCSF se le administra Dexametasona y se decide nebulizar con L-adrenalina (epinefrina 1:1,000).",
    "statement": "¿Cuál es el tiempo mínimo de observación médica obligatoria en el establecimiento de salud tras nebulizar con adrenalina y por qué?",
    "options": {
      "A": "Observar al paciente durante al menos 2 a 4 horas en la UCSF, debido a que el efecto vasoconstrictor alfa-1 de la adrenalina dura solo 1 a 2 horas y puede presentarse un fenómeno de rebote con reaparición de la obstrucción respiratoria.",
      "B": "Dar el alta inmediata a los 3 minutos de terminar la nebulización.",
      "C": "Internar obligatoriamente durante 6 meses en aislamiento respiratorio.",
      "D": "No se requiere observación si el niño ya dejó de llorar."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La adrenalina nebulizada induce vasoconstricción arteriolar rápida en la mucosa subglótica por estímulo de receptores alfa-1, reduciendo el edema laríngeo en menos de 10 a 30 minutos. Sin embargo, su acción es transitoria (vida media de 1 a 2 horas). El paciente puede sufrir un \"efecto rebote\" al disiparse el fármaco, por lo que las guías exigen un período de vigilancia estricta de 2 a 4 horas antes de decidir el alta médica.",
    "officialGuidelineRef": "Guía de Manejo del Crup Moderado y Severo, MINSAL / OPS.",
    "distractorRationale": {
      "A": "Correcto. Observación mínima de 2-4 horas por el riesgo de efecto rebote de la adrenalina.",
      "B": "El alta prematura expone al niño a asfixia domiciliaria por rebote del edema subglótico.",
      "C": "Aislamiento excesivo no justificado en crup viral habitual.",
      "D": "El cese del llanto no garantiza la estabilidad de la vía aérea a mediano plazo."
    }
  },
  {
    "id": "iras-10",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Epiglotitis Aguda: Signos de Alarma y Contraindicación del Abatelenguas",
    "vignette": "Niño de 4 años no vacunado ingresa con fiebre alta de inicio súbito (39.8 °C), estridor inspiratorio leve, postura rígida en trípode (inclinado hacia adelante apoyado en las manos con cuello en hiperextensión), dificultad para deglutir con sialorrea abundante (babeo) y voz apagada o en \"papa caliente\".",
    "statement": "¿Cuál es la sospecha diagnóstica prioritaria y qué maniobra diagnóstica está TERMINANTEMENTE PROHIBIDA realizar sin intubación de rescate preparada?",
    "options": {
      "A": "Epiglotitis Aguda bacteriana; y está terminantemente prohibido examinar la orofaringe con abatelenguas o separar bruscamente al niño de sus padres, por riesgo inminente de desencadenar un laringoespasmo reflejo y obstrucción total mortal de la vía aérea.",
      "B": "Gingivoestomatitis herpética; debiendo raspar la lengua con abatelenguas de madera fuertemente.",
      "C": "Faringitis viral simple que se cura haciéndole cosquillas para que ría.",
      "D": "Ingesta accidental de helado muy frío."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La epiglotitis aguda (supraglotitis) es una emergencia médica extrema causada típicamente por bacterias invasivas (Haemophilus influenzae b, Streptococcus pyogenes). La inflamación masiva de la epiglotis obstruye la vía aérea. El niño adopta la postura en trípode para mantener permeable la laringe y babea por odinofagia intensa. Cualquier intento de visualizar la faringe con abatelenguas o provocar llanto/ansiedad puede precipitar un laringoespasmo y paro respiratorio inmediato.",
    "officialGuidelineRef": "Manual de Emergencias Respiratorias Pediátricas, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Epiglotitis aguda con contraindicación absoluta de usar abatelenguas por laringoespasmo fatal.",
      "B": "Raspar la faringe en sospecha de epiglotitis causa paro respiratorio inminente.",
      "C": "Desestimar la postura en trípode y la sialorrea como faringitis simple conduce a la muerte.",
      "D": "Distractor inconsistente con un cuadro febril obstructivo tóxico."
    }
  },
  {
    "id": "iras-11",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Bronquiolitis Aguda: Definición Clínica",
    "statement": "¿Cuál es la definición clínica estandarizada de BRONQUIOLITIS AGUDA en la población pediátrica según el consenso del MINSAL y la Academia Americana de Pediatría?",
    "options": {
      "A": "El primer episodio agudo de sibilancias y/o estertores crepitantes inspiratorios difusos, precedido de un cuadro catarral de vías aéreas superiores (rinorrea, congestión), que se presenta en lactantes menores de 2 años (pico máximo entre los 2 y 6 meses de edad).",
      "B": "La presencia de asma bronquial crónica en adolescentes deportistas con prueba de provocación positiva.",
      "C": "Una neumonía lobar bacteriana con cavitación apical en adultos mayores.",
      "D": "Tos crónica de más de 3 meses en niños escolares sin antecedentes patológicos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La bronquiolitis aguda es la infección viral del tracto respiratorio inferior más común en el primer año de vida. Se caracteriza típicamente por ser el PRIMER episodio de sibilancias y dificultad respiratoria (taquipnea, tiraje) precedido de 2 a 3 días de rinitis viral y febrícula en un lactante menor de 24 meses, con afectación inflamatoria y necrosis del epitelio bronquiolar con tapones de moco y fibrina.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Manejo de la Bronquiolitis, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Primer episodio de sibilancias en menor de 2 años precedido de catarro define la bronquiolitis.",
      "B": "El asma en adolescentes es una enfermedad inflamatoria crónica de vías aéreas mayores.",
      "C": "Corresponde a tuberculosis o absceso pulmonar en adultos.",
      "D": "La tos crónica > 3 meses exige investigar reflujo, fibrosis quística, asma o tuberculosis."
    }
  },
  {
    "id": "iras-12",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Etiología Viral de la Bronquiolitis",
    "statement": "¿Cuál es el agente viral responsable de más del 70% al 80% de los casos de bronquiolitis aguda y neumonía viral en lactantes atendidos en la red de salud del MINSAL?",
    "options": {
      "A": "Virus Sincitial Respiratorio (VSR).",
      "B": "Virus del Ébola.",
      "C": "Rotavirus tipo A.",
      "D": "Virus del Papiloma Humano serotipo 16."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Virus Sincitial Respiratorio (familia Pneumoviridae) es el agente predominante de la bronquiolitis y de infecciones del tracto respiratorio inferior en lactantes a nivel mundial y en El Salvador, presentando picos estacionales durante la época lluviosa. Otros agentes causales secundarios incluyen Rinovirus, Metapneumovirus humano, Bocavirus y Adenovirus.",
    "officialGuidelineRef": "Vigilancia Epidemiológica de Virus Respiratorios, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. El Virus Sincitial Respiratorio (VSR) es el causante primordial de bronquiolitis.",
      "B": "Filovirus causante de fiebre hemorrágica severa en África Central y Occidental.",
      "C": "Agente viral etiológico de gastroenteritis aguda diarreica en lactantes.",
      "D": "Virus oncogénico asociado a lesiones anogenitales y cáncer de cuello uterino."
    }
  },
  {
    "id": "iras-13",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Tratamiento de Soporte Basado en Evidencia en Bronquiolitis",
    "statement": "De acuerdo con las guías clínicas basadas en la evidencia del MINSAL y protocolos internacionales, ¿cuáles son los DOS pilares terapéuticos de soporte fundamentales demostrados para el manejo de la Bronquiolitis Aguda no complicada?",
    "options": {
      "A": "Mantenimiento de una adecuada hidratación y nutrición (fraccionando tomas de leche), y aseo o aspiración suave de secreciones de la vía aérea superior (fosas nasales con suero fisiológico), suplementando oxígeno únicamente si la SatO2 es < 90-92%.",
      "B": "Corticoides intravenosos en dosis altas combinados con tres antibióticos de amplio espectro.",
      "C": "Sedación profunda con benzodiacepinas para frenar el esfuerzo respiratorio del niño.",
      "D": "Inmersión del lactante en agua helada para estimular la respiración diafragmática."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Múltiples ensayos clínicos han demostrado que la gran mayoría de intervenciones farmacológicas carecen de beneficio en bronquiolitis viral. El pilar del tratamiento es el soporte: permeabilidad de la vía aérea alta (los lactantes son respiradores nasales obligados; el lavado suave con suero salino alivia la resistencia mecánica), hidratación oral o enteral adecuada, y oxigenoterapia normada solo ante hipoxemia documentada (SatO2 < 90-92%).",
    "officialGuidelineRef": "Guía Clínica de Atención de la Bronquiolitis en el Primer Nivel, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Desobstrucción nasal con suero salino, hidratación adecuada y oxígeno si hay hipoxemia es el tratamiento demostrado.",
      "B": "Los esteroides y antibióticos no tienen indicación en bronquiolitis viral aguda no complicada.",
      "C": "La sedación deprime el esfuerzo ventilatorio provocando acidosis hipercápnica y paro.",
      "D": "Maniobra aberrante que provoca hipotermia y choque."
    }
  },
  {
    "id": "iras-14",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Fármacos Desaconsejados de Rutina en Bronquiolitis",
    "statement": "¿Cuál de los siguientes fármacos ha demostrado sistemáticamente en ensayos clínicos y metaanálisis NO tener beneficio clínico rutinario, por lo que las guías del MINSAL desaconsejan su prescripción estándar en el primer episodio de bronquiolitis?",
    "options": {
      "A": "Broncodilatadores beta-2 inhalados (Salbutamol de rutina), corticoides sistémicos (dexametasona/prednisona) y antibióticos empíricos.",
      "B": "Solución salina fisiológica al 0.9% para lavado nasal.",
      "C": "La leche materna a libre demanda.",
      "D": "El agua potable para hidratación oral en niños mayores de 6 meses."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En la bronquiolitis la obstrucción de la vía aérea pequeña se debe a necrosis epitelial, infiltración linfocitaria submucosa y tapones de moco y fibrina, no a broncoespasmo del músculo liso (que es muy escaso en < 6 meses). Por ende, el salbutamol no es efectivo de rutina; los corticoides no acortan la estancia ni los síntomas; y los antibióticos no tienen acción sobre el VSR y seleccionan resistencia.",
    "officialGuidelineRef": "Lineamientos Técnicos del Manejo de la Bronquiolitis, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Ni salbutamol rutinario, ni esteroides, ni antibióticos están indicados en bronquiolitis típica.",
      "B": "El aseo nasal con solución fisiológica es una intervención de soporte indispensable.",
      "C": "La lactancia materna aporta anticuerpos e hidratación óptima.",
      "D": "El agua potable es adecuada como complemento hídrico en mayores de 6 meses."
    }
  },
  {
    "id": "iras-15",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Crisis Asmática Aguda: Manejo Inicial de Rescate",
    "vignette": "Niño de 7 años con diagnóstico de Asma Bronquial consulta a la UCSF con crisis de broncoespasmo agudo, taquipnea de 38 rpm, sibilancias espiratorias difusas y tiraje intercostal moderado.",
    "statement": "¿Cuál es el tratamiento de rescate de primera línea normado por el MINSAL para revertir el broncoespasmo en la primera hora?",
    "options": {
      "A": "Salbutamol inhalado en aerosol presurizado (MDI) con cámara espaciadora con válvula: 4 a 8 inhalaciones (puffs) cada 20 minutos durante la primera hora (3 ciclos consecutivos), reevaluando la respuesta clínica.",
      "B": "Amoxicilina oral 500 mg combinada con jarabe expectorante de ambroxol.",
      "C": "Inyección intramuscular de penicilina benzatínica de 1,200,000 UI.",
      "D": "Nebulización continua con agua de manzanilla hervida."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los agonistas beta-2 adrenérgicos de acción corta (SABA: Salbutamol) son los broncodilatadores de elección para crisis asmáticas agudas. El uso de inhalador de dosis medida (MDI) con aerocámara con válvula es tan o más eficaz que el nebulizador accionado por compresor, alcanzando mayor depósito pulmonar con menores efectos secundarios sistémicos. Se administran ciclos rápidos cada 20 minutos en la primera hora.",
    "officialGuidelineRef": "Guía Clínica de Manejo del Asma en Pediatría y el Adulto, MINSAL / GINA.",
    "distractorRationale": {
      "A": "Correcto. Salbutamol con aerocámara en ciclos de 20 min en la primera hora es el estándar de rescate.",
      "B": "El asma es inflamatoria/alérgica; los antibióticos y mucolíticos carecen de indicación.",
      "C": "La penicilina no dilata los bronquios y expone a reacciones anafilácticas graves.",
      "D": "Las vaporizaciones caseras de hierbas no resuelven el broncoespasmo y pueden inducir reactividad alérgica."
    }
  },
  {
    "id": "iras-16",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Corticoides Sistémicos en la Exacerbación Asmática",
    "statement": "En una crisis asmática moderada a severa que no responde completamente al primer ciclo de salbutamol inhalado, ¿por qué está indicada la administración temprana de un corticoide sistémico (Prednisona/Prednisolona oral) en la UCSF?",
    "options": {
      "A": "Porque suprime la cascada inflamatoria de citocinas, reduce el edema bronquial tardío, restaura la sensibilidad de los receptores beta-2 adrenérgicos y previene las recaídas y hospitalizaciones en los siguientes días.",
      "B": "Porque destruye físicamente los virus que causan el asma en 5 minutos.",
      "C": "Porque seda profundamente al paciente para que duerma 48 horas seguidas.",
      "D": "Porque disuelve el esputo transformándolo en saliva pura."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los corticoides sistémicos (Prednisona o Prednisolona oral a 1-2 mg/kg/día por 3 a 5 días) abordan el componente inflamatorio subyacente del asma. Su inicio temprano (en la primera hora de atención) reduce significativamente la tasa de ingresos hospitalarios, acorta la duración de la crisis y previene el deterioro tardío mediado por reclutamiento de eosinófilos y mastocitos.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Tratamiento del Asma, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Modulación antiinflamatoria y resensibilización de receptores beta-2 previenen recaídas.",
      "B": "Los glucocorticoides no tienen acción viricida directa.",
      "C": "No son fármacos hipnóticos ni sedantes.",
      "D": "Distractor fisiológico falso."
    }
  },
  {
    "id": "iras-17",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Criterios de Centor Modificados en Faringoamigdalitis",
    "statement": "En la atención de un paciente escolar con dolor de garganta en la UCSF, ¿cuáles son los 4 criterios clínicos de Centor modificados por McIsaac para estimar la probabilidad de etiología estreptocócica (Streptococcus pyogenes / EBHGA)?",
    "options": {
      "A": "1) Fiebre mayor a 38 °C; 2) Exudado o hipertrofia amigdalina purulenta; 3) Adenopatías cervicales anteriores dolorosas; y 4) Ausencia de tos (ajustado por edad).",
      "B": "1) Presencia de tos intensa; 2) Rinorrea acuosa; 3) Diarrea líquida; y 4) Ronquera.",
      "C": "1) Presión arterial sistólica mayor a 200 mmHg; 2) Dolor en el talón; 3) Cefalea matutina; y 4) Visión borrosa.",
      "D": "Los criterios de Centor solo evalúan si el paciente tiene caries dentales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los criterios de Centor / McIsaac permiten racionalizar el uso de antibióticos en faringoamigdalitis aguda, la cual es viral en más del 70% de los casos. La presencia de exudado amigdalino, adenopatías cervicales anteriores sensibles, fiebre > 38 °C y ausencia de tos otorga puntos que justifican prueba rápida/cultivo o inicio de tratamiento empírico con penicilina si el puntaje es >= 3-4.",
    "officialGuidelineRef": "Lineamientos Técnicos para el Abordaje de Faringoamigdalitis Aguda, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Exudado, adenopatía dolorosa anterior, fiebre y ausencia de tos son los criterios de Centor.",
      "B": "La tos, rinorrea, disfonía y diarrea son síntomas clásicos de infección VIRAL (adenovirus, rinovirus).",
      "C": "Signos ajenos al examen faríngeo.",
      "D": "Escala médica de estratificación infecciosa bacteriana, no odontológica."
    }
  },
  {
    "id": "iras-18",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Prevención de Fiebre Reumática Aguda",
    "statement": "¿Cuál es el objetivo epidemiológico y clínico principal de administrar Penicilina Benzatínica intramuscular en dosis única (o Amoxicilina oral por 10 días completos) en una faringoamigdalitis estreptocócica confirmada en niños de 5 a 15 años?",
    "options": {
      "A": "Erradicar Streptococcus pyogenes de la orofaringe para prevenir la Fiebre Reumática Aguda y la cardiopatía reumática crónica valvular.",
      "B": "Acelerar la curación de la faringitis en 30 segundos.",
      "C": "Prevenir la aparición de apendicitis aguda.",
      "D": "Evitar que el niño contagie el virus de la influenza a sus compañeros."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Streptococcus pyogenes (estreptococo betahemolítico del grupo A) puede desencadenar una respuesta autoinmune por mimetismo molecular (anticuerpos contra proteína M que reaccionan de forma cruzada contra el tejido cardíaco, articular y cerebral: criterios de Jones). El tratamiento antibiótico tiene como fin primordial erradicar la bacteria para evitar la Fiebre Reumática y la valvulopatía reumática mitral/aórtica.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención de la Fiebre Reumática, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La prevención de la fiebre reumática aguda y daño valvular cardíaco es el fin supremo del tratamiento.",
      "B": "El alivio sintomático ocurre a las 24-48 horas, no de forma instantánea.",
      "C": "No tiene relación fisiopatológica con la apendicitis.",
      "D": "La penicilina es antibacteriana y no previene infecciones virales como influenza."
    }
  },
  {
    "id": "iras-19",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Otitis Media Aguda (OMA) en Pediatría",
    "vignette": "Lactante de 14 meses presenta irritabilidad nocturna, llanto al tocarse la oreja derecha y fiebre de 38.5 °C tras un catarro de 3 días. A la otoscopía se observa membrana timpánica derecha intensamente hiperémica, opaca, abombada hacia el conducto y con disminución de la movilidad.",
    "statement": "¿Cuál es el diagnóstico clínico y el tratamiento antibiótico de elección según las guías del MINSAL?",
    "options": {
      "A": "Otitis Media Aguda (OMA); y el tratamiento de primera línea es Amoxicilina oral a dosis de 80 a 90 mg/kg/día durante 7 a 10 días.",
      "B": "Otitis externa bacteriana que se cura únicamente con gotas de aceite de oliva tibio.",
      "C": "Mastoiditis quirúrgica fulminante que exige mastoidectomía radical de emergencia.",
      "D": "Traumatismo por objeto extraño que debe extraerse con pinzas sin luz."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La presencia de abombamiento de la membrana timpánica con eritema marcado e hipomovilidad confirma OMA bacteriana (Streptococcus pneumoniae, Haemophilus influenzae no tipificable, Moraxella catarrhalis). En niños menores de 2 años con síntomas moderados-severos o fiebre alta, la antibioticoterapia oral de primera línea obligada es amoxicilina a dosis altas (80-90 mg/kg/día).",
    "officialGuidelineRef": "Guía Clínica de Infecciones del Oído, Nariz y Garganta en Atención Primaria, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. OMA confirmada por abombamiento timpánico tratada con amoxicilina a 80-90 mg/kg/día.",
      "B": "La otitis externa afecta el conducto auditivo externo con dolor a la tracción del trago; el abombamiento timpánico es de oído medio.",
      "C": "La mastoiditis cursa con desplazamiento del pabellón auricular y eritema retroauricular retroauricular franco.",
      "D": "No hay antecedente ni imagen de cuerpo extraño en el conducto."
    }
  },
  {
    "id": "iras-20",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Criterios de Sospecha de Rinosinusitis Bacteriana Aguda",
    "statement": "¿Cuál de los siguientes cursos clínicos en un adulto o niño con una infección de vías aéreas superiores permite diferenciar una Rinosinusitis Bacteriana Aguda de un resfriado viral común en la consulta de la UCSF?",
    "options": {
      "A": "Persistencia de los síntomas respiratorios (rinorrea purulenta, congestión nasal, dolor o presión facial) durante más de 10 días continuos sin ninguna mejoría, o un curso de \"doble empeoramiento\" (empeoramiento súbito con fiebre y dolor tras mejoría inicial).",
      "B": "Rinorrea transparente que dura menos de 48 horas en un paciente afebril.",
      "C": "Aparición de dolor de muelas exclusivamente al masticar alimentos crujientes.",
      "D": "Presencia de estornudos aislados al entrar en contacto con perfumes fuertes."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La gran mayoría de las rinosinusitis inician como virales y resuelven espontáneamente en 7 a 10 días. Los criterios diagnósticos para sospechar sobreinfección bacteriana e iniciar antibióticos son: 1) Síntomas persistentes > 10 días sin evidencia de mejoría clínica; 2) Inicio severo con fiebre alta (>= 39 °C) y rinorrea purulenta por 3-4 días consecutivos; o 3) \"Doble empeoramiento\" (empeoramiento clínico brusco tras una mejoría inicial de 5-6 días).",
    "officialGuidelineRef": "Guía Clínica para el Manejo de Rinosinusitis Aguda, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Duración > 10 días sin mejoría o patrón de doble empeoramiento define la sinusitis bacteriana.",
      "B": "Evolución normal de un resfriado viral autolimitado.",
      "C": "Corresponde a patología pulpar u odontogénica local.",
      "D": "Respuesta vasomotora o rinitis no alérgica refleja."
    }
  },
  {
    "id": "iras-21",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Tos Ferina (Bordetella pertussis): Fases Clínicas",
    "vignette": "Lactante de 3 meses, con esquema de vacunación incompleto, presenta accesos repetitivos y violentos de tos paroxística en salvas (10 a 15 golpes de tos continuos durante una sola espiración) que culminan con un estridor inspiratorio prolongado (\"gallo laringeo\"), cianosis facial y vómito posterior al acceso de tos.",
    "statement": "¿Cuál es el diagnóstico clínico y el agente etiológico responsable?",
    "options": {
      "A": "Tos Ferina (Coqueluche / Síndrome Coqueluchoide), causada por la bacteria Bordetella pertussis.",
      "B": "Laringitis alérgica simple por polen de flores.",
      "C": "Aspiración crónica de agua de mar en piscina municipal.",
      "D": "Ruptura diafragmática congénita bilateral."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La tos ferina cursa clásicamente por tres fases: catarral (1-2 semanas, similar a catarro común pero altamente contagiosa); paroxística (2-6 semanas, caracterizada por las salvas de tos quintosa emetizante, estridor o \"whoop\" inspiratorio y cianosis); y de convalecencia. En lactantes menores puede manifestarse sin estridor clásico pero con episodios de apnea potencialmente letales y leucocitosis extrema con linfocitosis.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Vigilancia y Manejo de la Tos Ferina, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Bordetella pertussis y los paroxismos de tos con gallo inspiratorio y vómito definen la tos ferina.",
      "B": "El cuadro es infeccioso grave, no una alergia leve.",
      "C": "No concuerda con la presentación de accesos paroxísticos infecciosos en salvas.",
      "D": "Patología quirúrgica estructural que causa distrés inmediato neonatal."
    }
  },
  {
    "id": "iras-22",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Tratamiento y Profilaxis de Contactos en Tos Ferina",
    "statement": "¿Cuál es la familia de antibióticos de elección recomendada por el MINSAL tanto para el tratamiento del caso como para la quimioprofilaxis de contactos cercanos en un brote de Tos Ferina?",
    "options": {
      "A": "Macrólidos (Azitromicina como fármaco de elección a 10 mg/kg/día durante 5 días; o Claritromicina por 7 días).",
      "B": "Aminoglucósidos (Gentamicina intravenosa durante 21 días).",
      "C": "Tetraciclinas orales en todos los neonatos.",
      "D": "Antifúngicos azólicos (Fluconazol oral) en megadosis."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los macrólidos son los antimicrobianos de elección para Bordetella pertussis. La Azitromicina (10 mg/kg/día dosis única diaria por 5 días en lactantes) es el fármaco preferido debido a su alta eficacia bacteriológica, excelente penetración respiratoria tisular, dosificación sencilla y perfil de seguridad superior (menor riesgo de estenosis hipertrófica de píloro en neonatos en comparación con la eritromicina).",
    "officialGuidelineRef": "Guía Clínica de Manejo y Control de Brotes de Tos Ferina, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La azitromicina por 5 días es el macrólido de elección para tratamiento y contactos.",
      "B": "Los aminoglucósidos son ineficaces contra Bordetella en las secreciones del epitelio traqueal.",
      "C": "Las tetraciclinas están contraindicadas en niños menores de 8 años por daño óseo y dental.",
      "D": "La tos ferina es una infección bacteriana, no micótica."
    }
  },
  {
    "id": "iras-23",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Neumonía Atípica Comunitaria por Mycoplasma",
    "statement": "En un escolar de 10 años o adolescente con cuadro de 2 semanas de tos seca persistente, cefalea, febrícula, escasos hallazgos a la auscultación pulmonar pero con radiografía de tórax que muestra infiltrados intersticiales reticulonodulares bilaterales difusos (\"disociación clínico-radiológica\"), ¿cuál es el patógeno causal más probable y el tratamiento indicado?",
    "options": {
      "A": "Mycoplasma pneumoniae (neumonía atípica comunitaria); tratado con Macrólidos (Azitromicina o Claritromicina).",
      "B": "Pseudomonas aeruginosa; tratado con colistina intravenosa.",
      "C": "Pneumocystis jirovecii en paciente inmunocompetente.",
      "D": "Bacillus anthracis (ántrax pulmonar inhalado)."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Mycoplasma pneumoniae y Chlamydia pneumoniae son causas comunes de neumonía atípica comunitaria en niños mayores de 5 años y adultos jóvenes. Se caracterizan por la clásica disociación clínico-radiológica (el paciente no luce muy tóxico y la auscultación tiene pocos crepitantes, pero la radiografía muestra infiltrados intersticiales llamativos). Al carecer de pared celular de peptidoglicano, son inmunes a betalactámicos; el tratamiento de elección son macrólidos.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico de Neumonías Atípicas, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Mycoplasma pneumoniae causa disociación clínico-radiológica y responde a macrólidos.",
      "B": "Pseudomonas causa neumonías intrahospitalarias severas en pacientes ventilados o con bronquiectasias.",
      "C": "Pneumocystis afecta predominantemente a pacientes con inmunodeficiencia celular severa (CD4 < 200).",
      "D": "Enfermedad infecciosa zoonótica rara asociada a esporas en bioterrorismo o contacto con ganado."
    }
  },
  {
    "id": "iras-24",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Indicación de Antivirales en Influenza Estacional",
    "statement": "¿Cuál es el inhibidor de la neuraminidasa antiviral normado por el MINSAL para el tratamiento de pacientes con sospecha de Influenza grave o con factores de alto riesgo de complicaciones (embarazadas, ancianos, asmáticos, diabéticos), y dentro de qué plazo ideal desde el inicio de síntomas debe administrarse?",
    "options": {
      "A": "Oseltamivir oral (75 mg dos veces al día en adultos durante 5 días), administrado idealmente dentro de las primeras 48 horas tras el inicio de los síntomas para máxima efectividad clínica.",
      "B": "Aciclovir tópico en los labios durante 30 días.",
      "C": "Zidovudina intravenosa en bolo único.",
      "D": "Ganciclovir oftálmico en gotas nasales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Oseltamivir inhibe la neuraminidasa viral, bloqueando la liberación de nuevos viriones de Influenza A y B desde las células infectadas. Cuando se inicia dentro de las primeras 48 horas de evolución, reduce significativamente la duración de los síntomas, la gravedad de las complicaciones (neumonía secundaria) y la mortalidad. En pacientes graves u hospitalizados, debe iniciarse incluso si han transcurrido más de 48 horas.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Prevención y Tratamiento de la Influenza, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Oseltamivir oral 75 mg c/12h por 5 días en las primeras 48 horas es el protocolo antiviral normado.",
      "B": "El aciclovir está indicado para infecciones por Herpes virus (HSV y VZV), no para influenza.",
      "C": "Antirretroviral inhibidor de transcriptasa inversa indicado en VIH.",
      "D": "Antiviral específico para Citomegalovirus (CMV)."
    }
  },
  {
    "id": "iras-25",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Uso Racional de Medicamentos en el Resfriado Común Pediátrico",
    "statement": "En la consulta de la UCSF se atiende a un lactante de 8 meses con un resfriado común viral de 2 días de evolución (rinorrea acuosa y estornudos). ¿Por qué las guías oficiales del MINSAL y la OMS prohíben la prescripción de jarabes antihistamínicos descongestionantes (antigripales con fenilefrina o clorfeniramina) en menores de 2 a 4 años?",
    "options": {
      "A": "Porque no han demostrado eficacia para acortar el cuadro viral y conllevan riesgo elevado de efectos adversos severos como taquicardia, sedación profunda, depresión respiratoria, convulsiones e intoxicación accidental.",
      "B": "Porque eliminan la capacidad del lactante de producir anticuerpos para toda la vida.",
      "C": "Porque son medicamentos destinados exclusivamente a pacientes geriátricos en hospicios.",
      "D": "Porque tiñen los pulmones de color negro en las radiografías."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los medicamentos antigripales combinados de venta libre (que contienen descongestionantes simpaticomiméticos como fenilefrina/pseudoefedrina y antihistamínicos sedantes) carecen de eficacia comprobada en menores de 2 a 4 años y se asocian a una morbilidad iatrogénica muy alta (arritmias, alucinaciones, convulsiones y muerte por sobredosis involuntaria). El tratamiento del resfriado es lavado nasal con solución salina y líquidos abundantes.",
    "officialGuidelineRef": "Alerta Sanitaria y Guía Clínica de Uso Racional de Medicamentos en IRAS, MINSAL / DNM.",
    "distractorRationale": {
      "A": "Correcto. La falta de eficacia y el alto riesgo de eventos adversos neurológicos/cardíacos contraindica antigripales en lactantes.",
      "B": "No producen inmunodeficiencia humoral permanente.",
      "C": "No son de indicación geriátrica exclusiva.",
      "D": "Efecto radiológico inexistente."
    }
  },
  {
    "id": "iras-26",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Complicaciones de Neumonía: Derrame Paraneumónico y Empiema",
    "vignette": "Niño de 5 años diagnosticado con NAC bacteriana que recibió amoxicilina oral durante 72 horas presenta fiebre persistente de 39.5 °C, dolor pleurítico en hemitórax derecho, matidez marcada a la percusión en la base derecha y abolición total del murmullo vesicular.",
    "statement": "¿Cuál es la complicación pulmonar que debe sospecharse inmediatamente y cuál es el procedimiento diagnóstico inicial?",
    "options": {
      "A": "Derrame pleural paraneumónico o empiema pleural; confirmado mediante radiografía de tórax en decúbito lateral / ultrasonido torácico y toracocentesis diagnóstica.",
      "B": "Pericarditis constrictiva postraumática.",
      "C": "Fractura clavicular espontánea bilateral.",
      "D": "Apendicitis retrocecal perforada."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El derrame paraneumónico y empiema es la complicación supurativa más frecuente de la neumonía bacteriana en niños (principalmente por Streptococcus pneumoniae y Staphylococcus aureus). La falta de mejoría tras 48-72h de antibiótico adecuado, con matidez y silencio auscultatorio, obliga a obtener imagen (ecografía torácica / radiografía) y realizar punción pleural (toracocentesis) para análisis citoquímico, tinción de Gram y cultivo del líquido pleural.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Manejo de Neumonía Complicada, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Derrame paraneumónico/empiema evidenciado por persistencia febril, matidez y silencio auscultatorio.",
      "B": "La patología se localiza en el parénquima pulmonar y espacio pleural, no primariamente en el pericardio.",
      "C": "La fractura clavicular produce dolor local y crepitación ósea, no matidez pulmonar.",
      "D": "Cuadro abdominal que no explica la semiología torácica directa."
    }
  },
  {
    "id": "iras-27",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Absceso Periamigdalino: Signos Clínicos Cardinales",
    "statement": "¿Cuáles son las manifestaciones clínicas clásicas que permiten identificar un Absceso Periamigdalino (complicación supurativa profunda de una faringoamigdalitis) en el examen físico de la orofaringe?",
    "options": {
      "A": "Trismo intenso (dificultad severa o dolor al abrir la boca), abombamiento asimétrico del pilar amigdalino anterior y paladar blando con desviación contralateral de la úvula, y voz gangosa o en \"papa caliente\".",
      "B": "Presencia de dientes blancos y brillantes sin caries.",
      "C": "Aparición de lengua pilosa negra sin dolor ni fiebre.",
      "D": "Ulceraciones en la piel de la planta de los pies exclusivamente."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El absceso periamigdalino (flemon o colección purulenta entre la cápsula amigdalina y el músculo constrictor superior de la faringe) se distingue de la amigdalitis no complicada por la marcada asimetría orofaríngea: protrusión medial del pilar afectado que desplaza la úvula hacia el lado sano contralateral, asociado a trismo por irritación refleja del músculo pterigoideo interno y voz de papa caliente. Exige drenaje quirúrgico y antibióticos intravenosos.",
    "officialGuidelineRef": "Manual de Urgencias Otorrinolaringológicas en Atención Primaria, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Trismo, protrusión asimétrica, desviación de úvula y voz en papa caliente confirman absceso periamigdalino.",
      "B": "Higiene oral normal, no signo patológico.",
      "C": "La lengua vellosa negra es una hipertrofia benigna de papilas filiformes por tabaco o antibióticos.",
      "D": "Localización cutánea no faríngea (enfermedad mano-pie-boca)."
    }
  },
  {
    "id": "iras-28",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Oximetría de Pulso y Criterios de Hipoxemia en Atención Primaria",
    "statement": "Al evaluar a un paciente con dificultad respiratoria en la UCSF, ¿cuál es el valor de Saturación de Oxígeno (SatO2) por pulsioximetría a nivel del mar o altitudes medias (< 1,500 m) que define HIPOXEMIA e indica la administración inmediata de oxígeno suplementario?",
    "options": {
      "A": "Saturación de oxígeno menor o igual al 90% a 92% respirando aire ambiente.",
      "B": "Saturación de oxígeno del 99% al 100%.",
      "C": "Saturación de oxígeno exactamente en 97% en reposo.",
      "D": "Solo se administra oxígeno si la saturación cae por debajo del 10%."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La pulsioximetría es el quinto signo vital. Según los estándares del MINSAL y la OMS, una SatO2 <= 92% (o <= 90% en algunas guías) define hipoxemia clínicamente significativa, indicando la administración inmediata de oxígeno mediante cánula nasal (1 a 3 L/min) o mascarilla con reservorio para mantener metas de saturación entre 94% y 98% (o 88-92% en pacientes con riesgo de insuficiencia hipercápnica/EPOC).",
    "officialGuidelineRef": "Lineamientos Técnicos para la Oxigenoterapia y Manejo de IRAS Graves, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. SatO2 < 90-92% define hipoxemia que exige soporte inmediato de oxigenoterapia.",
      "B": "Valores normales de saturación en aire ambiente.",
      "C": "Saturación adecuada en rango fisiológico óptimo.",
      "D": "Un nivel < 10% es incompatible con la supervivencia celular cerebral."
    }
  },
  {
    "id": "iras-29",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Impacto Inmunológico del PAI en la Reducción de Neumonías",
    "statement": "¿Cuáles son las DOS vacunas bacterianas conjugadas del Esquema Nacional del Programa Ampliado de Inmunizaciones (PAI) de El Salvador que han logrado la mayor reducción histórica en la incidencia de neumonías bacterianas graves, sepsis y meningitis en lactantes menores?",
    "options": {
      "A": "Vacuna Neumocócica Conjugada (PCV13 contra Streptococcus pneumoniae) y Vacuna Pentavalente (componente Hib contra Haemophilus influenzae tipo b).",
      "B": "Vacuna contra la rabia canina y vacuna contra el tétanos neonatal.",
      "C": "Vacuna oral contra la fiebre tifoidea y vacuna anticolérica.",
      "D": "Vacuna contra el carbunco inhalado en dosis semestrales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Antes de la introducción masiva de estas vacunas, Streptococcus pneumoniae y Haemophilus influenzae tipo b eran los mayores causantes de mortalidad infantil por neumonía bacteriémica y meningitis purulenta. La vacuna conjugada neumocócica (PCV13 a los 2, 4 y 12 meses) y la pentavalente (que incluye Hib a los 2, 4 y 6 meses) confieren inmunidad mucosa y de rebaño, transformando el perfil epidemiológico de las IRAS infantiles.",
    "officialGuidelineRef": "Lineamientos Técnicos del Programa Ampliado de Inmunizaciones (PAI), MINSAL.",
    "distractorRationale": {
      "A": "Correcto. PCV13 y Pentavalente (Hib) han reducido drásticamente la mortalidad por neumonía y meningitis bacteriana.",
      "B": "Vacunas orientadas a tétanos y rabia, no a neumonía comunitaria bacteriana masiva.",
      "C": "Vacunas para infecciones entéricas gastrointestinales.",
      "D": "Vacuna de uso biodefensivo militar restringido."
    }
  },
  {
    "id": "iras-30",
    "category": "iras",
    "categoryLabel": "Infecciones Respiratorias Agudas (IRAS)",
    "clinicalArea": "Neumonía por Aspiración en Adultos Mayores Frágiles",
    "statement": "En un paciente anciano de 82 años con antecedente de Accidente Cerebrovascular con secuelas de disfagia, postrado en cama, que presenta fiebre, taquipnea y esputo fétido, ¿cuál es el mecanismo fisiopatológico de la Neumonía por Aspiración y qué segmentos pulmonares se afectan con mayor frecuencia en decúbito dorsal?",
    "options": {
      "A": "Inhalación patológica de secreciones orofaríngeas o contenido gástrico colonizado por flora mixta (anaerobios orales y bacilos gramnegativos entéricos), afectando predominantemente el segmento superior del lóbulo inferior derecho o el segmento posterior del lóbulo superior derecho por anatomía del bronquio principal derecho.",
      "B": "Infección transmitida exclusivamente por la picadura de mosquitos anofeles dentro de la habitación.",
      "C": "Aspiración de partículas de polvo ambiental que causa fibrosis pulmonar en 20 minutos.",
      "D": "Afectación exclusiva de los lóbulos anteriores de las cuerdas vocales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En ancianos con disfagia neurológica o depresión del sensorio, el reflejo de tos y el cierre glótico fallan, permitiendo la microaspiración masiva de contenido orofaríngeo anaerobio (Peptostreptococcus, Fusobacterium, Bacteroides) hacia el árbol traqueobronquial. Debido a que el bronquio principal derecho es más vertical, ancho y recto que el izquierdo, el material aspirado en decúbito supino se deposita gravitacionalmente en el segmento apical del lóbulo inferior derecho.",
    "officialGuidelineRef": "Guía de Diagnóstico y Manejo de Neumonía en el Anciano, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Microaspiración de flora oral mixta anaerobia en segmentos declives del pulmón derecho.",
      "B": "Los mosquitos transmiten arbovirosis o paludismo, no neumonía por aspiración.",
      "C": "La neumoconiosis por polvos minerales requiere décadas de exposición ocupacional crónica.",
      "D": "Las cuerdas vocales no poseen lóbulos pulmonares anatómicamente."
    }
  },
  {
    "id": "mat-01",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Cálculo de Fecha Probable de Parto (Regla de Naegele)",
    "vignette": "Gestante acude a su primer control prenatal a la UCSF refiriendo como Fecha de Última Menstruación (FUM) confiable y regular el 10 de marzo de 2026.",
    "statement": "Aplicando la Regla de Naegele estandarizada en los lineamientos técnicos del MINSAL para el cálculo de la Fecha Probable de Parto (FPP), ¿cuál es la fecha esperada del parto?",
    "options": {
      "A": "17 de diciembre de 2026 (FUM + 7 días, - 3 meses, + 1 año: 10 + 7 = 17; marzo - 3 meses = diciembre).",
      "B": "10 de octubre de 2026.",
      "C": "10 de marzo de 2027.",
      "D": "1 de enero de 2026."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Regla de Naegele es la fórmula universal adoptada en el Carné Perinatal del CLAP/OPS y MINSAL para calcular la Fecha Probable de Parto (FPP) a partir de una FUM cierta: se suman 7 días al primer día de la última regla y se restan 3 meses al mes calendario, sumando un año si corresponde (FPP = FUM + 7 días - 3 meses + 1 año). En este caso: 10 + 7 = 17; mes 3 (marzo) - 3 meses = mes 12 (diciembre de 2026).",
    "officialGuidelineRef": "Lineamientos Técnicos para la Atención Integral del Control Prenatal, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La regla de Naegele (+7 días, -3 meses) da con exactitud el 17 de diciembre de 2026.",
      "B": "Cálculo erróneo que suma 7 meses a la FUM.",
      "C": "Corresponde a un embarazo de 12 meses completos, biológicamente imposible.",
      "D": "Fecha previa al inicio del embarazo."
    }
  },
  {
    "id": "mat-02",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Suplementación con Ácido Fólico y Hierro en el Embarazo",
    "statement": "¿Cuál es la dosis diaria recomendada y el momento de inicio del ÁCIDO FÓLICO y del HIERRO ELEMENTAL según la guía oficial de control prenatal del MINSAL para prevenir defectos del tubo neural y anemia materna?",
    "options": {
      "A": "Ácido Fólico: 400 mcg (0.4 mg) al día por vía oral iniciado idealmente en el período preconcepcional (al menos 1 mes antes del embarazo) y continuado durante el primer trimestre; Hierro Elemental: 60 mg al día a partir del segundo trimestre.",
      "B": "Ácido Fólico: 50 gramos al día durante el trabajo de parto exclusivamente.",
      "C": "Hierro intravenoso semanal desde el primer día de retraso menstrual sin indicación clínica.",
      "D": "No se debe administrar ningún suplemento vitamínico durante la gestación."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El cierre del tubo neural embrionario ocurre entre los días 21 y 28 post-concepción (antes de que muchas mujeres sepan que están embarazadas). La suplementación periconcepcional con 400 mcg/día de ácido fólico previene hasta el 70% de casos de anencefalia y espina bífida (en mujeres con antecedente previo se indica 4-5 mg/día). El sulfato ferroso (60 mg de hierro elemental) previene la anemia ferropénica por hemodilución y aumento de masa eritrocitaria.",
    "officialGuidelineRef": "Guía Clínica de Atención Prenatal y Suplementación con Micronutrientes, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. 400 mcg de ácido fólico periconcepcional y 60 mg de hierro elemental en la gestación es la norma oficial.",
      "B": "50 gramos es una sobredosis masiva tóxica y el momento de parto es inútil para la embriogénesis neural.",
      "C": "El hierro IV se reserva para intolerancia oral refractaria o anemia severa en 3er trimestre.",
      "D": "La deficiencia de folato y hierro es endémica sin suplementación profiláctica."
    }
  },
  {
    "id": "mat-03",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Tamizaje y Tratamiento de Sífilis Gestacional (VDRL/RPR)",
    "vignette": "Gestante de 12 semanas asiste a su primera consulta de control prenatal en la UCSF. Su prueba serológica no treponémica (VDRL) resulta reactiva en 1:16 diluciones, confirmándose Sífilis Gestacional temprana sin síntomas clínicos.",
    "statement": "¿Cuál es el tratamiento antibiótico normado de elección para la paciente y su pareja sexual para prevenir la sífilis congénita y la muerte fetal intrauterina?",
    "options": {
      "A": "Penicilina G Benzatínica intramuscular: 2.4 millones de UI en dosis única profunda a la gestante y tratamiento simultáneo a la pareja con igual esquema; o 3 dosis semanales si es de duración indeterminada o tardía.",
      "B": "Ciprofloxacina oral durante 3 días.",
      "C": "Doxiciclina oral durante 4 semanas en la embarazada.",
      "D": "No dar ningún tratamiento hasta después del nacimiento para no molestar al feto."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La penicilina es el único antibacteriano con eficacia documentada para tratar la sífilis en la madre y atravesar la barrera placentaria para prevenir o tratar la infección en el feto. Para sífilis primaria, secundaria o latente precoz (< 1 año), la dosis es Penicilina G Benzatínica 2.4 millones UI IM dosis única. Es imperativo tratar simultáneamente a los contactos sexuales para evitar reinfección. Las tetraciclinas están formalmente contraindicadas.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Eliminación de la Transmisión Materno-Infantil del VIH y la Sífilis Congénita (ETMI-Plus), MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Penicilina G Benzatínica 2.4 M UI IM a la madre y su pareja es el único esquema que cura y protege al feto.",
      "B": "Las fluoroquinolonas no son activas contra Treponema pallidum y están contraindicadas en la gestación.",
      "C": "Las tetraciclinas (doxiciclina) dañan el hueso y tiñen los dientes del feto y están contraindicadas.",
      "D": "No tratar la sífilis gestacional resulta en aborto espontáneo, óbito fetal o sífilis congénita grave."
    }
  },
  {
    "id": "mat-04",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Tamizaje Universal de VIH y Profilaxis de Transmisión Vertical",
    "statement": "En el marco de la estrategia nacional ETMI-Plus del MINSAL, ¿cuál es el protocolo para el tamizaje de VIH en toda mujer embarazada durante el control prenatal?",
    "options": {
      "A": "Ofrecimiento universal de prueba rápida de VIH en la primera consulta prenatal (con consejería previa y consentimiento informado), repitiéndose en el tercer trimestre y durante el trabajo de parto si pertenece a poblaciones clave o de riesgo.",
      "B": "Realizar la prueba únicamente si la paciente tiene síntomas evidentes de SIDA avanzado.",
      "C": "Prohibir la prueba de VIH a las mujeres menores de 18 años.",
      "D": "Tomar la prueba solo después de que el bebé cumpla 1 año de edad."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El tamizaje universal de VIH con prueba rápida en sangre capilar o venosa en el primer control prenatal permite el diagnóstico oportuno y el inicio inmediato de la Terapia Antirretroviral (TARV), reduciendo la tasa de transmisión vertical del VIH de más del 30-40% a menos del 1-2%. Si el resultado es reactivo, se confirma con una segunda prueba rápida o algoritmo nacional y se refiere de inmediato a la Clínica de Atención Integral (CAI).",
    "officialGuidelineRef": "Manual de Normas para la Prevención de la Transmisión Vertical del VIH, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Prueba rápida universal en 1er control con repetición en 3er trimestre y parto es la estrategia oficial.",
      "B": "La mayoría de gestantes con VIH son asintomáticas; esperar síntomas tardíos condena al feto a la infección.",
      "C": "La Ley Crecer Juntos y la Ley de VIH garantizan el acceso al tamizaje confidencial en adolescentes.",
      "D": "Postergar el tamizaje pierde la ventana crítica de profilaxis antirretroviral prenatal y perinatal."
    }
  },
  {
    "id": "mat-05",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Bacteriuria Asintomática en la Gestante",
    "vignette": "Gestante de 14 semanas asiste a su control prenatal de rutina completamente asintomática. El urocultivo de tamizaje reporta crecimiento de Escherichia coli con más de 100,000 UFC/mL (Bacteriuria Asintomática).",
    "statement": "¿Por qué la bacteriuria asintomática DEBE tratarse obligatoriamente con antibióticos en la mujer embarazada a diferencia de la mujer no gestante?",
    "options": {
      "A": "Porque debido a la dilatación pielocalicial por progesterona y compresión ureteral mecánica, entre el 20% y 40% de las gestantes con bacteriuria asintomática no tratada progresan a Pielonefritis Aguda grave, con riesgo de sepsis, amenaza de parto pretérmino y bajo peso al nacer.",
      "B": "Porque las bacterias en la vejiga perforan el útero y colonizan el líquido amniótico en 24 horas.",
      "C": "Porque la orina de la embarazada se vuelve inflamable si contiene bacterias.",
      "D": "No debe tratarse ningún cultivo urinario si la mujer no siente dolor al orinar."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los cambios hormonales del embarazo (altos niveles de progesterona que relajan el músculo liso ureteral) y el dextrogro y compresión del útero grávido provocan estasis urinaria e hidronefrosis fisiológica. Esto predispone a que bacterias vesicales asintomáticas asciendan rápidamente hacia la pelvis renal. La bacteriuria asintomática debe tratarse siempre (con Cefalexina, Amoxicilina/Clavulanato o Nitrofurantoína hasta semana 36) y realizarse urocultivo de control posterior.",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico y Manejo de Infecciones del Tracto Urinario en el Embarazo, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. El riesgo del 20-40% de progresión a pielonefritis y parto prematuro justifica el tratamiento obligatorio.",
      "B": "Mecanismo anatómicamente absurdo.",
      "C": "Distractor fantasioso.",
      "D": "En mujeres no gestantes la bacteriuria asintomática no suele tratarse, pero en el embarazo es mandatorio tratarla siempre."
    }
  },
  {
    "id": "mat-06",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Preeclampsia con Criterios de Severidad: Criterios Diagnósticos",
    "statement": "¿Cuál de los siguientes hallazgos clínicos o laboratoriales en una gestante de 32 semanas clasifica su cuadro como PREECLAMPSIA CON CRITERIOS DE SEVERIDAD (Código Naranja) requiriendo hospitalización inmediata?",
    "options": {
      "A": "Presión Arterial Sistólica >= 160 mmHg y/o Presión Diastólica >= 110 mmHg, cefalea pulsátil refractaria a analgésicos, escotomas centellantes (visión borrosa), epigastralgia o dolor en hipocondrio derecho, trombocitopenia (< 100,000/uL) o creatinina sérica > 1.1 mg/dL.",
      "B": "Edema maleolar bilateral leve al final de la jornada laboral con PA de 110/70 mmHg.",
      "C": "Presión arterial de 125/80 mmHg con náuseas matutinas leves en semana 8.",
      "D": "Frecuencia cardíaca fetal de 140 lpm sin contracciones uterinas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La preeclampsia severa es un síndrome multisistémico vasoespástico endotelial. Los criterios de severidad indican disfunción inminente de órganos diana: cifras graves de PA (>= 160/110), síntomas premonitorios de eclampsia del SNC (cefalea intensa, escotomas, hiperreflexia), dolor en hipocondrio derecho (isquemia hepática / distensión de la cápsula de Glisson), síndrome HELLP (plaquetas < 100,000, transaminasas elevadas, hemólisis microangiopática) o insuficiencia renal.",
    "officialGuidelineRef": "Guía Clínica de Manejo de los Trastornos Hipertensivos del Embarazo, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. PA >= 160/110, síntomas neurológicos, epigastralgia y trombocitopenia definen preeclampsia severa.",
      "B": "El edema maleolar dependiente es un hallazgo fisiológico frecuente en el embarazo normal.",
      "C": "Presión normal y náuseas fisiológicas del primer trimestre.",
      "D": "Frecuencia cardíaca fetal normal (rango 110-160 lpm)."
    }
  },
  {
    "id": "mat-07",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Prevención de Eclampsia: Esquema de Zuspan con Sulfato de Magnesio",
    "statement": "¿Cuál es el protocolo farmacológico de primera elección (Esquema de Zuspan) normado por el MINSAL para la prevención y el tratamiento de las convulsiones en Preeclampsia Severa y Eclampsia?",
    "options": {
      "A": "Sulfato de Magnesio al 20% intravenoso: Dosis de carga de 4 gramos IV diluidos en 100 mL de solución glucosada o salina infundidos en 15 a 20 minutos, seguido de una infusión continua de mantenimiento de 1 a 2 gramos por hora durante al menos 24 horas postparto.",
      "B": "Diazepam 50 mg en bolo intravenoso rápido cada hora.",
      "C": "Fenitoína en comprimidos triturados por vía sublingual.",
      "D": "Gluconato de calcio infundido profilácticamente como anticonvulsivo primario."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Sulfato de Magnesio (MgSO4) es el fármaco de elección indiscutible para la profilaxis y tratamiento de las convulsiones eclámpticas (demostrado en los ensayos clínicos Collaborative Eclampsia Trial y Magpie Trial, siendo superior a diazepam y fenitoína). El esquema intravenoso de Zuspan consiste en: Carga de 4 g IV en 15-20 min, seguido de mantenimiento a 1-2 g/h por bomba de infusión durante 24 horas tras el parto o última convulsión.",
    "officialGuidelineRef": "Código Naranja Obstétrico: Lineamientos Técnicos para la Atención de la Preeclampsia Severa y Eclampsia, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Esquema de Zuspan: 4 g de carga en 15-20 min seguido de infusión de 1-2 g/h de Sulfato de Magnesio.",
      "B": "Las benzodiacepinas deprimen el sistema nervioso central y respiratorio fetal y son inferiores al sulfato de magnesio.",
      "C": "La fenitoína no se absorbe adecuadamente por vía sublingual y tiene mayor tasa de fallo en eclampsia.",
      "D": "El gluconato de calcio es el ANTÍDOTO de la intoxicación por magnesio, no el anticonvulsivo primario."
    }
  },
  {
    "id": "mat-08",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Monitoreo de Toxicidad por Sulfato de Magnesio y Antídoto",
    "statement": "Durante la infusión de Sulfato de Magnesio en una paciente con preeclampsia severa, ¿cuáles son los 3 parámetros clínicos que deben vigilarse estrictamente a la cabecera, y cuál es el antídoto específico que debe estar inmediatamente disponible si se sospecha toxicidad?",
    "options": {
      "A": "Reflejos osteotendinosos rotulianos presentes, Frecuencia Respiratoria >= 12 a 14 rpm, y Diuresis horaria > 30 mL/hora (por sonda Foley); y el antídoto específico es el Gluconato de Calcio al 10% (1 gramo IV lento en 3 a 5 minutos).",
      "B": "Reflejo corneal, diámetro pupilar y color de uñas; y el antídoto es la naloxona.",
      "C": "Glicemia capilar y amilasa; y el antídoto es la atropina.",
      "D": "No se requiere ningún monitoreo porque el sulfato de magnesio no tiene ninguna toxicidad."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El magnesio se excreta casi exclusivamente por vía renal. La oliguria provoca acumulación tóxica rápida. Los signos clínicos de hipermagnesemia progresan secuencialmente: 1) Pérdida del reflejo rotuliano (niveles 7-10 mEq/L, primer signo clínico de toxicidad); 2) Depresión respiratoria con FR < 12 rpm (niveles 10-12 mEq/L); y 3) Paro cardíaco en diástole (niveles > 15 mEq/L). Ante la pérdida del reflejo o bradipnea se suspende la infusión y se administra Gluconato de Calcio al 10% (10 mL = 1 g IV).",
    "officialGuidelineRef": "Guía Clínica de Atención Obstétrica Crítica, MINSAL, Toxicidad por Sulfato de Magnesio.",
    "distractorRationale": {
      "A": "Correcto. Monitoreo de reflejo rotuliano, FR y diuresis horaria; antídoto Gluconato de Calcio al 10% (1 g IV).",
      "B": "La naloxona es el antídoto específico para intoxicación por opioides.",
      "C": "La atropina se utiliza para bradicardia sinusal o intoxicación por organofosforados.",
      "D": "El magnesio en sobredosis causa paro respiratorio y cardíaco irreversible si no se monitoriza."
    }
  },
  {
    "id": "mat-09",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Código Rojo Obstétrico: Definición de Hemorragia Posparto (HPP)",
    "statement": "¿Cuál es la definición clínica cuantitativa y operativa de HEMORRAGIA POSPARTO (HPP) que activa el protocolo de \"Código Rojo\" en la red de establecimientos de salud del MINSAL?",
    "options": {
      "A": "Pérdida sanguínea estimada mayor a 500 mL tras un parto vaginal, o mayor a 1,000 mL tras una cesárea, o cualquier pérdida hemática que desencadene inestabilidad hemodinámica o signos de choque hipovolémico en la puérpera.",
      "B": "Pérdida sanguínea menor a 50 mL en un parto normal.",
      "C": "Salida exclusiva de líquido amniótico claro durante el período expulsivo.",
      "D": "Presencia de loquios serosos normales a los 10 días del puerperio."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Código Rojo Obstétrico estandariza la respuesta inmediata del equipo multidisciplinario ante la Hemorragia Posparto (primera causa de muerte materna evitable en la región). Se define por la pérdida hemática > 500 mL en parto vaginal o > 1,000 mL en cesárea, o el descenso del hematocrito >= 10%, o cualquier pérdida de volumen que induzca hipotensión, taquicardia o alteración de la perfusión periférica.",
    "officialGuidelineRef": "Guía Técnica para la Atención del Código Rojo Obstétrico: Hemorragia Posparto, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. > 500 mL vaginal, > 1000 mL cesárea o inestabilidad hemodinámica activa el Código Rojo.",
      "B": "Pérdida fisiológica habitual insignificante.",
      "C": "El líquido amniótico fisiológico no constituye hemorragia posparto.",
      "D": "Los loquios serosos son secreciones fisiológicas normales de la involución uterina tardía."
    }
  },
  {
    "id": "mat-10",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Etiología de la HPP: Mnemotecnia de las \"4 T\"",
    "statement": "En el diagnóstico etiológico sistemático de la Hemorragia Posparto durante la activación del Código Rojo, ¿cuáles son las causas agrupadas bajo la mnemotecnia universal de las \"4 T\" y cuál de ellas representa más del 70% de todos los casos?",
    "options": {
      "A": "Tono (Atonía Uterina, responsable del 70% de los casos); Trauma (Laceraciones de cuello, vagina o periné, 20%); Tejido (Retención de restos placentarios o cotiledones, 9%); y Trombina (Coagulopatías congénitas o adquiridas, 1%).",
      "B": "Talla, Tensión, Temperatura y Tiempo.",
      "C": "Tórax, Tiroides, Timpanometría y Tráquea.",
      "D": "Todas las hemorragias posparto son idiopáticas y carecen de causa demostrable."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La mnemotecnia de las \"4 T\" guía la exploración física secuencial e inmediata de la puérpera con sangrado activo: 1) TONO: palpar el fondo uterino para comprobar si está retraído y duro (\"globo de seguridad de Pinard\") o flácido (atonía uterina, causa del 70%); 2) TRAUMA: revisar canal del parto con valvas; 3) TEJIDO: revisar integridad de la placenta y membranas; 4) TROMBINA: evaluar coagulación de la sangre en tubo seco.",
    "officialGuidelineRef": "Manual de Procedimientos en Obstetricia Crítica y Código Rojo, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Tono (70%), Trauma (20%), Tejido (9%) y Trombina (1%) componen la mnemotecnia etiológica canónica.",
      "B": "Variables clínicas generales ajenas a la etiología de la HPP.",
      "C": "Órganos anatómicos no relacionados con la pelvis obstétrica.",
      "D": "La HPP responde siempre a causas mecánicas, tisulares o hematológicas identificables."
    }
  },
  {
    "id": "mat-11",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Manejo Activo del Tercer Período del Parto (MATEP)",
    "statement": "¿Cuál es la intervención más costo-efectiva demostrada para prevenir la atonía uterina y reducir en más del 60% la hemorragia posparto, normada de forma obligatoria en todo parto atendido en la red MINSAL?",
    "options": {
      "A": "El Manejo Activo del Tercer Período del Parto (MATEP), consistente en: 1) Administración de 10 UI de Oxitocina intramuscular inmediatamente tras la salida del hombro anterior o del recién nacido; 2) Tracción suave y controlada del cordón umbilical con contratracción suprapúbica; y 3) Masaje uterino abdominal tras la expulsión de la placenta.",
      "B": "Esperar pasivamente durante 4 horas a que la placenta se desprenda sola sin tocar a la paciente.",
      "C": "Tirar fuertemente del cordón umbilical en cuanto asome la cabeza del bebé.",
      "D": "Inyectar adrenalina en el músculo del muslo fetal."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El MATEP es una práctica obstétrica con el más alto nivel de evidencia científica (Nivel IA). La inyección profiláctica de 10 UI de Oxitocina IM en el minuto posterior al nacimiento del feto induce contracciones uterinas rítmicas inmediatas que facilitan el desprendimiento placentario atraumático y el colapso hemostático de los vasos miometriales en el lecho placentario (ligaduras vivas de Pinard), minimizando la pérdida hemática.",
    "officialGuidelineRef": "Guía Clínica de Atención del Parto y Puerperio de Bajo Riesgo, MINSAL / OMS.",
    "distractorRationale": {
      "A": "Correcto. Oxitocina 10 UI IM + tracción controlada del cordón + masaje uterino definen el MATEP reglamentario.",
      "B": "El manejo expectante prolongado incrementa significativamente la tasa de atonía y hemorragia.",
      "C": "Traccionar bruscamente el cordón sin sostén suprapúbico provoca rotura de cordón o inversión uterina masiva mortal.",
      "D": "Procedimiento inapropiado y lesivo para el neonato."
    }
  },
  {
    "id": "mat-12",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Uterotónicos de Segunda Línea: Metilergonovina y Contraindicaciones",
    "statement": "En el manejo de la atonía uterina persistente en Código Rojo, ¿en qué pacientes está FORMALMENTE CONTRAINDICADA la administración de Metilergonovina (Ergonovina / Methergin)?",
    "options": {
      "A": "En pacientes con Hipertensión Arterial previa, Preeclampsia o Eclampsia, debido a que produce vasoconstricción periférica intensa y puede desencadenar crisis hipertensiva extrema, infarto de miocardio o hemorragia intracraneal.",
      "B": "En pacientes que tienen ojos de color marrón.",
      "C": "En pacientes con antecedentes de fractura de radio distal.",
      "D": "La metilergonovina nunca tiene contraindicación alguna en obstetricia."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La metilergonovina es un alcaloide del cornezuelo de centeno que produce contracción tetánica sostenida del miometrio y vasoconstricción arteriolar generalizada por agonismo en receptores adrenérgicos y serotoninérgicos. En mujeres preeclámpticas o hipertensas puede inducir una elevación crítica de la presión arterial con encefalopatía hipertensiva, hemorragia cerebral o rotura vascular. En estas pacientes el uterotónico alternativo es el Misoprostol.",
    "officialGuidelineRef": "Código Rojo Obstétrico, MINSAL, Farmacoterapia de Segunda Línea.",
    "distractorRationale": {
      "A": "Correcto. La hipertensión y preeclampsia contraindican absolutamente la metilergonovina por riesgo de EVC.",
      "B": "Distractor anatómico absurdo.",
      "C": "El antecedente de fractura ósea consolidada no interactúa con los alcaloides del cornezuelo.",
      "D": "Todo medicamento de acción cardiovascular potente posee contraindicaciones bien definidas."
    }
  },
  {
    "id": "mat-13",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Balón de Taponamiento Intrauterino en HPP Refractaria",
    "statement": "Ante una atonía uterina que no responde a masaje bimanual ni a uterotónicos combinados (Oxitocina, Metilergonovina, Misoprostol), ¿cuál es la medida hemostática mecánica conservadora no quirúrgica de elección normada antes de decidir una laparotomía exploradora?",
    "options": {
      "A": "Colocación de un Balón de Taponamiento Hidrostático Intrauterino (Balón de Bakri o Balón de Preservativo hidrostático artesanal inflado con 300 a 500 mL de solución salina estéril).",
      "B": "Empaque de la cavidad uterina con toallas sanitarias domésticas no estériles.",
      "C": "Inyección de pegamento biológico adhesivo instantáneo dentro de las trompas.",
      "D": "Masaje cardíaco a tórax abierto."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El taponamiento con balón intrauterino (Balón de Bakri o el balón hidrostático montado sobre sonda Foley con condón estéril) ejerce presión hidrostática directa uniforme contra la superficie interna del miometrio, comprimiendo las arterias espirales del lecho placentario. Permite detener la hemorragia en más del 85% de los casos o ganar tiempo valioso para estabilizar a la paciente y trasladarla a quirófano sin coagulopatía.",
    "officialGuidelineRef": "Código Rojo Obstétrico, MINSAL, Técnicas de Taponamiento Uterino.",
    "distractorRationale": {
      "A": "Correcto. El balón de taponamiento hidrostático intrauterino (300-500 mL) es la medida mecánica conservadora normada.",
      "B": "Empaquetar con apósitos no estériles provoca choque séptico fulminante e infección puerperal grave.",
      "C": "Práctica mutilante no avalada médicamente.",
      "D": "Maniobra de trauma torácico extremo sin relación con la hemostasia pélvica."
    }
  },
  {
    "id": "mat-14",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Legislación y Fomento de la Lactancia Materna Exclusiva",
    "statement": "Según la Ley Amor Convertido en Alimento para el Fomento, Protección y Apoyo a la Lactancia Materna y las normas del MINSAL de El Salvador, ¿cuál es la recomendación oficial sobre la duración de la LACTANCIA MATERNA EXCLUSIVA?",
    "options": {
      "A": "Lactancia materna exclusiva durante los primeros 6 meses de vida del bebé (sin agua, té, jugos ni otros alimentos), y continuada con alimentación complementaria adecuada y segura hasta los 2 años de edad o más.",
      "B": "Lactancia exclusiva solo durante los primeros 7 días de vida y luego sustitución por leche de vaca entera.",
      "C": "La lactancia materna está desaconsejada y debe reemplazarse por fórmulas comerciales desde el primer día.",
      "D": "Alimentación exclusiva con atoles de fécula de maíz y azúcar desde el primer mes."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La leche humana es el alimento perfecto y dinámico que cubre la totalidad de los requerimientos nutricionales, hídricos e inmunológicos durante los primeros 6 meses de vida. La legislación salvadoreña (Ley Amor Convertido en Alimento) garantiza el derecho a la lactancia exclusiva sin suplementación hídrica (la leche materna aporta 88% de agua biológicamente pura) hasta el 6° mes, fomentando su prolongación complementada hasta los 2 años o más.",
    "officialGuidelineRef": "Ley Amor Convertido en Alimento y Lineamientos de Lactancia Materna, MINSAL El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Lactancia exclusiva los primeros 6 meses y complementada hasta los 2 años o más es el mandato legal y clínico.",
      "B": "La leche de vaca no humana en menores de un año causa microhemorragias intestinales y sobrecarga renal de solutos.",
      "C": "Afirmación contraria a toda la evidencia científica pediátrica.",
      "D": "Los atoles aportan carbohidratos vacíos sin proteínas ni micronutrientes, provocando desnutrición aguda tipo kwashiorkor."
    }
  },
  {
    "id": "mat-15",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Fisiología Neuroendocrina de la Lactancia: Prolactina y Oxitocina",
    "statement": "¿Cuáles son las dos hormonas hipofisarias principales responsables de la producción y de la eyección láctea, respectivamente, activadas por el estímulo de succión del pezón en el pecho materno?",
    "options": {
      "A": "Prolactina (secretada por la adenohipófisis para la síntesis de leche en los alvéolos) y Oxitocina (secretada por la neurohipófisis para la eyección láctea por contracción de las células mioepiteliales).",
      "B": "Hormona del crecimiento y calcitonina.",
      "C": "Insulina y glucagón exclusivamente.",
      "D": "Hormona luteinizante y tiroxina en los conductos biliares."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La succión del pezón y la areola estimula receptores mecanosensibles que transmiten impulsos vía médula espinal al hipotálamo: 1) Disminuye la dopamina (factor inhibidor de prolactina), estimulando la adenohipófisis para secretar PROLACTINA, encargada de la galactopoyesis alveolar; 2) Estimula los núcleos supraóptico y paraventricular para liberar OXITOCINA desde la neurohipófisis, que contrae las células mioepiteliales alveolares provocando el reflejo de eyección.",
    "officialGuidelineRef": "Manual Clínico de Lactancia Materna y Nutrición Temprana, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Prolactina produce la leche en adenohipófisis y Oxitocina la eyecta desde neurohipófisis.",
      "B": "Hormonas somática y metabólica de calcio no primarias de la lactancia.",
      "C": "Reguladores pancreáticos del metabolismo hidrocarbonado.",
      "D": "Hormonas gonadales y tiroideas no vinculadas al reflejo mioepitelial del pezón."
    }
  },
  {
    "id": "mat-16",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Evaluación del Agarre Correcto al Pecho Materno",
    "statement": "¿Cuáles son los 4 signos cardinales que indican un AGARRE CORRECTO (buen acoplamiento) del lactante al pecho materno durante la consejería en la UCSF para prevenir grietas del pezón e hipogalactia?",
    "options": {
      "A": "1) Boca ampliamente abierta (ángulo mayor a 120°); 2) Labio inferior evertido hacia afuera; 3) Mayor porción de areola visible por encima del labio superior que por debajo; y 4) Mentón del bebé tocando firmemente el pecho de la madre.",
      "B": "1) Succión ruidosa exclusiva de la punta del pezón; 2) Labios invertidos hacia adentro; 3) Mejillas hundidas como chupando pajilla; y 4) Mentón separado del pecho.",
      "C": "El bebé debe morder el pezón con los dientes temporales cada 3 segundos.",
      "D": "El agarre solo es correcto si el bebé llora continuamente mientras mama."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Un agarre deficiente (succión exclusiva del pezón) es la causa principal de grietas dolorosas en los pezones, sangrado, mastitis y transferencia insuficiente de leche. Los 4 signos del agarre correcto evaluados por la OMS y MINSAL aseguran que la lengua del bebé ordeñe los senos lactíferos subareolares: boca bien abierta, labio inferior evertido, más areola arriba que abajo y mentón adosado a la mama, con succión profunda audible y mejillas redondeadas.",
    "officialGuidelineRef": "Guía de Consejería en Lactancia Materna, MINSAL El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Boca bien abierta, labio evertido, areola asimétrica visible y mentón pegado al pecho definen el agarre óptimo.",
      "B": "Signos clásicos de AGARRE INCORRECTO que lesionan el pezón e impiden la extracción láctea.",
      "C": "La mordedura lesiona el tejido mamario.",
      "D": "El llanto durante la toma indica dolor, hambre o frustración por mal acoplamiento."
    }
  },
  {
    "id": "mat-17",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Manejo Clínico de la Mastitis Puerperal Infecciosa",
    "vignette": "Puérpera de 3 semanas consulta a la UCSF con fiebre alta de 39 °C, escalofríos, malestar general y dolor intenso en el cuadrante superoexterno de la mama derecha, donde se palpa una zona indurada, eritematosa, caliente y muy sensible. Se diagnostica Mastitis Puerperal Aguda por Staphylococcus aureus.",
    "statement": "¿Cuál es la conducta clínica y terapéutica correcta respecto a la lactancia y a la farmacoterapia según el MINSAL?",
    "options": {
      "A": "Continuar amamantando al bebé iniciando con el pecho sano y vaciar frecuentemente la mama afectada (mediante succión o extracción manual para evitar la estasis láctea), e iniciar antibióticos anti-estafilocócicos orales compatibles con la lactancia (Dicloxacilina o Cefalexina) y analgesia con Paracetamol/Ibuprofeno.",
      "B": "Suspender de inmediato y de forma definitiva la lactancia materna en ambos pechos y vendar las mamas con gasas apretadas.",
      "C": "Desbridamiento quirúrgico con incisión mutilante inmediata en la consulta sin antibióticos.",
      "D": "Prescribir ciprofloxacina en gotas óticas sobre la piel del pezón."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El pilar cardinal del tratamiento de la mastitis es el vaciamiento eficaz y continuo de la glándula para resolver la estasis de leche que alimenta la proliferación bacteriana. La leche materna con mastitis es completamente segura para el lactante sano a término. Se prescribe un betalactámico resistente a penicilinasa (Dicloxacilina 500 mg c/6h o Cefalexina 500 mg c/6h por 10-14 días), calor local húmedo previo a la toma y analgésicos.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Atención Integral del Puerperio y sus Complicaciones, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Mantener vaciamiento continuo de la mama + antibióticos orales compatibles (dicloxacilina/cefalexina).",
      "B": "Suspender el amamantamiento agrava la congestión láctea y precipita la formación de un absceso mamario.",
      "C": "La cirugía solo está indicada si se comprueba formación de absceso coleccionado mediante ecografía.",
      "D": "Vía tópica inadecuada e ineficaz para celulitis del parénquima mamario profundo."
    }
  },
  {
    "id": "mat-18",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Contraindicaciones Médicas Absolutas de la Lactancia Materna",
    "statement": "En El Salvador y según los lineamientos del MINSAL y la OMS, ¿cuál de las siguientes situaciones maternas o neonatales constituye una CONTRAINDICACIÓN MÉDICA ABSOLUTA para la lactancia materna?",
    "options": {
      "A": "Madre viviendo con infección confirmada por VIH (cuando se garantizan sucedáneos de leche seguros y agua potable), madre infectada por Virus Linfotrópico Humano de Células T (HTLV-1 o HTLV-2), consumo activo de drogas ilícitas como cocaína o heroína, o recién nacido con Galactosemia Clásica congénita.",
      "B": "Madre con resfriado común viral o rinitis alérgica.",
      "C": "Madre con pezones planos o invertidos.",
      "D": "Madre con fiebre de 38 °C por una gastroenteritis autolimitada."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las contraindicaciones verdaderas de la lactancia son escasas. En países con acceso a agua potable y sucedáneos seguros, la infección materna por VIH y HTLV-1/2 contraindica el amamantamiento por riesgo de transmisión viral directa. En el neonato, la galactosemia clásica (déficit de galactosa-1-fosfato uridiltransferasa) impide metabolizar la galactosa láctea, causando cirrosis, cataratas y muerte. Las infecciones respiratorias comunes no contraindican la lactancia.",
    "officialGuidelineRef": "Lineamientos Técnicos de Lactancia Materna y Contraindicaciones Médicas, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. VIH materno, HTLV-1/2, drogas ilícitas y galactosemia clásica neonatal son contraindicaciones absolutas.",
      "B": "El resfriado común no contraindica la lactancia y la leche transfiere anticuerpos protectores al bebé.",
      "C": "Los pezones planos o invertidos no contraindican la lactancia; el bebé se agarra a la areola, no al pezón.",
      "D": "La diarrea común materna no se transmite por la leche y no justifica suspender el amamantamiento."
    }
  },
  {
    "id": "mat-19",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Tamizaje Neonatal Metabólico (Hipotiroidismo Congénito)",
    "statement": "¿Cuál es el momento óptimo normado para la toma de la muestra de sangre del talón en papel filtro (Tarjeta de Guthrie) para el Tamizaje Neonatal de Hipotiroidismo Congénito en la red del MINSAL, y qué previene su detección temprana?",
    "options": {
      "A": "Entre las 48 horas de vida (después de haber iniciado alimentación láctea) y el 7° día de vida; previniendo el retraso mental severo e irreversible (cretinismo) y el retraso en el crecimiento somático.",
      "B": "A los 10 años de edad durante la pubertad.",
      "C": "En el primer minuto de vida antes de cortar el cordón umbilical.",
      "D": "Solo se toma si el recién nacido ya tiene bocio visible a simple vista."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El tamizaje de hipotiroidismo congénito mediante cuantificación de TSH en papel filtro debe tomarse idealmente entre las 48 horas y los 7 días de vida (para evitar el pico fisiológico neonatal de TSH que ocurre en las primeras 24 horas y tras haber digerido proteínas lácteas). La detección precoz e inicio de Levotiroxina antes de las 2 a 3 semanas de vida previene de manera total el daño cerebral irreversible y el cretinismo.",
    "officialGuidelineRef": "Norma Técnica para el Tamizaje Neonatal en el Sistema Nacional de Salud, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Muestra de talón entre 48h y 7 días de vida para prevenir discapacidad intelectual irreversible.",
      "B": "A los 10 años el daño cerebral por hipotiroidismo no tratado es completamente irreversible.",
      "C": "En las primeras 24h el pico fisiológico neonatal de TSH arroja una alta tasa de falsos positivos.",
      "D": "La inmensa mayoría de los recién nacidos con hipotiroidismo congénito no tienen bocio ni signos clínicos tempranos."
    }
  },
  {
    "id": "mat-20",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Tamizaje Neonatal Auditivo y de Cardiopatías Congénitas Críticas",
    "statement": "¿Qué dos tamizajes universales no invasivos deben realizarse a todo recién nacido antes de su egreso hospitalario para garantizar su derecho a la salud integral?",
    "options": {
      "A": "Tamizaje Auditivo mediante Emisiones Otoacústicas (EOA) para detección temprana de hipoacusia neurosensorial, y Tamizaje Cardíaco mediante pulsioximetría diferencial preductal (mano derecha) y posductal (cualquier pie) para cardiopatías congénitas críticas ductus-dependientes.",
      "B": "Audiometría verbal con audífonos gigantes y cateterismo de arteria pulmonar.",
      "C": "Resonancia magnética cerebral y punción lumbar de rutina.",
      "D": "Prueba de esfuerzo en caminadora eléctrica para recién nacidos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El tamizaje auditivo por emisiones otoacústicas permite identificar tempranamente la sordera congénita antes de los 3 meses para intervenir precozmente antes del año. La oximetría de pulso diferencial (mano derecha = preductal; pie = posductal) a las 24-48 horas de vida detecta cardiopatías congénitas críticas con hipoxemia o shunt derecha-izquierda (coartación aórtica severa, transposición de grandes vasos) antes del cierre del ductus.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Atención Integral del Recién Nacido, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Emisiones otoacústicas y oximetría de pulso diferencial pre/posductal son los tamizajes de egreso normados.",
      "B": "Los recién nacidos no responden a audiometría verbal y el cateterismo no es prueba de tamizaje.",
      "C": "Estudios invasivos no indicados en neonatos sanos.",
      "D": "Procedimiento física y anatómicamente imposible en neonatología."
    }
  },
  {
    "id": "mat-21",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Vacuna BCG en el Recién Nacido",
    "statement": "¿Cuál es la vía de administración, dosis y objetivo de salud pública de la vacuna BCG (Bacilo de Calmette-Guérin) administrada al recién nacido en las primeras 24 horas de vida en El Salvador?",
    "options": {
      "A": "Dosis única de 0.1 mL (o 0.05 mL según fabricante) por vía estrictamente INTRADÉRMICA en la región deltoidea del brazo derecho; orientada a prevenir las formas graves, invasivas y mortales de Tuberculosis (Meningitis tuberculosa y Tuberculosis miliar diseminada).",
      "B": "Vía oral en gotas para prevenir la diarrea por rotavirus.",
      "C": "Vía intravenosa rápida para erradicar el tétanos.",
      "D": "Vía subcutánea profunda en el abdomen para tratar la gripe."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La vacuna BCG contiene una cepa viva atenuada de Mycobacterium bovis. Se aplica por vía intradérmica estricta (generando una pápula en \"piel de naranja\" que evoluciona a nódulo, pústula, costra y cicatriz queloide característica en el hombro derecho). Su efectividad es máxima (más del 80%) para evitar que la primoinfección tuberculosa progrese hacia meningitis tuberculosa o diseminación hematógena miliar en lactantes.",
    "officialGuidelineRef": "Manual de Normas del Programa Ampliado de Inmunizaciones (PAI), MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Vía intradérmica en brazo derecho para prevenir meningitis tuberculosa y TB miliar.",
      "B": "La vía intradérmica es obligatoria; la vía oral no genera respuesta inmune contra micobacterias.",
      "C": "La inyección intravenosa de micobacterias vivas desencadenaría choque anafiláctico y diseminación fatal.",
      "D": "La inyección subcutánea profunda provoca linfadenitis supurativa (becegeítis) y abscesos fríos locales."
    }
  },
  {
    "id": "mat-22",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Vacuna contra Hepatitis B Monovalente Neonatal",
    "statement": "¿Por qué la dosis neonatal de la vacuna contra la Hepatitis B (monovalente) debe administrarse idealmente en las primeras 12 a 24 horas de vida al recién nacido?",
    "options": {
      "A": "Para prevenir la transmisión perinatal vertical del virus de la Hepatitis B de la madre al recién nacido, reduciendo en más del 90% el riesgo de que el bebé desarrolle infección crónica, cirrosis hepática temprana y carcinoma hepatocelular en la edad adulta.",
      "B": "Para que el recién nacido no presente ictericia fisiológica por leche materna.",
      "C": "Porque la vacuna solo se puede absorber a través del ombligo.",
      "D": "Para proteger al bebé de las picaduras de pulgas domésticas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Hasta el 90% de los recién nacidos que adquieren el virus de la Hepatitis B por transmisión vertical durante el parto se convierten en portadores crónicos con alto riesgo de cirrosis y hepatocarcinoma en la juventud. La administración de la vacuna monovalente contra Hepatitis B (0.5 mL IM en el tercio medio de la cara anterolateral del muslo) en las primeras 24 horas actúa como profilaxis post-exposición altamente eficaz.",
    "officialGuidelineRef": "Lineamientos Técnicos del PAI: Vacunación del Recién Nacido, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La dosis neonatal precoz (< 24h) previene la transmisión vertical y la cronicidad hepática.",
      "B": "No previene ni modifica la ictericia fisiológica neonatal por degradación de hemoglobina.",
      "C": "Se administra en el músculo vasto lateral del muslo, nunca en el cordón umbilical.",
      "D": "No confiere protección contra ectoparásitos."
    }
  },
  {
    "id": "mat-23",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Vacuna Pentavalente: Calendario y Enfermedades Protegidas",
    "statement": "En el esquema oficial de vacunación infantil del PAI de El Salvador, ¿a qué edades se administra la VACUNA PENTAVALENTE y contra qué 5 enfermedades infecciosas confiere protección inmunológica?",
    "options": {
      "A": "Se administra a los 2, 4 y 6 meses de edad; y protege contra: Difteria, Tétanos, Tos Ferina (componente pertussis acelular o de células enteras), Hepatitis B, e infecciones invasivas graves por Haemophilus influenzae tipo b (Hib).",
      "B": "Se administra a los 5, 10 y 15 años contra sarampión, rubéola, paperas, varicela y polio.",
      "C": "Se administra únicamente al nacer contra cinco tipos de diarreas virales.",
      "D": "Es una vacuna optativa que se aplica a los 80 años de edad."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La vacuna Pentavalente (DTP-HepB-Hib) es el eje central del esquema del lactante. Su pauta primaria comprende tres dosis: a los 2 meses, 4 meses y 6 meses de edad (con intervalos mínimos de 4 semanas), administrada por vía intramuscular en la cara anterolateral del muslo. Confiere inmunidad combinada de alta potencia contra cinco microorganismos potencialmente letales en la primera infancia.",
    "officialGuidelineRef": "Norma Técnica de Vacunación del Menor de Cinco Años, MINSAL El Salvador.",
    "distractorRationale": {
      "A": "Correcto. 2, 4 y 6 meses protegiendo contra difteria, tétanos, tos ferina, hepatitis B y Haemophilus influenzae b.",
      "B": "La vacuna SPR protege contra sarampión, paperas y rubéola a los 12 y 18 meses.",
      "C": "La vacuna del recién nacido es BCG y Hepatitis B monovalente, no la pentavalente.",
      "D": "Es una vacuna pediátrica fundamental en menores de un año."
    }
  },
  {
    "id": "mat-24",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Esquema de Vacunación contra la Poliomielitis (IPV y bOPV)",
    "statement": "En el proceso de erradicación global de la poliomielitis y contención del poliovirus derivado de la vacuna, ¿cómo está estructurado el esquema secuencial de vacuna antipoliomielítica en El Salvador?",
    "options": {
      "A": "Vacuna Antipoliomielítica Inactivada inyectable (IPV / Salk) a los 2 y a los 4 meses de edad por vía intramuscular, seguida de Vacuna Antipoliomielítica Oral bivalente atenuada (bOPV / Sabin) a los 6 meses de edad y refuerzos.",
      "B": "Vacuna oral exclusiva desde las 2 horas de vida todos los meses hasta los 18 años.",
      "C": "La poliomielitis ya no se vacuna porque el virus desapareció de la faz de la tierra.",
      "D": "Solo se vacuna a los niños que viajan en avión al extranjero."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Para eliminar el riesgo de parálisis asociada a la vacuna oral (PAV) y contener la emergencia de poliovirus circulantes derivados de la vacuna (cVDPV), el MINSAL adoptó el esquema secuencial IPV-bOPV: las dos primeras dosis se administran con IPV inyectable (virus inactivados de Salk que no replican ni pueden mutar) a los 2 y 4 meses, otorgando inmunidad humoral sistémica protectora antes de introducir la bOPV oral.",
    "officialGuidelineRef": "Lineamientos Técnicos del Plan Estratégico para la Erradicación de la Poliomielitis, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Esquema secuencial seguro con IPV inyectable a los 2 y 4 meses seguido de bOPV oral.",
      "B": "La sobredosificación oral mensual es innecesaria y no cumple los lineamientos biológicos.",
      "C": "La vigilancia y vacunación continúan activas hasta la certificación global de erradicación.",
      "D": "La vacunación es universal y obligatoria en todo el territorio nacional."
    }
  },
  {
    "id": "mat-25",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Vacuna SPR (Sarampión, Paperas y Rubéola)",
    "statement": "¿A qué edades exactas estipula el esquema nacional de vacunación del MINSAL la aplicación de la primera dosis y del refuerzo de la vacuna SPR (Sarampión, Paperas y Rubéola) para garantizar títulos protectores duraderos?",
    "options": {
      "A": "Primera dosis a los 12 meses de edad (1 año cumplido) y segunda dosis de refuerzo a los 18 meses de edad (o según el esquema actualizado).",
      "B": "Al primer día de nacido y a los 7 días de vida.",
      "C": "Exclusivamente a los 25 años de edad.",
      "D": "La vacuna SPR se aplica como enjuague bucal cada mes."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La vacuna SPR es de virus vivos atenuados. Se aplica a partir de los 12 meses de edad porque antes de esta fecha los anticuerpos maternos IgG transferidos transplacentariamente neutralizan los antígenos vacunales e impiden una respuesta inmune eficaz. La segunda dosis a los 18 meses (o a los 4 años según pauta regional) inmuniza al 5-10% de niños que no respondieron a la primera dosis (falla vacunal primaria).",
    "officialGuidelineRef": "Norma Técnica del Programa Ampliado de Inmunizaciones (PAI), MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Primera dosis a los 12 meses y segunda a los 18 meses por vía subcutánea.",
      "B": "La presencia de anticuerpos maternos inactiva la vacuna en el recién nacido.",
      "C": "Es una vacuna infantil troncal que debe administrarse antes de los 2 años.",
      "D": "Es un biológico inyectable por vía subcutánea estricta, no un enjuague."
    }
  },
  {
    "id": "mat-26",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Vacuna contra el Virus del Papiloma Humano (VPH)",
    "statement": "¿Cuál es la población objetivo y la importancia en salud pública de la vacuna contra el Virus del Papiloma Humano (VPH) en el sistema nacional de salud de El Salvador?",
    "options": {
      "A": "Niñas y niños a partir de los 9 años de edad (antes del inicio de la vida sexual activa), con el fin prioritario de prevenir la infección persistente por genotipos oncogénicos de alto riesgo (como VPH 16 y 18) causantes de Cáncer de Cuello Uterino y lesiones anogenitales premalignas.",
      "B": "Adultos mayores de 80 años en residencias geriátricas.",
      "C": "Neonatos en su primera hora de vida exclusivamente.",
      "D": "Es una vacuna que se utiliza únicamente para el tratamiento del acné facial común."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El cáncer cervicouterino es una de las principales causas de muerte por cáncer en mujeres en El Salvador. La vacuna recombinante contra el VPH confiere una inmunogenicidad superior cuando se administra en preadolescentes (9 a 14 años) antes del contacto con el virus. Previene la infección por los tipos oncogénicos 16 y 18 (responsables del 70% de los cánceres de cérvix) y tipos no oncogénicos causantes de condilomas.",
    "officialGuidelineRef": "Lineamientos Técnicos para la Vacunación contra el VPH, MINSAL El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Niñas/niños desde los 9 años para prevención primaria del cáncer de cuello uterino y verrugas genitales.",
      "B": "Población geriátrica no prioritaria para inmunización primaria contra VPH.",
      "C": "La vacuna no está aprobada ni estudiada en neonatos.",
      "D": "No tiene indicación terapéutica dermatológica en acné vulgar."
    }
  },
  {
    "id": "mat-27",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Vigilancia del Crecimiento Infantil: Desnutrición Aguda vs Crónica",
    "statement": "En la vigilancia nutricional de la niñez en la UCSF mediante las curvas de crecimiento de la OMS, ¿qué indicador antropométrico define con precisión la DESNUTRICIÓN AGUDA (emaciación / riesgo inminente de muerte) versus la DESNUTRICIÓN CRÓNICA (retardo estatural)?",
    "options": {
      "A": "El indicador Peso para la Talla (P/T) por debajo de -2 desviaciones estándar define Desnutrición Aguda (emaciación reciente); mientras que el indicador Talla para la Edad (T/E) por debajo de -2 desviaciones estándar define Desnutrición Crónica (baja talla o retraso estatural acumulado).",
      "B": "El perímetro cefálico menor a 60 cm define desnutrición crónica en adultos.",
      "C": "La desnutrición aguda se diagnostica únicamente pesando la ropa del niño.",
      "D": "El peso para la edad define exactamente el grosor del cabello."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los indicadores antropométricos tienen interpretaciones fisiopatológicas distintas: 1) Peso para la Talla (P/T) evalúa la armonía corporal actual; un P/T < -2 DE indica pérdida de masa muscular y grasa reciente por déficit calórico agudo o enfermedad diarreica/respiratoria (Desnutrición Aguda); 2) Talla para la Edad (T/E) < -2 DE refleja el impacto negativo acumulativo y prolongado de la carencia nutricional sobre el crecimiento lineal (Desnutrición Crónica).",
    "officialGuidelineRef": "Norma Técnica para la Vigilancia del Crecimiento y Estado Nutricional, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. P/T < -2 DE define desnutrición aguda (emaciación); T/E < -2 DE define desnutrición crónica (retraso estatural).",
      "B": "El perímetro cefálico evalúa crecimiento craneano y neurodesarrollo en menores de 2 años, no desnutrición adulta.",
      "C": "La técnica antropométrica exige pesar al lactante desnudo en balanza de lactantes calibrada.",
      "D": "El peso para la edad refleja bajo peso global pero no discrimina entre proceso agudo o crónico."
    }
  },
  {
    "id": "mat-28",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Ley Crecer Juntos: Derecho a la Identidad y Registro Inmediato",
    "statement": "De acuerdo con la Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia de El Salvador, ¿cuál es la obligación ineludible de los centros hospitalarios y de salud respecto al recién nacido antes de su alta médica?",
    "options": {
      "A": "Garantizar el Registro Oportuno e Inmediato del nacimiento mediante las ventanillas del Registro del Estado Familiar dentro del propio centro hospitalario, entregando la certificación de nacimiento y asegurando su Derecho a la Identidad legal de forma gratuita.",
      "B": "Retener al recién nacido hasta que los padres cancelen una fianza bancaria.",
      "C": "Impedir el registro civil si la madre no está casada legalmente.",
      "D": "Asignar un número de pasaporte extranjero militar al recién nacido."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Ley Crecer Juntos establece como derecho fundamental de la primera infancia el derecho a la identidad, filiación y registro del estado familiar inmediato y gratuito. Los hospitales de la red pública y privada cuentan con dependencias descentralizadas del Registro del Estado Familiar para inscribir a los recién nacidos antes del egreso hospitalario, erradicando el subregistro y garantizando su protección social desde el nacimiento.",
    "officialGuidelineRef": "Ley Crecer Juntos, República de El Salvador, Artículos sobre el Derecho a la Identidad y Registro.",
    "distractorRationale": {
      "A": "Correcto. La inscripción oportuna, gratuita e intrahospitalaria antes del alta es un mandato de la Ley Crecer Juntos.",
      "B": "Retener a un recién nacido por deudas hospitalarias es un delito penal que viola derechos humanos.",
      "C": "El derecho a la identidad no está condicionado al estado civil de los progenitores.",
      "D": "El registro hospitalario tramita la partida de nacimiento salvadoreña ordinaria."
    }
  },
  {
    "id": "mat-29",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Salud Mental Perinatal: Tamizaje de Depresión Posparto",
    "statement": "Durante la consulta de control del puerperio en la UCSF, ¿cuál es el instrumento estandarizado recomendado para el tamizaje oportuno de la Depresión Posparto?",
    "options": {
      "A": "La Escala de Depresión Posnatal de Edimburgo (EPDS), cuestionario de 10 preguntas diseñado para identificar síntomas depresivos perinatales sin confundirlos con la fatiga del puerperio.",
      "B": "La prueba de manchas de tinta de Rorschach de 500 láminas.",
      "C": "El test de coeficiente intelectual de Stanford-Binet.",
      "D": "No se debe evaluar la salud mental materna para no alarmar a la familia."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La depresión posparto afecta al 15-20% de las puérperas y repercute negativamente en el vínculo afectivo materno-filial, la lactancia y el neurodesarrollo infantil. La Escala de Edimburgo (EPDS) consta de 10 preguntas sencillas autoadministradas; una puntuación >= 10-12 puntos identifica a madres con alto riesgo de trastorno depresivo mayor que requieren evaluación psicológica/psiquiátrica, atención prioritaria y descarte de ideación suicida (pregunta 10).",
    "officialGuidelineRef": "Lineamientos Técnicos para la Atención de la Salud Mental Perinatal, MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La Escala de Edimburgo (EPDS) es el estándar internacional de tamizaje de depresión posparto.",
      "B": "Técnica proyectiva de evaluación de personalidad, no un instrumento de tamizaje rápido perinatal.",
      "C": "Evalúa cociente intelectual, no sintomatología afectiva puerperal.",
      "D": "La negligencia en salud mental perinatal se asocia a morbimortalidad materna y desnutrición infantil."
    }
  },
  {
    "id": "mat-30",
    "category": "materno-infantil",
    "categoryLabel": "Salud Materno-Infantil",
    "clinicalArea": "Anticoncepción Post-Evento Obstétrico (AIPEO)",
    "statement": "¿Cuál de los siguientes métodos anticonceptivos reversibles de larga duración (LARC) tiene indicación de primera línea para colocación inmediata en el post-parto inmediato o post-cesárea (AIPEO) en la UCSF u Hospital, debido a que no interfiere en absoluto con la producción láctea ni con el desarrollo neonatal?",
    "options": {
      "A": "Dispositivo Intrauterino de Cobre (DIU T de Cobre posparto) colocado dentro de los primeros 10 minutos post-alumbramiento, o Implante Subdérmico de progestágeno solo (Levonorgestrel/Etonogestrel).",
      "B": "Anticonceptivos orales combinados con dosis altas de etinilestradiol en el primer día posparto.",
      "C": "Inyección mensual de estrógenos de depósito durante la lactancia exclusiva.",
      "D": "Prohibir cualquier método anticonceptivo durante los primeros 5 años de vida del niño."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Anticoncepción Inmediata Post-Evento Obstétrico (AIPEO) aprovecha el contacto con el sistema de salud para prevenir embarazos no planeados e intervalos intergenésicos cortos (< 18-24 meses, factor de riesgo de prematuridad y muerte materna). El DIU T de Cobre (libre de hormonas) y los implantes subdérmicos de solo progestágeno son altamente eficaces (> 99%) y no disminuyen el volumen ni la calidad de la leche materna.",
    "officialGuidelineRef": "Guía Clínica de Anticoncepción Post-Evento Obstétrico (AIPEO), MINSAL.",
    "distractorRationale": {
      "A": "Correcto. DIU posparto e implantes de progestágeno solo son métodos LARC seguros que no interfieren con la lactancia.",
      "B": "Los estrógenos disminuyen la producción de leche y aumentan el riesgo de tromboembolismo venoso en el puerperio.",
      "C": "Los estrógenos están formalmente contraindicados durante las primeras 6 semanas de lactancia materna.",
      "D": "La planificación familiar es un derecho reproductive garantizado por ley."
    }
  },
  {
    "id": "ram-01",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Plazo Perentorio de Notificación de RAM Graves",
    "vignette": "Una paciente de 32 años a quien se le administró Ceftriaxona endovenosa en una Unidad de Salud presenta de forma súbita disnea severa, estridor laríngeo, urticaria generalizada e hipotensión profunda (PA: 60/40 mmHg), catalogándose como shock anafiláctico (Reacción Adversa a Medicamento Grave). La paciente fue reanimada exitosamente con adrenalina intramuscular y líquidos.",
    "statement": "De acuerdo con el Reglamento Técnico Centroamericano RTCA 11.04.47:17 y las normativas del Centro Nacional de Farmacovigilancia de la Superintendencia de Regulación Sanitaria (SRS), ¿cuál es el plazo máximo con el que cuenta el profesional de salud para reportar esta sospecha de RAM grave?",
    "options": {
      "A": "Dentro de un plazo perentorio no mayor a 48 a 72 horas hábiles tras el conocimiento del evento adverso.",
      "B": "Al final del año fiscal dentro de la memoria anual de labores.",
      "C": "Exactamente seis meses después cuando concluya la auditoría del laboratorio fabricante.",
      "D": "No existe plazo ni obligación alguna de reportar si la paciente sobrevivió."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La normativa técnica oficial centroamericana y nacional de farmacovigilancia estipula que toda Reacción Adversa a Medicamentos clasificada como GRAVE (que ponga en peligro la vida, cause la muerte, requiera hospitalización o prolongue la estancia hospitalaria, cause discapacidad permanente o malformaciones congénitas) debe ser notificada obligatoriamente al Centro Nacional de Farmacovigilancia dentro de las 48 a 72 horas posteriores a su identificación. Las RAM no graves pueden remitirse en reportes periódicos de hasta 30 días.",
    "officialGuidelineRef": "RTCA 11.04.47:17 y Manual de Farmacovigilancia SRS/DNM El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Las RAM graves exigen reporte urgente en 48-72 horas para alertas sanitarias inmediatas.",
      "B": "Esperar a fin de año pondría en riesgo mortal a miles de otros pacientes que sigan recibiendo el lote defectuoso.",
      "C": "Seis meses viola flagrantemente el deber de farmacovigilancia de los profesionales de salud.",
      "D": "El reporte es ético y legalmente obligatorio independientemente del desenlace del paciente."
    }
  },
  {
    "id": "ram-02",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Clasificación de Rawlins y Thompson para RAM Tipo A vs Tipo B",
    "statement": "Un paciente consulta por presentar tos seca, persistente e irritativa tras haber iniciado tratamiento con Enalapril para la hipertensión arterial. El médico le explica que esta reacción es farmacológicamente predecible y se debe a la acumulación de bradicinina y sustancia P en las vías respiratorias. Según la clasificación clásica de Rawlins y Thompson, ¿cómo se cataloga esta reacción?",
    "options": {
      "A": "Reacción Adversa Tipo A (Augmented / Aumentada), predecible por el mecanismo de acción farmacológico del fármaco.",
      "B": "Reacción Adversa Tipo B (Bizarre / Bizarra o Idiosincrática), no dependiente de la dosis e impredecible.",
      "C": "Reacción Adversa Tipo D (Delayed / Diferida), asociada exclusivamente a teratogénesis fetal.",
      "D": "Reacción Adversa Tipo E (End of treatment), causada por el síndrome de abstinencia al retirar el fármaco."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La clasificación de Rawlins y Thompson divide las RAM en: Tipo A (Aumentadas: dosis-dependientes, predecibles por la farmacodinamia del medicamento, alta frecuencia y baja letalidad, como la tos por IECA o la hipoglucemia por sulfonilureas); Tipo B (Bizarras: no dependientes de la dosis, impredecibles, de origen inmunológico o genético, baja frecuencia y alta gravedad, como la anafilaxia o el síndrome de Stevens-Johnson); Tipo C (Crónicas); Tipo D (Diferidas/teratogénicas); Tipo E (Fin de tratamiento/rebote); y Tipo F (Fallo terapéutico inesperado).",
    "officialGuidelineRef": "Fundamentos de Farmacovigilancia, Centro Nacional de Farmacovigilancia SRS.",
    "distractorRationale": {
      "A": "Correcto. La tos por IECA es una RAM Tipo A predecible por acumulación de bradicininas.",
      "B": "Tipo B son reacciones alérgicas o idiosincráticas impredecibles no explicables por el blanco farmacológico directo.",
      "C": "Tipo D ocurre a largo plazo tras la exposición, como teratogénesis o carcinogénesis.",
      "D": "Tipo E ocurre tras la supresión brusca de un medicamento (ej. rebote hipertensivo tras suspender clonidina)."
    }
  },
  {
    "id": "ram-03",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Imputabilidad de Causalidad de Naranjo",
    "statement": "En el Centro Nacional de Farmacovigilancia de la SRS de El Salvador, ¿cuál es el propósito de aplicar el cuestionario estandarizado conocido como Algoritmo de Causalidad de Naranjo a las notificaciones de Tarjeta Amarilla (Noti-FACED)?",
    "options": {
      "A": "Establecer mediante un puntaje ponderado de 10 preguntas la probabilidad cuantitativa de que el medicamento sospechoso sea la causa real del evento adverso (Definida, Probable, Posible o Dudosa).",
      "B": "Calcular el precio de venta al consumidor final en las farmacias del país.",
      "C": "Determinar si el médico tratante debe ir a prisión de forma inmediata.",
      "D": "Calcular el porcentaje de descuento del impuesto al valor agregado (IVA) aplicable al medicamento."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Algoritmo de Naranjo es una herramienta epidemiológica y clínica estandarizada consistente en 10 preguntas con respuestas ponderadas (-1, 0, +1, +2) que evalúan aspectos como: secuencia temporal, reaparición al readministrar el fármaco (rechallenge), desaparición al suspenderlo (dechallenge), causas alternativas no medicamentosas y niveles plasmáticos. La puntuación total clasifica la relación causal en: Dudosa (<= 0), Posible (1-4), Probable (5-8) o Definida (>= 9).",
    "officialGuidelineRef": "Guía Metodológica para la Notificación y Análisis de Causalidad de RAM, SRS/DNM.",
    "distractorRationale": {
      "A": "Correcto. El Algoritmo de Naranjo categoriza objetivamente el grado de imputabilidad causal de una RAM.",
      "B": "La fijación de precios responde a regulaciones comerciales de la Ley de Medicamentos, no a Naranjo.",
      "C": "La farmacovigilancia es técnica y preventiva, no un juicio penal.",
      "D": "Los medicamentos esenciales están exentos o regulados fiscalmente por ley, no por algoritmos de RAM."
    }
  },
  {
    "id": "ram-04",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Rawlins y Thompson: Reacciones Tipo C (Crónicas)",
    "statement": "Un paciente que ha consumido Prednisona oral durante 8 meses de forma ininterrumpida desarrolla obesidad centrípeta, facies de luna llena, estrías violáceas abdominales, hipertensión y osteoporosis (Síndrome de Cushing iatrogénico). Según la clasificación de Rawlins y Thompson, ¿cómo se clasifica esta reacción?",
    "options": {
      "A": "Reacción Adversa Tipo C (Chronic / Crónica), relacionada con la dosis acumulada y la duración prolongada del tratamiento.",
      "B": "Reacción Adversa Tipo B (Bizarra), por alergia inmediata mediada por IgE.",
      "C": "Reacción Adversa Tipo E (End of treatment), causada por retirar el medicamento.",
      "D": "Reacción Adversa Tipo F (Failure), por ineficacia del principio activo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las reacciones Tipo C (Continuas o Crónicas) son aquellas que dependen de la dosis acumulativa y de la exposición prolongada en el tiempo a un fármaco. Son predecibles pero difíciles de advertir tempranamente debido a su instauración lenta e insidiosa. Ejemplos típicos son el Síndrome de Cushing por glucocorticoides crónicos, la nefropatía por abuso de analgésicos o la discinesia tardía por neurolépticos.",
    "officialGuidelineRef": "Manual de Farmacovigilancia para Profesionales de la Salud, SRS El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Tipo C define toxicidad acumulativa por uso crónico prolongado como el Cushing por corticoides.",
      "B": "Tipo B es inmunológica o bizarra de aparición aguda e impredecible.",
      "C": "Tipo E ocurre tras la interrupción brusca de un tratamiento, no durante su administración continua.",
      "D": "Tipo F es el fallo terapéutico inesperado."
    }
  },
  {
    "id": "ram-05",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Rawlins y Thompson: Reacciones Tipo D (Diferidas)",
    "statement": "¿Cuál de los siguientes ejemplos clínicos ilustra con exactitud una Reacción Adversa Tipo D (Delayed / Diferida) según la taxonomía de Rawlins y Thompson?",
    "options": {
      "A": "El desarrollo de focomelia o malformaciones congénitas en recién nacidos de madres que consumieron Talidomida durante el primer trimestre de gestación (teratogénesis), o adenocarcinoma vaginal en hijas de mujeres expuestas a dietilestilbestrol.",
      "B": "La diarrea inmediata que aparece a los 10 minutos de tomar ampicilina.",
      "C": "El rebote de insomnio la primera noche tras suspender un hipnótico.",
      "D": "La picazón nasal al entrar en contacto con polvo casero."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las reacciones Tipo D (Diferidas / Delayed) son aquellas cuyos efectos nocivos se manifiestan meses o años después de la exposición al fármaco (incluso cuando este ya ha sido suspendido y eliminado del organismo). Incluyen principalmente dos grandes fenómenos biológicos: la teratogénesis (malformaciones congénitas por exposición embrionaria) y la carcinogénesis inducida por fármacos.",
    "officialGuidelineRef": "Fundamentos de Farmacovigilancia, Centro Nacional de Farmacovigilancia SRS.",
    "distractorRationale": {
      "A": "Correcto. La teratogénesis y carcinogénesis son los prototipos de reacciones diferidas Tipo D.",
      "B": "La diarrea aguda por ampicilina es una RAM Tipo A.",
      "C": "El rebote por supresión es una RAM Tipo E.",
      "D": "Reacción alérgica ambiental no medicamentosa."
    }
  },
  {
    "id": "ram-06",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Rawlins y Thompson: Reacciones Tipo E (End of Treatment)",
    "statement": "Un paciente hipertenso suspende abruptamente la Clonidina oral que tomaba a dosis altas. A las 24 horas presenta una crisis hipertensiva severa con PA de 210/120 mmHg, cefalea intensa, sudoración y taquicardia por hiperactividad simpática de rebote. ¿A qué categoría de Rawlins y Thompson corresponde este evento?",
    "options": {
      "A": "Reacción Adversa Tipo E (End of treatment / Fin de uso), manifestada como síndrome de rebote o abstinencia tras la suspensión brusca del fármaco.",
      "B": "Reacción Adversa Tipo A (Augmented), debida a sobredosis del fármaco.",
      "C": "Reacción Adversa Tipo D (Delayed), asociada a mutagénesis celular.",
      "D": "No es una reacción medicamentosa sino un resfriado común."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las reacciones Tipo E (End of Treatment / Fin de tratamiento) son aquellas que ocurren como consecuencia directa de la suspensión o retiro brusco de un medicamento. Ejemplos clásicos incluyen la hipertensión de rebote tras suspender clonidina o betabloqueadores, la insuficiencia suprarrenal aguda secundaria al cese abrupto de corticoides orales, o el síndrome de abstinencia a benzodiacepinas u opioides.",
    "officialGuidelineRef": "RTCA 11.04.47:17 y Guía de Buenas Prácticas de Farmacovigilancia, SRS.",
    "distractorRationale": {
      "A": "Correcto. Tipo E agrupa síndromes de rebote y abstinencia por retiro abrupto de medicamentos.",
      "B": "Tipo A requiere la presencia del fármaco en el organismo con efecto amplificado.",
      "C": "Tipo D es tardía/diferida en el tiempo.",
      "D": "El rebote simpático con crisis hipertensiva es una emergencia cardiovascular grave."
    }
  },
  {
    "id": "ram-07",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Rawlins y Thompson: Reacciones Tipo F (Fallo Terapéutico)",
    "statement": "En una UCSF se detecta que un lote completo de Amoxicilina en suspensión administrado a 15 niños con otitis media bacteriana confirmada no produce ninguna mejoría clínica ni resolución de la fiebre tras 5 días de tratamiento correcto. Tras el análisis químico del laboratorio de control de calidad de la SRS, se comprueba que los frascos contenían solo el 10% del principio activo declarado. Según Rawlins y Thompson, ¿cómo se clasifica esta RAM?",
    "options": {
      "A": "Reacción Adversa Tipo F (Failure / Fallo Terapéutico Inesperado), vinculada a defectos de manufactura, calidad, subdosificación o degradación del fármaco.",
      "B": "Reacción Adversa Tipo B (Bizarra), mediada por anticuerpos IgE.",
      "C": "Reacción Adversa Tipo C (Crónica), por uso a lo largo de 40 años.",
      "D": "Efecto placebo positivo anticipado."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las reacciones Tipo F (Failure / Fallo terapéutico inesperado) constituyen una categoría fundamental en farmacovigilancia contemporánea. Ocurren cuando un medicamento no produce el efecto terapéutico esperado a dosis correctas. Puede deberse a defectos críticos de calidad (subdosificación del fabricante, lote degradado por fallo en cadena de frío), medicamentos falsificados, interacciones metabólicas inductoras o resistencia antimicrobiana.",
    "officialGuidelineRef": "Centro Nacional de Farmacovigilancia, SRS, Protocolo de Reporte de Fallos Terapéuticos.",
    "distractorRationale": {
      "A": "Correcto. Tipo F define ineficacia terapéutica inesperada frecuentemente asociada a problemas de calidad o falsificación.",
      "B": "Tipo B es una reacción de hipersensibilidad alérgica, no una ausencia de efecto.",
      "C": "Tipo C requiere exposición acumulativa prolongada en el tiempo.",
      "D": "El fallo terapéutico bacteriano con persistencia de fiebre es un evento adverso grave, no un placebo."
    }
  },
  {
    "id": "ram-08",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 1 (Notificaciones Previas)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 1 indaga: \"¿Existen notificaciones concluyentes previas sobre esta reacción adversa en la literatura científica o en la ficha técnica autorizada?\". ¿Cuál es la ponderación estandarizada de puntos para esta pregunta?",
    "options": {
      "A": "Sí = +1 punto; No = 0 puntos; Desconocido o No sabe = 0 puntos.",
      "B": "Sí = +10 puntos; No = -10 puntos.",
      "C": "Sí = +50 puntos; No = 0 puntos.",
      "D": "Esta pregunta no tiene ninguna puntuación matemática."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En el Algoritmo de Causalidad de Naranjo, si la reacción adversa sospechada ya ha sido reportada concluyentemente en la literatura médica indexada o descrita en la monografía oficial del fármaco, se asigna +1 punto. Si no está descrita o se desconoce, se asigna 0 puntos. Este ítem evalúa la plausibilidad farmacológica y la plausibilidad previa del evento.",
    "officialGuidelineRef": "Guía Metodológica del Algoritmo de Imputabilidad de Naranjo, SRS/DNM.",
    "distractorRationale": {
      "A": "Correcto. La escala de Naranjo asigna +1 para Sí y 0 para No/Desconocido en la Pregunta 1.",
      "B": "Escala sobreponderada incompatible con el rango total de 13 puntos de Naranjo.",
      "C": "Puntajes inventados sin correspondencia matemática.",
      "D": "Todas las 10 preguntas de Naranjo poseen valores cuantitativos estrictamente ponderados."
    }
  },
  {
    "id": "ram-09",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 2 (Secuencia Temporal)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 2 evalúa la secuencia temporal: \"¿Apareció el evento adverso después de que el fármaco sospechoso fue administrado?\". ¿Cuál es la ponderación de este parámetro cronológico?",
    "options": {
      "A": "Sí = +2 puntos; No = -1 punto; Desconocido = 0 puntos.",
      "B": "Sí = +10 puntos; No = 0 puntos.",
      "C": "Sí = 0 puntos; No = +5 puntos.",
      "D": "Siempre resta 5 puntos independientemente de la respuesta."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La plausibilidad cronológica es el pilar fundamental de la causalidad. Si el evento adverso comenzó DESPUÉS de administrar el medicamento, se otorgan +2 puntos. Si el evento adverso ya existía ANTES de que se administrara el medicamento sospechoso, se restan -1 punto (ya que refuta la causalidad directa). Si la secuencia temporal es desconocida, puntúa 0.",
    "officialGuidelineRef": "Algoritmo de Naranjo, Criterio de Secuencia Temporal, SRS El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Sí otorga +2 puntos y No resta -1 punto según la matriz formal de Naranjo.",
      "B": "Ponderación exagerada fuera del rango de la herramienta.",
      "C": "Si el evento existía antes del medicamento no puede otorgar puntos positivos de causalidad.",
      "D": "La ponderación es discriminante y balanceada."
    }
  },
  {
    "id": "ram-10",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 3 (Dechallenge o Retirada)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 3 indaga: \"¿Mejoró la reacción adversa cuando el medicamento sospechoso fue suspendido (dechallenge) o tras administrar un antagonista específico?\". ¿Cuál es su puntuación?",
    "options": {
      "A": "Sí = +1 punto; No = 0 puntos; Desconocido = 0 puntos.",
      "B": "Sí = +8 puntos; No = -8 puntos.",
      "C": "Sí = -2 puntos; No = +2 puntos.",
      "D": "No tiene valor asignado en la versión oficial."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El \"dechallenge\" (desafío de retirada) evalúa si el cuadro clínico remite o disminuye en severidad al retirar el fármaco responsable o al aplicar su antídoto específico. Si la reacción mejora al suspenderlo, suma +1 punto. Si la reacción no mejora o si el fármaco no fue suspendido/se desconoce, puntúa 0.",
    "officialGuidelineRef": "Guía de Aplicación del Algoritmo de Naranjo, Centro Nacional de Farmacovigilancia, SRS.",
    "distractorRationale": {
      "A": "Correcto. La respuesta afirmativa a la mejoría tras la retirada (dechallenge positivo) suma +1 punto.",
      "B": "Puntajes ajenos a la escala validada por Naranjo et al. (1981).",
      "C": "Invertiría el sentido lógico de la resolución del cuadro clínico.",
      "D": "Es una de las 10 preguntas obligatorias del algoritmo."
    }
  },
  {
    "id": "ram-11",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 4 (Rechallenge o Readministración)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 4 indaga sobre el \"Rechallenge\": \"¿Reapareció la reacción adversa cuando el medicamento fue readministrado?\". ¿Cuál es su ponderación reglamentaria?",
    "options": {
      "A": "Sí = +2 puntos; No = -1 punto; Desconocido o no readministrado = 0 puntos.",
      "B": "Sí = +20 puntos; No = 0 puntos.",
      "C": "Sí = -5 puntos; No = +5 puntos.",
      "D": "La readministración está prohibida evaluarla en el algoritmo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El rechallenge positivo (reaparición de los mismos síntomas al reexponer al paciente al fármaco, ya sea de forma accidental o controlada) es la prueba clínica de causalidad más contundente en farmacovigilancia y suma +2 puntos. Si el fármaco se readministró y la reacción NO reapareció, resta -1 punto. Si no se readministró (lo cual es la norma por razones éticas en RAM graves), se registra 0 puntos.",
    "officialGuidelineRef": "Algoritmo de Naranjo, Ponderación de Rechallenge, SRS.",
    "distractorRationale": {
      "A": "Correcto. Sí = +2; No = -1; No readministrado/Desconocido = 0.",
      "B": "La escala total de Naranjo tiene un máximo posible de 13 puntos.",
      "C": "Ponderación inversa errónea.",
      "D": "Aunque no se provoque deliberadamente por ética, cuando ocurre por error o necesidad clínica, se evalúa con +2 puntos."
    }
  },
  {
    "id": "ram-12",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 5 (Causas Alternativas)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 5 investiga causas alternativas: \"¿Existen causas alternativas (distintas del fármaco sospechoso) que por sí solas pudieron haber causado la reacción adversa?\". ¿Cuál es su ponderación?",
    "options": {
      "A": "Sí = -1 punto; No = +2 puntos; Desconocido = 0 puntos.",
      "B": "Sí = +5 puntos; No = -5 puntos.",
      "C": "Sí = 0 puntos; No = 0 puntos.",
      "D": "Resta 10 puntos si el paciente tiene cualquier otra enfermedad."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Evaluar diagnósticos diferenciales y factores de confusión es crucial. Si NO existen causas alternativas que expliquen el cuadro (ej. no hay infecciones concomitantes, otras patologías o factores ambientales), la sospecha sobre el fármaco se fortalece sustancialmente y suma +2 puntos. Si SÍ existe una causa alternativa verosímil (ej. la fiebre era por una infección bacteriana preexistente), la imputabilidad al fármaco se debilita y resta -1 punto.",
    "officialGuidelineRef": "Manual de Farmacovigilancia y Análisis de Causalidad, SRS El Salvador.",
    "distractorRationale": {
      "A": "Correcto. La ausencia de causas alternativas suma +2; la presencia de causa alternativa resta -1 punto.",
      "B": "Ponderación incongruente que premiaría la presencia de explicaciones alternativas ajenas al fármaco.",
      "C": "La pregunta 5 es uno de los ítems con mayor poder discriminatorio del algoritmo.",
      "D": "No penaliza con 10 puntos."
    }
  },
  {
    "id": "ram-13",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 6 (Respuesta a Placebo)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 6 indaga: \"¿Reapareció la reacción cuando se administró un placebo?\". ¿Cuál es su asignación de puntaje?",
    "options": {
      "A": "Sí = -1 punto; No = +1 punto; Desconocido = 0 puntos.",
      "B": "Sí = +10 puntos; No = -10 puntos.",
      "C": "Sí = 0 puntos; No = -5 puntos.",
      "D": "La administración de placebo siempre suma 4 puntos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Si la reacción aparece tras administrar un placebo, sugiere un efecto nocebo o una fluctuación espontánea de la enfermedad de base, restando -1 punto de causalidad atribuible al fármaco. Si el placebo no provoca la reacción (No), suma +1 punto a favor de la especificidad farmacológica. En la práctica clínica habitual casi siempre se puntúa 0 (desconocido).",
    "officialGuidelineRef": "Algoritmo de Naranjo, SRS/DNM.",
    "distractorRationale": {
      "A": "Correcto. Sí = -1; No = +1; Desconocido = 0.",
      "B": "Puntajes inventados.",
      "C": "Incompatible con la matriz de Naranjo.",
      "D": "El placebo no suma 4 puntos."
    }
  },
  {
    "id": "ram-14",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 7 (Concentraciones Tóxicas)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 7 indaga: \"¿Se detectó el fármaco en sangre u otros fluidos corporales en concentraciones conocidas como tóxicas?\". ¿Cómo se puntúa?",
    "options": {
      "A": "Sí = +1 punto; No = 0 puntos; Desconocido = 0 puntos.",
      "B": "Sí = +15 puntos; No = -15 puntos.",
      "C": "Sí = -2 puntos; No = +2 puntos.",
      "D": "Esta pregunta solo aplica si el paciente consumió veneno para roedores."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La confirmación de niveles plasmáticos en rango tóxico (ej. digoxinemia > 2.0 ng/mL, litemia > 1.5 mEq/L, teofilinemia > 20 mcg/mL) aporta evidencia farmacocinética objetiva directa de causalidad, asignando +1 punto. Si los niveles no son tóxicos o no se midieron, se asigna 0 puntos.",
    "officialGuidelineRef": "Guía de Farmacovigilancia, Centro Nacional de Farmacovigilancia, SRS.",
    "distractorRationale": {
      "A": "Correcto. La detección de concentraciones tóxicas otorga +1 punto.",
      "B": "Puntaje desproporcionado fuera de la escala.",
      "C": "Invertiría el sentido farmacocinético de toxicidad.",
      "D": "Aplica a medicamentos de estrecho margen terapéutico en uso clínico."
    }
  },
  {
    "id": "ram-15",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 8 (Relación Dosis-Respuesta)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 8 indaga sobre la relación dosis-respuesta: \"¿Fue la reacción más severa cuando la dosis fue aumentada, o menos severa cuando la dosis fue disminuida?\". ¿Cuál es su puntuación?",
    "options": {
      "A": "Sí = +1 punto; No = 0 puntos; Desconocido = 0 puntos.",
      "B": "Sí = +5 puntos; No = -5 puntos.",
      "C": "Sí = 0 puntos; No = +3 puntos.",
      "D": "Resta puntos si el médico cambió la dosis."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El gradiente biológico o relación dosis-respuesta es un criterio clásico de causalidad de Bradford Hill. Si la gravedad del cuadro aumentó al subir la dosis o disminuyó al reducirla, apoya fuertemente la causalidad farmacológica (típica de RAM Tipo A) y suma +1 punto. Si no hubo cambio o no se modificó la dosis, puntúa 0.",
    "officialGuidelineRef": "Guía Metodológica de Causalidad de RAM, SRS.",
    "distractorRationale": {
      "A": "Correcto. La correlación dosis-respuesta suma +1 punto.",
      "B": "Fuera del rango estándar de Naranjo.",
      "C": "Incongruente con el principio de causalidad biológica.",
      "D": "El algoritmo evalúa la respuesta fisiopatológica del paciente, no juzga la conducta médica."
    }
  },
  {
    "id": "ram-16",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 9 (Exposición Previa)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 9 indaga: \"¿Había tenido el paciente una reacción similar al mismo fármaco o a fármacos similares en cualquier exposición previa?\". ¿Cómo se califica?",
    "options": {
      "A": "Sí = +1 punto; No = 0 puntos; Desconocido = 0 puntos.",
      "B": "Sí = +10 puntos; No = 0 puntos.",
      "C": "Sí = -3 puntos; No = +3 puntos.",
      "D": "La respuesta afirmativa anula automáticamente el reporte de farmacovigilancia."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El antecedente de reactividad previa similar ante el mismo principio activo o compuestos de la misma familia química (reactividad cruzada) demuestra susceptibilidad biológica individual (inmunológica o farmacodinámica) y suma +1 punto. Si no hay antecedente o se desconoce, puntúa 0.",
    "officialGuidelineRef": "Algoritmo de Naranjo, SRS El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Antecedente similar previo suma +1 punto.",
      "B": "Sobreponderación matemática errónea.",
      "C": "Invertiría el principio de predisposición previa del huésped.",
      "D": "El antecedente refuerza la validez del reporte en lugar de anularlo."
    }
  },
  {
    "id": "ram-17",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Algoritmo de Naranjo: Pregunta 10 (Evidencia Objetiva)",
    "statement": "En el Algoritmo de Naranjo, la Pregunta 10 indaga: \"¿Fue la reacción adversa confirmada por alguna evidencia objetiva de laboratorio, imagen o biopsia?\". ¿Cuál es su ponderación?",
    "options": {
      "A": "Sí = +1 punto; No = 0 puntos; Desconocido = 0 puntos.",
      "B": "Sí = +6 puntos; No = -6 puntos.",
      "C": "Sí = 0 puntos; No = +2 puntos.",
      "D": "Solo suma puntos si la biopsia la firma un patólogo extranjero."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La presencia de datos objetivos cuantitativos o anatomopatológicos (ej. eosinofilia en sangre, elevación documentada de transaminasas, biopsia cutánea compatible con necrólisis epidérmica, prueba de Coombs positiva) elimina la subjetividad sintomática del reporte y otorga +1 punto. Si la evidencia es puramente subjetiva (ej. náusea leve sin vómito ni examen alterado), puntúa 0.",
    "officialGuidelineRef": "Guía de Evaluación de Notificaciones de RAM, SRS.",
    "distractorRationale": {
      "A": "Correcto. Evidencia objetiva confirmatoria suma +1 punto.",
      "B": "Puntaje ficticio.",
      "C": "Incompatible con la escala oficial.",
      "D": "La validez de los estudios de laboratorio es técnica y científica, sin distinción de nacionalidad."
    }
  },
  {
    "id": "ram-18",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Categorías de Imputabilidad según Puntaje Total de Naranjo",
    "statement": "Al sumar el puntaje obtenido en las 10 preguntas del Algoritmo de Naranjo, ¿cuáles son los 4 rangos cuantitativos oficiales que definen la categoría de causalidad de la sospecha de RAM?",
    "options": {
      "A": ">= 9 puntos: DEFINIDA; de 5 a 8 puntos: PROBABLE; de 1 a 4 puntos: POSIBLE; y <= 0 puntos: DUDOSA.",
      "B": ">= 50 puntos: Segura; de 20 a 49: Dudosa; menos de 20: Falsa.",
      "C": "Todo puntaje par es Aprobado y todo puntaje impar es Rechazado.",
      "D": "Naranjo no tiene categorías y solo emite un porcentaje de 0% a 100% de culpa médica."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El puntaje acumulado en el Algoritmo de Naranjo clasifica el grado de imputabilidad en 4 categorías universales: 1) DEFINIDA (>= 9 puntos): relación causal indudable con rechallenge positivo y exclusión de otras causas; 2) PROBABLE (5 a 8 puntos): alta verosimilitud temporal y respuesta favorable a la suspensión sin causa alternativa obvia; 3) POSIBLE (1 a 4 puntos): secuencia compatible pero con posibles causas alternativas; 4) DUDOSA (<= 0 puntos): relación improbable o explicada enteramente por otros factores.",
    "officialGuidelineRef": "Guía Metodológica para el Análisis de Causalidad de RAM, SRS/DNM.",
    "distractorRationale": {
      "A": "Correcto. >=9 Definida, 5-8 Probable, 1-4 Posible, <=0 Dudosa son las cuatro categorías canónicas de Naranjo.",
      "B": "Escala numérica inexistente.",
      "C": "Criterio arbitrario sin fundamento científico.",
      "D": "Naranjo evalúa imputabilidad farmacológica, no culpa o responsabilidad médico-legal."
    }
  },
  {
    "id": "ram-19",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Elementos Mínimos del Formulario Noti-FACED / Tarjeta Amarilla",
    "statement": "Para que una notificación de sospecha de RAM en el formulario oficial Noti-FACED (Tarjeta Amarilla) sea considerada VÁLIDA y procesable por el Centro Nacional de Farmacovigilancia de la SRS, ¿cuáles son los CUATRO elementos mínimos indispensables que debe contener?",
    "options": {
      "A": "1) Paciente identificable (iniciales, edad o sexo); 2) Medicamento sospechoso identificable (nombre genérico/comercial y preferentemente lote/dosis); 3) Reacción adversa descrita; y 4) Notificador identificable (nombre y profesión de salud con datos de contacto).",
      "B": "Firma de un abogado notario, huella dactilar del paciente y sello del Ministerio de Hacienda.",
      "C": "Fotografía a color de la fachada de la farmacia y recibo de luz eléctrica.",
      "D": "Exclusivamente el nombre de la compañía farmacéutica fabricante sin datos clínicos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Tanto la OMS (Centro de Uppsala) como el RTCA 11.04.47:17 y la normativa salvadoreña exigen estrictamente estos cuatro datos mínimos para la validez técnica de un caso de farmacovigilancia: un paciente identificable, un fármaco sospechoso, una reacción adversa descrita y un notificador identificable. Sin cualquiera de estos cuatro elementos, la notificación no puede ser procesada epidemiológicamente ni ingresada al sistema VigiFlow/VigiBase.",
    "officialGuidelineRef": "RTCA 11.04.47:17 y Manual de Notificación Noti-FACED, SRS.",
    "distractorRationale": {
      "A": "Correcto. Paciente, medicamento, evento adverso y notificador constituyen el cuarteto de validez universal.",
      "B": "Requisitos notariales no aplicables a formularios clínicos de notificación espontánea.",
      "C": "Datos administrativos ajenos a la ficha técnica de farmacovigilancia.",
      "D": "Sin paciente ni evento clínico el reporte carece de contenido científico."
    }
  },
  {
    "id": "ram-20",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Criterios Regulatorios de Gravedad de una RAM",
    "statement": "De acuerdo con el Reglamento Técnico Centroamericano RTCA 11.04.47:17, ¿cuáles son los criterios taxativos que clasifican a una Reacción Adversa a Medicamentos como GRAVE?",
    "options": {
      "A": "Cualquier evento que resulte en la muerte del paciente, ponga en peligro inminente la vida, requiera hospitalización o prolongue la estancia hospitalaria, cause discapacidad o invalidez permanente o sustancial, o produzca una anomalía congénita o defecto de nacimiento.",
      "B": "Cualquier evento que cause un bostezo en la sala de espera.",
      "C": "Que el medicamento tenga un costo superior a 5 dólares por ampolla.",
      "D": "Que el paciente prefiera tomar tabletas redondas en lugar de cápsulas alargadas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La definición regulatoria de \"Grave\" (Serious Adverse Event) es unívoca internacionalmente: muerte, riesgo vital inmediato, hospitalización inicial o prolongada, discapacidad significativa permanente y teratogénesis / malformación congénita. También se consideran graves los eventos médicos clínicamente relevantes que requieran intervención para evitar alguno de los desenlaces anteriores. Estas RAM tienen prioridad absoluta de investigación urgente (48-72h).",
    "officialGuidelineRef": "RTCA 11.04.47:17, Sección de Términos y Definiciones de Farmacovigilancia.",
    "distractorRationale": {
      "A": "Correcto. Muerte, riesgo de vida, hospitalización, discapacidad permanente o defecto congénito definen gravedad.",
      "B": "Síntoma no patológico insignificante.",
      "C": "El precio comercial no define la gravedad clínica del evento adverso.",
      "D": "Preferencia galénica subjetiva sin relación con la seguridad farmacológica."
    }
  },
  {
    "id": "ram-21",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Plazo Ordinario de Notificación de RAM No Graves",
    "statement": "¿Cuál es el plazo reglamentario estipulado para la remisión de los reportes periódicos de sospechas de Reacciones Adversas No Graves (leves y moderadas) hacia el Centro Nacional de Farmacovigilancia según el RTCA 11.04.47:17?",
    "options": {
      "A": "Dentro de los primeros 30 días calendario posteriores al conocimiento o cierre del período mensual de notificación.",
      "B": "A los 10 años de haber finalizado el tratamiento.",
      "C": "Exactamente a los 5 minutos de administrada la tableta.",
      "D": "Las RAM no graves nunca se deben reportar bajo ninguna circunstancia."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "A diferencia de las RAM graves que exigen reporte perentorio expedito (48 a 72 horas), las reacciones no graves (ej. cefalea leve, náusea transitoria, prurito leve sin rash extenso) se consolidan y envían de forma periódica en un plazo no mayor a 30 días calendario. Su acumulación estadística permite detectar cambios en la frecuencia de eventos adversos y problemas sutiles de calidad de lotes.",
    "officialGuidelineRef": "RTCA 11.04.47:17, Plazos de Notificación de Farmacovigilancia.",
    "distractorRationale": {
      "A": "Correcto. Hasta 30 días calendario para RAM no graves consolidadas.",
      "B": "Plazo excesivo que destruye el propósito epidemiológico de la vigilancia.",
      "C": "Plazo impráctico e innecesario para eventos no graves.",
      "D": "Las RAM no graves deben reportarse para completar el perfil de seguridad poblacional del fármaco."
    }
  },
  {
    "id": "ram-22",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Farmacovigilancia Pasiva vs Activa",
    "statement": "¿Cuál es la diferencia conceptual fundamental entre la Farmacovigilancia Pasiva y la Farmacovigilancia Activa en el Sistema Nacional de Salud?",
    "options": {
      "A": "La Farmacovigilancia Pasiva se basa en la notificación espontánea y voluntaria de sospechas de RAM por parte de los profesionales de salud (ej. Noti-FACED); mientras que la Farmacovigilancia Activa busca proactivamente la ocurrencia de eventos adversos mediante cohortes observacionales sistemáticas (CEM), registros de pacientes o sitios centinela.",
      "B": "La pasiva la realizan los pacientes dormidos y la activa los pacientes haciendo ejercicio.",
      "C": "La pasiva es ilegal y la activa es la única autorizada por la ley.",
      "D": "La pasiva se aplica solo a medicamentos vencidos y la activa a medicamentos nuevos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La farmacovigilancia pasiva (notificación espontánea) es el método tradicional y piedra angular para la detección temprana de señales imprevistas de baja frecuencia en toda la población expuesta. La farmacovigilancia activa implica un diseño epidemiológico prospectivo protocolizado (cohort event monitoring, vigilancia en unidades centinela, cribado de historias clínicas) para cuantificar tasas reales de incidencia de RAM en grupos vulnerables específicos.",
    "officialGuidelineRef": "Manual de Farmacovigilancia para el Sistema Nacional Integrado de Salud, SRS.",
    "distractorRationale": {
      "A": "Correcto. Pasiva es notificación espontánea; Activa es búsqueda proactiva sistemática (CEM/sitios centinela).",
      "B": "Distractor humorístico absurdo.",
      "C": "Ambos métodos son reconocidos, normados y complementarios según el RTCA 11.04.47:17.",
      "D": "Ambos métodos vigilan medicamentos comercializados autorizados."
    }
  },
  {
    "id": "ram-23",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Subnotificación en Farmacovigilancia y Factores de Inman",
    "statement": "La subnotificación es la limitación intrínseca principal de los sistemas de notificación espontánea (estimándose que solo se reporta entre el 5% y 10% de las RAM que ocurren). Según el modelo clásico de Inman (\"los 7 pecados capitales de la subnotificación\"), ¿cuál de los siguientes factores contribuye mayormente a este fenómeno?",
    "options": {
      "A": "La inercia profesional (creer que solo se debe reportar si se está 100% seguro de la causalidad), el temor a litigios legales o sanciones, la falta de tiempo, la ignorancia sobre cómo o a quién notificar, y la vergüenza o culpabilidad por haber prescrito el medicamento.",
      "B": "La escasez absoluta de papel amarillo en el país.",
      "C": "Que los medicamentos nunca producen efectos adversos reales.",
      "D": "Que el Centro de Farmacovigilancia solo atiende una vez cada diez años."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "W.H.W. Inman describió los \"7 pecados capitales\" que explican la subnotificación médica: Complacencia (creer que los fármacos autorizados son totalmente seguros), Temor a litigios, Culpabilidad, Ignorancia del formulario, Pereza / falta de tiempo, Desinterés / inercia clínica, y Avaricia económica. Es un principio de farmacovigilancia recordar que se notifica la SOSPECHA clínica, sin necesidad de tener certeza absoluta.",
    "officialGuidelineRef": "Centro Nacional de Farmacovigilancia, SRS, Módulo Educativo de Sensibilización.",
    "distractorRationale": {
      "A": "Correcto. Factores actitudinales como inercia, temor a demandas y falta de conocimiento explican la subnotificación.",
      "B": "Los formularios están disponibles en plataformas digitales en línea (Noti-FACED en web).",
      "C": "Todos los fármacos poseen perfil de riesgo intrínseco.",
      "D": "El centro nacional opera de forma continua y permanente."
    }
  },
  {
    "id": "ram-24",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Detección de Señales en Farmacovigilancia (PRR y ROR)",
    "statement": "En epidemiología de medicamentos y farmacovigilancia cuantitativa, ¿qué es una \"SEÑAL\" y cómo se detecta estadísticamente en las bases de datos de sospechas de RAM?",
    "options": {
      "A": "Información reportada sobre una posible relación causal nueva o previamente insuficientemente documentada entre un fármaco y un evento adverso; detectada mediante análisis de desproporcionalidad estadística (como el PRR - Proportional Reporting Ratio o el ROR - Reporting Odds Ratio).",
      "B": "Un letrero de tránsito colocado afuera de la farmacia comunitaria.",
      "C": "El sonido que emite la caja registradora al vender un antibiótico.",
      "D": "El cambio de logotipo comercial de un laboratorio farmacéutico."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Según la OMS, una señal en farmacovigilancia es la información notificada sobre una posible relación causal entre un acontecimiento adverso y un fármaco, siendo la relación desconocida o incompletamente documentada previamente. El análisis de desproporcionalidad (PRR >= 2 con chi-cuadrado >= 4 y al menos 3 casos) identifica si un par fármaco-evento se reporta con una frecuencia significativamente mayor a la esperada respecto al resto de la base de datos.",
    "officialGuidelineRef": "Guía para la Gestión de Señales de Farmacovigilancia, SRS / OMS.",
    "distractorRationale": {
      "A": "Correcto. Información de relación causal nueva detectada por algoritmos de desproporcionalidad (PRR/ROR).",
      "B": "Señal vial física no médica.",
      "C": "Dispositivo acústico mercantil sin relevancia científica.",
      "D": "Modificación de marca o empaque comercial."
    }
  },
  {
    "id": "ram-25",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Programa Internacional de la OMS: Centro de Uppsala y MedDRA",
    "statement": "¿Cuál es el centro colaborador mundial de la OMS para el Programa de Monitoreo Internacional de Medicamentos, cuál es su base de datos global y qué terminología médica estandarizada se utiliza para codificar las reacciones adversas?",
    "options": {
      "A": "El Centro de Monitoreo de Uppsala (UMC) en Suecia, que gestiona la base de datos mundial VigiBase, utilizando el Diccionario Médico para Actividades Regulatorias (MedDRA) para codificar diagnósticos y términos de eventos adversos.",
      "B": "La NASA en Washington utilizando el sistema métrico decimal exclusivamente.",
      "C": "La Real Academia Española utilizando el diccionario de la lengua castellana.",
      "D": "El Banco Mundial utilizando códigos de divisas internacionales."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Uppsala Monitoring Centre (UMC, Suecia) coordina desde 1978 la farmacovigilancia global de más de 170 países (incluido El Salvador a través de la SRS). Gestiona VigiBase (con más de 35 millones de reportes de RAM) y la plataforma VigiFlow. Para garantizar la interoperabilidad sin barreras de idioma, los signos y diagnósticos de RAM se codifican mediante la jerarquía de MedDRA (Término Preferido PT, Nivel de Sistema Orgánico SOC).",
    "officialGuidelineRef": "Centro Nacional de Farmacovigilancia SRS / WHO Programme for International Drug Monitoring.",
    "distractorRationale": {
      "A": "Correcto. UMC en Suecia, base de datos VigiBase y terminología codificada MedDRA componen el estándar OMS.",
      "B": "Agencia espacial ajena a la vigilancia epidemiológica de medicamentos.",
      "C": "Institución lingüística no médica.",
      "D": "Organismo financiero internacional."
    }
  },
  {
    "id": "ram-26",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Eventos Supuestamente Atribuibles a la Vacunación (ESAVI)",
    "statement": "¿Cuál es la definición oficial de un ESAVI (Evento Supuestamente Atribuible a la Vacunación o Inmunización) según la normativa del MINSAL y la OPS?",
    "options": {
      "A": "Cualquier ocurrencia médica desfavorable que sobreviene después de la administración de una vacuna y que no necesariamente presenta una relación causal demostrada con el uso del biológico (pudiendo ser una coincidencia temporal, un error operativo programático o una reacción biológica inherente).",
      "B": "La inmunidad permanente que adquiere el niño contra la enfermedad para siempre.",
      "C": "La factura de compra de las jeringas desechables.",
      "D": "El llanto durante los primeros 5 segundos de la inyección muscular."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El término ESAVI es una definición operativa amplia de vigilancia: abarca cualquier manifestación clínica adversa en el tiempo posterior a la vacunación, sin prejuzgar causalidad biológica directa. Su investigación clasifica el evento en: 1) Reacción inherente a la vacuna; 2) Defecto de calidad del biológico; 3) Error operativo del programa (error de reconstitución o aplicación); 4) Reacción por estrés/ansiedad a la inyección; o 5) Evento puramente coincidente.",
    "officialGuidelineRef": "Manual de Vigilancia Epidemiológica de ESAVI, MINSAL / OPS.",
    "distractorRationale": {
      "A": "Correcto. Manifestación médica desfavorable temporalmente posterior a la vacuna sin causalidad probada a priori.",
      "B": "Corresponde a la eficacia protectora inmunológica, no a un evento adverso.",
      "C": "Documento contable administrativo.",
      "D": "Reacción fisiológica aguda transitoria esperable al estímulo doloroso de la punción."
    }
  },
  {
    "id": "ram-27",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Investigación de Conglomerados (Clusters) de ESAVI",
    "statement": "Cuando se detecta un \"conglomerado\" (cluster) de ESAVI graves (varios niños que presentan convulsiones o colapso hemodinámico pocas horas después de vacunarse en el mismo puesto de salud), ¿cuál es la primera causa que la comisión de investigación debe descartar con urgencia?",
    "options": {
      "A": "Un Error Programático u Operativo en la reconstitución o administración de las vacunas (ej. uso inadvertido de un relajante muscular o insulina en lugar del diluyente estéril específico, o contaminación del frasco multidosis por técnica séptica).",
      "B": "Una mutación genética simultánea e idéntica ocurrida en todos los niños al mismo segundo.",
      "C": "Que el agua potable de la región haya perdido sus átomos de hidrógeno.",
      "D": "Que el color del algodón haya alterado la presión atmosférica del consultorio."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Históricamente, los conglomerados de eventos adversos graves inmediatos tras la vacunación en un mismo establecimiento suelen deberse a errores operativos humanos trágicos: confusión de viales multidosis en el refrigerador (utilización de anestésicos, relajantes neuromusculares o insulina que se almacenaron erróneamente en la misma nevera en lugar del diluyente), sobredosificación o contaminación bacteriana por reuso de jeringas.",
    "officialGuidelineRef": "Guía de Investigación de Conglomerados de ESAVI, MINSAL / OPS.",
    "distractorRationale": {
      "A": "Correcto. El error programático/operativo en la preparación o dilución del biológico es la primera causa a investigar.",
      "B": "Imposibilidad biológica y probabilística en salud pública.",
      "C": "Distractor químicamente absurdo.",
      "D": "Explicación mágica sin asidero físico ni médico."
    }
  },
  {
    "id": "ram-28",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Diagnóstico Diferencial: Anafilaxia vs Síncope Vasovagal Post-Vacunal",
    "statement": "A los 10 minutos de recibir una vacuna, una adolescente de 15 años cae al suelo en la sala de espera. ¿Cuáles son los signos clínicos cardinales que permiten distinguir una REACCIÓN ANAFILÁCTICA VERDADERA (que exige Adrenalina IM inmediata) de un SÍNCOPE VASOVAGAL común por estrés/ansiedad?",
    "options": {
      "A": "En la Anafilaxia se presentan signos cutáneos pruriginosos (urticaria, angioedema), broncoespasmo con sibilancias, estridor laríngeo, taquicardia e hipotensión mantenida; mientras que en el Síncope Vasovagal predomina palidez fría, diaforesis, bradicardia transitoria y recuperación rápida de la conciencia al colocar a la paciente en posición supina con piernas elevadas.",
      "B": "En el síncope vasovagal la paciente siempre presenta fiebre de 42 °C.",
      "C": "En la anafilaxia la paciente no tiene ninguna alteración respiratoria ni cutánea.",
      "D": "Ambos cuadros son idénticos y se tratan inyectando 500 mL de solución salina en el ojo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El síncope vasovagal (reacción relacionada con la ansiedad a la inyección) es muy común en adolescentes. Se caracteriza por activación vagal con bradicardia transitoria, palidez, mareo y pérdida fugaz de la conciencia que resuelve al mejorar el retorno venoso cerebral (Trendelenburg). La anafilaxia es una emergencia inmunológica multisistémica con compromiso de piel (urticaria), vía aérea (estridor/disnea), taquicardia refleja e hipotensión que no cede espontáneamente.",
    "officialGuidelineRef": "Manual de Manejo de Urgencias Post-Vacunales, PAI / MINSAL.",
    "distractorRationale": {
      "A": "Correcto. La afectación respiratoria/cutánea y taquicardia caracterizan a la anafilaxia frente a la bradicardia del síncope.",
      "B": "El síncope vasovagal es hemodinámico y no cursa con hipertermia extrema.",
      "C": "La anafilaxia afecta al menos dos sistemas de órganos simultáneos (piel/respiratorio/cardiovascular).",
      "D": "Maniobra agresiva lesiva que causaría ceguera traumática."
    }
  },
  {
    "id": "ram-29",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Reacciones Cutáneas Severas: Síndrome de Stevens-Johnson (SSJ) y NET",
    "statement": "¿Cuál es el criterio clínico dermatológico porcentual estandarizado para clasificar y diferenciar el Síndrome de Stevens-Johnson (SSJ), la superposición SSJ/NET y la Necrólisis Epidérmica Tóxica (NET) según la extensión del desprendimiento epidérmico (Signo de Nikolsky positivo)?",
    "options": {
      "A": "SSJ: desprendimiento epidérmico en menos del 10% de la superficie corporal total; Superposición SSJ/NET: desprendimiento entre el 10% y el 30%; NET: desprendimiento epidérmico masivo en más del 30% de la superficie corporal.",
      "B": "SSJ: 100% del cuerpo; NET: menos del 1% del cuerpo.",
      "C": "La clasificación se basa en la presencia de lunares congénitos en la espalda.",
      "D": "Solo se clasifica como NET si afecta exclusivamente las uñas de las manos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El SSJ y la NET representan un espectro de la misma enfermedad inmunonecrótica cutánea grave mediada por linfocitos T citotóxicos CD8+ y granzima B/perforina contra queratinocitos (inducida por fármacos en > 80% de casos). La clasificación de Bastuji-Garin define: SSJ puro (< 10% SCT desprendida), superposición SSJ/NET (10-30% SCT) y Necrólisis Epidérmica Tóxica (> 30% SCT, similar a una quemadura de segundo grado extensa con alta mortalidad).",
    "officialGuidelineRef": "Guía de Diagnóstico y Manejo de Reacciones Adversas Cutáneas Severas (SCAR), SRS.",
    "distractorRationale": {
      "A": "Correcto. < 10% SSJ, 10-30% Superposición, > 30% NET según superficie corporal desprendida.",
      "B": "Porcentajes invertidos erróneos.",
      "C": "Los nevos melanocíticos son benignos ajenos a la necrosis epidérmica aguda.",
      "D": "La NET compromete extensamente tronco, extremidades y al menos dos mucosas (oral, conjuntival, genital)."
    }
  },
  {
    "id": "ram-30",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Fármacos de Alto Riesgo de Inducción de SSJ/NET y Farmacogenética",
    "statement": "¿Cuál de los siguientes grupos de medicamentos concentra la mayor proporción de casos reportados de Síndrome de Stevens-Johnson / Necrólisis Epidérmica Tóxica en los registros de farmacovigilancia?",
    "options": {
      "A": "Alopurinol, Antiepilépticos aromáticos (Carbamazepina, Fenitoína, Lamotrigina), Sulfonamidas antibacterianas (Cotrimoxazol / Trimetoprima-Sulfametoxazol), Nevirapina y AINEs derivados del oxicam.",
      "B": "Sales de rehidratación oral y vitamina C en comprimidos efervescentes.",
      "C": "Paracetamol en dosis de 500 mg administrado una vez al año.",
      "D": "Insulina humana en frascos refrigerados."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los estudios epidemiológicos internacionales (EuroSCAR / RegiSCAR) y las alertas de la SRS identifican un grupo selecto de fármacos responsables de la inmensa mayoría de casos de SSJ/NET. En muchos casos existe una base farmacogenética ligada a alelos HLA específicos: HLA-B*1502 para Carbamazepina (poblaciones asiáticas), HLA-B*5801 para Alopurinol, y alelos específicos para Nevirapina y Sulfonamidas.",
    "officialGuidelineRef": "Alertas Sanitarias de Seguridad de Medicamentos: SCAR y Genotipificación, SRS El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Alopurinol, carbamazepina, lamotrigina, cotrimoxazol y oxicams son los inductores clásicos de SSJ/NET.",
      "B": "Las SRO y vitamina C no inducen necrólisis epidérmica tóxica.",
      "C": "El paracetamol en dosis terapéuticas habituales no es un inductor primario de SCAR.",
      "D": "La insulina no induce apoptosis queratinocítica masiva mediada por HLA."
    }
  },
  {
    "id": "ram-31",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Síndrome DRESS: Criterios Diagnósticos de RegiSCAR",
    "statement": "¿Cuál es la tétrada clínica y de laboratorio que define al Síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms) inducido por medicamentos?",
    "options": {
      "A": "Erupción cutánea maculopapular confluente extensa (exantema morbiliforme > 50% SCT) con edema facial, fiebre alta persistente (> 38.5 °C), linfadenopatías múltiples en al menos dos cadenas ganglionares, y alteraciones hematológicas (eosinofilia marcada >= 1,500/uL y/o linfocitosis atípica) con compromiso de órganos internos (hepatitis, nefritis o miocarditis).",
      "B": "Caries dental múltiple con dolor en las encías sin fiebre.",
      "C": "Uña encarnada en el primer dedo del pie derecho sin erupción en la piel.",
      "D": "Pérdida de la memoria a corto plazo tras un examen de matemáticas."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El síndrome DRESS es una reacción de hipersensibilidad retardada severa mediada por células T que aparece típicamente entre 2 y 8 semanas tras el inicio del fármaco inductor (latencia prolongada). Se caracteriza por exantema eritematoso difuso con edema periorbitario/facial marcado, fiebre alta, adenopatías y eosinofilia sistémica con daño visceral (la hepatitis fulminante es la principal causa de muerte). Puede reactivar virus latentes del grupo herpes (HHV-6).",
    "officialGuidelineRef": "Guía Clínica de Diagnóstico del Síndrome DRESS en Atención Secundaria, SRS.",
    "distractorRationale": {
      "A": "Correcto. Exantema extenso con edema facial, fiebre, adenopatías, eosinofilia y daño visceral definen el DRESS.",
      "B": "Patología estomatológica infecciosa bacteriana local.",
      "C": "Onicocriptosis local mecánica.",
      "D": "Fenómeno cognitivo/emocional transitorio."
    }
  },
  {
    "id": "ram-32",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Hepatotoxicidad Inducida por Fármacos (DILI): Intrínseca vs Idiosincrática",
    "statement": "¿Cuál es la diferencia fundamental entre el Daño Hepático Inducido por Medicamentos (DILI) de tipo INTRÍNSECO (Predecible) versus el de tipo IDIOSINCRÁTICO (Impredecible)?",
    "options": {
      "A": "El DILI Intrínseco es dependiente de la dosis, reproducible en modelos animales y predecible con período de latencia corto (prototipo: necrosis centrolobulillar por sobredosis de Acetaminofén); mientras que el DILI Idiosincrático no depende de la dosis administrada, no es reproducible en animales y depende de la susceptibilidad inmunogenética del huésped (prototipo: hepatotoxicidad por Amoxicilina/Ácido Clavulánico o Isoniazida).",
      "B": "El intrínseco cura el hígado y el idiosincrático cura los riñones.",
      "C": "El intrínseco ocurre solo por inyecciones y el idiosincrático solo por jarabes.",
      "D": "No existe toxicidad hepática por medicamentos en seres humanos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El DILI intrínseco es un fenómeno toxicológico directo: cualquier persona que ingiera una dosis tóxica del fármaco sufrirá necrosis de hepatocitos proporcional a la dosis (dosis-dependiente, ej. paracetamol > 10-15 g). El DILI idiosincrático ocurre en dosis terapéuticas habituales en solo 1 de cada 10,000 a 100,000 pacientes predispuestos por factores inmunitarios, HLA o polimorfismos metabólicos, con latencias de semanas a meses.",
    "officialGuidelineRef": "Lineamientos Técnicos para el Monitoreo de Hepatotoxicidad Medicamentosa (DILI), SRS.",
    "distractorRationale": {
      "A": "Correcto. Intrínseco: dosis-dependiente y predecible (acetaminofén); Idiosincrático: independiente de dosis e inmune (amoxicilina-clavulanato).",
      "B": "Ambos provocan daño y necrosis celular hepática.",
      "C": "La toxicidad ocurre independientemente de la forma galénica.",
      "D": "DILI es una de las principales causas de fallo hepático agudo fulminante en el mundo."
    }
  },
  {
    "id": "ram-33",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Sobredosis de Acetaminofén y Antídoto N-Acetilcisteína (NAC)",
    "statement": "En la sobredosis de Acetaminofén, el metabolito tóxico N-acetil-p-benzoquinoneimina (NAPQI) agota los depósitos hepáticos de glutatión y provoca necrosis hepática masiva. ¿Cuál es el antídoto específico de elección y cómo actúa?",
    "options": {
      "A": "N-Acetilcisteína (NAC), administrada por vía intravenosa u oral, la cual actúa como precursora directa de la síntesis de Glutatión hepático y se conjuga directamente con el NAPQI para inactivarlo y eliminarlo.",
      "B": "Naloxona intravenosa en bolo para bloquear los receptores opioides.",
      "C": "Flumazenil para revertir el efecto gabaérgico.",
      "D": "Sulfato de protamina para neutralizar la heparina."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En dosis terapéuticas, el 90% del paracetamol se conjuga por glucuronidación y sulfatación, y solo una fracción menor se oxida por CYP2E1 a NAPQI, que es inmediatamente neutralizado por el glutatión. En sobredosis, el glutatión se agota (< 30% del basal) y el NAPQI libre se une covalentemente a proteínas mitocondriales causando necrosis centrolobulillar. La N-Acetilcisteína repone los grupos sulfhidrilo y la síntesis de glutatión, siendo casi 100% hepatoprotectora si se administra en las primeras 8 horas.",
    "officialGuidelineRef": "Protocolo de Manejo de Intoxicaciones Medicamentosas por Acetaminofén, MINSAL / SRS.",
    "distractorRationale": {
      "A": "Correcto. La N-Acetilcisteína restituye el glutatión celular y neutraliza el metabolito reactivo NAPQI.",
      "B": "La naloxona es el antídoto específico de sobredosis de opioides.",
      "C": "El flumazenil es el antagonista de receptores de benzodiacepinas.",
      "D": "La protamina neutraliza específicamente la heparina no fraccionada."
    }
  },
  {
    "id": "ram-34",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Nefritis Intersticial Aguda Inducida por Fármacos",
    "statement": "Un paciente que recibía tratamiento con Omeprazol y Amoxicilina desarrolla deterioro agudo de la función renal con elevación de creatinina, febrícula, exantema cutáneo eritematoso leve y sedimento urinario con piuria estéril y eosinofiluria. ¿Cuál es la patología renal alérgica responsable y qué fármacos la provocan con mayor frecuencia?",
    "options": {
      "A": "Nefritis Intersticial Aguda (NIA) inducida por medicamentos, desencadenada clásicamente por Inhibidores de la Bomba de Protones (Omeprazol), Betalactámicos (penicilinas/cefalosporinas) o AINEs.",
      "B": "Glomerulonefritis post-estreptocócica proliferativa difusa.",
      "C": "Litiasis renal coraliforme por cálculos de estruvita.",
      "D": "Tuberculosis urogenital caseosa primaria."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La Nefritis Intersticial Aguda es una reacción de hipersensibilidad de tipo IV retardada en el intersticio y túbulos renales. Más del 70-80% de los casos son inducidos por fármacos (IBPs como omeprazol, betalactámicos, sulfamidas, AINEs). La clásica tríada de fiebre, rash y eosinofilia se presenta solo en el 10-30% de los pacientes, pero la presencia de eosinofiluria y deterioro de creatinina obliga a suspender de inmediato el fármaco sospechoso e iniciar corticoides.",
    "officialGuidelineRef": "Guía de Nefrotoxicidad por Medicamentos en Atención Primaria y Hospitalaria, SRS.",
    "distractorRationale": {
      "A": "Correcto. La NIA mediada por fármacos (IBPs, betalactámicos, AINEs) cursa con eosinofiluria y deterioro de función renal.",
      "B": "Complicación postinfecciosa de faringitis o impétigo con proliferación endocapilar y consumo de C3.",
      "C": "Cálculos de fosfato amónico magnésico asociados a bacterias productoras de ureasa (Proteus).",
      "D": "Infección micobacteriana crónica necrotizante con piuria ácida."
    }
  },
  {
    "id": "ram-35",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Nefrotoxicidad por Aminoglucósidos y Monitoreo de Niveles Valle",
    "statement": "Al administrar antibióticos aminoglucósidos (como Gentamicina o Amikacina) en un paciente hospitalizado, ¿cuál es el mecanismo principal de su nefrotoxicidad y qué parámetro farmacocinético debe monitorizarse para evitar la acumulación tóxica en las células tubulares proximales renales?",
    "options": {
      "A": "Pinocitosis y acumulación lisosomal selectiva del aminoglucósido en las células del túbulo contorneado proximal, induciendo necrosis tubular aguda; previniéndose mediante el monitoreo de la Concentración Mínima o Nivel Valle (Trough level) inmediatamente antes de la siguiente dosis.",
      "B": "Vasoconstricción exclusiva de las arterias coronarias.",
      "C": "Destrucción de la vejiga urinaria por acidez del fármaco.",
      "D": "Los aminoglucósidos no se filtran por el riñón y carecen de nefrotoxicidad."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los aminoglucósidos son policatiónicos y se unen a los fosfolípidos de membrana del borde en cepillo del túbulo proximal renal, siendo captados por megalina/cubilina hacia los lisosomas celulares. Si el nivel plasmático no desciende suficientemente entre dosis (nivel valle elevado > 1-2 mcg/mL para gentamicina), el fármaco se acumula progresivamente causando fosfolipidosis, estrés oxidativo y necrosis tubular aguda no oligúrica.",
    "officialGuidelineRef": "Guía de Dosificación Segura y Monitoreo Terapéutico de Aminoglucósidos, SRS.",
    "distractorRationale": {
      "A": "Correcto. Necrosis tubular proximal por acumulación lisosomal; evitada con monitoreo de nivel valle bajo.",
      "B": "No producen espasmo coronario aislado como mecanismo patológico principal.",
      "C": "La toxicidad ocurre en el parénquima tubular renal, no en el urotelio vesical.",
      "D": "La eliminación es 100% por filtración glomerular renal."
    }
  },
  {
    "id": "ram-36",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Prolongación del Intervalo QT y Torsades de Pointes",
    "statement": "Varios medicamentos de uso ambulatorio común (como Macrólidos [Claritromicina/Azitromicina], Fluoroquinolonas [Ciprofloxacina], Antipsicóticos [Haloperidol], Antidepresivos y Antihistamínicos de 1ª generación) pueden bloquear el canal de potasio hERG cardíaco (IKr). ¿Cuál es la arritmia ventricular polimórfica potencialmente mortal que puede desencadenarse por esta interacción?",
    "options": {
      "A": "Torsades de Pointes (Torsión de Puntas) o Taquicardia Ventricular Polimórfica asociada a Intervalo QT Largo adquirido, con riesgo inminente de degeneración en Fibrilación Ventricular y Muerte Súbita.",
      "B": "Bradicardia sinusal benigna del atleta.",
      "C": "Ritmo nodal pasivo de escape de 60 lpm.",
      "D": "Taquicardia auricular multifocal benigna sin repercusión."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El bloqueo farmacológico de los canales de potasio rectificadores tardíos rápidos (IKr / canal hERG) prolonga la fase 3 de repolarización del potencial de acción ventricular, manifestándose en el electrocardiograma como prolongación del intervalo QTc (> 450 ms en hombres, > 470 ms en mujeres). Esta dispersión de la repolarización facilita la aparición de postdespolarizaciones precoces que disparan Torsades de Pointes y fibrilación ventricular mortal.",
    "officialGuidelineRef": "Alerta Sanitaria sobre Medicamentos que Prolongan el Intervalo QTc, SRS / DNM.",
    "distractorRationale": {
      "A": "Correcto. El bloqueo de canales hERG alarga el QTc y genera la arritmia letal Torsades de Pointes.",
      "B": "La bradicardia del deportista es una adaptación vagal fisiológica asintomática.",
      "C": "Ritmo fisiológico de rescate fisiológico.",
      "D": "Arritmia supraventricular común en EPOC que no produce degeneración en fibrilación ventricular primaria."
    }
  },
  {
    "id": "ram-37",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Interacción Grave: Síndrome Serotoninérgico",
    "vignette": "Un paciente en tratamiento regular con Sertralina 100 mg/día para trastorno depresivo acude a la clínica por un dolor lumbociático agudo y se le prescribe Tramadol oral 50 mg cada 8 horas. A las 24 horas es llevado a urgencias con agitación psicomotriz, diaforesis profusa, temblor marcado, hipertermia (39.2 °C), diarrea, hiperreflexia patológica con clonus inducible en ambos tobillos y pupilas midriáticas.",
    "statement": "¿Cuál es el diagnóstico clínico de esta emergencia farmacológica y cuál es el mecanismo causante?",
    "options": {
      "A": "Síndrome Serotoninérgico agudo, causado por la hiperestimulación sinérgica masiva de receptores de serotonina (5-HT1A y 5-HT2A) en el sistema nervioso central por la combinación de un ISRS con Tramadol (que inhibe la recaptación de serotonina).",
      "B": "Síndrome Neuroléptico Maligno por sobredosis de haloperidol.",
      "C": "Tétanos generalizado por pisar un clavo oxidado.",
      "D": "Reacción extrapiramidal aguda distónica curable con haloperidol adicional."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El Síndrome Serotoninérgico (Criterios de Hunter) es una toxicidad potencialmente fatal por hiperactivación de receptores centrales y periféricos de serotonina. Ocurre con frecuencia al combinar dos o más agentes que elevan la serotonina (ISRS + tramadol, linezolid, dextrometorfano, triptanos o IMAO). La presencia de clonus (espontáneo o inducible), hiperreflexia y diaforesis con hipertermia es diagnóstica. El tratamiento es suspender los fármacos, benzodiacepinas y ciproheptadina.",
    "officialGuidelineRef": "Centro Nacional de Farmacovigilancia, SRS, Alerta de Interacciones Medicamentosas Críticas.",
    "distractorRationale": {
      "A": "Correcto. La combinación de Sertralina y Tramadol potencia la serotonina sináptica causando Síndrome Serotoninérgico.",
      "B": "El síndrome neuroléptico maligno cursa con \"rigidez en tubo de plomo\", hiporreflexia y latencia de días a semanas.",
      "C": "El tétanos produce trismo y opistótonos por toxina tetanospasmina, sin el contexto de fármacos serotoninérgicos.",
      "D": "Administrar haloperidol empeoraría severamente el estado neurológico del paciente."
    }
  },
  {
    "id": "ram-38",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Rabdomiólisis por Estatinas e Inhibición de CYP3A4",
    "vignette": "Paciente de 62 años que toma Simvastatina 40 mg/día acude al médico por una neumonía y recibe prescripción de Claritromicina 500 mg cada 12 horas. A los 5 días presenta dolores musculares intensos generalizados (mialgias proximales severas), debilidad motora en hombros y muslos, y orina oscura de color caoba (\"refresco de cola\"). El laboratorio revela Creatina Quinasa (CK) en 25,000 UI/L y creatinina elevada.",
    "statement": "¿Cuál es el mecanismo de esta interacción farmacocinética mayor y el diagnóstico clínico resultante?",
    "options": {
      "A": "Rabdomiólisis inducida por Simvastatina potenciada por la Claritromicina, la cual es un potente inhibidor del citocromo CYP3A4 hepático, bloqueando el metabolismo de la simvastatina y multiplicando exponencialmente sus niveles plasmáticos tóxicos y miotoxicidad.",
      "B": "Efecto secundario beneficioso que fortalece los músculos esqueléticos.",
      "C": "Deshidratación simple por no beber suficiente café.",
      "D": "Intoxicación alimentaria por consumo de mariscos descompuestos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La simvastatina y la atorvastatina se metabolizan ampliamente por la isoenzima CYP3A4 del citocromo P450. Fármacos inhibidores potentes de CYP3A4 (Claritromicina, Eritromicina, Ketoconazol, Itraconazol, jugo de toronja) bloquean su aclaramiento, elevando la concentración sérica de la estatina hasta 10 veces. Esto desencadena necrosis masiva del miocito (rabdomiólisis), liberación masiva de mioglobina (orina oscura) y taponamiento tubular renal con fallo renal agudo mioglobinúrico.",
    "officialGuidelineRef": "Alerta Sanitaria SRS/DNM sobre Interacciones Fatales Estatinas-Macrólidos.",
    "distractorRationale": {
      "A": "Correcto. La inhibición de CYP3A4 por claritromicina dispara los niveles de simvastatina causando rabdomiólisis severa.",
      "B": "La lisis muscular y la elevación de CK a 25,000 UI/L es un cuadro patológico potencialmente letal.",
      "C": "La orina oscura se debe a mioglobinuria masiva, no a deshidratación hídrica aislada.",
      "D": "La temporalidad y farmacocinética confirman una interacción medicamentosa específica."
    }
  },
  {
    "id": "ram-39",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Agranulocitosis Inducida por Fármacos: Fármacos de Alto Riesgo",
    "statement": "Un paciente que inició tratamiento antitiroideo con Metimazol (Tiamazol) para enfermedad de Graves acude a la UCSF con fiebre alta súbita, odinofagia severa y úlceras necróticas orofaríngeas. El hemograma urgente reporta un Conteo Absoluto de Neutrófilos (CAN) de 150/uL. ¿Cuál es el diagnóstico de esta RAM grave y qué otros fármacos la inducen clásicamente?",
    "options": {
      "A": "Agranulocitosis medicamentosa (neutrófilos < 500/uL); inducida típicamente por antitiroideos (Metimazol/Propiltiouracilo), Clozapina, Dipirona (Metamizol) y Sulfasalazina.",
      "B": "Leucemia mieloide crónica en fase blastoide espontánea.",
      "C": "Alergia al flúor de la pasta dental.",
      "D": "Gingivitis bacteriana leve que no requiere suspender el antitiroideo."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La agranulocitosis medicamentosa (definida como CAN < 500/uL o < 0.5 x 10^9/L) es una RAM Tipo B de mecanismo inmunoalérgico o de toxicidad directa contra precursores mieloides en médula ósea. Los fármacos inductores clásicos son Metimazol, Clozapina (antipsicótico que exige control hematológico obligatorio semanal) y Dipirona/Metamizol. Ante cualquier paciente bajo estos fármacos que desarrolle fiebre o dolor de garganta, es obligatorio un hemograma urgente y la suspensión inmediata del fármaco.",
    "officialGuidelineRef": "Lineamientos Técnicos de Seguridad Hematológica en Farmacovigilancia, SRS.",
    "distractorRationale": {
      "A": "Correcto. La agranulocitosis por metimazol/clozapina con CAN < 500/uL se presenta con fiebre y odinofagia.",
      "B": "La leucemia crónica cursa con leucocitosis masiva con formas inmaduras, no neutropenia aislada post-fármaco.",
      "C": "No causa destrucción masiva de la serie mieloide de la médula ósea.",
      "D": "Minimizar el cuadro conduce a sepsis bacteriana fulminante por bacterias oportunistas y muerte."
    }
  },
  {
    "id": "ram-40",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Trombocitopenia Inducida por Heparina (HIT Tipo II)",
    "statement": "A los 7 días de haber iniciado Heparina No Fraccionada profiláctica tras una cirugía mayor, un paciente presenta una caída del 50% en su recuento plaquetario basal y desarrolla paradójicamente una trombosis venosa profunda iliofemoral extensa y tromboembolismo pulmonar. ¿Cuál es la fisiopatología de la Trombocitopenia Inducida por Heparina Tipo II?",
    "options": {
      "A": "Reacción mediada por anticuerpos IgG dirigidos contra el complejo neoantigénico formado por el Factor 4 Plaquetario y la Heparina (anti-PF4/heparina), los cuales activan masivamente las plaquetas a través de su receptor FcgammaRIIa, generando trombina descontrolada y trombosis paradójica masiva arterial y venosa.",
      "B": "Destrucción mecánica de las plaquetas al chocar contra las agujas de las inyecciones.",
      "C": "Deficiencia dietética de zinc que impide la coagulación de la sangre.",
      "D": "Efecto anticoagulante normal esperado que previene los coágulos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La HIT Tipo II es una emergencia inmunohematológica severa. Los anticuerpos formados reconocen los tetrámeros de Factor 4 Plaquetario unidos a la heparina. El extremo Fc del anticuerpo se une a los receptores plaquetarios FcgammaRIIa, induciendo activación y agregación plaquetaria sistémica descontrolada con consumo plaquetario y generación explosiva de trombina. Paradójicamente, el paciente no sangra sino que sufre trombosis masiva (trombocitopenia trombótica).",
    "officialGuidelineRef": "Guía Clínica de Anticoagulación y Seguridad Hematológica, SRS / MINSAL.",
    "distractorRationale": {
      "A": "Correcto. Anticuerpos anti-PF4/heparina activan plaquetas y generan trombosis paradójica catastrófica.",
      "B": "Mecanismo físico imposible.",
      "C": "No interviene la homeostasis nutricional del zinc.",
      "D": "La trombosis paradójica extensa es una complicación patológica grave, lo contrario al efecto anticoagulante buscado."
    }
  },
  {
    "id": "ram-41",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Hito Histórico de la Farmacovigilancia: Desastre de la Talidomida",
    "statement": "¿Cuál fue el desastre farmacológico internacional de la década de 1960 que provocó miles de casos de Focomelia (ausencia o acortamiento severo de extremidades) en recién nacidos de madres que tomaron el fármaco como sedante y antiemético para las náuseas matutinas, dando origen al nacimiento de la Farmacovigilancia moderna y a las enmiendas de Kefauver-Harris de 1962?",
    "options": {
      "A": "La tragedia de la Talidomida.",
      "B": "La epidemia del Ácido Acetilsalicílico.",
      "C": "La intoxicación por Penicilina G.",
      "D": "El síndrome de la Vitamina C hidrosoluble."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La catástrofe de la Talidomida (fármaco comercializado en Europa y Latinoamérica a finales de los años 50 como sedante seguro durante la gestación) causó el nacimiento de más de 10,000 niños con malformaciones congénitas gravísimas (focomelia, amelia, sordera, defectos cardíacos). Este evento transformó las leyes de medicamentos en el mundo, exigiendo por primera vez demostración rigurosa de seguridad y teratogénesis preclínica y clínica, e instaurando la notificación de RAM (Tarjeta Amarilla en Reino Unido, 1964).",
    "officialGuidelineRef": "Historia y Fundamentos de la Farmacovigilancia Mundial, SRS / OMS.",
    "distractorRationale": {
      "A": "Correcto. La talidomida y la focomelia dieron origen a la farmacovigilancia y regulación moderna de medicamentos.",
      "B": "La aspirina es un salicilato con antecedentes históricos distintos.",
      "C": "La penicilina es un antibacteriano beta-lactámico.",
      "D": "La vitamina C no produce focomelia teratogénica."
    }
  },
  {
    "id": "ram-42",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Teratogénesis por Ácido Valproico en el Embarazo",
    "statement": "¿Por qué las autoridades regulatorias de medicamentos (SRS, EMA, FDA) han emitido estrictas restricciones y contraindicaciones para el uso de ÁCIDO VALPROICO (Valproato de sodio) en mujeres en edad fértil y durante el embarazo?",
    "options": {
      "A": "Porque se asocia a una tasa de malformaciones congénitas mayores de hasta el 10% (incluyendo defectos del tubo neural como espina bífida, fisuras orofaciales, anomalías cardiovasculares y craneofaciales) y a un riesgo de hasta el 30% al 40% de retraso en el neurodesarrollo infantil, trastornos del espectro autista y reducción del coeficiente intelectual.",
      "B": "Porque causa que el bebé nazca con cabello de color verde brillante.",
      "C": "Porque la madre pierde la memoria de cómo se llama su hijo.",
      "D": "Porque el valproato solo es tóxico para los fetos masculinos de más de 4 kilos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El ácido valproico es uno de los teratógenos humanos más potentes conocidos. Inhibe las histonas desacetilasas y altera el metabolismo del folato embrionario. Su exposición intrauterina multiplica por 10 el riesgo de espina bífida y cardiopatías congénitas, y causa un síndrome dismórfico valproico con deterioro cognitivo permanente y autismo. Está terminantemente contraindicado en mujeres en edad fértil a menos que se cumpla un Programa de Prevención del Embarazo estricto.",
    "officialGuidelineRef": "Alerta Regulatoria sobre el Uso de Ácido Valproico en Mujeres en Edad Fértil, SRS El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Espina bífida, malformaciones mayores y retraso cognitivo/autismo en 30-40% de niños expuestos.",
      "B": "Efecto ficticio sin base médica.",
      "C": "Distractor humorístico.",
      "D": "La teratogénesis ocurre en ambos sexos fetales independientemente del peso gestacional."
    }
  },
  {
    "id": "ram-43",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Teratogénesis por Isotretinoína y Programa de Prevención",
    "statement": "La Isotretinoína (ácido 13-cis-retinoico) es un fármaco altamente efectivo para el acné quístico severo recalcitrante, pero presenta una teratogenicidad extrema (Embriopatía por Retinoides). ¿Cuál es el requisito regulatorio obligatorio que debe cumplir una paciente en edad fértil antes y durante su prescripción según la SRS?",
    "options": {
      "A": "Uso obligatorio y simultáneo de al menos dos métodos anticonceptivos eficaces independientes (incluyendo un método de barrera), prueba de embarazo de laboratorio en sangre negativa antes de iniciar, confirmación mensual durante el tratamiento y hasta un mes después de suspenderlo, y firma de consentimiento informado de riesgo teratogénico.",
      "B": "Tomar la cápsula únicamente los días domingos por la tarde.",
      "C": "No lavarse la cara con jabón mientras dure el tratamiento.",
      "D": "No existe ningún requisito especial si la paciente promete no casarse."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La isotretinoína causa malformaciones graves en más del 25-30% de los fetos expuestos (microtia/anotia, hipoplasia mandibular, defectos conotruncales cardíacos, microcefalia e hidrocefalia). Por ello, los programas oficiales de prevención del embarazo (como iPLEDGE internacional y la normativa SRS) exigen pruebas serológicas mensuales de embarazo negativas y doble método anticonceptivo simultáneo obligatorio desde un mes antes hasta un mes después del tratamiento.",
    "officialGuidelineRef": "Normativa Regulatoria para la Prescripción y Dispensación de Retinoides Orales, SRS El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Doble método anticonceptivo, pruebas mensuales de embarazo y consentimiento informado obligatorio.",
      "B": "La frecuencia semanal no previene la teratogénesis por acumulación de retinoides.",
      "C": "La higiene facial no altera la teratogenicidad sistémica del fármaco.",
      "D": "El estado civil no previene embarazos involuntarios."
    }
  },
  {
    "id": "ram-44",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Toxicidad Odontológica de las Tetraciclinas en Niños y Gestantes",
    "statement": "¿Por qué las Tetraciclinas (como Doxiciclina y Tetraciclina) están contraindicadas en mujeres embarazadas a partir del segundo trimestre y en niños menores de 8 años de edad?",
    "options": {
      "A": "Porque se quelan ávidamente con el calcio del tejido óseo y dental en fase de mineralización, depositándose en el esmalte y la dentina, lo que provoca hipoplasia del esmalte dental, coloración intrínseca pardusca o gris-amarillenta permanente e irreversible de los dientes, y retraso transitorio en el crecimiento óseo.",
      "B": "Porque transforman la leche materna en ácido sulfúrico.",
      "C": "Porque hacen que los dientes se caigan y no vuelvan a crecer nunca más.",
      "D": "Porque estimulan el crecimiento excesivo de los huesos de las manos."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Las tetraciclinas forman complejos insolubles de ortofosfato de calcio-tetraciclina en los huesos y dientes en desarrollo activo (calcificación de la dentición primaria y definitiva desde el 2° trimestre de gestación hasta los 8 años de edad). La exposición a la luz solar induce oxidación de la tetraciclina depositada, produciendo una tinción grisácea u ocre permanente de los dientes con fragilidad del esmalte e hipoplasia.",
    "officialGuidelineRef": "Manual de Farmacovigilancia y Uso Racional de Antimicrobianos, SRS.",
    "distractorRationale": {
      "A": "Correcto. Quelación con calcio y depósito en dentina/esmalte causando tinción dental permanente e hipoplasia.",
      "B": "Reacción química fantasiosa sin asidero biológico.",
      "C": "No causa anodoncia o pérdida de gérmenes dentarios primarios.",
      "D": "Al contrario, causan inhibición transitoria del crecimiento de huesos largos."
    }
  },
  {
    "id": "ram-45",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Fetopatía por IECAs y ARA-II en 2° y 3° Trimestre",
    "statement": "¿Cuál es el mecanismo patogénico por el cual los IECAs (Enalapril) y ARA-II (Losartán) administrados durante el segundo y tercer trimestre del embarazo provocan la llamada \"Fetopatía por IECAs/ARA-II\"?",
    "options": {
      "A": "El bloqueo del sistema renina-angiotensina fetal colapsa la perfusión renal del feto, produciendo anuria fetal irreversible y consecuente oligohidramnios severo, que a su vez causa hipoplasia pulmonar letal, deformidades craneofaciales (Secuencia de Potter) y disgenesia tubular renal.",
      "B": "Provocan hipertrofia muscular fetal que rompe el saco amniótico.",
      "C": "Aumentan el volumen de líquido amniótico hasta causar polihidramnios masivo.",
      "D": "Causan que el feto desarrolle diabetes antes de nacer."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "En el segundo y tercer trimestre, el riñón fetal produce el líquido amniótico al orinar en la cavidad amniótica. La angiotensina II fetal es vital para mantener la filtración glomerular del feto. Los IECAs/ARA-II inducen insuficiencia renal anúrica fetal, lo que genera oligohidramnios severo (falta de líquido amniótico). Sin líquido, los pulmones no se expanden (hipoplasia pulmonar mortal) y las paredes uterinas comprimen al feto causando la facies y deformidades de Potter.",
    "officialGuidelineRef": "Alertas Sanitarias Internacionales y Centro Nacional de Farmacovigilancia, SRS.",
    "distractorRationale": {
      "A": "Correcto. Anuria fetal por hipotensión renal que desencadena oligohidramnios, hipoplasia pulmonar y secuencia de Potter.",
      "B": "No inducen hipertrofia muscular fetal.",
      "C": "Producen oligohidramnios (ausencia o escasez de líquido), lo opuesto al polihidramnios.",
      "D": "No alteran el metabolismo de los islotes pancreáticos fetales de forma hiperglucémica."
    }
  },
  {
    "id": "ram-46",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Interacción Farmacocinética: Warfarina y Fluconazol",
    "vignette": "Un paciente anticoagulado crónico con Warfarina por una prótesis valvular mecánica cardíaca, con INR estable en 2.5, presenta candidiasis oral y un médico le prescribe Fluconazol oral 200 mg/día. A los 4 días, el paciente ingresa con hematuria macroscópica masiva, epistaxis incoercible y un INR mayor a 10.0.",
    "statement": "¿Cuál es la base farmacocinética de esta interacción medicamentosa grave reportada con frecuencia en farmacovigilancia?",
    "options": {
      "A": "El Fluconazol es un potente inhibidor de la isoenzima CYP2C9 del citocromo P450, enzima responsable del metabolismo del enantiómero S-Warfarina (el más activo anticoagulante), bloqueando su eliminación y disparando el INR hacia niveles de hemorragia mortal.",
      "B": "El fluconazol actúa como un factor de coagulación artificial que coagula toda la sangre.",
      "C": "La warfarina destruye el fluconazol en el estómago.",
      "D": "Es una reacción alérgica común a los antifúngicos que no tiene relación con el INR."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La S-warfarina es 3 a 5 veces más potente como antagonista de la vitamina K que la R-warfarina y se metaboliza de forma exclusiva por la enzima hepática CYP2C9. Los azoles (Fluconazol, Miconazol, Voriconazol) inhiben fuertemente CYP2C9, incrementando la vida media de la S-warfarina y provocando una elevación exponencial del INR con sangrados mayores. Si se deben coadministrar, la dosis de warfarina debe reducirse a la mitad con monitoreo diario de INR.",
    "officialGuidelineRef": "Guía de Interacciones de Alto Riesgo en Anticoagulación Oral, SRS.",
    "distractorRationale": {
      "A": "Correcto. La inhibición de CYP2C9 por fluconazol bloquea el aclaramiento de S-warfarina elevando el INR y provocando hemorragia.",
      "B": "El fluconazol no es procoagulante; la interacción produce hipocoagulabilidad extrema y sangrado.",
      "C": "No hay destrucción gástrica directa.",
      "D": "La elevación del INR confirma una interacción farmacocinética enzimática directa demostrada."
    }
  },
  {
    "id": "ram-47",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Interacción: Clopidogrel y Omeprazol (Inhibición de CYP2C19)",
    "statement": "¿Por qué la Agencia Europea de Medicamentos (EMA), la FDA y la SRS recomiendan evitar la combinación de Clopidogrel con Omeprazol o Esomeprazol en pacientes con stents coronarios?",
    "options": {
      "A": "Porque el Clopidogrel es un profármaco que requiere activación metabólica hepática a través de la enzima CYP2C19 para generar su metabolito activo antiagregante plaquetario; y el Omeprazol inhibe fuertemente CYP2C19, reduciendo la eficacia antiplaquetaria del clopidogrel y aumentando el riesgo de trombosis del stent e infarto recurrente (recomendándose Pantoprazol como alternativa más segura).",
      "B": "Porque la combinación disuelve los glóbulos blancos en la sangre.",
      "C": "Porque el omeprazol se transforma en aspirina en presencia de clopidogrel.",
      "D": "Porque produce hiperacidez gástrica incontrolable."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El clopidogrel requiere biotransformación en dos pasos en el hígado por CYP2C19 para liberar su metabolito tiol activo que bloquea irreversiblemente el receptor P2Y12 de las plaquetas. El omeprazol es un inhibidor competitivo potente de CYP2C19, disminuyendo la concentración del metabolito activo de clopidogrel en casi un 45%, lo que se traduce en mayor resistencia a la antiagregación y reoclusión de stents coronarios. El pantoprazol tiene menor afinidad por CYP2C19.",
    "officialGuidelineRef": "Alerta de Seguridad: Interacción Clopidogrel e Inhibidores de Bomba de Protones, SRS.",
    "distractorRationale": {
      "A": "Correcto. La inhibición de CYP2C19 por omeprazol impide la bioactivación de clopidogrel favoreciendo trombosis del stent.",
      "B": "No produce lisis leucocitaria.",
      "C": "Los fármacos no transmutan en ácido acetilsalicílico.",
      "D": "El omeprazol suprime la acidez gástrica."
    }
  },
  {
    "id": "ram-48",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Toxicidad Digitálica: Factores Desencadenantes y Clínica",
    "statement": "En un paciente anciano con insuficiencia cardíaca que toma Digoxina y Furosemida, ¿cuál es el factor desencadenante hidroelectrolítico más común de Intoxicación Digitálica severa y cuáles son sus síntomas visuales y arrítmicos clásicos?",
    "options": {
      "A": "La Hipopotasemia inducida por el diurético de asa (Furosemida), la cual incrementa la afinidad de la digoxina por la bomba Na+/K+ ATPasa miocárdica; manifestándose con xantopsia (visión con halos amarillo-verdosos), náuseas, vómitos, bloqueo auriculoventricular y extrasístoles ventriculares bigeminadas.",
      "B": "La hipercalcemia fisiológica de la juventud.",
      "C": "El consumo excesivo de agua pura.",
      "D": "La presencia de presión arterial completamente normal."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "El potasio plasmático compite directamente con la digoxina por el sitio de unión en la subunidad alfa de la bomba Na+/K+ ATPasa sarcolémica. Cuando los diuréticos causan hipopotasemia (< 3.5 mEq/L), la digoxina se une con mayor afinidad y ejerce una inhibición excesiva, acumulando calcio intracelular. Esto precipita la toxicidad digitálica: alteraciones gastrointestinales (anorexia, náuseas), neurovisuales (xantopsia / halos amarillos) y arritmias ventriculares letales.",
    "officialGuidelineRef": "Guía de Farmacovigilancia y Seguridad en Medicamentos Cardiovasculares, SRS.",
    "distractorRationale": {
      "A": "Correcto. Hipopotasemia por furosemida potencia la toxicidad digitálica, manifestada con xantopsia y arritmias.",
      "B": "La hipercalcemia también empeora la toxicidad, pero el desencadenante diurético clásico es la hipopotasemia.",
      "C": "La sobrehidratación pura no es el mecanismo de sobreunión del digitálico a la bomba.",
      "D": "La presión arterial normal no previene las arritmias de la intoxicación digitálica."
    }
  },
  {
    "id": "ram-49",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Alertas Sanitarias y Retiro de Mercado (Recall) por la SRS",
    "statement": "De acuerdo con la Ley de Medicamentos y el RTCA de Farmacovigilancia, ¿qué define a un \"Retiro de Mercado Clase I\" (Recall Clase I) emitido por la Superintendencia de Regulación Sanitaria (SRS)?",
    "options": {
      "A": "Una situación de emergencia sanitaria de máxima gravedad en la que existe una probabilidad razonable de que el uso o exposición a un producto farmacéutico defectuoso, contaminado o adulterado cause consecuencias adversas graves para la salud o la muerte de los pacientes, exigiendo el retiro inmediato y total del producto hasta el nivel del usuario/consumidor final.",
      "B": "Un cambio voluntario del diseño estético de la caja de cartón exterior por decisión de mercadeo.",
      "C": "Un descuento promocional de fin de año en farmacias de cadena.",
      "D": "Una sugerencia opcional para que las farmacias vendan el producto más rápido."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "Los retiros de mercado (Recalls) se clasifican por riesgo sanitario: Clase I (Riesgo Crítico / Vital: alta probabilidad de muerte o daño permanente, ej. contaminación con patógenos en inyectables, principio activo tóxico o subdosificación masiva; retiro inmediato hasta el consumidor final); Clase II (Riesgo Moderado: consecuencias transitorias o reversibles; retiro hasta farmacias); Clase III (Defectos menores de rotulación o empaque que no comprometen la salud).",
    "officialGuidelineRef": "Norma Técnica para el Retiro de Productos del Mercado (Recall), SRS / DNM El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Recall Clase I implica riesgo de consecuencias graves o muerte y retiro obligatorio hasta el consumidor.",
      "B": "Cambios de diseño sin impacto sanitario no constituyen un retiro de mercado Clase I.",
      "C": "Estrategia comercial privada ajena a las alertas sanitarias oficiales.",
      "D": "El retiro sanitario es una orden regulatoria de cumplimiento legal obligatorio bajo sanción penal y administrativa."
    }
  },
  {
    "id": "ram-50",
    "category": "farmacovigilancia",
    "categoryLabel": "Farmacovigilancia SRS/DNM",
    "clinicalArea": "Ética, Confidencialidad y Principio No Punitivo en Farmacovigilancia",
    "statement": "¿Cuál es el principio ético, legal y operativo fundamental que rige el Sistema Nacional de Farmacovigilancia respecto a los profesionales de la salud que notifican sospechas de reacciones adversas?",
    "options": {
      "A": "El principio de confidencialidad estricta de los datos personales (del paciente y del notificador) y el carácter NO PUNITIVO de la notificación espontánea, asegurando que el reporte de una sospecha de RAM jamás se utilice para fincar culpa, iniciar litigios de mala praxis o sancionar al profesional, sino exclusivamente para proteger la salud pública y la seguridad de futuros pacientes.",
      "B": "La obligación de publicar los nombres de los médicos que reportan en los periódicos nacionales para escarmiento público.",
      "C": "Que el médico reportante debe pagar una multa económica cada vez que notifique un evento adverso.",
      "D": "Que el paciente debe ser expulsado del sistema de salud pública si presenta una reacción alérgica."
    },
    "correctAnswer": "A",
    "clinicalExplanation": "La cultura de seguridad del paciente y la farmacovigilancia solo pueden florecer en un entorno libre de castigo (\"just culture\"). La normativa nacional e internacional garantiza la confidencialidad de la identidad del notificador y del paciente, y prohíbe taxativamente que las notificaciones de RAM se utilicen como prueba acusatoria o instrumento punitivo contra los profesionales. Su fin supremo es epidemiológico, científico y preventivo para generar alertas y salvar vidas.",
    "officialGuidelineRef": "Código de Ética y Normativa de Confidencialidad en Farmacovigilancia, SRS / OMS.",
    "distractorRationale": {
      "A": "Correcto. La confidencialidad y el carácter no punitivo protegen al notificador y fomentan la cultura del reporte de seguridad.",
      "B": "La difamación o exposición pública destruiría el sistema de notificación espontánea.",
      "C": "Multar al profesional reportante constituiría un desincentivo perverso ilegal.",
      "D": "La atención médica es un derecho universal garantizado por la Constitución."
    }
  }
];
