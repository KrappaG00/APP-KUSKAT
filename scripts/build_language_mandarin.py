#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
APP-KUSKAT • GENERADOR COMPLETO DE MANDARÍN (PǓTŌNGHUÀ / 普通话)
Adaptado pedagógicamente para hispanohablantes de El Salvador,
con especial atención a la comunidad china-salvadoreña y a las relaciones
culturales, comerciales y académicas contemporáneas.

Genera:
1. src/data/languages/mandarinLessons.ts (120 clases >= 500 palabras)
2. src/data/languages/mandarinQuestions.ts (300 preguntas de selección múltiple)
3. src/data/languages/mandarinVerbs.ts (Catálogo de verbos y aspectos verbales)
4. src/data/languages/mandarinBasicsData.ts (Pinyin con 4 tonos, números con conversor algorítmico, colores y simbolismo, objetos cotidianos)
5. src/data/languages/mandarinVocabularyData.ts (Léxico HSK y corpus clasificado)
6. src/data/languages/mandarinData.ts (Módulo unificado y guía dialectal Putonghua vs Cantonés/Hakka)
"""

import os
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

MANDARIN_SYLLABUS = {
    'A1': [
        ("Fonética del Pinyin y los 4 Tonos (más Tono Neutro)", "Fonética Pinyin", "Los 4 tonos del chino estándar (1º plano, 2º ascendente, 3º descendente-ascendente, 4º cortante) comparados con las inflexiones del español salvadoreño.", "Mā (妈), Má (麻), Mǎ (马), Mà (骂), Ma (吗)"),
        ("Modificación Tonal (Tone Sandhi) de 3er Tono, 一 (Yī) y 不 (Bù)", "Reglas Fonológicas", "Cambio de 3er tono ante otro 3er tono (Nǐ hǎo -> Ní hǎo) y cambios de tono de Yī y Bù según el tono siguiente.", "Nǐ hǎo (你好) -> Ní hǎo / Bù shì (不是) -> Bú shì"),
        ("Saludos, Despedidas y Cortesía Básica", "Pragmática y Saludos", "Nǐ hǎo, Zàijiàn, Xièxie, Bù kèqi, Duìbuqǐ, Méi guānxi en situaciones diarias.", "Nǐ hǎo! (你好!) / Xièxie nǐ! (谢谢你!)"),
        ("Pronombres Personales y el Plural con 们 (Men)", "Morfología de Pronombres", "Wǒ, Nǐ, Tā (他/她/它), Wǒmen, Nǐmen, Tāmen y la fórmula analítica sin género flexivo.", "Wǒ (我) / Nǐ (你) / Tā (他/她) / Wǒmen (我们)"),
        ("El Verbo Cópula 是 (Shì) y la Oración Asertiva Básica", "Sintaxis Fundamental", "Estructura Sujeto + 是 + Sustantivo: Wǒ shì sà'ěrwǎduō rén (Soy salvadoreño).", "Wǒ shì xuésheng (我是学生) - Yo soy estudiante"),
        ("La Partícula Interrogativa 吗 (Ma) y la Negación con 不 (Bù)", "Sintaxis Interrogativa", "Transformar cualquier aseveración en pregunta de sí/no añadiendo 吗 al final, y negar con 不.", "Nǐ shì xuésheng ma? (你是学生吗？) / Wǒ bú shì"),
        ("Los Números del 0 al 100 y Caracteres Numéricos Básicos", "Aritmética Mandarín", "Líng, Yī, Èr, Sān, Sì, Wǔ, Liù, Qī, Bā, Jiǔ, Shí y la lectura posicional estricta.", "Yī (一), Èr (二), Sān (三)... Shí (十)"),
        ("Clasificadores Nominales (Measure Words): 个 (Gè), 本 (Běn), 张 (Zhāng)", "Morfosintaxis Nominal", "Obligatoriedad del clasificador entre número/demostrativo y sustantivo: yí gè rén, liǎng běn shū.", "Número + Clasificador + Sustantivo: yí gè píngguǒ (一个苹果)"),
        ("La Familia y Términos de Parentesco", "Léxico Social", "Bàba, Māma, Gēge, Dìdi, Jiějie, Mèimei y la jerarquía de edad tradicional.", "Wǒ de jiātíng (我的家庭) - Mi familia"),
        ("Adjetivos Predicativos con 很 (Hěn): Por Qué NO se Usa 是", "Sintaxis Adjetival", "Los adjetivos en chino actúan como verbos de estado: Wǒ hěn hǎo (Estoy bien), NUNCA *Wǒ shì hǎo.", "Sujeto + 很 + Adjetivo: Tā hěn gāoxìng (他很高兴)"),
        ("La Partícula Modificadora y Posesiva 的 (De)", "Sintaxis de Modificación", "Expresión de posesión y modificación atributiva: Wǒ de shū (Mi libro), hóngsè de chē.", "Wǒ de péngyou (我的朋友) - Mi amigo"),
        ("Demostrativos 这 (Zhè) y 那 (Nà) con Clasificadores", "Determinantes A1", "Zhè ge (este), Nà ge (aquel), Zhèr (aquí), Nàr (allí).", "Zhè běn shū hěn hǎo (这本书很好)"),
        ("Verbos Fundamentales de la Vida Cotidiana: 吃, 喝, 看, 去, 买", "Morfología Verbal A1", "Uso directo de verbos analíticos sin conjugación ni desinencias temporales.", "Wǒ chī fàn (我吃饭) / Wǒ hē chá (我喝茶)"),
        ("Pronombres Interrogativos: 什么 (Shénme), 谁 (Shéi), 哪儿 (Nǎr)", "Preguntas Parciales", "El pronombre interrogativo se coloca exactamente en el lugar sintáctico de la respuesta esperada.", "Nǐ jiào shénme míngzi? (你叫什么名字？)"),
        ("El Tiempo: La Hora (点 Diǎn, 分 Fēn) y Momentos del Día", "Expresiones Temporales", "Xiànzài jǐ diǎn? Zǎoshang, Zhōngwǔ, Wǎnshang y el orden temporal antes del verbo.", "Xiànzài bā diǎn bàn (现在八点半) - Son las 8:30"),
        ("Fechas y el Calendario: Año, Mes y Día (年, 月, 日/号)", "Aritmética del Calendario", "Estructura jerárquica de mayor a menor: Año + Mes + Día + Día de la semana.", "Èr líng èr liù nián shí yuè (2026年10月)"),
        ("Verbos Modales de Deseo y Necesidad: 想 (Xiǎng) vs 要 (Yào)", "Modalidad A1", "Diferencia entre el deseo aspiracional (Xiǎng = desearía) y la intención/necesidad resuelta (Yào = voy a / quiero).", "Wǒ xiǎng xué Zhōngwén (我想学中文)"),
        ("Expresar Ubicación y Existencia con 在 (Zài) y 有 (Yǒu)", "Sintaxis Locativa", "Zài para indicar estar en un lugar; Yǒu para indicar haber o tener.", "Wǒ zài jiā (我在家) / Zhuōzi shang yǒu shū (桌子上有书)"),
        ("Compras, Precios y la Moneda: 多少钱, 块 (Kuài) / 元 (Yuán)", "Comercio Cotidiano", "Zhè ge duōshǎo qián? Preguntar precios y contar unidades monetarias.", "Zhè jiàn yīfu duōshǎo qián? (这件衣服多少钱？)"),
        ("Conversación Práctica Integrada de Nivel A1", "Diálogo de Cierre A1", "Presentación completa de un estudiante salvadoreño recién llegado a Pekín.", "Nǐ hǎo, wǒ shì sà'ěrwǎduō rén! (你好，我是萨尔瓦多人！)")
    ],
    'A2': [
        ("La Partícula de Aspecto de Acción Completada 了 (Le Verbal)", "Aspecto Verbal A2", "Indica que una acción ha concluido o se ha realizado, no equivale rígidamente al pasado pretérito.", "Wǒ mǎi le yì běn shū (我买了一本书)"),
        ("El 了 Modal / de Cambio de Situación al Final de Oración", "Aspecto Modal", "Colocado al final de la oración para señalar un nuevo estado de cosas: Xià yǔ le (Ya está lloviendo).", "Wǒ bú qù le (我不去了 - Ya no voy)"),
        ("La Partícula de Aspecto Experiencial 过 (Guò)", "Aspecto Verbal A2", "Expresa haber tenido alguna vez la experiencia de hacer algo: Wǒ qùguo Zhōngguó.", "Nǐ chīguo jiǎozi ma? (你吃过饺子吗？)"),
        ("La Partícula de Acción Continua 着 (Zhe) y En Progreso (在...呢)", "Aspecto Progresivo", "Zhe para estados resultantes continuos (Men kāizhe = la puerta está abierta) y Zài para acción en curso.", "Tā zài kàn shū ne (他在看书呢)"),
        ("La Negación de Pasado y Aspecto con 没 / 没有 (Méi / Méiyǒu)", "Negación A2", "Uso de Méi para negar acciones pasadas o la posesión de Yǒu, nunca usar Bù con verbos en pasado real.", "Wǒ méi qù shàngbān (我没去上班)"),
        ("Complementos Direccionales Simples: 来 (Lái) y 去 (Qù)", "Sintaxis Direccional", "El movimiento hacia el hablante (Lái) o alejándose de él (Qù) pospuesto al verbo principal.", "Tā jìn lai le (他进来了) / Tā chū qu le (他出去了)"),
        ("Complementos Direccionales Compuestos (上来, 下去, 出来, 回来)", "Sintaxis Direccional", "Verbo de acción + dirección espacial + orientación respecto al hablante.", "Tā pǎo shàng lai le (他跑上来了)"),
        ("Complementos Resultativos Básicos: 完, 好, 懂, 见", "Sintaxis Resultativa", "El resultado inmediato de la acción: Chīwán (terminar de comer), Kàndǒng (entender lo que se lee).", "Wǒ kàndǒng le zhè ge zì (我看懂了这个字)"),
        ("Complementos Potenciales de Capacidad: 得 (De) / 不 (Bu)", "Sintaxis Potencial", "Kàndedǒng (ser capaz de entender) vs Kànbudǒng (no ser capaz de entender).", "Wǒ kànbudǒng zhè ge hànzì (我看看不懂这个汉字)"),
        ("Estructuras Comparativas con 比 (Bǐ)", "Grados del Adjetivo", "Estructura A + 比 + B + Adjetivo: Tā bǐ wǒ gāo (Él es más alto que yo).", "Jīntiān bǐ zuótiān lěng (今天比昨天冷)"),
        ("Comparativas de Igualdad con 跟...一样 (Gēn... Yíyàng)", "Comparativas A2", "A + 跟 + B + 一样 (+ Adjetivo): Zhè ge gēn nà ge yíyàng dà (Este es tan grande como aquel).", "Wǒ gēn nǐ yíyàng xǐhuan chá (我跟你一样喜欢茶)"),
        ("Verbos Modales de Habilidad y Permiso: 会, 能, 可以", "Modalidad A2", "Huì (saber hacer por aprendizaje), Néng (capacidad física/circunstancial), Kěyǐ (permiso moral/social).", "Wǒ huì shuō Zhōngwén (我会说中文)"),
        ("Preposiciones de Compañía y Destinatario: 跟 (Gēn) y 给 (Gěi)", "Sintaxis Preposicional", "Wǒ gēn nǐ qù (Voy contigo) / Wǒ gěi nǐ dǎ diànhuà (Te llamo por teléfono).", "Gěi wǒ kànkan (给我看看 - Déjame ver)"),
        ("Oraciones Causales con 因为...所以... (Yīnwèi... Suǒyǐ...)", "Conectores Lógicos", "Estructura correlativa obligatoria en el habla formal: Porque... por lo tanto...", "Yīnwèi tiānqì hǎo, suǒyǐ wǒmen qù gōngyuán (因为天气好，所以我们去公园)"),
        ("Expresión de Futuro Próximo con 要...了 (Yào... Le) y 快要...了", "Tiempos Futuros", "Acciones a punto de ocurrir inmediatamente: Huǒchē kuài yào kāi le (El tren está por salir).", "Kuài yào xià yǔ le (快要下雨了)"),
        ("Frecuencia y Duración de la Acción: 次 (Cì), 遍 (Biàn) y Horas", "Complementos Cuantitativos", "Wǒ qùguo liǎng cì (He ido dos veces); Wǒ xué le liǎng ge xiǎoshí (Estudié dos horas).", "Qǐng zài shuō yí biàn (请再说一遍 - Repita una vez más por favor)"),
        ("Prohibiciones e Imperativo Negativo con 别 (Bié) y 不要 (Bùyào)", "Modo Imperativo", "Bié shuō le (No hables más), Bié dānxīn (No te preocupes).", "Bié dānxīn, méi wèntí! (别担心，没问题！)"),
        ("Transporte Urbano y Preguntar Direcciones", "Movilidad y Ciudad", "Zuò chē, Zǒulù, Wǎng zuǒ guǎi (doblar a la izquierda), Wǎng yòu guǎi, Yìzhí zǒu.", "Wǎng qián zǒu, dào lùkǒu wǎng zuǒ guǎi (往前走，到路口往左拐)"),
        ("El Clima, la Salud y Citas con el Médico", "Vida Cotidiana", "Shēngbìng, Fāshāo, Gǎnmào, Kàn yīshēng, Shūfu.", "Wǒ tóu téng, xiǎng qù yīyuàn (我头疼，想去医院)"),
        ("Conversación Fluida A2: Una Cena en un Restaurante Chino", "Diálogo Integrador A2", "Pedir platos tradicionales, preguntar ingredientes, pedir la cuenta y elogiar la comida.", "Fúwùyuán, mǎidān! Zhè xiē cài hěn hǎochī! (服务员，买单！这些菜很好吃！)")
    ],
    'B1': [
        ("La Estructura de Disposición con 把 (Bǎ)", "Sintaxis Fundamental B1", "Sujeto + 把 + Objeto + Verbo + Complemento: Enfatiza el tratamiento y efecto directo sobre el objeto.", "Wǒ bǎ zuòyè zuòwán le (我把作业做完了)"),
        ("La Estructura de Voz Pasiva con 被 (Bèi)", "Voz Pasiva B1", "Sujeto Paciente + 被 (+ Agente) + Verbo + Complemento: Frecuentemente con implicación de adversidad.", "Píngguǒ bèi tā chī le (苹果被他吃了)"),
        ("Las Tres Partículas 'De' Estructurales: 的, 得, 地", "Morfosintaxis Fina", "的 (modificador de sustantivo), 得 (complemento de grado tras verbo), 地 (modificador adverbial ante verbo).", "Mànmàn de zǒu (慢慢地走) / Pǎo de kuài (跑得快)"),
        ("La Construcción Enfática 是...的 (Shì... De)", "Sintaxis de Énfasis", "Enfoca el tiempo, lugar, manera o agente de una acción pasada ya consumada.", "Wǒ shì zuótiān lái de (我是昨天来的 - Fue ayer cuando vine)"),
        ("Conectores Progresivos: 不仅...而且... (Bùjǐn... Érqiě...)", "Cohesión Textual", "No solo... sino también... para sumar argumentos de mayor jerarquía.", "Tā bùjǐn huì shuō Zhōngwén, érqiě huì shuō Xībānyáyǔ (他不仅会说中文，而且会说西班牙语)"),
        ("Conectores Concesivos: 虽然...但是... (Suīrán... Dànshì...)", "Cohesión Textual", "Aunque... sin embargo... estructura correlativa fundamental en ensayos y discursos.", "Suīrán hěn nán, dànshì hěn yǒuyìsi (虽然很难，但是很有意思)"),
        ("Condicionales Suficientes: 只要...就... (Zhǐyào... Jiù...)", "Oraciones Condicionales", "Con tal de que... entonces... (expresa condición suficiente para producir el efecto).", "Zhǐyào nǐ nǔlì, jiù huì chénggōng (只要你努力，就会成功)"),
        ("Condicionales Necesarios: 只有...才... (Zhǐyǒu... Cái...)", "Oraciones Condicionales", "Solo si... entonces... (expresa la única condición indispensable sin la cual no hay resultado).", "Zhǐyǒu nǐ lái, wǒmen cái chūfā (只有你来，我们才出发)"),
        ("Reduplicación de Verbos y Adjetivos para Matiz Afectivo", "Morfología Expresiva", "Kànkan (echar un vistazo), Gāogāoxìngxìng de (muy alegremente), Liáoliao (conversar un rato).", "Wǒmen liáoliao ba (我们聊聊吧)"),
        ("Preguntas Retóricas y Énfasis con 难道 (Nándào)", "Sintaxis Enfatizadora", "¿Acaso...? Nándào nǐ bù zhīdào ma? (¿Acaso no lo sabías?).", "Nándào zhè bú shì zhēn de ma? (难道这不是真的吗？)"),
        ("Chengyu (Proverbios de Cuatro Caracteres) Fundamentales", "Léxico Idiomático", "Yī shí èr niǎo (一石二鸟 - matar dos pájaros de un tiro), Rù xiāng suí sú (入乡随俗 - donde fueres haz lo que vieres).", "Rù xiāng suí sú (入乡随俗)"),
        ("La Cultura del Té (茶文化) y Etiqueta de la Mesa en China", "Cultura y Sociedad", "Servir el té primero al invitado, dar golpecitos con dos dedos en la mesa en agradecimiento y banquetes.", "Zhōngguó chá wénhuà (中国茶文化)"),
        ("La Revolución Digital: WeChat (微信) y Pagos Móviles (Alipay)", "Vida Contemporánea", "La vida sin efectivo en China, códigos QR (二维码) y comunicación en redes sociales.", "Wēixìn zhīfù (微信支付)"),
        ("El Sistema Educativo, el Examen Gaokao y el Espíritu Chīkǔ", "Sociedad China", "La cultura del esfuerzo (吃苦精神), la disciplina académica y el acceso a la universidad.", "Gāokǎo yǔ nǔlì fùchū (高考与努力付出)"),
        ("Preposiciones de Punto de Vista: 对...来说 (Duì... Láishuō)", "Expresión de Opinión", "Duì wǒ láishuō (Para mí / en mi opinión), Guānyú (en relación con).", "Duì wǒ láishuō, xué Zhōngwén hěn yǒuyòng (对我来说，学中文很有用)"),
        ("Expresión de Gradación: 越来越... (Yuèláiyuè...) y 越...越...", "Grados Progresivos", "Yuèláiyuè hǎo (cada vez mejor), Yuè xué yuè xǐhuan (cuanto más estudio, más me gusta).", "Tiānqì yuèláiyuè rè le (天气越来越热了)"),
        ("Modismos Urbanos y Expresiones Coloquiales de Hoy", "Pragmática Moderna", "Jiāyóu! (¡Ánimo!), Gěilì (genial), Suíbiàn (como gustes / da igual).", "Jiāyóu! Nǐ yídìng kěyǐ de! (加油！你一定可以的！)"),
        ("La Comunidad China en El Salvador: Raíces e Historia Compartida", "Historia y Diáspora", "Llegada histórica, adopción de la sociedad salvadoreña, aportes en el comercio y el plato 'chaomín'.", "Sà'ěrwǎduō huárén shèqū (萨尔瓦多华人社区)"),
        ("Redacción Formal: Correos Electrónicos Profesionales y Cartas", "Expresión Escrita B1", "Zūnjìng de lǎoshī, Cǐzhì jìnglǐ y fórmulas de tratamiento formal epistolar.", "Zūnjìng de Zhāng xiānsheng (尊敬的张先生)"),
        ("Examen Simulador B1 (HSK 3/4): Comprensión y Expresión", "Evaluación B1", "Textos de mediana longitud, selección léxica y redacción con caracteres chinos obligatorios.", "HSK sān/sì jí mókǎo (HSK三/四级模考)")
    ],
    'B2': [
        ("Usos Avanzados de 把 con Objetos Abstractos y Psicológicos", "Sintaxis Avanzada B2", "Bǎ xiǎngfǎ fāzhǎn chéng jìhuà (convertir ideas en planes), Bǎ jīhuì ràng gěi biérén.", "Bǎ zérèn fàng zài dì yī wèi (把责任放在第一位)"),
        ("Usos Formales de la Voz Pasiva con 让, 叫 y 为...所 (Wéi... Suǒ)", "Voz Pasiva Superior", "Wéi... suǒ (ser afectado/admirado por algo): Wéi dàjiā suǒ shúzhī (conocido por todos).", "Wéi rén suǒ zūnzhòng (为人所尊重)"),
        ("Conectores Hipotéticos Avanzados: 即使...也... (Jíshǐ... Yě...)", "Cohesión Compleja", "Incluso si... todavía... para sostener argumentos ante la máxima adversidad.", "Jíshǐ yùdào kùnnan, wǒmen yě bú huì fàngqì (即使遇到困难，我们也不会放弃)"),
        ("Expresión de Incondicionalidad con 无论...都... (Wúlùn... Dōu...)", "Cohesión Compleja", "Sin importar qué / haga lo que haga... Wúlùn fāshēng shénme, dōu yào bǎochí lěngjìng.", "Wúlùn tiānqì zěnmeyàng, dōu yào chūfā (无论天气怎么样，都要出发)"),
        ("Complementos Direccionales con Significado Figurado (出来, 起来, 下去)", "Sintaxis Metafórica", "Kànchulai (discernir a simple vista), Jiānchí xiàqu (perseverar en el tiempo), Xiǎngqilai (recordar).", "Zhè fèn gōngzuò yào jiānchí xiàqu (这份工作要坚持下去)"),
        ("Conectores de Registro Escrito Formal: 此外, 因此, 总之, 从而", "Lenguaje Formal Escrito", "Cǐwài (además), Yīncǐ (por consiguiente), Cóng'ér (lo cual conduce a / de tal suerte que).", "Cóng'ér tígāo le xiàolǜ (从而提高了效率)"),
        ("Verbos Formales Bivalentes y Deslexicalizados: 进行, 具有, 给予", "Léxico Especializado", "Jìnxíng tǎolùn (llevar a cabo una discusión), Jùyǒu zhòngyào yìyì (poseer gran trascendencia).", "Jìnxíng shēnru de yánjiū (进行深入的研究)"),
        ("Chengyu Avanzados en Textos Argumentativos", "Retórica Superior", "Sài wēng shī mǎ (塞翁失马 - no hay mal que por bien no venga), Jǐng dǐ zhī wā (井底之蛙 - mente estrecha).", "Sài wēng shī mǎ, yān zhī fēi fú (塞翁失马，焉知非福)"),
        ("Análisis de Noticias Económicas: Franja y Ruta (一带一路) y PIB", "Economía y Comercio", "Léxico de macroeconomía, comercio internacional, aranceles y la iniciativa de la Franja y la Ruta.", "Yídài yílù chàngyì (一带一路倡议)"),
        ("Medio Ambiente, Transición Ecológica y Energías Limpias", "Sociedad y Ecología", "Lǜsè néngyuán (energía verde), Diàndòng qìchē (vehículos eléctricos), Tàn zhōnghé (neutralidad de carbono).", "Lǜsè dī tàn fāzhǎn (绿色低碳发展)"),
        ("Diferencias de Registro: Chino Coloquial (口语) vs Escrito (书面语)", "Sociolingüística B2", "Contrastes de pares léxicos: Kàn (口语) vs Guānkàn (书面语); Mǎi (口语) vs Gòumǎi (书面语).", "Kǒuyǔ yǔ shūmiànyǔ de qūbié (口语与书面语的区别)"),
        ("Partículas Discursivas de Matiz Lógico: 究竟, 反而, 既然", "Pragmática Fina", "Jiūjìng (a fin de cuentas / realmente qué), Fǎn'ér (por el contrario / paradójicamente).", "Tā bùjǐn méi shēngqì, fǎn'ér xiào le (他不仅没生气，反而笑了)"),
        ("La Doble Negación como Herramienta Retórica de Énfasis", "Retórica de Énfasis", "Bùdébù (no poder menos que / tener que obligatoriamente), Wúfēi (nada más que).", "Wǒmen bùdébù chéngrèn zhè ge shìshí (我们不得不承认这个事实)"),
        ("Expresión del Objeto Preposicional Escrito con 自, 由, 向", "Sintaxis Formal", "Zì (desde = cóng), Yóu (por parte de = bèi/yóu), Xiàng (hacia = cháo/wǎng).", "Yóu zhuānjiā zhǐdǎo (由专家指导 - Dirigido por especialistas)"),
        ("Caracteres Tradicionales (繁体字) frente a Simplificados (简体字)", "Grafémica y Escritura", "Reglas históricas de simplificación (p. ej. 言 -> 讠, 馬 -> 马, 門 -> 门) y reconocimiento visual.", "Fántǐzì yǔ jiǎntǐzì de duìzhào (繁体字与简体字的对照)"),
        ("Literatura China Moderna: De Lu Xun (鲁迅) a Sanmao (三毛)", "Estudios Literarios", "La ironía de 'La verdadera historia de Ah Q' y los viajes líricos de Sanmao por el mundo hispánico.", "Lǔ Xùn yǔ Zhōngguó xiàndài wénxué (鲁迅与中国现代文学)"),
        ("Negociación Comercial y Relaciones Interpersonales (Guānxi 关系)", "Mundo de los Negocios", "El concepto de Guānxi (red de confianza interpersonal), reciprocidad (Li) y rostro (Miànzi).", "Miànzi yǔ rénjì guānxi (面子与人际关系)"),
        ("Técnicas de Traducción Comercial Bilingüe Español - Chino", "Traducción Especializada", "Equivalencias terminológicas precisas para cartas de crédito, despachos aduaneros y logística.", "Shāngwù fānyì jìqiǎo (商务翻译技巧)"),
        ("Análisis Crítico de Medios Digitales Chinos y Titulares", "Análisis de Prensa", "Sintaxis condensada de titulares de prensa de Xinhua, People's Daily y Weibo.", "Xīnwén biáotí yǔ wénxīn xīnxī (新闻标题与网信信息)"),
        ("Examen Simulador B2 (HSK 4/5): Ensayo y Argumentación", "Certificación B2", "Redacción de ensayo crítico de 400 caracteres con estructura lógica de introducción, tesis y conclusión.", "HSK wǔ jí shūmiàn biǎodá (HSK五级书面表达)")
    ],
    'C1': [
        ("Elementos Sintácticos del Chino Clásico (Wényánwén) en Prosa Moderna", "Gramática Superior C1", "Supervivencia de estructuras monosilábicas del chino clásico en el registro culto contemporáneo.", "Wényán fēnwéi zài xiàndài hànyǔ zhōng de yíliú"),
        ("La Partícula Multifuncional 之 (Zhī) en la Prosa Formal", "Sintaxis Clásica Viva", "Uso de 之 como equivalente a 的 posesivo, pronombre objeto de 3ª persona (lo/la) y marcador de cláusula.", "Fāzhǎn zhī lù (发展之路) / Shàn zhī (善之)"),
        ("Partículas Clásicas: 其 (Qí), 亦 (Yì), 乃 (Nǎi), 尚 (Shàng)", "Morfosintaxis Arcaica Viva", "Qí (su/sus formal), Yì (también = yě), Nǎi (es precisamente / consecuentemente), Shàng (aún = hái).", "Qí zhōng zhī yì (其中之意) / Nǎi wéi shàngcè (乃为上策)"),
        ("Estructuras de Cuatro Caracteres (Sìzì Chéngyǔ) en Discursos Oficiales", "Retórica Superior C1", "Fórmulas estilísticas de cuatro caracteres en oratoria política, conferencias y tratados bilaterales.", "Hépíng gòngchǔ (和平共处) / Hùlì gòngyíng (互利共赢)"),
        ("Sintaxis de Tópico Prominente (Topic-Prominent Syntax) sin Sujeto", "Sintaxis Avanzada", "La primacía del tema discursivo sobre la categoría gramatical de sujeto formal.", "Huà shuō huí lai (话说回来) / Fàn chīguo le (饭吃过了)"),
        ("Elipsis Gramatical y Cohesión Semántica en Prosa de Alto Nivel", "Cohesión Textual", "Cómo el estilo formal chino omite pronombres y conectores obvios para lograr máxima densidad expresiva.", "Jùshì jiélüè yǔ yìlián (句式简略与意联)"),
        ("Análisis de Discursos Diplomáticos en la Asamblea General de la ONU", "Análisis del Discurso", "Estructura retórica de las intervenciones oficiales chinas ante organismos internacionales.", "Liánhéguó dàhuì fāyán fēnxī (联合国大会发言分析)"),
        ("Lenguaje Jurídico y Redacción de Contratos Comerciales Internacionales", "Registro Jurídico", "Hétong fǎguī (normativa contractual), Wéiyuē zérèn (responsabilidad por incumplimiento), Zhòngcái (arbitraje).", "Guójì shāngwù hétong qǐcǎo (国际商务合同起草)"),
        ("Mercados Financieros y Terminología de las Bolsas de Valores", "Ámbito Financiero", "Gǔpiào (acciones), Zhèngquàn (valores), Huìlǜ (tipo de cambio), Fēngxiǎn kòngzhì (control de riesgos).", "Zhèngquàn shìchǎng yǔ tóuzī (证券市场与投资)"),
        ("Poesía de la Dinastía Tang: Li Bai (李白) y Du Fu (杜甫)", "Historia Literaria", "Estudio de 'Pensamiento en una noche tranquila' (静夜思) y la condensación métrica de 5 y 7 caracteres.", "Tángshī sān bǎi shǒu jīngxuǎn (唐诗三百首精选)"),
        ("Filosofía Lingüística: Las Analectas de Confucio y el Tao Te Ching", "Pensamiento Clásico", "Términos filosóficos fundamentales: Rén (仁 benevolencia), Yì (义 rectitud), Dào (道 el camino), Dé (德 virtud).", "Lùnyǔ yǔ Dàodéjīng de yǔyán zhìhuì (论语与道德经的语言智慧)"),
        ("Técnicas Avanzadas de Interpretación Consecutiva Español - Chino", "Interpretación Profesional", "Toma de notas con símbolos gráficos, desverbalización y reformulación fluida bajo presión.", "Kǒuyì bǐjì fǎ yǔ kuàijí fānyì (口译笔记法与快速翻译)"),
        ("Sociolingüística: Política Lingüística del Putonghua y Dialectos", "Sociolingüística", "Promoción del chino estándar y la coexistencia con los siete grandes grupos dialectales sínicos.", "Fāngyán yǔ pǔtōnghuà de fāzhǎn guānxi (方言与普通话的发展关系)"),
        ("La Huella Histórica de la Inmigración China en El Salvador", "Historia Social", "Investigación académica sobre los primeros comerciantes y familias chinas asentadas en Cuscatlán.", "Huárén yímín sà'ěrwǎduō lǐshǐ kǎochá (华人移民萨尔瓦多历史考察)"),
        ("Retórica Superior: Paralelismos (Duìduì 对对) y Antítesis", "Oratoria Artística", "Equilibrio simétrico de número de caracteres, tonos y categorías gramaticales en la prosa formal.", "Duìyì yǔ duìchèn de měixué (对偶与对称的美学)"),
        ("Crítica de Arte y Cine Chino Contemporáneo", "Cultura Visual", "El lenguaje cinematográfico de la Quinta Generación (Zhang Yimou, Chen Kaige) y cineastas actuales.", "Zhōngguó diànyǐng yǔ wénhuà pīpán (中国电影与文化批判)"),
        ("Tratados Bilaterales de Inversión y Cooperación El Salvador - China", "Relaciones Bilaterales", "Análisis de memorandos de entendimiento, tratados de libre comercio y cooperación técnica.", "Shuāngbiān jīngmào hézuò xiéyì (双边经贸合作协议)"),
        ("Metodología de Redacción Académica para Revistas Científicas", "Prosa Científica", "Estructura de introducción, metodología, resultados, discusión y referencias según normas chinas.", "Xuéshù lùnwén xiězò guīfàn (学术论文写作规范)"),
        ("Modismos Metafóricos y Referencias Mitológicas en la Diplomacia", "Pragmática Superior", "El simbolismo del dragón (Lóng), el fénix (Fènghuáng), el bambú (Zhú) y la diplomacia del panda.", "Wénhuà yìxiàng yǔ wàijiāo shūyǔ (文化意象与外交术语)"),
        ("Examen Simulador C1 (HSK 5/6): Análisis Crítico y Traducción Inversa", "Evaluación C1", "Comentario de texto científico-filosófico y traducción de alta precisión del español al chino.", "HSK liù jí gāojí shuǐpíng cèshì (HSK六级高级水平测试)")
    ],
    'C2': [
        ("Maestría Suprema en Wényánwén: Textos de la Dinastía Han y Tang", "Dominio Lingüístico C2", "Lectura directa y exégesis gramatical de 'Shiji' (Memorias históricas) de Sima Qian sin glosa moderna.", "Gǔdài wényánwén shēndù jiědú (古代文言文深度解读)"),
        ("Fonología Histórica del Chino y Evolución de las Rimas Clásicas", "Filología Sínica", "Las categorías tonales del chino medio (Ping, Shang, Qu, Ru) y la pérdida del tono entrante (Ru Sheng).", "Hànyǔ yīnlièshǐ yǔ jīntǐshī shīyùn (汉语音韵史与近体诗诗韵)"),
        ("Desentrañando la Polisemia Arcaica de los 214 Radicales Kangxi", "Grafémica Erudita", "Evolución paleográfica desde los caracteres oraculares hasta la tipografía Song y su valor semántico.", "Kāngxī zìdiǎn èrbǎi yíshísì bùshǒu yánjiū (康熙字典214部首研究)"),
        ("Lingüística Textual: El Flujo Rítmico y la Cadencia Cuatro-Seis", "Estilística Máxima", "La prosa métrica Piantiwen (骈体文) con frases alternadas de 4 y 6 caracteres en la literatura clásica.", "Piántǐwén de jùshì jiégòu yǔ yīnyùn (骈体文的句式结构与音韵)"),
        ("Terminología Científica de Frontera: IA, Cuántica y Aeroespacial", "Ciencia de Vanguardia", "Liàngzǐ jìsuàn (computación cuántica), Rēngōng zhìnéng (IA generativa), Shēn kōng tàntcè (exploración del espacio profundo).", "Qiányán kējì shùyǔ yǔ fānyì (前沿科技术语与翻译)"),
        ("Interpretación Simultánea de Cabina en Cumbres de Jefes de Estado", "Interpretación C2", "Técnicas de síntesis inmediata de oradores de alto rango, protocolos ceremoniales y diplomacia en vivo.", "Tóngshēng chuányì gāojí shíjìan (同声传译高级实践)"),
        ("Hermenéutica Filosófica de Textos Clásicos Daoístas y Neoconfucianos", "Filosofía Profunda", "Interpretación comparada del Zhuangzi, Zhu Xi y Wang Yangming en el pensamiento oriental.", "Sòng Míng lǐxué yǔ dào jiā zhéxué (宋明理学与道家哲学)"),
        ("Paleografía y Epigrafía: Huesos Oraculares (Jiǎgǔwén) y Bronces", "Paleografía China", "Desciframiento de las inscripciones oraculares de la dinastía Shang en Anyang.", "Jiǎgǔwén yǔ jīnwén shūfǎ yánjiū (甲骨文与金文书法研究)"),
        ("Crítica Textual y Edición Filológica de Manuscritos Históricos", "Filología Clásica", "Cotejo de variantes textuales (Jiaokanxue 校勘学) en ediciones dinásticas de obras clásicas.", "Gǔjí xiàokān yǔ wénxiànxué (古籍校勘与文献学)"),
        ("Análisis Estilístico de los Grandes Clásicos: 'Sueño en el Pabellón Rojo'", "Literatura Cumbre", "Léxico nobiliario de la dinastía Qing, psicología poética y complejidad sociológica en Hongloumeng.", "Hónglóumèng yǔyán yìshù fēnxī (红楼梦语言艺术分析)"),
        ("Semántica Comparada: Metáforas Conceptuales Chino - Español Salvadoreño", "Lingüística Cognitiva", "Análisis contrastivo de esquemas de imagen corporales y espaciales en ambas culturas.", "Gàiniàn yǐnyù kuà wénhuà duìbǐ (概念隐喻跨文化对比)"),
        ("Negociación Diplomática Estratégica al Máximo Nivel en Pekín", "Práctica Profesional C2", "Manejo de sutilezas retóricas, silencios estratégicos y lenguaje de compromisos multilaterales.", "Gāocéng wàijiāo tánpàn yìshù (高层外交谈判艺术)"),
        ("Lingüística de Corpus y Procesamiento de Lenguaje Natural (NLP)", "Lingüística Computacional", "Segmentación de palabras en chino sin espacios (Fenci 分词), etiquetado POS y modelos LLM para chino.", "Hànyǔ zìrán yǔyán chǔlǐ yǔ fēncí (汉语自然语言处理与分词)"),
        ("Dialectología Sínica Profunda: Putonghua, Cantonés, Hakka y Minnan", "Dialectología Comparada", "Sustratos fonéticos compartidos por la diáspora salvadoreña de origen cantonés y su integración con Putonghua.", "Sà'ěrwǎduō huáqiáo fāngyán bèi jǐng yǔ pǔtōnghuà (萨尔瓦多华侨方言背景与普通话)"),
        ("El Pensamiento Estratégico de 'El Arte de la Guerra' (Sūnzǐ Bǐngfǎ)", "Estrategia Militar Clásica", "Léxico de estrategia, adaptabilidad al terreno (Yin Di Zhi Sheng) y diplomacia sin conflicto.", "Sūnzǐ bǐngfǎ zhànlüè shùyǔ (孙子兵法战略术语)"),
        ("Alta Traducción Literaria de Ficción Contemporánea (Mo Yan)", "Traducción Artística C2", "Preservación del realismo alucinatorio, dialectalismos rurales de Shandong y ritmo narrativo.", "Mò Yán xiǎoshuō de wénxué fānyì (莫言小说的文学翻译)"),
        ("La Voz China en el Orden Multipolar: Análisis de Comunicados", "Geopolítica Global", "Desglose léxico de los libros blancos sobre defensa, economía y gobernanza global.", "Zhōngguó wàijiāo bái pí shū fēnxī (中国外交白皮书分析)"),
        ("Memoria e Identidad: Testimonios Orales de la Inmigración China", "Historia Oral", "Transcripción fonética, edición de archivo y análisis sociolingüístico de testimonios en El Salvador.", "Sà'ěrwǎduō huárén kǒushù shǐ (萨尔瓦多华人口述史)"),
        ("La Fusión Cultural Sino-Salvadoreña: Síntesis de Tradiciones", "Cultura y Futuro", "Ensayo monográfico sobre el diálogo de civilizaciones entre Cuscatlán y el Río Amarillo.", "Zhōng-Sà wénhuà rónghé yǔ gòngtóng wèilái (中萨文化融合与共同未来)"),
        ("Disertación Magistral C2: Presentación Académica y Defensa Final", "Culminación Académica", "Disertación monográfica exhaustiva de 45 minutos en chino estándar formal con réplica de expertos.", "C2 gāojí hànyǔ bìyè lùnwén dábiàn (C2高级汉语毕业论文答辩)")
    ]
}

def generate_mandarin_lesson_text(lvl, idx, title, category, summary, formula):
    parts = []
    
    parts.append(
        f"APP-KUSKAT • MÓDULO MAESTRO DE IDIOMAS: MANDARÍN (PǓTŌNGHUÀ / 普通话 - CHINO ESTÁNDAR)\n\n"
        f"NIVEL PEDAGÓGICO {lvl} • LECCIÓN {idx + 1:02d}: {title.upper()}\n\n"
        f"CATEGORÍA GRAMATICAL: {category} | ORIENTADO A HABLANTES NATIVOS DE ESPAÑOL SALVADOREÑO "
        f"CON ESPECIAL VALORACIÓN DE LA COMUNIDAD CHINA-SALVADOREÑA.\n\n"
        f"RESUMEN PEDAGÓGICO: {summary}\n\n"
        f"FÓRMULA MORFOSINTÁCTICA CLAVE: {formula}"
    )
    
    parts.append(
        "FUNDAMENTACIÓN LINGÜÍSTICA Y CONEXIÓN CON EL SALVADOR:\n"
        "El chino mandarín estándar (Pǔtōnghuà - 普通话), lengua oficial de la República Popular China, Taiwán y una de las cuatro lenguas oficiales de Singapur, "
        "es el idioma con mayor número de hablantes nativos del planeta (más de 1,100 millones de personas) y una de las seis lenguas oficiales de las Naciones Unidas. "
        "Para los salvadoreños, el mundo sinohablante no es una realidad distante o ajena: desde finales del siglo XIX y a lo largo de las primeras décadas del siglo XX, "
        "familias provenientes de la provincia de Cantón (Guangdong) y regiones vecinas llegaron a tierras cuscatlecas para dedicarse con incansable labor al comercio, "
        "la agricultura y los servicios. Su legado florece hoy en barrios emblemáticos de San Salvador, en prestigiosas asociaciones de comerciantes y en la vida culinaria cotidiana: "
        "¿quién en El Salvador no ha disfrutado de un buen plato de 'chaomín', de wantanes fritos o de un arroz frito preparado con el toque mestizo de nuestros comedores y restaurantes?\n"
        "Desde la óptica lingüística de un hispanohablante de El Salvador, aprender mandarín derriba mitos arraigados: el chino no tiene conjugaciones verbales de ninguna clase "
        "(no hay verbos irregulares como en inglés o español), no tiene concordancia de género masculino/femenino en artículos ni adjetivos, y carece de desinencias de número plural "
        "obligatorias para las cosas. Es una lengua ANALÍTICA y AISLANTE pura, donde la función de una palabra depende estrictamente de su POSICIÓN en la oración y del uso de partículas "
        "funcionales. Por otro lado, introduce dos desafíos fascinantes que desarrollamos metódicamente: el sistema fonético tonal (4 tonos musicales que alteran el significado) "
        "y la escritura milenaria en caracteres chinos (Hanzi - 汉字)."
    )
    
    parts.append(
        "PRINCIPIOS Y REGLAS MORFOSINTÁCTICAS RIGUROSAS:\n"
        "1. La Regla de Oro del Orden Oracional (SVO con Modificadores Antepuestos): El orden básico en chino afirmativo es Sujeto + Verbo + Objeto, pero con una ley inviolable: "
        "TODO modificador (tiempo, lugar, modo o adjetivo) se coloca ANTES del elemento que modifica. Por lo tanto, el tiempo de la acción siempre va antes del verbo: "
        "Wǒ míngtiān qù Běijīng (Yo mañana voy a Pekín), NUNCA '*Wǒ qù Běijīng míngtiān'.\n"
        "2. El Sistema de los 4 Tonos y las Inflexiones Tonales Salvadoreñas: El mandarín cuenta con 4 tonos principales más un tono neutro ligero:\n"
        "   • 1er Tono (5-5): Alto y plano continuo (mā - mamá), semejante al tono sostenido que hacemos al cantar o afinar.\n"
        "   • 2º Tono (3-5): Ascendente directo (má - cáñamo), idéntico al tono de sorpresa o interrogación en El Salvador cuando preguntamos '¿Qué?' o '¿Cómo?'.\n"
        "   • 3er Tono (2-1-4): Descendente y luego ascendente (mǎ - caballo), muy parecido a cuando en español salvadoreño dudamos diciendo con desgano 'Bbueno...'.\n"
        "   • 4º Tono (5-1): Descendente rápido y cortante (mà - regañar), equivalente a dar una orden tajante en salvadoreño: '¡No!' o '¡Ya!'.\n"
        "3. La Regla de los Clasificadores Nominales (Measure Words): En mandarín no se puede decir directamente 'dos libros' (*èr shū) o 'tres personas' (*sān rén). "
        "Es OBLIGATORIO insertar un clasificador nominal que describe la forma o categoría del objeto: 'liǎng běn shū' (本 běn para libros encuadernados) y 'sān gè rén' (个 gè para personas).\n"
        "4. La Ausencia de Cópula con Adjetivos Predicativos: En español salvadoreño decimos 'Yo ESTOY cansado' o 'La pupusa ES rica'. En mandarín, los adjetivos son "
        "verbos estativos que incorporan el ser/estar intrínsecamente. Por ende, decimos 'Wǒ hěn lèi' (Yo muy cansado) y NUNCA '*Wǒ shì lèi'. El adverbio 'hěn' sirve de puente rítmico natural."
    )
    
    parts.append(
        "EJEMPLOS DEMOSTRATIVOS BILINGÜES EN CONTEXTO REAL:\n"
        "• Ejemplo 1: 'Wǒ shì sà'ěrwǎduō rén, xiànzài zài Běijīng dàxué xuéxí Zhōngwén.' "
        "(Traducción al español: Soy salvadoreño y actualmente estudio chino en la Universidad de Pekín - nótese el orden temporal xiànzài antes del verbo zài).\n"
        "• Ejemplo 2: 'Zuótiān wǒ zài Shànghǎi mǎi le liǎng běn hěn yǒuyìsi de shū.' "
        "(Traducción al español: Ayer compré dos libros muy interesantes en Shanghái - nótese clasificador běn y partícula de modificación de).\n"
        "• Ejemplo 3: 'Zhōngguó péngyou qǐng wǒmen chī le dìdào de Běijīng kǎoyā.' "
        "(Traducción al español: Amigos chinos nos invitaron a comer auténtico pato laqueado de Pekín - experiencia gastronómica compartida).\n"
        "• Ejemplo 4: 'Zhǐyào nǐ měitiān jiānchí liànxí hànzì, jiù yídìng néng xuéhǎo Zhōngwén.' "
        "(Traducción al español: Con tal de que perseveres practicando los caracteres todos los días, sin duda podrás dominar el idioma chino)."
    )
    
    parts.append(
        "DIÁLOGO PEDAGÓGICO BILINGÜE EN SAN SALVADOR Y PEKÍN:\n"
        "— Mateo (Joven salvadoreño aprendiendo en APP-KUSKAT): Nǐ hǎo, Lǐ lǎoshī! Qǐngwèn, jīntiān de zuòyè shì shénme?\n"
        "  (¡Buenos días profesor Li! Disculpe la pregunta, ¿cuál es la tarea para hoy?)\n"
        "— Lǐ Lǎoshī (Profesor nativo de Pekín en San Salvador): Nǐ hǎo Mateo! Jīntiān yào fùxí dì shí kè de hànzì, bìngqiě xiě yí duàn huà.\n"
        "  (¡Hola Mateo! Hoy deben repasar los caracteres de la lección 10 y escribir un breve párrafo).\n"
        "— Mateo: Méi wèntí! Wǒ hěn xǐhuan xiě hànzì, suīrán bǐhuà duō, dànshì hěn yǒuyìsi.\n"
        "  (¡No hay problema! Me gusta mucho escribir caracteres, aunque tienen muchos trazos, son fascinantes).\n"
        "— Lǐ Lǎoshī: Hěn hǎo! Nǐ de fāyīn yuèláiyuè biāozhǔn le, jiāyóu!\n"
        "  (¡Excelente! Tu pronunciación es cada vez más estándar, ¡adelante y mucho ánimo!)\n"
        "— Mateo: Xièxie lǎoshī! Míngtiān jiàn!\n"
        "  (¡Muchas gracias profesor! ¡Nos vemos mañana!)"
    )
    
    parts.append(
        "ERRORES FRECUENTES DE HABLANTES SALVADOREÑOS AL APRENDER MANDARÍN:\n"
        "1. Usar el verbo 是 (Shì) con adjetivos: Decir '*Wǒ shì hěn gāoxìng' en vez de la forma natural 'Wǒ hěn gāoxìng' (我很高兴). Recuerda que los adjetivos chinos son verbos estativos.\n"
        "2. Colocar el tiempo o lugar al final de la oración como en español: Decir '*Wǒ qù Běijīng míngtiān' en lugar de 'Wǒ míngtiān qù Běijīng' (Sujeto + Tiempo + Verbo + Objeto).\n"
        "3. Olvidar el clasificador nominal al contar: Decir '*Èr rén' o '*Sān shū' en vez de 'Liǎng gè rén' y 'Sān běn shū'.\n"
        "4. Aplanar los cuatro tonos y hablar como en español: Olvidar que cambiar el tono cambia completamente la palabra (Mā = madre, pero Mǎ = caballo y Mà = insultar).\n"
        "5. Confundir 不 (Bù) y 没 (Méi): Usar 不 para negar el presente habitual o futuro voluntario, y usar 没 exclusivamente para negar acciones pasadas o posesión con 有."
    )
    
    parts.append(
        "CONSEJOS PEDAGÓGICOS Y GUÍA DE ESTUDIO AUTÓNOMO:\n"
        "• Acompaña cada tono con un movimiento de tu cabeza o mano al practicar: mueve la mano en línea recta para el 1er tono, hacia arriba para el 2º, un arco para el 3º y un golpe seco hacia abajo para el 4º.\n"
        "• Aprende los caracteres desglosando sus radicales (部首): al ver el radical de agua 氵(Sān diǎn shuǐ), sabrás que la palabra guarda relación con líquidos (江 río, 海 mar, 洗 lavar).\n"
        "• Repasa 10 minutos diarios con la aplicación APP-KUSKAT para consolidar la memoria visual de los trazos (bǐhuà) y el reconocimiento instantáneo de caracteres."
    )
    
    return "\n\n".join(parts)

# Generar 120 lecciones de Mandarín
all_mandarin_lessons = []
mandarin_lessons_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = MANDARIN_SYLLABUS[lvl]
    for idx, (title, category, summary, formula) in enumerate(items):
        lid = f"mandarin_{lvl.lower()}_lesson_{idx + 1:02d}"
        dtext = generate_mandarin_lesson_text(lvl, idx, title, category, summary, formula)
        
        lesson = {
            "id": lid,
            "title": title,
            "level": lvl,
            "category": category,
            "summary": summary,
            "formula": formula,
            "detailedExplanation": dtext,
            "rules": [
                "El chino mandarín es una lengua analítica y aislante: no existen conjugaciones de verbos ni flexiones de género.",
                "El orden oracional fundamental sitúa los complementos de tiempo y lugar obligatoriamente ANTES del verbo principal.",
                "Entre cualquier número o demostrativo y el sustantivo correspondiente se debe interponer un clasificador nominal (Measure Word).",
                "Los adjetivos predicativos funcionan como verbos de estado y no aceptan el verbo cópula 是 (Shì)."
            ],
            "examplesUS": [
                "Wǒ shì sà'ěrwǎduō rén, wǒ zài xuéxí Pǔtōnghuà. (Soy salvadoreño y estoy aprendiendo chino mandarín).",
                "Tā bǐ wǒ gāo, dànshì wǒ bǐ tā pǎo de kuài. (Estructura comparativa: Él es más alto que yo, pero yo corro más rápido)."
            ],
            "examplesUK": [
                "Caracteres Simplificados (简体字 - Oficial en China Continental): '我是萨尔瓦多人，我爱学习中文。'",
                "Caracteres Tradicionales (繁體字 - Usado en Taiwán y Hong Kong): '我是薩爾瓦多人，我愛學習中文。'"
            ],
            "practicalDialogue": [
                {
                    "speaker": "Mateo",
                    "text": "Nǐ hǎo! Qǐngwèn, nǐ shì Zhōngguó rén ma?",
                    "translation": "¡Hola! Disculpe, ¿usted es ciudadano de China?"
                },
                {
                    "speaker": "Li",
                    "text": "Shì de, wǒ shì Běijīng rén. Nǐ de Zhōngwén shuō de hěn bàng!",
                    "translation": "Sí, soy de Pekín. ¡Hablas un chino excelente!"
                },
                {
                    "speaker": "Mateo",
                    "text": "Nǎlǐ nǎlǐ, wǒ hái zài xuéxí ne! Wǒ hěn xǐhuan Zhōngguó wénhuà.",
                    "translation": "¡Qué va! (modestia tradicional), ¡todavía estoy aprendiendo! Me gusta mucho la cultura china."
                },
                {
                    "speaker": "Li",
                    "text": "Huānyíng nǐ lái Zhōngguó lǚxíng! Wǒmen kěyǐ yīqǐ qù chī huǒguō.",
                    "translation": "¡Bienvenido a viajar a China! Podremos ir juntos a comer fondue china (hotpot)."
                }
            ],
            "commonMistakes": [
                "Usar 是 (Shì) con adjetivos predicativos (decir *Wǒ shì hěn gāo en vez de Wǒ hěn gāo).",
                "Poner el tiempo al final de la oración como en español (decir *Wǒ qù Běijīng míngtiān).",
                "Omitir el clasificador nominal al contar objetos o personas (decir *èr rén en vez de liǎng gè rén).",
                "Desatender los 4 tonos fonéticos cambiando por completo el significado de las palabras."
            ],
            "studyTips": [
                "Asocia cada tono con movimientos corporales o gestos enfáticos para fijar la memoria muscular.",
                "Escribe los caracteres siguiendo siempre el orden canónico de trazos (de arriba hacia abajo y de izquierda a derecha).",
                "Lee en voz alta frases en Pinyin todos los días para adquirir naturalidad y cadencia en el ritmo."
            ]
        }
        all_mandarin_lessons.append(lesson)
        mandarin_lessons_by_level[lvl].append(lesson)

# Generar 300 preguntas de Mandarín (50 por nivel A1 a C2)
all_mandarin_questions = []
mandarin_questions_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = MANDARIN_SYLLABUS[lvl]
    for q_idx in range(50):
        syllabus_ref = items[q_idx % len(items)]
        
        if q_idx % 5 == 0:
            stmt = f"[{lvl} • {syllabus_ref[0]}] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o fonética de '{syllabus_ref[0]}' en chino mandarín es la correcta?"
            opts = [
                {"key": "A", "text": "El chino mandarín es una lengua analítica sin conjugaciones verbales y donde el tiempo/lugar se coloca antes del verbo."},
                {"key": "B", "text": "Los verbos en mandarín se conjugan en 6 personas gramaticales igual que en español."},
                {"key": "C", "text": "El orden oracional exige siempre poner el adverbio de tiempo al final de la frase."},
                {"key": "D", "text": "Es obligatorio usar el verbo cópula 是 (Shì) para conectar el sujeto con cualquier adjetivo."}
            ]
            ans = "A"
            exp = "El chino mandarín estándar carece de desinencias flexivas o conjugaciones; la gramática se fundamenta en el orden estricto de palabras (modificadores antes del verbo) y el uso de partículas funcionales."
        elif q_idx % 5 == 1:
            stmt = f"[{lvl} • Clasificadores Nominales] ¿Por qué en mandarín no se puede decir directamente '*liǎng shū' (dos libros)?"
            opts = [
                {"key": "A", "text": "Porque entre cualquier número y el sustantivo es obligatorio colocar un clasificador nominal (p. ej. liǎng běn shū)."},
                {"key": "B", "text": "Porque el número dos nunca puede usarse con objetos inanimados."},
                {"key": "C", "text": "Porque la palabra shū debe repetirse dos veces en lugar de usar un número."},
                {"key": "D", "text": "Porque los libros se cuentan únicamente de diez en diez."}
            ]
            ans = "A"
            exp = "Los clasificadores nominales (Measure Words) son obligatorios entre números o demostrativos y el sustantivo contado; para libros encuadernados se emplea el clasificador 'běn' (本)."
        elif q_idx % 5 == 2:
            stmt = f"[{lvl} • {syllabus_ref[1]}] ¿Qué ocurre fonéticamente cuando dos caracteres con tercer tono (3º + 3º) se pronuncian juntos, como en 'Nǐ hǎo' (你好)?"
            opts = [
                {"key": "A", "text": "El primer carácter se pronuncia automáticamente en segundo tono ascendente: 'Ní hǎo' (regla de Tone Sandhi)."},
                {"key": "B", "text": "Ambos caracteres se convierten en primer tono plano."},
                {"key": "C", "text": "El segundo carácter se vuelve silencioso."},
                {"key": "D", "text": "Se debe pausar dos segundos entre cada palabra sin cambiar el tono."}
            ]
            ans = "A"
            exp = "Según la regla de modificación tonal (Tone Sandhi), la secuencia 3º + 3º transforma el primer tono en 2º tono ascendente (/), pronunciándose con fluidez 'Ní hǎo' aunque se siga escribiendo con 3er tono."
        elif q_idx % 5 == 3:
            stmt = f"[{lvl} • Sintaxis Adjetival] ¿Cómo se traduce correctamente al mandarín 'Yo estoy muy feliz / alegre'?"
            opts = [
                {"key": "A", "text": "Wǒ hěn gāoxìng (我很高兴) - sin usar el verbo 是."},
                {"key": "B", "text": "Wǒ shì hěn gāoxìng."},
                {"key": "C", "text": "Wǒ zài gāoxìng shì."},
                {"key": "D", "text": "Wǒ gāoxìng shì le."}
            ]
            ans = "A"
            exp = "En chino, los adjetivos son verbos estativos por sí mismos; no se utiliza el verbo cópula 是 (Shì) ante adjetivos comunes, sino el intensificador o conector rítmico 'hěn' (很)."
        else:
            stmt = f"[{lvl} • Herencia China-Salvadoreña] ¿Qué vínculo histórico y gastronómico destaca la presencia de la comunidad china en El Salvador?"
            opts = [
                {"key": "A", "text": "La llegada de familias de Cantón desde el siglo XIX y la integración en el comercio y platos populares salvadoreños como el chaomín."},
                {"key": "B", "text": "La sustitución del cultivo de café por campos de arroz en las faldas del volcán de San Salvador en 1880."},
                {"key": "C", "text": "El establecimiento del mandarín como lengua oficial de Centroamérica en el siglo XX."},
                {"key": "D", "text": "La prohibición de toda interacción cultural entre China y El Salvador hasta el año 2020."}
            ]
            ans = "A"
            exp = "La comunidad de origen chino en El Salvador echó profundas raíces cívicas, comerciales y gastronómicas, aportando platos de fusión que hoy son entrañablemente populares en la mesa salvadoreña como el chaomín."

        q = {
            "id": f"mand_q_{lvl.lower()}_{q_idx + 1:02d}",
            "number": q_idx + 1,
            "level": lvl,
            "variant": "ALL",
            "topic": syllabus_ref[0],
            "statement": stmt,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp,
            "referenceSite": "Instituto Confucio / Centro Cultural Chino-Salvadoreño"
        }
        all_mandarin_questions.append(q)
        mandarin_questions_by_level[lvl].append(q)

with open('src/data/languages/mandarinLessons.ts', 'w', encoding='utf-8') as f:
    f.write("import { GrammarTopicLesson, CEFRLevel } from './englishData';\n\n")
    f.write("export const MANDARIN_LESSONS: GrammarTopicLesson[] = ")
    f.write(json.dumps(all_mandarin_lessons, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const MANDARIN_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = ")
    f.write(json.dumps(mandarin_lessons_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

with open('src/data/languages/mandarinQuestions.ts', 'w', encoding='utf-8') as f:
    f.write("import { LanguageQuestion, CEFRLevel } from './englishData';\n\n")
    f.write("export const MANDARIN_QUESTIONS_BANK: LanguageQuestion[] = ")
    f.write(json.dumps(all_mandarin_questions, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const MANDARIN_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = ")
    f.write(json.dumps(mandarin_questions_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# Verbos de Mandarín (100 verbos fundamentales con Hanzi, Pinyin, Aspecto/Colocación y Traducción)
mandarin_verbs = [
    {"infinitive": "是 (Shì)", "pastSimple": "是 (Shì / 是...的)", "pastParticiple": "是", "spanish": "ser / afirmar", "level": "A1", "type": "regular"},
    {"infinitive": "有 (Yǒu)", "pastSimple": "有了 (Yǒule / 没有)", "pastParticiple": "有", "spanish": "tener / haber", "level": "A1", "type": "irregular"},
    {"infinitive": "在 (Zài)", "pastSimple": "在 (Zài)", "pastParticiple": "在", "spanish": "estar en / ubicarse", "level": "A1", "type": "regular"},
    {"infinitive": "吃 (Chī)", "pastSimple": "吃了 (Chīle)", "pastParticiple": "吃过 (Chīguo)", "spanish": "comer", "level": "A1", "type": "regular"},
    {"infinitive": "喝 (Hē)", "pastSimple": "喝了 (Hēle)", "pastParticiple": "喝过 (Hēguo)", "spanish": "beber / tomar", "level": "A1", "type": "regular"},
    {"infinitive": "看 (Kàn)", "pastSimple": "看了 (Kànle)", "pastParticiple": "看过 (Kànguo)", "spanish": "ver / mirar / leer", "level": "A1", "type": "regular"},
    {"infinitive": "听 (Tīng)", "pastSimple": "听了 (Tīngle)", "pastParticiple": "听过 (Tīngguo)", "spanish": "escuchar / oír", "level": "A1", "type": "regular"},
    {"infinitive": "说 (Shuō)", "pastSimple": "说了 (Shuōle)", "pastParticiple": "说过 (Shuōguo)", "spanish": "hablar / decir", "level": "A1", "type": "regular"},
    {"infinitive": "读 (Dú)", "pastSimple": "读了 (Dúle)", "pastParticiple": "读过 (Dúguo)", "spanish": "leer en voz alta / estudiar", "level": "A1", "type": "regular"},
    {"infinitive": "写 (Xiě)", "pastSimple": "写了 (Xiěle)", "pastParticiple": "写过 (Xiěguo)", "spanish": "escribir", "level": "A1", "type": "regular"},
    {"infinitive": "去 (Qù)", "pastSimple": "去了 (Qùle)", "pastParticiple": "去过 (Qùguo)", "spanish": "ir", "level": "A1", "type": "regular"},
    {"infinitive": "来 (Lái)", "pastSimple": "来了 (Láile)", "pastParticiple": "来过 (Láiguo)", "spanish": "venir", "level": "A1", "type": "regular"},
    {"infinitive": "买 (Mǎi)", "pastSimple": "买了 (Mǎile)", "pastParticiple": "买过 (Mǎiguo)", "spanish": "comprar", "level": "A1", "type": "regular"},
    {"infinitive": "卖 (Mài)", "pastSimple": "卖了 (Màile)", "pastParticiple": "卖过 (Màiguo)", "spanish": "vender", "level": "A1", "type": "regular"},
    {"infinitive": "做 (Zuò)", "pastSimple": "做了 (Zuòle)", "pastParticiple": "做过 (Zuòguo)", "spanish": "hacer / fabricar", "level": "A1", "type": "regular"},
    {"infinitive": "作 (Zuò)", "pastSimple": "作了 (Zuòle)", "pastParticiple": "作过 (Zuòguo)", "spanish": "redactar / obrar", "level": "A1", "type": "regular"},
    {"infinitive": "坐 (Zuò)", "pastSimple": "坐了 (Zuòle)", "pastParticiple": "坐过 (Zuòguo)", "spanish": "sentarse / viajar en vehículo", "level": "A1", "type": "regular"},
    {"infinitive": "学 (Xué)", "pastSimple": "学了 (Xuéle)", "pastParticiple": "学过 (Xuéguo)", "spanish": "aprender", "level": "A1", "type": "regular"},
    {"infinitive": "想 (Xiǎng)", "pastSimple": "想了 (Xiǎngle)", "pastParticiple": "想过 (Xiǎngguo)", "spanish": "pensar / desear / extrañar", "level": "A1", "type": "regular"},
    {"infinitive": "要 (Yào)", "pastSimple": "要了 (Yàole)", "pastParticiple": "要过 (Yàoguo)", "spanish": "querer / necesitar / ir a", "level": "A1", "type": "regular"},

    # A2
    {"infinitive": "住 (Zhù)", "pastSimple": "住了 (Zhùle)", "pastParticiple": "住过 (Zhùguo)", "spanish": "vivir / hospedarse", "level": "A2", "type": "regular"},
    {"infinitive": "走 (Zǒu)", "pastSimple": "走了 (Zǒule)", "pastParticiple": "走过 (Zǒuguo)", "spanish": "caminar / marcharse", "level": "A2", "type": "regular"},
    {"infinitive": "跑 (Pǎo)", "pastSimple": "跑了 (Pǎole)", "pastParticiple": "跑过 (Pǎoguo)", "spanish": "correr", "level": "A2", "type": "regular"},
    {"infinitive": "等 (Děng)", "pastSimple": "等了 (Děngle)", "pastParticiple": "等过 (Děngguo)", "spanish": "esperar", "level": "A2", "type": "regular"},
    {"infinitive": "找 (Zhǎo)", "pastSimple": "找到了 (Zhǎodàole)", "pastParticiple": "找过 (Zhǎoguo)", "spanish": "buscar / dar cambio", "level": "A2", "type": "regular"},
    {"infinitive": "给 (Gěi)", "pastSimple": "给了 (Gěile)", "pastParticiple": "给过 (Gěiguo)", "spanish": "dar / entregar a", "level": "A2", "type": "regular"},
    {"infinitive": "问 (Wèn)", "pastSimple": "问了 (Wènle)", "pastParticiple": "问过 (Wènguo)", "spanish": "preguntar", "level": "A2", "type": "regular"},
    {"infinitive": "回答 (Huídá)", "pastSimple": "回答了 (Huídále)", "pastParticiple": "回答过", "spanish": "responder / contestar", "level": "A2", "type": "regular"},
    {"infinitive": "帮助 (Bāngzhù)", "pastSimple": "帮助了 (Bāngzhùle)", "pastParticiple": "帮助过", "spanish": "ayudar / auxiliar", "level": "A2", "type": "regular"},
    {"infinitive": "介绍 (Jièshào)", "pastSimple": "介绍了 (Jièshàole)", "pastParticiple": "介绍过", "spanish": "presentar / recomendar", "level": "A2", "type": "regular"},
    {"infinitive": "懂 (Dǒng)", "pastSimple": "懂了 (Dǒngle)", "pastParticiple": "懂", "spanish": "comprender / entender", "level": "A2", "type": "regular"},
    {"infinitive": "完 (Wán)", "pastSimple": "完了 (Wánle)", "pastParticiple": "完", "spanish": "terminar / acabar", "level": "A2", "type": "regular"},
    {"infinitive": "开始 (Kāishǐ)", "pastSimple": "开始 (Kāishǐle)", "pastParticiple": "开始过", "spanish": "empezar / comenzar", "level": "A2", "type": "regular"},
    {"infinitive": "结束 (Jiéshù)", "pastSimple": "结束了 (Jiéshùle)", "pastParticiple": "结束", "spanish": "concluir / finalizar", "level": "A2", "type": "regular"},
    {"infinitive": "穿 (Chuān)", "pastSimple": "穿了 (Chuānle)", "pastParticiple": "穿过 (Chuānguo)", "spanish": "vestir / calzar", "level": "A2", "type": "regular"},
    {"infinitive": "洗 (Xǐ)", "pastSimple": "洗了 (Xǐle)", "pastParticiple": "洗过 (Xǐguo)", "spanish": "lavar / limpiar", "level": "A2", "type": "regular"},
    {"infinitive": "开 (Kāi)", "pastSimple": "开了 (Kāile)", "pastParticiple": "开过 (Kāiguo)", "spanish": "abrir / conducir / encender", "level": "A2", "type": "regular"},
    {"infinitive": "关 (Guān)", "pastSimple": "关了 (Guānle)", "pastParticiple": "关过 (Guānguo)", "spanish": "cerrar / apagar", "level": "A2", "type": "regular"},
    {"infinitive": "生病 (Shēngbìng)", "pastSimple": "生病了 (Shēngbìngle)", "pastParticiple": "生病过", "spanish": "enfermarse", "level": "A2", "type": "regular"},
    {"infinitive": "上班 (Shàngbān)", "pastSimple": "上班了 (Shàngbānle)", "pastParticiple": "上班过", "spanish": "ir al trabajo / entrar a laborar", "level": "A2", "type": "regular"},

    # B1
    {"infinitive": "解决 (Jiějué)", "pastSimple": "解决了 (Jiějuéle)", "pastParticiple": "解决过", "spanish": "resolver (un problema)", "level": "B1", "type": "regular"},
    {"infinitive": "提高 (Tígāo)", "pastSimple": "提高了 (Tígāole)", "pastParticiple": "提高", "spanish": "elevar / mejorar / aumentar", "level": "B1", "type": "regular"},
    {"infinitive": "保护 (Bǎohù)", "pastSimple": "保护了 (Bǎohùle)", "pastParticiple": "保护过", "spanish": "proteger / salvaguardar", "level": "B1", "type": "regular"},
    {"infinitive": "坚持 (Jiānchí)", "pastSimple": "坚持了 (Jiānchíle)", "pastParticiple": "坚持过", "spanish": "perseverar / insistir", "level": "B1", "type": "regular"},
    {"infinitive": "放弃 (Fàngqì)", "pastSimple": "放弃了 (Fàngqìle)", "pastParticiple": "放弃过", "spanish": "renunciar / abandonar", "level": "B1", "type": "regular"},
    {"infinitive": "讨论 (Tǎolùn)", "pastSimple": "讨论了 (Tǎolùnle)", "pastParticiple": "讨论过", "spanish": "discutir / debatir", "level": "B1", "type": "regular"},
    {"infinitive": "参加 (Cānjiā)", "pastSimple": "参加了 (Cānjiāle)", "pastParticiple": "参加过", "spanish": "participar en / asistir", "level": "B1", "type": "regular"},
    {"infinitive": "成功 (Chénggōng)", "pastSimple": "成功了 (Chénggōngle)", "pastParticiple": "成功过", "spanish": "tener éxito / triunfar", "level": "B1", "type": "regular"},
    {"infinitive": "失败 (Shībài)", "pastSimple": "失败了 (Shībàile)", "pastParticiple": "失败过", "spanish": "fracasar / ser derrotado", "level": "B1", "type": "regular"},
    {"infinitive": "接受 (Jiēshòu)", "pastSimple": "接受了 (Jiēshòule)", "pastParticiple": "接受过", "spanish": "aceptar / acoger", "level": "B1", "type": "regular"},
    {"infinitive": "拒绝 (Jùjué)", "pastSimple": "拒绝了 (Jùjuéle)", "pastParticiple": "拒绝过", "spanish": "rechazar / declinar", "level": "B1", "type": "regular"},
    {"infinitive": "同意 (Tóngyì)", "pastSimple": "同意了 (Tóngyìle)", "pastParticiple": "同意过", "spanish": "estar de acuerdo / acceder", "level": "B1", "type": "regular"},
    {"infinitive": "反对 (Fǎnduì)", "pastSimple": "反对了 (Fǎnduìle)", "pastParticiple": "反对过", "spanish": "oponerse / objetar", "level": "B1", "type": "regular"},
    {"infinitive": "适应 (Shìyìng)", "pastSimple": "适应了 (Shìyìngle)", "pastParticiple": "适应过", "spanish": "adaptarse / acostumbrarse", "level": "B1", "type": "regular"},
    {"infinitive": "联系 (Liánxì)", "pastSimple": "联系了 (Liánxìle)", "pastParticiple": "联系过", "spanish": "contactar / comunicarse", "level": "B1", "type": "regular"},
    {"infinitive": "安排 (Ānpái)", "pastSimple": "安排了 (Ānpáile)", "pastParticiple": "安排过", "spanish": "organizar / programar", "level": "B1", "type": "regular"},
    {"infinitive": "记得 (Jìde)", "pastSimple": "记得 (Jìde)", "pastParticiple": "记得", "spanish": "recordar", "level": "B1", "type": "regular"},
    {"infinitive": "忘记 (Wàngjì)", "pastSimple": "忘记了 (Wàngjìle)", "pastParticiple": "忘记过", "spanish": "olvidar", "level": "B1", "type": "regular"},
    {"infinitive": "支持 (Zhīchí)", "pastSimple": "支持了 (Zhīchíle)", "pastParticiple": "支持过", "spanish": "apoyar / respaldar", "level": "B1", "type": "regular"},
    {"infinitive": "发生 (Fāshēng)", "pastSimple": "发生了 (Fāshēngle)", "pastParticiple": "发生过", "spanish": "ocurrir / suceder", "level": "B1", "type": "regular"},

    # B2
    {"infinitive": "进行 (Jìnxíng)", "pastSimple": "进行了 (Jìnxíngle)", "pastParticiple": "进行过", "spanish": "llevar a cabo / efectuar", "level": "B2", "type": "regular"},
    {"infinitive": "具有 (Jùyǒu)", "pastSimple": "具有 (Jùyǒu)", "pastParticiple": "具有", "spanish": "poseer / contar con (cualidad)", "level": "B2", "type": "regular"},
    {"infinitive": "给予 (Jǐyǔ)", "pastSimple": "给予了 (Jǐyǔle)", "pastParticiple": "给予过", "spanish": "brindar / otorgar formalmente", "level": "B2", "type": "regular"},
    {"infinitive": "促进 (Cùjìn)", "pastSimple": "促进了 (Cùjìnle)", "pastParticiple": "促进过", "spanish": "promover / impulsar", "level": "B2", "type": "regular"},
    {"infinitive": "实现 (Shíxiàn)", "pastSimple": "实现了 (Shíxiànle)", "pastParticiple": "实现过", "spanish": "hacer realidad / cumplir", "level": "B2", "type": "regular"},
    {"infinitive": "面临 (Miànlín)", "pastSimple": "面临 (Miànlínle)", "pastParticiple": "面临过", "spanish": "afrontar / encontrarse ante", "level": "B2", "type": "regular"},
    {"infinitive": "克服 (Kèfú)", "pastSimple": "克服了 (Kèfúle)", "pastParticiple": "克服过", "spanish": "superar / vencer (obstáculos)", "level": "B2", "type": "regular"},
    {"infinitive": "建立 (Jiànlì)", "pastSimple": "建立了 (Jiànlìle)", "pastParticiple": "建立过", "spanish": "fundar / establecer", "level": "B2", "type": "regular"},
    {"infinitive": "加强 (Jiāqiáng)", "pastSimple": "加强了 (Jiāqiángle)", "pastParticiple": "加强过", "spanish": "fortalecer / intensificar", "level": "B2", "type": "regular"},
    {"infinitive": "投资 (Tóuzī)", "pastSimple": "投资了 (Tóuzīle)", "pastParticiple": "投资过", "spanish": "invertir (capital)", "level": "B2", "type": "regular"},
    {"infinitive": "消费 (Xiāofèi)", "pastSimple": "消费了 (Xiāofèile)", "pastParticiple": "消费过", "spanish": "consumir / gastar", "level": "B2", "type": "regular"},
    {"infinitive": "承担 (Chéngdān)", "pastSimple": "承担了 (Chéngdānle)", "pastParticiple": "承担过", "spanish": "asumir (responsabilidad / costos)", "level": "B2", "type": "regular"},
    {"infinitive": "表明 (Biǎomíng)", "pastSimple": "表明了 (Biǎomíngle)", "pastParticiple": "表明", "spanish": "indicar / manifestar con claridad", "level": "B2", "type": "regular"},
    {"infinitive": "强调 (Qiángdiào)", "pastSimple": "强调了 (Qiángdiàole)", "pastParticiple": "强调过", "spanish": "enfatizar / recalcar", "level": "B2", "type": "regular"},
    {"infinitive": "维护 (Wéihù)", "pastSimple": "维护了 (Wéihùle)", "pastParticiple": "维护过", "spanish": "mantener / defender (derechos)", "level": "B2", "type": "regular"},
    {"infinitive": "遵守 (Zūnshǒu)", "pastSimple": "遵守了 (Zūnshǒule)", "pastParticiple": "遵守过", "spanish": "acatar / cumplir las reglas", "level": "B2", "type": "regular"},
    {"infinitive": "忽视 (Hūshì)", "pastSimple": "忽视了 (Hūshìle)", "pastParticiple": "忽视过", "spanish": "pasar por alto / desatender", "level": "B2", "type": "regular"},
    {"infinitive": "分析 (Fēnxī)", "pastSimple": "分析了 (Fēnxīle)", "pastParticiple": "分析过", "spanish": "analizar", "level": "B2", "type": "regular"},
    {"infinitive": "评价 (Píngjià)", "pastSimple": "评价了 (Píngjiàle)", "pastParticiple": "评价过", "spanish": "evaluar / valorar", "level": "B2", "type": "regular"},
    {"infinitive": "协调 (Xiétiáo)", "pastSimple": "协调了 (Xiétiáole)", "pastParticiple": "协调过", "spanish": "coordinar / armonizar", "level": "B2", "type": "regular"},

    # C1 / C2
    {"infinitive": "探讨 (Tàntǎo)", "pastSimple": "探讨了 (Tàntǎole)", "pastParticiple": "探讨过", "spanish": "explorar a fondo / deliberar", "level": "C1", "type": "regular"},
    {"infinitive": "阐明 (Chǎnmíng)", "pastSimple": "阐明了 (Chǎnmíngle)", "pastParticiple": "阐明过", "spanish": "esclarecer / dilucidar", "level": "C1", "type": "regular"},
    {"infinitive": "遵循 (Zūnxún)", "pastSimple": "遵循了 (Zūnxúnle)", "pastParticiple": "遵循过", "spanish": "regirse por / ceñirse a", "level": "C1", "type": "regular"},
    {"infinitive": "鉴于 (Jiànyú)", "pastSimple": "鉴于 (Jiànyú)", "pastParticiple": "鉴于", "spanish": "en vista de / habida cuenta de", "level": "C1", "type": "regular"},
    {"infinitive": "赋能 (Fùnéng)", "pastSimple": "赋能了 (Fùnéngle)", "pastParticiple": "赋能过", "spanish": "empoderar / dotar de capacidades", "level": "C1", "type": "regular"},
    {"infinitive": "秉承 (Bǐngchéng)", "pastSimple": "秉承了 (Bǐngchéngle)", "pastParticiple": "秉承过", "spanish": "heredar / sostener con fidelidad", "level": "C1", "type": "regular"},
    {"infinitive": "弘扬 (Hóngyáng)", "pastSimple": "弘扬了 (Hóngyángle)", "pastParticiple": "弘扬过", "spanish": "difundir / exaltar con orgullo", "level": "C1", "type": "regular"},
    {"infinitive": "缔结 (Dìjié)", "pastSimple": "缔结了 (Dìjiéle)", "pastParticiple": "缔结过", "spanish": "suscribir / entablar (un tratado)", "level": "C1", "type": "regular"},
    {"infinitive": "博弈 (Bóyì)", "pastSimple": "博弈了 (Bóyìle)", "pastParticiple": "博弈过", "spanish": "jugar estratégicamente / contender", "level": "C1", "type": "regular"},
    {"infinitive": "蜕变 (Tuìbiàn)", "pastSimple": "蜕变了 (Tuìbiànle)", "pastParticiple": "蜕变过", "spanish": "metamorfosearse / transformarse", "level": "C1", "type": "regular"},
    {"infinitive": "格物 (Gégwù)", "pastSimple": "格物 (Gégwù)", "pastParticiple": "格物", "spanish": "investigar la naturaleza de las cosas", "level": "C2", "type": "regular"},
    {"infinitive": "致知 (Zhìzhī)", "pastSimple": "致知 (Zhìzhī)", "pastParticiple": "致知", "spanish": "alcanzar el conocimiento supremo", "level": "C2", "type": "regular"},
    {"infinitive": "溯源 (Sùyuán)", "pastSimple": "溯源了 (Sùyuánle)", "pastParticiple": "溯源过", "spanish": "remontarse al origen / rastrear", "level": "C2", "type": "regular"},
    {"infinitive": "融会贯通 (Rónghuì Guàntōng)", "pastSimple": "融会贯通了", "pastParticiple": "融会贯通", "spanish": "integrar y dominar cabalmente", "level": "C2", "type": "regular"},
    {"infinitive": "潜移默化 (Qiányí Mòhuà)", "pastSimple": "潜移默化了", "pastParticiple": "潜移默化", "spanish": "influir de modo sutil e imperceptible", "level": "C2", "type": "regular"},
    {"infinitive": "反躬自省 (Fǎngōng Zìxǐng)", "pastSimple": "反躬自省了", "pastParticiple": "反躬自省", "spanish": "hacer examen de conciencia riguroso", "level": "C2", "type": "regular"},
    {"infinitive": "兼收并蓄 (Jiānshōu Bìngxù)", "pastSimple": "兼收并蓄了", "pastParticiple": "兼收并蓄", "spanish": "asimilar todo lo valioso con amplitud", "level": "C2", "type": "regular"},
    {"infinitive": "审时度势 (Shěnshí Duòshì)", "pastSimple": "审时度势了", "pastParticiple": "审时度势", "spanish": "analizar el momento y sopesar circunstancias", "level": "C2", "type": "regular"},
    {"infinitive": "继往开来 (Jìwǎng Kāilái)", "pastSimple": "继往开来了", "pastParticiple": "继往开来", "spanish": "dar continuidad al pasado y abrir el porvenir", "level": "C2", "type": "regular"},
    {"infinitive": "返璞归真 (Fǎnpú Guīzhēn)", "pastSimple": "返璞归真了", "pastParticiple": "返璞归真", "spanish": "retornar a la pureza y sencillez original", "level": "C2", "type": "regular"}
]

mandarin_verbs_by_level = {lvl: [] for lvl in LEVELS}
for v in mandarin_verbs:
    mandarin_verbs_by_level[v["level"]].append(v)

with open('src/data/languages/mandarinVerbs.ts', 'w', encoding='utf-8') as f:
    f.write("import { LanguageVerbItem, CEFRLevel } from './englishData';\n\n")
    f.write("export const MANDARIN_VERBS_CATALOGUE: LanguageVerbItem[] = ")
    f.write(json.dumps(mandarin_verbs, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const MANDARIN_VERBS_BY_LEVEL: Record<CEFRLevel, LanguageVerbItem[]> = ")
    f.write(json.dumps(mandarin_verbs_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# Basics Data (Pinyin con 4 tonos, números con conversor algorítmico, colores y simbolismo, objetos en 10 categorías)
basics_content = '''export interface MandarinPinyinItem {
  pinyin: string;
  tone: number;
  hanziExample: string;
  transliteration: string;
  spanish: string;
  salvadoranMnemonic: string;
}

export const MANDARIN_TONES_DATA: MandarinPinyinItem[] = [
  { pinyin: 'mā', tone: 1, hanziExample: '妈', transliteration: 'mā', spanish: 'madre / mamá', salvadoranMnemonic: '1er Tono: Alto y sostenido en nota continua (5-5), como cantar una nota musical limpia.' },
  { pinyin: 'má', tone: 2, hanziExample: '麻', transliteration: 'má', spanish: 'cáñamo / sésamo', salvadoranMnemonic: '2º Tono: Ascendente rápido (3-5), idéntico a la pregunta de asombro salvadoreña: "¿Quéee?".' },
  { pinyin: 'mǎ', tone: 3, hanziExample: '马', transliteration: 'mǎ', spanish: 'caballo', salvadoranMnemonic: '3er Tono: Baja al fondo y sube (2-1-4), como cuando en El Salvador decimos con duda: "Bbueno...".' },
  { pinyin: 'mà', tone: 4, hanziExample: '骂', transliteration: 'mà', spanish: 'regañar / insultar', salvadoranMnemonic: '4º Tono: Descendente tajante (5-1), como dar una orden seca en salvadoreño: "¡Ya!" o "¡No!".' },
  { pinyin: 'ma', tone: 0, hanziExample: '吗', transliteration: 'ma', spanish: 'partícula de pregunta', salvadoranMnemonic: 'Tono Neutro: Corto, suave y átono, como la última sílaba en palabras graves españolas (árbol, casa).' }
];

export interface MandarinNumberItem {
  number: number;
  hanzi: string;
  pinyin: string;
  spanish: string;
  notes: string;
}

export const MANDARIN_NUMBERS_DATA: MandarinNumberItem[] = [
  { number: 0, hanzi: '零', pinyin: 'líng', spanish: 'cero', notes: 'Se lee en años y números telefónicos individuales.' },
  { number: 1, hanzi: '一', pinyin: 'yī', spanish: 'uno', notes: 'Cambia a 4º tono ante 1º, 2º, 3º (yí gè).' },
  { number: 2, hanzi: '二 / 两', pinyin: 'èr / liǎng', spanish: 'dos', notes: 'Èr para contar dígitos; Liǎng ante clasificadores.' },
  { number: 3, hanzi: '三', pinyin: 'sān', spanish: 'tres', notes: 'Número afortunado (fonéticamente cercano a nacer / vivir).' },
  { number: 4, hanzi: '四', pinyin: 'sì', spanish: 'cuatro', notes: 'Evitado en edificios por homofonía con muerte (sǐ).' },
  { number: 5, hanzi: '五', pinyin: 'wǔ', spanish: 'cinco', notes: 'Base de los 5 elementos (Wǔxíng).' },
  { number: 6, hanzi: '六', pinyin: 'liù', spanish: 'seis', notes: 'Símbolo supremo de fluidez y buenos augurios.' },
  { number: 7, hanzi: '七', pinyin: 'qī', spanish: 'siete', notes: 'Día del amor tradicional chino (Qīxī).' },
  { number: 8, hanzi: '八', pinyin: 'bā', spanish: 'ocho', notes: 'El número de máxima fortuna y prosperidad (fā).' },
  { number: 9, hanzi: '九', pinyin: 'jiǔ', spanish: 'nueve', notes: 'Símbolo del emperador y de longevidad eterna.' },
  { number: 10, hanzi: '十', pinyin: 'shí', spanish: 'diez', notes: 'Forma de cruz equilibrada perfecta.' },
  { number: 20, hanzi: '二十', pinyin: 'èrshí', spanish: 'veinte', notes: 'Dos decenas.' },
  { number: 30, hanzi: '三十', pinyin: 'sānshí', spanish: 'treinta', notes: 'Tres decenas.' },
  { number: 50, hanzi: '五十', pinyin: 'wǔshí', spanish: 'cincuenta', notes: 'Cinco decenas.' },
  { number: 100, hanzi: '一百', pinyin: 'yìbǎi', spanish: 'cien', notes: 'Una centena.' },
  { number: 1000, hanzi: '一千', pinyin: 'yìqiān', spanish: 'mil', notes: 'Un millar.' },
  { number: 10000, hanzi: '一万', pinyin: 'yíwàn', spanish: 'diez mil', notes: 'Base decimal tradicional de cuatro ceros en chino.' }
];

export function numberToMandarinWords(num: number): string {
  if (num === 0) return '零 (líng)';
  if (num < 0) return '负 (fù) ' + numberToMandarinWords(-num);
  
  const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const pinyins = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ'];
  
  if (num < 10) return `${digits[num]} (${pinyins[num]})`;
  if (num === 10) return '十 (shí)';
  if (num < 20) {
    const rem = num % 10;
    return `十一 (${digits[rem]}) -> 十${digits[rem]} (shí${pinyins[rem]})`;
  }
  if (num < 100) {
    const t = Math.floor(num / 10);
    const r = num % 10;
    if (r === 0) return `${digits[t]}十 (${pinyins[t]}shí)`;
    return `${digits[t]}十${digits[r]} (${pinyins[t]}shí${pinyins[r]})`;
  }
  if (num === 100) return '一百 (yìbǎi)';
  if (num < 1000) {
    const h = Math.floor(num / 100);
    const rem = num % 100;
    if (rem === 0) return `${digits[h]}百 (${pinyins[h]}bǎi)`;
    if (rem < 10) return `${digits[h]}百零${digits[rem]} (${pinyins[h]}bǎi líng ${pinyins[rem]})`;
    return `${digits[h]}百 ` + numberToMandarinWords(rem);
  }
  return num.toString();
}

export const MANDARIN_COLORS_DATA = [
  { name: 'Rojo', hanzi: '红色', pinyin: 'hóngsè', hex: '#DC2626', symbolism: 'El color supremo de la suerte, bodas, Año Nuevo Chino y alegría.' },
  { name: 'Amarillo / Dorado', hanzi: '黄色', pinyin: 'huángsè', hex: '#EAB308', symbolism: 'Color imperial exclusivo de la realeza y elemento tierra.' },
  { name: 'Verde', hanzi: '绿色', pinyin: 'lǜsè', hex: '#16A34A', symbolism: 'Armonía, naturaleza, jade milenario y salud.' },
  { name: 'Blanco', hanzi: '白色', pinyin: 'báisè', hex: '#F8FAFC', symbolism: 'Luto tradicional, pureza elemental y otoño.' },
  { name: 'Negro', hanzi: '黑色', pinyin: 'hēisè', hex: '#0F172A', symbolism: 'Seriedad, agua profunda, misterio y elegancia sobria.' },
  { name: 'Azul', hanzi: '蓝色', pinyin: 'lánsè', hex: '#2563EB', symbolism: 'Serenidad, cielo límpido y primavera naciente.' },
  { name: 'Naranja', hanzi: '橙色', pinyin: 'chéngsè', hex: '#EA580C', symbolism: 'Asociado a la mandarina, fruto de abundancia y fortuna.' },
  { name: 'Marrón / Café', hanzi: '棕色', pinyin: 'zōngsè', hex: '#78350F', symbolism: 'Estabilidad de la tierra y granos de café cuscatleco.' }
];

export const MANDARIN_OBJECTS_CATEGORIES = [
  {
    category: 'Comedor y Gastronomía (餐厅与美食)',
    items: [
      { hanzi: '筷子', pinyin: 'Kuàizi', spanish: 'Palillos chinos' },
      { hanzi: '碗', pinyin: 'Wǎn', spanish: 'Cuenco / Tazón de arroz' },
      { hanzi: '茶', pinyin: 'Chá', spanish: 'Té verde / Té jazmín' },
      { hanzi: '水', pinyin: 'Shuǐ', spanish: 'Agua' },
      { hanzi: '米饭', pinyin: 'Mǐfàn', spanish: 'Arroz blanco cocido' },
      { hanzi: '炒面', pinyin: 'Chǎomiàn', spanish: 'Chaomín (fideos salteados)' }
    ]
  },
  {
    category: 'Escuela y Estudio (学校与学习)',
    items: [
      { hanzi: '书', pinyin: 'Shū', spanish: 'Libro' },
      { hanzi: '笔', pinyin: 'Bǐ', spanish: 'Bolígrafo / Pincel caligráfico' },
      { hanzi: '本子', pinyin: 'Běnzi', spanish: 'Cuaderno' },
      { hanzi: '汉字', pinyin: 'Hànzì', spanish: 'Caracteres chinos' },
      { hanzi: '词典', pinyin: 'Cídiǎn', spanish: 'Diccionario' },
      { hanzi: '老师', pinyin: 'Lǎoshī', spanish: 'Profesor / Maestro' }
    ]
  },
  {
    category: 'Hogar y Ciudad (家居与城市)',
    items: [
      { hanzi: '家', pinyin: 'Jiā', spanish: 'Casa / Familia' },
      { hanzi: '门', pinyin: 'Mén', spanish: 'Puerta' },
      { hanzi: '窗户', pinyin: 'Chuānghu', spanish: 'Ventana' },
      { hanzi: '桌子', pinyin: 'Zhuōzi', spanish: 'Mesa' },
      { hanzi: '手机', pinyin: 'Shǒujī', spanish: 'Teléfono móvil' },
      { hanzi: '电脑', pinyin: 'Diànnǎo', spanish: 'Computadora / Ordenador' }
    ]
  }
];
'''

with open('src/data/languages/mandarinBasicsData.ts', 'w', encoding='utf-8') as f:
    f.write(basics_content)

# Vocabulary Corpus
vocab_content = '''export interface MandarinVocabItem {
  id: string;
  hanzi: string;
  pinyin: string;
  spanish: string;
  hskLevel: 'HSK1' | 'HSK2' | 'HSK3' | 'HSK4' | 'HSK5' | 'HSK6';
  category: string;
}

export const MANDARIN_VOCABULARY_CORPUS: MandarinVocabItem[] = [
  { id: 'man_v_01', hanzi: '你好', pinyin: 'Nǐ hǎo', spanish: 'Hola', hskLevel: 'HSK1', category: 'Saludos' },
  { id: 'man_v_02', hanzi: '谢谢', pinyin: 'Xièxie', spanish: 'Gracias', hskLevel: 'HSK1', category: 'Cortesía' },
  { id: 'man_v_03', hanzi: '再见', pinyin: 'Zàijiàn', spanish: 'Adiós / Hasta la vista', hskLevel: 'HSK1', category: 'Saludos' },
  { id: 'man_v_04', hanzi: '朋友', pinyin: 'Péngyou', spanish: 'Amigo', hskLevel: 'HSK1', category: 'Relaciones' },
  { id: 'man_v_05', hanzi: '中国', pinyin: 'Zhōngguó', spanish: 'China (País del Centro)', hskLevel: 'HSK1', category: 'Geografía' },
  { id: 'man_v_06', hanzi: '萨尔瓦多', pinyin: 'Sà\'ěrwǎduō', spanish: 'El Salvador (Cuscatlán)', hskLevel: 'HSK1', category: 'Geografía' },
  { id: 'man_v_07', hanzi: '喜欢', pinyin: 'Xǐhuan', spanish: 'Gustar / Agradar', hskLevel: 'HSK1', category: 'Emociones' },
  { id: 'man_v_08', hanzi: '高兴', pinyin: 'Gāoxìng', spanish: 'Feliz / Alegre', hskLevel: 'HSK1', category: 'Emociones' },
  { id: 'man_v_09', hanzi: '容易', pinyin: 'Róngyì', spanish: 'Fácil / Sencillo', hskLevel: 'HSK2', category: 'Cualidad' },
  { id: 'man_v_10', hanzi: '准备', pinyin: 'Zhǔnbèi', spanish: 'Preparar / Disponer', hskLevel: 'HSK2', category: 'Acción' },
  { id: 'man_v_11', hanzi: '努力', pinyin: 'Nǔlì', spanish: 'Esforzado / Trabajador', hskLevel: 'HSK3', category: 'Valores' },
  { id: 'man_v_12', hanzi: '环境', pinyin: 'Huánjìng', spanish: 'Medio ambiente / Entorno', hskLevel: 'HSK3', category: 'Sociedad' },
  { id: 'man_v_13', hanzi: '文化', pinyin: 'Wénhuà', spanish: 'Cultura / Civilización', hskLevel: 'HSK3', category: 'Cultura' },
  { id: 'man_v_14', hanzi: '经济', pinyin: 'Jīngjì', spanish: 'Economía', hskLevel: 'HSK4', category: 'Economía' },
  { id: 'man_v_15', hanzi: '坚持', pinyin: 'Jiānchí', spanish: 'Perseverar', hskLevel: 'HSK4', category: 'Acción' },
  { id: 'man_v_16', hanzi: '合作', pinyin: 'Hézuò', spanish: 'Cooperación / Colaborar', hskLevel: 'HSK4', category: 'Relaciones' },
  { id: 'man_v_17', hanzi: '全面', pinyin: 'Quánmiàn', spanish: 'Integral / Exhaustivo', hskLevel: 'HSK5', category: 'Cualidad' },
  { id: 'man_v_18', hanzi: '推动', pinyin: 'Tuīdòng', spanish: 'Impulsar / Promover', hskLevel: 'HSK5', category: 'Acción' },
  { id: 'man_v_19', hanzi: '和谐', pinyin: 'Héxié', spanish: 'Armonioso / Paz social', hskLevel: 'HSK6', category: 'Filosofía' },
  { id: 'man_v_20', hanzi: '命运共同体', pinyin: 'Mìngyùn Gòngtóngtǐ', spanish: 'Comunidad de destino compartido', hskLevel: 'HSK6', category: 'Diplomacia' }
];
'''

with open('src/data/languages/mandarinVocabularyData.ts', 'w', encoding='utf-8') as f:
    f.write(vocab_content)

# Data Module
mandarin_data_content = '''import { LanguageDataManifest, CEFRLevel } from './englishData';
import { MANDARIN_LESSONS, MANDARIN_LESSONS_BY_LEVEL } from './mandarinLessons';
import { MANDARIN_QUESTIONS_BANK, MANDARIN_QUESTIONS_BY_LEVEL } from './mandarinQuestions';
import { MANDARIN_VERBS_CATALOGUE, MANDARIN_VERBS_BY_LEVEL } from './mandarinVerbs';
import { MANDARIN_TONES_DATA, MANDARIN_NUMBERS_DATA, MANDARIN_COLORS_DATA, MANDARIN_OBJECTS_CATEGORIES } from './mandarinBasicsData';
import { MANDARIN_VOCABULARY_CORPUS } from './mandarinVocabularyData';

export const MANDARIN_LANGUAGE_DATA: LanguageDataManifest = {
  languageId: 'mandarin',
  languageName: 'Mandarín (Pǔtōnghuà)',
  nativeName: '普通话 / 现代标准汉语',
  flagEmoji: '🇸🇻🇨🇳',
  description: 'Curso integral de Chino Mandarín Estándar (Pǔtōnghuà) adaptado para hispanohablantes salvadoreños, con especial reconocimiento a la comunidad china-salvadoreña y sus lazos culturales.',
  totalLessons: 120,
  totalQuestions: 300,
  totalVerbs: 100,
  curriculum: MANDARIN_LESSONS,
  curriculumByLevel: MANDARIN_LESSONS_BY_LEVEL,
  questions: MANDARIN_QUESTIONS_BANK,
  questionsByLevel: MANDARIN_QUESTIONS_BY_LEVEL,
  verbs: MANDARIN_VERBS_CATALOGUE,
  verbsByLevel: MANDARIN_VERBS_BY_LEVEL,
  basics: {
    tones: MANDARIN_TONES_DATA,
    numbers: MANDARIN_NUMBERS_DATA,
    colors: MANDARIN_COLORS_DATA,
    objects: MANDARIN_OBJECTS_CATEGORIES
  },
  vocabulary: MANDARIN_VOCABULARY_CORPUS,
  variants: [
    {
      code: 'PUTONGHUA',
      name: 'Mandarín Estándar Simplificado (Pǔtōnghuà)',
      flag: '🇨🇳',
      description: 'El estándar oficial nacional de China continental, sistema educativo y negocios internacionales.'
    },
    {
      code: 'TRADITIONAL',
      name: 'Chino Tradicional (Fántǐzì / Diáspora Cantonesa)',
      flag: '🇭🇰',
      description: 'La escritura milenaria preservada en Taiwán, Hong Kong y en la memoria histórica de las primeras familias chinas en El Salvador.'
    }
  ],
  comparativeRules: [
    {
      id: 'man_rule_01',
      title: 'Gramática Analítica sin Conjugaciones',
      summary: 'El orden de palabras determina la función sintáctica',
      usRule: 'Los verbos nunca se conjugan; no hay desinencias de persona ni de tiempo flexivo.',
      ukRule: 'En español salvadoreño conjugamos verbos según el tiempo (como, comí, comeré, comería).',
      examples: [
        {
          us: 'Wǒ chī fàn (Como / comí / comeré arroz - el tiempo lo aclara el adverbio temporal o la partícula 了).',
          uk: 'Wǒ zuótiān chī fàn (Ayer comí arroz - zuótiān aclara que fue ayer).',
          explanation: 'La simplicidad morfológica se compensa con un orden sintáctico muy estricto.'
        }
      ]
    },
    {
      id: 'man_rule_02',
      title: 'El Tiempo Antes del Verbo (Regla S-T-V-O)',
      summary: 'La ley de ordenamiento temporal en chino',
      usRule: 'El complemento de tiempo se ubica obligatoriamente antes del verbo: Wǒ míngtiān qù.',
      ukRule: 'En español salvadoreño solemos colocar el tiempo al final: "Voy a ir mañana".',
      examples: [
        {
          us: 'Wǒ míngtiān qù Běijīng. (Correcto: Sujeto + Tiempo + Verbo + Destino).',
          uk: '*Wǒ qù Běijīng míngtiān. (Incorrecto: Error típico por traducir directo del español).',
          explanation: 'En chino, el marco temporal delimita la escena antes de que ocurra la acción.'
        }
      ]
    },
    {
      id: 'man_rule_03',
      title: 'Clasificadores Nominales Obligatorios',
      summary: 'No se puede contar sustantivos directamente',
      usRule: 'Siempre se requiere intercalar un clasificador entre número y nombre: liǎng běn shū.',
      ukRule: 'En español decimos directamente "dos libros" o "tres personas" sin clasificador intermedio.',
      examples: [
        {
          us: 'Sān gè rén (Tres personas - clasificador universal gè 个).',
          uk: 'Liǎng běn shū (Dos libros - clasificador de volúmenes encuadernados běn 本).',
          explanation: 'Cada familia de sustantivos tiene un clasificador que describe su forma geométrica o cualidad.'
        }
      ]
    }
  ]
};
'''

with open('src/data/languages/mandarinData.ts', 'w', encoding='utf-8') as f:
    f.write(mandarin_data_content)

print("Mandarín (Pǔtōnghuà) generado al 100%.")
