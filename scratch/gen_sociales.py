# -*- coding: utf-8 -*-
"""
Generador de preguntas reforzadas de CIENCIAS SOCIALES para la UES
Basado en el Temario y Material Oficial de Refuerzo Académico UES (Semanas 1 a 21)
Subtemas 4.1 a 4.4: Preguntas 201 a 300 (100 preguntas por archivo, total 400)
"""

def get_sociales_questions(subtopic_id):
    questions = []

    # =========================================================================
    # SUBTEMA 4.1: HISTORIA DE EL SALVADOR: CAFETALERA, ISI, CONFLICTO Y PAZ
    # =========================================================================
    if subtopic_id == "4.1":
        sec1 = "SECCIÓN V: REPÚBLICA CAFETALERA, MODELO ISI Y DICTADURAS MILITARES (201–250)"
        sec2 = "SECCIÓN VI: CONFLICTO ARMADO Y ACUERDOS DE PAZ DE CHAPULTEPEC (251–300)"

        data_201_250 = [
            ("Las Leyes de Extinción de Tierras Comunales (1881) y Ejidales (1882) en El Salvador tuvieron como consecuencia socioeconómica principal:",
             ["La privatización masiva de tierras a favor de la oligarquía cafetalera y la proletarización forzada del campesinado indígena", "La distribución equitativa de parcelas agrícolas entre todos los pueblos originarios", "La prohibición absoluta del cultivo de café en las zonas volcánicas", "El fin de la exportación agropecuaria hacia Europa"],
             "A", "Estas leyes despojaron a las comunidades indígenas de sus tierras ancestrales para expandir los latifundios cafetaleros."),
            ("Durante la República Cafetalera (1880-1930), la estructura del Estado salvadoreño se caracterizó políticamente por:",
             ["El control oligárquico de las instituciones y la alternancia de presidentes vinculados a las familias cafetaleras", "Una democracia participativa con sufragio universal libre y secreto", "Un sistema parlamentario pluripartidista de corte europeo", "La hegemonía absoluta de cooperativas obreras y campesinas"],
             "A", "El Estado operó al servicio del modelo agroexportador cafetalero, reprimiendo las demandas rurales."),
            ("El levantamiento campesino e indígena de enero de 1932 en el occidente salvadoreño fue desencadenado estructuralmente por:",
             ["La caída mundial de los precios del café (Crisis de 1929), la miseria rural extrema y el fraude electoral", "Una invasión militar organizada por países limítrofes", "El descubrimiento de grandes yacimientos de petróleo en Izalco", "El rechazo a la construcción del ferrocarril interoceánico"],
             "A", "La Gran Depresión desplomó los salarios cafetaleros, agudizando la opresión que detonó la rebelión reprimida por Martínez."),
            ("La masacre de 1932 ejecutada bajo el régimen del general Maximiliano Hernández Martínez tuvo como saldo etnocultural:",
             ["El etnocidio indígena (más de 25,000 muertos) y la pérdida del idioma náhuat y vestimenta tradicional por temor a la represión", "La concesión de autonomía política a los pueblos indígenas occidentales", "La fundación del primer sindicato campesino legal del país", "La migración voluntaria masiva hacia las ciudades industriales de México"],
             "A", "Para sobrevivir a la persecución estatal, la población indígena abandonó su lengua originaria y sus trajes tradicionales."),
            ("El modelo de Industrialización por Sustitución de Importaciones (ISI), impulsado en El Salvador en las décadas de 1950 y 1960, promovió:",
             ["El desarrollo de la industria ligera manufacturera y la creación del Mercado Común Centroamericano (MCCA)", "La privatización de la banca y la dolarización de la economía", "El monocultivo exclusivo del añil y el bálsamo", "La estatización de todas las haciendas algodoneras"],
             "A", "El modelo ISI (CEPAL) buscó crear un mercado regional integrado mediante aranceles proteccionistas a bienes manufacturados locales."),
            ("La llamada 'Guerra de las 100 Horas' o de Legítima Defensa entre El Salvador y Honduras (julio de 1969) tuvo como raíz socioeconómica profunda:",
             ["La crisis agraria en Honduras, la expulsión masiva de campesinos salvadoreños y las tensiones comerciales en el MCCA", "Un partido de fútbol de clasificación para el mundial de México 1970", "La disputa territorial por la desembocadura del río Lempa", "La invasión de corsarios ingleses en el golfo de Fonseca"],
             "A", "El conflicto derivó de la reforma agraria hondureña que expulsó a miles de salvadoreños y las asimetrías del MCCA."),
            ("La Doctrina de la Seguridad Nacional, aplicada por los regímenes militares salvadoreños durante la Guerra Fría, consideraba como 'enemigo interno' a:",
             ["Cualquier opositor político, dirigente sindical, líder comunal, campesino organizado o catequista calificado de 'subversivo'", "Únicamente a los espías de potencias extranjeras que violaran el espacio aéreo", "A los contrabandistas de mercaderías en las aduanas terrestres", "A los dueños de los latifundios que no pagaban impuestos"],
             "A", "Bajo esta doctrina impulsada por Washington, el Estado militarizado criminalizó la protesta social y la disidencia política."),
            ("Los fraudes electorales masivos de 1972 y 1977 perpetrados por el Partido de Conciliación Nacional (PCN) provocaron:",
             ["El cierre de la vía democrática y electoral pacífica, impulsando el surgimiento y auge de las organizaciones político-militares", "La rendición incondicional de los partidos de oposición ante el ejército", "El ingreso de El Salvador a la Organización de Países Exportadores de Petróleo", "La abolición definitiva del servicio militar obligatorio"],
             "A", "El despojo electoral a la UNO (Duarte-Ungo) convenció a amplios sectores populares de que la vía armada era el único camino restante."),
            ("La figura de Monseñor Óscar Arnulfo Romero cobró relevancia histórica internacional antes de su martirio (1980) por:",
             ["Su valiente defensa profética de los derechos humanos de los pobres y su clamor de '¡Cese la represión!' a la Fuerza Armada", "Su apoyo incondicional a las juntas militares de gobierno", "Haber fundado los primeros bancos comerciales de ahorro popular", "Haber negociado tratados de libre comercio con Estados Unidos"],
             "A", "Monseñor Romero denunció las atrocidades del Estado y los escuadrones de la muerte, convirtiéndose en 'la voz de los sin voz'."),
            ("El 10 de octubre de 1980 se fundó la alianza unificada de la insurgencia armada salvadoreña denominada:",
             ["Frente Farabundo Martí para la Liberación Nacional (FMLN)", "Frente Sandinista de Liberación Nacional (FSLN)", "Unidad Revolucionaria Nacional Guatemalteca (URNG)", "Movimiento Revolucionario Túpac Amaru (MRTA)"],
             "A", "El FMLN agrupó a las cinco organizaciones guerrilleras político-militares salvadoreñas (FPL, ERP, RN, PRTC y PCS).")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En el análisis histórico de la República Cafetalera y regímenes militares (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"4.1_q{q_num}",
                "number": q_num,
                "subtopicId": "4.1",
                "subjectId": "sociales",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("La Ofensiva General 'Hasta el Tope' lanzada por el FMLN en noviembre de 1989 demostró militarmente que:",
             ["Ninguno de los dos bandos podía lograr una victoria militar decisiva, haciendo indispensable una salida negociada", "El ejército regular había aniquilado definitivamente a la guerrilla en pocas horas", "Las fuerzas armadas extranjeras desembarcarían en el puerto de Acajutla", "El conflicto civil concluiría sin ninguna reforma constitucional"],
             "A", "La ofensiva llevó la guerra a la capital y forzó a las élites y al ejército a reconocer la urgencia de la negociación política."),
            ("Durante la ofensiva de noviembre de 1989, el Batallón Atlacatl perpetró en el campus de la UCA la masacre de:",
             ["Seis sacerdotes jesuitas (entre ellos Ignacio Ellacuría) y dos colaboradoras domésticas", "Cincuenta estudiantes de bachillerato del Instituto Nacional", "La directiva completa de la Cruz Roja Salvadoreña", "Los embajadores de los países garantes de la paz"],
             "A", "El asesinato de los jesuitas conmocionó a la comunidad internacional y deslegitimó definitivamente al alto mando militar."),
            ("Los Acuerdos de Paz definitivos que pusieron fin a doce años de guerra civil fueron firmados el 16 de enero de 1992 en:",
             ["El Castillo de Chapultepec, Ciudad de México", "La sede de la ONU en Ginebra, Suiza", "El Palacio Nacional de San Salvador", "La Casa Blanca en Washington D.C."],
             "A", "La firma en Chapultepec culminó dos años de mediación internacional bajo los auspicios del Secretario General de la ONU."),
            ("En el ámbito de la seguridad pública, los Acuerdos de Paz de 1992 establecieron:",
             ["La disolución de los antiguos cuerpos de seguridad (Guardia Nacional, Policía de Hacienda) y la creación de la Policía Nacional Civil (PNC)", "El traspaso de la seguridad pública a los cuerpos policiales de Estados Unidos", "La integración obligatoria de todos los excombatientes al ejército regular", "El desarme de la población civil sin alterar la estructura policial previa"],
             "A", "Se creó una nueva policía de doctrina civil y respetuosa de los derechos humanos ajena a la Fuerza Armada."),
            ("Para vigilar el respeto a las garantías fundamentales de la ciudadanía se creó mediante reforma constitucional:",
             ["La Procuraduría para la Defensa de los Derechos Humanos (PDDH)", "El Consejo Superior de Salud Pública", "La Fiscalía General del Estado Mayor Presidencial", "La Superintendencia General de Electricidad"],
             "A", "La PDDH nació de los Acuerdos de Paz con rango constitucional para proteger los derechos ciudadanos frente al Estado."),
            ("La reforma militar contemplada en los Acuerdos de Chapultepec redefinió la misión de la Fuerza Armada como:",
             ["La defensa de la soberanía nacional y la integridad del territorio, bajo subordinación al poder civil democrático", "El control permanente del orden público y las aduanas terrestres", "La dirección exclusiva del Ministerio de Educación y Salud", "La potestad de vetar las leyes aprobadas por la Asamblea Legislativa"],
             "A", "Se eliminó el rol de la FAES como garante del orden interno y se suprimió la doctrina de seguridad nacional."),
            ("En materia electoral, los Acuerdos de Paz transformaron el sistema mediante:",
             ["La creación del Tribunal Supremo Electoral (TSE) y la incorporación del FMLN como partido político legal", "La instauración del voto censitario restringido a propietarios de tierras", "La prohibición de partidos políticos de orientación socialista", "La elección vitalicia de los magistrados por la presidencia"],
             "A", "El FMLN entregó las armas y se transformó en fuerza electoral civil bajo la supervisión de un árbitro independiente (TSE)."),
            ("El Programa de Transferencia de Tierras (PTT) contemplado en los Acuerdos de Paz tuvo como propósito:",
             ["Dotar de tierras agrícolas a desmovilizados de la FAES, excombatientes del FMLN y tenedores campesinos en zonas de conflicto", "Expropiar sin indemnización a todas las empresas transnacionales del país", "Vender parcelas a inversionistas hoteleros extranjeros", "Construir bases militares conjuntas en el golfo de Fonseca"],
             "A", "El PTT buscó la reintegración socioeconómica a la vida productiva de quienes habían participado en el conflicto armado."),
            ("La 'Comisión de la Verdad para El Salvador' (organizada por la ONU) tuvo como mandato específico:",
             ["Investigar y esclarecer los graves hechos de violencia y violaciones de derechos humanos ocurridos desde 1980", "Juzgar penalmente y encarcelar a los ministros de hacienda de la época", "Calcular el valor de las deudas financieras de los bancos privados", "Elaborar los nuevos planes de estudio de las escuelas primarias"],
             "A", "La Comisión emitió el histórico informe 'De la locura a la esperanza', documentando crímenes de guerra y masacres."),
            ("Cinco días después de la publicación del informe de la Comisión de la Verdad en marzo de 1993, la Asamblea Legislativa aprobó:",
             ["La Ley de Amnistía General para la Consolidación de la Paz (declarada inconstitucional en 2016)", "La disolución de la Corte Suprema de Justicia", "La inmediata indemnización económica a todas las víctimas civiles", "La reincorporación de los batallones de contrainsurgencia"],
             "A", "La Ley de Amnistía de 1993 impidió durante más de dos décadas la persecución penal de crímenes de lesa humanidad hasta su derogatoria por la Sala de lo Constitucional.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"Sobre el conflicto armado salvadoreño y los Acuerdos de Paz (reactivo {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"4.1_q{q_num}",
                "number": q_num,
                "subtopicId": "4.1",
                "subjectId": "sociales",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 4.2: GUERRA FRÍA, REVOLUCIÓN INDUSTRIAL Y ECONOMÍA SALVADOREÑA
    # =========================================================================
    elif subtopic_id == "4.2":
        sec1 = "SECCIÓN V: GUERRA FRÍA, CAÍDA DEL MURO Y REVOLUCIONES INDUSTRIALES (201–250)"
        sec2 = "SECCIÓN VI: MACROECONOMÍA SALVADOREÑA Y DOLARIZACIÓN (251–300)"

        data_201_250 = [
            ("El orden geopolítico mundial de la 'Guerra Fría' (1947-1991) se definió fundamentalmente como:",
             ["Un mundo bipolar caracterizado por el enfrentamiento ideológico, militar y tecnológico entre EE.UU. (capitalismo) y la URSS (comunismo)", "Un período de paz absoluta y desarme nuclear total pactado en la ONU", "Una alianza militar entre Europa y Asia para invadir el continente americano", "El dominio colonial exclusivo del Imperio Británico en todo el planeta"],
             "A", "Ambas superpotencias compitieron por zonas de influencia sin llegar a una confrontación bélica nuclear directa."),
            ("La 'Crisis de los Misiles' en Cuba (octubre de 1962) representó el momento de mayor tensión de la Guerra Fría debido a:",
             ["La instalación secreta de misiles nucleares soviéticos en Cuba y el bloqueo naval decretado por EE.UU.", "El desembarco exitoso de tropas francesas en la bahía de Cochinos", "La quiebra bancaria de la Unión Soviética por la compra de azúcar cubano", "La firma del Tratado de No Proliferación Nuclear en La Habana"],
             "A", "El mundo estuvo al borde de un holocausto atómico hasta que Jrushchov y Kennedy pactaron la retirada de los misiles."),
            ("Las reformas políticas y económicas implementadas por Mijaíl Gorbachov a mediados de los 80 que aceleraron el colapso soviético fueron:",
             ["La Glásnost (transparencia y apertura informativa) y la Perestroika (reestructuración económica)", "El Plan Marshall y la Doctrina Truman", "El New Deal y el fortalecimiento de los sindicatos agrícolas", "La Revolución Cultural y los planes quinquenales stalinistas"],
             "A", "La apertura democrática y el intento de descentralizar la economía desataron tensiones internas que desintegraron la URSS."),
            ("La caída del Muro de Berlín (9 de noviembre de 1989) simbolizó históricamente:",
             ["El colapso del bloque soviético en Europa del Este y el principio del fin de la Guerra Fría", "El inicio de la Segunda Guerra Mundial en territorio alemán", "La división permanente de Alemania en cuatro zonas de ocupación militar", "La fundación del Pacto de Varsovia por los países occidentales"],
             "A", "El derribo del muro allanó el camino a la reunificación alemana y desarticuló las dictaduras comunistas del este."),
            ("La Primera Revolución Industrial (finales del siglo XVIII en Gran Bretaña) tuvo como base tecnológica y energética:",
             ["La máquina de vapor alimentada por carbón mineral y la mecanización de la industria textil", "El motor de combustión interna alimentado por derivados del petróleo", "La energía atómica y la microelectrónica de silicio", "Los paneles solares y la energía eólica marina"],
             "A", "La máquina de vapor perfeccionada por James Watt revolucionó la producción fabril y el transporte ferroviario."),
            ("La Segunda Revolución Industrial (fines del siglo XIX) se diferenció de la primera por el auge de:",
             ["La electricidad, el motor de combustión interna de petróleo, el acero y la producción en cadena (fordismo)", "La fundición artesanal del bronce y la alfarería manual", "El telar manual de madera en los talleres gremiales domésticos", "La biotecnología molecular y los semiconductores cuánticos"],
             "A", "Introdujo nuevas fuentes de energía y la organización científica del trabajo (taylorismo/fordismo) a gran escala."),
            ("La Cuarta Revolución Industrial (Industria 4.0), que experimenta el mundo contemporáneo, se define por:",
             ["La convergencia digital, física y biológica: inteligencia artificial, robótica avanzada, Big Data y el Internet de las Cosas (IoT)", "El regreso a la manufactura artesanal sin apoyo de computadoras", "El monopolio del telégrafo de código Morse en las comunicaciones", "La sustitución de las energías renovables por carbón de piedra"],
             "A", "La digitalización y los sistemas ciberfísicos transforman radicalmente las cadenas de valor y el mercado de trabajo."),
            ("El concepto de 'Aldea Global', acuñado por Marshall McLuhan en la década de 1960, describe:",
             ["La interconexión instantánea del planeta a través de los medios electrónicos de comunicación masiva", "La despoblación de las grandes metrópolis para regresar al campo", "La creación de un único gobierno militar en todas las naciones", "La desaparición de los idiomas romances en favor del latín"],
             "A", "Las telecomunicaciones satelitales y digitales acortaron distancias transformando el mundo en una comunidad conectada."),
            ("Los 'Nuevos Movimientos Sociales' (feminismo, ecologismo, pacifismo, derechos LGTBIQ+) se distinguen de los obreros tradicionales porque:",
             ["Sus demandas giran en torno a la identidad, los derechos humanos, la autonomía y la calidad de vida, más allá de lo puramente salarial", "Rechazan el uso pacífico de manifestaciones públicas", "Exigen únicamente la nacionalización de los ferrocarriles", "Están organizados como ejércitos regulares con rangos militares"],
             "A", "Trascienden la lucha clásica de clases e incorporan reivindicaciones culturales, de género y de preservación planetaria."),
            ("La globalización económica contemporánea se ha visto acelerada principalmente por:",
             ["La apertura de mercados, la reducción arancelaria y la revolución tecnológica de las tecnologías de información (TIC)", "El cierre de fronteras aduaneras y la prohibición de viajes aéreos", "La imposición de aranceles punitivos a todos los barcos de carga", "El restablecimiento de las leyes feudales de servidumbre rural"],
             "A", "La interdependencia de los flujos de capital, mercancías y telecomunicaciones articuló un mercado planetario instantáneo.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En la dinámica de la Guerra Fría y transformaciones industriales (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"4.2_q{q_num}",
                "number": q_num,
                "subtopicId": "4.2",
                "subjectId": "sociales",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("El Producto Interno Bruto (PIB) se define macroeconómicamente como:",
             ["El valor monetario total de todos los bienes y servicios finales producidos dentro del territorio nacional en un período determinado (generalmente un año)", "La cantidad total de billetes y monedas impresos por la casa de moneda", "El saldo positivo de la balanza comercial de una empresa multinacional", "El promedio de sueldos de los funcionarios del gobierno central"],
             "A", "El PIB contabiliza la producción final interna sin importar la nacionalidad de los factores productivos."),
            ("El 'PIB per cápita' se obtiene al:",
             ["Dividir el PIB total de una nación entre su población absoluta", "Multiplicar el salario mínimo mensual por doce meses", "Restar la deuda externa al total de reservas internacionales", "Sumar los ingresos tributarios de las alcaldías municipales"],
             "A", "Es un indicador estándar utilizado internacionalmente para aproximar el nivel promedio de ingreso por habitante."),
            ("La inflación se manifiesta económicamente en un país como:",
             ["El aumento generalizado y sostenido del nivel de precios de bienes y servicios, reduciendo el poder adquisitivo de la moneda", "La caída drástica de las tasas de interés en los préstamos hipotecarios", "El incremento de la producción agrícola en las zonas de regadío", "La reducción de los precios de la canasta básica a la mitad"],
             "A", "La inflación erosiona la capacidad de compra de las familias, afectando en mayor proporción a los asalariados fijos."),
            ("La 'Ley de Integración Monetaria' (LIM) entró en vigencia en El Salvador el 1 de enero de 2001, estableciendo:",
             ["La libre circulación del dólar estadounidense con curso legal irrestricto a un tipo de cambio fijo de 8.75 colones por dólar", "La sustitución del colón salvadoreño por el euro europeo", "La creación de una moneda digital centroamericana exclusiva", "El rescate financiero de las cooperativas agrícolas en colones"],
             "A", "La LIM fijó la paridad en 8.75 y convirtió al dólar en la moneda de curso legal y contabilidad del país."),
            ("Una de las consecuencias macroeconómicas directas de la dolarización para el Estado salvadoreño fue:",
             ["La pérdida de soberanía de la política monetaria y la imposibilidad de que el BCR emita moneda o actúe como prestamista de última instancia", "El fin absoluto de la deuda externa del sector público", "La duplicación inmediata de las exportaciones de manufacturas a Europa", "La eliminación de todos los impuestos sobre la renta y el consumo"],
             "A", "Al adoptar el dólar, El Salvador no puede devaluar ni regular la masa monetaria, dependiendo de la política de la Reserva Federal de EE.UU."),
            ("El Impuesto al Valor Agregado (IVA) en El Salvador tiene una tasa del 13% y se clasifica técnicamente como un impuesto:",
             ["Indirecto y regresivo (grava el consumo sin considerar el nivel de ingresos del contribuyente)", "Directo y progresivo (quien gana más paga un porcentaje mayor)", "Exclusivo a las importaciones de bienes de lujo procedentes de Asia", "Municipal para el financiamiento de fiestas patronales"],
             "A", "El IVA grava la transferencia de bienes y servicios, recayendo en la misma proporción sobre pobres y ricos."),
            ("El déficit fiscal ocurre cuando en el presupuesto general de la nación:",
             ["Los gastos del Estado superan a los ingresos corrientes y tributarios generados en el ejercicio fiscal", "Los ingresos recaudados superan ampliamente las inversiones públicas", "Las exportaciones de café superan las importaciones de petróleo", "El Banco Central acumula superávit de reservas de oro"],
             "A", "El desbalance entre mayores gastos y menores ingresos obliga al Estado a recurrir al endeudamiento público."),
            ("Las remesas familiares enviadas por la diáspora salvadoreña impactan en la economía nacional principalmente al:",
             ["Sostener el consumo de los hogares (canasta básica) y actuar como soporte clave de la balanza de pagos y el sector servicios", "Financiar la construcción de plantas de energía nuclear", "Pagar directamente los sueldos del cuerpo diplomático consular", "Invertirse mayoritariamente en la industria petroquímica pesada"],
             "A", "Las remesas representan más del 25% del PIB salvadoreño, amortiguando la pobreza y dinamizando el comercio."),
            ("La Balanza de Pagos de un país registra contablemente:",
             ["Todas las transacciones económicas, comerciales y financieras de un país con el resto del mundo durante un período", "El inventario físico de las armas en posesión del ejército", "El número de turistas que visitan las playas cada fin de semana", "La nómina salarial de los empleados de la alcaldía capitalina"],
             "A", "Incluye la balanza por cuenta corriente (bienes, servicios, rentas, transferencias) y la cuenta de capital y financiera."),
            ("El modelo económico implementado en El Salvador a partir de 1989 se basó en el Consenso de Washington, cuyas políticas principales fueron:",
             ["Privatizaciones de la banca y telecomunicaciones, desregulación de precios, apertura comercial y reducción del aparato estatal", "La nacionalización de las empresas petroleras y la creación de granjas colectivas", "La prohibición de toda inversión extranjera en el territorio nacional", "El control estatal obligatorio de los precios de todos los productos alimenticios"],
             "A", "Se aplicaron reformas estructurales neoliberales orientadas al libre mercado y la retirada del Estado interventor.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En el análisis macroeconómico de El Salvador y dolarización (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"4.2_q{q_num}",
                "number": q_num,
                "subtopicId": "4.2",
                "subjectId": "sociales",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 4.3: SOCIEDAD, CULTURA, MEDIO AMBIENTE Y VULNERABILIDAD
    # =========================================================================
    elif subtopic_id == "4.3":
        sec1 = "SECCIÓN V: IDENTIDAD CULTURAL, URBANIZACIÓN Y FUNCIÓN CONSULAR (201–250)"
        sec2 = "SECCIÓN VI: LEGISLACIÓN AMBIENTAL, VULNERABILIDAD Y ODS (251–300)"

        data_201_250 = [
            ("Según el antropólogo y sociólogo Néstor García Canclini, el fenómeno de la 'Hibridación Cultural' se define como:",
             ["Los procesos socioculturales en los que estructuras o prácticas discretas, que existían de forma separada, se combinan para generar nuevas estructuras y prácticas", "La desaparición absoluta de las costumbres locales frente a la cultura dominante", "La prohibición gubernamental de celebrar fiestas religiosas coloniales", "El aislamiento genético de comunidades rurales de montaña"],
             "A", "La hibridación describe cómo las culturas tradicionales se mezclan con la modernidad urbana y las industrias globales."),
            ("El fenómeno de la 'aculturación' en sociología hace referencia a:",
             ["El proceso de recepción y asimilación de elementos culturales de un grupo humano que entra en contacto con otra cultura, modificando sus pautas originales", "La preservación intacta y milenaria de tradiciones sin influencia alguna", "El olvido voluntario de la lengua materna sin contacto con otros grupos", "La enseñanza formal de la gramática en los centros universitarios"],
             "A", "La aculturación implica transformaciones culturales derivadas de relaciones de contacto intercultural continuo."),
            ("El proceso de 'conurbación' en el Área Metropolitana de San Salvador (AMSS) se caracteriza urbanísticamente por:",
             ["La unión física y funcional de varios municipios vecinos (San Salvador, Soyapango, Santa Tecla, etc.) conformando un solo conglomerado urbano continuo", "La demolición de los centros históricos para construir puertos marítimos", "La separación de los municipios por franjas agrícolas de 50 kilómetros de ancho", "La reubicación obligatoria de toda la población urbana hacia zonas costeras"],
             "A", "La conurbación expande el tejido urbano borrando los límites geográficos entre municipios metropolitanos."),
            ("El fenómeno urbano de la 'gentrificación' se produce cuando:",
             ["Un barrio tradicional o degradado se rehabilita comercial y arquitectónicamente, provocando el encarecimiento del suelo y el desplazamiento de sus habitantes originarios de menores ingresos", "Se fundan ciudades satélites exclusivas para agricultores de subsistencia", "Se construyen fábricas textiles en medio de las reservas biológicas forestales", "Los campesinos ocupan los terrenos abandonados de las vías del tren"],
             "A", "La gentrificación eleva el coste habitacional atrayendo a población de mayor poder adquisitivo y expulsando a los residentes tradicionales."),
            ("La función primordial de la red de consulados de El Salvador en el exterior según la Convención de Viena sobre Relaciones Consulares es:",
             ["Proteger y asistir a los connacionales, emitir pasaportes, autenticar documentos y velar por sus derechos en el país receptor", "Intervenir en los juicios penales extranjeros para perdonar delitos graves", "Declarar guerras bilaterales en nombre del gobierno salvadoreño", "Administrar los bancos centrales de las naciones donde operan"],
             "A", "Los consulados brindan servicios registrales, protección consular y asistencia humanitaria a la diáspora salvadoreña."),
            ("El salvoconducto consular emitido por un consulado salvadoreño a un connacional en el exterior sirve para:",
             ["Permitir su retorno urgente a El Salvador en caso de extravío, vencimiento o robo de su pasaporte", "Ingresar a cualquier país del mundo sin necesidad de visado diplomático", "Cobrar el salario mensual de su trabajo en moneda extranjera", "Comprar bienes inmuebles sin pagar impuestos notariales"],
             "A", "El salvoconducto es un documento de viaje de emergencia de un solo uso para regresar a territorio nacional."),
            ("En la sociología de la comunicación, la 'Brecha Digital' se define como:",
             ["La desigualdad socioeconómica en el acceso, uso y apropiación de las tecnologías de la información y la comunicación (TIC) e internet", "La distancia física entre las antenas de transmisión de telefonía celular", "La rivalidad comercial entre empresas de software de código abierto", "El tiempo que tarda una computadora portátil en encender su pantalla"],
             "A", "La brecha digital profundiza las desigualdades educativas y económicas entre sectores urbanos y rurales marginados."),
            ("La 'transculturación' (concepto acuñado por el sabio Fernando Ortiz) se diferencia de la aculturación al enfatizar:",
             ["La síntesis creadora: la pérdida parcial de una cultura precedente y la gestación de un fenómeno cultural nuevo e híbrido", "El rechazo violento a toda influencia extranjera en el folclor", "La imposición militar que aniquila completamente a un pueblo", "El aprendizaje memorístico de dos idiomas extranjeros a la vez"],
             "A", "Describe el proceso trifásico de transmutación: deculturación, pérdida parcial y neoculturación creadora."),
            ("El patrimonio cultural inmaterial de una nación (según la UNESCO) comprende:",
             ["Tradiciones orales, artes del espectáculo, usos sociales, rituales, festividades y saberes tradicionales artesanales", "Los edificios históricos construidos exclusivamente en cemento y acero", "Las reservas monetarias de oro depositadas en los bancos centrales", "Las carreteras pavimentadas y los puentes de concreto"],
             "A", "Abarca las prácticas, expresiones y saberes que las comunidades transmiten de generación en generación."),
            ("El acelerado crecimiento demográfico y urbano sin planificación en el AMSS ha generado problemas estructurales tales como:",
             ["Estrés hídrico, saturación del tráfico vial, proliferación de cárcavas y escasez de vivienda social asequible", "Exceso de tierras de cultivo de algodón en el centro histórico", "Falta total de mano de obra en los sectores de servicios bancarios", "Inundación permanente del valle debido al desborde del océano Pacífico"],
             "A", "La falta de ordenamiento territorial provoca vulnerabilidad ambiental, caos vehicular y precariedad urbana.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En el ámbito de la sociología urbana, cultura y función consular (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"4.3_q{q_num}",
                "number": q_num,
                "subtopicId": "4.3",
                "subjectId": "sociales",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("La Ley del Medio Ambiente de El Salvador (aprobada en 1998) tiene como objeto primordial:",
             ["Desarrollar las disposiciones de la Constitución sobre la protección, conservación y recuperación del medio ambiente y el uso sostenible de los recursos naturales", "Privatizar todas las fuentes de agua dulce superficial y subterránea del país", "Autorizar la deforestación indiscriminada en las cuencas hidrográficas", "Permitir la libre importación de residuos radiactivos procedentes de ultramar"],
             "A", "Fija el régimen normativo ambiental del Estado salvadoreño para garantizar un entorno ecológicamente equilibrado."),
            ("El instrumento de gestión ambiental de carácter preventivo obligatorio para proyectos con impacto potencial significativo es:",
             ["El Estudio de Impacto Ambiental (EsIA) y la obtención del Permiso Ambiental del MARN", "El pago de un arbitrio municipal trimestral", "La publicación de una fe de errata en un diario nacional", "Una encuesta de opinión en redes sociales"],
             "A", "El EsIA identifica, evalúa y propone medidas de mitigación para impactos ambientales antes de autorizar obras."),
            ("El 'Corredor Seco Centroamericano', en el cual se ubica la mayor parte del oriente y norte de El Salvador, se caracteriza ecológicamente por:",
             ["Sequías recurrentes, altas temperaturas, degradación de suelos y extrema vulnerabilidad ante el fenómeno de El Niño", "Lluvias torrenciales ininterrumpidas durante los doce meses del año", "Clima polar con nevadas frecuentes en los valles intermontanos", "La presencia de glaciares permanentes en las cimas volcánicas"],
             "A", "Es una zona altamente vulnerable al cambio climático con severo impacto en la seguridad alimentaria campesina."),
            ("En la legislación salvadoreña, la 'Vulnerabilidad Ambiental' se entiende técnicamente como:",
             ["La susceptibilidad de las poblaciones, infraestructuras y ecosistemas a sufrir daños frente a la manifestación de una amenaza natural o antrópica", "La cantidad de lluvia caída medida en milímetros cúbicos", "La resistencia indestructible de las construcciones de adobe y bahareque", "El número de hectáreas sembradas con árboles frutales"],
             "A", "El riesgo se define como el producto de la interacción entre una amenaza física y el grado de vulnerabilidad social."),
            ("El 29 de marzo de 2017, la Asamblea Legislativa de El Salvador marcó un precedente ambiental mundial histórico al aprobar:",
             ["La Ley de Prohibición de la Minería Metálica en todas sus formas (suelo y subsuelo)", "La tala rasa de los bosques de la cordillera del Bálsamo", "El vertido libre de relaves mineros en el río San Sebastián", "La venta de las lagunas volcánicas a consorcios privados extranjeros"],
             "A", "El Salvador se convirtió en el primer país del mundo en prohibir totalmente la minería metálica para proteger sus fuentes hídricas."),
            ("El Objetivo de Desarrollo Sostenible número 6 (ODS 6) de la Agenda 2030 de la ONU establece la meta de:",
             ["Garantizar la disponibilidad y la gestión sostenible del agua y el saneamiento para todos", "Construir submarinos de propulsión nuclear para todos los países miembros", "Prohibir el uso de energía hidroeléctrica en los ríos internacionales", "Duplicar el consumo de bebidas gaseosas en las escuelas públicas"],
             "A", "El ODS 6 busca el acceso universal y equitativo al agua potable asequible y servicios de saneamiento e higiene."),
            ("El cambio climático global se debe antropogénicamente de manera principal a:",
             ["La emisión desmedida de Gases de Efecto Invernadero (GEI como CO2 y metano) por la quema de combustibles fósiles y la deforestación", "Los cambios en la órbita de la luna alrededor de la tierra", "El enfriamiento del magma del núcleo terrestre", "Las pruebas astronómicas con telescopios espaciales"],
             "A", "El incremento de la concentración de GEI retiene calor infrarrojo en la troposfera, elevando la temperatura global."),
            ("El 'estrés hídrico' severo que enfrenta El Salvador se debe a la confluencia de:",
             ["La alta contaminación del agua superficial (más del 80%), deforestación de zonas de recarga y el aumento de la demanda urbana e industrial", "El congelamiento de los manantiales de montaña durante el verano", "La falta de ríos caudalosos en el territorio nacional", "El desvío de todo el caudal del río Lempa hacia el mar Caribe"],
             "A", "La degradación ecológica y la sobreexplotación acuífera ponen en riesgo la seguridad hídrica de las futuras generaciones."),
            ("En la gestión integral de riesgos de desastres, la diferencia entre 'mitigación' y 'adaptación' consiste en que:",
             ["La mitigación busca reducir o evitar las emisiones de GEI; la adaptación busca ajustar los sistemas humanos a los efectos del cambio climático", "La mitigación construye puentes y la adaptación destruye carreteras", "La adaptación es una medida legal y la mitigación es un delito penal", "No existe diferencia: son sinónimos gramaticales idénticos"],
             "A", "Mitigar es atacar las causas (frenar emisiones); adaptar es reducir la vulnerabilidad frente a impactos inevitables."),
            ("La Ley de Protección Civil, Prevención y Mitigación de Desastres de El Salvador otorga al Sistema Nacional la facultad de:",
             ["Emitir alertas de emergencia (verde, amarilla, naranja y roja) y coordinar comisiones técnico-científicas y operativas de auxilio", "Dictar sentencias penales de prisión perpetua a ciudadanos", "Modificar las tasas de interés bancarias del sistema financiero", "Disolver la policía nacional civil en caso de lluvia"],
             "A", "El Sistema Nacional de Protección Civil articula instituciones públicas, cuerpos de socorro y comunidades ante desastres.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En relación con el marco ambiental, vulnerabilidad y cambio climático (reactivo {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"4.3_q{q_num}",
                "number": q_num,
                "subtopicId": "4.3",
                "subjectId": "sociales",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 4.4: DERECHOS HUMANOS, LEGISLACIÓN Y SISTEMA POLÍTICO
    # =========================================================================
    elif subtopic_id == "4.4":
        sec1 = "SECCIÓN V: DERECHOS HUMANOS, LEGISLACIÓN LABORAL Y PROTECCIÓN INTEGRAL (201–250)"
        sec2 = "SECCIÓN VI: SISTEMA POLÍTICO SALVADOREÑO, MIGRACIÓN Y TRANSPARENCIA (251–300)"

        data_201_250 = [
            ("En la clasificación generacional de los Derechos Humanos, los derechos de Primera Generación comprenden:",
             ["Los derechos civiles y políticos (vida, libertad de expresión, igualdad ante la ley y sufragio)", "Los derechos económicos, sociales y culturales (educación, salud, vivienda digna)", "Los derechos de los pueblos o de solidaridad (la paz, el medio ambiente sano)", "Los derechos digitales y de acceso universal a la inteligencia artificial"],
             "A", "Surgieron con las revoluciones liberales del siglo XVIII para proteger la libertad individual frente a los abusos del poder estatal."),
            ("Los derechos humanos de Segunda Generación (DESC) exigen al Estado fundamentalmente:",
             ["Una intervención activa prestacional para garantizar la justicia social, el trabajo digno, la salud y la seguridad social", "La abstención total de intervenir en las actividades de los ciudadanos", "El servicio militar obligatorio de todos los profesionales", "La censura previa de todas las publicaciones de prensa"],
             "A", "Los DESC demandan condiciones materiales mínimas de existencia para la dignidad humana y el bienestar colectivo."),
            ("Los derechos de Tercera Generación o 'de los pueblos' protegen intereses colectivos difusos tales como:",
             ["El derecho a un medio ambiente sano, la autodeterminación de los pueblos y el derecho a la paz", "El derecho exclusivo a registrar patentes farmacéuticas privadas", "El monopolio comercial de las empresas navieras", "El sufragio censitario restringido a los varones"],
             "A", "Responden a la necesidad de cooperación y solidaridad internacional frente a problemas ecológicos y bélicos mundiales."),
            ("La 'Ley Crecer Juntos' para la Protección Integral de la Primera Infancia, Niñez y Adolescencia se sustenta en el principio de:",
             ["El Interés Superior de la Niñez y la corresponsabilidad de la familia, el Estado y la sociedad", "La subordinación incondicional de los niños a las decisiones del empleador laboral", "La eliminación de las escuelas públicas rurales", "El tratamiento del menor como objeto pasivo de beneficencia tutelar"],
             "A", "Reconoce a los niños y adolescentes como plenos sujetos de derechos conforme a la Convención sobre los Derechos del Niño."),
            ("La 'Ley Especial Integral para una Vida Libre de Violencia para las Mujeres' (LEIV) tipifica y sanciona modalidades de violencia tales como:",
             ["Violencia económica, feminicida, psicológica, física, patrimonial, sexual y simbólica", "Únicamente el desacuerdo verbal en asambleas comunitarias", "La impuntualidad en el horario de entrada al trabajo", "La falta de pago de impuestos en aduanas terrestres"],
             "A", "La LEIV visibiliza las múltiples dimensiones estructurales del patriarcado y la discriminación contra las mujeres."),
            ("Según el Código de Trabajo de El Salvador, la jornada ordinaria de trabajo diurno no puede exceder legalmente de:",
             ["8 horas diarias y 44 horas semanales", "12 horas diarias y 60 horas semanales", "6 horas diarias y 30 horas semanales", "10 horas diarias y 48 horas semanales"],
             "A", "El Código fija como tope ordinario diurno 8 horas al día y una semana laboral máxima de 44 horas."),
            ("El fuero sindical consagrado en el artículo 47 de la Constitución salvadoreña protege a los directivos sindicales contra:",
             ["El despido injustificado, traslado o desmejora de sus condiciones laborales durante su mandato y hasta un año después", "El pago de impuestos sobre la renta en los supermercados", "La obligación de someterse a las leyes penales de tránsito vehicular", "Cualquier investigación judicial sobre su conducta cívica"],
             "A", "El fuero garantiza la libertad sindical evitando que el empleador tome represalias contra la representación laboral."),
            ("El derecho al 'Aguinaldo' o compensación de fin de año en El Salvador es un derecho laboral obligatorio cuyo monto se calcula según:",
             ["La antigüedad del trabajador en la empresa (de 1 a 3 años: 15 días de salario; de 3 a 10 años: 19 días; más de 10 años: 21 días)", "El criterio discrecional del patrono de acuerdo a su afinidad personal", "Una tarifa fija de diez dólares para todos los empleados del país", "La cantidad de horas extras trabajadas únicamente en el mes de diciembre"],
             "A", "El Código de Trabajo escala el pago de la prima anual según los años ininterrumpidos de servicio en la empresa."),
            ("En la legislación sobre propiedad intelectual salvadoreña, los 'Derechos de Autor' protegen:",
             ["Las obras literarias, artísticas y científicas originales desde el momento mismo de su creación", "Las marcas de fábrica y los nombres comerciales de tiendas de ropa", "Las invenciones mecánicas susceptibles de aplicación industrial", "Los secretos bancarios de las cuentas corrientes financieras"],
             "A", "El derecho de autor ampara la dimensión moral inalienable y los derechos patrimoniales sobre creaciones intelectuales."),
            ("A diferencia de los derechos de autor, las 'Patentes de Invención' (Propiedad Industrial) otorgan a su titular:",
             ["El monopolio temporal de explotación exclusiva de una novedad técnica susceptible de aplicación industrial por un plazo determinado (generalmente 20 años)", "La propiedad perpetua de los descubrimientos de leyes físicas de la naturaleza", "El derecho a cobrar regalías por todas las obras pictóricas del siglo XIX", "Un título nobiliario expedido por el Centro Nacional de Registros (CNR)"],
             "A", "La patente protege soluciones técnicas novedosas otorgando exclusividad comercial temporal a cambio de divulgación pública.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En el ámbito de los Derechos Humanos y normativa laboral (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"4.4_q{q_num}",
                "number": q_num,
                "subtopicId": "4.4",
                "subjectId": "sociales",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("El artículo 85 de la Constitución de la República de El Salvador establece como forma de gobierno del Estado:",
             ["Republicano, democrático y representativo", "Monárquico constitucional con parlamento vitalicio", "Teocrático confesional con consejo eclesiástico", "Autocrático federal de partido único"],
             "A", "La Carta Magna consagra la república representativa y el pluralismo político como base del sistema democrático."),
            ("El principio constitucional de separación, independencia y equilibrio de poderes del Estado se divide entre:",
             ["Órgano Legislativo (Asamblea Legislativa), Órgano Ejecutivo (Presidencia) y Órgano Judicial (Corte Suprema de Justicia)", "Consejo de Ministros, Cruz Roja y Asociación de Bancos", "Policía Nacional Civil, Fuerza Armada y Bomberos", "Tribunal Supremo Electoral, Alcaldías y Defensoría del Consumidor"],
             "A", "La clásica división republicana de poderes garantiza los pesos y contrapesos (checks and balances) del Estado de derecho."),
            ("El 'Control Difuso de Constitucionalidad' en el ordenamiento jurídico salvadoreño permite a:",
             ["Cualquier juez o tribunal de la República inaplicar una ley secundaria que resulte contraria a la Constitución en un caso concreto", "El presidente vetar leyes sin justificación alguna", "Los diputados disolver la policía durante las plenarias", "Los ciudadanos anular multas de tránsito mediante votación vecinal"],
             "A", "Todos los jueces tienen el deber de hacer prevalecer la Constitución inaplicando preceptos secundarios incompatibles."),
            ("La 'Ley de Acceso a la Información Pública' (LAIP) y el IAIP tienen como finalidad primordial:",
             ["Garantizar el derecho de toda persona a acceder a la información de las instituciones del Estado, promoviendo la rendición de cuentas y combatiendo la corrupción", "Supervisar las llamadas telefónicas personales de los ciudadanos", "Cobrar tributos especiales por la lectura de periódicos", "Prohibir la divulgación de las sesiones de la Asamblea"],
             "A", "La LAIP consagra el principio de máxima publicidad: la información en poder del Estado es pública por regla general."),
            ("En la LAIP, la información pública que las instituciones deben publicar obligatoriamente en sus sitios web sin necesidad de que nadie la solicite se llama:",
             ["Información oficiosa", "Información confidencial", "Información reservada", "Información secreta"],
             "A", "La información oficiosa (presupuestos, salarios, contrataciones) debe estar permanentemente disponible a la ciudadanía."),
            ("La información catalogada como 'Confidencial' en la LAIP comprende:",
             ["Los datos personales en poder de las entidades estatales cuya divulgación requiera el consentimiento expreso del titular", "Las leyes aprobadas y publicadas en el Diario Oficial", "Los organigramas institucionales de los ministerios", "El monto de los presupuestos aprobados para obras viales"],
             "A", "Los datos personales (salud, intimidad, dirección particular) están protegidos para resguardar la privacidad del individuo."),
            ("El fenómeno de la migración irregular salvadoreña hacia el norte responde a causas estructurales multicausales, destacando principalmente:",
             ["Falta de oportunidades de empleo digno, pobreza, violencia social y deseo de reunificación familiar", "El exceso de lluvia que inunda todo el territorio nacional", "La obligación gubernamental de salir del país a los 18 años", "El cierre total de todas las universidades del país"],
             "A", "La migración es impulsada por factores de expulsión socioeconómica y violencia combinados con la atracción laboral exterior."),
            ("El 'Estatus de Protección Temporal' (TPS) otorgado por Estados Unidos a ciudadanos salvadoreños a raíz de los terremotos de 2001 es:",
             ["Un beneficio migratorio temporal que brinda permiso de trabajo y frena la deportación, sin otorgar residencia permanente automática", "La concesión inmediata de la ciudadanía estadounidense con pasaporte azul", "Un subsidio económico mensual enviado por el gobierno norteamericano", "Una visa de turista válida por dos meses en aeropuertos"],
             "A", "El TPS protege temporalmente contra la expulsión pero no constituye un estatus de inmigrante legal definitivo."),
            ("El fenómeno de la 'fuga de cerebros' provocado por la migración internacional genera en el país de origen:",
             ["La pérdida de capital humano altamente cualificado (médicos, ingenieros, científicos) en cuya formación el país invirtió recursos", "El aumento inmediato del número de centros de investigación científica", "La eliminación del analfabetismo en los cantones rurales", "El enriquecimiento de los laboratorios universitarios locales"],
             "A", "La emigración de profesionales calificados resta talento estratégico para el desarrollo socioeconómico interno."),
            ("El Tribunal Supremo Electoral (TSE) de El Salvador es la máxima autoridad de la República en materia electoral encargada de:",
             ["Convocar, organizar, dirigir y fiscalizar los procesos electorales y escrutar los sufragios de manera imparcial", "Nombrar a los ministros y secretarios del gabinete de gobierno", "Dictar penas de prisión a los militares insubordinados", "Aprobar el Presupuesto General de la Nación"],
             "A", "El TSE ejerce jurisdicción electoral independiente para asegurar la pureza del sufragio y la alternancia democrática.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En el análisis del sistema político salvadoreño y transparencia (reactivo {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"4.4_q{q_num}",
                "number": q_num,
                "subtopicId": "4.4",
                "subjectId": "sociales",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    return questions
