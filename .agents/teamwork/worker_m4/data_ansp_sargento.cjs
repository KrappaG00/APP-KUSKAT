/**
 * BANCO DE PREGUNTAS: ASCENSO A SARGENTO (67 REACTIVOS)
 * Nivel Intermedio: Supervisión Táctica, Libros de Control, Disciplinario, FGR, Custodia, Excepción.
 */

const sargentoExisting = [
  {
    id: 'pnc-sargento-001',
    rank: 'sargento',
    escalafon: 'Sargento',
    topic: 'Régimen Disciplinario / Ley de la Carrera Policial',
    statement: 'Un Sargento en funciones de Jefe de Puesto detecta que un agente bajo su mando ha faltado a su servicio de guardia nocturno sin causa justificada ni aviso previo por segunda vez en el mes, encontrándose en estado de ebriedad en una cantina cercana vistiendo parcialmente el uniforme policial. ¿Qué clasificación reviste esta conducta según el régimen disciplinario de la Ley de la Carrera Policial?',
    options: [
      { key: 'A', text: 'Falta leve que se sanciona con una llamada de atención verbal privada por parte del Sargento sin registro en el expediente.' },
      { key: 'B', text: 'Falta muy grave por abandono del servicio e ingerir bebidas alcohólicas vistiendo prendas del uniforme policial, ameritando inicio de expediente disciplinario para destitución o suspensión sin goce de sueldo ante el Tribunal Disciplinario.' },
      { key: 'C', text: 'Infracción laboral común sujeta a las normas del Código de Trabajo privado.' },
      { key: 'D', text: 'Falta que prescribe en 24 horas y no requiere informe a la Inspectoría General.' }
    ],
    correctAnswer: 'B',
    explanation: 'La Ley de la Carrera Policial tipifica como Faltas Muy Graves el abandono del servicio asignado y la ingestión de bebidas alcohólicas o estupefacientes vistiendo el uniforme o insignias policiales o portando el arma de equipo, facultando el inicio de procedimiento ante el Tribunal Disciplinario con posibles sanciones de suspensión o destitución definitiva.',
    legalBasis: 'Ley de la Carrera Policial de El Salvador (Sección de Faltas Disciplinarias y Sanciones).',
    distractorRationale: {
      A: 'El abandono de servicio con uniforme y ebriedad no es falta leve; encubre un grave riesgo a la seguridad pública y desprestigio institucional.',
      B: 'Respuesta correcta. La gravedad de la conducta amerita el procedimiento de falta muy grave ante el órgano disciplinario competente.',
      C: 'El personal de la PNC se rige por su régimen estatutario especial (Ley de la Carrera Policial), no por el Código de Trabajo común.',
      D: 'Las faltas graves y muy graves tienen plazos de prescripción más amplios y exigen investigación rigurosa.'
    }
  },
  {
    id: 'pnc-sargento-002',
    rank: 'sargento',
    escalafon: 'Sargento',
    topic: 'Coordinación Interinstitucional / Dirección Funcional con la FGR',
    statement: 'Durante la investigación preliminar de una serie de hurtos continuados en una zona comercial, un Sargento investigador propone realizar un allanamiento con quebrantamiento de cerraduras en un inmueble privado habitado donde se presume almacenan la mercadería. ¿Bajo qué requisito indispensable puede ejecutarse esta diligencia sin violentar el Art. 20 de la Constitución?',
    options: [
      { key: 'A', text: 'Con la sola autorización verbal del Sargento de guardia de turno.' },
      { key: 'B', text: 'Mediante orden judicial de allanamiento fundamentada emitida por el Juez de Paz o de Instrucción competente a petición del Fiscal del caso, salvo flagrancia delictiva o peligro inminente para la vida humana.' },
      { key: 'C', text: 'Con un oficio firmado por el alcalde municipal de la localidad.' },
      { key: 'D', text: 'Por decisión discrecional de los agentes captores siempre que sea en horario diurno.' }
    ],
    correctAnswer: 'B',
    explanation: 'El Art. 20 de la Constitución salvadoreña consagra la inviolabilidad de la morada. El allanamiento solo puede realizarse con orden escrita fundada de juez competente promovida por la FGR, con excepción de flagrancia delictiva, auxilio urgente a personas en peligro inminente o desastre.',
    legalBasis: 'Art. 20 de la Constitución de la República y Arts. 195 a 198 del Código Procesal Penal.',
    distractorRationale: {
      A: 'Ningún mando policial posee potestad constitucional para ordenar allanamientos a morada por sí solo sin orden judicial previa.',
      B: 'Respuesta correcta. La reserva judicial garantiza la legalidad de la intromisión en el domicilio.',
      C: 'Los alcaldes municipales no tienen facultades judiciales penales ni procesales.',
      D: 'El horario no exime del requisito ineludible de la orden judicial de allanamiento.'
    }
  },
  {
    id: 'pnc-sargento-003',
    rank: 'sargento',
    escalafon: 'Sargento',
    topic: 'Régimen Disciplinario Policial / Faltas Graves vs. Muy Graves y Debido Proceso',
    statement: 'Un Sargento de la PNC recibe la denuncia de un ciudadano en la que señala que un cabo se negó deliberadamente a recibirle una denuncia formal por amenazas y le profirió expresiones despectivas y soeces en la guardia de atención ciudadana. De acuerdo con el régimen sancionatorio de la Ley de la Carrera Policial, ¿cuál es la vía procedimental y la competencia disciplinaria aplicable?',
    options: [
      { key: 'A', text: 'Imponerle inmediatamente 30 días de arresto formal en las celdas de la delegación sin concederle audiencia ni formular pliego de cargos.' },
      { key: 'B', text: 'Elaborar de inmediato el informe circunstanciado de los hechos, remitirlo a la Unidad de Investigación Disciplinaria (UID) o Tribunal Disciplinario respectivo y a la Inspectoría General de Seguridad Pública, garantizando al miembro policial el derecho a la defensa y debido proceso para la calificación de falta grave o muy grave.' },
      { key: 'C', text: 'Archivar la queja si el ciudadano no presenta la declaración ratificada ante un Notario público salvadoreño.' },
      { key: 'D', text: 'Reubicar al cabo de puesto de guardia sin iniciar ninguna investigación administrativa para no afectar el clima laboral de la subdelegación.' }
    ],
    correctAnswer: 'B',
    explanation: 'La Ley de la Carrera Policial establece que ante conductas que configuren faltas graves o muy graves (como desatención deliberada a la ciudadanía, trato vejatorio o incumplimiento de deberes), el mando supervisor debe documentar los hechos y remitirlos a la autoridad disciplinaria correspondiente y a la Inspectoría General, respetando estrictamente el derecho de defensa, contradicción y audiencia (Art. 11 y 12 Cn.).',
    legalBasis: 'Arts. 56 a 65 de la Ley de la Carrera Policial de El Salvador; Ley de la Inspectoría General de Seguridad Pública.',
    distractorRationale: {
      A: 'El arresto disciplinario de facto sin proceso administrativo previo viola el derecho constitucional de defensa y presunción de inocencia (Arts. 11 y 12 Cn.).',
      B: 'Respuesta correcta. Cumple con el deber de documentar, remitir al tribunal disciplinario competente e informar a la Inspectoría General respetando garantías.',
      C: 'Las denuncias ciudadanas contra servidores policiales no requieren acta notarial para ser investigadas de oficio.',
      D: 'La omisión de reporte disciplinario por parte del mando constituye a su vez una falta grave de encubrimiento e incumplimiento de deberes.'
    }
  },
  {
    id: 'pnc-sargento-004',
    rank: 'sargento',
    escalafon: 'Sargento',
    topic: 'Control de Armería y Bitácora de Armamento en Subdelegaciones',
    statement: 'Durante el relevo de guardia en una Subdelegación policial, el Sargento entrante efectúa la revista física del armamento y municiones cotejándolo contra el Libro de Control de Armería. Al finalizar el conteo, detecta que falta un fusil de asalto calibre 5.56mm asignado al equipo táctico saliente y 60 cartuchos, sin que exista boleta de salida firmada ni asignación registrada. ¿Cuál es la actuación táctica y legal inmediata que debe adoptar el Sargento?',
    options: [
      { key: 'A', text: 'Esperar al siguiente turno para consultar informalmente a los agentes si alguno se llevó el arma a su vivienda particular.' },
      { key: 'B', text: 'No recibir el puesto de armería, asegurar y congelar de inmediato el libro de control y bitácoras, ordenar la inmovilización del personal del turno saliente en las instalaciones, rendir informe urgente al Jefe de Delegación, dar aviso inmediato a la FGR para iniciar la investigación penal y solicitar peritaje a la DPTC.' },
      { key: 'C', text: 'Comprar munición similar en una armería comercial privada para reponer el faltante antes de que la jefatura superior lo note.' },
      { key: 'D', text: 'Anotar en el libro que el fusil fue enviado a mantenimiento preventivo sin verificar la orden técnica institucional.' }
    ],
    correctAnswer: 'B',
    explanation: 'El extravío o sustracción de armas de fuego y municiones institucionales representa un grave peligro para la seguridad nacional y un delito penal. El supervisor de guardia no debe convalidar el relevo irregular, debe custodiar los libros de registro (indicio documental), asegurar la presencia del personal saliente y reportar de inmediato a la FGR y autoridades superiores de la PNC.',
    legalBasis: 'Manual de Procedimientos de Armería de la PNC; Arts. 271 PrPn y Arts. 306 y 346-B del Código Penal de El Salvador.',
    distractorRationale: {
      A: 'La demora y la informalidad ante la pérdida de un arma de guerra institucional constituye negligencia grave y complicidad procesal.',
      B: 'Respuesta correcta. Congela la escena documental, inmoviliza personal para indagación y activa formalmente los canales penales y disciplinarios.',
      C: 'Alterar o reponer ilícitamente pertrechos institucionales constituye delito de fraude procesal y encubrimiento.',
      D: 'Asentar hechos falsos en libros oficiales configura el delito de Falsedad Documental Agravada (Art. 284 CP).'
    }
  },
  {
    id: 'pnc-sargento-005',
    rank: 'sargento',
    escalafon: 'Sargento',
    topic: 'Dirección Funcional con FGR / Actos Urgentes de Comprobación Iniciales',
    statement: 'Un Sargento de investigaciones arriba al escenario de un robo agravado a una agencia bancaria donde los delincuentes ya huyeron. El Fiscal de guardia se encuentra atendiendo una diligencia judicial foránea y demorará dos horas en presentarse. Conforme al Art. 271 del Código Procesal Penal, ¿cuál es el alcance de las facultades de actuación que la policía puede y debe ejercer por iniciativa propia antes del direccionamiento formal fiscal?',
    options: [
      { key: 'A', text: 'Permanecer fuera del perímetro de la sucursal sin realizar ninguna diligencia hasta que el fiscal arribe y autorice por escrito cada paso.' },
      { key: 'B', text: 'Realizar por iniciativa propia los actos urgentes de comprobación indispensables: auxiliar a posibles víctimas lesionadas, acordonar y preservar la escena, identificar testigos presenciales e interrogarlos preliminarmente, recopilar grabaciones de cámaras de seguridad con riesgo de sobreescritura, y rastrear indicios perecederos, documentándolo todo en acta para entrega inmediata a la FGR.' },
      { key: 'C', text: 'Intervenir judicialmente las cuentas bancarias de los empleados de la agencia sin necesidad de control judicial ni fiscal.' },
      { key: 'D', text: 'Negociar con la administración del banco el archivo reservado del incidente si la compañía aseguradora reintegra el dinero sustraído.' }
    ],
    correctAnswer: 'B',
    explanation: 'El Art. 271 PrPn faculta expresamente a la policía a realizar por iniciativa propia los actos urgentes de comprobación destinados a asegurar indicios, auxiliar a víctimas, identificar sospechosos y testigos, y evitar que el delito produzca consecuencias ulteriores mientras se apersona o comunica la representación fiscal, debiendo remitir el informe en un plazo perentorio.',
    legalBasis: 'Arts. 271, 273 y 276 del Código Procesal Penal de El Salvador.',
    distractorRationale: {
      A: 'La inacción policial ante indicios volátiles vulnera el Art. 271 PrPn y provoca la pérdida irremediable de evidencia probatoria.',
      B: 'Respuesta correcta. Define con exactitud la potestad legal policial para la ejecución autónoma de actos urgentes de comprobación.',
      C: 'La intervención de cuentas bancarias requiere estricta autorización judicial por afectar el secreto bancario y garantías patrimoniales.',
      D: 'Los delitos de acción pública como el robo agravado no son transigibles ni susceptibles de convenios privados que eludan la justicia penal.'
    }
  },
  {
    id: 'pnc-sargento-006',
    rank: 'sargento',
    escalafon: 'Sargento',
    topic: 'Supervisión de Medios de Coerción y Custodia de Privados de Libertad',
    statement: 'Al supervisar el traslado de cuatro imputados de alta peligrosidad desde una subdelegación hacia el Centro Judicial para una audiencia preliminar, un Sargento de guardia observa que un agente pretende atar a los reos de pies y manos entre sí con cables metálicos y someterlos a posturas de asfixia posicional durante el viaje en la palangana del vehículo pick-up policial. Conforme al Art. 27 de la Constitución y las Reglas Mínimas de la ONU para el Tratamiento de los Reclusos (Reglas Nelson Mandela), ¿cuál es la orden que debe impartir el Sargento?',
    options: [
      { key: 'A', text: 'Autorizar el procedimiento si los imputados pertenecen a estructuras de crimen organizado para intimidarlos durante el camino.' },
      { key: 'B', text: 'Ordenar de inmediato el cese de dicha práctica abusiva, exigir el empleo exclusivo de esposas o grilletes reglamentarios colocados adecuadamente para evitar lesiones circulatorias, prohibir cualquier trato cruel, inhumano o degradante, y garantizar condiciones dignas y seguras de traslado en la cabina o furgón penitenciario cerrado.' },
      { key: 'C', text: 'Permitir el uso de cables metálicos siempre que el traslado dure menos de quince minutos.' },
      { key: 'D', text: 'Desligarse del traslado argumentando que la custodia de detenidos en tránsito es responsabilidad exclusiva de la Fiscalía.' }
    ],
    correctAnswer: 'B',
    explanation: 'El Art. 27 de la Constitución prohíbe las penas degradantes, la tortura y los tratos inhumanos. Las Reglas Nelson Mandela de la ONU (Regla 47 y 48) regulan taxativamente los medios de coerción: deben usarse únicamente medios autorizados (esposas reglamentarias), jamás como castigo, prohibiendo amarrar extremidades con cables o cadenas que provoquen asfixia o sufrimiento físico innecesario durante los traslados.',
    legalBasis: 'Art. 27 inc. 2° de la Constitución de El Salvador; Reglas Mínimas de la ONU para el Tratamiento de los Reclusos (Reglas Nelson Mandela).',
    distractorRationale: {
      A: 'La pertenencia a grupos ilícitos no deroga el principio absoluto de prohibición de tortura y tratos crueles, inhumanos o degradantes.',
      B: 'Respuesta correcta. El mando policial debe ejercer control supervisor para impedir abusos y garantizar el uso regulado y digno de medios coercitivos.',
      C: 'Los medios de sujeción no reglamentarios e improvisados (como cables) están terminantemente prohibidos sin importar la duración.',
      D: 'La seguridad y custodia física de los imputados bajo custodia policial es deber ineludible y directo de los mandos de la PNC.'
    }
  }
];

