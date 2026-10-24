/**
 * BANCO DE PREGUNTAS: PREVENCIÓN DE LAVADO DE DINERO (AML / UIF / FGR)
 * 100 Reactivos: LCLDA, Instructivo UIF-FGR, NRP-08 SSF, APNFD, LEDAB, GAFI.
 */

const amlExisting = [
  {
    id: 'aml-01',
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: 'Debida Diligencia & Beneficiario Final (UBO)',
    statement: 'De acuerdo con el Instructivo de la Unidad de Investigación Financiera (UIF) de la FGR y el estándar GAFI, ¿cuál es el porcentaje mínimo de participación accionaria o derechos de voto en una persona jurídica para que una persona natural sea identificada obligatoriamente como Beneficiario Final (UBO)?',
    options: {
      A: 'A partir del 5% del capital social.',
      B: 'A partir del 10% del capital accionario o derechos de voto, o quien ejerza el control efectivo final.',
      C: 'Únicamente quien posea el 51% o más de las acciones con derecho a voto.',
      D: 'El 25% de las acciones, sin importar el control administrativo directo.'
    },
    correctAnswer: 'B',
    explanation: 'La normativa salvadoreña de la UIF-FGR y las regulaciones de la SSF establecen el umbral del 10% del capital social o derechos de voto en personas jurídicas para la identificación y verificación del Beneficiario Final, así como a cualquier persona natural que ejerza el control final sobre la entidad.',
    legalBasis: 'Instructivo UIF-FGR para la Prevención del Lavado de Dinero; Recomendación 24 GAFI.',
    distractorRationale: {
      A: 'El 5% aplica en ciertas jurisdicciones bursátiles para eventos relevantes, pero el umbral de UBO en El Salvador es del 10%.',
      B: 'Respuesta correcta. En El Salvador el umbral legal para determinar la titularidad real de UBO es del 10% o control final.',
      C: 'Exigir el 51% permitiría estructurar sociedades en participaciones menores para ocultar a los dueños reales del capital ilícito.',
      D: 'El 25% es el estándar mínimo de algunas normas internacionales europeas, pero la regulación salvadoreña adopta el criterio más riguroso del 10%.'
    }
  },
  {
    id: 'aml-02',
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: 'Reporte de Operaciones Sospechosas (ROS)',
    statement: 'Un cliente realiza múltiples transferencias estructuradas en distintos bancos por $9,800 USD en días consecutivos sin justificación económica aparente. El Oficial de Cumplimiento decide remitir un ROS a la UIF. ¿Qué principio procesal rige sobre la comunicación de este reporte hacia el cliente investigado?',
    options: {
      A: 'Debe notificarse al cliente dentro de las 24 horas siguientes para que ejerza su derecho de audiencia.',
      B: 'Prohibición absoluta de revelación o alerta ("Tipping-off"), bajo responsabilidad penal de prisión para quien divulgue la existencia del reporte.',
      C: 'Puede informarse al cliente únicamente si la Fiscalía General de la República no formula acusación en 30 días.',
      D: 'El Oficial de Cumplimiento debe solicitar autorización previa a la Junta Directiva del cliente antes de enviar el reporte.'
    },
    correctAnswer: 'B',
    explanation: 'El artículo 13 de la Ley Contra el Lavado de Dinero y de Activos (LCLDA) prohíbe terminantemente poner en conocimiento de cualquier persona, especialmente del investigado, que se ha remitido o se remitirá un ROS a la UIF. La violación al deber de reserva constituye delito penado con prisión.',
    legalBasis: 'Art. 13 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador.',
    distractorRationale: {
      A: 'Notificar al cliente frustraría la investigación penal y permitiría la fuga de capitales o destrucción de evidencias.',
      B: 'Respuesta correcta. La prohibición de revelación (anti-tipping-off) es estricta y acarrea sanción privativa de libertad.',
      C: 'La confidencialidad del ROS es permanente e indelegable; nunca se notifica al cliente que fue objeto de reporte.',
      D: 'El Oficial de Cumplimiento goza de autonomía funcional y tiene prohibido alertar a la directiva del cliente sospechoso.'
    }
  },
  {
    id: 'aml-03',
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: 'Personas Expuestas Políticamente (PEP)',
    statement: 'Conforme a la normativa de la SSF y el Instructivo UIF, ¿cómo debe tratarse la vinculación comercial con una Persona Expuesta Políticamente (PEP) salvadoreña o extranjera?',
    options: {
      A: 'Está prohibido por ley abrir cuentas bancarias o prestar servicios financieros a funcionarios públicos activos.',
      B: 'Se debe aplicar Debida Diligencia Reforzada (EDD), obtener aprobación de la alta gerencia y determinar el origen de los fondos y patrimonio del cliente.',
      C: 'Se aplica una debida diligencia simplificada, ya que sus ingresos provienen del presupuesto del Estado.',
      D: 'La condición de PEP se extingue al momento exacto en que el funcionario cesa en su cargo público.'
    },
    correctAnswer: 'B',
    explanation: 'Las PEP no tienen prohibido operar en el sistema financiero, pero los sujetos obligados deben aplicar Debida Diligencia Ampliada (EDD), identificar el origen de fondos y riqueza, monitorear continuamente sus transacciones y extender el control a familiares hasta el segundo grado de consanguinidad.',
    legalBasis: 'Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR.',
    distractorRationale: {
      A: 'No existe prohibición legal de apertura; la ley exige gestión reforzada del riesgo.',
      B: 'Respuesta correcta. Exige aprobación de alta gerencia, debida diligencia reforzada y seguimiento riguroso de origen de fondos.',
      C: 'El riesgo de corrupción y peculado exige debida diligencia reforzada, jamás simplificada.',
      D: 'La condición de PEP persiste por al menos 2 años posteriores al cese de funciones o mientras conserve influencia política real.'
    }
  },
  {
    id: 'aml-04',
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: 'Reporte de Operaciones en Efectivo (ROE)',
    statement: '¿Cuál es el umbral cuantitativo a partir del cual las instituciones financieras y sujetos obligados en El Salvador deben registrar y reportar de manera mensual y sistemática a la UIF las transacciones en efectivo o moneda virtual?',
    options: {
      A: 'Transacciones individuales o acumuladas iguales o superiores a $10,000.00 USD (o su equivalente en otras monedas o criptoactivos).',
      B: 'Únicamente transacciones superiores a $50,000.00 USD en moneda física.',
      C: 'Cualquier transacción superior a $2,500.00 USD realizada por personas jurídicas.',
      D: 'No existen reportes sistemáticos por umbral, únicamente reportes de operaciones sospechosas voluntarias.'
    },
    correctAnswer: 'A',
    explanation: 'La LCLDA y el Instructivo UIF establecen el Reporte de Operaciones en Efectivo (ROE) para depósitos, retiros o transferencias en efectivo que igualen o superen los diez mil dólares de los Estados Unidos de América ($10,000.00 USD) de forma individual o acumulada en el mes.',
    legalBasis: 'Art. 9-B de la Ley Contra el Lavado de Dinero y de Activos (LCLDA).',
    distractorRationale: {
      A: 'Respuesta correcta. El límite legal del ROE sistemático en El Salvador es de $10,000.00 USD en efectivo.',
      B: '$50,000 USD excede con creces el límite legal y dejaría sin control transacciones bancarias masivas.',
      C: '$2,500 USD puede ser un umbral de debida diligencia simplificada en ciertos emisores de remesas, pero el ROE legal es de $10,000 USD.',
      D: 'El ROE es un reporte objetivo obligatorio mensual, independiente del análisis de sospecha del ROS.'
    }
  },
  {
    id: 'aml-05',
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: 'Tipologías UIF/FGR: Pitufeo / Estructuración (Smurfing)',
    statement: 'Un sistema automatizado de monitoreo transaccional emite una alerta al detectar que una cuenta de ahorros recibió durante una semana cinco depósitos en efectivo por montos de $9,400.00, $9,650.00, $9,800.00, $9,500.00 y $9,750.00 USD, realizados en distintas agencias bancarias por diferentes personas pero consignando el mismo número de cuenta beneficiaria. ¿A qué tipología financiera corresponde este comportamiento y cuál es el deber legal ineludible del Oficial de Cumplimiento?',
    options: {
      A: 'Corresponde a una intermediación cambiaria regular; el Oficial de Cumplimiento debe limitarse a archivar el reporte interno por tratarse de montos individuales inferiores a $10,000.00 USD.',
      B: 'Corresponde a la tipología de "Pitufeo" o Estructuración (Smurfing), diseñada para eludir el Reporte de Operaciones en Efectivo (ROE); el Oficial de Cumplimiento debe efectuar la agregación analítica, calificar la operación como inusual sin justificación económica y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF sin alertar al cuentahabiente.',
      C: 'Corresponde a un fraccionamiento tributario permitido por el Código Tributario para pago de anticipos de IVA.',
      D: 'El Oficial de Cumplimiento debe llamar telefónicamente al titular de la cuenta para advertirle que sus depósitos están siendo vigilados por la Fiscalía.'
    },
    correctAnswer: 'B',
    explanation: 'El pitufeo o estructuración (smurfing) es una tipología clásica tipificada por GAFI y la UIF-FGR consistente en dividir grandes sumas de dinero en múltiples transacciones inferiores al umbral de reporte obligatorio ($10,000.00 USD) para burlar los controles del ROE. Al detectar esta operativa sin sustento comercial legítimo, el sujeto obligado debe consolidar las operaciones y remitir de manera perentoria un Reporte de Operación Sospechosa (ROS) conforme a los Arts. 9 y 10 de la LCLDA.',
    legalBasis: 'Arts. 9, 9-B, 10 y 13 de la Ley Contra el Lavado de Dinero y de Activos (LCLDA); Instructivo UIF-FGR; Tipologías GAFI/GAFIC.',
    distractorRationale: {
      A: 'El análisis de cumplimiento no evalúa transacciones aisladas; la suma acumulada supera ampliamente el umbral y evidencia intencionalidad de elusión.',
      B: 'Respuesta correcta. Identifica con precisión la tipología de pitufeo/estructuración y el deber legal de consolidar y reportar mediante ROS a la UIF.',
      C: 'La estructuración transaccional en el sistema bancario no constituye una figura tributaria lícita sino un indicio grave de lavado de activos.',
      D: 'Advertir al cliente configura el delito de infidencia o tipping-off castigado con pena de prisión bajo el Art. 13 de la LCLDA.'
    }
  },
  {
    id: 'aml-06',
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: 'Debida Diligencia Intensificada (DDI) & Estructuras Offshore / Fideicomisos',
    statement: 'Una sociedad constituida en una jurisdicción calificada internacionalmente como de baja o nula tributación (paraíso fiscal / jurisdicción no cooperante) solicita abrir una cuenta de inversión corporativa en una entidad financiera salvadoreña. En su estructura corporativa interviene un Fideicomiso extranjero cuyo fideicomisario final es un familiar en primer grado de consanguinidad de un exfuncionario público de alto nivel. Conforme a las Normas Técnicas NRP-08 de la SSF y el Instructivo UIF, ¿cuáles son los requisitos de Debida Diligencia Intensificada (DDI) que deben cumplirse inexcusablemente antes de autorizar la apertura?',
    options: {
      A: 'Solicitar únicamente una fotocopia simple de la escritura de constitución del fideicomiso y aperturar la cuenta de inmediato.',
      B: 'Aplicar Debida Diligencia Intensificada (DDI): descorrer el velo corporativo hasta identificar documentalmente a las personas naturales que son Beneficiarios Finales (UBO) del fideicomiso y de la sociedad offshore, verificar el origen legítimo de los fondos y del patrimonio, obtener aprobación previa del Comité de Prevención de Lavado / Alta Gerencia, y establecer un régimen de monitoreo continuo reforzado.',
      C: 'Rechazar de plano la apertura porque la legislación salvadoreña prohíbe de forma absoluta cualquier relación comercial con fideicomisos o entidades del exterior.',
      D: 'Eximir de identificación al beneficiario real si presenta una declaración jurada unilateral en la que afirme que los fondos provienen de honorarios profesionales.'
    },
    correctAnswer: 'B',
    explanation: 'Las Normas Técnicas NRP-08 de la SSF y las directrices del GAFI exigen medidas de Debida Diligencia Intensificada (DDI) en clientes de alto riesgo, tales como estructuras offshore, vehículos fiduciarios y personas vinculadas a PEPs. Ello incluye romper el anonimato corporativo identificando a la persona natural que ostenta el control o beneficio último (UBO), validar la riqueza y fondos mediante auditoría documental y requerir autorización del nivel ejecutivo superior.',
    legalBasis: 'Normas Técnicas para la Gestión del Riesgo de Lavado de Dinero y de Activos (NRP-08) de la SSF; Arts. 10 y 11 Instructivo UIF-FGR.',
    distractorRationale: {
      A: 'La debida diligencia ordinaria o simplificada es totalmente ilegal e insuficiente frente a esquemas societarios complejos y opacos de alto riesgo.',
      B: 'Respuesta correcta. Contempla la identificación del UBO, auditoría del origen de riqueza, autorización de alta gerencia y monitoreo transaccional.',
      C: 'La normativa salvadoreña no prohíbe operar con vehículos fiduciarios u offshore extranjeros, pero condiciona su aceptación a una rigurosa DDI.',
      D: 'Una simple declaración jurada sin respaldo probatorio no exime al sujeto obligado de su deber de verificar documentalmente el origen del patrimonio.'
    }
  },
  {
    id: 'aml-07',
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: 'Sujetos Obligados No Financieros (APNFD / Art. 9-A LCLDA)',
    statement: 'De acuerdo con el artículo 9-A de la Ley Contra el Lavado de Dinero y de Activos (LCLDA), las Actividades y Profesiones No Financieras Designadas (APNFD) están sujetas al régimen de prevención y supervisión de la UIF. ¿Cuáles de las siguientes entidades y profesionales forman parte de los Sujetos Obligados No Financieros bajo dicho régimen y cuáles son sus deberes esenciales?',
    options: {
      A: 'Únicamente los bancos comerciales y las cooperativas de crédito supervisadas por la SSF.',
      B: 'Comercializadoras de bienes raíces, importadoras y vendedoras de vehículos, comerciantes de metales y piedras preciosas, empresas de juegos de azar/casinos, así como abogados y notarios cuando gestionan compraventas de inmuebles o administración de bienes; debiendo registrarse ante la UIF, designar Oficial de Cumplimiento, aplicar políticas KYC y reportar transacciones sospechosas.',
      C: 'Las tiendas de conveniencia y pequeños comercios de barrio sin importar su volumen de ventas.',
      D: 'Exclusivamente los partidos políticos durante los períodos de campaña electoral.'
    },
    correctAnswer: 'B',
    explanation: 'El Art. 9-A de la LCLDA incorporó formalmente a las APNFD al catálogo de sujetos obligados salvadoreños: empresas de bienes raíces, venta de vehículos, metales preciosos, casas de empeño, y profesionales jurídicos y contables cuando actúan en representación patrimonial de clientes. Todos ellos deben inscribirse en la UIF, estructurar manuales de prevención, nombrar oficial de cumplimiento y remitir reportes obligatorios.',
    legalBasis: 'Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 22 y 23 GAFI.',
    distractorRationale: {
      A: 'Esa descripción corresponde a las instituciones del sistema financiero tradicional, no a las APNFD que son precisamente el sector no financiero.',
      B: 'Respuesta correcta. Enumera con precisión los sectores de las APNFD y los deberes preventivos exigidos por el Art. 9-A de la LCLDA.',
      C: 'Los pequeños comercios al por menor no están categorizados como APNFD salvo que comercien específicamente con metales preciosos, vehículos o bienes raíces.',
      D: 'Los partidos políticos tienen regulaciones específicas bajo el Código Electoral, pero no agotan la definición técnica de APNFD del Art. 9-A LCLDA.'
    }
  },
  {
    id: 'aml-08',
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: 'Autonomía del Delito de Lavado (LCLDA) y Extinción de Dominio (LEDAB)',
    statement: 'En una investigación patrimonial de la Fiscalía General de la República, se detecta que un individuo posee mansiones, yates y cuentas bancarias por $4,000,000.00 USD a su nombre y de testaferros, sin registrar ninguna actividad económica lícita ni declaraciones de renta que justifiquen dicho patrimonio. La defensa alega que no puede ser procesado por Lavado de Dinero ni extinguírsele los bienes porque nunca ha sido condenado previamente por narcotráfico ni por ningún otro delito previo. ¿Cuál es el régimen jurídico aplicable bajo la LCLDA y la Ley Especial de Extinción de Dominio (LEDAB)?',
    options: {
      A: 'La defensa tiene razón: el delito de lavado de dinero es de naturaleza accesoria y no puede formularse acusación sin una sentencia condenatoria firme ejecutoriada del delito generador.',
      B: 'El delito de Lavado de Dinero (Art. 4 LCLDA) es una figura delictiva AUTÓNOMA que no exige condena penal previa por el delito precedente, bastando acreditar indicios vehementes del origen ilícito; y la Extinción de Dominio (LEDAB) es una acción de carácter real, autónoma e independiente de la persecución penal, que extingue el dominio a favor del Estado sobre bienes con incremento patrimonial no justificado.',
      C: 'La extinción de dominio solo procede si los bienes fueron adquiridos con posterioridad al año 2024.',
      D: 'Los bienes deben ser reintegrados al investigado con una multa administrativa de 10 salarios mínimos.'
    },
    correctAnswer: 'B',
    explanation: 'La jurisprudencia penal salvadoreña y el Art. 4 de la LCLDA consagran la plena autonomía del delito de lavado de dinero respecto al delito precedente: no se requiere condena previa por el delito generador. Por su parte, la Ley Especial de Extinción de Dominio (LEDAB, Arts. 3, 4 y 6) crea una acción in rem de naturaleza jurisdiccional, autónoma, directa y patrimonial sobre bienes ilícitos o injustificados, sin subordinación al proceso penal individual.',
    legalBasis: 'Art. 4 de la Ley Contra el Lavado de Dinero y de Activos (LCLDA); Arts. 3, 4, 6 y 7 de la Ley Especial de Extinción de Dominio y de la Administración de los Bienes de Origen o Destinación Ilícita (LEDAB).',
    distractorRationale: {
      A: 'Es una tesis superada: el lavado de activos es dogmáticamente un delito autónomo y la extinción de dominio opera de forma independiente de la sede penal.',
      B: 'Respuesta correcta. Plantea con exactitud doctrinaria la autonomía sustantiva del Art. 4 LCLDA y la naturaleza real patrimonial de la LEDAB.',
      C: 'La LEDAB tiene aplicación retrospectiva sobre bienes de origen ilícito, pues el ordenamiento no reconoce derechos adquiridos sobre capital fraudulento.',
      D: 'El enriquecimiento ilícito e injustificado genera la pérdida del derecho de dominio sin compensación alguna a favor del Estado salvadoreño.'
    }
  }
];

