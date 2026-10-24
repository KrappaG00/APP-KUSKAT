/**
 * csspHealthData.ts
 * Banco de Reactivos Oficiales y Fundamentos Jurídico-Sanitarios para las Juntas de Vigilancia
 * del Consejo Superior de Salud Pública (CSSP) de la República de El Salvador.
 *
 * Regulado por el Art. 68 de la Constitución y el Código de Salud.
 * Total de preguntas: exactamente 200 (40 reactivos por junta: JVPM, JVPO, JVPE, JVPQF, JVPPS).
 */

export interface CsspQuestion {
  id: string;
  juntaId: 'jvpm' | 'jvpo' | 'jvpe' | 'jvpqf' | 'jvpps';
  juntaName: string;
  area: string;
  legalBasis: string;
  statement: string;
  options: Record<string, string>;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  distractorRationale: Record<string, string>;
}

export interface CsspJuntaMeta {
  id: 'jvpm' | 'jvpo' | 'jvpe' | 'jvpqf' | 'jvpps';
  name: string;
  shortName: string;
  profession: string;
  icon: string;
  description: string;
  legalCode: string;
}

export const CSSP_JUNTAS: CsspJuntaMeta[] = [
  {
    id: 'jvpm',
    name: 'Junta de Vigilancia de la Profesión Médica',
    shortName: 'JVPM',
    profession: 'Medicina y Cirugía',
    icon: '🩺',
    description: 'Habilitación, deontología médica, Código de Salud, consentimiento informado y régimen disciplinario.',
    legalCode: 'Código de Salud, Arts. 32 al 45',
  },
  {
    id: 'jvpo',
    name: 'Junta de Vigilancia de la Profesión Odontológica',
    shortName: 'JVPO',
    profession: 'Odontología y Cirugía Bucal',
    icon: '🦷',
    description: 'Farmacología estomatológica, anestésicos locales, bioseguridad, radiología y periodoncia.',
    legalCode: 'Código de Salud, Arts. 46 al 52',
  },
  {
    id: 'jvpe',
    name: 'Junta de Vigilancia de la Profesión en Enfermería',
    shortName: 'JVPE',
    profession: 'Enfermería Profesional',
    icon: '💉',
    description: 'Proceso de Atención de Enfermería (PAE), cálculo y dilución de fármacos, y regla de los 10 correctos.',
    legalCode: 'Código de Salud, Arts. 53 al 59',
  },
  {
    id: 'jvpqf',
    name: 'Junta de Vigilancia de la Profesión Químico-Farmacéutica',
    shortName: 'JVPQF',
    profession: 'Química y Farmacia',
    icon: '💊',
    description: 'Buenas Prácticas de Manufactura (BPM/BPA), farmacovigilancia DNM y control de psicotrópicos.',
    legalCode: 'Ley de Medicamentos y Código de Salud',
  },
  {
    id: 'jvpps',
    name: 'Junta de Vigilancia de la Profesión en Psicología',
    shortName: 'JVPPS',
    profession: 'Psicología Clínica y Social',
    icon: '🧠',
    description: 'Criterios diagnósticos DSM-5-TR, deber legal de denuncia en niñez (Ley Crecer Juntos) y bioética.',
    legalCode: 'Ley del Ejercicio de la Psicología y Art. 68 Cn.',
  },
];

export const CSSP_QUESTIONS_DATA: CsspQuestion[] = [
  {
    "id": "cssp-jvpm-01",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Responsabilidad Legal y Código de Salud",
    "legalBasis": "Código de Salud de El Salvador, Art. 40 y Código Penal, Art. 146.",
    "statement": "Según el Código de Salud de El Salvador, ¿cuál de los siguientes actos constituye una infracción muy grave sancionable con suspensión del ejercicio profesional médico?",
    "options": {
      "A": "Prescribir medicamentos genéricos de calidad comprobada aprobados por la DNM.",
      "B": "Ejercer la profesión médica o realizar procedimientos quirúrgicos especializados amparado únicamente en título de médico general sin acreditación de la especialidad ante la JVPM.",
      "C": "Remitir al paciente a un especialista de segundo nivel cuando el cuadro sobrepasa la capacidad resolutiva.",
      "D": "Solicitar consentimiento informado por escrito antes de una intervención quirúrgica mayor programada."
    },
    "correctAnswer": "B",
    "explanation": "El Código de Salud prohíbe taxativamente ostentarse o ejercer especialidades médicas sin la debida inscripción y acreditación ante la Junta de Vigilancia (usurpación de atribuciones especializadas). La infracción acarrea sanciones de suspensión y responsabilidad penal por mala praxis o intrusismo.",
    "distractorRationale": {
      "A": "La prescripción de medicamentos genéricos bioequivalentes está expresamente promovida por la Ley de Medicamentos.",
      "C": "La referencia oportuna a un nivel de mayor resolución es una obligación deontológica del médico general.",
      "D": "El consentimiento informado es un requisito legal y bioético inexcusable en cirugías mayores."
    }
  },
  {
    "id": "cssp-jvpm-02",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Secreto Profesional y Notificación Obligatoria",
    "legalBasis": "Código de Salud Arts. 136-138 y Ley Especial para la Notificación y Vigilancia Epidemiológica del MINSAL.",
    "statement": "Un médico en una clínica privada diagnostica un caso de Dengue con signos de alarma y sospecha de Cólera. Respecto al deber de secreto profesional y la notificación epidemiológica obligatoria, ¿cuál es la conducta legalmente exigida?",
    "options": {
      "A": "Mantener silencio absoluto amparado en el secreto médico incondicional, sin notificar a ninguna autoridad.",
      "B": "Notificar de inmediato (plazo máximo de 24 horas) a la Unidad de Salud o Sistema Nacional de Vigilancia Epidemiológica (VIGEP) del MINSAL, ya que la salud pública prevalece sobre el secreto médico individual.",
      "C": "Esperar a que el paciente termine su tratamiento ambulatorio para informar al Ministerio de Salud al final del mes.",
      "D": "Publicar el nombre del paciente en redes sociales para advertir a la comunidad."
    },
    "correctAnswer": "B",
    "explanation": "En El Salvador, las enfermedades de notificación obligatoria constituyen una excepción legal al secreto profesional. El médico tiene la obligación legal estricta de reportar a la red de epidemiología del MINSAL para activar los cercos sanitarios y el control de brotes epidémicos.",
    "distractorRationale": {
      "A": "Omitir la notificación de enfermedades de alto riesgo epidemiológico es un delito contra la salud pública tipificado en el Código Penal.",
      "C": "El reporte de enfermedades de vigilancia prioritaria debe ser inmediato (menos de 24 h) para contener brotes.",
      "D": "Vulnera la privacidad y dignidad del paciente garantizada en el Art. 2 de la Constitución."
    }
  },
  {
    "id": "cssp-jvpm-03",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Bioética y Consentimiento Informado en Emergencias",
    "legalBasis": "Código de Salud de El Salvador, Art. 42; Código Civil, Art. 21; y Declaración de Helsinki.",
    "statement": "A la Unidad de Emergencia ingresa un paciente politraumatizado en estado de inconsciencia (Glasgow 6), con hemotórax a tensión masivo y choque hipovolémico que compromete su vida de forma inminente. El paciente no porta identificación ni está acompañado por familiares. En relación con el consentimiento informado, ¿cuál es la conducta médico-legal y bioética que rige?",
    "options": {
      "A": "Diferir la toracostomía con tubo de drenaje pleural hasta localizar a un familiar consanguíneo o representante legal para obtener su firma.",
      "B": "Proceder de inmediato a la intervención quirúrgica de urgencia bajo el principio de estado de necesidad y privilegio terapéutico, dejando constancia detallada en el expediente clínico del riesgo vital inminente.",
      "C": "Solicitar una autorización judicial formal al Juzgado de Paz de turno antes de realizar cualquier procedimiento invasivo.",
      "D": "Rechazar la atención médica por falta de suscripción previa del formulario de exoneración de responsabilidad médica."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 42 del Código de Salud y los principios de bioética médica consagran el estado de necesidad y privilegio terapéutico: ante un peligro grave e inminente para la vida de un paciente incompetente o inconsciente sin familiares presentes, el deber médico primordial es preservar la vida, prescindiendo temporalmente del consentimiento previo y consignándolo en el expediente.",
    "distractorRationale": {
      "A": "Retrasar un procedimiento salvavidas por trámites burocráticos constituye denegación de auxilio y mala praxis médica culposa.",
      "C": "Los tribunales no emiten autorizaciones clínicas de urgencia; la facultad médica de emergencia está normada directamente por el Código de Salud.",
      "D": "Negar la atención de urgencia a una persona en riesgo inminente de muerte viola el deber de auxilio penal y constitucional salvadoreño."
    }
  },
  {
    "id": "cssp-jvpm-04",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Certificación Médica de Defunción y Medicina Forense",
    "legalBasis": "Código de Salud de El Salvador, Art. 43; Ley del Registro del Estado Familiar; y Código Procesal Penal.",
    "statement": "Un médico es llamado a un domicilio particular para extender un certificado de defunción de una persona que fue encontrada en el suelo con una herida contuso-penetrante en tórax. ¿Cuál es la obligación legal ineludible del facultativo según el Código de Salud y las leyes de El Salvador?",
    "options": {
      "A": "Extender de inmediato el certificado de defunción consignando \"paro cardiorrespiratorio\" como causa básica de muerte para facilitar las exequias fúnebres.",
      "B": "Abstenerse categóricamente de certificar la defunción, preservar intacto el escenario del hallazgo y dar aviso urgente a la Fiscalía General de la República (FGR) y Policía Nacional Civil (PNC) para el levantamiento legal de cadáver por el Instituto de Medicina Legal (IML).",
      "C": "Cobrar honorarios de peritaje y permitir a los familiares mover el cuerpo antes de avisar a las autoridades.",
      "D": "Expedir el certificado únicamente si dos vecinos firman como testigos de conocimiento del fallecimiento."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 43 del Código de Salud y el Código Procesal Penal prohíben al médico extender certificado de defunción cuando existan sospechas o evidencias de muerte violenta, traumática, súbita o delictiva. El levantamiento y autopsia médico-legal corresponden exclusivamente al Instituto de Medicina Legal bajo dirección de la FGR.",
    "distractorRationale": {
      "A": "Certificar una muerte violenta como muerte natural constituye falsedad ideológica y encubrimiento de un posible delito de homicidio.",
      "C": "Alterar la escena del hallazgo de un cadáver con lesiones traumáticas contamina la cadena de custodia y entorpece la investigación penal.",
      "D": "Los testigos de conocimiento son una figura notarial de identificación, carente de validez para acreditar causas médico-legales de muerte."
    }
  },
  {
    "id": "cssp-jvpm-05",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Deber Legal de Denuncia en Centros Hospitalarios",
    "legalBasis": "Código Procesal Penal de El Salvador, Art. 265 ord. 1.°; y Código Penal, Art. 175.",
    "statement": "A la sala de urgencias de un hospital arriba un joven de 19 años con dos heridas por proyectil disparado por arma de fuego en extremidad inferior. El paciente suplica al médico tratante que no notifique a las autoridades policiales porque \"fue un accidente entre amigos\". Conforme a la legislación procesal penal de El Salvador, ¿cuál es la responsabilidad del médico?",
    "options": {
      "A": "Respetar el deseo del paciente amparado en la confidencialidad médica y omitir todo reporte policial.",
      "B": "Cumplir con el deber obligatorio de denuncia médica en el término improrrogable de 24 horas ante la FGR o PNC, dado que las lesiones por armas de fuego o delitos de acción pública son de notificación legal inexcusable.",
      "C": "Exigir al paciente que acuda personalmente a la delegación policial tras recibir el alta hospitalaria.",
      "D": "Informar al personal de vigilancia privada del hospital sin asentar registro en el libro de ingresos de emergencia."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 265 ord. 1.° del Código Procesal Penal establece que los médicos, cirujanos, farmacéuticos y demás profesionales de la salud tienen la obligación legal ineludible de denunciar los delitos de acción pública que conozcan al prestar los servicios de su profesión, especialmente lesiones por proyectil de arma de fuego, arma blanca o agresiones sexuales. Su omisión es castigada por el Art. 175 del Código Penal.",
    "distractorRationale": {
      "A": "El deber legal de denuncia de hechos constitutivos de delitos de acción pública prevalece taxativamente sobre el secreto profesional.",
      "C": "El deber de denuncia recae de forma personal y directa sobre el profesional sanitario receptor del caso, no sobre la víctima o paciente.",
      "D": "La notificación debe ser formal y oficial a las autoridades competentes del Estado (FGR o PNC), asentándose debidamente en el expediente."
    }
  },
  {
    "id": "cssp-jvpm-06",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Responsabilidad Penal Médica y Mala Praxis (Art. 146 CP)",
    "legalBasis": "Código Penal de El Salvador, Art. 146 (Homicidio y Lesiones Culposas por Mala Praxis) y Código de Salud Art. 40.",
    "statement": "En el marco del Derecho Penal y Sanitario salvadoreño, ¿cuáles son los cuatro elementos dogmáticos clásicos de la culpa médica que tipifican la responsabilidad culposa por mala praxis facultativa según el Art. 146 del Código Penal?",
    "options": {
      "A": "Impericia (falta total o parcial de conocimientos o habilidad técnica), Imprudencia (actuar temerario e irreflexivo sin tomar precauciones), Negligencia (omisión del deber de cuidado exigible o desatención), e Inobservancia de reglamentos o deberes inherentes al cargo.",
      "B": "Dolo directo, alevosía, premeditación y ensañamiento punitivo.",
      "C": "Fortuna médica, caso fortuito, fuerza mayor y consentimiento tácito.",
      "D": "Ausencia de pago de cuotas gremiales en la asociación médica nacional."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Corresponden a circunstancias agravantes y elementos constitutivos de delitos dolosos graves (homicidio agravado), no a la culpa médica.",
      "C": "Son causales eximentes de responsabilidad civil y penal.",
      "D": "Falta puramente gremial o administrativa interna sin relevancia para el tipo penal de mala praxis."
    },
    "explanation": "El Art. 146 del Código Penal de El Salvador sanciona el homicidio culposo y las lesiones culposas cometidas por culpa profesional médica. La doctrina penal y jurisprudencia de la Sala de lo Penal exigen comprobar la infracción del deber objetivo de cuidado médico manifestado en impericia, imprudencia, negligencia o inobservancia de normas técnicas (lex artis ad hoc), con nexo de causalidad directo con el resultado lesivo."
  },
  {
    "id": "cssp-jvpm-07",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Requisitos Legales de la Prescripción Médica Oficial",
    "legalBasis": "Ley de Medicamentos de El Salvador, Arts. 31 y 32; y Código de Salud, Arts. 38 al 41.",
    "statement": "De acuerdo con la Ley de Medicamentos de El Salvador y las normas de la JVPM, ¿cuál es el requisito formal obligatorio que debe cumplir toda receta médica extendida por un profesional habilitado al prescribir un producto farmacéutico?",
    "options": {
      "A": "Consignar obligatoriamente la Denominación Común Internacional (DCI / nombre genérico) del fármaco, pudiendo sugerir la marca comercial, además de forma farmacéutica, concentración, vía, posología, fecha, firma y sello con número de registro de JVPM.",
      "B": "Escribir exclusivamente en latín clásico sin fecha ni firma para evitar falsificaciones.",
      "C": "Omitir la concentración y dejar que el paciente elija los miligramos en el mostrador.",
      "D": "Prescribir únicamente medicamentos fabricados en el continente europeo."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "El uso de fórmulas arcanas o idiomas muertos sin firma invalida legalmente la prescripción.",
      "C": "Omitir la dosis y concentración constituye una negligencia prescriptiva que propicia intoxicaciones fatales.",
      "D": "La legislación no impone exclusividades geográficas para el registro sanitario de medicamentos autorizados."
    },
    "explanation": "El Art. 32 de la Ley de Medicamentos de El Salvador establece la obligación imperativa de incluir la Denominación Común Internacional (nombre genérico oficial) en toda receta, posibilitando la dispensación informada y el acceso a genéricos bioequivalentes más asequibles. Además, el sello con número de registro de la JVPM autentica la habilitación legal del prescriptor."
  },
  {
    "id": "cssp-jvpm-08",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Omisión de Auxilio y Deber de Socorro",
    "legalBasis": "Código Penal de El Salvador, Art. 175 (Omisión de Auxilio) y Código de Salud Art. 34.",
    "statement": "Un médico que se encuentra fuera de su horario de trabajo presencia en la vía pública un accidente de tránsito grave donde una persona presenta una hemorragia arterial exanguinante. El médico decide retirarse apresuradamente sin prestar auxilio ni llamar a los servicios de socorro. ¿Qué consecuencia legal enfrenta según el Código Penal salvadoreño?",
    "options": {
      "A": "Incurre en el delito de Omisión del Deber de Socorro (Art. 175 CP), agravado por su condición facultativa, sancionado penalmente con prisión e inhabilitación especial del ejercicio profesional por la JVPM.",
      "B": "Ninguna consecuencia legal, pues los médicos solo están obligados a atender si se les cancela una consulta privada en efectivo.",
      "C": "Solo una amonestación verbal en el periódico oficial.",
      "D": "El Código Penal exime a los profesionales sanitarios del auxilio en la vía pública."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "El deber de socorro ante riesgo vital inminente es imperativo y prioritario frente al lucro o relación contractual.",
      "C": "La sanción penal incluye inhabilitación del ejercicio y prisión, superando una simple amonestación administrativa.",
      "D": "El Código Penal agrava expresamente la responsabilidad de médicos y sanitarios en situaciones de auxilio."
    },
    "explanation": "El Art. 175 del Código Penal tipifica la omisión de auxilio a persona desamparada en peligro grave y manifiesto. Si quien incurre en la omisión es un profesional de la salud con deber cualificado de socorro y conocimientos específicos, la conducta constituye una falta grave contra los deberes humanos y sanitarios fundamentales, acarreando penas privativas de libertad e inhabilitación por la Junta de Vigilancia."
  },
  {
    "id": "cssp-jvpm-09",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Falsedad Ideológica en Certificados Médicos de Incapacidad",
    "legalBasis": "Código Penal de El Salvador, Art. 287 (Falsedad Documental) y Código de Salud Art. 44.",
    "statement": "Un médico emite una constancia de incapacidad laboral de 15 días a favor de un amigo que no padece ninguna patología, cobrando honorarios y certificando falsamente que guardará \"reposo absoluto por bronconeumonía grave\". ¿Qué delito penal comete el facultativo según la ley salvadoreña?",
    "options": {
      "A": "Falsedad Ideológica y/o Emisión de Certificado Médico Falso (Art. 287 CP), acarreando prisión de 3 a 6 años, suspensión de la licencia médica por la JVPM y despido justificado.",
      "B": "Acto de beneficencia solidaria amparado en el secreto profesional.",
      "C": "Falta menor prescrita en 24 horas que no requiere investigación.",
      "D": "El Código Penal autoriza constancias falsas si el paciente es familiar consanguíneo."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La mentira documental dolosa jamás constituye un acto ético de beneficencia.",
      "C": "Los delitos de falsedad documental son delitos formales graves que no prescriben en 24 horas.",
      "D": "El vínculo familiar o de amistad no exime del deber de veracidad testimonial y pericial."
    },
    "explanation": "El certificado médico es un documento público o auténtico que da fe de hechos relativos a la salud de las personas. Asentar hechos falsos (enfermedades inexistentes para justificar ausencias laborales o defraudaciones al ISSS/empresas) constituye el delito de falsedad ideológica o expedición de certificados falsos (Art. 287 CP), con sanción privativa de libertad y cancelación del registro profesional por la JVPM."
  },
  {
    "id": "cssp-jvpm-10",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Objeción de Conciencia y Límites en Urgencias Vitales",
    "legalBasis": "Código de Salud de El Salvador, Art. 36 y Jurisprudencia Constitucional de la Sala de lo Constitucional.",
    "statement": "Un médico invoca objeción de conciencia moral o religiosa para negarse a realizar una maniobra médica o quirúrgica de emergencia urgente a una paciente en estado de choque hipovolémico por hemorragia obstétrica, no existiendo ningún otro facultativo disponible en la localidad. ¿Cuál es el límite bioético y legal de la objeción de conciencia?",
    "options": {
      "A": "La objeción de conciencia es inoperante e improcedente ante situaciones de urgencia vital o riesgo grave e inminente para la vida o la salud del paciente cuando no exista personal sustituto inmediato.",
      "B": "La objeción de conciencia es un derecho absoluto e ilimitado que permite dejar morir al paciente sin prestar auxilio.",
      "C": "El médico puede retirarse del hospital si reza una oración antes de abandonar el quirófano.",
      "D": "La objeción de conciencia solo aplica a los odontólogos y no a los médicos."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Ningún derecho fundamental individual puede ejercerse de forma que destruya la vida de otra persona.",
      "C": "El abandono de paciente en quirófano constituye homicidio por omisión o denegación de auxilio agravada.",
      "D": "La objeción de conciencia aplica a todas las profesiones de salud dentro de sus límites normativos."
    },
    "explanation": "La doctrina constitucional y bioética universal establece que el derecho a la objeción de conciencia tiene como límite infranqueable el derecho a la vida y a la integridad personal de terceros. El profesional que objeta está obligado a asegurar la continuidad de la atención transfiriendo al paciente; si no hay sustituto y la vida corre peligro inminente, el deber de socorro y auxilio prevalece de forma absoluta."
  },
  {
    "id": "cssp-jvpm-11",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Consentimiento Informado: Revocabilidad por el Paciente",
    "legalBasis": "Código de Salud de El Salvador, Art. 42; y Principios Bioéticos de Autonomía de Beauchamp y Childress.",
    "statement": "Un paciente competente de 45 años firma el consentimiento informado para una colecistectomía laparoscópica programada. Ya en el área preanestésica, el paciente manifiesta de forma lúcida y libre: \"He decidido que no quiero operarme hoy, retiro mi autorización y deseo irme a casa\". ¿Cuál es la conducta médica exigida por el principio de autonomía?",
    "options": {
      "A": "Respetar la revocación inmediata del consentimiento informado, suspender la cirugía, explicar los riesgos clínicos de la no intervención, dejar constancia firmada en el expediente y autorizar el alta voluntaria.",
      "B": "Sedarlo a la fuerza mediante inyección intramuscular para operarlo sin que se dé cuenta.",
      "C": "Obligarlo a operarse argumentando que una firma en un documento no puede revocarse jamás.",
      "D": "Demandarlo penalmente por haber ocupado una cama hospitalaria."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Operar a un paciente en contra de su voluntad lúcida constituye coacción ilícita y lesiones dolosas punibles.",
      "C": "El consentimiento no es un contrato mercantil irrevocable; la autonomía sobre el propio cuerpo es inalienable.",
      "D": "El rechazo voluntario de tratamiento no constituye delito alguno."
    },
    "explanation": "El consentimiento informado es un proceso continuo basado en el derecho a la autonomía del paciente. Un paciente competente tiene el derecho legal y bioético inalienable de revocar su consentimiento en cualquier momento antes del inicio del acto médico. El médico debe verificar la competencia mental, informar exhaustivamente los riesgos del rechazo y documentar la negativa en el expediente clínico."
  },
  {
    "id": "cssp-jvpm-12",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Diagnóstico de Muerte Encefálica y Donación de Órganos",
    "legalBasis": "Ley de Trasplante, Donación de Órganos, Tejidos y Células de El Salvador; y Código de Salud Art. 43-A.",
    "statement": "Conforme a la legislación salvadoreña sobre trasplantes y Código de Salud, ¿cuáles son los criterios neurológicos formales y el protocolo médico exigido para certificar la Muerte Encefálica de un potencial donante cadavérico?",
    "options": {
      "A": "Coma profundo estructural irreversible sin respuesta a estímulos supraorbitarios, ausencia de reflejos del tallo cerebral (fotomotor, corneal, oculocefálico, vestíbulo-ocular, nauseoso y tusígeno), apnea absoluta confirmada por test de apnea documentado, y prueba confirmatoria objetiva (ej. EEG isoeléctrico o angiografía cerebral con ausencia de flujo).",
      "B": "Pérdida de la memoria reciente con frecuencia cardíaca de 80 lpm en paciente despierto.",
      "C": "Presencia de pulso arterial débil tras 5 minutos de respiración espontánea.",
      "D": "Decisión unilateral del cirujano de trasplantes sin concurso de neurólogo ni intensivista."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Amnesia no es muerte cerebral; el paciente conserva íntegra la vida somática y de relación.",
      "C": "La presencia de respiración espontánea descarta categóricamente la muerte encefálica.",
      "D": "La ley prohíbe taxativamente que los médicos del equipo de extracción o trasplante certifiquen la muerte del donante por conflicto de interés."
    },
    "explanation": "La muerte encefálica equivale legal y biológicamente a la muerte del individuo. La Ley de Trasplantes exige un riguroso protocolo clínico realizado por facultativos independientes del equipo de trasplante: coma arreactivo, ausencia de todos los reflejos troncales, test de apnea positivo (PaCO2 >= 60 mmHg sin esfuerzo respiratorio) en ausencia de hipotermia o sedantes, corroborado por prueba instrumental."
  },
  {
    "id": "cssp-jvpm-13",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Custodia Legal del Expediente Clínico y Tiempo de Archivo",
    "legalBasis": "Norma Técnica para la Gestión del Expediente Clínico, MINSAL; y Código de Salud Art. 45.",
    "statement": "En los establecimientos de salud públicos y privados de El Salvador, ¿cuál es el carácter jurídico del Expediente Clínico y cuál es el período mínimo legal normado para su conservación y archivo pasivo antes de su depuración?",
    "options": {
      "A": "El expediente clínico es un documento médico-legal confidencial propiedad de la institución custodia, cuyo contenido pertenece al paciente; debiendo conservarse archivado por un período mínimo no menor a 10 a 15 años tras la última atención.",
      "B": "Es un papel de uso temporal que debe incinerarse a los 3 días del egreso hospitalario.",
      "C": "Es propiedad privada del médico que lo atiende y puede venderlo al mejor postor.",
      "D": "Se debe entregar el expediente físico original al paciente para que lo guarde en su casa."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Destruir el expediente a los pocos días viola la ley y suprime la evidencia médica ante reclamos de mala praxis.",
      "C": "La venta o comercialización de expedientes clínicos vulnera la privacidad y tipifica revelación indebida de secretos.",
      "D": "El establecimiento custodia el documento original legal; al paciente se le expiden copias o resúmenes clínicos certificados."
    },
    "explanation": "El expediente clínico es el instrumento médico-legal probatorio por excelencia de la lex artis. La custodia recae sobre la institución prestadora de salud o el médico en consulta privada, mientras que los datos son del paciente (derecho de acceso y copia). La normativa salvadoreña estipula un archivo de conservación de al menos 10 a 15 años para responder a auditorías, prescripciones de responsabilidad civil y peritajes judiciales."
  },
  {
    "id": "cssp-jvpm-14",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Telemedicina y Prescripción Digital en El Salvador",
    "legalBasis": "Norma Técnica y Lineamientos para la Práctica de la Telemedicina y Salud Digital, MINSAL / CSSP.",
    "statement": "Al brindar una teleconsulta médica a distancia mediante plataformas digitales autorizadas en El Salvador, ¿cuál es la obligación ineludible del médico respecto a la seguridad de la información y la prescripción?",
    "options": {
      "A": "Garantizar plataformas cifradas que aseguren la confidencialidad de datos, asentar nota completa en el expediente clínico electrónico, emitir recetas electrónicas con firma digital certificada válida ante la SRS/CSSP y reconocer las limitaciones diagnósticas refiriendo a consulta presencial cuando se requiera examen físico directo.",
      "B": "Consultar por mensajes de audio en redes sociales públicas sin guardar ningún registro médico.",
      "C": "Está prohibido prescribir cualquier tipo de medicamento a través de medios digitales.",
      "D": "Permitir que la inteligencia artificial firme las recetas médicas con el nombre del médico."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Atender por chats informales sin registrar en expediente viola la lex artis y el deber de confidencialidad.",
      "C": "La prescripción digital certificada está expresamente autorizada por la Ley de Firma Electrónica y normativa de salud.",
      "D": "La responsabilidad prescriptiva es personal e indelegable del facultativo humano colegiado."
    },
    "explanation": "La telemedicina en El Salvador exige los mismos estándares éticos y legales que la consulta presencial: identificación plena del paciente y médico, plataformas seguras con consentimiento para teleconsulta, registro exhaustivo en la historia clínica y firma electrónica/digital certificada conforme a la Ley de Firma Electrónica para recetas y órdenes médicas, reconociendo cuándo el examen físico presencial es insustituible."
  },
  {
    "id": "cssp-jvpm-15",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Secreto Profesional en Peritajes Forenses Judiciales",
    "legalBasis": "Código Procesal Penal de El Salvador, Arts. 226 al 241 (De los Peritos) y Código de Salud Art. 40.",
    "statement": "Un médico forense del Instituto de Medicina Legal (IML) es juramentado por un juez para evaluar las lesiones de una víctima de agresión física. La víctima solicita al perito que no incluya en su informe judicial el hallazgo de una fractura mandibular antigua. ¿Cuál es el deber legal del perito respecto al tribunal?",
    "options": {
      "A": "El perito médico tiene el deber procesal ineludible de emitir su dictamen con estricta veracidad y objetividad científica ante la autoridad judicial, describiendo todos los hallazgos médico-legales observados, sin que el secreto profesional médico ordinario aplique para ocultar evidencia solicitada por mandato judicial.",
      "B": "Ocultar la fractura por deferencia a la petición del paciente.",
      "C": "Cobrarle dinero a la víctima para borrar partes del informe pericial.",
      "D": "Negarse a emitir dictamen y marcharse del tribunal."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Ocultar lesiones en un dictamen pericial constituye falsedad pericial sancionada con pena de prisión.",
      "C": "Soborno y corrupción judicial tipificados gravemente en el Código Penal.",
      "D": "La desobediencia al mandato judicial de peritaje juramentado acarrea sanciones procesales y disciplinarias."
    },
    "explanation": "En el peritaje judicial, el médico no actúa como terapeuta de confianza sino como auxiliar imparcial de la justicia nombrado por la autoridad. En sede procesal penal, el perito actúa bajo juramento y debe responder con rigor y verdad técnica a los puntos de pericia ordenados por el juez o fiscal. Falsificar u ocultar deliberadamente lesiones constituye falso testimonio o prevaricato."
  },
  {
    "id": "cssp-jvpm-16",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Atención a Víctimas de Violencia de Género (LEIV)",
    "legalBasis": "Ley Especial Integral para una Vida Libre de Violencia para las Mujeres (LEIV), Art. 32; y Código Penal.",
    "statement": "A la consulta médica ingresa una mujer de 28 años con hematomas perioculares bilaterales, contusiones costales múltiples y fractura de huesos propios de la nariz. La paciente refiere con temor que fue golpeada violentamente por su cónyuge. Conforme a la LEIV y el Código de Salud, ¿cuál es el protocolo obligatorio que debe activar el médico?",
    "options": {
      "A": "Brindar atención médica y soporte emocional inmediato sin revictimización, documentar meticulosamente las lesiones en el expediente clínico con esquemas topográficos, expedir hoja de referencia a psicología/trabajo social y remitir el aviso o denuncia formal de violencia de género ante la FGR o PNC.",
      "B": "Aconsejar a la mujer que sea más comprensiva con su esposo para evitar nuevos conflictos domésticos.",
      "C": "Recomendarle que acuda a una sesión de mediación extrajudicial con el agresor para reconciliarse.",
      "D": "Negar la atención si la paciente no trae previamente una orden de un juzgado de paz."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Actitud de complicidad patriarcal que revictimiza a la mujer y pone en inminente riesgo su vida frente a un feminicidio.",
      "C": "La mediación o conciliación en delitos de violencia contra las mujeres está expresamente prohibida por el Art. 68 de la LEIV.",
      "D": "La atención médica de urgencia es obligatoria e incondicional, no condicionada a trámites judiciales previos."
    },
    "explanation": "La LEIV cataloga a los profesionales de la salud como primeros respondedores clave en la detección de violencia de género. El médico debe proporcionar atención integral prioritaria, registrar con rigor forense las lesiones visibles (topografía, forma, data aproximada), evitar la revictimización y cumplir con el deber de notificación inmediata a las autoridades competentes. La mediación está expresamente prohibida en violencia contra las mujeres."
  },
  {
    "id": "cssp-jvpm-17",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Ensayos Clínicos e Investigación Biomédica",
    "legalBasis": "Norma Técnica para la Regulación de Ensayos Clínicos en Seres Humanos, MINSAL / CSSP / SRS.",
    "statement": "Antes de iniciar un ensayo clínico con un nuevo medicamento en pacientes salvadoreños, ¿cuál es el requisito bioético y regulatorio previo indispensable de obligatorio cumplimiento?",
    "options": {
      "A": "Contar con la aprobación explícita de un Comité de Ética de la Investigación Clínica (CEIC) debidamente acreditado y la autorización regulatoria formal de la SRS/CSSP, garantizando el Consentimiento Informado escrito de los participantes y seguro de cobertura de eventos adversos.",
      "B": "Basta con que el médico investigador tenga curiosidad científica y aplique las sustancias a sus pacientes privados.",
      "C": "No se requiere aprobación si el medicamento ya se vende libremente en supermercados extranjeros.",
      "D": "Pagar un soborno al director del hospital para usar las camas del pabellón de medicina."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Experimentar en pacientes sin protocolo aprobado constituye el delito de experimentación ilícita en personas.",
      "C": "Todo ensayo clínico experimental requiere autorización regulatoria nacional independientemente de registros foráneos.",
      "D": "Acto de cohecho y corrupción sancionado severamente por el Código Penal."
    },
    "explanation": "La investigación en seres humanos está estrictamente regulada por la Declaración de Helsinki, las Guías CIOMS y la normativa salvadoreña. Ningún estudio clínico puede iniciarse sin la revisión ética independiente de un CEIC acreditado y el aval de la autoridad reguladora, velando por la protección de poblaciones vulnerables, balance riesgo-beneficio favorable y consentimiento voluntario informado."
  },
  {
    "id": "cssp-jvpm-18",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Uso de Fármacos Fuera de Indicación Autorizada (Off-Label)",
    "legalBasis": "Norma Técnica y Lineamientos de Farmacovigilancia y Uso Racional de Medicamentos, SRS / JVPM.",
    "statement": "Cuando un médico prescribe un fármaco fuera de las indicaciones aprobadas en su ficha técnica oficial (Uso \"Off-Label\"), ¿cuáles son los requisitos bioéticos y clínicos exigidos para proteger la seguridad del paciente y respaldar la lex artis?",
    "options": {
      "A": "Sustentarse en evidencia científica de alta calidad metodológica en guías internacionales, haber agotado las alternativas terapéuticas autorizadas, informar de forma transparente al paciente sobre el carácter compasivo/off-label y sus riesgos, y obtener su consentimiento informado específico consignándolo en el expediente.",
      "B": "Ocultar al paciente la naturaleza del fármaco para que no se asuste.",
      "C": "El uso off-label está penado con 30 años de prisión en todos los casos clínicos sin excepción.",
      "D": "Se puede prescribir cualquier químico industrial sin ninguna base biológica."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Ocultar información clínica esencial priva al paciente de su derecho al consentimiento informado.",
      "C": "El uso off-label justificado en evidencia no es un delito penal, sino una práctica médica reglada.",
      "D": "Toda prescripción debe respaldarse en sustancias con registro farmacéutico y base fisiopatológica comprobada."
    },
    "explanation": "La prescripción off-label es legítima cuando existe justificación clínica basada en evidencia científica sólida (ensayos fase III publicados, metaanálisis, guías de práctica clínica de referencia) ante la falta de alternativas convencionales eficaces. Exige un deber reforzado de información al paciente y la obtención de consentimiento informado explícito para salvaguardar la autonomía y seguridad médica."
  },
  {
    "id": "cssp-jvpm-19",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Conflictos de Interés y Vínculos con la Industria Farmacéutica",
    "legalBasis": "Código de Salud de El Salvador, Art. 40; Ley de Medicamentos Art. 34; y Código de Deontología Médica.",
    "statement": "De acuerdo con la Ley de Medicamentos y los principios éticos de la JVPM, ¿cuál de las siguientes conductas respecto a la industria farmacéutica constituye una infracción ética y legal grave para el médico prescriptor?",
    "options": {
      "A": "Aceptar incentivos económicos directos, viajes de placer, comisiones o regalos de empresas farmacéuticas a cambio de comprometerse a prescribir un volumen determinado de sus marcas comerciales.",
      "B": "Asistir a un congreso médico de actualización científica con registro transparente y acreditación académica.",
      "C": "Leer las alertas de seguridad y fichas técnicas publicadas por el laboratorio en su portal web.",
      "D": "Solicitar muestras médicas gratuitas institucionales para entregarlas sin costo a pacientes de escasos recursos."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La educación médica continua transparente y reglada es legítima y deontológicamente promovida.",
      "C": "El estudio de la literatura científica y advertencias farmacológicas es un deber profesional.",
      "D": "El uso ético de muestras médicas autorizadas para beneficencia directa del paciente está normado y permitido."
    },
    "explanation": "El Art. 34 de la Ley de Medicamentos y el Código de Salud prohíben taxativamente cualquier forma de dádiva, comisión, incentivo económico o patrocinio comercial que comprometa la objetividad e independencia científica del médico en la prescripción de medicamentos (conflicto de interés que lesiona el bolsillo del paciente y distorsiona el uso racional de fármacos)."
  },
  {
    "id": "cssp-jvpm-20",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Derecho a la Segunda Opinión Médica",
    "legalBasis": "Ley de Deberes y Derechos de los Pacientes y Prestadores de Servicios de Salud; y Código de Salud Art. 39.",
    "statement": "Un paciente diagnosticado con una neoplasia maligna avanzada solicita a su médico tratante una copia de sus informes histopatológicos y estudios de imagen para consultar una segunda opinión con otro especialista oncológico. ¿Cuál es la obligación deontológica y legal del médico tratante?",
    "options": {
      "A": "Facilitar de inmediato el acceso a la información y expedir copias de los informes y estudios diagnósticos, respetando plenamente el derecho del paciente a solicitar una segunda opinión médica sin represalias ni menoscabo en su atención.",
      "B": "Romper los informes médicos frente al paciente para que no consulte con ningún otro colega.",
      "C": "Dar de alta forzosa y expulsar al paciente del hospital por considerar su solicitud una ofensa a su prestigio profesional.",
      "D": "Exigir al paciente que pague una multa de indemnización por desconfianza médica."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Destruir documentos del expediente clínico constituye falta grave y delito de supresión de documento público.",
      "C": "El abandono o represalia contra el paciente vulnera el deber de beneficencia y no maleficencia.",
      "D": "El paciente es soberano para buscar las opiniones profesionales que considere oportunas sin penalización alguna."
    },
    "explanation": "El derecho a la segunda opinión médica es un derecho fundamental del paciente derivado del principio de autonomía y de la Ley de Derechos de los Pacientes. El médico debe actuar con madurez profesional y facilitar toda la documentación clínica necesaria para que el consultante y su familia tomen las decisiones más fundamentadas posibles sobre su salud y tratamiento."
  },
  {
    "id": "cssp-jvpm-21",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Manejo Médico y Confidencialidad en Pacientes con VIH",
    "legalBasis": "Ley de Prevención y Control de la Infección Provocada por el Virus de Inmunodeficiencia Humana (VIH) de El Salvador.",
    "statement": "Un médico atiende en su consultorio a un paciente y descubre que vive con VIH. El médico decide colocar un rótulo rojo en la puerta de la sala de espera y divulgar el diagnóstico al empleador del paciente sin su consentimiento. ¿Qué infracción legal y constitucional comete el médico?",
    "options": {
      "A": "Violación grave a la confidencialidad médica y al derecho al honor e intimidad personal garantizados por la Ley de VIH y el Art. 2 de la Constitución, acarreando sanciones pecuniarias, suspensión por la JVPM y demandas por daños morales.",
      "B": "Una práctica preventiva obligatoria exigida por el Ministerio de Trabajo.",
      "C": "Un procedimiento reglamentario estándar de bioseguridad pública.",
      "D": "El empleador siempre tiene derecho absoluto de conocer el expediente de sus trabajadores."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La legislación laboral y sanitaria prohíbe exigir la prueba de VIH o revelar diagnósticos para el empleo.",
      "C": "Las precauciones universales de bioseguridad se aplican a TODOS los pacientes sin necesidad de rótulos discriminatorios.",
      "D": "El expediente médico está protegido por el secreto profesional y no es accesible al patrono sin orden judicial."
    },
    "explanation": "La Ley de VIH de El Salvador consagra de manera estricta el carácter confidencial del diagnóstico de VIH, prohibiendo la estigmatización, segregación o revelación a terceros (incluyendo patronos o centros educativos) sin autorización expresa del titular. Revelar el estado serológico de forma pública o discriminatoria constituye una falta gravísima sujeta a sanciones civiles, penales y disciplinarias."
  },
  {
    "id": "cssp-jvpm-22",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Sedación Paliativa vs Eutanasia: Delimitación Médico-Legal",
    "legalBasis": "Código Penal de El Salvador, Arts. 128 y 130; y Declaración de Venecia sobre Enfermedad Terminal (AMM).",
    "statement": "En la atención de un paciente oncológico terminal con estertores agónicos y dolor intratable refractario a toda terapia, el médico decide administrar Sedación Paliativa profunda proporcional al síntoma. Conforme a la legislación y bioética médica salvadoreña, ¿cuál es la distinción entre Sedación Paliativa y Eutanasia?",
    "options": {
      "A": "La Sedación Paliativa tiene como intención exclusiva aliviar el sufrimiento refractario insoportable ajustando la dosis de fármacos a la intensidad del síntoma, siendo bioéticamente legítima y legal; mientras que la Eutanasia busca deliberadamente provocar la muerte como fin mediante dosis letales directas, estando tipificada como delito penal de Homicidio en El Salvador.",
      "B": "Ambos términos son exactamente iguales y están castigados con pena de muerte en El Salvador.",
      "C": "La sedación paliativa solo puede ser autorizada por el Ministerio de Hacienda.",
      "D": "La eutanasia es obligatoria en todos los ancianos mayores de 90 años."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La sedación paliativa para alivio sintomático es un derecho del paciente y una práctica médica legalmente protegida.",
      "C": "Las decisiones de sedación paliativa corresponden al equipo médico con acuerdo del paciente o familia, sin fines fiscales.",
      "D": "La eutanasia no está permitida en la legislación salvadoreña bajo ninguna circunstancia."
    },
    "explanation": "La distinción bioética se fundamenta en el Principio del Doble Efecto: en cuidados paliativos la intención terapéutica es el alivio del dolor y la angustia refractaria in extremis mediante sedación ajustada (efecto bueno buscado), aceptando como consecuencia no deseada un posible adelantamiento del fallecimiento; la eutanasia persigue activamente la muerte como fin o medio, lo cual está prohibido por el Código Penal de El Salvador."
  },
  {
    "id": "cssp-jvpm-23",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Atención a Menores Maduros y Límites de la Patria Potestad",
    "legalBasis": "Ley Crecer Juntos, Arts. 61 al 64; y Código de Familia de El Salvador.",
    "statement": "Un adolescente de 16 años acude a la consulta médica solicitando orientación y métodos de barrera para la prevención de infecciones de transmisión sexual (ITS). Los padres se presentan furiosos exigiendo que el médico no le informe nada y que revele todo lo hablado en consulta. Conforme a la Ley Crecer Juntos y los derechos de la niñez y adolescencia, ¿cuál es la posición legal y ética del facultativo?",
    "options": {
      "A": "Reconocer el principio de Autonomía Progresiva del adolescente en salud sexual y reproductiva garantizado por la Ley Crecer Juntos, brindarle consejería y atención confidencial integral, y motivar el diálogo intrafamiliar constructivo sin violentar el secreto profesional médico.",
      "B": "Expulsar al adolescente de la consulta y entregarlo a los padres para que reciba un castigo corporal severo.",
      "C": "Negarse a hablar con el adolescente y remitirlo a una correccional de menores.",
      "D": "Informar detalladamente a todos los vecinos de la comunidad sobre la consulta del joven."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La Ley Crecer Juntos prohíbe taxativamente el castigo físico, humillante o degradante contra niñas, niños y adolescentes.",
      "C": "Solicitar atención médica preventiva no es una infracción ni delito que amerite medidas judiciales correccionales.",
      "D": "La divulgación pública de datos clínicos de adolescentes viola el derecho a la intimidad y la confidencialidad médica."
    },
    "explanation": "La Ley Crecer Juntos reconoce expresamente el derecho de niñas, niños y adolescentes al acceso a servicios de salud integral, incluyendo educación y atención en salud sexual y reproductiva conforme a su edad y desarrollo evolutivo (autonomía progresiva). Los profesionales de salud deben asegurar un espacio confidencial seguro que prevenga ITS y embarazos tempranos, orientando a la familia sin vulnerar el sigilo profesional."
  },
  {
    "id": "cssp-jvpm-24",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Certificación de Estado Físico en Detenciones Policiales",
    "legalBasis": "Código Procesal Penal de El Salvador, Art. 82 y Convención contra la Tortura (ONU).",
    "statement": "A una Unidad de Emergencia la PNC lleva a un ciudadano recién capturado para que el médico de turno expida una constancia de \"buen estado de salud\". Al examinar al detenido a solas, el médico constata múltiples hematomas recientes en tórax, quemaduras por colillas de cigarrillo en antebrazos y dificultad respiratoria por posible contusión pulmonar. ¿Cuál es el deber ético, legal y de derechos humanos del facultativo?",
    "options": {
      "A": "Describir con exhaustivo detalle técnico-forense todas las lesiones observadas en el expediente y certificado médico, brindar el tratamiento urgente requerido, garantizar que el examen se realice sin la presencia intimidatoria de los custodios policiales y notificar inmediatamente a la FGR y a la Procuraduría para la Defensa de los Derechos Humanos (PDDH) ante indicios de tratos crueles, inhumanos o tortura.",
      "B": "Firmar la constancia de que el detenido está completamente sano para evitar problemas con los agentes captores.",
      "C": "Permitir que los policías golpeen nuevamente al paciente dentro del consultorio.",
      "D": "Romper el certificado y negarse a asentar ningún hallazgo médico en la hoja de ingreso."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Emitir un certificado de salud falso ocultando torturas es un delito de encubrimiento y falsedad documental punible.",
      "C": "Permitir o tolerar actos de violencia institucional dentro de un centro sanitario viola los principios éticos más elementales.",
      "D": "Omitir el registro médico destruye la evidencia probatoria indispensable para la investigación de violaciones de derechos humanos."
    },
    "explanation": "Conforme al Protocolo de Estambul de la ONU y las leyes salvadoreñas, el médico es un garante esencial contra la tortura y los malos tratos en custodia policial. Debe examinar al detenido en privacidad e imparcialidad, documentar fotográfica y textualmente cada lesión corporal, brindar atención médica prioritaria y denunciar todo indicio de violencia policial ante la FGR y PDDH; ocultar lesiones constituye complicidad penal."
  },
  {
    "id": "cssp-jvpm-25",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Incompatibilidades y Ejercicio Simultáneo de Profesiones",
    "legalBasis": "Código de Salud de El Salvador, Arts. 35 y 40; y Ley de la JVPM.",
    "statement": "Un médico con registro vigente ante la JVPM decide instalar en su clínica particular una farmacia comercial abierta al público en la cual vende y dispensa directamente los medicamentos que prescribe a sus pacientes, actuando a la vez como dependiente y médico sin regente farmacéutico. ¿Cómo califica esta conducta ante el Consejo Superior de Salud Pública (CSSP)?",
    "options": {
      "A": "Constituye una incompatibilidad legal y conflicto de interés sancionado por el Código de Salud, el cual prohíbe que el médico en ejercicio clínico privado sea a la vez propietario o dispensador directo de una farmacia comercial en el mismo local sin regencia química farmacéutica independiente.",
      "B": "Es una práctica plenamente legal y recomendada para maximizar las ganancias económicas del médico.",
      "C": "El Código de Salud permite que los médicos preparen medicamentos industriales en sus casas.",
      "D": "La JVPM no tiene ninguna facultad sobre la venta de medicamentos en clínicas médicas."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Vincular la prescripción al lucro de la venta directa en mostrador corrompe el juicio clínico y viola el Código de Salud.",
      "C": "La manufactura de medicamentos exige laboratorios autorizados con Buenas Prácticas de Manufactura (BPM) certificadas por la SRS.",
      "D": "El CSSP y las Juntas de Vigilancia supervisan conjuntamente la habilitación y legalidad de consultorios y establecimientos farmacéuticos."
    },
    "explanation": "El Código de Salud y la Ley de Medicamentos separan estrictamente las funciones de prescripción médica y de dispensación farmacéutica para evitar el monopolio inducido y el sobretratamiento motivado por lucro comercial (vender medicamentos innecesarios para ganar dinero de la farmacia). Los consultorios médicos solo pueden mantener botiquines de urgencia autorizados para administración inmediata, no farmacias comerciales sin regencia."
  },
  {
    "id": "cssp-jvpm-26",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Publicidad Médica Engañosa y Prohibición de Garantías de Curación",
    "legalBasis": "Código de Salud de El Salvador, Art. 40 lit. d); y Código de Ética de la JVPM.",
    "statement": "Un médico publica en redes sociales anuncios promocionales asegurando: \"Curo la Diabetes y el Cáncer en 15 días con mi terapia celular cuántica infalible, 100% garantizada o le devuelvo su dinero\". ¿Qué valoración legal emite la JVPM sobre este tipo de publicidad?",
    "options": {
      "A": "Infracción grave a la legislación sanitaria y a la deontología médica por publicidad engañosa y charlatanería, estando expresamente prohibido prometer curaciones infalibles o garantizar resultados en medicina, acarreando multas y suspensión del ejercicio profesional.",
      "B": "Es una muestra válida de marketing comercial moderno protegido por la libertad de expresión irrestricta.",
      "C": "Es válida si el médico coloca letras pequeñas al final del anuncio.",
      "D": "El Código de Salud obliga a los médicos a garantizar la curación en todos sus contratos privados."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La salud pública y la vida humana no están sujetas a la libertad de engaño mercantil indiscriminado.",
      "C": "Las cláusulas engañosas en publicidad médica no atenúan la infracción deontológica y sanitaria.",
      "D": "El acto médico es una obligación de medios y de prudente atención, jamás una garantía mercantil de curación infalible."
    },
    "explanation": "La obligación del médico es de MEDIOS (emplear con diligencia y pericia los conocimientos científicos validados de la lex artis), NUNCA de RESULTADOS. El Código de Salud y el Código de Ética prohíben taxativamente la charlatanería médica, prometer curaciones milagrosas o utilizar publicidad mercantil engañosa que explote la desesperación de pacientes con enfermedades crónicas o terminales."
  },
  {
    "id": "cssp-jvpm-27",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Abandono de Paciente Hospitalizado",
    "legalBasis": "Código Penal de El Salvador, Art. 175; y Código de Salud Art. 40.",
    "statement": "Un cirujano general inicia una laparotomía exploradora en un hospital. A mitad del procedimiento, molesto por un desacuerdo verbal con el personal de instrumentación, se despoja de los guantes y bata, sale del quirófano y abandona el hospital con el paciente bajo anestesia general y abdomen abierto. ¿Qué responsabilidad asume el cirujano?",
    "options": {
      "A": "Responsabilidad penal por Abandono de Paciente y Omisión de Socorro agravada, además de falta deontológica gravísima sancionada con la cancelación o suspensión máxima de su licencia profesional por la JVPM.",
      "B": "Ninguna responsabilidad, pues el cirujano es libre de marcharse de su centro de trabajo cuando sienta estrés laboral.",
      "C": "Solo debe reponer el costo de los guantes quirúrgicos utilizados.",
      "D": "El personal de enfermería asume la culpa por haber provocado el enojo del facultativo."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "El derecho de huelga o disputa laboral termina donde comienza el deber de no poner en riesgo vital a un paciente quirúrgico.",
      "C": "La falta no es patrimonial por insumos, sino penal por atentar contra la vida del ser humano encomendado.",
      "D": "La responsabilidad del acto médico recae en el cirujano que asumió el procedimiento operatorio."
    },
    "explanation": "El abandono de un paciente en quirófano o en situación de vulnerabilidad clínica extrema sin haber transferido de forma segura la responsabilidad a otro colega calificado constituye una de las faltas más aberrantes en medicina. Viola el deber de garante, poniendo en peligro inminente la vida del enfermo y configurando delitos contra la vida y la integridad personal con suspensión inmediata del ejercicio."
  },
  {
    "id": "cssp-jvpm-28",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Habilitación de Consultorios y Clínicas Médicas Privadas",
    "legalBasis": "Código de Salud de El Salvador, Arts. 32 al 35; y Reglamento de Establecimientos de Salud del CSSP.",
    "statement": "Para aperturar y operar legalmente un consultorio o clínica médica privada en El Salvador, ¿qué autorización formal del Estado es obligatoria antes de iniciar la atención al público?",
    "options": {
      "A": "Contar con la Licencia de Funcionamiento y Habilitación Sanitaria otorgada por el Consejo Superior de Salud Pública (CSSP) tras inspección técnica de las instalaciones, equipamiento, bioseguridad y acreditación de los profesionales que laborarán en el recinto.",
      "B": "Basta únicamente con pintar la fachada del edificio de color blanco con una cruz verde.",
      "C": "Solo se necesita un permiso de la directiva de vecinos de la colonia.",
      "D": "Los médicos graduados pueden abrir clínicas en cualquier lugar sin necesidad de autorización de las autoridades sanitarias."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La estética exterior no suple las exigencias sanitarias y técnicas de habilitación legal.",
      "C": "Las asociaciones comunales carecen de competencia técnico-sanitaria de habilitación médica.",
      "D": "El ejercicio profesional en consultorios no autorizados constituye una infracción sancionada con clausura y multas."
    },
    "explanation": "El Código de Salud estipula que ningún establecimiento de salud (consultorios, clínicas, hospitales, laboratorios) puede funcionar sin la autorización e inspección previa del CSSP. La habilitación sanitaria verifica que el local cumpla condiciones higiénico-sanitarias, esterilización, manejo de desechos bioinfecciosos y que los profesionales estén debidamente inscritos en la Junta correspondiente."
  },
  {
    "id": "cssp-jvpm-29",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Directrices Anticipadas y Limitación del Esfuerzo Terapéutico",
    "legalBasis": "Ley de Deberes y Derechos de los Pacientes; y Principio Bioético de No Maleficencia.",
    "statement": "Un paciente adulto en fase terminal de una enfermedad neurodegenerativa irreversible consignó formalmente por escrito, en estado de plena lucidez previa, su voluntad anticipada de \"NO ser sometido a maniobras de reanimación cardiopulmonar avanzada ni a intubación orotraqueal prolongada (Orden de No Reanimar - ONR)\". Al sobrevenir el paro cardiorrespiratorio terminal, ¿cuál es el deber del equipo médico tratante?",
    "options": {
      "A": "Respetar las directrices anticipadas y la dignidad de la muerte natural, absteniéndose de maniobras invasivas de reanimación fútiles (evitando el encarnizamiento o distanasia terapéutica), brindando sedación y confort paliativo continuo.",
      "B": "Violar la voluntad anticipada del paciente y realizar toracotomía de reanimación a la fuerza.",
      "C": "Obligar a la familia a firmar un pagaré bancario antes de decidir si reaniman o no.",
      "D": "Llamar a la policía para que ellos reanimen al paciente."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Imponer maniobras invasivas contra la voluntad anticipada documentada constituye encarnizamiento terapéutico ilícito.",
      "C": "Condicionar la ética médica paliativa a transacciones financieras es contrario a la dignidad de la persona humana.",
      "D": "La conducta de limitación del esfuerzo terapéutico es un acto médico clínico colegiado fundamentado en bioética."
    },
    "explanation": "El principio de no maleficencia prohíbe la distanasia o encarnizamiento terapéutico (obstinación médica fútil que solo prolonga la agonía de un paciente terminal sin esperanza razonable de recuperación). El respeto a las directrices previas o voluntad anticipada válidamente manifestada honra la dignidad humana en el proceso del morir, asegurando cuidados paliativos y confort."
  },
  {
    "id": "cssp-jvpm-30",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Intrusismo Profesional y Ejercicio Ilegal de la Medicina",
    "legalBasis": "Código Penal de El Salvador, Art. 289 (Ejercicio Ilegal de Profesión) y Código de Salud Art. 40.",
    "statement": "Una persona que carece de título universitario de Doctor en Medicina instala un consultorio donde diagnostica enfermedades, receta antibióticos y realiza cirugías estéticas ambulatorias. Asimismo, un médico graduado le arrienda su sello y firma las recetas a cambio de una comisión económica mensual. ¿Qué delito penal cometen ambos según el Código Penal de El Salvador?",
    "options": {
      "A": "La persona no titulada comete el delito de Ejercicio Ilegal de Profesión (Art. 289 CP); y el médico colegiado comete el delito de Coautoría o Cooperación Necesaria en el Ejercicio Ilegal de la Profesión, además de falta gravísima sujeta a cancelación de su registro profesional ante la JVPM.",
      "B": "No existe delito alguno porque la medicina es libre para cualquier ciudadano con vocación.",
      "C": "Es una asociación comercial lícita amparada en el Código de Comercio.",
      "D": "Solo se les impone una multa de 2 dólares por falta de higiene en el consultorio."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "El ejercicio de la medicina está rigurosamente regulado por el Art. 68 de la Constitución para salvaguardar la vida pública.",
      "C": "La salud humana no es una mercancía desregulada y el intrusismo no puede legalizarse mediante figuras mercantiles.",
      "D": "Las penas contemplan privación de libertad e inhabilitación profesional ante los tribunales penales del Estado."
    },
    "explanation": "El Art. 289 del Código Penal sanciona con prisión el ejercicio de profesiones que exigen título habilitante sin poseerlo (intrusismo médico). Asimismo, el profesional que presta su nombre, título, sello o firma para encubrir a un usurpador o permitir el ejercicio ilegal incurre en responsabilidad penal como cooperador necesario y en la máxima falta deontológica sancionada con inhabilitación por la JVPM."
  },
  {
    "id": "cssp-jvpm-31",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Inscripción Obligatoria de Especialidades ante la JVPM",
    "legalBasis": "Código de Salud de El Salvador, Arts. 32 y 33; y Reglamento Interno de la JVPM.",
    "statement": "Un médico general salvadoreño completa un diplomado en línea de 40 horas en cirugía plástica cosmética dictado por un centro no universitario extranjero, y procede a anunciarse en clínicas como \"Especialista en Cirugía Plástica y Reconstructiva\". ¿Cuál es el procedimiento legal obligatorio para que una especialidad médica sea legalmente reconocida y ejercida en El Salvador?",
    "options": {
      "A": "Haber cursado un programa formal de Residentado Médico hospitalario acreditado (o título extranjero debidamente homologado e incorporado por la Universidad de El Salvador) y obtener la certificación e inscripción formal del Título de Especialista ante la Junta de Vigilancia de la Profesión Médica (JVPM).",
      "B": "Basta con imprimir el certificado del diplomado de internet y enmarcarlo en la pared del consultorio.",
      "C": "Tener más de 10,000 seguidores en redes sociales avala automáticamente la especialidad.",
      "D": "Las especialidades médicas no requieren ningún registro ante el Estado salvadoreño."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Los diplomados de educación continua no confieren idoneidad para ostentar títulos de especialidad quirúrgica.",
      "C": "La popularidad digital no sustituye las competencias quirúrgicas hospitalarias supervisadas formalmente.",
      "D": "El registro ante la JVPM es un requisito legal y de orden público para el ejercicio especializado."
    },
    "explanation": "La acreditación de especialidades médicas es competencia indelegable de la JVPM. Un médico general que ejerce procedimientos de especialidad sin el registro correspondiente incurre en usurpación de funciones y mala praxis. Los cursos no universitarios o diplomados breves no otorgan grado de especialista; se requiere programa de posgrado formal y aprobación oficial de la JVPM."
  },
  {
    "id": "cssp-jvpm-32",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Consentimiento Informado en Procedimientos con Riesgo de Amputación",
    "legalBasis": "Código de Salud de El Salvador, Art. 42; y Manual de Procedimientos Quirúrgicos Seguros de la JVPM.",
    "statement": "En un paciente con pie diabético con gangrena húmeda extensa en el antepié y sepsis en evolución, el cirujano planifica una desarticulación de dedos pero advierte que intraoperatoriamente podría ser indispensable ascender a una amputación infracondílea (transtibial) si el tejido muscular subyacente está necrosado. ¿Cómo debe formularse el consentimiento informado?",
    "options": {
      "A": "Informar explícitamente al paciente lúcido (o a su familia si no está competente) de la posibilidad técnica fundada de tener que ampliar el nivel de amputación durante el acto quirúrgico para controlar la sepsis y salvar la vida, consignando expresamente este escenario en el documento de consentimiento informado previo a la anestesia.",
      "B": "Ocultar la posibilidad de amputación mayor para que el paciente no se deprima antes de dormirlo.",
      "C": "Amputar el miembro completo hasta la cadera sin revisar la viabilidad vascular local.",
      "D": "No solicitar firma alguna argumentando que en los diabéticos las firmas pierden validez."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Ocultar una amputación mayor previsible invalida el consentimiento y expone al cirujano a demandas por agresión quirúrgica.",
      "C": "Resecar tejido sano sin necesidad viola el principio de no maleficencia y proporcionalidad quirúrgica.",
      "D": "La condición de diabetes mellitus no anula la capacidad jurídica ni el derecho al consentimiento del paciente."
    },
    "explanation": "El consentimiento informado quirúrgico debe ser específico y anticipar los escenarios contingentes razonablemente previsibles según la evolución del acto operatorio. Explicar y documentar la eventual necesidad de ampliar la resección o nivel de amputación protege el principio de autonomía del paciente y respalda la adecuada lex artis quirúrgica frente a reclamos por mutilación no autorizada."
  },
  {
    "id": "cssp-jvpm-33",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Prescripción de Estupefacientes y Recetario Especial",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; y Ley de Medicamentos de El Salvador.",
    "statement": "Al prescribir opioides mayores (como Morfina o Fentanilo) para el control del dolor oncológico severo, ¿cuál es el instrumento médico y legal obligatorio que debe utilizar el médico facultado en El Salvador?",
    "options": {
      "A": "El Recetario Oficial de Sustancias Controladas y Estupefacientes foliado y autorizado por la Dirección Nacional de Medicamentos (Superintendencia de Regulación Sanitaria - SRS), cumpliendo los datos de posología en letras y números, diagnóstico y retención en farmacia.",
      "B": "Un trozo de papel en blanco sin membrete ni firma.",
      "C": "Un mensaje de texto por teléfono celular sin código de verificación.",
      "D": "Los opioides mayores se venden sin necesidad de receta médica en los mercados populares."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Prescribir estupefacientes en papel informal es ilegal y constituye delito contra la salud pública.",
      "C": "Las sustancias controladas de la Lista I y II exigen recetario oficial físico con medidas de seguridad no clonables.",
      "D": "La venta de estupefacientes fuera de farmacias autorizadas y sin receta constituye tráfico ilícito de drogas sancionado con penas graves de prisión."
    },
    "explanation": "Los estupefacientes y opioides mayores están sujetos a fiscalización internacional y nacional estricta para evitar desvíos al tráfico ilícito y adicción. En El Salvador, solo pueden prescribirse mediante el talonario oficial foliado de recetas de estupefacientes emitido por la SRS/DNM, con consignación de la dosis en letras y números, firma y sello del médico, quedando la receta retenida y registrada en el libro oficial de la farmacia."
  },
  {
    "id": "cssp-jvpm-34",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Atención Médica en Huelgas Hospitalarias y Servicios Esenciales",
    "legalBasis": "Constitución de la República de El Salvador, Art. 221; y Código de Salud Art. 34.",
    "statement": "En el contexto de una protesta laboral gremial en un hospital de la red pública de El Salvador, ¿cuál es la prohibición constitucional y deber ineludible de los médicos en relación con los servicios de urgencia y áreas críticas?",
    "options": {
      "A": "El Art. 221 de la Constitución prohíbe la huelga en servicios públicos esenciales; y la ética médica impone la obligación absoluta de garantizar la atención ininterrumpida de las áreas de Emergencia, Cuidados Intensivos, Sala de Partos y Hospitalización crítica mediante turnos éticos.",
      "B": "Cerrar con cadenas las puertas de la emergencia y desconectar los ventiladores de la UCI.",
      "C": "Abandonar a los pacientes hospitalizados sin indicar medicamentos durante un mes.",
      "D": "Negar la atención médica a los niños menores de cinco años durante las protestas."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Desconectar ventiladores o cerrar salas de urgencia constituye tentativa de homicidio agravado.",
      "C": "El abandono de hospitalizados es un acto de negligencia criminal punible.",
      "D": "La atención a la primera infancia y poblaciones vulnerables es de máxima prioridad humanitaria y legal incondicional."
    },
    "explanation": "El derecho a la vida y a la salud de la población prevalece sobre las reivindicaciones laborales gremiales. El Art. 221 de la Constitución prohíbe la suspensión de servicios públicos esenciales, y la deontología médica califica como delito y falta gravísima el abandono de áreas críticas hospitalarias. Los turnos éticos garantizan la continuidad operativa en emergencias y cuidados intensivos."
  },
  {
    "id": "cssp-jvpm-35",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Preservación de la Cadena de Custodia de Evidencias en Emergencias",
    "legalBasis": "Código Procesal Penal de El Salvador, Arts. 250 al 252 (Cadena de Custodia).",
    "statement": "Durante la atención quirúrgica de emergencia a un paciente con herida penetrante de abdomen, el cirujano extrae un proyectil de arma de fuego deformado alojado en el mesenterio. Conforme a las normas procesales de El Salvador, ¿cómo debe proceder el médico con dicha evidencia física?",
    "options": {
      "A": "Manipular el proyectil con pinzas protegidas (para no alterar las estrías balísticas), rotularlo debidamente, introducirlo en un sobre o frasco de evidencia cerrado, asentar el hallazgo en el expediente y entregarlo formalmente bajo acta de cadena de custodia a los agentes de la PNC o peritos del IML.",
      "B": "Guardarse el proyectil en el bolsillo del pantalón como recuerdo de la cirugía.",
      "C": "Lavarlo con ácido nítrico y pulirlo con una lima metálica antes de mostrárselo a la familia.",
      "D": "Tirarlo a la basura bioinfecciosa roja para que nadie lo encuentre."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Apropiarse de evidencia judicial constituye destrucción o sustracción de evidencias penales.",
      "C": "Limar o alterar químicamente un proyectil destruye la prueba balística y tipifica encubrimiento.",
      "D": "Desechar deliberadamente la evidencia balística de un delito de homicidio o lesiones graves es un delito penal."
    },
    "explanation": "Los proyectiles, prendas de vestir con orificios de entrada o armas blancas extraídas en quirófano constituyen evidencias periciales decisivas en la investigación penal. El Art. 250 del Código Procesal Penal exige que el médico tratante preserve la integridad de la pieza sin alterar las marcas de estrías balísticas, mantenga la trazabilidad y la entregue bajo estricta acta de cadena de custodia a las autoridades judiciales."
  },
  {
    "id": "cssp-jvpm-36",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Atención a Pacientes en Huelga de Hambre",
    "legalBasis": "Declaración de Tokio y Declaración de Malta sobre Huelguistas de Hambre (AMM); y Código de Salud.",
    "statement": "En la evaluación médica de un privado de libertad o ciudadano lúcido que ha iniciado una huelga de hambre voluntaria y prolongada, ¿cuál es la directriz bioética y médica internacionalmente aceptada por la JVPM?",
    "options": {
      "A": "Evaluar diariamente la capacidad mental y el estado hemodinámico, explicar exhaustivamente las consecuencias médicas irreversibles del ayuno prolongado, respetar su decisión informada mientras conserve competencia cognitiva plena, y abstenerse de la alimentación forzada invasiva por considerarse un trato degradante o tortura.",
      "B": "Amarrar al paciente de pies y manos e intubarlo a la fuerza para alimentarlo con papillas desde el primer día.",
      "C": "Negarle el agua potable y suspenderle las visitas médicas para quebrantar su voluntad.",
      "D": "Administrarle sedantes potentes para que coma dormido."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La alimentación forzada contra la voluntad competente de un huelguista es catalogada como tortura por la Declaración de Tokio y la ONU.",
      "C": "Negar agua potable y asistencia médica constituye omisión de auxilio y trato cruel punible.",
      "D": "La administración forzosa de psicofármacos sin indicación médica psiquiátrica es una agresión a la libertad individual."
    },
    "explanation": "La Declaración de Malta de la Asociación Médica Mundial estipula que la alimentación forzada de una persona competente que rechaza voluntariamente los alimentos es éticamente inaceptable e inhumana. El médico debe actuar de forma neutral e independiente, verificar la voluntariedad de la huelga sin coacción, monitorizar la salud, advertir de los riesgos de muerte y respetar la autonomía mientras esté lúcido."
  },
  {
    "id": "cssp-jvpm-37",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Prescripción de Antibióticos y Resistencia Antimicrobiana",
    "legalBasis": "Plan Nacional de Contención de la Resistencia a los Antimicrobianos (RAM), MINSAL / CSSP; y Ley de Medicamentos.",
    "statement": "Conforme a las directrices de contención de la resistencia bacteriana en El Salvador, ¿cuál es la conducta deontológica y prescriptiva que debe seguir el médico ante un cuadro de Rinofaringitis Aguda Viral común?",
    "options": {
      "A": "Abstenerse de prescribir antibióticos (evitando Ceftriaxona o Amoxicilina innecesarias), brindar tratamiento puramente sintomático y educar al paciente sobre la naturaleza autolimitada de los cuadros virales.",
      "B": "Prescribir Ciprofloxacina oral combinada con Azitromicina para \"prevenir que el virus mute a bacteria\".",
      "C": "Inyectar antibióticos de reserva de amplio espectro para que el paciente sienta que la consulta valió la pena.",
      "D": "Dejar que el paciente elija los antibióticos de su preferencia en el mostrador de la farmacia."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Los virus jamás mutan en bacterias; prescribir antibióticos en virosis selecciona cepas bacterianas resistentes mortales.",
      "C": "La prescripción complaciente o defensiva vulnera el código ético y la lex artis médica.",
      "D": "La prescripción es una facultad exclusiva e indelegable del profesional médico capacitado."
    },
    "explanation": "El uso indiscriminado e irracional de antibióticos para infecciones respiratorias de etiología viral (resfriado, influenza) es el principal motor de la crisis global de resistencia bacteriana antimicrobiana. El médico tiene la obligación ética y técnica de prescribir antibióticos únicamente ante evidencia clínica o laboratorial fundada de infección bacteriana sensible, protegiendo la flora comunitaria."
  },
  {
    "id": "cssp-jvpm-38",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Auditoría Médica y Nota de Consentimiento en Expediente",
    "legalBasis": "Código de Salud de El Salvador, Art. 40; y Manual de Auditoría de la Calidad de la Atención Médica, MINSAL.",
    "statement": "En una auditoría médica judicial por sospecha de mala praxis quirúrgica, ¿qué valor probatorio confiere la ausencia total de la hoja de consentimiento informado firmado en el expediente clínico del paciente intervenido?",
    "options": {
      "A": "Crea una presunción de que el acto quirúrgico se realizó sin la debida información y autorización del paciente, invirtiendo la carga de la prueba en contra del equipo quirúrgico y pudiendo configurar responsabilidad civil y deontológica directa por transgresión de la lex artis.",
      "B": "Ningún valor, pues los jueces asumen que todo paciente que entra a un hospital desea ser operado automáticamente.",
      "C": "Favorece al cirujano porque demuestra que actuó con extrema rapidez.",
      "D": "El expediente clínico no tiene ningún valor probatorio ante los tribunales de justicia."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La justicia no presume consentimientos tácitos en actos quirúrgicos invasivos.",
      "C": "La rapidez no exime de documentar el consentimiento en cirugías programadas o de urgencia no extrema.",
      "D": "El expediente clínico es el documento pericial médico-legal principal en todo litigio de responsabilidad profesional."
    },
    "explanation": "En el derecho sanitario moderno, el consentimiento informado es un acto médico sustancial que debe constar por escrito en los procedimientos quirúrgicos. Su omisión en el expediente clínico constituye un defecto formal grave de la lex artis documental que deja en indefensión probatoria al cirujano y genera presunción de falta de información al paciente sobre los riesgos que finalmente se materializaron."
  },
  {
    "id": "cssp-jvpm-39",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Manejo de Error Médico y Revelación Honesta al Paciente",
    "legalBasis": "Código de Ética Médica de la JVPM; y Declaración de la Asociación Médica Mundial sobre Seguridad del Paciente.",
    "statement": "Un médico advierte que por un error involuntario de cálculo prescribió el triple de la dosis habitual de un antihipertensivo, lo que provocó un episodio transitorio de hipotensión sintomática en el paciente que fue corregido con sueros en observación. ¿Cuál es la conducta ética y deontológica recomendada respecto a la comunicación con el paciente y su familia?",
    "options": {
      "A": "Revelar con honestidad y empatía lo ocurrido (open disclosure), explicar las medidas terapéuticas adoptadas para subsanarlo, pedir las disculpas correspondientes, registrar objetivamente el incidente en el sistema de gestión de riesgos y reforzar las medidas de seguridad para evitar recurrencias.",
      "B": "Alterar y borrar la indicación en el expediente clínico para culpar a la enfermera de turno.",
      "C": "Decirle al paciente que su cuerpo produjo una hormona misteriosa que le bajó la presión para no admitir el error.",
      "D": "Cobrarle el doble de honorarios por el suero utilizado en revertir la hipotensión."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "Adulterar el expediente clínico constituye delito de falsedad documental y fraude procesal punible.",
      "C": "La mentira o engaño vulnera la confianza y la dignidad ética de la relación médico-paciente.",
      "D": "El lucro sobre un error médico iatrogénico es una aberración deontológica y civil."
    },
    "explanation": "La cultura de seguridad del paciente promueve la divulgación abierta y honesta del error médico (open disclosure). Informar con veracidad y transparencia fortalece la confianza, disminuye la litigiosidad y previene nuevos fallos sistémicos. La alteración dolosa del expediente para encubrir un error constituye falsedad documental y agrava la responsabilidad legal."
  },
  {
    "id": "cssp-jvpm-40",
    "juntaId": "jvpm",
    "juntaName": "Junta de Vigilancia de la Profesión Médica",
    "area": "Regulación del Ejercicio de Médicos Extranjeros en El Salvador",
    "legalBasis": "Código de Salud de El Salvador, Arts. 32 al 35; y Ley de la Junta de Vigilancia de la Profesión Médica.",
    "statement": "Un médico extranjero con título obtenido en su país de origen arriba a El Salvador contratado por una clínica particular para ejercer la medicina asistencial directa con pacientes salvadoreños. ¿Cuáles son los requisitos legales ineludibles que debe cumplir antes de examinar y tratar legalmente al primer paciente?",
    "options": {
      "A": "Haber homologado e incorporado su título universitario ante la Universidad de El Salvador (UES) o Ministerio de Educación, y haber tramitado y obtenido la correspondiente inscripción, autorización y carné oficial de registro ante la Junta de Vigilancia de la Profesión Médica (JVPM).",
      "B": "Basta con ingresar al país con visa de turista y portar su pasaporte extranjero.",
      "C": "No requiere ningún trámite si promete regresar a su país al terminar el año.",
      "D": "Solo se exige que publique un anuncio en un periódico local saludando a la población salvadoreña."
    },
    "correctAnswer": "A",
    "distractorRationale": {
      "B": "La visa de turista no habilita laboralmente ni sustituye la colegiación y habilitación profesional sanitaria.",
      "C": "La temporalidad de la estancia no exime del control estatal sanitario para salvaguardar la vida humana.",
      "D": "Un anuncio periodístico no posee ninguna validez administrativa de habilitación profesional."
    },
    "explanation": "El Art. 68 de la Constitución y el Código de Salud reservan el ejercicio de las profesiones de la salud a quienes cuenten con título legalmente incorporado y registro vigente ante las Juntas de Vigilancia. Ejercer la medicina en El Salvador amparado únicamente en títulos foráneos sin homologación ni autorización de la JVPM constituye el delito de ejercicio ilegal de profesión (intrusismo)."
  },
  {
    "id": "cssp-jvpo-01",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Farmacología Estomatológica y Urgencias Quirúrgicas",
    "legalBasis": "Manual de Práctica Odontológica Segura de la JVPO y Código de Salud Art. 46.",
    "statement": "En un paciente hipertenso controlado de 62 años que requiere exodoncia de un tercer molar inferior retenido, ¿cuál es la consideración farmacológica obligatoria respecto a la dosis de anestésico local con epinefrina (1:100,000)?",
    "options": {
      "A": "Está prohibido el uso de cualquier anestésico local, requiriendo anestesia general hospitalaria obligatoria.",
      "B": "Se debe limitar la dosis máxima de epinefrina a 0.04 mg (máximo 2 cartuchos de lidocaína al 2% con epinefrina 1:100,000) previa aspiración negativa para evitar inyección intravascular.",
      "C": "Se pueden infiltrar libremente hasta 10 cartuchos sin riesgo alguno para la presión arterial.",
      "D": "Infiltrar adrenalina pura sin diluir en la mucosa lingual."
    },
    "correctAnswer": "B",
    "explanation": "En pacientes con compromiso cardiovascular (estadio 2 de la AHA o hipertensos controlados), el protocolo clínico estándar de la JVPO limita la epinefrina a 0.04 mg (aproximadamente 2 cartuchos de 1.8 ml de lidocaína al 2% 1:100,000), siempre con aspiración previa en dos planos para evitar taquiarritmias o picos hipertensivos.",
    "distractorRationale": {
      "A": "La anestesia local es perfectamente segura si se respetan las dosis límite calculadas por peso y estado cardiovascular.",
      "C": "Superar 0.04 mg de epinefrina en hipertensos eleva drásticamente el riesgo de crisis hipertensiva o infarto agudo.",
      "D": "La adrenalina pura causa necrosis tisular isquémica severa y arritmias mortales."
    }
  },
  {
    "id": "cssp-jvpo-02",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Bioseguridad y Manejo de Desechos Bioinfecciosos",
    "legalBasis": "Reglamento Técnico Salvadoreño RTS 13.01.01:14 (Manejo de Desechos Bioinfecciosos) y Código de Salud Art. 48.",
    "statement": "En la clínica odontológica, ¿cuál es el destino reglamentario para las agujas dentales carpule, hojas de bisturí y limas endodónticas usadas?",
    "options": {
      "A": "Bolsa plástica negra común junto con los desechos domésticos de oficina.",
      "B": "Recipiente rígido de polipropileno de color rojo, resistente a perforaciones, con el símbolo universal de bioseguridad y llenado hasta un máximo de 3/4 de su capacidad.",
      "C": "Botellas de plástico de refresco sin rotular ni tapa de seguridad.",
      "D": "Lavarlas con detergente para reutilizarlas en el siguiente paciente."
    },
    "correctAnswer": "B",
    "explanation": "La normativa salvadoreña para desechos peligrosos bioinfecciosos exige depositar todo material punzocortante en contenedores rígidos rojos de polipropileno que no permitan perforaciones, rotulados y cerrados al alcanzar el 75-80% de su capacidad antes de su recolección especializada.",
    "distractorRationale": {
      "A": "Depositar punzocortantes en bolsas comunes genera accidentes laborales con riesgo de transmisión de VIH y Hepatitis B/C al personal de aseo.",
      "C": "El uso de recipientes improvisados viola las normas técnicas del Ministerio de Medio Ambiente y el CSSP.",
      "D": "Las agujas y hojas de bisturí son material descartable de un solo uso; su reutilización es una falta gravísima sujeta a clausura del consultorio."
    }
  },
  {
    "id": "cssp-jvpo-03",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Profilaxis Antibiótica y Prevención de Endocarditis Bacteriana",
    "legalBasis": "Guías Clínicas de la AHA y Protocolo de Profilaxis Odontológica de la JVPO.",
    "statement": "Un paciente de 55 años con prótesis valvular cardíaca aórtica mecánica asistirá a raspado y alisado radicular profundo subgingival. Conforme a las directrices de la JVPO y la AHA para la prevención de endocarditis bacteriana, ¿cuál es el régimen profiláctico de primera línea recomendado en pacientes no alérgicos a penicilinas?",
    "options": {
      "A": "Amoxicilina 2 g vía oral administrada en dosis única entre 30 a 60 minutos antes del procedimiento.",
      "B": "Eritromicina 500 mg vía oral cada 8 horas durante 7 días después del procedimiento.",
      "C": "Ciprofloxacino 1 g vía oral 2 horas antes de la sesión odontológica.",
      "D": "No se requiere profilaxis antibiótica ya que el raspado radicular no produce bacteriemia transitoria."
    },
    "correctAnswer": "A",
    "explanation": "En pacientes de alto riesgo de endocarditis infecciosa (como portadores de válvulas mecánicas o bioprótesis), la pauta estándar de la AHA y JVPO consiste en Amoxicilina 2 g por vía oral en dosis única 30 a 60 minutos previos al inicio de procedimientos que involucren manipulación de tejido gingival o perforación de mucosa oral.",
    "distractorRationale": {
      "B": "La administración prolongada post-procedimiento no previene la bacteriemia inicial y favorece resistencia antimicrobiana; la eritromicina ya no es de primera línea.",
      "C": "Las fluoroquinolonas no cubren adecuadamente los estreptococos del grupo viridans orales responsables de la endocarditis infecciosa.",
      "D": "El raspado y alisado radicular subgingival genera bacteriemia transitoria masiva con alto riesgo de colonización en prótesis valvulares."
    }
  },
  {
    "id": "cssp-jvpo-04",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Consentimiento Informado y Cirugía Bucal",
    "legalBasis": "Código de Salud de El Salvador, Art. 48 y Manual de Deontología Odontológica de la JVPO.",
    "statement": "Previo a realizar la extracción quirúrgica de un tercer molar inferior retenido con raíces en íntima proximidad al conducto dentario inferior (confirmado por tomografía Cone Beam), ¿cuál es el requisito bioético y legal exigido al cirujano dentista?",
    "options": {
      "A": "Explicar verbalmente de manera rápida sin necesidad de firma documental para no alarmar al paciente.",
      "B": "Obtener el consentimiento informado por escrito debidamente firmado por el paciente o tutor, detallando de forma comprensible los riesgos inherentes, especialmente la posibilidad de parestesia temporal o permanente del nervio dentario inferior o lingual.",
      "C": "Hacer que el paciente firme una cláusula que exima al odontólogo de toda culpa o responsabilidad legal por negligencia.",
      "D": "Omitir la mención de riesgos neurológicos para que el paciente no rechace la intervención programada."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 48 del Código de Salud y las directrices deontológicas de la JVPO determinan que todo procedimiento quirúrgico estomatológico de riesgo debe contar con consentimiento informado escrito. En terceros molares en íntimo contacto con el nervio alveolar inferior, informar sobre el riesgo de daño sensorial o parestesia es una exigencia legal sustantiva.",
    "distractorRationale": {
      "A": "El consentimiento puramente verbal en procedimientos quirúrgicos no satisface los requisitos probatorios de la lex artis odontológica.",
      "C": "Las cláusulas leoninas de renuncia previa a la responsabilidad por mala praxis son nulas de pleno derecho según el derecho civil y sanitario salvadoreño.",
      "D": "Ocultar deliberadamente riesgos conocidos invalida el consentimiento y califica como falta grave al deber de información veraz."
    }
  },
  {
    "id": "cssp-jvpo-05",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Urgencias Médicas en el Consultorio Dental: Choque Anafiláctico",
    "legalBasis": "Manual de Urgencias y Soporte Vital Básico Odontológico de la JVPO.",
    "statement": "Inmediatamente después de aplicar una técnica anestésica troncular, un paciente presenta prurito generalizado, estridor respiratorio laringoespasmo, hipotensión severa (PA 70/40 mmHg) y pérdida parcial del estado de alerta (Choque Anafiláctico). ¿Cuál es la intervención farmacológica de primera línea mandatoria?",
    "options": {
      "A": "Administrar Epinefrina (Adrenalina) 1:1,000 por vía intramuscular (0.3 a 0.5 mg) en la cara anterolateral del tercio medio del muslo, colocar al paciente en posición supina y suministrar oxígeno a alto flujo.",
      "B": "Administrar Hidrocortisona 100 mg IV y esperar 30 minutos a que haga efecto antiinflamatorio.",
      "C": "Indicar difenhidramina 50 mg vía oral con un vaso de agua.",
      "D": "Aplicar alcohol en la frente y ofrecer sales de amoníaco aromático."
    },
    "correctAnswer": "A",
    "explanation": "La epinefrina intramuscular (1:1,000 en dosis de 0.3-0.5 mg en muslo) es el fármaco de primera línea insustituible para el manejo del choque anafiláctico agudo, revirtiendo el broncoespasmo, estabilizando los mastocitos y elevando la resistencia vascular periférica. Los corticoides y antihistamínicos son coadyuvantes secundarios de acción retardada.",
    "distractorRationale": {
      "B": "Los corticoides tienen un inicio de acción de 4 a 6 horas; no detienen la asfixia por laringoespasmo ni el colapso vascular agudo de la anafilaxia.",
      "C": "La vía oral está formalmente contraindicada en pacientes con compromiso de la vía aérea o hipotensión por riesgo inminente de aspiración pulmonar.",
      "D": "El uso de olores irritantes es una práctica empírica obsoleta que no tiene efecto en una emergencia inmunológica mortal."
    }
  },
  {
    "id": "cssp-jvpo-06",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Marco Legal del Ejercicio y Código de Salud",
    "legalBasis": "Código de Salud de El Salvador, Arts. 46 al 52.",
    "statement": "Conforme a los Arts. 46 al 52 del Código de Salud de El Salvador, ¿cuál es el requisito legal indispensable para que un profesional de la odontología pueda abrir y operar un consultorio o clínica dental legalmente en el país?",
    "options": {
      "A": "Estar únicamente inscrito en el Registro de Comercio como comerciante individual.",
      "B": "Poseer título universitario debidamente registrado, estar inscrito y poseer número de junta vigente en la JVPO, y contar con la debida autorización de funcionamiento e inspección sanitaria del CSSP.",
      "C": "Contar con una certificación de un curso técnico de mecánica dental de 6 meses.",
      "D": "Haber ejercido como asistente dental durante más de 5 años en un hospital público."
    },
    "correctAnswer": "B",
    "explanation": "El Código de Salud establece que la apertura y funcionamiento de consultorios odontológicos requiere que el profesional esté legalmente facultado e inscrito ante la JVPO (CSSP) y que el establecimiento cuente con la correspondiente licencia sanitaria de apertura tras inspección técnica de sus condiciones sanitarias y de bioseguridad.",
    "distractorRationale": {
      "A": "El registro mercantil no habilita para el ejercicio sanitario ni sustituye las licencias sanitarias del CSSP.",
      "C": "La mecánica dental es una profesión técnica auxiliar y no faculta para la atención clínica directa de pacientes ni prescripción.",
      "D": "La experiencia como asistente no otorga facultades profesionales odontológicas ni habilita para la apertura de clínicas."
    }
  },
  {
    "id": "cssp-jvpo-07",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Radioprotección y Normativa Técnica Sanitaria",
    "legalBasis": "Reglamento de Seguridad Radiológica (UNRA/MINSAL) y Código de Salud Art. 48.",
    "statement": "En la toma rutinaria de radiografías periapicales en el consultorio dental, ¿cuál de las siguientes medidas de radioprotección hacia el paciente y el operador es obligatoria según las normas técnicas de seguridad radiológica en El Salvador?",
    "options": {
      "A": "Sostener la película radiográfica con los dedos del odontólogo durante el disparo del haz de rayos X.",
      "B": "Colocar al paciente mandil plomado con collarín tiroideo (con espesor mínimo equivalente de 0.25 mm de plomo), y el operador debe ubicarse detrás de un biombo plomado o a una distancia mínima de 2 metros del cabezal en un ángulo de 90° a 135° respecto al haz primario.",
      "C": "Disparar el equipo de rayos X apuntando directamente hacia la puerta abierta del consultorio.",
      "D": "Omitir el blindaje plomado en niños porque la dosis periapical es biológicamente insignificante."
    },
    "correctAnswer": "B",
    "explanation": "El reglamento de radioprotección exige el uso obligatorio de collar tiroideo y chaleco plomado para proteger órganos radiosensibles en el paciente. Para el operador, está terminantemente prohibido sostener la película; debe guardar una distancia de al menos 2 metros en ángulo de 90° a 135° o utilizar barrera plomada.",
    "distractorRationale": {
      "A": "Sostener la película expone innecesariamente las manos del operador a radiación primaria repetida acumulativa, violando las normas de radioprotección.",
      "C": "Apuntar el haz primario hacia zonas no blindadas o de tránsito expone a terceros a radiación ionizante no justificada.",
      "D": "Los niños son biológicamente mucho más radiosensibles que los adultos; la omisión de protección tiroidea es una falta grave a la seguridad radiológica."
    }
  },
  {
    "id": "cssp-jvpo-08",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Toxicidad Sistémica por Anestésicos Locales (LAST)",
    "legalBasis": "Guía Clínica de Seguridad en Anestesia Local Odontológica de la JVPO.",
    "statement": "Durante la colocación de un bloqueo mandibular con mepivacaína al 3%, el paciente refiere súbitamente sabor metálico en la boca, entumecimiento peribucal, acúfenos (zumbidos) y temblor muscular, progresando a desorientación. ¿Cuál es el diagnóstico de este cuadro clínico y el manejo inicial de emergencia?",
    "options": {
      "A": "Crisis de histeria conversiva leve; indicarle respirar en una bolsa de papel y continuar la exodoncia.",
      "B": "Toxicidad Sistémica por Anestésicos Locales (LAST) por inyección intravascular inadvertida; suspender de inmediato la inyección, mantener vía aérea permeable, administrar oxígeno al 100%, monitorizar signos vitales y preparar emulsión lipídica al 20% (Intralipid).",
      "C": "Reacción alérgica a sulfitos; administrar adrenalina intramuscular y continuar infiltrando.",
      "D": "Hipoglucemia reactiva; forzar la ingesta oral de caramelos masticables mientras el paciente tiembla."
    },
    "correctAnswer": "B",
    "explanation": "El sabor metálico, parestesias peribucales, zumbidos y temblores son signos prodrómicos patognomónicos de LAST inducida por entrada intravascular o absorción rápida de anestésicos locales. Requiere interrupción inmediata, oxigenación, soporte vital avanzado y disponibilidad de emulsión de lípidos al 20% si hay colapso cardiovascular o convulsiones.",
    "distractorRationale": {
      "A": "Ignorar los signos de neurotoxicidad de anestésicos locales puede conducir a convulsiones tónico-clónicas, paro respiratorio y colapso cardiovascular mortal.",
      "C": "La adrenalina agrava la taquicardia y arritmias inducidas por toxicidad sistémica por anestésicos locales; no es una alergia mediada por IgE.",
      "D": "Administrar alimentos orales a un paciente con alteración del sensorio genera broncoaspiración fatal."
    }
  },
  {
    "id": "cssp-jvpo-09",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Osteonecrosis de los Maxilares Asociada a Medicamentos (MRONJ)",
    "legalBasis": "Guía Clínica, Consenso AAOMS y Protocolo de Cirugía Odontológica Segura de la JVPO.",
    "statement": "Una paciente de 68 años con osteoporosis severa en tratamiento continuo con Ácido Zoledrónico endovenoso durante 3 años requiere la exodoncia de un premolar con movilidad grado III. En relación con el riesgo de Osteonecrosis de los Maxilares Asociada a Medicamentos (MRONJ), ¿cuál es la conducta odontológica recomendada?",
    "options": {
      "A": "Realizar la exodoncia quirúrgica agresiva sin interconsulta ni precauciones, pues los bifosfonatos orales e IV son inocuos para el hueso alveolar.",
      "B": "Efectuar interconsulta médica con su oncólogo/reumatólogo, considerar alternativas conservadoras no quirúrgicas de ser posible, y de ser indispensable la cirugía, realizar un procedimiento mínimamente traumático con profilaxis antibiótica, cierre primario sin tensión y consentimiento informado específico sobre el riesgo de osteonecrosis ósea.",
      "C": "Suspender el ácido zoledrónico 24 horas antes y realizar osteotomía amplia para remodelar el hueso.",
      "D": "Garantizar a la paciente que el hueso mandibular cicatrizará perfectamente en 48 horas mediante enjuagues de agua con sal."
    },
    "correctAnswer": "B",
    "explanation": "Los bifosfonatos IV potentes como el ácido zoledrónico inhiben irreversiblemente la función osteoclástica con vidas medias óseas de más de una década. La exodoncia quirúrgica es el principal desencadenante de MRONJ. Se requiere interconsulta, técnica atraumática, profilaxis antimicrobiana, cobertura de bordes óseos agudos y consentimiento informado específico.",
    "distractorRationale": {
      "A": "La exodoncia agresiva en pacientes bajo bifosfonatos IV presenta una incidencia muy alta de osteonecrosis con exposición ósea crónica intratable.",
      "C": "Suspender el bifosfonato 24 horas antes no tiene impacto biológico ya que el fármaco permanece unido a la matriz mineral ósea durante años.",
      "D": "Ofrecer garantías de cicatrización rápida sin riesgo ante fármacos antiresortivos constituye desinformación médica y mala praxis deontológica."
    }
  },
  {
    "id": "cssp-jvpo-10",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Infecciones Odontogénicas Graves de Espacios Fasciales",
    "legalBasis": "Guía de Manejo Hospitalario de Infecciones Cervicofaciales del MINSAL y JVPO.",
    "statement": "Un paciente acude con edema indurado submandibular, sublingual y submentoniano bilateral (\"cuello de toro\"), disfagia severa, sialorrea, trismo y elevación del suelo de la boca con protrusión de la lengua hacia atrás dificultando la respiración (Angina de Ludwig secundaria a infección de tercer molar inferior). ¿Cuál es la prioridad médica ineludible?",
    "options": {
      "A": "Recetarle amoxicilina oral simple y enviarlo a su casa en reposo con compresas tibias.",
      "B": "Aseguramiento inmediato y prioritario de la vía aérea (posible intubación fibroscópica o traqueostomía de urgencia), derivación inmediata a tercer nivel hospitalario (máxilo-facial), fluidoterapia, antibioticoterapia parenteral de amplio espectro y descompresión quirúrgica de los espacios fasciales.",
      "C": "Intentar realizar la exodoncia del molar en el sillón dental sin anestesia para no empeorar el edema.",
      "D": "Indicar enjuagues con clorhexidina al 0.12% y citarlo para revisión en 7 días."
    },
    "correctAnswer": "B",
    "explanation": "La Angina de Ludwig es una celulitis rápidamente progresiva de los espacios sublingual, submandibular y submentoniano bilateral con elevadísima letalidad por asfixia mecánica debido al desplazamiento posterosuperior de la lengua. La prioridad absoluta e inmediata es proteger la vía aérea en un hospital de tercer nivel y realizar drenaje quirúrgico temprano.",
    "distractorRationale": {
      "A": "El manejo ambulatorio de una Angina de Ludwig conduce rápidamente al paro respiratorio obstructivo y muerte del paciente en pocas horas.",
      "C": "Manipular quirúrgicamente el molar en el consultorio ambulatorio precipita la obstrucción laríngea y disemina la infección al mediastino.",
      "D": "Los enjuagues tópicos no penetran los planos fasciales profundos del cuello ni evitan el colapso respiratorio inminente."
    }
  },
  {
    "id": "cssp-jvpo-11",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Traumatología Dentoalveolar en Pacientes Pediátricos",
    "legalBasis": "Guía Clínica de Traumatismos Dentales de la IADT y Protocolo de Odontopediatría de la JVPO.",
    "statement": "Un niño de 4 años sufre una caída en el parque resultando en la avulsión completa del incisivo central superior deciduo (diente de leche 5.1). La madre acude a la clínica dental a los 20 minutos con el diente en un vaso con leche fría. Conforme a las directrices de la IADT y la JVPO, ¿cuál es la conducta clínica indicada?",
    "options": {
      "A": "Reimplantar de inmediato el incisivo temporal y fijarlo con férula rígida de alambre durante 6 meses.",
      "B": "No reimplantar jamás el diente deciduo avulsionado, debido al alto riesgo documentado de anquilosis, daño irreversible o detención del desarrollo del germen del diente permanente subyacente.",
      "C": "Hervir el diente primario durante 10 minutos y pegarlo con ionómero de vidrio a los dientes vecinos.",
      "D": "Indicar a la madre que lo introduzca de nuevo en el alvéolo con fuerza bruta sin anestesia."
    },
    "correctAnswer": "B",
    "explanation": "Las guías internacionales de la IADT (International Association of Dental Traumatology) y la JVPO prohíben de forma absoluta la reimplantación de dientes primarios (deciduos) avulsionados. Reimplantarlo puede infectar o anquilosar el germen permanente sucesor (hipoplasia del esmalte, malformaciones coronoradiculares o impactación).",
    "distractorRationale": {
      "A": "Reimplantar dientes de leche avulsionados daña gravemente el germen dentario definitivo que se encuentra en íntima relación anatómica periapical.",
      "C": "Hervir el diente destruye la vitalidad periodontal y pegarlo con ionómero interfiere con la oclusión y erupción normal.",
      "D": "Forzar el reingreso alvéolar genera dolor traumático intenso, infección y laceración directa del folículo permanente."
    }
  },
  {
    "id": "cssp-jvpo-12",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Traumatología Dentoalveolar en Dientes Permanentes Jóvenes",
    "legalBasis": "Guías de Manejo de la IADT y Código de Salud Art. 48.",
    "statement": "Un adolescente de 13 años sufre avulsión de su incisivo central superior permanente derecho (1.1) durante un partido de fútbol. ¿Cuál es la conducta de emergencia óptima antes de que transcurran 60 minutos del traumatismo para preservar el ligamento periodontal?",
    "options": {
      "A": "Lavar el diente frotando enérgicamente la raíz con un cepillo duro y alcohol para desinfectarlo completamente.",
      "B": "Tomar el diente exclusivamente por la corona (sin tocar la raíz), enjuagarlo brevemente con suero salino si está sucio, reimplantarlo inmediatamente en el alvéolo o conservarlo en leche/solución salina/saliva, y ferulizar flexiblemente durante 2 semanas en el consultorio.",
      "C": "Dejar secar el diente al sol sobre una servilleta de papel antes de reimplantarlo al día siguiente.",
      "D": "Sumergirlo en lejía diluida y realizar la endodoncia extraoral con fresas de diamante."
    },
    "correctAnswer": "B",
    "explanation": "En avulsión de dientes permanentes, la supervivencia de las células del ligamento periodontal depende del tiempo extraoral (ideal < 60 min) y del medio de almacenamiento húmedo (leche, solución salina balanceada de Hanks o saliva). Manipular solo por la corona, no raspar la raíz, reimplantar y ferulizar con fijación fisiológica flexible por 14 días.",
    "distractorRationale": {
      "A": "Frotar o cepillar la superficie radicular destruye mecánicamente las células del ligamento periodontal remanentes, provocando necrosis y reabsorción radicular sustitutiva (anquilosis).",
      "C": "La desecación en seco destruye irreversiblemente el ligamento periodontal en menos de 30 minutos.",
      "D": "Los desinfectantes cáusticos y procedimientos extraorales agresivos matan todo tejido vital radicular."
    }
  },
  {
    "id": "cssp-jvpo-13",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Manejo Quirúrgico de Pacientes Anticoagulados",
    "legalBasis": "Guía de Práctica Odontológica en Pacientes con Terapia Antitrombótica de la JVPO.",
    "statement": "Un paciente de 70 años con fibrilación auricular crónica toma Warfarina y requiere la exodoncia no complicada de un premolar inferior. Su prueba de INR realizada 24 horas antes reporta 2.3 (rango terapéutico 2.0 a 3.0). ¿Cuál es la conducta médico-quirúrgica correcta?",
    "options": {
      "A": "Suspender totalmente la warfarina durante 7 días previos a la extracción sin indicación médica del cardiólogo.",
      "B": "Proceder a la exodoncia sin suspender la warfarina (dado que el INR está en rango terapéutico seguro < 3.0), aplicando medidas hemostáticas locales estrictas (gasas con ácido tranexámico, esponja de gelatina reabsorbible y sutura hemostática).",
      "C": "Administrar vitamina K endovenosa rápida para revertir el INR a 1.0 antes de pasar al sillón dental.",
      "D": "Infiltrar 8 cartuchos de mepivacaína al 3% pura en el piso de la boca sin suturar la herida."
    },
    "correctAnswer": "B",
    "explanation": "La evidencia actual y las directrices de la JVPO establecen que para procedimientos quirúrgicos menores (1 a 3 exodoncias simples), con INR entre 2.0 y 3.0 no se debe suspender la anticoagulación con warfarina debido al elevado riesgo tromboembólico (ACV). El sangrado se controla exitosamente con hemostáticos locales y suturas.",
    "distractorRationale": {
      "A": "Suspender la warfarina sin puente de heparina expone al paciente a eventos cardioembólicos letales o accidentes cerebrovasculares.",
      "C": "La vitamina K IV altera la estabilidad de la anticoagulación durante semanas y está reservada para hemorragias mayores con riesgo vital.",
      "D": "No aplicar suturas en pacientes anticoagulados garantiza una hemorragia postoperatoria profusa y reingreso a urgencias."
    }
  },
  {
    "id": "cssp-jvpo-14",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Accidentes por Irrigación con Hipoclorito de Sodio en Endodoncia",
    "legalBasis": "Guía Clínica de Endodoncia y Seguridad del Paciente de la JVPO.",
    "statement": "Durante la preparación biomecánica de un conducto radicular, la aguja de irrigación se traba en el tercio apical y se inyecta Hipoclorito de Sodio (NaOCl al 5.25%) a presión, extrudiéndose hacia los tejidos periapicales. El paciente refiere dolor insoportable y quemante instantáneo, seguido de tumefacción facial rápida y equimosis difusa. ¿Cuál es el manejo terapéutico mandatorio?",
    "options": {
      "A": "Continuar inyectando más hipoclorito para limpiar la zona periapical desinfectando la cara.",
      "B": "Suspender de inmediato la irrigación, tranquilizar al paciente, anestesiar localmente para control del dolor, irrigar abundantemente el conducto con suero salino estéril sin presión, aplicar compresas frías en las primeras 24 h (luego tibias), prescribir analgésicos, corticoides y cobertura antibiótica preventiva, y dar seguimiento estrecho.",
      "C": "Realizar una incisión externa en la piel de la mejilla con bisturí en el consultorio dental.",
      "D": "Indicar al paciente que coma hielo seco y darlo de alta sin medicación analgésica."
    },
    "correctAnswer": "B",
    "explanation": "El accidente por extrusión periapical de NaOCl causa necrosis química oxidativa severa de tejidos blandos. El protocolo exige cese inmediato, analgesia potente, lavado profuso con solución salina para diluir el químico, hielo en las primeras 24 horas para frenar el edema, corticoides sistémicos, antibióticos para prevenir sobreinfección y monitoreo estrecho.",
    "distractorRationale": {
      "A": "Inyectar más NaOCl aumenta masivamente la destrucción tisular, necrosis endotelial y riesgo de mediastinitis o parestesia permanente.",
      "C": "Las incisiones cutáneas indiscriminadas causan cicatrices faciales deformantes y están contraindicadas en ausencia de absceso purulento delimitado.",
      "D": "El hielo seco produce congelación tisular criogénica profunda y empeora el daño celular necrótico."
    }
  },
  {
    "id": "cssp-jvpo-15",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Manejo del Dolor e Inflamación en Embarazadas",
    "legalBasis": "Norma Técnica de Atención Odontológica de la Mujer Embarazada del MINSAL y JVPO.",
    "statement": "Una paciente en el tercer trimestre de embarazo (semana 34) acude a la clínica dental con dolor odontogénico moderado a severo por pulpitis aguda. Respecto a la prescripción analgésica y antiinflamatoria, ¿cuál es el fármaco de primera línea de elección y qué grupo farmacológico está formalmente contraindicado?",
    "options": {
      "A": "El fármaco de elección es el Paracetamol (Acetaminofén); los AINES (como ibuprofeno o ketorolaco) están contraindicados en el tercer trimestre por riesgo de cierre prematuro del conducto arterioso fetal e hipertensión pulmonar neonatal.",
      "B": "El fármaco de elección es Ketorolaco sublingual 30 mg cada 6 horas durante 15 días.",
      "C": "Está indicado el uso de aspirina en dosis de 1 g cada 4 horas junto con fenacetina.",
      "D": "No se puede formular ningún medicamento ni atender odontológicamente a una mujer embarazada bajo ninguna circunstancia legal."
    },
    "correctAnswer": "A",
    "explanation": "El acetaminofén (paracetamol) es el analgésico más seguro en todas las etapas de la gestación (categoría B). Los AINEs están formalmente contraindicados en el tercer trimestre debido a que inhiben las prostaglandinas responsables de mantener la permeabilidad del ductus arterioso, pudiendo provocar su cierre prematuro, hipertensión pulmonar neonatal y prolongación del parto.",
    "distractorRationale": {
      "B": "El ketorolaco es un potente AINE con alto riesgo de oligohidramnios, cierre prematuro del ductus y hemorragia materna fetal.",
      "C": "La aspirina a altas dosis en el tercer trimestre incrementa drásticamente el riesgo de hemorragia materna y fetal peri-parto.",
      "D": "La atención odontológica oportuna es un derecho de la mujer embarazada; postergar tratamientos agudos aumenta el riesgo de infecciones sistémicas."
    }
  },
  {
    "id": "cssp-jvpo-16",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Bioseguridad y Monitoreo del Autoclave",
    "legalBasis": "Norma de Control de Infecciones y Bioseguridad en Odontología de la JVPO.",
    "statement": "Para garantizar la destrucción efectiva de microorganismos altamente resistentes como las esporas bacterianas en el instrumental quirúrgico odontológico esterilizado en autoclave a vapor, ¿cuál es el estándar técnico de monitoreo biológico mandatorio?",
    "options": {
      "A": "Observar únicamente el cambio de color de la cinta testigo externa adhesiva en cada ciclo.",
      "B": "Utilizar indicadores biológicos con esporas de Geobacillus stearothermophilus con periodicidad al menos semanal y en cada carga que contenga material implantable.",
      "C": "Oler el vapor que emite el autoclave al abrir la compuerta para verificar que huela a limpio.",
      "D": "Sumergir el instrumental en alcohol al 70% durante 5 minutos y no usar autoclave para no desafilar las fresas."
    },
    "correctAnswer": "B",
    "explanation": "Los indicadores químicos (cintas) solo demuestran exposición a temperatura, no esterilidad. La única prueba concluyente de esterilización biológica exigida por las normas de la JVPO y el CSSP es el reto con esporas vivas de Geobacillus stearothermophilus, evaluadas periódicamente (al menos semanalmente) mediante incubación.",
    "distractorRationale": {
      "A": "Las cintas químicas solo viran por calor físico superficial, pero no acreditan la muerte de esporas bacterianas resistentes en el interior de los paquetes.",
      "C": "El vapor no tiene propiedades organolépticas que permitan juzgar esterilidad biológica.",
      "D": "El alcohol no es esporicida ni esterilizante; reutilizar instrumental quirúrgico sin autoclave transmite hepatitis viral, VIH y bacterias resistentes."
    }
  },
  {
    "id": "cssp-jvpo-17",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Diagnóstico Precoz del Cáncer Bucal y Lesiones Potencialmente Malignas",
    "legalBasis": "Código de Salud de El Salvador, Art. 48 y Guía de Detección Precoz de Cáncer Oral de la JVPO.",
    "statement": "Durante un examen estomatológico de rutina, el odontólogo identifica en el borde lateral de la lengua de un fumador crónico una úlcera de 1.5 cm de bordes evertidos, base indurada e indolora, que no ha cicatrizado tras 3 semanas de evolución. ¿Cuál es la conducta diagnóstica obligatoria?",
    "options": {
      "A": "Recetar una pomada con esteroides tópicos y citar al paciente para dentro de un año.",
      "B": "Sospechar Carcinoma Epidermoide (Espinocelular) y proceder de inmediato a la toma de biopsia incisional o derivación urgente a cirugía máxilo-facial/patología bucal para estudio histopatológico.",
      "C": "Cauterizar la úlcera con nitrato de plata en lápiz hasta destruirla por completo sin muestra patológica.",
      "D": "Asegurar al paciente que solo es una simple afta traumática por morderse la lengua al comer."
    },
    "correctAnswer": "B",
    "explanation": "Toda úlcera bucal o lesión en bordes laterales de lengua o suelo de boca que persista por más de 14 a 21 días sin causa traumática evidente debe considerarse maligna (Carcinoma Espinocelular) hasta que la biopsia demuestre lo contrario. Diferir o cauterizar sin estudio patológico retrasa el diagnóstico oncológico y compromete la vida.",
    "distractorRationale": {
      "A": "Los corticoides tópicos en una neoplasia maligna suprimen la respuesta inmune local y aceleran la invasión tumoral estromal.",
      "C": "La cauterización destruye el tejido patológico impidiendo el diagnóstico histopatológico oportuno y estadificación.",
      "D": "Las aftas benignas curan espontáneamente en 7 a 14 días; ignorar una úlcera crónica indurada constituye mala praxis por retraso diagnóstico."
    }
  },
  {
    "id": "cssp-jvpo-18",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Alveolitis Seca (Osteítis Alveolar Fibrinolítica)",
    "legalBasis": "Manual de Urgencias Odontológicas y Terapéutica Quirúrgica de la JVPO.",
    "statement": "A las 72 horas de una exodoncia de un tercer molar inferior, el paciente regresa con dolor lancinante e irradiado a la región temporal y ótica, halitosis fétida, y al examen se observa el alvéolo denudado, sin coágulo sanguíneo y con hueso alveolar expuesto sumamente sensible al tacto (Alveolitis Seca). ¿Cuál es el tratamiento local de elección según la lex artis?",
    "options": {
      "A": "Curetear vigorosamente el fondo óseo con una cucharilla sin anestesia para obligar a que sangre profusamente.",
      "B": "Irrigación suave con solución salina tibia para retirar detritos, colocación de un apósito alveolar sedante (como pasta con eugenol u óxido de zinc-eugenol) sin compactar en exceso, y control del dolor mediante analgésicos sistémicos.",
      "C": "Rellenar el alvéolo con cemento de fosfato de zinc definitivo para taponar la cavidad.",
      "D": "Prescribir tres antibióticos diferentes vía intravenosa y no tocar el alvéolo."
    },
    "correctAnswer": "B",
    "explanation": "La alveolitis seca es una alteración de la cicatrización caracterizada por la lisis prematura del coágulo por actividad fibrinolítica, sin infección bacteriana purulenta profunda inicial. No debe rasparse ni curetearse agresivamente el hueso expuesto porque se propaga la necrosis ósea. Se irriga con suero y se coloca una pasta sedante analgésica tópica temporal.",
    "distractorRationale": {
      "A": "Curetear el hueso denudado e isquémico reinicia el ciclo inflamatorio, daña la lámina dura y prolonga el sufrimiento del paciente.",
      "C": "El cemento de fosfato de zinc fragua generando una reacción exotérmica cáustica que necrotiza el hueso perialveolar.",
      "D": "La alveolitis seca no es una infección bacteriana invasiva supurativa; prescribir politerapia antibiótica IV no alivia el dolor alveolar y es un uso irracional."
    }
  },
  {
    "id": "cssp-jvpo-19",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Comunicación Oroantral (COA) Accidental",
    "legalBasis": "Manual de Procedimientos Quirúrgicos de Cirugía Bucal de la JVPO.",
    "statement": "Durante la extracción de las raíces de un primer molar superior con raíces antrales divergentes, el odontólogo nota burbujeo de aire y sangre en el alvéolo al respirar el paciente, y confirma la sospecha al realizar una maniobra de Valsalva suave (Comunicación Oroantral < 3 mm). ¿Cuál es la conducta terapéutica inmediata?",
    "options": {
      "A": "Sondar enérgicamente el seno maxilar con un explorador de conductos para medir la profundidad de la cavidad.",
      "B": "Lograr hemostasia, colocar una esponja de gelatina reabsorbible o colágeno en el alvéolo, suturar en ocho los bordes gingivales para lograr cierre primario, prescribir descongestionantes nasales, antibióticos (Amoxicilina-Clavulánico) e indicar al paciente no sonarse la nariz ni usar pajillas durante 10 días.",
      "C": "Ampliar la comunicación con una fresa quirúrgica para drenar todo el seno maxilar hacia la boca.",
      "D": "Dar de alta al paciente sin indicaciones de autocuidado ni medicación."
    },
    "correctAnswer": "B",
    "explanation": "En perforaciones orosinusales agudas pequeñas (< 3-4 mm), el sellado con esponja hemostática reabsorbible y sutura compresiva de tejidos blandos permite la organización del coágulo y el cierre espontáneo. Las instrucciones de no generar presión negativa/positiva nasal (no sonarse, no estornudar con la boca cerrada, no aspirar con pajillas) son críticas para evitar sinusitis crónica.",
    "distractorRationale": {
      "A": "Sondar agresivamente rompe la membrana de Schneider e introduce bacterias bucales al interior del seno maxilar estéril.",
      "C": "Ampliar el defecto óseo innecesariamente transforma una comunicación pequeña fácilmente tratable en una fístula oroantral crónica gigante.",
      "D": "Sin cuidados de presión aérea y antibióticos profilácticos, la comunicación oroantral progresa inevitablemente a sinusitis maxilar infecciosa y fístula epitelizada."
    }
  },
  {
    "id": "cssp-jvpo-20",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Manejo de Pacientes Diabéticos en Cirugía Bucal",
    "legalBasis": "Guía Clínica de Atención Estomatológica en Pacientes con Compromiso Sistémico de la JVPO.",
    "statement": "Un paciente masculino de 58 años diagnosticado con Diabetes Mellitus Tipo 2 acude para múltiples exodoncias por restos radiculares. Al interrogarlo, manifiesta no haber tomado su metformina esa mañana por venir en ayunas y su glucómetro reporta 310 mg/dL de glucemia capilar al momento de la cita programada. ¿Cuál es la conducta adecuada?",
    "options": {
      "A": "Realizar todas las exodoncias de inmediato ya que la glucosa sanguínea no influye en la cicatrización alveolar.",
      "B": "Diferir el procedimiento quirúrgico electivo, explicar al paciente los riesgos graves de infección alveolar y retardo cicatrizal con glucemias > 200 mg/dL, coordinar con su médico tratante para estabilización glucémica y citar a primera hora de la mañana tras haber desayunado y tomado su medicación habitual.",
      "C": "Inyectarle 50 unidades de insulina regular en la encía marginal y operarlo 5 minutos después.",
      "D": "Indicarle que beba 2 litros de refresco carbonatado con azúcar para neutralizar la acidosis."
    },
    "correctAnswer": "B",
    "explanation": "En odontología electiva no deben realizarse procedimientos quirúrgicos invasivos con glucemias descompensadas (> 200 mg/dL), dado que la hiperglucemia altera la quimiotaxis de neutrófilos, deteriora la fagocitosis y predispone a infecciones fulminantes y osteítis. Las citas quirúrgicas deben ser matutinas, cortas y sin alterar el desayuno habitual ni su fármaco antidiabético.",
    "distractorRationale": {
      "A": "Operar con hiperglucemia severa precipita infecciones destructivas de los espacios faciales y retardo cicatrizal crónico.",
      "C": "La administración empírica no monitorizada de dosis masivas de insulina en un consultorio dental induce choque hipoglucémico mortal.",
      "D": "El azúcar exacerba el estado hiperglucémico pudiendo desencadenar una crisis hiperosmolar o cetoacidosis."
    }
  },
  {
    "id": "cssp-jvpo-21",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Riesgo de Metahemoglobinemia por Anestésicos Tópicos y Locales",
    "legalBasis": "Alerta Sanitaria de la DNM y Manual de Anestesia Odontológica de la JVPO.",
    "statement": "Tras la aplicación extensa y desmedida de gel tópico de Benzocaína al 20% en la mucosa oral de un lactante para aliviar síntomas de dentición, el paciente presenta cianosis labial y acra que no mejora con oxígeno suplementario, cefalea, taquicardia y fatiga extrema (Metahemoglobinemia inducida por benzocaína). ¿Cuál es el antídoto específico endovenoso?",
    "options": {
      "A": "Atropina sulfato 1 mg IV directo.",
      "B": "Azul de Metileno al 1% administrado por vía intravenosa lenta (1 a 2 mg/kg de peso).",
      "C": "Naloxona clorhidrato 0.4 mg IV.",
      "D": "Flumazenil 0.5 mg IV."
    },
    "correctAnswer": "B",
    "explanation": "La benzocaína y la prilocaína pueden oxidar el hierro ferroso ($Fe^{2+}$) de la hemoglobina a su forma férrica ($Fe^{3+}$), transformándola en metahemoglobina incapaz de transportar oxígeno a los tejidos periféricos. El antídoto específico de elección es el Azul de Metileno (1 a 2 mg/kg en solución al 1% IV lenta), que actúa como aceptor exógeno de electrones en la vía de la metahemoglobina reductasa.",
    "distractorRationale": {
      "A": "La atropina es un anticolinérgico para bradicardia sinusal y no tiene actividad reductora sobre el hierro hemoglobínico.",
      "C": "La naloxona es el antagonista específico para sobredosis por opioides, inerte frente a la metahemoglobinemia.",
      "D": "El flumazenil revierte exclusivamente los receptores de benzodiacepinas."
    }
  },
  {
    "id": "cssp-jvpo-22",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Deontología y Publicidad en Odontología",
    "legalBasis": "Código de Salud de El Salvador, Arts. 48, 51 y Reglamento de Publicidad Médica del CSSP.",
    "statement": "Un odontólogo publica un anuncio publicitario en redes sociales con imágenes manipuladas de \"antes y después\", afirmando textualmente: \"Garantizamos un diseño de sonrisa perfecto de por vida o le devolvemos su dinero, rifamos 5 blanqueamientos dentales gratis entre quienes compartan la publicación\". Conforme al Código de Salud y el régimen disciplinario del CSSP/JVPO, ¿cómo se califica esta conducta?",
    "options": {
      "A": "Es una práctica comercial moderna plenamente autorizada que no incumbe a la Junta de Vigilancia.",
      "B": "Constituye una infracción deontológica y legal al régimen de publicidad sanitaria, pues está prohibido garantizar resultados terapéuticos absolutos en salud, mercantilizar los actos médicos mediante rifas y utilizar publicidad engañosa que confunda al público.",
      "C": "Es válida siempre que el profesional pague la tasa municipal de publicidad.",
      "D": "Es obligatoria para todos los odontólogos recién graduados."
    },
    "correctAnswer": "B",
    "explanation": "El Código de Salud salvadoreño prohíbe taxativamente la publicidad comercial engañosa en el ejercicio de las profesiones de la salud, prometer curaciones o resultados infalibles (la odontología es una profesión de medios, no de resultados absolutos garantizados) y realizar rifas o concursos mercantiles que degraden la dignidad del acto sanitario.",
    "distractorRationale": {
      "A": "El ejercicio de la salud no es una actividad puramente mercantil libre de regulación sanitaria y deontológica.",
      "C": "Los impuestos municipales sobre vallas publicitarias no convalidan violaciones al régimen ético-sanitario del Código de Salud.",
      "D": "No existe ninguna disposición que obligue a degradar la dignidad profesional mediante publicidad engañosa."
    }
  },
  {
    "id": "cssp-jvpo-23",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Manejo del Síncope Vasovagal en el Sillón Dental",
    "legalBasis": "Manual de Urgencias y Soporte Vital Básico Odontológico de la JVPO.",
    "statement": "Durante la preparación para una infiltración anestésica, un paciente joven experimenta palidez cutánea extrema, sudoración fría profusa (diaforesis), náuseas, visión borrosa y pérdida transitoria del tono postural y conciencia (Síncope Vasovagal común). ¿Cuál es la primera maniobra postural inmediata?",
    "options": {
      "A": "Sentar al paciente erguido y doblar su cabeza hacia adelante entre las rodillas con fuerza.",
      "B": "Colocar al paciente inmediatamente en posición supina horizontal con las piernas elevadas por encima del nivel del corazón (Posición de Trendelenburg modificada), verificar permeabilidad de vía aérea y aflojar prendas apretadas.",
      "C": "Poner de pie al paciente para que camine en el consultorio y respire aire fresco.",
      "D": "Hacer que el paciente ingiera agua helada inmediatamente mientras se encuentra inconsciente."
    },
    "correctAnswer": "B",
    "explanation": "El síncope vasovagal se produce por una hiperactividad parasimpática que causa bradicardia y vasodilatación periférica masiva, disminuyendo el flujo sanguíneo cerebral. La maniobra mandatoria de primera línea es colocarlo en decúbito supino con piernas elevadas (Trendelenburg), lo que favorece el retorno venoso hacia el encéfalo restaurando la perfusión cerebral rápidamente.",
    "distractorRationale": {
      "A": "Mantener la cabeza erguida reduce la perfusión cerebral y puede prolongar la isquemia encefálica transitoria y provocar convulsiones hipóxicas.",
      "C": "Forzar a levantarse a un paciente presincopal desencadena una caída traumática con fracturas craneofaciales.",
      "D": "Suministrar líquidos por vía oral a una persona sin conciencia plena produce broncoaspiración a la vía aérea inferior."
    }
  },
  {
    "id": "cssp-jvpo-24",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Parestesia Iatrogénica del Nervio Alveolar Inferior",
    "legalBasis": "Código de Salud Art. 48 y Deontología de la Cirugía Bucal de la JVPO.",
    "statement": "A los 10 días de una exodoncia compleja del tercer molar inferior 3.8, el paciente refiere ausencia total de sensibilidad táctil y dolorosa en la mitad izquierda del labio inferior y mentón, sin afectación de la motilidad facial ni del gusto (lesión del Nervio Alveolar Inferior). ¿Cuál es la valoración médico-legal y terapéutica inicial?",
    "options": {
      "A": "Decirle al paciente que es un problema psicológico inventado y darle el alta definitiva.",
      "B": "Asentar detalladamente el déficit sensorial neuro-estomatológico en el expediente clínico, realizar mapeo sensorial seriado, prescribir neuroprotectores/complejo B si está indicado, coordinar interconsulta y seguimiento evolutivo (esperando reinervación en 3 a 6 meses), contrastándolo con el consentimiento informado suscrito previamente.",
      "C": "Realizar una segunda cirugía exploratoria inmediata con fresa de carburo para \"destapar el nervio\".",
      "D": "Cobrar honorarios adicionales por haber anestesiado permanentemente la zona sin necesidad de más inyecciones."
    },
    "correctAnswer": "B",
    "explanation": "La neuropraxia o axonotmesis del nervio dentario inferior es una complicación conocida de la cirugía de terceros molares que debe estar advertida en el consentimiento informado previo. Exige mapeo táctil/térmico documental, terapia de soporte neurotrófico, monitoreo temporal por 3 a 6 meses para evaluar la regeneración axonal y eventual derivación microquirúrgica.",
    "distractorRationale": {
      "A": "Desestimar una lesión neurológica objetiva constituye una grave falta deontológica y encubrimiento de mala praxis.",
      "C": "Reintervenir a ciegas un lecho óseo traumatizado genera mayor disrupción axonal y riesgo de neuroma traumático doloroso irreversible.",
      "D": "Pretender justificar un daño sensitivo iatrogénico como un beneficio comercial viola los principios más elementales de la ética sanitaria."
    }
  },
  {
    "id": "cssp-jvpo-25",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Manejo de Pacientes con Insuficiencia Renal Crónica en Hemodiálisis",
    "legalBasis": "Norma y Protocolo de Atención Odontológica a Pacientes con Nefropatías de la JVPO.",
    "statement": "Un paciente de 60 años con Insuficiencia Renal Crónica Terminal en programa de hemodiálisis los días lunes, miércoles y viernes requiere la extracción quirúrgica de un diente infectado. ¿En qué momento es más seguro realizar el procedimiento odontológico invasivo?",
    "options": {
      "A": "Exactamente durante la sesión de hemodiálisis en el hospital mientras la máquina está conectada.",
      "B": "El día posterior a la sesión de hemodiálisis (por ejemplo, el martes o jueves), cuando la heparina sistémica utilizada durante el procedimiento dialítico ya ha sido eliminada y el paciente se encuentra metabólicamente más estable.",
      "C": "Inmediatamente 30 minutos antes de ingresar a la máquina de hemodiálisis para que la fístula no se tape.",
      "D": "El paciente con nefropatía tiene prohibido el tratamiento dental de por vida."
    },
    "correctAnswer": "B",
    "explanation": "Durante la hemodiálisis se administra heparina para evitar la coagulación del circuito extracorpóreo, persistiendo riesgo de hemorragia durante 6 a 12 horas. El día no-dialítico (interdialítico) permite operar cuando el efecto anticoagulante ha desaparecido y el balance de electrolitos y urea se encuentra en su punto óptimo post-filtración.",
    "distractorRationale": {
      "A": "El paciente está heparinizada activamente y con fluctuaciones hemodinámicas severas que contraindican cirugía bucal.",
      "C": "Operar antes de la diálisis incrementa el riesgo de hemorragia masiva al momento de heparinizare el paciente en la máquina horas después.",
      "D": "Los pacientes en diálisis requieren saneamiento bucal estricto para prevenir bacteriemias que colonicen fístulas arteriovenosas o catéteres de hemodiálisis."
    }
  },
  {
    "id": "cssp-jvpo-26",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Riesgo de Broncoaspiración de Instrumentos en el Consultorio Dental",
    "legalBasis": "Manual de Práctica Odontológica Segura de la JVPO.",
    "statement": "Durante un procedimiento de endodoncia sin aislamiento absoluto, una lima manual se desliza de los dedos del operador hacia la orofaringe del paciente, quien tose vigorosamente y presenta dificultad respiratoria súbita y estridor. ¿Cuál es el protocolo de seguridad inmediato?",
    "options": {
      "A": "Ofrecerle un pedazo de pan para que se trague la lima sin dificultad.",
      "B": "Detener el tratamiento de inmediato, evaluar vía aérea; si hay asfixia activa aplicar maniobra de Heimlich, mantener al paciente en calma y coordinar su traslado urgente a un centro asistencial con radiografías de tórax y abdomen para descartar aspiración bronquial vs ingestión digestiva.",
      "C": "Continuar la endodoncia con otra lima sin informar al paciente del instrumento extraviado.",
      "D": "Hacer que el paciente salte en un solo pie para que la gravedad baje el objeto metálico al estómago."
    },
    "correctAnswer": "B",
    "explanation": "La aspiración o deglución de instrumental odontológico es un evento adverso prevenible mediante aislamiento absoluto con dique de goma. Si ocurre, debe descartarse aspiración al árbol traqueobronquial (emergencia que requiere broncoscopia rígida) mediante radiografías inmediatas de tórax y abdomen con vigilancia médica.",
    "distractorRationale": {
      "A": "Deglutir sólidos ante un cuerpo extraño punzante puede perforar la pared esofágica o empujar el objeto hacia la vía aérea.",
      "C": "Ocultar la pérdida de un instrumento pone en riesgo mortal al paciente por perforación de órganos o neumonía por cuerpo extraño.",
      "D": "Las medidas empíricas populares retrasan la evaluación radiológica y el rescate endoscópico oportuno."
    }
  },
  {
    "id": "cssp-jvpo-27",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Uso Racional de Antibióticos en Endodoncia y Odontología General",
    "legalBasis": "Guía de Manejo Antimicrobiano Odontológico de la JVPO y MINSAL.",
    "statement": "Un paciente acude a consulta por dolor dental punzante severo al frío y calor en un molar con caries profunda. Al examen se diagnostica Pulpitis Irreversible Asintomática/Sintomática sin signos de tumefacción facial, flemón ni fiebre. Conforme al principio de uso racional de antimicrobianos, ¿cuál es la conducta terapéutica indicada?",
    "options": {
      "A": "Prescribir Amoxicilina + Ácido Clavulánico 875/125 mg cada 8 horas durante 14 días sin realizar apertura dental.",
      "B": "Efectuar la intervención clínica local (pulpotomía de urgencia o pulpectomía completa bajo anestesia y aislamiento), estando formalmente contraindicada la prescripción de antibióticos sistémicos al no existir diseminación infecciosa ni afectación sistémica.",
      "C": "Indicar Ciprofloxacina combinada con Vancomicina vía oral durante un mes.",
      "D": "Administrar Ceftriaxona 1 g intramuscular en el consultorio y diferir la apertura dental 3 meses."
    },
    "correctAnswer": "B",
    "explanation": "En las pulpitis irreversibles el tejido pulpar confinado en la cámara cerrada está inflamado pero no existe infección bacteriana diseminada en tejidos periapicales ni sistémicos. El tratamiento mandatorio es puramente local (desvitalización mecánica o biopulpectomía). Los antibióticos no llegan a la pulpa necrótica y su prescripción indiscriminada genera resistencia bacteriana.",
    "distractorRationale": {
      "A": "El uso de antibióticos sistémicos para tratar dolores pulpares localizados sin celulitis viola las guías clínicas y favorece cepas multirresistentes.",
      "C": "Las fluoroquinolonas y glucopéptidos no tienen indicación en infecciones pulpares primarias comunes.",
      "D": "El tratamiento de la pulpitis es quirúrgico odontológico de urgencia; retrasarlo con antibióticos cronifica el dolor y provoca necrosis purulenta."
    }
  },
  {
    "id": "cssp-jvpo-28",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Régimen de Custodia y Archivo del Expediente Odontológico",
    "legalBasis": "Código de Salud de El Salvador, Art. 48 y Manual de Archivo Clínico del CSSP.",
    "statement": "Un paciente atendido hace 3 años en una clínica dental privada exige que se le entregue la ficha clínica original completa y las radiografías periapicales originales para llevárselas a su casa. Respecto a la titularidad jurídica y conservación del expediente clínico según la legislación salvadoreña, ¿cuál es la norma que rige?",
    "options": {
      "A": "Entregar de inmediato todos los documentos originales sin conservar ninguna copia ni recibo.",
      "B": "El expediente clínico físico o electrónico y sus anexos son propiedad legal y custodia del profesional/clínica (quien debe conservarlo por un período mínimo legal de 5 a 10 años); el paciente tiene derecho inalienable a obtener un resumen clínico detallado, informe pericial o copia fiel certificada del mismo.",
      "C": "Destruir el expediente dental en el incinerador inmediatamente después de que el paciente termina su tratamiento.",
      "D": "Publicar el expediente dental en el periódico local para que cualquiera pueda consultarlo."
    },
    "correctAnswer": "B",
    "explanation": "El expediente clínico odontológico es un documento médico-legal sujeto a confidencialidad y custodia obligatoria del odontólogo o institución por el período fijado en las normas del CSSP (mínimo 5 a 10 años para eventuales peritajes forenses o de responsabilidad profesional). El paciente es dueño de la información y tiene derecho a copias o resúmenes, pero el soporte original debe permanecer archivado.",
    "distractorRationale": {
      "A": "Desprenderse del expediente original deja al profesional desprovisto de prueba documental ante cualquier demanda o litigio por mala praxis.",
      "C": "La destrucción prematura de expedientes viola el Código de Salud y acarrea sanciones disciplinarias y presunción en contra en juicios civiles.",
      "D": "Vulnera el secreto profesional garantizado por la Constitución y el Código Penal."
    }
  },
  {
    "id": "cssp-jvpo-29",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Prevención de Fluorosis Dental y Toxicidad en Niños",
    "legalBasis": "Guía de Manejo del Flúor en Salud Pública Bucal del MINSAL y JVPO.",
    "statement": "Para la prevención de caries dental y al mismo tiempo evitar la aparición de fluorosis dental en niños menores de 3 años, ¿cuál es la directriz oficial sobre el uso de pasta dental fluorada?",
    "options": {
      "A": "Utilizar una cantidad del tamaño de una moneda de 25 centavos de pasta dental para adultos y permitir que el niño se la trague.",
      "B": "Utilizar una cantidad mínima equivalente al tamaño de un grano de arroz crudo (con concentración de 1,000 ppm de flúor), realizando el cepillado asistido por un adulto responsable y limpiando los excesos para evitar la deglución continua de flúor.",
      "C": "Prohibir totalmente el cepillado dental hasta que el niño cumpla 8 años.",
      "D": "Sustituir la pasta dental por enjuagues con flúor al 2% para que el bebé los beba a diario."
    },
    "correctAnswer": "B",
    "explanation": "Las directrices de la AAPD, MINSAL y JVPO recomiendan el uso de dentífrico fluorado de 1,000 ppm desde la erupción del primer diente, limitando estrictamente la dosis al tamaño de un grano de arroz en menores de 3 años (y tamaño de un guisante entre 3 y 6 años), siempre supervisado para prevenir la ingesta crónica que ocasiona fluorosis del esmalte de dientes permanentes.",
    "distractorRationale": {
      "A": "Cantidades grandes de pasta tragadas repetidamente causan fluorosis dental severa moteada e intoxicación fluorada sistémica.",
      "C": "La ausencia de higiene en los primeros años produce caries de la primera infancia con destrucción rampante de la dentición primaria.",
      "D": "Hacer que un lactante beba colutorios de alta concentración de flúor produce intoxicación aguda con vómitos, hipocalcemia y arritmias cardíacas."
    }
  },
  {
    "id": "cssp-jvpo-30",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Manejo de Desechos de Amalgama Dental y Mercurio",
    "legalBasis": "Convenio de Minamata sobre el Mercurio y Reglamento Ambiental del CSSP/MINSAL.",
    "statement": "En relación con los restos de amalgama dental excedentes y cápsulas de amalgama utilizadas en la práctica clínica odontológica, ¿cuál es el método ambiental y sanitariamente reglamentado para su almacenamiento y desecho?",
    "options": {
      "A": "Verter las partículas sobrantes de amalgama directamente por la escupidera o drenaje del sillón hacia la red cloacal pública.",
      "B": "Almacenar los residuos secos de amalgama en recipientes herméticos etiquetados específicamente para metales pesados (con líquido sellador como solución fijadora radiográfica o agua si es requerido), contando con separadores de amalgama en las líneas de aspiración para su entrega a empresas autorizadas de reciclaje de mercurio.",
      "C": "Incinerear las partículas de amalgama en una fogata al aire libre en el patio de la clínica.",
      "D": "Mezclarlas con la basura común y desecharlas en el botadero municipal."
    },
    "correctAnswer": "B",
    "explanation": "El Convenio de Minamata y las normas de bioseguridad del CSSP exigen la gestión controlada del mercurio odontológico para evitar la contaminación hídrica y bioacumulación en la cadena alimentaria. Se deben instalar trampas separadoras de amalgama y recolectar los remanentes en recipientes herméticos sellados para gestores autorizados.",
    "distractorRationale": {
      "A": "Desechar amalgama en el desagüe municipal contamina los mantos freáticos y fuentes de agua con mercurio neurotóxico.",
      "C": "Incinerar amalgama vaporiza el mercurio elemental gaseoso produciendo intoxicación inhalatoria aguda y daño pulmonar severo.",
      "D": "Mezclar mercurio con basura común viola las leyes ambientales y sanitarias del MARN y CSSP."
    }
  },
  {
    "id": "cssp-jvpo-31",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Régimen de Prescripción de Fármacos Analgésicos Opioides Menores",
    "legalBasis": "Ley de Medicamentos de El Salvador y Reglamento de la JVPQF/JVPO.",
    "statement": "Tras una cirugía de osteotomía maxilar reconstructiva con dolor severo refractario a analgésicos convencionales, el cirujano dentista decide prescribir Tramadol 50 mg cápsulas. ¿Cuál es la exigencia regulatoria legal para su formulación?",
    "options": {
      "A": "Puede prescribirlo en una servilleta de papel o mensaje de texto de WhatsApp informal.",
      "B": "Debe emitir la prescripción en recetario médico formal con su nombre, firma, sello con número de registro de JVPO vigente, fecha, identificación del paciente, posología exacta y no exceder los días terapéuticos estrictamente requeridos.",
      "C": "Los odontólogos tienen prohibida legalmente la prescripción de cualquier analgésico.",
      "D": "Puede delegar la prescripción al asistente dental sin supervisión."
    },
    "correctAnswer": "B",
    "explanation": "El cirujano dentista debidamente inscrito ante la JVPO está legalmente facultado por el Código de Salud para prescribir medicamentos inherentes al ámbito de su competencia (como analgésicos opioides menores para dolor postquirúrgico severo), debiendo cumplir con los requisitos formales de receta médica, sello profesional y control normativo de la DNM.",
    "distractorRationale": {
      "A": "Las recetas médicas informales en papel común sin identificación no son válidas ni dispensables bajo la Ley de Medicamentos.",
      "C": "El profesional de la odontología tiene potestad legal de prescripción farmacológica en el área estomatológica conforme al Código de Salud.",
      "D": "La prescripción es un acto médico personal e intransferible que no puede delegarse en personal auxiliar."
    }
  },
  {
    "id": "cssp-jvpo-32",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Alergia al Látex en la Atención Odontológica",
    "legalBasis": "Guía Técnica de Seguridad Clínica en Pacientes Alérgicos de la JVPO.",
    "statement": "Un paciente refiere diagnóstico confirmado de hipersensibilidad tipo I severa al látex natural (antecedente de anafilaxia con guantes y globos). ¿Cuál es la medida de seguridad indispensable que debe implementar el equipo odontológico antes y durante la atención?",
    "options": {
      "A": "Lavar los guantes de látex con agua hirviendo antes de atender al paciente.",
      "B": "Establecer un entorno completamente libre de látex (\"latex-safe\"): citar a primera hora de la mañana para evitar aerosoles de polvo de látex en suspensión, utilizar guantes de nitrilo o vinilo, dique de goma sin látex, mascarillas sin elásticos de látex y carpules sin tapón de látex natural.",
      "C": "Atender al paciente con las manos desnudas sin ningún tipo de barrera de protección.",
      "D": "Infiltrar al paciente con penicilina benzatínica para evitar la alergia al látex."
    },
    "correctAnswer": "B",
    "explanation": "La alergia al látex mediada por IgE puede desencadenar anafilaxia fulminante por contacto mucoso o inhalación de antígenos transportados en el talco de los guantes. Se exige un protocolo \"libre de látex\": cita a primera hora antes de que se levanten aerosoles en la clínica, y uso exclusivo de guantes e insumos sintéticos (nitrilo, silicona, neopreno).",
    "distractorRationale": {
      "A": "El agua hirviendo no desnaturaliza las proteínas alergénicas del látex y degrada el elastómero exponiendo al paciente y operador.",
      "C": "Trabajar sin guantes viola los principios universales de bioseguridad frente a patógenos hemáticos (VIH, VHB, VHC).",
      "D": "La penicilina no previene reacciones alérgicas y en sí misma es una de las principales causas de choque anafiláctico."
    }
  },
  {
    "id": "cssp-jvpo-33",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Terapéutica en Bruxismo y Trastornos Temporomandibulares (TTM)",
    "legalBasis": "Guía Clínica de Disfunción Temporomandibular y Oclusión de la JVPO.",
    "statement": "En un paciente con dolor miofascial masticatorio matutino, cefalea tensional y facetas de desgaste patológico en bordes incisales por bruxismo del sueño, ¿cuál es el aditamento oclusal de primera línea basado en evidencia?",
    "options": {
      "A": "Una férula blanda elástica delgada de acetato blando para morder libremente durante el día.",
      "B": "Una férula oclusal de estabilización rígida de resina acrílica (tipo Michigan) superior o inferior, debidamente ajustada con contactos bilaterales simultáneos estables y guías caninas desoclusivas en lateralidad.",
      "C": "Realizar desgaste selectivo de todas las cúspides dentales de la boca hasta aplanar la oclusión.",
      "D": "Extraer los 4 caninos para que no haya interferencias oclusales."
    },
    "correctAnswer": "B",
    "explanation": "La férula miorrelajante rígida de estabilización (placa Michigan ajustada en acrílico termocurado) es el dispositivo de elección para el manejo del bruxismo y dolor miofascial: disminuye la sobrecarga articular, desprograma la propiocepción neuromuscular patológica y protege las estructuras dentarias.",
    "distractorRationale": {
      "A": "Las férulas blandas elásticas estimulan el reflejo masticatorio de morder (\"efecto goma de mascar\"), empeorando la hiperactividad del masetero.",
      "C": "El tallado oclusal mutilante indiscriminado e irreversible está proscrito de la odontología moderna conservadora.",
      "D": "La mutilación de órganos dentarios estratégicos como los caninos destruye la guía desoclusiva y agrava la disfunción articular."
    }
  },
  {
    "id": "cssp-jvpo-34",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Interrelación Bidireccional entre Periodontitis y Diabetes Mellitus",
    "legalBasis": "Guía de Manejo Odontológico de la Enfermedad Periodontal y Comorbilidades Sistémicas de la JVPO.",
    "statement": "En relación con la interacción patogénica y clínica entre la Periodontitis Avanzada (Estadios III-IV) y la Diabetes Mellitus descontrolada, ¿cuál de las siguientes aseveraciones representa la evidencia científica actualizada?",
    "options": {
      "A": "La periodontitis es una afección estrictamente cosmética que no influye en absoluto en los niveles de hemoglobina glucosilada (HbA1c).",
      "B": "Existe una relación bidireccional comprobada: la hiperglucemia crónica agrava la destrucción de los tejidos de soporte periodontal debido a la formación de productos finales de glicación avanzada (AGEs) y estrés oxidativo; y a su vez, el tratamiento periodontal no quirúrgico efectivo (raspado y alisado) reduce la carga inflamatoria sistémica pudiendo disminuir significativamente la HbA1c en aproximadamente 0.3 a 0.5 puntos porcentuales.",
      "C": "El tratamiento periodontal está contraindicado en todos los pacientes diabéticos porque provoca coma cetoacidótico.",
      "D": "Los pacientes con diabetes no sufren de pérdida ósea periodontal jamás."
    },
    "correctAnswer": "B",
    "explanation": "La relación bidireccional entre diabetes y periodontitis es un hecho clínico fundamental: la diabetes empeora la severidad y velocidad de avance de la periodontitis, y la inflamación periodontal crónica libera citoquinas proinflamatorias (TNF-alfa, IL-6) que agravan la resistencia a la insulina. El tratamiento periodontal exitoso contribuye al control glucémico.",
    "distractorRationale": {
      "A": "La periodontitis es una infección destructiva con impacto sistémico directo demostrado en marcadores inflamatorios y glucídicos.",
      "C": "El tratamiento periodontal meticuloso es indispensable en pacientes diabéticos para prevenir focos sépticos crónicos.",
      "D": "La pérdida ósea alveolar es significativamente más rápida y severa en pacientes con diabetes no controlada."
    }
  },
  {
    "id": "cssp-jvpo-35",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Protección Pulpar y Biomateriales en Caries Profundas",
    "legalBasis": "Manual de Operatoria Dental y Biomateriales de la JVPO.",
    "statement": "Durante la eliminación de caries profunda en una pieza con pulpa vital, se produce una microexposición pulpar mecánica accidental menor a 0.5 mm en un campo aislado absolutamente con dique de goma y libre de saliva. Para realizar un recubrimiento pulpar directo biológicamente exitoso, ¿cuál es el biomaterial de elección actual?",
    "options": {
      "A": "Ácido fosfórico al 37% colocado directamente sobre la pulpa sangrante.",
      "B": "Silicatos de calcio bioactivos (como MTA o Biodentine) o Hidróxido de Calcio puro químicamente químicamente puro, sellados inmediatamente con un material hermético.",
      "C": "Cemento de oxifosfato de zinc colocado puro sobre el tejido pulpar expuesto.",
      "D": "Barniz de copal aplicado con un hisopo sucio."
    },
    "correctAnswer": "B",
    "explanation": "Los silicatos de calcio biocerámicos (MTA, Biodentine) o el hidróxido de calcio son materiales biocompatibles alcalinos que inducen la diferenciación de odontoblastos y la formación de un puente dentinario protector (\"dentinogénesis reparativa\"), manteniendo la vitalidad pulpar cuando se realiza en campo estéril.",
    "distractorRationale": {
      "A": "El grabado ácido directo sobre tejido pulpar vital genera necrosis química irreversible y dolor intolerable.",
      "C": "El cemento de fosfato de zinc es sumamente ácido y citotóxico, causando necrosis pulpar completa.",
      "D": "El barniz de copal no es biocompatible con tejido pulpar directo y no induce mineralización reparativa."
    }
  },
  {
    "id": "cssp-jvpo-36",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Fractura Accidental de Aguja Anestésica en el Espacio Pterigomandibular",
    "legalBasis": "Manual de Urgencias y Prevención de Accidentes Quirúrgicos de la JVPO.",
    "statement": "Al colocar un bloqueo mandibular troncular para anestesiar el nervio dentario inferior, la aguja dental corta se fractura en el cono y el extremo distal desaparece por completo en los tejidos blandos del espacio pterigomandibular. ¿Cuál es la conducta médico-quirúrgica inmediata recomendada?",
    "options": {
      "A": "Explorar a ciegas con pinzas hemostáticas haciendo incisiones amplias y profundas en el consultorio dental ambulatorio.",
      "B": "Indicar al paciente que no mueva la mandíbula ni degluta bruscamente para evitar la migración profunda del fragmento; no realizar exploraciones a ciegas que empujen la aguja hacia el espacio parafaríngeo; coordinar traslado hospitalario urgente con tomografía computarizada para localización y rescate quirúrgico guiado por especialista máxilo-facial.",
      "C": "Despedir al paciente diciendo que el metal se disolverá solo con la saliva en unos días.",
      "D": "Dar de beber un vaso de leche al paciente para neutralizar el acero inoxidable."
    },
    "correctAnswer": "B",
    "explanation": "El intento de extraer una aguja fracturada no visible a ciegas en el espacio pterigomandibular suele empujarla más profundamente hacia estructuras vasculares críticas (arteria carótida interna, plexo pterigoideo). Se debe inmovilizar la mandíbula, no explorar empíricamente y trasladar de urgencia para remoción guiada por imagen tomográfica en quirófano.",
    "distractorRationale": {
      "A": "Las incisiones a ciegas provocan hemorragias masivas, lesiones nerviosas y empujan el cuerpo extraño hacia planos profundos del cuello.",
      "C": "Las agujas de acero inoxidable no se disuelven y pueden migrar causando erosión vascular o infecciones graves.",
      "D": "Los líquidos orales no tienen relación con cuerpos extraños metálicos en espacios anatómicos faciales profundos."
    }
  },
  {
    "id": "cssp-jvpo-37",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Manejo de Pacientes con Terapia Antirretroviral y Lesiones Orales",
    "legalBasis": "Norma Técnica de Atención a Personas con VIH del MINSAL y Código de Salud Art. 48.",
    "statement": "A la clínica odontológica asiste un paciente que revela vivir con VIH bajo terapia antirretroviral (TAR) con carga viral indetectable y conteo de CD4 normal (> 500 cel/mm3). ¿Cuál es la disposición de bioseguridad y legal que rige su atención?",
    "options": {
      "A": "Rechazar la atención médica alegando objeción de conciencia y exigirle que se atienda únicamente en centros de aislamiento.",
      "B": "Brindar la atención clínica odontológica requerida aplicando rigurosamente las Precauciones Universales Estándar de Bioseguridad (que aplican a todos los pacientes sin discriminación), estando terminantemente prohibido negar la atención o cobrar sobrecostos discriminatorios según la Ley de Prevención del VIH y el Código de Salud.",
      "C": "Envolver todo el sillón dental con plástico negro y tirar los instrumentos al fuego tras su uso.",
      "D": "Publicar el estado serológico del paciente en la sala de espera para alertar a otros usuarios."
    },
    "correctAnswer": "B",
    "explanation": "En El Salvador, la Ley de Prevención y Control de la Infección provocada por el VIH y el Código de Salud prohíben la discriminación y denegación de servicios de salud a personas con VIH. Todo paciente debe atenderse bajo las Precauciones Universales Estándar de bioseguridad, las cuales son 100% efectivas para prevenir la transmisión cruzada.",
    "distractorRationale": {
      "A": "Negar la atención odontológica a una persona por su serología de VIH constituye un acto ilegal de discriminación sancionable por el CSSP y la FGR.",
      "C": "Las medidas extremas de aislamiento infundadas violan los protocolos técnicos de bioseguridad y estigmatizan al paciente.",
      "D": "Divulgar la condición de salud de un paciente viola gravemente el secreto profesional y el derecho constitucional al honor y privacidad."
    }
  },
  {
    "id": "cssp-jvpo-38",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Prescripción de Antiinflamatorios y Riesgo Gastrolesivo y Renal",
    "legalBasis": "Guía de Farmacoterapia Odontológica de la JVPO y Ley de Medicamentos.",
    "statement": "Un paciente de 65 años con antecedentes documentados de úlcera péptica sangrante activa e insuficiencia renal crónica estadio 3 requiere medicación analgésica tras una cirugía periodontal. ¿Cuál de las siguientes decisiones farmacológicas representa la práctica más segura?",
    "options": {
      "A": "Prescribir Ketorolaco 20 mg vía oral cada 6 horas durante 10 días seguidos.",
      "B": "Evitar el uso de AINEs no selectivos a dosis altas por su elevado riesgo de hemorragia digestiva alta y deterioro de la tasa de filtración glomerular renal; optar por analgésicos centrales como Paracetamol (en dosis controladas) asociado a opioides menores (como tramadol) si el dolor es severo.",
      "C": "Indicar Indometacina combinada con Ácido Acetilsalicílico en ayunas.",
      "D": "Indicar Piroxicam 40 mg sin protector gástrico."
    },
    "correctAnswer": "B",
    "explanation": "Los AINEs inhiben la síntesis de prostaglandinas digestivas protectoras ($PGE_2$) y prostaglandinas renales vasodilatadoras que mantienen la perfusión glomerular. En pacientes con úlcera activa o nefropatía preexistente, los AINEs pueden desencadenar hemorragia gastrointestinal mortal o insuficiencia renal aguda; debe priorizarse el paracetamol o analgesia no-AINE.",
    "distractorRationale": {
      "A": "El ketorolaco es uno de los AINEs con mayor potencial ulcerogénico y nefrocutáneo, totalmente contraindicado con antecedentes de hemorragia péptica.",
      "C": "La combinación de múltiples AINEs multiplica la toxicidad digestiva y renal sin aportar beneficio analgésico sinérgico.",
      "D": "El piroxicam posee una vida media plasmática muy prolongada con altísimo riesgo de perforación y sangrado gástrico."
    }
  },
  {
    "id": "cssp-jvpo-39",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Consentimiento en Pacientes Menores de Edad y Violencia Intrafamiliar",
    "legalBasis": "Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia, Art. 16 y Código de Salud Art. 48.",
    "statement": "Durante la atención odontológica de un niño de 7 años por fractura dental múltiple, el profesional observa hematomas en diversas etapas de evolución en el cuello, quemaduras circulares compatibles con cigarrillo en los brazos y extrema sumisión ante la presencia del tutor. Conforme a la Ley Crecer Juntos y el Código de Salud, ¿cuál es la conducta legal ineludible del odontólogo?",
    "options": {
      "A": "Hacer caso omiso de las lesiones corporales pues su competencia profesional se limita estrictamente a los dientes.",
      "B": "Brindar el tratamiento estomatológico de urgencia requerido y cumplir con la obligación legal imperativa de reportar de forma inmediata el caso a las autoridades competentes (FGR, PNC o Juntas de Protección de la Niñez) ante la sospecha fundamentada de maltrato infantil.",
      "C": "Reclamar agresivamente al tutor y exigirle dinero extra para no denunciarlo a la policía.",
      "D": "Esperar a que el niño cumpla 18 años para que presente su propia denuncia legal."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 16 de la Ley Crecer Juntos y la legislación penal imponen a todos los profesionales de la salud la obligación inexcusable de denunciar de inmediato cualquier indicio de violencia física, psicológica o abuso sexual en menores de edad. El odontólogo es clave en la detección de maltrato debido a que el 50-75% de las lesiones físicas por agresión involucran cabeza, cara y cavidad oral.",
    "distractorRationale": {
      "A": "Omitir la denuncia de maltrato infantil constituye complicidad por omisión y violación flagrante a la Ley Crecer Juntos y Código Penal.",
      "C": "Extorsionar al agresor es un delito penal tipificado de cohecho/extorsión y encubrimiento.",
      "D": "Postergar la intervención de protección deja al niño en situación de riesgo vital inminente dentro de su entorno violento."
    }
  },
  {
    "id": "cssp-jvpo-40",
    "juntaId": "jvpo",
    "juntaName": "Junta de Vigilancia de la Profesión Odontológica",
    "area": "Manejo y Prevención de Lesiones Punzocortantes Ocupacionales en Odontología",
    "legalBasis": "Norma Técnica de Seguridad Ocupacional y Bioseguridad de la JVPO y MINSAL.",
    "statement": "Al finalizar una cirugía bucal, el operador sufre un pinchazo accidental profundo en el dedo índice con una aguja dental carpule manchada de sangre de un paciente cuya historia clínica desconoce. ¿Cuál es el protocolo post-exposición ocupacional inmediato?",
    "options": {
      "A": "Chupar fuertemente la herida con la boca para succionar el virus e ingerir alcohol desnaturalizado.",
      "B": "Lavar inmediatamente la herida con abundante agua y jabón corriente (sin estrujar agresivamente el tejido), no usar desinfectantes cáusticos, reportar el accidente laboral al comité de bioseguridad/epidemiología dentro de las primeras 2 horas, tomar muestras basales serológicas al paciente fuente y al profesional (VIH, VHB, VHC) e iniciar profilaxis post-exposición (PEP) antirretroviral antes de 72 horas si está indicado.",
      "C": "Cauterizar el dedo con un mechero de laboratorio y no registrar nada en los libros de la clínica.",
      "D": "Ignorar el accidente ya que las agujas odontológicas no transmiten infecciones virales por ser delgadas."
    },
    "correctAnswer": "B",
    "explanation": "El protocolo estándar ante pinchazos con material biológico contaminado exige lavado profuso inmediato con agua y jabón, evaluación del estatus serológico del paciente fuente (previa consejería y consentimiento), y evaluación del profesional para profilaxis post-exposición (PEP) contra VIH (idealmente en las primeras 2 a 4 horas, máximo 72 h) y refuerzo de inmunoglobulina/vacuna de Hepatitis B según estado vacunal.",
    "distractorRationale": {
      "A": "Chupar la herida infecta la mucosa oral e incrementa el área expuesta; ingerir alcohol no tiene efecto terapéutico.",
      "C": "La cauterización química o térmica destruye los tejidos periféricos y no neutraliza la diseminación hematógena del inóculo viral.",
      "D": "Las agujas carpule contienen lumen interno y transmiten eficazmente el Virus de Hepatitis B, Hepatitis C y VIH."
    }
  },
  {
    "id": "cssp-jvpe-01",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Cálculo de Dosis y Fluidoterapia",
    "legalBasis": "Norma de Cuidados de Enfermería y Administración Segura de Fármacos de la JVPE.",
    "statement": "El médico indica administrar 1,000 ml de Solución Salina Normal al 0.9% para infundir en 8 horas a un paciente hospitalizado. Utilizando un equipo de macrogotero estándar (factor de goteo = 20 gotas/ml), ¿cuál es la velocidad de goteo exacta por minuto?",
    "options": {
      "A": "21 gotas por minuto.",
      "B": "42 gotas por minuto.",
      "C": "60 gotas por minuto.",
      "D": "83 gotas por minuto."
    },
    "correctAnswer": "B",
    "explanation": "Fórmula de goteo: Gotas/min = (Volumen total en ml * Factor de goteo) / (Tiempo en minutos) = (1000 * 20) / (8 * 60) = 20000 / 480 ≈ 41.66 ≈ 42 gotas/min.",
    "distractorRationale": {
      "A": "21 gotas/min corresponde a una infusión de 16 horas o con factor de 10 gotas/ml.",
      "C": "60 gotas/min infundiría el litro en menos de 5.5 horas, con riesgo de sobrecarga hídrica.",
      "D": "83 gotas/min corresponde a un equipo microgotero (60 gtt/ml) infundido a 4 horas."
    }
  },
  {
    "id": "cssp-jvpe-02",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Seguridad del Paciente y Regla de Oro",
    "legalBasis": "Manual de Protocolos de Seguridad del Paciente de la JVPE y MINSAL.",
    "statement": "Antes de administrar un antibiótico intravenoso de alto riesgo (vancomicina), la enfermera profesional debe verificar la regla de los correctos. ¿Cuál de las siguientes agrupaciones resume correctamente los primeros 5 correctos fundamentales?",
    "options": {
      "A": "Paciente correcto, medicamento correcto, dosis correcta, vía correcta y hora correcta.",
      "B": "Médico correcto, hospital correcto, cama correcta, horario correcto y precio correcto.",
      "C": "Familiar correcto, enfermera correcta, jeringa correcta, aguja correcta y suero correcto.",
      "D": "Diagnóstico correcto, pronóstico correcto, código correcto, receta correcta y archivo correcto."
    },
    "correctAnswer": "A",
    "explanation": "Los 5 correctos iniciales indispensables para la administración segura de medicamentos son: Paciente correcto (doble identificación), Medicamento correcto (cotejo con orden médica), Dosis correcta (cálculo verificado), Vía correcta (IV, IM, VO, SC) y Hora/frecuencia correcta.",
    "distractorRationale": {
      "B": "El precio y el hospital no forman parte de las verificaciones de seguridad clínica inmediata en la cabecera del paciente.",
      "C": "La verificación debe centrarse en el paciente y el agente farmacológico, no en la marca de la jeringa.",
      "D": "Confunde términos administrativos con el protocolo clínico de farmacoseguridad."
    }
  },
  {
    "id": "cssp-jvpe-03",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Manejo Seguro de Electrolitos Concentrados de Alto Riesgo",
    "legalBasis": "Normas de Seguridad del Paciente de la JVPE y Alianza Mundial para la Seguridad del Paciente (OMS).",
    "statement": "Respecto a la preparación y administración de Cloruro de Potasio (KCl) al 14.9% (ampolla con 20 mEq en 10 mL) en el ámbito hospitalario, ¿cuál es la directriz de seguridad clínica de obligatorio cumplimiento para el personal de enfermería?",
    "options": {
      "A": "Está terminantemente prohibida la administración de KCl concentrado en bolo intravenoso directo o sin diluir; debe administrarse siempre diluido en soluciones cristaloides mediante bomba de infusión y con velocidad controlada.",
      "B": "Puede administrarse en bolo IV directo lento (en 1 minuto) si el paciente presenta hipocalemia severa menor a 2.5 mEq/L.",
      "C": "Mezclar la ampolla con lidocaína e inyectarla por vía intramuscular profunda en el glúteo.",
      "D": "Permitir que el paciente lo beba puro por vía oral si no se cuenta con vena periférica permeable."
    },
    "correctAnswer": "A",
    "explanation": "El cloruro de potasio concentrado es un medicamento de altísimo riesgo (\"alerta roja\"): su inyección IV en bolo directo produce paro cardíaco irreversible en asistolia o fibrilación ventricular instantánea. Las normas internacionales y de la JVPE exigen su dilución obligatoria en cristaloides a concentraciones seguras y en infusión lenta.",
    "distractorRationale": {
      "B": "Infundir KCl en bolo directo produce paro cardiorrespiratorio fatal inmediato; constituye homicidio culposo por negligencia grave.",
      "C": "El KCl concentrado por vía intramuscular genera necrosis muscular isquémica severa, abscesos estériles y daño nervioso irreversible.",
      "D": "La ingestión de electrolito concentrado al 14.9% provoca quemaduras químicas cáusticas en la mucosa gastrointestinal alta."
    }
  },
  {
    "id": "cssp-jvpe-04",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Prevención de Infecciones Asociadas a la Atención Sanitaria (IAAS)",
    "legalBasis": "Guía Técnica del Proyecto Zero Bacteriemia — MINSAL y Comité de IAAS de la JVPE.",
    "statement": "Durante la colocación y mantenimiento de un Catéter Venoso Central (CVC) para prevenir Bacteriemias Asociadas a Catéter (BACC), ¿cuál de las siguientes medidas representa el estándar de práctica de enfermería basado en la evidencia?",
    "options": {
      "A": "Utilizar jabón común de tocador para lavar la piel y cambiar los apósitos cada 30 días.",
      "B": "Aplicar antiséptico cutáneo con Clorhexidina alcohólica al 2%, usar barreras estériles de máxima protección (gorro, mascarilla, bata estéril, guantes estériles y paño fenestrado grande) y curar con apósito transparente estéril semipermeable.",
      "C": "Preferir la vena femoral como sitio de inserción rutinario por encima de la subclavia o yugular interna.",
      "D": "Manipular los conectores y llaves de tres pasos sin guantes ni desinfección previa para ahorrar insumos hospitalarios."
    },
    "correctAnswer": "B",
    "explanation": "El paquete de intervenciones (\"bundle\") de prevención de bacteriemias de la OMS y MINSAL/JVPE exige higiene estricta de manos, uso de clorhexidina alcohólica al 2% con secado completo, máxima barrera estéril durante la inserción y mantenimiento con apósito transparente semipermeable.",
    "distractorRationale": {
      "A": "El jabón convencional no erradica la flora bacteriana residente ni provee efecto antiséptico residual frente a estafilococos.",
      "C": "La vía femoral presenta la tasa más alta de infección y trombosis venosa profunda; debe evitarse como acceso de primera elección.",
      "D": "La manipulación no estéril de las conexiones intravenosas es la causa directa más frecuente de contaminación endoluminal y septicemia."
    }
  },
  {
    "id": "cssp-jvpe-05",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Marco Deontológico, Responsabilidad Legal y Órdenes Médicas",
    "legalBasis": "Código Deontológico de la Profesión en Enfermería de El Salvador y Ley de la JVPE.",
    "statement": "Durante el turno nocturno, un médico de guardia indica telefónicamente a la enfermera: \"Póngale 20 unidades de Insulina Cristalina IV a la cama 12 y yo paso firmando mañana por la tarde\". La enfermera verifica que la glicemia de la cama 12 es de 110 mg/dL (rango normal) y sospecha un error de paciente. ¿Cuál es el actuar profesional conforme a la ética y legislación salvadoreña?",
    "options": {
      "A": "Administrar las 20 unidades de inmediato para no desobedecer la jerarquía médica institucional.",
      "B": "Cuestionar y no ejecutar la orden verbal dudosa o no urgente, solicitar la presencia física inmediata del médico para la verificación de la indicación, exigir la orden escrita formal en el expediente clínico y documentar el incidente en la nota de enfermería.",
      "C": "Administrar la mitad de la dosis (10 unidades) como término medio sin consultar a nadie.",
      "D": "Ignorar la orden sin avisar a nadie ni registrar ninguna observación en el expediente."
    },
    "correctAnswer": "B",
    "explanation": "El Código Deontológico y las normas de la JVPE estipulan que el profesional de enfermería es un agente autónomo de seguridad del paciente y responde penal y deontológicamente por sus actos. Ante una orden verbal incongruente que pondría en peligro la vida (choque hipoglicémico mortal), debe rehusar la ejecución, requerir la evaluación directa y exigir el respaldo documental escrito.",
    "distractorRationale": {
      "A": "La \"obediencia debida\" no exime de responsabilidad penal ni administrativa ante la comisión de un acto claramente lesivo para el paciente.",
      "C": "Modificar arbitrariamente la dosificación sin prescripción facultativa constituye ejercicio ilegal de la medicina y negligencia profesional.",
      "D": "Omitir la comunicación oportuna al médico pone en riesgo al paciente si la indicación estaba destinada a otra cama con crisis hiperglicémica."
    }
  },
  {
    "id": "cssp-jvpe-06",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Marco Jurídico del Ejercicio Profesional y Código de Salud",
    "legalBasis": "Código de Salud de El Salvador, Arts. 53 al 59.",
    "statement": "De acuerdo con los Arts. 53 al 59 del Código de Salud de El Salvador, ¿cuál de las siguientes afirmaciones describe con exactitud las facultades y el ámbito legal de la Junta de Vigilancia de la Profesión en Enfermería (JVPE)?",
    "options": {
      "A": "La JVPE únicamente supervisa a los médicos cirujanos en el quirófano.",
      "B": "La JVPE tiene a su cargo el registro, control, vigilancia del ejercicio profesional y técnico de la enfermería en todo el país, así como la potestad disciplinaria y sancionatoria ante faltas a la ética y a la lex artis sanitaria.",
      "C": "La JVPE es una entidad sindical que fija salarios y no tiene facultades de inspección sanitaria.",
      "D": "El ejercicio de la enfermería no requiere número de junta ni registro ante el CSSP."
    },
    "correctAnswer": "B",
    "explanation": "Los Arts. 53 a 59 del Código de Salud asignan a la JVPE (organismo integrante del CSSP) la regulación legal, autorización de títulos, expedición de licencias y fiscalización del ejercicio de la enfermería profesional y sus niveles auxiliares, con facultad de instruir procedimientos disciplinarios y suspender el ejercicio ante infracciones graves.",
    "distractorRationale": {
      "A": "La supervisión médica corresponde a la JVPM, no a la Junta de Enfermería.",
      "C": "La JVPE es una autoridad sanitaria estatal de derecho público, no un sindicato laboral.",
      "D": "Ejercer la enfermería sin inscripción ante la JVPE constituye delito de ejercicio ilegal de la profesión en el Código Penal."
    }
  },
  {
    "id": "cssp-jvpe-07",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Metodología del Proceso de Atención de Enfermería (PAE)",
    "legalBasis": "Normas del Proceso de Atención de Enfermería de la JVPE y Taxonomía NANDA/NOC/NIC.",
    "statement": "En la aplicación sistemática y científica del Proceso de Atención de Enfermería (PAE), ¿cuál es el orden secuencial correcto de sus 5 fases fundamentales?",
    "options": {
      "A": "Ejecución, Evaluación, Diagnóstico, Planificación y Valoración.",
      "B": "Valoración, Diagnóstico de enfermería, Planificación (NOC), Ejecución (NIC) y Evaluación.",
      "C": "Prescripción médica, Facturación contable, Alta médica, Archivo y Registro.",
      "D": "Diagnóstico médico, Cirugía, Cuidados intensivos, Autopsia y Certificación."
    },
    "correctAnswer": "B",
    "explanation": "El PAE es el método científico estandarizado de la disciplina de enfermería compuesto por cinco etapas consecutivas e interrelacionadas: 1) Valoración (recolección de datos), 2) Diagnóstico (juicio clínico según NANDA), 3) Planificación (objetivos y resultados esperados NOC), 4) Ejecución (intervenciones NIC) y 5) Evaluación (medición del logro de metas).",
    "distractorRationale": {
      "A": "El orden de las fases está invertido; la ejecución no puede preceder a la recolección de datos ni al diagnóstico.",
      "C": "Describe procesos administrativos y de prescripción ajenos a las fases metodológicas del PAE.",
      "D": "Mezcla actos puramente médicos y forenses ajenos al proceso de cuidado de enfermería."
    }
  },
  {
    "id": "cssp-jvpe-08",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Prevención de Úlceras por Presión y Escala de Braden",
    "legalBasis": "Guía Clínica de Prevención y Tratamiento de Úlceras por Presión de la JVPE y MINSAL.",
    "statement": "Al valorar a un paciente encamado crónico con la Escala de Braden para la predicción de riesgo de Úlceras por Presión (UPP), se obtiene un puntaje de 11 puntos (Alto Riesgo). ¿Cuál es el plan de cuidados de enfermería prioritario e imperativo?",
    "options": {
      "A": "Dejar al paciente en la misma posición durante 24 horas para no fatigar la musculatura.",
      "B": "Implementar cambios posturales programados cada 2 a 3 horas, colocar colchón de alivio de presión (presión alterna neumática), mantener la piel limpia y seca, proteger prominencias óseas con apósitos hidrocoloides/espumas y evitar el cizallamiento.",
      "C": "Frotar con alcohol al 90% las zonas de enrojecimiento óseo para endurecer la epidermis.",
      "D": "Restringir totalmente la ingesta de líquidos y proteínas para que no defeque en la cama."
    },
    "correctAnswer": "B",
    "explanation": "En la escala de Braden, puntuaciones ≤ 12 indican alto riesgo de UPP. El estándar de enfermería exige cambios posturales estrictos cada 2-3 horas, superficies dinámicas reductoras de presión, hidratación cutánea con ácidos grasos hiperoxigenados y protección de sacro y talones. Está proscrito masajear zonas enrojecidas.",
    "distractorRationale": {
      "A": "La inmovilidad continua comprime la microcirculación capilar y produce necrosis tisular profunda en menos de 2 horas.",
      "C": "Frotar con alcohol reseca la piel, rompe la barrera epidérmica y precipita la apertura de úlceras dolorosas.",
      "D": "La desnutrición y deshidratación aceleran la degradación tisular; se requiere alto aporte proteico e hidratación."
    }
  },
  {
    "id": "cssp-jvpe-09",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Valoración Neurológica y Escala de Coma de Glasgow",
    "legalBasis": "Manual de Cuidados de Enfermería en Urgencias y Cuidados Críticos de la JVPE.",
    "statement": "Una enfermera en la unidad de emergencias evalúa a un paciente con traumatismo craneoencefálico: abre los ojos al estímulo doloroso (2), emite sonidos incomprensibles/quejidos (2) y flexiona anormalmente las extremidades en postura de decorticación (3). ¿Cuál es la puntuación de Glasgow total y qué implicación clínica inmediata genera?",
    "options": {
      "A": "Puntuación 7 puntos; indica Traumatismo Craneoencefálico Severo (TCE grave con puntaje ≤ 8) que exige protección inmediata y definitiva de la vía aérea mediante intubación endotraqueal.",
      "B": "Puntuación 14 puntos; el paciente está alerta y listo para el alta a su domicilio.",
      "C": "Puntuación 3 puntos; indica muerte encefálica confirmada sin necesidad de soporte.",
      "D": "Puntuación 10 puntos; se encuentra en estado de embriaguez leve."
    },
    "correctAnswer": "A",
    "explanation": "Escala de Glasgow: Ocular = 2, Verbal = 2, Motor = 3; Total = 7 puntos. Toda puntuación de Glasgow ≤ 8 define un TCE severo con incapacidad para proteger los reflejos de la vía aérea, representando una indicación formal e inmediata de intubación endotraqueal y ventilación mecánica.",
    "distractorRationale": {
      "B": "El paciente presenta compromiso neurológico severo; catalogarlo como leve o alerta pone en peligro inminente su vida.",
      "C": "La puntuación de 3 puntos representa la mínima posible (sin respuesta), pero este paciente responde con 7 puntos.",
      "D": "La suma correcta es 7, no 10, y el cuadro de decorticación refleja daño cerebral cortical profundo."
    }
  },
  {
    "id": "cssp-jvpe-10",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Administración Segura de Medicamentos y Regla de los 10 Correctos",
    "legalBasis": "Manual de Procedimientos de Enfermería y Farmacoseguridad de la JVPE.",
    "statement": "La enfermería moderna amplía los clásicos 5 correctos a la regla de los 10 correctos para la administración de fármacos. ¿Cuál de los siguientes aspectos complementa indispensablemente los 5 iniciales en esta directriz de calidad?",
    "options": {
      "A": "Registro oportuno e inmediato tras administrar, educación e información al paciente, verificación de la fecha de caducidad, preparación por la misma persona que administra y seguimiento de la respuesta clínica/efectos adversos.",
      "B": "Cobrar el costo del fármaco, archivar la ampolla vacía, verificar el parentesco del médico y fotografiar la aguja.",
      "C": "Delegar la administración al vigilante de seguridad y firmar la hoja al final de la semana.",
      "D": "Administrar el doble de dosis si el paciente no durmió bien durante el turno matutino."
    },
    "correctAnswer": "A",
    "explanation": "Los 10 correctos abarcan: 1) Medicamento, 2) Paciente, 3) Dosis, 4) Vía, 5) Hora, más los 5 complementarios: 6) Registro inmediato en el expediente (nunca registrar antes de dar), 7) Educación al paciente sobre el fármaco, 8) Verificación de fecha de vencimiento, 9) Yo preparo, yo administro, yo registro, y 10) Evaluación de respuesta y farmacovigilancia.",
    "distractorRationale": {
      "B": "Son aspectos financieros o triviales que no forman parte de las directrices de seguridad farmacoterapéutica de enfermería.",
      "C": "La administración de medicamentos no puede delegarse en personal no sanitario; es una falta gravísima con responsabilidad penal.",
      "D": "Modificar dosis arbitrariamente constituye una negligencia criminal causante de toxicidad o muerte."
    }
  },
  {
    "id": "cssp-jvpe-11",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Técnica de Inyección de Heparinas Subcutáneas",
    "legalBasis": "Guía de Práctica Clínica de Enfermería en Tromboembolismo Venoso de la JVPE.",
    "statement": "Al administrar Enoxaparina (heparina de bajo peso molecular) por vía subcutánea a un paciente hospitalizado para tromboprofilaxis, ¿cuál de las siguientes recomendaciones técnicas de enfermería previene la aparición de hematomas y necrosis tisular?",
    "options": {
      "A": "Inyectar en el deltoides frotando intensamente la piel con gasa durante 2 minutos tras la inyección.",
      "B": "Inyectar en el tejido celular subcutáneo de la pared abdominal anterolateral o posterolateral (al menos a 5 cm del ombligo), introduciendo la aguja en ángulo de 90° sosteniendo el pliegue cutáneo sin purgar la burbuja de aire de la jeringa prellenada, y NO aspirar ni masajear la zona al terminar.",
      "C": "Aspirar fuertemente el émbolo para verificar si sale sangre antes de vaciar la jeringa.",
      "D": "Calentar la jeringa prellenada en microondas antes de inyectar en la vena yugular externa."
    },
    "correctAnswer": "B",
    "explanation": "En enoxaparina prellenada, la burbuja de aire debe dejarse para sellar el trayecto de la aguja y evitar reflujo capilar subcutáneo. Se inyecta a 90° en el abdomen mientras se sostiene el pliegue cutáneo; no debe aspirarse (para no romper capilares) ni masajearse posteriormente para evitar hematomas y dolor.",
    "distractorRationale": {
      "A": "Frotar y masajear la zona tras inyectar heparina produce hematomas locales extensos y equimosis dolorosa.",
      "C": "Aspirar el émbolo en inyecciones de heparinas subcutáneas lesiona microvasos sanguíneos favoreciendo sangrado local.",
      "D": "Calentar heparina desnaturaliza la macromolécula biológica y administrarla por vía IV rápida no autorizada causa hemorragias letales."
    }
  },
  {
    "id": "cssp-jvpe-12",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Seguridad en Infusión de Glucopéptidos: Vancomicina",
    "legalBasis": "Guía de Administración de Antibióticos Parenterales de la JVPE y Alerta Farmacéutica.",
    "statement": "Durante la infusión intravenosa rápida en 15 minutos de Vancomicina 1 g, el paciente presenta eritema máculo-papular intenso en cuello, cara y parte superior del tronco, acompañado de prurito severo e hipotensión arterial (Síndrome del Hombre Rojo). ¿Cuál fue el error de enfermería desencadenante y la directriz técnica para su administración segura?",
    "options": {
      "A": "No administrar la vancomicina en bolo directo de 30 segundos.",
      "B": "La infusión fue excesivamente rápida; la vancomicina debe diluirse adecuadamente (al menos en 200 ml de solución salina o glucosada) y administrarse en infusión intravenosa lenta en un tiempo no menor a 60 minutos (o a una velocidad no superior a 10 mg/minuto) para evitar la desgranulación de histamina.",
      "C": "Haber utilizado solución glucosada en lugar de agua destilada caliente.",
      "D": "No haber mezclado la vancomicina con ceftriaxona en la misma jeringa."
    },
    "correctAnswer": "B",
    "explanation": "El \"Síndrome del Hombre Rojo\" (Red Man Syndrome) es una reacción pseudoalérgica no inmunológica mediada por la liberación directa y masiva de histamina provocada por la infusión rápida de vancomicina. Se previene y evita diluyendo el fármaco a concentraciones ≤ 5 mg/ml y pasando la infusión en un lapso no menor a 60 minutos.",
    "distractorRationale": {
      "A": "Inyectar vancomicina en bolo directo causa colapso hemodinámico masivo, broncoespasmo severo y paro cardíaco.",
      "C": "Tanto la solución glucosada al 5% como la solución salina al 0.9% son compatibles; el factor causal es la velocidad de infusión.",
      "D": "Mezclar vancomicina con betalactámicos en la misma línea genera precipitación físico-química inmediata insoluble."
    }
  },
  {
    "id": "cssp-jvpe-13",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Terapéutica Transfusional y Reacciones Hemolíticas Agudas",
    "legalBasis": "Norma Técnica de Medicina Transfusional del MINSAL y Manual de Enfermería de la JVPE.",
    "statement": "Al iniciar la transfusión de una unidad de Concentrado de Glóbulos Rojos a un paciente ingresado, ¿cuál es el protocolo estricto de seguridad clínica que debe ejecutar la enfermera durante los primeros 15 minutos?",
    "options": {
      "A": "Iniciar la transfusión a chorro rápido libre y ausentarse de la sala durante 2 horas.",
      "B": "Realizar doble verificación de identidad y grupo sanguíneo al lado del paciente, iniciar la infusión a velocidad lenta (aproximadamente 2 ml/min o 20 a 30 gotas/min), permanecer junto a la cabecera del paciente monitorizando signos vitales basales y a los 15 minutos para detectar signos tempranos de reacción hemolítica aguda o anafilaxia.",
      "C": "Calentar la bolsa de sangre sumergiéndola en un hervidor eléctrico con agua hirviendo.",
      "D": "Adicionar ampicilina y bicarbonato de sodio directamente dentro de la bolsa de sangre."
    },
    "correctAnswer": "B",
    "explanation": "La mayoría de las reacciones transfusionales hemolíticas agudas (por incompatibilidad ABO) ocurren con los primeros 30 a 50 ml de sangre infundida. La norma exige infusión inicial lenta, presencia continua del personal de enfermería en los primeros 15 minutos, verificación de signos vitales basales y a los 15 min, y empleo de equipo con filtro de 170-200 micras.",
    "distractorRationale": {
      "A": "Infundir sangre a flujo libre sin vigilar los primeros 15 minutos puede culminar en choque transfusional letal inadvertido.",
      "C": "Hervir o sobrecalentar la sangre lisa los glóbulos rojos (hemólisis térmica severa) produciendo infusión de restos celulares tóxicos e insuficiencia renal.",
      "D": "Está terminantemente prohibido agregar medicamentos o soluciones a la unidad de sangre por riesgo de hemólisis o coagulación."
    }
  },
  {
    "id": "cssp-jvpe-14",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Prevención de Neumonía Asociada a la Ventilación Mecánica (NAVM)",
    "legalBasis": "Guía Técnica del Proyecto Neumonía Zero del MINSAL y JVPE.",
    "statement": "En un paciente intubado en ventilación mecánica invasiva en la Unidad de Cuidados Intensivos, ¿cuál de las siguientes medidas del \"paquete de medidas preventivas\" (bundle) de enfermería reduce significativamente la incidencia de Neumonía Asociada a Ventilación Mecánica?",
    "options": {
      "A": "Mantener al paciente en posición de decúbito supino plano horizontal a 0° de elevación todo el tiempo.",
      "B": "Mantener la cabecera de la cama elevada entre 30° y 45° de forma continua, realizar higiene bucal con Clorhexidina al 0.12% cada 8 a 12 horas, aspirar secreciones subglóticas y verificar que la presión del neumotaponador (cuff) se mantenga entre 20 y 30 cmH2O.",
      "C": "Desconectar los circuitos del ventilador cada hora para dejarlos ventilar al aire ambiental.",
      "D": "Llenar la tráquea con solución salina antes de cada aspiración sin indicación específica."
    },
    "correctAnswer": "B",
    "explanation": "El bundle de Neumonía Zero exige: elevación constante de la cabecera a 30°-45° (evita microaspiraciones gástricas), higiene oral con clorhexidina antiséptica, control continuo de la presión del cuff (20-30 cmH2O para evitar fugas subglóticas sin causar isquemia traqueal) y aspiración atraumática.",
    "distractorRationale": {
      "A": "La posición plana a 0° favorece el reflujo masivo y la microaspiración del contenido orofaríngeo y gástrico hacia los pulmones.",
      "C": "Desconectar los circuitos rompe la esterilidad del circuito cerrado e introduce patógenos hospitalarios multirresistentes.",
      "D": "La instilación rutinaria de solución salina disemina las biopelículas bacterianas hacia las vías respiratorias distales."
    }
  },
  {
    "id": "cssp-jvpe-15",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Infección del Tracto Urinario Asociada a Catéter (ITU-AC)",
    "legalBasis": "Guía Técnica del Proyecto ITU Zero de la JVPE y MINSAL.",
    "statement": "Para prevenir infecciones del tracto urinario asociadas al uso de Sonda Vesical (Catéter de Foley) en pacientes hospitalizados, ¿cuál es el principio técnico mandatorio de mantenimiento del sistema de drenaje?",
    "options": {
      "A": "Elevar la bolsa de recolección de orina por encima del nivel de la cama para que el paciente la vea con claridad.",
      "B": "Mantener en todo momento el sistema de drenaje en circuito cerrado estéril, con la bolsa colectora ubicada SIEMPRE por debajo del nivel de la vejiga (sin tocar el suelo), vaciando la orina mediante técnica limpia sin contaminar el puerto de salida.",
      "C": "Desconectar la sonda de la bolsa diariamente para lavarla con detergente doméstico y volverla a conectar.",
      "D": "Pinzar la sonda de foley con una pinza de campo metálica durante 18 horas al día."
    },
    "correctAnswer": "B",
    "explanation": "El ascenso retrógrado de bacterias es la principal causa de ITU-AC. Elevar la bolsa colectora por encima de la vejiga provoca reflujo de orina estancada colonizada hacia la vejiga. El sistema debe permanecer cerrado ininterrumpidamente y la bolsa colocada bajo el plano vesical.",
    "distractorRationale": {
      "A": "Colocar la bolsa sobre la vejiga o la cama ocasiona reflujo retrógrado inmediato de orina contaminada hacia los uréteres y riñones.",
      "C": "La apertura del circuito cerrado introduce bacterias intrahospitalarias resistentes colonizando el catéter en horas.",
      "D": "El pinzamiento prolongado provoca sobredistensión vesical traumática y estasis urinaria con proliferación bacteriana masiva."
    }
  },
  {
    "id": "cssp-jvpe-16",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Higiene de Manos según Estándares de la OMS",
    "legalBasis": "Directrices de la OMS sobre la Higiene de las Manos en la Atención Sanitaria y Manual de IAAS de la JVPE.",
    "statement": "Conforme al modelo de los \"5 Momentos para la Higiene de las Manos\" establecido por la OMS y adoptado obligatoriamente por el MINSAL y la JVPE, ¿cuál de las siguientes opciones describe correctamente uno de estos momentos clave?",
    "options": {
      "A": "Únicamente lavarse las manos al terminar el turno de trabajo y salir del hospital.",
      "B": "Momento 2: Inmediatamente antes de realizar una tarea limpia o aséptica (como curación de heridas, administración de inyecciones o manejo de catéteres intravenosos).",
      "C": "Lavarse las manos solo si las manos tienen sangre visible a simple vista; si no se ve suciedad, nunca lavarse.",
      "D": "Frotarse las manos con agua simple sin jabón ni solución alcohólica durante 2 segundos."
    },
    "correctAnswer": "B",
    "explanation": "Los 5 momentos de la OMS son: 1) Antes de tocar al paciente, 2) Antes de una tarea limpia/aséptica, 3) Después del riesgo de exposición a líquidos corporales, 4) Después de tocar al paciente, y 5) Después del contacto con el entorno del paciente. El momento 2 protege al paciente contra gérmenes nocivos exógenos.",
    "distractorRationale": {
      "A": "Higienizarse solo al final del turno propaga patógenos entre decenas de pacientes durante toda la jornada laboral.",
      "C": "La flora bacteriana patógena hospitalaria es invisible al ojo humano; la fricción hidroalcohólica es obligatoria aunque las manos parezcan limpias.",
      "D": "El lavado de manos eficaz requiere técnica reglamentada de 40 a 60 segundos con agua y jabón o 20 a 30 segundos con solución alcohólica."
    }
  },
  {
    "id": "cssp-jvpe-17",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Terapéutica en Preeclampsia Severa: Sulfato de Magnesio",
    "legalBasis": "Guía Clínica de Atención de las Emergencias Obstétricas del MINSAL y JVPE.",
    "statement": "A una paciente con Preeclampsia Severa se le administra Sulfato de Magnesio intravenoso para prevenir crisis eclámpticas (Protocolo de Zuspan: 4 g IV de carga, luego 1 g/h de mantenimiento). ¿Cuáles son los tres parámetros clínicos que la enfermera debe vigilar estrictamente antes de continuar cada hora de infusión para detectar intoxicación?",
    "options": {
      "A": "Color del cabello, apetito del paciente y agudeza auditiva.",
      "B": "Presencia obligatoria del reflejo rotuliano (osteotendinoso), frecuencia respiratoria mayor a 16 respiraciones por minuto y diuresis horaria superior a 30 ml/h (o 100 ml en 4 horas).",
      "C": "Capacidad de caminar sin mareos, nivel de hemoglobina y color de las uñas.",
      "D": "Temperatura axilar mayor a 39 °C, movimientos fetales ausentes y presión sistólica menor a 50 mmHg."
    },
    "correctAnswer": "B",
    "explanation": "El magnesio se elimina exclusivamente por vía renal. Los primeros signos de intoxicación hipermagnesémica son la abolición del reflejo rotuliano (a 8-10 mEq/L), seguido de depresión respiratoria (< 16 rpm a 12 mEq/L) y paro cardíaco en asistolia. Si se anula el reflejo o cae la diuresis (< 30 ml/h), debe suspenderse la infusión y tener listo Gluconato de Calcio al 10%.",
    "distractorRationale": {
      "A": "Son parámetros irrelevantes para la toxicidad neuromuscular y cardiorrespiratoria por magnesio.",
      "C": "La paciente preeclámptica grave está encamada; la marcha no es un parámetro de monitorización del sulfato de magnesio.",
      "D": "La hipotensión extrema y ausencia de movimientos fetales representan complicaciones letales avanzadas que deben prevenirse."
    }
  },
  {
    "id": "cssp-jvpe-18",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Antídoto ante Intoxicación por Sulfato de Magnesio",
    "legalBasis": "Guía Clínica de Emergencias Obstétricas del MINSAL y Protocolo de Farmacovigilancia de la JVPE.",
    "statement": "Durante la infusión de sulfato de magnesio en una puérpera con preeclampsia severa, la enfermera detecta abolición completa del reflejo patelar, somnolencia profunda y bradipnea con 10 respiraciones por minuto. Tras suspender inmediatamente la infusión, ¿cuál es el antídoto de emergencia específico que debe preparar y administrar?",
    "options": {
      "A": "Atropina sulfato 2 mg subcutánea.",
      "B": "Gluconato de Calcio al 10% (1 gramo / ampolla de 10 mL) administrado por vía intravenosa lenta en 5 a 10 minutos.",
      "C": "Naloxona 0.8 mg intramuscular.",
      "D": "Bicarbonato de Sodio 1 molar a chorro rápido."
    },
    "correctAnswer": "B",
    "explanation": "El Gluconato de Calcio al 10% (1 g en 10 ml IV lento) es el antagonista fisiológico directo específico del sulfato de magnesio: el ion calcio desplaza competitivamente al magnesio de las uniones neuromusculares y restaura la transmisión nerviosa y la función diafragmática respiratoria.",
    "distractorRationale": {
      "A": "La atropina actúa sobre receptores muscarínicos cardíacos; no revierte el bloqueo neuromuscular por magnesio.",
      "C": "La naloxona revierte intoxicaciones por opioides, inerte frente al sulfato de magnesio.",
      "D": "El bicarbonato puede precipitar sales de calcio insolubles y agravar la hipocalcemia funcional."
    }
  },
  {
    "id": "cssp-jvpe-19",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Técnica de Inyección de Insulina y Prevención de Lipodistrofia",
    "legalBasis": "Guía de Educación y Cuidados en Diabetes Mellitus de la JVPE y MINSAL.",
    "statement": "Para educar adecuadamente a un paciente diabético insulino-dependiente sobre la autoadministración y evitar complicaciones tisulares locales como la lipohipertrofia o lipoatrofia en los sitios de punción, ¿cuál es la instrucción de enfermería fundamental?",
    "options": {
      "A": "Inyectar siempre en el mismo punto exacto alrededor del ombligo todos los días.",
      "B": "Establecer un esquema sistemático de rotación de los sitios de inyección anatómicos (abdomen periumbilical respetando 2 dedos del ombligo, cara anterolateral de muslos, cuadrante superior externo de glúteos y parte posterior de brazos), distanciando cada punción al menos 1 a 2 cm de la anterior y utilizando agujas nuevas.",
      "C": "Reutilizar la misma aguja de insulina durante 30 días continuos afilándola con lija.",
      "D": "Inyectar la insulina directamente en el músculo glúteo con una aguja gruesa de calibre 18G."
    },
    "correctAnswer": "B",
    "explanation": "La inyección repetida en la misma zona induce lipodistrofia (hipertrofia de adipocitos), lo que altera drásticamente la tasa de absorción de la insulina provocando fluctuaciones glucémicas severas e hipoglucemias inexplicadas. La rotación anatómica estructurada y el cambio de agujas es el estándar preventivo.",
    "distractorRationale": {
      "A": "Inyectar repetidamente en el mismo sitio genera fibrosis y nódulos lipodistróficos que impiden la absorción regular de la insulina.",
      "C": "La reutilización de agujas desgasta la silicona protectora, dobla la punta en arpón provocando microtraumatismos cutáneos e infecciones.",
      "D": "La vía intramuscular absorbe la insulina demasiado rápido provocando hipoglucemias severas imprevistas."
    }
  },
  {
    "id": "cssp-jvpe-20",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Manejo Seguro de Pacientes en Extravasación de Citostáticos Vesicantes",
    "legalBasis": "Norma de Bioseguridad y Manejo de Quimioterapia de la JVPE y CSSP.",
    "statement": "Durante la infusión intravenosa periférica de Doxorrubicina (fármaco vesicante antineoplásico), el paciente refiere dolor urente punzante súbito e hinchazón inmediata en el sitio de inserción del catéter venoso. ¿Cuál es el protocolo de acción de enfermería ante extravasación?",
    "options": {
      "A": "Aumentar la velocidad del suero para diluir rápidamente el quimioterápico en el tejido.",
      "B": "Detener inmediatamente la infusión, aspirar suavemente 3 a 5 ml de sangre/líquido a través del catéter para retirar la mayor cantidad de fármaco residual, NO retirar la vía de inmediato si se requiere instilar antídoto específico por la misma cánula, marcar la zona con tinta indeleble, elevar la extremidad y aplicar compresas secas según protocolo institucional.",
      "C": "Masajear enérgicamente el sitio con alcohol para dispersar el citostático por el brazo.",
      "D": "Ocultar el evento y pedirle al paciente que no comente nada al médico oncólogo."
    },
    "correctAnswer": "B",
    "explanation": "Los fármacos vesicantes como la doxorrubicina causan necrosis tisular severa que puede requerir desbridamiento quirúrgico y amputación. El protocolo exige: frenar la infusión al instante, aspirar restos del catéter, no lavar ni irrigar, aplicar antídoto si aplica (dexrazoxano), delimitar el área y elevar la extremidad.",
    "distractorRationale": {
      "A": "Aumentar el flujo expande el fármaco tóxico a tejidos sanos vecinos multiplicando el área necrótica.",
      "C": "Masajear el sitio de extravasación propaga la sustancia cáustica destruyendo planos musculares profundos.",
      "D": "Ocultar una extravasación constituye mala praxis grave con responsabilidad legal civil y penal por lesiones culposas."
    }
  },
  {
    "id": "cssp-jvpe-21",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Cuidados de Fototerapia en Neonatos con Hiperbilirrubinemia",
    "legalBasis": "Guía Clínica de Atención al Recién Nacido del MINSAL y Protocolo de Enfermería Pediátrica de la JVPE.",
    "statement": "Al ingresar un recién nacido a término con ictericia neonatal moderada a la unidad de Fototerapia para fotoisomerización de la bilirrubina indirecta, ¿cuáles son los cuidados de enfermería prioritarios e inexcusables?",
    "options": {
      "A": "Aplicar aceite mineral o vaselina en toda la piel del bebé para que la luz penetre más rápido.",
      "B": "Colocar protección ocular opaca fija y segura (antifaz oscuro) para evitar daño retiniano irreversible por la radiación lumínica, desvestir al neonato dejando únicamente el pañal para maximizar la superficie corporal expuesta, monitorizar temperatura corporal continuamente, favorecer la lactancia materna e hidratación, y cambiar de posición cada 2 a 3 horas.",
      "C": "Mantener al neonato completamente vestido con ropa abrigada y gorro grueso bajo las lámparas.",
      "D": "Retirar el antifaz protector de los ojos mientras las lámparas de luz azul se encuentren encendidas."
    },
    "correctAnswer": "B",
    "explanation": "La luz de alta intensidad de la fototerapia lesiona irreversiblemente las células fotorreceptoras de la retina; el uso de antifaz protector ocular opaco bien ajustado es una regla de seguridad absoluta. La piel debe estar descubierta (máxima superficie), limpia y seca (sin cremas ni aceites que causen quemaduras térmicas), vigilando termorregulación y diuresis.",
    "distractorRationale": {
      "A": "Los ungüentos y aceites sobre la piel expuesta a lámparas actúan como cuerpos de calentamiento y causan quemaduras de segundo grado.",
      "C": "Tapar al neonato con ropa impide que la luz alcance la piel, anulando por completo la fotodegradación de la bilirrubina.",
      "D": "Exponer los ojos descubiertos a la luz azul/blanca de fototerapia genera retinopatía fotoquímica y ceguera."
    }
  },
  {
    "id": "cssp-jvpe-22",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Cuidados del Cordón Umbilical y Detección de Onfalitis",
    "legalBasis": "Norma Técnica de Cuidados del Recién Nacido Sano de la JVPE y MINSAL.",
    "statement": "En la educación a la madre sobre el cuidado del muñón del cordón umbilical en el recién nacido, ¿cuál es la orientación de enfermería basada en la evidencia y qué signos de alarma obligan a consultar de inmediato por sospecha de Onfalitis?",
    "options": {
      "A": "Cubrir el ombligo con estiércol seco o telas húmedas y colocar monedas amarradas con fajeros apretados.",
      "B": "Mantener el muñón limpio y seco al aire, lavando con agua y jabón neutro o alcohol al 70%, doblar el pañal por debajo del ombligo; y consultar de urgencia si se presenta enrojecimiento (eritema) periumbilical, calor local, edema indurado, secreción purulenta con fetidez o fiebre.",
      "C": "Sumergir el cordón en mercurio cromo cada hora hasta que se caiga.",
      "D": "Jalar el cordón con una pinza de ropa al tercer día de nacido."
    },
    "correctAnswer": "B",
    "explanation": "El cuidado del cordón exige cura seca y limpia (mantenerlo seco al aire libre y fuera del pañal). El fajado y las monedas son prácticas empíricas lesivas que favorecen infecciones y hernias. El eritema periumbilical, fetidez o pus indican onfalitis, una infección invasiva de alto riesgo de septicemia neonatal y peritonitis.",
    "distractorRationale": {
      "A": "El uso de fajeros, monedas o sustancias contaminadas es la causa directa de tétanos neonatal y sepsis grave.",
      "C": "El mercurio cromo está prohibido por toxicidad sistémica y no ofrece beneficios frente al secado natural.",
      "D": "La tracción mecánica forzada del muñón provoca hemorragia de vasos umbilicales masiva e infección local."
    }
  },
  {
    "id": "cssp-jvpe-23",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Reanimación Cardiopulmonar (RCP) Intrahospitalaria Básica",
    "legalBasis": "Guías de Soporte Vital Cardiovascular Básico (BLS/AHA) y Estándares de la JVPE.",
    "statement": "Al presenciar el colapso súbito e inconsciencia de un paciente adulto en la sala de hospitalización, la enfermera comprueba ausencia de pulso carotídeo y de respiración normal (paro cardiorrespiratorio). Tras solicitar el código azul de paro y el desfibrilador, ¿cuáles son los parámetros de calidad de las compresiones torácicas?",
    "options": {
      "A": "Comprimir a un ritmo de 40 compresiones por minuto a una profundidad de 1 cm, sin permitir la reexpansión del tórax.",
      "B": "Iniciar compresiones en el centro del tórax (mitad inferior del esternón) a una frecuencia de 100 a 120 compresiones por minuto, profundidad de 5 a 6 cm (al menos 2 pulgadas), permitiendo la descompresión torácica completa entre cada compresión, minimizando las interrupciones y con relación 30:2 con ventilaciones si no hay vía aérea avanzada.",
      "C": "Dar 10 ventilaciones consecutivas antes de tocar el pecho del paciente.",
      "D": "Esperar a que llegue el médico residente durante 10 minutos sin realizar ninguna maniobra."
    },
    "correctAnswer": "B",
    "explanation": "El soporte vital básico de alta calidad exige una frecuencia de 100-120 cpm, profundidad de 5-6 cm, descompresión torácica completa (para permitir el llenado ventricular coronario), interrupciones menores a 10 segundos y relación 30 compresiones por 2 ventilaciones en adultos hasta disponer de desfibrilador o intubación.",
    "distractorRationale": {
      "A": "Compresiones a 40 cpm con 1 cm de profundidad no generan presión de perfusión coronaria ni cerebral, perpetuando anoxia biológica.",
      "C": "La prioridad inicial en el paro del adulto es la compresión miocárdica (C-A-B), no la hiperventilación aislada.",
      "D": "Cada minuto de retraso sin RCP reduce la probabilidad de supervivencia en un 7 a 10%; la inacción es abandono negligente."
    }
  },
  {
    "id": "cssp-jvpe-24",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Conservación de Cadena de Frío en el PAI",
    "legalBasis": "Manual de Cadena de Frío del Programa Ampliado de Inmunizaciones (PAI) del MINSAL y JVPE.",
    "statement": "En la Unidad de Salud, la enfermera encargada del vacunatorio debe organizar el refrigerador normativo de biológicos. ¿Cuál es la disposición correcta y rango de temperatura reglamentario para vacunas bacterianas sensibles a la congelación (como Pentavalente, Neumococo y DPT)?",
    "options": {
      "A": "Almacenar en el congelador a -15 °C para que duren varios años.",
      "B": "Mantener ininterrumpidamente entre +2.0 °C y +8.0 °C en los estantes intermedios del refrigerador (nunca en la puerta ni en contacto con el evaporador/congelador), con control gráfico de temperatura dos veces al día mediante termómetro calibrado.",
      "C": "Colocarlas en los anaqueles de la puerta del refrigerador donde hace menos calor.",
      "D": "Dejarlas en una hielera sin hielo en el mostrador de recepción."
    },
    "correctAnswer": "B",
    "explanation": "Las vacunas que contienen sales de aluminio como adyuvante (pentavalente, DPT, toxoide tetánico, hepatitis B) se inactivan irreversiblemente si se congelan (prueba de agitación o \"shake test\" positiva). Deben conservarse estrictamente entre +2 °C y +8 °C en bandejas centrales, alejadas de la pared posterior congelante y de la puerta donde la temperatura fluctúa.",
    "distractorRationale": {
      "A": "La congelación rompe la emulsión de los adyuvantes de aluminio de las vacunas inactivadas, anulando su inmunogenicidad y provocando abscesos estériles.",
      "C": "La puerta del refrigerador sufre variaciones térmicas bruscas cada vez que se abre, rompiendo la cadena de frío requerida.",
      "D": "Dejar vacunas sin refrigeración degrada los antígenos termoestables en cuestión de horas."
    }
  },
  {
    "id": "cssp-jvpe-25",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Dificultad Respiratoria Neonatal y Test de Silverman-Andersen",
    "legalBasis": "Guía Clínica de Atención Neonatal del MINSAL y Protocolos de Valoración de la JVPE.",
    "statement": "Una enfermera evalúa a un recién nacido pretérmino de 34 semanas que presenta quejido respiratorio audible con estetoscopio (1), aleteo nasal discreto (1), tiraje intercostal leve (1), retracción xifoidea visible (1) y disociación toraco-abdominal con retraso en la inspiración (1). ¿Cuál es la puntuación de Silverman-Andersen y cómo se interpreta?",
    "options": {
      "A": "Puntuación 0 puntos; el recién nacido tiene una respiración perfecta y sin esfuerzo.",
      "B": "Puntuación 5 puntos; indica Dificultad Respiratoria Moderada que exige soporte respiratorio inmediato (CPAP nasal o cámara de oxígeno monitorizada).",
      "C": "Puntuación 10 puntos; indica que el recién nacido no requiere atención médica.",
      "D": "Puntuación 1 punto; se trata de apnea fisiológica que cura sola en 12 horas."
    },
    "correctAnswer": "B",
    "explanation": "En el test de Silverman-Andersen (a diferencia del Apgar, donde mayor puntaje es mejor), a mayor puntuación peor es la dificultad respiratoria (0 = sin dificultad, 1-3 = leve, 4-6 = moderada, 7-10 = severa). La suma de los 5 signos con 1 punto cada uno da 5 puntos (dificultad moderada), indicación de oxigenoterapia o CPAP nasal precoz.",
    "distractorRationale": {
      "A": "El recién nacido muestra 5 signos objetivos de fatiga diafragmática y distress respiratorio.",
      "C": "10 puntos representaría una dificultad respiratoria extrema y fallo inminente, jamás normalidad.",
      "D": "La suma correcta de los 5 signos descritos es 5 puntos."
    }
  },
  {
    "id": "cssp-jvpe-26",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Prevención de Caídas en Pacientes Hospitalizados",
    "legalBasis": "Manual de Metas Internacionales de Seguridad del Paciente de la JVPE y MINSAL.",
    "statement": "En la valoración del riesgo de caídas en un adulto mayor hospitalizado con desorientación nocturna y medicación sedante, ¿cuál es la medida preventiva de enfermería que cumple los estándares de seguridad?",
    "options": {
      "A": "Amarrar las cuatro extremidades a la cama con alambre y cerrar la puerta con llave.",
      "B": "Identificar el riesgo con brazalete amarillo/tarjeta de cabecera, mantener barandales de la cama elevados, cama en la posición más baja posible con frenos colocados, iluminación tenue nocturna, timbre de llamada al alcance del paciente y asistencia programada en el traslado al inodoro.",
      "C": "Dejar el suelo húmedo con jabón después de trapear para que el paciente no se baje.",
      "D": "Retirar los anteojos y el bastón al paciente para obligarlo a no levantarse."
    },
    "correctAnswer": "B",
    "explanation": "La prevención de caídas hospitalarias involucra un entorno seguro: identificación del riesgo (Escala Downton o Morse), barandales arriba, freno de cama activo, cama baja, timbre cercano, piso seco y ayuda activa para la movilización. La sujeción física no reglamentada o medidas punitivas están contraindicadas.",
    "distractorRationale": {
      "A": "Inmovilizar con alambres es una tortura y privación ilegal de libertad penada por las leyes salvadoreñas.",
      "C": "Los pisos húmedos incrementan geométricamente las caídas graves con fracturas de cadera y hematomas subdurales.",
      "D": "Retirar aditamentos visuales o de marcha desorienta aún más al paciente y precipita tropiezos traumáticos."
    }
  },
  {
    "id": "cssp-jvpe-27",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Administración Segura de Cardiotónicos: Digoxina",
    "legalBasis": "Manual de Farmacoseguridad y Cuidados Cardiovasculares de la JVPE.",
    "statement": "Antes de administrar la dosis oral matutina de Digoxina 0.25 mg a un paciente con insuficiencia cardíaca congestiva, ¿cuál es el control clínico indispensable que debe realizar la enfermera?",
    "options": {
      "A": "Medir la temperatura del lóbulo de la oreja.",
      "B": "Auscultar la Frecuencia Cardíaca Apical con el fonendoscopio durante 1 minuto completo; si la frecuencia es menor a 60 latidos por minuto en adultos (bradicardia), suspender la administración, avisar de inmediato al médico y verificar electrolitos (riesgo de toxicidad por hipopotasemia).",
      "C": "Indicar al paciente que corra 100 metros para elevar el pulso antes de tomar la tableta.",
      "D": "Administrar la tableta junto con 3 tazas de café expreso cargado."
    },
    "correctAnswer": "B",
    "explanation": "La digoxina posee un estrecho margen terapéutico y es un inotrópico positivo y cronotrópico negativo (disminuye la conducción auriculoventricular). Si la frecuencia apical es < 60 lpm en adultos (< 90 lpm en niños), administrar digoxina puede inducir bloqueo cardíaco completo fatal o asistolia. Se debe auscultar 1 minuto completo previo.",
    "distractorRationale": {
      "A": "La temperatura no evalúa el estado del sistema de conducción eléctrica del corazón.",
      "C": "Forzar actividad física en un paciente descompensado puede causar edema agudo de pulmón.",
      "D": "El café enmascara la bradicardia y precipita taquiarritmias ventriculares letales."
    }
  },
  {
    "id": "cssp-jvpe-28",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Flebocontrol y Escala de Maddox en Accesos Venosos Periféricos",
    "legalBasis": "Guía Técnica de Accesos Vasculares Seguros del MINSAL y JVPE.",
    "statement": "Al inspeccionar la vía venosa periférica en el antebrazo de un paciente, la enfermera observa dolor a la palpación, eritema local mayor a 5 cm, edema y un cordón venoso palpable y endurecido a lo largo del trayecto (Flebitis Grado 3 de Maddox). ¿Cuál es la actuación clínica correcta?",
    "options": {
      "A": "Inyectar suero salino a presión con una jeringa de 20 ml para destapar la vena inflamada.",
      "B": "Retirar inmediatamente el catéter venoso periférico, aplicar compresas tibias locales, elevar la extremidad, registrar el evento adverso en la nota de enfermería y canalizar una nueva vía venosa en el miembro contralateral si persiste la indicación.",
      "C": "Dejar el catéter en el mismo sitio hasta que el paciente sea dado de alta del hospital.",
      "D": "Cubrir el área enrojecida con cinta adhesiva opaca para que el médico no la vea."
    },
    "correctAnswer": "B",
    "explanation": "La flebitis grado 3 o superior exige el retiro inmediato de la cánula para prevenir bacteriemia relacionada con catéter periférico y tromboflebitis supurativa. Se colocan compresas tibias para favorecer la reabsorción del infiltrado inflamatorio y se canaliza en el brazo opuesto.",
    "distractorRationale": {
      "A": "Inyectar a presión en una vena tromboflebitica desprende émbolos sépticos hacia la circulación pulmonar.",
      "C": "Mantener un acceso infectado perpetúa la inflamación endotelial y conduce a choque séptico.",
      "D": "Ocultar una flebitis viola las normas de registro de enfermería y compromete la integridad vascular del paciente."
    }
  },
  {
    "id": "cssp-jvpe-29",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Dispositivos de Oxigenoterapia y Titulación de FiO2",
    "legalBasis": "Guía Clínica de Oxigenoterapia de la JVPE y MINSAL.",
    "statement": "Un paciente con Neumonía bacteriana e insuficiencia respiratoria aguda requiere una fracción inspirada de oxígeno (FiO2) alta y controlada cercana al 90-100%. ¿Cuál es el dispositivo de oxigenoterapia no invasivo indicado para alcanzar dicha concentración?",
    "options": {
      "A": "Cánula nasal simple a 1 litro por minuto.",
      "B": "Mascarilla con reservorio de no reinhalación con flujo de oxígeno de 10 a 15 litros por minuto (con bolsa reservorio llena al menos dos tercios).",
      "C": "Tubo en T abierto sin conexión de gas.",
      "D": "Colocar un ventilador de pedestal frente a la cara del paciente."
    },
    "correctAnswer": "B",
    "explanation": "La mascarilla con reservorio de no reinhalación (con válvulas unidireccionales que impiden respirar aire ambiente o reinhalar CO2 expirado) administrada a 10-15 L/min puede suministrar una FiO2 de entre el 80% y 100%, siendo el dispositivo no invasivo de rescate ante hipoxemia severa.",
    "distractorRationale": {
      "A": "La cánula nasal a 1 L/min únicamente entrega aproximadamente 24% de FiO2, totalmente insuficiente para hipoxemia severa.",
      "C": "Un tubo en T abierto sin flujo de oxígeno solo administra el 21% de aire ambiental.",
      "D": "Los ventiladores ambientales no incrementan la concentración de oxígeno en el aire inspirado."
    }
  },
  {
    "id": "cssp-jvpe-30",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Cuidados de Enfermería en Traqueostomía y Aspiración de Secreciones",
    "legalBasis": "Manual de Cuidados de Enfermería Respiratoria y Cuidados Críticos de la JVPE.",
    "statement": "Durante la técnica de aspiración de secreciones endotraqueales en un paciente con cánula de traqueostomía para prevenir hipoxia y traumatismo de la mucosa traqueal, ¿cuáles son los principios técnicos obligatorios?",
    "options": {
      "A": "Aplicar succión continua mientras se introduce la sonda con fuerza hasta el fondo, aspirando durante 60 segundos seguidos.",
      "B": "Hiperoxigenar al paciente antes del procedimiento, introducir la sonda estéril sin succionar, aplicar succión intermitente únicamente al retirar la sonda con movimientos rotatorios suaves, no sobrepasar los 10 a 15 segundos por aspiración y utilizar técnica estrictamente aséptica.",
      "C": "Lavar la tráquea con 50 ml de jabón desinfectante antes de aspirar.",
      "D": "Reutilizar la misma sonda de aspiración que se usó previamente para limpiar la boca."
    },
    "correctAnswer": "B",
    "explanation": "Aspirar por más de 15 segundos o succionar al introducir la sonda produce hipoxemia crítica, bradicardia por estimulación vagal intensa y laceración del epitelio ciliar traqueal. Se debe preoxigenar, succionar solo al retirar con movimientos giratorios y mantener esterilidad estricta.",
    "distractorRationale": {
      "A": "Aspirar por 60 segundos induce asfixia mecánica, arritmias ventriculares y parada cardíaca por anoxia.",
      "C": "El jabón en el árbol bronquial genera broncoespasmo fulminante y edema pulmonar químico letal.",
      "D": "Pasar una sonda de la cavidad bucal contaminada a la tráquea estéril provoca neumonía bacteriana necrotizante."
    }
  },
  {
    "id": "cssp-jvpe-31",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Verificación de Sonda Nasogástrica (SNG) y Nutrición Enteral",
    "legalBasis": "Guía de Práctica Clínica de Nutrición Enteral Segura de la JVPE.",
    "statement": "Antes de iniciar la infusión de fórmula enteral o medicamentos a través de una Sonda Nasogástrica recién colocada, ¿cuál es el estándar más seguro para confirmar que la punta de la sonda está en el estómago y no en la vía aérea traqueobronquial?",
    "options": {
      "A": "Inyectar 100 ml de leche tibia y ver si el paciente tose sangre.",
      "B": "La radiografía de tórax/abdomen (o en su defecto la medición del pH del aspirado gástrico con tira reactiva demostrando acidez con pH < 5.5); la auscultación aislada del \"borborigmo epigástrico\" con aire no se considera método único definitivo de confirmación.",
      "C": "Confiar ciegamente en que la sonda se introdujo la distancia marcada sin realizar ninguna prueba.",
      "D": "Sumergir el extremo proximal de la sonda en alcohol y prenderle fuego."
    },
    "correctAnswer": "B",
    "explanation": "La confirmación radiológica es el estándar de oro para descartar intubación bronquial inadvertida de la sonda enteral. El test de pH gástrico (< 5.5) es la prueba de cabecera más confiable. El test de insuflación de aire con fonendoscopio puede auscultarse falsamente positivo aun cuando la sonda esté en el árbol traqueobronquial o esófago.",
    "distractorRationale": {
      "A": "Infundir líquidos en una sonda ubicada accidentalmente en el pulmón causa broncoaspiración masiva, asfixia y muerte inmediata.",
      "C": "Omitir la comprobación posicional es negligencia grave; decenas de sondas ciegas penetran los bronquios sin tos en pacientes sedados.",
      "D": "Manipular fuego en el entorno de un paciente hospitalizado es un absurdo que provoca incendios."
    }
  },
  {
    "id": "cssp-jvpe-32",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Cuidados del Drenaje Torácico y Sello de Agua (Pleurevac)",
    "legalBasis": "Guía de Cuidados de Enfermería en Pacientes con Drenaje Pleural de la JVPE.",
    "statement": "En el cuidado de enfermería de un paciente con tubo de tórax conectado a un sistema de drenaje cerrado con sello de agua (Pleurevac) por neumotórax, ¿cuál de las siguientes intervenciones representa una práctica segura?",
    "options": {
      "A": "Mantener la unidad de drenaje siempre por debajo del nivel del tórax del paciente, comprobar que la columna de agua del sello oscile con los movimientos respiratorios (fluctuación) y NO pinzar rutinariamente el tubo durante los traslados del paciente.",
      "B": "Colocar el frasco de drenaje sobre la mesa de noche del paciente por encima del hombro.",
      "C": "Pinzar el tubo torácico con dos pinzas fuertes durante todo el turno para que no salga líquido.",
      "D": "Vaciar el agua del sello para que el aire circule más rápido."
    },
    "correctAnswer": "A",
    "explanation": "El sistema debe ubicarse siempre por debajo del tórax para evitar el retorno retrógrado de aire o líquido pleural. La fluctuación del sello de agua confirma la permeabilidad del tubo. No debe pinzarse el tubo rutinariamente (salvo cambio de frasco o prueba médica), ya que pinzarlo en presencia de fuga aérea produce un neumotórax a tensión letal.",
    "distractorRationale": {
      "B": "Elevar el frasco por encima del tórax hace que el líquido drenado reingrese a la cavidad pleural contaminándola con empiema.",
      "C": "Pinzar el tubo con fuga activa acumula aire intrapleural rápidamente desencadenando neumotórax a tensión con colapso cardiovascular.",
      "D": "Eliminar el agua del sello anula la válvula unidireccional y permite la entrada masiva de aire atmosférico al tórax colapsando el pulmón."
    }
  },
  {
    "id": "cssp-jvpe-33",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Medidas de Aislamiento Hospitalario y Vía de Transmisión Aérea",
    "legalBasis": "Norma Técnica de Precauciones Estándar y Basadas en la Transmisión de la JVPE y MINSAL.",
    "statement": "Al ingresar a la habitación de un paciente con sospecha o confirmación de Tuberculosis Pulmonar bacilífera activa, ¿cuál es el equipo de protección respiratoria obligatorio y el tipo de aislamiento institucional requerido?",
    "options": {
      "A": "Mascarilla quirúrgica simple holgada y dejar la puerta abierta hacia el pasillo.",
      "B": "Aislamiento por Vía Aérea (núcleos de gotitas ≤ 5 micras): habitación individual con presión negativa de aire (mínimo 6 a 12 recambios de aire por hora) con puerta cerrada, y uso obligatorio de respirador de alta eficiencia N95 o FFP2 ajustado herméticamente al rostro antes de entrar.",
      "C": "Gafas de sol y delantal plástico sin cubrir boca ni nariz.",
      "D": "No se requiere ninguna protección si el personal de enfermería goza de buena salud física."
    },
    "correctAnswer": "B",
    "explanation": "Mycobacterium tuberculosis se transmite por microgotas aerosolizadas (núcleos de Wells) que permanecen suspendidas en el aire por horas. Exige precauciones de transmisión aérea: habitación con presión negativa para que el aire no escape al pasillo y respirador N95 con sello facial completo para filtrar partículas de hasta 0.3 micras con 95% de eficiencia.",
    "distractorRationale": {
      "A": "Las mascarillas quirúrgicas convencionales no filtran aerosoles pequeños y tienen fugas laterales por las que penetra el bacilo.",
      "C": "No protege las vías respiratorias superiores e inferiores, vía principal de inoculación bacilar.",
      "D": "La buena condición física no confiere inmunidad estéril frente a cepas de tuberculosis drogorresistentes hospitalarias."
    }
  },
  {
    "id": "cssp-jvpe-34",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Manejo Inicial de Cetoacidosis Diabética (CAD) y Fluidoterapia",
    "legalBasis": "Guía Clínica de Manejo de la Cetoacidosis Diabética del MINSAL y Protocolos de la JVPE.",
    "statement": "En las primeras horas del manejo de enfermería de un paciente con Cetoacidosis Diabética severa, el médico prescribe inicio de infusión de insulina regular. ¿Cuál es el valor de laboratorio que la enfermera debe verificar obligatoriamente antes de iniciar la infusión continua de insulina para evitar una parada cardíaca?",
    "options": {
      "A": "Nivel sérico de Potasio ($K^+$): si el potasio es menor a 3.3 mEq/L, NO debe iniciarse la insulina hasta corregir la hipopotasemia con reposición hidroelectrolítica adecuada.",
      "B": "Nivel de ácido úrico en orina de 24 horas.",
      "C": "Nivel de colesterol LDL.",
      "D": "Conteo de plaquetas únicamente."
    },
    "correctAnswer": "A",
    "explanation": "La insulina introduce masivamente potasio y glucosa al interior de la célula. Si un paciente tiene hipopotasemia basal (< 3.3 mEq/L), administrar insulina desploma aún más el potasio extracelular, precipitando arritmias ventriculares letales (torsades de pointes, fibrilación ventricular) y parálisis diafragmática. Primero se repone potasio y luego se arranca la insulina.",
    "distractorRationale": {
      "B": "El ácido úrico no influye en la estabilidad hemodinámica ni en la excitabilidad miocárdica inmediata en cetoacidosis.",
      "C": "El perfil lipídico es un parámetro metabólico crónico que no guarda relación con el riesgo arrítmico agudo por hipocalemia.",
      "D": "Las plaquetas no se ven alteradas de forma crítica por la infusión de insulina."
    }
  },
  {
    "id": "cssp-jvpe-35",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Seguridad en Infusión de Fenitoína (Difenilhidantoína)",
    "legalBasis": "Guía de Práctica Clínica de Estatus Epiléptico del MINSAL y Alerta de Fármacos de la JVPE.",
    "statement": "Al preparar y administrar Fenitoína sódica por vía intravenosa en un paciente con convulsiones continuas, ¿cuáles son las dos reglas farmacocinéticas de oro que enfermería debe respetar rigurosamente para evitar precipitación física y arritmias fatales?",
    "options": {
      "A": "Diluir en solución glucosada al 5% e inyectar en bolo rápido de 5 segundos.",
      "B": "Diluir ÚNICAMENTE en Solución Salina Normal al 0.9% (la dextrosa provoca precipitación inmediata de microcristales de fenitoína) y no exceder una velocidad de infusión de 50 mg/minuto en adultos monitorizando electrocardiograma y presión arterial continuamente.",
      "C": "Mezclar con bicarbonato de sodio y calentar al fuego.",
      "D": "Infundir por la misma vía donde pasa una transfusión de sangre."
    },
    "correctAnswer": "B",
    "explanation": "La fenitoína es una base insoluble que se mantiene en solución a pH muy alcalino (pH 12). La glucosa acidifica el medio y hace que la fenitoína precipite instantáneamente formando cristales que embolizan vasos sanguíneos. Además, infundir a más de 50 mg/min causa hipotensión severa, bloqueo AV y colapso cardiovascular por el propilenglicol del solvente.",
    "distractorRationale": {
      "A": "La solución glucosada precipita la fenitoína y el bolo rápido desencadena fibrilación ventricular y asistolia mortal.",
      "C": "Calentar al fuego desnaturaliza el principio activo y no previene la precipitación química.",
      "D": "Infundir con hemoderivados induce hemólisis y coagulación de la línea venosa."
    }
  },
  {
    "id": "cssp-jvpe-36",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Cirugía Segura y Lista de Verificación Quirúrgica de la OMS",
    "legalBasis": "Manual de Aplicación de la Lista OMS del MINSAL y Comité Quirúrgico de la JVPE.",
    "statement": "En el marco de la Lista de Verificación de la Seguridad de la Cirugía (\"Safe Surgery\"), ¿cuál es el momento denominado \"Pausa Quirúrgica\" (Time Out) y qué acciones debe liderar el equipo de enfermería antes de que el cirujano realice la incisión cutánea?",
    "options": {
      "A": "Realizar una pausa cuando la operación ha terminado para recoger el instrumental.",
      "B": "Realizar una pausa inmediata justo antes de la incisión en piel donde todo el equipo (cirujano, anestesiólogo y enfermeras) se detiene y confirma en voz alta: identidad del paciente, procedimiento exacto a realizar, sitio quirúrgico marcado, profilaxis antibiótica administrada en los últimos 60 min y previsión de eventos críticos.",
      "C": "Una pausa para salir a almorzar antes de terminar de suturar la herida.",
      "D": "Un receso para contar chistes en quirófano con el paciente dormido."
    },
    "correctAnswer": "B",
    "explanation": "El Time-Out es la última barrera de seguridad activa antes del acto quirúrgico incisional. Todo el equipo multidisciplinario se detiene para verificar verbalmente la identidad del paciente, el sitio anatómico correcto (marcado previamente), la intervención pactada, la administración de profilaxis antibiótica oportuna y el recuento de gasas/compresas basales.",
    "distractorRationale": {
      "A": "La verificación post-operatoria se denomina \"Sign-out\" (Salida), no Time-out.",
      "C": "Abandonar una cirugía abierta sin relevo calificado es abandono de paciente y delito penal.",
      "D": "Degrada la seriedad del acto quirúrgico y distrae del protocolo formal de verificación de seguridad."
    }
  },
  {
    "id": "cssp-jvpe-37",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Clasificación y Gestión Segura de Desechos Hospitalarios",
    "legalBasis": "Reglamento Técnico Salvadoreño RTS 13.01.01:14 y Código de Salud Art. 56.",
    "statement": "En la estación de enfermería de un servicio de hospitalización, ¿cuál de los siguientes residuos sanitarios debe descartarse obligatoriamente en la Bolsa de Color Rojo para desechos bioinfecciosos?",
    "options": {
      "A": "Papelería de oficina, cajas de cartón limpias y botellas plásticas de agua.",
      "B": "Gasas y apósitos empapados en sangre líquida o fluidos corporales purulentos, guantes usados en curaciones de heridas infectadas y bolsas con drenaje purulento.",
      "C": "Cáscaras de frutas y restos de comida de la cafetería.",
      "D": "Agujas metálicas hipodérmicas sueltas con punta expuesta."
    },
    "correctAnswer": "B",
    "explanation": "La normativa técnica salvadoreña (RTS 13.01.01:14) establece que los desechos biocontaminados con fluidos corporales o sangre visible deben depositarse en bolsas rojas de polietileno rotuladas con el símbolo universal de bioseguridad. La papelería va en bolsa negra y los punzocortantes van en recipientes rígidos de bioseguridad (guardianes), nunca sueltos en bolsas.",
    "distractorRationale": {
      "A": "Los desechos comunes no contaminados van en bolsa plástica de color negro para el relleno sanitario municipal.",
      "C": "Los residuos orgánicos alimenticios son desechos comunes urbanos no peligrosos.",
      "D": "Las agujas punzocortantes no deben arrojarse jamás en bolsas plásticas porque las perforan; van en recipientes rígidos herméticos."
    }
  },
  {
    "id": "cssp-jvpe-38",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Vigilancia del Puerperio Inmediato y Hemorragia Posparto (Código Rojo)",
    "legalBasis": "Guía Clínica de Atención al Parto y Puerperio del MINSAL y JVPE.",
    "statement": "En las primeras dos horas del puerperio inmediato (cuarto período del parto), la enfermera realiza la monitorización continua de la recién parida. ¿Cuál es el hallazgo clínico fundamental que garantiza la hemostasia uterina y previene la hemorragia posparto por atonía uterina?",
    "options": {
      "A": "Un útero blando, indoloro, distendido por encima de la cicatriz umbilical con sangrado vaginal rojo rutilante abundante continuo.",
      "B": "Un fondo uterino firmemente contraído a nivel o por debajo de la cicatriz umbilical (\"Globo de Seguridad de Pinard\"), con loquios hemáticos moderados sin coágulos gigantes y signos vitales estables.",
      "C": "Una presión arterial de 70/40 mmHg y taquicardia de 140 latidos por minuto.",
      "D": "Fiebre puerperal de 40 °C con escalofríos y delirio."
    },
    "correctAnswer": "B",
    "explanation": "La formación del \"Globo de Seguridad de Pinard\" (útero contraído y duro como piedra a nivel umbilical) sella mecánicamente los vasos placentarios mediante las \"ligaduras vivas de Pinard\", constituyendo la principal defensa contra la hemorragia posparto por atonía uterina (primera causa de muerte materna obstétrica).",
    "distractorRationale": {
      "A": "Un útero flácido y alto con sangrado profuso indica atonía uterina, emergencia que exige masaje bimanual y uterotónicos inmediatos.",
      "C": "Indica choque hipovolémico hemorrágico descompensado en curso.",
      "D": "Refleja sepsis puerperal grave o corioamnionitis, no hemostasia fisiológica."
    }
  },
  {
    "id": "cssp-jvpe-39",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Manejo de Pacientes con Agitación Psicomotriz y Contención",
    "legalBasis": "Guía de Cuidados de Enfermería en Salud Mental y Psiquiatría de la JVPE.",
    "statement": "Un paciente psiquiátrico hospitalizado presenta agitación psicomotriz severa, agresividad verbal y amenaza de auto/heteroagresión física inminente. Conforme al marco bioético y legal de enfermería, ¿cuál es la secuencia correcta de abordaje terapéutico?",
    "options": {
      "A": "Golpear al paciente con una vara de madera para someterlo por la fuerza.",
      "B": "Priorizar el abordaje de Desescalada Verbal en un entorno tranquilo y seguro; si fracasa y existe peligro inminente para la vida, aplicar contención farmacológica bajo indicación médica, y como último recurso la contención mecánica reglamentada de cuatro puntos con supervisión médica continua, garantizando hidratación, circulación periférica y dignidad personal.",
      "C": "Encerrar al paciente en un armario a oscuras sin ventilación durante todo el día.",
      "D": "Abandonar el servicio y dejar que los otros pacientes del pabellón resuelvan la situación."
    },
    "correctAnswer": "B",
    "explanation": "La contención física es una medida excepcional de último recurso cuando la desescalada verbal y farmacológica han fracasado. Requiere prescripción médica formal, técnica coordinada de al menos 4 a 5 profesionales, protección de articulaciones, verificación circulatoria cada 15-30 minutos y retiro progresivo tan pronto ceda el riesgo vital.",
    "distractorRationale": {
      "A": "La agresión física contra un paciente constituye el delito de lesiones y maltrato institucional penado por la ley.",
      "C": "El confinamiento en solitario sin monitoreo clínico causa asfixia y traumatismos severos, violando los derechos humanos.",
      "D": "Abandonar un pabellón con un paciente violento constituye denegación de auxilio y omisión del deber de cuidado."
    }
  },
  {
    "id": "cssp-jvpe-40",
    "juntaId": "jvpe",
    "juntaName": "Junta de Vigilancia de la Profesión en Enfermería",
    "area": "Marco Deontológico, Confidencialidad y Redes Sociales",
    "legalBasis": "Código Deontológico de la Profesión en Enfermería de El Salvador y Código de Salud Art. 56.",
    "statement": "Una enfermera toma una fotografía con su teléfono móvil personal a un paciente sedado e intubado en la UCI pediátrica y la publica en sus redes sociales personales con el texto: \"Aquí cuidando a este angelito en mi turno de noche #AmorPorLaSalud\". ¿Qué valoración legal y deontológica merece este acto ante la JVPE?",
    "options": {
      "A": "Es un acto loable y meritorio de felicitación pública institucional porque promueve la vocación de enfermería.",
      "B": "Constituye una infracción ética gravísima y una violación legal al secreto profesional, intimidad y dignidad de la persona (especialmente agravada por tratarse de un menor de edad protegido por la Ley Crecer Juntos), sancionable con proceso disciplinario, suspensión del ejercicio y responsabilidad civil y penal.",
      "C": "Es plenamente válido siempre que la publicación reciba más de mil \"likes\".",
      "D": "La JVPE no tiene atribuciones para regular actos realizados en redes sociales."
    },
    "correctAnswer": "B",
    "explanation": "Fotografiar pacientes sin consentimiento expreso y difundir su imagen en redes sociales vulnera la confidencialidad, el honor y la privacidad garantizados en la Constitución, el Código de Salud, el Código Deontológico de Enfermería y la Ley Crecer Juntos. La JVPE sanciona con suspensión del carné profesional a quienes infrinjan el sigilo médico.",
    "distractorRationale": {
      "A": "La vulneración del derecho a la intimidad y confidencialidad no puede justificarse bajo pretextos de vocación o afecto.",
      "C": "La popularidad digital en redes no atenúa la ilicitud jurídica del quebrantamiento del secreto profesional.",
      "D": "La JVPE tiene plena jurisdicción disciplinaria sobre toda falta ética que involucre el ejercicio y la dignidad de la profesión en El Salvador."
    }
  },
  {
    "id": "cssp-jvpqf-01",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Regulación de Medicamentos Controlados y Psicotrópicos",
    "legalBasis": "Ley de Medicamentos y Reglamento de Estupefacientes y Psicotrópicos de El Salvador.",
    "statement": "Un cliente se presenta a una farmacia privada solicitando Clonazepam 2 mg tabletas (benzodiacepina). Como regente farmacéutico, ¿cuál es el requisito legal estricto para su dispensación?",
    "options": {
      "A": "Dispensar libremente de venta libre si el cliente manifiesta insomnio severo.",
      "B": "Exigir receta médica especial controlada (recetario oficial de la DNM), verificar la firma y sello de JVPM del médico, retener la receta para el libro de control y asentar el registro en el balance de psicotrópicos.",
      "C": "Aceptar una fotocopia de receta médica de hace 6 meses.",
      "D": "Vender las tabletas sueltas en una bolsa sin empaque primario ni número de lote."
    },
    "correctAnswer": "B",
    "explanation": "El Clonazepam es una sustancia psicotrópica sometida a control estricto bajo la Ley de Medicamentos de El Salvador. Su dispensación exige receta oficial controlada, retención física de la receta, descargo en el libro foliado de psicotrópicos y supervisión directa del Químico Farmacéutico regente.",
    "distractorRationale": {
      "A": "La venta libre de benzodiacepinas constituye tráfico ilícito de fármacos controlados sancionado penalmente.",
      "C": "Las recetas controladas tienen vigencia limitada y no son reutilizables ni válidas en fotocopia.",
      "D": "El fraccionamiento sin registro ni lote vulnera las Buenas Prácticas de Dispensación y la trazabilidad sanitaria."
    }
  },
  {
    "id": "cssp-jvpqf-02",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Farmacovigilancia y Reporte Obligatorio de RAM",
    "legalBasis": "Reglamento de Farmacovigilancia de El Salvador (DNM) y Centro Nacional de Farmacovigilancia (CNFV).",
    "statement": "En una farmacia comunitaria u hospitalaria, el profesional químico farmacéutico detecta que tres pacientes que recibieron un antibiótico de un lote específico presentaron síndrome de Stevens-Johnson grave y choque anafiláctico. De acuerdo con la normativa nacional de Farmacovigilancia de la DNM, ¿cuál es el procedimiento y plazo oficial de reporte?",
    "options": {
      "A": "Ocultar el evento para no afectar las ventas del laboratorio fabricante.",
      "B": "Notificar de forma obligatoria e inmediata al Centro Nacional de Farmacovigilancia (CNFV) de la DNM mediante el formulario oficial de sospecha de Reacción Adversa a Medicamentos (RAM) grave dentro de un plazo máximo no mayor a 72 horas (o inmediatamente si causa muerte), y poner en cuarentena preventiva el lote afectado.",
      "C": "Esperar a que termine el año fiscal para consolidar el reporte en la memoria anual de labores.",
      "D": "Pedir a los pacientes que redacten una queja en el libro de reclamos de la Defensoría del Consumidor sin avisar a la autoridad sanitaria."
    },
    "correctAnswer": "B",
    "explanation": "El Reglamento de Farmacovigilancia de El Salvador exige a los profesionales de la salud y titulares de registro reportar las reacciones adversas graves o inesperadas al CNFV de la DNM en un lapso perentorio que no exceda las 72 horas (o de inmediato en casos fatales), adoptando medidas cautelares como la cuarentena del lote para salvaguardar la salud pública.",
    "distractorRationale": {
      "A": "El encubrimiento de eventos adversos graves a medicamentos constituye una violación flagrante a la Ley de Medicamentos y al Código Penal.",
      "C": "Las RAM graves con riesgo vital demandan intervención sanitaria inmediata para evitar más víctimas mediante alertas nacionales o retiros de mercado.",
      "D": "La farmacovigilancia es competencia técnica sanitaria exclusiva de la DNM y no se sustituye por trámites de consumo comercial."
    }
  },
  {
    "id": "cssp-jvpqf-03",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Buenas Prácticas de Almacenamiento (BPA) y Cadena de Frío",
    "legalBasis": "Norma Técnica de Buenas Prácticas de Almacenamiento (BPA) de Productos Farmacéuticos (DNM / CSSP).",
    "statement": "En el almacén de una distribuidora farmacéutica o droguería, ¿cuál es el rango de temperatura mandatorio para garantizar la estabilidad y potencia de medicamentos biológicos termolábiles (como insulinas y vacunas) bajo régimen de cadena de frío estricta?",
    "options": {
      "A": "Entre +2.0 °C y +8.0 °C, con registro termográfico continuo dos veces al día mediante termohigrómetros calibrados y plan de contingencia eléctrica.",
      "B": "Entre -20.0 °C y 0.0 °C en congelador convencional doméstico para congelar la insulina.",
      "C": "Entre +15.0 °C y +25.0 °C en anaquel a temperatura ambiente.",
      "D": "Cualquier temperatura siempre que el empaque secundario permanezca sellado con cinta adhesiva."
    },
    "correctAnswer": "A",
    "explanation": "La Norma Técnica de BPA de la DNM y los estándares internacionales de la OMS exigen que los productos termolábiles refrigerados se conserven ininterrumpidamente entre +2 °C y +8 °C. La congelación desnaturaliza las proteínas de la insulina y vacunas, provocando pérdida irreversible de su actividad biológica.",
    "distractorRationale": {
      "B": "La congelación de insulinas rompe la estructura cuaternaria proteica y precipita los adyuvantes de las vacunas, anulando su eficacia y provocando abscesos.",
      "C": "A temperatura de 15 °C a 25 °C se acelera la degradación hidrolítica de las formulaciones biológicas termolábiles.",
      "D": "El empaque secundario de cartón no provee aislamiento térmico sin una fuente controlada de refrigeración validada."
    }
  },
  {
    "id": "cssp-jvpqf-04",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Bioequivalencia, Intercambiabilidad y Medicamentos de Estrecho Margen Terapéutico",
    "legalBasis": "Ley de Medicamentos de El Salvador, Arts. 56 al 62 y Reglamento de Bioequivalencia (DNM).",
    "statement": "Un paciente epiléptico acude a la farmacia con receta de Carbamazepina 200 mg del laboratorio innovador con el que se encuentra perfectamente controlado y sin convulsiones. El dispensador sugiere sustituir libremente el fármaco por otra marca no bioequivalente más económica. ¿Cuál es el criterio técnico-regulatorio emitido por la DNM y la JVPQF?",
    "options": {
      "A": "Está prohibida la sustitución automática sin autorización médica expresa en fármacos de Estrecho Margen Terapéutico (como carbamazepina, fenitoína, litio, digoxina), salvo que cuenten con certificación oficial de bioequivalencia in vivo emitida por la DNM.",
      "B": "Cualquier medicamento genérico puede sustituirse libremente sin importar si es de estrecho margen terapéutico o si carece de estudios de biodisponibilidad.",
      "C": "La sustitución es obligatoria por ley aun en contra del criterio del médico especialista tratante.",
      "D": "El dependiente de farmacia puede duplicar la dosis a su criterio para compensar posibles diferencias de absorción."
    },
    "correctAnswer": "A",
    "explanation": "Los fármacos de estrecho margen terapéutico (NTI, por sus siglas en inglés) presentan pequeñas diferencias plasmáticas que pueden desencadenar toxicidad severa o fallo terapéutico (reaparición de crisis convulsivas). La Ley de Medicamentos y la DNM prohíben su intercambio libre en farmacia a menos que exista acreditación formal de bioequivalencia demostrada in vivo.",
    "distractorRationale": {
      "B": "Sustituir medicamentos de estrecho rango terapéutico sin pruebas de bioequivalencia comprobadas genera crisis epilépticas o intoxicaciones graves.",
      "C": "La Ley de Medicamentos respeta la autonomía técnica de prescripción médica en medicamentos con riesgo farmacocinético crítico.",
      "D": "Modificar dosis de medicamentos anticonvulsivantes en el mostrador constituye ejercicio ilegal de la medicina y mala práctica de dispensación."
    }
  },
  {
    "id": "cssp-jvpqf-05",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Buenas Prácticas de Dispensación (BPD) y Medicamentos Vencidos",
    "legalBasis": "Código de Salud de El Salvador, Art. 102; y Reglamento de Establecimientos Farmacéuticos (DNM).",
    "statement": "Durante la auditoría interna mensual de una farmacia, el regente químico farmacéutico encuentra un lote de antibióticos inyectables cuya fecha de caducidad expiró hace dos semanas. Conforme al Código de Salud y las Buenas Prácticas de Almacenamiento y Dispensación, ¿cuál es la disposición técnica inmediata?",
    "options": {
      "A": "Retirar inmediatamente los productos del área de venta, trasladarlos a la zona de Cuarentena debidamente rotulada y bajo llave, registrarlos en el libro de bajas y proceder a su destrucción supervisada conforme al acta sanitaria oficial de la DNM.",
      "B": "Ofrecerlos en liquidación o descuento del 50% a los clientes para recuperar los costos de inversión.",
      "C": "Reetiquetar con una nueva fecha de vencimiento otorgando un \"período de gracia\" de 6 meses.",
      "D": "Donarlos a una clínica comunal rural sin informar que están vencidos."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 102 del Código de Salud y las regulaciones de la DNM tipifican como infracción muy grave la tenencia o comercialización de medicamentos vencidos. El regente farmacéutico debe aislarlos en el área de cuarentena, levantar acta de desecho y coordinar su destrucción certificada para evitar su circulación ilícita.",
    "distractorRationale": {
      "B": "Comercializar productos farmacéuticos vencidos pone en riesgo la vida del consumidor y constituye delito contra la salud pública en el Código Penal.",
      "C": "La adulteración de fechas de vencimiento o reetiquetado fraudulento constituye falsificación de medicamentos, penada con prisión.",
      "D": "Donar medicamentos caducados a comunidades vulnerables está expresamente prohibido por la normativa sanitaria y viola los derechos humanos fundamentales."
    }
  },
  {
    "id": "cssp-jvpqf-06",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Marco Legal del Ejercicio y Regencia Farmacéutica",
    "legalBasis": "Ley de Medicamentos de El Salvador, Arts. 23 al 28 y Código de Salud Art. 60.",
    "statement": "En relación con la Regencia Farmacéutica en establecimientos como farmacias, droguerías y laboratorios farmacéuticos en El Salvador, ¿cuál es el mandato legal de presencia profesional según la Ley de Medicamentos y la JVPQF?",
    "options": {
      "A": "El regente farmacéutico solo necesita presentarse una vez al año para firmar la renovación del permiso.",
      "B": "El químico farmacéutico regente debe estar presente de forma obligatoria durante el horario oficial de funcionamiento autorizado del establecimiento, asumiendo la responsabilidad técnica, legal y sanitaria de todos los procesos de adquisición, custodia, manufactura y dispensación.",
      "C": "Se puede operar la farmacia sin químico farmacéutico regente si el propietario tiene experiencia en ventas comerciales.",
      "D": "La regencia farmacéutica puede ser ejercida por cualquier bachiller que haya cursado química en secundaria."
    },
    "correctAnswer": "B",
    "explanation": "La Ley de Medicamentos (Arts. 23-28) y las regulaciones de la JVPQF/DNM establecen la obligatoriedad de la presencia física del profesional Químico Farmacéutico regente durante el horario de operación del establecimiento sanitario, respondiendo administrativamente y penalmente de la legalidad y calidad de los productos.",
    "distractorRationale": {
      "A": "La figura de la \"regencia nominal o de alquiler de firma\" sin presencia física es una falta gravísima sancionable con suspensión profesional.",
      "C": "Operar un establecimiento farmacéutico sin regencia habilitada constituye clausura inmediata del local y multa por la DNM.",
      "D": "Solo los profesionales graduados con título universitario en Química y Farmacia e inscritos ante la JVPQF pueden ejercer la regencia."
    }
  },
  {
    "id": "cssp-jvpqf-07",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Registro Sanitario de Medicamentos y Vigencia Legal",
    "legalBasis": "Ley de Medicamentos de El Salvador, Arts. 31 al 38 y Reglamento General.",
    "statement": "En El Salvador, todo medicamento que se comercialice o distribuya en el territorio nacional debe contar con Registro Sanitario otorgado por la Dirección Nacional de Medicamentos (DNM). ¿Cuál es el período de vigencia legal de dicho registro sanitario?",
    "options": {
      "A": "Vigencia de 1 año con renovación mensual.",
      "B": "Vigencia de 5 años, renovable previa solicitud y cumplimiento de los requisitos de calidad, seguridad y eficacia establecidos en la normativa técnica.",
      "C": "Vigencia indefinida y perpetua que nunca vence ni se somete a revisión.",
      "D": "Vigencia de 25 años sin necesidad de inspección analítica."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 38 de la Ley de Medicamentos dispone que el Registro Sanitario de productos farmacéuticos tiene una vigencia legal de 5 años contados a partir de su emisión, sujeto a renovación periódica y vigilancia post-comercialización por parte del laboratorio de control de calidad de la DNM.",
    "distractorRationale": {
      "A": "Un año es un plazo excesivamente corto incompatible con los procesos regulatorios industriales.",
      "C": "Ningún registro sanitario farmacéutico es perpetuo; la evidencia científica y perfiles de seguridad evolucionan continuamente.",
      "D": "Un plazo de 25 años violaría las directrices de la OPS/OMS sobre vigilancia y control sanitario continuo de fármacos."
    }
  },
  {
    "id": "cssp-jvpqf-08",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Buenas Prácticas de Manufactura (BPM) y Áreas Limpias Clasificadas",
    "legalBasis": "Reglamento Técnico Centroamericano RTCA 11.03.42:07 (Buenas Prácticas de Manufactura para la Industria Farmacéutica).",
    "statement": "En la manufactura de productos farmacéuticos estériles inyectables (preparación aséptica y llenado de viales), ¿cuál es la clasificación del área de trabajo crítico donde el producto estéril y sus componentes están directamente expuestos al ambiente?",
    "options": {
      "A": "Área Grado D (ISO Clase 8) con ventilación natural por ventanas abiertas.",
      "B": "Área Grado A (ISO Clase 4.8 / Clase 100), bajo flujo de aire unidireccional (laminar) con filtros HEPA terminales, con recuentos microbiológicos en operación menores a 1 UFC/m³.",
      "C": "Pasillo común de embalaje secundario con suelo de cemento sin pulir.",
      "D": "Zona de almacenamiento de cartón y tarimas de madera."
    },
    "correctAnswer": "B",
    "explanation": "El RTCA de BPM farmacéuticas clasifica como Grado A la zona para operaciones de alto riesgo (llenado aséptico de inyectables, colocación de tapones). Requiere flujo laminar de aire con velocidad controlada (0.36 a 0.54 m/s) y filtración absoluta HEPA, garantizando ausencia de partículas y microorganismos viables (< 1 UFC).",
    "distractorRationale": {
      "A": "El Grado D está reservado para etapas menos críticas como lavado previo de viales o manipulación de materiales cerrados.",
      "C": "Los pasillos de embalaje no cuentan con control de partículas ni esterilidad ambiental para productos inyectables.",
      "D": "Las tarimas de madera acumulan humedad, hongos y esporas, estando prohibidas en áreas de manufactura de medicamentos."
    }
  },
  {
    "id": "cssp-jvpqf-09",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Control de Calidad Analítico: Ensayos de Disolución según Farmacopea Oficial",
    "legalBasis": "Ley de Medicamentos Art. 45 y Farmacopea de los Estados Unidos (USP) — Ensayo de Disolución <711>.",
    "statement": "En el laboratorio de control de calidad farmacéutico, ¿cuál es el objetivo primordial del Ensayo de Disolución in vitro para formas farmacéuticas sólidas orales (tabletas y cápsulas)?",
    "options": {
      "A": "Determinar el color exacto del recubrimiento plástico mediante espectrofotometría de luz visible.",
      "B": "Medir la velocidad y cantidad de principio activo que se libera y disuelve en un medio líquido biorrelevante a lo largo del tiempo bajo condiciones estandarizadas (pH, temperatura a 37 °C y agitación), como parámetro crítico sustitutivo de la biodisponibilidad in vivo.",
      "C": "Pesar el frasco de plástico para verificar que soporte caídas de un metro de altura.",
      "D": "Determinar la cantidad de calorías que aporta el almidón de la tableta al consumirla."
    },
    "correctAnswer": "B",
    "explanation": "El ensayo de disolución (USP <711>) evalúa la liberación del fármaco desde la matriz sólida al medio fisiológico. Una disolución adecuada es prerrequisito biológico para la absorción gastrointestinal; desviaciones en el perfil de disolución reflejan fallos de formulación que comprometen la biodisponibilidad y equivalencia terapéutica.",
    "distractorRationale": {
      "A": "El color del comprimido es un parámetro estético secundario, no el propósito del aparato de disolución.",
      "C": "La resistencia del envase corresponde a ensayos de integridad de empaque primario, no a disolución farmacológica.",
      "D": "Los medicamentos no se evalúan por aporte calórico nutricional en las pruebas analíticas oficiales."
    }
  },
  {
    "id": "cssp-jvpqf-10",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Condiciones de Ensayos de Estabilidad: Zona Climática IVb",
    "legalBasis": "Guía de Estudios de Estabilidad de Medicamentos de la DNM y Guías ICH Q1A.",
    "statement": "De acuerdo con la clasificación climática internacional de la OMS y las regulaciones de la DNM para El Salvador y la región centroamericana, ¿cuáles son las condiciones ambientales normativas para los estudios de estabilidad a largo plazo (vida útil)?",
    "options": {
      "A": "Zona Climática I: 21 °C y 45% de Humedad Relativa (clima templado).",
      "B": "Zona Climática IVb: 30 °C ± 2 °C y 75% ± 5% de Humedad Relativa (clima cálido y muy húmedo).",
      "C": "Zona Climática II: 25 °C y 60% de Humedad Relativa (clima subtropical).",
      "D": "Zona Polar: -10 °C y 10% de Humedad Relativa."
    },
    "correctAnswer": "B",
    "explanation": "El Salvador pertenece a la Zona Climática IVb (países con condiciones extremas de calor y alta humedad relativa: 30 °C / 75% HR). Para registrar o renovar un medicamento en el país, los estudios de estabilidad deben ejecutarse bajo estas condiciones para garantizar que el fármaco no se degrade antes de su fecha de caducidad.",
    "distractorRationale": {
      "A": "La Zona I corresponde a países del norte de Europa con clima frío seco, insuficiente para Centroamérica.",
      "C": "La Zona II (25 °C / 60% HR) subestima las condiciones tropicales reales de almacenamiento en El Salvador.",
      "D": "Las condiciones polares no reflejan los perfiles climáticos centroamericanos."
    }
  },
  {
    "id": "cssp-jvpqf-11",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Farmacocinética Clínica: Concepto de Estado de Equilibrio (Steady-State)",
    "legalBasis": "Manual de Farmacocinética y Farmacia Clínica de la JVPQF.",
    "statement": "Al administrar un fármaco en dosis repetidas a intervalos fijos equivalentes a su vida media de eliminación ($t_{1/2}$), ¿cuántas vidas medias se requieren teóricamente para alcanzar aproximadamente el 94% a 97% del Estado de Equilibrio Estacionario (Steady-State)?",
    "options": {
      "A": "Menos de 1 vida media.",
      "B": "Aproximadamente 4 a 5 vidas medias de eliminación.",
      "C": "Exactamente 50 vidas medias.",
      "D": "No depende de la vida media sino del costo del medicamento."
    },
    "correctAnswer": "B",
    "explanation": "En farmacocinética lineal de primer orden, tras 1 $t_{1/2}$ se acumula el 50%, tras 2 vidas medias el 75%, tras 3 vidas medias el 87.5%, tras 4 vidas medias el 93.75% y tras 5 vidas medias el 96.875% de la concentración en estado de equilibrio estacionario, momento en el cual la velocidad de administración se iguala a la de eliminación.",
    "distractorRationale": {
      "A": "En 1 vida media solo se alcanza la mitad de la concentración estacionaria, lejos de la meseta terapéutica.",
      "C": "50 vidas medias es un lapso desproporcionado; la acumulación asintótica se completa clínicamente en 5 vidas medias.",
      "D": "El estado de equilibrio es un principio biofísico gobernado por el aclaramiento y volumen de distribución, independiente del costo comercial."
    }
  },
  {
    "id": "cssp-jvpqf-12",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Clasificación de Reacciones Adversas a Medicamentos (Rawlins y Thompson)",
    "legalBasis": "Guía de Farmacovigilancia del Centro Nacional de Farmacovigilancia (CNFV) y DNM.",
    "statement": "Un paciente hipertenso tratado con Enalapril presenta tos seca, persistente y no productiva mediada por la acumulación de bradicinina pulmonar, la cual desaparece al retirar el fármaco. Conforme a la clasificación de Rawlins y Thompson de RAM, ¿cómo se clasifica esta reacción?",
    "options": {
      "A": "Reacción Tipo A (Augmented / Aumentada): es una reacción predecible basada en el mecanismo farmacológico del medicamento y dosis-dependiente.",
      "B": "Reacción Tipo B (Bizarre / Bizarra): es una reacción impredecible alérgica mediada por anticuerpos IgE que no tiene relación farmacológica.",
      "C": "Reacción Tipo D (Delayed): es una malformación teratogénica transmitida a la descendencia 20 años después.",
      "D": "Reacción Tipo F (Failure): es un fallo en la disolución del comprimido en el estómago."
    },
    "correctAnswer": "A",
    "explanation": "Las RAM tipo A representan más del 80% de los eventos adversos; se derivan de la acción farmacológica conocida del fármaco (los IECA bloquean la enzima que degrada la bradicinina y sustancia P en el árbol bronquial, acumulándose e induciendo tos). Son predecibles, dosis-dependientes y ceden al reducir la dosis o retirar el fármaco.",
    "distractorRationale": {
      "B": "La tos por IECA no es una hipersensibilidad de tipo anafiláctico ni bizarra, sino una consecuencia enzimática predecible.",
      "C": "Las reacciones tipo D involucran teratogénesis o carcinogénesis tardía no relacionadas con la tos por IECA.",
      "D": "El fallo de eficacia terapéutica (tipo F) se refiere a la ausencia del efecto hipotensor esperado, no a la aparición de un efecto colateral adverso."
    }
  },
  {
    "id": "cssp-jvpqf-13",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Interacciones Farmacológicas por Inhibición e Inducción del Citocromo P450",
    "legalBasis": "Manual de Farmacología Clínica y Farmacia Hospitalaria de la JVPQF.",
    "statement": "Un paciente anticoagulado estable con Warfarina inicia tratamiento con Rifampicina por tuberculosis pulmonar. Sabiendo que la rifampicina es un potente inductor enzimático del complejo microsomal CYP2C9 y CYP3A4 hepático, ¿cuál es la consecuencia farmacocinética esperada sobre el INR y la warfarina?",
    "options": {
      "A": "Aumento masivo del INR a valores mayores de 10 con hemorragia cerebral espontánea.",
      "B": "Disminución marcada de las concentraciones plasmáticas de warfarina por incremento en su aclaramiento metabólico hepático, con caída del INR y pérdida del efecto anticoagulante, requiriendo un aumento significativo de la dosis de warfarina bajo estricto monitoreo.",
      "C": "La rifampicina no tiene ningún efecto en el metabolismo hepático de otros fármacos.",
      "D": "Neutralización inmediata de la rifampicina convirtiéndose en agua destilada."
    },
    "correctAnswer": "B",
    "explanation": "La rifampicina estimula la transcripción genética de múltiples isoenzimas del citocromo P450 (inductor potente). Al aumentar la cantidad de enzimas metabolizadoras, acelera la eliminación de la warfarina, desplomando su concentración plasmática y reduciendo el INR por debajo del rango terapéutico, elevando el riesgo de trombosis.",
    "distractorRationale": {
      "A": "El aumento del INR ocurre con inhibidores enzimáticos (como fluconazol, amiodarona o metronidazol), no con inductores.",
      "C": "La rifampicina es uno de los inductores farmacológicos más potentes conocidos en la farmacología clínica.",
      "D": "Ambos principios activos interactúan a nivel enzimático microsomal; la rifampicina no se convierte en agua."
    }
  },
  {
    "id": "cssp-jvpqf-14",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Algoritmo de Naranjo para Evaluación de Causalidad de RAM",
    "legalBasis": "Guía Nacional de Farmacovigilancia del CNFV y DNM.",
    "statement": "Al aplicar el Algoritmo de Naranjo en la evaluación pericial de una sospecha de Reacción Adversa a Medicamentos (RAM) en un hospital, el cálculo final arroja una puntuación de 10 puntos. ¿Cuál es la categoría de causalidad oficial?",
    "options": {
      "A": "Causalidad Dudosa o Improbable (Doubtful).",
      "B": "Causalidad Probada / Definida (Definite, puntaje ≥ 9).",
      "C": "Causalidad Condicional / No clasificable.",
      "D": "Falsedad del reporte con sanción al notificador."
    },
    "correctAnswer": "B",
    "explanation": "El Algoritmo de Causalidad de Naranjo clasifica las sospechas de RAM en cuatro categorías cuantitativas estandarizadas: Definida (≥ 9 puntos), Probable (5 a 8 puntos), Posible (1 a 4 puntos) y Dudosa (≤ 0 puntos). Una puntuación de 10 establece una relación causal inequívoca entre el fármaco y el evento.",
    "distractorRationale": {
      "A": "Dudosa corresponde a puntuaciones menores o iguales a cero (≤ 0).",
      "C": "No clasificable es un criterio cuando faltan datos esenciales para responder el cuestionario.",
      "D": "El algoritmo es una herramienta científica de análisis clínico, no un instrumento punitivo."
    }
  },
  {
    "id": "cssp-jvpqf-15",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Fórmulas Magistrales y Buenas Prácticas de Preparación en Farmacia",
    "legalBasis": "Capítulo de Farmacopea USP <795> (Preparaciones Magistrales No Estériles) y Código de Salud Art. 60.",
    "statement": "En la elaboración de una formulación magistral tópica no estéril en el recetario de una farmacia comunitaria (como una pomada con óxido de zinc y ácido salicílico), ¿cuál de los siguientes requisitos documentales y técnicos es obligatorio para el químico farmacéutico regente?",
    "options": {
      "A": "Elaborar el producto en el piso de la bodega de almacenamiento sobre cartón sucio sin receta médica.",
      "B": "Contar con la prescripción médica formal, asentar la preparación en el Libro Foliado de Preparaciones Magistrales de la farmacia, elaborar la fórmula conforme a la monografía oficial o literatura científica, calcular fecha límite de uso (Beyond-Use Date) y rotular con datos completos del paciente, fórmula cuali-cuantitativa y nombre del regente.",
      "C": "Vender la pomada en frascos vacíos de alimentos reciclados sin etiqueta.",
      "D": "Asignar una fecha de caducidad de 10 años a todas las preparaciones magistrales."
    },
    "correctAnswer": "B",
    "explanation": "El recetario magistral está rigurosamente regulado por el Código de Salud y las normas USP <795>. Exige orden médica personalizada, registro en el libro foliado de fórmulas magistrales autorizado por el CSSP, materias primas de calidad farmacéutica, etiquetado que identifique al paciente y regente, y determinación estricta de la fecha límite de utilización.",
    "distractorRationale": {
      "A": "Preparar medicamentos en áreas no autorizadas ni higiénicas constituye contaminación cruzada y falta sancionable.",
      "C": "El uso de envases no farmacéuticos reciclados de alimentos viola las Buenas Prácticas de Manufactura y Almacenamiento.",
      "D": "Las fórmulas magistrales tienen vidas útiles cortas (días o semanas) por no contener sistemas conservantes industriales masivos."
    }
  },
  {
    "id": "cssp-jvpqf-16",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Gestión Ambiental y Destrucción Segura de Medicamentos Vencidos",
    "legalBasis": "Ley del Medio Ambiente, Reglamento Especial en Materia de Sustancias Peligrosas y Normativa DNM.",
    "statement": "Al coordinar la destrucción oficial de un lote de medicamentos citostáticos y antibióticos vencidos dados de baja en una distribuidora farmacéutica, ¿cuál es el procedimiento ambiental y técnicamente autorizado?",
    "options": {
      "A": "Arrojarlos por el inodoro o alcantarillado sanitario hacia los ríos locales.",
      "B": "Contratar a una empresa gestora de desechos peligrosos debidamente autorizada por el MARN y la DNM para su tratamiento térmico mediante Incineración de Alta Temperatura (> 1,000 °C con lavado de gases) o encapsulamiento en celdas de confinamiento de seguridad, levantando el Acta Sanitaria de Destrucción oficial con presencia de inspector de la DNM.",
      "C": "Triturarlos con un martillo y enterrarlos en el jardín de la casa del químico farmacéutico.",
      "D": "Regalarlos a recicladores informales para que vendan el cartón y el vidrio."
    },
    "correctAnswer": "B",
    "explanation": "Los medicamentos desechados son clasificados como residuos peligrosos químicos y ecotóxicos. Verterlos en aguas residuales contamina ecosistemas con fármacos citotóxicos y selecciona bacterias multirresistentes a antibióticos. Deben ser destruidos por incineración controlada o inertización bajo fe pública de delegados sanitarios oficiales.",
    "distractorRationale": {
      "A": "Verter fármacos al drenaje contamina los mantos acuíferos y es un delito ambiental tipificado en el Código Penal.",
      "C": "Enterrar químicos farmacéuticos en suelo libre lixivia principios activos tóxicos a pozos de agua potable.",
      "D": "Entregar fármacos a recicladores fomenta el mercado negro de medicamentos caducados y adulterados."
    }
  },
  {
    "id": "cssp-jvpqf-17",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Farmacovigilancia de Vacunas: Eventos Supuestamente Atribuibles a la Inmunización (ESAVI)",
    "legalBasis": "Manual de Vigilancia Epidemiológica de ESAVI de la DNM y MINSAL.",
    "statement": "Tras la administración de una vacuna en un centro de salud, un lactante presenta anafilaxia severa y choque a los 20 minutos de la vacunación. Conforme al sistema nacional de farmacovigilancia, ¿cuál es la categoría del evento y el plazo máximo perentorio para la notificación oficial?",
    "options": {
      "A": "Es un ESAVI Leve que puede notificarse 6 meses después en un informe consolidado.",
      "B": "Es un ESAVI Grave (Evento Supuestamente Atribuible a la Vacunación o Inmunización con amenaza a la vida), el cual debe notificarse de forma inmediata en un plazo no mayor a 24 horas a través de la ficha epidemiológica oficial ante la DNM y el Sistema de Vigilancia del MINSAL.",
      "C": "No debe notificarse para no alarmar a los padres de familia ni generar dudas sobre las vacunas.",
      "D": "Es un problema de los fabricantes que no concierne al profesional de salud local."
    },
    "correctAnswer": "B",
    "explanation": "Cualquier ESAVI grave (que cause muerte, hospitalización, discapacidad o ponga en riesgo la vida) exige notificación obligatoria inmediata en un plazo menor a 24 horas por parte de todo profesional sanitario para permitir la investigación del lote, trazabilidad de la cadena de frío y adopción de medidas sanitarias preventivas urgentes.",
    "distractorRationale": {
      "A": "Diferir 6 meses la notificación de un evento con riesgo de muerte impide intervenir ante un posible lote defectuoso contaminado.",
      "C": "Ocultar eventos adversos es una infracción gravísima a la Ley de Medicamentos y al Código de Salud.",
      "D": "La farmacovigilancia activa es una obligación legal indelegable de todos los profesionales de la salud receptores del caso."
    }
  },
  {
    "id": "cssp-jvpqf-18",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Rotulado y Etiquetado Reglamentario de Medicamentos",
    "legalBasis": "Reglamento Técnico Centroamericano RTCA 11.01.02:04 (Productos Farmacéuticos. Etiquetado de Medicamentos para Uso Humano).",
    "statement": "En la inspección técnica del empaque secundario (caja externa) de un producto farmacéutico comercializado en El Salvador, ¿cuál de los siguientes datos es de obligatorio cumplimiento legal según el RTCA de Etiquetado y la Ley de Medicamentos?",
    "options": {
      "A": "Fotografía a color de los accionistas principales del laboratorio fabricante.",
      "B": "Nombre comercial (si aplica), Denominación Común Internacional (DCI / nombre genérico), concentración del principio activo, forma farmacéutica, fórmula cuali-cuantitativa por unidad posológica, número de Registro Sanitario de El Salvador emitido por la DNM, número de lote, fecha de vencimiento, condiciones de almacenamiento y el Precio Máximo de Venta al Público (PVP).",
      "C": "Horóscopo y consejos astrológicos del fabricante.",
      "D": "La firma manuscrita original del presidente del CSSP en cada caja individual."
    },
    "correctAnswer": "B",
    "explanation": "El RTCA de etiquetado y la Ley de Medicamentos salvadoreña determinan de forma rigurosa los elementos informativos indispensables en el empaque primario y secundario: DCI, concentración, lote, caducidad, registro sanitario de la DNM, vía de administración, precauciones y el precio máximo regulado (PVP fijado por ley).",
    "distractorRationale": {
      "A": "Los datos societarios de accionistas son irrelevantes para la información sanitaria del medicamento.",
      "C": "La inclusión de elementos esotéricos o publicitarios engañosos está prohibida por la normativa sanitaria.",
      "D": "El registro sanitario es una clave alfanumérica impresa, no una firma manuscrita física en millones de cajas comerciales."
    }
  },
  {
    "id": "cssp-jvpqf-19",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Regulación de Medicamentos Biológicos y Biocomparables",
    "legalBasis": "Reglamento de Productos Biológicos y Biotecnológicos de la DNM.",
    "statement": "En relación con los Medicamentos Biológicos y Productos Bioterapéuticos Similares (Biocomparables o Biosimilares), ¿cuál de las siguientes aseveraciones técnicas es correcta?",
    "options": {
      "A": "Un biocomparable se sintetiza químicamente de forma idéntica a una molécula pequeña como la aspirina.",
      "B": "Debido a la gran complejidad estructural de las macromoléculas producidas en sistemas celulares vivos y su microheterogeneidad intrínseca, un producto biocomparable no puede considerarse un \"genérico simple\"; requiere un riguroso \"ejercicio de comparabilidad\" integral (fisicoquímica, biológica in vitro, toxicología preclínica y ensayos clínicos comparativos de farmacocinética, eficacia e inmunogenicidad frente al producto de referencia).",
      "C": "Cualquier laboratorio puede comercializar un biológico sin demostrar equivalencia terapéutica ni pruebas clínicas.",
      "D": "Los medicamentos biológicos no sufren degradación térmica ni requieren cadena de frío jamás."
    },
    "correctAnswer": "B",
    "explanation": "A diferencia de los fármacos químicos de síntesis donde se obtienen copias exactas mediante química sintética, los biológicos son proteínas complejas producidas por organismos vivos. No existen \"genéricos biológicos\"; se habla de \"biocomparables\", los cuales deben demostrar similitud estrecha en calidad, seguridad, eficacia y perfil de inmunogenicidad.",
    "distractorRationale": {
      "A": "Los biológicos son proteínas gigantescas plegadas producidas biotecnológicamente, no moléculas sintetizables por síntesis química elemental.",
      "C": "Comercializar biológicos sin ejercicio de comparabilidad acreditado ante la DNM viola la Ley de Medicamentos y expone a reacciones autoinmunes graves.",
      "D": "Las proteínas biológicas son termolábiles y muy susceptibles a agregación y desnaturalización si se rompe la cadena de frío."
    }
  },
  {
    "id": "cssp-jvpqf-20",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Control y Dispensación de Estupefacientes en Hospitales",
    "legalBasis": "Reglamento para el Control de Estupefacientes, Psicotrópicos y Sustancias Agregadas de la DNM.",
    "statement": "En la farmacia hospitalaria, un médico de turno solicita Morphina 10 mg/ml ampollas para el alivio del dolor oncológico de un paciente hospitalizado. ¿Cuál es la exigencia de control de sustancias controladas que debe verificar el químico farmacéutico antes de entregar las ampollas?",
    "options": {
      "A": "Entregar las ampollas libremente por pedido verbal sin receta ni firma.",
      "B": "Exigir la receta oficial de estupefacientes (recetario oficial en triplicado emitido por la DNM) debidamente llenada con el nombre del paciente, número de expediente, dosis exacta prescrita, firma y sello del médico con número de JVPM, rebajar el stock en el Libro de Control de Estupefacientes foliado por la JVPQF y conservar los casquillos/ampollas vacías según política institucional.",
      "C": "Aceptar una orden enviada por correo electrónico sin firma ni sello.",
      "D": "Hacer que el paciente acuda personalmente a pie a la farmacia con dolor intolerable a recoger las ampollas."
    },
    "correctAnswer": "B",
    "explanation": "La morfina es un estupefaciente sujeto a la Convención Única de Estupefacientes de 1961 y regulaciones salvadoreñas de la DNM. Su dispensación exige receta oficial controlada por triplicado, verificación del prescriptor facultado, descargo contable inmediato en el libro oficial foliado y custodia bajo llave en caja de seguridad con acceso exclusivo del farmacéutico.",
    "distractorRationale": {
      "A": "Dispensar estupefacientes sin receta oficial controlada constituye el delito de tráfico ilícito de drogas sancionado con penas de prisión.",
      "C": "Las órdenes informales o digitales no autorizadas por la plataforma oficial de la DNM carecen de validez legal para estupefacientes.",
      "D": "La administración hospitalaria se realiza a través del personal de enfermería autorizado, no forzando la marcha del paciente postrado."
    }
  },
  {
    "id": "cssp-jvpqf-21",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Seguridad en Gases Medicinales y Especificaciones de Calidad",
    "legalBasis": "Norma Técnica de Gases Medicinales de la DNM y Farmacopea Oficial.",
    "statement": "En relación con el Oxígeno Medicinal gaseoso suministrado en cilindros para soporte respiratorio en centros asistenciales, ¿cuáles son las especificaciones de pureza farmacopeica y código de color reglamentario del cilindro en El Salvador?",
    "options": {
      "A": "Pureza no menor al 99.5% de $O_2$ (v/v) y el cilindro debe identificarse reglamentariamente con el color Verde (cuerpo o gollete) según la norma técnica oficial.",
      "B": "Pureza del 10% y cilindro pintado de color negro carbón.",
      "C": "Cualquier cilindro de gas propano puede llenarse con oxígeno sin desinfección ni pruebas de presión hidrostática.",
      "D": "Pureza del 50% mezclado con monóxido de carbono."
    },
    "correctAnswer": "A",
    "explanation": "El oxígeno medicinal es un medicamento regulado por la DNM que debe cumplir con una pureza analítica mínima de 99.5% según Farmacopea Oficial. Para evitar errores fatales de conexión en gases clínicos, el código de identificación cromática estandarizado para cilindros de oxígeno medicinal es el color Verde.",
    "distractorRationale": {
      "B": "Una pureza de 10% causaría anoxia mortal; el color negro carbón identifica otros gases industriales.",
      "C": "Usar tanques de gas combustible para oxígeno medicinal genera explosiones térmicas violentas y contaminación por hidrocarburos.",
      "D": "El monóxido de carbono es un gas tóxico mortal que produce asfixia química celular irreversible."
    }
  },
  {
    "id": "cssp-jvpqf-22",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Detección y Prevención de Medicamentos Falsificados o Subestándar",
    "legalBasis": "Ley de Medicamentos de El Salvador, Arts. 80 al 85 y Código Penal Art. 274.",
    "statement": "Durante una inspección técnica en una droguería, el químico farmacéutico detecta un lote de tabletas que presentan rebordes irregulares, tipografía borrosa en el blíster, ausencia de número de lote troquelado y principio activo ausente en la prueba analítica (Medicamento Falsificado). ¿Cuál es la obligación legal y sanitaria del profesional?",
    "options": {
      "A": "Vender las tabletas a mitad de precio en el mercado informal para no reportar pérdidas económicas.",
      "B": "Inmovilizar de inmediato el producto en cuarentena, levantar acta técnica detallada y notificar de forma urgente a la Dirección Nacional de Medicamentos (DNM) y a la Fiscalía General de la República (FGR) para iniciar la investigación penal correspondiente por delitos contra la salud pública.",
      "C": "Triturar el lote y guardarlo en el casillero de los empleados.",
      "D": "Ignorar el hallazgo y culpar a los transportistas."
    },
    "correctAnswer": "B",
    "explanation": "La falsificación y adulteración de medicamentos atenta directamente contra la vida colectiva y constituye un delito penal tipificado en el Código Penal salvadoreño (Art. 274) y Ley de Medicamentos. El profesional está obligado a inmovilizar cautelarmente el lote y activar la alerta ante la DNM y la FGR.",
    "distractorRationale": {
      "A": "Comercializar productos falsificados convierte al profesional en coautor del delito de comercio ilícito de fármacos.",
      "C": "Ocultar evidencia delictiva en casilleros constituye complicidad y encubrimiento punible.",
      "D": "La omisión del deber de reporte viola la lex artis farmacéutica y acarrea la revocación definitiva del carné profesional."
    }
  },
  {
    "id": "cssp-jvpqf-23",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Control de Precios de Medicamentos y Precio Máximo al Público (PVP)",
    "legalBasis": "Ley de Medicamentos de El Salvador, Arts. 56 al 60 y Unidad de Precios de la DNM.",
    "statement": "La Ley de Medicamentos de El Salvador establece un régimen de regulación económica sobre el mercado farmacéutico para garantizar la accesibilidad de la población. ¿Cómo se determina el Precio Máximo de Venta al Público (PVP) y qué sanción acarrea su incumplimiento?",
    "options": {
      "A": "Cada farmacia fija el precio que desee libremente según la cara del cliente.",
      "B": "El PVP es fijado oficialmente por la Dirección Nacional de Medicamentos (DNM) con base en una canasta de precios de referencia internacional; su comercialización por encima del precio regulado constituye una infracción muy grave sujeta a multas severas y clausura.",
      "C": "El precio es fijado por el Fondo Monetario Internacional en euros sin intervención del Estado salvadoreño.",
      "D": "Los medicamentos son siempre gratuitos en todos los establecimientos privados."
    },
    "correctAnswer": "B",
    "explanation": "La Ley de Medicamentos introdujo la regulación de precios mediante una metodología de precios de referencia de países comparadores de la región. Todo medicamento debe rotular su PVP regulado, y cobrar por encima de dicha cifra es una infracción perseguida por la DNM y la Defensoría del Consumidor.",
    "distractorRationale": {
      "A": "El mercado de medicamentos en El Salvador no opera bajo libre fijación arbitraria de precios sin tope legal.",
      "C": "La competencia de fijación de precios corresponde legalmente y con carácter soberano a la DNM salvadoreña.",
      "D": "Las farmacias privadas son comercios autorizados que venden productos, pero regulados bajo precios tope máximos."
    }
  },
  {
    "id": "cssp-jvpqf-24",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Clasificación de Retiro de Productos del Mercado (Recall)",
    "legalBasis": "Reglamento y Procedimiento de Retiro de Mercado de Productos Farmacéuticos de la DNM.",
    "statement": "La DNM ordena el retiro inmediato del mercado nacional de un lote de colirio oftálmico tras confirmarse contaminación microbiológica intrínseca con Pseudomonas aeruginosa que ya ha provocado ceguera y endoftalmitis en varios pacientes. Conforme a las directrices de Farmacovigilancia, ¿qué tipo de retiro de mercado corresponde?",
    "options": {
      "A": "Retiro de Mercado Clase I: situación en la cual existe una probabilidad razonable de que el uso o exposición al producto cause consecuencias adversas graves para la salud o la muerte.",
      "B": "Retiro de Mercado Clase III: cuando el defecto es meramente tipográfico en el código de barras y no afecta la salud.",
      "C": "Retiro Optativo sin urgencia para completarse en un plazo de 10 años.",
      "D": "No se debe retirar el producto; solo sugerir a los pacientes usar lentes oscuros."
    },
    "correctAnswer": "A",
    "explanation": "El Retiro Clase I es el de máxima prioridad y criticidad sanitaria internacional: se declara cuando un producto defectuoso o contaminado tiene alta probabilidad de provocar daños severos irreversibles o muerte. Exige cese de comercialización en 24 horas, alerta pública masiva e incautación de todas las existencias.",
    "distractorRationale": {
      "B": "La Clase III es para defectos menores de empaque que no suponen riesgo biológico directo para el paciente.",
      "C": "Los plazos de retiro Clase I son perentorios (horas o días), nunca de años.",
      "D": "Permitir que un colirio con Pseudomonas siga circulando es una negligencia criminal causante de pérdida de la visión."
    }
  },
  {
    "id": "cssp-jvpqf-25",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Publicidad de Medicamentos de Prescripción y Muestras Médicas",
    "legalBasis": "Ley de Medicamentos de El Salvador, Arts. 70 al 76 y Reglamento de Publicidad de la DNM.",
    "statement": "En relación con la publicidad y promoción de medicamentos que requieren receta médica (medicamentos éticos o de prescripción), ¿cuál es la prohibición legal taxativa impuesta por la Ley de Medicamentos?",
    "options": {
      "A": "Se permite publicitar antibióticos y psicotrópicos en carteles luminosos, radio, televisión y redes masivas para inducir al público a comprarlos.",
      "B": "Está terminantemente prohibida toda publicidad o anuncio de medicamentos de prescripción en medios de comunicación masivos dirigidos al público general; su promoción solo está autorizada hacia profesionales de la salud debidamente facultados a través de literatura científica comprobada, y las muestras médicas deben rotularse indeleblemente como \"Muestra Médica Prohibida su Venta\".",
      "C": "Se permite regalar medicamentos de prescripción en compras de comida rápida.",
      "D": "La publicidad de medicamentos no tiene ninguna restricción legal en El Salvador."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 70 de la Ley de Medicamentos prohíbe la propaganda y publicidad en medios masivos de medicamentos que requieren prescripción facultativa para evitar la automedicación peligrosa. La información sobre estos productos se circunscribe a la visita médica científica, y las muestras médicas no pueden comercializarse bajo ninguna circunstancia.",
    "distractorRationale": {
      "A": "Publicitar fármacos éticos en televisión promueve la automedicación y resistencia antimicrobiana, estando estrictamente prohibido.",
      "C": "Entregar fármacos en promociones comerciales viola las normas de dispensación farmacéutica y seguridad.",
      "D": "La DNM cuenta con una Unidad de Monitoreo de Publicidad que sanciona activamente la publicidad no autorizada."
    }
  },
  {
    "id": "cssp-jvpqf-26",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Incompatibilidades Físico-Químicas en Mezclas Intravenosas",
    "legalBasis": "Manual de Farmacia Hospitalaria y Terapia Intravenosa de la JVPQF.",
    "statement": "Al preparar mezclas intravenosas parenterales en la campana de flujo laminar, el químico farmacéutico verifica la compatibilidad de Ceftriaxona sódica en un paciente que recibe simultáneamente Solución Ringer Lactato (que contiene sales de calcio). ¿Cuál es la advertencia farmacoterapéutica crítica?",
    "options": {
      "A": "Es una mezcla perfectamente segura que puede infundirse en la misma bolsa sin problema.",
      "B": "Existe una incompatibilidad química mortal: las sales de calcio precipitan con la ceftriaxona formando cristales insolubles de ceftriaxona-calcio que pueden embolizar y causar daño fatal en microvasos de pulmones y riñones; está formalmente contraindicada su administración conjunta o por la misma línea venosa.",
      "C": "La ceftriaxona se convierte en vitamina C al contacto con el calcio.",
      "D": "El calcio neutraliza el color de la mezcla volviéndola transparente sin efecto farmacológico."
    },
    "correctAnswer": "B",
    "explanation": "La interacción física entre ceftriaxona y soluciones que contienen calcio (como Ringer Lactato o gluconato cálcico) forma un precipitado cristalino insoluble que se deposita en los lechos capilares pulmonares y renales, habiéndose documentado casos de muerte súbita neonatal y en adultos. No deben mezclarse ni pasarse por la misma vía.",
    "distractorRationale": {
      "A": "Ignorar la incompatibilidad ceftriaxona-calcio desencadena embolización masiva de microcristales letales.",
      "C": "La reacción no produce vitaminas; genera una sal insoluble peligrosa.",
      "D": "El precipitado suele ser lechoso y turbio con microcristales en suspensión, no una solución transparente inocua."
    }
  },
  {
    "id": "cssp-jvpqf-27",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Buenas Prácticas de Dispensación y Prevención de Errores por Nombres LASA",
    "legalBasis": "Guía de Buenas Prácticas de Dispensación de la JVPQF y Alerta LASA de la DNM.",
    "statement": "En la farmacia se reciben prescripciones con medicamentos cuyos nombres poseen similitud fonética u ortográfica (\"Look-Alike / Sound-Alike\" - LASA), tales como Cefotaxima vs Cefazolina, o Hidroxicina vs Hidralazina. ¿Qué estrategia técnica de seguridad farmacéutica debe implementar el regente en el almacenamiento y dispensación?",
    "options": {
      "A": "Colocar todos los medicamentos con nombres parecidos en la misma gaveta sin orden alfabético.",
      "B": "Almacenar en anaqueles separados físicamente, utilizar diferenciación tipográfica con letras mayúsculas resaltadas (\"Tall Man Letters\", ej. hidrOXIcina vs hidraLAZina), colocar alertas visuales en estantes y realizar doble cotejo independiente antes de la entrega al paciente.",
      "C": "Dispensar cualquiera de los dos indistintamente pues ambos empiezan con la misma letra.",
      "D": "Borrar los nombres comerciales de las cajas con un plumón negro."
    },
    "correctAnswer": "B",
    "explanation": "Los errores de medicación por confusión de medicamentos LASA son una causa prevalente de eventos adversos graves (ej. administrar un antihipertensivo potente como hidralazina en vez de un antihistamínico como hidroxizina). Se previene mediante el uso de letras altas (Tall Man), separación física de anaqueles y validación farmacéutica cruzada.",
    "distractorRationale": {
      "A": "Juntar medicamentos LASA en la misma gaveta multiplica el riesgo de error humano por selección equivocada.",
      "C": "Intercambiar fármacos con indicaciones y mecanismos totalmente distintos causa daño iatrogénico severo o choque.",
      "D": "Borrar los textos del envase destruye la identificación y trazabilidad del producto farmacéutico."
    }
  },
  {
    "id": "cssp-jvpqf-28",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Validación de Procesos de Esterilización: Ensayo de Punto de Burbuja",
    "legalBasis": "Reglamento RTCA 11.03.42:07 (BPM) y Farmacopea Oficial.",
    "statement": "En la manufactura de soluciones parenterales esterilizadas por filtración aséptica a través de membranas microporosas hidrofílicas de 0.22 micras, ¿cuál es el ensayo no destructivo obligatorio que debe realizarse a la membrana filtrante antes y después del lote de producción para verificar su integridad?",
    "options": {
      "A": "Prueba de degustación del líquido filtrado.",
      "B": "Ensayo de Integridad por Punto de Burbuja (Bubble Point Test) o prueba de flujo de difusión, verificando que la membrana soporte la presión mínima de burbujeo especificada sin roturas ni perforaciones.",
      "C": "Exposición del filtro a la llama directa de un mechero Bunsen hasta que se queme.",
      "D": "Pesar el filtro en una balanza de resorte de cocina."
    },
    "correctAnswer": "B",
    "explanation": "La esterilización por filtración retiene bacterias físicamente mediante poros de 0.22 µm. El ensayo del Punto de Burbuja aprovecha la tensión superficial del líquido humectante en los poros capilares: la presión de gas necesaria para vencer dicha tensión y producir una corriente continua de burbujas determina si existen poros sobredimensionados o roturas en el filtro.",
    "distractorRationale": {
      "A": "Probar soluciones parenterales estériles por degustación humana viola las normas analíticas y de bioseguridad.",
      "C": "La llama destruye la membrana polimérica impidiendo su uso y falseando cualquier prueba.",
      "D": "El peso gravimétrico no determina el diámetro micrométrico de los poros del filtro."
    }
  },
  {
    "id": "cssp-jvpqf-29",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Farmacoepidemiología y Unidad de Medida: Dosis Diaria Definida (DDD)",
    "legalBasis": "Guía de Estudios de Utilización de Medicamentos de la OMS y JVPQF.",
    "statement": "En los estudios de utilización de medicamentos y programas de optimización de antimicrobianos (PROA) a nivel hospitalario o poblacional, ¿cuál es la unidad técnica internacional de medida recomendada por la OMS para comparar el consumo global de fármacos con independencia de sus presentaciones comerciales y precios?",
    "options": {
      "A": "La cantidad total de cajas vendidas en dólares.",
      "B": "La Dosis Diaria Definida (DDD / Defined Daily Dose), definida como la dosis media diaria de mantenimiento asumida para un fármaco utilizado en su indicación principal en adultos.",
      "C": "El peso en kilogramos de todo el cartón reciclado de las cajas.",
      "D": "El número de recetas archivadas en papel periódico."
    },
    "correctAnswer": "B",
    "explanation": "La DDD es una unidad técnica de medida estadística establecida por la OMS que permite cuantificar el volumen de consumo de fármacos (expresado comúnmente en DDD por 100 estancias hospitalarias o DDD por 1,000 habitantes/día), permitiendo comparaciones objetivas de tendencias epidemiológicas de uso a lo largo del tiempo entre diferentes instituciones o países.",
    "distractorRationale": {
      "A": "El valor monetario en dólares fluctúa por inflación y tipos de cambio, no reflejando la exposición farmacológica real de la población.",
      "C": "El peso del cartón es una medida de reciclaje de residuos, ajena a la dosificación farmacológica.",
      "D": "El conteo de recetas no estandariza si una receta contenía tratamiento para 3 días o para 3 meses."
    }
  },
  {
    "id": "cssp-jvpqf-30",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Ensayos de Límites Microbianos en Productos Cosméticos e Higiénicos",
    "legalBasis": "Reglamento Técnico Centroamericano RTCA 71.03.49:08 (Productos Cosméticos. Verificación de la Calidad Microbiológica).",
    "statement": "En el control de calidad microbiológico de productos cosméticos aplicables en el área de los ojos o en la piel infantil, ¿cuáles son los patógenos específicos cuya presencia está terminantemente prohibida (ausencia total en 1 g o 1 mL de producto)?",
    "options": {
      "A": "Lactobacillus acidophilus únicamente.",
      "B": "Pseudomonas aeruginosa, Staphylococcus aureus y Candida albicans.",
      "C": "Bifidobacterium bifidum.",
      "D": "Levaduras utilizadas en la fermentación del pan."
    },
    "correctAnswer": "B",
    "explanation": "El RTCA de cosméticos prohíbe taxativamente la presencia de patógenos oportunistas en cosméticos de uso ocular o infantil: Pseudomonas aeruginosa (causante de úlceras corneales y ceguera), Staphylococcus aureus (infecciones cutáneas supurativas) y Candida albicans (candidiasis mucocutánea).",
    "distractorRationale": {
      "A": "Lactobacillus forma parte de la flora comensal no patógena habitual, no siendo el marcador crítico de contaminación.",
      "C": "Las bacterias probióticas no son el foco de exclusión de contaminantes agresivos en cosmética.",
      "D": "Saccharomyces cerevisiae no representa el patógeno ocular/cutáneo prioritario en las pruebas normativas obligatorias."
    }
  },
  {
    "id": "cssp-jvpqf-31",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Tecnovigilancia de Dispositivos Médicos y Reactivos de Diagnóstico",
    "legalBasis": "Reglamento de Tecnovigilancia de El Salvador (DNM) y Lineamientos de la JVPQF.",
    "statement": "En un hospital se detecta que un lote de catéteres intravenosos presenta defecto de manufactura con rotura espontánea de la punta plástica intravascular al momento de retirarlos en 4 pacientes. Conforme a la normativa nacional de Tecnovigilancia de la DNM, ¿cuál es la conducta que debe liderar el farmacéutico de tecnovigilancia?",
    "options": {
      "A": "Arrojar los catéteres rotos a la basura y no decir nada para evitar litigios con el proveedor.",
      "B": "Notificar de inmediato el Incidente Adverso Grave ante la Unidad de Tecnovigilancia de la DNM mediante el formato oficial, inmovilizar cautelarmente todas las unidades del lote en el hospital, solicitar al proveedor el análisis de causa raíz y emitir alerta interna para protección de los usuarios.",
      "C": "Intentar pegar las puntas plásticas de los catéteres con pegamento industrial y reutilizarlos.",
      "D": "Exigir al paciente que compre su propio pegamento para reconstruir el catéter en su vena."
    },
    "correctAnswer": "B",
    "explanation": "La tecnovigilancia vigila la seguridad de los dispositivos médicos en el mercado post-comercialización. Un incidente con potencial de daño severo (como embolia de cuerpo extraño por rotura de catéter) exige reporte perentorio a la DNM, cuarentena institucional de las existencias y retiro preventivo de mercado coordinado por la autoridad sanitaria.",
    "distractorRationale": {
      "A": "Omitir la notificación de un fallo recurrente de un dispositivo médico expone a más pacientes a embolias intravasculares.",
      "C": "Reutilizar o reparar catéteres con adhesivos cáusticos es una falta grave que provoca septicemia e intoxicación química.",
      "D": "Cargar la responsabilidad al usuario hospitalizado contradice los principios éticos y legales del sistema de salud."
    }
  },
  {
    "id": "cssp-jvpqf-32",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Validación de Métodos Analíticos según ICH Q2(R1)",
    "legalBasis": "Guía de Validación de Métodos Analíticos de la DNM y Guías Internacionales ICH Q2(R1).",
    "statement": "Al validar un método analítico por HPLC para la cuantificación del principio activo en un producto terminado farmacéutico, ¿cuál es el parámetro que evalúa el grado de concordancia entre los resultados analíticos individuales al aplicar repetidamente el método sobre múltiples tomas de una muestra homogénea bajo condiciones prescritas?",
    "options": {
      "A": "Linealidad matemática.",
      "B": "Precisión (evaluada a través de la repetibilidad, precisión intermedia y reproducibilidad, expresada como desviación estándar relativa o coeficiente de variación).",
      "C": "Robustez frente al color del operador.",
      "D": "Rango de precios de venta."
    },
    "correctAnswer": "B",
    "explanation": "La Guía ICH Q2 define la Precisión como la cercanía del acuerdo (grado de dispersión) entre una serie de mediciones obtenidas a partir de múltiples muestreos de la misma muestra homogénea. Se mide mediante el Coeficiente de Variación (% CV / RSD) en condiciones de repetibilidad y precisión intermedia.",
    "distractorRationale": {
      "A": "La linealidad mide la capacidad del método analítico para obtener resultados directamente proporcionales a la concentración del analito.",
      "C": "La robustez evalúa la resistencia del método a pequeñas variaciones operativas deliberadas (pH, temperatura, flujo), independiente de factores subjetivos.",
      "D": "El aspecto económico no forma parte de los parámetros de validación fisicoquímica de la ICH."
    }
  },
  {
    "id": "cssp-jvpqf-33",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Buenas Prácticas de Distribución y Transporte de Fármacos Sensibles",
    "legalBasis": "Reglamento Técnico Centroamericano RTCA 11.03.64:11 (Productos Farmacéuticos. Buenas Prácticas de Distribución y Transporte).",
    "statement": "Durante el transporte de medicamentos termolábiles desde la droguería hacia las farmacias comunitarias en diferentes departamentos del país bajo el clima cálido de El Salvador, ¿cuál es el requisito técnico indispensable para asegurar que no se rompa la cadena de frío?",
    "options": {
      "A": "Transportar las cajas de insulina sueltas en el asiento de atrás de una motocicleta al mediodía sin aislamiento térmico.",
      "B": "Utilizar contenedores térmicos validados (hieleras con aislamiento de poliuretano y acumuladores de frío calibrados) o vehículos con cabina refrigerada activa, equipados con registradores de datos de temperatura continuos (Dataloggers) que registren la temperatura durante todo el trayecto entre +2 °C y +8 °C.",
      "C": "Colocar bolsas de hielo común picado derramando agua sobre las cajas de cartón de los medicamentos.",
      "D": "Abrir las cajas de medicamentos para que reciban la brisa de la carretera."
    },
    "correctAnswer": "B",
    "explanation": "Las Buenas Prácticas de Transporte exigen sistemas térmicos calificados y monitoreo continuo de temperatura mediante registradores de datos (dataloggers). El uso de hielo directo húmedo arruina el empaque secundario y congela el producto en contacto, mientras que transportar sin protección térmica destruye la potencia del biológico.",
    "distractorRationale": {
      "A": "La exposición de la insulina a temperaturas de 35-40 °C en el transporte degrada los puentes disulfuro proteicos anulando su efecto hipoglucemiante.",
      "C": "El agua derretida destruye la integridad de las cajas de cartón y borra la rotulación de lote y caducidad.",
      "D": "La radiación solar y el polvo contaminan los viales y alteran la estabilidad del producto farmacéutico."
    }
  },
  {
    "id": "cssp-jvpqf-34",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Farmacia Clínica: Monitorización Terapéutica de Fármacos (TDM)",
    "legalBasis": "Manual de Farmacia Clínica y Terapéutica Individualizada de la JVPQF.",
    "statement": "En la farmacoterapia con Vancomicina intravenosa para tratar una infección grave por Staphylococcus aureus resistente a la meticilina (SARM), ¿cuál es el parámetro de monitorización terapéutica de niveles plasmáticos (TDM) considerado estándar para guiar la dosificación y prevenir nefrotoxicidad?",
    "options": {
      "A": "Medir el nivel de glucosa en el pelo.",
      "B": "Determinar el nivel valle plasmático (concentración mínima o \"trough level\") tomado justo 30 minutos antes de la siguiente dosis, o idealmente el área bajo la curva sobre la concentración inhibitoria mínima ($AUC_{24}/CIM \\geq 400 - 600$).",
      "C": "Medir el nivel pico inmediatamente a los 30 segundos de haber iniciado la infusión.",
      "D": "No se requiere monitorizar niveles plasmáticos porque la vancomicina nunca causa daño renal."
    },
    "correctAnswer": "B",
    "explanation": "La vancomicina tiene potencial nefrotóxico dependiente de la concentración. El estándar internacional (guías ASHP/IDSA) recomienda mantener niveles valle entre 15 y 20 µg/mL para infecciones graves o una relación $AUC_{24}/CIM$ de 400 a 600 para maximizar la eficacia bactericida minimizando la lesión tubular renal aguda.",
    "distractorRationale": {
      "A": "El pelo no refleja la concentración sérica activa en tiempo real de antibióticos hidrofílicos.",
      "C": "El nivel pico inmediato solo mide la fase de distribución rápida y no predice la eficacia ni toxicidad acumulativa.",
      "D": "La vancomicina es un fármaco con nefrotoxicidad bien documentada que exige ajuste por aclaramiento de creatinina."
    }
  },
  {
    "id": "cssp-jvpqf-35",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Inactivación y Desinfección en la Industria Farmacéutica",
    "legalBasis": "Reglamento RTCA 11.03.42:07 (BPM) y Farmacopea USP <1072>.",
    "statement": "Para prevenir la aparición de biopelículas bacterianas y microorganismos resistentes a desinfectantes en las superficies de las áreas de manufactura farmacéutica Grado B y C, ¿cuál es la estrategia técnica de rotación de desinfectantes normativamente exigida?",
    "options": {
      "A": "Usar exclusivamente el mismo detergente aromático todos los días durante 20 años consecutivos.",
      "B": "Implementar un programa validado de rotación de al menos dos agentes desinfectantes con mecanismos de acción diferentes (por ejemplo, un compuesto de amonio cuaternario o fenol alternado periódicamente con un agente esporicida como peróxido de hidrógeno o ácido peracético).",
      "C": "Limpiar únicamente con agua de lluvia estancada.",
      "D": "Barrer en seco con escobas de paja para levantar el polvo hacia los filtros de aire."
    },
    "correctAnswer": "B",
    "explanation": "El uso continuado de un único agente desinfectante favorece la selección de cepas bacterianas resistentes y esporas fúngicas persistentes en las salas limpias. La Farmacopea USP <1072> y las BPM exigen la rotación programada de desinfectantes de amplio espectro combinados con un agente esporicida periódico validado.",
    "distractorRationale": {
      "A": "El uso invariable de un solo compuesto químico induce resistencia microbiana y tolerancia cruzada en biopelículas.",
      "C": "El agua no tratada es un foco masivo de contaminación por Pseudomonas y coliformes.",
      "D": "Barrer en seco genera aerosoles de partículas que saturan los filtros HEPA y contaminan las zonas limpias."
    }
  },
  {
    "id": "cssp-jvpqf-36",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Manejo de Sustancias Precursoras de Drogas y Ley Reguladora",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas de El Salvador y Control de Precursores Químicos de la DNM.",
    "statement": "Un laboratorio químico o distribuidora maneja sustancias químicas catalogadas como Precursores Químicos y Sustancias Químicas Esenciales (como Ácido Sulfúrico, Ácido Clorhídrico, Acetona, Pseudoefedrina o Permanganato de Potasio). ¿Cuál es la exigencia de fiscalización administrativa ante el Estado salvadoreño?",
    "options": {
      "A": "Vender libremente a cualquier persona particular en efectivo sin solicitar identificación ni registro.",
      "B": "Estar inscrito en el Registro Nacional de Precursores Químicos de la DNM, llevar libros foliados de movimientos de inventario con balance mensual de entradas y salidas justificadas, y exigir a los compradores la licencia de usuario final calificado para prevenir el desvío ilícito hacia la producción de narcóticos.",
      "C": "Tirar los excedentes al río para no tener que declararlos en el inventario.",
      "D": "Comercializarlos exclusivamente en puestos informales callejeros."
    },
    "correctAnswer": "B",
    "explanation": "Los precursores y sustancias químicas esenciales son susceptibles de desvío hacia la manufactura clandestina de cocaína, heroína o metanfetaminas. La legislación salvadoreña impone controles rigurosos de trazabilidad, cuotas anuales autorizadas por la DNM y reporte periódico de existencias y transacciones comerciales.",
    "distractorRationale": {
      "A": "La venta clandestina o sin verificación de usuario final calificado constituye delito de facilitación de precursores penado con prisión.",
      "C": "Deshacerse de precursores en fuentes hídricas constituye delito de contaminación ambiental y desobediencia a la fiscalización de narcóticos.",
      "D": "Está prohibida la comercialización informal de precursores químicos sujetos a fiscalización internacional."
    }
  },
  {
    "id": "cssp-jvpqf-37",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Farmacología Molecular: Fármacos de Estrecho Rango Terapéutico (Litio)",
    "legalBasis": "Guía Clínica de Terapéutica Farmacológica del Trastorno Bipolar de la JVPQF.",
    "statement": "En un paciente con Trastorno Bipolar tratado con Carbonato de Litio, ¿cuál es el rango plasmático terapéutico estrecho (litemia) recomendado en fase de mantenimiento y a qué nivel sérico se desencadenan manifestaciones de intoxicación grave?",
    "options": {
      "A": "Rango terapéutico de 50 a 100 mEq/L; intoxicación a partir de 500 mEq/L.",
      "B": "Rango terapéutico de 0.6 a 1.2 mEq/L; concentraciones superiores a 1.5 - 2.0 mEq/L desencadenan toxicidad severa (ataxia, temblores gruesos, confusión, convulsiones y daño renal permanente).",
      "C": "Rango terapéutico de 0.0001 a 0.0002 mEq/L.",
      "D": "El litio no tiene toxicidad independientemente de la dosis ingerida."
    },
    "correctAnswer": "B",
    "explanation": "El litio es el prototipo de fármaco con estrecho índice terapéutico: el nivel deseado en mantenimiento oscila entre 0.6 y 1.0 (o hasta 1.2 mEq/L en manía aguda). Por encima de 1.5 mEq/L aparecen signos precoces de intoxicación y concentraciones > 2.0-2.5 mEq/L ponen en riesgo la vida, requiriendo en ocasiones hemodiálisis de urgencia.",
    "distractorRationale": {
      "A": "Valores de 50 mEq/L son incompatibles con la vida biológica por toxicidad miocárdica y encefalopatía mortal.",
      "C": "Niveles tan insignificantes carecen de toda eficacia clínica eutimizante sobre la neurotransmisión cerebral.",
      "D": "El litio presenta una de las toxicidades orgánicas más severas por deshidratación o interacciones con diuréticos/AINEs."
    }
  },
  {
    "id": "cssp-jvpqf-38",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Ensayos de Pirogenicidad y Endotoxinas Bacterianas (LAL)",
    "legalBasis": "Norma de Farmacopea Oficial y Monografía de Ensayo de Endotoxinas Bacterianas USP <85>.",
    "statement": "Para verificar la ausencia de endotoxinas bacterianas pirogénicas (lipopolisacárido de membrana de bacterias Gram negativas) en el agua para inyección (WFI) y productos estériles parenterales, ¿cuál es el ensayo analítico in vitro estandarizado en la industria farmacéutica?",
    "options": {
      "A": "Ensayo con Lisado de Amebocitos de Limulus (LAL / Limulus Amebocyte Lysate) por método de coagulación en gel o método turbidimétrico/cromogénico.",
      "B": "Hervir el agua en una cafetera eléctrica durante 1 minuto.",
      "C": "Prueba de orina en tira reactiva de embarazo.",
      "D": "Ensayo de sedimentación en embudo de vidrio común."
    },
    "correctAnswer": "A",
    "explanation": "El ensayo LAL (USP <85>) utiliza un extracto de amebocitos del cangrejo herradura (Limulus polyphemus) que reacciona específicamente con endotoxinas bacterianas formando un gel coagulado o viraje cromogénico proporcional a la concentración pirogénica, sustituyendo con alta sensibilidad el antiguo test en conejos.",
    "distractorRationale": {
      "B": "Hervir agua no destruye las endotoxinas bacterianas ya que son moléculas termoestables muy resistentes al calor convencional.",
      "C": "La tira reactiva de embarazo detecta gonadotropina coriónica humana ($hCG$), inerte frente a endotoxinas bacterianas.",
      "D": "La sedimentación no detecta moléculas solubles nanométricas de lipopolisacárido."
    }
  },
  {
    "id": "cssp-jvpqf-39",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Buenas Prácticas de Dispensación y Notificación de Errores al Prescriptor",
    "legalBasis": "Código de Salud Art. 102 y Manual de Buenas Prácticas de Dispensación de la JVPQF.",
    "statement": "En la farmacia comunitaria se presenta una receta médica que prescribe: \"Digoxina 2.5 mg vía oral cada 8 horas por 30 días\" para un adulto mayor con fibrilación auricular. El químico farmacéutico detecta inmediatamente que la dosis prescrita es diez veces superior a la dosis terapéutica estándar (0.25 mg/día), lo cual causaría una intoxicación digitálica letal. ¿Cuál es la conducta ético-legal mandatoria?",
    "options": {
      "A": "Dispensar las tabletas tal como están prescritas y decirle al cliente que se tome todo de una vez.",
      "B": "Retener la dispensación del fármaco, comunicarse de manera profesional y directa con el médico prescriptor para advertirle del presunto error de dosificación o sobredosis accidental, y coordinar la corrección escrita formal de la receta antes de realizar la entrega segura al paciente.",
      "C": "Romper la receta frente al cliente e insultar al médico en voz alta en la farmacia.",
      "D": "Venderle veneno para roedores en su lugar sin decir nada."
    },
    "correctAnswer": "B",
    "explanation": "El farmacéutico es el último filtro de seguridad activo en la cadena farmacoterapéutica. Ante una prescripción errónea con peligro de muerte evidente, el profesional tiene la obligación legal y deontológica de no dispensar, contactar al médico, aclarar la prescripción y garantizar la seguridad del paciente.",
    "distractorRationale": {
      "A": "Dispensar 2.5 mg de digoxina cada 8 horas inducirá paro cardíaco por fibrilación ventricular; el farmacéutico respondería por homicidio culposo.",
      "C": "La interprofesionalidad exige comunicación formal y respetuosa para resolver discrepancias en beneficio del paciente.",
      "D": "Entregar sustancias letales de forma engañosa constituye homicidio agravado doloso."
    }
  },
  {
    "id": "cssp-jvpqf-40",
    "juntaId": "jvpqf",
    "juntaName": "Junta de Vigilancia de la Profesión Químico-Farmacéutica",
    "area": "Régimen Disciplinario, Sanciones y Deontología Profesional",
    "legalBasis": "Código de Salud de El Salvador, Arts. 60 al 65 y Reglamento Interno del CSSP/JVPQF.",
    "statement": "Un profesional Químico Farmacéutico alquila su título profesional y firma como regente en cinco establecimientos farmacéuticos distintos simultáneamente sin asistir físicamente a ninguno de ellos (\"Regencia Simulada o Alquiler de Carné\"). Conforme al Código de Salud y el régimen disciplinario de la JVPQF/CSSP, ¿cuáles son las consecuencias legales y administrativas?",
    "options": {
      "A": "Recibir un premio de productividad económica por parte de la Junta de Vigilancia.",
      "B": "Instrucción de procedimiento administrativo disciplinario sancionatorio por parte de la JVPQF, imposición de multa pecuniaria y suspensión temporal o definitiva del ejercicio profesional farmacéutico por ejercicio deshonesto y simulación técnica, sin perjuicio de la responsabilidad penal correspondiente.",
      "C": "Es una práctica plenamente legal fomentada por el Ministerio de Hacienda.",
      "D": "La JVPQF carece de potestad para supervisar la presencia física de los regentes."
    },
    "correctAnswer": "B",
    "explanation": "El alquiler de firmas y la regencia ficticia violan el principio de responsabilidad técnica personal establecido en el Código de Salud y la Ley de Medicamentos. La JVPQF sanciona severamente la simulación profesional con multas y suspensión del carné profesional, además de ordenar la clausura de los locales infractores.",
    "distractorRationale": {
      "A": "La simulación fraudulenta de regencia es una infracción gravísima contra la salud pública, no un acto meritorio.",
      "C": "La ley prohíbe taxativamente ostentar regencias simultáneas sin compatibilidad horaria real y presencia efectiva.",
      "D": "El Código de Salud faculta expresamente a la JVPQF para realizar inspecciones in situ y sancionar la ausencia del regente."
    }
  },
  {
    "id": "cssp-jvpps-01",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Ética Profesional y Deber Legal de Reporte (Ley Crecer Juntos)",
    "legalBasis": "Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia, Art. 16.",
    "statement": "Durante una sesión de psicoterapia infantil, una niña de 8 años revela indicios consistentes de abuso sexual por parte de un familiar cercano. Respecto al secreto profesional y el deber de denuncia en El Salvador, ¿cuál es la obligación legal y ética del psicólogo clínico?",
    "options": {
      "A": "Guardar secreto profesional absoluto para preservar la alianza terapéutica con la familia, sin dar aviso a ninguna institución.",
      "B": "Interponer de manera inmediata la denuncia ante la Fiscalía General de la República (FGR), Policía Nacional Civil (PNC) o Junta de Protección de la Niñez, ya que la protección de la integridad de la infancia prevalece sobre el secreto profesional.",
      "C": "Confrontar a solas al presunto agresor en su consultorio para pedirle explicaciones.",
      "D": "Esperar a que la niña cumpla la mayoría de edad para que ella decida si denunciar."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 16 de la Ley Crecer Juntos y el Código de Ética de la JVPPS establecen el deber imperativo de todo profesional de la salud o educación de denunciar de inmediato cualquier indicio de violencia o abuso contra niños, niñas y adolescentes. El secreto profesional cede ante el deber superior de salvaguardar la vida e integridad física.",
    "distractorRationale": {
      "A": "Omitir la denuncia de delitos contra menores constituye el delito de encubrimiento u omisión de socorro.",
      "C": "Confrontar al agresor pone en grave riesgo inminente la vida de la niña y contamina la evidencia investigativa.",
      "D": "La protección debe ser inmediata e integral para detener la vulneración de derechos."
    }
  },
  {
    "id": "cssp-jvpps-02",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Límites del Secreto Profesional ante Riesgo Suicida Inminente",
    "legalBasis": "Código de Ética del Profesional de la Psicología de El Salvador y Principio Bioético de Beneficencia.",
    "statement": "Un paciente adulto de 26 años manifiesta en consulta psicológica que ha adquirido medicamentos letales y redactado una carta de despedida, revelando un plan suicida estructurado e inminente para esa misma noche. ¿Cuál es el proceder ético y deontológico exigido al psicólogo clínico ante la tensión entre confidencialidad y preservación de la vida?",
    "options": {
      "A": "Mantener estricto secreto profesional sin avisar a nadie, confiando en que el encuadre terapéutico por sí solo evitará el suicidio.",
      "B": "Activar de inmediato el protocolo de emergencia rompiendo la confidencialidad en la medida estrictamente necesaria para contactar a la red de apoyo familiar directa y coordinar el traslado a un centro de urgencias psiquiátricas, priorizando la vida e integridad del paciente.",
      "C": "Retener al paciente encerrado con llave en el consultorio privado hasta que prometa no quitarse la vida.",
      "D": "Terminar la relación terapéutica de inmediato para evitar verse involucrado en problemas legales."
    },
    "correctAnswer": "B",
    "explanation": "El Código de Ética de la JVPPS y los principios de bioética clínica consagran que la preservación de la vida humana constituye un bien jurídico supremo que prevalece sobre el secreto profesional. Ante riesgo suicida inminente con plan estructurado, el terapeuta está éticamente obligado a quebrantar el secreto, limitándose a comunicar el peligro a los familiares y servicios de salud para salvaguardar al consultante.",
    "distractorRationale": {
      "A": "La inacción amparada en un sigilo absoluto ante riesgo suicida letal equivale a abandono de paciente y negligencia bioética grave.",
      "C": "El confinamiento contra la voluntad del paciente en un consultorio particular constituye privación de libertad ilegal.",
      "D": "El abandono intempestivo de un paciente en crisis suicida aguda agrava el desamparo y vulnera el deber de auxilio y responsabilidad profesional."
    }
  },
  {
    "id": "cssp-jvpps-03",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Consentimiento y Asentimiento Informado en Atención de Menores",
    "legalBasis": "Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia, Arts. 61 al 64.",
    "statement": "Los padres de un adolescente de 15 años acuden solicitando psicoterapia para su hijo por síntomas depresivos. En el marco de la Ley Crecer Juntos y la normativa de la JVPPS, ¿cómo debe estructurarse adecuadamente el proceso de consentimiento y asentimiento informado?",
    "options": {
      "A": "Basta únicamente con la firma de los padres, ya que las personas menores de edad carecen por completo de voz o capacidad de opinión en su tratamiento.",
      "B": "Se requiere el consentimiento informado firmado por quienes ejerzan la responsabilidad parental o tutela legal, junto con el proceso de Asentimiento Informado del adolescente, explicándole con lenguaje adaptado a su madurez los objetivos terapéuticos y los límites de la confidencialidad.",
      "C": "El adolescente puede iniciar psicoterapia sin conocimiento de sus padres ni tutores en todos los casos privados ambulatorios.",
      "D": "No se redacta ningún documento formal porque la psicología no utiliza procedimientos quirúrgicos."
    },
    "correctAnswer": "B",
    "explanation": "La Ley Crecer Juntos reconoce la autonomía progresiva de niñas, niños y adolescentes (Art. 61-64). Si bien legalmente se requiere el consentimiento de los progenitores o representantes legales, el adolescente tiene el derecho humano inalienable de ser escuchado y brindar su asentimiento informado, conociendo el marco terapéutico y sus garantías de confidencialidad.",
    "distractorRationale": {
      "A": "Ignorar la opinión y acuerdo del adolescente vulnera el principio de autonomía progresiva y destruye la adherencia al proceso terapéutico.",
      "C": "En el ejercicio privado ambulatorio general no se puede tratar a un menor de edad a espaldas de sus representantes legales salvo orden judicial o de protección.",
      "D": "El consentimiento informado es un imperativo ético y legal en toda intervención en salud mental, no exclusivo de áreas quirúrgicas."
    }
  },
  {
    "id": "cssp-jvpps-04",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Evaluación Psicológica Forense y Rigor Metodológico",
    "legalBasis": "Código Procesal Civil y Mercantil, Art. 375; y Código de Deontología de la JVPPS.",
    "statement": "Un profesional de la psicología es contratado por un bufete de abogados para emitir un peritaje sobre la idoneidad parental de una madre en un juicio de divorcio contencioso. El psicólogo entrevista únicamente al padre durante 45 minutos y emite un informe pericial formal catalogando a la madre como \"personalidad limítrofe no apta para la custodia\", sin haberla evaluado jamás en persona. ¿Qué valoración deontológica y legal merece esta actuación ante la JVPPS?",
    "options": {
      "A": "Constituye una falta grave al Código de Ética y a la lex artis psicológica, pues está terminantemente prohibido emitir juicios clínicos diagnósticos periciales sobre personas sin evaluación clínica directa y sin sustento de instrumentos psicométricos baremados y validados.",
      "B": "Es una práctica plenamente válida amparada en la libertad pericial del profesional.",
      "C": "Es válida siempre que el padre haya pagado los honorarios profesionales correspondientes y firmado un recibo.",
      "D": "La JVPPS no tiene competencia para vigilar informes psicológicos periciales emitidos en sede judicial."
    },
    "correctAnswer": "A",
    "explanation": "El Código de Deontología de la JVPPS y los estándares forenses prohíben categóricamente emitir dictámenes diagnósticos concluyentes sobre personas a quienes no se ha evaluado de forma directa mediante la batería psicométrica adecuada. Elaborar perfiles psicológicos basados únicamente en testimonios de terceros viola la objetividad y genera nulidad procesal y sanciones disciplinarias.",
    "distractorRationale": {
      "B": "La pericia exige rigor técnico-científico; diagnosticar a un individuo sin evaluación directa viola flagrantemente la metodología pericial.",
      "C": "El cobro de honorarios no legitima la violación de las normas deontológicas y metodológicas básicas de la psicología forense.",
      "D": "La JVPPS tiene jurisdicción legal y disciplinaria sobre todo ejercicio profesional de la psicología en El Salvador, inclusive en el ámbito pericial."
    }
  },
  {
    "id": "cssp-jvpps-05",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Relaciones Duales y Conflictos de Interés en Psicoterapia",
    "legalBasis": "Código de Ética del Profesional de la Psicología de El Salvador.",
    "statement": "Un psicólogo clínico en práctica privada es solicitado por su hermana biológica para que le brinde sesiones formales de psicoterapia individual por problemas conyugales severos. Conforme al Código de Ética de la JVPPS, ¿cuál es la conducta profesional éticamente mandatoria?",
    "options": {
      "A": "Aceptar el caso y cobrarle una tarifa preferencial familiar, aprovechando que ya conoce íntimamente toda su historia de vida.",
      "B": "Rechazar la atención psicoterapéutica directa debido a la existencia de una relación dual (conflicto de interés y pérdida de neutralidad/objetividad clínica), y referirla de forma responsable a otro colega psicólogo competente.",
      "C": "Aceptar el caso solo si las sesiones se realizan en el domicilio de los padres.",
      "D": "Atenderla únicamente administrándole pruebas proyectivas sin emitir interpretaciones verbales."
    },
    "correctAnswer": "B",
    "explanation": "El Código de Ética de la JVPPS prohíbe el establecimiento de relaciones duales o múltiples que puedan menoscabar el juicio profesional objetivo, la imparcialidad o la efectividad terapéutica. Tratar a familiares directos, amigos íntimos o subordinados vicia la neutralidad clínica necesaria para el proceso psicoterapéutico.",
    "distractorRationale": {
      "A": "El vínculo familiar preexistente contamina la neutralidad terapéutica y genera contratransferencia perjudicial para el paciente.",
      "C": "El lugar donde se desarrolle la consulta no elimina el impedimento bioético de la relación dual.",
      "D": "La aplicación e interpretación de reactivos psicométricos también exige estricta imparcialidad y objetividad científica."
    }
  },
  {
    "id": "cssp-jvpps-06",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Marco Legal del Ejercicio Profesional y Código de Salud",
    "legalBasis": "Ley del Ejercicio de la Profesión en Psicología de El Salvador y Art. 68 de la Constitución.",
    "statement": "Conforme a la legislación salvadoreña y la normativa del CSSP/JVPPS, ¿cuál es el requisito legal obligatorio e indispensable para que una persona pueda ejercer legalmente la psicología clínica y abrir un consultorio en el territorio nacional?",
    "options": {
      "A": "Haber leído libros de autoayuda y tener carisma personal para escuchar problemas.",
      "B": "Poseer título universitario de Licenciatura o Doctorado en Psicología debidamente registrado en el MINED, estar inscrito y ostentar número de acreditación profesional vigente ante la JVPPS (CSSP) y cumplir con la solvencia deontológica respectiva.",
      "C": "Contar con un diploma de un curso de astrología o programación neurolingüística de un fin de semana.",
      "D": "Ser mayor de 40 años sin necesidad de formación académica formal."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 68 de la Constitución y la Ley del Ejercicio de la Psicología regulan el ejercicio técnico y profesional de la psicología. Se requiere grado universitario formal en psicología, incorporación, registro ministerial y acreditación con carné oficial expedido por la JVPPS para ejercer válidamente la profesión en El Salvador.",
    "distractorRationale": {
      "A": "El interés personal no faculta para el ejercicio sanitario ni clínico; hacerlo sin título constituye usurpación de funciones.",
      "C": "Los talleres no acreditados no otorgan título profesional ni habilitación legal ante el CSSP.",
      "D": "La edad cronológica carece de valor jurídico habilitante en ausencia de formación académica superior de grado."
    }
  },
  {
    "id": "cssp-jvpps-07",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Doctrina Tarasoff: Deber de Advertir y Proteger a Terceros",
    "legalBasis": "Doctrina Jurisprudencial Tarasoff y Código Penal de El Salvador, Arts. 146 y 175.",
    "statement": "En una sesión psicoterapéutica individual, un paciente adulto con diagnóstico de trastorno de personalidad antisocial revela de forma explícita, detallada y verosímil que ha comprado un arma de fuego y que esa misma noche asesinará a su expareja en su domicilio, identificándola con nombre, apellido y dirección exacta. ¿Cuál es el deber deontológico y legal del psicólogo ante esta amenaza inminente?",
    "options": {
      "A": "Guardar silencio incondicional amparado en el secreto profesional para que el paciente no pierda la confianza en la terapia.",
      "B": "Activar el deber de advertir y proteger (Doctrina Tarasoff): quebrantar la confidencialidad en la medida estrictamente necesaria para advertir de inmediato a la víctima identificada en peligro inminente y dar aviso urgente a las autoridades policiales (PNC) o Fiscalía (FGR) para salvaguardar la vida humana.",
      "C": "Esperar a que ocurra el homicidio para comprobar si la amenaza del paciente era cierta o fantasiosa.",
      "D": "Proponerle al paciente aumentar la tarifa de las sesiones a cambio de no avisar a nadie."
    },
    "correctAnswer": "B",
    "explanation": "El deber de advertir y proteger a terceros identificables ante amenazas letales directas y verosímiles es una excepción universal y legal al secreto profesional (fundamentada en la histórica doctrina Tarasoff y reconocida por la bioética y el Código Penal salvadoreño). El derecho a la vida de un tercero prevalece sobre el sigilo profesional.",
    "distractorRationale": {
      "A": "El secreto profesional no es un escudo de impunidad para permitir la consumación de homicidios anunciados; su omisión acarrea responsabilidad penal por encubrimiento.",
      "C": "La inacción voluntaria ante un peligro letal inminente conocido constituye complicidad criminal por omisión.",
      "D": "Lucrarse u obtener ventajas económicas indebidas es un delito de extorsión y una falta deontológica gravísima."
    }
  },
  {
    "id": "cssp-jvpps-08",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Incompatibilidad Ética entre Roles Clínicos y Forenses",
    "legalBasis": "Código de Ética de la JVPPS y Guías de Actuación en Psicología Forense.",
    "statement": "Un psicólogo clínico atiende en psicoterapia individual a una paciente durante 2 años por un cuadro de depresión. Posteriormente, la paciente entabla una demanda de pensión y custodia familiar y solicita a su terapeuta tratante que actúe como Perito Forense Imparcial y emita un dictamen pericial sobre la idoneidad parental de su cónyuge. Conforme a las normas deontológicas de la JVPPS, ¿cuál es la conducta correcta?",
    "options": {
      "A": "Aceptar actuar como perito forense imparcial y cobrar el doble de honorarios a ambas partes.",
      "B": "Rechazar la función pericial por existir un conflicto de roles insuperable: el rol del terapeuta clínico (basado en la alianza, empatía y beneficencia del consultante) es éticamente incompatible con el rol del perito forense (que exige estricta neutralidad, objetividad científica y búsqueda de la verdad para el tribunal); solo puede comparecer como testigo de hecho aportando el historial clínico si es requerido por el juez.",
      "C": "Emitir un informe pericial destruyendo la imagen del cónyuge sin haberlo evaluado jamás.",
      "D": "Obligar al cónyuge a iniciar terapia con el mismo psicólogo para resolver el juicio en consulta privada."
    },
    "correctAnswer": "B",
    "explanation": "Existe una incompatibilidad bioética y metodológica estructural entre el rol terapéutico clínico y el pericial forense. El terapeuta tratante tiene un deber de lealtad y alianza hacia su paciente que compromete la imparcialidad que la justicia exige al perito forense. Debe declinar el peritaje y actuar únicamente como testigo técnico aportando la información clínica objetiva documentada.",
    "distractorRationale": {
      "A": "Asumir ambos roles contamina el proceso judicial y vicia de nulidad el peritaje por evidente falta de objetividad.",
      "C": "Dictaminar sobre terceros no evaluados clínicamente es una infracción gravísima sancionada con suspensión por la JVPPS.",
      "D": "Forzar tratamientos a contrapartes procesales viola la autonomía y genera relaciones duales viciadas."
    }
  },
  {
    "id": "cssp-jvpps-09",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Custodia y Manejo Ético de Materiales Psicométricos",
    "legalBasis": "Código de Ética de la JVPPS y Estándares Internacionales de Evaluación Educativa y Psicológica (AERA/APA).",
    "statement": "En el marco de un juicio laboral, el abogado defensor de una empresa exige al psicólogo evaluador que le entregue una copia fotostática de las láminas del Test de Rorschach, los ítems del MMPI-2 y las claves oficiales de corrección para \"revisarlas en su despacho\". ¿Cuál es la respuesta profesional y legal obligatoria del psicólogo?",
    "options": {
      "A": "Entregar copias de todos los cuadernillos de preguntas, claves de respuestas y baremos al abogado de inmediato.",
      "B": "Negarse a entregar los reactivos, protocolos originales con claves y materiales protegidos de los tests a personas no facultadas, explicando que la ley y el código ético obligan a salvaguardar la seguridad e integridad de los instrumentos psicométricos (protección de derechos de autor y prevención de invalidación social del test), ofreciendo en su lugar remitir el informe psicológico pericial o remitir los datos brutos únicamente a otro perito psicólogo habilitado por el juzgado.",
      "C": "Publicar las claves de corrección del test en internet para que el público las conozca.",
      "D": "Vender las láminas del test al mejor postor."
    },
    "correctAnswer": "B",
    "explanation": "El psicólogo tiene la obligación legal y ética indelegable de proteger la seguridad de los reactivos psicológicos y el secreto técnico de los tests. Revelar preguntas, láminas o claves a legos o partes procesales invalida la utilidad psicométrica futura del instrumento y viola los derechos de propiedad intelectual. La información solo puede compartirse con peritos calificados.",
    "distractorRationale": {
      "A": "Entregar protocolos con claves a personas no psicólogas destruye la validez del instrumento y es una falta sancionable por la JVPPS.",
      "C": "Difundir claves de evaluación en redes invalida los instrumentos diagnósticos a nivel nacional.",
      "D": "El comercio no autorizado de pruebas psicológicas constituye infracción ética y legal a las normas de distribución editorial."
    }
  },
  {
    "id": "cssp-jvpps-10",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Abordaje de la Violencia contra las Mujeres (Ley LEIV)",
    "legalBasis": "Ley Especial Integral para una Vida Libre de Violencia para las Mujeres (LEIV), Arts. 9 al 15 y 26.",
    "statement": "Una mujer asiste a consulta psicológica privada presentando crisis de angustia y relata que su cónyuge controla sus finanzas, le prohíbe trabajar, la encierra en la casa y la amenaza constantemente de muerte con un puñal (Violencia psicológica, económica y física severa). En el marco de la Ley LEIV y la deontología de la JVPPS, ¿cuál es el plan de intervención prioritario?",
    "options": {
      "A": "Indicar a la mujer que debe ser más sumisa y comprensiva con su agresor para no provocarlo.",
      "B": "Elaborar un plan de seguridad de emergencia inmediato con la consultante, identificar redes de apoyo familiares seguras, brindar contención emocional no revictimizante y orientarla de forma urgente para la solicitud de medidas cautelares de protección en el Juzgado de Paz/LEIV o interposición de denuncia ante la Unidad Especializada de la FGR/PNC.",
      "C": "Citar de inmediato al agresor para realizar una sesión de terapia de pareja confrontativa.",
      "D": "Decirle a la paciente que los problemas matrimoniales deben resolverse en el ámbito privado sin intervención legal."
    },
    "correctAnswer": "B",
    "explanation": "La Ley LEIV tipifica como delito penal la violencia intrafamiliar y psicológica. El psicólogo debe valorar el riesgo letal inminente (feminicidio potencial), construir un plan de escape/seguridad, abstenerse de culpabilizar a la víctima y canalizarla hacia los órganos de justicia para medidas inmediatas de alejamiento y auxilio policial.",
    "distractorRationale": {
      "A": "Culpabilizar a la mujer o aconsejar sumisión constituye revictimización psicológica grave y complicidad con la violencia.",
      "C": "La terapia de pareja está formalmente contraindicada ante violencia de género activa por alto riesgo de represalias y feminicidio.",
      "D": "La violencia contra la mujer es un delito de orden público que atenta contra los derechos humanos fundamentales."
    }
  },
  {
    "id": "cssp-jvpps-11",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Prohibición Absoluta de Relaciones Sexuales con Pacientes",
    "legalBasis": "Código de Ética de la JVPPS y Principios de Integridad y No Maleficencia.",
    "statement": "Un psicólogo clínico que atiende a una consultante vulnerable con depresión severa se siente atraído por ella y decide iniciar una relación afectiva íntima y encuentros sexuales clandestinos durante el período en que se desarrolla la psicoterapia. Conforme al régimen disciplinario de la JVPPS y la bioética universal, ¿cómo se califica esta conducta?",
    "options": {
      "A": "Una técnica humanista avanzada para elevar la autoestima de la paciente.",
      "B": "Una infracción ética gravísima e inadmisible que constituye explotación emocional y abuso de la asimetría de poder terapéutica, sujeta a la cancelación definitiva del carné profesional, expulsión gremial y eventuales acciones penales por agresión o abuso.",
      "C": "Una conducta normal que no tiene ninguna implicación ética si la paciente consiente verbalmente.",
      "D": "Un acto permitido siempre que no se cobren honorarios durante las citas románticas."
    },
    "correctAnswer": "B",
    "explanation": "El contacto sexual o romántico entre terapeuta y paciente representa una de las violaciones deontológicas más destructivas de la profesión. Debido a los fenómenos de transferencia, vulnerabilidad clínica y asimetría de poder, el supuesto \"consentimiento\" está intrínsecamente viciado y constituye abuso y daño psicológico severo prevenible.",
    "distractorRationale": {
      "A": "Disfrazar el abuso sexual como técnica terapéutica es una perversión de la lex artis sancionable con rigor penal.",
      "C": "El consentimiento no convalida la violación de un principio ético absoluto de protección y no explotación.",
      "D": "Exonerar honorarios no mitiga el abuso de poder inherente a la relación terapéutica profanada."
    }
  },
  {
    "id": "cssp-jvpps-12",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Criterios Diagnósticos del DSM-5-TR: Trastorno de Estrés Postraumático (TEPT)",
    "legalBasis": "Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM-5-TR) y Guías de Salud Mental de la JVPPS.",
    "statement": "Una persona sobrevive a un secuestro a mano armada hace 4 meses y presenta recuerdos intrusivos angustiosos recurrentes, pesadillas vívidas del evento, evitación estricta de cualquier lugar que le recuerde el hecho, estado de hipervigilancia extrema con respuestas de sobresalto exageradas e insomnio severo, generando deterioro laboral. Conforme al DSM-5-TR, ¿cuál es el diagnóstico clínico y tiempo de duración requerido?",
    "options": {
      "A": "Trastorno de Adaptación Leve que no requiere tratamiento.",
      "B": "Trastorno de Estrés Postraumático (TEPT), caracterizado por síntomas en los 4 dominios diagnósticos (intrusión, evitación, alteraciones negativas cognitivas/estado de ánimo y alerta/reactividad) con una duración clínica persistente superior a 1 mes.",
      "C": "Trastorno de Estrés Agudo, pues el cuadro solo dura 3 días.",
      "D": "Simulación maliciosa de enfermedad para faltar al trabajo."
    },
    "correctAnswer": "B",
    "explanation": "El DSM-5-TR estipula que el Trastorno de Estrés Postraumático (TEPT) requiere la presencia de los cuatro grupos de síntomas cardinales tras la exposición a un evento traumático amenazante para la vida, con una duración que sobrepase el mes (a diferencia del Trastorno de Estrés Agudo que se circunscribe a los primeros 3 días a 1 mes post-evento).",
    "distractorRationale": {
      "A": "El cuadro cumple criterios floridos de TEPT severo con marcada disfunción psicosocial; catalogarlo como leve posterga la intervención especializada.",
      "C": "El estrés agudo se limita al primer mes posterior al trauma; a los 4 meses de evolución el diagnóstico correspondiente es TEPT.",
      "D": "Los síntomas relatados concuerdan con la nosología psiquiátrica estándar ante traumas extremos, sin indicios de simulación fraudulenta."
    }
  },
  {
    "id": "cssp-jvpps-13",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Telepsicología y Prestación de Servicios Virtuales",
    "legalBasis": "Guía de Práctica Telepsicológica de la JVPPS y Ley de Protección de Datos Personales.",
    "statement": "Al brindar psicoterapia en línea mediante telepsicología a un paciente que reside en otra ciudad del país, ¿cuál es la medida técnica y de seguridad de obligatorio cumplimiento al inicio del proceso?",
    "options": {
      "A": "Utilizar cualquier red wifi pública abierta de una cafetería sin contraseña ni cifrado.",
      "B": "Verificar fehacientemente la identidad real y ubicación física exacta donde se encuentra el consultante en cada sesión, registrar un contacto de emergencia local verificable (para activar rescate o intervención en crisis si surge riesgo suicida inminente), utilizar plataformas de videollamada con encriptación de extremo a extremo y suscribir un consentimiento informado específico para telepsicología.",
      "C": "Transmitir la sesión en vivo en TikTok para que otros aprendan psicoterapia.",
      "D": "No solicitar ningún dato de identificación ni dirección para garantizar anonimato absoluto."
    },
    "correctAnswer": "B",
    "explanation": "La telepsicología exige precauciones operativas estrictas: conocer la dirección física del consultante y contacto local en caso de que ocurra una urgencia vital (riesgo suicida, crisis psicótica), plataformas seguras que cumplan estándares de privacidad (HIPAA o equivalente con encriptación) y firma de consentimiento de riesgos técnicos de la virtualidad.",
    "distractorRationale": {
      "A": "Las redes abiertas y plataformas sin cifrado exponen las comunicaciones íntimas del paciente a hackeo y vulneración del secreto profesional.",
      "C": "Transmitir sesiones en redes abiertas constituye la mayor transgresión imaginable al secreto médico y legal.",
      "D": "Sin conocer la ubicación física es materialmente imposible prestar auxilio médico o policial ante emergencias vitales."
    }
  },
  {
    "id": "cssp-jvpps-14",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Prohibición de Pseudoterapias y Terapia Basada en Evidencia",
    "legalBasis": "Código de Ética de la JVPPS y Ley del Ejercicio de la Psicología.",
    "statement": "Un psicólogo publicita y aplica en su clínica privada tratamientos de \"biodecodificación cuántica\", \"limpias astrales de chacras\" y \"terapias de conversión de la orientación sexual (ECOSIF)\" para curar la homosexualidad. Conforme al régimen ético-científico de la JVPPS y organismos internacionales de salud, ¿qué valoración merece esta práctica?",
    "options": {
      "A": "Es una innovación clínica moderna que debe ser promovida y financiada por el Estado.",
      "B": "Constituye una infracción deontológica grave al principio de rigor científico y una práctica pseudoterapéutica contraria a los derechos humanos fundamentales; las terapias de conversión están expresamente desacreditadas y condenadas por la OMS y la JVPPS por causar daño psicológico severo, depresión y riesgo suicida en personas LGBTQ+.",
      "C": "Es válida siempre que el psicólogo utilice velas aromáticas en la consulta.",
      "D": "Es una especialidad oficial reconocida por el Código de Salud."
    },
    "correctAnswer": "B",
    "explanation": "El profesional de la psicología está éticamente obligado a emplear métodos y técnicas basados en evidencia científica rigurosa y avalados por la comunidad internacional. Las \"terapias de conversión\" (ECOSIF) y las pseudociencias mágicas carecen de sustento científico, atentan contra la dignidad y los derechos humanos y acarrean sanciones disciplinarias por la JVPPS.",
    "distractorRationale": {
      "A": "Las prácticas pseudocientíficas no son innovación sino retrocesos que degradan la credibilidad científica de la psicología.",
      "C": "El uso de parafernalia esotérica o rituales no legitima actos contrarios a la evidencia y lesivos para los derechos fundamentales.",
      "D": "El Código de Salud solo ampara disciplinas científicas de la salud mental basadas en evidencia comprobada."
    }
  },
  {
    "id": "cssp-jvpps-15",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Diagnóstico Diferencial: Duelo Normal vs Depresión Mayor en el DSM-5-TR",
    "legalBasis": "Criterios Diagnósticos del DSM-5-TR y Guía de Salud Mental de la JVPPS.",
    "statement": "Un paciente perdió a su cónyuge hace 3 semanas; refiere tristeza profunda intermitente, llanto episódico al recordarla, pero conserva la autoestima intacta, experimenta momentos de consuelo al hablar con sus hijos y no presenta sentimientos de culpa autorreprochable generalizada ni retraso psicomotor mórbido. ¿Cuál es la orientación diagnóstica adecuada?",
    "options": {
      "A": "Esquizofrenia paranoide catatónica aguda.",
      "B": "Reacción de Duelo No Complicado (normal): el afecto predominante es el vacío y la pérdida expresada en oleadas asociadas a recuerdos del difunto, con preservación de la autoestima; no debe patologizarse prematuramente como Trastorno Depresivo Mayor en ausencia de criterios de gravedad o culpa delirante.",
      "C": "Trastorno Bipolar en fase maníaca.",
      "D": "Demencia senil vascular irreversible."
    },
    "correctAnswer": "B",
    "explanation": "El DSM-5-TR eliminó la estricta \"exclusión por duelo\" pero aclara minuciosamente la distinción entre duelo normal y depresión mayor: en el duelo el dolor emocional ocurre en oleadas (\"punzadas de dolor\") intercaladas con humor positivo, centrado en el ser querido y la autoestima permanece preservada. No debe medicalizarse ni diagnosticarse erróneamente.",
    "distractorRationale": {
      "A": "El cuadro carece por completo de delirios persecutorios, alucinaciones o estupor catatónico.",
      "C": "No existen síntomas de euforia desmedida, fuga de ideas ni hiperactividad maníaca.",
      "D": "El dolor agudo reactivo a una pérdida reciente en una persona orientada no guarda relación con demencia neurodegenerativa."
    }
  },
  {
    "id": "cssp-jvpps-16",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Criterios de Hospitalización Urgente en Trastornos de Conducta Alimentaria (TCA)",
    "legalBasis": "Guía Clínica de Abordaje Interdisciplinario de los TCA de la JVPPS y MINSAL.",
    "statement": "Una adolescente de 16 años evaluada por Anorexia Nerviosa presenta un Índice de Masa Corporal (IMC) de 12.5 $kg/m^2$, bradicardia sinusal de 36 latidos por minuto, hipotensión arterial de 80/40 mmHg, hipotermia (35 °C) y debilidad que le impide ponerse de pie. ¿Cuál es la actuación clínica obligatoria del psicólogo?",
    "options": {
      "A": "Continuar con terapia conversacional ambulatoria una vez al mes recomendándole comer frutas.",
      "B": "Coordinar de forma inmediata el traslado y derivación urgente a un centro hospitalario de segundo/tercer nivel para ingreso médico por riesgo vital extremo de paro cardíaco o fallo multiorgánico por desnutrición severa, trabajando en equipo interdisciplinario.",
      "C": "Indicarle que aumente sus rutinas de ejercicio cardiovascular en casa.",
      "D": "Darle de alta porque la delgadez no es una enfermedad médica."
    },
    "correctAnswer": "B",
    "explanation": "Un IMC < 13-14 $kg/m^2$, bradicardia extrema (< 40 lpm) e inestabilidad hemodinámica son criterios de internación médica hospitalaria urgente en unidades de cuidados intensivos o medicina interna debido a alto riesgo de muerte súbita por arritmias o hipoglucemia. El tratamiento psicoterapéutico ambulatorio aislado es inviable e imprudente.",
    "distractorRationale": {
      "A": "El manejo ambulatorio lento en una paciente con colapso cardiovascular inminente culmina en defunción por paro cardíaco.",
      "C": "Prescribir ejercicio a una paciente caquéctica agota las últimas reservas miocárdicas precipitando fibrilación ventricular.",
      "D": "La anorexia nerviosa tiene una de las tasas de mortalidad más elevadas entre los trastornos psiquiátricos."
    }
  },
  {
    "id": "cssp-jvpps-17",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Trastorno Límite de la Personalidad (TLP) y Terapia Dialéctica Conductual (DBT)",
    "legalBasis": "Guía de Práctica Clínica de Trastornos de Personalidad de la JVPPS.",
    "statement": "Una paciente de 22 años con Trastorno Límite de la Personalidad (Borderline) presenta episodios repetidos de conductas autolesivas no suicidas (cortes en antebrazos), inestabilidad afectiva intensa, temor al abandono y crisis de ira. ¿Cuál es el modelo psicoterapéutico basado en evidencia de primera línea recomendado para este cuadro?",
    "options": {
      "A": "Psicoanálisis clásico ortodoxo pasivo de 5 sesiones semanales durante 15 años.",
      "B": "Terapia Dialéctica Conductual (DBT / Dialectical Behavior Therapy), enfocada en el equilibrio entre la aceptación y el cambio, entrenamiento sistemático en habilidades (atención plena, tolerancia al malestar, regulación emocional y efectividad interpersonal) y manejo estructurado de conductas autodestructivas.",
      "C": "Terapia de electrochoque ambulatoria aplicada por el psicólogo.",
      "D": "Hipnosis regresiva para buscar vidas pasadas en la infancia cósmica."
    },
    "correctAnswer": "B",
    "explanation": "La Terapia Dialéctico-Conductual (DBT desarrollada por Marsha Linehan) es la intervención psicoterapéutica con mayor respaldo empírico de nivel 1 para el TLP y conductas autolesivas/parasuicidas, reduciendo drásticamente los ingresos hospitalarios y mejorando la regulación afectiva a través del aprendizaje estructurado de habilidades dialécticas.",
    "distractorRationale": {
      "A": "El encuadre no directivo o excesivamente pasivo puede desestabilizar a consultantes con marcada desregulación emocional sin estructura.",
      "C": "La TEC es una técnica médica psiquiátrica de tercer nivel hospitalario que jamás puede ser ejecutada por psicólogos.",
      "D": "La regresión a vidas pasadas es una práctica pseudocientífica que carece de sustento empírico y puede inducir falsos recuerdos traumáticos."
    }
  },
  {
    "id": "cssp-jvpps-18",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Evaluación Neuropsicológica y Cribado Cognitivo en Adultos Mayores",
    "legalBasis": "Guía de Psicogeriatría y Evaluación Cognitiva de la JVPQF y JVPPS.",
    "statement": "Al sospechar deterioro cognitivo leve o demencia tipo Alzheimer en un adulto mayor, ¿cuál de las siguientes pruebas de cribado neuropsicológico breve cuenta con mayor sensibilidad para detectar fallos ejecutivos y visuoespaciales tempranos?",
    "options": {
      "A": "Evaluación Cognitiva de Montreal (MoCA / Montreal Cognitive Assessment).",
      "B": "Test de Rorschach de manchas de tinta.",
      "C": "Inventario de Depresión de Beck (BDI) únicamente.",
      "D": "Test de Matrices Progresivas de Raven de escala avanzada."
    },
    "correctAnswer": "A",
    "explanation": "El MoCA es una herramienta de cribado validada internacionalmente con alta sensibilidad (90%) para el Deterioro Cognitivo Leve (DCL) y demencias tempranas, evaluando funciones ejecutivas, memoria de evocación diferida, lenguaje, capacidad visuoespacial (test del reloj) y orientación en 10 minutos, superando al MMSE tradicional.",
    "distractorRationale": {
      "B": "El Rorschach es un test proyectivo de personalidad que no evalúa déficits neurológicos neurocognitivos de forma cuantitativa.",
      "C": "El BDI evalúa síntomas afectivos de depresión, no dominios neuropsicológicos específicos de memoria o función ejecutiva.",
      "D": "El Raven mide inteligencia general no verbal abstracta, no siendo un instrumento de tamizaje geriátrico para demencias."
    }
  },
  {
    "id": "cssp-jvpps-19",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Manejo Ético del Expediente Psicológico y Notas Clínicas",
    "legalBasis": "Código de Salud de El Salvador, Art. 42 y Código de Deontología de la JVPPS.",
    "statement": "En relación con la elaboración y conservación de las notas clínicas y expedientes de los consultantes en el ejercicio privado de la psicología, ¿cuál de las siguientes afirmaciones describe la obligación legal del profesional?",
    "options": {
      "A": "No es necesario llevar ningún registro escrito ni expediente; la memoria del terapeuta es suficiente.",
      "B": "El psicólogo debe llevar un expediente clínico ordenado, fechado y firmado por cada consultante, custodiándolo bajo estrictas medidas de confidencialidad y seguridad física o digital encriptada por un plazo mínimo legal (5 a 10 años), protegiendo la identidad de terceros mencionados en las sesiones.",
      "C": "Los expedientes deben destruirse semanalmente para no acumular papel.",
      "D": "El expediente puede publicarse en internet si el paciente adeuda honorarios de consultas anteriores."
    },
    "correctAnswer": "B",
    "explanation": "El expediente clínico es un documento legal de soporte obligatorio de la atención sanitaria. El profesional de la psicología debe documentar los consentimientos, motivos de consulta, evaluaciones, hipótesis diagnósticas, evolución y notas de seguimiento, custodiándolos bajo reserva absoluta frente a terceros no facultados.",
    "distractorRationale": {
      "A": "Omitir el expediente clínico constituye una violación al Código de Salud y deja sin respaldo técnico la actuación profesional.",
      "C": "Destruir expedientes prematuramente destruye evidencia médico-legal y viola los plazos legales de prescripción.",
      "D": "Exponer los expedientes de deudores es una violación al secreto profesional y un chantaje sancionable penalmente."
    }
  },
  {
    "id": "cssp-jvpps-20",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Intervención en Crisis: Primeros Auxilios Psicológicos (PAP)",
    "legalBasis": "Guía de Primera Ayuda Psicológica en Emergencias y Desastres de la OMS y JVPPS.",
    "statement": "Tras un terremoto o catástrofe comunitaria en El Salvador, un psicólogo acude a la zona afectada para brindar Primeros Auxilios Psicológicos (PAP) a los damnificados en las primeras horas. ¿Cuál es el principio de acción fundamental de los PAP según la OMS?",
    "options": {
      "A": "Forzar a todas las víctimas a relatar minuciosamente el horror vivido una y otra vez (\"debriefing forzado\") hasta que lloren en grupo.",
      "B": "Observar (comprobar la seguridad y personas con necesidades urgentes), Escuchar (acercarse a quienes necesitan apoyo, preguntar necesidades y ayudar a tranquilizarse sin forzar el diálogo) y Conectar (ayudar a satisfacer necesidades básicas, acceder a servicios de salud y reencontrarse con seres queridos).",
      "C": "Suministrar tranquilizantes potentes sin prescripción médica a toda la población.",
      "D": "Asegurar a las víctimas que no pasó nada y que todo fue una simple pesadilla imaginaria."
    },
    "correctAnswer": "B",
    "explanation": "El protocolo estandarizado de la OMS para PAP se basa en el trinomio: \"Observar, Escuchar y Conectar\". Se enfoca en brindar apoyo humano práctico, cubrir necesidades de supervivencia inmediatas, escuchar con empatía sin forzar la verbalización de detalles traumáticos y conectar con redes familiares y comunitarias.",
    "distractorRationale": {
      "A": "El debriefing psicológico temprano obligado está contraindicado porque reactiva la hiperactivación emocional y puede empeorar el trauma.",
      "C": "Los psicólogos no pueden prescribir fármacos y la sedación indiscriminada interfiere con la adaptación natural.",
      "D": "Invalidar la tragedia real destruye la confianza y desampara emocionalmente a los sobrevivientes."
    }
  },
  {
    "id": "cssp-jvpps-21",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Prevención de la Revictimización en Niñez y Cámara Gesell",
    "legalBasis": "Ley Crecer Juntos Art. 12 y Código Procesal Penal de El Salvador, Art. 212-A.",
    "statement": "En la toma de declaración o peritaje psicológico a una niña víctima de violencia sexual en un proceso penal, ¿cuál es la técnica y garantía procesal exigida por las leyes salvadoreñas para evitar su revictimización secundaria?",
    "options": {
      "A": "Hacer que la niña rinda testimonio diez veces seguidas ante un jurado multitudinario en presencia del imputado.",
      "B": "La utilización de la Cámara Gesell mediante una Entrevista Única Especializada grabada en audio y video conducida por un psicólogo forense acreditado, permitiendo que las partes observen a través del espejo unidireccional y formulen preguntas a través del profesional sin contacto visual ni confrontación directa con el agresor.",
      "C": "Interrogar a la niña bajo tortura para que diga la verdad.",
      "D": "Prohibir que la niña exprese emociones durante la entrevista judicial."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 212-A del Código Procesal Penal y la Ley Crecer Juntos estipulan la Cámara Gesell para menores víctimas de delitos contra la libertad sexual. Evita la victimización secundaria al concentrar el testimonio en una entrevista única guiada por un perito psicólogo infantil calificado, sin contacto visual con el imputado.",
    "distractorRationale": {
      "A": "Reiterar interrogatorios en presencia del agresor genera trauma psicológico severo y revictimización institucional.",
      "C": "La coacción y tortura son crímenes de lesa humanidad aberrantes prohibidos por la Constitución y el derecho internacional.",
      "D": "La manifestación emocional espontánea es un componente natural que debe ser contenido afectiva y técnicamente por el profesional."
    }
  },
  {
    "id": "cssp-jvpps-22",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Fobia Específica y Técnicas de Exposición Basadas en Evidencia",
    "legalBasis": "Manual de Intervenciones Cognitivo-Conductuales Basadas en la Evidencia de la JVPPS.",
    "statement": "En el tratamiento psicológico de un adulto con fobia específica a los ascensores (claustrofobia), ¿cuál de las siguientes técnicas psicoterapéuticas representa el estándar de oro conductual?",
    "options": {
      "A": "Encerrar al paciente sorpresivamente a la fuerza en un ascensor oscuro durante 6 horas sin su consentimiento.",
      "B": "Exposición graduada in vivo o con realidad virtual (acompañada de entrenamiento previo en habilidades de manejo de la ansiedad y reestructuración cognitiva), avanzando de manera progresiva y consensuada a través de una jerarquía de estímulos ansiógenos acordada con el paciente.",
      "C": "Administrar descargas eléctricas cada vez que el paciente se acerque a un ascensor.",
      "D": "Decirle al paciente que nunca más vuelva a usar un ascensor en su vida."
    },
    "correctAnswer": "B",
    "explanation": "La exposición gradual sistemática (en vivo o mediante realidad virtual) con prevención de respuesta de escape es el tratamiento más eficaz para fobias específicas. Permite la habituación neurofisiológica y la reevaluación cognitiva de la amenaza de forma segura y colaborativa.",
    "distractorRationale": {
      "A": "El confinamiento forzado no consentido (inundación abusiva) constituye maltrato, genera crisis de pánico incontrolables y abandono del tratamiento.",
      "C": "El condicionamiento aversivo punitivo eléctrico está proscrito en la clínica psicológica contemporánea por causar iatrogenia.",
      "D": "Promover la conducta de evitación cronifica la fobia y limita la autonomía y calidad de vida del paciente."
    }
  },
  {
    "id": "cssp-jvpps-23",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Delimitación Interdisciplinaria con la Psiquiatría y Prescripción Farmacológica",
    "legalBasis": "Código de Salud de El Salvador, Arts. 40 y 68 y Ley del Ejercicio de la Psicología.",
    "statement": "Un psicólogo clínico atiende a un paciente con Trastorno Bipolar en fase maníaca aguda que presenta fuga de ideas, insomnio total de 4 días y delirios megalomaníacos. En relación con la prescripción médica de psicofármacos y la colaboración interdisciplinaria, ¿cuál es el mandato legal y deontológico?",
    "options": {
      "A": "El psicólogo puede extender una receta médica de Litio y Quetiapina firmando con su sello de la JVPPS.",
      "B": "El psicólogo tiene legalmente prohibida la prescripción de medicamentos (facultad médica exclusiva regulada por la JVPM y Código de Salud); su obligación inmediata es referir e interconsultar con un médico psiquiatra para estabilización farmacológica, complementando el tratamiento con psicoeducación y apoyo psicoterapéutico una vez remitida la manía aguda.",
      "C": "Recomendar al paciente que consuma tés de hierbas para sustituir a los antipsicóticos.",
      "D": "Suspender todo tratamiento y expulsar al paciente del consultorio."
    },
    "correctAnswer": "B",
    "explanation": "En El Salvador, la prescripción de psicofármacos es competencia exclusiva de profesionales médicos inscritos ante la JVPM. El psicólogo no está facultado para recetar ni modificar dosis de fármacos; ante patologías complejas como la manía aguda, el deber ético es la derivación inmediata a psiquiatría para un abordaje interdisciplinario seguro.",
    "distractorRationale": {
      "A": "Prescribir fármacos sin título médico constituye el delito de ejercicio ilegal de la medicina tipificado en el Código Penal.",
      "C": "Sustituir la farmacoterapia indispensable en manía por infusiones empíricas pone en grave riesgo la integridad del consultante.",
      "D": "El abandono de un paciente en descompensación psiquiátrica aguda es una falta deontológica grave."
    }
  },
  {
    "id": "cssp-jvpps-24",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Uso de Reactivos Psicométricos Baremados y Sesgo Cultural",
    "legalBasis": "Directrices Internacionales para el Uso de los Tests (ITC) y Código de Ética de la JVPPS.",
    "statement": "Al seleccionar un test de inteligencia (por ejemplo, WISC-V o WAIS-IV) para evaluar el coeficiente intelectual de un niño procedente de una zona rural vulnerable de El Salvador, ¿cuál es el principio técnico psicométrico que debe observar el profesional?",
    "options": {
      "A": "Utilizar una versión fotocopiada en inglés sin traducir y calificar con baremos de estudiantes universitarios de Europa.",
      "B": "Verificar que el instrumento cuente con validez y confiabilidad demostradas, adaptaciones y baremos pertinentes para población hispanohablante/latinoamericana, contextualizando los resultados con la historia educativa, cultural y socioeconómica del niño para evitar diagnósticos erróneos de discapacidad intelectual por sesgo cultural.",
      "C": "Inventar las puntuaciones al azar según la simpatía del evaluador.",
      "D": "Calificar restando 50 puntos a todos los niños de origen rural."
    },
    "correctAnswer": "B",
    "explanation": "Las normas de la ITC (International Test Commission) y la JVPPS exigen el uso de pruebas estandarizadas y baremadas para contextos afines. Interpretar puntajes crudos sin considerar barreras culturales o lingüísticas produce falsos positivos de discapacidad intelectual (\"sesgo del test\"), estigmatizando al menor y violando la lex artis.",
    "distractorRationale": {
      "A": "Aplicar tests en idiomas ajenos o con baremos foráneos incompatibles invalida cualquier conclusión diagnóstica.",
      "C": "Falsificar datos psicométricos constituye una falta muy grave sancionable con suspensión del carné profesional.",
      "D": "La penalización discriminatoria por procedencia geográfica viola el principio constitucional de igualdad y no discriminación."
    }
  },
  {
    "id": "cssp-jvpps-25",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Confidencialidad en Psicoterapia de Pareja y Familia",
    "legalBasis": "Manual de Ética en Terapia Sistémica Familiar de la JVPPS.",
    "statement": "En el marco de una psicoterapia de pareja, uno de los cónyuges llama privadamente por teléfono al terapeuta y le revela: \"Le soy infiel a mi esposa desde hace 2 años con su mejor amiga, pero no le diga nada en la sesión del viernes porque solo quería desahogarme con usted\". ¿Cuál es el manejo ético y del encuadre adecuado?",
    "options": {
      "A": "Guardar el secreto indefinidamente y usar la información para aliarse secretamente con el infiel contra la esposa en la sesión grupal.",
      "B": "Recordar el encuadre inicial establecido en el consentimiento informado de \"política de no secretos\" en terapia de pareja, explicando que el terapeuta no puede ser depositario de secretos destructivos individuales que saboteen el objetivo del tratamiento; animar al cónyuge a revelar la información o valorar la terminación/reorientación del espacio terapéutico conjunto.",
      "C": "Publicar la infidelidad en redes sociales para que la comunidad lo juzgue.",
      "D": "Extorsionar al paciente exigiéndole dinero para guardar el secreto."
    },
    "correctAnswer": "B",
    "explanation": "En terapia familiar o de pareja es vital acordar previamente una \"política de secretos\": el terapeuta no acepta conspiraciones de silencio individuales a espaldas del otro miembro, pues destruye la neutralidad del sistema y convierte al profesional en cómplice de un engaño destructivo que anula la eficacia de la terapia.",
    "distractorRationale": {
      "A": "Aliarse con un miembro a espaldas del otro destruye la neutralidad terapéutica y genera manipulación iatrogénica.",
      "C": "La difusión pública viola el secreto profesional y el derecho a la intimidad personal.",
      "D": "La extorsión es un delito penal que acarrea encarcelamiento y destitución gremial."
    }
  },
  {
    "id": "cssp-jvpps-26",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Trastorno por Déficit de Atención e Hiperactividad (TDAH) y Sobrediagnóstico",
    "legalBasis": "Guía Clínica de Atención Integral de los Trastornos del Neurodesarrollo de la JVPPS y MINED.",
    "statement": "Una maestra remite a un niño de 6 años al psicólogo solicitando \"que lo diagnostique con TDAH y le manden metilfenidato para que se quede quieto en clase\". Al evaluarlo, el niño presenta hiperactividad únicamente en la escuela durante la clase de matemáticas que no comprende, pero en casa y en deportes muestra excelente atención y no hay problemas conductuales. ¿Cuál es el criterio clínico?",
    "options": {
      "A": "Emitir inmediatamente el diagnóstico de TDAH Combinado Grave complaciendo a la maestra.",
      "B": "Descartar TDAH según los criterios del DSM-5-TR, los cuales exigen taxativamente que los síntomas de inatención o hiperactividad estén presentes de forma persistente en DOS O MÁS ENTORNOS DIFERENTES (ej. hogar y escuela); investigar dificultades específicas del aprendizaje o factores pedagógicos en el aula.",
      "C": "Sancionar al niño con expulsión definitiva del sistema escolar.",
      "D": "Diagnosticar esquizofrenia infantil."
    },
    "correctAnswer": "B",
    "explanation": "Un requisito cardinal del DSM-5-TR para el diagnóstico de TDAH es la ubicuidad: varios síntomas deben manifestarse en dos o más ámbitos (hogar, escuela, actividades sociales). Si las conductas solo ocurren en un salón específico, reflejan desajustes pedagógicos, problemas de aprendizaje o dinámicas de aula, no una disfunción neurobiológica global.",
    "distractorRationale": {
      "A": "Etiquetar erróneamente a un niño con TDAH sin cumplir los criterios de ubicuidad fomenta la medicalización injustificada.",
      "C": "La expulsión escolar vulnera el derecho humano a la educación garantizado en la Ley Crecer Juntos.",
      "D": "No existen delirios, alucinaciones ni desorganización del pensamiento que justifiquen psicosis."
    }
  },
  {
    "id": "cssp-jvpps-27",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Honorarios Profesionales y Prohibición de Dicotomía Económica",
    "legalBasis": "Código de Ética de la JVPPS y Código de Comercio de El Salvador.",
    "statement": "Un neurólogo ofrece a un psicólogo el siguiente trato comercial: \"Por cada paciente con depresión que usted me remita a mi clínica privada, yo le daré a usted el 25% de la consulta médica; y por cada paciente que yo le mande a terapia, usted me pagará a mí $15 de comisión\". Conforme a la deontología de la JVPPS, ¿cómo se califica este acuerdo?",
    "options": {
      "A": "Una excelente alianza estratégica de marketing médico sumamente ética y profesional.",
      "B": "Una infracción deontológica gravísima tipificada como Dicotomía Económica (partición ilícita de honorarios o pago por comisión de referidos), la cual mercantiliza la salud de los usuarios, genera conflictos de interés y corrompe el criterio clínico de derivación.",
      "C": "Una práctica permitida siempre que se extienda factura con IVA.",
      "D": "Un requisito obligatorio para abrir consultorio según el Ministerio de Hacienda."
    },
    "correctAnswer": "B",
    "explanation": "La dicotomía (pago o cobro de comisiones por referir pacientes entre profesionales de la salud) está terminantemente prohibida por todos los códigos de ética de las profesiones de la salud y el CSSP. Las remisiones deben basarse exclusivamente en la necesidad clínica objetiva del paciente y la idoneidad del especialista, nunca en incentivos económicos.",
    "distractorRationale": {
      "A": "La dicotomía es una práctica mercantil deshonesta que viola la confianza pública en la profesión sanitaria.",
      "C": "Los comprobantes tributarios no convalidan la ilicitud ética de los sobornos o comisiones sanitarias.",
      "D": "El Ministerio de Hacienda supervisa la tributación general, no autoriza prácticas deontológicamente corruptas."
    }
  },
  {
    "id": "cssp-jvpps-28",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Autocuidado del Profesional y Síndrome de Desgaste (Burnout / Fatiga por Compasión)",
    "legalBasis": "Código de Ética del Profesional de la Psicología de El Salvador.",
    "statement": "Un psicólogo clínico que atiende víctimas de tortura y agresiones sexuales comienza a experimentar embotamiento afectivo severo, pesadillas recurrentes sobre los casos de sus pacientes, cinismo hacia los usuarios y errores diagnósticos por fatiga mental extrema (Trauma Vicario y Burnout Severo). ¿Cuál es el imperativo ético de acción personal?",
    "options": {
      "A": "Duplicar el número de pacientes diarios para ganar más dinero y distraerse.",
      "B": "Reconocer sus limitaciones psicofísicas y el menoscabo en su competencia profesional, buscar de forma inmediata supervisión clínica y proceso psicoterapéutico propio, limitar o suspender temporalmente la admisión de casos de alta complejidad hasta recuperar su salud mental y bienestar.",
      "C": "Consumir alcohol en el consultorio entre paciente y paciente para calmar los nervios.",
      "D": "Culpar a los pacientes por tener historias de vida desagradables."
    },
    "correctAnswer": "B",
    "explanation": "El principio de competencia profesional obliga al psicólogo a no ejercer si sus facultades físicas o psicológicas están mermadas por agotamiento o trauma vicario (fatiga por compasión), ya que el deterioro personal compromete la seguridad y calidad de la atención al usuario (\"cuidar al que cuida\").",
    "distractorRationale": {
      "A": "Aumentar la carga asistencial acelera el colapso psicológico del terapeuta multiplicando los errores iatrogénicos.",
      "C": "El consumo de sustancias en el entorno laboral sanitario es una infracción gravísima con sanción de suspensión inmediata.",
      "D": "Proyectar el malestar interno sobre los consultantes es una falta deontológica de revictimización y desprecio ético."
    }
  },
  {
    "id": "cssp-jvpps-29",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Bioética de la Investigación con Seres Humanos en Psicología",
    "legalBasis": "Declaración de Helsinki, Pautas Éticas de CIOMS y Código de Ética de la JVPPS.",
    "statement": "Un docente universitario de psicología desea realizar un estudio experimental sobre los efectos del estrés agudo en estudiantes universitarios, induciéndoles humillación pública y falsas acusaciones de plagio sin avisarles. Al terminar, planea no explicarles nada. ¿Qué principios bioéticos internacionales de investigación en seres humanos se están vulnerando flagrantemente?",
    "options": {
      "A": "Ninguno, los estudiantes universitarios son propiedad de la facultad y deben colaborar obligatoriamente.",
      "B": "Se violan los principios de Consentimiento Informado Libre y Voluntario, Respeto a la Dignidad, No Maleficencia y el deber de \"Debriefing\" o desengaño terapéutico posterior; someter a participantes a humillación sin consentimiento ético aprobado por un Comité de Ética de Investigación es una falta bioética gravísima.",
      "C": "Solo se viola el derecho de autor si no citan al rector de la universidad.",
      "D": "Es un experimento válido si se aprueba con nota 10 a los participantes."
    },
    "correctAnswer": "B",
    "explanation": "La investigación psicológica en seres humanos exige aprobación previa por un Comité de Ética en Investigación de la Salud (CEIS), consentimiento informado sin coacción académica, evaluación de la relación riesgo-beneficio, minimización del daño y devolución informativa (\"debriefing\") para asegurar que ningún participante sufra secuelas emocionales.",
    "distractorRationale": {
      "A": "Los estudiantes son sujetos de derecho con plena autonomía protegida por la bioética; el abuso de autoridad académica es sancionable.",
      "C": "La vulneración de la dignidad e integridad psicológica no tiene relación con el derecho de propiedad intelectual.",
      "D": "El soborno académico con calificaciones para forzar la participación vicia la voluntariedad del consentimiento informado."
    }
  },
  {
    "id": "cssp-jvpps-30",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Manejo Clínico y Legal del Intento de Suicidio en Menores de Edad",
    "legalBasis": "Ley Crecer Juntos Arts. 16, 20 y Código de Salud Art. 42.",
    "statement": "Un adolescente de 14 años es llevado a consulta psicológica tras haber realizado una tentativa de suicidio por ingestión de medicamentos. Durante la entrevista, el joven refiere desesperanza extrema y manifiesta que volverá a intentarlo tan pronto sus padres se descuiden. ¿Cuál es el protocolo de seguridad obligatorio?",
    "options": {
      "A": "Guardar el secreto ante los padres para que el joven no se moleste y programar una cita para el próximo mes.",
      "B": "Romper la confidencialidad de inmediato informando a los padres o tutores legales sobre el riesgo vital inminente, coordinar la derivación urgente a un servicio hospitalario de urgencias de pediatría/psiquiatría para evaluación e internamiento preventivo, instruir la custodia estricta de medicamentos y objetos lesivos en el hogar y no dejar al adolescente sin supervisión adulta continua en ningún momento.",
      "C": "Retar al adolescente diciéndole que no tiene el valor para consumar el suicidio.",
      "D": "Indicarle que lea un libro de superación personal a solas en su habitación cerrada con cerrojo."
    },
    "correctAnswer": "B",
    "explanation": "Ante riesgo suicida inminente en niños y adolescentes, el deber legal y bioético imperativo es la preservación de la vida mediante la ruptura proporcionada del secreto hacia sus representantes legales y los servicios médicos de urgencia. La custodia continua y el retiro de medios letales en el hogar son medidas salvavidas innegociables.",
    "distractorRationale": {
      "A": "La inacción en un menor con plan suicida activo constituye abandono y negligencia inexcusable con responsabilidad civil y penal.",
      "C": "Desafiar a una persona con ideación suicida es un acto de crueldad extrema que precipita la letalidad del acto.",
      "D": "El aislamiento en habitaciones cerradas facilita el acceso a métodos autolíticos sin posibilidad de auxilio."
    }
  },
  {
    "id": "cssp-jvpps-31",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Terapia de Aceptación y Compromiso (ACT) y Tercera Generación",
    "legalBasis": "Manual de Terapias Conductuales Contextuales de la JVPPS.",
    "statement": "En el marco de las Terapias de Tercera Generación, específicamente la Terapia de Aceptación y Compromiso (ACT), ¿cuál es el objetivo terapéutico primordial ante pensamientos obsesivos o emociones dolorosas?",
    "options": {
      "A": "Luchar intensamente contra los pensamientos negativos para eliminarlos por completo de la mente.",
      "B": "Fomentar la Flexibilidad Psicológica mediante la aceptación compasiva de los eventos privados (pensamientos, emociones), la defusión cognitiva (ver los pensamientos como lo que son y no como verdades absolutas) y el compromiso con acciones orientadas a valores vitales significativos para el consultante.",
      "C": "Tomar café continuamente para mantenerse distraído todo el día.",
      "D": "Castigarse con golpes en el pecho cada vez que surja una emoción triste."
    },
    "correctAnswer": "B",
    "explanation": "ACT no busca suprimir ni controlar directamente los pensamientos o emociones displacenteras (lo que a menudo incrementa el malestar por \"evitación experiencial\"), sino cambiar la relación que la persona tiene con ellos mediante el hexaflex (atención plena, defusión, aceptación, yo como contexto, valores y acción comprometida).",
    "distractorRationale": {
      "A": "La lucha activa por suprimir pensamientos genera un efecto rebote paradójico aumentando su frecuencia e intensidad.",
      "C": "La distracción crónica perpetúa la evitación experiencial y no genera repertorios conductuales adaptativos.",
      "D": "La autocastigación conductual genera aversión y sufrimiento sin aportar flexibilidad psicológica."
    }
  },
  {
    "id": "cssp-jvpps-32",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Peritajes Forenses de Idoneidad Parental en Juicios de Familia",
    "legalBasis": "Ley Procesal de Familia de El Salvador, Arts. 138 al 142 y Código de Deontología de la JVPPS.",
    "statement": "En un peritaje psicológico judicial para evaluar el régimen de cuidado personal (custodia) de dos niños de 5 y 8 años cuyos padres se están divorciando, ¿cuál de las siguientes metodologías garantiza la validez probatoria de la prueba pericial?",
    "options": {
      "A": "Evaluar exclusivamente al progenitor que pagó el anticipo de honorarios del perito y emitir el informe a su favor.",
      "B": "Evaluar de forma equitativa, metodológicamente estandarizada e independiente a AMBOS progenitores, observar la interacción vincular paterno/materno-filial con los niños mediante técnicas directas adaptadas a su edad, contrastar con colaterales y emitir conclusiones basadas en el Principio del Interés Superior de la Niñez, absteniéndose de emitir juicios de valor moralizantes.",
      "C": "Elegir al progenitor que tenga el vehículo más lujoso.",
      "D": "Entrevistar a los niños frente a sus compañeros de escuela en el patio del colegio."
    },
    "correctAnswer": "B",
    "explanation": "La evaluación forense de idoneidad parental exige rigor metodológico, imparcialidad y evaluación de todas las partes involucradas (ambos padres y los menores, evaluando competencias parentales y dinámicas vinculares). Emitir conclusiones sesgadas favoreciendo a una sola parte sin evaluar a la otra vicia el peritaje y acarrea sanciones disciplinarias ante la JVPPS.",
    "distractorRationale": {
      "A": "Evaluar solo a una parte viola el principio de contradicción procesal y refleja venalidad pericial corrupta.",
      "C": "La capacidad económica no es sinónimo de aptitud afectiva o psicológica para el cuidado de los hijos.",
      "D": "Exponer a los menores en espacios públicos viola su intimidad y contamina las respuestas por presión grupal."
    }
  },
  {
    "id": "cssp-jvpps-33",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Manejo del Trastorno por Uso de Sustancias y Reducción de Daños",
    "legalBasis": "Guía de Práctica Clínica de Abordaje de Adicciones del MINSAL y JVPPS.",
    "statement": "Al abordar a un paciente con Trastorno por Uso de Sustancias (Adicción a alcohol y opioides), ¿cuál de los siguientes enfoques de salud pública y psicoterapia contemporánea prioriza la reducción de la morbimortalidad y fomenta la motivación al cambio?",
    "options": {
      "A": "Insultar y humillar al paciente en público para que sienta vergüenza moral de su adicción.",
      "B": "El Enfoque de Reducción de Daños combinado con la Entrevista Motivacional (Miller y Rollnick), abordando la adicción como un trastorno crónico biopsicosocial, respetando la autonomía del paciente en sus diferentes etapas de cambio (Prochaska y DiClemente) y facilitando acceso a soporte médico-psiquiátrico.",
      "C": "Encerrar al paciente en un centro clandestino sin agua ni comida durante 3 meses.",
      "D": "Prohibir al paciente acudir al médico general."
    },
    "correctAnswer": "B",
    "explanation": "Las adicciones son reconocidas como trastornos neurobiológicos y conductuales complejos, no como fallas morales. La Entrevista Motivacional (explorar la ambivalencia) y los modelos de reducción de riesgos han demostrado científicamente mayor adherencia y menor mortalidad que los métodos confrontativos agresivos.",
    "distractorRationale": {
      "A": "La confrontación agresiva y la humillación elevan las tasas de recaída, abandono y suicidio.",
      "C": "Los centros de internamiento clandestinos (\"granjas\") sin supervisión médica violan los derechos humanos e incurren en privación ilegal de libertad.",
      "D": "El abordaje de adicciones exige estrecha colaboración médica para el manejo seguro del síndrome de abstinencia y comorbilidades."
    }
  },
  {
    "id": "cssp-jvpps-34",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Diagnóstico Diferencial: Trastorno del Espectro Autista (TEA) en la Niñez",
    "legalBasis": "Criterios Diagnósticos del DSM-5-TR y Guía de Atención Temprana del TEA de la JVPPS.",
    "statement": "Un niño de 3 años presenta deficiencias persistentes en la comunicación e interacción social (ausencia de contacto visual sostenido, no responde a su nombre, retraso del habla sin balbuceo compensatorio, ausencia de juego simbólico) junto con patrones restrictivos y repetitivos de conducta (aleteo de manos, alineación obsesiva de juguetes y crisis severas ante cambios de rutina). Conforme al DSM-5-TR, ¿cuál es el diagnóstico?",
    "options": {
      "A": "Trastorno Oposicionista Desafiante leve.",
      "B": "Trastorno del Espectro Autista (TEA), el cual se caracteriza por déficits en la reciprocidad socioemocional y la comunicación no verbal, junto a conductas e intereses estereotipados presentes desde las primeras etapas del desarrollo.",
      "C": "Demencia precoz juvenil.",
      "D": "Un niño superdotado que no desea hablar con adultos ordinarios."
    },
    "correctAnswer": "B",
    "explanation": "El DSM-5-TR fusionó los antiguos trastornos generalizados del desarrollo en el Trastorno del Espectro Autista (TEA), definido por dos dominios cardinales: 1) déficits persistentes en comunicación e interacción social en múltiples contextos, y 2) patrones restrictivos y repetitivos de comportamiento, intereses o actividades, manifestados precozmente en el neurodesarrollo.",
    "distractorRationale": {
      "A": "El negativismo desafiante se caracteriza por irritabilidad e incumplimiento de normas en niños con lenguaje e interacción social preservados.",
      "C": "La demencia precoz es un término histórico en desuso para la esquizofrenia; el cuadro descrito corresponde a un trastorno del neurodesarrollo.",
      "D": "Desestimar signos claros de autismo temprano retrasa la intervención neurocognitiva oportuna y el apoyo fonoaudiológico."
    }
  },
  {
    "id": "cssp-jvpps-35",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Consentimiento Informado en Psicoterapia de Adultos",
    "legalBasis": "Código de Ética de la JVPPS y Código de Salud de El Salvador, Art. 42.",
    "statement": "Al inicio de una relación psicoterapéutica individual con un paciente adulto competente, ¿cuál es la finalidad bioética y el contenido básico que debe incluir el proceso de Consentimiento Informado?",
    "options": {
      "A": "Una cláusula secreta donde el paciente renuncie a todos sus derechos legales y prometa nunca quejarse ante la JVPPS.",
      "B": "Un proceso dialógico y documental transparente donde se informe al consultante sobre la orientación teórica del terapeuta, objetivos y límites del tratamiento, costos y honorarios, periodicidad y duración de las sesiones, política de cancelación de citas, las garantías de confidencialidad y sus excepciones legales expresas.",
      "C": "Un pagaré en blanco para cobrar cualquier suma que el psicólogo decida en el futuro.",
      "D": "No se requiere consentimiento porque la palabra del psicólogo es infalible."
    },
    "correctAnswer": "B",
    "explanation": "El consentimiento informado es un pilar bioético que honra la autonomía del paciente. Debe detallar la naturaleza de la intervención, riesgos y beneficios, honorarios acordados, voluntariedad para interrumpir el tratamiento en cualquier momento y los límites precisos del secreto profesional (riesgo inminente a la vida o requerimiento judicial).",
    "distractorRationale": {
      "A": "Las cláusulas de renuncia previa a la tutela judicial son ilícitas y nulas de pleno derecho según el derecho civil salvadoreño.",
      "C": "Exigir documentos financieros en blanco constituye un fraude mercantil y una falta deontológica muy grave.",
      "D": "La imposición unilateral de tratamientos sin consentimiento informado es una práctica paternalista autoritaria proscrita por la bioética."
    }
  },
  {
    "id": "cssp-jvpps-36",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Regulación de la Publicidad Profesional en Psicología",
    "legalBasis": "Código de Ética de la JVPPS y Reglamento de Publicidad Médica del CSSP.",
    "statement": "Un psicólogo coloca un cartel comercial que dice: \"Curo la depresión y la ansiedad en 3 sesiones garantizado al 100% con hipnosis cuántica infalible, ¡olvídese de los fármacos!\". Conforme a las normas deontológicas de la JVPPS, ¿qué valoración merece esta propaganda?",
    "options": {
      "A": "Es una publicidad adecuada porque transmite optimismo y fe al público.",
      "B": "Constituye una infracción deontológica y legal al régimen de publicidad sanitaria por prometer curaciones mágicas o resultados absolutos garantizados, emplear términos pseudocientíficos engañosos y descalificar tratamientos médicos indispensables.",
      "C": "Es válida siempre que el profesional pague la tasa municipal de publicidad.",
      "D": "Es una técnica recomendada por el Ministerio de Turismo."
    },
    "correctAnswer": "B",
    "explanation": "El Código de Ética de la JVPPS y las regulaciones del CSSP prohíben la publicidad engañosa, garantizar curaciones absolutas (la psicoterapia es una obligación de medios calificados, no de resultados garantizados infalibles) o denigrar otras disciplinas sanitarias mediante reclamos mercantiles fraudulentos.",
    "distractorRationale": {
      "A": "El \"optimismo\" comercial no justifica la desinformación ni la captación engañosa de pacientes vulnerables.",
      "C": "Los tributos municipales son ajenos a la legalidad y rectitud deontológica sanitaria del contenido publicitario.",
      "D": "Las autoridades sanitarias vigilan y sancionan los anuncios que pongan en riesgo la salud pública."
    }
  },
  {
    "id": "cssp-jvpps-37",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Detección de Falsos Recuerdos y Técnicas Sugestivas Peligrosas",
    "legalBasis": "Guía de Buenas Prácticas Forenses y Evaluación Testimonial de la JVPPS.",
    "statement": "Durante una terapia para \"recuperar memorias reprimidas\", el psicólogo utiliza preguntas fuertemente sugestivas, hipnosis directiva y presión verbal hasta que la consultante \"recuerda\" haber sido víctima de rituales satánicos a los 2 años de edad por parte de sus padres. Conforme a la psicología cognitiva del testimonio y la neurociencia de la memoria, ¿cuál es el peligro de esta práctica?",
    "options": {
      "A": "La memoria humana es una grabadora de video perfecta que nunca se altera por la sugestión.",
      "B": "Las técnicas sugestivas directivas e hipnóticas intensas tienen un elevadísimo riesgo de implantar \"Falsos Recuerdos\" (pseudomemorias) vívidos y altamente creíbles para el paciente pero biográficamente falsos, provocando la destrucción injustificada de familias y procesos judiciales viciados.",
      "C": "Es la única técnica avalada por la ciencia forense internacional.",
      "D": "No existe ningún peligro si el psicólogo cobra por adelantado."
    },
    "correctAnswer": "B",
    "explanation": "La evidencia científica (encabezada por Elizabeth Loftus y la ciencia cognitiva) demuestra que la memoria es reconstructiva y altamente maleable. El uso de hipnosis directiva y preguntas sugestivas en busca de \"memorias reprimidas\" implanta recuerdos falsos con devastadoras consecuencias personales y legales, siendo una práctica rechazada por la lex artis.",
    "distractorRationale": {
      "A": "La memoria humana no es un registro audiovisual estático inmutable; es susceptible de distorsión y contaminación por inducción externa.",
      "C": "La implantación de pseudomemorias está unánimemente condenada por las asociaciones de psicología científica internacionales.",
      "D": "El aspecto económico es irrelevante ante la gravedad del daño psíquico y judicial infligido al paciente y su entorno."
    }
  },
  {
    "id": "cssp-jvpps-38",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Trastornos de Ansiedad: Ataque de Pánico vs Síntomas Somáticos",
    "legalBasis": "Criterios Diagnósticos del DSM-5-TR y Guía de Abordaje de Urgencias de la JVPPS.",
    "statement": "Un paciente de 30 años sin antecedentes médicos previos acude a la consulta psicológica refiriendo opresión torácica súbita intensa, palpitaciones, sudoración fría, disnea y sensación inminente de muerte iniciada hace 20 minutos. Antes de atribuir con certeza el cuadro a un Ataque de Pánico (Crisis de Angustia), ¿cuál es la conducta prudente indispensable?",
    "options": {
      "A": "Hacer que el paciente respire en una bolsa de plástico durante 2 horas seguidas sin chequeo médico.",
      "B": "Asegurar el descarte médico previo de causas orgánicas potencialmente mortales (como infarto agudo de miocardio, embolismo pulmonar, arritmias o feocromocitoma) mediante evaluación en un servicio de urgencias médicas antes de asumir un diagnóstico puramente psicógeno.",
      "C": "Iniciar de inmediato terapia regresiva de vidas pasadas.",
      "D": "Decirle al paciente que no tiene nada y que se vaya a trabajar caminando."
    },
    "correctAnswer": "B",
    "explanation": "Los ataques de pánico comparten síntomas idénticos a emergencias cardiovasculares o respiratorias potencialmente mortales (dolor precordial, disnea, diaforesis, taquicardia). La lex artis psicológica exige descartar de forma fehaciente mediante electrocardiograma y troponinas cualquier patología orgánica aguda antes de rotular el evento como psicógeno.",
    "distractorRationale": {
      "A": "Respirar en una bolsa ante una isquemia miocárdica o asma aguda incrementa la hipoxia y puede provocar un paro cardiorrespiratorio fatal.",
      "C": "Las técnicas regresivas carecen de sentido en una situación de sospecha de evento médico agudo.",
      "D": "Desestimar síntomas torácicos agudos constituye negligencia grave si el paciente está cursando un síndrome coronario agudo."
    }
  },
  {
    "id": "cssp-jvpps-39",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Atención a la Diversidad Sexual y No Discriminación",
    "legalBasis": "Constitución de El Salvador Art. 3, Declaración Universal de DDHH y Principios de la JVPPS.",
    "statement": "Una persona adulta acude a consulta psicológica solicitando apoyo para la aceptación familiar de su orientación sexual homosexual. Conforme al marco ético de la psicología moderna y los derechos fundamentales, ¿cuál es el abordaje profesional y científico exigido?",
    "options": {
      "A": "Intentar convencer al paciente de que la homosexualidad es una enfermedad mental que debe curarse con rezos.",
      "B": "Brindar una Terapia Afirmativa y de apoyo psicosocial que promueva la autoaceptación, el afrontamiento del estrés de minorías y la resolución de conflictos familiares, recordando que la homosexualidad no es una patología ni trastorno mental según la OMS y la Asociación Psiquiátrica Americana (APA).",
      "C": "Cobrarle honorarios triplicados por \"caso pecaminoso\".",
      "D": "Informar a los empleadores del paciente sobre su orientación sexual sin su autorización."
    },
    "correctAnswer": "B",
    "explanation": "Desde 1973 (APA) y 1990 (OMS), la orientación homosexual y bisexual fue formalmente retirada de los catálogos de trastornos mentales por ser variantes normales de la sexualidad humana. La labor del psicólogo es proveer psicoterapia afirmativa y libre de discriminación, fortaleciendo la resiliencia frente al estigma social.",
    "distractorRationale": {
      "A": "Patologizar la orientación sexual viola el consenso científico internacional y genera depresión y daño iatrogénico.",
      "C": "El cobro discriminatorio de tarifas con base en prejuicios morales constituye una falta ética gravísima.",
      "D": "Revelar aspectos íntimos a empleadores viola el secreto profesional y acarrea demandas por discriminación laboral."
    }
  },
  {
    "id": "cssp-jvpps-40",
    "juntaId": "jvpps",
    "juntaName": "Junta de Vigilancia de la Profesión en Psicología",
    "area": "Deber de Denuncia Deontológica ante Malas Prácticas de Colegas",
    "legalBasis": "Código de Ética del Profesional de la Psicología de El Salvador y Ley del Ejercicio de la Psicología.",
    "statement": "Un psicólogo tiene conocimiento fehaciente y pruebas documentales de que un colega inscrito en la JVPPS está cobrando dinero por extender certificados psicológicos falsos de salud mental sin haber evaluado jamás a los solicitantes, permitiendo que personas inestables porten armas de fuego. Tras intentar dialogar privadamente sin éxito, ¿cuál es la obligación deontológica del profesional?",
    "options": {
      "A": "Guardar silencio cómplice para proteger el prestigio gremial y no enemistarse con el colega.",
      "B": "Interponer la denuncia formal documentada ante la Junta de Vigilancia de la Profesión en Psicología (JVPPS) y las autoridades penales competentes (FGR), ya que la protección de la seguridad colectiva y la integridad de la profesión prevalecen sobre la solidaridad gremial mal entendida.",
      "C": "Asociarse con el colega para compartir el negocio de los certificados falsos.",
      "D": "Publicar insultos anónimos en foros de internet sin presentar pruebas a las autoridades."
    },
    "correctAnswer": "B",
    "explanation": "El Código de Ética de la JVPPS prohíbe el encubrimiento de delitos o faltas éticas graves cometidas por colegas. Facilitar armas de fuego mediante certificados falsificados atenta contra la seguridad nacional y la vida humana; el deber de probidad exige denunciar formalmente el hecho ante la Junta de Vigilancia y la Fiscalía.",
    "distractorRationale": {
      "A": "La falsa lealtad gremial (\"omertà\") corrompe la profesión y convierte al testigo en cómplice de la falsedad documental.",
      "C": "Participar de la emisión de certificados falsos es un delito de falsedad material e ideológica con condena penal carcelaria.",
      "D": "Las quejas anónimas en foros no activan los mecanismos legales disciplinarios y no detienen el peligro social."
    }
  }
];
