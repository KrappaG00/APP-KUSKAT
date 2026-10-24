/**
 * BANCO DE PREGUNTAS: SEGUROS MERCANTILES Y FIANZAS SSF
 * 100 Reactivos: Código de Comercio (Arts. 1344-1550), Ley de Sociedades de Seguros, Ley de Compras Públicas, SSF.
 */

const segurosExisting = [
  {
    id: 'seg-01',
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: 'Contrato de Seguro & Principio de Indemnización',
    statement: 'Conforme al Código de Comercio de El Salvador, ¿cuál es el principio cardinal que rige los seguros de daños y cosas respecto al resarcimiento económico?',
    options: {
      A: 'El asegurado puede cobrar sumas que superen el valor real del bien si pagó la prima correspondiente.',
      B: 'El contrato de seguro contra daños es estrictamente de indemnización y jamás puede convertirse para el asegurado en fuente de enriquecimiento.',
      C: 'En caso de pérdida total, la aseguradora debe duplicar el valor asegurable como sanción contractual.',
      D: 'El asegurador solo está obligado a indemnizar el 50% del daño en caso de caso fortuito o fuerza mayor.'
    },
    correctAnswer: 'B',
    explanation: 'El artículo 1380 del Código de Comercio salvadoreño establece expresamente que el seguro contra daños es un contrato de mera indemnización; por tanto, el asegurado no puede pretender una suma superior al valor real de la pérdida sufrida.',
    legalBasis: 'Art. 1380 y 1381 Código de Comercio de El Salvador.',
    distractorRationale: {
      A: 'Permitir indemnizaciones superiores al daño real constituiría sobreseguro ilícito y fomentaría el fraude o dolo.',
      B: 'Respuesta correcta. El seguro mercantil de cosas es de estricta indemnización para resarcir el menoscabo real sufrido.',
      C: 'La sanción punitiva no existe en la indemnización contractual de seguros salvadoreña.',
      D: 'El asegurador cubre el 100% del daño amparado hasta el límite de la suma asegurada, deduciendo únicamente el deducible pactado.'
    }
  },
  {
    id: 'seg-02',
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: 'Subrogación Legal Mercantil de la Aseguradora',
    statement: 'En un seguro de automotores en El Salvador, tras pagar la indemnización al asegurado por los daños causados por un tercero culpable en un accidente vial, ¿qué derecho legal asiste a la compañía de seguros conforme a los Arts. 1391 y 1393 del Código de Comercio?',
    options: {
      A: 'Pierde todo derecho de cobro porque la prima cancelada extingue la deuda del tercero.',
      B: 'Se subroga por ministerio de ley (ope legis) hasta el monto de la indemnización pagada, en todos los derechos y acciones del asegurado contra los terceros responsables del siniestro.',
      C: 'Debe obligar al asegurado a que demande penalmente al culpable y le entregue el dinero recaudado.',
      D: 'Solo puede cobrarle al tercero si este contrató previamente una fianza con la misma aseguradora.'
    },
    correctAnswer: 'B',
    explanation: 'El artículo 1391 y 1393 del Código de Comercio consagran la figura de la subrogación legal: la empresa de seguros que paga la indemnización se subroga de pleno derecho en los derechos y acciones que el asegurado tenía contra los terceros responsables del siniestro, evitando que el causante quede impune civilmente.',
    legalBasis: 'Arts. 1391 y 1393 del Código de Comercio de El Salvador.',
    distractorRationale: {
      A: 'La aseguradora no pierde el derecho; la subrogación legal existe precisamente para impedir el enriquecimiento o liberación injustificada del causante.',
      B: 'Respuesta correcta. La aseguradora se subroga automáticamente por disposición de la ley mercantil al pagar el siniestro.',
      C: 'La aseguradora ejerce la acción en nombre propio por subrogación, liberando al asegurado de litigar.',
      D: 'La subrogación opera contra cualquier tercero responsable civilmente, con o sin fianza previa.'
    }
  },
  {
    id: 'seg-03',
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: 'Fianzas Mercantiles y Contratación Pública',
    statement: 'En los procesos de licitación pública conforme a la Ley de Compras Públicas de El Salvador, ¿cuál es el objeto de la Fianza o Garantía de Mantenimiento de Oferta?',
    options: {
      A: 'Garantizar el pago de salarios a los trabajadores de la obra pública una vez iniciada la construcción.',
      B: 'Garantizar que el oferente mantendrá las condiciones y precios de su propuesta durante el plazo legal y suscribirá el contrato si resulta adjudicado.',
      C: 'Cubrir los vicios ocultos de los materiales utilizados durante los siguientes diez años.',
      D: 'Financiar la compra de maquinaria pesada requerida por la institución pública licitante.'
    },
    correctAnswer: 'B',
    explanation: 'La Fianza de Mantenimiento de Oferta asegura la seriedad de la propuesta licitada: si el oferente adjudicado se niega a firmar el contrato o retira su oferta intempestivamente, la entidad pública ejecuta la garantía fiduciaria como indemnización preestablecida.',
    legalBasis: 'Ley de Compras Públicas de El Salvador; Código de Comercio (Arts. 1539-1550).',
    distractorRationale: {
      A: 'Esa es la fianza de cumplimiento de contrato o de pago de pasivos laborales.',
      B: 'Respuesta correcta. Garantiza el sostenimiento irrestricto de la oferta y la formalización contractual oportuna.',
      C: 'La cobertura de vicios ocultos se garantiza mediante la Fianza de Buena Obra.',
      D: 'Las fianzas son instrumentos de garantía indemnizatoria, no de financiamiento crediticio.'
    }
  },
  {
    id: 'seg-04',
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: 'Prescripción de Acciones en Seguros',
    statement: '¿Cuál es el plazo de prescripción general que establece el Código de Comercio de El Salvador para que prescriban las acciones derivadas del contrato de seguro a partir del acontecimiento que les dio origen?',
    options: {
      A: 'Seis meses contados desde el reporte preliminar.',
      B: 'Dos años contados a partir de la fecha del acontecimiento que les dio origen.',
      C: 'Diez años, conforme a la prescripción general civil de obligaciones.',
      D: 'Cinco años improrrogables para todo tipo de seguros de vida y daños.'
    },
    correctAnswer: 'B',
    explanation: 'El artículo 1362 del Código de Comercio de El Salvador dispone que todas las acciones que se deriven de un contrato de seguro prescribirán en dos años, contados desde la fecha del acontecimiento que les dio origen, salvo excepciones específicas.',
    legalBasis: 'Art. 1362 del Código de Comercio de El Salvador.',
    distractorRationale: {
      A: 'Seis meses es un plazo de prescripción para reclamos de transporte marítimo de mercancías, no del contrato de seguro.',
      B: 'Respuesta correcta. El plazo de prescripción general mercantil en seguros salvadoreño es de dos años.',
      C: 'Los diez años del Código Civil quedan desplazados por la norma especial mercantil de dos años.',
      D: 'Cinco años no es el plazo general en el régimen asegurador salvadoreño.'
    }
  },
  {
    id: 'seg-05',
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: 'Liquidación de Siniestros / Infraseguro y Regla Proporcional (Art. 1383 C.Com.)',
    statement: 'Un almacén comercial cuyo valor asegurable real en el mercado asciende a $200,000.00 USD es asegurado contra riesgo de incendio únicamente por una suma asegurada de $100,000.00 USD (infraseguro evidente al 50%). Durante la vigencia de la póliza ocurre un siniestro de incendio que ocasiona daños parciales comprobados fehacientemente por un monto de $40,000.00 USD. Conforme a la regla proporcional imperativa del artículo 1383 del Código de Comercio de El Salvador, ¿a cuánto asciende el monto indemnizatorio neto que la compañía aseguradora está legalmente obligada a pagar?',
    options: {
      A: '$40,000.00 USD, debido a que el daño sufrido ($40,000.00 USD) no sobrepasa la suma asegurada total contratada de $100,000.00 USD.',
      B: '$20,000.00 USD, conforme a la regla proporcional: Indemnización = (Daño Sufrido × Suma Asegurada) / Valor Real = ($40,000.00 × $100,000.00) / $200,000.00 = $20,000.00 USD, soportando el asegurado la fracción restante como su propio asegurador.',
      C: '$100,000.00 USD, liquidándose el total de la suma asegurada en todo siniestro amparado.',
      D: '$0.00 USD, debido a que el infraseguro provoca automáticamente la nulidad absoluta del contrato de seguro sin indemnización.'
    },
    correctAnswer: 'B',
    explanation: 'El artículo 1383 del Código de Comercio consagra la Regla Proporcional en el infraseguro: si la suma asegurada es inferior al valor real de la cosa asegurada al momento del siniestro, el asegurador indemnizará el daño en la proporción que guarde la suma asegurada respecto al valor real. En este caso: ($40,000 × $100,000) / $200,000 = $20,000.00 USD. El asegurado asume el restante 50% por haber asegurado únicamente la mitad del valor del bien.',
    legalBasis: 'Art. 1383 del Código de Comercio de El Salvador.',
    distractorRationale: {
      A: 'Ignora la regla proporcional mercantil; pagar los $40,000 enteros trataría la póliza como seguro a primer riesgo absoluto, lo cual requiere pacto expreso.',
      B: 'Respuesta correcta. Aplica rigurosamente la fórmula legal de prorrateo del Art. 1383 C.Com.',
      C: 'La suma asegurada es el límite máximo para pérdidas totales, nunca se liquida completa ante daños parciales.',
      D: 'El infraseguro no anula el contrato; simplemente sujeta la indemnización al porcentaje efectivamente cubierto.'
    }
  },
  {
    id: 'seg-06',
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: 'Régimen de Validez Contractual / Sobreseguro Doloso vs. Buena Fe (Art. 1381 C.Com.)',
    statement: 'El propietario de una maquinaria industrial valuada pericialmente en $50,000.00 USD contrata una póliza de seguro de daños declarando intencionalmente que el bien tiene un valor comercial de $150,000.00 USD con el propósito deliberado de provocar posteriormente una avería y obtener un enriquecimiento indebido con la indemnización. Conforme al artículo 1381 del Código de Comercio salvadoreño, ¿cuál es la consecuencia jurídica exacta si se comprueba el sobreseguro doloso por parte del asegurado?',
    options: {
      A: 'El contrato de seguro sigue siendo válido y la aseguradora está obligada a pagar los $150,000.00 USD pactados en la carátula de la póliza.',
      B: 'El contrato de seguro es nulo de nulidad absoluta y el asegurador queda libre de toda obligación indemnizatoria, teniendo derecho a retener las primas devengadas en concepto de pena o indemnización de perjuicios.',
      C: 'La aseguradora debe indemnizar obligatoriamente el valor real de $50,000.00 USD y devolver las primas cobradas en exceso al asegurado infractor.',
      D: 'El contrato se traslada automáticamente a la Superintendencia del Sistema Financiero para que esta fije un precio justo de liquidación.'
    },
    correctAnswer: 'B',
    explanation: 'El artículo 1381 del Código de Comercio establece que cuando la suma asegurada supera notablemente el valor real del interés asegurable por dolo o mala fe del asegurado, el contrato es nulo de nulidad absoluta. En tal supuesto, el asegurador no indemniza siniestro alguno y retiene las primas percibidas en compensación de daños y perjuicios.',
    legalBasis: 'Art. 1381 del Código de Comercio de El Salvador.',
    distractorRationale: {
      A: 'Vulnera frontalmente el principio de indemnización del Art. 1380 C.Com.; el sobreseguro doloso jamás genera derecho al pago fraudulento.',
      B: 'Respuesta correcta. Refleja fielmente la sanción de nulidad absoluta y la retención de primas consagrada en el Art. 1381 C.Com.',
      C: 'La reducción de suma y devolución de primas solo aplica en el sobreseguro de buena fe (sin dolo); mediando dolo opera la nulidad y sanción.',
      D: 'La SSF ejerce supervisión técnica y administrativa prudencial, no sustituye la jurisdicción mercantil sancionatoria ante fraudes.'
    }
  },
  {
    id: 'seg-07',
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: 'Seguro de Vida / Cláusula de Suicidio e Incontestabilidad (Arts. 1475 y 1481 C.Com.)',
    statement: 'En los contratos de seguro sobre la vida humana suscritos conforme a las leyes mercantiles salvadoreñas, ¿cómo opera la cobertura del riesgo de fallecimiento por suicidio del asegurado y cuál es el plazo legal de exclusión e incontestabilidad fijado por el Código de Comercio?',
    options: {
      A: 'El suicidio está excluido de por vida de todas las pólizas de seguros en El Salvador sin importar el tiempo transcurrido desde la firma del contrato.',
      B: 'La compañía aseguradora queda legalmente exenta de pagar la suma asegurada si el suicidio del asegurado ocurre dentro de los dos años siguientes a la celebración o rehabilitación de la póliza (debiendo reintegrar únicamente la reserva matemática); pero transcurrido dicho plazo de dos años, el suicidio queda amparado y la póliza deviene incontestable por dicha causa.',
      C: 'La aseguradora siempre debe pagar el 100% de la suma asegurada desde el primer día de vigencia, incluso si el suicidio ocurre a las 24 horas de suscrita la póliza.',
      D: 'El suicidio se cubre únicamente si el asegurado dejó una carta notariada antes de su deceso justificando su decisión personal.'
    },
    correctAnswer: 'B',
    explanation: 'El artículo 1481 del Código de Comercio de El Salvador dispone que el suicidio voluntario del asegurado exime a la empresa de seguros del pago de la suma contratada si ocurre dentro de los dos años posteriores a la celebración del contrato (restituyendo la reserva matemática al beneficiario). Cumplidos los dos años, el seguro cobra plena eficacia indemnizatoria en virtud del principio de incontestabilidad.',
    legalBasis: 'Arts. 1475 y 1481 del Código de Comercio de El Salvador.',
    distractorRationale: {
      A: 'La exclusión perpetua del suicidio es contraria a la ley salvadoreña; el Art. 1481 C.Com. limita la exoneración a los primeros dos años.',
      B: 'Respuesta correcta. Define con exactitud la ventana temporal de dos años de exoneración legal y la posterior incontestabilidad.',
      C: 'Pagar el suicidio inmediato incentivaría el fraude letal y desnaturalizaría el principio de aleatoriedad del riesgo asegurador.',
      D: 'Las cartas o justificaciones privadas carecen de relevancia frente al término legal perentorio de dos años establecido en el Código de Comercio.'
    }
  },
  {
    id: 'seg-08',
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: 'Garantías en Contratación Pública / Fianza de Cumplimiento vs. Anticipo y Buena Obra',
    statement: 'En la ejecución de un contrato administrativo de obra pública bajo la Ley de Compras Públicas de El Salvador, ¿cuál es la distinción técnica, operativa y funcional entre la Fianza de Cumplimiento de Contrato, la Fianza de Anticipo y la Fianza de Buena Obra o Conservación?',
    options: {
      A: 'Las tres fianzas cubren el mismo riesgo comercial y la administración pública solo puede exigir una de ellas de forma alternativa a su discreción.',
      B: 'La Fianza de Anticipo garantiza el 100% de los fondos monetarios adelantados al contratista para inicio de obras hasta su total amortización; la Fianza de Cumplimiento (10% al 20% del valor del contrato) garantiza la ejecución cabal y oportuna de todas las obligaciones contractuales; y la Fianza de Buena Obra (generalmente 10%) entra en vigencia a partir de la recepción definitiva para caucionar reparaciones por vicios ocultos durante un período de uno a dos años.',
      C: 'La Fianza de Buena Obra se otorga únicamente antes de iniciar la licitación y la Fianza de Anticipo cubre las multas de tránsito de los constructores.',
      D: 'Las fianzas de compras públicas son emitidas exclusivamente por el Banco Central de Reserva (BCR) sin participación de afianzadoras privadas.'
    },
    correctAnswer: 'B',
    explanation: 'En el régimen de compras públicas salvadoreño y las normas de fianzas mercantiles (Arts. 1539-1550 C.Com.), cada garantía tutela una fase distinta del contrato: la Fianza de Anticipo precave el desvío de los fondos preentregados, la de Cumplimiento de Contrato garantiza la entrega a tiempo y conforme a especificaciones técnicas, y la de Buena Obra protege a la administración estatal tras la recepción formal contra vicios ocultos o defectos de construcción.',
    legalBasis: 'Ley de Compras Públicas de El Salvador; Arts. 1539 a 1550 del Código de Comercio de El Salvador.',
    distractorRationale: {
      A: 'No son intercambiables ni alternativas; cada una cauciona riesgos, etapas y montos jurídicos enteramente diferenciados.',
      B: 'Respuesta correcta. Diferencia con precisión las tres figuras: amortización de adelanto, fiel ejecución contractual y garantía post-recepción de vicios ocultos.',
      C: 'La garantía previa a la licitación es la de sostenimiento de oferta, no la de buena obra que es estrictamente post-constructiva.',
      D: 'Las fianzas mercantiles son emitidas por instituciones afianzadoras y compañías de seguros autorizadas por la SSF, no por el BCR.'
    }
  }
];

