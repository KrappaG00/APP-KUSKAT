# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level C1 (Classes 11 to 20)
High-density pedagogical content ensuring >= 500 words per lesson.
"""
from lesson_utils import make_lesson

def get_c1_part2():
    lessons = []

    # ==========================================
    # C1 - CLASE 11: Metáforas Gramaticales y Nominalización en Prosa Académica
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_11",
        level="C1",
        category="Estilística Académica & Registro",
        title="Clase 11: Metáforas Gramaticales y Nominalización en Prosa Académica",
        explanation=(
            "La 'Nominalización' (Nominalisation) y el uso de 'Metáforas Gramaticales' (Grammatical Metaphor, concepto acuñado por M.A.K. Halliday "
            "en la lingüística sistémico-funcional) representan la transición definitiva de la comunicación conversacional congruente hacia "
            "el registro de alta densidad conceptual característico de la prosa académica, los informes técnicos y la literatura científica C1.\n\n"
            "En la expresión cotidiana (modo congruente), las acciones se representan mediante verbos, las cualidades mediante adjetivos y las "
            "personas o cosas mediante sustantivos ('Because the population increased rapidly, the government could not supply enough clean water'). "
            "Por el contrario, en la prosa académica avanzada, los procesos y atributos se empaquetan en estructuras nominales complejas "
            "(modo metafórico), convirtiendo verbos en sustantivos abstractos ('The rapid demographic expansion precipitated a severe municipal "
            "water scarcity').\n\n"
            "Ventajas estilísticas y discursivas de la nominalización en C1:\n"
            "1. Condensación y Economía Informativa: Permite empaquetar cláusulas extensas en frases nominales densas que funcionan como sujeto u objeto.\n"
            "2. Progresión Temática Coherente (Theme-Rheme Progression): Una idea introducida al final de una oración como rema puede ser recuperada "
            "al inicio de la siguiente como tema nominalizado ('...technologies deteriorate rapidly. This technological deterioration, in turn, fuels...').\n"
            "3. Despersonalización e Imparcialidad Científica: Elimina los agentes personales ('I discovered' o 'We investigated'), enfocando el análisis "
            "en el fenómeno objetivo ('Empirical investigation revealed...').\n\n"
            "No obstante, el escritor avanzado debe evitar la 'ultranominalización' opaca o asfixiante, manteniendo un equilibrio rítmico mediante verbos "
            "analíticos dinámicos como 'precipitate', 'undermine', 'engender', 'exacerbate' y 'catalyze'."
        ),
        rules=[
            "Empaquetamiento Clausal en Sintagma Nominal: Transforma oraciones subordinadas causales o temporales en grupos nominales precedidos o seguidos de preposiciones. 'Because temperatures rose' ➔ 'Thermal escalation led to...'.",
            "Sustitución de Verbos Débiles por Verbos Relacionales Precisos: Al nominalizar, no uses 'be' o 'have'; selecciona verbos causativos académicos: 'yield', 'facilitate', 'trigger', 'foster', 'diminish'.",
            "Modificación Pre y Posnominal Sofisticada: Enriquece el sustantivo núcleo con adjetivos clasificadores previos y sintagmas preposicionales posteriores: 'unprecedented fiscal volatility across peripheral markets'.",
            "Mantenimiento de la Claridad Sintáctica: Evita encadenar más de tres o cuatro frases preposicionales consecutivas con 'of' ('the examination of the calculation of the depreciation of the asset' ➔ 'the algorithmic assessment of asset depreciation')."
        ],
        examples_us=[
            "The relentless escalation of geopolitical tensions across the Taiwan Strait has precipitated extensive semiconductor supply chain realignments. (La incesante escalada de tensiones geopolíticas a través del Estrecho de Taiwán ha precipitado extensos reajustes en la cadena de suministro de semiconductores).",
            "Algorithmic execution of high-frequency trades engendered instantaneous liquidity evaporation during the morning market opening. (La ejecución algorítmica de operaciones de alta frecuencia provocó una evaporación instantánea de la liquidez durante la apertura matutina del mercado).",
            "Substantial divergence between consumer expectations and actual purchasing power underscores prevailing domestic macroeconomic fragility. (La divergencia sustancial entre las expectativas del consumidor y el poder adquisitivo real subraya la imperante fragilidad macroeconómica interna).",
            "Prolonged exposure to ionizing radiation resulted in progressive cellular senescence and irreversible genetic mutagenesis. (La exposición prolongada a radiación ionizante resultó en una progresiva senescencia celular y mutagénesis genética irreversible)."
        ],
        examples_uk=[
            "The gradual decentralisation of National Health Service budgetary oversight fostered notable disparities in regional healthcare provision. (La gradual descentralización de la supervisión presupuestaria del Servicio Nacional de Salud propició notables disparidades en la prestación sanitaria regional).",
            "Rigorous enforcement of environmental carbon compliance levies provoked widespread discontent among independent haulage contractors. (La rigurosa aplicación de gravámenes por cumplimiento ambiental de carbono provocó un descontento generalizado entre los transportistas independientes).",
            "Systematic underinvestment in civil rail infrastructure undermined domestic passenger transit reliability across northern urban corridors. (La sistemática falta de inversión en infraestructura ferroviaria civil menoscabó la fiabilidad del transporte de pasajeros en los corredores urbanos del norte).",
            "The unexpected postponement of statutory judicial reviews elicited intense parliamentary scrutiny regarding executive transparency. (El aplazamiento imprevisto de las revisiones judiciales estatutarias suscitó un intenso escrutinio parlamentario sobre la transparencia del ejecutivo)."
        ],
        dialogue=[
            {"speaker": "Catedrático de Sociología (Prof. Vance)", "text": "Notice how the author replaces 'people migrated to urban centers because jobs disappeared in rural areas' with 'rural economic desolation stimulated massive urban agglomeration'.", "translation": "Observe cómo el autor sustituye 'la gente migró a centros urbanos porque desaparecieron los empleos en áreas rurales' por 'la desolación económica rural estimuló una masiva aglomeración urbana'."},
            {"speaker": "Investigador Doctoral (Dr. Sterling)", "text": "Precisely. The nominalisation of both cause and consequence compresses two discursive clauses into a single authoritative predicate.", "translation": "Precisamente. La nominalización tanto de la causa como de la consecuencia comprime dos cláusulas discursivas en un único predicado autoritario."},
            {"speaker": "Catedrático de Sociología (Prof. Vance)", "text": "Indeed, but beware of excessive conceptual density; lexical opacity must never supersede interpretative lucidity.", "translation": "En efecto, pero cuídate de una densidad conceptual excesiva; la opacidad léxica nunca debe prevalecer sobre la lucidez interpretativa."},
            {"speaker": "Investigador Doctoral (Dr. Sterling)", "text": "I shall temper my drafting: pairing robust nominal clusters with incisive relational verbs will preserve analytical dynamism.", "translation": "Atemperaré mi redacción: combinar grupos nominales robustos con verbos relacionales incisivos preservará el dinamismo analítico."}
        ],
        mistakes=[
            "Abuso de la preposición 'of' en cadenas nominales interminables (Error: 'The creation of a plan for the implementation of the rule'; Corrección: 'The strategic execution of statutory guidelines').",
            "Perder el sujeto real o generar oraciones desprovistas de acción identificable (Nominalization trap: 'The occurrence of an event was observed' en lugar de 'The chemical reaction occurred instantaneously').",
            "Olvidar ajustar la concordancia singular/plural del verbo con el sustantivo abstracto núcleo y no con los modificadores secundarios.",
            "Traducir directamente giros nominales arcaicos del español administrativo ('En virtud de lo establecido en...' ➔ 'Pursuant to statutory provisions...')."
        ],
        tips=[
            "En tu tesis o ensayo C1, revisa los párrafos donde aparezcan demasiados conectores causales ('because', 'so', 'since') y transfórmalos en oraciones con sustantivos de proceso ('X catalyzed Y').",
            "Utiliza verbos de alta precisión argumentativa: 'mitigate', 'exacerbate', 'dismantle', 'instigate', 'corroborate'.",
            "Aplica la técnica de empaquetamiento temático: el predicado final de tu primera oración debe convertirse en el sujeto nominalizado de la siguiente.",
            "Lee artículos de revistas de revisión por pares (Peer-reviewed journals como Nature o The Lancet) para internalizar la densidad léxica nominal sin perder elegancia."
        ]
    ))

    # ==========================================
    # C1 - CLASE 12: Inversión Locativa y Preposicional (DOWN CAME THE RAIN)
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_12",
        level="C1",
        category="Inversión Literaria & Espacial",
        title="Clase 12: Inversión Locativa y Preposicional (DOWN CAME THE RAIN)",
        explanation=(
            "La Inversión Locativa, Direccional o Preposicional (Locative / Directional / Prepositional Inversion o Inversión Completa Sujeto-Verbo) "
            "es una estructura de gran prestigio estilístico y arraigo literario en inglés avanzado. A diferencia de la inversión negativa con operadores "
            "auxiliares ('Never did I see...'), la inversión locativa traslada el VERBO PRINCIPAL COMPLETO delante del sujeto cuando un adverbio de dirección, "
            "movimiento o una frase preposicional de lugar se antepone al inicio de la cláusula.\n\n"
            "Ejemplos canónicos del fenómeno:\n"
            "- 'Down came the torrential rain' (Abajo cayó la lluvia torrencial).\n"
            "- 'Along the corridor walked the solitary figure of the chancellor' (A lo largo del pasillo caminaba la figura solitaria del canciller).\n"
            "- 'Into the valley of death rode the six hundred' (Hacia el valle de la muerte cabalgaron los seiscientos).\n"
            "- 'On the summit stands an ancient astronomical observatory' (En la cumbre se erige un antiguo observatorio astronómico).\n\n"
            "Restricciones Sintácticas Cruciales:\n"
            "1. Restricción Pronominal Inquebrantable (Pronoun Constraint):\n"
            "Si el sujeto de la oración es un PRONOMBRE PERSONAL (he, she, it, they, we), la inversión verbal queda ESTRICTAMENTE PROHIBIDA. "
            "El pronombre debe preceder al verbo obligatoriamente:\n"
            "- Con sustantivo: 'Down came the rain' (Inversión V + S).\n"
            "- Con pronombre: 'Down it came' (Orden normal S + V; 'Down came it' es agramatical en inglés moderno).\n\n"
            "2. Clases de Verbos Admitidos:\n"
            "Esta estructura solo opera con verbos intransitivos de movimiento (come, go, fly, run, walk, march) o verbos estativos de posición "
            "y existencia (stand, lie, sit, hang, remain). Verbos transitivos con objeto directo jamás admiten inversión locativa ('Into the room "
            "he carried the books', NUNCA 'Into the room carried he the books')."
        ),
        rules=[
            "Inversión Verbal Completa: El verbo léxico principal transmuta con el sujeto sustantivo sin recurrir a 'do / does / did'. Ejemplo: 'Round the corner sped the police vehicle' (no 'did speed').",
            "La Regla de Oro del Pronombre Personal: Si el sujeto es un pronombre (he, she, it, they, etc.), NO hay inversión. 'Away they flew' / 'Out he stepped'. Violar esta regla es un error garrafal en C1.",
            "Restricción de Transitividad: Únicamente son válidos los verbos intransitivos de locación (stand, sit, lie) o desplazamiento físico (rush, burst, drift, gallop). Los verbos transitivos quedan excluidos.",
            "Función Pragmática de Presentación (Presentational Focus): Se utiliza para introducir un nuevo personaje, objeto imponente o escenario teatral en el clímax narrativo o descriptivo."
        ],
        examples_us=[
            "Through the automated security doors marched the tactical federal agents in full ballistic gear. (A través de las puertas de seguridad automatizadas marcharon los agentes federales tácticos con equipo balístico completo).",
            "At the epicenter of the economic collapse stood an unregulated shadow banking institution. (En el epicentro del colapso económico se erigía una institución bancaria en la sombra no regulada).",
            "Up rose the stock index as soon as tech earnings surpassed institutional Wall Street forecasts. (Hacia arriba se disparó el índice bursátil tan pronto como las ganancias tecnológicas superaron las previsiones institucionales de Wall Street).",
            "Out of the conference room rushed the corporate attorneys; away they hurried toward the federal courthouse. (Fuera de la sala de conferencias se precipitaron los abogados corporativos; de prisa se alejaron hacia el tribunal federal)."
        ],
        examples_uk=[
            "Along the historic bank of the River Thames sat dozens of civil servants reviewing classified treaty dossiers. (A lo largo de la ribera histórica del río Támesis se sentaban decenas de funcionarios públicos revisando expedientes clasificados de tratados).",
            "Beneath the medieval stone arches lay the ancestral sepulchres of early Plantagenet monarchs. (Bajo los arcos medievales de piedra yacían los sepulcros ancestrales de los primeros monarcas Plantagenet).",
            "Down plummeted the market valuation of the sterling currency following the emergency fiscal declaration. (Cuesta abajo se desplomó la valoración de mercado de la libra esterlina tras la declaración fiscal de emergencia).",
            "Into the House of Lords stepped the Lord Chancellor; forward he walked to deliver the sovereign's speech. (Hacia el interior de la Cámara de los Lores ingresó el Lord Canciller; hacia adelante caminó para pronunciar el discurso del soberano)."
        ],
        dialogue=[
            {"speaker": "Crítico Literario (Dr. Calder)", "text": "Observe the cadence of the opening chapter: 'From the dense mist emerged the naval dreadnought'. The locative inversion creates immediate cinematic suspense.", "translation": "Observe la cadencia del capítulo introductorio: 'De la densa niebla emergió el acorazado naval'. La inversión locativa crea un suspenso cinematográfico inmediato."},
            {"speaker": "Editora en Jefe (Dra. Lowe)", "text": "Indeed, but in paragraph three, the author writes 'Down fell it into the abyss'. That is an egregious violation of the pronoun constraint.", "translation": "En efecto, pero en el párrafo tres, el autor escribe 'Down fell it into the abyss'. Esa es una violación flagrante de la restricción pronominal."},
            {"speaker": "Crítico Literario (Dr. Calder)", "text": "Quite right! It must be corrected to 'Down it fell into the abyss'. Pronouns reject inverted post-verbal positioning in modern English.", "translation": "¡Completamente de acuerdo! Debe corregirse a 'Down it fell into the abyss'. Los pronombres rechazan el posicionamiento postverbal invertido en el inglés moderno."},
            {"speaker": "Editora en Jefe (Dra. Lowe)", "text": "Beyond the cathedral walls stood the ruins of the monastic cloister; there lay centuries of undisturbed heritage.", "translation": "Más allá de los muros de la catedral se alzaban las ruinas del claustro monástico; allí yacían siglos de patrimonio imperturbado."}
        ],
        mistakes=[
            "Invertir la oración cuando el sujeto es un pronombre (Error catastrófico: 'Up went it'; Corrección obligatoria: 'Up IT WENT').",
            "Insertar 'did' o 'do' en una inversión locativa (Error: 'Down did fall the tree'; Corrección: 'Down FELL the tree').",
            "Intentar invertir verbos transitivos con objeto directo (Error: 'Into the room carried John the parcel'; Corrección: 'Into the room John carried the parcel').",
            "Utilizar verbos dinámicos no locativos ni de movimiento en este esquema (Error: 'In the corner cried the child'; Corrección: 'In the corner the child was crying', salvo usos líricos poéticos arcaizantes)."
        ],
        tips=[
            "Regla nemotécnica del pronombre: 'Nombres sustantivos se invierten (Down went the king), pronombres se quedan quietos (Down he went)'.",
            "En crónicas periodísticas, descripciones de viajes de alto nivel o prosa biográfica, este recurso aporta frescura y textura sensorial.",
            "Comprueba siempre que el verbo seleccionado sea intransitivo antes de permutarlo con el sujeto.",
            "Combina adverbios de partículas direccionales (up, down, away, off, in, out) con preposiciones espaciales (along, beneath, across)."
        ]
    ))

    # ==========================================
    # C1 - CLASE 13: Cláusulas de Participio con Sujeto Propio y Prevención de Dangling Participles
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_13",
        level="C1",
        category="Sintaxis de Cláusulas Reducidas",
        title="Clase 13: Cláusulas de Participio con Sujeto Propio y Prevención de Dangling Participles",
        explanation=(
            "Las cláusulas de participio (Participle Clauses) son herramientas sintácticas de economía y sofisticación en C1 que condensan "
            "oraciones coordinadas o subordinadas temporales, causales y concesivas. Sin embargo, su empleo descuidado genera uno de los "
            "vicios estilísticos más severamente penalizados en la redacción formal: el 'participio colgante' o 'desconectado' (Dangling / "
            "Misrelated Participle).\n\n"
            "El principio gramatical fundamental estipula que en una cláusula de participio reducida estándar (sin sujeto explícito), el sujeto "
            "tácito de la cláusula de participio DEBE ser idéntico al sujeto gramatical de la cláusula principal subsiguiente:\n"
            "- Correcto: 'Walking through the laboratory, the researcher noticed a temperature fluctuation' (El investigador caminaba y él notó).\n"
            "- Incorrecto (Dangling): 'Walking through the laboratory, the fire alarm sounded' (¡La alarma de incendios no caminaba por el laboratorio!).\n\n"
            "Cláusulas Absolutas de Participio (Nominative Absolute Construction):\n"
            "Cuando la cláusula subordinada de participio posee un sujeto lógicamente distinto del sujeto de la cláusula principal, es OBLIGATORIO "
            "que conserve su propio sujeto expreso de forma autónoma. Esta estructura se denomina 'Cláusula Absoluta' (Absolute Clause) y "
            "representa la cúspide de la elegancia sintáctica:\n"
            "- 'The stock exchange having closed, investors gathered to assess their losses' (Habiendo cerrado la bolsa de valores, los inversionistas "
            "se reunieron para evaluar sus pérdidas).\n"
            "- 'Weather permitting, the transatlantic orbital launch will proceed at dawn' (Si el clima lo permite, el lanzamiento orbital trasatlántico "
            "procederá al amanecer).\n"
            "- 'All negotiations having collapsed, diplomatic representatives vacated the embassy' (Habiendo fracasado todas las negociaciones, "
            "los representantes diplomáticos desalojaron la embajada)."
        ),
        rules=[
            "Co-referencia de Sujeto en Cláusulas Reducidas: Si el participio no tiene sujeto expreso, su sujeto implícito se asigna automáticamente al sujeto de la oración principal. Si no coinciden, se comete un 'dangling participle'.",
            "Cláusula Absoluta con Sujeto Independiente: Para expresar causa o tiempo con sujetos dispares, antepón el sustantivo al participio: '[Sujeto A] + [Participio (-ing / -ed / having done)], [Sujeto B] + [Verbo conjugado]'.",
            "Participio Perfecto para Anterioridad Causal: 'Having + participio' indica que la acción del participio concluyó antes de que iniciara la acción principal: 'Having verified the data, the auditor signed the ledger'.",
            "Participios Preposicionales Exentos (Unattached Participles Aceptados): Ciertos participios han evolucionado hacia preposiciones o conectores discursivos neutros y no se consideran colgantes: 'considering', 'judging by', 'providing', 'strictly speaking'."
        ],
        examples_us=[
            "Having reviewed the encrypted server logs, the cybersecurity team identified the point of foreign malware injection. (Habiendo revisado los registros encriptados del servidor, el equipo de ciberseguridad identificó el punto de inyección de malware extranjero).",
            "The judicial injunction having been vacated by the appellate panel, real estate construction resumed along the waterfront. (Habiendo sido revocada la medida cautelar judicial por el panel de apelaciones, la construcción inmobiliaria se reanudó a lo largo del litoral).",
            "Barring unforeseen geopolitical disruptions, domestic interest rates will stabilize throughout the upcoming quarter. (Salvo perturbaciones geopolíticas imprevistas, las tasas de interés nacionales se estabilizarán a lo largo del próximo trimestre).",
            "Strictly speaking, the acquisition contract had expired before shareholders voted upon the revised restructuring agreement. (Estrictamente hablando, el contrato de adquisición había expirado antes de que los accionistas votaran sobre el acuerdo de reestructuración revisado)."
        ],
        examples_uk=[
            "The parliamentary session having been prorogued by Royal Commission, MPs returned to their respective constituencies. (Habiendo sido suspendida la sesión parlamentaria por la Comisión Real, los parlamentarios regresaron a sus respectivas circunscripciones).",
            "Having scrutinized the audited accounts of the rail enterprise, the transport secretary announced statutory renationalisation. (Habiendo examinado las cuentas auditadas de la empresa ferroviaria, el ministro de transporte anunció la renacionalización estatutaria).",
            "Time permitting, the select committee will cross-examine regulatory ombudsmen concerning regional water contamination. (Si el tiempo lo permite, la comisión parlamentaria interrogará a los defensores regulatorios respecto a la contaminación regional del agua).",
            "Given the escalating cost of nuclear decommissioning, the Chancellor reallocated contingency infrastructure reserves. (Dado el costo creciente del desmantelamiento nuclear, el Ministro de Hacienda reasignó las reservas de contingencia de infraestructura)."
        ],
        dialogue=[
            {"speaker": "Directora de Tesis (Dra. Vance)", "text": "Look at this sentence in your literature review: 'Upon entering the archive, several medieval codices were damaged'. Who entered the archive? The codices?", "translation": "Mira esta oración en tu revisión de literatura: 'Al entrar al archivo, varios códices medievales se dañaron'. ¿Quién entró al archivo? ¿Los códices?"},
            {"speaker": "Candidato a Doctor (Dr. Sterling)", "text": "A classic dangling participle! I should have written: 'Upon entering the archive, researchers discovered that several medieval codices were damaged'.", "translation": "¡Un clásico participio colgante! Debí haber escrito: 'Al entrar al archivo, los investigadores descubrieron que varios códices medievales estaban dañados'."},
            {"speaker": "Directora de Tesis (Dra. Vance)", "text": "Precisely. Alternatively, employ a nominative absolute: 'Archival climate controls having malfunctioned, several medieval codices suffered degradation'.", "translation": "Exactamente. O bien emplea un absoluto nominativo: 'Habiendo fallado los controles climáticos del archivo, varios códices medievales sufrieron degradación'."},
            {"speaker": "Candidato a Doctor (Dr. Sterling)", "text": "That reformulation is much more elegant. It maintains syntactic integrity while establishing clear causal attribution.", "translation": "Esa reformulación es mucho más elegante. Mantiene la integridad sintáctica al tiempo que establece una clara atribución causal."}
        ],
        mistakes=[
            "Escribir participios colgantes donde la acción parece realizada por un objeto inanimado ('Having eaten dinner, the dishes were washed' ➔ ¡Los platos no cenaron!).",
            "Omitir el 'having' cuando se requiere evidenciar que una acción precedió a la otra (Error: 'Finishing the report, he sent it' ➔ Corrección formal: 'HAVING FINISHED the report, he sent it').",
            "Puntuar incorrectamente la cláusula absoluta olvidando aislarla mediante coma de la proposición principal.",
            "Confundir la voz pasiva del participio con la activa ('Having examined' = habiendo examinado; 'Having been examined' = habiendo sido examinado)."
        ],
        tips=[
            "Prueba de oro del sujeto: Siempre que escribas una frase que empiece con participio (-ing o -ed), pregúntate inmediatamente: ¿Quién realiza la acción de este verbo? La respuesta DEBE ser la primera palabra del sujeto que sigue a la coma.",
            "Domina las fórmulas absolutas consagradas: 'Weather permitting', 'God willing', 'All things considered', 'That being said'.",
            "Para un estilo académico intachable, recurre a 'Having been + participio pasado' para resumir antecedentes procesales o metodológicos pasivos.",
            "Utiliza cláusulas de participio para aligerar textos sobrecargados de conjunciones 'because', 'as' o 'while'."
        ]
    ))

    # ==========================================
    # C1 - CLASE 14: Marcadores de Discurso Escrito Formal: INASMUCH AS, NOTWITHSTANDING
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_14",
        level="C1",
        category="Conectores de Registro Culto",
        title="Clase 14: Marcadores de Discurso Escrito Formal: INASMUCH AS, NOTWITHSTANDING",
        explanation=(
            "La arquitectura cohesiva de un texto de nivel C1 se sustenta en marcadores discursivos y conectores de registro culto "
            "que articulan relaciones lógicas de causa, concesión, adición, condición y reformulación con absoluta exactitud analítica. "
            "Vocablos como 'inasmuch as', 'notwithstanding', 'insofar as', 'heretofore', 'whereby' y 'albeit' pertenecen a la esfera "
            "del discurso institucional, la jurisprudencia anglosajona, los tratados diplomáticos y los ensayos filosóficos de máxima exigencia.\n\n"
            "Análisis Sintáctico y Semántico de Conectores Clave:\n"
            "1. 'Inasmuch as' / 'Insofar as' (En la medida en que / Puesto que):\n"
            "Introduce una cláusula subordinada causal o de alcance restrictivo. 'Inasmuch as the defendant had full foreknowledge of the hazardous "
            "contaminant, corporate liability is indisputable' (En la medida en que el demandado tenía pleno conocimiento previo del contaminante "
            "peligroso, la responsabilidad corporativa es indiscutible).\n\n"
            "2. 'Notwithstanding' (A pesar de / No obstante / Sin perjuicio de):\n"
            "Posee una extraordinaria versatilidad sintáctica; puede funcionar como:\n"
            "- Preposición antepuesta o pospuesta a un sintagma nominal: 'Notwithstanding the inclement weather' o 'The inclement weather notwithstanding'.\n"
            "- Conjunción subordinante mediante 'notwithstanding that': 'Notwithstanding that interest rates surged, mortgage demand persisted'.\n"
            "- Adverbio o conector oracional: 'The board opposed the merger; notwithstanding, the CEO pressed ahead'.\n\n"
            "3. 'Albeit' (Si bien / Aunque bien):\n"
            "Proviene de la fusión etimológica del inglés medio 'al be it' (all though it be). Introduce una concesión subordinada condensada "
            "seguida directamente de adjetivos, frases adverbiales o sintagmas preposicionales, SIN cláusula con verbo conjugado propio: "
            "'A commendable, albeit costly, initiative' (Una iniciativa encomiable, si bien costosa).\n\n"
            "4. 'Whereby' (Por el cual / Mediante el cual):\n"
            "Conector relativo instrumental: 'A regulatory framework whereby sovereign states report domestic emissions annually'."
        ),
        rules=[
            "Posición Sintáctica Dual de 'Notwithstanding': Puede situarse antes o después del sustantivo que modifica: 'Notwithstanding these objections' = 'These objections notwithstanding'.",
            "Uso Reducido de 'Albeit': 'Albeit' no admite una cláusula completa con sujeto y verbo auxiliar; se combina directamente con modificadores adjetivales o adverbiales ('albeit somewhat reluctantly').",
            "'Inasmuch as' Rige Causa Justificativa: Se emplea cuando la causa es una premisa demostrada o acordada por ambas partes, similar al latín 'quatenus'.",
            "'Whereby' Introduce Procesos y Métodos: Equivale exactamente a 'by which' o 'through which'; rige oraciones completas que describen el funcionamiento de leyes, sistemas, convenios o metodologías."
        ],
        examples_us=[
            "Inasmuch as the commercial bank failed to preserve minimum capital tier reserves, regulatory seizure was statutorily mandated. (En la medida en que el banco comercial no mantuvo las reservas de capital de nivel mínimo, la intervención regulatoria fue obligatoria por estatuto).",
            "Notwithstanding fierce opposition from automotive lobbyists, the federal government codified rigorous electric vehicle emission standards. (A pesar de la feroz oposición de los grupos de presión automotrices, el gobierno federal codificó rigurosas normas de emisión para vehículos eléctricos).",
            "The Federal Reserve achieved a noticeable, albeit precarious, decelerating trend in core consumer price inflation metrics. (La Reserva Federal logró una desaceleración notable, si bien precaria, en las métricas de inflación subyacente de precios al consumidor).",
            "The administration enacted a comprehensive treaty whereby signatory nations share intelligence on international ransomware syndicates. (La administración promulgó un tratado integral mediante el cual las naciones signatarias comparten inteligencia sobre cárteles internacionales de ransomware)."
        ],
        examples_uk=[
            "Insofar as parliamentary sovereignty remains the cornerstone of the British constitution, international treaties require domestic statutory incorporation. (En la medida en que la soberanía parlamentaria sigue siendo la piedra angular de la constitución británica, los tratados internacionales requieren incorporación estatutaria interna).",
            "Substantial budget deficits notwithstanding, the Chancellor pledged to preserve sovereign capital infrastructure investments across Scotland. (A pesar de los sustanciales déficits presupuestarios, el Ministro de Hacienda se comprometió a preservar las inversiones en infraestructura de capital soberano en Escocia).",
            "The trade delegation reported meaningful, albeit modest, progress concerning reciprocal agricultural market access quotas. (La delegación comercial reportó avances significativos, si bien modestos, respecto a las cuotas recíprocas de acceso al mercado agrícola).",
            "The statutory instrument establishes an independent tribunal whereby aggrieved taxpayers may lodge formal appeals against customs assessments. (El instrumento estatutario establece un tribunal independiente mediante el cual los contribuyentes agraviados pueden interponer recursos formales contra las liquidaciones aduaneras)."
        ],
        dialogue=[
            {"speaker": "Consejero Constitucional (Dr. Sterling)", "text": "Inasmuch as the municipal ordinance violates statutory provisions of the Local Government Act, it is ultra vires and void.", "translation": "En la medida en que la ordenanza municipal contraviene las disposiciones estatutarias de la Ley de Gobierno Local, es ultra vires y nula."},
            {"speaker": "Procurador General (Dr. Vance)", "text": "Notwithstanding that clear statutory contradiction, the municipal council has refused to rescind the contested congestion charge.", "translation": "A pesar de esa clara contradicción estatutaria, el concejo municipal se ha negado a revocar la tasa por congestión impugnada."},
            {"speaker": "Consejero Constitucional (Dr. Sterling)", "text": "We have drafted an interim petition, albeit one tailored exclusively to preserve public transport subsidization during appeal.", "translation": "Hemos redactado una petición provisional, si bien adaptada exclusivamente para preservar los subsidios al transporte público durante la apelación."},
            {"speaker": "Procurador General (Dr. Vance)", "text": "Let us establish a mechanism whereby administrative compliance can be monitored on a fortnightly basis.", "translation": "Establezcamos un mecanismo mediante el cual se pueda monitorear el cumplimiento administrativo de forma quincenal."}
        ],
        mistakes=[
            "Seguir 'albeit' de una cláusula con sujeto y verbo completo (Error: 'He accepted the offer, albeit he was unhappy'; Corrección: 'He accepted the offer, ALBEIT UNHAPPY' o 'albeit somewhat reluctantly').",
            "Confundir 'inasmuch as' (causal/de alcance) con 'whereas' (contraste directo).",
            "Colocar 'notwithstanding' seguido de 'of' (Error: 'Notwithstanding of the warnings'; Corrección: 'NOTWITHSTANDING the warnings').",
            "Usar 'whereby' como sinónimo genérico de 'where' en contextos físicos espaciales ('The house whereby he lived' es incorrecto; debe ser 'where he lived')."
        ],
        tips=[
            "Para impresionar al tribunal evaluador de un examen C1/C2, sustituye 'although' por 'albeit + adjetivo' cuando desees calificar o matizar un adjetivo: 'an innovative, albeit expensive, paradigm'.",
            "Prueba a colocar 'notwithstanding' al final de la frase nominal ('His initial reluctance notwithstanding, ...'); este giro pospuesto denota una erudición lingüística consumada.",
            "Utiliza 'whereby' al definir metodologías, algoritmos o protocolos en tu redacción científica o corporativa.",
            "Recuerda que 'inasmuch as' aporta un tono solemne de justificación jurídica irrebatible."
        ]
    ))

    # ==========================================
    # C1 - CLASE 15: Condicionales Invertidos de 3er Grado con Negación: HAD IT NOT BEEN FOR...
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_15",
        level="C1",
        category="Condicionales Avanzados",
        title="Clase 15: Condicionales Invertidos de 3er Grado con Negación: HAD IT NOT BEEN FOR...",
        explanation=(
            "La omisión de la conjunción condicional 'IF' mediante inversión auxiliar es una de las rúbricas estilísticas más notorias del "
            "nivel C1. En el tercer condicional (Third Conditional), la hipótesis contrafáctica referida al pasado se formula ordinariamente como "
            "'If [sujeto] had [participio]...'. Al aplicar la inversión formal, la partícula 'if' se suprime por completo y el auxiliar 'HAD' "
            "se traslada al inicio absoluto de la cláusula condicional: 'Had [sujeto] [participio]...'.\n\n"
            "Sin embargo, el verdadero virtuosismo sintáctico surge al construir CONDICIONALES INVERTIDOS NEGATIVOS, en particular la célebre fórmula "
            "de atribución causal contrafáctica:\n"
            "'HAD IT NOT BEEN FOR + [Sintagma Nominal], [Sujeto] + WOULD / COULD / MIGHT HAVE + [Participio Pasado]'.\n"
            "Esta estructura equivale exactamente a 'De no haber sido por...' o 'A no ser por...', y se utiliza para identificar el factor o "
            "circunstancia decisiva cuya presencia o ausencia alteró radicalmente el curso de los acontecimientos pasados.\n\n"
            "Reglas de Oro de la Sintaxis Negativa Invertida:\n"
            "1. Posición Invariable de la Partícula 'NOT':\n"
            "En la inversión negativa condicional formal, la negación NUNCA se contrae con el auxiliar al frente de la oración. 'Hadn't it been for' "
            "se considera un error grave o un coloquialismo inaceptable en prosa formal. La estructura prescriptiva es inalterable:\n"
            "- CORRECTO: 'HAD IT NOT BEEN FOR the whistleblower's testimony...'\n"
            "- AGRAMATICAL: 'Hadn't it been for...'\n"
            "2. Inversión Condicional Mixta:\n"
            "La apódosis (cláusula de resultado) puede vincularse con el presente mediante un condicional mixto: 'Had it not been for his prompt "
            "medical intervention, the patient WOULD NOT BE ALIVE today' (De no haber sido por su pronta intervención médica, el paciente no estaría vivo hoy).\n\n"
            "Variante de Segundo Condicional Hipotético Presente:\n"
            "'WERE IT NOT FOR + [Sintagma Nominal], [Sujeto] + WOULD + [Verbo base]' (De no ser por su ayuda actual, estaríamos arruinados)."
        ),
        rules=[
            "Prohibición de Contracción 'Hadn't': El operador auxiliar y la partícula 'not' se disocian obligatoriamente; 'had' abre la oración y 'not' se sitúa después del sujeto: 'Had [sujeto] NOT [verbo]' (nunca 'Hadn't [sujeto]...').",
            "Complementación con Sintagma Nominal o Gerundio: 'Had it not been for' va seguido de un sustantivo, pronombre o gerundio ('Had it not been for his intervention' / 'Had it not been for having secured financing').",
            "Equivalencia con 'But for': 'But for' es la variante preposicional ultracondensada que comparte idéntico significado: 'But for the captain's skill, the vessel would have foundered' = 'Had it not been for the captain's skill...'.",
            "Distinción Temporal ('Had it not been for' vs. 'Were it not for'): 'Had it not been for' opera en el pasado (condicional 3 o mixto); 'Were it not for' opera en hipótesis del presente o condición permanente."
        ],
        examples_us=[
            "Had it not been for the Federal Reserve's emergency liquidity backstop, several mid-sized regional lenders would have faced systemic insolvency. (De no haber sido por el respaldo de liquidez de emergencia de la Reserva Federal, varios prestamistas regionales medianos habrían enfrentado insolvencia sistémica).",
            "Had the aerospace engineering team not identified the avionics telemetry glitch, the orbital satellite would have burned upon atmospheric reentry. (Si el equipo de ingeniería aeroespacial no hubiera identificado el fallo de telemetría de aviónica, el satélite orbital se habría quemado al reingresar a la atmósfera).",
            "Were it not for federal antitrust vigilance, the nationwide telecommunications marketplace would be monopolized by a single conglomerate. (De no ser por la vigilancia antimonopolio federal, el mercado nacional de telecomunicaciones estaría monopolizado por un solo conglomerado).",
            "Had it not been for decisive action by civilian emergency dispatchers, casualties during the flash flooding would have escalated exponentially. (De no haber sido por la acción decisiva de los operadores de emergencias civiles, las víctimas durante la inundación repentina habrían aumentado exponencialmente)."
        ],
        examples_uk=[
            "Had it not been for the Bank of England's intervention in the gilt market, occupational pension schemes would have collapsed within hours. (De no haber sido por la intervención del Banco de Inglaterra en el mercado de bonos soberanos, los planes de pensiones ocupacionales habrían quebrado en cuestión de horas).",
            "Had the permanent secretary not alerted parliamentary auditors, the procurement irregularities would have remained undetected indefinitely. (Si el secretario permanente no hubiera alertado a los auditores parlamentarios, las irregularidades de adquisición habrían permanecido indetectadas indefinidamente).",
            "Were it not for statutory legal aid provisions, vulnerable defendants would be denied equitable representation before the Crown Court. (De no ser por las disposiciones estatutarias de asistencia jurídica gratuita, a los acusados vulnerables se les negaría representación equitativa ante el Tribunal de la Corona).",
            "Had it not been for rigorous maritime quarantine protocols, the pathogen would have devastated livestock populations across the British Isles. (De no haber sido por los rigurosos protocolos de cuarentena marítima, el patógeno habría devastado las poblaciones de ganado en las Islas Británicas)."
        ],
        dialogue=[
            {"speaker": "Fiscal de Anticorrupción (Dra. Lowe)", "text": "Had it not been for the unredacted digital ledger leaked by the compliance officer, the offshore bribery network would have escaped prosecution.", "translation": "De no haber sido por el libro contable digital sin censura filtrado por la oficial de cumplimiento, la red de sobornos en ultramar habría eludido el enjuiciamiento."},
            {"speaker": "Investigador Especial (Dr. Sterling)", "text": "Indeed. And had foreign banking authorities not expedited mutual legal assistance treaties, the illicit funds would have been dissipated permanently.", "translation": "En efecto. Y si las autoridades bancarias extranjeras no hubieran acelerado los tratados de asistencia legal mutua, los fondos ilícitos se habrían disipado permanentemente."},
            {"speaker": "Fiscal de Anticorrupción (Dra. Lowe)", "text": "Were it not for our cross-border forensic collaboration today, corporate cartels would operate with utter impunity across international borders.", "translation": "De no ser por nuestra colaboración forense transfronteriza hoy en día, los cárteles corporativos operarían con total impunidad a través de las fronteras internacionales."},
            {"speaker": "Investigador Especial (Dr. Sterling)", "text": "Had the whistleblower not acted with such singular courage, none of this judicial accountability would be materializing.", "translation": "Si el denunciante no hubiera actuado con tal singular valentía, nada de esta rendición de cuentas judicial se estaría materializando."}
        ],
        mistakes=[
            "Contraer el auxiliar negativo al frente de la inversión (Error garrafal: 'Hadn't it been for the rain'; Corrección obligatoria: 'HAD IT NOT BEEN FOR the rain').",
            "Conservar 'if' al realizar la inversión (Error de doble marcación: 'If had I known'; Corrección: 'HAD I KNOWN' o 'If I had known').",
            "Confundir 'Had it not been for' (pasado) con 'Were it not for' (presente contrafáctico).",
            "Olvidar colocar 'have' tras el modal en la cláusula principal cuando la consecuencia se consumó en el pasado ('Had we left earlier, we would arrive on time' ➔ 'we WOULD HAVE ARRIVED on time')."
        ],
        tips=[
            "Memoriza la secuencia rítmica de 6 palabras: 'HAD - IT - NOT - BEEN - FOR'. Fluye con naturalidad aristocrática en discursos y ensayos.",
            "Si buscas una alternativa aún más sintética en el conteo de palabras de un examen, recurre a 'But for + [sustantivo]': 'But for his help, we would have failed'.",
            "Recuerda que en oraciones afirmativas invertidas, la estructura es simplemente 'Had [sujeto] [participio]': 'Had you informed us earlier, we could have intervened'.",
            "En el segundo condicional hipotético, aplica la misma fórmula con 'were': 'Were you to accept the tenure track, you would relocate to Cambridge'."
        ]
    ))

    # ==========================================
    # C1 - CLASE 16: Modales Perifrásticos y Matices: NEEDN'T HAVE vs. DIDN'T NEED TO
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_16",
        level="C1",
        category="Matices Modales Avanzados",
        title="Clase 16: Modales Perifrásticos y Matices: NEEDN'T HAVE vs. DIDN'T NEED TO",
        explanation=(
            "Uno de los contrastes aspectuales y pragmáticos más nítidos del nivel C1 concierne a la distinción entre dos estructuras que "
            "expresan ausencia de necesidad en el pasado: 'Needn't have + Participio Pasado' frente a 'Didn't need to + Infinitivo'. Aunque en "
            "español ambas se traducen a menudo con el mismo giro genérico ('no necesitaba hacer / no tuve que hacer'), en la semántica del inglés "
            "comunican dos realidades fácticas diametralmente opuestas.\n\n"
            "1. 'NEEDN'T HAVE + Participio Pasado' (Acción Innecesaria pero Ejecutada en Vano):\n"
            "Indica de manera taxativa que el sujeto LLEVÓ A CABO la acción, pero posteriormente descubrió o se determinó que dicho esfuerzo "
            "era por completo innecesario o redundante. Representa un gasto de energía o tiempo inútil:\n"
            "'We NEEDN'T HAVE PRINTED four hundred copies of the prospectus; the conference delegates had already downloaded the digital version' "
            "(No necesitábamos haber impreso cuatrocientas copias del prospecto; los delegados de la conferencia ya habían descargado la versión digital. "
            "Hecho: SÍ se imprimieron las 400 copias en vano).\n\n"
            "2. 'DIDN'T NEED TO + Infinitivo' (Ausencia Previa de Obligación - Generalmente No Ejecutada):\n"
            "Indica que la obligación o necesidad no existía de antemano y, en consecuencia, el sujeto habitualmente SE ABSTUVO de realizar la acción "
            "(o si la realizó, fue por mera elección voluntaria no forzada):\n"
            "'Because the judicial hearing was adjourned, the defense counsel DIDN'T NEED TO PRESENT the closing argument' (Debido a que la audiencia "
            "judicial fue aplazada, el abogado defensor no tuvo que presentar el alegato final. Hecho: NO lo presentó porque no fue necesario).\n\n"
            "Otros Matices Modales Avanzados Concurrentes en C1:\n"
            "- 'Need hardly say / Need scarcely remind': Empleado como recurso retórico para dar algo por sentado en el discurso culto.\n"
            "- 'Dare': Su uso como verbo semimodal sin operador 'do' en enunciados formales negativos: 'He dared not challenge the magistrate'."
        ),
        rules=[
            "Realidad Fáctica de 'Needn't Have': Implica obligatoriamente que la acción FUE CONSUMADA en el mundo real, aunque carecía de justificación práctica: 'You needn't have brought an umbrella' (llevaste el paraguas inútilmente).",
            "Realidad Fáctica de 'Didn't Need To': Indica ausencia de necesidad ex ante; lo canónico es que la acción NO SE REALIZÓ: 'I didn't need to cook because dinner was catered'.",
            "Forma Semimodal de 'Need': En presente formal o negativo, 'need' puede operar como modal puro sin 'do' ni 'to': 'He need not worry' / 'Need we say more?'. En pasado con anterioridad solo adopta 'needn't have + participio'.",
            "Diferenciación Fonética: 'Needn't have' se contrae en el habla conectada rápida como /ˈniːdnt əv/ o /ˈniːdntə/, requiriendo entrenamiento auditivo para reconocer el participio subsiguiente."
        ],
        examples_us=[
            "The corporate treasury team needn't have converted federal reserves into foreign currencies; the overseas acquisition was vetoed by antitrust regulators. (El equipo de tesorería corporativa no necesitaba haber convertido reservas federales a divisas extranjeras; la adquisición en el extranjero fue vetada por los reguladores antimonopolio. Hecho: sí las convirtieron en vano).",
            "Because the research lab secured a comprehensive federal grant, the department didn't need to solicit private venture capital financing. (Debido a que el laboratorio de investigación obtuvo una subvención federal integral, el departamento no tuvo que solicitar financiamiento privado de capital de riesgo. Hecho: no lo solicitaron).",
            "You needn't have submitted duplicate copies of the tax schedules; the Internal Revenue Service had already reconciled the electronic filings. (No tenías que haber presentado copias duplicadas de los anexos fiscales; el Servicio de Impuestos Internos ya había conciliado las declaraciones electrónicas).",
            "I didn't need to commute to the Washington headquarters because the entire congressional deposition was conducted via secure teleconference. (No tuve que desplazarme a la sede en Washington porque toda la declaración congresual se condujo por teleconferencia segura)."
        ],
        examples_uk=[
            "We needn't have booked chartered executive coaches for the delegates; the high-speed rail line had resumed normal operations that very morning. (No necesitábamos haber reservado autocares ejecutivos privados para los delegados; la línea ferroviaria de alta velocidad había reanudado operaciones normales esa misma mañana).",
            "The permanent secretary didn't need to appear before the public accounts committee because the accounting discrepancies had been resolved by internal auditors. (El secretario permanente no tuvo que comparecer ante la comisión de cuentas públicas porque las discrepancias contables habían sido resueltas por auditores internos).",
            "The foreign correspondents needn't have stood outside the Foreign Office in the freezing rain; the press communique was released simultaneously online. (Los corresponsales extranjeros no tenían por qué haber permanecido fuera de la Cancillería bajo la lluvia gélida; el comunicado de prensa fue divulgado simultáneamente en línea).",
            "Fortunately, the NHS trust didn't need to requisition military medical personnel during the winter influenza peak. (Afortunadamente, el fideicomiso del Servicio Nacional de Salud no tuvo que requisar personal médico militar durante el pico de gripe invernal)."
        ],
        dialogue=[
            {"speaker": "Auditor Forense (Dr. Calder)", "text": "We needn't have spent three weeks manually re-auditing those paper receipts; the enterprise resource planning software had logged every receipt digitally.", "translation": "No necesitábamos haber pasado tres semanas reauditando manualmente esos recibos en papel; el software de planificación de recursos empresariales había registrado cada recibo digitalmente."},
            {"speaker": "Contralora Adjunta (Dra. Lowe)", "text": "What an enormous misallocation of analytical hours! At least we didn't need to recalculate value added tax rebates across European subsidiaries.", "translation": "¡Qué enorme derroche de horas analíticas! Al menos no tuvimos que recalcular las devoluciones del impuesto sobre el valor añadido en las subsidiarias europeas."},
            {"speaker": "Auditor Forense (Dr. Calder)", "text": "Indeed. The tax tribunal exempted our division from filing secondary declarations, so we didn't need to hire external fiscal counsel.", "translation": "En efecto. El tribunal tributario eximió a nuestra división de presentar declaraciones secundarias, así que no tuvimos que contratar asesoría fiscal externa."},
            {"speaker": "Contralora Adjunta (Dra. Lowe)", "text": "Still, junior associates needn't have worked through the weekend if management had clarified the reporting guidelines earlier.", "translation": "Aun así, los asociados jóvenes no tenían por qué haber trabajado todo el fin de semana si la gerencia hubiera aclarado las directrices de reporte con anterioridad."}
        ],
        mistakes=[
            "Usar 'needn't to have' con la partícula 'to' insertada (Error: 'You needn't to have done that'; Corrección: 'You NEEDN'T HAVE DONE that').",
            "Confundir la realidad de la acción: Usar 'didn't need to' cuando el hablante desea recalcar que la acción se hizo inútilmente (Error: 'I bought food but there was plenty, so I didn't need to buy it' ➔ Se debe decir: 'I NEEDN'T HAVE BOUGHT it').",
            "Omitir el participio pasado tras 'needn't have' (Error: 'She needn't have come' pronunciado o escrito erróneamente con infinitivo).",
            "Usar 'didn't need to have + participio' (híbrido agramatical inexistente en inglés estándar)."
        ],
        tips=[
            "Pregunta diagnóstica para exámenes C1: '¿Se realizó la acción sí o no?'. Si la respuesta es SÍ pero fue en vano = 'needn't have + participio'. Si la respuesta es NO porque no era necesario = 'didn't need to + infinitivo'.",
            "En redacción ejecutiva, usa 'needn't have' con delicadeza diplomática para agradecer un esfuerzo extra sin desmerecer la intención: 'You really needn't have gone to all this trouble, but we are immensely grateful'.",
            "Observa el comportamiento de 'need' en oraciones negativas formales actuales: 'One need not look far to discover structural deficiencies'.",
            "En la sección de Reading de CAE o IELTS, identifica rápidamente 'needn't have' como pista de un desenlace redundante."
        ]
    ))

    # ==========================================
    # C1 - CLASE 17: Verbos de Percepción con Infinitivo Desnudo vs. Participio Presente
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_17",
        level="C1",
        category="Percepción & Aspecto Verbal",
        title="Clase 17: Verbos de Percepción con Infinitivo Desnudo vs. Participio Presente",
        explanation=(
            "Los verbos de percepción sensorial (Verbs of Perception: see, watch, notice, observe, hear, listen to, feel, sense) rigen "
            "dos construcciones sintácticas complementarias con matices aspectuales fundamentales en el nivel C1:\n"
            "1. Verbo de Percepción + Objeto + BARE INFINITIVE (Infinitivo Desnudo sin 'to'):\n"
            "Expresa la percepción de la ACCIÓN COMPLETA, consumada e íntegra de principio a fin, o percibida como un hecho global instantáneo:\n"
            "'I watched the aircraft TOUCH DOWN on the runway' (Vi el avión posarse en la pista - presencié toda la maniobra completa de aterrizaje de principio a fin).\n\n"
            "2. Verbo de Percepción + Objeto + PRESENT PARTICIPLE (Participio en -ING):\n"
            "Expresa aspecto progresivo o durativo: el observador percibe una ACCIÓN EN PLENO DESARROLLO, incompleta, repetitiva o captada en un "
            "fragmento temporal mientras ocurría:\n"
            "'I watched the aircraft TOUCHING DOWN on the runway' (Vi el avión cuando estaba aterrizando - percibí el proceso en pleno descenso continuo).\n\n"
            "La Transformación en Voz Pasiva (La Trampa del 'TO' Obligatorio):\n"
            "Uno de los escollos sintácticos más notables para candidatos a certificaciones C1 surge al convertir estas oraciones activas de infinitivo "
            "a la VOZ PASIVA. En la voz pasiva, el infinitivo desnudo pierde su autonomía y recupera obligatoriamente la partícula 'TO':\n"
            "- Activa: 'The security cameras observed the suspect ENTER the vault' (infinitivo sin 'to').\n"
            "- Pasiva: 'The suspect was observed TO ENTER the vault' (¡'TO' reaparece forzosamente!). Omitir 'to' en la pasiva ('was observed enter') "
            "es un error sintáctico grave.\n"
            "Por el contrario, el participio presente en -ING permanece invariable en la transformación pasiva: 'The suspect was observed entering the vault'."
        ),
        rules=[
            "Infinitivo Desnudo = Evento Completo / Instantáneo: 'Heard the bomb explode' (percibió la explosión consumada en su totalidad). 'Saw him sign the document' (presenció la firma completa).",
            "Participio en -ING = Evento Progresivo / En Curso: 'Heard the child crying' (percibió el lamento continuo en desarrollo). 'Saw him running across the street' (lo captó mientras corría).",
            "Restitución del 'TO' en Voz Pasiva: En voz pasiva, los verbos de percepción seguidos de infinitivo exigen imperativamente 'to': 'He was heard TO say...' / 'She was seen TO drop the envelope'.",
            "Percepción Cognitiva vs. Sensorial: Si verbos como 'see', 'feel' o 'notice' denotan comprensión intelectual ('see that' = understand) o deducción abstracta, no rigen infinitivo desnudo sino cláusulas introducidas por 'that': 'I saw that he was troubled'."
        ],
        examples_us=[
            "Federal surveillance agents saw the rogue intelligence contractor copy classified satellite schematics onto an encrypted drive. (Agentes de vigilancia federal vieron al contratista de inteligencia deshonesto copiar esquemas satelitales clasificados en un disco encriptado. Acción completa percibida de inicio a fin).",
            "The seismologist felt the tectonic plates shifting subtly along the San Andreas fault line hours prior to the tremor. (El sismólogo sintió las placas tectónicas desplazándose sutilmente a lo largo de la falla de San Andrés horas antes del temblor. Proceso en curso continuo).",
            "The corporate treasurer was observed to destroy sensitive internal balance sheets minutes before the subpoena was delivered. (El tesorero corporativo fue observado destruir balances internos confidenciales minutos antes de que se entregara la orden judicial. Voz pasiva formal con 'to').",
            "Air traffic controllers heard the pilot announce an emergency squawk frequency following rapid cabin depressurization. (Los controladores de tráfico aéreo escucharon al piloto anunciar una frecuencia de alerta de emergencia tras una rápida despresurización de la cabina)."
        ],
        examples_uk=[
            "The forensic accountant observed the offshore shell company transfer substantial sterling reserves to an unlisted entity. (La contable forense observó a la empresa pantalla en ultramar transferir sustanciales reservas de libras esterlinas a una entidad no registrada).",
            "Passers-by noticed water pouring through the ceiling of the municipal archives during the torrential rainstorm. (Los transeúntes notaron el agua cayendo a raudales a través del techo de los archivos municipales durante la tormenta torrencial).",
            "The fugitive financier was heard to boast about diplomatic immunity whilst boarding a private aircraft at Stansted. (El financiero prófugo fue escuchado jactarse sobre inmunidad diplomática mientras abordaba un avión privado en Stansted).",
            "The parliamentary inquiry listened to the permanent secretary describe systemic failures in regional defense logistics. (La comisión parlamentaria escuchó al secretario permanente describir fallas sistémicas en la logística de defensa regional)."
        ],
        dialogue=[
            {"speaker": "Fiscal de Enjuiciamiento (Dr. Sterling)", "text": "Detective, did the CCTV camera capture the defendant entering the jewelry vault, or did the recording show him enter it?", "translation": "Detective, ¿captó la cámara de seguridad al imputado entrando a la bóveda de joyas, o la grabación lo mostró entrar en ella?"},
            {"speaker": "Detective Forense (Dra. Vance)", "text": "The camera recorded him enter the vault, open the biometric safe, and extract the uncut diamonds; the entire unbroken sequence is preserved.", "translation": "La cámara lo grabó entrar a la bóveda, abrir la caja fuerte biométrica y extraer los diamantes en bruto; toda la secuencia ininterrumpida está preservada."},
            {"speaker": "Fiscal de Enjuiciamiento (Dr. Sterling)", "text": "Excellent. In cross-examination, he was heard to claim he was merely an innocent bystander waiting outside.", "translation": "Excelente. En el contrainterrogatorio, fue escuchado afirmar que era simplemente un transeúnte inocente que esperaba afuera."},
            {"speaker": "Detective Forense (Dra. Vance)", "text": "Several eyewitnesses also saw him pacing back and forth nervously along the alleyway before entering the premises.", "translation": "Varios testigos presenciales también lo vieron caminando de un lado a otro nerviosamente por el callejón antes de ingresar al inmueble."}
        ],
        mistakes=[
            "Usar 'to' en la voz ACTIVA tras un verbo de percepción (Error: 'I heard him to shout'; Corrección: 'I heard him SHOUT' o 'shouting').",
            "Omitir 'to' en la voz PASIVA con infinitivo (Error: 'He was seen leave the building'; Corrección obligatoria: 'He was seen TO LEAVE the building').",
            "Confundir la percepción sensorial con la deductiva (Error: 'I felt him to be dishonest' en lugar de 'I felt that he was dishonest').",
            "Elegir la forma incorrecta entre -ing e infinitivo cuando el contexto temporal exige claramente un evento completado puntual."
        ],
        tips=[
            "Mnemotecnia visual: El infinitivo desnudo abarca toda la película (de principio a fin); la forma -ING toma una fotografía en movimiento en mitad de la escena.",
            "Recuerda la regla de la pasiva: 'Active = Bare infinitive' (I saw him fall); 'Passive = Full infinitive with TO' (He was seen TO fall).",
            "Aplica esta regla también con verbos causativos como 'make': 'They made him sign' ➔ 'He was made TO sign'.",
            "Para enfatizar la instantaneidad dramática en crónicas periodísticas o narrativas, privilegia el infinitivo desnudo."
        ]
    ))

    # ==========================================
    # C1 - CLASE 18: Mecanismos de Elipsis y Sustitución Sintáctica (DO SO, ONE/ONES)
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_18",
        level="C1",
        category="Cohesión Sintáctica & Economía",
        title="Clase 18: Mecanismos de Elipsis y Sustitución Sintáctica (DO SO, ONE/ONES)",
        explanation=(
            "La elegancia y la madurez estilística en el nivel C1 se miden en gran medida por la habilidad de evitar la redundancia léxica "
            "mediante mecanismos refinados de 'Elipsis' (Ellipsis - omisión justificada de elementos que se sobreentienden del contexto) y "
            "'Sustitución Sintáctica' (Substitution - reemplazo de un constituyente clausal o nominal por un pro-forma formal).\n\n"
            "Principales Dispositivos de Sustitución en C1:\n"
            "1. Sustitución Verbal Formal con 'DO SO':\n"
            "'Do so', 'did so', 'doing so' sustituye a un predicado verbal dinámico completo junto con sus complementos directos o circunstanciales. "
            "Aporta un registro significativamente más cultivado y formal que el coloquial 'do it' o 'do that':\n"
            "'The board urged the CEO to step down, and he agreed to DO SO' (La junta directiva instó al director ejecutivo a dimitir, y él accedió "
            "a hacerlo). Nota: 'Do so' solo puede sustituir a verbos dinámicos o de acción; jamás a verbos estativos ('He loved literature and "
            "she did so too' ➔ INCORRECTO; se debe usar elipsis simple: 'and she did too').\n\n"
            "2. Sustitución Clausal con 'SO' y 'NOT':\n"
            "Con verbos de creencia, opinión, suposición y habla (think, believe, suppose, assume, hope, expect, fear, be afraid), la afirmación "
            "completa se sustituye por 'so' ('Will the merger proceed? I assume SO'). En la negación, algunos verbos adoptan negación invertida "
            "con 'not' ('I hope NOT', 'I fear NOT', 'I assume NOT'), mientras que otros transfieren la negación al verbo rector ('I don't think so').\n\n"
            "3. Reducción y Elipsis del Infinitivo (Elliptical TO):\n"
            "Se conserva únicamente la partícula 'to' del infinitivo omitiendo el verbo léxico repetido: 'You may inspect the archives if you "
            "wish TO' (en lugar de 'if you wish to inspect them').\n\n"
            "4. Sustitución Nominal con 'ONE / ONES', 'THAT / THOSE':\n"
            "En la comparación formal, 'that of' y 'those of' reemplazan a sustantivos determinados para evitar la repetición: 'The economic "
            "growth of Germany was slower than THAT OF France'."
        ),
        rules=[
            "Restricción Dinámica de 'Do So': 'Do so' solo sustituye acciones deliberadas o dinámicas. No se admite con verbos estativos de posesión, emoción o cognición ('know', 'resemble', 'own').",
            "Elipsis de Auxiliar tras Coordinadas: Cuando dos cláusulas coordinadas comparten el mismo auxiliar o verbo modal, este se elide en la segunda: 'The ministers have studied the proposal and [have] voted to approve it'.",
            "Uso Comparativo de 'That of / Those of': Obligatorio en redacción académica rigurosa para evitar comparar entidades incomparables: 'The policies of the treasury were more prudent than THOSE of the central bank'.",
            "Asimetría de Negación en Sustitución: Se dice 'I hope not' y 'I fear not' (nunca 'I don't hope so'); pero se prefiere 'I don't think so' sobre 'I think not' en la mayoría de contextos modernos no arcaizantes."
        ],
        examples_us=[
            "The appellate court commanded the tech conglomerate to unbundle its web browser, and executives promptly did so. (El tribunal de apelaciones ordenó al conglomerado tecnológico desagregar su navegador web, y los ejecutivos lo hicieron con prontitud).",
            "The demographic trajectory of Japan is markedly more acute than that of the United States. (La trayectoria demográfica de Japón es marcadamente más aguda que la de los Estados Unidos).",
            "Will the Federal Reserve lower interest rates during the fourth quarter? Financial market participants certainly hope so. (¿Reducirá la Reserva Federal las tasas de interés durante el cuarto trimestre? Los participantes del mercado financiero ciertamente esperan que sí).",
            "You are welcome to testify before the congressional ethics committee if you choose to. (Es bienvenido a testificar ante el comité de ética del Congreso si decide hacerlo)."
        ],
        examples_uk=[
            "The Treasury advised municipal authorities to curb borrowing, but few councils possessed the fiscal autonomy to do so. (El Tesoro aconsejó a las autoridades municipales frenar el endeudamiento, pero pocos concejos poseían la autonomía fiscal para hacerlo).",
            "The carbon emission standards of the European Union remain considerably more stringent than those of developing industrial nations. (Las normas de emisión de carbono de la Unión Europea continúan siendo considerablemente más rigurosas que las de las naciones industriales en desarrollo).",
            "Is there any possibility that the bilateral trade negotiations will collapse? Senior civil servants fear so. (¿Existe alguna posibilidad de que las negociaciones comerciales bilaterales fracasen? Los altos funcionarios públicos temen que sí).",
            "The prime minister did not address the backbench rebellion, nor did he intend to. (El primer ministro no abordó la rebelión de los parlamentarios de base, ni tenía intención de hacerlo)."
        ],
        dialogue=[
            {"speaker": "Profesor de Lingüística (Dr. Sterling)", "text": "Compare these two sentences: 'The author examined the first hypothesis, and then he examined the second hypothesis' versus '...and then he did so with the second'.", "translation": "Compare estas dos oraciones: 'El autor examinó la primera hipótesis, y luego examinó la segunda hipótesis' frente a '...y luego lo hizo con la segunda'."},
            {"speaker": "Candidata a Doctorado (Dra. Vance)", "text": "The substitution with 'did so' completely removes lexical repetition while preserving formal stylistic dignity.", "translation": "La sustitución con 'did so' elimina por completo la repetición léxica al tiempo que preserva la dignidad estilística formal."},
            {"speaker": "Profesor de Lingüística (Dr. Sterling)", "text": "Precisely. And notice how 'that of' functions in: 'The methodology of our team mirrors that of our predecessors'.", "translation": "Precisamente. Y observe cómo funciona 'that of' en: 'La metodología de nuestro equipo refleja la de nuestros predecesores'."},
            {"speaker": "Candidata a Doctorado (Dra. Vance)", "text": "Without 'that of', one commits the illogical fallacy of comparing a methodology directly to human beings.", "translation": "Sin 'that of', uno comete la falacia ilógica de comparar una metodología directamente con seres humanos."}
        ],
        mistakes=[
            "Usar 'do so' para reemplazar verbos estativos (Error: 'She liked classical music and her brother did so too'; Corrección: '...and her brother did too').",
            "Decir 'I don't hope so' en lugar de 'I hope not' (Error clásico de transferencia del español).",
            "Omitir 'that of' en comparaciones académicas (Error: 'The climate of Spain is hotter than England'; Corrección: 'The climate of Spain is hotter than THAT OF England').",
            "Repetir todo el infinitivo cuando la elipsis de 'to' es mucho más limpia y natural ('I asked him to come, and he promised to come' ➔ '...and he promised to')."
        ],
        tips=[
            "En tus ensayos C1, escanea tu texto buscando la repetición de sustantivos en comparaciones: si ves 'The X of A is higher than the X of B', cámbialo inmediatamente a 'is higher than that of B'.",
            "Usa 'do so / did so' en correspondencia corporativa formal: 'We instructed the shipping vendor to expedite delivery, and they have assured us they will do so'.",
            "Practica respuestas formales concisas: 'I believe so', 'I assume so', 'I hope not', 'I doubt so'.",
            "Recuerda que la elipsis sintáctica proyecta economía verbal, un rasgo distintivo de los escritores anglosajones de élite."
        ]
    ))

    # ==========================================
    # C1 - CLASE 19: Estructuras Preposicionales Complejas: WITH A VIEW TO, ON GROUNDS OF
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_19",
        level="C1",
        category="Frases Preposicionales Académicas",
        title="Clase 19: Estructuras Preposicionales Complejas: WITH A VIEW TO, ON GROUNDS OF",
        explanation=(
            "Las estructuras y frases preposicionales complejas (Complex Prepositional Phrases) de tres o cuatro palabras constituyen "
            "el esqueleto conectivo de la prosa jurídica, diplomática, económica y académica de nivel C1. Permiten precisar la intencionalidad, "
            "la causa legítima, la representatividad, la concordancia y la condicionalidad de los actos humanos con una exactitud que las "
            "preposiciones simples ('for', 'to', 'about') son incapaces de suministrar.\n\n"
            "Análisis de Estructuras Cardinales:\n"
            "1. 'WITH A VIEW TO + GERUNDIO (-ING)' (Con miras a / Con el propósito de):\n"
            "Expresa intencionalidad estratégica de futuro. La trampa gramatical capital radica en que la palabra 'to' en esta locución NO es "
            "el marcador del infinitivo verbal, sino una PREPOSICIÓN AUTÉNTICA. Por consiguiente, el verbo que le sigue debe formularse "
            "obligatoriamente en GERUNDIO (-ING):\n"
            "- CORRECTO: 'The sovereign state acquired coastal lands with a view to CONSTRUCTING a commercial deep-water harbor'.\n"
            "- INCORRECTO: '...with a view to construct...'.\n\n"
            "2. 'ON THE GROUNDS OF + Sustantivo' / 'ON THE GROUNDS THAT + Cláusula' (Bajo el fundamento de / Por motivos de):\n"
            "Proporciona la justificación jurídica, administrativa o ética para una resolución o decisión formal: 'The patent application was "
            "dismissed on the grounds of prior art disclosure'.\n\n"
            "3. 'IN ACCORDANCE WITH / IN COMPLIANCE WITH' (De conformidad con / En cumplimiento de):\n"
            "Rige la observancia de normas estatutarias, ordenanzas y tratados vinculantes.\n\n"
            "4. 'ON BEHALF OF / IN BEHALF OF' (En nombre y representación de / En beneficio o defensa de):\n"
            "- 'On behalf of': Como representante legítimo ('Signing on behalf of the board').\n"
            "- 'In behalf of' (común en US): En interés o beneficio de una causa benéfica o social.\n\n"
            "5. 'BY DINT OF' (A fuerza de / A base de) e 'IN LIEU OF' (En lugar de / En sustitución de)."
        ),
        rules=[
            "Gerundio Obligatorio con 'With a view to': Debido a que 'to' es preposición de régimen, cualquier verbo subsiguiente adopta la desinencia -ing: 'With a view to establishing', 'with a view to mitigating'.",
            "Régimen de 'On the grounds of / that': Si va seguido de frase nominal usa 'on the grounds of' ('on grounds of national security'); si va seguido de una cláusula con sujeto y verbo, usa 'on the grounds that' ('on the grounds that the evidence was tainted').",
            "Sustitución Formal con 'In lieu of': Derivado del francés jurídico, equivale a 'instead of' y rige sustantivos o gerundios en contextos contractuales o de reemplazo compensatorio: 'cash in lieu of vacation days'.",
            "Causalidad Esforzada con 'By dint of': Expresa que un logro difícil se alcanzó mediante esfuerzo arduo y perseverante: 'He achieved tenure by dint of relentless empirical publication'."
        ],
        examples_us=[
            "The administration revised regulatory tariffs with a view to stimulating domestic manufacturing in the semiconductor sector. (La administración revisó los aranceles regulatorios con miras a estimular la manufactura nacional en el sector de semiconductores).",
            "The federal district judge dismissed the indictment on the grounds that warrantless wiretap evidence violated constitutional protections. (El juez de distrito federal desestimó la acusación bajo el fundamento de que la evidencia de escuchas telefónicas sin orden judicial violaba las protecciones constitucionales).",
            "Executive leadership offered prospective stock options in lieu of immediate discretionary cash bonuses. (El liderazgo ejecutivo ofreció opciones sobre acciones futuras en lugar de bonos discrecionales inmediatos en efectivo).",
            "The attorney general filed a comprehensive class action suit on behalf of thousands of defrauded consumer mortgagees. (El fiscal general interpuso una demanda colectiva exhaustiva en nombre de miles de deudores hipotecarios consumidores defraudados)."
        ],
        examples_uk=[
            "The Bank of England altered liquidity reserve ratios with a view to curbing speculative lending across commercial property markets. (El Banco de Inglaterra alteró los coeficientes de reserva de liquidez con miras a frenar el crédito especulativo en los mercados de propiedades comerciales).",
            "The planning application was rejected by the municipal council on the grounds of environmental degradation along the green belt. (La solicitud de planeamiento urbanístico fue rechazada por el concejo municipal por motivos de degradación ambiental a lo largo del cinturón verde).",
            "The permanent secretary tendered his resignation in accordance with ministerial civil service conventions. (El secretario permanente presentó su dimisión de conformidad con las convenciones ministeriales de la administración pública).",
            "By dint of extraordinary diplomatic perseverance, the foreign delegation secured the release of the detained humanitarian workers. (A fuerza de una perseverancia diplomática extraordinaria, la delegación extranjera aseguró la liberación de los trabajadores humanitarios detenidos)."
        ],
        dialogue=[
            {"speaker": "Asesor Corporativo (Dr. Sterling)", "text": "The board has convened this extraordinary session with a view to restructuring our offshore debt obligations.", "translation": "La junta directiva ha convocado esta sesión extraordinaria con miras a reestructurar nuestras obligaciones de deuda en el extranjero."},
            {"speaker": "Directora Jurídica (Dra. Vance)", "text": "Creditors are seeking to freeze capital disbursements on the grounds that insolvency protocols have been triggered.", "translation": "Los acreedores buscan congelar los desembolsos de capital bajo el fundamento de que se han activado los protocolos de insolvencia."},
            {"speaker": "Asesor Corporativo (Dr. Sterling)", "text": "Can we offer convertible bond debentures in lieu of liquid reserves to satisfy immediate contractual covenants?", "translation": "¿Podemos ofrecer obligaciones de bonos convertibles en lugar de reservas líquidas para satisfacer los compromisos contractuales inmediatos?"},
            {"speaker": "Directora Jurídica (Dra. Vance)", "text": "Yes, provided the offer is enacted strictly in accordance with statutory stock exchange disclosure guidelines.", "translation": "Sí, siempre y cuando la oferta se promulgue estrictamente de conformidad con las directrices estatutarias de divulgación de la bolsa de valores."}
        ],
        mistakes=[
            "Usar infinitivo después de 'with a view to' (Error frecuentísimo en exámenes: 'with a view to expand'; Corrección obligatoria: 'with a view to EXPANDING').",
            "Confundir 'on grounds of' con 'in grounds of' o 'under grounds of' (la preposición correcta es invariablemente 'ON').",
            "Usar 'instead of' en documentos notariales o solemnes donde la convención prescriptiva exige 'in lieu of'.",
            "Mezclar 'in accordance to' en vez del preceptivo 'in accordance WITH'."
        ],
        tips=[
            "Regla nemotécnica para 'with a view to': Cada vez que veas 'VIEW', recuerda que ves imágenes en movimiento (-ING), por tanto exige gerundio.",
            "Incorpora 'on the grounds that + [cláusula]' en tus ensayos para fundamentar objeciones o sentencias judiciales.",
            "Utiliza 'in compliance with statutory benchmarks' para cerrar memorandos corporativos con máxima autoridad.",
            "Alterna 'by dint of' cuando desees homenajear el esfuerzo meritorio de un colectivo o científico."
        ]
    ))

    # ==========================================
    # C1 - CLASE 20: Variación Diatópica Avanzada: Sintaxis Jurídica y Administrativa US vs. UK
    # ==========================================
    lessons.append(make_lesson(
        lesson_id="c1_lesson_20",
        level="C1",
        category="Sintaxis Comparada & Dialectología",
        title="Clase 20: Variación Diatópica Avanzada: Sintaxis Jurídica y Administrativa US vs. UK",
        explanation=(
            "En el umbral superior del nivel C1, la distinción entre el inglés estadounidense (US) y el inglés británico (UK) trasciende con "
            "creces el léxico superficial cotidiano (elevator/lift, sidewalk/pavement). El estudiante maduro debe dominar las divergencias "
            "estructurales, sintácticas y morfológicas que rigen el lenguaje jurídico, financiero, institucional y corporativo de ambas potencias.\n\n"
            "Divergencias Sintácticas e Institucionales Fundamentales:\n"
            "1. Concordancia de Sustantivos Colectivos (Collective Nouns Agreement):\n"
            "- Inglés Británico (UK - Concordancia Nocional o Plural): Los sustantivos colectivos institucionales (government, board, committee, "
            "team, jury, council) concuerdan preferentemente en PLURAL cuando se enfatiza a los individuos que los componen: 'The government "
            "HAVE decided', 'The jury ARE deliberating', 'The committee HAVE published their report'.\n"
            "- Inglés Estadounidense (US - Concordancia Formal o Singular): Se consideran unidades jurídicas monolíticas y concuerdan rigurosamente "
            "en SINGULAR: 'The government HAS decided', 'The jury IS deliberating', 'The committee HAS published ITS report'.\n\n"
            "2. Régimen Preposicional Jurídico e Institucional:\n"
            "- En UK se dice 'plead guilty TO a charge', 'appeal AGAINST a verdict', 'member OF parliament', 'at the weekend'.\n"
            "- En US se prefiere 'plead guilty TO a charge', 'appeal a verdict' (sin 'against'), 'member OF congress', 'on the weekend'.\n\n"
            "3. Sintaxis del Mandative Subjunctive vs. 'Should' Putativo:\n"
            "- US: Exige subjuntivo puro invariable: 'We insist that the contractor BE penalized'.\n"
            "- UK: Emplea históricamente 'should + infinitivo' o indicativo formal: 'We insist that the contractor SHOULD BE penalized'.\n\n"
            "4. Terminología Societaria y Financiera Vinculante:\n"
            "- US: Corporation / Company, Stockholders, Board of Directors, Articles of Incorporation, SEC filings.\n"
            "- UK: Limited Company (Ltd / Plc), Shareholders, Board of Directors, Memorandum and Articles of Association, Companies House.\n\n"
            "El dominio de este perfil comparativo previene discrepancias interpretativas en contratos transatlánticos y garantiza una adecuación "
            "estilística impecable al redactar para editoriales o corporaciones de cada jurisdicción."
        ),
        rules=[
            "Concordancia Colectiva UK (Plural/Singular según sentido): 'The committee have disagreed among themselves' (visión plural de miembros); 'The committee has issued a unanimous statement' (visión monolítica).",
            "Concordancia Colectiva US (Singular estricto): Siempre 'The committee has...' y sus pronombres correferenciales en singular: 'The company expanded its operations' (nunca 'their operations').",
            "Sintaxis de Verbos Transitivos de Apelación: En US 'to appeal' es transitivo directo ('They appealed the decision'); en UK es intransitivo regido por preposición ('They appealed against the decision').",
            "Aspecto de Tiempos con Adverbios Recientes (just, already, yet): En US es admisible el Past Simple ('I already did it'); en UK y en registro formal C1 se exige el Present Perfect ('I have already done it')."
        ],
        examples_us=[
            "The corporate board has unanimously ratified the merger agreement and filed its proxy statement with the SEC. (La junta directiva corporativa ha ratificado unánimemente el acuerdo de fusión y ha presentado su declaración de representación ante la SEC).",
            "The defense counsel decided to appeal the federal court's judgment immediately following sentencing. (El abogado defensor decidió apelar el fallo del tribunal federal inmediatamente después de la imposición de la sentencia).",
            "The antitrust regulatory agency requires that the telecommunications conglomerate sell its regional wireless spectrum. (La agencia reguladora antimonopolio exige que el conglomerado de telecomunicaciones venda su espectro inalámbrico regional).",
            "Federal authorities announced that the financial institution is under investigation for illicit capital flight. (Las autoridades federales anunciaron que la institución financiera está bajo investigación por fuga ilícita de capitales)."
        ],
        examples_uk=[
            "The board of directors have resolved to tender their resignation to the extraordinary general meeting of shareholders. (La junta directiva ha resuelto presentar su dimisión ante la asamblea general extraordinaria de accionistas).",
            "The trade union delegation intend to appeal against the ruling delivered yesterday by the High Court of Justice. (La delegación sindical tiene la intención de apelar contra el fallo emitido ayer por el Tribunal Superior de Justicia).",
            "The Department for Transport insisted that the railway franchisee should modernise rolling stock across northern routes. (El Ministerio de Transporte insistió en que la empresa concesionaria ferroviaria modernizara el material rodante en las rutas del norte).",
            "Her Majesty's Revenue and Customs are conducting forensic inquiries into offshore corporate tax sheltering schemes. (La Agencia Tributaria y Aduanera británica está llevando a cabo indagaciones forenses sobre esquemas de elusión fiscal corporativa en paraísos fiscales)."
        ],
        dialogue=[
            {"speaker": "Abogado Corporativo de Wall Street (Dr. Sterling)", "text": "In New York, we write: 'The jury has reached its verdict, and the defense will appeal the judgment tomorrow'.", "translation": "En Nueva York, escribimos: 'The jury has reached its verdict, and the defense will appeal the judgment tomorrow'."},
            {"speaker": "Barrister de Londres (Dra. Vance)", "text": "Whereas at the Royal Courts of Justice, we draft: 'The jury have retired to consider their verdict, and counsel will appeal against the conviction'.", "translation": "Mientras que en los Reales Tribunales de Justicia, redactamos: 'The jury have retired to consider their verdict, and counsel will appeal against the conviction'."},
            {"speaker": "Abogado Corporativo de Wall Street (Dr. Sterling)", "text": "Notice also the subjunctive divergence: we mandate that the defendant 'surrender' his passport; British statutes often formulate that he 'should surrender' it.", "translation": "Observe también la divergencia del subjuntivo: nosotros ordenamos que el imputado 'surrender' su pasaporte; los estatutos británicos a menudo formulan que 'should surrender' el mismo."},
            {"speaker": "Barrister de Londres (Dra. Vance)", "text": "Indeed. Mastering these transatlantic syntactic nuances ensures contractual efficacy and prevents jurisdictional ambiguity.", "translation": "En efecto. Dominar estos matices sintácticos transatlánticos asegura la eficacia contractual y previene la ambigüedad jurisdiccional."}
        ],
        mistakes=[
            "Mezclar pronombres singulares y plurales con colectivos (Error: 'The team has won their match'; Corrección: 'The team has won ITS match' [US] o 'The team have won THEIR match' [UK]).",
            "Omitir 'against' al usar 'appeal' en un tribunal británico (Error en UK: 'appeal the verdict'; Corrección: 'appeal AGAINST the verdict').",
            "Usar 'should + infinitivo' en contratos corporativos estrictamente regulados por la legislación de Delaware o Nueva York donde el subjuntivo sintético mandativo es la norma.",
            "Ignorar las diferencias de puntuación en citas jurídicas (en US los puntos y comas van dentro de las comillas: \"like this.\"; en UK van fuera: \"like this\".)."
        ],
        tips=[
            "Determina el público objetivo de tu escrito desde la primera línea y mantén una coherencia diatópica del 100% (evita mezclar ortografía o sintaxis británica y estadounidense en el mismo documento).",
            "Para un estilo transatlántico neutro y universal, prefiere el singular para colectivos institucionales y el subjuntivo mandativo sintético.",
            "Memoriza las parejas societarias: 'Bylaws' (US) vs. 'Articles of Association' (UK); 'Real estate' (US) vs. 'Property / Immovable property' (UK).",
            "En la redacción de informes internacionales, especifica la convención utilizada en la nota editorial: 'This dossier adheres to British English conventions'."
        ]
    ))

    return lessons
