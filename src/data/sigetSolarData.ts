/**
 * BANCO OFICIAL DE ENERGÍA SOLAR FOTOVOLTAICA, NORMATIVA NTCOGD Y ELECTRICIDAD SIGET
 * Plataforma KUSKAT · República de El Salvador
 *
 * Marco Técnico y Regulatorio:
 * - Norma Técnica de Conexión y Operación de Generación Distribuida (NTCOGD - SIGET Acuerdo N° 343-E-2016 y reformas CNE).
 * - Código Eléctrico Nacional (NEC / NFPA 70 Art. 690 - Solar Photovoltaic Systems, Rapid Shutdown, AFCI, GFDI).
 * - Estándar IEEE 1547 y UL 1741: Protección Anti-Isla, desconexión rápida y reconexión automática sincronizada.
 * - Reglamento de Acreditación de Instaladores y Electricistas de la SIGET (1ª, 2ª, 3ª y 4ª Categoría).
 * - Procedimientos de Interconexión y Medición Neta de Distribuidoras Eléctricas (AES CAESS, CLESA, EEO, DEUSEM y DELSUR).
 */

export interface SigetSolarQuestion {
  id: string;
  category: 'normativa-gd' | 'nec-690' | 'electricistas-siget' | 'seguridad-operativa';
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
  technicalBasis: string;
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export interface InterconnectionStep {
  id: string;
  stage: number;
  title: string;
  entity: string;
  description: string;
  requirements: string[];
  normativeRef: string;
}

export const SIGET_SECTORS = [
  {
    id: 'all',
    name: 'Todos los Temas',
    icon: '⚡',
  },
  {
    id: 'normativa-gd',
    name: 'Norma NTCOGD & Medición Neta (SIGET)',
    icon: '☀️',
  },
  {
    id: 'nec-690',
    name: 'Código Eléctrico NEC Art. 690 & Protecciones',
    icon: '🔌',
  },
  {
    id: 'electricistas-siget',
    name: 'Acreditación y Categorías SIGET',
    icon: '📜',
  },
  {
    id: 'seguridad-operativa',
    name: 'Seguridad Ocupacional, Anti-Isla & Maniobras',
    icon: '🛡️',
  },
];

export const SOLAR_INTERCONNECTION_CHECKLIST: InterconnectionStep[] = [
  {
    id: 'step-1',
    stage: 1,
    title: 'Estudio de Prefactibilidad y Solicitud de Punto de Conexión',
    entity: 'Distribuidora (AES El Salvador / DELSUR)',
    description: 'Presentación del formulario de solicitud de conexión para usuario generador distribuido (UGD) menor o igual a la capacidad contratada.',
    requirements: [
      'NIC del suministro eléctrico existente sin mora',
      'Memoria técnica descriptiva con potencia nominal en AC (kW) y DC (kWp)',
      'Verificación de capacidad disponible en el transformador de distribución (<80% de carga acumulada)',
      'Ubicación georreferenciada del inmueble y diagrama de implantación de módulos',
    ],
    normativeRef: 'NTCOGD SIGET Acuerdo 343-E-2016, Art. 12 y 14',
  },
  {
    id: 'step-2',
    stage: 2,
    title: 'Diseño de Ingeniería, Memoria de Cálculo y Diagrama Unifilar',
    entity: 'Profesional / Técnico Acreditado SIGET',
    description: 'Elaboración de planos y memorias técnicas visadas por profesional electricista con carnet SIGET vigente según la potencia del sistema.',
    requirements: [
      'Diagrama unifilar completo con especificación de inversores, strings, fusibles DC e interruptores AC',
      'Cálculo de caída de tensión (máximo 2% en circuito DC y 1% en circuito AC)',
      'Factor de seguridad en conductores fotovoltaicos (1.25 x 1.25 = 1.56 x Isc)',
      'Diseño del sistema de puesta a tierra (malla de tierra y equipotencialidad de rieles/marcos)',
    ],
    normativeRef: 'NEC (NFPA 70) Art. 690.8 y Reglamento Eléctrico SIGET',
  },
  {
    id: 'step-3',
    stage: 3,
    title: 'Certificaciones de Inversores y Protecciones Anti-Isla',
    entity: 'Fabricante de Equipos / Laboratorio Acreditado',
    description: 'Comprobación de que el inversor cumple los estándares obligatorios de desconexión anti-isla para seguridad de la cuadrilla de la red.',
    requirements: [
      'Certificado de conformidad bajo norma IEEE 1547 y UL 1741',
      'Tiempo de desconexión anti-isla activo menor o igual a 2.0 segundos ante corte de red pública',
      'Tiempo de retardo de reconexión automática programado en un mínimo de 5 minutos (300 segundos)',
      'Protección contra falla de arco DC (AFCI según UL 1699B) y desconexión rápida (Rapid Shutdown)',
    ],
    normativeRef: 'NTCOGD Art. 21 y Estándar IEEE 1547.1',
  },
  {
    id: 'step-4',
    stage: 4,
    title: 'Inspección Física Conjunta en Sitio y Ensayos de Desconexión',
    entity: 'Distribuidora e Instalador Responsable',
    description: 'Cuadrilla técnica de la distribuidora realiza la verificación física de interruptores accesibles, rotulación de advertencia y prueba de disparo.',
    requirements: [
      'Interruptor de desconexión AC exterior, visible, accesible y bloqueable con candado (Lock-Out / Tag-Out)',
      'Placa reflectiva de advertencia de doble fuente de energía (Generador Fotovoltaico + Red Distribuidora)',
      'Prueba de disparo en caliente: desconexión de red pública y comprobación de cese de inyección en < 2 seg',
      'Medición de resistencia de puesta a tierra conforme a norma (< 10 ohms recomendado)',
    ],
    normativeRef: 'NTCOGD Art. 26 y Procedimiento Operativo AES/DELSUR',
  },
  {
    id: 'step-5',
    stage: 5,
    title: 'Instalación de Medidor Bidireccional y Firma de Contrato',
    entity: 'Distribuidora Comercializadora y Usuario Final',
    description: 'Sustitución del medidor electromecánico o unidireccional por medidor digital bidireccional de 4 cuadrantes con medición neta mensual.',
    requirements: [
      'Retiro del medidor previo e instalación de medidor bidireccional calibrado por SIGET',
      'Firma del Contrato de Interconexión de Generación Distribuida',
      'Activación formal del esquema de medición neta (compensación mensual de kWh inyectados)',
      'Entrega de acta formal de puesta en servicio comercial',
    ],
    normativeRef: 'Ley General de Electricidad Art. 82-B y NTCOGD Art. 32',
  },
];

export const SIGET_SOLAR_QUESTIONS: SigetSolarQuestion[] = [
  // =========================================================================
  // 1. NORMA NTCOGD Y MEDICIÓN NETA (SIGET)
  // =========================================================================
  {
    id: 'siget-01',
    category: 'normativa-gd',
    categoryLabel: 'Norma NTCOGD & Medición Neta',
    area: 'Tiempo de Desconexión y Protección Anti-Isla',
    statement:
      'De acuerdo con la Norma Técnica de Conexión y Operación de Generación Distribuida (NTCOGD, SIGET Acuerdo 343-E-2016) y el estándar IEEE 1547, ¿cuál es el tiempo máximo permitido para que un inversor fotovoltaico interrumpa la inyección de energía ante una pérdida de tensión o desconexión de la red de distribución pública?',
    options: {
      A: 'Menor o igual a 2.0 segundos.',
      B: 'Menor o igual a 10.0 segundos.',
      C: 'Exactamente 30.0 segundos.',
      D: 'Menor o igual a 60.0 segundos.',
    },
    correctAnswer: 'A',
    explanation:
      'La protección anti-isla es un requerimiento de seguridad de vida crítico para el personal de campo de las empresas distribuidoras. El estándar IEEE 1547 y la NTCOGD de la SIGET estipulan que el inversor debe cesar de entregar energía a la red desenergizada en un tiempo no mayor a 2.0 segundos tras la pérdida de suministro de la red pública.',
    technicalBasis: 'NTCOGD SIGET Acuerdo 343-E-2016, Art. 21 e IEEE 1547 / UL 1741.',
    distractorRationale: {
      A: 'Correcto. El límite máximo de desconexión anti-isla es 2.0 segundos.',
      B: '10 segundos es excesivo y mantendría la red energizada poniendo en riesgo a operarios.',
      C: '30 segundos corresponde al límite del Rapid Shutdown del NEC para disipar voltaje en los módulos, no a la desconexión anti-isla.',
      D: '60 segundos violaría flagrantemente la normativa de seguridad de red.',
    },
  },
  {
    id: 'siget-02',
    category: 'normativa-gd',
    categoryLabel: 'Norma NTCOGD & Medición Neta',
    area: 'Reconexión Automática del Inversor tras Falla',
    statement:
      'Una vez que la tensión y frecuencia de la red de distribución pública regresan a sus rangos nominales de operación tras un corte de energía, ¿cuál es el tiempo de retardo mínimo de observación que debe esperar el inversor fotovoltaico antes de volver a reconectarse y sincronizarse a la red?',
    options: {
      A: '10 segundos.',
      B: '30 segundos.',
      C: '5 minutos (300 segundos).',
      D: '15 minutos (900 segundos).',
    },
    correctAnswer: 'C',
    explanation:
      'Según la NTCOGD y la norma técnica IEEE 1547, una vez restablecidos los parámetros normales de voltaje y frecuencia en la red de distribución, el inversor debe mantener un periodo de retardo de reconexión obligatorio de al menos 5 minutos (300 segundos). Esto garantiza que la red se encuentre estable y evita acoples en medio de maniobras transitorias de reconectadores (reclosers).',
    technicalBasis: 'NTCOGD SIGET Art. 22; Estándar IEEE 1547 Sección 5.4.1.',
    distractorRationale: {
      A: '10 segundos no permite estabilizar maniobras de transformadores ni transitorios.',
      B: '30 segundos es insuficiente para asegurar la estabilidad de la red.',
      C: 'Correcto. El retardo reglamentario estándar es de 5 minutos (300 s).',
      D: '15 minutos no es el valor estándar regulado.',
    },
  },
  {
    id: 'siget-03',
    category: 'normativa-gd',
    categoryLabel: 'Norma NTCOGD & Medición Neta',
    area: 'Límite de Potencia del Generador Distribuido (UGD)',
    statement:
      'En el marco del esquema de Medición Neta regulado por la SIGET en El Salvador, ¿cuál es la limitación máxima de potencia nominal en corriente alterna (AC) que un usuario residencial o comercial puede instalar bajo la figura de Usuario Generador Distribuido (UGD)?',
    options: {
      A: 'No puede exceder la capacidad contratada o potencia de demanda contratada con la distribuidora para dicho suministro.',
      B: 'No puede superar los 10 kW para ningún tipo de usuario residencial ni comercial.',
      C: 'Puede duplicar libremente la capacidad de su acometida sin necesidad de adecuaciones de red.',
      D: 'La potencia es ilimitada y la distribuidora está obligada a aceptar cualquier inyección sin estudio previo.',
    },
    correctAnswer: 'A',
    explanation:
      'La NTCOGD y la Ley General de Electricidad establecen que la capacidad nominal de generación en corriente alterna de un sistema de generación distribuida para autoconsumo y medición neta no podrá ser mayor a la capacidad o potencia contratada por el usuario final en su punto de suministro (NIC), salvo que tramite y pague una ampliación formal de potencia contratada y acometida ante la distribuidora.',
    technicalBasis: 'NTCOGD SIGET Acuerdo 343-E-2016, Art. 8 y Ley General de Electricidad.',
    distractorRationale: {
      A: 'Correcto. La potencia nominal del UGD está topada a la potencia contratada del suministro.',
      B: '10 kW es falso; clientes trifásicos comerciales pueden instalar capacidades superiores según su potencia contratada.',
      C: 'Duplicar la potencia sin adecuación sobrecargaría el transformador del circuito.',
      D: 'No existe inyección ilimitada; requiere estudio y aprobación técnica de la distribuidora.',
    },
  },
  {
    id: 'siget-04',
    category: 'normativa-gd',
    categoryLabel: 'Norma NTCOGD & Medición Neta',
    area: 'Tratamiento de Excedentes Energéticos Mensuales',
    statement:
      'En el régimen de Medición Neta en El Salvador, si durante un ciclo mensual de facturación la energía generada e inyectada por el usuario supera la energía consumida de la red de distribución pública, ¿cómo se compensan dichos excedentes?',
    options: {
      A: 'Se acreditan en kWh como un saldo a favor que se descuenta en las facturaciones de los meses posteriores.',
      B: 'La distribuidora entrega inmediatamente un cheque en efectivo al usuario al final del mes.',
      C: 'Los excedentes se pierden y caducan automáticamente al terminar cada mes calendario.',
      D: 'Se penaliza económicamente al usuario por inyectar más de lo consumido.',
    },
    correctAnswer: 'A',
    explanation:
      'En el esquema de medición neta de El Salvador, los excedentes de energía inyectada a la red durante un mes de facturación se acreditan en kWh como saldo a favor en la cuenta del usuario para ser compensados contra consumos en los ciclos de facturación siguientes, amortizando la factura eléctrica del cliente.',
    technicalBasis: 'Ley General de Electricidad Art. 82-B y Reglamentos de Medición Neta SIGET.',
    distractorRationale: {
      A: 'Correcto. Los excedentes se acumulan como créditos en kWh para los ciclos subsiguientes.',
      B: 'No se expide cheque mensual directo en medición neta estándar.',
      C: 'No se pierden de mes a mes; tienen vigencia de compensación.',
      D: 'No se aplican penalizaciones por excedentes dentro de los límites contratados.',
    },
  },
  {
    id: 'siget-05',
    category: 'normativa-gd',
    categoryLabel: 'Norma NTCOGD & Medición Neta',
    area: 'Interruptor de Desconexión de Red Visible y Accesible',
    statement:
      '¿Qué requerimiento físico exige la NTCOGD y los manuales de AES/DELSUR respecto al interruptor de desconexión del sistema solar fotovoltaico del lado de corriente alterna?',
    options: {
      A: 'Debe ser exterior, visible, fácilmente accesible al personal de la distribuidora, con indicación clara de ABIERTO/CERRADO y apto para bloqueo con candado (Lock-Out / Tag-Out).',
      B: 'Debe estar oculto bajo llave dentro del dormitorio principal del inmueble.',
      C: 'Basta con apagar el inversor desde una aplicación móvil vía WiFi.',
      D: 'No se requiere interruptor físico si el inversor cuenta con fusible interno.',
    },
    correctAnswer: 'A',
    explanation:
      'Para salvaguardar la vida de las brigadas de linieros que intervienen la red pública, las distribuidoras eléctricas exigen un interruptor de seccionamiento de AC de apertura manual visible (Visible Disconnect Switch) instalado cerca del punto de entrega/medidor, accesible 24/7 sin ingresar al interior de la vivienda o nave industrial, y con aldaba para candado de seguridad.',
    technicalBasis: 'NTCOGD SIGET Art. 25 y Especificaciones Técnicas AES/DELSUR.',
    distractorRationale: {
      A: 'Correcto. Es la exigencia física fundamental para seccionamiento de seguridad en campo.',
      B: 'Un interruptor dentro de una zona privada impide la desconexión de emergencia por la distribuidora.',
      C: 'Una app móvil no garantiza desconexión física galvánica de seguridad.',
      D: 'El fusible interno no reemplaza al seccionador exterior accesible.',
    },
  },

  // =========================================================================
  // 2. CÓDIGO ELÉCTRICO NACIONAL (NEC ART. 690) Y PROTECCIONES DC/AC
  // =========================================================================
  {
    id: 'siget-06',
    category: 'nec-690',
    categoryLabel: 'Código NEC Art. 690 & Protecciones',
    area: 'Cálculo de Corriente de Cortocircuito y Factor de Seguridad (NEC 690.8)',
    statement:
      'Para dimensionar los conductores y dispositivos de protección contra sobrecorriente (fusibles DC) de un circuito fuente fotovoltaico según el Código NEC Art. 690.8, ¿cuál es el factor de multiplicación total aplicado a la corriente de cortocircuito nominal del panel en condiciones estándar de medida ($I_{sc}$)?',
    options: {
      A: '$1.56 \\times I_{sc}$ (resultante de $1.25 \\times 1.25 \\times I_{sc}$).',
      B: '$1.00 \\times I_{sc}$ sin ningún factor de seguridad.',
      C: '$1.15 \\times I_{sc}$.',
      D: '$2.50 \\times I_{sc}$.',
    },
    correctAnswer: 'A',
    explanation:
      'El NEC 690.8 estipula que la corriente máxima de un circuito fotovoltaico es $1.25 \\times I_{sc}$ debido a condiciones de irradiancia superior a $1000\\text{ W/m}^2$ por efecto de reflexión o bajas temperaturas. A su vez, los conductores y protecciones de servicio continuo deben sobredimensionarse al $125\\%$. Multiplicando ambos factores: $1.25 \\times 1.25 = 1.5625 \\approx 1.56 \\times I_{sc}$.',
    technicalBasis: 'NEC (NFPA 70) Artículo 690.8(A)(1) y 690.8(B)(1).',
    distractorRationale: {
      A: 'Correcto. El factor reglamentario compuesto de diseño continuo es 1.56.',
      B: '1.0 provocaría disparos falsos continuos por sobre-irradiancia diurna.',
      C: '1.15 no cumple con el Código Eléctrico Nacional.',
      D: '2.50 dejaría al circuito sin protección efectiva contra sobrecorrientes.',
    },
  },
  {
    id: 'siget-07',
    category: 'nec-690',
    categoryLabel: 'Código NEC Art. 690 & Protecciones',
    area: 'Desconexión Rápida en Techos (Rapid Shutdown - NEC 690.12)',
    statement:
      'El requerimiento de Desconexión Rápida (Rapid Shutdown) en techos según el Código NEC Art. 690.12 tiene como objetivo proteger a bomberos y brigadistas. ¿Cuáles son los umbrales de tensión y tiempo reglamentarios fuera del límite de 1 pie (30 cm) del arreglo solar?',
    options: {
      A: 'Reducir la tensión a 30 Voltios o menos en un tiempo no mayor a 30 segundos.',
      B: 'Reducir la tensión a 120 Voltios en un máximo de 5 minutos.',
      C: 'Reducir la corriente a cero manteniendo 600 Voltios de tensión continua.',
      D: 'No existe límite de voltaje si los paneles son monocristalinos.',
    },
    correctAnswer: 'A',
    explanation:
      'El NEC 690.12 establece que al activarse el dispositivo de iniciación de Rapid Shutdown (o corte general de energía), los conductores ubicados fuera del perímetro de 1 pie (30 cm) del arreglo fotovoltaico deben reducir su voltaje a 30 V o menos dentro de los 30 segundos posteriores, mitigando el riesgo de electrocución para los cuerpos de socorro y bomberos.',
    technicalBasis: 'NEC (NFPA 70) Artículo 690.12(B)(1).',
    distractorRationale: {
      A: 'Correcto. La regla internacional mnemotécnica es 30 Voltios en 30 Segundos.',
      B: '120 V sigue siendo un voltaje potencialmente letal en condiciones de humedad o lluvia.',
      C: 'Mantener 600 V representaría un peligro mortal extremo de descarga eléctrica.',
      D: 'El tipo de panel es irrelevante; la regla aplica universalmente a techos.',
    },
  },
  {
    id: 'siget-08',
    category: 'nec-690',
    categoryLabel: 'Código NEC Art. 690 & Protecciones',
    area: 'Interruptor de Falla de Arco en Corriente Continua (AFCI DC)',
    statement:
      'En sistemas fotovoltaicos que operan a una tensión máxima en circuito abierto superior a 80 V en DC (NEC 690.11), ¿cuál es la función obligatoria del dispositivo AFCI (Arc-Fault Circuit-Interrupter)?',
    options: {
      A: 'Detectar arcos eléctricos en serie provocados por conexiones flojas o conductores rotos y desactivar el inversor para prevenir incendios.',
      B: 'Convertir la energía directa en alterna antes de llegar al inversor.',
      C: 'Evitar que el polvo y excrementos de aves se acumulen sobre los paneles solares.',
      D: 'Aumentar la eficiencia de captación solar en días nublados.',
    },
    correctAnswer: 'A',
    explanation:
      'Los circuitos DC de alta tensión pueden sostener arcos eléctricos en serie intensos a más de 3,000 °C si un conector MC4 está mal ponchado o un conductor se fractura. El interruptor AFCI (norma UL 1699B integrada en el inversor) detecta la firma espectral de alta frecuencia del arco y apaga el circuito en milisegundos, previniendo incendios en los techos.',
    technicalBasis: 'NEC Artículo 690.11 y Estándar UL 1699B.',
    distractorRationale: {
      A: 'Correcto. La protección AFCI es vital para prevenir siniestros por ignición de arco DC.',
      B: 'Esa es la función de inversión DC/AC, no del detector de arco.',
      C: 'La limpieza de suciedad es mantenimiento mecánico/químico, no función eléctrica.',
      D: 'El AFCI es un dispositivo de seguridad de corte, no de ganancia energética.',
    },
  },
  {
    id: 'siget-09',
    category: 'nec-690',
    categoryLabel: 'Código NEC Art. 690 & Protecciones',
    area: 'Caída de Tensión Admisible en Sistemas Fotovoltaicos',
    statement:
      'De acuerdo con las buenas prácticas de diseño fotovoltaico e ingeniería eléctrica reconocidas por la SIGET, ¿cuáles son los porcentajes recomendados de caída máxima de tensión ($\\%\\Delta V$) en los tramos DC y AC de una instalación?',
    options: {
      A: 'Máximo 1.5% a 2% en el tramo de corriente continua (DC) y máximo 1% en el tramo de corriente alterna (AC).',
      B: 'Hasta 15% en DC y 20% en AC sin problemas de operación.',
      C: '10% uniforme en todos los tramos de la instalación.',
      D: 'No importa la caída de tensión siempre que los cables no se derritan.',
    },
    correctAnswer: 'A',
    explanation:
      'Mantener caídas de tensión muy bajas (típicamente $\\le 2\\%$ en DC y $\\le 1\\%$ en AC) no solo maximiza la cosecha de energía que llega a la red, sino que previene que el inversor se desconecte por sobrevoltaje AC en el punto de acoplamiento común (PCC) en horas pico de mediodía.',
    technicalBasis: 'Guías de Diseño Eléctrico SIGET y Manuales de Ingeniería Solar.',
    distractorRationale: {
      A: 'Correcto. El estándar industrial busca caídas $\\le 2\\%$ en DC y $\\le 1\\%$ en AC.',
      B: '15% y 20% provocarían pérdidas económicas severas y desconexiones constantes del inversor.',
      C: '10% excede ampliamente el límite de tolerancia de los inversores fotovoltaicos.',
      D: 'Postura empírica peligrosa que viola principios elementales de ingeniería.',
    },
  },

  // =========================================================================
  // 3. REGLAMENTO DE ACREDITACIÓN DE ELECTRICISTAS SIGET
  // =========================================================================
  {
    id: 'siget-10',
    category: 'electricistas-siget',
    categoryLabel: 'Acreditación y Categorías SIGET',
    area: 'Alcance y Límite de Potencia: Electricista de Cuarta Categoría',
    statement:
      'De acuerdo con el Reglamento de Acreditación de Instaladores y Técnicos Electricistas emitido por la SIGET, ¿cuál es el alcance máximo de trabajo y potencia para un electricista con carnet de Cuarta Categoría?',
    options: {
      A: 'Instalaciones eléctricas residenciales monofásicas de baja tensión con potencia instalada de hasta 5 kW.',
      B: 'Instalaciones comerciales trifásicas de media tensión hasta 500 kVA.',
      C: 'Subestaciones de potencia de alta tensión de 115 kV.',
      D: 'No tiene límite de potencia siempre que firme un notario.',
    },
    correctAnswer: 'A',
    explanation:
      'El carnet de Cuarta Categoría de la SIGET habilita al titular para ejecutar y reparar instalaciones eléctricas residenciales monofásicas básicas de baja tensión (120/240 V) con un límite de potencia instalada de hasta 5 kW.',
    technicalBasis: 'Reglamento para la Autorización y Registro de Electricistas de la SIGET.',
    distractorRationale: {
      A: 'Correcto. Cuarta Categoría está limitada a residenciales monofásicas hasta 5 kW.',
      B: 'Comerciales trifásicas de media tensión corresponden a Segunda o Primera Categoría.',
      C: 'Alta tensión requiere exclusivamente Primera Categoría (Ingeniero Electricista colegiado).',
      D: 'Falso; un notario da fe de firmas pero no sustituye la competencia técnica regulada.',
    },
  },
  {
    id: 'siget-11',
    category: 'electricistas-siget',
    categoryLabel: 'Acreditación y Categorías SIGET',
    area: 'Alcance y Límite de Potencia: Electricista de Tercera Categoría',
    statement:
      '¿Hasta qué capacidad de potencia nominal y tipo de suministro faculta el carnet de Electricista de Tercera Categoría emitido por la SIGET?',
    options: {
      A: 'Instalaciones residenciales y comerciales en baja tensión hasta una capacidad de 25 kVA.',
      B: 'Líneas de transmisión interconectadas de 230 kV a nivel regional.',
      C: 'Únicamente instalaciones solares portátiles de menos de 100 W.',
      D: 'Sistemas industriales con subestación propia de 1,000 kVA.',
    },
    correctAnswer: 'A',
    explanation:
      'El carnet de Tercera Categoría autoriza la ejecución, modificación e inspección de instalaciones en baja tensión de hasta 25 kVA, lo que cubre la mayoría de sistemas fotovoltaicos residenciales y pequeños comercios en El Salvador.',
    technicalBasis: 'Reglamento de Registro de Electricistas SIGET, Clasificación de Categorías.',
    distractorRationale: {
      A: 'Correcto. Tercera Categoría cubre suministros en baja tensión hasta 25 kVA.',
      B: 'Líneas de transmisión son competencia exclusiva de Primera Categoría.',
      C: '100 W es un límite absurdo; la categoría cubre hasta 25 kVA.',
      D: 'Subestaciones de 1,000 kVA exceden por mucho la Tercera Categoría.',
    },
  },
  {
    id: 'siget-12',
    category: 'electricistas-siget',
    categoryLabel: 'Acreditación y Categorías SIGET',
    area: 'Firma de Planos y Memorias Técnicas para Proyectos Solares Mayores',
    statement:
      'Para un proyecto de generación distribuida solar comercial de 100 kW interconectado en media tensión a la red de CAESS o DELSUR, ¿qué categoría mínima de acreditación SIGET debe poseer el profesional responsable de firmar y presentar los planos y memoria técnica?',
    options: {
      A: 'Electricista de Primera Categoría (Ingeniero Electricista debidamente autorizado por la SIGET y colegiado).',
      B: 'Electricista de Cuarta Categoría.',
      C: 'Cualquier persona que haya instalado paneles solares empíricamente.',
      D: 'Únicamente el alcalde municipal de la localidad donde se instale.',
    },
    correctAnswer: 'A',
    explanation:
      'Los proyectos de generación distribuida comercial o industrial de gran escala (> 25 kVA o con conexión en media tensión) requieren obligatoriamente la firma, sello y responsabilidad civil de un Ingeniero Electricista con carnet de Primera Categoría acreditado ante la SIGET.',
    technicalBasis: 'NTCOGD Art. 14 y Reglamento de Acreditación de la SIGET.',
    distractorRationale: {
      A: 'Correcto. Sistemas comerciales e industriales mayores exigen carnet de Primera Categoría.',
      B: 'Cuarta Categoría está limitada a 5 kW monofásicos residenciales.',
      C: 'La experiencia empírica sin acreditación SIGET carece de validez legal.',
      D: 'La alcaldía emite permisos de construcción o tasas, no avales técnicos eléctricos.',
    },
  },

  // =========================================================================
  // 4. SEGURIDAD OPERATIVA, MANIOBRAS Y PUESTA A TIERRA
  // =========================================================================
  {
    id: 'siget-13',
    category: 'seguridad-operativa',
    categoryLabel: 'Seguridad Ocupacional & Maniobras',
    area: 'Riesgo de Arco Eléctrico y Desconexión de Conectores MC4 Bajo Carga',
    statement:
      'Durante el mantenimiento o resolución de fallas en un arreglo solar fotovoltaico, ¿por qué está terminantemente prohibido desacoplar conectores MC4 o terminales DC mientras los paneles están expuestos a radiación solar y el circuito está conduciendo corriente?',
    options: {
      A: 'Porque en corriente continua (DC) la corriente no pasa por cero cíclicamente, generándose un arco eléctrico sostenido que destruye el conector y puede causar quemaduras graves o incendio.',
      B: 'Porque se descalibra el satélite de posicionamiento del sol.',
      C: 'Porque los paneles solares pierden la garantía de fábrica si se tocan los cables.',
      D: 'Porque la batería del teléfono móvil del técnico se descargaría instantáneamente.',
    },
    correctAnswer: 'A',
    explanation:
      'A diferencia de la corriente alterna (AC) donde la onda pasa por cero 120 veces por segundo facilitando la extinción del arco, la corriente continua (DC) no cruza por cero. Si se abre un conector MC4 bajo carga, el aire se ioniza y se sostiene un arco de plasma extremadamente caliente y peligroso. Siempre debe apagarse el interruptor seccionador DC o apagar el inversor antes de abrir cualquier conexión de string.',
    technicalBasis: 'Normas de Seguridad Ocupacional Eléctrica NFPA 70E y OSHA 1910.',
    distractorRationale: {
      A: 'Correcto. El arco eléctrico en DC no se extingue espontáneamente al no tener cruce por cero.',
      B: 'Los satélites no tienen vínculo directo con los cables locales.',
      C: 'La garantía no es el motivo de seguridad vital frente al arco eléctrico.',
      D: 'Distractor humorístico sin sustento técnico.',
    },
  },
  {
    id: 'siget-14',
    category: 'seguridad-operativa',
    categoryLabel: 'Seguridad Ocupacional & Maniobras',
    area: 'Puesta a Tierra y Equipotencialidad de Marcos (NEC 250 y 690.43)',
    statement:
      '¿Cuál es la razón técnica y reglamentaria por la cual todas las estructuras de montaje de aluminio y los marcos metálicos de los paneles fotovoltaicos deben estar sólidamente unidos entre sí mediante conductores de puesta a tierra de equipos (EGC) y conectados a tierra?',
    options: {
      A: 'Para asegurar una ruta de baja impedancia a tierra que permita el disparo del interruptor GFDI/inversor ante una falla de aislamiento y evitar tensiones de contacto peligrosas para los usuarios.',
      B: 'Para que los paneles puedan recibir las señales de radio AM y FM del vecindario.',
      C: 'Para evitar que el granizo golpee las celdas de silicio.',
      D: 'Para aumentar la corriente nominal de cortocircuito del generador solar.',
    },
    correctAnswer: 'A',
    explanation:
      'Los marcos de los módulos y las estructuras metálicas están expuestos a la intemperie y a roces con cables de alta tensión DC. La unión equipotencial y puesta a tierra (NEC 690.43) garantiza que ante cualquier falla de aislamiento (ground fault), la corriente fluya a tierra activando la protección GFDI del inversor y protegiendo a las personas contra choques eléctricos letales por tensión de contacto.',
    technicalBasis: 'NEC Artículo 690.43 y Artículo 250 (Puesta a Tierra y Conexión Equipotencial).',
    distractorRationale: {
      A: 'Correcto. La equipotencialidad drena fallas a tierra y previene descargas letales por contacto.',
      B: 'Los paneles no son antenas de radiodifusión.',
      C: 'La puesta a tierra no afecta el impacto físico del granizo.',
      D: 'La puesta a tierra no altera la física interna de generación fotovoltaica en las celdas.',
    },
  },
  {
    id: 'siget-15',
    category: 'seguridad-operativa',
    categoryLabel: 'Seguridad Ocupacional & Maniobras',
    area: 'Rotulación y Placas de Advertencia Obligatorias',
    statement:
      'Según la NTCOGD de la SIGET y el Código NEC 690.54, ¿qué rotulación obligatoria debe colocarse de forma permanente y resistente a la intemperie en el centro de carga principal y punto de interconexión con la red?',
    options: {
      A: 'ADVERTENCIA: FUENTE DUAL DE ENERGÍA. GENERADOR SOLAR FOTOVOLTAICO INTERCONECTADO. SEGUNDA FUENTE PRESENTE.',
      B: 'CUIDADO: PROHIBIDO USAR TELÉFONOS CELULARES EN ESTA ZONA.',
      C: 'AVISO: ESTA CASA ES ECOLÓGICA Y NO PRODUCE GASES.',
      D: 'PELIGRO: ALTO VOLTAJE SOLO DE NOCHE.',
    },
    correctAnswer: 'A',
    explanation:
      'Cualquier tablero donde confluyan la red de distribución pública y un sistema de generación local debe estar inequívocamente rotulado con placas de advertencia indelebles que alerten a los técnicos de mantenimiento que desconectar el breaker de la red no desenergiza el tablero por completo si los paneles solares siguen generando.',
    technicalBasis: 'NTCOGD Art. 27 y NEC 690.54 (Placas y Marcado de Fuentes Múltiples).',
    distractorRationale: {
      A: 'Correcto. La advertencia de fuente dual previene electrocuciones de linieros y técnicos.',
      B: 'El uso de celulares no tiene relación con el marcado eléctrico obligatorio.',
      C: 'Eslogan ecológico sin relevancia en seguridad técnica y normativa de seccionamiento.',
      D: 'Los paneles generan de día con radiación solar, no de noche.',
    },
  },
];
