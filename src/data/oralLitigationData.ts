/**
 * BANCO DE CASOS Y OBJECIONES EN LITIGACIÓN ORAL PENAL
 * República de El Salvador — Código Procesal Penal (Arts. 209, 210, 211, 212 PrPn)
 * Sala de lo Penal de la Corte Suprema de Justicia (CSJ) y Tribunales de Sentencia
 */

export type ObjectionType =
  | 'SUGESTIVA'
  | 'CAPCIOSA'
  | 'IMPERTINENTE'
  | 'COMPUESTA'
  | 'CONCLUSIVA'
  | 'REPETITIVA'
  | 'ESPECULATIVA'
  | 'VALIDA';

export interface ObjectionDefinition {
  type: ObjectionType;
  label: string;
  legalBasis: string;
  description: string;
  whenAllowed: string;
}

export const OBJECTION_DEFINITIONS: Record<ObjectionType, ObjectionDefinition> = {
  SUGESTIVA: {
    type: 'SUGESTIVA',
    label: 'Pregunta Sugestiva',
    legalBasis: 'Art. 210 inc. 2 PrPn',
    description: 'Aquélla que encierra o sugiere en su propio enunciado la respuesta que se espera del declarante.',
    whenAllowed: 'Prohibida terminantemente en el INTERROGATORIO DIRECTO. Permitida por excepción en el CONTRAINTERROGATORIO y con testigos hostiles.',
  },
  CAPCIOSA: {
    type: 'CAPCIOSA',
    label: 'Pregunta Capciosa',
    legalBasis: 'Art. 210 inc. 2 PrPn',
    description: 'Aquélla formulada con artificio, engaño o trampa, tendiente a arrancar una afirmación no querida o inducir a error al testigo.',
    whenAllowed: 'PROHIBIDA ABSOLUTAMENTE tanto en interrogatorio directo como en contrainterrogatorio.',
  },
  IMPERTINENTE: {
    type: 'IMPERTINENTE',
    label: 'Pregunta Impertinente / Irrelevante',
    legalBasis: 'Art. 210 inc. 2 PrPn',
    description: 'Aquélla que carece de relación o trascendencia directa o indirecta con los hechos delimitados en el auto de apertura a juicio.',
    whenAllowed: 'Prohibida en toda fase del interrogatorio por atentar contra la economía procesal y desviar el debate.',
  },
  COMPUESTA: {
    type: 'COMPUESTA',
    label: 'Pregunta Compuesta',
    legalBasis: 'Art. 210 inc. 2 PrPn',
    description: 'Aquélla que contiene dos o más hechos o proposiciones fácticas distintas en un mismo enunciado.',
    whenAllowed: 'Prohibida. Obliga a dividir la pregunta para que el testigo conteste con claridad a cada hecho por separado.',
  },
  CONCLUSIVA: {
    type: 'CONCLUSIVA',
    label: 'Pregunta Conclusiva o de Opinión',
    legalBasis: 'Art. 209 PrPn',
    description: 'Exige que un testigo lego presencial emita opiniones técnico-científicas o juicios valorativos reservados a peritos o al juez.',
    whenAllowed: 'Prohibida a testigos comunes; únicamente los peritos acreditados pueden verter conclusiones científicas u opiniones técnicas.',
  },
  REPETITIVA: {
    type: 'REPETITIVA',
    label: 'Pregunta Repetitiva / Ya Contestada',
    legalBasis: 'Art. 210 inc. 2 PrPn',
    description: 'Vuelve a inquirir sobre un hecho que el testigo ya contestó con suficiente claridad en la misma audiencia con el fin de hostigar.',
    whenAllowed: 'Prohibida si ya fue respondida con claridad. Permitida solo si busca evidenciar contradicción en contrainterrogatorio.',
  },
  ESPECULATIVA: {
    type: 'ESPECULATIVA',
    label: 'Pregunta Especulativa o Hipotética',
    legalBasis: 'Art. 209 PrPn',
    description: 'Pide al declarante común que imagine o suponga hechos que nunca presenció ("¿Qué hubiera pasado si...?").',
    whenAllowed: 'Prohibida para testigos presenciales, quienes declaran únicamente sobre lo que percibieron por sus propios sentidos.',
  },
  VALIDA: {
    type: 'VALIDA',
    label: 'Pregunta Válida / No Objetable',
    legalBasis: 'Arts. 209 y 210 PrPn',
    description: 'Pregunta formulada en debida forma procesal (abierta en directo, o sugestiva permitida en contraexamen).',
    whenAllowed: 'Totalmente procedente. Si se objeta indebidamente, el Juez resolverá "No ha lugar".',
  },
};

export interface CourtroomDrillItem {
  id: string;
  caseTitle: string;
  tribunal: string;
  phase: 'Interrogatorio Directo' | 'Contrainterrogatorio' | 'Re-directo';
  interrogator: 'Fiscal del Caso (FGR)' | 'Defensor Particular' | 'Querellante Adhesivo';
  witnessRole: 'Víctima protegida' | 'Agente captor PNC' | 'Perito Balístico Forense' | 'Testigo presencial presencial lego' | 'Perito Médico Forense IML';
  contextNarrative: string;
  questionUttered: string;
  correctObjection: ObjectionType;
  judgeRuling: 'HA LUGAR' | 'NO HA LUGAR';
  judicialRationale: string;
  salvadoranJurisprudence: string;
}

export const COURTROOM_DRILLS: CourtroomDrillItem[] = [
  // 1. Sugestiva en Directo
  {
    id: 'drill-001',
    caseTitle: 'Juicio por Homicidio Agravado Tentado',
    tribunal: 'Tribunal Primero de Sentencia de San Salvador',
    phase: 'Interrogatorio Directo',
    interrogator: 'Fiscal del Caso (FGR)',
    witnessRole: 'Testigo presencial presencial lego',
    contextNarrative: 'La Fiscalía interroga a su propio testigo de cargo sobre lo ocurrido la noche de los hechos en la Colonia Miramonte.',
    questionUttered: '¿Es verdad que usted vio al acusado disparar con una pistola calibre 9 milímetros directamente hacia el pecho de la víctima?',
    correctObjection: 'SUGESTIVA',
    judgeRuling: 'HA LUGAR',
    judicialRationale: 'La pregunta sugiere e induce la respuesta afirmativa. En el interrogatorio directo rige el principio de no sugestividad; el testigo de la parte debe narrar espontáneamente los hechos a partir de preguntas abiertas (Art. 210 inc. 2 PrPn).',
    salvadoranJurisprudence: 'Sentencia de Casación Penal Ref. 412C2018 (Sala de lo Penal CSJ): "La formulación sugestiva en el directo contamina la fuente testimonial sustituyendo el relato del deponente por la aseveración del litigante".',
  },

  // 2. Capciosa
  {
    id: 'drill-002',
    caseTitle: 'Vista Pública por Extorsión Agravada',
    tribunal: 'Tribunal Segundo de Sentencia de Santa Ana',
    phase: 'Contrainterrogatorio',
    interrogator: 'Defensor Particular',
    witnessRole: 'Víctima protegida',
    contextNarrative: 'La defensa técnica contrainterroga a la víctima con régimen de protección clave "Estrella" para desacreditar la entrega vigilada.',
    questionUttered: 'Cuando usted recibió el dinero que la policía le devolvió después de falsear el acta de entrega, ¿cuánto tiempo esperó para firmar?',
    correctObjection: 'CAPCIOSA',
    judgeRuling: 'HA LUGAR',
    judicialRationale: 'La pregunta contiene una afirmación falsa y no admitida por el declarante ("después de falsear el acta"), buscando engañosamente inducir al testigo a admitir una falsedad procesal.',
    salvadoranJurisprudence: 'Art. 210 inc. 2 PrPn: "Se prohíben absolutamente las preguntas capciosas en cualquier etapa del debate por atentar contra la lealtad y la buena fe procesal".',
  },

  // 3. Impertinente
  {
    id: 'drill-003',
    caseTitle: 'Vista Pública por Falsedad Ideológica en Escritura Pública',
    tribunal: 'Tribunal Tercero de Sentencia de San Salvador',
    phase: 'Interrogatorio Directo',
    interrogator: 'Querellante Adhesivo',
    witnessRole: 'Testigo presencial presencial lego',
    contextNarrative: 'Se discute si el compareciente estaba en el país el día que supuestamente se otorgó la donación irrevocable de inmueble.',
    questionUttered: 'Dígame testigo, ¿es cierto que el hermano de la cuñada del notario tiene deudas bancarias pendientes con una cooperativa de crédito?',
    correctObjection: 'IMPERTINENTE',
    judgeRuling: 'HA LUGAR',
    judicialRationale: 'Las deudas del hermano de la cuñada del notario carecen por completo de relevancia fáctica o conexidad con la tipicidad del delito de falsedad ideológica juzgado.',
    salvadoranJurisprudence: 'Sentencia Ref. 218C2016 (Sala de lo Penal CSJ): "El juez presidente tiene el deber de oficio de impedir la dispersión del juicio expulsando interrogatorios impertinentes".',
  },

  // 4. Compuesta
  {
    id: 'drill-004',
    caseTitle: 'Juicio por Robo Agravado y Lesiones',
    tribunal: 'Tribunal de Sentencia de Ahuachapán',
    phase: 'Interrogatorio Directo',
    interrogator: 'Fiscal del Caso (FGR)',
    witnessRole: 'Agente captor PNC',
    contextNarrative: 'La Fiscalía interroga al agente policial sobre el momento de la persecución y posterior requisa en flagrancia.',
    questionUttered: '¿Usted persiguió al sujeto por el callejón, le dio alcance, lo desarmó y le encontró en la bolsa derecha del pantalón el celular iPhone de la víctima?',
    correctObjection: 'COMPUESTA',
    judgeRuling: 'HA LUGAR',
    judicialRationale: 'La pregunta incorpora cuatro proposiciones fácticas distintas en un solo bloque. Si el testigo responde "sí", no se sabrá a cuál de los cuatro extremos se refiere su afirmación.',
    salvadoranJurisprudence: 'Art. 210 inc. 2 PrPn: El tribunal ordena a la Fiscalía desglosar la pregunta en reactivos simples e individuales.',
  },

  // 5. Conclusiva / Opinión
  {
    id: 'drill-005',
    caseTitle: 'Juicio por Homicidio Culposo en Accidente de Tránsito',
    tribunal: 'Tribunal de Sentencia de San Miguel',
    phase: 'Interrogatorio Directo',
    interrogator: 'Fiscal del Caso (FGR)',
    witnessRole: 'Testigo presencial presencial lego',
    contextNarrative: 'Un transeúnte declara sobre el atropellamiento en la Carretera Panamericana.',
    questionUttered: 'En su opinión como conductor de bicicleta de toda la vida, ¿cree que los frenos del camión fallaron debido a una sobrecarga hidráulica en las zapatas?',
    correctObjection: 'CONCLUSIVA',
    judgeRuling: 'HA LUGAR',
    judicialRationale: 'El testigo común solo puede declarar sobre hechos que percibió con sus sentidos (ej. si escuchó chillido de llantas), no sobre conclusiones mecánicas reservadas a los peritos en accidentología vial.',
    salvadoranJurisprudence: 'Art. 209 PrPn y Sentencia Ref. 104C2019 (CSJ): "La opinión experta debe ser canalizada exclusivamente por medio del peritaje judicial legalmente admitido".',
  },

  // 6. Pregunta Válida en Contrainterrogatorio (Sugestiva Permitida)
  {
    id: 'drill-006',
    caseTitle: 'Vista Pública por Tráfico Ilícito de Drogas',
    tribunal: 'Tribunal Primero de Sentencia de San Salvador',
    phase: 'Contrainterrogatorio',
    interrogator: 'Defensor Particular',
    witnessRole: 'Agente captor PNC',
    contextNarrative: 'La defensa somete a contraexamen al agente policial para poner en duda la cadena de custodia y la visibilidad nocturna.',
    questionUttered: 'Agente, la noche de la captura el poste del tendido eléctrico más cercano estaba a más de cuarenta metros apagado, ¿cierto?',
    correctObjection: 'VALIDA',
    judgeRuling: 'NO HA LUGAR',
    judicialRationale: 'En el CONTRAINTERROGATORIO las preguntas sugestivas están expresamente PERMITIDAS por la ley procesal salvadoreña (Art. 210 inc. 2 PrPn) para confrontar la veracidad del testigo de la contraparte.',
    salvadoranJurisprudence: 'Art. 210 inc. 2 PrPn in fine: "En el contrainterrogatorio se permitirán las preguntas sugestivas". El juez declara No ha lugar y ordena al testigo responder.',
  },

  // 7. Pregunta Especulativa
  {
    id: 'drill-007',
    caseTitle: 'Vista Pública por Violencia Económica y Amenazas',
    tribunal: 'Juzgado Especializado de Sentencia para una Vida Libre de Violencia para las Mujeres',
    phase: 'Interrogatorio Directo',
    interrogator: 'Querellante Adhesivo',
    witnessRole: 'Testigo presencial presencial lego',
    contextNarrative: 'Se interroga a una vecina sobre las discusiones entre los convivientes.',
    questionUttered: 'Si la víctima no hubiese salido corriendo esa noche a la calle, ¿usted cree que el imputado la habría asesinado en la sala?',
    correctObjection: 'ESPECULATIVA',
    judgeRuling: 'HA LUGAR',
    judicialRationale: 'La pregunta obliga al testigo a especular y adivinar sobre una hipótesis alternativa irreal que no ocurrió en el plano fáctico comprobable.',
    salvadoranJurisprudence: 'Art. 209 PrPn: Los testigos deponente declaran sobre hechos concretos pasados, no sobre suposiciones futuras o conjeturas contrafácticas.',
  },

  // 8. Pregunta Repetitiva / Ya Contestada
  {
    id: 'drill-008',
    caseTitle: 'Juicio por Estafa Agravada Inmobiliaria',
    tribunal: 'Tribunal Quinto de Sentencia de San Salvador',
    phase: 'Contrainterrogatorio',
    interrogator: 'Defensor Particular',
    witnessRole: 'Víctima protegida',
    contextNarrative: 'La víctima ya contestó en dos ocasiones previas que entregó el cheque en la oficina del imputado a las diez de la mañana.',
    questionUttered: 'Vuelvo a insistirle: ¿no es verdad que el cheque lo entregó por la tarde en una cafetería y no en la oficina?',
    correctObjection: 'REPETITIVA',
    judgeRuling: 'HA LUGAR',
    judicialRationale: 'El punto ya fue respondido de manera concluyente y reiterada. Volver sobre el tema busca hostigar al declarante sin aportar nuevos elementos de convicción.',
    salvadoranJurisprudence: 'Art. 210 inc. 2 PrPn: El juez presidente tiene la facultad de moderar el interrogatorio para evitar reiteraciones inútiles.',
  },

  // 9. Pregunta Válida Abierta en Directo
  {
    id: 'drill-009',
    caseTitle: 'Juicio por Homicidio Simple',
    tribunal: 'Tribunal de Sentencia de Sonsonate',
    phase: 'Interrogatorio Directo',
    interrogator: 'Fiscal del Caso (FGR)',
    witnessRole: 'Testigo presencial presencial lego',
    contextNarrative: 'La Fiscalía inicia el relato fáctico del testigo sobre lo que observó en la vía pública.',
    questionUttered: '¿Qué fue lo que llamó su atención al momento en que usted transitaba por la esquina de la panadería?',
    correctObjection: 'VALIDA',
    judgeRuling: 'NO HA LUGAR',
    judicialRationale: 'Es una pregunta abierta prototípica de interrogatorio directo: formula el marco de referencia temporal y espacial sin sugerir el contenido de la respuesta.',
    salvadoranJurisprudence: 'Técnicas de Litigación Oral MINJUS: Las preguntas abiertas (qué, cómo, cuándo, dónde) son el vehículo procesal idóneo del interrogatorio directo.',
  },

  // 10. Conclusiva dirigida a Perito fuera de su especialidad
  {
    id: 'drill-010',
    caseTitle: 'Vista Pública por Homicidio con Arma de Fuego',
    tribunal: 'Tribunal Cuarto de Sentencia de San Salvador',
    phase: 'Interrogatorio Directo',
    interrogator: 'Fiscal del Caso (FGR)',
    witnessRole: 'Perito Balístico Forense',
    contextNarrative: 'El perito balístico de la Policía Técnica y Científica comparece para ratificar su dictamen de cotejo de vainillas y casquillos.',
    questionUttered: 'Señor perito balístico, ¿de acuerdo con su análisis psicológico, el tirador sentía odio patológico en el momento de halar el gatillo?',
    correctObjection: 'CONCLUSIVA',
    judgeRuling: 'HA LUGAR',
    judicialRationale: 'Aunque es un perito, su acreditación técnica es en BALÍSTICA FORENSE, no en PSICOLOGÍA NI PSIQUIATRÍA FORENSE. El perito no puede exceder el marco de su experticia admitida.',
    salvadoranJurisprudence: 'Art. 226 y 236 PrPn: "El dictamen y declaración pericial debe circunscribirse estrictamente a la ciencia, arte o técnica en la que el perito ostente idoneidad legalmente comprobada".',
  },
];