// Generator for 92 new Seguros questions: seg-09 to seg-100
const segurosTemplates = [
  {
    area: 'Interés Asegurable & Principio de Indemnización (Art. 1353 C.Com.)',
    statement: (num) => `Un comerciante pretende contratar una póliza contra incendio sobre un edificio histórico del centro de San Salvador que pertenece legalmente a un tercero desconocido, sin tener vínculo de propiedad, usufructo, hipoteca, arrendamiento ni representación legal sobre dicho inmueble. Conforme al artículo 1353 del Código de Comercio salvadoreño, ¿cuál es el requisito de fondo que determina la validez del contrato de seguro?`,
    correctOpt: 'El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.',
    distractors: {
      A: 'El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.',
      C: 'La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.',
      D: 'El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.'
    },
    explanation: 'El artículo 1353 del Código de Comercio dispone que todo interés económico que una persona tenga en que un siniestro no se produzca puede ser objeto de seguro contra daños. Sin interés asegurable real, directo o indirecto, el contrato carece de causa lícita y adolece de nulidad absoluta.',
    legalBasis: 'Arts. 1353 y 1354 del Código de Comercio de El Salvador.',
    rationales: {
      A: 'El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.',
      B: 'Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.',
      C: 'Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.',
      D: 'El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal.'
    }
  },
  {
    area: 'Declaración del Riesgo & Deber de Buena Fe (Uberrimae Fidei - Art. 1365 C.Com.)',
    statement: (num) => `Al solicitar una póliza de seguro médico hospitalario de gastos médicos mayores, el proponente omite intencionalmente declarar en el cuestionario de asegurabilidad que fue diagnosticado seis meses antes con una afección coronaria grave e hipertensión arterial refractaria. Al año de contratada la póliza, sufre un infarto agudo al miocardio y reclama la cobertura. ¿Cuál es el derecho que asiste a la empresa aseguradora conforme al Art. 1365 del Código de Comercio?`,
    correctOpt: 'Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.',
    distractors: {
      A: 'Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.',
      C: 'Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.',
      D: 'La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años.'
    },
    explanation: 'El seguro es un contrato de máxima buena fe (uberrimae fidei). El Art. 1365 C.Com. sanciona la reticencia y la falsedad en la declaración del proponente: si el asegurado oculta dolosamente enfermedades preexistentes que de haber sido conocidas habrían provocado el rechazo del riesgo, el asegurador se exonera legalmente del pago.',
    legalBasis: 'Arts. 1365 y 1367 del Código de Comercio de El Salvador.',
    rationales: {
      A: 'La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.',
      B: 'Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.',
      C: 'No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.',
      D: 'La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas.'
    }
  },
  {
    area: 'Fianzas Mercantiles / Beneficio de Excusión y Renuncia Expresa (Art. 1540 C.Com.)',
    statement: (num) => `Una empresa afianzadora salvadoreña emite una Fianza de Cumplimiento Mercantil a favor del Ministerio de Obras Públicas (MOP). En el texto de la póliza de fianza se estipula que la institución fiadora "se obliga de manera solidaria y renuncia formalmente al beneficio de excusión". Ante el incumplimiento total del contratista principal, ¿cuál es el alcance legal de dicha renuncia conforme a los Arts. 1539 y 1540 del Código de Comercio?`,
    correctOpt: 'La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado.',
    distractors: {
      A: 'Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.',
      C: 'La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.',
      D: 'La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.'
    },
    explanation: 'El beneficio de excusión (derecho del fiador de exigir que antes se persigan los bienes del obligado principal) es renunciable en el tráfico mercantil conforme a los Arts. 1539-1540 C.Com. En las fianzas mercantiles institucionales es de uso estándar la renuncia de excusión para asegurar liquidez inmediata a primer requerimiento.',
    legalBasis: 'Arts. 1539, 1540 y 1543 del Código de Comercio de El Salvador.',
    rationales: {
      A: 'Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.',
      B: 'Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.',
      C: 'El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.',
      D: 'La fianza mercantil no está supeditada al deceso del deudor principal sino a su incumplimiento contractual.'
    }
  },
  {
    area: 'Reservas Técnicas y Margen de Solvencia / Supervisión de la SSF (Ley de Sociedades de Seguros)',
    statement: (num) => `De acuerdo con la Ley de Sociedades de Seguros de El Salvador y las normas técnicas emitidas por la Superintendencia del Sistema Financiero (SSF), ¿cuál es la función de la Reserva para Siniestros Ocurridos y No Reportados (IBNR - Incurred But Not Reported)?`,
    correctOpt: 'Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.',
    distractors: {
      A: 'Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.',
      C: 'Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.',
      D: 'Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica.'
    },
    explanation: 'La reserva IBNR (Incurred But Not Reported) es una exigencia técnica y actuarial insoslayable supervisada por la SSF (Art. 37 Ley de Sociedades de Seguros). Garantiza que la entidad cuente con liquidez suficiente para absorber los siniestros ya devengados pero que tardan días o semanas en ingresar al departamento de reclamos.',
    legalBasis: 'Art. 37 y 38 Ley de Sociedades de Seguros de El Salvador; Normas Técnicas de Reservas de la SSF.',
    rationales: {
      A: 'Las reservas técnicas son pasivos patrimoniales de estricta afectación para pago de siniestros, no gastos suntuarios.',
      B: 'Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.',
      C: 'Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.',
      D: 'La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas.'
    }
  },
  {
    area: 'Reaseguro Mercantil / Contratos Facultativos vs Tratados de Exceso de Pérdida (Excess of Loss)',
    statement: (num) => `Una compañía de seguros salvadoreña asegura una planta petroquímica por una suma asegurada de $50,000,000 USD que excede ampliamente su capacidad técnica y límite de retención propio. Para respaldar la operación, suscribe un Contrato de Reaseguro. Conforme al Código de Comercio y doctrina aseguradora, ¿cuál es la relación contractual y procesal entre el asegurado original y la entidad reaseguradora internacional?`,
    correctOpt: 'El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.',
    distractors: {
      A: 'El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.',
      C: 'El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.',
      D: 'El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley.'
    },
    explanation: 'El artículo 1548 del Código de Comercio establece el principio de relatividad en el reaseguro mercantil: el asegurado no es parte en el contrato de reaseguro ni tiene acciones directas contra el reasegurador, permaneciendo la compañía aseguradora como deudora directa de la indemnización pactada en la póliza.',
    legalBasis: 'Arts. 1548, 1549 y 1550 del Código de Comercio de El Salvador.',
    rationales: {
      A: 'El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.',
      B: 'Respuesta correcta. Recoge el principio general del Art. 1548 C.Com.: inoponibilidad de acción directa salvo cut-through.',
      C: 'La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.',
      D: 'El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF.'
    }
  },
  {
    area: 'Seguro de Colectivo y Accidentes Personales / Designación de Beneficiarios y Falta de Designación',
    statement: (num) => `En una póliza colectiva de seguro de accidentes de trabajo suscrita por una empresa comercial salvadoreña, un empleado asegurado fallece a consecuencia de un accidente amparado sin haber consignado el nombre de beneficiarios en la solicitud individual de adhesión ni en ningún testamento. Conforme a las normas del Código de Comercio, ¿a quiénes corresponde por ministerio de ley el pago del importe del seguro?`,
    correctOpt: 'A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.',
    distractors: {
      A: 'El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.',
      C: 'La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.',
      D: 'El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado.'
    },
    explanation: 'El artículo 1494 del Código de Comercio dispone que si al momento de ocurrir el siniestro sobre la vida humana no hubiere beneficiario designado contractualmente o la designación resultare ineficaz, el capital del seguro ingresará al caudal de los herederos legítimos del asegurado conforme a las reglas de la sucesión intestada.',
    legalBasis: 'Arts. 1492, 1494 y 1495 del Código de Comercio de El Salvador; Código Civil de El Salvador.',
    rationales: {
      A: 'El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.',
      B: 'Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.',
      C: 'La aseguradora no puede apropiarse del beneficio devengado por la contingencia cubierta.',
      D: 'El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente.'
    }
  }
];

