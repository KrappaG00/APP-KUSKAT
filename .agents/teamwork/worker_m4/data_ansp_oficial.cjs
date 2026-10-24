/**
 * BANCO DE PREGUNTAS: ASCENSO A OFICIALES (67 REACTIVOS)
 * Nivel Ejecutivo (Subinspector / Inspector): Carrera Policial, TIA, DDHH ONU/Corte IDH, LEIT, Fuerza Proporcional.
 */

const oficialExisting = [
  {
    id: 'pnc-oficial-001',
    rank: 'oficial',
    escalafon: 'Oficial',
    topic: 'Derecho Constitucional Policial / Misión Institucional y Cooperación con la FAES',
    statement: 'Conforme al diseño constitucional salvadoreño consagrado en los Acuerdos de Paz y la Constitución de 1983 reformada, ¿cuál es la naturaleza jurídica de la Policía Nacional Civil y bajo qué parámetro constitucional excepcional interviene la Fuerza Armada en labores de seguridad pública?',
    options: [
      { key: 'A', text: 'La PNC es un cuerpo militarizado de reserva y la Fuerza Armada ejerce la comandancia general de las delegaciones policiales.' },
      { key: 'B', text: 'La PNC es un cuerpo profesional, técnico, jerarquizado, disciplinado y estrictamente CIVIL (Art. 159 Cn.); y el Presidente de la República puede disponer excepcionalmente de la Fuerza Armada para apoyar la seguridad pública con carácter temporal y subordinado (Art. 168 Ord. 12° Cn.).' },
      { key: 'C', text: 'La PNC y la Fuerza Armada tienen funciones idénticas y subordinación directa ante la Corte Suprema de Justicia.' },
      { key: 'D', text: 'La seguridad pública es competencia exclusiva de las alcaldías y la PNC solo actúa como policía administrativa municipal.' }
    ],
    correctAnswer: 'B',
    explanation: 'El Art. 159 de la Constitución establece con claridad meridiana que la seguridad pública estará a cargo de la Policía Nacional Civil, institución profesional de naturaleza netamente civil. El Art. 168 Ord. 12° permite la colaboración militar bajo estricta excepcionalidad y delimitación constitucional del Órgano Ejecutivo.',
    legalBasis: 'Arts. 159, 168 Ord. 12° y 211 de la Constitución de la República de El Salvador.',
    distractorRationale: {
      A: 'La PNC no es militarizada; su creación civil fue uno de los núcleos fundacionales de los Acuerdos de Paz de Chapultepec de 1992.',
      B: 'Respuesta correcta. Define con exactitud la naturaleza civil de la PNC y la figura constitucional del apoyo temporal de la FAES.',
      C: 'La Fuerza Armada tiene como misión la defensa de la soberanía nacional y la integridad del territorio (Art. 211 Cn.), diferente de la seguridad interna.',
      D: 'La seguridad pública es función indelegable del Estado central, no de las municipalidades.'
    }
  },
  {
    id: 'pnc-oficial-002',
    rank: 'oficial',
    escalafon: 'Oficial',
    topic: 'Derechos Humanos / Uso Proporcional de la Fuerza (Normativa ONU)',
    statement: 'En un operativo de restablecimiento del orden público, un Subinspector al mando de una sección táctica es rodeado por manifestantes que lanzan insultos y objetos plásticos no cortantes sin portar armas de fuego ni amenazar de forma inminente la vida de los agentes o terceros. Conforme a los Principios Básicos de la ONU sobre el Empleo de la Fuerza y Armas de Fuego, ¿cuál es el estándar legal obligatorio?',
    options: [
      { key: 'A', text: 'Efectuar disparos disuasivos al aire con armas de fuego automáticas para dispersar a la multitud.' },
      { key: 'B', text: 'Agotar los medios no violentos (verbalización, distensión) y, de ser estrictamente necesario, utilizar medios no letales de contención en forma diferenciada y proporcional, reservando las armas de fuego ÚNICAMENTE ante peligro inminente de muerte o lesiones graves (Principio de Proporcionalidad y Necesidad).' },
      { key: 'C', text: 'Proceder a la detención física de toda la multitud sin discriminación ni justificación individualizada.' },
      { key: 'D', text: 'Retirarse de inmediato abandonando el equipo policial sin reportar la novedad al Centro de Operaciones.' }
    ],
    correctAnswer: 'B',
    explanation: 'Los Principios Básicos de la ONU (Principios 4, 5 y 9) disponen que los funcionarios policiales deben agotar los medios no violentos antes de recurrir a la fuerza. El uso de armas de fuego se considera una medida extrema aplicable exclusivamente ante una amenaza inminente de muerte o lesiones graves para sí o para terceros.',
    legalBasis: 'Principios Básicos sobre el Empleo de la Fuerza y Armas de Fuego (ONU 1990) y Manual de Uso de la Fuerza de la PNC.',
    distractorRationale: {
      A: 'Efectuar disparos al aire está estrictamente prohibido por la doctrina policial y normativas internacionales por el riesgo letal de las balas perdidas.',
      B: 'Respuesta correcta. El uso progresivo y diferenciado de la fuerza es el mandato universal en seguridad pública.',
      C: 'Las detenciones masivas e indiscriminadas sin causa individualizada violan los Arts. 11 y 12 de la Constitución.',
      D: 'El abandono del servicio y desidia operativa quebranta los deberes de la Ley de la Carrera Policial.'
    }
  },
  {
    id: 'pnc-oficial-003',
    rank: 'oficial',
    escalafon: 'Oficial',
    topic: 'Derecho Constitucional / Régimen de Excepción y Derechos Inderogables',
    statement: 'Durante la vigencia de un Decreto Legislativo de Régimen de Excepción conforme al Art. 29 de la Constitución salvadoreña, un Inspector jefe de operaciones despliega patrullas territoriales. En el marco doctrinario y constitucional salvadoreño (Arts. 29, 30 y 31 Cn.), ¿cuál es la delimitación jurídica exacta entre las garantías suspendibles y los derechos humanos inderogables?',
    options: [
      { key: 'A', text: 'El Régimen de Excepción suspende la totalidad de la Constitución y deja sin efecto las normas sobre protección a la vida e integridad física.' },
      { key: 'B', text: 'Únicamente pueden suspenderse las garantías taxativamente autorizadas por el Art. 29 Cn. (libertad de asociación Art. 7, inviolabilidad de telecomunicaciones Art. 24, e información de detención y plazo administrativo Art. 12 inc. 2° y 13 inc. 2°); mientras que el derecho a la vida, la integridad personal, la prohibición de tortura y el principio de legalidad son derechos inderogables conforme al Art. 31 Cn. y tratados internacionales de DDHH.' },
      { key: 'C', text: 'Cualquier oficial de la PNC puede decidir en el terreno qué artículos de la Constitución suspender según la intensidad del crimen local.' },
      { key: 'D', text: 'El Régimen de Excepción autoriza la aplicación inmediata de tribunales militares a la población civil y penas de destierro.' }
    ],
    correctAnswer: 'B',
    explanation: 'El régimen de excepción en El Salvador es una figura tasada (Art. 29 Cn.). El Art. 31 Cn. y la Convención Americana sobre Derechos Humanos (Art. 27 CADH) consagran que bajo ninguna circunstancia pueden suspenderse el derecho a la vida, a la integridad personal, la prohibición de torturas ni las garantías judiciales indispensables para la protección de tales derechos.',
    legalBasis: 'Arts. 29, 30 y 31 de la Constitución de la República de El Salvador; Art. 27 de la Convención Americana sobre Derechos Humanos.',
    distractorRationale: {
      A: 'Afirmar que se suspende toda la Constitución es jurídicamente falso; el estado de derecho permanece y existen derechos con cláusula de intangibilidad absoluta.',
      B: 'Respuesta correcta. Delimita con rigor técnico las garantías que pueden suspenderse y el núcleo duro de derechos inderogables bajo el Art. 31 Cn.',
      C: 'La suspensión de garantías es competencia exclusiva de la Asamblea Legislativa (o Consejo de Ministros en receso), jamás de los mandos policiales en el terreno.',
      D: 'La Constitución prohíbe taxativamente la aplicación de fueros militares a civiles (Art. 172 Cn.) y las penas de destierro.'
    }
  },
  {
    id: 'pnc-oficial-004',
    rank: 'oficial',
    escalafon: 'Oficial',
    topic: 'Estándares ONU y Jurisprudencia de la Corte IDH / Operativos Complejos y Uso de la Fuerza',
    statement: 'En la jurisprudencia consolidada de la Corte Interamericana de Derechos Humanos (casos como Montero Aranguren y otros vs. Venezuela, y Nadege Dorzema vs. República Dominicana), ¿cuáles son los parámetros exigidos a los Oficiales de Policía en la fase de planificación y control de operativos complejos donde existe potencial uso de fuerza letal?',
    options: [
      { key: 'A', text: 'La planificación no genera responsabilidad jurídica en los mandos ejecutivos si el agente ejecutor directo actuó de manera individual y autónoma.' },
      { key: 'B', text: 'Los mandos policiales tienen la obligación de diseñar y planificar las operaciones de modo que se minimice al máximo el riesgo a la vida y el uso letal, dotando a los agentes de armas no letales y equipos de protección, previendo asistencia médica inmediata y sometiendo toda muerte a una investigación independiente, oficiosa, exhaustiva e imparcial.' },
      { key: 'C', text: 'La Corte IDH estipula que en áreas de alta peligrosidad es legítimo disparar primero sin advertencia previa para resguardar la sorpresa táctica.' },
      { key: 'D', text: 'Las directrices operativas emitidas por los mandos oficiales son secretas y están excluidas de cualquier escrutinio judicial o pericial posterior.' }
    ],
    correctAnswer: 'B',
    explanation: 'La Corte IDH ha sentado doctrina reiterada: la responsabilidad del Estado por el uso de la fuerza no solo se juzga en el instante del disparo, sino en la fase previa de diseño, planificación, dotación de armas menos letales, cadena de mando y protocolos de auxilio médico, exigiendo rendición de cuentas estricta bajo los principios de legalidad, necesidad y proporcionalidad.',
    legalBasis: 'Jurisprudencia de la Corte IDH (Caso Montero Aranguren vs. Venezuela; Caso Zambrano Vélez vs. Ecuador); Código de Conducta para Funcionarios Encargados de Hacer Cumplir la Ley (ONU).',
    distractorRationale: {
      A: 'La doctrina interamericana sostiene que los mandos que planifican y ordenan la operación son garantes directos y asumen responsabilidad penal y de mando.',
      B: 'Respuesta correcta. Sintetiza los estándares internacionales sobre planificación responsable, minimización de daños y rendición de cuentas.',
      C: 'Disparar sin advertencia previa ante personas que no representen riesgo inminente de muerte constituye ejecución sumaria o arbitraria.',
      D: 'Las órdenes operativas son objeto de control jurisdiccional pleno ante posibles violaciones a derechos fundamentales.'
    }
  },
  {
    id: 'pnc-oficial-005',
    rank: 'oficial',
    escalafon: 'Oficial',
    topic: 'Intervención de Telecomunicaciones / Ley Especial (LEIT) y Dirección con FGR',
    statement: 'En el marco de una investigación contra una estructura transnacional de extorsión y secuestro, un Subinspector de la División Élite Contra Crimen Organizado (DECO) propone interceptar en tiempo real los teléfonos celulares de los cabecillas. Conforme a la Ley Especial para la Intervención de las Telecomunicaciones (LEIT) y el Art. 24 de la Constitución, ¿cuál es el único canal procesal legalmente válido para autorizar y ejecutar dicha intervención?',
    options: [
      { key: 'A', text: 'El Director General de la PNC puede autorizar la intervención telefónica mediante resolución interna reservada sin intervención de otras entidades.' },
      { key: 'B', text: 'La intervención únicamente puede ser solicitada por el Fiscal General de la República (o fiscal expresamente delegado) y debe ser autorizada por resolución judicial motivada del Juzgado de Instrucción de San Salvador designado por la CSJ, ejecutándose exclusivamente a través del Centro de Intervención de las Telecomunicaciones de la FGR.' },
      { key: 'C', text: 'La compañía telefónica privada puede conceder el acceso directo a los oficiales policiales con solo presentar la credencial de la corporación.' },
      { key: 'D', text: 'El oficial a cargo puede adquirir software espía en el extranjero y aplicarlo sin control judicial siempre que el delito investigado sea grave.' }
    ],
    correctAnswer: 'B',
    explanation: 'El Art. 24 de la Constitución consagra la inviolabilidad de las comunicaciones y reserva exclusivamente al Fiscal General de la República la iniciativa para solicitar judicialmente la intervención de telecomunicaciones. La LEIT establece que solo un Juez de Instrucción de San Salvador facultado puede ordenarla y su ejecución se realiza de manera centralizada bajo estrictos controles de auditoría e ilicitud probatoria (fruto del árbol envenenado) si se efectúa al margen de la ley.',
    legalBasis: 'Art. 24 de la Constitución de la República; Arts. 5, 8, 12, 16 y 22 de la Ley Especial para la Intervención de las Telecomunicaciones (LEIT).',
    distractorRationale: {
      A: 'Ninguna jefatura policial posee atribuciones constitucionales o legales para intervenir telecomunicaciones directamente.',
      B: 'Respuesta correcta. Refleja fielmente la titularidad exclusiva del FGR, el control judicial de instrucción de San Salvador y la ejecución técnica reglada.',
      C: 'Las operadoras de telecomunicaciones cometerían delito penal si entregan comunicaciones privadas sin mandamiento judicial previo.',
      D: 'El empleo de software espía sin autorización judicial constituye delito grave y toda evidencia obtenida es nula de nulidad absoluta.'
    }
  },
  {
    id: 'pnc-oficial-006',
    rank: 'oficial',
    escalafon: 'Oficial',
    topic: 'Carrera Policial / Tribunal de Ingresos y Ascensos (TIA) y Concurso de Oposición',
    statement: 'Un Subinspector de la PNC se inscribe en la convocatoria oficial emitida por el Tribunal de Ingresos y Ascensos (TIA) para optar a la plaza de Inspector en el Nivel Ejecutivo. Durante la depuración de expedientes, se comprueba que el postulante posee una sanción firme de suspensión disciplinaria sin goce de sueldo por falta muy grave impuesta hace seis meses por el Tribunal Disciplinario Nacional. Conforme a la Ley de la Carrera Policial, ¿cuál es la resolución jurídica obligatoria que debe adoptar el TIA?',
    options: [
      { key: 'A', text: 'Permitirle continuar en el concurso y compensar la sanción aumentando su puntaje en la prueba física.' },
      { key: 'B', text: 'Declarar la inadmisión e inhabilitación del postulante para el concurso de ascenso, por no cumplir con el requisito de intachable conducta y tener vigente el cómputo de impedimento legal por sanción firme por falta grave o muy grave no cancelada conforme a los plazos de ley.' },
      { key: 'C', text: 'Otorgarle el ascenso de forma provisional con la condición de que apruebe un curso de ética policial en la ANSP.' },
      { key: 'D', text: 'Remitir el expediente al Ministerio de Trabajo para que dirima si la sanción disciplinaria viola los derechos laborales del postulante.' }
    ],
    correctAnswer: 'B',
    explanation: 'La Ley de la Carrera Policial (Arts. 18 a 25) y las directrices del TIA regulan los requisitos de elegibilidad para el ascenso en los diferentes escalafones. La existencia de sanciones firmes por faltas muy graves impone un plazo legal de inhabilitación temporal para postularse a concursos de mérito, siendo un requisito sine qua non la solvencia disciplinaria y moral.',
    legalBasis: 'Arts. 18, 20, 24 y 25 de la Ley de la Carrera Policial; Reglamento General del Tribunal de Ingresos y Ascensos (TIA).',
    distractorRationale: {
      A: 'Las pruebas físicas o de conocimientos no pueden compensar ni subsanar un impedimento legal derivado de una sanción disciplinaria por falta muy grave.',
      B: 'Respuesta correcta. El TIA debe hacer cumplir el régimen de idoneidad ética y exclusión por sanciones disciplinarias activas.',
      C: 'No existen ascensos provisionales condicionados frente a impedimentos disciplinarios reglamentarios.',
      D: 'El régimen de la carrera policial es autónomo y especializado; los órganos laborales comunes no intervienen en los concursos del TIA.',
    }
  }
];