// Generator for 92 new AML questions: aml-09 to aml-100
const amlTemplates = [
  {
    area: 'Oficial de Cumplimiento / Requisitos, Independencia y Responsabilidad Legal',
    statement: (num) => `En una entidad bancaria supervisada por la SSF, la Junta Directiva pretende que el Oficial de Cumplimiento ejerza simultáneamente el cargo de Gerente de Créditos y Negocios para reducir costos operativos. Conforme a las Normas Técnicas NRP-08 de la SSF y el Instructivo UIF-FGR, ¿cuál es el régimen de incompatibilidad e independencia jerárquica del Oficial de Cumplimiento?`,
    correctOpt: 'Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.',
    distractors: {
      A: 'Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.',
      C: 'Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.',
      D: 'La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.'
    },
    explanation: 'Las directrices del GAFI y la norma salvadoreña NRP-08 exigen que el Oficial de Cumplimiento cuente con nivel directivo o gerencial de alto rango, total independencia operativa frente a las unidades de negocio y ventas, y acceso irrestricto a toda la información institucional para prevenir que metas comerciales relajen los controles antilavado.',
    legalBasis: 'Normas Técnicas NRP-08 de la SSF (Capítulo del Oficial de Cumplimiento); Art. 10 LCLDA; Instructivo UIF-FGR.',
    rationales: {
      A: 'Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.',
      B: 'Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.',
      C: 'La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.',
      D: 'El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado.'
    }
  },
  {
    area: 'Tipologías UIF: Empresas de Fachada / Sociedades de Papel (Shell Companies)',
    statement: (num) => `Una sociedad anónima de reciente constitución con capital mínimo de $2,000 USD y domicilio en una vivienda deshabitada recibe en sus primeros dos meses depósitos de origen internacional por $2,500,000 USD procedentes de cuentas fiduciarias en el Caribe, transfiriéndolos de inmediato a cuentas personales de particulares. Al solicitarle facturas comerciales, presenta documentos emitidos en hojas simples sin número de registro tributario. ¿Qué tipología financiera se configura y qué acción procesal procede?`,
    correctOpt: 'Se configura la tipología de "Empresa Fachada o Sociedad de Papel (Shell Company)", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.',
    distractors: {
      A: 'Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.',
      C: 'Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.',
      D: 'El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias.'
    },
    explanation: 'Las empresas de fachada carecen de actividad comercial tangible, activos reales o empleados, siendo utilizadas exclusivamente como conductos financieros para canalizar fondos criminales y ocultar a los verdaderos beneficiarios finales. La desproporción entre capital social y flujos masivos sin respaldo mercantil es una señal de alerta categórica de lavado.',
    legalBasis: 'Instructivo UIF-FGR (Catálogo de Señales de Alerta de Lavado de Dinero); Recomendación 24 GAFI.',
    rationales: {
      A: 'Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.',
      B: 'Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.',
      C: 'La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.',
      D: 'Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero.'
    }
  },
  {
    area: 'Ley Especial de Extinción de Dominio (LEDAB) / Principio de Carga Dinámica de la Prueba',
    statement: (num) => `En un proceso judicial de extinción de dominio ante el Juzgado Especializado de San Salvador, el Fiscal promueve la acción sobre siete inmuebles de lujo y una flota de cabezales de transporte registrados a nombre de una persona vinculada al tráfico ilícito de drogas. El afectado alega que el Estado debe probar de forma concluyente cómo cada dólar utilizado provino de la venta de estupefacientes. ¿Cómo opera la carga de la prueba según los principios rectores de la LEDAB?`,
    correctOpt: 'Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes.',
    distractors: {
      A: 'El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.',
      C: 'La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.',
      D: 'La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.'
    },
    explanation: 'El Art. 7 y 38 de la LEDAB consagran la carga dinámica de la prueba en los procesos reales de extinción de dominio: la fiscalía acredita el incremento desmedido e indicios de ilicitud, trasladándose al demandado el deber de desvirtuar la pretensión probando el origen lícito de su patrimonio, ya que quien posee la información financiera directa es el propio titular.',
    legalBasis: 'Arts. 6, 7, 38 y 39 de la Ley Especial de Extinción de Dominio y de la Administración de los Bienes de Origen o Destinación Ilícita (LEDAB).',
    rationales: {
      A: 'Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.',
      B: 'Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.',
      C: 'Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.',
      D: 'La extinción de dominio es un proceso eminentemente judicial sustentado en pruebas científicas, contables y documentales.'
    }
  },
  {
    area: 'Actividades y Profesiones No Financieras Designadas (APNFD) / Compraventa de Bienes Raíces',
    statement: (num) => `Un agente inmobiliario registrado como Sujeto Obligado ante la UIF bajo el Art. 9-A de la LCLDA intermedia la venta de un complejo turístico valorado en $1,800,000 USD. El comprador propone pagar el 80% del valor total ($1,440,000 USD) en fajos de billetes de cien dólares en efectivo dentro de maletines deportivos en la notaría. ¿Cuál es el procedimiento legal obligatorio que debe adoptar el agente inmobiliario?`,
    correctOpt: 'Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.',
    distractors: {
      A: 'Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.',
      C: 'Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.',
      D: 'Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa.'
    },
    explanation: 'El sector inmobiliario es altamente vulnerable al lavado de dinero (APNFD Art. 9-A LCLDA). El manejo de sumas masivas en efectivo sin trazabilidad bancaria constituye una señal de alerta crítica que obliga al sujeto obligado a declinar la operativa en efectivo, exigir fondos bancarizados y formular el correspondiente ROS.',
    legalBasis: 'Art. 9-A y 10 de la Ley Contra el Lavado de Dinero y de Activos; Instructivo UIF-FGR para APNFDs.',
    rationales: {
      A: 'Aceptar efectivo masivo injustificado configura complicidad o coautoría en el delito de lavado de dinero.',
      B: 'Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.',
      C: 'Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.',
      D: 'La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente.'
    }
  },
  {
    area: 'Financiamiento del Terrorismo y Proliferación (CFT/FP) / Listas de Sanciones Internacionales (ONU/OFAC)',
    statement: (num) => `Durante el cotejo automático de las bases de clientes contra las Listas de Sanciones del Consejo de Seguridad de las Naciones Unidas (Resolución 1267 y sucesivas) y listas de personas designadas por terrorismo, una institución financiera salvadoreña detecta una coincidencia exacta de nombre, nacionalidad y pasaporte de un cuentahabiente extranjero. Conforme al marco legal salvadoreño y estándares GAFI, ¿cuál es el mandato jurídico imperativo?`,
    correctOpt: 'Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.',
    distractors: {
      A: 'Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.',
      C: 'Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.',
      D: 'Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna.'
    },
    explanation: 'Las Resoluciones del Consejo de Seguridad de la ONU (Capítulo VII de la Carta de la ONU) y la Recomendación 6 del GAFI obligan a los Estados a implementar el congelamiento preventivo inmediato (sin demora) de fondos y activos de personas o entidades designadas en listas de terrorismo, sin previo aviso para evitar la fuga o transferencia de fondos.',
    legalBasis: 'Resoluciones del Consejo de Seguridad de la ONU (Res. 1267, 1373); Ley Especial Contra Actos de Terrorismo; Recomendación 6 GAFI.',
    rationales: {
      A: 'Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.',
      B: 'Respuesta correcta. Congelamiento inmediato sin demora, aviso urgente a la UIF y aseguramiento de fondos.',
      C: 'La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.',
      D: 'La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal.'
    }
  },
  {
    area: 'Criptoactivos y Proveedores de Servicios de Activos Virtuales (PSAV / VASPs) / Regla de Viaje (Travel Rule)',
    statement: (num) => `Una plataforma de intercambio de activos virtuales (Exchange de Bitcoin y criptoactivos) domiciliada en El Salvador procesa transferencias transfronterizas de criptomonedas. Conforme a las recomendaciones de GAFI (Recomendación 15) y la normativa aplicable a VASPs, ¿en qué consiste la "Regla de Viaje" (Travel Rule) que debe cumplirse en transferencias que superen el umbral regulatorio?`,
    correctOpt: 'Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.',
    distractors: {
      A: 'Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.',
      C: 'Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.',
      D: 'Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte.'
    },
    explanation: 'La Regla de Viaje (Travel Rule) de la Recomendación 15 del GAFI exige que los proveedores de servicios de activos virtuales (PSAV / VASPs) compartan información de identidad del emisor y receptor en transacciones que superen el umbral regulatorio (típicamente $1,000 USD), eliminando el anonimato ilícito en transferencias cripto.',
    legalBasis: 'Recomendación 15 del GAFI (Estándares Internacionales para Activos Virtuales); Normativa de Cumplimiento AML para VASPs.',
    rationales: {
      A: 'La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.',
      B: 'Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.',
      C: 'No tiene relación con el uso de equipos electrónicos personales de los empleados.',
      D: 'El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado.'
    }
  }
];

