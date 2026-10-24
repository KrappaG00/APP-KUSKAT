/**
 * BANCO OFICIAL DE PREGUNTAS PARA CONCURSOS DE ASCENSO DE LA POLICÍA NACIONAL CIVIL
 * Academia Nacional de Seguridad Pública (ANSP) & Tribunal de Ingresos y Ascensos (TIA)
 * República de El Salvador
 * Ley de la Carrera Policial, Ley Orgánica de la PNC, Código Procesal Penal y Normas de DDHH de la ONU.
 *
 * Exactamente 200 reactivos evaluativos:
 * - 66 Cabo (Mandos Básicos / Patrulla)
 * - 67 Sargento (Mandos Intermedios / Supervisión)
 * - 67 Oficial (Nivel Ejecutivo: Subinspector / Inspector)
 */

export interface PolicePromotionQuestion {
  id: string;
  rank: 'cabo' | 'sargento' | 'oficial'; // Cabo, Sargento, Oficial (Subinspector/Inspector)
  escalafon: 'Cabo' | 'Sargento' | 'Oficial';
  topic: string;
  statement: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalBasis: string;
  distractorRationale: Record<'A' | 'B' | 'C' | 'D', string>;
}

export type AnspQuestion = PolicePromotionQuestion;

export interface PoliceRankMeta {
  id: 'all' | 'cabo' | 'sargento' | 'oficial';
  name: string;
  badge: string;
  scopeDescription: string;
  officialTimeMinutes: number;
}

export const POLICE_RANKS: PoliceRankMeta[] = [
  {
    id: 'all',
    name: 'Todos los Escalafones',
    badge: 'ANSP / PNC',
    scopeDescription: 'Evaluación integral de ascenso para mandos básicos, intermedios y ejecutivos.',
    officialTimeMinutes: 45,
  },
  {
    id: 'cabo',
    name: 'Ascenso a Cabo (Nivel Básico)',
    badge: 'Comandante de Patrulla',
    scopeDescription: 'Procedimientos operativos en el terreno, ITOP, flagrancia, cadena de custodia y tránsito.',
    officialTimeMinutes: 30,
  },
  {
    id: 'sargento',
    name: 'Ascenso a Sargento (Nivel Intermedio)',
    badge: 'Jefe de Subdelegación',
    scopeDescription: 'Supervisión táctica, coordinación con FGR, régimen disciplinario y libros de control.',
    officialTimeMinutes: 35,
  },
  {
    id: 'oficial',
    name: 'Ascenso a Oficiales (Subinspector/Inspector)',
    badge: 'Nivel Ejecutivo',
    scopeDescription: 'Ley de la Carrera Policial, Derecho Constitucional, inteligencia y uso proporcional de la fuerza.',
    officialTimeMinutes: 40,
  },
];

