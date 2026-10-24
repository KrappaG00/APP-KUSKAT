import React, { useState } from 'react';
import {
  Flag,
  Shield,
  Music,
  Bird,
  Flower2,
  TreePine,
  Scroll,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  History,
  Sparkles,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Calendar,
  Layers,
} from 'lucide-react';

export interface PatrioticSymbol {
  id: string;
  name: string;
  scientificOrOfficialName?: string;
  category: 'emblema' | 'himno' | 'flora' | 'fauna' | 'oracion';
  yearOfficialized: string;
  decree: string;
  meaning: string;
  detailedHistory: string;
  civicDetails: string[];
  icon: string;
}

export const PATRIOTIC_SYMBOLS: PatrioticSymbol[] = [
  {
    id: 'bandera',
    name: 'La Bandera Nacional',
    category: 'emblema',
    yearOfficialized: '1912',
    decree: 'Decreto Legislativo del 17 de mayo de 1912 (Presidencia del Dr. Manuel Enrique Araujo)',
    meaning: 'Compuesta por tres franjas horizontales del mismo ancho: dos azules cobalto en los extremos y una blanca en el centro.',
    detailedHistory: 'Inspirada en el pabellón de las Provincias Unidas del Centro de América creado por Manuel José Arce en 1822. El color azul simboliza los dos océanos que abrazan a Centroamérica (el Pacífico y el Atlántico) y el cielo diáfano de la patria. El color blanco representa la paz, la pureza de ideales y la concordia nacional. Existen tres versiones oficiales: la Magna (con el Escudo de Armas al centro, para edificios públicos y embajadas), la de uso oficial con la leyenda dorada "DIOS UNIÓN LIBERTAD", y la de la marina mercante.',
    civicDetails: [
      'Proporciones oficiales: 3.35 metros de largo por 1.89 metros de ancho para pabellones oficiales.',
      'Franja superior azul: Océano Atlántico y el cielo patrio.',
      'Franja central blanca: La paz, la pureza y el anhelo de concordia social.',
      'Franja inferior azul: Océano Pacífico y la proyección continental.',
      'Día de la Bandera Salvadoreña: Se conmemora cada 1 de septiembre al inicio del mes cívico.',
    ],
    icon: '🇸🇻',
  },
  {
    id: 'escudo',
    name: 'El Escudo Nacional de Armas',
    category: 'emblema',
    yearOfficialized: '1912',
    decree: 'Diseñado por el insigne calígrafo salvadoreño Rafael Barraza Rodríguez; adoptado por Decreto del 17 de mayo de 1912.',
    meaning: 'Emblema triangular equilátero que condensa los ideales republicanos de Libertad, Igualdad y Fraternidad.',
    detailedHistory: 'Su composición heráldica comprende: un triángulo dorado equilátero símbolo de la igualdad de todos los ciudadanos ante la ley; en su base, una cordillera de cinco volcanes bañada por dos mares, representando las cinco repúblicas hermanas de Centroamérica. Sobre la cordillera descansa un arcoíris de esperanza y un gorro frigio que irradia rayos de luz con la fecha "15 DE SEPTIEMBRE DE 1821" (gloriosa independencia centroamericana). En torno al triángulo, la leyenda "REPÚBLICA DE EL SALVADOR EN LA AMÉRICA CENTRAL" en letras de oro. Dos ramas de laurel entrelazadas con un lazo azul y blanco con 14 gajos representan los 14 departamentos de la República.',
    civicDetails: [
      'Triángulo equilátero: Los tres poderes del Estado y la igualdad ante la ley.',
      '5 Volcanes en cordillera: Las 5 repúblicas centroamericanas (Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica).',
      'Gorro frigio rojo con rayos: Emblema universal de la libertad y soberanía popular.',
      'Arcoíris: Símbolo de paz, pacto constitucional y esperanza perdurable.',
      '14 Gajos de laurel: Los 14 departamentos que componen la soberanía territorial salvadoreña.',
      'Lema nacional: "DIOS UNIÓN LIBERTAD" en la base del lazo tricolor.',
    ],
    icon: '🛡️',
  },
  {
    id: 'himno',
    name: 'El Himno Nacional de El Salvador',
    category: 'himno',
    yearOfficialized: '1879 / 1953',
    decree: 'Letra escrita por el General Juan José Cañas; música compuesta por el Maestro Juan Aberle. Oficializado formalmente por Decreto N.° 1231 de 1953.',
    meaning: 'Canto cívico marcial de alta elocuencia poética que exalta la soberanía, la dignidad humana y el rechazo a la tiranía.',
    detailedHistory: 'Fue estrenado solemnemente el 15 de septiembre de 1879 en el antiguo Palacio Nacional de San Salvador por una compañía de ópera. Su lírica cívica fue elogiada en la década de 1930 por autoridades internacionales como uno de los himnos más bellos y poéticos del mundo. Consta de un coro sublime y tres estrofas que exhortan a la patria a defender la paz y el progreso moral sin derramar sangre fratricida.',
    civicDetails: [
      'Coro principal: "Saludemos la patria orgullosos / de hijos suyos podernos llamar / y juremos la vida animosos / sin descanso a su bien consagrar."',
      'Primera estrofa: Reivindica la paz fecunda: "De la paz en la dicha suprema / siempre noble soñó El Salvador / fue obtenerla su eterno problema / conservarla es su gloria mayor."',
      'Segunda estrofa: Condena la tiranía: "Todos son elocuente recuerdo / de virtud, de valor y lealtad / desde el día que audaz la patria / proclamó su feliz libertad."',
      'Tercera estrofa: Alianza cívica y progreso: "Libertad es su dogma, es su guía / que mil veces logró defender / y otras tantas de audaz tiranía / rechazar el odioso poder."',
    ],
    icon: '🎵',
  },
  {
    id: 'ave',
    name: 'El Torogoz (Ave Nacional)',
    scientificOrOfficialName: 'Eumomota superciliosa',
    category: 'fauna',
    yearOfficialized: '1999',
    decree: 'Declarado Ave Nacional por Decreto Legislativo N.° 735 del 21 de octubre de 1999.',
    meaning: 'Símbolo sublime de la libertad salvadoreña, ya que no tolera el cautiverio y perece si se le priva del vuelo libre.',
    detailedHistory: 'Conocido también como talapo en algunas zonas del oriente salvadoreño. Se distingue por su plumaje policromático con intensos tonos turquesa, verde esmeralda y naranja cálido, coronado por dos plumas alargadas en su cola que rematan en forma de péndulo o raqueta. Anida en taludes de tierra, laderas volcánicas y barrancos, alimentándose de pequeños insectos y frutos silvestres. Su monogamia estricta y protección parental representan la lealtad familiar salvadoreña.',
    civicDetails: [
      'Nombre científico: Eumomota superciliosa (orden Coraciiformes).',
      'Significado cívico: Inadaptabilidad al cautiverio (emblema de autodeterminación ciudadana).',
      'Morfología distintiva: Cola de péndulo con cañón desnudo y espátulas terminales azuladas.',
      'Hábitat en El Salvador: Zonas boscosas, parques nacionales como El Imposible y Montecristo.',
    ],
    icon: '🦜',
  },
  {
    id: 'flor',
    name: 'La Flor de Izote (Flor Nacional)',
    scientificOrOfficialName: 'Yucca elephantipes / Yucca guatemalensis',
    category: 'flora',
    yearOfficialized: '1939',
    decree: 'Declarada Flor Nacional de El Salvador por Decreto Ejecutivo el 21 de diciembre de 1939.',
    meaning: 'Representa la laboriosidad del pueblo salvadoreño, la fecundidad de la tierra volcánica y la riqueza de la cocina autóctona.',
    detailedHistory: 'Planta de la familia de las agaváceas que florece profusamente entre marzo y mayo con majestuosos racimos cónicos de flores blancas acampanadas. Además de su belleza botánica, sus flores forman parte intrínseca de la gastronomía salvadoreña (guisadas en pipián, con huevo o en ensalada), mientras que de sus hojas fibrosas se han elaborado tradicionalmente cuerdas y artesanías de gran resistencia.',
    civicDetails: [
      'Nombre científico: Yucca elephantipes.',
      'Simbología agrícola: Resistencia a sequías y arraigo en cerros y volcanes salvadoreños.',
      'Uso nutricional y culinario: Fuente rica en vitamina C, minerales y tradición culinaria prehispánica.',
      'Aspecto visual: Campánulas blancas cerosas que se abren anunciando la llegada del invierno y la siembra.',
    ],
    icon: '🌼',
  },
  {
    id: 'arboles',
    name: 'El Maquilíshuat y el Árbol de Bálsamo (Árboles Nacionales)',
    scientificOrOfficialName: 'Tabebuia rosea / Myroxylon balsamum',
    category: 'flora',
    yearOfficialized: '1939',
    decree: 'Declarados Árboles Nacionales por Decreto Ejecutivo el 1 de septiembre de 1939.',
    meaning: 'Representan la belleza botánica paisajística y la medicina tradicional de exportación histórica salvadoreña.',
    detailedHistory: 'El Maquilíshuat (Tabebuia rosea) deslumbra en la estación seca cuando bota sus hojas y se cubre enteramente de deslumbrantes flores rosadas y violáceas, madera noble y sombra generosa. El Árbol de Bálsamo (Myroxylon balsamum), endémico de la legendaria Cordillera del Bálsamo en Sonsonate y La Libertad, produce una resina aromática curativa medicinal empleada desde tiempos precolombinos por médicos indígenas (titici) y codiciada en Europa y el Vaticano para santos óleos.',
    civicDetails: [
      'Maquilíshuat: Floración rosada de ensueño y madera preciosa apta para ebanistería.',
      'Bálsamo de El Salvador: Resina aromática con denominación de origen protegida históricamente.',
      'Cordillera del Bálsamo: Zona comprendida entre San Julián, Cuisnahuat, Teotepeque y Chiltiupán.',
      'Conmemoración: Día del Árbol Nacional cada 28 de junio.',
    ],
    icon: '🌳',
  },
  {
    id: 'oracion',
    name: 'La Oración a la Bandera Salvadoreña',
    category: 'oracion',
    yearOfficialized: '1916',
    decree: 'Compuesta en 1916 por el ilustre sabio salvadoreño Dr. David J. Guzmán.',
    meaning: 'Plegaria cívica consagrada a exaltar el amor a la tierra natal, el valor del trabajo y el deber ciudadano.',
    detailedHistory: 'El Dr. David J. Guzmán, médico, arqueólogo, escritor y fundador del Museo Nacional de Antropología (MUNA), compuso esta pieza oratoria con una profunda devoción por la geografía salvadoreña, sus volcanes, ríos y cafetales. Es recitada diariamente en todos los centros educativos de parvularia, básica y media de El Salvador.',
    civicDetails: [
      'Texto inicial: "Dios te salve, Patria mía, en tu seno hemos nacido y amado; eres el aire que respiramos, la tierra que nos sustenta, la familia que amamos..."',
      'Valores cívicos promovidos: Fidelidad inquebrantable a las instituciones democráticas, veneración a los próceres de 1811 y 1821, y fraternidad hacia los pueblos del mundo.',
    ],
    icon: '📜',
  },
];

