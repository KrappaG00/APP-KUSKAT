/**
 * CASOS CLÍNICOS SECUENCIALES RAMIFICADOS (BRANCHING CLINICAL SCENARIOS)
 * Plataforma KUSKAT — Especialidades Médicas y Residentado (ENAR El Salvador)
 * Basado en Guías Clínicas Oficiales del MINSAL, Hospital Nacional Rosales,
 * Hospital de Niños Benjamín Bloom, e Instituto Salvadoreño del Seguro Social (ISSS).
 */

export interface VitalSigns {
  bp: string;       // Presión arterial (mmHg)
  hr: number;       // Frecuencia cardíaca (lpm)
  rr: number;       // Frecuencia respiratoria (rpm)
  spo2: number;     // Saturación periférica de O2 (%)
  temp: number;     // Temperatura corporal (°C)
  glasgow?: number; // Escala de Coma de Glasgow (3-15)
}

export interface BranchingDecisionOption {
  id: string;
  action: string;
  isOptimal: boolean;
  consequenceText: string;
  vitalImpact: Partial<VitalSigns>;
  learningPoint: string;
  minsalProtocolRef: string;
}

export interface BranchingStage {
  id: string;
  stageNumber: number;
  stageTitle: string;
  narrative: string;
  vitals: VitalSigns;
  clinicalDataSnippet?: string;
  options: BranchingDecisionOption[];
}

export interface BranchingCaseScenario {
  id: string;
  title: string;
  specialty: 'Medicina Interna' | 'Gineco-Obstetricia' | 'Pediatría' | 'Cirugía';
  patientDescription: string;
  initialVitals: VitalSigns;
  stages: BranchingStage[];
  debriefSummary: {
    coreDiagnosis: string;
    goldStandardProtocol: string;
    officialMinsalNorm: string;
  };
}

