# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level C2 (Classes 11 to 20)
High-density pedagogical content ensuring >= 500 words per lesson.
"""
from lesson_utils import make_lesson

def get_c2_part2():
    lessons = []

    # ==========================================
    # C2 - CLASE 11: Ambigüedad Sintáctica y Técnicas de Desambiguación Estructural
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_11",
        level="C2",
        category="Sintaxis Teórica & Desambiguación",
        title="Clase 11: Ambigüedad Sintáctica y Técnicas de Desambiguación Estructural",
        explanation=(
            "La cúspide del dominio sintáctico en el nivel C2 radica en la capacidad de detectar, diagnosticar y desarticular la "
            "'Ambigüedad Estructural' (Structural or Syntactic Ambiguity), un fenómeno donde una secuencia de palabras admite dos o más "
            "árboles sintácticos radicalmente distintos con interpretaciones semánticas contradictorias. En la redacción de contratos internacionales, "
            "leyes orgánicas, patentes farmacéuticas y tratados de desarme, una coma mal situada o un modificador flotante puede costar miles "
            "de millones de dólares o desencadenar una crisis de soberanía.\n\n"
            "Tipologías Clásicas de Ambigüedad y sus Soluciones Estructurales en C2:\n\n"
            "1. Ambigüedad de Adjuntos Preposicionales (Prepositional Attachment Ambiguity):\n"
            "Ocurre cuando una frase preposicional puede modificar al verbo matriz o al sintagma nominal inmediato:\n"
            "- Ambiguo: 'The inspector observed the suspect with the surveillance drone' (¿Quién tenía el dron: el inspector o el sospechoso?).\n"
            "- Desambiguación: 'Using the surveillance drone, the inspector observed the suspect' o 'The inspector observed the suspect who was "
            "operating the surveillance drone'.\n\n"
            "2. Modificadores Extraviados o Colgantes (Misplaced and Squinting Modifiers):\n"
            "Un 'squinting modifier' es un adverbio que se sitúa entre dos constituyentes oracionales de modo que el lector no puede discernir "
            "si modifica a la cláusula precedente o a la subsiguiente:\n"
            "- Ambiguo: 'Ministers who negotiate treaties FREQUENTLY report diplomatic breakthroughs'. (¿Negocian con frecuencia o informan con frecuencia?).\n"
            "- Desambiguación: 'Ministers who frequently negotiate treaties report breakthroughs' o 'Ministers who negotiate treaties report breakthroughs frequently'.\n\n"
            "3. La Coma de Oxford y el Alcance de la Coordinación (The Oxford Comma / Serial Comma):\n"
            "En jurisprudencia anglosajona (notorio caso judicial Oakhurst Dairy), la omisión de la coma serial antes de la conjunción en una lista "
            "genera ambigüedades interpretativas sobre si el último elemento forma una entidad compuesta o un término autónomo:\n"
            "- Ambiguo: 'The distribution of butter, milk and flour' vs. 'The distribution of butter, milk, and flour'.\n\n"
            "El dominio de las técnicas de reestructuración, tematización, nominalización precisa y puntuación delimitativa garantiza una "
            "prosa cristalina de invulnerable solidez jurídica."
        ),
        rules=[
            "Regla de la Proximidad del Modificador: Los adverbios y frases preposicionales deben situarse inmediatamente contiguos al elemento exacto que tienen por objeto modificar, previniendo lecturas parasitarias.",
            "Eliminación de 'Squinting Modifiers': Nunca sitúes un adverbio flotante entre dos verbos potenciales si puede relacionarse plausiblemente con ambos; desplázalo a la izquierda o al final absoluto de la cláusula correspondiente.",
            "Uso Mandatorio de la Coma Serial en Redacción Jurídica y Técnica: Emplea rigurosamente la coma de Oxford antes de 'and' u 'or' en enumeraciones de tres o más elementos para evitar aglutinaciones interpretativas no deseadas.",
            "Desambiguación Mediante Cláusulas Relativas Plenas: Cuando una cláusula reducida de participio engendre ambigüedad de agente, expándela a una cláusula relativa finita completa con 'which', 'who' o 'whom'."
        ],
        examples_us=[
            "Ambiguous: The defense contractor agreed to supply naval destroyers and radar systems designed for Arctic operations immediately. (Ambiguo: ¿el acuerdo es inmediato o el suministro es inmediato?).",
            "Disambiguated: The defense contractor immediately agreed to supply naval destroyers and radar systems designed for Arctic operations. (Desambiguado: El contratista de defensa acordó de inmediato suministrar destructores navales y sistemas de radar diseñados para operaciones en el Ártico).",
            "Ambiguous: Advising corporate clients diligently improves regulatory compliance outcomes. (Squinting: ¿asesorar diligentemente, o diligentemente mejora?).",
            "Disambiguated: Diligently advising corporate clients improves regulatory compliance outcomes. (Desambiguado: Asesorar diligentemente a los clientes corporativos mejora los resultados de cumplimiento regulatorio)."
        ],
        examples_uk=[
            "Ambiguous: The permanent secretary discussed the implementation of civil service reforms with parliamentary select committee members that generated public controversy. (¿Qué generó controversia: las reformas, la discusión o los miembros?).",
            "Disambiguated: The permanent secretary discussed with parliamentary select committee members the implementation of civil service reforms, which had generated intense public controversy. (Desambiguado: El secretario permanente discutió con miembros de la comisión selecta la implementación de las reformas, las cuales habían generado intensa controversia pública).",
            "Ambiguous: The statutory provisions exempt packing, canning and distributing agricultural produce. (Disputa salarial de horas extras por omisión de coma serial).",
            "Disambiguated: The statutory provisions exempt packing, canning, and distributing agricultural produce. (Desambiguado con coma serial: Las disposiciones estatutarias eximen el envasado, el enlatado y la distribución de productos agrícolas como tres actividades autónomas)."
        ],
        dialogue=[
            {"speaker": "Redactor Legislativo del Senado (Dr. Sterling)", "text": "Counsel, examine subsection 4: 'The commissioner shall inspect facilities licensed for biohazardous research annually'. Is the licensing annual, or the inspection?", "translation": "Consejero, examine el subinciso 4: 'The commissioner shall inspect facilities licensed for biohazardous research annually'. ¿La concesión de licencias es anual, o la inspección?"},
            {"speaker": "Abogada Constitucionalista (Dra. Vance)", "text": "A classic squinting modifier! Opposing litigants will argue the commissioner failed to conduct inspections because facilities were only licensed once.", "translation": "¡Un clásico modificador bizco! Los litigantes opuestos argumentarán que el comisionado no realizó las inspecciones porque las instalaciones solo obtuvieron licencia una vez."},
            {"speaker": "Redactor Legislativo del Senado (Dr. Sterling)", "text": "Precisely. We must reposition the temporal adverb: 'The commissioner shall conduct an annual inspection of facilities licensed for biohazardous research'.", "translation": "Precisamente. Debemos reposicionar el adverbio temporal: 'The commissioner shall conduct an annual inspection of facilities licensed for biohazardous research'."},
            {"speaker": "Abogada Constitucionalista (Dra. Vance)", "text": "Flawless restructuring. Syntactic ambiguity is the breeding ground for protracted litigation; precision in draftsmanship is our greatest shield.", "translation": "Reestructuración impecable. La ambigüedad sintáctica es el caldo de cultivo de litigios prolongados; la precisión en la redacción es nuestro mayor escudo."}
        ],
        mistakes=[
            "Dejar modificadores flotantes en medio de dos verbos ('Exercising regularly improves health' vs. 'Regular exercise improves health').",
            "Omitir la coma serial en enumeraciones contractuales complejas dando pie a demandas millonarias por interpretación errónea.",
            "Generar frases preposicionales encadenadas donde no se sabe cuál es el sustantivo núcleo gobernante.",
            "Usar 'this' o 'which' sin antecedente nominal explícito (vague pronoun reference), forzando al lector a adivinar qué idea se está recuperando."
        ],
        tips=[
            "Prueba de fuego de lectura inversa: Lee tus oraciones complejas con mente maliciosa, buscando cualquier interpretación absurda que un abogado litigante rival pudiera explotar.",
            "Usa nominalizaciones directas ('annual inspection') en vez de adverbios flotantes al final de la cláusula ('inspect... annually').",
            "Cuando coordines términos largos, repite la preposición o el artículo para clarificar que son entidades independientes: 'the regulation of banking, and the oversight of credit'.",
            "En el nivel C2, la elegancia nunca se compra al precio de la ambigüedad; la claridad diáfana es la suprema cortesía del escritor."
        ]
    ))

    # ==========================================
    # C2 - CLASE 12: Verbos con Regímenes Preposicionales Arcaicos o Especializados
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_12",
        level="C2",
        category="Régimen Preposicional Avanzado",
        title="Clase 12: Verbos con Regímenes Preposicionales Arcaicos o Especializados",
        explanation=(
            "En el inglés clásico, jurídico y de alta cancillería de nivel C2, el régimen preposicional (Prepositional Government) de ciertos "
            "verbos latinizados o arcaizantes se rige por normas etimológicas e históricas que no admiten la analogía cotidiana ni la traducción "
            "literal del español. Un error en la preposición asociada destruye la credibilidad del redactor en foros judiciales o académicos internacionales.\n\n"
            "Análisis de Verbos con Regímenes Preposicionales de Máxima Exigencia:\n\n"
            "1. 'DIVEST OF' (Despojar / Desprenderse de activos o derechos):\n"
            "Rige forzosamente 'OF': 'The antitrust decree compelled the telecommunications monopoly to DIVEST itself OF all regional undersea fiber networks' "
            "(El decreto antimonopolio obligó al monopolio de telecomunicaciones a desprenderse de todas las redes regionales de fibra submarina).\n\n"
            "2. 'EXONERATE FROM' / 'ACQUIT OF':\n"
            "- 'Exonerate FROM criminal culpability' (exonerar de culpabilidad penal).\n"
            "- 'Acquit OF all charges' (absolver de todos los cargos; rige invariablemente 'OF').\n\n"
            "3. 'CONNIVE AT' / 'WINK AT' (Tolerar tácitamente / Ser cómplice por omisión):\n"
            "Rige 'AT' cuando se tolera una ilegalidad o inmoralidad: 'The regional governor was found to have CONNIVED AT systemic public procurement bribery' "
            "(Se determinó que el gobernador regional había tolerado tácitamente los sobornos sistémicos en contrataciones públicas).\n\n"
            "4. 'DEVOLVE TO / UPON' (Traspasar facultades o poderes a una entidad subordinada):\n"
            "'Legislative powers were DEVOLVED UPON the Scottish Parliament pursuant to the Scotland Act'.\n\n"
            "5. 'INCUMBENT UPON / ON' (Incumbir de forma obligatoria y moral):\n"
            "'It is INCUMBENT UPON executive directors to disclose all potential conflicts of fiduciary interest'.\n\n"
            "6. 'ACCEDE TO' (Acceder a una petición o adherirse a un tratado) frente a 'DEFER TO' (Someterse respetuosamente al criterio de otro):\n"
            "- 'The sovereign ACCEDED TO the maritime convention'.\n"
            "- 'The appellate magistrate DEFERRED TO the technical expertise of the environmental agency'."
        ),
        rules=[
            "Inmutabilidad del Régimen Etimológico: Cada verbo culto exige su preposición histórica. Se dice 'acquit of' (nunca 'acquit from'); 'divest of' (nunca 'divest from'); 'connive at' (nunca 'connive with' salvo cuando se refiere a un cómplice humano directo).",
            "Régimen de 'Incumbent upon': Se emplea en fórmulas de deber moral o constitucional con infinitivo: 'It is incumbent upon [autoridad] to [verbo base]'.",
            "Preposiciones de Deferencia ('Defer to' / 'Yield to'): Se combinan con 'TO' para indicar sumisión voluntaria al juicio o autoridad superior: 'I defer to the court's wisdom'.",
            "Distinción entre 'Confer on/upon' y 'Confer with': 'Confer ON/UPON' significa otorgar un honor o poder ('An honorary doctorate was conferred upon the scholar'); 'Confer WITH' significa reunirse a deliberar ('The judges conferred with counsel')."
        ],
        examples_us=[
            "The Federal Trade Commission ordered the aerospace conglomerate to divest itself of its precision jet engine manufacturing facilities. (La Comisión Federal de Comercio ordenó al conglomerado aeroespacial desprenderse de sus instalaciones de fabricación de motores de precisión para reactores).",
            "The federal jury acquitted the hedge fund manager of all fourteen counts of securities fraud and wire racketeering. (El jurado federal absolvió al gestor de fondos de cobertura de los catorce cargos de fraude de valores y asociación ilícita telemática).",
            "It is incumbent upon the presiding administrative judge to ascertain whether exculpatory evidence was unlawfully suppressed. (Incumbe al juez administrativo presidente determinar si la prueba exculpatoria fue suprimida ilícitamente).",
            "The sovereign state acceded to the bilateral extradition protocol following extensive congressional negotiations. (El estado soberano accedió al protocolo de extradición bilateral tras extensas negociaciones en el Congreso)."
        ],
        examples_uk=[
            "Regulatory inspectors suspected that senior port authorities had connived at the illicit exportation of dual-use military technologies. (Los inspectores regulatorios sospecharon que los altos funcionarios portuarios habían tolerado tácitamente la exportación ilícita de tecnologías militares de doble uso).",
            "Substantial statutory powers regarding environmental conservation were devolved upon the Welsh Senedd under constitutional statutes. (Sustanciales competencias estatutarias concernientes a la conservación ambiental fueron transferidas al Parlamento galés bajo estatutos constitucionales).",
            "The High Court deferred to the established commercial practice recognized by the London Stock Exchange. (El Tribunal Superior se sometió a la práctica comercial establecida y reconocida por la Bolsa de Valores de Londres).",
            "An honorary fellowship was conferred upon the retired Supreme Court justice during the Michaelmas academic term. (Una distinción académica honorífica fue conferida al juez retirado del Tribunal Supremo durante el período académico de San Miguel)."
        ],
        dialogue=[
            {"speaker": "Procurador de la Corona (Dr. Sterling)", "text": "The indictment asserts that municipal directors connived at the fraudulent misallocation of urban regeneration subsidies.", "translation": "El acta de acusación sostiene que los directores municipales toleraron tácitamente la asignación fraudulenta de subsidios de regeneración urbana."},
            {"speaker": "Abogado Litigante (Dra. Vance)", "text": "My client was acquitted of all fiduciary misconduct in the preliminary hearing, and we defer to that prior judicial finding.", "translation": "Mi representado fue absuelto de toda mala conducta fiduciaria en la vista preliminar, y nos sometemos a esa resolución judicial previa."},
            {"speaker": "Procurador de la Corona (Dr. Sterling)", "text": "Nevertheless, it remains incumbent upon your client to divest himself of those disputed offshore dividend debentures.", "translation": "No obstante, continúa incumbiendo a su cliente desprenderse de esas obligaciones de dividendos en ultramar que se encuentran bajo litigio."},
            {"speaker": "Abogado Litigante (Dra. Vance)", "text": "He has already acceded to that statutory requirement; all assets were liquidated and placed in judicial escrow yesterday.", "translation": "Él ya ha accedido a ese requerimiento estatutario; todos los activos fueron liquidados y colocados en custodia judicial ayer."}
        ],
        mistakes=[
            "Usar 'divest from' en lugar del consagrado 'divest OF' (Error frecuente por calco del español 'desinvertir de').",
            "Decir 'acquit from' en lugar de 'acquit OF' ('He was acquitted of murder', no 'from murder').",
            "Confundir 'connive at' (tolerar una falta) con 'conspire with' (conspirar activamente con alguien).",
            "Emplear 'devolve to' en contextos donde se exige la preposición solemne 'devolve UPON' en documentos de Estado británicos."
        ],
        tips=[
            "Memoriza las tripletas de oro jurídico: 'Divest OF', 'Acquit OF', 'Exonerate FROM'.",
            "Para exhortar al cumplimiento ético en disertaciones formales, recurre a 'It is incumbent upon us to...'.",
            "Distingue 'confer on' (otorgar un título) de 'confer with' (deliberar en privado).",
            "Usa 'defer to' para demostrar elegancia intelectual al ceder ante la opinión fundada de un especialista en la materia."
        ]
    ))

    # ==========================================
    # C2 - CLASE 13: Coordinación Asindética y Polisindética en Discurso Oratorio
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_13",
        level="C2",
        category="Figuras Retóricas & Sintaxis",
        title="Clase 13: Coordinación Asindética y Polisindética en Discurso Oratorio",
        explanation=(
            "En la estilística oratoria y la prosa literaria de nivel C2, el manejo de las conjunciones coordinantes trasciende la regla escolar "
            "básica de 'colocar una coma y un and al final de la lista'. El orador magistral recurre a dos figuras sintácticas antitéticas y complementarias: "
            "el 'ASÍNDETON' (Asyndeton) y el 'POLISÍNDETON' (Polysyndeton).\n\n"
            "1. El Asíndeton (Asyndetic Coordination, del griego ἀσύνδετον, sin ataduras):\n"
            "Consiste en la OMISIÓN DELIBERADA de conjunciones coordinantes (and, or, but) entre cláusulas o términos coordinados, vinculándolos "
            "exclusivamente mediante pausas prosódicas representadas ortográficamente por comas o punto y coma.\n"
            "Efecto Estilístico y Pragmático:\n"
            "- Acelera vertiginosamente el tempo narrativo, transmitiendo urgencia, inmediatez dramática y concisión espartana (como en el arquetipo "
            "cesariano: 'Veni, vidi, vici' ➔ 'I came, I saw, I conquered').\n"
            "- Sugiere una lista abierta, inagotable y abrumadora, donde los elementos se acumulan sin descanso: 'The empire lost territories, "
            "armies, prestige, hope' (El imperio perdió territorios, ejércitos, prestigio, esperanza).\n\n"
            "2. El Polisíndeton (Polysyndetic Coordination, del griego πολυσύνδετον, con muchas ataduras):\n"
            "Es la figura inversa: consiste en la REPETICIÓN INTENCIONADA de conjunciones coordinantes ('and', 'or', 'nor') entre cada uno de los "
            "términos de la serie.\n"
            "Efecto Estilístico y Pragmático:\n"
            "- Ralentiza deliberadamente la cadencia prosódica, otorgando a cada elemento un peso gravimétrico monumental y solemne (cadencia "
            "bíblica veterotestamentaria).\n"
            "- Subraya la magnitud acumulativa de una carga, dificultad o catálogo de virtudes: 'He struggled through wind AND rain AND hail AND snow' "
            "(Luchó a través del viento Y la lluvia Y el granizo Y la nieve).\n\n"
            "El dominio alternado de estas dos figuras permite a un redactor C2 orquestar la velocidad cognitiva del lector, transitando de la "
            "rapidez vertiginosa del asíndeton a la gravedad hipnótica y majestuosa del polisíndeton."
        ),
        rules=[
            "Puntuación Precisa en Asíndeton: Los miembros de la serie asindética deben separarse rigurosamente por comas o por punto y coma si las cláusulas internas ya contienen comas secundarias.",
            "Evitar el 'Comma Splice' en Cláusulas Independientes Extensas: El asíndeton es lícito entre cláusulas breves o poéticas paralelas; si las cláusulas son extensas y complejas, sepáralas mediante punto y coma en prosa formal.",
            "Dosificación Retórica del Polisíndeton: El polisíndeton debe reservarse para momentos culminantes o patéticos; su uso indiscriminado en prosa académica genera pesadez infantil.",
            "Consistencia de la Conjunción en Polisíndeton: Emplea la misma conjunción coordinante a lo largo de toda la serie polisindética (repetir 'and... and... and...' o 'nor... nor... nor...')."
        ],
        examples_us=[
            "Asyndeton: The speculative real estate bubble expanded, peaked, ruptured, devastated regional credit networks. (Asíndeton: La burbuja inmobiliaria especulativa se expandió, tocó techo, reventó, devastó las redes crediticias regionales).",
            "Polysyndeton: The Federal Reserve mobilized emergency facilities for municipal bond issuers and commercial paper dealers and mortgage servicers and depository banks. (Polisíndeton: La Reserva Federal movilizó facilidades de emergencia para emisores de bonos municipales y operadores de pagarés comerciales y administradores hipotecarios y bancos de depósito).",
            "Asyndeton: The newly appointed director audited accounts, dismissed compromised contractors, overhauled data protocols, restored institutional trust. (Asíndeton: El recién nombrado director auditó cuentas, despidió contratistas comprometidos, reestructuró protocolos de datos, restauró la confianza institucional).",
            "Polysyndeton: Neither the severity of federal sanctions nor the threat of asset forfeiture nor the prospect of extradition deterred the offshore cartel. (Polisíndeton: Ni la severidad de las sanciones federales ni la amenaza de decomiso de activos ni la perspectiva de extradición disuadieron al cártel extranjero)."
        ],
        examples_uk=[
            "Asyndeton: Across the battlefield lay shattered caissons, abandoned muskets, unexploded artillery shells, fallen banners. (Asíndeton: A lo largo del campo de batalla yacían armones destrozados, mosquetes abandonados, proyectiles de artillería sin detonar, estandartes caídos).",
            "Polysyndeton: The Chancellor pledged to preserve funding for national healthcare and scientific research and primary education and municipal transport. (Polisíndeton: El Ministro de Hacienda se comprometió a preservar la financiación para la sanidad nacional y la investigación científica y la educación primaria y el transporte municipal).",
            "Asyndeton: The sovereign entered Westminster Abbey, knelt before the altar, received the sacred chrism, assumed the Crown. (Asíndeton: El soberano ingresó a la Abadía de Westminster, se arrodilló ante el altar, recibió el crisma sagrado, asumió la Corona).",
            "Polysyndeton: The gale battered the coastal pier with wind and rain and spray and darkness, testing the ancient granite foundations through the night. (Polisíndeton: El vendaval azotó el muelle costero con viento y lluvia y espuma y oscuridad, poniendo a prueba los antiguos cimientos de granito durante toda la noche)."
        ],
        dialogue=[
            {"speaker": "Profesor de Oratoria Clásica (Dr. Sterling)", "text": "Analyze the cadence of this peroration: 'We shall defend our island, whatever the cost may be: we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields...'.", "translation": "Analice la cadencia de esta peroración: 'We shall defend our island, whatever the cost may be: we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields...'."},
            {"speaker": "Redactora de Discursos (Dra. Vance)", "text": "It combines anaphora with asyndetic clausal coordination. By omitting 'and' between the battlegrounds, the determination feels relentless and unbounded.", "translation": "Combina anáfora con coordinación clausal asindética. Al omitir 'and' entre los escenarios de batalla, la determinación se percibe implacable e ilimitada."},
            {"speaker": "Profesor de Oratoria Clásica (Dr. Sterling)", "text": "Precisely. Now contrast it with the solemn gravitas of polysyndeton in biblical and legal prologues: 'and the earth was without form, and void, and darkness was upon the face of the deep'.", "translation": "Precisamente. Ahora contrástelo con la solemne gravedad del polisíndeton en prólogos bíblicos y jurídicos: 'and the earth was without form, and void, and darkness was upon the face of the deep'."},
            {"speaker": "Redactora de Discursos (Dra. Vance)", "text": "Each conjunction acts as a monumental colonnade, compelling the listener to weigh every constituent with profound reverence.", "translation": "Cada conjunción actúa como una columnata monumental, obligando al oyente a ponderar cada constituyente con profunda reverencia."}
        ],
        mistakes=[
            "Cometer 'comma splice' asindético uniendo oraciones extensas no paralelas sin punto y coma o punto.",
            "Usar polisíndeton sin justificación estilística, pareciendo un error de redactor principiante que encadena 'and' por incapacidad sintáctica.",
            "Mezclar asindéticamente términos con diferentes patrones morfológicos rompiendo el paralelismo.",
            "Alternar arbitrariamente conjunciones distintas en un polisíndeton ('and... or... and...')."
        ],
        tips=[
            "Usa el asíndeton cuando describas acciones rápidas y decisivas: 'He entered, assessed, executed, vanished'.",
            "Emplea el polisíndeton en conclusiones solemnes cuando quieras transmitir un esfuerzo heroico acumulado o una devoción total.",
            "En presentaciones orales ejecutivas, el asíndeton transmite dinamismo implacable y eficiencia ejecutiva.",
            "Recuerda que estas figuras retóricas provienen de la oratoria grecorromana clásica y son altamente valoradas en la tradición literaria de Cambridge y Oxford."
        ]
    ))

    # ==========================================
    # C2 - CLASE 14: Modismos Culturales Profundos e Idiomaticidad Avanzada US vs. UK
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_14",
        level="C2",
        category="Idiomática Cultural & Pragmática",
        title="Clase 14: Modismos Culturales Profundos e Idiomaticidad Avanzada US vs. UK",
        explanation=(
            "En el nivel C2, el dominio idiomático trasciende expresiones de uso popular y se adentra en 'Modismos Culturales Profundos' "
            "(Deep Cultural Idioms and Institutional Tropes) originados en la historia política, los deportes fundacionales (béisbol y fútbol americano "
            "en Estados Unidos; críquet, caza y navegación en el Reino Unido), el sistema parlamentario de Westminster y la jurisprudencia anglosajona.\n\n"
            "Comprender y utilizar estos modismos con absoluta precisión pragmática es el sello supremo de un hablante que no solo domina la gramática, "
            "sino que está profundamente aculturado en el imaginario colectivo del mundo angloparlante.\n\n"
            "1. Modismos Institucionales y Culturales Estadounidenses (US):\n"
            "- 'Touch base' (hacer contacto breve; derivado del béisbol).\n"
            "- 'Step up to the plate' (asumir la responsabilidad en un momento crítico).\n"
            "- 'Curveball' (un giro imprevisto o trampa inesperada).\n"
            "- 'Monday-morning quarterback' (crítico a posteriori que juzga con facilidad cuando el juego ya terminó; del fútbol americano).\n"
            "- 'Drink the Kool-Aid' (creer ciegamente en una doctrina sectaria corporativa; alusión trágica histórica a Jonestown).\n"
            "- 'Move the goalposts' (cambiar las reglas o condiciones en mitad del proceso para impedir el éxito ajeno).\n"
            "- 'Inside baseball' (detalles técnicos hiperespecializados que solo interesan a los iniciados).\n\n"
            "2. Modismos Institucionales y Culturales Británicos (UK):\n"
            "- 'A sticky wicket' (una situación sumamente delicada, precaria y peligrosa; derivado del césped húmedo del críquet).\n"
            "- 'Not cricket' (conducta antideportiva, deshonesta o contraria a las reglas no escritas del juego limpio).\n"
            "- 'Throw a spanner in the works' (boicotear o arruinar un plan en marcha; equivalente al US 'throw a wrench in the gears').\n"
            "- 'Economical with the truth' (eufemismo célebre acuñado por Sir Robert Armstrong para denotar ocultamiento deliberado de información sin mentir formalmente).\n"
            "- 'Beyond the pale' (inaceptable moralmente; alusión histórica a la empalizada de control inglés alrededor de Dublín en la Edad Media).\n"
            "- 'A damp squib' (un acontecimiento muy publicitado que resulta un fracaso decepcionante; petardo que no estalla por la humedad).\n"
            "- 'Bite the bullet' (afrontar con estoicismo una situación dolorosa inevitable)."
        ),
        rules=[
            "Alineación Diatópica Estricta: Jamás mezcles modismos deportivos británicos con referencias institucionales estadounidenses en el mismo discurso sin una intención satírica deliberada.",
            "Inmutabilidad Léxica del Modismo: Los modismos no admiten sustituciones de sinónimos. 'Sticky wicket' nunca puede formularse como 'humid wicket'; 'damp squib' jamás es 'wet firecracker'.",
            "Pragmática del Eufemismo Político Británico: 'Economical with the truth' debe reservarse para contextos diplomáticos o periodísticos donde acusar a alguien directamente de mentiroso ('liar') violaría las normas parlamentarias.",
            "Adecuación al Contexto Profesional: Los modismos deportivos estadounidenses son habituales en salas de juntas de Wall Street y Silicon Valley, pero desentonan en tratados jurídicos solemnes."
        ],
        examples_us=[
            "The corporate defense team was unprepared for the regulatory curveball thrown by the federal antitrust prosecutor. (El equipo de defensa corporativa no estaba preparado para el giro inesperado planteado por el fiscal federal antimonopolio).",
            "It is effortless to be a Monday-morning quarterback and critique the Federal Reserve's interest rate trajectory retrospectively. (Es facilísimo ser un crítico a posteriori y censurar la trayectoria de tasas de interés de la Reserva Federal retrospectivamente).",
            "Senior executives must step up to the plate and take personal fiduciary liability for cybersecurity vulnerabilities. (Los altos ejecutivos deben dar un paso al frente y asumir responsabilidad fiduciaria personal por las vulnerabilidades de ciberseguridad).",
            "The technical jargon surrounding derivatives collateralization was dismissed by the jury as mere inside baseball. (La jerga técnica en torno a la titulización de derivados fue desestimada por el jurado como meros tecnicismos para iniciados)."
        ],
        examples_uk=[
            "The Prime Minister found himself on a sticky wicket during parliamentary questions concerning offshore ministerial assets. (El Primer Ministro se encontró en una situación sumamente espinosa durante la sesión de control parlamentario sobre activos ministeriales en el extranjero).",
            "To retroactively alter the terms of statutory procurement tenders is simply not cricket, and industry bidders will revolt. (Alterar retroactivamente las condiciones de licitaciones públicas estatutarias simplemente viola las reglas del juego limpio, y los licitadores industriales se sublevarán).",
            "The permanent secretary was heavily rebuked by the select committee for being decidedly economical with the truth during his deposition. (El secretario permanente fue severamente reprendido por la comisión selecta por ocultar deliberadamente la verdad durante su declaración testimonial).",
            "The long-heralded municipal transport reform turned out to be a complete damp squib, yielding zero improvement in suburban rail frequencies. (La tan anunciada reforma del transporte municipal resultó ser un fiasco monumental y decepcionante, sin producir mejora alguna en las frecuencias ferroviarias suburbanas)."
        ],
        dialogue=[
            {"speaker": "Consejero Delegado Británico (Dr. Sterling)", "text": "I am afraid our joint aerospace bid is on a sticky wicket; the Treasury's unexpected budget cut threw a spanner in the works.", "translation": "Me temo que nuestra oferta aeroespacial conjunta está en una situación muy delicada; el inesperado recorte presupuestario del Tesoro arruinó los planes por completo."},
            {"speaker": "Socio Comercial Estadounidense (Dr. Vance)", "text": "They threw us a curveball, for sure. But instead of playing Monday-morning quarterback, our consortium needs to step up to the plate.", "translation": "Nos lanzaron un giro imprevisto, sin duda. Pero en vez de hacer juicios a toro pasado, nuestro consorcio necesita dar un paso al frente y asumir la iniciativa."},
            {"speaker": "Consejero Delegado Británico (Dr. Sterling)", "text": "Their lead negotiator claimed they were blindsided by the figures, but I suspect he was being rather economical with the truth.", "translation": "Su negociador principal afirmó que las cifras los tomaron por sorpresa, pero sospecho que estuvo ocultando deliberadamente la verdad."},
            {"speaker": "Socio Comercial Estadounidense (Dr. Vance)", "text": "To move the goalposts at the eleventh hour is simply beyond the pale. We shall demand a formal renegotiation summit in New York.", "translation": "Cambiar las reglas del juego a última hora es simplemente inaceptable. Exigiremos una cumbre formal de renegociación en Nueva York."}
        ],
        mistakes=[
            "Traducir literalmente expresiones del español que no existen en inglés ('Throw water to the fire' en vez de 'pour cold water on...').",
            "Usar 'damp squid' (calamar húmedo) en vez del correcto 'damp squib' (petardo mojado) - uno de los errores de pronunciación más célebres en el Reino Unido.",
            "Emplear modismos informales o deportivos en contratos y testamentos solemnes.",
            "Creer que 'not cricket' tiene que ver literalmente con el juego de críquet cuando se emplea en contextos corporativos o éticos."
        ],
        tips=[
            "Aprende el origen histórico de cada modismo; conocer que 'beyond the pale' alude al Pale de Dublín fija el modismo en la memoria para siempre.",
            "En negociaciones británicas, usa 'a sticky wicket' para describir diplomáticamente un callejón sin salida sin sonar agresivo.",
            "En empresas de capital riesgo y startups estadounidenses, domina términos como 'step up to the plate', 'ballpark figure' y 'touch base'.",
            "Recuerda que los modismos culturales son la prueba definitiva de inmersión lingüística en entrevistas de trabajo y presentaciones directivas."
        ]
    ))

    # ==========================================
    # C2 - CLASE 15: Pragmática del Registro: De la Ironía Sutil a la Cortesía Superlativa
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_15",
        level="C2",
        category="Pragmática & Cortesía Negativa",
        title="Clase 15: Pragmática del Registro: De la Ironía Sutil a la Cortesía Superlativa",
        explanation=(
            "La pragmática de la cortesía y la ironía en el estrato más cultivado del idioma inglés C2 opera bajo el principio de la "
            "'Cortesía Negativa' (Negative Politeness, según la teoría fundacional de Brown y Levinson) y el 'Understatement' institucional. "
            "En la diplomacia anglosajona y en la clase dirigente británica y de la Ivy League, la agresividad, la confrontación directa "
            "o el elogio desmedido se perciben como muestras de vulgaridad o debilidad emocional. Por el contrario, la autoridad absoluta se "
            "ejerce mediante la atenuación irónica, el distanciamiento eufemístico y la deferencia protocolaria superlativa.\n\n"
            "Decodificación del Registro de Cortesía e Ironía Británica (British Understatement Code):\n"
            "Un usuario C2 debe ser capaz de decodificar lo que un diplomático u homólogo británico DICE frente a lo que REALMENTE SIGNIFICA:\n"
            "- Lo que dice: 'With the greatest respect...' / 'With all due respect...'\n"
            "  Significado pragmático real: 'Considero que su argumento es un disparate absoluto y está completamente equivocado'.\n"
            "- Lo que dice: 'That is a rather courageous proposal...' (Inmortalizado en la serie 'Yes Minister')\n"
            "  Significado pragmático real: 'Su propuesta es un suicidio político insensato y jamás se llevará a cabo'.\n"
            "- Lo que dice: 'I hear what you say...' (Tomo nota de lo que dice)\n"
            "  Significado pragmático real: 'He escuchado su postura y me niego categóricamente a aceptarla o discutirla más'.\n"
            "- Lo que dice: 'I am slightly concerned that...'\n"
            "  Significado pragmático real: 'Estamos al borde de un desastre irreparable si esto no se rectifica en este instante'.\n"
            "- Lo que dice: 'Interesting...' / 'Fascinating perspective...'\n"
            "  Significado pragmático real: 'Su idea carece de valor analítico y no la tendremos en cuenta'.\n\n"
            "Mecanismos Sintácticos de la Cortesía Superlativa:\n"
            "1. Apilamiento Modal y Preguntas Indirectas Tentativas (Modal Stacking):\n"
            "'I WONDER IF I MIGHT POSSIBLY INQUIRE WHETHER the committee would be so gracious as to defer the vote' (Me pregunto si acaso "
            "me sería posible consultar si la comisión tendría la amabilidad de aplazar la votación).\n"
            "2. Proyección Pasiva Despersonalizada (Agentless Passive Deflection):\n"
            "'It has been brought to our attention that certain administrative discrepancies MAY HAVE BEEN OVERLOOKED' (en vez de 'You made a mistake').\n"
            "3. Atenuación Adverbial mediante Diminutivos Pragmáticos: 'a touch', 'somewhat', 'marginally', 'a trifle'."
        ),
        rules=[
            "Regla de Oro de la Pragmática Anglosajona: Cuanto más grave sea la acusación o más firme la discrepancia, más formal y elaborada debe ser la arquitectura de cortesía sintáctica empleada.",
            "Despersonalización Sistemática del Error: Nunca utilices 'you' al señalar un incumplimiento institucional; traslada la culpa al procedimiento o al sustantivo abstracto mediante voz pasiva: 'An omission appears to have occurred'.",
            "Uso Estratégico de 'Would seem to': Sustituye aserciones directas por verbos de apariencia en condicional: 'The figures WOULD SEEM to diverge from projections' (en lugar de 'The figures are wrong').",
            "Decodificación Contextual de 'With respect': Si abre un párrafo de refutación formal, actúa como un prefijo de demolición dialéctica irrebatible."
        ],
        examples_us=[
            "With all due respect to corporate counsel, the proposed licensing agreement leaves our intellectual property portfolio fundamentally unprotected. (Con todo el respeto debido al asesor corporativo, el acuerdo de licenciamiento propuesto deja nuestra cartera de propiedad intelectual fundamentalmente desprotegida).",
            "I wonder if we might tentatively explore alternative debt restructuring mechanisms before approaching external sovereign lenders. (Me pregunto si acaso podríamos explorar tentativamente mecanismos alternativos de reestructuración de deuda antes de recurrir a prestamistas soberanos externos).",
            "It would appear that certain regulatory filing deadlines may have been inadvertently overlooked by the compliance department. (Parecería que ciertas fechas límite de presentación regulatoria podrían haber sido pasadas por alto inadvertidamente por el departamento de cumplimiento).",
            "While your perspective is certainly innovative, prevailing market conditions would seem to advise a marginally more conservative liquidity posture. (Si bien su perspectiva es ciertamente innovadora, las condiciones imperantes del mercado parecerían aconsejar una postura de liquidez marginalmente más conservadora)."
        ],
        examples_uk=[
            "With the greatest possible respect, Minister, embarking upon unilateral treaty derogation would be considered a remarkably courageous initiative. (Con el mayor respeto posible, Ministro, embarcarse en la derogación unilateral del tratado sería considerada una iniciativa notablemente temeraria / suicida).",
            "I hear what you say regarding domestic manufacturing subsidies, yet the Treasury must remain mindful of our multilateral World Trade Organization commitments. (Tomo nota de lo que señala respecto a los subsidios manufactureros nacionales; no obstante, el Tesoro debe tener presentes nuestros compromisos multilaterales de la Organización Mundial del Comercio).",
            "I am slightly concerned that the proposed rail franchise termination protocol may be a trifle precipitate under present statutory frameworks. (Me inquieta ligeramente / Me alarma profundamente que el protocolo propuesto de cancelación de la concesión ferroviaria sea un tanto precipitado bajo los marcos estatutarios actuales).",
            "Might I be so bold as to suggest that the permanent secretary review the unredacted procurement minutes prior to addressing the select committee? (¿Me atrevería a ser tan osado como para sugerir que el secretario permanente revise las actas de adquisición sin censura antes de dirigirse a la comisión selecta?)."
        ],
        dialogue=[
            {"speaker": "Secretario del Gabinete (Dr. Sterling)", "text": "Minister, the proposal to requisition private water utility reserves overnight is, if I may say so, exceptionally courageous.", "translation": "Ministro, la propuesta de requisar las reservas de las empresas privadas de agua de la noche a la mañana es, si se me permite decirlo, excepcionalmente temeraria."},
            {"speaker": "Ministro de Infraestructura (Dr. Vance)", "text": "Courageous? You mean the Treasury believes it is an electoral suicide pill?", "translation": "¿Temeraria? ¿Quiere decir que el Tesoro cree que es una píldora de suicidio electoral?"},
            {"speaker": "Secretario del Gabinete (Dr. Sterling)", "text": "With the greatest respect, Minister, the legal challenges alone would render the department somewhat vulnerable before the High Court.", "translation": "Con el mayor respeto, Ministro, tan solo las demandas legales dejarían al departamento un tanto vulnerable / indefenso ante el Tribunal Superior."},
            {"speaker": "Ministro de Infraestructura (Dr. Vance)", "text": "I hear what you say, Sir Humphrey. Perhaps we might explore a marginally more calibrated phased buyout protocol instead.", "translation": "Tomo nota de lo que dice, Sir Humphrey. Quizá podríamos explorar en su lugar un protocolo de adquisición gradual marginalmente más calibrado."}
        ],
        mistakes=[
            "Interpretar los eufemismos británicos de forma literal (creer que 'courageous' es un cumplido en boca de un funcionario público inglés).",
            "Mostrar hostilidad o ira verbal en foros diplomáticos anglosajones (destruye de inmediato la posición de quien la exhibe).",
            "Decir 'You are wrong' en lugar de construcciones atenuadas como 'The evidence would seem to indicate otherwise'.",
            "Sobrecargar la cortesía hasta la parodia cómica cuando la situación exige una orden ejecutiva clara y concisa."
        ],
        tips=[
            "En reuniones internacionales, si un colega británico te dice 'I hear what you say', no repitas tu argumento: significa que lo entendió y lo rechaza.",
            "Utiliza 'I wonder if we might possibly...' para plantear modificaciones sustanciales sin generar fricciones defensivas.",
            "Recuerda que en el mundo anglosajón, la moderación en el tono (Understatement) denota poder y control emocional.",
            "Sustituye 'I think' por 'It would appear to me that...' para conferir autoridad despersonalizada a tus opiniones."
        ]
    ))

    # ==========================================
    # C2 - CLASE 16: Sintaxis Clásica en Documentos de Estado, Tratados y Jurisprudencia
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_16",
        level="C2",
        category="Inglés Jurídico & Diplomático",
        title="Clase 16: Sintaxis Clásica en Documentos de Estado, Tratados y Jurisprudencia",
        explanation=(
            "La cúspide institucional de la lengua inglesa se condensa en el lenguaje del 'Legalese' solemne, los Tratados Bilaterales de Estado "
            "y las sentencias canónicas de la Jurisprudencia de la Common Law. En este estrato C2, la sintaxis abandona deliberadamente la agilidad "
            "coloquial en favor de la inmutabilidad hermética: periodos oracionales extensos, cláusulas encajadas en cascada (nested clauses), "
            "deixis jurídica arcaica y un uso estricto del verbo auxiliar 'SHALL' con valor no de futuro cronológico, sino de OBLIGACIÓN IMPERATIVA VINCULANTE.\n\n"
            "Análisis de los Elementos Sintácticos del Discurso Jurídico y Estatal:\n\n"
            "1. El Uso Deóntico Obligatorio de 'SHALL':\n"
            "En contratos y tratados internacionales, 'SHALL' impone un mandato legal ineludible ('The Contractor SHALL indemnify the Client'). "
            "Por el contrario, 'MAY' otorga facultad discrecional potestativa, y 'WILL' se reserva para declaraciones de intenciones o hechos futuros.\n\n"
            "2. El Párrafo de Periodo Único (Single-Sentence Periodic Structure):\n"
            "En resoluciones de la Asamblea General de la ONU, actas constitutivas y decretos reales, todo el preámbulo y la resolución se formulan "
            "como UNA SOLA ORACIÓN GIGANTESCA vertebrada por cláusulas de participio coordinadas:\n"
            "'HAVING CONSIDERED the report of the Special Rapporteur,\n"
            "RECALLING its previous resolutions concerning territorial sovereignty,\n"
            "GRAVELY CONCERNED by the escalation of maritime skirmishes,\n"
            "1. SOLEMNLY DEMANDS that all hostilities cease immediately;\n"
            "2. DECIDES to remain seized of the matter'.\n\n"
            "3. Conectores Deícticos Arcaizantes Fosilizados:\n"
            "- 'HEREBY' (por la presente / en virtud de este acto formal).\n"
            "- 'WHEREUNDER' (en virtud de lo cual / bajo el cual).\n"
            "- 'INTER ALIA' (entre otros asuntos / entre otras cosas).\n"
            "- 'MUTATIS MUTANDIS' (cambiando lo que se deba cambiar / adaptando las diferencias necesarias).\n"
            "- 'FORCE MAJEURE' (fuerza mayor).\n"
            "- 'IN WITNESS WHEREOF' (en testimonio de lo cual; fórmula canónica de cierre contractual)."
        ),
        rules=[
            "El Valor Prescriptivo de 'SHALL': En documentos jurídicos C2, 'shall' significa 'está legalmente obligado a'; nunca lo emplees como mero futuro condicional en este registro.",
            "Estructura Preambular con Participios Mayúsculos: Los considerandos de tratados de Estado se abren invariablemente con participios en mayúscula sostenida: 'CONSIDERING', 'RECOGNIZING', 'DEPLORING'.",
            "Fórmulas de Cierre Contractual Consagradas: 'IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first above written'.",
            "Precisión Hermética de 'Inter Alia': Debe emplearse cuando una lista de causales o infracciones no pretende ser exhaustiva sino meramente ilustrativa ante un tribunal."
        ],
        examples_us=[
            "The licensee shall maintain exhaustive cryptographic access ledgers, inter alia, to ensure full compliance with federal data sovereignty statutes. (El licenciatario mantendrá registros exhaustivos de acceso criptográfico, entre otras cosas, para garantizar el pleno cumplimiento de los estatutos federales de soberanía de datos).",
            "In witness whereof, the authorized plenipotentiaries of the United States and the sovereign state have hereunto subscribed their signatures. (En testimonio de lo cual, los plenipotenciarios autorizados de los Estados Unidos y del estado soberano han suscrito la presente con sus firmas).",
            "Neither party shall be held liable for failure to perform contractual covenants whereunder performance is precluded by events of force majeure. (Ninguna de las partes será considerada responsable por el incumplimiento de compromisos contractuales en virtud de los cuales la ejecución se vea impedida por eventos de fuerza mayor).",
            "The Supreme Court held that the statute, mutatis mutandis, applied with equal force to commercial maritime entities navigating inland waterways. (La Corte Suprema sostuvo que el estatuto, con las debidas adaptaciones, se aplicaba con igual fuerza a las entidades marítimas comerciales que navegan por vías fluviales interiores)."
        ],
        examples_uk=[
            "Her Majesty's Government hereby declare that the territory described in Schedule One shall enjoy full devolved legislative competence. (El Gobierno de Su Majestad declara por la presente que el territorio descrito en el Anexo Uno gozará de plena competencia legislativa descentralizada).",
            "The High Court ruled that the tenant had breached statutory covenants, inter alia, by sub-letting the immovable property without written licence. (El Tribunal Superior dictaminó que el arrendatario había infringido los compromisos estatutarios, entre otras cosas, al subarrendar el bien inmueble sin licencia escrita).",
            "The provisions of this Treaty shall enter into force upon the deposit of instruments of ratification with the Foreign and Commonwealth Office. (Las disposiciones del presente Tratado entrarán en vigor tras el depósito de los instrumentos de ratificación ante la Cancillería y Oficina de la Mancomunidad).",
            "The arbitration panel ordered that the respondent shall indemnify the claimant in respect of all consequential losses incurred heretofore. (El panel de arbitraje ordenó que la parte demandada indemnizará a la parte demandante respecto de todas las pérdidas consecuenciales incurridas hasta la fecha)."
        ],
        dialogue=[
            {"speaker": "Consejero Jurídico de la ONU (Dr. Sterling)", "text": "Observe the architecture of Resolution 1441: twenty-two preambular paragraphs opening with 'Recalling', 'Deploring', and 'Emphasizing', culminating in operative mandates.", "translation": "Observe la arquitectura de la Resolución 1441: veintidós párrafos preambulares que abren con 'Recalling', 'Deploring', y 'Emphasizing', culminando en mandatos operativos."},
            {"speaker": "Diplomática de Carrera (Dra. Vance)", "text": "Notice the deliberate substitution of 'will' with 'shall' in operative paragraph four: 'The State SHALL afford immediate, unhindered, and unconditional access'.", "translation": "Observe la sustitución deliberada de 'will' por 'shall' en el párrafo operativo cuatro: 'The State SHALL afford immediate, unhindered, and unconditional access'."},
            {"speaker": "Consejero Jurídico de la ONU (Dr. Sterling)", "text": "Precisely. Under international treaty law, 'shall' transforms diplomatic aspiration into a binding statutory obligation backed by Chapter VII enforcement.", "translation": "Precisamente. Bajo el derecho internacional de los tratados, 'shall' transforma la aspiración diplomática en una obligación estatutaria vinculante respaldada por la aplicación del Capítulo VII."},
            {"speaker": "Diplomática de Carrera (Dra. Vance)", "text": "And the clause 'without prejudice to' preserves prior territorial conventions mutatis mutandis.", "translation": "Y la cláusula 'without prejudice to' preserva las convenciones territoriales previas con las adaptaciones correspondientes."}
        ],
        mistakes=[
            "Usar 'will' creyendo que es equivalente a 'shall' en un contrato legal (en derecho contractual, 'will' es una mera promesa no sancionable, mientras que 'shall' es un deber imperativo vinculante).",
            "Escribir 'here by' como dos palabras separadas (la fórmula deóntica formal es una sola palabra: 'HEREBY').",
            "Traducir literalmente 'fuerza mayor' como 'major force' en vez del consagrado término jurídico galicado 'force majeure'.",
            "Alterar la posición de 'inter alia' colocándolo al final absoluto de oraciones donde oscurece el elemento al que califica."
        ],
        tips=[
            "En redacción de acuerdos o minutas corporativas, reserva 'SHALL' exclusivamente para las obligaciones de las partes: 'The Company shall notify...'.",
            "Para otorgar facultades voluntarias, recurre estrictamente a 'MAY': 'The Inspector may inspect books of account at his sole discretion'.",
            "Memoriza la fórmula de cierre solemne: 'IN WITNESS WHEREOF, the parties hereto have executed this instrument...'.",
            "Utiliza 'inter alia' en alegatos cuando no desees cerrarte la puerta a presentar pruebas complementarias adicionales en el juicio."
        ]
    ))

    # ==========================================
    # C2 - CLASE 17: Cláusulas Apositivas Complejas y Puntuación Retórica
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_17",
        level="C2",
        category="Puntuación Avanzada & Aposición",
        title="Clase 17: Cláusulas Apositivas Complejas y Puntuación Retórica",
        explanation=(
            "La 'Aposición Sintáctica Compleja' (Complex Appositive Structures) y el empleo maestro de la puntuación retórica representan "
            "la orquestación de la respiración mental del lector en la prosa de nivel C2. Una aposición consiste en la yuxtaposición contigua de dos "
            "o más sintagmas nominales que comparten idéntico referente extralingüístico, donde el segundo sintagma define, matiza, enaltece "
            "o sintetiza al primero sin mediación de pronombres relativos ni verbos cópula ('John, the chairman, resigned').\n\n"
            "En el nivel C2, la aposición evoluciona hacia construcciones de largo alcance:\n"
            "1. Aposición Resumitiva o Tematizadora (Resumptive Apposition):\n"
            "Un sintagma nominal que recupera y sintetiza toda la proposición clausal precedente mediante un sustantivo abstracto como 'a reality', "
            "'a development', 'a tragedy', 'a paradox':\n"
            "'The central bank raised benchmark interest rates to double digits during an acute recession—A PARADOX THAT BAFFLED CONTEMPORARY ECONOMISTS'.\n\n"
            "2. Aposición Parentética Aislada por Guiones Largos (Em-Dashes) o Dos Puntos (Colons):\n"
            "El guion largo (Em-Dash: —) crea una pausa enfática dramática para insertar una reflexión contundente, una corrección o una especificación "
            "de alta intensidad; los dos puntos (:) anuncian la consecuencia inevitable o la ilustración prometida de la tesis inicial.\n\n"
            "3. Puntuación Retórica con Punto y Coma (Semicolons):\n"
            "El punto y coma en C2 no es un sustituto perezoso de la coma; es la balanza que sostiene dos proposiciones independientes plenamente "
            "maduras que guardan una íntima correspondencia causal, antitética o simétrica, sin necesidad de conjunciones coordinantes:\n"
            "'The treaty did not establish lasting peace; it merely institutionalized a twenty-year armistice'.\n\n"
            "La correcta distribución de comas, puntos y comas, guiones largos y dos puntos permite construir una arquitectura textual majestuosa, "
            "evitando la fragmentación telegráfica y dotando a la prosa de cadencia armónica."
        ),
        rules=[
            "Identidad Referencial en Aposiciones Plenas: El sintagma en aposición debe poder sustituir gramaticalmente al antecedente: 'The Foreign Secretary, an experienced diplomat, addressed the summit'.",
            "Aposición Resumitiva con Guion Largo: Emplea el guion largo (—) antes de la aposición cuando esta sintetice la totalidad de la oración precedente en un sustantivo abstracto: '...flooding the bond market—a calculated gamble that backfired'.",
            "Uso Antitético del Punto y Coma: Dos cláusulas independientes que se contraponen directamente sin conector deben vincularse por punto y coma: 'Speech is silver; silence is golden'.",
            "Regla del Dos Puntos Explicativo: Lo que sigue a los dos puntos debe ilustrar, explicar o enumerar directamente lo anticipado por la cláusula previa; la primera cláusula debe ser gramaticalmente completa por sí misma."
        ],
        examples_us=[
            "The Federal Reserve injected two trillion dollars into shadow banking liquidity facilities—a historic intervention that fundamentally recalibrated moral hazard across domestic capital markets. (La Reserva Federal inyectó dos billones de dólares en facilidades de liquidez de la banca en la sombra, una intervención histórica que recalibró fundamentalmente el riesgo moral en los mercados nacionales de capitales).",
            "The antitrust ruling dismantled the telecommunications monopoly into seven regional operating entities: an outcome that transformed national communications infrastructure. (El fallo antimonopolio desmanteló el monopolio de telecomunicaciones en siete entidades operativas regionales: un desenlace que transformó la infraestructura nacional de comunicaciones).",
            "Technological innovation alone cannot resolve systemic socio-economic inequality; it merely accelerates the disparities between capital and labor. (La innovación tecnológica por sí sola no puede resolver la desigualdad socioeconómica sistémica; simplemente acelera las disparidades entre el capital y el trabajo).",
            "The chief financial officer, a seasoned veteran of two prior Wall Street liquidity crises, counseled immediate asset diversification. (El director financiero, un curtido veterano de dos crisis previas de liquidez en Wall Street, aconsejó una diversificación inmediata de activos)."
        ],
        examples_uk=[
            "The Chancellor announced the freezing of municipal budget allocations—a draconian measure that provoked furious condemnation across northern constituencies. (El Ministro de Hacienda anunció la congelación de las asignaciones presupuestarias municipales, una medida draconiana que provocó una furiosa condena en las circunscripciones del norte).",
            "The ancient university faculty defended its collegiate autonomy with unyielding tenacity: an institution whose roots predated the Norman Conquest. (El cuerpo docente de la antigua universidad defendió su autonomía colegiada con una tenacidad inquebrantable: una institución cuyas raíces precedían a la Conquista Normanda).",
            "Parliament did not capitulate to sovereign pressure; it reasserted its constitutional supremacy with unprecedented firmness. (El Parlamento no capituló ante la presión del soberano; reafirmó su supremacía constitucional con una firmeza sin precedentes).",
            "The Lord Chancellor, the hereditary custodian of the sovereign's conscience, introduced the historic judicial reform bill. (El Lord Canciller, el custodio hereditario de la conciencia del soberano, presentó el histórico proyecto de ley de reforma judicial)."
        ],
        dialogue=[
            {"speaker": "Editor de Ensayos Académicos (Prof. Sterling)", "text": "Observe your use of punctuation: 'The experiment failed. This was an outcome that stunned everyone'. It reads like an elementary school composition.", "translation": "Observe su uso de la puntuación: 'The experiment failed. This was an outcome that stunned everyone'. Parece una redacción de escuela primaria."},
            {"speaker": "Investigador Doctoral (Dr. Vance)", "text": "I should synthesize it into a resumptive apposition: 'The experiment failed—an outcome that stunned the entire neurobiology department'.", "translation": "Debo sintetizarlo en una aposición resumitiva: 'The experiment failed—an outcome that stunned the entire neurobiology department'."},
            {"speaker": "Editor de Ensayos Académicos (Prof. Sterling)", "text": "Magnificent! The em-dash creates the dramatic pause, and the appositive noun 'outcome' captures the whole preceding event in one breath.", "translation": "¡Magnífico! El guion largo crea la pausa dramática, y el sustantivo apositivo 'outcome' captura todo el evento precedente en un solo aliento."},
            {"speaker": "Investigador Doctoral (Dr. Vance)", "text": "And notice how the subsequent semicolon balances my counterargument: 'We did not abandon the hypothesis; we merely recalibrated our calibration parameters'.", "translation": "Y observe cómo el punto y coma posterior equilibra mi contraargumento: 'We did not abandon the hypothesis; we merely recalibrated our calibration parameters'."}
        ],
        mistakes=[
            "Usar una simple coma antes de una aposición resumitiva extensa generando confusión con los modificadores secundarios ordinarios.",
            "Insertar dos puntos (colon) después de un fragmento de oración incompleto (Error: 'Our demands are: X, Y, and Z' ➔ ¡Los dos puntos no deben colocarse tras 'are'!).",
            "Confundir el guion corto de unión (hyphen: -) con el guion largo de paréntesis y énfasis (em-dash: —).",
            "Cometer 'comma splice' separando oraciones independientes completas con simple coma en vez de punto y coma."
        ],
        tips=[
            "Usa aposiciones resumitivas al final de párrafos para sintetizar crisis o logros: '...collapsing under debt—a catastrophe decades in the making'.",
            "El punto y coma es el rey del equilibrio retórico: úsalo para contrastar dos ideas simétricas sin conectores vulgares.",
            "Reserva los dos puntos para presentar una revelación, definición o lista anunciada formalmente en la cláusula matriz completa.",
            "El guion largo (Em-dash) aporta vigor y frescura dramática a artículos de opinión en publicaciones como The Atlantic o Foreign Affairs."
        ]
    ))

    # ==========================================
    # C2 - CLASE 18: Subjuntivos Condicionales sin Nexo IF: BE HE FRIEND OR FOE
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_18",
        level="C2",
        category="Subjuntivo Condicional Arcaizante",
        title="Clase 18: Subjuntivos Condicionales sin Nexo IF: BE HE FRIEND OR FOE",
        explanation=(
            "Entre las estructuras más selectas y arcaizantes que sobreviven en la oratoria poética, jurídica y solemne de nivel C2 se encuentra "
            "el 'Subjuntivo Condicional Invertido sin Conjunción' (Zero-Conjunction Conditional Subjunctive). En estas construcciones, la conjunción "
            "subordinante 'IF' o 'WHETHER' desaparece por completo, y la condición concesiva o hipotética se formula iniciando directamente con la "
            "forma base del verbo en modo subjuntivo antepuesta al sujeto gramatical.\n\n"
            "Análisis de las Construcciones Maestras:\n\n"
            "1. La Fórmula Concesiva Polar 'BE HE / BE IT' (Sea quien fuere / Sea lo que fuere):\n"
            "Se emplea para descartar cualquier excepción o distinción personal en el cumplimiento de una ley, deber o destino inexorable:\n"
            "- 'BE HE friend or foe, the trespasser must be apprehended by military sentries' (Sea amigo o enemigo, el intruso debe ser detenido "
            "por los centinelas militares).\n"
            "- 'BE IT sovereign territory or international waters, navigational freedom shall be preserved' (Sea territorio soberano o aguas "
            "internacionales, la libertad de navegación será preservada).\n\n"
            "2. La Fórmula Dinámica 'COME WHAT MAY' y 'COST WHAT IT MAY':\n"
            "Representa la firmeza inquebrantable de la voluntad frente a cualquier contingencia futura ('venga lo que venga', 'cueste lo que cueste'):\n"
            "'The expeditionary fleet shall set sail at daybreak, COST WHAT IT MAY' (La flota expedicionaria zarpará al alba, cueste lo que cueste).\n\n"
            "3. La Fórmula Ponderativa 'BE THAT AS IT MAY' y 'TRUTH BE TOLD':\n"
            "Ampliamente utilizada en deliberaciones judiciales para avanzar hacia el dictamen definitivo tras escuchar los alegatos de descargo.\n\n"
            "4. Subjuntivos Condicionales con Verbos de Eventualidad (Happen what will / Say what you will):\n"
            "- 'Say what you will of his unorthodox economic theories, his monetary forecasts proved prescient'.\n\n"
            "Estas construcciones otorgan a los textos un linaje retórico directo con Shakespeare, la Carta Magna y los grandes oradores victorianos, "
            "demostrando una sofisticación lingüística reservada exclusivamente a candidatos de nivel Mastery C2."
        ),
        rules=[
            "Forma Base Pura al Frente de la Cláusula: El verbo subjuntivo abre la oración en su forma base (be, come, cost, say), sin auxiliares y sin importar el número o persona del sujeto.",
            "Supresión Absoluta de Nexos Subordinantes: No se utiliza 'if', 'whether', 'although' ni 'though' en este patrón; el propio orden del subjuntivo al frente codifica la condición concesiva.",
            "Estructura Disyuntiva Polar (Be it X or Y): Es preceptivo el emparejamiento con la conjunción disyuntiva 'OR' para abarcar los dos extremos del espectro.",
            "Inmutabilidad del Caso de Pronombres: En la fórmula 'Be he / Be they', se utiliza el pronombre en caso nominativo (sujeto), nunca en caso acusativo ('Be HIM' es un solecismo vulgar)."
        ],
        examples_us=[
            "Be he a multinational chief executive or an entry-level associate, every employee shall be subject to mandatory federal compliance screening. (Sea un director ejecutivo multinacional o un asociado de nivel inicial, todo empleado estará sujeto a exámenes de cumplimiento federal obligatorios).",
            "Be it a domestic cyber intrusion or a state-sponsored cyber warfare attack, the national response protocol shall be activated instantaneously. (Sea una ciberintrusión nacional o un ataque de guerra cibernética patrocinado por un estado, el protocolo nacional de respuesta será activado instantáneamente).",
            "Cost what it may in temporary market capitalization, the board resolved to terminate all illicit offshore banking relationships. (Cueste lo que cueste en capitalización bursátil temporal, la junta directiva resolvió rescindir todas las relaciones bancarias ilícitas en el extranjero).",
            "Say what you will about the Federal Reserve chairman's conservative monetary bias, his decisive intervention averted a banking panic. (Dígase lo que se diga sobre el sesgo monetario conservador del presidente de la Reserva Federal, su decisiva intervención evitó un pánico bancario)."
        ],
        examples_uk=[
            "Be he a peer of the realm or an indigent commoner, the rule of law before the High Court of Justice operates without partiality. (Sea un par del reino o un plebeyo indigente, el estado de derecho ante el Tribunal Superior de Justicia opera sin parcialidad alguna).",
            "Be it constitutional convention or statutory enactment, the authority of Parliament remains sovereign across the United Kingdom. (Sea convención constitucional o promulgación estatutaria, la autoridad del Parlamento permanece soberana a lo largo del Reino Unido).",
            "Come what may during the forthcoming general election, the Chancellor pledged that sovereign scientific research grants will remain ring-fenced. (Venga lo que venga durante las próximas elecciones generales, el Ministro de Hacienda se comprometió a que las subvenciones soberanas de investigación científica permanecerán blindadas).",
            "Happen what might in the turbulent bond markets, the Bank of England shall preserve systemic financial liquidity. (Pase lo que pase en los turbulentos mercados de bonos, el Banco de Inglaterra preservará la liquidez financiera sistémica)."
        ],
        dialogue=[
            {"speaker": "Fiscal Jefe del Tribunal Especial (Dr. Sterling)", "text": "Our mandate is categorical: be he a high-ranking minister or a military commander, anyone complicit in human rights violations shall be indicted.", "translation": "Nuestro mandato es categórico: sea un ministro de alto rango o un comandante militar, cualquiera que sea cómplice de violaciones de derechos humanos será acusado formalmente."},
            {"speaker": "Alta Comisionada de Justicia (Dra. Vance)", "text": "Precisely. The jurisdiction of the international tribunal admits no personal exemptions, be they grounded in diplomatic immunity or sovereign status.", "translation": "Precisamente. La jurisdicción del tribunal internacional no admite exenciones personales, estén fundamentadas en la inmunidad diplomática o en el estatus soberano."},
            {"speaker": "Fiscal Jefe del Tribunal Especial (Dr. Sterling)", "text": "Cost what it may in geopolitical retaliation from allied trading blocs, we shall unseal the indictments at tomorrow's plenary session.", "translation": "Cueste lo que cueste en represalias geopolíticas de bloques comerciales aliados, revelaremos las acusaciones en la sesión plenaria de mañana."},
            {"speaker": "Alta Comisionada de Justicia (Dra. Vance)", "text": "Indeed. Say what critics will regarding the timing of our warrants, justice delayed beyond this juncture would be justice denied.", "translation": "En efecto. Digan lo que digan los críticos respecto a la oportunidad de nuestras órdenes judiciales, la justicia demorada más allá de esta coyuntura sería justicia denegada."}
        ],
        mistakes=[
            "Escribir 'Be him' en vez de 'Be HE' (Error de caso en pronombres en subjuntivo arcaico).",
            "Insertar 'whether' en la fórmula (Error: 'Whether be it rain or snow' ➔ O dices 'Whether it be...' o 'Be it...').",
            "Conjugar el verbo en indicativo (Error: 'Is he friend or foe' ➔ ¡Eso es una pregunta, no una cláusula condicional! Debe ser 'BE he...').",
            "Omitir el 'or' disyuntivo en las fórmulas polares de dos términos."
        ],
        tips=[
            "Emplea 'Be it A or B' al inicio de directrices institucionales para enfatizar la universalidad innegociable de una regla.",
            "Recuerda que en oratoria formal, 'Say what you will of X, ...' es una fórmula prodigiosa para conceder críticas secundarias antes de elogiar el logro principal.",
            "Aplica 'Cost what it may' en declaraciones de principios irrenunciables.",
            "Ten presente que estas estructuras transmiten un tono aristocrático y literario, perfecto para peroraciones de alto registro."
        ]
    ))

    # ==========================================
    # C2 - CLASE 19: Ironía Sintáctica y Discurso Indirecto Libre en Literatura
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_19",
        level="C2",
        category="Narratología & Estilística Avanzada",
        title="Clase 19: Ironía Sintáctica y Discurso Indirecto Libre en Literatura",
        explanation=(
            "La narratología avanzada y la estilística literaria de nivel C2 alcanzan su cenit en el dominio del 'Discurso Indirecto Libre' "
            "(Free Indirect Discourse / Free Indirect Speech, el célebre *style indirect libre* de Flaubert, Jane Austen y Virginia Woolf) y la "
            "'Ironía Sintáctica' (Syntactic Irony).\n\n"
            "El Discurso Indirecto Libre es una técnica narrativa magistral en la que la voz del narrador heterodiegético (en tercera persona "
            "y en tiempo pretérito) se fusiona imperceptiblemente con el flujo de conciencia, las emociones subjetivas y la perspectiva psicológica "
            "de un personaje, SIN introducir marcas explícitas de reporte como 'he said that', 'she thought to herself' o comillas tipográficas.\n\n"
            "Características Sintácticas del Discurso Indirecto Libre:\n"
            "1. Tiempos Pasados con Deixis Temporal y Espacial de Presente:\n"
            "Se produce una fascinante paradoja deíctica: mientras los verbos permanecen en Past Simple o Past Perfect ('was', 'had arrived'), "
            "los adverbios de tiempo y espacio conservan la inmediatez subjetiva del presente vivencial del personaje ('now', 'today', 'tomorrow', 'here'):\n"
            "- Directo: 'She thought: \"I must finish this tomorrow!\"'\n"
            "- Indirecto Canónico: 'She thought that she had to finish that the following day'.\n"
            "- INDIRECTO LIBRE (C2): 'She had to finish this today. How on earth could they expect her to surrender now?' (¡Tenía que terminar esto "
            "hoy! ¿Cómo demonios podían esperar que ella se rindiera ahora?).\n\n"
            "2. Preguntas Retóricas y Exclamaciones Subjetivas en Tercera Persona:\n"
            "Las interjecciones, modismos y vacilaciones emotivas del personaje irrumpen directamente en la narración objetiva: 'Was he a coward? "
            "No, by heavens! He would confront the board at dawn'.\n\n"
            "3. Ironía Sintáctica por Yuxtaposición Antiperifrástica:\n"
            "Consiste en construir un periodo oracional cuya arquitectura formal solemne choca frontalmente con la trivialidad o mezquindad del "
            "contenido narrado, generando un efecto satírico demoledor (técnica predilecta de Jonathan Swift y Evelyn Waugh)."
        ),
        rules=[
            "Ausencia de Verbos de Notificación (No Inquit Verbs): El narrador nunca interpone 'he pondered', 'she realized'; los pensamientos del personaje fluyen directamente como afirmaciones narrativas.",
            "Convivencia de Pasado Verbal y Deixis Presente: Los tiempos verbales van en pasado (backshift gramatical), pero los deícticos expresan la inmediatez del personaje: 'now', 'yesterday', 'this very morning'.",
            "Mantenimiento de Pronombres en Tercera Persona: A diferencia del monólogo interior en primera persona ('I'), el discurso indirecto libre preserva la tercera persona: 'he', 'she', 'they'.",
            "Ironía por Desajuste de Registro: El humor satírico culto C2 se logra empleando la sintaxis protocolaria más elevada para describir situaciones ridículas o hipocresías burocráticas."
        ],
        examples_us=[
            "The corporate treasurer stared out the corner office window. Bankruptcy was imminent. Why had the auditors failed to flag the liquidity deficit months ago? No matter; he would execute the offshore transfers this very afternoon and face the congressional committee on his own terms. (El tesorero corporativo miraba por la ventana de la oficina de esquina. La bancarrota era inminente. ¿Por qué los auditores no habían señalado el déficit de liquidez hacía meses? No importaba; ejecutaría las transferencias a ultramar esta misma tarde y enfrentaría al comité del Congreso en sus propios términos).",
            "She paced across the laboratory rotunda. Her proprietary gene-editing patent was invalidated! Could federal regulators truly believe this fabricated prior art? She would appeal to the Supreme Court tomorrow, cost what it might. (Caminaba de un lado a otro por la rotonda del laboratorio. ¡Su patente de edición genética había sido invalidada! ¿Acaso los reguladores federales podían creer verdaderamente este estado de la técnica fabricado? Apelaría ante la Corte Suprema mañana mismo, costara lo que costara)."
        ],
        examples_uk=[
            "The permanent secretary adjusted his silk tie before the gilded mirror. The Minister was an unmitigated fool, of course. How could any sane politician contemplate nationalising the water utilities without Treasury clearance? Well, let him table the bill today; Whitehall would strangle it in committee by next Friday. (El secretario permanente se ajustó la corbata de seda ante el espejo dorado. El Ministro era un necio rematado, por supuesto. ¿Cómo podía ningún político cuerdo contemplar la nacionalización de las empresas de agua sin la aprobación del Tesoro? Bien, que presentara el proyecto de ley hoy; Whitehall lo estrangularía en comisión para el próximo viernes).",
            "Down plummeted the share price of the venerable merchant bank. What an extraordinary catastrophe! Had three centuries of mercantile probity been reduced to algorithmic margin calls? He must summon the board now, this very instant. (Cuesta abajo se desplomó el precio de las acciones del venerable banco mercantil. ¡Qué catástrofe tan extraordinaria! ¿Acaso tres siglos de probidad mercantil se habían reducido a llamadas de margen algorítmicas? Debía convocar a la junta ahora, en este mismo instante)."
        ],
        dialogue=[
            {"speaker": "Catedrática de Crítica Literaria (Prof. Sterling)", "text": "Observe Austen's genius in Emma: 'The wedding was over, and they were left to have their dinner, and sit by the fire. Poor Mr. Woodhouse! How was he to bear all this change?'. Whose voice is this?", "translation": "Observe el genio de Austen en Emma: 'The wedding was over, and they were left to have their dinner, and sit by the fire. Poor Mr. Woodhouse! How was he to bear all this change?'. ¿De quién es esta voz?"},
            {"speaker": "Doctorando en Narratología (Dr. Vance)", "text": "It is classic free indirect discourse. The narrator maintains third-person past syntax, yet the emotional sympathy 'Poor Mr. Woodhouse!' belongs entirely to Emma's internal psyche.", "translation": "Es un clásico discurso indirecto libre. El narrador mantiene la sintaxis del pasado en tercera persona; sin embargo, la simpatía emocional '¡Pobre señor Woodhouse!' pertenece enteramente a la psique interna de Emma."},
            {"speaker": "Catedrática de Crítica Literaria (Prof. Sterling)", "text": "Precisely. And notice how syntactic irony flourishes when solemn bureaucratic diction clashes with petty ministerial vanity.", "translation": "Precisamente. Y observe cómo la ironía sintáctica florece cuando la solemne dicción burocrática choca con la mezquina vanidad ministerial."},
            {"speaker": "Doctorando en Narratología (Dr. Vance)", "text": "Mastering this narrative fluidity allows the C2 author to achieve supreme psychological polyphony without cumbersome attribution tags.", "translation": "Dominar esta fluidez narrativa permite al autor C2 alcanzar una polifonía psicológica suprema sin engorrosas etiquetas de atribución."}
        ],
        mistakes=[
            "Insertar 'he thought' o 'she said' arruinando el discurso indirecto libre (si pones verbos de habla, se convierte en discurso indirecto ordinario).",
            "Cambiar a primera persona 'I' en medio del párrafo (eso es monólogo interior o discurso directo sin comillas).",
            "Eliminar los deícticos de inmediatez 'now', 'today' sustituyéndolos por 'then' o 'that day' (pierde la chispa psicológica del personaje).",
            "Forzar la ironía mediante sarcasmo grosero o insultos directos en vez de dejar que la sintaxis revele la hipocresía por contraste."
        ],
        tips=[
            "Lee a Virginia Woolf (Mrs. Dalloway) y James Joyce (The Dead) para internalizar cómo los pensamientos transitan fluidamente desde la descripción del entorno.",
            "Usa preguntas retóricas directas en tercera persona para reflejar dilemas éticos angustiosos de tus personajes.",
            "En redacción periodística satírica o de opinión, el discurso indirecto libre permite parodiar las justificaciones de un político corrupto sin citarlo formalmente.",
            "Recuerda: la tercera persona otorga la distancia del historiador, mientras los deícticos presentes inyectan el pulso cardíaco del personaje."
        ]
    ))

    # ==========================================
    # C2 - CLASE 20: Maestría y Perfeccionamiento Integral: Diferenciación Absoluta US vs. UK en Alta Diplomacia
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c2_lesson_20",
        level="C2",
        category="Dialectología Comparada & Diplomacia",
        title="Clase 20: Maestría y Perfeccionamiento Integral: Diferenciación Absoluta US vs. UK en Alta Diplomacia",
        explanation=(
            "En la cumbre absoluta del aprendizaje del idioma inglés (CEFR C2 Ultimate Mastery), el estudiante se gradúa alcanzando "
            "la 'Diferenciación Absoluta e Interoperabilidad Diatópica' entre el inglés estadounidense (US) y el inglés británico (UK) "
            "en los niveles más exigentes de la Alta Diplomacia internacional, las negociaciones en el Consejo de Seguridad de la ONU, "
            "los tribunales de arbitraje transatlánticos y los tratados de cooperación multilateral.\n\n"
            "Un diplomático u orador de nivel C2 no solo conoce las diferencias ortográficas canónicas (-or vs. -our, -ize vs. -ise, -er vs. -re), "
            "sino que domina las discrepancias epistemológicas, culturales y estructurales profundas en cuatro dimensiones maestras:\n\n"
            "1. Filosofía de la Redacción de Tratados y Contratos:\n"
            "- Tradición Estadounidense (Delaware / Wall Street / State Department):\n"
            "Prefiere una redacción exhaustiva, codificada, prolija y protectora, diseñada para anticipar cada contingencia procesal y litigar "
            "con rigor literalista ('Black-letter Law'). Emplea de forma inflexible el Mandative Subjunctive puro ('The Envoy mandate that reparations "
            "be paid immediately') y la concordancia singular monolítica en personas jurídicas ('The Department has stated its position').\n\n"
            "- Tradición Británica (Whitehall / Foreign Office / Common Law Consuetudinaria):\n"
            "Privilegia la elegancia sintética, la adhesión a precedentes no codificados, el 'Understatement' intencionado y las convenciones no "
            "escritas de buena fe. Permite la concordancia nocional en plural para entidades institucionales ('The Foreign Office have dispatched "
            "their memorandum') y recurre al 'Putative Should' o perífrasis solemnes ('We suggest that the Envoy should be recalled').\n\n"
            "2. Divergencias Terminológicas en Derecho de Estado e Instituciones:\n"
            "- US: Department of State, Secretary of State, Attorney General, District Attorney, Federal Circuit, Subpoena, Filibuster.\n"
            "- UK: Foreign, Commonwealth and Development Office (FCDO), Foreign Secretary, Attorney General, Crown Prosecution Service, High Court "
            "of Justice, Witness Summons, Prorogation.\n\n"
            "3. Puntuación y Protocolo Editorial Transatlántico:\n"
            "- US (Chicago Manual of Style): Puntos y comas SIEMPRE van dentro de las comillas tipográficas (\"like this,\"). Dobles comillas estándar.\n"
            "- UK (Oxford Style): Puntos y comas van fuera de las comillas a menos que pertenezcan al texto original citado ('like this',). Comillas simples estándar.\n\n"
            "Al culminar esta vigésima clase del nivel C2, el usuario ostenta una competencia bilingüe y bidialectal consumada: es capaz de redactar "
            "con impecable fluidez, densidad conceptual y solemnidad institucional tanto para las audiencias de Washington y Nueva York como para "
            "las de Londres y Ginebra, dominando el idioma inglés en su más alta dimensión civilizatoria."
        ),
        rules=[
            "Consistencia Diatópica Monolítica del 100%: En un documento oficial jamás deben coexistir rasgos diatópicos mezclados (ortografía británica con puntuación estadounidense, o concordancia nocional británica con léxico societario de Delaware).",
            "Dominio de la Convención Editorial de Puntuación: Aplica comillas dobles con signos de puntuación dentro para documentos de formato US; utiliza comillas simples con puntuación fuera para documentos de formato UK.",
            "Concordancia Institucional Consagrada: En US siempre 'The administration has decided its policy'; en UK es normativo y elegante 'The cabinet have decided their policy' cuando se alude a la voluntad de sus ministros.",
            "Manejo de Modismos y Eufemismos Diplomáticos: Adapta el tono de negociación al auditorio: asertividad frontal respaldada por datos en entornos estadounidenses; atenuación irónica ('understatement') y fórmulas de cortesía en entornos británicos."
        ],
        examples_us=[
            "The Department of State has formally notified the United Nations Secretariat that the United States is exercising its sovereign prerogative pursuant to the bilateral security pact. (El Departamento de Estado ha notificado formalmente a la Secretaría de las Naciones Unidas que los Estados Unidos están ejerciendo su prerrogativa soberana de conformidad con el pacto bilateral de seguridad).",
            "The federal district judge ruled that corporate defendants had systematically engaged in anti-competitive mergers, holding that \"antitrust compliance must remain inviolable.\" (El juez de distrito federal dictaminó que los acusados corporativos habían participado sistemáticamente en fusiones anticompetitivas, sosteniendo que \"el cumplimiento de las normas antimonopolio debe permanecer inviolable\").",
            "The administration insists that each signatory nation eliminate non-tariff trade barriers before the upcoming Asia-Pacific economic forum convenes. (La administración insiste en que cada nación signataria elimine las barreras comerciales no arancelarias antes de que se reúna el próximo foro económico de Asia-Pacífico).",
            "The legal counsel filed an emergency motion to quash the congressional subpoena on grounds of executive privilege. (El asesor jurídico presentó una moción de emergencia para anular la citación del Congreso por motivos de privilegio del ejecutivo)."
        ],
        examples_uk=[
            "The Foreign, Commonwealth and Development Office have instructed the high commissioner to lodge an unequivocal protest regarding maritime demarcation violations. (La Cancillería británica ha instruido al alto comisionado a interponer una protesta inequívoca concerniente a las violaciones de demarcación marítima).",
            "The High Court of Justice determined that the statutory instrument was ultra vires, declaring that 'parliamentary sovereignty cannot be compromised by ministerial decree'. (El Tribunal Superior de Justicia determinó que el instrumento estatutario era extralimitado de poder, declarando que 'la soberanía parlamentaria no puede verse comprometida por decreto ministerial').",
            "Her Majesty's Government recommended that the international peacekeeping contingent should be deployed along the disputed ceasefire corridor. (El Gobierno de Su Majestad recomendó que el contingente internacional de mantenimiento de la paz fuera desplegado a lo largo del corredor disputado del alto el fuego).",
            "The permanent secretary tendered his resignation to the Prime Minister following revelations before the parliamentary public accounts committee. (El secretario permanente presentó su dimisión ante el Primer Ministro tras las revelaciones ante la comisión parlamentaria de cuentas públicas)."
        ],
        dialogue=[
            {"speaker": "Embajador de Estados Unidos ante la ONU (Dr. Sterling)", "text": "Our delegation has finalized the draft resolution: 'The Security Council mandates that the rogue state cease all uranium enrichment immediately.' We anticipate a vote before the General Assembly recess.", "translation": "Nuestra delegación ha finalizado el borrador de resolución: 'El Consejo de Seguridad ordena que el estado forajido cese todo enriquecimiento de uranio de inmediato'. Anticipamos una votación antes del receso de la Asamblea General."},
            {"speaker": "Representante Permanente del Reino Unido (Dra. Vance)", "text": "Whitehall have reviewed the text. With the greatest respect, our legal advisors recommend inserting 'should cease', or alternatively, framing the cessation within chapter six conciliatory protocols to ensure security council consensus.", "translation": "Whitehall ha revisado el texto. Con el mayor respeto, nuestros asesores jurídicos recomiendan insertar 'should cease', o alternativamente, encuadrar el cese dentro de los protocolos conciliatorios del capítulo seis para asegurar el consenso del consejo de seguridad."},
            {"speaker": "Embajador de Estados Unidos ante la ONU (Dr. Sterling)", "text": "Notice how seamlessly we calibrate: American definitive mandate syntax paired with British diplomatic understatements to forge multilateral solidarity.", "translation": "Observe con qué fluidez calibramos: la sintaxis estadounidense de mandato definitivo emparejada con la atenuación diplomática británica para forjar una solidaridad multilateral."},
            {"speaker": "Representante Permanente del Reino Unido (Dra. Vance)", "text": "Indeed. This is the ultimate fruition of English Mastery C2: wielding both great dialectal traditions with effortless authority, artistic nuance, and geopolitical efficacy.", "translation": "En efecto. Esta es la culminación definitiva de la Maestría en Inglés C2: blandir ambas grandes tradiciones dialectales con autoridad natural, matiz artístico y eficacia geopolítica."}
        ],
        mistakes=[
            "Mezclar las normas de puntuación de comillas británicas y estadounidenses en un mismo memorando diplomático.",
            "Usar terminología institucional cruzada (e.g. referirse al 'Foreign Secretary' de los Estados Unidos o al 'Secretary of State' como ministro de exteriores de Francia en vez de Canciller).",
            "Olvidar que en inglés formal británico la concordancia plural de entidades colectivas es una marca de alta distinción estilística y no un descuido gramatical.",
            "Desconocer el poder resolutivo de 'SHALL' frente a 'SHOULD' en la redacción de tratados multilaterales vinculantes."
        ],
        tips=[
            "Antes de redactar un informe internacional de alto nivel, define tu manual de estilo de referencia (e.g., The Chicago Manual of Style para US o The Oxford Guide to Style para UK) y no te desvíes ni un ápice de sus cánones.",
            "Comprueba la ortografía de tus palabras clave: defense/defence, license/licence, traveler/traveller, program/programme.",
            "Para un estilo global neutro y respetado universalmente, utiliza la convención ortográfica con 'ize' de Oxford ('organize', 'synthesize') combinada con sintaxis de mandato formal.",
            "¡Felicitaciones! Has completado el recorrido integral por los seis niveles del Marco Común Europeo de Referencia (A1 a C2), alcanzando una competencia lingüística de máxima excelencia."
        ]
    ))

    return lessons