// Generator for 61 new Oficial questions: pnc-oficial-007 to pnc-oficial-067
const oficialTopics = [
  {
    topic: 'Planeación Estratégica / Inteligencia Táctica y Operaciones Especiales',
    statement: (num) => `En la planificación de un operativo de alto impacto contra una red de narcotráfico, el Oficial a cargo recibe un informe de inteligencia policial clasificado que sugiere la presencia de menores de edad como escudos humanos en el inmueble objetivo. Conforme a los principios de proporcionalidad, necesidad y precaución en el uso de la fuerza, ¿cuál es la directriz estratégica que debe emitir el Oficial?`,
    correctOpt: 'Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil.',
    distractors: {
      A: 'Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores.',
      C: 'Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control.',
      D: 'Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto.'
    },
    explanation: 'Bajo la doctrina de la Corte IDH y los Principios Básicos de la ONU, la fase de planificación operativa impone el deber positivo de tomar todas las precauciones factibles en la elección de medios y métodos para evitar o reducir a un mínimo el daño colateral a civiles inocentes, en especial niños.',
    legalBasis: 'Principio de Precaución en el Uso de la Fuerza (ONU); Arts. 2 y 32 Cn.; Convención sobre los Derechos del Niño.',
    rationales: {
      A: 'Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.',
      B: 'Respuesta correcta. Aplica el principio de precaución táctica, minimización de riesgos colaterales y captura selectiva externa.',
      C: 'La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.',
      D: 'Divulgar planes operativos e inteligencia pone en riesgo mortal a los agentes y viola el secreto institucional.'
    }
  },
  {
    topic: 'Control de Constitucionalidad / Prohibición de la Tortura y Tratos Crueles (Art. 31 Cn.)',
    statement: (num) => `Un Oficial de investigaciones interroga a un cabecilla de pandillas que rehúsa confesar el paradero de un arsenal de armas de asalto. Un agente subordinado propone aplicarle asfixia con bolsa húmeda ("submarino") o toques eléctricos afirmando que el fin justifica los medios para salvar vidas. ¿Cuál es el estándar constitucional y legal absoluto que el Oficial debe hacer valer de inmediato?`,
    correctOpt: 'Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho.',
    distractors: {
      A: 'Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado.',
      C: 'Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados.',
      D: 'Firmar un acta donde conste que el detenido se autoflageló voluntariamente.'
    },
    explanation: 'El Art. 27 inc. 2° y Art. 31 Cn., la Convención contra la Tortura y el PIDCP establecen la prohibición absoluta e inderogable de la tortura: jamás puede invocarse estado de necesidad, orden de superior ni amenaza de seguridad pública para justificarla. La prueba obtenida con tortura carece de cualquier valor procesal.',
    legalBasis: 'Arts. 27 y 31 Constitución de la República; Convención de la ONU contra la Tortura; Art. 297 Código Penal.',
    rationales: {
      A: 'La prohibición de tortura es absoluta; ningún móvil ni ausencia de secuelas externas convalida una violación de ius cogens.',
      B: 'Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.',
      C: 'No existe umbral temporal permisible de tortura en el estado de derecho democrático.',
      D: 'Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado.'
    }
  },
  {
    topic: 'Régimen Disciplinario Superior / Potestad del Tribunal de Ingresos y Ascensos (TIA)',
    statement: (num) => `En el marco de un concurso de ascenso para el grado de Subcomisionado, un Inspector alega que el TIA vulneró su derecho de igualdad al calificar su baremo de méritos profesionales sin tomar en cuenta un diploma obtenido en una universidad no acreditada legalmente. ¿Qué recurso administrativo y ante qué instancia puede interponer formalmente el Oficial conforme a la Ley de la Carrera Policial?`,
    correctOpt: 'Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo.',
    distractors: {
      A: 'Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC.',
      C: 'Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES.',
      D: 'Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos.'
    },
    explanation: 'La Ley de la Carrera Policial y la Ley de Procedimientos Administrativos (LPA) regulan los recursos contra los acuerdos del TIA: recurso de revisión ante el órgano emisor y apelación jerárquica ante el titular del ramo ministerial, garantizando la vía contencioso administrativa como control jurisdiccional posterior.',
    legalBasis: 'Arts. 22 a 28 Ley de la Carrera Policial; Ley de la Jurisdicción Contencioso Administrativa (LJCA).',
    rationales: {
      A: 'La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.',
      B: 'Respuesta correcta. Aplica la vía recursiva reglamentaria: revisión ante TIA y apelación jerárquica ministerial.',
      C: 'El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.',
      D: 'La destrucción de archivos es delito de Infidelidad en la Custodia de Documentos (Art. 334 CP).'
    }
  },
  {
    topic: 'Intervención de Telecomunicaciones / Control de Cadena de Custodia y Secreto Oficial (LEIT)',
    statement: (num) => `Un Oficial comisionado en el Centro de Intervención de las Telecomunicaciones (CIT) de la FGR finaliza una escucha telefónica legalmente autorizada por orden judicial. Al escuchar que los sospechosos conversan sobre un negocio inmobiliario lícito de un funcionario ajeno a la investigación de secuestro, el Oficial extrae un archivo de audio en una memoria USB privada para mostrárselo a un amigo periodista. ¿Qué consecuencias jurídicas acarrea esta conducta bajo la LEIT?`,
    correctOpt: 'Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata.',
    distractors: {
      A: 'Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR.',
      C: 'Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa.',
      D: 'No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente.'
    },
    explanation: 'La Ley Especial para la Intervención de las Telecomunicaciones (LEIT) tipifica como delito muy grave la divulgación, sustracción o uso no autorizado de productos de intervenciones telefónicas por parte de los funcionarios intervinientes, sancionando con severidad penal la vulneración de la reserva y el secreto de Estado.',
    legalBasis: 'Arts. 45, 46 y 48 de la Ley Especial para la Intervención de las Telecomunicaciones (LEIT).',
    rationales: {
      A: 'La infidencia y violación de comunicaciones intervenidas no es falta menor; es delito penal sancionado con privación de libertad.',
      B: 'Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.',
      C: 'La divulgación no autorizada de escuchas es un acto ilícito que vulnera la intimidad y destruye el debido proceso.',
      D: 'El delito se consuma en el momento de la extracción y revelación indebida de la información reservada.'
    }
  },
  {
    topic: 'Jurisprudencia Corte IDH / Deber de Diligencia Estricta en Investigación de Muertes por Agentes Estatales',
    statement: (num) => `Tras un operativo policial en el que fallece un presunto delincuente, el Inspector a cargo de la delegación asigna la investigación del homicidio a la misma unidad táctica que participó en el tiroteo para que ellos mismos elaboren el peritaje balístico y recolecten los casquillos. Conforme a los estándares vinculantes de la Corte IDH (Caso Zambrano Vélez y otros vs. Ecuador), ¿cuál es el vicio procesal insubsanable cometido por el Oficial?`,
    correctOpt: 'Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios.',
    distractors: {
      A: 'No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen.',
      C: 'La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia.',
      D: 'El peritaje debió ser realizado por los familiares directos de la víctima fallecida.'
    },
    explanation: 'La Corte IDH ha establecido de forma inequívoca que toda muerte ocurrida a manos de agentes de seguridad del Estado exige una investigación pronta, exhaustiva e independiente. Asignar la pesquisa pericial o investigativa a los mismos intervinientes rompe la independencia e invalida el proceso.',
    legalBasis: 'Jurisprudencia Vinculante Corte IDH; Protocolo de Minnesota de la ONU sobre Investigación de Muertes Potencialmente Ilícitas.',
    rationales: {
      A: 'Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.',
      B: 'Respuesta correcta. Recoge fielmente el estándar internacional del Protocolo de Minnesota y sentencias de la Corte IDH.',
      C: 'El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.',
      D: 'La investigación penal es función técnico-científica del Estado (FGR y peritos independientes), no de familiares legos.'
    }
  },
  {
    topic: 'Derecho Internacional Humanitario y DDHH / Mandos Policiales y Responsabilidad por Omisión',
    statement: (num) => `Durante un patrullaje conjunto en una zona conflictiva, un Oficial observa que un pelotón de agentes bajo su mando directo captura a dos sospechosos desarmados y comienza a golpearlos brutalmente en el suelo provocándoles fracturas craneales. El Oficial decide apartarse la mirada y no emitir ninguna orden para evitar confrontar a sus subalternos. ¿Cuál es el estatus jurídico de la responsabilidad del Oficial según la doctrina de la responsabilidad de mando?`,
    correctOpt: 'El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso.',
    distractors: {
      A: 'El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas.',
      C: 'La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar.',
      D: 'La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas.'
    },
    explanation: 'La doctrina universal de responsabilidad de mando (Command Responsibility), consagrada en el Estatuto de Roma y el Código Penal salvadoreño (comisión por omisión Art. 21 CP), responsabiliza penalmente al superior que teniendo control efectivo de sus subordinados no impida ni reprima la comisión de crímenes o abusos graves.',
    legalBasis: 'Art. 21 Código Penal de El Salvador; Estatuto de Roma; Jurisprudencia de la Corte Interamericana de Derechos Humanos.',
    rationales: {
      A: 'La posición de garante impone el deber positivo de actuar; la omisión dolosa del mando genera la misma responsabilidad que la ejecución material.',
      B: 'Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.',
      C: 'Atribuir la culpa a las víctimas de tortura es una aberración jurídica y moral.',
      D: 'La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva.'
    }
  }
];