export interface PresidentRecord {
  id: string;
  name: string;
  period: string;
  years: string;
  type: 'Constitucional' | 'Cívico-Militar' | 'De Facto' | 'Provisional';
  context: string;
  pros: string[];
  cons: string[];
}

export const HISTORICAL_PRESIDENTS: PresidentRecord[] = [
  {
    id: 'manuel-enrique-araujo',
    name: 'Dr. Manuel Enrique Araujo',
    period: '1 de marzo de 1911 – 9 de febrero de 1913',
    years: '1911 - 1913',
    type: 'Constitucional',
    context: 'Médico distinguido y estadista progresista. Su administración buscó modernizar el Estado salvadoreño antes de ser trágicamente asesinado en el Parque Bolívar (actual Plaza Barrios).',
    pros: [
      'Creó la Guardia Nacional (1912) para garantizar la seguridad rural y el orden en el campo.',
      'Promulgó la primera Ley de Accidentes de Trabajo en la historia nacional, pionera en derechos laborales.',
      'Oficializó la actual Bandera y Escudo Nacionales mediante decreto de 1912.',
      'Impulsó fuertemente la educación médica, construyendo el emblemático Pabellón Araujo del Hospital Rosales.',
      'Estableció el saneamiento de las finanzas públicas y redujo la deuda soberana extranjera.',
    ],
    cons: [
      'La creación de la Guardia Nacional derivó con el tiempo en una fuerza de represión contra movimientos campesinos.',
      'A pesar de sus reformas sociales, mantuvo intacta la estructura oligárquica de concentración de la tierra.',
    ],
  },
  {
    id: 'dinastia-melendez-quinonez',
    name: 'Dinastía Meléndez-Quiñónez (Carlos Meléndez, Jorge Meléndez, Alfonso Quiñónez)',
    period: '1913 – 1927',
    years: '1913 - 1927',
    type: 'Constitucional',
    context: 'Período de catorce años donde tres miembros de la misma familia se alternaron en el solio presidencial salvadoreño, respaldados por la Liga Roja.',
    pros: [
      'Preservó la neutralidad de El Salvador durante la Primera Guerra Mundial (1914-1918).',
      'Expansión de la red de telégrafos, líneas ferroviarias y carreteras nacionales.',
      'Modernización urbana de la capital San Salvador tras el destructivo terremoto de 1917 provocado por la erupción del volcán San Salvador.',
    ],
    cons: [
      'Consolidación de un régimen dinástico y clientelar sin alternancia real en el poder.',
      'Uso de la "Liga Roja" como grupo de choque para coaccionar el voto popular e intimidar a la oposición.',
      'Persecución de intelectuales, dirigentes obreros y federaciones sindicales nacientes.',
    ],
  },
  {
    id: 'pio-romero-bosque',
    name: 'Dr. Pío Romero Bosque',
    period: '1 de marzo de 1927 – 1 de marzo de 1931',
    years: '1927 - 1931',
    type: 'Constitucional',
    context: 'Conocido como el "Pequeño Padre de la Democracia Salvadoreña", rompió con la dinastía que lo había designado e inauguró un período de amplias libertades civiles.',
    pros: [
      'Garantizó la primera elección presidencial auténticamente libre, competitiva y limpia en enero de 1931.',
      'Restableció la libertad de prensa irrestricta y permitió la organización legal de gremios sindicales.',
      'Rechazó la reelección presidencial y entregó el mando de acuerdo a la Constitución al ganador Arturo Araujo.',
    ],
    cons: [
      'Le tocó enfrentar el desplome económico global provocado por el Crack de Wall Street de 1929, que pulverizó las exportaciones de café.',
      'No logró canalizar reformas estructurales agrarias urgentes, dejando una alta efervescencia social reprimida.',
    ],
  },
  {
    id: 'maximiliano-hernandez-martinez',
    name: 'Gral. Maximiliano Hernández Martínez',
    period: '4 de diciembre de 1931 – 9 de mayo de 1944',
    years: '1931 - 1944',
    type: 'De Facto',
    context: 'Llegó al poder tras el golpe de Estado a Arturo Araujo en 1931. Instauró el martinismo, un régimen autoritario que gobernó con mano dura durante trece años.',
    pros: [
      'Fundó el Banco Central de Reserva (BCR) en 1934 y el Banco Hipotecario de El Salvador en 1935.',
      'Promulgó la Ley de Moratoria de Deudas que salvó de la ruina a miles de pequeños y medianos caficultores salvadoreños.',
      'Construcción de obras viales de envergadura nacional: la Carretera Panamericana y el Puente de Oro sobre el Río Lempa.',
      'Mantuvo la estabilidad cambiaria del colón a 2.50 por dólar estadounidense y canceló la deuda externa nacional en 1938.',
      'Creó el Fondo Social de Mejoramiento Social para reparto de pequeños solares campesinos.',
    ],
    cons: [
      'Ordenó la sangrienta masacre campesina e indígena de enero de 1932, con saldo de decenas de miles de víctimas, etnocidio que casi extingue el idioma náhuat.',
      'Dictadura personalista prolongada mediante sucesivas reformas constitucionales a su medida.',
      'Persecución implacable, fusilamiento y tortura de disidentes políticos y militares rebeldes.',
      'Fue finalmente derrocado por la histórica "Huelga de Brazos Caídos" popular y estudiantil en mayo de 1944.',
    ],
  },
  {
    id: 'oscar-osorio',
    name: 'Tte. Cnel. Óscar Osorio (Revolución del 48)',
    period: '14 de septiembre de 1950 – 14 de septiembre de 1956',
    years: '1950 - 1956',
    type: 'Constitucional',
    context: 'Figura insignia de la modernización estatal salvadoreña, favorecido por los precios históricos del "boom del café" en la posguerra.',
    pros: [
      'Fundó el Instituto Salvadoreño del Seguro Social (ISSS) para brindar cobertura de salud y pensiones a la clase trabajadora.',
      'Creó el Instituto de Vivienda Urbana (IVU) para construir colonias y apartamentos accesibles a familias obreras.',
      'Construyó la Presa Hidroeléctrica 5 de Noviembre sobre el Río Lempa (CEL), iniciando la electrificación nacional.',
      'Edificó el Puerto de Acajutla y la Carretera del Litoral, abriendo el sur del país a la agricultura y el comercio.',
      'Promulgó la Constitución progresista de 1950 con amplios capítulos sobre derechos sociales y laborales.',
    ],
    cons: [
      'Aprobó la severa "Ley de Defensa del Orden Democrático y Constitucional" para reprimir y encarcelar a líderes sindicales opositores.',
      'El modelo de bienestar social se circunscribió fundamentalmente a la población urbana, desatendiendo el campesinado rural.',
    ],
  },
  {
    id: 'jose-maria-lemus',
    name: 'Tte. Cnel. José María Lemus',
    period: '14 de septiembre de 1956 – 26 de octubre de 1960',
    years: '1956 - 1960',
    type: 'Constitucional',
    context: 'Inició su mandato con un programa de apertura democrática pero terminó cercado por la crisis económica y el descontento universitario.',
    pros: [
      'Derogó leyes represivas iniciales y decretó amnistía general permitiendo el retorno de exiliados políticos.',
      'Fomentó obras de infraestructura de salud y educación: Hospital de Maternidad y cientos de escuelas primarias.',
      'Fomentó la integración económica regional centroamericana preliminar.',
    ],
    cons: [
      'Caída brusca de los precios del café que causó déficit fiscal y desempleo masivo.',
      'Su gobierno recurrió al estado de sitio y a la violencia policial, culminando en la violenta invasión armada de la Universidad de El Salvador en 1960, lo que aceleró su derrocamiento mediante golpe de Estado.',
    ],
  },
  {
    id: 'julio-adalberto-rivera',
    name: 'Cnel. Julio Adalberto Rivera (PCN)',
    period: '1 de julio de 1962 – 1 de julio de 1967',
    years: '1962 - 1967',
    type: 'Constitucional',
    context: 'Gobernó en el marco de la "Alianza para el Progreso" impulsada por el presidente estadounidense John F. Kennedy.',
    pros: [
      'Gran expansión industrial nacional al amparo del floreciente Mercado Común Centroamericano (MCCA).',
      'Creación de la Administración Nacional de Acueductos y Alcantarillados (ANDA) para dotar de agua potable a las urbes.',
      'Introdujo el sistema de representación proporcional que permitió a la oposición legislativa (PDC y MNR) obtener curules parlamentarias.',
      'Fijó el primer salario mínimo legal para los trabajadores agrícolas del campo.',
    ],
    cons: [
      'Creación de la Organización Democrática Nacionalista (ORDEN), red paramilitar de vigilancia rural acusada de violaciones a los derechos humanos.',
      'Consolidación del Partido de Conciliación Nacional (PCN) como maquinaria oficial de control estatal.',
    ],
  },
  {
    id: 'fidel-sanchez-hernandez',
    name: 'Gral. Fidel Sánchez Hernández',
    period: '1 de julio de 1967 – 1 de julio de 1972',
    years: '1967 - 1972',
    type: 'Constitucional',
    context: 'Mandatario durante la coyuntura del conflicto bélico con Honduras de julio de 1969 ("Guerra de las 100 Horas").',
    pros: [
      'Conducción militar y unificación patriótica salvadoreña durante el conflicto con Honduras en julio de 1969.',
      'Convocó al Primer Congreso Nacional de Reforma Agraria (1970) para discutir la distribución de la tierra.',
      'Inició el primer gran programa de Televisión Educativa en las escuelas públicas salvadoreñas.',
    ],
    cons: [
      'Colapso definitivo del Mercado Común Centroamericano (MCCA) tras la guerra con Honduras.',
      'Crisis socioeconómica provocada por el retorno forzado de más de 100,000 salvadoreños expulsados de territorio hondureño.',
      'Oposición cerrada de los grandes terratenientes que impidió cualquier avance de reforma agraria.',
    ],
  },
  {
    id: 'arturo-armando-molina',
    name: 'Cnel. Arturo Armando Molina',
    period: '1 de julio de 1972 – 1 de julio de 1977',
    years: '1972 - 1977',
    type: 'Constitucional',
    context: 'Gobernó durante una época de altos ingresos fiscales por bonanza cafetalera y aguda confrontación sociopolítica.',
    pros: [
      'Construcción de colosales obras de infraestructura: Presa Hidroeléctrica Cerrón Grande, Aeropuerto Internacional de El Salvador en Comalapa y la Central Geotérmica de Ahuachapán.',
      'Construcción del moderno Hospital Nacional de Niños Benjamín Bloom.',
      'Edificación de centros turísticos icónicos (Hotel de Montaña Cerro Verde, Turicentro Sihuatehuacán, Costa del Sol).',
    ],
    cons: [
      'Llegó al poder tras las elecciones presidenciales de febrero de 1972 calificadas unánimemente como fraudulentas por la oposición de la UNO.',
      'Intervención militar con tanques de la Universidad de El Salvador (UES) en julio de 1972 y persecución de catedráticos.',
      'La Masacre estudiantil del 30 de julio de 1975 sobre el puente de la 25 Avenida Norte.',
      'El fracaso y marcha atrás forzada de su proyecto de "Transformación Agraria" en 1976 ante la presión frontal de la ANEP.',
    ],
  },
  {
    id: 'carlos-humberto-romero',
    name: 'Gral. Carlos Humberto Romero',
    period: '1 de julio de 1977 – 15 de octubre de 1979',
    years: '1977 - 1979',
    type: 'Constitucional',
    context: 'Último militar de la dinastía ininterrumpida del PCN. Su mandato coincidió con la antesala directa del conflicto armado interno.',
    pros: [
      'Intentó mantener el financiamiento a obras viales e infraestructura hospitalaria en el interior de la república.',
    ],
    cons: [
      'Aprobación de la controvertida "Ley de Defensa y Garantía del Orden Público", que criminalizó la huelga y la protesta social.',
      'Aumento exponencial de ejecuciones extrajudiciales, desapariciones forzadas de catequistas y sindicalistas.',
      'Severo aislamiento internacional por violaciones a derechos humanos reportadas por la CIDH.',
      'Derrocado incruentamente el 15 de octubre de 1979 por el golpe de la Juventud Militar que instauró la Junta Revolucionaria de Gobierno.',
    ],
  },
  {
    id: 'jose-napoleon-duarte',
    name: 'Ing. José Napoleón Duarte (PDC)',
    period: '1 de junio de 1984 – 1 de junio de 1989',
    years: '1984 - 1989',
    type: 'Constitucional',
    context: 'Primer presidente civil electo por sufragio directo en más de 50 años, gobernando en el clímax de la guerra civil salvadoreña.',
    pros: [
      'Inició los históricos primeros acercamientos directos de diálogo con la insurgencia (La Palma, Chalatenango en 1984 y Ayagualo).',
      'Canalizó masiva ayuda internacional humanitaria para socorrer a la población tras el devastador terremoto de San Salvador del 10 de octubre de 1986.',
      'Consolidación institucional de la naciente Constitución de la República de 1983.',
    ],
    cons: [
      'La guerra civil continuó desangrando al país sin lograr un acuerdo de cese al fuego durante su administración.',
      'Graves señalamientos de corrupción administrativa y desvío de ayuda económica internacional en ministerios clave.',
      'Fuerte deterioro del poder adquisitivo y crisis inflacionaria.',
    ],
  },
  {
    id: 'alfredo-cristiani',
    name: 'Lic. Alfredo Cristiani Burkard (ARENA)',
    period: '1 de junio de 1989 – 1 de junio de 1994',
    years: '1989 - 1994',
    type: 'Constitucional',
    context: 'Encabezó la negociación estatal que culminó con el fin formal de los 12 años del conflicto armado en el país.',
    pros: [
      'Firma de los históricos Acuerdos de Paz de Chapultepec el 16 de enero de 1992, poniendo fin a la guerra civil.',
      'Creación de nuevas instituciones democráticas fundamentales: la Policía Nacional Civil (PNC) desmilitarizada, la Academia Nacional de Seguridad Pública (ANSP) y la Procuraduría para la Defensa de los Derechos Humanos (PDDH).',
      'Reinserción de las fuerzas guerrilleras al marco civil y democrático electoral como partido político.',
    ],
    cons: [
      'Implementación del modelo neoliberal: privatización de la banca estatal, comercio exterior de café y azúcar, con acusaciones de concentración financiera.',
      'Ocurrencia de la Masacre de los sacerdotes jesuitas de la UCA y sus colaboradoras en noviembre de 1989 durante la ofensiva "Hasta el Tope".',
      'Promulgación de la Ley de Amnistía General de 1993 que frenó la investigación de crímenes de lesa humanidad documentados por la Comisión de la Verdad.',
    ],
  },
  {
    id: 'armando-calderon-sol',
    name: 'Dr. Armando Calderón Sol (ARENA)',
    period: '1 de junio de 1994 – 1 de junio de 1999',
    years: '1994 - 1999',
    type: 'Constitucional',
    context: 'Primer gobierno del período de posguerra plena, enfocado en modernización del Estado y privatizaciones de servicios públicos.',
    pros: [
      'Conclusión de los programas pendientes de desmovilización militar y policial pactados en Chapultepec.',
      'Ampliación y modernización de la red vial nacional, pavimentando carreteras troncales y caminos rurales.',
      'Atracción de inversión extranjera en el sector maquila y zonas francas industriales.',
    ],
    cons: [
      'Aumento del Impuesto al Valor Agregado (IVA) del 10% al 13%, encareciendo la canasta básica familiar.',
      'Privatización de la distribución eléctrica y de la telefonía estatal (ANTEL), con fuerte debate por tarifas al consumidor.',
      'Cierre y desmantelamiento de empresas e instituciones de soporte alimentario como el Instituto Regulador de Abastecimientos (IRA).',
    ],
  },
  {
    id: 'francisco-flores',
    name: 'Lic. Francisco Flores Pérez (ARENA)',
    period: '1 de junio de 1999 – 1 de junio de 2004',
    years: '1999 - 2004',
    type: 'Constitucional',
    context: 'Enfrentó los devastadores terremotos de enero y febrero de 2001 y lideró cambios monetarios trascendentales.',
    pros: [
      'Negociación e impulso del Tratado de Libre Comercio entre Centroamérica, República Dominicana y Estados Unidos (CAFTA-DR).',
      'Gestión internacional eficiente de auxilio financiero y de reconstrucción de emergencia tras los terremotos de 2001.',
      'Modernización tecnológica del sistema tributario aduanero.',
    ],
    cons: [
      'Promulgación de la Ley de Integración Monetaria (2001) que dolarizó la economía eliminando el curso del colón salvadoreño, encareciendo el costo de vida y anulando la política monetaria soberana.',
      'Aparición de planes de seguridad de mano dura sin atacar las causas estructurales de la violencia social.',
      'Fue procesado judicialmente en 2014 por el destino de más de $15 millones de dólares donados por el gobierno de Taiwán para damnificados de los terremotos.',
    ],
  },
  {
    id: 'elias-antonio-saca',
    name: 'Elías Antonio Saca González (ARENA)',
    period: '1 de junio de 2004 – 1 de junio de 2009',
    years: '2004 - 2009',
    type: 'Constitucional',
    context: 'Periodista radial y empresario que promovió un estilo populista centrado en subsidios focalizados.',
    pros: [
      'Creación del programa "Red Solidaria" (posteriormente Comunidades Solidarias) otorgando subsidios monetarios condicionados en los municipios de mayor pobreza extrema.',
      'Creación del programa del vaso de leche y uniformes escolares para estudiantes de escuelas públicas.',
      'Fuerte promoción de la marca país turística "El Salvador: Impresionante".',
    ],
    cons: [
      'Desvío comprobado de más de $300 millones de dólares de la cuenta de gastos reservados de la Presidencia hacia cuentas privadas.',
      'Fue procesado y condenado penalmente en juicio abreviado por los delitos de peculado y lavado de dinero.',
      'Incremento sostenido de las tasas de homicidios y extorsiones en el territorio nacional.',
    ],
  },
  {
    id: 'mauricio-funes',
    name: 'Carlos Mauricio Funes Cartagena (FMLN)',
    period: '1 de junio de 2009 – 1 de junio de 2014',
    years: '2009 - 2014',
    type: 'Constitucional',
    context: 'Primer presidente de izquierda en la historia republicana de El Salvador, tras dos décadas continuas de gobiernos de ARENA.',
    pros: [
      'Institucionalizó la entrega universal de paquetes escolares, calzado y uniformes a más de un millón de estudiantes del sistema público.',
      'Creación del modelo pionero "Ciudad Mujer" brindando atención médica, psicológica y productiva integral.',
      'Implementó la Pensión Básica Universal para adultos mayores en municipios vulnerables.',
      'Eliminación de las cuotas "voluntarias" en hospitales públicos garantizando gratuidad médica de consulta.',
    ],
    cons: [
      'Aprobación y respaldo tras bambalinas a la controvertida "Tregua entre Pandillas" (2012-2013) que concedió beneficios a cabecillas en penales.',
      'Múltiples órdenes de captura judicial por presunta malversación de más de $351 millones de fondos públicos durante su gestión; obtuvo asilo y nacionalidad en Nicaragua para eludir la extradición.',
    ],
  },
  {
    id: 'salvador-sanchez-ceren',
    name: 'Salvador Sánchez Cerén (FMLN)',
    period: '1 de junio de 2014 – 1 de junio de 2019',
    years: '2014 - 2019',
    type: 'Constitucional',
    context: 'Excomandante guerrillero y firmante de los Acuerdos de Paz, último gobernante del FMLN antes de la alternancia política de 2019.',
    pros: [
      'Aprobación de la histórica Ley de Prohibición de la Minería Metálica en El Salvador (2017), pionera en el mundo para proteger cuencas hídricas.',
      'Continuidad de los programas de paquetes escolares y entrega de computadoras ("Un Niño, Una Niña, Una Computadora").',
      'Apertura de relaciones diplomáticas con la República Popular China en agosto de 2018.',
      'Ampliación de los programas de erradicación del analfabetismo en decenas de municipios.',
    ],
    cons: [
      'Grave crisis de liquidez y endeudamiento de las finanzas estatales que llevó al país a un impago temporal de pensiones en 2017.',
      'Altas tasas de criminalidad y violencia en los años 2014-2016 con picos críticos de inseguridad ciudadana.',
      'Requerido por la justicia salvadoreña por presunto peculado y lavado de dinero derivado del uso de la partida de gastos reservados de la Presidencia; al igual que su antecesor, obtuvo nacionalidad nicaragüense.',
    ],
  },
];

