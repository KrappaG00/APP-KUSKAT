/**
 * Banco Oficial Psicológico y Psicométrico de Examen de Conducir VMT
 * Evalúa percepción de riesgo, control de impulsos/ira, fatiga/somnolencia,
 * toma de decisiones bajo presión, empatía vial, actitud preventiva/ética y aptitud psicométrica.
 * >= 150 preguntas de opción múltiple (A, B, C, D) con fundamentación y análisis de distractores.
 */

import { DriverQuestion } from './types';

export const DRIVER_PSYCHOLOGICAL_QUESTIONS: DriverQuestion[] = [
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
    distractorRationale: {
      A: 'Ceder ante la presión social compromete la vida de todos los ocupantes y demuestra inmadurez emocional al volante.',
      B: 'La velocidad excesiva en rectas sigue siendo ilegal y peligrosa independientemente de la presencia policial.',
      C: 'Mantener autoridad serena sobre la conducción protege la integridad física de los pasajeros y cumple la ley.',
      D: 'Entregar el mando a una persona impulsiva o sin certeza de su aptitud multiplica el riesgo de siniestro.'
    },
    legalReference: 'Manual de Manejo Defensivo y Evaluación Psicométrica VMT.'
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
    distractorRationale: {
      A: 'Acelerar para imponer la prioridad convierte una imprudencia ajena en un choque evitable.',
      B: 'Cerrar los ojos elimina la percepción de escape y agrava la pérdida de control durante el frenado.',
      C: 'Invadir la acera a alta velocidad pone en riesgo mortal a peatones inocentes.',
      D: 'Frenar a tiempo y ceder el paso evita el siniestro y prioriza la vida sobre la razón jurídica.'
    },
    legalReference: 'Manual de Manejo Defensivo y Factores Humanos VMT.'
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
    distractorRationale: {
      A: 'El nivel acústico del motor no es la causa física de las lesiones mortales en un atropello.',
      B: 'El consumo de combustible es un efecto mecánico, no el factor biomecánico que explica la mortalidad peatonal.',
      C: 'Al crecer la energía cinética con el cuadrado de la velocidad, el cuerpo humano no resiste el impacto a 70 km/h.',
      D: 'El sistema eléctrico de luces de freno actúa de forma instantánea sin depender de la velocidad de marcha.'
    },
    legalReference: 'Manual de Seguridad Vial y Factores Biomecánicos VMT.'
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
    distractorRationale: {
      A: 'Los teléfonos móviles no alteran los circuitos electrónicos de marcha del motor.',
      B: 'El peligro es fisiológico y real aunque no exista presencia policial en la zona.',
      C: 'Textear desconecta simultáneamente vista, mente y manos de la conducción, impidiendo reaccionar a tiempo.',
      D: 'En vías urbanas y autopistas de mayor flujo, la distracción es igual o más letal por la densidad vehicular.'
    },
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
    distractorRationale: {
      A: 'El aire frío y la música alta solo generan una alerta pasajera de segundos y no evitan los microsueños.',
      B: 'Acelerar con fatiga reduce el margen de reacción y multiplica la gravedad de una salida de vía.',
      C: 'Fijar la vista en un solo punto induce hipnosis de carretera y acelera el cierre involuntario de los párpados.',
      D: 'Detenerse en un sitio seguro y dormir brevemente es la única forma efectiva de revertir la fatiga aguda.'
    },
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
    distractorRationale: {
      A: 'Conservar la calma y desescalar evita confrontaciones violentas y mantiene el control seguro del vehículo.',
      B: 'Perseguir a otro conductor convierte un incidente menor en una situación de alto riesgo vial y personal.',
      C: 'Frenar intencionalmente delante de otro auto es una maniobra temeraria que suele provocar colisiones por alcance.',
      D: 'Responder a la agresión escala el conflicto y distrae la atención del entorno de tránsito.'
    },
    legalReference: 'Manual de Evaluación Psicológica de Conductores VMT.'
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
    distractorRationale: {
      A: 'Nivelar el borde superior con la coronilla a menos de 4 cm contiene la cabeza y evita el latigazo cervical.',
      B: 'Colocarlo bajo los omóplatos convierte el reposacabezas en una palanca que agrava la hiperextensión del cuello.',
      C: 'Reclinar el respaldo a 45 grados aleja el control del volante y permite el deslizamiento bajo el cinturón.',
      D: 'El reposacabezas es un elemento esencial de seguridad pasiva, no un adorno estético.'
    },
    legalReference: 'Manual de Biomecánica y Ergonomía del Conductor VMT.'
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
    distractorRationale: {
      A: 'El alcohol deteriora la adaptación a la oscuridad y estrecha severamente el campo visual lateral.',
      B: 'Como depresor del sistema nervioso, el alcohol induce visión en túnel y multiplica el tiempo de reacción.',
      C: 'La tolerancia subjetiva al alcohol no evita el deterioro objetivo de reflejos ni la distorsión visual.',
      D: 'Lejos de mejorar la coordinación, el alcohol provoca torpeza motora y respuestas tardías al pedal de freno.'
    },
    legalReference: 'Manual de Factores Humanos y Alcoholemia VMT.'
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
    distractorRationale: {
      A: 'Ninguna bebida o estímulo externo acelera la oxidación hepática del etanol en 15 minutos.',
      B: 'Los etilómetros miden aire alveolar profundo de los pulmones, por lo que masticar menta no engaña al sensor.',
      C: 'El sudor elimina una fracción mínima e insignificante; más del 90% se metaboliza lentamente en el hígado.',
      D: 'Solo el paso del tiempo permite al hígado metabolizar el alcohol a una tasa fija aproximada de 10 a 15 mg/dl por hora.'
    },
    legalReference: 'Manual de Fisiología Toxicológica del Conductor VMT.'
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
    distractorRationale: {
      A: 'Abrigarlo, tranquilizarlo verbalmente y abstenerse de darle líquidos evita el shock térmico y complicaciones quirúrgicas.',
      B: 'Mostrar imágenes del choque o alarmar al herido dispara el pánico, la taquicardia y el shock neurogénico.',
      C: 'Movilizar forzosamente a un herido puede agravar hemorragias internas o fracturas ocultas.',
      D: 'Suministrar alimentos o bebidas está contraindicado ante una posible anestesia de emergencia o vómito.'
    },
    legalReference: 'Manual de Primeros Auxilios Psicológicos y Físicos VMT.'
  },
  {
    id: 'vmt-q71',
    category: 'psicologico',
    topic: 'Maniobra de Retroceso en Ángulo y Prevención de Vuelcos',
    question: 'Al realizar una maniobra de retroceso en ángulo con un semirremolque hacia un muelle de carga, ¿cuál es el criterio psicomotor y operativo más seguro?',
    statement: 'Al realizar una maniobra de retroceso en ángulo con un semirremolque hacia un muelle de carga, ¿cuál es el criterio psicomotor y operativo más seguro?',
    options: [
      'Retroceder a alta velocidad por el lado ciego para terminar la maniobra rápidamente.',
      'Confiar únicamente en la memoria espacial sin bajar a revisar obstáculos ni usar guía.',
      'Posicionarse preferiblemente por el lado del conductor (sight-side), avanzar a mínima velocidad y apoyarse en un guía si hay puntos ciegos.',
      'Desconectar la manguera azul antes de retroceder para que el remolque gire más suelto.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El retroceso por el lado del conductor (sight-side) maximiza la visibilidad directa en el espejo izquierdo; hacerlo a baja velocidad y con guía auxiliar en puntos ciegos previene colisiones y vuelcos de carga.',
    distractorRationale: {
      A: 'Retroceder rápido por el lado ciego impide detectar peatones, columnas u otros vehículos en el ángulo muerto.',
      B: 'No verificar físicamente el área trasera antes de retroceder es causa frecuente de atropellos y daños en patio.',
      C: 'Priorizar el lado del conductor, ir lento y usar guía en puntos ciegos garantiza control y precisión segura.',
      D: 'Desconectar la manguera azul deja al semirremolque sin freno de servicio controlado desde el pedal.'
    },
    legalReference: 'Manual de Manejo Defensivo de Carga Pesada VMT.'
  },
  {
    id: 'vmt-q72',
    category: 'psicologico',
    topic: 'Plan de Emergencia Vial y Prevención de Desplazamiento de Carga',
    question: 'Durante la ruta con plataforma cargada, el conductor percibe balanceo lateral anormal tras una curva cerrada. ¿Cuál es la conducta defensiva inmediata según el plan de emergencia vial?',
    statement: 'Durante la ruta con plataforma cargada, el conductor percibe balanceo lateral anormal tras una curva cerrada. ¿Cuál es la conducta defensiva inmediata según el plan de emergencia vial?',
    options: [
      'Acelerar en la siguiente recta para que la carga se acomode por inercia.',
      'Continuar hasta el destino final sin revisar las cadenas ni fajas de sujeción.',
      'Frenar bruscamente en medio de la curva cerrando la dirección.',
      'Reducir suavemente la velocidad, orillarse en un lugar seguro y nivelado, señalizar y verificar/reajustar el trincado de la carga.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Un balanceo lateral anormal indica posible desplazamiento de carga o falla de suspensión/neumático. El plan de emergencia vial exige detenerse suavemente fuera de la calzada, señalizar y asegurar la estiba antes de continuar.',
    distractorRationale: {
      A: 'Acelerar con carga desplazada incrementa la fuerza centrífuga y puede provocar un vuelco total en la siguiente curva.',
      B: 'Ignorar una carga inestable expone a su caída sobre la vía o al volcamiento de toda la unidad.',
      C: 'Frenar bruscamente en curva con un vehículo articulado desencadena el efecto tijera (jackknifing) o vuelco.',
      D: 'Desacelerar suavemente, apartarse a un sitio seguro, señalizar y reasegurar el trincado previene el siniestro.'
    },
    legalReference: 'Manual de Operación Segura y Plan de Emergencia Vial VMT.'
  },
  // ==========================================================================
  // PERCEPCIÓN DE RIESGO VIAL
  // ==========================================================================
  {
    id: 'vmt-p013',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Ilusión de Control en Rectas Despejadas',
    question: 'Al conducir por una carretera recta y aparentemente vacía a mediodía, un conductor siente que puede superar el límite de velocidad sin peligro. ¿Qué sesgo psicológico manifiesta?',
    statement: 'Al conducir por una carretera recta y aparentemente vacía a mediodía, un conductor siente que puede superar el límite de velocidad sin peligro. ¿Qué sesgo psicológico manifiesta?',
    options: [
      'Ilusión de control y subestimación del riesgo latente (animales, baches, salidas rurales o fallas mecánicas).',
      'Evaluación objetiva y prudente del entorno.',
      'Hipervigilancia defensiva.',
      'Empatía vial avanzada.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La sensación subjetiva de seguridad en rectas despejadas lleva a sobreestimar la propia habilidad e ignorar peligros súbitos imprevisibles.',
    distractorRationale: {
      A: 'La ilusión de control reduce la percepción real del peligro y alarga la distancia de detención.',
      B: 'Superar los límites legales por confianza subjetiva nunca es una evaluación objetiva.',
      C: 'La hipervigilancia implica precaución extrema, opuesta al exceso de confianza.',
      D: 'La empatía vial busca proteger a terceros, no acelerar.'
    },
    legalReference: 'Evaluación Psicológica de Aptitud Vial VMT.'
  },
  {
    id: 'vmt-p014',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Normalización del Peligro',
    question: 'Si un conductor afirma "siempre paso ese cruce sin detenerme del todo y nunca me ha pasado nada", ¿qué fenómeno cognitivo refleja?',
    statement: 'Si un conductor afirma "siempre paso ese cruce sin detenerme del todo y nunca me ha pasado nada", ¿qué fenómeno cognitivo refleja?',
    options: [
      'Pericia superior adquirida con los años.',
      'Normalización de la desviación: confundir la ausencia previa de choque con ausencia real de riesgo.',
      'Respeto estricto a las señales SIECA.',
      'Responsabilidad ciudadana ejemplar.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Repetir una conducta peligrosa sin consecuencias inmediatas desensibiliza la percepción del peligro hasta que ocurre un siniestro grave.',
    distractorRationale: {
      A: 'La suerte repetida no equivale a destreza ni inmunidad física.',
      B: 'La habituación al riesgo convierte infracciones graves en hábitos cotidianos peligrosos.',
      C: 'Omitir la detención total viola la señal de Alto.',
      D: 'Es una conducta imprudente que pone en riesgo a terceros.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p015',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Niños Cerca de la Calzada',
    question: 'Al observar a un niño jugando con una pelota en la acera junto a la calle, ¿cuál es la interpretación psicológica y preventiva correcta?',
    statement: 'Al observar a un niño jugando con una pelota en la acera junto a la calle, ¿cuál es la interpretación psicológica y preventiva correcta?',
    options: [
      'Asumir que el niño se quedará quieto en la acera.',
      'Acelerar para pasar rápido antes de que cruce.',
      'Anticipar que el niño puede correr súbitamente tras la pelota sin mirar, reduciendo la velocidad y preparando el pie sobre el freno.',
      'Tocar la bocina fuerte sin bajar velocidad.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Los niños carecen de madurez para calcular velocidades y distancias; percibir el riesgo anticipado permite frenar antes de un atropello.',
    distractorRationale: {
      A: 'Confiar en la conducta racional de un niño pequeño en juego es un error fatal.',
      B: 'Acelerar reduce el tiempo de reacción si el niño irrumpe en la vía.',
      C: 'La anticipación preventiva ante usuarios vulnerables es clave en la evaluación psicológica.',
      D: 'Un bocinazo fuerte puede asustar al niño y hacerlo correr hacia la calzada.'
    },
    legalReference: 'Manual de Psicología y Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p016',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Conducción Bajo Lluvia Ligera',
    question: '¿Por qué muchos conductores experimentan más siniestros durante lluvias moderadas que en tormentas extremas?',
    statement: '¿Por qué muchos conductores experimentan más siniestros durante lluvias moderadas que en tormentas extremas?',
    options: [
      'Porque en lluvia moderada los frenos se desconectan.',
      'Porque en tormenta extrema no existe agua en la vía.',
      'Porque las llantas nuevas resbalan más.',
      'Porque en lluvia ligera subestiman el riesgo y mantienen velocidades de pavimento seco a pesar de la película resbaladiza.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Cuando el peligro parece leve, la percepción de riesgo baja y no se ajustan velocidad ni distancia de seguimiento.',
    distractorRationale: {
      A: 'Los frenos no se desconectan; el agarre del pavimento disminuye.',
      B: 'En tormenta extrema la mayoría sí reduce la marcha por miedo visible.',
      C: 'Las llantas nuevas evacuan mejor el agua.',
      D: 'Ajustar el comportamiento desde las primeras gotas demuestra adecuada percepción de riesgo.'
    },
    legalReference: 'Manual de Psicología Vial VMT.'
  },
  {
    id: 'vmt-p017',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Uso de Teléfono en Congestión',
    question: 'Un conductor revisa redes sociales en su teléfono mientras avanza lentamente en tráfico denso, creyendo que a 15 km/h no hay peligro. ¿Qué riesgo real ignora?',
    statement: 'Un conductor revisa redes sociales en su teléfono mientras avanza lentamente en tráfico denso, creyendo que a 15 km/h no hay peligro. ¿Qué riesgo real ignora?',
    options: [
      'Atropellar peatones o motociclistas que cruzan entre filas, o chocar por alcance cuando el vehículo delantero frena.',
      'Que el motor se sobrecaliente por usar el celular.',
      'Que el celular consuma gasolina.',
      'No existe ningún riesgo a 15 km/h.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Incluso a baja velocidad, la distracción visual y cognitiva impide detectar motocicletas, peatones entre vehículos o detenciones bruscas.',
    distractorRationale: {
      A: 'Un impacto a 15 km/h contra un peatón o moto puede causar lesiones graves o muerte.',
      B: 'El teléfono no afecta la temperatura del motor.',
      C: 'No influye en el consumo de combustible.',
      D: 'La baja velocidad no anula las consecuencias de conducir a ciegas.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p018',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Puntos Ciegos Propios',
    question: 'Confiar exclusivamente en los espejos retrovisores sin verificar brevemente los ángulos muertos laterales antes de cambiar de carril refleja:',
    statement: 'Confiar exclusivamente en los espejos retrovisores sin verificar brevemente los ángulos muertos laterales antes de cambiar de carril refleja:',
    options: [
      'Confianza excesiva en información visual incompleta.',
      'Técnica perfecta de manejo defensivo.',
      'Excelente coordinación psicomotora.',
      'Ahorro de energía ocular.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Todo vehículo posee zonas laterales fuera del alcance de los espejos; asumir que el carril está libre sin comprobar el punto ciego es una falla de percepción de riesgo.',
    distractorRationale: {
      A: 'Una motocicleta puede quedar completamente oculta en el ángulo muerto lateral.',
      B: 'El manejo defensivo exige verificar espejos y punto ciego.',
      C: 'Omitir verificaciones visuales no demuestra pericia psicomotora.',
      D: 'La seguridad visual siempre prima.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-p019',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Exceso de Confianza Tras Obtener Licencia',
    question: 'Estadísticamente, ¿en qué etapa suele aumentar el riesgo de siniestros por exceso de confianza en conductores novatos?',
    statement: 'Estadísticamente, ¿en qué etapa suele aumentar el riesgo de siniestros por exceso de confianza en conductores novatos?',
    options: [
      'El primer día cuando conducen muy lento y cautelosos.',
      'Entre los 6 y 18 meses de práctica, cuando ya dominan los pedales pero aún sobrestiman su capacidad ante imprevistos.',
      'Únicamente después de 30 años de experiencia.',
      'Solo en estacionamientos cerrados.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El dominio mecánico básico llega antes que la madurez perceptiva del riesgo; la falsa sensación de maestría en los primeros meses eleva la temeridad.',
    distractorRationale: {
      A: 'Al inicio la cautela suele compensar la inexperiencia.',
      B: 'Mantener la humildad preventiva durante los primeros años reduce drásticamente siniestros.',
      C: 'Los conductores veteranos suelen tener menor siniestralidad salvo deterioro físico.',
      D: 'Los siniestros graves ocurren principalmente en vías rápidas y cruces.'
    },
    legalReference: 'Estudios de Seguridad Vial VMT / OMS.'
  },
  {
    id: 'vmt-p020',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Cálculo de Distancia de Rebase',
    question: 'En una carretera de dos carriles, un conductor duda si tiene espacio suficiente para rebasar antes de la próxima curva. ¿Cuál es la decisión psicológicamente sana?',
    statement: 'En una carretera de dos carriles, un conductor duda si tiene espacio suficiente para rebasar antes de la próxima curva. ¿Cuál es la decisión psicológicamente sana?',
    options: [
      'Acelerar al máximo confiando en la suerte.',
      'Rebasar obligando al tráfico opuesto a orillarse.',
      'Abortar el intento de rebase y permanecer detrás del vehículo hasta contar con visibilidad plena y margen amplio.',
      'Cerrar los ojos mientras rebasa.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La regla de oro ante la duda en un adelantamiento es NO rebasar; asumir riesgos inciertos frente a tráfico frontal es potencialmente mortal.',
    distractorRationale: {
      A: 'Confiar en la suerte ante energía cinética frontal es temerario.',
      B: 'Forzar a terceros a salirse de la vía provoca choques múltiples.',
      C: 'Ante cualquier duda razonable, abstenerse de maniobrar demuestra juicio maduro.',
      D: 'Es una conducta absurda y letal.'
    },
    legalReference: 'Manual de Psicología Vial VMT.'
  },
  {
    id: 'vmt-p021',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Subestimación de Trayectos Cortos',
    question: '¿Por qué es un grave error psicológico pensar "no me pongo el cinturón porque solo voy a la tienda a tres cuadras"?',
    statement: '¿Por qué es un grave error psicológico pensar "no me pongo el cinturón porque solo voy a la tienda a tres cuadras"?',
    options: [
      'Porque el cinturón solo funciona en autopistas.',
      'Porque los policías solo vigilan en las tiendas.',
      'Porque a menos de 40 km/h no existen lesiones.',
      'Porque la mayoría de los accidentes ocurren en trayectos cortos y cotidianos cerca del hogar, donde se baja la guardia.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La familiaridad con el barrio genera relajación atencional; un choque frontal urbano a 40 km/h sin cinturón equivale a caer desde un segundo piso.',
    distractorRationale: {
      A: 'El cinturón retiene el cuerpo en cualquier impacto desde 15-20 km/h.',
      B: 'La razón es física y médica, no solo policial.',
      C: 'A 40 km/h el impacto contra el parabrisas puede ser mortal.',
      D: 'Abrochar el cinturón antes de encender el motor debe ser un hábito automático siempre.'
    },
    legalReference: 'Manual de Seguridad Vial VMT / OMS.'
  },
  {
    id: 'vmt-p022',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Peatones con Auriculares o Celular',
    question: 'Al aproximarse a un peatón que camina por el borde de la calle mirando su teléfono móvil y usando audífonos, ¿qué debe asumir el conductor?',
    statement: 'Al aproximarse a un peatón que camina por el borde de la calle mirando su teléfono móvil y usando audífonos, ¿qué debe asumir el conductor?',
    options: [
      'Que el peatón no lo ha visto ni oído, por lo que debe bajar velocidad, ampliar separación lateral y estar listo para frenar.',
      'Que el peatón se apartará mágicamente sin mirar.',
      'Que puede pasarle a diez centímetros a 70 km/h.',
      'Que el peatón tiene la culpa de todo y no hay que frenar.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Un peatón distraído ("peatón tecnológico") tiene desconectada su alerta auditiva y visual; el conductor defensivo compensa esa vulnerabilidad.',
    distractorRationale: {
      A: 'Anticipar la distracción ajena evita atropellos prevenibles.',
      B: 'El peatón distraído puede dar un paso hacia la calzada sin advertir el peligro.',
      C: 'Pasar rozando a un peatón es temerario e ilegal.',
      D: 'La integridad física prima sobre cualquier reproche.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-p023',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Condiciones Nocturnas de Fin de Semana',
    question: 'Al conducir durante la madrugada de un fin de semana, ¿qué precaución psicológica adicional debe mantener incluso si usted está 100% sobrio?',
    statement: 'Al conducir durante la madrugada de un fin de semana, ¿qué precaución psicológica adicional debe mantener incluso si usted está 100% sobrio?',
    options: [
      'Circular a 120 km/h porque las calles están solas.',
      'Extremar vigilancia en intersecciones y curvas ante la posible presencia de otros conductores ebrios, somnolientos o temerarios.',
      'Apagar las luces para pasar desapercibido.',
      'Cruzar los semáforos en rojo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'En madrugadas de fin de semana confluyen fatiga, menor visibilidad y mayor probabilidad de conductores imprudentes en sentido contrario o cruces.',
    distractorRationale: {
      A: 'La alta velocidad nocturna reduce drásticamente el margen ante un infractor.',
      B: 'Estar alerta y moderar la velocidad en intersecciones salva vidas aunque el verde esté a su favor.',
      C: 'Las luces encendidas son vitales para ser visto.',
      D: 'Jamás deben cruzarse semáforos en rojo.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p024',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Influencia de Pasajeros Jóvenes',
    question: '¿Cómo suele influir la presión de grupo cuando un conductor joven viaja acompañado de amigos que lo animan a correr más rápido?',
    statement: '¿Cómo suele influir la presión de grupo cuando un conductor joven viaja acompañado de amigos que lo animan a correr más rápido?',
    options: [
      'Mejora la concentración del conductor.',
      'Reduce el consumo de combustible.',
      'Aumenta la probabilidad de asumir riesgos temerarios para demostrar destreza, elevando drásticamente el riesgo de siniestro fatal.',
      'No tiene ninguna influencia psicológica.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La validación social entre pares impulsa decisiones impulsivas; el conductor responsable ejerce liderazgo firme priorizando la vida de sus acompañantes.',
    distractorRationale: {
      A: 'Las bromas y gritos distraen severamente al conductor.',
      B: 'Correr más rápido aumenta el consumo y el peligro.',
      C: 'Resistir la presión grupal es un indicador clave de madurez psicológica vial.',
      D: 'La psicología vial documenta fuertemente el efecto de los pares en jóvenes.'
    },
    legalReference: 'Evaluación Psicológica de Aptitud Vial VMT.'
  },
  {
    id: 'vmt-p025',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Mantenimiento Postergado',
    question: 'Decidir salir a carretera con llantas lisas pensando "todavía aguantan un viaje más" evidencia:',
    statement: 'Decidir salir a carretera con llantas lisas pensando "todavía aguantan un viaje más" evidencia:',
    options: [
      'Ahorro inteligente.',
      'Buen conocimiento mecánico.',
      'Conducta preventiva.',
      'Sesgo de optimismo irreal y negligencia frente a un riesgo mecánico previsible.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Postergar reparaciones críticas de frenos o llantas por optimismo infundado traslada una falla latente a situaciones de alta velocidad.',
    distractorRationale: {
      A: 'Un reventón o choque cuesta infinitamente más que sustituir neumáticos a tiempo.',
      B: 'Mecánicamente las llantas sin dibujo son peligrosas.',
      C: 'Es exactamente lo opuesto a la prevención.',
      D: 'Reconocer los límites del desgaste y actuar antes del viaje es conducta segura.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p026',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Visión de Túnel por Estrés',
    question: 'Cuando un conductor está muy preocupado por una crisis personal o laboral mientras maneja, ¿qué ocurre con su percepción del entorno vial?',
    statement: 'Cuando un conductor está muy preocupado por una crisis personal o laboral mientras maneja, ¿qué ocurre con su percepción del entorno vial?',
    options: [
      'Sufre distracción cognitiva ("ceguera por inatención"): mira hacia adelante pero no procesa señales, semáforos ni peatones.',
      'Conduce con mayor precisión automática.',
      'Detecta más rápido los peligros.',
      'Mejora su memoria espacial.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La carga emocional intensa consume recursos de atención ejecutiva, haciendo que el conductor pase semáforos en rojo o ignore frenazos sin darse cuenta.',
    distractorRationale: {
      A: 'Si se atraviesa una crisis emocional aguda, conviene detenerse a calmarse o pedir transporte.',
      B: 'El piloto automático mental falla ante imprevistos.',
      C: 'El tiempo de reacción empeora notablemente.',
      D: 'La rumiación mental bloquea la conciencia situacional.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p027',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Percepción del Peligro en Motocicleta',
    question: '¿Qué actitud mental es indispensable para un motociclista al circular en tráfico urbano denso?',
    statement: '¿Qué actitud mental es indispensable para un motociclista al circular en tráfico urbano denso?',
    options: [
      'Asumir que todos los automovilistas lo ven perfectamente.',
      'Conducir como si fuera "invisible" para los autos, ubicándose fuera de puntos ciegos y anticipando giros sin direccional.',
      'Competir en velocidad con los autobuses.',
      'Usar ropa oscura sin casco para mayor comodidad.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Por su silueta estrecha, las motocicletas pasan inadvertidas con facilidad ("ceguera de movimiento"); anticipar que el auto no nos ha visto salva vidas.',
    distractorRationale: {
      A: 'La frase "no lo vi" es la más común tras colisiones contra motos.',
      B: 'Posicionarse donde sea visible en espejos y prever invasiones de carril es esencial.',
      C: 'Competir contra vehículos pesados es suicida.',
      D: 'El casco y colores visibles son obligatorios.'
    },
    legalReference: 'Manual de Seguridad para Motociclistas VMT.'
  },
  {
    id: 'vmt-p028',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Evaluación de Velocidad de Vehículos que se Aproximan',
    question: 'Al esperar para cruzar una carretera rápida, ¿por qué suele subestimarse la velocidad real de una motocicleta o un auto pequeño que se aproxima de frente?',
    statement: 'Al esperar para cruzar una carretera rápida, ¿por qué suele subestimarse la velocidad real de una motocicleta o un auto pequeño que se aproxima de frente?',
    options: [
      'Porque los vehículos pequeños siempre van despacio.',
      'Porque el cerebro humano percibe los objetos pequeños como más lejanos o lentos de lo que realmente están (ilusión tamaño-velocidad).',
      'Porque los faros engañan haciéndolos parecer detenidos.',
      'No existe ninguna dificultad perceptiva.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El sistema visual juzga la velocidad por el crecimiento angular del objeto; un vehículo angosto como una moto parece acercarse más lento hasta estar muy encima.',
    distractorRationale: {
      A: 'Las motocicletas alcanzan altas velocidades rápidamente.',
      B: 'Por ello debe observarse dos veces y dejar margen amplio antes de cruzar.',
      C: 'Es un efecto de tamaño angular, no de detención aparente.',
      D: 'Conocer esta limitación perceptiva humana previene cortes de paso fatales.'
    },
    legalReference: 'Manual de Psicología Perceptiva Vial VMT.'
  },
  {
    id: 'vmt-p029',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Compensación del Riesgo',
    question: '¿Qué es el fenómeno psicológico de "compensación del riesgo" en vehículos con mucha tecnología (ABS, tracción integral, airbags)?',
    statement: '¿Qué es el fenómeno psicológico de "compensación del riesgo" en vehículos con mucha tecnología (ABS, tracción integral, airbags)?',
    options: [
      'Sentirse invulnerable gracias a la tecnología y conducir más rápido o más pegado, anulando el margen de seguridad que esos sistemas brindaban.',
      'Conducir más despacio al comprar un auto nuevo.',
      'Revisar el manual del propietario cada semana.',
      'Usar siempre el cinturón de seguridad.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Ninguna asistencia electrónica puede vencer las leyes de la física; usar la tecnología para ir más al límite destruye el beneficio preventivo.',
    distractorRationale: {
      A: 'La tecnología debe sumar margen de seguridad, nunca justificar mayor temeridad.',
      B: 'La compensación del riesgo opera en sentido inverso (más audacia por falsa seguridad).',
      C: 'Es un buen hábito, no compensación del riesgo.',
      D: 'El cinturón es precaución real.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p030',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Condiciones Cambiantes en Curvas de Montaña',
    question: 'En carreteras montañosas, ¿por qué es peligroso confiar en que "conocemos la curva de memoria" porque pasamos por ahí todos los días?',
    statement: 'En carreteras montañosas, ¿por qué es peligroso confiar en que "conocemos la curva de memoria" porque pasamos por ahí todos los días?',
    options: [
      'Porque el trazado cambia de forma mágica.',
      'Porque pueden haber aparecido derrames de diésel, piedras caídas, agua, peatones o un camión detenido justo tras la curva.',
      'Porque los frenos se gastan más en rutas conocidas.',
      'No hay ningún peligro en rutas conocidas.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La familiaridad con la ruta reduce la alerta; aunque la geometría sea la misma, las condiciones superficiales y obstáculos cambian cada día.',
    distractorRationale: {
      A: 'La geometría no cambia, pero el entorno dinámico sí.',
      B: 'Muchos siniestros graves ocurren en rutas rutinarias por exceso de confianza.',
      C: 'El desgaste depende de la técnica de frenado.',
      D: 'La atención debe mantenerse intacta en rutas habituales.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-p031',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Conducción con Prisa Crónica',
    question: 'Salir tarde hacia una cita importante y tratar de "recuperar el tiempo en la carretera" suele provocar:',
    statement: 'Salir tarde hacia una cita importante y tratar de "recuperar el tiempo en la carretera" suele provocar:',
    options: [
      'Ahorro real de treinta minutos en diez kilómetros urbanos.',
      'Mayor serenidad mental.',
      'Aumento de maniobras impulsivas (rebases arriesgados, semáforos en amarillo/rojo) por apenas unos segundos o minutos de ganancia.',
      'Menor desgaste del vehículo.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Matemáticamente, correr a 100 km/h en vez de 80 km/h en tramos cortos ahorra muy pocos minutos mientras multiplica enormemente la probabilidad de choque.',
    distractorRationale: {
      A: 'En ciudad los semáforos igualan los tiempos; correr apenas ahorra segundos.',
      B: 'La prisa genera estrés, adrenalina y agresividad.',
      C: 'Planificar la salida con 15 minutos de margen elimina la urgencia al volante.',
      D: 'Acelerones y frenazos desgastan frenos, llantas y combustible.'
    },
    legalReference: 'Manual de Psicología Vial VMT.'
  },
  {
    id: 'vmt-p032',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Efecto de Luces de Freno Intermitentes Adelante',
    question: 'Si observa que varios vehículos lejanos adelante encienden sus luces de freno o las intermitentes, ¿qué interpretación preventiva es correcta?',
    statement: 'Si observa que varios vehículos lejanos adelante encienden sus luces de freno o las intermitentes, ¿qué interpretación preventiva es correcta?',
    options: [
      'Cambiar al carril contrario para acelerar.',
      'Ignorarlo hasta estar a tres metros del último auto.',
      'Soltar el acelerador de inmediato, preparar el freno y ampliar distancia porque existe una retención o accidente adelante.',
      'Tocar la bocina.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Leer las luces de varios vehículos adelante permite desacelerar progresivamente y evitar quedar atrapado en una colisión múltiple.',
    distractorRationale: {
      A: 'Cambiar bruscamente sin ver el motivo de la retención es peligroso.',
      B: 'Esperar al último momento obliga a frenadas de pánico.',
      C: 'La anticipación temprana reduce el riesgo de choque por alcance.',
      D: 'La bocina no disuelve un embotellamiento.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-p033',
    category: 'psicologico',
    topic: 'Percepción de Riesgo — Evaluación de Altura de Agua en Calzada',
    question: 'Ante una calle inundada donde no se distingue el fondo ni el cordón de la acera, ¿qué actitud demuestra adecuada percepción de riesgo?',
    statement: 'Ante una calle inundada donde no se distingue el fondo ni el cordón de la acera, ¿qué actitud demuestra adecuada percepción de riesgo?',
    options: [
      'Lanzarse a cruzar confiando en que el auto es alto.',
      'Seguir pegado a un camión que cruza.',
      'Acelerar a fondo.',
      'Detenerse y buscar ruta alterna segura, ya que puede haber tragantes destapados, baches profundos o corriente de arrastre oculta.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El agua turbia oculta alcantarillas sin tapa y socavones; evitar cruzar aguas desconocidas protege la vida de los ocupantes.',
    distractorRationale: {
      A: 'Incluso vehículos altos pierden tracción y flotan en corrientes moderadas.',
      B: 'La estela del camión crea olas que inundan la admisión de autos detrás.',
      C: 'Acelerar empeora el golpe hidráulico.',
      D: 'La prudencia ante peligros ocultos evita tragedias.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  // ==========================================================================
  // CONTROL DE IMPULSOS E IRA AL VOLANTE (ROAD RAGE)
  // ==========================================================================
  {
    id: 'vmt-p034',
    category: 'psicologico',
    topic: 'Control de Impulsos — Respuesta Ante Insulto o Seña Obscena',
    question: 'Si otro conductor le grita insultos o realiza gestos ofensivos desde su ventanilla tras una maniobra en tráfico, ¿cuál es la respuesta emocionalmente inteligente?',
    statement: 'Si otro conductor le grita insultos o realiza gestos ofensivos desde su ventanilla tras una maniobra en tráfico, ¿cuál es la respuesta emocionalmente inteligente?',
    options: [
      'Mantener la calma, no responder con gestos ni gritos, evitar el contacto visual prolongado y alejarse con seguridad.',
      'Perseguirlo para cerrarle el paso.',
      'Bajar la ventanilla e insultarlo más fuerte.',
      'Frenar bruscamente delante de él.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Escalar una provocación vial puede derivar en agresiones físicas, choques intencionales o violencia armada; ignorar la provocación protege su vida.',
    distractorRationale: {
      A: 'El autocontrol emocional desactiva el conflicto y evita tragedias.',
      B: 'Perseguir a un conductor agresivo convierte un incidente menor en peligro grave.',
      C: 'Responder agresivamente escala la hostilidad.',
      D: 'Frenar para provocar un choque es conducción temeraria.'
    },
    legalReference: 'Evaluación Psicológica VMT.'
  },
  {
    id: 'vmt-p035',
    category: 'psicologico',
    topic: 'Control de Impulsos — Conducta "Tailgating" (Pegarse Atrás)',
    question: 'Si un conductor impaciente se pega a menos de dos metros detrás de su vehículo haciendo cambio de luces altas para presionarlo, ¿qué debe hacer?',
    statement: 'Si un conductor impaciente se pega a menos de dos metros detrás de su vehículo haciendo cambio de luces altas para presionarlo, ¿qué debe hacer?',
    options: [
      'Pisar el freno de golpe para darle un susto.',
      'Mantener la calma, no acelerar por presión y, en cuanto sea seguro, facilitar que lo rebase cediendo el paso hacia la derecha.',
      'Acelerar a 130 km/h para que no lo alcance.',
      'Encender el limpiaparabrisas trasero para mojarlo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Dejar pasar a un conductor agresivo lo aleja de su vehículo y elimina el riesgo de que lo choque por detrás si usted debe frenar.',
    distractorRationale: {
      A: 'Frenar de golpe provoca casi con certeza un choque trasero.',
      B: 'Ceder el paso al impaciente es la respuesta más segura e inteligente.',
      C: 'Entrar en una carrera por presión ajena lo expone a multas y choques.',
      D: 'Provocar al acosador empeora su agresividad.'
    },
    legalReference: 'Manual de Manejo Defensivo y Psicología Vial VMT.'
  },
  {
    id: 'vmt-p036',
    category: 'psicologico',
    topic: 'Control de Impulsos — Error Ajeno Involuntario',
    question: 'Otro conductor se equivoca de carril y se incorpora bruscamente delante de usted sin direccional, obligándolo a frenar. ¿Qué pensamiento ayuda a mantener el control?',
    statement: 'Otro conductor se equivoca de carril y se incorpora bruscamente delante de usted sin direccional, obligándolo a frenar. ¿Qué pensamiento ayuda a mantener el control?',
    options: [
      '"Lo hizo a propósito para humillarme y debo vengarme."',
      '"Debo chocarlo para enseñarle una lección."',
      '"Probablemente se distrajo o no me vio; lo importante es que frené a tiempo y todos estamos a salvo."',
      '"Voy a tocarle la bocina los próximos cinco kilómetros."'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Reinterpretar los errores ajenos sin atribuir mala intención personal reduce drásticamente la activación de la ira.',
    distractorRationale: {
      A: 'Personalizar cada error de tráfico dispara el estrés y la violencia vial.',
      B: 'Usar el vehículo como arma es delito.',
      C: 'La reevaluación cognitiva serena preserva la seguridad y salud mental.',
      D: 'El acoso acústico prolongado genera conflictos innecesarios.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p037',
    category: 'psicologico',
    topic: 'Control de Impulsos — Efecto de la Música Agresiva o Volumen Extremo',
    question: '¿Cómo puede influir escuchar música a volumen ensordecedor o de ritmo muy agresivo mientras se conduce en tráfico pesado?',
    statement: '¿Cómo puede influir escuchar música a volumen ensordecedor o de ritmo muy agresivo mientras se conduce en tráfico pesado?',
    options: [
      'Mejora la audición de ambulancias.',
      'Reduce el tiempo de frenado.',
      'No tiene ningún efecto.',
      'Aumenta la activación fisiológica, impulsa a acelerar inconscientemente e impide oír sirenas o alertas externas.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'El volumen excesivo aísla acústicamente la cabina y el ritmo acelerado tiende a inducir conducción más impaciente y rápida.',
    distractorRationale: {
      A: 'Impide escuchar sirenas, bocinas y ruidos mecánicos anormales.',
      B: 'No mejora el frenado.',
      C: 'Está comprobado su impacto en la atención y el ritmo de manejo.',
      D: 'Mantener un volumen moderado favorece la calma y percepción auditiva.'
    },
    legalReference: 'Manual de Psicología Vial VMT.'
  },
  {
    id: 'vmt-p038',
    category: 'psicologico',
    topic: 'Control de Impulsos — Impaciencia en Embotellamientos',
    question: 'Durante un embotellamiento severo donde todos los carriles avanzan muy lento, cambiar constantemente de un carril a otro ("zigzagueo") suele:',
    statement: 'Durante un embotellamiento severo donde todos los carriles avanzan muy lento, cambiar constantemente de un carril a otro ("zigzagueo") suele:',
    options: [
      'Aumentar el estrés, elevar el riesgo de roces laterales y retrasar aún más el flujo general sin ahorrar tiempo significativo.',
      'Ahorrar al menos 40 minutos en un kilómetro.',
      'Mejorar la fluidez de todos los demás.',
      'Reducir el desgaste de frenos.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Cada cambio innecesario de carril obliga a frenar a quienes vienen detrás creando ondas de choque de congestión y riesgo de colisión.',
    distractorRationale: {
      A: 'Mantener el carril con calma reduce accidentes menores y fatiga mental.',
      B: 'Estudios de tráfico demuestran que zigzaguear apenas gana segundos o nada.',
      C: 'Genera más frenazos en cadena.',
      D: 'Aumenta los acelerones y frenadas constantes.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p039',
    category: 'psicologico',
    topic: 'Control de Impulsos — Baja Tolerancia a la Frustración',
    question: '¿Qué rasgo psicológico representa mayor riesgo de infracciones reiteradas y conflictos viales?',
    statement: '¿Qué rasgo psicológico representa mayor riesgo de infracciones reiteradas y conflictos viales?',
    options: [
      'La paciencia ante retrasos imprevistos.',
      'La impulsividad y baja tolerancia a la frustración (no aceptar demoras, semáforos o vehículos lentos).',
      'La planificación anticipada del viaje.',
      'El respeto a las normas SIECA.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La intolerancia a la frustración lleva a saltarse luces rojas, rebasar en doble línea y reaccionar con agresividad.',
    distractorRationale: {
      A: 'La paciencia es un factor protector fundamental.',
      B: 'Los exámenes psicológicos del VMT buscan detectar impulsividad descontrolada.',
      C: 'Planificar reduce la frustración.',
      D: 'El respeto normativo refleja estabilidad.'
    },
    legalReference: 'Evaluación Psicológica de Aptitud Vial VMT.'
  },
  {
    id: 'vmt-p040',
    category: 'psicologico',
    topic: 'Control de Impulsos — Discusión Acalorada Antes de Conducir',
    question: 'Si acaba de tener una discusión familiar o laboral muy intensa que lo dejó temblando de enojo, ¿qué decisión es más responsable?',
    statement: 'Si acaba de tener una discusión familiar o laboral muy intensa que lo dejó temblando de enojo, ¿qué decisión es más responsable?',
    options: [
      'Subir de inmediato al auto y conducir rápido para "desahogarse".',
      'Tomar bebidas alcohólicas para calmarse y manejar.',
      'Esperar unos minutos respirando profundamente hasta recuperar la calma antes de encender el vehículo, o posponer el viaje.',
      'Conducir tocando la bocina todo el camino.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La descarga de adrenalina por enojo intenso nubla el juicio, fomenta conducción agresiva y desvía la atención hacia los pensamientos de la discusión.',
    distractorRationale: {
      A: 'Usar la conducción como descarga emocional pone en peligro vidas inocentes.',
      B: 'El alcohol agrava la impulsividad y viola la ley.',
      C: 'Tomar 5-10 minutos para regular la emoción antes de manejar es conducta madura.',
      D: 'Aumentaría el conflicto con otros conductores.'
    },
    legalReference: 'Manual de Psicología Vial VMT.'
  },
  {
    id: 'vmt-p041',
    category: 'psicologico',
    topic: 'Control de Impulsos — Competitividad en Carriles de Fusión',
    question: 'Al llegar a un estrechamiento de dos carriles a uno, otro vehículo intenta incorporarse delante suyo. ¿Qué actitud refleja madurez emocional?',
    statement: 'Al llegar a un estrechamiento de dos carriles a uno, otro vehículo intenta incorporarse delante suyo. ¿Qué actitud refleja madurez emocional?',
    options: [
      'Acelerar para cerrar el hueco porque "es mi lugar".',
      'Pitarle insistentemente para que choque contra los conos.',
      'Chocar levemente su guardafango para no ceder.',
      'Aplicar la regla cortés de "uno a uno" (cremallera), cediendo el paso suavemente para evitar roces.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La fusión alternada ("cremallera") es la forma más rápida, ordenada y pacífica de superar estrechamientos sin colisiones.',
    distractorRationale: {
      A: 'Competir por un espacio de tres metros suele terminar en choque lateral y horas de espera.',
      B: 'Intimidar hacia una zona de obras es peligroso.',
      C: 'Provocar un choque intencional es ilícito.',
      D: 'Ceder un espacio toma dos segundos y mantiene el flujo seguro.'
    },
    legalReference: 'Manual de Seguridad y Cortesía Vial VMT.'
  },
  {
    id: 'vmt-p042',
    category: 'psicologico',
    topic: 'Control de Impulsos — Reconocimiento del Propio Error',
    question: 'Si usted comete involuntariamente un error de manejo (por ejemplo, cerrarle el paso a alguien al cambiar de carril), ¿qué gesto ayuda a prevenir la ira del otro conductor?',
    statement: 'Si usted comete involuntariamente un error de manejo (por ejemplo, cerrarle el paso a alguien al cambiar de carril), ¿qué gesto ayuda a prevenir la ira del otro conductor?',
    options: [
      'Levantar brevemente la mano en señal cortés de disculpa y corregir la posición con seguridad.',
      'Gritarle insultos para atacar primero.',
      'Acelerar haciéndole señas ofensivas.',
      'Frenar en seco frente a él.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Un gesto breve de reconocimiento humano ("disculpa") desarma instantáneamente gran parte de la frustración del otro conductor.',
    distractorRationale: {
      A: 'Asumir con humildad una equivocación humana pacifica el entorno vial.',
      B: 'Atacar tras equivocarse empeora la confrontación.',
      C: 'Las señas ofensivas escalan el conflicto.',
      D: 'Frenar bruscamente provoca el choque que se evitó.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p043',
    category: 'psicologico',
    topic: 'Control de Impulsos — Uso Racional de Luces Altas por Molestia',
    question: 'Si un vehículo que viene en sentido contrario olvida bajar sus luces altas, ¿qué reacción es incorrecta y peligrosa?',
    statement: 'Si un vehículo que viene en sentido contrario olvida bajar sus luces altas, ¿qué reacción es incorrecta y peligrosa?',
    options: [
      'Hacer un cambio breve y rápido de luces para recordárselo y luego mantener luces bajas mirando el borde derecho.',
      'Dejarle fijas sus propias luces altas en venganza para cegarlo también a él.',
      'Reducir ligeramente la velocidad hasta cruzarlo.',
      'Mantener la calma y su carril.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Dejar las luces altas fijas en represalia crea dos conductores cegados avanzando uno hacia el otro a alta velocidad.',
    distractorRationale: {
      A: 'Un destello breve es la señal cortés estándar de advertencia.',
      B: 'Cegar deliberadamente al conductor opuesto puede hacer que invada su propio carril.',
      C: 'Reducir la velocidad aumenta el margen de seguridad.',
      D: 'La serenidad previene reacciones vengativas.'
    },
    legalReference: 'Manual de Conducción Nocturna VMT.'
  },
  {
    id: 'vmt-p044',
    category: 'psicologico',
    topic: 'Control de Impulsos — Deseo de Venganza Contra Vehículos Lentos',
    question: 'Tras ir varios minutos detrás de un camión lento en una carretera con doble línea amarilla continua, finalmente llega un tramo de rebase autorizado. ¿Cómo debe proceder?',
    statement: 'Tras ir varios minutos detrás de un camión lento en una carretera con doble línea amarilla continua, finalmente llega un tramo de rebase autorizado. ¿Cómo debe proceder?',
    options: [
      'Rebasar con rabia, pegarse luego delante del camión y frenar para "desquitarse".',
      'Rebasar sin mirar el espejo ni señalizar.',
      'Ejecutar el rebase de forma limpia, rápida y segura tras verificar visibilidad, y continuar su viaje sin hostilidad.',
      'Gritarle al motorista del camión al pasar.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El camión lento cumplía su ritmo por peso y seguridad; guardar rencor tras rebasarlo y frenarle delante es sumamente peligroso porque un camión necesita muchos metros para frenar.',
    distractorRationale: {
      A: 'Frenar delante de un camión pesado puede provocar que lo aplaste por detrás.',
      B: 'La prisa emocional no exime de verificar espejos y direccional.',
      C: 'Ejecutar la maniobra técnica limpia y seguir adelante refleja equilibrio emocional.',
      D: 'Distraerse gritando al pasar eleva el riesgo de pérdida de control.'
    },
    legalReference: 'Manual de Psicología Vial VMT.'
  },
  {
    id: 'vmt-p045',
    category: 'psicologico',
    topic: 'Control de Impulsos — Manejo del Estrés por Semáforos Desincronizados',
    question: 'Si encuentra varios semáforos en rojo consecutivos y siente que aumenta su irritabilidad, ¿qué técnica ayuda a regular el impulso?',
    statement: 'Si encuentra varios semáforos en rojo consecutivos y siente que aumenta su irritabilidad, ¿qué técnica ayuda a regular el impulso?',
    options: [
      'Acelerar a 100 km/h entre cuadra y cuadra para pasar en amarillo.',
      'Cruzar la última luz roja mirando hacia los lados.',
      'Tocar la bocina al semáforo.',
      'Respirar lento, aceptar que el retraso es de pocos minutos y aprovechar la pausa para relajar hombros y manos.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Aceptar las demoras inherentes al tráfico urbano evita conductas impulsivas que arriesgan multas de $150 y choques laterales.',
    distractorRationale: {
      A: 'Acelerar entre semáforos cercanos apenas ahorra segundos y gasta frenos y combustible.',
      B: 'Pasar en rojo es falta muy grave y causa principal de choques urbanos.',
      C: 'Los semáforos son automáticos; pitar solo genera estrés.',
      D: 'La regulación respiratoria breve reduce la tensión muscular y mental.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p046',
    category: 'psicologico',
    topic: 'Control de Impulsos — Conducción Como Competencia Deportiva',
    question: '¿Por qué es psicológicamente incompatible ver la vía pública como una pista de competencia donde "no hay que dejarse ganar"?',
    statement: '¿Por qué es psicológicamente incompatible ver la vía pública como una pista de competencia donde "no hay que dejarse ganar"?',
    options: [
      'Porque el tránsito es un sistema cooperativo donde la meta es llegar a salvo, no llegar primero venciendo a otros.',
      'Porque los autos de calle no tienen números en las puertas.',
      'Solo porque gasta más llantas.',
      'No es incompatible si el auto es potente.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La vía pública reúne usuarios vulnerables (niños, ancianos, ciclistas) sin protecciones de pista; la mentalidad competitiva es incompatible con la licencia de conducir.',
    distractorRationale: {
      A: 'La cooperación y cortesía sostienen la seguridad vial.',
      B: 'La diferencia es ética, legal y de seguridad vital, no estética.',
      C: 'El riesgo principal son las vidas humanas, no solo las llantas.',
      D: 'La potencia del motor exige mayor responsabilidad, nunca competencia callejera.'
    },
    legalReference: 'Evaluación Psicológica VMT.'
  },
  {
    id: 'vmt-p047',
    category: 'psicologico',
    topic: 'Control de Impulsos — Autocontrol Ante Conductores Imprudentes',
    question: '¿Qué demuestra un conductor que logra mantener la serenidad cuando otro vehículo le cierra el paso inesperadamente?',
    statement: '¿Qué demuestra un conductor que logra mantener la serenidad cuando otro vehículo le cierra el paso inesperadamente?',
    options: [
      'Debilidad de carácter.',
      'Madurez emocional, inteligencia vial y capacidad para priorizar la seguridad sobre el ego.',
      'Falta de conocimiento de las leyes.',
      'Desinterés por su vehículo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Dominar la reacción impulsiva ante una provocación demuestra fortaleza psicológica y aptitud real para conducir.',
    distractorRationale: {
      A: 'La verdadera fortaleza es el autocontrol, no la reacción visceral.',
      B: 'Separar el ego de la conducción protege la integridad propia y ajena.',
      C: 'Conocer la ley incluye saber que la venganza vial es ilegal.',
      D: 'Evitar choques es precisamente cuidar el patrimonio y la vida.'
    },
    legalReference: 'Evaluación Psicológica de Aptitud Vial VMT.'
  },
  {
    id: 'vmt-p048',
    category: 'psicologico',
    topic: 'Control de Impulsos — Bajar del Vehículo a Confrontar',
    question: '¿Por qué nunca debe bajar de su vehículo en medio de la calle para reclamar o confrontar físicamente a otro conductor tras un incidente?',
    statement: '¿Por qué nunca debe bajar de su vehículo en medio de la calle para reclamar o confrontar físicamente a otro conductor tras un incidente?',
    options: [
      'Porque se enfría el motor.',
      'Porque puede perder el turno en el semáforo.',
      'Porque expone su vida a agresiones graves, atropellos por otros vehículos y escalamiento penal innecesario.',
      'Únicamente porque puede llover.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Bajar a discutir en la calzada rompe la protección de la cabina y desencadena peleas violentas o atropellos.',
    distractorRationale: {
      A: 'El riesgo es de integridad física y vida, no mecánico.',
      B: 'La seguridad personal supera cualquier demora.',
      C: 'Si hubo colisión, se debe esperar dentro o en zona segura llamando a la PNC-DTT.',
      D: 'El peligro existe en todo clima.'
    },
    legalReference: 'Manual de Seguridad y Psicología Vial VMT.'
  },
  {
    id: 'vmt-p049',
    category: 'psicologico',
    topic: 'Control de Impulsos — Tolerancia Ante Conductores Principiantes',
    question: 'Si delante de usted circula un vehículo con rótulo de "Conductor Aprendiz" o alguien al que se le apaga el motor en una cuesta, ¿cuál es la actitud correcta?',
    statement: 'Si delante de usted circula un vehículo con rótulo de "Conductor Aprendiz" o alguien al que se le apaga el motor en una cuesta, ¿cuál es la actitud correcta?',
    options: [
      'Pegarse a su parachoques y pitar sin parar para ponerlo más nervioso.',
      'Acelerar pasando a centímetros de su puerta.',
      'Gritarle que no salga a la calle.',
      'Mantener mayor distancia de seguridad (por si retrocede en la cuesta) y darle tiempo con paciencia.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Pitar insistentemente a un principiante nervioso provoca que suelte el embrague bruscamente o se apague de nuevo, empeorando la demora y el riesgo.',
    distractorRationale: {
      A: 'La presión acústica bloquea al aprendiz y puede causar un choque en cuesta.',
      B: 'Pasar rozando genera pánico y maniobras erráticas.',
      C: 'Todos los conductores fueron principiantes alguna vez.',
      D: 'La paciencia y distancia extra benefician a ambos conductores.'
    },
    legalReference: 'Manual de Cortesía y Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p050',
    category: 'psicologico',
    topic: 'Control de Impulsos — Manejo de la Ansiedad en Autopistas',
    question: 'Si un conductor siente nerviosismo o ansiedad elevada al incorporarse a una autopista rápida, ¿qué estrategia psicológica y práctica es adecuada?',
    statement: 'Si un conductor siente nerviosismo o ansiedad elevada al incorporarse a una autopista rápida, ¿qué estrategia psicológica y práctica es adecuada?',
    options: [
      'Respirar profundo, mantenerse en el carril derecho a velocidad estable dentro del rango seguro y practicar primero en horarios de menor flujo.',
      'Frenar en seco en medio del carril izquierdo.',
      'Cerrar los ojos al entrar.',
      'Tomar alcohol para "quitarse los nervios".'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La exposición gradual en horarios tranquilos, el carril derecho y la respiración controlada reducen la ansiedad sin poner en riesgo a terceros.',
    distractorRationale: {
      A: 'Ganar confianza progresivamente en horarios de bajo tráfico es el método saludable.',
      B: 'Detenerse en el carril rápido causa choques graves.',
      C: 'Obviamente incompatible con la conducción.',
      D: 'El alcohol nunca debe usarse para manejar.'
    },
    legalReference: 'Manual de Psicología Vial VMT.'
  },
  // ==========================================================================
  // FATIGA, SOMNOLENCIA Y ESTADO PSICOFÍSICO
  // ==========================================================================
  {
    id: 'vmt-p051',
    category: 'psicologico',
    topic: 'Fatiga — Primeros Síntomas de Somnolencia al Volante',
    question: '¿Cuáles son las señales de alarma tempranas que indican que la fatiga o el sueño están afectando su capacidad de conducir?',
    statement: '¿Cuáles son las señales de alarma tempranas que indican que la fatiga o el sueño están afectando su capacidad de conducir?',
    options: [
      'Bostezos frecuentes, pesadez de párpados, picazón ocular, dificultad para recordar los últimos kilómetros y cabeceo leve.',
      'Aumento de la agudeza visual.',
      'Mayor rapidez en los reflejos.',
      'Sensación de mucha energía y precisión.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'No recordar haber pasado los últimos kilómetros ("amnesia de carretera") o sentir párpados pesados indica que los microsueños son inminentes.',
    distractorRationale: {
      A: 'Reconocer estos síntomas tempranos obliga a detenerse a descansar de inmediato.',
      B: 'La fatiga reduce la agudeza visual y provoca visión borrosa.',
      C: 'Los reflejos se vuelven notablemente más lentos.',
      D: 'La fatiga disminuye la precisión y coordinación.'
    },
    legalReference: 'Manual de Prevención de Fatiga Vial VMT.'
  },
  {
    id: 'vmt-p052',
    category: 'psicologico',
    topic: 'Fatiga — Ineficacia de Remedios Caseros Contra el Sueño',
    question: 'Cuando un conductor siente sueño intenso en carretera, ¿qué eficacia tienen medidas como abrir la ventana, subir el volumen del radio o golpearse la cara?',
    statement: 'Cuando un conductor siente sueño intenso en carretera, ¿qué eficacia tienen medidas como abrir la ventana, subir el volumen del radio o golpearse la cara?',
    options: [
      'Curan definitivamente el sueño durante seis horas.',
      'Solo producen una activación pasajera de pocos minutos y NO evitan los microsueños; la única solución segura es detenerse y dormir.',
      'Reemplazan el descanso nocturno.',
      'Aumentan la oxigenación eliminando la fatiga muscular.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El cerebro fatigado puede sufrir microsueños de 3 a 5 segundos incluso con la música alta y la ventana abierta, recorriendo más de 100 metros dormido.',
    distractorRationale: {
      A: 'El efecto estimulante del aire frío dura apenas unos minutos.',
      B: 'Estacionarse en lugar seguro (gasolinera iluminada) y dormir 20-30 minutos es la medida efectiva.',
      C: 'Nada sustituye al sueño fisiológico.',
      D: 'El impulso biológico de dormir termina imponiéndose sobre la voluntad.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p053',
    category: 'psicologico',
    topic: 'Fatiga — Horarios de Mayor Vulnerabilidad Biológica',
    question: 'Según el ritmo circadiano humano, ¿en qué franjas horarias es naturalmente mayor el riesgo de somnolencia al volante?',
    statement: 'Según el ritmo circadiano humano, ¿en qué franjas horarias es naturalmente mayor el riesgo de somnolencia al volante?',
    options: [
      'A las 9:00 a.m. tras dormir ocho horas.',
      'Únicamente a las 6:00 p.m.',
      'En la madrugada (2:00 a.m. a 6:00 a.m.) y en la sobremesa vespertina (2:00 p.m. a 4:00 p.m.).',
      'El reloj biológico no influye en el sueño.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El organismo humano programa picos naturales de somnolencia en la madrugada y después del almuerzo, reduciendo la alerta incluso en personas descansadas.',
    distractorRationale: {
      A: 'La mañana tras buen descanso suele ser el período de mayor alerta.',
      B: 'Las 6:00 p.m. no corresponde al pico circadiano de sueño.',
      C: 'Evitar viajes largos en madrugada o descansar tras comidas pesadas reduce siniestros por sueño.',
      D: 'La cronobiología es un factor documentado en accidentes carreteros.'
    },
    legalReference: 'Manual de Prevención de Fatiga Vial VMT / OMS.'
  },
  {
    id: 'vmt-p054',
    category: 'psicologico',
    topic: 'Fatiga — Frecuencia Recomendada de Pausas en Viajes Largos',
    question: 'En viajes continuos por carretera, ¿cada cuánto tiempo o distancia se recomienda hacer una pausa activa para estirar las piernas e hidratarse?',
    statement: 'En viajes continuos por carretera, ¿cada cuánto tiempo o distancia se recomienda hacer una pausa activa para estirar las piernas e hidratarse?',
    options: [
      'Cada 12 horas continuas.',
      'Solo cuando se acabe el combustible.',
      'Únicamente una vez al llegar al destino.',
      'Cada 2 horas o cada 150-200 kilómetros recorridos, descansando al menos 15 minutos.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Las pausas cada 2 horas previenen la rigidez muscular, fatiga ocular y monotonía de carretera antes de que aparezca el sueño peligroso.',
    distractorRationale: {
      A: 'Doce horas continuas al volante multiplican exponencialmente el riesgo de microsueño.',
      B: 'Un vehículo moderno puede recorrer 600 km sin recargar, demasiado tiempo sin descanso humano.',
      C: 'Esperar al destino impide recuperar la atención en trayectos largos.',
      D: 'Descansar 15 minutos cada 2 horas mantiene estable la capacidad de reacción.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p055',
    category: 'psicologico',
    topic: 'Fatiga — Efecto de Comidas Copiosas Antes de Manejar',
    question: '¿Por qué es desaconsejable ingerir una comida muy abundante y alta en grasas justo antes de iniciar un viaje largo en carretera?',
    statement: '¿Por qué es desaconsejable ingerir una comida muy abundante y alta en grasas justo antes de iniciar un viaje largo en carretera?',
    options: [
      'Porque el proceso digestivo pesado induce somnolencia postprandial y pesadez, disminuyendo el estado de alerta.',
      'Porque aumenta demasiado la velocidad del vehículo.',
      'Porque bloquea el cinturón de seguridad.',
      'No produce ningún efecto en la atención.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Optar por alimentos ligeros e hidratación con agua mantiene la lucidez mental durante la conducción prolongada.',
    distractorRationale: {
      A: 'La somnolencia postprandial combinada con el calor en cabina favorece los microsueños.',
      B: 'No afecta el vehículo directamente.',
      C: 'No guarda relación técnica con el cinturón.',
      D: 'La alimentación pesada sí reduce la vigilancia cognitiva.'
    },
    legalReference: 'Manual de Psicología y Fisiología Vial VMT.'
  },
  {
    id: 'vmt-p056',
    category: 'psicologico',
    topic: 'Fatiga — Hipnosis de Carretera',
    question: '¿Qué es la llamada "hipnosis de carretera" durante trayectos largos y monótonos en autopista?',
    statement: '¿Qué es la llamada "hipnosis de carretera" durante trayectos largos y monótonos en autopista?',
    options: [
      'Un truco visual de las señales.',
      'Un estado de trance ligero con ojos abiertos donde el conductor opera automáticamente sin procesar cambios inesperados ni recordar el tramo.',
      'Una mejora de la visión nocturna.',
      'Un fallo mecánico de la dirección.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La monotonía visual de líneas rectas y ruido constante adormece la corteza prefrontal; variar la mirada hacia espejos y hacer pausas la previene.',
    distractorRationale: {
      A: 'No es causada por las señales sino por monotonía atencional.',
      B: 'Mover activamente los ojos, ventilar la cabina y parar cada 2 horas rompe la hipnosis.',
      C: 'Empeora la respuesta ante peligros.',
      D: 'Es un fenómeno cognitivo del conductor.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p057',
    category: 'psicologico',
    topic: 'Fatiga — Temperatura Interior de la Cabina',
    question: '¿Cómo influye mantener la calefacción o temperatura de la cabina demasiado cálida y sin ventilación durante un viaje largo?',
    statement: '¿Cómo influye mantener la calefacción o temperatura de la cabina demasiado cálida y sin ventilación durante un viaje largo?',
    options: [
      'Mantiene al conductor despierto y alerta.',
      'Mejora los reflejos musculares.',
      'Acelera la aparición de somnolencia, fatiga y dolor de cabeza por acumulación de CO2.',
      'No tiene efecto alguno.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Un habitáculo fresco (alrededor de 20-22 °C) y con renovación periódica de aire exterior conserva la vigilancia cerebral.',
    distractorRationale: {
      A: 'El calor excesivo induce relajación y sueño rápidamente.',
      B: 'Al contrario, vuelve pesados los movimientos.',
      C: 'Ventilar periódicamente con aire fresco previene el sopor.',
      D: 'La ergonomía térmica influye directamente en la alerta.'
    },
    legalReference: 'Manual de Ergonomía y Fatiga Vial VMT.'
  },
  {
    id: 'vmt-p058',
    category: 'psicologico',
    topic: 'Fatiga — Conducción Nocturna Tras Jornada Laboral Completa',
    question: 'Si una persona trabajó 10 horas durante el día y debe viajar de noche 3 horas más, ¿qué riesgo psicológico principal enfrenta?',
    statement: 'Si una persona trabajó 10 horas durante el día y debe viajar de noche 3 horas más, ¿qué riesgo psicológico principal enfrenta?',
    options: [
      'Ninguno si toma dos bebidas energéticas.',
      'Que su visión sea mejor de noche.',
      'Que el vehículo consuma menos.',
      'Fatiga acumulada sumada a menor estimulación visual nocturna, elevando severamente el riesgo de microsueño.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Las bebidas energéticas producen un pico breve seguido de un desplome abrupto ("efecto rebote"); descansar o turnar conductor es la medida responsable.',
    distractorRationale: {
      A: 'Las bebidas energéticas no eliminan la deuda de sueño acumulada.',
      B: 'La visión nocturna exige mayor esfuerzo cognitivo, acelerando el cansancio.',
      C: 'No tiene relación con consumo.',
      D: 'Planificar descansar antes de viajar o usar transporte alterno evita tragedias.'
    },
    legalReference: 'Manual de Prevención de Fatiga Vial VMT.'
  },
  {
    id: 'vmt-p059',
    category: 'psicologico',
    topic: 'Fatiga — Fatiga Visual por Uso Prolongado de Pantallas',
    question: '¿Cómo afecta a la conducción nocturna haber pasado muchas horas seguidas frente a pantallas antes de salir a manejar?',
    statement: '¿Cómo afecta a la conducción nocturna haber pasado muchas horas seguidas frente a pantallas antes de salir a manejar?',
    options: [
      'Genera fatiga ocular, sequedad, visión borrosa temporal y mayor sensibilidad al deslumbramiento de los faros.',
      'Entrena los ojos para ver mejor en la oscuridad.',
      'Elimina la necesidad de usar luces bajas.',
      'No afecta en nada.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Descansar la vista unos minutos antes de conducir de noche permite que las pupilas y músculos oculares se adapten a la distancia lejana.',
    distractorRationale: {
      A: 'La fatiga visual reduce la capacidad de enfocar señales lejanas de noche.',
      B: 'Al contrario, dificulta la adaptación a la oscuridad.',
      C: 'Las luces bajas siguen siendo obligatorias.',
      D: 'La salud visual previa influye en la seguridad.'
    },
    legalReference: 'Manual de Salud Visual y Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p060',
    category: 'psicologico',
    topic: 'Fatiga — Siesta Reparadora Segura en Ruta',
    question: 'Si decide detenerse en un sitio seguro e iluminado para tomar una siesta breve por sueño al volante, ¿qué duración se recomienda?',
    statement: 'Si decide detenerse en un sitio seguro e iluminado para tomar una siesta breve por sueño al volante, ¿qué duración se recomienda?',
    options: [
      'Dormir en medio del carril derecho con el motor encendido.',
      'Una siesta breve de 15 a 30 minutos fuera de la calzada (en estación de servicio o área segura), seguida de unos minutos para despabilarse antes de manejar.',
      'Dormir 1 minuto en el semáforo.',
      'No detenerse nunca.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Una microsiesta segura de 20 minutos en lugar autorizado recupera la alerta inmediata sin entrar en sueño profundo que genere inercia de sueño.',
    distractorRationale: {
      A: 'Dormir dentro de la calzada o con escape defectuoso es letal.',
      B: 'Detenerse en zona segura y descansar 20 minutos salva vidas.',
      C: 'Dormirse en un semáforo es peligroso e insuficiente.',
      D: 'Forzar la marcha con sueño es una de las causas más mortales en carretera.'
    },
    legalReference: 'Manual de Prevención de Fatiga Vial VMT.'
  },
  {
    id: 'vmt-p061',
    category: 'psicologico',
    topic: 'Fatiga — Apnea del Sueño y Trastornos Crónicos',
    question: '¿Por qué una persona que ronca fuertemente y amanece muy cansada cada día (posible apnea del sueño) debe consultar al médico antes de conducir largas rutas?',
    statement: '¿Por qué una persona que ronca fuertemente y amanece muy cansada cada día (posible apnea del sueño) debe consultar al médico antes de conducir largas rutas?',
    options: [
      'Porque el ruido molesta a los pasajeros.',
      'No tiene relación con el manejo.',
      'Porque el sueño no reparador provoca somnolencia diurna severa involuntaria al volante, multiplicando el riesgo de accidentes.',
      'Únicamente para cambiar de categoría de licencia.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La apnea obstructiva del sueño fragmenta el descanso nocturno causando ataques súbitos de sueño durante el día incluso en trayectos cortos.',
    distractorRationale: {
      A: 'El problema es la somnolencia diurna patológica del conductor.',
      B: 'Es un factor médico de alto riesgo vial reconocido internacionalmente.',
      C: 'El tratamiento médico restablece el descanso seguro.',
      D: 'Afecta a cualquier conductor profesional o particular.'
    },
    legalReference: 'Manual de Salud y Aptitud Vial VMT / OMS.'
  },
  {
    id: 'vmt-p062',
    category: 'psicologico',
    topic: 'Fatiga — Alternar Conductores en Viajes Largos',
    question: 'Al viajar en grupo hacia un destino lejano, ¿qué ventaja psicológica tiene turnarse el volante cada dos o tres horas?',
    statement: 'Al viajar en grupo hacia un destino lejano, ¿qué ventaja psicológica tiene turnarse el volante cada dos o tres horas?',
    options: [
      'Permite correr más rápido.',
      'Evita tener que respetar límites de velocidad.',
      'Ahorra combustible.',
      'Mantiene al conductor activo con niveles altos de atención y permite que el relevo descanse antes de fatigarse.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Relevarse con otros conductores habilitados mantiene fresca la atención sostenida y reduce el desgaste físico y mental.',
    distractorRationale: {
      A: 'Los límites de velocidad siguen vigentes.',
      B: 'No exime de ninguna norma de tránsito.',
      C: 'El beneficio es neurológico y atencional.',
      D: 'Es una práctica preventiva excelente en viajes interdepartamentales o internacionales.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p063',
    category: 'psicologico',
    topic: 'Estado Psicofísico — Deshidratación Leve en Clima Cálido',
    question: '¿Cómo puede afectar la deshidratación leve durante un viaje largo en clima caluroso sin aire acondicionado?',
    statement: '¿Cómo puede afectar la deshidratación leve durante un viaje largo en clima caluroso sin aire acondicionado?',
    options: [
      'Reduce la concentración, provoca fatiga rápida, dolor de cabeza y aumenta los errores de conducción de forma similar a fatiga moderada.',
      'Aumenta la lucidez mental.',
      'Mejora la visión periférica.',
      'No produce ningún síntoma cognitivo.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Mantener agua potable disponible durante viajes largos conserva la hidratación cerebral y la rapidez de reacción.',
    distractorRationale: {
      A: 'Incluso deshidratación del 2% deteriora funciones ejecutivas y tiempo de reacción.',
      B: 'La falta de líquidos empeora el rendimiento cognitivo.',
      C: 'Produce pesadez ocular y menor atención.',
      D: 'Está demostrada su influencia en errores al volante.'
    },
    legalReference: 'Manual de Fisiología y Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p064',
    category: 'psicologico',
    topic: 'Estado Psicofísico — Presión Emocional de Copiloto Ansioso',
    question: 'Si un acompañante grita alarmado o da órdenes contradictorias constantemente mientras usted conduce, ¿qué debe hacer?',
    statement: 'Si un acompañante grita alarmado o da órdenes contradictorias constantemente mientras usted conduce, ¿qué debe hacer?',
    options: [
      'Discutir a gritos mientras acelera.',
      'Mantener la calma, pedirle serenamente que guarde silencio para poder concentrarse o detenerse en lugar seguro para dialogar.',
      'Soltar el volante para taparse los oídos.',
      'Obedecer sin mirar la vía.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El conductor es el único responsable del control del vehículo; neutralizar distracciones internas con firmeza y calma protege a todos los ocupantes.',
    distractorRationale: {
      A: 'Discutir conduciendo divide la atención y eleva el riesgo de choque.',
      B: 'Establecer calma en la cabina preserva la toma de decisiones.',
      C: 'Soltar el volante es sumamente peligroso.',
      D: 'Nunca debe maniobrarse por orden ajena sin verificar personalmente la vía.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p065',
    category: 'psicologico',
    topic: 'Fatiga — Efecto de "Ya Casi Llego" (Síndrome del Último Kilómetro)',
    question: '¿Por qué ocurren numerosos accidentes por sueño o descuido cuando el conductor ya está a pocos minutos de llegar a su casa tras un viaje largo?',
    statement: '¿Por qué ocurren numerosos accidentes por sueño o descuido cuando el conductor ya está a pocos minutos de llegar a su casa tras un viaje largo?',
    options: [
      'Porque los frenos se gastan justo al llegar.',
      'Porque las calles cercanas son siempre más anchas.',
      'Porque el cerebro relaja prematuramente la tensión atencional al ver entorno familiar, bajando la guardia justo antes de estacionar.',
      'No ocurren accidentes cerca del destino.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El alivio anticipado de estar cerca reduce la vigilancia cuando la fatiga acumulada es máxima; mantener la concentración hasta apagar el motor es vital.',
    distractorRationale: {
      A: 'El fenómeno es atencional y psicológico, no mecánico.',
      B: 'No guarda relación con el ancho de la vía.',
      C: 'La atención plena debe sostenerse hasta estacionar completamente el vehículo.',
      D: 'Un alto porcentaje de siniestros sucede en los últimos kilómetros.'
    },
    legalReference: 'Manual de Psicología Vial VMT.'
  },
  {
    id: 'vmt-p066',
    category: 'psicologico',
    topic: 'Estado Psicofísico — Conducción Con Fiebre Alta o Mareo',
    question: 'Si un conductor presenta fiebre alta, vértigo o mareo intenso antes de salir, ¿cuál es la decisión responsable?',
    statement: 'Si un conductor presenta fiebre alta, vértigo o mareo intenso antes de salir, ¿cuál es la decisión responsable?',
    options: [
      'Conducir rápido para llegar pronto a la clínica.',
      'Tomar doble dosis de pastillas y manejar solo.',
      'Manejar con la cabeza afuera.',
      'No conducir; solicitar a otra persona habilitada que maneje o usar taxi/ambulancia según gravedad.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La fiebre y el vértigo alteran el equilibrio, la visión y el juicio de manera incompatible con la operación segura de un automotor.',
    distractorRationale: {
      A: 'Un desmayo al volante puede matar al conductor y a peatones.',
      B: 'La automedicación puede sumar somnolencia al mareo.',
      C: 'No previene un síncope o pérdida de conciencia.',
      D: 'Reconocer la incapacidad temporal física es deber ético y preventivo.'
    },
    legalReference: 'Manual de Aptitud Psicofísica Vial VMT.'
  },
  {
    id: 'vmt-p067',
    category: 'psicologico',
    topic: 'Fatiga — Monotonía en Conducción Nocturna Solitaria',
    question: 'En carretera solitaria de noche, ¿qué práctica ayuda a mantener activo el cerebro sin distraer la vista de la vía?',
    statement: 'En carretera solitaria de noche, ¿qué práctica ayuda a mantener activo el cerebro sin distraer la vista de la vía?',
    options: [
      'Mantener escaneo visual constante (horizonte, espejos, tablero), buena postura erguida y temperatura fresca en cabina.',
      'Leer mensajes del teléfono para entretenerse.',
      'Ver películas en la pantalla del tablero.',
      'Apagar las luces del tablero por completo.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La actividad ocular controlada y la ventilación fresca sostienen la alerta sin desviar la atención de la carretera.',
    distractorRationale: {
      A: 'Si aun así aparece pesadez de párpados, debe detenerse a descansar.',
      B: 'Leer el celular de noche es extremadamente peligroso e ilegal.',
      C: 'Ver videos mientras conduce está estrictamente prohibido.',
      D: 'El tablero debe tener iluminación tenue pero legible para ver velocidad y testigos.'
    },
    legalReference: 'Manual de Conducción Nocturna VMT.'
  },
  {
    id: 'vmt-p068',
    category: 'psicologico',
    topic: 'Estado Psicofísico — Dolor Agudo o Lesión en Extremidad',
    question: '¿Puede conducir con seguridad una persona que tiene un pie o brazo enyesado o con dolor agudo que limita el movimiento?',
    statement: '¿Puede conducir con seguridad una persona que tiene un pie o brazo enyesado o con dolor agudo que limita el movimiento?',
    options: [
      'Sí, usando el otro pie para ambos pedales.',
      'No, porque reduce la fuerza y velocidad de reacción en frenadas de emergencia o giros bruscos, comprometiendo la seguridad.',
      'Sí, en trayectos urbanos.',
      'Sí, si maneja con una sola mano siempre.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Una inmovilización ortopédica impide accionar pedales o girar el volante con rapidez ante un imprevisto.',
    distractorRationale: {
      A: 'Cruzar el pie izquierdo o improvisar pedales genera errores graves en pánico.',
      B: 'Debe esperarse la recuperación médica funcional completa antes de volver a conducir.',
      C: 'En ciudad se requieren frenadas y giros frecuentes.',
      D: 'Un yeso en brazo limita el giro rápido de emergencia.'
    },
    legalReference: 'Manual de Aptitud Psicofísica Vial VMT.'
  },
  {
    id: 'vmt-p069',
    category: 'psicologico',
    topic: 'Fatiga — Responsabilidad de Empresas y Conductores Profesionales',
    question: 'Si a un conductor profesional de autobús o carga se le exige cumplir un itinerario imposible sin horas de sueño, ¿qué principio ético y de seguridad debe prevalecer?',
    statement: 'Si a un conductor profesional de autobús o carga se le exige cumplir un itinerario imposible sin horas de sueño, ¿qué principio ético y de seguridad debe prevalecer?',
    options: [
      'Conducir sin dormir aunque cabecee en la autopista.',
      'Tomar estimulantes ilegales para aguantar.',
      'Comunicar la condición de fatiga y exigir pausas de descanso reglamentarias, porque ninguna carga o horario vale una vida humana.',
      'Acelerar a 120 km/h para llegar antes.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La seguridad vial profesional exige anteponer la vida de pasajeros y usuarios sobre presiones de entrega imposibles.',
    distractorRationale: {
      A: 'Un autobús o cabezal con conductor dormido provoca tragedias masivas.',
      B: 'Los estimulantes ilegales destruyen el juicio y configuran delito penal.',
      C: 'La cultura de prevención y ética profesional protege vidas.',
      D: 'El exceso de velocidad en vehículos pesados agrava el riesgo.'
    },
    legalReference: 'Código de Ética y Seguridad del Conductor Profesional VMT.'
  },
  {
    id: 'vmt-p070',
    category: 'psicologico',
    topic: 'Estado Psicofísico — Envejecimiento Saludable y Autoevaluación',
    question: 'Con el paso de los años, ¿qué actitud responsable debe adoptar un conductor adulto mayor para seguir manejando con seguridad?',
    statement: 'Con el paso de los años, ¿qué actitud responsable debe adoptar un conductor adulto mayor para seguir manejando con seguridad?',
    options: [
      'Evitar cualquier examen médico o visual.',
      'Conducir más rápido para compensar.',
      'Dejar de usar lentes aunque los necesite.',
      'Realizarse chequeos periódicos de vista y audición, aumentar distancias de seguimiento y evitar manejar de noche si le molesta el deslumbramiento.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La experiencia compensa cambios naturales de reflejos cuando se acompaña de chequeos médicos y adaptación prudente de hábitos.',
    distractorRationale: {
      A: 'Detectar cataratas o pérdida auditiva a tiempo permite corregirlas y seguir conduciendo seguro.',
      B: 'Aumentar velocidad reduce el tiempo disponible de reacción.',
      C: 'Usar la graduación óptica correcta es obligatorio.',
      D: 'La autorregulación consciente prolonga una conducción segura.'
    },
    legalReference: 'Manual de Salud Vial VMT.'
  },
  // ==========================================================================
  // TOMA DE DECISIONES BAJO PRESIÓN
  // ==========================================================================
  {
    id: 'vmt-p071',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Semáforo en Luz Amarilla',
    question: 'Se aproxima a un semáforo a 50 km/h y la luz cambia de verde a amarillo cuando aún está a 40 metros de la línea de parada. ¿Cuál es la decisión correcta?',
    statement: 'Se aproxima a un semáforo a 50 km/h y la luz cambia de verde a amarillo cuando aún está a 40 metros de la línea de parada. ¿Cuál es la decisión correcta?',
    options: [
      'Frenar suave y progresivamente para detenerse antes de la línea de parada.',
      'Acelerar a fondo a 80 km/h para cruzar antes del rojo.',
      'Cerrar los ojos y seguir.',
      'Frenar cuando ya esté dentro de la intersección.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'A 50 km/h (~14 m/s), 40 metros son más que suficientes para detenerse con suavidad y seguridad ante la luz amarilla preventiva.',
    distractorRationale: {
      A: 'La luz amarilla ordena detenerse salvo que ya esté tan encima que frenar cause choque trasero.',
      B: 'Acelerar para ganar al amarillo suele hacer cruzar ya en rojo.',
      C: 'Irresponsable y peligroso.',
      D: 'Detenerse en medio del cruce bloquea el tráfico transversal.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 76.'
  },
  {
    id: 'vmt-p072',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Emergencia Médica Familiar en Auto Particular',
    question: 'Si traslada a un familiar enfermo en un vehículo particular sin sirena oficial, ¿puede cruzar semáforos en rojo o circular en contramano?',
    statement: 'Si traslada a un familiar enfermo en un vehículo particular sin sirena oficial, ¿puede cruzar semáforos en rojo o circular en contramano?',
    options: [
      'Sí, sacando un pañuelo blanco puede violar todas las leyes.',
      'No; debe llamar al 911/ambulancia si es emergencia crítica o conducir con máxima precaución respetando prioridades, pues provocar un choque agravaría la emergencia.',
      'Sí, a cualquier velocidad.',
      'Sí, subiendo a las aceras.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Un pañuelo blanco o intermitentes no otorgan inmunidad física contra choques laterales en luz roja; una colisión pondría en riesgo mortal al paciente y a terceros.',
    distractorRationale: {
      A: 'Los demás conductores no tienen forma de saber ni ceder paso ante un auto particular en rojo.',
      B: 'Las ambulancias cuentan con sirenas, capacitación y equipo médico de soporte vital.',
      C: 'El exceso de velocidad sin control multiplica accidentes.',
      D: 'Subir a aceras arriesga atropellar peatones.'
    },
    legalReference: 'Manual de Psicología Vial y D.E. 61.'
  },
  {
    id: 'vmt-p073',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Animal Pequeño Súbito vs Choque Frontal',
    question: 'Si un perro pequeño cruza repentinamente en una autopista a 90 km/h cuando usted lleva autos pegados al costado y tráfico en sentido contrario, ¿qué debe priorizar?',
    statement: 'Si un perro pequeño cruza repentinamente en una autopista a 90 km/h cuando usted lleva autos pegados al costado y tráfico en sentido contrario, ¿qué debe priorizar?',
    options: [
      'Dar un volantazo violento hacia el carril contrario.',
      'Tirar del freno de mano.',
      'Frenar firme en línea recta dentro de su propio carril sin dar volantazos bruscos que provoquen vuelco o choque con otras personas.',
      'Saltar del vehículo.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Dar volantazos bruscos a 90 km/h para esquivar un animal pequeño suele causar vuelcos o choques frontales con víctimas humanas mortales.',
    distractorRationale: {
      A: 'Invadir el carril opuesto a 90 km/h suele ser fatal para familias enteras.',
      B: 'El freno de mano a alta velocidad provoca un trompo incontrolable.',
      C: 'Mantener firme el volante y frenar en línea recta protege vidas humanas.',
      D: 'Obviamente inviable y mortal.'
    },
    legalReference: 'Manual de Toma de Decisiones Críticas VMT.'
  },
  {
    id: 'vmt-p074',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Parálisis por Pánico',
    question: '¿Cómo ayuda la práctica previa y el conocimiento teórico de protocolos de emergencia (reventón, falla de frenos) a un conductor bajo presión?',
    statement: '¿Cómo ayuda la práctica previa y el conocimiento teórico de protocolos de emergencia (reventón, falla de frenos) a un conductor bajo presión?',
    options: [
      'No sirve de nada porque todo es instintivo.',
      'Aumenta el miedo al conducir.',
      'Solo sirve para aprobar el examen escrito.',
      'Reduce el tiempo de bloqueo por pánico y activa respuestas motoras correctas (como NO frenar brusco en reventón) de forma rápida.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Cuando el cerebro ya tiene ensayado mentalmente el protocolo correcto, responde con mayor precisión y calma en fracciones de segundo.',
    distractorRationale: {
      A: 'La preparación mental previa mejora notablemente el desempeño bajo estrés agudo.',
      B: 'Conocer qué hacer brinda seguridad y control.',
      C: 'La aplicación real en ruta salva vidas.',
      D: 'Anticipar mentalmente escenarios críticos entrena la toma de decisiones.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p075',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Presión de Vehículos Detrás en Intersección',
    question: 'Usted está esperando girar a la izquierda en una calle sin flecha semafórica y aún viene tráfico de frente, pero el conductor detrás suyo pita impaciente. ¿Qué debe hacer?',
    statement: 'Usted está esperando girar a la izquierda en una calle sin flecha semafórica y aún viene tráfico de frente, pero el conductor detrás suyo pita impaciente. ¿Qué debe hacer?',
    options: [
      'Mantenerse firme esperando hasta que el carril opuesto esté 100% libre y seguro antes de girar, ignorando la presión del claxon.',
      'Girar de inmediato frente al auto que viene de frente para no molestar al de atrás.',
      'Bajar del auto a discutir.',
      'Apagar la direccional y seguir en contramano.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Quien choca si usted gira sin espacio es usted, no el conductor que pita atrás; nunca ceda su criterio de seguridad a la impaciencia ajena.',
    distractorRationale: {
      A: 'La decisión de seguridad corresponde exclusivamente a quien ejecuta la maniobra.',
      B: 'Girar ante tráfico frontal provoca colisiones gravísimas.',
      C: 'Bajar en medio de la intersección agrava el peligro.',
      D: 'Circular en contramano es ilegal y riesgoso.'
    },
    legalReference: 'Evaluación Psicológica VMT.'
  },
  {
    id: 'vmt-p076',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Equivocación de Ruta en Ciudad',
    question: 'Si nota de último momento que está en el carril derecho pero necesita girar a la izquierda en la esquina inmediata con tráfico denso, ¿qué decisión es segura?',
    statement: 'Si nota de último momento que está en el carril derecho pero necesita girar a la izquierda en la esquina inmediata con tráfico denso, ¿qué decisión es segura?',
    options: [
      'Cruzar bruscamente atravesando tres carriles frente a todos.',
      'Continuar de frente por su carril actual y buscar un retorno o siguiente cuadra para reorientarse sin riesgo.',
      'Detenerse en seco bloqueando todo el carril derecho.',
      'Retroceder en medio de la avenida.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Un buen conductor a veces pierde una salida; un mal conductor nunca pierde una salida pero provoca choques por cruzar carriles a última hora.',
    distractorRationale: {
      A: 'Los giros de último segundo cruzando carriles son causa clásica de impactos laterales.',
      B: 'Seguir adelante y dar la vuelta en la siguiente cuadra toma un minuto y evita siniestros.',
      C: 'Detenerse en carril activo provoca choques por alcance.',
      D: 'Retroceder en avenidas transitadas es altamente peligroso.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-p077',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Llanta Ponchada Dentro de Túnel o Puente',
    question: 'Si sufre un pinchazo repentino justo sobre un puente angosto sin hombro o dentro de un túnel, ¿qué es más seguro?',
    statement: 'Si sufre un pinchazo repentino justo sobre un puente angosto sin hombro o dentro de un túnel, ¿qué es más seguro?',
    options: [
      'Detenerse inmediatamente en el carril angosto y bajar a cambiar la llanta.',
      'Acelerar a 100 km/h.',
      'Encender luces intermitentes y avanzar despacio con precaución hasta salir del puente o túnel hacia un espacio amplio fuera de la calzada.',
      'Abandonar el vehículo ahí.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Es preferible dañar un neumático ya pinchado avanzando lento unos cientos de metros que ser atropellado o chocado en un punto ciego sin hombro.',
    distractorRationale: {
      A: 'Cambiar una llanta en un carril activo de puente o túnel expone a muerte casi segura.',
      B: 'Acelerar con llanta desinflada destruye el control direccional.',
      C: 'Priorizar la vida humana sobre el costo de un rin o llanta es la decisión correcta.',
      D: 'Dejar el vehículo bloqueando un túnel es sumamente peligroso.'
    },
    legalReference: 'Manual de Emergencias Viales VMT.'
  },
  {
    id: 'vmt-p078',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Frenado de Emergencia Sin Bloquear Ruedas (Sin ABS)',
    question: 'Si conduce un vehículo antiguo SIN sistema ABS y debe frenar de emergencia sobre piso húmedo y siente que las ruedas se bloquean patinando, ¿qué debe hacer?',
    statement: 'Si conduce un vehículo antiguo SIN sistema ABS y debe frenar de emergencia sobre piso húmedo y siente que las ruedas se bloquean patinando, ¿qué debe hacer?',
    options: [
      'Girar el volante a tope mientras las ruedas siguen bloqueadas.',
      'Pisar el acelerador.',
      'Apagar el motor.',
      'Soltar brevemente una fracción el pedal de freno hasta que las ruedas vuelvan a girar (recuperando dirección) y volver a presionar progresivamente ("frenado de cadencia").'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Una rueda bloqueada no obedece al volante; modular el pedal ("cadencia") imita manualmente al ABS permitiendo esquivar y frenar.',
    distractorRationale: {
      A: 'Con ruedas bloqueadas el auto sigue recto sin importar cuánto gire el volante.',
      B: 'Acelerar aumenta la velocidad del impacto.',
      C: 'Apagar el motor empeora la maniobrabilidad.',
      D: 'Liberar levemente y reaplicar permite recuperar el control direccional.'
    },
    legalReference: 'Manual Técnico de Conducción VMT.'
  },
  {
    id: 'vmt-p079',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Capó del Vehículo se Abre en Marcha',
    question: 'Si por un cierre defectuoso se levanta de golpe el capó tapando por completo el parabrisas mientras circula, ¿qué debe hacer?',
    statement: 'Si por un cierre defectuoso se levanta de golpe el capó tapando por completo el parabrisas mientras circula, ¿qué debe hacer?',
    options: [
      'Mantener la calma, mirar por la rendija inferior o por la ventanilla lateral izquierda, encender intermitentes, desacelerar suavemente y orillarse fuera de la vía.',
      'Frenar a fondo en medio del carril izquierdo.',
      'Sacar medio cuerpo por la puerta.',
      'Girar bruscamente hacia la izquierda.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Aunque el parabrisas quede cubierto, la ventanilla del conductor y el espacio bajo la bisagra permiten orientarse hasta detenerse con seguridad a la derecha.',
    distractorRationale: {
      A: 'Evitar frenazos bruscos o volantazos ciegos previene choques traseros y laterales.',
      B: 'Frenar de golpe en carril rápido provoca colisiones por alcance.',
      C: 'Abrir la puerta en movimiento es muy peligroso.',
      D: 'Girar a ciegas hacia la izquierda invade otros carriles.'
    },
    legalReference: 'Manual de Emergencias en Ruta VMT.'
  },
  {
    id: 'vmt-p080',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Acelerador Atascado en Marcha',
    question: 'Si el pedal del acelerador queda atascado a fondo mientras circula en carretera, ¿qué secuencia de acciones permite detener el vehículo con seguridad?',
    statement: 'Si el pedal del acelerador queda atascado a fondo mientras circula en carretera, ¿qué secuencia de acciones permite detener el vehículo con seguridad?',
    options: [
      'Retirar inmediatamente la llave de contacto trabando el volante.',
      'Mantener la calma, presionar el freno con firmeza continua, cambiar la palanca a Neutro (N) o pisar el clutch, orillarse y solo entonces apagar el motor.',
      'Poner la caja en Parking (P) a 100 km/h.',
      'No hacer nada y esperar que se acabe la gasolina.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Pasar a Neutro desconecta de inmediato la fuerza del motor de las ruedas sin perder la dirección asistida ni bloquear el volante.',
    distractorRationale: {
      A: 'Sacar la llave en movimiento traba el volante y anula el servofreno.',
      B: 'Neutro + freno firme + orillarse es el procedimiento técnico universal.',
      C: 'Poner Parking en velocidad destruye la transmisión y bloquea ruedas.',
      D: 'Esperar a que se acabe el combustible a máxima velocidad es catastrófico.'
    },
    legalReference: 'Manual de Emergencias Mecánicas VMT.'
  },
  {
    id: 'vmt-p081',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Avispa o Insecto Dentro de la Cabina',
    question: 'Si mientras conduce a 70 km/h nota una abeja o avispa volando dentro del habitáculo, ¿cómo debe actuar?',
    statement: 'Si mientras conduce a 70 km/h nota una abeja o avispa volando dentro del habitáculo, ¿qué debe hacer?',
    options: [
      'Soltar el volante para golpearla con ambas manos.',
      'Cerrar los ojos y agacharse debajo del tablero.',
      'Mantener la vista en la vía, bajar la velocidad suavemente, activar direccional derecha, orillarse en lugar seguro y entonces abrir puertas para sacarla.',
      'Acelerar con las ventanas cerradas.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Manotear dentro del auto a 70 km/h desvía los ojos y manos del volante provocando salidas de vía o choques frontales.',
    distractorRationale: {
      A: 'Soltar el volante por un insecto ha causado numerosos accidentes graves.',
      B: 'Perder la visión de la vía es mucho más peligroso que una picadura.',
      C: 'Detenerse con seguridad primero resuelve la situación sin riesgo vial.',
      D: 'Acelerar aumenta el riesgo si el insecto se acerca al rostro.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-p082',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Priorizar Vidas Sobre Daños Materiales',
    question: 'En una situación inevitable donde debe elegir entre rozar un arbusto/cuneta suave a baja velocidad o chocar de frente contra un vehículo o peatón, ¿qué debe elegir?',
    statement: 'En una situación inevitable donde debe elegir entre rozar un arbusto/cuneta suave a baja velocidad o chocar de frente contra un vehículo o peatón, ¿qué debe elegir?',
    options: [
      'Chocar al peatón para no rayar la pintura.',
      'Chocar de frente contra el otro automóvil.',
      'Cerrar los ojos sin girar.',
      'Elegir siempre la opción de menor energía y sin víctimas humanas (la cuneta suave o roce lateral controlado).'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La jerarquía ética y física de evasión siempre sacrifica bienes materiales o vegetación blanda antes que vidas humanas.',
    distractorRationale: {
      A: 'La vida humana es infinitamente superior a la carrocería.',
      B: 'Un choque frontal suma las velocidades de ambos vehículos.',
      C: 'Mantener el control direccional minimiza daños.',
      D: 'Desviar hacia obstáculos deformables o espacio libre salva vidas.'
    },
    legalReference: 'Manual de Toma de Decisiones Críticas VMT.'
  },
  {
    id: 'vmt-p083',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Fallo de Semáforo (Apagado Total)',
    question: 'Al llegar a una intersección importante cuyos semáforos están completamente apagados por corte eléctrico, ¿qué decisión mantiene el orden y seguridad?',
    statement: 'Al llegar a una intersección importante cuyos semáforos están completamente apagados por corte eléctrico, ¿qué decisión mantiene el orden y seguridad?',
    options: [
      'Acelerar a fondo para cruzar primero.',
      'Tratar el cruce como una señal de Alto de cuatro vías: detenerse, hacer contacto visual con otros conductores y cruzar por turnos o ceder al de la derecha.',
      'Tocar la bocina continuamente sin frenar.',
      'Seguir pegado al auto de adelante sin mirar.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Cuando falla la regulación semafórica, la cooperación visual, detención breve y regla de prioridad de la derecha evitan colisiones en el cruce.',
    distractorRationale: {
      A: 'Cruzar rápido sin semáforo provoca choques laterales graves.',
      B: 'Detenerse y negociar el paso por turnos mantiene la seguridad.',
      C: 'El ruido no ordena el cruce.',
      D: 'Cada conductor debe verificar individualmente que la vía transversal ceda el paso.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 86.'
  },
  {
    id: 'vmt-p084',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Derrape de Motocicleta en Grava Suelta',
    question: 'Si un motociclista entra inadvertidamente en un parche de arena o grava suelta en curva, ¿qué reacción impulsiva debe evitar?',
    statement: 'Si un motociclista entra inadvertidamente en un parche de arena o grava suelta en curva, ¿qué reacción impulsiva debe evitar?',
    options: [
      'Mantener la calma, enderezar suavemente la moto, no frenar bruscamente con el delantero y dejar que cruce la zona.',
      'Apretar a fondo el freno delantero con la moto inclinada.',
      'Soltar el acelerador suavemente.',
      'Mirar hacia la salida limpia de la curva.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Clavar el freno delantero sobre grava suelta mientras la moto está inclinada bloquea instantáneamente la rueda delantera causando caída inmediata.',
    distractorRationale: {
      A: 'Mantener suavidad y enderezar evita la pérdida de tracción.',
      B: 'El frenazo brusco delantero en grava es la reacción impulsiva más peligrosa.',
      C: 'Soltar suavemente el gas reduce la velocidad sin desequilibrar.',
      D: 'Mirar hacia donde se quiere ir guía naturalmente la trayectoria.'
    },
    legalReference: 'Manual de Conducción Segura de Motocicletas VMT.'
  },
  {
    id: 'vmt-p085',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Carga de GPS o Dirección en Ruta',
    question: 'Si necesita cambiar el destino en su aplicación de navegación GPS mientras circula por una avenida concurrida, ¿qué debe hacer?',
    statement: 'Si necesita cambiar el destino en su aplicación de navegación GPS mientras circula por una avenida concurrida, ¿qué debe hacer?',
    options: [
      'Escribir la dirección mirando la pantalla mientras conduce a 60 km/h.',
      'Pedir al copiloto que lo haga o estacionarse en un lugar seguro antes de manipular la pantalla.',
      'Soltar el volante con ambas manos por diez segundos.',
      'Frenar en medio del carril central para teclear.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Programar rutas en movimiento combina distracción visual, manual y cognitiva; detenerse en lugar seguro o delegarlo al acompañante elimina el riesgo.',
    distractorRationale: {
      A: 'Teclear mirando el GPS equivale a conducir con los ojos vendados.',
      B: 'Delegar o detenerse fuera de la vía mantiene 100% la atención en la conducción.',
      C: 'Soltar el volante es temerario.',
      D: 'Detenerse en carril activo genera riesgo de choque trasero.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p086',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Vehículo de Emergencia Detrás en Semáforo en Rojo',
    question: 'Si usted está detenido primero en la línea de parada ante un semáforo en rojo y detrás llega una ambulancia con sirena pidiendo paso, ¿cómo debe actuar?',
    statement: 'Si usted está detenido primero en la línea de parada ante un semáforo en rojo y detrás llega una ambulancia con sirena pidiendo paso, ¿cómo debe actuar?',
    options: [
      'Acelerar a ciegas hacia el centro de la intersección sin mirar el tráfico transversal.',
      'No moverse nunca bajo ninguna circunstancia.',
      'Observar cuidadosamente que el tráfico transversal esté detenido y, solo cuando sea seguro, avanzar lo mínimo hacia un costado para abrir paso a la ambulancia.',
      'Apagar el motor y bajar del auto.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Abrir paso a una ambulancia exige hacerlo sin provocar otro accidente; avanzar ligeramente a un lado verificando que el cruce esté detenido es la maniobra segura.',
    distractorRationale: {
      A: 'Entrar a ciegas en rojo puede provocar un segundo accidente grave.',
      B: 'Debe facilitarse el paso de la emergencia en cuanto sea seguro hacerlo.',
      C: 'Combinar cesión de paso con verificación visual del cruce evita colisiones.',
      D: 'Dejar el vehículo abandonado bloquea aún más a la ambulancia.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 85.'
  },
  {
    id: 'vmt-p087',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Humo Repentino en Tablero (Cortocircuito)',
    question: 'Si percibe olor intenso a cable quemado o humo saliendo debajo del tablero mientras conduce, ¿qué debe hacer de inmediato?',
    statement: 'Si percibe olor intenso a cable quemado o humo saliendo debajo del tablero mientras conduce, ¿qué debe hacer de inmediato?',
    options: [
      'Seguir conduciendo hasta llegar a su destino.',
      'Encender el aire acondicionado al máximo.',
      'Echar agua sobre el tablero en marcha.',
      'Orillarse de inmediato en lugar seguro, apagar la ignición/motor, evacuar a los ocupantes y desconectar batería o llamar a bomberos si hay fuego.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Un cortocircuito eléctrico puede propagarse rápidamente a plásticos e inflamables; cortar la ignición y evacuar a tiempo protege vidas.',
    distractorRationale: {
      A: 'Ignorar humo eléctrico puede desencadenar un incendio en segundos.',
      B: 'El ventilador del aire aviva chispas y esparce humo tóxico en la cabina.',
      C: 'El agua en circuitos energizados empeora el cortocircuito.',
      D: 'Detenerse, cortar energía y evacuar es la decisión segura.'
    },
    legalReference: 'Manual de Emergencias Viales VMT.'
  },
  {
    id: 'vmt-p088',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Freno de Pie se Siente "Esponjoso" en Bajada',
    question: 'Al descender una pendiente nota que el pedal de freno se hunde más de lo normal y se siente esponjoso. ¿Qué decisión preventiva es correcta?',
    statement: 'Al descender una pendiente nota que el pedal de freno se hunde más de lo normal y se siente esponjoso. ¿Qué decisión preventiva es correcta?',
    options: [
      'Reducir inmediatamente a una marcha más baja para usar freno de motor, encender intermitentes y detenerse en un sitio seguro para revisar/enfriar antes de perder frenos.',
      'Acelerar más para terminar rápido la bajada.',
      'Poner la caja en Neutro.',
      'Ignorar la sensación.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Un pedal esponjoso anuncia ebullición del líquido de frenos o entrada de aire/fuga; detenerse a tiempo evita una pérdida total de frenos.',
    distractorRationale: {
      A: 'Actuar ante el primer síntoma previene accidentes graves en cuestas.',
      B: 'Acelerar dispara la energía cinética sin capacidad segura de frenado.',
      C: 'Neutro elimina la retención del motor.',
      D: 'Ignorar síntomas mecánicos de frenos es letal.'
    },
    legalReference: 'Manual Técnico de Emergencias VMT.'
  },
  {
    id: 'vmt-p089',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Objeto Voluminoso Caído en Su Carril',
    question: 'Circula por carretera a 80 km/h y aparece una llanta o rama grande caída en su carril. ¿Cómo decide si esquivar o frenar?',
    statement: 'Circula por carretera a 80 km/h y aparece una llanta o rama grande caída en su carril. ¿Cómo decide si esquivar o frenar?',
    options: [
      'Dar un volantazo brusco sin mirar espejos.',
      'Frenar firmemente en línea recta y solo cambiar de carril si previamente verificó por espejos/punto ciego que el carril contiguo está libre.',
      'Acelerar para pasar por encima.',
      'Cerrar los ojos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Esquivar a ciegas hacia otro carril puede causar un choque lateral o frontal mucho peor que impactar un objeto ligero tras frenar.',
    distractorRationale: {
      A: 'Un volantazo sin mirar puede lanzar el vehículo contra otro automóvil o barranco.',
      B: 'Frenar primero reduce la energía y da tiempo para evaluar una salida segura.',
      C: 'Acelerar hacia un obstáculo puede dañar dirección o volcar el auto.',
      D: 'Obviamente peligroso.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-p090',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Manejo Ante Granizo o Aguacero Cegador',
    question: 'Si una tormenta repentina de lluvia torrencial impide ver más allá de cinco metros incluso con limpiaparabrisas al máximo, ¿qué decisión debe tomar?',
    statement: 'Si una tormenta repentina de lluvia torrencial impide ver más allá de cinco metros incluso con limpiaparabrisas al máximo, ¿qué decisión debe tomar?',
    options: [
      'Seguir a 80 km/h guiándose solo por el instinto.',
      'Detenerse en medio del carril izquierdo sin luces.',
      'Salir de la calzada hacia una gasolinera, parqueo o hombro amplio seguro con luces intermitentes hasta que mejore la visibilidad.',
      'Apagar los limpiaparabrisas.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Con visibilidad menor a 5 metros es imposible evitar vehículos detenidos; apartarse completamente de la calzada evita choques múltiples.',
    distractorRationale: {
      A: 'Conducir a ciegas a 80 km/h garantiza colisión si hay un obstáculo.',
      B: 'Detenerse sobre un carril activo en tormenta provoca impactos traseros.',
      C: 'Esperar 10 minutos en un sitio seguro fuera de la vía es la decisión inteligente.',
      D: 'Obviamente empeoraría la visibilidad.'
    },
    legalReference: 'Manual de Seguridad Vial en Condiciones Adversas VMT.'
  },
  {
    id: 'vmt-p091',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Choque Inminente Contra Otro Vehículo',
    question: 'Si usted detecta que otro vehículo viene invadiendo su carril de frente y el choque parece inminente, ¿por qué debe frenar lo máximo posible antes del impacto?',
    statement: 'Si usted detecta que otro vehículo viene invadiendo su carril de frente y el choque parece inminente, ¿por qué debe frenar lo máximo posible antes del impacto?',
    options: [
      'No sirve de nada frenar.',
      'Porque reducir la velocidad incluso 20 km/h antes del choque disminuye drásticamente la energía cinética del impacto y aumenta la probabilidad de sobrevivir.',
      'Porque el airbag solo funciona si pisa el acelerador.',
      'Para apagar el motor.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Como la energía cinética crece con el cuadrado de la velocidad, cada kilómetro por hora reducido antes del impacto salva órganos y vidas.',
    distractorRationale: {
      A: 'Frenar hasta el último instante reduce enormemente la severidad de las lesiones.',
      B: 'Disminuir la velocidad de impacto es decisivo para que cinturones y airbags protejan eficazmente.',
      C: 'Los airbags se activan por sensores de desaceleración, no por el acelerador.',
      D: 'No es el objetivo del frenado.'
    },
    legalReference: 'Manual de Física Vial y Supervivencia VMT.'
  },
  {
    id: 'vmt-p092',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Alarma de Presión Baja de Aire en Cabezal',
    question: 'Si usted conduce un camión pesado con frenos de aire y suena la alarma acústica y luz roja de baja presión (< 60 PSI), ¿qué decisión debe tomar?',
    statement: 'Si usted conduce un camión pesado con frenos de aire y suena la alarma acústica y luz roja de baja presión (< 60 PSI), ¿qué decisión debe tomar?',
    options: [
      'Continuar el viaje ignorando la alarma.',
      'Desconectar el zumbador de la alarma.',
      'Detener el vehículo de inmediato de forma controlada en un lugar seguro fuera de la vía antes de que salten los frenos de emergencia bloqueando las ruedas en plena carretera.',
      'Acelerar para que el compresor cargue más rápido.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La alarma de baja presión advierte que quedan pocos PSI antes de que los resortes de emergencia claven las ruedas en mitad del tráfico.',
    distractorRationale: {
      A: 'Seguir circulando terminará en bloqueo súbito de frenos o pérdida de frenado.',
      B: 'Silenciar la alarma no repara la fuga neumática.',
      C: 'Orillarse de inmediato mientras aún hay aire para frenar suavemente es vital.',
      D: 'Acelerar si hay una fuga mayor solo aumenta la peligrosidad.'
    },
    legalReference: 'Manual Técnico de Frenos de Aire y Licencia Pesada T VMT.'
  },
  {
    id: 'vmt-p093',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Decidir No Subir a Conducir Tras Una Copa',
    question: 'En una cena le ofrecen "solo una copa de vino" sabiendo que después debe manejar de regreso a casa. ¿Qué decisión refleja integridad y autocontrol?',
    statement: 'En una cena le ofrecen "solo una copa de vino" sabiendo que después debe manejar de regreso a casa. ¿Qué decisión refleja integridad y autocontrol?',
    options: [
      'Aceptarla porque "una copa no hace nada".',
      'Tomar café después de la copa.',
      'Esperar diez minutos y manejar.',
      'Rechazar firmemente cualquier bebida alcohólica y optar por bebida sin alcohol, cumpliendo la ley de Cero Tolerancia.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Decir "no" a la primera copa elimina el riesgo de desinhibición progresiva y garantiza 0.0 g/l ante la ley.',
    distractorRationale: {
      A: 'Bajo Cero Tolerancia una sola copa ya arroja resultado positivo sancionable.',
      B: 'El café no metaboliza el alcohol.',
      C: 'Diez minutos no eliminan el alcohol absorbido.',
      D: 'La prevención firme desde el primer ofrecimiento protege vidas y libertad.'
    },
    legalReference: 'Decreto Legislativo N.º 185/2025 y Manual VMT.'
  },
  {
    id: 'vmt-p094',
    category: 'psicologico',
    topic: 'Decisión Bajo Presión — Manejo en Pendiente Larga con Tráfico Lento',
    question: 'Al bajar una cuesta pronunciada detrás de un tráfico muy lento, ¿qué decisión evita el desgaste y falla térmica de los frenos?',
    statement: 'Al bajar una cuesta pronunciada detrás de un tráfico muy lento, ¿qué decisión evita el desgaste y falla térmica de los frenos?',
    options: [
      'Engranar una marcha baja desde arriba y guardar distancia amplia para no tener que ir pisando el freno constantemente.',
      'Pegarse a dos metros del auto de adelante frenando cada segundo.',
      'Bajar en Neutro.',
      'Usar el freno de mano continuamente.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Combinar marcha baja con distancia amplia permite regular la velocidad con la retención del motor sin recalentar los frenos.',
    distractorRationale: {
      A: 'Menos frenazos significa frenos fríos y seguros todo el descenso.',
      B: 'Ir pegado obliga a frenar continuamente sobrecalentando pastillas.',
      C: 'Bajar en Neutro es peligroso e ilegal.',
      D: 'El freno de mano no está diseñado para descensos prolongados.'
    },
    legalReference: 'Manual de Conducción en Montaña VMT.'
  },
  // ==========================================================================
  // EMPATÍA VIAL Y CONVIVENCIA CON USUARIOS VULNERABLES
  // ==========================================================================
  {
    id: 'vmt-p095',
    category: 'psicologico',
    topic: 'Empatía Vial — Adultos Mayores y Personas con Movilidad Reducida',
    question: 'Un adulto mayor con bastón inicia el cruce de la calle en un paso peatonal, pero el semáforo cambia a verde para usted mientras él aún va a la mitad. ¿Qué debe hacer?',
    statement: 'Un adulto mayor con bastón inicia el cruce de la calle en un paso peatonal, pero el semáforo cambia a verde para usted mientras él aún va a la mitad. ¿Qué debe hacer?',
    options: [
      'Acelerar pasando cerca para asustarlo y que camine más rápido.',
      'Permanecer detenido con paciencia y permitir que termine de cruzar con total seguridad, protegiéndolo con su vehículo.',
      'Tocarle la bocina insistentemente.',
      'Gritarle desde la ventanilla.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La luz verde autoriza avanzar solo cuando la intersección está despejada; la empatía y la ley exigen respetar el ritmo de personas mayores o con discapacidad.',
    distractorRationale: {
      A: 'Pasar cerca de un adulto mayor puede hacerlo caer y causar un atropello.',
      B: 'Esperar unos segundos adicionales demuestra humanidad y respeto vial.',
      C: 'Asustar con el claxon a una persona con movilidad reducida es cruel y peligroso.',
      D: 'La agresión verbal vulnera la convivencia ciudadana.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 88.'
  },
  {
    id: 'vmt-p096',
    category: 'psicologico',
    topic: 'Empatía Vial — Charcos de Agua Junto a Peatones',
    question: 'Al circular bajo lluvia por una calle con charcos acumulados junto a la acera donde caminan peatones, ¿qué conducta empática y reglamentaria corresponde?',
    statement: 'Al circular bajo lluvia por una calle con charcos acumulados junto a la acera donde caminan peatones, ¿qué conducta empática y reglamentaria corresponde?',
    options: [
      'Pasar rápido por el charco para salpicarlos.',
      'Reducir la velocidad y apartarse levemente dentro del carril para evitar salpicar agua o lodo a los peatones y prevenir hidroplaneo.',
      'Acelerar para cruzar antes.',
      'Tocar la bocina.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Salpicar intencionalmente o por descuido a transeúntes es una falta de respeto sancionable y además aumenta el riesgo de perder control en el charco.',
    distractorRationale: {
      A: 'Salpicar a otros usuarios refleja falta total de empatía cívica.',
      B: 'Bajar la velocidad protege tanto la dignidad del peatón como la adherencia del auto.',
      C: 'Acelerar sobre agua estancada provoca hidroplaneo.',
      D: 'No resuelve el paso sobre el charco.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 117.'
  },
  {
    id: 'vmt-p097',
    category: 'psicologico',
    topic: 'Empatía Vial — Ciclistas en Carretera',
    question: '¿Qué actitud empática y segura debe mostrar todo conductor de automóvil o camión hacia un ciclista que circula por el borde derecho de la carretera?',
    statement: '¿Qué actitud empática y segura debe mostrar todo conductor de automóvil o camión hacia un ciclista que circula por el borde derecho de la carretera?',
    options: [
      'Considerar que las bicicletas no tienen derecho a usar la vía.',
      'Pasarle rozando a 90 km/h.',
      'Reconocer su fragilidad física, bajar velocidad, esperar oportunidad segura para rebasar y dejar al menos 1.5 metros de distancia lateral.',
      'Tirarle objetos desde la ventana.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El ciclista no tiene carrocería ni airbag; su cuerpo absorbe el 100% de cualquier impacto o ráfaga de viento generada por un vehículo.',
    distractorRationale: {
      A: 'Las bicicletas son vehículos reconocidos por la normativa vial.',
      B: 'La turbulencia de un vehículo rápido derriba fácilmente a un ciclista.',
      C: 'Respetar los 1.5 metros laterales salva vidas de ciclistas.',
      D: 'Es una agresión peligrosa e ilícita.'
    },
    legalReference: 'Manual de Convivencia Vial VMT y SIECA.'
  },
  {
    id: 'vmt-p098',
    category: 'psicologico',
    topic: 'Empatía Vial — Personas con Discapacidad Visual (Bastón Blanco)',
    question: 'Si observa a una persona con bastón blanco o perro guía esperando para cruzar en una esquina sin semáforo, ¿cómo debe proceder?',
    statement: 'Si observa a una persona con bastón blanco o perro guía esperando para cruzar en una esquina sin semáforo, ¿cómo debe proceder?',
    options: [
      'Pasar rápido sin detenerse porque usted va en auto.',
      'Tocar el claxon fuerte para avisarle que no cruce.',
      'Detenerse a distancia prudente antes del cruce y permitirle pasar con seguridad, evitando ruidos bruscos que la desorienten.',
      'Hacerle señas con la mano desde adentro del vidrio.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Una persona con discapacidad visual se orienta por el sonido del tráfico; detenerse por completo y mantener silencio permite que perciba que la vía está segura.',
    distractorRationale: {
      A: 'Tiene prioridad absoluta como usuario vulnerable.',
      B: 'El claxon súbito aturde y desorienta auditivamente a personas ciegas.',
      C: 'Ceder el paso con calma y respeto garantiza su integridad.',
      D: 'Las señas visuales no son percibidas por personas con ceguera.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 88.'
  },
  {
    id: 'vmt-p099',
    category: 'psicologico',
    topic: 'Empatía Vial — Respeto a Espacios Reservados de Parqueo',
    question: 'Un estacionamiento está casi lleno y solo queda libre la plaza azul con símbolo de silla de ruedas cerca de la entrada. Usted solo tardará dos minutos. ¿Qué debe hacer?',
    statement: 'Un estacionamiento está casi lleno y solo queda libre la plaza azul con símbolo de silla de ruedas cerca de la entrada. Usted solo tardará dos minutos. ¿Qué debe hacer?',
    options: [
      'Estacionarse ahí "solo dos minutos" con intermitentes.',
      'Buscar otro espacio más lejano y dejar siempre libre la plaza accesible para quien realmente la necesita.',
      'Tapar la placa para que no lo multen.',
      'Estacionar atravesado ocupando dos espacios.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Esos "dos minutos" pueden impedir que una persona con movilidad reducida descienda con su silla de ruedas; la empatía cívica respeta siempre estos espacios.',
    distractorRationale: {
      A: 'Ninguna brevedad justifica usurpar un derecho de accesibilidad.',
      B: 'Caminar unos metros extra es sencillo para quien no tiene discapacidad.',
      C: 'Ocultar placas es infracción adicional.',
      D: 'Empeora el uso del estacionamiento.'
    },
    legalReference: 'Ley de Equiparación de Oportunidades y Manual VMT.'
  },
  {
    id: 'vmt-p100',
    category: 'psicologico',
    topic: 'Empatía Vial — Cortesía de Paso en Salidas Congestionadas',
    question: 'En tráfico urbano lento, un vehículo intenta incorporarse desde una calle secundaria sin semáforo y lleva varios minutos esperando. ¿Qué gesto mejora la convivencia vial?',
    statement: 'En tráfico urbano lento, un vehículo intenta incorporarse desde una calle secundaria sin semáforo y lleva varios minutos esperando. ¿Qué gesto mejora la convivencia vial?',
    options: [
      'Pegarse al auto de adelante para no dejarlo entrar.',
      'Ceder el paso amablemente a un vehículo ("uno a uno") cuando la fila avanza despacio, sin frenar de golpe.',
      'Gritarle que espere otra hora.',
      'Pitarle para que retroceda.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La cortesía recíproca reduce la desesperación de quienes esperan incorporarse, evitando salidas forzadas peligrosas.',
    distractorRationale: {
      A: 'Cerrar intencionalmente cada hueco genera agresividad vial.',
      B: 'Ceder el paso a un vehículo apenas toma tres segundos y ordena la ciudad.',
      C: 'La hostilidad deteriora el ambiente vial.',
      D: 'No aporta solución.'
    },
    legalReference: 'Manual de Cortesía y Convivencia Vial VMT.'
  },
  {
    id: 'vmt-p101',
    category: 'psicologico',
    topic: 'Empatía Vial — Trabajadores Viales y Agentes en la Calzada',
    question: 'Al pasar junto a cuadrillas de mantenimiento vial, recolectores de basura o agentes de tránsito dirigiendo bajo el sol o lluvia, ¿qué actitud corresponde?',
    statement: 'Al pasar junto a cuadrillas de mantenimiento vial, recolectores de basura o agentes de tránsito dirigiendo bajo el sol o lluvia, ¿qué actitud corresponde?',
    options: [
      'Acelerar pasando cerca de ellos.',
      'Ignorar las señales del abanderado.',
      'Reducir la velocidad, mantener amplia separación lateral y acatar con respeto sus indicaciones.',
      'Quejarse tocando el claxon.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Quienes trabajan sobre el asfalto están expuestos constantemente al tráfico; bajar velocidad protege sus vidas.',
    distractorRationale: {
      A: 'Pasar rápido cerca de trabajadores viales es una causa trágica de atropellos laborales.',
      B: 'El abanderado protege a la cuadrilla y a los propios conductores.',
      C: 'El respeto y velocidad reducida cuidan la vida de quienes mantienen las vías.',
      D: 'El claxon solo genera estrés innecesario.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p102',
    category: 'psicologico',
    topic: 'Empatía Vial — Zonas Hospitalarias y Nocturnas',
    question: 'Al circular de noche por calles residenciales o frente a hospitales, ¿qué conducta empática debe observar respecto al ruido del vehículo?',
    statement: 'Al circular de noche por calles residenciales o frente a hospitales, ¿qué conducta empática debe observar respecto al ruido del vehículo?',
    options: [
      'Acelerar el motor con escape libre para hacer ruido.',
      'Tocar el claxon para saludar a los vecinos.',
      'Subir el volumen del equipo de sonido con las ventanas abiertas.',
      'Evitar usar la bocina, mantener el silenciador en buen estado y circular suavemente respetando el descanso y recuperación de enfermos.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La contaminación acústica nocturna afecta la salud cardiovascular y el descanso de pacientes y vecinos.',
    distractorRationale: {
      A: 'Los escapes modificados ruidosos están prohibidos por ley.',
      B: 'Usar bocina sin emergencia es infracción.',
      C: 'Respetar la tranquilidad nocturna es deber ciudadano.',
      D: 'Conducir suavemente y sin ruido refleja cultura cívica.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 44 y Art. 46.'
  },
  {
    id: 'vmt-p103',
    category: 'psicologico',
    topic: 'Empatía Vial — Transporte Público y Pasajeros Subiendo o Bajando',
    question: 'Cuando un autobús detiene su marcha en una parada y descienden pasajeros, ¿qué consideración debe tener el conductor que circula detrás?',
    statement: 'Cuando un autobús detiene su marcha en una parada y descienden pasajeros, ¿qué consideración debe tener el conductor que circula detrás?',
    options: [
      'Moderar la velocidad, no adelantar por la derecha ni rozar la puerta de descenso, y vigilar que nadie cruce por delante del bus.',
      'Rebasar por la acera derecha.',
      'Pitarle al motorista del autobús mientras bajan ancianos.',
      'Acelerar rozando el costado izquierdo del bus sin mirar.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Proteger el ascenso y descenso de pasajeros del transporte colectivo previene atropellos en paradas.',
    distractorRationale: {
      A: 'La prudencia en paradas cuida a decenas de usuarios diarios.',
      B: 'Subir a la acera pone en peligro directo a quienes bajan del bus.',
      C: 'Apurar el descenso puede hacer caer a adultos mayores o niños.',
      D: 'Alguien puede cruzar repentinamente frente al autobús.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p104',
    category: 'psicologico',
    topic: 'Empatía Vial — No Estacionar Frente a Portones o Rampas',
    question: '¿Por qué es una grave falta de empatía y respeto estacionar bloqueando la entrada de una cochera ajena o una rampa peatonal de esquina?',
    statement: '¿Por qué es una grave falta de empatía y respeto estacionar bloqueando la entrada de una cochera ajena o una rampa peatonal de esquina?',
    options: [
      'Solo importa si el dueño está mirando.',
      'Porque impide que una familia salga en caso de emergencia médica y bloquea el paso de personas en silla de ruedas o coches de bebé.',
      'No tiene importancia si deja el teléfono en el tablero.',
      'Solo está prohibido en días hábiles.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Las rampas de accesibilidad y salidas de inmuebles deben permanecer libres siempre para garantizar movilidad y emergencias.',
    distractorRationale: {
      A: 'La norma rige siempre.',
      B: 'Bloquear rampas obliga a usuarios de sillas de ruedas a bajar a la calzada entre vehículos.',
      C: 'Dejar el teléfono no autoriza obstruir accesos ni rampas.',
      D: 'La prohibición es permanente.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 102.'
  },
  {
    id: 'vmt-p105',
    category: 'psicologico',
    topic: 'Empatía Vial — Comprensión Hacia Conductores de Carga Pesada',
    question: 'Si observa que un cabezal con furgón está realizando una maniobra lenta de giro o estacionamiento en un acceso estrecho, ¿qué actitud facilita la seguridad?',
    statement: 'Si observa que un cabezal con furgón está realizando una maniobra lenta de giro o estacionamiento en un acceso estrecho, ¿qué actitud facilita la seguridad?',
    options: [
      'Meterse rápido en los espacios ciegos del furgón.',
      'Detenerse a distancia segura fuera de su radio de giro y darle espacio para completar la maniobra.',
      'Pitarle sin cesar para apurarlo.',
      'Estacionarse justo detrás de su remolque.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Un vehículo articulado de 18 metros requiere espacio amplio y visibilidad; cederle espacio evita roces y colisiones.',
    distractorRationale: {
      A: 'Entrar en zonas ciegas durante una maniobra articulada es sumamente peligroso.',
      B: 'La paciencia y distancia facilitan que el operador termine rápido y seguro.',
      C: 'Pitar distrae al operador que está vigilando múltiples espejos.',
      D: 'Quedar detrás de un remolque en retroceso lo coloca en punto ciego total.'
    },
    legalReference: 'Manual de Convivencia con Transporte Pesado VMT.'
  },
  {
    id: 'vmt-p106',
    category: 'psicologico',
    topic: 'Empatía Vial — Conducción Ecológica y Respeto al Aire Común',
    question: '¿Cómo se relaciona el mantenimiento del motor y la conducción suave con la empatía hacia la comunidad?',
    statement: '¿Cómo se relaciona el mantenimiento del motor y la conducción suave con la empatía hacia la comunidad?',
    options: [
      'No tiene relación alguna.',
      'Solo beneficia a los talleres.',
      'Evitar acelerones bruscos y reparar motores que emiten humo negro denso reduce la contaminación respiratoria que afecta a peatones y niños.',
      'Aumenta el ruido ambiental.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La conducción eficiente y el control de emisiones cuidan la salud pública y el ambiente urbano compartido.',
    distractorRationale: {
      A: 'La calidad del aire urbano depende directamente del parque vehicular.',
      B: 'Beneficia la salud respiratoria de toda la población y ahorra combustible al dueño.',
      C: 'El mantenimiento responsable es parte de la ciudadanía vial.',
      D: 'Conducir suavemente reduce también el ruido.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y Normativa Ambiental.'
  },
  {
    id: 'vmt-p107',
    category: 'psicologico',
    topic: 'Empatía Vial — Cuidado de Mascotas y Animales Domésticos',
    question: 'Si viaja con una mascota (perro o gato) dentro del automóvil, ¿cómo debe transportarla para proteger tanto al animal como a los ocupantes?',
    statement: 'Si viaja con una mascota (perro o gato) dentro del automóvil, ¿cómo debe transportarla para proteger tanto al animal como a los ocupantes?',
    options: [
      'En el regazo del conductor asomando la cabeza por la ventana del chofer.',
      'Suelta saltando entre los pedales.',
      'Atada con correa larga al espejo lateral.',
      'En el asiento trasero sujeta con arnés certificado acoplado al cinturón o dentro de transportadora asegurada.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Una mascota suelta puede caer bajo los pedales de freno, distraer al conductor o salir proyectada en un choque.',
    distractorRationale: {
      A: 'Llevar un animal en las piernas del conductor impide girar el volante y es letal si detona el airbag.',
      B: 'Un animal bajo el pedal del freno impide detener el vehículo.',
      C: 'Obviamente peligroso e inhumano.',
      D: 'Sujetar a la mascota atrás protege la vida del animal y de todos los pasajeros.'
    },
    legalReference: 'Manual de Seguridad Interior VMT.'
  },
  {
    id: 'vmt-p108',
    category: 'psicologico',
    topic: 'Empatía Vial — Uso Responsable de Luces Altas en Zonas Urbanas',
    question: '¿Por qué usar luces altas permanentemente dentro de calles urbanas iluminadas demuestra falta de consideración hacia los demás?',
    statement: '¿Por qué usar luces altas permanentemente dentro de calles urbanas iluminadas demuestra falta de consideración hacia los demás?',
    options: [
      'Porque deslumbra a conductores opuestos, motociclistas, ciclistas y peatones sin aportar beneficio real donde ya hay alumbrado público.',
      'Porque ilumina demasiado las señales.',
      'Porque gasta menos batería.',
      'No molesta a nadie en ciudad.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Las luces altas en ciudad ciegan a quienes vienen de frente y por los retrovisores; deben reservarse solo para carreteras oscuras sin tráfico cercano.',
    distractorRationale: {
      A: 'Respetar la visión de los demás usuarios mantiene segura la circulación nocturna.',
      B: 'El problema es el encandilamiento a personas.',
      C: 'Consumen más energía, no menos.',
      D: 'Generan fatiga ocular y riesgo de accidente.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 41.'
  },
  {
    id: 'vmt-p109',
    category: 'psicologico',
    topic: 'Empatía Vial — Auxilio Solidario Seguro en Carretera',
    question: 'Si presencia un accidente recién ocurrido sin cuerpos de socorro aún en el sitio, ¿cuál es la actitud ciudadana más solidaria y responsable?',
    statement: 'Si presencia un accidente recién ocurrido sin cuerpos de socorro aún en el sitio, ¿cuál es la actitud ciudadana más solidaria y responsable?',
    options: [
      'Seguir de largo grabando un video con el celular.',
      'Estacionarse en lugar seguro fuera de riesgo, activar el protocolo P.A.S. (Proteger, Avisar al 911 y Socorrer sin causar daño) y esperar ayuda.',
      'Mover bruscamente a los heridos para tomar fotos.',
      'Reírse del percance.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Brindar alerta temprana al 911 y proteger la escena puede ser la diferencia entre la vida y la muerte para las víctimas.',
    distractorRationale: {
      A: 'Grabar mientras conduce además provoca otros choques.',
      B: 'La solidaridad ordenada bajo P.A.S. salva vidas.',
      C: 'Mover sin técnica puede agravar lesiones medulares.',
      D: 'Carece de humanidad básica.'
    },
    legalReference: 'Protocolo P.A.S. de Emergencias Viales VMT.'
  },
  {
    id: 'vmt-p110',
    category: 'psicologico',
    topic: 'Empatía Vial — Paciencia en Salidas de Escuelas e Iglesias',
    question: 'Al circular frente a centros educativos o templos a la hora de salida, ¿qué disposición mental debe tener el conductor?',
    statement: 'Al circular frente a centros educativos o templos a la hora de salida, ¿qué disposición mental debe tener el conductor?',
    options: [
      'Exigir paso rápido tocando el claxon.',
      'Aceptar el ritmo lento del entorno, respetar 25 km/h y ceder prioridad a familias, niños y adultos mayores.',
      'Acelerar entre los grupos de personas.',
      'Estacionarse sobre la cebra.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Estos puntos concentran peatones vulnerables distraídos conversando; la paciencia y baja velocidad previenen tragedias.',
    distractorRationale: {
      A: 'El claxon genera caos y prisa en niños pequeños.',
      B: 'La empatía preventiva prioriza la vida comunitaria.',
      C: 'Es conducta temeraria.',
      D: 'Obstruye el paso seguro.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 98.'
  },
  {
    id: 'vmt-p111',
    category: 'psicologico',
    topic: 'Empatía Vial — No Arrojar Basura Desde el Vehículo',
    question: 'Además de ser sancionado por ley, ¿por qué arrojar botellas, colillas de cigarrillo o basura por la ventanilla afecta a otros usuarios de la vía?',
    statement: 'Además de ser sancionado por ley, ¿por qué arrojar botellas, colillas de cigarrillo o basura por la ventanilla afecta a otros usuarios de la vía?',
    options: [
      'No afecta a nadie.',
      'Solo ensucia ligeramente el paisaje.',
      'Una botella o colilla encendida lanzada a 70 km/h puede golpear a un motociclista, provocar incendios en maleza seca u obstruir tragantes causando inundaciones.',
      'Mejora el drenaje de la calle.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Arrojar objetos desde vehículos en movimiento crea riesgos físicos directos para motociclistas y contaminación ambiental severa.',
    distractorRationale: {
      A: 'Representa un riesgo físico y ambiental real.',
      B: 'Tiene consecuencias viales e hidráulicas graves en invierno.',
      C: 'Guardar los desechos dentro del auto hasta llegar a un basurero es cultura cívica.',
      D: 'Al contrario, tapona los sistemas de drenaje pluvial.'
    },
    legalReference: 'Manual SIECA Señal R-31 y Ley de Transporte Terrestre.'
  },
  {
    id: 'vmt-p112',
    category: 'psicologico',
    topic: 'Empatía Vial — Respeto a Vehículos de Aprendizaje y Lento Desplazamiento',
    question: '¿Cómo refleja empatía un conductor experimentado cuando comparte la vía con un conductor novato?',
    statement: '¿Cómo refleja empatía un conductor experimentado cuando comparte la vía con un conductor novato?',
    options: [
      'Acosándolo por detrás para que acelere.',
      'Cerrándole el paso en cada esquina.',
      'Burlándose desde la ventanilla.',
      'Dándole espacio adicional, evitando intimidarlo y facilitando sus maniobras de incorporación.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Todos necesitamos espacio para aprender; la tolerancia reduce la ansiedad del novato y hace la vía más segura para todos.',
    distractorRationale: {
      A: 'Acosar a un aprendiz aumenta el riesgo de error súbito.',
      B: 'Cerrar el paso provoca colisiones.',
      C: 'La burla fomenta hostilidad vial.',
      D: 'El apoyo paciente mejora la seguridad colectiva.'
    },
    legalReference: 'Manual de Convivencia Vial VMT.'
  },
  {
    id: 'vmt-p113',
    category: 'psicologico',
    topic: 'Empatía Vial — Motociclistas y Respeto a Espacios Peatonales',
    question: 'Un motociclista que evita circular por aceras y respeta los pasos cebra demuestra:',
    statement: 'Un motociclista que evita circular por aceras y respeta los pasos cebra demuestra:',
    options: [
      'Conciencia cívica, empatía por los peatones y cumplimiento estricto de la normativa vial.',
      'Falta de habilidad para manejar moto.',
      'Desperdicio de tiempo.',
      'Miedo injustificado.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La verdadera destreza en motocicleta se demuestra cumpliendo las normas y respetando a los peatones, no invadiendo aceras.',
    distractorRationale: {
      A: 'Respetar los espacios exclusivos peatonales es base de convivencia.',
      B: 'La pericia técnica se demuestra en la calzada, no sobre andenes.',
      C: 'Ahorrar segundos violando normas expone a multas y atropellos.',
      D: 'Es prudencia y civismo, nunca cobardía.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 106 y Art. 107.'
  },
  // ==========================================================================
  // ACTITUD PREVENTIVA, ÉTICA Y RESPONSABILIDAD CIUDADANA
  // ==========================================================================
  {
    id: 'vmt-p114',
    category: 'psicologico',
    topic: 'Ética Vial — Honestidad Ante Autoridad de Tránsito',
    question: 'Si un agente de la PNC-DTT lo detiene por cometer una infracción real (por ejemplo, exceso de velocidad), ¿qué actitud ética corresponde?',
    statement: 'Si un agente de la PNC-DTT lo detiene por cometer una infracción real (por ejemplo, exceso de velocidad), ¿qué actitud ética corresponde?',
    options: [
      'Ofrecer dinero al agente para evitar la esquela.',
      'Aceptar con respeto la verificación, presentar los documentos y asumir la responsabilidad administrativa (o ejercer el recurso legal si procede, nunca sobornar).',
      'Insultar al agente y huir acelerando.',
      'Fingir una enfermedad grave.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Intentar sobornar a un agente constituye delito penal de cohecho activo; la ética ciudadana asume responsabilidades dentro del marco legal.',
    distractorRationale: {
      A: 'El soborno es un delito grave que destruye la institucionalidad y agrava su situación jurídica.',
      B: 'La integridad cívica respeta la autoridad y los cauces legales.',
      C: 'Huir o agredir a la autoridad añade delitos penales.',
      D: 'La deshonestidad agrava la falta moral y legal.'
    },
    legalReference: 'Código Penal y Ley de Transporte Terrestre (D.L. 477).'
  },
  {
    id: 'vmt-p115',
    category: 'psicologico',
    topic: 'Ética Vial — Responsabilidad en Daño a Vehículo Estacionado',
    question: 'Al salir de un estacionamiento roza involuntariamente el guardafango de un vehículo estacionado cuyo dueño no está presente. ¿Qué conducta ética corresponde?',
    statement: 'Al salir de un estacionamiento roza involuntariamente el guardafango de un vehículo estacionado cuyo dueño no está presente. ¿Qué conducta ética corresponde?',
    options: [
      'Huir rápidamente aprovechando que nadie vio.',
      'Dejar una nota visible con su nombre, número de teléfono y seguro/disposición para responder por el daño o reportarlo a la administración.',
      'Culpar al vehículo estacionado.',
      'Borrar la marca y marcharse.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Asumir responsabilidad por los daños propios refleja integridad ética y evita denuncias posteriores por daños y fuga.',
    distractorRationale: {
      A: 'Las cámaras de vigilancia suelen registrar estos hechos y agravan la falta por huida.',
      B: 'Responder honestamente por un percance menor fortalece la confianza social.',
      C: 'Un auto bien estacionado no es responsable de una maniobra propia.',
      D: 'Ocultar el daño es deshonesto.'
    },
    legalReference: 'Código Civil y Ética Ciudadana Vial VMT.'
  },
  {
    id: 'vmt-p116',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Revisión Rutinaria Antes de Subir al Auto',
    question: '¿Qué hábito sencillo de 15 segundos antes de subir al vehículo previene incidentes cotidianos?',
    statement: '¿Qué hábito sencillo de 15 segundos antes de subir al vehículo previene incidentes cotidianos?',
    options: [
      'Dar una vuelta visual rápida alrededor del auto revisando llantas, ausencia de fugas y que no haya niños u objetos detrás o debajo.',
      'Encender el motor y arrancar sin mirar.',
      'Acelerar a fondo en frío.',
      'Quitar los espejos.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La inspección visual perimetral detecta pinchazos lentos y evita tragedias por atropello en cocheras donde juegan niños pequeños.',
    distractorRationale: {
      A: 'Quince segundos de inspección pueden salvar una vida o evitar quedar varado.',
      B: 'Arrancar sin revisar entorno es causa de accidentes domésticos.',
      C: 'Acelerar en frío desgasta el motor sin lubricación plena.',
      D: 'Los espejos son obligatorios.'
    },
    legalReference: 'Manual de Manejo Preventivo VMT.'
  },
  {
    id: 'vmt-p117',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Cinturón Para Todos Antes de Arrancar',
    question: 'Como conductor responsable, ¿cuándo debe iniciar la marcha del vehículo si un pasajero se niega a ponerse el cinturón?',
    statement: 'Como conductor responsable, ¿cuándo debe iniciar la marcha del vehículo si un pasajero se niega a ponerse el cinturón?',
    options: [
      'Arrancar igual porque es problema solo del pasajero.',
      'No iniciar la marcha hasta que todos los ocupantes lleven correctamente abrochado su cinturón de seguridad.',
      'Permitirle ir sin cinturón si va atrás.',
      'Acelerar rápido para asustarlo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'El conductor es el capitán del vehículo y responde por la seguridad interior; además, un pasajero trasero suelto puede matar al conductor en un choque.',
    distractorRationale: {
      A: 'La ley y la física responsabilizan al conductor por la seguridad de sus pasajeros.',
      B: 'Mantener firmeza cortés protege la vida de todos.',
      C: 'Los ocupantes traseros también están obligados a usar cinturón.',
      D: 'Poner en riesgo a los pasajeros es irresponsable.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 39.'
  },
  {
    id: 'vmt-p118',
    category: 'psicologico',
    topic: 'Ética Vial — No Comprar ni Usar Licencias Fraudulentas',
    question: '¿Por qué es éticamente reprobable y legalmente grave intentar obtener una licencia de conducir sin realizar los exámenes oficiales?',
    statement: '¿Por qué es éticamente reprobable y legalmente grave intentar obtener una licencia de conducir sin realizar los exámenes oficiales?',
    options: [
      'Solo porque cuesta dinero.',
      'No tiene importancia si ya sabe mover el carro.',
      'Porque defrauda al Estado, constituye delito penal y pone en las vías a personas sin evaluación de aptitud visual, teórica ni psicológica.',
      'Únicamente afecta a las escuelas de manejo.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Las evaluaciones ante el organismo evaluador autorizado garantizan un estándar mínimo de conocimiento y estabilidad para proteger vidas en la vía pública.',
    distractorRationale: {
      A: 'El problema central es la ilegalidad y el riesgo mortal para la sociedad.',
      B: 'Mover un vehículo no equivale a conocer leyes, señales y manejo defensivo.',
      C: 'La obtención transparente y meritocrática de la licencia honra la seguridad vial.',
      D: 'Afecta la seguridad de toda la población salvadoreña.'
    },
    legalReference: 'Código Penal y Reglamento General de Tránsito (D.E. 61) Art. 155.'
  },
  {
    id: 'vmt-p119',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Planificación de Mantenimiento vs Reparación de Emergencia',
    question: '¿Qué diferencia psicológica distingue a un conductor preventivo de uno reactivo respecto al estado mecánico de su vehículo?',
    statement: '¿Qué diferencia psicológica distingue a un conductor preventivo de uno reactivo respecto al estado mecánico de su vehículo?',
    options: [
      'El preventivo espera a quedarse sin frenos para ir al taller.',
      'El reactivo revisa el auto cada semana.',
      'No hay diferencia.',
      'El preventivo atiende ruidos, testigos y cambios periódicos de frenos/llantas antes de que fallen; el reactivo solo actúa tras la avería o choque.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La cultura preventiva ahorra dinero, evita varamientos peligrosos y previene siniestros por fallas mecánicas evitables.',
    distractorRationale: {
      A: 'Eso describe precisamente al conductor reactivo o negligente.',
      B: 'Revisar periódicamente es propio del conductor preventivo.',
      C: 'Son actitudes opuestas frente al riesgo.',
      D: 'La anticipación mecánica es extensión directa del manejo defensivo.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p120',
    category: 'psicologico',
    topic: 'Ética Vial — Responsabilidad al Prestar un Vehículo',
    question: 'Antes de prestar su vehículo a un amigo o familiar, ¿qué verificación ética y legal debe realizar obligatoriamente?',
    statement: 'Antes de prestar su vehículo a un amigo o familiar, ¿qué verificación ética y legal debe realizar obligatoriamente?',
    options: [
      'Confirmar que tenga licencia vigente acorde a la categoría, esté 100% sobrio y en condiciones psicofísicas aptas.',
      'Ninguna, basta con que sea amigo.',
      'Solo revisar que tenga gasolina.',
      'Prestarlo incluso si ha bebido alcohol.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Quien presta un vehículo a alguien ebrio o sin licencia expone la vida de su ser querido, la de terceros y su propio patrimonio.',
    distractorRationale: {
      A: 'La verdadera amistad cuida la vida impidiendo que alguien maneje sin licencia o ebrio.',
      B: 'La amistad no exime de responsabilidad civil solidaria ni de tragedias.',
      C: 'La aptitud legal y física del conductor es prioritaria.',
      D: 'Jamás debe entregarse un vehículo a quien haya ingerido alcohol.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y Manual VMT.'
  },
  {
    id: 'vmt-p121',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Conducción Ejemplar Frente a Menores',
    question: '¿Por qué es importante que los padres respeten estrictamente semáforos, cinturón y cortesía vial cuando llevan niños en el automóvil?',
    statement: '¿Por qué es importante que los padres respeten estrictamente semáforos, cinturón y cortesía vial cuando llevan niños en el automóvil?',
    options: [
      'Porque los niños no observan cómo manejan los adultos.',
      'Porque los niños aprenden por imitación ("aprendizaje vicario") los hábitos de respeto o imprudencia que repetirán como futuros peatones y conductores.',
      'Solo para evitar que lloren.',
      'No influye en la educación vial infantil.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Los menores observan y normalizan el uso del cinturón, el respeto al rojo y el trato a otros usuarios desde la infancia.',
    distractorRationale: {
      A: 'Los niños son observadores sumamente atentos de la conducta adulta.',
      B: 'Formar futuros ciudadanos viales responsables comienza dando el ejemplo en el asiento delantero.',
      C: 'Tiene un impacto formativo profundo a largo plazo.',
      D: 'La psicología del aprendizaje confirma el rol del modelado parental.'
    },
    legalReference: 'Programa Nacional de Educación Vial VMT / FONAT.'
  },
  {
    id: 'vmt-p122',
    category: 'psicologico',
    topic: 'Ética Vial — Cumplimiento de Normas Aun Sin Vigilancia',
    question: 'Detenerse completamente en una señal de Alto a las 3:00 a.m. cuando no hay patrullas ni cámaras visibles refleja:',
    statement: 'Detenerse completamente en una señal de Alto a las 3:00 a.m. cuando no hay patrullas ni cámaras visibles refleja:',
    options: [
      'Pérdida de tiempo innecesaria.',
      'Exceso de miedo.',
      'Autonomía moral, cultura cívica madura y convicción real de que la norma protege vidas aunque nadie vigile.',
      'Falta de experiencia.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'A las 3:00 a.m. es precisamente cuando un vehículo rápido transversal puede aparecer sin aviso; cumplir la ley por convicción protege vidas.',
    distractorRationale: {
      A: 'Detenerse toma dos segundos y evita colisiones nocturnas fatales.',
      B: 'Es prudencia racional, no miedo.',
      C: 'La ética ciudadana se demuestra cumpliendo las reglas sin necesidad de policía presente.',
      D: 'Los conductores más responsables mantienen sus hábitos a toda hora.'
    },
    legalReference: 'Manual de Ética y Psicología Vial VMT.'
  },
  {
    id: 'vmt-p123',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Silenciar o Activar Modo Conducción en el Celular',
    question: '¿Qué medida práctica preventiva evita la tentación impulsiva de mirar el teléfono mientras se conduce?',
    statement: '¿Qué medida práctica preventiva evita la tentación impulsiva de mirar el teléfono mientras se conduce?',
    options: [
      'Llevar el teléfono en la mano izquierda.',
      'Leer mensajes solo en las curvas.',
      'Colocarlo sobre el velocímetro.',
      'Activar el modo "No molestar al conducir" o guardarlo fuera del alcance visual antes de arrancar.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Eliminar notificaciones sonoras y visuales suprime el impulso psicológico de revisar mensajes durante el trayecto.',
    distractorRationale: {
      A: 'Llevarlo en la mano ocupa una mano y distrae.',
      B: 'En curvas la atención debe ser máxima.',
      C: 'Tapar el velocímetro oculta velocidad y testigos críticos.',
      D: 'Prevenir la distracción antes de arrancar es la medida más efectiva.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p124',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Autocrítica y Aprendizaje Continuo',
    question: 'Si usted estuvo a punto de sufrir un choque ("casi accidente") por un descuido propio, ¿cuál es la actitud más constructiva?',
    statement: 'Si usted estuvo a punto de sufrir un choque ("casi accidente") por un descuido propio, ¿cuál es la actitud más constructiva?',
    options: [
      'Analizar qué falló (velocidad, distracción, punto ciego) para corregir ese hábito y no repetirlo.',
      'Echarle la culpa al otro conductor siempre.',
      'Olvidarlo y acelerar más.',
      'Agradecer a la suerte sin cambiar nada.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Cada "casi accidente" es una advertencia gratuita que permite corregir errores antes de que ocurra una tragedia real.',
    distractorRationale: {
      A: 'La autocrítica honesta impulsa el crecimiento y mejora continua del conductor.',
      B: 'Culpar siempre a terceros impide aprender de los propios descuidos.',
      C: 'Repetir la misma conducta garantiza que la próxima vez falle la suerte.',
      D: 'La mejora activa previene futuros siniestros.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p125',
    category: 'psicologico',
    topic: 'Ética Vial — Rechazo a "Carreras" o Provocaciones en Semáforos',
    question: 'Si en un semáforo en rojo el conductor del carril contiguo acelera su motor mirándolo para retarlo a una carrera al cambiar a verde, ¿cómo debe actuar?',
    statement: 'Si en un semáforo en rojo el conductor del carril contiguo acelera su motor mirándolo para retarlo a una carrera al cambiar a verde, ¿cómo debe actuar?',
    options: [
      'Aceptar el reto para demostrar que su carro es más rápido.',
      'Ignorar por completo la provocación, arrancar con normalidad tras verificar el cruce y dejar que el otro se aleje.',
      'Gritarle desde la ventana.',
      'Frenar frente a él más adelante.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Las competencias callejeras configuran delito de conducción peligrosa (Art. 147-E CP) y ponen en riesgo mortal a peatones inocentes.',
    distractorRationale: {
      A: 'Aceptar retos en vía pública es ilegal y temerario.',
      B: 'No engancharse en juegos de ego protege su vida, su libertad y la de terceros.',
      C: 'Responder verbalmente escala provocaciones.',
      D: 'Obstaculizarlo después genera conflicto peligroso.'
    },
    legalReference: 'Código Penal Art. 147-E y Manual VMT.'
  },
  {
    id: 'vmt-p126',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Verificación de Clima y Ruta Antes de Viajar',
    question: 'Antes de emprender un viaje interdepartamental en época lluviosa, ¿qué acción preventiva demuestra previsión?',
    statement: 'Antes de emprender un viaje interdepartamental en época lluviosa, ¿qué acción preventiva demuestra previsión?',
    options: [
      'Salir sin revisar luces ni plumillas.',
      'Acelerar más para llegar antes de que llueva.',
      'Verificar estado de limpiaparabrisas, luces, llantas, pronóstico/estado de carreteras y salir con tiempo de sobra.',
      'Quitar los triángulos del baúl para ahorrar peso.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La planificación del viaje reduce imprevistos mecánicos y elimina la prisa en condiciones climáticas adversas.',
    distractorRationale: {
      A: 'Descubrir que las plumillas no sirven en plena tormenta es sumamente peligroso.',
      B: 'Correr por miedo a la lluvia aumenta riesgo de choque.',
      C: 'La previsión integral es rasgo de conductor responsable.',
      D: 'El equipo de emergencia es obligatorio siempre.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p127',
    category: 'psicologico',
    topic: 'Ética Vial — Cuidado del Transporte Colectivo y Señales Viales',
    question: '¿Por qué dañar, rayar o derribar señales de tránsito afecta gravemente a toda la comunidad?',
    statement: '¿Por qué dañar, rayar o derribar señales de tránsito afecta gravemente a toda la comunidad?',
    options: [
      'No afecta a nadie porque todos conocen las calles.',
      'Solo afecta a turistas extranjeros.',
      'Únicamente cuesta pintura.',
      'Porque deja a conductores sin advertencias críticas de curvas, altos o límites, pudiendo provocar accidentes mortales evitables.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Cada señal vandalizada o robada elimina una barrera preventiva vital para salvar vidas en carreteras y ciudades.',
    distractorRationale: {
      A: 'Incluso residentes nocturnos o bajo lluvia dependen de la reflectividad de las señales.',
      B: 'Afecta a todos los ciudadanos y transporte de carga.',
      C: 'Su ausencia puede costar vidas humanas.',
      D: 'Proteger la infraestructura vial es deber cívico.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y Código Penal.'
  },
  {
    id: 'vmt-p128',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Uso de Calzado Adecuado para Conducir',
    question: '¿Por qué es desaconsejable conducir utilizando sandalias muy flojas ("chanclas") o tacones altos inestables?',
    statement: '¿Por qué es desaconsejable conducir utilizando sandalias muy flojas ("chanclas") o tacones altos inestables?',
    options: [
      'Porque pueden deslizarse, trabarse debajo del pedal del freno o impedir aplicar presión firme en una frenada de emergencia.',
      'Porque ensucian las alfombras.',
      'No influyen en los pedales.',
      'Solo por estética.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Un calzado cerrado, plano y bien sujeto al pie asegura sensibilidad y agarre firme sobre acelerador, freno y embrague.',
    distractorRationale: {
      A: 'Una sandalia atascada bajo el pedal de freno puede impedir detener el vehículo a tiempo.',
      B: 'El riesgo es mecánico y de seguridad, no de limpieza.',
      C: 'El contacto firme pie-pedal es fundamental en emergencias.',
      D: 'Responde a ergonomía y seguridad activa.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p129',
    category: 'psicologico',
    topic: 'Ética Vial — Conciencia de Que Conducir Es Un Privilegio Regulado',
    question: 'Desde el punto de vista cívico y jurídico, ¿qué representa poseer una licencia de conducir otorgada por el VMT?',
    statement: 'Desde el punto de vista cívico y jurídico, ¿qué representa poseer una licencia de conducir otorgada por el VMT?',
    options: [
      'Un derecho ilimitado para hacer lo que se quiera en la calle.',
      'Una autorización condicionada de responsabilidad pública que exige aptitud continua, respeto a la ley y cuidado de la vida ajena.',
      'Un simple documento decorativo.',
      'Inmunidad frente a la policía.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La licencia habilita operar una máquina de más de una tonelada en espacios compartidos bajo estricto cumplimiento normativo.',
    distractorRationale: {
      A: 'La libertad de circular termina donde comienza la seguridad de los demás.',
      B: 'La habilitación se mantiene mientras se cumplan las condiciones legales y médicas.',
      C: 'Acredita idoneidad ante un organismo evaluador autorizado.',
      D: 'Todos los conductores están sujetos a fiscalización de la PNC-DTT.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y D.E. 61.'
  },
  {
    id: 'vmt-p130',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Hidratación, Descanso y Revisión Emocional Pre-Viaje',
    question: 'Antes de iniciar una jornada larga como conductor profesional o particular, ¿qué autoevaluación integral debe realizarse?',
    statement: 'Antes de iniciar una jornada larga como conductor profesional o particular, ¿qué autoevaluación integral debe realizarse?',
    options: [
      'Solo revisar si tiene cambio para peajes.',
      'Verificar únicamente el equipo de sonido.',
      'Evaluar si descansó suficiente, si tomó algún medicamento que cause sueño, si está emocionalmente sereno y si 0.0 alcohol.',
      'No es necesario autoevaluarse.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'El factor humano explica más del 80% de los siniestros viales; revisar el propio estado psicofísico es tan importante como revisar frenos y llantas.',
    distractorRationale: {
      A: 'La aptitud humana previa es más importante que el efectivo.',
      B: 'El entretenimiento no garantiza seguridad.',
      C: 'Descanso, sobriedad y calma emocional forman el triángulo de aptitud.',
      D: 'La autoevaluación honesta previene accidentes evitables.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p131',
    category: 'psicologico',
    topic: 'Ética Vial — Transparencia en Reportes de Siniestros',
    question: 'Al rendir declaración ante la PNC-DTT o aseguradora tras un percance vial, ¿por qué es fundamental relatar los hechos con veracidad?',
    statement: 'Al rendir declaración ante la PNC-DTT o aseguradora tras un percance vial, ¿por qué es fundamental relatar los hechos con veracidad?',
    options: [
      'Para confundir al agente.',
      'No importa decir la verdad.',
      'Para culpar a testigos inocentes.',
      'Porque las evidencias físicas (huellas de frenado, cámaras, daños) revelan la cinemática real y mentir invalida coberturas o agrava responsabilidades.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La reconstrucción pericial de accidentes contrasta declaraciones contra evidencia física; la honestidad agiliza soluciones justas.',
    distractorRationale: {
      A: 'Confundir a la autoridad empeora la situación jurídica.',
      B: 'Las declaraciones falsas pueden acarrear nulidad de póliza y cargos legales.',
      C: 'Es éticamente inaceptable y delito.',
      D: 'La verdad procesal protege la integridad del procedimiento.'
    },
    legalReference: 'Procedimiento de Inspección Técnica Vial PNC-DTT.'
  },
  {
    id: 'vmt-p132',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Adaptación a Vehículo Nuevo o Prestado',
    question: 'Cuando conduce por primera vez un vehículo diferente al habitual (por ejemplo, un modelo distinto o alquilado), ¿qué precaución inicial debe tomar?',
    statement: 'Cuando conduce por primera vez un vehículo diferente al habitual (por ejemplo, un modelo distinto o alquilado), ¿qué precaución inicial debe tomar?',
    options: [
      'Ajustar asiento, espejos y volante antes de arrancar, ubicar mandos de luces/limpiaparabrisas y probar suavemente la sensibilidad de frenos y acelerador.',
      'Salir directamente a autopista a 100 km/h.',
      'Buscar el botón de luces mientras conduce en curva.',
      'No ajustar los espejos porque toma tiempo.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'Cada vehículo tiene distinta respuesta de freno, tamaño y ubicación de controles; familiarizarse estacionado evita distracciones peligrosas en marcha.',
    distractorRationale: {
      A: 'Dedicar dos minutos antes de arrancar previene errores operativos en tráfico.',
      B: 'Entrar rápido sin conocer la sensibilidad del freno es arriesgado.',
      C: 'Buscar mandos a ciegas en marcha aparta la vista de la vía.',
      D: 'Los espejos deben ajustarse exactamente a la estatura del conductor actual.'
    },
    legalReference: 'Manual de Manejo Defensivo VMT.'
  },
  {
    id: 'vmt-p133',
    category: 'psicologico',
    topic: 'Ética Vial — Solidaridad Ante Vehículo Varado Sin Abandono de Prudencia',
    question: 'Si desea ayudar a un conductor varado en carretera oscura, ¿cómo debe hacerlo protegiendo la seguridad de ambos?',
    statement: 'Si desea ayudar a un conductor varado en carretera oscura, ¿cómo debe hacerlo protegiendo la seguridad de ambos?',
    options: [
      'Detenerse en el carril rápido sin luces.',
      'Estacionarse bien adelante o fuera de la calzada con intermitentes, usar chaleco reflectivo si baja, o llamar al 911/asistencia vial si la zona es riesgosa.',
      'Empujar el auto con las manos en medio de una autopista oscura.',
      'Apagar todas las luces de ambos autos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La ayuda solidaria nunca debe exponer a quienes auxilian a ser atropellados en la calzada.',
    distractorRationale: {
      A: 'Detenerse en el carril provoca choques por alcance.',
      B: 'Seguridad de la escena primero, auxilio ordenado después.',
      C: 'Empujar en autopista oscura tiene altísima mortalidad.',
      D: 'La visibilidad luminosa es esencial.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p134',
    category: 'psicologico',
    topic: 'Actitud Preventiva — Cero Tolerancia a Distracciones por Mascotas o Niños en Cabina',
    question: 'Si un niño pequeño llora o deja caer un juguete en el asiento trasero mientras usted conduce en carretera, ¿qué debe hacer?',
    statement: 'Si un niño pequeño llora o deja caer un juguete en el asiento trasero mientras usted conduce en carretera, ¿qué debe hacer?',
    options: [
      'Darse vuelta hacia atrás estirando el brazo para recoger el juguete sin dejar de acelerar.',
      'Soltar el volante para consolarlo.',
      'Mantener la vista en la vía, tranquilizarlo con la voz y, si requiere atención física, orillarse y detenerse en un lugar seguro primero.',
      'Frenar de golpe en el carril.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Girar el torso hacia el asiento trasero hace que inconscientemente la mano gire el volante hacia un lado, sacando el vehículo de la vía.',
    distractorRationale: {
      A: 'Estirarse hacia atrás conduciendo provoca salidas de vía en menos de dos segundos.',
      B: 'Soltar el volante es altamente peligroso.',
      C: 'Detenerse fuera de la calzada atiende al menor sin poner en riesgo su vida.',
      D: 'Frenar brusco en carril activo provoca choque trasero.'
    },
    legalReference: 'Manual de Seguridad Vial VMT.'
  },
  {
    id: 'vmt-p135',
    category: 'psicologico',
    topic: 'Ética Vial — Rechazo Total a Conducir Tras Desvelo Extremo',
    question: 'Reconocer humildemente que se está demasiado cansado para conducir y optar por dormir o tomar transporte seguro demuestra:',
    statement: 'Reconocer humildemente que se está demasiado cansado para conducir y optar por dormir o tomar transporte seguro demuestra:',
    options: [
      'Incapacidad permanente.',
      'Cobardía.',
      'Irresponsabilidad.',
      'Gran madurez psicológica, ética preventiva y respeto por la vida propia y ajena.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Saber decir "hoy no estoy en condiciones de manejar" es una de las decisiones más valientes y responsables de un buen conductor.',
    distractorRationale: {
      A: 'Es una decisión temporal sabia frente al cansancio agudo.',
      B: 'Proteger vidas demuestra criterio sólido, nunca cobardía.',
      C: 'Irresponsable sería manejar cabeceando.',
      D: 'La autolimitación responsable salva vidas.'
    },
    legalReference: 'Evaluación Psicológica de Aptitud Vial VMT.'
  },
  // ==========================================================================
  // EVALUACIÓN PSICOMÉTRICA ANTE ORGANISMO EVALUADOR AUTORIZADO
  // ==========================================================================
  {
    id: 'vmt-p136',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Finalidad del Examen Ante Organismo Evaluador',
    question: '¿Cuál es el objetivo principal del examen psicológico y psicométrico aplicado por el organismo evaluador autorizado antes de emitir una licencia de conducir?',
    statement: '¿Cuál es el objetivo principal del examen psicológico y psicométrico aplicado por el organismo evaluador autorizado antes de emitir una licencia de conducir?',
    options: [
      'Verificar que el aspirante posee estabilidad emocional, atención, coordinación visomotora, tiempo de reacción y control de impulsos aptos para conducir sin peligro.',
      'Medir conocimientos avanzados de cálculo diferencial.',
      'Evaluar únicamente la fuerza física para levantar llantas.',
      'Cobrar un trámite sin finalidad técnica.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La evaluación psicométrica y psicológica filtra alteraciones graves de atención, coordinación o agresividad antes de otorgar habilitación vial.',
    distractorRationale: {
      A: 'Evalúa las funciones cognitivas, perceptivas y emocionales directamente ligadas al manejo seguro.',
      B: 'No es una prueba matemática universitaria.',
      C: 'No mide fuerza muscular bruta.',
      D: 'Es un requisito técnico obligatorio establecido por el D.E. 61.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155.'
  },
  {
    id: 'vmt-p137',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Tiempo de Reacción Simple y Discriminativa',
    question: 'En las pruebas psicométricas de reacción ante estímulos luminosos (verde/rojo) y acústicos, ¿qué capacidad clave del conductor se mide?',
    statement: 'En las pruebas psicométricas de reacción ante estímulos luminosos (verde/rojo) y acústicos, ¿qué capacidad clave del conductor se mide?',
    options: [
      'La velocidad para escribir en el celular.',
      'La rapidez y precisión con que el sistema nervioso percibe un peligro repentino y ejecuta la respuesta motora correcta (frenar o abstenerse).',
      'La capacidad de memorizar placas.',
      'El nivel de fuerza en el brazo izquierdo.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Un tiempo de reacción excesivamente lento o respuestas impulsivas erróneas ante luz roja indican alto riesgo de colisión en intersecciones.',
    distractorRationale: {
      A: 'No evalúa uso de teléfonos.',
      B: 'La discriminación rápida entre estímulos relevantes y distractores es vital en la conducción.',
      C: 'No es una prueba de memoria de placas.',
      D: 'Mide velocidad de procesamiento y coordinación pie-ojo.'
    },
    legalReference: 'Protocolo de Evaluación Psicométrica Organismo Evaluador Autorizado / VMT.'
  },
  {
    id: 'vmt-p138',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Atención Concentrada y Sostenida',
    question: '¿Por qué las baterías psicométricas evalúan la atención sostenida mediante tareas repetitivas de búsqueda o seguimiento visual?',
    statement: '¿Por qué las baterías psicométricas evalúan la atención sostenida mediante tareas repetitivas de búsqueda o seguimiento visual?',
    options: [
      'Para aburrir al aspirante sin motivo.',
      'Para medir la memoria musical.',
      'Porque conducir exige mantener vigilancia constante sin distraerse ni cometer errores durante períodos prolongados y entornos monótonos.',
      'Para evaluar caligrafía.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La conducción en carretera requiere sostener la atención durante decenas de minutos sin perder señales ni salidas de carril.',
    distractorRationale: {
      A: 'Simula la exigencia real de vigilancia continua al volante.',
      B: 'No evalúa audición musical.',
      C: 'Detectar déficits severos de atención sostenida previene siniestros por distracción.',
      D: 'No es una prueba grafológica.'
    },
    legalReference: 'Protocolo Psicométrico VMT.'
  },
  {
    id: 'vmt-p139',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Coordinación Bimanual y Visomotora',
    question: '¿Qué evalúa la prueba psicométrica de coordinación bimanual (seguimiento simultáneo de dos trayectorias con ambas manos)?',
    statement: '¿Qué evalúa la prueba psicométrica de coordinación bimanual (seguimiento simultáneo de dos trayectorias con ambas manos)?',
    options: [
      'La capacidad de tocar un instrumento musical.',
      'La velocidad para escribir a máquina.',
      'El conocimiento de señales SIECA.',
      'La coordinación ojo-mano-pie necesaria para controlar dirección, cambios y pedales de forma simultánea y fluida.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Conducir exige coordinar simultáneamente dos manos (volante y palanca/mandos) y los pies (pedales) guiados por la vista.',
    distractorRationale: {
      A: 'No guarda relación con música.',
      B: 'No mide mecanografía.',
      C: 'Las señales se evalúan en el examen teórico.',
      D: 'La disociación motora coordinada es esencial para maniobrar con precisión.'
    },
    legalReference: 'Protocolo Psicométrico Organismo Evaluador Autorizado / VMT.'
  },
  {
    id: 'vmt-p140',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Percepción de Velocidad y Anticipación',
    question: 'En las pruebas psicométricas donde un punto móvil desaparece tras una pantalla y debe estimarse cuándo llega a un destino, ¿qué habilidad vial se evalúa?',
    statement: 'En las pruebas psicométricas donde un punto móvil desaparece tras una pantalla y debe estimarse cuándo llega a un destino, ¿qué habilidad vial se evalúa?',
    options: [
      'La estimación espacio-temporal de velocidades y trayectorias (clave para calcular si da tiempo de cruzar o rebasar).',
      'La capacidad de adivinar el futuro por azar.',
      'La fuerza visual de cerca.',
      'El conocimiento del Código Penal.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La anticipación de movimiento permite juzgar correctamente la velocidad de otros vehículos antes de incorporarse a una vía o iniciar un rebase.',
    distractorRationale: {
      A: 'Calcular tiempos de llegada de vehículos que se aproximan previene choques en cruces.',
      B: 'Se basa en percepción cinemática real, no en azar.',
      C: 'La agudeza visual se mide en el optómetro del examen visual.',
      D: 'El marco legal pertenece al examen teórico.'
    },
    legalReference: 'Protocolo Psicométrico VMT.'
  },
  {
    id: 'vmt-p141',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Atención Dividida',
    question: '¿Qué significa la "atención dividida" evaluada en las pruebas psicológicas de conducción?',
    statement: '¿Qué significa la "atención dividida" evaluada en las pruebas psicológicas de conducción?',
    options: [
      'Conducir mientras se lee un libro y se manda mensajes.',
      'La capacidad de supervisar simultáneamente múltiples fuentes relevantes de la vía (carril frontal, espejos, semáforos y peatones) sin colapsar.',
      'Dividir el vehículo en dos partes.',
      'Mirar únicamente un punto fijo sin mover los ojos.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'A diferencia de las distracciones externas (celular), la atención dividida vial distribuye el foco entre estímulos relevantes del tránsito.',
    distractorRationale: {
      A: 'Leer o textear introduce tareas ajenas incompatibles con conducir.',
      B: 'Atender simultáneamente señales, peatones y flujo lateral evita sorpresas.',
      C: 'Es un concepto cognitivo, no mecánico.',
      D: 'La fijación rígida ("visión de túnel") es peligrosa en conducción.'
    },
    legalReference: 'Manual de Psicología del Tránsito VMT.'
  },
  {
    id: 'vmt-p142',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Agudeza Visual, Campimetría y Visión Cromática',
    question: 'Además de la lectura de letras (agudeza visual), ¿qué otras funciones evalúa el examen visual ante el organismo evaluador autorizado?',
    statement: 'Además de la lectura de letras (agudeza visual), ¿qué otras funciones evalúa el examen visual ante el organismo evaluador autorizado?',
    options: [
      'Únicamente el color de los ojos.',
      'Solo si usa lentes de sol.',
      'Visión periférica (campimetría), percepción de profundidad, visión cromática (colores de semáforo) y resistencia al encandilamiento.',
      'Ninguna otra función.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Detectar peatones laterales requiere campo visual amplio; distinguir rojo/verde del semáforo requiere visión cromática funcional.',
    distractorRationale: {
      A: 'El color del iris no influye en la aptitud vial.',
      B: 'Las gafas de sol no forman parte de la evaluación clínica.',
      C: 'La evaluación visual integral garantiza detección temprana de peligros en 180°.',
      D: 'La agudeza central sola es insuficiente para conducir seguro.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155.'
  },
  {
    id: 'vmt-p143',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Sinceridad en Cuestionarios de Personalidad',
    question: 'En los cuestionarios psicológicos de personalidad vial, ¿por qué conviene responder con total honestidad en lugar de intentar "adivinar respuestas falsas"?',
    statement: 'En los cuestionarios psicológicos de personalidad vial, ¿por qué conviene responder con total honestidad en lugar de intentar "adivinar respuestas falsas"?',
    options: [
      'Porque las pruebas no tienen escalas de control.',
      'Para terminar en diez segundos.',
      'No importa responder al azar.',
      'Porque los instrumentos psicométricos incluyen escalas de deseabilidad social/consistencia que detectan respuestas simuladas o contradictorias.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'Responder con sinceridad y reflexión permite una evaluación válida y fomenta la autoconciencia real sobre áreas de mejora emocional.',
    distractorRationale: {
      A: 'Los tests estandarizados sí cuentan con escalas de validez y consistencia.',
      B: 'Responder apresuradamente genera contradicciones detectables.',
      C: 'Responder al azar invalida la prueba.',
      D: 'La transparencia facilita un diagnóstico psicológico confiable.'
    },
    legalReference: 'Protocolo de Evaluación Psicológica Organismo Evaluador Autorizado.'
  },
  {
    id: 'vmt-p144',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Condiciones Óptimas Para Presentarse al Examen',
    question: '¿Cómo debe presentarse un aspirante el día de su evaluación psicométrica ante el organismo evaluador autorizado?',
    statement: '¿Cómo debe presentarse un aspirante el día de su evaluación psicométrica ante el organismo evaluador autorizado?',
    options: [
      'Bien descansado, sin haber ingerido alcohol ni sedantes, y portando sus lentes correctivos si los utiliza.',
      'Trasnochado y con bebidas energéticas.',
      'Sin sus lentes aunque tenga miopía.',
      'Bajo efectos de tranquilizantes fuertes.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'El desvelo o la falta de lentes alteran artificialmente los tiempos de reacción y coordinación motora durante la prueba.',
    distractorRationale: {
      A: 'El descanso adecuado y corrección óptica permiten rendir al máximo nivel real.',
      B: 'La fatiga enlentece los reflejos psicomotores.',
      C: 'Sin lentes puede reprobar inmediatamente las pruebas visuales y perceptivas.',
      D: 'Los sedantes deterioran la coordinación y tiempos de respuesta.'
    },
    legalReference: 'Recomendaciones Oficiales Organismo Evaluador Autorizado / VMT.'
  },
  {
    id: 'vmt-p145',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Control de Nerviosismo Ante la Prueba Práctica',
    question: 'Si siente ansiedad moderada antes de iniciar el examen práctico o psicométrico, ¿qué técnica fisiológica simple ayuda a estabilizar el pulso y la concentración?',
    statement: 'Si siente ansiedad moderada antes de iniciar el examen práctico o psicométrico, ¿qué técnica fisiológica simple ayuda a estabilizar el pulso y la concentración?',
    options: [
      'Contener la respiración lo más posible.',
      'Realizar respiraciones diafragmáticas lentas (inhalar 4 segundos, exhalar 6 segundos) y enfocarse paso a paso en cada instrucción.',
      'Tomar tres tazas de café muy cargado.',
      'Discutir con el evaluador.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'La exhalación lenta activa el sistema nervioso parasimpático, reduciendo el temblor motor y clarificando la atención.',
    distractorRationale: {
      A: 'Contener el aire aumenta la sensación de ahogo y ansiedad.',
      B: 'La respiración controlada mejora la precisión fina en volante y pedales.',
      C: 'El exceso de cafeína incrementa el nerviosismo y temblor.',
      D: 'Mantener actitud respetuosa y serena favorece el desempeño.'
    },
    legalReference: 'Manual de Psicología Aplicada a la Conducción VMT.'
  },
  {
    id: 'vmt-p146',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Rigor Mayor en Licencias Profesionales (Pesada / Pesada T)',
    question: '¿Por qué los parámetros de evaluación psicológica y psicométrica son más exigentes para aspirantes a Licencia Pesada y Pesada T?',
    statement: '¿Por qué los parámetros de evaluación psicológica y psicométrica son más exigentes para aspirantes a Licencia Pesada y Pesada T?',
    options: [
      'Únicamente por cobrar más.',
      'Porque los camiones tienen menos ruedas.',
      'Por la mayor exigencia de estabilidad emocional, resistencia a la fatiga, precisión espacial y responsabilidad sobre vidas y cargas de gran tonelaje.',
      'No son más exigentes; son idénticos.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'Operar autobuses de 50 pasajeros o cabezales de 40 toneladas durante jornadas prolongadas exige perfil psicomotor y emocional superior.',
    distractorRationale: {
      A: 'Responde estrictamente a gestión de riesgo vial profesional.',
      B: 'Los vehículos articulados tienen muchas más ruedas y complejidad.',
      C: 'La responsabilidad profesional sobre terceros exige estándares más rigurosos.',
      D: 'La normativa distingue umbrales de aptitud según categoría.'
    },
    legalReference: 'Reglamento General de Tránsito (D.E. 61) Art. 155 y D.E. 23.'
  },
  {
    id: 'vmt-p147',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Estabilidad Emocional Frente a Críticas',
    question: 'Durante el examen práctico, el evaluador le señala una corrección o error cometido. ¿Qué reacción demuestra perfil psicológico apto?',
    statement: 'Durante el examen práctico, el evaluador le señala una corrección o error cometido. ¿Qué reacción demuestra perfil psicológico apto?',
    options: [
      'Enojarse, acelerar bruscamente o culpar al vehículo.',
      'Detenerse en medio de la calle a llorar.',
      'Ignorar por completo la indicación.',
      'Escuchar con serenidad, agradecer la observación, corregir la maniobra con calma y mantener el control del vehículo.'
    ],
    correctAnswer: 3,
    correctKey: 'D',
    explanation: 'La tolerancia a la corrección y capacidad de reenfocar la atención sin desbordarse emocionalmente reflejan madurez vial.',
    distractorRationale: {
      A: 'Perder la compostura ante una observación indica baja tolerancia a la frustración.',
      B: 'Parar en medio de la calzada compromete la seguridad.',
      C: 'Desatender instrucciones muestra rigidez o rebeldía.',
      D: 'Aprender de la retroalimentación manteniendo la calma es cualidad clave.'
    },
    legalReference: 'Protocolo de Evaluación Integral VMT.'
  },
  {
    id: 'vmt-p148',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Detección de Daltons / Discromatopsia',
    question: 'Si una persona tiene dificultad congénita para distinguir los colores rojo y verde (daltonismo), ¿qué adaptación perceptiva o evaluación requiere?',
    statement: 'Si una persona tiene dificultad congénita para distinguir los colores rojo y verde (daltonismo), ¿qué adaptación perceptiva o evaluación requiere?',
    options: [
      'Evaluación optométrica oficial; en caso de aptitud condicionada, debe compensar identificando la posición fija de las luces del semáforo (rojo arriba, verde abajo).',
      'No puede distinguir nunca ningún semáforo.',
      'Debe cruzar siempre sin mirar semáforos.',
      'No existe ninguna prueba de colores.'
    ],
    correctAnswer: 0,
    correctKey: 'A',
    explanation: 'La estandarización internacional ubica siempre el rojo arriba (o izquierda en horizontales) y el verde abajo, ayudando junto con la valoración clínica.',
    distractorRationale: {
      A: 'La valoración médica determina el grado y compatibilidad segura con la conducción.',
      B: 'Muchos casos leves son compatibles tras evaluación oficial y conocimiento posicional.',
      C: 'Irresponsable y peligroso.',
      D: 'Las láminas de Ishihara o equivalentes sí se aplican en el examen visual.'
    },
    legalReference: 'Manual de Evaluación Visual VMT / SIECA.'
  },
  {
    id: 'vmt-p149',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Coordinación Ante Estímulos Múltiples',
    question: '¿Qué demuestra un aspirante que en la prueba psicométrica logra mantener un ritmo constante sin errores cuando aumentan los estímulos simultáneos?',
    statement: '¿Qué demuestra un aspirante que en la prueba psicométrica logra mantener un ritmo constante sin errores cuando aumentan los estímulos simultáneos?',
    options: [
      'Rigidez muscular.',
      'Buena capacidad de procesamiento bajo carga cognitiva, equivalente a manejar en intersecciones complejas sin bloquearse.',
      'Impulsividad extrema.',
      'Fatiga crónica.'
    ],
    correctAnswer: 1,
    correctKey: 'B',
    explanation: 'Las intersecciones urbanas exigen procesar señales, peatones, motos y semáforos a la vez sin entrar en pánico ni cometer errores motores.',
    distractorRationale: {
      A: 'La fluidez bajo carga demuestra flexibilidad, no rigidez.',
      B: 'Procesar múltiples variables con precisión predice desempeño seguro en tráfico real.',
      C: 'La impulsividad genera errores prematuros, no constancia.',
      D: 'La fatiga provoca caídas de rendimiento.'
    },
    legalReference: 'Protocolo Psicométrico Organismo Evaluador Autorizado.'
  },
  {
    id: 'vmt-p150',
    category: 'psicologico',
    topic: 'Evaluación Psicométrica — Compromiso Permanente Tras Aprobar',
    question: 'Una vez aprobados los exámenes teórico, psicológico y práctico ante el organismo evaluador autorizado, ¿cuál es el compromiso ético permanente del nuevo conductor?',
    statement: 'Una vez aprobados los exámenes teórico, psicológico y práctico ante el organismo evaluador autorizado, ¿cuál es el compromiso ético permanente del nuevo conductor?',
    options: [
      'Olvidar lo estudiado porque ya tiene el plástico.',
      'Conducir más rápido cada mes.',
      'Mantener en la práctica diaria el respeto a la ley, la Cero Tolerancia, el autocontrol emocional y la protección de la vida en cada kilómetro recorrido.',
      'Prestar su licencia a otros.'
    ],
    correctAnswer: 2,
    correctKey: 'C',
    explanation: 'La evaluación oficial es el punto de partida; la verdadera seguridad vial se construye cada día con decisiones prudentes y humanas al volante.',
    distractorRationale: {
      A: 'La teoría vial cobra sentido real únicamente al aplicarla en la calle.',
      B: 'La experiencia debe traer mayor prudencia, nunca mayor temeridad.',
      C: 'El compromiso ético continuo honra el valor supremo de la vida humana.',
      D: 'La licencia es personal e intransferible.'
    },
    legalReference: 'Ley de Transporte Terrestre (D.L. 477) y Política Nacional de Seguridad Vial VMT.'
  }
];
