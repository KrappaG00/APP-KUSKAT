/**
 * Catálogo Oficial de Señalización Vial de El Salvador
 * Basado en el Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito (SIECA/VMT).
 * 27 Señales oficiales (Reglamentarias, Preventivas, Informativas) con códigos SIECA y vectores SVG optimizados.
 */

import { RoadSign } from './types';

export const OFFICIAL_ROAD_SIGNS: RoadSign[] = [
  // ==========================================================================
  // 1. SEÑALES REGLAMENTARIAS (SERIE R - MANDATOS Y PROHIBICIONES)
  // ==========================================================================
  {
    id: 'sign-r1',
    name: 'Alto (Stop)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-1',
    code: 'R-1',
    meaning: 'Obligación imperativa de detener por completo la marcha del vehículo antes de la línea de parada o cruce peatonal y ceder el paso a todo el tráfico transversal.',
    description: 'Señal octogonal de color rojo con orla y letras blancas. Constituye el mandato de detención más estricto del código vial; se ubica en intersecciones de alta conflictividad.',
    rule: 'Falta muy grave ignorarla; exige la detención total de las cuatro ruedas y verificación visual activa antes de reanudar la marcha.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" stroke-width="4" />
      <text x="50" y="58" fill="#ffffff" font-size="22" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">ALTO</text>
    </svg>`
  },
  {
    id: 'sign-r2',
    name: 'Ceda el Paso',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-2',
    code: 'R-2',
    meaning: 'Obligación de reducir la velocidad y detenerse si es necesario para permitir el paso preferente de los vehículos que ya circulan por la vía prioritaria o redondel.',
    description: 'Triángulo equilátero invertido con fondo blanco y orla perimetral roja ancha. Señaliza accesos a rotondas, incorporaciones y cruces preferenciales.',
    rule: 'Prioridad absoluta para los vehículos que circulan dentro de la vía principal o rotonda; quien se aproxima debe esperar un espacio seguro.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,92 8,15 92,15" fill="#ffffff" stroke="#dc2626" stroke-width="12" />
      <polygon points="50,75 22,25 78,25" fill="#ffffff" />
      <text x="50" y="38" fill="#dc2626" font-size="12" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">CEDA EL</text>
      <text x="50" y="52" fill="#dc2626" font-size="12" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">PASO</text>
    </svg>`
  },
  {
    id: 'sign-r3',
    name: 'Velocidad Máxima Permitida (60 km/h)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-30',
    code: 'R-30',
    meaning: 'Notifica el límite de velocidad superior legal al que se puede circular en el tramo señalizado bajo condiciones climáticas y de calzada óptimas.',
    description: 'Disco circular de fondo blanco con orla roja reflectiva y numerales negros en tipografía vial normalizada.',
    rule: 'Exceder este límite acarrea esquelas de gravedad progresiva y multiplica exponencialmente la distancia de frenado y energía de impacto.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <text x="50" y="60" fill="#111827" font-size="34" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">60</text>
      <text x="50" y="75" fill="#111827" font-size="10" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">KM/H</text>
    </svg>`
  },
  {
    id: 'sign-r4',
    name: 'Prohibido Estacionar',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-8',
    code: 'R-8',
    meaning: 'Prohibición tajante de dejar estacionado el vehículo en la vía señalizada durante el horario y condiciones indicadas en la placa complementaria.',
    description: 'Disco circular blanco con orla roja, letra "E" mayúscula negra centrada y una franja diagonal roja descendente que la cruza a 45 grados.',
    rule: 'Sujeto a remoción forzosa mediante servicio de grúa policial en ejes preferenciales de San Salvador y principales cabeceras.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <text x="50" y="68" fill="#111827" font-size="52" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">E</text>
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r5',
    name: 'Sentido de Circulación Obligatorio',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-3',
    code: 'R-3',
    meaning: 'Indica la dirección y sentido único por el cual los vehículos están obligados a transitar en la vía o carril específico.',
    description: 'Placa circular o rectangular de fondo azul o blanco con una flecha recta blanca apuntando en el sentido mandatorio del flujo.',
    rule: 'Ingresar en sentido contrario al indicado por la flecha tipifica la infracción gravísima de invasión de carril en sentido opuesto.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#1d4ed8" stroke="#ffffff" stroke-width="4" />
      <line x1="50" y1="75" x2="50" y2="35" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
      <polygon points="50,18 32,38 68,38" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-r6',
    name: 'Prohibido Girar a la Izquierda',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-7',
    code: 'R-7',
    meaning: 'Prohíbe a los conductores efectuar cualquier viraje hacia la izquierda en la intersección señalizada.',
    description: 'Disco blanco con orla roja y pictograma de flecha curvada a la izquierda tachada por una barra diagonal roja a 45 grados.',
    rule: 'Vigente en vías de alto flujo donde el giro a la izquierda genera cuellos de botella o alto riesgo de choque angular contra el tráfico opuesto.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <path d="M 62,65 L 62,45 Q 62,35 48,35 L 35,35 M 42,27 L 30,35 L 42,43" fill="none" stroke="#111827" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r7',
    name: 'Prohibido Adelantar / Rebasar',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-10',
    code: 'R-10',
    meaning: 'Prohíbe a todos los automotores rebasar a otros vehículos que circulan en su mismo sentido a lo largo del tramo delimitado.',
    description: 'Disco blanco con orla roja que muestra dos automóviles frontales paralelos: el automóvil izquierdo en color rojo simbolizando la maniobra vedada.',
    rule: 'Señal de cumplimiento estricto en puentes angostos, túneles, aproximaciones a curvas y tramos con visibilidad reducida.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <!-- Auto negro derecho -->
      <rect x="52" y="42" width="22" height="26" rx="4" fill="#111827" />
      <rect x="56" y="46" width="14" height="8" rx="2" fill="#ffffff" />
      <!-- Auto rojo izquierdo rebasando -->
      <rect x="26" y="36" width="22" height="26" rx="4" fill="#dc2626" />
      <rect x="30" y="40" width="14" height="8" rx="2" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-r8',
    name: 'Prohibido el Paso de Peatones',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-16',
    code: 'R-16',
    meaning: 'Notifica a los peatones la prohibición absoluta de cruzar o caminar por la calzada o autopista en el sector señalizado.',
    description: 'Disco circular blanco con orla roja y la silueta negra de una persona caminando atravesada por una franja diagonal roja.',
    rule: 'Instalada en vías expresas de alta velocidad (como Bulevar Monseñor Romero) donde el cruce a nivel representa riesgo mortal.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <circle cx="50" cy="30" r="6" fill="#111827" />
      <path d="M 45,40 L 55,40 L 52,62 L 58,74 M 48,62 L 42,74 M 43,48 L 57,48" stroke="#111827" stroke-width="5" stroke-linecap="round" fill="none" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r9',
    name: 'Retén de Tránsito / Control Aduanero',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-24',
    code: 'R-24',
    meaning: 'Obliga a todo conductor a detener completamente su marcha en el punto de control policial, aduanero o fiscal del VMT.',
    description: 'Disco blanco con orla roja y una barra horizontal negra gruesa que contiene el texto del control (ADUANA, RETÉN o POLICÍA).',
    rule: 'Ignorar o evadir el punto de detención faculta la persecución policial y tipifica presunto desacato y resistencia a la autoridad.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <rect x="18" y="42" width="64" height="16" fill="#111827" rx="2" />
      <text x="50" y="54" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">ADUANA</text>
    </svg>`
  },

  // ==========================================================================
  // 2. SEÑALES PREVENTIVAS (SERIE P - ADVERTENCIA DE RIESGO)
  // ==========================================================================
  {
    id: 'sign-p1',
    name: 'Curva Peligrosa a la Derecha',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-1',
    code: 'P-1',
    meaning: 'Advierte sobre la proximidad de una curva cerrada y de radio reducido hacia la derecha que exige disminuir anticipadamente la velocidad.',
    description: 'Rombo amarillo con orla negra y pictograma de flecha negra que describe una curva en ángulo cerrado a la derecha.',
    rule: 'Frenar y desacelerar antes de entrar al trazado de la curva; jamás frenar bruscamente en el ápice de la curva para no perder tracción.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <path d="M 45,70 L 45,45 Q 45,35 60,35 L 68,35 M 62,28 L 72,35 L 62,42" fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  },
  {
    id: 'sign-p2',
    name: 'Curva Pronunciada a la Izquierda',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-2',
    code: 'P-2',
    meaning: 'Alerta sobre la inminencia de una curva pronunciada hacia la izquierda que requiere reducir la velocidad para contrarrestar la fuerza centrífuga.',
    description: 'Rombo amarillo con flecha negra curvándose hacia el costado izquierdo de la calzada.',
    rule: 'Mantener la posición dentro del carril propio y abstenerse totalmente de rebasar a otros vehículos en todo el tramo curvo.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <path d="M 55,70 L 55,45 Q 55,35 40,35 L 32,35 M 38,28 L 28,35 L 38,42" fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  },
  {
    id: 'sign-p3',
    name: 'Zona Escolar / Cruce de Escolares',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-15',
    code: 'P-15',
    meaning: 'Advierte la cercanía inmediata de un centro educativo, escuela, guardería o paso peatonal frecuente de niños y jóvenes.',
    description: 'Rombo amarillo reflectivo que muestra dos siluetas humanas (un adulto y un escolar con cartera o mochila al hombro).',
    rule: 'Obligación estricta de reducir la marcha a un máximo de 20 km/h y estar preparado para detenerse por completo en cualquier instante.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <circle cx="44" cy="34" r="5" fill="#111827" />
      <path d="M 38,62 L 44,45 L 48,45 L 52,62 M 40,48 L 50,48" stroke="#111827" stroke-width="4" stroke-linecap="round" />
      <circle cx="60" cy="39" r="4" fill="#111827" />
      <path d="M 56,64 L 60,50 L 64,50 L 66,64" stroke="#111827" stroke-width="3.5" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p4',
    name: 'Reductor Físico de Velocidad (Túmulo)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-22',
    code: 'P-22',
    meaning: 'Advierte sobre la presencia de un resalto físico transversal en la superficie de la calzada diseñado para forzar la reducción de la velocidad.',
    description: 'Rombo amarillo con el perfil arqueado de un montículo o resalte transversal en color negro sobre el pavimento.',
    rule: 'Disminuir a velocidad precautoria de paso suave (10 a 20 km/h) para prevenir daños en la suspensión y pérdida de control direccional.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <path d="M 28,58 L 40,58 Q 50,40 60,58 L 72,58" fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p5',
    name: 'Pendiente Peligrosa (Descenso Pronunciado)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-4',
    code: 'P-4',
    meaning: 'Alerta sobre un tramo descendente prolongado con una inclinación vertical que puede provocar sobrecalentamiento y falla en los frenos mecánicos.',
    description: 'Rombo amarillo que muestra un camión o silueta de vehículo descendiendo por un plano inclinado con porcentaje de gradiente.',
    rule: 'Enganchar marcha baja para utilizar el freno de motor por compresión; prohibido descender en punto muerto o neutro.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <polygon points="30,68 70,38 70,68" fill="#111827" />
      <rect x="42" y="38" width="16" height="10" rx="2" fill="#111827" transform="rotate(-36 50 43)" />
    </svg>`
  },
  {
    id: 'sign-p6',
    name: 'Intersección de Vías en Cruz',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-8',
    code: 'P-8',
    meaning: 'Advierte sobre el cruce perpendicular directo de dos corrientes de tránsito en un mismo nivel geométrico.',
    description: 'Rombo amarillo con una cruz griega regular de color negro en el centro.',
    rule: 'Reducir la velocidad, agudizar la visión lateral a ambos lados y verificar las normas de preferencia de paso o semaforización próxima.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <line x1="50" y1="30" x2="50" y2="70" stroke="#111827" stroke-width="8" stroke-linecap="round" />
      <line x1="30" y1="50" x2="70" y2="50" stroke="#111827" stroke-width="8" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p7',
    name: 'Incorporación de Tránsito Lateral',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-10',
    code: 'P-10',
    meaning: 'Informa a los conductores que transitan por la vía principal sobre la incorporación próxima de vehículos provenientes de una rama o carril lateral.',
    description: 'Rombo amarillo con una flecha gruesa vertical principal y una flecha secundaria delgada que converge desde un costado.',
    rule: 'Facilitar la convergencia vehicular moderando la velocidad o cambiando al carril contiguo izquierdo si se encuentra despejado.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <line x1="48" y1="72" x2="48" y2="34" stroke="#111827" stroke-width="8" stroke-linecap="round" />
      <polygon points="48,24 38,36 58,36" fill="#111827" />
      <path d="M 68,66 L 56,52" stroke="#111827" stroke-width="6" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p8',
    name: 'Superficie Resbaladiza en Mojado',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-17',
    code: 'P-17',
    meaning: 'Advierte que el tramo de calzada presenta una pérdida súbita de coeficiente de fricción ante la presencia de agua, aceite o asfalto desgastado.',
    description: 'Rombo amarillo con la silueta de un automóvil de vista trasera y dos líneas sinuosas onduladas que representan huellas de derrape.',
    rule: 'Aumentar sustancialmente la distancia de seguridad con el vehículo delantero y evitar maniobras bruscas de frenado o dirección.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <rect x="40" y="32" width="20" height="14" rx="3" fill="#111827" />
      <path d="M 38,52 Q 44,58 38,64 Q 32,70 38,76 M 62,52 Q 56,58 62,64 Q 68,70 62,76" fill="none" stroke="#111827" stroke-width="4" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p9',
    name: 'Proximidad de Semáforo de Control',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-28',
    code: 'P-28',
    meaning: 'Advierte con suficiente anticipación sobre la presencia de una intersección regulada por un sistema de semáforos luminosos.',
    description: 'Rombo amarillo con el pictograma vertical de un semáforo que contiene los tres discos en color rojo, amarillo y verde.',
    rule: 'Prever posibles detenciones forzosas por cambio de fase semafórica y moderar la velocidad de aproximación.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="15" y="15" width="70" height="70" rx="8" fill="#facc15" stroke="#111827" stroke-width="4" transform="rotate(45 50 50)" />
      <rect x="42" y="30" width="16" height="40" rx="4" fill="#111827" />
      <circle cx="50" cy="38" r="4" fill="#dc2626" />
      <circle cx="50" cy="50" r="4" fill="#eab308" />
      <circle cx="50" cy="62" r="4" fill="#16a34a" />
    </svg>`
  },

  // ==========================================================================
  // 3. SEÑALES INFORMATIVAS (SERIE I - ORIENTACIÓN Y SERVICIOS)
  // ==========================================================================
  {
    id: 'sign-i1',
    name: 'Servicio Hospitalario / Emergencias',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-4',
    code: 'I-4',
    meaning: 'Informa sobre la proximidad de un hospital, clínica nacional o centro de atención médica de urgencias con servicio las 24 horas.',
    description: 'Placa rectangular azul con orla blanca y una cruz de color rojo sobre un recuadro blanco central.',
    rule: 'Tener precaución con la entrada y salida de ambulancias del SEM y mantener despejados los accesos hospitalarios.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <rect x="42" y="24" width="16" height="52" fill="#ffffff" />
      <rect x="24" y="42" width="52" height="16" fill="#ffffff" />
      <rect x="45" y="28" width="10" height="44" fill="#dc2626" />
      <rect x="28" y="45" width="44" height="10" fill="#dc2626" />
    </svg>`
  },
  {
    id: 'sign-i2',
    name: 'Estación de Servicio / Gasolinera',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-6',
    code: 'I-6',
    meaning: 'Orienta sobre la disponibilidad cercana de abastecimiento de combustibles (gasolina y diésel) y servicios automotrices complementarios.',
    description: 'Placa rectangular azul que ilustra el pictograma estilizado en blanco de una bomba despachadora de gasolina.',
    rule: 'Ubicadas en carreteras con 1 a 5 km de antelación para permitir la desaceleración segura y la incorporación al carril de servicio.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <rect x="26" y="28" width="30" height="46" rx="4" fill="#ffffff" />
      <rect x="31" y="34" width="20" height="14" rx="2" fill="#1d4ed8" />
      <path d="M 58,40 L 68,40 L 68,66 L 62,66" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-i3',
    name: 'Taller Mecánico / Auxilio Técnico',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-8',
    code: 'I-8',
    meaning: 'Indica la proximidad de un taller mecánico automotriz con capacidad para reparaciones mecánicas de emergencia y venta de repuestos.',
    description: 'Placa rectangular azul con el pictograma en blanco de una llave de tuercas colocada a 45 grados.',
    rule: 'Punto de auxilio clave para resolver fallas en el sistema de frenos, radiador, neumáticos o alternador durante trayectos carreteros.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <path d="M 32,68 L 56,44 M 64,36 C 68,32 74,32 76,36 C 78,40 76,46 72,50 L 66,44 L 60,50 L 66,56 C 62,60 56,62 52,60 C 48,58 48,52 52,48 L 28,72 L 24,68 L 48,44" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>`
  },
  {
    id: 'sign-i4',
    name: 'Estacionamiento Autorizado',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-14',
    code: 'I-14',
    meaning: 'Notifica que el área o bahía señalizada se encuentra legalmente habilitada para el parqueo y estacionamiento de automotores.',
    description: 'Placa cuadrada o rectangular de fondo azul con una gran letra "E" en color blanco sin barra de prohibición.',
    rule: 'Estacionar dentro de las líneas demarcadas sin invadir los espacios señalizados para personas con discapacidad motriz.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <text x="50" y="72" fill="#ffffff" font-size="62" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">E</text>
    </svg>`
  },
  {
    id: 'sign-i5',
    name: 'Parada de Transporte Colectivo (Autobús)',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-18',
    code: 'I-18',
    meaning: 'Señala el punto oficial y exclusivo habilitado para el abordaje y descenso de pasajeros del transporte colectivo.',
    description: 'Placa rectangular azul que muestra la silueta frontal o lateral de un autobús de pasajeros en color blanco.',
    rule: 'Prohibido el estacionamiento de vehículos particulares en las bahías de parada para no obligar a los buses a detenerse en medio carril.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <rect x="25" y="26" width="50" height="42" rx="6" fill="#ffffff" />
      <rect x="30" y="32" width="40" height="18" rx="2" fill="#1d4ed8" />
      <circle cx="36" cy="58" r="4" fill="#1d4ed8" />
      <circle cx="64" cy="58" r="4" fill="#1d4ed8" />
      <rect x="32" y="68" width="8" height="6" fill="#ffffff" />
      <rect x="60" y="68" width="8" height="6" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i6',
    name: 'Teléfono de Auxilio Vial (SOS)',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-20',
    code: 'I-20',
    meaning: 'Informa sobre la ubicación de un poste o cabina telefónica de emergencia conectada directamente con las centrales de auxilio vial del MOPT/PNC.',
    description: 'Placa rectangular azul con el pictograma de un auricular telefónico clásico y la leyenda SOS.',
    rule: 'Exclusivo para la comunicación de averías graves, siniestros de tránsito o situaciones de riesgo sobre la red vial nacional.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <path d="M 32,38 C 32,32 38,28 44,30 L 48,36 C 50,38 48,42 46,44 C 44,46 44,48 48,54 C 52,60 54,60 56,58 C 58,56 62,54 64,56 L 70,60 C 72,66 68,72 62,72 C 46,72 32,56 32,38 Z" fill="#ffffff" />
      <text x="50" y="86" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">S.O.S.</text>
    </svg>`
  },
  {
    id: 'sign-i7',
    name: 'Puesto de Socorro / Cruz Roja',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-10',
    code: 'I-10',
    meaning: 'Identifica una base operativa, puesto de socorro o clínica de atención de la Cruz Roja o Cruz Verde Salvadoreña.',
    description: 'Placa azul con un recuadro blanco que exhibe la cruz roja humanitaria centrada.',
    rule: 'Punto de referencia para solicitar personal paramédico, soporte vital inicial o traslado en ambulancia en tramos interurbanos.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <rect x="22" y="22" width="56" height="56" rx="4" fill="#ffffff" />
      <rect x="44" y="30" width="12" height="40" fill="#dc2626" />
      <rect x="30" y="44" width="40" height="12" fill="#dc2626" />
    </svg>`
  },
  {
    id: 'sign-i8',
    name: 'Atractivo Turístico / Sitio Arqueológico',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-25',
    code: 'I-25',
    meaning: 'Orienta y guía a los conductores hacia sitios de interés turístico, parques nacionales, volcanes o parques arqueológicos protegidos.',
    description: 'Placa rectangular de fondo marrón o azul que exhibe el pictograma de una estructura piramidal o monumento histórico.',
    rule: 'Forma parte de la señalización turística de la Ruta Maya y Ruta de Las Flores regulada por el Ministerio de Turismo y VMT.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#854d0e" stroke="#ffffff" stroke-width="3" />
      <polygon points="50,25 24,72 76,72" fill="#ffffff" />
      <polygon points="50,34 32,68 68,68" fill="#854d0e" />
      <rect x="44" y="52" width="12" height="16" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i9',
    name: 'Nomenclatura Vial y Destino Troncal',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-1',
    code: 'I-1',
    meaning: 'Guía al conductor a lo largo de autopistas y carreteras principales indicando nombres de ciudades, destinos próximos y kilometraje restante.',
    description: 'Cartel rectangular de fondo verde vial reflectivo con letras blancas y flechas de direccionamiento en carriles específicos.',
    rule: 'Facilita la selección anticipada de carriles antes de los distribuidores de tráfico e intercambiadores a desnivel.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="16" width="84" height="68" rx="8" fill="#15803d" stroke="#ffffff" stroke-width="3" />
      <text x="50" y="42" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">SAN SALVADOR</text>
      <text x="50" y="58" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">25 KM</text>
      <polygon points="50,64 42,72 58,72" fill="#ffffff" />
    </svg>`
  }
];