export const PatrioticHistoryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'symbols' | 'presidents'>('symbols');
  const [selectedSymbolId, setSelectedSymbolId] = useState<string>('bandera');
  const [presidentSearch, setPresidentSearch] = useState<string>('');
  const [expandedPresidentId, setExpandedPresidentId] = useState<string | null>('manuel-enrique-araujo');

  const selectedSymbol = PATRIOTIC_SYMBOLS.find((s) => s.id === selectedSymbolId) || PATRIOTIC_SYMBOLS[0];

  const filteredPresidents = HISTORICAL_PRESIDENTS.filter((p) => {
    if (!presidentSearch.trim()) return true;
    const q = presidentSearch.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.years.includes(q) || p.context.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      {/* Encabezado Cívico e Histórico */}
      <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <Flag className="w-3.5 h-3.5 text-amber-400" />
            <span>Identidad Nacional • Historia Republicana</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin">
            Símbolos Patrios e Historial de Presidentes de El Salvador
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Profundiza en la simbología cívica oficial de la República de El Salvador y recorre el análisis
            histórico objetivo de las gestiones presidenciales constitucionales y republicanas (pros y contras),
            fomentando el pensamiento crítico cívico en el marco de la Constitución y la historia patria.
          </p>

          {/* Selector de Pestaña Principal */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setActiveTab('symbols')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'symbols'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <Shield className="w-4 h-4 text-amber-300" />
              <span>Símbolos Patrios Oficiales ({PATRIOTIC_SYMBOLS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('presidents')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'presidents'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 text-amber-300 hover:bg-white/20 border border-amber-400/30'
              }`}
            >
              <History className="w-4 h-4 text-amber-500" />
              <span>Historial Presidencial (Pros & Contras)</span>
            </button>
          </div>
        </div>
      </div>

      {/* PESTAÑA 1: SÍMBOLOS PATRIOS */}
      {activeTab === 'symbols' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Menú de Selección de Símbolos */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2 block font-mono">
              Emblemas & Símbolos Cívicos:
            </span>
            <div className="space-y-1.5">
              {PATRIOTIC_SYMBOLS.map((symbol) => {
                const isSelected = selectedSymbolId === symbol.id;
                return (
                  <button
                    key={symbol.id}
                    type="button"
                    onClick={() => setSelectedSymbolId(symbol.id)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold shadow-xs'
                        : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{symbol.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-extrabold truncate block">{symbol.name}</span>
                      <span className="text-[10px] text-slate-500 font-mono block">
                        Oficializado: {symbol.yearOfficialized}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ficha Detallada del Símbolo Seleccionado */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedSymbol.icon}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">{selectedSymbol.name}</h3>
                  {selectedSymbol.scientificOrOfficialName && (
                    <p className="text-xs text-slate-500 font-mono italic">
                      {selectedSymbol.scientificOrOfficialName}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-xs font-mono font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                Año: {selectedSymbol.yearOfficialized}
              </span>
            </div>

            {/* Decreto de Creación */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 space-y-1">
              <span className="font-bold uppercase tracking-wider text-[10px] text-amber-800 block font-mono">
                Marco Legal y Decreto Oficial:
              </span>
              <p className="leading-relaxed font-medium">{selectedSymbol.decree}</p>
            </div>

            {/* Historia y Contexto */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-mono">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Historia y Significado Cívico:</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80">
                {selectedSymbol.detailedHistory}
              </p>
            </div>

            {/* Puntos y Detalles Cívicos */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Detalles y Elementos Cívicos Oficiales:</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedSymbol.civicDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                    <span className="text-blue-600 font-black">•</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 2: HISTORIAL DE PRESIDENTES CON PROS Y CONTRAS */}
      {activeTab === 'presidents' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-montenegrin flex items-center gap-2">
                <History className="w-6 h-6 text-blue-600" />
                <span>Historial de Presidentes de El Salvador</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Análisis histórico objetivo de administraciones presidenciales de los siglos XX y XXI (pros y contras),
                excluyendo estrictamente a los gobernantes actuales.
              </p>
            </div>

            {/* Barra de Búsqueda */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={presidentSearch}
                onChange={(e) => setPresidentSearch(e.target.value)}
                placeholder="Buscar por mandatario, año o hito..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </div>
          </div>

          {/* Acordeón de Presidentes */}
          <div className="space-y-3">
            {filteredPresidents.map((pres, idx) => {
              const isExpanded = expandedPresidentId === pres.id;
              return (
                <div
                  key={pres.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded ? 'bg-white border-blue-300 ring-2 ring-blue-500/10 shadow-sm' : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedPresidentId(isExpanded ? null : pres.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-100/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        #{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900">{pres.name}</h4>
                          <span className="text-[10px] font-mono font-bold bg-slate-200/80 text-slate-800 px-2 py-0.5 rounded-md">
                            {pres.years}
                          </span>
                          <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200">
                            {pres.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{pres.period}</p>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                      <p className="text-xs text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        {pres.context}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Aspectos Positivos / Pros */}
                        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-2">
                          <h5 className="font-bold text-xs text-emerald-950 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Aspectos Positivos & Logros (Pros):</span>
                          </h5>
                          <ul className="space-y-1.5 text-xs text-slate-800">
                            {pres.pros.map((pro, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 bg-white/80 p-2 rounded-xl border border-emerald-100">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Aspectos Críticos / Contras */}
                        <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 space-y-2">
                          <h5 className="font-bold text-xs text-rose-950 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                            <AlertTriangle className="w-4 h-4 text-rose-600" />
                            <span>Aspectos Críticos & Sombras (Contras):</span>
                          </h5>
                          <ul className="space-y-1.5 text-xs text-slate-800">
                            {pres.cons.map((con, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2 bg-white/80 p-2 rounded-xl border border-rose-100">
                                <span className="text-rose-600 font-bold">✗</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatrioticHistoryView;