// ============================================================================
// MODELOS Y GUÍAS DE LITIGACIÓN ORAL PENAL (CÓDIGO PROCESAL PENAL DE EL SALVADOR)
// ============================================================================

export interface CourtroomDialogueTurn {
  speaker: 'Fiscal' | 'Defensa' | 'Juez' | 'Testigo' | 'Perito' | 'Secretario';
  text: string;
}

export interface CourtroomDialogueIncident {
  dialogue: CourtroomDialogueTurn[];
  objectionRaised: string;
  partyObjecting: 'Fiscal' | 'Defensa';
  legalBasis: string;
  judgeRuling:
    | 'HA LUGAR'
    | 'NO HA LUGAR'
    | 'HA LUGAR A LA CONFRONTACIÓN'
    | 'HA LUGAR A LA INCORPORACIÓN'
    | 'NO HA LUGAR A LA EXCLUSIÓN'
    | 'NO HA LUGAR (CON PROTESTA REGISTRADA)';
  judicialRationale: string;
}

export interface OralLitigationSolvedCase {
  id: string;
  caseNumber: number;
  title: string;
  tribunal: string;
  crimeCharge: string;
  proceduralPhase: string;
  scenarioDescription: string;
  dialogueIncident: CourtroomDialogueIncident;
  pedagogicalKeyTakeaway: string;
}

export interface OralLitigationThematicUnit {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  legalFramework: string[];
  substantiveTheory: string;
  proceduralTechniques: string[];
  solvedCases: OralLitigationSolvedCase[];
}