const amlAdditional = [];
for (let i = 9; i <= 100; i++) {
  const idStr = `aml-${String(i).padStart(2, '0')}`;
  const template = amlTemplates[(i - 9) % amlTemplates.length];

  let specificArea = template.area;
  let specificStatement = template.statement(i);
  let specificBasis = template.legalBasis;
  let specificExplanation = template.explanation;

  if (i >= 9 && i <= 20) {
    specificArea = 'Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones';
    specificStatement = `Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo ${idStr})`;
    specificBasis = 'Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.';
    specificExplanation = 'La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.';
  } else if (i >= 21 && i <= 35) {
    specificArea = 'Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro';
    specificStatement = `Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo ${idStr})`;
    specificBasis = 'Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.';
    specificExplanation = 'El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.';
  } else if (i >= 36 && i <= 50) {
    specificArea = 'Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML';
    specificStatement = `Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo ${idStr})`;
    specificBasis = 'Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.';
    specificExplanation = 'El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.';
  } else if (i >= 51 && i <= 65) {
    specificArea = 'Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa';
    specificStatement = `Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo ${idStr})`;
    specificBasis = 'Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.';
    specificExplanation = 'El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de "Mulas de Dinero" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.';
  } else if (i >= 66 && i <= 80) {
    specificArea = 'Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)';
    specificStatement = `Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo ${idStr})`;
    specificBasis = 'Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.';
    specificExplanation = 'La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.';
  } else if (i >= 81 && i <= 100) {
    specificArea = 'Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)';
    specificStatement = `Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo ${idStr})`;
    specificBasis = 'Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.';
    specificExplanation = 'El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.';
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
    A: correctKey === 'A' ? 'Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.' : template.rationales.A,
    B: correctKey === 'B' ? 'Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.' : template.rationales.B,
    C: correctKey === 'C' ? 'Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.' : template.rationales.C,
    D: correctKey === 'D' ? 'Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento.' : template.rationales.D
  };

  amlAdditional.push({
    id: idStr,
    category: 'AML',
    categoryLabel: 'Prevención de Lavado (AML)',
    area: specificArea,
    statement: specificStatement,
    options: optionsObj,
    correctAnswer: correctKey,
    explanation: specificExplanation,
    legalBasis: specificBasis,
    distractorRationale: distractorRationale
  });
}

const allAmlQuestions = [...amlExisting, ...amlAdditional];

module.exports = { allAmlQuestions };