const segurosAdditional = [];
for (let i = 9; i <= 100; i++) {
  const idStr = `seg-${String(i).padStart(2, '0')}`;
  const template = segurosTemplates[(i - 9) % segurosTemplates.length];

  let specificArea = template.area;
  let specificStatement = template.statement(i);
  let specificBasis = template.legalBasis;
  let specificExplanation = template.explanation;

  if (i >= 9 && i <= 20) {
    specificArea = 'Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio';
    specificStatement = `Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo ${idStr})`;
    specificBasis = 'Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.';
    specificExplanation = 'Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.';
  } else if (i >= 21 && i <= 35) {
    specificArea = 'Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)';
    specificStatement = `Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo ${idStr})`;
    specificBasis = 'Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.';
    specificExplanation = 'El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.';
  } else if (i >= 36 && i <= 50) {
    specificArea = 'Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)';
    specificStatement = `Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo ${idStr})`;
    specificBasis = 'Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.';
    specificExplanation = 'Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.';
  } else if (i >= 51 && i <= 65) {
    specificArea = 'Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)';
    specificStatement = `Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo ${idStr})`;
    specificBasis = 'Arts. 1458 y 1459 del Código de Comercio de El Salvador.';
    specificExplanation = 'En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.';
  } else if (i >= 66 && i <= 80) {
    specificArea = 'Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente';
    specificStatement = `En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con "Cláusula de Cesión de Beneficios a Favor del Banco Acreedor". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo ${idStr})`;
    specificBasis = 'Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.';
    specificExplanation = 'Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.';
  } else if (i >= 81 && i <= 100) {
    specificArea = 'Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)';
    statement: (num) => `Ante una divergencia en la tasación pericial del monto de una pérdida por robo en una bodega industrial, la aseguradora invoca una cláusula de la póliza que obliga al asegurado a someterse a arbitraje privado no vinculante costeado por el cliente, prohibiéndole acudir a los tribunales mercantiles. ¿Cuál es la validez de dicha cláusula según la jurisprudencia salvadoreña y el Código de Comercio? (Reactivo ${idStr})`;
    specificBasis = 'Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.';
    specificExplanation = 'Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.';
  }

  const keys = ['A', 'B', 'C', 'D'];
  const correctKeyIndex = (i % 4);
  const correctKey = keys[correctKeyIndex];

  const rawDistractors = [
    template.distractors.A,
    template.distractors.C,
    template.distractors.D
  ];

  const optionsObj = {};
  let distIndex = 0;
  for (let k = 0; k < 4; k++) {
    const kLetter = keys[k];
    if (kLetter === correctKey) {
      optionsObj[kLetter] = template.correctOpt;
    } else {
      optionsObj[kLetter] = rawDistractors[distIndex % rawDistractors.length];
      distIndex++;
    }
  }

  const distractorRationale = {
    A: correctKey === 'A' ? 'Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.' : template.rationales.A,
    B: correctKey === 'B' ? 'Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.' : template.rationales.B,
    C: correctKey === 'C' ? 'Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.' : template.rationales.C,
    D: correctKey === 'D' ? 'Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF.' : template.rationales.D
  };

  segurosAdditional.push({
    id: idStr,
    category: 'Seguros',
    categoryLabel: 'Seguros y Fianzas (SSF)',
    area: specificArea,
    statement: specificStatement,
    options: optionsObj,
    correctAnswer: correctKey,
    explanation: specificExplanation,
    legalBasis: specificBasis,
    distractorRationale: distractorRationale
  });
}

const allSegurosQuestions = [...segurosExisting, ...segurosAdditional];

module.exports = { allSegurosQuestions };