export const ORAL_LITIGATION_THEMATIC_UNITS: OralLitigationThematicUnit[] = [
  // ==========================================================================
  // UNIDAD 1: TEORÍA DEL CASO Y ALEGATOS PRELIMINARES
  // ==========================================================================
  {
    id: 'unit-oral-01',
    unitNumber: 1,
    title: 'Unidad 1: Teoría del Caso y Alegatos Preliminares en Vista Pública',
    subtitle: 'Construcción dogmática de las proposiciones fácticas, adecuación típica y promesa probatoria en el debate oral (Arts. 380, 381, 394 PrPn)',
    legalFramework: [
      'Art. 380 Código Procesal Penal (Apertura de la Vista Pública y Alegatos Iniciales)',
      'Art. 381 Código Procesal Penal (Dirección y Disciplina del Debate Judicial)',
      'Art. 394 Código Procesal Penal (Deliberación, Congruencia y Valoración Probatoria)',
      'Art. 179 Código Procesal Penal (Sistema de Sana Crítica Racional)',
      'Sentencia de Casación Penal Ref. 412C2018 (Sala de lo Penal CSJ)',
    ],
    substantiveTheory: `La Teoría del Caso constituye la brújula estratégica, metodológica y dogmática que orienta toda la actuación del litigante en el proceso penal salvadoreño, desde la audiencia inicial hasta los recursos extraordinarios de casación. En el diseño procesal adversarial y acusatorio mitigado instituido por el Código Procesal Penal de la República de El Salvador (D.L. 733), la Teoría del Caso se erige como una construcción tripartita inescindible: el elemento fáctico, el elemento jurídico y el elemento probatorio.

1. El Elemento Fáctico se descompone en proposiciones fácticas concretas. Una proposición fáctica es una afirmación de hecho que satisface un elemento del tipo penal o de una eximente de responsabilidad. No se trata del relato novelesco o emotivo de los sucesos, sino de la reconstrucción cronológica y espacial de conductas humanas delimitadas en tiempo, lugar y modo que puedan ser corroboradas mediante órganos de prueba legalmente incorporados al juicio.

2. El Elemento Jurídico es el subsistema de subsunción típica, antijuridicidad y culpabilidad a la luz del Código Penal salvadoreño o leyes penales especiales. Para el Fiscal del caso (FGR), supone desglosar la tipicidad objetiva (sujeto activo, sujeto pasivo, verbo rector, nexo causal, resultado) y la tipicidad subjetiva (dolo o culpa), así como las circunstancias agravantes genéricas o específicas. Para el Defensor particular o público, implica verificar la atipicidad, la concurrencia de causas de justificación (como la legítima defensa del Art. 27 N° 2 Pn o el estado de necesidad), causas de inculpabilidad (error de prohibición invencible, miedo insuperable) o causas de extinción de la acción penal.

3. El Elemento Probatorio amalgama y valida las proposiciones fácticas a través de los medios probatorios admitidos en el auto de apertura a juicio (Art. 362 PrPn): testimonios presenciales, peritajes forenses técnico-científicos del Instituto de Medicina Legal (IML) o de la División de Policía Técnica y Científica (DPTC), documentos auténticos y evidencia material u objetos del delito. Cada proposición fáctica debe estar respaldada por al menos una prueba directa o indiciaria unívoca.

Reglas de oro de la Teoría del Caso en El Salvador:
- Única: No se pueden plantear hipótesis incompatibles simultáneamente (por ejemplo, afirmar en el alegato inicial que el imputado no estuvo en la escena y a la vez sostener que actuó en legítima defensa).
- Autosuficiente: Debe dar cuenta de la totalidad de los hechos y responder con solvencia a las debilidades y fortalezas que desfilarán en la vista pública.
- Creíble y Verosímil: Debe apegarse a las máximas de la experiencia común y a los principios de la lógica formal (identidad, no contradicción y razón suficiente), pilares de la sana crítica racional (Art. 179 PrPn).
- Jurídicamente Relevante: Debe tener la capacidad de provocar una consecuencia jurídica favorable en la parte dispositiva de la sentencia definitiva (Arts. 395 y 399 PrPn).

Estructuración del Alegato de Apertura (Art. 380 PrPn):
El alegato inicial de vista pública es la primera oportunidad formal del litigante para presentar su teoría ante el Tribunal de Sentencia o Juzgado de Sentencia unipersonal. Debe estructurarse con rigor forense:
a) Lema o frase de impacto: Una síntesis persuasiva de no más de una o dos oraciones que encapsule la esencia humana y jurídica de la teoría (por ejemplo: "Un acto de legítima supervivencia frente a una agresión ilegítima armada").
b) Presentación humanizada de las partes: Identificar al acusado y a la víctima en su dimensión humana y social, alejándose del estigma criminológico abstracto.
c) Relato cronológico y circunstanciado: Narrar los acontecimientos de forma fluida, estructurada por hitos temporales identificables.
d) La Promesa Probatoria: Explicar al juzgador qué presenciará y escuchará a lo largo del desfile probatorio ("Ustedes escucharán del perito balístico forense cómo la trayectoria del proyectil acredita que el disparo se efectuó de frente y a corta distancia...").
e) Petición concreta de fallo: Concluir solicitando una sentencia condenatoria con determinación de pena o una sentencia absolutoria por atipicidad o duda razonable (in dubio pro reo, Art. 7 PrPn).

Límite infranqueable: El alegato de apertura no es el momento procesal para argumentar conclusiones valorativas sobre pruebas que aún no han sido producidas en el debate. La argumentación prematura viola el Art. 380 PrPn y habilita la objeción inmediata de la contraparte.`,
    proceduralTechniques: [
      'Desagregación metódica de la Teoría del Caso en su tríada indisoluble: fáctica, jurídica y probatoria.',
      'Formulación de lema o enunciado rector con impacto persuasivo y síntesis dogmática.',
      'Construcción de la promesa probatoria sin incurrir en argumentación conclusiva prematura.',
      'Humanización de las partes y contextualización situacional de los hechos.',
      'Control de límites: Prohibición de lecturas integrales de actas y anticipación de conclusiones valorativas.',
    ],
    solvedCases: [
      {
        id: 'case-u1-01',
        caseNumber: 1,
        title: 'Caso Homicidio Simple vs. Legítima Defensa en Riña Comunitaria',
        tribunal: 'Tribunal Primero de Sentencia de San Salvador',
        crimeCharge: 'Homicidio Simple (Art. 128 Pn)',
        proceduralPhase: 'Alegato de Apertura en Vista Pública (Art. 380 PrPn)',
        scenarioDescription: 'La Fiscalía acusa por homicidio simple a Carlos M., quien asestó una herida con arma blanca a la víctima durante un altercado en la Colonia Escalón. La defensa plantea legítima defensa (Art. 27 N° 2 Pn). Durante la apertura, el Fiscal comienza a valorar la credibilidad de un testigo antes de que declare.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Señor Juez, este no es un caso fortuito, es un homicidio consumado con desprecio a la vida. Y cuando escuchen al testigo presencial don Juan P., ustedes notarán que es un hombre intachable, cuya palabra es oro molido y que jamás mentiría ante un tribunal, demostrando sin duda alguna que el acusado es un asesino despiadado.' },
            { speaker: 'Defensa', text: '¡Objeción, su Señoría! El Fiscal está argumentando conclusiones sobre la credibilidad personal del testigo y emitiendo juicios de valor definitivos en el alegato de apertura, lo cual vulnera frontalmente el Art. 380 PrPn.' },
            { speaker: 'Juez', text: 'Señor Fiscal, la defensa tiene la razón. En este momento procesal usted únicamente debe exponer su teoría fáctica y la promesa probatoria, sin valorar la credibilidad testimonial antes de su producción en juicio. Ha lugar a la objeción. Continúe ajustándose a los hechos que promete probar.' },
            { speaker: 'Fiscal', text: 'Entendido, su Señoría. Prometemos probar que la víctima no portaba armas al momento de recibir la lesión fatal mediante el acta de inspección ocular y la autopsia del IML.' },
          ],
          objectionRaised: 'Objeción: Argumentación valorativa y calificación prematura de credibilidad en Alegato de Apertura',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 380 y 381 Código Procesal Penal',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'El alegato de apertura es un mapa conceptual de lo que se presentará en juicio, no un ejercicio de valoración probatoria anticipada. Valorar la credibilidad subjetiva de un declarante antes de que comparezca a estrados pervierte la naturaleza informativa del inicio de la vista pública.',
        },
        pedagogicalKeyTakeaway: 'En el alegato de apertura nunca argumente credibilidad ni pida al juez que dé por sentado un hecho. Utilice la fórmula de la promesa probatoria: "Ustedes escucharán del testigo...", "El dictamen forense les demostrará que...".',
      },
      {
        id: 'case-u1-02',
        caseNumber: 2,
        title: 'Caso Robo Agravado en Transporte Colectivo de Santa Tecla',
        tribunal: 'Tribunal de Sentencia de Santa Tecla',
        crimeCharge: 'Robo Agravado (Arts. 212 y 213 N° 2 y 3 Pn)',
        proceduralPhase: 'Alegato de Apertura Fiscal y Delimitación de Flagrancia',
        scenarioDescription: 'Dos sujetos abordaron una unidad del transporte colectivo armados con cuchillos y despojaron a los pasajeros. La defensa alega confusión en la individualización del coimputado en la rueda de personas.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Bajo el lema "El terror en el camino a casa", esta representación fiscal demostrará que el imputado actuó en coautoría funcional, con división de roles, portando un arma blanca para anular la resistencia de las víctimas en la Ruta 101-B.' },
            { speaker: 'Defensa', text: 'Señor Juez, objetamos la formulación del fiscal, pues está haciendo mención de una navaja que fue excluida en la audiencia preliminar por ruptura de cadena de custodia.' },
            { speaker: 'Juez', text: 'Verifico el auto de apertura a juicio... Efectivamente, dicha evidencia material fue declarada inadmisible en preliminar por el Juzgado de Instrucción. Ha lugar a la objeción. La Fiscalía debe abstenerse de formular promesas probatorias sustentadas en prueba excluida.' },
            { speaker: 'Fiscal', text: 'Reformulo, su Señoría. Esta Fiscalía probará la violencia intimidatoria exclusivamente mediante el testimonio coincidente de las tres víctimas y los agentes captores que realizaron la persecución ininterrumpida.' },
          ],
          objectionRaised: 'Objeción: Alusión a evidencia material formalmente excluida del debate',
          partyObjecting: 'Defensa',
          legalBasis: 'Arts. 359, 362 y 380 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'La promesa probatoria solo puede apoyarse en medios de prueba admitidos en el auto de apertura a juicio. Mencionar en apertura elementos expulsados por ilicitud o extemporaneidad contamina indebidamente el debate judicial.',
        },
        pedagogicalKeyTakeaway: 'Antes de pronunciar su alegato de apertura, revise minuciosamente la parte resolutiva del auto de apertura a juicio (Art. 362 PrPn) para asegurarse de no prometer jamás pruebas inadmitidas o excluidas.',
      },
      {
        id: 'case-u1-03',
        caseNumber: 3,
        title: 'Caso Extorsión Continuada con Entregas Vigiladas',
        tribunal: 'Tribunal Especializado de Sentencia de San Salvador',
        crimeCharge: 'Extorsión Agravada Continuada (Art. 2 y 3 Ley Especial Contra el Delito de Extorsión)',
        proceduralPhase: 'Alegato de Apertura de la Defensa Técnica',
        scenarioDescription: 'Operativo policial con agente negociador y entrega vigilada de paquete simulado. La defensa formula su teoría del caso basada en la falta de dolo extorsivo y error de tipo.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Señor Juez Colegiado, nuestro lema es "Un mototaxista contratado para hacer un mandado no es un extorsionista". Mi patrocinado jamás realizó llamadas telefónicas amenazantes ni conocía el contenido del sobre de manila que se le pidió transportar por cinco dólares.' },
            { speaker: 'Fiscal', text: '¡Objeción, su Señoría! El defensor está dando lectura literal y sostenida a las entrevistas policiales agregadas a la carpeta fiscal, violentando la oralidad del debate.' },
            { speaker: 'Juez', text: 'Tiene la razón la representación fiscal. La oralidad es un principio rector de la vista pública conforme al Art. 371 PrPn. Señor Defensor, puede consultar notas o guías esquemáticas, pero no leer textualmente folios íntegros de la fase de instrucción. No abuse de la lectura.' },
            { speaker: 'Defensa', text: 'Disculpas, señor Juez. Retomo de forma espontánea: probaremos mediante el testimonio del dueño de la mototaxi y los registros de llamadas que mi representado fue un tercero instrumentalizado.' },
          ],
          objectionRaised: 'Objeción: Vulneración del principio de oralidad por lectura íntegra de actas previas',
          partyObjecting: 'Fiscal',
          legalBasis: 'Arts. 371 y 380 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'El juicio oral no es una lectura de piezas documentadas. Salvo los casos expresos del Art. 372 PrPn, las partes deben litigar con expresión oral fluida, garantizando la inmediación y contradicción.',
        },
        pedagogicalKeyTakeaway: 'Domine el esquema de su alegato con fichas técnicas o mapas conceptuales. La lectura robótica de actuaciones procesales devalúa la persuasión forense y amerita el llamado de atención del tribunal.',
      },
      {
        id: 'case-u1-04',
        caseNumber: 4,
        title: 'Caso Falsedad Ideológica y Fraude Procesal en Protocolo Notarial',
        tribunal: 'Tribunal Tercero de Sentencia de San Salvador',
        crimeCharge: 'Falsedad Ideológica (Art. 284 Pn) y Fraude Procesal (Art. 306 Pn)',
        proceduralPhase: 'Alegato de Apertura de la Querella Conjunta con FGR',
        scenarioDescription: 'Se atribuye a un notario y a dos comparecientes haber insertado declaraciones falsas en una escritura matriz de compraventa de inmueble para despojar a un adulto mayor.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Esta representación querellante y fiscal demostrará que el día veintidós de marzo el supuesto vendedor ya se encontraba hospitalizado en estado de coma en el Hospital Rosales, por lo que su comparecencia notarial fue un invento delictivo.' },
            { speaker: 'Defensa', text: 'Objeción, su Señoría. El acusador está tildando al notario de "falsificador consumado y líder de una banda criminal", afectando su derecho de presunción de inocencia ante el tribunal colegiado.' },
            { speaker: 'Juez', text: 'El tribunal amonesta a la parte acusadora. El imputado goza de la garantía de presunción de inocencia consagrada en el Art. 12 de la Constitución de la República hasta que se emita fallo en firme. Ha lugar a la objeción: limite su apertura a imputaciones jurídicas y hechos concretos sin epítetos denigrantes.' },
            { speaker: 'Fiscal', text: 'Entendido. Demostraremos que el notario dio fe de que una persona en coma compareció ante sus oficios, hecho que corroborará el peritaje dactiloscópico y la bitácora médica hospitalaria.' },
          ],
          objectionRaised: 'Objeción: Vulneración de la dignidad del imputado y presunción de inocencia',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 12 Cn., Art. 6 y 381 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'El decoro forense y el respeto a las garantías constitucionales exigen que la acusación formule cargos fácticos sin calificaciones injuriosas o estigmatizantes que vulneren el estado de inocencia.',
        },
        pedagogicalKeyTakeaway: 'Mantenga una elegancia técnica intachable. Son los hechos y las pruebas los que demuestran la culpabilidad, no los adjetivos agresivos empleados contra el procesado.',
      },
      {
        id: 'case-u1-05',
        caseNumber: 5,
        title: 'Caso Violencia Intrafamiliar Psicológica y Delito Conexo',
        tribunal: 'Juzgado Especializado de Sentencia para una Vida Libre de Violencia para las Mujeres',
        crimeCharge: 'Violencia Psicológica (Art. 55 LEIV) y Amenazas Agravadas (Art. 155 Pn)',
        proceduralPhase: 'Alegato Preliminar con Enfoque de Género Especializado',
        scenarioDescription: 'Juicio especializado por agresiones verbales sistemáticas y coacción patrimonial. La defensa intenta cuestionar la vida íntima de la denunciante en la apertura.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'En nuestro alegato de apertura demostraremos que la denunciante es una mujer inestable que frecuentaba centros nocturnos y que mantenía conductas reprochables en su vida social privada...' },
            { speaker: 'Fiscal', text: '¡Objeción enérgica, su Señoría! El defensor está introduciendo alegatos estereotipados sobre la conducta sexual y privada de la víctima, conducta taxativamente prohibida por el Art. 57 de la LEIV y el protocolo de juzgamiento con perspectiva de género.' },
            { speaker: 'Juez', text: 'Ha lugar a la objeción de la Fiscalía. Queda terminantemente prohibido introducir cuestionamientos a la vida personal, moral o sexual de la víctima que no guarden relación estricta con los tipos penales juzgados. Defensor, reconduzca su apertura de inmediato.' },
            { speaker: 'Defensa', text: 'Comprendido, señora Jueza. Sostendremos que las discrepancias ventiladas fueron de orden puramente mercantil respecto a la disolución de un negocio compartido.' },
          ],
          objectionRaised: 'Objeción: Uso de estereotipos de género y revictimización en el debate oral',
          partyObjecting: 'Fiscal',
          legalBasis: 'Art. 57 LEIV y Art. 10 y 381 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'La legislación salvadoreña de protección a las mujeres prohíbe de forma absoluta cualquier intento de justificar o minimizar agresiones mediante la ventilación de la conducta privada previa de la víctima.',
        },
        pedagogicalKeyTakeaway: 'En tribunales especializados de la LEIV, las estrategias de defensa deben circunscribirse a la atipicidad objetiva o subjetiva del hecho investigado; los estereotipos de género son sancionados procesalmente de oficio.',
      },
    ],
  },

  // ==========================================================================
  // UNIDAD 2: TÉCNICAS AVANZADAS DE INTERROGATORIO DIRECTO
  // ==========================================================================
  {
    id: 'unit-oral-02',
    unitNumber: 2,
    title: 'Unidad 2: Técnicas Avanzadas de Interrogatorio Directo',
    subtitle: 'Acreditación de testigos y peritos, tipología de preguntas abiertas y de transición, ritmo, legitimación de evidencia y refrescamiento de memoria (Arts. 209, 210, 212, 226, 236 PrPn)',
    legalFramework: [
      'Art. 209 Código Procesal Penal (Reglas Generales de Interrogatorio Testimonial)',
      'Art. 210 Código Procesal Penal (Prohibición de Preguntas Sugestivas en el Directo)',
      'Art. 212 Código Procesal Penal (Refrescamiento de Memoria con Declaraciones Previas)',
      'Art. 226 Código Procesal Penal (Idoneidad y Acreditación de Peritos Forenses)',
      'Art. 236 Código Procesal Penal (Examen Directo de Peritos en Juicio Oral)',
    ],
    substantiveTheory: `El interrogatorio directo es la principal herramienta de producción probatoria con la que cuenta la parte proponente (sea la Fiscalía General de la República, la Querella o la Defensa) para incorporar a la vista pública las proposiciones fácticas que sustentan su Teoría del Caso. Conforme a las reglas del Código Procesal Penal de El Salvador (Arts. 209 y 210 PrPn), el testigo es el protagonista absoluto de esta fase procesal; el abogado litigante debe asumir el rol de facilitador o director de escena invisible, permitiendo que el tribunal escuche directamente el relato espontáneo, detallado y verosímil de quien percibió los acontecimientos por sus propios sentidos.

Fases estratégicas del interrogatorio directo:
1. Acreditación de la fuente testimonial: Todo examen directo debe iniciar con preguntas orientadas a legitimar al testigo frente a los ojos del juzgador. En testigos presenciales comunes, se acredita su solvencia moral, arraigo, ocupación y capacidad sensoperceptiva. En peritos forenses (Arts. 226 y 236 PrPn) del IML o DPTC, la acreditación debe ser exhaustiva: títulos académicos obtenidos, años de ejercicio profesional especializado, número de peritajes practicados en la materia y conocimiento de las normas internacionales de aseguramiento técnico de calidad. Si el testigo no está acreditado, su testimonio carece de peso persuasivo ante la sana crítica.

2. Tipología de preguntas permitidas:
- Preguntas Abiertas: Constituyen el motor obligatorio del examen directo. Se formulan iniciando con pronombres o adverbios interrogativos: ¿Qué?, ¿Cómo?, ¿Cuándo?, ¿Dónde?, ¿Por qué?, ¿Quién?, ¿Describa? Permiten al declarante narrar los hechos con sus propias palabras sin condicionamiento exógeno.
- Preguntas de Transición y Orientación: Se utilizan para guiar al testigo de un episodio fáctico al siguiente sin caer en sugestividad: "Pasando ahora a lo sucedido a las diez de la noche en la gasolinera, ¿qué ocurrió a continuación?".
- Preguntas Cerradas de Detalle: Permiten precisar puntos específicos previamente introducidos por una respuesta abierta: "¿De qué color era el abrigo que usted mencionó?".

La Prohibición de Sugestividad en el Directo (Art. 210 inc. 2 PrPn):
La norma procesal salvadoreña prohíbe taxativamente las preguntas sugestivas formuladas por la parte que propuso al testigo. Una pregunta es sugestiva cuando lleva inserta o insinúa la respuesta deseada por el interrogador. La razón dogmática es evidente: la información debe fluir del cerebro y la memoria del testigo, no de la boca del litigante que lo presentó. Cuando un abogado interroga con sugestivas en el directo, está testificando él mismo y desvirtuando la autenticidad probatoria.

Técnica de Refrescamiento de Memoria con Declaraciones Previas (Art. 212 PrPn):
Cuando un testigo honesto sufre un olvido involuntario o una laguna mental sobre un dato específico (como una fecha exacta, un número de serie o placa vehicular), la ley salvadoreña autoriza el refrescamiento de memoria mediante el uso de sus entrevistas o actas previas:
- Paso 1 (Generar la laguna): El testigo debe admitir en estrado que en este momento no recuerda el dato exacto ("No recuerdo con exactitud el número de placa").
- Paso 2 (Sentar las bases): El interrogador indaga si el testigo declaró anteriormente y si en ese momento los hechos estaban frescos en su memoria ("¿Rindió usted entrevista en sede fiscal horas después de los hechos? ¿Su firma consta al pie? ¿Si viera ese documento refrescaría su memoria?").
- Paso 3 (Exhibición y control): Se solicita autorización al Juez presidente para exhibir el documento a la contraparte para su debido control procesal.
- Paso 4 (Lectura silenciosa): Se entrega el documento al testigo indicándole que lea ÚNICAMENTE el renglón específico para sí mismo, en silencio.
- Paso 5 (Retiro y pregunta abierta): Se retira el documento del alcance del declarante y se reformula la pregunta original de manera abierta: "Habiendo refrescado su memoria, ¿cuál era el número de placa del vehículo?". El documento nunca se incorpora como prueba sustantiva autónoma; lo que vale es la respuesta oral del testigo.`,
    proceduralTechniques: [
      'Acreditación estratégica de la fuente: perfil personal, idoneidad y conocimiento directo.',
      'Uso preferente de preguntas abiertas (qué, cómo, cuándo, dónde, por qué) para empoderar al deponente.',
      'Preguntas de transición y orientación temporal-espacial sin sugerir contenido fáctico.',
      'Modulación del ritmo y pausas dramáticas para fijar hechos determinantes en el tribunal.',
      'Protocolo formal de refrescamiento de memoria con entrevista previa bajo el Art. 212 PrPn.',
    ],
    solvedCases: [
      {
        id: 'case-u2-01',
        caseNumber: 1,
        title: 'Interrogatorio Directo a Víctima Protegida en Robo con Violencia',
        tribunal: 'Tribunal Primero de Sentencia de San Salvador',
        crimeCharge: 'Robo Agravado (Art. 213 Pn)',
        proceduralPhase: 'Interrogatorio Directo de la Fiscalía a Víctima Clave "Alfa"',
        scenarioDescription: 'La Fiscalía inicia el examen directo de la víctima que cuenta con medidas de protección ordinarias. El fiscal incurre en una pregunta que insinúa la vestimenta del asaltante.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Clave Alfa, cuéntele al tribunal qué sucedió cuando usted salió de la agencia bancaria a las dos de la tarde.' },
            { speaker: 'Testigo', text: 'Caminé unos cincuenta metros hacia mi vehículo cuando un hombre se me acercó por la espalda y me colocó un objeto punzante en las costillas, exigiéndome el dinero que acababa de retirar.' },
            { speaker: 'Fiscal', text: '¿Y ese hombre vestía una camisa deportiva color azul con rayas blancas como la que porta hoy el imputado?' },
            { speaker: 'Defensa', text: '¡Objeción! Pregunta sugestiva en examen directo, vulnera de manera frontal el Art. 210 inc. 2 del Código Procesal Penal.' },
            { speaker: 'Juez', text: 'Ha lugar a la objeción. La pregunta sugiere la respuesta y describe elementos que el declarante no ha mencionado previamente. Señor Fiscal, formule preguntas abiertas.' },
            { speaker: 'Fiscal', text: 'Reformulo: Clave Alfa, ¿cómo vestía la persona que lo abordó por la espalda?' },
            { speaker: 'Testigo', text: 'Llevaba una camiseta deportiva oscura y una gorra negra.' },
          ],
          objectionRaised: 'Objeción: Pregunta sugestiva en interrogatorio directo',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 210 inc. 2 Código Procesal Penal',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'En el examen directo la parte oferente no puede alimentar la memoria del declarante con detalles descriptivos. La descripción física del agresor debe surgir íntegramente del acervo memorístico del testigo.',
        },
        pedagogicalKeyTakeaway: 'Siempre que requiera descripciones fácticas en directo, recurra a la fórmula abierta: "¿Cómo vestía?", "¿Qué características físicas recuerda?", evitando inducir prendas o rasgos.',
      },
      {
        id: 'case-u2-02',
        caseNumber: 2,
        title: 'Acreditación y Examen Directo de Perito Balístico Forense (DPTC)',
        tribunal: 'Tribunal Segundo de Sentencia de San Salvador',
        crimeCharge: 'Homicidio Agravado (Art. 129 N° 3 Pn)',
        proceduralPhase: 'Acreditación Técnica y Ratificación de Dictamen Pericial (Arts. 226 y 236 PrPn)',
        scenarioDescription: 'El perito en balística forense de la PNC comparece a ratificar su dictamen pericial sobre el cotejo de dos casquillos percutidos calibre 9x19 mm.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Señor perito, para conocimiento del tribunal, ¿cuántos años lleva laborando en la División de Policía Técnica y Científica?' },
            { speaker: 'Perito', text: 'Tengo catorce años como perito balístico forense y he intervenido en más de ochocientos cotejos microscópicos de armas de fuego.' },
            { speaker: 'Fiscal', text: '¿Qué método científico empleó en el análisis de los casquillos recolectados en la escena del crimen?' },
            { speaker: 'Perito', text: 'Utilicé un microscopio de comparación balística Leica para cotejar las huellas de aguja percutora, eyector y extractor.' },
            { speaker: 'Fiscal', text: 'A partir de ese método científico, ¿a qué conclusión concluyente arribó su peritaje?' },
            { speaker: 'Defensa', text: 'Objeción, su Señoría. El Fiscal no ha solicitado la exhibición previa del informe pericial admitido para que el testigo confirme si es su firma la que calza el documento.' },
            { speaker: 'Juez', text: 'No ha lugar a la objeción, señor Defensor. Conforme al Art. 236 PrPn, los peritos son examinados directamente sobre la materia de su dictamen y pueden exponer oralmente sus conclusiones científicas sin necesidad de una previa lectura formal del documento escrito.' },
            { speaker: 'Perito', text: 'La conclusión fue categórica: los dos casquillos percutidos recolectados en el cadáver fueron percutidos por el arma de fuego incautada al acusado.' },
          ],
          objectionRaised: 'Objeción: Pretensión de trámite innecesario de exhibición previa antes de exponer conclusiones periciales',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 236 y 388 PrPn',
          judgeRuling: 'NO HA LUGAR',
          judicialRationale: 'En el juicio oral moderno los peritos declaran viva voce sobre sus análisis y métodos; el dictamen escrito es un soporte de admisibilidad, pero el verdadero medio de prueba es el testimonio pericial en estrado.',
        },
        pedagogicalKeyTakeaway: 'Acredite con solvencia la metodología de su perito antes de entrar a la conclusión. Un peritaje con metodología validada resiste con éxito los embates del contrainterrogatorio adverso.',
      },
      {
        id: 'case-u2-03',
        caseNumber: 3,
        title: 'Reconstrucción de Flagrancia con Agente Captor de la PNC',
        tribunal: 'Tribunal de Sentencia de San Vicente',
        crimeCharge: 'Posesión y Tenencia con Fines de Tráfico (Art. 34 inc. 3 Ley Reguladora de las Actividades Relativas a las Drogas)',
        proceduralPhase: 'Interrogatorio Directo a Policía Captor',
        scenarioDescription: 'El agente describe la persecución ininterrumpida y el hallazgo de porciones de hierba seca en una mochila. El defensor objeta cuando el agente narra un hecho percibido.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Agente, una vez que le dio alcance al individuo en el callejón, ¿qué procedimiento realizó?' },
            { speaker: 'Testigo', text: 'Le ordené colocar las manos sobre la nuca para realizar un cacheo de seguridad y le solicité abrir la mochila negra que llevaba en la espalda.' },
            { speaker: 'Fiscal', text: '¿Qué observó en el interior de dicha mochila?' },
            { speaker: 'Testigo', text: 'Encontré cinco paquetes compactos envueltos con cinta adhesiva transparente que expedían un fuerte olor característico a marihuana.' },
            { speaker: 'Defensa', text: '¡Objeción! El testigo está emitiendo una opinión pericial botánica al aseverar que era marihuana, cuando él es un simple agente de seguridad pública sin título universitario.' },
            { speaker: 'Juez', text: 'No ha lugar a la objeción. El agente está testificando sobre una percepción sensorial olfativa directa que justificó la remisión de la sustancia a la sección antinarcóticos para la prueba de campo, lo cual es parte de sus facultades legales conforme al Art. 273 PrPn.' },
            { speaker: 'Testigo', text: 'En efecto, de inmediato coordiné con el técnico antinarcóticos para practicar la prueba de campo con reactivo Fast Blue.' },
          ],
          objectionRaised: 'Objeción: Testimonio supuestamente conclusivo o de opinión no pericial',
          partyObjecting: 'Defensa',
          legalBasis: 'Arts. 209 y 273 PrPn',
          judgeRuling: 'NO HA LUGAR',
          judicialRationale: 'Los agentes policiales pueden describir olores, aspectos físicos y consistencias perceptibles por los sentidos que fundamenten su actuación en flagrancia sin invadir la experticia de laboratorio.',
        },
        pedagogicalKeyTakeaway: 'Distinga con precisión entre una conclusión científica formal y un testimonio de percepción sensorial ordinaria de un agente policial con experiencia operativa de calle.',
      },
      {
        id: 'case-u2-04',
        caseNumber: 4,
        title: 'Técnica de Refrescamiento de Memoria con Entrevista Fiscal Previa',
        tribunal: 'Tribunal Tercero de Sentencia de San Salvador',
        crimeCharge: 'Homicidio Agravado (Art. 128 y 129 Pn)',
        proceduralPhase: 'Refrescamiento de Memoria bajo el Art. 212 PrPn',
        scenarioDescription: 'Un testigo presencial no recuerda con precisión el número de serie ni la marca de la motocicleta en la que huyeron los sicarios dos años atrás.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Don Roberto, ¿recuerda qué placa y marca tenía la motocicleta en la que se dieron a la fuga?' },
            { speaker: 'Testigo', text: 'Mire, señor fiscal, hace ya más de dos años de eso... recuerdo que era roja con negro, pero la marca y los números exactos de la placa se me han olvidado por completo.' },
            { speaker: 'Fiscal', text: 'Señor Juez, ante la evidente laguna mental, solicito autorización para aplicar la técnica de refrescamiento de memoria conforme al Art. 212 del Código Procesal Penal.' },
            { speaker: 'Juez', text: 'Siente las bases procesales primero, señor Fiscal.' },
            { speaker: 'Fiscal', text: 'Don Roberto, ¿el mismo día de los hechos usted rindió una entrevista en sede fiscal? ¿Firmó al pie? ¿Si le muestro esa entrevista le ayudaría a recordar?' },
            { speaker: 'Testigo', text: 'Sí, claro, ese día lo tenía todo bien fresquito en la mente.' },
            { speaker: 'Fiscal', text: 'Exhibo el documento a la defensa... Procedo a acercarme al testigo y le señalo el renglón 14 para que lo lea en silencio, para sí mismo... ¿Ya lo leyó? Retiro el documento. Don Roberto: ¿cuál era la placa y marca de la motocicleta?' },
            { speaker: 'Testigo', text: 'Era una motocicleta marca Bajaj Pulsar, placa M-54218.' },
          ],
          objectionRaised: 'Solicitud de aplicación de técnica de refrescamiento de memoria con entrevista previa',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 212 Código Procesal Penal',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'Se cumplieron escrupulosamente los 5 pasos de la técnica: manifestación de laguna mental, sentar bases de autenticidad, exhibición a contraparte, lectura silenciosa y formulación abierta sin lectura en voz alta.',
        },
        pedagogicalKeyTakeaway: 'Jamás permita que el testigo lea el documento en voz alta durante el refrescamiento de memoria. La lectura silenciosa y el retiro inmediato del papel garantizan que la prueba continúe siendo el recuerdo testimonial y no el escrito.',
      },
      {
        id: 'case-u2-05',
        caseNumber: 5,
        title: 'Examen Directo a Médico Forense del IML en Delito de Lesiones Graves',
        tribunal: 'Tribunal de Sentencia de Cojutepeque',
        crimeCharge: 'Lesiones Muy Graves (Art. 144 Pn)',
        proceduralPhase: 'Interrogatorio Directo a Perito Médico Legal',
        scenarioDescription: 'El médico forense explica los hallazgos en la víctima que sufrió traumatismo craneoencefálico y pérdida parcial de la visión.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Doctora, en términos comprensibles para este tribunal, ¿qué tipo de secuela permanente sufrió la víctima a raíz del traumatismo?' },
            { speaker: 'Perito', text: 'La víctima sufrió una contusión retiniana con desprendimiento, lo que produjo una pérdida anatómica y funcional del sesenta por ciento de agudeza visual en el ojo izquierdo.' },
            { speaker: 'Fiscal', text: '¿Y esa lesión produjo una incapacidad para sus labores habituales por más de noventa días?' },
            { speaker: 'Defensa', text: '¡Objeción! Pregunta sugestiva en directo. El fiscal le está dando el plazo de noventa días directamente a la perito.' },
            { speaker: 'Juez', text: 'Ha lugar a la objeción. Pregunte de forma abierta sobre el tiempo de incapacidad determinado en el reconocimiento judicial.' },
            { speaker: 'Fiscal', text: 'Doctora, ¿cuál fue el tiempo total de curación e incapacidad que usted dictaminó?' },
            { speaker: 'Perito', text: 'El tiempo de curación definitivo fue de ciento veinte días continuos de incapacidad laboral absoluta.' },
          ],
          objectionRaised: 'Objeción: Pregunta sugestiva de plazo en interrogatorio directo a perito',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 210 inc. 2 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'Aun tratándose de peritos oficiales, el interrogatorio directo debe formularse mediante preguntas abiertas para que sea el perito quien aporte las cifras y conclusiones médicas objetivas.',
        },
        pedagogicalKeyTakeaway: 'Formule las preguntas de temporalidad con pronombres abiertos: "¿Cuál fue el período?", "¿Cuánto tiempo requirió?", evitando sugerir rangos que provoquen la objeción adversa.',
      },
    ],
  },

  // ==========================================================================
  // UNIDAD 3: EL ARTE DEL CONTRAINTERROGATORIO Y CONTROL DEL TESTIGO HOSTIL
  // ==========================================================================
  {
    id: 'unit-oral-03',
    unitNumber: 3,
    title: 'Unidad 3: El Arte del Contrainterrogatorio y Control del Testigo Hostil',
    subtitle: 'Estructura de preguntas sugestivas de un solo punto fáctico, zonas de control, desacreditación y técnica CACA (Arts. 210 inc. 2 y 211 PrPn)',
    legalFramework: [
      'Art. 210 inc. 2 Código Procesal Penal (Legalidad de las Preguntas Sugestivas en Contraexamen)',
      'Art. 211 Código Procesal Penal (Impugnación de la Credibilidad y Contradicciones)',
      'Sentencia de Casación Penal Ref. 412C2018 (Sala de lo Penal de la Corte Suprema de Justicia)',
      'Sentencia Ref. 104C2019 (Sala de lo Penal CSJ sobre Contradicción con Declaraciones Previas)',
      'Art. 179 Código Procesal Penal (Contradicción y Razón Suficiente en la Sana Crítica)',
    ],
    substantiveTheory: `El contrainterrogatorio es el momento culminante del contradictorio en el modelo acusatorio penal salvadoreño y la manifestación más pura del derecho de defensa y tutela judicial efectiva (Arts. 11 y 12 Cn.). Mientras que el examen directo tiene por objeto construir una historia a través del propio testigo, el contrainterrogatorio persigue tres fines estratégicos excluyentes o complementarios: 1) limitar el alcance lesivo del testimonio de cargo; 2) desacreditar el relato fáctico mediante la demostración de inconsistencias o imposibilidades materiales; o 3) destruir la credibilidad personal del declarante demostrando interés directo, parcialidad, enemistad o antecedentes de mendacidad.

La Regla Cardinal: Preguntas Sugestivas de un Solo Hecho Fáctico (Art. 210 inc. 2 PrPn):
En el contrainterrogatorio, el testigo no es el protagonista; el protagonista absoluto es el abogado que contraexamina. Por ello, el Art. 210 inc. 2 in fine del Código Procesal Penal consagra una excepción expresa a la regla de no sugestividad: "En el contrainterrogatorio se permitirán las preguntas sugestivas". El litigante experimentado jamás formula preguntas abiertas (¿por qué?, ¿cómo?, ¿qué pasó?), pues abriría la puerta para que el testigo hostil repita su relato perjudicial o justifique sus contradicciones. La técnica exige construir afirmaciones fácticas breves, de un solo hecho a la vez, cerradas al final con una etiqueta de asentimiento ("¿Es correcto?", "¿Cierto?", "¿Verdad?", "¿No es así?").

Control del Testigo Hostil o Evasivo:
Los testigos de cargo suelen mostrarse reticentes, hostiles o evasivos ante las preguntas del defensor técnico, intentando dar explicaciones desbordantes en lugar de limitarse a contestar sí o no. El abogado debe emplear las tres técnicas de control forense:
a) Fijación visual y ritmo sostenido: Mantener el contacto visual y formular afirmaciones tajantes y directas.
b) Interrupción cortés pero firme: Cuando el testigo empiece a divagar ("Bueno, lo que yo quise decir..."), el litigante debe intervenir con deferencia: "Señor testigo, mi pregunta fue muy sencilla y únicamente requiere un sí o un no; ya tendrá tiempo con el señor Fiscal para explicar si él lo estima conveniente: ¿estaba usted a más de cuarenta metros del lugar, sí o no?".
c) Amparo judicial: Si el declarante insiste en evadir la respuesta, se solicita formalmente la dirección del debate al Juez presidente (Art. 381 PrPn) para que conmine al deponente a contestar puntualmente lo consultado.

Zonas de Desacreditación del Testimonio:
1. Capacidad de Percepción Sensorial: Factores externos (oscuridad, lluvia torrencial, niebla, distancia, obstáculos visuales, ruidos ensordecedores) o internos (embriaguez, consumo de estupefacientes, miopía no corregida, estrés agudo o terror) que demuestran que el testigo no pudo captar lo que afirma con certeza.
2. Móvil Espurio o Interés Personal: Rencillas vecinales previas, juicios de familia o alimentos pendientes, deudas patrimoniales o beneficios procesales prometidos (criterio de oportunidad del Art. 18 PrPn).
3. Técnica C.A.C.A. de Evidenciación de Contradicciones con Declaraciones Previas:
- Comprometer: Fijar al testigo a la versión que acaba de verter en la vista pública ("Usted declaró hoy en esta sala que el agresor tenía tatuajes en el cuello, ¿correcto?").
- Acreditar: Hacer que el testigo reconozca que cuando declaró anteriormente dijo toda la verdad y firmó el documento ("Usted fue entrevistado horas después por la policía, ¿cierto? Y usted juró decir la verdad, ¿verdad? Y firmó esa hoja de su puño y letra, ¿correcto?").
- Confrontar: Poner a la vista el documento a la contraparte, exhibirlo al testigo y leer textualmente el pasaje idéntico ("Léame lo que dice el renglón ocho: 'El atacante no tenía ningún tatuaje visible'").
- Acabar: No formular jamás la pregunta de más ("¿Por qué mintió hoy?"). Dejar la contradicción expuesta para ser explotada con demoledora fuerza lógica en el alegato de clausura.`,
    proceduralTechniques: [
      'Regla de oro: Empleo exclusivo de preguntas sugestivas de un solo hecho fáctico verificable.',
      'Mantenimiento del control del testigo hostil o evasivo mediante conminación judicial.',
      'Prohibición absoluta de formular "la pregunta de más" o inquirir por explicaciones o motivos.',
      'Desacreditación metódica por falta de percepción sensorial (distancia, oscuridad, embriaguez).',
      'Desacreditación por móvil espurio, enemistad capital, parentesco o interés pecuniario.',
    ],
    solvedCases: [
      {
        id: 'case-u3-01',
        caseNumber: 1,
        title: 'Contraexamen por Imposibilidad de Percepción Sensorial Nocturna',
        tribunal: 'Tribunal Primero de Sentencia de Santa Ana',
        crimeCharge: 'Homicidio Agravado Tentado (Art. 129 Pn)',
        proceduralPhase: 'Contrainterrogatorio al Testigo Presencial de Cargo',
        scenarioDescription: 'El testigo afirma haber identificado con nitidez el rostro del imputado disparando a la medianoche en una calle de tierra.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Señor testigo, los hechos ocurrieron a las doce y media de la noche, ¿cierto?' },
            { speaker: 'Testigo', text: 'Sí, a esa hora fue.' },
            { speaker: 'Defensa', text: 'A esa hora no había luz solar, ¿es correcto?' },
            { speaker: 'Testigo', text: 'Pues claro, era de noche.' },
            { speaker: 'Defensa', text: 'El poste de alumbrado eléctrico más cercano tenía la bombilla quemada, ¿verdad?' },
            { speaker: 'Testigo', text: 'Bueno, sí, estaba apagada la lámpara.' },
            { speaker: 'Defensa', text: 'Y usted se encontraba dentro de su vivienda detrás de una ventana con celosías de vidrio polarizado, ¿correcto?' },
            { speaker: 'Fiscal', text: '¡Objeción! Pregunta sugestiva. El defensor está poniendo palabras en la boca del testigo.' },
            { speaker: 'Juez', text: 'No ha lugar a la objeción fiscal. Es contrainterrogatorio y el Art. 210 inc. 2 PrPn autoriza plenamente la formulación de preguntas sugestivas a la contraparte. Responda el testigo.' },
            { speaker: 'Testigo', text: 'Sí... estaba detrás de las celosías polarizadas.' },
            { speaker: 'Defensa', text: 'Y la distancia entre esa ventana y la calle es de más de cincuenta metros, ¿cierto?' },
            { speaker: 'Testigo', text: 'Aproximadamente, sí.' },
          ],
          objectionRaised: 'Objeción fiscal infundada por uso de preguntas sugestivas en contrainterrogatorio',
          partyObjecting: 'Fiscal',
          legalBasis: 'Art. 210 inc. 2 PrPn',
          judgeRuling: 'NO HA LUGAR',
          judicialRationale: 'La sugestividad es consustancial al contrainterrogatorio para verificar la verosimilitud de la declaración. Pretender prohibir preguntas sugestivas en el contraexamen anula el derecho a controvertir la prueba.',
        },
        pedagogicalKeyTakeaway: 'Encadene proposiciones fácticas sencillas y evidentes (medianoche -> sin luz solar -> bombilla quemada -> vidrio polarizado -> 50 metros). El tribunal deducirá por sí mismo que la identificación era físicamente imposible.',
      },
      {
        id: 'case-u3-02',
        caseNumber: 2,
        title: 'Desacreditación de Testigo de Cargo por Móvil Espurio y Litigio Previo',
        tribunal: 'Tribunal Segundo de Sentencia de San Salvador',
        crimeCharge: 'Amenazas con Agravación Especial (Art. 155 Pn)',
        proceduralPhase: 'Contrainterrogatorio de la Defensa',
        scenarioDescription: 'El testigo de cargo afirma que el acusado lo amenazó de muerte de forma espontánea. La defensa busca evidenciar una disputa patrimonial de linderos.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Don Mario, usted es vecino colindante de mi representado desde hace diez años, ¿cierto?' },
            { speaker: 'Testigo', text: 'Sí, desgraciadamente sí.' },
            { speaker: 'Defensa', text: 'Usted actualmente tiene una demanda civil de deslinde y amojonamiento en contra de mi mandante en el Juzgado de lo Civil, ¿verdad?' },
            { speaker: 'Testigo', text: 'Mire, lo que pasa es que él se metió en mi terreno y me robó tres metros de tierra...' },
            { speaker: 'Defensa', text: 'Don Mario, mi pregunta fue concreta: ¿existe o no existe esa demanda civil abierta entre ustedes dos?' },
            { speaker: 'Testigo', text: 'Sí, existe.' },
            { speaker: 'Defensa', text: 'Y en ese proceso civil, de perderlo usted, tendría que pagarle quince mil dólares en concepto de costas y daños, ¿es correcto?' },
            { speaker: 'Testigo', text: 'Eso pretende él, pero no va a ganar.' },
            { speaker: 'Defensa', text: 'Y si mi mandante fuera enviado a prisión hoy, el proceso civil se suspendería indefinidamente, ¿no es así?' },
            { speaker: 'Fiscal', text: '¡Objeción! Pregunta capciosa y conclusiva sobre derecho procesal civil.' },
            { speaker: 'Juez', text: 'Ha lugar a la objeción respecto a la última pregunta. El testigo lego no tiene por qué conocer los efectos de prejudicialidad o suspensión civil. Reformule sin exigir conclusiones procesales.' },
            { speaker: 'Defensa', text: 'Con la existencia de la demanda civil abierta por quince mil dólares, no más preguntas, su Señoría.' },
          ],
          objectionRaised: 'Objeción: Pregunta conclusiva sobre consecuencias jurídicas procesales en contraexamen',
          partyObjecting: 'Fiscal',
          legalBasis: 'Art. 209 y 210 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'Aunque en contraexamen se permiten preguntas incisivas sobre interés personal, no se puede forzar al declarante lego a interpretar disposiciones complejas de prejudicialidad civil.',
        },
        pedagogicalKeyTakeaway: 'Establezca el motivo espurio con hechos duros (demanda abierta, monto reclamado, enemistad manifiesta). La conclusión sobre la conveniencia de la condena penal déjela para su alegato final.',
      },
      {
        id: 'case-u3-03',
        caseNumber: 3,
        title: 'Dominio y Control de Testigo Hostil que Rehúye Responder Monosílabos',
        tribunal: 'Tribunal Tercero de Sentencia de San Salvador',
        crimeCharge: 'Extorsión (Art. 2 y 3 Ley Especial Contra la Extorsión)',
        proceduralPhase: 'Control de Testigo Evasivo en Vista Pública',
        scenarioDescription: 'El testigo clave rehúsa responder directamente a la defensa, intentando dar discursos sobre su sufrimiento.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Señor testigo, usted no vio quién dejó el anónimo bajo la puerta de su negocio, ¿correcto?' },
            { speaker: 'Testigo', text: 'Es que ustedes los abogados defensores quieren confundir a la gente buena, nosotros los comerciantes honrados trabajamos de sol a sol para que vengan delincuentes...' },
            { speaker: 'Defensa', text: 'Señor Juez, con todo respeto solicito la dirección del debate conforme al Art. 381 PrPn. El testigo se niega a responder la pregunta fáctica y emite juicios ofensivos hacia la defensa técnica.' },
            { speaker: 'Juez', text: 'Señor testigo, modere su conducta en sala. Usted está bajo juramento y su obligación legal es contestar con veracidad y precisión las preguntas que le formule tanto la Fiscalía como la Defensa. Conteste si vio o no vio a la persona que dejó el anónimo.' },
            { speaker: 'Testigo', text: 'No, no lo vi directamente.' },
            { speaker: 'Defensa', text: 'Muchas gracias. Y cuando la policía le mostró un álbum fotográfico, en ese álbum no figuraba la fotografía de mi cliente, ¿cierto?' },
            { speaker: 'Testigo', text: 'No figuraba.' },
          ],
          objectionRaised: 'Incidente de control de testigo hostil y solicitud de dirección del debate',
          partyObjecting: 'Defensa',
          legalBasis: 'Arts. 209, 381 y 382 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'El tribunal tiene la potestad y deber disciplinario de exigir al testigo que deponga de manera ordenada y respetuosa, respondiendo sin evasivas a los reactivos legítimos de las partes.',
        },
        pedagogicalKeyTakeaway: 'No se enganche en discusiones personales con el declarante. Ante la evasiva sistemática, mantenga la serenidad y solicite formalmente el auxilio del Juez presidente con cita del Art. 381 PrPn.',
      },
      {
        id: 'case-u3-04',
        caseNumber: 4,
        title: 'Contraexamen a Perito Químico por Falta de Prueba Instrumental Confirmatoria',
        tribunal: 'Tribunal Cuarto de Sentencia de San Salvador',
        crimeCharge: 'Tráfico Ilícito de Drogas (Art. 33 Ley Reguladora de las Drogas)',
        proceduralPhase: 'Contrainterrogatorio a Perito Químico de la PNC',
        scenarioDescription: 'La defensa cuestiona que la droga decomisada no fue sometida a cromatografía de gases para determinar su grado de pureza.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Licenciada, la prueba que usted practicó a la sustancia blanca fue una prueba colorimétrica presuntiva con Tiocianato de Cobalto, ¿cierto?' },
            { speaker: 'Perito', text: 'Sí, fue una prueba analítica de campo y laboratorio estándar.' },
            { speaker: 'Defensa', text: 'Esa prueba colorimétrica es de carácter presuntivo, no confirmatorio, ¿es correcto?' },
            { speaker: 'Perito', text: 'Es una prueba de orientación ampliamente aceptada.' },
            { speaker: 'Defensa', text: 'Licenciada, le pregunté si es presuntiva o confirmatoria.' },
            { speaker: 'Perito', text: '...Es presuntiva.' },
            { speaker: 'Defensa', text: 'Y en el laboratorio central de la policía cuentan con equipo de Cromatografía de Gases acoplado a Espectrometría de Masas, ¿verdad?' },
            { speaker: 'Perito', text: 'Sí, contamos con ese equipo.' },
            { speaker: 'Defensa', text: 'Y a la sustancia incautada en este caso particular no se le practicó dicho análisis confirmatorio instrumental, ¿cierto?' },
            { speaker: 'Perito', text: 'No se le practicó por falta de reactivos en ese momento.' },
            { speaker: 'Defensa', text: 'Por lo tanto, usted no puede determinar con exactitud el porcentaje de pureza de la muestra analizada, ¿correcto?' },
            { speaker: 'Perito', text: 'Es correcto.' },
          ],
          objectionRaised: 'Interrogatorio de desacreditación metodológica de peritaje químico sin objeciones procedentes',
          partyObjecting: 'Fiscal',
          legalBasis: 'Arts. 226, 236 y 210 inc. 2 PrPn',
          judgeRuling: 'NO HA LUGAR',
          judicialRationale: 'La defensa tiene pleno derecho a evidenciar los vacíos metodológicos o la falta de pruebas confirmatorias de mayor rigor técnico para socavar el valor convictivo del dictamen pericial.',
        },
        pedagogicalKeyTakeaway: 'Ataque el método científico y no a la persona del perito. Demostrar que el peritaje se quedó en una fase presuntiva sin confirmación analítica siembra una poderosa duda razonable.',
      },
      {
        id: 'case-u3-05',
        caseNumber: 5,
        title: 'Desarticulación de Testigo de Coartada Mediante Inconsistencias Temporales',
        tribunal: 'Tribunal Primero de Sentencia de San Salvador',
        crimeCharge: 'Homicidio Agravado (Art. 129 Pn)',
        proceduralPhase: 'Contrainterrogatorio de la Fiscalía a Testigo de Descargo',
        scenarioDescription: 'Un amigo del acusado testifica que el imputado estuvo con él viendo un partido de fútbol en Santa Tecla a la hora exacta en que se cometió el crimen en Soyapango.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Señor testigo, usted afirma que el acusado llegó a su casa a las siete de la noche en punto, ¿cierto?' },
            { speaker: 'Testigo', text: 'Sí, exactamente a las siete.' },
            { speaker: 'Fiscal', text: 'Y que se quedaron viendo un partido de la Liga Española que inició a las siete y media, ¿correcto?' },
            { speaker: 'Testigo', text: 'Así fue.' },
            { speaker: 'Fiscal', text: 'Usted sabe que ese partido se jugó en Madrid, España, ¿verdad?' },
            { speaker: 'Testigo', text: 'Sí, jugaba el Real Madrid.' },
            { speaker: 'Fiscal', text: '¿Sabe usted que la diferencia horaria entre Madrid y San Salvador es de ocho horas?' },
            { speaker: 'Defensa', text: '¡Objeción! Pregunta impertinente y fuera del objeto de la prueba.' },
            { speaker: 'Juez', text: 'No ha lugar a la objeción de la defensa. La Fiscalía está contrastando la verosimilitud de la coartada temporal del testigo frente a datos cronológicos objetivos de dominio público. Responda.' },
            { speaker: 'Testigo', text: 'Bueno... no me fijé en la diferencia de horarios.' },
            { speaker: 'Fiscal', text: 'Por lo tanto, si el partido se jugó a las nueve de la noche en Madrid, en El Salvador eran la una de la tarde y no las siete de la noche, ¿no es así?' },
            { speaker: 'Testigo', text: '...No sé qué decirle.' },
          ],
          objectionRaised: 'Objeción: Cuestionamiento de pertinencia sobre husos horarios desestimado',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 177 y 210 inc. 2 PrPn',
          judgeRuling: 'NO HA LUGAR',
          judicialRationale: 'La fiscalía puede emplear hechos notorios y máximas de la experiencia geográfica para demostrar la imposibilidad fáctica de una coartada prefabricada por la defensa.',
        },
        pedagogicalKeyTakeaway: 'Las coartadas falsas se destruyen en los detalles temporales y espaciales. Verifique horas de transmisiones, condiciones del tráfico y distancias kilométricas reales.',
      },
    ],
  },

  // ==========================================================================
  // UNIDAD 4: RÉGIMEN TAXATIVO DE OBJECIONES PROCESALES
  // ==========================================================================
  {
    id: 'unit-oral-04',
    unitNumber: 4,
    title: 'Unidad 4: Régimen Taxativo de Objeciones Procesales (Arts. 209-212 PrPn)',
    subtitle: 'Mecánica de objeción instantánea, fundamentación concisa, tipologías prohibidas y trámite de protesta para Casación (Arts. 209, 210, 211, 212, 469 PrPn)',
    legalFramework: [
      'Art. 209 Código Procesal Penal (Reglas de Interrogatorio y Pertinencia de la Prueba)',
      'Art. 210 Código Procesal Penal (Prohibición Taxativa de Preguntas Capciosas y Sugestivas)',
      'Art. 211 Código Procesal Penal (Objeciones e Incidentes en Declaraciones)',
      'Art. 212 Código Procesal Penal (Límites en el Uso de Declaraciones Previas)',
      'Art. 469 Código Procesal Penal (Requisito Indispensable de Protesta Previa para Casación)',
    ],
    substantiveTheory: `Las objeciones son el mecanismo procesal de saneamiento preventivo por excelencia en el juicio oral penal salvadoreño. Constituyen la herramienta a través de la cual los litigantes ejercen el control bilateral e inmediato de la legalidad de la prueba testimonial y pericial en el momento exacto en que se produce en estrado. No se trata de un ejercicio de elocuencia oratoria, agresión al colega o interrupción maliciosa, sino de un acto procesal reglado cuya finalidad estricta es impedir que ingrese al acervo de valoración de los jueces información distorsionada, engañosa, impertinente, sugestiva prohibida o legalmente viciada.

Mecánica Operativa de la Objeción Exitosa:
Para que una objeción sea admisible y eficaz en los tribunales salvadoreños, debe reunir tres requisitos inexcusables:
1. Oportunidad e Inmediatez: La objeción debe interponerse antes de que el testigo comience a responder ("¡Objeción!"). Si el testigo emite su respuesta total o parcialmente antes de la objeción, el derecho precluye por consentimiento tácito, salvo que el abogado solicite de inmediato al tribunal que se tenga por no dicha la frase y no sea valorada en sentencia.
2. Fundamentación Concisa y Específica: El litigante debe expresar en un máximo de dos segundos la causal legal concreta y la norma que la sustenta: "Objeción, su Señoría: Pregunta capciosa, Art. 210 inc. 2 PrPn". Los tribunales de sentencia sancionan y reprenden las denominadas "objeciones parlantes" o argumentativas en las que el abogado discursea para soplarle la respuesta a su propio testigo.
3. Decisión Judicial Inmediata: El Juez presidente del tribunal resolverá de inmediato: "Ha Lugar" (la pregunta se expulsa y no se responde, o se ordena reformular) o "No Ha Lugar" (la pregunta es legal y el testigo está obligado a contestar).

Catálogo Taxativo de Preguntas Objetables en El Salvador:
- Sugestiva (Art. 210 inc. 2 PrPn): Encierra la respuesta en el enunciado. Prohibida en examen directo y re-directo; permitida en contrainterrogatorio y contra-examen.
- Capciosa (Art. 210 inc. 2 PrPn): Formulada con engaño, trampa o mala fe, o que da por sentado un hecho falso no admitido por el declarante ("¿A qué hora guardó la pistola que usó para robar?"). PROHIBIDA ABSOLUTAMENTE tanto en directo como en contrainterrogatorio.
- Impertinente o Irrelevante (Art. 209 PrPn): Carece de conexidad con los hechos contenidos en el auto de apertura a juicio; desvía el debate y dilata innecesariamente la audiencia.
- Compuesta (Art. 210 inc. 2 PrPn): Contiene dos o más proposiciones fácticas distintas en un solo reactivo, generando indefensión y ambigüedad.
- Conclusiva o de Opinión (Art. 209 PrPn): Solicita juicios valorativos o periciales a un testigo lego, invadiendo la potestad del tribunal o de los peritos acreditados.
- Repetitiva o Ya Contestada (Art. 210 inc. 2 PrPn): Reitera un hecho que el testigo ya contestó de forma clara, con el exclusivo afán de hostigar o buscar contradicción forzada.
- Especulativa o Hipotética (Art. 209 PrPn): Pide al declarante que imagine supuestos inexistentes ("¿Qué hubiera pasado si...?").

El Trámite Preceptivo de la Protesta para Casación (Art. 469 PrPn):
Cuando un tribunal de sentencia desestima indebidamente una objeción trascendental ("No ha lugar") y permite el ingreso de una prueba ilegal o de una pregunta lesiva, el agravio procesal queda configurado. Sin embargo, conforme al Art. 469 del Código Procesal Penal, para que la Sala de lo Penal de la Corte Suprema de Justicia pueda conocer de ese vicio formal en el Recurso de Casación, es REQUISITO INDISPENSABLE que el litigante haya formulado oportunamente PROTESTA DE RECURRIR EN CASACIÓN en el acta de la audiencia.
Fórmula formal: "Hago formal protesta por vulneración a las garantías del juicio y me reservo el derecho de recurrir en casación conforme al Art. 469 PrPn". Si se omite la protesta en la vista pública, el vicio queda convalidado y la casación será declarada inadmisible de plano.`,
    proceduralTechniques: [
      'Inmediatez de la interposición: objeción antes de que el declarante emita la primera sílaba.',
      'Fundamentación telegráfica y precisa: "Objeción + Causal Legal + Disposición Procesal".',
      'Evitación de objeciones argumentativas o discursos distractores no admitidos por el tribunal.',
      'Diferenciación entre preguntas capciosas (engañosas) y sugestivas (orientativas permitidas en contra).',
      'Formulación inmediata de la Protesta Formal para Casación (Art. 469 PrPn) ante rechazo lesivo.',
    ],
    solvedCases: [
      {
        id: 'case-u4-01',
        caseNumber: 1,
        title: 'Objeción a Pregunta Capciosa con Presuposición Falsa en Audiencia',
        tribunal: 'Tribunal Primero de Sentencia de San Salvador',
        crimeCharge: 'Homicidio Agravado (Art. 129 Pn)',
        proceduralPhase: 'Contrainterrogatorio de la Fiscalía a Testigo de la Defensa',
        scenarioDescription: 'El fiscal formula una pregunta capciosa asumiendo que el testigo modificó la escena del crimen, hecho jamás admitido por el deponente.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Señor testigo, después de que usted limpió los rastros de sangre del piso de la sala, ¿a dónde fue a botar el trapeador?' },
            { speaker: 'Defensa', text: '¡Objeción, su Señoría! Pregunta capciosa y lesiva de la lealtad procesal (Art. 210 inc. 2 PrPn). Mi representado jamás ha admitido haber limpiado sangre ni haber tomado un trapeador.' },
            { speaker: 'Juez', text: 'Ha lugar a la objeción de la defensa. Señor Fiscal, la pregunta contiene un artificio tramposo que presupone un hecho fáctico altamente incriminatorio no incorporado legítimamente por el declarante. Se prohíbe la formulación capciosa en cualquier fase del juicio.' },
            { speaker: 'Fiscal', text: 'Entendido. Pregunto: ¿Realizó usted alguna labor de aseo en la vivienda esa noche?' },
            { speaker: 'Testigo', text: 'Ninguna, señor, yo me salí corriendo a pedir auxilio.' },
          ],
          objectionRaised: 'Objeción: Pregunta capciosa con trampa fáctica no admitida',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 210 inc. 2 Código Procesal Penal',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'Las preguntas capciosas violan el debido proceso y la buena fe procesal porque intentan engañar al deponente induciéndolo a admitir una premisa falsa oculta en la interrogante.',
        },
        pedagogicalKeyTakeaway: 'Detecte las trampas fácticas en las preguntas de la contraparte. Si la pregunta asume como cierto un hecho que no ha sido declarado previamente, objétela inmediatamente como "capciosa".',
      },
      {
        id: 'case-u4-02',
        caseNumber: 2,
        title: 'Objeción a Pregunta Compuesta Multifactorial en Examen Directo',
        tribunal: 'Tribunal Segundo de Sentencia de Santa Ana',
        crimeCharge: 'Extorsión Agravada (Art. 2 y 3 Ley Especial Contra la Extorsión)',
        proceduralPhase: 'Interrogatorio Directo Fiscal a Víctima Clave',
        scenarioDescription: 'La Fiscalía interroga a la víctima combinando tres acciones en un solo enunciado complejo.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Clave Dinamarca, ¿usted vio cuando los dos sujetos llegaron al taller, le apuntaron con un arma de fuego en el pecho y le exigieron la suma de cincuenta dólares mensuales en nombre de la pandilla?' },
            { speaker: 'Defensa', text: '¡Objeción! Pregunta compuesta conforme al Art. 210 inc. 2 del Código Procesal Penal. Incorpora tres hechos fácticos autónomos en un solo bloque interrogativo.' },
            { speaker: 'Juez', text: 'Ha lugar a la objeción. La pregunta aglutina la llegada al taller, la amenaza armada y la exigencia monetaria. Si el testigo responde "sí", no habrá certeza de a cuál de los extremos se refiere. Desglose su interrogatorio, señor Fiscal.' },
            { speaker: 'Fiscal', text: 'Bien, su Señoría. Clave Dinamarca, ¿quiénes llegaron a su taller ese día?' },
            { speaker: 'Testigo', text: 'Llegaron dos muchachos jóvenes.' },
          ],
          objectionRaised: 'Objeción: Pregunta compuesta multifactorial',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 210 inc. 2 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'Las preguntas compuestas confunden al deponente y generan registros ambiguos en el acta de vista pública, impidiendo un control racional de congruencia probatoria.',
        },
        pedagogicalKeyTakeaway: 'Formule siempre una sola acción fáctica por pregunta. La sencillez gramatical es la mejor aliada para evitar objeciones por pregunta compuesta.',
      },
      {
        id: 'case-u4-03',
        caseNumber: 3,
        title: 'Objeción a Pregunta Conclusiva Dirigida a Testigo Lego Presencial',
        tribunal: 'Tribunal Tercero de Sentencia de San Salvador',
        crimeCharge: 'Homicidio Culposo en Accidente de Tránsito (Art. 132 Pn)',
        proceduralPhase: 'Interrogatorio a Testigo Ocular Lego',
        scenarioDescription: 'El querellante intenta que un transeúnte determine la velocidad técnica exacta a la que circulaba el microbús colisionado.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Don José, en su concepto técnico, ¿el microbús excedía los ochenta kilómetros por hora y por ende el conductor violó la distancia prudencial de frenado hidráulico?' },
            { speaker: 'Fiscal', text: '¡Objeción! Pregunta conclusiva y de opinión experta reservada a peritos en accidentología vial (Art. 209 PrPn). Don José es un zapatero que observó el hecho, no un perito acreditado.' },
            { speaker: 'Juez', text: 'Ha lugar a la objeción de la Fiscalía. Los testigos comunes deponen sobre hechos percibidos a través de los sentidos (ej. si el vehículo iba rápido o lento, o si escuchó un frenazo), pero no sobre velocidades matemáticas ni sistemas hidráulicos. Reformule el defensor.' },
            { speaker: 'Defensa', text: 'Don José, ¿qué observó sobre el desplazamiento del vehículo instantes previos al impacto?' },
            { speaker: 'Testigo', text: 'Vi que venía bastante rápido y que rechinaron las llantas.' },
          ],
          objectionRaised: 'Objeción: Pregunta conclusiva que exige juicio pericial a un testigo lego',
          partyObjecting: 'Fiscal',
          legalBasis: 'Arts. 209 y 226 PrPn',
          judgeRuling: 'HA LUGAR',
          judicialRationale: 'El testigo común solo aporta hechos históricos percibidos. Las conclusiones causales y valoraciones técnicas corresponden con exclusividad a los peritos juramentados.',
        },
        pedagogicalKeyTakeaway: 'Distinga claramente entre impresiones sensoriales ordinarias (velocidad aparente, estado de ánimo visible) y conclusiones técnicas especializadas.',
      },
      {
        id: 'case-u4-04',
        caseNumber: 4,
        title: 'Objeción Desestimada (No Ha Lugar) a Pregunta Sugestiva en Contrainterrogatorio',
        tribunal: 'Tribunal Primero de Sentencia de San Salvador',
        crimeCharge: 'Robo Agravado (Art. 213 Pn)',
        proceduralPhase: 'Contrainterrogatorio de la Defensa a Testigo de Cargo',
        scenarioDescription: 'El defensor somete a contraexamen a un policía captor y la fiscalía objeta por considerar que la pregunta sugiere la respuesta.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Oficial, cuando usted interceptó al joven en la esquina, él no intentó darse a la fuga, ¿cierto?' },
            { speaker: 'Fiscal', text: '¡Objeción! La pregunta es sugestiva y le dice al declarante lo que debe contestar.' },
            { speaker: 'Juez', text: 'No ha lugar a la objeción fiscal. La representación fiscal olvida que estamos en fase de contrainterrogatorio y que el Art. 210 inc. 2 in fine del Código Procesal Penal autoriza de manera taxativa las preguntas sugestivas para poner a prueba la veracidad del testigo. Oficial, responda.' },
            { speaker: 'Testigo', text: 'Es cierto, el joven no corrió, se quedó parado en la acera.' },
            { speaker: 'Defensa', text: 'Y él colaboró pacíficamente cuando usted le solicitó identificarse con su DUI, ¿verdad?' },
            { speaker: 'Testigo', text: 'Sí, sacó su documento y me lo entregó sin resistencia.' },
          ],
          objectionRaised: 'Objeción fiscal infundada por sugestividad en contrainterrogatorio',
          partyObjecting: 'Fiscal',
          legalBasis: 'Art. 210 inc. 2 PrPn',
          judgeRuling: 'NO HA LUGAR',
          judicialRationale: 'La sugestividad está expresamente admitida por el legislador salvadoreño en el contraexamen como única vía eficaz para controlar testigos reticentes de la contraparte.',
        },
        pedagogicalKeyTakeaway: 'Nunca objete por sugestiva en contrainterrogatorio a menos que la pregunta sea capciosa o impertinente. Conocer la excepción legal del Art. 210 inc. 2 PrPn evita objeciones bochornosas.',
      },
      {
        id: 'case-u4-05',
        caseNumber: 5,
        title: 'Objeción Rechazada y Trámite de Protesta Formal para Recurso de Casación',
        tribunal: 'Tribunal Segundo de Sentencia de San Salvador',
        crimeCharge: 'Tráfico Ilícito de Drogas (Art. 33 Ley Reguladora de las Drogas)',
        proceduralPhase: 'Incidente de Rechazo de Objeción y Reserva de Casación',
        scenarioDescription: 'El juez desestima indebidamente una objeción de la defensa frente a una pregunta que viola el secreto profesional de un abogado que declaró como testigo.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Licenciado, ¿qué confidencias le hizo su cliente en la entrevista privada sobre el escondite del cargamento de droga?' },
            { speaker: 'Defensa', text: '¡Objeción radical! Violación al secreto profesional y deber de abstención consagrado en el Art. 204 PrPn y Art. 12 Cn.' },
            { speaker: 'Juez', text: 'No ha lugar a la objeción. El tribunal estima que el esclarecimiento de la verdad material prevalece. Responda el declarante.' },
            { speaker: 'Defensa', text: 'Señor Juez, en este acto formalizo respetuosa pero enérgica PROTESTA por vulneración flagrante al derecho de defensa, al secreto profesional y al Art. 204 PrPn, solicitando expresamente que conste en acta para la reserva del Recurso de Casación Penal conforme al Art. 469 del Código Procesal Penal.' },
            { speaker: 'Juez', text: 'Señor Secretario, hágase constar en el acta de vista pública la formal protesta formulada por la defensa técnica para los efectos del Art. 469 PrPn.' },
          ],
          objectionRaised: 'Objeción desestimada con interposición de Protesta Formal para Casación',
          partyObjecting: 'Defensa',
          legalBasis: 'Arts. 204 y 469 Código Procesal Penal',
          judgeRuling: 'NO HA LUGAR (CON PROTESTA REGISTRADA)',
          judicialRationale: 'La protesta en acta es el requisito procesal sine qua non para habilitar la vía de casación penal ante la Sala de lo Penal de la Corte Suprema de Justicia frente a resoluciones judiciales erróneas.',
        },
        pedagogicalKeyTakeaway: 'Si el juez comete un error procesal que vulnera derechos constitucionales y rechaza su objeción, no guarde silencio: formule de inmediato la protesta del Art. 469 PrPn para blindar su recurso de casación.',
      },
    ],
  },

  // ==========================================================================
  // UNIDAD 5: IMPUGNACIÓN CON DECLARACIONES PREVIAS Y EVIDENCIA MATERIAL
  // ==========================================================================
  {
    id: 'unit-oral-05',
    unitNumber: 5,
    title: 'Unidad 5: Impugnación con Declaraciones Previas & Incorporación de Evidencia Material',
    subtitle: 'Técnica CACA de confrontación con entrevistas policiales/fiscales, autenticación de armas, documentos y cadena de custodia (Arts. 212, 243, 244, 250 PrPn)',
    legalFramework: [
      'Art. 212 Código Procesal Penal (Uso de Declaraciones Previas para Impugnación de Credibilidad)',
      'Art. 243 Código Procesal Penal (Incorporación y Lectura de Prueba Documental)',
      'Art. 244 Código Procesal Penal (Autenticación y Reconocimiento de Objetos y Evidencias)',
      'Art. 250 Código Procesal Penal (Régimen Legal y Formalidades de la Cadena de Custodia)',
      'Sentencia de Casación Penal Ref. 218C2016 (Sala de lo Penal CSJ sobre Contradicciones)',
    ],
    substantiveTheory: `En el juicio oral moderno no basta con afirmar que un testigo miente o que una prueba física es sospechosa; es imperativo demostrar procesalmente la inconsistencia a través de los canales reglados de la ley adjetiva. La Unidad 5 aborda dos de las destrezas más complejas y de mayor impacto persuasivo en los Tribunales de Sentencia de El Salvador: la impugnación de credibilidad con declaraciones previas (Art. 212 PrPn) y la autenticación e incorporación de evidencia material y cadena de custodia (Arts. 244 y 250 PrPn).

1. Impugnación de Testigos con Declaraciones Previas (Art. 212 PrPn):
Cuando un testigo modifica sustancialmente su versión de los hechos en el estrado respecto a lo que consignó en su denuncia inicial, entrevista fiscal o declaración anticipada, la ley faculta a la contraparte para confrontarlo con su propio dicho previo para destruir su credibilidad ante el tribunal.
El protocolo procesal se rige por la célebre técnica C.A.C.A.:
- COMPROMETER (C): Cerrar la vía de escape del testigo asegurando su afirmación actual en la vista pública ("Usted acaba de afirmar con certeza que el asaltante medía un metro ochenta y tenía barba poblada, ¿es correcto?").
- ACREDITAR (A): Demostrar que la declaración previa fue rendida con garantías de veracidad, sin coacción y cuando los hechos estaban frescos ("Usted denunció este hecho el mismo día ante la FGR, ¿cierto? ¿A usted le leyeron su acta? ¿Estuvo asistido por su abogado? ¿Y estampó su firma voluntariamente al pie?").
- CONFRONTAR (C): Solicitar permiso al Juez presidente para exhibir el acta a la contraparte; acercarse al testigo, marcar el renglón pertinente y pedirle que lea en voz alta exactamente ese pasaje: "Lea por favor el renglón 12... 'El asaltante era de baja estatura, aproximadamente un metro sesenta, y completamente afeitado'".
- ACABAR (A): No pedir explicaciones ni formular preguntas como "¿Por qué cambió su versión?". El testigo intentará justificarse alegando nervios o errores del transcriptor. La contradicción ha quedado sellada en el acta de vista pública y se explotará con demoledora fuerza en el alegato de clausura bajo el principio de no contradicción de la sana crítica (Art. 179 PrPn).

2. Incorporación de Evidencia Material y Objetos del Delito (Art. 244 PrPn):
Las armas, prendas ensangrentadas, teléfonos celulares incautados, envoltorios de droga y dinero en efectivo no hablan por sí mismos; para que ingresen como prueba válida a la vista pública deben ser AUTENTICADOS por un testigo idóneo que los reconozca en estrado:
- Paso 1: Sentar las bases del reconocimiento con el testigo recolector o captor ("¿Qué hizo usted con el arma encontrada en la cintura del imputado? ¿La rotuló? ¿Anotó el número de serie?").
- Paso 2: Solicitar autorización al Juez presidente para romper el precinto de la bolsa de evidencia material frente a las partes.
- Paso 3: Exhibición a la contraparte para garantizar la contradicción procesal.
- Paso 4: Entrega al testigo para reconocimiento: "¿Reconoce usted este objeto? ¿Por qué lo reconoce? ¿Coincide el número de serie y la tarjeta de evidencia con su firma?".
- Paso 5: Petición formal de incorporación al tribunal: "Habiendo sido debidamente autenticada, solicito se tenga por incorporada como evidencia material número uno de conformidad con el Art. 244 PrPn".

3. Cadena de Custodia (Art. 250 PrPn):
La cadena de custodia es la garantía constitucional y legal de identidad e indemnidad de las evidencias desde su hallazgo o incautación hasta su destrucción judicial o devolución. Cualquier ruptura grave e injustificada en los registros de entrega, embalaje defectuoso o sellos vulnerados destruye la fiabilidad probatoria y conduce a la exclusión pericial por falta de certeza material.`,
    proceduralTechniques: [
      'Técnica CACA: 1) Comprometer la versión actual; 2) Acreditar el acta previa; 3) Confrontar leyendo el pasaje; 4) Acabar sin pedir explicaciones.',
      'Autenticación en estrados de evidencia física (armas, vainillas, drogas, dinero) mediante testigo custodio.',
      'Rotura pública y controlada de precintos de seguridad ante los ojos de los jueces de sentencia.',
      'Defensa de la indemnidad de la cadena de custodia (Art. 250 PrPn) y neutralización de objeciones de contaminación.',
      'Incorporación y cotejo de registros telefónicos, extracción digital y bitácoras forenses de antenas.',
    ],
    solvedCases: [
      {
        id: 'case-u5-01',
        caseNumber: 1,
        title: 'Impugnación de Testigo de Cargo por Contradicción Manifiesta en Declaración Previa',
        tribunal: 'Tribunal Primero de Sentencia de San Salvador',
        crimeCharge: 'Homicidio Agravado Tentado (Art. 129 Pn)',
        proceduralPhase: 'Contrainterrogatorio de Impugnación bajo el Art. 212 PrPn',
        scenarioDescription: 'El testigo presencial afirma en juicio que el tirador conducía un sedán rojo, pero en su denuncia policial inicial declaró enfáticamente que viajaba a bordo de una camioneta blanca.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Señor testigo, usted declaró hoy aquí bajo juramento que el tirador escapó a bordo de un automóvil sedán color rojo, ¿es correcto?' },
            { speaker: 'Testigo', text: 'Sí, un sedán rojo, lo vi clarito.' },
            { speaker: 'Defensa', text: 'Usted rindió su entrevista de denuncia el mismo día del hecho en la delegación policial, ¿verdad?' },
            { speaker: 'Testigo', text: 'Sí, esa misma tarde fui.' },
            { speaker: 'Defensa', text: 'Y en esa entrevista le leyeron su declaración antes de firmarla, ¿correcto?' },
            { speaker: 'Testigo', text: 'Sí, me la leyeron y la firmé con mi puño y letra.' },
            { speaker: 'Defensa', text: 'Solicito autorización al Juez para confrontar al testigo con su declaración previa conforme al Art. 212 PrPn... Muestro el folio a la Fiscalía... Me acerco al testigo. Don Manuel, lea por favor en voz alta para este tribunal las dos primeras líneas del folio cuatro.' },
            { speaker: 'Testigo', text: '...Dice: "Observé que el sujeto que realizó los disparos abordó inmediatamente una camioneta cerrada color blanco que lo esperaba en la esquina".' },
            { speaker: 'Defensa', text: 'No más preguntas sobre este punto, su Señoría.' },
          ],
          objectionRaised: 'Impugnación de credibilidad por contradicción con declaración previa cumpliendo técnica CACA',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 212 Código Procesal Penal',
          judgeRuling: 'HA LUGAR A LA CONFRONTACIÓN',
          judicialRationale: 'La demostración de contradicciones sustanciales entre la versión oral en vista pública y las actas previas es una manifestación directa del principio de contradicción probatoria consagrado en el Art. 212 PrPn.',
        },
        pedagogicalKeyTakeaway: 'Note que el defensor terminó diciendo "No más preguntas". Nunca caiga en el error de preguntar "¿Y por qué mintió antes o por qué mintió hoy?". El contraste ya está grabado en el juicio oral.',
      },
      {
        id: 'case-u5-02',
        caseNumber: 2,
        title: 'Incorporación y Autenticación en Estrados de Arma de Fuego Incautada',
        tribunal: 'Tribunal Segundo de Sentencia de San Salvador',
        crimeCharge: 'Tenencia, Portación o Conducción Ilegal de Arma de Fuego (Art. 346-B Pn)',
        proceduralPhase: 'Autenticación de Evidencia Material (Art. 244 PrPn)',
        scenarioDescription: 'La Fiscalía incorpora formalmente una pistola calibre 9 mm incautada en flagrancia mediante el agente captor policial.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Agente, cuando usted decomisó el arma en la cintura del acusado, ¿qué diligencia de rotulación realizó?' },
            { speaker: 'Testigo', text: 'Llené la tarjeta de evidencia número cuatro, anoté marca Smith & Wesson, serie BDH-9412 y coloqué mi firma y código policial en el embalaje plástico térmico sellado.' },
            { speaker: 'Fiscal', text: 'Señor Juez, solicito autorización para que el secretario exhiba la bolsa de evidencia material N° 1 a la defensa y se proceda a su apertura controlada en estrados.' },
            { speaker: 'Juez', text: 'Autorizado. Ábrase el precinto en presencia de las partes.' },
            { speaker: 'Fiscal', text: 'Agente, observe el arma que se le pone a la vista: ¿la reconoce? ¿Por qué la reconoce?' },
            { speaker: 'Testigo', text: 'Sí, la reconozco plenamente: es la misma pistola Smith & Wesson serie BDH-9412 y esta es mi firma estampada en la tarjeta de evidencia original intacta.' },
            { speaker: 'Fiscal', text: 'Señor Juez, de conformidad con el Art. 244 del Código Procesal Penal, solicito se tenga por incorporada como evidencia material número uno.' },
            { speaker: 'Juez', text: 'Habiendo sido autenticada por el órgano de prueba idóneo, se tiene por incorporada formalmente la evidencia material al debate.' },
          ],
          objectionRaised: 'Trámite exitoso de autenticación e incorporación de evidencia material sin objeción',
          partyObjecting: 'Fiscal',
          legalBasis: 'Arts. 244 y 250 PrPn',
          judgeRuling: 'HA LUGAR A LA INCORPORACIÓN',
          judicialRationale: 'La autenticación por el testigo aprehensor mediante verificación de series y tarjetas de custodia satisface plenamente el estándar de mismidad procesal requerido por el Art. 244 PrPn.',
        },
        pedagogicalKeyTakeaway: 'Asegúrese de que el testigo declare primero los datos que le permiten reconocer el objeto (marcas, rayas, serie, sellos) antes de mostrárselo físicamente.',
      },
      {
        id: 'case-u5-03',
        caseNumber: 3,
        title: 'Incorporación de Prueba Documental: Vaciado Telefónico y Bitácora de Mensajes',
        tribunal: 'Tribunal Especializado de Sentencia de San Salvador',
        crimeCharge: 'Extorsión Continuada (Art. 2 y 3 Ley Especial Contra la Extorsión)',
        proceduralPhase: 'Examen de Analista Digital Forense e Incorporación Documental',
        scenarioDescription: 'El analista informático de la FGR autentica la extracción forense de mensajes de texto extorsivos extraídos del teléfono celular incautado.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Fiscal', text: 'Ingeniero, ¿qué software forense utilizó para la extracción física y lógica del dispositivo móvil incautado?' },
            { speaker: 'Perito', text: 'Utilicé la plataforma forense internacional Cellebrite UFED Touch 2, generando un archivo criptográfico hash SHA-256 para garantizar la inalterabilidad de los datos.' },
            { speaker: 'Fiscal', text: '¿Coincidió el valor hash antes y después de la extracción de los mensajes de WhatsApp?' },
            { speaker: 'Perito', text: 'Coincidió al cien por ciento, lo que certifica que no existió manipulación humana ni alteración digital.' },
            { speaker: 'Defensa', text: '¡Objeción! La defensa objeta la incorporación del informe de extracción por considerar que los mensajes de texto violan el derecho al secreto de las telecomunicaciones (Art. 24 Cn.).' },
            { speaker: 'Juez', text: 'No ha lugar a la objeción de la defensa. Consta en el auto de apertura a juicio que la extracción digital fue expresamente autorizada por el Juzgado de Instrucción conforme a los Arts. 200 y 201 PrPn y la Ley Especial para la Intervención de las Telecomunicaciones. Se autoriza la lectura e incorporación de la bitácora.' },
          ],
          objectionRaised: 'Objeción: Cuestionamiento extemporáneo de legalidad de extracción digital forense autorizada judicialmente',
          partyObjecting: 'Defensa',
          legalBasis: 'Arts. 24 Cn., Arts. 200, 201 y 243 PrPn',
          judgeRuling: 'NO HA LUGAR',
          judicialRationale: 'Las extracciones digitales practicadas bajo control judicial previo y con verificación de hashes criptográficos gozan de plena licitud y validez probatoria conforme a la jurisprudencia constitucional y penal salvadoreña.',
        },
        pedagogicalKeyTakeaway: 'En evidencia digital, el valor de comprobación criptográfica (hash SHA-256 o MD5) es la prueba reina de que la información no fue alterada durante el análisis forense.',
      },
      {
        id: 'case-u5-04',
        caseNumber: 4,
        title: 'Defensa de la Cadena de Custodia ante Cuestionamiento de Embalaje por la Defensa',
        tribunal: 'Tribunal Segundo de Sentencia de San Salvador',
        crimeCharge: 'Homicidio Agravado (Art. 129 Pn)',
        proceduralPhase: 'Incidente de Cadena de Custodia sobre Muestra de ADN',
        scenarioDescription: 'La defensa intenta anular una muestra biológica alegando que el sobre de papel manila tenía un doblez que no constaba en el acta inicial.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Señor Juez, solicitamos la exclusión de la muestra biológica recolectada en la camisa de la víctima por evidente ruptura de cadena de custodia (Art. 250 PrPn), dado que la bolsa presenta un doblez en la esquina superior que evidencia manipulación indebida.' },
            { speaker: 'Fiscal', text: 'Con la venia judicial: solicitamos examinar al custodio de evidencias del IML presente en sala para acreditar la trazabilidad.' },
            { speaker: 'Juez', text: 'Proceda la Fiscalía a examinar al custodio.' },
            { speaker: 'Fiscal', text: 'Técnico, ¿este paquete conserva intactos sus sellos térmicos de seguridad numerados 009841 y las firmas de todos los receptores en la hoja de control de custodia?' },
            { speaker: 'Perito', text: 'El precinto de seguridad jamás fue violado; el doblez de la esquina es un pliegue natural por almacenamiento en estantería fría, pero el sello térmico es inviolable y está íntegro.' },
            { speaker: 'Juez', text: 'No ha lugar a la exclusión solicitada por la defensa. Un mero pliegue exterior de almacenaje que no vulnera los precintos térmicos numerados ni los registros de traspaso formal no constituye ruptura de cadena de custodia conforme al Art. 250 PrPn.' },
          ],
          objectionRaised: 'Incidente de exclusión por supuesta ruptura de cadena de custodia desestimado',
          partyObjecting: 'Defensa',
          legalBasis: 'Art. 250 Código Procesal Penal',
          judgeRuling: 'NO HA LUGAR A LA EXCLUSIÓN',
          judicialRationale: 'La jurisprudencia de la Sala de lo Penal de la CSJ establece que solo las irregularidades sustanciales que comprometan la indemnidad o identidad de la muestra biológica provocan la exclusión probatoria; imperfecciones formales menores no invalidan la prueba.',
        },
        pedagogicalKeyTakeaway: 'Para atacar con éxito la cadena de custodia debe demostrarse una alteración material del contenido, rotura de precintos o falta de registro de entrega, no simples arrugas del envoltorio.',
      },
      {
        id: 'case-u5-05',
        caseNumber: 5,
        title: 'Confrontación a Perito Forense con su Propio Dictamen Previo Omitido',
        tribunal: 'Tribunal de Sentencia de Sonsonate',
        crimeCharge: 'Homicidio Culposo (Art. 132 Pn)',
        proceduralPhase: 'Contrainterrogatorio de Impugnación a Médico Forense',
        scenarioDescription: 'El médico forense afirma en juicio que la muerte fue instantánea, pero en su peritaje inicial consignó que la víctima agonizó durante varias horas y tenía un cuadro de hemorragia interna lenta.',
        dialogueIncident: {
          dialogue: [
            { speaker: 'Defensa', text: 'Doctor, usted acaba de asegurar ante este tribunal que la muerte del paciente se produjo de manera fulminante e instantánea en el lugar del hecho, ¿cierto?' },
            { speaker: 'Perito', text: 'Sí, las lesiones torácicas eran incompatibles con la vida.' },
            { speaker: 'Defensa', text: 'Usted practicó la autopsia médico-legal número A-142/2023 sobre el cadáver, ¿correcto?' },
            { speaker: 'Perito', text: 'Ese es mi número de autopsia institucional.' },
            { speaker: 'Defensa', text: 'Y en ese dictamen escrito usted plasmó sus hallazgos histopatológicos oficiales bajo juramento, ¿verdad?' },
            { speaker: 'Perito', text: 'Por supuesto.' },
            { speaker: 'Defensa', text: 'Con la venia del Juez, exhibo el dictamen admitido a la Fiscalía... Me acerco al perito. Doctor, lea el párrafo cuarto de la página tres de su propio dictamen.' },
            { speaker: 'Perito', text: '...Dice: "Se evidencia reacción inflamatoria vital prolongada y hemorragia intratorácica progresiva de al menos cuatro horas de evolución previa al paro cardiorrespiratorio final".' },
            { speaker: 'Defensa', text: 'Por lo tanto, la muerte no fue instantánea, sino de cuatro horas de evolución, tal como usted mismo dictaminó por escrito, ¿es correcto?' },
            { speaker: 'Perito', text: '...Sí, revisando el reporte microscópico, hubo un período agónico de cuatro horas.' },
            { speaker: 'Defensa', text: 'Muchas gracias, doctor. No más preguntas.' },
          ],
          objectionRaised: 'Impugnación de perito forense mediante confrontación con su propio dictamen oficial previo',
          partyObjecting: 'Defensa',
          legalBasis: 'Arts. 212 y 236 Código Procesal Penal',
          judgeRuling: 'HA LUGAR A LA CONFRONTACIÓN',
          judicialRationale: 'La confrontación pericial con el propio dictamen escrito es la vía procesal más eficaz para rectificar omisiones o afirmaciones contradictorias vertidas en la audiencia de vista pública.',
        },
        pedagogicalKeyTakeaway: 'Estudie minuciosamente la letra menuda del informe pericial. Cuando el perito contradice su propio informe técnico, la confrontación textual deja en evidencia la falta de precisión del testimonio oral.',
      },
    ],
  },
];