export const BRANCHING_CLINICAL_CASES: BranchingCaseScenario[] = [
  // =========================================================================
  // CASO 1: INFARTO AGUDO DE MIOCARDIO DE PARED INFERIOR CON EXTENSIÓN A VD
  // =========================================================================
  {
    id: 'branching-case-iam-vd',
    title: 'Síndrome Coronario Agudo con Hipotensión y Afectación Ventricular Derecha',
    specialty: 'Medicina Interna',
    patientDescription: 'Masculino de 62 años hipertenso y tabaquista, trasladado a Emergencia tras 2 horas de dolor retroesternal opresivo, diaforesis, mareo intenso y frialdad distal.',
    initialVitals: {
      bp: '82/50',
      hr: 54,
      rr: 22,
      spo2: 92,
      temp: 36.4,
      glasgow: 14,
    },
    stages: [
      {
        id: 'iam-stage-1',
        stageNumber: 1,
        stageTitle: 'Etapa 1: Triaje y Evaluación Hemodinámica Inicial',
        narrative: 'El paciente se encuentra pálido, sudoroso, con ingurgitación yugular evidente a 45° y ruidos cardíacos rítmicos pero apagados. Los campos pulmonares están COMPLETAMENTE LIMPIOS, sin estertores crepitantes. El ECG muestra supradesnivel del segmento ST de 3.5 mm en DII, DIII y aVF, con ondas Q patológicas incipientes.',
        vitals: { bp: '82/50', hr: 54, rr: 22, spo2: 92, temp: 36.4, glasgow: 14 },
        clinicalDataSnippet: 'ECG 12 Derivaciones: Supradesnivel ST en II, III, aVF (DIII > DII) con infradesnivel en DI y aVL. Auscultación pulmonar sin crepitantes.',
        options: [
          {
            id: 'opt-1a',
            action: 'Administrar Nitroglicerina sublingual 0.5 mg para alivio del dolor y solicitar derivaciones derechas (V3R-V4R).',
            isOptimal: false,
            consequenceText: '¡Deterioro hemodinámico grave! La nitroglicerina provocó una caída precipitada de la precarga en un ventrículo derecho dependiente de volumen. La presión se desplomó a 60/35 mmHg y el paciente presentó síncope.',
            vitalImpact: { bp: '60/35', hr: 48, glasgow: 11 },
            learningPoint: 'Los nitratos y diuréticos están CONTRAINDICADOS en IAM de cara inferior con sospecha o confirmación de extensión a Ventrículo Derecho (V4R+), pues el VD hipotónico es extremadamente dependiente de la precarga para mantener el gasto cardíaco.',
            minsalProtocolRef: 'Guía Clínica de Síndrome Coronario Agudo — MINSAL El Salvador.',
          },
          {
            id: 'opt-1b',
            action: 'Indicar carga inmediata de cristaloides isotónicos (SSN 0.9% 500 ml en 15 min), suspender vasodilatadores y registrar de urgencia derivaciones derechas (V3R, V4R) y posteriores.',
            isOptimal: true,
            consequenceText: 'Excelente juicio clínico. La expansión con volumen optimizó la precarga del ventrículo derecho. La presión arterial mejoró a 100/65 mmHg. Las derivaciones derechas confirmaron elevación de 2 mm en V4R (Infarto de VD confirmado).',
            vitalImpact: { bp: '100/65', hr: 62, spo2: 95, glasgow: 15 },
            learningPoint: 'La tríada clásica de infarto de ventrículo derecho: hipotensión arterial, campos pulmonares limpios e ingurgitación yugular. El pilar de estabilización es la carga de volumen isotónico.',
            minsalProtocolRef: 'Protocolos de Cuidados Críticos Cardiovasculares — Hospital Nacional Rosales.',
          },
          {
            id: 'opt-1c',
            action: 'Iniciar Furosemida 40 mg IV en bolo rápido para prevenir edema agudo de pulmón y administrar Morfina 4 mg IV.',
            isOptimal: false,
            consequenceText: 'Iatrogenia farmacológica: No existía congestión pulmonar. La venodilatación de la morfina y la depleción de volumen por furosemida redujeron el gasto cardíaco a niveles críticos de choque cardiogénico.',
            vitalImpact: { bp: '65/40', hr: 50, glasgow: 12 },
            learningPoint: 'En IAM de ventrículo derecho los diuréticos profundizan el choque hemodinámico. Solo deben emplearse si existe edema pulmonar florido por fallo izquierdo concurrente.',
            minsalProtocolRef: 'Guías de Manejo de Insuficiencia Cardíaca y Shock — ISSS El Salvador.',
          },
        ],
      },
      {
        id: 'iam-stage-2',
        stageNumber: 2,
        stageTitle: 'Etapa 2: Estrategia de Reperfusión y Terapia Antiplaquetaria',
        narrative: 'Te encuentras en el Hospital Nacional de Santa Ana. El paciente lleva 2 horas y media de evolución del dolor. El laboratorio de hemodinamia más cercano (San Salvador) reporta un tiempo de traslado estimado y apertura de sala puerta-balón superior a 150 minutos. No existen contraindicaciones para trombólisis.',
        vitals: { bp: '102/66', hr: 64, rr: 20, spo2: 96, temp: 36.5, glasgow: 15 },
        clinicalDataSnippet: 'Tiempo puerta-aguja disponible: 25 minutos. Contraindicaciones de fibrinólisis evaluadas: Negativas.',
        options: [
          {
            id: 'opt-2a',
            action: 'Administrar Ácido Acetilsalicílico 300 mg VO masticada + Clopidogrel 300 mg VO + bolo IV de Tenecteplase ajustado por peso, y preparar traslado farmaco-invasivo.',
            isOptimal: true,
            consequenceText: 'Tratamiento de reperfusión de elección. Con un retraso previsto >120 min para angioplastia primaria, la fibrinólisis antes de los 30 min (tiempo puerta-aguja <30 min) salva masa miocárdica crítica. A los 60 min se constata resolución del ST >50%.',
            vitalImpact: { bp: '115/72', hr: 68, spo2: 98, glasgow: 15 },
            learningPoint: 'Estrategia Fármaco-Invasiva MINSAL: Si el tiempo previsto para ICP primaria excede 120 minutos, la trombólisis inmediata con agente fibrino-específico más doble antiagregación es la indicación de oro, seguida de angiografía coronaria en 2 a 24 horas.',
            minsalProtocolRef: 'Red Nacional de Infarto Agudo al Miocardio — MINSAL.',
          },
          {
            id: 'opt-2b',
            action: 'Descartar trombólisis por riesgo hemorrágico y trasladar en ambulancia común a San Salvador para que allá decidan angioplastia.',
            isOptimal: false,
            consequenceText: 'Pérdida irrecuperable de miocardio ("El tiempo es músculo"). El paciente arribó 3 horas después con choque cardiogénico establecido y necrosis transmural extensa.',
            vitalImpact: { bp: '75/45', hr: 98, spo2: 89, glasgow: 13 },
            learningPoint: 'Retrasar la reperfusión sin justificación en un IAMCEST sin contraindicaciones aumenta drásticamente la mortalidad hospitalaria del 4% a más del 18%.',
            minsalProtocolRef: 'Código Infarto Nacional El Salvador.',
          },
        ],
      },
      {
        id: 'iam-stage-3',
        stageNumber: 3,
        stageTitle: 'Etapa 3: Complicación Eléctrica Aguda en Unidad de Cuidados Intermedios',
        narrative: '45 minutos después del fibrinolítico, el monitor de signos vitales emite alarma: el paciente pierde el conocimiento súbitamente, no responde al llamado ni respira, y el monitor muestra trazado caótico y desorganizado sin complejos QRS identificables (Fibrilación Ventricular).',
        vitals: { bp: '0/0', hr: 0, rr: 0, spo2: 60, temp: 36.5, glasgow: 3 },
        clinicalDataSnippet: 'Trazado Monitor: Ritmo desfibrilable caótico de alta frecuencia y amplitud variable (FV gruesa). Sin pulso carotídeo palpable.',
        options: [
          {
            id: 'opt-3a',
            action: 'Iniciar RCP de alta calidad de inmediato, cargar desfibrilador bifásico a 200 Joules y aplicar descarga no sincronizada inmediata seguida de 2 minutos ininterrumpidos de RCP.',
            isOptimal: true,
            consequenceText: '¡Reanimación exitosa! Retorno a la Circulación Espontánea (RCE) tras la primera descarga y compresiones. El ritmo sinusal se restablece con FC de 78 lpm y PA 110/70 mmHg.',
            vitalImpact: { bp: '110/70', hr: 78, rr: 16, spo2: 97, glasgow: 14 },
            learningPoint: 'En paro cardíaco por FV/TV sin pulso: Desfibrilación precoz no sincronizada + RCP continua sin pausas para chequear pulso inmediatamente post-descarga es el único tratamiento que revierte la parada.',
            minsalProtocolRef: 'Soporte Vital Cardiovascular Avanzado (ACLS) — Hospital Rosales.',
          },
          {
            id: 'opt-3b',
            action: 'Sincronizar el desfibrilador (modo cardioversión) a 50 Joules y administrar primero 1 mg de adrenalina IV antes de cualquier descarga.',
            isOptimal: false,
            consequenceText: 'Error fatal de concepto: En Fibrilación Ventricular NO se puede sincronizar porque no existen ondas R para el disparo del sincronizador (el desfibrilador nunca descargó). Retrasar la desfibrilación por buscar accesos farmacológicos conduce a asistolia irreversible.',
            vitalImpact: { bp: '0/0', hr: 0, rr: 0, spo2: 40, glasgow: 3 },
            learningPoint: 'Nunca sincronizar en FV. La sincronización se reserva para taquiarritmias con pulso (TPSV, Flutter, FA rápida, TV con pulso). En FV se descarga en MODO NO SINCRONIZADO.',
            minsalProtocolRef: 'Guía de Manejo de Arritmias Mortales — MINSAL.',
          },
        ],
      },
    ],
    debriefSummary: {
      coreDiagnosis: 'IAM con Elevación del ST de Cara Inferior con Extensión a Ventrículo Derecho complicado con Fibrilación Ventricular Primaria.',
      goldStandardProtocol: 'Reanimación volumétrica inicial con SSN 0.9% (evitando nitratos), estrategia fármaco-invasiva con fibrinolisis antes de 30 min por lejanía de sala hemodinámica, y desfibrilación precoz no sincronizada ante arritmia maligna.',
      officialMinsalNorm: 'Guía Clínica de Síndrome Coronario Agudo del MINSAL y Protocolo Código Rosales.',
    },
  },

  // =========================================================================
  // CASO 2: PEDIATRÍA — CHOQUE SÉPTICO PEDIÁTRICO (HOSPITAL BLOOM / PALS)
  // =========================================================================
  {
    id: 'branching-case-sepsis-pediatrica',
    title: 'Sepsis Pediátrica Refractaria y Choque Séptico (Protocolo PALS / Hospital Benjamín Bloom)',
    specialty: 'Pediatría',
    patientDescription: 'Lactante de 14 meses (peso estimado: 10 kg) llevado por sus padres con historia de 3 días de tos, rinorrea y fiebre de 39.4°C. Desde hace 6 horas se encuentra marcadamente somnoliento, quejumbroso y no acepta líquidos.',
    initialVitals: {
      bp: '62/34',
      hr: 188,
      rr: 64,
      spo2: 89,
      temp: 39.3,
      glasgow: 12,
    },
    stages: [
      {
        id: 'peds-stage-1',
        stageNumber: 1,
        stageTitle: 'Etapa 1: Reconocimiento Temprano del Choque Descompensado',
        narrative: 'A la exploración: Extremidades distales frías, moteadas y con cianosis ungueal. Pulsos periféricos (radiales y pedios) filiformes, apenas perceptibles; pulsos centrales (braquial y femoral) presentes pero débiles. Tiempo de llenado capilar prolongado (> 4 segundos). Tiraje intercostal y subcostal severo con aleteo nasal.',
        vitals: { bp: '62/34', hr: 188, rr: 64, spo2: 89, temp: 39.3, glasgow: 12 },
        clinicalDataSnippet: 'Presión Arterial Sistólica < 70 + (edad en años × 2) = 70 + 2 = 72 mmHg. PA actual: 62 mmHg -> Choque Séptico Hipotensivo (Descompensado).',
        options: [
          {
            id: 'opt-peds-1a',
            action: 'Colocar oxígeno por mascarilla con reservorio a 10 L/min, canalizar vía periférica de urgencia (o aguja intraósea en tibia proximal si >90 seg de fracaso venoso) e infundir bolo de cristaloides isotónicos (Lactato de Ringer o SSN 0.9%) a 20 ml/kg (200 ml) en 10 a 15 minutos.',
            isOptimal: true,
            consequenceText: 'Intervención de reanimación acorde a PALS: Tras el primer bolo de 20 ml/kg el llenado capilar disminuye a 3 segundos, la FC baja a 165 lpm y la presión arterial sube a 74/42 mmHg sin signos de sobrecarga hídrica.',
            vitalImpact: { bp: '74/42', hr: 165, rr: 52, spo2: 94, glasgow: 13 },
            learningPoint: 'En choque séptico pediátrico, la administración rápida de cristaloides isotónicos a 10-20 ml/kg con reevaluación clínica continua (crepitantes, hepatomegalia) es el primer paso vital para restaurar el volumen intravascular.',
            minsalProtocolRef: 'Guía de Manejo de Sepsis en Pediatría — Hospital Nacional de Niños Benjamín Bloom.',
          },
          {
            id: 'opt-peds-1b',
            action: 'Iniciar infusión de Dextrosa al 5% en agua destilada a ritmo de mantenimiento de Holliday-Segar (100 ml/kg/día) para evitar hipernatremia.',
            isOptimal: false,
            consequenceText: 'Iatrogenia por solución hipotónica: La dextrosa al 5% sin sodio se distribuye en el espacio intracelular sin expandir el volumen circulante efectivo y empeora la hipoperfusión tisular.',
            vitalImpact: { bp: '55/30', hr: 195, rr: 70, spo2: 85, glasgow: 9 },
            learningPoint: 'Nunca reanimar el choque con soluciones hipotónicas ni glucosadas puras. Solo deben utilizarse cristaloides isotónicos (Solución Salina Normal 0.9% o Hartmann/Lactato de Ringer).',
            minsalProtocolRef: 'Manual de Emergencias Pediátricas — MINSAL.',
          },
        ],
      },
      {
        id: 'peds-stage-2',
        stageNumber: 2,
        stageTitle: 'Etapa 2: Choque Refractario a Líquidos e Inicio de Inotrópico / Vasoactivo',
        narrative: 'Tras recibir 40 ml/kg acumulados de cristaloides en 30 minutos, la perfusión periférica continúa fría con llenado capilar en 4 segundos, PA 68/38 mmHg y oliguria manifiesta (<0.5 ml/kg/h). No hay estertores pulmonares ni hepatomegalia.',
        vitals: { bp: '68/38', hr: 172, rr: 54, spo2: 93, temp: 38.6, glasgow: 13 },
        clinicalDataSnippet: 'Definición de Choque Refractario a Fluidos: Persistencia de signos de hipoperfusión tras 40 a 60 ml/kg de cristaloides. Requiere soporte inotrópico/vasopresor inmediato.',
        options: [
          {
            id: 'opt-peds-2a',
            action: 'Iniciar infusión de Epinefrina en titulación baja-moderada (0.05 a 0.2 mcg/kg/min) por vía periférica/intraósea o acceso central para choque frío (bajo gasto y vasoconstricción periférica).',
            isOptimal: true,
            consequenceText: 'Respuesta hemodinámica favorable: El efecto inotrópico beta-1 y cronotrópico de la epinefrina incrementa el volumen latido cardíaco. La presión arterial sube a 86/52 mmHg y el llenado capilar se normaliza a <2 segundos.',
            vitalImpact: { bp: '86/52', hr: 140, rr: 40, spo2: 97, glasgow: 15 },
            learningPoint: 'Las guías del Surviving Sepsis Campaign Pediátrico recomiendan Epinefrina como fármaco vasoactivo de primera línea en choque frío pediátrico, superando a la dopamina por mayor rapidez y menor mortalidad.',
            minsalProtocolRef: 'Protocolos de Cuidados Intensivos Pediátricos (UCIP) — Hospital Benjamín Bloom.',
          },
          {
            id: 'opt-peds-2b',
            action: 'Continuar administrando bolos de cristaloides hasta completar 120 ml/kg antes de considerar cualquier medicamento vasoactivo.',
            isOptimal: false,
            consequenceText: 'Sobrecarga de volumen catastrófica: El paciente desarrolló estertores húmedos bilaterales, ingurgitación hepática a 4 cm bajo reborde costal y edema agudo pulmonar por sobrehidratación en un miocardio deprimido por la sepsis.',
            vitalImpact: { bp: '64/35', hr: 185, rr: 75, spo2: 80, glasgow: 10 },
            learningPoint: 'En niños, administrar más de 40-60 ml/kg sin iniciar vasoactivos cuando no hay respuesta clínica conduce a falla respiratoria y empeora el pronóstico de sobrevida.',
            minsalProtocolRef: 'Guía de Práctica Clínica de Sepsis — Hospital Bloom.',
          },
        ],
      },
      {
        id: 'peds-stage-3',
        stageNumber: 3,
        stageTitle: 'Etapa 3: Cobertura Antimicrobiana de la "Hora de Oro" y Toma de Cultivos',
        narrative: 'El paciente se encuentra hemodinámicamente estabilizado con la infusión de epinefrina. La radiografía de tórax portátil revela consolidación lobar derecha extensa con broncograma aéreo (Neumonía bacteriana adquirida en la comunidad complicada). Se toman hemocultivos inmediatos.',
        vitals: { bp: '88/54', hr: 138, rr: 38, spo2: 98, temp: 38.2, glasgow: 15 },
        clinicalDataSnippet: 'Regla de Oro en Sepsis: Administración de antibiótico de amplio espectro dentro de los primeros 60 minutos del diagnóstico inicial.',
        options: [
          {
            id: 'opt-peds-3a',
            action: 'Administrar Ceftriaxona 100 mg/kg/día IV en combinación con Vancomicina 60 mg/kg/día IV (para cobertura de Streptococcus pneumoniae multirresistente y Staphylococcus aureus productor de leucocidina Panton-Valentine).',
            isOptimal: true,
            consequenceText: 'Terapia antimicrobiana óptima de la hora de oro: Cobertura empírica adecuada según los perfiles de resistencia bacteriana de la red hospitalaria pediátrica nacional de El Salvador.',
            vitalImpact: { bp: '92/56', hr: 125, rr: 32, spo2: 99, temp: 37.5, glasgow: 15 },
            learningPoint: 'En choque séptico de foco pulmonar comunitario grave en lactantes, la combinación de una cefalosporina de 3ª generación con vancomicina asegura esterilización bacteriana rápida frente a neumococos con sensibilidad intermedia a penicilina y SAMR comunitario.',
            minsalProtocolRef: 'Comité de Infecciones Nosocomiales y Farmacoterapia — Hospital Bloom.',
          },
          {
            id: 'opt-peds-3b',
            action: 'Diferir la administración de antibióticos hasta esperar el resultado del antibiograma de los hemocultivos en 48 a 72 horas para no seleccionar cepas resistentes.',
            isOptimal: false,
            consequenceText: 'Falta crítica: Cada hora de retraso en la administración del antibiótico adecuado en choque séptico incrementa la mortalidad en un 7.6%. El paciente recayó en falla multiorgánica bacterémica.',
            vitalImpact: { bp: '60/32', hr: 180, rr: 68, spo2: 86, glasgow: 10 },
            learningPoint: 'En sospecha fundada de sepsis o choque séptico, los antibióticos empíricos se administran de INMEDIATO tras obtener los cultivos (o sin retrasarlos si los accesos son difíciles). El ajuste guiado por antibiograma se realiza a posteriori (desescalamiento).',
            minsalProtocolRef: 'Código Sepsis Nacional — MINSAL El Salvador.',
          },
        ],
      },
    ],
    debriefSummary: {
      coreDiagnosis: 'Neumonía Grave Complicada con Choque Séptico Pediátrico Descompensado (Choque Frío Refractario a Líquidos).',
      goldStandardProtocol: 'Reanimación volumétrica rápida con cristaloides a 20 ml/kg, soporte inotrópico precoz con infusión continua de Epinefrina, y administración de antibioticoterapia de amplio espectro en la primera hora ("Golden Hour").',
      officialMinsalNorm: 'Guía Clínica de Atención Integral de las Infecciones Respiratorias Agudas y Choque Séptico — Hospital Benjamín Bloom y MINSAL.',
    },
  },

  // =========================================================================
  // CASO 3: GINECO-OBSTETRICIA — CÓDIGO NARANJA: PREECLAMPSIA SEVERA
  // =========================================================================
  {
    id: 'branching-case-preeclampsia-hellp',
    title: 'Código Naranja — Preeclampsia Severa y Eclampsia Inminente',
    specialty: 'Gineco-Obstetricia',
    patientDescription: 'Primigesta de 33 semanas acude a Unidad de Emergencia Obstétrica por cefalea holocraneana pulsátil severa e incapacitante, fosfenos bilaterales, tinnitus y dolor epigástrico intenso en barra ("signo de Chaussier").',
    initialVitals: {
      bp: '178/112',
      hr: 96,
      rr: 22,
      spo2: 95,
      temp: 36.8,
      glasgow: 15,
    },
    stages: [
      {
        id: 'preeclampsia-stage-1',
        stageNumber: 1,
        stageTitle: 'Etapa 1: Activación de Código Naranja y Neuroprotección con Esquema de Zuspan',
        narrative: 'A la palpación abdominal el fondo uterino mide 30 cm, feto único cefálico con FCF de 142 lpm. Los reflejos patelares están hiperactivos (+4/4) con clonus agotable de 3 sacudidas. La proteinuria en tira reactiva marca +++ (300 mg/dl). La paciente refiere que "las luces le encandilan la vista". Se diagnostica preeclampsia con criterios de severidad e inminencia eclámptica.',
        vitals: { bp: '178/112', hr: 96, rr: 22, spo2: 95, temp: 36.8, glasgow: 15 },
        clinicalDataSnippet: 'Pródromos Eclámpticos presentes: Cefalea intratable + Alteraciones visuales + Epigastralgia + Hiperreflexia + Clonus. PA: 178/112 mmHg.',
        options: [
          {
            id: 'opt-pe-1a',
            action: 'Activar Código Naranja Obstétrico e iniciar de inmediato Sulfato de Magnesio al 20% bajo Esquema de Zuspan intravenoso (dosis de carga: 4 g IV diluidos en 100 mL de SSN 0.9% o Dextrosa al 5% a pasar en 15-20 minutos, seguido de infusión continua de mantenimiento a 1-2 g/hora IV).',
            isOptimal: true,
            consequenceText: 'Conducta gold standard: El sulfato de magnesio estabiliza la membrana neuronal y produce vasodilatación cerebral, abortando el riesgo inminente de crisis eclámptica materna sin provocar sedación profunda.',
            vitalImpact: { bp: '170/108', hr: 92, spo2: 96, glasgow: 15 },
            learningPoint: 'El Sulfato de Magnesio al 20% en esquema de Zuspan (4 g IV de carga en 15-20 min seguido de 1-2 g/h) es el anticonvulsivante de elección incuestionable para la prevención y tratamiento de la eclampsia según el Magpie Trial y los protocolos del MINSAL.',
            minsalProtocolRef: 'Guía Clínica de Manejo de Trastornos Hipertensivos del Embarazo y Código Naranja — MINSAL El Salvador.',
          },
          {
            id: 'opt-pe-1b',
            action: 'Administrar Diazepam 10 mg IV en bolo lento como sedante y anticonvulsivo, indicando reposo en habitación oscura.',
            isOptimal: false,
            consequenceText: 'Falla en la prevención: El diazepam produce depresión respiratoria neonatal y sedación materna sin reducir eficazmente el umbral epileptógeno de la microangiopatía cerebral de la preeclampsia. La paciente convulsionó 20 minutos después.',
            vitalImpact: { bp: '190/120', hr: 110, spo2: 88, glasgow: 10 },
            learningPoint: 'Las benzodiacepinas están proscritas como profilaxis primaria en preeclampsia severa. Su uso se limita a crisis convulsivas que no ceden tras dosis repetidas de sulfato de magnesio.',
            minsalProtocolRef: 'Normativa de Emergencias Obstétricas — Hospital Nacional de Maternidad.',
          },
        ],
      },
      {
        id: 'preeclampsia-stage-2',
        stageNumber: 2,
        stageTitle: 'Etapa 2: Manejo de Crisis Hipertensiva Aguda y Vigilancia de Toxicidad por Magnesio',
        narrative: 'A los 15 minutos de iniciado el Sulfato de Magnesio, la PA se mantiene en 175/110 mmHg. Con este nivel tensional materno existe un riesgo inminente de hemorragia intracraneal y desprendimiento prematuro de placenta normoinserta (DPPNI). Es imperativo iniciar terapia antihipertensiva endovenosa y establecer la vigilancia clínica estricta de toxicidad por hipermagnesemia.',
        vitals: { bp: '175/110', hr: 94, rr: 20, spo2: 96, temp: 36.8, glasgow: 15 },
        clinicalDataSnippet: 'Metas tensionales seguras: Reducir PAS a 140-150 mmHg y PAD a 90-100 mmHg. Vigilancia obligatoria de toxicidad por magnesio: reflejos rotulianos presentes, FR >= 12 rpm y diuresis horaria > 30 mL/h con sonda Foley a permanencia. Antídoto ante toxicidad: Gluconato de Calcio al 10% (1 g IV lento en 3-5 min).',
        options: [
          {
            id: 'opt-pe-2a',
            action: 'Indicar Labetalol 20 mg IV en 2 minutos (o Hidralazina 5 mg IV lento), monitorizando estrictamente: presencia de reflejos rotulianos, frecuencia respiratoria >= 12 rpm y diuresis > 30 mL/h mediante sonda Foley a permanencia; mantener en cabecera Gluconato de Calcio al 10% (1 g IV lento en 3-5 min) como antídoto inmediato si aparecen signos de toxicidad.',
            isOptimal: true,
            consequenceText: 'Evolución hemodinámica controlada: A los 20 minutos la PA desciende suavemente a 145/95 mmHg dentro de la meta terapéutica. Los reflejos rotulianos se mantienen presentes (+2/4), la FR es de 18 rpm y la diuresis horaria marca 45 mL/h, preservando la perfusión útero-placentaria sin alteraciones en el trazado cardiotocográfico.',
            vitalImpact: { bp: '145/95', hr: 88, spo2: 97, glasgow: 15 },
            learningPoint: 'Los antihipertensivos de primera línea en crisis hipertensiva obstétrica son Labetalol 20 mg IV o Hidralazina 5 mg IV (meta PAS 140-150 mmHg, PAD 90-100 mmHg). La vigilancia de la infusión de sulfato de magnesio exige la tríada clínica: ROT presentes, FR >= 12 rpm y diuresis > 30 mL/h (el magnesio es de excreción renal exclusiva). Ante toxicidad o hiporreflexia grave con bradipnea, el antídoto específico es el Gluconato de Calcio al 10% 1 g IV en 3-5 minutos.',
            minsalProtocolRef: 'Algoritmo de Crisis Hipertensiva Obstétrica y Protocolo Código Naranja — MINSAL El Salvador.',
          },
          {
            id: 'opt-pe-2b',
            action: 'Indicar Enalaprilat 1.25 mg IV o Losartán 50 mg vía oral para controlar la activación del sistema renina-angiotensina, y retirar la sonda Foley para confort de la paciente.',
            isOptimal: false,
            consequenceText: 'Contraindicación farmacológica absoluta e iatrogenia: Los IECA y ARA-II causan agenesia renal fetal, oligohidramnios severo, hipoplasia pulmonar y muerte intrauterina. Además, omitir el monitoreo urinario con sonda Foley impide detectar el fallo renal que conduce a acumulación tóxica mortal de sulfato de magnesio.',
            vitalImpact: { bp: '150/100', hr: 90, spo2: 96, glasgow: 15 },
            learningPoint: 'Los inhibidores del eje renina-angiotensina-aldosterona (Enalapril, Captopril, Losartán, Valsartán) están categóricamente CONTRAINDICADOS en el embarazo. La sonda Foley con bolsa colectora horaria es obligatoria durante la infusión de sulfato de magnesio para constatar diuresis > 30 mL/h.',
            minsalProtocolRef: 'Farmacovigilancia y Teratogénesis — Consejo Superior de Salud Pública (CSSP).',
          },
        ],
      },
      {
        id: 'preeclampsia-stage-3',
        stageNumber: 3,
        stageTitle: 'Etapa 3: Hallazgos de Laboratorio, Estabilización e Interrupción del Embarazo',
        narrative: 'Los exámenes de laboratorio urgentes reportan: Plaquetas: 68,000/mm³, TGO/AST: 210 U/L (normal <35), TGP/ALT: 195 U/L, LDH: 920 U/L, Frotis de sangre periférica con esquistocitos (++), Creatinina: 1.3 mg/dl. El diagnóstico concluye en Síndrome HELLP Completo. La paciente se encuentra hemodinámicamente estable tras el Labetalol y Zuspan.',
        vitals: { bp: '142/92', hr: 86, rr: 19, spo2: 97, temp: 36.7, glasgow: 15 },
        clinicalDataSnippet: 'Tríada HELLP: Hemólisis microangiopática (esquistocitos, LDH >600) + Enzimas hepáticas elevadas (TGO/TGP >2x) + Plaquetopenia (<100,000/mm³). Edad gestacional: 33 semanas.',
        options: [
          {
            id: 'opt-pe-3a',
            action: 'Indicar interrupción inmediata del embarazo mediante cesárea de urgencia tras estabilización materna, manteniendo la infusión continua de sulfato de magnesio durante el acto quirúrgico y por 24 horas posparto, con sonda vesical Foley para vigilancia de diuresis horaria (>30 mL/h) y reserva de hemoderivados.',
            isOptimal: true,
            consequenceText: 'Manejo definitivo impecable: La interrupción del embarazo es la única cura causal de la preeclampsia severa y Síndrome HELLP. El recién nacido se extrae vivo y pasa a UCIN, mientras la madre ingresa a UCI Obstétrica con resolución progresiva de la trombocitopenia y enzimas hepáticas en 72 horas.',
            vitalImpact: { bp: '135/85', hr: 82, spo2: 98, glasgow: 15 },
            learningPoint: 'En preeclampsia severa con Síndrome HELLP o inminencia eclámptica, el tratamiento etiológico definitivo es la interrupción del embarazo (cesárea de urgencia o parto expedito tras estabilización). El sulfato de magnesio debe mantenerse durante el peroperatorio y hasta 24 horas posparto con vigilancia horaria de diuresis, reflejos y FR.',
            minsalProtocolRef: 'Protocolos de Cuidados Críticos Obstétricos — Hospital Nacional de la Mujer y MINSAL.',
          },
          {
            id: 'opt-pe-3b',
            action: 'Manejo conservador expectante: postergar el desembarazo por 2 semanas más para que el feto alcance el término (37 semanas), suspendiendo el sulfato de magnesio y administrando esteroides a dosis altas.',
            isOptimal: false,
            consequenceText: 'Catástrofe clínica: El síndrome HELLP continuó progresando; la paciente desarrolló rotura hepática subcapsular, Coagulación Intravascular Diseminada (CID) fulminante y óbito fetal intrauterino.',
            vitalImpact: { bp: '80/40', hr: 135, spo2: 90, glasgow: 11 },
            learningPoint: 'Nunca realizar manejo expectante en presencia de Síndrome HELLP completo o preeclampsia con disfunción orgánica severa. La mortalidad materna sin desembarazo oportuno supera el 30%.',
            minsalProtocolRef: 'Comité de Auditoría de Muerte Materna — MINSAL.',
          },
        ],
      },
    ],
    debriefSummary: {
      coreDiagnosis: 'Código Naranja — Preeclampsia con Criterios de Severidad e Inminencia Eclámptica complicada con Síndrome HELLP Completo.',
      goldStandardProtocol: 'Activación de Código Naranja, esquema de Zuspan intravenoso con sulfato de magnesio al 20% (4g carga en 15-20 min, infusión 1-2 g/h), monitoreo de reflejos rotulianos, FR >= 12 rpm y diuresis > 30 mL/h con sonda Foley, disponibilidad de antídoto Gluconato de Calcio al 10% (1g IV lento en 3-5 min), control tensional con Labetalol 20mg IV o Hidralazina 5mg IV (meta PAS 140-150 / PAD 90-100 mmHg), y cesárea de urgencia.',
      officialMinsalNorm: 'Norma Técnica de Atención del Parto y sus Complicaciones y Guía de Manejo del Código Naranja — MINSAL El Salvador.',
    },
  },

  // =========================================================================
  // CASO 4: CIRUGÍA GENERAL Y TRAUMA — POLITRAUMATIZADO Y CHOQUE GRADO IV
  // =========================================================================
  {
    id: 'branching-case-trauma-choque-iv',
    title: 'Politraumatizado con Choque Hemorrágico Grado IV (ATLS 10.ª Edición)',
    specialty: 'Cirugía',
    patientDescription: 'Masculino de 28 años, motociclista embestido por vehículo pesado a alta velocidad en carretera a Santa Ana. Es ingresado al Shock Room con sangrado exsanguinante masivo, palidez cérea universal, diaforesis fría y alteración severa del estado de consciencia.',
    initialVitals: {
      bp: '65/35',
      hr: 145,
      rr: 34,
      spo2: 88,
      temp: 35.1,
      glasgow: 8,
    },
    stages: [
      {
        id: 'trauma-stage-1',
        stageNumber: 1,
        stageTitle: 'Etapa 1: Triaje y Reanimación en Shock Room: PTM 1:1:1, Ácido Tranexámico e Hipotensión Permisiva',
        narrative: 'En el Shock Room, la evaluación primaria ATLS revela vía aérea en riesgo (Glasgow 8), taquipnea a 34 rpm con hipoxemia (SpO2 88%), pulsos periféricos impalpables y femorales filiformes a 145 lpm, PA 65/35 mmHg (pérdida hemática estimada >40% del volumen intravascular, Choque Hemorrágico Grado IV). El ultrasonido eFAST muestra abundante líquido libre en espacio hepatorrenal (Morison) y pelvis, con inestabilidad en libro abierto del anillo pélvico.',
        vitals: { bp: '65/35', hr: 145, rr: 34, spo2: 88, temp: 35.1, glasgow: 8 },
        clinicalDataSnippet: 'ATLS 10.ª Edición: Choque Hemorrágico Clase IV (pérdida >2,000 mL de sangre, PA <70 mmHg, FC >140 lpm, Glasgow deprimido). eFAST positivo en cuadrante superior derecho y pelvis.',
        options: [
          {
            id: 'opt-trauma-1a',
            action: 'Activar de inmediato el Protocolo de Transfusión Masiva (PTM / MTP) en razón balanceada 1:1:1 (Concentrado de Glóbulos Rojos : Plasma Fresco Congelado : Plaquetas), administrar Ácido Tranexámico 1 g IV en bolo en 10 minutos (en las primeras 3 horas del trauma, seguido de infusión de 1 g en 8 horas), aplicar cincha pélvica, e implementar estrategia de Reanimación Hipotensiva Permisiva (meta PAS 80-90 mmHg) restringiendo cristaloides para prevenir coagulopatía dilucional e hipotermia.',
            isOptimal: true,
            consequenceText: 'Reanimación hemostática de control de daños ejemplar: La restitución balanceada 1:1:1 y el Ácido Tranexámico previenen la coagulopatía traumática precoz y la hiperfibrinolisis. La presión sistólica se estabiliza entre 85-90 mmHg sin desprendimiento de coágulos primarios, preparando al paciente para quirófano inmediato.',
            vitalImpact: { bp: '85/55', hr: 120, rr: 24, spo2: 94, glasgow: 9 },
            learningPoint: 'ATLS 10.ª Edición y ensayo CRASH-2: En choque hemorrágico grado IV, la administración de Ácido Tranexámico 1 g IV dentro de las primeras 3 horas reduce significativamente la mortalidad por sangrado. La reanimación con PTM en relación 1:1:1 (CGR:PFC:Plaquetas) y la hipotensión permisiva (meta PAS 80-90 mmHg) evitan la "tríada mortal" inducida por sobrecarga de cristaloides.',
            minsalProtocolRef: 'Manual ATLS 10.ª Edición (American College of Surgeons) y Protocolo de Choque Hemorrágico — Hospital Nacional Rosales.',
          },
          {
            id: 'opt-trauma-1b',
            action: 'Infundir 3,000 mL de Solución Salina Normal al 0.9% a chorro rápido por dos vías periféricas para elevar la presión sistólica por encima de 120 mmHg antes de solicitar sangre o hemoderivados.',
            isOptimal: false,
            consequenceText: 'Efecto devastador de la sobrecarga de cristaloides: La infusión rápida de suero frío a presión causó disrupción mecánica de los coágulos incipientes ("pop the clot"), agravó la hipotermia a 33.8 °C y provocó coagulopatía dilucional letal con sangrado exsanguinante acelerado.',
            vitalImpact: { bp: '50/25', hr: 155, rr: 38, spo2: 80, temp: 33.8, glasgow: 5 },
            learningPoint: 'La administración masiva de cristaloides no calentados está expresamente contraindicada en el choque hemorrágico severo: lava los factores de coagulación, rompe los tapones hemostáticos y acelera la muerte por exanguinación.',
            minsalProtocolRef: 'Guías de Manejo del Politraumatizado — MINSAL / ISSS.',
          },
        ],
      },
      {
        id: 'trauma-stage-2',
        stageNumber: 2,
        stageTitle: 'Etapa 2: Laparotomía de Control de Daños (Damage Control Surgery): Tríada de la Muerte y Empaquetamiento',
        narrative: 'El paciente es trasladado de inmediato a quirófano ante hemoperitoneo masivo y choque refractario. Al realizar la laparotomía exploradora xifopúbica se evacuan 2,500 mL de sangre fresca y coágulos; se identifica estallido hepático grado IV en segmentos VI y VII con sangrado torrencial activo y hematoma retroperitoneal expansivo en zona I. El anestesiólogo reporta temperatura central de 34.2 °C (hipotermia), gasometría con pH 7.12 y exceso de base -14 mEq/L (acidosis metabólica severa), y sangrado en sábana microvascular no mecánico por coagulopatía (establecimiento de la Tríada de la Muerte).',
        vitals: { bp: '75/40', hr: 135, rr: 24, spo2: 92, temp: 34.2, glasgow: 6 },
        clinicalDataSnippet: 'Tríada de la Muerte establecida: Hipotermia (<35 °C) + Acidosis (pH <7.20) + Coagulopatía de consumo. Laparotomía de Control de Daños indicada; meta quirúrgica <60-90 minutos.',
        options: [
          {
            id: 'opt-trauma-2a',
            action: 'Ejecutar Laparotomía Abreviada de Control de Daños: maniobra de Pringle transitoria, empaquetamiento abdominal / packing perihepático compresivo en 4 cuadrantes con compresas estériles, hemostasia temporal rápida, control de contaminación sin resecciones prolongadas y cierre temporal de la cavidad abdominal sin tensión con bolsa de Bogotá o sistema de vacío (VAC), trasladando de inmediato a UCI Quirúrgica para recalentamiento activo y corrección metabólica.',
            isOptimal: true,
            consequenceText: 'Cirugía de control de daños impecable: El empaquetamiento perihepático logró hemostasia compresiva eficaz en 45 minutos de tiempo quirúrgico. El abdomen abierto contenido con bolsa de Bogotá previene el síndrome compartimental abdominal y permite el traslado urgente a la UCI-Q.',
            vitalImpact: { bp: '90/60', hr: 110, spo2: 96, temp: 35.0, glasgow: 6 },
            learningPoint: 'Cuando la Tríada de la Muerte (hipotermia, acidosis, coagulopatía) se hace presente, la cirugía definitiva prolongada es sinónimo de muerte en la mesa de operaciones. La Cirugía de Control de Daños (Etapa I: hemostasia abreviada, empaquetamiento o packing perihepático, control de fugas y abdomen abierto contenido con bolsa de Bogotá o VAC en <60-90 min) salva la vida del paciente al diferir las reparaciones anatómicas para cuando se haya restaurado la fisiología.',
            minsalProtocolRef: 'Manual de Cirugía de Trauma y Control de Daños — Hospital Nacional Rosales.',
          },
          {
            id: 'opt-trauma-2b',
            action: 'Proceder a realizar una hepatectomía derecha anatómica reglada compleja y reconstrucción definitiva por planos anatómicos cerrando la fascia abdominal a tensión, prolongando la cirugía por 4 horas.',
            isOptimal: false,
            consequenceText: 'Fallo fatal en la toma de decisiones: El paciente entró en hipotermia refractaria profunda (32.5 °C), acidosis extrema (pH 6.95) y coagulopatía incoagulable en sábana, sufriendo paro cardiorrespiratorio intraoperatorio por colapso metabólico.',
            vitalImpact: { bp: '0/0', hr: 0, rr: 0, spo2: 0, temp: 32.5, glasgow: 3 },
            learningPoint: 'Nunca intentar cirugías complejas de reconstrucción definitiva ni cierre fascial a tensión en un paciente con Tríada de la Muerte establecida. El cierre forzado causa Síndrome Compartimental Abdominal mortal.',
            minsalProtocolRef: 'Comité Quirúrgico de Trauma — Hospital Rosales.',
          },
        ],
      },
      {
        id: 'trauma-stage-3',
        stageNumber: 3,
        stageTitle: 'Etapa 3: Cuidados Intensivos Quirúrgicos y Reexploración Quirúrgica Programada ("Second-Look")',
        narrative: 'En la Unidad de Cuidados Intensivos Quirúrgicos (UCI-Q), a las 36 horas del ingreso, el paciente ha recibido recalentamiento activo alcanzando normotermia (36.8 °C), la infusión continuada del PTM 1:1:1 ha corregido el coagulograma (INR 1.15, plaquetas 120,000/mm³, fibrinógeno 220 mg/dL), y la acidosis se ha resuelto (pH 7.36, lactato 1.7 mmol/L). El abdomen se mantiene blando con el sistema de vacío permeable y gasto hemático escaso (<50 mL en 8 h). La presión de perfusión abdominal y la diuresis horaria están conservadas.',
        vitals: { bp: '118/72', hr: 78, rr: 16, spo2: 98, temp: 36.8, glasgow: 14 },
        clinicalDataSnippet: 'Ventana de oportunidad de Second-Look: Corrección completa de la Tríada de la Muerte entre las 24 y 48 horas post-empaquetamiento abdominal.',
        options: [
          {
            id: 'opt-trauma-3a',
            action: 'Proceder a la reexploración quirúrgica programada (Second-Look) a las 24-48 horas en quirófano: desempaquetamiento cuidadoso y humedecido de compresas perihepáticas, verificación minuciosa de hemostasia definitiva, lavado peritoneal exhaustivo y cierre diferido por planos de la pared abdominal sin tensión (o colocación de malla biológica/sistema VAC diferido si persiste edema visceral).',
            isOptimal: true,
            consequenceText: 'Culminación exitosa del protocolo de control de daños: El desempaquetamiento a las 36 horas revela hemostasia hepática completa sin resangrado activo. Se realiza cierre abdominal definitivo sin complicaciones y el paciente evoluciona satisfactoriamente hacia la extubación.',
            vitalImpact: { bp: '120/75', hr: 74, rr: 14, spo2: 99, temp: 36.9, glasgow: 15 },
            learningPoint: 'La Etapa III del control de daños es la reexploración quirúrgica programada (Second-Look) entre las 24 y 48 horas: retirar las compresas antes de 24h arriesga resangrado, mientras que dejarlas más de 72h incrementa exponencialmente el riesgo de sepsis intraabdominal y abscesos.',
            minsalProtocolRef: 'Norma Técnica de Cirugía de Control de Daños — Hospital Nacional Rosales y MINSAL.',
          },
          {
            id: 'opt-trauma-3b',
            action: 'Mantener las compresas empaquetadas en el abdomen durante 10 a 14 días sin reintervención para "garantizar que no haya ninguna recidiva hemorrágica".',
            isOptimal: false,
            consequenceText: 'Complicación séptica grave: Las compresas retenidas por más de 72 horas se convirtieron en nido de infección bacteriana masiva, provocando peritonitis terciaria, necrosis tisular perihepática y choque séptico refractario.',
            vitalImpact: { bp: '70/40', hr: 138, rr: 28, spo2: 91, temp: 39.4, glasgow: 11 },
            learningPoint: 'El empaquetamiento abdominal prolongado (>48-72 horas) está asociado a tasas de infección intraabdominal superiores al 60%, fístulas entéricas y falla multiorgánica tardía. El desempaquetamiento programado a las 24-48 horas es una regla obligatoria del ATLS.',
            minsalProtocolRef: 'Protocolos de Infecciones Quirúrgicas y Cuidados Críticos — MINSAL.',
          },
        ],
      },
    ],
    debriefSummary: {
      coreDiagnosis: 'Politraumatizado con Choque Hemorrágico Grado IV, Estallido Hepático Grado IV y Tríada de la Muerte (ATLS 10.ª Edición).',
      goldStandardProtocol: 'Reanimación con control de daños: activación del PTM 1:1:1 (CGR, PFC, plaquetas), Ácido Tranexámico 1g IV en <3 horas, reanimación hipotensiva permisiva (PAS 80-90 mmHg), laparotomía de control de daños con empaquetamiento (packing) abdominal perihepático en 4 cuadrantes, cierre temporal con bolsa de Bogotá / sistema de vacío VAC, estabilización de la tríada de la muerte en UCI Quirúrgica, y reexploración programada (Second-Look) a las 24-48 horas para desempaquetamiento y cierre definitivo.',
      officialMinsalNorm: 'Manual ATLS 10.ª Edición (American College of Surgeons) y Protocolo de Cirugía de Control de Daños — Hospital Nacional Rosales / MINSAL.',
    },
  },
];
