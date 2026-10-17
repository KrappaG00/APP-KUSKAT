# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level C1 (Classes 01 to 10)
High-density pedagogical content ensuring >= 500 words per lesson.
"""
from lesson_utils import make_lesson

def get_c1_part1():
    lessons = []

    # ==========================================
    # C1 - CLASE 01: Inversión Negativa Enfática: NEVER, RARELY, SELDOM, LITTLE
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_01",
        level="C1",
        category="Inversión Sintáctica & Retórica",
        title="Clase 01: Inversión Negativa Enfática: NEVER, RARELY, SELDOM, LITTLE",
        explanation=(
            "La inversión negativa enfática (Negative Inversion) es uno de los recursos estilísticos y retóricos más sofisticados "
            "del idioma inglés en el nivel C1. Se produce cuando un adverbio, frase adverbial o partícula con significado negativo, "
            "restrictivo o limitativo se sitúa al inicio absoluto de la cláusula matriz (fronting) para conferir un énfasis dramático, "
            "solemne o de alta persuasión discursiva. Al desplazar este elemento al primer constituyente de la oración, el orden "
            "canónico sujeto-verbo (SVO) se altera de forma obligatoria, forzando una estructura interrogativa invertida (Auxiliar + "
            "Sujeto + Verbo Principal o Inversión Sujeto-Auxiliar), aun cuando la oración sea estrictamente declarativa y culmine en punto.\n\n"
            "Los adverbios de frecuencia limitativa más canónicos para este fenómeno son 'never' (nunca), 'rarely' y 'seldom' (rara vez / "
            "pocas veces), 'scarcely' y 'hardly' (apenas / a duras penas), 'little' (poco / en ningún momento) y 'barely' (escasamente). "
            "Asimismo, frases preposicionales negativas complejas como 'under no circumstances' (bajo ninguna circunstancia), 'on no account' "
            "(por ningún motivo), 'at no time' (en ningún momento) e 'in no way' (de ningún modo) desencadenan idéntico requerimiento sintáctico.\n\n"
            "En la prosodia y fonología del inglés hablado formal (discursos parlamentarios, oratoria jurídica, conferencias magistrales), "
            "el adverbio invertido recibe un acento tónico prominente (tonic stress) seguido de un descenso tonal dramático en el auxiliar, "
            "señalando al oyente que se está enunciando una aserción categórica irrebatible. En español, este énfasis suele realizarse mediante "
            "entonación o anteposición simple sin alterar el orden verbal ('Rara vez hemos presenciado tal catástrofe'), por lo que los "
            "hispanohablantes tienden a olvidar la inserción del operador auxiliar ('Rarely we have seen' ➔ INCORRECTO; 'Rarely have we seen' ➔ CORRECTO)."
        ),
        rules=[
            "Regla del Operador Auxiliar Obligatorio: Si la oración original no tiene auxiliar ni modal, debe introducirse 'do / does / did' en consonancia con el tiempo y número del sujeto. Ejemplo: 'He suspected nothing' ➔ 'Little did he suspect'.",
            "Regla de Auxiliares Compuestos y Modales: En tiempos compuestos (Present Perfect, Past Perfect) o modales (can, should, must), únicamente el primer verbo auxiliar permuta con el sujeto. Ejemplo: 'She had never encountered' ➔ 'Never had she encountered'.",
            "Restricción con Verbo BE como Cóputa Principal: Cuando el verbo principal es una forma simple de 'to be', este actúa como su propio operador auxiliar y pasa delante del sujeto. Ejemplo: 'Seldom was the minister available for commentary'.",
            "Cláusulas Dependientes vs. Coordinadas: La inversión solo ocurre en la cláusula que el adverbio negativo modifica directamente; si el adverbio abre una oración subordinada temporal o condicional, la inversión puede aplazarse a la cláusula principal (como en 'Not until...' o 'Only after...')."
        ],
        examples_us=[
            "Never in the history of Federal Reserve monetary policy had interest rates plummeted with such abrupt volatility. (Nunca en la historia de la política monetaria de la Reserva Federal las tasas de interés se habían desplomado con semejante volatilidad abrupta).",
            "Rarely do executive board members challenge the overarching strategic doctrine endorsed by the chief executive officer. (Rara vez los miembros de la junta directiva cuestionan la doctrina estratégica general respaldada por el director ejecutivo).",
            "Little did the defense attorneys anticipate that the newly decrypted metadata would dismantle their entire timeline. (Poco anticipaban los abogados defensores que los metadatos recién descifrados desmantelarían toda su cronología).",
            "Under no circumstances should sensitive consumer credit data be transmitted across unencrypted wireless gateways. (Bajo ninguna circunstancia deben transmitirse datos confidenciales de crédito del consumidor a través de puertas de enlace inalámbricas no cifradas)."
        ],
        examples_uk=[
            "Seldom has the High Court of Justice witnessed such a contentious dispute regarding testamentary disposition. (Rara vez el Tribunal Superior de Justicia ha presenciado una disputa tan polémica en torno a una disposición testamentaria).",
            "At no time did the Chancellor of the Exchequer indicate that value added tax would be levied on basic pharmaceuticals. (En ningún momento el Ministro de Hacienda indicó que se gravaría con el impuesto sobre el valor añadido a los fármacos básicos).",
            "Hardly had the parliamentary quorum been established when the opposition benches staged a walkout. (Apenas se había establecido el quórum parlamentario cuando la bancada de la oposición abandonó el recinto).",
            "In no way can these provisional regulatory discrepancies be attributed to negligence on the part of the ombudsman. (De ningún modo pueden atribuirse estas discrepancias regulatorias provisionales a negligencia por parte del defensor del pueblo)."
        ],
        dialogue=[
            {"speaker": "Auditor Principal (Dr. Sterling)", "text": "Under no circumstances may we sign off on this fiscal balance sheet without cross-referencing the offshore transactions.", "translation": "Bajo ninguna circunstancia podemos dar el visto bueno a este balance fiscal sin cotejar las transacciones en paraísos fiscales."},
            {"speaker": "Contralora de Cumplimiento (Dra. Vance)", "text": "I concur entirely. Rarely have I witnessed financial discrepancies of this magnitude in an enterprise holding public tenders.", "translation": "Coincido plenamente. Rara vez he presenciado discrepancias financieras de esta magnitud en una empresa que ostenta licitaciones públicas."},
            {"speaker": "Auditor Principal (Dr. Sterling)", "text": "Little did the board realize that forensic algorithmic scraping would flag those retroactive journal entries within minutes.", "translation": "Poco se percataba la junta directiva de que el rastreo algorítmico forense detectaría esos asientos contables retroactivos en cuestión de minutos."},
            {"speaker": "Contralora de Cumplimiento (Dra. Vance)", "text": "Indeed. Seldom do white-collar perpetrators appreciate the indelible persistence of contemporary digital ledgers.", "translation": "En efecto. Rara vez los perpetradores de cuello blanco aprecian la persistencia indeleble de los libros contables digitales contemporáneos."}
        ],
        mistakes=[
            "Omitir el operador auxiliar tras el adverbio antepuesto (Error: 'Never I have felt such indignation'; Corrección: 'Never have I felt such indignation'). Es la falla más habitual transferida del español.",
            "Utilizar el verbo principal en pasado cuando ya se insertó 'did' (Error: 'Little did he understood the implications'; Corrección: 'Little did he understand the implications'). El auxiliar absorbe la flexión temporal.",
            "Invertir una cláusula afirmativa no precedida por limitador negativo (Error: 'Always do I wake up at dawn'; Corrección canónica: 'I always wake up at dawn', o estilístico 'Only always...'). 'Always' no es negativo ni restrictivo.",
            "Desplazar el sujeto al final de la oración en lugar de entre el auxiliar y el infinitivo (Error: 'Rarely have completed the researchers the trial'; Corrección: 'Rarely have the researchers completed the trial')."
        ],
        tips=[
            "Para comprobar la precisión sintáctica, reescribe mentalmente la oración en formato interrogativo directo ('Did he understand?'), y luego añade el adverbio negativo al frente: 'Little did he understand'.",
            "Memoriza el bloque inamovible de las 4 locuciones preposicionales clave: 'Under no circumstances', 'On no account', 'At no time' e 'In no way'. Todas exigen inversión auxiliar inmediata.",
            "En la producción escrita académica (ensayos, memorandos jurídicos, artículos científicos), emplea un máximo de 1 a 2 inversiones por cada 1,000 palabras para mantener su impacto retórico sin sonar sobrecargado.",
            "Distingue 'little' adverbial de 'a little': solo 'little' con valor privativo o negativo ('casi nada') detona inversión sintáctica."
        ]
    ))

    # ==========================================
    # C1 - CLASE 02: Inversión Temporal Compleja: NO SOONER... THAN / HARDLY... WHEN
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_02",
        level="C1",
        category="Inversión & Correlativos Temporales",
        title="Clase 02: Inversión Temporal Compleja: NO SOONER... THAN / HARDLY... WHEN",
        explanation=(
            "La correlación temporal enfática en inglés avanzado permite expresar una secuencia temporal inmediata e instantánea entre "
            "dos eventos pasados: un evento B ocurre en el microsegundo exacto en que concluye el evento A ('apenas ocurrió esto, cuando sucedió aquello'). "
            "A nivel C1, este concepto trasciende las conjunciones ordinarias como 'as soon as' o 'just after', recurriendo a estructuras "
            "correlativas simétricas emparejadas con inversión sujeto-auxiliar: 'No sooner... than' y 'Hardly / Scarcely / Barely... when'.\n\n"
            "La arquitectura de estas oraciones está rigurosamente reglamentada por la gramática prescriptiva y el uso formal de prestigio: "
            "1. La primera cláusula, que contiene la acción anterior que acaba de culminar, se formula obligatoriamente en Past Perfect (had + participio) "
            "y experimenta inversión (Had + Sujeto + Participio Pasado).\n"
            "2. El elemento de enlace correlativo es estricto e inmutable: 'No sooner' requiere de manera invariable 'THAN' (debido a la naturaleza "
            "comparativa de 'sooner'), mientras que 'Hardly', 'Scarcely' y 'Barely' exigen de modo unívoco 'WHEN' (o de forma ocasional y literaria, 'BEFORE').\n"
            "3. La segunda cláusula, que introduce la acción sobrevenida que interrumpe o sigue de inmediato, se redacta canónicamente en Past Simple "
            "y no experimenta inversión sintáctica.\n\n"
            "Tanto en inglés estadounidense como británico, el error de mezclar estas parejas correlativas ('No sooner... when' o 'Hardly... than') "
            "es penalizado con severidad en exámenes estandarizados internacionales (C1 Advanced CAE, IELTS Academic banda 8+, TOEFL iBT Writing). "
            "Comprender la raíz comparativa de 'sooner' (que exige 'than') frente a los adverbios restrictivos simples (que demandan 'when') "
            "garantiza una ejecución estilística impecable."
        ),
        rules=[
            "Pareja Correlativa Inquebrantable 1: 'NO SOONER [had + sujeto + participio] ... THAN [sujeto + past simple]'. Nunca debe utilizarse 'when' con 'no sooner'.",
            "Pareja Correlativa Inquebrantable 2: 'HARDLY / SCARCELY / BARELY [had + sujeto + participio] ... WHEN [sujeto + past simple]'. Está proscrito emplear 'than' con estos tres adverbios.",
            "Posición Inicial vs. Medial: Si la locución no se sitúa al inicio sino en posición medial de verbo compuesto, la inversión desaparece pero se conservan los nexos: 'We had no sooner stepped outside than it began to rain'.",
            "Asimetría de Tiempos: La primera acción siempre es anterior a la segunda; por ello el Past Perfect rige la cláusula invertida y el Past Simple domina la cláusula subordinada introducida por 'than' o 'when'."
        ],
        examples_us=[
            "No sooner had the Federal Reserve announced the benchmark rate cut than the stock exchanges rallied to unprecedented peaks. (Apenas la Reserva Federal hubo anunciado el recorte de la tasa de referencia, las bolsas de valores se dispararon hacia máximos históricos).",
            "Hardly had the epidemiologists isolated the novel genomic mutation when public health agencies initiated quarantine protocols. (Apenas los epidemiólogos habían aislado la nueva mutación genómica, cuando las agencias de salud pública iniciaron los protocolos de cuarentena).",
            "Scarcely had the merger agreement been executed than minority shareholders filed a comprehensive class-action lawsuit. (Apenas se había firmado el acuerdo de fusión, los accionistas minoritarios interpusieron una demanda colectiva exhaustiva).",
            "Barely had the aerospace engineers initiated the orbital calibration burn when telemetry sensors detected fuel pressure anomalies. (Apenas los ingenieros aeroespaciales habían iniciado el encendido de calibración orbital, cuando los sensores de telemetría detectaron anomalías en la presión del combustible)."
        ],
        examples_uk=[
            "No sooner had the Prime Minister stepped out of 10 Downing Street than royal correspondents pressed for clarification regarding the cabinet reshuffle. (Apenas el Primer Ministro hubo salido del número 10 de Downing Street, los corresponsales de la realeza exigieron aclaraciones sobre la reestructuración del gabinete).",
            "Hardly had the jury retired to deliberate upon the verdict when fresh forensic exhibits were tendered to the presiding judge. (Apenas el jurado se hubo retirado a deliberar sobre el veredicto, cuando se entregaron nuevas pruebas forenses al juez presidente).",
            "Scarcely had the treaty been ratified by the House of Lords when civil liberties advocates petitioned the Supreme Court. (Apenas el tratado había sido ratificado por la Cámara de los Lores, cuando los defensores de las libertades civiles recurrieron al Tribunal Supremo).",
            "No sooner had the Bank of England raised liquidity reserves than retail institutions adjusted domestic mortgage repayments. (Apenas el Banco de Inglaterra hubo elevado las reservas de liquidez, las entidades minoristas ajustaron las cuotas hipotecarias nacionales)."
        ],
        dialogue=[
            {"speaker": "Diplomática de Carrera (Dra. Aris)", "text": "No sooner had the ceasefire accord been signed in Geneva than artillery skirmishes broke out along the disputed corridor.", "translation": "Apenas el acuerdo de cese al fuego se hubo firmado en Ginebra, estallaron escaramuzas de artillería a lo largo del corredor disputado."},
            {"speaker": "Enviado Especial de la ONU (Dr. Calder)", "text": "Hardly had the monitoring mission deployed its unmanned drones when electronic warfare jamming crippled our satellite uplink.", "translation": "Apenas la misión de monitoreo había desplegado sus drones no tripulados, cuando interferencias de guerra electrónica inutilizaron nuestro enlace satelital."},
            {"speaker": "Diplomática de Carrera (Dra. Aris)", "text": "Scarcely have we encountered such blatant disregard for multilateral mediation in the post-Cold War era.", "translation": "Apenas hemos presenciado semejante desdén flagrante hacia la mediación multilateral en la era posterior a la Guerra Fría."},
            {"speaker": "Enviado Especial de la ONU (Dr. Calder)", "text": "Indeed. Barely had the communiqués reached the foreign ministries when preliminary sanctions were drafted in retaliation.", "translation": "En efecto. Apenas los comunicados habían alcanzado las cancillerías, cuando ya se redactaban sanciones preliminares en represalia."}
        ],
        mistakes=[
            "Contaminar 'no sooner' con la conjunción 'when' (Error: 'No sooner had we arrived when the lights went out'; Corrección: 'No sooner had we arrived THAN the lights went out').",
            "Contaminar 'hardly' o 'scarcely' con la conjunción 'than' (Error: 'Hardly had she spoken than he objected'; Corrección: 'Hardly had she spoken WHEN he objected').",
            "Olvidar la inversión en la primera cláusula (Error: 'No sooner she had finished the exam than she left'; Corrección: 'No sooner HAD SHE FINISHED the exam than she left').",
            "Utilizar Past Simple en ambas cláusulas al usar inversión inicial (Error: 'No sooner did he arrive than he left'; Corrección canónica formal: 'No sooner had he arrived than he left')."
        ],
        tips=[
            "Mnemotecnia del comparativo: 'SOONER' termina en '-ER' como 'BETTER' o 'FASTER'; los comparativos van con 'THAN' (No sooner... than).",
            "Mnemotecnia del tiempo: 'HARDLY' termina en 'LY' y 'WHEN' denota momento temporal puntual; por eso se emparejan siempre.",
            "Recuerda que estas estructuras otorgan máxima elegancia a la narrativa cronológica en ensayos y exámenes de suficiencia lingüística.",
            "Para un estilo aún más literario, 'scarcely... before' es una variante aceptada y sofisticada en la literatura británica decimonónica y moderna."
        ]
    ))

    # ==========================================
    # C1 - CLASE 03: Inversión con NOT ONLY... BUT ALSO y Locuciones Negativas
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_03",
        level="C1",
        category="Inversión & Conectores Correlativos",
        title="Clase 03: Inversión con NOT ONLY... BUT ALSO y Locuciones Negativas",
        explanation=(
            "La estructura coordinada aditiva correlativa 'Not only... but also' (no solo... sino también) es un instrumento fundamental "
            "para acumular argumentos de forma contundente en el discurso persuasivo y académico. Cuando esta estructura se emplea con "
            "anteposición enfática (Fronting) al inicio del enunciado, la primera cláusula adopta de forma inexorable la inversión sujeto-auxiliar, "
            "mientras que la segunda cláusula mantiene el orden canónico o introduce variantes de refuerzo sintáctico.\n\n"
            "El patrón estructural básico se desglosa así:\n"
            "'Not only + [Auxiliar + Sujeto + Verbo] ..., but [Sujeto] also + [Verbo]' o bien '..., but [Sujeto] + [Verbo] as well / too'.\n"
            "Si la cláusula coordinada carece de verbo copulativo o modal en su forma base, 'do / does / did' asume el rol de soporte operativo "
            "en la primera mitad invertida. Por ejemplo: 'She authored the book and edited the volume' ➔ 'Not only did she author the book, "
            "but she also edited the volume'.\n\n"
            "Junto a 'Not only', existen otras locuciones correlativas y preposicionales negativas complejas de alta frecuencia en C1:\n"
            "- 'Not until / Not since': Exige que la cláusula temporal inmediata no se invierta, sino que la inversión se postergue a la cláusula principal ('Not until the audit was finished did we realize the deficit').\n"
            "- 'Only when / Only after / Only by': Sigue el mismo principio de inversión diferida ('Only by collaborating can we achieve equilibrium').\n"
            "- 'In vain did they attempt...': Denota futilidad absoluta con inversión inmediata.\n\n"
            "El dominio de este abanico sintáctico permite al hablante C1 articular oraciones de largo alcance con ritmo prosódico impecable, "
            "distribuyendo la carga informativa de modo jerárquico y eliminando la monotonía de enunciados simples yuxtapuestos."
        ),
        rules=[
            "Regla de Inversión en la Primera Cláusula: 'Not only' situado al frente invierte únicamente la cláusula inmediata; la cláusula subordinada introducida por 'but (also)' conserva su orden canónico Sujeto + Verbo.",
            "Regla de Inversión Diferida (Delayed Inversion): Con 'Not until', 'Not since', 'Only when', 'Only after' y 'Only by', la inversión ocurre en la proposición principal resultante, NO en la cláusula de tiempo/medio inmediata.",
            "Flexibilidad en la Cláusula Aditiva: 'Also' puede colocarse antes del verbo principal ('but he also contributed'), al final en forma de 'as well' o 'too' ('but he contributed as well'), o incluso omitirse dejando solo 'but'.",
            "Paralelismo Categorial: Si 'not only' precede a un verbo, 'but also' debe coordinarse con un verbo; si precede a un adjetivo o sustantivo sin encabezar cláusula completa, no hay inversión ('She is not only brilliant, but also humble')."
        ],
        examples_us=[
            "Not only did the renewable energy transition lower carbon emissions across California, but it also catalyzed thousands of technological jobs. (No solo la transición a energías renovables redujo las emisiones de carbono en California, sino que también impulsó miles de empleos tecnológicos).",
            "Not until the judicial subpoena was enforced by federal marshals did the corporation disclose the internal communications. (No fue sino hasta que la citación judicial fue ejecutada por los alguaciles federales que la corporación divulgó las comunicaciones internas).",
            "Only by restructuring the sovereign debt maturities can the emerging economy avert a catastrophic balance-of-payments crisis. (Únicamente reestructurando los vencimientos de la deuda soberana puede la economía emergente evitar una catástrofe de balanza de pagos).",
            "In vain did the marketing executives attempt to suppress the consumer backlash generated by the flawed product release. (En vano intentaron los ejecutivos de marketing sofocar la reacción negativa de los consumidores causada por el lanzamiento defectuoso)."
        ],
        examples_uk=[
            "Not only has the national rail network experienced unprecedented industrial action, but it has also suffered severe infrastructure bottlenecks. (No solo la red ferroviaria nacional ha experimentado huelgas laborales sin precedentes, sino que también ha sufrido severos cuellos de botella infraestructurales).",
            "Not since the economic turbulence of the late nineteen-seventies had the United Kingdom witnessed annualized inflation exceeding ten per cent. (No desde las turbulencias económicas de finales de los años setenta había presenciado el Reino Unido una inflación anualizada superior al diez por ciento).",
            "Only after the parliamentary select committee convened did the cabinet ministers concede the existence of policy discrepancies. (Solo después de que la comisión parlamentaria se reunió, admitieron los ministros de gabinete la existencia de discrepancias políticas).",
            "Not only did the research team isolate the biochemical compound, but they established its therapeutic efficacy in clinical trials as well. (No solo el equipo de investigación aisló el compuesto bioquímico, sino que estableció su eficacia terapéutica en ensayos clínicos también)."
        ],
        dialogue=[
            {"speaker": "Catedrático de Economía (Prof. Bennett)", "text": "Not only did the central bank misunderstand the supply-side shock, but it also delayed interest rate tightening by over twelve months.", "translation": "No solo el banco central malinterpretó el shock de oferta, sino que también retrasó el ajuste de tasas de interés durante más de doce meses."},
            {"speaker": "Investigadora Financiera (Dra. Lowe)", "text": "Not until consumer price indices reached historic highs did policymakers acknowledge the persistent nature of wage-price spirals.", "translation": "No fue sino hasta que los índices de precios al consumidor alcanzaron máximos históricos que los formuladores de políticas reconocieron la naturaleza persistente de las espirales salarios-precios."},
            {"speaker": "Catedrático de Economía (Prof. Bennett)", "text": "Only by acknowledging foundational macroeconomic oversights can regulatory authorities rebuild institutional credibility.", "translation": "Solo reconociendo omisiones macroeconómicas fundamentales pueden las autoridades reguladoras reconstruir la credibilidad institucional."},
            {"speaker": "Investigadora Financiera (Dra. Lowe)", "text": "Indeed. In vain will future committees argue against greater transparency once algorithmic data sets are mandated.", "translation": "En efecto. En vano argumentarán los futuros comités contra una mayor transparencia una vez que los conjuntos de datos algorítmicos sean obligatorios."}
        ],
        mistakes=[
            "Invertir la cláusula de tiempo en lugar de la principal con 'Not until' (Error: 'Not until did the bell ring we left'; Corrección: 'Not until the bell rang DID WE LEAVE'). La subordinada temporal es intocable.",
            "Omitir el 'do/does/did' con 'Not only' cuando no hay auxiliar (Error: 'Not only he arrived late, but also...'; Corrección: 'Not only DID HE ARRIVE late, but also...').",
            "Colocar inversión en ambas mitades de 'Not only... but also' (Error: 'Not only did he call, but also did he write'; Corrección: 'Not only did he call, but he also wrote'). La segunda cláusula no se invierte.",
            "Olvidar que 'Only by' exige gerundio si va seguido de preposición (Error: 'Only by to study...'; Corrección: 'Only by STUDYING can you pass')."
        ],
        tips=[
            "Para no fallar con 'Not until' o 'Only after', divide mentalmente la frase en dos partes: [Contexto temporal subordinado en orden normal] + [Consecuencia principal con inversión obligatoria].",
            "Comprueba que el sujeto de la segunda cláusula con 'but also' coincida lógicamente o esté explícitamente reintroducido si los sujetos de ambas partes difieren.",
            "Emplea 'Not only... but also' en párrafos argumentativos para enlazar tu argumento secundario con el argumento principal culminante.",
            "Alterna 'also', 'as well' y 'in addition' para aportar riqueza léxica a tus conclusiones formales."
        ]
    ))

    # ==========================================
    # C1 - CLASE 04: Oraciones Hendidas Avanzadas (Pseudo-clefts con ALL, WHAT, REASON)
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_04",
        level="C1",
        category="Focalización Sintáctica",
        title="Clase 04: Oraciones Hendidas Avanzadas (Pseudo-clefts con ALL, WHAT, REASON)",
        explanation=(
            "La focalización sintáctica mediante oraciones hendidas o escindidas (Cleft y Pseudo-cleft Sentences) permite redirigir "
            "el foco de atención del oyente o lector hacia un constituyente específico de la oración (el agente, el objeto, el motivo, "
            "el instrumento o la acción misma). Mientras que las hendidas canónicas emplean el pronombre expletivo 'It' ('It was John who...'), "
            "las pseudo-hendidas (Wh-clefts) utilizan cláusulas relativas nominales (nominal relative clauses) encabezadas por 'What', "
            "'All' (con el significado de 'lo único que'), o sintagmas nominales de especificación como 'The reason why', 'The place where', "
            "'The person who', conectadas mediante una forma del verbo cópula 'BE' con el elemento focalizado.\n\n"
            "Estructura arquetípica de las pseudo-clefts:\n"
            "1. Clefts con 'What': 'What [Sujeto + Verbo] + IS / WAS + [Elemento focalizado]'. Permiten focalizar no solo nombres, sino acciones "
            "completas introduciendo el operador 'do': 'What the committee did was (to) dissolve the sub-directorate'.\n"
            "2. Clefts restrictivas con 'All': 'All [Sujeto + Verbo] + IS / WAS + [Infinitivo / Nombre]'. Expresa exclusividad elegante: "
            "'All we demand is transparent accountability'.\n"
            "3. Clefts de motivo y circunstancia: 'The reason (why) the deal collapsed was that the collateral was forged'.\n\n"
            "Una particularidad estilística crucial en C1 es la reversibilidad de la pseudo-hendida (Inverted Pseudo-cleft): el elemento "
            "focalizado puede anteponerse a la cláusula 'Wh-': 'Transparent accountability is all we demand' o 'Dissolving the board was "
            "what the shareholders voted for'. En la redacción analítica de nivel superior, dominar las pseudo-clefts erradica enunciados "
            "planos y confiere una voz autoritaria, incisiva y persuasiva."
        ),
        rules=[
            "Omisión del 'To' en Acciones Focalizadas: Cuando la cláusula 'What' contiene una forma del verbo 'do' ('What he did was...'), la partícula 'to' del infinitivo subsiguiente es opcional en inglés formal y usualmente se omite en inglés moderno: 'What they did was conduct an immediate inquiry' (o 'was to conduct').",
            "Concordancia de Número con BE: Si el elemento focalizado es plural, el inglés británico formal y el estándar culto prefieren 'are/were': 'What we need are reliable financial metrics'. Sin embargo, en inglés hablado y en US corriente se admite 'is/was' por atracción de la cláusula singular 'What'. En exámenes formales C1, alinea el verbo con el complemento focalizado plural.",
            "Uso de 'All' con Sentido de 'The only thing that': 'All' no lleva pronombre relativo 'that' obligatorio; se omite habitualmente: 'All you have to do is sign'. Nunca uses 'What all...' para esta función.",
            "Reversibilidad de la Pseudo-cleft: Ambas direcciones son gramaticales. 'What annoyed us was his arrogance' ➔ 'His arrogance was what annoyed us'. La segunda variante enfatiza el antecedente como sujeto temático."
        ],
        examples_us=[
            "What the antitrust investigation revealed was that algorithmic pricing software had facilitated tacit collusion among airline carriers. (Lo que la investigación antimonopolio reveló fue que el software de fijación de precios algorítmica había facilitado una colusión tácita entre aerolíneas).",
            "All the prospective startup founders required was a single round of seed funding to validate their proprietary neural network. (Todo lo que los fundadores de la incipiente empresa requerían era una sola ronda de capital semilla para validar su red neuronal patentada).",
            "The reason why the Federal Aviation Administration grounded the fleet was a microcrack anomaly detected in titanium turbine blades. (El motivo por el cual la Administración Federal de Aviación dejó en tierra la flota fue una anomalía de microfisura detectada en los álabes de turbina de titanio).",
            "A structural deficit of skilled software engineers is what plagues the domestic defense manufacturing corridor. (Un déficit estructural de ingenieros de software cualificados es lo que aqueja al corredor nacional de manufactura de defensa)."
        ],
        examples_uk=[
            "What the National Health Service urgently requires is a comprehensive overhaul of its community primary care facilities. (Lo que el Servicio Nacional de Salud requiere con urgencia es una reestructuración integral de sus instalaciones de atención primaria comunitaria).",
            "All the trade union delegation asked for was an inflation-adjusted salary review and the preservation of index-linked pensions. (Todo lo que la delegación sindical solicitaba era una revisión salarial ajustada a la inflación y la preservación de pensiones indexadas).",
            "The person whom the select committee summoned to provide oral testimony was the former permanent secretary to the Treasury. (La persona a quien la comisión selecta convocó para rendir testimonio oral fue el antiguo secretario permanente del Tesoro).",
            "A catastrophic failure of inter-agency intelligence sharing was what precipitated the parliamentary security inquiry. (Una falla catastrófica en el intercambio de inteligencia interinstitucional fue lo que precipitó la investigación parlamentaria de seguridad)."
        ],
        dialogue=[
            {"speaker": "Analista de Políticas Públicas (Dr. Mercer)", "text": "What surprised commentators most was the rapid consensus achieved among rival coalition parties regarding carbon taxation.", "translation": "Lo que más sorprendió a los analistas fue el rápido consenso alcanzado entre partidos de coalición rivales respecto a los impuestos al carbono."},
            {"speaker": "Ministra de Transición Ecológica (Dra. Thorne)", "text": "All we attempted to demonstrate was that economic de-carbonization does not necessitate fiscal austerity.", "translation": "Todo lo que intentamos demostrar fue que la descarbonización económica no requiere necesariamente austeridad fiscal."},
            {"speaker": "Analista de Políticas Públicas (Dr. Mercer)", "text": "The reason why previous green initiatives faltered was their disproportionate impact on rural working households.", "translation": "El motivo por el cual iniciativas ecológicas anteriores flaquearon fue su impacto desproporcionado en los hogares rurales de clase trabajadora."},
            {"speaker": "Ministra de Transición Ecológica (Dra. Thorne)", "text": "Targeted regional subsidization is what transformed public perception and secured municipal support across the province.", "translation": "El subsidio regional focalizado es lo que transformó la percepción pública y aseguró el apoyo municipal a lo largo de la provincia."}
        ],
        mistakes=[
            "Confundir 'What' con 'That which' en estructuras de pseudo-cleft (Error: 'That what we need is time'; Corrección: 'WHAT we need is time').",
            "Utilizar 'All what' en lugar de 'All that' o 'All' solo (Error: 'All what I want is peace'; Corrección: 'ALL I want is peace' o 'All that I want is peace').",
            "Olvidar el verbo BE como eje de la partición (Error: 'What he did he resigned from the board'; Corrección: 'What he did WAS resign from the board').",
            "Concordancia errónea en plural cuando se busca rigor prescriptivo (Error en contexto C1 exigente: 'What concerns me is the persistent budget discrepancies' ➔ Se prefiere: 'What concerns me ARE the persistent budget discrepancies')."
        ],
        tips=[
            "Utiliza pseudo-clefts con 'What' en la apertura de tus conclusiones o introducciones para capturar de inmediato el interés del lector.",
            "Si deseas minimizar una acción o demanda en una negociación formal, encuadra tu propuesta con 'All... is': 'All we seek is mutual compliance'.",
            "Practica la inversión de las pseudo-clefts para alternar el ritmo de tus oraciones complejas y evitar la monotonía estilística.",
            "Recuerda que con 'What [sujeto] did was...', el verbo que le sigue puede ir en infinitivo simple sin 'to' ('was call an emergency session')."
        ]
    ))

    # ==========================================
    # C1 - CLASE 05: El Subjuntivo Mandativo en Inglés Formal (Mandative Subjunctive)
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_05",
        level="C1",
        category="Modo Subjuntivo Formal",
        title="Clase 05: El Subjuntivo Mandativo en Inglés Formal (Mandative Subjunctive)",
        explanation=(
            "El modo subjuntivo en inglés contemporáneo dista mucho de haber desaparecido; de hecho, en registros formales, jurídicos, "
            "diplomáticos y académicos constituye un sello inconfundible de competencia C1 y C2. El Subjuntivo Mandativo (Mandative Subjunctive) "
            "se activa en oraciones subordinadas introducidas por 'that' dependientes de verbos, adjetivos o sustantivos que expresan mandato, "
            "sugerencia, demanda, insistencia, prohibición, necesidad o conveniencia imperativa.\n\n"
            "Su rasgo morfosintáctico más distintivo radica en que el verbo de la cláusula subordinada permanece en la FORMA BASE O BARE INFINITIVE "
            "(infinitivo sin 'to') para TODAS las personas gramaticales, prescindiendo por completo de la desinencia '-s' en la tercera persona singular "
            "del presente y de cualquier forma conjugada del pasado:\n"
            "- Verbos rectores comunes: demand, insist, require, recommend, suggest, propose, urge, mandate, stipulate, request, decree.\n"
            "- Adjetivos con 'It is... that': essential, crucial, imperative, vital, mandatory, advisable, desirable, urgent, necessary.\n"
            "- Sustantivos derivados: recommendation, requirement, proposal, demand, insistence.\n\n"
            "Asimismo, la forma pasiva en subjuntivo adopta la estructura 'BE + Participio Pasado' (nunca 'is/are/was'), y la forma negativa "
            "se construye anteponiendo simplemente 'NOT' al verbo base, SIN el operador auxiliar 'do / does / did' ('I insist that he NOT speak', "
            "NO 'that he does not speak').\n\n"
            "Variación Dialectal Clave (US vs. UK):\n"
            "En el inglés estadounidense (US), el subjuntivo mandativo es la norma absoluta y obligatoria tanto en prosa formal como en el habla culta. "
            "En el inglés británico (UK), históricamente ha coexistido con el uso de 'should + infinitivo' (conocido como 'Putative Should' o "
            "subjuntivo perifrástico: 'I demand that he should go'), o incluso con el modo indicativo ordinario en el registro informal. "
            "No obstante, la influencia global de la redacción jurídica estadounidense ha revitalizado el subjuntivo sintético en el Reino Unido."
        ),
        rules=[
            "Forma Base Universal: El verbo subordinado va siempre en infinitivo sin 'to', sin importar que el sujeto sea 'he', 'she', 'it' o que el verbo principal esté en pasado. 'The judge ordered that the prisoner BE released' (no 'was released').",
            "Negación Directa sin Auxiliar: La negación del subjuntivo mandativo no tolera 'do not' ni 'does not'; se forma con 'NOT + forma base'. Ejemplo: 'The directive requires that contractors NOT disclose operational blueprints'.",
            "Pasiva con 'BE': En oraciones pasivas subordinadas, la forma 'be' permanece invariable. Ejemplo: 'It is imperative that an independent committee BE established'.",
            "Elisión del Nexo 'That': En el registro formal C1, la conjunción 'that' casi nunca se elide; su presencia confiere cohesión y solemnidad al enunciado mandativo."
        ],
        examples_us=[
            "The Federal Trade Commission mandated that the pharmaceutical conglomerate divest its oncology patents prior to final approval. (La Comisión Federal de Comercio ordenó que el conglomerado farmacéutico desinvierta sus patentes de oncología antes de la aprobación final).",
            "It is critically imperative that each senior executive comply fully with statutory foreign anti-corruption regulations. (Es críticamente imperativo que cada alto ejecutivo cumpla plenamente con las regulaciones estatutarias contra la corrupción extranjera).",
            "The presiding magistrate insisted that the defense witness not leave the municipal jurisdiction until cross-examination concluded. (El magistrado presidente insistió en que el testigo de la defensa no abandone la jurisdicción municipal hasta que concluya el contrainterrogatorio).",
            "Academic integrity policies require that any researcher suspecting data falsification report the incident immediately to the provost. (Las políticas de integridad académica exigen que cualquier investigador que sospeche falsificación de datos reporte el incidente de inmediato al rector)."
        ],
        examples_uk=[
            "The parliamentary ombudsman recommended that the Ministry of Defence publish the unredacted procurement expenditure records. (El defensor del pueblo parlamentario recomendó que el Ministerio de Defensa publique los registros de gastos de adquisiciones sin censura).",
            "It is vital that the National Health Service trust be held accountable for clinical governance failures identified in the audit. (Es vital que el fideicomiso del Servicio Nacional de Salud rinda cuentas por las fallas de gobernanza clínica identificadas en la auditoría).",
            "The Board of Trade suggested that the shipping consortium should consider alternative deep-water berths along the Humber estuary. (La Junta de Comercio sugirió que el consorcio naviero considerase puestos de atraque alternativos de aguas profundas a lo largo del estuario del Humber).",
            "We propose that the constitutional convention convene biennially to review devolved legislative competence. (Proponemos que la convención constitucional se reúna bienalmente para revisar la competencia legislativa descentralizada)."
        ],
        dialogue=[
            {"speaker": "Consejero Jurídico (Dr. Sterling)", "text": "The international tribunal has ruled that the maritime treaty be amended to reflect contested continental shelf boundaries.", "translation": "El tribunal internacional ha dictaminado que el tratado marítimo sea enmendado para reflejar los límites disputados de la plataforma continental."},
            {"speaker": "Ministra Plenipotenciaria (Dra. Vance)", "text": "Our diplomatic delegation requested that the drafting committee not adopt ambiguous verbiage concerning territorial waters.", "translation": "Nuestra delegación diplomática solicitó que el comité de redacción no adopte terminología ambigua concerniente a aguas territoriales."},
            {"speaker": "Consejero Jurídico (Dr. Sterling)", "text": "It is essential that every signatory state ratify the protocol without entering unilateral reservations.", "translation": "Es esencial que cada estado signatario ratifique el protocolo sin introducir reservas unilaterales."},
            {"speaker": "Ministra Plenipotenciaria (Dra. Vance)", "text": "We shall also insist that an independent arbitration panel be constituted to resolve future demarcational disputes.", "translation": "Insistiremos también en que se constituya un panel de arbitraje independiente para resolver futuras disputas de demarcación."}
        ],
        mistakes=[
            "Añadir '-s' en la tercera persona singular del subjuntivo (Error: 'She recommended that he attends the meeting'; Corrección formal: 'She recommended that he ATTEND the meeting').",
            "Usar 'does not' o 'did not' para negar el subjuntivo (Error: 'It is vital that he does not reveal the secret'; Corrección formal: 'It is vital that he NOT REVEAL the secret').",
            "Conjugar el verbo 'be' como 'is/are/was' en una pasiva mandativa (Error: 'The directive requires that the report is submitted'; Corrección formal: 'The directive requires that the report BE SUBMITTED').",
            "Confundir verbos indicativos de aserción ('say', 'inform', 'state') con verbos mandativos: 'He stated that he was innocent' (indicativo regular, no subjuntivo)."
        ],
        tips=[
            "Para no dudar, prueba sustituir el verbo subordinado por 'be': si 'be' suena natural y solemne ('I insist that he BE present'), la oración requiere subjuntivo mandativo.",
            "En redacción académica estadounidense, utiliza siempre la forma base pura; en contextos británicos, ten presente que 'should + infinitivo' es igualmente aceptado y elegante.",
            "Recuerda que en la negación, la palabra 'not' se coloca justo delante del verbo base: 'that they NOT proceed'.",
            "El subjuntivo mandativo es la herramienta predilecta en mociones parlamentarias, contratos legales, resoluciones de asamblea y minutas corporativas."
        ]
    ))

    # ==========================================
    # C1 - CLASE 06: Pasado Irreal (Unreal Past): IT'S HIGH TIME / IT'S ABOUT TIME
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_06",
        level="C1",
        category="Modo Subjuntivo & Tiempos Irreales",
        title="Clase 06: Pasado Irreal (Unreal Past): IT'S HIGH TIME / IT'S ABOUT TIME",
        explanation=(
            "El 'Pasado Irreal' (Unreal Past o Subjunctive Past) es un artificio morfosintáctico en el cual se emplean formas gramaticales "
            "del Past Simple o Past Continuous para denotar situaciones hipotéticas, contrafácticas, anheladas o críticas referidas al "
            "momento PRESENTE o FUTURO, desvinculadas por completo del tiempo cronológico pretérito.\n\n"
            "Una de sus manifestaciones más frecuentes y estilísticamente ricas en el nivel C1 son las estructuras idiomáticas temporales "
            "'It is time', 'It is high time' e 'It is about time'. Estas expresiones se emplean para comunicar que una acción ya debió haberse "
            "llevado a cabo hace tiempo, transmitiendo un matiz evidente de urgencia, impaciencia, crítica velada o reproche ético.\n\n"
            "Reglas de complementación estructural:\n"
            "1. Cuando la estructura lleva un sujeto explícito tras la conjunción subordinante (implícita o explícita 'that'), el verbo que "
            "le sigue DEBE conjugarse obligatoriamente en Past Simple: 'It is high time the governing board REVISED the executive severance package' "
            "(Ya es más que hora de que la junta de gobierno revise el paquete de indemnización ejecutiva). Aunque la necesidad es urgente en "
            "el presente, el uso de 'revise' en presente o con 'should' se considera un solecismo o interferencia gramatical.\n"
            "2. Cuando no hay sujeto subordinado individualizado, la estructura se simplifica mediante un infinitivo con 'to': 'It is time to leave' "
            "o mediante la estructura oblicua 'for + objeto + to-infinitivo': 'It is time for the ministry to act'. En este caso, no hay matiz "
            "de reproche tardío, sino de conveniencia puntual.\n\n"
            "Otras estructuras de Pasado Irreal concurrentes en C1 incluyen 'I'd rather you did not...' (Preferiría que no hicieras...), "
            "'Suppose / What if we invested elsewhere?' (¿Y si invertimos en otra parte?) y 'as if / as though he knew the answer'."
        ),
        rules=[
            "Past Simple Obligatorio con Sujeto Expreso: Tras 'It is (high / about) time + Sujeto', el verbo subordinado debe estar formalmente en Past Simple, pero su referencia temporal es imperativa para el momento actual.",
            "Prohibición de Modales y Presente: Nunca debe emplearse 'should', 'would' o el presente de indicativo tras estas construcciones con sujeto personal. Incorrecto: 'It is high time we should go'.",
            "Diferencia de Matiz entre 'High' y 'About': 'It is time' señala el momento propicio; 'It is about time' añade informalmente frustración o retraso; 'It is high time' eleva el registro a una crítica solemne y categórica.",
            "Construcción con 'For + Objeto + Infinitivo': Cuando se formula impersonalmente sin verbo conjugado subordinado, se utiliza 'It is time for [alguien] to [hacer algo]': 'It is high time for regulatory bodies to step in'."
        ],
        examples_us=[
            "It is high time the Federal Reserve recognized that shelter inflation calculations suffer from significant survey lag. (Ya es más que hora de que la Reserva Federal reconozca que los cálculos de inflación de vivienda sufren un retraso significativo en las encuestas).",
            "It is about time pharmaceutical developers disclosed negative trial results with identical transparency as successful outcomes. (Ya es hora de que los desarrolladores farmacéuticos divulguen los resultados negativos de ensayos con idéntica transparencia que los desenlaces exitosos).",
            "Suppose the appellate court overturned the precedent; what contingency measures would corporate counsel implement? (Supongamos que el tribunal de apelaciones revocara el precedente; ¿qué medidas de contingencia implementaría la asesoría jurídica corporativa?).",
            "I would rather the federal regulatory commission established binding cybersecurity benchmarks before another infrastructural breach occurs. (Preferiría que la comisión reguladora federal estableciera parámetros vinculantes de ciberseguridad antes de que ocurra otra brecha infraestructural)."
        ],
        examples_uk=[
            "It is high time the government addressed the chronic underfunding plaguing municipal adult social care trusts. (Ya es momento supremo de que el gobierno atienda la desfinanciación crónica que aqueja a los consorcios municipales de asistencia social para adultos).",
            "It is about time water authorities were subjected to statutory penalties for discharging untreated sewage into coastal ecosystems. (Ya va siendo hora de que las autoridades del agua sean sometidas a sanciones estatutarias por verter aguas residuales sin tratar en ecosistemas costeros).",
            "I would rather the Chancellor did not increase corporation tax whilst domestic manufacturing output remains stagnant. (Preferiría que el Ministro de Hacienda no aumentase el impuesto de sociedades mientras la producción manufacturera nacional siga estancada).",
            "What if the Bank of England held benchmark interest rates unchanged at the upcoming Monetary Policy Committee convening? (¿Qué sucedería si el Banco de Inglaterra mantuviese las tasas de interés de referencia sin cambios en la próxima reunión del Comité de Política Monetaria?)."
        ],
        dialogue=[
            {"speaker": "Rectora Universitaria (Dra. Vance)", "text": "It is high time the academic senate reformed our tenure assessment framework to reward interdisciplinary research.", "translation": "Ya es más que hora de que el senado académico reforme nuestro marco de evaluación de titularidad para recompensar la investigación interdisciplinaria."},
            {"speaker": "Decano de Posgrado (Dr. Thorne)", "text": "I entirely agree. It is about time junior faculty members were evaluated on pedagogical innovation rather than mere publication volume.", "translation": "Concuerdo enteramente. Ya es hora de que los docentes jóvenes sean evaluados por su innovación pedagógica en lugar de por el mero volumen de publicaciones."},
            {"speaker": "Rectora Universitaria (Dra. Vance)", "text": "I would rather we adopted an open-access repository mandate before the beginning of the next fiscal term.", "translation": "Preferiría que adoptáramos un mandato de repositorio de acceso abierto antes del inicio del próximo período fiscal."},
            {"speaker": "Decano de Posgrado (Dr. Thorne)", "text": "Indeed. Suppose our external endowment fell short; we would still require verifiable institutional compliance benchmarks.", "translation": "En efecto. Supongamos que nuestro fondo de donaciones externo disminuyera; aun así requeriríamos parámetros de cumplimiento institucional verificables."}
        ],
        mistakes=[
            "Usar el presente en lugar del pasado tras 'It is high time' (Error: 'It is high time we start the meeting'; Corrección: 'It is high time we STARTED the meeting').",
            "Insertar 'should' tras 'It is time' (Error: 'It is about time the government should intervene'; Corrección: 'It is about time the government INTERVENED').",
            "Confundir la estructura con 'for': 'It is time we to go' (INCORRECTO); o bien 'It is time for us to go' o 'It is time we went'.",
            "Utilizar pasado perfecto en lugar de pasado simple cuando la queja se refiere al presente (Error: 'It is high time he had apologized'; Corrección: 'It is high time he APOLOGIZED')."
        ],
        tips=[
            "Mnemotecnia del reproche: Si hay un sujeto en 'It's high time [SUJETO]', el verbo SIEMPRE debe retroceder un paso morfológico al pasado simple ('went', 'reformed', 'spoke').",
            "Si no deseas sonar crítico ni recriminar una tardanza, evita 'high time' y utiliza una formulación neutra: 'The scheduled time has arrived to commence'.",
            "En debates y discursos formales, 'It is high time that...' genera un impacto emocional sumamente persuasivo para exhortar a la acción inmediata.",
            "Recuerda que con 'I would rather [sujeto]...', la regla es idéntica: pasado simple para un deseo en el presente ('I'd rather you did not smoke here')."
        ]
    ))

    # ==========================================
    # C1 - CLASE 07: Pasiva Impersonal Avanzada y Estructuras de Distanciamiento
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_07",
        level="C1",
        category="Voz Pasiva Periodística & Retórica",
        title="Clase 07: Pasiva Impersonal Avanzada y Estructuras de Distanciamiento",
        explanation=(
            "En el discurso académico, periodístico de investigación, jurídico y diplomático de nivel C1, el distanciamiento epistémico "
            "(hedging o evidentiality) es un requisito sine qua non. Un redactor experto rara vez afirma hechos no comprobados de forma categórica; "
            "en su lugar, recurre a estructuras pasivas de reporte impersonal para atribuir afirmaciones a fuentes generales, rumores "
            "especializados o deducciones científicas, protegiéndose de aseveraciones calumniosas o inexactitudes metodológicas.\n\n"
            "Existen dos arquitecturas sintácticas maestras para construir la pasiva de reporte impersonal:\n"
            "1. Patrón Expletivo con 'It':\n"
            "'It + BE [en cualquier tiempo] + Verbo de Notificación en Participio + THAT + Cláusula Completa'.\n"
            "Ejemplo: 'It is widely believed that quantum computing will decrypt conventional cryptographic algorithms' (Se cree ampliamente "
            "que la computación cuántica descifrará los algoritmos criptográficos convencionales).\n\n"
            "2. Patrón Personal con Sujeto Elevado (Subject-to-Subject Raising):\n"
            "'Sujeto de la subordinada + BE + Participio de Notificación + TO-INFINITIVO'.\n"
            "Este patrón es mucho más condensado, prestigioso y dinámico. La naturaleza del infinitivo depende de la relación temporal con el verbo de notificación:\n"
            "- Infinitivo Simple (to do / to be): Simultaneidad con el presente ('He is thought to reside in Zurich').\n"
            "- Infinitivo Continuo (to be doing): Acción en desarrollo ('The suspect is believed to be laundering capital').\n"
            "- Infinitivo Perfecto (to have done): Acción anterior en el tiempo ('The malware is estimated to have infiltrated three thousand servers').\n"
            "- Infinitivo Perfecto Pasivo (to have been done): Acción anterior recibida ('The ancient manuscript is acknowledged to have been authored by monks').\n\n"
            "Verbos rectores de alta frecuencia para este distanciamiento epistémico: acknowledge, allege, assume, claim, consider, estimate, "
            "presume, report, rumor, say, understand."
        ),
        rules=[
            "Infinitivo Perfecto para Anterioridad: Si el hecho reportado ocurrió antes que el reporte en sí, es forzoso emplear el Perfect Infinitive 'to have + participio'. Ejemplo: 'The CEO is reported to have resigned yesterday'.",
            "Mantenimiento de Concordancia en Elevación de Sujeto: El verbo BE de la cláusula principal concuerda en número y tiempo con el sujeto elevado, no con el expletivo. 'The artifacts ARE considered to be authentic'.",
            "Variante de Verbos como 'Seem' y 'Appear': 'It seems that...' o 'They appear to have overlooked the data'. Comparten la misma estructura de elevación pero en voz activa intrínseca.",
            "Uso de Adverbios de Matiz (Hedging Adverbs): Es común matizar la pasiva impersonal con adverbios de grado académico: 'widely reported', 'tentatively assumed', 'erroneously believed', 'purportedly claimed'."
        ],
        examples_us=[
            "The hedge fund is alleged to have executed algorithmic front-running milliseconds ahead of institutional client transactions. (Se acusa al fondo de cobertura de haber ejecutado transacciones algorítmicas ventajosas milisegundos antes que las órdenes de clientes institucionales).",
            "It has been tentatively estimated by the Congressional Budget Office that healthcare expenditures will surge exponentially over the coming decade. (Ha sido estimado tentativamente por la Oficina de Presupuesto del Congreso que el gasto sanitario aumentará exponencialmente en la próxima década).",
            "The newly developed neural architecture is claimed to possess superior generalizability across disparate perceptual modalities. (Se sostiene que la arquitectura neuronal recién desarrollada posee una capacidad de generalización superior a través de modalidades perceptivas dispares).",
            "Several high-ranking intelligence operatives were understood to have negotiated backchannel de-escalation protocols in neutral airspace. (Se entendía que varios agentes de inteligencia de alto rango habían negociado protocolos de distensión por vías extraoficiales en espacio aéreo neutral)."
        ],
        examples_uk=[
            "The pharmaceutical developer is understood to have withheld adverse clinical trial documentation from regulatory inspectors. (Se da a entender que el laboratorio farmacéutico ocultó documentación sobre ensayos clínicos adversos a los inspectores regulatorios).",
            "It was originally presumed that the archaeological burial site had belonged to an undocumented Iron Age chieftaincy. (Originalmente se presumía que el yacimiento funerario arqueológico había pertenecido a un señorío indocumentado de la Edad del Hierro).",
            "The historic estate is acknowledged to have been designed by Sir Christopher Wren during the architectural reconstruction of London. (Se reconoce que la finca histórica fue diseñada por Sir Christopher Wren durante la reconstrucción arquitectónica de Londres).",
            "Water utility executives are rumored to be considering emergency rights issues to avert statutory insolvency administration. (Se rumorea que los directores de servicios de agua están considerando emisiones de derechos de emergencia para evitar la administración judicial por insolvencia)."
        ],
        dialogue=[
            {"speaker": "Periodista de Investigación (Dra. Lowe)", "text": "The multinational technology consortium is reported to have harvested biometric facial signatures without explicit statutory consent.", "translation": "Se reporta que el consorcio tecnológico multinacional recopiló firmas faciales biométricas sin consentimiento estatutario explícito."},
            {"speaker": "Fiscal de Delitos Informáticos (Dr. Sterling)", "text": "Indeed. It is estimated that upwards of forty million citizens have had their encryption keys compromised by these data aggregators.", "translation": "En efecto. Se estima que más de cuarenta millones de ciudadanos han tenido sus claves de cifrado comprometidas por estos recopiladores de datos."},
            {"speaker": "Periodista de Investigación (Dra. Lowe)", "text": "The former cybersecurity director is understood to be cooperating with parliamentary investigators under witness protection provisions.", "translation": "Se comprende que el antiguo director de ciberseguridad está cooperando con los investigadores parlamentarios bajo disposiciones de protección de testigos."},
            {"speaker": "Fiscal de Delitos Informáticos (Dr. Sterling)", "text": "Two subsidiary shell corporations are believed to have been dissolved overnight to obscure international paper trails.", "translation": "Se cree que dos corporaciones pantalla subsidiarias fueron disueltas durante la noche para oscurecer las pistas documentales internacionales."}
        ],
        mistakes=[
            "Omitir el 'to have' en el infinitivo cuando se refiere a un hecho consumado pasado (Error: 'He is believed to escape to Switzerland yesterday'; Corrección: 'He is believed TO HAVE ESCAPED to Switzerland yesterday').",
            "Confundir las dos estructuras mezclando 'that' con sujeto elevado (Error: 'He is reported that he left'; Corrección: 'He is reported TO HAVE LEFT' o 'It is reported that he left').",
            "Emplear 'It is said' para atribuciones científicas de alta especialización donde se requiere léxico más preciso como 'It is hypothesized' o 'It is contended'.",
            "No concertar el verbo principal con sujetos múltiples elevados (Error: 'Both defendants is understood to have fled'; Corrección: 'Both defendants ARE understood to have fled')."
        ],
        tips=[
            "Recuerda la fórmula de transformación: 'People believe that X did Y' ➔ 'It is believed that X did Y' ➔ 'X is believed to have done Y'. La última versión es la más valorada en redacción C1.",
            "Para indicar que algo se está desarrollando en este instante preciso, recurre al Continuous Infinitive: 'The minister is thought to be drafting her formal resignation letter'.",
            "En ensayos argumentativos, el uso de 'It can be argued that...' o 'The evidence is interpreted to demonstrate...' eleva exponencialmente la madurez académica del texto.",
            "Familiarízate con colocaciones adverbiales como 'widely acknowledged', 'falsely presumed' y 'statutorily mandated'."
        ]
    ))

    # ==========================================
    # C1 - CLASE 08: Cláusulas Concesivas Complejas: AS THOUGH, AS IF, MUCH AS
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_08",
        level="C1",
        category="Concesión de Alto Registro",
        title="Clase 08: Cláusulas Concesivas Complejas: AS THOUGH, AS IF, MUCH AS",
        explanation=(
            "La concesión en el nivel C1 abandona los nexos cotidianos como 'although' o 'even though' para articular relaciones "
            "de oposición dialéctica, contrafactualidad y contraste refinado mediante estructuras complejas. Entre las más representativas "
            "se encuentran 'Much as...', 'Adjective / Adverb + as / though...', y las cláusulas de comparación hipotética 'As if' y 'As though'.\n\n"
            "1. 'Much as' (Por mucho que / A pesar de cuánto):\n"
            "Esta locución abre oraciones concesivas enfatizando la magnitud o intensidad de un sentimiento, deseo o intento, antes de "
            "introducir una limitación insoslayable. Va seguida invariablemente de Sujeto + Verbo: 'Much as I admire his philosophical rigor, "
            "I cannot endorse his geopolitical conclusions' (Por mucho que admire su rigor filosófico, no puedo respaldar sus conclusiones geopolíticas).\n\n"
            "2. Inversión Concesiva con 'As / Though':\n"
            "'Adjetivo / Adverbio + AS / THOUGH + Sujeto + Verbo'. Esta construcción traslada el adjetivo o adverbio a la posición inicial "
            "para enfatizar la cualidad concedida antes de refutarla o matizarla en la cláusula principal:\n"
            "'Difficult though the negotiation was, an accord was finalized' (Por difícil que fuera la negociación, se concretó un acuerdo).\n"
            "Nota: En este patrón particular, 'as' o 'though' funcionan indistintamente, pero 'although' NUNCA puede emplearse en esta inversión.\n\n"
            "3. 'As if' y 'As though' con Matices Epistémicos (Indicativo vs. Subjuntivo):\n"
            "Si la situación descrita es improbable, ficticia o abiertamente falsa, el verbo adopta tiempos del Pasado Irreal (Unreal Past / Subjunctive 'were'):\n"
            "'He acted as though he were the sovereign ruler of the territory' (Actuó como si fuera el gobernante soberano del territorio - pero no lo es).\n"
            "Por el contrario, si la situación es verosímil o plausible en el presente, se utiliza el indicativo: 'It smells as if something is burning'."
        ),
        rules=[
            "Prohibición de 'Although' en Inversión Adjetival: Solo se permite 'as' o 'though' tras el adjetivo antepuesto. 'Rich though he is' o 'Rich as he is' (CORRECTO). 'Rich although he is' es un solecismo grave.",
            "Subjuntivo 'Were' con Sujeto Singular en 'As if / As though': En inglés formal culto de nivel C1, se prefiere rigurosamente 'were' en lugar de 'was' para todas las personas: 'She spoke as if she were in charge'.",
            "'Much as' Rige Cláusula Completa: 'Much as' debe ir acompañado de sujeto y verbo; no puede combinarse con sintagmas nominales aislados sin verbo ('Much as his intelligence' ➔ INCORRECTO; 'Much as I respect his intelligence' ➔ CORRECTO).",
            "Uso con Verbo 'Try': 'Try as he might / Try as he did...' es una locución fosilizada que expresa esfuerzo infructuoso ('Por más que intentara...')."
        ],
        examples_us=[
            "Much as the administration wishes to curb inflationary expectations, regulatory tools remain constrained by supply disruptions. (Por mucho que la administración desee frenar las expectativas inflacionarias, las herramientas regulatorias continúan limitadas por perturbaciones de oferta).",
            "Ingenious though the algorithmic architecture was, it failed to adapt to sudden geopolitical liquidity contractions. (Por ingeniosa que fuera la arquitectura algorítmica, no logró adaptarse a contracciones repentinas de liquidez geopolítica).",
            "The defense witness testified as though he were completely oblivious to the paper shredding documented by federal investigators. (El testigo de la defensa testificó como si ignorara por completo la destrucción de documentos registrada por los investigadores federales).",
            "Try as they might, senior executives could not conceal the substantial divergence between projected revenues and balance sheet realities. (Por más que intentaron, los altos ejecutivos no pudieron ocultar la divergencia sustancial entre los ingresos proyectados y las realidades del balance)."
        ],
        examples_uk=[
            "Much as I appreciate the Foreign Secretary's diplomatic efforts, bilateral relations have reached an unprecedented impasse. (Por mucho que aprecie los esfuerzos diplomáticos del Ministro de Asuntos Exteriores, las relaciones bilaterales han alcanzado un callejón sin salida sin precedentes).",
            "Disheartening though the provisional economic forecast appeared, manufacturing guilds retained long-term capital investments. (Por desalentador que pareciera el pronóstico económico provisional, los gremios de manufactura mantuvieron sus inversiones de capital a largo plazo).",
            "The permanent secretary spoke as if the Treasury were immune to international bond market fluctuations. (El secretario permanente habló como si el Tesoro fuera inmune a las fluctuaciones del mercado internacional de bonos).",
            "Try as the coalition partners might to present a united front, persistent policy disagreements fractured parliamentary voting discipline. (Por más que los socios de coalición intentaran presentar un frente unido, persistentes desacuerdos políticos fracturaron la disciplina de voto parlamentario)."
        ],
        dialogue=[
            {"speaker": "Diplomático de Carrera (Dr. Aris)", "text": "Much as we yearn for an immediate diplomatic breakthrough, conflicting sovereign claims preclude rapid territorial concessions.", "translation": "Por mucho que anhelemos un avance diplomático inmediato, los reclamos soberanos contradictorios impiden concesiones territoriales rápidas."},
            {"speaker": "Embajadora Plenipotenciaria (Dra. Thorne)", "text": "Formidable though the diplomatic hurdles may seem, the mediator conducts plenary negotiations as though a peaceful consensus were imminent.", "translation": "Por formidables que parezcan los obstáculos diplomáticos, el mediador conduce las negociaciones plenarias como si un consenso pacífico fuera inminente."},
            {"speaker": "Diplomático de Carrera (Dr. Aris)", "text": "Try as the belligerents might to escalate border skirmishes, neither possesses the economic reserves for protracted warfare.", "translation": "Por más que los beligerantes intenten intensificar las escaramuzas fronterizas, ninguno posee las reservas económicas para una guerra prolongada."},
            {"speaker": "Embajadora Plenipotenciaria (Dra. Thorne)", "text": "Compromise, unpalatable though it may be to domestic factions, remains the sole pragmatic path forward.", "translation": "El compromiso, por desagradable que resulte para las facciones internas, sigue siendo el único camino pragmático a seguir."}
        ],
        mistakes=[
            "Emplear 'although' después del adjetivo en inversiones concesivas (Error: 'Difficult although it was'; Corrección: 'Difficult THOUGH it was' o 'Difficult AS it was').",
            "Usar 'was' en lugar de 'were' en 'as if / as though' en registros académicos formales de nivel C1 (Error: 'He acts as though he was a king'; Corrección: 'He acts as though he WERE a king').",
            "Omitir el sujeto y verbo tras 'Much as' tratando de usarlo como preposición (Error: 'Much as the cost, we bought it'; Corrección: 'Much as WE LAMENTED the cost, we bought it').",
            "Confundir 'as if' con 'like' en prosa formal escrita ('He looks like he had seen a ghost' es coloquial; se exige 'He looks as though he had seen a ghost')."
        ],
        tips=[
            "Para destacar en la sección de redacción (Writing C1), introduce un párrafo de contraargumentación con: 'Compelling though this thesis may sound, empirical data suggests otherwise'.",
            "Recuerda la locución 'Try as one might' para describir empeños humanos nobles que chocan contra realidades insuperables.",
            "Si la conjetura tras 'as if' es factible y actual, no fuerces el pasado: 'Look at the sky; it looks as if it is going to rain'.",
            "Practica transformar oraciones con 'Although': 'Although the theory is complex...' ➔ 'Complex as the theory is...'."
        ]
    ))

    # ==========================================
    # C1 - CLASE 09: Uso Enfático de DO, DOES y DID en Oraciones Afirmativas
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_09",
        level="C1",
        category="Énfasis Verbal & Retórica",
        title="Clase 09: Uso Enfático de DO, DOES y DID en Oraciones Afirmativas",
        explanation=(
            "En el nivel C1, el operador auxiliar 'DO' (en sus formas do, does y did) no solo cumple una función gramatical de soporte "
            "en oraciones interrogativas y negativas (Do-support), sino que constituye un mecanismo retórico primordial para añadir "
            "énfasis contrastivo, aserción rotunda o refutación dialéctica en enunciados AFIRMATIVOS declarativos e imperativos.\n\n"
            "El 'Emphatic DO' se emplea en los siguientes contextos de alta precisión comunicativa:\n"
            "1. Refutación y Contraste Explícito:\n"
            "Cuando se contradice una presuposición errónea del interlocutor o se reafirma una verdad cuestionada previamente: "
            "'Contrary to the plaintiff's allegations, our proprietary laboratory DID conduct rigorous safety audits' (Contrariamente a "
            "las alegaciones del demandante, nuestro laboratorio patentado SÍ llevó a cabo rigurosas auditorías de seguridad).\n\n"
            "2. Concesión y Reafirmación Dialéctica:\n"
            "En construcciones con conectores de contraste como 'although', 'while' o 'nevertheless', donde se concede un punto débil pero se "
            "subraya una fortaleza irrefutable: 'Although we did not achieve unanimous consensus, we DID secure the required supermajority'.\n\n"
            "3. Cortesía Solemne e Imperativos Persuasivos:\n"
            "En el modo imperativo formal o en la etiqueta diplomática británica, anteponer 'Do' a un infinitivo transforma una orden o "
            "invitación en un ruego vehemente, afectuoso o institucionalmente respetuoso: 'Do take a seat, Ambassador' (Tome asiento, le ruego, Embajador).\n\n"
            "Prosodia y Fonología:\n"
            "En la producción oral, el operador 'DO' enfático recibe el acento tónico principal de la cláusula (Nuclear Pitch Accent), "
            "destacando con una elevación del tono de voz y una prolongación de la vocal. El verbo principal que le sigue debe permanecer "
            "estrictamente en su forma base desprovisto de cualquier terminación de tercera persona (-s) o de pasado (-ed)."
        ),
        rules=[
            "Forma Base Universal del Verbo Principal: El verbo que acompaña al 'do' enfático siempre va en infinitivo sin 'to'. Ejemplo: 'She DOES know the truth' (nunca 'She does knows'). 'He DID attend the hearing' (nunca 'He did attended').",
            "Contraste Temporal con Auxiliar 'Did': 'Did' absorbe la totalidad de la marca de tiempo pretérito, permitiendo contrastar el pasado con el estado presente del asunto.",
            "Imperativos de Cortesía Formal: 'Do' antepuesto a verbos en imperativo afirmativo elimina la brusquedad de la orden directa: 'Do let us know if additional documentation is required'.",
            "Incompatibilidad con Otros Auxiliares y Modales: El 'emphatic do' no puede combinarse con verbos modales (will, can, must) ni con los tiempos compuestos que ya poseen un auxiliar (have, be). En tales casos, el énfasis tonal recae sobre el auxiliar preexistente ('I HAVE submitted the report')."
        ],
        examples_us=[
            "Although the defense counsel disputes the digital timestamps, the telecom service provider DID verify server connectivity logs. (Aunque el abogado defensor cuestiona las marcas de tiempo digitales, el proveedor de telecomunicaciones SÍ verificó los registros de conectividad del servidor).",
            "The administration DOES acknowledge that federal student loan subsidization inadvertently contributed to tuition inflation. (La administración SÍ reconoce que el subsidio federal a los préstamos estudiantiles contribuyó inadvertidamente a la inflación de las matrículas).",
            "I DID warn the risk management committee that collateralized commercial property portfolios were overextended. (Yo SÍ advertí al comité de gestión de riesgos que las carteras inmobiliarias comerciales titulizadas estaban sobreextendidas).",
            "Do ensure that all foreign asset declarations are submitted to the Internal Revenue Service prior to the statutory deadline. (Asegúrese rigurosamente de que todas las declaraciones de activos extranjeros sean remitidas al Servicio de Impuestos Internos antes de la fecha límite estatutaria)."
        ],
        examples_uk=[
            "Whilst the Chancellor contested our economic modelling, official Office for Budget Responsibility figures DID substantiate our deficit projections. (Si bien el Ministro de Hacienda refutó nuestra modelización económica, las cifras oficiales de la Oficina de Responsabilidad Presupuestaria SÍ corroboraron nuestras proyecciones de déficit).",
            "The board DOES appreciate the grave ramifications of transferring manufacturing operations outside the United Kingdom. (La junta directiva SÍ aprecia las graves ramificaciones de trasladar las operaciones de manufactura fuera del Reino Unido).",
            "We DID advise the parliamentary inquiry that the procurement tender suffered from structural transparency flaws. (Nosotros SÍ aconsejamos a la comisión parlamentaria que la licitación de adquisición adolecía de fallas estructurales de transparencia).",
            "Do accept our profound apologies for the administrative delay encountered during the diplomatic visa vetting procedure. (Le rogamos acepte nuestras más sinceras disculpas por la demora administrativa sufrida durante el procedimiento de revisión de visados diplomáticos)."
        ],
        dialogue=[
            {"speaker": "Fiscal Especial (Dr. Sterling)", "text": "The defense claims the accounting discrepancies were clerical oversights. However, subpoenaed emails indicate you DID authorize the transactions.", "translation": "La defensa afirma que las discrepancias contables fueron descuidos administrativos. No obstante, correos electrónicos citados judicialmente indican que usted SÍ autorizó las transacciones."},
            {"speaker": "Ex-Director Financiero (Dr. Vance)", "text": "I DID sign those ledger adjustments, but I did so under the explicit instruction of the external advisory auditors.", "translation": "Yo SÍ firmé esos ajustes contables, pero lo hice bajo la instrucción explícita de los auditores consultores externos."},
            {"speaker": "Fiscal Especial (Dr. Sterling)", "text": "Nevertheless, the supervisory guidelines DO state that final fiduciary liability rests irrevocably with the chief financial officer.", "translation": "No obstante, las directrices de supervisión SÍ establecen que la responsabilidad fiduciaria final recae irrevocablemente sobre el director financiero."},
            {"speaker": "Ex-Director Financiero (Dr. Vance)", "text": "Do review the appendix to my deposition, which corroborates the systemic pressure exerted upon my department.", "translation": "Le ruego revise el apéndice de mi declaración testimonial, el cual corrobora la presión sistémica ejercida sobre mi departamento."}
        ],
        mistakes=[
            "Conjugar el verbo principal después de 'did' enfático (Error: 'We did investigated the claim'; Corrección: 'We did INVESTIGATE the claim').",
            "Conjugar en tercera persona el verbo tras 'does' enfático (Error: 'She does understands the problem'; Corrección: 'She does UNDERSTAND the problem').",
            "Tratar de usar 'do' enfático con el verbo 'to be' en presente declarativo afirmativo (Error: 'He does be right'; Corrección: 'He IS right' con énfasis tónico en 'is').",
            "Abusar del 'do' enfático en prosa escrita sin que exista un contexto de oposición, contraste o cortesía formal."
        ],
        tips=[
            "Usa el 'emphatic do' en ensayos para rescatar un argumento tras haber admitido una objeción: 'While critics question the cost, the initiative DOES yield measurable social dividends'.",
            "En correspondencia diplomática y profesional formal, utiliza 'Do let me know' o 'Do contact our office' para proyectar calidez sin perder jerarquía institucional.",
            "Para enfatizar tiempos compuestos o modales donde 'do' no está permitido, aplica el estrés vocal o cursiva tipográfica sobre el auxiliar existente: 'We *have* reached a verdict'.",
            "Ten en cuenta que en español el 'do' enfático equivale habitualmente a los adverbios 'realmente', 'efectivamente', 'sí' o a la perífrasis 'lo cierto es que'."
        ]
    ))

    # ==========================================
    # C1 - CLASE 10: Colocaciones Avanzadas e Idiomáticas Formales
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_10",
        level="C1",
        category="Léxico Académico & Colocaciones",
        title="Clase 10: Colocaciones Avanzadas e Idiomáticas Formales",
        explanation=(
            "La distinción entre un usuario intermedio alto (B2) y un usuario competente avanzado (C1) radica primordialmente en la naturalidad "
            "léxica y el dominio intuitivo de las 'colocaciones' (Collocations): combinaciones privilegiadas de palabras que coaparecen con "
            "frecuencia estadística abrumadora en el corpus lingüístico culto. Un hablante que combina palabras mediante traducción literal "
            "puede producir frases gramaticalmente comprensibles pero estilísticamente torpes ('make an investigation' en lugar de 'conduct / "
            "carry out an investigation', o 'strong rain' en vez de 'torrential / heavy rain').\n\n"
            "En el nivel C1, se dominan cuatro tipos cardinales de colocaciones avanzadas:\n"
            "1. Adverbio + Adjetivo:\n"
            "- 'deeply entrenched' (profundamente arraigado), 'patently obvious' (evidentemente obvio / patente), 'blatantly false' (descaradamente falso), "
            "'acutely aware' (agudamente consciente), 'categorically denied' (rotundamente desmentido), 'scrupulously honest' (escrupulosamente honesto).\n"
            "2. Verbo + Sustantivo de Alto Registro:\n"
            "- 'exercise caution' (extremar precauciones), 'harbor doubts' (albergar dudas), 'wreak havoc' (causar estragos), "
            "'cast aspersions' (difamar / verter calumnias), 'gauge public sentiment' (medir el sentir público), 'breach protocol' (quebrantar el protocolo).\n"
            "3. Adjetivo + Sustantivo Institucional:\n"
            "- 'mitigating circumstances' (circunstancias atenuantes), 'compelling evidence' (evidencia contundente), 'ulterior motives' (motivos ocultos), "
            "'irrevocable trust' (fideicomiso irrevocable), 'stringent criteria' (criterios rigurosos), 'foregone conclusion' (conclusión cantada / desenlace previsible).\n"
            "4. Sustantivo + Preposición + Sustantivo:\n"
            "- 'a bone of contention' (una manzana de la discordia), 'a stroke of genius' (un golpe de genialidad), 'a breach of contract' (un incumplimiento de contrato).\n\n"
            "El dominio de este entramado léxico permite expresar matices semánticos hiperprecisos, proyectar autoridad intelectual y desarticular "
            "la ambigüedad interpretativa en entornos corporativos, jurídicos y académicos internacionales."
        ),
        rules=[
            "Fijación Colocacional Invariable: Las colocaciones no admiten sustitución sinónima arbitraria. Se dice 'cast aspersions', no 'throw aspersions'; se dice 'harbor suspicions', no 'keep suspicions'.",
            "Preposiciones Colocacionales Rigurosas: Ciertos verbos y adjetivos exigen regímenes preposicionales irremplazables: 'immune TO prosecution', 'culpable OF negligence', 'contingent ON / UPON market performance'.",
            "Polaridad y Prosodia Semántica: Ciertas colocaciones poseen prosodia negativa intrínseca: 'wreak' se combina casi exclusivamente con calamidades ('wreak havoc', 'wreak destruction'), nunca con eventos ventajosos.",
            "Restricción de Registro: Colocaciones de alta formalidad como 'render assistance' o 'tender one's resignation' desentonan en conversaciones informales pero son obligatorias en minutas institucionales."
        ],
        examples_us=[
            "The defense attorney established that mitigating circumstances warranted a non-custodial probationary sentence. (El abogado defensor demostró que las circunstancias atenuantes justificaban una sentencia de libertad condicional sin privación de libertad).",
            "The Federal Reserve chairman is acutely aware of the systemic risks associated with escalating sovereign debt burdens. (El presidente de la Reserva Federal es agudamente consciente de los riesgos sistémicos asociados a la escalada de las cargas de deuda soberana).",
            "Regulatory agencies categorically rejected allegations that algorithmic trading oversight had been systematically compromised. (Las agencias reguladoras rechazaron categóricamente las alegaciones de que la supervisión de las operaciones bursátiles algorítmicas se hubiera visto comprometida sistemáticamente).",
            "The tech monopoly was found to have breached antitrust statutes by engaging in anti-competitive acquisitions. (Se determinó que el monopolio tecnológico había infringido los estatutos antimonopolio al involucrarse en adquisiciones anticompetitivas)."
        ],
        examples_uk=[
            "The permanent secretary scrupulously avoided casting aspersions upon the professional integrity of his predecessor. (El secretario permanente evitó escrupulosamente verter calumnias sobre la integridad profesional de su predecesor).",
            "The ongoing dispute regarding fishing quotas in the English Channel remains a severe bone of contention between both governments. (La continua disputa concerniente a las cuotas de pesca en el Canal de la Mancha sigue siendo una severa manzana de la discordia entre ambos gobiernos).",
            "The High Court ruled that failure to deliver statutory maintenance constituted an actionable breach of contract. (El Tribunal Superior dictaminó que no prestar el mantenimiento estipulado por ley constituía un incumplimiento contractual demandable).",
            "Unprecedented torrential rain wrought havoc upon municipal flood defense infrastructures across the Midlands. (Lluvias torrenciales sin precedentes causaron estragos en las infraestructuras municipales de defensa contra inundaciones a lo largo de las Tierras Medias)."
        ],
        dialogue=[
            {"speaker": "Fiscal de Delitos Complejos (Dra. Lowe)", "text": "The defendant was acutely aware that falsifying offshore shipping manifests constituted a blatant breach of statutory embargoes.", "translation": "El imputado era plenamente consciente de que falsificar manifiestos de transporte marítimo en ultramar constituía una flagrante infracción de los embargos legales."},
            {"speaker": "Abogada Defensora (Dra. Vance)", "text": "My client categorically denies harboring any criminal intent; the discrepancies arose from ambiguous cross-border tariffs.", "translation": "Mi cliente niega categóricamente albergar intención criminal alguna; las discrepancias surgieron a causa de aranceles transfronterizos ambiguos."},
            {"speaker": "Fiscal de Delitos Complejos (Dra. Lowe)", "text": "Nevertheless, the forensic ledger presents compelling evidence that senior executives acted with ulterior commercial motives.", "translation": "No obstante, el libro contable forense presenta evidencia contundente de que los altos ejecutivos actuaron con motivos comerciales ocultos."},
            {"speaker": "Abogada Defensora (Dra. Vance)", "text": "We shall present mitigating circumstances demonstrating that our client cooperated proactively with forensic accountants.", "translation": "Presentaremos circunstancias atenuantes que demuestran que nuestro cliente cooperó proactivamente con los contables forenses."}
        ],
        mistakes=[
            "Usar 'make' en lugar de colocaciones de alto registro (Error: 'They made a breach of contract'; Corrección: 'They COMMITTED / WERE IN breach of contract').",
            "Sustituir partes fijas de binomios o colocaciones idiomáticas (Error: 'a rock of contention'; Corrección: 'a BONE of contention').",
            "Combinar adjetivos de grado extremo con adverbios inapropiados (Error: 'very obvious'; Se prefiere en C1: 'PATENTLY obvious' o 'self-evident').",
            "Traducir literalmente del español 'prestar atención' como 'borrow attention' en vez del prestigioso 'pay heed to' o 'pay attention'."
        ],
        tips=[
            "Crea un cuaderno de colocaciones organizado por sustantivos clave (e.g. 'Evidence': compelling, conclusive, circumstantial, anecdotal, corroborated).",
            "Cuando aprendas un adjetivo formal (e.g. 'stringent'), memoriza inmediatamente sus socios colocacionales habituales: 'stringent measures / regulations / criteria / controls'.",
            "Lee periódicos de análisis profundo (The Economist, Financial Times, The Atlantic) y resalta únicamente colocaciones binarias (Adverb + Adjective o Verb + Noun).",
            "Sustituye en tus escritos adverbios genéricos como 'very' o 'really' por adverbios colocacionales precisos: 'scrupulously', 'categorically', 'acutely', 'vehemently'."
        ]
    ))

    return lessons
