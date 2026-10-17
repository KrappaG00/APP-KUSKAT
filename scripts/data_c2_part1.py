# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level C2 (Classes 01 to 10)
High-density pedagogical content ensuring >= 500 words per lesson.
"""
from lesson_utils import make_lesson

def get_c2_part1():
    lessons = []

    # ==========================================
    # C2 - CLASE 01: Inversión Estilística Literaria y la Restricción Pronominal
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_01",
        level="C2",
        category="Inversión Literaria & Restricciones Sintácticas",
        title="Clase 01: Inversión Estilística Literaria y la Restricción Pronominal",
        explanation=(
            "En la cumbre del dominio estilístico del idioma inglés (CEFR C2 Mastery), la inversión sintáctica deja de ser una mera fórmula "
            "gramatical para convertirse en un instrumento oratorio y literario de la más alta precisión estética. La inversión estilística literaria "
            "abarca construcciones donde predicados enteros, participios adjetivales o complementos locativos y direccionales se proyectan hacia el "
            "frente oracional (constituent fronting) para modular la tensión dramática, la perspectiva espacial y el clímax narrativo.\n\n"
            "Un principio sintáctico ineludible en este nivel es la 'Restricción Pronominal' (Pronominal Constraint o Pronoun Inversion Prohibition). "
            "Cuando se produce una inversión completa sujeto-verbo (Full Subject-Verb Inversion) detonada por una partícula adverbial o preposicional "
            "(como away, down, up, forth, off, in, out), el orden del sujeto sustantivo permuta con el verbo principal ('Down came the heavy timber'). "
            "Sin embargo, si el sujeto es un pronombre clítico o personal (he, she, it, they, we, you), la lengua inglesa rechaza de plano la inversión "
            "postverbal: el pronombre debe situarse de manera inquebrantable antes del verbo conjugado ('Down it came', NUNCA 'Down came it').\n\n"
            "Fundamento Teórico Lingüístico:\n"
            "Los pronombres personales representan entidades dadas y temáticas en el discurso (Given Information / Presupposed Topic), careciendo "
            "del peso fonológico o prosódico (Light Constituent) necesario para soportar la prominencia focal del final de la cláusula. "
            "Por el contrario, los sintagmas nominales plenos introducen entidades informativas nuevas (New Information Focus / End-Weight Principle), "
            "lo que justifica pragmáticamente su desplazamiento a la posición postverbal final.\n\n"
            "Asimismo, en C2 se perfeccionan las inversiones participiales predicativas: 'Perched upon the highest precipice stood the solitary abbey' "
            "o 'Buried deep beneath centuries of sediment lie the sovereign charters of antiquity'."
        ),
        rules=[
            "Restricción Absoluta del Pronombre Personal: Con partículas direccionales o locativas, nunca se invierte si el sujeto es pronombre. 'Off went the messenger' (sustantivo invertido) vs. 'Off he went' (pronombre no invertido).",
            "Inversión de Participio Pasivo (Inverted Participial Predicates): Participio pasado/presente al frente + BE + Sujeto sustantivo pesado: 'Attached to the ministerial dispatch was a classified dossier'.",
            "Inversión de Adjetivo Predicativo de Grado: 'Gone are the days when sovereign monarchies held unchecked veto power'. 'Gone' y 'Extinct' actúan como adjetivos predicativos antepuestos.",
            "Principio del Peso Terminal (End-Weight Principle): La inversión literaria busca reservar el constituyente sintáctico más pesado y semánticamente denso para la posición final de la oración, dotándola de resonancia rítmica."
        ],
        examples_us=[
            "Suspended between two soaring steel pylons hung the main suspension span of the Golden Gate Bridge. (Suspendido entre dos imponentes pilones de acero colgaba el vano de suspensión principal del puente Golden Gate).",
            "Out of the executive boardroom marched the special prosecutor; away he strode toward the waiting press corps. (Fuera de la sala de juntas ejecutiva marchó el fiscal especial; alejándose a paso firme avanzó hacia el cuerpo de prensa congregado).",
            "Gone are the regulatory frameworks that historically insulated retail depository institutions from speculative volatility. (Atrás han quedado los marcos regulatorios que históricamente aislaban a las entidades de depósito minoristas de la volatilidad especulativa).",
            "Enclosed within the sealed diplomatic pouch was a decrypted dispatch directly addressed to the Secretary of State. (Incluido dentro de la valija diplomática sellada venía un despacho descifrado dirigido directamente al Secretario de Estado)."
        ],
        examples_uk=[
            "Scattered across the rolling expanse of Salisbury Plain lie the megalithic remnants of Neolithic celestial monuments. (Dispersos a través de la ondulada llanura de Salisbury yacen los vestigios megalíticos de monumentos celestes del Neolítico).",
            "Down stepped the Lord Chancellor from the woolsack; forward he progressed to present the sovereign address. (Abajo descendió el Lord Canciller del diván de lana; hacia adelante avanzó para presentar la alocución soberana).",
            "Lost forever are the intricate trade treatises executed between the Crown and Mediterranean mercantile leagues. (Perdidos para siempre están los intrincados tratados comerciales formalizados entre la Corona y las ligas mercantiles mediterráneas).",
            "Standing amidst the devastation of the blitzed cathedral was the stoic figure of the presiding provost. (De pie en medio de la devastación de la catedral bombardeada se encontraba la figura estoica del preboste presidente)."
        ],
        dialogue=[
            {"speaker": "Catedrático de Poética y Retórica (Prof. Vance)", "text": "Notice the sublime syntactical architecture of Milton: 'Up rose the victor, and with him arose his fallen legions'.", "translation": "Observe la sublime arquitectura sintáctica de Milton: 'Up rose the victor, and with him arose his fallen legions'."},
            {"speaker": "Investigador Postdoctoral (Dr. Sterling)", "text": "The end-weight principle is executed to perfection. But look at modern imitators who write 'Away went they'; it completely jar the linguistic ear.", "translation": "El principio de peso terminal se ejecuta a la perfección. Pero observe a los imitadores modernos que escriben 'Away went they'; rechina completamente al oído lingüístico."},
            {"speaker": "Catedrático de Poética y Retórica (Prof. Vance)", "text": "Precisely. The pronominal constraint is absolute in contemporary prose: pronouns possess insufficient phonological weight to occupy the rheme.", "translation": "Precisamente. La restricción pronominal es absoluta en la prosa contemporánea: los pronombres poseen peso fonológico insuficiente para ocupar el rema."},
            {"speaker": "Investigador Postdoctoral (Dr. Sterling)", "text": "Hidden within those archives lies the definitive proof, and until now, concealed it has remained from the scrutiny of historians.", "translation": "Oculta dentro de esos archivos yace la prueba definitiva, y hasta ahora, oculta ha permanecido al escrutinio de los historiadores."}
        ],
        mistakes=[
            "Invertir oraciones con pronombres sujeto en locuciones de movimiento (Error imperdonable en C2: 'Down fell it' ➔ Corrección: 'Down it fell').",
            "Introducir el auxiliar 'did' en inversiones literarias copulativas o de posición (Error: 'Standing did he be' ➔ Corrección: 'Standing there was...').",
            "Aplicar inversión con sujetos pronominales reflexivos o recíprocos de modo artificial.",
            "Desconocer el principio del peso terminal y colocar sujetos diminutos o monosilábicos al final mientras se deja un predicado extenso en el centro."
        ],
        tips=[
            "Aplica la regla mnemotécnica del peso prosódico: los pronombres son plumas ligeras que se pegan a la partícula (Away she ran); los sustantivos son anclas pesadas que caen al final (Away ran the fugitive).",
            "En oratoria magistral, anteponer participios como 'Enclosed', 'Standing', 'Seated' genera un efecto pictórico inigualable.",
            "Utiliza 'Gone are the days when...' para transiciones reflexivas o nostálgicas en ensayos de alta política o sociología.",
            "Comprueba que el verbo principal en la inversión participial concuerde en número con el sujeto posterior: 'Scattered across the desk WERE [varias cartas]'."
        ]
    ))

    # ==========================================
    # C2 - CLASE 02: Cláusulas Absolutas Latinizadas y Autonomía de Sujeto
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_02",
        level="C2",
        category="Sintaxis Clásica & Cláusulas Absolutas",
        title="Clase 02: Cláusulas Absolutas Latinizadas y Autonomía de Sujeto",
        explanation=(
            "La 'Construcción Absoluta' (Nominative Absolute Construction) es una de las reliquias sintácticas más nobles del inglés clásico, "
            "heredada directamente de la influencia estilística del 'Ablativo Absoluto' latino en la prosa renacentista y dieciochesca. "
            "Consiste en una cláusula no finita subordinada que posee su propio sujeto nominal expreso, desvinculado por completo de cualquier "
            "vínculo de rección o concordancia gramatical con el sujeto o predicado de la cláusula matriz.\n\n"
            "A diferencia de las cláusulas reducidas ordinarias, que son dependientes del sujeto principal, la cláusula absoluta funciona como "
            "un modificador oracional autónomo (Sentence Modifier) que establece el marco situacional, cronológico, causal o condicional "
            "de todo el enunciado.\n\n"
            "Variantes Morfosintácticas Maestras de la Cláusula Absoluta en C2:\n"
            "1. Sujeto + Participio Presente (-ing):\n"
            "'The sovereign treasury bleeding liquidity at an unprecedented rate, the monetary committee declared an immediate bank holiday' "
            "(Sangrando liquidez el tesoro soberano a una tasa sin precedentes, el comité monetario declaró un feriado bancario inmediato).\n\n"
            "2. Sujeto + Participio Perfecto (Having + Participio Pasado):\n"
            "'All diplomatic avenues having been exhausted by the plenary assembly, the ambassador requested emergency repatriation orders' "
            "(Habiendo sido agotadas todas las vías diplomáticas por la asamblea plenaria, el embajador solicitó órdenes de repatriación urgente).\n\n"
            "3. Sujeto + Participio Pasivo (-ed) o Adjetivo Puro (Elipsis de 'Being'):\n"
            "En la prosa de máxima condensación estilística, el participio 'being' se omite elegantemente, dejando únicamente el sustantivo "
            "yuxtapuesto a un adjetivo o frase preposicional:\n"
            "'The treaty ratified and the border demarcations secure, both nations inaugurated commercial waterways' (Ratificado el tratado "
            "y aseguradas las demarcaciones fronterizas, ambas naciones inauguraron las vías fluviales comerciales).\n\n"
            "4. Cláusula Absoluta con Partícula Expletiva 'There':\n"
            "'There being no further business before the board, the presiding chairman adjourned the extraordinary session'."
        ),
        rules=[
            "Autonomía Total de Sujeto: El sujeto de la cláusula absoluta jamás coincide con el sujeto de la cláusula principal; esta disociación deliberada previene cualquier acusación de 'participio colgante' (dangling participle).",
            "Puntuación Mediante Coma Vinculante: La cláusula absoluta debe delimitarse obligatoriamente mediante comas si abre o cierra la oración, o entre comas dobles si se inserta en posición medial parentética.",
            "Elipsis Estilística de 'Being': Es lícito y prestigioso elidir 'being' en absolutos atributivos: 'His sword drawn, the captain advanced' (en lugar de 'His sword being drawn').",
            "Uso de Pronombres de Caso Nominativo: En inglés prescriptivo culto C2, si se emplea un pronombre en el absoluto, rige el caso nominativo (he, they), no el oblicuo: 'They having departed, silence reigned' (evitar el coloquial 'them having departed')."
        ],
        examples_us=[
            "The Federal Reserve liquidity facilities having stabilized interbank markets, institutional investors re-entered debt auctions. (Habiendo estabilizado los mercados interbancarios las facilidades de liquidez de la Reserva Federal, los inversionistas institucionales regresaron a las subastas de deuda).",
            "Their proprietary patent having been invalidated by the federal appellate circuit, pharmaceutical competitors flooded the oncology market. (Habiendo sido invalidada su patente patentada por el circuito de apelaciones federal, los competidores farmacéuticos inundaron el mercado oncológico).",
            "The judicial hearing concluded and the jurors sequestered, reporters gathered in the federal courthouse rotunda. (Concluida la audiencia judicial y aislados los miembros del jurado, los reporteros se congregaron en la rotonda del palacio de justicia federal).",
            "There being no statutory impediment to the merger, the Department of Justice closed its antitrust inquiry. (No existiendo impedimento estatutario alguno para la fusión, el Departamento de Justicia cerró su investigación antimonopolio)."
        ],
        examples_uk=[
            "The royal prerogative having been invoked by the Prime Minister, parliamentary deliberations were prorogued until the autumn session. (Habiendo sido invocada la prerrogativa real por el Primer Ministro, las deliberaciones parlamentarias fueron suspendidas hasta la sesión de otoño).",
            "The Bank of England's intervention concluded and gilt market yields normalized, the Chancellor issued an emergency fiscal communique. (Concluida la intervención del Banco de Inglaterra y normalizados los rendimientos del mercado de bonos, el Ministro de Hacienda emitió un comunicado fiscal de emergencia).",
            "All protocol requirements observed, the newly appointed high commissioner presented his letters of credence at Buckingham Palace. (Observados todos los requisitos de protocolo, el recién nombrado alto comisionado presentó sus cartas credenciales en el Palacio de Buckingham).",
            "There being insufficient quorum within the House of Commons, the contentious planning amendment was deferred sine die. (No habiendo quórum suficiente dentro de la Cámara de los Comunes, la controvertida enmienda de planificación fue aplazada sine die)."
        ],
        dialogue=[
            {"speaker": "Decano de Jurisprudencia (Prof. Vance)", "text": "Examine this passage from the appellate opinion: 'The underlying contract voided ab initio, neither party maintained actionable claims'. What syntactical structure is this?", "translation": "Examine este pasaje del dictamen de apelación: 'The underlying contract voided ab initio, neither party maintained actionable claims'. ¿Qué estructura sintáctica es esta?"},
            {"speaker": "Candidato a Doctor (Dr. Sterling)", "text": "It is a classical Latinate nominative absolute with the elision of 'being'. The subject 'contract' operates autonomously from 'party'.", "translation": "Es un absoluto nominativo latinizado clásico con la elisión de 'being'. El sujeto 'contract' opera de manera autónoma respecto a 'party'."},
            {"speaker": "Decano de Jurisprudencia (Prof. Vance)", "text": "Splendid! And observe how 'there being no objection' serves as an immovable institutional formula across British parliamentary procedure.", "translation": "¡Espléndido! Y observe cómo 'there being no objection' sirve como una fórmula institucional inamovible en todo el procedimiento parlamentario británico."},
            {"speaker": "Candidato a Doctor (Dr. Sterling)", "text": "Indeed. Masterful deployment of absolute clauses compresses chronological causation without burdening the prose with repetitive subordinators.", "translation": "En efecto. El despliegue magistral de cláusulas absolutas comprime la causalidad cronológica sin sobrecargar la prosa con subordinantes repetitivos."}
        ],
        mistakes=[
            "Usar caso oblicuo o acusativo para pronombres en absolutos formales (Error vulgar: 'Him being absent, we left'; Corrección prescriptiva C2: 'HE being absent, we left').",
            "Confundir un absoluto con un participio colgante al no dotarlo de sujeto propio ('Having failed the test, the school expelled the student' ➔ el sujeto implícito es erróneo; debe ser 'The student having failed the test, the school...').",
            "Insertar conjunciones coordinantes o subordinantes antes del absoluto ('Because the rain having stopped' ➔ ¡O usas 'Because the rain stopped' o 'The rain having stopped', nunca ambas juntas!).",
            "Omitir las comas que delimitan la cláusula absoluta del resto de la oración."
        ],
        tips=[
            "Formula construcciones absolutas cuando desees otorgar solemnidad judicial a decretos, minutas corporativas o cláusulas contractuales.",
            "Recuerda la fórmula clásica con 'there': 'There being no alternative, the committee voted to dissolve the trust'.",
            "Para un estilo condensado de alta alcurnia, elide 'being' tras adjetivos o participios pasados: 'His integrity intact, the statesman stepped down'.",
            "Verifica siempre que el sujeto del absoluto y el sujeto de la cláusula principal sean dos entidades gramaticales distintas."
        ]
    ))

    # ==========================================
    # C2 - CLASE 03: Binomios Irreversibles (Irreversible Binomials)
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_03",
        level="C2",
        category="Léxico Consagrado & Binomios",
        title="Clase 03: Binomios Irreversibles (Irreversible Binomials)",
        explanation=(
            "Los 'Binomios Irreversibles' (Irreversible Binomials, conocidos también en la lingüística inglesa como Siameses Twins o Frozen Collocations) "
            "son pares fijos de palabras pertenecientes a la misma categoría gramatical (sustantivos, adjetivos, verbos o adverbios), vinculados por "
            "una conjunción coordinante (usualmente 'and', o en ocasiones 'or', 'neither/nor'), cuyo orden lineal es ESTRICTAMENTE INMUTABLE.\n\n"
            "Invertir el orden de sus componentes ('peace and war' en vez de 'war and peace', o 'order and law' en lugar de 'law and order') no solo "
            "viola el ritmo prosódico natural de la lengua inglesa, sino que desenmascara de inmediato a un hablante no nativo, aun cuando la lógica "
            "semántica sea idéntica.\n\n"
            "Fundamentos Fonológicos y Rítmicos de su Invariabilidad:\n"
            "1. Ley de la Longitud Silábica (Short-to-Long Law): La palabra monosilábica o más corta precede sistemáticamente a la palabra polisilábica "
            "o de mayor peso fonético ('bread and butter', 'null and void', 'safe and sound').\n"
            "2. Apofonía y Gradación Vocálica (Ablaut Reduplication): La vocal anterior o más alta (/ɪ/, /æ/) precede a la vocal posterior o más baja "
            "(/ɒ/, /ʌ/): 'riff-raff', 'dilly-dally', 'tit for tat'.\n"
            "3. Aliteración y Rima Consonántica: Muchos binomios han sobrevivido desde el inglés medio gracias a su cadencia aliterada: 'part and parcel', "
            "'spick and span', 'kith and kin', 'hale and hearty'.\n\n"
            "Categorización de Binomios de Nivel C2:\n"
            "- Ámbito Jurídico y Contractual: 'null and void' (nulo y sin efecto), 'aid and abet' (ser cómplice y encubridor), 'terms and conditions', "
            "'rest and recreation', 'rules and regulations'.\n"
            "- Ámbito Retórico y Oratorio: 'huff and puff', 'beck and call' (a entera disposición), 'wear and tear' (desgaste natural), "
            "'ins and outs' (los pormenores / intríngulis), 'by and large' (a grandes rasgos), 'high and dry' (desamparado / a la deriva).\n"
            "- Trinomios Irreversibles (Trinomials): 'lock, stock, and barrel' (de cabo a rabo / en su totalidad), 'hook, line, and sinker'."
        ),
        rules=[
            "Inmutabilidad del Orden Secuencial: El orden de los constituyentes es inalterable. Se dice 'null and void', nunca 'void and null'; se dice 'body and soul', jamás 'soul and body'.",
            "Significado Idiomático No Composicional: El significado global del binomio trasciende la suma literal de sus partes. 'Part and parcel' no se refiere a paquetes postales, sino a una característica consustancial o intrínseca.",
            "Uso Predicativo Fijo en Derecho: 'The arbitration panel declared the contractual covenants NULL AND VOID'.",
            "Concordancia Singular en Binomios Conceptualizados como Unidad: Cuando el binomio representa una entidad conceptual única, el verbo concuerda en singular: 'Law and order IS essential for democracy' / 'Bread and butter IS his primary concern'."
        ],
        examples_us=[
            "The federal district judge ruled that the non-compete clause signed by the semiconductor engineer was completely null and void. (El juez de distrito federal dictaminó que la cláusula de no competencia firmada por el ingeniero de semiconductores era completamente nula y sin valor).",
            "Rigorous public scrutiny is part and parcel of assuming high-ranking executive appointments in the federal government. (El riguroso escrutinio público es parte consustancial de asumir nombramientos ejecutivos de alto rango en el gobierno federal).",
            "The corporate treasury team managed to weather the credit crunch and emerged from bankruptcy safe and sound. (El equipo de tesorería corporativa logró capear la contracción crediticia y salió de la bancarrota sano y salvo).",
            "Whistleblowers alleged that offshore shell companies were utilized to aid and abet systemic tax evasion by venture capitalists. (Los denunciantes alegaron que se utilizaron empresas pantalla en el extranjero para facilitar y encubrir la evasión fiscal sistémica de capitalistas de riesgo)."
        ],
        examples_uk=[
            "The Chancellor of the Exchequer must explain the ins and outs of the proposed capital gains tax restructuring to Parliament. (El Ministro de Hacienda debe explicar los pormenores y entresijos de la reestructuración del impuesto sobre ganancias de capital al Parlamento).",
            "Tens of thousands of rail commuters were left high and dry across London terminals due to unannounced industrial action. (Decenas de miles de viajeros ferroviarios quedaron completamente desamparados en las terminales de Londres debido a una huelga sindical no anunciada).",
            "The ancient cathedral's stone buttresses have suffered substantial wear and tear over seven centuries of exposure to North Sea winds. (Los contrafuertes de piedra de la antigua catedral han sufrido un desgaste natural sustancial durante siete siglos de exposición a los vientos del Mar del Norte).",
            "Senior civil servants must not be at the beck and call of political advisors without statutory departmental accountability. (Los altos funcionarios públicos no deben estar a entera disposición y capricho de los asesores políticos sin una rendición de cuentas departamental estatutaria)."
        ],
        dialogue=[
            {"speaker": "Fiscal Superior de la Corona (Dr. Sterling)", "text": "Counsel for the defense argued that the contested warranty covenants were rendered null and void by procedural omissions.", "translation": "El abogado de la defensa argumentó que los compromisos de garantía impugnados quedaron nulos y sin valor por omisiones procesales."},
            {"speaker": "Barrister Especialista (Dra. Vance)", "text": "Indeed, but the appellate judges determined that full disclosure was part and parcel of the underwriting protocol signed by both parties.", "translation": "En efecto, pero los jueces de apelación determinaron que la divulgación completa era parte consustancial del protocolo de suscripción firmado por ambas partes."},
            {"speaker": "Fiscal Superior de la Corona (Dr. Sterling)", "text": "Did the defendant assist the illicit syndicate lock, stock, and barrel, or was his involvement confined to peripheral bookkeeping?", "translation": "¿Ayudó el acusado al sindicato ilícito de cabo a rabo y por completo, o su participación se limitó a la contabilidad periférica?"},
            {"speaker": "Barrister Especialista (Dra. Vance)", "text": "He aided and abetted the fraud across every tier; he mastered all the ins and outs of their offshore concealment architecture.", "translation": "Fue cómplice y encubridor del fraude en todos los niveles; dominaba todos los pormenores y entresijos de su arquitectura de ocultamiento extraterritorial."}
        ],
        mistakes=[
            "Invertir el orden de las palabras en el binomio (Error gravísimo: 'void and null', 'downs and ups', 'sound and safe').",
            "Traducir literalmente binomios del español cuyo orden es opuesto (e.g. en español decimos 'blanco y negro', pero en inglés se dice 'black and white'; 'paz y tranquilidad' = 'peace and quiet').",
            "Sustituir las palabras consolidadas por sinónimos modernos (Error: 'part and package' en vez de 'part and parcel'; 'aid and help' en lugar de 'aid and abet').",
            "Hacer concordar en plural binomios conceptuales unitarios en redacción prescriptiva formal ('Law and order ARE' ➔ 'Law and order IS')."
        ],
        tips=[
            "Escucha la melodía fonética del binomio: la palabra más breve y percusiva casi siempre va primero (short before long: 'sink or swim', 'give and take').",
            "En redacción jurídica y contratos, utiliza siempre los binomios consolidados consagrados por la Common Law: 'terms and conditions', 'null and void', 'covenants and agreements'.",
            "Memoriza trinomios emblemáticos para describir exhaustividad categórica: 'lock, stock, and barrel' (absolutamente todo sin excepción).",
            "Evita abusar de los binomios coloquiales en artículos científicos, pero explótalos con maestría en discursos oratorios y ensayos de opinión de prestigio."
        ]
    ))

    # ==========================================
    # C2 - CLASE 04: Estructura Perifrástica 'TO BE TO' para Planes Frustrados
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_04",
        level="C2",
        category="Perífrasis Protocolarias",
        title="Clase 04: Estructura Perifrástica 'TO BE TO' para Planes Frustrados",
        explanation=(
            "La perífrasis verbal 'TO BE TO + Infinitivo' representa uno de los dispositivos morfosintácticos más protocolarios, solemnes y "
            "evocadores del inglés formal C2. Sus aplicaciones funcionales van desde la consignación de decretos e instrucciones institucionales "
            "hasta la expresión del destino histórico ineluctable.\n\n"
            "Sin embargo, su dimensión estilística más rica y compleja se despliega al conjugarla en pretérito perfecto para expresar "
            "'Planes Frustrados o Destinos Interrumpidos' (Unfulfilled Intentions or Thwarted Destiny in the Past):\n\n"
            "1. La Estructura de Plan Frustrado: 'WAS / WERE TO HAVE + Participio Pasado'\n"
            "Indica de forma taxativa que una acción estaba formalmente programada, encomendada o predestinada para llevarse a cabo en el pasado, "
            "pero una circunstancia sobrevenida, un giro trágico o una fuerza mayor IMPIDIÓ DEFINITIVAMENTE su consumación fáctica:\n"
            "'The transatlantic summit WAS TO HAVE BEEN HELD in Geneva, but geopolitical hostilities forced an indefinite cancellation' "
            "(La cumbre transatlántica debía haberse celebrado en Ginebra, pero las hostilidades geopolíticas forzaron una cancelación indefinida. "
            "Hecho: NO se celebró en Ginebra).\n\n"
            "2. Contraste con el Destino Histórico Consumado: 'WAS / WERE TO + Infinitivo Simple'\n"
            "Cuando la estructura se formula con infinitivo simple ('was to become', 'was to lead'), expresa una predestinación retrospectiva "
            "que SÍ LLEGÓ A CUMPLIRSE con posterioridad en la historia (Future in the Past consumado):\n"
            "'The young naval officer WAS TO BECOME the supreme commander of Allied naval forces twenty years later' (El joven oficial naval "
            "habría de convertirse / estaba destinado a convertirse en el comandante supremo de las fuerzas navales aliadas veinte años después. "
            "Hecho: SÍ se convirtió en comandante).\n\n"
            "3. Instrucciones Imperativas Oficiales y Precondiciones Condicionales:\n"
            "- Órdenes solemnes: 'You are to report to the embassy immediately' (Debe presentarse en la embajada de inmediato).\n"
            "- Precondición indispensable en oraciones condicionales: 'If this transition is to succeed, fiscal discipline must be maintained'."
        ),
        rules=[
            "Fórmula de Plan Frustrado: 'Was / Were + TO HAVE + Participio Pasado'. Denota irrealidad y cancelación retroactiva de un plan previo.",
            "Fórmula de Destino Histórico Consumado: 'Was / Were + TO + Infinitivo Simple'. Indica un acontecimiento futuro desde el punto de vista del pasado que efectivamente llegó a ocurrir en la historia real.",
            "Precondición de Necesidad con 'IF... IS TO': Cuando 'be to' aparece en una cláusula con 'if', expresa lo que debe ocurrir primero para que un objetivo sea alcanzable: 'If we are to survive, we must adapt'.",
            "Prohibición Pasiva Estricta: 'Not to be + participio' formula prohibiciones categóricas despersonalizadas: 'These premises are not to be entered without biometric clearance'."
        ],
        examples_us=[
            "The Federal Reserve chairman was to have delivered a keynote address on quantitative tightening, but sudden market volatility prompted an emergency recess. (El presidente de la Reserva Federal debía haber pronunciado un discurso de apertura sobre el ajuste cuantitativo, pero la repentina volatilidad del mercado provocó un receso de emergencia).",
            "The secret Manhattan Project physicist was to become one of the most vociferous advocates for international nuclear disarmament in the postwar era. (El físico secreto del Proyecto Manhattan habría de convertirse en uno de los defensores más vehementes del desarme nuclear internacional en la era de posguerra).",
            "If the federal antitrust lawsuit is to prevail before the Supreme Court, the Department of Justice must prove demonstrable consumer harm. (Si la demanda antimonopolio federal ha de prevalecer ante la Corte Suprema, el Departamento de Justicia debe probar un daño demostrable al consumidor).",
            "The prototype orbital space station was to have been deployed during the third fiscal quarter, yet microcrack anomalies delayed ignition. (El prototipo de estación espacial orbital debía haber sido desplegado durante el tercer trimestre fiscal; sin embargo, anomalías de microfisuras retrasaron el encendido)."
        ],
        examples_uk=[
            "The Queen was to have opened the Commonwealth Games in Edinburgh, but acute indisposition required the Prince of Wales to deputise. (La Reina debía haber inaugurado los Juegos de la Mancomunidad en Edimburgo, pero una repentina indisposición requirió que el Príncipe de Gales actuase en su representación).",
            "This young Oxford undergraduate was to lead the nation as Prime Minister through the darkest years of the twentieth century. (Este joven estudiante de Oxford habría de liderar a la nación como Primer Ministro a través de los años más oscuros del siglo veinte).",
            "If the United Kingdom is to preserve its sovereign scientific leadership, public capital expenditure in fusion research must double. (Si el Reino Unido ha de preservar su liderazgo científico soberano, el gasto público de capital en investigación de fusión debe duplicarse).",
            "Under ministerial protocol, classified civil service minutes are not to be disclosed until thirty calendar years have elapsed. (Bajo el protocolo ministerial, las actas clasificadas de la administración pública no han de divulgarse hasta que hayan transcurrido treinta años naturales)."
        ],
        dialogue=[
            {"speaker": "Historiador Diplomático (Dr. Sterling)", "text": "Notice the poignant tragedy of the peace accord: 'The treaty was to have brought an end to regional bloodletting, but the assassination of the envoy dismantled all goodwill'.", "translation": "Observe la conmovedora tragedia del acuerdo de paz: 'The treaty was to have brought an end to regional bloodletting, but the assassination of the envoy dismantled all goodwill'."},
            {"speaker": "Catedrática de Relaciones Internacionales (Dra. Vance)", "text": "Indeed. The perfect infinitive 'was to have brought' encapsulates the dashed hopes of an entire generation within four words.", "translation": "En efecto. El infinitivo perfecto 'was to have brought' encapsula las esperanzas frustradas de toda una generación en cuatro palabras."},
            {"speaker": "Historiador Diplomático (Dr. Sterling)", "text": "Whereas in chapter five you write: 'The treaty was to establish the modern geopolitical architecture of Europe'. That simple infinitive signals fulfilled historical consequence.", "translation": "Mientras que en el capítulo cinco usted escribe: 'The treaty was to establish the modern geopolitical architecture of Europe'. Ese infinitivo simple señala una consecuencia histórica consumada."},
            {"speaker": "Catedrática de Relaciones Internacionales (Dra. Vance)", "text": "Precisely. The syntactical divergence between 'was to do' and 'was to have done' is the dividing line between historical realization and historical heartbreak.", "translation": "Exactamente. La divergencia sintáctica entre 'was to do' y 'was to have done' es la línea divisoria entre la realización histórica y la desolación histórica."}
        ],
        mistakes=[
            "Confundir 'was to do' con 'was to have done' creyendo que ambos indican planes frustrados (Error de matiz: 'was to do' señala lo que ocurrió después en la historia; 'was to have done' señala lo que fue cancelado).",
            "Omitir el participio pasado tras 'was to have' (Error: 'He was to have attend the gala'; Corrección: 'He was to have ATTENDED the gala').",
            "Usar 'is to' con significado de pasado (Error: 'He is to leave yesterday'; Corrección: 'He was to have left yesterday').",
            "No concertar el auxiliar 'were' con sujetos plurales en esta estructura solemne ('The envoys was to have met' ➔ 'The envoys WERE to have met')."
        ],
        tips=[
            "En biografías históricas o crónicas retrospectivas, emplea 'was to become / was to shape' para prefigurar con dramatismo el destino de un personaje: 'Little did she suspect that she was to alter the course of science'.",
            "Para lamentar planes cancelados con elegancia diplomática, recurre a 'We were to have finalized the pact today, but negotiations encountered procedural obstacles'.",
            "En condiciones de supervivencia o propósito esencial, utiliza 'If [sujeto] is to [verbo base]': 'If society is to flourish, the rule of law must prevail'.",
            "Recuerda que esta perífrasis transmite una solemnidad que 'supposed to' o 'meant to' jamás alcanzan."
        ]
    ))

    # ==========================================
    # C2 - CLASE 05: Fórmulas de Subjuntivo Fosilizado y Modismos Arcaizantes
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_05",
        level="C2",
        category="Subjuntivo Fórmula & Arcaísmos",
        title="Clase 05: Fórmulas de Subjuntivo Fosilizado y Modismos Arcaizantes",
        explanation=(
            "En el estrato más arcaico y formal del idioma inglés sobreviven expresiones fijas cristalizadas conocidas como 'Subjuntivo de Fórmula' "
            "(Formulaic Subjunctive) o 'Modismos Fosilizados'. Estas estructuras representan oraciones desiderativas, invocaciones solemnes, "
            "concesiones retóricas o giros rituales donde el verbo principal conserva la forma base pura (Bare Infinitive) de tercera persona "
            "singular sin '-s', reflejando el orden gramatical del inglés moderno temprano (Early Modern English) y de la King James Bible.\n\n"
            "Estas fórmulas fosilizadas son de uso cotidiano en el protocolo de Estado, los tribunales anglosajones, las asambleas litúrgicas "
            "y la retórica parlamentaria de más alto abolengo:\n\n"
            "1. Invocaciones y Desiderativos Solemne (Subjuntivo Óptativo):\n"
            "- 'God SAVE the King' (Dios salve al Rey; verbo 'save' en forma base, NO 'saves').\n"
            "- 'Heaven FORBID that such a calamity befall our nation' (El cielo impida que tal calamidad acontezca a nuestra nación).\n"
            "- 'BE that as it may' (Sea como fuere / Sea como sea; la locución concesiva formal más extendida en C2).\n"
            "- 'COME what may' (Pase lo que pase / Venga lo que venga).\n"
            "- 'Suffice it to say that...' (Baste decir que...; verbo 'suffice' en subjuntivo fósil que rige objeto clausal).\n"
            "- 'Long LIVE the sovereign' (Larga vida al soberano).\n"
            "- 'God BLESS you' / 'Peace BE upon you'.\n\n"
            "2. Subjuntivo Condicional Invertido Arcaizante sin Nexo 'If':\n"
            "- 'BE HE friend or foe, he must face justice' (Sea amigo o enemigo, debe enfrentar a la justicia).\n"
            "- 'COST what it may, the mission will proceed' (Cueste lo que cueste, la misión seguirá adelante).\n"
            "- 'FAR BE IT FROM ME to criticize your decision, but...' (Lejos esté de mí criticar su decisión, pero...).\n\n"
            "El dominio de este corpus idiomático consagrado confiere a la prosa del escritor C2 una textura cultural profunda y un aura de "
            "erudición inexpugnable."
        ),
        rules=[
            "Forma Base Universal e Inalterable: El verbo central del modismo jamás acepta sufijos flexivos (-s, -ed). Decir 'God saves the King' o 'Suffices it to say' destruye el modismo y constituye un solecismo.",
            "Estructura Concesiva de 'Be that as it may': Se utiliza al inicio de un párrafo para descartar una objeción y avanzar hacia la tesis cardinal ('A pesar de todo lo expuesto, ...').",
            "Locución de Resumen Elegante 'Suffice it to say (that)': Sustituye a 'In conclusion' o 'To put it briefly' en conferencias académicas de gran prestigio.",
            "Fórmula de Humildad Retórica 'Far be it from me to...': Empleada en diplomacia para suavizar una discrepancia categórica antes de enunciarla formalmente."
        ],
        examples_us=[
            "Be that as it may, the Federal Reserve must balance monetary tightening against escalating domestic banking vulnerabilities. (Sea como fuere, la Reserva Federal debe equilibrar el ajuste monetario frente a las crecientes vulnerabilidades de la banca nacional).",
            "Suffice it to say that the intelligence briefing unmasked systemic espionage apparatuses operating within critical infrastructure. (Baste decir que el informe de inteligencia desenmascaró aparatos de espionaje sistémico que operaban dentro de infraestructuras críticas).",
            "Heaven forbid that an unauthorized breach compromise the cryptographic keys of the nationwide electrical grid. (El cielo impida que una brecha no autorizada comprometa las claves criptográficas de la red eléctrica nacional).",
            "Far be it from me to question the esteemed judge's jurisdictional jurisprudence, but statutory precedent suggests an appeal is warranted. (Lejos esté de mí cuestionar la jurisprudencia de jurisdicción del estimado juez, pero el precedente estatutario sugiere que se justifica una apelación)."
        ],
        examples_uk=[
            "God save the King, and may parliamentary sovereignty guide the constitutional deliberations of the realm. (Dios salve al Rey, y que la soberanía parlamentaria guíe las deliberaciones constitucionales del reino).",
            "Come what may, the Chancellor pledged to preserve sovereign capital investments across scientific universities. (Venga lo que venga, el Ministro de Hacienda se comprometió a preservar las inversiones soberanas de capital en las universidades científicas).",
            "Be he a peer of the realm or an ordinary citizen, equality before the High Court of Justice remains immutable. (Sea un par del reino o un ciudadano ordinario, la igualdad ante el Tribunal Superior de Justicia sigue siendo inmutable).",
            "Cost what it may in political capital, the Prime Minister announced an immediate inquiry into ministerial lobbying discrepancies. (Cueste lo que cueste en capital político, el Primer Ministro anunció una investigación inmediata sobre las discrepancias del cabildeo ministerial)."
        ],
        dialogue=[
            {"speaker": "Ministro Plenipotenciario (Dr. Sterling)", "text": "The opposition claims our regional trade treaty is flawed. Be that as it may, no alternative framework has been tabled in Parliament.", "translation": "La oposición afirma que nuestro tratado de comercio regional es defectuoso. Sea como fuere, ningún marco alternativo ha sido presentado en el Parlamento."},
            {"speaker": "Presidenta del Consejo (Dra. Vance)", "text": "Suffice it to say that our trade delegation negotiated under immense geopolitical pressure to avert unilateral sanctions.", "translation": "Baste decir que nuestra delegación comercial negoció bajo una inmensa presión geopolítica para evitar sanciones unilaterales."},
            {"speaker": "Ministro Plenipotenciario (Dr. Sterling)", "text": "Heaven forbid that party factionalism derail three years of bilateral diplomatic consensus.", "translation": "El cielo impida que el faccionalismo partidista descarrile tres años de consenso diplomático bilateral."},
            {"speaker": "Presidenta del Consejo (Dra. Vance)", "text": "Far be it from me to lecture the cabinet on electoral prudence, but ratifying this accord is our bounden duty.", "translation": "Lejos esté de mí dar lecciones al gabinete sobre prudencia electoral, pero ratificar este acuerdo es nuestro deber insoslayable."}
        ],
        mistakes=[
            "Añadir la 's' de tercera persona al verbo en subjuntivo de fórmula (Error común: 'Be that as it *mays*', 'Suffice*s* it to say', 'God *saves* the Queen').",
            "Alterar el orden de las palabras en modismos fijos (Error: 'May come what' en lugar de 'Come what may').",
            "Escribir 'Be as it may' omitiendo el pronombre 'that' obligatorio ('Be THAT as it may').",
            "Confundir 'Heaven forbid' con construcciones indicativas regulares ('Heaven forbids that...')."
        ],
        tips=[
            "Utiliza 'Suffice it to say that...' para condensar pasajes farragosos en tus escritos y centrarte en la conclusión sustancial.",
            "Introduce 'Be that as it may' en el segundo o tercer párrafo argumentativo para conceder un punto al oponente antes de desmantelar su postura.",
            "Recuerda que en estas expresiones el verbo está fosilizado en modo subjuntivo antiguo, por lo que nunca cambia de tiempo ni persona.",
            "Emplea 'Far be it from me to [verb]' en negociaciones delicadas para manifestar deferencia extrema antes de señalar una falla."
        ]
    ))

    # ==========================================
    # C2 - CLASE 06: Construcciones Doblemente Negativas y Litotes Retóricos
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_06",
        level="C2",
        category="Retórica & Atenuación Estilística",
        title="Clase 06: Construcciones Doblemente Negativas y Litotes Retóricos",
        explanation=(
            "Mientras que en el inglés coloquial básico la doble negación gramatical ('I don't know nothing') se considera una incorrección "
            "popular inadmisible, en la retórica clásica culta y en la prosa estilística C2 la negación calculada de un término opuesto "
            "constituye una de las figuras oratorias más deslumbrantes: el 'LÍTOTE' (Litotes, del griego λιτότης, sencillez o atenuación).\n\n"
            "El lítote consiste en afirmar una verdad positiva mediante la negación enfática de su contrario negativo o peyorativo. Lejos "
            "de anularse torpemente, las dos partículas negativas cooperan para crear una aserción atenuada, irónica, eufemística o de suma "
            "cortesía diplomática (Understatement):\n"
            "- En vez de decir crudamente 'His contribution was enormous', el orador cultivado formula: 'His contribution was NOT INSIGNIFICANT' "
            "(Su contribución no fue insignificante).\n"
            "- En lugar de proclamar 'The CEO is brilliant', la prensa financiera suscribe: 'The CEO is NO STRANGER TO algorithmic finance' "
            "o 'The decision was NOT UNREASONABLE'.\n\n"
            "Arquitectura del Lítote y Doble Negación Erudita en C2:\n"
            "1. 'NOT + Prefijo Negativo' (Un-, In-, Dis-, Im-):\n"
            "- 'not unfeasible' (no inviable / bastante factible).\n"
            "- 'not unimpressed' (no poco impresionado / gratamente sorprendido).\n"
            "- 'not incompatible with' (no incompatible con / perfectamente armónico con).\n"
            "- 'not infrequently' (no con poca frecuencia / con notable regularidad).\n\n"
            "2. 'NO + Pronombre / Sustantivo Negativo':\n"
            "- 'She is NO FOOL' (Ella no tiene un pelo de tonta / Es sumamente astuta).\n"
            "- 'It was NO EASY FEAT' (No fue empresa fácil / Fue una proeza titánica).\n"
            "- 'It is NO ACCIDENT that...' (No es casualidad que...).\n\n"
            "3. Negación Doble Clausal con 'Scarcely / Hardly... without':\n"
            "'A week scarcely passes WITHOUT another revelations of corruption' (Apenas pasa una semana sin que surja otra revelación).\n\n"
            "George Orwell satirizó el abuso mecánico de esta figura en 'Politics and the English Language' (acuñando la regla jocosa: 'Una persona "
            "no carente de ingenio no es incapaz de no escribir sin doble negación'); no obstante, cuando se dosifica con maestría, el lítote "
            "es el arma favorita del escepticismo académico y la diplomacia anglosajona."
        ),
        rules=[
            "Principio de Atenuación Enfática: El lítote no es una simple equivalencia matemática de positivo puro; expresa reserva cautelosa, sofisticación intelectual o modestia irónica.",
            "Emparejamiento de Negación con Prefijo Privativo: Se antepone 'not' a adjetivos con prefijos como 'un-', 'in-', 'im-', 'dis-': 'not uncommon', 'not implausible', 'not unjustified'.",
            "Construcción 'No stranger to': Locución consagrada para denotar experiencia dilatada y familiaridad íntima con un fenómeno complejo o controvertido: 'He is no stranger to corporate litigation'.",
            "Diferencia con la Doble Negación Vulgar: La doble negación vulgar duplica elementos negativos con sentido negativo único ('I didn't see nobody'); el lítote niega un elemento negativo para generar un sentido positivo refinado ('It was not unwelcome')."
        ],
        examples_us=[
            "The Federal Reserve chairman was not insensible to the acute distress suffered by regional mortgage lenders. (El presidente de la Reserva Federal no era insensible a las graves tribulaciones padecidas por los prestamistas hipotecarios regionales).",
            "The defense attorney's closing argument was not without merit, yet the digital forensic evidence proved incontrovertible. (El alegato final del abogado defensor no carecía de mérito; sin embargo, la evidencia pericial digital resultó incontrovertible).",
            "The Silicon Valley venture fund is no stranger to aggressive antitrust scrutiny within the European regulatory arena. (El fondo de capital de riesgo de Silicon Valley no es ningún desconocido para el riguroso escrutinio antimonopolio en el ámbito regulatorio europeo).",
            "It is not uncommon for federal appellate judges to demand supplementary constitutional briefing on novel statutory questions. (No es infrecuente que los jueces de apelación federal exijan informes constitucionales complementarios sobre cuestiones estatutarias novedosas)."
        ],
        examples_uk=[
            "The Foreign Secretary's diplomatic overture was received with not unmitigated enthusiasm by Whitehall mandarins. (La iniciativa diplomática del Ministro de Asuntos Exteriores fue recibida con un entusiasmo no del todo exento de reservas por los altos funcionarios de Whitehall).",
            "It was no small achievement for the minority coalition government to pass the contentious energy decarbonisation bill. (No fue un logro menor para el gobierno de coalición minoritario aprobar el controvertido proyecto de ley de descarbonización energética).",
            "The Chancellor's proposed fiscal trajectory is not incompatible with long-term debt sustainability benchmarks. (La trayectoria fiscal propuesta por el Ministro de Hacienda no es incompatible con los parámetros de sostenibilidad de deuda a largo plazo).",
            "Her Majesty's inspectors were not entirely satisfied with clinical governance safeguards at the municipal health trust. (Los inspectores de Su Majestad no quedaron enteramente satisfechos con las salvaguardas de gobernanza clínica en el consorcio de salud municipal)."
        ],
        dialogue=[
            {"speaker": "Embajador Jubilado (Dr. Sterling)", "text": "The ambassador's latest memorandum on bilateral tariff concessions is not unpersuasive.", "translation": "El último memorando del embajador sobre concesiones arancelarias bilaterales no carece de fuerza persuasiva."},
            {"speaker": "Alta Comisionada (Dra. Vance)", "text": "Indeed. He is no stranger to thorny maritime border negotiations, and his recommendations are not without substantial merit.", "translation": "En efecto. No es ningún neófito en espinosas negociaciones fronterizas marítimas, y sus recomendaciones no carecen de mérito sustancial."},
            {"speaker": "Embajador Jubilado (Dr. Sterling)", "text": "Securing cross-party consensus across both houses will be no easy feat, given prevailing protectionist sentiments.", "translation": "Asegurar un consenso multipartidista en ambas cámaras no será tarea fácil, dados los sentimientos proteccionistas imperantes."},
            {"speaker": "Alta Comisionada (Dra. Vance)", "text": "Nevertheless, an amicable settlement would be not unwelcome to industrial manufacturing exporters.", "translation": "No obstante, un acuerdo amistoso no sería mal recibido por los exportadores de manufactura industrial."}
        ],
        mistakes=[
            "Confundir el lítote refinado con la doble negación vulgar no estándar ('He didn't do nothing' ➔ ¡Vulgarismo atroz!).",
            "Sobrecargar un mismo párrafo con múltiples lítotes sucesivos, volviendo el texto ilegible y pedante.",
            "Utilizar 'not' con adjetivos que ya son positivos sin prefijo privativo intentando crear lítote ('not good' no es un lítote; es una simple negación débil).",
            "Malinterpretar el sentido: creer que 'not unhelpful' significa 'inútil', cuando en realidad significa 'bastante útil'."
        ],
        tips=[
            "Emplea 'not unfeasible', 'not unreasonable' y 'not uncommon' en tus escritos académicos para expresar rigor analítico sin arrogancia dogmática.",
            "Recuerda que en el humor y la oratoria británica, el lítote ('understatement') es la reina de las figuras retóricas.",
            "Utiliza 'is no stranger to...' para presentar la vasta trayectoria de una personalidad o institución.",
            "En debates formales, calificar la tesis de un adversario como 'not entirely devoid of logic' es una forma devastadoramente caballerosa de desarmar su postura."
        ]
    ))

    # ==========================================
    # C2 - CLASE 07: Cohesión Léxica Sofisticada: Paralelismo y Quiasmo
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_07",
        level="C2",
        category="Retórica Oratoria & Estilística",
        title="Clase 07: Cohesión Léxica Sofisticada: Paralelismo y Quiasmo",
        explanation=(
            "En el registro de maestría absoluta C2, la cohesión textual trasciende los meros conectores oracionales para articularse mediante "
            "la simetría geométrica y la música arquitectónica de la prosa: las figuras retóricas sintácticas del 'Paralelismo' (Parallelism / "
            "Isocolon) y del 'Quiasmo' (Chiasmus / Antimetabole).\n\n"
            "1. El Paralelismo Sintáctico Estricto:\n"
            "El paralelismo exige que dos o más elementos contiguos de una oración (o de un párrafo entero) compartan con exactitud matemática "
            "idéntica categoría gramatical, idéntica estructura de complementos y simetría rítmica. Cuando se coordinan mediante conjunciones "
            "o correlativos ('either... or', 'not only... but also', 'both... and'), romper el paralelismo es considerado un defecto grave de "
            "estilo por editoriales académicas y tribunales internacionales:\n"
            "- Asimétrico (Defectuoso): 'He was renowned for his intellectual brilliance, writing prolifically, and to debate fiercely'.\n"
            "- Paralelo (C2 Impecable): 'He was renowned for his intellectual brilliance, his prolific scholarship, and his fierce oratorical mastery'.\n\n"
            "2. El Quiasmo y la Antimetábole:\n"
            "El quiasmo (del griego χιασμός, disposición cruzada en forma de la letra ji 'X') es una estructura retórica magistral en la cual "
            "el orden sintáctico o conceptual de la primera cláusula se invierte simétricamente en la segunda (A-B-B-A):\n"
            "'Sovereignty is not given by treaties to nations; by nations are treaties granted their sovereign legitimacy'.\n"
            "Cuando el quiasmo repite las mismas palabras exactas en orden inverso, se denomina 'Antimetábole' (como la célebre máxima de JFK: "
            "'Ask not what your country can do for you; ask what you can do for your country').\n\n"
            "Efecto Pragmático:\n"
            "Estas construcciones dotan a los discursos de Estado, alocuciones de graduación, manifiestos y conclusiones de tesis de un impacto "
            "mnemotécnico imborrable, persuadiendo a la audiencia no solo mediante la veracidad del argumento, sino mediante la belleza irrevocable "
            "de su diseño acústico y sintáctico."
        ),
        rules=[
            "Ley del Paralelismo Categorial: Si el primer elemento tras un correlativo es un sintagma preposicional, el segundo debe ser forzosamente un sintagma preposicional idéntico: 'Not by coercion, but by consensus'.",
            "Simetría Verbal en Listas Tripartitas (Tricolon): En enumeraciones de tres elementos, mantén el mismo patrón morfológico: tres gerundios, tres nombres abstractos o tres cláusulas infinitivas completas.",
            "Estructura Quiástica Cruzada (A-B : B-A): En el quiasmo, los términos correspondientes invierten sus posiciones en la segunda mitad del periodo oracional: 'We shape our institutions [A-B], and thereafter our institutions shape us [B-A]'.",
            "Puntuación del Periodo Oratorio: El quiasmo y el paralelismo de oraciones complejas se delimitan preceptivamente mediante punto y coma (semicolon) o dos puntos para destacar la pausa rítmica de contraposición."
        ],
        examples_us=[
            "The administration sought not merely to stabilize financial markets through liquidity, but to revitalize domestic manufacturing through targeted capital subsidies. (La administración buscó no meramente estabilizar los mercados financieros mediante liquidez, sino revitalizar la manufactura nacional a través de subsidios de capital focalizados).",
            "In times of geopolitical crisis, we must never negotiate out of fear, yet we must never fear to negotiate with sovereign adversaries. (En tiempos de crisis geopolítica, nunca debemos negociar por miedo, pero nunca debemos tener miedo de negociar con adversarios soberanos).",
            "The Supreme Court decision protected the rights of the accused, preserved the prerogatives of the states, and reinforced the integrity of the Constitution. (La decisión de la Corte Suprema protegió los derechos de los acusados, preservó las prerrogativas de los estados y reforzó la integridad de la Constitución).",
            "We do not inherit the constitutional republic from our forebears; we hold it in sacred trust for our posterity. (No heredamos la república constitucional de nuestros antepasados; la custodiamos en fideicomiso sagrado para nuestra posteridad)."
        ],
        examples_uk=[
            "The permanent secretary was distinguished by an unyielding dedication to public duty, an instinctive mastery of parliamentary procedure, and an incorruptible standard of personal integrity. (El secretario permanente se distinguió por una inquebrantable dedicación al deber público, un dominio instintivo del procedimiento parlamentario y un estándar incorruptible de integridad personal).",
            "Let us not judge parliamentary democracy by the controversies that divide it, but let us cherish the common liberties that unite its members. (No juzguemos la democracia parlamentaria por las controversias que la dividen, sino atesoremos las libertades comunes que unen a sus miembros).",
            "The Chancellor must balance the demands of fiscal prudence with the requirements of social solidarity, curbing reckless inflation without strangling productive growth. (El Ministro de Hacienda debe equilibrar las exigencias de la prudencia fiscal con los requisitos de la solidaridad social, frenando la inflación imprudente sin estrangular el crecimiento productivo).",
            "In statecraft, to act without contemplation is recklessness; to contemplate without action is paralysis. (En el arte de gobernar, actuar sin contemplación es temeridad; contemplar sin acción es parálisis)."
        ],
        dialogue=[
            {"speaker": "Profesor de Retórica Parlamentaria (Prof. Sterling)", "text": "Observe Churchill's phrasing: 'This is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning'.", "translation": "Observe la formulación de Churchill: 'This is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning'."},
            {"speaker": "Redactora de Discursos de Estado (Dra. Vance)", "text": "A peerless chiasmus! The inversion of 'beginning of the end' into 'end of the beginning' transformed military retreat into moral fortitude.", "translation": "¡Un quiasmo sin igual! La inversión de 'beginning of the end' a 'end of the beginning' transformó la retirada militar en entereza moral."},
            {"speaker": "Profesor de Retórica Parlamentaria (Prof. Sterling)", "text": "Notice also how broken parallelism ruins lesser drafts: writing 'He loved justice, honor, and working hard' betrays an untrained ear.", "translation": "Observe también cómo el paralelismo roto arruina borradores inferiores: escribir 'He loved justice, honor, and working hard' delata un oído no entrenado."},
            {"speaker": "Redactora de Discursos de Estado (Dra. Vance)", "text": "Indeed. It must be balanced: 'He loved justice, he revered honor, and he championed labor'. True syntactic geometry elevates thought into art.", "translation": "En efecto. Debe equilibrarse: 'He loved justice, he revered honor, and he championed labor'. La verdadera geometría sintáctica eleva el pensamiento a arte."}
        ],
        mistakes=[
            "Romper el paralelismo gramatical en listas con 'and' o 'or' mezclando categorías (Error: 'She likes reading, to swim, and history').",
            "Falso paralelismo con correlativos (Error: 'He both visited Paris and Rome' en vez de 'He visited BOTH Paris AND Rome').",
            "Forzar un quiasmo sin que exista una relación antitética genuina, resultando en un juego de palabras hueco o ridículo.",
            "Omitir preposiciones idénticas requeridas por cada elemento coordinado ('concerning policy and of finance' ➔ o 'concerning policy and finance' o 'concerning policy and concerning finance')."
        ],
        tips=[
            "Aplica la regla de oro del Tricolon (regla de tres): estructura las conclusiones de tus ensayos con tres frases rítmicamente idénticas.",
            "Comprueba los correlativos: lo que sigue inmediatamente a 'either' debe ser de idéntica naturaleza morfológica a lo que sigue a 'or'.",
            "Para un clímax memorable en una presentación oral, diseña un quiasmo antimetabólico: 'We must master technology before technology masters us'.",
            "Lee tus oraciones complejas en voz alta: si tropiezas con el ritmo prosódico, la estructura ha violado el paralelismo sintáctico."
        ]
    ))

    # ==========================================
    # C2 - CLASE 08: Inversión con Adverbios de Grado: TO SUCH LENGTHS DID HE GO
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_08",
        level="C2",
        category="Inversión Avanzada de Grado",
        title="Clase 08: Inversión con Adverbios de Grado: TO SUCH LENGTHS DID HE GO",
        explanation=(
            "La Inversión con Adverbios y Sintagmas de Grado o Extensión (Degree Inversion) pertenece a las capas más encumbradas de la retórica "
            "inglesa C2. Mientras que la inversión negativa elemental se enfoca en la restricción o negación temporal ('Never did I see'), la inversión "
            "de grado se focaliza en la INTENSIDAD EXTREMA, desmesurada o sublime con la que se manifiesta una cualidad, una pasión o una conducta, "
            "conectándola comúnmente con una cláusula consecutiva introducida por 'THAT'.\n\n"
            "Patrones Morfosintácticos Canónicos de la Inversión de Grado:\n\n"
            "1. Inversión con 'SO + Adjetivo / Adverbio':\n"
            "'SO + Adjetivo / Adverbio + [Auxiliar + Sujeto + Verbo] + THAT + Cláusula Consecutiva'.\n"
            "Enfatiza la magnitud colosal de una propiedad adjetival antes de desvelar sus consecuencias arrolladoras:\n"
            "- 'So devastating was the financial contagion that several sovereign central banks suspended commercial foreign exchange' "
            "(Tan devastador fue el contagio financiero que varios bancos centrales soberanos suspendieron el comercio de divisas).\n"
            "- 'So rapidly did algorithmic contagion propagate that circuit breakers halted trading in forty seconds'.\n\n"
            "2. Inversión con 'SUCH + BE + Sujeto':\n"
            "'SUCH + [Forma de BE] + [Sujeto Sustantivo] + THAT + Cláusula Consecutiva'.\n"
            "En esta construcción, 'Such' asume la función predicativa de 'tan grande', 'de tal magnitud' o 'de tal naturaleza':\n"
            "- 'Such was the eloquence of the defense counsel that several jurors openly wept during cross-examination' "
            "(Tal fue la elocuencia del abogado defensor que varios miembros del jurado lloraron abiertamente durante el contrainterrogatorio).\n\n"
            "3. Inversión Preposicional con 'TO SUCH EXTENT / TO SUCH LENGTHS':\n"
            "- 'TO SUCH LENGTHS did the corrupt executive go that he fabricated twelve subsidiary shell corporations' "
            "(A tales extremos llegó el ejecutivo corrupto que fabricó doce corporaciones pantalla subsidiarias).\n"
            "- 'TO SUCH AN EXTENT had the regulatory authority been compromised that external auditors instituted criminal proceedings'."
        ),
        rules=[
            "Operador Auxiliar en Cláusula Invertida: Tras 'So + Adjetivo' o 'To such lengths', es mandatorio insertar el operador auxiliar adecuado ('do / does / did' o el auxiliar compuesto) antes del sujeto.",
            "Estructura Predicativa de 'Such was...': Con 'Such', el verbo BE pasa directamente al frente sin requerir 'do/did': 'Such was his fury that...', 'Such were the complexities of the treaty that...'.",
            "Concordancia con Sujeto Posterior en 'Such': El verbo BE debe concertar en número con el sujeto posterior: 'Such WAS the outcry' (singular) frente a 'Such WERE the ramifications' (plural).",
            "Nexo 'THAT' Inalterable: La cláusula consecutiva que reporta el desenlace extremo debe introducirse invariablemente con 'that'; su omisión debilita gravemente la arquitectura del periodo."
        ],
        examples_us=[
            "So egregious was the breach of federal securities law that the Department of Justice unsealed multiple criminal indictments. (Tan flagrante fue la violación de la ley federal de valores que el Departamento de Justicia reveló múltiples acusaciones penales).",
            "Such was the systemic collapse of consumer liquidity that the Federal Reserve deployed emergency municipal backstops. (Tal fue el colapso sistémico de la liquidez del consumidor que la Reserva Federal desplegó respaldos municipales de emergencia).",
            "To such lengths did the cybersecurity syndicate go to obscure digital fingerprints that forensic servers required eight months to trace the intrusion. (A tales extremos llegó el sindicato de ciberseguridad para oscurecer las huellas digitales que los servidores forenses requirieron ocho meses para rastrear la intrusión).",
            "So intimately was the intelligence agency entwined with private defense contractors that congressional oversight proved almost impossible. (Tan íntimamente estaba la agencia de inteligencia vinculada con los contratistas privados de defensa que la supervisión congresual resultó casi imposible)."
        ],
        examples_uk=[
            "So fierce was parliamentary resistance across the backbenches that the government withdrew the constitutional bill before second reading. (Tan feroz fue la resistencia parlamentaria en las bancadas de base que el gobierno retiró el proyecto de ley constitucional antes de la segunda lectura).",
            "Such was the reputational damage suffered by the venerable merchant bank that its credit rating was downgraded to junk status. (Tal fue el daño reputacional sufrido por el venerable banco mercantil que su calificación crediticia fue rebajada a la categoría de bono basura).",
            "To such an extent had raw sewage contaminated coastal estuaries that public health officials prohibited all maritime navigation. (A tal extremo habían contaminado las aguas residuales sin tratar los estuarios costeros que los funcionarios de salud pública prohibieron toda navegación marítima).",
            "Such were the territorial concessions demanded by the victorious coalition that the humiliated sovereign abdicated his throne. (Tales fueron las concesiones territoriales exigidas por la coalición victoriosa que el soberano humillado abdicó de su trono)."
        ],
        dialogue=[
            {"speaker": "Fiscal General Especial (Dr. Sterling)", "text": "To such lengths did the corporate officers go to conceal their balance sheet insolvency that they forged independent audit certifications.", "translation": "A tales extremos llegaron los directivos corporativos para ocultar su insolvencia de balance que falsificaron certificaciones de auditoría independiente."},
            {"speaker": "Jueza de Apelaciones (Dra. Vance)", "text": "Such was the audacity of their deceit that it completely paralyzed commercial lending across three continental bourses.", "translation": "Tal fue la audacia de su engaño que paralizó por completo los préstamos comerciales en tres bolsas continentales."},
            {"speaker": "Fiscal General Especial (Dr. Sterling)", "text": "So catastrophic were the ensuing losses that thousands of civil service pension entitlements were wiped out overnight.", "translation": "Tan catastróficas fueron las pérdidas resultantes que miles de derechos de pensiones de la administración pública fueron aniquilados de la noche a la mañana."},
            {"speaker": "Jueza de Apelaciones (Dra. Vance)", "text": "Under statutory sentencing guidelines, judicial remediation must be as severe as their conduct was unconscionable.", "translation": "Bajo las directrices de imposición de penas estatutarias, la remediación judicial debe ser tan severa como desmedida fue su conducta."}
        ],
        mistakes=[
            "Omitir la inversión tras 'So + Adjetivo' (Error: 'So great the storm was that...' ➔ Corrección: 'So great WAS the storm that...').",
            "Confundir la concordancia con 'Such were' cuando el sustantivo posterior es plural (Error: 'Such was the consequences' ➔ Corrección: 'Such WERE the consequences').",
            "Omitir el 'did' en 'To such lengths' (Error: 'To such lengths he went' ➔ Corrección: 'To such lengths DID HE GO').",
            "Usar 'which' en vez de 'that' para introducir la consecuencia tras 'Such was...' ('Such was his power which...' ➔ debe ser 'THAT...')."
        ],
        tips=[
            "Reserva la inversión de grado para los momentos culminantes de tu disertación o el párrafo decisivo de tus análisis criminológicos o económicos.",
            "Mnemotecnia de 'Such': 'Such was [nombre singular]' / 'Such were [nombres plurales]'. Funciona como un espejo invertido que refleja la magnitud del sustantivo.",
            "Recuerda la locución 'To such an extent had [sujeto] [participio]...' para retratar procesos acumulativos de degradación o progreso.",
            "En lecturas de nivel C2 (como textos de Gibbon, Macaulay o ensayos de The New Yorker), fíjate cómo la inversión de grado sustituye a adjetivos vulgares como 'very big' o 'extremely intense'."
        ]
    ))

    # ==========================================
    # C2 - CLASE 09: Deixis Discursiva y Posicionamiento Epistémico en Textos Especializados
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_09",
        level="C2",
        category="Pragmática & Discurso Académico",
        title="Clase 09: Deixis Discursiva y Posicionamiento Epistémico en Textos Especializados",
        explanation=(
            "La pragmática de nivel C2 exige un control absoluto del 'Posicionamiento Epistémico' (Epistemic Stance) y de la 'Deixis Discursiva' "
            "(Discourse Deixis) en textos científicos, monografías académicas y laudos arbitrales internacionales. El posicionamiento epistémico "
            "refleja el grado exacto de certeza, compromiso intelectual, distancia escéptica o cautela metodológica con que el autor respalda "
            "una proposición determinada.\n\n"
            "Un erudito consumado jamás formula afirmaciones absolutas desprotegidas ('This proves that our model is correct'); en su lugar, modula "
            "su afirmación mediante una jerarquía calibrada de 'Atenuadores Epistémicos' (Epistemic Hedging) o 'Aseveradores' (Boosters):\n\n"
            "Gradación de Certeza Epistémica en C2:\n"
            "1. Convicción Categórica Respaldada por Evidencia Irrebatible (Epistemic Boosters):\n"
            "- 'The empirical metadata IRREFUTABLY DEMONSTRATES that...'\n"
            "- 'It is MANIFESTLY SELF-EVIDENT that sovereign debt trajectories are unsustainable'.\n"
            "- 'These econometric findings DECISIVELY CORROBORATE our primary thesis'.\n\n"
            "2. Certeza Probable con Salvedad Cautelosa (Plausible Deduction):\n"
            "- 'The data TENDS TO INDICATE a statistically significant correlation'.\n"
            "- 'It IS REASONABLE TO INFER that fiscal tightening precipitated the bank failures'.\n"
            "- 'Evidence POINTS PERSUASIVELY TOWARDS an anthropogenic etiology'.\n\n"
            "3. Distanciamiento Escéptico y Protección Metodológica (Epistemic Hedging Extremo):\n"
            "- 'The preliminary indicators WOULD SEEM TO SUGGEST, albeit tentatively, that...'\n"
            "- 'It CANNOT BE RULED OUT that secondary macroeconomic anomalies intervened'.\n"
            "- 'Such claims must be approached WITH PROFOUND CIRCUMSPECTION'.\n\n"
            "Deixis Discursiva Especializada:\n"
            "Es el uso de elementos léxicos que señalan porciones del propio texto: 'The aforementioned covenants' (los compromisos antedichos), "
            "'the purview of the present treatise' (el ámbito del presente tratado), 'hereinafter designated as the Claimant' (en adelante designado "
            "como la Parte Demandante), 'heretofore unrecognized' (hasta ahora no reconocido)."
        ),
        rules=[
            "Calibración de Modalidad Epistémica: Adapta el verbo modal al nivel de verificación: 'must' para deducción lógica obligada, 'may/might/could' para hipótesis contingentes, 'would appear' para distancia prudente.",
            "Adverbios Evidenciales Especializados: Utiliza colocaciones precisas: 'purportedly', 'ostensibly', 'indisputably', 'hypothetically', 'conjecturally'.",
            "Uso Riguroso de Términos Deícticos Arcaicos en Derecho: 'Herein' (en este documento), 'thereunder' (en virtud de lo anterior), 'aforementioned' (antedicho). No los utilices en prosa informal.",
            "Prevención del Dogmatismo sin Fundamento: En revisiones de literatura de doctorado o arbitrajes, sustituye aserciones planas por construcciones que atribuyan la interpretación a los datos: 'The findings lend credence to...', no 'The findings make it certain'."
        ],
        examples_us=[
            "The biometric data irrefutably demonstrates that the cryptographic keys were accessed via an authorized internal terminal. (Los datos biométricos demuestran de manera irrefutable que las claves criptográficas fueron accedidas a través de una terminal interna autorizada).",
            "The macroeconomic metadata would seem to suggest, albeit tentatively, that core inflation has reached its cyclical zenith. (Los metadatos macroeconómicos parecerían sugerir, si bien tentativamente, que la inflación subyacente ha alcanzado su cenit cíclico).",
            "Hereinafter, the aforementioned financial entities shall be collectively designated as the Institutional Underwriters. (En lo sucesivo, las entidades financieras antedichas serán designadas colectivamente como los Suscriptores Institucionales).",
            "Such aggressive epidemiological claims must be approached with profound circumspection given the brevity of clinical observation windows. (Afirmaciones epidemiológicas tan agresivas deben ser abordadas con profunda cautela dada la brevedad de las ventanas de observación clínica)."
        ],
        examples_uk=[
            "The audited accounts tend to substantiate the select committee's hypothesis regarding systemic capital flight through offshore registries. (Las cuentas auditadas tienden a corroborar la hipótesis de la comisión selecta respecto a la fuga sistémica de capitales a través de registros en paraísos fiscales).",
            "It is manifestly evident that the municipal water authority failed to execute statutory maintenance covenants prescribed heretofore. (Es manifiestamente evidente que la autoridad municipal del agua no ejecutó los compromisos estatutarios de mantenimiento prescritos hasta la fecha).",
            "The diplomatic archives lend compelling credence to the view that the Foreign Office had anticipated continental mobilization. (Los archivos diplomáticos otorgan un convincente crédito a la opinión de que la Cancillería había anticipado la movilización continental).",
            "The permanent secretary ostensibly endorsed the decentralisation protocol, yet confidential minutes reveal resolute private dissent. (El secretario permanente ostensiblemente respaldó el protocolo de descentralización; sin embargo, actas confidenciales revelan una resuelta discrepancia privada)."
        ],
        dialogue=[
            {"speaker": "Catedrático de Filosofía de la Ciencia (Prof. Sterling)", "text": "Observe your manuscript's phrasing: 'This experiment unequivocally proves the string theory vibration hypothesis'. That is an uncalibrated epistemic overstatement.", "translation": "Observe la formulación de su manuscrito: 'This experiment unequivocally proves the string theory vibration hypothesis'. Esa es una aseveración epistémica descalibrada y excesiva."},
            {"speaker": "Candidata Doctoral (Dra. Vance)", "text": "I see. Should I formulate it as: 'The experimental outcomes provide persuasive corroboration for the string vibration model'?", "translation": "Ya comprendo. ¿Debería formularlo como: 'The experimental outcomes provide persuasive corroboration for the string vibration model'?"},
            {"speaker": "Catedrático de Filosofía de la Ciencia (Prof. Sterling)", "text": "Splendid! And note how 'would seem to suggest, within the purview of the present methodology' shields your conclusions from destructive counter-rebuttal.", "translation": "¡Espléndido! Y note cómo 'would seem to suggest, within the purview of the present methodology' blinda sus conclusiones contra refutaciones destructivas."},
            {"speaker": "Candidata Doctoral (Dra. Vance)", "text": "Indeed. Masterful discourse deixis and calibrated epistemic hedging transform brash dogmatism into invulnerable scholarly authority.", "translation": "En efecto. Una deixis discursiva magistral y un distanciamiento epistémico calibrado transforman el dogmatismo insolente en autoridad académica invulnerable."}
        ],
        mistakes=[
            "Usar 'prove' de forma descontextualizada en ciencias sociales ('This proves that humans are selfish' ➔ En C2 se exige 'This suggests / indicates / points toward...').",
            "Confundir términos deícticos formales ('herein' se refiere al documento presente, no a un lugar físico).",
            "Mezclar niveles contradictorios de certeza en la misma oración (Error: 'It is definitely possible that...' ➔ O es 'definitely true' o 'is possible').",
            "Abusar del hedging hasta neutralizar cualquier tesis propia (si todo es 'possibly hypothetically tentative', el texto pierde relevancia intelectual)."
        ],
        tips=[
            "Utiliza la paleta de verbos evidenciales: 'demonstrate' (certeza alta con datos), 'indicate' (certeza media plausible), 'suggest' (inferencia tentativa), 'postulate' (hipótesis teórica inicial).",
            "En la redacción de contratos y tratados, domina la deixis jurídica: 'the covenants herein contained', 'pursuant to the provisions aforementioned'.",
            "Aplica 'lend credence to' para apoyar teorías ajenas con elegancia consumada.",
            "Reemplaza el pedestre 'maybe' por construcciones de grado superior: 'It is not outside the realm of possibility that...'."
        ]
    ))

    # ==========================================
    # C2 - CLASE 10: Colocaciones de Máxima Complejidad y Neologismos Institucionales
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_10",
        level="C2",
        category="Léxico de Registro Especializado",
        title="Clase 10: Colocaciones de Máxima Complejidad y Neologismos Institucionales",
        explanation=(
            "En el nivel C2, el dominio del vocabulario no se limita a conocer términos infrecuentes de origen grecolatino, sino a articular "
            "'Colocaciones de Máxima Densidad Conceptual' (High-Order Conceptual Collocations) y neologismos institucionales que sintetizan "
            "debates contemporáneos en geopolítica, finanzas de alta complejidad, jurisprudencia y bioética.\n\n"
            "Un orador de nivel C2 no se expresa mediante perífrasis vagas ('the government had to borrow a lot of money very quickly'); en su lugar, "
            "despliega el léxico técnico exacto consagrado por los organismos multilaterales ('the sovereign authority engaged in emergency "
            "liquidity underwriting to forestall systemic insolvency').\n\n"
            "Constelaciones Colocacionales Cardinales de Nivel C2:\n"
            "1. Ámbito Geopolítico y Estratégico:\n"
            "- 'zero-sum game' (juego de suma cero), 'brinkmanship' (política de desafío al límite / desafío temerario), 'geopolitical realignment' "
            "(reajuste geopolítico), 'bellicose rhetoric' (retórica belicista), 'hegemonic aspirations' (aspiraciones hegemónicas), "
            "'multilateral consensus' (consenso multilateral), 'unilateral annexation' (anexión unilateral).\n\n"
            "2. Ámbito Macroeconómico y Financiero Forense:\n"
            "- 'moral hazard' (riesgo moral), 'regulatory arbitrage' (arbitraje regulatorio), 'quantitative tightening' (ajuste cuantitativo), "
            "'fiat currency debasement' (envilecimiento de moneda fiduciaria), 'contagion effect' (efecto contagio), 'fiduciary stewardship' "
            "(administración fiduciaria responsable), 'asymmetric information' (información asimétrica).\n\n"
            "3. Ámbito Jurídico y Teórico-Institucional:\n"
            "- 'ultra vires' (más allá de las facultades legales / extralimitación de poder), 'prima facie evidence' (evidencia a primera vista / indiciaria), "
            "'stare decisis' (doctrina del precedente vinculante), 'habeas corpus', 'sub judice' (bajo deliberación judicial pendiente), "
            "'statutory sunset clause' (cláusula de caducidad estatutaria), 'quid pro quo'.\n\n"
            "El dominio activo de este léxico permite al usuario C2 intervenir de igual a igual con peritos, diplomáticos y académicos en cualquier "
            "foro internacional sin incurrir en simplismos o malentendidos terminológicos."
        ),
        rules=[
            "Uso Riguroso de Locuciones Latinas Institucionales: Las expresiones latinas de la Common Law y el derecho internacional (ultra vires, prima facie, de jure, ipso facto) se escriben habitualmente en cursiva en textos académicos y no se pluralizan a la inglesa.",
            "Restricción Temática de Colocaciones Técnicas: Conceptos como 'moral hazard' no se refieren a la ética personal, sino al incentivo perverso a asumir riesgos excesivos cuando otro asume las pérdidas; deben utilizarse con estricto rigor conceptual.",
            "Colocaciones Trinarias Adverbio-Adjetivo-Sustantivo: 'diametrically opposed paradigms', 'inextricably linked phenomena', 'systemically vulnerable architectures'.",
            "Mantenimiento del Registro Unívoco: Nunca mezcles colocaciones de alta alcurnia institucional con modismos o expresiones coloquiales ('The court declared the decree *ultra vires* and kicked it out' ➔ ¡Horrible! Se dice '...and declared it void ab initio')."
        ],
        examples_us=[
            "The Federal Reserve's unprecedented emergency asset purchases inadvertently exacerbated moral hazard across shadow banking institutions. (Las compras de activos de emergencia sin precedentes de la Reserva Federal exacerbaron inadvertidamente el riesgo moral en las instituciones bancarias en la sombra).",
            "The federal appellate circuit ruled that the administrative agency had acted ultra vires by establishing emissions caps without statutory congressional authorization. (El circuito de apelaciones federal dictaminó que la agencia administrativa había actuado fuera de sus facultades legales al establecer topes de emisión sin autorización estatutaria del Congreso).",
            "Forensic accounting analysis provided prima facie evidence of extensive regulatory arbitrage between offshore subsidiaries. (El análisis de contabilidad forense aportó evidencia preliminar concluyente de un extenso arbitraje regulatorio entre subsidiarias en ultramar).",
            "The newly ratified trade protocol includes a mandatory sunset clause stipulating renegotiation every six calendar years. (El protocolo comercial recién ratificado incluye una cláusula de caducidad obligatoria que estipula la renegociación cada seis años naturales)."
        ],
        examples_uk=[
            "The Prime Minister was accused of reckless brinkmanship in threatening unilateral derogation from the Northern Ireland trade treaty. (El Primer Ministro fue acusado de una temeraria política de desafío al límite al amenazar con la derogación unilateral del tratado comercial de Irlanda del Norte).",
            "The High Court deemed the municipal council's selective commercial licensing scheme to be an unconstitutional exercise of ultra vires power. (El Tribunal Superior consideró que el esquema selectivo de licencias comerciales del concejo municipal era un ejercicio inconstitucional de poder extralimitado).",
            "Because the contested corporate insolvency matter remains strictly sub judice, ministerial officials declined to tender public commentary. (Debido a que el asunto de insolvencia corporativa en litigio permanece estrictamente bajo deliberación judicial, los funcionarios ministeriales declinaron prestar comentarios públicos).",
            "Decades of unchecked fiat monetary expansion culminated in severe currency debasement and soaring sovereign debt yields. (Décadas de expansión monetaria fiduciaria descontrolada culminaron en un severo envilecimiento de la moneda y rendimientos disparados de la deuda soberana)."
        ],
        dialogue=[
            {"speaker": "Fiscal de Delitos Económicos Internacionales (Dr. Sterling)", "text": "The offshore conglomerate engaged in systematic regulatory arbitrage, exploiting conflicting tax jurisdictions to obscure beneficial ownership.", "translation": "El conglomerado en ultramar se involucró en un sistemático arbitraje regulatorio, explotando jurisdicciones fiscales contradictorias para oscurecer la propiedad efectiva."},
            {"speaker": "Presidenta del Panel de Arbitraje (Dra. Vance)", "text": "The documentary exhibits present compelling prima facie evidence that senior directors acted ultra vires in executing those derivative swaps.", "translation": "Las pruebas documentales presentan evidencia indiciaria contundente de que los altos directores actuaron extralimitando sus poderes al ejecutar esas permutas financieras de derivados."},
            {"speaker": "Fiscal de Delitos Económicos Internacionales (Dr. Sterling)", "text": "Precisely. Furthermore, the bailout request creates severe moral hazard, rewarding speculative recklessness at public expense.", "translation": "Precisamente. Además, la solicitud de rescate crea un grave riesgo moral, recompensando la temeridad especulativa a expensas de los recursos públicos."},
            {"speaker": "Presidenta del Panel de Arbitraje (Dra. Vance)", "text": "Since this dispute remains sub judice, our interim procedural order will freeze all disputed escrow funds pending final adjudication.", "translation": "Dado que esta disputa permanece bajo deliberación judicial pendiente, nuestra orden procesal provisional congelará todos los fondos en custodia disputados a la espera de la resolución definitiva."}
        ],
        mistakes=[
            "Confundir 'ultra vires' con 'anti-virus' o utilizarlo fuera de contextos de legitimidad estatutaria institucional.",
            "Traducir literalmente del español 'riesgo moral' pensando que alude a virtudes teológicas en vez de al concepto económico consagrado de 'moral hazard'.",
            "Pluralizar expresiones latinas añadiendo '-s' (Error: 'ultra vireses', 'habeas corpuses' ➔ deben conservarse en su formulación consagrada).",
            "Usar 'sunset clause' como si fuera un horario crepuscular en lugar de su significado jurídico estricto de cláusula de vigencia temporal fija."
        ],
        tips=[
            "Crea una ficha terminológica para debatir en simulación de modelos de Naciones Unidas (Model UN) o foros económicos mundiales (World Economic Forum).",
            "Lee los fallos de la Corte Internacional de Justicia de La Haya para ver cómo interactúan 'ultra vires', 'opinio juris' y 'erga omnes'.",
            "Emplea colocaciones compuestas de alta precisión como 'systemically significant financial institutions' (SIFIs).",
            "Verifica siempre la pronunciación tradicional anglosajona de los latinismos jurídicos (por ejemplo, 'sub judice' pronunciado habitualmente /sʌb ˈdʒuːdɪsi/ en los tribunales británicos)."
        ]
    ))

    return lessons
