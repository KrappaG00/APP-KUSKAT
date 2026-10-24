/**
 * BANCO OFICIAL DE CUMPLIMIENTO REGULATORIO, PREVENCIÓN DE LAVADO Y SEGUROS (SSF & UIF/FGR)
 * Plataforma KUSKAT · República de El Salvador
 *
 * Marco Normativo:
 * - Ley Contra el Lavado de Dinero y de Activos (LCLDA - Decreto Leg. 498) e Instructivo UIF-FGR.
 * - Normas Técnicas para la Gestión del Riesgo de Lavado de Dinero y de Activos (NRP-08 de la SSF).
 * - Ley Especial de Extinción de Dominio y de la Administración de los Bienes de Origen o Destinación Ilícita (LEDAB).
 * - Ley de Sociedades de Seguros y Código de Comercio de El Salvador (Arts. 1344 a 1550).
 * - Ley de Compras Públicas de El Salvador.
 *
 * Exactamente 200 preguntas especializadas:
 * - 100 Prevención de Lavado de Dinero (AML / UIF / FGR)
 * - 100 Seguros Mercantiles y Fianzas (SSF)
 */

export interface ComplianceQuestion {
  id: string;
  category: 'AML' | 'Seguros';
  categoryLabel: string;
  area: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalBasis: string;
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export const COMPLIANCE_SECTORS = [
  {
    id: 'all',
    name: 'Todos los Sectores',
    icon: '🏛️',
  },
  {
    id: 'AML',
    name: 'Prevención de Lavado (AML / UIF / FGR)',
    icon: '🛡️',
  },
  {
    id: 'Seguros',
    name: 'Seguros y Fianzas Mercantiles (SSF)',
    icon: '📜',
  },
];

export const COMPLIANCE_QUESTIONS: ComplianceQuestion[] = [
  {
    "id": "aml-01",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Debida Diligencia & Beneficiario Final (UBO)",
    "statement": "De acuerdo con el Instructivo de la Unidad de Investigación Financiera (UIF) de la FGR y el estándar GAFI, ¿cuál es el porcentaje mínimo de participación accionaria o derechos de voto en una persona jurídica para que una persona natural sea identificada obligatoriamente como Beneficiario Final (UBO)?",
    "options": {
      "A": "A partir del 5% del capital social.",
      "B": "A partir del 10% del capital accionario o derechos de voto, o quien ejerza el control efectivo final.",
      "C": "Únicamente quien posea el 51% o más de las acciones con derecho a voto.",
      "D": "El 25% de las acciones, sin importar el control administrativo directo."
    },
    "correctAnswer": "B",
    "explanation": "La normativa salvadoreña de la UIF-FGR y las regulaciones de la SSF establecen el umbral del 10% del capital social o derechos de voto en personas jurídicas para la identificación y verificación del Beneficiario Final, así como a cualquier persona natural que ejerza el control final sobre la entidad.",
    "legalBasis": "Instructivo UIF-FGR para la Prevención del Lavado de Dinero; Recomendación 24 GAFI.",
    "distractorRationale": {
      "A": "El 5% aplica en ciertas jurisdicciones bursátiles para eventos relevantes, pero el umbral de UBO en El Salvador es del 10%.",
      "B": "Respuesta correcta. En El Salvador el umbral legal para determinar la titularidad real de UBO es del 10% o control final.",
      "C": "Exigir el 51% permitiría estructurar sociedades en participaciones menores para ocultar a los dueños reales del capital ilícito.",
      "D": "El 25% es el estándar mínimo de algunas normas internacionales europeas, pero la regulación salvadoreña adopta el criterio más riguroso del 10%."
    }
  },
  {
    "id": "aml-02",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Reporte de Operaciones Sospechosas (ROS)",
    "statement": "Un cliente realiza múltiples transferencias estructuradas en distintos bancos por $9,800 USD en días consecutivos sin justificación económica aparente. El Oficial de Cumplimiento decide remitir un ROS a la UIF. ¿Qué principio procesal rige sobre la comunicación de este reporte hacia el cliente investigado?",
    "options": {
      "A": "Debe notificarse al cliente dentro de las 24 horas siguientes para que ejerza su derecho de audiencia.",
      "B": "Prohibición absoluta de revelación o alerta (\"Tipping-off\"), bajo responsabilidad penal de prisión para quien divulgue la existencia del reporte.",
      "C": "Puede informarse al cliente únicamente si la Fiscalía General de la República no formula acusación en 30 días.",
      "D": "El Oficial de Cumplimiento debe solicitar autorización previa a la Junta Directiva del cliente antes de enviar el reporte."
    },
    "correctAnswer": "B",
    "explanation": "El artículo 13 de la Ley Contra el Lavado de Dinero y de Activos (LCLDA) prohíbe terminantemente poner en conocimiento de cualquier persona, especialmente del investigado, que se ha remitido o se remitirá un ROS a la UIF. La violación al deber de reserva constituye delito penado con prisión.",
    "legalBasis": "Art. 13 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador.",
    "distractorRationale": {
      "A": "Notificar al cliente frustraría la investigación penal y permitiría la fuga de capitales o destrucción de evidencias.",
      "B": "Respuesta correcta. La prohibición de revelación (anti-tipping-off) es estricta y acarrea sanción privativa de libertad.",
      "C": "La confidencialidad del ROS es permanente e indelegable; nunca se notifica al cliente que fue objeto de reporte.",
      "D": "El Oficial de Cumplimiento goza de autonomía funcional y tiene prohibido alertar a la directiva del cliente sospechoso."
    }
  },
  {
    "id": "aml-03",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Personas Expuestas Políticamente (PEP)",
    "statement": "Conforme a la normativa de la SSF y el Instructivo UIF, ¿cómo debe tratarse la vinculación comercial con una Persona Expuesta Políticamente (PEP) salvadoreña o extranjera?",
    "options": {
      "A": "Está prohibido por ley abrir cuentas bancarias o prestar servicios financieros a funcionarios públicos activos.",
      "B": "Se debe aplicar Debida Diligencia Reforzada (EDD), obtener aprobación de la alta gerencia y determinar el origen de los fondos y patrimonio del cliente.",
      "C": "Se aplica una debida diligencia simplificada, ya que sus ingresos provienen del presupuesto del Estado.",
      "D": "La condición de PEP se extingue al momento exacto en que el funcionario cesa en su cargo público."
    },
    "correctAnswer": "B",
    "explanation": "Las PEP no tienen prohibido operar en el sistema financiero, pero los sujetos obligados deben aplicar Debida Diligencia Ampliada (EDD), identificar el origen de fondos y riqueza, monitorear continuamente sus transacciones y extender el control a familiares hasta el segundo grado de consanguinidad.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR.",
    "distractorRationale": {
      "A": "No existe prohibición legal de apertura; la ley exige gestión reforzada del riesgo.",
      "B": "Respuesta correcta. Exige aprobación de alta gerencia, debida diligencia reforzada y seguimiento riguroso de origen de fondos.",
      "C": "El riesgo de corrupción y peculado exige debida diligencia reforzada, jamás simplificada.",
      "D": "La condición de PEP persiste por al menos 2 años posteriores al cese de funciones o mientras conserve influencia política real."
    }
  },
  {
    "id": "aml-04",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Reporte de Operaciones en Efectivo (ROE)",
    "statement": "¿Cuál es el umbral cuantitativo a partir del cual las instituciones financieras y sujetos obligados en El Salvador deben registrar y reportar de manera mensual y sistemática a la UIF las transacciones en efectivo o moneda virtual?",
    "options": {
      "A": "Transacciones individuales o acumuladas iguales o superiores a $10,000.00 USD (o su equivalente en otras monedas o criptoactivos).",
      "B": "Únicamente transacciones superiores a $50,000.00 USD en moneda física.",
      "C": "Cualquier transacción superior a $2,500.00 USD realizada por personas jurídicas.",
      "D": "No existen reportes sistemáticos por umbral, únicamente reportes de operaciones sospechosas voluntarias."
    },
    "correctAnswer": "A",
    "explanation": "La LCLDA y el Instructivo UIF establecen el Reporte de Operaciones en Efectivo (ROE) para depósitos, retiros o transferencias en efectivo que igualen o superen los diez mil dólares de los Estados Unidos de América ($10,000.00 USD) de forma individual o acumulada en el mes.",
    "legalBasis": "Art. 9-B de la Ley Contra el Lavado de Dinero y de Activos (LCLDA).",
    "distractorRationale": {
      "A": "Respuesta correcta. El límite legal del ROE sistemático en El Salvador es de $10,000.00 USD en efectivo.",
      "B": "$50,000 USD excede con creces el límite legal y dejaría sin control transacciones bancarias masivas.",
      "C": "$2,500 USD puede ser un umbral de debida diligencia simplificada en ciertos emisores de remesas, pero el ROE legal es de $10,000 USD.",
      "D": "El ROE es un reporte objetivo obligatorio mensual, independiente del análisis de sospecha del ROS."
    }
  },
  {
    "id": "aml-05",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Tipologías UIF/FGR: Pitufeo / Estructuración (Smurfing)",
    "statement": "Un sistema automatizado de monitoreo transaccional emite una alerta al detectar que una cuenta de ahorros recibió durante una semana cinco depósitos en efectivo por montos de $9,400.00, $9,650.00, $9,800.00, $9,500.00 y $9,750.00 USD, realizados en distintas agencias bancarias por diferentes personas pero consignando el mismo número de cuenta beneficiaria. ¿A qué tipología financiera corresponde este comportamiento y cuál es el deber legal ineludible del Oficial de Cumplimiento?",
    "options": {
      "A": "Corresponde a una intermediación cambiaria regular; el Oficial de Cumplimiento debe limitarse a archivar el reporte interno por tratarse de montos individuales inferiores a $10,000.00 USD.",
      "B": "Corresponde a la tipología de \"Pitufeo\" o Estructuración (Smurfing), diseñada para eludir el Reporte de Operaciones en Efectivo (ROE); el Oficial de Cumplimiento debe efectuar la agregación analítica, calificar la operación como inusual sin justificación económica y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF sin alertar al cuentahabiente.",
      "C": "Corresponde a un fraccionamiento tributario permitido por el Código Tributario para pago de anticipos de IVA.",
      "D": "El Oficial de Cumplimiento debe llamar telefónicamente al titular de la cuenta para advertirle que sus depósitos están siendo vigilados por la Fiscalía."
    },
    "correctAnswer": "B",
    "explanation": "El pitufeo o estructuración (smurfing) es una tipología clásica tipificada por GAFI y la UIF-FGR consistente en dividir grandes sumas de dinero en múltiples transacciones inferiores al umbral de reporte obligatorio ($10,000.00 USD) para burlar los controles del ROE. Al detectar esta operativa sin sustento comercial legítimo, el sujeto obligado debe consolidar las operaciones y remitir de manera perentoria un Reporte de Operación Sospechosa (ROS) conforme a los Arts. 9 y 10 de la LCLDA.",
    "legalBasis": "Arts. 9, 9-B, 10 y 13 de la Ley Contra el Lavado de Dinero y de Activos (LCLDA); Instructivo UIF-FGR; Tipologías GAFI/GAFIC.",
    "distractorRationale": {
      "A": "El análisis de cumplimiento no evalúa transacciones aisladas; la suma acumulada supera ampliamente el umbral y evidencia intencionalidad de elusión.",
      "B": "Respuesta correcta. Identifica con precisión la tipología de pitufeo/estructuración y el deber legal de consolidar y reportar mediante ROS a la UIF.",
      "C": "La estructuración transaccional en el sistema bancario no constituye una figura tributaria lícita sino un indicio grave de lavado de activos.",
      "D": "Advertir al cliente configura el delito de infidencia o tipping-off castigado con pena de prisión bajo el Art. 13 de la LCLDA."
    }
  },
  {
    "id": "aml-06",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Debida Diligencia Intensificada (DDI) & Estructuras Offshore / Fideicomisos",
    "statement": "Una sociedad constituida en una jurisdicción calificada internacionalmente como de baja o nula tributación (paraíso fiscal / jurisdicción no cooperante) solicita abrir una cuenta de inversión corporativa en una entidad financiera salvadoreña. En su estructura corporativa interviene un Fideicomiso extranjero cuyo fideicomisario final es un familiar en primer grado de consanguinidad de un exfuncionario público de alto nivel. Conforme a las Normas Técnicas NRP-08 de la SSF y el Instructivo UIF, ¿cuáles son los requisitos de Debida Diligencia Intensificada (DDI) que deben cumplirse inexcusablemente antes de autorizar la apertura?",
    "options": {
      "A": "Solicitar únicamente una fotocopia simple de la escritura de constitución del fideicomiso y aperturar la cuenta de inmediato.",
      "B": "Aplicar Debida Diligencia Intensificada (DDI): descorrer el velo corporativo hasta identificar documentalmente a las personas naturales que son Beneficiarios Finales (UBO) del fideicomiso y de la sociedad offshore, verificar el origen legítimo de los fondos y del patrimonio, obtener aprobación previa del Comité de Prevención de Lavado / Alta Gerencia, y establecer un régimen de monitoreo continuo reforzado.",
      "C": "Rechazar de plano la apertura porque la legislación salvadoreña prohíbe de forma absoluta cualquier relación comercial con fideicomisos o entidades del exterior.",
      "D": "Eximir de identificación al beneficiario real si presenta una declaración jurada unilateral en la que afirme que los fondos provienen de honorarios profesionales."
    },
    "correctAnswer": "B",
    "explanation": "Las Normas Técnicas NRP-08 de la SSF y las directrices del GAFI exigen medidas de Debida Diligencia Intensificada (DDI) en clientes de alto riesgo, tales como estructuras offshore, vehículos fiduciarios y personas vinculadas a PEPs. Ello incluye romper el anonimato corporativo identificando a la persona natural que ostenta el control o beneficio último (UBO), validar la riqueza y fondos mediante auditoría documental y requerir autorización del nivel ejecutivo superior.",
    "legalBasis": "Normas Técnicas para la Gestión del Riesgo de Lavado de Dinero y de Activos (NRP-08) de la SSF; Arts. 10 y 11 Instructivo UIF-FGR.",
    "distractorRationale": {
      "A": "La debida diligencia ordinaria o simplificada es totalmente ilegal e insuficiente frente a esquemas societarios complejos y opacos de alto riesgo.",
      "B": "Respuesta correcta. Contempla la identificación del UBO, auditoría del origen de riqueza, autorización de alta gerencia y monitoreo transaccional.",
      "C": "La normativa salvadoreña no prohíbe operar con vehículos fiduciarios u offshore extranjeros, pero condiciona su aceptación a una rigurosa DDI.",
      "D": "Una simple declaración jurada sin respaldo probatorio no exime al sujeto obligado de su deber de verificar documentalmente el origen del patrimonio."
    }
  },
  {
    "id": "aml-07",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sujetos Obligados No Financieros (APNFD / Art. 9-A LCLDA)",
    "statement": "De acuerdo con el artículo 9-A de la Ley Contra el Lavado de Dinero y de Activos (LCLDA), las Actividades y Profesiones No Financieras Designadas (APNFD) están sujetas al régimen de prevención y supervisión de la UIF. ¿Cuáles de las siguientes entidades y profesionales forman parte de los Sujetos Obligados No Financieros bajo dicho régimen y cuáles son sus deberes esenciales?",
    "options": {
      "A": "Únicamente los bancos comerciales y las cooperativas de crédito supervisadas por la SSF.",
      "B": "Comercializadoras de bienes raíces, importadoras y vendedoras de vehículos, comerciantes de metales y piedras preciosas, empresas de juegos de azar/casinos, así como abogados y notarios cuando gestionan compraventas de inmuebles o administración de bienes; debiendo registrarse ante la UIF, designar Oficial de Cumplimiento, aplicar políticas KYC y reportar transacciones sospechosas.",
      "C": "Las tiendas de conveniencia y pequeños comercios de barrio sin importar su volumen de ventas.",
      "D": "Exclusivamente los partidos políticos durante los períodos de campaña electoral."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 9-A de la LCLDA incorporó formalmente a las APNFD al catálogo de sujetos obligados salvadoreños: empresas de bienes raíces, venta de vehículos, metales preciosos, casas de empeño, y profesionales jurídicos y contables cuando actúan en representación patrimonial de clientes. Todos ellos deben inscribirse en la UIF, estructurar manuales de prevención, nombrar oficial de cumplimiento y remitir reportes obligatorios.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 22 y 23 GAFI.",
    "distractorRationale": {
      "A": "Esa descripción corresponde a las instituciones del sistema financiero tradicional, no a las APNFD que son precisamente el sector no financiero.",
      "B": "Respuesta correcta. Enumera con precisión los sectores de las APNFD y los deberes preventivos exigidos por el Art. 9-A de la LCLDA.",
      "C": "Los pequeños comercios al por menor no están categorizados como APNFD salvo que comercien específicamente con metales preciosos, vehículos o bienes raíces.",
      "D": "Los partidos políticos tienen regulaciones específicas bajo el Código Electoral, pero no agotan la definición técnica de APNFD del Art. 9-A LCLDA."
    }
  },
  {
    "id": "aml-08",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Autonomía del Delito de Lavado (LCLDA) y Extinción de Dominio (LEDAB)",
    "statement": "En una investigación patrimonial de la Fiscalía General de la República, se detecta que un individuo posee mansiones, yates y cuentas bancarias por $4,000,000.00 USD a su nombre y de testaferros, sin registrar ninguna actividad económica lícita ni declaraciones de renta que justifiquen dicho patrimonio. La defensa alega que no puede ser procesado por Lavado de Dinero ni extinguírsele los bienes porque nunca ha sido condenado previamente por narcotráfico ni por ningún otro delito previo. ¿Cuál es el régimen jurídico aplicable bajo la LCLDA y la Ley Especial de Extinción de Dominio (LEDAB)?",
    "options": {
      "A": "La defensa tiene razón: el delito de lavado de dinero es de naturaleza accesoria y no puede formularse acusación sin una sentencia condenatoria firme ejecutoriada del delito generador.",
      "B": "El delito de Lavado de Dinero (Art. 4 LCLDA) es una figura delictiva AUTÓNOMA que no exige condena penal previa por el delito precedente, bastando acreditar indicios vehementes del origen ilícito; y la Extinción de Dominio (LEDAB) es una acción de carácter real, autónoma e independiente de la persecución penal, que extingue el dominio a favor del Estado sobre bienes con incremento patrimonial no justificado.",
      "C": "La extinción de dominio solo procede si los bienes fueron adquiridos con posterioridad al año 2024.",
      "D": "Los bienes deben ser reintegrados al investigado con una multa administrativa de 10 salarios mínimos."
    },
    "correctAnswer": "B",
    "explanation": "La jurisprudencia penal salvadoreña y el Art. 4 de la LCLDA consagran la plena autonomía del delito de lavado de dinero respecto al delito precedente: no se requiere condena previa por el delito generador. Por su parte, la Ley Especial de Extinción de Dominio (LEDAB, Arts. 3, 4 y 6) crea una acción in rem de naturaleza jurisdiccional, autónoma, directa y patrimonial sobre bienes ilícitos o injustificados, sin subordinación al proceso penal individual.",
    "legalBasis": "Art. 4 de la Ley Contra el Lavado de Dinero y de Activos (LCLDA); Arts. 3, 4, 6 y 7 de la Ley Especial de Extinción de Dominio y de la Administración de los Bienes de Origen o Destinación Ilícita (LEDAB).",
    "distractorRationale": {
      "A": "Es una tesis superada: el lavado de activos es dogmáticamente un delito autónomo y la extinción de dominio opera de forma independiente de la sede penal.",
      "B": "Respuesta correcta. Plantea con exactitud doctrinaria la autonomía sustantiva del Art. 4 LCLDA y la naturaleza real patrimonial de la LEDAB.",
      "C": "La LEDAB tiene aplicación retrospectiva sobre bienes de origen ilícito, pues el ordenamiento no reconoce derechos adquiridos sobre capital fraudulento.",
      "D": "El enriquecimiento ilícito e injustificado genera la pérdida del derecho de dominio sin compensación alguna a favor del Estado salvadoreño."
    }
  },
  {
    "id": "aml-09",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-09)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.",
      "C": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "D": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana."
    },
    "correctAnswer": "B",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado."
    }
  },
  {
    "id": "aml-10",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-10)",
    "options": {
      "A": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "B": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "C": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "C",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-11",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-11)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "C": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.",
      "D": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes."
    },
    "correctAnswer": "D",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-12",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-12)",
    "options": {
      "A": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "B": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "C": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "A",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-13",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-13)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.",
      "C": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "D": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna."
    },
    "correctAnswer": "B",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal."
    }
  },
  {
    "id": "aml-14",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-14)",
    "options": {
      "A": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "B": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "C": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "C",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-15",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-15)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "C": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.",
      "D": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas."
    },
    "correctAnswer": "D",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-16",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-16)",
    "options": {
      "A": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "B": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "C": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "A",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-17",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-17)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes.",
      "C": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "D": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación."
    },
    "correctAnswer": "B",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "La extinción de dominio es un proceso eminentemente judicial sustentado en pruebas científicas, contables y documentales."
    }
  },
  {
    "id": "aml-18",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-18)",
    "options": {
      "A": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "B": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "C": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "C",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Aceptar efectivo masivo injustificado configura complicidad o coautoría en el delito de lavado de dinero.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-19",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-19)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "C": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna.",
      "D": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente."
    },
    "correctAnswer": "D",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Congelamiento inmediato sin demora, aviso urgente a la UIF y aseguramiento de fondos.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-20",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Monitoreo Transaccional / Análisis de Perfil Transaccional y Desviaciones",
    "statement": "Una cuenta bancaria corporativa de una empresa de abarrotes con ventas mensuales promedio de $15,000 USD recibe inesperadamente depósitos de fondos extranjeros por $850,000 USD procedentes de una entidad financiera en Europa del Este. El cliente no aporta contratos mercantiles que justifiquen el giro atípico. ¿Cuál es el protocolo que debe ejecutar el equipo de Monitoreo AML? (Reactivo aml-20)",
    "options": {
      "A": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "B": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "C": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "A",
    "explanation": "La alteración sustancial del perfil transaccional sin justificación económica coherente activa de inmediato el análisis intensificado. De no subsanarse documentalmente en el plazo reglamentario, el banco debe calificar la operación como sospechosa e informar mediante ROS a la UIF.",
    "legalBasis": "Normas Técnicas NRP-08 de la SSF; Instructivo UIF-FGR para Prevención de Lavado.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "No tiene relación con el uso de equipos electrónicos personales de los empleados.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-21",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-21)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.",
      "C": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "D": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana."
    },
    "correctAnswer": "B",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado."
    }
  },
  {
    "id": "aml-22",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-22)",
    "options": {
      "A": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "B": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "C": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "C",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-23",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-23)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "C": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.",
      "D": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes."
    },
    "correctAnswer": "D",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-24",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-24)",
    "options": {
      "A": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "B": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "C": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "A",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-25",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-25)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.",
      "C": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "D": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna."
    },
    "correctAnswer": "B",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal."
    }
  },
  {
    "id": "aml-26",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-26)",
    "options": {
      "A": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "B": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "C": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "C",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-27",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-27)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "C": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.",
      "D": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas."
    },
    "correctAnswer": "D",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-28",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-28)",
    "options": {
      "A": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "B": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "C": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "A",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-29",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-29)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes.",
      "C": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "D": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación."
    },
    "correctAnswer": "B",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "La extinción de dominio es un proceso eminentemente judicial sustentado en pruebas científicas, contables y documentales."
    }
  },
  {
    "id": "aml-30",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-30)",
    "options": {
      "A": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "B": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "C": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "C",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Aceptar efectivo masivo injustificado configura complicidad o coautoría en el delito de lavado de dinero.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-31",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-31)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "C": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna.",
      "D": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente."
    },
    "correctAnswer": "D",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Congelamiento inmediato sin demora, aviso urgente a la UIF y aseguramiento de fondos.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-32",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-32)",
    "options": {
      "A": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "B": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "C": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "A",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "No tiene relación con el uso de equipos electrónicos personales de los empleados.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-33",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-33)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.",
      "C": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "D": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana."
    },
    "correctAnswer": "B",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado."
    }
  },
  {
    "id": "aml-34",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-34)",
    "options": {
      "A": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "B": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "C": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "C",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-35",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Casas de Empeño y Metales Preciosos / APNFD y Trazabilidad de Oro",
    "statement": "Una casa de empeño y compraventa de oro y joyas (APNFD) recibe diariamente a un cliente recurrente que vende barras fundidas de oro fino por valor de $9,500 USD en efectivo, negándose a revelar la procedencia del mineral y presentando documentos de identidad de terceros. ¿Cuál es el deber legal de la empresa según el Art. 9-A LCLDA? (Reactivo aml-35)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "C": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.",
      "D": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes."
    },
    "correctAnswer": "D",
    "explanation": "El comercio de metales preciosos es un canal vulnerable de blanqueo de capitales de la minería ilegal o crimen organizado. El sujeto obligado debe suspender las transacciones, exigir certificados de origen legítimo del metal y enviar un Reporte de Operación Sospechosa a la UIF.",
    "legalBasis": "Art. 9-A de la Ley Contra el Lavado de Dinero y de Activos; Guía de APNFDs para Joyerías y Metales Preciosos UIF.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-36",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-36)",
    "options": {
      "A": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "B": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "C": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "A",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-37",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-37)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.",
      "C": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "D": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna."
    },
    "correctAnswer": "B",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal."
    }
  },
  {
    "id": "aml-38",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-38)",
    "options": {
      "A": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "B": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "C": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "C",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-39",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-39)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "C": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.",
      "D": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas."
    },
    "correctAnswer": "D",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-40",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-40)",
    "options": {
      "A": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "B": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "C": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "A",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-41",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-41)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes.",
      "C": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "D": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación."
    },
    "correctAnswer": "B",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "La extinción de dominio es un proceso eminentemente judicial sustentado en pruebas científicas, contables y documentales."
    }
  },
  {
    "id": "aml-42",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-42)",
    "options": {
      "A": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "B": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "C": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "C",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Aceptar efectivo masivo injustificado configura complicidad o coautoría en el delito de lavado de dinero.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-43",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-43)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "C": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna.",
      "D": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente."
    },
    "correctAnswer": "D",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Congelamiento inmediato sin demora, aviso urgente a la UIF y aseguramiento de fondos.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-44",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-44)",
    "options": {
      "A": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "B": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "C": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "A",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "No tiene relación con el uso de equipos electrónicos personales de los empleados.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-45",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-45)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.",
      "C": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "D": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana."
    },
    "correctAnswer": "B",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado."
    }
  },
  {
    "id": "aml-46",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-46)",
    "options": {
      "A": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "B": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "C": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "C",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-47",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-47)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "C": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.",
      "D": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes."
    },
    "correctAnswer": "D",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-48",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-48)",
    "options": {
      "A": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "B": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "C": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "A",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-49",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-49)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.",
      "C": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "D": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna."
    },
    "correctAnswer": "B",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal."
    }
  },
  {
    "id": "aml-50",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sanciones Administrativas / Potestad Sancionatoria de la SSF y UIF por Fallas AML",
    "statement": "Una institución financiera regulada no capacita a su personal durante dos años consecutivos y omite remitir los Reportes de Operaciones en Efectivo (ROE) mensuales a la UIF en tres ocasiones. ¿Qué régimen sancionatorio administrativo procede contra la entidad y sus administradores? (Reactivo aml-50)",
    "options": {
      "A": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "B": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "C": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "C",
    "explanation": "El incumplimiento deliberado o negligente de las obligaciones de prevención, registro, capacitación y reporte sistemático (ROE) acarrea multas pecuniarias millonarias impuestas por la SSF y la FGR, además de sanciones personales e inhabilitación a los miembros de la Junta Directiva.",
    "legalBasis": "Ley Contra el Lavado de Dinero y de Activos (Arts. 15 y 16); Ley de Supervisión y Regulación del Sistema Financiero.",
    "distractorRationale": {
      "A": "La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-51",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-51)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "C": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.",
      "D": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas."
    },
    "correctAnswer": "D",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-52",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-52)",
    "options": {
      "A": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "B": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "C": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "A",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-53",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-53)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes.",
      "C": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "D": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación."
    },
    "correctAnswer": "B",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "La extinción de dominio es un proceso eminentemente judicial sustentado en pruebas científicas, contables y documentales."
    }
  },
  {
    "id": "aml-54",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-54)",
    "options": {
      "A": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "B": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "C": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "C",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Aceptar efectivo masivo injustificado configura complicidad o coautoría en el delito de lavado de dinero.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-55",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-55)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "C": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna.",
      "D": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente."
    },
    "correctAnswer": "D",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Congelamiento inmediato sin demora, aviso urgente a la UIF y aseguramiento de fondos.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-56",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-56)",
    "options": {
      "A": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "B": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "C": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "A",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "No tiene relación con el uso de equipos electrónicos personales de los empleados.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-57",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-57)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.",
      "C": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "D": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana."
    },
    "correctAnswer": "B",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado."
    }
  },
  {
    "id": "aml-58",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-58)",
    "options": {
      "A": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "B": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "C": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "C",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-59",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-59)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "C": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.",
      "D": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes."
    },
    "correctAnswer": "D",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-60",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-60)",
    "options": {
      "A": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "B": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "C": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "A",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-61",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-61)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.",
      "C": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "D": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna."
    },
    "correctAnswer": "B",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal."
    }
  },
  {
    "id": "aml-62",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-62)",
    "options": {
      "A": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "B": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "C": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "C",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-63",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-63)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "C": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.",
      "D": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas."
    },
    "correctAnswer": "D",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-64",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-64)",
    "options": {
      "A": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "B": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "C": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "A",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-65",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Sector Remesas Familiares / Agentes Subagentes y DDC Simplificada vs Completa",
    "statement": "Una agencia comercializadora de remesas internacionales atiende a una clienta que recibe en un mes 45 transferencias desde distintos remitentes en el extranjero por montos exactos de $490 USD cada una, cobrándolas todas en efectivo mediante diferentes agencias locales. ¿Qué riesgo de lavado se identifica y qué medida procede? (Reactivo aml-65)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes.",
      "C": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "D": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación."
    },
    "correctAnswer": "B",
    "explanation": "El uso de remesas fraccionadas y multiplicidad de ordenantes extranjeros hacia un único beneficiario local es indicativo de la tipología de \"Mulas de Dinero\" o recaudación de fondos ilícitos del narcotráfico o extorsión. Procede la consolidación transaccional y reporte ROS a la UIF.",
    "legalBasis": "Instructivo UIF-FGR para Empresas de Transferencia de Fondos; Estándares GAFI sobre Mulas Financieras.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "La extinción de dominio es un proceso eminentemente judicial sustentado en pruebas científicas, contables y documentales."
    }
  },
  {
    "id": "aml-66",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-66)",
    "options": {
      "A": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "B": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "C": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "C",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Aceptar efectivo masivo injustificado configura complicidad o coautoría en el delito de lavado de dinero.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-67",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-67)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "C": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna.",
      "D": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente."
    },
    "correctAnswer": "D",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Congelamiento inmediato sin demora, aviso urgente a la UIF y aseguramiento de fondos.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-68",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-68)",
    "options": {
      "A": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "B": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "C": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "A",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "No tiene relación con el uso de equipos electrónicos personales de los empleados.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-69",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-69)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.",
      "C": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "D": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana."
    },
    "correctAnswer": "B",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado."
    }
  },
  {
    "id": "aml-70",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-70)",
    "options": {
      "A": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "B": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "C": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "C",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-71",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-71)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "C": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.",
      "D": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes."
    },
    "correctAnswer": "D",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-72",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-72)",
    "options": {
      "A": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "B": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "C": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "A",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-73",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-73)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.",
      "C": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "D": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna."
    },
    "correctAnswer": "B",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal."
    }
  },
  {
    "id": "aml-74",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-74)",
    "options": {
      "A": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "B": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "C": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "C",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-75",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-75)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "C": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.",
      "D": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas."
    },
    "correctAnswer": "D",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-76",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-76)",
    "options": {
      "A": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "B": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "C": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "A",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-77",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-77)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes.",
      "C": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "D": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación."
    },
    "correctAnswer": "B",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "La extinción de dominio es un proceso eminentemente judicial sustentado en pruebas científicas, contables y documentales."
    }
  },
  {
    "id": "aml-78",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-78)",
    "options": {
      "A": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "B": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "C": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "C",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Aceptar efectivo masivo injustificado configura complicidad o coautoría en el delito de lavado de dinero.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-79",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-79)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "C": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna.",
      "D": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente."
    },
    "correctAnswer": "D",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Congelamiento inmediato sin demora, aviso urgente a la UIF y aseguramiento de fondos.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-80",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Comercio Exterior / Blanqueo Basado en el Comercio (Trade-Based Money Laundering - TBML)",
    "statement": "Una importadora de textiles declara en aduanas la importación de 1,000 camisas de algodón a un precio unitario de $1,200.00 USD por unidad (sobrefacturación flagrante de mercancías), liquidando divisas a través del sistema bancario nacional hacia una cuenta en Hong Kong. ¿Qué tipología internacional se tipifica? (Reactivo aml-80)",
    "options": {
      "A": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "B": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "C": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "A",
    "explanation": "La sobrefacturación masiva de importaciones es el mecanismo predilecto del TBML (Trade-Based Money Laundering): permite transferir sumas exorbitantes de dinero ilícito a través de pagos aduaneros aparentemente legítimos, amparados en mercancías con valores artificialmente inflados.",
    "legalBasis": "Guía de GAFI sobre Blanqueo de Capitales Basado en el Comercio (TBML); Art. 4 LCLDA; Código Penal.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "No tiene relación con el uso de equipos electrónicos personales de los empleados.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-81",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-81)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.",
      "C": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "D": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado."
    }
  },
  {
    "id": "aml-82",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-82)",
    "options": {
      "A": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "B": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "C": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "C",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-83",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-83)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "C": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.",
      "D": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes."
    },
    "correctAnswer": "D",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-84",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-84)",
    "options": {
      "A": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "B": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "C": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-85",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-85)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.",
      "C": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "D": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal."
    }
  },
  {
    "id": "aml-86",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-86)",
    "options": {
      "A": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "B": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "C": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "C",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-87",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-87)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "C": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.",
      "D": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas."
    },
    "correctAnswer": "D",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-88",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-88)",
    "options": {
      "A": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "B": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "C": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-89",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-89)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes.",
      "C": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "D": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "La extinción de dominio es un proceso eminentemente judicial sustentado en pruebas científicas, contables y documentales."
    }
  },
  {
    "id": "aml-90",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-90)",
    "options": {
      "A": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "B": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "C": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "C",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Aceptar efectivo masivo injustificado configura complicidad o coautoría en el delito de lavado de dinero.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-91",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-91)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "C": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna.",
      "D": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente."
    },
    "correctAnswer": "D",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Congelamiento inmediato sin demora, aviso urgente a la UIF y aseguramiento de fondos.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-92",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-92)",
    "options": {
      "A": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "B": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "C": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "No tiene relación con el uso de equipos electrónicos personales de los empleados.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-93",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-93)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas.",
      "C": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "D": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "El cargo de Oficial de Cumplimiento en entidades financieras es a tiempo completo y con equipo técnico dedicado."
    }
  },
  {
    "id": "aml-94",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-94)",
    "options": {
      "A": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "B": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "C": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "C",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Ignorar la falta de actividad comercial y justificación contable frente a millones de dólares es negligencia inexcusable.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "aml-95",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-95)",
    "options": {
      "A": "El afectado está exento de presentar cualquier documento probatorio y los bienes le son devueltos de inmediato sin trámite.",
      "B": "La carga de la prueba recae exclusivamente sobre la municipalidad del domicilio donde se ubican los inmuebles.",
      "C": "La extinción de dominio se decide mediante un sorteo público ante el Ministerio de Gobernación.",
      "D": "Bajo la LEDAB opera la carga dinámica de la prueba: una vez que la FGR demuestra indicios razonables y objetivos de incremento patrimonial injustificado y vinculación con actividades ilícitas, corresponde al afectado demostrar y acreditar fehacientemente con pruebas documentales y contables idóneas el origen legítimo y lícito de los fondos con los que adquirió dichos bienes."
    },
    "correctAnswer": "D",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Ignora la naturaleza autónoma de la LEDAB; la falta de acreditación del origen lícito acarrea la extinción del dominio.",
      "B": "Respuesta correcta. Define con rigor procesal el estándar de la carga dinámica de la prueba sobre el patrimonio injustificado.",
      "C": "Las alcaldías no son parte procesal ni tienen facultades de extinción de dominio patrimonial.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-96",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-96)",
    "options": {
      "A": "Rechazar la operación en efectivo bajo esa modalidad por representar un riesgo extremo e inaceptable de lavado de activos, exigir la bancarización de la transacción mediante cheque de caja o transferencia electrónica rastreable, identificar al Beneficiario Final (UBO) y remitir de inmediato un Reporte de Operación Sospechosa (ROS) a la UIF.",
      "B": "Aceptar el dinero en efectivo con gusto y cobrar una comisión extra en efectivo para guardarla en su caja fuerte personal.",
      "C": "Recomendar al comprador que reparta el dinero en efectivo entre 200 amigos para que hagan depósitos bancarios de $7,200 USD cada uno.",
      "D": "Llamar al comprador para amenazarlo con que si no le paga el doble de comisión lo denunciará a la prensa."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Rechazo de efectivo masivo no trazable, bancarización obligatoria, identificación de UBO y ROS a la UIF.",
      "C": "Aconsejar el pitufeo o estructuración constituye una inducción directa a un delito financiero.",
      "D": "La extorsión o amenaza es un delito penal grave y vulnera frontalmente la ética del oficial o agente."
    }
  },
  {
    "id": "aml-97",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-97)",
    "options": {
      "A": "Entregarle todos sus fondos en efectivo al cliente de inmediato y sugerirle que abandone el país antes del mediodía.",
      "B": "Proceder al congelamiento preventivo inmediato de los fondos y activos del individuo sin demora (sin necesidad de audiencia previa ni aviso al cliente), reportar la medida de inmovilización de forma perentoria a la UIF y FGR dentro del plazo legal y mantener la custodia estricta de los activos a la orden de la autoridad competente.",
      "C": "Publicar una felicitación en las redes sociales de la institución financiera para celebrar la coincidencia en las listas.",
      "D": "Esperar cinco años para ver si la ONU retira el nombre de la lista antes de tomar cualquier decisión interna."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Facilitar la entrega o fuga de fondos a terroristas designados constituye el delito de Financiamiento del Terrorismo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la LCLDA y directrices UIF.",
      "C": "La divulgación pública irresponsable atenta contra la seguridad nacional y la confidencialidad operativa.",
      "D": "La demora en el congelamiento de activos terroristas genera sanciones internacionales y responsabilidad penal estatal."
    }
  },
  {
    "id": "aml-98",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-98)",
    "options": {
      "A": "Obligación de pagarle pasajes aéreos y hospedaje de lujo a los directivos del exchange cada vez que viajen al exterior.",
      "B": "Prohibición absoluta de usar computadoras portátiles o teléfonos celulares fuera del territorio salvadoreño.",
      "C": "Obligación del proveedor de servicios de activos virtuales de origen de recopilar, verificar y transmitir de forma inmediata y segura al proveedor receptor la información precisa sobre el originador (nombre, cuenta, documento o dirección) y sobre el beneficiario de la transferencia de activos virtuales, teniéndola a disposición de las autoridades supervisoras.",
      "D": "Permitir que todas las transferencias de criptomonedas se realicen de forma 100% anónima sin solicitar DUI ni pasaporte."
    },
    "correctAnswer": "C",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "La Travel Rule es un estándar regulatorio antilavado para mitigar el anonimato cripto, no un beneficio de viáticos.",
      "B": "Respuesta correcta. Recopilación, verificación y transmisión segura de datos del originador y beneficiario entre intermediarios.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y estándar internacional aplicable.",
      "D": "El anonimato absoluto en transferencias financieras está expresamente proscrito por la normativa antilavado."
    }
  },
  {
    "id": "aml-99",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-99)",
    "options": {
      "A": "Es una práctica plenamente legal y recomendada para alinear las ventas comerciales con el cumplimiento regulatorio.",
      "B": "Solo está prohibido si el Oficial de Cumplimiento es pariente en cuarto grado de consanguinidad del cajero general.",
      "C": "La SSF exige que el Oficial de Cumplimiento trabaje únicamente media jornada los fines de semana.",
      "D": "Existe incompatibilidad absoluta: el Oficial de Cumplimiento debe gozar de total autonomía e independencia funcional, no puede desempeñar funciones comerciales, operativas o crediticias generadoras de conflicto de interés, debe depender jerárquicamente de la Junta Directiva u órgano equivalente y contar con poder de veto sobre operaciones sospechosas."
    },
    "correctAnswer": "D",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Mezclar funciones de captación de clientes con control de riesgos elimina la independencia e incrementa exponencialmente el riesgo moral.",
      "B": "Respuesta correcta. Consagra la prohibición de conflictos de interés, la autonomía funcional y dependencia de junta directiva.",
      "C": "La incompatibilidad es funcional y objetiva respecto a las áreas de negocio, no meramente de parentesco.",
      "D": "Respuesta correcta. Medida preventiva fundada en los manuales de cumplimiento."
    }
  },
  {
    "id": "aml-100",
    "category": "AML",
    "categoryLabel": "Prevención de Lavado (AML)",
    "area": "Conservación de Registros / Plazo Legal de Custodia Documental (Art. 12 LCLDA)",
    "statement": "Una entidad sujeta a la LCLDA decide destruir los archivos físicos y digitales de apertura de cuentas y comprobantes de transferencias bancarias de clientes que cancelaron sus cuentas bancarias hace tres años. ¿Conforme al Art. 12 de la LCLDA y directrices de la SSF, cuál es el plazo legal mínimo obligatorio de conservación y custodia de registros? (Reactivo aml-100)",
    "options": {
      "A": "Se configura la tipología de \"Empresa Fachada o Sociedad de Papel (Shell Company)\", utilizada como vehículo de colocación y estratificación para triangular y legitimar capitales ilícitos; el sujeto obligado debe congelar preventivamente los fondos si existen indicios de financiación del terrorismo o remitir inmediatamente un ROS a la UIF documentando la inconsistencia patrimonial.",
      "B": "Corresponde a una exitosa inversión de capital de riesgo startup que debe premiarse con una línea de crédito preferencial.",
      "C": "Constituye un error contable menor que se subsana otorgando un plazo de 6 años para presentar comprobantes de IVA.",
      "D": "El banco debe entregar el dinero en maletines en efectivo al representante legal para evitar saturar las transferencias interbancarias."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 12 de la LCLDA dispone expresamente que los sujetos obligados deben conservar todos los registros de identificación de clientes, expedientes de debida diligencia y respaldos documentales de transacciones por un plazo mínimo de cinco años (ampliable reglamentariamente a diez años por la SSF) a partir del cese de la relación contractual.",
    "legalBasis": "Art. 12 Ley Contra el Lavado de Dinero y de Activos (LCLDA) de El Salvador; Recomendación 11 GAFI.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa aplicable y doctrina de prevención de lavado.",
      "B": "Respuesta correcta. Identifica la tipología de sociedad de papel y el deber ineludible de reportar mediante ROS a la UIF.",
      "C": "La ausencia total de sustento fiscal y mercantil no es un error menor sino una simulación corporativa ilícita.",
      "D": "Facilitar retiros masivos en efectivo de fondos injustificados constituye complicidad penal directa en lavado de dinero."
    }
  },
  {
    "id": "seg-01",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Contrato de Seguro & Principio de Indemnización",
    "statement": "Conforme al Código de Comercio de El Salvador, ¿cuál es el principio cardinal que rige los seguros de daños y cosas respecto al resarcimiento económico?",
    "options": {
      "A": "El asegurado puede cobrar sumas que superen el valor real del bien si pagó la prima correspondiente.",
      "B": "El contrato de seguro contra daños es estrictamente de indemnización y jamás puede convertirse para el asegurado en fuente de enriquecimiento.",
      "C": "En caso de pérdida total, la aseguradora debe duplicar el valor asegurable como sanción contractual.",
      "D": "El asegurador solo está obligado a indemnizar el 50% del daño en caso de caso fortuito o fuerza mayor."
    },
    "correctAnswer": "B",
    "explanation": "El artículo 1380 del Código de Comercio salvadoreño establece expresamente que el seguro contra daños es un contrato de mera indemnización; por tanto, el asegurado no puede pretender una suma superior al valor real de la pérdida sufrida.",
    "legalBasis": "Art. 1380 y 1381 Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Permitir indemnizaciones superiores al daño real constituiría sobreseguro ilícito y fomentaría el fraude o dolo.",
      "B": "Respuesta correcta. El seguro mercantil de cosas es de estricta indemnización para resarcir el menoscabo real sufrido.",
      "C": "La sanción punitiva no existe en la indemnización contractual de seguros salvadoreña.",
      "D": "El asegurador cubre el 100% del daño amparado hasta el límite de la suma asegurada, deduciendo únicamente el deducible pactado."
    }
  },
  {
    "id": "seg-02",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Subrogación Legal Mercantil de la Aseguradora",
    "statement": "En un seguro de automotores en El Salvador, tras pagar la indemnización al asegurado por los daños causados por un tercero culpable en un accidente vial, ¿qué derecho legal asiste a la compañía de seguros conforme a los Arts. 1391 y 1393 del Código de Comercio?",
    "options": {
      "A": "Pierde todo derecho de cobro porque la prima cancelada extingue la deuda del tercero.",
      "B": "Se subroga por ministerio de ley (ope legis) hasta el monto de la indemnización pagada, en todos los derechos y acciones del asegurado contra los terceros responsables del siniestro.",
      "C": "Debe obligar al asegurado a que demande penalmente al culpable y le entregue el dinero recaudado.",
      "D": "Solo puede cobrarle al tercero si este contrató previamente una fianza con la misma aseguradora."
    },
    "correctAnswer": "B",
    "explanation": "El artículo 1391 y 1393 del Código de Comercio consagran la figura de la subrogación legal: la empresa de seguros que paga la indemnización se subroga de pleno derecho en los derechos y acciones que el asegurado tenía contra los terceros responsables del siniestro, evitando que el causante quede impune civilmente.",
    "legalBasis": "Arts. 1391 y 1393 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "La aseguradora no pierde el derecho; la subrogación legal existe precisamente para impedir el enriquecimiento o liberación injustificada del causante.",
      "B": "Respuesta correcta. La aseguradora se subroga automáticamente por disposición de la ley mercantil al pagar el siniestro.",
      "C": "La aseguradora ejerce la acción en nombre propio por subrogación, liberando al asegurado de litigar.",
      "D": "La subrogación opera contra cualquier tercero responsable civilmente, con o sin fianza previa."
    }
  },
  {
    "id": "seg-03",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianzas Mercantiles y Contratación Pública",
    "statement": "En los procesos de licitación pública conforme a la Ley de Compras Públicas de El Salvador, ¿cuál es el objeto de la Fianza o Garantía de Mantenimiento de Oferta?",
    "options": {
      "A": "Garantizar el pago de salarios a los trabajadores de la obra pública una vez iniciada la construcción.",
      "B": "Garantizar que el oferente mantendrá las condiciones y precios de su propuesta durante el plazo legal y suscribirá el contrato si resulta adjudicado.",
      "C": "Cubrir los vicios ocultos de los materiales utilizados durante los siguientes diez años.",
      "D": "Financiar la compra de maquinaria pesada requerida por la institución pública licitante."
    },
    "correctAnswer": "B",
    "explanation": "La Fianza de Mantenimiento de Oferta asegura la seriedad de la propuesta licitada: si el oferente adjudicado se niega a firmar el contrato o retira su oferta intempestivamente, la entidad pública ejecuta la garantía fiduciaria como indemnización preestablecida.",
    "legalBasis": "Ley de Compras Públicas de El Salvador; Código de Comercio (Arts. 1539-1550).",
    "distractorRationale": {
      "A": "Esa es la fianza de cumplimiento de contrato o de pago de pasivos laborales.",
      "B": "Respuesta correcta. Garantiza el sostenimiento irrestricto de la oferta y la formalización contractual oportuna.",
      "C": "La cobertura de vicios ocultos se garantiza mediante la Fianza de Buena Obra.",
      "D": "Las fianzas son instrumentos de garantía indemnizatoria, no de financiamiento crediticio."
    }
  },
  {
    "id": "seg-04",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Prescripción de Acciones en Seguros",
    "statement": "¿Cuál es el plazo de prescripción general que establece el Código de Comercio de El Salvador para que prescriban las acciones derivadas del contrato de seguro a partir del acontecimiento que les dio origen?",
    "options": {
      "A": "Seis meses contados desde el reporte preliminar.",
      "B": "Dos años contados a partir de la fecha del acontecimiento que les dio origen.",
      "C": "Diez años, conforme a la prescripción general civil de obligaciones.",
      "D": "Cinco años improrrogables para todo tipo de seguros de vida y daños."
    },
    "correctAnswer": "B",
    "explanation": "El artículo 1362 del Código de Comercio de El Salvador dispone que todas las acciones que se deriven de un contrato de seguro prescribirán en dos años, contados desde la fecha del acontecimiento que les dio origen, salvo excepciones específicas.",
    "legalBasis": "Art. 1362 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Seis meses es un plazo de prescripción para reclamos de transporte marítimo de mercancías, no del contrato de seguro.",
      "B": "Respuesta correcta. El plazo de prescripción general mercantil en seguros salvadoreño es de dos años.",
      "C": "Los diez años del Código Civil quedan desplazados por la norma especial mercantil de dos años.",
      "D": "Cinco años no es el plazo general en el régimen asegurador salvadoreño."
    }
  },
  {
    "id": "seg-05",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación de Siniestros / Infraseguro y Regla Proporcional (Art. 1383 C.Com.)",
    "statement": "Un almacén comercial cuyo valor asegurable real en el mercado asciende a $200,000.00 USD es asegurado contra riesgo de incendio únicamente por una suma asegurada de $100,000.00 USD (infraseguro evidente al 50%). Durante la vigencia de la póliza ocurre un siniestro de incendio que ocasiona daños parciales comprobados fehacientemente por un monto de $40,000.00 USD. Conforme a la regla proporcional imperativa del artículo 1383 del Código de Comercio de El Salvador, ¿a cuánto asciende el monto indemnizatorio neto que la compañía aseguradora está legalmente obligada a pagar?",
    "options": {
      "A": "$40,000.00 USD, debido a que el daño sufrido ($40,000.00 USD) no sobrepasa la suma asegurada total contratada de $100,000.00 USD.",
      "B": "$20,000.00 USD, conforme a la regla proporcional: Indemnización = (Daño Sufrido × Suma Asegurada) / Valor Real = ($40,000.00 × $100,000.00) / $200,000.00 = $20,000.00 USD, soportando el asegurado la fracción restante como su propio asegurador.",
      "C": "$100,000.00 USD, liquidándose el total de la suma asegurada en todo siniestro amparado.",
      "D": "$0.00 USD, debido a que el infraseguro provoca automáticamente la nulidad absoluta del contrato de seguro sin indemnización."
    },
    "correctAnswer": "B",
    "explanation": "El artículo 1383 del Código de Comercio consagra la Regla Proporcional en el infraseguro: si la suma asegurada es inferior al valor real de la cosa asegurada al momento del siniestro, el asegurador indemnizará el daño en la proporción que guarde la suma asegurada respecto al valor real. En este caso: ($40,000 × $100,000) / $200,000 = $20,000.00 USD. El asegurado asume el restante 50% por haber asegurado únicamente la mitad del valor del bien.",
    "legalBasis": "Art. 1383 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Ignora la regla proporcional mercantil; pagar los $40,000 enteros trataría la póliza como seguro a primer riesgo absoluto, lo cual requiere pacto expreso.",
      "B": "Respuesta correcta. Aplica rigurosamente la fórmula legal de prorrateo del Art. 1383 C.Com.",
      "C": "La suma asegurada es el límite máximo para pérdidas totales, nunca se liquida completa ante daños parciales.",
      "D": "El infraseguro no anula el contrato; simplemente sujeta la indemnización al porcentaje efectivamente cubierto."
    }
  },
  {
    "id": "seg-06",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Régimen de Validez Contractual / Sobreseguro Doloso vs. Buena Fe (Art. 1381 C.Com.)",
    "statement": "El propietario de una maquinaria industrial valuada pericialmente en $50,000.00 USD contrata una póliza de seguro de daños declarando intencionalmente que el bien tiene un valor comercial de $150,000.00 USD con el propósito deliberado de provocar posteriormente una avería y obtener un enriquecimiento indebido con la indemnización. Conforme al artículo 1381 del Código de Comercio salvadoreño, ¿cuál es la consecuencia jurídica exacta si se comprueba el sobreseguro doloso por parte del asegurado?",
    "options": {
      "A": "El contrato de seguro sigue siendo válido y la aseguradora está obligada a pagar los $150,000.00 USD pactados en la carátula de la póliza.",
      "B": "El contrato de seguro es nulo de nulidad absoluta y el asegurador queda libre de toda obligación indemnizatoria, teniendo derecho a retener las primas devengadas en concepto de pena o indemnización de perjuicios.",
      "C": "La aseguradora debe indemnizar obligatoriamente el valor real de $50,000.00 USD y devolver las primas cobradas en exceso al asegurado infractor.",
      "D": "El contrato se traslada automáticamente a la Superintendencia del Sistema Financiero para que esta fije un precio justo de liquidación."
    },
    "correctAnswer": "B",
    "explanation": "El artículo 1381 del Código de Comercio establece que cuando la suma asegurada supera notablemente el valor real del interés asegurable por dolo o mala fe del asegurado, el contrato es nulo de nulidad absoluta. En tal supuesto, el asegurador no indemniza siniestro alguno y retiene las primas percibidas en compensación de daños y perjuicios.",
    "legalBasis": "Art. 1381 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Vulnera frontalmente el principio de indemnización del Art. 1380 C.Com.; el sobreseguro doloso jamás genera derecho al pago fraudulento.",
      "B": "Respuesta correcta. Refleja fielmente la sanción de nulidad absoluta y la retención de primas consagrada en el Art. 1381 C.Com.",
      "C": "La reducción de suma y devolución de primas solo aplica en el sobreseguro de buena fe (sin dolo); mediando dolo opera la nulidad y sanción.",
      "D": "La SSF ejerce supervisión técnica y administrativa prudencial, no sustituye la jurisdicción mercantil sancionatoria ante fraudes."
    }
  },
  {
    "id": "seg-07",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Vida / Cláusula de Suicidio e Incontestabilidad (Arts. 1475 y 1481 C.Com.)",
    "statement": "En los contratos de seguro sobre la vida humana suscritos conforme a las leyes mercantiles salvadoreñas, ¿cómo opera la cobertura del riesgo de fallecimiento por suicidio del asegurado y cuál es el plazo legal de exclusión e incontestabilidad fijado por el Código de Comercio?",
    "options": {
      "A": "El suicidio está excluido de por vida de todas las pólizas de seguros en El Salvador sin importar el tiempo transcurrido desde la firma del contrato.",
      "B": "La compañía aseguradora queda legalmente exenta de pagar la suma asegurada si el suicidio del asegurado ocurre dentro de los dos años siguientes a la celebración o rehabilitación de la póliza (debiendo reintegrar únicamente la reserva matemática); pero transcurrido dicho plazo de dos años, el suicidio queda amparado y la póliza deviene incontestable por dicha causa.",
      "C": "La aseguradora siempre debe pagar el 100% de la suma asegurada desde el primer día de vigencia, incluso si el suicidio ocurre a las 24 horas de suscrita la póliza.",
      "D": "El suicidio se cubre únicamente si el asegurado dejó una carta notariada antes de su deceso justificando su decisión personal."
    },
    "correctAnswer": "B",
    "explanation": "El artículo 1481 del Código de Comercio de El Salvador dispone que el suicidio voluntario del asegurado exime a la empresa de seguros del pago de la suma contratada si ocurre dentro de los dos años posteriores a la celebración del contrato (restituyendo la reserva matemática al beneficiario). Cumplidos los dos años, el seguro cobra plena eficacia indemnizatoria en virtud del principio de incontestabilidad.",
    "legalBasis": "Arts. 1475 y 1481 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "La exclusión perpetua del suicidio es contraria a la ley salvadoreña; el Art. 1481 C.Com. limita la exoneración a los primeros dos años.",
      "B": "Respuesta correcta. Define con exactitud la ventana temporal de dos años de exoneración legal y la posterior incontestabilidad.",
      "C": "Pagar el suicidio inmediato incentivaría el fraude letal y desnaturalizaría el principio de aleatoriedad del riesgo asegurador.",
      "D": "Las cartas o justificaciones privadas carecen de relevancia frente al término legal perentorio de dos años establecido en el Código de Comercio."
    }
  },
  {
    "id": "seg-08",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Garantías en Contratación Pública / Fianza de Cumplimiento vs. Anticipo y Buena Obra",
    "statement": "En la ejecución de un contrato administrativo de obra pública bajo la Ley de Compras Públicas de El Salvador, ¿cuál es la distinción técnica, operativa y funcional entre la Fianza de Cumplimiento de Contrato, la Fianza de Anticipo y la Fianza de Buena Obra o Conservación?",
    "options": {
      "A": "Las tres fianzas cubren el mismo riesgo comercial y la administración pública solo puede exigir una de ellas de forma alternativa a su discreción.",
      "B": "La Fianza de Anticipo garantiza el 100% de los fondos monetarios adelantados al contratista para inicio de obras hasta su total amortización; la Fianza de Cumplimiento (10% al 20% del valor del contrato) garantiza la ejecución cabal y oportuna de todas las obligaciones contractuales; y la Fianza de Buena Obra (generalmente 10%) entra en vigencia a partir de la recepción definitiva para caucionar reparaciones por vicios ocultos durante un período de uno a dos años.",
      "C": "La Fianza de Buena Obra se otorga únicamente antes de iniciar la licitación y la Fianza de Anticipo cubre las multas de tránsito de los constructores.",
      "D": "Las fianzas de compras públicas son emitidas exclusivamente por el Banco Central de Reserva (BCR) sin participación de afianzadoras privadas."
    },
    "correctAnswer": "B",
    "explanation": "En el régimen de compras públicas salvadoreño y las normas de fianzas mercantiles (Arts. 1539-1550 C.Com.), cada garantía tutela una fase distinta del contrato: la Fianza de Anticipo precave el desvío de los fondos preentregados, la de Cumplimiento de Contrato garantiza la entrega a tiempo y conforme a especificaciones técnicas, y la de Buena Obra protege a la administración estatal tras la recepción formal contra vicios ocultos o defectos de construcción.",
    "legalBasis": "Ley de Compras Públicas de El Salvador; Arts. 1539 a 1550 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "No son intercambiables ni alternativas; cada una cauciona riesgos, etapas y montos jurídicos enteramente diferenciados.",
      "B": "Respuesta correcta. Diferencia con precisión las tres figuras: amortización de adelanto, fiel ejecución contractual y garantía post-recepción de vicios ocultos.",
      "C": "La garantía previa a la licitación es la de sostenimiento de oferta, no la de buena obra que es estrictamente post-constructiva.",
      "D": "Las fianzas mercantiles son emitidas por instituciones afianzadoras y compañías de seguros autorizadas por la SSF, no por el BCR."
    }
  },
  {
    "id": "seg-09",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-09)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.",
      "C": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "D": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador."
    },
    "correctAnswer": "B",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal."
    }
  },
  {
    "id": "seg-10",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-10)",
    "options": {
      "A": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "B": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "C": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "C",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-11",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-11)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "C": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.",
      "D": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado."
    },
    "correctAnswer": "D",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-12",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-12)",
    "options": {
      "A": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "B": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "C": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "A",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-13",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-13)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.",
      "C": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "D": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley."
    },
    "correctAnswer": "B",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF."
    }
  },
  {
    "id": "seg-14",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-14)",
    "options": {
      "A": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "B": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "C": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "C",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-15",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-15)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "C": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.",
      "D": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito."
    },
    "correctAnswer": "D",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-16",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-16)",
    "options": {
      "A": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "B": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "C": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "A",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-17",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-17)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado.",
      "C": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "D": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios."
    },
    "correctAnswer": "B",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "La fianza mercantil no está supeditada al deceso del deudor principal sino a su incumplimiento contractual."
    }
  },
  {
    "id": "seg-18",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-18)",
    "options": {
      "A": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "B": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "C": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "C",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "Las reservas técnicas son pasivos patrimoniales de estricta afectación para pago de siniestros, no gastos suntuarios.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-19",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-19)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "C": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley.",
      "D": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado."
    },
    "correctAnswer": "D",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Recoge el principio general del Art. 1548 C.Com.: inoponibilidad de acción directa salvo cut-through.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-20",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro contra Terremoto y Riesgos Catastróficos / Deducible Actuarial y Coaseguro Obligatorio",
    "statement": "Tras un terremoto que causa daños estructurales en un centro logístico asegurado bajo póliza de todo riesgo de daños materiales con endoso de terremoto, la aseguradora aplica el deducible pactado del 2% del valor asegurable del inmueble y el 10% de coaseguro sobre la pérdida indemnizable. ¿Cuál es la legalidad y propósito técnico de estas cláusulas según la SSF? (Reactivo seg-20)",
    "options": {
      "A": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "B": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "C": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "A",
    "explanation": "Los deducibles y coaseguros en ramos catastróficos son cláusulas de distribución del riesgo reconocidas por la SSF y el Art. 1384 C.Com. Su propósito es mitigar el riesgo moral y asegurar que el asegurado retenga una fracción de la pérdida patrimonial sin desnaturalizar la cobertura principal.",
    "legalBasis": "Ley de Sociedades de Seguros; Código de Comercio (Arts. 1380 y 1384); Póliza Estándar de Terremoto SSF.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "La aseguradora no puede apropiarse del beneficio devengado por la contingencia cubierta.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-21",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-21)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.",
      "C": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "D": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador."
    },
    "correctAnswer": "B",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal."
    }
  },
  {
    "id": "seg-22",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-22)",
    "options": {
      "A": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "B": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "C": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "C",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-23",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-23)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "C": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.",
      "D": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado."
    },
    "correctAnswer": "D",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-24",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-24)",
    "options": {
      "A": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "B": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "C": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "A",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-25",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-25)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.",
      "C": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "D": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley."
    },
    "correctAnswer": "B",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF."
    }
  },
  {
    "id": "seg-26",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-26)",
    "options": {
      "A": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "B": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "C": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "C",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-27",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-27)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "C": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.",
      "D": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito."
    },
    "correctAnswer": "D",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-28",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-28)",
    "options": {
      "A": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "B": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "C": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "A",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-29",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-29)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado.",
      "C": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "D": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios."
    },
    "correctAnswer": "B",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "La fianza mercantil no está supeditada al deceso del deudor principal sino a su incumplimiento contractual."
    }
  },
  {
    "id": "seg-30",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-30)",
    "options": {
      "A": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "B": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "C": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "C",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "Las reservas técnicas son pasivos patrimoniales de estricta afectación para pago de siniestros, no gastos suntuarios.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-31",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-31)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "C": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley.",
      "D": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado."
    },
    "correctAnswer": "D",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Recoge el principio general del Art. 1548 C.Com.: inoponibilidad de acción directa salvo cut-through.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-32",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-32)",
    "options": {
      "A": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "B": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "C": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "A",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "La aseguradora no puede apropiarse del beneficio devengado por la contingencia cubierta.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-33",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-33)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.",
      "C": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "D": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador."
    },
    "correctAnswer": "B",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal."
    }
  },
  {
    "id": "seg-34",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-34)",
    "options": {
      "A": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "B": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "C": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "C",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-35",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Transporte Mercantil de Mercancías / Pérdida Parcial y Avería Gruesa (Art. 1435 C.Com.)",
    "statement": "Durante el transporte marítimo de un cargamento de café salvadoreño hacia Europa, el capitán de la nave ordena lanzar por la borda 200 sacos de café para aligerar peso y evitar el hundimiento inminente del buque en una tempestad (Avería Gruesa). Conforme al Código de Comercio, ¿cómo se liquida el seguro de transporte? (Reactivo seg-35)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "C": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.",
      "D": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado."
    },
    "correctAnswer": "D",
    "explanation": "El seguro de transporte de mercancías ampara las pérdidas por avería común o gruesa: el daño sacrificado intencionalmente para la salvación común de nave y carga es contribuido proporcionalmente por todos los intereses salvados y liquidado por la aseguradora bajo las normas marítimas mercantiles.",
    "legalBasis": "Arts. 1435, 1438 y 1442 del Código de Comercio de El Salvador; Reglas de York-Amberes.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-36",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-36)",
    "options": {
      "A": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "B": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "C": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "A",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-37",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-37)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.",
      "C": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "D": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley."
    },
    "correctAnswer": "B",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF."
    }
  },
  {
    "id": "seg-38",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-38)",
    "options": {
      "A": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "B": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "C": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "C",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-39",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-39)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "C": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.",
      "D": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito."
    },
    "correctAnswer": "D",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-40",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-40)",
    "options": {
      "A": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "B": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "C": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "A",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-41",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-41)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado.",
      "C": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "D": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios."
    },
    "correctAnswer": "B",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "La fianza mercantil no está supeditada al deceso del deudor principal sino a su incumplimiento contractual."
    }
  },
  {
    "id": "seg-42",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-42)",
    "options": {
      "A": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "B": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "C": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "C",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "Las reservas técnicas son pasivos patrimoniales de estricta afectación para pago de siniestros, no gastos suntuarios.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-43",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-43)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "C": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley.",
      "D": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado."
    },
    "correctAnswer": "D",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Recoge el principio general del Art. 1548 C.Com.: inoponibilidad de acción directa salvo cut-through.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-44",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-44)",
    "options": {
      "A": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "B": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "C": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "A",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "La aseguradora no puede apropiarse del beneficio devengado por la contingencia cubierta.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-45",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-45)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.",
      "C": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "D": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador."
    },
    "correctAnswer": "B",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal."
    }
  },
  {
    "id": "seg-46",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-46)",
    "options": {
      "A": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "B": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "C": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "C",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-47",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-47)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "C": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.",
      "D": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado."
    },
    "correctAnswer": "D",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-48",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-48)",
    "options": {
      "A": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "B": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "C": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "A",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-49",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-49)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.",
      "C": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "D": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley."
    },
    "correctAnswer": "B",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF."
    }
  },
  {
    "id": "seg-50",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Fianza de Fiel Cumplimiento / Cláusula de Caducidad y Plazo de Reclamo (Art. 1545 C.Com.)",
    "statement": "Un contrato de suministro de medicamentos hospitalarios finaliza el 30 de junio. La institución de salud beneficiaria detecta entregas incompletas pero presenta el reclamo formal de ejecución de la fianza ante la compañía afianzadora diez meses después de vencida la vigencia de la garantía, sin haber pactado prórroga. ¿Cuál es la excepción que puede oponer la afianzadora? (Reactivo seg-50)",
    "options": {
      "A": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "B": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "C": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "C",
    "explanation": "Las fianzas mercantiles están sujetas a plazos fatales de caducidad fijados en la póliza y la ley (Art. 1545 C.Com.). Si el beneficiario no formula el reclamo formal dentro del plazo de vigencia o del término adicional expresamente estipulado, la obligación de la afianzadora caduca por ministerio de ley.",
    "legalBasis": "Art. 1545 del Código de Comercio de El Salvador; Ley de Compras Públicas.",
    "distractorRationale": {
      "A": "El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-51",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-51)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "C": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.",
      "D": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito."
    },
    "correctAnswer": "D",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-52",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-52)",
    "options": {
      "A": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "B": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "C": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "A",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-53",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-53)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado.",
      "C": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "D": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios."
    },
    "correctAnswer": "B",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "La fianza mercantil no está supeditada al deceso del deudor principal sino a su incumplimiento contractual."
    }
  },
  {
    "id": "seg-54",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-54)",
    "options": {
      "A": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "B": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "C": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "C",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Las reservas técnicas son pasivos patrimoniales de estricta afectación para pago de siniestros, no gastos suntuarios.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-55",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-55)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "C": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley.",
      "D": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado."
    },
    "correctAnswer": "D",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Recoge el principio general del Art. 1548 C.Com.: inoponibilidad de acción directa salvo cut-through.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-56",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-56)",
    "options": {
      "A": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "B": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "C": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "A",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "La aseguradora no puede apropiarse del beneficio devengado por la contingencia cubierta.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-57",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-57)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.",
      "C": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "D": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador."
    },
    "correctAnswer": "B",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal."
    }
  },
  {
    "id": "seg-58",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-58)",
    "options": {
      "A": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "B": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "C": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "C",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-59",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-59)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "C": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.",
      "D": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado."
    },
    "correctAnswer": "D",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-60",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-60)",
    "options": {
      "A": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "B": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "C": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "A",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-61",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-61)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.",
      "C": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "D": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley."
    },
    "correctAnswer": "B",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF."
    }
  },
  {
    "id": "seg-62",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-62)",
    "options": {
      "A": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "B": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "C": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "C",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-63",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-63)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "C": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.",
      "D": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito."
    },
    "correctAnswer": "D",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-64",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-64)",
    "options": {
      "A": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "B": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "C": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "A",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-65",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Responsabilidad Civil Extracontractual / Acción Directa de la Víctima (Art. 1458 C.Com.)",
    "statement": "Un camión cisterna asegurado colisiona contra una vivienda destruyendo su fachada. La aseguradora pretende pagar la indemnización al conductor infractor y este amenaza con utilizar el dinero para fugarse del país. ¿Qué derecho legal asiste a la víctima damnificada conforme al Art. 1458 del Código de Comercio salvadoreño? (Reactivo seg-65)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado.",
      "C": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "D": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios."
    },
    "correctAnswer": "B",
    "explanation": "En los seguros de responsabilidad civil, el Art. 1458 C.Com. consagra el privilegio legal del tercero damnificado: el crédito de la víctima sobre la indemnización goza de preferencia absoluta sobre cualquier otro acreedor del asegurado, debiendo la aseguradora pagar directamente al tercero afectado para extinguir el daño.",
    "legalBasis": "Arts. 1458 y 1459 del Código de Comercio de El Salvador.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "La fianza mercantil no está supeditada al deceso del deudor principal sino a su incumplimiento contractual."
    }
  },
  {
    "id": "seg-66",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-66)",
    "options": {
      "A": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "B": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "C": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "C",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "Las reservas técnicas son pasivos patrimoniales de estricta afectación para pago de siniestros, no gastos suntuarios.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-67",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-67)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "C": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley.",
      "D": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado."
    },
    "correctAnswer": "D",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Recoge el principio general del Art. 1548 C.Com.: inoponibilidad de acción directa salvo cut-through.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-68",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-68)",
    "options": {
      "A": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "B": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "C": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "A",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "La aseguradora no puede apropiarse del beneficio devengado por la contingencia cubierta.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-69",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-69)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.",
      "C": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "D": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador."
    },
    "correctAnswer": "B",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal."
    }
  },
  {
    "id": "seg-70",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-70)",
    "options": {
      "A": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "B": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "C": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "C",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-71",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-71)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "C": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.",
      "D": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado."
    },
    "correctAnswer": "D",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-72",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-72)",
    "options": {
      "A": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "B": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "C": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "A",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-73",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-73)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.",
      "C": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "D": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley."
    },
    "correctAnswer": "B",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF."
    }
  },
  {
    "id": "seg-74",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-74)",
    "options": {
      "A": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "B": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "C": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "C",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-75",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-75)",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "C": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.",
      "D": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito."
    },
    "correctAnswer": "D",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-76",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-76)",
    "options": {
      "A": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "B": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "C": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "A",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-77",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-77)",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado.",
      "C": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "D": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios."
    },
    "correctAnswer": "B",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "La fianza mercantil no está supeditada al deceso del deudor principal sino a su incumplimiento contractual."
    }
  },
  {
    "id": "seg-78",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-78)",
    "options": {
      "A": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "B": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "C": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "C",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "Las reservas técnicas son pasivos patrimoniales de estricta afectación para pago de siniestros, no gastos suntuarios.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-79",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-79)",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "C": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley.",
      "D": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado."
    },
    "correctAnswer": "D",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Recoge el principio general del Art. 1548 C.Com.: inoponibilidad de acción directa salvo cut-through.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-80",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Seguro de Crédito a la Exportación e Hipotecario / Tutela del Acreedor Preferente",
    "statement": "En un crédito hipotecario bancario para compra de vivienda, se contrata una póliza de seguro de vida y desempleo con \"Cláusula de Cesión de Beneficios a Favor del Banco Acreedor\". Al fallecer el deudor asegurado adeudando $60,000 USD, ¿cómo se distribuye el importe de la suma asegurada de $80,000 USD? (Reactivo seg-80)",
    "options": {
      "A": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "B": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "C": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "A",
    "explanation": "Bajo la cesión preferencial de derechos, la aseguradora liquida con prioridad absoluta el saldo insoluto de la deuda ($60,000 USD) al banco para cancelar la hipoteca, y el excedente neto remanente ($20,000 USD) es entregado íntegramente a los beneficiarios secundarios o herederos del deudor.",
    "legalBasis": "Arts. 1358 y 1359 del Código de Comercio de El Salvador; Ley de Bancos.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "La aseguradora no puede apropiarse del beneficio devengado por la contingencia cubierta.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-81",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Un comerciante pretende contratar una póliza contra incendio sobre un edificio histórico del centro de San Salvador que pertenece legalmente a un tercero desconocido, sin tener vínculo de propiedad, usufructo, hipoteca, arrendamiento ni representación legal sobre dicho inmueble. Conforme al artículo 1353 del Código de Comercio salvadoreño, ¿cuál es el requisito de fondo que determina la validez del contrato de seguro?",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.",
      "C": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "D": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador."
    },
    "correctAnswer": "B",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal."
    }
  },
  {
    "id": "seg-82",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Al solicitar una póliza de seguro médico hospitalario de gastos médicos mayores, el proponente omite intencionalmente declarar en el cuestionario de asegurabilidad que fue diagnosticado seis meses antes con una afección coronaria grave e hipertensión arterial refractaria. Al año de contratada la póliza, sufre un infarto agudo al miocardio y reclama la cobertura. ¿Cuál es el derecho que asiste a la empresa aseguradora conforme al Art. 1365 del Código de Comercio?",
    "options": {
      "A": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "B": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "C": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "C",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-83",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Una empresa afianzadora salvadoreña emite una Fianza de Cumplimiento Mercantil a favor del Ministerio de Obras Públicas (MOP). En el texto de la póliza de fianza se estipula que la institución fiadora \"se obliga de manera solidaria y renuncia formalmente al beneficio de excusión\". Ante el incumplimiento total del contratista principal, ¿cuál es el alcance legal de dicha renuncia conforme a los Arts. 1539 y 1540 del Código de Comercio?",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "C": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.",
      "D": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado."
    },
    "correctAnswer": "D",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-84",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "De acuerdo con la Ley de Sociedades de Seguros de El Salvador y las normas técnicas emitidas por la Superintendencia del Sistema Financiero (SSF), ¿cuál es la función de la Reserva para Siniestros Ocurridos y No Reportados (IBNR - Incurred But Not Reported)?",
    "options": {
      "A": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "B": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "C": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "A",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-85",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Una compañía de seguros salvadoreña asegura una planta petroquímica por una suma asegurada de $50,000,000 USD que excede ampliamente su capacidad técnica y límite de retención propio. Para respaldar la operación, suscribe un Contrato de Reaseguro. Conforme al Código de Comercio y doctrina aseguradora, ¿cuál es la relación contractual y procesal entre el asegurado original y la entidad reaseguradora internacional?",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.",
      "C": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "D": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley."
    },
    "correctAnswer": "B",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF."
    }
  },
  {
    "id": "seg-86",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "En una póliza colectiva de seguro de accidentes de trabajo suscrita por una empresa comercial salvadoreña, un empleado asegurado fallece a consecuencia de un accidente amparado sin haber consignado el nombre de beneficiarios en la solicitud individual de adhesión ni en ningún testamento. Conforme a las normas del Código de Comercio, ¿a quiénes corresponde por ministerio de ley el pago del importe del seguro?",
    "options": {
      "A": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "B": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "C": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "C",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-87",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Un comerciante pretende contratar una póliza contra incendio sobre un edificio histórico del centro de San Salvador que pertenece legalmente a un tercero desconocido, sin tener vínculo de propiedad, usufructo, hipoteca, arrendamiento ni representación legal sobre dicho inmueble. Conforme al artículo 1353 del Código de Comercio salvadoreño, ¿cuál es el requisito de fondo que determina la validez del contrato de seguro?",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "C": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.",
      "D": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito."
    },
    "correctAnswer": "D",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-88",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Al solicitar una póliza de seguro médico hospitalario de gastos médicos mayores, el proponente omite intencionalmente declarar en el cuestionario de asegurabilidad que fue diagnosticado seis meses antes con una afección coronaria grave e hipertensión arterial refractaria. Al año de contratada la póliza, sufre un infarto agudo al miocardio y reclama la cobertura. ¿Cuál es el derecho que asiste a la empresa aseguradora conforme al Art. 1365 del Código de Comercio?",
    "options": {
      "A": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "B": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "C": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "A",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-89",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Una empresa afianzadora salvadoreña emite una Fianza de Cumplimiento Mercantil a favor del Ministerio de Obras Públicas (MOP). En el texto de la póliza de fianza se estipula que la institución fiadora \"se obliga de manera solidaria y renuncia formalmente al beneficio de excusión\". Ante el incumplimiento total del contratista principal, ¿cuál es el alcance legal de dicha renuncia conforme a los Arts. 1539 y 1540 del Código de Comercio?",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado.",
      "C": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "D": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios."
    },
    "correctAnswer": "B",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "La fianza mercantil no está supeditada al deceso del deudor principal sino a su incumplimiento contractual."
    }
  },
  {
    "id": "seg-90",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "De acuerdo con la Ley de Sociedades de Seguros de El Salvador y las normas técnicas emitidas por la Superintendencia del Sistema Financiero (SSF), ¿cuál es la función de la Reserva para Siniestros Ocurridos y No Reportados (IBNR - Incurred But Not Reported)?",
    "options": {
      "A": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "B": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "C": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "C",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Las reservas técnicas son pasivos patrimoniales de estricta afectación para pago de siniestros, no gastos suntuarios.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-91",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Una compañía de seguros salvadoreña asegura una planta petroquímica por una suma asegurada de $50,000,000 USD que excede ampliamente su capacidad técnica y límite de retención propio. Para respaldar la operación, suscribe un Contrato de Reaseguro. Conforme al Código de Comercio y doctrina aseguradora, ¿cuál es la relación contractual y procesal entre el asegurado original y la entidad reaseguradora internacional?",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "C": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley.",
      "D": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado."
    },
    "correctAnswer": "D",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Recoge el principio general del Art. 1548 C.Com.: inoponibilidad de acción directa salvo cut-through.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-92",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "En una póliza colectiva de seguro de accidentes de trabajo suscrita por una empresa comercial salvadoreña, un empleado asegurado fallece a consecuencia de un accidente amparado sin haber consignado el nombre de beneficiarios en la solicitud individual de adhesión ni en ningún testamento. Conforme a las normas del Código de Comercio, ¿a quiénes corresponde por ministerio de ley el pago del importe del seguro?",
    "options": {
      "A": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "B": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "C": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "A",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "La aseguradora no puede apropiarse del beneficio devengado por la contingencia cubierta.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-93",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Un comerciante pretende contratar una póliza contra incendio sobre un edificio histórico del centro de San Salvador que pertenece legalmente a un tercero desconocido, sin tener vínculo de propiedad, usufructo, hipoteca, arrendamiento ni representación legal sobre dicho inmueble. Conforme al artículo 1353 del Código de Comercio salvadoreño, ¿cuál es el requisito de fondo que determina la validez del contrato de seguro?",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito.",
      "C": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "D": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador."
    },
    "correctAnswer": "B",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "El seguro de daños sobre bienes no puede mutar por voluntad unilateral en seguro de vida personal."
    }
  },
  {
    "id": "seg-94",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Al solicitar una póliza de seguro médico hospitalario de gastos médicos mayores, el proponente omite intencionalmente declarar en el cuestionario de asegurabilidad que fue diagnosticado seis meses antes con una afección coronaria grave e hipertensión arterial refractaria. Al año de contratada la póliza, sufre un infarto agudo al miocardio y reclama la cobertura. ¿Cuál es el derecho que asiste a la empresa aseguradora conforme al Art. 1365 del Código de Comercio?",
    "options": {
      "A": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "B": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "C": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "C",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "La mala fe y dolo en la declaración anulan el deber de cobertura; pagarlo premiaría el fraude procesal y contractual.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  },
  {
    "id": "seg-95",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Una empresa afianzadora salvadoreña emite una Fianza de Cumplimiento Mercantil a favor del Ministerio de Obras Públicas (MOP). En el texto de la póliza de fianza se estipula que la institución fiadora \"se obliga de manera solidaria y renuncia formalmente al beneficio de excusión\". Ante el incumplimiento total del contratista principal, ¿cuál es el alcance legal de dicha renuncia conforme a los Arts. 1539 y 1540 del Código de Comercio?",
    "options": {
      "A": "Obliga al MOP a agotar primero un juicio ordinario de 15 años contra los parientes del contratista antes de acudir a la afianzadora.",
      "B": "La fianza se vuelve nula porque el Código de Comercio prohíbe la renuncia al beneficio de excusión.",
      "C": "La afianzadora solo pagará la deuda si el deudor principal fallece sin herederos testamentarios.",
      "D": "La renuncia expresa al beneficio de excusión faculta al acreedor beneficiario (MOP) a requerir el pago indemnizatorio y ejecutar la fianza directamente contra la entidad afianzadora sin necesidad de demandar previamente ni embargar o liquidar primero los bienes patrimoniales del deudor fiado."
    },
    "correctAnswer": "D",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Esa es la consecuencia de la excusión plena; la renuncia al beneficio existe precisamente para evitar juicios previos dilatorios.",
      "B": "Respuesta correcta. Permite el cobro directo e inmediato a la afianzadora sin persecución previa de bienes del deudor.",
      "C": "El derecho mercantil salvadoreño autoriza plenamente la renuncia de excusión en contratos de fianza corporativa.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-96",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "De acuerdo con la Ley de Sociedades de Seguros de El Salvador y las normas técnicas emitidas por la Superintendencia del Sistema Financiero (SSF), ¿cuál es la función de la Reserva para Siniestros Ocurridos y No Reportados (IBNR - Incurred But Not Reported)?",
    "options": {
      "A": "Constituir un fondo actuarial prudencial obligatorio para respaldar financieramente aquellos siniestros amparados que ya han acaecido materialmente durante el ejercicio fiscal pero cuya ocurrencia aún no ha sido notificada o reportada formalmente a la aseguradora por los asegurados al cierre de los estados financieros.",
      "B": "Financiar las fiestas de fin de año y banquetes corporativos de los accionistas de la aseguradora.",
      "C": "Pagar únicamente los sueldos atrasados del personal de limpieza de la Superintendencia del Sistema Financiero.",
      "D": "Eximir a la compañía de seguros de pagar siniestros catastróficos por terremoto o erupción volcánica."
    },
    "correctAnswer": "A",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Define con exactitud técnica la naturaleza y finalidad actuarial de la provisión IBNR.",
      "C": "Los fondos de reservas técnicas no sufragan gastos operativos de entidades reguladoras estatales.",
      "D": "La IBNR fortalece la solvencia de la aseguradora para honrar coberturas, nunca para eludirlas."
    }
  },
  {
    "id": "seg-97",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Una compañía de seguros salvadoreña asegura una planta petroquímica por una suma asegurada de $50,000,000 USD que excede ampliamente su capacidad técnica y límite de retención propio. Para respaldar la operación, suscribe un Contrato de Reaseguro. Conforme al Código de Comercio y doctrina aseguradora, ¿cuál es la relación contractual y procesal entre el asegurado original y la entidad reaseguradora internacional?",
    "options": {
      "A": "El reasegurador internacional asume la representación penal de la planta petroquímica y cancela la personería jurídica del asegurado.",
      "B": "El contrato de reaseguro vincula exclusivamente a la aseguradora directa con el reasegurador; por tanto, el asegurado original carece de acción directa de cobro contra el reasegurador salvo estipulación expresa en contrario (cláusula cut-through), respondiendo la aseguradora cedente directamente frente al asegurado por el total amparado.",
      "C": "El asegurado original solo puede demandar al reasegurador ante los tribunales de Londres y nunca ante la justicia salvadoreña.",
      "D": "El reaseguro está estrictamente prohibido en El Salvador y la planta petroquímica queda desprotegida por ministerio de ley."
    },
    "correctAnswer": "B",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El reaseguro es una transferencia mercantil de riesgos financieros entre aseguradores, ajeno a mandatos penales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado al Código de Comercio salvadoreño.",
      "C": "La jurisdicción para el reclamo del asegurado es la fijada en la póliza directa ante tribunales salvadoreños.",
      "D": "El reaseguro es una herramienta legal y obligatoria de estabilidad prudencial promovida por la SSF."
    }
  },
  {
    "id": "seg-98",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "En una póliza colectiva de seguro de accidentes de trabajo suscrita por una empresa comercial salvadoreña, un empleado asegurado fallece a consecuencia de un accidente amparado sin haber consignado el nombre de beneficiarios en la solicitud individual de adhesión ni en ningún testamento. Conforme a las normas del Código de Comercio, ¿a quiénes corresponde por ministerio de ley el pago del importe del seguro?",
    "options": {
      "A": "El dinero del seguro pasa a ser propiedad definitiva del empleador para comprar equipo de cómputo.",
      "B": "La aseguradora retiene el 100% del capital y queda exonerada de realizar cualquier desembolso monetario.",
      "C": "A falta de designación testamentaria o contractual de beneficiario, el importe de la suma asegurada corresponderá a los herederos legales del asegurado con arreglo al Código Civil salvadoreño, distribuyéndose conforme al orden de la sucesión intestada.",
      "D": "El importe del seguro se entrega al primer vecino que presente el recibo de energía eléctrica del asegurado."
    },
    "correctAnswer": "C",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El empleador contratante no tiene derecho al beneficio indemnity del seguro de vida de sus trabajadores.",
      "B": "Respuesta correcta. La ley mercantil transfiere la indemnización a los herederos legítimos en ausencia de beneficiario.",
      "C": "Respuesta correcta. Aplica la garantía regulatoria y legal del régimen asegurador.",
      "D": "El pago del seguro exige acreditación jurídica sucesoria formal y fehaciente."
    }
  },
  {
    "id": "seg-99",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Un comerciante pretende contratar una póliza contra incendio sobre un edificio histórico del centro de San Salvador que pertenece legalmente a un tercero desconocido, sin tener vínculo de propiedad, usufructo, hipoteca, arrendamiento ni representación legal sobre dicho inmueble. Conforme al artículo 1353 del Código de Comercio salvadoreño, ¿cuál es el requisito de fondo que determina la validez del contrato de seguro?",
    "options": {
      "A": "El contrato es plenamente válido porque el pago puntual de la prima mensual convalida cualquier falta de interés asegurable.",
      "B": "La aseguradora debe cobrar el triple de prima y transferir la propiedad del edificio al asegurado si este lo solicita.",
      "C": "El seguro se transforma automáticamente en un seguro de vida a favor de la municipalidad de San Salvador.",
      "D": "El contrato de seguro contra daños es nulo si en el momento de su celebración o del siniestro, el asegurado carece de un Interés Económico Lícito (interés asegurable) en que el daño no se produzca; el seguro sin interés asegurable es jurídicamente ineficaz y degenera en una apuesta o juego ilícito."
    },
    "correctAnswer": "D",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "El pago de primas no subsana la ausencia de causa lícita e interés asegurable exigido por el ordenamiento mercantil.",
      "B": "Respuesta correcta. El interés asegurable es el presupuesto causal indispensable del seguro de daños bajo el Art. 1353 C.Com.",
      "C": "Las compañías aseguradoras carecen de potestades para transferir la propiedad de inmuebles ajenos.",
      "D": "Respuesta correcta. Fundamento normativo congruente con las directrices de la SSF."
    }
  },
  {
    "id": "seg-100",
    "category": "Seguros",
    "categoryLabel": "Seguros y Fianzas (SSF)",
    "area": "Liquidación y Arbitraje en Seguros / Vía Jurisdiccional vs Cláusula Compromisoria (Art. 1361 C.Com.)",
    "statement": "Al solicitar una póliza de seguro médico hospitalario de gastos médicos mayores, el proponente omite intencionalmente declarar en el cuestionario de asegurabilidad que fue diagnosticado seis meses antes con una afección coronaria grave e hipertensión arterial refractaria. Al año de contratada la póliza, sufre un infarto agudo al miocardio y reclama la cobertura. ¿Cuál es el derecho que asiste a la empresa aseguradora conforme al Art. 1365 del Código de Comercio?",
    "options": {
      "A": "Rescindir el contrato de seguro o quedar liberada de toda obligación de pago por reticencia o inexacta declaración del riesgo con dolo o culpa grave, ya que las omisiones de circunstancias conocidas que habrían impedido la contratación o modificado sustancialmente las condiciones de aceptación privan de eficacia indemnizatoria al reclamo.",
      "B": "Pagar el 100% de la cuenta médica y felicitar al asegurado por haber ocultado su condición con éxito.",
      "C": "Cobrarle una multa de un dólar y duplicar de por vida la suma asegurada sin costo adicional.",
      "D": "La compañía no puede alegar preexistencia médica si el asegurado es mayor de 25 años."
    },
    "correctAnswer": "A",
    "explanation": "Las cláusulas que impongan arbitrajes forzosos o limiten de forma abusiva el derecho de acceso a la justicia ordinaria mercantil garantizado por el Art. 1361 C.Com. y la Constitución se tienen por no puestas cuando vulneran la igualdad procesal del asegurado, manteniéndose expedita la vía jurisdiccional ordinaria ante los Juzgados de lo Mercantil.",
    "legalBasis": "Art. 1361 Código de Comercio de El Salvador; Ley de Conciliación, Mediación y Arbitraje.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con la normativa mercantil de seguros y criterios de la SSF.",
      "B": "Respuesta correcta. Libera al asegurador por reticencia y falsa declaración de circunstancias esenciales del riesgo.",
      "C": "No existen multas testimoniales de un dólar ni aumentos de suma como sanción al infractor.",
      "D": "La edad del asegurado no convalida el fraude por omisión premeditada de preexistencias médicas críticas."
    }
  }
];

// Preservar retrocompatibilidad con componentes existentes
export const COMPLIANCE_QUESTIONS_DATA: ComplianceQuestion[] = COMPLIANCE_QUESTIONS;