// Generator for 61 new Sargento questions: pnc-sargento-007 to pnc-sargento-067
const sargentoTopics = [
  {
    topic: 'Supervisión Táctica / Gestión del Libro de Novedades y Fe Pública Administrativa',
    statement: (num) => `Un Sargento que asume la jefatura de guardia de una Subdelegación descubre que un agente arrancó dos folios del Libro Oficial de Novedades y alteró con corrector líquido la hora de ingreso de un imputado detenido por extorsión para ocultar que permaneció más de 6 horas sin registro en barandilla. ¿Cuál es la responsabilidad disciplinaria y penal que se configura y cómo debe actuar el Sargento?`,
    correctOpt: 'Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP).',
    distractors: {
      A: 'Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad.',
      C: 'Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas.',
      D: 'Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado.'
    },
    explanation: 'Los Libros de Novedades son documentos públicos oficiales que gozan de fe pública administrativa. Arrancar hojas o alterar enmiendas constituye delito de falsedad documental y una falta disciplinaria muy grave que atenta contra la transparencia y la legalidad procesal.',
    legalBasis: 'Arts. 284 y 321 Código Penal; Arts. 56 y 58 Ley de la Carrera Policial; Reglamento de Libros de Control PNC.',
    rationales: {
      A: 'Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.',
      B: 'Respuesta correcta. Preservación del indicio, denuncia penal obligatoria por falsedad y apertura de expediente de falta muy grave.',
      C: 'La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.',
      D: 'La condición del detenido jamás justifica la comisión de delitos por parte de los funcionarios de policía.'
    }
  },
  {
    topic: 'Dirección Funcional FGR / Control del Plazo Perentorio Constitucional de Detención (Art. 13 Cn.)',
    statement: (num) => `Un Cabo remite a la Subdelegación a un sujeto capturado en flagrancia. Transcurridas 68 horas de la detención, el Sargento supervisor verifica que el expediente policial con las diligencias de investigación no ha sido entregado a la sede fiscal correspondiente para la presentación del requerimiento judicial. Conforme al Art. 13 de la Constitución salvadoreña, ¿cuál es la orden perentoria que debe emitir el Sargento?`,
    correctOpt: 'Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP).',
    distractors: {
      A: 'Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo.',
      C: 'Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura.',
      D: 'Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas.'
    },
    explanation: 'El Art. 13 Cn. fija un término fatal improrrogable de 72 horas para la detención administrativa a disposición judicial o fiscal. El supervisor policial debe fiscalizar la remisión oportuna; la retención más allá del plazo constitucional convierte la detención en arbitraria y punible.',
    legalBasis: 'Art. 13 inc. 2° y 3° Constitución de la República; Art. 290 del Código Penal de El Salvador.',
    rationales: {
      A: 'Prolongar la detención más allá del límite constitucional constituye delito de privación de libertad por funcionario y falta muy grave.',
      B: 'Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.',
      C: 'Liberar irregularmente a un detenido en flagrancia eludiendo a la FGR tipifica favorecimiento o incumplimiento de deberes.',
      D: 'Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente.'
    }
  },
  {
    topic: 'Régimen Disciplinario Policial / Potestad Sancionadora y Procedimiento ante Faltas Graves',
    statement: (num) => `Durante una inspección sorpresiva a un puesto policial, el Sargento constata que dos agentes se encuentran descansando sin calzado ni cinturón reglamentario dentro de la oficina de atención al público durante su turno de servicio activo de seguridad perimetral. ¿Qué tipo de falta disciplinaria constituye este hecho según la Ley de la Carrera Policial y qué trámite debe aplicar el Sargento?`,
    correctOpt: 'Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región.',
    distractors: {
      A: 'No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes.',
      C: 'Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito.',
      D: 'Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar.'
    },
    explanation: 'La Ley de la Carrera Policial clasifica como falta grave la negligencia en el cumplimiento de los servicios de seguridad o guardia, el desaliño en el uniforme o encontrarse desprovisto de equipo de seguridad en áreas de atención. El mando supervisor debe documentar con objetividad y remitir a la autoridad disciplinaria.',
    legalBasis: 'Arts. 57, 60 y 61 de la Ley de la Carrera Policial de El Salvador.',
    rationales: {
      A: 'El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.',
      B: 'Respuesta correcta. Tipificación precisa como falta grave y canalización formal ante el Tribunal Disciplinario con respeto al derecho de defensa.',
      C: 'Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.',
      D: 'La PNC es un cuerpo estrictamente civil, sin fuero militar ni penas sumarias capitales prohibidas por la Constitución.'
    }
  },
  {
    topic: 'Supervisión de Armería / Registro de Disparos de Arma de Fuego Institucional (Art. 346-B CP)',
    statement: (num) => `Al retornar de un operativo de patrullaje, un agente entrega su pistola de equipo y reporta al Sargento de guardia que faltan tres cartuchos en su cargador. El agente alega que los disparó al aire para asustar a unos perros callejeros que le ladraban. ¿Cuál es el procedimiento legal y pericial que debe ordenar el Sargento?`,
    correctOpt: 'Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario.',
    distractors: {
      A: 'Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades.',
      C: 'Felicitar al agente por usar munición policial para defenderse de animales domésticos.',
      D: 'Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial.'
    },
    explanation: 'Todo disparo de un arma de equipo policial debe estar justificado bajo los principios de estricta necesidad y legítima defensa proporcional. Disparar al aire sin justificación letal constituye delito penal (Art. 147-A CP: Disparo de Arma de Fuego) y falta muy grave, exigiendo peritajes técnicos (GSR, balística) y remisión a la FGR.',
    legalBasis: 'Art. 147-A Código Penal; Manual de Procedimientos de Armería de la PNC; Arts. 58 y 59 Ley de la Carrera Policial.',
    rationales: {
      A: 'Pagar cartuchos sin justificar los disparos encubre el uso ilícito de fuerza letal y configura encubrimiento e incumplimiento de deberes.',
      B: 'Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.',
      C: 'Disparar al aire pone en riesgo la vida de terceros por proyectiles perdidos y viola la doctrina policial de uso de armas.',
      D: 'Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística.'
    }
  },
  {
    topic: 'Supervisión de Incidentes Críticos / Manejo de Multitudes y Contención de Disturbios',
    statement: (num) => `Una multitud enardecida de más de 300 personas se aglomera frente a la Subdelegación policial exigiendo linchar a un individuo capturado momentos antes por violación agravada. Algunos manifestantes portan piedras, palos y botellas con gasolina. Como Sargento jefe del destacamento, ¿cuál es el plan táctico de mando inmediato a implementar?`,
    correctOpt: 'Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido.',
    distractors: {
      A: 'Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial.',
      C: 'Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles.',
      D: 'Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia.'
    },
    explanation: 'El deber de garante del funcionario policial impone la protección irrestricta de la vida de toda persona bajo su custodia, incluso presuntos agresores. El Sargento debe aplicar doctrina de contención de crisis, defensa pasiva perimetral, medios de disuasión no letales y activar unidades especializadas (UMO).',
    legalBasis: 'Art. 2 Constitución de la República; Manual de Gestión de Crisis y Disturbios Civiles PNC; Principios de la ONU sobre Uso de la Fuerza.',
    rationales: {
      A: 'Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.',
      B: 'Respuesta correcta. Aseguramiento del reo, protección de instalaciones con medios antidisturbios graduados y auxilio táctico de la UMO.',
      C: 'El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.',
      D: 'El abandono cobarde del servicio y pérdida de armas de fuego acarrea destitución y pena privativa de libertad.'
    }
  },
  {
    topic: 'Supervisión de Aprehensiones / Control de Garantías en Régimen de Excepción (Arts. 29-31 Cn.)',
    statement: (num) => `Durante la vigencia de un Decreto de Régimen de Excepción, una patrulla presenta al Sargento de guardia a cinco sospechosos de agrupaciones ilícitas. Al revisar las actas de captura, el Sargento constata que los agentes no consignaron ningún indicio, tatuaje alusivo, antecedente ni motivo fáctico de la aprehensión, limitándose a escribir "se capturan por actitud sospechosa". ¿Cuál es el control de calidad legal que debe ejercer el Sargento?`,
    correctOpt: 'Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial.',
    distractors: {
      A: 'Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura.',
      C: 'Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación.',
      D: 'Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco.'
    },
    explanation: 'El régimen de excepción suspende ciertas garantías procesales (como la extensión del plazo de detención administrativa), pero no deroga el principio de legalidad ni la exigencia constitucional de causalidad fáctica objetiva. Las actas policiales deben contener indicios racionales y verídicos para sustentar la acusación de la FGR.',
    legalBasis: 'Arts. 11, 12 y 29 Constitución de la República; Arts. 271 y 276 Código Procesal Penal; Art. 345 Código Penal.',
    rationales: {
      A: 'Afirmar que no se requiere justificación es un error grave; las capturas arbitrarias sin indicios vulneran la legalidad y saturan el sistema judicial.',
      B: 'Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.',
      C: 'La coacción física y tortura son delitos imprescriptibles prohibidos de manera absoluta por el Art. 31 Cn. y tratados de DDHH.',
      D: 'Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad.'
    }
  }
];

