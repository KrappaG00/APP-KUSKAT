/**
 * Catálogo Oficial de Señalización Vial de El Salvador
 * Basado en el Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito (SIECA/VMT)
 * y el Manual de Tránsito 2025.
 * Catálogo integral (Reglamentarias, Preventivas, Informativas, Obras y Señalización Horizontal) con códigos SIECA y vectores SVG optimizados.
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
  },

  // ==========================================================================
  // 4. SEÑALES ADICIONALES DE CARGA, OBRAS Y MANUAL 2025
  // ==========================================================================
  {
    id: 'sign-r10',
    name: 'Altura Máxima Permitida (4.10 m)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-20',
    code: 'R-20',
    meaning: 'Restringe la circulación a vehículos cuya altura total con carga no supere la medida indicada en metros antes de puentes, túneles o pasos a desnivel.',
    description: 'Disco circular blanco con orla roja, flechas verticales superior e inferior negras y la cota de altura en metros.',
    rule: 'Todo vehículo de carga o cama baja que exceda la altura indicada tiene prohibido el paso bajo riesgo de colisión estructural.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <polygon points="50,18 42,28 58,28" fill="#111827" />
      <polygon points="50,82 42,72 58,72" fill="#111827" />
      <text x="50" y="57" fill="#111827" font-size="20" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">4.10m</text>
    </svg>`
  },
  {
    id: 'sign-r11',
    name: 'Ancho Máximo Permitido (2.60 m)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-21',
    code: 'R-21',
    meaning: 'Establece el ancho máximo reglamentario (2.60 m en El Salvador según D.E. 23) permitido para circular sin escolta ni permiso especial en la vía.',
    description: 'Disco circular blanco con orla roja, triángulos laterales apuntando hacia el centro y la medida de ancho en metros.',
    rule: 'Cargas indivisibles que superen 2.60 m de ancho requieren permiso especial del VMT y dos unidades piloto escolta (Art. 20 D.E. 23).',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <polygon points="16,50 26,42 26,58" fill="#111827" />
      <polygon points="84,50 74,42 74,58" fill="#111827" />
      <text x="50" y="56" fill="#111827" font-size="18" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">2.60m</text>
    </svg>`
  },
  {
    id: 'sign-r12',
    name: 'Peso Máximo Permitido por Vehículo (12 t)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-22',
    code: 'R-22',
    meaning: 'Prohíbe el tránsito de vehículos cuyo peso bruto total supere el tonelaje indicado, frecuente en puentes y distritos centrales urbanos.',
    description: 'Disco circular blanco con orla roja y cifra de tonelaje máximo permitido en color negro.',
    rule: 'En distritos centrales rige restricción de 12 t (salvo cisternas de agua potable hasta 21.5 t); puentes con >90 t exigen velocidad <= 10 km/h.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <text x="50" y="56" fill="#111827" font-size="26" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">12 t</text>
    </svg>`
  },
  {
    id: 'sign-r13',
    name: 'Camiones y Carga Pesada por Carril Derecho',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-33',
    code: 'R-33',
    meaning: 'Obliga a los vehículos de carga pesada, cabezales y transporte lento a circular exclusivamente por el carril derecho de la calzada.',
    description: 'Placa rectangular blanca con silueta de camión pesado y flecha direccional hacia el carril derecho.',
    rule: 'Los vehículos pesados deben conservar el carril derecho para permitir el rebase seguro por la izquierda en autopistas y pendientes.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="12" y="10" width="76" height="80" rx="8" fill="#ffffff" stroke="#111827" stroke-width="4" />
      <rect x="24" y="28" width="36" height="24" rx="3" fill="#111827" />
      <rect x="60" y="36" width="16" height="16" rx="2" fill="#111827" />
      <circle cx="34" cy="56" r="5" fill="#111827" />
      <circle cx="66" cy="56" r="5" fill="#111827" />
      <path d="M 28,72 L 64,72" stroke="#dc2626" stroke-width="5" />
      <polygon points="74,72 62,64 62,80" fill="#dc2626" />
    </svg>`
  },
  {
    id: 'sign-r14',
    name: 'Inspección Oficial / Aduanas / Báscula VMT',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-26',
    code: 'R-26',
    meaning: 'Ordena la detención obligatoria de vehículos de transporte y carga en puestos de control aduanero, fitosanitario o estaciones de pesaje VMT.',
    description: 'Disco circular blanco con orla roja, barra horizontal negra central y leyenda de control oficial.',
    rule: 'Evadir una estación de pesaje o control oficial constituye infracción grave al D.E. 23 y activa persecución policial.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <rect x="20" y="45" width="60" height="10" fill="#111827" />
      <text x="50" y="36" fill="#111827" font-size="11" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">ADUANA</text>
      <text x="50" y="72" fill="#111827" font-size="11" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">CONTROL</text>
    </svg>`
  },
  {
    id: 'sign-p10',
    name: 'Zona de Construcción y Obras (Abanderado)',
    category: 'obras',
    type: 'obras',
    siecaCode: 'P-O1',
    code: 'P-O1',
    meaning: 'Advierte la proximidad de trabajadores viales y personal abanderado regulando el tránsito temporalmente en zonas de obra.',
    description: 'Rombo de color naranja reflectivo con el pictograma negro de un operario sosteniendo bandera o paleta de Alto/Siga.',
    rule: 'Las indicaciones del abanderado en zonas de obra tienen carácter obligatorio y prevalecen sobre la señalización ordinaria.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#f97316" stroke="#111827" stroke-width="4" />
      <circle cx="48" cy="30" r="7" fill="#111827" />
      <line x1="48" y1="38" x2="48" y2="62" stroke="#111827" stroke-width="6" stroke-linecap="round" />
      <line x1="48" y1="45" x2="68" y2="38" stroke="#111827" stroke-width="4" stroke-linecap="round" />
      <polygon points="68,38 78,32 78,46" fill="#dc2626" />
      <line x1="48" y1="62" x2="38" y2="78" stroke="#111827" stroke-width="5" stroke-linecap="round" />
      <line x1="48" y1="62" x2="58" y2="78" stroke="#111827" stroke-width="5" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p11',
    name: 'Barricadas y Conos de Canalización de Obras',
    category: 'obras',
    type: 'obras',
    siecaCode: 'P-O2',
    code: 'P-O2',
    meaning: 'Delimita cierres de carril, desvíos temporales o excavaciones mediante conos reflectivos y barricadas con franjas diagonales.',
    description: 'Dispositivos naranja y blanco reflectivos de alta visibilidad dispuestos para canalizar el flujo vehicular alrededor de obras.',
    rule: 'Reducir la velocidad gradualmente, respetar el estrechamiento y jamás invadir el área delimitada por conos o barricadas.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="12" y="18" width="76" height="22" rx="3" fill="#f97316" stroke="#111827" stroke-width="3" />
      <polygon points="22,18 36,18 26,40 12,40" fill="#ffffff" />
      <polygon points="52,18 66,18 56,40 42,40" fill="#ffffff" />
      <polygon points="50,48 36,84 64,84" fill="#f97316" stroke="#111827" stroke-width="3" />
      <rect x="42" y="64" width="16" height="7" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-p12',
    name: 'Pendiente Pronunciada de Descenso (Bajar en Compresión)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-18',
    code: 'P-18',
    meaning: 'Alerta sobre un descenso prolongado o pronunciado donde los vehículos pesados deben bajar en marcha baja (compresión) y usar freno de motor.',
    description: 'Rombo amarillo vial con silueta de camión inclinado en pendiente descendente y porcentaje de inclinación.',
    rule: 'Prohibido descender en neutro; utilizar marchas bajas y freno de motor para evitar recalentamiento de zapatas (brake fade).',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <polygon points="22,62 78,78 78,80 22,80" fill="#111827" />
      <g transform="rotate(15 50 52)">
        <rect x="30" y="38" width="28" height="14" fill="#111827" />
        <rect x="58" y="42" width="10" height="10" fill="#111827" />
        <circle cx="36" cy="54" r="4" fill="#111827" />
        <circle cx="62" cy="54" r="4" fill="#111827" />
      </g>
    </svg>`
  },
  {
    id: 'sign-p13',
    name: 'Vado o Paso de Agua Sobre la Calzada',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-24',
    code: 'P-24',
    meaning: 'Advierte una depresión transversal en la carretera susceptible de acumular corrientes de agua lluvia o escorrentía.',
    description: 'Rombo amarillo preventivo con el perfil ondulado de una hondonada en la superficie vial.',
    rule: 'Disminuir la velocidad antes del vado para evitar pérdida de control, hidroplaneo o daños en suspensión y carga.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <path d="M 20,56 L 34,56 Q 50,74 66,56 L 80,56 L 80,68 L 20,68 Z" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p14',
    name: 'Tránsito de Maquinaria Agrícola',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-29',
    code: 'P-29',
    meaning: 'Previene la presencia frecuente de tractores, cosechadoras y equipo agrícola de baja velocidad cruzando o circulando por la vía.',
    description: 'Rombo amarillo preventivo con la silueta negra de un tractor agrícola con rueda trasera de gran diámetro.',
    rule: 'Moderar la velocidad en zonas cañeras o agrícolas y adelantar únicamente con visibilidad plena y línea discontinua.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <rect x="44" y="42" width="22" height="14" fill="#111827" />
      <rect x="34" y="34" width="14" height="22" fill="#111827" />
      <circle cx="38" cy="60" r="10" fill="#111827" />
      <circle cx="64" cy="62" r="6" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p15',
    name: 'Indicador de Objetos Cercanos / Obstáculos Laterales',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-32',
    code: 'P-32',
    meaning: 'Señaliza estribos de puentes, pilares, cabezales de alcantarilla u obstáculos rígidos situados al borde inmediato de la calzada.',
    description: 'Placa vertical rectangular con franjas alternas amarillas y negras inclinadas hacia el lado donde debe circular el vehículo.',
    rule: 'Las franjas descienden hacia el carril transitable indicando al conductor el costado seguro para esquivar el obstáculo.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="32" y="10" width="36" height="80" rx="3" fill="#facc15" stroke="#111827" stroke-width="3" />
      <polygon points="32,20 68,36 68,48 32,32" fill="#111827" />
      <polygon points="32,46 68,62 68,74 32,58" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-i10',
    name: 'Zona Autorizada de Carga y Descarga',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-16',
    code: 'I-16',
    meaning: 'Informa sobre bahías o espacios demarcados exclusivamente para maniobras temporales de carga y descarga de mercancías.',
    description: 'Placa rectangular azul con pictograma de camión de carga y leyenda o símbolo de transferencia de mercancía.',
    rule: 'Uso exclusivo para vehículos comerciales en operación activa de entrega dentro de los horarios permitidos por el VMT.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <rect x="22" y="34" width="36" height="24" rx="2" fill="#ffffff" />
      <rect x="60" y="42" width="16" height="16" rx="2" fill="#ffffff" />
      <circle cx="32" cy="64" r="5" fill="#ffffff" />
      <circle cx="66" cy="64" r="5" fill="#ffffff" />
    </svg>`
  },

  // ==========================================================================
  // 5. SEÑALES PREVENTIVAS ADICIONALES (MANUAL 2025 / SIECA)
  // ==========================================================================
  {
    id: 'sign-p16',
    name: 'Curvas Pronunciadas en Sentido Contrario (En S)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-3',
    code: 'P-3',
    meaning: 'Advierte sobre dos curvas cerradas sucesivas en direcciones opuestas (curva y contracurva) que exigen reducir la velocidad y mantener el carril.',
    description: 'Rombo amarillo con borde negro y flecha negra en forma de "S" indicando cambio consecutivo de dirección.',
    rule: 'Desacelerar antes de la primera curva y evitar maniobras de adelantamiento en todo el tramo en S.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <path d="M 42,74 L 42,60 Q 42,52 52,50 Q 62,48 62,38 L 62,28" fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" />
      <polygon points="62,20 53,32 71,32" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p17',
    name: 'Carretera Sinuosa (Sucesión de Curvas)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-5',
    code: 'P-5',
    meaning: 'Alerta sobre un tramo vial prolongado con tres o más curvas consecutivas en sentidos alternos.',
    description: 'Rombo amarillo con borde negro que exhibe una flecha sinuosa ondulante vertical.',
    rule: 'Mantener velocidad moderada constante, ambas manos en el volante y prohibición estricta de rebasar.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <path d="M 52,76 Q 38,66 52,56 Q 66,46 52,36 L 52,26" fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" />
      <polygon points="52,18 44,30 60,30" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p18',
    name: 'Entronque Lateral en T',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-9',
    code: 'P-9',
    meaning: 'Advierte que la vía principal finaliza o intercepta perpendicularmente a otra vía formando una intersección en T.',
    description: 'Rombo amarillo con símbolo negro en forma de T mayúscula.',
    rule: 'Reducir la velocidad con antelación y prepararse para girar a la izquierda o derecha cediendo el paso a la vía transversal.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="28" y1="36" x2="72" y2="36" stroke="#111827" stroke-width="8" stroke-linecap="round" />
      <line x1="50" y1="36" x2="50" y2="74" stroke="#111827" stroke-width="8" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p19',
    name: 'Entronque en Y (Bifurcación)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-11',
    code: 'P-11',
    meaning: 'Advierte la proximidad de una bifurcación donde la calzada se divide en dos ramales divergentes en forma de Y.',
    description: 'Rombo amarillo con barra vertical negra que se abre en dos brazos superiores en ángulo.',
    rule: 'Seleccionar anticipadamente el carril correspondiente al destino elegido y activar la luz direccional oportuna.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="50" y1="74" x2="50" y2="50" stroke="#111827" stroke-width="8" stroke-linecap="round" />
      <line x1="50" y1="50" x2="32" y2="30" stroke="#111827" stroke-width="8" stroke-linecap="round" />
      <line x1="50" y1="50" x2="68" y2="30" stroke="#111827" stroke-width="8" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p20',
    name: 'Carretera en Ángulo Oblicuo (Entronque Oblicuo)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-12',
    code: 'P-12',
    meaning: 'Advierte la aproximación de una vía secundaria que empalma en ángulo agudo u oblicuo con la carretera principal.',
    description: 'Rombo amarillo con trazo vertical principal y una rama diagonal negra convergente.',
    rule: 'Vigilar los ángulos ciegos laterales mediante espejos y giro rápido de cabeza antes de cruzar o permitir incorporaciones.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="44" y1="26" x2="44" y2="74" stroke="#111827" stroke-width="8" stroke-linecap="round" />
      <line x1="44" y1="54" x2="68" y2="32" stroke="#111827" stroke-width="7" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p21',
    name: 'Inicia Separador Físico (Mediana Central)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-13',
    code: 'P-13',
    meaning: 'Advierte el comienzo de un separador físico o isla divisoria que divide los flujos vehiculares en sentidos opuestos.',
    description: 'Rombo amarillo con dos flechas verticales paralelas rodeando la punta redondeada de una mediana negra.',
    rule: 'Conservar el carril derecho respecto al separador físico; prohibido invadir el costado izquierdo de la isla.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <path d="M 50,42 Q 56,42 56,54 L 56,74 L 44,74 L 44,54 Q 44,42 50,42 Z" fill="#111827" />
      <line x1="33" y1="28" x2="33" y2="66" stroke="#111827" stroke-width="5" stroke-linecap="round" />
      <polygon points="33,76 26,64 40,64" fill="#111827" />
      <line x1="67" y1="72" x2="67" y2="34" stroke="#111827" stroke-width="5" stroke-linecap="round" />
      <polygon points="67,24 60,36 74,36" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p22',
    name: 'Termina Separador Físico (Fin de Mediana)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-14',
    code: 'P-14',
    meaning: 'Advierte el fin de la carretera dividida por mediana física y el retorno a una calzada única de doble sentido.',
    description: 'Rombo amarillo con mediana negra en la parte superior y dos flechas convergentes hacia circulación bidireccional.',
    rule: 'Extremar precaución ante el tráfico que vendrá en sentido contrario sin barrera física y respetar la prohibición de rebase.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <path d="M 44,26 L 56,26 L 56,46 Q 56,56 50,56 Q 44,56 44,46 Z" fill="#111827" />
      <line x1="34" y1="74" x2="34" y2="36" stroke="#111827" stroke-width="5" stroke-linecap="round" />
      <polygon points="34,26 28,38 40,38" fill="#111827" />
      <line x1="66" y1="30" x2="66" y2="66" stroke="#111827" stroke-width="5" stroke-linecap="round" />
      <polygon points="66,76 60,64 72,64" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p23',
    name: 'Incorporación de Tránsito por la Izquierda',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-10B',
    code: 'P-10B',
    meaning: 'Advierte la convergencia próxima de un carril de aceleración o flujo vehicular que se incorpora desde el costado izquierdo.',
    description: 'Rombo amarillo con flecha principal vertical y rama secundaria convergente desde la izquierda.',
    rule: 'Mantener distancia de seguimiento y facilitar el ingreso seguro de los vehículos que convergen por la izquierda.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="54" y1="74" x2="54" y2="34" stroke="#111827" stroke-width="8" stroke-linecap="round" />
      <polygon points="54,22 44,36 64,36" fill="#111827" />
      <path d="M 32,66 L 46,50" stroke="#111827" stroke-width="6" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p24',
    name: 'Reducción de Carriles (Estrechamiento)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-16',
    code: 'P-16',
    meaning: 'Advierte que la calzada se estrecha más adelante por supresión de uno de los carriles de circulación.',
    description: 'Rombo amarillo con dos líneas negras paralelas que convergen reduciendo el ancho del carril derecho.',
    rule: 'Reducir la velocidad, ceder el paso en alternancia (uno por uno) y no intentar adelantamientos de último segundo.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="36" y1="26" x2="36" y2="74" stroke="#111827" stroke-width="6" stroke-linecap="round" />
      <path d="M 66,74 L 66,58 L 56,44 L 56,26" fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  },
  {
    id: 'sign-p25',
    name: 'Termina el Pavimento (Inicio de Terracería)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-19',
    code: 'P-19',
    meaning: 'Advierte el fin del tramo asfaltado o pavimentado y el cambio inmediato a superficie de grava, lastre o tierra.',
    description: 'Rombo amarillo con borde negro mostrando una calzada que se vuelve irregular o punteada en su extremo superior.',
    rule: 'Disminuir la velocidad antes del cambio de superficie para evitar pérdida de tracción y proyección de piedras.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <rect x="34" y="54" width="32" height="20" fill="#111827" />
      <circle cx="38" cy="44" r="3" fill="#111827" />
      <circle cx="50" cy="40" r="3" fill="#111827" />
      <circle cx="62" cy="44" r="3" fill="#111827" />
      <circle cx="44" cy="32" r="2.5" fill="#111827" />
      <circle cx="56" cy="32" r="2.5" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p26',
    name: 'Dispositivo de Dirección (Cheurón de Curva)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-20',
    code: 'P-20',
    meaning: 'Delinea el contorno exterior de curvas muy cerradas o peligrosas indicando el sentido obligatorio del giro.',
    description: 'Placa rectangular vertical amarilla con borde negro y una punta de flecha o cheurón grueso apuntando en el sentido de la curva.',
    rule: 'Reducir la velocidad antes de alcanzar los cheurones; su presencia indica cambio brusco de alineamiento horizontal.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="22" y="10" width="56" height="80" rx="4" fill="#facc15" stroke="#111827" stroke-width="4" />
      <polygon points="34,20 52,20 70,50 52,80 34,80 52,50" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p27',
    name: 'Rampa de Salida (Desvío en Autopista)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-21',
    code: 'P-21',
    meaning: 'Advierte la proximidad de un ramal o rampa de desaceleración para abandonar una autopista o vía rápida.',
    description: 'Rombo amarillo con flecha principal vertical y una rama diagonal saliente hacia la derecha.',
    rule: 'No frenar sobre el carril principal; ingresar primero al carril de desaceleración y luego reducir la marcha.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="42" y1="74" x2="42" y2="30" stroke="#111827" stroke-width="7" stroke-linecap="round" />
      <polygon points="42,20 34,32 50,32" fill="#111827" />
      <path d="M 42,58 L 64,38" stroke="#111827" stroke-width="6" stroke-linecap="round" />
      <polygon points="70,32 58,35 66,44" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p28',
    name: 'Curva Vertical (Columpio o Depresión)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-23',
    code: 'P-23',
    meaning: 'Advierte sobre irregularidades longitudinales pronunciadas (columpios, depresiones o cambios bruscos de rasante) en la calzada.',
    description: 'Rombo amarillo con perfil ondulado de doble cresta o depresión en color negro.',
    rule: 'Moderar la velocidad para evitar pérdida de contacto de los neumáticos, golpes de suspensión y visibilidad limitada.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <path d="M 22,58 Q 34,42 46,56 Q 58,70 78,56 L 78,66 L 22,66 Z" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p29',
    name: 'Zona de Juegos (Niños en la Vía)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-25',
    code: 'P-25',
    meaning: 'Advierte la cercanía de parques, canchas deportivas o áreas recreativas donde es frecuente la irrupción súbita de niños.',
    description: 'Rombo amarillo con borde negro y silueta de niño corriendo tras un balón.',
    rule: 'Circular a velocidad muy reducida (<= 25 km/h) manteniendo el pie listo sobre el freno ante cruces imprevistos.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <circle cx="42" cy="34" r="5" fill="#111827" />
      <path d="M 42,40 L 42,56 L 34,70 M 42,56 L 52,68 M 34,48 L 52,44" stroke="#111827" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <circle cx="64" cy="60" r="5" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p30',
    name: 'Zona de Derrumbes (Caída de Rocas)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-26',
    code: 'P-26',
    meaning: 'Advierte el peligro de desprendimiento de rocas, tierra o taludes inestables sobre la calzada, especialmente en época lluviosa.',
    description: 'Rombo amarillo con pictograma de talud lateral y fragmentos de roca cayendo hacia la vía.',
    rule: 'No estacionarse ni detenerse al pie de paredones y mantenerse atento a obstáculos repentinos tras curvas.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <polygon points="24,72 24,32 42,46 48,72" fill="#111827" />
      <circle cx="54" cy="40" r="4" fill="#111827" />
      <circle cx="62" cy="52" r="5" fill="#111827" />
      <polygon points="52,66 60,60 66,70 54,72" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p31',
    name: 'Vibradores / Bandas Sonoras (Reductor de Velocidad)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-22B',
    code: 'P-22B',
    meaning: 'Advierte la presencia de franjas transversales elevadas (vibradores) destinadas a alertar acústicamente y reducir la velocidad.',
    description: 'Rombo amarillo con serie de tres pequeños resaltos consecutivos sobre la línea base de la calzada.',
    rule: 'Disminuir la velocidad progresivamente antes de peajes, escuelas o cruces peligrosos señalizados con vibradores.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="22" y1="62" x2="78" y2="62" stroke="#111827" stroke-width="5" stroke-linecap="round" />
      <path d="M 28,62 Q 34,50 40,62 M 44,62 Q 50,50 56,62 M 60,62 Q 66,50 72,62" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p32',
    name: 'Cruce de Ganado en la Vía',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-27',
    code: 'P-27',
    meaning: 'Advierte la posible presencia o cruce de ganado vacuno u otros animales domésticos sobre carreteras rurales.',
    description: 'Rombo amarillo con silueta negra de una res de perfil.',
    rule: 'Reducir la velocidad, no tocar la bocina bruscamente para no asustar a los animales y cederles el paso.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <rect x="34" y="42" width="28" height="16" rx="4" fill="#111827" />
      <rect x="60" y="36" width="12" height="10" rx="2" fill="#111827" />
      <line x1="38" y1="58" x2="38" y2="70" stroke="#111827" stroke-width="4" stroke-linecap="round" />
      <line x1="46" y1="58" x2="46" y2="70" stroke="#111827" stroke-width="4" stroke-linecap="round" />
      <line x1="56" y1="58" x2="56" y2="70" stroke="#111827" stroke-width="4" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-p33',
    name: 'Pendiente Pronunciada Hacia Arriba (Subida)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-4B',
    code: 'P-4B',
    meaning: 'Advierte un tramo ascendente prolongado y empinado que exige mayor potencia motriz y marchas bajas de fuerza.',
    description: 'Rombo amarillo con plano inclinado ascendente hacia la derecha y silueta de vehículo subiendo.',
    rule: 'Seleccionar marcha adecuada antes de iniciar el ascenso; vehículos pesados deben conservar su carril derecho.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <polygon points="24,70 76,42 76,70" fill="#111827" />
      <g transform="rotate(-28 46 46)">
        <rect x="34" y="36" width="22" height="11" rx="2" fill="#111827" />
        <circle cx="39" cy="49" r="3" fill="#111827" />
        <circle cx="51" cy="49" r="3" fill="#111827" />
      </g>
    </svg>`
  },
  {
    id: 'sign-p34',
    name: 'Doble Circulación Preventiva',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-30',
    code: 'P-30',
    meaning: 'Advierte que una vía de sentido único pasa a operar en doble sentido de circulación (tránsito en ambos sentidos).',
    description: 'Rombo amarillo con dos flechas verticales paralelas apuntando en sentidos opuestos.',
    rule: 'Conservar estrictamente el carril derecho y mantenerse alerta frente al tráfico entrante en sentido contrario.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="38" y1="70" x2="38" y2="34" stroke="#111827" stroke-width="6" stroke-linecap="round" />
      <polygon points="38,24 30,36 46,36" fill="#111827" />
      <line x1="62" y1="30" x2="62" y2="66" stroke="#111827" stroke-width="6" stroke-linecap="round" />
      <polygon points="62,76 54,64 70,64" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p35',
    name: 'Alto Próximo (Proximidad de Señal R-1)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-31',
    code: 'P-31',
    meaning: 'Advierte con antelación que más adelante existe una señal reglamentaria de Alto (Stop) no visible a larga distancia.',
    description: 'Rombo amarillo que contiene un octágono rojo en miniatura con una flecha negra superior.',
    rule: 'Iniciar la desaceleración progresiva para garantizar la detención total en la línea de parada próxima.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <polygon points="43,46 57,46 66,55 66,69 57,78 43,78 34,69 34,55" fill="#dc2626" stroke="#111827" stroke-width="2" />
      <line x1="50" y1="40" x2="50" y2="28" stroke="#111827" stroke-width="5" stroke-linecap="round" />
      <polygon points="50,20 42,30 58,30" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p36',
    name: 'Redondel Próximo (Glorieta / Rotonda)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-33',
    code: 'P-33',
    meaning: 'Advierte la proximidad inmediata de una intersección giratoria o redondel donde el tráfico circula en sentido antihorario.',
    description: 'Rombo amarillo con tres flechas curvas negras dispuestas en anillo circular.',
    rule: 'Reducir velocidad antes de llegar al redondel y ceder el paso obligatorio a quienes ya circulan dentro del anillo (Art. 168).',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <circle cx="50" cy="50" r="16" fill="none" stroke="#111827" stroke-width="6" stroke-dasharray="24 8" />
      <polygon points="50,28 58,36 46,38" fill="#111827" />
      <polygon points="68,58 58,62 60,50" fill="#111827" />
      <polygon points="32,58 40,50 42,62" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-p37',
    name: 'Ciclistas en la Vía',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-34',
    code: 'P-34',
    meaning: 'Advierte la presencia o cruce frecuente de ciclistas compartiendo la calzada o ingresando desde una ciclovía.',
    description: 'Rombo amarillo con borde negro y silueta estilizada de bicicleta.',
    rule: 'Mantener una distancia lateral mínima de 1.50 metros al rebasar ciclistas y reducir la velocidad al aproximarse.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <circle cx="36" cy="58" r="9" fill="none" stroke="#111827" stroke-width="4" />
      <circle cx="64" cy="58" r="9" fill="none" stroke="#111827" stroke-width="4" />
      <path d="M 36,58 L 48,44 L 60,44 L 64,58 M 48,44 L 50,58 L 36,58 M 56,38 L 62,38" fill="none" stroke="#111827" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  },
  {
    id: 'sign-p38',
    name: 'Cruce de Ferrocarril (Cruz de San Andrés)',
    category: 'preventiva',
    type: 'preventiva',
    siecaCode: 'P-35',
    code: 'P-35',
    meaning: 'Advierte la intersección a nivel con una vía férrea; obliga a detenerse y verificar ambos lados antes de cruzar.',
    description: 'Aspa o Cruz de San Andrés blanca con orla roja o negra (o rombo amarillo con RR y X) indicando paso a nivel ferroviario.',
    rule: 'Detener la marcha antes de la vía férrea, observar y escuchar a ambos lados; el tren tiene prioridad absoluta.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#facc15" stroke="#111827" stroke-width="4" />
      <line x1="30" y1="30" x2="70" y2="70" stroke="#111827" stroke-width="7" stroke-linecap="round" />
      <line x1="70" y1="30" x2="30" y2="70" stroke="#111827" stroke-width="7" stroke-linecap="round" />
      <text x="32" y="54" fill="#111827" font-size="14" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">R</text>
      <text x="68" y="54" fill="#111827" font-size="14" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">R</text>
    </svg>`
  },

  // ==========================================================================
  // 6. SEÑALES REGLAMENTARIAS ADICIONALES (MANUAL 2025 / SIECA)
  // ==========================================================================
  {
    id: 'sign-r15',
    name: 'Prohibido el Paso de Ciclistas',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-15',
    code: 'R-15',
    meaning: 'Prohíbe la circulación de bicicletas en autopistas, túneles o tramos de alta velocidad.',
    description: 'Disco blanco con orla roja, silueta negra de bicicleta y barra diagonal roja.',
    rule: 'Los ciclistas deben utilizar rutas alternas o ciclovías habilitadas fuera de la calzada expresa.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <circle cx="35" cy="58" r="9" fill="none" stroke="#111827" stroke-width="4" />
      <circle cx="65" cy="58" r="9" fill="none" stroke="#111827" stroke-width="4" />
      <path d="M 35,58 L 47,42 L 60,42 L 65,58 M 47,42 L 50,58 L 35,58" fill="none" stroke="#111827" stroke-width="3.5" stroke-linecap="round" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r16',
    name: 'Prohibido el Paso de Camiones',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-17',
    code: 'R-17',
    meaning: 'Prohíbe el ingreso y circulación de camiones y vehículos de carga pesada en la vía o zona urbana señalizada.',
    description: 'Disco blanco con orla roja, silueta negra de camión de carga y franja diagonal roja.',
    rule: 'Los vehículos de carga deben desviarse hacia las rutas periféricas o corredores logísticos autorizados.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <rect x="26" y="38" width="30" height="20" rx="2" fill="#111827" />
      <rect x="57" y="44" width="15" height="14" rx="2" fill="#111827" />
      <circle cx="34" cy="62" r="5" fill="#111827" />
      <circle cx="64" cy="62" r="5" fill="#111827" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r17',
    name: 'Parada Exclusiva de Buses (Reglamentaria)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-25',
    code: 'R-25',
    meaning: 'Regula el punto obligatorio donde únicamente el transporte colectivo autorizado puede detenerse para abordar o bajar pasajeros.',
    description: 'Disco blanco con orla roja o placa reglamentaria con pictograma de autobús sin barra de prohibición y zona demarcada.',
    rule: 'Prohibido para vehículos particulares estacionarse o bloquear el área reservada a la parada de buses.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <rect x="30" y="28" width="40" height="36" rx="5" fill="#111827" />
      <rect x="34" y="33" width="32" height="14" rx="2" fill="#ffffff" />
      <circle cx="38" cy="56" r="3.5" fill="#ffffff" />
      <circle cx="62" cy="56" r="3.5" fill="#ffffff" />
      <rect x="35" y="64" width="6" height="5" fill="#111827" />
      <rect x="59" y="64" width="6" height="5" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-r18',
    name: 'Parada Prohibida (No Subir ni Bajar Pasajeros)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-9',
    code: 'R-9',
    meaning: 'Prohíbe a buses, microbuses, taxis y vehículos particulares detenerse para recoger o dejar pasajeros en el tramo.',
    description: 'Disco blanco con orla roja, silueta de autobús y barra diagonal roja.',
    rule: 'Mantener el flujo continuo sin detenciones momentáneas en intersecciones, túneles o ejes rápidos.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <rect x="30" y="30" width="40" height="34" rx="5" fill="#111827" />
      <rect x="34" y="35" width="32" height="13" rx="2" fill="#ffffff" />
      <circle cx="38" cy="56" r="3" fill="#ffffff" />
      <circle cx="62" cy="56" r="3" fill="#ffffff" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r19',
    name: 'No Bloquear Intersección',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-27',
    code: 'R-27',
    meaning: 'Prohíbe ingresar a una intersección si la congestión impide despejarla por completo antes del cambio de luz.',
    description: 'Placa reglamentaria blanca con cuadrícula amarilla/negra tachada o leyenda NO BLOQUEAR INTERSECCIÓN.',
    rule: 'Aun con semáforo en verde, esperar detrás de la línea de parada hasta tener espacio libre al otro lado del cruce.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="6" />
      <rect x="26" y="24" width="48" height="32" fill="#facc15" stroke="#111827" stroke-width="3" />
      <line x1="26" y1="24" x2="74" y2="56" stroke="#111827" stroke-width="3" />
      <line x1="74" y1="24" x2="26" y2="56" stroke="#111827" stroke-width="3" />
      <text x="50" y="70" fill="#dc2626" font-size="9" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">NO BLOQUEAR</text>
      <text x="50" y="81" fill="#111827" font-size="8" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">INTERSECCIÓN</text>
    </svg>`
  },
  {
    id: 'sign-r20',
    name: 'Use Cinturón de Seguridad',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-28',
    code: 'R-28',
    meaning: 'Ordena el uso obligatorio del cinturón de seguridad para el conductor y todos los ocupantes del vehículo.',
    description: 'Disco azul o placa blanca reglamentaria con pictograma de persona sujeta por cinturón diagonal.',
    rule: 'Sancionado con multa grave si el conductor o acompañantes circulan sin el cinturón debidamente abrochado.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#1d4ed8" stroke="#ffffff" stroke-width="4" />
      <circle cx="50" cy="28" r="8" fill="#ffffff" />
      <path d="M 34,74 L 36,44 Q 50,38 64,44 L 66,74 Z" fill="#ffffff" />
      <line x1="34" y1="44" x2="66" y2="72" stroke="#1d4ed8" stroke-width="7" />
    </svg>`
  },
  {
    id: 'sign-r21',
    name: 'Se Permite Virar en U',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-12B',
    code: 'R-12B',
    meaning: 'Autoriza expresamente la maniobra de retorno en U en el punto o carril exclusivo señalizado.',
    description: 'Disco blanco con orla verde o placa reglamentaria con flecha negra curvada en U sin barra de prohibición.',
    rule: 'Realizar el retorno únicamente desde el carril izquierdo habilitado y cediendo el paso al tráfico opuesto.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#16a34a" stroke-width="10" />
      <path d="M 62,68 L 62,40 Q 62,26 48,26 Q 34,26 34,40 L 34,62" fill="none" stroke="#111827" stroke-width="8" stroke-linecap="round" />
      <polygon points="34,72 24,58 44,58" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-r22',
    name: 'Prohibido Virar en U',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-12',
    code: 'R-12',
    meaning: 'Prohíbe de forma absoluta realizar retornos o giros en U en la intersección, mediana o tramo señalizado.',
    description: 'Disco blanco con orla roja, flecha negra en U invertida y barra diagonal roja a 45 grados.',
    rule: 'Virar en U donde está prohibido constituye infracción grave por invadir el flujo contrario de alta velocidad.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <path d="M 62,68 L 62,40 Q 62,26 48,26 Q 34,26 34,40 L 34,60" fill="none" stroke="#111827" stroke-width="7" stroke-linecap="round" />
      <polygon points="34,70 25,58 43,58" fill="#111827" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r23',
    name: 'No Hay Paso (Contramano / Sentido Contrario)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-4',
    code: 'R-4',
    meaning: 'Prohíbe terminantemente ingresar a la vía o rampa en esa dirección por tratarse de flujo en sentido contrario.',
    description: 'Disco rojo sólido con una barra horizontal blanca en el centro.',
    rule: 'Ingresar pasando esta señal implica circular en contravía con riesgo inminente de colisión frontal.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="45" fill="#dc2626" stroke="#ffffff" stroke-width="3" />
      <rect x="20" y="41" width="60" height="18" rx="2" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-r24',
    name: 'Prohibido Usar Bocina (Zona de Silencio)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-13',
    code: 'R-13',
    meaning: 'Prohíbe accionar el claxon o bocina del vehículo en zonas hospitalarias, escolares, iglesias o áreas residenciales.',
    description: 'Disco blanco con orla roja, pictograma de corneta/bocina negra y barra diagonal roja.',
    rule: 'Solo se tolera en caso de emergencia inminente para evitar un atropello o colisión inevitable.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <path d="M 28,46 L 44,46 L 64,34 L 64,66 L 44,54 L 28,54 Z" fill="#111827" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r25',
    name: 'Estacionamiento Permitido (Horario Regulado)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-8B',
    code: 'R-8B',
    meaning: 'Permite el estacionamiento de vehículos exclusivamente dentro de las franjas horarias y tiempo máximo especificado.',
    description: 'Placa reglamentaria blanca con letra "E" verde o negra dentro de círculo verde y leyenda de horario permitido.',
    rule: 'Respetar estrictamente los límites horarios; exceder el tiempo autorizado expone a multa o remoción.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="14" y="8" width="72" height="84" rx="8" fill="#ffffff" stroke="#111827" stroke-width="4" />
      <circle cx="50" cy="40" r="24" fill="#ffffff" stroke="#16a34a" stroke-width="6" />
      <text x="50" y="50" fill="#111827" font-size="30" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">E</text>
      <text x="50" y="76" fill="#111827" font-size="10" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">8AM - 6PM</text>
    </svg>`
  },
  {
    id: 'sign-r26',
    name: 'Prohibido Vehículos de Tracción Animal',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-18',
    code: 'R-18',
    meaning: 'Prohíbe la circulación de carretas o vehículos halados por semovientes en carreteras troncales y autopistas.',
    description: 'Disco blanco con orla roja, silueta de carreta de tracción animal y barra diagonal roja.',
    rule: 'Restricción orientada a prevenir diferencias críticas de velocidad en vías rápidas.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <rect x="26" y="42" width="24" height="14" fill="#111827" />
      <circle cx="38" cy="58" r="7" fill="none" stroke="#111827" stroke-width="3.5" />
      <path d="M 50,50 L 66,46 L 72,58 M 62,48 L 62,62" stroke="#111827" stroke-width="4" stroke-linecap="round" fill="none" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r27',
    name: 'Prohibido Equipo Agrícola en Calzada',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-19',
    code: 'R-19',
    meaning: 'Prohíbe el tránsito de tractores, cosechadoras y maquinaria agrícola lenta en autopistas o vías urbanas principales.',
    description: 'Disco blanco con orla roja, silueta de tractor agrícola y barra diagonal roja.',
    rule: 'La maquinaria agrícola debe trasladarse en plataforma cama baja o por caminos vecinales alternos.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <rect x="44" y="42" width="22" height="12" fill="#111827" />
      <rect x="34" y="34" width="14" height="20" fill="#111827" />
      <circle cx="38" cy="58" r="9" fill="#111827" />
      <circle cx="63" cy="60" r="5" fill="#111827" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r28',
    name: 'No Parar ni Detenerse (Prohibición Total)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-8C',
    code: 'R-8C',
    meaning: 'Prohíbe tanto estacionar como detener momentáneamente el vehículo, incluso con el conductor al volante.',
    description: 'Disco blanco con orla roja, letra "E" negra y una doble barra cruzada en X roja.',
    rule: 'Equivale a cordón rojo continuo; se aplica en ejes de emergencia, puentes y accesos críticos.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <text x="50" y="68" fill="#111827" font-size="50" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">E</text>
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="8" />
      <line x1="78" y1="22" x2="22" y2="78" stroke="#dc2626" stroke-width="8" />
    </svg>`
  },
  {
    id: 'sign-r29',
    name: 'Fin de Velocidad Restringida',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-31',
    code: 'R-31',
    meaning: 'Notifica la terminación del tramo con límite especial de velocidad, restableciendo el límite general de la carretera.',
    description: 'Disco blanco con orla negra/gris, numeral de velocidad previo y banda diagonal negra cruzada.',
    rule: 'A partir de esta señal rige el límite ordinario del tipo de vía (por ejemplo 90 km/h en carretera abierta).',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#111827" stroke-width="6" />
      <text x="50" y="62" fill="#64748b" font-size="34" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">60</text>
      <line x1="22" y1="78" x2="78" y2="22" stroke="#111827" stroke-width="8" />
    </svg>`
  },
  {
    id: 'sign-r30',
    name: 'Mantenga su Derecha',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-23',
    code: 'R-23',
    meaning: 'Obliga a todos los conductores a circular por el carril derecho, dejando el carril izquierdo libre para adelantamientos.',
    description: 'Placa rectangular blanca con borde negro, leyenda MANTENGA SU DERECHA y flecha direccional hacia la derecha.',
    rule: 'Circular innecesariamente por el carril izquierdo entorpece el flujo y es sancionado por el Reglamento General de Tránsito.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="12" y="10" width="76" height="80" rx="6" fill="#ffffff" stroke="#111827" stroke-width="4" />
      <text x="50" y="32" fill="#111827" font-size="11" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">MANTENGA</text>
      <text x="50" y="45" fill="#111827" font-size="11" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">SU DERECHA</text>
      <line x1="26" y1="68" x2="62" y2="68" stroke="#111827" stroke-width="7" stroke-linecap="round" />
      <polygon points="74,68 60,58 60,78" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-r31',
    name: 'Prohibido Botar Basura en la Vía',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-29',
    code: 'R-29',
    meaning: 'Prohíbe arrojar desechos sólidos, colillas o basura desde vehículos hacia la calzada o cunetas.',
    description: 'Disco blanco con orla roja mostrando una mano arrojando desechos a un cesto, tachado por barra roja.',
    rule: 'Arrojar basura desde un automotor acarrea multa administrativa y daño ambiental a drenajes pluviales.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="10" />
      <polygon points="36,48 54,48 51,72 39,72" fill="#111827" />
      <path d="M 52,32 L 68,32 L 68,40 L 56,40" stroke="#111827" stroke-width="4" fill="none" />
      <circle cx="45" cy="40" r="3" fill="#111827" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="9" />
    </svg>`
  },
  {
    id: 'sign-r32',
    name: 'Prohibido Cruce de Peatones',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-16B',
    code: 'R-16B',
    meaning: 'Prohíbe a los peatones cruzar la calzada a nivel en este punto, remitiéndolos a la pasarela o cruce seguro cercano.',
    description: 'Placa reglamentaria blanca con círculo rojo tachando al peatón en paso y leyenda indicativa.',
    rule: 'El uso de pasarelas peatonales es obligatorio donde existe esta prohibición expresa.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="14" y="8" width="72" height="84" rx="6" fill="#ffffff" stroke="#111827" stroke-width="4" />
      <circle cx="50" cy="40" r="24" fill="#ffffff" stroke="#dc2626" stroke-width="6" />
      <circle cx="50" cy="30" r="4" fill="#111827" />
      <path d="M 46,36 L 54,36 L 52,50 L 56,56 M 48,50 L 44,56" stroke="#111827" stroke-width="3.5" fill="none" />
      <line x1="34" y1="24" x2="66" y2="56" stroke="#dc2626" stroke-width="6" />
      <text x="50" y="78" fill="#dc2626" font-size="9" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">NO CRUCE</text>
    </svg>`
  },
  {
    id: 'sign-r33',
    name: 'Zona de Seguridad Peatonal (Preferencia Peatón)',
    category: 'reglamentaria',
    type: 'reglamentaria',
    siecaCode: 'R-32',
    code: 'R-32',
    meaning: 'Establece prioridad reglamentaria absoluta para el cruce de peatones en la franja demarcada.',
    description: 'Placa reglamentaria azul/blanca con pictograma de peatón cruzando sobre paso cebra.',
    rule: 'Todo conductor debe detenerse completamente antes de la cebra cuando un peatón inicie o espere cruzar.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <polygon points="50,20 20,76 80,76" fill="#ffffff" />
      <circle cx="50" cy="38" r="5" fill="#111827" />
      <path d="M 46,45 L 54,45 L 52,60 L 58,70 M 48,60 L 42,70" stroke="#111827" stroke-width="4" stroke-linecap="round" fill="none" />
    </svg>`
  },

  // ==========================================================================
  // 7. SEÑALES INFORMATIVAS ADICIONALES (MANUAL 2025 / SIECA)
  // ==========================================================================
  {
    id: 'sign-i11',
    name: 'Parada Autorizada de Taxis',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-19',
    code: 'I-19',
    meaning: 'Identifica la bahía o punto oficial asignado para el estacionamiento y abordaje de taxis autorizados.',
    description: 'Placa azul reflectiva con pictograma blanco de automóvil frontal con rótulo TAXI en el techo.',
    rule: 'Espacio reservado exclusivamente para unidades de transporte selectivo en servicio.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <rect x="38" y="24" width="24" height="10" rx="2" fill="#facc15" />
      <path d="M 28,48 L 34,34 L 66,34 L 72,48 L 72,66 L 28,66 Z" fill="#ffffff" />
      <rect x="34" y="38" width="32" height="12" fill="#1d4ed8" />
      <circle cx="36" cy="58" r="4" fill="#1d4ed8" />
      <circle cx="64" cy="58" r="4" fill="#1d4ed8" />
      <rect x="32" y="66" width="8" height="6" fill="#ffffff" />
      <rect x="60" y="66" width="8" height="6" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i12',
    name: 'Servicio de Agua Potable',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-12',
    code: 'I-12',
    meaning: 'Informa sobre un punto de abastecimiento de agua potable en áreas de descanso o paradores turísticos.',
    description: 'Placa azul con pictograma blanco de grifo y gota o vaso de agua.',
    rule: 'Útil para hidratación de viajeros y abastecimiento de emergencia en rutas largas.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <path d="M 24,42 L 56,42 Q 64,42 64,52 L 56,52 L 56,48 L 24,48 Z" fill="#ffffff" />
      <rect x="36" y="32" width="16" height="6" fill="#ffffff" />
      <path d="M 60,58 Q 66,68 60,74 Q 54,68 60,58 Z" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i13',
    name: 'Servicios Sanitarios Públicos',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-13',
    code: 'I-13',
    meaning: 'Señala la ubicación de servicios sanitarios habilitados para viajeros en estaciones de servicio o paradores.',
    description: 'Placa azul con siluetas blancas de caballero y dama separadas por barra vertical.',
    rule: 'Facilita paradas seguras fuera de la calzada en zonas de descanso autorizadas.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <circle cx="34" cy="32" r="5" fill="#ffffff" />
      <rect x="28" y="40" width="12" height="28" rx="2" fill="#ffffff" />
      <line x1="50" y1="26" x2="50" y2="74" stroke="#ffffff" stroke-width="3" />
      <circle cx="66" cy="32" r="5" fill="#ffffff" />
      <polygon points="66,40 56,64 76,64" fill="#ffffff" />
      <rect x="62" y="64" width="8" height="8" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i14',
    name: 'Restaurante / Área de Alimentación',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-15',
    code: 'I-15',
    meaning: 'Informa sobre la cercanía de un establecimiento de alimentación o comedor vial.',
    description: 'Placa azul con pictogramas blancos de tenedor y cuchillo cruzados o paralelos.',
    rule: 'Planificar la salida hacia el área de servicio usando direccional derecha con antelación.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <path d="M 36,24 L 36,44 M 30,24 L 30,40 Q 30,46 36,46 Q 42,46 42,40 L 42,24 M 36,46 L 36,76" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none" />
      <path d="M 62,24 L 62,76 M 62,24 Q 72,34 62,50" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i15',
    name: 'Hotel / Hospedaje',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-17',
    code: 'I-17',
    meaning: 'Indica la proximidad de alojamiento u hotel para descanso nocturno de conductores y viajeros.',
    description: 'Placa azul con pictograma blanco de una cama.',
    rule: 'Recomendado detenerse a descansar ante signos de fatiga o microsueños en viajes largos.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <rect x="22" y="34" width="6" height="36" fill="#ffffff" />
      <rect x="28" y="54" width="50" height="8" fill="#ffffff" />
      <rect x="72" y="48" width="6" height="22" fill="#ffffff" />
      <circle cx="36" cy="44" r="5" fill="#ffffff" />
      <rect x="44" y="42" width="32" height="10" rx="3" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i16',
    name: 'Facilidad para Personas con Discapacidad',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-21',
    code: 'I-21',
    meaning: 'Identifica estacionamientos, rampas y accesos reservados exclusivamente para personas con movilidad reducida.',
    description: 'Placa azul con el Símbolo Internacional de Accesibilidad (silla de ruedas) en blanco.',
    rule: 'Ocupar estos espacios sin autorización ni carné de discapacidad conlleva multa grave y remoción.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <circle cx="48" cy="28" r="6" fill="#ffffff" />
      <path d="M 46,36 L 46,56 L 64,56 L 68,72" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 42,46 A 14,14 0 1,0 58,66" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" />
    </svg>`
  },
  {
    id: 'sign-i17',
    name: 'Aeropuerto Internacional',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-22',
    code: 'I-22',
    meaning: 'Orienta la ruta hacia terminales aéreas o aeropuertos cercanos.',
    description: 'Placa azul o verde con silueta blanca de avión en vista superior.',
    rule: 'Seguir la canalización de carriles de acceso aeroportuario respetando límites de velocidad internos.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <path d="M 50,20 L 56,40 L 78,52 L 78,58 L 56,52 L 56,68 L 66,74 L 66,78 L 50,74 L 34,78 L 34,74 L 44,68 L 44,52 L 22,58 L 22,52 L 44,40 Z" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i18',
    name: 'Parque Nacional / Ecoturismo',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-23',
    code: 'I-23',
    meaning: 'Informa la proximidad de reservas naturales, parques nacionales o áreas protegidas.',
    description: 'Placa azul o café turístico con pictograma de árboles y montaña.',
    rule: 'Respetar los límites de velocidad en áreas protegidas por presencia de fauna silvestre.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <polygon points="38,28 24,58 52,58" fill="#ffffff" />
      <rect x="35" y="58" width="6" height="14" fill="#ffffff" />
      <polygon points="64,34 52,58 76,58" fill="#ffffff" />
      <rect x="61" y="58" width="6" height="14" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-i19',
    name: 'Mirador Turístico / Zona Panorámica',
    category: 'informativa',
    type: 'informativa',
    siecaCode: 'I-24',
    code: 'I-24',
    meaning: 'Señala la existencia de un mirador panorámico habilitado para estacionar fuera de la calzada.',
    description: 'Placa azul o café con pictograma de cámara fotográfica o vista panorámica.',
    rule: 'Jamás detenerse sobre la calzada para tomar fotografías; usar exclusivamente la bahía del mirador.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" />
      <rect x="24" y="34" width="52" height="36" rx="6" fill="#ffffff" />
      <rect x="40" y="26" width="20" height="8" rx="2" fill="#ffffff" />
      <circle cx="50" cy="52" r="11" fill="#1d4ed8" />
      <circle cx="50" cy="52" r="5" fill="#ffffff" />
    </svg>`
  },

  // ==========================================================================
  // 8. SEÑALIZACIÓN DE OBRAS Y CONSTRUCCIÓN VIAL (NARANJA #f97316)
  // ==========================================================================
  {
    id: 'sign-o1',
    name: 'Tambor de Obras / Canalizador Cilíndrico',
    category: 'obras',
    type: 'obras',
    siecaCode: 'P-O3',
    code: 'P-O3',
    meaning: 'Delimita zonas de excavación, desvíos temporales o carriles cerrados mediante tambores plásticos reflectivos.',
    description: 'Cilindro naranja de alta visibilidad con dos bandas horizontales blancas reflectivas.',
    rule: 'Circular por el costado indicado manteniendo distancia lateral y velocidad reducida en zona de obras.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="30" y="18" width="40" height="64" rx="8" fill="#f97316" stroke="#111827" stroke-width="3" />
      <rect x="30" y="30" width="40" height="10" fill="#ffffff" />
      <rect x="30" y="54" width="40" height="10" fill="#ffffff" />
      <rect x="24" y="80" width="52" height="8" rx="2" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-o2',
    name: 'Material Amontonado / Maquinaria en la Vía',
    category: 'obras',
    type: 'obras',
    siecaCode: 'P-O4',
    code: 'P-O4',
    meaning: 'Advierte la presencia de montículos de grava, tierra o maquinaria de construcción operando junto a la calzada.',
    description: 'Rombo naranja de obra con operario paleando material sobre un montículo negro.',
    rule: 'Reducir la velocidad a <= 30 km/h y extremar precaución por salida imprevista de volquetas.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#f97316" stroke="#111827" stroke-width="4" />
      <circle cx="42" cy="34" r="6" fill="#111827" />
      <path d="M 42,40 L 42,58 L 34,72 M 42,58 L 50,72 M 42,46 L 56,56" stroke="#111827" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <polygon points="52,72 74,72 64,58" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-o3',
    name: 'Indicador de Bifurcación / Desvío Temporal de Obras',
    category: 'obras',
    type: 'obras',
    siecaCode: 'P-O5',
    code: 'P-O5',
    meaning: 'Señala la desviación obligatoria del tránsito hacia un carril provisional o ruta alterna durante trabajos viales.',
    description: 'Panel naranja reflectivo con flecha negra direccional hacia el desvío habilitado.',
    rule: 'Seguir las flechas de desvío temporal sin ingresar a los tramos cerrados con cinta o barricada.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="10" y="22" width="80" height="56" rx="6" fill="#f97316" stroke="#111827" stroke-width="4" />
      <line x1="24" y1="50" x2="62" y2="50" stroke="#111827" stroke-width="9" stroke-linecap="round" />
      <polygon points="78,50 58,34 58,66" fill="#111827" />
    </svg>`
  },
  {
    id: 'sign-o4',
    name: 'Hombres Trabajando en la Vía',
    category: 'obras',
    type: 'obras',
    siecaCode: 'P-O6',
    code: 'P-O6',
    meaning: 'Advierte la presencia de cuadrillas de trabajadores viales ejecutando labores de mantenimiento o reparación.',
    description: 'Rombo naranja con borde negro y silueta de trabajador en faena vial.',
    rule: 'Las multas por exceso de velocidad en zonas de trabajo vial se agravan por el riesgo directo a vidas humanas.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <polygon points="50,5 95,50 50,95 5,50" fill="#f97316" stroke="#111827" stroke-width="4" />
      <circle cx="54" cy="32" r="6" fill="#111827" />
      <path d="M 52,38 L 46,56 L 38,72 M 46,56 L 58,72 M 48,44 L 34,54" stroke="#111827" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <line x1="28" y1="62" x2="42" y2="48" stroke="#111827" stroke-width="4" stroke-linecap="round" />
    </svg>`
  },

  // ==========================================================================
  // 9. SEÑALIZACIÓN HORIZONTAL (MARCAS EN EL PAVIMENTO - ASFALTO #334155)
  // ==========================================================================
  {
    id: 'sign-h1',
    name: 'Doble Línea Continua Amarilla (No Rebasar)',
    category: 'horizontal',
    type: 'horizontal',
    siecaCode: 'H-1',
    code: 'H-1',
    meaning: 'Separa sentidos opuestos de circulación prohibiendo de forma absoluta rebasar o cruzar al carril contrario.',
    description: 'Dos líneas longitudinales continuas de color amarillo pintadas en el eje central del pavimento.',
    rule: 'Prohibición estricta e infranqueable de adelantamiento desde ambos sentidos (Art. 128 RGT).',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#334155" stroke="#1e293b" stroke-width="3" />
      <rect x="41" y="14" width="6" height="72" fill="#facc15" />
      <rect x="53" y="14" width="6" height="72" fill="#facc15" />
    </svg>`
  },
  {
    id: 'sign-h2',
    name: 'Línea Discontinua (Rebasar con Precaución)',
    category: 'horizontal',
    type: 'horizontal',
    siecaCode: 'H-2',
    code: 'H-2',
    meaning: 'Permite efectuar adelantamientos o cambios de carril únicamente cuando exista visibilidad plena y vía despejada.',
    description: 'Línea longitudinal segmentada (trazos blancos o amarillos) sobre el pavimento asfáltico.',
    rule: 'Verificar espejos, punto ciego y tráfico opuesto antes de cruzar temporalmente la línea segmentada.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#334155" stroke="#1e293b" stroke-width="3" />
      <rect x="47" y="14" width="6" height="16" fill="#ffffff" />
      <rect x="47" y="42" width="6" height="16" fill="#ffffff" />
      <rect x="47" y="70" width="6" height="16" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-h3',
    name: 'Línea Mixta (Continua y Discontinua)',
    category: 'horizontal',
    type: 'horizontal',
    siecaCode: 'H-3',
    code: 'H-3',
    meaning: 'Autoriza el rebase únicamente a los vehículos que circulan por el lado de la línea discontinua; lo prohíbe al lado continuo.',
    description: 'Dos líneas paralelas amarillas sobre el asfalto: una continua y otra segmentada.',
    rule: 'Respetar la línea más próxima a su carril: si es continua, queda prohibido adelantar.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#334155" stroke="#1e293b" stroke-width="3" />
      <rect x="40" y="14" width="6" height="72" fill="#facc15" />
      <rect x="54" y="14" width="6" height="16" fill="#facc15" />
      <rect x="54" y="42" width="6" height="16" fill="#facc15" />
      <rect x="54" y="70" width="6" height="16" fill="#facc15" />
    </svg>`
  },
  {
    id: 'sign-h4',
    name: 'Franja Amarilla en Cordón (No Estacionar)',
    category: 'horizontal',
    type: 'horizontal',
    siecaCode: 'H-4',
    code: 'H-4',
    meaning: 'Prohíbe el estacionamiento de vehículos junto al bordillo o acera demarcada con pintura amarilla.',
    description: 'Cordón de acera pintado en color amarillo vial junto a la calzada asfáltica.',
    rule: 'Se permite detención momentánea únicamente si no obstruye el tránsito ni existe cordón rojo.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#334155" stroke="#1e293b" stroke-width="3" />
      <rect x="12" y="64" width="76" height="16" fill="#facc15" />
      <rect x="12" y="80" width="76" height="8" fill="#94a3b8" />
    </svg>`
  },
  {
    id: 'sign-h5',
    name: 'Franja Roja en Cordón (Prohibición Total)',
    category: 'horizontal',
    type: 'horizontal',
    siecaCode: 'H-5',
    code: 'H-5',
    meaning: 'Prohíbe de manera absoluta estacionar y detenerse las 24 horas junto al bordillo rojo.',
    description: 'Cordón de acera pintado en rojo continuo junto al asfalto.',
    rule: 'Cualquier vehículo estacionado o detenido en cordón rojo está sujeto a esquela y remoción con grúa (Art. 144 RGT).',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#334155" stroke="#1e293b" stroke-width="3" />
      <rect x="12" y="64" width="76" height="16" fill="#dc2626" />
      <rect x="12" y="80" width="76" height="8" fill="#94a3b8" />
    </svg>`
  },
  {
    id: 'sign-h6',
    name: 'Cuadrícula Amarilla (No Bloquear Intersección)',
    category: 'horizontal',
    type: 'horizontal',
    siecaCode: 'H-6',
    code: 'H-6',
    meaning: 'Demarca el área crítica del cruce donde está terminantemente prohibido quedar detenido, aun con luz verde.',
    description: 'Retícula o cajón de líneas amarillas cruzadas diagonalmente sobre el centro de la intersección.',
    rule: 'Ingresar solo si el tráfico adelante permite despejar completamente la cuadrícula amarilla.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#334155" stroke="#1e293b" stroke-width="3" />
      <rect x="20" y="20" width="60" height="60" fill="none" stroke="#facc15" stroke-width="4" />
      <line x1="20" y1="20" x2="80" y2="80" stroke="#facc15" stroke-width="3" />
      <line x1="80" y1="20" x2="20" y2="80" stroke="#facc15" stroke-width="3" />
      <line x1="50" y1="20" x2="20" y2="50" stroke="#facc15" stroke-width="3" />
      <line x1="80" y1="50" x2="50" y2="80" stroke="#facc15" stroke-width="3" />
    </svg>`
  },
  {
    id: 'sign-h7',
    name: 'Paso Peatonal (Cebra)',
    category: 'horizontal',
    type: 'horizontal',
    siecaCode: 'H-7',
    code: 'H-7',
    meaning: 'Demarca la franja transversal exclusiva para el cruce seguro de peatones con prioridad de paso.',
    description: 'Bandas anchas paralelas de pintura blanca reflectiva sobre el pavimento asfáltico.',
    rule: 'Detener el vehículo antes de la línea de parada y ceder el paso total al peatón sobre la cebra.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#334155" stroke="#1e293b" stroke-width="3" />
      <rect x="20" y="22" width="60" height="10" fill="#ffffff" />
      <rect x="20" y="38" width="60" height="10" fill="#ffffff" />
      <rect x="20" y="54" width="60" height="10" fill="#ffffff" />
      <rect x="20" y="70" width="60" height="10" fill="#ffffff" />
    </svg>`
  },
  {
    id: 'sign-h8',
    name: 'Isleta de Emergencia / Canalización Achurada',
    category: 'horizontal',
    type: 'horizontal',
    siecaCode: 'H-8',
    code: 'H-8',
    meaning: 'Zona neutral pintada en el pavimento para canalizar flujos, separar carriles o proteger incorporaciones; prohibido invadirla.',
    description: 'Área triangular o alargada sobre el asfalto con franjas diagonales blancas o amarillas (achurado).',
    rule: 'Prohibido circular, adelantar o estacionarse sobre las marcas achuradas de la isleta.',
    iconSvg: `<svg viewBox="0 0 100 100" class="w-12 h-12">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#334155" stroke="#1e293b" stroke-width="3" />
      <polygon points="50,18 24,80 76,80" fill="none" stroke="#ffffff" stroke-width="4" />
      <line x1="42" y1="36" x2="58" y2="36" stroke="#facc15" stroke-width="4" />
      <line x1="36" y1="50" x2="64" y2="50" stroke="#facc15" stroke-width="4" />
      <line x1="30" y1="64" x2="70" y2="64" stroke="#facc15" stroke-width="4" />
    </svg>`
  }
];
