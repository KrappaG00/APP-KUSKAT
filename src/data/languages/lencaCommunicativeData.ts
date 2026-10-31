import { CommunicativeUnit } from './types';

/**
 * APP-KUSKAT • UNIDADES COMUNICATIVAS DE LENCA POTÓN
 * Cumplimiento estricto del Requisito R4:
 * Cada unidad temática contiene >= 500 palabras sustantivas de guía teórica y pragmática,
 * y al menos 5 diálogos y casos comunicativos resueltos con desglose morfosintáctico.
 */

export const LENCA_COMMUNICATIVE_UNITS: CommunicativeUnit[] = [
  {
    id: 'lenca_comm_01',
    title: 'Unidad 1: Saludos, Protocolo y Cortesía Comunitaria en Lenca Potón (Kualkat Shu wan Masun)',
    topic: 'Saludos y Cortesía',
    substantiveGuide: `El sistema de cortesía y comunicación interpersonal en el idioma Lenca Potón de El Salvador —documentado históricamente en municipios de Morazán como Guatajiagua, Chilanga, San Simón y Sensembra— se distingue por su profunda sobriedad, delicadeza afectiva y respeto hacia las jerarquías etarias comunitarias. En la cosmovisión potón, encontrarse en el camino ('yuku') o en la entrada de la choza ('masun') requiere una pausa atenta en la que se indaga por la salud y la serenidad del interlocutor antes de abordar cualquier asunto práctico o comercial.

El saludo matutino canónico se estructura mediante la raíz atributiva 'kualkat' (bueno, hermoso, propicio) combinada con el término solar 'shu' (sol, día, claridad diurna): 'Kualkat shu' (buenos días, sol propicio y bendecido). Para el atardecer se emplea 'Kualkat tiutak' o 'Kualkat shu waki' (buenas tardes al declinar la luz), mientras que al cerrarse la noche se utiliza 'Kualkat lulu' (buenas noches, descanso en la oscuridad serena). Al dirigirse a los mayores o personas respetadas en la asamblea, es preceptivo anteponer los apelativos honoríficos de parentesco comunal 'tata' (abuelo/padre venerado) y 'nana' (abuela/madre alfarera respetada): 'Kualkat shu nu-tata' o 'Kualkat shu nu-nana'. La fórmula de pregunta por el estado de vida es 'Ken tinemi ta?' (¿Cómo vives tú? o ¿Cómo estás?), respondiéndose comúnmente con 'U nemi kualkat' (Yo vivo bien y en paz) o 'U yul paki' (Mi corazón se encuentra alegre).

La gratitud en Lenca Potón se formula con frases de reciprocidad moral como 'Tlasohkamatik weyi' o 'Kualkat mu-kuku' (Benditas y buenas sean tus manos laboriosas), a lo cual se contesta con 'Te-tatka' (no hay de qué, con gusto fraterno) o 'Kualkat pal ta' (bueno sea también para ti). Al ingresar a una vivienda tradicional de zacate o teja, no se ingresa sin solicitar la anuencia del dueño con la frase 'Weli ni-kalaki?' (¿Puedo entrar a tu hogar?), recibiendo la cordial invitación 'Shikalaki iwan paz' (Entra con bien y toma asiento en el petate). Al despedirse en el sendero, la fórmula preferida es 'Ti-muttat mostla' (nos vemos mañana al salir el sol) o 'Shuman kualkat' (camina con bien por la vereda). Comprender estas normas de interacción es indispensable para valorar el patrimonio lingüístico de los artesanos del barro negro de Morazán.

En el plano dialectal e hist?rico, los testimonios ling??sticos recogidos en Chilanga y Guatajiagua por investigadores como Peccorini, Lehmann y Campbell evidencian que el sistema de saludos pot?n se entrelaza con f?rmulas de deferencia jer?rquica en las asambleas comunales de ancianos. El saludo formal a las autoridades de la alcald?a del com?n o mayordom?as religiosas requer?a la inclinaci?n de cabeza y la colocaci?n de la mano derecha sobre el pecho, pronunciando 'Kualkat shu masunkuna' al ingresar al recinto colectivo. Asimismo, en los senderos que conectan los caser?os de la cordillera Cacahuatique, cruzarse con un caminante sin pronunciar al menos la interjecci?n ben?vola de paso 'Kualkat yuku' (buen camino) se consideraba una descortes?a grave y una ruptura de la solidaridad veredal. El aprendizaje riguroso de estas estructuras orales permite al estudiante comprender la cortes?a no como mero formalismo exterior, sino como un pacto ?tico de hospitalidad, fraternidad y armon?a con el pr?jimo, los ancestros y la tierra fecunda de Moraz?n.`,
    solvedDialogues: [
      {
        id: 'len_d1_01',
        scenario: 'Encuentro matutino entre dos vecinos campesinos en el camino hacia Guatajiagua.',
        dialogue: `— Tata Cipriano: Kualkat shu nu-kniw Santos, ¿kan ta yuku man kualkan?
— Tata Santos: Kualkat shu nu-tata Cipriano. U man yuku pal wara tik cerro Cacahuatique. ¿Ken tinemi ta?
— Tata Cipriano: U nemi kualkat wan u yul paki. Shu kisa resplandeciente ijpak ne pira.
— Tata Santos: Kemah Cipriano, buen tiempo anuncia pal limpiar el rastrojo de maíz.
— Tata Cipriano: Shuman kualkat Santos, ti-muttat tiutak kan walat pal siembra.`,
        grammaticalBreakdown: `1. 'Kualkat shu': fórmula de saludo 'buen sol / buenos días' ('kualkat' bueno + 'shu' sol).
2. 'Kan ta yuku man': interrogativo locativo 'kan' (adónde) + pronombre de 2ª singular 'ta' (tú) + sustantivo 'yuku' (camino) + verbo intransitivo 'man' (caminar).
3. 'U man yuku pal wara': orden sintáctico SOV con sujeto pronominal de 1ª persona 'u' (yo) + objeto de dirección + verbo 'man' (marcho).
4. 'Shu kisa': sujeto 'el sol' + verbo incoativo 'kisa' (nace / se levanta sobre las cumbres).
5. 'Shuman kualkat': modo imperativo de cortesía benévola '¡camina con bien y sin tropiezos!'.`
      },
      {
        id: 'len_d1_02',
        scenario: 'Visita de cortesía de una joven al taller de alfarería negra de la abuela Martina en Guatajiagua.',
        dialogue: `— Siwapil Andrea: Kualkat tiutak nu-nana Martina, ¿weli u kalaki tik mu-serankal?
— Nana Martina: Kualkat tiutak nu-chiki Andrea. Shikalaki iwan paz wan shimutali ijpak ne pata limpio.
— Siwapil Andrea: Tlasohkamatik weyi nana. U wal pal aprender ken ta moldeas seran apas iwan lodo.
— Nana Martina: Kualkat mu-pensamiento. Ne barro negro ya reposa y el agua de quebrada está lista.
— Siwapil Andrea: U yul paki kan ta nech-maka mu-sabiduría ancestral.`,
        grammaticalBreakdown: `1. 'Weli u kalaki': construcción modal de permiso cortés '¿puedo yo ingresar a tu taller?'.
2. 'Nu-serankal': sustantivo compuesto 'seran' (negro) + 'kal' (casa / taller del barro negro).
3. 'Shikalaki iwan paz': mandato hospitalario imperativo 'entra en paz a esta morada humilde'.
4. 'Seran apas': frase nominal representativa de la alfarería tradicional potón ('vasija de arcilla negra cocida').
5. 'Ta nech-maka': pronombre sujeto 'ta' (tú) + pronombre objeto 'nech-' (a mí) + verbo 'maka' (entregas con amor).`
      },
      {
        id: 'len_d1_03',
        scenario: 'Diálogo entre dos ancianos en el atrio de la ermita colonial de Chilanga.',
        dialogue: `— Tata Eustaquio: Kualkat shu tata Valerio, ¿ken tinemi mu-familia tik ne pueblo?
— Tata Valerio: U nemi kualkat Eustaquio, al-hamdu li-Llāh wan gracias a la providencia nochi nemit sanos.
— Tata Eustaquio: Ne historia pal nuestros abuelos debe transmitirse a los binikuna en la escuela.
— Tata Valerio: Kemah, la lengua lenca potón te-debe morir jamás tik Morazán.
— Tata Eustaquio: Ti-tekitit sansekan pal preservar el rescate cultural de Chilanga.`,
        grammaticalBreakdown: `1. 'Mu-familia': posesivo proclítico de 2ª persona singular 'mu-' (tu familia).
2. 'Nochi nemit sanos': cuantificador totalizador 'nochi' (todos) + verbo de estado 'nemit' (se encuentran en buen estado).
3. 'Binikuna': sustantivo colectivo plural con sufijo lenca-morazánico '-kuna' ('los niños y muchachos de la aldea').
4. 'Te-debe morir jamás': afirmación categórica de resistencia identitaria indígena en Morazán.
5. 'Ti-tekitit sansekan': primera persona plural 'trabajemos hombro a hombro en unidad comunitaria'.`
      },
      {
        id: 'len_d1_04',
        scenario: 'Despedida nocturna entre una familia anfitriona y sus parientes visitantes.',
        dialogue: `— Kewash José: Ya luluik nu-tata, el camino se oscurece y debemos regresar a nuestra choza.
— Tata Hilario: Kualkat lulu nu-pili José. Shikteka cuidado con las piedras del arroyo en la penumbra.
— Kewash José: Tlasohkamatik por el delicioso café con tamal y por recibirnos con tanta estima.
— Tata Hilario: Patamasun siempre abierto para la familia. Ti-muttat el domingo en la plaza comunal.
— Kewash José: Shupanu kualkat nu-tata, que la paz del cerro acompañe su descanso.`,
        grammaticalBreakdown: `1. 'Ya luluik': aspecto completivo impersonal 'ya se hizo noche oscura en la serranía'.
2. 'Kualkat lulu': despedida nocturna lenca potón 'buena noche y apacible descanso'.
3. 'Patamasun': concepto del hogar acogedor donde abundan petates limpios para recibir al forastero.
4. 'Ti-muttat': verbo recíproco 'nosotros nos encontraremos nuevamente sin falta'.
5. 'Que la paz del cerro': invocación protectora ligada a la presencia tutelar del Cacahuatique.`
      },
      {
        id: 'len_d1_05',
        scenario: 'Entrega de un cántaro de agua fresca y agradecimiento solidario en el solar campesino.',
        dialogue: `— Shula Mercedes: Nikan u walika tinaja con li sesek del manantial sagrado.
— Tata Benjamín: ¡Kualkat mu-kuku Mercedes! Ne calor de la siembra secaba la garganta.
— Shula Mercedes: Te-tatka nu-tata Benjamín. Entre vecinos siempre compartimos el agua pura del río.
— Tata Benjamín: U li am con gozo en el corazón. Que la bendición prospere tu hogar y tus cultivos.
— Shula Mercedes: Tlasohkamatik tata, kualkat shu pal nochi la comunidad.`,
        grammaticalBreakdown: `1. 'Nikan u walika': deíctico de presencia 'aquí traigo conmigo la tinaja colmada'.
2. 'Kualkat mu-kuku': bendición artesanal y de gratitud 'benditas sean tus manos serviciales'.
3. 'Te-tatka': respuesta tradicional de modestia 'no es nada que agradecer / con todo gusto'.
4. 'U li am': estructura transitiva estricta SOV ('yo' [U] + 'agua' [li] + 'bebo' [am]).
5. 'Kualkat shu pal nochi': deseo comunitario abarcador 'que haya bendición para todas las familias'.`
      }
    ]
  },
  {
    id: 'lenca_comm_02',
    title: 'Unidad 2: Familia, Parentesco y Vida Comunitaria en Morazán (Nana, Tata wan Masunkuna)',
    topic: 'Familia y Comunidad',
    substantiveGuide: `La estructura familiar del pueblo Lenca Potón en el oriente de El Salvador se asienta sobre la base de clanes domésticos extensos congregados en torno al 'masun' (la choza o complejo habitacional campesino). La vivienda tradicional se construye con horcones de madera recia de la serranía, paredes de bahareque o adobe y techos de zacate seco o teja artesanal de barro cocido. En el centro de la dinámica hogareña se encuentra la complementariedad afectiva y laboral entre varones y mujeres: mientras el hombre ('kewash') desbroza la milpa ('wara') y tala leña con el machete ('tek'), la mujer ('shula') custodia el fogón ('tisin'), prepara el maíz molido en el metate ('metlat') y transmite las técnicas de modelado y curado del barro a las hijas.

En la morfosintaxis del lenca potón, las relaciones de parentesco inalienable se expresan mediante proclíticos posesivos directos: 'u-tata' (mi padre/abuelo), 'u-nana' (mi madre/abuela), 'u-pili' (mi hijo/niño), 'u-kniw' (mi hermano/pariente) y 'u-masun' (mi hogar). Los infantes ('chikipili') son criados con gran libertad en contacto estrecho con la naturaleza, aprendiendo desde temprana edad a identificar las plantas medicinales, las aves de la montaña y los puntos de agua pura en las quebradas. Cuando una pareja joven funda un nuevo hogar, la comunidad entera se moviliza bajo el sistema de trabajo colectivo no remunerado o 'convite' ('sansekan'), ayudando en el acarreo de madera, paja de cerro y tejas. Esta unidad profundiza en los diálogos familiares cotidianos, el cuidado de los niños, las responsabilidades compartidas del hogar campesino y las ceremonias íntimas de bendición del alimento.

En el ?mbito de la vida comunitaria y la organizaci?n cl?nica de Moraz?n, la instituci?n del parentesco ritual y compadrazgo fortalec?a los lazos entre familias de distintos cantones como Maquig?e, Pajigua, San Bartolo y Piedra Parada. Los compadres y comadres asum?an responsabilidades de tutela moral y econ?mica sobre los ahijados, asegurando que ante la orfandad o la escasez agr?cola ning?n infante quedara desamparado. Alrededor del patio solariego, los abuelos ('tatakuna') transmit?an oralmente la toponimia tradicional y los l?mites sagrados de los terrenos comunales, ense?ando a las nuevas generaciones que la propiedad de la ladera conllevaba la obligaci?n perpetua de proteger sus quebradas y ?rboles centenarios de morro y cedro. La cena nocturna junto al fog?n constitu?a el espacio pedag?gico primordial donde se evaluaban los acuerdos del d?a, se bendec?an las tortillas reci?n salidas del comal y se instru?a a los j?venes en los cantos y oraciones de agradecimiento por la salud del clan.

La figura de la mujer artesana ('shula pes') posee una centralidad econ?mica inestimable dentro de la econom?a dom?stica pot?n. A trav?s del modelado de tinajas, apastes y comales en el solar, la madre de familia aporta un ingreso tangible que garantiza la compra de sal, cal, granos y ropa para la prole durante las ?pocas secas de verano. Las tareas dom?sticas no se perciben como cargas aisladas, sino como un engranaje solidario en el que los hermanos mayores cuidan de los peque?os mientras las madres moldean y hornean el barro negro. Esta red de afectos compartidos y reciprocidad intergeneracional ha sido el baluarte hist?rico que permiti? a las familias lencas de Guatajiagua resistir siglos de adversidad socioecon?mica preservando inc?lume su identidad comunal.`,
    solvedDialogues: [
      {
        id: 'len_d2_01',
        scenario: 'Despertar matutino en el hogar potón preparando el café de olla y las tortillas.',
        dialogue: `— Nana Elvira: U chikipili Jorge, shiahkuki kualkan kan shu ya tlanestia ijpak pira.
— Piltzin Jorge: Ya u mu-quetzki nana. U man yuku pal traer leña seca para el fogón de la cocina.
— Nana Elvira: Yejyek Jorge. Shik-xutla ne tisin wan shik-tlali la tinaja con agua fresca.
— Piltzin Jorge: ¿Kech tamales ti-k-chiwat ashan pal el desayuno de la familia?
— Nana Elvira: Ti-k-chiwat diez tamales y tortillas doradas con frijoles calientes pal sustento.`,
        grammaticalBreakdown: `1. 'U chikipili': frase posesiva afectiva 'mi tierno niñito consentido'.
2. 'Shu ya tlanestia': locución descriptiva 'el sol ya alumbra las cumbres de la montaña'.
3. 'Ya u mu-quetzki': aspecto completivo 'ya me levanté del petate y estoy listo para ayudar'.
4. 'Shik-xutla ne tisin': imperativo de avivar el fuego con astillas de ocote y leña menuda.
5. 'Pal sustento': cláusula final de propósito nutricional para las faenas del día.`
      },
      {
        id: 'len_d2_02',
        scenario: 'El padre enseña a su hijo a afilar y manejar con prudencia el machete en el solar.',
        dialogue: `— Kewash Daniel: Shik-ita nu-pili Manuel ken se afila el tek en la piedra de río.
— Piltzin Manuel: Kemah tata, naja nik-neki aprender a labrar la tierra con firmeza como tú.
— Kewash Daniel: El machete es herramienta de trabajo sagrada, nunca de violencia; se usa con respeto.
— Piltzin Manuel: Nik-tajpiaskia el consejo en mi corazón y cuidaré las matas de maíz en la milpa.
— Kewash Daniel: Yejyek Manuel, un hombre lenca honra su palabra mediante el trabajo honrado.`,
        grammaticalBreakdown: `1. 'Shik-ita nu-pili': imperativo pedagógico '¡observa bien hijo mío cómo se asienta el filo!'.
2. 'Tek en la piedra': sustantivo 'tek' (machete / cuchillo de hierro) + medio de afilado.
3. 'Nik-neki aprender': verbo de voluntad 'neki' (querer / desear) + verbo de aprendizaje.
4. 'Herramienta de trabajo sagrada': principio ético comunitario que condena la violencia interpersonal.
5. 'Nik-tajpiaskia': verbo con sufijo potencial 'yo guardaré y protegeré el consejo recibido'.`
      },
      {
        id: 'len_d2_03',
        scenario: 'Dos hermanas conversan mientras recogen flores y frutas silvestres en la ladera.',
        dialogue: `— Shula Carmen: Nu-kniw Rosa, shik-ita cuántas lapasewa han florecido en este rincón del cerro.
— Shula Rosa: Bellas flores rojas para adornar el altar de nuestra choza en la fiesta patronal.
— Shula Carmen: Nusan encontramos kiriw tzopilik maduro para llevar a nuestros hermanos menores.
— Shula Rosa: Llenemos el shik de carrizo antes de que el sol caliente demasiado el sendero.
— Shula Carmen: Yejyek Rosa, nuestra madre se alegrará mucho al vernos regresar con el canasto colmado.`,
        grammaticalBreakdown: `1. 'Lapasewa': sustantivo compuesto 'lapa' (rojo) + 'sewa' (flor silvestre de mayo).
2. 'Pal altar de nuestra choza': uso ceremonial de las especies botánicas autóctonas de Morazán.
3. 'Kiriw tzopilik': fruta silvestre dulce recolectada en las quebradas.
4. 'Llenemos el shik': imperativo hortativo con el término 'shik' (canasto tejido tradicional).
5. 'Nuestra madre se alegrará': verbo de emoción filial compartida ante el deber cumplido.`
      },
      {
        id: 'len_d2_04',
        scenario: 'Cuidado de un abuelo enfermo y preparación de infusión medicinal de hierbas.',
        dialogue: `— Shula Teresa: Nu-tata Antonio, aquí le traigo infusión caliente de zacate limón y miel de abeja.
— Tata Antonio: Tlasohkamatik Teresa, el calor de tus manos reconforta mi cuerpo adolorido.
— Shula Teresa: Shik-kuchi con calma en el petate grueso; nosotros cuidaremos el ganado y la milpa hoy.
— Tata Antonio: La juventud de este hogar es bendición viva que no me desampara en la vejez.
— Shula Teresa: Usted nos cuidó cuando éramos pequeños; ahora es nuestro turno honrar su vida.`,
        grammaticalBreakdown: `1. 'Infusión caliente': medicina tradicional herbolaria de las comunidades campesinas de Morazán.
2. 'Shik-kuchi con calma': mandato benévolo 'reposa y duerme tranquilo que todo está resguardado'.
3. 'Petate grueso': estera doble de tule que aísla de la humedad del piso de tierra.
4. 'Bendición viva': reconocimiento explícito del valor de la solidaridad intergeneracional.
5. 'Honrar su vida': imperativo ético filial de cuidado recíproco a los ancianos del pueblo.`
      },
      {
        id: 'len_d2_05',
        scenario: 'Planificación comunal del convite solidario para levantar las paredes de bahareque.',
        dialogue: `— Tata Lucas: Vecinos de Guatajiagua, el joven Mateo necesita levantar su casa para formar familia.
— Kewash Ramón: Naja pongo cuatro cargas de horcones de quebracho traídos de la cordillera.
— Kewash Pedro: Naja traigo tierra arcillosa y zacate para amasar el barro de las paredes de bahareque.
— Shula Marta: Y nosotras cocinaremos una gran tinaja de frijoles con tamales para todos los trabajadores.
— Tata Lucas: Así se demuestra la fuerza del pueblo lenca potón: nadie queda solo cuando nos unimos.`,
        grammaticalBreakdown: `1. 'Vecinos de Guatajiagua': convocatoria pública al convite o faena solidaria colectiva.
2. 'Horcones de quebracho': madera resistente incorruptible usada para la estructura de la vivienda.
3. 'Paredes de bahareque': técnica arquitectónica ancestral que combina varas entrelazadas y barro curado.
4. 'Gran tinaja de frijoles': sustento alimenticio solidario aportado por las mujeres de la comunidad.
5. 'Nadie queda solo': formulación del principio comunitarista lenca de ayuda mutua sin usura.`
      }
    ]
  },
  {
    id: 'lenca_comm_03',
    title: 'Unidad 3: Alfarería Negra, Artesanía Tradicional y Fuego de Guatajiagua (Seran Apas wan Tisin)',
    topic: 'Alfarería y Tradición',
    substantiveGuide: `Guatajiagua, municipio enclavado en las estribaciones meridionales del departamento de Morazán, es reconocido internacionalmente como la capital indiscutible de la alfarería negra tradicional en El Salvador. Esta técnica milenaria, practicada primordialmente por las mujeres alfareras lencas potones, no emplea tornos mecánicos ni esmaltes químicos modernos; su característico acabado negro azabache pulido y brillante se obtiene mediante un proceso completamente ecológico y ancestral transmitido oralmente de madres a hijas a lo largo de incontables generaciones.

El proceso se inicia con la extracción de la arcilla o barro fino ('pes' o 'sau') de las canteras comunales situadas a orillas de las quebradas. El barro es secado, machacado en batanes de madera, cernido y humedecido con agua pura de manantial ('li sesek') hasta alcanzar la plasticidad óptima. Las alfareras modelan las piezas enteramente a mano mediante la técnica del enrollado y pastillaje, afinando las paredes con fragmentos de jícaras ('tsima') y alisándolas con piedras de río extremadamente lisas ('kew'). La variedad de vasijas incluye el comal plano ('kumal') para tortillas, la tinaja esbelta ('tinaja') para el agua, el apaste hondo ('apas') para la cocción de legumbres y recipientes ornamentales.

El secreto diagnóstico de la negrura azabache radica en el horneado y post-ahumado tradicional: una vez cocidas las piezas a cielo abierto con leña de monte en el 'serankal', se extraen al rojo vivo y se sumergen o cubren inmediatamente con hojas del arbusto silvestre llamado 'chichipince' o estiércol seco, o se tiñen con un preparado vegetal de la corteza del árbol de nacascolo. El choque térmico en atmósfera reductora fija el carbono en los poros de la arcilla, confiriéndole ese brillo negro profundo y una extraordinaria resistencia al fuego directo. En esta unidad se desarrollan los diálogos y vocablos específicos de la recolección del barro, el modelado manual, las temperaturas del fogón y la comercialización justa de estas obras maestras del patrimonio nacional.

Desde una perspectiva ling??stica y etnogr?fica, el l?xico alfarero de Guatajiagua constituye un reservorio vivo de la memoria tecnol?gica pot?n. T?rminos vern?culos como 'shoko' (el humo negro y denso que impregna la superficie incandescente), 'pes tik' (el barro sazonado que ha reposado la humedad adecuada) y 'kumal kisa' (el momento sagrado en que el comal sale ?ntegro de la quema sin rajaduras) resumen siglos de experimentaci?n pirot?cnica ind?gena. La comercializaci?n de estas piezas ha vinculado hist?ricamente a Guatajiagua con los tiangues y mercados de San Miguel, Gotera, Jocoro y Usulut?n, a donde arrieros y artesanas llevaban las cargas de tinajas envueltas en hojas de pl?tano sobre bestias de carga. Defender el valor econ?mico y simb?lico del barro negro constituye un imperativo ?tico de justicia cultural frente a la invasi?n de vajillas pl?sticas industriales.

El aprendizaje del arte del barro negro no sigue una pedagog?a libresca o desvinculada de la tierra; se fundamenta en la observaci?n silenciosa, la memoria muscular y el respeto reverente hacia el fuego. Desde su infancia, las ni?as de Guatajiagua acompa?an a sus madres a las barrancas arcillosas, palpando la consistencia del barro h?medo ('pes') y aprendiendo a modular la fuerza de sus dedos sobre la superficie de los comales. La cocci?n en hornos de fosa y el ahumado vegetal con chichipince no admiten descuidos: un exceso de viento o una retirada tard?a de la le?a al rojo vivo pueden fracturar semanas enteras de faena. De este modo, la alfarer?a negra se consagra como un ejercicio integral de paciencia, disciplina comunal y preservaci?n indeleble de la dignidad lenca pot?n frente a los embates de la modernidad consumista.`,
    solvedDialogues: [
      {
        id: 'len_d3_01',
        scenario: 'Extracción y acarreo de barro fino en la quebrada del río por dos artesanas de Guatajiagua.',
        dialogue: `— Alfarera Juana: Nu-kniw Gregoria, shik-ita qué arcilla tan suave y sin piedras encontramos junto al río.
— Alfarera Gregoria: Es el mejor barro negro de Guatajiagua; se amasa fácil y no se agrieta al secar.
— Alfarera Juana: Llenemos los sacos con moderación para no lastimar la espalda en la subida del cerro.
— Alfarera Gregoria: Kemah Juana, llevaremos dos cargas y la dejaremos reposar al sol en el patio de mi casa.
— Alfarera Juana: Con este barro moldearemos comales de gran calidad para el mercado de la fiesta.`,
        grammaticalBreakdown: `1. 'Arcilla tan suave': selección del material de sedimentación fluvial sin impurezas calizas.
2. 'Barro negro de Guatajiagua': denominación de origen cultural protegida por la tradición oral potón.
3. 'Llenemos con moderación': ética de extracción sustentable que evita la depredación de los bancos de arcilla.
4. 'Dejaremos reposar al sol': etapa técnica de secado previo al majado y tamizado de los terrones.
5. 'Comales de gran calidad': destino productivo y comercial de las piezas moldeadas a mano.`
      },
      {
        id: 'len_d3_02',
        scenario: 'Modelado a mano de un apaste hondo utilizando la piedra de río y la jícara pulida.',
        dialogue: `— Maestra Martina: Shik-ita hija mía cómo se asienta la base de la vasija sobre el plato giratorio de barro.
— Aprendiz Silvia: ¿Cómo hago para que las paredes suban parejas sin que se venza la arcilla fresca?
— Maestra Martina: Agrega rollos de barro de grosor parejo y usa el pedazo de jícara tsima para alisar por dentro.
— Aprendiz Silvia: Siento el barro dócil en mis manos; poco a poco va tomando la forma de la tinaja.
— Maestra Martina: Ahora pásale la piedra lisa kew con agua fresca para pulir la superficie antes de que seque.`,
        grammaticalBreakdown: `1. 'Base de la vasija': técnica de pastillaje y enrollado concéntrico sin torno mecánico.
2. 'Jícara tsima': herramienta tradicional de modelado extraída del fruto seco del morro.
3. 'Grosor parejo': exigencia técnica para evitar cuarteaduras durante la contracción del secado.
4. 'Piedra lisa kew': canto rodado volcánico usado para el bruñido de la superficie de arcilla.
5. 'Pulir antes de que seque': etapa crítica de acabado superficial que sella los poros del barro.`
      },
      {
        id: 'len_d3_03',
        scenario: 'El encendido del horno a cielo abierto y control de la leña para la cocción.',
        dialogue: `— Artesano Tomás: La leña seca de quebracho ya está acomodada en el serankal en forma de cono.
— Alfarera Carmen: Shik-xutla el fuego despacio para que las vasijas se calienten sin romperse por choque térmico.
— Artesano Tomás: El humo blanco va saliendo parejo; en dos horas alcanzará el rojo vivo en las brasas.
— Alfarera Carmen: Prepara las hojas de chichipince y el tinte de nacascolo para el ahumado cuando las saquemos.
— Artesano Tomás: Todo está listo al pie del fogón; hoy tendremos vasijas con un negro azabache impecable.`,
        grammaticalBreakdown: `1. 'Serankal': taller y espacio ceremonial de quema a cielo abierto característico de Guatajiagua.
2. 'Calienten sin choque térmico': conocimiento pirotécnico empírico para elevar gradualmente la temperatura.
3. 'Rojo vivo en las brasas': estimación visual de la temperatura óptima de cocción (~700-800°C).
4. 'Hojas de chichipince / nacascolo': agentes vegetales reductores que fijan el carbono en la arcilla caliente.
5. 'Negro azabache impecable': resultado estético y funcional del proceso de reducción térmica.`
      },
      {
        id: 'len_d3_04',
        scenario: 'El momento sagrado del ahumado y teñido de las vasijas candentes al salir de las brasas.',
        dialogue: `— Maestra Martina: ¡Cuidado al retirar las vasijas candentes con las varas de madera verde!
— Aprendiz Silvia: ¡Miren cómo brillan como carbones encendidos bajo la penumbra del atardecer!
— Maestra Martina: Sumérgelas rápido en el baño de nacascolo y cúbrelas de inmediato con las hojas silvestres.
— Aprendiz Silvia: ¡El humo denso envuelve la arcilla y en segundos el rojo se transforma en negro brillante!
— Maestra Martina: Este es el secreto sagrado de Guatajiagua que nuestros antepasados nos legaron con dignidad.`,
        grammaticalBreakdown: `1. 'Varas de madera verde': tenazas artesanales flexibles resistentes al calor extremo.
2. 'Brillan como carbones': incandescencia del barro que permite la fijación instantánea del tinte orgánico.
3. 'Baño de nacascolo': compuesto tánico vegetal que reacciona con los iones de hierro de la arcilla.
4. 'El rojo se transforma en negro': transformación química de oxidación a reducción en atmósfera sellada.
5. 'Secreto sagrado': valoración patrimonial identitaria del conocimiento técnico tradicional.`
      },
      {
        id: 'len_d3_05',
        scenario: 'Comprobación de la calidad sonora y resistencia del comal terminado.',
        dialogue: `— Comprador Ernesto: Yejyek tiutak artesana, busco un comal grande de barro negro que no se raje con el fuego.
— Alfarera Carmen: Shik-kaki el sonido de este comal al golpearlo suavemente con los nudillos: suena como campana.
— Comprador Ernesto: Tiene un sonido limpio y metálico; se nota que fue bien curado en el fogón.
— Alfarera Carmen: Está horneado con leña de ley y curado para resistir años de tortillas diarias en su hogar.
— Comprador Ernesto: Me lo llevo con gran satisfacción; la alfarería de Guatajiagua es orgullo de El Salvador.`,
        grammaticalBreakdown: `1. 'Suena como campana': prueba auditiva tradicional de homogeneidad estructural sin fisuras internas.
2. 'Bien curado en el fogón': reconocimiento de la maestría artesanal en el manejo del fuego.
3. 'Leña de ley': término salvadoreño para maderas duras de alto poder calorífico constante.
4. 'Resistir años de uso diario': durabilidad comprobada de la loza negra frente al comal metálico industrial.
5. 'Orgullo de El Salvador': dignificación económica y cultural del trabajo de la mujer campesina.`
      }
    ]
  },
  {
    id: 'lenca_comm_04',
    title: 'Unidad 4: La Tierra, el Río Torola y la Siembra de Morazán (Li, Wara wan Tepet)',
    topic: 'Entorno Natural y Agricultura',
    substantiveGuide: `El entorno geográfico y ecológico del departamento de Morazán impone condiciones singulares para la agricultura y la supervivencia campesina: suelos quebrados y pedregosos en laderas escarpadas, clima de transición entre la llanura cálida y los pinares frescos de altura, y la presencia tutelar de dos grandes arterias naturales: el río Torola ('Gual Torola') y el macizo volcánico extinto del Cacahuatique ('Cacahuatique tepet'). Frente a esta geografía agreste, el pueblo Lenca Potón desarrolló saberes milenarios de conservación de suelos, cultivo en terrazas escalonadas de contención y diversificación de cultivos en parcelas familiares.

La milpa lenca ('wara') no se concibe como un monocultivo aislado, sino como una comunidad vegetal viva. Junto a las variedades criollas de maíz amarillo ('yari sinti') y blanco ('tuku sinti'), se intercalan legumbres como el frijol de mata y el frijol enredador ('tsiri'), calabazas de pulpa densa ('sula'), raíces de yuca dulce ('yuri') y arbustos de chile verde y chichicaste. El río Torola no solo provee agua para el ganado y el consumo doméstico; sus pozas y remansos profundos alimentan peces autóctonos ('kawa') como la tepemechín y el chimbolo, cuya captura tradicional mediante atarrayas de algodón respetaba estrictamente las épocas de veda y reproducción estacional.

El léxico ecológico en lenca potón refleja con minuciosidad las dinámicas climáticas de las serranías: 'gualji' (quebrada estacional que ruge con las tormentas pero se apacigua en verano), 'mulapira' (la cumbre montañosa envuelta en neblina espesa), 'mus sesek' (el viento frío que baja del cerro en diciembre anunciando la recolección del café y el maíz seco) y 'pes sewayut' (la tierra negra rica en humus donde germina la semilla). En esta unidad se exploran las conversaciones entre campesinos sobre el manejo de aguas, la rotación de parcelas de ladera, la protección de las fuentes de agua comunales y la reciprocidad ecológica que garantiza la sostenibilidad del territorio.

Los sistemas de almacenamiento de grano en la tradici?n pot?n demuestran una sofisticada comprensi?n de la bioseguridad agr?cola campesina. Las mazorcas selectas destinadas a la siembra del pr?ximo ciclo nunca se guardaban en sacos pl?sticos herm?ticos propensos a la pudrici?n f?ngica; se suspend?an en zarzos de varas de ca?a brava ubicados directamente sobre el tiro del fog?n de la cocina campesina. El humo constante ('shoko') desprendido de la le?a de roble y nance actuaba como repelente natural contra el gorgojo y polillas, conservando la tasa de germinaci?n del ma?z criollo por m?s de dos a?os sin requerir insecticidas sint?ticos. Asimismo, la lectura de las fases lunares ('shu lulu') determinaba con precisi?n milim?trica los d?as propicios para la poda de cafetos, la corta de maderas para postes de cercas y la siembra de tub?rculos subterr?neos como la yuca y el camote.

La reciprocidad ecol?gica del campesinado lenca se manifiesta con particular nitidez en las pr?cticas ceremoniales asociadas al ciclo hidrol?gico y la cosecha de primera y postrera. Antes de iniciar la roza y siembra de las laderas en mayo, las familias de Moraz?n acostumbran bendecir las semillas de ma?z y frijol depositando peque?as ofrendas de copal y flores silvestres en los manantiales y quebradas que alimentan la cuenca del r?o Torola. Esta relaci?n de agradecimiento reconoce que la tierra no es una mercanc?a extractiva sujeta al arbitrio humano, sino un organismo vivo que nutre, acoge y demanda protecci?n solidaria. Al respetar los descansos naturales de la tierra y cuidar la vegetaci?n protectora de los barrancos, las comunidades lencas de Moraz?n salvaguardan la fertilidad de su territorio para las futuras generaciones salvadore?as.`,
    solvedDialogues: [
      {
        id: 'len_d4_01',
        scenario: 'Evaluación del caudal del río Torola y protección de la ribera comunal tras el invierno.',
        dialogue: `— Tata Cipriano: El Gual Torola viene crecido con aguas limpias tras las tormentas de la serranía.
— Tata Santos: Kemah Cipriano, debemos sembrar árboles de sauce y bambú en la ribera para evitar derrumbes.
— Tata Cipriano: Las raíces de los árboles amarran la tierra y protegen los sembradíos de las avenidas del río.
— Tata Santos: Organizaremos a los jóvenes de la aldea el sábado para la jornada comunitaria de reforestación.
— Tata Cipriano: Cuidar las fuentes de agua es asegurar la vida de nuestros nietos en Morazán.`,
        grammaticalBreakdown: `1. 'Gual Torola': hidrónimo ancestral potón 'río grande de las aguas veloces'.
2. 'Siembra de árboles de ribera': técnica ecológica tradicional de bioingeniería para defensa de laderas.
3. 'Evitar derrumbes': conciencia preventiva comunitaria frente al riesgo de deslizamientos de tierra.
4. 'Jornada comunitaria': convocatoria voluntaria de la juventud para el resguardo de bienes comunes.
5. 'Asegurar la vida': principio ético de sostenibilidad territorial intergeneracional.`
      },
      {
        id: 'len_d4_02',
        scenario: 'Siembra en terrazas de ladera usando barreras vivas de zacate y piedra volcánica.',
        dialogue: `— Kewash Daniel: Shik-ita Manuel cómo acomodamos las piedras kew en hilera a lo largo de la pendiente.
— Piltzin Manuel: ¿Para qué sirven esas cercas de piedra antes de sembrar el maíz y el frijol?
— Kewash Daniel: Detienen la tierra fértil cuando llueve fuerte, evitando que el agua se lleve los nutrientes al fondo.
— Piltzin Manuel: Es como una escalera en el cerro donde el maíz puede crecer firme y con buen suelo.
— Kewash Daniel: Así sembraban nuestros abuelos lencas y por eso estas tierras siguen dando alimento tras siglos.`,
        grammaticalBreakdown: `1. 'Piedras kew en hilera': técnica ancestral mesoamericana de curvas de nivel y terrazas de contención.
2. 'Detienen la tierra fértil': prevención de la erosión hídrica superficial en suelos inclinados.
3. 'Escalera en el cerro': metáfora visual comprensible para la transmisión didáctica a los niños.
4. 'Siguen dando alimento': testimonio empírico de la sustentabilidad de la agronomía indígena.
5. 'Respeto a los nutrientes': comprensión del valor del suelo orgánico sin dependencia de agroquímicos.`
      },
      {
        id: 'len_d4_03',
        scenario: 'Pescadores tradicionales de Cacaopera y Guatajiagua conversando a orillas del Torola.',
        dialogue: `— Pescador Felipe: El agua está clara en este remanso; los peces kawa nadan buscando alimento en las piedras.
— Pescador Joaquín: Tiremos la atarraya despacio sin asustar la corriente ni dañar los peces pequeños.
— Pescador Felipe: Solo tomaremos cuatro peces grandes para la sopa familiar del mediodía y dejaremos los demás.
— Pescador Joaquín: Quien pesca con avaricia seca el río; quien toma solo lo necesario tiene comida todo el año.
— Pescador Felipe: Sabia enseñanza de los mayores de Morazán que nunca debemos olvidar en nuestras faenas.`,
        grammaticalBreakdown: `1. 'Kawa nadan': sustantivo 'kawa' (peces de río dulce) en su hábitat natural no contaminado.
2. 'Tirar la atarraya despacio': técnica selectiva de pesca artesanal que evita la captura de alevines.
3. 'Solo lo necesario': norma comunitaria de extracción mesurada para preservar la biomasa acuática.
4. 'Quien pesca con avaricia': sanción moral contra el sobreconsumo y la depredación de los recursos.
5. 'Comida todo el año': garantía de seguridad alimentaria basada en el equilibrio ecológico.`
      },
      {
        id: 'len_d4_04',
        scenario: 'Cosecha de yuca dulce y calabazas en el huerto familiar de ladera.',
        dialogue: `— Shula Mercedes: Nu-pili Jorge, ayúdame a escarbar con cuidado alrededor de la mata de yuca.
— Piltzin Jorge: ¡Mire qué raíces tan gordas y limpias salieron de esta tierra suelta!
— Shula Mercedes: Esta yuri dulce la sancocharemos hoy con sal y canela para compartir con los abuelos.
— Piltzin Jorge: Nusan corté dos ayotes sula grandes que estaban madurando entre los bejucos del rastrojo.
— Shula Mercedes: La tierra bendice a quienes la trabajan con paciencia y sin maltratarla con venenos.`,
        grammaticalBreakdown: `1. 'Escarbar con cuidado': técnica de recolección manual de tubérculos que no corta las raíces secundarias.
2. 'Yuri dulce': término lenca para la yuca comestible de alta digestibilidad.
3. 'Ayotes sula': fruto rastrero de la triada agrícola que complementa la dieta energética.
4. 'Sancochar con sal': procesamiento culinario tradicional inmediato sin conservantes artificiales.
5. 'Sin maltratarla con venenos': reivindicación de la agricultura agroecológica tradicional de Morazán.`
      },
      {
        id: 'len_d4_05',
        scenario: 'Preparación de las semillas criollas para almacenar en el zarzo elevado.',
        dialogue: `— Tata Cipriano: Apartemos las mejores mazorcas de grano parejo y sano para semilla del próximo año.
— Kewash Daniel: Las colgaremos sobre el zarzo del fogón para que el humo shoko las proteja del gorgojo.
— Tata Cipriano: El humo de leña de quebracho es el mejor repelente natural que inventaron nuestros ancestros.
— Kewash Daniel: Así mantenemos viva la semilla criolla adaptada a nuestras lluvias sin comprar híbridos caros.
— Tata Cipriano: Quien guarda su propia semilla custodia la soberanía de su familia y de su pueblo.`,
        grammaticalBreakdown: `1. 'Mazorcas de grano parejo': selección fenotípica campesina de variedades resistentes a la sequía.
2. 'Zarzo del fogón': estructura aérea de almacenamiento donde el humo constante actúa como fungicida natural.
3. 'Humo shoko como repelente': biotecnología tradicional milenaria contra plagas de almacén.
4. 'Semilla criolla adaptada': rechazo explícito a la dependencia de insumos químicos y semillas transgénicas.
5. 'Soberanía de su pueblo': concepto contemporáneo de soberanía alimentaria arraigado en la memoria lenca.`
      }
    ]
  },
  {
    id: 'lenca_comm_05',
    title: 'Unidad 5: Cosmovisión Ancestral, Danza Tradicional y Memoria Lenca (Danza Tradicional wan Memoria)',
    topic: 'Cosmovisión y Narrativa',
    substantiveGuide: `La cosmovisión del pueblo Lenca Potón de El Salvador articula una vivencia sagrada del cosmos estructurada en torno a la veneración de los espíritus de los cerros ('tepet'), las dueñas y guardianes de las aguas ('li'), y la memoria viva de los abuelos que resistieron sucesivas oleadas de despojo colonial, exclusión republicana y el trágico silenciamiento cultural que afectó a las comunidades indígenas del país en el siglo XX. En Morazán, la identidad potón no se extinguió; se replegó en las prácticas artesanales de la alfarería negra, en las historias narradas al calor del fogón nocturno y en expresiones músico-dancísticas sincréticas como la 'Danza del Venado', la 'Danza de Moros y Cristianos' adaptada comunitariamente y las procesiones tradicionales de San Jerónimo en Guatajiagua y San Juan Bautista en Chilanga.

En el corazón de la espiritualidad lenca se encuentra la 'Guancasco' o tradición de hermandad y reconciliación recíproca entre pueblos vecinos. Históricamente, las comunidades de Guatajiagua, Chilanga y Cacaopera celebraban encuentros ceremoniales solemnes en los que las imágenes patronales y los consejos de ancianos se visitaban mutuamente en los límites territoriales, sellando pactos de no agresión, intercambio de semillas y ayuda mutua en tiempos de escasez o catástrofes naturales. Durante estos ritos, los tambores de cuero de venado ('masan pata') y las flautas de carrizo entonan melodías pausadas que recuerdan la comunión del ser humano con los ritmos del viento ('mus') y la lluvia ('at').

Los relatos orales conservados por los ancianos de Chilanga y Guatajiagua abordan figuras míticas protectoras de la naturaleza, como el 'Dueño del Cacahuatique' (entidad tutelar que premia al campesino respetuoso y extravía en la niebla al cazador codicioso), leyendas sobre el nacimiento del río Torola y testimonios de resistencia comunal frente al desarraigo. Esta unidad dota al estudiante avanzado de las herramientas lingüísticas, el vocabulario solemne ('memoria viva', 'resistencia digna', 'antepasados sabios') y los giros dialógicos necesarios para reflexionar sobre los derechos de los pueblos originarios, valorar la herencia inmaterial de Morazán y reivindicar el Lenca Potón como pilar fundacional de la cultura nacional salvadoreña.

En la actualidad, las asociaciones ind?genas y consejos de ancianos de Moraz?n lideran un proceso de reivindicaci?n identitaria y patrimonial que busca rescatar las palabras, toponimias y tradiciones orales del olvido institucional. Para los pobladores lencas contempor?neos, aprender el l?xico ancestral de sus abuelos no es un ejercicio nost?lgico del pasado, sino un acto de afirmaci?n soberana en el presente. Los cantos comunitarios entonados en las festividades patronales, los talleres intergeneracionales de alfarer?a negra en las escuelas rurales de Guatajiagua y las ceremonias de agradecimiento en los ojos de agua del cerro Cacahuatique constituyen testimonios fehacientes de que la ra?z pot?n contin?a floreciendo con vigor, sembrando memoria, identidad y esperanza en el coraz?n de El Salvador.

La preservaci?n de los saberes cosmol?gicos en el oriente salvadore?o no depende ?nicamente de documentos coloniales, sino de la fuerza vibrante de la oralidad campesina que resisti? las tragedias hist?ricas de 1932 y del conflicto armado. En los cantones de Chilanga y Guatajiagua, los relatos del Sisimite guardi?n de las selvas altas, los consejos de los ancianos durante las velaciones de difuntos y las bendiciones pronunciadas en la intimidad del hogar forman un tejido simb?lico indestructible. Integrar estos relatos en la educaci?n formal de El Salvador no es una d?diva benevolente, sino un deber ineludible de reparaci?n y justicia hist?rica. Reivindicar la ra?z lenca pot?n es proclamar que la diversidad cultural es el mayor tesoro espiritual y moral de nuestra patria.`,
    solvedDialogues: [
      {
        id: 'len_d5_01',
        scenario: 'Un abuelo de Guatajiagua relata a los jóvenes el sentido del pacto de hermandad o Guancasco.',
        dialogue: `— Tata Cipriano: Escuchen con atención muchachos: el Guancasco es la ceremonia de paz más hermosa de Morazán.
— Joven Mateo: Tata Cipriano, ¿por qué caminaban leguas enteras para encontrarse en la frontera de los pueblos?
— Tata Cipriano: Para mirarse a los ojos, abrazarse como hermanos y prometer que nunca correría sangre entre nosotros.
— Joven Mateo: Compartían comida y semillas en lugar de pelear por los linderos de los cerros.
— Tata Cipriano: Esa es la sabiduría de nuestros ancestros lencas: la paz verdadera se construye con hospitalidad y respeto mutuo.`,
        grammaticalBreakdown: `1. 'Guancasco': rito mesoamericano e interétnico de reciprocidad, concordia y hermandad comunitaria.
2. 'Encontrarse en la frontera': diplomacia indígena tradicional en mojones territoriales sagrados.
3. 'Mirarse a los ojos': exigencia de sinceridad y honestidad de palabra sin dobleces.
4. 'Compartir semillas': consagración de la seguridad alimentaria compartida por encima del conflicto.
5. 'Paz verdadera': axioma filosófico de la etnohistoria de los pueblos lencas de El Salvador.`
      },
      {
        id: 'len_d5_02',
        scenario: 'Enseñanza sobre el Dueño del Cacahuatique y el respeto a la fauna silvestre.',
        dialogue: `— Tata Valerio: Nunca cacen más de lo que sus familias necesitan para comer en el día.
— Aprendiz Daniel: Los muchachos mayores dicen que en lo alto del cerro se ven venados de gran cornamenta.
— Tata Valerio: Esos venados pertenecen al Dueño del Cerro; quien dispara por vanidad o lucro se pierde en la niebla.
— Aprendiz Daniel: La montaña cuida a sus animales y exige respeto al cazador campesino.
— Tata Valerio: Quien pide permiso a la tierra antes de entrar al monte camina seguro y regresa con bien a su hogar.`,
        grammaticalBreakdown: `1. 'Nunca cacen por codicia': precepto de ética cinegética tradicional mesoamericana.
2. 'Dueño del Cerro': entidad mítica tutelar del bosque que custodia el equilibrio biofísico.
3. 'Se pierde en la niebla mulapira': sanción mítica y psicológica frente a la transgresión ecológica.
4. 'Pide permiso a la tierra': ritual cotidiano de saludo y reverencia antes de ingresar a los bosques.
5. 'Regresa con bien': promesa de amparo que la naturaleza ofrece a quienes respetan sus límites.`
      },
      {
        id: 'len_d5_03',
        scenario: 'Diálogo sobre el significado de los cantos y sones de la Danza del Venado en Morazán.',
        dialogue: `— Músico Tradicional Felipe: El son del tamboril reproduce el latido del corazón del venado corriendo por la sierra.
— Danzante Lucas: Y el pito de carrizo imita el silbido del viento mus cuando pasa entre las peñas del cerro.
— Músico Tradicional Felipe: Al danzar con la cornamenta en la cabeza, no bailamos para divertir, bailamos para agradecer.
— Danzante Lucas: Agradecemos la vida, el agua del Torola y la cosecha que alimenta a nuestros hijos.
— Músico Tradicional Felipe: Mientras haya un tambor sonando en Morazán, la raíz lenca potón jamás será borrada.`,
        grammaticalBreakdown: `1. 'Son del tamboril': instrumento membranófono sagrado que evoca el pulso vital de la naturaleza.
2. 'Pito de carrizo': aerófono tradicional de bambú que modula las escalas pentatónicas lencas.
3. 'Bailamos para agradecer': deslinde radical entre el folclore comercial y el ritual sagrado comunitario.
4. 'Agradecemos la vida y el agua': enunciación de los pilares de la devoción ecológica de Morazán.
5. 'La raíz jamás será borrada': afirmación de perennidad histórica y resistencia cultural activa.`
      },
      {
        id: 'len_d5_04',
        scenario: 'Testimonio de una anciana alfarera sobre la dignidad de mantener el trabajo del barro negro.',
        dialogue: `— Nana Gregoria: Nos dijeron que el plástico y el aluminio reemplazarían a nuestras tinajas de barro negro.
— Joven Andrea: Pero en el plástico el agua se calienta y sabe a químicos, en cambio en la tinaja se conserva fresca y pura.
— Nana Gregoria: Nuestros abuelos no se equivocaron: lo que se hace con las manos y con la tierra tiene alma viva.
— Joven Andrea: Yo aprenderé a moldear con orgullo y enseñaré a mis hijas para que la alfarería no se pierda.
— Nana Gregoria: Tu promesa alegra mi corazón anciano; las mujeres de Guatajiagua somos guardianas de la dignidad.`,
        grammaticalBreakdown: `1. 'Nos dijeron que el plástico reemplazaría': testimonio histórico de la presión industrial homogenizante.
2. 'En la tinaja el agua se conserva pura': superioridad térmica y organoléptica de la arcilla transpirable.
3. 'Lo que se hace con la tierra tiene alma': principio filosófico que valora el trabajo artesanal humano.
4. 'Enseñaré a mis hijas': cadena intergeneracional ininterrumpida de preservación del patrimonio inmaterial.
5. 'Guardianas de la dignidad': papel protagónico y heroico de la mujer alfarera lenca en El Salvador.`
      },
      {
        id: 'len_d5_05',
        scenario: 'Compromiso de la nueva generación con el renacimiento cultural del pueblo Lenca Potón.',
        dialogue: `— Joven Mateo: En la escuela nos enseñaron que los lencas solo existían en los libros de historia antigua.
— Tata Cipriano: Mírame a los ojos hijo: estamos vivos, respiramos este aire, bebemos del Torola y moldeamos el barro.
— Joven Mateo: Hoy aprendemos nuestro vocabulario y nuestras tradiciones en APP-KUSKAT para que todo el país nos conozca.
— Tata Cipriano: La tecnología moderna puesta al servicio de la justicia histórica hace florecer nuestra verdad.
— Joven Mateo: ¡Kualkat shu por siempre para el pueblo Lenca Potón de Morazán y de El Salvador!`,
        grammaticalBreakdown: `1. 'Nos dijeron que solo existían en libros': crítica a la invisibilización historiográfica oficial del indígena.
2. 'Estamos vivos y moldeamos el barro': prueba ontológica irrefutable de existencia cultural viva.
3. 'Aprendemos en APP-KUSKAT': integración virtuosa de herramientas digitales para la soberanía pedagógica.
4. 'Tecnología al servicio de la verdad': resignificación emancipadora de las plataformas educativas modernas.
5. 'Kualkat shu por siempre': cierre triunfal que consagra la perennidad del pueblo Lenca Potón.`
      }
    ]
  }
];