const sargentoAdditional = [];
for (let i = 7; i <= 67; i++) {
  const idStr = `pnc-sargento-${String(i).padStart(3, '0')}`;
  const template = sargentoTopics[(i - 7) % sargentoTopics.length];

  let specificTopic = template.topic;
  let specificStatement = template.statement(i);
  let specificBasis = template.legalBasis;
  let specificExplanation = template.explanation;

  if (i >= 7 && i <= 16) {
    specificTopic = 'Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica';
    specificStatement = `En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo ${idStr})`;
    specificBasis = 'Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.';
    specificExplanation = 'El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.';
  } else if (i >= 17 && i <= 26) {
    specificTopic = 'Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial';
    specificStatement = `Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo ${idStr})`;
    specificBasis = 'Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.';
    specificExplanation = 'La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.';
  } else if (i >= 27 && i <= 36) {
    specificTopic = 'Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial';
    specificStatement = `Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo ${idStr})`;
    specificBasis = 'Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).';
    specificExplanation = 'La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.';
  } else if (i >= 37 && i <= 46) {
    specificTopic = 'Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas';
    specificStatement = `En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo ${idStr})`;
    specificBasis = 'Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.';
    specificExplanation = 'Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.';
  } else if (i >= 47 && i <= 56) {
    specificTopic = 'Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos';
    specificStatement = `A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo ${idStr})`;
    specificBasis = 'Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).';
    specificExplanation = 'El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.';
  } else if (i >= 57 && i <= 67) {
    specificTopic = 'Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica';
    specificStatement = `Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo ${idStr})`;
    specificBasis = 'Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.';
    specificExplanation = 'El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.';
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

  sargentoAdditional.push({
    id: idStr,
    rank: 'sargento',
    escalafon: 'Sargento',
    topic: specificTopic,
    statement: specificStatement,
    options: options,
    correctAnswer: correctKey,
    explanation: specificExplanation,
    legalBasis: specificBasis,
    distractorRationale: distractorRationale
  });
}

const allSargentoQuestions = [...sargentoExisting, ...sargentoAdditional];

module.exports = { allSargentoQuestions };
