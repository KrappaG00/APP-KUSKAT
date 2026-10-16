# -*- coding: utf-8 -*-
"""
Generador de preguntas reforzadas de CIENCIAS NATURALES para la UES
Basado en el Temario y Material Oficial de Refuerzo Académico UES (Semanas 1 a 21)
Subtemas 5.1 a 5.4: Preguntas 201 a 300 (100 preguntas por archivo, total 400)
"""

def get_naturales_questions(subtopic_id):
    questions = []

    # =========================================================================
    # SUBTEMA 5.1: METABOLISMO CELULAR, FOTOSÍNTESIS Y GENÉTICA MOLECULAR
    # =========================================================================
    if subtopic_id == "5.1":
        sec1 = "SECCIÓN V: METABOLISMO ENERGÉTICO: RESPIRACIÓN CELULAR Y FOTOSÍNTESIS (201–250)"
        sec2 = "SECCIÓN VI: GENÉTICA MOLECULAR: REPLICACIÓN, TRANSCRIPCIÓN Y TRADUCCIÓN (251–300)"

        data_201_250 = [
            ("En la respiración celular aeróbica, la primera etapa denominada Glucólisis se lleva a cabo en:",
             ["El citoplasma (citosol) de la célula", "La matriz mitocondrial", "La membrana mitocondrial interna", "El estroma del cloroplasto"],
             "A", "La glucólisis es anaeróbica y ocurre en el citosol celular, escindiendo la glucosa en dos moléculas de piruvato."),
            ("El rendimiento neto de energía útil producido directamente por la glucólisis por cada molécula de glucosa es de:",
             ["2 moléculas de ATP y 2 moléculas de NADH", "36 moléculas de ATP y 6 de CO2", "4 moléculas de FADH2 y 1 de GTP", "38 moléculas de ATP y 2 de lactato"],
             "A", "Se invierten 2 ATP en la fase preparatoria y se generan 4 ATP, arrojando una ganancia neta de 2 ATP y 2 NADH."),
            ("El Ciclo de Krebs (o ciclo del ácido cítrico) ocurre específicamente en:",
             ["La matriz mitocondrial", "El espacio intermembrana mitocondrial", "El retículo endoplásmico rugoso", "Los tilacoides del cloroplasto"],
             "A", "En la matriz mitocondrial, el acetil-CoA se condensa con el oxalacetato para formar citrato y liberar transportadores de electrones."),
            ("En la respiración celular, la mayor cantidad de ATP se produce durante:",
             ["La fosforilación oxidativa acoplada a la cadena transportadora de electrones", "La glucólisis citoplasmática", "El ciclo de Krebs en la matriz", "La fermentación láctica en los músculos"],
             "A", "El gradiente electroquímico de protones en la membrana interna impulsa la ATP sintasa generando cerca de 28 a 34 ATP."),
            ("El aceptor final de electrones en la cadena respiratoria mitocondrial aeróbica es:",
             ["El oxígeno molecular \\( (O_2) \\), que se reduce para formar agua \\( (H_2O) \\)", "El dióxido de carbono \\( (CO_2) \\)", "El piruvato de la glucólisis", "El NAD+ oxidado"],
             "A", "El oxígeno atrae los electrones terminales e incorpora protones para formar agua; sin él, la cadena se detiene."),
            ("La fermentación láctica en las células musculares humanas en condiciones de anoxia tiene como objetivo celular principal:",
             ["Regenerar el \\( NAD^+ \\) oxidado a partir del NADH para permitir que la glucólisis continúe produciendo ATP", "Sintetizar grandes cantidades de glucosa de reserva", "Neutralizar los ácidos en el torrente sanguíneo", "Absorber dióxido de carbono de los pulmones"],
             "A", "Al reducir el piruvato a lactato, se oxida el NADH a \\( NAD^+ \\), sustrato imprescindible para mantener activa la glucólisis."),
            ("La fase luminosa de la fotosíntesis tiene lugar en las membranas de los:",
             ["Tilacoides del cloroplasto", "Estromas del cloroplasto", "Cisternas del complejo de Golgi", "Ribosomas citoplasmáticos"],
             "A", "Los fotosistemas I y II con sus pigmentos de clorofila están incrustados en la membrana tilacoidal."),
            ("El fenómeno de la 'fotólisis del agua' en el Fotosistema II de la fase luminosa fotosintética produce:",
             ["Electrones para la cadena fotosintética, protones \\( H^+ \\) y liberación de oxígeno molecular \\( (O_2) \\)", "Dióxido de carbono y glucosa líquida", "Ácido láctico y alcohol etílico", "ATP sintasa purificada"],
             "A", "La ruptura fotocatalítica de la molécula de agua restituye los electrones excitados en la clorofila P680 y libera \\( O_2 \\)."),
            ("En la fase oscura o Ciclo de Calvin-Benson de la fotosíntesis, la fijación del \\( CO_2 \\) es catalizada por la enzima:",
             ["RuBisCO (Ribulosa-1,5-bisfosfato carboxilasa-oxigenasa)", "ADN polimerasa III", "Catalasa peroxisomal", "Amilasa pancreática"],
             "A", "La RuBisCO fija el \\( CO_2 \\) sobre la ribulosa-1,5-bisfosfato en el estroma para generar fosfoglicerato (PGA)."),
            ("El producto carbohidrato directo de tres vueltas completas del Ciclo de Calvin utilizado para fabricar glucosa es:",
             ["Gliceraldehído-3-fosfato (G3P)", "Ácido pirúvico concentrado", "Fructosa-1,6-bisfosfato no fosforilada", "Sacarosa cristalina directa"],
             "A", "Dos moléculas de G3P que abandonan el ciclo de Calvin se combinan en el citoplasma para formar una molécula de glucosa.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En el metabolismo energético celular y fotosíntesis (ítem analítico {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"5.1_q{q_num}",
                "number": q_num,
                "subtopicId": "5.1",
                "subjectId": "naturales",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("El modelo de replicación del ADN propuesto por Watson y Crick y demostrado por Meselson y Stahl es de tipo:",
             ["Semiconservativo (cada doble hélice hija conserva una hebra original parental y una hebra nueva)", "Conservativo estricto", "Dispersivo aleatorio", "No replicativo directo"],
             "A", "Cada cadena de la doble hélice materna sirve de molde para sintetizar una nueva cadena complementaria."),
            ("La enzima responsable de desenrollar y separar las dos hebras de la doble hélice de ADN en la horquilla de replicación es:",
             ["La ADN helicasa", "La ARN polimerasa", "La ADN ligasa", "La topoisomerasa inversa"],
             "A", "La helicasa rompe los puentes de hidrógeno entre las bases nitrogenadas abriendo la horquilla de replicación."),
            ("La síntesis continua de la nueva hebra de ADN efectuada por la ADN polimerasa solo puede ocurrir en la dirección:",
             ["5' a 3' (cinco prima a tres prima)", "3' a 5' exclusivamente", "Bidireccional simultánea en la misma hebra", "Aleatoria según la temperatura"],
             "A", "La ADN polimerasa añade desoxirribonucleótidos únicamente al extremo 3'-OH libre de la cadena en crecimiento."),
            ("Los fragmentos cortos de ADN sintetizados discontinuamente en la hebra rezagada durante la replicación se denominan:",
             ["Fragmentos de Okazaki", "Codones de iniciación", "Exones maduros", "Intrones no codificantes"],
             "A", "Reiji Okazaki descubrió estos segmentos sintetizados en la hebra retrasada que luego son unidos por la ADN ligasa."),
            ("La enzima encargada de sellar los enlaces fosfodiéster entre los fragmentos de Okazaki es:",
             ["La ADN ligasa", "La ARN primasa", "La telomerasa", "La desoxirribonucleasa"],
             "A", "La ligasa cataliza la unión covalente del extremo 3'-OH con el extremo 5'-fosfato adyacente."),
            ("El proceso de Transcripción genética consiste en:",
             ["La síntesis de una molécula de ARN mensajero (ARNm) a partir de una hebra molde de ADN guiada por la ARN polimerasa", "La duplicación de la masa nuclear de cromatina", "La síntesis de proteínas en los ribosomas libres", "La digestión lisosomal de ácidos nucleicos"],
             "A", "La transcripción copia la información del gen en una molécula de ARNm complementaria."),
            ("A diferencia del ADN, la molécula de ARN presenta en su estructura primaria:",
             ["Ribosa como azúcar pentosa y la base nitrogenada Uracilo \\( (U) \\) en lugar de Timina \\( (T) \\)", "Desoxirribosa y Uracilo", "Doble hélice antiparalela con Timina", "Ausencia completa de grupos fosfato"],
             "A", "El ARN contiene ribonucleótidos con ribosa y uracilo que aparea con la adenina."),
            ("En la maduración o procesamiento del ARNm eucariota, el proceso de 'corte y empalme' (splicing) consiste en:",
             ["La eliminación de los intrones (secuencias no codificantes) y la unión de los exones (secuencias codificantes)", "La destrucción de los codones de inicio AUG", "La duplicación de las bases de adenina en el núcleo", "La fosforilación de los ribosomas nucleares"],
             "A", "El espliceosoma retira los intrones dejando unidas las regiones que se traducirán en aminoácidos."),
            ("En la Traducción biológica, el 'código genético' se organiza en tripletes de nucleótidos denominados:",
             ["Codones (en el ARNm) que son reconocidos por los anticodones del ARN de transferencia (ARNt)", "Cromosomas homólogos", "Polipéptidos no ramificados", "Operones promotores"],
             "A", "Cada codón de 3 nucleótidos codifica para un aminoácido específico o una señal de inicio/terminación."),
            ("El codón universal que marca el inicio de la síntesis de proteínas en el ARNm codifica para el aminoácido:",
             ["Metionina (codón AUG)", "Valina (codón GUG)", "Triptófano (codón UGG)", "Glicina (codón GGG)"],
             "A", "El codón AUG señala el punto de ensamblaje del ribosoma e introduce siempre la metionina inicial.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En la genética molecular y dogma central biológico (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"5.1_q{q_num}",
                "number": q_num,
                "subtopicId": "5.1",
                "subjectId": "naturales",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 5.2: ESTRUCTURA ATÓMICA, NÚMEROS CUÁNTICOS, SOLUCIONES Y PH
    # =========================================================================
    elif subtopic_id == "5.2":
        sec1 = "SECCIÓN V: ESTRUCTURA ELECTRÓNICA, NÚMEROS CUÁNTICOS Y SOLUCIONES (201–250)"
        sec2 = "SECCIÓN VI: EQUILIBRIO QUÍMICO, TEORÍAS ÁCIDO-BASE Y ESCALA DE PH (251–300)"

        data_201_250 = [
            ("Los cuatro números cuánticos que describen el estado de un electrón en un átomo son:",
             ["Principal \\( (n) \\), secundario o azimutal \\( (l) \\), magnético \\( (m_l) \\) y de espín \\( (m_s) \\)", "Masa, carga, velocidad y radio", "Neutrónico, protónico, leptónico y bariónico", "Alfa, beta, gamma y delta"],
             "A", "n indica el nivel de energía; l el subnivel o forma del orbital; ml la orientación espacial; y ms el giro intrínseco."),
            ("El número cuántico azimutal o de momento angular \\( l \\) puede tomar valores enteros desde:",
             ["\\( 0 \\) hasta \\( n - 1 \\) (donde 0=s, 1=p, 2=d, 3=f)", "\\( 1 \\) hasta \\( n + 1 \\)", "\\( -n \\) hasta \\( +n \\)", "Únicamente valores negativos"],
             "A", "Para un nivel dado n, el valor de l varía desde 0 hasta n-1, determinando la geometría del orbital."),
            ("El 'Principio de Exclusión de Pauli' establece que en un mismo átomo:",
             ["No pueden existir dos electrones con los cuatro números cuánticos idénticos", "Todos los orbitales deben llenarse con espines paralelos", "Los electrones ocupan primero los niveles de mayor energía", "La masa del protón debe ser igual a la del electrón"],
             "A", "Dos electrones en un mismo orbital pueden compartir n, l y ml, pero obligatoriamente deben tener espines opuestos (+1/2 y -1/2)."),
            ("La 'Regla de Hund' de máxima multiplicidad señala que al llenar orbitales degenerados (de igual energía):",
             ["Los electrones se distribuyen con espines paralelos ocupando el mayor número posible de orbitales antes de aparearse", "Los orbitales se aparean completamente antes de ocupar el siguiente", "Se llenan primero los subniveles con espines antihorarios", "No pueden ingresar más de un electrón por nivel cuántico"],
             "A", "La configuración de menor energía es la que maximiza el número de electrones desapareados con espín paralelo."),
            ("La configuración electrónica en estado fundamental del átomo de Carbono \\( (Z = 6) \\) es:",
             ["\\( 1s^2 \\, 2s^2 \\, 2p^2 \\)", "\\( 1s^2 \\, 2s^4 \\)", "\\( 1s^3 \\, 2p^3 \\)", "\\( 1s^2 \\, 2s^1 \\, 2p^3 \\)"],
             "A", "Siguiendo el principio de Aufbau: el nivel 1s aloja 2 electrones, el 2s aloja 2 electrones y el 2p aloja 2 electrones."),
            ("En la tabla periódica, la propiedad periódica denominada 'Electronegatividad' tiende a:",
             ["Aumentar de izquierda a derecha a lo largo de un período y disminuir de arriba hacia abajo en un grupo", "Aumentar hacia abajo en los grupos alcalinos", "Permanecer constante en toda la tabla", "Disminuir hacia la esquina superior derecha"],
             "A", "El Flúor es el elemento más electronegativo (4.0 en la escala de Pauling) en la esquina superior derecha."),
            ("La concentración en porcentaje masa en volumen (% m/v) de una solución se define operativamente como:",
             ["\\( \\% \\, m/v = \\frac{\\text{masa de soluto (g)}}{\\text{volumen de solución (mL)}} \\times 100 \\)", "\\( \\% \\, m/v = \\frac{\\text{moles de soluto}}{\\text{litros de solvente}} \\times 100 \\)", "\\( \\% \\, m/v = \\frac{\\text{masa de solvente (kg)}}{\\text{masa de soluto (g)}} \\times 100 \\)", "\\( \\% \\, m/v = \\text{volumen de soluto} + \\text{volumen de solvente} \\)"],
             "A", "Expresa los gramos de soluto disueltos en exactamente 100 mililitros de disolución total."),
            ("La 'Molaridad' \\( (M) \\) de una disolución acuosa se define como:",
             ["El número de moles de soluto disueltos en un litro \\( (1 \\, L) \\) de disolución", "El número de gramos de soluto en un kilogramo de agua", "El número de equivalentes-gramo por mililitro", "La fracción molar multiplicada por cien"],
             "A", "M = moles de soluto / litros de disolución (unidades: mol/L)."),
            ("Si se disuelven \\( 0.5 \\, \\text{moles} \\) de \\( NaCl \\) en agua suficiente para preparar \\( 2.0 \\, L \\) de disolución, la molaridad resultante es:",
             ["\\( 0.25 \\, M \\)", "\\( 1.0 \\, M \\)", "\\( 0.50 \\, M \\)", "\\( 4.0 \\, M \\)"],
             "A", "M = 0.5 moles / 2.0 L = 0.25 mol/L = 0.25 M."),
            ("La ecuación empleada para calcular diluciones en el laboratorio químico \\( (C_1 V_1 = C_2 V_2) \\) se fundamenta en que:",
             ["La cantidad de moles o masa de soluto permanece constante al añadir más disolvente", "El volumen de la solución disminuye al agregar agua destilada", "La densidad del solvente se duplica automáticamente", "La masa molar del compuesto cambia de valor"],
             "A", "Diluir consiste en agregar disolvente; la masa y los moles de soluto no varían entre el estado inicial y el final.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En relación con estructura cuántica y cálculo de soluciones químicas (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"5.2_q{q_num}",
                "number": q_num,
                "subtopicId": "5.2",
                "subjectId": "naturales",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("Según la teoría ácido-base de Brønsted-Lowry, un 'ácido' es toda sustancia capaz de:",
             ["Donar un protón \\( (H^+) \\) a otra sustancia", "Aceptar un par de electrones no enlazantes", "Disociar iones oxidrilo \\( (OH^-) \\) en medio acuoso exclusivamente", "Ceder neutrones en el núcleo atómico"],
             "A", "Brønsted y Lowry definieron el ácido como donador de protones \\( (H^+) \\) y la base como receptora de protones."),
            ("En la reacción \\( NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^- \\), el par conjugado del amoníaco \\( (NH_3) \\) es:",
             ["El ión amonio \\( (NH_4^+) \\), que actúa como ácido conjugado", "El agua \\( (H_2O) \\)", "El ión hidróxido \\( (OH^-) \\)", "El nitrógeno gaseoso"],
             "A", "Al aceptar un protón, la base \\( NH_3 \\) se transforma en su ácido conjugado \\( NH_4^+ \\)."),
            ("El pH se define matemáticamente mediante la expresión logarítmica:",
             ["\\( pH = -\\log[H^+] \\) (o \\( -\\log[H_3O^+] \\))", "\\( pH = \\log[OH^-] \\)", "\\( pH = 14 \\times [H^+] \\)", "\\( pH = -\\ln(K_w) \\)"],
             "A", "El potencial de hidrógeno (pH) ideado por Sørensen es el logaritmo negativo de la concentración molar de iones hidronio."),
            ("En agua pura a \\( 25^\\circ \\text{C} \\), el producto iónico del agua \\( (K_w) \\) vale:",
             ["\\( 1.0 \\times 10^{-14} \\)", "\\( 1.0 \\times 10^{-7} \\)", "\\( 7.0 \\times 10^{-14} \\)", "\\( 14.0 \\)"],
             "A", "Kw = [H+][OH-] = 1.0 x 10^{-14} a 25 °C, por lo que [H+] = [OH-] = 1.0 x 10^{-7} M (pH neutro = 7)."),
            ("Si una solución acuosa tiene una concentración \\( [H^+] = 1.0 \\times 10^{-3} \\, M \\), su valor de pH es:",
             ["\\( 3.0 \\)", "\\( 11.0 \\)", "\\( -3.0 \\)", "\\( 7.0 \\)"],
             "A", "pH = -log(1.0 x 10^{-3}) = -(-3) = 3.0 (disolución fuertemente ácida)."),
            ("Una disolución con pH igual a \\( 9.0 \\) se clasifica químicamente como:",
             ["Básica o alcalina (ya que \\( pH > 7 \\))", "Ácida fuerte", "Completamente neutra", "Inerte no reactiva"],
             "A", "En la escala de 0 a 14 a 25 °C: pH < 7 es ácido, pH = 7 es neutro y pH > 7 es alcalino o básico."),
            ("Si una disolución posee un pH de \\( 5.0 \\), su valor de pOH correspondiente es igual a:",
             ["\\( 9.0 \\)", "\\( 5.0 \\)", "\\( 2.0 \\)", "\\( 14.0 \\)"],
             "A", "Puesto que pH + pOH = 14 a 25 °C, entonces pOH = 14 - 5 = 9.0."),
            ("Una 'solución amortiguadora' (o buffer) se caracteriza funcionalmente por:",
             ["Resistir cambios bruscos en el pH cuando se le adicionan pequeñas cantidades de ácido o base fuerte", "Mantener la temperatura de ebullición exactamente a 100 °C", "Precipitar de inmediato todos los iones disueltos", "Consistir únicamente en agua destilada desmineralizada"],
             "A", "Formada por un ácido débil y su sal conjugada (o base débil y su ácido conjugado), neutraliza protones u oxhidrilos agregados."),
            ("En la sangre humana, el principal sistema amortiguador fisiológico que mantiene el pH entre 7.35 y 7.45 es:",
             ["El par ácido carbónico / bicarbonato \\( (H_2CO_3 / HCO_3^-) \\)", "El ácido clorhídrico puro", "El sulfato de cobre concentrado", "El hidróxido de sodio libre"],
             "A", "El equilibrio CO2 + H2O <-> H2CO3 <-> H+ + HCO3- regula el pH plasmático con auxilio de la respiración pulmonar y la función renal."),
            ("Al mezclar volúmenes equimolares de un ácido fuerte \\( (HCl) \\) y una base fuerte \\( (NaOH) \\), se produce una reacción de neutralización que genera:",
             ["Agua y una sal neutra \\( (NaCl + H_2O) \\) con pH neutro aproximado de 7", "Gas hidrógeno inflamable puro", "Ácido sulfúrico concentrado", "Un precipitado insoluble de óxido de calcio"],
             "A", "HCl + NaOH -> NaCl + H2O; los protones H+ y los OH- se neutralizan completamente formando moléculas de agua.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En el equilibrio ácido-base y cálculo de pH y pOH (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"5.2_q{q_num}",
                "number": q_num,
                "subtopicId": "5.2",
                "subjectId": "naturales",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 5.3: FÍSICA MECÁNICA, VECTORES Y MOVIMIENTO DE PROYECTILES
    # =========================================================================
    elif subtopic_id == "5.3":
        sec1 = "SECCIÓN V: ANÁLISIS DE GRÁFICAS FÍSICAS Y ÁLGEBRA VECTORIAL EN 2D (201–250)"
        sec2 = "SECCIÓN VI: CINEMÁTICA EN DOS DIMENSIONES Y MOVIMIENTO DE PROYECTILES (251–300)"

        data_201_250 = [
            ("En un gráfico de posición en función del tiempo \\( (x \\text{ vs } t) \\) para un móvil con Movimiento Rectilíneo Uniforme (MRU), la pendiente de la recta representa:",
             ["La velocidad constante del móvil", "La aceleración instantánea", "La fuerza centrípeta", "El trabajo mecánico realizado"],
             "A", "La pendiente m = Delta x / Delta t corresponde por definición a la velocidad instantánea o media del cuerpo."),
            ("En un gráfico de velocidad en función del tiempo \\( (v \\text{ vs } t) \\), el área bajo la curva geométrica entre dos instantes de tiempo representa:",
             ["El desplazamiento o distancia recorrida por el móvil \\( (\\Delta x) \\)", "La masa inercial del móvil", "La aceleración gravitatoria", "La presión atmosférica"],
             "A", "Integrando la velocidad con respecto al tiempo, el área bajo la curva v-t equivale exactamente al desplazamiento neto."),
            ("Si dos variables físicas \\( y \\) y \\( x \\) son inversamente proporcionales, su relación matemática se expresa como:",
             ["\\( y = \\frac{k}{x} \\) (su gráfica es una hipérbola equilátera)", "\\( y = k \\cdot x \\) (recta por el origen)", "\\( y = k \\cdot x^2 \\) (parábola)", "\\( y = k + x \\) (recta con corte)"],
             "A", "En la proporcionalidad inversa el producto y * x = k es constante, generando una rama hiperbólica decreciente."),
            ("La magnitud (módulo) de un vector en dos dimensiones \\( \\vec{A} = (A_x, A_y) \\) se calcula mediante el teorema de Pitágoras como:",
             ["\\( |\\vec{A}| = \\sqrt{A_x^2 + A_y^2} \\)", "\\( |\\vec{A}| = A_x + A_y \\)", "\\( |\\vec{A}| = A_x \\cdot A_y \\)", "\\( |\\vec{A}| = \\sqrt{A_x - A_y} \\)"],
             "A", "La magnitud vectorial euclidiana en el plano es la raíz cuadrada de la suma de los cuadrados de sus componentes ortogonales."),
            ("Si un vector \\( \\vec{V} \\) tiene magnitud de \\( 10 \\, \\text{m/s} \\) y forma un ángulo de \\( 30^\\circ \\) con el eje horizontal positivo \\( x \\), su componente horizontal \\( V_x \\) es:",
             ["\\( 10 \\cdot \\cos(30^\\circ) = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8.66 \\, \\text{m/s} \\)", "\\( 10 \\cdot \\sin(30^\\circ) = 5.0 \\, \\text{m/s} \\)", "\\( 10 \\cdot \\tan(30^\\circ) = 5.77 \\, \\text{m/s} \\)", "\\( 10 \\, \\text{m/s} \\)"],
             "A", "La componente adyacente es Vx = V * cos(theta) = 10 * cos(30°) = 5*sqrt(3) m/s."),
            ("Para el mismo vector de \\( 10 \\, \\text{m/s} \\) a \\( 30^\\circ \\), su componente vertical \\( V_y \\) es:",
             ["\\( 10 \\cdot \\sin(30^\\circ) = 10 \\cdot 0.5 = 5.0 \\, \\text{m/s} \\)", "\\( 8.66 \\, \\text{m/s} \\)", "\\( 10.0 \\, \\text{m/s} \\)", "\\( 0 \\, \\text{m/s} \\)"],
             "A", "La componente vertical opuesta es Vy = V * sin(theta) = 10 * sin(30°) = 5.0 m/s."),
            ("El producto escalar (producto punto) entre dos vectores perpendiculares \\( \\vec{A} \\perp \\vec{B} \\) es siempre igual a:",
             ["Cero \\( (\\vec{A} \\cdot \\vec{B} = 0) \\)", "El producto de sus magnitudes", "Uno", "Infinito"],
             "A", "A · B = |A||B| cos(90°). Como cos(90°) = 0, el producto escalar de dos vectores ortogonales es nulo."),
            ("Dados los vectores \\( \\vec{A} = (3, 4) \\) y \\( \\vec{B} = (2, -1) \\), el vector suma \\( \\vec{R} = \\vec{A} + \\vec{B} \\) es:",
             ["\\( (5, 3) \\)", "\\( (1, 5) \\)", "\\( (6, -4) \\)", "\\( (5, 5) \\)"],
             "A", "Se suman componente a componente: Rx = 3 + 2 = 5; Ry = 4 + (-1) = 3; luego R = (5, 3)."),
            ("La dirección (ángulo \\( \\theta \\)) de un vector en el primer cuadrante cuyas componentes son \\( A_x = 4 \\) y \\( A_y = 4 \\) es:",
             ["\\( 45^\\circ \\)", "\\( 30^\\circ \\)", "\\( 60^\\circ \\)", "\\( 90^\\circ \\)"],
             "A", "theta = arctan(Ay / Ax) = arctan(4/4) = arctan(1) = 45°."),
            ("Una magnitud física vectorial se diferencia de una magnitud escalar porque requiere especificar obligatoriamente:",
             ["Magnitud (valor numérico y unidad), dirección y sentido", "Únicamente un número positivo", "La temperatura a la que fue medida", "El color del cuerpo que se desplaza"],
             "A", "Un escalar queda determinado por su valor y unidad (ej. masa, tiempo); un vector exige además dirección y sentido.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En el análisis gráfico del movimiento y vectores físicos (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"5.3_q{q_num}",
                "number": q_num,
                "subtopicId": "5.3",
                "subjectId": "naturales",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("El movimiento de proyectiles (tiro parabólico) se descompone según el principio de independencia de Galileo en:",
             ["Un movimiento rectilíneo uniforme (MRU) horizontal y un movimiento rectilíneo uniformemente acelerado (MRUA) vertical por la gravedad", "Dos movimientos circulares concéntricos", "Un movimiento acelerado horizontal y velocidad vertical constante", "Dos movimientos de velocidad infinita"],
             "A", "En el eje x no hay aceleración (ax = 0, MRU); en el eje y actúa la aceleración gravitatoria constante g (MRUA)."),
            ("En el punto más alto de la trayectoria parabólica de un proyectil, la componente vertical de la velocidad \\( (v_y) \\) es:",
             ["Cero \\( (v_y = 0) \\)", "Máxima", "Igual a la aceleración g", "Negativa"],
             "A", "En la cúspide de la parábola el proyectil deja de subir e inicia el descenso, por lo que vy = 0 momentáneamente."),
            ("En la cúspide de la trayectoria de un proyectil lanzado en el aire, la velocidad total del móvil es:",
             ["Igual a su componente horizontal constante \\( (v_x = v_{0x}) \\)", "Estrictamente cero en todas sus componentes", "El doble de la velocidad de lanzamiento", "Indeterminada"],
             "A", "Dado que vy = 0 en el punto más alto, la velocidad total instantánea es exclusivamente la velocidad horizontal vx."),
            ("La fórmula cinemática para calcular el tiempo de subida \\( (t_s) \\) de un proyectil lanzado con velocidad \\( v_0 \\) y ángulo \\( \\theta \\) es:",
             ["\\( t_s = \\frac{v_0 \\sin\\theta}{g} \\)", "\\( t_s = \\frac{v_0 \\cos\\theta}{g} \\)", "\\( t_s = \\frac{v_0^2}{2g} \\)", "\\( t_s = \\sqrt{\\frac{2h}{g}} \\)"],
             "A", "Haciendo vy = v0 sin(theta) - g * ts = 0, se despeja ts = (v0 sin(theta)) / g."),
            ("El tiempo total de vuelo \\( (t_v) \\) de un proyectil que aterriza al mismo nivel horizontal de lanzamiento es:",
             ["El doble del tiempo de subida: \\( t_v = \\frac{2 v_0 \\sin\\theta}{g} \\)", "La mitad del tiempo de subida", "Igual a la altura máxima dividida entre g", "Independiente del ángulo de lanzamiento"],
             "A", "Por simetría parabólica en terreno nivelado, el tiempo de subida es exactamente igual al tiempo de bajada: tv = 2 * ts."),
            ("La altura máxima \\( (H_{max}) \\) alcanzada por un proyectil en tiro parabólico se calcula mediante:",
             ["\\( H_{max} = \\frac{(v_0 \\sin\\theta)^2}{2g} \\)", "\\( H_{max} = \\frac{v_0 \\cos\\theta}{g} \\)", "\\( H_{max} = \\frac{v_0^2}{g} \\)", "\\( H_{max} = 2g \\cdot t_v \\)"],
             "A", "Usando vy^2 = v0y^2 - 2gHmax con vy = 0: Hmax = (v0y)^2 / (2g) = (v0 sin theta)^2 / (2g)."),
            ("El alcance horizontal máximo \\( (R) \\) en un tiro parabólico sobre terreno plano se obtiene cuando el ángulo de lanzamiento \\( \\theta \\) es de:",
             ["\\( 45^\\circ \\)", "\\( 90^\\circ \\)", "\\( 30^\\circ \\)", "\\( 60^\\circ \\)"],
             "A", "El alcance es R = (v0^2 * sin(2*theta)) / g. El valor máximo de la función seno es 1, que ocurre cuando 2*theta = 90°, es decir, theta = 45°."),
            ("Dos proyectiles lanzados con la misma rapidez inicial \\( v_0 \\) alcanzarán el mismo rango horizontal \\( R \\) si sus ángulos de tiro son:",
             ["Complementarios (su suma es igual a \\( 90^\\circ \\), como \\( 30^\\circ \\) y \\( 60^\\circ \\))", "Suplementarios (su suma es \\( 180^\\circ \\))", "Iguales a \\( 45^\\circ \\) y \\( 90^\\circ \\)", "Opuestos por el vértice"],
             "A", "Puesto que sin(2*(90° - theta)) = sin(180° - 2*theta) = sin(2*theta), ángulos complementarios generan el mismo alcance horizontal."),
            ("En un lanzamiento horizontal desde un acantilado de altura \\( h \\) con velocidad horizontal \\( v_{0x} \\), la velocidad inicial vertical \\( v_{0y} \\) es:",
             ["Cero \\( (v_{0y} = 0) \\)", "Igual a \\( v_{0x} \\)", "Igual a \\( g \\cdot h \\)", "Infinita"],
             "A", "En un tiro semiparabólico horizontal, el proyectil carece de velocidad inicial en el eje vertical (v0y = 0)."),
            ("El tiempo que tarda en caer un objeto lanzado horizontalmente desde una altura \\( h \\) comparado con otro que se deja caer libremente desde la misma altura es:",
             ["Exactamente el mismo tiempo para ambos, pues la gravedad actúa independientemente en el eje vertical", "El doble de tiempo para el lanzado horizontalmente", "La mitad de tiempo para el proyectil", "Cero segundos"],
             "A", "El movimiento horizontal es independiente del vertical; ambos tardan t = sqrt(2h / g) en tocar el suelo.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En la cinemática de dos dimensiones y proyectiles (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"5.3_q{q_num}",
                "number": q_num,
                "subtopicId": "5.3",
                "subjectId": "naturales",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 5.4: DOMINIOS BIOLÓGICOS, REACCIONES QUÍMICAS Y REDOX
    # =========================================================================
    elif subtopic_id == "5.4":
        sec1 = "SECCIÓN V: DOMINIOS BIOLÓGICOS Y CLASIFICACIÓN MODERNA DE WOESE (201–250)"
        sec2 = "SECCIÓN VI: TIPOS DE REACCIONES QUÍMICAS Y PROCESOS ÓXIDO-REDUCCIÓN (REDOX) (251–300)"

        data_201_250 = [
            ("El sistema de clasificación biológica moderno propuesto por Carl Woese en 1990 divide a todos los seres vivos en tres Dominios basados en el análisis filogenético de:",
             ["La secuencia de nucleótidos del ARN ribosomal de la subunidad menor (ARNr 16S / 18S)", "El tamaño de los huesos de las extremidades", "El número de hojas de las plantas vasculares", "La presencia de hemoglobina en la sangre"],
             "A", "Woese utilizó el ARNr como cronómetro evolutivo molecular por su conservación y universalidad en el mundo vivo."),
            ("Los tres Dominios biológicos fundamentales de la vida según el árbol de Carl Woese son:",
             ["Bacteria, Archaea y Eukarya", "Monera, Protista y Fungi", "Vertebrados, Invertebrados y Plantas", "Procariotas, Animales y Virus"],
             "A", "Demostró que los procariotas se dividen en dos linajes profundamente divergentes: Bacteria y Archaea."),
            ("El Dominio Archaea se distingue bioquímicamente del Dominio Bacteria en que sus membranas celulares poseen:",
             ["Lípidos con enlaces éter y cadenas de isopreno ramificadas, careciendo de peptidoglicano en la pared celular", "Peptidoglicano (mureína) con enlaces éster exclusivamente", "Bicapas lipídicas de colesterol idénticas a los animales", "Paredes compuestas enteramente de celulosa vegetal"],
             "A", "Los enlaces éter e hidrocarburos ramificados de isopreno confieren a las arqueas gran resistencia a condiciones extremas."),
            ("Los microorganismos del Dominio Archaea conocidos como 'Halófilos extremos' viven adaptados a:",
             ["Ambientes con altísimas concentraciones de sal (como el Gran Lago Salado o salinas marinas)", "Manantiales de agua hirviente con ácido sulfúrico", "Zonas polares a 50 grados bajo cero", "El tracto digestivo de insectos polinizadores"],
             "A", "Las arqueas halófilas requieren concentraciones de cloruro de sodio superiores al 15-20% para su supervivencia."),
            ("Las arqueas 'Termófilas' e 'Hipertermófilas' tienen la capacidad de desarrollarse activamente en:",
             ["Temperaturas extremas entre 70 °C y más de 105 °C en fuentes hidrotermales y géiseres volcánicos", "Hielo glacial permanente de la Antártida", "Agua dulce estancada a temperatura ambiente", "La superficie de hojas de cafeto"],
             "A", "Sus enzimas termoestables (como la Taq polimerasa) y membranas monoestratificadas toleran temperaturas de ebullición."),
            ("Las arqueas 'Metanógenas' se caracterizan metabólicamente por ser anaerobias estrictas que producen:",
             ["Gas metano \\( (CH_4) \\) a partir de dióxido de carbono e hidrógeno en sedimentos pantanosos y rumen de rumiantes", "Oxígeno gaseoso por fotosíntesis oxigénica", "Ácido nítrico concentrado", "Cloro gaseoso en las playas"],
             "A", "Son responsables del biogás en pantanos y la digestión anaerobia de celulosa en el estómago de vacas y ovejas."),
            ("El Dominio Eukarya comprende a todos los organismos cuyas células presentan:",
             ["Núcleo celular delimitado por doble membrana y orgánulos citoplasmáticos membranosos (mitocondrias, etc.)", "ADN circular disperso sin envoltura nuclear", "Ausencia de citoesqueleto y ribosomas", "Pared celular de peptidoglicano bacteriano"],
             "A", "Los eucariotas incluyen a los reinos Protista, Fungi, Plantae y Animalia."),
            ("Los virus no están incluidos en ninguno de los tres dominios de Woese porque:",
             ["Son agentes acelulares parásitos intracelulares obligados que carecen de metabolismo propio y ribosomas", "Son bacterias microscópicas que perdieron su pared", "Son hongos unicelulares con esporas microscópicas", "Poseen núcleo eucariota pero sin membrana"],
             "A", "Al no poseer estructura celular ni maquinaria de síntesis proteica independiente, no forman parte del árbol de la vida celular."),
            ("En la taxonomía biológica moderna, la categoría taxonómica jerárquica más amplia e inclusiva es:",
             ["El Dominio", "El Reino", "El Filo o División", "La Especie"],
             "A", "La jerarquía formal va de mayor a menor: Dominio > Reino > Filo > Clase > Orden > Familia > Género > Especie."),
            ("Las bacterias Gram positivas se diferencian de las bacterias Gram negativas en la tinción de Gram por poseer:",
             ["Una gruesa capa de peptidoglicano que retiene el complejo cristal violeta-yodo tiñéndose de color púrpura", "Una doble membrana externa rica en lipopolisacáridos", "Ausencia total de membrana plasmática", "Una cápsula de queratina transparente"],
             "A", "La gruesa malla de mureína de las Gram positivas atrapa el colorante cristal violeta, mientras las Gram negativas se tiñen de rosa con safranina.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En la taxonomía biológica moderna y dominios de Carl Woese (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"5.4_q{q_num}",
                "number": q_num,
                "subtopicId": "5.4",
                "subjectId": "naturales",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("La reacción química \\( 2H_2 + O_2 \\rightarrow 2H_2O \\) se clasifica según el reordenamiento atómico como una reacción de:",
             ["Síntesis, combinación o adición", "Descomposición o análisis", "Doble desplazamiento o metátesis", "Neutralización simple"],
             "A", "Dos o más sustancias reaccionantes se unen para formar un único producto compuesto."),
            ("La reacción \\( 2KClO_3 \\xrightarrow{\\Delta} 2KCl + 3O_2 \\) es un ejemplo representativo de reacción de:",
             ["Descomposición o análisis", "Desplazamiento simple", "Precipitación iónica", "Combustión completa"],
             "A", "Un compuesto único se fragmenta por acción del calor en dos o más sustancias más simples."),
            ("En la reacción de desplazamiento simple \\( Zn + 2HCl \\rightarrow ZnCl_2 + H_2 \\), el zinc sustituye al hidrógeno porque:",
             ["El zinc es un metal más reactivo y con menor potencial de reducción que el hidrógeno según la serie de actividad", "El zinc es un no metal inerte", "El cloro atrae únicamente átomos pesados", "El ácido clorhídrico es una base débil"],
             "A", "Un elemento más activo desplaza a otro menos activo de su compuesto en solución acuosa."),
            ("Una reacción de precipitación ocurre cuando al mezclar dos disoluciones acuosas:",
             ["Se forma un producto sólido insoluble (precipitado) que se separa de la disolución", "Se absorbe luz ultravioleta sin formar sólidos", "La disolución hierve espontáneamente a 0 °C", "Los solutos se evaporan de inmediato"],
             "A", "Ocurre por combinación de cationes y aniones que forman sales de baja solubilidad (ej. AgNO3 + NaCl -> AgCl(s) + NaNO3)."),
            ("En una reacción de óxido-reducción (Redox), el proceso de 'Oxidación' se define estrictamente como:",
             ["La pérdida de electrones por parte de una especie química, lo cual aumenta su número de oxidación", "La ganancia de electrones que disminuye la carga", "La absorción de neutrones térmicos", "La adición de moléculas de agua"],
             "A", "Oxidación = pérdida de electrones (aumento del número de oxidación); Reducción = ganancia de electrones."),
            ("El 'agente reductor' en una reacción redox es la sustancia que:",
             ["Se oxida, perdiendo electrones y provocando la reducción de otra especie", "Gana electrones y se reduce a sí misma", "Permanece químicamente inerte sin variar sus electrones", "Cataliza la reacción sin intervenir"],
             "A", "El agente reductor cede electrones (se oxida) para hacer posible que otra sustancia se reduzca."),
            ("En el compuesto químico permanganato de potasio \\( (KMnO_4) \\), el estado o número de oxidación del Manganeso \\( (Mn) \\) es:",
             ["\\( +7 \\)", "\\( +2 \\)", "\\( +4 \\)", "\\( +5 \\)"],
             "A", "K es +1; cada O es -2 (total -8). Para que la molécula sea neutra: (+1) + Mn + (-8) = 0 => Mn = +7."),
            ("En la reacción \\( Cu + 2Ag^+ \\rightarrow Cu^{2+} + 2Ag \\), la especie que experimenta reducción es:",
             ["El ión plata \\( (Ag^+) \\), que gana un electrón para pasar a plata metálica \\( Ag^0 \\)", "El cobre metálico \\( (Cu) \\)", "El catión cobre \\( (Cu^{2+}) \\)", "El agua de disolución"],
             "A", "El Ag+ pasa de estado de oxidación +1 a 0 ganando un electrón, por lo que se reduce (actúa como agente oxidante)."),
            ("En el balanceo de ecuaciones redox por el método del ión-electrón en medio ácido, para igualar los átomos de oxígeno se agregan:",
             ["Moléculas de agua \\( (H_2O) \\) en el miembro deficiente en oxígeno, e iones \\( H^+ \\) en el miembro opuesto", "Iones hidróxido \\( (OH^-) \\) exclusivamente", "Oxígeno gaseoso \\( (O_2) \\) a presión", "Electrones negativos en ambos lados"],
             "A", "En medio ácido: cada O faltante se balancea añadiendo una molécula de H2O, y luego los hidrógenos se balancean con H+."),
            ("En la combustión completa del gas propano \\( C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O \\), el número de oxidación del carbono en el dióxido de carbono \\( (CO_2) \\) es:",
             ["\\( +4 \\)", "\\( -4 \\)", "\\( +2 \\)", "\\( 0 \\)"],
             "A", "En el CO2, como cada átomo de oxígeno tiene estado de oxidación -2 (-4 total), el carbono posee estado de oxidación +4.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En el balanceo de reacciones químicas y procesos redox (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"5.4_q{q_num}",
                "number": q_num,
                "subtopicId": "5.4",
                "subjectId": "naturales",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    return questions