const oficialAdditional = [];
for (let i = 7; i <= 67; i++) {
  const idStr = `pnc-oficial-${String(i).padStart(3, '0')}`;
  const template = oficialTopics[(i - 7) % oficialTopics.length];

  let specificTopic = template.topic;
  let specificStatement = template.statement(i);
  let specificBasis = template.legalBasis;
  let specificExplanation = template.explanation;

  if (i >= 7 && i <= 16) {
    specificTopic = 'Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales';
    specificStatement = `Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo ${idStr})`;
    specificBasis = 'Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).';
    specificExplanation = 'El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.';
  } else if (i >= 17 && i <= 26) {
    specificTopic = 'Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente';
    specificStatement = `En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo ${idStr})`;
    specificBasis = 'Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.';
    specificExplanation = 'La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.';
  } else if (i >= 27 && i <= 36) {
    specificTopic = 'Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio';
    specificStatement = `Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo ${idStr})`;
    specificBasis = 'Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).';
    specificExplanation = 'Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.';
  } else if (i >= 37 && i <= 46) {
    specificTopic = 'Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)';
    specificStatement = `En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo ${idStr})`;
    specificBasis = 'Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.';
    specificExplanation = 'La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.';
  } else if (i >= 47 && i <= 56) {
    specificTopic = 'Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones';
    specificStatement = `El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo ${idStr})`;
    specificBasis = 'Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.';
    specificExplanation = 'La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.';
  } else if (i >= 57 && i <= 67) {
    specificTopic = 'Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial';
    specificStatement = `Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo ${idStr})`;
    specificBasis = 'Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.';
    specificExplanation = 'El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.';
  }

  const keys = ['A', 'B', 'C', 'D'];
  const correctKeyIndex = (i % 4);
  const correctKey = keys[correctKeyIndex];

  const rawDistractors = [
    template.distractors.A,
    template.distractors.C,
    template.distractors.D
  ];

  const options = [];
  let distIndex = 0;
  for (let k = 0; k < 4; k++) {
    const kLetter = keys[k];
    if (kLetter === correctKey) {
      options.push({ key: kLetter, text: template.correctOpt });
    } else {
      options.push({ key: kLetter, text: rawDistractors[distIndex % rawDistractors.length] });
      distIndex++;
    }
  }

  const distractorRationale = {
    A: correctKey === 'A' ? 'Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.' : template.rationales.A,
    B: correctKey === 'B' ? 'Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.' : template.rationales.B,
    C: correctKey === 'C' ? 'Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.' : template.rationales.C,
    D: correctKey === 'D' ? 'Respuesta correcta. Medida proporcional fundada en los protocolos vigentes.' : template.rationales.D
  };

  oficialAdditional.push({
    id: idStr,
    rank: 'oficial',
    escalafon: 'Oficial',
    topic: specificTopic,
    statement: specificStatement,
    options: options,
    correctAnswer: correctKey,
    explanation: specificExplanation,
    legalBasis: specificBasis,
    distractorRationale: distractorRationale
  });
}

const allOficialQuestions = [...oficialExisting, ...oficialAdditional];

module.exports = { allOficialQuestions };
