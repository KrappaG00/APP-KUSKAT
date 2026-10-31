/**
 * Plan Curricular Oficial de Educación Vial y Licencia de Conducir VMT
 * Basado en la Ley de Transporte Terrestre, Tránsito y Seguridad Vial (DL 477),
 * Reglamento General de Tránsito y Seguridad Vial (DE 86), Código Penal (Art. 147-E),
 * Ley FONAT y Manual Centroamericano de Dispositivos Uniformes (SIECA/VMT).
 *
 * Cumplimiento estricto del estándar R4:
 * - 8 Unidades temáticas con >= 550 palabras sustantivas de teoría legal y técnica.
 * - 5 Casos prácticos reales y analizados con fundamentación jurídica por unidad (40 casos totales).
 */

import { DriverUnit } from './types';

export const DRIVER_CURRICULUM_UNITS: DriverUnit[] = [
  // ==========================================================================
  // UNIDAD 1: MARCO LEGAL, AUTORIDADES Y TIPOLOGÍA DE LICENCIAS
  // ==========================================================================
  {
    id: 'u1-marco-legal',
    title: 'Marco Legal, Autoridades de Tránsito y Tipología de Licencias',
    subtitle: 'Estructura normativa de El Salvador, potestades del VMT y PNC, y categorización oficial de licencias',
    icon: 'FileCheck2',
    substantiveTheory: `El ordenamiento vial de la República de El Salvador se sustenta en un andamiaje legal de jerarquía constitucional, cuyo eje rector es la preservación de la vida humana, la seguridad colectiva y la libre movilidad en las vías públicas terrestres. La norma primaria que rige esta materia es la Ley de Transporte Terrestre, Tránsito y Seguridad Vial, aprobada mediante Decreto Legislativo N.º 477, complementada de forma exhaustiva por el Reglamento General de Tránsito y Seguridad Vial (Decreto Ejecutivo N.º 86) y las disposiciones punitivas del Código Penal salvadoreño.

La administración, rectoría técnica y regulación del tránsito corresponden de manera exclusiva al Viceministerio de Transporte (VMT), entidad adscrita al Ministerio de Obras Públicas y de Transporte (MOPT). El VMT ejerce sus funciones a través de tres direcciones operativas especializadas: la Dirección General de Tránsito, encargada del registro de conductores, control de escuelas de manejo y emisión de directrices técnicas; la Dirección General de Transporte Terrestre, responsable de las concesiones y regulación del transporte público de pasajeros y de carga; y la Dirección General de Transporte Alternativo Local. Por su parte, la fiscalización coercitiva en la vía pública, el control operativo y la imposición directa de esquelas de infracción recaen constitucionalmente en la División de Tránsito Terrestre de la Policía Nacional Civil (PNC-DTT), cuyos agentes actúan con fe pública y competencia nacional para aplicar la ley, levantar inspecciones periciales de siniestros viales y detener en flagrancia a infractores penales.

La licencia de conducir es definida por la legislación salvadoreña como un título habilitante de carácter personal, intransferible y de concesión estatal, que certifica que el titular ha superado satisfactoriamente los exámenes médicos, visuales, psicométricos, teóricos y prácticos de conducción impartidos o auditados por los centros de evaluación autorizados bajo supervisión de SERTRACEN y el VMT. Operar un automotor sin haber obtenido previamente este documento o portando una licencia suspendida constituye una infracción gravísima, con consecuencias civiles solidarias y asegurativas inmediatas.

El sistema de licencias de conducir en El Salvador clasifica las habilitaciones en seis categorías oficiales claramente delimitadas por el peso vehicular, la capacidad de pasaje y la naturaleza del servicio:

1. Licencia Juvenil de Automóvil o Motocicleta: Destinada a personas que han cumplido quince años y no han alcanzado los dieciocho años de edad. Requiere obligatoriamente autorización expresa de los padres o tutores legales formalizada ante notario público, fianza solidaria civil para responder por posibles daños a terceros, y está sujeta a restricciones de horario nocturno y prohibición expresa de transportar pasajeros no autorizados.

2. Licencia Particular: Habilita para la conducción de automotores privados de hasta un máximo de tres toneladas y media (3.5 toneladas) de capacidad de carga o con capacidad de hasta nueve pasajeros sentados, incluyendo el conductor. Es la habilitación fundamental para vehículos tipo sedán, hatchback, camionetas SUV y vehículos familiares no destinados al lucro comercial.

3. Licencia Liviana: Faculta al conductor para operar automotores de carga liviana de hasta cinco toneladas de peso bruto vehicular, pick-ups de trabajo comercial, furgonetas de reparto y microbuses de servicio privado o institucional. Requiere poseer al menos dos años de experiencia documentada con Licencia Particular.

4. Licencia Pesada: Autoriza la conducción de vehículos de transporte pesado de carga rígidos de dos y tres ejes con peso superior a cinco toneladas y hasta doce toneladas métricas, así como autobuses de pasajeros de servicio interurbano o especial. El aspirante debe acreditar una edad mínima de veintiún años y trayectoria de manejo en licencias previas.

5. Licencia Pesada T (Articulada): Es la categoría máxima en el transporte de carga terrestre. Autoriza la operación de cabezales, tractocamiones con semirremolques articulados, remolques acoplados y vehículos de doble tren de rodaje sin límite de tonelaje dentro de las normas de pesos y dimensiones del MOPT. Exige certificaciones especializadas en frenos de aire, control de cargas dinámicas y maniobras de retroceso en espacios confinados.

6. Licencia de Motocicleta: Exclusiva para la conducción de biciclos con motor de combustión o eléctrico, tricimotos y mototaxis autorizados. Exige el uso ineludible de casco certificado bajo normas DOT o ECE y chaleco reflectivo.

El mantenimiento de la vigencia de cualquier licencia en El Salvador está supeditado al sistema de puntaje y registro de historial de siniestralidad del VMT. La acumulación reiterada de infracciones graves y muy graves conlleva la suspensión automática del derecho de conducción por períodos que van de seis meses hasta la inhabilitación definitiva, obligando al infractor a someterse a cursos obligatorios de reeducación vial y peritajes psicológicos exhaustivos antes de optar a cualquier proceso de rehabilitación de su título de conducción.`,
    practicalCases: [
      {
        id: 'tc-u1-c1',
        title: 'Operación Comercial con Licencia Particular en Bulevar del Ejército',
        scenario: 'Un conductor particular de 24 años es intervenido en un retén preventivo de la PNC-DTT sobre el Bulevar del Ejército, Soyapango, mientras conduce un camión furgón de 4.8 toneladas cargado con mercadería farmacéutica de distribución comercial. El conductor presenta una Licencia Particular vigente y argumenta que el vehículo pertenece a la empresa familiar y que cuenta con experiencia práctica sobrada.',
        legalReference: 'Ley de Transporte Terrestre, Tránsito y Seguridad Vial Art. 36; Reglamento General de Tránsito Art. 78 y Art. 82.',
        analysis: 'La Licencia Particular restringe de forma categórica la habilitación de conducción a automotores de hasta 3.5 toneladas métricas de uso privado. Conducir un vehículo de 4.8 toneladas exige obligatoriamente poseer Licencia Liviana o Pesada según la homologación técnica de la tarjeta de circulación. Operar un automotor con una categoría de licencia inferior a la requerida por el tonelaje del vehículo equivale legalmente a conducir sin habilitación válida para ese tipo de transporte.',
        resolvedOutcome: 'Se impone esquela de infracción muy grave al conductor por operar vehículo con licencia no autorizada para el tipo de transporte; se remite el vehículo preventivamente a custodia policial hasta que se presente un conductor habilitado con Licencia Liviana vigente; la aseguradora declina cualquier cobertura de daños por incumplimiento de las condiciones de idoneidad del conductor.'
      },
      {
        id: 'tc-u1-c2',
        title: 'Incumplimiento de Condiciones en Licencia Juvenil en Zona Rosa',
        scenario: 'Un joven de 16 años titular de Licencia Juvenil de automóvil es interceptado a las 23:30 horas sobre el Bulevar del Hipódromo (Zona Rosa) transportando a tres compañeros de colegio sin la presencia de ningún adulto en el vehículo y sin portar la constancia de fianza notarial legal.',
        legalReference: 'Reglamento General de Tránsito y Seguridad Vial Art. 86 y Art. 88; Ley de Transporte Terrestre Art. 38.',
        analysis: 'La Licencia Juvenil está legalmente condicionada por el VMT: restringe la conducción a horarios diurnos (habitualmente de 06:00 a 20:00 horas), prohíbe el transporte de pasajeros menores de edad sin custodia de un conductor adulto con licencia vigente, y su validez jurídica depende de la vigencia plena de la fianza solidaria civil otorgada por los progenitores o tutores legales.',
        resolvedOutcome: 'Suspensión preventiva inmediata de la Licencia Juvenil por 6 meses; entrega del vehículo bajo acta formal únicamente a los padres o tutores legales solidarios; imposición de multa por infracción grave y citación formal ante el Departamento de Tránsito del VMT para revisión del expediente de minoridad.'
      },
      {
        id: 'tc-u1-c3',
        title: 'Conducción con Licencia Extranjera de Turista vs Residente en Santa Tecla',
        scenario: 'Un ciudadano salvadoreño con residencia permanente en el país conduce un vehículo con placas nacionales sobre la 7.ª Avenida Sur de Santa Tecla, exhibiendo una licencia de conducir emitida en el estado de California, Estados Unidos. El conductor lleva 14 meses ininterrumpidos viviendo y laborando en El Salvador y alega que su licencia norteamericana vence dentro de dos años.',
        legalReference: 'Reglamento General de Tránsito Art. 93; Ley de Transporte Terrestre Art. 40.',
        analysis: 'La legislación de tránsito salvadoreña reconoce la validez de licencias extranjeras únicamente para turistas o diplomáticos en tránsito por un plazo improrrogable de hasta 90 días desde su último ingreso al país. Al cumplirse ese período o al adquirir residencia habitual, todo ciudadano está obligado a homologar su habilitación mediante el trámite de canje oficial de licencia extranjera ante el VMT y SERTRACEN.',
        resolvedOutcome: 'Se califica la falta como conducción sin licencia válida en el territorio nacional; se sanciona con multa por falta grave; se emplaza al infractor para que proceda en un lapso no mayor a 30 días con el trámite de canje y obtención de la Licencia Particular salvadoreña.'
      },
      {
        id: 'tc-u1-c4',
        title: 'Operación de Cabezal Articulado sin Licencia Pesada T en Sitio del Niño',
        scenario: 'En un control de pesos y dimensiones del VMT en el kilómetro 32 de la Carretera Panamericana Oeste (Sitio del Niño), se detiene a un tractocamión que remolca una cisterna con 8,000 galones de combustible. El conductor de 28 años presenta una Licencia Pesada para camiones de hasta 12 toneladas, alegando que es conductor profesional desde hace 5 años y que domina perfectamente el vehículo.',
        legalReference: 'Reglamento General de Tránsito Art. 80, 81; Normativa Técnica de Transporte Terrestre de Carga y Materiales Peligrosos.',
        analysis: 'El transporte de combinaciones vehiculares articuladas (cabezal + remolque o cisterna) y materiales peligrosos requiere estrictamente la categoría Pesada T (Articulada) y la acreditación especial de transporte de sustancias inflamables. La Licencia Pesada estándar solo autoriza automotores rígidos. Operar una unidad de doble articulación con licencia rígida compromete severamente la seguridad operacional ante el efecto tijera (jackknifing) y la inestabilidad de frenado dinámico.',
        resolvedOutcome: 'Infracción muy grave por conducción con categoría insuficiente; inmovilización inmediata de la cisterna de combustible con cepo de seguridad; sanción pecuniaria administrativa a la empresa de transporte contratante; requerimiento obligatorio de conductor con Pesada T para retirar la unidad.'
      },
      {
        id: 'tc-u1-c5',
        title: 'Caducidad de Licencia en Siniestro con Daños Materiales en Bulevar Los Próceres',
        scenario: 'Ocurre una colisión por alcance en el Bulevar Los Próceres entre un sedán y un pick-up. Al arribar la PNC-DTT a levantar la inspección técnica, se constata que el conductor del vehículo impactante porta una licencia de conducir cuya fecha de vencimiento expiró hace 4 meses. El conductor sostiene que ya canceló los derechos de renovación en línea pero no ha acudido a retirar el plástico.',
        legalReference: 'Ley de Transporte Terrestre Art. 35 y Art. 42; Reglamento General de Tránsito Art. 75.',
        analysis: 'El pago administrativo de derechos arancelarios no constituye título habilitante de conducción. La persona cuya licencia ha caducado pierde automáticamente el derecho legal a operar vehículos en vías públicas hasta que el documento oficial sea formalmente reexpedido tras aprobar los exámenes visuales y teóricos pertinentes. Frente a terceros y aseguradoras, conducir con licencia vencida invalida las pólizas de responsabilidad civil y convierte al conductor en civilmente responsable exclusivo.',
        resolvedOutcome: 'Sanción por falta grave de conducción con documento vencido; determinación técnica de responsabilidad del siniestro por impericia y falta de atención; el infractor debe responder de manera personal y directa con su patrimonio por la totalidad de los costos de reparación de ambos vehículos.'
      }
    ]
  },

  // ==========================================================================
  // UNIDAD 2: SISTEMA INTEGRAL DE SEÑALIZACIÓN VIAL
  // ==========================================================================
  {
    id: 'u2-senalizacion-vial',
    title: 'Sistema Integral de Señalización Vial',
    subtitle: 'Clasificación oficial SIECA, señalización vertical, horizontal, luminosa y prelación jerárquica de dispositivos',
    icon: 'Compass',
    substantiveTheory: `El sistema de señalización vial en El Salvador constituye el lenguaje visual universal y vinculante que regula el flujo del tránsito, previene siniestros y optimiza la capacidad operativa de la red vial nacional. Su diseño, dimensiones, colores, retrorreflectividad y ubicación física se encuentran estrictamente homologados bajo el Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito, adoptado formalmente por el Viceministerio de Transporte (VMT) y el Consejo Sectorial de Ministros de Transporte de Centroamérica (COMITRAN/SIECA).

La prelación jerárquica de los elementos de control de tránsito en la vía pública salvadoreña establece un orden invariable de obediencia:
1. En el peldaño supremo se sitúan las órdenes directas, señales gestuales y acústicas emitidas por los agentes de la División de Tránsito Terrestre de la PNC, las cuales prevalecen sobre cualquier otro dispositivo o señal existente en el lugar.
2. En segundo lugar, las señales transitorias y balizamiento de obras de construcción o mantenimiento vial (color naranja reflectivo).
3. En tercer término, los semáforos luminosos vehiculares y peatonales.
4. En cuarto nivel, las señales verticales fijas de tránsito.
5. En el peldaño basal, la señalización horizontal marcada sobre el pavimento o cordones de calzada.

La señalización vertical se subdivide en tres familias normativas fundamentales:

A. Señales Reglamentarias (Serie R): Tienen por finalidad transmitir órdenes, mandatos imperativos, limitaciones o prohibiciones legales específicas cuyo incumplimiento constituye infracción tipificada en la ley. Su diseño característico presenta geometría circular con fondo blanco, orla perimetral roja y pictogramas negros, con dos notables excepciones geométricas de máxima prioridad: la señal R-1 "Alto" (octógono rojo con letras blancas) y la señal R-2 "Ceda el Paso" (triángulo equilátero invertido con orla roja y fondo blanco). Entre las más críticas figuran la R-30 "Velocidad Máxima Permitida", la R-8 "Prohibido Estacionar", y las señales de giro o sentido único obligatorio.

B. Señales Preventivas (Serie P): Tienen la misión sustantiva de advertir a los usuarios sobre la proximidad de condiciones geométricas peligrosas, cambios súbitos en el trazado de la calzada o riesgos físicos que exigen una disminución precautoria de la velocidad y un incremento de la atención visual. Su morfología estándar es romboidal (cuadrado colocado con una de sus diagonales en posición vertical), con fondo amarillo vial de alta reflectividad, orla y símbolos en color negro mate. Ejemplos de alta ocurrencia en el país son: P-1 "Curva Peligrosa", P-4 "Pendiente Pronunciada", P-15 "Zona Escolar o Cruce de Peatones" y P-22 "Reductor Físico de Velocidad (Túmulo)".

C. Señales Informativas (Serie I): Orientan, identifican y guían al conductor a lo largo de su itinerario, proporcionando datos sobre kilometrajes, destinos intermedios, nomenclatura urbana, cruces departamentales y disponibilidad de servicios esenciales (hospitales, estaciones de combustible, áreas de descanso, sitios turísticos). Emplean fondos de color azul (servicios y lugares de interés) o verde vial reflectivo (destinos y distancias en carreteras troncales).

Por su parte, la señalización horizontal comprende todas las marcas viales pintadas o adheridas al pavimento:
- Línea Continua Simple o Doble Amarilla: Delimita sentidos opuestos de circulación en vías bidireccionales. Establece una prohibición absoluta, estricta e infranqueable de adelantamiento o cambio de carril con invasión del carril contrario. Rebasar sobre doble línea amarilla constituye una de las infracciones con mayor índice de letalidad frontal en las carreteras nacionales.
- Línea Discontinua o Segmentada: Autoriza maniobras de adelantamiento y transiciones de carril, siempre y cuando se verifique previamente la ausencia de riesgo mediante los espejos retrovisores y se señalice la maniobra con al menos 30 metros de antelación.
- Línea Combinada (Continua y Discontinua paralelas): Concede el derecho de adelantamiento exclusivamente a los vehículos que circulan por el lado de la línea discontinua, mientras que lo prohíbe tajantemente a quienes transitan por el lado de la continua.
- Cuadrícula o Cajón Amarillo en Intersecciones ("Yellow Box"): Prohíbe terminantemente detenerse o bloquear el área de cruce vehicular delimitada por la cuadrícula, aun cuando el semáforo se encuentre en fase verde. Si el conductor prevé que no podrá despejar por completo la intersección antes de detenerse, debe permanecer detrás de la línea de parada.

En cuanto a los semáforos, la luz roja intermitente equivale a una señal de Alto completa (detención total de las 4 ruedas antes de la línea de retención y reanudación de la marcha solo cuando la vía transversal esté completamente expedita), mientras que la luz amarilla intermitente obliga a reducir la velocidad y cruzar con extrema precaución sin necesidad de detenerse por completo salvo que crucen peatones.`,
    practicalCases: [
      {
        id: 'tc-u2-c1',
        title: 'Bloqueo de Cajón Amarillo con Luz Verde en Alameda Roosevelt',
        scenario: 'En la intersección de la Alameda Roosevelt y la 43.ª Avenida Sur de San Salvador, un conductor observa que la luz del semáforo está en verde. Debido al congestionamiento vehicular adelante, ingresa a la intersección y queda detenido en medio del cajón amarillo con franjas diagonales cuando la luz cambia a rojo, obstruyendo por completo el flujo vehicular de la vía transversal.',
        legalReference: 'Reglamento General de Tránsito Art. 128 y Art. 132; Manual Centroamericano SIECA.',
        analysis: 'El cajón amarillo marcado en el pavimento establece una prohibición explícita de ocupación estacionaria. La luz verde del semáforo confiere derecho de paso únicamente si el espacio posterior a la intersección permite el cruce total y fluido del vehículo. Ingresar a una intersección sabiendo o debiendo prever que se quedará bloqueado sobre la cuadrícula constituye una violación flagrante a la fluidez vial y acarrea sanción por obstrucción premeditada del tránsito.',
        resolvedOutcome: 'Imposición de esquela de infracción grave por bloqueo de intersección con señalización restrictiva; el conductor es obligado a despejar inmediatamente el área asistido por un agente de tránsito; advertencia sobre suspensión de licencia por reincidencia reiterada.'
      },
      {
        id: 'tc-u2-c2',
        title: 'Rebase sobre Doble Línea Continua en Carretera a Los Planes de Renderos',
        scenario: 'En el tramo ascendente con curvas sinuosas de la Carretera a Los Planes de Renderos, un conductor acelera su vehículo para rebasar a un camión cisterna que circula despacio, cruzando de forma íntegra una doble línea continua amarilla. Durante la maniobra de adelantamiento, obliga a un autobús que descendía en sentido contrario a frenar de emergencia y salirse parcialmente a la orilla para evitar una colisión frontal catastrófica.',
        legalReference: 'Ley de Transporte Terrestre Art. 67; Reglamento General de Tránsito Art. 165 y Art. 172.',
        analysis: 'La doble línea continua amarilla representa un muro legal invisible pero absoluto. Su presencia indica que la distancia de visibilidad de parada y adelantamiento es nula debido a la curvatura horizontal o pendiente vertical. Invadir el sentido opuesto en estas circunstancias constituye una conducta temeraria de altísimo riesgo que expone directamente la vida e integridad física de terceros.',
        resolvedOutcome: 'Infracción muy grave por adelantamiento indebido en curva con señalización restrictiva continua; imposición de multa máxima; remisión del caso a la Fiscalía si se configuran indicios de conducción temeraria según el Código Penal; asignación de puntos de demérito en el expediente del infractor.'
      },
      {
        id: 'tc-u2-c3',
        title: 'Interpretación Errónea de Semáforo en Rojo Intermitente en Santa Ana',
        scenario: 'A las 02:00 horas, en el centro histórico de Santa Ana, el sistema semafórico de una intersección opera en modalidad intermitente nocturna: luz roja intermitente en la vía secundaria y luz amarilla intermitente en la vía principal. Un conductor sobre la vía secundaria únicamente desacelera ligeramente a 25 km/h y continúa recto, colisionando en ángulo recto con un vehículo que avanzaba por la vía principal.',
        legalReference: 'Reglamento General de Tránsito Art. 140, numerales 2 y 3; Manual SIECA.',
        analysis: 'La luz roja intermitente tiene la equivalencia legal e imperativa unívoca de una señal vertical de Alto (R-1). Exige la parada total y completa de la unidad antes de la línea de cruce peatonal o de retención, la verificación visual activa en ambos sentidos y el avance solo cuando la vía esté despejada. La luz amarilla intermitente en la vía principal advierte precaución, pero mantiene la prelación de paso frente a la luz roja.',
        resolvedOutcome: 'Dictamen de responsabilidad plena del conductor de la vía secundaria por omitir la detención obligatoria impuesta por el rojo intermitente; decomiso de la tarjeta de circulación por siniestro con daños materiales; pago de la totalidad de las lesiones y pérdidas patrimoniales ocasionadas.'
      },
      {
        id: 'tc-u2-c4',
        title: 'Desobediencia a Señal de Agente de Tránsito con Semáforo en Verde',
        scenario: 'En la intersección del Bulevar de Los Héroes y Calle Gabriela Mistral, un agente de la PNC-DTT realiza señales gestuales con la palma en alto y silbato sonoro ordenando detener el tráfico que circula de sur a norte para dar paso prioritario a una caravana de auxilio médico. Un automovilista ignora la orden del policía y avanza porque el semáforo vehicular frente a él mostraba luz verde.',
        legalReference: 'Reglamento General de Tránsito Art. 115 y Art. 118; Ley de Transporte Terrestre Art. 64.',
        analysis: 'La jerarquía vial establece de manera categórica que las indicaciones y órdenes presenciales de los agentes de la autoridad de tránsito anulan, prevalecen y sustituyen cualquier indicación mecánica o luminosa emitida por semáforos o señales verticales. El conductor que atiende a la luz del semáforo ignorando la señal directa del policía comete desacato directo a la autoridad pública de tránsito.',
        resolvedOutcome: 'Retención inmediata del conductor en el lugar; imposición de esquela por infracción muy grave de desobediencia a las señales de la autoridad de tránsito; retiro preventivo de la licencia de conducir para informe administrativo ante la Dirección General de Tránsito.'
      },
      {
        id: 'tc-u2-c5',
        title: 'Estacionamiento en Zona de Cordón Rojo frente a Entrada de Emergencias',
        scenario: 'Un conductor deja estacionado su vehículo con las luces intermitentes encendidas durante 25 minutos frente a un cordón pintado de color rojo continuo y con señal vertical R-8 (Prohibido Estacionar) con leyenda accesoria "Zona de Ambulancias", junto a la entrada del Hospital Rosales en San Salvador, alegando que dejó las luces intermitentes ("luces de parqueo") y que se trataba de una urgencia personal.',
        legalReference: 'Reglamento General de Tránsito Art. 144, Art. 145 y Art. 180; Ley de Transporte Terrestre Art. 74.',
        analysis: 'El cordón pintado de rojo señala restricción absoluta y permanente de estacionamiento y detención vehicular durante las 24 horas del día. Las luces intermitentes de advertencia no otorgan ninguna exención legal ni convierten un estacionamiento prohibido en permitido. Obstruir accesos de emergencia médica atenta directamente contra el interés público y el auxilio oportuno a enfermos graves.',
        resolvedOutcome: 'Remoción inmediata del vehículo mediante servicio de grúa municipal hacia el predio de retención vehicular del VMT; imposición de multa por infracción gravísima de estacionamiento indebido; cobro obligatorio de los costos de remolque y estadía en predio a cargo exclusivo del propietario infractor.'
      }
    ]
  },

  // ==========================================================================
  // UNIDAD 3: NORMAS DE CIRCULACIÓN, EJES VIALES Y PREFERENCIA DE PASO
  // ==========================================================================
  {
    id: 'u3-preferencia-paso',
    title: 'Normas de Circulación, Ejes Viales y Preferencia de Paso',
    subtitle: 'Prioridad de paso en intersecciones, rotondas de varios carriles, ejes preferenciales e incorporaciones viales',
    icon: 'Compass',
    substantiveTheory: `Las normas de circulación vial en El Salvador constituyen el conjunto de preceptos técnicos y legales destinados a garantizar un flujo de tránsito armónico, ordenado y predecible, reduciendo a su mínima expresión las probabilidades de colisiones por conflicto de trayectorias. El conocimiento y respeto riguroso de las reglas de preferencia de paso es el pilar maestro de la seguridad vial tanto en entornos urbanos densos como en carreteras interestatales y autopistas de alta velocidad.

En las intersecciones no semaforizadas y desprovistas de señales de control vertical (Alto o Ceda el Paso), rigen tres principios generales de prelación estipulados en la Ley de Transporte Terrestre y el Reglamento General de Tránsito:
1. En un cruce de vías de distinta jerarquía, el vehículo que circula por la vía principal pavimentada de mayor ancho o volumen de tránsito goza de preferencia absoluta sobre el que transita por una vía secundaria o de superficie no afirmada.
2. En intersecciones de vías de idéntica jerarquía e igualdad de condiciones, tiene derecho preferente de paso el vehículo que se aproxima por la derecha del conductor.
3. El vehículo que continúa en línea recta sobre su propio carril tiene absoluta preferencia sobre cualquier vehículo que pretenda ejecutar un giro hacia la izquierda o hacia la derecha, cortando la trayectoria de la corriente vehicular directa.

El régimen de circulación en glorietas, redondeles o rotondas representa una de las materias evaluadas con mayor rigurosidad en los exámenes oficiales del VMT debido a su alta incidencia de siniestralidad. El Artículo 168 del Reglamento General de Tránsito salvadoreño estipula la Regla de Oro Invariable de las Rotondas:
"Todo conductor que se aproxima a un redondel o rotonda está en la obligación legal estricta de ceder el paso a todos los vehículos que ya se encuentran circulando dentro de la calzada anular del mismo, independientemente del carril en que lo hagan o del tipo de vehículo de que se trate".

La técnica de posicionamiento y selección de carriles dentro de una rotonda multicarril (como los redondeles Masferrer, Beethoven, Luceiro, Integración o Naciones Unidas) exige una disciplina milimétrica:
- Para salir en la primera salida inmediata (giro a la derecha): El conductor debe aproximarse al redondel situándose obligatoriamente en el carril exterior derecho, señalizar con la luz direccional derecha con anticipación e incorporarse al anillo cediendo el paso, para luego abandonar la rotonda por el carril derecho.
- Para seguir en línea recta (segunda salida): El conductor puede acceder por el carril exterior o central, manteniéndose en su trayectoria sin cruzar carriles y activando la luz direccional derecha inmediatamente después de rebasar la salida previa a la que utilizará.
- Para tomar la tercera salida o realizar un retorno completo de 360 grados (giros a la izquierda): El conductor debe ingresar obligatoriamente por el carril interior (izquierdo), circular dentro del anillo interior y realizar la transición controlada hacia los carriles exteriores con suficiente anticipación mediante el uso continuo de la luz direccional, cediendo el paso a los vehículos que circulen en los carriles adyacentes. Está terminantemente prohibido abandonar el redondel cortando transversalmente la trayectoria de los vehículos que circulan por el carril exterior.

Los Ejes Viales Preferenciales son arterias estratégicas designadas formalmente por el VMT en el Área Metropolitana de San Salvador y principales cabeceras para priorizar el transporte masivo y la movilidad troncal (tales como la Alameda Juan Pablo II, el Bulevar Venezuela, la 49.ª Avenida Sur y la Alameda Manuel Enrique Araujo). En estas vías rige una prohibición estricta de estacionamiento, maniobras de carga y descarga en horarios no autorizados y giros indebidos a la izquierda donde no exista flecha semafórica habilitante.

En las vías de acceso controlado y autopistas, la incorporación a través de carriles de aceleración exige al conductor utilizar la totalidad de la longitud del carril para igualar la velocidad de crucero del tráfico troncal, sin obligar a los vehículos que ya circulan por la vía rápida a frenar o modificar bruscamente su rumbo. Quien se incorpora debe ceder el paso.

Por último, los vehículos de auxilio y emergencia en servicio activo (ambulancias del SEM y cuerpos de socorro, unidades de bomberos y patrullas de la PNC) con sirena audible y luces rotativas o estroboscópicas encendidas tienen preferencia absoluta y prioritaria sobre todos los demás usuarios de la vía, incluyendo el paso en semáforos en rojo previa desaceleración de seguridad. Todos los conductores están obligados a orillarse de inmediato a la derecha de la calzada para abrir un corredor de emergencia expedito.`,
    practicalCases: [
      {
        id: 'tc-u3-c1',
        title: 'Corte de Trayectoria en Salida Intempestiva de Redondel Masferrer',
        scenario: 'En el Redondel Masferrer de la Colonia Escalón, un automóvil circula por el carril interior más próximo a la isleta central a 40 km/h. Al percatarse de que está pasando su salida hacia el Paseo General Escalón, gira intempestivamente hacia la derecha cortando dos carriles simultáneamente, impactando en el costado izquierdo a un vehículo que circulaba correctamente por el carril exterior para continuar hacia la Avenida Jerusalén.',
        legalReference: 'Reglamento General de Tránsito Art. 168 y Art. 169; Ley de Transporte Terrestre Art. 65.',
        analysis: 'El conductor del carril interior cometió una infracción técnica grave al ejecutar un abandono intempestivo de rotonda sin haber ganado previamente el carril exterior de egreso. El vehículo del carril exterior tenía derecho legal a continuar girando dentro del anillo sin ser interceptado. La maniobra correcta ante la pérdida de la salida consistía en dar una vuelta completa adicional al redondel para posicionarse con seguridad.',
        resolvedOutcome: 'Fallo de responsabilidad total en contra del conductor del carril interior por maniobra de giro prohibida y corte de vía; pago integral de los daños provocados; multa por conducción descuidada de acuerdo con el pliego de tarifas del VMT.'
      },
      {
        id: 'tc-u3-c2',
        title: 'Omisión de Ceda el Paso en Acceso a Redondel Integración',
        scenario: 'Un automovilista que se aproxima al Redondel Integración procedente de Apopa ingresa a la rotonda a 55 km/h sin frenar ante la señal horizontal y vertical de Ceda el Paso, colisionando con el guardafango delantero de un autobús de transporte interurbano que ya navegaba dentro del anillo en dirección hacia Quezaltepeque.',
        legalReference: 'Reglamento General de Tránsito Art. 168; Ley de Transporte Terrestre Art. 66.',
        analysis: 'El artículo 168 establece la preferencia incuestionable de quien ya se encuentra dentro del redondel. La presencia de señalización R-2 obliga al conductor que entra a ralentizar la marcha o detenerse por completo si el flujo interior no le permite una inserción holgada sin alterar la velocidad ni trayectoria del que ya circula. Ingresar a alta velocidad violando la prioridad constituye imprudencia temeraria evidente.',
        resolvedOutcome: 'Resolución de culpabilidad administrativa para el automovilista ingresante; sanción por desacato de señal reglamentaria R-2; retención de la tarjeta de circulación hasta la liquidación de las indemnizaciones periciales a la cooperativa de transporte.'
      },
      {
        id: 'tc-u3-c3',
        title: 'Incorporación Abrupta desde Carril de Aceleración en Bulevar Monseñor Romero',
        scenario: 'Una camioneta accede al Bulevar Monseñor Romero desde la rampa de Los Próceres. En lugar de utilizar los 180 metros del carril de aceleración para alcanzar los 80 km/h que rigen en la autopista, cruza la línea blanca continua a apenas 35 km/h hacia el carril derecho de la autopista, obligando a un camión cisterna a frenar de forma violenta y provocando que un sedán que venía detrás del camión colisione por alcance con este último.',
        legalReference: 'Reglamento General de Tránsito Art. 155, Art. 156 y Art. 170.',
        analysis: 'El carril de aceleración está diseñado biomecánicamente para sincronizar la velocidad del vehículo entrante con la corriente principal antes de la maniobra de convergencia. Incorporarse a baja velocidad cruzando prematuramente las marcas viales continuas viola el principio de no interferencia con el flujo prioritario y crea un diferencial de velocidad crítico que desencadena colisiones múltiples.',
        resolvedOutcome: 'Se determina que la causa eficiente del siniestro múltiple fue la maniobra perturbadora del conductor de la camioneta al invadir la autopista sin ceder el paso reglamentario; se le impone la responsabilidad civil subsidiaria por los daños ocasionados al sedán y al camión.'
      },
      {
        id: 'tc-u3-c4',
        title: 'Giro a la Izquierda en Intersección Urbana de Doble Sentido en San Miguel',
        scenario: 'En la Avenida Roosevelt Sur de San Miguel, un conductor detenido en el carril izquierdo con sentido al centro inicia un giro hacia la izquierda para entrar a un centro comercial, atravesando los dos carriles del sentido contrario. Una motocicleta que descendía en línea recta con su luz delantera encendida colisiona contra la puerta del copiloto del vehículo que giraba.',
        legalReference: 'Ley de Transporte Terrestre Art. 68; Reglamento General de Tránsito Art. 160 y Art. 162.',
        analysis: 'Cualquier maniobra de giro que implique cruzar la calzada del sentido opuesto pierde automáticamente toda preferencia de paso frente al tráfico directo. El conductor que gira a la izquierda tiene la obligación indelegable de permanecer detenido con las ruedas rectas hasta constatar que no se aproxima ningún vehículo en un radio suficiente que garantice el cruce despejado.',
        resolvedOutcome: 'Responsabilidad civil y pericial absoluta del conductor del automóvil por invasión indebida del carril preferente de la motocicleta; remisión a sede fiscal por lesiones culposas en perjuicio del motociclista; suspensión de la licencia de conducir mientras dure el proceso penal.'
      },
      {
        id: 'tc-u3-c5',
        title: 'Obstrucción de Corredor de Emergencia para Ambulancia en Carretera de Oro',
        scenario: 'En la Carretera de Oro a la altura de Ciudad Futura, en medio de una fuerte retención vehicular, una ambulancia de Cruz Roja Salvadoreña con sirena de emergencia activa y luces estroboscópicas traslada a una paciente en código rojo por politraumatismo. Un automovilista rehúsa apartarse a la derecha aduciendo que perderá su posición en la fila, manteniéndose durante 800 metros delante de la unidad de socorro.',
        legalReference: 'Reglamento General de Tránsito Art. 120, Art. 121; Código Penal Art. 147-E.',
        analysis: 'Los vehículos de auxilio médico y policial tienen derecho preferente absoluto de tránsito cuando operan en función de emergencia activa. Los conductores precedentes están obligados por ley a facilitar el adelantamiento desplazándose inmediatamente a la berma o carril derecho y deteniéndose si fuera necesario. La obstrucción intencional o negligente de un servicio de emergencia agrava la responsabilidad penal y administrativa.',
        resolvedOutcome: 'Intervención inmediata de una patrulla de la PNC-DTT que custodiaba el tramo; imposición de multa muy grave por obstrucción de vehículo de emergencia; apertura de expediente sancionatorio por vulneración de la seguridad vial y retención de la licencia del conductor infractor.'
      }
    ]
  },

  // ==========================================================================
  // UNIDAD 4: VELOCIDADES REGLAMENTARIAS, DISTANCIAS Y MANIOBRAS VIALES
  // ==========================================================================
  {
    id: 'u4-velocidades-distancias',
    title: 'Velocidades Reglamentarias, Distancias de Seguridad y Maniobras Viales',
    subtitle: 'Límites de velocidad en zonas escolares, urbanas y carreteras, cálculo de detención y adelantamiento seguro',
    icon: 'Gauge',
    substantiveTheory: `La velocidad es la variable física determinante en la siniestralidad vial: condiciona directamente la distancia necesaria para detener un automotor, reduce el campo de visión periférica del conductor (efecto túnel de velocidad) y multiplica de manera exponencial la energía cinética liberada en cualquier impacto mecánico, según la ecuación física fundamental de la energía: Energía Cinética = 1/2 · masa · velocidad al cuadrado. Por tanto, duplicar la velocidad cuadruplica la energía de choque y reduce drásticamente las probabilidades biológicas de supervivencia humana en caso de colisión o atropello.

El marco legal salvadoreño estipula en el Reglamento General de Tránsito (Arts. 145-149) los límites máximos permitidos de velocidad para condiciones climatológicas favorables y pavimento seco:
- Zonas Escolares y Entornos Hospitalarios: Límite estricto de 20 km/h en horarios de ingreso y salida escolar o cuando exista presencia evidente de estudiantes y peatones. A 20 km/h, la distancia de detención total de un vehículo liviano es de escasos 6 a 8 metros y el riesgo de letalidad en caso de atropello es inferior al 5%; a 50 km/h la probabilidad de muerte de un infante atropellado asciende a más del 85%.
- Zonas Urbanas Residenciales y Comerciales: Velocidad máxima de 40 km/h a 50 km/h según la señalización expresa del tramo. En calles angostas o intersecciones con visibilidad restringida, la velocidad precautoria debe ajustarse a no más de 30 km/h.
- Carreteras Rurales y Vías Interurbanas de un Carril por Sentido: Límite de 70 km/h a 80 km/h para vehículos particulares livianos, y 60 km/h para unidades de transporte pesado y colectivo.
- Autopistas Nacionales y Corredores Expresos Multicarril: Máximo de 90 km/h en tramos rectilíneos autorizados (v. gr., Bulevar Monseñor Romero o Carretera a Comalapa).
- Velocidades Mínimas: Conducir a una velocidad anormalmente reducida (menos de la mitad del límite máximo estipulado) sin causa justificada en autopistas constituye una infracción legal por generar obstáculos móviles imprevistos y forzar frenadas de alcance en el tráfico rápido.

La Distancia de Seguridad o de Seguimiento es el intervalo espacial y temporal que todo conductor debe mantener permanentemente respecto al vehículo que le precede. Esta distancia se fundamenta en la física de la detención vehicular:
Distancia Total de Parada = Distancia de Reacción + Distancia de Frenado Mecánico.
- La Distancia de Reacción es la recorrida por el vehículo durante el tiempo que transcurre desde que los ojos del conductor perciben el obstáculo imprevisto hasta que el pie presiona efectivamente el pedal de freno. En un conductor atento y sobrio, este lapso oscila entre 0.75 y 1.0 segundo. A 90 km/h, un vehículo avanza 25 metros cada segundo a ciegas antes de que comience el frenado físico.
- La Distancia de Frenado es el trayecto recorrido con el pedal accionado a fondo hasta que las ruedas detienen la masa del vehículo. Depende del estado de los neumáticos, la fricción del pavimento y la eficiencia del sistema ABS.

Para garantizar un margen de vida suficiente, se aplica la Regla de los 3 Segundos: Tomar como referencia un punto fijo en la vía (un árbol, poste o puente). Cuando el vehículo delantero pasa junto al punto, se cuenta mentalmente "mil uno, mil dos, mil tres". Si el vehículo propio alcanza el punto de referencia antes de finalizar la cuenta, la distancia es insuficiente y debe incrementarse de inmediato. En calzadas mojadas por lluvia, gravilla suelta o conducción nocturna, la distancia debe duplicarse a 5 o 6 segundos de separación.

El Rebase o Adelantamiento Reglamentario exige verificar cinco condiciones concurrentes de seguridad:
1. Cerciorarse de que no existe prohibición vertical ni horizontal (prohibido rebasar con línea continua simple o doble, en curvas, pendientes sin visibilidad, túneles o cruces peatonales).
2. Constatar por los tres espejos retrovisores y el ángulo muerto que ningún vehículo ha iniciado a su vez el adelantamiento por detrás.
3. Señalizar la maniobra con la luz direccional izquierda con un mínimo de 30 metros de anticipación en ciudad y 50 metros en carretera abierta.
4. Asegurar que el carril opuesto de rebase está despejado en una distancia suficiente que permita retornar a la derecha sin forzar al adelantado a reducir su marcha.
5. Regresar al carril derecho solo cuando en el espejo retrovisor interior central sea claramente visible la parte frontal completa del vehículo sobrepasado, apagando la luz direccional tras culminar el retorno.`,
    practicalCases: [
      {
        id: 'tc-u4-c1',
        title: 'Exceso Crítico de Velocidad frente a Complejo Educativo en San Marcos',
        scenario: 'A las 12:15 horas, en horario de salida de estudiantes sobre la Carretera a San Marcos, un vehículo sedán transita a 68 km/h en un tramo debidamente balizado con señalización preventiva P-15 (Zona Escolar) y reglamentaria R-30 (Límite 20 km/h). Al cruzar un grupo de escolares asistidos por una docente, el conductor no logra detenerse a tiempo y derrapa durante 28 metros, frenando a menos de un metro de los peatones.',
        legalReference: 'Reglamento General de Tránsito Art. 145 y Art. 146; Ley de Transporte Terrestre Art. 67.',
        analysis: 'El artículo 145 fija un límite inflexible de 20 km/h en zonas escolares en horario lectivo. Circular a 68 km/h en un área de alta vulnerabilidad peatonal triplica con creces la velocidad legal permitida y multiplica por nueve la energía de impacto potencial. La huella de frenado de 28 metros acredita pericialmente la imposibilidad de detención segura y la negligencia deliberada frente a la señalización presente.',
        resolvedOutcome: 'Imposición de esquela de infracción muy grave por exceso temerario de velocidad en zona escolar; retiro inmediato de la licencia de conducir con suspensión por 1 año; remisión de oficio a la fiscalía para investigación por conducción temeraria sin resultado de muerte.'
      },
      {
        id: 'tc-u4-c2',
        title: 'Colisión por Alcance en Cadena por Ignorar la Regla de Distancia en Los Próceres',
        scenario: 'En el carril rápido del Bulevar Los Próceres con flujo denso a 70 km/h, un vehículo mantiene una separación de apenas 3 metros respecto al automóvil precedente. Cuando este último realiza una frenada de emergencia debido a un neumático reventado más adelante, el vehículo seguidor impacta violentamente su parte trasera, proyectándolo contra una camioneta que lo antecedía.',
        legalReference: 'Reglamento General de Tránsito Art. 166; Ley de Transporte Terrestre Art. 64.',
        analysis: 'A 70 km/h, un automóvil recorre 19.4 metros por segundo. Mantener 3 metros de distancia equivale a un tiempo de respuesta de escasos 0.15 segundos, biológicamente incompatible con el tiempo de reacción humano promedio (0.75 a 1 s). El principio de distancia prudencial impone que todo conductor debe conservar una separación que le permita detenerse ante cualquier frenada brusca del predecesor sin colisionar.',
        resolvedOutcome: 'Determinación pericial de culpabilidad total para el conductor del vehículo que seguía sin distancia reglamentaria; imposición de multa por no guardar distancia de seguridad; condena civil al pago de las reparaciones de los tres automotores involucrados.'
      },
      {
        id: 'tc-u4-c3',
        title: 'Adelantamiento por el Hombro en Congestionamiento de Carretera a San Luis Talpa',
        scenario: 'Ante una congestión dominical en la Autopista hacia la Costa del Sol / San Luis Talpa, el conductor de un vehículo todo terreno decide salirse de los carriles pavimentados y avanzar a 60 km/h por el hombro de tierra y balasto para adelantar a 40 vehículos detenidos, atropellando a un ciclista que circulaba reglamentariamente por el borde exterior de la calzada.',
        legalReference: 'Reglamento General de Tránsito Art. 153, Art. 171 y Art. 172; Ley de Transporte Terrestre Art. 65.',
        analysis: 'El hombro, arcén o berma lateral de la carretera está destinado con carácter de exclusividad a detenciones de emergencia, vehículos averiados o tránsito peatonal/ciclista precautorio. Utilizar el hombro como carril de adelantamiento o vía de escape ante embotellamientos constituye una infracción flagrante a las normas de circulación y una conducta de imprudencia punible.',
        resolvedOutcome: 'Detención del conductor bajo cargos penales de lesiones culposas y conducción temeraria; decomiso del automotor; revocación judicial del permiso de conducción; responsabilidad civil extracontractual por daños y gastos médicos de la víctima.'
      },
      {
        id: 'tc-u4-c4',
        title: 'Rebase Ciego en Cambio de Rasante en Carretera Longitudinal del Norte',
        scenario: 'En un tramo montañoso con curva vertical (pendiente ciega) de la Carretera Longitudinal del Norte, Chalatenango, el conductor de un pick-up acelera para sobrepasar a un camión de carga pesada sin poder observar si viene tráfico de bajada. A mitad de la maniobra se encuentra de frente con un automóvil familiar; ambos conductores ejecutan maniobras evasivas desesperadas, volcando el pick-up en la cuneta lateral.',
        legalReference: 'Reglamento General de Tránsito Art. 165 y Art. 172, literal d; Ley de Transporte Terrestre Art. 67.',
        analysis: 'El rebase en curvas verticales, crestas o cambios de rasante donde la visualización de la calzada no exceda con certeza los 300 metros está terminantemente prohibido por la física elemental de la cinemática vial. Al no disponer de visibilidad de parada, el conductor asume a título de dolo eventual el riesgo inminente de una colisión frontal destructiva.',
        resolvedOutcome: 'Sanción administrativa con multa de máxima cuantía por adelantamiento en cambio de rasante sin visibilidad; calificación de pérdida total del vehículo sin cobertura de seguro de daños propios por negligencia inexcusable tipificada en póliza.'
      },
      {
        id: 'tc-u4-c5',
        title: 'Velocidad Anormalmente Reducida en Carril Izquierdo de Autopista a Comalapa',
        scenario: 'Un automóvil particular circula a 30 km/h sobre el carril izquierdo (destinado a rebase y alta velocidad) de la Autopista al Aeropuerto Internacional (Comalapa), cuya velocidad máxima autorizada es de 90 km/h y la mínima de 50 km/h. La lentitud de la unidad genera maniobras continuas de frenado imprevisto y cambios bruscos de carril por la derecha por parte de vehículos rápidos.',
        legalReference: 'Reglamento General de Tránsito Art. 148; Ley de Transporte Terrestre Art. 64.',
        analysis: 'El artículo 148 prohíbe entorpecer el tránsito marchando a una velocidad anormalmente reducida respecto al flujo reglamentario del corredor. El carril izquierdo debe reservarse prioritariamente para maniobras de adelantamiento y velocidades de crucero. Circular a baja velocidad en el carril rápido sin avería mecánica justificada incrementa el riesgo de colisiones por alcance y congestión artificial.',
        resolvedOutcome: 'Intervención de patrulla vial del VMT; orden de desplazamiento inmediato al carril derecho; emisión de esquela de infracción por transitar a velocidad menor que la mínima legal en autopista de flujo libre.'
      }
    ]
  },

  // ==========================================================================
  // UNIDAD 5: CONDUCCIÓN EN CONDICIONES ADVERSAS Y MANEJO DEFENSIVO
  // ==========================================================================
  {
    id: 'u5-condiciones-adversas',
    title: 'Conducción en Condiciones Adversas y Manejo Defensivo Psicométrico',
    subtitle: 'Hidroplaneo, neblina, manejo nocturno, bajadas prolongadas, factores humanos e inteligencia emocional al volante',
    icon: 'ShieldAlert',
    substantiveTheory: `La conducción defensiva es la filosofía operacional y técnica que enseña a manejar para salvar vidas, tiempo y dinero, a pesar de las condiciones reinantes a nuestro alrededor y de las acciones incorrectas de los demás usuarios de la vía. En El Salvador, donde conviven una topografía montañosa escarpada, temporadas de lluvias torrenciales tropicales, densas neblinas en pasos de cordillera y una alta densidad de tráfico vehicular, el dominio de las técnicas de manejo en situaciones adversas es un requisito insoslayable para todo aspirante a licencia de conducir.

El Hidroplaneo o "Aquaplaning" representa uno de los fenómenos dinámicos más letales sobre pavimento mojado. Ocurre cuando un automotor transita a una velocidad tal que la película de agua acumulada sobre la calzada supera la capacidad de drenaje y evacuación hidrodinámica de los surcos del neumático (cuya profundidad mínima legal debe ser de al menos 1.6 mm a 2.0 mm). En tales circunstancias, el agua ejerce una cuña de presión que eleva físicamente el neumático sobre la cinta asfáltica: el vehículo deja de hacer contacto con el suelo y flota sin control alguno sobre el agua, perdiendo el conductor toda capacidad de dirección, tracción y frenado.
La maniobra defensiva obligatoria ante un hidroplaneo es:
1. Mantener la calma y jamás pisar bruscamente el pedal de freno (hacerlo bloquearía las ruedas y causaría un trompo incontrolable).
2. No girar el volante con violencia; conservarlo recto y firme apuntando a la trayectoria segura.
3. Soltar suave y progresivamente el acelerador para que la resistencia aerodinámica e hidrodinámica reduzca la velocidad del vehículo de manera natural hasta que los neumáticos rompan la película líquida y retomen tracción con el pavimento.

La Conducción con Neblina Densa (frecuente en El Boquerón, Los Naranjos o la Carretera a La Palma):
- Regla Invariable de Iluminación: Utilizar exclusivamente luces bajas y faros neblineros auxiliares. Está formalmente prohibido encender las luces altas, dado que las microgotas de agua en suspensión actúan como millones de prismas refractivos que rebotan la luz directamente hacia los ojos del conductor, generando un muro blanco cegador ("efecto espejo").
- Reducir la velocidad a un nivel en que la distancia de visibilidad sea siempre superior a la distancia de frenado total, y guiarse visualmente por las marcas reflectivas blancas de la orilla derecha de la calzada.

La Conducción en Descenso Prolongado de Montaña (v. gr., tramo Los Chorros de la Carretera Panamericana o bajada de Huizúcar):
- Peligro Crítico de Fading Térmico: Frenar constantemente durante una bajada prolongada somete a los discos y pastillas de freno a temperaturas superiores a los 600 °C. Este sobrecalentamiento extremo descompone el material de fricción y hierve el líquido de frenos (generando burbujas de gas compresibles en el circuito hidráulico), anulando por completo la capacidad de frenado del vehículo ("pedal esponjoso").
- Regla Defensiva de Freno de Motor: Jamás descender en punto neutro ni con el pedal del embrague presionado. Se debe enganchar una marcha baja adecuada (segunda o tercera velocidad en cajas manuales, o modo "L", "2" o secuencial en transmisiones automáticas) para que la compresión interna del motor retenga naturalmente el peso del vehículo, limitando el uso del freno de pie a toques intermitentes de regulación.

El Eje Psicométrico y los Factores Humanos al Volante:
La conducción de vehículos es una tarea esencialmente psicomotora y cognitiva en la que más del 90% de la información es percibida a través de la visión y procesada por el cerebro antes de ejecutar una acción física. Tres grandes enemigos humanos degradan esta capacidad:
1. Distracciones Digitales: El uso del teléfono celular para mensajería o llamadas aparta la vista de la vía durante un promedio de 4 a 5 segundos (a 80 km/h, se recorre a ciegas una distancia superior a la longitud de una cancha de fútbol profesional). La distracción multiplica por 23 veces el riesgo de siniestro vial.
2. Fatiga y Microsueños: El cansancio prolongado induce episodios de microsueño de 2 a 4 segundos de duración en los cuales la corteza cerebral se desconecta de los estímulos visuales. Biológicamente, conducir tras 18 horas de vigilia continua equivale a tener 50 mg/dl de alcohol en sangre. La única medida efectiva ante la fatiga es estacionar el vehículo en un sitio seguro e iluminado y dormir al menos 20 a 30 minutos.
3. Ira y Violencia al Volante ("Road Rage"): La inteligencia emocional al volante exige desescalar cualquier conflicto vial. Ante conductores agresivos que tocan el claxon o cortan el paso, el conductor defensivo regula su respiración, cede el paso, evita cualquier contacto visual directo o gestual desafiante y prioriza la preservación de su vida por encima del orgullo personal.`,
    practicalCases: [
      {
        id: 'tc-u5-c1',
        title: 'Pérdida de Control por Freno Brusco en Hidroplaneo en Autopista a Comalapa',
        scenario: 'Durante una tormenta tropical con acumulación de charcos de agua en el kilómetro 18 de la Autopista a Comalapa, un automovilista circula a 95 km/h. Al sentir que el vehículo "flota" y la dirección se aligera por hidroplaneo, entra en pánico y clava el pedal de freno a fondo mientras gira el volante a la derecha, provocando un derrape descontrolado de 180 grados que lo estrella contra la barda metálica separadora.',
        legalReference: 'Reglamento General de Tránsito Art. 147 y Art. 175; Manual de Manejo Defensivo VMT.',
        analysis: 'El hidroplaneo anula la tracción de los neumáticos. Clavar los frenos bloqueó las ruedas, transformando el automóvil en un proyectil inercial sin gobierno hidrodinámico. La velocidad de 95 km/h bajo lluvia torrencial excedía con creces el límite precautorio admisible para condiciones de calzada inundada, constituyendo una falta de apreciación de las condiciones físicas del camino.',
        resolvedOutcome: 'Resolución de impericia manifiesta en la conducción en condiciones de lluvia; pago obligatorio de los daños ocasionados a la infraestructura pública de barreras metálicas del MOPT; recomendación de curso de capacitación psicométrica defensiva.'
      },
      {
        id: 'tc-u5-c2',
        title: 'Falla Total de Frenos por Fading Térmico en Bajada de Los Chorros',
        scenario: 'Un camión ligero de reparto cargado con 3 toneladas desciende la pendiente de Los Chorros hacia Santa Tecla en posición "Neutro" (punto muerto) para ahorrar combustible, confiando únicamente en la presión continua del pedal de frenos. Tras tres kilómetros de bajada constante, el pedal se va al fondo sin respuesta y el vehículo colisiona contra tres automóviles detenidos en el semáforo de Las Delicias.',
        legalReference: 'Reglamento General de Tránsito Art. 164 y Art. 174; Ley de Transporte Terrestre Art. 64.',
        analysis: 'Descender una pendiente pronunciada en punto neutro o apagado es una práctica expresamente prohibida por la ley de tránsito salvadoreña. El uso continuo del freno disipó una cantidad ingente de calor que hirvió el líquido de frenos (fading por vapor lock). El conductor tenía la obligación técnica de descender engranado en marcha baja para aprovechar la compresión de frenado del motor.',
        resolvedOutcome: 'Imputación por negligencia grave con agravante de infracción técnica reglamentaria; imposición de multa muy grave; deducción de responsabilidad civil y penal por los lesionados en el choque múltiple de Las Delicias; decomiso de la unidad para peritaje mecánico del sistema de frenado.'
      },
      {
        id: 'tc-u5-c3',
        title: 'Deslumbramiento y Pérdida de Guía Visual en Paso de Montaña de Los Naranjos',
        scenario: 'En la carretera de Sonsonate hacia Los Naranjos, en medio de una niebla espesa y noche cerrada, un conductor mantiene encendidas sus luces altas de xenón para "ver mejor". Al toparse con un vehículo que subía en sentido opuesto, ambos conductores sufren deslumbramiento mutuo reflejado en la niebla; el primero se sale de la cinta asfáltica y cae en una zanja de drenaje pluvial.',
        legalReference: 'Reglamento General de Tránsito Art. 182 y Art. 185; Manual SIECA.',
        analysis: 'Las luces altas en condiciones de neblina provocan ceguera por refracción fotónica. El uso reglamentario exige luces bajas dirigidas al pavimento y faros neblineros que proyecten el haz debajo del manto de niebla. Asimismo, el conductor debió cambiar a luz baja a 150 metros de cualquier vehículo que circulaba en sentido contrario para evitar el deslumbramiento retiniano.',
        resolvedOutcome: 'Sanción por uso indebido del sistema de iluminación en condiciones climatológicas adversas; cobertura denegada por aseguradora por impericia técnica contraria a las especificaciones básicas de conducción nocturna.'
      },
      {
        id: 'tc-u5-c4',
        title: 'Colisión por Distracción con Teléfono Móvil en Bulevar del Hipódromo',
        scenario: 'Un conductor de 29 años circula por el Bulevar del Hipódromo redactando un mensaje de voz en su teléfono celular colocado sobre sus piernas. Durante 4 segundos desvía la vista del tráfico; al levantar la mirada no percibe que un peatón cruzaba sobre el paso de cebra peatonal, impactándolo a 40 km/h y causándole fractura de fémur y traumatismo craneal.',
        legalReference: 'Ley de Transporte Terrestre Art. 67, literal d; Código Penal Art. 142 (Lesiones Culposas).',
        analysis: 'El uso y manipulación de dispositivos de telefonía móvil al conducir está tipificado como infracción muy grave en la legislación vial salvadoreña debido a la disociación cognitiva y visual que genera. La distracción privó al conductor del tiempo biológico de percepción-reacción necesario para ceder la prioridad absoluta que gozaba el peatón sobre el paso de cebra.',
        resolvedOutcome: 'Detención flagrante del conductor por parte de la PNC-DTT por el delito de Lesiones Culposas graves; incautación judicial del teléfono para peritaje forense de comunicaciones; proceso judicial penal en juzgado de paz y remisión de fianza civil indemnizatoria.'
      },
      {
        id: 'tc-u5-c5',
        title: 'Escalada de Furia al Volante en Redondel Masferrer hacia Paseo Escalón',
        scenario: 'Dos automovilistas disputan un espacio de incorporación en el Redondel Masferrer. Uno de ellos toca el claxon insistentemente y adelanta al otro por la derecha, frenando bruscamente de forma deliberada delante de él ("brake check"). Ambos descienden de los vehículos en medio de la calzada intercambiando golpes físicos e insultos, paralizando el tráfico de la zona durante 20 minutos.',
        legalReference: 'Reglamento General de Tránsito Art. 175; Ley de Transporte Terrestre Art. 64; Código Penal Art. 147-E y Art. 348.',
        analysis: 'La ira al volante rompe el equilibrio psicométrico indispensable para operar un automotor. Frenar intencionalmente frente a otro vehículo para intimidarlo constituye un acto de conducción temeraria según el Código Penal. Además, abandonar el vehículo sobre la calzada para reñir atenta contra el orden público y la seguridad del tránsito.',
        resolvedOutcome: 'Aprehensión inmediata de ambos sujetos por elementos de la PNC-DTT; decomiso y remisión de los dos vehículos a predios policiales con grúa; multas gravísimas individuales y apertura de expediente penal por desórdenes públicos y conducción peligrosa.'
      }
    ]
  },

  // ==========================================================================
  // UNIDAD 6: SEGURIDAD ACTIVA, PASIVA E INSPECCIÓN PREVENTIVA
  // ==========================================================================
  {
    id: 'u6-seguridad-vehicular',
    title: 'Seguridad Activa y Pasiva del Vehículo e Inspección Preventiva',
    subtitle: 'Sistemas ABS, ESP, neumáticos, cinturón de 3 puntos, bolsas de aire, sistemas infantiles y equipo obligatorio',
    icon: 'Car',
    substantiveTheory: `La seguridad vehicular moderna se fundamenta en la integración simbiótica de dos grandes familias tecnológicas: la Seguridad Activa o Primaria, cuyo cometido exclusivo es evitar que se produzca el siniestro vial facilitando el control y maniobrabilidad del vehículo; y la Seguridad Pasiva o Secundaria, cuyo objetivo es minimizar la severidad de las lesiones biomecánicas de los ocupantes y peatones una vez que el impacto físico resulta inevitable.

Sistemas Principales de Seguridad Activa:
1. Sistema Antibloqueo de Frenos (ABS - Anti-lock Braking System): En una frenada de pánico convencional, las ruedas tienden a bloquearse rígidamente; al deslizar sin rotación sobre el pavimento, las ruedas pierden toda adherencia transversal, impidiendo al conductor maniobrar la dirección para esquivar un obstáculo. El sistema ABS incorpora sensores de velocidad en cada rueda y válvulas moduladoras electrohidráulicas que liberan y aplican presión hasta 20 veces por segundo, evitando el bloqueo de los neumáticos y garantizando que el conductor mantenga pleno control del volante para realizar maniobras de esquiva mientras frena a fondo. La técnica de uso del ABS exige presionar el pedal a fondo con máxima fuerza y mantenerlo firme sin soltarlo, ignorando la pulsación vibratoria normal del pedal.
2. Control Electrónico de Estabilidad (ESP / ESC): Supervisa continuamente la dirección del volante mediante sensores de ángulo y la trayectoria real del vehículo mediante sensores de guiñada y aceleración transversal. Si detecta un subviraje (el vehículo se va de morro y no obedece al giro) o un sobreviraje (el tren trasero derrapa perdiendo la cola en un trompo), el ESP frena milimétricamente y de forma selectiva una o varias ruedas individuales para generar un par corrector que devuelva el vehículo a la trayectoria deseada.
3. Neumáticos y Presión de Inflado: Son el único punto de contacto físico entre el vehículo y el camino, con una superficie de contacto equivalente al tamaño de la palma de la mano por rueda. El Reglamento General de Tránsito exige que el labrado de los neumáticos posea una profundidad de surco no menor a 1.6 milímetros, verificable mediante los testigos de desgaste TWI (Tread Wear Indicators). Neumáticos con presión baja incrementan la distancia de frenado en hasta un 30% y se sobrecalientan hasta desllantar o reventar; una presión excesiva reduce la huella de tracción y desgasta prematuramente la banda central.
4. Sistema de Iluminación y Visibilidad: Faros delanteros con alineación fotométrica correcta, luces de freno traseras de color rojo visible a 100 metros, luces de reversa blancas y direccionales ámbar.

Sistemas Principales de Seguridad Pasiva:
1. Cinturón de Seguridad de Tres Puntos con Pretensores Pirotécnicos y Limitadores de Carga: Es el dispositivo de seguridad pasiva más eficaz de la historia automotriz, reduciendo la probabilidad de muerte en colisiones frontales y volcamientos en más del 50%. Mantiene el cuerpo de los ocupantes sujeto al asiento, impidiendo el "segundo impacto" contra el parabrisas, volante o tablero, y evitando la eyección fuera del habitáculo (la eyección multiplica por 5 el riesgo de muerte instantánea). Su uso es legalmente obligatorio en El Salvador para todos los ocupantes del vehículo, tanto en asientos delanteros como traseros.
2. Bolsas de Aire (Airbags): Cojines de tejido sintético que se inflan en un lapso de 20 a 30 milisegundos mediante una reacción química pirotécnica para amortiguar la desaceleración súbita de la cabeza y el tórax. El airbag es un sistema complementario del cinturón de seguridad: el despliegue del airbag sobre un ocupante que no porta el cinturón de seguridad puede ocasionar lesiones cervicales severas o fatales por impacto directo contra el cojín a más de 300 km/h.
3. Reposacabezas: Debe regularse de modo que su borde superior quede nivelado con la parte superior de la cabeza y a una separación no mayor a 4 centímetros del cráneo, para prevenir el violento latigazo cervical ("whiplash") en colisiones por alcance.
4. Sistemas de Retención Infantil (SRI): Los menores de ocho años o con estatura inferior a 1.35 metros deben viajar obligatoriamente en los asientos traseros sujetos en sillas homologadas con anclajes ISOFIX o LATCH, acorde a su peso y talla. Está terminantemente prohibido llevar niños en el asiento del copiloto o en brazos de adultos.

Equipamiento Obligatorio de Emergencia e Inspección Preventiva:
El Artículo 34 del Reglamento General de Tránsito exige que todo vehículo que circule por la red vial de El Salvador porte de forma permanente:
- Un extintor de incendios de polvo químico seco tipo ABC de capacidad certificada (mínimo 2 a 5 libras según el tipo de automotor), con manómetro en zona verde de operatividad y carga vigente.
- Dos triángulos reflectivos de seguridad de alta visibilidad o conos normalizados para señalizar averías en la calzada (colocándolos a 50 y 100 metros del automotor en carreteras abiertas).
- Llanta de repuesto en perfectas condiciones de presión y labrado, llave de pernos (llave de cruz) y gato mecánico o hidráulico con capacidad de elevación adecuada al tonelaje del vehículo.
- Botiquín básico de primeros auxilios y chaleco reflectivo para maniobras nocturnas al borde de la vía.`,
    practicalCases: [
      {
        id: 'tc-u6-c1',
        title: 'Eyección Fatal de Pasajero sin Cinturón en Volcamiento en Carretera de Oro',
        scenario: 'Un sedán que circula a 80 km/h en la Carretera de Oro sufre una ponchadura repentina de neumático trasero que lo hace perder el control e impactar contra el talud, volcando sobre su propio eje. El conductor y el copiloto, que portaban sus cinturones de seguridad de tres puntos, sufren únicamente contusiones leves; sin embargo, el pasajero que viajaba en el asiento trasero central sin cinturón es despedido a través del medallón trasero y fallece al golpear el pavimento.',
        legalReference: 'Reglamento General de Tránsito Art. 177 y Art. 178; Ley de Transporte Terrestre Art. 64.',
        analysis: 'El principio de inercia establece que ante un impacto, los cuerpos no sujetos continúan desplazándose a la misma velocidad del vehículo hasta encontrar un obstáculo que los detenga. La ley salvadoreña obliga al uso del cinturón en todos los asientos que cuenten con este dispositivo. El pasajero trasero suelto no solo se expone a eyección mortal, sino que actúa como un proyectil que impacta letalmente a los ocupantes delanteros.',
        resolvedOutcome: 'Determinación pericial de causa de muerte por desacato a la normativa de seguridad pasiva del cinturón; investigación penal al conductor por responsabilidad culposa al iniciar la marcha permitiendo ocupantes sin cinturón abrochado.'
      },
      {
        id: 'tc-u6-c2',
        title: 'Neumáticos Lisos sin Profundidad de Labrado en Colisión de Bulevar Constitución',
        scenario: 'En un día lluvioso sobre el Bulevar Constitución, un pick-up no logra detenerse a tiempo e impacta la parte trasera de un microbús de transporte colectivo. La inspección técnica de la PNC-DTT constata que los dos neumáticos delanteros del pick-up presentan un desgaste severo con cables metálicos a la vista y una profundidad de surco de apenas 0.4 mm (inferior al límite legal de 1.6 mm).',
        legalReference: 'Reglamento General de Tránsito Art. 32 y Art. 147; Ley de Transporte Terrestre Art. 67.',
        analysis: 'Circular con neumáticos lisos o con desgaste por debajo del límite reglamentario de 1.6 mm elimina toda capacidad de fricción y drenaje pluvial, incrementando la distancia de frenado en más del doble. Operar un automotor a sabiendas del estado ruinoso de sus neumáticos constituye negligencia mecánica grave atribuible al propietario y conductor.',
        resolvedOutcome: 'Imposición de esquela por circular con vehículo en condiciones mecánicas peligrosas; retención preventiva del vehículo para sustitución obligatoria de neumáticos; dictamen de culpabilidad exclusiva en el siniestro vial.'
      },
      {
        id: 'tc-u6-c3',
        title: 'Transporte de Menor de 3 Años en Asiento Delantero en Bulevar del Ejército',
        scenario: 'Durante un dispositivo de control vehicular del VMT en el Bulevar del Ejército, se interviene a un automóvil particular donde viaja una madre llevando a su hijo de dos años y medio en brazos sobre el asiento delantero del copiloto, sin silla de retención infantil (SRI) y con el cinturón de seguridad abrochado rodeando a ambos cuerpos a la vez.',
        legalReference: 'Ley de Transporte Terrestre Art. 64, literal g; Reglamento General de Tránsito Art. 177; Manual de Seguridad Infantil VMT.',
        analysis: 'Llevar a un infante en brazos del copiloto es una práctica de máximo riesgo biomecánico: en caso de colisión a 50 km/h, el peso del niño se multiplica por 30 veces debido a la desaceleración, haciendo humanamente imposible retenerlo con los brazos. Además, colocar el cinturón de adulto sobre madre e hijo simultáneamente hace que la masa de la madre aplaste al niño contra el cinturón, y el despliegue de la bolsa de aire puede decapitar o fracturar el cráneo del menor.',
        resolvedOutcome: 'Sanción económica con infracción muy grave por transporte inadecuado de menores; prohibición de reanudar la marcha hasta que el menor sea ubicado en el asiento trasero con un sistema de retención acorde a su peso y estatura.'
      },
      {
        id: 'tc-u6-c4',
        title: 'Ausencia de Triángulos Reflectivos en Avería Nocturna en Carretera Panamericana',
        scenario: 'Un camión sufre un recalentamiento del radiador a las 21:00 horas en el tramo de Cojutepeque de la Carretera Panamericana. El chofer deja el camión varado sobre el carril derecho sin luces de emergencia y sin colocar triángulos reflectivos, colocando únicamente unas ramas secas a 3 metros de la parte trasera del camión. Un vehículo sedán no divisa el obstáculo y se incrusta debajo de la plataforma trasera.',
        legalReference: 'Reglamento General de Tránsito Art. 34 y Art. 173; Ley de Transporte Terrestre Art. 72.',
        analysis: 'La ley prohíbe el uso de ramas, piedras o latas para señalizar vehículos varados. El conductor tiene la obligación estricta de encender las luces intermitentes de peligro y colocar los dos triángulos reflectivos reglamentarios a 50 y 100 metros en carreteras para dar tiempo a los vehículos rápidos de percibir el obstáculo y cambiar de carril con seguridad.',
        resolvedOutcome: 'Culpabilidad plena del conductor del camión por omisión del deber de señalización reglamentaria de peligro en vía pública; imposición de multas acumuladas por falta de equipo de emergencia obligatorio y daños culposos causados al conductor del sedán.'
      },
      {
        id: 'tc-u6-c5',
        title: 'Extintor Vencido y Descargado en Conato de Incendio en Bulevar Venezuela',
        scenario: 'Un automóvil particular sufre un cortocircuito en el alternador generando llamas en el compartimento del motor sobre el Bulevar Venezuela. Al intentar sofocar el fuego, el conductor saca un extintor cuya fecha de prueba hidrostática y recarga expiró hace 4 años y cuyo manómetro marcaba presión cero en la zona roja, quedando inutilizado mientras el automotor se consume en llamas.',
        legalReference: 'Reglamento General de Tránsito Art. 34, numeral 2; Normas Técnicas del Cuerpo de Bomberos de El Salvador.',
        analysis: 'Portar un extintor de incendios descargado o con recarga vencida equivale material y legalmente a no portar el equipo de seguridad obligatorio. La inspección periódica del manómetro y la recarga anual del agente químico extintor garantizan la capacidad de respuesta inmediata para evitar que un conato menor destruya el vehículo o se propague al tanque de gasolina.',
        resolvedOutcome: 'Levantamiento de acta de siniestro por el Cuerpo de Bomberos señalando la carencia de equipo reglamentario operativo; pérdida total del vehículo; la póliza de seguro contra incendio deduce la indemnización por incumplimiento de medidas preventivas del vehículo.'
      }
    ]
  },

  // ==========================================================================
  // UNIDAD 7: ALCOHOLEMIA, ESTUPEFACIENTES Y CONDUCCIÓN PELIGROSA
  // ==========================================================================
  {
    id: 'u7-alcoholemia-delito',
    title: 'Alcoholemia, Estupefacientes y Delito de Conducción Peligrosa',
    subtitle: 'Marco sancionatorio del Art. 147-E Código Penal, alcotest, umbrales en mg/dl y consecuencias jurídicas',
    icon: 'AlertOctagon',
    substantiveTheory: `El consumo de bebidas alcohólicas, drogas psicotrópicas, sustancias estupefacientes o medicamentos que alteren las funciones psicomotoras representa la conducta de mayor reproche ético, social y jurídico en la legislación de tránsito de la República de El Salvador. El alcohol es un potente depresor del sistema nervioso central que desactiva de forma progresiva la corteza cerebral, alterando la percepción de la velocidad y la distancia, reduciendo el campo visual periférico (produciendo visión en túnel), retardando los reflejos neuromusculares y generando una falsa sensación de euforia e invulnerabilidad que empuja al conductor a asumir riesgos suicidas al volante.

La reforma penal integral al Artículo 147-E del Código Penal tipifica de manera autónoma el delito de Conducción Peligrosa de Vehículos de Motor, estableciendo un marco punitivo severo:
- Pena de Prisión Formal de tres a seis años para conductores particulares que manejen bajo los efectos del alcohol o sustancias ilícitas.
- Pena Agravada de Prisión de cuatro a ocho años si el delito es cometido por conductores de unidades de transporte público de pasajeros, transporte de carga pesada, transporte escolar o vehículos institucionales del Estado.
- Las penas privativas de libertad conllevan aparejada la inhabilitación especial para el ejercicio del derecho de conducir por un lapso idéntico al de la condena penal, y no admiten beneficios de reemplazo de pena durante la fase inicial de detención policial.

En El Salvador, la determinación del grado de intoxicación alcohólica se realiza mediante dispositivos evidenciales de aire espirado (alcotest o etilómetros certificados) o mediante análisis pericial hematológico practicado por médicos forenses del Instituto de Medicina Legal (IML). El marco legal fija los siguientes umbrales operativos exactos medidos en miligramos de alcohol por decilitro de sangre (mg/dl):

1. De 0 a 49 mg/dl (Límite de Tolerancia Legal para Conductores Particulares): En este rango no se impone sanción administrativa ni penal a los conductores de vehículos particulares, aunque se advierte que ya existe un deterioro incipiente del tiempo de reacción. No obstante, para conductores noveles con Licencia Juvenil y conductores de transporte colectivo o de carga rige el principio de Tolerancia Cero (0 mg/dl).

2. De 50 a 99 mg/dl (Infracción Administrativa Muy Grave): Conducir con una concentración alcohólica dentro de este intervalo constituye una de las faltas más graves del catálogo vial. Acarrea la imposición inmediata de una multa económica de máxima cuantía, el retiro preventivo de la licencia de conducir con suspensión de su vigencia por un período de seis meses a un año, y la inmovilización del automotor mediante grúa policial si en el lugar no se encuentra presente un conductor acompañante idóneo, debidamente acreditado y con resultado de 0 mg/dl en el alcotest.

3. De 100 mg/dl en adelante (Delito Penal Flagrante de Conducción Peligrosa): Al alcanzar o superar la barrera de los 100 miligramos por decilitro (equivalente a un gramo de alcohol por litro de sangre), la conducta traspasa de forma automática el ámbito del derecho administrativo sancionador para convertirse en un Ilícito Penal consumado. Las consecuencias operativas inmediatas e ineludibles son:
- Detención Policial Flagrante Inmediata de la persona por agentes de la PNC-DTT, siendo trasladada a las bartolinas policiales donde permanecerá bajo arresto por el término constitucional de la flagrancia (mínimo 72 horas) hasta la celebración de la audiencia inicial en el Juzgado de Paz de turno.
- Decomiso de la Licencia de Conducir y de la Tarjeta de Circulación del vehículo.
- Retiro del vehículo mediante grúa policial y remisión a los predios de custodia judicial del VMT.
- Apertura de Expediente Judicial con antecedentes penales y policiales permanentes que inhabilitan al condenado para tramitar solvencias policiales limpias, cartas de no antecedentes penales y empleo en el servicio público.

En cuanto a drogas ilícitas (marihuana, cocaína, anfetaminas, opiáceos), rige la tolerancia cero absoluta. La sospecha razonable de influjo narcótico en un retén faculta a la PNC para realizar pruebas de toxidrome pupilar y remitir al conductor al IML para análisis toxicológico en orina o sangre; la presencia de metabolitos activos tipifica de pleno derecho el delito del Art. 147-E del Código Penal.

La negativa injustificada a someterse a la prueba de alcotest legalmente requerida por la autoridad de tránsito se considera legalmente como presunción de intoxicación alcohólica, conllevando la detención inmediata y el procesamiento penal conforme a la jurisprudencia de la Sala de lo Penal de la Corte Suprema de Justicia.`,
    practicalCases: [
      {
        id: 'tc-u7-c1',
        title: 'Control Antidoping con 142 mg/dl en Bulevar Los Héroes',
        scenario: 'Durante un cerco antidoping nocturno ejecutado conjuntamente por el VMT y la PNC-DTT en el Bulevar Los Héroes, se detiene a un profesional de 35 años que conducía un sedán. Al practicársele la prueba de aire espirado con boquilla desechable estéril, el etilómetro digital calibrado arroja un resultado de 142 mg/dl de alcohol en sangre. El conductor afirma sentirse en plenas facultades, argumentando que solo consumió dos cervezas artesanales durante una cena.',
        legalReference: 'Código Penal Art. 147-E; Ley de Transporte Terrestre Art. 66 y Art. 118.',
        analysis: 'El artículo 147-E del Código Penal no admite atenuantes basadas en la tolerancia subjetiva o resistencia biológica percibida por el individuo. Superar el umbral estricto de 100 mg/dl consuma de manera automática el delito de Conducción Peligrosa, considerándose un delito de peligro abstracto donde no se requiere provocar un siniestro para que se configure la acción delictiva.',
        resolvedOutcome: 'Detención flagrante del conductor en el acto con lectura de derechos constitucionales; traslado a bartolinas de la PNC por 72 horas; decomiso de la licencia y remisión del vehículo al predio de Changallo; requerimiento fiscal formal ante el Juzgado de Paz por el delito de Conducción Peligrosa.'
      },
      {
        id: 'tc-u7-c2',
        title: 'Infracción Administrativa con 78 mg/dl en Carretera al Puerto de La Libertad',
        scenario: 'Un conductor particular de 28 años es intervenido en un retén preventivo en Zaragoza, sobre la Carretera al Puerto de La Libertad. La prueba de alcotest certifica 78 mg/dl de alcohol en sangre. El conductor no presenta signos de violencia y colabora pacíficamente con la autoridad.',
        legalReference: 'Ley de Transporte Terrestre Art. 118; Reglamento General de Tránsito Art. 175.',
        analysis: 'El rango de 50 a 99 mg/dl se sitúa en la categoría de Infracción Administrativa Muy Grave, pero no alcanza la tipicidad penal flagrante del Art. 147-E (que exige >= 100 mg/dl). La PNC debe aplicar con rigurosidad las sanciones administrativas de la ley de tránsito sin proceder a la detención física en celdas, salvo que el individuo incurra en desacato o resistencia violenta.',
        resolvedOutcome: 'Emisión de esquela de infracción muy grave; decomiso físico de la licencia de conducir para trámite de suspensión por 6 meses ante el VMT; entrega del automotor en el lugar a un acompañante sobrio que superó el alcotest con 0 mg/dl, evitando el arrastre con grúa.'
      },
      {
        id: 'tc-u7-c3',
        title: 'Conducción Peligrosa Agravada en Motorista de Autobús Ruta 205',
        scenario: 'En la Carretera Panamericana Oeste a la altura de El Congo, Santa Ana, pasajeros de un autobús de la Ruta 205 (Sonsonate - San Salvador) denuncian a través de redes sociales que el motorista maneja zigzagueando a alta velocidad. Una patrulla intercepta la unidad y somete al chofer a la prueba de alcotest, arrojando 62 mg/dl en aire espirado con 55 pasajeros a bordo.',
        legalReference: 'Código Penal Art. 147-E, inciso segundo; Ley de Transporte Terrestre Art. 66 y Art. 118.',
        analysis: 'En el transporte público de pasajeros rige el estándar agravado de tolerancia cero y protección de la vida colectiva. El inciso segundo del Art. 147-E sanciona con prisión agravada de cuatro a ocho años la conducción peligrosa en transporte colectivo, y la normativa del VMT prohíbe de forma tajante cualquier nivel positivo de alcohol en conductores de servicio público, configurando dolo agravado de puesta en riesgo masivo.',
        resolvedOutcome: 'Detención flagrante del motorista por Conducción Peligrosa Agravada; transbordo de los 55 pasajeros a otra unidad de la empresa; remisión del detenido al Juzgado de Instrucción de Santa Ana; apertura de proceso sancionatorio a la empresa concesionaria de la línea por falta de controles a su personal.'
      },
      {
        id: 'tc-u7-c4',
        title: 'Negativa Injustificada a Realizar la Prueba de Alcotest en Bulevar Constitución',
        scenario: 'Un conductor que colisiona por alcance leve contra una patrulla de la PNC sobre el Bulevar Constitución muestra un evidente olor a alcohol y lenguaje incoherente. Al ordenársele someterse a la boquilla del etilómetro, se niega rotundamente alegando que la Constitución le ampara el derecho a la no autoincriminación y que nadie puede obligarlo a soplar en un aparato.',
        legalReference: 'Código Penal Art. 147-E; Código Procesal Penal Art. 199; Jurisprudencia Sala de lo Penal de la CSJ.',
        analysis: 'La jurisprudencia penal constitucional de El Salvador ha sentado de forma reiterada que las pruebas periciales de alcoholemia mediante aire espirado no vulneran el derecho a no declarar contra uno mismo, al constituir actos legítimos de inspección técnica no invasiva en aras de la seguridad vial pública. La negativa obstinada genera la presunción procesal de intoxicación grave y faculta a la autoridad a practicar extracción sanguínea obligatoria bajo control judicial.',
        resolvedOutcome: 'Detención inmediata por el delito flagrante de Conducción Peligrosa y Desobediencia de Particulares; traslado bajo custodia al Instituto de Medicina Legal para prueba de sangre pericial; remisión de las diligencias a la Unidad de Delitos Relativos a la Administración de Justicia de la FGR.'
      },
      {
        id: 'tc-u7-c5',
        title: 'Conducción Bajo Influjo de Estupefacientes con Siniestro en San Miguel',
        scenario: 'En la Avenida Roosevelt de San Miguel, un conductor atropella a un transeúnte sobre la acera peatonal tras perder el control de su camioneta. Al realizar la prueba de alcotest, marca 0 mg/dl de alcohol; sin embargo, los agentes de la PNC observan midriasis pupilar severa, habla errática y movimientos descoordinados. El peritaje médico-legal confirma presencia masiva de cocaína y benzodiacepinas.',
        legalReference: 'Código Penal Art. 147-E y Art. 142; Ley Reguladora de las Actividades Relativas a las Drogas.',
        analysis: 'El artículo 147-E sanciona con idéntica severidad la conducción bajo los efectos de drogas ilícitas o medicamentos psicotrópicos que nublen la conciencia y reflejos del operador. El consumo de sustancias psicoestimulantes altera de manera profunda la propiocepción motriz y la atención dividida, destruyendo el perfil psicométrico de idoneidad requerido para manejar.',
        resolvedOutcome: 'Detención formal por los delitos concursados de Conducción Peligrosa de Vehículos de Motor y Lesiones Culposas Graves; incautación judicial definitiva del automotor como instrumento del delito; fijación de detención provisional sin fianza en la audiencia inicial de garantías penales.'
      }
    ]
  },

  // ==========================================================================
  // UNIDAD 8: ACCIDENTOLOGÍA VIAL, LEY FONAT Y PRIMEROS AUXILIOS
  // ==========================================================================
  {
    id: 'u8-accidentologia-fonat',
    title: 'Accidentología Vial, Ley FONAT, Responsabilidad Legal y Primeros Auxilios',
    subtitle: 'Protocolo internacional P.A.S., cobertura FONAT, parte policial de tránsito y auxilio médico inicial de emergencia',
    icon: 'Brain',
    substantiveTheory: `La accidentología vial es la disciplina científica que investiga las causas, dinámicas, cinemáticas y factores concurrentes que desencadenan un siniestro vial, desglosando la interacción del trinomio accidentológico fundamental: el Factor Humano (responsable de más del 85% de los siniestros por distracción, velocidad o alcohol), el Factor Vehicular (fallas mecánicas previsibles en frenos, dirección o neumáticos) y el Factor Ambiental o Vial (geometría de la vía, drenajes, neblina o falta de señalización).

El Protocolo Internacional de Emergencia P.A.S. (Proteger - Avisar - Socorrer):
Ante cualquier siniestro vial con víctimas o daños materiales graves sobre la red vial salvadoreña, todo conductor o testigo presencial está éticamente y legalmente conminado a implementar de forma estricta las tres fases del protocolo P.A.S. en su orden cronológico exacto:

1. PROTEGER:
Antes de brindar auxilio personal, se debe asegurar integralmente el escenario del siniestro para impedir que se desencadenen colisiones secundarias o atropellos múltiples en cadena. Se debe estacionar el vehículo propio en un lugar seguro fuera de la calzada con las luces intermitentes encendidas, colocarse el chaleco reflectivo antes de descender y desplegar de inmediato los triángulos de seguridad reglamentarios a 50 y 100 metros del accidente. Si es factible y seguro, apagar los motores de los vehículos colisionados, retirar llaves del encendido y prohibir terminantemente encender cigarrillos o llamas abiertas ante el riesgo de derrames invisibles de gasolina.

2. AVISAR:
Comunicarse de inmediato con las líneas telefónicas nacionales de auxilio institucional:
- 911: Policía Nacional Civil (División de Tránsito Terrestre) para control del orden y acordonamiento legal.
- 132: Sistema de Emergencias Médicas (SEM) para el despacho de ambulancias avanzadas y personal paramédico.
- 913: Cuerpo de Bomberos de El Salvador en caso de atrapamiento de personas con hierros retorcidos o peligro de incendio.
- Entidades de Socorro Humanitario: Cruz Roja Salvadoreña (2222-5155), Cruz Verde Salvadoreña o Comandos de Salvamento.
Al formular el reporte, se debe suministrar con calma la ubicación kilométrica o referencias físicas exactas, número estimado de lesionados, si existen personas atrapadas o inconscientes y si hay involucrados materiales peligrosos.

3. SOCORRER:
Prestar asistencia inicial de soporte básico de vida a las víctimas sin sobrepasar los límites de capacitación personal:
- Regla de Oro Traumatológica: Jamás mover ni cambiar de posición a una víctima que haya sufrido un impacto violento, a menos que exista un peligro inminente e inevitable de incendio, explosión o aplastamiento incontrolable. Un movimiento inadecuado puede transformar una fractura de vértebra cervical en una sección medular irreversible, causando tetraplejia permanente o muerte.
- Nunca retirar el casco de protección a un motociclista accidentado, salvo por personal médico calificado en intubación y control bimanual de columna cervical.
- Control de Hemorragias Severas: Aplicar presión directa continua sobre la herida sangrante utilizando apósitos, gasas estériles o prendas de vestir limpias; jamás realizar torniquetes artesanales improvisados salvo en amputaciones traumáticas evidentes con riesgo inminente de exanguinación mortal.
- Mantener a la víctima abrigada con una manta para prevenir la hipotermia postraumática, hablarle con tono tranquilizador y no suministrarle ningún líquido, comida ni medicamentos orales.

El Régimen Legal de la Ley FONAT (Fondo para la Atención a las Víctimas de Accidentes de Tránsito):
Aprobada mediante Decreto Legislativo en El Salvador, la Ley FONAT crea un mecanismo de protección social y cobertura indemnizatoria de naturaleza solidaria, independiente de la declaración judicial de culpabilidad penal de los conductores involucrados. El FONAT brinda:
- Prestación Económica por Fallecimiento: Indemnización monetaria directa entregada a los beneficiarios legales prioritarios (cónyuge, hijos o padres dependientes) de cualquier persona que pierda la vida como consecuencia directa de un siniestro de tránsito en el país.
- Prestación Económica por Discapacidad Permanente: Compensación financiera otorgada a la víctima sobreviviente que experimente una limitación funcional o anatómica irreversible, calificada técnicamente por la Comisión Técnica Evaluadora del FONAT.
La solicitud de las prestaciones debe tramitarse dentro del plazo perentorio legal establecido en la ley mediante la presentación del Acta Policial de Inspección de Tránsito, el informe forense del Instituto de Medicina Legal y las partidas del Registro del Estado Familiar.

Procedimiento Policial y Responsabilidad Civil/Penal:
El Acta de Inspección Técnica de Tránsito levantada por los investigadores periciales de la PNC-DTT (que contiene el croquis planimétrico a escala, la fijación fotográfica, la ubicación del punto de impacto y las declaraciones preliminares) tiene valor probatorio documental ante los tribunales de tránsito y juzgados de paz. Si se producen lesiones o muertes, el caso pasa de inmediato al conocimiento de la Fiscalía General de la República (FGR) bajo la tipificación penal de Lesiones Culposas (Art. 142 CP) u Homicidio Culposo (Art. 132 CP). Darse a la fuga del lugar del siniestro constituye una agravante penal severa que elimina cualquier posibilidad de conciliación civil extrajudicial y activa la orden de captura inmediata del conductor prófugo.`,
    practicalCases: [
      {
        id: 'tc-u8-c1',
        title: 'Manejo Erróneo de Víctima Traumatizada en Siniestro de Bulevar Constitución',
        scenario: 'Un motociclista es impactado por un vehículo en la prolongación del Bulevar Constitución y queda tendido sobre el asfalto quejándose de dolor en la columna. Un grupo de transeúntes bienintencionados intenta sentarlo a la fuerza y le retiran violentamente el casco integral estirándole el cuello para que "respire mejor", ocasionándole un daño cervical irreversible que deriva en cuadriplejía.',
        legalReference: 'Protocolo Médico Internacional de Soporte Vital de Trauma Prehospitalario (PHTLS); Ley de Tránsito Art. 64.',
        analysis: 'El protocolo PAS exige no mover a una víctima con sospecha de trauma raquimedular. Retirar el casco sin inmovilización bimanual de la columna cervical neutraliza la protección que brindaba la coraza del casco y desplaza mecánicamente las vértebras fracturadas, comprimiendo la médula espinal. La conducta debió limitarse a proteger la escena, llamar al 132 y vigilar los signos vitales sin alterar la alineación corporal de la víctima.',
        resolvedOutcome: 'Revisión judicial del protocolo de atención de emergencia; peritaje forense del IML determinando que la cuadriplejía sobrevino a consecuencia de la manipulación antitécnica en la escena; instrucción formal a la PNC sobre el acordonamiento protector de víctimas hasta la llegada del SEM.'
      },
      {
        id: 'tc-u8-c2',
        title: 'Fuga de Escena con Lesiones Graves en Bulevar del Ejército',
        scenario: 'A las 22:00 horas en el Bulevar del Ejército frente a Cárcel de Mujeres, un automovilista atropella a un peatón que cruzaba la vía y acelera a fondo dándose a la fuga con las luces apagadas. Cámaras del sistema de videovigilancia municipal registran el número de placa del vehículo fugitivo, siendo interceptado por una patrulla de la PNC 3 kilómetros adelante.',
        legalReference: 'Código Penal Art. 142 y Art. 147-E; Ley de Transporte Terrestre Art. 64.',
        analysis: 'El deber de socorro es un principio penal indeclinable. Darse a la fuga abandonando a una persona lesionada elimina cualquier atenuante de culpa involuntaria y configura la agravante penal de abandono de persona desamparada, además de frustrar la conciliación de daños. El conductor que huye asume el riesgo consciente de la muerte de la víctima por falta de auxilio oportuno.',
        resolvedOutcome: 'Captura formal del conductor bajo cargos penales acumulados de Lesiones Culposas con Agravante Especial de Fuga y Conducción Peligrosa; incautación formal del vehículo para pruebas biológicas de luminol en el guardafango; decreto de detención provisional sin fianza en audiencia inicial.'
      },
      {
        id: 'tc-u8-c3',
        title: 'Solicitud de Indemnización por Fallecimiento ante FONAT en San Miguel',
        scenario: 'Un agricultor de 52 años fallece tras ser atropellado por un camión de carga en la Carretera Panamericana en Quelepa, San Miguel. El conductor del camión fue absuelto de responsabilidad penal al comprobarse que el peatón cruzó intempestivamente en una zona oscura no autorizada. La viuda y dos hijos menores de edad quedan en el desamparo económico y solicitan la prestación ante el Consejo Directivo del FONAT.',
        legalReference: 'Ley Especial del Fondo para la Atención a las Víctimas de Accidentes de Tránsito (FONAT) Art. 15, Art. 16 y Art. 21.',
        analysis: 'La prestación económica por fallecimiento establecida en la Ley FONAT opera bajo el principio de responsabilidad social objetiva: su otorgamiento no depende de la determinación de culpabilidad penal del conductor ni se suspende porque el fallecido haya incurrido en imprudencia peatonal. Toda víctima o sus derechohabientes legales tienen derecho a la indemnización legal previa presentación del acta pericial de inspección policial de tránsito y defunción.',
        resolvedOutcome: 'Aprobación unánime del desembolso de la prestación económica completa por parte del Consejo Directivo del FONAT a favor de la viuda y sus hijos menores de edad, proporcionando auxilio de subsistencia conforme a los baremos oficiales de la ley.'
      },
      {
        id: 'tc-u8-c4',
        title: 'Conciliación Extrajudicial ante la PNC-DTT por Daños Materiales Exclusivos',
        scenario: 'Ocurre una colisión por alcance en la intersección de la 49.ª Avenida Sur y Alameda Roosevelt entre dos vehículos asegurados, con daños en defensas y faros sin ningún tipo de lesiones personales ni sospecha de alcohol en ninguno de los dos conductores. Ambos llaman a sus respectivas compañías de seguro y a la PNC-DTT para levantar el acta pericial correspondiente.',
        legalReference: 'Ley de Transporte Terrestre Art. 120 y Art. 121; Código Procesal Penal Art. 38 (Conciliación).',
        analysis: 'Cuando un siniestro vial arroja exclusivamente daños materiales sin personas lesionadas ni alcoholemia positiva, la ley salvadoreña promueve las salidas alternas de mediación y conciliación rápida. Los conductores pueden formalizar un acuerdo amistoso en sede policial o ante los ajustadores de seguros, evitando el secuestro de los automotores y la derivación de la causa a los tribunales comunes de tránsito.',
        resolvedOutcome: 'Suscripción de acta de conciliación y compromiso de reparación inmediata en el formato oficial de la PNC-DTT; liberación instantánea de ambos automotores sin multas adicionales ni retención de tarjetas de circulación, procediendo las aseguradoras a la liquidación del reclamo.'
      },
      {
        id: 'tc-u8-c5',
        title: 'Falsedad en Declaración Pericial de Accidente en Bulevar Los Próceres',
        scenario: 'Tras una colisión angular entre un sedán y un vehículo comercial en el Bulevar Los Próceres, el conductor del sedán mueve su vehículo 15 metros hacia adelante antes de la llegada de la PNC-DTT y persuade a un transeúnte para que declare falsamente ante los agentes periciales que el vehículo comercial invadió su carril. No obstante, una cámara de seguridad privada de un edificio adyacente graba el punto real de impacto y la alteración de la escena.',
        legalReference: 'Código Penal Art. 305 (Falsedad Testimonial) y Art. 312 (Fraude Procesal); Reglamento de Tránsito Art. 180.',
        analysis: 'Alterar deliberadamente la posición física de los automotores tras un siniestro con el propósito de inducir a error a los peritos de tránsito terrestre de la PNC constituye una falta grave al procedimiento y tipifica el delito de Fraude Procesal. El peritaje técnico se fundamenta en la física de deformaciones, huellas de frenado y esparcimiento de cristales (debris field), los cuales delatan invariablemente la alteración de la escena.',
        resolvedOutcome: 'Anulación de la declaración testimonial falsa en el acta policial; imputación de responsabilidad plena del siniestro al conductor del sedán; remisión de las actuaciones periciales a la Fiscalía General de la República por el delito de Fraude Procesal y Falsedad Testimonial.'
      }
    ]
  }
];