export const ANSP_ASCENSO_QUESTIONS: PolicePromotionQuestion[] = [
  {
    "id": "pnc-cabo-001",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Flagrancia Delictiva",
    "statement": "Una patrulla policial bajo el mando de un Cabo observa a un sujeto que, tras despojar con violencia a una ciudadana de su bolso, emprende la huida hacia unos matorrales. El equipo policial inicia de inmediato una persecución material ininterrumpida y le da alcance 25 minutos después con las pertenencias de la víctima. ¿Bajo qué modalidad jurídica de detención debe procederse conforme al Código Procesal Penal salvadoreño?",
    "options": [
      {
        "key": "A",
        "text": "Detención por orden administrativa emitida verbalmente por el Jefe de Puesto."
      },
      {
        "key": "B",
        "text": "Detención en flagrancia material por persecución ininterrumpida conforme al Art. 323 y 324 PrPn."
      },
      {
        "key": "C",
        "text": "Retención preventiva únicamente para identificación sin lectura de derechos hasta localizar al Fiscal de turno."
      },
      {
        "key": "D",
        "text": "Custodia temporal administrativa que no puede superar las 8 horas en barandilla."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 323 y 324 del Código Procesal Penal tipifican la flagrancia no solo en el momento mismo de cometer el delito, sino cuando el autor es perseguido inmediatamente después de consumarlo por la policía, la víctima o el clamor público de forma ininterrumpida, o cuando es sorprendido con objetos o rastros que hagan presumir vehementemente su autoría.",
    "legalBasis": "Arts. 323 y 324 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "La orden administrativa de detención es facultad privativa de la Fiscalía General de la República (Art. 193 Ord. 3° Cn. y Art. 325 PrPn), no del Jefe de Puesto policial.",
      "B": "Respuesta correcta. La inmediatez de la persecución material ininterrumpida consolida la detención en flagrancia.",
      "C": "La retención policial sin lectura de derechos vulnera el Art. 82 PrPn y genera responsabilidad penal y disciplinaria.",
      "D": "El plazo perentorio constitucional para remitir al detenido a las autoridades judiciales a través de la FGR es de 72 horas (Art. 13 Cn.)."
    }
  },
  {
    "id": "pnc-cabo-002",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística / Inspección Técnica Ocular Policial (ITOP) y Cadena de Custodia",
    "statement": "Al arribar a la escena de un homicidio con arma de fuego en vía pública, el Cabo comandante de la patrulla constata que el occiso yace en la acera junto a cuatro casquillos de proyectil. Civiles curiosos intentan ingresar para tomar fotografías. ¿Cuál es la primera e ineludible obligación operativa que debe ejecutar el Cabo?",
    "options": [
      {
        "key": "A",
        "text": "Recolectar de inmediato los casquillos con las manos para evitar que sean destruidos o sustraídos por la multitud."
      },
      {
        "key": "B",
        "text": "Preservar, acordonar y asegurar perimétricamente el lugar de los hechos con cinta policial, impidiendo el ingreso de personas no autorizadas hasta la llegada del equipo técnico pericial de la Policía Técnica y Científica (DPTC) y FGR."
      },
      {
        "key": "C",
        "text": "Mover el cadáver a un costado de la calle para restablecer el flujo vehicular antes de fijar la escena."
      },
      {
        "key": "D",
        "text": "Entrevistar exhaustivamente a los sospechosos en el lugar sin consignar la información en ningún registro escrito."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La preservación estricta de la escena es el pilar de la investigación criminal (Arts. 191, 192 y 250 PrPn). El policía primer respondiente debe acordonar el perímetro interno y externo, prohibiendo la alteración, contaminación o manipulación de indicios por terceros o por el propio personal policial.",
    "legalBasis": "Arts. 191, 192, 250 a 252 del Código Procesal Penal y Manual de Procedimientos ITOP de la PNC.",
    "distractorRationale": {
      "A": "Manipular casquillos sin guantes y sin previa fijación fotográfica/planimétrica destruye huellas dactilares y contamina la evidencia balística.",
      "B": "Respuesta correcta. El acordonamiento y aseguramiento riguroso garantiza la indemnidad probatoria del lugar.",
      "C": "Mover el cadáver sin orden fiscal o judicial constituye delito de Fraude Procesal (Art. 306 Código Penal).",
      "D": "Las diligencias policiales deben documentarse estrictamente en acta para tener validez y control fiscal."
    }
  },
  {
    "id": "pnc-cabo-003",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Tránsito Terrestre / Prueba de Alcoholemia y Conducción Peligrosa",
    "statement": "En un control vehicular nocturno de la División de Tránsito Terrestre, un Cabo detiene a un conductor que emana fuerte aliento alcohólico y muestra marcha vacilante. El dispositivo de alcotest arroja 135 mg/dl de alcohol en aire espirado. ¿Cuál es el procedimiento legal correspondiente?",
    "options": [
      {
        "key": "A",
        "text": "Imponer únicamente una esquela por falta muy grave y permitir que el conductor continúe su marcha si lo acompaña un familiar sobrio."
      },
      {
        "key": "B",
        "text": "Proceder a la detención en flagrancia por el delito de Conducción Peligrosa de Vehículos de Motor (Art. 147-E Código Penal), lectura de derechos, decomiso de la licencia de conducir e incautación preventiva del vehículo."
      },
      {
        "key": "C",
        "text": "Retener el vehículo por 24 horas y concederle una amonestación verbal sin remitir a la Fiscalía."
      },
      {
        "key": "D",
        "text": "Obligar al conductor a firmar un pagaré a favor de la municipalidad y dejarlo en libertad."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Conforme al Art. 147-E del Código Penal y la Ley de Transporte Terrestre, Tránsito y Seguridad Vial, superar el límite normativo de alcohol al volante constituye delito de peligro abstracto (Conducción Peligrosa), obligando a la detención en flagrancia del conductor, retiro de licencia e inmovilización/remisión del vehículo.",
    "legalBasis": "Art. 147-E del Código Penal y Ley de Transporte Terrestre, Tránsito y Seguridad Vial de El Salvador.",
    "distractorRationale": {
      "A": "Un nivel de 135 mg/dl supera el umbral administrativo y constituye delito penal obligatorio de flagrancia; omitirlo configuraría Incumplimiento de Deberes.",
      "B": "Respuesta correcta. Procede la detención formal con lectura de derechos y remisión a las autoridades correspondientes.",
      "C": "La policía no puede resolver extrajudicialmente delitos penales perseguibles de oficio.",
      "D": "Es un procedimiento completamente ilegal y arbitrario."
    }
  },
  {
    "id": "pnc-cabo-004",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos ITOP / Embalaje Balístico y Cadena de Custodia",
    "statement": "Durante una Inspección Técnica Ocular Policial (ITOP) en un terreno rural, un Cabo localiza un arma de fuego tipo pistola calibre 9mm y tres casquillos percutidos semienterrados. Conforme a los protocolos de criminalística de la División de Policía Técnica y Científica (DPTC) y las reglas de cadena de custodia (Arts. 250 y 251 PrPn), ¿cuál es el procedimiento pericial correcto para la recolección y embalaje del arma de fuego?",
    "options": [
      {
        "key": "A",
        "text": "Introducir un bolígrafo metálico o vara dentro del cañón del arma para levantarla sin tocarla y guardarla en una bolsa de plástico hermética con agua."
      },
      {
        "key": "B",
        "text": "Manipular el arma con guantes de nitrilo tomándola por el guardamonte o bordes estriados de las cachas, fijarla fotográficamente in situ con testigo métrico, descargarla con medidas de seguridad orientando el cañón a zona segura, embalarla en caja de cartón rígido sujetada con bridas o cinchos plásticos y anexar la boleta de cadena de custodia sellada."
      },
      {
        "key": "C",
        "text": "Limpiar con un trapo húmedo la suciedad exterior del arma para identificar con claridad el número de serie antes de entregarla al fiscal."
      },
      {
        "key": "D",
        "text": "Colocar el arma y los casquillos juntos dentro de una misma bolsa de tela sin rotular para agilizar el traslado a la sede policial."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Manual de Procedimientos ITOP y los Arts. 250-251 PrPn exigen fijación fotográfica previa con testigo métrico, uso de guantes, manipulación por zonas de menor contacto dactilar, descarga preventiva apuntando a lugar seguro, embalaje individual en cajas rígidas con sujeción para evitar fricción y evitar pérdida de huellas dactilares o residuos de disparo, prohibiendo terminantemente introducir objetos en el ánima del cañón.",
    "legalBasis": "Arts. 250, 251 y 252 del Código Procesal Penal de El Salvador; Manual de Cadena de Custodia DPTC-PNC.",
    "distractorRationale": {
      "A": "Introducir objetos en el ánima del cañón raya el estriado balístico, alterando irreversiblemente las marcas de identidad pericial del arma.",
      "B": "Respuesta correcta. Cumple con la fijación, medidas de seguridad de descarga, preservación dactiloscópica y embalaje reglamentario.",
      "C": "Limpiar el arma destruye huellas dactilares latentes y posibles muestras biológicas o de pólvora.",
      "D": "Mezclar indicios balísticos produce contaminación cruzada y vulnera la trazabilidad individual exigida por la cadena de custodia."
    }
  },
  {
    "id": "pnc-cabo-005",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Flagrancia y Régimen Penal Juvenil / Ley de Responsabilidad Penal Juvenil (LRPJ)",
    "statement": "Una patrulla comandada por un Cabo sorprende en flagrancia a un adolescente de 16 años portando un arma de fuego artesanal (\"trabuco\") y dinero en efectivo exigido momentos antes bajo amenazas a un comerciante local. ¿Cuál es el procedimiento obligatorio e inmediato que debe ejecutar el Cabo conforme a la Ley de Responsabilidad Penal Juvenil (LRPJ)?",
    "options": [
      {
        "key": "A",
        "text": "Ingresar al adolescente a las bartolinas comunes junto a los adultos detenidos por extorsión para asegurar su custodia."
      },
      {
        "key": "B",
        "text": "Notificar de inmediato la privación de libertad a la FGR (Unidad Penal Juvenil) y a la Procuraduría General de la República (PGR) para garantizar su defensa técnica, mantenerlo estrictamente separado de adultos, informar a sus padres o responsables y remitirlo dentro del plazo legal de 24 horas."
      },
      {
        "key": "C",
        "text": "Interrogar formalmente al adolescente en la patrulla sin presencia de defensor para que revele quién le entregó el arma artesanal."
      },
      {
        "key": "D",
        "text": "Aplicar una sanción disciplinaria administrativa de trabajo comunitario en el puesto policial y entregarlo a su junta comunal sin intervención fiscal."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Ley de Responsabilidad Penal Juvenil (Arts. 48, 49 y 53 LRPJ) y tratados internacionales de protección integral de la niñez prohíben taxativamente recluir a menores con adultos, imponen el aviso perentorio e inmediato a la FGR y a la PGR para su asistencia técnica letrada, el aviso a sus representantes legales y un plazo perentorio de remisión más estricto (24 horas) ante el Juez de Menores competente.",
    "legalBasis": "Arts. 48, 49, 50 y 53 de la Ley de Responsabilidad Penal Juvenil (LRPJ) de El Salvador.",
    "distractorRationale": {
      "A": "Recluir a un menor con personas adultas constituye una violación grave a la LRPJ, a la Ley Crecer Juntos y a la Convención sobre los Derechos del Niño.",
      "B": "Respuesta correcta. Asegura la separación de adultos, asistencia legal de la PGR, aviso fiscal y respeto de plazos procesales juveniles.",
      "C": "Todo interrogatorio a un menor sin asistencia letrada técnica es nulo de pleno derecho y vulnera el debido proceso (Art. 12 Cn.).",
      "D": "La policía carece de facultades jurisdiccionales sancionatorias en materia penal de menores; la acción es pública y privativa de la FGR."
    }
  },
  {
    "id": "pnc-cabo-006",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención Inmediata de Violencia de Género / Auxilio Urgente bajo la LEIV",
    "statement": "A las 02:00 horas, una patrulla policial liderada por un Cabo recibe una alerta radial del Sistema de Emergencias 911 sobre una mujer que grita desesperadamente pidiendo auxilio dentro de una vivienda particular habitada, mientras vecinos reportan golpes contundentes y amenazas de muerte. Al llegar al inmueble, el agresor se niega a abrir la puerta y amenaza con continuar atacando a la víctima. Conforme al Art. 20 de la Constitución y la Ley Especial Integral para una Vida Libre de Violencia para las Mujeres (LEIV), ¿cómo debe proceder el Cabo?",
    "options": [
      {
        "key": "A",
        "text": "Retirarse del lugar y esperar a las 08:00 horas del día siguiente para solicitar una orden judicial escrita de allanamiento ante el Juez de Paz."
      },
      {
        "key": "B",
        "text": "Ingresar de inmediato a la morada mediante la excepción constitucional de auxilio urgente a personas en peligro inminente (Art. 20 Cn.), neutralizar al agresor salvaguardando la vida de la mujer, proceder a su captura en flagrancia y trasladar a la víctima a un centro hospitalario, teniendo prohibido propiciar cualquier conciliación o mediación conforme a la LEIV."
      },
      {
        "key": "C",
        "text": "Convocar a los vecinos del pasaje para que sirvan de árbitros y concilien una solución pacífica entre la pareja en la acera."
      },
      {
        "key": "D",
        "text": "Desconectar el servicio eléctrico de la vivienda y esperar que el agresor decida salir voluntariamente de la casa."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 20 Cn. establece como excepción expresa a la inviolabilidad de morada el deber de socorrer a víctimas de delitos o cuando la vida de una persona corra peligro inminente. Asimismo, los Arts. 55 a 58 de la LEIV mandatan el auxilio policial urgente, la aprehensión del hechor en flagrancia, la atención médica inmediata y prohíben de forma absoluta la conciliación o mediación en delitos de violencia contra las mujeres.",
    "legalBasis": "Art. 20 de la Constitución de la República; Arts. 55, 57 y 58 de la Ley Especial Integral para una Vida Libre de Violencia para las Mujeres (LEIV).",
    "distractorRationale": {
      "A": "Esperar una orden judicial mientras una persona está sufriendo agresión inminente configura delito de Omisión del Deber de Socorro e Incumplimiento de Deberes.",
      "B": "Respuesta correcta. La Constitución autoriza el ingreso urgente para salvar vidas y la LEIV prohíbe taxativamente la conciliación.",
      "C": "La LEIV prohíbe de manera terminante y expresa la mediación y conciliación en situaciones de violencia hacia las mujeres.",
      "D": "Es una táctica dilatoria e irresponsable que pone en peligro mortal a la víctima atrapada con su agresor."
    }
  },
  {
    "id": "pnc-cabo-007",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-007)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "C",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      },
      {
        "key": "D",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Aplica la técnica reglamentaria de triángulo táctico, posición de control, registro exterior y lectura de derechos.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-008",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-008)",
    "options": [
      {
        "key": "A",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "B",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "C",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Lavar la evidencia destruye y diluye los fluidos corporales, constituyendo negligencia pericial o fraude procesal.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-009",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-009)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      },
      {
        "key": "C",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "D",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Los servicios civiles de emergencia médica no ingresan a zonas calientes no aseguradas; el primer respondiente policial debe detener el sangrado."
    }
  },
  {
    "id": "pnc-cabo-010",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-010)",
    "options": [
      {
        "key": "A",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "B",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "C",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "Diferir la lectura de derechos vulnera de forma flagrante el debido proceso y acarrea nulidad procesal absoluta.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-011",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-011)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "C",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      },
      {
        "key": "D",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Inmovilización preventiva, sanciones reglamentarias, peritaje de chasis/placas e inventario formal de bienes.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-012",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-012)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "B",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "C",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Negarse a prestar auxilio ante medidas judiciales vigentes constituye Incumplimiento de Deberes y Denegación de Auxilio.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-013",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-013)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      },
      {
        "key": "C",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "D",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Omitir el registro ante indicios vehementes de portación de armas vulnera el deber de prevención y seguridad de la patrulla."
    }
  },
  {
    "id": "pnc-cabo-014",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-014)",
    "options": [
      {
        "key": "A",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "B",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "C",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "El plástico y el calor aceleran la putrefacción y la degradación enzimática del ADN, invalidando la prueba pericial biológica.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-015",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Patrulla Rural y Delitos Ambientales",
    "statement": "En un patrullaje rural en una zona protegida de amortiguamiento forestal, el Cabo y su equipo interceptan a tres individuos talando árboles de cedro y transportando madera sin autorización del MARN y en posesión de una motosierra y dos escopetas calibre 12 sin registro. ¿Cuál es el procedimiento legal operativo que debe ejecutar el Cabo? (Reactivo pnc-cabo-015)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "C",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      },
      {
        "key": "D",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La tala no autorizada en áreas protegidas y la tenencia de armas de fuego ilegales constituyen delitos flagrantes que obligan a la aprehensión física de los sospechosos, la incautación de herramientas y armas con cadena de custodia e informe técnico pericial.",
    "legalBasis": "Ley Forestal; Art. 261 Código Penal (Depredación de Bosques); Art. 346-B CP; Art. 323 PrPn.",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Control de fuego, cobertura táctica, torniquete arterial proximal efectivo y registro del tiempo transcurrido.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-016",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-016)",
    "options": [
      {
        "key": "A",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "B",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "C",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Los derechos constitucionales son universales y aplican a cualquier tipo de delito sin excepción.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-017",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-017)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      },
      {
        "key": "C",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "D",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "El DUI no es retenible administrativamente por infracciones de tránsito vehicular."
    }
  },
  {
    "id": "pnc-cabo-018",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-018)",
    "options": [
      {
        "key": "A",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "B",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "C",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "Fomentar la reconciliación en un contexto de violencia feminicida es ilegal, prohibido expresamente por la LEIV y pone en peligro mortal a la víctima.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-019",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-019)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "C",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      },
      {
        "key": "D",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Aplica la técnica reglamentaria de triángulo táctico, posición de control, registro exterior y lectura de derechos.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-020",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-020)",
    "options": [
      {
        "key": "A",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "B",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "C",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Lavar la evidencia destruye y diluye los fluidos corporales, constituyendo negligencia pericial o fraude procesal.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-021",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-021)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      },
      {
        "key": "C",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "D",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Los servicios civiles de emergencia médica no ingresan a zonas calientes no aseguradas; el primer respondiente policial debe detener el sangrado."
    }
  },
  {
    "id": "pnc-cabo-022",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-022)",
    "options": [
      {
        "key": "A",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "B",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "C",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "Diferir la lectura de derechos vulnera de forma flagrante el debido proceso y acarrea nulidad procesal absoluta.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-023",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-023)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "C",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      },
      {
        "key": "D",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Inmovilización preventiva, sanciones reglamentarias, peritaje de chasis/placas e inventario formal de bienes.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-024",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-024)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "B",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "C",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Negarse a prestar auxilio ante medidas judiciales vigentes constituye Incumplimiento de Deberes y Denegación de Auxilio.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-025",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Criminalística de Campo / Huellas Dactilares Latentes y Balística",
    "statement": "En un allanamiento en flagrancia tras un asalto a mano armada, el Cabo localiza en una mesa un vaso de vidrio con aparentes huellas dactilares y una cartuchera de cuero. Para evitar la destrucción o superposición de huellas latentes, ¿cuál es el procedimiento pericial estricto que debe ordenar al agente auxiliar antes de embalar? (Reactivo pnc-cabo-025)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      },
      {
        "key": "C",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "D",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los objetos con superficies pulidas no porosas como el vidrio albergan huellas dactilares latentes sumamente frágiles. Deben manipularse exclusivamente con guantes de nitrilo tomándolos por los bordes internos o la base sin fricción, embalarse en cajas de cartón con soporte inmovilizador para que nada roce las paredes exteriores.",
    "legalBasis": "Arts. 250 y 251 PrPn; Manual de Criminalística DPTC-PNC (Sección Dactiloscopía).",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Omitir el registro ante indicios vehementes de portación de armas vulnera el deber de prevención y seguridad de la patrulla."
    }
  },
  {
    "id": "pnc-cabo-026",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-026)",
    "options": [
      {
        "key": "A",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "B",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "C",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "El plástico y el calor aceleran la putrefacción y la degradación enzimática del ADN, invalidando la prueba pericial biológica.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-027",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-027)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "C",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      },
      {
        "key": "D",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Control de fuego, cobertura táctica, torniquete arterial proximal efectivo y registro del tiempo transcurrido.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-028",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-028)",
    "options": [
      {
        "key": "A",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "B",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "C",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Los derechos constitucionales son universales y aplican a cualquier tipo de delito sin excepción.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-029",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-029)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      },
      {
        "key": "C",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "D",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "El DUI no es retenible administrativamente por infracciones de tránsito vehicular."
    }
  },
  {
    "id": "pnc-cabo-030",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-030)",
    "options": [
      {
        "key": "A",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "B",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "C",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "Fomentar la reconciliación en un contexto de violencia feminicida es ilegal, prohibido expresamente por la LEIV y pone en peligro mortal a la víctima.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-031",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-031)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "C",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      },
      {
        "key": "D",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Aplica la técnica reglamentaria de triángulo táctico, posición de control, registro exterior y lectura de derechos.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-032",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-032)",
    "options": [
      {
        "key": "A",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "B",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "C",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Lavar la evidencia destruye y diluye los fluidos corporales, constituyendo negligencia pericial o fraude procesal.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-033",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-033)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      },
      {
        "key": "C",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "D",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Los servicios civiles de emergencia médica no ingresan a zonas calientes no aseguradas; el primer respondiente policial debe detener el sangrado."
    }
  },
  {
    "id": "pnc-cabo-034",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-034)",
    "options": [
      {
        "key": "A",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "B",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "C",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "Diferir la lectura de derechos vulnera de forma flagrante el debido proceso y acarrea nulidad procesal absoluta.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-035",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Penales / Identificación por Fotografía y Rueda de Personas",
    "statement": "Una víctima de robo con intimidación llega al puesto policial y manifiesta poder identificar visualmente al hechor entre un álbum de fichas policiales. Conforme a las reglas de los Arts. 253 a 257 PrPn, ¿cuál es el estándar legal obligatorio para que el reconocimiento por fotografía practicado por la policía tenga validez procesal en la fase investigativa? (Reactivo pnc-cabo-035)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "C",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      },
      {
        "key": "D",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El reconocimiento por fotografías en sede policial es una medida investigativa urgente que exige mostrar a la víctima un grupo de no menos de cuatro a seis fotografías de personas con fisonomías semejantes, en condiciones de imparcialidad, sin inducir la respuesta y levantando acta circunstanciada que servirá como indicio para solicitar la rueda de personas judicial formal.",
    "legalBasis": "Arts. 253, 257 y 279 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Inmovilización preventiva, sanciones reglamentarias, peritaje de chasis/placas e inventario formal de bienes.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-036",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-036)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "B",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "C",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Negarse a prestar auxilio ante medidas judiciales vigentes constituye Incumplimiento de Deberes y Denegación de Auxilio.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-037",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-037)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      },
      {
        "key": "C",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "D",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Omitir el registro ante indicios vehementes de portación de armas vulnera el deber de prevención y seguridad de la patrulla."
    }
  },
  {
    "id": "pnc-cabo-038",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-038)",
    "options": [
      {
        "key": "A",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "B",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "C",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "El plástico y el calor aceleran la putrefacción y la degradación enzimática del ADN, invalidando la prueba pericial biológica.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-039",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-039)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "C",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      },
      {
        "key": "D",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Control de fuego, cobertura táctica, torniquete arterial proximal efectivo y registro del tiempo transcurrido.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-040",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-040)",
    "options": [
      {
        "key": "A",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "B",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "C",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Los derechos constitucionales son universales y aplican a cualquier tipo de delito sin excepción.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-041",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-041)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      },
      {
        "key": "C",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "D",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "El DUI no es retenible administrativamente por infracciones de tránsito vehicular."
    }
  },
  {
    "id": "pnc-cabo-042",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-042)",
    "options": [
      {
        "key": "A",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "B",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "C",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "Fomentar la reconciliación en un contexto de violencia feminicida es ilegal, prohibido expresamente por la LEIV y pone en peligro mortal a la víctima.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-043",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-043)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "C",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      },
      {
        "key": "D",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Aplica la técnica reglamentaria de triángulo táctico, posición de control, registro exterior y lectura de derechos.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-044",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-044)",
    "options": [
      {
        "key": "A",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "B",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "C",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Lavar la evidencia destruye y diluye los fluidos corporales, constituyendo negligencia pericial o fraude procesal.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-045",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Primer Respondiente / Manejo de Artefactos Explosivos Improvisados (AEI)",
    "statement": "En un contenedor de basura contiguo a un mercado municipal, una patrulla al mando de un Cabo observa una mochila deportiva entreabierta de la que sobresalen cables eléctricos, un teléfono celular adherido con cinta adhesiva y una botella con clavos y pólvora. ¿Cuál es el protocolo de seguridad ineludible que debe ejecutar el Cabo de inmediato? (Reactivo pnc-cabo-045)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      },
      {
        "key": "C",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "D",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ante sospecha fundada de un artefacto explosivo improvisado (AEI), el primer respondiente policial tiene prohibido tocar, mover, abrir o transmitir por radiofrecuencia a corta distancia; debe establecer un perímetro de seguridad mínimo de 100 a 300 metros, evacuar a la población civil a cubierto y convocar de urgencia al equipo de desactivación de la División de Armas y Explosivos (DAE).",
    "legalBasis": "Protocolo de Seguridad contra Amenazas de Explosivos de la División de Armas y Explosivos (DAE-PNC); Arts. 191 PrPn.",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Los servicios civiles de emergencia médica no ingresan a zonas calientes no aseguradas; el primer respondiente policial debe detener el sangrado."
    }
  },
  {
    "id": "pnc-cabo-046",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-046)",
    "options": [
      {
        "key": "A",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "B",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "C",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "Diferir la lectura de derechos vulnera de forma flagrante el debido proceso y acarrea nulidad procesal absoluta.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-047",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-047)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "C",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      },
      {
        "key": "D",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Inmovilización preventiva, sanciones reglamentarias, peritaje de chasis/placas e inventario formal de bienes.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-048",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-048)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "B",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "C",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Negarse a prestar auxilio ante medidas judiciales vigentes constituye Incumplimiento de Deberes y Denegación de Auxilio.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-049",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-049)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      },
      {
        "key": "C",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "D",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Omitir el registro ante indicios vehementes de portación de armas vulnera el deber de prevención y seguridad de la patrulla."
    }
  },
  {
    "id": "pnc-cabo-050",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-050)",
    "options": [
      {
        "key": "A",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "B",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "C",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "El plástico y el calor aceleran la putrefacción y la degradación enzimática del ADN, invalidando la prueba pericial biológica.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-051",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-051)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "C",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      },
      {
        "key": "D",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Control de fuego, cobertura táctica, torniquete arterial proximal efectivo y registro del tiempo transcurrido.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-052",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-052)",
    "options": [
      {
        "key": "A",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "B",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "C",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Los derechos constitucionales son universales y aplican a cualquier tipo de delito sin excepción.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-053",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-053)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      },
      {
        "key": "C",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "D",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "El DUI no es retenible administrativamente por infracciones de tránsito vehicular."
    }
  },
  {
    "id": "pnc-cabo-054",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-054)",
    "options": [
      {
        "key": "A",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "B",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "C",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "Fomentar la reconciliación en un contexto de violencia feminicida es ilegal, prohibido expresamente por la LEIV y pone en peligro mortal a la víctima.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-055",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Atención a Víctimas Vulnerables / Niñez y Adolescencia (Ley Crecer Juntos)",
    "statement": "Durante un operativo nocturno, una patrulla policial localiza a dos niños de 5 y 8 años deambulando solos a las 23:30 horas en un predio de venta de licor, descalzos, con signos de desnutrición severa y lesiones cutáneas de maltrato físico antiguo. Conforme a la Ley Crecer Juntos y protocolos PNC, ¿cuál es la actuación inmediata del Cabo? (Reactivo pnc-cabo-055)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "C",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      },
      {
        "key": "D",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bajo la doctrina de protección integral y la Ley Crecer Juntos, los funcionarios policiales deben resguardar de inmediato a los infantes en un entorno seguro y cálido, coordinar auxilio médico hospitalario urgente, dar aviso de oficio e inmediato al CONAPINA y a la FGR para el inicio de medidas de protección y procesar penalmente a los progenitores o cuidadores por abandono y maltrato.",
    "legalBasis": "Arts. 16, 17, 115 y 118 de la Ley Crecer Juntos; Arts. 199 Código Penal (Abandono y Desamparo de Personas).",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Aplica la técnica reglamentaria de triángulo táctico, posición de control, registro exterior y lectura de derechos.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-056",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-056)",
    "options": [
      {
        "key": "A",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "B",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "C",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Lavar la evidencia destruye y diluye los fluidos corporales, constituyendo negligencia pericial o fraude procesal.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-057",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-057)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      },
      {
        "key": "C",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "D",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Los servicios civiles de emergencia médica no ingresan a zonas calientes no aseguradas; el primer respondiente policial debe detener el sangrado."
    }
  },
  {
    "id": "pnc-cabo-058",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-058)",
    "options": [
      {
        "key": "A",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "B",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "C",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "C",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Diferir la lectura de derechos vulnera de forma flagrante el debido proceso y acarrea nulidad procesal absoluta.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-059",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-059)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "C",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      },
      {
        "key": "D",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      }
    ],
    "correctAnswer": "D",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Inmovilización preventiva, sanciones reglamentarias, peritaje de chasis/placas e inventario formal de bienes.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-060",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-060)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "B",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "C",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Negarse a prestar auxilio ante medidas judiciales vigentes constituye Incumplimiento de Deberes y Denegación de Auxilio.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-cabo-061",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-061)",
    "options": [
      {
        "key": "A",
        "text": "Abalanzarse ambos policías sobre el individuo por la espalda sin advertencia verbal previa para derribarlo contra el pavimento."
      },
      {
        "key": "B",
        "text": "Ordenar al sujeto adoptar posición de seguridad (manos visibles sobre la nuca o pared, piernas separadas y desbalanceadas), mantener cobertura de seguridad con el agente de apoyo, palpar metódicamente de arriba hacia abajo sobre la vestimenta exterior sin introducir las manos en bolsillos hasta no detectar un objeto duro o punzante, y en caso de hallazgo ilícito, proceder a la lectura formal inmediata de derechos y detención."
      },
      {
        "key": "C",
        "text": "Exigir al ciudadano desnudarse completamente en la vía pública frente a transeúntes antes de solicitar su documento único de identidad (DUI)."
      },
      {
        "key": "D",
        "text": "Limitarse a preguntarle verbalmente si porta armas y, si responde negativamente, permitirle retirarse sin verificación física alguna."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "El uso desmedido de fuerza física sin resistencia activa vulnera el principio de proporcionalidad y los estándares de derechos humanos.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El despojo forzoso de prendas en vía pública constituye vejación arbitraria y violación grave al Art. 19 inc. 2° PrPn y derechos humanos.",
      "D": "Omitir el registro ante indicios vehementes de portación de armas vulnera el deber de prevención y seguridad de la patrulla."
    }
  },
  {
    "id": "pnc-cabo-062",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-062)",
    "options": [
      {
        "key": "A",
        "text": "Introducir inmediatamente la prenda húmeda dentro de una bolsa plástica transparente cerrada al vacío y exponerla al sol en el parabrisas de la patrulla para secarla rápido."
      },
      {
        "key": "B",
        "text": "Lavar la prenda con agua destilada y jabón neutro en el lugar para aislar la mancha biológica de la tierra circundante."
      },
      {
        "key": "C",
        "text": "Fijar fotográficamente la prenda con testigo métrico, dejar secar la muestra a temperatura ambiente protegida de la luz solar directa y corrientes de aire, evitar el embalaje en bolsas plásticas herméticas (que favorecen hongos y degradación del ADN), embalar en bolsa de papel kraft o caja de cartón transpirable, rotular la etiqueta de cadena de custodia sellada y mantener cadena de frío si se requiere traslado prolongado."
      },
      {
        "key": "D",
        "text": "Entregar la prenda mojada directamente en la mano a la víctima para que la lave y la presente limpia en el juzgado."
      }
    ],
    "correctAnswer": "C",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "El plástico y el calor aceleran la putrefacción y la degradación enzimática del ADN, invalidando la prueba pericial biológica.",
      "B": "Respuesta correcta. Cumple con el secado a temperatura ambiente, embalaje en papel kraft, etiquetado y precinto inviolable.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Entregar la evidencia a la víctima destruye la cadena de custodia y la pureza probatoria del proceso."
    }
  },
  {
    "id": "pnc-cabo-063",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-063)",
    "options": [
      {
        "key": "A",
        "text": "Permanecer de pie en campo abierto bajo fuego enemigo vendando suavemente la herida con gasas esterilizadas."
      },
      {
        "key": "B",
        "text": "Aplicar un torniquete con una cuerda metálica apretada al cuello del agente para reducir el flujo sanguíneo sistémico general."
      },
      {
        "key": "C",
        "text": "Esperar a que una ambulancia de Cruz Roja ingrese a la línea de fuego sin antes neutralizar a los atacantes armados."
      },
      {
        "key": "D",
        "text": "Suprimir la amenaza armada enemiga, ordenar al herido ponerse a cubierto o extraerlo a zona segura y colocar inmediatamente un torniquete de aplicación táctica (CAT/SOFTT) sobre la ropa en la parte proximal alta del muslo, ajustándolo con el molinete hasta que el sangrado arterial cese por completo y anotar la hora exacta de aplicación en la frente o cinta del torniquete."
      }
    ],
    "correctAnswer": "D",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Atender sin cobertura bajo fuego genera más bajas policiales y la gasa simple es inútil frente a un choque hipovolémico arterial agudo.",
      "B": "Respuesta correcta. Control de fuego, cobertura táctica, torniquete arterial proximal efectivo y registro del tiempo transcurrido.",
      "C": "Una acción absurda y letal que provocaría asfixia inmediata del funcionario herido.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-cabo-064",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-064)",
    "options": [
      {
        "key": "A",
        "text": "En el acto mismo de la privación de libertad o inmediatamente después de asegurar físicamente al sospechoso, leyéndole en voz alta de forma clara y comprensible los derechos del Art. 82 PrPn (saber el motivo de la detención, guardar silencio sin que perjudique, no autoincriminarse, designar abogado defensor y comunicarse con un familiar), haciéndolo constar detalladamente en el acta de detención."
      },
      {
        "key": "B",
        "text": "Únicamente 70 horas después, minutos antes de que el detenido sea presentado ante el Juez de Paz en audiencia inicial."
      },
      {
        "key": "C",
        "text": "La lectura de derechos no es obligatoria para la PNC si el delito involucra vehículos robados o armas de fuego."
      },
      {
        "key": "D",
        "text": "Solo si el detenido presenta una solicitud por escrito firmada por un notario salvadoreño dentro de las bartolinas policiales."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. La garantía opera in situ al consumar la aprehensión, documentándose fielmente en el acta.",
      "C": "Los derechos constitucionales son universales y aplican a cualquier tipo de delito sin excepción.",
      "D": "La información de derechos es un deber imperativo de oficio de la policía, no un trámite notarial rogado."
    }
  },
  {
    "id": "pnc-cabo-065",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-065)",
    "options": [
      {
        "key": "A",
        "text": "Dejar que el camión continúe si el conductor promete comprar llantas nuevas en el siguiente poblado."
      },
      {
        "key": "B",
        "text": "Imponer las esquelas de infracción administrativa correspondientes por llantas lisas, placas alteradas y documentos vencidos, remitir e inmovilizar preventivamente el vehículo automotor enviándolo a predios autorizados con inventario riguroso de la carga, y verificar en el sistema policial y de FGR si las placas o número de chasis poseen reporte activo de hurto o robo para proceder a detención penal si aplica."
      },
      {
        "key": "C",
        "text": "Vender la carga del camión en la orilla de la carretera para pagar la multa en efectivo de inmediato."
      },
      {
        "key": "D",
        "text": "Decomisar la cédula de identidad del conductor y permitirle seguir circulando sin tarjeta de circulación ni llantas aptas."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Permitir circular a un automotor con llantas lisas y sin papeles atenta contra la seguridad colectiva y tipifica omisión de deberes.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La apropiación o venta de bienes retenidos constituye delito grave de Peculado o Concusión.",
      "D": "El DUI no es retenible administrativamente por infracciones de tránsito vehicular."
    }
  },
  {
    "id": "pnc-cabo-066",
    "rank": "cabo",
    "escalafon": "Cabo",
    "topic": "Procedimientos Operativos / Técnicas de Conducción Policial Defensiva y Persecución",
    "statement": "Al iniciar una persecución vehicular en zona urbana de alta densidad peatonal tras un vehículo implicado en robo, el conductor sospechoso realiza maniobras temerarias invadiendo aceras. Conforme a las normas operativas de la PNC y los principios de seguridad policial, ¿cómo debe ponderar el Cabo comandante la continuidad táctica de la persecución vehicular? (Reactivo pnc-cabo-066)",
    "options": [
      {
        "key": "A",
        "text": "Pedir al agresor que se calme y proponer a la víctima que le prepare la cena para reconciliarse pacíficamente."
      },
      {
        "key": "B",
        "text": "Informar a la mujer que la policía no interviene en pleitos matrimoniales y sugerirle que busque un refugio por su cuenta."
      },
      {
        "key": "C",
        "text": "Desarmar y neutralizar al agresor salvaguardando la vida de la víctima y los agentes, proceder a su detención en flagrancia por los delitos de Violencia Intrafamiliar, Expresiones de Violencia contra las Mujeres y Desobediencia a Medidas Cautelares o de Protección (Art. 338-A CP), lectura de derechos, secuestro del machete como evidencia con cadena de custodia e informe inmediato a la FGR."
      },
      {
        "key": "D",
        "text": "Multar al agresor con diez dólares y permitirle seguir conviviendo en el mismo dormitorio de la mujer amenazada."
      }
    ],
    "correctAnswer": "C",
    "explanation": "En persecuciones vehiculares urbanas rige el principio de ponderación del riesgo: si el peligro potencial que la persecución genera para la vida de transeúntes inocentes sobrepasa la gravedad inmediata del delito perseguido, el mando policial debe priorizar la vida humana, mantener el rastreo a distancia mediante enlace radial, monitoreo de cámaras de videovigilancia y cierres de contención perimétricos adelante.",
    "legalBasis": "Reglamento de Tránsito y Seguridad Vial; Manual de Patrullas Policiales PNC; Principios de Necesidad y Proporcionalidad.",
    "distractorRationale": {
      "A": "Fomentar la reconciliación en un contexto de violencia feminicida es ilegal, prohibido expresamente por la LEIV y pone en peligro mortal a la víctima.",
      "B": "Respuesta correcta. Captura en flagrancia por desobediencia a medidas judiciales, incautación del arma blanca y protección integral.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Las autoridades policiales carecen de competencia para imponer multas monetarias en materia de violencia intrafamiliar."
    }
  },
  {
    "id": "pnc-sargento-001",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Ley de la Carrera Policial",
    "statement": "Un Sargento en funciones de Jefe de Puesto detecta que un agente bajo su mando ha faltado a su servicio de guardia nocturno sin causa justificada ni aviso previo por segunda vez en el mes, encontrándose en estado de ebriedad en una cantina cercana vistiendo parcialmente el uniforme policial. ¿Qué clasificación reviste esta conducta según el régimen disciplinario de la Ley de la Carrera Policial?",
    "options": [
      {
        "key": "A",
        "text": "Falta leve que se sanciona con una llamada de atención verbal privada por parte del Sargento sin registro en el expediente."
      },
      {
        "key": "B",
        "text": "Falta muy grave por abandono del servicio e ingerir bebidas alcohólicas vistiendo prendas del uniforme policial, ameritando inicio de expediente disciplinario para destitución o suspensión sin goce de sueldo ante el Tribunal Disciplinario."
      },
      {
        "key": "C",
        "text": "Infracción laboral común sujeta a las normas del Código de Trabajo privado."
      },
      {
        "key": "D",
        "text": "Falta que prescribe en 24 horas y no requiere informe a la Inspectoría General."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Ley de la Carrera Policial tipifica como Faltas Muy Graves el abandono del servicio asignado y la ingestión de bebidas alcohólicas o estupefacientes vistiendo el uniforme o insignias policiales o portando el arma de equipo, facultando el inicio de procedimiento ante el Tribunal Disciplinario con posibles sanciones de suspensión o destitución definitiva.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Sección de Faltas Disciplinarias y Sanciones).",
    "distractorRationale": {
      "A": "El abandono de servicio con uniforme y ebriedad no es falta leve; encubre un grave riesgo a la seguridad pública y desprestigio institucional.",
      "B": "Respuesta correcta. La gravedad de la conducta amerita el procedimiento de falta muy grave ante el órgano disciplinario competente.",
      "C": "El personal de la PNC se rige por su régimen estatutario especial (Ley de la Carrera Policial), no por el Código de Trabajo común.",
      "D": "Las faltas graves y muy graves tienen plazos de prescripción más amplios y exigen investigación rigurosa."
    }
  },
  {
    "id": "pnc-sargento-002",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Coordinación Interinstitucional / Dirección Funcional con la FGR",
    "statement": "Durante la investigación preliminar de una serie de hurtos continuados en una zona comercial, un Sargento investigador propone realizar un allanamiento con quebrantamiento de cerraduras en un inmueble privado habitado donde se presume almacenan la mercadería. ¿Bajo qué requisito indispensable puede ejecutarse esta diligencia sin violentar el Art. 20 de la Constitución?",
    "options": [
      {
        "key": "A",
        "text": "Con la sola autorización verbal del Sargento de guardia de turno."
      },
      {
        "key": "B",
        "text": "Mediante orden judicial de allanamiento fundamentada emitida por el Juez de Paz o de Instrucción competente a petición del Fiscal del caso, salvo flagrancia delictiva o peligro inminente para la vida humana."
      },
      {
        "key": "C",
        "text": "Con un oficio firmado por el alcalde municipal de la localidad."
      },
      {
        "key": "D",
        "text": "Por decisión discrecional de los agentes captores siempre que sea en horario diurno."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 20 de la Constitución salvadoreña consagra la inviolabilidad de la morada. El allanamiento solo puede realizarse con orden escrita fundada de juez competente promovida por la FGR, con excepción de flagrancia delictiva, auxilio urgente a personas en peligro inminente o desastre.",
    "legalBasis": "Art. 20 de la Constitución de la República y Arts. 195 a 198 del Código Procesal Penal.",
    "distractorRationale": {
      "A": "Ningún mando policial posee potestad constitucional para ordenar allanamientos a morada por sí solo sin orden judicial previa.",
      "B": "Respuesta correcta. La reserva judicial garantiza la legalidad de la intromisión en el domicilio.",
      "C": "Los alcaldes municipales no tienen facultades judiciales penales ni procesales.",
      "D": "El horario no exime del requisito ineludible de la orden judicial de allanamiento."
    }
  },
  {
    "id": "pnc-sargento-003",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario Policial / Faltas Graves vs. Muy Graves y Debido Proceso",
    "statement": "Un Sargento de la PNC recibe la denuncia de un ciudadano en la que señala que un cabo se negó deliberadamente a recibirle una denuncia formal por amenazas y le profirió expresiones despectivas y soeces en la guardia de atención ciudadana. De acuerdo con el régimen sancionatorio de la Ley de la Carrera Policial, ¿cuál es la vía procedimental y la competencia disciplinaria aplicable?",
    "options": [
      {
        "key": "A",
        "text": "Imponerle inmediatamente 30 días de arresto formal en las celdas de la delegación sin concederle audiencia ni formular pliego de cargos."
      },
      {
        "key": "B",
        "text": "Elaborar de inmediato el informe circunstanciado de los hechos, remitirlo a la Unidad de Investigación Disciplinaria (UID) o Tribunal Disciplinario respectivo y a la Inspectoría General de Seguridad Pública, garantizando al miembro policial el derecho a la defensa y debido proceso para la calificación de falta grave o muy grave."
      },
      {
        "key": "C",
        "text": "Archivar la queja si el ciudadano no presenta la declaración ratificada ante un Notario público salvadoreño."
      },
      {
        "key": "D",
        "text": "Reubicar al cabo de puesto de guardia sin iniciar ninguna investigación administrativa para no afectar el clima laboral de la subdelegación."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Ley de la Carrera Policial establece que ante conductas que configuren faltas graves o muy graves (como desatención deliberada a la ciudadanía, trato vejatorio o incumplimiento de deberes), el mando supervisor debe documentar los hechos y remitirlos a la autoridad disciplinaria correspondiente y a la Inspectoría General, respetando estrictamente el derecho de defensa, contradicción y audiencia (Art. 11 y 12 Cn.).",
    "legalBasis": "Arts. 56 a 65 de la Ley de la Carrera Policial de El Salvador; Ley de la Inspectoría General de Seguridad Pública.",
    "distractorRationale": {
      "A": "El arresto disciplinario de facto sin proceso administrativo previo viola el derecho constitucional de defensa y presunción de inocencia (Arts. 11 y 12 Cn.).",
      "B": "Respuesta correcta. Cumple con el deber de documentar, remitir al tribunal disciplinario competente e informar a la Inspectoría General respetando garantías.",
      "C": "Las denuncias ciudadanas contra servidores policiales no requieren acta notarial para ser investigadas de oficio.",
      "D": "La omisión de reporte disciplinario por parte del mando constituye a su vez una falta grave de encubrimiento e incumplimiento de deberes."
    }
  },
  {
    "id": "pnc-sargento-004",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Control de Armería y Bitácora de Armamento en Subdelegaciones",
    "statement": "Durante el relevo de guardia en una Subdelegación policial, el Sargento entrante efectúa la revista física del armamento y municiones cotejándolo contra el Libro de Control de Armería. Al finalizar el conteo, detecta que falta un fusil de asalto calibre 5.56mm asignado al equipo táctico saliente y 60 cartuchos, sin que exista boleta de salida firmada ni asignación registrada. ¿Cuál es la actuación táctica y legal inmediata que debe adoptar el Sargento?",
    "options": [
      {
        "key": "A",
        "text": "Esperar al siguiente turno para consultar informalmente a los agentes si alguno se llevó el arma a su vivienda particular."
      },
      {
        "key": "B",
        "text": "No recibir el puesto de armería, asegurar y congelar de inmediato el libro de control y bitácoras, ordenar la inmovilización del personal del turno saliente en las instalaciones, rendir informe urgente al Jefe de Delegación, dar aviso inmediato a la FGR para iniciar la investigación penal y solicitar peritaje a la DPTC."
      },
      {
        "key": "C",
        "text": "Comprar munición similar en una armería comercial privada para reponer el faltante antes de que la jefatura superior lo note."
      },
      {
        "key": "D",
        "text": "Anotar en el libro que el fusil fue enviado a mantenimiento preventivo sin verificar la orden técnica institucional."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El extravío o sustracción de armas de fuego y municiones institucionales representa un grave peligro para la seguridad nacional y un delito penal. El supervisor de guardia no debe convalidar el relevo irregular, debe custodiar los libros de registro (indicio documental), asegurar la presencia del personal saliente y reportar de inmediato a la FGR y autoridades superiores de la PNC.",
    "legalBasis": "Manual de Procedimientos de Armería de la PNC; Arts. 271 PrPn y Arts. 306 y 346-B del Código Penal de El Salvador.",
    "distractorRationale": {
      "A": "La demora y la informalidad ante la pérdida de un arma de guerra institucional constituye negligencia grave y complicidad procesal.",
      "B": "Respuesta correcta. Congela la escena documental, inmoviliza personal para indagación y activa formalmente los canales penales y disciplinarios.",
      "C": "Alterar o reponer ilícitamente pertrechos institucionales constituye delito de fraude procesal y encubrimiento.",
      "D": "Asentar hechos falsos en libros oficiales configura el delito de Falsedad Documental Agravada (Art. 284 CP)."
    }
  },
  {
    "id": "pnc-sargento-005",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional con FGR / Actos Urgentes de Comprobación Iniciales",
    "statement": "Un Sargento de investigaciones arriba al escenario de un robo agravado a una agencia bancaria donde los delincuentes ya huyeron. El Fiscal de guardia se encuentra atendiendo una diligencia judicial foránea y demorará dos horas en presentarse. Conforme al Art. 271 del Código Procesal Penal, ¿cuál es el alcance de las facultades de actuación que la policía puede y debe ejercer por iniciativa propia antes del direccionamiento formal fiscal?",
    "options": [
      {
        "key": "A",
        "text": "Permanecer fuera del perímetro de la sucursal sin realizar ninguna diligencia hasta que el fiscal arribe y autorice por escrito cada paso."
      },
      {
        "key": "B",
        "text": "Realizar por iniciativa propia los actos urgentes de comprobación indispensables: auxiliar a posibles víctimas lesionadas, acordonar y preservar la escena, identificar testigos presenciales e interrogarlos preliminarmente, recopilar grabaciones de cámaras de seguridad con riesgo de sobreescritura, y rastrear indicios perecederos, documentándolo todo en acta para entrega inmediata a la FGR."
      },
      {
        "key": "C",
        "text": "Intervenir judicialmente las cuentas bancarias de los empleados de la agencia sin necesidad de control judicial ni fiscal."
      },
      {
        "key": "D",
        "text": "Negociar con la administración del banco el archivo reservado del incidente si la compañía aseguradora reintegra el dinero sustraído."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 271 PrPn faculta expresamente a la policía a realizar por iniciativa propia los actos urgentes de comprobación destinados a asegurar indicios, auxiliar a víctimas, identificar sospechosos y testigos, y evitar que el delito produzca consecuencias ulteriores mientras se apersona o comunica la representación fiscal, debiendo remitir el informe en un plazo perentorio.",
    "legalBasis": "Arts. 271, 273 y 276 del Código Procesal Penal de El Salvador.",
    "distractorRationale": {
      "A": "La inacción policial ante indicios volátiles vulnera el Art. 271 PrPn y provoca la pérdida irremediable de evidencia probatoria.",
      "B": "Respuesta correcta. Define con exactitud la potestad legal policial para la ejecución autónoma de actos urgentes de comprobación.",
      "C": "La intervención de cuentas bancarias requiere estricta autorización judicial por afectar el secreto bancario y garantías patrimoniales.",
      "D": "Los delitos de acción pública como el robo agravado no son transigibles ni susceptibles de convenios privados que eludan la justicia penal."
    }
  },
  {
    "id": "pnc-sargento-006",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Medios de Coerción y Custodia de Privados de Libertad",
    "statement": "Al supervisar el traslado de cuatro imputados de alta peligrosidad desde una subdelegación hacia el Centro Judicial para una audiencia preliminar, un Sargento de guardia observa que un agente pretende atar a los reos de pies y manos entre sí con cables metálicos y someterlos a posturas de asfixia posicional durante el viaje en la palangana del vehículo pick-up policial. Conforme al Art. 27 de la Constitución y las Reglas Mínimas de la ONU para el Tratamiento de los Reclusos (Reglas Nelson Mandela), ¿cuál es la orden que debe impartir el Sargento?",
    "options": [
      {
        "key": "A",
        "text": "Autorizar el procedimiento si los imputados pertenecen a estructuras de crimen organizado para intimidarlos durante el camino."
      },
      {
        "key": "B",
        "text": "Ordenar de inmediato el cese de dicha práctica abusiva, exigir el empleo exclusivo de esposas o grilletes reglamentarios colocados adecuadamente para evitar lesiones circulatorias, prohibir cualquier trato cruel, inhumano o degradante, y garantizar condiciones dignas y seguras de traslado en la cabina o furgón penitenciario cerrado."
      },
      {
        "key": "C",
        "text": "Permitir el uso de cables metálicos siempre que el traslado dure menos de quince minutos."
      },
      {
        "key": "D",
        "text": "Desligarse del traslado argumentando que la custodia de detenidos en tránsito es responsabilidad exclusiva de la Fiscalía."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 27 de la Constitución prohíbe las penas degradantes, la tortura y los tratos inhumanos. Las Reglas Nelson Mandela de la ONU (Regla 47 y 48) regulan taxativamente los medios de coerción: deben usarse únicamente medios autorizados (esposas reglamentarias), jamás como castigo, prohibiendo amarrar extremidades con cables o cadenas que provoquen asfixia o sufrimiento físico innecesario durante los traslados.",
    "legalBasis": "Art. 27 inc. 2° de la Constitución de El Salvador; Reglas Mínimas de la ONU para el Tratamiento de los Reclusos (Reglas Nelson Mandela).",
    "distractorRationale": {
      "A": "La pertenencia a grupos ilícitos no deroga el principio absoluto de prohibición de tortura y tratos crueles, inhumanos o degradantes.",
      "B": "Respuesta correcta. El mando policial debe ejercer control supervisor para impedir abusos y garantizar el uso regulado y digno de medios coercitivos.",
      "C": "Los medios de sujeción no reglamentarios e improvisados (como cables) están terminantemente prohibidos sin importar la duración.",
      "D": "La seguridad y custodia física de los imputados bajo custodia policial es deber ineludible y directo de los mandos de la PNC."
    }
  },
  {
    "id": "pnc-sargento-007",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-007)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "C",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      },
      {
        "key": "D",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Preservación del indicio, denuncia penal obligatoria por falsedad y apertura de expediente de falta muy grave.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-008",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-008)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "B",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "C",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Liberar irregularmente a un detenido en flagrancia eludiendo a la FGR tipifica favorecimiento o incumplimiento de deberes.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-009",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-009)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      },
      {
        "key": "C",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "D",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "La PNC es un cuerpo estrictamente civil, sin fuero militar ni penas sumarias capitales prohibidas por la Constitución."
    }
  },
  {
    "id": "pnc-sargento-010",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-010)",
    "options": [
      {
        "key": "A",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "B",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "C",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "Pagar cartuchos sin justificar los disparos encubre el uso ilícito de fuerza letal y configura encubrimiento e incumplimiento de deberes.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-011",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-011)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "C",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      },
      {
        "key": "D",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Aseguramiento del reo, protección de instalaciones con medios antidisturbios graduados y auxilio táctico de la UMO.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-012",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-012)",
    "options": [
      {
        "key": "A",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "B",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "C",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "La coacción física y tortura son delitos imprescriptibles prohibidos de manera absoluta por el Art. 31 Cn. y tratados de DDHH.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-013",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-013)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      },
      {
        "key": "C",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "D",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "La condición del detenido jamás justifica la comisión de delitos por parte de los funcionarios de policía."
    }
  },
  {
    "id": "pnc-sargento-014",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-014)",
    "options": [
      {
        "key": "A",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "B",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "C",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "Prolongar la detención más allá del límite constitucional constituye delito de privación de libertad por funcionario y falta muy grave.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-015",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-015)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "C",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      },
      {
        "key": "D",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Tipificación precisa como falta grave y canalización formal ante el Tribunal Disciplinario con respeto al derecho de defensa.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-016",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Bartolinas / Clasificación Penitenciaria y Atención Médica",
    "statement": "En la revisión matutina de bartolinas en una delegación policial, el Sargento de turno detecta que un privado de libertad presenta fiebre de 39.5°C, dificultad respiratoria severa y vómitos con sangre, habiendo solicitado auxilio desde la medianoche sin que el agente llavero lo reportara. ¿Cuál es el deber de garante ineludible del Sargento? (Reactivo pnc-sargento-016)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "B",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "C",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Estado ejerce posición de garante absoluto sobre las personas privadas de libertad. Ante un cuadro médico de urgencia, el supervisor debe ordenar el traslado hospitalario inmediato bajo custodia armada, notificar a Medicina Legal (IML), FGR y sancionar al personal omiso.",
    "legalBasis": "Art. 2 y 65 Cn.; Reglas Nelson Mandela ONU (Reglas 24 a 35); Art. 199 y 321 CP.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Disparar al aire pone en riesgo la vida de terceros por proyectiles perdidos y viola la doctrina policial de uso de armas.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-017",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-017)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      },
      {
        "key": "C",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "D",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "El abandono cobarde del servicio y pérdida de armas de fuego acarrea destitución y pena privativa de libertad."
    }
  },
  {
    "id": "pnc-sargento-018",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-018)",
    "options": [
      {
        "key": "A",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "B",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "C",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Afirmar que no se requiere justificación es un error grave; las capturas arbitrarias sin indicios vulneran la legalidad y saturan el sistema judicial.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-019",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-019)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "C",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      },
      {
        "key": "D",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Preservación del indicio, denuncia penal obligatoria por falsedad y apertura de expediente de falta muy grave.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-020",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-020)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "B",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "C",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Liberar irregularmente a un detenido en flagrancia eludiendo a la FGR tipifica favorecimiento o incumplimiento de deberes.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-021",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-021)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      },
      {
        "key": "C",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "D",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "La PNC es un cuerpo estrictamente civil, sin fuero militar ni penas sumarias capitales prohibidas por la Constitución."
    }
  },
  {
    "id": "pnc-sargento-022",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-022)",
    "options": [
      {
        "key": "A",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "B",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "C",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Pagar cartuchos sin justificar los disparos encubre el uso ilícito de fuerza letal y configura encubrimiento e incumplimiento de deberes.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-023",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-023)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "C",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      },
      {
        "key": "D",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Aseguramiento del reo, protección de instalaciones con medios antidisturbios graduados y auxilio táctico de la UMO.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-024",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-024)",
    "options": [
      {
        "key": "A",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "B",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "C",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "La coacción física y tortura son delitos imprescriptibles prohibidos de manera absoluta por el Art. 31 Cn. y tratados de DDHH.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-025",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-025)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      },
      {
        "key": "C",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "D",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "La condición del detenido jamás justifica la comisión de delitos por parte de los funcionarios de policía."
    }
  },
  {
    "id": "pnc-sargento-026",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Dirección Funcional FGR / Levantamiento de Cadáver y Coordinación Pericial",
    "statement": "Al arribar a una escena de hallazgo de restos óseos semienterrados en una fosa clandestina rural, el Sargento de investigaciones coordina el dispositivo. Ante la complejidad pericial, ¿cuál es el equipo interinstitucional que debe convocar obligatoriamente a través de la dirección funcional de la FGR antes de cualquier excavación? (Reactivo pnc-sargento-026)",
    "options": [
      {
        "key": "A",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "B",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "C",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La exhumación de restos en fosas clandestinas exige peritaje multidisciplinario: antropólogo forense, médico forense del IML, peritos en planimetría y arqueología forense de la DPTC y el fiscal delegado, prohibiendo excavaciones rústicas que destruyan estratos geológicos o restos.",
    "legalBasis": "Arts. 191, 192 y 194 PrPn; Manual de Búsqueda y Recuperación de Restos Óseos FGR/PNC/IML.",
    "distractorRationale": {
      "A": "Prolongar la detención más allá del límite constitucional constituye delito de privación de libertad por funcionario y falta muy grave.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-027",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-027)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "C",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      },
      {
        "key": "D",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Tipificación precisa como falta grave y canalización formal ante el Tribunal Disciplinario con respeto al derecho de defensa.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-028",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-028)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "B",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "C",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Disparar al aire pone en riesgo la vida de terceros por proyectiles perdidos y viola la doctrina policial de uso de armas.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-029",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-029)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      },
      {
        "key": "C",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "D",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "El abandono cobarde del servicio y pérdida de armas de fuego acarrea destitución y pena privativa de libertad."
    }
  },
  {
    "id": "pnc-sargento-030",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-030)",
    "options": [
      {
        "key": "A",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "B",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "C",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "Afirmar que no se requiere justificación es un error grave; las capturas arbitrarias sin indicios vulneran la legalidad y saturan el sistema judicial.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-031",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-031)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "C",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      },
      {
        "key": "D",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Preservación del indicio, denuncia penal obligatoria por falsedad y apertura de expediente de falta muy grave.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-032",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-032)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "B",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "C",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Liberar irregularmente a un detenido en flagrancia eludiendo a la FGR tipifica favorecimiento o incumplimiento de deberes.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-033",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-033)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      },
      {
        "key": "C",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "D",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "La PNC es un cuerpo estrictamente civil, sin fuero militar ni penas sumarias capitales prohibidas por la Constitución."
    }
  },
  {
    "id": "pnc-sargento-034",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-034)",
    "options": [
      {
        "key": "A",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "B",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "C",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "Pagar cartuchos sin justificar los disparos encubre el uso ilícito de fuerza letal y configura encubrimiento e incumplimiento de deberes.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-035",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-035)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "C",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      },
      {
        "key": "D",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Aseguramiento del reo, protección de instalaciones con medios antidisturbios graduados y auxilio táctico de la UMO.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-036",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Régimen Disciplinario / Prescripción de Faltas en la Ley de la Carrera Policial",
    "statement": "Un Sargento tramita un expediente por una falta leve cometida por un agente consistente en presentarse con 15 minutos de retraso a la formación matutina. Conforme a las normas de prescripción de la Ley de la Carrera Policial, ¿cuál es el plazo de prescripción de la acción disciplinaria para faltas leves, graves y muy graves? (Reactivo pnc-sargento-036)",
    "options": [
      {
        "key": "A",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "B",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "C",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La Ley de la Carrera Policial establece plazos estrictos de prescripción extintiva de la potestad sancionadora: un mes para las faltas leves, seis meses para las faltas graves y dos años para las faltas muy graves, computados desde la comisión del hecho o desde que la autoridad tuvo conocimiento.",
    "legalBasis": "Ley de la Carrera Policial de El Salvador (Capítulo de Prescripción de Faltas y Sanciones Disciplinarias).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "La coacción física y tortura son delitos imprescriptibles prohibidos de manera absoluta por el Art. 31 Cn. y tratados de DDHH.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-037",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-037)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      },
      {
        "key": "C",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "D",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "La condición del detenido jamás justifica la comisión de delitos por parte de los funcionarios de policía."
    }
  },
  {
    "id": "pnc-sargento-038",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-038)",
    "options": [
      {
        "key": "A",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "B",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "C",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "Prolongar la detención más allá del límite constitucional constituye delito de privación de libertad por funcionario y falta muy grave.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-039",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-039)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "C",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      },
      {
        "key": "D",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Tipificación precisa como falta grave y canalización formal ante el Tribunal Disciplinario con respeto al derecho de defensa.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-040",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-040)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "B",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "C",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Disparar al aire pone en riesgo la vida de terceros por proyectiles perdidos y viola la doctrina policial de uso de armas.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-041",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-041)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      },
      {
        "key": "C",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "D",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "El abandono cobarde del servicio y pérdida de armas de fuego acarrea destitución y pena privativa de libertad."
    }
  },
  {
    "id": "pnc-sargento-042",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-042)",
    "options": [
      {
        "key": "A",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "B",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "C",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "Afirmar que no se requiere justificación es un error grave; las capturas arbitrarias sin indicios vulneran la legalidad y saturan el sistema judicial.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-043",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-043)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "C",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      },
      {
        "key": "D",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Preservación del indicio, denuncia penal obligatoria por falsedad y apertura de expediente de falta muy grave.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-044",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-044)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "B",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "C",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Liberar irregularmente a un detenido en flagrancia eludiendo a la FGR tipifica favorecimiento o incumplimiento de deberes.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-045",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-045)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      },
      {
        "key": "C",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "D",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "La PNC es un cuerpo estrictamente civil, sin fuero militar ni penas sumarias capitales prohibidas por la Constitución."
    }
  },
  {
    "id": "pnc-sargento-046",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión Operativa / Cadena de Custodia de Drogas e Incautaciones Narcóticas",
    "statement": "En un registro vehicular de rutina, una patrulla descubre 5 paquetes rectangulares sellados con cinta canela conteniendo polvo blanco que reacciona positivo a cocaína en la prueba orientativa con reactivo Scott. Como Sargento supervisor en el lugar, ¿cuál es el procedimiento pericial de custodia y pesaje obligatorio? (Reactivo pnc-sargento-046)",
    "options": [
      {
        "key": "A",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "B",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "C",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Las sustancias estupefacientes incautadas deben ser custodiadas por la División Antinarcóticos (DAN), someterse a pesaje de precisión y prueba de campo in situ frente a testigos o fiscal, embalarse en bolsas de evidencia selladas con cinta de seguridad firmada por los intervinientes y trasladarse a bóvedas de seguridad con acta detallada.",
    "legalBasis": "Ley Reguladora de las Actividades Relativas a las Drogas; Arts. 250-252 PrPn; Protocolo DAN-PNC.",
    "distractorRationale": {
      "A": "Pagar cartuchos sin justificar los disparos encubre el uso ilícito de fuerza letal y configura encubrimiento e incumplimiento de deberes.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-047",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-047)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "C",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      },
      {
        "key": "D",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Aseguramiento del reo, protección de instalaciones con medios antidisturbios graduados y auxilio táctico de la UMO.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-048",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-048)",
    "options": [
      {
        "key": "A",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "B",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "C",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "La coacción física y tortura son delitos imprescriptibles prohibidos de manera absoluta por el Art. 31 Cn. y tratados de DDHH.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-049",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-049)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      },
      {
        "key": "C",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "D",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "La condición del detenido jamás justifica la comisión de delitos por parte de los funcionarios de policía."
    }
  },
  {
    "id": "pnc-sargento-050",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-050)",
    "options": [
      {
        "key": "A",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "B",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "C",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Prolongar la detención más allá del límite constitucional constituye delito de privación de libertad por funcionario y falta muy grave.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-051",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-051)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "C",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      },
      {
        "key": "D",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Tipificación precisa como falta grave y canalización formal ante el Tribunal Disciplinario con respeto al derecho de defensa.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-052",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-052)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "B",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "C",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Disparar al aire pone en riesgo la vida de terceros por proyectiles perdidos y viola la doctrina policial de uso de armas.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-053",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-053)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      },
      {
        "key": "C",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "D",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "El abandono cobarde del servicio y pérdida de armas de fuego acarrea destitución y pena privativa de libertad."
    }
  },
  {
    "id": "pnc-sargento-054",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-054)",
    "options": [
      {
        "key": "A",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "B",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "C",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Afirmar que no se requiere justificación es un error grave; las capturas arbitrarias sin indicios vulneran la legalidad y saturan el sistema judicial.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-055",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-055)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "C",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      },
      {
        "key": "D",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Preservación del indicio, denuncia penal obligatoria por falsedad y apertura de expediente de falta muy grave.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-056",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Actos Policiales / Allanamiento Sin Orden en Casos Constitucionales Extremos",
    "statement": "A las 03:00 AM, un incendio devora una vivienda habitada y se escuchan gritos de personas atrapadas en el interior. El morador de la casa contigua se niega a permitir el paso de los bomberos y policías por su patio trasero para rescatar a los atrapados. Conforme al Art. 20 Cn., ¿cómo debe proceder el Sargento de policía? (Reactivo pnc-sargento-056)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "B",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "C",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Art. 20 Cn. establece con claridad que se puede ingresar a una morada ajena sin orden judicial para socorrer a víctimas de crímenes o catástrofes (incendios, inundaciones). El derecho a la vida prima de manera absoluta sobre la intimidad domiciliaria en situaciones de peligro inminente.",
    "legalBasis": "Art. 20 inc. 2° de la Constitución de El Salvador; Estado de Necesidad Exculpante (Art. 27 N° 3 CP).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Liberar irregularmente a un detenido en flagrancia eludiendo a la FGR tipifica favorecimiento o incumplimiento de deberes.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-057",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-057)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      },
      {
        "key": "C",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "D",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "La PNC es un cuerpo estrictamente civil, sin fuero militar ni penas sumarias capitales prohibidas por la Constitución."
    }
  },
  {
    "id": "pnc-sargento-058",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-058)",
    "options": [
      {
        "key": "A",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "B",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "C",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Pagar cartuchos sin justificar los disparos encubre el uso ilícito de fuerza letal y configura encubrimiento e incumplimiento de deberes.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-059",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-059)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "C",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      },
      {
        "key": "D",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Aseguramiento del reo, protección de instalaciones con medios antidisturbios graduados y auxilio táctico de la UMO.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-060",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-060)",
    "options": [
      {
        "key": "A",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "B",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "C",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "La coacción física y tortura son delitos imprescriptibles prohibidos de manera absoluta por el Art. 31 Cn. y tratados de DDHH.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-061",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-061)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      },
      {
        "key": "C",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "D",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "La condición del detenido jamás justifica la comisión de delitos por parte de los funcionarios de policía."
    }
  },
  {
    "id": "pnc-sargento-062",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-062)",
    "options": [
      {
        "key": "A",
        "text": "Mantener al reo en la subdelegación por cinco días más argumentando sobrecarga de trabajo administrativo."
      },
      {
        "key": "B",
        "text": "Poner en libertad al reo a las 71 horas sin consultar a la FGR y destruir el acta de captura."
      },
      {
        "key": "C",
        "text": "Ordenar el traslado inmediato y prioritario del detenido y de las actuaciones policiales ante la FGR y el Centro Judicial antes del vencimiento inexcusable de las 72 horas constitucionales, advirtiendo al personal que exceder dicho término constituiría el delito de Privación de Libertad cometida por Funcionario Público o Empleado (Art. 290 CP)."
      },
      {
        "key": "D",
        "text": "Modificar la fecha y hora de aprehensión en el sistema informático para reiniciar el cómputo de 72 horas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Prolongar la detención más allá del límite constitucional constituye delito de privación de libertad por funcionario y falta muy grave.",
      "B": "Respuesta correcta. Garantiza el cumplimiento estricto del plazo de 72 horas de control judicial y salvaguarda la legalidad.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Adulterar el registro de detención es delito de falsedad material e ideológica con dolo evidente."
    }
  },
  {
    "id": "pnc-sargento-063",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-063)",
    "options": [
      {
        "key": "A",
        "text": "No constituye ninguna falta ya que los agentes tienen derecho a descansar si no hay ciudadanos presentes."
      },
      {
        "key": "B",
        "text": "Es una falta leve que prescribe a los 10 minutos si los agentes piden disculpas por escrito."
      },
      {
        "key": "C",
        "text": "Es un delito de traición a la patria que se castiga con pena de muerte sumarísima militar."
      },
      {
        "key": "D",
        "text": "Constituye una Falta Grave por negligencia en el servicio y desatención a las normas de porte y presentación del uniforme; el Sargento como superior jerárquico debe levantar acta circunstanciada, conceder derecho de manifestación inicial a los infractores y remitir las actuaciones al Tribunal Disciplinario de la Región."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "El servicio de seguridad perimetral y atención ciudadana exige alerta permanente y respeto estricto a las normas de porte de uniforme.",
      "B": "Respuesta correcta. Tipificación precisa como falta grave y canalización formal ante el Tribunal Disciplinario con respeto al derecho de defensa.",
      "C": "Las faltas graves no se extinguen en minutos ni son dispensables unilateralmente.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-sargento-064",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-064)",
    "options": [
      {
        "key": "A",
        "text": "Desarmar de inmediato al agente, asegurar el arma de fuego y los casquillos percutidos si fueron recuperados, embalar el arma para peritaje balístico de trayectoria y dactiloscópico de la DPTC, tomar prueba de bario y plomo (absorción atómica/GSR) al agente, levantar informe circunstanciado para la jefatura de delegación y dar aviso a la FGR por posible Disparo de Arma de Fuego en Vía Pública (Art. 147-A CP) e inicio de proceso disciplinario."
      },
      {
        "key": "B",
        "text": "Cobrarle al agente cincuenta centavos de dólar por cada cartucho percutido y archivar el libro sin novedades."
      },
      {
        "key": "C",
        "text": "Felicitar al agente por usar munición policial para defenderse de animales domésticos."
      },
      {
        "key": "D",
        "text": "Pedir prestada munición de un compañero de otro turno para rellenar el cargador antes de la revista del Oficial."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Inmovilización del arma, fijación pericial de residuos de disparo (GSR), aviso fiscal penal y trámite disciplinario.",
      "C": "Disparar al aire pone en riesgo la vida de terceros por proyectiles perdidos y viola la doctrina policial de uso de armas.",
      "D": "Rellenar munición con cargadores ajenos altera los registros de inventario y viola la trazabilidad balística."
    }
  },
  {
    "id": "pnc-sargento-065",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-065)",
    "options": [
      {
        "key": "A",
        "text": "Abrir las rejas de la bartolina y entregar al recluso a la multitud para salvar las instalaciones del puesto policial."
      },
      {
        "key": "B",
        "text": "Asegurar físicamente al recluso en las áreas más seguras internas de las celdas, ordenar el cierre hermético perimetral de la sede policial con barreras físicas, distribuir al personal con equipo antimotín reglamentario (escudos, cascos, gases lacrimógenos autorizados), mantener verbalización disuasiva por megáfono sin responder a provocaciones, prohibir el uso de armas de fuego de letalidad salvo agresión armada letal inminente, y solicitar apoyo táctico urgente a la Unidad del Mantenimiento del Orden (UMO) y Centros Penales para la extracción segura del detenido."
      },
      {
        "key": "C",
        "text": "Ordenar a todos los policías disparar ráfagas de fusil ametrallador directamente a la cabeza de los manifestantes civiles."
      },
      {
        "key": "D",
        "text": "Huir de la subdelegación por la puerta trasera dejando abandonado el armamento y al reo bajo custodia."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Entregar a un detenido para que sea linchado constituye delito de Homicidio Agravado en comisión por omisión y falta disciplinaria gravísima.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El fuego letal indiscriminado sobre una multitud constituye masacre y crimen de lesa humanidad contrario a la Constitución.",
      "D": "El abandono cobarde del servicio y pérdida de armas de fuego acarrea destitución y pena privativa de libertad."
    }
  },
  {
    "id": "pnc-sargento-066",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-066)",
    "options": [
      {
        "key": "A",
        "text": "Aprobar el acta inmediatamente señalando que en régimen de excepción la policía no necesita justificar ninguna captura."
      },
      {
        "key": "B",
        "text": "Golpear a los detenidos para obligarlos a redactar sus propias actas de autoinculpación."
      },
      {
        "key": "C",
        "text": "Exigir a los agentes captores la individualización fáctica precisa y fundamentación probatoria de cada captura (perfilación criminal, pertenencia a estructura ilícita, señalamientos directos, hallazgo de armas o extorsión), dejando constancia detallada en el acta y verificando en bases de datos antes de tramitar la remisión, para evitar detenciones arbitrarias y garantizar que el expediente resista el control fiscal y judicial."
      },
      {
        "key": "D",
        "text": "Firmar el acta sin leerla y ordenar que los trasladen de noche a un barranco."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Afirmar que no se requiere justificación es un error grave; las capturas arbitrarias sin indicios vulneran la legalidad y saturan el sistema judicial.",
      "B": "Respuesta correcta. Control de calidad supervisor: exige individualización fáctica, indicios objetivos y consistencia probatoria.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Actuaciones clandestinas constituyen graves violaciones a los derechos humanos y delitos penales de lesa humanidad."
    }
  },
  {
    "id": "pnc-sargento-067",
    "rank": "sargento",
    "escalafon": "Sargento",
    "topic": "Supervisión de Custodia / Prevención de Fugas y Medidas de Seguridad Táctica",
    "statement": "Durante el relevo de vigilancia en las bartolinas de la subdelegación, el Sargento constata que los candados de seguridad de la reja principal están oxidados y presentan holgura excesiva, y que hay 35 detenidos en una celda diseñada para un aforo máximo de 12 personas. ¿Cuáles son las medidas inmediatas de supervisión y mitigación de riesgo táctico que debe ordenar el Sargento? (Reactivo pnc-sargento-067)",
    "options": [
      {
        "key": "A",
        "text": "Comprar un libro nuevo en una librería comercial y reescribir de memoria las novedades para no generar problemas con la superioridad."
      },
      {
        "key": "B",
        "text": "Amonestar verbalmente al agente en privado y permitirle colocar cinta adhesiva sobre las páginas rotas."
      },
      {
        "key": "C",
        "text": "Ignorar el hecho si el detenido pertenece a una pandilla o estructura de crimen organizado."
      },
      {
        "key": "D",
        "text": "Elaborar acta de constatación fotográfica del estado del libro, congelar y resguardar el libro como indicio documental, iniciar informe por Falta Muy Grave bajo la Ley de la Carrera Policial y remitir certificación inmediata a la FGR por el delito de Falsedad Documental Agravada (Art. 284 CP) e Incumplimiento de Deberes (Art. 321 CP)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El hacinamiento crítico y la vulnerabilidad de herrajes generan un riesgo inminente de motín o fuga masiva. El Sargento debe reforzar la guardia armada perimetral, reemplazar de inmediato los cerrojos defectuosos, realizar requisas periódicas preventivas y tramitar el traslado urgente del exceso de reclusos ante la Dirección de Centros Penales.",
    "legalBasis": "Manual de Seguridad de Instalaciones Policiales PNC; Directrices de Aforos y Derechos Humanos.",
    "distractorRationale": {
      "A": "Reemplazar libros oficiales clandestinamente constituye fraude y encubrimiento de delitos institucionales.",
      "B": "Respuesta correcta. Preservación del indicio, denuncia penal obligatoria por falsedad y apertura de expediente de falta muy grave.",
      "C": "La alteración de documentos oficiales no es subsanable con amonestaciones verbales ni remiendos.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-001",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional Policial / Misión Institucional y Cooperación con la FAES",
    "statement": "Conforme al diseño constitucional salvadoreño consagrado en los Acuerdos de Paz y la Constitución de 1983 reformada, ¿cuál es la naturaleza jurídica de la Policía Nacional Civil y bajo qué parámetro constitucional excepcional interviene la Fuerza Armada en labores de seguridad pública?",
    "options": [
      {
        "key": "A",
        "text": "La PNC es un cuerpo militarizado de reserva y la Fuerza Armada ejerce la comandancia general de las delegaciones policiales."
      },
      {
        "key": "B",
        "text": "La PNC es un cuerpo profesional, técnico, jerarquizado, disciplinado y estrictamente CIVIL (Art. 159 Cn.); y el Presidente de la República puede disponer excepcionalmente de la Fuerza Armada para apoyar la seguridad pública con carácter temporal y subordinado (Art. 168 Ord. 12° Cn.)."
      },
      {
        "key": "C",
        "text": "La PNC y la Fuerza Armada tienen funciones idénticas y subordinación directa ante la Corte Suprema de Justicia."
      },
      {
        "key": "D",
        "text": "La seguridad pública es competencia exclusiva de las alcaldías y la PNC solo actúa como policía administrativa municipal."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 159 de la Constitución establece con claridad meridiana que la seguridad pública estará a cargo de la Policía Nacional Civil, institución profesional de naturaleza netamente civil. El Art. 168 Ord. 12° permite la colaboración militar bajo estricta excepcionalidad y delimitación constitucional del Órgano Ejecutivo.",
    "legalBasis": "Arts. 159, 168 Ord. 12° y 211 de la Constitución de la República de El Salvador.",
    "distractorRationale": {
      "A": "La PNC no es militarizada; su creación civil fue uno de los núcleos fundacionales de los Acuerdos de Paz de Chapultepec de 1992.",
      "B": "Respuesta correcta. Define con exactitud la naturaleza civil de la PNC y la figura constitucional del apoyo temporal de la FAES.",
      "C": "La Fuerza Armada tiene como misión la defensa de la soberanía nacional y la integridad del territorio (Art. 211 Cn.), diferente de la seguridad interna.",
      "D": "La seguridad pública es función indelegable del Estado central, no de las municipalidades."
    }
  },
  {
    "id": "pnc-oficial-002",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derechos Humanos / Uso Proporcional de la Fuerza (Normativa ONU)",
    "statement": "En un operativo de restablecimiento del orden público, un Subinspector al mando de una sección táctica es rodeado por manifestantes que lanzan insultos y objetos plásticos no cortantes sin portar armas de fuego ni amenazar de forma inminente la vida de los agentes o terceros. Conforme a los Principios Básicos de la ONU sobre el Empleo de la Fuerza y Armas de Fuego, ¿cuál es el estándar legal obligatorio?",
    "options": [
      {
        "key": "A",
        "text": "Efectuar disparos disuasivos al aire con armas de fuego automáticas para dispersar a la multitud."
      },
      {
        "key": "B",
        "text": "Agotar los medios no violentos (verbalización, distensión) y, de ser estrictamente necesario, utilizar medios no letales de contención en forma diferenciada y proporcional, reservando las armas de fuego ÚNICAMENTE ante peligro inminente de muerte o lesiones graves (Principio de Proporcionalidad y Necesidad)."
      },
      {
        "key": "C",
        "text": "Proceder a la detención física de toda la multitud sin discriminación ni justificación individualizada."
      },
      {
        "key": "D",
        "text": "Retirarse de inmediato abandonando el equipo policial sin reportar la novedad al Centro de Operaciones."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los Principios Básicos de la ONU (Principios 4, 5 y 9) disponen que los funcionarios policiales deben agotar los medios no violentos antes de recurrir a la fuerza. El uso de armas de fuego se considera una medida extrema aplicable exclusivamente ante una amenaza inminente de muerte o lesiones graves para sí o para terceros.",
    "legalBasis": "Principios Básicos sobre el Empleo de la Fuerza y Armas de Fuego (ONU 1990) y Manual de Uso de la Fuerza de la PNC.",
    "distractorRationale": {
      "A": "Efectuar disparos al aire está estrictamente prohibido por la doctrina policial y normativas internacionales por el riesgo letal de las balas perdidas.",
      "B": "Respuesta correcta. El uso progresivo y diferenciado de la fuerza es el mandato universal en seguridad pública.",
      "C": "Las detenciones masivas e indiscriminadas sin causa individualizada violan los Arts. 11 y 12 de la Constitución.",
      "D": "El abandono del servicio y desidia operativa quebranta los deberes de la Ley de la Carrera Policial."
    }
  },
  {
    "id": "pnc-oficial-003",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Régimen de Excepción y Derechos Inderogables",
    "statement": "Durante la vigencia de un Decreto Legislativo de Régimen de Excepción conforme al Art. 29 de la Constitución salvadoreña, un Inspector jefe de operaciones despliega patrullas territoriales. En el marco doctrinario y constitucional salvadoreño (Arts. 29, 30 y 31 Cn.), ¿cuál es la delimitación jurídica exacta entre las garantías suspendibles y los derechos humanos inderogables?",
    "options": [
      {
        "key": "A",
        "text": "El Régimen de Excepción suspende la totalidad de la Constitución y deja sin efecto las normas sobre protección a la vida e integridad física."
      },
      {
        "key": "B",
        "text": "Únicamente pueden suspenderse las garantías taxativamente autorizadas por el Art. 29 Cn. (libertad de asociación Art. 7, inviolabilidad de telecomunicaciones Art. 24, e información de detención y plazo administrativo Art. 12 inc. 2° y 13 inc. 2°); mientras que el derecho a la vida, la integridad personal, la prohibición de tortura y el principio de legalidad son derechos inderogables conforme al Art. 31 Cn. y tratados internacionales de DDHH."
      },
      {
        "key": "C",
        "text": "Cualquier oficial de la PNC puede decidir en el terreno qué artículos de la Constitución suspender según la intensidad del crimen local."
      },
      {
        "key": "D",
        "text": "El Régimen de Excepción autoriza la aplicación inmediata de tribunales militares a la población civil y penas de destierro."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El régimen de excepción en El Salvador es una figura tasada (Art. 29 Cn.). El Art. 31 Cn. y la Convención Americana sobre Derechos Humanos (Art. 27 CADH) consagran que bajo ninguna circunstancia pueden suspenderse el derecho a la vida, a la integridad personal, la prohibición de torturas ni las garantías judiciales indispensables para la protección de tales derechos.",
    "legalBasis": "Arts. 29, 30 y 31 de la Constitución de la República de El Salvador; Art. 27 de la Convención Americana sobre Derechos Humanos.",
    "distractorRationale": {
      "A": "Afirmar que se suspende toda la Constitución es jurídicamente falso; el estado de derecho permanece y existen derechos con cláusula de intangibilidad absoluta.",
      "B": "Respuesta correcta. Delimita con rigor técnico las garantías que pueden suspenderse y el núcleo duro de derechos inderogables bajo el Art. 31 Cn.",
      "C": "La suspensión de garantías es competencia exclusiva de la Asamblea Legislativa (o Consejo de Ministros en receso), jamás de los mandos policiales en el terreno.",
      "D": "La Constitución prohíbe taxativamente la aplicación de fueros militares a civiles (Art. 172 Cn.) y las penas de destierro."
    }
  },
  {
    "id": "pnc-oficial-004",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Estándares ONU y Jurisprudencia de la Corte IDH / Operativos Complejos y Uso de la Fuerza",
    "statement": "En la jurisprudencia consolidada de la Corte Interamericana de Derechos Humanos (casos como Montero Aranguren y otros vs. Venezuela, y Nadege Dorzema vs. República Dominicana), ¿cuáles son los parámetros exigidos a los Oficiales de Policía en la fase de planificación y control de operativos complejos donde existe potencial uso de fuerza letal?",
    "options": [
      {
        "key": "A",
        "text": "La planificación no genera responsabilidad jurídica en los mandos ejecutivos si el agente ejecutor directo actuó de manera individual y autónoma."
      },
      {
        "key": "B",
        "text": "Los mandos policiales tienen la obligación de diseñar y planificar las operaciones de modo que se minimice al máximo el riesgo a la vida y el uso letal, dotando a los agentes de armas no letales y equipos de protección, previendo asistencia médica inmediata y sometiendo toda muerte a una investigación independiente, oficiosa, exhaustiva e imparcial."
      },
      {
        "key": "C",
        "text": "La Corte IDH estipula que en áreas de alta peligrosidad es legítimo disparar primero sin advertencia previa para resguardar la sorpresa táctica."
      },
      {
        "key": "D",
        "text": "Las directrices operativas emitidas por los mandos oficiales son secretas y están excluidas de cualquier escrutinio judicial o pericial posterior."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Corte IDH ha sentado doctrina reiterada: la responsabilidad del Estado por el uso de la fuerza no solo se juzga en el instante del disparo, sino en la fase previa de diseño, planificación, dotación de armas menos letales, cadena de mando y protocolos de auxilio médico, exigiendo rendición de cuentas estricta bajo los principios de legalidad, necesidad y proporcionalidad.",
    "legalBasis": "Jurisprudencia de la Corte IDH (Caso Montero Aranguren vs. Venezuela; Caso Zambrano Vélez vs. Ecuador); Código de Conducta para Funcionarios Encargados de Hacer Cumplir la Ley (ONU).",
    "distractorRationale": {
      "A": "La doctrina interamericana sostiene que los mandos que planifican y ordenan la operación son garantes directos y asumen responsabilidad penal y de mando.",
      "B": "Respuesta correcta. Sintetiza los estándares internacionales sobre planificación responsable, minimización de daños y rendición de cuentas.",
      "C": "Disparar sin advertencia previa ante personas que no representen riesgo inminente de muerte constituye ejecución sumaria o arbitraria.",
      "D": "Las órdenes operativas son objeto de control jurisdiccional pleno ante posibles violaciones a derechos fundamentales."
    }
  },
  {
    "id": "pnc-oficial-005",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Intervención de Telecomunicaciones / Ley Especial (LEIT) y Dirección con FGR",
    "statement": "En el marco de una investigación contra una estructura transnacional de extorsión y secuestro, un Subinspector de la División Élite Contra Crimen Organizado (DECO) propone interceptar en tiempo real los teléfonos celulares de los cabecillas. Conforme a la Ley Especial para la Intervención de las Telecomunicaciones (LEIT) y el Art. 24 de la Constitución, ¿cuál es el único canal procesal legalmente válido para autorizar y ejecutar dicha intervención?",
    "options": [
      {
        "key": "A",
        "text": "El Director General de la PNC puede autorizar la intervención telefónica mediante resolución interna reservada sin intervención de otras entidades."
      },
      {
        "key": "B",
        "text": "La intervención únicamente puede ser solicitada por el Fiscal General de la República (o fiscal expresamente delegado) y debe ser autorizada por resolución judicial motivada del Juzgado de Instrucción de San Salvador designado por la CSJ, ejecutándose exclusivamente a través del Centro de Intervención de las Telecomunicaciones de la FGR."
      },
      {
        "key": "C",
        "text": "La compañía telefónica privada puede conceder el acceso directo a los oficiales policiales con solo presentar la credencial de la corporación."
      },
      {
        "key": "D",
        "text": "El oficial a cargo puede adquirir software espía en el extranjero y aplicarlo sin control judicial siempre que el delito investigado sea grave."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Art. 24 de la Constitución consagra la inviolabilidad de las comunicaciones y reserva exclusivamente al Fiscal General de la República la iniciativa para solicitar judicialmente la intervención de telecomunicaciones. La LEIT establece que solo un Juez de Instrucción de San Salvador facultado puede ordenarla y su ejecución se realiza de manera centralizada bajo estrictos controles de auditoría e ilicitud probatoria (fruto del árbol envenenado) si se efectúa al margen de la ley.",
    "legalBasis": "Art. 24 de la Constitución de la República; Arts. 5, 8, 12, 16 y 22 de la Ley Especial para la Intervención de las Telecomunicaciones (LEIT).",
    "distractorRationale": {
      "A": "Ninguna jefatura policial posee atribuciones constitucionales o legales para intervenir telecomunicaciones directamente.",
      "B": "Respuesta correcta. Refleja fielmente la titularidad exclusiva del FGR, el control judicial de instrucción de San Salvador y la ejecución técnica reglada.",
      "C": "Las operadoras de telecomunicaciones cometerían delito penal si entregan comunicaciones privadas sin mandamiento judicial previo.",
      "D": "El empleo de software espía sin autorización judicial constituye delito grave y toda evidencia obtenida es nula de nulidad absoluta."
    }
  },
  {
    "id": "pnc-oficial-006",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Carrera Policial / Tribunal de Ingresos y Ascensos (TIA) y Concurso de Oposición",
    "statement": "Un Subinspector de la PNC se inscribe en la convocatoria oficial emitida por el Tribunal de Ingresos y Ascensos (TIA) para optar a la plaza de Inspector en el Nivel Ejecutivo. Durante la depuración de expedientes, se comprueba que el postulante posee una sanción firme de suspensión disciplinaria sin goce de sueldo por falta muy grave impuesta hace seis meses por el Tribunal Disciplinario Nacional. Conforme a la Ley de la Carrera Policial, ¿cuál es la resolución jurídica obligatoria que debe adoptar el TIA?",
    "options": [
      {
        "key": "A",
        "text": "Permitirle continuar en el concurso y compensar la sanción aumentando su puntaje en la prueba física."
      },
      {
        "key": "B",
        "text": "Declarar la inadmisión e inhabilitación del postulante para el concurso de ascenso, por no cumplir con el requisito de intachable conducta y tener vigente el cómputo de impedimento legal por sanción firme por falta grave o muy grave no cancelada conforme a los plazos de ley."
      },
      {
        "key": "C",
        "text": "Otorgarle el ascenso de forma provisional con la condición de que apruebe un curso de ética policial en la ANSP."
      },
      {
        "key": "D",
        "text": "Remitir el expediente al Ministerio de Trabajo para que dirima si la sanción disciplinaria viola los derechos laborales del postulante."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Ley de la Carrera Policial (Arts. 18 a 25) y las directrices del TIA regulan los requisitos de elegibilidad para el ascenso en los diferentes escalafones. La existencia de sanciones firmes por faltas muy graves impone un plazo legal de inhabilitación temporal para postularse a concursos de mérito, siendo un requisito sine qua non la solvencia disciplinaria y moral.",
    "legalBasis": "Arts. 18, 20, 24 y 25 de la Ley de la Carrera Policial; Reglamento General del Tribunal de Ingresos y Ascensos (TIA).",
    "distractorRationale": {
      "A": "Las pruebas físicas o de conocimientos no pueden compensar ni subsanar un impedimento legal derivado de una sanción disciplinaria por falta muy grave.",
      "B": "Respuesta correcta. El TIA debe hacer cumplir el régimen de idoneidad ética y exclusión por sanciones disciplinarias activas.",
      "C": "No existen ascensos provisionales condicionados frente a impedimentos disciplinarios reglamentarios.",
      "D": "El régimen de la carrera policial es autónomo y especializado; los órganos laborales comunes no intervienen en los concursos del TIA."
    }
  },
  {
    "id": "pnc-oficial-007",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-007)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "C",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      },
      {
        "key": "D",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Aplica el principio de precaución táctica, minimización de riesgos colaterales y captura selectiva externa.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-008",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-008)",
    "options": [
      {
        "key": "A",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "B",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "C",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "No existe umbral temporal permisible de tortura en el estado de derecho democrático.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-009",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-009)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      },
      {
        "key": "C",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "D",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "La destrucción de archivos es delito de Infidelidad en la Custodia de Documentos (Art. 334 CP)."
    }
  },
  {
    "id": "pnc-oficial-010",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-010)",
    "options": [
      {
        "key": "A",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "B",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "C",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "La infidencia y violación de comunicaciones intervenidas no es falta menor; es delito penal sancionado con privación de libertad.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-011",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-011)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "C",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      },
      {
        "key": "D",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Recoge fielmente el estándar internacional del Protocolo de Minnesota y sentencias de la Corte IDH.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-012",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-012)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "B",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "C",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Atribuir la culpa a las víctimas de tortura es una aberración jurídica y moral.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-013",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-013)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      },
      {
        "key": "C",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "D",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Divulgar planes operativos e inteligencia pone en riesgo mortal a los agentes y viola el secreto institucional."
    }
  },
  {
    "id": "pnc-oficial-014",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-014)",
    "options": [
      {
        "key": "A",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "B",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "C",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "La prohibición de tortura es absoluta; ningún móvil ni ausencia de secuelas externas convalida una violación de ius cogens.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-015",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-015)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "C",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      },
      {
        "key": "D",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Aplica la vía recursiva reglamentaria: revisión ante TIA y apelación jerárquica ministerial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-016",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Derecho Constitucional / Amparo y Hábeas Corpus contra Actos de Mandos Policiales",
    "statement": "Un ciudadano interpone un proceso constitucional de Hábeas Corpus correctivo ante la Sala de lo Constitucional de la CSJ, alegando que un Oficial jefe de subdelegación lo mantiene incomunicado en una celda sin ventilación ni agua potable y negándole acceso a su defensor particular. ¿Cuál es el alcance de la potestad contralora de la Sala de lo Constitucional frente a la policía? (Reactivo pnc-oficial-016)",
    "options": [
      {
        "key": "A",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "B",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "C",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Hábeas Corpus no solo protege contra detenciones ilegales en su origen, sino también en su modalidad correctiva contra condiciones de reclusión crueles, inhumanas o degradantes y contra la incomunicación arbitraria, facultando a la Sala a ordenar el cese inmediato de vejaciones y deducir responsabilidad penal.",
    "legalBasis": "Arts. 11 y 247 Constitución de la República; Ley de Procedimientos Constitucionales (LPC).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "La divulgación no autorizada de escuchas es un acto ilícito que vulnera la intimidad y destruye el debido proceso.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-017",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-017)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      },
      {
        "key": "C",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "D",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "La investigación penal es función técnico-científica del Estado (FGR y peritos independientes), no de familiares legos."
    }
  },
  {
    "id": "pnc-oficial-018",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-018)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "B",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "C",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "La posición de garante impone el deber positivo de actuar; la omisión dolosa del mando genera la misma responsabilidad que la ejecución material.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-019",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-019)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "C",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      },
      {
        "key": "D",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Aplica el principio de precaución táctica, minimización de riesgos colaterales y captura selectiva externa.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-020",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-020)",
    "options": [
      {
        "key": "A",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "B",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "C",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "No existe umbral temporal permisible de tortura en el estado de derecho democrático.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-021",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-021)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      },
      {
        "key": "C",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "D",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "La destrucción de archivos es delito de Infidelidad en la Custodia de Documentos (Art. 334 CP)."
    }
  },
  {
    "id": "pnc-oficial-022",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-022)",
    "options": [
      {
        "key": "A",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "B",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "C",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "La infidencia y violación de comunicaciones intervenidas no es falta menor; es delito penal sancionado con privación de libertad.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-023",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-023)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "C",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      },
      {
        "key": "D",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Recoge fielmente el estándar internacional del Protocolo de Minnesota y sentencias de la Corte IDH.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-024",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-024)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "B",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "C",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Atribuir la culpa a las víctimas de tortura es una aberración jurídica y moral.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-025",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-025)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      },
      {
        "key": "C",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "D",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Divulgar planes operativos e inteligencia pone en riesgo mortal a los agentes y viola el secreto institucional."
    }
  },
  {
    "id": "pnc-oficial-026",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Planeación Táctica / Mando y Control en Toma de Rehenes con Amenaza Inminente",
    "statement": "En una sucursal bancaria, un asaltante armado mantiene a cuatro rehenes con una granada de fragmentación en la mano con el anillo extraído. El Oficial jefe del puesto de mando coordina la llegada de negociadores y tiradores de precisión de la Unidad Táctica Especializada Policial (UTEP/JAGUAR). ¿Cuál es el protocolo de autorización del uso letal de la fuerza en este escenario? (Reactivo pnc-oficial-026)",
    "options": [
      {
        "key": "A",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "B",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "C",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La fuerza letal mediante tirador de precisión solo puede ser autorizada por el mando táctico superior cuando se han agotado o resultan inviables las vías no violentas y existe una amenaza inminente, actual e inevitable de muerte o lesiones graves para los rehenes o terceros.",
    "legalBasis": "Principios Básicos de la ONU sobre Uso de la Fuerza; Protocolo de Negociación y Francotiradores PNC.",
    "distractorRationale": {
      "A": "La prohibición de tortura es absoluta; ningún móvil ni ausencia de secuelas externas convalida una violación de ius cogens.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-027",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-027)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "C",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      },
      {
        "key": "D",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Aplica la vía recursiva reglamentaria: revisión ante TIA y apelación jerárquica ministerial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-028",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-028)",
    "options": [
      {
        "key": "A",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "B",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "C",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "La divulgación no autorizada de escuchas es un acto ilícito que vulnera la intimidad y destruye el debido proceso.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-029",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-029)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      },
      {
        "key": "C",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "D",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "La investigación penal es función técnico-científica del Estado (FGR y peritos independientes), no de familiares legos."
    }
  },
  {
    "id": "pnc-oficial-030",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-030)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "B",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "C",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "La posición de garante impone el deber positivo de actuar; la omisión dolosa del mando genera la misma responsabilidad que la ejecución material.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-031",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-031)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "C",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      },
      {
        "key": "D",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Aplica el principio de precaución táctica, minimización de riesgos colaterales y captura selectiva externa.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-032",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-032)",
    "options": [
      {
        "key": "A",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "B",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "C",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "No existe umbral temporal permisible de tortura en el estado de derecho democrático.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-033",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-033)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      },
      {
        "key": "C",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "D",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "La destrucción de archivos es delito de Infidelidad en la Custodia de Documentos (Art. 334 CP)."
    }
  },
  {
    "id": "pnc-oficial-034",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-034)",
    "options": [
      {
        "key": "A",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "B",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "C",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "La infidencia y violación de comunicaciones intervenidas no es falta menor; es delito penal sancionado con privación de libertad.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-035",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-035)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "C",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      },
      {
        "key": "D",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Recoge fielmente el estándar internacional del Protocolo de Minnesota y sentencias de la Corte IDH.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-036",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Ética Pública Policial / Régimen de Incompatibilidades y Declaración de Patrimonio",
    "statement": "Un Subinspector del área de finanzas policiales es investigado por la Sección de Probidad de la CSJ y el Tribunal de Ética Gubernamental (TEG) al detectarse que incrementó su patrimonio personal en $350,000.00 USD en dos años sin justificación salarial, recibiendo dádivas de proveedores de uniformes. ¿Qué responsabilidades concurrentes se activan? (Reactivo pnc-oficial-036)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "B",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "C",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Se configuran responsabilidades en tres vías concurrentes: sanción ética administrativa por el TEG, juicio civil de enriquecimiento ilícito ante la Cámara de lo Civil con restitución patrimonial y proceso penal de la FGR por Cohecho Pasivo y Lavado de Dinero con destitución disciplinaria.",
    "legalBasis": "Ley de Ética Gubernamental; Ley sobre el Enriquecimiento Ilícito de Funcionarios Públicos; Art. 328 CP (Cohecho).",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Atribuir la culpa a las víctimas de tortura es una aberración jurídica y moral.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-037",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-037)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      },
      {
        "key": "C",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "D",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Divulgar planes operativos e inteligencia pone en riesgo mortal a los agentes y viola el secreto institucional."
    }
  },
  {
    "id": "pnc-oficial-038",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-038)",
    "options": [
      {
        "key": "A",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "B",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "C",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "La prohibición de tortura es absoluta; ningún móvil ni ausencia de secuelas externas convalida una violación de ius cogens.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-039",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-039)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "C",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      },
      {
        "key": "D",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Aplica la vía recursiva reglamentaria: revisión ante TIA y apelación jerárquica ministerial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-040",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-040)",
    "options": [
      {
        "key": "A",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "B",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "C",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "La divulgación no autorizada de escuchas es un acto ilícito que vulnera la intimidad y destruye el debido proceso.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-041",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-041)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      },
      {
        "key": "C",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "D",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "La investigación penal es función técnico-científica del Estado (FGR y peritos independientes), no de familiares legos."
    }
  },
  {
    "id": "pnc-oficial-042",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-042)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "B",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "C",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "La posición de garante impone el deber positivo de actuar; la omisión dolosa del mando genera la misma responsabilidad que la ejecución material.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-043",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-043)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "C",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      },
      {
        "key": "D",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Aplica el principio de precaución táctica, minimización de riesgos colaterales y captura selectiva externa.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-044",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-044)",
    "options": [
      {
        "key": "A",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "B",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "C",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "No existe umbral temporal permisible de tortura en el estado de derecho democrático.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-045",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-045)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      },
      {
        "key": "C",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "D",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "La destrucción de archivos es delito de Infidelidad en la Custodia de Documentos (Art. 334 CP)."
    }
  },
  {
    "id": "pnc-oficial-046",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Gestión Operativa / Protección a Testigos Bajo Régimen Especial (Ley Especial)",
    "statement": "En un caso contra crimen organizado, un testigo clave con clave protegida declara en sede policial. El Oficial a cargo debe implementar las medidas de protección material conforme a la Ley Especial para la Protección de Víctimas y Testigos. ¿Cuáles son las medidas que debe adoptar la División de Protección a Víctimas y Testigos (DPVT)? (Reactivo pnc-oficial-046)",
    "options": [
      {
        "key": "A",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "B",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "C",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La ley faculta medidas de protección de emergencia y ordinarias: cambio de identidad física o documental, custodia policial personal permanente, reubicación territorial, uso de distorsionador de voz y biombos en sede judicial para preservar el anonimato visual y acústico del testigo.",
    "legalBasis": "Arts. 10 a 20 Ley Especial para la Protección de Víctimas y Testigos; Arts. 211-A PrPn.",
    "distractorRationale": {
      "A": "La infidencia y violación de comunicaciones intervenidas no es falta menor; es delito penal sancionado con privación de libertad.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-047",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-047)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "C",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      },
      {
        "key": "D",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Recoge fielmente el estándar internacional del Protocolo de Minnesota y sentencias de la Corte IDH.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-048",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-048)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "B",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "C",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Atribuir la culpa a las víctimas de tortura es una aberración jurídica y moral.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-049",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-049)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      },
      {
        "key": "C",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "D",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Divulgar planes operativos e inteligencia pone en riesgo mortal a los agentes y viola el secreto institucional."
    }
  },
  {
    "id": "pnc-oficial-050",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-050)",
    "options": [
      {
        "key": "A",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "B",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "C",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "La prohibición de tortura es absoluta; ningún móvil ni ausencia de secuelas externas convalida una violación de ius cogens.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-051",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-051)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "C",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      },
      {
        "key": "D",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Aplica la vía recursiva reglamentaria: revisión ante TIA y apelación jerárquica ministerial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-052",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-052)",
    "options": [
      {
        "key": "A",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "B",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "C",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "La divulgación no autorizada de escuchas es un acto ilícito que vulnera la intimidad y destruye el debido proceso.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-053",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-053)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      },
      {
        "key": "C",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "D",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "La investigación penal es función técnico-científica del Estado (FGR y peritos independientes), no de familiares legos."
    }
  },
  {
    "id": "pnc-oficial-054",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-054)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "B",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "C",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "La posición de garante impone el deber positivo de actuar; la omisión dolosa del mando genera la misma responsabilidad que la ejecución material.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-055",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-055)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "C",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      },
      {
        "key": "D",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Aplica el principio de precaución táctica, minimización de riesgos colaterales y captura selectiva externa.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-056",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Dirección Ejecutiva / Auditoría Forense y Rendición de Cuentas en Delegaciones",
    "statement": "El Oficial jefe de una Delegación Departamental ordena una auditoría integral al sistema de gestión de bienes incautados (vehículos, electrodomésticos, dinero en efectivo decomisado). Al cotejar inventarios, se detecta que faltan $12,000 USD depositados en la caja fuerte de evidencias de la subdelegación. ¿Cuál es el procedimiento administrativo y judicial inmediato? (Reactivo pnc-oficial-056)",
    "options": [
      {
        "key": "A",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "B",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "C",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La custodia de fondos incautados es de estricta responsabilidad patrimonial y legal. El Oficial jefe debe intervenir y clausurar la oficina de resguardo, denunciar el faltante a la FGR para iniciar investigación por Peculado, solicitar peritaje contable y ordenar la suspensión provisional de los encargados.",
    "legalBasis": "Arts. 271 PrPn; Arts. 325 y 326 Código Penal (Peculado por Culpa o Dolo); Ley Orgánica de la PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "No existe umbral temporal permisible de tortura en el estado de derecho democrático.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-057",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-057)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      },
      {
        "key": "C",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "D",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "La destrucción de archivos es delito de Infidelidad en la Custodia de Documentos (Art. 334 CP)."
    }
  },
  {
    "id": "pnc-oficial-058",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-058)",
    "options": [
      {
        "key": "A",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "B",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "C",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "La infidencia y violación de comunicaciones intervenidas no es falta menor; es delito penal sancionado con privación de libertad.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-059",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-059)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "C",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      },
      {
        "key": "D",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Recoge fielmente el estándar internacional del Protocolo de Minnesota y sentencias de la Corte IDH.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-060",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-060)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "B",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "C",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Atribuir la culpa a las víctimas de tortura es una aberración jurídica y moral.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-061",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-061)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      },
      {
        "key": "C",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "D",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Divulgar planes operativos e inteligencia pone en riesgo mortal a los agentes y viola el secreto institucional."
    }
  },
  {
    "id": "pnc-oficial-062",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-062)",
    "options": [
      {
        "key": "A",
        "text": "Autorizar la tortura siempre que no queden marcas físicas visibles en el cuerpo del imputado."
      },
      {
        "key": "B",
        "text": "Permitir que los agentes apliquen asfixia durante un máximo de dos minutos cronometrados."
      },
      {
        "key": "C",
        "text": "Rechazar terminantemente y prohibir la práctica de cualquier método de tortura o trato cruel, inhumano o degradante, suspender de inmediato al agente de las indagaciones y dar cuenta a la Inspectoría y FGR, recordando que la prohibición de la tortura es una norma imperativa de ius cogens inderogable bajo el Art. 31 Cn. y toda confesión obtenida mediante coacción es nula de pleno derecho."
      },
      {
        "key": "D",
        "text": "Firmar un acta donde conste que el detenido se autoflageló voluntariamente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "La prohibición de tortura es absoluta; ningún móvil ni ausencia de secuelas externas convalida una violación de ius cogens.",
      "B": "Respuesta correcta. Mando ético y legal: cese inmediato, apertura penal y nulidad radical de la prueba ilícita.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "Falsear registros oficiales para encubrir torturas constituye delito grave de falsedad y encubrimiento agravado."
    }
  },
  {
    "id": "pnc-oficial-063",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-063)",
    "options": [
      {
        "key": "A",
        "text": "Convocar a un paro de labores armadas y bloquear la sede central de la Dirección General de la PNC."
      },
      {
        "key": "B",
        "text": "Solicitar un juicio sumario penal militar contra los miembros del TIA ante el Estado Mayor de la FAES."
      },
      {
        "key": "C",
        "text": "Destruir los archivos de expedientes del TIA para obligar a reiniciar el concurso de méritos."
      },
      {
        "key": "D",
        "text": "Interponer el Recurso de Revisión ante el propio Tribunal de Ingresos y Ascensos (TIA) dentro del plazo perentorio de ley y, en caso de resolución denegatoria confirmatoria, interponer el Recurso de Apelación ante el Ministro de Justicia y Seguridad Pública, agotando la vía gubernativa antes de acudir a la Sala de lo Contencioso Administrativo."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "La huelga o paro en los cuerpos policiales está prohibido por la Constitución (Art. 221 Cn.) y constituye delito de Sedición.",
      "B": "Respuesta correcta. Aplica la vía recursiva reglamentaria: revisión ante TIA y apelación jerárquica ministerial.",
      "C": "El personal civil de la PNC no está sujeto a tribunales militares ni a la jerarquía de la Fuerza Armada.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  },
  {
    "id": "pnc-oficial-064",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-064)",
    "options": [
      {
        "key": "A",
        "text": "Constituye el delito de Violación al Deber de Secreto y Reserva de las Telecomunicaciones (Arts. 45 y 46 LEIT), penado con prisión de 4 a 8 años e inhabilitación especial para el ejercicio de cargo público, además de falta muy grave bajo la Ley de la Carrera Policial con destitución inmediata."
      },
      {
        "key": "B",
        "text": "Es una falta leve que se subsana pidiendo disculpas por correo electrónico a la jefatura de la FGR."
      },
      {
        "key": "C",
        "text": "Es una conducta encomiable que amerita una condecoración al mérito policial por transparencia informativa."
      },
      {
        "key": "D",
        "text": "No genera ninguna responsabilidad si la memoria USB fue devuelta vacía al día siguiente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "Respuesta correcta. Cumple con todos los estándares tácticos y normativos exigidos.",
      "B": "Respuesta correcta. Tipificación penal taxativa bajo la LEIT, destitución de la carrera policial y prisión efectiva.",
      "C": "La divulgación no autorizada de escuchas es un acto ilícito que vulnera la intimidad y destruye el debido proceso.",
      "D": "El delito se consuma en el momento de la extracción y revelación indebida de la información reservada."
    }
  },
  {
    "id": "pnc-oficial-065",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-065)",
    "options": [
      {
        "key": "A",
        "text": "No existe ningún vicio, ya que los propios participantes conocen mejor que nadie los detalles de la escena del crimen."
      },
      {
        "key": "B",
        "text": "Vulnera el principio de debida diligencia e imparcialidad exigido por la Corte IDH, el cual exige que las investigaciones sobre muertes causadas por el uso de la fuerza policial sean realizadas por un cuerpo pericial y agentes investigativos enteramente independientes y autónomos de la unidad implicada en los hechos, para evitar conflictos de interés, encubrimiento o manipulación de indicios."
      },
      {
        "key": "C",
        "text": "La Corte IDH prohíbe que el Estado investigue las muertes de sospechosos de delincuencia."
      },
      {
        "key": "D",
        "text": "El peritaje debió ser realizado por los familiares directos de la víctima fallecida."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "Permitir que la misma unidad se investigue a sí misma es la negación absoluta de la imparcialidad y favorece la impunidad.",
      "B": "Respuesta correcta. Procedimiento legal y operativo ajustado a la doctrina policial.",
      "C": "El Estado tiene el deber ineludible y reforzado de investigar toda muerte derivada del uso de la fuerza pública.",
      "D": "La investigación penal es función técnico-científica del Estado (FGR y peritos independientes), no de familiares legos."
    }
  },
  {
    "id": "pnc-oficial-066",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-066)",
    "options": [
      {
        "key": "A",
        "text": "El Oficial está exento de responsabilidad porque sus manos no tuvieron contacto físico directo con las víctimas."
      },
      {
        "key": "B",
        "text": "La culpa es exclusivamente de los dos sospechosos por haberse dejado capturar."
      },
      {
        "key": "C",
        "text": "El Oficial es penal y disciplinariamente responsable en calidad de autor por omisión (posición de garante) de los delitos de Lesiones Graves y Tortura, ya que teniendo la obligación jurídica y el poder de mando efectivo para impedir la agresión ilícita cometida por sus subordinados, omitió deliberadamente intervenir para cesar el abuso."
      },
      {
        "key": "D",
        "text": "La responsabilidad de mando solo aplica a generales de cuatro estrellas en guerras mundiales declaradas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "La posición de garante impone el deber positivo de actuar; la omisión dolosa del mando genera la misma responsabilidad que la ejecución material.",
      "B": "Respuesta correcta. Fundamenta con rigor la responsabilidad penal de mando en comisión por omisión bajo el Art. 21 CP.",
      "C": "Respuesta correcta. Aplica la garantía constitucional y procedimental aplicable.",
      "D": "La responsabilidad de mando vincula a todos los niveles de jerarquía policial con tropa bajo su subordinación efectiva."
    }
  },
  {
    "id": "pnc-oficial-067",
    "rank": "oficial",
    "escalafon": "Oficial",
    "topic": "Doctrina de Seguridad Democrática / Relaciones con la Comunidad y Prevención Policial",
    "statement": "Como parte del Plan de Seguridad Comunitaria y Policía de Proximidad, un Inspector coordina mesas intersectoriales con líderes barriales y centros escolares. Un dirigente comunal solicita que la policía instale retenes permanentes revisando mochilas de todos los estudiantes al entrar a la escuela sin sospecha individualizada. ¿Cuál debe ser la respuesta doctrinaria y constitucional del Oficial? (Reactivo pnc-oficial-067)",
    "options": [
      {
        "key": "A",
        "text": "Ordenar la demolición inmediata de la vivienda con explosivos plásticos sin importar la presencia de menores."
      },
      {
        "key": "B",
        "text": "Cancelar la persecución penal de por vida y dejar que la red de narcotráfico continúe operando sin control."
      },
      {
        "key": "C",
        "text": "Filtrar la información clasificada a los medios de comunicación para que la opinión pública decida el plan de asalto."
      },
      {
        "key": "D",
        "text": "Modificar el plan operativo original privilegiando la vigilancia encubierta y la interceptación de los líderes fuera del inmueble para neutralizar el riesgo a la vida de los menores, prohibir el empleo de armas de fuego de apoyo pesado y dotar al equipo de intervención de agentes especializados en rescate de rehenes y protección infantil."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El modelo de policía comunitaria se fundamenta en la confianza ciudadana y el respeto irrestricto a los derechos de la niñez. Los registros masivos e indiscriminados a estudiantes sin causa fundada estigmatizan a la infancia y vulneran la intimidad personal; deben privilegiarse patrullajes perimétricos externos preventivos.",
    "legalBasis": "Art. 2 y 19 Cn.; Ley Crecer Juntos; Manual del Modelo de Policía Comunitaria de la PNC.",
    "distractorRationale": {
      "A": "Atacar indiscriminadamente conociendo la presencia de infantes configura un crimen atroz y responsabilidad penal internacional del mando.",
      "B": "Respuesta correcta. Aplica el principio de precaución táctica, minimización de riesgos colaterales y captura selectiva externa.",
      "C": "La renuncia injustificada a la persecución penal configura denegación de justicia e incumplimiento de deberes constitucionales.",
      "D": "Respuesta correcta. Medida proporcional fundada en los protocolos vigentes."
    }
  }
];

// Preservar retrocompatibilidad con componentes existentes
export const POLICE_PROMOTION_QUESTIONS: PolicePromotionQuestion[] = ANSP_ASCENSO_QUESTIONS;
