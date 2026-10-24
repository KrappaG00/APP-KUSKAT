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
