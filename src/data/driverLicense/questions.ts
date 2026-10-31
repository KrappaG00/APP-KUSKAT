/**
 * Banco Oficial de Preguntas de Examen de Conducir VMT & SERTRACEN
 * Abarca el contenido evaluado en los exámenes Teórico y Psicológico de El Salvador.
 * 56 Preguntas de Alto Rendimiento con 4 opciones balanceadas, fundamentación legal y técnica.
 */

import { DriverQuestion } from './types';

export const DRIVER_QUESTIONS: DriverQuestion[] = [
  // ==========================================================================
  // UNIDAD 1: MARCO LEGAL, AUTORIDADES Y TIPOLOGÍA DE LICENCIAS
  // ==========================================================================
  {
    id: 'vmt-q01',
    category: 'teorico',
    topic: 'Entidades Rectoras y Fiscalización Vial',
    question: 'En El Salvador, ¿cuál es la entidad facultada constitucionalmente para fiscalizar el tránsito en la vía pública e imponer esquelas de infracción?',
    statement: 'En El Salvador, ¿cuál es la entidad facultada constitucionalmente para fiscalizar el tránsito en la vía pública e imponer esquelas de infracción?',
    options: [
      'La División de Tránsito Terrestre de la Policía Nacional Civil (PNC-DTT).',
      'El Cuerpo de Agentes Metropolitanos (CAM) de cada alcaldía en toda carretera.',
      'Únicamente los inspectores administrativos de SERTRACEN en sus oficinas.',
      'El Ministerio de Hacienda a través de la Dirección General de Aduanas.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La Ley de Transporte Terrestre, Tránsito y Seguridad Vial otorga a la División de Tránsito Terrestre de la PNC la potestad legal exclusiva para ejercer el control operativo en las vías públicas y sancionar infracciones.',
    legalReference: 'Ley de Transporte Terrestre, Tránsito y Seguridad Vial Art. 6 y Art. 115.'
  },
  {
    id: 'vmt-q02',
    category: 'teorico',
    topic: 'Capacidad Máxima de Licencia Particular',
    question: '¿Hasta qué límite de tonelaje de carga autoriza la Licencia Particular de Conducir en El Salvador?',
    statement: '¿Hasta qué límite de tonelaje de carga autoriza la Licencia Particular de Conducir en El Salvador?',
    options: [
      'Hasta 5.0 toneladas métricas de carga comercial.',
      'Hasta un máximo estricto de 3.5 toneladas métricas de peso bruto vehicular.',
      'Hasta 12.0 toneladas en automotores de dos ejes rígidos.',
      'No tiene límite de peso siempre que el vehículo no sea articulado.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El Reglamento General de Tránsito estipula que la Licencia Particular ampara automotores de uso privado de hasta 3.5 toneladas de peso bruto o hasta nueve pasajeros sentados.',
    legalReference: 'Reglamento General de Tránsito Art. 78 y Art. 82.'
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
    legalReference: 'Reglamento General de Tránsito Art. 86 y Art. 88.'
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
    legalReference: 'Reglamento General de Tránsito Art. 80 y Art. 81.'
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
    legalReference: 'Ley de Transporte Terrestre Art. 35 y Art. 42.'
  },
  {
    id: 'vmt-q07',
    category: 'psicologico',
    topic: 'Responsabilidad Civil y Presión Social al Volante',
    question: 'Cuando un conductor novel transporta pasajeros que le incitan a correr o a ignorar señales de alto, ¿cuál es la actitud psicométrica adecuada?',
    statement: 'Cuando un conductor novel transporta pasajeros que le incitan a correr o a ignorar señales de alto, ¿cuál es la actitud psicométrica adecuada?',
    options: [
      'Complacer a los amigos para evitar burlas o descalificaciones personales.',
      'Acelerar únicamente en tramos rectilíneos donde no se observen patrullas.',
      'Asumir el rol de capitán del vehículo, dejando claro que la seguridad de todos no es negociable.',
      'Ceder el volante inmediatamente a quien esté insistiendo en correr más rápido.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El conductor tiene la responsabilidad civil y penal personal de la vida de todos los ocupantes del automotor. La madurez conductual exige firmeza para neutralizar la presión de grupo.',
    legalReference: 'Manual de Manejo Defensivo y Evaluación Psicométrica VMT.'
  },

  // ==========================================================================
  // UNIDAD 2: SISTEMA INTEGRAL DE SEÑALIZACIÓN VIAL
  // ==========================================================================
  {
    id: 'vmt-q08',
    category: 'teorico',
    topic: 'Clasificación de Señales Amarillas en Rombo',
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
    legalReference: 'Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito (SIECA) Serie P.'
  },
  {
    id: 'vmt-q09',
    category: 'teorico',
    topic: 'Señalización de Doble Línea Continua Amarilla',
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
    legalReference: 'Reglamento General de Tránsito Art. 128 y Art. 165.'
  },
  {
    id: 'vmt-q10',
    category: 'teorico',
    topic: 'Significado de Semáforo con Luz Roja Intermitente',
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
    legalReference: 'Reglamento General de Tránsito Art. 140, numeral 2.'
  },
  {
    id: 'vmt-q11',
    category: 'teorico',
    topic: 'Regla del Cajón Amarillo en Intersecciones',
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
    legalReference: 'Reglamento General de Tránsito Art. 115 y Art. 118.'
  },
  {
    id: 'vmt-q13',
    category: 'teorico',
    topic: 'Señalización de Cordón Rojo de Calzada',
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
    legalReference: 'Reglamento General de Tránsito Art. 144 y Art. 180.'
  },
  {
    id: 'vmt-q14',
    category: 'teorico',
    topic: 'Luz Amarilla Fija en Semáforo',
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
    legalReference: 'Reglamento General de Tránsito Art. 140, numeral 1.'
  },

  // ==========================================================================
  // UNIDAD 3: NORMAS DE CIRCULACIÓN, EJES VIALES Y PREFERENCIA DE PASO
  // ==========================================================================
  {
    id: 'vmt-q15',
    category: 'teorico',
    topic: 'Prioridad de Paso en Redondeles o Rotondas',
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
    legalReference: 'Ley de Transporte Terrestre Art. 68; Reglamento General de Tránsito Art. 160.'
  },
  {
    id: 'vmt-q21',
    category: 'psicologico',
    topic: 'Ceder el Paso Defensivo vs Derecho Legal',
    question: 'En una intersección donde usted tiene la preferencia legal de paso, un vehículo imprudente inicia el cruce indebidamente. ¿Cuál es la decisión defensiva?',
    statement: 'En una intersección donde usted tiene la preferencia legal de paso, un vehículo imprudente inicia el cruce indebidamente. ¿Cuál es la decisión defensiva?',
    options: [
      'Hacer valer su derecho acelerando para obligar al infractor a detenerse.',
      'Cerrar los ojos y frenar a fondo tocando la bocina con insistencia.',
      'Intentar esquivarlo a gran velocidad invadiendo la acera peatonal.',
      'Ceder la prioridad y frenar oportunamente; la preservación de la vida prevalece sobre el derecho de vía.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El pilar supremo del manejo defensivo establece que el derecho legal de paso nunca debe forzarse si ello conduce a una colisión. Es preferible ceder la preferencia a sufrir un siniestro vial.',
    legalReference: 'Manual de Manejo Defensivo y Factores Humanos VMT.'
  },

  // ==========================================================================
  // UNIDAD 4: VELOCIDADES REGLAMENTARIAS, DISTANCIAS Y MANIOBRAS VIALES
  // ==========================================================================
  {
    id: 'vmt-q22',
    category: 'teorico',
    topic: 'Límite de Velocidad en Zonas Escolares',
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
    legalReference: 'Manual de Manejo Defensivo VMT; Reglamento General de Tránsito Art. 147.'
  },
  {
    id: 'vmt-q28',
    category: 'psicologico',
    topic: 'Cinemática del Impacto y Velocidad Urbana',
    question: '¿Por qué transitar a 70 km/h en lugar de 50 km/h en una avenida urbana multiplica drásticamente el riesgo de muerte peatonal?',
    statement: '¿Por qué transitar a 70 km/h en lugar de 50 km/h en una avenida urbana multiplica drásticamente el riesgo de muerte peatonal?',
    options: [
      'Porque el motor del vehículo hace más ruido e intimida a los peatones.',
      'Porque a 70 km/h el vehículo consume el triple de combustible que a 50 km/h.',
      'Porque la energía cinética del choque depende del cuadrado de la velocidad, anulando la resistencia biológica.',
      'Únicamente porque a esa velocidad las luces de freno tardan más en encenderse.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La física de impactos (Ec = 1/2 · m · v²) demuestra que un aumento del 40% en velocidad casi duplica la energía de colisión, elevando la letalidad de un atropello del 15% a más del 85%.',
    legalReference: 'Manual de Seguridad Vial y Factores Biomecánicos VMT.'
  },

  // ==========================================================================
  // UNIDAD 5: CONDUCCIÓN EN CONDICIONES ADVERSAS Y MANEJO DEFENSIVO
  // ==========================================================================
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
    legalReference: 'Reglamento General de Tránsito Art. 182 y Art. 185.'
  },
  {
    id: 'vmt-q31',
    category: 'teorico',
    topic: 'Técnica de Freno de Motor en Bajadas Prolongadas',
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
    legalReference: 'Reglamento General de Tránsito Art. 164 y Art. 174.'
  },
  {
    id: 'vmt-q32',
    category: 'psicologico',
    topic: 'Distracciones Cognitivas con Teléfono Celular',
    question: '¿Por qué redactar o leer mensajes de texto en el celular al conducir multiplica por más de 20 veces el riesgo de siniestralidad vial?',
    statement: '¿Por qué redactar o leer mensajes de texto en el celular al conducir multiplica por más de 20 veces el riesgo de siniestralidad vial?',
    options: [
      'Porque el dispositivo móvil interfiere con los circuitos de radiofrecuencia del motor.',
      'Únicamente porque es una falta tipificada en la ley que genera nerviosismo al ver policías.',
      'Porque absorbe simultáneamente la atención visual (ojos), cognitiva (mente) y motora (manos).',
      'Solo es peligroso si se transita por caminos rurales no pavimentados.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La mensajería genera una triple distracción crítica: visual (se aparta la vista 4-5 segundos), cognitiva (el cerebro procesa el texto) y manual (se suelta el volante), recorriendo a ciegas más de 100 metros.',
    legalReference: 'Ley de Transporte Terrestre Art. 67; Manual Psicométrico VMT.'
  },
  {
    id: 'vmt-q33',
    category: 'psicologico',
    topic: 'Microsueños y Fatiga Extrema',
    question: 'Si en un viaje nocturno experimenta pesadez en los párpados, bostezos continuos y desorientación espacial, ¿cuál es la medida segura?',
    statement: 'Si en un viaje nocturno experimenta pesadez en los párpados, bostezos continuos y desorientación espacial, ¿cuál es la medida segura?',
    options: [
      'Bajar las ventanillas para recibir aire frío y subir al máximo el volumen de la música.',
      'Tomar café muy concentrado y acelerar para llegar a casa lo antes posible.',
      'Fijar la mirada en las luces del vehículo delantero para seguir su misma trayectoria.',
      'Detenerse de inmediato en una estación de servicio segura y descansar al menos 20 a 30 minutos.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Los microsueños duran entre 2 y 4 segundos a ciegas. Ni la música alta ni las bebidas estimulantes sustituyen el sueño biológico; la única medida que restaura los reflejos es dormir una siesta reparadora.',
    legalReference: 'Manual de Manejo Defensivo y Factores Humanos VMT.'
  },
  {
    id: 'vmt-q34',
    category: 'psicologico',
    topic: 'Control de la Ira al Volante (Road Rage)',
    question: 'Si otro conductor le insulta, le corta el paso deliberadamente o le toca el claxon con insistencia, ¿cuál es la respuesta defensiva?',
    statement: 'Si otro conductor le insulta, le corta el paso deliberadamente o le toca el claxon con insistencia, ¿cuál es la respuesta defensiva?',
    options: [
      'Mantener la calma, regular la respiración, ceder el paso y evitar cualquier contacto visual desafiante.',
      'Acelerar de inmediato para alcanzarlo en el siguiente semáforo y exigirle una disculpa.',
      'Frenar bruscamente delante de su vehículo ("brake check") para demostrar autoridad.',
      'Responder con los mismos insultos sonoros para no permitir agresiones impunes.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La inteligencia emocional en el tránsito salva vidas. Desescalar el conflicto y no engancharse en disputas preserva la integridad física ante conductores alterados.',
    legalReference: 'Manual de Evaluación Psicológica de Conductores VMT.'
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
    legalReference: 'Manual de Manejo Defensivo VMT; Reglamento General de Tránsito Art. 185.'
  },

  // ==========================================================================
  // UNIDAD 6: SEGURIDAD ACTIVA, PASIVA E INSPECCIÓN PREVENTIVA
  // ==========================================================================
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
    legalReference: 'Reglamento General de Tránsito Art. 32; Normas Técnicas de Inspección Vehicular.'
  },
  {
    id: 'vmt-q38',
    category: 'teorico',
    topic: 'Uso Obligatorio del Cinturón de Seguridad',
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
    legalReference: 'Reglamento General de Tránsito Art. 34.'
  },
  {
    id: 'vmt-q42',
    category: 'psicologico',
    topic: 'Ajuste del Reposacabezas y Prevención del Latigazo Cervical',
    question: '¿Cuál es la altura y alineación biomecánica correcta a la que debe ajustarse el reposacabezas del asiento del conductor?',
    statement: '¿Cuál es la altura y alineación biomecánica correcta a la que debe ajustarse el reposacabezas del asiento del conductor?',
    options: [
      'El borde superior debe quedar nivelado con la parte superior de la cabeza a no más de 4 cm del cráneo.',
      'Debe colocarse lo más bajo posible para que sirva de apoyo a los omóplatos y espalda alta.',
      'Debe reclinarse hacia atrás a 45 grados para permitir dormir durante los congestionamientos.',
      'No tiene relevancia ergonómica porque su único objetivo es adornar la tapicería del asiento.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El reposacabezas previene el latigazo cervical (hiperextensión violenta del cuello) en impactos traseros; su borde superior debe quedar alineado con la coronilla del conductor a mínima distancia del cráneo.',
    legalReference: 'Manual de Biomecánica y Ergonomía del Conductor VMT.'
  },

  // ==========================================================================
  // UNIDAD 7: ALCOHOLEMIA, ESTUPEFACIENTES Y CONDUCCIÓN PELIGROSA
  // ==========================================================================
  {
    id: 'vmt-q43',
    category: 'teorico',
    topic: 'Umbral del Delito de Conducción Peligrosa (Art. 147-E CP)',
    question: 'En El Salvador, ¿a partir de qué nivel de alcohol en aire espirado o sangre se tipifica el delito penal de Conducción Peligrosa (Art. 147-E CP)?',
    statement: 'En El Salvador, ¿a partir de qué nivel de alcohol en aire espirado o sangre se tipifica el delito penal de Conducción Peligrosa (Art. 147-E CP)?',
    options: [
      'A partir de 50 mg/dl en conductores de vehículos particulares.',
      'A partir de 100 mg/dl (miligramos por decilitro) en aire espirado o sangre.',
      'Únicamente si el conductor ocasiona lesiones corporales o muerte a terceros.',
      'A partir de 200 mg/dl si no porta licencia de conducir física.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Alcanzar o superar los 100 mg/dl constituye delito flagrante de Conducción Peligrosa con detención penal inmediata de 72 horas y proceso judicial formal. De 50 a 99 mg/dl es falta administrativa muy grave.',
    legalReference: 'Código Penal Art. 147-E; Ley de Transporte Terrestre Art. 118.'
  },
  {
    id: 'vmt-q44',
    category: 'teorico',
    topic: 'Penas de Prisión por Conducción Peligrosa Agravada',
    question: '¿Qué pena de prisión formal impone el Código Penal salvadoreño al motorista de transporte público o de carga que comete Conducción Peligrosa?',
    statement: '¿Qué pena de prisión formal impone el Código Penal salvadoreño al motorista de transporte público o de carga que comete Conducción Peligrosa?',
    options: [
      'Trabajo de utilidad comunitaria durante los fines de semana.',
      'Multa económica de 57.14 dólares sin pérdida de la libertad.',
      'Prisión formal de cuatro (4) a ocho (8) años de privación de libertad.',
      'Arresto domiciliario de quince días supervisado por la alcaldía.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El inciso segundo del Art. 147-E del Código Penal sanciona la conducción peligrosa en transporte colectivo de pasajeros o de carga pesada con una pena agravada de 4 a 8 años de prisión.',
    legalReference: 'Código Penal Art. 147-E, inciso segundo.'
  },
  {
    id: 'vmt-q45',
    category: 'teorico',
    topic: 'Sanción Administrativa por Alcoholemia entre 50 y 99 mg/dl',
    question: 'Si en un alcotest un conductor particular arroja un resultado de 75 mg/dl, ¿cuál es la consecuencia legal inmediata?',
    statement: 'Si en un alcotest un conductor particular arroja un resultado de 75 mg/dl, ¿cuál es la consecuencia legal inmediata?',
    options: [
      'Se le felicita y se le permite continuar porque no ha alcanzado los 100 mg/dl.',
      'Se le impone pena de prisión de cinco años en centro penitenciario de máxima seguridad.',
      'Puede continuar conduciendo si paga la esquela en efectivo al agente policial.',
      'Esquela de infracción muy grave, suspensión temporal de la licencia y retención del automotor.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Entre 50 y 99 mg/dl se aplica sanción administrativa muy grave: multa económica máxima, suspensión de licencia por 6 meses a un año y remisión del vehículo si no hay acompañante sobrio habilitado.',
    legalReference: 'Ley de Transporte Terrestre Art. 118; Reglamento General de Tránsito Art. 175.'
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
    legalReference: 'Código Penal Art. 147-E; Jurisprudencia Sala de lo Penal de la CSJ.'
  },
  {
    id: 'vmt-q47',
    category: 'psicologico',
    topic: 'Deterioro Psicomotor y Visión en Túnel por Alcohol',
    question: '¿De qué manera afecta el consumo de alcohol las capacidades psicofísicas y el campo visual periférico del conductor?',
    statement: '¿De qué manera afecta el consumo de alcohol las capacidades psicofísicas y el campo visual periférico del conductor?',
    options: [
      'Agudiza los reflejos nocturnos y amplía la visión panorámica a más de 180 grados.',
      'Provoca visión en túnel, reduce la percepción de profundidad y triplica el tiempo de reacción.',
      'No tiene ningún efecto fisiológico medible si el conductor está acostumbrado a beber.',
      'Mejora la coordinación neuromuscular y la capacidad de frenado en seco.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El alcohol deprime el sistema nervioso central, estrecha el campo visual útil (visión en túnel), distorsiona la apreciación de velocidades y alarga el tiempo de respuesta psicomotora.',
    legalReference: 'Manual de Factores Humanos y Alcoholemia VMT.'
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
    legalReference: 'Código Penal Art. 147-E; Ley Reguladora de las Actividades Relativas a las Drogas.'
  },
  {
    id: 'vmt-q49',
    category: 'psicologico',
    topic: 'Mito del Café y la Ducha para Eliminar el Alcohol',
    question: '¿Qué validez médica y científica tienen métodos caseros como tomar café amargo, duchas de agua fría o masticar chicle para bajar el alcotest?',
    statement: '¿Qué validez médica y científica tienen métodos caseros como tomar café amargo, duchas de agua fría o masticar chicle para bajar el alcotest?',
    options: [
      'Eliminan el 80% del alcohol en sangre en menos de 15 minutos.',
      'Permiten engañar al sensor infrarrojo del etilómetro de la PNC si se mastica menta.',
      'Aumentan la eliminación hepática del alcohol a través de la sudoración inducida.',
      'Ninguna validez; el alcohol se metaboliza en el hígado a razón constante de 10 a 15 mg/dl por hora.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El metabolismo hepático del alcohol es biológicamente constante. Ni el café, ni la ducha fría ni la menta reducen la concentración de alcohol en sangre ni en aire alveolar profundo.',
    legalReference: 'Manual de Fisiología Toxicológica del Conductor VMT.'
  },

  // ==========================================================================
  // UNIDAD 8: ACCIDENTOLOGÍA, LEY FONAT Y PRIMEROS AUXILIOS
  // ==========================================================================
  {
    id: 'vmt-q50',
    category: 'teorico',
    topic: 'Protocolo de Emergencia P.A.S.',
    question: '¿Cuál es el significado y la secuencia cronológica estricta de las siglas del Protocolo Internacional de Emergencia P.A.S.?',
    statement: '¿Cuál es la significado y la secuencia cronológica estricta de las siglas del Protocolo Internacional de Emergencia P.A.S.?',
    options: [
      'Proteger la escena, Avisar a los cuerpos de emergencia y Socorrer a las víctimas.',
      'Parar el vehículo, Apagar el radio y Salir corriendo a pedir auxilio.',
      'Presionar el pedal, Acelerar la marcha y Solicitar un abogado de tránsito.',
      'Perdonar al conductor, Acordar el pago y Salir del lugar sin llamar a la policía.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El protocolo universal P.A.S. exige: 1. Proteger el lugar del siniestro para evitar nuevos choques; 2. Avisar de inmediato a los teléfonos de emergencia (911, 132); 3. Socorrer dentro de los límites de primeros auxilios.',
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
    legalReference: 'Ley de Transporte Terrestre Art. 120 y Art. 121; Código Procesal Penal Art. 38.'
  },
  {
    id: 'vmt-q56',
    category: 'psicologico',
    topic: 'Atención a Víctimas y Prevención de Shock Postraumático',
    question: 'Mientras aguarda el arribo del personal médico paramédico del 132 (SEM), ¿cómo debe atender anímicamente a una víctima consciente?',
    statement: 'Mientras aguarda el arribo del personal médico paramédico del 132 (SEM), ¿cómo debe atender anímicamente a una víctima consciente?',
    options: [
      'Abrigarlo para evitar la hipotermia, hablarle con tono sereno, tranquilizarlo y no darle líquidos ni medicamentos.',
      'Contarle detalladamente la gravedad de sus heridas y mostrarle fotografías de cómo quedó el vehículo.',
      'Obligarlo a levantarse y correr para verificar que no tenga fracturas internas en órganos vitales.',
      'Darle de comer alimentos pesados para reponer la energía consumida durante el choque.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Mantener abrigada a la víctima previene la hipotermia postraumática en estados de shock. La comunicación empática y calmada reduce el pánico cardiovascular; nunca deben administrarse alimentos ni líquidos.',
    legalReference: 'Manual de Primeros Auxilios Psicológicos y Físicos VMT.'
  }
];
