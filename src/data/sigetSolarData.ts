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

export interface SolvedEngineeringCalculation {
  id: string;
  title: string;
  unitId: string;
  problemStatement: string;
  designParameters: Record<string, string>;
  engineeringFormulas: string[];
  stepByStepSubstitution: string;
  numericalResult: string;
  practicalEngineeringJudgment: string;
}

export interface SigetThematicUnit {
  id: string;
  unitNumber: number;
  title: string;
  shortDescription: string;
  normativeCategory: 'normativa-gd' | 'nec-690' | 'electricistas-siget' | 'seguridad-operativa';
  substantiveTheory: string;
  keyRegulatoryReferences: string[];
  solvedCalculations: SolvedEngineeringCalculation[];
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

export const SIGET_THEMATIC_UNITS: SigetThematicUnit[] = [
  {
    "id": "unit-1-ntcogd-medicion-neta",
    "unitNumber": 1,
    "title": "Marco Regulatorio NTCOGD y Medición Neta en El Salvador",
    "shortDescription": "Norma Técnica de Conexión y Operación de Generación Distribuida (SIGET Acuerdo 343-E-2016), distribuidoras CAESS/DELSUR, requisitos de inyección y balance neto.",
    "normativeCategory": "normativa-gd",
    "substantiveTheory": "El marco regulatorio de la generación distribuida y la energía solar fotovoltaica en la República de El Salvador tiene su fundamento primario en la Ley General de Electricidad (Decreto Legislativo N° 843 y sus reformas integrales), complementada por la política energética nacional formulada por el Consejo Nacional de Energía (CNE) y la función fiscalizadora y tarifaria de la Superintendencia General de Electricidad y Telecomunicaciones (SIGET). Dentro de este andamiaje normativo, la pieza angular para cualquier profesional de la ingeniería eléctrica o técnico instalador solar es la Norma Técnica de Conexión y Operación de Generación Distribuida (NTCOGD), promulgada mediante el Acuerdo SIGET N° 343-E-2016, la cual regula con carácter mandatorio las condiciones técnicas, operativas y de seguridad que rigen la interconexión de sistemas fotovoltaicos a las redes de distribución de baja y media tensión operadas por AES El Salvador (CAESS, CLESA, EEO, DEUSEM) y DELSUR S.A. de C.V.\n\nLa NTCOGD define formalmente al Usuario Generador Distribuido (UGD) como aquel usuario final titular de un suministro eléctrico (identificado unívocamente mediante su Número de Identificación de Contrato o NIC) que instala una central de generación renovable, fundamentalmente solar fotovoltaica, con el objetivo de abastecer total o parcialmente sus propias necesidades de consumo de energía eléctrica y que cuenta con la capacidad de inyectar sus excedentes momentáneos a la red de distribución pública. Un principio regulatorio ineludible estipulado en el Artículo 8 de la NTCOGD establece que la potencia nominal de generación en corriente alterna (AC) de la central fotovoltaica no podrá en ningún caso exceder la capacidad o potencia contratada por el usuario en dicho punto de suministro. Esta restricción previene la sobrecarga de los alimentadores locales y protege la estabilidad de la red de la distribuidora. Si un usuario industrial o comercial desea instalar una capacidad solar superior a su demanda contratada histórica, está obligado a gestionar y sufragar previamente un trámite formal de ampliación de potencia y adecuación de acometida ante la distribuidora eléctrica correspondiente.\n\nEl procedimiento de interacción técnico-administrativa con las empresas distribuidoras (CAESS, DELSUR) consta de etapas rigurosas y secuenciales. La primera etapa comprende la solicitud de prefactibilidad y estudio del punto de conexión. En esta fase, el instalador responsable presenta la memoria técnica descriptiva, la ubicación georreferenciada del inmueble y el diagrama de implantación. La distribuidora evalúa la capacidad de carga remanente en el transformador de distribución que atiende el sector. La regla técnica operativa general exige que la potencia agregada de generación distribuida conectada a un transformador de distribución monofásico o trifásico no sobrepase el 80% de la capacidad nominal en kVA de dicho transformador. Cuando la capacidad solicitada sobrepasa este umbral o la inyección acumulada en el circuito primario supera el 15% de la demanda mínima diurna, la distribuidora está facultada para exigir un Estudio de Impacto en la Red a costo del solicitante para determinar si se requieren adecuaciones en reconectadores, reguladores de tensión o reemplazo del transformador.\n\nEl esquema económico y operativo que viabiliza los proyectos residenciales y comerciales en El Salvador es el mecanismo de Medición Neta (Net Metering), estipulado en el Artículo 82-B de la Ley General de Electricidad. Bajo este esquema, la distribuidora sustituye el medidor electromecánico tradicional por un medidor digital bidireccional multifunción de cuatro cuadrantes homologado y calibrado conforme a los estándares de la SIGET. Este equipo registra de forma independiente la energía activa consumida de la red (kWh importados) y la energía neta excedente generada e inyectada al sistema de distribución (kWh exportados), así como la potencia reactiva en kVARh. Al cierre de cada ciclo mensual de facturación comercial, la distribuidora realiza el balance neto: si la energía importada excede la exportada, el usuario factura únicamente la diferencia neta resultante más los cargos por uso de red y tasas municipales; por el contrario, si la energía exportada supera a la importada durante el mes, la diferencia se acredita cuantitativamente en kWh como un saldo a favor que se descuenta en las facturaciones de los ciclos subsiguientes sin caducidad intempestiva mensual, permitiendo compensar las variaciones estacionales de irradiancia entre la época seca (noviembre a abril) y la época lluviosa (mayo a octubre).\n\nEn lo referente a la calidad de la energía eléctrica inyectada, la NTCOGD impone límites técnicos rigurosos para garantizar que la penetración solar no degrade el suministro de los usuarios vecinos. En conformidad con el estándar internacional IEEE 519, el inversor fotovoltaico debe operar con una Distorsión Armónica Total de corriente (THD_I) estrictamente inferior al 5.0% medida a plena carga en el punto de acoplamiento común (PCC), con límites específicos de armónicos individuales no mayores al 4.0% para órdenes impares del 3° al 9°. Asimismo, el inversor debe mantener un factor de potencia regulable en el rango de 0.95 inductivo a 0.95 capacitivo, inyectando idealmente a factor de potencia unitario (PF = 1.00). La inyección accidental de corriente continua (DC) hacia la red de corriente alterna está limitada a un máximo estricto del 0.5% de la corriente nominal de salida del inversor para impedir la saturación magnética del núcleo de los transformadores de distribución. El desbalance de tensión entre fases en acometidas trifásicas inducido por generación fotovoltaica asimétrica no debe superar el 2.0% según el Artículo 19 de la norma. Finalmente, todo sistema UGD debe contar en su frontera física con un interruptor de desconexión en AC visible, accesible las 24 horas del día para las cuadrillas de la distribuidora y provisto de aldaba para candado de seguridad (LOTO), garantizando el aislamiento galvánico de la instalación durante maniobras operativas en la red pública.",
    "keyRegulatoryReferences": [
      "SIGET Acuerdo N° 343-E-2016: Norma Técnica de Conexión y Operación de Generación Distribuida (NTCOGD).",
      "Ley General de Electricidad de la República de El Salvador (Decreto N° 843), Artículos 82-A, 82-B y 82-C.",
      "Estándar IEEE 519-2014: Recommended Practice and Requirements for Harmonic Control in Electric Power Systems.",
      "Manual de Procedimientos de Interconexión UGD de AES El Salvador (CAESS, CLESA, EEO, DEUSEM).",
      "Norma de Conexión de Generación Renovable y Autoconsumo de DELSUR S.A. de C.V."
    ],
    "solvedCalculations": [
      {
        "id": "calc-1-1-capacidad-maxima-ugd",
        "title": "Dimensionamiento de Capacidad Máxima de Inyección UGD según Potencia Contratada",
        "unitId": "unit-1-ntcogd-medicion-neta",
        "problemStatement": "Un usuario residencial en Santa Tecla (área de servicio de DELSUR) posee una acometida bifilar monofásica de 120/240 V con un interruptor termomagnético principal de 40 A en el centro de carga. Desea instalar un sistema solar fotovoltaico para acogerse al régimen de Medición Neta de la NTCOGD. Calcule la potencia máxima nominal en corriente alterna permitida para el inversor sin requerir ampliación de acometida y determine la potencia pico máxima recomendada en paneles considerando una relación DC/AC de 1.25.",
        "designParameters": {
          "Tensión nominal de red (V)": "240 V monofásico bifilar",
          "Capacidad interruptor principal": "40 A",
          "Factor de potencia nominal": "1.00",
          "Relación DC/AC (Inverter Loading Ratio)": "1.25"
        },
        "engineeringFormulas": [
          "P_contratada (W) = V_linea * I_principal * FP",
          "P_inv_ac_max <= P_contratada",
          "P_dc_pico = P_inv_ac_max * ILR"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la potencia contratada del suministro:\nP_contratada = 240 V * 40 A * 1.00 = 9,600 W = 9.60 kW.\n\nPaso 2: Aplicación del límite normativo de la NTCOGD Art. 8:\nLa potencia nominal del inversor fotovoltaico en corriente alterna no debe exceder la potencia contratada:\nP_inv_ac_max <= 9.60 kW.\nSe selecciona un inversor comercial estandarizado de 8.0 kW AC (o 9.0 kW AC si está disponible en catálogo homologado).\n\nPaso 3: Cálculo del generador fotovoltaico en DC:\nP_dc_pico = 8.0 kW * 1.25 = 10.0 kWp = 10,000 Wp en módulos fotovoltaicos.\nCon paneles solares de 550 Wp:\nN_paneles = 10,000 Wp / 550 Wp = 18.18 -> 18 paneles (9.90 kWp).",
        "numericalResult": "8.0 kW AC nominal del inversor y 9.90 kWp (18 paneles de 550 Wp en DC).",
        "practicalEngineeringJudgment": "Cumple holgadamente con el Artículo 8 de la NTCOGD al ser 8.0 kW <= 9.6 kW contratados. La relación DC/AC de 1.238 optimiza la cosecha de energía en horas de mañana y tarde sin provocar recorte excesivo (clipping) al mediodía."
      },
      {
        "id": "calc-1-2-capacidad-transformador-caess",
        "title": "Evaluación de Carga de Transformador de Distribución para Aprobación de Interconexión",
        "unitId": "unit-1-ntcogd-medicion-neta",
        "problemStatement": "En una colonia de Santa Ana (red de AES CLESA/CAESS), un transformador aéreo de distribución de 50 kVA / 13.2 kV a 240/120 V alimenta 14 residencias. Actualmente existen dos sistemas solares interconectados que suman 12 kVA. Un nuevo usuario solicita el punto de conexión para un sistema de 10 kVA. Determine si la distribuidora aprobará la interconexión con base en el límite normativo de capacidad acumulada del 80% y calcule el margen remanente en kVA.",
        "designParameters": {
          "Capacidad nominal del transformador": "50 kVA",
          "Límite normativo de penetración": "80% (0.80)",
          "Potencia solar existente acumulada": "12 kVA",
          "Nueva potencia solar solicitada": "10 kVA"
        },
        "engineeringFormulas": [
          "S_limite_adm (kVA) = S_transformador * 0.80",
          "S_solar_total (kVA) = S_existente + S_solicitada",
          "Margen_remanente (kVA) = S_limite_adm - S_solar_total"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo del límite admisible en el transformador de distribución:\nS_limite_adm = 50 kVA * 0.80 = 40.0 kVA.\n\nPaso 2: Suma de potencia agregada de generación distribuida:\nS_solar_total = 12.0 kVA + 10.0 kVA = 22.0 kVA.\n\nPaso 3: Verificación de cumplimiento:\n22.0 kVA <= 40.0 kVA. El porcentaje de penetración acumulada es:\n%Penetracion = (22.0 / 50.0) * 100% = 44.0%.\n\nPaso 4: Cálculo del margen de potencia disponible para futuros UGD:\nMargen_remanente = 40.0 kVA - 22.0 kVA = 18.0 kVA.",
        "numericalResult": "Prefactibilidad APROBADA (44.0% de penetración, margen remanente de 18.0 kVA).",
        "practicalEngineeringJudgment": "La solicitud no compromete la capacidad térmica del transformador ni provocará inversión peligrosa de flujo hacia el alimentador primario de media tensión, por lo que la distribuidora debe emitir dictamen favorable sin exigir adecuaciones de red."
      },
      {
        "id": "calc-1-3-balance-energetico-medicion-neta",
        "title": "Balance Energético Anual y Compensación Neta Mensual en Facturación",
        "unitId": "unit-1-ntcogd-medicion-neta",
        "problemStatement": "Un usuario comercial en San Salvador consume 1,250 kWh/mes constantes de la red. Diseña un sistema solar de 10.0 kWp. En la zona, la irradiación solar media es de 5.3 HSP (Horas Solares Pico) y el Performance Ratio (PR) del sistema es de 0.78. Calcule la generación mensual estimada, el balance energético neto mensual y el saldo de energía importada o exportada resultante.",
        "designParameters": {
          "Potencia del arreglo fotovoltaico": "10.0 kWp",
          "Horas Solares Pico diarias (HSP)": "5.3 h/día",
          "Performance Ratio del sistema (PR)": "0.78",
          "Días promedio por mes": "30.4 días",
          "Consumo mensual del cliente": "1,250 kWh/mes"
        },
        "engineeringFormulas": [
          "E_diaria (kWh/día) = P_pico * HSP * PR",
          "E_mensual (kWh/mes) = E_diaria * Dias_mes",
          "Balance_neto (kWh) = Consumo_mensual - E_mensual"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la energía diaria generada por el arreglo solar:\nE_diaria = 10.0 kWp * 5.3 h/día * 0.78 = 41.34 kWh/día.\n\nPaso 2: Cálculo de la energía generada en un mes promedio:\nE_mensual = 41.34 kWh/día * 30.4 días = 1,256.74 kWh/mes.\n\nPaso 3: Cálculo del balance neto mensual para facturación con medidor bidireccional:\nBalance_neto = 1,250.0 kWh - 1,256.74 kWh = -6.74 kWh (excedente neto a favor del usuario).",
        "numericalResult": "Generación: 1,256.74 kWh/mes; Excedente exportado a favor: 6.74 kWh/mes.",
        "practicalEngineeringJudgment": "El sistema cubre el 100.5% del consumo energético del cliente. El excedente de 6.74 kWh se acredita como saldo a favor en la cuenta del usuario para el mes siguiente conforme a la Ley General de Electricidad Art. 82-B."
      },
      {
        "id": "calc-1-4-distorsion-armonica-thd",
        "title": "Verificación de Distorsión Armónica Total de Corriente (THD_I) según IEEE 519 y NTCOGD",
        "unitId": "unit-1-ntcogd-medicion-neta",
        "problemStatement": "Durante el ensayo de comisionamiento de un inversor trifásico de 20 kW interconectado a la red de DELSUR a 208 V, se mide una corriente fundamental de 55.5 A a plena carga. El analizador de redes registra las siguientes corrientes armónicas individuales: I_3 = 0.85 A, I_5 = 1.20 A, I_7 = 0.90 A, I_9 = 0.35 A e I_11 = 0.40 A. Calcule la Distorsión Armónica Total de corriente (THD_I) y verifique si cumple el límite máximo del 5.0% exigido por la NTCOGD.",
        "designParameters": {
          "Corriente fundamental (I_1)": "55.5 A",
          "Armónicos impares medidos": "I_3=0.85A, I_5=1.20A, I_7=0.90A, I_9=0.35A, I_11=0.40A",
          "Límite regulatorio NTCOGD/IEEE 519": "THD_I < 5.0%"
        },
        "engineeringFormulas": [
          "I_rms_armonica = sqrt(sum(I_h^2))",
          "THD_I (%) = (I_rms_armonica / I_1) * 100%"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la suma cuadrática de los componentes armónicos:\nsum(I_h^2) = (0.85)^2 + (1.20)^2 + (0.90)^2 + (0.35)^2 + (0.40)^2\nsum(I_h^2) = 0.7225 + 1.4400 + 0.8100 + 0.1225 + 0.1600 = 3.255 A^2.\n\nPaso 2: Cálculo del valor cuadrático medio de las corrientes armónicas:\nI_rms_armonica = sqrt(3.255) = 1.804 A.\n\nPaso 3: Cálculo del porcentaje de THD_I referido a la fundamental:\nTHD_I = (1.804 A / 55.5 A) * 100% = 3.25%.\n\nPaso 4: Comparación frente al límite regulatorio:\n3.25% < 5.00%. Cumple satisfactoriamente.",
        "numericalResult": "THD_I = 3.25% (Cumple el límite normativo de < 5.0%).",
        "practicalEngineeringJudgment": "El inversor fotovoltaico cumple holgadamente con los estándares de calidad de potencia de la NTCOGD y el estándar IEEE 519. No provocará sobrecalentamiento en bancos de condensadores ni distorsión de tensión perceptible en los suministros vecinos."
      },
      {
        "id": "calc-1-5-desbalance-tension-trifasica",
        "title": "Cálculo de Desbalance de Tensión Trifásico ante Inyección Asimétrica en Baja Tensión",
        "unitId": "unit-1-ntcogd-medicion-neta",
        "problemStatement": "En una red secundaria trifásica de 240/120 V en San Miguel, la inyección asimétrica de generadores fotovoltaicos monofásicos provoca las siguientes tensiones de línea medidas en el tablero general de distribución: V_ab = 243.2 V, V_bc = 239.5 V y V_ca = 236.1 V. Calcule el porcentaje de desbalance de tensión según la definición NEMA/IEEE adoptada por la NTCOGD y verifique si se mantiene dentro del límite máximo admisible del 2.0%.",
        "designParameters": {
          "Tensiones de línea medidas": "V_ab = 243.2 V, V_bc = 239.5 V, V_ca = 236.1 V",
          "Límite regulatorio NTCOGD Art. 19": "Desbalance <= 2.0%"
        },
        "engineeringFormulas": [
          "V_prom = (V_ab + V_bc + V_ca) / 3",
          "Max_desviacion = max(|V_ab - V_prom|, |V_bc - V_prom|, |V_ca - V_prom|)",
          "%Desbalance = (Max_desviacion / V_prom) * 100%"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo del voltaje de línea promedio:\nV_prom = (243.2 + 239.5 + 236.1) / 3 = 718.8 / 3 = 239.60 V.\n\nPaso 2: Cálculo de las desviaciones absolutas respecto al promedio:\n|V_ab - V_prom| = |243.2 - 239.60| = 3.60 V.\n|V_bc - V_prom| = |239.5 - 239.60| = 0.10 V.\n|V_ca - V_prom| = |236.1 - 239.60| = 3.50 V.\n\nPaso 3: Determinación de la desviación máxima absoluta:\nMax_desviacion = 3.60 V.\n\nPaso 4: Cálculo del porcentaje de desbalance de tensión:\n%Desbalance = (3.60 V / 239.60 V) * 100% = 1.50%.\n\nPaso 5: Verificación normativa:\n1.50% <= 2.00%. Cumple con el Artículo 19 de la NTCOGD.",
        "numericalResult": "Desbalance de tensión = 1.50% (Cumple el límite de <= 2.0%).",
        "practicalEngineeringJudgment": "Aunque el desbalance está por debajo del límite regulatorio del 2.0%, un desbalance del 1.5% ya genera corrientes de secuencia negativa capaces de causar calentamiento parásito en motores de inducción trifásicos. Se aconseja al electricista balancear los circuitos monofásicos conectando microinversores de forma simétrica entre las tres fases."
      }
    ]
  },
  {
    "id": "unit-2-nec-690-protecciones-dc",
    "unitNumber": 2,
    "title": "Código Eléctrico NEC / NFPA 70 Art. 690 & Protecciones DC",
    "shortDescription": "Dimensionamiento continuo de conductores fotovoltaicos (1.56 × Isc), corrección de tensión máxima por bajas temperaturas (NEC 690.7), selección de fusibles gPV, desconexión rápida Rapid Shutdown y protección de falla de arco AFCI.",
    "normativeCategory": "nec-690",
    "substantiveTheory": "El diseño y construcción de los circuitos de corriente continua (DC) en sistemas solares fotovoltaicos exige la aplicación rigurosa del Artículo 690 del Código Eléctrico Nacional (NEC / NFPA 70), adoptado oficialmente como norma de referencia técnica en El Salvador. A diferencia de las instalaciones convencionales de corriente alterna, los generadores fotovoltaicos presentan características físicas singulares: son fuentes de corriente limitada inherentemente dependientes de la irradiancia solar y de la temperatura de las celdas de silicio, capaces de sostener arcos eléctricos en corriente continua extremadamente estables y destructivos al carecer del cruce natural por cero que caracteriza a la corriente alterna senoidal.\n\nEl dimensionamiento de los conductores del circuito fuente y de salida fotovoltaica se rige por la regla del factor de sobredimensionamiento continuo establecida en el NEC 690.8. En primer lugar, la corriente máxima del circuito se define como el 125% de la corriente de cortocircuito nominal del módulo en condiciones estándar de ensayo (I_max = 1.25 * I_sc). Este primer factor del 25% compensa las condiciones climáticas reales en las que la irradiancia sobrepasa los 1,000 W/m² de prueba debido al fenómeno de dispersión y reflexión óptica en nubes circundantes (cloud enhancement effect), común en la geografía salvadoreña durante las mañanas despejadas. En segundo lugar, al tratarse de una fuente de generación continua que opera durante más de tres horas consecutivas, el NEC exige que los conductores y las protecciones contra sobrecorriente se dimensionen al 125% de la corriente máxima calculada. Al multiplicar ambos factores algebraicamente resulta el factor normativo fundamental: 1.25 * 1.25 * I_sc = 1.5625 * I_sc (aproximado como 1.56 * I_sc). Todo conductor y fusible DC debe soportar continuamente este valor antes de aplicar factores de corrección ambiental.\n\nLa tensión máxima en circuito abierto del sistema debe calcularse obligatoriamente según el Artículo 690.7 del NEC. Los módulos fotovoltaicos comerciales poseen un coeficiente de temperatura de tensión negativo (típicamente entre -0.26%/°C y -0.35%/°C para módulos de silicio monocristalino PERC o TOPCon). Cuando la temperatura ambiente desciende por debajo de los 25°C de laboratorio, la tensión Voc se eleva. En las regiones altas y montañosas de El Salvador (como la cordillera de Apaneca-Ilamatepec, Chalatenango o El Pital), las temperaturas mínimas históricas alcanzan entre 4°C y 10°C en horas de la madrugada y primeras horas del amanecer. El profesional debe calcular el voltaje máximo corregido mediante la ecuación Voc_max = Voc_STC * [1 + beta_Voc * (T_min - 25)]. Este valor es crítico para asegurar que bajo ninguna condición climática la tensión del string sobrepase los 600 Vdc máximos permitidos en techos residenciales conforme al NEC 690.7(C), ni sobrepase la tensión de ruptura dieléctrica del inversor (habitualmente 1,000 Vdc o 1,500 Vdc en instalaciones comerciales e industriales).\n\nLa selección de conductores exige el cumplimiento estricto del NEC 690.31. Está terminantemente prohibido utilizar cableado termoplástico estándar como THHN/THWN-2 expuesto a la intemperie entre los paneles solares. Los conductores deben ser certificados como cable fotovoltaico tipo PV Wire o USE-2, dotados de aislamiento termoestable de polietileno reticulado (XLPE) clasificado para 90°C en mojado y seco, resistente a los rayos ultravioleta (UV) y apto para operar sin canalización cuando se fija rígidamente a los rieles estructurales. Asimismo, cuando los cables discurren por canalizaciones expuestas a la radiación solar directa sobre techos de lámina metálica galvanizada, el Código NEC 310.15 exige sumar un incremento térmico adicional de hasta 17°C a la temperatura ambiente máxima del lugar (que en ciudades como San Miguel o Sonsonate alcanza 38°C a 40°C), resultando en temperaturas de diseño dentro de la tubería de hasta 57°C. Esto obliga a aplicar drásticos factores de corrección por temperatura (0.71 a 0.76) para evitar la degradación del aislamiento.\n\nEn lo relativo a la protección contra sobrecorriente, el Artículo 690.9 estipula que los fusibles de protección en corriente continua deben ser de tipo especial fotovoltaico (marcados como gPV según la norma IEC 60269-6 o clasificados bajo UL 248-19), con una tensión nominal mínima de 1,000 Vdc y capacidad interruptiva de corriente de falla superior a 20 kA. La regla operativa establece que se requieren fusibles por string cuando se conectan tres o más cadenas en paralelo a la misma entrada MPPT, ya que en caso de falla interna en un módulo, los dos o más strings restantes inyectarían su corriente de cortocircuito combinada hacia la cadena fallada, excediendo la capacidad de corriente inversa máxima del panel (Maximum Series Fuse Rating) y provocando un conato de incendio en el techo.\n\nPara salvaguardar la vida de los cuerpos de socorro y bomberos durante un siniestro, el NEC 690.12 exige un sistema de Desconexión Rápida (Rapid Shutdown). Al activarse el iniciador de emergencia o cortarse el suministro de la red pública, los conductores solares situados fuera del límite perimetral de 1 pie (30 centímetros) del arreglo deben reducir su voltaje a 30 V o menos en un tiempo máximo de 30 segundos, eliminando el riesgo de electrocución letal. Finalmente, el Artículo 690.11 del NEC exige que todo sistema que opere a más de 80 Vdc cuente con un interruptor detector de falla de arco eléctrico en corriente continua (AFCI) certificado bajo la norma UL 1699B. Este dispositivo digital monitorea continuamente el espectro de alta frecuencia de la corriente DC y es capaz de reconocer la firma acústica-eléctrica de un arco serie ocasionado por un conector MC4 flojo o mal engarzado, ordenando el cese de modulación y apagado del inversor en menos de 100 milisegundos.",
    "keyRegulatoryReferences": [
      "NEC / NFPA 70 Artículo 690: Solar Photovoltaic (PV) Systems.",
      "NEC Artículo 690.7: Maximum Voltage Calculation and Temperature Correction.",
      "NEC Artículo 690.8: Circuit Sizing and Current Calculations (1.56 x Isc).",
      "NEC Artículo 690.12: Rapid Shutdown of PV Systems on Buildings.",
      "Estándar UL 1699B: Standard for Photovoltaic (PV) DC Arc-Fault Circuit Protection."
    ],
    "solvedCalculations": [
      {
        "id": "calc-2-1-ampacidad-fusible-gpv",
        "title": "Dimensionamiento de Corriente Máxima y Fusible de Protección DC gPV según NEC 690.8 y 690.9",
        "unitId": "unit-2-nec-690-protecciones-dc",
        "problemStatement": "Un arreglo fotovoltaico en San Salvador consta de 3 strings conectados en paralelo a una caja combinadora (combiner box). Cada string está formado por módulos monocristalinos con I_sc = 13.92 A e I_mp = 13.10 A. El fabricante especifica un valor de fusible máximo en serie (Series Fuse Rating) de 25 A. Calcule la corriente máxima del circuito de cada string, la ampacidad mínima requerida para el fusible de protección y determine el calibre comercial del fusible gPV a 1,000 Vdc conforme a NEC 690.8 y 690.9.",
        "designParameters": {
          "Corriente de cortocircuito STC (I_sc)": "13.92 A",
          "Corriente de máxima potencia STC (I_mp)": "13.10 A",
          "Fusible máximo especificado por fabricante": "25 A",
          "Número de strings en paralelo": "3 strings"
        },
        "engineeringFormulas": [
          "I_max_string = 1.25 * I_sc",
          "I_fusible_min = 1.25 * I_max_string = 1.5625 * I_sc",
          "I_fusible_min <= Fusible_comercial <= Series_Fuse_Rating"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la corriente máxima del string según NEC 690.8(A)(1):\nI_max_string = 1.25 * 13.92 A = 17.40 A.\n\nPaso 2: Cálculo de la ampacidad mínima continua requerida para el dispositivo de protección contra sobrecorriente (OCPD) según NEC 690.8(B)(1):\nI_fusible_min = 1.25 * I_max_string = 1.25 * 17.40 A = 21.75 A.\nAlternativamente: I_fusible_min = 1.5625 * 13.92 A = 21.75 A.\n\nPaso 3: Selección de fusible comercial fotovoltaico clase gPV:\nLos valores comerciales estandarizados de fusibles gPV son 15 A, 20 A, 25 A y 30 A.\nEl fusible debe cumplir: 21.75 A <= I_n <= 25 A.\nPor consiguiente, se selecciona un fusible gPV de 25 A / 1,000 Vdc.",
        "numericalResult": "I_max = 17.40 A; Fusible seleccionado = 25 A gPV a 1,000 Vdc.",
        "practicalEngineeringJudgment": "Al existir 3 strings en paralelo, la falla de uno de ellos expondría al circuito a 2 * 13.92 A = 27.84 A de corriente inversa. El fusible de 25 A garantiza la interrupción rápida de la corriente inversa antes de que se dañen las celdas o conductores, cumpliendo exactamente con la especificación de placa del módulo."
      },
      {
        "id": "calc-2-2-tension-voc-max-temperatura",
        "title": "Cálculo de Tensión Máxima de Circuito Abierto Corregida por Temperatura Mínima en Zonas Altas",
        "unitId": "unit-2-nec-690-protecciones-dc",
        "problemStatement": "Se proyecta una instalación solar en la zona alta de Los Planes de Renderos, donde la temperatura mínima histórica de diseño es T_min = 8°C. Se utilizarán módulos fotovoltaicos de 550 Wp con V_oc(STC) = 49.8 V a 25°C y coeficiente de temperatura beta_Voc = -0.27%/°C. Se planea conectar un string de 12 paneles en serie a un inversor residencial certificado para un máximo absoluto de 600 Vdc. Calcule la tensión máxima corregida del string y dictamine si cumple el límite de 600 V del NEC 690.7(C).",
        "designParameters": {
          "Tensión de circuito abierto STC (V_oc)": "49.8 V",
          "Coeficiente de temperatura de Voc": "-0.27%/°C = -0.0027 /°C",
          "Temperatura mínima de diseño": "8°C",
          "Número de paneles en serie": "12 paneles",
          "Tensión máxima del inversor/residencial": "600 Vdc"
        },
        "engineeringFormulas": [
          "Delta_T = T_min - 25°C",
          "Factor_correccion (K_T) = 1 + [beta_Voc * Delta_T]",
          "V_oc_modulo_max = V_oc_STC * K_T",
          "V_string_max = N_paneles * V_oc_modulo_max"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo del diferencial de temperatura respecto a STC:\nDelta_T = 8°C - 25°C = -17°C.\n\nPaso 2: Cálculo del factor multiplicador de corrección térmica de tensión:\nK_T = 1 + [(-0.0027 /°C) * (-17°C)] = 1 + 0.0459 = 1.0459.\n\nPaso 3: Cálculo de la tensión de circuito abierto máxima por módulo:\nV_oc_modulo_max = 49.8 V * 1.0459 = 52.086 V.\n\nPaso 4: Cálculo de la tensión máxima del string de 12 módulos:\nV_string_max = 12 * 52.086 V = 625.03 V.\n\nPaso 5: Evaluación frente al límite residencial del NEC 690.7(C):\n625.03 V > 600.0 V (NO CUMPLE; excede el límite en 25.03 V).\n\nPaso 6: Recálculo del número máximo de paneles admisibles:\nN_max = floor(600 V / 52.086 V) = floor(11.51) = 11 módulos.\nTensión con 11 módulos: 11 * 52.086 V = 572.95 V <= 600 V.",
        "numericalResult": "Con 12 paneles V_string_max = 625.03 V (RECHAZADO). Configuración corregida: 11 paneles (572.95 V).",
        "practicalEngineeringJudgment": "Conectar 12 paneles dañaría irreversiblemente la etapa de potencia de entrada del inversor durante las madrugadas frías de invierno y violaría el límite de 600 V para edificaciones residenciales. La memoria técnica debe limitar la cadena a 11 módulos en serie."
      },
      {
        "id": "calc-2-3-correccion-termica-cable-techo",
        "title": "Dimensionamiento de Conductor PV Wire con Factores de Corrección Térmica sobre Techo Metálico",
        "unitId": "unit-2-nec-690-protecciones-dc",
        "problemStatement": "En una nave industrial en San Miguel, los conductores de un circuito fotovoltaico transportan una corriente continua máxima I_max = 17.5 A. Los cables discurren por una tubería conduit metálica EMT fijada a 20 mm (0.75 pulgadas) sobre una cubierta de lámina de zinc. La temperatura ambiente máxima en San Miguel es de 38°C. Utilizando cable de cobre certificado PV Wire con aislamiento de 90°C, calcule la temperatura efectiva de diseño, determine el factor de corrección por temperatura y verifique si el calibre 12 AWG o 10 AWG es el adecuado según las tablas 310.15 y 310.16 del NEC.",
        "designParameters": {
          "Corriente máxima calculada (I_max)": "17.5 A",
          "Temperatura ambiente máxima": "38°C",
          "Elevación sobre techo": "20 mm (suma térmica NEC = +17°C)",
          "Tipo de conductor": "Cobre PV Wire, clasificación 90°C",
          "Ampacidad de tabla 310.16 a 90°C": "12 AWG = 30 A; 10 AWG = 40 A"
        },
        "engineeringFormulas": [
          "T_diseno = T_ambiente + Delta_T_techo",
          "I_corregida = I_tabla * Factor_temperatura (F_t)",
          "Condicion: I_corregida >= I_max"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la temperatura de operación efectiva dentro de la canalización:\nT_diseno = 38°C + 17°C (ajuste por techo según NEC 310.15(B)(3)(c)) = 55°C.\n\nPaso 2: Determinación del factor de corrección por temperatura (F_t) de la Tabla 310.15(B)(2)(a) para conductores de 90°C en el rango de 51°C a 55°C:\nF_t = 0.76.\n\nPaso 3: Evaluación del calibre 12 AWG:\nAmpacidad base en tabla = 30 A.\nAmpacidad corregida = 30 A * 0.76 = 22.80 A.\nCondición de ampacidad continua (1.25 * I_max): 1.25 * 17.5 A = 21.875 A.\nAunque 22.80 A >= 21.875 A numéricamente, el margen de reserva es de apenas 0.92 A (4.0%).\n\nPaso 4: Evaluación del calibre 10 AWG:\nAmpacidad base en tabla = 40 A.\nAmpacidad corregida = 40 A * 0.76 = 30.40 A.\nMargen de reserva: 30.40 A - 21.875 A = 8.525 A (seguridad térmica holgada).",
        "numericalResult": "Se selecciona conductor de cobre 10 AWG PV Wire (Ampacidad corregida = 30.40 A).",
        "practicalEngineeringJudgment": "Bajo el riguroso clima cálido de San Miguel y la proximidad al techo de lámina, el calibre 10 AWG previene el envejecimiento prematuro del polietileno reticulado y minimiza sustancialmente las pérdidas Joule en corriente continua."
      },
      {
        "id": "calc-2-4-caida-tension-dc",
        "title": "Cálculo de Caída de Tensión Porcentual en Circuito DC de Larga Distancia",
        "unitId": "unit-2-nec-690-protecciones-dc",
        "problemStatement": "Un string solar opera a una tensión de máxima potencia V_mp = 415 Vdc y una corriente I_mp = 13.12 A. La distancia unidireccional desde los módulos en el techo hasta el inversor en el cuarto eléctrico es de 42 metros (longitud total del bucle de ida y vuelta = 84 m). Se evalúa el uso de cable de cobre calibre 10 AWG (resistencia según Tabla 8 del Capítulo 9 del NEC: R = 3.99 ohms/km a 75°C). Calcule la caída de tensión en voltios, el porcentaje de caída de tensión y verifique si cumple la recomendación de diseño del NEC de Delta_V <= 1.5% a 2.0%.",
        "designParameters": {
          "Tensión de operación del string (V_mp)": "415 Vdc",
          "Corriente de operación (I_mp)": "13.12 A",
          "Longitud unidireccional (L)": "42 m (Bucle 2L = 84 m)",
          "Resistencia conductor 10 AWG a 75°C": "3.99 ohms/km = 0.00399 ohms/m"
        },
        "engineeringFormulas": [
          "R_total (ohms) = 2 * L * R_unitario",
          "Delta_V (V) = I_mp * R_total",
          "%Delta_V = (Delta_V / V_mp) * 100%"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la resistencia óhmica total del bucle de conductores:\nR_total = 2 * 42 m * 0.00399 ohms/m = 84 m * 0.00399 ohms/m = 0.33516 ohms.\n\nPaso 2: Cálculo de la caída de tensión en voltios:\nDelta_V = 13.12 A * 0.33516 ohms = 4.397 V.\n\nPaso 3: Cálculo de la caída de tensión porcentual:\n%Delta_V = (4.397 V / 415 V) * 100% = 1.06%.\n\nPaso 4: Comparación frente al criterio de buena práctica de ingeniería fotovoltaica:\n1.06% <= 1.50% (Cumple de manera sobresaliente).",
        "numericalResult": "Delta_V = 4.40 V (%Delta_V = 1.06%, plenamente admisible).",
        "practicalEngineeringJudgment": "Una caída de tensión de apenas 1.06% asegura que la mayor parte de la energía recolectada llegue al inversor sin disiparse como calor en las canalizaciones, manteniendo la eficiencia global del sistema por encima de los requerimientos de la distribuidora."
      },
      {
        "id": "calc-2-5-seccionador-dc-maniobra",
        "title": "Dimensionamiento de Interruptor Seccionador de Corriente Continua bajo Carga (NEC 690.13)",
        "unitId": "unit-2-nec-690-protecciones-dc",
        "problemStatement": "Un inversor comercial recibe 4 strings en paralelo en una sola entrada MPPT. Cada string tiene I_sc = 14.1 A y el string más largo tiene una tensión máxima corregida Voc_max = 785 Vdc. Diseñe el interruptor de desconexión general en corriente continua (DC Disconnect) que se instalará adyacente al inversor, especificando la tensión nominal mínima, la corriente nominal bajo carga y la categoría de empleo según el estándar IEC 60947-3 / UL 98B.",
        "designParameters": {
          "Número de strings en paralelo": "4",
          "Corriente de cortocircuito por string": "14.1 A",
          "Tensión máxima corregida (Voc_max)": "785 Vdc",
          "Factor continuo normativo NEC 690.8": "1.25 * 1.25 = 1.5625"
        },
        "engineeringFormulas": [
          "I_sc_total = N_strings * I_sc_string",
          "I_disconnect_min = 1.25 * (1.25 * I_sc_total) = 1.5625 * I_sc_total",
          "V_disconnect_nom >= Voc_max"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la corriente de cortocircuito total de los 4 strings:\nI_sc_total = 4 * 14.1 A = 56.40 A.\n\nPaso 2: Cálculo de la corriente nominal mínima de corte para servicio continuo:\nI_disconnect_min = 1.5625 * 56.40 A = 88.125 A.\n\nPaso 3: Verificación de la tensión nominal de aislamiento:\nV_disconnect_nom >= 785 Vdc. El estándar industrial inmediato es 1,000 Vdc.\n\nPaso 4: Selección del equipo comercial y categoría de servicio:\nLos seccionadores rotativos en DC estandarizados se fabrican en 63 A, 100 A, 125 A y 160 A a 1,000 Vdc.\nSe selecciona un interruptor seccionador de 100 A / 1,000 Vdc, tetrapolar con polos en serie para extinción de arco, categoría de empleo DC-PV2 para corte bajo carga inductiva/capacitiva.",
        "numericalResult": "Interruptor seccionador rotativo DC: 100 A, 1,000 Vdc, categoría DC-PV2 con 4 polos.",
        "practicalEngineeringJudgment": "El seccionador seleccionado es capaz de interrumpir arcos en corriente continua a 785 V y 88 A de manera segura sin riesgo de soldadura de contactos ni explosión por ionización del aire, cumpliendo cabalmente con el NEC 690.13."
      }
    ]
  },
  {
    "id": "unit-3-electricistas-siget-categorias",
    "unitNumber": 3,
    "title": "Acreditación de Electricistas SIGET y Categorías 1ª a 4ª",
    "shortDescription": "Competencias técnicas y alcances de potencia según el Reglamento de Acreditación de Electricistas de la SIGET, responsabilidades civiles y penales, memorias de cálculo, planos visados y regla del 120% en centros de carga (NEC 705.12).",
    "normativeCategory": "electricistas-siget",
    "substantiveTheory": "El ejercicio de la profesión eléctrica en la República de El Salvador está estrictamente tutelado por el Estado a través de la Superintendencia General de Electricidad y Telecomunicaciones (SIGET), en ejercicio de las potestades conferidas por la Ley General de Electricidad y el Reglamento para la Autorización y Registro de Instaladores y Técnicos Electricistas. Esta regulación tiene como propósito cardinal tutelar la vida, integridad física de las personas y la seguridad de los bienes inmuebles frente a los riesgos inherentes de choque eléctrico, arcos eléctricos e incendios provocados por instalaciones defectuosas, así como garantizar la estabilidad operativa de las redes de distribución nacional.\n\nEl marco regulatorio de la SIGET clasifica a los técnicos y profesionales autorizados en cuatro categorías bien diferenciadas por su formación académica, experiencia técnica y alcance de potencia instalada:\n1. Cuarta Categoría: Esta credencial habilita a instaladores prácticos para proyectar, construir, reparar y ampliar instalaciones eléctricas residenciales básicas de carácter estrictamente monofásico en baja tensión (120/240 V), con un límite absoluto de potencia instalada de hasta 5 kW. En el ámbito de la energía solar fotovoltaica, el electricista de Cuarta Categoría únicamente puede intervenir en sistemas residenciales muy pequeños que operen con microinversores o inversores monofásicos cuya potencia combinada en corriente alterna no exceda los 5.0 kW AC. Tiene prohibido intervenir en redes trifásicas o instalaciones comerciales.\n2. Tercera Categoría: Autoriza a técnicos electricistas calificados para diseñar y ejecutar instalaciones eléctricas en baja tensión de hasta 25 kVA de potencia instalada. Esta categoría abarca suministros residenciales amplios, pequeñas naves comerciales, comercios medianos y talleres que cuenten con acometidas monofásicas o trifásicas en baja tensión. Representa el núcleo operativo de instaladores solares para techos residenciales de alto consumo y microempresas en El Salvador.\n3. Segunda Categoría: Comprende a técnicos egresados de carreras de educación técnica superior universitaria (como técnicos electricistas graduados de ITCA-FEPADE, Universidad Don Bosco, etc.). Esta credencial los faculta para proyectar y ejecutar instalaciones eléctricas en baja tensión de hasta 150 kVA y el montaje y conexionado de bancos de transformación monofásicos o trifásicos comerciales e industriales hasta dicha capacidad. En generación distribuida, habilita la construcción de centrales fotovoltaicas comerciales e industriales de mediano porte interconectadas al secundario de transformadores dedicados.\n4. Primera Categoría: Es la máxima categoría profesional reconocida en el país y está reservada con exclusividad a profesionales graduados con el título universitario de Ingeniero Electricista, debidamente incorporados y colegiados ante el Consejo de Vigilancia de la Profesión de las Ingenierías y Arquitecturas (Copiapia/ASIA) y autorizados formalmente por la SIGET. Los Ingenieros Electricistas de Primera Categoría no tienen limitación alguna de potencia ni de tensión, siendo los únicos legalmente facultados para diseñar, visar y supervisar subestaciones de potencia, líneas de transmisión en media y alta tensión, y parques solares comerciales a gran escala (Utility Scale).\n\nPara todo proyecto de generación distribuida que se presente ante las distribuidoras eléctricas (CAESS, DELSUR), la normativa exige la presentación de una Memoria Técnica de Cálculo visada y firmada por el profesional de la categoría correspondiente. Esta memoria debe contener el diagrama unifilar detallado, memoria de cálculo de cortocircuito en el punto de interconexión, dimensionamiento analítico de protecciones y conductores, cálculo de caída de tensión en DC y AC, estudio de carga existente y propuesta de balance de fases. La firma y sello del electricista estampada en estos planos implica una responsabilidad civil, administrativa y penal directa e indelegable. Firmar planos de proyectos que no han sido diseñados o supervisados directamente por el titular (\"firma de favor o por encargo\") constituye una falta grave que conlleva la revocación definitiva del carnet de la SIGET y procesos judiciales por negligencia ante cualquier siniestro.\n\nUn aspecto técnico crucial en las memorias de cálculo de interconexión es la aplicación de la Regla del 120% en centros de carga (NEC 705.12(B)(2)). Cuando un inversor fotovoltaico inyecta corriente alterna en el extremo opuesto del interruptor principal de acometida de un tablero de distribución existente, la barra colectora recibe corriente desde dos extremos opuestos. Para evitar que la densidad de corriente exceda la capacidad térmica de la barra de cobre o aluminio, la suma de la corriente nominal del interruptor principal de acometida más la corriente del interruptor termomagnético de la fuente solar no debe exceder el 120% de la ampacidad nominal de la barra colectora (I_main + I_solar <= 1.20 * I_bus). Si esta condición no se satisface, el proyectista acreditado debe reducir el tamaño del interruptor principal (si la demanda de carga lo permite), reemplazar el tablero por uno de mayor capacidad de barraje, o recurrir a una interconexión en el lado de suministro (Supply-Side Connection según NEC 705.11).",
    "keyRegulatoryReferences": [
      "Reglamento para la Autorización y Registro de Instaladores y Técnicos Electricistas (SIGET).",
      "Ley General de Electricidad y su Reglamento de Aplicación (Decreto Ejecutivo N° 70).",
      "Código NEC Artículo 705.12: Point of Connection (Regla del 120% en barraje de tableros).",
      "Procedimiento de Aprobación de Planos Eléctricos y Visado de Memorias Técnicas (AES El Salvador / DELSUR).",
      "Ley de Ejercicio Profesional de las Ingenierías y Arquitecturas de El Salvador."
    ],
    "solvedCalculations": [
      {
        "id": "calc-3-1-categoria-siget-proyecto",
        "title": "Determinación de la Categoría SIGET Mínima Requerida según Potencia y Nivel de Tensión",
        "unitId": "unit-3-electricistas-siget-categorias",
        "problemStatement": "Un hotel boutique en la Ruta de las Flores (Juayúa, área de servicio de AES CLESA) tiene una acometida trifásica en baja tensión a 208/120 V con transformador propio de 25 kVA. Desea instalar un sistema fotovoltaico con un inversor trifásico de 18 kW / 22.5 kVA. Se presentan tres técnicos con carnets de 4ª, 3ª y 2ª Categoría de la SIGET. Determine analíticamente cuál es la categoría mínima legalmente autorizada para visar la memoria técnica y ejecutar la obra.",
        "designParameters": {
          "Potencia de la central solar": "22.5 kVA",
          "Tipo de suministro": "Trifásico 208/120 V (Baja Tensión)",
          "Capacidad de transformador existente": "25 kVA",
          "Límites regulatorios SIGET": "4ª Cat: <= 5 kW monofásico; 3ª Cat: <= 25 kVA baja tensión; 2ª Cat: <= 150 kVA"
        },
        "engineeringFormulas": [
          "Condicion_4a: S <= 5 kW AND Sistema == Monofasico",
          "Condicion_3a: S <= 25 kVA AND Tension == Baja_Tension",
          "Condicion_2a: S <= 150 kVA"
        ],
        "stepByStepSubstitution": "Paso 1: Evaluación de Cuarta Categoría:\nEl proyecto es trifásico y de 22.5 kVA. Como 22.5 kVA > 5.0 kW y no es monofásico, el electricista de 4ª Categoría carece totalmente de facultades legales.\n\nPaso 2: Evaluación de Tercera Categoría:\nEl suministro es en baja tensión y la potencia total es de 22.5 kVA. Como 22.5 kVA <= 25.0 kVA límite, el electricista de 3ª Categoría cumple con todos los requisitos exigidos por el Reglamento de la SIGET.\n\nPaso 3: Evaluación de Segunda y Primera Categoría:\nPoseen facultades suficientes al tener techos de 150 kVA e ilimitado respectivamente, pero no son la categoría mínima requerida.\n\nPaso 4: Conclusión de selección:\nLa categoría mínima legal exigida es Electricista de Tercera Categoría.",
        "numericalResult": "Categoría mínima legal: Electricista de Tercera Categoría (22.5 kVA <= 25.0 kVA).",
        "practicalEngineeringJudgment": "Contratar a un técnico de Tercera Categoría optimiza los costos profesionales del proyecto manteniendo pleno apego a la ley, garantizando que CLESA admitirá sin observaciones de competencia el trámite de interconexión."
      },
      {
        "id": "calc-3-2-regla-120-barraje",
        "title": "Cálculo de Capacidad de Barra y Aplicación de la Regla del 120% para Interconexión Solar (NEC 705.12)",
        "unitId": "unit-3-electricistas-siget-categorias",
        "problemStatement": "En una residencia en Santa Tecla, el centro de carga principal tiene una barra colectora con ampacidad nominal I_bus = 125 A y un disyuntor principal de acometida I_main = 100 A a 240 V. El propietario desea instalar un inversor solar de 7.6 kW AC continuo a 240 V. Calcule la corriente nominal de salida del inversor, determine el disyuntor de protección requerido (al 125%), evalúe el cumplimiento de la Regla del 120% del NEC 705.12(B)(2) y defina la ubicación física del disyuntor en el tablero.",
        "designParameters": {
          "Ampacidad nominal de la barra (I_bus)": "125 A",
          "Disyuntor principal de acometida (I_main)": "100 A",
          "Potencia continua del inversor": "7,600 W a 240 V",
          "Factor continuo normativo": "125% (1.25)"
        },
        "engineeringFormulas": [
          "I_ac_inversor = P_inv / V_linea",
          "I_breaker_solar = I_ac_inversor * 1.25",
          "Criterio_120: I_main + I_breaker_solar <= 1.20 * I_bus"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la corriente nominal de salida en corriente alterna del inversor:\nI_ac_inversor = 7,600 W / 240 V = 31.67 A.\n\nPaso 2: Dimensionamiento del interruptor termomagnético de protección solar continuo:\nI_breaker_calculado = 31.67 A * 1.25 = 39.58 A.\nSe selecciona el valor comercial estandarizado superior: Disyuntor bipolar de 40 A.\n\nPaso 3: Cálculo de la capacidad admisible del barraje bajo la Regla del 120%:\nCapacidad_maxima_permitida = 1.20 * I_bus = 1.20 * 125 A = 150.0 A.\n\nPaso 4: Suma de fuentes de corriente en la barra colectora:\nSuma_corrientes = I_main + I_breaker_solar = 100 A + 40 A = 140.0 A.\n\nPaso 5: Verificación de la condición de seguridad:\n140.0 A <= 150.0 A. Cumple satisfactoriamente.",
        "numericalResult": "Disyuntor solar = 40 A; Suma de barraje = 140 A <= 150 A permitido (CUMPLE).",
        "practicalEngineeringJudgment": "El sistema cumple con el NEC 705.12(B)(2) sin necesidad de modificar el interruptor principal de 100 A ni reemplazar el centro de carga. El disyuntor de 40 A debe ubicarse obligatoriamente en el extremo opuesto del barraje respecto al interruptor principal con una placa indeleble de advertencia: \"ATENCIÓN: FUENTE DE GENERACIÓN FOTOVOLTAICA. NO REUBICAR ESTE DISYUNTOR\"."
      },
      {
        "id": "calc-3-3-aumento-capacidad-acometida",
        "title": "Memoria de Cálculo para Aumento de Capacidad de Acometida Eléctrica ante AES CAESS",
        "unitId": "unit-3-electricistas-siget-categorias",
        "problemStatement": "Un taller metalmecánico en Ilopango cuenta con una potencia contratada trifásica de 25 kVA a 240/120 V con conductor de acometida calibre 4 AWG de cobre. Proyecta instalar un sistema solar de 35 kVA con inyección total para compensar el consumo diurno de soldadoras. Conforme a la NTCOGD Art. 8, la generación no puede superar la potencia contratada. Calcule la nueva capacidad de potencia contratada que debe solicitarse a CAESS, determine la nueva corriente nominal trifásica y dimensione el calibre del conductor de cobre THHN para la nueva acometida con factor continuo de 1.25.",
        "designParameters": {
          "Potencia solar a instalar": "35.0 kVA",
          "Tensión del sistema": "240 V trifásico delta abierto/estrella",
          "Factor de servicio continuo": "1.25",
          "Aislamiento del conductor": "Cobre THHN clasificado a 75°C en terminales"
        },
        "engineeringFormulas": [
          "S_nueva_contratada >= S_solar = 35.0 kVA (se solicita 40.0 kVA comercial)",
          "I_nominal = S_nueva / (sqrt(3) * V_linea)",
          "I_diseno = I_nominal * 1.25",
          "Seleccionar conductor en Tabla NEC 310.16 (75°C)"
        ],
        "stepByStepSubstitution": "Paso 1: Definición de la potencia contratada a tramitar ante CAESS:\nPara superar holgadamente los 35 kVA del sistema solar y admitir futuros crecimientos de carga, se solicita una ampliación de potencia contratada a 40.0 kVA.\n\nPaso 2: Cálculo de la corriente nominal trifásica a 240 V:\nI_nominal = (40,000 VA) / (sqrt(3) * 240 V) = 40,000 / (1.732 * 240) = 40,000 / 415.69 = 96.22 A.\n\nPaso 3: Cálculo de la corriente de diseño continua para la acometida:\nI_diseno = 96.22 A * 1.25 = 120.28 A.\n\nPaso 4: Selección del conductor de acometida según Tabla NEC 310.16 a 75°C:\nConductor 1 AWG Cu tiene una ampacidad de 130 A a 75°C.\nComo 130 A >= 120.28 A, se selecciona conductor de cobre calibre 1 AWG THHN/THWN-2 en canalización metálica rígida (RMC) de 1 1/2 pulgadas.",
        "numericalResult": "Solicitud de ampliación a 40.0 kVA; Conductor de acometida: Cobre calibre 1 AWG THHN (130 A).",
        "practicalEngineeringJudgment": "El trámite ante CAESS requerirá el cambio del medidor y la firma de un Ingeniero Electricista de 1ª Categoría o Técnico de 2ª Categoría, dado que la nueva potencia contratada de 40 kVA supera el umbral de 25 kVA de la Tercera Categoría."
      },
      {
        "id": "calc-3-4-verificacion-limite-segunda-categoria",
        "title": "Verificación de Límites de Potencia y Nivel de Tensión para Electricista de 2ª Categoría en Subestación Comercial",
        "unitId": "unit-3-electricistas-siget-categorias",
        "problemStatement": "Un supermercado en Sonsonate contrata a un Técnico Electricista con carnet de Segunda Categoría vigente de la SIGET para dirigir el montaje de una planta solar de 100 kW AC. La planta se conectará en baja tensión al tablero general secundario de un transformador trifásico tipo pedestal (pad-mounted) de 112.5 kVA con primario en 13.2 kV y secundario en 220/127 V. Evalúe legal y técnicamente si el técnico de 2ª Categoría está facultado para firmar la memoria técnica y ejecutar la instalación.",
        "designParameters": {
          "Potencia del sistema solar": "100 kW AC (aprox. 105 kVA a FP=0.95)",
          "Capacidad del transformador": "112.5 kVA",
          "Nivel de tensión de conexión": "Secundario en baja tensión (220/127 V)",
          "Alcance normativo de 2ª Categoría": "Hasta 150 kVA en baja tensión y bancos de transformación"
        },
        "engineeringFormulas": [
          "Evaluacion_potencia: S_sistema <= 150 kVA",
          "Evaluacion_trafo: S_transformador <= 150 kVA",
          "Evaluacion_tension: Punto de interconexión en baja tensión"
        ],
        "stepByStepSubstitution": "Paso 1: Verificación de la potencia nominal del generador:\n105 kVA <= 150 kVA (Cumple el límite de potencia de la 2ª Categoría).\n\nPaso 2: Verificación de la capacidad del transformador asociado:\n112.5 kVA <= 150 kVA (Cumple el límite de bancos de transformación de la 2ª Categoría).\n\nPaso 3: Verificación del punto de conexión y nivel de tensión:\nLa interconexión se efectúa en el secundario a 220/127 V (baja tensión), sin que el técnico deba realizar maniobras o intervenir directamente la celda de media tensión a 13.2 kV.\n\nPaso 4: Dictamen reglamentario:\nEl Técnico de Segunda Categoría cumple cabalmente con todos los requisitos del Reglamento de Acreditación de Electricistas de la SIGET para esta envergadura.",
        "numericalResult": "AUTORIZADO: El Técnico de 2ª Categoría está legalmente facultado para visar y ejecutar el proyecto (112.5 kVA <= 150 kVA).",
        "practicalEngineeringJudgment": "No es mandatorio contratar a un Ingeniero de 1ª Categoría para la firma en baja tensión al ser menor a 150 kVA. No obstante, si la distribuidora DELSUR exige la calibración de relés de sobrecorriente en el lado de media tensión (13.2 kV), dicha sección específica sí deberá ser avalada por un Ingeniero de Primera Categoría."
      },
      {
        "id": "calc-3-5-sobrecarga-neutro-desbalance",
        "title": "Cálculo de Corriente de Neutro ante Inyección Monofásica Desbalanceada en Sistema Tetrafilar",
        "unitId": "unit-3-electricistas-siget-categorias",
        "problemStatement": "En una panadería con acometida trifásica tetrafilar 208Y/120 V, un técnico instaló erróneamente un inversor monofásico de 6.0 kW inyectando exclusivamente entre la Fase A y el Neutro a 120 V (corriente inyectada I_A = 50.0 A en ángulo de 0°). Las cargas de consumo de la panadería en ese momento son: Fase B = 20.0 A a 120 V (ángulo -120°) y Fase C = 15.0 A a 120 V (ángulo +120°). Calcule la corriente vectorial resultante que circulará por el conductor neutro y demuestre por qué la inyección monofásica no compensada puede sobrecalentar la barra de neutro.",
        "designParameters": {
          "Corriente generada en Fase A": "50.0 A a 0° (inyección)",
          "Corriente de carga en Fase B": "20.0 A a -120° = 20 * (cos(-120°) + j sin(-120°))",
          "Corriente de carga en Fase C": "15.0 A a +120° = 15 * (cos(120°) + j sin(120°))"
        },
        "engineeringFormulas": [
          "I_neutro = -(I_A + I_B + I_C)",
          "I_A = 50.0 + j0",
          "I_B = 20 * (-0.5 - j0.866) = -10.0 - j17.32",
          "I_C = 15 * (-0.5 + j0.866) = -7.5 + j12.99"
        ],
        "stepByStepSubstitution": "Paso 1: Descomposición rectangular de las corrientes de fase:\nI_A = 50.0 + j0.0 A.\nI_B = 20.0 * (-0.5) + j 20.0 * (-0.866) = -10.0 - j17.32 A.\nI_C = 15.0 * (-0.5) + j 15.0 * (+0.866) = -7.5 + j12.99 A.\n\nPaso 2: Suma vectorial fasorial de las corrientes:\nI_total_real = 50.0 - 10.0 - 7.5 = 32.50 A.\nI_total_imag = 0.0 - 17.32 + 12.99 = -4.33 A.\n\nPaso 3: Cálculo de la magnitud de la corriente en el conductor neutro:\n|I_neutro| = sqrt((32.50)^2 + (-4.33)^2) = sqrt(1056.25 + 18.75) = sqrt(1075.0) = 32.79 A.\n\nPaso 4: Análisis comparativo:\nEn condiciones de consumo puro sin inyección monofásica (I_A_consumo = 18 A equilibrado), la corriente de neutro no superaría los 5 A. La inyección masiva en una sola fase eleva la corriente de neutro a casi 33 A continuos.",
        "numericalResult": "|I_neutro| = 32.79 A de corriente continua por el neutro.",
        "practicalEngineeringJudgment": "Este cálculo demuestra una grave deficiencia de diseño. Inyectar 6 kW en una sola fase de una acometida trifásica provoca corrientes elevadas en el neutro que causan caídas de tensión desbalanceadas y pueden disparar protecciones o quemar bornes no dimensionados para corriente continua no cancelada. Se debe reemplazar por un inversor trifásico equilibrado o tres microinversores de 2 kW distribuidos equitativamente entre las fases A, B y C."
      }
    ]
  },
  {
    "id": "unit-4-offgrid-almacenamiento-baterias",
    "unitNumber": 4,
    "title": "Sistemas Fotovoltaicos Aislados (Off-Grid) y Almacenamiento con Baterías",
    "shortDescription": "Dimensionamiento integral de bancos de baterías de litio LiFePO4 vs plomo-ácido, controladores MPPT, autonomía para días nublados y cálculo de conductores en corriente continua de alta corriente.",
    "normativeCategory": "normativa-gd",
    "substantiveTheory": "Los sistemas solares fotovoltaicos autónomos o aislados de la red pública (comúnmente denominados Off-Grid o Stand-Alone Systems según el Artículo 710 del Código Eléctrico Nacional) constituyen una solución tecnológica indispensable para la electrificación rural en zonas remotas de El Salvador donde la extensión de la red de distribución convencional de AES o DELSUR resulta técnica o económicamente inviable. Entre estas aplicaciones destacan las comunidades en la cordillera de Nahuaterique y Morazán, las islas del Golfo de Fonseca (como Meanguera del Golfo), caseríos en el norte de Chalatenango, repetidoras de radiocomunicaciones en cumbres montañosas y estaciones de bombeo de agua para riego agrícola y consumo ganadero. A diferencia de los sistemas interactivos con la red donde el operador eléctrico actúa como un acumulador infinito de energía, en una instalación aislada la fiabilidad del suministro depende por entero del correcto equilibrio entre la captación solar del generador fotovoltaico y la capacidad de almacenamiento del banco de baterías.\n\nEl núcleo analítico de un sistema aislado reside en el Sistema de Almacenamiento de Energía por Baterías (BESS, regulado por el NEC Artículo 706 y las normas de seguridad UL 1973 y UL 9540). En la actualidad, el diseño de ingeniería exige evaluar con rigurosidad las diferencias electroquímicas entre las baterías tradicionales de plomo-ácido (inundadas, AGM y Gel) y las tecnologías emergentes de Litio Ferro-Fosfato (LiFePO4 o LFP):\n1. Plomo-Ácido (AGM / Gel): Presentan un costo de adquisición inicial inferior, pero están limitadas a una Profundidad de Descarga máxima recomendada (DoD) de solo el 50% de su capacidad nominal. Si se descargan rutinariamente por debajo de este umbral, se produce una sulfatación prematura irreversible de las placas de plomo. Su vida útil oscila entre 800 y 1,200 ciclos al 50% de DoD, lo que equivale a apenas 2.5 a 3.5 años de operación continua en climas cálidos salvadoreños, ya que por cada 10°C de incremento en la temperatura ambiente por encima de los 25°C, la velocidad de degradación electroquímica se duplica (Ley de Arrhenius). Su eficiencia coulómbica es relativamente baja (80% a 85%) y exigen regímenes lentos de recarga (máximo 0.1C a 0.2C).\n2. Litio Ferro-Fosfato (LiFePO4): Es la química de litio más segura y térmicamente estable, resistente al fenómeno de embalamiento térmico (thermal runaway). Permite profundidades de descarga rutinarias del 80% al 90% sin degradación apreciable de su estructura cristalina, alcanzando vidas útiles de 4,000 a más de 6,000 ciclos completos al 80% de DoD (equivalente a 12 a 15 años de servicio ininterrumpido). Presentan una eficiencia energética de ciclo completo superior al 95-98%, toleran estados parciales de carga (PSOC) sin sufrir sulfatación y admiten corrientes de carga y descarga aceleradas (tasas de 0.5C a 1.0C continuas). Cuentan con un sistema electrónico de gestión integral (BMS - Battery Management System) que supervisa la tensión y temperatura de cada celda individualmente, ejecutando el balanceo de carga pasivo o activo.\n\nLa metodología de dimensionamiento del banco de baterías inicia con la cuantificación del consumo energético diario en Vatios-hora (Wh/día), clasificando las cargas en críticas (refrigeración de medicamentos o alimentos, iluminación LED, telecomunicaciones) y no críticas. Se debe seleccionar el número de días de autonomía (N_dias), parámetro que representa la cantidad de jornadas continuas de lluvia o cielo totalmente cubierto durante las cuales el banco de baterías debe suministrar energía sin recibir recarga solar. En El Salvador, con base en los registros pluviométricos del Ministerio de Medio Ambiente y Recursos Naturales (MARN) para temporales tropicales y ondas del este entre junio y octubre, se adoptan típicamente entre 2 y 3 días de autonomía. La capacidad requerida en Amperios-hora (Ah) se calcula dividiendo la energía total de reserva entre la tensión nominal del banco (V_dc, recomendándose 48 V para minimizar la corriente de barraje), la profundidad de descarga (DoD) y la eficiencia del inversor de onda senoidal pura (eta_inv = 0.90 - 0.93): C_Ah = (E_diaria_Wh * N_dias) / (V_banco * DoD * eta_inv).\n\nPor su parte, el generador solar fotovoltaico debe dimensionarse no solo para satisfacer el consumo diario instantáneo, sino también para recargar completamente el banco de baterías tras un evento de autonomía en un lapso razonable de 2 a 3 días soleados. Se utilizan los valores de Horas Solares Pico (HSP) del mes más desfavorable del año (frecuentemente septiembre u octubre con valores de 4.5 a 4.8 kWh/m²/día) y un factor de rendimiento global del sistema (Performance Ratio PR) del 70% al 75%, que engloba pérdidas térmicas, ensuciamiento (soiling) y pérdidas en conductores.\n\nLa interconexión entre el generador solar y las baterías debe realizarse mediante un controlador de carga con seguimiento de punto de máxima potencia (MPPT - Maximum Power Point Tracking). A diferencia de los antiguos controladores PWM que forzaban a los paneles a operar al voltaje de batería perdiendo hasta un 30% de la energía potencial, el regulador MPPT realiza una conversión DC/DC conmutada en alta frecuencia que extrae la máxima potencia instantánea (P = V_mp * I_mp) independientemente de la tensión de la batería. Finalmente, los conductores en corriente continua entre el banco de acumuladores y el inversor deben seleccionarse para soportar corrientes que frecuentemente sobrepasan los 100 A a 150 A a 24V o 48V, requiriendo conductores de cobre de gran calibre (2/0, 4/0 AWG), fusibles de acción ultra-rápida (tipo ANL o NH00) y desconectadores bipolares de batería para mantenimiento seguro.",
    "keyRegulatoryReferences": [
      "NEC / NFPA 70 Artículo 706: Energy Storage Systems (ESS).",
      "NEC Artículo 710: Stand-Alone Systems (Sistemas Eléctricos Aislados).",
      "Estándar UL 1973: Standard for Batteries for Use in Stationary Applications.",
      "Estándar UL 9540: Standard for Energy Storage Systems and Equipment Safety.",
      "Manual de Diseño y Buenas Prácticas para Electrificación Rural Fotovoltaica (CNE / CEL El Salvador)."
    ],
    "solvedCalculations": [
      {
        "id": "calc-4-1-banco-litio-lifepo4",
        "title": "Dimensionamiento de Capacidad Útil y Nominal de Banco de Baterías de Litio LiFePO4 para Carga Crítica Aislada",
        "unitId": "unit-4-offgrid-almacenamiento-baterias",
        "problemStatement": "Un puesto de salud rural en una comunidad aislada de Morazán requiere energizar una refrigeradora de vacunas, iluminación básica y radiocomunicación VHF, totalizando un consumo continuo de 4,800 Wh/día. La tensión de trabajo del sistema en corriente continua es de 48 Vdc. Se exige una autonomía de 2 días de temporal lluvioso. El inversor de onda senoidal pura posee una eficiencia del 92% (0.92). Se seleccionan módulos de batería de litio LiFePO4 de 48 V / 100 Ah con una profundidad de descarga máxima recomendada DoD = 85% (0.85). Calcule la energía total requerida, la capacidad en Amperios-hora y el número de módulos comerciales de batería de 48V / 100Ah necesarios.",
        "designParameters": {
          "Consumo diario de energía (E_diaria)": "4,800 Wh/día",
          "Días de autonomía requeridos (N_dias)": "2 días",
          "Tensión nominal del banco (V_banco)": "48 Vdc",
          "Profundidad de descarga LiFePO4 (DoD)": "85% (0.85)",
          "Eficiencia del inversor (eta_inv)": "92% (0.92)",
          "Capacidad por módulo comercial": "48 V / 100 Ah (4,800 Wh nominales)"
        },
        "engineeringFormulas": [
          "E_util_requerida = (E_diaria * N_dias) / eta_inv",
          "C_nominal_Wh = E_util_requerida / DoD",
          "C_nominal_Ah = C_nominal_Wh / V_banco",
          "N_modulos = ceil(C_nominal_Ah / Capacidad_modulo_Ah)"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la energía total requerida del banco en DC considerando las pérdidas del inversor:\nE_util_requerida = (4,800 Wh/día * 2 días) / 0.92 = 9,600 Wh / 0.92 = 10,434.78 Wh.\n\nPaso 2: Cálculo de la capacidad nominal requerida considerando la profundidad de descarga (DoD):\nC_nominal_Wh = 10,434.78 Wh / 0.85 = 12,276.21 Wh (aprox. 12.28 kWh).\n\nPaso 3: Cálculo de la capacidad requerida en Amperios-hora a 48 Vdc:\nC_nominal_Ah = 12,276.21 Wh / 48 V = 255.75 Ah.\n\nPaso 4: Determinación del número de módulos de litio LiFePO4 de 48V / 100Ah en paralelo:\nN_modulos = ceil(255.75 Ah / 100 Ah) = ceil(2.557) = 3 módulos en paralelo.\n\nPaso 5: Capacidad final instalada:\nCapacidad_instalada = 3 * 100 Ah = 300 Ah a 48 V (14,400 Wh = 14.40 kWh nominales).",
        "numericalResult": "3 módulos de batería LiFePO4 de 48V / 100Ah (Capacidad total instalada = 300 Ah / 14.40 kWh).",
        "practicalEngineeringJudgment": "Con 3 módulos de 100 Ah (300 Ah a 48 V), el sistema proporciona 2.34 días de autonomía real a un DoD seguro del 72.5%, lo que prolongará la vida útil de las celdas LiFePO4 más allá de los 6,000 ciclos (más de 15 años de operación continua)."
      },
      {
        "id": "calc-4-2-lcoe-litio-vs-plomo",
        "title": "Análisis Técnico-Económico y Costo Nivelado de Almacenamiento (LCOS): Litio LiFePO4 vs Plomo-Ácido Gel",
        "unitId": "unit-4-offgrid-almacenamiento-baterias",
        "problemStatement": "Para una carga que demanda 6.0 kWh útiles diarios a 48 V en una granja avícola en La Paz, se comparan dos opciones de banco de baterías para un horizonte de proyecto de 10 años (3,650 ciclos): Opción A (Litio LiFePO4, DoD 80%, 4,000 ciclos de vida, costo $400 por kWh nominal instalado); Opción B (Plomo-Ácido Gel, DoD 50%, 1,000 ciclos de vida, costo $180 por kWh nominal instalado). Calcule la capacidad nominal a instalar para cada tecnología, la cantidad de reemplazos necesarios en 10 años y el costo acumulado de inversión en baterías.",
        "designParameters": {
          "Energía útil diaria requerida": "6.0 kWh/día",
          "Horizonte temporal": "10 años (3,650 ciclos)",
          "Opción A (Litio)": "DoD = 80%, Vida útil = 4,000 ciclos, Costo = $400/kWh",
          "Opción B (Plomo Gel)": "DoD = 50%, Vida útil = 1,000 ciclos, Costo = $180/kWh"
        },
        "engineeringFormulas": [
          "Capacidad_nominal = Energia_util / DoD",
          "Vida_anos = Ciclos_vida / 365",
          "N_bancos_10anos = ceil(3650 / Ciclos_vida)",
          "Costo_total_10anos = N_bancos_10anos * (Capacidad_nominal * Costo_unitario)"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo para Opción A (Litio LiFePO4):\nCapacidad nominal = 6.0 kWh / 0.80 = 7.50 kWh.\nVida útil en años = 4,000 ciclos / 365 días/año = 10.96 años.\nNúmero de compras en 10 años = 1 compra (dura todo el horizonte de evaluación).\nCosto total = 1 * (7.50 kWh * $400/kWh) = $3,000.00.\n\nPaso 2: Cálculo para Opción B (Plomo-Ácido Gel):\nCapacidad nominal = 6.0 kWh / 0.50 = 12.0 kWh.\nVida útil en años = 1,000 ciclos / 365 días/año = 2.74 años.\nNúmero de bancos en 10 años = ceil(3,650 / 1,000) = 4 bancos (compra inicial + 3 reemplazos).\nCosto por banco = 12.0 kWh * $180/kWh = $2,160.00.\nCosto total acumulado en 10 años = 4 * $2,160.00 = $8,640.00.\n\nPaso 3: Comparación económica:\nAhorro neto con Litio = $8,640.00 - $3,000.00 = $5,640.00 (65.3% de reducción en costo acumulado de baterías).",
        "numericalResult": "Litio LiFePO4: $3,000 (1 banco) vs Plomo Gel: $8,640 (4 reemplazos). Ahorro = $5,640 (65.3%).",
        "practicalEngineeringJudgment": "A pesar de que el plomo-ácido aparenta ser más económico en la compra inicial ($2,160 vs $3,000), su rápida degradación exige reemplazar el banco cada 2.7 años, triplicando el costo de ciclo de vida e incrementando costos de transporte marítimo/terrestre y disposición de residuos tóxicos."
      },
      {
        "id": "calc-4-3-controlador-carga-mppt",
        "title": "Dimensionamiento y Verificación de Ventana de Tensión de Controlador de Carga Solar MPPT",
        "unitId": "unit-4-offgrid-almacenamiento-baterias",
        "problemStatement": "Un sistema aislado en Chalatenango cuenta con 6 paneles de 400 Wp (P_total = 2,400 Wp) conectados en 2 strings en paralelo de 3 paneles en serie cada uno. Los datos STC del panel son: V_oc = 49.5 V, V_mp = 41.2 V, I_sc = 10.2 A, I_mp = 9.71 A y beta_Voc = -0.28%/°C. La temperatura mínima de diseño es 6°C y la temperatura máxima de celda al mediodía es 65°C. El banco de baterías opera a 48 Vdc (tensión máxima de absorción = 56.4 V). Seleccione el regulador MPPT adecuado evaluando tensión máxima de entrada, ventana MPPT y corriente de carga máxima a la salida.",
        "designParameters": {
          "Configuración del arreglo": "2 strings en paralelo de 3 paneles en serie (3S2P)",
          "Potencia total del arreglo": "2,400 Wp",
          "Datos del módulo": "Voc=49.5V, Vmp=41.2V, beta_Voc=-0.28%/°C",
          "Temperaturas de diseño": "T_min = 6°C; T_max_celda = 65°C",
          "Tensión de absorción del banco": "56.4 Vdc"
        },
        "engineeringFormulas": [
          "Voc_max_modulo = Voc_STC * [1 + beta_Voc * (T_min - 25)]",
          "Voc_max_string = 3 * Voc_max_modulo <= V_max_mppt",
          "Vmp_min_string = 3 * (Vmp_STC * [1 + beta_Vmp * (T_max_celda - 25)]) >= V_min_mppt",
          "I_salida_bateria = P_total / V_absorcion"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la tensión de circuito abierto máxima del string a 6°C:\nDelta_T_frio = 6°C - 25°C = -19°C.\nVoc_modulo_max = 49.5 V * [1 + (-0.0028) * (-19)] = 49.5 V * 1.0532 = 52.13 V.\nVoc_string_max = 3 * 52.13 V = 156.40 Vdc.\n\nPaso 2: Cálculo de la tensión de máxima potencia mínima a 65°C (con beta_Vmp aprox. -0.35%/°C):\nDelta_T_calor = 65°C - 25°C = +40°C.\nVmp_modulo_min = 41.2 V * [1 + (-0.0035) * 40] = 41.2 V * 0.860 = 35.43 V.\nVmp_string_min = 3 * 35.43 V = 106.30 Vdc.\n\nPaso 3: Verificación de la ventana de tensión del regulador MPPT comercial:\nSe compara con un regulador comercial de catálogo 250V / 60A:\nRango MPPT: 60 V a 245 V; Tensión máxima absoluta: 250 Vdc.\nVoc_string_max (156.4 V) < 250 Vdc (Margen de seguridad del 37.4%).\nVmp_string_min (106.3 V) > 60 Vdc y superior a la tensión de batería de 56.4 V (Operación MPPT garantizada).\n\nPaso 4: Cálculo de la corriente máxima continua entregada a la batería:\nI_salida_bateria = 2,400 W / 56.4 V = 42.55 A.\nCon factor continuo de seguridad del 1.25: I_requerida = 42.55 A * 1.25 = 53.19 A.",
        "numericalResult": "Regulador MPPT seleccionado: 250 V / 60 A a 48 Vdc.",
        "practicalEngineeringJudgment": "El modelo MPPT 250V/60A ofrece una tolerancia holgada ante sobretensiones por frío (156.4 V vs 250 V máx) y maneja con holgura los 42.6 A nominales de carga sin entrar en saturación térmica (derating)."
      },
      {
        "id": "calc-4-4-potencia-arreglo-offgrid",
        "title": "Cálculo de Potencia Pico Requerida del Generador Solar Off-Grid en Mes Crítico de Lluvia",
        "unitId": "unit-4-offgrid-almacenamiento-baterias",
        "problemStatement": "Una micro-red aislada en la Isla San Sebastián (Bahía de Jiquilisco, Usulután) alimenta una cooperativa pesquera con un consumo diario medido de 15,000 Wh/día (15.0 kWh/día). El mes más crítico de irradiación solar es septiembre, con 4.6 HSP (kWh/m²/día). El factor de rendimiento global del sistema (Performance Ratio PR) considerando pérdidas térmicas, eficiencia del inversor y batería es PR = 0.72. Se planea utilizar paneles solares monocristalinos de 550 Wp. Calcule la potencia pico mínima en kWp del arreglo fotovoltaico y la cantidad de paneles requeridos.",
        "designParameters": {
          "Consumo diario de energía (E_diaria)": "15,000 Wh/día",
          "Horas Solares Pico en mes crítico (HSP)": "4.6 h/día (septiembre)",
          "Performance Ratio del sistema (PR)": "0.72",
          "Potencia unitaria del panel": "550 Wp"
        },
        "engineeringFormulas": [
          "P_dc_requerida (Wp) = E_diaria / (HSP * PR)",
          "N_paneles = ceil(P_dc_requerida / P_panel_unitario)"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la potencia pico fotovoltaica teórica en DC:\nP_dc_requerida = 15,000 Wh/día / (4.6 h/día * 0.72) = 15,000 / 3.312 = 4,529.0 Wp = 4.53 kWp.\n\nPaso 2: Margen de reserva para recuperación de baterías tras días nublados (+20%):\nP_dc_diseno = 4,529.0 Wp * 1.20 = 5,434.8 Wp.\n\nPaso 3: Cálculo del número de módulos fotovoltaicos de 550 Wp:\nN_paneles = ceil(5,434.8 Wp / 550 Wp) = ceil(9.88) = 10 módulos solares.\n\nPaso 4: Potencia pico real instalada:\nPotencia_total = 10 * 550 Wp = 5,500 Wp = 5.50 kWp.",
        "numericalResult": "10 módulos solares de 550 Wp (Potencia pico total = 5.50 kWp).",
        "practicalEngineeringJudgment": "Los 5.50 kWp garantizan que en el mes más lluvioso del año la cooperativa cubrirá sus 15 kWh diarios y mantendrá un excedente de recarga de 3.2 kWh/día para reponer la reserva de las baterías tras períodos de nubosidad."
      },
      {
        "id": "calc-4-5-conductor-baterias-inversor",
        "title": "Dimensionamiento de Conductor Extra-Flexible y Fusible de Protección entre Banco de Baterías e Inversor",
        "unitId": "unit-4-offgrid-almacenamiento-baterias",
        "problemStatement": "Un inversor cargador de onda senoidal pura tiene una potencia nominal continua de 5,000 W con capacidad de soportar sobrecargas pico de arranque de motores de 10,000 W durante 5 segundos. Opera a una tensión nominal de banco de 48 Vdc (tensión de corte por batería baja = 42.0 Vdc). La eficiencia del inversor a plena carga es del 90% (0.90). La distancia unidireccional entre el banco de baterías y el inversor es de 2.0 metros (bucle total 2L = 4.0 m). Calcule la corriente continua máxima, la corriente pico, dimensione el calibre del cable de cobre extra-flexible para mantener una caída de tensión inferior al 1.0% a 48 V y seleccione el fusible de protección clase ANL.",
        "designParameters": {
          "Potencia continua nominal": "5,000 W",
          "Potencia pico de sobrecarga": "10,000 W (5 s)",
          "Tensión mínima del banco (V_corte)": "42.0 Vdc",
          "Eficiencia del inversor": "90% (0.90)",
          "Longitud del bucle (2L)": "4.0 m",
          "Límite de caída de tensión": "< 1.0% (0.48 V a 48 V)"
        },
        "engineeringFormulas": [
          "I_dc_continua = P_nom / (V_min * eta)",
          "I_dc_pico = P_pico / (V_min * eta_pico)",
          "Delta_V = I_dc_continua * (2 * L * R_cable)",
          "I_fusible >= 1.25 * I_dc_continua"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la corriente continua nominal máxima a tensión de corte:\nI_dc_continua = 5,000 W / (42.0 V * 0.90) = 5,000 / 37.80 = 132.28 A.\n\nPaso 2: Cálculo de la corriente pico de sobrecarga durante arranque de compresores:\nI_dc_pico = 10,000 W / (42.0 V * 0.85) = 10,000 / 35.70 = 280.11 A.\n\nPaso 3: Dimensionamiento del conductor para caída de tensión < 1.0%:\nSe evalúa conductor de cobre tipo soldadura extra-flexible (Weld Cable 90°C) calibre 2/0 AWG:\nResistencia óhmica (Tabla 8 NEC): R = 0.256 ohms/km = 0.000256 ohms/m.\nResistencia total en 4.0 m = 4.0 m * 0.000256 ohms/m = 0.001024 ohms.\nCaída de tensión a corriente nominal continua:\nDelta_V = 132.28 A * 0.001024 ohms = 0.135 V.\nPorcentaje de caída: %Delta_V = (0.135 V / 48 V) * 100% = 0.28% (Muy inferior al 1.0% límite).\n\nPaso 4: Selección de protección contra sobrecorriente (Fusible ANL):\nAmpacidad requerida = 1.25 * 132.28 A = 165.35 A.\nEl conductor 2/0 AWG a 90°C soporta hasta 195 A continuos.\nSe selecciona un fusible comercial tipo ANL de 175 A / 80 Vdc montado en portafusible sellado con cubierta transparente de policarbonato.",
        "numericalResult": "Conductor: Cobre extra-flexible 2/0 AWG (%Delta_V = 0.28%); Fusible de protección: 175 A ANL.",
        "practicalEngineeringJudgment": "El conductor 2/0 AWG disipa eficientemente las elevadas corrientes continuas sin calentamiento y asegura que el inversor no se apague por falso bajo voltaje (undervoltage fault) durante los arranques de motores cuando la corriente escala transitoriamente a 280 A."
      }
    ]
  },
  {
    "id": "unit-5-puesta-tierra-seguridad-ieee1547",
    "unitNumber": 5,
    "title": "Puesta a Tierra, Seguridad Operativa y Estándar IEEE 1547 / UL 1741",
    "shortDescription": "Sistema de puesta a tierra (SPT), fórmula de Dwight, equipotencialidad de marcos con grapas WEEB, protección anti-isla con desconexión activa ≤ 2.0 s, retardo de 5 minutos, y dispositivos de supresión de sobretensiones DPS/SPD.",
    "normativeCategory": "seguridad-operativa",
    "substantiveTheory": "La seguridad de las vidas humanas y la protección de los activos electromecánicos en centrales solares fotovoltaicas está indisolublemente vinculada a dos pilares técnicos de cumplimiento regulatorio obligatorio en El Salvador: el Sistema de Puesta a Tierra y Conexión Equipotencial (SPT/Bonding, normado por el Código NEC Artículo 250 y Artículo 690 Parte V) y los Estándares de Interconexión y Protección Anti-Isla de Recursos Energéticos Distribuidos (IEEE 1547 y certificación UL 1741, exigidos por la NTCOGD de la SIGET). La coexistencia en una misma instalación de circuitos de corriente continua de alta tensión (hasta 1,000 Vdc o 1,500 Vdc) con redes de corriente alterna en baja y media tensión genera riesgos críticos de choque eléctrico letal, tensiones de paso y toque peligrosas y arcos eléctricos de ignición ante fallas de aislamiento o descargas atmosféricas.\n\nEn el diseño del sistema de puesta a tierra fotovoltaico es imperativo diferenciar con rigor dos clases de conductores reglamentarios:\n1. Conductor del Electrodo de Puesta a Tierra (GEC - Grounding Electrode Conductor, NEC 250.66): Es el conductor de cobre continuo que conecta directamente el sistema de electrodos de tierra (varillas Copperweld, mallas de tierra o electrodos embutidos en concreto) con el barraje principal de tierra del centro de distribución o la carcasa del inversor. Su calibre se dimensiona en función del calibre del conductor de acometida más grueso según la Tabla 250.66 del NEC.\n2. Conductor de Puesta a Tierra de Equipos (EGC - Equipment Grounding Conductor, NEC 250.122 y 690.45): Es el conductor de cobre desnudo o aislado en color verde que interconecta todas las partes metálicas no conductoras de corriente que son susceptibles de energizarse accidentalmente ante una falla de aislamiento: los marcos de aluminio de los módulos solares, los rieles y abrazaderas de la estructura de montaje, las bandejas portacables, cajas de combinación, carcasas de inversores y envolventes metálicas de tableros. El EGC proporciona una trayectoria de retorno de bajísima impedancia que permite a la corriente de falla a tierra fluir rápidamente hacia la fuente, activando el detector e interruptor de falla a tierra (GFDI) del inversor fotovoltaico en una fracción de segundo para extinguir el riesgo eléctrico.\n\nUn aspecto constructivo de vital importancia en el trópico salvadoreño es la prevención de la corrosión galvánica entre metales disímiles. Cuando un conductor de puesta a tierra de cobre entra en contacto directo con el marco de aluminio anodizado de un panel solar bajo la humedad relativa elevada y el rocío salino de la costa salvadoreña, se desencadena una celda electrolítica galvánica acelerada que corroe y desintegra el aluminio, destruyendo la continuidad eléctrica del circuito de tierra. El Código NEC 690.43 exige el uso obligatorio de grapas y arandelas de unión equipotencial certificadas bajo la norma UL 467 (comúnmente denominadas grapas WEEB - Washer, Electrical Equipment Bond). Estas piezas de acero inoxidable poseen pequeños dientes o resaltes afilados que penetran mecánicamente la capa aislante de óxido de aluminio anodizado durante el apriete con torquímetro, creando un enlace hermético a los gases de bajísima resistencia óhmica entre el módulo y el riel sin contacto directo cobre-aluminio.\n\nLa resistencia de puesta a tierra del sistema debe medirse y documentarse obligatoriamente para la recepción de obra por parte de AES CAESS o DELSUR. La NTCOGD y los manuales de distribución exigen un valor de resistencia a tierra no mayor a 10 ohmios en plantas solares (y el NEC 250.53 exige mandatoriamente menos de 25 ohmios para un electrodo simple). El cálculo analítico preliminar de la resistencia de una varilla vertical de longitud L y radio r enterrada en un estrato de suelo de resistividad aparente rho se realiza mediante la clásica Fórmula de Dwight: R = [rho / (2 * pi * L)] * [ln(4L / r) - 1]. Cuando el terreno presenta alta resistividad (terrenos volcánicos de toba o roca basáltica con rho > 200 ohm-m), se requiere diseñar mallas de tierra con cable desnudo enterrado, instalar múltiples varillas en paralelo separadas a una distancia no menor al doble de su longitud (s >= 2L), o aplicar compuestos mejoradores de suelo de base mineral de grafito conductivo (GEM).\n\nEl Estándar IEEE 1547 y la norma de prueba UL 1741 regulan con precisión matemática la Protección Anti-Isla. Una isla eléctrica no intencionada se produce cuando la red de la distribuidora pública se desenergiza (por apertura de un interruptor en la subestación o corte de un reconectador por rama caída) y el generador solar continúa energizando las cargas del vecindario. Esta condición representa un peligro mortal de electrocución para los linieros de AES/DELSUR que acuden a reparar la línea considerándola desenergizada, y expone los electrodomésticos a sobretensiones severas o reconexiones fuera de sincronismo cuando la distribuidora reenergiza el alimentador. Por ende, el inversor debe integrar esquemas pasivos y algoritmos activos (como perturbación activa de frecuencia o potencia reactiva) que detecten la pérdida de la red pública y cesen de inyectar energía en un tiempo máximo de 2.0 segundos conforme al Artículo 21 de la NTCOGD. Adicionalmente, cuando la tensión y frecuencia de la red regresan a sus valores nominales, el Artículo 22 de la norma exige un período de retardo obligatorio de 5 minutos (300 segundos) de observación continua antes de que el inversor se sincronice y vuelva a reconectarse a la red.\n\nFinalmente, debido a que El Salvador presenta una de las densidades de descargas atmosféricas (rayos) más elevadas de Centroamérica, es mandatorio instalar Dispositivos de Protección contra Sobretensiones Transitorias (DPS / SPD). Se instalan DPS Tipo 1 en la acometida principal para desviar corrientes de rayo directas (onda 10/350 microsegundos) y DPS Tipo 2 en corriente continua (en cada entrada MPPT a 1,000 Vdc) y alterna (en tableros secundarios) para mitigar sobretensiones inducidas (onda 8/20 microsegundos), con capacidades nominales de descarga I_n no menores a 20 kA.",
    "keyRegulatoryReferences": [
      "Estándar IEEE 1547-2018: Standard for Interconnection and Interoperability of Distributed Energy Resources with Associated Electric Power Systems Interfaces.",
      "Estándar UL 1741 SA/SB: Standard for Inverters, Converters, Controllers and Interconnection System Equipment for Use With Distributed Energy Resources.",
      "Código NEC / NFPA 70 Artículo 250: Grounding and Bonding (Puesta a Tierra y Conexión Equipotencial).",
      "Código NEC Artículo 690 Parte V: Grounding and Bonding of Solar Photovoltaic (PV) Systems.",
      "Estándar IEEE 80-2013: IEEE Guide for Safety in AC Substation Grounding."
    ],
    "solvedCalculations": [
      {
        "id": "calc-5-1-resistencia-tierra-dwight",
        "title": "Cálculo de Resistencia de Puesta a Tierra de Electrodo Vertical mediante la Fórmula de Dwight",
        "unitId": "unit-5-puesta-tierra-seguridad-ieee1547",
        "problemStatement": "En una planta solar fotovoltaica en Ahuachapán, el suelo franco-arcilloso tiene una resistividad aparente medida mediante el método de Wenner de rho = 60 ohm-metro. Se proyecta instalar una varilla vertical de acero recubierta de cobre (Copperweld) de 5/8 pulgada de diámetro nominal (radio r = 0.0079375 m) y longitud L = 2.44 m (8 pies). Utilice la fórmula analítica de Dwight para calcular la resistencia teórica de puesta a tierra del electrodo simple y determine si cumple con la recomendación de la SIGET y las distribuidoras de R <= 10 ohms, o si se requiere añadir electrodos adicionales.",
        "designParameters": {
          "Resistividad del terreno (rho)": "60 ohm-metro",
          "Longitud del electrodo (L)": "2.44 m (8 pies)",
          "Radio del electrodo (r)": "0.0079375 m (5/8 pulgada de diámetro)",
          "Límite recomendado SIGET/AES": "R <= 10 ohms (Obligatorio NEC <= 25 ohms)"
        },
        "engineeringFormulas": [
          "R = [rho / (2 * pi * L)] * [ln(4 * L / r) - 1]",
          "Termino_geometrico = ln(4 * L / r) - 1",
          "Coeficiente_resistencia = rho / (2 * pi * L)"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo del cociente geométrico dimensional:\n(4 * L) / r = (4 * 2.44 m) / 0.0079375 m = 9.76 / 0.0079375 = 1,229.605.\n\nPaso 2: Cálculo del logaritmo natural y término entre corchetes:\nln(1,229.605) = 7.11445.\nTermino_geometrico = 7.11445 - 1.00 = 6.11445.\n\nPaso 3: Cálculo del coeficiente de resistencia por longitud de varilla:\nCoeficiente = rho / (2 * pi * L) = 60 / (2 * 3.14159 * 2.44) = 60 / 15.331 = 3.9136 ohms.\n\nPaso 4: Multiplicación final para obtener la resistencia total:\nR = 3.9136 ohms * 6.11445 = 23.93 ohms.\n\nPaso 5: Evaluación técnica frente a normas:\nR = 23.93 ohms cumple con el límite absoluto del NEC 250.53 (23.93 ohms <= 25.0 ohms).\nSin embargo, excede la recomendación técnica de plantas de generación de la SIGET (R <= 10.0 ohms).\n\nPaso 6: Cálculo de electrodos en paralelo separados a s = 2L (4.88 m):\nPara 2 varillas en paralelo con factor de acoplamiento mutuo del 10%:\nR_2varillas = (23.93 ohms / 2) * 1.10 = 13.16 ohms.\nPara 3 varillas en configuración triangular equilátera separadas 5 metros:\nR_3varillas = (23.93 ohms / 3) * 1.15 = 9.17 ohms <= 10.0 ohms.",
        "numericalResult": "Electrodo simple: R = 23.93 ohms. Arreglo triangular de 3 varillas: R = 9.17 ohms <= 10 ohms.",
        "practicalEngineeringJudgment": "Una sola varilla Copperweld resulta insuficiente para alcanzar el umbral de 10 ohmios exigido en los términos de referencia de AES CAESS y DELSUR. Se debe instalar una malla triangular de 3 varillas unidas con cable de cobre desnudo calibre 2 AWG mediante soldadura exotérmica (Cadweld)."
      },
      {
        "id": "calc-5-2-dimensionamiento-gec-egc",
        "title": "Dimensionamiento de Conductor del Electrodo de Tierra (GEC) y Puesta a Tierra de Equipos (EGC)",
        "unitId": "unit-5-puesta-tierra-seguridad-ieee1547",
        "problemStatement": "Una instalación comercial fotovoltaica de 30 kW a 240 V trifásico se interconecta en el tablero principal mediante un interruptor termomagnético de 100 A. Los conductores de fase de la acometida son de cobre calibre 1/0 AWG THHN. En el lado DC, la corriente máxima del arreglo fotovoltaico es I_max = 35 A protegida con fusible de 40 A. Conforme a las tablas NEC 250.66 y 250.122, determine el calibre mínimo reglamentario de cobre para el Conductor del Electrodo de Puesta a Tierra (GEC) y para el Conductor de Puesta a Tierra de Equipos (EGC) de los marcos y rieles solares.",
        "designParameters": {
          "Conductor de fase de acometida más grande": "1/0 AWG de cobre",
          "Interruptor de sobrecorriente en AC": "100 A",
          "Dispositivo de sobrecorriente en DC": "40 A",
          "Material del conductor de tierra": "Cobre"
        },
        "engineeringFormulas": [
          "GEC_calibre = f(Conductor_fase_acometida) segun Tabla NEC 250.66",
          "EGC_ac_calibre = f(Capacidad_disyuntor_AC) segun Tabla NEC 250.122",
          "EGC_dc_calibre = f(Fusible_DC) segun Tabla NEC 250.122 y Art. 690.45"
        ],
        "stepByStepSubstitution": "Paso 1: Dimensionamiento del Conductor del Electrodo de Tierra (GEC) según Tabla NEC 250.66:\nPara conductores de fase de acometida de cobre de calibre 1/0 AWG o 2/0 AWG:\nLa Tabla 250.66 estipula un calibre mínimo de conductor de puesta a tierra de cobre de 6 AWG (o 4 AWG si está sujeto a daño físico severo).\n\nPaso 2: Dimensionamiento del Conductor de Puesta a Tierra de Equipos en AC (EGC_ac) según Tabla NEC 250.122:\nPara un interruptor de protección de 100 A en corriente alterna:\nLa Tabla 250.122 exige un conductor de puesta a tierra de equipos de cobre de calibre 8 AWG.\n\nPaso 3: Dimensionamiento del Conductor de Puesta a Tierra de Equipos en DC (EGC_dc) según NEC 690.45 y Tabla 250.122:\nPara un fusible de circuito DC de 40 A:\nLa Tabla 250.122 indica calibre 10 AWG de cobre.\nNo obstante, el Artículo 690.45 del NEC añade que si el conductor de tierra de los marcos de los módulos corre expuesto a la intemperie a lo largo de los rieles sin canalización, no debe ser inferior a calibre 6 AWG si no cuenta con protección mecánica continua.",
        "numericalResult": "GEC hacia varilla = Cobre calibre 6 AWG; EGC en AC = 8 AWG; EGC de módulos = 6 AWG desnudo.",
        "practicalEngineeringJudgment": "El uso de conductor de cobre desnudo calibre 6 AWG fijado rígidamente a los rieles con grapas de tierra certificadas resiste la intemperie y asegura que las vibraciones mecánicas por vientos no rompan la trayectoria de tierra."
      },
      {
        "id": "calc-5-3-despeje-anti-isla-frecuencia",
        "title": "Verificación de Tiempo de Despeje Anti-Isla ante Variación Rápida de Frecuencia bajo Estándar IEEE 1547",
        "unitId": "unit-5-puesta-tierra-seguridad-ieee1547",
        "problemStatement": "Durante una contingencia en el Sistema Interconectado Nacional de El Salvador, un disparo intempestivo de una línea de transmisión de 115 kV provoca una caída abrupta de frecuencia en la red de distribución de 60.00 Hz a 56.40 Hz en un lapso de 50 milisegundos. Un inversor solar fotovoltaico comercial cuenta con relé de subfrecuencia nivel 2 (UF2). Verifique los umbrales de disparo de la norma IEEE 1547 Tabla 1 y determine el tiempo máximo obligatorio de cese de inyección y el retardo normativo de reconexión exigido por la NTCOGD Art. 22.",
        "designParameters": {
          "Frecuencia nominal de red": "60.00 Hz",
          "Frecuencia durante la falla": "56.40 Hz",
          "Umbral de disparo de subfrecuencia Nivel 2 (UF2)": "f < 57.00 Hz",
          "Tiempo de despeje normativo IEEE 1547": "<= 0.16 segundos (160 ms)",
          "Retardo de reconexión NTCOGD Art. 22": "5 minutos (300 segundos)"
        },
        "engineeringFormulas": [
          "Condicion_UF2: Si f < 57.00 Hz -> t_despeje <= 0.16 s (160 ms)",
          "Tiempo_observacion_reconexion >= 300 s tras f en [59.5 Hz, 60.5 Hz]"
        ],
        "stepByStepSubstitution": "Paso 1: Clasificación de la perturbación de frecuencia según IEEE 1547:\nLa frecuencia registrada es 56.40 Hz.\nComo 56.40 Hz < 57.00 Hz, la perturbación clasifica en la zona Under-Frequency 2 (UF2, subfrecuencia severa).\n\nPaso 2: Determinación del tiempo de despeje obligatorio de anti-isla:\nEl estándar IEEE 1547 y la norma UL 1741 estipulan para UF2 un tiempo máximo de despeje:\nt_despeje <= 0.16 segundos (160 milisegundos / aprox. 9.6 ciclos a 60 Hz).\n\nPaso 3: Verificación del inversor comisionado:\nEl inversor detecta la caída en el ciclo 2 (33 ms) y abre sus semiconductores PWM en 45 ms adicionales.\nTiempo total medido = 33 ms + 45 ms = 78 ms.\nComo 78 ms <= 160 ms, cumple con holgura la protección activa anti-isla.\n\nPaso 4: Determinación del protocolo de reconexión tras normalización:\nUna vez que la red pública estabiliza su frecuencia en 60.0 Hz, el inversor debe iniciar un cronómetro de espera obligatoria:\nt_retardo = 300 segundos (5.0 minutos). Solo transcurridos los 300 s ininterrumpidos podrá sincronizarse y cerrar contactores.",
        "numericalResult": "Tiempo de despeje UF2 = 78 ms (límite <= 160 ms); Retardo de reconexión = 300 s (5 minutos).",
        "practicalEngineeringJudgment": "Cumple a cabalidad con la NTCOGD y el estándar IEEE 1547. La desconexión ultra-rápida en 78 ms impide la formación de islas peligrosas y el retardo de 5 minutos evita reconexiones en medio de maniobras automáticas de reclosers de la distribuidora."
      },
      {
        "id": "calc-5-4-supresor-sobretensiones-dps",
        "title": "Dimensionamiento y Selección de Dispositivo de Protección contra Sobretensiones Transitorias (DPS DC Clase II)",
        "unitId": "unit-5-puesta-tierra-seguridad-ieee1547",
        "problemStatement": "Un parque solar en el valle de Sonsonate tiene strings con una tensión máxima en circuito abierto corregida por temperatura fría Voc_max = 820 Vdc. La región registra un nivel ceráunico elevado (más de 60 días de tormenta eléctrica al año). Dimensione el dispositivo de protección contra sobretensiones transitorias (DPS / SPD) para el lado de corriente continua, calculando la tensión máxima de operación continua (U_c), la corriente nominal de descarga (I_n, onda 8/20 microsegundos), el nivel de protección de tensión (U_p) y la configuración de polos conforme a IEC 61643-31 / UL 1449.",
        "designParameters": {
          "Tensión máxima corregida del string (Voc_max)": "820 Vdc",
          "Margen de seguridad normativo para Uc": "1.20 (20% por encima de Voc_max)",
          "Nivel ceráunico de la zona": "Elevado (> 60 días de tormenta al año)",
          "Tensión soportada al impulso de inversores": "4.0 kV (4,000 V)"
        },
        "engineeringFormulas": [
          "U_c_min = 1.20 * Voc_max",
          "I_n_min >= 20 kA (onda 8/20 us) para zonas con alto nivel ceráunico",
          "U_p <= 0.80 * U_impulso_inversor"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la tensión máxima de operación continua (U_c):\nU_c_min = 1.20 * 820 Vdc = 984 Vdc.\nSe selecciona un DPS comercial con tensión nominal normalizada U_c = 1,000 Vdc (o 1,200 Vdc).\n\nPaso 2: Selección de la corriente nominal de descarga (I_n):\nDado el alto nivel de tormentas eléctricas en Sonsonate, la norma exige un DPS Tipo 2 / Clase II con:\nI_n >= 20 kA (onda 8/20 microsegundos) y corriente máxima de descarga I_max >= 40 kA.\n\nPaso 3: Verificación del nivel de protección de tensión (U_p):\nEl inversor tiene una rigidez dieléctrica al impulso de 4.0 kV.\nEl DPS comercial seleccionado tiene U_p = 2.8 kV a I_n.\nComo 2.8 kV <= 0.80 * 4.0 kV = 3.2 kV, el DPS sujetará la onda de sobretensión por debajo del umbral de destrucción del inversor.\n\nPaso 4: Configuración interna de los cartuchos del DPS:\nConfiguración en \"Y\" tripolar de tres módulos de varistores de óxido metálico (MOV) con desconectador térmico integrado y señalización remota de estado (contacto seco auxiliar).",
        "numericalResult": "DPS DC Clase II: U_c = 1,000 Vdc, I_n = 20 kA, I_max = 40 kA, U_p <= 2.8 kV en configuración Y.",
        "practicalEngineeringJudgment": "La configuración en Y con tres varistores conectados entre (+)/(-), (+)/Tierra y (-)/Tierra garantiza protección en modo común y modo diferencial, evitando que sobretensiones inducidas por descargas atmosféricas perforen los módulos fotovoltaicos o el puente inversor."
      },
      {
        "id": "calc-5-5-tensiones-paso-toque",
        "title": "Evaluación de Tensiones de Toque y Paso en Perímetro de Instalación Fotovoltaica según IEEE 80",
        "unitId": "unit-5-puesta-tierra-seguridad-ieee1547",
        "problemStatement": "En una planta fotovoltaica comercial sobre suelo en La Libertad, se produce un cortocircuito a tierra monofásico en media tensión con corriente de falla I_f = 2,500 A que es despejada por el interruptor principal en un tiempo t_s = 0.20 segundos. La resistencia de la malla de tierra es R_g = 2.10 ohms. El suelo tiene una capa superficial de grava triturada de 10 cm con resistividad rho_s = 3,000 ohm-m (factor de reducción por capa Cs = 0.74). Para una persona de 50 kg de peso corporal, calcule la Elevación de Potencial de Tierra (GPR), la tensión de toque máxima tolerable según el Estándar IEEE 80 y verifique la seguridad si la tensión de toque calculada en la estructura perimetral es de 720 V.",
        "designParameters": {
          "Corriente de falla a tierra (I_f)": "2,500 A",
          "Tiempo de despeje de la falla (t_s)": "0.20 s",
          "Resistencia de la malla de tierra (R_g)": "2.10 ohms",
          "Resistividad de capa de grava (rho_s)": "3,000 ohm-m",
          "Factor de reducción de capa (C_s)": "0.74",
          "Tensión de toque calculada en estructura": "720 V"
        },
        "engineeringFormulas": [
          "GPR = I_f * R_g",
          "V_touch_tol_50 = [(1,000 + 1.5 * C_s * rho_s) * (0.116 / sqrt(t_s))]",
          "Criterio_seguridad: V_touch_calculada <= V_touch_tol_50"
        ],
        "stepByStepSubstitution": "Paso 1: Cálculo de la Elevación del Potencial de Tierra (Ground Potential Rise - GPR):\nGPR = 2,500 A * 2.10 ohms = 5,250 V.\n\nPaso 2: Cálculo de la resistencia aparente de contacto de pies con el suelo enserie:\nR_pies = 1.5 * C_s * rho_s = 1.5 * 0.74 * 3,000 = 3,330 ohms.\nResistencia total en el bucle del cuerpo: R_total = 1,000 ohms (cuerpo humano) + 3,330 ohms = 4,330 ohms.\n\nPaso 3: Cálculo de la tensión de toque tolerable según IEEE 80 Ecuación 32 (peso 50 kg):\nFactor_tiempo = 0.116 / sqrt(0.20) = 0.116 / 0.4472 = 0.25939.\nV_touch_tol_50 = 4,330 * 0.25939 = 1,123.16 V.\n\nPaso 4: Comparación entre la tensión de toque calculada y la tensión máxima tolerable:\nV_touch_calculada = 720 V.\n720 V <= 1,123.16 V (Cumple con amplio margen de seguridad).",
        "numericalResult": "GPR = 5,250 V; Tensión de toque tolerable = 1,123.16 V; V_touch_calculada = 720 V (SEGURO).",
        "practicalEngineeringJudgment": "La adición de la capa de 10 cm de grava triturada lavada en el perímetro y pasillos de la planta incrementa la resistencia de contacto de los pies, garantizando que el personal de mantenimiento esté a salvo de fibrilación ventricular en caso de una falla a tierra en media tensión."
      }
    ]
  }
];

export const SIGET_SOLAR_QUESTIONS: SigetSolarQuestion[] = [
  {
    "id": "siget-01",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Tiempo de Desconexión y Protección Anti-Isla",
    "statement": "De acuerdo con la Norma Técnica de Conexión y Operación de Generación Distribuida (NTCOGD, SIGET Acuerdo 343-E-2016) y el estándar IEEE 1547, ¿cuál es el tiempo máximo permitido para que un inversor fotovoltaico interrumpa la inyección de energía ante una pérdida de tensión o desconexión de la red de distribución pública?",
    "options": {
      "A": "Menor o igual a 2.0 segundos.",
      "B": "Menor o igual a 10.0 segundos.",
      "C": "Exactamente 30.0 segundos.",
      "D": "Menor o igual a 60.0 segundos."
    },
    "correctAnswer": "A",
    "explanation": "La protección anti-isla es un requerimiento de seguridad de vida crítico para el personal de campo de las empresas distribuidoras. El estándar IEEE 1547 y la NTCOGD de la SIGET estipulan que el inversor debe cesar de entregar energía a la red desenergizada en un tiempo no mayor a 2.0 segundos tras la pérdida de suministro de la red pública.",
    "technicalBasis": "NTCOGD SIGET Acuerdo 343-E-2016, Art. 21 e IEEE 1547 / UL 1741.",
    "distractorRationale": {
      "A": "Correcto. El límite máximo de desconexión anti-isla es 2.0 segundos.",
      "B": "10 segundos es excesivo y mantendría la red energizada poniendo en riesgo a operarios.",
      "C": "30 segundos corresponde al límite del Rapid Shutdown del NEC para disipar voltaje en los módulos, no a la desconexión anti-isla.",
      "D": "60 segundos violaría flagrantemente la normativa de seguridad de red."
    }
  },
  {
    "id": "siget-02",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Reconexión Automática del Inversor tras Falla",
    "statement": "Una vez que la tensión y frecuencia de la red de distribución pública regresan a sus rangos nominales de operación tras un corte de energía, ¿cuál es el tiempo de retardo mínimo de observación que debe esperar el inversor fotovoltaico antes de volver a reconectarse y sincronizarse a la red?",
    "options": {
      "A": "10 segundos.",
      "B": "30 segundos.",
      "C": "5 minutos (300 segundos).",
      "D": "15 minutos (900 segundos)."
    },
    "correctAnswer": "C",
    "explanation": "Según la NTCOGD y la norma técnica IEEE 1547, una vez restablecidos los parámetros normales de voltaje y frecuencia en la red de distribución, el inversor debe mantener un periodo de retardo de reconexión obligatorio de al menos 5 minutos (300 segundos). Esto garantiza que la red se encuentre estable y evita acoples en medio de maniobras transitorias de reconectadores (reclosers).",
    "technicalBasis": "NTCOGD SIGET Art. 22; Estándar IEEE 1547 Sección 5.4.1.",
    "distractorRationale": {
      "A": "10 segundos no permite estabilizar maniobras de transformadores ni transitorios.",
      "B": "30 segundos es insuficiente para asegurar la estabilidad de la red.",
      "C": "Correcto. El retardo reglamentario estándar es de 5 minutos (300 s).",
      "D": "15 minutos no es el valor estándar regulado."
    }
  },
  {
    "id": "siget-03",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Límite de Potencia del Generador Distribuido (UGD)",
    "statement": "En el marco del esquema de Medición Neta regulado por la SIGET en El Salvador, ¿cuál es la limitación máxima de potencia nominal en corriente alterna (AC) que un usuario residencial o comercial puede instalar bajo la figura de Usuario Generador Distribuido (UGD)?",
    "options": {
      "A": "No puede exceder la capacidad contratada o potencia de demanda contratada con la distribuidora para dicho suministro.",
      "B": "No puede superar los 10 kW para ningún tipo de usuario residencial ni comercial.",
      "C": "Puede duplicar libremente la capacidad de su acometida sin necesidad de adecuaciones de red.",
      "D": "La potencia es ilimitada y la distribuidora está obligada a aceptar cualquier inyección sin estudio previo."
    },
    "correctAnswer": "A",
    "explanation": "La NTCOGD y la Ley General de Electricidad establecen que la capacidad nominal de generación en corriente alterna de un sistema de generación distribuida para autoconsumo y medición neta no podrá ser mayor a la capacidad o potencia contratada por el usuario final en su punto de suministro (NIC), salvo que tramite y pague una ampliación formal de potencia contratada y acometida ante la distribuidora.",
    "technicalBasis": "NTCOGD SIGET Acuerdo 343-E-2016, Art. 8 y Ley General de Electricidad.",
    "distractorRationale": {
      "A": "Correcto. La potencia nominal del UGD está topada a la potencia contratada del suministro.",
      "B": "10 kW es falso; clientes trifásicos comerciales pueden instalar capacidades superiores según su potencia contratada.",
      "C": "Duplicar la potencia sin adecuación sobrecargaría el transformador del circuito.",
      "D": "No existe inyección ilimitada; requiere estudio y aprobación técnica de la distribuidora."
    }
  },
  {
    "id": "siget-04",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Tratamiento de Excedentes Energéticos Mensuales",
    "statement": "En el régimen de Medición Neta en El Salvador, si durante un ciclo mensual de facturación la energía generada e inyectada por el usuario supera la energía consumida de la red de distribución pública, ¿cómo se compensan dichos excedentes?",
    "options": {
      "A": "Se acreditan en kWh como un saldo a favor que se descuenta en las facturaciones de los meses posteriores.",
      "B": "La distribuidora entrega inmediatamente un cheque en efectivo al usuario al final del mes.",
      "C": "Los excedentes se pierden y caducan automáticamente al terminar cada mes calendario.",
      "D": "Se penaliza económicamente al usuario por inyectar más de lo consumido."
    },
    "correctAnswer": "A",
    "explanation": "En el esquema de medición neta de El Salvador, los excedentes de energía inyectada a la red durante un mes de facturación se acreditan en kWh como saldo a favor en la cuenta del usuario para ser compensados contra consumos en los ciclos de facturación siguientes, amortizando la factura eléctrica del cliente.",
    "technicalBasis": "Ley General de Electricidad Art. 82-B y Reglamentos de Medición Neta SIGET.",
    "distractorRationale": {
      "A": "Correcto. Los excedentes se acumulan como créditos en kWh para los ciclos subsiguientes.",
      "B": "No se expide cheque mensual directo en medición neta estándar.",
      "C": "No se pierden de mes a mes; tienen vigencia de compensación.",
      "D": "No se aplican penalizaciones por excedentes dentro de los límites contratados."
    }
  },
  {
    "id": "siget-05",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Interruptor de Desconexión de Red Visible y Accesible",
    "statement": "¿Qué requerimiento físico exige la NTCOGD y los manuales de AES/DELSUR respecto al interruptor de desconexión del sistema solar fotovoltaico del lado de corriente alterna?",
    "options": {
      "A": "Debe ser exterior, visible, fácilmente accesible al personal de la distribuidora, con indicación clara de ABIERTO/CERRADO y apto para bloqueo con candado (Lock-Out / Tag-Out).",
      "B": "Debe estar oculto bajo llave dentro del dormitorio principal del inmueble.",
      "C": "Basta con apagar el inversor desde una aplicación móvil vía WiFi.",
      "D": "No se requiere interruptor físico si el inversor cuenta con fusible interno."
    },
    "correctAnswer": "A",
    "explanation": "Para salvaguardar la vida de las brigadas de linieros que intervienen la red pública, las distribuidoras eléctricas exigen un interruptor de seccionamiento de AC de apertura manual visible (Visible Disconnect Switch) instalado cerca del punto de entrega/medidor, accesible 24/7 sin ingresar al interior de la vivienda o nave industrial, y con aldaba para candado de seguridad.",
    "technicalBasis": "NTCOGD SIGET Art. 25 y Especificaciones Técnicas AES/DELSUR.",
    "distractorRationale": {
      "A": "Correcto. Es la exigencia física fundamental para seccionamiento de seguridad en campo.",
      "B": "Un interruptor dentro de una zona privada impide la desconexión de emergencia por la distribuidora.",
      "C": "Una app móvil no garantiza desconexión física galvánica de seguridad.",
      "D": "El fusible interno no reemplaza al seccionador exterior accesible."
    }
  },
  {
    "id": "siget-06",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Cálculo de Corriente de Cortocircuito y Factor de Seguridad (NEC 690.8)",
    "statement": "Para dimensionar los conductores y dispositivos de protección contra sobrecorriente (fusibles DC) de un circuito fuente fotovoltaico según el Código NEC Art. 690.8, ¿cuál es el factor de multiplicación total aplicado a la corriente de cortocircuito nominal del panel en condiciones estándar de medida (I_sc)?",
    "options": {
      "A": "1.56 x I_sc (resultante de 1.25 x 1.25 x I_sc).",
      "B": "1.00 x I_sc sin ningún factor de seguridad.",
      "C": "1.15 x I_sc.",
      "D": "2.50 x I_sc."
    },
    "correctAnswer": "A",
    "explanation": "El NEC 690.8 estipula que la corriente máxima de un circuito fotovoltaico es 1.25 x I_sc debido a condiciones de irradiancia superior a 1000 W/m² por efecto de reflexión o bajas temperaturas. A su vez, los conductores y protecciones de servicio continuo deben sobredimensionarse al 125%. Multiplicando ambos factores: 1.25 x 1.25 = 1.5625 ≈ 1.56 x I_sc.",
    "technicalBasis": "NEC (NFPA 70) Artículo 690.8(A)(1) y 690.8(B)(1).",
    "distractorRationale": {
      "A": "Correcto. El factor reglamentario compuesto de diseño continuo es 1.56.",
      "B": "1.0 provocaría disparos falsos continuos por sobre-irradiancia diurna.",
      "C": "1.15 no cumple con el Código Eléctrico Nacional.",
      "D": "2.50 dejaría al circuito sin protección efectiva contra sobrecorrientes."
    }
  },
  {
    "id": "siget-07",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Desconexión Rápida en Techos (Rapid Shutdown - NEC 690.12)",
    "statement": "El requerimiento de Desconexión Rápida (Rapid Shutdown) en techos según el Código NEC Art. 690.12 tiene como objetivo proteger a bomberos y brigadistas. ¿Cuáles son los umbrales de tensión y tiempo reglamentarios fuera del límite de 1 pie (30 cm) del arreglo solar?",
    "options": {
      "A": "Reducir la tensión a 30 Voltios o menos en un tiempo no mayor a 30 segundos.",
      "B": "Reducir la tensión a 120 Voltios en un máximo de 5 minutos.",
      "C": "Reducir la corriente a cero manteniendo 600 Voltios de tensión continua.",
      "D": "No existe límite de voltaje si los paneles son monocristalinos."
    },
    "correctAnswer": "A",
    "explanation": "El NEC 690.12 establece que al activarse el dispositivo de iniciación de Rapid Shutdown (o corte general de energía), los conductores ubicados fuera del perímetro de 1 pie (30 cm) del arreglo fotovoltaico deben reducir su voltaje a 30 V o menos dentro de los 30 segundos posteriores, mitigando el riesgo de electrocución para los cuerpos de socorro y bomberos.",
    "technicalBasis": "NEC (NFPA 70) Artículo 690.12(B)(1).",
    "distractorRationale": {
      "A": "Correcto. La regla internacional mnemotécnica es 30 Voltios en 30 Segundos.",
      "B": "120 V sigue siendo un voltaje potencialmente letal en condiciones de humedad o lluvia.",
      "C": "Mantener 600 V representaría un peligro mortal extremo de descarga eléctrica.",
      "D": "El tipo de panel es irrelevante; la regla aplica universalmente a techos."
    }
  },
  {
    "id": "siget-08",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Interruptor de Falla de Arco en Corriente Continua (AFCI DC)",
    "statement": "En sistemas fotovoltaicos que operan a una tensión máxima en circuito abierto superior a 80 V en DC (NEC 690.11), ¿cuál es la función obligatoria del dispositivo AFCI (Arc-Fault Circuit-Interrupter)?",
    "options": {
      "A": "Detectar arcos eléctricos en serie provocados por conexiones flojas o conductores rotos y desactivar el inversor para prevenir incendios.",
      "B": "Convertir la energía directa en alterna antes de llegar al inversor.",
      "C": "Evitar que el polvo y excrementos de aves se acumulen sobre los paneles solares.",
      "D": "Aumentar la eficiencia de captación solar en días nublados."
    },
    "correctAnswer": "A",
    "explanation": "Los circuitos DC de alta tensión pueden sostener arcos eléctricos en serie intensos a más de 3,000 °C si un conector MC4 está mal ponchado o un conductor se fractura. El interruptor AFCI (norma UL 1699B integrada en el inversor) detecta la firma espectral de alta frecuencia del arco y apaga el circuito en milisegundos, previniendo incendios en los techos.",
    "technicalBasis": "NEC Artículo 690.11 y Estándar UL 1699B.",
    "distractorRationale": {
      "A": "Correcto. La protección AFCI es vital para prevenir siniestros por ignición de arco DC.",
      "B": "Esa es la función de inversión DC/AC, no del detector de arco.",
      "C": "La limpieza de suciedad es mantenimiento mecánico/químico, no función eléctrica.",
      "D": "El AFCI es un dispositivo de seguridad de corte, no de ganancia energética."
    }
  },
  {
    "id": "siget-09",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Caída de Tensión Admisible en Sistemas Fotovoltaicos",
    "statement": "De acuerdo con las buenas prácticas de diseño fotovoltaico e ingeniería eléctrica reconocidas por la SIGET, ¿cuáles son los porcentajes recomendados de caída máxima de tensión (%Delta_V) en los tramos DC y AC de una instalación?",
    "options": {
      "A": "Máximo 1.5% a 2% en el tramo de corriente continua (DC) y máximo 1% en el tramo de corriente alterna (AC).",
      "B": "Hasta 15% en DC y 20% en AC sin problemas de operación.",
      "C": "10% uniforme en todos los tramos de la instalación.",
      "D": "No importa la caída de tensión siempre que los cables no se derritan."
    },
    "correctAnswer": "A",
    "explanation": "Mantener caídas de tensión muy bajas (típicamente <= 2% en DC y <= 1% en AC) no solo maximiza la cosecha de energía que llega a la red, sino que previene que el inversor se desconecte por sobrevoltaje AC en el punto de acoplamiento común (PCC) en horas pico de mediodía.",
    "technicalBasis": "Guías de Diseño Eléctrico SIGET y Manuales de Ingeniería Solar.",
    "distractorRationale": {
      "A": "Correcto. El estándar industrial busca caídas <= 2% en DC y <= 1% en AC.",
      "B": "15% y 20% provocarían pérdidas económicas severas y desconexiones constantes del inversor.",
      "C": "10% excede ampliamente el límite de tolerancia de los inversores fotovoltaicos.",
      "D": "Postura empírica peligrosa que viola principios elementales de ingeniería."
    }
  },
  {
    "id": "siget-10",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Alcance y Límite de Potencia: Electricista de Cuarta Categoría",
    "statement": "De acuerdo con el Reglamento de Acreditación de Instaladores y Técnicos Electricistas emitido por la SIGET, ¿cuál es el alcance máximo de trabajo y potencia para un electricista con carnet de Cuarta Categoría?",
    "options": {
      "A": "Instalaciones eléctricas residenciales monofásicas de baja tensión con potencia instalada de hasta 5 kW.",
      "B": "Instalaciones comerciales trifásicas de media tensión hasta 500 kVA.",
      "C": "Subestaciones de potencia de alta tensión de 115 kV.",
      "D": "No tiene límite de potencia siempre que firme un notario."
    },
    "correctAnswer": "A",
    "explanation": "El carnet de Cuarta Categoría de la SIGET habilita al titular para ejecutar y reparar instalaciones eléctricas residenciales monofásicas básicas de baja tensión (120/240 V) con un límite de potencia instalada de hasta 5 kW.",
    "technicalBasis": "Reglamento para la Autorización y Registro de Electricistas de la SIGET.",
    "distractorRationale": {
      "A": "Correcto. Cuarta Categoría está limitada a residenciales monofásicas hasta 5 kW.",
      "B": "Comerciales trifásicas de media tensión corresponden a Segunda o Primera Categoría.",
      "C": "Alta tensión requiere exclusivamente Primera Categoría (Ingeniero Electricista colegiado).",
      "D": "Falso; un notario da fe de firmas pero no sustituye la competencia técnica regulada."
    }
  },
  {
    "id": "siget-11",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Alcance y Límite de Potencia: Electricista de Tercera Categoría",
    "statement": "¿Hasta qué capacidad de potencia nominal y tipo de suministro faculta el carnet de Electricista de Tercera Categoría emitido por la SIGET?",
    "options": {
      "A": "Instalaciones residenciales y comerciales en baja tensión hasta una capacidad de 25 kVA.",
      "B": "Líneas de transmisión interconectadas de 230 kV a nivel regional.",
      "C": "Únicamente instalaciones solares portátiles de menos de 100 W.",
      "D": "Sistemas industriales con subestación propia de 1,000 kVA."
    },
    "correctAnswer": "A",
    "explanation": "El carnet de Tercera Categoría autoriza la ejecución, modificación e inspección de instalaciones en baja tensión de hasta 25 kVA, lo que cubre la mayoría de sistemas fotovoltaicos residenciales y pequeños comercios en El Salvador.",
    "technicalBasis": "Reglamento de Registro de Electricistas SIGET, Clasificación de Categorías.",
    "distractorRationale": {
      "A": "Correcto. Tercera Categoría cubre suministros en baja tensión hasta 25 kVA.",
      "B": "Líneas de transmisión son competencia exclusiva de Primera Categoría.",
      "C": "100 W es un límite absurdo; la categoría cubre hasta 25 kVA.",
      "D": "Subestaciones de 1,000 kVA exceden por mucho la Tercera Categoría."
    }
  },
  {
    "id": "siget-12",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Firma de Planos y Memorias Técnicas para Proyectos Solares Mayores",
    "statement": "Para un proyecto de generación distribuida solar comercial de 100 kW interconectado en media tensión a la red de CAESS o DELSUR, ¿qué categoría mínima de acreditación SIGET debe poseer el profesional responsable de firmar y presentar los planos y memoria técnica?",
    "options": {
      "A": "Electricista de Primera Categoría (Ingeniero Electricista debidamente autorizado por la SIGET y colegiado).",
      "B": "Electricista de Cuarta Categoría.",
      "C": "Cualquier persona que haya instalado paneles solares empíricamente.",
      "D": "Únicamente el alcalde municipal de la localidad donde se instale."
    },
    "correctAnswer": "A",
    "explanation": "Los proyectos de generación distribuida comercial o industrial de gran escala (> 25 kVA o con conexión en media tensión) requieren obligatoriamente la firma, sello y responsabilidad civil de un Ingeniero Electricista con carnet de Primera Categoría acreditado ante la SIGET.",
    "technicalBasis": "NTCOGD Art. 14 y Reglamento de Acreditación de la SIGET.",
    "distractorRationale": {
      "A": "Correcto. Sistemas comerciales e industriales mayores exigen carnet de Primera Categoría.",
      "B": "Cuarta Categoría está limitada a 5 kW monofásicos residenciales.",
      "C": "La experiencia empírica sin acreditación SIGET carece de validez legal.",
      "D": "La alcaldía emite permisos de construcción o tasas, no avales técnicos eléctricos."
    }
  },
  {
    "id": "siget-13",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Riesgo de Arco Eléctrico y Desconexión de Conectores MC4 Bajo Carga",
    "statement": "Durante el mantenimiento o resolución de fallas en un arreglo solar fotovoltaico, ¿por qué está terminantemente prohibido desacoplar conectores MC4 o terminales DC mientras los paneles están expuestos a radiación solar y el circuito está conduciendo corriente?",
    "options": {
      "A": "Porque en corriente continua (DC) la corriente no pasa por cero cíclicamente, generándose un arco eléctrico sostenido que destruye el conector y puede causar quemaduras graves o incendio.",
      "B": "Porque se descalibra el satélite de posicionamiento del sol.",
      "C": "Porque los paneles solares pierden la garantía de fábrica si se tocan los cables.",
      "D": "Porque la batería del teléfono móvil del técnico se descargaría instantáneamente."
    },
    "correctAnswer": "A",
    "explanation": "A diferencia de la corriente alterna (AC) donde la onda pasa por cero 120 veces por segundo facilitando la extinción del arco, la corriente continua (DC) no cruza por cero. Si se abre un conector MC4 bajo carga, el aire se ioniza y se sostiene un arco de plasma extremadamente caliente y peligroso. Siempre debe apagarse el interruptor seccionador DC o apagar el inversor antes de abrir cualquier conexión de string.",
    "technicalBasis": "Normas de Seguridad Ocupacional Eléctrica NFPA 70E y OSHA 1910.",
    "distractorRationale": {
      "A": "Correcto. El arco eléctrico en DC no se extingue espontáneamente al no tener cruce por cero.",
      "B": "Los satélites no tienen vínculo directo con los cables locales.",
      "C": "La garantía no es el motivo de seguridad vital frente al arco eléctrico.",
      "D": "Distractor humorístico sin sustento técnico."
    }
  },
  {
    "id": "siget-14",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Puesta a Tierra y Equipotencialidad de Marcos (NEC 250 y 690.43)",
    "statement": "¿Cuál es la razón técnica y reglamentaria por la cual todas las estructuras de montaje de aluminio y los marcos metálicos de los paneles fotovoltaicos deben estar sólidamente unidos entre sí mediante conductores de puesta a tierra de equipos (EGC) y conectados a tierra?",
    "options": {
      "A": "Para asegurar una ruta de baja impedancia a tierra que permita el disparo del interruptor GFDI/inversor ante una falla de aislamiento y evitar tensiones de contacto peligrosas para los usuarios.",
      "B": "Para que los paneles puedan recibir las señales de radio AM y FM del vecindario.",
      "C": "Para evitar que el granizo golpee las celdas de silicio.",
      "D": "Para aumentar la corriente nominal de cortocircuito del generador solar."
    },
    "correctAnswer": "A",
    "explanation": "Los marcos de los módulos y las estructuras metálicas están expuestos a la intemperie y a roces con cables de alta tensión DC. La unión equipotencial y puesta a tierra (NEC 690.43) garantiza que ante cualquier falla de aislamiento (ground fault), la corriente fluya a tierra activando la protección GFDI del inversor y protegiendo a las personas contra choques eléctricos letales por tensión de contacto.",
    "technicalBasis": "NEC Artículo 690.43 y Artículo 250 (Puesta a Tierra y Conexión Equipotencial).",
    "distractorRationale": {
      "A": "Correcto. La equipotencialidad drena fallas a tierra y previene descargas letales por contacto.",
      "B": "Los paneles no son antenas de radiodifusión.",
      "C": "La puesta a tierra no afecta el impacto físico del granizo.",
      "D": "La puesta a tierra no altera la física interna de generación fotovoltaica en las celdas."
    }
  },
  {
    "id": "siget-15",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Rotulación y Placas de Advertencia Obligatorias",
    "statement": "Según la NTCOGD de la SIGET y el Código NEC 690.54, ¿qué rotulación obligatoria debe colocarse de forma permanente y resistente a la intemperie en el centro de carga principal y punto de interconexión con la red?",
    "options": {
      "A": "ADVERTENCIA: FUENTE DUAL DE ENERGÍA. GENERADOR SOLAR FOTOVOLTAICO INTERCONECTADO. SEGUNDA FUENTE PRESENTE.",
      "B": "CUIDADO: PROHIBIDO USAR TELÉFONOS CELULARES EN ESTA ZONA.",
      "C": "AVISO: ESTA CASA ES ECOLÓGICA Y NO PRODUCE GASES.",
      "D": "PELIGRO: ALTO VOLTAJE SOLO DE NOCHE."
    },
    "correctAnswer": "A",
    "explanation": "Cualquier tablero donde confluyan la red de distribución pública y un sistema de generación local debe estar inequívocamente rotulado con placas de advertencia indelebles que alerten a los técnicos de mantenimiento que desconectar el breaker de la red no desenergiza el tablero por completo si los paneles solares siguen generando.",
    "technicalBasis": "NTCOGD Art. 27 y NEC 690.54 (Placas y Marcado de Fuentes Múltiples).",
    "distractorRationale": {
      "A": "Correcto. La advertencia de fuente dual previene electrocuciones de linieros y técnicos.",
      "B": "El uso de celulares no tiene relación con el marcado eléctrico obligatorio.",
      "C": "Eslogan ecológico sin relevancia en seguridad técnica y normativa de seccionamiento.",
      "D": "Los paneles generan de día con radiación solar, no de noche."
    }
  },
  {
    "id": "siget-16",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Estudio de Impacto de Conexión en Redes de Distribución",
    "statement": "¿Bajo qué condiciones técnicas específicas faculta la NTCOGD (SIGET Acuerdo 343-E-2016) a distribuidoras como CAESS o DELSUR a exigir un Estudio de Impacto en la Red antes de otorgar el punto de interconexión?",
    "options": {
      "A": "Cuando la potencia nominal inyectada supera los 100 kW o cuando la inyección agregada de generación en el circuito primario supera el 15% de la demanda mínima diurna del circuito.",
      "B": "Siempre que el usuario tenga contratada una tarifa residencial básica de menos de 100 kWh/mes.",
      "C": "Únicamente cuando los paneles solares provienen de marcas de origen asiático sin garantía local.",
      "D": "Solo cuando el usuario se niega a instalar interruptor de desconexión en corriente alterna."
    },
    "correctAnswer": "A",
    "explanation": "La NTCOGD establece que cuando la capacidad de generación solicitada supera los 100 kW o cuando la potencia agregada de generadores distribuidos en el circuito de distribución primario supera el 15% de la demanda mínima en horas de sol, la distribuidora puede exigir un Estudio de Impacto en la Red para modelar flujos de potencia, sobretensiones estáticas y coordinación de protecciones.",
    "technicalBasis": "NTCOGD SIGET Art. 13 y Procedimientos de Distribuidoras Eléctricas.",
    "distractorRationale": {
      "A": "Correcto. Umbral normativo formal: > 100 kW o > 15% de demanda mínima diurna del circuito.",
      "B": "El consumo histórico del cliente no es el disparador del estudio de impacto.",
      "C": "El origen geográfico del panel no es un criterio legal del procedimiento.",
      "D": "El interruptor de corte es mandatorio por ley, no un disparador de estudio."
    }
  },
  {
    "id": "siget-17",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Requisitos Técnicos del Medidor Bidireccional de 4 Cuadrantes",
    "statement": "¿Qué magnitudes eléctricas mínimas debe registrar y almacenar el medidor digital bidireccional homologado por la SIGET instalado en un suministro con generación distribuida?",
    "options": {
      "A": "Energía activa consumida (kWh importados), energía activa inyectada (kWh exportados), energía reactiva por cuadrante (kVARh) y demanda máxima en kW.",
      "B": "Únicamente el voltaje instantáneo entre fase y neutro al mediodía.",
      "C": "La radiación solar en vatios por metro cuadrado recibida en el techo.",
      "D": "Solamente los kWh consumidos, ignorando la energía inyectada a la red."
    },
    "correctAnswer": "A",
    "explanation": "El medidor digital de cuatro cuadrantes es fundamental para el balance comercial de la medición neta. Registra con precisión la energía activa importada (flujo hacia el usuario), energía activa exportada (flujo hacia la red), energía reactiva inductiva/capacitiva y el registro de demanda máxima para efectos de cargos de distribución.",
    "technicalBasis": "NTCOGD Art. 30 y Especificaciones de Medidores de AES/DELSUR.",
    "distractorRationale": {
      "A": "Correcto. Requiere medición activa importada/exportada, reactiva y demanda máxima.",
      "B": "El voltaje instantáneo aislado no permite el balance de facturación energética.",
      "C": "La radiación se mide con piranómetros en campo, no por el medidor de facturación.",
      "D": "Ignorar la inyección violaría el derecho legal de medición neta."
    }
  },
  {
    "id": "siget-18",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Factor de Potencia Admisible en el Punto de Conexión (PCC)",
    "statement": "Conforme a la NTCOGD Art. 20, ¿en qué rango regulatorio de factor de potencia debe operar el inversor fotovoltaico en el punto de entrega a la red de distribución pública?",
    "options": {
      "A": "Entre 0.95 en atraso (inductivo) y 0.95 en adelanto (capacitivo), operando preferentemente a factor de potencia unitario (1.00).",
      "B": "Estrictamente a 0.50 capacitivo durante las 24 horas del día.",
      "C": "No existe exigencia de factor de potencia para inversores solares.",
      "D": "Entre 0.20 y 0.40 inductivo en todo momento."
    },
    "correctAnswer": "A",
    "explanation": "Para preservar la estabilidad de tensión de la red secundaria, la NTCOGD exige que los inversores tengan capacidad de control de potencia reactiva dentro de una ventana de factor de potencia de 0.95 en atraso a 0.95 en adelanto, inyectando nominalmente a FP = 1.00 salvo que la distribuidora instruya soporte reactivo.",
    "technicalBasis": "NTCOGD Art. 20 e IEEE 1547 Sección 5.",
    "distractorRationale": {
      "A": "Correcto. El rango regulado es 0.95 atraso a 0.95 adelanto.",
      "B": "0.50 provocaría penalizaciones por bajo factor de potencia y sobretensiones severas.",
      "C": "Falso; el factor de potencia está explícitamente regulado por la SIGET.",
      "D": "Valores tan bajos saturarían las redes con corrientes reactivas inaceptables."
    }
  },
  {
    "id": "siget-19",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Límite de Inyección de Componente de Corriente Continua (DC Injection)",
    "statement": "Para prevenir la saturación magnética y calentamiento excesivo en transformadores de distribución de CAESS y DELSUR, ¿cuál es el porcentaje máximo permitido de inyección de corriente continua hacia la red AC?",
    "options": {
      "A": "Menor o igual al 0.5% de la corriente nominal de salida en corriente alterna del inversor.",
      "B": "Hasta el 25% de la corriente nominal de salida.",
      "C": "No existe límite porque la corriente continua no afecta a los transformadores de red.",
      "D": "Exactamente el 10% en suministros comerciales."
    },
    "correctAnswer": "A",
    "explanation": "La inyección accidental de corriente continua hacia transformadores de red de corriente alterna desplaza el ciclo de histéresis magnética provocando saturación del núcleo de hierro, armónicos y sobrecalentamiento. La norma IEEE 1547 y la NTCOGD limitan estrictamente la inyección de componente DC a menos del 0.5% de la corriente nominal AC del inversor.",
    "technicalBasis": "NTCOGD Art. 21 y Estándar IEEE 1547.1.",
    "distractorRationale": {
      "A": "Correcto. El límite máximo de inyección continua en AC es 0.5%.",
      "B": "25% destruiría el transformador de distribución por saturación térmica.",
      "C": "Falso; la corriente continua satura gravemente núcleos de transformadores AC.",
      "D": "10% es 20 veces superior al límite normativo seguro."
    }
  },
  {
    "id": "siget-20",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Vigencia y Tratamiento de Saldos Acumulados de Energía Neta",
    "statement": "De acuerdo con las reformas regulatorias de la Ley General de Electricidad y normativas de la SIGET, si un usuario generador acumula saldos positivos en kWh mes a mes, ¿cuál es el régimen de vigencia de dichos créditos energéticos?",
    "options": {
      "A": "Se acumulan de forma continua como créditos en kWh en la cuenta del usuario para amortizar consumos futuros durante el ciclo anual.",
      "B": "Caducan indefectiblemente el último día de cada mes calendario.",
      "C": "Pasan a ser propiedad de la alcaldía municipal como impuesto en especie.",
      "D": "Son transferidos automáticamente a las cuentas de los vecinos del usuario."
    },
    "correctAnswer": "A",
    "explanation": "El modelo de medición neta en El Salvador reconoce los excedentes de generación en kWh como saldos a favor acumulables que amortizan la factura eléctrica en los meses con menor recurso solar (p. ej. en época lluviosa), preservando el valor energético inyectado.",
    "technicalBasis": "Ley General de Electricidad Art. 82-B y Reglamentos de la SIGET.",
    "distractorRationale": {
      "A": "Correcto. Los créditos se conservan y acumulan para compensar consumos futuros.",
      "B": "La caducidad mensual desincentivaría la inversión solar y contradice la ley.",
      "C": "Las municipalidades cobran tasas por alumbrado, no retienen kWh solares.",
      "D": "Los créditos son intransferibles entre suministros distintos sin contrato especial."
    }
  },
  {
    "id": "siget-21",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Límite de Penetración en Transformador de Distribución Compartido",
    "statement": "Al tramitar una conexión UGD en un transformador aéreo de distribución público compartido, ¿qué porcentaje de capacidad nominal acumulada no debe excederse para evitar que la distribuidora exija el reemplazo del transformador?",
    "options": {
      "A": "El 80% de la capacidad nominal en kVA del transformador de distribución.",
      "B": "El 10% de la capacidad del transformador.",
      "C": "El 200% de la capacidad del transformador.",
      "D": "No existe límite en transformadores compartidos."
    },
    "correctAnswer": "A",
    "explanation": "La regla operativa adoptada por las distribuidoras bajo directrices de la SIGET estipula que la suma de potencia instalada de generadores distribuidos en baja tensión no debe sobrepasar el 80% de la potencia nominal del transformador, reservando un margen térmico del 20% para cargas pico y variaciones de tensión.",
    "technicalBasis": "Manual de Procedimientos UGD de AES El Salvador y DELSUR.",
    "distractorRationale": {
      "A": "Correcto. El límite operativo es 80% de la capacidad del transformador.",
      "B": "10% es excesivamente restrictivo e impediría el desarrollo de proyectos solares.",
      "C": "200% provocaría sobrecarga térmica inmediata y disparo de fusibles de media tensión.",
      "D": "Existe un límite estricto para proteger la infraestructura eléctrica compartida."
    }
  },
  {
    "id": "siget-22",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Control de Fluctuaciones de Tensión y Parpadeo (Flicker)",
    "statement": "¿Qué fenómeno de calidad de potencia generado por el paso rápido de nubes sobre techos fotovoltaicos regula la NTCOGD mediante los estándares IEC 61000-3-7 / IEEE 1453?",
    "options": {
      "A": "El parpadeo luminoso o fluctuación periódica de tensión (Flicker), con límites de severidad P_st <= 1.0 y P_lt <= 0.8.",
      "B": "El cambio de frecuencia de 60 Hz a 50 Hz en el inmueble.",
      "C": "La alteración de la resistividad geológica del terreno.",
      "D": "La despolarización de los imanes de motores de corriente continua."
    },
    "correctAnswer": "A",
    "explanation": "La rápida variación de potencia activa inyectada por nubes en movimiento sobre arreglos solares causa fluctuaciones de tensión en alimentadores de baja impedancia, induciendo parpadeo perceptible en iluminación (flicker). Las normas internacionales y la SIGET limitan los índices Pst (corta duración) y Plt (larga duración).",
    "technicalBasis": "NTCOGD Art. 18 y Estándar IEC 61000-3-7 / IEEE 1453.",
    "distractorRationale": {
      "A": "Correcto. El flicker o severidad de parpadeo está regulado bajo IEC 61000-3-7.",
      "B": "La frecuencia es controlada por el sistema interconectado nacional, no por nubes.",
      "C": "La resistividad del terreno es una constante geológica del suelo.",
      "D": "El flicker es un fenómeno de tensión de red AC, no de despolarización de imanes."
    }
  },
  {
    "id": "siget-23",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Plazo Normativo de Respuesta de la Distribuidora ante Solicitud UGD",
    "statement": "Conforme a los plazos administrativos estipulados en la NTCOGD, ¿cuántos días hábiles tiene la distribuidora para emitir dictamen de prefactibilidad tras recibir la solicitud formal para un sistema UGD menor a 10 kW en baja tensión?",
    "options": {
      "A": "10 días hábiles.",
      "B": "90 días calendario.",
      "C": "24 horas hábiles.",
      "D": "1 año calendario."
    },
    "correctAnswer": "A",
    "explanation": "El procedimiento administrativo simplificado de la NTCOGD para pequeños usuarios generadores distribuidos en baja tensión (< 10 kW) otorga a la empresa distribuidora un plazo perentorio de 10 días hábiles para revisar la solicitud y emitir la carta de aprobación o prevención técnica.",
    "technicalBasis": "NTCOGD SIGET Art. 12 (Procedimiento Simplificado de Conexión).",
    "distractorRationale": {
      "A": "Correcto. El plazo reglamentario para sistemas menores a 10 kW es de 10 días hábiles.",
      "B": "90 días aplica a centrales generadoras de gran escala en media o alta tensión.",
      "C": "24 horas es insuficiente para la revisión de campo y transformadores.",
      "D": "1 año violaría flagrantemente los principios de celeridad de la Ley de Procedimientos Administrativos (LPA)."
    }
  },
  {
    "id": "siget-24",
    "category": "normativa-gd",
    "categoryLabel": "Norma NTCOGD & Medición Neta",
    "area": "Mecanismo de Inyección Cero (Zero Injection / Feed-in Limitation)",
    "statement": "Cuando un circuito de distribución de CAESS o DELSUR se encuentra saturado y no admite inyección a la red, ¿qué arquitectura técnica permite instalar paneles solares para autoconsumo sin violar la normativa?",
    "options": {
      "A": "Instalar un medidor de potencia inteligente (Smart Meter / CT) en la acometida conectado al inversor para modular dinámicamente la generación e impedir cualquier exportación a la red pública (Inyección Cero).",
      "B": "Desconectar el cable de tierra de la vivienda para que la corriente se disipe en el aire.",
      "C": "Cubrir los paneles solares con pintura negra para reducir la potencia.",
      "D": "Sobrecargar intencionalmente el neutro de la acometida para quemar el medidor."
    },
    "correctAnswer": "A",
    "explanation": "El sistema de Inyección Cero utiliza un medidor de energía o transformadores de corriente (CT) en la frontera del suministro. El inversor lee en tiempo real el consumo de las cargas y estrangula su modulación para que la generación fotovoltaica nunca supere la demanda instantánea del cliente, evitando exportar a la red.",
    "technicalBasis": "NTCOGD Art. 9 y Manuales de Sistemas Anti-Inyección de Fabricantes.",
    "distractorRationale": {
      "A": "Correcto. El control dinámico de exportación con Smart Meter garantiza inyección cero.",
      "B": "Desconectar la tierra generaría un riesgo mortal de electrocución.",
      "C": "Pintar paneles destruiría físicamente los módulos solares.",
      "D": "Dañar el medidor constituye delito penal de fraude de fluido eléctrico."
    }
  },
  {
    "id": "siget-25",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Temperatura de Operación de Celda y Coeficiente de Tensión (NOCT)",
    "statement": "¿Por qué en ciudades cálidas de El Salvador como San Miguel o Sonsonate la tensión de operación de un arreglo solar disminuye significativamente al mediodía respecto a sus valores de placa STC?",
    "options": {
      "A": "Porque la temperatura de celda se eleva a 55°C - 65°C y el coeficiente de temperatura de tensión (beta_Vmp) del silicio es negativo, provocando una caída del 10% al 15% en el voltaje.",
      "B": "Porque la luz del sol pierde electrones cuando el aire está caliente.",
      "C": "Porque los inversores apagan los semiconductores cuando el sol brilla intensamente.",
      "D": "Porque la resistencia del aire entre el sol y el panel aumenta con el calor."
    },
    "correctAnswer": "A",
    "explanation": "Las especificaciones de placa se miden a 25°C (STC). Bajo radiación solar de 1000 W/m² y temperatura ambiente de 35°C en San Miguel, las celdas alcanzan entre 55°C y 65°C. Al tener el silicio un coeficiente beta de aproximadamente -0.35%/°C, la tensión Vmp cae apreciablemente, fenómeno que debe preverse para no salirse de la ventana MPPT del inversor.",
    "technicalBasis": "Física de Semiconductores Fotovoltaicos y Código NEC Art. 690.7.",
    "distractorRationale": {
      "A": "Correcto. El coeficiente térmico negativo del silicio reduce el voltaje al aumentar la temperatura de celda.",
      "B": "La luz solar está compuesta por fotones, no por electrones que se pierdan en el aire.",
      "C": "El inversor continúa modulando; no se apaga a menos que haya falla de temperatura.",
      "D": "La radiación viaja en el vacío y atmósfera sin esa supuesta resistencia."
    }
  },
  {
    "id": "siget-26",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Diferencias entre Conductor PV Wire y Conductor THHN Convencional",
    "statement": "¿Cuál es la razón principal por la cual el Artículo 690.31 del Código NEC prohíbe el uso de conductores termoplásticos estándar tipo THHN a la intemperie entre los paneles solares y exige cable fotovoltaico certificado tipo PV Wire?",
    "options": {
      "A": "Porque el cable PV Wire posee aislamiento termoestable de polietileno reticulado (XLPE) de mayor espesor, resistente a radiación UV, clasificado para 90°C en mojado/seco y apto para operar sin canalización mecánica.",
      "B": "Porque el cable THHN está prohibido en todo tipo de instalaciones eléctricas en Centroamérica.",
      "C": "Porque el cable PV Wire está hecho de oro puro y no conduce calor.",
      "D": "Porque el cable THHN solo funciona con corriente alterna de 50 Hz."
    },
    "correctAnswer": "A",
    "explanation": "El aislamiento de PVC del cable THHN se cristaliza y fractura rápidamente bajo la intensa radiación ultravioleta del trópico y el agua estancada en techos. El cable PV Wire o USE-2 posee aislamiento XLPE termoestable de pared gruesa, diseñado específicamente para soportar intemperie, calor extremo y roces mecánicos en arreglos solares.",
    "technicalBasis": "NEC (NFPA 70) Artículo 690.31(C) y Norma UL 4703.",
    "distractorRationale": {
      "A": "Correcto. El cable PV Wire posee aislamiento XLPE resistente a UV, intemperie y 90°C húmedo.",
      "B": "El cable THHN es el más utilizado dentro de tuberías conduit en interiores.",
      "C": "El PV Wire utiliza conductores de cobre estañado, no oro.",
      "D": "El THHN puede transportar DC siempre que esté dentro de canalización adecuada en interiores."
    }
  },
  {
    "id": "siget-27",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Tensión Máxima Admisible en Edificaciones Residenciales (NEC 690.7(C))",
    "statement": "En instalaciones solares sobre techos de viviendas residenciales unifamiliares en El Salvador, ¿cuál es la tensión máxima de corriente continua (DC) permitida por el Código NEC 690.7(C)?",
    "options": {
      "A": "No superior a 600 Voltios de corriente continua.",
      "B": "Hasta 1,500 Voltios sin ninguna restricción.",
      "C": "Máximo 48 Voltios para evitar cualquier riesgo.",
      "D": "Hasta 13,200 Voltios si se usan aisladores de vidrio."
    },
    "correctAnswer": "A",
    "explanation": "El NEC 690.7(C) limita expresamente la tensión de los circuitos fotovoltaicos en edificaciones residenciales de una o dos familias a un máximo de 600 Vdc, mitigando riesgos de arco eléctrico e incendio en hogares. Las tensiones de 1,000 Vdc y 1,500 Vdc quedan reservadas para edificaciones comerciales, industriales y granjas sobre suelo.",
    "technicalBasis": "NEC Artículo 690.7(C) (Maximum Voltage for Buildings).",
    "distractorRationale": {
      "A": "Correcto. El límite absoluto residencial en DC es 600 Vdc.",
      "B": "1,500 Vdc solo está permitido en plantas comerciales e industriales de gran escala.",
      "C": "48 Vdc es típico de bancos de baterías pequeños, no el límite de strings solares.",
      "D": "13.2 kV es media tensión de distribución pública, totalmente prohibida en techos de viviendas."
    }
  },
  {
    "id": "siget-28",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Cálculo de Cantidad Máxima de Módulos por String",
    "statement": "Para un inversor residencial con tensión máxima absoluta de entrada de 600 Vdc y módulos con V_oc(STC) = 49.8 V cuya tensión corregida a la temperatura mínima de diseño es de 52.0 V, ¿cuál es el número máximo de paneles que pueden conectarse en serie en un solo string?",
    "options": {
      "A": "11 paneles en serie (11 x 52.0 V = 572 V <= 600 V).",
      "B": "12 paneles en serie (12 x 52.0 V = 624 V).",
      "C": "20 paneles en serie.",
      "D": "50 paneles en serie."
    },
    "correctAnswer": "A",
    "explanation": "Dividiendo 600 V entre 52.0 V se obtiene 11.53 paneles. Redondeando al entero inferior más próximo para no sobrepasar el límite de seguridad: 11 paneles en serie, totalizando 572 V. Conectar 12 paneles alcanzaría 624 V en una mañana fría, destruyendo el inversor y violando el límite de 600 V del NEC.",
    "technicalBasis": "NEC Artículo 690.7 y Metodología de Dimensionamiento de Strings.",
    "distractorRationale": {
      "A": "Correcto. 11 paneles proporcionan 572 V, por debajo del tope de 600 Vdc.",
      "B": "12 paneles dan 624 V, quemando el inversor por sobrevoltaje.",
      "C": "20 paneles alcanzarían más de 1,000 Vdc.",
      "D": "50 paneles excederían por más de 4 veces la tensión de diseño."
    }
  },
  {
    "id": "siget-29",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Cálculo de Cantidad Mínima de Módulos por String para Ventana MPPT",
    "statement": "Si un inversor string tiene una tensión mínima de arranque MPPT de 160 Vdc y los paneles tienen una tensión de máxima potencia V_mp que desciende a 35.0 V a temperatura máxima de operación de celda (65°C), ¿cuál es el número mínimo de módulos en serie para no caer por debajo de la ventana MPPT?",
    "options": {
      "A": "5 módulos en serie (5 x 35.0 V = 175 Vdc >= 160 Vdc).",
      "B": "2 módulos en serie (70 Vdc).",
      "C": "1 solo módulo en serie.",
      "D": "No importa el número de módulos; el inversor amplifica cualquier voltaje."
    },
    "correctAnswer": "A",
    "explanation": "Para garantizar que el inversor rastree la máxima potencia en los días más calurosos de verano en El Salvador, la tensión mínima del string debe ser superior al umbral mínimo MPPT: N_min = ceil(160 V / 35.0 V) = ceil(4.57) = 5 paneles en serie (175 V). Con menos módulos, el inversor saldría del modo MPPT perdiendo producción.",
    "technicalBasis": "Cálculo de Ventana de Rastreo MPPT de Inversores Solares.",
    "distractorRationale": {
      "A": "Correcto. Con 5 módulos (175 V) se garantiza operar dentro de la ventana de 160 V.",
      "B": "2 módulos darían solo 70 V, impidiendo el arranque del inversor.",
      "C": "1 módulo (35 V) no suministra tensión suficiente para conmutar los transistores IGBT.",
      "D": "El inversor string requiere una tensión DC mínima de umbral para operar."
    }
  },
  {
    "id": "siget-30",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Protección contra Falla a Tierra en Circuitos Fotovoltaicos (GFDI)",
    "statement": "¿Cuál es la función primordial del dispositivo detector e interruptor de falla a tierra (GFDI) requerido por el Artículo 690.41 del NEC en sistemas solares interactivos con la red?",
    "options": {
      "A": "Detectar corrientes de fuga a tierra en el circuito DC superiores al umbral de sensibilidad, abrir el circuito y desenergizar el inversor para prevenir incendios y choques eléctricos.",
      "B": "Aumentar la resistencia de contacto de los paneles solares.",
      "C": "Medir la cantidad de polvo sobre los vidrios fotovoltaicos.",
      "D": "Almacenar energía eléctrica durante los cortes de la red de CAESS."
    },
    "correctAnswer": "A",
    "explanation": "Una falla a tierra en corriente continua (Ground Fault) puede ocurrir cuando el aislamiento de un cable se rasga contra un riel de aluminio o entra humedad en un conector. El GFDI detecta la corriente residual a tierra, interrumpe el circuito galvánico y apaga el inversor para extinguir arcos y salvaguardar la vida de las personas.",
    "technicalBasis": "NEC Artículo 690.41 (Ground-Fault Detection and Interruption).",
    "distractorRationale": {
      "A": "Correcto. El GFDI interrumpe fugas a tierra en DC previniendo electrocuciones e incendios.",
      "B": "El GFDI es un dispositivo de protección, no modifica resistencias de contacto.",
      "C": "La detección de suciedad es mantenimiento óptico.",
      "D": "El almacenamiento es función exclusiva de baterías BESS, no del relé de tierra."
    }
  },
  {
    "id": "siget-31",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Requisitos de Protección en Cajas Combinadoras (Combiner Boxes)",
    "statement": "Al agrupar 4 strings en paralelo dentro de una caja de combinación en corriente continua (Combiner Box), ¿qué protección individual exige el Artículo 690.9 del NEC en cada cadena?",
    "options": {
      "A": "Fusibles especiales fotovoltaicos clase gPV de 1,000 Vdc dimensionados a 1.56 x I_sc en cada polo no aterrizado de cada string.",
      "B": "Interruptores termomagnéticos residenciales convencionales de corriente alterna para 120 V.",
      "C": "Simplemente unir los cables retorciéndolos con cinta adhesiva de aislar.",
      "D": "No se requiere protección alguna si la caja es impermeable."
    },
    "correctAnswer": "A",
    "explanation": "Al tener 4 strings en paralelo, si una cadena sufre un cortocircuito interno, las otras 3 cadenas inyectarán 3 veces la corriente hacia la cadena dañada. El NEC 690.9 exige fusibles fotovoltaicos clase gPV certificados para 1,000 Vdc con corriente nominal calculada al factor continuo de 1.56 x I_sc.",
    "technicalBasis": "NEC 690.9 y Norma IEC 60269-6 para Fusibles gPV.",
    "distractorRationale": {
      "A": "Correcto. Fusibles gPV de 1,000 Vdc al factor continuo de 1.56 x I_sc.",
      "B": "Los interruptores de AC no pueden extinguir arcos en corriente continua y explotarían.",
      "C": "Uniones empíricas con cinta son una violación flagrante del código eléctrico.",
      "D": "La impermeabilidad de la caja no sustituye a la protección contra sobrecorriente."
    }
  },
  {
    "id": "siget-32",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Categoría de Utilización del Seccionador de Corriente Continua",
    "statement": "¿Qué categoría de servicio bajo norma IEC 60947-3 / UL 98B debe tener el interruptor seccionador instalado para aislar el arreglo fotovoltaico bajo carga (DC Disconnect)?",
    "options": {
      "A": "Categoría de empleo DC-PV2 o DC-21B para corte bajo carga inductiva/capacitiva en corriente continua a 1,000 Vdc.",
      "B": "Categoría AC-1 exclusiva para estufas y calentadores de corriente alterna.",
      "C": "Cualquier interruptor de timbre de puerta de baja tensión.",
      "D": "Basta con una clavija macho-hembra monofásica doméstica."
    },
    "correctAnswer": "A",
    "explanation": "Los interruptores para corriente continua fotovoltaica deben soportar la apertura bajo plena corriente y tensión sin sufrir soldadura de contactos por arco de plasma. La norma exige la categoría DC-PV2 (o DC-21B) con cámaras de extinción de arco magnéticas y resortes de apertura ultra-rápida (Snap Action).",
    "technicalBasis": "NEC Artículo 690.13 y Estándar IEC 60947-3.",
    "distractorRationale": {
      "A": "Correcto. Categoría DC-PV2 garantiza maniobra segura bajo carga en corriente continua.",
      "B": "AC-1 es para cargas resistivas puras en alterna; se destruiría instantáneamente en DC.",
      "C": "Un interruptor de timbre carece de aislamiento dieléctrico y aislamiento de arco.",
      "D": "Una clavija doméstica provocaría una explosión por arco eléctrico al desconectarse bajo 600 Vdc."
    }
  },
  {
    "id": "siget-33",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Ajuste de Ampacidad por Agrupamiento de Cables en Tubo Conduit (NEC 310.15)",
    "statement": "Si se canalizan 6 conductores portadores de corriente continua (3 pares de strings positivo y negativo) dentro de la misma tubería conduit, ¿cuál es el factor de ajuste por agrupamiento que exige la Tabla 310.15(C)(1) del NEC sobre la ampacidad de tabla?",
    "options": {
      "A": "0.80 (reducción del 20% de la capacidad de corriente admisible).",
      "B": "1.50 (aumento del 50% de la capacidad).",
      "C": "0.10 (reducción del 90%).",
      "D": "1.00 (sin reducción alguna)."
    },
    "correctAnswer": "A",
    "explanation": "Al confinar varios conductores calientes dentro de una misma canalización cerrada, la disipación térmica disminuye por acumulación de calor mutuo. Para un conjunto de 4 a 6 conductores portadores de corriente, el NEC 310.15(C)(1) impone un factor de derating del 80% (0.80) sobre la ampacidad nominal del cable.",
    "technicalBasis": "NEC Tabla 310.15(C)(1) (Adjustment Factors for More than Three Current-Carrying Conductors).",
    "distractorRationale": {
      "A": "Correcto. Para 4 a 6 conductores el factor reglamentario es 0.80.",
      "B": "El agrupamiento nunca incrementa la ampacidad térmica admisible.",
      "C": "0.10 es una reducción exagerada que no corresponde a 6 conductores.",
      "D": "Ignorar el agrupamiento sobrecalentaría los conductores derritiendo el aislamiento."
    }
  },
  {
    "id": "siget-34",
    "category": "nec-690",
    "categoryLabel": "Código NEC Art. 690 & Protecciones",
    "area": "Identificación y Código de Colores de Conductores DC",
    "statement": "En una instalación fotovoltaica con circuito DC flotante (no sólidamente aterrizado), ¿cómo deben identificarse reglamentariamente los conductores positivo y negativo según el Código NEC?",
    "options": {
      "A": "El polo positivo con aislamiento o cinta roja (o negro con etiqueta \"+\"), el polo negativo con aislamiento o cinta negra con etiqueta \"-\" (o azul/blanco con franja), y la tierra de protección (EGC) estrictamente en verde o cobre desnudo.",
      "B": "Usar cable verde para el positivo y cable desnudo para el negativo.",
      "C": "Cualquier color al azar siempre que funcionen los módulos.",
      "D": "Pintar todos los cables de color blanco reflectivo."
    },
    "correctAnswer": "A",
    "explanation": "La correcta identificación de polaridad es crítica en DC. Invertir la polaridad al conectar el string destruye los diodos de protección interna y la etapa de entrada del inversor. El NEC reserva el verde y el cobre desnudo exclusivamente para conductores de puesta a tierra, prohibiendo utilizarlos como conductores activos.",
    "technicalBasis": "NEC Artículo 200, 250.119 y 690.31(B).",
    "distractorRationale": {
      "A": "Correcto. Código estándar: Positivo rojo/marcado, Negativo negro/marcado, Tierra verde/desnudo.",
      "B": "Usar verde para el positivo provocaría electrocuciones de técnicos al confundirlo con tierra.",
      "C": "El desorden cromático está taxativamente prohibido en las memorias técnicas visadas.",
      "D": "El blanco está reservado exclusivamente para conductores puestos a tierra (neutros)."
    }
  },
  {
    "id": "siget-35",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Competencia Legal de Cuarta Categoría y Sistemas Trifásicos",
    "statement": "¿Puede un electricista autorizado con carnet de Cuarta Categoría de la SIGET firmar y solicitar la interconexión de un sistema solar fotovoltaico trifásico de 4 kW para un restaurante en Santa Tecla?",
    "options": {
      "A": "No, porque el carnet de Cuarta Categoría faculta exclusivamente para instalaciones monofásicas residenciales básicas; los suministros trifásicos y comerciales exigen Tercera Categoría como mínimo.",
      "B": "Sí, porque la potencia de 4 kW es menor a los 5 kW permitidos para su categoría.",
      "C": "Sí, siempre que el propietario del restaurante sea pariente del técnico.",
      "D": "Sí, si la distribuidora DELSUR no se da cuenta al recibir el expediente."
    },
    "correctAnswer": "A",
    "explanation": "El Reglamento de Acreditación de la SIGET limita la Cuarta Categoría con dos condiciones concurrentes: potencia instalada menor o igual a 5 kW Y naturaleza estrictamente monofásica residencial. Al tratarse de una acometida trifásica comercial, queda fuera de su competencia legal independientemente de los kilovatios.",
    "technicalBasis": "Reglamento para la Autorización y Registro de Instaladores de la SIGET.",
    "distractorRationale": {
      "A": "Correcto. Cuarta Categoría está limitada a monofásico residencial; trifásico exige al menos 3ª Categoría.",
      "B": "El límite de 5 kW aplica solo si es monofásico residencial, no trifásico comercial.",
      "C": "Los vínculos familiares no alteran la competencia legal administrativa.",
      "D": "Presentar documentos fuera de competencia conlleva rechazo del trámite y sanciones."
    }
  },
  {
    "id": "siget-36",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Límites de Potencia y Tensión para Técnico Electricista de Segunda Categoría",
    "statement": "¿Cuál es el límite máximo de potencia en kVA y alcance que el Reglamento de la SIGET asigna a los Técnicos Electricistas acreditados de Segunda Categoría?",
    "options": {
      "A": "Instalaciones eléctricas en baja tensión de hasta 150 kVA y montaje de bancos de transformación monofásicos o trifásicos comerciales hasta dicha capacidad.",
      "B": "Hasta 1,000 kVA en líneas de alta tensión de 115 kV.",
      "C": "Únicamente 5 kW en casas de campo.",
      "D": "Sin límite de potencia en todo tipo de subestaciones industriales."
    },
    "correctAnswer": "A",
    "explanation": "La Segunda Categoría de la SIGET reconoce a técnicos electricistas graduados de educación superior técnica para proyectar y construir obras en baja tensión hasta 150 kVA y el montaje de subestaciones transformadoras monofásicas o trifásicas de distribución comercial e industrial hasta 150 kVA.",
    "technicalBasis": "Reglamento de Registro de Electricistas de la SIGET, Sección 2ª Categoría.",
    "distractorRationale": {
      "A": "Correcto. El tope legal de Segunda Categoría es 150 kVA en baja tensión y bancos de transformación.",
      "B": "Alta tensión de 115 kV está reservada con exclusividad a Primera Categoría.",
      "C": "5 kW corresponde al tope de Cuarta Categoría, no de Segunda.",
      "D": "Sin límite es facultad exclusiva de los Ingenieros Electricistas de Primera Categoría."
    }
  },
  {
    "id": "siget-37",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Requisitos Legales para Carnet de Electricista de Primera Categoría",
    "statement": "¿Cuáles son los requisitos fundamentales exigidos por la legislación salvadoreña para obtener el carnet de Electricista de Primera Categoría ante la SIGET?",
    "options": {
      "A": "Poseer título universitario de Ingeniero Electricista, estar incorporado y colegiado con solvencia ante el Consejo de Vigilancia (Copiapia/ASIA) y estar formalmente registrado ante la SIGET.",
      "B": "Haber trabajado 5 años como ayudante de albañilería en proyectos de electrificación.",
      "C": "Aprobar un curso de computación básica de 40 horas en línea.",
      "D": "Ser propietario de una ferretería que venda materiales eléctricos."
    },
    "correctAnswer": "A",
    "explanation": "La Primera Categoría representa el máximo nivel de responsabilidad legal y técnica del sector eléctrico nacional. Requiere título universitario de Ingeniería Eléctrica otorgado por universidad acreditada, colegiatura profesional ante Copiapia y aval oficial de la SIGET para diseñar y supervisar obras de cualquier potencia y tensión.",
    "technicalBasis": "Ley General de Electricidad y Ley de Ejercicio Profesional de Ingenierías.",
    "distractorRationale": {
      "A": "Correcto. Título de Ingeniero Electricista colegiado ante Copiapia y registrado ante SIGET.",
      "B": "La experiencia empírica en albañilería no acredita conocimientos de ingeniería eléctrica.",
      "C": "Cursos breves no sustituyen una carrera universitaria de ingeniería.",
      "D": "Comercializar materiales no otorga competencias técnicas habilitantes."
    }
  },
  {
    "id": "siget-38",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Regla del 120% en Centros de Carga (NEC 705.12(B)(2))",
    "statement": "En un tablero de distribución existente con barra colectora nominal de 200 A y disyuntor principal de acometida de 150 A, ¿cuál es la capacidad máxima del disyuntor de protección solar fotovoltaica que puede instalarse en el extremo opuesto sin requerir cambio de tablero?",
    "options": {
      "A": "90 A, ya que la regla del 120% permite hasta 1.20 x 200 A = 240 A, y restando el interruptor principal (240 A - 150 A = 90 A).",
      "B": "50 A únicamente.",
      "C": "200 A sin importar el disyuntor principal.",
      "D": "No se puede conectar ninguna fuente solar a un tablero existente."
    },
    "correctAnswer": "A",
    "explanation": "Según el NEC 705.12(B)(2), la corriente combinada de la fuente de red y la fuente solar en el barraje no debe superar el 120% de la ampacidad de la barra: I_main + I_solar <= 1.20 * I_bus. Con I_bus = 200 A, el límite es 240 A. Como I_main = 150 A, la corriente máxima del disyuntor solar es 240 A - 150 A = 90 A.",
    "technicalBasis": "NEC Artículo 705.12(B)(2) (Bus or Conductor Ampere Rating).",
    "distractorRationale": {
      "A": "Correcto. Ecuación: (200 A x 1.2) - 150 A = 240 A - 150 A = 90 A.",
      "B": "50 A es inferior a la capacidad permitida por la regla del 120%.",
      "C": "Instalar 200 A daría una suma de 350 A, sobrecalentando y quemando el barraje de cobre.",
      "D": "La interconexión en el extremo opuesto de tableros existentes es la práctica estándar autorizada."
    }
  },
  {
    "id": "siget-39",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Responsabilidad Legal por Firma de Planos por Terceros (\"Firma por Encargo\")",
    "statement": "¿Qué consecuencia jurídica y administrativa estipula el régimen disciplinario de la SIGET y las leyes penales si un profesional electricista acredita y firma planos solares de una obra que no diseñó ni supervisó personalmente?",
    "options": {
      "A": "Incurre en falta disciplinaria grave que amerita suspensión temporal o cancelación definitiva del carnet SIGET, además de responsabilidad civil solidaria y penal ante siniestros.",
      "B": "No existe sanción alguna porque firmar planos ajenos es una práctica comercial permitida.",
      "C": "Se le entrega un reconocimiento honorífico por agilizar trámites burocráticos.",
      "D": "Únicamente se le exige pagar una multa de diez dólares."
    },
    "correctAnswer": "A",
    "explanation": "Firmar planos o memorias técnicas \"de favor\" o por encargo sin haber participado en el diseño o supervisión directa es una infracción gravísima a la ética y a la Ley de Ejercicio Profesional. Si ocurre un incendio o electrocución en la obra, el firmante responde penalmente por negligencia y civilmente por los daños materiales.",
    "technicalBasis": "Reglamento Disciplinario SIGET y Código Penal de El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Conlleva suspensión o cancelación del carnet SIGET y responsabilidad civil/penal.",
      "B": "Es una falta deontológica y legal sancionada por los tribunales.",
      "C": "Premia una conducta ilícita; absurdo.",
      "D": "Las sanciones incluyen inhabilitación profesional y procesos judiciales formales."
    }
  },
  {
    "id": "siget-40",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Contenido Obligatorio de la Memoria Técnica de Cálculo para UGD",
    "statement": "¿Cuáles son los componentes analíticos indispensables que debe contener la Memoria Técnica de Cálculo presentada a AES o DELSUR para un proyecto solar comercial?",
    "options": {
      "A": "Diagrama unifilar normalizado, cálculo de corrientes continuas máximas (1.56 x Isc), cálculo de caída de tensión en DC y AC, coordinación de protecciones, cálculo de resistencia de puesta a tierra y cuadro de cargas.",
      "B": "Solamente el catálogo publicitario impreso del fabricante del módulo solar.",
      "C": "Una carta de recomendación de la directiva comunal de vecinos.",
      "D": "Fotografías del almuerzo de los instaladores en la obra."
    },
    "correctAnswer": "A",
    "explanation": "Los términos de referencia de la NTCOGD y las distribuidoras exigen una memoria de cálculo formal con ingeniería de detalle: cálculo analítico de ampacidad y caída de tensión, cálculo de cortocircuito, selectividad de fusibles/breakers, diagrama unifilar completo y diseño del sistema de puesta a tierra firmado por técnico autorizado.",
    "technicalBasis": "NTCOGD Art. 14 y Requisitos de Interconexión AES El Salvador / DELSUR.",
    "distractorRationale": {
      "A": "Correcto. La memoria requiere rigor analítico: unifilar, caída de tensión, protecciones y SPT.",
      "B": "Los folletos comerciales no constituyen una memoria técnica de ingeniería.",
      "C": "Las cartas comunales no acreditan cumplimiento de normas electromecánicas.",
      "D": "Distractor humorístico sin validez en un expediente de ingeniería."
    }
  },
  {
    "id": "siget-41",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Interconexión en el Lado de Suministro (Supply-Side Connection - NEC 705.11)",
    "statement": "Cuando un centro de carga existente no cumple con la regla del 120% y no puede ser reemplazado de inmediato, ¿qué solución autorizada contempla el Artículo 705.11 del Código NEC?",
    "options": {
      "A": "Realizar una interconexión en el lado de suministro (Supply-Side Connection) entre el medidor de la distribuidora y el disyuntor principal de acometida, dotada de su propio interruptor termomagnético fusible accesible.",
      "B": "Eliminar el disyuntor principal de la vivienda y puentear directamente los cables.",
      "C": "Conectar el inversor solar al enchufe de la lavadora.",
      "D": "Instalar el inversor dentro del tanque de agua potable de la casa."
    },
    "correctAnswer": "A",
    "explanation": "La conexión en el lado de suministro (Supply-Side Tap) según NEC 705.11 se conecta antes del interruptor principal de servicio pero después del medidor. Esto evita sobrecargar la barra colectora del centro de carga, requiriendo un desconectador con fusibles de servicio y conductores dimensionados para la corriente de cortocircuito de la acometida.",
    "technicalBasis": "NEC Artículo 705.11 (Supply-Side Source Connections).",
    "distractorRationale": {
      "A": "Correcto. El Supply-Side Tap permite interconectar entre medidor e interruptor principal de forma segura.",
      "B": "Puentear la acometida deja el inmueble sin protección contra incendios.",
      "C": "Un tomacorriente no está dimensionado para inyección continua y se sobrecalentaría.",
      "D": "El agua y la electricidad de alta tensión son una combinación letal."
    }
  },
  {
    "id": "siget-42",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Vigencia y Renovación Periódica del Carnet de Electricista SIGET",
    "statement": "¿Cuál es el procedimiento normativo para mantener vigente la acreditación como instalador electricista ante la SIGET?",
    "options": {
      "A": "Renovar periódicamente la credencial cumpliendo con los plazos de vigencia administrativa, acreditando solvencia legal y actualización en normativas vigentes sin registrar sanciones.",
      "B": "El carnet se hereda automáticamente a los descendientes de por vida sin ningún trámite.",
      "C": "Basta con pagar una suscripción en una red social.",
      "D": "No se requiere renovación si el técnico trabaja únicamente de noche."
    },
    "correctAnswer": "A",
    "explanation": "Los carnets de acreditación emitidos por la SIGET tienen una vigencia administrativa temporal. El técnico debe renovar su credencial demostrando que se mantiene activo, sin suspensiones disciplinarias de la junta de vigilancia y al día con las reformas de la NTCOGD y códigos eléctricos aplicables.",
    "technicalBasis": "Reglamento para la Autorización y Registro de Electricistas de la SIGET.",
    "distractorRationale": {
      "A": "Correcto. La renovación periódica garantiza actualización normativa y control disciplinario.",
      "B": "Las credenciales profesionales son personalísimas e intransferibles; no se heredan.",
      "C": "Las redes sociales no tienen vínculo con la potestad pública de la SIGET.",
      "D": "El horario de trabajo no exime del cumplimiento de la vigencia legal."
    }
  },
  {
    "id": "siget-43",
    "category": "electricistas-siget",
    "categoryLabel": "Acreditación y Categorías SIGET",
    "area": "Pruebas Eléctricas Previas a la Recepción de la Distribuidora",
    "statement": "Antes de solicitar la inspección en sitio por parte de las cuadrillas de CAESS o DELSUR, ¿qué ensayos eléctricos previos debe ejecutar y asentar en bitácora el electricista responsable?",
    "options": {
      "A": "Prueba de resistencia de aislamiento en frío con megóhmetro (Megger), verificación de continuidad y equipotencialidad de tierra, comprobación de polaridad en circuito abierto y apriete de bornes con torquímetro.",
      "B": "Golpear los inversores con un mazo para comprobar su solidez mecánica.",
      "C": "Mojar los paneles con agua salada para ver si producen chispas.",
      "D": "Únicamente limpiar los paneles con aromatizante de lavanda."
    },
    "correctAnswer": "A",
    "explanation": "Las pruebas pre-operacionales en frío y caliente son obligatorias. La prueba de aislamiento con megóhmetro a 1000 Vdc certifica que no hay fugas a tierra en los cables PV Wire, la prueba de continuidad garantiza la equipotencialidad estructural y el torquímetro asegura que los bornes no se aflojen por dilatación térmica.",
    "technicalBasis": "Norma IEC 62446-1 (Pruebas y Documentación de Sistemas Fotovoltaicos).",
    "distractorRationale": {
      "A": "Correcto. Pruebas mandatorias: Megóhmetro, continuidad de tierra, polaridad y torqueo.",
      "B": "Los golpes dañarían componentes electrónicos de potencia.",
      "C": "Provocar chispas a propósito es una práctica negligente que causaría cortocircuitos.",
      "D": "La limpieza estética no sustituye a los ensayos de seguridad eléctrica."
    }
  },
  {
    "id": "siget-44",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Procedimiento de Bloqueo y Etiquetado (LOTO) en Mantenimiento Solar",
    "statement": "Al intervenir un inversor fotovoltaico trifásico para labores de mantenimiento correctivo, ¿cuál es la secuencia estricta y segura de desconexión según la norma NFPA 70E?",
    "options": {
      "A": "Desconectar primero el interruptor de corriente alterna (AC), luego abrir el seccionador de corriente continua (DC), esperar la descarga de condensadores, verificar ausencia de tensión con multímetro calibrado y colocar candados y etiquetas LOTO en ambos seccionadores.",
      "B": "Cortar los cables DC con una tenaza mientras los paneles reciben sol intenso.",
      "C": "Apagar primero el interruptor general de la colonia en el poste de media tensión.",
      "D": "Comenzar a aflojar bornes con las manos desnudas sin verificar voltaje."
    },
    "correctAnswer": "A",
    "explanation": "La secuencia de seguridad es vital: primero se interrumpe la corriente alterna para apagar la conmutación del inversor y reducir la corriente DC a cero; luego se abre el seccionador DC en vacío; se espera el tiempo de disipación de condensadores internos (5 a 10 min), se verifica cero voltaje y se colocan candados y tarjetas LOTO.",
    "technicalBasis": "Norma NFPA 70E (Seguridad Eléctrica en Lugares de Trabajo) y OSHA 1910.147.",
    "distractorRationale": {
      "A": "Correcto. Secuencia: Abrir AC -> Abrir DC -> Esperar descarga -> Verificar ausencia de tensión -> Candado LOTO.",
      "B": "Cortar cables bajo carga con sol causaría un arco de plasma y quemaduras severas.",
      "C": "Intervenir el poste público es competencia exclusiva de la distribuidora y es innecesario.",
      "D": "Tocar bornes con condensadores cargados a 600 Vdc causaría electrocución letal."
    }
  },
  {
    "id": "siget-45",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Control de Tensiones de Toque y Paso en Subestaciones y Parques Solares (IEEE 80)",
    "statement": "¿Qué medida constructiva de protección física se implementa en el suelo de subestaciones y parques solares comerciales para mitigar la corriente de choque que atravesaría el cuerpo humano durante una falla a tierra?",
    "options": {
      "A": "Extender una capa superficial de grava o piedra triturada lavada de 10 cm a 15 cm de espesor con alta resistividad eléctrica (> 3,000 ohm-m).",
      "B": "Inundar el terreno con agua salada para mantenerlo fresco.",
      "C": "Instalar alfombras de lana sintética sobre el suelo del parque.",
      "D": "Cubrir el suelo con láminas de aluminio pulido."
    },
    "correctAnswer": "A",
    "explanation": "El Estándar IEEE 80 demuestra que la resistencia de contacto de los pies con el suelo es determinante para la tensión de toque y paso tolerable. La grava triturada seca y limpia posee una resistividad superior a 3,000 ohm-m (frente a 50-100 ohm-m del suelo natural), elevando enormemente la resistencia total del circuito y reduciendo la corriente a niveles fisiológicamente seguros.",
    "technicalBasis": "Estándar IEEE 80-2013 (Guide for Safety in AC Substation Grounding).",
    "distractorRationale": {
      "A": "Correcto. La grava triturada proporciona alta resistividad superficial protegiendo contra tensiones de toque.",
      "B": "El agua salada reduciría drásticamente la resistencia haciendo letal cualquier falla.",
      "C": "Las alfombras de lana no resisten intemperie ni tienen propiedades normalizadas de alta resistividad para subestaciones.",
      "D": "Láminas metálicas crearían una superficie conductora mortal ante una falla a tierra."
    }
  },
  {
    "id": "siget-46",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Protección contra Sobretensiones Transitorias (DPS / SPD) Tipo 1 vs Tipo 2",
    "statement": "En regiones de El Salvador con alta densidad de descargas atmosféricas (como Sonsonate, Ahuachapán o Santa Ana), ¿dónde debe coordinarse la instalación de supresores de sobretensiones transitorias DPS Tipo 1 y Tipo 2?",
    "options": {
      "A": "DPS Tipo 1 en la acometida principal para desviar corrientes directas de rayo (onda 10/350 us), y DPS Tipo 2 en tableros secundarios y en las entradas DC del inversor para suprimir sobretensiones inducidas (onda 8/20 us).",
      "B": "Instalar DPS únicamente en la antena de televisión de la vivienda.",
      "C": "Los DPS solo se instalan en países donde cae nieve.",
      "D": "No se requieren DPS si la casa tiene seguro contra incendios."
    },
    "correctAnswer": "A",
    "explanation": "La coordinación de DPS en cascada es fundamental: el DPS Tipo 1 en el punto de entrada absorbe la energía masiva de rayos directos o sobretensiones de la red pública, mientras que los DPS Tipo 2 situados en tableros derivados y entradas fotovoltaicas recortan el remanente de tensión a niveles seguros para la electrónica sensible.",
    "technicalBasis": "Normas IEC 61643-11, IEC 61643-31 y Código NEC Art. 242 y 690.",
    "distractorRationale": {
      "A": "Correcto. Coordinación en cascada: Tipo 1 en acometida y Tipo 2 en tableros secundarios e inversor.",
      "B": "El DPS de antena no protege las líneas de potencia de la instalación eléctrica.",
      "C": "El Salvador tiene un índice ceráunico tropical muy alto que exige protección rigurosa contra rayos.",
      "D": "El seguro financiero no previene la destrucción física de los equipos ni siniestros."
    }
  },
  {
    "id": "siget-47",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Riesgo de Tensión Residual en Condensadores del Bus DC del Inversor",
    "statement": "Tras abrir los interruptores de desconexión en AC y DC de un inversor solar fotovoltaico, ¿por qué es obligatorio esperar un tiempo prudencial de 5 a 10 minutos antes de retirar las tapas frontales para tocar los bornes?",
    "options": {
      "A": "Porque el banco de condensadores electrolíticos del bus DC almacena energía residual a cientos de voltios que requiere varios minutos para disiparse a través de las resistencias de purga internas.",
      "B": "Para que los paneles solares se enfríen por completo antes del almuerzo.",
      "C": "Porque el microprocesador del inversor continúa transmitiendo datos a satélites.",
      "D": "Porque las placas de circuito impreso se evaporan si se destapan rápidamente."
    },
    "correctAnswer": "A",
    "explanation": "Los condensadores del bus DC filtran la tensión continua a valores de entre 400 V y 800 V. Aunque los interruptores externos se abran, los condensadores retienen carga eléctrica potencialmente letal. Las normas exigen resistencias de descarga interna (Bleeder Resistors) calculadas para drenar la energía a menos de 50 V en 5 a 10 minutos.",
    "technicalBasis": "Estándar UL 1741 y Manuales de Seguridad de Inversores Fotovoltaicos.",
    "distractorRationale": {
      "A": "Correcto. Los condensadores del bus DC retienen cientos de voltios que requieren minutos de purga.",
      "B": "El enfriamiento térmico exterior no es el motivo de seguridad eléctrica vital.",
      "C": "La comunicación telemétrica no genera descargas eléctricas directas en bornes de potencia.",
      "D": "Afirmación ficticia sin sustento físico."
    }
  },
  {
    "id": "siget-48",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Equipotencialidad de Marcos y Corrosión Galvánica (Grapas WEEB)",
    "statement": "¿Qué ventaja técnica fundamental aporta el uso de arandelas y grapas de puesta a tierra WEEB de acero inoxidable en la fijación de paneles con marco de aluminio sobre rieles de montaje?",
    "options": {
      "A": "Penetran mecánicamente la capa aislante de óxido de aluminio anodizado garantizando continuidad eléctrica permanente y previenen la corrosión galvánica entre metales disímiles.",
      "B": "Aumentan el reflejo de la luz solar hacia el espacio.",
      "C": "Evitan que las aves aniden debajo de los paneles.",
      "D": "Convierten la corriente continua en corriente trifásica directamente en el marco."
    },
    "correctAnswer": "A",
    "explanation": "El aluminio al exponerse al aire forma espontáneamente una capa superficial de alúmina (óxido de aluminio) no conductora. Las grapas WEEB (Washer, Electrical Equipment Bond) tienen resaltes afilados que muerden y perforan esta capa durante el torqueo, asegurando una unión equipotencial hermética certificada bajo UL 467 sin degradarse por corrosión.",
    "technicalBasis": "NEC Artículo 690.43 y Norma UL 467 (Grounding and Bonding Equipment).",
    "distractorRationale": {
      "A": "Correcto. Las grapas WEEB perforan el anodizado aislante y previenen corrosión galvánica.",
      "B": "Las grapas quedan ocultas bajo el marco; no afectan la reflexión óptica.",
      "C": "El control de aves requiere mallas perimetrales anti-palomas, no grapas eléctricas.",
      "D": "La conversión DC/AC es función del inversor, no de una pieza de montaje mecánico."
    }
  },
  {
    "id": "siget-49",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Física del Arco Eléctrico en Corriente Continua frente a Corriente Alterna",
    "statement": "¿Por qué un arco eléctrico generado en un circuito solar fotovoltaico de 600 Vdc es considerablemente más difícil de extinguir y más propenso a causar incendios que uno de corriente alterna a 600 Vac?",
    "options": {
      "A": "Porque la corriente continua no posee cruces naturales por cero de la onda senoidal, sosteniendo un canal de plasma ionizado continuo y estable a más de 3,000 °C.",
      "B": "Porque los paneles solares atraen el aire frío del ambiente.",
      "C": "Porque la corriente alterna no tiene voltaje suficiente para quemar.",
      "D": "Porque la corriente continua contiene sustancias químicas inflamables en el cable."
    },
    "correctAnswer": "A",
    "explanation": "A 60 Hz, la onda senoidal de corriente alterna pasa por cero 120 veces por segundo, lo que desioniza periódicamente el aire y facilita la autoextinción del arco al abrirse los contactos. En corriente continua el flujo es unidireccional y continuo; una vez iniciado el arco, se mantiene alimentado por la radiación solar permanente como una soldadora eléctrica de arco continuo.",
    "technicalBasis": "Física del Arco Eléctrico y Norma NFPA 70E.",
    "distractorRationale": {
      "A": "Correcto. La ausencia de cruce por cero en DC mantiene la columna de plasma ionizada y caliente.",
      "B": "La temperatura del aire circundante no altera el principio electromagnético del arco.",
      "C": "La corriente alterna a 600 V es sumamente peligrosa, pero su arco es más fácil de interrumpir.",
      "D": "Los conductores transportan electrones, no sustancias químicas inflamables."
    }
  },
  {
    "id": "siget-50",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Equipo de Protección Personal (EPP) según Norma NFPA 70E",
    "statement": "Para medir parámetros eléctricos en un tablero combinador de corriente continua que opera a 600 Vdc y 40 A, ¿cuál es el Equipo de Protección Personal (EPP) dieléctrico mínimo obligatorio para el electricista según NFPA 70E?",
    "options": {
      "A": "Guantes dieléctricos Clase 0 (probados para 1,000 V) con protectores de cuero, gafas de seguridad con filtro UV, careta de protección facial contra arco eléctrico (Arc Flash) y calzado dieléctrico con suela aislante.",
      "B": "Gorra deportiva de tela, sandalias de playa y reloj metálico en la muñeca.",
      "C": "Únicamente guantes de tela de jardinería sin aislamiento certificado.",
      "D": "Ropa de poliéster inflamable con anillos metálicos en los dedos."
    },
    "correctAnswer": "A",
    "explanation": "La norma NFPA 70E exige EPP categorizado contra choque y relámpago de arco (Arc Flash). Para tensiones de hasta 1,000 Vdc se requieren guantes de hule dieléctricos Clase 0 con cubre-guantes de cuero contra desgarros mecánicos, careta con clasificación cal/cm² adecuada, calzado dieléctrico y prohibición absoluta de portar joyas o accesorios metálicos.",
    "technicalBasis": "Norma NFPA 70E Tabla 130.5 y Tabla 130.7(C)(14).",
    "distractorRationale": {
      "A": "Correcto. Guantes dieléctricos Clase 0, careta Arc Flash, gafas UV y calzado dieléctrico.",
      "B": "Las sandalias y joyas metálicas garantizan electrocución y quemaduras graves.",
      "C": "Los guantes de tela se queman y no aíslan el voltaje de 600 Vdc.",
      "D": "El poliéster se derrite sobre la piel ante el calor radiante de un arco eléctrico."
    }
  },
  {
    "id": "siget-51",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Medición de Resistencia de Puesta a Tierra por Método de Caída de Potencial",
    "statement": "Al medir la resistencia de la varilla de puesta a tierra de una planta fotovoltaica mediante un telurómetro de 3 picas por el Método del 62% (Fall-of-Potential), ¿cómo deben disponerse en el terreno las picas auxiliares de corriente y potencial?",
    "options": {
      "A": "Alineadas en línea recta desde el electrodo bajo prueba (E), ubicando la pica auxiliar de corriente (C) a una distancia D (típicamente 20-30 metros) y la pica de potencial (P) al 62% de dicha distancia (0.62 x D).",
      "B": "Colocando las tres picas pegadas a menos de 5 centímetros de la varilla principal.",
      "C": "Tirando las picas dentro de un cubo con agua.",
      "D": "Conectando las picas al cable de la antena de internet de la oficina."
    },
    "correctAnswer": "A",
    "explanation": "El método del 62% se basa en la teoría matemática de curvas de equipotencialidad esférica de electrodos hemisféricos. Cuando la pica de potencial se ubica al 61.8% (aprox. 62%) de la distancia total hacia la pica de corriente en línea recta, se sitúa exactamente en la zona plana de resistencia neta nula entre las áreas de resistencia de ambos electrodos, arrojando la lectura real de tierra.",
    "technicalBasis": "Estándar IEEE 81 (Guide for Measuring Earth Resistivity and Ground Impedance).",
    "distractorRationale": {
      "A": "Correcto. Método del 62%: Pica de corriente a distancia D y pica de potencial a 0.62 x D.",
      "B": "Colocarlas pegadas provocaría solapamiento de conos de resistencia y lecturas falsas cercanas a cero.",
      "C": "Un cubo con agua aísla las picas del suelo geológico real.",
      "D": "Conectar a la antena de internet destruiría los routers y carece de validez metrológica."
    }
  },
  {
    "id": "siget-52",
    "category": "seguridad-operativa",
    "categoryLabel": "Seguridad Ocupacional & Maniobras",
    "area": "Tiempo de Despeje Anti-Isla ante Subfrecuencia Crítica (IEEE 1547)",
    "statement": "Durante una perturbación en el sistema eléctrico nacional salvadoreño donde la frecuencia cae de 60.0 Hz a menos de 57.0 Hz (zona de subfrecuencia severa UF2), ¿cuál es el tiempo de despeje máximo en el cual el inversor debe cesar de inyectar energía a la red según el estándar IEEE 1547?",
    "options": {
      "A": "Menor o igual a 0.16 segundos (160 milisegundos / menos de 10 ciclos).",
      "B": "Hasta 15 minutos continuos.",
      "C": "Exactamente 24 horas después del evento.",
      "D": "El inversor nunca debe apagarse ante caídas de frecuencia."
    },
    "correctAnswer": "A",
    "explanation": "La norma IEEE 1547 Tabla 1 (Under-Frequency Level 2) impone que ante una caída severa de frecuencia por debajo de 57.0 Hz, el inversor debe interrumpir la inyección en un tiempo no mayor a 0.16 segundos (160 ms). Esto previene que los generadores distribuidos sostengan islas inestables o empeoren el colapso de frecuencia de la red nacional.",
    "technicalBasis": "Estándar IEEE 1547-2018 Tabla 1 y NTCOGD Art. 21.",
    "distractorRationale": {
      "A": "Correcto. Para UF2 (f < 57.0 Hz) el tiempo de despeje normativo es <= 0.16 segundos.",
      "B": "15 minutos desestabilizaría toda la red de distribución.",
      "C": "24 horas es un absurdo para una protección de frecuencia eléctrica.",
      "D": "No apagarse provocaría daños severos en transformadores y riesgo de isla."
    }
  }
];
