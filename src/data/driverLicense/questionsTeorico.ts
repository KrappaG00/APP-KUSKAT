/**
 * Banco Oficial Teórico de Examen de Conducir VMT (El Salvador)
 * Unidades 1 a 9: Marco Legal (D.L. 477 / D.E. 61), Señalización SIECA, Prioridades,
 * Velocidades, Manejo Defensivo, Seguridad Activa/Pasiva, Cero Tolerancia (D.L. 185/2025 / Art. 147-E CP),
 * Emergencias / FONAT y Carga Pesada / Cabezales (D.E. 23 / Licencia Pesada T).
 * >= 350 preguntas de opción múltiple (A, B, C, D) con fundamentación y análisis de distractores.
 */

import { DriverQuestion } from './types';

export const DRIVER_THEORY_QUESTIONS: DriverQuestion[] = [
  {
    id: 'vmt-q01',
    category: 'teorico',
    topic: 'Entidades Rectoras y Fiscalización Vial',
    question: 'En El Salvador, ¿cuál es la entidad facultada constitucionalmente para fiscalizar el tránsito en la vía pública e imponer esquelas de infracción?',
    statement: 'En El Salvador, ¿cuál es la entidad facultada constitucionalmente para fiscalizar el tránsito en la vía pública e imponer esquelas de infracción?',
    options: [
      'La División de Tránsito Terrestre de la Policía Nacional Civil (PNC-DTT).',
      'El Cuerpo de Agentes Metropolitanos (CAM) de cada alcaldía en toda carretera.',
      'Únicamente los evaluadores administrativos del organismo evaluador autorizado en sus oficinas.',
      'El Ministerio de Hacienda a través de la Dirección General de Aduanas.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La Ley de Transporte Terrestre, Tránsito y Seguridad Vial otorga a la División de Tránsito Terrestre de la PNC la potestad legal exclusiva para ejercer el control operativo en las vías públicas y sancionar infracciones.',
    distractorRationale: {
      A: 'La PNC-DTT tiene competencia nacional exclusiva para fiscalizar la vía pública e imponer esquelas de tránsito.',
      B: 'El CAM solo ejerce funciones de ordenamiento municipal local, sin competencia en carreteras nacionales ni régimen sancionatorio VMT.',
      C: 'El organismo evaluador autorizado aplica exámenes de aptitud para emitir licencias, pero no fiscaliza la circulación en carreteras.',
      D: 'La Dirección General de Aduanas controla mercancías e impuestos fronterizos, no infracciones de tránsito.'
    },
    legalReference: 'Ley de Transporte Terrestre, Tránsito y Seguridad Vial Art. 6 y Art. 115.'
  },
  {
    id: 'vmt-q02',
    category: 'teorico',
    topic: 'Capacidad Máxima de Licencia Particular',
    question: 'Conforme al Art. 155-A del D.E. 61, ¿cuál es la capacidad máxima de pasajeros y tonelaje que autoriza la Licencia Particular en El Salvador?',
    statement: 'Conforme al Art. 155-A del D.E. 61, ¿cuál es la capacidad máxima de pasajeros y tonelaje que autoriza la Licencia Particular en El Salvador?',
    options: [
      'Hasta 30 pasajeros y 5.0 toneladas métricas de carga comercial.',
      'Hasta 15 pasajeros y/o un máximo estricto de 3.5 toneladas métricas de capacidad.',
      'Hasta 12.0 toneladas en automotores de dos ejes rígidos.',
      'No tiene límite de peso siempre que el vehículo no sea articulado.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El Art. 155-A del Reglamento General de Tránsito y Seguridad Vial (D.E. 61) estipula que la Licencia Particular ampara automotores de uso privado de hasta 15 pasajeros y/o hasta 3.5 toneladas de capacidad.',
    distractorRationale: {
      A: 'El límite de hasta 30 pasajeros y hasta 5.0 toneladas corresponde a la Licencia Liviana, no a la Particular.',
      B: 'El Art. 155-A del D.E. 61 fija exactamente hasta 15 pasajeros y/o hasta 3.5 toneladas para la Licencia Particular.',
      C: 'Los vehículos rígidos superiores a 5 toneladas y hasta 12 toneladas requieren Licencia Pesada.',
      D: 'Todas las categorías de licencia tienen límites estrictos de peso y capacidad establecidos por el reglamento.'
    },
    legalReference: 'Reglamento General de Tránsito y Seguridad Vial (D.E. 61) Art. 155-A.'
  },
  {
    id: 'vmt-q03',
    category: 'teorico',
    topic: 'Requisitos y Condiciones de Licencia Juvenil',
    question: '¿Qué condición jurídica es indispensable para que un menor de 15 a 17 años obtenga la Licencia Juvenil de automóvil en El Salvador?',
    statement: '¿Qué condición jurídica es indispensable para que un menor de 15 a 17 años obtenga la Licencia Juvenil de automóvil en El Salvador?',
    options: [
      'Presentar constancia de matrícula universitaria y récord de calificaciones limpias.',
      'Acreditar propiedad absoluta del vehículo registrado a su nombre personal.',
      'Autorización expresa y fianza solidaria civil otorgada por los padres o tutores legales.',
      'Aprobar únicamente el examen práctico de maniobras sin someterse al teórico.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La ley exige para la Licencia Juvenil la autorización formal de los padres o tutores mediante escritura pública con fianza solidaria para responder por posibles responsabilidades civiles frente a terceros.',
    distractorRationale: {
      A: 'El historial académico universitario no es un requisito legal ni sustituye la responsabilidad civil parental.',
      B: 'El menor no necesita ser propietario registral del vehículo para tramitar la habilitación juvenil.',
      C: 'La autorización notarial y fianza solidaria de padres o tutores garantizan la cobertura civil por daños a terceros.',
      D: 'Todo aspirante debe aprobar obligatoriamente los exámenes visual, teórico y práctico ante el organismo evaluador.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155 y Art. 155-A.'
  },
  {
    id: 'vmt-q04',
    category: 'teorico',
    topic: 'Habilitación de Licencia Pesada T',
    question: '¿Para qué tipo específico de transporte terrestre faculta de forma exclusiva la Licencia Pesada T (Articulada)?',
    statement: '¿Para qué tipo específico de transporte terrestre faculta de forma exclusiva la Licencia Pesada T (Articulada)?',
    options: [
      'Autobuses de turismo interdepartamental de un solo cuerpo rígido.',
      'Microbuses de transporte escolar de hasta quince pasajeros.',
      'Camiones de volteo liviano de hasta cinco toneladas métricas.',
      'Tractocamiones, cabezales y combinaciones de vehículos con semirremolques articulados.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La Licencia Pesada T (Articulada) es la categoría profesional que autoriza legalmente la operación de cabezales y combinaciones articuladas de carga pesada.',
    distractorRationale: {
      A: 'Los autobuses rígidos se operan con Licencia Pesada estándar sin requerir la categoría articulada T.',
      B: 'Los microbuses de hasta quince pasajeros pueden conducirse con Licencia Particular o Liviana según servicio.',
      C: 'Un camión liviano de hasta cinco toneladas corresponde al ámbito de la Licencia Liviana.',
      D: 'La categoría Pesada T habilita de forma exclusiva la conducción de cabezales y trenes articulados con semirremolque.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155-A; D.E. 23.'
  },
  {
    id: 'vmt-q05',
    category: 'teorico',
    topic: 'Vigencia de Licencia Extranjera para Turistas',
    question: '¿Durante cuánto tiempo puede un extranjero o turista circular válidamente en El Salvador con la licencia de conducir vigente de su país de origen?',
    statement: '¿Durante cuánto tiempo puede un extranjero o turista circular válidamente en El Salvador con la licencia de conducir vigente de su país de origen?',
    options: [
      'Hasta un plazo máximo de noventa (90) días continuos desde su fecha de ingreso.',
      'De forma indefinida mientras la visa de turista no caduque.',
      'Únicamente durante las primeras setenta y dos horas en territorio nacional.',
      'Durante un año calendario completo renovable automáticamente en frontera.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Reglamento General de Tránsito reconoce la validez de licencias extranjeras a personas en calidad de turistas por un período máximo de 90 días contados desde su entrada al país.',
    distractorRationale: {
      A: 'El plazo improrrogable de reconocimiento para turistas con licencia extranjera vigente es de 90 días desde el ingreso.',
      B: 'La validez no es indefinida; al superar los 90 días o adquirir residencia debe tramitarse la homologación.',
      C: 'Setenta y dos horas es un plazo arbitrario inexistente en la normativa migratoria y vial salvadoreña.',
      D: 'La ley no contempla prórrogas automáticas anuales en frontera para licencias extranjeras.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 93.'
  },
  {
    id: 'vmt-q06',
    category: 'teorico',
    topic: 'Consecuencias de Conducir con Licencia Vencida',
    question: 'Si un conductor circula con una licencia de conducir cuya vigencia expiró y protagoniza un siniestro vial, ¿cuál es el efecto asegurativo y legal inmediato?',
    statement: 'Si un conductor circula con una licencia de conducir cuya vigencia expiró y protagoniza un siniestro vial, ¿cuál es el efecto asegurativo y legal inmediato?',
    options: [
      'El seguro cubre automáticamente si el vencimiento es menor a seis meses.',
      'La aseguradora puede declinar la cobertura y el conductor asume la responsabilidad civil directa.',
      'Se le exime de responsabilidad por tratarse de un simple error administrativo.',
      'Únicamente debe cancelar una esquela leve y el trámite sigue su curso ordinario.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Conducir con licencia vencida invalida las condiciones de idoneidad estipuladas en las pólizas de seguros, facultando a la aseguradora para declinar la cobertura de daños y responsabilizando civilmente al infractor.',
    distractorRationale: {
      A: 'Las pólizas de seguro no contemplan períodos de gracia de seis meses para licencias vencidas.',
      B: 'Al caducar la habilitación legal, se incumple la cláusula de conductor autorizado, permitiendo a la aseguradora rechazar el reclamo.',
      C: 'La caducidad del título habilitante nunca exime de responsabilidad civil ni administrativa al conductor.',
      D: 'Además de la sanción administrativa vigente, el impacto patrimonial y asegurativo recae directamente sobre el infractor.'
    },
    legalReference: 'Ley de Transporte Terrestre Art. 35 y Art. 42.'
  },
  {
    id: 'vmt-q08',
    category: 'teorico',
    topic: 'Clasificación de Señales Amarillas en Rombo',
    signId: 'sign-p1',
    question: '¿Qué función oficial cumplen las señales viales de fondo amarillo con forma de rombo o diamante según el Manual SIECA?',
    statement: '¿Qué función oficial cumplen las señales viales de fondo amarillo con forma de rombo o diamante según el Manual SIECA?',
    options: [
      'Notificar órdenes y restricciones de cumplimiento forzoso bajo pena de multa.',
      'Orientar sobre kilometraje, servicios turísticos y gasolineras próximas en carretera.',
      'Advertir anticipadamente sobre riesgos físicos, curvas o peligros en la calzada (Preventivas).',
      'Identificar la nomenclatura de calles y rutas de transporte colectivo en el área metropolitana.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Las señales romboidales de fondo amarillo son Señales Preventivas (Serie P), cuyo objeto es avisar al conductor con suficiente antelación sobre condiciones geométricas o peligros en la vía.',
    distractorRationale: {
      A: 'Las órdenes y restricciones imperativas corresponden a las Señales Reglamentarias (Serie R), de fondo blanco y orla roja.',
      B: 'La orientación sobre servicios y distancias pertenece a las Señales Informativas (Serie I), rectangulares de fondo azul o verde.',
      C: 'El rombo amarillo identifica la Serie P (Preventivas), diseñada para alertar riesgos geométricos u operativos adelante.',
      D: 'La nomenclatura urbana y rutas corresponden a señalización informativa de destino y tránsito.'
    },
    legalReference: 'Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito (SIECA) Serie P.'
  },
  {
    id: 'vmt-q09',
    category: 'teorico',
    topic: 'Señalización de Doble Línea Continua Amarilla',
    signId: 'sign-h1',
    question: '¿Qué significa la demarcación de doble línea continua amarilla sobre el pavimento en una carretera de dos sentidos?',
    statement: '¿Qué significa la demarcación de doble línea continua amarilla sobre el pavimento en una carretera de dos sentidos?',
    options: [
      'Zona autorizada para adelantamiento rápido si no viene tráfico a menos de 50 metros.',
      'Carril exclusivo para virajes hacia la izquierda de ambos sentidos a la vez.',
      'Área de estacionamiento de emergencia en horas nocturnas con intermitentes activas.',
      'Prohibición estricta e infranqueable de rebasar o invadir el sentido opuesto desde ambos carriles.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La doble línea continua amarilla actúa como una barrera legal absoluta que prohíbe el adelantamiento y el cambio de carril con invasión del sentido contrario en ambos sentidos de circulación.',
    distractorRationale: {
      A: 'El adelantamiento solo se permite donde la línea central es discontinua (segmentada) y existe visibilidad plena.',
      B: 'Los carriles centrales de giro utilizan demarcación específica con flechas convergentes, no doble línea continua.',
      C: 'El eje central de la calzada jamás es un área de estacionamiento; detenerse allí provoca colisiones frontales.',
      D: 'La doble línea continua amarilla prohíbe cruzarla o rebasar desde cualquiera de los dos sentidos de circulación.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 128 y Art. 165.'
  },
  {
    id: 'vmt-q10',
    category: 'teorico',
    topic: 'Significado de Semáforo con Luz Roja Intermitente',
    signId: 'sign-r1',
    question: 'Al aproximarse a un semáforo que opera con luz roja intermitente, ¿cuál es la maniobra reglamentaria que debe ejecutar el conductor?',
    statement: 'Al aproximarse a un semáforo que opera con luz roja intermitente, ¿cuál es la maniobra reglamentaria que debe ejecutar el conductor?',
    options: [
      'Efectuar una detención total obligatoria y avanzar únicamente cuando la vía esté despejada.',
      'Desacelerar ligeramente a 30 km/h y cruzar con la luz intermitente si no se observa tráfico.',
      'Acelerar para despejar la intersección antes de que el semáforo cambie a fase fija.',
      'Tocar el claxon para advertir a los conductores transversales y conservar el paso.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La luz roja intermitente equivale exactamente a una señal de Alto (R-1): detención absoluta de las 4 ruedas antes de la línea de parada y reanudación de la marcha tras cerciorarse del paso libre.',
    distractorRationale: {
      A: 'La luz roja intermitente equivale legalmente a una señal de Alto: exige detención total antes de continuar.',
      B: 'Solo la luz amarilla intermitente permite cruzar con precaución sin detenerse totalmente; la roja obliga a parar.',
      C: 'Acelerar ante una luz roja intermitente viola el deber de detención y expone a impactos laterales graves.',
      D: 'El uso de la bocina no otorga preferencia de paso ni sustituye la obligación de detener el vehículo.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 140, numeral 2.'
  },
  {
    id: 'vmt-q11',
    category: 'teorico',
    topic: 'Regla del Cajón Amarillo en Intersecciones',
    signId: 'sign-h6',
    question: '¿Qué prohíbe de forma terminante la cuadrícula o cajón amarillo marcado en el pavimento de una intersección semaforizada?',
    statement: '¿Qué prohíbe de forma terminante la cuadrícula o cajón amarillo marcado en el pavimento de una intersección semaforizada?',
    options: [
      'Efectuar giros hacia la derecha durante el día.',
      'Detenerse u obstruir el área de cruce vehicular, aun cuando el semáforo esté en verde.',
      'El paso de motocicletas y vehículos livianos de transporte privado.',
      'El frenado progresivo cuando llueve sobre la calzada.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El cajón amarillo prohíbe quedar detenido dentro de la intersección. Si el conductor prevé que no podrá despejar el cruce debido al tráfico congestionado, debe esperar detrás de la línea de parada.',
    distractorRationale: {
      A: 'Los giros permitidos por la vía no están prohibidos por el cajón amarillo, sino la detención sobre la cuadrícula.',
      B: 'El cajón amarillo impide bloquear el cruce cuando la vía adelante está saturada, aun teniendo luz verde.',
      C: 'Toda categoría de vehículo puede atravesar el cajón amarillo siempre que pueda despejarlo sin detenerse dentro.',
      D: 'La demarcación horizontal regula la ocupación de la intersección, no la técnica de frenado en lluvia.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 128; Manual Centroamericano SIECA.'
  },
  {
    id: 'vmt-q12',
    category: 'teorico',
    topic: 'Prelación Jerárquica de Dispositivos Viales',
    question: 'Si en un cruce semaforizado la luz está en verde pero un agente de la PNC-DTT ordena detenerse con el brazo en alto, ¿qué señal prevalece?',
    statement: 'Si en un cruce semaforizado la luz está en verde pero un agente de la PNC-DTT ordena detenerse con el brazo en alto, ¿qué señal prevalece?',
    options: [
      'La luz verde del semáforo porque es un dispositivo electromecánico automatizado.',
      'La decisión que tome la mayoría de vehículos que van en el pelotón delantero.',
      'La orden presencial del agente de tránsito, que tiene primacía sobre semáforos y señales fijas.',
      'Ninguna, el conductor debe avanzar a velocidad reducida con luces de emergencia.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'En la jerarquía vial salvadoreña, las órdenes presenciales e indicaciones directas de los agentes de la autoridad de tránsito prevalecen de forma absoluta sobre cualquier dispositivo semafórico o vertical.',
    distractorRationale: {
      A: 'Los semáforos ocupan un rango inferior en la jerarquía vial frente a la autoridad presencial de la PNC-DTT.',
      B: 'El comportamiento de otros conductores nunca deroga la obligación de acatar las órdenes de un agente de tránsito.',
      C: 'Las indicaciones del agente de tránsito ocupan el peldaño supremo y prevalecen sobre semáforos y señales.',
      D: 'Avanzar ignorando la señal de alto del agente constituye desobediencia a la autoridad vial.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 115 y Art. 118.'
  },
  {
    id: 'vmt-q13',
    category: 'teorico',
    topic: 'Señalización de Cordón Rojo de Calzada',
    signId: 'sign-h5',
    question: '¿Qué restricción imperativa indica el cordón de acera pintado de color rojo continuo en vías urbanas de El Salvador?',
    statement: '¿Qué restricción imperativa indica el cordón de acera pintado de color rojo continuo en vías urbanas de El Salvador?',
    options: [
      'Permite estacionar por un lapso no mayor a quince minutos con intermitentes.',
      'Zona reservada exclusivamente para carga y descarga en horario comercial.',
      'Área de estacionamiento tarifado mediante parquímetros municipales.',
      'Prohibición total y absoluta de estacionar y detenerse las 24 horas del día.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El cordón rojo continuo señala prohibición terminante de estacionamiento y parada vehicular permanente; el vehículo infractor puede ser remitido con grúa al predio de retención.',
    distractorRationale: {
      A: 'Las luces intermitentes no autorizan a estacionar ni detenerse en zonas demarcadas con cordón rojo.',
      B: 'Las zonas de carga y descarga se identifican con demarcación amarilla o blanca específica, nunca roja.',
      C: 'El estacionamiento regulado o tarifado utiliza demarcación blanca o azul, no roja.',
      D: 'El cordón rojo continuo prohíbe de manera absoluta estacionar y detenerse en cualquier horario.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 144 y Art. 180.'
  },
  {
    id: 'vmt-q14',
    category: 'teorico',
    topic: 'Luz Amarilla Fija en Semáforo',
    signId: 'sign-p9',
    question: '¿Cuál es la conducta reglamentaria correcta al encenderse la luz amarilla fija del semáforo si aún no se ha ingresado a la intersección?',
    statement: '¿Cuál es la conducta reglamentaria correcta al encenderse la luz amarilla fija del semáforo si aún no se ha ingresado a la intersección?',
    options: [
      'Detener el vehículo de forma segura antes de la línea de parada sin provocar colisión trasera.',
      'Acelerar a fondo para cruzar rápidamente antes de que se encienda la luz roja.',
      'Continuar a la misma velocidad tocando el claxon para advertir a los peatones.',
      'Efectuar un viraje obligatorio hacia la derecha para no detener el flujo.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La luz amarilla advierte el inminente cambio a luz roja. El conductor debe detenerse antes de la línea de cruce peatonal siempre que pueda hacerlo de manera segura sin frenar de forma intempestiva.',
    distractorRationale: {
      A: 'La luz amarilla fija ordena detenerse antes de la intersección cuando exista distancia segura para frenar.',
      B: 'Acelerar ante la luz amarilla suele provocar ingresos en luz roja y colisiones laterales en el cruce.',
      C: 'El claxon no autoriza a ignorar la transición semafórica ni pone en pausa el flujo peatonal.',
      D: 'No existe obligación de girar a la derecha ante la luz amarilla; la regla general es detenerse antes de la línea.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 140, numeral 1.'
  },
  {
    id: 'vmt-q15',
    category: 'teorico',
    topic: 'Prioridad de Paso en Redondeles o Rotondas',
    signId: 'sign-p36',
    question: 'Al aproximarse a un redondel o rotonda de varios carriles en El Salvador, ¿quién tiene legalmente la prioridad de paso?',
    statement: 'Al aproximarse a un redondel o rotonda de varios carriles en El Salvador, ¿quién tiene legalmente la prioridad de paso?',
    options: [
      'El vehículo que intenta ingresar circulando a mayor velocidad por la avenida.',
      'El vehículo que ya se encuentra circulando dentro del anillo del redondel.',
      'Siempre el automotor que se incorpora desde el carril derecho exterior.',
      'El vehículo de mayor tonelaje independientemente de su posición relativa.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El Artículo 168 del Reglamento General de Tránsito establece que los vehículos que ya circulan dentro del redondel gozan de prioridad absoluta de paso sobre aquellos que pretenden incorporarse.',
    distractorRationale: {
      A: 'La velocidad de aproximación no otorga prioridad; quien ingresa debe ceder el paso al anillo.',
      B: 'El Art. 168 del Reglamento concede preferencia absoluta a quienes ya circulan dentro de la rotonda.',
      C: 'El carril de ingreso debe respetar la señal de Ceda el Paso antes de entrar al redondel.',
      D: 'La prioridad vial en rotondas se rige por la posición en el anillo, no por el peso del vehículo.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 168.'
  },
  {
    id: 'vmt-q16',
    category: 'teorico',
    topic: 'Uso de Carriles en Salida de Redondel',
    question: 'Para abandonar una rotonda multicarril de manera segura y reglamentaria, ¿qué maniobra debe ejecutar el conductor?',
    statement: 'Para abandonar una rotonda multicarril de manera segura y reglamentaria, ¿qué maniobra debe ejecutar el conductor?',
    options: [
      'Cortar transversalmente todos los carriles desde el anillo interno en el último segundo.',
      'Girar a la derecha desde cualquier carril interior sin necesidad de activar direccionales.',
      'Posicionarse con anticipación en el carril exterior derecho y activar la direccional derecha.',
      'Detenerse por completo dentro del anillo central y esperar a que el redondel quede vacío.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Para salir de una rotonda se debe haber alcanzado con antelación el carril exterior derecho, señalizando la maniobra de salida con la luz direccional derecha para no interceptar a otros usuarios.',
    distractorRationale: {
      A: 'Cruzar carriles de golpe desde el anillo interno genera choques laterales contra quienes continúan girando.',
      B: 'Abandonar el redondel sin posicionarse en el carril exterior ni usar direccional infringe las normas de giro.',
      C: 'Cambiar oportunamente al carril exterior derecho con direccional derecha garantiza una salida fluida y segura.',
      D: 'Detenerse dentro del anillo central obstruye el flujo prioritario y provoca colisiones por alcance.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 168 y Art. 169.'
  },
  {
    id: 'vmt-q17',
    category: 'teorico',
    topic: 'Prioridad en Intersección sin Señalización',
    question: 'En un cruce urbano de dos calles de idéntica jerarquía sin semáforo ni señales de Alto, ¿qué vehículo tiene la preferencia de paso?',
    statement: 'En un cruce urbano de dos calles de idéntica jerarquía sin semáforo ni señales de Alto, ¿qué vehículo tiene la preferencia de paso?',
    options: [
      'El vehículo que circule a mayor velocidad en ese instante.',
      'El vehículo que pretenda realizar un viraje hacia la izquierda.',
      'El vehículo que tenga el modelo más reciente o mayor tamaño.',
      'El vehículo que se aproxima por el lado derecho del conductor.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'En intersecciones no reguladas de vías equivalentes, rige la regla general de preferencia a la derecha: el conductor debe ceder el paso a cualquier vehículo que se aproxime por su derecha.',
    distractorRationale: {
      A: 'Circular a mayor velocidad en un cruce sin control agrava el riesgo de choque y no confiere prioridad.',
      B: 'Quien gira a la izquierda pierde preferencia frente al tráfico recto y al que viene por la derecha.',
      C: 'La antigüedad o el tamaño del automotor carecen de relevancia jurídica para definir la prioridad de paso.',
      D: 'En intersecciones no señalizadas de igual jerarquía, el Art. 158 otorga preferencia al vehículo de la derecha.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 158.'
  },
  {
    id: 'vmt-q18',
    category: 'teorico',
    topic: 'Incorporación mediante Carril de Aceleración',
    question: 'Al acceder a una autopista a través de un carril de aceleración, ¿cuál es la obligación legal del conductor que entra?',
    statement: 'Al acceder a una autopista a través de un carril de aceleración, ¿cuál es la obligación legal del conductor que entra?',
    options: [
      'Acelerar para igualar la velocidad del tráfico y ceder el paso a los vehículos que ya circulan en la autopista.',
      'Frenar en seco al inicio del carril de aceleración y esperar con intermitentes.',
      'Ingresar directamente a la autopista cruzando la línea continua sin importar el flujo.',
      'Obligar a los vehículos del carril derecho de la autopista a detenerse mediante el claxon.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El carril de aceleración permite sincronizar la velocidad con la corriente vehicular troncal; quien se incorpora está obligado a ceder el paso a los vehículos que ya circulan por la vía principal.',
    distractorRationale: {
      A: 'El carril de aceleración sirve para igualar la velocidad del flujo principal y ceder el paso antes de integrarse.',
      B: 'Detenerse al inicio del carril anula su propósito y obliga a ingresar luego sin velocidad suficiente.',
      C: 'Cruzar la línea continua sin verificar espacio libre invade el carril preferente de alta velocidad.',
      D: 'El tráfico que ya circula por la autopista tiene prioridad absoluta; tocar el claxon no obliga a ceder.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 155 y Art. 170.'
  },
  {
    id: 'vmt-q19',
    category: 'teorico',
    topic: 'Prioridad de Vehículos de Emergencia',
    question: 'Al escuchar la sirena o percibir las luces de una ambulancia o patrulla en emergencia que se aproxima por detrás, ¿qué debe hacer?',
    statement: 'Al escuchar la sirena o percibir las luces de una ambulancia o patrulla en emergencia que se aproxima por detrás, ¿qué debe hacer?',
    options: [
      'Acelerar para mantenerse delante de la unidad de socorro y no perder tiempo.',
      'Orillarse de inmediato a la derecha de la calzada y detenerse si es necesario para abrir paso.',
      'Frenar bruscamente en el centro de su carril y apagar el motor del vehículo.',
      'Continuar a la misma velocidad porque los carriles de emergencia están a la izquierda.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Los vehículos de auxilio tienen preferencia absoluta en servicio activo; todos los conductores deben desplazarse de forma segura a la derecha para dejar un corredor central despejado.',
    distractorRationale: {
      A: 'Acelerar delante de una unidad de emergencia obstruye su avance y viola su prioridad absoluta.',
      B: 'Desplazarse hacia el borde derecho y detenerse si hace falta despeja el paso seguro para la unidad de socorro.',
      C: 'Frenar en medio del carril bloquea la vía e impide el adelantamiento del vehículo de emergencia.',
      D: 'Mantener la marcha sin orillarse retrasa la atención médica o policial urgente.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 120 y Art. 121.'
  },
  {
    id: 'vmt-q20',
    category: 'teorico',
    topic: 'Giro a la Izquierda en Vía de Doble Sentido',
    question: 'Al ejecutar un giro hacia la izquierda en una calle urbana de doble sentido, ¿qué regla de preferencia rige frente al tráfico que viene de frente?',
    statement: 'Al ejecutar un giro hacia la izquierda en una calle urbana de doble sentido, ¿qué regla de preferencia rige frente al tráfico que viene de frente?',
    options: [
      'El vehículo que gira tiene prioridad porque su trayectoria es más compleja.',
      'Ambos vehículos deben avanzar simultáneamente sin ceder el paso.',
      'El tráfico que avanza en línea recta en sentido opuesto tiene prioridad absoluta de paso.',
      'Tiene prioridad el automotor que primero comience la maniobra de cruce.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Toda maniobra de giro que corte la calzada contraria pierde la preferencia frente a los automotores que continúan en línea recta sobre su propio carril.',
    distractorRationale: {
      A: 'La complejidad del giro no otorga prioridad; quien cambia de trayectoria debe esperar paso libre.',
      B: 'Avanzar simultáneamente cruzando trayectorias opuestas deriva en una colisión frontal o angular.',
      C: 'El vehículo que sigue en línea recta por su carril conserva la prioridad frente a quien gira a la izquierda.',
      D: 'Iniciar primero el giro invadiendo el carril contrario no genera derecho de paso sino imprudencia.'
    },
    legalReference: 'Ley de Transporte Terrestre Art. 68; Reglamento General de Tránsito Art. 160.'
  },
  {
    id: 'vmt-q22',
    category: 'teorico',
    topic: 'Límite de Velocidad en Zonas Escolares',
    signId: 'sign-p3',
    question: '¿Cuál es la velocidad máxima autorizada frente a zonas escolares y centros hospitalarios en horarios de entrada y salida?',
    statement: '¿Cuál es la velocidad máxima autorizada frente a zonas escolares y centros hospitalarios en horarios de entrada y salida?',
    options: [
      'Un máximo estricto de 20 km/h debidamente señalizado.',
      'Hasta 40 km/h si no se observan niños cruzando la calle.',
      '30 km/h con las luces intermitentes de advertencia activadas.',
      '50 km/h en avenidas principales de cuatro carriles.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Reglamento General de Tránsito fija una velocidad máxima infranqueable de 20 km/h en zonas escolares durante los horarios de afluencia estudiantil para resguardar la vida de los menores.',
    distractorRationale: {
      A: 'El Art. 145 establece 20 km/h como límite máximo estricto en zonas escolares y hospitalarias.',
      B: 'Circular a 40 km/h duplica la velocidad permitida y reduce drásticamente el margen de frenado ante escolares.',
      C: 'Ni siquiera con luces intermitentes se autoriza superar el tope reglamentario de 20 km/h.',
      D: '50 km/h corresponde a vías urbanas ordinarias, no a zonas escolares señalizadas.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 145.'
  },
  {
    id: 'vmt-q23',
    category: 'teorico',
    topic: 'Límite de Velocidad en Autopistas Nacionales',
    question: 'En autopistas de flujo libre como el Bulevar Monseñor Romero, ¿cuál es la velocidad máxima reglamentaria para vehículos livianos?',
    statement: 'En autopistas de flujo libre como el Bulevar Monseñor Romero, ¿cuál es la velocidad máxima reglamentaria para vehículos livianos?',
    options: [
      '70 km/h en tramos rectilíneos.',
      '90 km/h en condiciones climáticas favorables y calzada seca.',
      '110 km/h en horas no pico.',
      '120 km/h en el carril izquierdo exclusivamente.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La velocidad máxima legal permitida en autopistas y carreteras expresas multicarril en El Salvador es de 90 km/h.',
    distractorRationale: {
      A: '70 km/h es un límite común en carreteras interurbanas convencionales, inferior al tope de autopistas.',
      B: 'El Art. 146 fija 90 km/h como velocidad máxima reglamentaria para livianos en autopistas nacionales.',
      C: '110 km/h excede el límite legal salvadoreño sin importar el horario de menor tráfico.',
      D: 'El carril izquierdo es para rebasar respetando el tope de 90 km/h, nunca autoriza 120 km/h.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 146.'
  },
  {
    id: 'vmt-q24',
    category: 'teorico',
    topic: 'La Regla de los 3 Segundos de Distancia',
    question: '¿En qué consiste la técnica de los 3 segundos para mantener una distancia segura de seguimiento con el vehículo delantero?',
    statement: '¿En qué consiste la técnica de los 3 segundos para mantener una distancia segura de seguimiento con el vehículo delantero?',
    options: [
      'Frenar durante 3 segundos cada 500 metros recorridos en ciudad.',
      'Contar tres segundos antes de iniciar la marcha al encenderse la luz verde.',
      'Tomar un punto fijo de referencia y verificar que transcurran al menos 3 segundos antes de alcanzarlo.',
      'Mantenerse a tres metros de distancia física por cada 10 km/h de velocidad.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La regla de los 3 segundos permite al conductor disponer de tiempo de reacción psicomotor (0.75 a 1 s) y distancia de frenado mecánica suficiente para no impactar por alcance si el auto precedente frena en seco.',
    distractorRationale: {
      A: 'Frenar periódicamente sin causa desconcierta al tráfico trasero y desgasta innecesariamente el sistema.',
      B: 'Contar tres segundos en el semáforo es una precaución de cruce, no la regla de seguimiento en marcha.',
      C: 'Medir el tiempo desde que el vehículo delantero pasa un punto fijo hasta que uno lo alcanza ajusta la distancia a la velocidad.',
      D: 'Una regla fija en metros no escala adecuadamente con la energía cinética a altas velocidades.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT; Reglamento General de Tránsito Art. 166.'
  },
  {
    id: 'vmt-q25',
    category: 'teorico',
    topic: 'Prohibición de Rebase por el Hombro',
    question: '¿Qué estipula la ley de tránsito salvadoreña respecto a utilizar el hombro o arcén lateral de la carretera para adelantar tráfico lento?',
    statement: '¿Qué estipula la ley de tránsito salvadoreña respecto a utilizar el hombro o arcén lateral de la carretera para adelantar tráfico lento?',
    options: [
      'Está permitido si se trata de vehículos particulares de tracción total (4x4).',
      'Se autoriza únicamente en horarios matutinos de alto congestionamiento.',
      'Es legal siempre y cuando la velocidad del hombro no exceda los 40 km/h.',
      'Está terminantemente prohibido; el hombro es de uso exclusivo para emergencias y peatones.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El arcén u hombro está reservado por ley para detenciones de emergencia y peatones; rebasar por el hombro constituye una infracción muy grave con alto potencial de atropello mortal.',
    distractorRationale: {
      A: 'La tracción 4x4 no faculta para circular ni adelantar por el hombro de la carretera.',
      B: 'El congestionamiento vehicular jamás habilita el uso del arcén como carril adicional.',
      C: 'No existe ninguna velocidad permitida para rebasar por el hombro; la maniobra es ilegal en todo rango.',
      D: 'El hombro está reservado exclusivamente para emergencias mecánicas, unidades de socorro y peatones.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 153 y Art. 172.'
  },
  {
    id: 'vmt-q26',
    category: 'teorico',
    topic: 'Anticipación de Luces Direccionales',
    question: '¿Con qué distancia mínima de anticipación debe señalizarse una maniobra de viraje o cambio de carril en zona urbana?',
    statement: '¿Con qué distancia mínima de anticipación debe señalizarse una maniobra de viraje o cambio de carril en zona urbana?',
    options: [
      'Al menos treinta (30) metros antes de iniciar la maniobra.',
      'Cinco metros antes o al momento exacto de girar el volante.',
      'Únicamente si se perciben patrullas de la PNC en las proximidades.',
      'Diez metros después de haber comenzado a cambiar de carril.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Reglamento General de Tránsito exige señalizar con luz direccional con al menos 30 metros de antelación en áreas urbanas (y 50 metros en carreteras) para advertir oportunamente a los demás conductores.',
    distractorRationale: {
      A: 'Activar la direccional al menos 30 metros antes brinda tiempo suficiente de reacción a los demás conductores.',
      B: 'Cinco metros o en el instante del giro no da margen para que el tráfico adyacente ajuste su velocidad.',
      C: 'La señalización es obligatoria siempre por seguridad vial, haya o no presencia policial.',
      D: 'Señalizar después de iniciar el cambio de carril anula el propósito preventivo de la advertencia.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 159.'
  },
  {
    id: 'vmt-q27',
    category: 'teorico',
    topic: 'Distancia de Seguridad en Calzada Mojada',
    question: 'Cuando comienza a llover intensamente y la calzada se encuentra mojada, ¿cómo debe ajustarse la distancia de seguridad?',
    statement: 'Cuando comienza a llover intensamente y la calzada se encuentra mojada, ¿cómo debe ajustarse la distancia de seguridad?',
    options: [
      'Debe mantenerse idéntica a la de pavimento seco si el auto cuenta con frenos ABS.',
      'Debe duplicarse a 5 o 6 segundos de separación debido a la pérdida de adherencia y fricción.',
      'Debe reducirse a un segundo para no perder de vista las luces del auto precedente.',
      'Debe aumentarse únicamente si la velocidad supera los 100 km/h en autopista.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El agua reduce el coeficiente de fricción del asfalto hasta en un 50%, incrementando notablemente la distancia de frenado mecánico. Por ello, la distancia de seguimiento debe duplicarse a 5-6 segundos.',
    distractorRationale: {
      A: 'El ABS evita el bloqueo de ruedas, pero no acorta la distancia física de frenado sobre asfalto resbaladizo.',
      B: 'Duplicar el intervalo a 5 o 6 segundos compensa la menor fricción del pavimento húmedo y evita choques por alcance.',
      C: 'Acortar la distancia a un segundo bajo lluvia garantiza una colisión trasera ante cualquier frenazo.',
      D: 'La pérdida de adherencia ocurre desde velocidades urbanas bajas, especialmente al inicio de la lluvia.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT; Reglamento General de Tránsito Art. 147.'
  },
  {
    id: 'vmt-q29',
    category: 'teorico',
    topic: 'Maniobra Defensiva ante Hidroplaneo (Aquaplaning)',
    question: 'Si al circular sobre lluvia torrencial siente que el vehículo pierde adherencia y "flota" sobre el agua, ¿qué acción debe tomar?',
    statement: 'Si al circular sobre lluvia torrencial siente que el vehículo pierde adherencia y "flota" sobre el agua, ¿qué acción debe tomar?',
    options: [
      'Pisar el freno bruscamente a fondo y girar rápidamente el volante a ambos lados.',
      'Acelerar a fondo para que los neumáticos corten la película líquida por fuerza centrífuga.',
      'Poner el freno de mano progresivamente mientras mantiene la marcha engranada.',
      'No frenar bruscamente, conservar el volante firme y soltar suavemente el acelerador hasta recuperar tracción.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Frenar o girar durante el hidroplaneo desencadena un trompo incontrolable. La maniobra correcta es sujetar el volante recto y desacelerar progresivamente para que el neumático vuelva a tocar el asfalto.',
    distractorRationale: {
      A: 'Frenar a fondo y girar bruscamente provoca un derrape lateral incontrolable al perder tracción las ruedas.',
      B: 'Acelerar empeora la flotación del neumático sobre la película de agua e incrementa la velocidad de impacto.',
      C: 'El freno de mano bloquea las ruedas traseras, causando un trompo inmediato sobre pavimento mojado.',
      D: 'Soltar suavemente el acelerador sin frenar permite que la gravedad y el labrado evacúen el agua y recuperen agarre.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT; Reglamento General de Tránsito Art. 147.'
  },
  {
    id: 'vmt-q30',
    category: 'teorico',
    topic: 'Uso de Luces en Condiciones de Niebla Densa',
    question: 'Al conducir en tramos de montaña con niebla densa (v. gr., Los Naranjos o El Boquerón), ¿qué luces debe utilizar?',
    statement: 'Al conducir en tramos de montaña con niebla densa (v. gr., Los Naranjos o El Boquerón), ¿qué luces debe utilizar?',
    options: [
      'Luces bajas y faros neblineros auxiliares para proyectar la luz por debajo de la capa de niebla.',
      'Luces altas para intentar perforar la niebla a mayor distancia visual.',
      'Únicamente las luces de estacionamiento ("silvines") para no gastar batería.',
      'Luces de techo o reflectores interiores de cortesía encendidos.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Las luces altas en niebla rebotan directamente en las microgotas de agua, produciendo un reflejo cegador hacia el conductor. Se debe circular con luces bajas y neblineras.',
    distractorRationale: {
      A: 'Las luces bajas y neblineras iluminan el pavimento por debajo de la niebla sin generar deslumbramiento de retorno.',
      B: 'Las luces altas se reflejan en las gotas suspendidas de la niebla y crean una cortina blanca que ciega al conductor.',
      C: 'Las luces de estacionamiento no iluminan la calzada y resultan insuficientes para ser visto en niebla densa.',
      D: 'Encender la luz interior reduce el contraste visual exterior y dificulta distinguir la carretera.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 182 y Art. 185.'
  },
  {
    id: 'vmt-q31',
    category: 'teorico',
    topic: 'Técnica de Freno de Motor en Bajadas Prolongadas',
    signId: 'sign-p5',
    question: 'Al descender una pendiente pronunciada de montaña como Los Chorros, ¿por qué está prohibido bajar en neutro o con embrague presionado?',
    statement: 'Al descender una pendiente pronunciada de montaña como Los Chorros, ¿por qué está prohibido bajar en neutro o con embrague presionado?',
    options: [
      'Porque la caja de cambios se sobrecalienta por falta de lubricación interna.',
      'Porque sobrecarga los frenos de pie causando fatiga térmica (fading) y anula el freno de motor.',
      'Porque la ley prohíbe que el vehículo circule a menos de 2000 revoluciones por minuto.',
      'Porque el alternador deja de cargar la batería durante el trayecto de descenso.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Descender en punto neutro sobrecalienta los frenos mecánicos hasta hacer hervir el líquido hidráulico (fading), provocando una pérdida total de frenos. Se debe descender en una marcha baja reteniendo el peso con el motor.',
    distractorRationale: {
      A: 'El riesgo crítico en bajadas prolongadas no es la caja, sino la pérdida total de frenado por sobrecalentamiento.',
      B: 'Sin retención del motor, toda la energía gravitacional recae en los frenos de servicio hasta provocar fatiga térmica.',
      C: 'No existe ninguna norma que exija circular por encima de 2000 revoluciones por minuto.',
      D: 'El alternador sigue girando mientras el motor esté encendido en ralentí; el peligro real es quedarse sin frenos.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 164 y Art. 174.'
  },
  {
    id: 'vmt-q35',
    category: 'teorico',
    topic: 'Deslumbramiento Nocturno por Tráfico Opuesto',
    question: 'Al cruzarse de noche con un vehículo en sentido opuesto que mantiene encendidas sus luces altas, ¿hacia dónde debe dirigir la mirada?',
    statement: 'Al cruzarse de noche con un vehículo en sentido opuesto que mantiene encendidas sus luces altas, ¿hacia dónde debe dirigir la mirada?',
    options: [
      'Directamente hacia los faros del automotor contrario para calcular su ancho.',
      'Hacia la línea blanca demarcada en el borde derecho de la calzada para no perder la trayectoria.',
      'Hacia el espejo retrovisor interior central manteniéndolo cubierto con la mano.',
      'Hacia el velocímetro en el tablero durante todo el cruce del vehículo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Para evitar el deslumbramiento y la ceguera temporal retiniana, se debe desviar la vista hacia la línea lateral derecha de la carretera, utilizándola como guía de rumbo hasta que el vehículo cruce.',
    distractorRationale: {
      A: 'Mirar directamente los faros altos satura la retina y provoca ceguera temporal durante varios segundos.',
      B: 'Guiarse por la línea blanca del borde derecho mantiene la trayectoria sin exponerse al haz luminoso directo.',
      C: 'Soltar una mano del volante para cubrir el espejo retrovisor resta control y no protege del foco frontal.',
      D: 'Mirar el tablero aparta por completo la vista de la calzada y de posibles peatones u obstáculos adelante.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT; Reglamento General de Tránsito Art. 185.'
  },
  {
    id: 'vmt-q36',
    category: 'teorico',
    topic: 'Funcionamiento y Ventaja del Sistema ABS',
    question: '¿Cuál es la función principal del Sistema Antibloqueo de Frenos (ABS) en una frenada de emergencia sobre pavimento mojado?',
    statement: '¿Cuál es la función principal del Sistema Antibloqueo de Frenos (ABS) en una frenada de emergencia sobre pavimento mojado?',
    options: [
      'Reducir a cero la distancia de frenado mecánico de manera instantánea.',
      'Desconectar el motor de la transmisión para ahorrar líquido de frenos.',
      'Evitar el bloqueo de las ruedas permitiendo mantener el control direccional del volante.',
      'Apagar automáticamente las luces para alertar a los vehículos que vienen detrás.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El sistema ABS modula electrónicamente la presión de frenado para que los neumáticos no derrapen trabados, permitiendo al conductor maniobrar la dirección para esquivar obstáculos mientras frena a fondo.',
    distractorRationale: {
      A: 'Ningún sistema físico elimina la distancia de frenado; el vehículo siempre recorre un tramo por inercia.',
      B: 'El ABS actúa sobre la presión hidráulica de las mordazas, nunca desconecta el motor de la caja.',
      C: 'Al impedir el trabado de los neumáticos, el ABS conserva la capacidad de viraje del volante durante la frenada.',
      D: 'Las luces de freno permanecen encendidas al frenar; apagarlas sería altamente peligroso.'
    },
    legalReference: 'Manual Técnico de Seguridad Vehicular VMT.'
  },
  {
    id: 'vmt-q37',
    category: 'teorico',
    topic: 'Profundidad Mínima Legal de Surco en Neumáticos',
    question: '¿Cuál es la profundidad mínima legal permitida en el labrado o surco de los neumáticos para circular con seguridad en El Salvador?',
    statement: '¿Cuál es la profundidad mínima legal permitida en el labrado o surco de los neumáticos para circular con seguridad en El Salvador?',
    options: [
      '0.5 milímetros en llantas delanteras.',
      '1.0 milímetro únicamente en neumáticos de repuesto.',
      '3.5 milímetros estricto en toda época del año.',
      'Al menos 1.6 milímetros (marcada por los testigos de desgaste TWI).'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La norma técnica y el Reglamento de Tránsito fijan 1.6 mm como la profundidad mínima legal admisible; por debajo de ese nivel, los neumáticos pierden capacidad de evacuar agua y de tracción.',
    distractorRationale: {
      A: 'Un surco de 0.5 mm equivale a una llanta prácticamente lisa con altísimo riesgo de hidroplaneo.',
      B: '1.0 mm ya está por debajo del límite legal de seguridad y compromete la adherencia en pavimento mojado.',
      C: 'Aunque 3.5 mm es recomendable en invierno severo, el mínimo legal reglamentario establecido es 1.6 mm.',
      D: 'La normativa técnica exige al menos 1.6 mm de profundidad en la banda de rodamiento (indicador TWI).'
    },
    legalReference: 'Reglamento General de Tránsito Art. 32; Normas Técnicas de Inspección Vehicular.'
  },
  {
    id: 'vmt-q38',
    category: 'teorico',
    topic: 'Uso Obligatorio del Cinturón de Seguridad',
    signId: 'sign-r20',
    question: 'Respecto al cinturón de seguridad de tres puntos, ¿cuál es la disposición legal imperativa en el territorio salvadoreño?',
    statement: 'Respecto al cinturón de seguridad de tres puntos, ¿cuál es la disposición legal imperativa en el territorio salvadoreño?',
    options: [
      'Es de uso obligatorio para todos los ocupantes del automotor (asientos delanteros y traseros).',
      'Es obligatorio únicamente para el conductor en carreteras abiertas.',
      'Solo se exige si el vehículo circula a más de 80 km/h en autopistas.',
      'Es voluntario para mujeres embarazadas y personas adultas mayores.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La legislación de tránsito salvadoreña obliga al uso ineludible del cinturón de seguridad para todos los ocupantes del vehículo; reduce en más del 50% el riesgo de muerte y previene eyecciones mortales.',
    distractorRationale: {
      A: 'La ley impone el uso obligatorio del cinturón a todos los ocupantes, tanto en plazas delanteras como traseras.',
      B: 'Los impactos urbanos a baja velocidad también proyectan a los pasajeros traseros; su uso es universal.',
      C: 'Un choque a 40 o 50 km/h sin cinturón ya genera fuerzas letales contra el parabrisas o asientos.',
      D: 'Embarazadas y adultos mayores también deben usar el cinturón correctamente ajustado bajo el abdomen.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 177 y Art. 178.'
  },
  {
    id: 'vmt-q39',
    category: 'teorico',
    topic: 'Interacción entre Bolsa de Aire (Airbag) y Cinturón',
    question: '¿Por qué el despliegue de una bolsa de aire (airbag) resulta sumamente peligroso para un ocupante que no lleva abrochado el cinturón?',
    statement: '¿Por qué el despliegue de una bolsa de aire (airbag) resulta sumamente peligroso para un ocupante que no lleva abrochado el cinturón?',
    options: [
      'Porque la bolsa de aire no se desplegará bajo ninguna circunstancia mecánica.',
      'Porque el cuerpo es lanzado hacia adelante a alta velocidad, chocando con el cojín que se expande a 300 km/h.',
      'Porque el airbag absorbe el oxígeno dentro de la cabina y provoca asfixia inmediata.',
      'Únicamente porque se invalida la garantía de fábrica del fabricante del vehículo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El airbag es un sistema suplementario del cinturón. Si no se usa el cinturón, la cabeza impacta violentamente contra el airbag en su fase expansiva explosiva, pudiendo causar fracturas craneofaciales letales.',
    distractorRationale: {
      A: 'En muchos vehículos el airbag se dispara igualmente por sensores de desaceleración aunque falte el cinturón.',
      B: 'Sin cinturón que retenga el torso, el ocupante choca de frente contra la bolsa mientras se infla explosivamente.',
      C: 'El airbag se desinfla en milisegundos tras amortiguar el impacto y no consume el oxígeno del habitáculo.',
      D: 'El riesgo real es biomecánico y potencialmente mortal, no una cuestión de garantía comercial.'
    },
    legalReference: 'Manual de Seguridad Pasiva Vehicular VMT.'
  },
  {
    id: 'vmt-q40',
    category: 'teorico',
    topic: 'Sistemas de Retención Infantil (Sillas para Niños)',
    question: '¿Dónde y cómo deben viajar obligatoriamente los menores de ocho años en un vehículo automotor en El Salvador?',
    statement: '¿Dónde y cómo deben viajar obligatoriamente los menores de ocho años en un vehículo automotor en El Salvador?',
    options: [
      'En el asiento del copiloto con el cinturón de adulto ajustado al cuello.',
      'En la palangana o cama de un pick-up si viajan acompañados de un familiar.',
      'En los asientos traseros sujetos en un Sistema de Retención Infantil (SRI) homologado.',
      'En brazos de la madre en el asiento delantero con un solo cinturón para ambos.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los niños menores de 8 años o estatura inferior a 1.35 m deben viajar siempre en los asientos traseros protegidos en sillas de seguridad acordes a su peso y talla; llevarlos en brazos está prohibido.',
    distractorRationale: {
      A: 'El asiento delantero expone al menor al impacto directo del airbag y el cinturón de adulto puede lesionar su cuello.',
      B: 'Transportar personas y menos aún niños en la cama de un pick-up está prohibido por el altísimo riesgo de eyección.',
      C: 'El asiento trasero con un Sistema de Retención Infantil homologado es el único método legal y seguro.',
      D: 'En una colisión, la fuerza de inercia multiplica el peso del menor, haciendo imposible retenerlo en brazos.'
    },
    legalReference: 'Ley de Transporte Terrestre Art. 64; Reglamento General de Tránsito Art. 177.'
  },
  {
    id: 'vmt-q41',
    category: 'teorico',
    topic: 'Equipo de Emergencia Obligatorio en el Vehículo',
    question: '¿Qué implementos de seguridad forman parte del equipamiento obligatorio que todo automotor debe portar según el Art. 34 del Reglamento?',
    statement: '¿Qué implementos de seguridad forman parte del equipamiento obligatorio que todo automotor debe portar según el Art. 34 del Reglamento?',
    options: [
      'Juego de luces decorativas de neón, cables de audio y reproductor estéreo.',
      'Cámara de video de tablero (dashcam) conectada a red celular 4G.',
      'Pala de excavación, cuerda de remolque de nailon y bidón de combustible lleno.',
      'Extintor de incendios cargado, dos triángulos reflectivos, llanta de repuesto, llave y gato.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El Artículo 34 del Reglamento General de Tránsito exige de manera taxativa: extintor con manómetro en verde, dos triángulos reflectivos, llanta de repuesto idónea, llave de tuercas y gato mecánico/hidráulico.',
    distractorRationale: {
      A: 'Los accesorios estéticos o de entretenimiento no forman parte del equipo obligatorio de seguridad vial.',
      B: 'La cámara de tablero es un dispositivo opcional útil como prueba, pero no sustituye el equipo reglamentario.',
      C: 'Portar bidones con combustible en cabina o baúl representa un grave riesgo de incendio y no es exigido por ley.',
      D: 'El Art. 34 exige expresamente extintor vigente, dos triángulos reflectivos, llanta de repuesto, llave y gato.'
    },
    legalReference: 'Reglamento General de Tránsito Art. 34.'
  },
  {
    id: 'vmt-q43',
    category: 'teorico',
    topic: 'Principio de Cero Tolerancia y Delito de Conducción Peligrosa (Art. 147-E CP)',
    question: 'Conforme a la reforma vigente al Art. 147-E del Código Penal en El Salvador, ¿a partir de qué nivel de alcohol en aire espirado o sangre se tipifica el delito de Conducción Peligrosa?',
    statement: 'Conforme a la reforma vigente al Art. 147-E del Código Penal en El Salvador, ¿a partir de qué nivel de alcohol en aire espirado o sangre se tipifica el delito de Conducción Peligrosa?',
    options: [
      'A partir de 50 mg/dl únicamente en conductores de vehículos particulares.',
      'Bajo el principio de Cero Tolerancia: cualquier nivel positivo (> 0 mg/dl) en aire espirado o sangre.',
      'Únicamente a partir de 100 mg/dl si el conductor ocasiona lesiones corporales.',
      'A partir de 200 mg/dl si no porta licencia de conducir física.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La reforma vigente al Art. 147-E CP instauró la Cero Tolerancia al alcohol al volante: cualquier presencia detectable (> 0 mg/dl) tipifica Conducción Peligrosa con detención inmediata, multa muy grave de $150.00 y pena de 2 a 5 años de prisión para particulares.',
    distractorRationale: {
      A: 'El antiguo umbral de 50 mg/dl fue derogado con la reforma de Cero Tolerancia de diciembre de 2024.',
      B: 'Bajo la reforma vigente al Art. 147-E CP, cualquier nivel positivo (> 0 mg/dl) configura el delito de Conducción Peligrosa.',
      C: 'No se requiere causar lesiones para tipificar el delito; basta la conducción con alcohol detectable.',
      D: 'El límite de 200 mg/dl es inexistente en la ley salvadoreña y la portación de licencia no excluye el delito.'
    },
    legalReference: 'Código Penal Art. 147-E (reforma Cero Tolerancia); Ley de Transporte Terrestre Art. 118.'
  },
  {
    id: 'vmt-q44',
    category: 'teorico',
    topic: 'Penas de Prisión por Conducción Peligrosa Agravada',
    question: '¿Qué pena de prisión formal impone el Art. 147-E vigente del Código Penal salvadoreño al motorista de transporte público o de carga que comete Conducción Peligrosa?',
    statement: '¿Qué pena de prisión formal impone el Art. 147-E vigente del Código Penal salvadoreño al motorista de transporte público o de carga que comete Conducción Peligrosa?',
    options: [
      'Trabajo de utilidad comunitaria durante los fines de semana.',
      'Multa económica de 150.00 dólares sin pérdida de la libertad ni proceso penal.',
      'Prisión formal de cinco (5) a diez (10) años de privación de libertad.',
      'Arresto domiciliario de quince días supervisado por la alcaldía.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El inciso segundo del Art. 147-E del Código Penal vigente sanciona la conducción peligrosa en transporte colectivo de pasajeros o de carga pesada con una pena agravada de 5 a 10 años de prisión, además de restricción de conciliación y cancelación de licencia.',
    distractorRationale: {
      A: 'La pena agravada para transporte público o de carga no es sustituible por trabajo comunitario de fin de semana.',
      B: 'La multa muy grave de $150.00 es paralela al proceso penal, pero no sustituye la pena de prisión.',
      C: 'El Art. 147-E inciso segundo establece prisión de 5 a 10 años para conductores de transporte público o de carga.',
      D: 'El arresto domiciliario municipal no aplica a delitos penales graves de conducción peligrosa.'
    },
    legalReference: 'Código Penal Art. 147-E, inciso segundo (reforma vigente).'
  },
  {
    id: 'vmt-q45',
    category: 'teorico',
    topic: 'Aplicación de Cero Tolerancia y Multas Vigentes (Ley de Transporte Terrestre)',
    question: 'Si en un alcotest un conductor particular arroja un resultado de 45 mg/dl (o cualquier nivel positivo), ¿cuál es la consecuencia legal vigente bajo el régimen de Cero Tolerancia?',
    statement: 'Si en un alcotest un conductor particular arroja un resultado de 45 mg/dl (o cualquier nivel positivo), ¿cuál es la consecuencia legal vigente bajo el régimen de Cero Tolerancia?',
    options: [
      'Se le permite continuar porque antes se toleraba hasta 49 mg/dl.',
      'Se le impone únicamente una multa leve de $50.00 sin retención de documentos.',
      'Puede continuar conduciendo si paga la esquela en efectivo al agente policial.',
      'Detención en flagrancia por Conducción Peligrosa (2 a 5 años de prisión), esquela muy grave de $150.00, suspensión/cancelación de licencia y retención del vehículo.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Con la reforma de Cero Tolerancia quedaron derogados los antiguos rangos de tolerancia (0–49 mg/dl) y de falta administrativa (50–99 mg/dl). Todo nivel positivo configura delito de Conducción Peligrosa (2 a 5 años particulares) más multa muy grave de $150.00.',
    distractorRationale: {
      A: 'La tolerancia previa de hasta 49 mg/dl quedó completamente derogada por el régimen vigente de Cero Tolerancia.',
      B: 'La multa por conducción bajo efectos de alcohol es muy grave ($150.00), nunca leve ($50.00), y conlleva captura.',
      C: 'Los agentes de la PNC no reciben pagos en efectivo ni permiten continuar conduciendo a personas con alcohol positivo.',
      D: 'Con 45 mg/dl procede detención en flagrancia (2 a 5 años de prisión), multa de $150.00, suspensión de licencia y remisión.'
    },
    legalReference: 'Código Penal Art. 147-E; Ley de Transporte Terrestre (reforma dic. 2024 y D.L. N.° 185/2025).'
  },
  {
    id: 'vmt-q46',
    category: 'teorico',
    topic: 'Efecto de la Negativa Injustificada a la Prueba de Alcotest',
    question: '¿Qué consecuencia jurídica sobreviene si un conductor con síntomas evidentes de ebriedad se niega rotundamente a realizar el alcotest?',
    statement: '¿Qué consecuencia jurídica sobreviene si un conductor con síntomas evidentes de ebriedad se niega rotundamente a realizar el alcotest?',
    options: [
      'Presunción procesal de intoxicación, detención policial y remisión al Instituto de Medicina Legal.',
      'El agente de tránsito debe dejarlo marchar porque la prueba es puramente voluntaria.',
      'Se le cobra el doble del costo del aparato etilómetro pero no se le detiene.',
      'El conductor queda exento de cualquier proceso penal por no haber evidencia numérica.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La negativa obstinada genera presunción de intoxicación flagrante y faculta a la PNC a detener al infractor por Conducción Peligrosa y Desobediencia, practicándose extracción pericial de sangre bajo control judicial.',
    distractorRationale: {
      A: 'Rehusarse al alcotest activa la presunción de intoxicación, detención y práctica de peritaje en Medicina Legal.',
      B: 'La prueba de alcoholemia ante indicios de ebriedad es de acatamiento obligatorio, no facultativa.',
      C: 'No existe cobro por el costo del etilómetro; la consecuencia es penal y administrativa.',
      D: 'La ausencia de lectura por negativa del conductor no impide el proceso penal mediante otros medios probatorios.'
    },
    legalReference: 'Código Penal Art. 147-E; Jurisprudencia Sala de lo Penal de la CSJ.'
  },
  {
    id: 'vmt-q48',
    category: 'teorico',
    topic: 'Tolerancia de Sustancias Estupefacientes y Narcóticos',
    question: 'En cuanto al consumo de sustancias estupefacientes, psicotrópicas o drogas ilícitas al volante, ¿qué tolerancia fija la ley?',
    statement: 'En cuanto al consumo de sustancias estupefacientes, psicotrópicas o drogas ilícitas al volante, ¿qué tolerancia fija la ley?',
    options: [
      'Se permite un nivel residual equivalente a dos dosis recreativas.',
      'Únicamente se sanciona si el conductor consume dentro de la cabina mientras maneja.',
      'Tolerancia Cero absoluta; cualquier presencia activa tipifica el delito del Art. 147-E del Código Penal.',
      'Se tolera siempre que el conductor exhiba una receta médica extranjera no homologada.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Para drogas ilícitas y psicotrópicos rige tolerancia cero absoluta. Conducir bajo influjo narcótico comprobado por Medicina Legal constituye delito penal de Conducción Peligrosa.',
    distractorRationale: {
      A: 'No existe ningún umbral recreativo permitido para estupefacientes al conducir.',
      B: 'El delito se configura por conducir bajo el influjo activo de la sustancia, sin importar dónde se consumió.',
      C: 'El Art. 147-E CP establece tolerancia cero absoluta ante cualquier presencia activa de drogas o psicotrópicos.',
      D: 'Las recetas extranjeras no autorizan a conducir bajo efectos de sustancias que alteren la aptitud psicomotora.'
    },
    legalReference: 'Código Penal Art. 147-E; Ley Reguladora de las Actividades Relativas a las Drogas.'
  },
  {
    id: 'vmt-q50',
    category: 'teorico',
    topic: 'Protocolo de Emergencia P.A.S.',
    question: '¿Cuál es el significado y la secuencia cronológica estricta de las siglas del Protocolo Internacional de Emergencia P.A.S.?',
    statement: '¿Cuál es el significado y la secuencia cronológica estricta de las siglas del Protocolo Internacional de Emergencia P.A.S.?',
    options: [
      'Proteger la escena, Avisar a los cuerpos de emergencia y Socorrer a las víctimas.',
      'Parar el vehículo, Apagar el radio y Salir corriendo a pedir auxilio.',
      'Presionar el pedal, Acelerar la marcha y Solicitar un abogado de tránsito.',
      'Perdonar al conductor, Acordar el pago y Salir del lugar sin llamar a la policía.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El protocolo universal P.A.S. exige: 1. Proteger el lugar del siniestro para evitar nuevos choques; 2. Avisar de inmediato a los teléfonos de emergencia (911, 132); 3. Socorrer dentro de los límites de primeros auxilios.',
    distractorRationale: {
      A: 'P.A.S. significa Proteger la zona, Avisar al 911/132 y Socorrer a los lesionados en ese orden estricto.',
      B: 'Abandonar el vehículo sin señalizar ni asegurar el área expone a colisiones secundarias múltiples.',
      C: 'No corresponde a un protocolo de auxilio médico ni respeta la secuencia de seguridad vial.',
      D: 'Retirarse sin asistir ni reportar cuando existen víctimas agrava la responsabilidad penal.'
    },
    legalReference: 'Protocolo de Primeros Auxilios VMT y Cuerpos de Socorro de El Salvador.'
  },
  {
    id: 'vmt-q51',
    category: 'teorico',
    topic: 'Manipulación de Motociclista Accidentado',
    question: 'Ante un motociclista accidentado inconsciente sobre el asfalto con sospecha de trauma en el cuello, ¿qué regla de oro debe respetarse?',
    statement: 'Ante un motociclista accidentado inconsciente sobre el asfalto con sospecha de trauma en el cuello, ¿qué regla de oro debe respetarse?',
    options: [
      'Sentarlo de inmediato para que recupere la respiración y tome agua azucarada.',
      'Jamás moverlo ni retirarle el casco, salvo por personal médico paramédico calificado.',
      'Retirar el casco con fuerza tirando de la correa hacia arriba.',
      'Colocarlo de pie y hacerlo caminar para descartar fracturas óseas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Retirar el casco o mover el cuello de un traumatizado puede seccionar la médula espinal a nivel cervical, ocasionando parálisis permanente o muerte inmediata. Solo personal entrenado debe estabilizar el cuello.',
    distractorRationale: {
      A: 'Sentar a un traumatizado inconsciente o darle líquidos provoca lesión medular y riesgo de broncoaspiración.',
      B: 'Inmovilizar la escena sin mover a la víctima ni quitarle el casco evita agravar fracturas cervicales.',
      C: 'Tirar del casco ejerce tracción violenta sobre las vértebras del cuello y puede causar tetraplejia o muerte.',
      D: 'Poner de pie a una persona tras un impacto de moto puede agravar fracturas de pelvis, fémur o columna.'
    },
    legalReference: 'Manual de Primeros Auxilios Prehospitalarios VMT (PHTLS).'
  },
  {
    id: 'vmt-q52',
    category: 'teorico',
    topic: 'Naturaleza de la Cobertura Social de la Ley FONAT',
    question: '¿Bajo qué principio opera la prestación económica por fallecimiento o discapacidad de la Ley FONAT en El Salvador?',
    statement: '¿Bajo qué principio opera la prestación económica por fallecimiento o discapacidad de la Ley FONAT en El Salvador?',
    options: [
      'Únicamente cubre si el conductor causante es declarado solvente en juicio mercantil.',
      'Exige que la víctima demuestre haber pagado una póliza de seguro privada anual.',
      'Brinda cobertura solidaria económica con independencia de la culpabilidad jurídica del siniestro.',
      'Solo indemniza daños materiales sufridos por la carrocería de los automotores.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La Ley FONAT establece un beneficio social objetivo y solidario: compensa a víctimas o derechohabientes por muerte o discapacidad permanente sobrevenida por siniestros viales, sin supeditarse al fallo de culpabilidad.',
    distractorRationale: {
      A: 'El FONAT no depende de la solvencia patrimonial del causante ni de un juicio mercantil previo.',
      B: 'Es un fondo público solidario financiado estatalmente, no requiere seguro privado de la víctima.',
      C: 'La prestación del FONAT opera bajo solidaridad social objetiva sin esperar sentencia penal de culpabilidad.',
      D: 'El FONAT cubre daños humanos por fallecimiento o discapacidad permanente, nunca reparaciones de carrocería.'
    },
    legalReference: 'Ley del Fondo para la Atención a las Víctimas de Accidentes de Tránsito (FONAT) Art. 15 y Art. 16.'
  },
  {
    id: 'vmt-q53',
    category: 'teorico',
    topic: 'Agravante Penal por Fuga de la Escena del Siniestro',
    question: '¿Qué consecuencia jurídica sobreviene para el conductor que atropella a una persona y se da a la fuga sin prestarle auxilio?',
    statement: '¿Qué consecuencia jurídica sobreviene para el conductor que atropella a una persona y se da a la fuga sin prestarle auxilio?',
    options: [
      'Se le impone una multa administrativa menor y se archiva el expediente si no hay cámaras.',
      'Configura la agravante penal de abandono de persona desamparada, orden de captura y pérdida de beneficios de excarcelación.',
      'Puede llegar a un arreglo económico con el policía de turno para retirar la denuncia.',
      'La ley le concede siete días para presentarse libremente sin ninguna repercusión legal.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Huir de la escena del siniestro constituye una de las agravantes más severas en el Código Penal salvadoreño (abandono y omisión de socorro), eliminando la conciliación rápida y ordenando prisión provisional.',
    distractorRationale: {
      A: 'Atropellar y huir es un delito penal perseguible de oficio, nunca una falta administrativa menor.',
      B: 'La fuga agrava la responsabilidad penal, restringe la conciliación y fundamenta la detención provisional.',
      C: 'Los agentes policiales no tienen facultad para negociar ni archivar delitos con víctimas lesionadas.',
      D: 'No existe ningún plazo de gracia de siete días para quien abandona a una víctima en la vía pública.'
    },
    legalReference: 'Código Penal Art. 142, Art. 147-E y Art. 175.'
  },
  {
    id: 'vmt-q54',
    category: 'teorico',
    topic: 'Control de Hemorragias Severas en Primeros Auxilios',
    question: 'Al socorrer a una víctima de accidente que presenta una herida sangrante profusa en una extremidad, ¿cuál es la técnica inicial indicada?',
    statement: 'Al socorrer a una víctima de accidente que presenta una herida sangrante profusa en una extremidad, ¿cuál es la técnica inicial indicada?',
    options: [
      'Aplicar un torniquete con alambre apretado durante tres horas continuas.',
      'Lavar la herida profunda con agua no purificada y dejar que sangre para limpiar el tejido.',
      'Aplicar presión directa continua sobre la herida con un apósito, gasa o paño limpio esterilizado.',
      'Suministrar bebidas alcohólicas a la víctima para adormecer el dolor traumático.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El primer paso para controlar una hemorragia es la presión directa continua sobre el punto sangrante con material limpio. Los torniquetes improvisados con alambre están contraindicados por causar necrosis y daño tisular.',
    distractorRationale: {
      A: 'Un torniquete improvisado con alambre corta tejidos y provoca necrosis isquémica en la extremidad.',
      B: 'Dejar sangrar una hemorragia profusa acelera el shock hipovolémico y el agua contaminada infecta la herida.',
      C: 'La presión directa sostenida con gasa o paño limpio controla la mayoría de las hemorragias sin dañar el tejido.',
      D: 'El alcohol es vasodilatador y agrava el sangrado además de interferir con la atención médica.'
    },
    legalReference: 'Guías de Soporte Vital Básico de la Cruz Roja Salvadoreña.'
  },
  {
    id: 'vmt-q55',
    category: 'teorico',
    topic: 'Conciliación Extrajudicial ante la PNC-DTT por Daños Materiales',
    question: 'En un siniestro de tránsito donde exclusivamente se reportan daños materiales entre dos automotores asegurados, ¿qué permite la ley?',
    statement: 'En un siniestro de tránsito donde exclusivamente se reportan daños materiales entre dos automotores asegurados, ¿qué permite la ley?',
    options: [
      'Obliga a ambos conductores a guardar prisión durante setenta y dos horas en bartolinas.',
      'Exige la incautación definitiva de ambos vehículos sin derecho a devolución.',
      'Prohíbe a las aseguradoras intervenir hasta que un juez civil emita sentencia definitiva.',
      'Faculta a las partes a conciliar amistosamente mediante acta pericial policial sin secuestro de vehículos.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Si no hay lesionados, personas fallecidas ni conductores ebrios, la ley promueve la mediación y conciliación rápida entre las partes o aseguradoras ante la PNC-DTT, evitando trámites judiciales engorrosos.',
    distractorRationale: {
      A: 'Sin lesionados ni alcoholemia positiva, no procede detención penal en bartolinas por simples daños materiales.',
      B: 'La ley no contempla el decomiso definitivo cuando las partes concilian por daños exclusivamente materiales.',
      C: 'Las aseguradoras participan activamente en la escena para respaldar los acuerdos de reparación.',
      D: 'El acta policial de conciliación permite resolver daños materiales de forma expedita sin secuestro vehicular.'
    },
    legalReference: 'Ley de Transporte Terrestre Art. 120 y Art. 121; Código Procesal Penal Art. 38.'
  },
  {
    id: 'vmt-q57',
    category: 'teorico',
    topic: 'Requisitos y Vigencia de Licencia (Art. 155 D.E. 61)',
    question: 'Conforme al Art. 155 del Reglamento General de Tránsito (D.E. 61), ¿cuál es la vigencia ordinaria de la licencia de conducir y el plazo máximo para avisar un cambio de domicilio?',
    statement: 'Conforme al Art. 155 del Reglamento General de Tránsito (D.E. 61), ¿cuál es la vigencia ordinaria de la licencia de conducir y el plazo máximo para avisar un cambio de domicilio?',
    options: [
      'Vigencia de 3 años y aviso dentro de 30 días calendario.',
      'Vigencia de 5 años y aviso de cambio de domicilio dentro de los 15 días hábiles siguientes.',
      'Vigencia de 10 años sin obligación de notificar cambios de domicilio.',
      'Vigencia de 2 años y aviso dentro de las 48 horas siguientes.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El Art. 155 del D.E. 61 establece una vigencia de 5 años para la licencia de conducir y obliga al titular a notificar cualquier cambio de domicilio dentro de los 15 días hábiles posteriores.',
    distractorRationale: {
      A: 'Ni la vigencia es de 3 años ni el plazo de notificación domiciliaria es de 30 días calendario.',
      B: 'El Art. 155 del D.E. 61 fija exactamente 5 años de vigencia y 15 días hábiles para reportar cambio de domicilio.',
      C: 'Las licencias salvadoreñas no duran 10 años y mantener actualizado el domicilio es un deber legal.',
      D: 'Dos años y 48 horas no corresponden a los plazos reglamentarios vigentes en El Salvador.'
    },
    legalReference: 'Reglamento General de Tránsito y Seguridad Vial (D.E. 61) Art. 155.'
  },
  {
    id: 'vmt-q58',
    category: 'teorico',
    topic: 'Causales de Remisión y Decomiso Vehicular (Art. 118 LTTTSV)',
    question: 'Según el Art. 118 de la Ley de Transporte Terrestre, Tránsito y Seguridad Vial (D.L. 477), ¿cuál es una causal directa de remisión y decomiso preventivo del vehículo?',
    statement: 'Según el Art. 118 de la Ley de Transporte Terrestre, Tránsito y Seguridad Vial (D.L. 477), ¿cuál es una causal directa de remisión y decomiso preventivo del vehículo?',
    options: [
      'Tener la carrocería ligeramente sucia por lluvia reciente.',
      'Circular con la radio encendida a volumen moderado en zona residencial.',
      'Circular sin placas, con placas alteradas, sin tarjeta de circulación vigente o bajo efectos de alcohol.',
      'Llevar un neumático de repuesto con diferente diseño de rin.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El Art. 118 de la LTTTSV faculta a la PNC-DTT a remitir el vehículo cuando circula sin placas o con placas falsas/alteradas, carece de tarjeta de circulación vigente, o es guiado por persona ebria o sin licencia.',
    distractorRationale: {
      A: 'La limpieza exterior de la carrocería no es causal legal de decomiso vehicular.',
      B: 'El uso moderado del equipo de audio no habilita la retención ni remisión del automotor.',
      C: 'La falta o alteración de placas, ausencia de tarjeta de circulación o conducción ebria justifican la remisión.',
      D: 'El neumático de repuesto temporal suele tener un rin distinto y es permitido para emergencias.'
    },
    legalReference: 'Ley de Transporte Terrestre, Tránsito y Seguridad Vial (D.L. 477) Art. 118.'
  },
  {
    id: 'vmt-q59',
    category: 'teorico',
    topic: 'Capacidad Máxima de Licencia Liviana (Art. 155-A D.E. 61)',
    question: 'De acuerdo con el Art. 155-A del D.E. 61, ¿qué capacidad máxima de pasajeros y peso autoriza la Licencia Liviana (edad mínima 18 años)?',
    statement: 'De acuerdo con el Art. 155-A del D.E. 61, ¿qué capacidad máxima de pasajeros y peso autoriza la Licencia Liviana (edad mínima 18 años)?',
    options: [
      'Hasta 15 pasajeros y hasta 3.5 toneladas.',
      'Hasta 45 pasajeros y hasta 12 toneladas.',
      'Sin límite de pasajeros ni de tonelaje en vehículos rígidos.',
      'Hasta 30 pasajeros y hasta 5.0 toneladas métricas.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El Art. 155-A del D.E. 61 fija para la Licencia Liviana una edad mínima de 18 años y una capacidad de hasta 30 pasajeros y hasta 5.0 toneladas métricas.',
    distractorRationale: {
      A: 'Hasta 15 pasajeros y 3.5 toneladas corresponde a la Licencia Particular.',
      B: 'Autobuses de más de 30 pasajeros y camiones de hasta 12 toneladas requieren Licencia Pesada.',
      C: 'La Licencia Liviana tiene topes claros de 30 pasajeros y 5.0 toneladas métricas.',
      D: 'Conforme al Art. 155-A D.E. 61, la Licencia Liviana autoriza hasta 30 pasajeros y hasta 5 toneladas.'
    },
    legalReference: 'Reglamento General de Tránsito y Seguridad Vial (D.E. 61) Art. 155-A.'
  },
  {
    id: 'vmt-q60',
    category: 'teorico',
    topic: 'Mangueras Neumáticas Roja y Azul en Cabezales',
    question: 'En el acoplamiento neumático entre un cabezal y su semirremolque, ¿qué función cumple específicamente la manguera de color ROJO?',
    statement: 'En el acoplamiento neumático entre un cabezal y su semirremolque, ¿qué función cumple específicamente la manguera de color ROJO?',
    options: [
      'Es la línea de suministro o emergencia que alimenta los tanques del remolque y activa el frenado ante desconexión.',
      'Es la línea de control o mensajera que solo transmite señal cuando se pisa el pedal de servicio.',
      'Conduce únicamente el fluido eléctrico para las luces traseras y direccionales del remolque.',
      'Sirve para inflar automáticamente las llantas del eje trasero durante la marcha.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Por estándar internacional, la manguera roja es la línea de suministro/emergencia (mantiene presurizado el sistema del remolque y dispara los frenos de resorte si cae la presión), mientras que la azul es la línea de control/mensajera.',
    distractorRationale: {
      A: 'La manguera roja suministra aire continuo al remolque y dispara los frenos de emergencia ante pérdida de presión.',
      B: 'La línea de control o mensajera que responde al pedal de servicio corresponde a la manguera de color azul.',
      C: 'La alimentación de luces y ABS del remolque viaja por el cable eléctrico de siete vías, no por manguera neumática.',
      D: 'Las mangueras de aire entre cabezal y rastra pertenecen al sistema de frenos, no al inflado de llantas.'
    },
    legalReference: 'Manual Técnico de Operación de Cabezales y Frenos de Aire VMT.'
  },
  {
    id: 'vmt-q61',
    category: 'teorico',
    topic: 'Rango Operativo de Frenos de Aire (Air Brakes)',
    question: '¿Cuál es el rango de presión operativa normal del sistema de frenos de aire (air brakes) en un cabezal y a qué presión debe cortar el compresor?',
    statement: '¿Cuál es el rango de presión operativa normal del sistema de frenos de aire (air brakes) en un cabezal y a qué presión debe cortar el compresor?',
    options: [
      'Operación de 20 a 40 lbs y corte del compresor a 50 lbs.',
      'Operación de 65 a 120 lbs y corte del compresor regulado entre 90 y 120 lbs.',
      'Operación de 150 a 220 lbs y corte del compresor a 250 lbs.',
      'Operación de 10 a 30 lbs sin límite de corte en el gobernador.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El sistema de frenos de aire opera de manera segura entre 65 y 120 psi (libras), con el gobernador del compresor regulado para cortar entre 90 y 120 lbs; por debajo de 60 lbs debe activarse la alarma de baja presión.',
    distractorRationale: {
      A: 'Por debajo de 60 lbs la presión es crítica y se activan la alarma de advertencia y los frenos de emergencia.',
      B: 'El rango operativo seguro es de 65 a 120 lbs, cortando el compresor normalmente entre 90 y 120 lbs.',
      C: 'Presiones superiores a 150 lbs exceden el tarado de las válvulas de seguridad del sistema neumático.',
      D: 'Un sistema sin corte en el gobernador sufriría sobrepresión peligrosa y ruptura de tanques o mangueras.'
    },
    legalReference: 'Manual Técnico de Frenos Neumáticos y Licencia Pesada T VMT.'
  },
  {
    id: 'vmt-q62',
    category: 'teorico',
    topic: 'Tolerancia de Pesaje por Eje (Art. 8 D.E. 23)',
    question: 'Según el Art. 8 del Reglamento de Transporte Terrestre de Carga (D.E. N.° 23), ¿qué tolerancia técnica máxima se admite sobre el peso autorizado por eje en básculas oficiales?',
    statement: 'Según el Art. 8 del Reglamento de Transporte Terrestre de Carga (D.E. N.° 23), ¿qué tolerancia técnica máxima se admite sobre el peso autorizado por eje en básculas oficiales?',
    options: [
      'Una tolerancia del 15% por eje en cualquier carretera.',
      'Una tolerancia del 10% únicamente en unidades portacontenedor.',
      'Una tolerancia máxima del 5% por eje sobre el límite autorizado.',
      'Cero tolerancia en báscula bajo cualquier circunstancia.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El Art. 8 del D.E. 23 establece una tolerancia técnica de hasta el 5% por eje para absorber variaciones menores de estiba, sin exceder el peso bruto total máximo ni la capacidad de puentes.',
    distractorRationale: {
      A: 'Un 15% de exceso dañaría severamente la carpeta asfáltica y violaría la normativa de pesos.',
      B: 'No existe un régimen especial del 10% para portacontenedores; rige la regla general del 5%.',
      C: 'El Art. 8 del D.E. 23 fija exactamente el 5% como tolerancia técnica máxima por eje.',
      D: 'La normativa sí contempla un margen técnico del 5% por eje para compensar desplazamientos menores de carga.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. N.° 23) Art. 8.'
  },
  {
    id: 'vmt-q63',
    category: 'teorico',
    topic: 'Acoplamiento Seguro de Quinta Rueda y King Pin',
    question: 'Durante el procedimiento de acoplamiento seguro en 7 pasos, ¿qué verificación física debe hacerse inmediatamente después de engranar el king pin en la quinta rueda?',
    statement: 'Durante el procedimiento de acoplamiento seguro en 7 pasos, ¿qué verificación física debe hacerse inmediatamente después de engranar el king pin en la quinta rueda?',
    options: [
      'Levantar de golpe las patas de apoyo antes de probar la tracción.',
      'Desconectar las cuñas y salir a autopista sin revisar debajo del plato.',
      'Realizar una prueba suave de tracción hacia adelante en marcha baja y verificar visualmente el cierre de las mordazas.',
      'Acelerar bruscamente en reversa para asentar el perno rey.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Tras escuchar el clic de cierre, se debe efectuar la prueba de tracción hacia adelante en marcha baja para confirmar el bloqueo mecánico y revisar visualmente con linterna que las mordazas abracen el king pin sin luz entre platos.',
    distractorRationale: {
      A: 'Subir los patines antes de comprobar el bloqueo podría provocar la caída frontal del semirremolque al suelo.',
      B: 'Omitir la inspección visual debajo del plato es la causa principal de desprendimiento de rastras en carretera.',
      C: 'La prueba de tracción suave y la inspección visual directa garantizan que el king pin quedó firmemente asegurado.',
      D: 'Golpear el perno rey acelerando en reversa daña la mordaza de la quinta rueda y la estructura del remolque.'
    },
    legalReference: 'Manual de Operación Segura de Unidades Articuladas (Licencia Pesada T) VMT.'
  },
  {
    id: 'vmt-q64',
    category: 'teorico',
    topic: 'Cargas Sobredimensionadas y Puentes (Arts. 20 y 21 D.E. 23)',
    signId: 'sign-r11',
    question: 'Conforme a los Arts. 20 y 21 del D.E. 23, cuando una carga indivisible supera 2.60 m de ancho o las 90 toneladas métricas de peso al cruzar puentes, ¿qué medidas son obligatorias?',
    statement: 'Conforme a los Arts. 20 y 21 del D.E. 23, cuando una carga indivisible supera 2.60 m de ancho o las 90 toneladas métricas de peso al cruzar puentes, ¿qué medidas son obligatorias?',
    options: [
      'Circular sin escolta a velocidad normal de 70 km/h para despejar rápido la vía.',
      'Cruzar los puentes a 40 km/h junto con otros vehículos para distribuir el peso.',
      'Utilizar únicamente una moto escolta trasera y cruzar puentes en neutro.',
      'Contar con 2 unidades piloto, circular a 15–30 km/h en tramos sinuosos y cruzar puentes a <= 10 km/h para >90 t.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El Art. 20 D.E. 23 exige permiso especial, 2 unidades piloto y velocidad de 15–30 km/h en tramos sinuosos si el ancho excede 2.60 m; el Art. 21 impone cruzar puentes a <= 10 km/h cuando el peso supera 90 toneladas.',
    distractorRationale: {
      A: 'Circular a 70 km/h con carga sobredimensionada sin escolta pone en riesgo grave al tráfico contrario y estructuras.',
      B: 'Las cargas >90 t deben cruzar solas el tablero del puente a baja velocidad, nunca acompañadas de otros vehículos.',
      C: 'La ley exige dos unidades piloto (adelante y atrás) y prohíbe circular en punto neutro.',
      D: 'Dos unidades piloto, 15–30 km/h en curvas y <= 10 km/h sobre puentes (>90 t) cumplen exactamente los Arts. 20 y 21.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. N.° 23) Art. 20 y Art. 21.'
  },
  {
    id: 'vmt-q65',
    category: 'teorico',
    topic: 'Transporte de Caña de Azúcar y Café (Arts. 38 y 40 D.E. 23)',
    question: '¿Qué requisitos técnicos obligatorios exige el D.E. 23 para el transporte de caña de azúcar (Art. 38) y de café húmedo (Art. 40)?',
    statement: '¿Qué requisitos técnicos obligatorios exige el D.E. 23 para el transporte de caña de azúcar (Art. 38) y de café húmedo (Art. 40)?',
    options: [
      'Tapadera metálica de 1.80 a 2.35 m de altura para caña y protección plástica contra derrame de miel para café.',
      'Solo una lona de tela ligera para caña y costales abiertos para café.',
      'No existe regulación específica para productos agrícolas de cosecha estacional.',
      'Tapadera de madera de 1.00 m para caña y lavado de la cama en cada municipio para café.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Art. 38 del D.E. 23 exige tapadera metálica entre 1.80 y 2.35 m en camiones cañeros para evitar caída de tallos, y el Art. 40 obliga a usar protección plástica impermeable en café para impedir derrames de miel sobre el asfalto.',
    distractorRationale: {
      A: 'Los Arts. 38 y 40 exigen tapadera metálica (1.80–2.35 m) en caña y protección plástica antiderrame en café.',
      B: 'Una lona ligera no contiene la masa de la caña ni los costales abiertos retienen el escurrimiento de mieles.',
      C: 'El D.E. 23 regula explícitamente el transporte agrícola estacional por su alto impacto en seguridad vial.',
      D: 'Las dimensiones de 1.00 m en madera no cumplen la altura ni resistencia metálica reglamentaria.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. N.° 23) Art. 38 y Art. 40.'
  },
  {
    id: 'vmt-q66',
    category: 'teorico',
    topic: 'Restricción Urbana y Mercancías Peligrosas (D.E. 23)',
    signId: 'sign-r12',
    question: 'En distritos centrales urbanos rige una restricción general de carga pesada, y las unidades con mercancías peligrosas tienen reglas propias. ¿Cuáles son los valores correctos?',
    statement: 'En distritos centrales urbanos rige una restricción general de carga pesada, y las unidades con mercancías peligrosas tienen reglas propias. ¿Cuáles son los valores correctos?',
    options: [
      'Restricción urbana de 5 t y separación de 20 m con rombos de 10 cm.',
      'Restricción urbana de 12 t (agua potable hasta 21.5 t); mercancías peligrosas con 100 m de separación y rombos de 30 cm.',
      'Restricción urbana de 30 t y separación de 500 m con rombos de 15 cm.',
      'Sin límite urbano de peso y separación de 50 m entre cisternas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Los Arts. 43–46 del D.E. 23 fijan el límite urbano central en 12 toneladas (excepto cisternas de agua potable hasta 21.5 t), mientras que las mercancías peligrosas requieren separación mínima de 100 m y rombos de 30 cm.',
    distractorRationale: {
      A: 'Tanto 5 t como los rombos de 10 cm están por debajo de los mínimos reglamentarios vigentes.',
      B: '12 t de restricción central (21.5 t agua potable), 100 m de distancia mínima y rombos de 30 cm son las medidas oficiales.',
      C: '30 t excedería la capacidad de las vías centrales urbanas y los rombos de 15 cm serían poco legibles a distancia.',
      D: 'El ingreso de carga pesada a distritos centrales sí está estrictamente limitado por los Arts. 43–46 del D.E. 23.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. N.° 23) Arts. 43–46.'
  },
  {
    id: 'vmt-q67',
    category: 'teorico',
    topic: 'Longitud Máxima de Remolque y Tipos Especializados',
    question: '¿Cuál es la longitud máxima reglamentaria para un remolque estándar en El Salvador y qué tipo de remolque se selecciona para maquinaria alta e indivisible?',
    statement: '¿Cuál es la longitud máxima reglamentaria para un remolque estándar en El Salvador y qué tipo de remolque se selecciona para maquinaria alta e indivisible?',
    options: [
      '10.50 m de longitud máxima y remolque tipo cisterna.',
      '18.00 m de longitud máxima y portacontenedor de 20 pies.',
      '13.75 m de longitud máxima reglamentaria y remolque cama baja (lowboy).',
      '12.00 m de longitud máxima y plataforma abierta convencional.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La longitud máxima reglamentaria de un remolque estándar es de 13.75 metros, y para maquinaria pesada alta e indivisible se selecciona una cama baja (lowboy) para reducir la altura total y bajar el centro de gravedad.',
    distractorRationale: {
      A: 'La cisterna está diseñada exclusivamente para líquidos y gases a granel, no para maquinaria pesada.',
      B: '18.00 m excede el largo máximo de un remolque individual y el portacontenedor es para cajas ISO.',
      C: '13.75 m es el largo máximo reglamentario y el lowboy permite transportar maquinaria alta con centro de gravedad bajo.',
      D: 'Una plataforma convencional elevaría en exceso la maquinaria, arriesgando colisión con puentes o cables.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. N.° 23); Manual de Selección de Remolques.'
  },
  {
    id: 'vmt-q68',
    category: 'teorico',
    topic: 'Señalización de Obras Viales y Abanderado (Manual 2025)',
    signId: 'sign-p10',
    question: 'Al aproximarse a una zona de construcción con barricadas, conos naranja y un abanderado ordenando detenerse, ¿qué valor legal tienen sus indicaciones?',
    statement: 'Al aproximarse a una zona de construcción con barricadas, conos naranja y un abanderado ordenando detenerse, ¿qué valor legal tienen sus indicaciones?',
    options: [
      'Son meras sugerencias informativas que el conductor puede ignorar si tiene prisa.',
      'Solo aplican a vehículos de carga pesada y autobuses.',
      'Equivalen a una señal informativa turística de desvío opcional.',
      'Son de acatamiento obligatorio y prevalecen sobre la señalización fija ordinaria en la zona de obra.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'En la jerarquía de dispositivos de control de tránsito, las señales transitorias de obra (color naranja) y las órdenes del abanderado son obligatorias y prevalecen sobre las señales permanentes del tramo.',
    distractorRationale: {
      A: 'Ignorar a un abanderado pone en riesgo mortal a los trabajadores viales y constituye falta grave.',
      B: 'Todo usuario de la vía (livianos, motos y pesados) debe obedecer los dispositivos de obra.',
      C: 'Las señales naranjas de obra son transitorias de control y seguridad, nunca turísticas.',
      D: 'La señalización temporal de obra y el abanderado prevalecen sobre las señales fijas mientras duren los trabajos.'
    },
    legalReference: 'Manual de Tránsito 2025; Manual Centroamericano SIECA (Dispositivos Temporales).'
  },
  {
    id: 'vmt-q69',
    category: 'teorico',
    topic: 'Señal Preventiva de Pendiente Pronunciada para Carga',
    signId: 'sign-p12',
    question: '¿Qué maniobra operativa exige la señal preventiva de pendiente pronunciada descendente (bajar en compresión) en un vehículo de carga pesada?',
    statement: '¿Qué maniobra operativa exige la señal preventiva de pendiente pronunciada descendente (bajar en compresión) en un vehículo de carga pesada?',
    options: [
      'Engranar una marcha baja antes de iniciar el descenso y apoyarse en el freno de motor o retardador.',
      'Colocar la transmisión en punto muerto para ahorrar combustible diésel.',
      'Aplicar de forma continua y prolongada el pedal del freno de servicio durante toda la bajada.',
      'Apagar el motor en la cima para aprovechar el peso de la carga.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Antes de descender una pendiente pronunciada, el operador debe seleccionar una marcha baja (compresión) y utilizar el freno de motor para evitar el recalentamiento de zapatas y tambores (brake fade).',
    distractorRationale: {
      A: 'Bajar en compresión con marcha baja y freno de motor mantiene controlada la velocidad sin fatigar los frenos.',
      B: 'Descender en neutro anula la retención del motor y sobrecarga fatalmente el sistema neumático.',
      C: 'Pisar continuamente el freno de servicio recalienta tambores y zapatas hasta provocar pérdida total de frenado.',
      D: 'Apagar el motor detiene el compresor de aire y puede dejar sin presión de frenado ni dirección hidráulica al cabezal.'
    },
    legalReference: 'Manual de Tránsito 2025; Manual Técnico de Cabezales VMT.'
  },
  {
    id: 'vmt-q70',
    category: 'teorico',
    topic: 'Inspección Pre-Viaje y Brake Chambers en Cabezales',
    question: 'En la inspección técnica pre-viaje de un cabezal con frenos de aire, ¿qué componentes transforman la presión neumática en fuerza mecánica sobre las zapatas?',
    statement: 'En la inspección técnica pre-viaje de un cabezal con frenos de aire, ¿qué componentes transforman la presión neumática en fuerza mecánica sobre las zapatas?',
    options: [
      'Los inyectores de combustible y el turbocompresor.',
      'Las cámaras de freno o brake chambers ("chimbos") mediante sus varillas de empuje.',
      'Únicamente el plato de la quinta rueda y el perno rey.',
      'El alternador y el cable eléctrico de siete vías.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Las cámaras de freno (brake chambers o "chimbos") reciben el aire comprimido de las líneas de servicio/emergencia y empujan las varillas y ajustadores que presionan las zapatas contra los tambores.',
    distractorRationale: {
      A: 'Los inyectores y el turbo pertenecen al sistema de alimentación del motor, no al frenado.',
      B: 'Las cámaras de freno (brake chambers) convierten la presión de aire en empuje mecánico hacia las zapatas.',
      C: 'La quinta rueda y el king pin realizan el acople estructural, sin accionar las zapatas de rueda.',
      D: 'El alternador y el cable de siete vías suministran energía eléctrica, no fuerza neumática de frenado.'
    },
    legalReference: 'Manual Técnico de Inspección Pre-Viaje de Carga Pesada VMT.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 1: MARCO LEGAL, AUTORIDADES Y TIPOLOGÍA DE LICENCIAS (+31)
  // ==========================================================================
  {
    id: 'vmt-t061',
    category: 'teorico',
    topic: 'Objeto de la Ley de Transporte Terrestre (D.L. 477)',
    question: '¿Cuál es la finalidad primordial de la Ley de Transporte Terrestre, Tránsito y Seguridad Vial (D.L. 477) en El Salvador?',
    statement: '¿Cuál es la finalidad primordial de la Ley de Transporte Terrestre, Tránsito y Seguridad Vial (D.L. 477) en El Salvador?',
    options: [
      'Regular únicamente el cobro de peajes en autopistas concesionadas.',
      'Establecer el marco regulatorio del transporte terrestre, tránsito y seguridad vial para proteger la vida y bienes.',
      'Administrar exclusivamente los registros de importación aduanera de repuestos.',
      'Sustituir al Código Penal en todos los delitos cometidos con vehículos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El D.L. 477 regula de forma integral el transporte terrestre, la circulación vehicular y la seguridad vial con el fin de proteger la integridad de las personas y ordenar el tránsito.',
    distractorRationale: {
      A: 'La ley abarca toda la red vial nacional y no se limita a peajes.',
      B: 'El Art. 1 del D.L. 477 define su objeto integral sobre transporte, tránsito y seguridad vial.',
      C: 'El control aduanero de repuestos corresponde a la legislación tributaria y aduanera.',
      D: 'El D.L. 477 regula materia administrativa de tránsito sin derogar los tipos penales del Código Penal.'
    },
    legalReference: 'Ley de Transporte Terrestre, Tránsito y Seguridad Vial (D.L. 477) Art. 1.'
  },
  {
    id: 'vmt-t062',
    category: 'teorico',
    topic: 'Autoridad Rectora del Transporte Terrestre',
    question: '¿Qué institución del Órgano Ejecutivo ejerce la rectoría normativa y administrativa del transporte terrestre, tránsito y seguridad vial?',
    statement: '¿Qué institución del Órgano Ejecutivo ejerce la rectoría normativa y administrativa del transporte terrestre, tránsito y seguridad vial?',
    options: [
      'El Viceministerio de Transporte (VMT) adscrito al Ministerio de Obras Públicas y de Transporte.',
      'La Dirección General de Protección Civil de forma exclusiva.',
      'El Ministerio de Economía a través de la Defensoría del Consumidor.',
      'Cada concejo municipal mediante ordenanzas independientes en carreteras nacionales.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Viceministerio de Transporte (VMT) es la autoridad rectora encargada de planificar, regular y controlar el transporte terrestre, tránsito y seguridad vial en el país.',
    distractorRationale: {
      A: 'El VMT ejerce la rectoría administrativa y técnica del sector transporte y tránsito nacional.',
      B: 'Protección Civil coordina emergencias y desastres, no la rectoría vial ordinaria.',
      C: 'El Ministerio de Economía no tiene competencia rectora sobre licencias ni tránsito.',
      D: 'Las municipalidades no pueden emitir ordenanzas que invadan la rectoría nacional del VMT.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 4 y Art. 5.'
  },
  {
    id: 'vmt-t063',
    category: 'teorico',
    topic: 'Licencia de Motociclista — Edad y Requisitos',
    question: '¿Cuál es la edad mínima legal para optar a una Licencia de Motociclista ordinaria en El Salvador conforme al D.E. 61?',
    statement: '¿Cuál es la edad mínima legal para optar a una Licencia de Motociclista ordinaria en El Salvador conforme al D.E. 61?',
    options: [
      'Dieciséis años cumplidos con permiso verbal.',
      'Veintiún años cumplidos y dos años de experiencia previa.',
      'Dieciocho años cumplidos, sabiendo leer y escribir y aprobando los exámenes oficiales.',
      'Catorce años con autorización escolar.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El Art. 155 del Reglamento General de Tránsito (D.E. 61) exige haber cumplido 18 años para obtener la licencia ordinaria de motociclista, además de aprobar las evaluaciones visual, teórica y práctica.',
    distractorRationale: {
      A: 'Los menores entre 15 y 17 años solo pueden optar a licencia juvenil con requisitos notariales específicos.',
      B: 'La edad de 21 años aplica para licencias pesadas profesionales, no para motocicleta ordinaria.',
      C: 'Dieciocho años cumplidos y la aprobación de exámenes ante organismo evaluador autorizado son requisitos de ley.',
      D: 'A los 14 años no existe habilitación legal para conducir motocicletas en la vía pública.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155 y Art. 155-A.'
  },
  {
    id: 'vmt-t064',
    category: 'teorico',
    topic: 'Licencia Pesada — Capacidad y Tonelaje',
    question: '¿Qué vehículos habilita conducir la Licencia Pesada (sin categoría T) según el Art. 155-A del D.E. 61?',
    statement: '¿Qué vehículos habilita conducir la Licencia Pesada (sin categoría T) según el Art. 155-A del D.E. 61?',
    options: [
      'Únicamente motocicletas de alta cilindrada superior a 500 cc.',
      'Vehículos automotores de más de 30 pasajeros y/o camiones rígidos mayores a 5.0 toneladas hasta 12 toneladas.',
      'Solo automóviles sedán y pick-ups de uso familiar.',
      'Exclusivamente cabezales con doble semirremolque articulado.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La Licencia Pesada autoriza la conducción de autobuses de más de 30 pasajeros y camiones rígidos que superan las 5 toneladas de capacidad sin requerir articulación T.',
    distractorRationale: {
      A: 'Las motocicletas requieren licencia específica de motociclista independientemente de su cilindrada.',
      B: 'El Art. 155-A del D.E. 61 asigna el transporte colectivo mayor a 30 pasajeros y camiones rígidos pesados a esta categoría.',
      C: 'Los sedanes y pick-ups familiares corresponden a la Licencia Particular.',
      D: 'Los cabezales articulados con semirremolque exigen obligatoriamente la Licencia Pesada T.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155-A.'
  },
  {
    id: 'vmt-t065',
    category: 'teorico',
    topic: 'Vigencia de la Tarjeta de Circulación',
    question: '¿Cuál es el período ordinario de renovación de la tarjeta de circulación vehicular en El Salvador?',
    statement: '¿Cuál es el período ordinario de renovación de la tarjeta de circulación vehicular en El Salvador?',
    options: [
      'Cada cinco años calendario.',
      'Cada diez años junto con el DUI.',
      'Únicamente cuando el vehículo cambia de propietario.',
      'Anualmente, dentro del mes de nacimiento del propietario registrado.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La tarjeta de circulación debe refrendarse cada año dentro del mes de cumpleaños del propietario (o mes asignado para personas jurídicas) para mantener vigente el derecho de circulación.',
    distractorRationale: {
      A: 'El plazo de cinco años corresponde a la vigencia de la licencia de conducir, no de la tarjeta de circulación.',
      B: 'La tarjeta de circulación no sigue el ciclo decenal del documento de identidad.',
      C: 'El refrendo anual es obligatorio aun sin existir traspaso o compraventa.',
      D: 'La normativa establece la renovación anual vinculada al mes de nacimiento del titular.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 17 y D.E. 61.'
  },
  {
    id: 'vmt-t066',
    category: 'teorico',
    topic: 'Documentos Obligatorios de Porte',
    question: '¿Qué documentos originales y vigentes debe portar obligatoriamente todo conductor al circular en la vía pública?',
    statement: '¿Qué documentos originales y vigentes debe portar obligatoriamente todo conductor al circular en la vía pública?',
    options: [
      'Licencia de conducir vigente y tarjeta de circulación del vehículo.',
      'Fotocopia simple de la factura comercial del vehículo.',
      'Únicamente el comprobante de pago de combustible del día.',
      'Título de propiedad original de la vivienda del conductor.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Todo conductor debe portar su licencia de conducir vigente acorde a la categoría del automotor y la tarjeta de circulación vigente del vehículo que opera.',
    distractorRationale: {
      A: 'La ley exige el porte físico y vigente de la licencia de conducir y la tarjeta de circulación.',
      B: 'La factura comercial no sustituye la tarjeta de circulación ni acredita habilitación de manejo.',
      C: 'Los recibos de combustible carecen de valor legal como documento de tránsito.',
      D: 'Los títulos inmobiliarios no guardan relación con la habilitación vehicular.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 35 y D.E. 61 Art. 91.'
  },
  {
    id: 'vmt-t067',
    category: 'teorico',
    topic: 'Placas Vehiculares — Visibilidad e Integridad',
    question: '¿Cuál es la exigencia legal respecto a la colocación y legibilidad de las placas de identificación vehicular?',
    statement: '¿Cuál es la exigencia legal respecto a la colocación y legibilidad de las placas de identificación vehicular?',
    options: [
      'Pueden colocarse detrás del parabrisas polarizado si el conductor lo prefiere.',
      'Solo es obligatorio portar la placa trasera en automóviles particulares.',
      'Deben ir fijadas en los lugares destinados, limpias, iluminadas atrás y libres de objetos o micas que impidan su lectura.',
      'Pueden pintarse artesanalmente sobre cartón si se extravían.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Las placas deben portarse en los espacios exteriores diseñados para tal fin (delantera y trasera en automóviles), en buen estado, sin micas reflectivas ni obstrucciones que dificulten su identificación.',
    distractorRationale: {
      A: 'Colocar la placa tras un vidrio polarizado obstaculiza su lectura y constituye infracción.',
      B: 'Los automóviles deben portar ambas placas (delantera y trasera); solo las motocicletas llevan una trasera.',
      C: 'La normativa exige visibilidad plena, fijación reglamentaria e iluminación nocturna de la placa posterior.',
      D: 'Las placas artesanales o de cartón carecen de validez oficial y su uso es sancionado.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 30 y Art. 31.'
  },
  {
    id: 'vmt-t068',
    category: 'teorico',
    topic: 'Exámenes ante Organismo Evaluador Autorizado',
    question: 'Para obtener por primera vez la licencia de conducir en El Salvador, ¿qué evaluaciones obligatorias aplica el organismo evaluador autorizado?',
    statement: 'Para obtener por primera vez la licencia de conducir en El Salvador, ¿qué evaluaciones obligatorias aplica el organismo evaluador autorizado?',
    options: [
      'Únicamente una entrevista verbal sobre mecánica básica.',
      'Exámenes visual, teórico de normativa vial, psicológico/psicométrico y práctico de manejo.',
      'Solo el pago de derechos fiscales sin evaluación práctica.',
      'Un examen físico de resistencia atlética de cinco kilómetros.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El proceso de primera emisión exige aprobar las evaluaciones visual, teórica, psicológica y práctica ante el organismo evaluador autorizado por el VMT.',
    distractorRationale: {
      A: 'No existe modalidad de entrevista informal en sustitución de los exámenes reglamentarios.',
      B: 'Las cuatro evaluaciones verifican aptitud sensorial, conocimiento legal, estabilidad psicológica y destreza práctica.',
      C: 'El pago de derechos no exime al aspirante de demostrar idoneidad técnica y legal.',
      D: 'Las pruebas de atletismo no forman parte de los requisitos de tránsito.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155 y normativa VMT.'
  },
  {
    id: 'vmt-t069',
    category: 'teorico',
    topic: 'Clasificación de Infracciones de Tránsito',
    question: '¿Cómo clasifica la Ley de Transporte Terrestre, Tránsito y Seguridad Vial las infracciones administrativas de tránsito?',
    statement: '¿Cómo clasifica la Ley de Transporte Terrestre, Tránsito y Seguridad Vial las infracciones administrativas de tránsito?',
    options: [
      'En simples advertencias verbales sin sanción pecuniaria.',
      'Únicamente en infracciones diurnas y nocturnas.',
      'En infracciones de primera y segunda categoría según la marca del vehículo.',
      'En infracciones leves, graves y muy graves, cada una con su multa y puntaje respectivo.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La ley organiza las faltas administrativas en tres niveles de gravedad —leves, graves y muy graves— graduando el monto de la multa y las consecuencias sobre el historial del conductor.',
    distractorRationale: {
      A: 'Las infracciones tipificadas conllevan sanciones económicas y administrativas formales.',
      B: 'La clasificación legal se basa en el riesgo vial y no en la hora del día.',
      C: 'La marca o gama del vehículo no determina la categoría de la falta.',
      D: 'El Art. 117 del D.L. 477 estructura las infracciones en leves, graves y muy graves.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 117.'
  },
  {
    id: 'vmt-t070',
    category: 'teorico',
    topic: 'Licencia Juvenil — Limitación de Horario o Uso',
    question: '¿Para qué categoría vehicular puede emitirse la Licencia Juvenil entre los 15 y 17 años de edad?',
    statement: '¿Para qué categoría vehicular puede emitirse la Licencia Juvenil entre los 15 y 17 años de edad?',
    options: [
      'Únicamente para vehículos particulares y motocicletas de uso no comercial, con fianza solidaria de padres o tutores.',
      'Para transporte colectivo de pasajeros interdepartamental.',
      'Para camiones pesados de más de 12 toneladas métricas.',
      'Para tractocamiones articulados con semirremolque.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La Licencia Juvenil se limita estrictamente a vehículos particulares o motocicletas de uso privado, prohibiéndose su uso para transporte remunerado o carga pesada.',
    distractorRationale: {
      A: 'El Art. 155-A restringe la licencia juvenil a ámbitos particulares bajo garantía solidaria parental.',
      B: 'El transporte colectivo exige mayoría de edad y categoría Pesada profesional.',
      C: 'Los vehículos mayores a 5 y 12 toneladas requieren licencia profesional y edad mínima de 21 años.',
      D: 'La operación de cabezales articulados exige Licencia Pesada T y experiencia profesional.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155 y Art. 155-A.'
  },
  {
    id: 'vmt-t071',
    category: 'teorico',
    topic: 'Requisitos para Licencia Pesada T (Edad y Antigüedad)',
    question: 'Además de aprobar los exámenes técnicos especializados, ¿qué requisito de edad y experiencia exige la normativa para optar a la Licencia Pesada o Pesada T?',
    statement: 'Además de aprobar los exámenes técnicos especializados, ¿qué requisito de edad y experiencia exige la normativa para optar a la Licencia Pesada o Pesada T?',
    options: [
      'Tener 18 años recién cumplidos sin experiencia previa.',
      'Tener al menos 16 años y carta de recomendación vecinal.',
      'Ser mayor de 21 años y acreditar experiencia previa con licencia de categoría inferior.',
      'Tener 35 años cumplidos y título universitario en ingeniería.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La habilitación profesional para vehículos pesados y articulados exige mayoría de edad calificada (21 años) y trayectoria previa comprobada en categorías inferiores.',
    distractorRationale: {
      A: 'A los 18 años no se cumple el requisito de madurez ni de antigüedad previa exigido para carga pesada.',
      B: 'Las cartas vecinales carecen de validez y la edad mínima profesional es 21 años.',
      C: 'El Art. 155 del D.E. 61 establece los 21 años y la experiencia previa como filtros de seguridad profesional.',
      D: 'No se exige edad de 35 años ni grado universitario para conducir transporte pesado.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155.'
  },
  {
    id: 'vmt-t072',
    category: 'teorico',
    topic: 'Decomiso de Licencia por Falta Muy Grave',
    question: 'Conforme al Art. 118 de la Ley de Transporte Terrestre, ¿en qué circunstancia procede el decomiso preventivo de la licencia o remisión del vehículo?',
    statement: 'Conforme al Art. 118 de la Ley de Transporte Terrestre, ¿en qué circunstancia procede el decomiso preventivo de la licencia o remisión del vehículo?',
    options: [
      'Cuando el vehículo presenta un rayón superficial en el parachoques.',
      'Cuando el conductor maneja bajo efectos de alcohol o drogas, sin licencia o con placas alteradas.',
      'Cuando el conductor olvida encender el radio en zona urbana.',
      'Únicamente cuando el vehículo supera los diez años de antigüedad.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El Art. 118 de la LTTTSV faculta a la PNC-DTT a remitir el vehículo y retener documentos cuando concurren riesgos graves como conducción temeraria/peligrosa, carencia de licencia o alteración de placas.',
    distractorRationale: {
      A: 'Los daños estéticos menores en carrocería no constituyen causal de remisión.',
      B: 'La conducción bajo alcohol/estupefacientes, sin licencia o con placas alteradas activa medidas de remisión.',
      C: 'El uso del equipo de audio no es causal de decomiso vehicular.',
      D: 'La antigüedad del vehículo por sí sola no origina remisión si cumple las condiciones mecánicas.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 118.'
  },
  {
    id: 'vmt-t073',
    category: 'teorico',
    topic: 'Prohibición de Polarizado Excesivo',
    question: '¿Qué dispone el Reglamento General de Tránsito respecto al uso de películas polarizadas en el parabrisas delantero?',
    statement: '¿Qué dispone el Reglamento General de Tránsito respecto al uso de películas polarizadas en el parabrisas delantero?',
    options: [
      'Se permite polarizado totalmente opaco si el conductor usa lentes oscuros.',
      'Está permitido cubrir el 100% del parabrisas con lámina espejo.',
      'Es obligatorio instalar lámina negra en la mitad inferior del parabrisas.',
      'Se prohíbe el polarizado que reduzca la visibilidad reglamentaria del conductor hacia el exterior e interior.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La normativa exige mantener la transparencia mínima reglamentaria en vidrios y parabrisas para garantizar la visión nocturna del conductor y la fiscalización por parte de las autoridades.',
    distractorRationale: {
      A: 'El polarizado opaco compromete gravemente la visión nocturna y es sancionable.',
      B: 'Las láminas tipo espejo generan deslumbramiento a terceros y están prohibidas.',
      C: 'La obstrucción de la mitad inferior del parabrisas impediría ver la calzada próxima.',
      D: 'El D.E. 61 prohíbe cualquier polarizado que exceda los límites de opacidad permitidos.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 39 y Art. 117.'
  },
  {
    id: 'vmt-t074',
    category: 'teorico',
    topic: 'Registro Público de Vehículos Automotores',
    question: '¿Qué entidad administra el Registro Público de Vehículos Automotores en El Salvador?',
    statement: '¿Qué entidad administra el Registro Público de Vehículos Automotores en El Salvador?',
    options: [
      'El Viceministerio de Transporte a través de su Dirección General de Tránsito.',
      'El Ministerio de Relaciones Exteriores.',
      'La Asociación Salvadoreña de Aseguradoras.',
      'El Registro de Comercio de forma directa.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Registro Público de Vehículos Automotores funciona bajo la órbita del Viceministerio de Transporte (VMT) para inscribir propiedad, gravámenes y características técnicas.',
    distractorRationale: {
      A: 'El VMT mantiene la titularidad legal del registro vehicular nacional.',
      B: 'Cancillería atiende asuntos diplomáticos y consulares, no registros automotores nacionales.',
      C: 'Las aseguradoras son entidades privadas sin potestad registral pública.',
      D: 'El Registro de Comercio inscribe sociedades y actos mercantiles, no matrículas vehiculares.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 12 y Art. 13.'
  },
  {
    id: 'vmt-t075',
    category: 'teorico',
    topic: 'Cambio de Domicilio o Datos del Titular',
    question: 'Si un conductor cambia de domicilio o modifica datos esenciales vinculados a su licencia, ¿qué obligación administrativa tiene?',
    statement: 'Si un conductor cambia de domicilio o modifica datos esenciales vinculados a su licencia, ¿qué obligación administrativa tiene?',
    options: [
      'Ninguna, pues la licencia nunca requiere actualización de datos.',
      'Esperar veinte años hasta que caduque el DUI.',
      'Notificar y actualizar sus datos ante el registro oficial correspondiente del VMT.',
      'Colocar una etiqueta adhesiva escrita a mano sobre el plástico.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los titulares deben mantener actualizados sus datos personales y de residencia en el registro oficial para efectos de notificaciones de esquelas y trámites de refrenda.',
    distractorRationale: {
      A: 'La ley establece el deber de mantener veraz la información registral.',
      B: 'No existe dispensa de veinte años para omitir actualizaciones registrales.',
      C: 'La actualización oficial ante el registro del VMT asegura la validez de notificaciones.',
      D: 'Alterar físicamente el documento con etiquetas invalida la licencia.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 156.'
  },
  {
    id: 'vmt-t076',
    category: 'teorico',
    topic: 'Uso Indebido de Sirenas y Luces de Emergencia',
    question: '¿Qué sanción o restricción aplica a vehículos particulares que instalan sirenas o luces estroboscópicas azules y rojas sin autorización?',
    statement: '¿Qué sanción o restricción aplica a vehículos particulares que instalan sirenas o luces estroboscópicas azules y rojas sin autorización?',
    options: [
      'Se permite libremente si el conductor viaja con prisa laboral.',
      'Está estrictamente prohibido y constituye infracción grave con retiro de los dispositivos.',
      'Es obligatorio en vehículos deportivos para mejorar su estética.',
      'Se autoriza únicamente los fines de semana.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Las luces de destello azul/rojo y las sirenas están reservadas exclusivamente para vehículos oficiales de emergencia (PNC, ambulancias, bomberos) en servicio.',
    distractorRationale: {
      A: 'La prisa personal jamás habilita el uso de dispositivos de prioridad oficial.',
      B: 'Suplantar señales de emergencia confunde al tránsito y conlleva sanción y decomiso del equipo.',
      C: 'Los fines estéticos no justifican la instalación de señales reservadas a cuerpos de socorro.',
      D: 'La prohibición rige todos los días de la semana sin excepción.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 41 y D.L. 477.'
  },
  {
    id: 'vmt-t077',
    category: 'teorico',
    topic: 'Renovación de Licencia — Examen Visual',
    question: 'Al momento de renovar la licencia de conducir vencida, ¿qué requisito médico básico debe acreditarse ante el organismo evaluador autorizado?',
    statement: 'Al momento de renovar la licencia de conducir vencida, ¿qué requisito médico básico debe acreditarse ante el organismo evaluador autorizado?',
    options: [
      'Una radiografía completa de columna vertebral.',
      'Certificado de vacunación internacional.',
      'Prueba de esfuerzo cardiovascular en banda sin fin.',
      'Examen visual vigente que confirme agudeza y campo visual aptos para conducir.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La renovación de la licencia requiere verificar que el conductor conserva la agudeza visual y percepción cromática necesarias para interpretar señales y obstáculos.',
    distractorRationale: {
      A: 'No se exige radiografía de columna para la renovación ordinaria.',
      B: 'Las vacunas internacionales son requisitos sanitarios migratorios, no viales.',
      C: 'La prueba de esfuerzo cardíaco no es requisito estándar de refrenda.',
      D: 'El examen visual obligatorio verifica si el conductor requiere lentes correctivos al manejar.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155 y Art. 157.'
  },
  {
    id: 'vmt-t078',
    category: 'teorico',
    topic: 'Restricción por Uso de Lentes Correctivos',
    question: 'Si la licencia de conducir indica la restricción de uso obligatorio de lentes correctivos y el conductor maneja sin ellos, ¿cuál es la consecuencia?',
    statement: 'Si la licencia de conducir indica la restricción de uso obligatorio de lentes correctivos y el conductor maneja sin ellos, ¿cuál es la consecuencia?',
    options: [
      'Comete una infracción de tránsito al incumplir la condición médica habilitante de su licencia.',
      'No ocurre nada si conduce únicamente de día.',
      'Puede compensarlo bajando la velocidad a 40 km/h.',
      'Solo es sancionable en carreteras interdepartamentales.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Conducir sin los lentes prescritos en la licencia viola las restricciones médicas del documento y compromete seriamente la seguridad visual.',
    distractorRationale: {
      A: 'La restricción anotada en la licencia es de acatamiento obligatorio en todo momento de conducción.',
      B: 'La deficiencia visual persiste de día y la obligación no distingue horario.',
      C: 'Reducir la velocidad no sustituye la corrección óptica prescrita.',
      D: 'La obligación rige en toda vía pública urbana o rural.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155 y Art. 117 D.L. 477.'
  },
  {
    id: 'vmt-t079',
    category: 'teorico',
    topic: 'Traspaso de Vehículo — Plazo Legal',
    question: 'Al comprar o vender un vehículo automotor usado en El Salvador, ¿por qué es fundamental formalizar el traspaso ante el Registro Público de Vehículos?',
    statement: 'Al comprar o vender un vehículo automotor usado en El Salvador, ¿por qué es fundamental formalizar el traspaso ante el Registro Público de Vehículos?',
    options: [
      'Para evitar pagar el impuesto de combustible en gasolineras.',
      'Para exonerar al vehículo de toda multa futura de tránsito.',
      'Para transferir legalmente la titularidad y deslindar responsabilidades civiles y administrativas por infracciones.',
      'Únicamente para poder cambiar el color de la pintura.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Inscribir la compraventa actualiza al propietario legal ante el VMT, evitando que multas o responsabilidades civiles por siniestros sigan recayendo sobre el vendedor anterior.',
    distractorRationale: {
      A: 'El impuesto al combustible se paga en el precio del hidrocarburo sin relación con el traspaso.',
      B: 'Las infracciones siguen imponiéndose al vehículo o conductor independientemente del traspaso.',
      C: 'El registro público da certeza jurídica sobre quién responde civil y administrativamente por el automotor.',
      D: 'El cambio de color es un trámite distinto al traspaso de propiedad.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 14 y Art. 17.'
  },
  {
    id: 'vmt-t080',
    category: 'teorico',
    topic: 'Vehículos Exentos de Matrícula Ordinaria',
    question: '¿Qué tipo de placas identifican a los vehículos destinados al transporte público de pasajeros o de carga comercial remunerada?',
    statement: '¿Qué tipo de placas identifican a los vehículos destinados al transporte público de pasajeros o de carga comercial remunerada?',
    options: [
      'Placas particulares (P) sin distinción alguna.',
      'Placas de alquiler/transporte público (A, AB, MB) o carga comercial (C) según la modalidad autorizada.',
      'Placas diplomáticas (CD) exclusivamente.',
      'Placas provisionales de papel emitidas por talleres.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El sistema de matrículas salvadoreño distingue el uso del automotor mediante prefijos específicos: P (Particular), A/AB/MB (Transporte público), C (Carga), M (Motocicleta), N (Nacional), entre otros.',
    distractorRationale: {
      A: 'Prestar servicio público remunerado con placa particular es ilegal (transporte pirata).',
      B: 'Cada prefijo de placa identifica la naturaleza jurídica del servicio autorizado por el VMT.',
      C: 'Las placas CD pertenecen exclusivamente a misiones diplomáticas acreditadas.',
      D: 'Los talleres privados no tienen facultad legal para emitir placas de circulación.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 28 y Art. 29.'
  },
  {
    id: 'vmt-t081',
    category: 'teorico',
    topic: 'Obligación de Ceder Datos en Control Policial',
    question: 'Ante una señal de alto realizada por un agente de la PNC-DTT en un retén oficial, ¿cuál es la conducta legal obligatoria del conductor?',
    statement: 'Ante una señal de alto realizada por un agente de la PNC-DTT en un retén oficial, ¿cuál es la conducta legal obligatoria del conductor?',
    options: [
      'Acelerar para evitar retrasos si no ha cometido ninguna falta.',
      'Exigir una orden judicial escrita antes de bajar la ventanilla.',
      'Bajar únicamente si el agente porta un radar de velocidad.',
      'Detener la marcha en lugar seguro, apagar luces altas y presentar licencia y tarjeta de circulación vigentes.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Los agentes de la PNC-DTT tienen autoridad legal para realizar controles preventivos en la vía pública; el conductor debe acatar la señal de detención y exhibir sus documentos.',
    distractorRationale: {
      A: 'Evadir un control policial constituye desacato e infracción muy grave.',
      B: 'La verificación de documentos en vía pública no requiere orden judicial previa.',
      C: 'La facultad de control abarca documentación, estado mecánico y pruebas de alcotest, no solo velocidad.',
      D: 'Detenerse con seguridad y mostrar los documentos originales cumple con el Art. 115 del D.L. 477.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 6 y Art. 115.'
  },
  {
    id: 'vmt-t082',
    category: 'teorico',
    topic: 'Transporte Remunerado con Licencia Particular',
    question: '¿Puede un conductor con Licencia Particular operar un autobús de ruta urbana o un camión comercial de 8 toneladas?',
    statement: '¿Puede un conductor con Licencia Particular operar un autobús de ruta urbana o un camión comercial de 8 toneladas?',
    options: [
      'No, está prohibido porque excede la categoría habilitada y constituye infracción grave.',
      'Sí, siempre que el autobús viaje sin pasajeros.',
      'Sí, si cuenta con permiso verbal del dueño de la unidad.',
      'Sí, durante horarios nocturnos de menor tráfico.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Conducir un vehículo que requiere una categoría superior (Pesada) portando únicamente Licencia Particular equivale a conducir sin la habilitación legal correspondiente.',
    distractorRationale: {
      A: 'Cada categoría de licencia fija límites estrictos de pasajeros, peso y tipo de servicio.',
      B: 'La exigencia de categoría depende de la capacidad del vehículo, no de si lleva pasajeros en ese momento.',
      C: 'El propietario privado no puede autorizar lo que la ley prohíbe.',
      D: 'El horario nocturno no flexibiliza los requisitos de licencia.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155-A y Art. 117 D.L. 477.'
  },
  {
    id: 'vmt-t083',
    category: 'teorico',
    topic: 'Motocicletas — Prohibición de Circulación en Aceras',
    question: 'En condiciones de congestión vehicular severa, ¿es lícito que un motociclista suba a la acera o andén peatonal para avanzar?',
    statement: 'En condiciones de congestión vehicular severa, ¿es lícito que un motociclista suba a la acera o andén peatonal para avanzar?',
    options: [
      'Sí, si circula a menos de 10 km/h tocando la bocina.',
      'Sí, cuando no haya peatones visibles en los próximos cinco metros.',
      'No, las aceras son de uso exclusivo peatonal y circular sobre ellas está estrictamente prohibido.',
      'Sí, únicamente en días de lluvia intensa.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Las aceras están reservadas exclusivamente para el tránsito seguro de peatones; invadirlas con motocicletas o automóviles pone en grave peligro a los transeúntes.',
    distractorRationale: {
      A: 'La baja velocidad o el uso de bocina no legitiman invadir la zona peatonal.',
      B: 'Un peatón puede salir repentinamente de un inmueble; la prohibición es absoluta.',
      C: 'El D.E. 61 protege la integridad peatonal prohibiendo la circulación vehicular sobre aceras y zonas verdes.',
      D: 'Las condiciones climáticas no autorizan a invadir aceras.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 106 y Art. 117 D.L. 477.'
  },
  {
    id: 'vmt-t084',
    category: 'teorico',
    topic: 'Solvencia de Esquelas para Trámites VMT',
    question: '¿Qué requisito administrativo exige la normativa para poder refrendar la licencia de conducir o la tarjeta de circulación?',
    statement: '¿Qué requisito administrativo exige la normativa para poder refrendar la licencia de conducir o la tarjeta de circulación?',
    options: [
      'Presentar tres cartas de buena conducta laboral.',
      'Estar solvente de esquelas de tránsito pendientes o haber formalizado plan de pago autorizado.',
      'Demostrar que el vehículo recorrió menos de 5,000 km al año.',
      'Haber asistido a una audiencia judicial anual.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El sistema exige estar solvente de multas de tránsito firmes (o al día en su convenio de pago) para autorizar la renovación de documentos vehiculares o licencias.',
    distractorRationale: {
      A: 'Las cartas laborales no son requisito para refrenda vehicular.',
      B: 'La solvencia de esquelas garantiza el cumplimiento del régimen sancionatorio administrativo.',
      C: 'No existe límite máximo de kilometraje anual para renovar documentos.',
      D: 'Las renovaciones ordinarias son trámites administrativos sin audiencia judicial.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 119 y Art. 120.'
  },
  {
    id: 'vmt-t085',
    category: 'teorico',
    topic: 'Derecho de Apelación de Esquelas',
    question: 'Si un conductor considera que una esquela de infracción fue impuesta de forma improcedente, ¿en qué plazo hábil puede interponer recurso de inconformidad ante el VMT?',
    statement: 'Si un conductor considera que una esquela de infracción fue impuesta de forma improcedente, ¿en qué plazo hábil puede interponer recurso de inconformidad ante el VMT?',
    options: [
      'Dentro de los sesenta días calendario siguientes.',
      'Únicamente dentro de las primeras dos horas posteriores.',
      'No existe ningún recurso administrativo contra esquelas.',
      'Dentro de los cinco días hábiles siguientes a la imposición de la esquela.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La Ley de Transporte Terrestre garantiza el debido proceso administrativo permitiendo presentar escrito de inconformidad y pruebas dentro de los 5 días hábiles posteriores.',
    distractorRationale: {
      A: 'Sesenta días excede ampliamente el plazo legal de impugnación administrativa.',
      B: 'Dos horas sería un plazo irreal que vulneraría el derecho de defensa.',
      C: 'Todo acto administrativo sancionador admite impugnación conforme a ley.',
      D: 'El Art. 119 de la LTTTSV fija el plazo de cinco días hábiles para impugnar esquelas.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 119.'
  },
  {
    id: 'vmt-t086',
    category: 'teorico',
    topic: 'Clasificación de Vías Públicas',
    question: '¿Cómo se clasifican funcionalmente las vías públicas terrestres según el Reglamento General de Tránsito?',
    statement: '¿Cómo se clasifican funcionalmente las vías públicas terrestres según el Reglamento General de Tránsito?',
    options: [
      'En vías urbanas (calles, avenidas, bulevares) y vías interurbanas o carreteras (primarias, secundarias y rurales).',
      'Únicamente en vías pavimentadas y caminos privados.',
      'En autopistas de lujo y calles vecinales sin regulación.',
      'Solo en vías de un sentido y vías peatonales.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El reglamento distingue entre vías urbanas dentro del perímetro municipal y carreteras o vías interurbanas que conectan departamentos y municipios.',
    distractorRationale: {
      A: 'La clasificación legal distingue ámbitos urbanos e interurbanos para asignar velocidades y prioridades.',
      B: 'Los caminos estrictamente privados no integran la red vial pública regulada.',
      C: 'Todas las vías públicas están sujetas a regulación de tránsito sin distinción de "lujo".',
      D: 'Existen vías de doble sentido, autopistas y carreteras que exceden esa simplificación.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 5 y Art. 6.'
  },
  {
    id: 'vmt-t087',
    category: 'teorico',
    topic: 'Modificación de Características del Vehículo',
    question: 'Si el propietario cambia el color original de su automóvil o sustituye el motor, ¿qué trámite obligatorio debe realizar?',
    statement: 'Si el propietario cambia el color original de su automóvil o sustituye el motor, ¿qué trámite obligatorio debe realizar?',
    options: [
      'Ninguno, porque la factura del taller reemplaza la tarjeta.',
      'Pintar el número de motor antiguo en el parabrisas.',
      'Registrar la modificación en el Registro Público de Vehículos del VMT y actualizar la tarjeta de circulación.',
      'Esperar diez años para informarlo.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Toda alteración en características identificativas como color o número de motor debe inscribirse en el registro vehicular para que la tarjeta de circulación coincida con el automotor.',
    distractorRationale: {
      A: 'La factura del taller acredita el trabajo realizado, pero no actualiza el registro oficial.',
      B: 'Rotular números en el parabrisas carece de valor registral y obstruye la visión.',
      C: 'La concordancia entre vehículo físico y tarjeta de circulación es obligatoria para evitar decomisos.',
      D: 'Circular con datos discordantes en controles policiales genera retención inmediata del vehículo.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 15 y D.E. 61.'
  },
  {
    id: 'vmt-t088',
    category: 'teorico',
    topic: 'Transporte Escolar — Requisitos Especiales',
    question: '¿Qué exigencia técnica y de identificación distingue a los vehículos autorizados para transporte escolar en El Salvador?',
    statement: '¿Qué exigencia técnica y de identificación distingue a los vehículos autorizados para transporte escolar en El Salvador?',
    options: [
      'Circular a más de 90 km/h para llegar puntual a clases.',
      'Contar con permiso especial del VMT, rotulación visible de "Transporte Escolar", cinturones y revisión mecánica vigente.',
      'Usar vidrios totalmente negros para privacidad de los menores.',
      'Transportar a los estudiantes de pie en los pasillos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El transporte escolar requiere autorización específica del VMT, señalización visible, condiciones mecánicas certificadas y medidas de seguridad interna para menores.',
    distractorRationale: {
      A: 'En zonas y rutas escolares rigen límites estrictos de baja velocidad, nunca 90 km/h.',
      B: 'La normativa protege a los escolares mediante rotulación preventiva, revisión técnica y permisos específicos.',
      C: 'Los vidrios opacos están prohibidos por razones de seguridad y supervisión.',
      D: 'Todos los menores deben viajar sentados y debidamente asegurados.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) y normativa VMT de Transporte Escolar.'
  },
  {
    id: 'vmt-t089',
    category: 'teorico',
    topic: 'Prohibición de Competencias Callejeras',
    question: '¿Cómo califica la normativa salvadoreña la realización de carreras clandestinas o competencias de velocidad ("piques") en la vía pública?',
    statement: '¿Cómo califica la normativa salvadoreña la realización de carreras clandestinas o competencias de velocidad ("piques") en la vía pública?',
    options: [
      'Como actividad recreativa tolerada después de la medianoche.',
      'Como infracción leve sujeta solo a amonestación.',
      'Como falta administrativa permitida en bulevares amplios.',
      'Como conducta de alto riesgo tipificada en el delito de conducción peligrosa (Art. 147-E CP) y falta muy grave.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Disputar carreras no autorizadas en vías públicas pone en peligro la vida de terceros y encuadra en el delito de conducción peligrosa del Art. 147-E del Código Penal.',
    distractorRationale: {
      A: 'La hora nocturna no legaliza competencias ilegales en calles o carreteras.',
      B: 'No es una falta leve; conlleva detención, proceso penal y decomiso del automotor.',
      C: 'El ancho del bulevar no autoriza competencias de velocidad sin permiso oficial y cierre vial.',
      D: 'El Art. 147-E CP sanciona penalmente las competencias de velocidad no autorizadas en la vía pública.'
    },
    legalReference: 'Código Penal Art. 147-E y Ley de Transporte Terrestre (D.L. 477).'
  },
  {
    id: 'vmt-t090',
    category: 'teorico',
    topic: 'Uso Obligatorio de Casco en Motocicleta',
    question: '¿Quiénes están obligados por ley a portar casco protector debidamente abrochado al circular en motocicleta?',
    statement: '¿Quiénes están obligados por ley a portar casco protector debidamente abrochado al circular en motocicleta?',
    options: [
      'Tanto el conductor como su acompañante en todo trayecto.',
      'Únicamente el conductor en carreteras interurbanas.',
      'Solo el acompañante si es menor de edad.',
      'Ninguno, si el recorrido es menor a un kilómetro.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Reglamento General de Tránsito exige el uso de casco certificado y correctamente ajustado tanto para el motociclista como para su pasajero sin excepción de distancia.',
    distractorRationale: {
      A: 'Ambos ocupantes sufren el mismo riesgo de trauma craneoencefálico y están obligados por ley.',
      B: 'La obligación rige tanto en zonas urbanas como rurales y para ambos ocupantes.',
      C: 'El conductor adulto también tiene obligación estricta de usar casco.',
      D: 'La mayoría de siniestros graves ocurren en trayectos cortos cercanos al origen o destino.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 107 y D.L. 477.'
  },
  {
    id: 'vmt-t091',
    category: 'teorico',
    topic: 'Límite de Ocupantes en Motocicleta',
    question: '¿Cuál es el número máximo de personas que pueden viajar legalmente en una motocicleta ordinaria de dos ruedas?',
    statement: '¿Cuál es el número máximo de personas que pueden viajar legalmente en una motocicleta ordinaria de dos ruedas?',
    options: [
      'Tres personas si el tercer pasajero es un niño pequeño.',
      'Cuatro personas en trayectos rurales.',
      'Máximo dos personas (conductor y un acompañante), según el diseño del asiento.',
      'No existe límite mientras no roce el neumático trasero.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Las motocicletas están diseñadas para un máximo de dos ocupantes; transportar tres o más personas desestabiliza el centro de gravedad y viola el reglamento.',
    distractorRationale: {
      A: 'Transportar niños como tercer ocupante multiplica exponencialmente el riesgo fatal.',
      B: 'Las vías rurales presentan irregularidades que hacen aún más peligroso el sobrecupo.',
      C: 'El diseño estructural y la ley limitan la capacidad a dos personas con casco.',
      D: 'La capacidad legal la determina el asiento y la norma, no la altura de la suspensión.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 107.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 2: SEÑALIZACIÓN VIAL SIECA, SEMÁFOROS Y MARCAS (+41)
  // ==========================================================================
  {
    id: 'vmt-t092',
    category: 'teorico',
    topic: 'Señal Reglamentaria de Alto (STOP)',
    signId: 'sign-r1',
    question: 'Al aproximarse a la señal octogonal roja mostrada en la imagen, ¿qué acción es legalmente obligatoria?',
    statement: 'Al aproximarse a la señal octogonal roja mostrada en la imagen, ¿qué acción es legalmente obligatoria?',
    options: [
      'Reducir la velocidad a 20 km/h y continuar si no se escuchan bocinas.',
      'Detener completamente la marcha del vehículo antes de la línea de parada y ceder el paso.',
      'Tocar la bocina dos veces y cruzar rápidamente.',
      'Detenerse únicamente si hay un agente policial visible.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal R-1 (Alto) ordena la detención total de las ruedas antes de la línea de parada o cruce peatonal, verificando que la vía esté libre antes de reanudar.',
    distractorRationale: {
      A: 'Reducir la velocidad sin detenerse por completo ("alto rodado") constituye infracción.',
      B: 'La detención total y absoluta es obligatoria independientemente del flujo vehicular observado.',
      C: 'El uso de bocina no sustituye la obligación de detenerse.',
      D: 'La señal reglamentaria es de acatamiento permanente haya o no presencia policial.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-1; D.E. 61 Art. 74.'
  },
  {
    id: 'vmt-t093',
    category: 'teorico',
    topic: 'Señal Reglamentaria de Ceda el Paso',
    signId: 'sign-r2',
    question: '¿Qué indica la señal triangular invertida mostrada en la ilustración?',
    statement: '¿Qué indica la señal triangular invertida mostrada en la ilustración?',
    options: [
      'Prioridad absoluta sobre los vehículos de la vía principal.',
      'Prohibición total de ingresar a la intersección.',
      'Zona de estacionamiento exclusivo para taxis.',
      'Obligación de disminuir la velocidad y ceder el paso al flujo vehicular de la vía prioritaria, deteniéndose si es necesario.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La señal R-2 (Ceda el Paso) advierte que el flujo transversal tiene preferencia; debe moderarse la marcha y detenerse si viene algún vehículo cercano.',
    distractorRationale: {
      A: 'Indica exactamente lo contrario: pérdida de prioridad frente a la vía principal.',
      B: 'No prohíbe el ingreso, sino que lo condiciona a que la vía prioritaria esté despejada.',
      C: 'Las paradas de taxi se indican con señales informativas rectangulares azules.',
      D: 'El triángulo invertido exige ceder la prioridad al tránsito que circula por la vía preferente.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-2; D.E. 61 Art. 74.'
  },
  {
    id: 'vmt-t094',
    category: 'teorico',
    topic: 'Señal de Velocidad Máxima Permitida',
    signId: 'sign-r3',
    question: '¿Qué ordena la señal reglamentaria de velocidad mostrada en la figura?',
    statement: '¿Qué ordena la señal reglamentaria de velocidad mostrada en la figura?',
    options: [
      'Fija el límite máximo absoluto de 60 km/h en ese tramo bajo condiciones normales.',
      'Recomienda circular como mínimo a 60 km/h en el carril izquierdo.',
      'Indica que faltan 60 kilómetros para la próxima ciudad.',
      'Autoriza circular a 90 km/h si la vía está seca.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La señal reglamentaria R-3 establece el techo máximo legal de velocidad permitido en ese sector; superarlo constituye infracción.',
    distractorRationale: {
      A: 'El numeral dentro del círculo rojo fija el límite máximo legal obligatorio de 60 km/h.',
      B: 'Las velocidades mínimas se indican con señales específicas distintas de esta reglamentaria.',
      C: 'Las distancias a destinos aparecen en señales informativas de fondo verde o azul.',
      D: 'Ninguna condición de calzada seca autoriza exceder el límite reglamentario.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-3; D.E. 61 Art. 98.'
  },
  {
    id: 'vmt-t095',
    category: 'teorico',
    topic: 'Señal de Prohibido Estacionar',
    signId: 'sign-r4',
    question: '¿Qué prohibición específica establece la señal mostrada con la letra E tachada?',
    statement: '¿Qué prohibición específica establece la señal mostrada con la letra E tachada?',
    options: [
      'Prohíbe el ingreso de vehículos eléctricos.',
      'Prohíbe estacionar vehículos en el tramo afectado por la señal.',
      'Indica entrada exclusiva de emergencia.',
      'Autoriza estacionar durante más de dos horas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal R-4 prohíbe dejar el vehículo estacionado o aparcado en el costado de la vía donde está instalada, salvo emergencia mecánica señalizada.',
    distractorRationale: {
      A: 'La letra E hace referencia a Estacionamiento, no a vehículos eléctricos.',
      B: 'La barra diagonal roja sobre la E prohíbe el estacionamiento en ese tramo.',
      C: 'Las entradas de emergencia se señalizan con rótulos informativos específicos.',
      D: 'La prohibición de estacionar rige desde la señal hacia adelante hasta la próxima esquina o fin de restricción.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-4; D.E. 61 Art. 102.'
  },
  {
    id: 'vmt-t096',
    category: 'teorico',
    topic: 'Sentido de Circulación Obligatorio',
    signId: 'sign-r5',
    question: '¿Qué indica la señal reglamentaria con flecha direccional obligatoria?',
    statement: '¿Qué indica la señal reglamentaria con flecha direccional obligatoria?',
    options: [
      'Que el carril es de doble sentido opcional.',
      'Que el estacionamiento está permitido en ángulo.',
      'La dirección única obligatoria que deben seguir todos los vehículos en esa vía o carril.',
      'Proximidad de una estación de servicio.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La señal R-5 obliga a circular exclusivamente en el sentido indicado por la flecha, prohibiendo circular en sentido contrario.',
    distractorRationale: {
      A: 'El sentido único obliga a todos los vehículos a desplazarse en la dirección marcada.',
      B: 'No guarda relación con estacionamiento en batería o ángulo.',
      C: 'Indica el sentido obligatorio de circulación para prevenir choques frontales.',
      D: 'Las gasolineras se anuncian con señales informativas de servicio (fondo azul).'
    },
    legalReference: 'Manual SIECA 2025 Señal R-5.'
  },
  {
    id: 'vmt-t097',
    category: 'teorico',
    topic: 'Prohibido Girar a la Izquierda',
    signId: 'sign-r6',
    question: 'Al encontrar la señal ilustrada antes de una intersección, ¿qué maniobra queda estrictamente prohibida?',
    statement: 'Al encontrar la señal ilustrada antes de una intersección, ¿qué maniobra queda estrictamente prohibida?',
    options: [
      'Continuar de frente por el mismo carril.',
      'Girar hacia la derecha en luz verde.',
      'Detenerse ante el semáforo en rojo.',
      'Realizar un giro hacia la izquierda en esa intersección.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La señal R-6 prohíbe virar hacia la izquierda en la intersección inmediata para evitar bloqueos de flujo o colisiones con tránsito opuesto.',
    distractorRationale: {
      A: 'Continuar de frente permanece permitido salvo otra señal en contrario.',
      B: 'La flecha tachada apunta a la izquierda, no a la derecha.',
      C: 'Las detenciones ante luz roja siguen siendo obligatorias.',
      D: 'El trazo rojo diagonal sobre la flecha izquierda prohíbe expresamente ese viraje.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-6; D.E. 61.'
  },
  {
    id: 'vmt-t098',
    category: 'teorico',
    topic: 'Prohibido Adelantar / Rebasar',
    signId: 'sign-r7',
    question: '¿Qué restricción impone la señal reglamentaria con dos vehículos paralelos y barra roja diagonal?',
    statement: '¿Qué restricción impone la señal reglamentaria con dos vehículos paralelos y barra roja diagonal?',
    options: [
      'Prohíbe adelantar o rebasar a otros vehículos automotores en ese tramo de vía.',
      'Obliga a circular en caravana a menos de 20 km/h.',
      'Prohíbe circular en vehículos de color oscuro.',
      'Autoriza el rebase únicamente por el carril derecho.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La señal R-7 prohíbe efectuar maniobras de adelantamiento en zonas de visibilidad limitada, curvas, puentes o pendientes.',
    distractorRationale: {
      A: 'La prohibición de adelantar previene colisiones frontales en tramos de alto riesgo.',
      B: 'No impone una velocidad máxima de 20 km/h ni obliga a formar caravana.',
      C: 'Los colores de la silueta son simbólicos y aplican a todo vehículo.',
      D: 'Está prohibido rebasar por cualquier lado mientras rija la señal.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-7; D.E. 61 Art. 96.'
  },
  {
    id: 'vmt-t099',
    category: 'teorico',
    topic: 'Altura Máxima Permitida',
    signId: 'sign-r10',
    question: '¿Qué advertencia obligatoria representa la señal reglamentaria con el valor 4.10 m entre flechas verticales?',
    statement: '¿Qué advertencia obligatoria representa la señal reglamentaria con el valor 4.10 m entre flechas verticales?',
    options: [
      'Que la anchura mínima del puente es 4.10 metros.',
      'Que está prohibido el paso de vehículos cuya altura total (incluida la carga) supere los 4.10 metros.',
      'Que la distancia de frenado debe ser de 4.10 metros.',
      'Que la profundidad del río cercano es 4.10 metros.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal R-10 restringe la circulación a vehículos cuya altura no supere los 4.10 metros, evitando impactos contra pasos a desnivel, puentes o cables.',
    distractorRationale: {
      A: 'Las flechas verticales superior e inferior miden altura libre, no anchura.',
      B: 'Todo vehículo o carga que exceda esa altura impactará contra la estructura superior.',
      C: 'La distancia de frenado depende de la velocidad y nunca es una constante de 4.10 m.',
      D: 'No mide profundidad de cuerpos de agua.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-10; D.E. 23.'
  },
  {
    id: 'vmt-t100',
    category: 'teorico',
    topic: 'Ancho Máximo Permitido',
    signId: 'sign-r11',
    question: '¿Qué restricción impone la señal reglamentaria con flechas horizontales indicando 2.60 m?',
    statement: '¿Qué restricción impone la señal reglamentaria con flechas horizontales indicando 2.60 m?',
    options: [
      'Altura libre máxima de 2.60 metros.',
      'Longitud máxima de estacionamiento.',
      'Ancho máximo permitido de 2.60 metros para vehículos o cargas que transiten por ese tramo.',
      'Separación mínima entre peatones.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La señal R-11 limita el ancho total del vehículo con su carga a 2.60 metros, coincidiendo con el límite reglamentario ordinario del D.E. 23.',
    distractorRationale: {
      A: 'La altura se representa con flechas verticales en el techo y base del círculo.',
      B: 'No regula espacios de estacionamiento.',
      C: 'Las flechas horizontales enfrentadas delimitan el ancho máximo autorizado de paso.',
      D: 'Es una señal dirigida a dimensiones vehiculares, no a peatones.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-11; D.E. 23.'
  },
  {
    id: 'vmt-t101',
    category: 'teorico',
    topic: 'Peso Máximo Permitido',
    signId: 'sign-r12',
    question: '¿Qué limita la señal reglamentaria que muestra "12 t" en su interior?',
    statement: '¿Qué limita la señal reglamentaria que muestra "12 t" en su interior?',
    options: [
      'La velocidad máxima en túneles.',
      'El tiempo máximo de espera de 12 minutos.',
      'El número de llantas permitido por camión.',
      'El peso bruto máximo permitido de 12 toneladas métricas para cruzar ese tramo o puente.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La señal R-12 prohíbe el tránsito de vehículos cuyo peso bruto total exceda las 12 toneladas métricas para proteger puentes o pavimentos frágiles.',
    distractorRationale: {
      A: 'La letra "t" simboliza toneladas métricas de masa, no velocidad.',
      B: 'No mide minutos ni tiempos de espera.',
      C: 'No regula cantidad de neumáticos sino masa total soportada.',
      D: 'Exceder el tonelaje indicado compromete la integridad estructural de puentes y losas.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-12; D.E. 23.'
  },
  {
    id: 'vmt-t102',
    category: 'teorico',
    topic: 'Camiones por Carril Derecho',
    signId: 'sign-r13',
    question: '¿Qué obligación establece la señal reglamentaria de camiones y carga pesada por carril derecho?',
    statement: '¿Qué obligación establece la señal reglamentaria de camiones y carga pesada por carril derecho?',
    options: [
      'Obliga a los vehículos de carga pesada a circular exclusivamente por el carril derecho.',
      'Prohíbe a los camiones usar frenos de aire.',
      'Permite a los camiones rebasar por el carril izquierdo rápido.',
      'Indica zona exclusiva de estacionamiento nocturno.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La señal R-13 ordena que los vehículos pesados mantengan el carril derecho para no obstruir el flujo ágil de automóviles livianos en carriles izquierdos.',
    distractorRationale: {
      A: 'La segregación por carril derecho mejora la fluidez y reduce colisiones por alcance.',
      B: 'No restringe el sistema de frenos de aire.',
      C: 'Ordena justamente lo opuesto: mantenerse a la derecha.',
      D: 'No autoriza estacionamiento sino circulación regulada.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-13; D.E. 61.'
  },
  {
    id: 'vmt-t103',
    category: 'teorico',
    topic: 'Prohibido Virar en U',
    signId: 'sign-r22',
    question: '¿Qué maniobra queda prohibida al observar la señal reglamentaria ilustrada?',
    statement: '¿Qué maniobra queda prohibida al observar la señal reglamentaria ilustrada?',
    options: [
      'Girar a la derecha con precaución.',
      'Efectuar un giro en U (retorno de 180 grados) en ese punto.',
      'Detenerse en el hombro en caso de avería.',
      'Encender las luces intermitentes.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal R-22 prohíbe realizar giros de retorno en U por existir riesgo de choque frontal o lateral con el tránsito de sentido contrario.',
    distractorRationale: {
      A: 'El giro a la derecha no está prohibido por esta señal.',
      B: 'La flecha curva de 180 grados tachada prohíbe expresamente el retorno en U.',
      C: 'Las detenciones por emergencia mecánica se rigen por otras normas.',
      D: 'Las luces intermitentes son obligatorias en emergencias.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-22.'
  },
  {
    id: 'vmt-t104',
    category: 'teorico',
    topic: 'No Hay Paso / Contramano',
    signId: 'sign-r23',
    question: '¿Qué indica la señal circular roja con franja horizontal blanca en el centro?',
    statement: '¿Qué indica la señal circular roja con franja horizontal blanca en el centro?',
    options: [
      'Entrada libre para residentes del sector.',
      'Zona de descanso para ciclistas.',
      'Prohibición absoluta de ingreso por tratarse de vía en sentido contrario (No Hay Paso).',
      'Inicio de autopista de alta velocidad.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La señal R-23 (No Hay Paso / Contramano) advierte que está prohibido entrar a esa calle o rampa porque el tránsito viene en sentido opuesto.',
    distractorRationale: {
      A: 'La prohibición de contramano es absoluta incluso para residentes.',
      B: 'No guarda relación con áreas recreativas o ciclovías.',
      C: 'Ingresar frente a esta señal provoca colisiones frontales graves.',
      D: 'Las autopistas se anuncian con señales informativas verdes o azules.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-23.'
  },
  {
    id: 'vmt-t105',
    category: 'teorico',
    topic: 'Prohibido Usar Bocina',
    signId: 'sign-r24',
    question: '¿En qué lugares suele instalarse la señal reglamentaria de "Prohibido Usar Bocina" mostrada en la imagen?',
    statement: '¿En qué lugares suele instalarse la señal reglamentaria de "Prohibido Usar Bocina" mostrada en la imagen?',
    options: [
      'En autopistas rurales sin edificaciones.',
      'En estaciones de pesaje de carga.',
      'En entradas de túneles carreteros.',
      'En inmediaciones de hospitales, clínicas, centros educativos y zonas de silencio.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La señal R-24 protege la salud y tranquilidad acústica en entornos sensibles como hospitales, escuelas y juzgados, prohibiendo accionar el claxon salvo peligro inminente.',
    distractorRationale: {
      A: 'Las autopistas abiertas no requieren zonas de silencio hospitalario.',
      B: 'Las básculas de pesaje no son zonas de silencio.',
      C: 'En túneles puede ser necesario alertar peligros según visibilidad.',
      D: 'La contaminación acústica afecta gravemente a pacientes y estudiantes en esas áreas.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-24; D.E. 61.'
  },
  {
    id: 'vmt-t106',
    category: 'teorico',
    topic: 'Uso Obligatorio de Cinturón de Seguridad',
    signId: 'sign-r20',
    question: '¿Qué mandato reglamentario comunica la señal ilustrada con la figura del cinturón?',
    statement: '¿Qué mandato reglamentario comunica la señal ilustrada con la figura del cinturón?',
    options: [
      'Uso obligatorio del cinturón de seguridad para todos los ocupantes del vehículo.',
      'Uso opcional del cinturón únicamente en autopistas.',
      'Prohibición de transportar pasajeros en asientos traseros.',
      'Obligación de usar chaleco reflectivo dentro de la cabina.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La señal R-20 recuerda el deber legal de abrochar el cinturón de seguridad en todo momento de circulación.',
    distractorRationale: {
      A: 'El cinturón reduce drásticamente el riesgo de eyección y lesiones fatales.',
      B: 'El uso es obligatorio también en vías urbanas a baja velocidad.',
      C: 'No prohíbe pasajeros atrás, sino que exige su sujeción.',
      D: 'El chaleco reflectivo se usa al descender del vehículo en emergencias, no como sustituto del cinturón.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-20; D.E. 61 Art. 39.'
  },
  {
    id: 'vmt-t107',
    category: 'teorico',
    topic: 'No Bloquear Intersección (Reglamentaria)',
    signId: 'sign-r19',
    question: '¿Qué regla de circulación exige la señal reglamentaria de "No Bloquear Intersección"?',
    statement: '¿Qué regla de circulación exige la señal reglamentaria de "No Bloquear Intersección"?',
    options: [
      'Acelerar en luz amarilla para quedar en medio del cruce.',
      'No ingresar al cruce si no existe espacio libre al otro lado para desalojarlo por completo.',
      'Detenerse sobre el paso peatonal para esperar el cambio de luz.',
      'Estacionar en la esquina durante cinco minutos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal R-19 refuerza la prohibición de quedar varado dentro de una intersección obstruyendo el paso transversal cuando cambie la fase del semáforo.',
    distractorRationale: {
      A: 'Acelerar en amarilla suele causar bloqueos de cruce y colisiones laterales.',
      B: 'Solo debe avanzarse cuando el tramo receptor permita liberar totalmente la intersección.',
      C: 'Invadir el paso peatonal vulnera la seguridad de los transeúntes.',
      D: 'Está prohibido estacionar en esquinas e intersecciones.'
    },
    legalReference: 'Manual SIECA 2025 Señal R-19; D.E. 61 Art. 90.'
  },
  {
    id: 'vmt-t108',
    category: 'teorico',
    topic: 'Curva Peligrosa a la Derecha',
    signId: 'sign-p1',
    question: 'Al observar esta señal preventiva amarilla en rombo antes de una curva, ¿cómo debe proceder el conductor?',
    statement: 'Al observar esta señal preventiva amarilla en rombo antes de una curva, ¿cómo debe proceder el conductor?',
    options: [
      'Acelerar bruscamente dentro de la curva.',
      'Invadir el carril contrario para enderezar la trayectoria.',
      'Reducir la velocidad antes de entrar a la curva, mantener su carril y evitar frenazos bruscos en el giro.',
      'Apagar las luces delanteras para no encandilar.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La señal P-1 advierte una curva cerrada a la derecha; se debe frenar antes de ingresar, mantener el carril derecho y acelerar suavemente al salir.',
    distractorRationale: {
      A: 'Acelerar antes o dentro de la curva aumenta la fuerza centrífuga y riesgo de salida de vía.',
      B: 'Invadir el carril opuesto en curva ciega provoca choques frontales.',
      C: 'Reducir la velocidad con anticipación permite mantener adherencia y estabilidad.',
      D: 'Nunca deben apagarse las luces en circulación nocturna.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-1.'
  },
  {
    id: 'vmt-t109',
    category: 'teorico',
    topic: 'Zona Escolar / Cruce de Escolares',
    signId: 'sign-p3',
    question: '¿Qué precaución especial exige la señal preventiva de Zona Escolar ilustrada?',
    statement: '¿Qué precaución especial exige la señal preventiva de Zona Escolar ilustrada?',
    options: [
      'Mantener una velocidad de 70 km/h tocando la bocina.',
      'Adelantar a los vehículos lentos frente al portón escolar.',
      'Estacionarse frente a la entrada del centro educativo.',
      'Reducir la velocidad a máximo 25 km/h en horario escolar y extremar vigilancia ante cruce súbito de niños.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La señal P-3 advierte presencia de estudiantes; el conductor debe moderar la marcha al límite escolar (25 km/h) y ceder prioridad absoluta en los cruces.',
    distractorRationale: {
      A: 'Circular a 70 km/h en zona escolar es temerario y sancionable.',
      B: 'Adelantar en zona escolar oculta a los niños que cruzan la calzada.',
      C: 'Estacionarse frente a portones escolares bloquea la visibilidad y el acceso seguro.',
      D: 'Los niños tienen menor percepción del peligro vial, por lo que la velocidad baja es vital.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-3; D.E. 61 Art. 98.'
  },
  {
    id: 'vmt-t110',
    category: 'teorico',
    topic: 'Reductor Físico de Velocidad (Túmulo)',
    signId: 'sign-p4',
    question: '¿Qué advierte la señal preventiva mostrada con una prominencia en el centro?',
    statement: '¿Qué advierte la señal preventiva mostrada con una prominencia en el centro?',
    options: [
      'Proximidad de un reductor físico de velocidad (túmulo o resalto) sobre la calzada.',
      'Proximidad de un puente levadizo.',
      'Zona de derrumbes montañosos.',
      'Inicio de pista de aterrizaje.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La señal P-4 previene al conductor de un túmulo próximo para que reduzca su velocidad y evite daños a la suspensión o pérdida de control.',
    distractorRationale: {
      A: 'La silueta semicircular representa el resalto transversal en el pavimento.',
      B: 'No existen puentes levadizos señalizados con ese pictograma SIECA.',
      C: 'Los derrumbes se advierten con el pictograma de ladera y rocas cayendo (P-30).',
      D: 'Los aeropuertos se indican con señal informativa de avión (I-17).'
    },
    legalReference: 'Manual SIECA 2025 Señal P-4.'
  },
  {
    id: 'vmt-t111',
    category: 'teorico',
    topic: 'Superficie Resbaladiza en Mojado',
    signId: 'sign-p8',
    question: '¿Qué peligro advierte la señal preventiva con el vehículo dejando huellas serpenteantes?',
    statement: '¿Qué peligro advierte la señal preventiva con el vehículo dejando huellas serpenteantes?',
    options: [
      'Zona autorizada para derrapes deportivos.',
      'Calzada potencialmente resbaladiza en condiciones de lluvia, lodo o aceite.',
      'Carretera exclusiva para vehículos 4x4.',
      'Proximidad de taller de alineado y balanceo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal P-8 advierte baja adherencia del pavimento cuando está húmedo o contaminado; exige reducir la velocidad y evitar frenadas bruscas.',
    distractorRationale: {
      A: 'Los derrapes intencionales en vía pública están prohibidos.',
      B: 'Las huellas onduladas simbolizan pérdida de tracción y riesgo de patinaje.',
      C: 'Aplica a todo tipo de automotor que circule por el tramo.',
      D: 'Los talleres mecánicos se anuncian con señales informativas azules (I-3).'
    },
    legalReference: 'Manual SIECA 2025 Señal P-8.'
  },
  {
    id: 'vmt-t112',
    category: 'teorico',
    topic: 'Proximidad de Semáforo',
    signId: 'sign-p9',
    question: '¿Qué anticipa la señal preventiva que muestra un semáforo dentro de un rombo amarillo?',
    statement: '¿Qué anticipa la señal preventiva que muestra un semáforo dentro de un rombo amarillo?',
    options: [
      'Una tienda de iluminación automotriz.',
      'Que el semáforo próximo está permanentemente apagado.',
      'La proximidad de una intersección regulada por semáforo, preparando al conductor para detenerse.',
      'Zona de estacionamiento regulado por parquímetro.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La señal P-9 se instala antes de intersecciones semaforizadas con visibilidad reducida o en carreteras rápidas para evitar frenadas de emergencia.',
    distractorRationale: {
      A: 'Es una señal vial oficial de tránsito, no un aviso comercial.',
      B: 'Advierte precisamente la presencia de control semafórico activo.',
      C: 'Permite ajustar la velocidad con antelación ante un posible cambio a luz roja.',
      D: 'No guarda relación con parquímetros.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-9.'
  },
  {
    id: 'vmt-t113',
    category: 'teorico',
    topic: 'Vado en la Calzada',
    signId: 'sign-p13',
    question: 'Al encontrar la señal preventiva de Vado (depresión con agua), ¿qué riesgo principal debe prevenir el conductor?',
    statement: 'Al encontrar la señal preventiva de Vado (depresión con agua), ¿qué riesgo principal debe prevenir el conductor?',
    options: [
      'Que el pavimento esté seco y caliente.',
      'Que exista un paso elevado peatonal.',
      'Que la carretera cambie a cuatro carriles.',
      'Una depresión en la vía donde puede acumularse o correr agua, con riesgo de hidroplaneo o arrastre.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La señal P-13 advierte un hundimiento o cruce superficial de corriente de agua; se debe bajar la velocidad y nunca cruzar si la corriente es profunda o fuerte.',
    distractorRationale: {
      A: 'Advierte presencia potencial de agua y depresión, no pavimento seco.',
      B: 'Los pasos peatonales elevados se advierten con señal de paso peatonal o túmulo.',
      C: 'El ensanchamiento de carriles tiene su propia señalización.',
      D: 'Cruzar un vado a alta velocidad o con corriente crecida puede provocar pérdida de control o arrastre.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-13.'
  },
  {
    id: 'vmt-t114',
    category: 'teorico',
    topic: 'Tránsito de Maquinaria Agrícola',
    signId: 'sign-p14',
    question: '¿Qué precaución requiere la señal preventiva con la silueta de un tractor agrícola?',
    statement: '¿Qué precaución requiere la señal preventiva con la silueta de un tractor agrícola?',
    options: [
      'Moderar la velocidad por posible presencia de maquinaria agrícola lenta y ancha cruzando o circulando por la vía.',
      'Aumentar la velocidad para cruzar antes que el tractor.',
      'Prohibición de paso para automóviles livianos.',
      'Zona de venta de insumos agrícolas.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La señal P-14 advierte cruces frecuentes de tractores o cosechadoras que circulan a muy baja velocidad y presentan gran diferencial cinemático.',
    distractorRationale: {
      A: 'Reducir la velocidad previene colisiones por alcance contra maquinaria lenta.',
      B: 'Acelerar ante un posible cruce de maquinaria pesada eleva el riesgo de choque fatal.',
      C: 'No es una señal prohibitiva sino preventiva.',
      D: 'Las señales romboidales amarillas advierten peligros viales, no comercios.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-14.'
  },
  {
    id: 'vmt-t115',
    category: 'teorico',
    topic: 'Reducción de Carriles (Estrechamiento)',
    signId: 'sign-p24',
    question: '¿Qué situación vial advierte la señal preventiva que muestra líneas convergentes reduciendo el ancho de la calzada?',
    statement: '¿Qué situación vial advierte la señal preventiva que muestra líneas convergentes reduciendo el ancho de la calzada?',
    options: [
      'Aumento de carriles disponibles.',
      'Reducción del número de carriles o estrechamiento de la calzada más adelante.',
      'Inicio de zona de estacionamiento paralelo.',
      'Cruce de ferrocarril a nivel.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal P-24 previene que uno de los carriles termina o la vía se angosta, obligando a fusionar el tránsito con cortesía y sin adelantamientos.',
    distractorRationale: {
      A: 'La convergencia hacia arriba indica reducción, no ampliación.',
      B: 'Anticipar el estrechamiento evita roces laterales y embotellamientos.',
      C: 'No representa bahías de estacionamiento.',
      D: 'El cruce ferroviario usa la Cruz de San Andrés o el pictograma P-38.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-24.'
  },
  {
    id: 'vmt-t116',
    category: 'teorico',
    topic: 'Dispositivo de Dirección (Cheurón)',
    signId: 'sign-p26',
    question: '¿Para qué se instalan los paneles rectangulares amarillos con flechas negras (cheurones) en el borde exterior de una curva?',
    statement: '¿Para qué se instalan los paneles rectangulares amarillos con flechas negras (cheurones) en el borde exterior de una curva?',
    options: [
      'Para indicar rutas turísticas hacia la playa.',
      'Para señalar zonas de adelantamiento permitido.',
      'Para delinear visualmente la trayectoria y severidad de una curva peligrosa, especialmente de noche.',
      'Para marcar paradas de autobuses interdepartamentales.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los cheurones (P-26) son delineadores reflectivos que guían al conductor en curvas cerradas o cambios bruscos de alineamiento horizontal.',
    distractorRationale: {
      A: 'Las rutas turísticas usan señales informativas marrones o azules.',
      B: 'En curvas cerradas delineadas con cheurones está prohibido adelantar.',
      C: 'Reflejan los faros del vehículo anticipando el sentido del giro.',
      D: 'Las paradas de bus se señalizan con pictogramas de autobús.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-26.'
  },
  {
    id: 'vmt-t117',
    category: 'teorico',
    topic: 'Zona de Derrumbes',
    signId: 'sign-p30',
    question: '¿Qué precaución debe tomarse al circular bajo la señal preventiva de Zona de Derrumbes?',
    statement: '¿Qué precaución debe tomarse al circular bajo la señal preventiva de Zona de Derrumbes?',
    options: [
      'Estacionarse debajo del talud para esperar que pase la lluvia.',
      'Tocar la bocina continuamente para ahuyentar animales.',
      'Circular con las luces completamente apagadas.',
      'Mantener atención a posibles rocas o tierra sobre la calzada y evitar detenerse en el tramo.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La señal P-30 advierte caída de rocas o deslizamientos desde taludes; se debe circular alerta y no estacionarse bajo laderas inestables.',
    distractorRationale: {
      A: 'Estacionarse bajo un talud inestable durante lluvia expone a quedar sepultado.',
      B: 'La bocina no previene desprendimientos geológicos.',
      C: 'Las luces encendidas son vitales para detectar rocas sobre el asfalto.',
      D: 'Avanzar con precaución y distancia permite esquivar o frenar ante obstáculos caídos.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-30.'
  },
  {
    id: 'vmt-t118',
    category: 'teorico',
    topic: 'Doble Circulación Preventiva',
    signId: 'sign-p34',
    question: '¿Qué cambio operacional advierte la señal preventiva con dos flechas verticales en sentidos opuestos?',
    statement: '¿Qué cambio operacional advierte la señal preventiva con dos flechas verticales en sentidos opuestos?',
    options: [
      'Que el tramo de un solo sentido termina y comienza circulación en doble sentido.',
      'Que está permitido circular en reversa.',
      'Que los dos carriles avanzan hacia el mismo destino.',
      'Que hay un estacionamiento de dos pisos.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La señal P-34 previene el paso de una vía unidireccional a una bidireccional, exigiendo mantenerse estrictamente en el carril derecho.',
    distractorRationale: {
      A: 'Advierten tráfico frontal venidero para que nadie invada el carril izquierdo.',
      B: 'Circular en reversa en vía pública está prohibido salvo maniobras cortas de estacionamiento.',
      C: 'Las flechas apuntan en direcciones contrarias, indicando doble sentido.',
      D: 'No guarda relación con estacionamientos multinivel.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-34.'
  },
  {
    id: 'vmt-t119',
    category: 'teorico',
    topic: 'Redondel Próximo',
    signId: 'sign-p36',
    question: '¿Qué infraestructura vial anuncia la señal preventiva con tres flechas curvas formando un círculo?',
    statement: '¿Qué infraestructura vial anuncia la señal preventiva con tres flechas curvas formando un círculo?',
    options: [
      'Área de lavado automático de vehículos.',
      'Proximidad de un redondel o glorieta con circulación giratoria.',
      'Prohibición de girar a la derecha.',
      'Zona de retorno exclusivo para ambulancias.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal P-36 advierte la cercanía de un redondel, preparando al conductor para reducir la velocidad y ceder el paso a quienes ya circulan dentro.',
    distractorRationale: {
      A: 'No simboliza lavado de autos.',
      B: 'Las flechas en sentido antihorario representan el flujo giratorio del redondel.',
      C: 'No prohíbe giros a la derecha.',
      D: 'Los redondeles sirven a todo el flujo vehicular.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-36.'
  },
  {
    id: 'vmt-t120',
    category: 'teorico',
    topic: 'Cruce de Ferrocarril',
    signId: 'sign-p38',
    question: 'Al aproximarse a un cruce ferroviario señalado con la Cruz de San Andrés, ¿qué vehículo tiene prioridad absoluta de paso?',
    statement: 'Al aproximarse a un cruce ferroviario señalado con la Cruz de San Andrés, ¿qué vehículo tiene prioridad absoluta de paso?',
    options: [
      'Los autobuses de transporte público.',
      'Los camiones de carga articulados.',
      'El tren o equipo ferroviario sobre rieles en todo momento.',
      'Los automóviles particulares que circulen por la derecha.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Por su enorme masa y distancia de frenado, el ferrocarril goza de prioridad absoluta; todo vehículo debe detenerse antes del cruce y verificar ambos lados.',
    distractorRationale: {
      A: 'Los autobuses deben detenerse completamente antes de cruzar vías férreas.',
      B: 'Los cabezales también deben detenerse y ceder paso total al tren.',
      C: 'Un tren requiere cientos de metros para detenerse y no puede desviarse.',
      D: 'La regla de derecha no aplica frente a vehículos ferroviarios.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-38; D.E. 61.'
  },
  {
    id: 'vmt-t121',
    category: 'teorico',
    topic: 'Ciclistas en la Vía',
    signId: 'sign-p37',
    question: '¿Qué conducta debe adoptar el conductor al ver la señal preventiva de Ciclistas en la Vía?',
    statement: '¿Qué conducta debe adoptar el conductor al ver la señal preventiva de Ciclistas en la Vía?',
    options: [
      'Acelerar cerca del ciclista para que se aparte a la cuneta.',
      'Tocar la bocina insistentemente detrás del ciclista.',
      'Invadir la ciclovía si hay congestión.',
      'Moderar la velocidad y guardar una distancia lateral segura mínima de 1.5 metros al rebasarlo.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Los ciclistas son usuarios vulnerables; la señal P-37 exige respetar su espacio, reducir la velocidad y mantener separación lateral segura al adelantar.',
    distractorRationale: {
      A: 'Pasar rozando a un ciclista genera turbulencia y riesgo de caída fatal.',
      B: 'El ruido súbito de la bocina puede asustar al ciclista y hacerlo perder el equilibrio.',
      C: 'Las ciclovías son exclusivas para bicicletas.',
      D: 'El margen lateral amplio y velocidad moderada protegen la vida del ciclista.'
    },
    legalReference: 'Manual SIECA 2025 Señal P-37; D.E. 61.'
  },
  {
    id: 'vmt-t122',
    category: 'teorico',
    topic: 'Señal Informativa de Servicio Hospitalario',
    signId: 'sign-i1',
    question: '¿Qué servicio identifica la señal informativa azul con una letra "H" blanca?',
    statement: '¿Qué servicio identifica la señal informativa azul con una letra "H" blanca?',
    options: [
      'Hospital o centro de atención médica de emergencias.',
      'Hotel de paso turístico.',
      'Helipuerto privado.',
      'Hidrante contra incendios.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'En la simbología internacional SIECA, la "H" blanca sobre fondo azul indica la proximidad o dirección hacia un hospital.',
    distractorRationale: {
      A: 'Facilita la ubicación rápida de centros hospitalarios en caso de urgencia médica.',
      B: 'Los hoteles se simbolizan con una cama (I-15).',
      C: 'Los helipuertos usan señalización aeronáutica específica.',
      D: 'Los hidrantes tienen señalización contra incendios distinta.'
    },
    legalReference: 'Manual SIECA 2025 Señal I-1.'
  },
  {
    id: 'vmt-t123',
    category: 'teorico',
    topic: 'Facilidad para Personas con Discapacidad',
    signId: 'sign-i16',
    question: '¿Qué derecho o reserva indica la señal azul con el símbolo internacional de accesibilidad?',
    statement: '¿Qué derecho o reserva indica la señal azul con el símbolo internacional de accesibilidad?',
    options: [
      'Estacionamiento libre para cualquier conductor con prisa.',
      'Espacio o facilidad reservada exclusivamente para personas con discapacidad debidamente acreditadas.',
      'Zona de carga de mercancías pesadas.',
      'Área de espera exclusiva para motocicletas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La señal I-16 identifica parqueos y accesos reservados para personas con movilidad reducida o discapacidad; ocuparlos sin autorización es sancionable.',
    distractorRationale: {
      A: 'La prisa personal no autoriza ocupar plazas reservadas.',
      B: 'Garantiza accesibilidad universal e incluye sanciones por uso indebido.',
      C: 'Las zonas de carga usan la señal I-10.',
      D: 'No está destinada a motocicletas ordinarias.'
    },
    legalReference: 'Manual SIECA 2025 Señal I-16; Ley de Equiparación de Oportunidades.'
  },
  {
    id: 'vmt-t124',
    category: 'teorico',
    topic: 'Señal de Obras — Hombres Trabajando',
    signId: 'sign-o4',
    question: '¿Por qué las señales de obras como "Hombres Trabajando en la Vía" utilizan fondo color naranja reflectivo?',
    statement: '¿Por qué las señales de obras como "Hombres Trabajando en la Vía" utilizan fondo color naranja reflectivo?',
    options: [
      'Por preferencia estética de las constructoras.',
      'Para indicar que la vía es gratuita.',
      'Para identificar peligros temporales por trabajos de mantenimiento o construcción en la vía.',
      'Para señalar rutas turísticas de verano.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El color naranja en el estándar SIECA está reservado exclusivamente para señalización transitoria de obras, alertando presencia de personal, maquinaria y desvíos.',
    distractorRationale: {
      A: 'Los colores viales responden a normas técnicas internacionales, no a gustos estéticos.',
      B: 'No guarda relación con peajes.',
      C: 'El naranja de alta visibilidad alerta cambios temporales de geometría vial y presencia de trabajadores.',
      D: 'Las rutas turísticas usan fondo marrón o azul.'
    },
    legalReference: 'Manual SIECA 2025 Señal O-4.'
  },
  {
    id: 'vmt-t125',
    category: 'teorico',
    topic: 'Tambor de Obras / Canalizador',
    signId: 'sign-o1',
    question: '¿Cuál es la función vial de los tambores anaranjados con franjas reflectivas colocados en una zona de obras?',
    statement: '¿Cuál es la función vial de los tambores anaranjados con franjas reflectivas colocados en una zona de obras?',
    options: [
      'Servir de basureros temporales para los conductores.',
      'Bloquear permanentemente toda la carretera sin desvío.',
      'Marcar lugares de estacionamiento gratuito.',
      'Canalizar el flujo vehicular alrededor de excavaciones o cuadrillas de trabajo con alta visibilidad.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Los tambores canalizadores (O-1) guían con seguridad a los conductores fuera de carriles cerrados por obras, reduciendo el riesgo de atropello a trabajadores.',
    distractorRationale: {
      A: 'Son dispositivos de seguridad vial, nunca contenedores de desechos.',
      B: 'Canalizan y desvían el tránsito hacia carriles habilitados.',
      C: 'No delimitan estacionamientos.',
      D: 'Su diseño plástico y reflectivo amortigua y orienta visualmente de día y de noche.'
    },
    legalReference: 'Manual SIECA 2025 Señal O-1.'
  },
  {
    id: 'vmt-t126',
    category: 'teorico',
    topic: 'Línea Discontinua en Calzada',
    signId: 'sign-h2',
    question: '¿Qué permite la señalización horizontal de línea blanca o amarilla discontinua entre carriles?',
    statement: '¿Qué permite la señalización horizontal de línea blanca o amarilla discontinua entre carriles?',
    options: [
      'Cambiar de carril o adelantar cuando haya visibilidad y espacio seguro, usando direccionales.',
      'Estacionarse en medio de la calzada.',
      'Circular en sentido contrario permanentemente.',
      'Acelerar al doble del límite máximo permitido.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La línea discontinua (H-2) autoriza el traspaso de carril o maniobra de rebase siempre que se verifique ausencia de tránsito opuesto y se anuncie con luz direccional.',
    distractorRationale: {
      A: 'La discontinuidad del trazo indica permiso de maniobra sujeta a condiciones seguras.',
      B: 'Está prohibido estacionar sobre carriles de circulación.',
      C: 'El retorno al carril derecho tras rebasar es obligatorio en vías bidireccionales.',
      D: 'Ninguna marca vial autoriza exceder los límites legales de velocidad.'
    },
    legalReference: 'Manual SIECA 2025 Señal H-2; D.E. 61.'
  },
  {
    id: 'vmt-t127',
    category: 'teorico',
    topic: 'Línea Mixta (Continua y Discontinua)',
    signId: 'sign-h3',
    question: 'En una carretera con línea mixta (una línea continua y otra discontinua paralelas), ¿quién tiene permitido adelantar?',
    statement: 'En una carretera con línea mixta (una línea continua y otra discontinua paralelas), ¿quién tiene permitido adelantar?',
    options: [
      'Ningún conductor en ninguno de los dos sentidos.',
      'Únicamente el conductor que circula junto a la línea discontinua, siempre que sea seguro.',
      'Únicamente el conductor que circula junto a la línea continua.',
      'Ambos sentidos de forma simultánea.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La línea mixta (H-3) autoriza el rebase solo al sentido de circulación que tiene la línea discontinua de su lado; quien tiene la continua tiene prohibido cruzarla.',
    distractorRationale: {
      A: 'Uno de los sentidos sí cuenta con visibilidad suficiente para rebasar.',
      B: 'La regla rige según la línea más cercana al carril por donde circula el vehículo.',
      C: 'La línea continua del lado propio prohíbe cruzarla.',
      D: 'Permitir ambos sentidos causaría colisiones frontales.'
    },
    legalReference: 'Manual SIECA 2025 Señal H-3; D.E. 61.'
  },
  {
    id: 'vmt-t128',
    category: 'teorico',
    topic: 'Franja Amarilla en Cordón de Acera',
    signId: 'sign-h4',
    question: '¿Qué indica la franja de pintura amarilla aplicada sobre el cordón o borde de la acera?',
    statement: '¿Qué indica la franja de pintura amarilla aplicada sobre el cordón o borde de la acera?',
    options: [
      'Estacionamiento gratuito sin límite de tiempo.',
      'Carril exclusivo para bicicletas.',
      'Prohibición de estacionar vehículos junto a ese cordón (puede permitirse carga/descarga breve si no obstruye).',
      'Zona autorizada para reparación mecánica en la calle.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La franja amarilla en el cordón (H-4) prohíbe el estacionamiento prolongado en ese tramo para preservar la fluidez o visibilidad en esquinas y accesos.',
    distractorRationale: {
      A: 'El color amarillo en cordón restringe el estacionamiento, no lo habilita.',
      B: 'Las ciclovías se demarcan sobre la calzada con pictogramas de bicicleta.',
      C: 'El cordón amarillo prohíbe estacionar; el cordón rojo prohíbe incluso parar.',
      D: 'Las reparaciones mecánicas ordinarias no deben hacerse en la vía pública.'
    },
    legalReference: 'Manual SIECA 2025 Señal H-4; D.E. 61 Art. 102.'
  },
  {
    id: 'vmt-t129',
    category: 'teorico',
    topic: 'Paso Peatonal (Cebra)',
    signId: 'sign-h7',
    question: 'Al aproximarse a un paso peatonal tipo cebra demarcado con franjas blancas transversales, ¿qué obligación tiene el conductor?',
    statement: 'Al aproximarse a un paso peatonal tipo cebra demarcado con franjas blancas transversales, ¿qué obligación tiene el conductor?',
    options: [
      'Acelerar para pasar antes de que el peatón baje de la acera.',
      'Detenerse sobre las franjas blancas mientras espera el semáforo.',
      'Rebasar a otro vehículo que se haya detenido ante la cebra.',
      'Reducir la velocidad y ceder el paso absoluto a los peatones que estén cruzando o inicien el cruce.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El paso cebra (H-7) otorga prioridad absoluta al peatón; además, está prohibido rebasar a un vehículo detenido ante una cebra porque oculta al peatón.',
    distractorRationale: {
      A: 'Acelerar hacia un paso peatonal es conducta temeraria.',
      B: 'La detención debe hacerse antes de la línea de parada o de la cebra, nunca encima.',
      C: 'Adelantar a un auto detenido ante una cebra es una de las causas más graves de atropello.',
      D: 'El peatón goza de preferencia legal sobre la cebra.'
    },
    legalReference: 'Manual SIECA 2025 Señal H-7; D.E. 61 Art. 88.'
  },
  {
    id: 'vmt-t130',
    category: 'teorico',
    topic: 'Isleta de Canalización Achurada',
    signId: 'sign-h8',
    question: '¿Está permitido circular o estacionarse sobre las isletas pintadas con líneas diagonales (achuradas) en la calzada?',
    statement: '¿Está permitido circular o estacionarse sobre las isletas pintadas con líneas diagonales (achuradas) en la calzada?',
    options: [
      'No, está prohibido pisarlas, cruzarlas o estacionar sobre ellas porque separan flujos vehiculares.',
      'Sí, pueden usarse como carril adicional en horas pico.',
      'Sí, son espacios oficiales de estacionamiento temporal.',
      'Sí, únicamente para motocicletas.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Las zonas achuradas (H-8) cumplen la función de separadores virtuales de flujos o refugios de canalización y equivalen a una isleta física prohibida al tránsito.',
    distractorRationale: {
      A: 'Invadir zonas achuradas sorprende a conductores que se incorporan por carriles canalizados.',
      B: 'Las horas pico no autorizan invadir demarcaciones prohibitivas.',
      C: 'Estacionar sobre isletas obstruye la visibilidad de convergencias.',
      D: 'La prohibición aplica por igual a motocicletas y automóviles.'
    },
    legalReference: 'Manual SIECA 2025 Señal H-8.'
  },
  {
    id: 'vmt-t131',
    category: 'teorico',
    topic: 'Luz Verde en Semáforo — Precaución en Giro',
    question: 'Cuando un semáforo muestra luz verde y el conductor desea girar a la derecha o izquierda, ¿a quién debe ceder el paso primero?',
    statement: 'Cuando un semáforo muestra luz verde y el conductor desea girar a la derecha o izquierda, ¿a quién debe ceder el paso primero?',
    options: [
      'A nadie, la luz verde le da derecho absoluto sobre peatones.',
      'A los peatones que estén cruzando legalmente la calzada transversal y al tránsito opuesto si gira a la izquierda.',
      'Únicamente a camiones de carga pesada.',
      'Solo a vehículos que toquen la bocina.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La luz verde autoriza avanzar pero no exime de ceder el paso a peatones que cruzan con fase habilitada ni al tránsito en sentido contrario al virar a la izquierda.',
    distractorRationale: {
      A: 'Los peatones en cruce habilitado conservan prioridad frente a vehículos que giran.',
      B: 'Tanto peatones transversales como el flujo frontal opuesto tienen preferencia antes del giro.',
      C: 'La preferencia no depende del tamaño del vehículo sino de la trayectoria.',
      D: 'La prioridad es normativa, no acústica.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 76 y Art. 88.'
  },
  {
    id: 'vmt-t132',
    category: 'teorico',
    topic: 'Semáforo Peatonal — Silueta Roja Parpadeante',
    question: '¿Qué significa la silueta roja parpadeante o fija en un semáforo peatonal?',
    statement: '¿Qué significa la silueta roja parpadeante o fija en un semáforo peatonal?',
    options: [
      'Que el peatón debe correr lentamente por el centro de la calle.',
      'Que los automóviles deben detenerse en verde.',
      'Prohibición de iniciar el cruce peatonal; si ya está cruzando en parpadeo, debe completar el paso con rapidez.',
      'Que el semáforo está fuera de servicio.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La fase roja peatonal indica no iniciar el cruce; durante el parpadeo final únicamente deben terminar de cruzar quienes ya ingresaron a la calzada.',
    distractorRationale: {
      A: 'Nunca debe iniciarse un cruce cuando la luz roja peatonal está activa o parpadeando.',
      B: 'Los automóviles siguen la fase vehicular correspondiente.',
      C: 'Advierte que el cambio a tráfico vehicular es inminente.',
      D: 'El parpadeo controlado forma parte del ciclo normal de despeje.'
    },
    legalReference: 'Manual SIECA 2025; D.E. 61 Art. 76.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 3: PRIORIDAD DE PASO, REDONDELES E INTERSECCIONES (+34)
  // ==========================================================================
  {
    id: 'vmt-t133',
    category: 'teorico',
    topic: 'Prioridad del Peatón en la Vía Pública',
    question: '¿En qué situación conserva el peatón prioridad absoluta de paso frente a cualquier vehículo automotor?',
    statement: '¿En qué situación conserva el peatón prioridad absoluta de paso frente a cualquier vehículo automotor?',
    options: [
      'Únicamente cuando viste chaleco fluorescente.',
      'Solo si el vehículo es de color blanco.',
      'En pasos peatonales demarcados, aceras, zonas escolares y cuando un vehículo gira para ingresar a otra vía.',
      'Nunca, porque los vehículos siempre tienen preferencia por su peso.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La normativa protege al usuario más vulnerable otorgando prioridad al peatón en cebras, aceras, entradas de garaje y al cruzar una calle hacia la cual gira un vehículo.',
    distractorRationale: {
      A: 'El peatón no está obligado a portar chaleco para tener prioridad legal.',
      B: 'El color del automotor no altera las reglas de prioridad.',
      C: 'El Art. 88 del D.E. 61 consagra la preferencia peatonal en cruces habilitados y maniobras de giro.',
      D: 'La prioridad vial favorece al más vulnerable, nunca al más pesado.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 88.'
  },
  {
    id: 'vmt-t134',
    category: 'teorico',
    topic: 'Salida de Estacionamiento o Garaje Privado',
    question: 'Al salir en vehículo desde un garaje privado, cochera o estacionamiento hacia la vía pública, ¿quién tiene la prioridad de paso?',
    statement: 'Al salir en vehículo desde un garaje privado, cochera o estacionamiento hacia la vía pública, ¿quién tiene la prioridad de paso?',
    options: [
      'Los peatones que caminan por la acera y todos los vehículos que ya circulan por la vía pública.',
      'El conductor que sale del garaje si toca la bocina.',
      'El vehículo que sale de reversa sin importar el tráfico.',
      'El vehículo más moderno.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Quien se incorpora desde una propiedad privada o estacionamiento debe ceder el paso absoluto tanto a peatones en la acera como al flujo vehicular en la calzada.',
    distractorRationale: {
      A: 'La incorporación desde accesos privados carece siempre de preferencia.',
      B: 'La bocina no otorga derecho de paso al salir de una propiedad privada.',
      C: 'Salir de reversa exige máxima precaución y cesión total del paso.',
      D: 'La antigüedad del vehículo no confiere prioridad alguna.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 87.'
  },
  {
    id: 'vmt-t135',
    category: 'teorico',
    topic: 'Prioridad en Vía Pavimentada vs No Pavimentada',
    question: 'En una intersección no señalizada donde confluye una calle de tierra o terracería con una carretera pavimentada, ¿quién tiene prioridad?',
    statement: 'En una intersección no señalizada donde confluye una calle de tierra o terracería con una carretera pavimentada, ¿quién tiene prioridad?',
    options: [
      'El vehículo que proviene del camino de terracería.',
      'Los vehículos que circulan por la vía pavimentada.',
      'El vehículo que llegue tocando las luces altas.',
      'Siempre los vehículos agrícolas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Por jerarquía vial, toda vía pavimentada tiene preferencia sobre los caminos de tierra o balasto, debiendo detenerse quien ingresa desde la terracería.',
    distractorRationale: {
      A: 'Quien sale de terracería debe ceder el paso al flujo de mayor velocidad en pavimento.',
      B: 'La jerarquía de calzada otorga prioridad a la vía pavimentada.',
      C: 'Las luces altas no modifican las reglas de prioridad.',
      D: 'La maquinaria agrícola no tiene preferencia automática al incorporarse desde caminos rurales.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 86.'
  },
  {
    id: 'vmt-t136',
    category: 'teorico',
    topic: 'Prioridad en Pendientes Estrechas',
    question: 'En una vía de montaña o cuesta muy estrecha donde no caben dos vehículos simultáneamente y no hay señalización, ¿quién tiene prioridad?',
    statement: 'En una vía de montaña o cuesta muy estrecha donde no caben dos vehículos simultáneamente y no hay señalización, ¿quién tiene prioridad?',
    options: [
      'El vehículo que desciende por la pendiente.',
      'El vehículo que circula a mayor velocidad.',
      'El vehículo que asciende la pendiente, salvo que cuente con un apartadero más cercano.',
      'El vehículo de menor peso siempre.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Arrancar nuevamente en subida pronunciada es más difícil y riesgoso (especialmente para vehículos cargados), por lo que quien sube tiene preferencia sobre quien baja.',
    distractorRationale: {
      A: 'Quien desciende tiene mayor facilidad de frenado y control para ceder el paso.',
      B: 'La velocidad excesiva en vía estrecha es imprudente y no da prioridad.',
      C: 'El vehículo en ascenso conserva la preferencia salvo existencia de refugio inmediato.',
      D: 'La regla general en pendientes favorece al vehículo que sube.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 89.'
  },
  {
    id: 'vmt-t137',
    category: 'teorico',
    topic: 'Adelantamiento — Condiciones Previas Obligatorias',
    question: 'Antes de iniciar una maniobra de adelantamiento por la izquierda en carretera de dos carriles, ¿qué debe verificar el conductor?',
    statement: 'Antes de iniciar una maniobra de adelantamiento por la izquierda en carretera de dos carriles, ¿qué debe verificar el conductor?',
    options: [
      'Que el vehículo delantero tenga las luces de freno encendidas.',
      'Que exista línea amarilla doble continua.',
      'Únicamente que su motor tenga suficiente combustible.',
      'Que haya línea discontinua, visibilidad suficiente, ausencia de tráfico opuesto, nadie adelantándolo detrás y señalizar con direccional.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Rebasar requiere verificar simultáneamente la legalidad de la marca vial, el espejo retrovisor y punto ciego, la distancia libre frontal y anunciar la maniobra.',
    distractorRationale: {
      A: 'Si el vehículo de adelante frena puede indicar un peligro o giro próximo, desaconsejando el rebase.',
      B: 'La doble línea continua amarilla prohíbe absolutamente adelantar.',
      C: 'El nivel de combustible no evalúa el riesgo dinámico de la vía.',
      D: 'La verificación 360° y la visibilidad frontal evitan choques frontales y laterales.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 95 y Art. 96.'
  },
  {
    id: 'vmt-t138',
    category: 'teorico',
    topic: 'Lugares Donde Está Prohibido Adelantar',
    question: '¿En cuál de los siguientes lugares está estrictamente prohibido realizar maniobras de adelantamiento?',
    statement: '¿En cuál de los siguientes lugares está estrictamente prohibido realizar maniobras de adelantamiento?',
    options: [
      'En curvas cerradas, cambios de rasante sin visibilidad, puentes, túneles y pasos peatonales.',
      'En rectas largas con línea discontinua y visibilidad despejada.',
      'En autopistas de tres carriles por sentido usando el carril izquierdo.',
      'Cuando el vehículo de adelante circula por el carril derecho en carretera amplia.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Adelantar sin visibilidad plena o en estructuras estrechas como puentes y pasos peatonales multiplica el riesgo de colisiones frontales o atropellos.',
    distractorRationale: {
      A: 'El Art. 96 del D.E. 61 prohíbe rebasar en curvas, cimas, puentes, túneles, intersecciones y cebras.',
      B: 'Las rectas con línea discontinua y visibilidad clara son los lugares adecuados para rebasar.',
      C: 'En autopistas multicarril se utiliza el carril izquierdo para rebasar ordenadamente.',
      D: 'Si el carril izquierdo está libre y habilitado, el rebase es válido.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 96.'
  },
  {
    id: 'vmt-t139',
    category: 'teorico',
    topic: 'Conducta del Vehículo que Está Siendo Adelantado',
    question: 'Si otro conductor ha iniciado legalmente una maniobra de adelantamiento sobre su vehículo, ¿cómo debe actuar usted?',
    statement: 'Si otro conductor ha iniciado legalmente una maniobra de adelantamiento sobre su vehículo, ¿cómo debe actuar usted?',
    options: [
      'Acelerar bruscamente para impedir que lo rebase.',
      'Mantener velocidad constante o reducirla levemente, ceñirse a la derecha y facilitar el retorno seguro.',
      'Desplazarse hacia la izquierda para bloquearle el paso.',
      'Encender las luces altas en su espejo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Acelerar mientras alguien nos adelanta prolonga peligrosamente el tiempo en el carril contrario; la ley obliga a facilitar la maniobra manteniendo la derecha.',
    distractorRationale: {
      A: 'Acelerar durante un rebase ajeno es una falta grave que puede provocar choque frontal.',
      B: 'Facilitar la reincorporación protege la vida de todos los ocupantes de la vía.',
      C: 'Cerrar el carril izquierdo provoca colisiones laterales o salidas de vía.',
      D: 'Encandilar al conductor que rebasa compromete su visibilidad.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 97.'
  },
  {
    id: 'vmt-t140',
    category: 'teorico',
    topic: 'Uso del Carril Izquierdo en Autopistas',
    question: 'En carreteras o autopistas de dos o más carriles por sentido, ¿para qué debe utilizarse prioritariamente el carril izquierdo?',
    statement: 'En carreteras o autopistas de dos o más carriles por sentido, ¿para qué debe utilizarse prioritariamente el carril izquierdo?',
    options: [
      'Para circular lentamente admirando el paisaje.',
      'Para estacionar vehículos averiados.',
      'Para realizar maniobras de adelantamiento y regresar luego al carril derecho.',
      'Exclusivamente para camiones de carga lenta.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La regla básica de circulación en multicarril ordena transitar por la derecha y reservar el carril izquierdo para rebasar vehículos más lentos.',
    distractorRationale: {
      A: 'Circular lento en el carril izquierdo genera congestión y rebases peligrosos por la derecha.',
      B: 'Los vehículos averiados deben retirarse al hombro derecho, nunca al carril izquierdo.',
      C: 'Usar el carril izquierdo solo para rebasar ordena el diferencial de velocidades.',
      D: 'Los camiones pesados deben circular por el carril derecho.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 94.'
  },
  {
    id: 'vmt-t141',
    category: 'teorico',
    topic: 'Prohibición de Giro a la Derecha en Rojo Sin Señal',
    question: 'En una intersección controlada por semáforo en luz roja, ¿cuándo está permitido girar a la derecha?',
    statement: 'En una intersección controlada por semáforo en luz roja, ¿cuándo está permitido girar a la derecha?',
    options: [
      'Siempre a alta velocidad sin detenerse.',
      'Únicamente de madrugada.',
      'Cuando el vehículo trasero toque la bocina.',
      'Solo cuando exista señalización o flecha verde autorizándolo, o tras detención total verificando ausencia de peatones y tránsito transversal donde la norma lo permita.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La luz roja ordena detención total obligatoria; cualquier giro a la derecha permitido exige señalización habilitante o detención previa completa y cesión total de paso.',
    distractorRationale: {
      A: 'Pasar en rojo sin detenerse es una infracción muy grave.',
      B: 'La luz roja rige las 24 horas del día.',
      C: 'La presión acústica de otros conductores nunca autoriza violar la luz roja.',
      D: 'La detención total y la verificación de señales específicas previenen atropellos y choques laterales.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 76.'
  },
  {
    id: 'vmt-t142',
    category: 'teorico',
    topic: 'Incorporación Desde Carril de Aceleración',
    question: 'Si al final de un carril de aceleración el flujo de la autopista es intenso y no hay brecha segura, ¿qué debe hacer el conductor?',
    statement: 'Si al final de un carril de aceleración el flujo de la autopista es intenso y no hay brecha segura, ¿qué debe hacer el conductor?',
    options: [
      'Detenerse antes de invadir la autopista, señalizar y esperar una brecha segura para acelerar e incorporarse.',
      'Lanzarse bruscamente obligando a frenar a los vehículos de la autopista.',
      'Retroceder en reversa por la rampa de acceso.',
      'Circular por el hombro derecho a 100 km/h.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Quien se incorpora por un carril de aceleración siempre debe ceder el paso al flujo principal de la autopista; si no hay espacio, debe esperar sin invadir el carril.',
    distractorRationale: {
      A: 'Ceder el paso al flujo principal evita colisiones de alta energía en autopistas.',
      B: 'Forzar la entrada provoca choques en cadena por alcance.',
      C: 'Circular en reversa en rampas de autopista es extremadamente peligroso e ilegal.',
      D: 'El hombro es zona de emergencia, nunca carril de aceleración prolongado.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 87.'
  },
  {
    id: 'vmt-t143',
    category: 'teorico',
    topic: 'Prioridad en Redondel de Dos Carriles',
    question: 'Al ingresar a un redondel de dos carriles para tomar la tercera salida (giro equivalente a la izquierda), ¿qué carril es recomendable usar?',
    statement: 'Al ingresar a un redondel de dos carriles para tomar la tercera salida (giro equivalente a la izquierda), ¿qué carril es recomendable usar?',
    options: [
      'El carril exterior en todo el recorrido bloqueando las primeras salidas.',
      'El carril interior al ingresar y girar, cambiando gradualmente al exterior con direccional antes de tomar la salida.',
      'Cruzar en línea recta por el centro ajardinado.',
      'Circular en sentido horario (contra el flujo).'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El carril interior del redondel se destina a quienes continúan más allá de la mitad de la glorieta, señalizando el cambio al carril exterior antes de salir.',
    distractorRationale: {
      A: 'Rodear todo el redondel por el carril exterior obstaculiza a quienes entran y salen en las primeras ramas.',
      B: 'La selección de carril según la salida elegida optimiza la fluidez y reduce cortes de trayectoria.',
      C: 'La isleta central no es transitable.',
      D: 'Los redondeles se circulan siempre en sentido antihorario (hacia la derecha al entrar).'
    },
    legalReference: 'Manual de Seguridad Vial VMT y D.E. 61 Art. 90.'
  },
  {
    id: 'vmt-t144',
    category: 'teorico',
    topic: 'Comportamiento Ante Ambulancia en Sentido Opuesto',
    question: 'En una calle de doble sentido sin separador central, si se aproxima una ambulancia con sirena y luces encendidas, ¿qué deben hacer ambos sentidos?',
    statement: 'En una calle de doble sentido sin separador central, si se aproxima una ambulancia con sirena y luces encendidas, ¿qué deben hacer ambos sentidos?',
    options: [
      'Detenerse en medio del carril bloqueando el centro.',
      'Acelerar para llegar primero a la esquina.',
      'Orillarse a la derecha, reducir la marcha o detenerse para abrir un corredor libre de paso.',
      'Cambiar hacia el carril izquierdo.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Orillarse a la derecha y detenerse permite despejar el centro de la calzada para que el vehículo de emergencia avance sin demora.',
    distractorRationale: {
      A: 'Detenerse en el centro obstruye el paso de la unidad de socorro.',
      B: 'Competir con una ambulancia pone en riesgo vidas humanas.',
      C: 'El desplazamiento hacia el borde derecho crea el pasillo de emergencia reglamentario.',
      D: 'Moverse a la izquierda cerraría el corredor central.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 85.'
  },
  {
    id: 'vmt-t145',
    category: 'teorico',
    topic: 'Prohibición de Seguir de Cerca a Vehículos de Emergencia',
    question: '¿Qué prohíbe el Reglamento General de Tránsito respecto a seguir detrás de una ambulancia o camión de bomberos en servicio de emergencia?',
    statement: '¿Qué prohíbe el Reglamento General de Tránsito respecto a seguir detrás de una ambulancia o camión de bomberos en servicio de emergencia?',
    options: [
      'Se permite pegarse a menos de dos metros para aprovechar la vía libre.',
      'Se permite solo si es un vehículo particular con luces intermitentes.',
      'Es obligatorio escoltarla a alta velocidad.',
      'Está prohibido seguirla de cerca aprovechando su estela; debe mantenerse una distancia mínima prudente (al menos 50 metros).'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Aprovechar el paso de una unidad de emergencia ("colarse" detrás) es ilegal y altamente peligroso si la ambulancia frena bruscamente.',
    distractorRationale: {
      A: 'Circular a dos metros detrás de una ambulancia provoca choques por alcance.',
      B: 'Las luces intermitentes particulares no convierten un auto en vehículo de emergencia.',
      C: 'Solo la policía puede escoltar vehículos de emergencia cuando corresponde.',
      D: 'La ley sanciona seguir de cerca o competir con vehículos de emergencia.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 85.'
  },
  {
    id: 'vmt-t146',
    category: 'teorico',
    topic: 'Estacionamiento Prohibido en Esquinas',
    question: '¿A qué distancia mínima de una esquina o intersección está prohibido estacionar vehículos para no obstruir la visibilidad?',
    statement: '¿A qué distancia mínima de una esquina o intersección está prohibido estacionar vehículos para no obstruir la visibilidad?',
    options: [
      'Al menos 5 metros (o según demarcación amarilla/roja) antes de la esquina o cruce peatonal.',
      'A 10 centímetros de la línea de cebra.',
      'Justo en la curva de la esquina si cabe el auto.',
      'No existe restricción de distancia en zonas urbanas.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Estacionar junto a las esquinas crea puntos ciegos que ocultan peatones y vehículos transversales, además de dificultar el radio de giro de buses y camiones.',
    distractorRationale: {
      A: 'Mantener despejados los últimos metros antes de la esquina garantiza visibilidad mutua y giros seguros.',
      B: 'Detenerse a 10 cm de la cebra oculta a los peatones que inician el cruce.',
      C: 'Ocupar la curva de la esquina bloquea totalmente la visibilidad y el radio de giro.',
      D: 'El D.E. 61 establece prohibiciones estrictas de estacionamiento en intersecciones.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 102.'
  },
  {
    id: 'vmt-t147',
    category: 'teorico',
    topic: 'Prohibición de Estacionar Frente a Hidrantes',
    question: '¿Por qué está estrictamente prohibido estacionar frente a hidrantes contra incendios o salidas de estaciones de bomberos?',
    statement: '¿Por qué está estrictamente prohibido estacionar frente a hidrantes contra incendios o salidas de estaciones de bomberos?',
    options: [
      'Porque el agua del hidrante puede manchar la pintura.',
      'Porque obstruye el acceso inmediato de bomberos en incendios y constituye falta grave con remoción por grúa.',
      'Solo por razones estéticas del ornato municipal.',
      'Únicamente durante los meses de verano.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Bloquear un hidrante o cuartel de bomberos retrasa la atención de incendios y pone en riesgo vidas humanas, facultando el retiro inmediato del vehículo.',
    distractorRationale: {
      A: 'La prohibición responde a emergencias vitales, no a estética automotriz.',
      B: 'Los hidrantes deben permanecer 100% accesibles las 24 horas.',
      C: 'No es una norma ornamental sino de seguridad pública.',
      D: 'Los incendios ocurren en cualquier época del año.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 102.'
  },
  {
    id: 'vmt-t148',
    category: 'teorico',
    topic: 'Estacionamiento en Pendientes (Cuestas)',
    question: 'Al estacionar un vehículo junto al cordón en una calle con pendiente pronunciada descendente (cuesta abajo), ¿hacia dónde deben girarse las ruedas delanteras?',
    statement: 'Al estacionar un vehículo junto al cordón en una calle con pendiente pronunciada descendente (cuesta abajo), ¿hacia dónde deben girarse las ruedas delanteras?',
    options: [
      'Hacia el centro de la calle.',
      'Completamente rectas sin freno de mano.',
      'Hacia el cordón de la acera (a la derecha), dejando freno de mano aplicado y marcha en reversa o P.',
      'No importa la dirección de las llantas.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Si fallara el freno de mano cuesta abajo, girar las llantas hacia el cordón hace que la acera actúe como tope físico e impida que el auto ruede hacia el tráfico.',
    distractorRationale: {
      A: 'Girar hacia el centro enviaría el vehículo directamente hacia los carriles de circulación.',
      B: 'Las llantas rectas permiten que el vehículo adquiera velocidad cuesta abajo sin tope.',
      C: 'Apoyar la rueda contra el cordón es la técnica defensiva estándar cuesta abajo.',
      D: 'La orientación de las ruedas es una medida crítica de contención mecánica.'
    },
    legalReference: 'Manual del Conductor VMT; D.E. 61 Art. 101.'
  },
  {
    id: 'vmt-t149',
    category: 'teorico',
    topic: 'Giro a la Derecha — Posicionamiento Previo',
    question: 'En una vía de varios carriles, ¿desde qué carril debe ejecutarse normalmente un giro hacia la derecha?',
    statement: 'En una vía de varios carriles, ¿desde qué carril debe ejecutarse normalmente un giro hacia la derecha?',
    options: [
      'Desde el carril central para tener mayor radio.',
      'Desde el carril izquierdo cruzando frente a todos.',
      'Desde cualquier carril si se encienden luces intermitentes.',
      'Desde el carril más próximo al borde derecho, señalizando con anticipación.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Girar a la derecha desde el carril derecho evita cortar la trayectoria de los vehículos que avanzan de frente en los carriles derechos.',
    distractorRationale: {
      A: 'Girar desde el carril central provoca choques laterales con el tránsito del carril derecho.',
      B: 'Cruzar desde la izquierda hacia la derecha es una maniobra altamente riesgosa.',
      C: 'Las luces intermitentes no autorizan giros desde carriles indebidos.',
      D: 'Posicionarse previamente en el borde derecho es norma universal de giro.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 92.'
  },
  {
    id: 'vmt-t150',
    category: 'teorico',
    topic: 'Prohibición de Retroceso en Autopistas',
    question: 'Si usted sobrepasa accidentalmente su salida en una autopista o carretera rápida, ¿qué maniobra debe realizar?',
    statement: 'Si usted sobrepasa accidentalmente su salida en una autopista o carretera rápida, ¿qué maniobra debe realizar?',
    options: [
      'Continuar hasta la próxima salida o retorno autorizado.',
      'Detenerse en seco y retroceder por el hombro.',
      'Hacer un giro en U cruzando la mediana central.',
      'Frenar en el carril izquierdo y cruzar perpendicularmente.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Retroceder o girar en U en autopistas de alta velocidad genera colisiones frontales o por alcance de extrema gravedad; siempre debe seguirse hasta el próximo retorno.',
    distractorRationale: {
      A: 'Avanzar hasta la siguiente salida es la única decisión segura y legal.',
      B: 'Circular en reversa en autopistas está estrictamente prohibido.',
      C: 'Cruzar medianas en autopistas está prohibido y es letal.',
      D: 'Cruzar carriles rápidos perpendicularmente causa impactos laterales mortales.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 99.'
  },
  {
    id: 'vmt-t151',
    category: 'teorico',
    topic: 'Prioridad de Transporte Colectivo al Salir de Bahía',
    question: 'Cuando un autobús de transporte colectivo señaliza su salida desde una bahía de parada autorizada en zona urbana, ¿qué actitud facilita la seguridad vial?',
    statement: 'Cuando un autobús de transporte colectivo señaliza su salida desde una bahía de parada autorizada en zona urbana, ¿qué actitud facilita la seguridad vial?',
    options: [
      'Acelerar para encerrarlo dentro de la bahía.',
      'Moderar la velocidad y cederle el espacio para incorporarse con seguridad al carril derecho.',
      'Tocar la bocina sin reducir la velocidad.',
      'Cambiar de carril sin ver el espejo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Facilitar la reincorporación de unidades de transporte colectivo desde paradas autorizadas reduce frenazos bruscos y protege a los pasajeros que viajan en el bus.',
    distractorRationale: {
      A: 'Encerrar a un autobús aumenta el riesgo de roces laterales y caídas de pasajeros.',
      B: 'La cortesía y previsión vial previenen colisiones en zonas de parada.',
      C: 'La bocina no resuelve la congestión ni evita colisiones.',
      D: 'Cambiar de carril sin verificar espejos genera otro choque.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 87 y Manual VMT.'
  },
  {
    id: 'vmt-t152',
    category: 'teorico',
    topic: 'Distancia Mínima al Rebasar Motocicletas',
    question: 'Al adelantar a un motociclista en carretera o ciudad, ¿qué precaución espacial debe respetarse?',
    statement: 'Al adelantar a un motociclista en carretera o ciudad, ¿qué precaución espacial debe respetarse?',
    options: [
      'Pasar dentro del mismo carril rozando su manubrio.',
      'Acelerar al máximo justo a su lado.',
      'Cambiar de carril o mantener un margen lateral amplio (mínimo 1.5 m), considerando su vulnerabilidad ante viento o baches.',
      'Usar luces altas para avisarle.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Una motocicleta tiene derecho al ancho completo de su carril y puede desviarse levemente para esquivar baches o ráfagas de aire; debe rebasarse con margen lateral amplio.',
    distractorRationale: {
      A: 'Compartir el mismo carril al rebasar a una moto expone al motociclista a ser derribado.',
      B: 'El desplazamiento de aire a alta velocidad desestabiliza vehículos de dos ruedas.',
      C: 'Otorgar al motociclista el espacio de un carril completo previene siniestros graves.',
      D: 'Encandilarlo por los espejos reduce su visibilidad.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 95 y Manual VMT.'
  },
  {
    id: 'vmt-t153',
    category: 'teorico',
    topic: 'Circulación de Motocicletas Entre Carriles',
    question: '¿Qué riesgo legal y físico implica el zigzagueo o circulación de motocicletas entre filas de vehículos en movimiento?',
    statement: '¿Qué riesgo legal y físico implica el zigzagueo o circulación de motocicletas entre filas de vehículos en movimiento?',
    options: [
      'Es obligatorio para ahorrar combustible.',
      'Aumenta la visibilidad del motociclista en espejos.',
      'Reduce la distancia de frenado del automóvil.',
      'Sitúa al motociclista en los puntos ciegos laterales, exponiéndolo a impactos por cambios de carril o apertura de puertas.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Circular entre carriles en movimiento impide que los conductores anticipen la presencia de la moto en sus espejos, elevando drásticamente el riesgo de colisión lateral.',
    distractorRationale: {
      A: 'Ninguna norma obliga a zigzaguear entre vehículos.',
      B: 'Al contrario, los espacios entre carriles coinciden con los puntos ciegos laterales.',
      C: 'No mejora la capacidad de frenado de ningún vehículo.',
      D: 'El D.E. 61 exige circular ordenadamente dentro del carril asignado.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 107.'
  },
  {
    id: 'vmt-t154',
    category: 'teorico',
    topic: 'Intersección Tipo "T" — Regla de Prioridad',
    question: 'En una intersección en forma de "T" sin señales de Alto o semáforos, ¿quién debe ceder el paso?',
    statement: 'En una intersección en forma de "T" sin señales de Alto o semáforos, ¿quién debe ceder el paso?',
    options: [
      'El vehículo que circula por la vía que termina (el brazo perpendicular de la T) frente a la vía continua.',
      'El vehículo que circula por la vía continua transversal.',
      'Siempre el vehículo de color más oscuro.',
      'Quien viaje con menos pasajeros.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'En entronques en T no regulados, quien circula por la calle que finaliza debe detenerse y ceder el paso a quienes transitan por la vía continua.',
    distractorRationale: {
      A: 'La vía transversal continua conserva la prioridad natural de flujo.',
      B: 'Quien circula por la vía continua no debe esperar a quien desemboca desde la calle que termina.',
      C: 'El color del automóvil es irrelevante.',
      D: 'El número de pasajeros no define preferencias viales.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 86.'
  },
  {
    id: 'vmt-t155',
    category: 'teorico',
    topic: 'Apertura de Puertas del Vehículo Estacionado',
    question: 'Antes de abrir la puerta del lado de la calzada tras estacionar un vehículo, ¿qué verificación obligatoria debe hacerse?',
    statement: 'Antes de abrir la puerta del lado de la calzada tras estacionar un vehículo, ¿qué verificación obligatoria debe hacerse?',
    options: [
      'Abrir la puerta de golpe para alertar a quienes vienen.',
      'Revisar retrovisores y girar la vista para asegurar que no se aproximen ciclistas, motociclistas o vehículos.',
      'Encender las luces altas únicamente.',
      'Ninguna, pues el vehículo está estacionado.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Abrir la puerta sin mirar provoca accidentes graves ("dooring"), especialmente contra ciclistas y motociclistas que circulan junto al carril estacionado.',
    distractorRationale: {
      A: 'Abrir bruscamente la puerta convierte la puerta en una barrera súbita mortal.',
      B: 'Mirar hacia atrás (técnica de la mano contraria) evita impactos con usuarios vulnerables.',
      C: 'Las luces altas no advierten la apertura lateral de una puerta.',
      D: 'El conductor sigue siendo responsable de la seguridad al descender.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 103.'
  },
  {
    id: 'vmt-t156',
    category: 'teorico',
    topic: 'Prohibición de Circular en Contramano',
    question: '¿Bajo qué circunstancia puede un vehículo particular circular en sentido contrario al establecido en una calle de un solo sentido?',
    statement: '¿Bajo qué circunstancia puede un vehículo particular circular en sentido contrario al establecido en una calle de un solo sentido?',
    options: [
      'Cuando el trayecto sea menor a media cuadra.',
      'Cuando no haya agentes de tránsito a la vista.',
      'Nunca, salvo indicación expresa y directa de un agente de la PNC-DTT que dirija el tránsito.',
      'Cuando lleve las luces de emergencia encendidas.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La prohibición de circular en contramano es absoluta; únicamente la instrucción directa de un agente policial de tránsito prevalece por razones operativas.',
    distractorRationale: {
      A: 'Media cuadra en contramano basta para causar un choque frontal o atropello.',
      B: 'Las normas viales rigen siempre, haya o no vigilancia policial.',
      C: 'La jerarquía vial coloca las órdenes del agente policial sobre la señalización fija.',
      D: 'Las luces intermitentes no autorizan circular en sentido contrario.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 74 y Art. 117 D.L. 477.'
  },
  {
    id: 'vmt-t157',
    category: 'teorico',
    topic: 'Conducción en Caravana o Cortejo',
    question: 'Al circular detrás de una caravana fúnebre o desfile autorizado en la vía pública, ¿qué regla debe observarse?',
    statement: 'Al circular detrás de una caravana fúnebre o desfile autorizado en la vía pública, ¿qué regla debe observarse?',
    options: [
      'Acelerar entre los vehículos del cortejo para dispersarlos.',
      'Tocar la bocina continuamente para apurar la marcha.',
      'Rebasar por la acera derecha.',
      'No interrumpir ni cortar la formación autorizada y mantener distancia prudente.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El reglamento prohíbe cortar o interponerse dentro de desfiles, procesiones o cortejos autorizados para mantener el orden y seguridad de los participantes.',
    distractorRationale: {
      A: 'Interponerse en una caravana genera frenazos y roces.',
      B: 'Tocar la bocina sin peligro inminente es improcedente y molesto.',
      C: 'Subir a la acera está estrictamente prohibido.',
      D: 'Respetar la integridad del cortejo evita conflictos y accidentes.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 90.'
  },
  {
    id: 'vmt-t158',
    category: 'teorico',
    topic: 'Cruce de Semáforo con Luz Verde Intermitente',
    question: 'Cuando la luz verde de un semáforo comienza a parpadear (donde exista esa fase), ¿qué anuncia al conductor?',
    statement: 'Cuando la luz verde de un semáforo comienza a parpadear (donde exista esa fase), ¿qué anuncia al conductor?',
    options: [
      'Que el tiempo de verde está por concluir y cambiará inminentemente a amarillo y rojo, por lo que debe prepararse a detenerse.',
      'Que debe duplicar su velocidad para cruzar.',
      'Que el semáforo está dañado.',
      'Que tiene derecho a girar en U.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El parpadeo de la luz verde funciona como preaviso de cambio de fase hacia amarillo, permitiendo desacelerar suavemente antes de la línea de parada.',
    distractorRationale: {
      A: 'Anticipar la detención evita frenazos bruscos o quedar en rojo en medio del cruce.',
      B: 'Acelerar ante el fin del verde aumenta el riesgo de colisión lateral.',
      C: 'El parpadeo programado es una función normal de preaviso.',
      D: 'No autoriza maniobras de retorno en U.'
    },
    legalReference: 'Manual SIECA 2025; D.E. 61 Art. 76.'
  },
  {
    id: 'vmt-t159',
    category: 'teorico',
    topic: 'Prohibición de Bloquear Pasos Peatonales',
    question: 'Si el tráfico se detiene repentinamente ante un semáforo en rojo y su vehículo queda sobre el paso peatonal (cebra), ¿qué error cometió?',
    statement: 'Si el tráfico se detiene repentinamente ante un semáforo en rojo y su vehículo queda sobre el paso peatonal (cebra), ¿qué error cometió?',
    options: [
      'Ninguno, la cebra sirve como zona de espera para autos.',
      'No anticipó el espacio disponible más allá de la línea de parada, obstruyendo el cruce seguro de los peatones.',
      'Debió acelerar más para quedar en el centro de la intersección.',
      'Debió apagar el motor inmediatamente.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Todo conductor debe detenerse antes de la línea blanca de parada, dejando completamente libre la franja peatonal.',
    distractorRationale: {
      A: 'La cebra es exclusiva para el tránsito de peatones.',
      B: 'Ocupar la cebra obliga a los peatones a rodear vehículos entre el tráfico.',
      C: 'Quedar en el centro del cruce agrava el bloqueo vial.',
      D: 'Apagar el motor no libera el paso peatonal obstruido.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 88 y Art. 90.'
  },
  {
    id: 'vmt-t160',
    category: 'teorico',
    topic: 'Uso de Carriles Exclusivos para Transporte Colectivo',
    question: '¿Pueden los vehículos particulares utilizar carriles debidamente señalizados como exclusivos para autobuses o transporte masivo?',
    statement: '¿Pueden los vehículos particulares utilizar carriles debidamente señalizados como exclusivos para autobuses o transporte masivo?',
    options: [
      'Sí, cuando haya mucha congestión en los carriles ordinarios.',
      'Sí, si circulan a más de 60 km/h.',
      'No, salvo en los puntos expresamente habilitados para giro derecho o emergencia autorizada.',
      'Sí, los fines de semana.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los carriles exclusivos garantizan la fluidez del transporte público y la seguridad de sus usuarios; invadirlos sin autorización constituye infracción.',
    distractorRationale: {
      A: 'La congestión no habilita invadir carriles segregados.',
      B: 'La velocidad no justifica el uso indebido del carril exclusivo.',
      C: 'Solo se permite cruzarlos brevemente en zonas demarcadas para ingresar a bocacalles o garajes.',
      D: 'La exclusividad rige según los horarios oficiales señalizados, incluyendo fines de semana si aplica.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y D.E. 61.'
  },
  {
    id: 'vmt-t161',
    category: 'teorico',
    topic: 'Cambio de Carril — Secuencia Segura',
    question: '¿Cuál es la secuencia correcta de pasos para cambiar de carril de manera segura en una avenida multicarril?',
    statement: '¿Cuál es la secuencia correcta de pasos para cambiar de carril de manera segura en una avenida multicarril?',
    options: [
      'Girar el volante primero y encender la direccional después.',
      'Frenar en seco antes de moverse.',
      'Tocar la bocina y cambiar de carril sin mirar espejos.',
      'Observar espejos, activar direccional con anticipación, verificar el punto ciego girando brevemente la cabeza y desplazarse suavemente.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El protocolo ESM (Espejo - Señal - Maniobra) sumado a la revisión del punto ciego garantiza que ningún vehículo o motocicleta oculto sea impactado lateralmente.',
    distractorRationale: {
      A: 'Encender la direccional después de iniciar el giro anula su función preventiva.',
      B: 'Frenar bruscamente en vía multicarril provoca choques por alcance.',
      C: 'Omitir espejos y punto ciego es la causa principal de colisiones laterales.',
      D: 'La combinación de espejos, direccional anticipada y chequeo de punto ciego es la norma técnica segura.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT; D.E. 61 Art. 93.'
  },
  {
    id: 'vmt-t162',
    category: 'teorico',
    topic: 'Prioridad al Incorporarse a Vía Principal Desde Calle Secundaria',
    question: 'Un conductor circula por un pasaje residencial y llega a un bulevar principal sin semáforo ni señal de Alto. ¿Cómo debe proceder?',
    statement: 'Un conductor circula por un pasaje residencial y llega a un bulevar principal sin semáforo ni señal de Alto. ¿Cómo debe proceder?',
    options: [
      'Detenerse antes de salir a la calzada del bulevar y ceder el paso a todos los vehículos que circulan por la vía principal.',
      'Ingresar sin detenerse porque no hay señal de Alto.',
      'Acelerar para ganar el carril derecho.',
      'Exigir que los autos del bulevar frenen.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Por jerarquía vial, las vías secundarias o pasajes ceden siempre el paso a las arterias principales o bulevares aunque falte señal vertical.',
    distractorRationale: {
      A: 'La vía de mayor jerarquía y volumen conserva preferencia natural.',
      B: 'La ausencia de rótulo no otorga prioridad a un pasaje menor sobre un bulevar.',
      C: 'Salir acelerando ante tráfico rápido provoca impactos laterales graves.',
      D: 'Quienes circulan por la arteria principal tienen derecho de vía.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 86.'
  },
  {
    id: 'vmt-t163',
    category: 'teorico',
    topic: 'Estacionamiento Paralelo — Distancia Máxima al Cordón',
    question: 'Al estacionar paralelamente a la acera en un lugar permitido, ¿cómo debe quedar posicionado el vehículo?',
    statement: 'Al estacionar paralelamente a la acera en un lugar permitido, ¿cómo debe quedar posicionado el vehículo?',
    options: [
      'A más de un metro de distancia del cordón.',
      'Lo más próximo posible al cordón derecho (máximo ~30 cm), en el sentido de la circulación y sin invadir la acera.',
      'En sentido contrario al tráfico de ese carril.',
      'Con dos ruedas montadas sobre la acera peatonal.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Estacionar pegado al cordón en el sentido del flujo evita estrechar la calzada y evita maniobras peligrosas en contramano al salir.',
    distractorRationale: {
      A: 'Dejar el vehículo separado más de 30 cm invade el carril de circulación.',
      B: 'La alineación paralela al sentido de marcha y pegada al cordón es la exigencia reglamentaria.',
      C: 'Estacionar en sentido contrario obliga a invadir el carril opuesto al entrar y salir.',
      D: 'Subir ruedas a la acera obstruye el paso peatonal y daña la infraestructura.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 101.'
  },
  {
    id: 'vmt-t164',
    category: 'teorico',
    topic: 'Prohibición de Doble Fila',
    question: '¿Está permitido detenerse o estacionarse en "doble fila" junto a otro vehículo ya estacionado para esperar a un pasajero?',
    statement: '¿Está permitido detenerse o estacionarse en "doble fila" junto a otro vehículo ya estacionado para esperar a un pasajero?',
    options: [
      'Sí, si se encienden las luces de parqueo.',
      'Sí, por menos de cinco minutos.',
      'No, está estrictamente prohibido porque bloquea un carril activo y genera riesgo de choque por alcance.',
      'Sí, frente a centros comerciales.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La doble fila obstruye la circulación normal, obliga a otros conductores a invadir carriles contiguos y genera embotellamientos y colisiones.',
    distractorRationale: {
      A: 'Las luces intermitentes de emergencia no legalizan estacionar en doble fila.',
      B: 'La prohibición aplica desde el primer instante en que se obstruye el carril.',
      C: 'El Art. 102 del D.E. 61 prohíbe estacionar o detenerse en doble fila.',
      D: 'Las zonas comerciales con alta afluencia son aún más vulnerables a bloqueos por doble fila.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 102.'
  },
  {
    id: 'vmt-t165',
    category: 'teorico',
    topic: 'Prioridad de Vehículos Sobre Rieles vs Tránsito Común',
    question: 'En cualquier cruce ferroviario o paso a nivel, ¿qué debe hacer todo conductor aunque no vea barreras bajas?',
    statement: 'En cualquier cruce ferroviario o paso a nivel, ¿qué debe hacer todo conductor aunque no vea barreras bajas?',
    options: [
      'Cruzar a máxima velocidad sin mirar.',
      'Detenerse sobre los rieles para observar.',
      'Tocar la bocina y avanzar.',
      'Detenerse antes de la línea de cruce, observar y escuchar en ambas direcciones antes de cruzar.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Nunca debe confiarse únicamente en dispositivos mecánicos; todo cruce ferroviario exige detención preventiva y verificación visual/auditiva antes de pasar.',
    distractorRationale: {
      A: 'Cruzar sin mirar ante una posible falla de barrera puede ser fatal.',
      B: 'Detenerse sobre los rieles expone el vehículo a quedar atrapado.',
      C: 'El ruido interno impide oír la locomotora si no se detiene y atiende.',
      D: 'La verificación personal antes de cruzar los rieles es la regla de oro.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 84.'
  },
  {
    id: 'vmt-t166',
    category: 'teorico',
    topic: 'Uso de Glorietas o Redondeles — Señalización al Salir',
    question: '¿Qué luz direccional debe activar el conductor inmediatamente antes de abandonar un redondel hacia su salida elegida?',
    statement: '¿Qué luz direccional debe activar el conductor inmediatamente antes de abandonar un redondel hacia su salida elegida?',
    options: [
      'La luz direccional derecha, para avisar a quienes esperan ingresar y a quienes circulan detrás.',
      'La luz direccional izquierda.',
      'Las luces altas intermitentes.',
      'Ninguna señal luminosa.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Activar la direccional derecha justo después de pasar la salida previa comunica claramente que el vehículo abandonará el redondel, agilizando el ingreso de otros.',
    distractorRationale: {
      A: 'La direccional derecha indica salida inminente de la rotonda.',
      B: 'La direccional izquierda indica permanencia girando dentro del redondel.',
      C: 'Las luces altas encandilan y no comunican dirección de salida.',
      D: 'Omitir la direccional retrasa innecesariamente el flujo de quienes esperan entrar.'
    },
    legalReference: 'Manual de Seguridad Vial VMT; D.E. 61 Art. 93.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 4: VELOCIDADES, DISTANCIAS Y VISIBILIDAD (+27)
  // ==========================================================================
  {
    id: 'vmt-t167',
    category: 'teorico',
    topic: 'Límite de Velocidad en Zonas Urbanas Ordinarias',
    question: 'En calles y avenidas urbanas ordinarias de El Salvador, salvo señalización que indique otro valor, ¿cuál es el límite máximo de velocidad de referencia?',
    statement: 'En calles y avenidas urbanas ordinarias de El Salvador, salvo señalización que indique otro valor, ¿cuál es el límite máximo de velocidad de referencia?',
    options: [
      '100 km/h de forma permanente.',
      '40 a 50 km/h según la jerarquía de la vía urbana (y 25 km/h en zonas escolares).',
      '80 km/h en cualquier calle residencial.',
      'No existe límite urbano establecido.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El Reglamento General de Tránsito fija límites bajos en perímetros urbanos (40-50 km/h en calles/avenidas y 25 km/h en zonas escolares) para proteger a peatones.',
    distractorRationale: {
      A: '100 km/h en zona urbana multiplica exponencialmente la letalidad de atropellos.',
      B: 'Las velocidades urbanas moderadas permiten detener el vehículo a tiempo ante imprevistos.',
      C: '80 km/h es inadmisible en calles residenciales.',
      D: 'El Art. 98 del D.E. 61 regula expresamente los límites máximos por tipo de vía.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 98.'
  },
  {
    id: 'vmt-t168',
    category: 'teorico',
    topic: 'Velocidad Adecuada a las Condiciones (Principio de Prudencia)',
    question: 'Si una señal indica límite máximo de 70 km/h pero hay lluvia torrencial y neblina densa, ¿a qué velocidad debe circular el conductor?',
    statement: 'Si una señal indica límite máximo de 70 km/h pero hay lluvia torrencial y neblina densa, ¿a qué velocidad debe circular el conductor?',
    options: [
      'Obligatoriamente a 70 km/h porque es el límite del rótulo.',
      'A 90 km/h para salir rápido de la zona de lluvia.',
      'A una velocidad prudente inferior al límite, que permita detener el vehículo dentro del campo de visión disponible.',
      'A 5 km/h en el carril izquierdo.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El límite máximo es para condiciones óptimas; bajo lluvia o niebla la ley exige reducir la velocidad proporcionalmente a la adherencia y visibilidad reales.',
    distractorRationale: {
      A: 'Mantener el límite máximo con visibilidad nula constituye conducción imprudente.',
      B: 'Acelerar bajo lluvia intensa dispara el riesgo de hidroplaneo.',
      C: 'La regla de oro es ajustar la velocidad para poder frenar dentro de la distancia visible.',
      D: 'Detenerse casi por completo en el carril rápido provoca choques por alcance.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 98 y Art. 99.'
  },
  {
    id: 'vmt-t169',
    category: 'teorico',
    topic: 'Velocidad Excesivamente Baja Sin Justificación',
    question: '¿Qué problema genera circular a una velocidad anormalmente baja en el carril rápido de una autopista sin causa mecánica justificada?',
    statement: '¿Qué problema genera circular a una velocidad anormalmente baja en el carril rápido de una autopista sin causa mecánica justificada?',
    options: [
      'Ninguno, siempre es más seguro ir lo más lento posible.',
      'Mejora la fluidez de la autopista.',
      'Ahorra tiempo a todos los usuarios.',
      'Entorpece el tránsito y provoca maniobras de rebase peligrosas y colisiones por alcance.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Tanto el exceso de velocidad como circular injustificadamente por debajo de la mínima entorpeciendo la vía generan diferenciales de velocidad peligrosos.',
    distractorRationale: {
      A: 'Un diferencial elevado de velocidad en autopista crea riesgo severo de impacto trasero.',
      B: 'Obstaculizar el carril izquierdo genera congestión en cadena.',
      C: 'Retrasa y desordena el flujo vehicular.',
      D: 'El D.E. 61 prohíbe circular a velocidad tan reducida que entorpezca la marcha normal.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 99.'
  },
  {
    id: 'vmt-t170',
    category: 'teorico',
    topic: 'Componentes de la Distancia Total de Detención',
    question: '¿Qué dos factores físicos componen la distancia total necesaria para detener un vehículo ante un peligro imprevisto?',
    statement: '¿Qué dos factores físicos componen la distancia total necesaria para detener un vehículo ante un peligro imprevisto?',
    options: [
      'Distancia de reacción (tiempo humano hasta pisar el freno) más distancia de frenado (recorrido hasta detenerse).',
      'Únicamente el ancho de las llantas.',
      'Solo el peso de los pasajeros.',
      'La potencia de los faros delanteros.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Desde que el ojo percibe el peligro hasta que el pie presiona el freno transcurre el tiempo de reacción (~0.75-1.0 s); luego actúa la distancia de frenado mecánica.',
    distractorRationale: {
      A: 'Sumar ambos tramos explica por qué la distancia de parada crece cuadráticamente con la velocidad.',
      B: 'El ancho del neumático influye en el agarre pero no define por sí solo la distancia total.',
      C: 'La masa afecta la inercia de frenado, pero no constituye la fórmula completa.',
      D: 'La iluminación mejora la detección temprana pero no es un tramo de recorrido.'
    },
    legalReference: 'Manual Técnico de Conducción Segura VMT.'
  },
  {
    id: 'vmt-t171',
    category: 'teorico',
    topic: 'Efecto de Duplicar la Velocidad en la Distancia de Frenado',
    question: 'Si un vehículo duplica su velocidad (por ejemplo, de 40 km/h a 80 km/h), ¿qué ocurre aproximadamente con su distancia de frenado?',
    statement: 'Si un vehículo duplica su velocidad (por ejemplo, de 40 km/h a 80 km/h), ¿qué ocurre aproximadamente con su distancia de frenado?',
    options: [
      'Se mantiene exactamente igual.',
      'Se multiplica aproximadamente por cuatro (cuadruplica), debido a la energía cinética.',
      'Se reduce a la mitad.',
      'Aumenta solo un 10%.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La energía cinética es proporcional al cuadrado de la velocidad ($E_c = \\frac{1}{2}mv^2$), por lo que duplicar la velocidad cuadruplica la distancia de frenado.',
    distractorRationale: {
      A: 'La física cinemática impide que la distancia de frenado permanezca constante al acelerar.',
      B: 'Comprender esta relación cuadrática es esencial para respetar los límites de velocidad.',
      C: 'A mayor velocidad, mayor distancia requerida para disipar la energía en los frenos.',
      D: 'El incremento es cuadrático (4x), nunca lineal del 10%.'
    },
    legalReference: 'Manual de Física Vial y Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t172',
    category: 'teorico',
    topic: 'Horario Obligatorio de Luces Bajas',
    question: '¿En qué horario o circunstancias es obligatorio encender las luces bajas del vehículo según el D.E. 61?',
    statement: '¿En qué horario o circunstancias es obligatorio encender las luces bajas del vehículo según el D.E. 61?',
    options: [
      'Únicamente entre la medianoche y las 4:00 a.m.',
      'Solo cuando el conductor quiera ahorrar batería.',
      'Desde las 6:00 p.m. hasta las 6:00 a.m., y en cualquier momento del día con lluvia, neblina o visibilidad reducida.',
      'Exclusivamente en túneles.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Las luces bajas deben encenderse desde el anochecer hasta el amanecer y siempre que fenómenos climáticos disminuyan la visibilidad para ver y ser visto.',
    distractorRationale: {
      A: 'El crepúsculo vespertino y el amanecer requieren iluminación obligatoria.',
      B: 'Las luces se alimentan del alternador con el motor en marcha; la seguridad prima.',
      C: 'El Art. 41 del D.E. 61 fija el rango nocturno y condiciones adversas.',
      D: 'Aplica en toda la red vial, no solo en túneles.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 41.'
  },
  {
    id: 'vmt-t173',
    category: 'teorico',
    topic: 'Cambio de Luz Alta a Luz Baja',
    question: 'Al circular de noche en carretera con luces altas y aproximarse a otro vehículo en sentido contrario o alcanzar uno por detrás, ¿qué debe hacer?',
    statement: 'Al circular de noche en carretera con luces altas y aproximarse a otro vehículo en sentido contrario o alcanzar uno por detrás, ¿qué debe hacer?',
    options: [
      'Mantener la luz alta para ver mejor la placa.',
      'Apagar todas las luces delanteras.',
      'Encender las luces intermitentes de parqueo.',
      'Cambiar a luz baja con anticipación (al menos 150-200 m) para evitar deslumbrar al otro conductor.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Las luces altas encandilan temporalmente ("ceguera nocturna") al conductor que viene de frente o al que va delante por sus espejos.',
    distractorRationale: {
      A: 'Encandilar al tráfico opuesto aumenta el riesgo de choque frontal.',
      B: 'Apagar las luces deja al conductor completamente a ciegas.',
      C: 'Las luces de parqueo no eliminan el deslumbramiento de los faros altos.',
      D: 'Realizar el cambio a luz baja oportunamente protege la visión de ambos conductores.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 41 y Art. 42.'
  },
  {
    id: 'vmt-t174',
    category: 'teorico',
    topic: 'Uso Incorrecto de Luces de Emergencia en Movimiento',
    question: '¿Es correcto circular por autopista bajo lluvia ligera con las cuatro luces intermitentes de emergencia encendidas mientras avanza normalmente?',
    statement: '¿Es correcto circular por autopista bajo lluvia ligera con las cuatro luces intermitentes de emergencia encendidas mientras avanza normalmente?',
    options: [
      'No, porque anulan la visibilidad de las luces direccionales y confunden sobre si el vehículo está detenido o en movimiento.',
      'Sí, es obligatorio encenderlas cada vez que llueve.',
      'Sí, reemplazan a los faros delanteros.',
      'Sí, para poder exceder el límite de velocidad.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Las luces intermitentes de emergencia deben usarse al estar detenido por avería o para advertir una retención súbita; circular con ellas en lluvia impide indicar giros.',
    distractorRationale: {
      A: 'En lluvia se deben encender las luces bajas y neblineras, manteniendo funcionales las direccionales.',
      B: 'No existe obligación de circular con intermitentes en lluvia ordinaria.',
      C: 'Las intermitentes no iluminan la calzada hacia adelante.',
      D: 'Nunca autorizan exceder la velocidad.'
    },
    legalReference: 'Manual de Seguridad Vial VMT; D.E. 61 Art. 41.'
  },
  {
    id: 'vmt-t175',
    category: 'teorico',
    topic: 'Distancia de Seguimiento Detrás de Camiones',
    question: '¿Por qué es indispensable aumentar la distancia de seguimiento (4 o más segundos) cuando se circula detrás de un camión o autobús alto?',
    statement: '¿Por qué es indispensable aumentar la distancia de seguimiento (4 o más segundos) cuando se circula detrás de un camión o autobús alto?',
    options: [
      'Para ahorrar aceite del motor.',
      'Porque el vehículo grande bloquea la visión hacia adelante y requiere visibilidad amplia para anticipar peligros y salir de sus puntos ciegos.',
      'Porque los camiones aceleran más rápido que un automóvil.',
      'Para evitar que el viento impulse el auto.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Pegarse detrás de un vehículo voluminoso impide ver semáforos, baches o detenciones adelante y sitúa al automóvil en el punto ciego trasero del camión.',
    distractorRationale: {
      A: 'No guarda relación con el consumo de lubricante.',
      B: 'Ampliar la distancia recupera el ángulo de visión hacia los espejos del camión y la vía frontal.',
      C: 'Los vehículos pesados aceleran más lento y frenan diferente.',
      D: 'El propósito principal es visibilidad y tiempo de reacción.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t176',
    category: 'teorico',
    topic: 'Conducción Bajo Lluvia — Primeros Minutos',
    question: '¿Por qué los primeros 10 a 15 minutos después de comenzar una lluvia son especialmente resbaladizos sobre el asfalto?',
    statement: '¿Por qué los primeros 10 a 15 minutos después de comenzar una lluvia son especialmente resbaladizos sobre el asfalto?',
    options: [
      'Porque las llantas se endurecen inmediatamente.',
      'Porque el agua desaparece al instante.',
      'Porque el agua inicial se mezcla con restos de aceite, grasa y polvo acumulados, formando una película jabonosa sobre el pavimento.',
      'Porque los frenos se desconectan automáticamente.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Antes de que la lluvia fuerte lave la calzada, las primeras gotas emulsionan aceites y polvo creando una capa sumamente deslizante.',
    distractorRationale: {
      A: 'El caucho no se endurece instantáneamente con la lluvia.',
      B: 'El agua permanece mezclándose con los residuos superficiales.',
      C: 'Esta emulsión inicial reduce drásticamente el coeficiente de fricción.',
      D: 'Los sistemas de freno continúan funcionando mecánicamente.'
    },
    legalReference: 'Manual de Seguridad Vial en Condiciones Adversas VMT.'
  },
  {
    id: 'vmt-t177',
    category: 'teorico',
    topic: 'Uso de Limpiaparabrisas y Desempañador',
    question: 'Si durante una lluvia intensa el parabrisas comienza a empañarse por dentro, ¿qué medida técnica es más efectiva?',
    statement: 'Si durante una lluvia intensa el parabrisas comienza a empañarse por dentro, ¿qué medida técnica es más efectiva?',
    options: [
      'Limpiar el vidrio con la mano mientras conduce a 80 km/h.',
      'Apagar toda ventilación y cerrar completamente el aire.',
      'Circular con la cabeza fuera de la ventanilla.',
      'Activar el desempañador dirigido al parabrisas (aire acondicionado o flujo de aire seco) y mantener limpiaparabrisas en buen estado.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El aire acondicionado o desempañador elimina rápidamente la humedad condensada en la cara interna del vidrio sin distraer las manos del volante.',
    distractorRationale: {
      A: 'Soltar el volante para limpiar el vidrio con la mano distrae y deja manchas.',
      B: 'Cerrar toda ventilación empeora la condensación interior.',
      C: 'Sacar la cabeza es extremadamente peligroso e imprudente.',
      D: 'El desempañador seca el aire y despeja el campo visual de forma segura.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-t178',
    category: 'teorico',
    topic: 'Conducción Nocturna — Velocidad y Alcance de Faros',
    question: '¿Qué relación debe existir de noche entre la velocidad de circulación y el alcance de las luces bajas del vehículo?',
    statement: '¿Qué relación debe existir de noche entre la velocidad de circulación y el alcance de las luces bajas del vehículo?',
    options: [
      'La distancia total de detención del vehículo nunca debe superar la distancia iluminada por los faros.',
      'Se puede circular a 120 km/h aunque los faros iluminen solo 30 metros.',
      'Las luces bajas permiten ver igual que a pleno mediodía.',
      'No existe relación entre velocidad e iluminación.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Si se conduce más rápido de lo que alcanzan los faros ("sobreconducir los faros"), cualquier obstáculo iluminado será imposible de esquivar o frenar a tiempo.',
    distractorRationale: {
      A: 'Mantener la distancia de parada dentro del haz luminoso es esencial en conducción nocturna.',
      B: 'A 120 km/h se requieren más de 100 metros para detenerse, superando el alcance de luces bajas.',
      C: 'La agudeza visual y percepción de profundidad caen drásticamente de noche.',
      D: 'La velocidad debe adaptarse siempre al alcance visual real.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t179',
    category: 'teorico',
    topic: 'Señalización Anticipada de Giros en Zona Urbana',
    question: '¿Con qué anticipación mínima aproximada debe activarse la luz direccional antes de efectuar un giro en zona urbana?',
    statement: '¿Con qué anticipación mínima aproximada debe activarse la luz direccional antes de efectuar un giro en zona urbana?',
    options: [
      'Justo en el momento en que ya se giró el volante.',
      'Al menos 30 metros antes de la esquina o intersección (y ~100 m en carretera rápida).',
      'Cinco cuadras antes aunque pase varias esquinas.',
      'Solo si hay un policía detrás.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Señalizar con al menos 30 metros en ciudad da tiempo a conductores traseros y peatones para reaccionar antes del giro.',
    distractorRationale: {
      A: 'Activar la direccional cuando ya se está girando no advierte a nadie a tiempo.',
      B: 'Los 30 metros en ciudad y 100 metros en carretera equilibran claridad y oportunidad.',
      C: 'Encenderla varias cuadras antes confunde a quienes esperan salir de calles intermedias.',
      D: 'La señalización es obligatoria siempre, no solo ante vigilancia policial.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 93.'
  },
  {
    id: 'vmt-t180',
    category: 'teorico',
    topic: 'Conducción en Zona Rural — Animales en la Vía',
    question: 'Al conducir por carreteras rurales al anochecer y observar ganado o animales cerca del borde de la calzada, ¿qué acción preventiva es correcta?',
    statement: 'Al conducir por carreteras rurales al anochecer y observar ganado o animales cerca del borde de la calzada, ¿qué acción preventiva es correcta?',
    options: [
      'Acelerar y tocar fuertemente la bocina junto a los animales.',
      'Encender las luces altas directamente a los ojos del animal.',
      'Reducir sustancialmente la velocidad, evitar bocinazos bruscos que los asusten y prepararse a detenerse.',
      'Pasar rozando al animal sin frenar.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los animales reaccionan de forma impredecible ante bocinas y luces altas, pudiendo correr hacia el centro de la calzada.',
    distractorRationale: {
      A: 'Asustar al ganado con bocina puede provocar que cruce súbitamente frente al vehículo.',
      B: 'Las luces altas paralizan o desorientan a muchos animales en la vía.',
      C: 'Reducir la velocidad y pasar con calma previene colisiones graves.',
      D: 'Un impacto contra ganado mayor puede resultar fatal para los ocupantes del auto.'
    },
    legalReference: 'Manual de Seguridad Vial VMT; D.E. 61.'
  },
  {
    id: 'vmt-t181',
    category: 'teorico',
    topic: 'Visibilidad en Espejos Retrovisores',
    question: '¿Cómo deben ajustarse los espejos retrovisores laterales exteriores para minimizar los puntos ciegos?',
    statement: '¿Cómo deben ajustarse los espejos retrovisores laterales exteriores para minimizar los puntos ciegos?',
    options: [
      'Mostrando la mitad del propio vehículo en todo el espejo.',
      'Apuntando hacia el cielo o hacia el pavimento inmediato.',
      'Plegados hacia adentro para mejorar aerodinámica.',
      'Abiertos hacia afuera de modo que apenas se perciba el borde lateral propio y se cubra ampliamente el carril adyacente.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Si los espejos laterales muestran demasiado del propio automóvil, duplican la vista del espejo central y dejan ciegos los carriles contiguos.',
    distractorRationale: {
      A: 'Ver gran parte de la propia carrocería desperdicia campo visual útil.',
      B: 'Apuntar al suelo o cielo impide ver vehículos que se aproximan.',
      C: 'Circular con espejos plegados está prohibido y anula la visión trasera.',
      D: 'Abrir los espejos amplía la cobertura lateral y reduce los ángulos muertos.'
    },
    legalReference: 'Manual Técnico de Conducción VMT.'
  },
  {
    id: 'vmt-t182',
    category: 'teorico',
    topic: 'Límite de Velocidad en Carreteras Primarias',
    question: 'En carreteras primarias o autopistas interurbanas de El Salvador, salvo señalización específica diferente, ¿cuál es el límite máximo legal para vehículos livianos?',
    statement: 'En carreteras primarias o autopistas interurbanas de El Salvador, salvo señalización específica diferente, ¿cuál es el límite máximo legal para vehículos livianos?',
    options: [
      '90 km/h (respetando tramos señalizados con límites menores como curvas o poblados).',
      '140 km/h.',
      '160 km/h.',
      '30 km/h en todo el trayecto.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Reglamento General de Tránsito fija 90 km/h como techo general en carreteras abiertas para automóviles, reduciéndose en tramos poblados, curvas o carga pesada.',
    distractorRationale: {
      A: 'Noventa km/h es el límite máximo general en carreteras primarias salvo señal inferior.',
      B: '140 km/h excede ampliamente el límite legal y multiplica la letalidad.',
      C: '160 km/h constituye conducción temeraria.',
      D: '30 km/h en autopista abierta obstruiría peligrosamente la circulación.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 98.'
  },
  {
    id: 'vmt-t183',
    category: 'teorico',
    topic: 'Velocidad Máxima para Transporte Pesado y Colectivo',
    question: '¿Por qué los autobuses y camiones de carga pesada tienen límites máximos de velocidad más estrictos que los automóviles livianos en carretera?',
    statement: '¿Por qué los autobuses y camiones de carga pesada tienen límites máximos de velocidad más estrictos que los automóviles livianos en carretera?',
    options: [
      'Para gastar más combustible.',
      'Porque su mayor masa e inercia incrementan notablemente la distancia de frenado y la gravedad de cualquier impacto.',
      'Porque sus motores no pueden superar 50 km/h.',
      'Únicamente para evitar multas municipales.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Un vehículo pesado cargado posee mucha mayor energía cinética y requiere distancias de detención considerablemente mayores que un sedán.',
    distractorRationale: {
      A: 'La regulación busca seguridad física, no mayor consumo.',
      B: 'Menor velocidad máxima compensa la mayor masa y menor agilidad de frenado.',
      C: 'Los motores diésel modernos alcanzan altas velocidades si no se regulan.',
      D: 'Responde a leyes físicas de seguridad vial nacional.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 98 y D.E. 23.'
  },
  {
    id: 'vmt-t184',
    category: 'teorico',
    topic: 'Regla de los 3 Segundos — Cómo Medirla',
    question: '¿Cómo se verifica en la práctica la regla de los 3 segundos de distancia respecto al vehículo que circula adelante?',
    statement: '¿Cómo se verifica en la práctica la regla de los 3 segundos de distancia respecto al vehículo que circula adelante?',
    options: [
      'Calculando exactamente 3 metros con la vista.',
      'Tocando el claxon tres veces.',
      'Tomando un punto fijo en la vía; cuando el auto de adelante lo pasa, contar "mil uno, mil dos, mil tres" antes de pasar usted.',
      'Esperando tres minutos en cada semáforo.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Medir en tiempo (3 segundos) mediante un punto de referencia fijo ajusta automáticamente la distancia en metros según la velocidad a la que se circula.',
    distractorRationale: {
      A: 'Tres metros es una distancia insuficiente incluso a 20 km/h.',
      B: 'El claxon no mide intervalos de seguridad.',
      C: 'El conteo temporal adapta el espacio proporcionalmente a la velocidad.',
      D: 'No guarda relación con tiempos de semáforo.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t185',
    category: 'teorico',
    topic: 'Conducción en Humo o Polvo Denso',
    question: 'Si una quema agrícola o tolvanera cubre la carretera con humo denso reduciendo casi a cero la visibilidad, ¿cuál es la acción más segura?',
    statement: 'Si una quema agrícola o tolvanera cubre la carretera con humo denso reduciendo casi a cero la visibilidad, ¿cuál es la acción más segura?',
    options: [
      'Acelerar a fondo con luces altas para atravesar el humo rápido.',
      'Detenerse en medio del carril sin luces.',
      'Circular en reversa por el carril izquierdo.',
      'Reducir la velocidad gradualmente, encender luces bajas/neblineras y, si la visibilidad es nula, apartarse completamente fuera de la calzada con luces de emergencia.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Entrar a ciegas en humo denso a alta velocidad provoca choques múltiples en cadena; detenerse fuera de la calzada con señalización evita impactos traseros.',
    distractorRationale: {
      A: 'Las luces altas rebotan en el humo creando una pared blanca que ciega más.',
      B: 'Detenerse sobre el carril sin luces garantiza ser embestido por detrás.',
      C: 'Retroceder sin visibilidad en carretera agrava el riesgo.',
      D: 'Salir de la calzada a un sitio seguro hasta que se disipe el humo protege de colisiones múltiples.'
    },
    legalReference: 'Manual de Seguridad Vial en Condiciones Adversas VMT.'
  },
  {
    id: 'vmt-t186',
    category: 'teorico',
    topic: 'Luces Negras o Cubiertas Oscuras en Faros',
    question: '¿Está permitido colocar micas oscuras o pintura ahumada sobre los faros delanteros o las luces traseras de freno?',
    statement: '¿Está permitido colocar micas oscuras o pintura ahumada sobre los faros delanteros o las luces traseras de freno?',
    options: [
      'No, está prohibido porque reduce la intensidad luminosa y dificulta que otros conductores perciban el frenado o presencia.',
      'Sí, mejora el aspecto deportivo del vehículo.',
      'Sí, si solo cubre la luz de retroceso.',
      'Sí, únicamente en vehículos de color negro.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Oscurecer faros o stops disminuye drásticamente su visibilidad diurna y nocturna, incrementando el riesgo de choques por alcance.',
    distractorRationale: {
      A: 'La normativa exige que todos los dispositivos luminosos conserven su intensidad y color reglamentarios.',
      B: 'La estética jamás prevalece sobre la visibilidad de seguridad.',
      C: 'La luz blanca de retroceso también es vital para advertir maniobras en parqueos.',
      D: 'La prohibición aplica a todo vehículo sin importar su color.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 40 y Art. 41.'
  },
  {
    id: 'vmt-t187',
    category: 'teorico',
    topic: 'Encandilamiento — Hacia Dónde Mirar',
    question: 'Si de noche un vehículo en sentido contrario no baja sus luces altas y lo deslumbra, ¿hacia dónde debe dirigir brevemente su mirada?',
    statement: 'Si de noche un vehículo en sentido contrario no baja sus luces altas y lo deslumbra, ¿hacia dónde debe dirigir brevemente su mirada?',
    options: [
      'Directamente hacia los faros del otro vehículo.',
      'Hacia la línea blanca o borde derecho de su propio carril, reduciendo la velocidad hasta recuperar visión.',
      'Cerrar ambos ojos durante cinco segundos.',
      'Mirar hacia el espejo retrovisor interior.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Mirar hacia el borde derecho de la calzada evita que la retina se sature con la luz directa y mantiene la referencia lateral del carril.',
    distractorRationale: {
      A: 'Fijar la vista en los faros intensos prolonga la ceguera temporal.',
      B: 'La línea de borde derecho sirve de guía segura mientras pasa el vehículo.',
      C: 'Cerrar los ojos conduciendo deja el vehículo sin control.',
      D: 'Mirar el espejo interior aparta la vista de la trayectoria frontal.'
    },
    legalReference: 'Manual de Conducción Nocturna VMT.'
  },
  {
    id: 'vmt-t188',
    category: 'teorico',
    topic: 'Distancia de Seguridad en Túneles',
    question: 'Al circular dentro de un túnel carretero, ¿qué precauciones de iluminación y distancia son obligatorias?',
    statement: 'Al circular dentro de un túnel carretero, ¿qué precauciones de iluminación y distancia son obligatorias?',
    options: [
      'Apagar las luces y adelantar rápidamente.',
      'Usar luces altas permanentemente.',
      'Encender las luces bajas antes de entrar, quitar lentes de sol, mantener distancia ampliada y no adelantar.',
      'Tocar la bocina durante todo el recorrido.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La transición súbita de luz solar a oscuridad reduce momentáneamente la visión; las luces bajas y mayor distancia previenen choques dentro del túnel.',
    distractorRationale: {
      A: 'Apagar luces y adelantar en túnel es sumamente peligroso.',
      B: 'Las luces altas encandilan en espacios cerrados con paredes reflectivas.',
      C: 'Encender luces bajas y retirar gafas oscuras facilita la adaptación visual inmediata.',
      D: 'El eco de la bocina dentro de un túnel desorienta a otros conductores.'
    },
    legalReference: 'Manual de Seguridad Vial VMT; D.E. 61 Art. 41.'
  },
  {
    id: 'vmt-t189',
    category: 'teorico',
    topic: 'Efecto de la Carga en la Distancia de Frenado',
    question: 'Cuando un vehículo viaja con su máxima carga permitida o cinco ocupantes y equipaje, ¿cómo se comporta su distancia de frenado?',
    statement: 'Cuando un vehículo viaja con su máxima carga permitida o cinco ocupantes y equipaje, ¿cómo se comporta su distancia de frenado?',
    options: [
      'Disminuye porque las llantas pesan más.',
      'Permanece idéntica que yendo vacío.',
      'Se reduce a la mitad.',
      'Aumenta considerablemente debido a la mayor masa e inercia del vehículo.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'A mayor masa total, mayor es la energía cinética que los frenos deben disipar en forma de calor, alargando la distancia de detención.',
    distractorRationale: {
      A: 'La mayor masa exige más trabajo de frenado, nunca menos.',
      B: 'Un vehículo cargado siempre requiere más metros para detenerse.',
      C: 'No se reduce sino que se extiende.',
      D: 'Por ello se debe anticipar el frenado y aumentar la distancia de seguimiento cuando se lleva carga.'
    },
    legalReference: 'Manual Técnico de Conducción VMT.'
  },
  {
    id: 'vmt-t190',
    category: 'teorico',
    topic: 'Luz de Placa Trasera Obligatoria',
    question: '¿Es obligatorio que la placa trasera del vehículo cuente con luz blanca funcional durante la noche?',
    statement: '¿Es obligatorio que la placa trasera del vehículo cuente con luz blanca funcional durante la noche?',
    options: [
      'Sí, para garantizar la identificación del vehículo por autoridades y terceros en horario nocturno.',
      'No, es un accesorio decorativo opcional.',
      'Solo en motocicletas deportivas.',
      'Únicamente cuando el vehículo está estacionado.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Reglamento General de Tránsito exige iluminación blanca exclusiva para la placa posterior, encendida automáticamente con las luces de posición/bajas.',
    distractorRationale: {
      A: 'La legibilidad nocturna de la placa es una exigencia legal de seguridad y control.',
      B: 'Es un requisito técnico reglamentario obligatorio.',
      C: 'Aplica a todos los vehículos automotores registrados.',
      D: 'Debe funcionar durante la circulación nocturna.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 40.'
  },
  {
    id: 'vmt-t191',
    category: 'teorico',
    topic: 'Velocidad en Zonas de Obras Viales',
    question: 'Al ingresar a un tramo señalizado con conos y rótulos naranjas de obras en construcción, ¿qué debe hacer el conductor?',
    statement: 'Al ingresar a un tramo señalizado con conos y rótulos naranjas de obras en construcción, ¿qué debe hacer el conductor?',
    options: [
      'Mantener la velocidad de autopista para no retrasarse.',
      'Reducir progresivamente la velocidad conforme a la señalización temporal, respetar al abanderado y no adelantar.',
      'Rebasar por el área recién asfaltada.',
      'Ignorar los conos si no ve maquinaria.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Las zonas de obras presentan personal a pie, carriles estrechos y desniveles; reducir la velocidad protege la vida de los trabajadores viales.',
    distractorRationale: {
      A: 'Mantener alta velocidad en zona de obras es una de las principales causas de atropello a trabajadores.',
      B: 'Acatar las señales transitorias y al abanderado garantiza la seguridad de todos.',
      C: 'Invadir áreas cerradas daña la obra y expone a zanjas o maquinaria.',
      D: 'Los peligros en obra pueden incluir excavaciones o aceite fresco no visibles de lejos.'
    },
    legalReference: 'Manual SIECA 2025; D.E. 61.'
  },
  {
    id: 'vmt-t192',
    category: 'teorico',
    topic: 'Distancia Mínima de Visibilidad en Curvas Ciegas',
    question: '¿Qué indica la regla de velocidad segura al aproximarse a una curva cerrada o cima de cuesta sin visibilidad?',
    statement: '¿Qué indica la regla de velocidad segura al aproximarse a una curva cerrada o cima de cuesta sin visibilidad?',
    options: [
      'Acelerar antes de la cima para saltar más rápido.',
      'Circular por el centro de la calzada.',
      'Reducir la velocidad antes de llegar al punto ciego para poder detenerse ante cualquier vehículo detenido u obstáculo oculto.',
      'Apagar el motor para ahorrar combustible.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Tras una cima o curva ciega puede encontrarse un vehículo varado, derrumbe o peatón; moderar la marcha antes permite frenar a tiempo.',
    distractorRationale: {
      A: 'Acelerar hacia lo desconocido impide reaccionar si hay un obstáculo detrás.',
      B: 'Invadir el centro expone a choque frontal con quien sube.',
      C: 'La anticipación en puntos ciegos es pilar del manejo defensivo.',
      D: 'Apagar el motor en movimiento anula la dirección asistida y servofreno.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 98 y Art. 99.'
  },
  {
    id: 'vmt-t193',
    category: 'teorico',
    topic: 'Luces Neblineras — Cuándo Usarlas',
    question: '¿Cuál es la función técnica y momento correcto para activar los faros neblineros delanteros?',
    statement: '¿Cuál es la función técnica y momento correcto para activar los faros neblineros delanteros?',
    options: [
      'Sustituir permanentemente a las luces bajas en ciudad despejada.',
      'Deslumbrar a los vehículos lentos en carretera.',
      'Circular sin luces principales de noche.',
      'Complementar las luces bajas en condiciones de neblina densa, lluvia fuerte o humo, iluminando bajo sobre el pavimento sin reflejarse.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Los neblineros proyectan un haz ancho y bajo por debajo de la capa de niebla, mejorando la visión de las líneas del pavimento sin producir reflejo blanco.',
    distractorRationale: {
      A: 'No sustituyen a las luces bajas reglamentarias.',
      B: 'Usar luces intensas para intimidar a otros conductores es imprudente.',
      C: 'Nunca deben usarse como único alumbrado nocturno.',
      D: 'Su posición baja minimiza el rebote luminoso en gotas de niebla.'
    },
    legalReference: 'Manual Técnico de Seguridad Vial VMT.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 5: MANEJO DEFENSIVO Y SITUACIONES CRÍTICAS (+38)
  // ==========================================================================
  {
    id: 'vmt-t194',
    category: 'teorico',
    topic: 'Principio Fundamental del Manejo Defensivo',
    question: '¿En qué consiste esencialmente el concepto de "Manejo Defensivo" aplicado a la conducción diaria?',
    statement: '¿En qué consiste esencialmente el concepto de "Manejo Defensivo" aplicado a la conducción diaria?',
    options: [
      'Conducir anticipando los posibles errores de otros usuarios, condiciones adversas y fallas para evitar siniestros aun teniendo la razón legal.',
      'Conducir siempre a la máxima velocidad permitida.',
      'Exigir el derecho de paso sin ceder jamás.',
      'Frenar bruscamente para asustar a quien se acerque por detrás.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El manejo defensivo prioriza salvar vidas evitando colisiones previsibles, compensando la imprudencia ajena y las condiciones del entorno.',
    distractorRationale: {
      A: 'La anticipación constante permite crear márgenes de tiempo y espacio para evitar choques.',
      B: 'Ir siempre al límite máximo reduce la capacidad de reacción.',
      C: 'Insistir en tener la razón cuando otro viola la ley puede terminar en choque fatal.',
      D: 'Frenar intencionalmente para intimidar ("brake checking") es conducción agresiva peligrosa.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t195',
    category: 'teorico',
    topic: 'Falla Total de Frenos en Descenso',
    question: 'Si los frenos de servicio fallan repentinamente al descender una cuesta, ¿cuál es la secuencia correcta de emergencia?',
    statement: 'Si los frenos de servicio fallan repentinamente al descender una cuesta, ¿cuál es la secuencia correcta de emergencia?',
    options: [
      'Apagar el motor y retirar la llave inmediatamente.',
      'Bombear el pedal si es hidráulico, reducir progresivamente a marchas bajas (compresión), aplicar gradualmente el freno de emergencia y buscar una rampa o roce controlado.',
      'Saltar del vehículo en movimiento.',
      'Poner la transmisión en Neutro.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Nunca se debe apagar el motor (bloquea dirección y servofreno) ni poner Neutro (elimina retención); bajar marchas y usar el freno de estacionamiento gradualmente disipa energía.',
    distractorRationale: {
      A: 'Quitar la llave puede trabar el volante impidiendo maniobrar.',
      B: 'La compresión del motor, el bombeo y la aplicación progresiva del freno de mano permiten recuperar control.',
      C: 'Saltar de un vehículo en marcha suele ser mortal.',
      D: 'Poner Neutro deja el vehículo en caída libre acelerando por gravedad.'
    },
    legalReference: 'Manual de Emergencias Mecánicas en Ruta VMT.'
  },
  {
    id: 'vmt-t196',
    category: 'teorico',
    topic: 'Reventón de Neumático Delantero en Marcha',
    question: 'Si estalla repentinamente un neumático delantero mientras circula a 80 km/h, ¿qué acción es correcta?',
    statement: 'Si estalla repentinamente un neumático delantero mientras circula a 80 km/h, ¿qué acción es correcta?',
    options: [
      'Pisar el pedal de freno a fondo inmediatamente.',
      'Girar bruscamente el volante hacia el lado contrario.',
      'Sujetar el volante firmemente con ambas manos, soltar el acelerador, NO frenar bruscamente y dejar que pierda velocidad hasta orillarse.',
      'Tirar del freno de mano con fuerza.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Frenar violentamente tras un reventón bloquea la dirección y provoca trompo o vuelco; sujetar firme el volante y desacelerar suavemente mantiene la trayectoria.',
    distractorRationale: {
      A: 'Frenar a fondo desequilibra aún más el eje con la llanta destruida.',
      B: 'Los volantazos bruscos desencadenan vuelcos laterales.',
      C: 'Mantener firmeza direccional y frenar suave solo al bajar la velocidad es la maniobra salvavidas.',
      D: 'El freno de mano bloquea el eje trasero pudiendo provocar un trompo.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t197',
    category: 'teorico',
    topic: 'Derrape Trasero (Sobreviraje) — Cómo Corregirlo',
    question: 'Si la parte trasera del vehículo patina hacia la derecha sobre pavimento mojado, ¿hacia dónde debe girar suavemente el volante?',
    statement: 'Si la parte trasera del vehículo patina hacia la derecha sobre pavimento mojado, ¿hacia dónde debe girar suavemente el volante?',
    options: [
      'Hacia la izquierda con fuerza y pisar el freno a fondo.',
      'Soltar el volante por completo.',
      'Acelerar a fondo girando a la izquierda.',
      'Soltar el acelerador, evitar frenar brusco y girar suavemente el volante hacia el mismo lado hacia donde patina la cola (derecha).'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Contravolantear suavemente en la dirección del derrape ("girar hacia donde va la cola") alinea las ruedas delanteras con la trayectoria real para recuperar adherencia.',
    distractorRationale: {
      A: 'Girar al lado opuesto y frenar a fondo agrava el trompo.',
      B: 'Soltar el volante entrega el control total a la inercia.',
      C: 'Acelerar a fondo mantiene la pérdida de tracción.',
      D: 'Alinear suavemente sin bloquear frenos permite que los neumáticos recuperen agarre.'
    },
    legalReference: 'Manual de Control Dinámico Vehicular VMT.'
  },
  {
    id: 'vmt-t198',
    category: 'teorico',
    topic: 'Salida Accidental de Ruedas al Hombro de Tierra',
    question: 'Si las ruedas derechas del vehículo caen accidentalmente fuera del pavimento hacia un hombro de tierra o grava desnivelado, ¿qué debe hacer?',
    statement: 'Si las ruedas derechas del vehículo caen accidentalmente fuera del pavimento hacia un hombro de tierra o grava desnivelado, ¿qué debe hacer?',
    options: [
      'Sujetar firme el volante, soltar el acelerador sin frenar brusco, bajar velocidad y reingresar al asfalto suavemente con un giro leve cuando sea seguro.',
      'Dar un volantazo inmediato hacia la izquierda para volver rápido.',
      'Frenar a fondo sobre la grava.',
      'Acelerar al máximo para subir el borde.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Dar un volantazo inmediato contra el borde del asfalto hace que la llanta "muerda" el escalón y cruce violentamente hacia el carril contrario.',
    distractorRationale: {
      A: 'Bajar la velocidad primero permite superar el desnivel de forma controlada.',
      B: 'El volantazo inmediato suele lanzar el auto de frente al tráfico opuesto o volcarlo.',
      C: 'Frenar a fondo en superficie mixta (asfalto/grava) hace girar el vehículo por fricción desigual.',
      D: 'Acelerar empeora la inestabilidad sobre grava suelta.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t199',
    category: 'teorico',
    topic: 'Puntos Ciegos de Cabezales y Autobuses',
    question: '¿Dónde se ubican los principales puntos ciegos ("zonas sin visión") de un cabezal o autobús largo?',
    statement: '¿Dónde se ubican los principales puntos ciegos ("zonas sin visión") de un cabezal o autobús largo?',
    options: [
      'Únicamente encima del techo.',
      'Justo delante de la cabina baja, inmediatamente detrás del furgón y en ambos costados laterales junto a las puertas y remolque.',
      'No tienen puntos ciegos porque usan espejos grandes.',
      'Solo en la llanta de repuesto.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Pese a los espejos convexos, existen amplias zonas alrededor de un vehículo pesado donde un auto o moto desaparece completamente de la vista del motorista.',
    distractorRationale: {
      A: 'Los puntos ciegos críticos están en los cuatro costados a nivel de calzada.',
      B: 'Si usted no puede ver el rostro del conductor en su espejo lateral, él tampoco puede verlo a usted.',
      C: 'Incluso con espejos múltiples persisten ángulos muertos importantes.',
      D: 'Es una afirmación sin sentido técnico.'
    },
    legalReference: 'Manual de Convivencia con Transporte Pesado VMT.'
  },
  {
    id: 'vmt-t200',
    category: 'teorico',
    topic: 'Abertura Amplia de Camiones al Girar a la Derecha',
    question: 'Al observar que un cabezal con furgón enciende su direccional derecha pero se abre levemente hacia el carril izquierdo antes de girar, ¿qué nunca debe hacer?',
    statement: 'Al observar que un cabezal con furgón enciende su direccional derecha pero se abre levemente hacia el carril izquierdo antes de girar, ¿qué nunca debe hacer?',
    options: [
      'Detenerse detrás del remolque y esperar que complete su giro.',
      'Mantener distancia segura.',
      'Meterse por el espacio derecho entre el camión y la acera, pues el remolque cerrará ese espacio aplastando al vehículo.',
      'Encender la direccional correspondiente si también girará.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Por la geometría de giro ("off-tracking"), el eje trasero del semirremolque recorta hacia adentro y barre completamente el espacio derecho junto a la esquina.',
    distractorRationale: {
      A: 'Esperar detrás es la conducta correcta y segura.',
      B: 'Mantener distancia evita ser atrapado por el barrido del remolque.',
      C: 'Colarse por la derecha junto a un camión que gira es una trampa mortal clásica.',
      D: 'Señalizar correctamente es adecuado tras ceder el giro del camión.'
    },
    legalReference: 'Manual de Transporte Pesado y Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t201',
    category: 'teorico',
    topic: 'Posición Correcta de Manos en el Volante',
    question: 'En vehículos modernos equipados con bolsa de aire (airbag) en el volante, ¿cuál es la posición ergonómica recomendada de las manos?',
    statement: 'En vehículos modernos equipados con bolsa de aire (airbag) en el volante, ¿cuál es la posición ergonómica recomendada de las manos?',
    options: [
      'Con una sola mano en la parte superior ("las 12 en punto").',
      'Con los brazos cruzados sobre el centro del claxon.',
      'Sujetando los rayos interiores con los pulgares hacia adentro.',
      'A las "9 y 3" (o "10 y 2" bajas) en el aro exterior, con los pulgares sobre el aro para evitar lesiones si detona el airbag.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La posición "9 y 3" brinda máximo rango de giro sin soltar el volante y mantiene los brazos fuera de la trayectoria explosiva del airbag central.',
    distractorRationale: {
      A: 'Llevar una mano a las 12 puede proyectar el propio brazo contra el rostro si se activa el airbag.',
      B: 'Cruzar sobre el centro del volante es sumamente peligroso ante una detonación.',
      C: 'Enganchar los pulgares por dentro puede fracturarlos ante un bache o impacto.',
      D: 'La postura simétrica "9 y 3" optimiza precisión y seguridad pasiva.'
    },
    legalReference: 'Manual de Ergonomía y Seguridad Activa VMT.'
  },
  {
    id: 'vmt-t202',
    category: 'teorico',
    topic: 'Vehículo Detenido por Avería en Carretera',
    question: 'Si su vehículo sufre una falla mecánica inmovilizante en carretera, ¿cuál es el protocolo obligatorio de señalización?',
    statement: 'Si su vehículo sufre una falla mecánica inmovilizante en carretera, ¿cuál es el protocolo obligatorio de señalización?',
    options: [
      'Orillarse fuera de la calzada si es posible, encender intermitentes, usar chaleco reflectivo y colocar triángulos reflectivos a distancia segura atrás.',
      'Dejar el vehículo en el carril izquierdo sin señalización.',
      'Colocar ramas verdes a un metro del parachoques.',
      'Quedarse sentado dentro sin luces.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La visibilidad anticipada mediante intermitentes y triángulos reflectivos (30-50 m o más en vías rápidas) previene que otro conductor choque contra el auto varado.',
    distractorRationale: {
      A: 'Despejar la calzada y señalizar con anticipación salva vidas de día y de noche.',
      B: 'Abandonar un vehículo en carril activo sin luces provoca colisiones fatales.',
      C: 'Las ramas secas o verdes no son reflectivas y están prohibidas como sustituto de triángulos.',
      D: 'Permanecer dentro de un auto varado en carril sin señalizar expone a impacto trasero.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 43 y Art. 104.'
  },
  {
    id: 'vmt-t203',
    category: 'teorico',
    topic: 'Incendio Incipiente en el Compartimento del Motor',
    question: 'Si observa humo denso o llamas saliendo debajo del capó del motor, ¿qué acción de seguridad es prioritaria?',
    statement: 'Si observa humo denso o llamas saliendo debajo del capó del motor, ¿qué acción de seguridad es prioritaria?',
    options: [
      'Acelerar para que el viento apague el fuego.',
      'Detenerse, apagar el motor, evacuar inmediatamente a todos los ocupantes lejos del vehículo y llamar a bomberos (no abrir el capó de golpe).',
      'Abrir el capó completamente de par en par mientras el motor sigue encendido.',
      'Echar agua de una botella directamente sobre gasolina en llamas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Abrir de golpe el capó introduce oxígeno súbito generando una llamarada hacia el rostro; lo prioritario es evacuar personas y usar extintor ABC por la rendija si es seguro.',
    distractorRationale: {
      A: 'El flujo de aire alimenta la combustión en lugar de apagarla.',
      B: 'La vida humana es prioritaria; cortar la ignición detiene la bomba de combustible.',
      C: 'Aportar oxígeno masivo al abrir el capó intensifica el incendio.',
      D: 'El agua dispersa el combustible líquido encendido agravando el fuego.'
    },
    legalReference: 'Manual de Emergencias Viales VMT y Cuerpo de Bomberos.'
  },
  {
    id: 'vmt-t204',
    category: 'teorico',
    topic: 'Vehículo Sumergido en Agua',
    question: 'Si por un siniestro un vehículo cae a una corriente de agua profunda o inundación súbita, ¿qué vía de escape debe priorizarse de inmediato?',
    statement: 'Si por un siniestro un vehículo cae a una corriente de agua profunda o inundación súbita, ¿qué vía de escape debe priorizarse de inmediato?',
    options: [
      'Esperar que el vehículo se llene completamente por media hora.',
      'Intentar llamar por teléfono antes de soltarse el cinturón.',
      'Desabrochar el cinturón, bajar o romper una ventanilla lateral inmediatamente antes de que el agua cubra la puerta y salir.',
      'Intentar romper el parabrisas delantero con los pies.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La presión externa del agua impide abrir las puertas y el parabrisas es laminado irrompible; las ventanillas laterales templadas permiten escapar en los primeros segundos.',
    distractorRationale: {
      A: 'Esperar reduce el tiempo útil mientras el vehículo se hunde.',
      B: 'Cada segundo inicial es crítico antes de que fallen los sistemas eléctricos.',
      C: 'Desabrochar, abrir/romper ventanilla lateral y salir de inmediato es el protocolo de supervivencia.',
      D: 'El parabrisas laminado está diseñado para no romperse en fragmentos.'
    },
    legalReference: 'Manual de Supervivencia y Seguridad Vial VMT.'
  },
  {
    id: 'vmt-t205',
    category: 'teorico',
    topic: 'Freno de Motor en Caja Automática',
    question: '¿Cómo se aplica el freno de motor en un vehículo con transmisión automática al descender una pendiente larga como Los Chorros o Planes de Renderos?',
    statement: '¿Cómo se aplica el freno de motor en un vehículo con transmisión automática al descender una pendiente larga como Los Chorros o Planes de Renderos?',
    options: [
      'Colocando la palanca en "N" (Neutro).',
      'Manteniendo la palanca en "D" y pisando el freno continuamente.',
      'Colocando la palanca en "P" (Parking) en movimiento.',
      'Seleccionando los rangos bajos (L, 2, 3 o modo secuencial "- / S") para que el motor retenga el vehículo.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Los rangos bajos en cajas automáticas limitan la subida de marchas y aprovechan la retención del motor para evitar el sobrecalentamiento ("fading") de las pastillas.',
    distractorRationale: {
      A: 'Poner Neutro elimina la retención del motor y sobrecarga los frenos.',
      B: 'Frenar continuamente en "D" recalienta el líquido de frenos hasta hacerlo hervir.',
      C: 'Engranar "P" en movimiento destruye el trinquete de la transmisión.',
      D: 'Usar marchas bajas o modo manual/secuencial protege los frenos en bajadas prolongadas.'
    },
    legalReference: 'Manual Técnico de Conducción en Montaña VMT.'
  },
  {
    id: 'vmt-t206',
    category: 'teorico',
    topic: 'Fatiga de Frenos (Fading) — Causa Principal',
    question: '¿Qué fenómeno técnico ocurre cuando un conductor abusa del pedal de freno durante un descenso prolongado sin usar marchas bajas?',
    statement: '¿Qué fenómeno técnico ocurre cuando un conductor abusa del pedal de freno durante un descenso prolongado sin usar marchas bajas?',
    options: [
      'Sobrecalentamiento extremo de pastillas, discos y líquido de frenos ("fading"), provocando pérdida súbita de capacidad de frenado.',
      'Los neumáticos se inflan solos.',
      'El motor aumenta su potencia.',
      'Las pastillas se enfrían más rápido.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La fricción continua convierte la energía potencial en calor extremo; al hervir el líquido de frenos se forman burbujas de vapor compresibles y el pedal se va al fondo.',
    distractorRationale: {
      A: 'El fading térmico es la causa número uno de accidentes por "quedarse sin frenos" en cuestas.',
      B: 'El calor excesivo puede incluso reventar neumáticos por dilatación, nunca mejorarlos.',
      C: 'No guarda relación con la potencia del motor.',
      D: 'El frenado continuo acumula calor, no lo disipa.'
    },
    legalReference: 'Manual Técnico de Mecánica Preventiva VMT.'
  },
  {
    id: 'vmt-t207',
    category: 'teorico',
    topic: 'Exploración Visual Constante (Escaneo)',
    question: 'En manejo defensivo, ¿por qué se recomienda mirar lejos hacia adelante (12 a 15 segundos de anticipación) y revisar espejos cada 5 a 8 segundos?',
    statement: 'En manejo defensivo, ¿por qué se recomienda mirar lejos hacia adelante (12 a 15 segundos de anticipación) y revisar espejos cada 5 a 8 segundos?',
    options: [
      'Para cansar la vista más rápido.',
      'Para detectar cambios de flujo, peligros y vías de escape con tiempo suficiente para actuar suavemente.',
      'Para ignorar el tablero de instrumentos.',
      'Únicamente para buscar patrullas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Mirar solo el parachoques del auto de adelante obliga a frenazos reactivos; ampliar el horizonte visual permite maniobrar con suavidad y previsión.',
    distractorRationale: {
      A: 'Mover la vista entre horizonte, espejos y tablero evita la hipnosis de carretera.',
      B: 'La anticipación visual de 12-15 segundos multiplica el tiempo disponible de respuesta.',
      C: 'El escaneo incluye chequeos breves al velocímetro y testigos.',
      D: 'Busca proteger contra todo riesgo vial, no solo controles.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t208',
    category: 'teorico',
    topic: 'Viento Lateral Fuerte en Puentes o Carreteras Abiertas',
    question: 'Al salir de un tramo protegido hacia un puente alto o llanura con fuertes ráfagas de viento lateral, ¿qué vehículos son más vulnerables?',
    statement: 'Al salir de un tramo protegido hacia un puente alto o llanura con fuertes ráfagas de viento lateral, ¿qué vehículos son más vulnerables?',
    options: [
      'Solo los vehículos estacionados.',
      'Los automóviles deportivos muy bajos.',
      'Motocicletas, furgones altos, autobuses y vehículos livianos con carga en el techo.',
      'Exclusivamente los tractores de oruga.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La gran superficie lateral de furgones/buses y la ligereza de las motocicletas las hacen susceptibles a desplazamientos súbitos por viento cruzado.',
    distractorRationale: {
      A: 'El riesgo dinámico afecta principalmente a vehículos circulando a velocidad.',
      B: 'Los autos bajos tienen menor área lateral expuesta.',
      C: 'Debe reducirse la velocidad y sujetar firme el volante al cruzar zonas expuestas.',
      D: 'Los tractores de oruga circulan a muy baja velocidad y gran peso.'
    },
    legalReference: 'Manual de Seguridad Vial en Condiciones Adversas VMT.'
  },
  {
    id: 'vmt-t209',
    category: 'teorico',
    topic: 'Efecto Succión al Rebasar Camiones Grandes',
    question: 'Al rebasar en autopista a un tractocamión o autobús a alta velocidad, ¿qué fenómeno aerodinámico debe anticipar el conductor de un auto liviano o moto?',
    statement: 'Al rebasar en autopista a un tractocamión o autobús a alta velocidad, ¿qué fenómeno aerodinámico debe anticipar el conductor de un auto liviano o moto?',
    options: [
      'Un impulso que detiene el motor del automóvil.',
      'Ninguno, el aire no ejerce fuerza sobre vehículos.',
      'Un empuje hacia atrás que apaga las luces.',
      'Turbulencia y una fuerza de succión lateral al pasar junto al costado, seguida de un empuje al superar la cabina.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El volumen desplazado por un vehículo pesado genera zonas de baja y alta presión que tiran lateralmente de autos livianos y motos.',
    distractorRationale: {
      A: 'No apaga el motor.',
      B: 'Las fuerzas aerodinámicas a 80-90 km/h son muy significativas.',
      C: 'No afecta el sistema eléctrico.',
      D: 'Sujetar firme el volante y mantener separación lateral controla fácilmente la turbulencia.'
    },
    legalReference: 'Manual de Conducción en Autopistas VMT.'
  },
  {
    id: 'vmt-t210',
    category: 'teorico',
    topic: 'Uso de Bocina en Manejo Defensivo',
    question: '¿Cuál es el único propósito legítimo de la bocina (claxon) en la conducción defensiva y conforme a ley?',
    statement: '¿Cuál es el único propósito legítimo de la bocina (claxon) en la conducción defensiva y conforme a ley?',
    options: [
      'Advertir brevemente un peligro inminente de colisión cuando otros medios no basten.',
      'Saludar a conocidos desde la calle.',
      'Exigir que avance la fila cuando el semáforo acaba de cambiar hace un segundo.',
      'Llamar a alguien dentro de una vivienda.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La bocina es un dispositivo de advertencia de emergencia; su uso abusivo genera contaminación acústica y estrés agresivo.',
    distractorRationale: {
      A: 'El uso preventivo ante riesgo real evita atropellos o cambios de carril invasivos.',
      B: 'Usar el claxon para saludos está prohibido por el reglamento.',
      C: 'Pitar por impaciencia en semáforos altera el orden y fomenta ira vial.',
      D: 'No debe utilizarse como timbre domiciliario.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 44.'
  },
  {
    id: 'vmt-t211',
    category: 'teorico',
    topic: 'Conducción en Calle Inundada — Riesgo Eléctrico y Mecánico',
    question: 'Si una calle urbana está inundada con agua que supera la mitad de la altura de las ruedas, ¿qué debe hacer el conductor?',
    statement: 'Si una calle urbana está inundada con agua que supera la mitad de la altura de las ruedas, ¿qué debe hacer el conductor?',
    options: [
      'Acelerar a fondo para crear una gran ola.',
      'Evitar cruzarla y buscar una ruta alterna elevada, pues el agua puede apagar el motor (golpe hidráulico) o arrastrar el vehículo.',
      'Apagar el motor en medio del charco profundo.',
      'Cruzar en reversa.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Aspirar agua por la admisión destruye el motor (golpe hidráulico), inutiliza frenos y apenas 30-50 cm de corriente pueden hacer flotar y arrastrar un automóvil.',
    distractorRationale: {
      A: 'Acelerar levanta una ola que inunda la toma de aire del motor.',
      B: 'Nunca debe subestimarse la profundidad ni la fuerza de una corriente urbana.',
      C: 'Apagar el motor en agua profunda permite que entre agua por el escape.',
      D: 'Cruzar en reversa no evita el arrastre ni el ingreso de agua.'
    },
    legalReference: 'Manual de Seguridad Vial en Invierno VMT.'
  },
  {
    id: 'vmt-t212',
    category: 'teorico',
    topic: 'Secado de Frenos Tras Cruzar un Charco Profundo',
    question: 'Después de atravesar inevitablemente un charco de agua profundo, ¿qué prueba mecánica breve debe realizarse al salir a velocidad baja?',
    statement: 'Después de atravesar inevitablemente un charco de agua profundo, ¿qué prueba mecánica breve debe realizarse al salir a velocidad baja?',
    options: [
      'Acelerar inmediatamente a 100 km/h.',
      'Tirar del freno de mano bruscamente.',
      'Presionar suavemente el pedal de freno varias veces mientras avanza despacio para generar fricción y evaporar la humedad de discos y pastillas.',
      'Apagar el motor.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los frenos mojados pierden eficacia temporalmente; aplicar toques suaves a baja velocidad seca las superficies de fricción recuperando la frenada.',
    distractorRationale: {
      A: 'Acelerar con los frenos mojados y sin respuesta es sumamente peligroso.',
      B: 'El freno de mano solo actúa atrás y puede bloquear las ruedas.',
      C: 'El secado progresivo mediante toques suaves restaura el coeficiente de fricción.',
      D: 'Apagar el motor elimina la asistencia de dirección y freno.'
    },
    legalReference: 'Manual Técnico de Manejo en Lluvia VMT.'
  },
  {
    id: 'vmt-t213',
    category: 'teorico',
    topic: 'Efecto del Uso de Auriculares al Conducir',
    question: '¿Por qué es riesgoso y prohibido conducir utilizando audífonos o auriculares en ambos oídos?',
    statement: '¿Por qué es riesgoso y prohibido conducir utilizando audífonos o auriculares en ambos oídos?',
    options: [
      'Porque dañan la pintura del techo.',
      'Porque reducen la presión de las llantas.',
      'Porque consumen gasolina adicional.',
      'Porque aíslan acústicamente al conductor, impidiendo oír sirenas de emergencia, bocinas de advertencia o fallas mecánicas.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La audición aporta alertas tempranas vitales en el tránsito (ambulancias, trenes, claxon, motocicletas); bloquearla compromete la conciencia situacional.',
    distractorRationale: {
      A: 'No tienen efecto físico sobre la carrocería.',
      B: 'No influyen en los neumáticos.',
      C: 'No alteran el consumo de combustible.',
      D: 'El D.E. 61 prohíbe dispositivos que impidan percibir señales acústicas externas.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 117.'
  },
  {
    id: 'vmt-t214',
    category: 'teorico',
    topic: 'Objetos Sueltos Dentro de la Cabina',
    question: '¿Qué peligro representa llevar botellas, herramientas u objetos pesados sueltos sobre la bandeja trasera o en el piso del conductor?',
    statement: '¿Qué peligro representa llevar botellas, herramientas u objetos pesados sueltos sobre la bandeja trasera o en el piso del conductor?',
    options: [
      'Pueden rodar bajo los pedales bloqueando el freno, o convertirse en proyectiles mortales en una frenada o choque.',
      'Mejoran la estabilidad del vehículo.',
      'Solo ensucian las alfombras.',
      'No representan ningún peligro.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Una botella bajo el pedal de freno impide detener el auto, y un objeto de 1 kg suelto a 60 km/h multiplica su fuerza de impacto varias decenas de veces en un choque.',
    distractorRationale: {
      A: 'Todo objeto debe ir asegurado en el baúl o compartimentos cerrados.',
      B: 'Objetos sueltos jamás mejoran la estabilidad.',
      C: 'El riesgo es mecánico y balístico, no meramente de limpieza.',
      D: 'El efecto proyectil es una causa documentada de lesiones graves en cabina.'
    },
    legalReference: 'Manual de Seguridad Interior VMT.'
  },
  {
    id: 'vmt-t215',
    category: 'teorico',
    topic: 'Conducción en Carreteras de Tierra o Balasto',
    question: 'Al transitar por caminos rurales de tierra suelta o balasto, ¿por qué debe aumentarse la distancia de seguimiento y evitar giros bruscos?',
    statement: 'Al transitar por caminos rurales de tierra suelta o balasto, ¿por qué debe aumentarse la distancia de seguimiento y evitar giros bruscos?',
    options: [
      'Para disfrutar del paisaje.',
      'Porque el polvo reduce la visibilidad, las piedras sueltas actúan como rodamientos disminuyendo la tracción y la frenada se alarga.',
      'Porque el asfalto caliente derrite la grava.',
      'Para gastar menos frenos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La grava suelta ofrece mucha menor fricción que el pavimento seco y las nubes de polvo ocultan baches y vehículos en sentido opuesto.',
    distractorRationale: {
      A: 'La razón es física y de visibilidad, no recreativa.',
      B: 'Menor adherencia exige mayor distancia, menor velocidad y maniobras suaves.',
      C: 'No hay asfalto en caminos de tierra.',
      D: 'Busca evitar derrapes y colisiones.'
    },
    legalReference: 'Manual de Conducción Rural VMT.'
  },
  {
    id: 'vmt-t216',
    category: 'teorico',
    topic: 'Vehículo en Sentido Contrario Invadiendo Su Carril',
    question: 'Si un vehículo en sentido contrario invade su carril repentinamente durante un rebase imprudente, ¿hacia qué lado debe intentar evadirlo?',
    statement: 'Si un vehículo en sentido contrario invade su carril repentinamente durante un rebase imprudente, ¿hacia qué lado debe intentar evadirlo?',
    options: [
      'Hacia la izquierda (invadiendo el otro carril).',
      'Acelerando de frente para intimidarlo.',
      'Frenar con firmeza y maniobrar hacia su derecha (hombro derecho), tocando bocina y haciendo cambio de luces.',
      'Soltar el volante y taparse los ojos.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Evadir hacia la izquierda suele coincidir con la reacción instintiva del infractor de volver a su carril; escapar hacia la derecha reduce la probabilidad de choque frontal.',
    distractorRationale: {
      A: 'Cruzar al carril contrario provoca el choque si el otro conductor regresa a su derecha.',
      B: 'Acelerar de frente aumenta la energía del impacto.',
      C: 'Desacelerar y buscar el hombro derecho maximiza la probabilidad de evasión.',
      D: 'Perder el control del volante agrava la colisión.'
    },
    legalReference: 'Manual de Maniobras Evasivas VMT.'
  },
  {
    id: 'vmt-t217',
    category: 'teorico',
    topic: 'Verificación 360° Antes de Retroceder',
    question: 'Antes de iniciar cualquier maniobra en reversa (salir de parqueo o cochera), ¿qué debe hacer el conductor?',
    statement: 'Antes de iniciar cualquier maniobra en reversa (salir de parqueo o cochera), ¿qué debe hacer el conductor?',
    options: [
      'Confiar únicamente en la cámara de reversa sin mirar.',
      'Retroceder rápidamente para terminar pronto.',
      'Tocar la bocina y acelerar sin mirar atrás.',
      'Verificar todo el perímetro (niños, mascotas, obstáculos bajos), usar espejos y girar la vista hacia atrás avanzando lentamente.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Las cámaras y espejos tienen ángulos muertos justo detrás del parachoques; rodear el vehículo antes de subir y mirar directamente atrás previene atropellos infantiles.',
    distractorRationale: {
      A: 'Las cámaras pueden ensuciarse o tener retraso y no cubren los laterales amplios.',
      B: 'La reversa rápida impide reaccionar si aparece un peatón.',
      C: 'La bocina no sustituye la verificación visual.',
      D: 'La inspección previa y movimiento lento son esenciales.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-t218',
    category: 'teorico',
    topic: 'Riesgo de Circular en Punto Ciego Lateral',
    question: 'Cuando usted circula en autopista junto a la puerta trasera de otro automóvil o camión por tiempo prolongado, ¿qué riesgo asume?',
    statement: 'Cuando usted circula en autopista junto a la puerta trasera de otro automóvil o camión por tiempo prolongado, ¿qué riesgo asume?',
    options: [
      'Que el otro conductor cambie de carril hacia usted por no verlo en su espejo lateral.',
      'Que su motor consuma más aceite.',
      'Que las llantas pierdan aire.',
      'Ninguno si ambos van a la misma velocidad.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Permanecer en el punto ciego ajeno es peligroso; debe acelerarse brevemente para pasar o reducir levemente para quedar visible detrás.',
    distractorRationale: {
      A: 'Salir rápidamente de los puntos ciegos ajenos evita roces y cierres de carril.',
      B: 'No afecta el consumo de aceite.',
      C: 'No altera la presión de neumáticos.',
      D: 'Ir a la misma velocidad dentro del punto ciego prolonga la invisibilidad.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t219',
    category: 'teorico',
    topic: 'Distancia de Seguridad al Detenerse en Semáforo',
    question: 'Al detenerse detrás de otro vehículo en un semáforo o embotellamiento, ¿qué referencia visual indica una distancia mínima segura?',
    statement: 'Al detenerse detrás de otro vehículo en un semáforo o embotellamiento, ¿qué referencia visual indica una distancia mínima segura?',
    options: [
      'Quedar a cinco centímetros del parachoques trasero.',
      'Poder ver todavía las llantas traseras del vehículo de adelante tocando el pavimento desde su asiento.',
      'No poder ver ni siquiera la placa trasera del auto de adelante.',
      'Dejar cincuenta metros de espacio en zona urbana.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Ver las llantas traseras en contacto con el asfalto deja margen suficiente para maniobrar si el auto delantero se avería, retrocede en cuesta o alguien nos empuja por detrás.',
    distractorRationale: {
      A: 'Pegarse a cinco centímetros impide esquivar si el de adelante falla en arrancar.',
      B: 'Esta regla práctica asegura espacio de escape y amortiguación.',
      C: 'Estar demasiado cerca bloquea la salida de emergencia.',
      D: 'Cincuenta metros en semáforo urbano desperdicia espacio y bloquea intersecciones previas.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t220',
    category: 'teorico',
    topic: 'Conducción con Vía Libre Después de Luz Roja (Pausa de Seguridad)',
    question: 'Cuando el semáforo cambia de rojo a verde a su favor, ¿qué hábito defensivo debe aplicarse antes de arrancar?',
    statement: 'Cuando el semáforo cambia de rojo a verde a su favor, ¿qué hábito defensivo debe aplicarse antes de arrancar?',
    options: [
      'Acelerar al máximo en el primer milisegundo.',
      'Cerrar los ojos y avanzar.',
      'Hacer una breve pausa de 1 a 2 segundos mirando a izquierda y derecha para verificar que ningún infractor transversal cruce en rojo.',
      'Tocar la bocina al vehículo de adelante.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Muchos choques laterales graves ocurren en los primeros segundos del cambio de luz porque conductores transversales aceleran para "ganarle al amarillo/rojo".',
    distractorRationale: {
      A: 'Arrancar ciegamente expone al vehículo a un impacto lateral en el cruce.',
      B: 'Obviamente peligroso.',
      C: 'La mirada rápida izquierda-derecha-izquierda antes de entrar al cruce salva vidas.',
      D: 'Apurar con bocina al vehículo delantero puede empujarlo hacia un infractor.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t221',
    category: 'teorico',
    topic: 'Prevención de Colisiones en Intersecciones con Vehículos Estacionados',
    question: 'Al circular por una calle estrecha flanqueada por vehículos estacionados a ambos lados, ¿qué peligro latente debe anticipar?',
    statement: 'Al circular por una calle estrecha flanqueada por vehículos estacionados a ambos lados, ¿qué peligro latente debe anticipar?',
    options: [
      'Que el pavimento desaparezca.',
      'Que las señales cambien de color.',
      'Que los semáforos se apaguen.',
      'Apertura repentina de puertas, peatones o niños saliendo entre autos y vehículos incorporándose sin mirar.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Las filas de autos estacionados ocultan peatones y anticipan salidas súbitas; debe bajarse la velocidad y observar ruedas giradas o conductores dentro de cabinas.',
    distractorRationale: {
      A: 'No guarda relación con riesgos dinámicos de tráfico.',
      B: 'Las señales fijas no cambian de color.',
      C: 'Es un riesgo ajeno a autos estacionados.',
      D: 'Vigilar luces de retroceso, humo de escape y ruedas delanteras giradas anticipa salidas.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t222',
    category: 'teorico',
    topic: 'Consecuencia de Frenar en Curva',
    question: '¿Por qué es técnicamente desaconsejable frenar con fuerza cuando el vehículo ya se encuentra inclinado dentro de una curva rápida?',
    statement: '¿Por qué es técnicamente desaconsejable frenar con fuerza cuando el vehículo ya se encuentra inclinado dentro de una curva rápida?',
    options: [
      'Porque los neumáticos dividen su adherencia entre el giro lateral y el frenado, aumentando el riesgo de derrape o salida de vía.',
      'Porque el motor se acelera solo.',
      'Porque las luces delanteras se apagan.',
      'Porque mejora demasiado el agarre.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Cada neumático tiene un límite total de fricción ("círculo de tracción"); exigir frenado fuerte mientras ya está doblando supera ese límite y provoca patinaje.',
    distractorRationale: {
      A: 'La regla técnica correcta es frenar antes de entrar a la curva con las ruedas rectas.',
      B: 'Frenar no acelera el motor.',
      C: 'No apaga las luces.',
      D: 'Frenar brusco en curva reduce la estabilidad lateral.'
    },
    legalReference: 'Manual Técnico de Conducción VMT.'
  },
  {
    id: 'vmt-t223',
    category: 'teorico',
    topic: 'Uso de Luces Intermitentes ante Retención Súbita en Autopista',
    question: 'Si usted circula por una autopista rápida y observa adelante una fila de vehículos detenidos repentinamente, ¿qué debe hacer además de frenar con tiempo?',
    statement: 'Si usted circula por una autopista rápida y observa adelante una fila de vehículos detenidos repentinamente, ¿qué debe hacer además de frenar con tiempo?',
    options: [
      'Apagar todas las luces.',
      'Activar brevemente las luces intermitentes de emergencia y mirar el retrovisor para alertar al tránsito trasero y evitar ser chocado por detrás.',
      'Acelerar hacia el hombro derecho sin frenar.',
      'Cambiar de carril sin señalizar.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Encender las intermitentes ante una retención inesperada advierte a distancia a quienes vienen detrás a alta velocidad que el tráfico está detenido.',
    distractorRationale: {
      A: 'Apagar luces vuelve invisible el vehículo.',
      B: 'Alertar temprano previene choques múltiples por alcance.',
      C: 'El hombro puede tener vehículos varados o peatones.',
      D: 'Cambiar sin mirar ni señalizar causa colisiones laterales.'
    },
    legalReference: 'Manual de Seguridad en Autopistas VMT.'
  },
  {
    id: 'vmt-t224',
    category: 'teorico',
    topic: 'Desprendimiento de Carga de Otro Vehículo',
    question: 'Si detecta que un camión delante suyo lleva carga mal sujeta o sacos tambaleándose, ¿cuál es la acción defensiva inmediata?',
    statement: 'Si detecta que un camión delante suyo lleva carga mal sujeta o sacos tambaleándose, ¿cuál es la acción defensiva inmediata?',
    options: [
      'Pegarse lo más cerca posible detrás para avisarle.',
      'Circular justo a su costado por varios kilómetros.',
      'Aumentar considerablemente la distancia de seguimiento y, si es seguro, adelantarlo con rapidez o cambiar de ruta.',
      'Acelerar por debajo del remolque.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Cualquier objeto pesado que caiga a 70 km/h rebota violentamente sobre la calzada; mantener distancia amplia protege de impactos directos.',
    distractorRationale: {
      A: 'Ir pegado detrás coloca el vehículo en la zona directa de caída.',
      B: 'Circular al costado expone a caída lateral de carga.',
      C: 'Alejarse de la zona de riesgo es la respuesta defensiva correcta.',
      D: 'Pasar debajo de un remolque es físicamente letal.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t225',
    category: 'teorico',
    topic: 'Motociclistas — Superficies Metálicas y Pintura Vial Mojada',
    question: '¿Por qué un motociclista debe extremar precauciones sobre tapas de alcantarilla metálicas, rieles o pasos cebra pintados cuando está lloviendo?',
    statement: '¿Por qué un motociclista debe extremar precauciones sobre tapas de alcantarilla metálicas, rieles o pasos cebra pintados cuando está lloviendo?',
    options: [
      'Porque el metal y la pintura espesa ofrecen más agarre que el asfalto.',
      'Porque dañan el espejo retrovisor.',
      'Porque el agua se evapora más rápido ahí.',
      'Porque el metal y la pintura húmeda se vuelven extremadamente resbaladizos, pudiendo causar la caída inmediata de la moto.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Con solo dos puntos de contacto con el suelo, perder tracción delantera o trasera sobre metal o pintura mojada provoca caídas instantáneas.',
    distractorRationale: {
      A: 'Ofrecen mucha menor fricción que el asfalto rugoso.',
      B: 'No guardan relación con espejos.',
      C: 'El agua forma película deslizante sobre superficies lisas no porosas.',
      D: 'Debe cruzarse perpendicularmente, sin inclinar la moto ni frenar brusco encima.'
    },
    legalReference: 'Manual de Conducción Segura de Motocicletas VMT.'
  },
  {
    id: 'vmt-t226',
    category: 'teorico',
    topic: 'Motocicletas — Uso de Ambos Frenos',
    question: 'En una motocicleta convencional, ¿qué porcentaje aproximado de la capacidad total de frenado recae sobre el freno delantero en pavimento seco?',
    statement: 'En una motocicleta convencional, ¿qué porcentaje aproximado de la capacidad total de frenado recae sobre el freno delantero en pavimento seco?',
    options: [
      'Alrededor del 70% de la fuerza de frenado, aplicado progresivamente junto con el freno trasero.',
      'El 0%, nunca debe usarse el freno delantero.',
      'El 100% únicamente con el freno trasero.',
      'El 5%.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Al frenar, el peso se transfiere hacia la rueda delantera aumentando su agarre; usar ambos frenos de forma progresiva logra la detención más corta y estable.',
    distractorRationale: {
      A: 'La transferencia de masa hace al freno delantero el más efectivo, combinado con el trasero.',
      B: 'Usar solo el trasero alarga enormemente la frenada y bloquea la llanta posterior.',
      C: 'El freno trasero solo aporta alrededor del 30% en seco.',
      D: 'Es un porcentaje irreal.'
    },
    legalReference: 'Manual de Conducción Segura de Motocicletas VMT.'
  },
  {
    id: 'vmt-t227',
    category: 'teorico',
    topic: 'Motocicletas — Ropa Protectora y Visibilidad',
    question: 'Además del casco certificado, ¿qué indumentaria reduce significativamente lesiones en caso de caída de motocicleta?',
    statement: 'Además del casco certificado, ¿qué indumentaria reduce significativamente lesiones en caso de caída de motocicleta?',
    options: [
      'Sandalias abiertas y camiseta sin mangas.',
      'Chaqueta resistente con protecciones, guantes, pantalón largo grueso, calzado cerrado que cubra el tobillo y elementos reflectivos.',
      'Únicamente gorra de tela.',
      'Ropa totalmente negra de noche sin reflectivos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'En una caída, la abrasión contra el asfalto y los golpes en extremidades se reducen drásticamente con equipo protector y alta visibilidad.',
    distractorRationale: {
      A: 'El calzado abierto y piel expuesta sufren abrasiones severas incluso a baja velocidad.',
      B: 'La protección integral y los chalecos/elementos reflectivos salvan extremidades y aumentan visibilidad.',
      C: 'Una gorra no ofrece ninguna protección contra impactos.',
      D: 'La ropa oscura sin reflectivos vuelve casi invisible al motociclista de noche.'
    },
    legalReference: 'Manual de Seguridad para Motociclistas VMT.'
  },
  {
    id: 'vmt-t228',
    category: 'teorico',
    topic: 'Distancia de Frenado en Pavimento Mojado',
    question: 'Respecto al pavimento seco, ¿cuánto puede llegar a aumentar la distancia de frenado sobre una calzada mojada?',
    statement: 'Respecto al pavimento seco, ¿cuánto puede llegar a aumentar la distancia de frenado sobre una calzada mojada?',
    options: [
      'Disminuye un 20%.',
      'Permanece exactamente igual.',
      'Puede duplicarse o más, dependiendo del desgaste de los neumáticos y la velocidad.',
      'Aumenta solo 10 centímetros.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La reducción del coeficiente de fricción por agua exige duplicar la distancia de seguimiento (de 3 a 6 segundos) para compensar el mayor recorrido de frenado.',
    distractorRationale: {
      A: 'El agua nunca acorta la distancia de frenado.',
      B: 'La humedad siempre reduce el agarre del caucho.',
      C: 'Duplicar el margen de seguimiento en lluvia es regla fundamental de manejo defensivo.',
      D: 'El incremento es de varios metros, no centímetros.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-t229',
    category: 'teorico',
    topic: 'Peligro de Remolcar con Cuerda Corta Sin Barra',
    question: '¿Por qué es peligroso remolcar un vehículo averiado usando únicamente un lazo o cuerda corta en vías públicas rápidas?',
    statement: '¿Por qué es peligroso remolcar un vehículo averiado usando únicamente un lazo o cuerda corta en vías públicas rápidas?',
    options: [
      'Porque el vehículo remolcado va más rápido que el delantero.',
      'Porque ahorra demasiado combustible.',
      'No es peligroso en autopistas.',
      'Porque el vehículo remolcado puede carecer de servofreno y dirección asistida, arriesgando chocar al vehículo tractor o romper la cuerda.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Con el motor apagado, el pedal de freno se vuelve muy duro y la dirección pesada; debe utilizarse grúa autorizada o barra rígida señalizada a baja velocidad.',
    distractorRationale: {
      A: 'El problema es la falta de frenado independiente y tirones bruscos.',
      B: 'No guarda relación con ahorro.',
      C: 'Remolcar con cuerda en vías rápidas está prohibido por alto riesgo de ruptura y colisión.',
      D: 'La pérdida de asistencia hidráulica hace muy difícil frenar el auto remolcado.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 104.'
  },
  {
    id: 'vmt-t230',
    category: 'teorico',
    topic: 'Conducción en Zonas de Neblina — Referencia Visual',
    question: 'Al conducir en una carretera de montaña cubierta por neblina densa (como el Volcán de San Salvador o Cerro Verde), ¿qué guía visual es más útil?',
    statement: 'Al conducir en una carretera de montaña cubierta por neblina densa (como el Volcán de San Salvador o Cerro Verde), ¿qué guía visual es más útil?',
    options: [
      'La línea blanca del borde derecho de la calzada y los ojos de gato reflectivos, circulando a baja velocidad con luces bajas y neblineras.',
      'Las luces altas encendidas al máximo.',
      'El centro del carril contrario.',
      'Apagar las luces para ver las estrellas.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Seguir la línea de borde derecho evita invadir el carril opuesto o salirse del camino cuando la visibilidad frontal es mínima.',
    distractorRationale: {
      A: 'Los demarcadores reflectivos de borde derecho guían la trayectoria de forma segura.',
      B: 'Las luces altas se reflejan en las gotas de niebla cegando al conductor.',
      C: 'Invadir el carril contrario en niebla provoca choques frontales.',
      D: 'Circular sin luces vuelve invisible el vehículo para los demás.'
    },
    legalReference: 'Manual de Conducción en Condiciones Adversas VMT.'
  },
  {
    id: 'vmt-t231',
    category: 'teorico',
    topic: 'Distancia Segura Alrededor de Zonas Escolares y Parques',
    question: 'Al pasar junto a un autobús de transporte escolar o público detenido bajando pasajeros, ¿qué peligro inmediato debe prever?',
    statement: 'Al pasar junto a un autobús de transporte escolar o público detenido bajando pasajeros, ¿qué peligro inmediato debe prever?',
    options: [
      'Que el autobús acelere hacia atrás.',
      'Que peatones o niños crucen repentinamente justo por delante o por detrás del autobús sin ver el tránsito.',
      'Que el pavimento se levante.',
      'Ninguno si lleva las ventanas cerradas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La carrocería del autobús crea un muro visual total entre usted y los peatones que descienden; debe bajarse la velocidad al mínimo y estar listo para frenar.',
    distractorRationale: {
      A: 'El riesgo principal es el cruce imprevisto de peatones ocultos por el bus.',
      B: 'Muchos atropellos graves ocurren cuando alguien cruza delante de un bus detenido.',
      C: 'No tiene relación física.',
      D: 'Las ventanas cerradas del auto no protegen a los peatones externos.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 6: SEGURIDAD ACTIVA Y PASIVA VEHICULAR (+29)
  // ==========================================================================
  {
    id: 'vmt-t232',
    category: 'teorico',
    topic: 'Diferencia Entre Seguridad Activa y Pasiva',
    question: '¿Qué distingue a los sistemas de seguridad activa de los de seguridad pasiva en un vehículo?',
    statement: '¿Qué distingue a los sistemas de seguridad activa de los de seguridad pasiva en un vehículo?',
    options: [
      'La seguridad activa actúa para evitar que ocurra el accidente (frenos, llantas, dirección, luces), mientras la pasiva mitiga lesiones cuando el choque ya ocurre (cinturón, airbag).',
      'La seguridad activa solo funciona con el auto estacionado.',
      'La seguridad pasiva evita los pinchazos de llantas.',
      'No existe diferencia técnica entre ambos conceptos.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Los elementos activos previenen la colisión manteniendo control y visibilidad; los pasivos protegen a los ocupantes durante el impacto.',
    distractorRationale: {
      A: 'Distinguir prevención (activa) de protección ante impacto (pasiva) es clave en ingeniería vial.',
      B: 'Los sistemas activos operan continuamente durante la marcha.',
      C: 'Los pinchazos se previenen con inspección de neumáticos (activa).',
      D: 'Cumplen funciones complementarias pero claramente diferenciadas.'
    },
    legalReference: 'Manual Técnico de Seguridad Vehicular VMT.'
  },
  {
    id: 'vmt-t233',
    category: 'teorico',
    topic: 'Control Electrónico de Estabilidad (ESC)',
    question: '¿Cuál es la función principal del sistema de Control Electrónico de Estabilidad (ESC / ESP) en un automóvil?',
    statement: '¿Cuál es la función principal del sistema de Control Electrónico de Estabilidad (ESC / ESP) en un automóvil?',
    options: [
      'Aumentar la velocidad máxima del motor.',
      'Detectar pérdida de trayectoria o derrape y frenar selectivamente ruedas individuales para ayudar a mantener el rumbo.',
      'Inflar automáticamente los neumáticos en marcha.',
      'Sustituir el uso del cinturón de seguridad.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El ESC compara el ángulo del volante con el giro real del vehículo y corrige subvirajes o sobrevirajes mediante frenado selectivo de ruedas.',
    distractorRationale: {
      A: 'El ESC gestiona estabilidad lateral, no potencia máxima.',
      B: 'Es uno de los sistemas de seguridad activa más efectivos contra derrapes.',
      C: 'No infla llantas; eso corresponde a sistemas de inflado centralizado.',
      D: 'Ningún sistema electrónico sustituye al cinturón.'
    },
    legalReference: 'Manual Técnico de Seguridad Activa VMT.'
  },
  {
    id: 'vmt-t234',
    category: 'teorico',
    topic: 'Presión Incorrecta de Neumáticos — Desgaste y Riesgo',
    question: '¿Qué consecuencia produce circular con neumáticos con presión de aire muy por debajo de la recomendada por el fabricante?',
    statement: '¿Qué consecuencia produce circular con neumáticos con presión de aire muy por debajo de la recomendada por el fabricante?',
    options: [
      'Ahorra combustible y enfría las llantas.',
      'Mejora la precisión en curvas rápidas.',
      'Sobrecalienta los flancos del neumático aumentando el riesgo de reventón, desgasta los bordes y alarga la distancia de frenado.',
      'Reduce el ruido de rodadura sin afectar seguridad.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Una llanta baja se flexiona excesivamente en cada giro generando calor extremo que puede desprender la banda de rodamiento o estallar en carretera.',
    distractorRationale: {
      A: 'La baja presión aumenta la resistencia a la rodadura y el consumo de combustible.',
      B: 'Genera deriva lateral y dirección imprecisa en curvas.',
      C: 'Mantener la presión indicada en frío evita reventones y desgaste prematuro.',
      D: 'Compromete gravemente la estabilidad y el drenaje de agua.'
    },
    legalReference: 'Manual de Mantenimiento Preventivo VMT.'
  },
  {
    id: 'vmt-t235',
    category: 'teorico',
    topic: 'Momento Correcto Para Medir Presión de Llantas',
    question: '¿Cuándo debe verificarse la presión de aire de los neumáticos para obtener una lectura exacta?',
    statement: '¿Cuándo debe verificarse la presión de aire de los neumáticos para obtener una lectura exacta?',
    options: [
      'Inmediatamente después de recorrer 100 km en autopista a 90 km/h.',
      'Únicamente una vez al año.',
      'Cuando el vehículo está cargado con sobrepeso.',
      'En frío (antes de circular o tras reposo), conforme a la etiqueta del fabricante en el marco de la puerta.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El rodaje calienta el aire interno elevando temporalmente la presión (PSI); medir en frío garantiza el valor real especificado.',
    distractorRationale: {
      A: 'Medir en caliente da lecturas falsamente altas; si se desinfla en caliente quedará baja al enfriarse.',
      B: 'La presión debe revisarse al menos cada 15 días y antes de viajes largos.',
      C: 'La carga no sustituye la medición en frío.',
      D: 'La calcomanía del marco de puerta o manual indica los PSI en frío.'
    },
    legalReference: 'Manual Técnico de Mantenimiento VMT.'
  },
  {
    id: 'vmt-t236',
    category: 'teorico',
    topic: 'Testigo Rojo de Presión de Aceite en Tablero',
    question: 'Si durante la marcha se enciende la luz testigo roja de presión de aceite en el tablero, ¿qué debe hacer de inmediato?',
    statement: 'Si durante la marcha se enciende la luz testigo roja de presión de aceite en el tablero, ¿qué debe hacer de inmediato?',
    options: [
      'Detenerse en un lugar seguro lo antes posible y apagar el motor para evitar una falla o agarrotamiento grave.',
      'Continuar conduciendo otros 50 kilómetros hasta llegar a casa.',
      'Acelerar al máximo para que suba la presión.',
      'Ignorarla si el radio sigue funcionando.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Los testigos rojos indican peligro mecánico o de seguridad inmediato; circular sin presión de aceite destruye el motor en minutos y puede bloquear las ruedas.',
    distractorRationale: {
      A: 'Apagar el motor de forma segura protege la integridad mecánica y previene varamientos peligrosos.',
      B: 'Seguir circulando sin lubricación funde el motor en pocos kilómetros.',
      C: 'Acelerar sin aceite acelera el daño destructivo.',
      D: 'El sistema de audio es independiente del circuito de lubricación.'
    },
    legalReference: 'Manual de Inspección y Tablero VMT.'
  },
  {
    id: 'vmt-t237',
    category: 'teorico',
    topic: 'Testigo de Frenos / Nivel Bajo de Líquido',
    question: 'Si el testigo rojo de frenos permanece encendido en el tablero después de haber soltado completamente el freno de estacionamiento, ¿qué indica?',
    statement: 'Si el testigo rojo de frenos permanece encendido en el tablero después de haber soltado completamente el freno de estacionamiento, ¿qué indica?',
    options: [
      'Que las pastillas están nuevas.',
      'Una posible fuga, nivel crítico bajo de líquido de frenos o falla del sistema, exigiendo revisión inmediata antes de circular.',
      'Que el aire acondicionado está encendido.',
      'Que el tanque de gasolina está lleno.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Un testigo rojo de frenos encendido en marcha alerta pérdida de presión hidráulica o desgaste extremo de pastillas; conducir así arriesga quedarse sin frenos.',
    distractorRationale: {
      A: 'Las pastillas nuevas no encienden testigos de alerta.',
      B: 'Debe revisarse el depósito y buscar fugas antes de continuar el viaje.',
      C: 'No guarda relación con la climatización.',
      D: 'No indica nivel de combustible.'
    },
    legalReference: 'Manual Técnico de Seguridad Activa VMT.'
  },
  {
    id: 'vmt-t238',
    category: 'teorico',
    topic: 'Colocación Correcta del Cinturón de Seguridad',
    question: '¿Cómo debe quedar ajustada la banda inferior (pélvica) del cinturón de seguridad para evitar lesiones abdominales internas en un choque?',
    statement: '¿Cómo debe quedar ajustada la banda inferior (pélvica) del cinturón de seguridad para evitar lesiones abdominales internas en un choque?',
    options: [
      'Directamente sobre el estómago blando.',
      'Debajo de los muslos.',
      'Ceñida y baja sobre los huesos de la cadera/pelvis, y la banda diagonal sobre la clavícula y centro del pecho.',
      'Pasando por detrás de la espalda.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La pelvis y la clavícula soportan las fuerzas de deceleración sin lesionar órganos internos ni el cuello.',
    distractorRationale: {
      A: 'Colocarla sobre el abdomen blando puede causar hemorragias internas graves en un impacto.',
      B: 'Por debajo de los muslos no retiene el cuerpo.',
      C: 'El ajuste sobre cadera y clavícula distribuye la energía sobre estructura ósea.',
      D: 'Pasar el cinturón por detrás anula totalmente su protección.'
    },
    legalReference: 'Manual de Seguridad Pasiva VMT; D.E. 61 Art. 39.'
  },
  {
    id: 'vmt-t239',
    category: 'teorico',
    topic: 'Cinturón de Seguridad en Embarazadas',
    question: '¿Cómo debe utilizar el cinturón de seguridad de tres puntos una mujer embarazada?',
    statement: '¿Cómo debe utilizar el cinturón de seguridad de tres puntos una mujer embarazada?',
    options: [
      'No debe usar cinturón de seguridad nunca.',
      'Pasando la banda inferior por encima del centro del abdomen.',
      'Usando solo la banda diagonal y soltando la pélvica.',
      'Colocando la banda inferior lo más abajo posible sobre la pelvis (debajo del abdomen) y la diagonal entre los senos sin rozar el cuello.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El cinturón bien posicionado debajo del vientre protege tanto a la madre como al feto; no usarlo multiplica el riesgo fatal en colisiones.',
    distractorRationale: {
      A: 'Viajar sin cinturón expone a madre y bebé a golpear el tablero o parabrisas.',
      B: 'La presión directa sobre el útero en un choque es sumamente peligrosa.',
      C: 'Usar solo una banda no retiene adecuadamente el cuerpo.',
      D: 'Esta postura protege la estructura ósea pélvica sin comprimir el abdomen.'
    },
    legalReference: 'Manual de Seguridad Vial VMT y OMS/OPS.'
  },
  {
    id: 'vmt-t240',
    category: 'teorico',
    topic: 'Distancia Mínima al Volante por Airbag',
    question: '¿A qué distancia mínima aproximada debe quedar el pecho del conductor respecto al centro del volante con airbag?',
    statement: '¿A qué distancia mínima aproximada debe quedar el pecho del conductor respecto al centro del volante con airbag?',
    options: [
      'Al menos 25 centímetros (alcanzando el aro con brazos ligeramente flexionados).',
      'A menos de 5 centímetros.',
      'Pegado al volante.',
      'A más de un metro con brazos totalmente estirados.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La bolsa de aire se despliega a ~300 km/h en milisegundos; estar demasiado cerca recibe el impacto inicial de la expansión en lugar de amortiguarse contra ella.',
    distractorRationale: {
      A: '25 cm permiten que el airbag se infle completamente antes de recibir el cuerpo.',
      B: 'Estar a 5 cm puede causar lesiones faciales o torácicas severas al detonar.',
      C: 'Conducir pegado al volante impide maniobrar y es peligroso con airbag.',
      D: 'Estar demasiado lejos impide alcanzar pedales y girar el volante con fuerza.'
    },
    legalReference: 'Manual de Seguridad Pasiva VMT.'
  },
  {
    id: 'vmt-t241',
    category: 'teorico',
    topic: 'Asiento Infantil — Posición Más Segura en Automóvil',
    question: '¿Cuál es el lugar más seguro dentro de un automóvil para instalar un Sistema de Retención Infantil (silla de bebé)?',
    statement: '¿Cuál es el lugar más seguro dentro de un automóvil para instalar un Sistema de Retención Infantil (silla de bebé)?',
    options: [
      'En el asiento delantero del copiloto con airbag activo.',
      'En el asiento trasero (preferiblemente en la plaza central si cuenta con cinturón de tres puntos o anclajes ISOFIX/LATCH).',
      'En los brazos de un adulto en el asiento delantero.',
      'En la cama de un pick-up.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La plaza trasera central aleja al menor de los impactos laterales y evita por completo el riesgo mortal del airbag frontal del copiloto.',
    distractorRationale: {
      A: 'El airbag del copiloto puede ser fatal para un bebé o niño pequeño.',
      B: 'Los asientos traseros ofrecen la mayor zona de deformación y protección.',
      C: 'En un choque a 50 km/h un adulto no puede sujetar con sus brazos el peso multiplicado de un niño.',
      D: 'Transportar personas en la cama de un pick-up es ilegal y mortal en vuelcos.'
    },
    legalReference: 'Manual de Seguridad Infantil VMT y OMS/OPS.'
  },
  {
    id: 'vmt-t242',
    category: 'teorico',
    topic: 'Altura Correcta del Reposacabezas',
    question: 'Para prevenir eficazmente el latigazo cervical en un choque trasero, ¿a qué altura debe ajustarse el reposacabezas?',
    statement: 'Para prevenir eficazmente el latigazo cervical en un choque trasero, ¿a qué altura debe ajustarse el reposacabezas?',
    options: [
      'Lo más abajo posible tocando los hombros.',
      'Retirado del asiento para ver mejor hacia atrás.',
      'Alineado de modo que su parte superior coincida con la parte superior de la cabeza y el centro quede a la altura de los ojos/oídos.',
      'Inclinado hacia atrás a 45 grados.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Un reposacabezas demasiado bajo actúa como fulcro aumentando la hiperextensión del cuello en impactos por alcance.',
    distractorRationale: {
      A: 'Si queda bajo, la cabeza bascula violentamente hacia atrás sobre el borde.',
      B: 'Retirar el reposacabezas deja el cuello sin protección alguna.',
      C: 'La alineación correcta detiene la cabeza junto con el torso en el mismo instante.',
      D: 'Debe quedar cerca de la nuca (máximo 4-5 cm de separación).'
    },
    legalReference: 'Manual de Seguridad Pasiva VMT.'
  },
  {
    id: 'vmt-t243',
    category: 'teorico',
    topic: 'Líquido de Frenos — Cambio Periódico',
    question: '¿Por qué debe sustituirse periódicamente el líquido de frenos aunque el nivel en el depósito parezca lleno?',
    statement: '¿Por qué debe sustituirse periódicamente el líquido de frenos aunque el nivel en el depósito parezca lleno?',
    options: [
      'Porque se congela en verano.',
      'Porque se convierte en aceite de motor.',
      'No necesita cambiarse nunca.',
      'Porque es higroscópico (absorbe humedad ambiental), lo que reduce su punto de ebullición y corroe el sistema.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Con el tiempo el líquido absorbe agua; al frenar en cuestas esa agua hierve formando burbujas de vapor que hacen perder el pedal de freno.',
    distractorRationale: {
      A: 'El problema térmico en frenos es el hervor por humedad, no congelación.',
      B: 'Son fluidos químicamente incompatibles.',
      C: 'Los fabricantes recomiendan renovarlo cada 2 años aproximadamente.',
      D: 'Cambiar el líquido mantiene la resistencia térmica y protege cilindros y ABS.'
    },
    legalReference: 'Manual Técnico de Mantenimiento VMT.'
  },
  {
    id: 'vmt-t244',
    category: 'teorico',
    topic: 'Amortiguadores Desgastados — Consecuencia en Seguridad',
    question: '¿Cómo afectan unos amortiguadores en mal estado a la seguridad activa del vehículo?',
    statement: '¿Cómo afectan unos amortiguadores en mal estado a la seguridad activa del vehículo?',
    options: [
      'Aumentan la distancia de frenado, hacen rebotar las ruedas perdiendo contacto con el asfalto y generan balanceo peligroso en curvas.',
      'Mejoran la adherencia en baches.',
      'Solo afectan el sonido del radio.',
      'Reducen la distancia de parada.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Los amortiguadores mantienen presionados los neumáticos contra el pavimento; si están vencidos, la llanta rebota en irregularidades y pierde frenado y dirección.',
    distractorRationale: {
      A: 'La pérdida de contacto rueda-suelo inutiliza incluso el sistema ABS.',
      B: 'Empeoran el control sobre baches.',
      C: 'Es un componente estructural de estabilidad, no de confort acústico.',
      D: 'Alargan notablemente la distancia de frenado.'
    },
    legalReference: 'Manual Técnico de Seguridad Activa VMT.'
  },
  {
    id: 'vmt-t245',
    category: 'teorico',
    topic: 'Extintor de Incendios Vehicular — Mantenimiento',
    question: '¿Qué verificación periódica debe hacerse al extintor de incendios obligatorio que se porta en el vehículo?',
    statement: '¿Qué verificación periódica debe hacerse al extintor de incendios obligatorio que se porta en el vehículo?',
    options: [
      'Guardarlo en el fondo del baúl bajo todo el equipaje.',
      'Comprobar que el manómetro marque en zona verde, que el sello esté intacto, la carga vigente y que vaya sujeto al alcance del conductor.',
      'Llenarlo con agua del grifo cada año.',
      'Pintarlo de negro.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Un extintor descargado o inaccesible bajo maletas es inútil ante un conato de incendio eléctrico o de combustible.',
    distractorRationale: {
      A: 'Debe estar accesible rápidamente y bien sujeto para no convertirse en proyectil.',
      B: 'La revisión de presión y vigencia anual garantiza operatividad real.',
      C: 'Los extintores vehiculares suelen ser de polvo químico seco ABC, nunca agua.',
      D: 'Debe conservar su color rojo identificativo y etiqueta.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 43.'
  },
  {
    id: 'vmt-t246',
    category: 'teorico',
    topic: 'Llanta de Repuesto y Herramientas Básicas',
    question: '¿Qué elementos mecánicos básicos de auxilio exige la ley portar en todo automóvil para atender un pinchazo en ruta?',
    statement: '¿Qué elementos mecánicos básicos de auxilio exige la ley portar en todo automóvil para atender un pinchazo en ruta?',
    options: [
      'Únicamente una bomba de aire manual.',
      'Solo un destornillador.',
      'Llanta de repuesto en buen estado e inflada, gato hidráulico o mecánico, llave de cruz/tuercas y triángulos reflectivos.',
      'No es obligatorio portar llanta de repuesto.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El Art. 43 del D.E. 61 exige portar el equipo completo para cambio de rueda y señalización de emergencia en carretera.',
    distractorRationale: {
      A: 'Una bomba manual no repara un flanco rasgado ni levanta el vehículo.',
      B: 'Un destornillador no afloja tuercas de rueda.',
      C: 'Revisar periódicamente la presión de la llanta de repuesto evita quedar varado.',
      D: 'Su porte es obligatorio salvo vehículos homologados sin repuesto con kit oficial.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 43.'
  },
  {
    id: 'vmt-t247',
    category: 'teorico',
    topic: 'Luz de Freno Tercera (Central Elevada)',
    question: '¿Qué ventaja aporta la tercera luz de freno central elevada en la parte posterior de los automóviles?',
    statement: '¿Qué ventaja aporta la tercera luz de freno central elevada en la parte posterior de los automóviles?',
    options: [
      'Ilumina hacia atrás al retroceder.',
      'Reemplaza las luces direccionales.',
      'Sirve únicamente como adorno nocturno.',
      'Permite que conductores varios vehículos más atrás detecten la frenada a través de los vidrios, reduciendo choques en cadena.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Al ubicarse a la altura de la vista, la tercera luz de freno advierte anticipadamente a los vehículos siguientes antes de que impacten por alcance.',
    distractorRationale: {
      A: 'La luz de retroceso es blanca y se ubica más abajo.',
      B: 'Solo indica aplicación del pedal de freno.',
      C: 'Es un dispositivo de seguridad activa altamente efectivo.',
      D: 'Reduce significativamente las colisiones traseras en tráfico denso.'
    },
    legalReference: 'Manual Técnico de Seguridad Activa VMT.'
  },
  {
    id: 'vmt-t248',
    category: 'teorico',
    topic: 'Alineación y Balanceo de Ruedas',
    question: 'Si al circular en línea recta por una calle plana el volante vibra a cierta velocidad o el vehículo tiende a irse hacia un lado, ¿qué falla indica?',
    statement: 'Si al circular en línea recta por una calle plana el volante vibra a cierta velocidad o el vehículo tiende a irse hacia un lado, ¿qué falla indica?',
    options: [
      'Necesidad de balanceo y/o alineación de dirección, o presión desigual en los neumáticos.',
      'Falta de agua en el limpiaparabrisas.',
      'Batería sobrecargada.',
      'Exceso de combustible en el tanque.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La desalineación desvía la trayectoria y desgasta irregularmente las llantas; el desbalanceo produce vibraciones que fatigan la suspensión.',
    distractorRationale: {
      A: 'Corregir presión, balanceo y alineación restaura la estabilidad direccional.',
      B: 'El depósito limpiaparabrisas no influye en la dirección.',
      C: 'No guarda relación eléctrica.',
      D: 'El nivel de combustible no hace vibrar el volante.'
    },
    legalReference: 'Manual Técnico de Mantenimiento Preventivo VMT.'
  },
  {
    id: 'vmt-t249',
    category: 'teorico',
    topic: 'Limpiaparabrisas — Cuándo Reemplazar Escobillas',
    question: '¿Cuándo deben reemplazarse las plumillas o escobillas del limpiaparabrisas?',
    statement: '¿Cuándo deben reemplazarse las plumillas o escobillas del limpiaparabrisas?',
    options: [
      'Cada diez años únicamente.',
      'Cuando dejen rayas de agua, salten sobre el vidrio, produzcan ruido o el hule esté agrietado.',
      'Solo cuando se rompa el brazo metálico.',
      'Nunca si el vehículo duerme bajo techo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El sol tropical endurece y reseca el caucho; unas plumillas deterioradas esparcen suciedad y crean velos opacos peligrosos bajo lluvia nocturna.',
    distractorRationale: {
      A: 'En clima tropical suelen durar alrededor de un año.',
      B: 'Sustituirlas al primer signo de barrido deficiente asegura visibilidad.',
      C: 'Esperar a que se rompa el metal puede rayar permanentemente el parabrisas.',
      D: 'El uso y el tiempo igual degradan el hule.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-t250',
    category: 'teorico',
    topic: 'Parabrisas Astillado o Roto',
    question: '¿Por qué un parabrisas con grietas o astilladuras en el campo visual del conductor constituye un peligro y falta técnica?',
    statement: '¿Por qué un parabrisas con grietas o astilladuras en el campo visual del conductor constituye un peligro y falta técnica?',
    options: [
      'Porque aumenta la potencia del aire acondicionado.',
      'No representa ningún riesgo.',
      'Porque distorsiona la visión, refracta luces nocturnas causando destellos y debilita el soporte estructural del airbag del pasajero.',
      'Porque hace girar más lento el motor.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Además de obstruir la visión y crear reflejos cegadores de noche, el parabrisas es parte de la rigidez del techo y sirve de apoyo al despliegue del airbag.',
    distractorRationale: {
      A: 'No guarda relación con climatización.',
      B: 'Compromete tanto la visión como la resistencia estructural de la cabina.',
      C: 'Debe repararse o sustituirse oportunamente para aprobar revisión técnica.',
      D: 'No afecta el rendimiento del motor.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 39.'
  },
  {
    id: 'vmt-t251',
    category: 'teorico',
    topic: 'Sistema de Escape — Fugas de Monóxido de Carbono',
    question: '¿Qué riesgo mortal representa conducir un vehículo con el tubo de escape roto o con fugas debajo del piso de la cabina?',
    statement: '¿Qué riesgo mortal representa conducir un vehículo con el tubo de escape roto o con fugas debajo del piso de la cabina?',
    options: [
      'Aumenta el brillo de los faros.',
      'Mejora la calefacción interior.',
      'Solo produce ruido agradable.',
      'El ingreso de monóxido de carbono (gas incoloro e inodoro) al habitáculo, causando somnolencia, intoxicación o muerte.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El monóxido de carbono (CO) desplaza al oxígeno en la sangre sin que el conductor perciba olor alguno, provocando pérdida de conciencia al volante.',
    distractorRationale: {
      A: 'No tiene relación con las luces.',
      B: 'Los gases de combustión son tóxicos y letales.',
      C: 'Además del ruido excesivo sancionable, el peligro toxicológico es grave.',
      D: 'Mantener el sistema de escape hermético hasta atrás del vehículo es vital.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 46.'
  },
  {
    id: 'vmt-t252',
    category: 'teorico',
    topic: 'Uso del Pedal de Embrague (Clutch) en Vehículo Estándar',
    question: '¿Por qué es un mal hábito técnico mantener el pie apoyado ligeramente sobre el pedal del embrague mientras se conduce en carretera?',
    statement: '¿Por qué es un mal hábito técnico mantener el pie apoyado ligeramente sobre el pedal del embrague mientras se conduce en carretera?',
    options: [
      'Porque provoca patinamiento continuo y desgaste prematuro del disco y cojinete de empuje.',
      'Porque ahorra gasolina.',
      'Porque mejora el frenado.',
      'Porque enfría la transmisión.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El pie izquierdo debe descansar en el reposapié cuando no se realizan cambios de marcha para no acoplar parcialmente el collarín.',
    distractorRationale: {
      A: 'Evitar apoyar el pie prolonga la vida útil del embrague y evita fallas en cuesta.',
      B: 'El patinamiento desperdicia energía y aumenta el consumo.',
      C: 'No aporta ningún beneficio al frenado.',
      D: 'Al contrario, genera fricción y calor excesivo.'
    },
    legalReference: 'Manual Técnico de Conducción VMT.'
  },
  {
    id: 'vmt-t253',
    category: 'teorico',
    topic: 'Freno de Estacionamiento (Freno de Mano) en Marcha',
    question: '¿Para qué está diseñado principalmente el freno de estacionamiento o de mano?',
    statement: '¿Para qué está diseñado principalmente el freno de estacionamiento o de mano?',
    options: [
      'Para realizar derrapes en esquinas.',
      'Para inmovilizar el vehículo cuando está estacionado y servir como freno auxiliar progresivo solo en emergencia por falla hidráulica.',
      'Para sustituir al pedal de freno en semáforos diarios.',
      'Para ahorrar pastillas delanteras.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El freno de estacionamiento actúa mecánicamente sobre el eje trasero para mantener fijo el auto aparcado y solo se usa en movimiento como respaldo gradual ante falla total.',
    distractorRationale: {
      A: 'Tirar del freno de mano en curvas provoca trompos peligrosos.',
      B: 'Su diseño mecánico no está pensado para detenciones continuas de alta energía.',
      C: 'En semáforos debe usarse el freno de servicio.',
      D: 'No sustituye el desgaste normal del freno de servicio.'
    },
    legalReference: 'Manual Técnico de Seguridad Activa VMT.'
  },
  {
    id: 'vmt-t254',
    category: 'teorico',
    topic: 'Rotación Periódica de Neumáticos',
    question: '¿Para qué se recomienda rotar periódicamente los neumáticos entre ejes (cada 8,000 a 10,000 km)?',
    statement: '¿Para qué se recomienda rotar periódicamente los neumáticos entre ejes (cada 8,000 a 10,000 km)?',
    options: [
      'Para cambiar el tamaño de los rines.',
      'Para desgastar más rápido las llantas traseras.',
      'Para lograr un desgaste uniforme entre las cuatro llantas y mantener estabilidad y frenado parejos.',
      'Únicamente por estética.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Las ruedas delanteras soportan mayor desgaste por dirección, peso del motor y frenado; rotarlas prolonga su vida útil y preserva agarre equilibrado.',
    distractorRationale: {
      A: 'La rotación mantiene los mismos rines y medidas.',
      B: 'Busca precisamente equilibrar y evitar desgastes desiguales.',
      C: 'Un juego parejo de neumáticos responde predeciblemente en lluvia.',
      D: 'Tiene un propósito técnico de seguridad y economía.'
    },
    legalReference: 'Manual de Mantenimiento Preventivo VMT.'
  },
  {
    id: 'vmt-t255',
    category: 'teorico',
    topic: 'Ubicación de los Neumáticos Más Nuevos al Cambiar Solo Dos',
    question: 'Si solo se reemplazan dos neumáticos en un automóvil y los otros dos están a medio uso, ¿dónde es técnicamente más seguro montar los dos neumáticos nuevos?',
    statement: 'Si solo se reemplazan dos neumáticos en un automóvil y los otros dos están a medio uso, ¿dónde es técnicamente más seguro montar los dos neumáticos nuevos?',
    options: [
      'Ambos en el lado derecho del vehículo.',
      'Uno adelante y uno atrás en diagonal.',
      'Siempre adelante independientemente de todo.',
      'En el eje trasero, para prevenir pérdida súbita de control trasero (sobreviraje) en pavimento mojado.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Si el eje delantero pierde agarre (subviraje) el conductor lo siente en el volante y puede corregir soltando el acelerador; si patina el eje trasero en lluvia, el trompo es mucho más difícil de controlar.',
    distractorRationale: {
      A: 'Montar llantas distintas por lado desequilibra frenada y dirección.',
      B: 'Las parejas nuevas deben ir siempre en el mismo eje.',
      C: 'Las pruebas técnicas internacionales demuestran mayor riesgo de trompo con llantas gastadas atrás.',
      D: 'Montar las llantas con mejor dibujo en el eje trasero reduce el riesgo de trompo en mojado.'
    },
    legalReference: 'Manual Técnico de Neumáticos y Seguridad Activa VMT.'
  },
  {
    id: 'vmt-t256',
    category: 'teorico',
    topic: 'Cinturones en Asientos Traseros — Riesgo de Pasajero Suelto',
    question: 'En un choque frontal a 50 km/h, ¿qué riesgo corre el conductor si el pasajero sentado detrás suyo no lleva puesto el cinturón de seguridad?',
    statement: 'En un choque frontal a 50 km/h, ¿qué riesgo corre el conductor si el pasajero sentado detrás suyo no lleva puesto el cinturón de seguridad?',
    options: [
      'El pasajero trasero sale proyectado hacia adelante con una fuerza equivalente a varias toneladas, pudiendo aplastar o matar al conductor contra el volante.',
      'Ninguno, el respaldo del asiento delantero detiene todo.',
      'Solo se ensucia el asiento.',
      'El pasajero trasero sale hacia atrás.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Por inercia, el ocupante trasero sin cinturón sigue viajando a 50 km/h e impacta violentamente contra el respaldo del conductor ("efecto elefante").',
    distractorRationale: {
      A: 'El uso del cinturón en plazas traseras protege tanto a quien va atrás como a quienes van adelante.',
      B: 'Los respaldos suelen ceder ante impactos de decenas de veces el peso del cuerpo.',
      C: 'El impacto físico puede ser letal para ambos ocupantes.',
      D: 'En frenado o choque frontal la inercia proyecta hacia adelante, no hacia atrás.'
    },
    legalReference: 'Manual de Seguridad Pasiva VMT; D.E. 61 Art. 39.'
  },
  {
    id: 'vmt-t257',
    category: 'teorico',
    topic: 'Desconexión Manual de Airbag Frontal',
    question: '¿En qué único caso excepcional debe desactivarse temporalmente el airbag frontal del acompañante?',
    statement: '¿En qué único caso excepcional debe desactivarse temporalmente el airbag frontal del acompañante?',
    options: [
      'Para ahorrar batería.',
      'Únicamente si por necesidad absoluta debe instalarse ahí una silla infantil orientada hacia atrás (aunque siempre es preferible el asiento trasero).',
      'Cuando viaja un adulto alto.',
      'Para que no se ensucie el tablero.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El airbag frontal golpea con violencia letal la parte trasera de una silla infantil a contramarcha; la regla óptima es llevar siempre a los niños atrás.',
    distractorRationale: {
      A: 'El airbag no consume energía apreciable en espera.',
      B: 'Solo si el vehículo carece de asiento trasero (ej. pick-up cabina simple) debe desactivarse para silla infantil.',
      C: 'Los adultos siempre se benefician del airbag combinado con cinturón.',
      D: 'Es un dispositivo salvavidas que debe permanecer activo para adultos.'
    },
    legalReference: 'Manual de Seguridad Pasiva VMT.'
  },
  {
    id: 'vmt-t258',
    category: 'teorico',
    topic: 'Inspección de Mangueras y Bandas Antes de Viaje Largo',
    question: 'Antes de emprender un viaje largo en carretera, ¿qué fluidos y elementos bajo el capó deben revisarse con el motor frío?',
    statement: 'Antes de emprender un viaje largo en carretera, ¿qué fluidos y elementos bajo el capó deben revisarse con el motor frío?',
    options: [
      'Únicamente el color del tapón de gasolina.',
      'Solo el nivel de aceite estando el motor recién apagado a máxima temperatura.',
      'Nivel de aceite, refrigerante en el depósito auxiliar, líquido de frenos, líquido limpiaparabrisas y estado de bandas.',
      'No es necesario abrir el capó en vehículos nuevos.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Revisar niveles en frío evita quemaduras por presión de vapor en el radiador y detecta fugas antes de quedar varado en carretera.',
    distractorRationale: {
      A: 'La revisión preventiva abarca todos los fluidos vitales.',
      B: 'Abrir el radiador caliente puede provocar quemaduras graves y lecturas erróneas.',
      C: 'La inspección pre-viaje previene recalentamientos y fallas de frenado.',
      D: 'Incluso vehículos recientes pueden sufrir pinchazos o pérdidas por piedra en mangueras.'
    },
    legalReference: 'Manual de Mantenimiento Preventivo VMT.'
  },
  {
    id: 'vmt-t259',
    category: 'teorico',
    topic: 'Freno ABS — Sensación en el Pedal al Activarse',
    question: 'Durante una frenada de pánico en pavimento mojado con sistema ABS, el conductor siente una vibración rápida ("pulsación") en el pedal de freno. ¿Qué debe hacer?',
    statement: 'Durante una frenada de pánico en pavimento mojado con sistema ABS, el conductor siente una vibración rápida ("pulsación") en el pedal de freno. ¿Qué debe hacer?',
    options: [
      'Soltar inmediatamente el pedal de freno asustado.',
      'Apagar el motor.',
      'Poner la caja en reversa.',
      'Mantener el pedal presionado con firmeza continua y dirigir el volante hacia la vía de escape, pues la vibración indica que el ABS está funcionando.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Muchos conductores sueltan el freno al sentir el pulso normal del ABS; mantener presión firme permite al sistema modular el frenado sin bloquear ruedas.',
    distractorRationale: {
      A: 'Soltar el pedal interrumpe la frenada de emergencia aumentando la distancia de choque.',
      B: 'Apagar el motor desconecta el ABS y la dirección asistida.',
      C: 'Meter reversa en movimiento destruye la transmisión.',
      D: 'Presión firme y continua ("pisar y dirigir") es la técnica correcta con ABS.'
    },
    legalReference: 'Manual Técnico de Seguridad Activa VMT.'
  },
  {
    id: 'vmt-t260',
    category: 'teorico',
    topic: 'Zonas de Deformación Programada del Chasis',
    question: '¿Por qué las carrocerías modernas se deforman fácilmente en el capó y baúl tras un choque mientras la cabina de pasajeros permanece rígida?',
    statement: '¿Por qué las carrocerías modernas se deforman fácilmente en el capó y baúl tras un choque mientras la cabina de pasajeros permanece rígida?',
    options: [
      'Es un diseño de seguridad pasiva ("deformación programada") para absorber la energía cinética del impacto antes de que llegue a los ocupantes.',
      'Porque los fabricantes usan plástico sin resistencia por error.',
      'Para hacer el vehículo más pesado.',
      'Para que las reparaciones sean más rápidas.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Al arrugarse progresivamente el frente o la parte trasera, se alarga el tiempo de desaceleración reduciendo las fuerzas G sobre el cuerpo humano.',
    distractorRationale: {
      A: 'La celda de supervivencia rígida combinada con zonas deformables salva millones de vidas.',
      B: 'Es ingeniería intencional de absorción de energía, no defecto de materiales.',
      C: 'Los materiales modernos buscan optimizar ligereza y resistencia.',
      D: 'El objetivo primordial es preservar la vida de los ocupantes.'
    },
    legalReference: 'Manual de Seguridad Pasiva VMT.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 7: CERO TOLERANCIA (D.L. 185/2025) Y ART. 147-E CP (+35)
  // ==========================================================================
  {
    id: 'vmt-t261',
    category: 'teorico',
    topic: 'Principio Rector de Cero Tolerancia en El Salvador',
    question: '¿Qué umbral de alcohol en sangre o aire espirado tolera la reforma vigente de Cero Tolerancia (D.L. 185/2025 y LTTTSV) para conducir en El Salvador?',
    statement: '¿Qué umbral de alcohol en sangre o aire espirado tolera la reforma vigente de Cero Tolerancia (D.L. 185/2025 y LTTTSV) para conducir en El Salvador?',
    options: [
      'Hasta 0.08% de alcohol en sangre.',
      'Cero gramos de alcohol (0.0 g/l); cualquier presencia positiva de alcohol al conducir es sancionada.',
      'Hasta dos cervezas en zonas rurales.',
      'Únicamente se sanciona si el conductor choca.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El Salvador adoptó el régimen estricto de Cero Tolerancia, eliminando los márgenes antiguos y sancionando toda conducción con presencia positiva de alcohol.',
    distractorRationale: {
      A: 'Los antiguos umbrales de permisividad fueron derogados por la reforma de Cero Tolerancia.',
      B: 'La regla vigente exige cero alcohol absoluto al volante (0.0 g/l).',
      C: 'No existe dispensa por cantidad de bebidas ni por zona rural.',
      D: 'La sanción procede en cualquier control preventivo aun sin siniestro.'
    },
    legalReference: 'Decreto Legislativo N.º 185/2025; Ley de Transporte Terrestre Art. 117 y Art. 118; Art. 147-E CP.'
  },
  {
    id: 'vmt-t262',
    category: 'teorico',
    topic: 'Multa Económica por Falta Muy Grave Vigente',
    question: 'Con las reformas a la Ley de Transporte Terrestre (D.L. 185/2025), ¿a cuánto asciende la multa administrativa para infracciones muy graves como conducir bajo efectos de alcohol?',
    statement: 'Con las reformas a la Ley de Transporte Terrestre (D.L. 185/2025), ¿a cuánto asciende la multa administrativa para infracciones muy graves como conducir bajo efectos de alcohol?',
    options: [
      '$11.43 USD.',
      '$34.29 USD.',
      '$150.00 USD (más detención, decomiso de vehículo y suspensión/cancelación según el caso).',
      'Una advertencia escrita sin costo.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La reforma incrementó las multas administrativas fijando $150.00 USD para faltas muy graves, $100.00 USD para graves y $50.00 USD para leves, además de sanciones penales.',
    distractorRationale: {
      A: '$11.43 USD correspondía al esquema histórico previo a la reforma.',
      B: '$34.29 USD también quedó derogado por las nuevas escalas.',
      C: 'Las faltas muy graves se sancionan con $150.00 USD y medidas accesorias severas.',
      D: 'No existen advertencias gratuitas para infracciones muy graves.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) reformada por D.L. 185/2025.'
  },
  {
    id: 'vmt-t263',
    category: 'teorico',
    topic: 'Escala de Multas Vigentes — Leves, Graves y Muy Graves',
    question: '¿Cuáles son los montos vigentes de las multas administrativas para infracciones leves, graves y muy graves según la LTTTSV reformada?',
    statement: '¿Cuáles son los montos vigentes de las multas administrativas para infracciones leves, graves y muy graves según la LTTTSV reformada?',
    options: [
      '$5, $10 y $15 USD.',
      '$20, $40 y $60 USD.',
      '$100, $200 y $500 USD.',
      '$50.00 USD (leves), $100.00 USD (graves) y $150.00 USD (muy graves).'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El régimen sancionatorio actualizado establece $50 para faltas leves, $100 para graves y $150 para muy graves para disuadir conductas de riesgo.',
    distractorRationale: {
      A: 'Son montos irreales no contemplados en la ley.',
      B: 'No corresponden a la tabla reformada.',
      C: 'Las multas administrativas ordinarias se fijan en $50, $100 y $150 USD.',
      D: 'Esta escala tripartita rige en todo el territorio nacional.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 117 reformado.'
  },
  {
    id: 'vmt-t264',
    category: 'teorico',
    topic: 'Conducción Peligrosa — Modalidad Sin Alcohol',
    question: 'Según el Art. 147-E del Código Penal, ¿qué otras conductas además del alcohol o drogas configuran el delito de Conducción Peligrosa de Vehículos Automotores?',
    statement: 'Según el Art. 147-E del Código Penal, ¿qué otras conductas además del alcohol o drogas configuran el delito de Conducción Peligrosa de Vehículos Automotores?',
    options: [
      'Disputar competencias de velocidad no autorizadas o realizar maniobras temerarias que pongan en peligro concreto la vida o integridad de las personas.',
      'Circular con la radio encendida.',
      'Llevar el vehículo sin lavar.',
      'Estacionar en reversa en un centro comercial.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El Art. 147-E CP sanciona tanto la conducción bajo efectos de alcohol/drogas como carreras ilegales o maniobras temerarias que generen riesgo real.',
    distractorRationale: {
      A: 'Las carreras clandestinas y temeridad extrema en la vía pública constituyen delito penal.',
      B: 'Escuchar música a volumen normal no es delito.',
      C: 'La limpieza exterior no es materia penal.',
      D: 'Estacionar en reversa de forma segura es una maniobra lícita.'
    },
    legalReference: 'Código Penal de El Salvador Art. 147-E.'
  },
  {
    id: 'vmt-t265',
    category: 'teorico',
    topic: 'Pena de Prisión Base por Conducción Peligrosa',
    question: '¿Cuál es el rango de pena de prisión ordinaria previsto en el Art. 147-E del Código Penal para quien cometa Conducción Peligrosa en vehículo particular?',
    statement: '¿Cuál es el rango de pena de prisión ordinaria previsto en el Art. 147-E del Código Penal para quien cometa Conducción Peligrosa en vehículo particular?',
    options: [
      'Únicamente una multa de tránsito sin prisión.',
      'De dos a cinco años de prisión (agravándose de cinco a diez años si se trata de transporte público o carga).',
      'Treinta días de trabajo comunitario únicamente.',
      'Un día de arresto administrativo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Las reformas penales endurecieron el Art. 147-E CP estableciendo penas de 2 a 5 años para particulares y de 5 a 10 años para transporte público o de carga.',
    distractorRationale: {
      A: 'La conducción peligrosa es delito penal, no simple esquela administrativa.',
      B: 'Conlleva privación de libertad, inhabilitación para conducir y antecedentes penales.',
      C: 'La pena base supera los dos años de prisión.',
      D: 'No se reduce a un día de arresto.'
    },
    legalReference: 'Código Penal de El Salvador Art. 147-E.'
  },
  {
    id: 'vmt-t266',
    category: 'teorico',
    topic: 'Agravante Para Transporte Público y Carga en Art. 147-E CP',
    question: '¿Por qué el Art. 147-E del Código Penal impone penas más severas (5 a 10 años de prisión) a conductores de transporte público o de carga que cometen conducción peligrosa?',
    statement: '¿Por qué el Art. 147-E del Código Penal impone penas más severas (5 a 10 años de prisión) a conductores de transporte público o de carga que cometen conducción peligrosa?',
    options: [
      'Porque sus vehículos son más costosos.',
      'Porque circulan solo de noche.',
      'Por el mayor potencial destructivo de la masa vehicular y la responsabilidad sobre múltiples vidas de pasajeros y usuarios.',
      'Por el color de las placas.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Un autobús o cabezal en manos de un conductor ebrio o temerario multiplica exponencialmente el riesgo de tragedias colectivas.',
    distractorRationale: {
      A: 'El bien jurídico protegido es la vida e integridad colectiva, no el valor del vehículo.',
      B: 'El transporte público y de carga opera de día y de noche.',
      C: 'El deber de cuidado profesional y la magnitud del riesgo fundamentan la agravante.',
      D: 'Las placas solo identifican el servicio; la razón es la peligrosidad.'
    },
    legalReference: 'Código Penal Art. 147-E inciso segundo.'
  },
  {
    id: 'vmt-t267',
    category: 'teorico',
    topic: 'Suspensión o Cancelación de Licencia por Conducción Peligrosa',
    question: 'Además de la pena de prisión y multa, ¿qué medida directa recae sobre la licencia de conducir de una persona condenada por Conducción Peligrosa?',
    statement: 'Además de la pena de prisión y multa, ¿qué medida directa recae sobre la licencia de conducir de una persona condenada por Conducción Peligrosa?',
    options: [
      'Se le asciende automáticamente a Licencia Pesada T.',
      'Se le extiende la vigencia por diez años gratis.',
      'No sufre ninguna afectación.',
      'La suspensión o cancelación definitiva de la licencia e inhabilitación para obtenerla durante el período fijado por ley/juez.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La reforma contempla suspensión inmediata y eventual cancelación definitiva de la licencia ante reincidencia o condena penal.',
    distractorRationale: {
      A: 'Jamás se premia una conducta delictiva con ascenso de categoría.',
      B: 'Al contrario, se restringe o revoca la habilitación.',
      C: 'La licencia es retenida y suspendida.',
      D: 'La inhabilitación retira de circulación a conductores de alto riesgo.'
    },
    legalReference: 'Código Penal Art. 147-E y D.L. 477 Art. 118.'
  },
  {
    id: 'vmt-t268',
    category: 'teorico',
    topic: 'Negativa a Realizarse Prueba de Alcotest o Toxicológica',
    question: 'Si en un control vehicular de la PNC-DTT un conductor se niega injustificadamente a soplar en el alcoholímetro o someterse a prueba toxicológica, ¿qué procede?',
    statement: 'Si en un control vehicular de la PNC-DTT un conductor se niega injustificadamente a soplar en el alcoholímetro o someterse a prueba toxicológica, ¿qué procede?',
    options: [
      'Se presume legalmente su estado de ebriedad/intoxicación o se procede a su detención y remisión vehicular conforme a ley.',
      'El agente debe dejarlo ir sin sanción.',
      'Puede pedir hacer la prueba una semana después.',
      'Solo se le cobra $5.00 USD.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La negativa a la prueba técnica no sirve como escudo para evadir la ley; activa presunción legal, multa muy grave, retención del vehículo y procedimiento penal/policial.',
    distractorRationale: {
      A: 'Colaborar con las pruebas de detección es deber legal del conductor.',
      B: 'Dejar ir a quien se niega incentivaría la impunidad de conductores ebrios.',
      C: 'El alcohol se metaboliza en horas; una prueba días después carece de valor.',
      D: 'Conlleva multa muy grave y consecuencias legales severas.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 118 y Código Penal.'
  },
  {
    id: 'vmt-t269',
    category: 'teorico',
    topic: 'Absorción y Eliminación del Alcohol en el Organismo',
    question: '¿Cómo elimina realmente el cuerpo humano el alcohol ingerido antes de poder volver a conducir con 0.0 g/l?',
    statement: '¿Cómo elimina realmente el cuerpo humano el alcohol ingerido antes de poder volver a conducir con 0.0 g/l?',
    options: [
      'Tomando dos tazas de café negro cargado.',
      'Únicamente mediante el metabolismo hepático con el paso de las horas (aproximadamente 0.10-0.15 g/l por hora, requiriendo muchas horas de espera).',
      'Dándose una ducha de agua fría y mascando menta.',
      'Haciendo ejercicio durante cinco minutos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El hígado metaboliza el alcohol a una tasa lenta y constante; ni el café, ni duchas, ni sudar ni bebidas energéticas aceleran la caída del nivel de alcohol en sangre.',
    distractorRationale: {
      A: 'La cafeína solo enmascara la somnolencia sin reducir la alcoholemia.',
      B: 'Solo el tiempo real de metabolización hepática elimina el alcohol del organismo.',
      C: 'La menta solo oculta el olor bucal pero el alcoholímetro mide aire alveolar profundo.',
      D: 'El ejercicio breve no acelera el metabolismo hepático del etanol.'
    },
    legalReference: 'Manual de Seguridad Vial VMT y MINSAL.'
  },
  {
    id: 'vmt-t270',
    category: 'teorico',
    topic: 'Efecto del Alcohol Sobre el Campo Visual',
    question: '¿Qué alteración visual provoca el consumo de alcohol incluso en cantidades pequeñas?',
    statement: '¿Qué alteración visual provoca el consumo de alcohol incluso en cantidades pequeñas?',
    options: [
      'Amplía la visión periférica a 220 grados.',
      'Mejora la visión nocturna.',
      'Reduce el campo visual lateral ("visión en túnel"), dificulta calcular distancias y retrasa la recuperación ante deslumbramientos.',
      'Elimina la fatiga ocular.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El alcohol deprime el sistema nervioso central, estrechando la visión periférica de modo que el conductor deja de percibir peatones o autos que vienen por los costados.',
    distractorRationale: {
      A: 'La visión periférica se estrecha drásticamente, nunca se amplía.',
      B: 'De noche empeora severamente el contraste y la adaptación a la luz.',
      C: 'La visión en túnel impide detectar peligros laterales en intersecciones.',
      D: 'Acentúa el cansancio y la somnolencia.'
    },
    legalReference: 'Manual de Prevención de Siniestros VMT.'
  },
  {
    id: 'vmt-t271',
    category: 'teorico',
    topic: 'Efecto del Alcohol en el Tiempo de Reacción',
    question: '¿Cómo afecta el alcohol al tiempo de reacción y a la toma de decisiones del conductor?',
    statement: '¿Cómo afecta el alcohol al tiempo de reacción y a la toma de decisiones del conductor?',
    options: [
      'Acelera los reflejos haciéndolos más precisos.',
      'No tiene efecto hasta después de diez bebidas.',
      'Mejora la coordinación entre vista, mano y pie.',
      'Ralentiza los reflejos, deteriora la coordinación motora y genera falsa sensación de confianza llevando a asumir más riesgos.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La combinación letal del alcohol es desinhibir la prudencia (falsa valentía) mientras alarga el tiempo necesario para frenar o esquivar.',
    distractorRationale: {
      A: 'El etanol es un depresor nervioso que vuelve más lentos todos los reflejos.',
      B: 'Desde el primer trago se deterioran las funciones ejecutivas y de atención dividida.',
      C: 'La coordinación visomotora se torna torpe e imprecisa.',
      D: 'Por ello la política de Cero Tolerancia prohíbe cualquier ingesta al conducir.'
    },
    legalReference: 'Manual de Seguridad Vial VMT; OMS/OPS.'
  },
  {
    id: 'vmt-t272',
    category: 'teorico',
    topic: 'Sinergia Peligrosa de Alcohol y Medicamentos',
    question: '¿Qué ocurre cuando un conductor combina pequeñas dosis de alcohol con medicamentos antihistamínicos, ansiolíticos o relajantes musculares?',
    statement: '¿Qué ocurre cuando un conductor combina pequeñas dosis de alcohol con medicamentos antihistamínicos, ansiolíticos o relajantes musculares?',
    options: [
      'Se produce un efecto sinérgico que potencia enormemente la somnolencia, el mareo y la pérdida de reflejos.',
      'El medicamento anula el efecto del alcohol.',
      'Aumenta la lucidez mental.',
      'No ocurre ninguna interacción.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Combinar fármacos depresores del sistema nervioso con alcohol multiplica su efecto sedante mucho más allá de la suma individual.',
    distractorRationale: {
      A: 'Incluso ciertos fármacos sin alcohol causan somnolencia; con alcohol el riesgo se dispara.',
      B: 'Nunca se neutralizan; se potencian peligrosamente.',
      C: 'Deprime severamente el estado de alerta.',
      D: 'Las interacciones farmacológicas son causa frecuente de microsueños al volante.'
    },
    legalReference: 'Manual de Seguridad Vial VMT y MINSAL.'
  },
  {
    id: 'vmt-t273',
    category: 'teorico',
    topic: 'Medicamentos de Venta Libre Que Causan Somnolencia',
    question: 'Antes de conducir tras tomar un medicamento antigripal o antialérgico de venta libre, ¿qué debe verificar el conductor?',
    statement: 'Antes de conducir tras tomar un medicamento antigripal o antialérgico de venta libre, ¿qué debe verificar el conductor?',
    options: [
      'Únicamente el precio en la farmacia.',
      'La etiqueta y prospecto para confirmar si causa somnolencia o mareos, absteniéndose de manejar si afecta su estado de alerta.',
      'Solo si tiene sabor agradable.',
      'Nada, los medicamentos de venta libre nunca afectan la conducción.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Muchos antigripales contienen antihistamínicos de primera generación que inducen sueño intenso comparable al alcohol.',
    distractorRationale: {
      A: 'El costo no indica el perfil de efectos secundarios.',
      B: 'Leer las advertencias ("puede causar somnolencia") previene accidentes por fatiga inducida.',
      C: 'Es irrelevante para la seguridad vial.',
      D: 'Varios fármacos sin receta médica deterioran significativamente la atención.'
    },
    legalReference: 'Manual de Seguridad Vial VMT y MINSAL.'
  },
  {
    id: 'vmt-t274',
    category: 'teorico',
    topic: 'Drogas Ilícitas y Sustancias Psicotrópicas al Volante',
    question: '¿Cuál es el régimen legal aplicable a quien conduzca bajo la influencia de marihuana, cocaína u otras sustancias estupefacientes?',
    statement: '¿Cuál es el régimen legal aplicable a quien conduzca bajo la influencia de marihuana, cocaína u otras sustancias estupefacientes?',
    options: [
      'Está permitido si tiene receta informal.',
      'Solo conlleva una multa leve de $50.',
      'Cero tolerancia: configura delito de Conducción Peligrosa (Art. 147-E CP), detención, decomiso y cancelación/suspensión de licencia.',
      'Únicamente aplica si circula en autopistas.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El Art. 147-E CP equipara plenamente la conducción bajo drogas o estupefacientes a la conducción bajo efectos del alcohol.',
    distractorRationale: {
      A: 'Ninguna sustancia ilícita es autorizada para operar vehículos.',
      B: 'Es falta muy grave y delito penal, nunca falta leve.',
      C: 'La tolerancia es estrictamente cero en todo el país.',
      D: 'Rige en vías urbanas, rurales y carreteras.'
    },
    legalReference: 'Código Penal Art. 147-E; Ley de Transporte Terrestre Art. 118.'
  },
  {
    id: 'vmt-t275',
    category: 'teorico',
    topic: 'Uso del Teléfono Celular Sin Manos Libres',
    question: '¿Cómo clasifica la normativa de tránsito salvadoreña conducir utilizando el teléfono celular en la mano para hablar o enviar mensajes de texto?',
    statement: '¿Cómo clasifica la normativa de tránsito salvadoreña conducir utilizando el teléfono celular en la mano para hablar o enviar mensajes de texto?',
    options: [
      'Como conducta permitida en semáforos en rojo.',
      'Como hábito seguro si se maneja con una rodilla.',
      'Como falta leve sin riesgo real.',
      'Como infracción grave/muy grave por distracción visual, manual y cognitiva que multiplica el riesgo de choque.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Escribir mensajes ("textear") aparta los ojos de la vía durante varios segundos en los que el vehículo recorre decenas de metros completamente a ciegas.',
    distractorRationale: {
      A: 'Incluso en semáforos distrae al conductor del arranque y peatones.',
      B: 'Conducir con las rodillas impide reaccionar en emergencias.',
      C: 'El uso de celular al volante es una de las principales causas actuales de siniestralidad.',
      D: 'La ley sanciona manipular teléfonos móviles mientras se conduce.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 117 y D.E. 61.'
  },
  {
    id: 'vmt-t276',
    category: 'teorico',
    topic: 'Metros Recorridos a Ciegas al Leer un Mensaje',
    question: 'Si un conductor circula a 72 km/h (20 m/s) y desvía la vista 4 segundos para leer un mensaje en su celular, ¿qué distancia recorre totalmente a ciegas?',
    statement: 'Si un conductor circula a 72 km/h (20 m/s) y desvía la vista 4 segundos para leer un mensaje en su celular, ¿qué distancia recorre totalmente a ciegas?',
    options: [
      '80 metros sin ver absolutamente nada de la carretera.',
      '4 metros.',
      '10 metros.',
      '1 metro.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'A 72 km/h se avanzan 20 metros cada segundo; en 4 segundos se recorren 80 metros (casi una cancha de fútbol) sin percibir frenazos ni peatones.',
    distractorRationale: {
      A: '20 m/s × 4 s = 80 metros a ciegas.',
      B: 'Subestima veinte veces la distancia real recorrida.',
      C: 'A esa velocidad 10 metros se recorren en apenas medio segundo.',
      D: 'Es físicamente imposible recorrer solo 1 metro en 4 segundos a 72 km/h.'
    },
    legalReference: 'Manual de Manejo Defensivo y Física Vial VMT.'
  },
  {
    id: 'vmt-t277',
    category: 'teorico',
    topic: 'Homicidio Culposo en Siniestro Vial con Alcohol',
    question: 'Si un conductor en estado de ebriedad o bajo conducción peligrosa provoca un siniestro donde fallece una persona, ¿qué consecuencias penales enfrenta?',
    statement: 'Si un conductor en estado de ebriedad o bajo conducción peligrosa provoca un siniestro donde fallece una persona, ¿qué consecuencias penales enfrenta?',
    options: [
      'Únicamente pagar el funeral sin proceso judicial.',
      'Concurso de delitos (Homicidio Culposo agravado y Conducción Peligrosa) con severas penas de prisión, sin beneficio de fianza fácil y cancelación de licencia.',
      'Una multa de $150 sin prisión.',
      'Trabajo social de fin de semana.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Causar la muerte conduciendo bajo efectos de alcohol o drogas agrava drásticamente la responsabilidad penal conforme al Código Penal salvadoreño.',
    distractorRationale: {
      A: 'La muerte causada en conducción peligrosa es un delito grave perseguido de oficio.',
      B: 'Las reformas penales imponen penas severas de prisión efectiva e indemnización civil.',
      C: 'La multa administrativa no sustituye la acción penal por homicidio culposo agravado.',
      D: 'No procede medida mínima ante resultado mortal con ebriedad.'
    },
    legalReference: 'Código Penal Art. 132 (Homicidio Culposo) y Art. 147-E.'
  },
  {
    id: 'vmt-t278',
    category: 'teorico',
    topic: 'Conductor Designado como Medida Preventiva',
    question: 'Si un grupo de personas planea asistir a una reunión donde se consumirán bebidas alcohólicas, ¿cuál es la única estrategia 100% compatible con la ley de Cero Tolerancia?',
    statement: 'Si un grupo de personas planea asistir a una reunión donde se consumirán bebidas alcohólicas, ¿cuál es la única estrategia 100% compatible con la ley de Cero Tolerancia?',
    options: [
      'Que conduzca quien sienta que aguanta más licor.',
      'Tomar café antes de subir al auto.',
      'Designar previamente un conductor que consuma 0.0 alcohol, o utilizar taxi/transporte autorizado.',
      'Manejar lento por calles secundarias.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Planificar el regreso antes de ingerir alcohol evita decisiones impulsivas bajo intoxicación.',
    distractorRationale: {
      A: 'La tolerancia subjetiva al licor no impide dar positivo en alcoholímetro ni previene accidentes.',
      B: 'El café no elimina el alcohol del organismo.',
      C: 'El conductor designado sobrio o el transporte seguro garantizan 0.0 g/l.',
      D: 'Manejar lento no exime de sanción penal ni administrativa.'
    },
    legalReference: 'Programa Nacional de Seguridad Vial VMT / FONAT.'
  },
  {
    id: 'vmt-t279',
    category: 'teorico',
    topic: 'Prohibición de Bebidas Alcohólicas Abiertas en Cabina',
    question: '¿Está permitido transportar envases abiertos de bebidas alcohólicas al alcance del conductor dentro de la cabina mientras el vehículo circula?',
    statement: '¿Está permitido transportar envases abiertos de bebidas alcohólicas al alcance del conductor dentro de la cabina mientras el vehículo circula?',
    options: [
      'Sí, si solo los pasajeros están bebiendo.',
      'Sí, si es en carretera abierta.',
      'Sí, siempre que sea cerveza.',
      'No, constituye infracción y evidencia de riesgo en controles de tránsito.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Circular con recipientes alcohólicos abiertos en el habitáculo fomenta el consumo al volante y es sancionado por la autoridad de tránsito.',
    distractorRationale: {
      A: 'La presencia de envases abiertos en cabina distrae y compromete el control policial.',
      B: 'Las carreteras abiertas tienen mayor velocidad y riesgo.',
      C: 'La cerveza contiene etanol y produce los mismos efectos legales y físicos.',
      D: 'Las bebidas cerradas deben transportarse selladas en el baúl.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y D.E. 61.'
  },
  {
    id: 'vmt-t280',
    category: 'teorico',
    topic: 'Exceso de Velocidad Mayor a 20-30 km/h Sobre el Límite',
    question: '¿Cómo se sanciona el exceso de velocidad temerario que supera ampliamente los límites máximos establecidos en carretera o ciudad?',
    statement: '¿Cómo se sanciona el exceso de velocidad temerario que supera ampliamente los límites máximos establecidos en carretera o ciudad?',
    options: [
      'Como infracción muy grave ($150.00 USD) y eventual responsabilidad penal por conducción peligrosa si pone en riesgo la vida de terceros.',
      'Con una felicitación por puntualidad.',
      'Con multa de $5.00 USD.',
      'Solo con llamada de atención verbal.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El exceso extremo de velocidad reduce el tiempo de reacción y multiplica la energía del choque, siendo sancionado severamente.',
    distractorRationale: {
      A: 'La LTTTSV y el Art. 147-E CP castigan la velocidad temeraria.',
      B: 'Es una conducta ilícita de alto riesgo.',
      C: 'La escala vigente fija $150.00 USD para faltas muy graves.',
      D: 'Las faltas graves y muy graves generan esquela formal.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 117; Código Penal Art. 147-E.'
  },
  {
    id: 'vmt-t281',
    category: 'teorico',
    topic: 'Sistema de Puntos en la Licencia de Conducir',
    question: '¿Cuál es el propósito del sistema de acumulación de puntos o infracciones en el historial del conductor contemplado en las reformas viales?',
    statement: '¿Cuál es el propósito del sistema de acumulación de puntos o infracciones en el historial del conductor contemplado en las reformas viales?',
    options: [
      'Canjear puntos por combustible gratis.',
      'Identificar a conductores reincidentes en faltas de tránsito para exigir cursos de reeducación vial o suspenderles la licencia.',
      'Aumentar el precio del seguro de vida.',
      'Eliminar la necesidad de renovar la tarjeta de circulación.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El registro de reincidencia permite retirar temporalmente o reeducar a quienes acumulan infracciones repetidas antes de que provoquen una tragedia.',
    distractorRationale: {
      A: 'Es un mecanismo de control y sanción, nunca de premios comerciales.',
      B: 'La trazabilidad de faltas disuade la reincidencia crónica.',
      C: 'Es un registro público del VMT.',
      D: 'La tarjeta de circulación mantiene su refrenda anual obligatoria.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) reformada por D.L. 185/2025.'
  },
  {
    id: 'vmt-t282',
    category: 'teorico',
    topic: 'Reincidencia en Conducción Bajo Alcohol',
    question: 'Si un conductor ya sancionado anteriormente por conducir con alcohol reincide en la misma conducta, ¿qué ocurre con su habilitación para conducir?',
    statement: 'Si un conductor ya sancionado anteriormente por conducir con alcohol reincide en la misma conducta, ¿qué ocurre con su habilitación para conducir?',
    options: [
      'Se le perdona la segunda vez.',
      'Solo paga la mitad de la multa.',
      'Se agravan las sanciones administrativas y penales, procediendo la cancelación definitiva o suspensión prolongada de la licencia.',
      'Puede seguir manejando con permiso temporal.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La reincidencia demuestra desprecio reiterado por la vida ajena y conlleva pérdida definitiva o prolongada del derecho a conducir.',
    distractorRationale: {
      A: 'La reincidencia es agravante, nunca atenuante.',
      B: 'Las multas y penas aumentan en reincidencia.',
      C: 'La cancelación definitiva protege a la sociedad de conductores reincidentes.',
      D: 'No existen permisos temporales para reincidentes de ebriedad.'
    },
    legalReference: 'Ley de Transporte Terrestre Art. 118 y Código Penal Art. 147-E.'
  },
  {
    id: 'vmt-t283',
    category: 'teorico',
    topic: 'Motociclista Bajo Efectos de Alcohol',
    question: '¿Aplica la ley de Cero Tolerancia y el delito de Conducción Peligrosa (Art. 147-E CP) también a quienes conducen motocicletas?',
    statement: '¿Aplica la ley de Cero Tolerancia y el delito de Conducción Peligrosa (Art. 147-E CP) también a quienes conducen motocicletas?',
    options: [
      'No, solo aplica a automóviles de cuatro ruedas.',
      'Solo si la motocicleta supera los 1,000 cc.',
      'Únicamente en San Salvador.',
      'Sí, aplica plenamente a todo vehículo automotor incluyendo motocicletas de cualquier cilindrada.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La motocicleta es un vehículo automotor y sus conductores sufren mayor siniestralidad fatal bajo efectos del alcohol por requerir equilibrio constante.',
    distractorRationale: {
      A: 'Toda categoría vehicular está sujeta al Art. 147-E CP y D.L. 185/2025.',
      B: 'La cilindrada es irrelevante ante el riesgo vial.',
      C: 'La ley rige en los 14 departamentos de El Salvador.',
      D: 'Incluso en motocicletas el equilibrio y reflejos se pierden más rápido con alcohol.'
    },
    legalReference: 'Código Penal Art. 147-E y D.L. 477.'
  },
  {
    id: 'vmt-t284',
    category: 'teorico',
    topic: 'Alcotest — Diferencia Entre Prueba de Tamizaje y Evidencial',
    question: '¿Qué mide un alcoholímetro debidamente calibrado utilizado por la PNC-DTT en los controles antidoping?',
    statement: '¿Qué mide un alcoholímetro debidamente calibrado utilizado por la PNC-DTT en los controles antidoping?',
    options: [
      'La concentración de alcohol en el aire espirado alveolar, correlacionada técnicamente con la alcoholemia en sangre.',
      'La cantidad de comida ingerida.',
      'El nivel de azúcar en sangre.',
      'La presión arterial del conductor.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El alcoholímetro mide el etanol presente en el aire profundo de los pulmones (aire alveolar), reflejando con precisión el alcohol circulante en la sangre.',
    distractorRationale: {
      A: 'La correlación aire alveolar-sangre es un estándar forense internacional.',
      B: 'Los alimentos no generan lectura positiva de etanol en el sensor específico.',
      C: 'No es un glucómetro.',
      D: 'No mide presión arterial.'
    },
    legalReference: 'Protocolos Forenses y Controles Antidoping VMT / PNC-DTT.'
  },
  {
    id: 'vmt-t285',
    category: 'teorico',
    topic: 'Responsabilidad del Propietario que Presta Vehículo a Persona Ebria',
    question: 'Si el propietario de un vehículo entrega voluntariamente las llaves a sabiendas de que el conductor está ebrio o carece de licencia, ¿qué riesgo asume?',
    statement: 'Si el propietario de un vehículo entrega voluntariamente las llaves a sabiendas de que el conductor está ebrio o carece de licencia, ¿qué riesgo asume?',
    options: [
      'Ninguno, la ley exime totalmente al dueño.',
      'Responsabilidad civil solidaria por los daños causados a terceros y eventual remisión del automotor.',
      'Recibe un reembolso del seguro automáticamente.',
      'Solo pierde la llanta de repuesto.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El propietario responde civilmente de manera solidaria por los daños provocados por su vehículo y arriesga la declinación de la póliza de seguro.',
    distractorRationale: {
      A: 'La propiedad del vehículo conlleva deber de diligencia al ceder su uso.',
      B: 'Las aseguradoras excluyen cobertura si el conductor está ebrio o sin licencia.',
      C: 'Las pólizas niegan cobertura en conducción bajo alcohol.',
      D: 'El vehículo completo puede ser remitido e inmovilizado.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 118 y Código Civil.'
  },
  {
    id: 'vmt-t286',
    category: 'teorico',
    topic: 'Conducción Bajo Efectos de Fatiga Extrema vs Alcohol',
    question: 'Según estudios internacionales de seguridad vial (OMS/OPS), ¿a qué nivel de alcoholemia equivale aproximadamente conducir tras 18 a 20 horas continuas sin dormir?',
    statement: 'Según estudios internacionales de seguridad vial (OMS/OPS), ¿a qué nivel de alcoholemia equivale aproximadamente conducir tras 18 a 20 horas continuas sin dormir?',
    options: [
      'No tiene ningún parecido con el alcohol.',
      'Mejora la atención más que dormir 8 horas.',
      'Produce un deterioro psicomotor y de tiempo de reacción equivalente a conducir intoxicado por alcohol.',
      'Solo causa bostezos sin afectar reflejos.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La privación prolongada de sueño enlentece los reflejos, provoca microsueños de segundos enteros y deteriora el juicio igual que el alcohol.',
    distractorRationale: {
      A: 'Numerosos estudios equiparan la vigilia prolongada con la intoxicación etílica.',
      B: 'La falta de sueño destruye la capacidad de alerta.',
      C: 'Dormir adecuadamente antes de viajar es tan vital como no beber alcohol.',
      D: 'Los microsueños causan salidas de vía mortales sin huella de frenado.'
    },
    legalReference: 'Manual de Seguridad Vial VMT y OMS/OPS.'
  },
  {
    id: 'vmt-t287',
    category: 'teorico',
    topic: 'Prohibición de Circular Sin Luces de Noche',
    question: '¿Cómo se sanciona conducir durante la noche con las luces principales completamente apagadas?',
    statement: '¿Cómo se sanciona conducir durante la noche con las luces principales completamente apagadas?',
    options: [
      'No es sancionable en calles iluminadas.',
      'Es una práctica recomendada para ahorrar batería.',
      'Solo aplica fuera de la ciudad.',
      'Es una infracción grave/muy grave por volver prácticamente invisible el vehículo y perder visibilidad frontal.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Incluso en calles con alumbrado público, las luces del vehículo permiten que otros conductores y peatones perciban que el auto está en movimiento.',
    distractorRationale: {
      A: 'Las luminarias urbanas no sustituyen la señalización luminosa del vehículo.',
      B: 'El alternador recarga la batería en marcha; apagar luces es temerario.',
      C: 'Es obligatorio en toda vía pública desde las 6:00 p.m.',
      D: 'Circular a oscuras eleva drásticamente el riesgo de colisión.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 41 y D.L. 477.'
  },
  {
    id: 'vmt-t288',
    category: 'teorico',
    topic: 'Cruzar Luz Roja de Semáforo — Clasificación',
    question: '¿Qué clasificación administrativa tiene el no respetar la luz roja del semáforo o la señal de Alto?',
    statement: '¿Qué clasificación administrativa tiene el no respetar la luz roja del semáforo o la señal de Alto?',
    options: [
      'Infracción muy grave ($150.00 USD), por el altísimo riesgo de colisión lateral o atropello.',
      'Infracción leve si no venía nadie.',
      'Conducta tolerada de madrugada.',
      'Falta meramente administrativa sin esquela.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Irrespetar la luz roja o el Alto genera impactos laterales en ángulo recto (T-bone), que son los más letales en intersecciones urbanas.',
    distractorRationale: {
      A: 'La ley clasifica el irrespeto a la luz roja y señal de Alto como faltas muy graves.',
      B: 'La peligrosidad potencial de la maniobra basta para calificarla muy grave.',
      C: 'Rige las 24 horas del día.',
      D: 'Conlleva esquela muy grave y eventual responsabilidad penal si causa lesiones.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 117 reformado.'
  },
  {
    id: 'vmt-t289',
    category: 'teorico',
    topic: 'Fotografías o Cámaras de Fotomultas VMT',
    question: '¿Tienen validez legal las esquelas impuestas mediante sistemas electrónicos de videovigilancia y fotomultas del VMT?',
    statement: '¿Tienen validez legal las esquelas impuestas mediante sistemas electrónicos de videovigilancia y fotomultas del VMT?',
    options: [
      'No, solo valen si un agente entrega papel en mano.',
      'Sí, las reformas legales facultan los medios tecnológicos certificados para detectar infracciones y notificar electrónicamente al titular.',
      'Solo aplican a vehículos extranjeros.',
      'Únicamente en días festivos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La modernización de la LTTTSV habilita radares y cámaras oficiales para registrar excesos de velocidad, invasión de carriles y paso en luz roja.',
    distractorRationale: {
      A: 'La reforma incorporó expresamente los dispositivos electrónicos de fiscalización.',
      B: 'Las fotomultas objetivas reducen la siniestralidad en puntos críticos.',
      C: 'Aplican a todo vehículo matriculado que circule en la red vial.',
      D: 'Operan de manera continua todos los días.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) reformada por D.L. 185/2025.'
  },
  {
    id: 'vmt-t290',
    category: 'teorico',
    topic: 'Transporte de Personas en Cama de Pick-Up Sin Protección',
    question: '¿Qué norma rige respecto al transporte de pasajeros en la cama descubierta de vehículos tipo pick-up o camiones?',
    statement: '¿Qué norma rige respecto al transporte de pasajeros en la cama descubierta de vehículos tipo pick-up o camiones?',
    options: [
      'Está permitido a 100 km/h en autopistas.',
      'Es obligatorio llevar niños sentados en las barandas.',
      'Está prohibido transportar personas fuera de la cabina en condiciones inseguras o sentadas en bordes, exponiéndolas a eyección mortal.',
      'Solo está prohibido en días soleados.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Ante una frenada brusca o vuelco, quienes viajan en la cama sin sujeción salen despedidos contra el pavimento con altísima mortalidad.',
    distractorRationale: {
      A: 'A alta velocidad el riesgo de eyección es extremo.',
      B: 'Sentar personas o niños en barandas o compuertas es falta grave.',
      C: 'La seguridad pasiva (cinturón y cabina) es irremplazable.',
      D: 'La prohibición protege vidas en todo clima.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 105 y D.L. 477.'
  },
  {
    id: 'vmt-t291',
    category: 'teorico',
    topic: 'Sanción por Conducir Sin Haber Obtenido Nunca Licencia',
    question: 'Si una persona conduce un vehículo automotor en la vía pública sin haber obtenido nunca licencia de conducir, ¿qué medida procede?',
    statement: 'Si una persona conduce un vehículo automotor en la vía pública sin haber obtenido nunca licencia de conducir, ¿qué medida procede?',
    options: [
      'Se le permite continuar hasta su casa.',
      'Se le cobra $10.00 USD y sigue manejando.',
      'Solo se le pide su DUI.',
      'Imposición de esquela por falta muy grave ($150.00 USD) y remisión/inmovilización del vehículo por la PNC-DTT conforme al Art. 118 LTTTSV.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Quien nunca ha sido evaluado ante el organismo evaluador autorizado carece de acreditación legal y representa un peligro para sí y para terceros.',
    distractorRationale: {
      A: 'Permitirle seguir conduciendo perpetuaría el riesgo en la vía.',
      B: 'No corresponde a falta leve ni puede seguir al volante.',
      C: 'El DUI no habilita para conducir automotores.',
      D: 'La PNC-DTT impide que continúe conduciendo y remite el vehículo si no hay conductor autorizado.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 117 y Art. 118.'
  },
  {
    id: 'vmt-t292',
    category: 'teorico',
    topic: 'Uso de Luces de Neón o Colores No Reglamentarios',
    question: '¿Está permitido instalar luces delanteras de colores verde, rojo o azul intenso en vehículos particulares?',
    statement: '¿Está permitido instalar luces delanteras de colores verde, rojo o azul intenso en vehículos particulares?',
    options: [
      'No, las luces delanteras deben ser blancas o amarillas reglamentarias; los colores rojo o azul confunden señalización y emergencias.',
      'Sí, mientras brillen bastante.',
      'Sí, en carreteras rurales.',
      'Sí, en vehículos modificados.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El código cromático vial reserva el blanco/ámbar al frente y el rojo atrás para que de noche cualquier conductor distinga de inmediato si un auto viene de frente o va delante.',
    distractorRationale: {
      A: 'Alterar los colores reglamentarios desorienta la percepción de sentido de marcha.',
      B: 'El brillo excesivo o color indebido está prohibido.',
      C: 'En carreteras rurales oscuras es aún más peligroso confundir frente y parte trasera.',
      D: 'Las modificaciones estéticas no pueden violar el D.E. 61.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 40.'
  },
  {
    id: 'vmt-t293',
    category: 'teorico',
    topic: 'Consecuencia de Alterar o Falsificar Licencia o Placas',
    question: '¿Qué responsabilidad legal enfrenta quien circule con placas falsificadas, alteradas o pertenecientes a otro vehículo?',
    statement: '¿Qué responsabilidad legal enfrenta quien circule con placas falsificadas, alteradas o pertenecientes a otro vehículo?',
    options: [
      'Una amonestación verbal únicamente.',
      'Remisión inmediata del vehículo, multa muy grave y eventual procesamiento penal por falsedad o uso de documento falso.',
      'Pago de $50 en el siguiente refrendo.',
      'Ninguna si la tarjeta está vigente.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Usar placas ajenas o alteradas constituye infracción muy grave administrativa (Art. 118 LTTTSV) y delito penal por falsedad material o ideológica.',
    distractorRationale: {
      A: 'Es una conducta ilícita grave perseguida penal y administrativamente.',
      B: 'La PNC-DTT decomisa el vehículo y remite el caso a Fiscalía si hay falsificación.',
      C: 'No se resuelve esperando al refrendo anual.',
      D: 'La tarjeta vigente de otro auto no legitima el intercambio de placas.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) Art. 118 y Código Penal.'
  },
  {
    id: 'vmt-t294',
    category: 'teorico',
    topic: 'Alcohol en Ayunas vs Con Alimentos',
    question: '¿Es cierto que comer abundante grasa antes de beber alcohol impide dar positivo en una prueba de alcotest si luego se conduce?',
    statement: '¿Es cierto que comer abundante grasa antes de beber alcohol impide dar positivo en una prueba de alcotest si luego se conduce?',
    options: [
      'Sí, los alimentos eliminan el alcohol por completo.',
      'Sí, reduce el resultado a cero.',
      'Falso; los alimentos solo retrasan brevemente la absorción en el estómago, pero todo el alcohol ingerido pasa igualmente a la sangre y da positivo.',
      'Sí, si se bebe agua mineral.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Ningún alimento neutraliza el etanol; únicamente retarda su paso al intestino delgado, tras lo cual alcanza la sangre y el aliento igualmente.',
    distractorRationale: {
      A: 'El etanol sigue absorbiéndose por completo.',
      B: 'Con Cero Tolerancia cualquier cantidad absorbida da resultado positivo sancionable.',
      C: 'La única conducta segura y legal es no beber alcohol si se va a conducir.',
      D: 'El agua hidrata pero no acelera la eliminación hepática del etanol.'
    },
    legalReference: 'Manual de Prevención Vial VMT y MINSAL.'
  },
  {
    id: 'vmt-t295',
    category: 'teorico',
    topic: 'Responsabilidad de Padres por Menores Conduciendo Sin Licencia',
    question: 'Si un menor de 15 años sin licencia juvenil conduce el vehículo familiar y causa un accidente, ¿quién asume la responsabilidad civil por los daños?',
    statement: 'Si un menor de 15 años sin licencia juvenil conduce el vehículo familiar y causa un accidente, ¿quién asume la responsabilidad civil por los daños?',
    options: [
      'Nadie, por ser menor de edad.',
      'El Ministerio de Educación.',
      'Únicamente la aseguradora sin deducible.',
      'Los padres o representantes legales y el propietario del vehículo de forma solidaria.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Los padres responden civilmente por los hechos dañosos de sus hijos menores bajo patria potestad, además de las sanciones por permitir conducir sin licencia.',
    distractorRationale: {
      A: 'La minoría de edad no deja a las víctimas sin reparación civil.',
      B: 'El sistema educativo no tiene responsabilidad patrimonial por vehículos familiares.',
      C: 'Las aseguradoras excluyen siniestros causados por conductores sin licencia.',
      D: 'El Código Civil y la LTTTSV establecen responsabilidad solidaria parental y del propietario.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y Código Civil.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 8: PROTOCOLO P.A.S., PRIMEROS AUXILIOS Y LEY FONAT (+24)
  // ==========================================================================
  {
    id: 'vmt-t296',
    category: 'teorico',
    topic: 'Protocolo P.A.S. — Significado de Proteger',
    question: 'En la atención inicial de un siniestro vial bajo el protocolo P.A.S., ¿qué significa el primer paso ("Proteger")?',
    statement: 'En la atención inicial de un siniestro vial bajo el protocolo P.A.S., ¿qué significa el primer paso ("Proteger")?',
    options: [
      'Asegurar la escena (estacionar fuera de riesgo, luces de emergencia, triángulos, cortar ignición) para evitar nuevos choques o atropellos.',
      'Mover inmediatamente a todos los heridos sin revisar lesiones.',
      'Tomar fotografías para redes sociales antes de señalizar.',
      'Abandonar el lugar rápidamente.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Proteger primero al propio auxiliador, a las víctimas y al resto del tránsito previene accidentes secundarios frecuentemente más graves que el inicial.',
    distractorRationale: {
      A: 'Sin una escena asegurada y señalizada, quienes auxilian corren peligro mortal de ser atropellados.',
      B: 'Mover heridos sin capacitación puede agravar lesiones medulares.',
      C: 'Publicar imágenes no auxilia ni protege la escena.',
      D: 'Huir de un siniestro con lesionados es delito.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales VMT / MINSAL.'
  },
  {
    id: 'vmt-t297',
    category: 'teorico',
    topic: 'Protocolo P.A.S. — Significado de Avisar',
    question: 'Al ejecutar el segundo paso del protocolo P.A.S. ("Avisar" al 911 o cuerpos de socorro), ¿qué información clave debe suministrarse?',
    statement: 'Al ejecutar el segundo paso del protocolo P.A.S. ("Avisar" al 911 o cuerpos de socorro), ¿qué información clave debe suministrarse?',
    options: [
      'Únicamente decir "hubo un choque" y colgar de inmediato.',
      'Ubicación exacta (carretera, kilómetro, referencia), número y estado aparente de heridos, vehículos involucrados y riesgos (fuego, derrame).',
      'Opinar sobre quién tuvo la culpa jurídica.',
      'Solicitar primero una grúa privada antes que la ambulancia.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Dar datos precisos permite despachar ambulancias, bomberos o rescate vehicular adecuados sin retrasos por ubicación errónea.',
    distractorRationale: {
      A: 'Colgar sin dar ubicación exacta impide el envío de ayuda.',
      B: 'La claridad sobre ubicación, cantidad de víctimas y riesgos optimiza la respuesta de emergencia.',
      C: 'Los operadores de emergencia necesitan datos clínicos y geográficos, no juicios legales.',
      D: 'La vida humana siempre tiene prioridad sobre el remolque material.'
    },
    legalReference: 'Protocolo P.A.S. de Emergencias Viales VMT / MINSAL.'
  },
  {
    id: 'vmt-t298',
    category: 'teorico',
    topic: 'Prohibición de Dar Agua o Alimentos a Heridos Graves',
    question: '¿Por qué está contraindicado dar agua, café o alimentos a una persona lesionada en un accidente de tránsito?',
    statement: '¿Por qué está contraindicado dar agua, café o alimentos a una persona lesionada en un accidente de tránsito?',
    options: [
      'Porque puede causar dolor de cabeza.',
      'No está contraindicado, siempre ayuda.',
      'Por riesgo de broncoaspiración/asfixia si pierde conciencia y porque complica una eventual cirugía de emergencia con anestesia.',
      'Solo por higiene.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Un traumatizado puede requerir anestesia general urgente o sufrir vómitos; ingerir líquidos puede provocar aspiración pulmonar mortal.',
    distractorRationale: {
      A: 'El peligro es respiratorio y quirúrgico, no cefalea.',
      B: 'Dar líquidos a un politraumatizado es un error grave de primeros auxilios.',
      C: 'Se debe mantener al herido abrigado, calmado y sin ingerir nada por boca.',
      D: 'Responde a criterios médicos de vía aérea y anestesia.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales MINSAL / OMS.'
  },
  {
    id: 'vmt-t299',
    category: 'teorico',
    topic: 'Cuándo Mover Excepcionalmente a un Herido',
    question: 'Como regla general no debe moverse a un herido tras un choque; ¿en qué única situación extrema es obligatorio evacuarlo de inmediato?',
    statement: 'Como regla general no debe moverse a un herido tras un choque; ¿en qué única situación extrema es obligatorio evacuarlo de inmediato?',
    options: [
      'Para despejar el tráfico rápidamente.',
      'Para sentarlo en la acera a descansar.',
      'Cuando pida que lo lleven en carro particular.',
      'Cuando exista peligro inminente de muerte en el sitio (incendio del vehículo, riesgo de explosión, derrumbe o inundación).'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Solo ante amenaza vital inmediata (fuego o explosión) se justifica extraer a la víctima procurando mantener alineado el eje cabeza-cuello-espalda.',
    distractorRationale: {
      A: 'La fluidez vehicular jamás prima sobre la integridad medular de un herido.',
      B: 'Sentar a alguien con posible fractura vertebral puede causar parálisis.',
      C: 'El traslado inadecuado sin inmovilización agrava lesiones internas.',
      D: 'La extracción de emergencia aplica solo ante riesgo letal inminente.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales MINSAL.'
  },
  {
    id: 'vmt-t300',
    category: 'teorico',
    topic: 'Ley FONAT — Finalidad y Beneficiarios',
    question: '¿Cuál es el objetivo humanitario del Fondo para la Atención a las Víctimas de Accidentes de Tránsito (FONAT) en El Salvador?',
    statement: '¿Cuál es el objetivo humanitario del Fondo para la Atención a las Víctimas de Accidentes de Tránsito (FONAT) en El Salvador?',
    options: [
      'Brindar prestación económica solidaria a personas lesionadas o familiares de fallecidos en siniestros viales y promover la prevención.',
      'Pagar las reparaciones de pintura de automóviles.',
      'Financiar multas de conductores ebrios.',
      'Vender seguros privados de lujo.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El FONAT otorga compensación social directa a víctimas de siniestros viales (peatones, pasajeros o conductores no responsables/conforme a ley) y ejecuta campañas preventivas.',
    distractorRationale: {
      A: 'La Ley FONAT tiene enfoque de protección social a víctimas humanas y seguridad vial.',
      B: 'No cubre daños materiales de latonería o pintura.',
      C: 'Jamás financia multas ni exime a infractores.',
      D: 'Es un fondo público solidario, no una aseguradora comercial.'
    },
    legalReference: 'Ley del Fondo para la Atención a las Víctimas de Accidentes de Tránsito (FONAT).'
  },
  {
    id: 'vmt-t301',
    category: 'teorico',
    topic: 'Inspección de la Escena Tras Siniestro — Derrame de Combustible',
    question: 'Si tras un choque se percibe fuerte olor a gasolina o derrame de combustible sobre el pavimento, ¿qué acción es fundamental?',
    statement: 'Si tras un choque se percibe fuerte olor a gasolina o derrame de combustible sobre el pavimento, ¿qué acción es fundamental?',
    options: [
      'Encender un cigarrillo para calmar los nervios.',
      'Apagar los motores de los vehículos cercanos, prohibir chispas o llamas, alejar a las personas y avisar a bomberos.',
      'Usar bengalas de fuego junto al charco de gasolina.',
      'Lavar el derrame con agua caliente.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Los vapores de gasolina son altamente inflamables; cualquier chispa eléctrica, cigarrillo o bengala puede desencadenar una explosión.',
    distractorRationale: {
      A: 'Fumar cerca de un derrame de combustible provoca ignición inmediata.',
      B: 'Cortar fuentes de ignición y evacuar el perímetro previene incendios.',
      C: 'Las bengalas de llama abierta son incompatibles con derrames inflamables.',
      D: 'El agua esparce el combustible flotante.'
    },
    legalReference: 'Manual de Emergencias Viales VMT y Bomberos.'
  },
  {
    id: 'vmt-t302',
    category: 'teorico',
    topic: 'Verificación de Conciencia y Respiración en Víctima',
    question: 'Al evaluar inicialmente a un herido consciente o inconsciente sin moverle el cuello, ¿qué signos vitales básicos deben comprobarse?',
    statement: 'Al evaluar inicialmente a un herido consciente o inconsciente sin moverle el cuello, ¿qué signos vitales básicos deben comprobarse?',
    options: [
      'Si recuerda su número de placa.',
      'La temperatura de los neumáticos.',
      'Si responde al llamado verbal/estímulo suave y si respira normalmente observando el movimiento del tórax.',
      'El saldo de su teléfono.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Comprobar conciencia y respiración sin movilizar la columna cervical permite informar con precisión al 911 y actuar ante paro cardiorrespiratorio si se está capacitado.',
    distractorRationale: {
      A: 'Preguntar datos irrelevantes no evalúa riesgo vital inmediato.',
      B: 'No tiene relación con la víctima.',
      C: 'El nivel de respuesta y la respiración normal son los pilares de la valoración primaria.',
      D: 'Carece de utilidad clínica.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales MINSAL.'
  },
  {
    id: 'vmt-t303',
    category: 'teorico',
    topic: 'Objeto Incrustado en Herida — Qué No Hacer',
    question: 'Si una víctima presenta un fragmento de vidrio o metal firmemente incrustado en el cuerpo tras un choque, ¿qué debe hacerse?',
    statement: 'Si una víctima presenta un fragmento de vidrio o metal firmemente incrustado en el cuerpo tras un choque, ¿qué debe hacerse?',
    options: [
      'Arrancarlo de un tirón rápido.',
      'Empujarlo más adentro.',
      'Lavar con gasolina.',
      'NO extraerlo; estabilizarlo alrededor con gasas o paños limpios para que no se mueva hasta la atención hospitalaria.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El objeto incrustado puede estar taponando un vaso sanguíneo importante; retirarlo en la escena puede desatar una hemorragia fatal.',
    distractorRationale: {
      A: 'Extraerlo puede provocar hemorragia masiva incontrolable.',
      B: 'Empujarlo lesiona más tejidos internos.',
      C: 'Jamás aplicar sustancias tóxicas o combustibles en heridas.',
      D: 'Inmovilizar el objeto en su sitio salva la vida hasta llegar a quirófano.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales MINSAL.'
  },
  {
    id: 'vmt-t304',
    category: 'teorico',
    topic: 'Procedimiento Ante Choque Solo con Daños Materiales Leves',
    question: 'En un percance vial donde NO hay personas lesionadas ni fallecidas y ambos conductores poseen documentos en regla y voluntad de arreglo, ¿qué procede conforme a ley?',
    statement: 'En un percance vial donde NO hay personas lesionadas ni fallecidas y ambos conductores poseen documentos en regla y voluntad de arreglo, ¿qué procede conforme a ley?',
    options: [
      'Tomar fotografías rápidas, mover los vehículos para no obstruir la vía si es seguro, y esperar a la PNC-DTT o aseguradoras para acta de conciliación.',
      'Dejar los autos atravesados tres horas bloqueando una arteria principal aunque sea un raspón mínimo.',
      'Pelear a golpes en la calzada.',
      'Huir antes de que llegue la policía.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'En daños materiales menores sin lesionados, documentar la posición y despejar la vía evita embotellamientos severos y accidentes secundarios, formalizando luego la conciliación.',
    distractorRationale: {
      A: 'La ley permite la conciliación de daños materiales y promueve evitar obstrucciones innecesarias.',
      B: 'Bloquear innecesariamente una vía rápida por un roce leve provoca choques secundarios.',
      C: 'La violencia física constituye delito.',
      D: 'Irse sin arreglar o sin autoridad expone a denuncias por daños y fuga.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y Procedimiento PNC-DTT.'
  },
  {
    id: 'vmt-t305',
    category: 'teorico',
    topic: 'Obligación de Auxilio a Víctimas (Art. 175 Código Penal)',
    question: '¿Qué responsabilidad legal incurre un conductor que, tras atropellar o lesionar a alguien en un accidente, huye del lugar sin prestar ni gestionar auxilio?',
    statement: '¿Qué responsabilidad legal incurre un conductor que, tras atropellar o lesionar a alguien en un accidente, huye del lugar sin prestar ni gestionar auxilio?',
    options: [
      'Ninguna si nadie anotó la placa.',
      'Agravación penal significativa por fuga/omisión del deber de socorro, además de pérdida de beneficios procesales.',
      'Solo una multa leve de $50.',
      'Un descuento en la esquela.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La fuga tras causar lesiones o muerte agrava la pena e impide medidas sustitutivas, además de configurar omisión de auxilio.',
    distractorRationale: {
      A: 'Las cámaras, testigos y peritajes permiten identificar vehículos fugados.',
      B: 'Permanecer en el lugar, proteger y gestionar auxilio médico es obligación moral y legal.',
      C: 'Es un hecho penal grave, no una falta leve.',
      D: 'Al contrario, elimina atenuantes.'
    },
    legalReference: 'Código Penal Art. 132, Art. 147-E y Art. 175; LTTTSV.'
  },
  {
    id: 'vmt-t306',
    category: 'teorico',
    topic: 'Atención a Víctima Con Sospecha de Lesión Cervical',
    question: 'Si una persona sufrió un impacto violento en automóvil o motocicleta y refiere dolor de cuello o espalda, ¿cómo debe mantenerse su cabeza?',
    statement: 'Si una persona sufrió un impacto violento en automóvil o motocicleta y refiere dolor de cuello o espalda, ¿cómo debe mantenerse su cabeza?',
    options: [
      'Girándola de lado a lado para probar si duele.',
      'Sentándola inmediatamente.',
      'Completamente inmóvil y alineada en posición neutra sin flexionar ni rotar el cuello hasta que lleguen paramédicos.',
      'Colocándole una almohada muy alta bajo la nuca.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Cualquier rotación o flexión innecesaria de una vértebra cervical fracturada puede seccionar la médula espinal causando tetraplejía o muerte.',
    distractorRationale: {
      A: 'Probar movilidad en sospecha de trauma cervical es extremadamente peligroso.',
      B: 'Sentar a la víctima comprime la columna lesionada.',
      C: 'La estabilización manual neutra protege la médula espinal.',
      D: 'Una almohada alta flexiona el cuello hacia adelante.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales MINSAL.'
  },
  {
    id: 'vmt-t307',
    category: 'teorico',
    topic: 'Prevención de Hipotermia / Shock en Heridos',
    question: 'Mientras llega la ambulancia en un accidente vial, ¿por qué se recomienda cubrir suavemente al lesionado con una manta o chaqueta ligera?',
    statement: 'Mientras llega la ambulancia en un accidente vial, ¿por qué se recomienda cubrir suavemente al lesionado con una manta o chaqueta ligera?',
    options: [
      'Para ocultarlo de los testigos.',
      'Para hacerlo sudar.',
      'No debe cubrirse nunca.',
      'Para conservar su temperatura corporal y prevenir la hipotermia que agrava el estado de shock hipovolémico.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Las personas con pérdida de sangre o shock pierden rápidamente calor corporal; mantenerlas abrigadas sin sofocarlas estabiliza su condición.',
    distractorRationale: {
      A: 'La finalidad es estrictamente fisiológica y médica.',
      B: 'No se busca sobrecalentamiento sino evitar pérdida térmica.',
      C: 'La pérdida de calor empeora la coagulación y el shock.',
      D: 'Mantener la temperatura estable es medida básica de soporte en trauma.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales MINSAL.'
  },
  {
    id: 'vmt-t308',
    category: 'teorico',
    topic: 'Evaluación de Víctimas en Choque con Cables Eléctricos Caídos',
    question: 'Si un vehículo choca contra un poste y caen cables eléctricos energizados sobre la carrocería, ¿qué debe hacer quien está dentro del auto (si no hay fuego)?',
    statement: 'Si un vehículo choca contra un poste y caen cables eléctricos energizados sobre la carrocería, ¿qué debe hacer quien está dentro del auto (si no hay fuego)?',
    options: [
      'Permanecer dentro del vehículo sin tocar partes metálicas conectadas al exterior, llamar al 911/empresa eléctrica y advertir a otros que no se acerquen.',
      'Bajar apoyando un pie en el suelo y la mano en la puerta metálica.',
      'Tomar el cable con las manos para apartarlo.',
      'Caminar descalzo alrededor del auto.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Los neumáticos aíslan parcialmente la cabina mientras se permanezca dentro; tocar simultáneamente el metal del auto y el suelo cierra el circuito eléctrico mortal.',
    distractorRationale: {
      A: 'Dentro del habitáculo se está más seguro hasta que personal eléctrico corte la energía.',
      B: 'Tocar auto y suelo simultáneamente produce electrocución inmediata.',
      C: 'Manipular cables energizados es fatal.',
      D: 'El suelo alrededor de cables caídos puede tener tensión de paso peligrosa.'
    },
    legalReference: 'Manual de Emergencias Eléctricas en Vía Pública VMT / SIGET.'
  },
  {
    id: 'vmt-t309',
    category: 'teorico',
    topic: 'Control de Hemorragia Externa — Qué Hacer si el Apósito se Empapa',
    question: 'Al aplicar presión directa con un paño limpio sobre una herida sangrante y observar que la sangre empapa la primera tela, ¿qué debe hacerse?',
    statement: 'Al aplicar presión directa con un paño limpio sobre una herida sangrante y observar que la sangre empapa la primera tela, ¿qué debe hacerse?',
    options: [
      'Arrancar el primer paño y dejar la herida abierta al aire.',
      'Colocar otro apósito limpio encima del primero sin retirarlo y continuar manteniendo presión firme constante.',
      'Lavar con alcohol etílico a chorro.',
      'Aplicar tierra o café molido.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Retirar la primera gasa destruye el coágulo que comienza a formarse; añadir capas encima conserva la presión hemostática.',
    distractorRationale: {
      A: 'Quitar el primer paño reinicia el sangrado activo.',
      B: 'Superponer apósitos y mantener presión continua favorece la coagulación.',
      C: 'El alcohol daña tejido expuesto y no detiene hemorragias.',
      D: 'Aplicar sustancias caseras provoca infecciones graves (tétanos/sepsis).'
    },
    legalReference: 'Manual de Primeros Auxilios Viales MINSAL.'
  },
  {
    id: 'vmt-t310',
    category: 'teorico',
    topic: 'Distancia de Colocación de Triángulos Reflectivos en Carretera Rápida',
    question: 'En una carretera interurbana rápida (80-90 km/h) de doble sentido, ¿dónde deben colocarse los triángulos reflectivos si un vehículo queda inmovilizado?',
    statement: 'En una carretera interurbana rápida (80-90 km/h) de doble sentido, ¿dónde deben colocarse los triángulos reflectivos si un vehículo queda inmovilizado?',
    options: [
      'A 1 metro del parachoques trasero.',
      'Dentro del baúl con la tapa abierta.',
      'Al menos a 50 metros atrás (y antes de una curva si el auto quedó tras ella) y otro adelante si es doble sentido visible.',
      'En el carril contrario.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'A 90 km/h se recorren 25 metros por segundo; colocar triángulos a 50-100 m atrás brinda varios segundos adicionales de advertencia a otros conductores.',
    distractorRationale: {
      A: 'A 1 metro el conductor que se aproxima no tiene tiempo alguno de frenar.',
      B: 'Dentro del baúl no son visibles ni anticipan la posición.',
      C: 'Si el auto quedó justo después de una curva, el triángulo debe ir antes de la curva.',
      D: 'Debe señalizarse el propio sentido de aproximación.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 43.'
  },
  {
    id: 'vmt-t311',
    category: 'teorico',
    topic: 'Botiquín de Primeros Auxilios en Vehículos',
    question: '¿Qué insumos básicos es recomendable mantener vigentes en el botiquín vehicular de emergencias?',
    statement: '¿Qué insumos básicos es recomendable mantener vigentes en el botiquín vehicular de emergencias?',
    options: [
      'Antibióticos inyectables y bisturíes.',
      'Solo pastillas para el mareo.',
      'Bebidas energéticas.',
      'Guantes desechables, gasas estériles, vendas elásticas, esparadrapo, tijera punta roma, suero/agua limpia y manta térmica.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Un botiquín vial seguro se enfoca en bioseguridad (guantes), control de hemorragias (gasas/vendas) y curación básica sin medicación invasiva.',
    distractorRationale: {
      A: 'La medicación parenteral y cirugía corresponden solo a personal médico.',
      B: 'No sirven para trauma ni hemorragias.',
      C: 'No son insumos médicos.',
      D: 'Los guantes protegen al auxiliador de fluidos biológicos y las gasas controlan sangrados.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales VMT / MINSAL.'
  },
  {
    id: 'vmt-t312',
    category: 'teorico',
    topic: 'Uso de Chaleco Reflectivo al Bajar en Carretera',
    question: '¿Por qué es indispensable ponerse un chaleco reflectivo antes de descender del vehículo averiado en carretera nocturna?',
    statement: '¿Por qué es indispensable ponerse un chaleco reflectivo antes de descender del vehículo averiado en carretera nocturna?',
    options: [
      'Para ser visible a más de 150 metros bajo los faros de otros vehículos y evitar ser atropellado.',
      'Para abrigarse del frío únicamente.',
      'Para dirigir el tráfico como agente policial.',
      'No tiene utilidad si hay luna llena.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Un peatón con ropa oscura apenas es visible a 25-30 metros de noche; con chaleco reflectivo se detecta a más de 150 metros.',
    distractorRationale: {
      A: 'Aumenta drásticamente el tiempo de reacción de los conductores que se aproximan.',
      B: 'Su propósito es visibilidad óptica, no térmico.',
      C: 'No otorga autoridad policial, sino protección personal.',
      D: 'La luz lunar no sustituye las bandas retrorreflectivas.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-t313',
    category: 'teorico',
    topic: 'Quemaduras por Radiador Caliente en Ruta',
    question: 'Si el motor se recalienta en carretera y sale vapor del radiador, ¿qué acción es altamente peligrosa y debe evitarse?',
    statement: 'Si el motor se recalienta en carretera y sale vapor del radiador, ¿qué acción es altamente peligrosa y debe evitarse?',
    options: [
      'Orillarse, apagar el motor y esperar a que enfríe por completo.',
      'Abrir de golpe el tapón del radiador mientras está caliente y bajo presión, pues proyectará agua hirviendo causando quemaduras graves.',
      'Encender las luces intermitentes.',
      'Revisar visualmente el depósito auxiliar sin abrirlo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El sistema de refrigeración trabaja presurizado sobre 100 °C; liberar la presión de golpe hace hervir instantáneamente el líquido hacia el rostro y manos.',
    distractorRationale: {
      A: 'Esperar a que enfríe es la única conducta segura.',
      B: 'Evitar abrir el tapón caliente previene quemaduras de segundo y tercer grado.',
      C: 'Las intermitentes son obligatorias al detenerse por falla.',
      D: 'La inspección visual externa sin destapar es segura.'
    },
    legalReference: 'Manual de Emergencias Mecánicas VMT.'
  },
  {
    id: 'vmt-t314',
    category: 'teorico',
    topic: 'Prueba de Alcotest en Accidentes Con Lesionados',
    question: 'Cuando ocurre un siniestro vial con personas lesionadas o fallecidas, ¿qué verificación realiza obligatoriamente la PNC-DTT a los conductores involucrados?',
    statement: 'Cuando ocurre un siniestro vial con personas lesionadas o fallecidas, ¿qué verificación realiza obligatoriamente la PNC-DTT a los conductores involucrados?',
    options: [
      'Únicamente revisión de la presión de llantas.',
      'Solo verificación del color del auto.',
      'Prueba de alcotest/toxicológica, verificación de licencias, tarjetas de circulación e inspección técnica de la escena.',
      'Ninguna si uno de los conductores dice estar apurado.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El levantamiento del parte policial en siniestros con víctimas incluye pruebas de alcoholemia obligatorias y fijación técnica de evidencias.',
    distractorRationale: {
      A: 'La investigación abarca alcoholemia, documentación y cinemática del hecho.',
      B: 'Es un dato accesorio identificativo.',
      C: 'Descartar o confirmar alcohol/drogas determina la tipificación penal del caso.',
      D: 'Nadie puede retirarse ni eludir pruebas por prisa personal.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y Protocolo PNC-DTT.'
  },
  {
    id: 'vmt-t315',
    category: 'teorico',
    topic: 'Derecho de Paso de Brigadas de Socorro en Escena Vial',
    question: 'Al circular por una carretera donde ya trabajan ambulancias, bomberos y patrullas atendiendo un accidente previo, ¿qué debe hacer?',
    statement: 'Al circular por una carretera donde ya trabajan ambulancias, bomberos y patrullas atendiendo un accidente previo, ¿qué debe hacer?',
    options: [
      'Detenerse a grabar video desde la ventanilla bloqueando el carril.',
      'Acelerar pasando cerca de los socorristas.',
      'Tocar la bocina para que muevan la ambulancia.',
      'Reducir la velocidad, obedecer al agente que dirige el tránsito y avanzar sin distraerse mirando el accidente ("efecto mirón").'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El "efecto mirón" (bajar velocidad para grabar o curiosear) genera colisiones por alcance y bloquea la llegada de refuerzos de emergencia.',
    distractorRationale: {
      A: 'Grabar mientras conduce distrae, bloquea la vía y expone a otro choque.',
      B: 'Pasar rápido junto a personal de socorro pone sus vidas en peligro.',
      C: 'Los equipos de emergencia tienen prioridad absoluta operativa.',
      D: 'Obedecer indicaciones y mantener la vista al frente protege la escena.'
    },
    legalReference: 'Manual de Seguridad Vial VMT; D.E. 61.'
  },
  {
    id: 'vmt-t316',
    category: 'teorico',
    topic: 'Aseguramiento de Testigos y Evidencia en Siniestros',
    question: 'Si usted presencia un siniestro vial grave con fuga del responsable, ¿qué información es más valiosa aportar de inmediato al 911 o PNC-DTT?',
    statement: 'Si usted presencia un siniestro vial grave con fuga del responsable, ¿qué información es más valiosa aportar de inmediato al 911 o PNC-DTT?',
    options: [
      'Número de placa (aunque sea parcial), marca, color, tipo de vehículo, dirección de huida y hora exacta.',
      'El precio estimado del vehículo fugado.',
      'Una persecución temeraria por cuenta propia a 140 km/h.',
      'Publicar rumores sin verificar.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Aportar datos objetivos de identificación y dirección de escape permite a la PNC activar cercos de búsqueda sin poner en riesgo a terceros.',
    distractorRationale: {
      A: 'Los datos precisos de placa y ruta facilitan la localización policial inmediata.',
      B: 'El valor comercial no ayuda a interceptar el vehículo.',
      C: 'Las persecuciones civiles a alta velocidad suelen causar segundos accidentes fatales.',
      D: 'La autoridad requiere información veraz y precisa.'
    },
    legalReference: 'Protocolo de Colaboración Ciudadana PNC-DTT / VMT.'
  },
  {
    id: 'vmt-t317',
    category: 'teorico',
    topic: 'Prevención de Lesiones Secundarias en Motociclista Caído',
    question: 'Si un motociclista cae en la calzada y queda consciente, ¿cuándo puede retirársele el casco protector en el lugar del accidente?',
    statement: 'Si un motociclista cae en la calzada y queda consciente, ¿cuándo puede retirársele el casco protector en el lugar del accidente?',
    options: [
      'Siempre, de un tirón rápido para que respire aire fresco.',
      'Únicamente si lo realiza personal paramédico capacitado con técnica de inmovilización cervical, o si no respira y obstruye reanimación.',
      'Apenas llegue cualquier curioso.',
      'Antes de verificar si hay tráfico.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Quitar el casco sin estabilizar el cuello genera tracción cervical brusca; si respira y está consciente, se deja el casco puesto y se abre solo la visera.',
    distractorRationale: {
      A: 'Tirar del casco puede agravar fatalmente una lesión en vértebras cervicales.',
      B: 'Abrir la visera permite ventilación y comunicación sin arriesgar la médula.',
      C: 'Solo personal entrenado debe retirar el casco.',
      D: 'Primero debe protegerse la escena contra el tránsito.'
    },
    legalReference: 'Manual de Primeros Auxilios Viales MINSAL.'
  },
  {
    id: 'vmt-t318',
    category: 'teorico',
    topic: 'Responsabilidad Civil por Daños a Infraestructura Pública',
    question: 'Si en un accidente de tránsito un conductor derriba un poste de alumbrado, semáforo o baranda vial pública, ¿qué obligación asume?',
    statement: 'Si en un accidente de tránsito un conductor derriba un poste de alumbrado, semáforo o baranda vial pública, ¿qué obligación asume?',
    options: [
      'Ninguna, el Estado siempre asume el costo sin cobro.',
      'Solo pagar $10.',
      'Responder civilmente (directamente o mediante su seguro) por la reparación o reposición de la infraestructura pública dañada.',
      'Únicamente recoger los escombros.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los daños a semáforos, postes, señales y puentes generan responsabilidad civil patrimonial a cargo del conductor responsable o su aseguradora.',
    distractorRationale: {
      A: 'Quien causa el daño por culpa o negligencia debe resarcir al Estado o concesionario.',
      B: 'Un semáforo o poste representa costos de miles de dólares.',
      C: 'Las pólizas de responsabilidad civil frente a terceros suelen cubrir daños a bienes públicos.',
      D: 'Limpiar no sustituye la reparación económica del bien destruido.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y Código Civil.'
  },
  {
    id: 'vmt-t319',
    category: 'teorico',
    topic: 'Campañas de Educación Vial FONAT — Público Objetivo',
    question: 'Además de la asistencia económica a víctimas, ¿qué otra función preventiva estratégica asigna la ley al FONAT?',
    statement: 'Además de la asistencia económica a víctimas, ¿qué otra función preventiva estratégica asigna la ley al FONAT?',
    options: [
      'Emitir licencias de conducir.',
      'Cobrar impuestos municipales.',
      'Vender repuestos automotrices.',
      'Desarrollar programas nacionales de educación, concienciación y prevención de accidentes de tránsito en coordinación con el VMT.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El FONAT impulsa campañas educativas, observatorio vial y prevención de siniestralidad junto al Viceministerio de Transporte y el CONASEVI.',
    distractorRationale: {
      A: 'La emisión de licencias compete al VMT y organismo evaluador autorizado.',
      B: 'No es una entidad tributaria municipal.',
      C: 'No realiza actividades comerciales.',
      D: 'La prevención y educación vial reducen la siniestralidad y el número de víctimas.'
    },
    legalReference: 'Ley FONAT y Política Nacional de Seguridad Vial VMT.'
  },
  // ==========================================================================
  // EXPANSIÓN UNIDAD 9: CARGA PESADA, CABEZALES, FRENOS DE AIRE Y D.E. 23 (+31)
  // ==========================================================================
  {
    id: 'vmt-t320',
    category: 'teorico',
    topic: 'Verificación de Frenos de Aire — Prueba de Pérdida de Presión',
    question: 'En la inspección pre-viaje de un cabezal con frenos neumáticos, con el motor apagado y los frenos de estacionamiento liberados, ¿cuál es la pérdida máxima de presión aceptable sin pisar el pedal en un minuto?',
    statement: 'En la inspección pre-viaje de un cabezal con frenos neumáticos, con el motor apagado y los frenos de estacionamiento liberados, ¿cuál es la pérdida máxima de presión aceptable sin pisar el pedal en un minuto?',
    options: [
      'No más de 2 PSI para vehículo sencillo o 3 PSI para combinación articulada (cabezal + remolque) en un minuto.',
      'Hasta 25 PSI por minuto.',
      'Hasta 50 PSI por minuto.',
      'No importa si baja toda la presión.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Una fuga superior a 2-3 PSI/min sin aplicar el freno indica mangueras dañadas, sellos rotos o válvulas defectuosas que pueden causar falla total en descenso.',
    distractorRationale: {
      A: 'La prueba de estanqueidad (leak test) detecta fugas antes de salir a carretera.',
      B: 'Una caída de 25 PSI/min vaciaría los tanques en minutos.',
      C: 'Sería una fuga catastrófica que activaría los frenos de resorte de emergencia.',
      D: 'La integridad neumática es vital en carga pesada.'
    },
    legalReference: 'Manual Técnico de Frenos de Aire y Carga Pesada VMT.'
  },
  {
    id: 'vmt-t321',
    category: 'teorico',
    topic: 'Activación Automática de Frenos de Resorte (Spring Brakes)',
    question: 'Si ocurre una fuga grave y la presión de aire en los tanques cae peligrosamente (generalmente entre 20 y 45 PSI), ¿qué sucede automáticamente en un vehículo pesado?',
    statement: 'Si ocurre una fuga grave y la presión de aire en los tanques cae peligrosamente (generalmente entre 20 y 45 PSI), ¿qué sucede automáticamente en un vehículo pesado?',
    options: [
      'El camión acelera solo.',
      'La válvula protectora salta y se aplican automáticamente los frenos de resorte de emergencia bloqueando las ruedas.',
      'Se apagan los faros delanteros.',
      'Se desacopla la quinta rueda.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Los frenos de estacionamiento/emergencia funcionan mediante resortes potentes retenidos por aire; al perderse el aire, los resortes se expanden y frenan las ruedas.',
    distractorRationale: {
      A: 'El sistema de seguridad neumático detiene el vehículo, nunca lo acelera.',
      B: 'Este diseño a prueba de fallos ("fail-safe") evita que un camión sin aire quede sin frenos.',
      C: 'No desconecta el sistema eléctrico de iluminación.',
      D: 'La quinta rueda permanece mecánicamente trabada.'
    },
    legalReference: 'Manual Técnico de Frenos de Aire VMT.'
  },
  {
    id: 'vmt-t322',
    category: 'teorico',
    topic: 'Drenaje Diario de Tanques de Aire (Humedad y Aceite)',
    question: '¿Por qué es obligatorio purgar o drenar diariamente las válvulas inferiores de los tanques de aire en un camión o cabezal?',
    statement: '¿Por qué es obligatorio purgar o drenar diariamente las válvulas inferiores de los tanques de aire en un camión o cabezal?',
    options: [
      'Para vaciar el aire por completo antes de dormir.',
      'Para cambiar el color del tanque.',
      'Para expulsar el agua condensada y aceite que el compresor acumula, evitando corrosión y fallas de válvulas de freno.',
      'Únicamente una vez cada cinco años.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El aire comprimido condensa humedad ambiental; si el agua y aceite del compresor no se purgan, forman lodo que obstruye y corroe las válvulas neumáticas.',
    distractorRationale: {
      A: 'El propósito es drenar condensados líquidos, no desperdiciar aire sin razón.',
      B: 'Es mantenimiento funcional interno.',
      C: 'Purgar las llaves de drenaje garantiza aire seco y limpio en el circuito.',
      D: 'Debe hacerse al final de cada jornada diaria.'
    },
    legalReference: 'Manual de Mantenimiento de Transporte Pesado VMT.'
  },
  {
    id: 'vmt-t323',
    category: 'teorico',
    topic: 'Función de las Válvulas Amarilla y Roja en Tablero de Cabezal',
    question: 'En la cabina de un tractocamión, ¿qué controlan respectivamente la válvula de perilla amarilla (rombo) y la perilla roja (octágono)?',
    statement: 'En la cabina de un tractocamión, ¿qué controlan respectivamente la válvula de perilla amarilla y la perilla roja (octágono)?',
    options: [
      'Amarilla: luces bajas; Roja: limpiaparabrisas.',
      'Amarilla: aire acondicionado; Roja: bocina de aire.',
      'Amarilla: radio de comunicación; Roja: quinta rueda.',
      'Amarilla: frenos de estacionamiento del cabezal/combinación; Roja: suministro de aire hacia el semirremolque.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Estándar internacional de cabinas neumáticas: la perilla amarilla controla el freno de parqueo del tractor y la roja octogonal el suministro neumático al tráiler.',
    distractorRationale: {
      A: 'No controlan iluminación ni limpiaparabrisas.',
      B: 'No controlan climatización ni claxon.',
      C: 'No operan comunicaciones ni el destrabe de quinta rueda.',
      D: 'Conocer ambas válvulas es indispensable para acoplar, desacoplar y estacionar con seguridad.'
    },
    legalReference: 'Manual de Operación de Licencia Pesada T VMT.'
  },
  {
    id: 'vmt-t324',
    category: 'teorico',
    topic: 'Efecto Tijera (Jackknife) en Tractocamiones',
    question: '¿Qué provoca el peligroso fenómeno de "efecto tijera" (jackknife) en un cabezal con semirremolque?',
    statement: '¿Qué provoca el peligroso fenómeno de "efecto tijera" (jackknife) en un cabezal con semirremolque?',
    options: [
      'El bloqueo de las ruedas motrices del cabezal (especialmente en mojado o frenada brusca en curva), haciendo que el remolque empuje la cabina plegándose en ángulo agudo.',
      'Circular a 20 km/h en línea recta seca.',
      'Llevar las luces bajas encendidas.',
      'Tener la presión de aire en 110 PSI.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Cuando las llantas tractoras pierden adherencia y se bloquean, la enorme inercia del remolque sigue avanzando y empuja lateralmente la cabina.',
    distractorRationale: {
      A: 'Frenar suavemente con anticipación y verificar el ABS del tractor/tráiler previene el tijereteo.',
      B: 'A baja velocidad en línea recta seca no ocurre sobreviraje articulado.',
      C: 'Las luces no tienen relación dinámica.',
      D: '110 PSI es presión normal de operación.'
    },
    legalReference: 'Manual de Conducción de Vehículos Articulados VMT.'
  },
  {
    id: 'vmt-t325',
    category: 'teorico',
    topic: 'Verificación Física del Acople de Quinta Rueda (Prueba de Tirón)',
    question: 'Después de retroceder el cabezal bajo el semirremolque hasta oír el "clic" de la quinta rueda, ¿qué comprobación física obligatoria debe hacerse antes de circular?',
    statement: 'Después de retroceder el cabezal bajo el semirremolque hasta oír el "clic" de la quinta rueda, ¿qué comprobación física obligatoria debe hacerse antes de circular?',
    options: [
      'Confiar únicamente en el sonido del clic y acelerar.',
      'Inspeccionar visualmente con linterna que no haya luz/espacio entre platos, que las mordazas abracen el king pin, palanca cerrada y hacer prueba suave de tirón.',
      'Subir los patines antes de revisar el acople.',
      'Desconectar la manguera roja.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Un falso acople puede soltar el furgón en plena carretera; la inspección visual debajo del plato más el tirón suave (tug test) garantizan cierre total.',
    distractorRationale: {
      A: 'El sonido puede engañar si la grasa sucia o hielo impiden el cierre completo de mordazas.',
      B: 'La doble verificación visual y mecánica es norma obligatoria de seguridad.',
      C: 'Si se suben los patines antes de verificar y el acople falló, el furgón caerá al suelo.',
      D: 'La manguera roja debe conectarse y suministrar aire tras verificar el acople.'
    },
    legalReference: 'Manual de Operación de Licencia Pesada T VMT.'
  },
  {
    id: 'vmt-t326',
    category: 'teorico',
    topic: 'Cable Eléctrico de 7 Vías en Semirremolque',
    question: '¿Qué función cumple el cable eléctrico umbilical de 7 vías (pigtail) conectado entre el cabezal y el semirremolque?',
    statement: '¿Qué función cumple el cable eléctrico umbilical de 7 vías (pigtail) conectado entre el cabezal y el semirremolque?',
    options: [
      'Suministrar aire comprimido a las cámaras de freno.',
      'Sostener el peso del furgón en las curvas.',
      'Alimentar las luces de posición, freno, direccionales, retroceso, placa y el sistema ABS del semirremolque.',
      'Bombear diésel del furgón al cabezal.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El conector de 7 vías transmite corriente para toda la señalización luminosa trasera y lateral del remolque y su módulo ABS.',
    distractorRationale: {
      A: 'El aire comprimido circula por las mangueras neumáticas roja y azul.',
      B: 'El peso se apoya en la quinta rueda y king pin.',
      C: 'Un cable flojo o sulfatado deja el remolque a oscuras por detrás.',
      D: 'Los furgones no bombean diésel al cabezal.'
    },
    legalReference: 'Manual Técnico de Vehículos Articulados VMT.'
  },
  {
    id: 'vmt-t327',
    category: 'teorico',
    topic: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) — Objeto',
    question: '¿Qué regula específicamente el Decreto Ejecutivo N.º 23 (Reglamento de Transporte Terrestre de Carga) en El Salvador?',
    statement: '¿Qué regula específicamente el Decreto Ejecutivo N.º 23 (Reglamento de Transporte Terrestre de Carga) en El Salvador?',
    options: [
      'Únicamente el transporte aéreo de pasajeros.',
      'Solo la circulación de bicicletas urbanas.',
      'Las tarifas de telefonía celular.',
      'Los pesos máximos por eje y total, dimensiones, estiba, permisos especiales, básculas y condiciones de seguridad del transporte de carga.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El D.E. 23 protege la infraestructura vial (puentes y carreteras) y la seguridad pública regulando pesos, dimensiones y sujeción de cargas.',
    distractorRationale: {
      A: 'La aviación civil es materia aeronáutica.',
      B: 'Las bicicletas no forman parte del transporte pesado de carga.',
      C: 'Las telecomunicaciones son competencia de SIGET.',
      D: 'Establece los límites técnicos de eje simple, tándem, trídem, T3S3 y carga sobredimensionada.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) Art. 1.'
  },
  {
    id: 'vmt-t328',
    category: 'teorico',
    topic: 'Altura Máxima Permitida Ordinaria (D.E. 23)',
    question: 'Conforme al Reglamento de Transporte Terrestre de Carga (D.E. 23), ¿cuál es la altura máxima ordinaria permitida para un vehículo de carga con su mercancía sin permiso especial?',
    statement: 'Conforme al Reglamento de Transporte Terrestre de Carga (D.E. 23), ¿cuál es la altura máxima ordinaria permitida para un vehículo de carga con su mercancía sin permiso especial?',
    options: [
      '4.10 metros (o hasta 4.15 m según configuración homologada, nunca excediendo gálibos señalizados).',
      '6.50 metros.',
      '8.00 metros.',
      '2.00 metros.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El gálibo estándar de puentes y pasarelas en la red centroamericana SIECA exige respetar el límite ordinario de 4.10 metros.',
    distractorRationale: {
      A: 'Superar 4.10 m requiere permiso especial de carga sobredimensionada y verificación de ruta.',
      B: '6.50 m impactaría contra la mayoría de pasarelas y cables.',
      C: 'Es físicamente incompatible con la infraestructura vial.',
      D: '2.00 m es menor que un furgón estándar.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) y Manual SIECA.'
  },
  {
    id: 'vmt-t329',
    category: 'teorico',
    topic: 'Ancho Máximo Ordinario de Vehículo de Carga (D.E. 23)',
    question: '¿Cuál es el ancho máximo reglamentario ordinario para vehículos de transporte de carga según el D.E. 23?',
    statement: '¿Cuál es el ancho máximo reglamentario ordinario para vehículos de transporte de carga según el D.E. 23?',
    options: [
      '1.50 metros.',
      '2.60 metros.',
      '4.50 metros.',
      '5.00 metros.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El ancho máximo ordinario de 2.60 metros garantiza que los camiones quepan dentro de los carriles estándar sin invadir flujos adyacentes.',
    distractorRationale: {
      A: '1.50 m es más angosto que un automóvil compacto.',
      B: '2.60 metros es el estándar centroamericano SIECA y del D.E. 23.',
      C: '4.50 m ocuparía más de un carril completo.',
      D: '5.00 m requeriría escolta y cierre vial especial.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) Art. 6.'
  },
  {
    id: 'vmt-t330',
    category: 'teorico',
    topic: 'Longitud Máxima de Semirremolque Estándar (D.E. 23)',
    question: '¿Cuál es la longitud máxima ordinaria de un semirremolque (furgón/plataforma) de 45 pies en el marco del D.E. 23?',
    statement: '¿Cuál es la longitud máxima ordinaria de un semirremolque (furgón/plataforma) de 45 pies en el marco del D.E. 23?',
    options: [
      '8.00 metros.',
      '25.00 metros.',
      '13.75 metros (45 pies), y longitudes combinadas totales reguladas según configuración.',
      '30.00 metros.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El D.E. 23 regula la longitud del semirremolque en 13.75 metros (45 pies) y los largos totales de trenes vehiculares para asegurar radios de giro seguros.',
    distractorRationale: {
      A: '8.00 m corresponde a camiones rígidos cortos.',
      B: '25.00 m excede la longitud ordinaria permitida en carretera convencional.',
      C: '13.75 metros es el parámetro oficial recogido en el D.E. 23.',
      D: '30.00 m no está autorizado como transporte ordinario.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23).'
  },
  {
    id: 'vmt-t331',
    category: 'teorico',
    topic: 'Sujeción y Estiba de la Carga — Riesgo de Desplazamiento',
    question: '¿Cómo debe asegurarse toda carga transportada en plataforma abierta o furgón según las normas de estiba del D.E. 23?',
    statement: '¿Cómo debe asegurarse toda carga transportada en plataforma abierta o furgón según las normas de estiba del D.E. 23?',
    options: [
      'Colocada suelta confiando en que su propio peso la sostendrá.',
      'Sujeta únicamente con una cuerda delgada de algodón.',
      'Cargada totalmente hacia un solo costado.',
      'Distribuida equilibradamente sobre los ejes y sujeta con cadenas, cinchos certificados, tensores y carpas/lonas cuando corresponda.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La mala estiba provoca desplazamiento de carga al frenar o girar, volcando el remolque o arrojando materiales sobre otros vehículos.',
    distractorRationale: {
      A: 'Las fuerzas de frenado e inercia en curva desplazan cargas pesadas aunque parezcan estables.',
      B: 'Las cuerdas delgadas se rompen ante cargas dinámicas.',
      C: 'Cargar hacia un solo lado desbalancea los ejes y facilita el vuelco.',
      D: 'La distribución uniforme y amarre certificado son obligatorios por ley.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) Art. 14 y Art. 15.'
  },
  {
    id: 'vmt-t332',
    category: 'teorico',
    topic: 'Señalización de Carga Sobresaliente Posterior',
    question: 'Si una carga indivisible autorizada sobresale levemente por la parte trasera de la plataforma dentro del margen permitido, ¿cómo debe señalizarse?',
    statement: 'Si una carga indivisible autorizada sobresale levemente por la parte trasera de la plataforma dentro del margen permitido, ¿cómo debe señalizarse?',
    options: [
      'Con banderola roja visible de día y luz/reflectivo rojo en el extremo sobresaliente de noche.',
      'No necesita ninguna señal.',
      'Con una bolsa plástica blanca.',
      'Pintando las llantas de rojo.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La carga que sobresale del borde trasero engaña a quienes circulan detrás sobre dónde termina el camión; la banderola y luz roja previenen empotramientos.',
    distractorRationale: {
      A: 'La señalización en el extremo saliente es obligatoria de día y de noche.',
      B: 'Omitir señalización en salientes provoca colisiones fatales contra vigas o varillas.',
      C: 'Las bolsas plásticas no cumplen normativa reflectiva ni cromática.',
      D: 'Pintar llantas no señala la proyección trasera.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) y D.E. 23.'
  },
  {
    id: 'vmt-t333',
    category: 'teorico',
    topic: 'Mercancías Peligrosas — Rombos de Identificación',
    question: '¿Qué función cumplen los rombos de colores con números ONU colocados en los cuatro costados de cisternas o camiones con materiales peligrosos?',
    statement: '¿Qué función cumplen los rombos de colores con números ONU colocados en los cuatro costados de cisternas o camiones con materiales peligrosos?',
    options: [
      'Son publicidad de la empresa fabricante.',
      'Identifican el tipo de riesgo (inflamable, corrosivo, tóxico, explosivo) para guiar a bomberos y autoridades en emergencias.',
      'Indican la velocidad máxima del camión.',
      'Sirven para eximir del pesaje en báscula.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La rotulación ONU/Naciones Unidas permite a los cuerpos de socorro saber desde distancia segura si el producto reacciona con agua o requiere espuma especial.',
    distractorRationale: {
      A: 'Son placas oficiales de seguridad química internacional.',
      B: 'El código de peligro evita errores mortales al atender derrames o incendios.',
      C: 'No indican velocidad.',
      D: 'Todo vehículo de carga debe cumplir controles de peso y seguridad.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) y Normativa SIECA.'
  },
  {
    id: 'vmt-t334',
    category: 'teorico',
    topic: 'Uso del Freno de Motor (Jake Brake) vs Frenos de Servicio',
    question: 'Al descender una pendiente prolongada con un cabezal cargado a 35 toneladas, ¿cómo deben emplearse el freno de motor (Jake Brake) y los frenos de aire?',
    statement: 'Al descender una pendiente prolongada con un cabezal cargado a 35 toneladas, ¿cómo deben emplearse el freno de motor (Jake Brake) y los frenos de aire?',
    options: [
      'Bajar en marcha alta pisando el freno de pie todo el camino.',
      'Colocar la caja en Neutro para bajar rápido.',
      'Seleccionar antes de la cima una marcha baja adecuada, activar el freno de motor y aplicar frenos de aire de forma intermitente y firme ("técnica de bombeo controlado") solo si sube la velocidad.',
      'Tirar de la válvula roja del tráiler.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La combinación de marcha baja + freno de motor absorbe la mayor parte de la pendiente sin recalentar los tambores de aire.',
    distractorRationale: {
      A: 'Pisar continuamente el freno de aire sobrecalienta tambores hasta perder el frenado.',
      B: 'Bajar en Neutro en un camión de 35 t es extremadamente letal.',
      C: 'Esta técnica profesional mantiene fríos los tambores para cualquier emergencia.',
      D: 'Tirar la válvula roja en marcha bloquea de golpe las ruedas del tráiler.'
    },
    legalReference: 'Manual Técnico de Conducción de Carga Pesada VMT.'
  },
  {
    id: 'vmt-t335',
    category: 'teorico',
    topic: 'Estaciones de Pesaje (Básculas VMT) — Obligación de Ingreso',
    question: 'Cuando un vehículo de carga pesada transita por una carretera donde existe una estación de pesaje oficial del VMT activa y señalizada, ¿qué debe hacer el conductor?',
    statement: 'Cuando un vehículo de carga pesada transita por una carretera donde existe una estación de pesaje oficial del VMT activa y señalizada, ¿qué debe hacer el conductor?',
    options: [
      'Acelerar por el carril izquierdo para evadir la báscula.',
      'Apagar las luces y pasar de largo.',
      'Detenerse antes de la estación y descargar mercancía en el hombro.',
      'Ingresar obligatoriamente a la báscula para verificar peso por eje y dimensiones conforme al D.E. 23.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Evadir las básculas oficiales constituye infracción grave/muy grave; el control de peso protege puentes y carreteras del colapso prematuro.',
    distractorRationale: {
      A: 'Evadir controles de peso conlleva persecución policial y sanciones severas.',
      B: 'No exime del control obligatorio.',
      C: 'Descargar en el hombro obstruye la vía y es ilícito.',
      D: 'El ingreso obligatorio verifica cumplimiento de límites por eje y tolerancia del 5%.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) Art. 8 y Art. 9.'
  },
  {
    id: 'vmt-t336',
    category: 'teorico',
    topic: 'Tolerancia de 5% en Pesaje por Eje (D.E. 23)',
    question: 'Si un camión supera el límite de peso por eje más allá de la tolerancia técnica del 5% permitida en báscula, ¿qué medida procede?',
    statement: 'Si un camión supera el límite de peso por eje más allá de la tolerancia técnica del 5% permitida en báscula, ¿qué medida procede?',
    options: [
      'Imposición de multa y obligación de reacomodar o trasbordar el exceso de carga a otro vehículo antes de continuar.',
      'Se le permite continuar sin ajuste si promete ir despacio.',
      'Se le regala combustible.',
      'Solo se le advierte verbalmente.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El sobrepeso destruye el pavimento y compromete la capacidad de frenado del camión; debe corregirse o trasbordarse antes de reanudar marcha.',
    distractorRationale: {
      A: 'El Art. 8 y siguientes del D.E. 23 ordenan sanción y corrección del exceso de peso.',
      B: 'La velocidad baja no evita el daño estructural a losas y puentes por carga excesiva por eje.',
      C: 'No existe incentivo alguno por sobrepeso.',
      D: 'Se levanta acta e infracción formal.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) Art. 8.'
  },
  {
    id: 'vmt-t337',
    category: 'teorico',
    topic: 'Distancia Mínima de Seguimiento Entre Vehículos Pesados',
    question: 'En carretera abierta, ¿qué distancia mínima deben guardar los vehículos pesados entre sí cuando circulan en caravana?',
    statement: 'En carretera abierta, ¿qué distancia mínima deben guardar los vehículos pesados entre sí cuando circulan en caravana?',
    options: [
      'Cinco metros máximo.',
      'Al menos 100 metros (o 6-8 segundos) para permitir que vehículos livianos puedan rebasar e intercalarse con seguridad.',
      'Pegados parachoques con parachoques.',
      'Un metro.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Si dos o tres furgones circulan pegados forman un muro móvil de más de 50 metros imposible de rebasar con seguridad en carreteras de dos carriles.',
    distractorRationale: {
      A: 'Cinco metros es insuficiente para frenar un camión de 30 toneladas.',
      B: 'Guardar ~100 metros permite rebases escalonados seguros y disipa calor de frenos.',
      C: 'Circular pegados bloquea la visibilidad y provoca choques en cadena.',
      D: 'Un metro es extremadamente peligroso.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) y Manual Carga Pesada VMT.'
  },
  {
    id: 'vmt-t338',
    category: 'teorico',
    topic: 'Descanso Obligatorio del Conductor Profesional de Carga',
    question: '¿Por qué es fundamental respetar jornadas máximas de conducción y pausas de descanso en el transporte de carga pesada de larga distancia?',
    statement: '¿Por qué es fundamental respetar jornadas máximas de conducción y pausas de descanso en el transporte de carga pesada de larga distancia?',
    options: [
      'Para gastar más llantas.',
      'Solo para llenar formularios sin sentido.',
      'Para prevenir la fatiga crónica y microsueños, dado que un camión dormido a 70 km/h tiene consecuencias catastróficas.',
      'Para enfriar las placas.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los conductores profesionales pasan largas horas en cabina; descansar cada 2-3 horas o según jornada evita microsueños mortales.',
    distractorRationale: {
      A: 'No guarda relación con desgaste de llantas.',
      B: 'Las bitácoras de descanso protegen vidas humanas.',
      C: 'La fatiga es una de las principales causas de salidas de vía y choques de transporte pesado.',
      D: 'Las placas no requieren enfriamiento.'
    },
    legalReference: 'Manual de Seguridad para Transporte de Carga VMT.'
  },
  {
    id: 'vmt-t339',
    category: 'teorico',
    topic: 'Transporte de Caña de Azúcar — Horarios y Seguridad (D.E. 23)',
    question: 'Según el Art. 38 del D.E. 23, ¿qué medidas específicas debe cumplir el transporte de caña de azúcar durante la zafra?',
    statement: 'Según el Art. 38 del D.E. 23, ¿qué medidas específicas debe cumplir el transporte de caña de azúcar durante la zafra?',
    options: [
      'Circular sin luces traseras.',
      'Sobrepasar libremente los 4.50 m de altura sin malla.',
      'Descargar caña en medio de la autopista.',
      'Contar con redes/mallas de contención, iluminación y reflectivos visibles, respetar límites de carga y evitar caída de tallos en la calzada.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La caída de caña en carretera y la falta de luces visibles en rastras cañeras causan graves accidentes nocturnos; el D.E. 23 exige contención y visibilidad plena.',
    distractorRationale: {
      A: 'Las rastras cañeras deben portar iluminación y cintas reflectivas impecables.',
      B: 'Están sujetas a límites de dimensiones y contención.',
      C: 'Obstruir la calzada está prohibido.',
      D: 'La estiba con redes y señalización luminosa protege a todos en época de zafra.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) Art. 38.'
  },
  {
    id: 'vmt-t340',
    category: 'teorico',
    topic: 'Verificación de Patines (Landing Gear) del Semirremolque',
    question: 'Antes de iniciar la marcha tras acoplar un semirremolque, ¿en qué posición deben quedar las patas o patines de apoyo (landing gear)?',
    statement: 'Antes de iniciar la marcha tras acoplar un semirremolque, ¿en qué posición deben quedar las patas o patines de apoyo (landing gear)?',
    options: [
      'Completamente retraídos hasta arriba y con la manivela asegurada en su soporte.',
      'Rozando el pavimento.',
      'A mitad de altura.',
      'Apoyados en el suelo.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Dejar los patines bajos provoca que golpeen túmulos, rieles o baches arrancando la estructura del remolque.',
    distractorRationale: {
      A: 'Retraer totalmente los patines y asegurar la manivela previene enganches peligrosos.',
      B: 'Rozar el pavimento genera chispas y destruye los patines.',
      C: 'A mitad de altura impactan fácilmente en rampas o desniveles.',
      D: 'Con patines en el suelo el cabezal no puede arrastrar el tráiler.'
    },
    legalReference: 'Manual de Operación de Licencia Pesada T VMT.'
  },
  {
    id: 'vmt-t341',
    category: 'teorico',
    topic: 'Altura de Puentes y Pasarelas — Planificación de Ruta',
    question: '¿Por qué un conductor de furgón alto o maquinaria sobre cama baja debe planificar su ruta verificando puentes y cables antes de salir?',
    statement: '¿Por qué un conductor de furgón alto o maquinaria sobre cama baja debe planificar su ruta verificando puentes y cables antes de salir?',
    options: [
      'Para ahorrar peajes únicamente.',
      'Para evitar quedar atrapado o derribar pasarelas, pasos a desnivel y tendido eléctrico por exceso de altura.',
      'Porque el GPS no funciona en camiones.',
      'Para circular más rápido.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Confiar en rutas de automóvil lleva a camiones altos hacia pasos inferiores bajos o calles estrechas sin salida.',
    distractorRationale: {
      A: 'La razón es estructural y de gálibo, no económica.',
      B: 'Verificar gálibos y radios de giro evita daños millonarios y colapsos viales.',
      C: 'Los GPS comunes de auto no siempre advierten alturas de puentes.',
      D: 'Busca seguridad y viabilidad física.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) Art. 20 y Art. 21.'
  },
  {
    id: 'vmt-t342',
    category: 'teorico',
    topic: 'Revisión de Tuercas y Espárragos en Ruedas Pesadas',
    question: 'Durante la inspección visual pre-viaje de las llantas duales de un cabezal, ¿qué señal visual alerta sobre tuercas flojas en los rines?',
    statement: 'Durante la inspección visual pre-viaje de las llantas duales de un cabezal, ¿qué señal visual alerta sobre tuercas flojas en los rines?',
    options: [
      'Pintura brillante y limpia.',
      'Presión de aire en 100 PSI.',
      'Rastros de óxido rojizo o polvo metálico escurriendo alrededor de las tuercas, o indicadores plásticos desalineados.',
      'Neumático frío al tacto.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El movimiento micrométrico de una tuerca floja genera fricción que expulsa polvo de óxido alrededor del asiento; si se ignora, puede desprenderse la rueda en carretera.',
    distractorRationale: {
      A: 'La limpieza sin marcas de fricción es normal.',
      B: 'Es presión neumática normal.',
      C: 'Detectar líneas de óxido o punteros desalineados previene la pérdida mortal de una rueda.',
      D: 'Es normal antes de iniciar el viaje.'
    },
    legalReference: 'Manual Técnico de Inspección Pre-Viaje Carga Pesada VMT.'
  },
  {
    id: 'vmt-t343',
    category: 'teorico',
    topic: 'Peligro de Objeto Atascado Entre Llantas Duales',
    question: '¿Por qué debe revisarse el espacio entre las dos llantas traseras duales de un camión durante las paradas en ruta?',
    statement: '¿Por qué debe revisarse el espacio entre las dos llantas traseras duales de un camión durante las paradas en ruta?',
    options: [
      'Para guardar herramientas ahí.',
      'Para medir la velocidad del viento.',
      'No es necesario revisar ese espacio.',
      'Porque una piedra grande atascada entre las llantas duales puede salir disparada como proyectil o dañar ambos flancos provocando un reventón.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Las piedras atrapadas entre neumáticos duales destruyen las paredes laterales por fricción o salen despedidas a alta velocidad contra otros vehículos.',
    distractorRationale: {
      A: 'Nunca deben colocarse objetos entre neumáticos.',
      B: 'No tiene relación.',
      C: 'Es un punto crítico de inspección en transporte pesado.',
      D: 'Retirar piedras atascadas y revisar presión evita incendios y reventones de llantas.'
    },
    legalReference: 'Manual Técnico de Inspección Pre-Viaje VMT.'
  },
  {
    id: 'vmt-t344',
    category: 'teorico',
    topic: 'Uso de Calzos (Cuñas) al Estacionar Carga Pesada',
    question: 'Al estacionar un camión o remolque desenganchado en pendiente o zona de carga/descarga, ¿qué elemento adicional a los frenos de resorte debe colocarse?',
    statement: 'Al estacionar un camión o remolque desenganchado en pendiente o zona de carga/descarga, ¿qué elemento adicional a los frenos de resorte debe colocarse?',
    options: [
      'Calzos o cuñas sólidas bloqueando las ruedas para impedir cualquier desplazamiento accidental.',
      'Únicamente una piedra pequeña o rama seca.',
      'Dejar la caja en Neutro sin frenos.',
      'Desinflar los neumáticos.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'En muelles de carga el impacto de montacargas o una fuga de aire puede mover el remolque; los calzos reglamentarios garantizan inmovilidad total.',
    distractorRationale: {
      A: 'Las cuñas reglamentarias de caucho o metal aseguran el vehículo físicamente.',
      B: 'Las piedras se parten o ruedan bajo decenas de toneladas.',
      C: 'Es extremadamente peligroso.',
      D: 'Desinflar llantas daña las carcasas y no sustituye los calzos.'
    },
    legalReference: 'Manual de Seguridad en Carga Pesada VMT.'
  },
  {
    id: 'vmt-t345',
    category: 'teorico',
    topic: 'Cintas Retrorreflectivas en Furgones y Plataformas',
    question: '¿Qué exigencia técnica rige para los costados y parte trasera de remolques, furgones y camiones de carga respecto a visibilidad nocturna?',
    statement: '¿Qué exigencia técnica rige para los costados y parte trasera de remolques, furgones y camiones de carga respecto a visibilidad nocturna?',
    options: [
      'Deben pintarse completamente de negro mate sin reflectivos.',
      'Deben portar cintas retrorreflectivas rojo/blanco reglamentarias (DOT-C2/SIECA) y luces de gálibo funcionales.',
      'Solo necesitan una luz adelante.',
      'No requieren reflectivos si circulan de día.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Las cintas retrorreflectivas permiten a otros conductores distinguir todo el largo y ancho de un furgón atravesado o lento desde cientos de metros de noche.',
    distractorRationale: {
      A: 'Un remolque oscuro sin cintas es casi invisible al cruzar una carretera.',
      B: 'La demarcación perimetral reflectiva previene empotramientos mortales debajo de furgones.',
      C: 'Requieren iluminación y reflectivos frontales, laterales y traseros.',
      D: 'Las condiciones climáticas o retrasos pueden extender el viaje a la noche.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) y D.E. 61.'
  },
  {
    id: 'vmt-t346',
    category: 'teorico',
    topic: 'Vehículo Piloto o Escolta en Cargas Sobredimensionadas',
    question: 'Cuando el VMT autoriza un permiso especial para transportar carga indivisible sobredimensionada (excediendo ancho o largo ordinario), ¿qué acompañamiento suele exigirse?',
    statement: 'Cuando el VMT autoriza un permiso especial para transportar carga indivisible sobredimensionada (excediendo ancho o largo ordinario), ¿qué acompañamiento suele exigirse?',
    options: [
      'Ninguno, puede circular a 100 km/h solo.',
      'Únicamente una motocicleta sin luces.',
      'Vehículos piloto/escolta señalizados con rotulación de "Carga Ancha/Larga" y torretas ámbar, más horarios restringidos.',
      'Circular en sentido contrario.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los vehículos piloto adelante y atrás advierten al tráfico venidero sobre el exceso de dimensiones para que cedan espacio en puentes y curvas.',
    distractorRationale: {
      A: 'Las cargas sobredimensionadas circulan a velocidad reducida y con permiso.',
      B: 'Requiere vehículos escolta visibles con señalización reglamentaria.',
      C: 'El D.E. 23 regula permisos especiales, horarios de menor tráfico y vehículos guía.',
      D: 'Está prohibido circular en contramano salvo cierre policial expreso.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) Art. 20 y Art. 21.'
  },
  {
    id: 'vmt-t347',
    category: 'teorico',
    topic: 'Centro de Gravedad Alto en Furgones y Cisternas',
    question: '¿Por qué un camión tanque (cisterna) o furgón alto tiene mucho mayor riesgo de vuelco en curvas o redondeles que un automóvil sedán?',
    statement: '¿Por qué un camión tanque (cisterna) o furgón alto tiene mucho mayor riesgo de vuelco en curvas o redondeles que un automóvil sedán?',
    options: [
      'Porque sus llantas son más anchas.',
      'Porque tienen menos espejos.',
      'No tienen mayor riesgo de vuelco.',
      'Por su centro de gravedad elevado y, en cisternas con líquido parcial, por el oleaje interno ("slosh") que empuja lateralmente.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La altura de la carga y el movimiento de líquidos en cisternas sin rompeolas completos desplazan el peso hacia el exterior de la curva, volcando la unidad incluso a velocidades moderadas.',
    distractorRationale: {
      A: 'El ancho de llantas no compensa un centro de gravedad alto.',
      B: 'Los espejos no afectan la estabilidad lateral.',
      C: 'Los vuelcos en redondeles son frecuentes cuando se entra demasiado rápido.',
      D: 'Entrar a curvas y redondeles por debajo de la velocidad indicada previene vuelcos.'
    },
    legalReference: 'Manual de Operación de Carga Pesada VMT.'
  },
  {
    id: 'vmt-t348',
    category: 'teorico',
    topic: 'Restricciones Horarias de Circulación de Carga Pesada en AMSS',
    question: '¿Qué finalidad persiguen las restricciones horarias emitidas por el VMT para el ingreso de transporte de carga pesada en horas pico al Área Metropolitana de San Salvador?',
    statement: '¿Qué finalidad persiguen las restricciones horarias emitidas por el VMT para el ingreso de transporte de carga pesada en horas pico al Área Metropolitana de San Salvador?',
    options: [
      'Reducir la congestión extrema en arterias urbanas críticas y disminuir el riesgo de accidentes con transporte liviano y peatones en horas de máxima afluencia.',
      'Prohibir el comercio en el país.',
      'Obligar a los camiones a circular sin carga.',
      'Aumentar el consumo de combustible.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Ordenar ventanas horarias para camiones pesados en accesos críticos evita colapsos viales y reduce la interacción de riesgo en horas pico.',
    distractorRationale: {
      A: 'Las restricciones horarias del VMT optimizan la movilidad metropolitana.',
      B: 'El abastecimiento continúa en los horarios permitidos y rutas periféricas.',
      C: 'Regulan horarios de tránsito, no prohíben transportar carga.',
      D: 'Circular fuera de congestión más bien reduce consumo en ralentí.'
    },
    legalReference: 'Reglamento de Transporte Terrestre de Carga (D.E. 23) y Disposiciones VMT.'
  },
  {
    id: 'vmt-t349',
    category: 'teorico',
    topic: 'Retroceso de Cabezal Articulado — Uso de Ayudante (Guía)',
    question: 'Al retroceder un tractocamión con semirremolque hacia un muelle o espacio reducido con visibilidad limitada, ¿qué práctica de seguridad es recomendable?',
    statement: 'Al retroceder un tractocamión con semirremolque hacia un muelle o espacio reducido con visibilidad limitada, ¿qué práctica de seguridad es recomendable?',
    options: [
      'Retroceder rápidamente sin bajar de la cabina.',
      'Bajar a inspeccionar el área ("GOAL: Get Out And Look"), usar un guía visible en el espejo del lado del conductor y avanzar muy lento.',
      'Confiar en que la gente se apartará al oír el motor.',
      'Retroceder por el lado ciego sin ayuda.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El punto ciego trasero de un furgón de 13.75 m es enorme; inspeccionar personalmente antes y guiarse por el lado izquierdo evita atropellos y choques.',
    distractorRationale: {
      A: 'Retroceder a ciegas es la principal causa de accidentes en patios y muelles.',
      B: 'Bajarse a mirar antes de retroceder toma segundos y evita tragedias.',
      C: 'El ruido del motor no advierte a personas con audición distraída o detrás del furgón.',
      D: 'El retroceso por el lado ciego (derecho) es el más peligroso y debe evitarse si hay opción.'
    },
    legalReference: 'Manual de Operación de Licencia Pesada T VMT.'
  },
  {
    id: 'vmt-t350',
    category: 'teorico',
    topic: 'Comprobación de Temperatura de Tambores / Cubos de Rueda en Paradas',
    question: 'Durante una parada en ruta tras descender una cuesta larga en camión pesado, ¿qué puede indicar un tambor de freno excesivamente frío respecto a los demás o uno echando humo?',
    statement: 'Durante una parada en ruta tras descender una cuesta larga en camión pesado, ¿qué puede indicar un tambor de freno excesivamente frío respecto a los demás o uno echando humo?',
    options: [
      'Funcionamiento perfecto en ambos casos.',
      'Que las llantas están nuevas.',
      'Un tambor frío indica que ese freno no está trabajando (desajustado); uno echando humo indica freno pegado/arrastrando o sobrecalentado con riesgo de incendio.',
      'Falta de combustible.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Tanto un freno inoperante (frío) como un freno trabado o sobrecalentado (humo) representan fallas críticas que deben corregirse antes de continuar.',
    distractorRationale: {
      A: 'La disparidad térmica extrema señala desajuste mecánico peligroso.',
      B: 'No guarda relación con la antigüedad del caucho.',
      C: 'Inspeccionar cubos y tambores en ruta previene incendios de llantas y pérdida de frenos.',
      D: 'No tiene relación con el tanque de diésel.'
    },
    legalReference: 'Manual Técnico de Mantenimiento de Carga Pesada VMT.'
  }
];
